define("app/data/tweet_actions", ["module", "require", "exports", "core/component", "app/data/with_data"], function(module, require, exports) {
    function tweetActions() {
        this.defaultAttrs({
            successFromEndpoints: {
                destroy: "dataDidDeleteTweet",
                retweet: "dataDidRetweet",
                favorite: "dataDidFavoriteTweet",
                unretweet: "dataDidUnretweet",
                unfavorite: "dataDidUnfavoriteTweet",
                report: "dataDidReportTweet",
                pin: "dataDidUserPinTweet",
                unpin: "dataDidUserUnpinTweet"
            },
            errorsFromEndpoints: {
                destroy: "dataFailedToDeleteTweet",
                retweet: "dataFailedToRetweet",
                favorite: "dataFailedToFavoriteTweet",
                unretweet: "dataFailedToUnretweet",
                unfavorite: "dataFailedToUnfavoriteTweet",
                report: "dataFailedToReportTweet",
                pin: "dataFailedToUserPinTweet",
                unpin: "dataFailedToUserUnpinTweet"
            }
        }), this.takeAction = function(a, b, c) {
            var d = function(b) {
                b && b.message && this.trigger("uiShowMessage", {
                    message: b.message
                }), this.trigger(this.attr.successFromEndpoints[a], b), b.profile_stats && this.trigger("dataGotProfileStats", {
                    stats: b.profile_stats
                }), b.tweet_stats && this.trigger("dataGotTweetStats", {
                    stats: b.tweet_stats
                })
            }, e;
            (a === "favorite" || a === "retweet") && "retweetId"in c ? e = {
                id: c.retweetId
            } : a == "report" ? e = {
                tweet_id: c.tweetId,
                user_id: c.userId,
                screen_name: c.screenName,
                block_user: c.blockUser,
                report_type: c.reportType
            } : e = {
                id: c.id
            }, c.tweetStatCount && (e.tweet_stat_count = c.tweetStatCount), c.impressionId && (e.impression_id = c.impressionId, c.disclosureType && (e.earned = c.disclosureType == "earned")), c.featureContext && (e.feature_context = c.featureContext);
            var f = {
                destroy: "DELETE",
                unretweet: "DELETE"
            };
            this.JSONRequest({
                url: "/i/tweet/" + a,
                data: e,
                eventData: c,
                success: d.bind(this),
                error: this.attr.errorsFromEndpoints[a],
                retryIfUnavailable: !0
            }, f[a] || "POST")
        }, this.hitEndpoint = function(a) {
            return this.takeAction.bind(this, a)
        }, this.getTweet = function(a, b) {
            var c = {
                id: b.id
            };
            b.modal && (c.modal = b.modal), this.get({
                url: "/i/tweet/html",
                data: c,
                eventData: b,
                success: "dataGotTweet",
                error: "dataFailedToGetTweet"
            })
        }, this.after("initialize", function() {
            this.on("uiDidRetweet", this.hitEndpoint("retweet")), this.on("uiDidUnretweet", this.hitEndpoint("unretweet")), this.on("uiDidDeleteTweet", this.hitEndpoint("destroy")), this.on("uiDidFavoriteTweet", this.hitEndpoint("favorite")), this.on("uiDidUnfavoriteTweet", this.hitEndpoint("unfavorite")), this.on("uiDidBlockOrReport", this.hitEndpoint("report")), this.on("uiGetTweet", this.getTweet), this.on("uiDidUserPinTweet", this.hitEndpoint("pin")), this.on("uiDidUserUnpinTweet", this.hitEndpoint("unpin"))
        })
    }
    var defineComponent = require("core/component"), withData = require("app/data/with_data"), TweetActions = defineComponent(tweetActions, withData);
    module.exports = TweetActions
});
define("app/utils/scale_animation_time", ["module", "require", "exports", "app/utils/params"], function(module, require, exports) {
    var params = require("app/utils/params");
    module.exports = function(b) {
        var c = params.fromQuery(location).multiplier, d = DEBUG.multiplier || c || 1;
        return b * d
    }
});
define("app/ui/expando/with_expanding_containers", ["module", "require", "exports", "app/utils/scale_animation_time"], function(module, require, exports) {
    function withExpandingContainers() {
        this.MARGIN_ANIMATION_SPEED = 85, this.DETACHED_MARGIN = 8, this.defaultAttrs({
            openClass: "open",
            openSelector: ".open",
            afterExpandedClass: "after-expanded",
            beforeExpandedClass: "before-expanded",
            marginBreaking: !0
        }), this.flipClassState = function(a, b, c) {
            a.filter("." + b).removeClass(b).addClass(c)
        }, this.fixMarginForAdjacentItem = function(a) {
            $(a.target).next().filter(this.attr.openSelector).css("margin-top", this.DETACHED_MARGIN).prev().addClass(this.attr.beforeExpandedClass)
        }, this.enterDetachedState = function(a, b, c) {
            var d = a.prev(), e = a.next();
            a.addClass(this.attr.openClass), this.attr.marginBreaking && a.animate({
                marginTop: d.length ? this.DETACHED_MARGIN: 0,
                marginBottom: e.length ? this.DETACHED_MARGIN: 0
            }, {
                duration: b ? 0: scaleAnimationTime(this.MARGIN_ANIMATION_SPEED),
                complete: c
            }), d.addClass(this.attr.beforeExpandedClass), e.addClass(this.attr.afterExpandedClass)
        }, this.exitDetachedState = function(a, b) {
            var c = function() {
                a.prev().removeClass(this.attr.beforeExpandedClass).end().next().removeClass(this.attr.afterExpandedClass), a.css({
                    marginTop: "",
                    marginBottom: ""
                })
            }.bind(this);
            a.removeClass(this.attr.openClass), this.attr.marginBreaking ? a.animate({
                marginTop: 0,
                marginBottom: 0
            }, {
                duration: b ? 0: scaleAnimationTime(this.MARGIN_ANIMATION_SPEED),
                complete: c
            }) : c()
        }, this.after("initialize", function() {
            this.on("uiHasInjectedTimelineItem uiShouldFixMargins", this.fixMarginForAdjacentItem)
        })
    }
    var scaleAnimationTime = require("app/utils/scale_animation_time");
    module.exports = withExpandingContainers
});
define("app/ui/expando/expando_helpers", ["module", "require", "exports"], function(module, require, exports) {
    var SPEED_COEFFICIENT = 105, expandoHelpers = {
        buildExpandoStruct: function(a) {
            var b = a.$tweet, c = b.hasClass(a.originalClass), d = a.preexpanded, e = c ? b.closest(a.containingSelector): b, f = c ? e.get(0): b.closest("li").get(0), g = b.closest(a.expansionSelector, f).get(0), h = g ? $(g): $(), i = e.closest("[data-item-type]").attr("data-item-type"), j = {
                $tweet: b,
                $container: e,
                $scaffold: h,
                $ancestors: $(),
                $descendants: $(),
                auto_expanded: b.hasClass("auto-expanded"),
                isTopLevel: c,
                originalHeight: null,
                animating: !1,
                preexpanded: d,
                cardsForward: e.hasClass("cards-forward"),
                skipAnimation: a.skipAnimation,
                open: b.hasClass(a.openedTweetClass)&&!d,
                itemType: i
            };
            return j
        },
        guessGoodSpeed: function() {
            var a = Math.max.apply(Math, arguments);
            return Math.round(.35 * Math.log(a) * SPEED_COEFFICIENT)
        },
        getNaturalHeight: function(a) {
            var b = a.height(), c = a.height("auto").height();
            return a.height(b), c
        },
        closeAllButPreserveScroll: function(a) {
            var b = a.$scope.find(a.openSelector);
            if (!b.length)
                return !1;
            var c = $(window).scrollTop(), d = expandoHelpers.firstVisibleItemBelow(a.$scope, a.itemSelector, c);
            if (!d ||!d.length)
                return !1;
            var e = d.offset().top;
            b.filter(function(b, c) {
                var d = $(c).closest(a.itemSelector);
                return expandoHelpers.isCondensedTweetbox(d, a.condensedTweetboxSelector)
            }).each(a.callback);
            var f = d.offset().top, g = e - f;
            return $(window).scrollTop(c - g), g
        },
        firstVisibleItemBelow: function(a, b, c) {
            var d;
            return a.find(b).each(function() {
                var a = $(this);
                if (a.offset().top >= c)
                    return d = a, !1
            }), d
        },
        isCondensedTweetbox: function(a, b) {
            return a.find(b).length > 0
        }
    };
    module.exports = expandoHelpers
});
define("app/ui/gallery/with_gallery", ["module", "require", "exports", "core/i18n"], function(module, require, exports) {
    var _ = require("core/i18n");
    module.exports = function() {
        this.defaultAttrs({
            mediaThumbnailSelector: ".media-thumbnail",
            previewClass: "is-preview"
        }), this.expandPreview = function(a) {
            var b = a.closest(this.attr.mediaThumbnailSelector);
            if (b.hasClass(this.attr.previewClass)) {
                var c = a.parents(".tweet.with-media-forward:not(.opened-tweet)");
                if (c.length)
                    return this.trigger(c, "uiExpandTweet"), !0
            }
            return !1
        }, this.getPermalinkPath = function(a) {
            return a.closest(this.attr.streamItemSelector).find(this.attr.permalinkSelector).attr("href")
        }, this.openMediaGallery = function(a) {
            a.preventDefault(), a.stopPropagation();
            var b = $(a.target).closest(this.attr.mediaThumbnailSelector);
            this.attr.disablePopups ? this.trigger("uiNavigate", {
                href: this.getPermalinkPath(b)
            }) : this.expandPreview(b) || this.trigger(a.target, "uiOpenGallery", {
                title: b.hasClass("video") ? _('Video'): _('Photo'),
                timelineSelector: this.attr.timelineSelector,
                inOverlay: this.attr.inOverlay
            });
            var c = b.closest("[data-impression-id]");
            c.length && (c.attr("data-embedded-media-logged", !0), this.trigger("uiEmbeddedMedia", {
                impressionId: c.data("impression-id"),
                disclosureType: c.data("disclosure-type")
            })), this.trigger("uiMediaThumbnailClick", {
                url: b.attr("data-url"),
                mediaType: b.hasClass("video") ? "video": "photo"
            })
        }, this.after("initialize", function() {
            this.on("click", {
                mediaThumbnailSelector: this.openMediaGallery
            })
        })
    }
});
define("app/ui/gallery/gallery_opener", ["module", "require", "exports", "core/component", "app/ui/gallery/with_gallery"], function(module, require, exports) {
    var defineComponent = require("core/component"), withGallery = require("app/ui/gallery/with_gallery");
    module.exports = defineComponent(withGallery)
});
define("app/ui/with_viewer_follow_state", ["module", "require", "exports"], function(module, require, exports) {
    function withViewerFollowState() {
        this.updateYouFollow = function(a, b) {
            this.$node.find("[data-user-id=" + a + "][data-you-follow]").attr("data-you-follow", b)
        }, this.updateYouBlock = function(a, b) {
            this.$node.find("[data-user-id=" + a + "][data-you-block]").attr("data-you-block", b)
        }, this.setViewerFollowState = function(a) {
            return function(b, c) {
                this.updateYouFollow(c.userId, a)
            }
        }, this.setViewerBlockState = function(a) {
            return function(b, c) {
                this.updateYouBlock(c.userId, a)
            }
        }, this.onFollowStateChange = function(a, b) {
            var c = b.userId, d = b.newState;
            d == "following" ? (this.updateYouFollow(c, !0), this.updateYouBlock(c, !1)) : d == "not-following" ? (this.updateYouFollow(c, !1), this.updateYouBlock(c, !1)) : d == "blocked" && (this.updateYouFollow(c, !1), this.updateYouBlock(c, !0))
        }, this.after("initialize", function() {
            this.on(document, "uiFollowAction", this.setViewerFollowState(!0)), this.on(document, "uiUnfollowAction uiBlockAction uiReportSpamAction uiDidTriggerBlockingAction", this.setViewerFollowState(!1)), this.on(document, "uiBlockAction uiReportSpamAction uiDidTriggerBlockingAction", this.setViewerBlockState(!0)), this.on(document, "dataFollowStateChange", this.onFollowStateChange)
        })
    }
    module.exports = withViewerFollowState
});
define("app/ui/tweets", ["module", "require", "exports", "core/component", "app/ui/with_user_actions", "app/ui/gallery/with_gallery", "app/ui/with_item_actions", "app/ui/with_viewer_follow_state"], function(module, require, exports) {
    var defineComponent = require("core/component"), withUserActions = require("app/ui/with_user_actions"), withGallery = require("app/ui/gallery/with_gallery"), withItemActions = require("app/ui/with_item_actions"), withViewerFollowState = require("app/ui/with_viewer_follow_state");
    module.exports = defineComponent(withUserActions, withGallery, withItemActions, withViewerFollowState)
});
define("app/ui/tweet_injector", ["module", "require", "exports", "core/component"], function(module, require, exports) {
    function tweetInjector() {
        this.defaultAttrs({
            descendantClass: "descendant",
            descendantScribeContext: "replies",
            tweetSelector: ".tweet"
        }), this.insertTweet = function(a, b) {
            if (!b.tweet_html)
                return;
            var c = this.$node.closest(".permalink");
            c.length && (c.addClass("has-replies"), this.$node.closest(".replies-to").removeClass("hidden"));
            var d = $(b.tweet_html);
            d.find(this.attr.tweetSelector).addClass(this.attr.descendantClass).attr("data-component-context", this.attr.descendantScribeContext);
            var e;
            this.attr.guard(b) && (e = this.$node.find(".view-more-container"), e.length ? d.insertBefore(e.closest("li")) : this.$node.append(d), this.trigger(d, "uiTweetInserted", b))
        }, this.after("initialize", function() {
            this.on(document, "dataTweetSuccess", this.insertTweet)
        })
    }
    var defineComponent = require("core/component");
    module.exports = defineComponent(tweetInjector)
});
define("app/ui/expando/with_expanding_social_activity", ["module", "require", "exports", "app/ui/expando/expando_helpers", "core/i18n", "app/ui/gallery/gallery_opener", "app/utils/tweet_helper", "app/ui/tweets", "app/ui/tweet_injector", "app/utils/scale_animation_time"], function(module, require, exports) {
    function withExpandingSocialActivity() {
        var a = '<div class="inline-reply-tweetbox swift"></div>';
        this.defaultAttrs({
            animating: "animating",
            socialProofSelector: ".js-tweet-stats-container",
            inlineReplyTweetBoxFormSelector: ".inline-reply-tweetbox .tweet-form",
            inlineReplyTweetBoxFormCloneSrcSelector: "#inline-reply-tweetbox .tweet-form",
            inlineReplyTweetboxSelector: ".inline-reply-tweetbox",
            inlineReplyUserImageSelector: ".inline-reply-user-image",
            parentStreamItemSelector: ".stream-item",
            viewMoreContainerSelector: ".view-more-container",
            ancestorsSelector: ".ancestor-items>li",
            descendantsSelector: ".tweets-wrapper>li"
        }), this.calculateMargins = function(a) {
            var b, c, d = 0, e = 0;
            a.$ancestors.length && (c = a.$ancestors.first(), d = Math.abs(parseInt(c.css("marginTop"), 10)), d || (d = a.$tweet.offset().top - c.offset().top));
            var f, g, h;
            return a.$descendants.length && (f = a.$descendants.last(), e = Math.abs(parseInt(f.css("marginBottom"), 10)), e || (b = a.$tweet.outerHeight(), g = f.outerHeight(), h = f.offset().top, e = h + g - (b + a.$tweet.offset().top))), {
                top: d,
                bottom: e
            }
        }, this.animateScaffoldHeight = function(a) {
            var b = a.expando, c = a.marginTop, d = a.marginBottom, e = b.$ancestors.length, f = b.$descendants.length, g;
            a.noAnimation ||!b.open&&!b.animating ? g = 0 : e || f ? g = a.speed : g = expandoHelpers.guessGoodSpeed(Math.abs(b.$scaffold.height() - a.height));
            var h = scaleAnimationTime(g), i = 1;
            e && i++, f && i++;
            var j = function() {
                i--, i == 0 && (b.animating=!1, e && b.$ancestors.first().css("marginTop", ""), f && b.$descendants.last().css("marginBottom", ""), a.complete && a.complete())
            }.bind(this);
            b.$scaffold.animate({
                height: a.height
            }, {
                duration: h,
                complete: j
            }), e && b.$ancestors.first().animate({
                marginTop: c
            }, {
                duration: h,
                step: a.stepFn,
                complete: j
            }), f && b.$descendants.last().animate({
                marginBottom: d
            }, {
                duration: h,
                complete: j
            })
        }, this.animateTweetOpen = function(a) {
            var b = a.expando, c = expandoHelpers.getNaturalHeight(b.$scaffold), d = this.calculateMargins(b), e = a.complete;
            b.animating=!0, b.$ancestors.length && b.$ancestors.first().css("margin-top", - d.top), b.$descendants.length && b.$descendants.last().css("margin-bottom", - d.bottom), this.animateScaffoldHeight({
                expando: b,
                height: c,
                noAnimation: a.noAnimation,
                speed: expandoHelpers.guessGoodSpeed(d.top, d.bottom),
                marginTop: 0,
                marginBottom: 0,
                complete: function() {
                    b.$scaffold.height("auto"), e && e()
                }.bind(this)
            })
        }, this.animateTweetClosed = function(a) {
            var b = a.expando, c = this.calculateMargins(b), d = a.complete;
            b.animating=!0, this.animateScaffoldHeight({
                expando: b,
                height: b.originalHeight,
                noAnimation: a.noAnimation,
                speed: expandoHelpers.guessGoodSpeed(c.top, c.bottom),
                stepFn: a.stepFn,
                marginTop: - c.top,
                marginBottom: - c.bottom,
                complete: function() {
                    b.$scaffold.height(b.originalHeight), d && d()
                }
            })
        }, this.initTweetsInConversation = function(a) {
            if (a.$container.closest(this.attr.parentStreamItemSelector).length)
                if (a.$scaffold.find(this.attr.inlineReplyTweetboxSelector).length) {
                    var b = {
                        screenName: this.attr.screenName,
                        loggedIn: this.attr.loggedIn,
                        itemType: a.itemType
                    };
                    Tweets.attachTo(a.$scaffold, b), this.attr.loggedIn && TweetInjector.attachTo(a.$scaffold, {
                        guard: function(b) {
                            var c = a.$tweet.hasClass("conversation-ancestor");
                            return !c && b.in_reply_to_status_id == a.$tweet.attr("data-tweet-id")
                        }
                    })
                } else 
                    a.$scaffold.find(".media-thumbnail").length > 0 && GalleryOpener.attachTo(a.$scaffold)
        }, this.prepareConversationEntrance = function(a, b) {
            var c = a.data("expando");
            if (!c)
                return;
            c.$tweet.data("is-reply-to") || (b.ancestors = "");
            var d = $(b.ancestors), e = $(b.descendants);
            c.$ancestors = d.find(this.attr.ancestorsSelector), c.$descendants = e.find(this.attr.descendantsSelector), c.$scaffold.queue(function(f) {
                this.animateConversationEntrance(c, a, b, d, e), f()
            }.bind(this))
        }, this.animateConversationEntrance = function(a, b, c, d, e) {
            a.$scaffold.height(a.$scaffold.outerHeight());
            var f = a.$ancestors.length || a.$descendants.length;
            f && this.trigger(a.$tweet, "uiRenderingExpandedConversation"), this.hasConversationModule(b) || a.$scaffold.prepend(a.$ancestors), a.$scaffold.append(a.$descendants);
            var g = e.find(this.attr.viewMoreContainerSelector), h;
            g.length && a.$container.hasClass(this.attr.openClass) && (h = $("<li/>"), g.appendTo(h), a.$container.hasClass(this.attr.fullyExpandedConversationClass) || g.addClass("view-more-while-expanding"), a.$scaffold.append(h), a.$descendants = a.$descendants.add(h));
            var i = a.$scaffold.find(this.attr.inlineReplyTweetBoxFormSelector);
            this.animateTweetOpen({
                expando: a,
                complete: function() {
                    a.open=!0, a.$scaffold.removeClass(this.attr.animating), a.$scaffold.css("height", "auto")
                }.bind(this)
            }), this.initTweetsInConversation(a), f && this.trigger(a.$tweet, "uiExpandedConversationRendered")
        }, this.renderConversation = function(a, b) {
            var c = $(a.target), d = c.data("expando");
            if (!d)
                return;
            d.$scaffold.queue(function(a) {
                this.prepareConversationEntrance(c, b), a()
            }.bind(this))
        }, this.renderInlineTweetbox = function(b, c) {
            if (!this.attr.loggedIn)
                return;
            b.$tweet.after(a);
            var d, e = b.$scaffold.find(this.attr.inlineReplyTweetBoxFormSelector);
            e.length === 0 && (e = $(this.attr.inlineReplyTweetBoxFormCloneSrcSelector).clone(), d = "tweet-box-reply-to-" + b.$tweet.attr("data-tweet-id"), e.find("textarea").attr("id", d), e.find("label").attr("for", d), b.$scaffold.find(this.attr.inlineReplyTweetboxSelector).empty(), e.appendTo(b.$scaffold.find(this.attr.inlineReplyTweetboxSelector)));
            var f = tweetHelper.extractMentionsForReply(b.$tweet, this.attr.screenName), g = "@" + f.join(" @") + " ";
            c = c || {}, c.screenNames = f;
            var h = {
                condensable: !0,
                defaultText: g,
                condensedText: _('Reply to {{screen_names}}', {
                    screen_names: g
                }),
                inReplyToTweetData: c,
                inReplyToStatusId: b.$tweet.attr("data-tweet-id"),
                impressionId: b.$tweet.attr("data-impression-id"),
                disclosureType: b.$tweet.attr("data-disclosure-type"),
                eventData: {
                    scribeContext: {
                        component: "tweet_box_inline_reply"
                    }
                }
            };
            c.itemType && (h.itemType = c.itemType), this.trigger(e, "uiInitTweetbox", h);
            var i = b.$tweet.attr("focus-reply");
            return b.$tweet.removeAttr("focus-reply"), i && e.length && this.trigger(e, "uiExpandFocus"), e
        }, this.renderSocialProof = function(a, b) {
            var c = $(a.target).find(this.attr.socialProofSelector);
            c.length && (c.html(b.social_proof), $(a.target).trigger("uiHasRenderedTweetSocialProof"))
        }, this.after("initialize", function() {
            this.on(document, "dataTweetConversationResult", this.renderConversation), this.on(document, "dataTweetSocialProofResult", this.renderSocialProof)
        })
    }
    var expandoHelpers = require("app/ui/expando/expando_helpers"), _ = require("core/i18n"), GalleryOpener = require("app/ui/gallery/gallery_opener"), tweetHelper = require("app/utils/tweet_helper"), Tweets = require("app/ui/tweets"), TweetInjector = require("app/ui/tweet_injector"), scaleAnimationTime = require("app/utils/scale_animation_time");
    module.exports = withExpandingSocialActivity
});
define("app/ui/expando/with_expanding_conversations", ["module", "require", "exports", "app/utils/scale_animation_time", "app/ui/expando/expando_helpers", "core/i18n"], function(module, require, exports) {
    var scaleAnimationTime = require("app/utils/scale_animation_time"), expandoHelpers = require("app/ui/expando/expando_helpers"), _ = require("core/i18n");
    module.exports = function() {
        var b = '<button class="Icon Icon--collapseTweets Icon--medium conversation-collapse-btn" type="button"><span class="visuallyhidden">' + _('Close conversation') + "</span></button>";
        this.defaultAttrs({
            missingTweetsLinkSelector: "a.missing-tweets-link",
            missingTweetsBarSelector: ".missing-tweets-bar",
            focalTweetSelector: ".original-tweet",
            openedTweetSelector: ".opened-tweet",
            topLevelStreamItemSelector: ".stream-item:not(.conversation-tweet-item)",
            conversationTweetClass: "conversation-tweet",
            conversationCollapseSelector: ".conversation-collapse-btn",
            detachedConversationClass: "detached-conversation",
            fullyExpandedConversationClass: "fully-expanded-conversation",
            expandingConversationClass: "expanding-conversation",
            selectedSelector: ".selected-stream-item",
            animationTime: 300
        }), this.around("handleTweetExpand", function(a, b, c) {
            this.shouldHandleConversationExpansionOrCollapse(b, c) || a(b, c)
        }), this.handleExpandConversationAndLoadMissingTweets = function(a) {
            a.preventDefault();
            var b = this.streamItemFromEvent(a), c = this.getFocalPoint(b);
            this.expandConversationAndLoadMissingTweets(b, c)
        }, this.expandConversationAndLoadMissingTweets = function(a, b) {
            var c = this.expandOrCollapseConversation({
                $focalPoint: b,
                $streamItem: a
            });
            this.trigger(b, "uiNeedsConversationAncestors"), this.collapseButtonEnabled && this.showCollapseButton(a)
        }, this.collapseConversationHandler = function(a) {
            var b = this.streamItemFromEvent(a);
            this.collapseConversation(b)
        }, this.handleTweetCollapse = function(a) {
            var b = this.streamItemFromEvent(a);
            this.restoreIfAllTweetsCollapsed(b)
        }, this.restoreIfAllTweetsCollapsed = function(a) {
            var b = a.find(this.attr.openedTweetSelector).length;
            b === 0 && this.restoreOriginalConversation(a)
        }, this.collapseConversation = function(a) {
            this.isConversationExpanded(a) && (a.find(this.attr.openedTweetSelector).each(function(a, b) {
                this.expandTweet($(b))
            }.bind(this)), this.restoreIfAllTweetsCollapsed(a))
        }, this.collapseAllConversations = function() {
            this.select("conversationModuleSelector").each(function(a, b) {
                var c = $(b).closest(this.attr.topLevelStreamItemSelector);
                this.collapseConversation(c)
            }.bind(this))
        }, this.expandOrCollapseConversation = function(a) {
            var b = a.$tweetToExpand, c = a.$focalPoint, d = a.$streamItem;
            if (!this.isConversationExpanded(d)) {
                var e = {
                    $scaffold: this.getScaffold(c),
                    $container: d,
                    $tweet: c,
                    itemType: this.attr.itemType,
                    $ancestors: $(),
                    $descendants: $()
                };
                if (!b ||!b.is(c))
                    c.data("expando", e), this.trigger(c, "uiNeedsConversationDescendants");
                return this.detachConversation(c, d), this.renderInlineTweetbox({
                    $tweet: c,
                    $scaffold: this.getScaffold(c)
                }, a.eventData), {
                    expanded: !0
                }
            }
            return b && b.hasClass(this.attr.openedTweetClass) ? (this.collapseConversation(d), {
                collapsed: !0
            }) : {}
        }, this.handleConversationExpandOrCollapse = function(a, b, c) {
            var d = this.getFocalPoint(b);
            this.trigger(b.find(this.attr.conversationModuleSelector), "uiConversationModuleUpdated");
            var e = this.expandOrCollapseConversation({
                $tweetToExpand: a,
                $focalPoint: d,
                $streamItem: b,
                eventData: c
            });
            a.hasClass("conversation-root") && (this.trigger(d, "uiNeedsConversationAncestors"), this.collapseButtonEnabled && this.showCollapseButton(b)), a.data("expando", null), e.collapsed || this.expandTweet(a, c)
        }, this.detachConversation = function(a, b) {
            var c = function() {
                d.removeClass(this.attr.animatingClass)
            }.bind(this), d = this.getScaffold(a);
            this.enterDetachedState(b, !1, c), d.addClass(this.attr.expansionClasses), this.trigger("uiHasDetachedConversation")
        }, this.reattachConversation = function(a) {
            var b = this.getFocalPoint(a), c = this.getScaffold(b);
            c.removeClass(this.attr.expansionClasses), c.find(".descendant").closest("li").remove(), c.find(".view-more-container").closest("li").remove(), c.find(this.attr.inlineReplyTweetboxSelector).remove(), c.css("height", "auto"), c.removeClass(this.attr.expansionClasses), b.data("expando", null), this.exitDetachedState(a), this.hideCollapseButton(a), this.trigger("uiHasReattachedConversation")
        }, this.showCollapseButton = function(a) {
            a.find(this.attr.conversationCollapseSelector).stop(!0, !0), a.addClass(this.attr.detachedConversationClass), a.prepend(b), a.find(this.attr.conversationCollapseSelector).fadeIn(scaleAnimationTime(this.attr.animationTime))
        }, this.hideCollapseButton = function(a) {
            a.find(this.attr.conversationCollapseSelector).fadeOut(scaleAnimationTime(this.attr.animationTime), function() {
                a.removeClass(this.attr.detachedConversationClass), a.find(this.attr.conversationCollapseSelector).remove()
            }.bind(this))
        }, this.shouldHandleConversationExpansionOrCollapse = function(a, b) {
            var c = a.closest(this.attr.containingItemSelector);
            if (a.hasClass(this.attr.conversationTweetClass) || a.hasClass(this.attr.hasConversationModuleClass))
                return this.handleConversationExpandOrCollapse(a, c, b), !0
        }, this.insertAdditionalAncestors = function(a, b) {
            var c = this.streamItemFromEvent(a), d = $(b.ancestors);
            d = d.find(this.attr.ancestorsSelector);
            var e = $(a.target), f = e.data("expando"), g = f && f.$container.hasClass(this.attr.openClass), h = c.hasClass(this.attr.expandingConversationClass);
            if (!g || h)
                return;
            c.addClass(this.attr.expandingConversationClass);
            var i = c.find(".conversation-tweet-item");
            d.addClass("conversation-tweet-item remove-on-restore"), d.find(".ancestor").removeClass("ancestor").addClass("conversation-tweet");
            var j = this.filterAncestors(d, i), k = this.getTweetId(i[0]), l = this.partitionAncestors(j, k), m = $(l[0]), n = $(l[1]);
            if (m.length > 0 || n.length > 0) {
                var o = this.getScaffold(e, f);
                o.queue(function(a) {
                    this.animateAncestorEntrance(c, o, m, n, a)
                }.bind(this))
            }
            c.find(".conversation-root").addClass("conversation-ancestor")
        }, this.prepareAnimation = function(a, b) {
            var c = this.getFocalPoint(a).parent();
            c.addClass("focal-point-animating");
            var d = a.find(".conversation-tweet-item:not(.remove-on-restore)");
            d.addClass("opaque"), b.addClass("opaque"), a.find(this.attr.conversationModuleSelector).addClass("module-animating"), a.find(this.attr.selectedSelector).addClass("selected-animating"), a.find(this.attr.viewMoreContainerSelector).addClass("view-more-animating")
        }, this.teardownAnimation = function(a, b) {
            var c = this.getFocalPoint(a).parent();
            c.removeClass("focal-point-animating"), a.find(".conversation-tweet-item:not(.remove-on-restore)").removeClass("opaque"), b && b.removeClass("opaque"), a.find(".selected-animating").removeClass("selected-animating"), a.find(this.attr.conversationModuleSelector).removeClass("module-animating").css("height", "auto"), a.find(this.attr.viewMoreContainerSelector).removeClass("view-more-animating")
        }, this.makeNewRoot = function(a) {
            a.addClass("conversation-root first-navigable-stream-item"), a.find(".tweet").addClass("conversation-root")
        }, this.makeNotRoot = function(a) {
            a.removeClass("conversation-root first-navigable-stream-item"), a.find(".tweet").removeClass("conversation-root")
        }, this.getCombinedHeight = function(a) {
            var b = 0;
            return a.each(function() {
                b += $(this).outerHeight()
            }), b
        }, this.animationTime = function(a) {
            var b = this.getCombinedHeight(a), c;
            b ? c = expandoHelpers.guessGoodSpeed(b) * 2 : c = this.attr.animationTime;
            var d = scaleAnimationTime(c);
            return d
        }, this.animateAncestorEntrance = function(a, b, c, d, e) {
            var f = function() {
                this.teardownAnimation(a, c), o.addClass("js-unselectable-stream-item").css("display", "none"), this.trigger(a.find(".conversation-tweet-item").first(), "uiSelectItem", {
                    setFocus: !0
                }), this.trigger(b, "uiConversationModuleUpdated"), a.addClass(this.attr.fullyExpandedConversationClass), a.removeClass(this.attr.expandingConversationClass), e()
            }.bind(this);
            this.prepareAnimation(a, c);
            var g = b.height(), h = a.find(".conversation-module li.conversation-root");
            h.before(c), h.after(d), d.css("opacity", "0"), c.addClass("extra-ancestor-before-root"), d.addClass("extra-ancestor-after-root");
            var i = c.add(d), j = this.getCombinedHeight(i), k = this.getCombinedHeight(c), l = this.getCombinedHeight(d), m = c.first();
            m.length && (m.css({
                marginTop: - k
            }), h.addClass("original-root"), this.makeNotRoot(h), this.makeNewRoot(m));
            var n = d.first();
            n.css({
                marginTop: - l
            });
            var o = a.find(this.attr.missingTweetsBarSelector), p = o.height();
            i.animate({
                opacity: 1
            }, {
                duration: this.animationTime(i),
                queue: !1,
                complete: f
            }), m.animate({
                marginTop: 0
            }, {
                duration: this.animationTime(i),
                queue: !1
            }), n.animate({
                marginTop: 0
            }, {
                duration: this.animationTime(i),
                queue: !1
            }), o.length && o.animate({
                marginTop: - o.height(),
                opacity: 0
            }, {
                duration: this.animationTime(i),
                queue: !1
            })
        }, this.animateAncestorExit = function(a, b, c, d) {
            var e = function() {
                this.teardownAnimation(a), h.removeClass("js-unselectable-stream-item"), this.trigger(a.find(".conversation-tweet-item").first(), "uiSelectItem", {
                    setFocus: !0
                }), this.trigger(b, "uiConversationModuleUpdated"), a.removeClass(this.attr.fullyExpandedConversationClass), a.removeClass(this.attr.expandingConversationClass), h.removeAttr("style"), this.reattachConversation(a), d()
            }.bind(this), f = c.filter(".extra-ancestor-before-root"), g = c.filter(".extra-ancestor-after-root");
            this.prepareAnimation(a, f);
            var h = a.find(this.attr.missingTweetsBarSelector), i = f.add(g), j = f.first(), k = g.first(), l = a.find(".original-root");
            j.length && (this.makeNotRoot(j), this.makeNewRoot(l)), h.css("display", "block"), i.animate({
                opacity: 0
            }, {
                duration: this.animationTime(i),
                queue: !1,
                complete: function() {
                    $(this).remove(), e()
                }
            }), j.animate({
                marginTop: - this.getCombinedHeight(f)
            }, {
                duration: this.animationTime(i),
                queue: !1
            }), k.animate({
                marginTop: - this.getCombinedHeight(g)
            }, {
                duration: this.animationTime(i),
                queue: !1
            }), h.length && h.animate({
                marginTop: 0,
                opacity: 1
            }, {
                duration: this.animationTime(i),
                queue: !1
            })
        }, this.filterAncestors = function(a, b) {
            var c = b.get().map(function(a) {
                return this.getTweetId(a)
            }.bind(this));
            return a.get().filter(function(a) {
                var b = this.getTweetId(a);
                return c.indexOf(b)==-1
            }.bind(this))
        }, this.partitionAncestors = function(a, b) {
            var c = a.filter(function(a) {
                var c = this.getTweetId(a);
                return c < b
            }.bind(this)), d = a.filter(function(a) {
                var c = this.getTweetId(a);
                return c > b
            }.bind(this));
            return [c, d]
        }, this.restoreOriginalConversation = function(a) {
            var b = a.find(".remove-on-restore");
            if (!a.hasClass(this.attr.fullyExpandedConversationClass) && b.length > 0)
                return;
            a.removeClass(this.attr.fullyExpandedConversationClass);
            if (b.length > 0) {
                var c = this.getFocalPoint(a), d = this.getScaffold(c);
                d.queue(function(c) {
                    this.animateAncestorExit(a, d, b, c)
                }.bind(this))
            } else 
                this.reattachConversation(a)
        }, this.streamItemFromEvent = function(a) {
            return $(a.target).closest(this.attr.topLevelStreamItemSelector)
        }, this.getFocalPoint = function(a) {
            return a.find(this.attr.focalTweetSelector)
        }, this.getScaffold = function(a, b) {
            return b ? b.$scaffold : a.closest(this.attr.conversationModuleSelector)
        }, this.getTweetId = function(a) {
            return $(a).find(".tweet").attr("data-tweet-id")
        }, this.isConversationExpanded = function(a) {
            return a.hasClass(this.attr.openClass)
        }, this.notifyConversationMutated = function(a, b) {
            var c = $(a.target), d = this.getScaffold(c);
            d.length && this.trigger(d, "uiConversationModuleUpdated")
        }, this.after("initialize", function() {
            this.collapseButtonEnabled=!$("body").hasClass("three-col"), this.on("dataConversationAncestorsSuccess", this.insertAdditionalAncestors), this.on("click", {
                conversationCollapseSelector: this.collapseConversationHandler,
                missingTweetsLinkSelector: this.handleExpandConversationAndLoadMissingTweets
            }), this.on("uiHasCollapsedTweet", {
                tweetSelector: this.handleTweetCollapse
            }), this.on("uiShortcutEnter", {
                missingTweetsBarSelector: this.handleExpandConversationAndLoadMissingTweets
            }), this.on("uiTweetInserted uiBeforeTweetRemoved", this.notifyConversationMutated), this.on(document, "uiWantsToCloseAllTweets", this.collapseAllConversations)
        })
    }
});
/*!
 * xdm.js – Nicolas Gallagher – MIT License
 * easyXDM – Copyright(c) 2009-2011, Øyvind Sean Kinsey, oyvind@kinsey.no – MIT License
 */
(function(a) {
    function m(a) {
        return Object.prototype.toString.call(a) === "[object Array]"
    }
    function n(a) {
        return typeof a == "undefined"
    }
    function q(b) {
        return a.xdm = j, h = b, h && (k = "xdm_" + h.replace(".", "_") + "_"), i
    }
    function r(a) {
        if (!a)
            throw new Error("url is undefined or empty");
        if (/^file/.test(a))
            throw new Error("The file:// protocol is not supported");
        var b = a.toLowerCase().match(e);
        if (b) {
            var c = b[2], d = b[3], f = b[4] || "";
            if (c === "http:" && f === ":80" || c === "https:" && f === ":443")
                f = "";
            return c + "//" + d + f
        }
        return a
    }
    function s(a) {
        if (!a)
            throw new Error("url is undefined or empty");
        a = a.replace(g, "$1/");
        if (!a.match(/^(http||https):\/\//)) {
            var b = a.substring(0, 1) === "/" ? "": location.pathname;
            b.substring(b.length - 1) !== "/" && (b = b.substring(0, b.lastIndexOf("/") + 1)), a = location.protocol + "//" + location.host + b + a
        }
        while (f.test(a))
            a = a.replace(f, "");
        return a
    }
    function t(a, b) {
        if (!b)
            throw new Error("parameters is undefined or null");
        var c = a.indexOf("#"), d = [];
        for (var e in b)
            b.hasOwnProperty(e) && d.push(e + "=" + encodeURIComponent(b[e]));
        return a + (c===-1 ? "#" : "&") + d.join("&")
    }
    function u(a, b, c) {
        var d;
        for (var e in b)
            b.hasOwnProperty(e) && (e in a ? (d = b[e], typeof d == "object" ? u(a[e], d, c) : c || (a[e] = b[e])) : a[e] = b[e]);
        return a
    }
    function v(a) {
        var c = b.cloneNode(!1);
        u(a.props, {
            frameBorder: 0,
            allowTRansparency: !0,
            scrolling: "no",
            width: "100%",
            src: t(a.remote, {
                xdm_e: r(location.href),
                xdm_c: a.channel,
                xdm_p: 1
            }),
            name: k + a.channel + "_provider",
            style: {
                margin: 0,
                padding: 0,
                border: 0
            }
        }), c.id = a.props.name, delete a.props.name;
        if (!a.container)
            throw new Error('xdm.Rpc() configuration object missing a DOM "container" property');
        return u(c, a.props), a.container.appendChild(c), a.onLoad && o(c, "load", a.onLoad), a.html && (c.contentWindow.document.open(), c.contentWindow.document.write(a.html), c.contentWindow.document.close()), a.iframe = c, c
    }
    function w(a, b) {
        typeof a == "string" && (a = [a]);
        var c, d = a.length;
        while (d--) {
            c = a[d], c = new RegExp(c.substr(0, 1) === "^" ? c : "^" + c.replace(/(\*)/g, ".$1").replace(/\?/g, ".") + "$");
            if (c.test(b))
                return !0
        }
        return !1
    }
    function x(a) {
        var b;
        a.isHost = a.isHost || n(l.xdm_p), a.props = a.props || {};
        if (!a.isHost) {
            a.channel = l.xdm_c.replace(/["'<>\\]/g, ""), a.remote = l.xdm_e.replace(/["'<>\\]/g, "");
            if (a.acl&&!w(a.acl, a.remote))
                throw new Error("Access denied for " + a.remote)
        } else 
            a.remote = s(a.remote), a.channel = a.channel || "default" + c++;
        return b = [new i.stack.PostMessageTransport(a)], b.push(new i.stack.QueueBehavior(!0)), b
    }
    function y(a) {
        var b, c, d = a.length, e = {
            incoming: function(a, b) {
                this.up.incoming(a, b)
            },
            outgoing: function(a, b) {
                this.down.outgoing(a, b)
            },
            callback: function(a) {
                this.up.callback(a)
            },
            init: function() {
                this.down.init()
            },
            destroy: function() {
                this.down.destroy()
            }
        };
        for (c = 0; c < d; c++)
            b = a[c], u(b, e, !0), c !== 0 && (b.down = a[c - 1]), c !== d - 1 && (b.up = a[c + 1]);
        return b
    }
    function z(a) {
        a.up.down = a.down, a.down.up = a.up, a.up = a.down = null
    }
    "use strict";
    var b = document.createElement("IFRAME"), c = Math.floor(Math.random() * 1e4), d = Function.prototype, e = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/, f = /[\-\w]+\/\.\.\//, g = /([^:])\/\//g, h = "", i = {}, j = a.xdm, k = "xdm_", l = function(a) {
        a = a.substring(1, a.length).split("&");
        var b = {}, c, d = a.length;
        while (d--)
            c = a[d].split("="), b[c[0]] = decodeURIComponent(c[1]);
        return b
    }(location.hash), o = function() {
        return a.addEventListener ? function(a, b, c) {
            a.addEventListener(b, c, !1)
        } : function(a, b, c) {
            a.attachEvent("on" + b, c)
        }
    }(), p = function() {
        return a.removeEventListener ? function(a, b, c) {
            a.removeEventListener(b, c, !1)
        } : function(a, b, c) {
            a.detachEvent("on" + b, c)
        }
    }();
    u(i, {
        version: "1.0.0",
        query: l,
        stack: {},
        noConflict: q
    }), i.Rpc = function(a, b) {
        var c;
        if (b.local)
            for (var d in b.local)
                b.local.hasOwnProperty(d) && (c = b.local[d], typeof c == "function" && (b.local[d] = {
                    method: c
                }));
        var e = y(x(a).concat([new i.stack.RpcBehavior(this, b), {
            callback: function(b) {
                a.onReady && a.onReady(b)
            }
        }
        ]));
        this.origin = r(a.remote), this.destroy = function() {
            e.destroy()
        }, e.init(), this.iframe = a.iframe
    }, i.stack.PostMessageTransport = function(b) {
        function g(a) {
            var d = r(a.origin), e = typeof a.data == "string";
            d === f && e && a.data.substring(0, b.channel.length + 1) === b.channel + " " && c.up.incoming(a.data.substring(b.channel.length + 1), d)
        }
        var c, d, e, f;
        return c = {
            outgoing: function(a, c, d) {
                e.postMessage(b.channel + " " + a, c || f), d && d()
            },
            destroy: function() {
                p(a, "message", g), d && (e = null, d.parentNode.removeChild(d), d = null)
            },
            init: function() {
                f = r(b.remote);
                if (b.isHost) {
                    var h = function(f) {
                        f.data === b.channel + "-ready" && ("postMessage"in d.contentWindow ? e = d.contentWindow : e = d.contentWindow.document, p(a, "message", h), o(a, "message", g), setTimeout(function() {
                            c.up.callback(!0)
                        }, 0))
                    };
                    o(a, "message", h), d = v(b)
                } else 
                    o(a, "message", g), "postMessage"in a.parent ? e = a.parent : e = a.parent.document, e.postMessage(b.channel + "-ready", f), setTimeout(function() {
                        c.up.callback(!0)
                    }, 0)
            }
        }, c
    }, i.stack.QueueBehavior = function(a) {
        function g() {
            var e;
            if (a===!0 && c.length === 0) {
                z(b);
                return 
            }
            if (d || c.length === 0 || f)
                return;
            d=!0, e = c.shift(), b.down.outgoing(e.data, e.origin, function(a) {
                d=!1, e.callback && setTimeout(function() {
                    e.callback(a)
                }, 0), g()
            })
        }
        var b, c = [], d=!0, e = "", f;
        return b = {
            init: function() {
                b.down.init()
            },
            callback: function(a) {
                d=!1;
                var c = b.up;
                g(), c.callback(a)
            },
            incoming: function(a, c) {
                b.up.incoming(a, c)
            },
            outgoing: function(a, b, d) {
                c.push({
                    data: a,
                    origin: b,
                    callback: d
                }), g()
            },
            destroy: function() {
                f=!0, b.down.destroy()
            }
        }, b
    }, i.stack.RpcBehavior = function(a, b) {
        function g(a) {
            a.jsonrpc = "2.0", c.down.outgoing(JSON.stringify(a))
        }
        function h(a, b) {
            var c = Array.prototype.slice;
            return function() {
                var d = arguments.length, h, i = {
                    method: b
                };
                d > 0 && typeof arguments[d - 1] == "function" ? (d > 1 && typeof arguments[d - 2] == "function" ? (h = {
                    success: arguments[d - 2],
                    error: arguments[d - 1]
                }, i.params = c.call(arguments, 0, d - 2)) : (h = {
                    success: arguments[d - 1]
                }, i.params = c.call(arguments, 0, d - 1)), f["" + ++e] = h, i.id = e) : i.params = c.call(arguments, 0), a.namedParams && i.params.length === 1 && (i.params = i.params[0]), g(i)
            }
        }
        function i(a, b, c, e) {
            if (!c) {
                b && g({
                    id: b,
                    error: {
                        code: - 32601,
                        message: "Procedure not found."
                    }
                });
                return 
            }
            var f, h;
            b ? (f = function(a) {
                f = d, g({
                    id: b,
                    result: a
                })
            }, h = function(a, c) {
                h = d;
                var e = {
                    id: b,
                    error: {
                        code: - 32099,
                        message: a
                    }
                };
                c && (e.error.data = c), g(e)
            }) : f = h = d, m(e) || (e = [e]);
            try {
                var i = c.method.apply(c.scope, e.concat([f, h]));
                n(i) || f(i)
            } catch (j) {
                h(j.message)
            }
        }
        var c, e = 0, f = {};
        return c = {
            incoming: function(a, c) {
                var d = JSON.parse(a), e;
                d.method ? b.handle ? b.handle(d, g) : i(d.method, d.id, b.local[d.method], d.params) : (e = f[d.id], d.error && e.error ? e.error(d.error) : e.success && e.success(d.result), delete f[d.id])
            },
            init: function() {
                if (b.remote)
                    for (var d in b.remote)
                        b.remote.hasOwnProperty(d) && (a[d] = h(b.remote[d], d));
                c.down.init()
            },
            destroy: function() {
                for (var d in b.remote)
                    b.remote.hasOwnProperty(d) && a.hasOwnProperty(d) && delete a[d];
                c.down.destroy()
            }
        }, c
    }, typeof exports == "object" ? module.exports = i : typeof provide == "function" ? provide("bower_components/xdm.js/xdm", i) : typeof define == "function" && define.amd ? define(function() {
        return i
    }) : a.xdm = i
})(window)
define("app/ui/with_card", ["module", "require", "exports", "core/compose", "core/utils", "app/data/with_card_metadata", "bower_components/xdm.js/xdm", "app/ui/with_interaction_data"], function(module, require, exports) {
    var compose = require("core/compose"), utils = require("core/utils"), withCardMetadata = require("app/data/with_card_metadata"), xdm = require("bower_components/xdm.js/xdm"), withInteractionData = require("app/ui/with_interaction_data");
    module.exports = function() {
        compose.mixin(this, [withCardMetadata, withInteractionData]), this.defaultAttrs({
            cardWrapperClass: ".js-macaw-cards-iframe-container",
            tweetIdData: "tweet-id",
            advertiserIdData: "advertiser-id",
            itemType: "tweet",
            profileHoversEnabled: !1
        }), this.DEFAULT_SCRIBE_ELEMENT = "platform_card", this.DEFAULT_SCRIBE_ACTION = "undefined";
        var b = {};
        this.channels = {
            get: function() {
                return b
            },
            set: function(a) {
                b = a
            }
        }, this.createCard = function(c, d, e) {
            var f, g = this._getCardWrapper(c), h = this._getTweetId(c), i = this._getAdvertiserId(c), j, k, l = {
                element: this.DEFAULT_SCRIBE_ELEMENT,
                component: "tweet"
            }, m = {
                impressionId: c.data("impression-id"),
                disclosureType: c.data("disclosure-type")
            };
            return g && g.length&&!b[h] && (e ? j = g.data("autoplay-src") : j = g.data("src"), f = new xdm.Rpc({
                remote: j,
                container: g[0],
                props: {
                    height: "0",
                    style: {
                        display: "block"
                    }
                },
                onReady: function() {
                    typeof d == "function" && d()
                }
            }, {
                local: k = this.localMethods = {
                    localMethodNames: function() {
                        return {
                            callMethodByName: !0,
                            cancelFollowUser: !0,
                            favoriteStatus: !0,
                            followAdvertiser: !0,
                            followUser: !0,
                            logPromotedContentEvent: !0,
                            openLeadGenConfirmDialog: !0,
                            openLink: !0,
                            openLinkNoScribe: !0,
                            openPhoto: !0,
                            openPhotoNoScribe: !0,
                            openProfile: !0,
                            resizeCard: !0,
                            retweetStatus: !0,
                            scribe: !0,
                            shareStatus: !0,
                            statusComposeTweet: !0,
                            unblockUser: !0,
                            unfollowAdvertiser: !0,
                            unfollowUser: !0
                        }
                    }.bind(this),
                    callMethodByName: function() {
                        var a = arguments[0], b = Array.prototype.slice.call(arguments, 1);
                        return k[a].method.apply(this, b)
                    }.bind(this),
                    openLeadGenConfirmDialog: function(a) {
                        a = utils.merge(a, m, {
                            tweetId: c.data(this.attr.tweetIdData)
                        }), this.trigger("uiOpenLeadGenConfirmDialog", a)
                    }.bind(this),
                    openLink: function(a) {
                        this.trigger("uiCardUrlClick", m), this.scribeCardInteraction("open_link", this._getCardDataWithScribeContext(g, l))
                    }.bind(this),
                    openLinkNoScribe: function(a) {
                        this.trigger("uiCardUrlClick", m)
                    }.bind(this),
                    openPhoto: function(a) {
                        var b, c = $("body"), d;
                        a && Array.isArray(a.photos) && (b = $("<div/>"), b.addClass("media-thumbnails hidden"), a.photos.forEach(function(a, c) {
                            var e = $("<span/>");
                            e.attr("data-status-id", h), e.attr("data-url", a.imageUrl), e.attr("data-resolved-url", a.imageUrl), e.attr("data-resolved-url-large", a.imageUrl), e.addClass("media-thumbnail js-nav"), e.appendTo(b), a.wasClicked && (d = e)
                        }), b.appendTo(c), this.trigger(d, "uiOpenGallery"), this.trigger("uiEmbeddedMedia", m), this.on(document, "uiGalleryClosed", b.remove), this.scribeCardInteraction("click", this._getCardDataWithScribeContext(g, l)))
                    }.bind(this),
                    openPhotoNoScribe: function(a) {
                        var b, c = $("body"), d;
                        a && Array.isArray(a.photos) && (b = $("<div/>"), b.addClass("media-thumbnails hidden"), a.photos.forEach(function(a, c) {
                            var e = $("<span/>");
                            e.attr("data-status-id", h), e.attr("data-url", a.imageUrl), e.attr("data-resolved-url", a.imageUrl), e.attr("data-resolved-url-large", a.imageUrl), e.addClass("media-thumbnail js-nav"), e.appendTo(b), a.wasClicked && (d = e)
                        }), b.appendTo(c), this.trigger(d, "uiOpenGallery"), this.trigger("uiEmbeddedMedia", m), this.on(document, "uiGalleryClosed", b.remove))
                    }.bind(this),
                    openProfile: function(a) {
                        a = utils.merge({
                            userId: a.userId,
                            userScreenName: a.userScreenName,
                            scribeContext: l
                        }, this.getCardDataFromTweet(g), m), this.attr.profileHoversEnabled ? (this.trigger("uiShowProfileNewWindow", a), this.trigger("uiNavigate", {
                            href: "/" + a.userScreenName
                        })) : this.trigger("uiShowProfilePopup", a)
                    }.bind(this),
                    resizeCard: function(a) {
                        f.iframe.height = a.height
                    }.bind(this),
                    statusComposeTweet: function(a) {
                        a = {
                            defaultText: a.tweetText,
                            canTweetDefaultText: !0
                        }, this.trigger("uiOpenTweetDialog", a)
                    }.bind(this),
                    retweetStatus: function(a) {
                        this._triggerTweetAction(c, "uiOpenRetweetDialog", {
                            id: a.tweetId || h,
                            tweetId: a.tweetId || h
                        })
                    }.bind(this),
                    favoriteStatus: function(a) {
                        this._triggerTweetAction(c, "uiDidFavoriteTweet", {
                            id: a.tweetId || h
                        })
                    }.bind(this),
                    shareStatus: function(a) {
                        this._triggerTweetAction(c, "uiNeedsShareViaEmailDialog", {
                            id: a.tweetId || h
                        })
                    }.bind(this),
                    followAdvertiser: function(a) {
                        i && this._triggerTweetAction(c, "uiFollowAction", {
                            userId: i
                        })
                    }.bind(this),
                    unfollowAdvertiser: function(a) {
                        i && this._triggerTweetAction(c, "uiFollowAction", {
                            userId: i
                        })
                    }.bind(this),
                    scribe: function(a) {
                        var b = this.DEFAULT_SCRIBE_ELEMENT, c = this.DEFAULT_SCRIBE_ACTION, d;
                        a.hasOwnProperty("customScribe") && (a.customScribe.hasOwnProperty("element") && (b = a.customScribe.element), a.customScribe.hasOwnProperty("action") && (c = a.customScribe.action), a.customScribe.hasOwnProperty("itemData") && (d = a.customScribe.itemData), this.scribeCardInteraction(c, this._getCardDataWithScribeContext(g, l), b, d))
                    }.bind(this),
                    logPromotedContentEvent: function(a) {
                        this._triggerTweetAction(c, "uiVideoEvent", $.extend(this.interactionData(c, a), a))
                    }.bind(this),
                    followUser: function(a) {
                        a.userId && this._triggerTweetAction(c, "uiFollowAction", {
                            userId: a.userId
                        })
                    }.bind(this),
                    unfollowUser: function(a) {
                        a.userId && this._triggerTweetAction(c, "uiUnfollowAction", {
                            userId: a.userId
                        })
                    }.bind(this),
                    unblockUser: function(a) {
                        a.userId && this._triggerTweetAction(c, "uiUnblockAction", {
                            userId: a.userId
                        })
                    }.bind(this),
                    cancelFollowUser: function(a) {
                        a.userId && this._triggerTweetAction(c, "uiCancelFollowRequestAction", {
                            userId: a.userId
                        })
                    }.bind(this)
                },
                remote: {
                    localMethodNames: {},
                    callVideoPlayerMethod: {}
                }
            }), $(f.iframe).attr("allowfullscreen", ""), b[h] = f), m
        }, this.destroyCard = function(c) {
            var d = c.data(this.attr.tweetIdData);
            b[d] && (b[d].destroy(), delete b[d])
        }, this.destroyAllCards = function() {
            Object.keys(b).forEach(function(a) {
                b[a].destroy()
            }), b = {}
        }, this._getCardWrapper = function(b) {
            return b.find(this.attr.cardWrapperClass)
        }, this._getTweetId = function(b) {
            return b.data(this.attr.tweetIdData)
        }, this._getAdvertiserId = function(b) {
            return b.data(this.attr.advertiserIdData)
        }, this._getCardDataWithScribeContext = function(b, c) {
            return utils.merge(this.getCardDataFromTweet(b), {
                scribeContext: c
            })
        }, this._triggerTweetAction = function(b, c, d) {
            b.trigger(c, d)
        }, this.after("initialize", function() {
            this.before("teardown", this.destroyAllCards)
        })
    }
});
define("app/ui/expando/with_animated_gifs", ["module", "require", "exports", "app/utils/flash_version"], function(module, require, exports) {
    function withAnimatedGifs() {
        this.getSize = function(a, b) {
            var c = b.attr("data-width"), d = b.attr("data-height"), e = b.width(), f = d * (e / c);
            return {
                h: f,
                w: e
            }
        }, this.startGif = function(a) {
            var b = $(a.target);
            if (b.length&&!b.hasClass("animated-gif-playing")) {
                var c = b.find(this.attr.animatedGifSelector);
                if (c.length) {
                    var d = c.find("[video-src]");
                    d.attr("src", d.attr("video-src"));
                    var e = this.getSize(b, c);
                    b.addClass("animated-gif-playing");
                    var f = c.get(0);
                    this.prepareMediaElement(f, e)
                }
            }
        }, this.createMediaElement = function(a, b, c) {
            return new MediaElement(a, {
                pluginPath: flashVersion.path,
                flashName: "flashmediaelement.swf",
                loop: !0,
                defaultVideoHeight: b.h,
                defaultVideoWidth: b.w,
                pluginHeight: b.h,
                pluginWidth: b.w,
                success: c
            })
        }, this.prepareMediaElement = function(a, b) {
            var c = function(a) {
                d.pluginType == "native" ? a.currentTime = 0 : a.setCurrentTime(0), a.play()
            }, d = this.createMediaElement(a, b, function(a) {
                a.addEventListener("ended", function() {
                    a && c(a)
                }, !1), a.addEventListener("timeupdate", function() {
                    if (d.pluginType == "native" && a.duration <= a.currentTime) {
                        var b = function() {
                            c(a), a.removeEventListener("loadeddata", b)
                        };
                        a.addEventListener("loadeddata", b), a.load()
                    }
                }, !1), a.play()
            })
        }, this.stopGif = function(a) {
            var b = $(a.target);
            if (b.length) {
                var c = b.find(this.attr.animatedGifSelector);
                c.length && (b.removeClass("animated-gif-playing"), b.find(".me-plugin").remove())
            }
        }, this.after("initialize", function() {
            this.on("uiStartGif", this.startGif), this.on("uiHasExpandedTweet", this.startGif), this.on("uiNeedsTweetExpandedContent", this.startGif), this.on("uiStopGif", this.stopGif), this.on("uiHasCollapsedTweet", this.stopGif)
        })
    }
    var flashVersion = require("app/utils/flash_version");
    module.exports = withAnimatedGifs
});
define("app/ui/with_tweet_activity_actions", ["module", "require", "exports"], function(module, require, exports) {
    function withTweetActivityActions() {
        this.defaultAttrs({
            requestReplyActivitySelector: "",
            requestRetweetedActivitySelector: ".request-retweeted-popup",
            requestFavoritedActivitySelector: ".request-favorited-popup",
            requestActivitySelectors: ".request-retweeted-popup, .request-favorited-popup",
            requestTaggingActivitySelector: ".request-tagging-popup",
            targetTweetSelector: ".tweet, .ProfileTweet",
            targetTaggedUsersListSelector: ".popup-tagged-users-list",
            mediaPreviewSelector: ".js-media-container",
            targetTitleSelector: "[data-activity-popup-title]",
            permalinkTweetClasses: "opened-tweet permalink-tweet",
            hiddenClass: "hidden"
        }), this.sanitizeTweet = function(a) {
            var b = a.clone();
            return b.removeClass(this.attr.permalinkTweetClasses), b.find(this.attr.mediaPreviewSelector).remove(), b
        }, this.requestReplyActivity = function(a) {
            this.trigger("uiRequestReplyActivity")
        }, this.requestRetweetedActivity = function(a) {
            this.requestActivityPopup(a), this.trigger("uiRequestRetweetedActivity")
        }, this.requestFavoritedActivity = function(a) {
            this.requestActivityPopup(a), this.trigger("uiRequestFavoritedActivity")
        }, this.requestTaggingActivity = function(a) {
            var b = $(a.target).closest(this.attr.targetTweetSelector), c = b.find(this.attr.targetTaggedUsersListSelector).first();
            this.requestActivityPopup(a), this.trigger("uiRequestTaggingActivity")
        }, this.requestActivityPopup = function(a, b) {
            var c = $(a.target), d = c.closest(this.attr.targetTitleSelector).attr("data-activity-popup-title"), e = c.closest(this.attr.targetTweetSelector).attr("data-tweet-id"), f = b ? b.usersHtml: null, g;
            a.preventDefault(), a.stopPropagation(), c.closest(this.attr.requestRetweetedActivitySelector).length ? g = "retweeted_popup" : c.closest(this.attr.requestTaggingActivitySelector).length ? g = "media_tagged_popup" : g = "favorited_popup", this.trigger("uiRequestActivityPopup", {
                titleHtml: d,
                tweetId: e,
                usersHtml: f,
                component: g
            })
        }, this.handleLoggedOutRetweetedActivityClick = function(a, b) {
            this.trigger("uiLoggedOutActionAttempt", {
                action: "retweeted_activity_attempt"
            })
        }, this.handleLoggedOutFavoritedActivityClick = function(a, b) {
            this.trigger("uiLoggedOutActionAttempt", {
                action: "favorited_activity_attempt"
            })
        }, this.openSigninOrSignupDialog = function(a, b, c) {
            this.trigger("uiOpenSigninOrSignupDialog")
        }, this.after("initialize", function() {
            if (!this.attr.loggedIn) {
                this.on("click", {
                    requestActivitySelectors: this.openSigninOrSignupDialog,
                    requestRetweetedActivitySelector: this.handleLoggedOutRetweetedActivityClick,
                    requestFavoritedActivitySelector: this.handleLoggedOutFavoritedActivityClick
                });
                return 
            }
            this.on("click", {
                requestReplyActivitySelector: this.requestReplyActivity,
                requestRetweetedActivitySelector: this.requestRetweetedActivity,
                requestFavoritedActivitySelector: this.requestFavoritedActivity,
                requestTaggingActivitySelector: this.requestTaggingActivity
            })
        })
    }
    module.exports = withTweetActivityActions
});
define("app/ui/expando/expanding_tweets", ["module", "require", "exports", "core/component", "core/utils", "app/ui/expando/with_expanding_containers", "app/ui/expando/with_expanding_social_activity", "app/ui/expando/with_expanding_conversations", "app/ui/with_card", "app/ui/expando/with_animated_gifs", "app/ui/with_tweet_click_handler", "app/ui/with_tweet_activity_actions", "app/ui/expando/expando_helpers"], function(module, require, exports) {
    function expandingTweets() {
        this.defaultAttrs({
            topLevelTweetSelector: ".js-stream-tweet.original-tweet",
            originalTweetContainerSelector: ".original-tweet-container",
            tweetSelector: ".tweet",
            detailsSelector: ".js-tweet-details-dropdown",
            expansionSelector: ".expansion-container",
            expandedContentSelector: ".expanded-content",
            expansionClasses: "expansion-container js-expansion-container animating",
            openedTweetClass: "opened-tweet",
            originalTweetClass: "original-tweet",
            withSocialProofClass: "with-social-proof",
            containingItemSelector: ".js-stream-item",
            preexpandedOpenTweetSelector: "li.js-preexpanded div.opened-tweet",
            preexpandedTweetClass: "preexpanded",
            tweetFormSelector: ".tweet-form",
            jsDetailsSelector: ".js-details",
            jsStreamItemSelector: ".js-stream-item",
            openedOriginalTweetSelector: ".js-original-tweet.opened-tweet",
            expandedConversationSelector: ".expanded-conversation",
            expandedConversationClass: "expanded-conversation",
            openChildrenSelector: ".ancestor.opened-tweet,.descendant.opened-tweet",
            gridTweetSelector: ".grid-tweet",
            enableAnimation: !0,
            SCROLL_TOP_OFFSET: 55,
            MAX_PLAYER_WIDTH_IN_PIXELS: 435,
            hasConversationModuleClass: "has-conversation-module",
            conversationModuleSelector: ".conversation-module",
            hadConversationClass: "had-conversation",
            animatingClass: "animating",
            condensedTweetbox: ".tweet-form.condensed",
            expandedIframeDataStash: "data-expando-iframe-media-url",
            animatedGifSelector: ".animated-gif",
            playerCardIframeSelector: ".cards-base.cards-multimedia iframe, .card2 iframe"
        }), this.handleTweetExpand = function(a, b) {
            this.expandTweet(a, b)
        }, this.resetCard = function(a, b) {
            b = b || a.data("expando") || this.loadTweet(a);
            if (b.auto_expanded)
                return;
            var c = this;
            a.find(this.attr.playerCardIframeSelector).each(function(a, b) {
                b.setAttribute(c.attr.expandedIframeDataStash, b.src), b.src = ""
            })
        }, this.expandItem = function(a, b) {
            var c = $(a.target).find(this.attr.tweetSelector).eq(0);
            this.handleTweetExpand(c, b)
        }, this.expandTweetByReply = function(a, b) {
            var c = $(a.target);
            if (c.closest(this.attr.gridTweetSelector).length == 1)
                return;
            c.attr("focus-reply", !0), b.focusReply=!0, this.handleTweetExpand(c, b)
        }, this.focusReplyTweetbox = function(a) {
            var b = a.parent().find(this.attr.tweetFormSelector);
            b.length > 0 && this.trigger(b, "uiExpandFocus")
        }, this.expandTweet = function(a, b) {
            b = b || {};
            var c = a.data("expando") || this.loadTweet(a, b);
            if (c.open) {
                if (b.focusReply) {
                    this.focusReplyTweetbox(a);
                    return 
                }
                this.closeTweet(a, c, b)
            } else 
                this.openTweet(a, c, b)
        }, this.collapseTweet = function(a, b, c) {
            var d = $(c);
            d.hasClass(this.attr.openedTweetClass) && this.expandTweet(d, {
                noAnimation: !a
            })
        }, this.loadTweet = function(a, b) {
            b = b || {};
            var c = b.expando || expandoHelpers.buildExpandoStruct({
                $tweet: a,
                preexpanded: b.preexpanded,
                openedTweetClass: this.attr.openedTweetClass,
                expansionSelector: this.attr.expansionSelector,
                originalClass: this.attr.originalTweetClass,
                containingSelector: this.attr.containingItemSelector
            });
            a.data("expando", c);
            var d;
            this.setOriginalHeight(a, c);
            if (!c.$descendants.length ||!c.$ancestors.length || c.preexpanded || c.auto_expanded)
                this.scaffoldForAnimation(a, c), delete b.focusReply, this.loadHtmlFragmentsFromAttributes(a, c, b), this.resizePlayerCards(a);
            return c
        }, this.setOriginalHeight = function(a, b) {
            a.removeClass(this.attr.openedTweetClass), b.originalHeight = a.outerHeight(), a.addClass(this.attr.openedTweetClass)
        }, this.resizePlayerCard = function(a, b) {
            var c = $(b), d = parseFloat(c.attr("width"));
            if (d > this.attr.MAX_PLAYER_WIDTH_IN_PIXELS) {
                var e = parseFloat(c.attr("height")), f = d / e, g = this.attr.MAX_PLAYER_WIDTH_IN_PIXELS / f;
                c.attr("width", this.attr.MAX_PLAYER_WIDTH_IN_PIXELS), c.attr("height", Math.floor(g))
            }
        }, this.resizePlayerCards = function(a) {
            var b = a.find(this.attr.playerCardIframeSelector);
            b.each(this.resizePlayerCard.bind(this))
        }, this.loadPreexpandedTweet = function(a, b) {
            var c = $(a), d = this.loadTweet(c, utils.merge(b, {
                preexpanded: !0
            }));
            this.openTweet(c, d, {
                skipAnimation: !0
            });
            var e = $.trim(c.find(this.attr.expandedContentSelector).html());
            e && c.attr("data-expanded-footer", e), this.on(a, "uiHasAddedLegacyMediaIcon", function() {
                this.setOriginalHeight(c, d), this.trigger(a, "uiWantsMediaForTweet", {})
            })
        }, this.createStepFn = function(a) {
            var b = $(window), c = Math.abs(a.from - a.to), d = Math.min(a.from, a.to), e = a.expando.$container.offset().top, f = b.scrollTop(), g = f + this.attr.SCROLL_TOP_OFFSET - e, h = function(a) {
                var e = a - d, h = e / c;
                g > 0 && b.scrollTop(f - g * (1 - h))
            };
            return h
        }, this.openTweet = function(a, b, c) {
            b.isTopLevel&&!this.hasConversationModule(a) && this.enterDetachedState(b.$container, c.skipAnimation), this.beforeOpeningTweet(b);
            if (!this.attr.enableAnimation || c.skipAnimation)
                return this.afterOpeningTweet(b);
            setTimeout(function() {
                var b = a.find("[data-card-name]").attr("data-card-name");
                this.trigger(a, "uiHasExpandedTweet", {
                    organicExpansion: !c.focusReply,
                    impressionId: a.closest("[data-impression-id]").attr("data-impression-id"),
                    disclosureType: a.closest("[data-impression-id]").attr("data-disclosure-type"),
                    embeddedMediaLogged: a.closest("[data-impression-id]").attr("data-embedded-media-logged"),
                    videoAutoplay: c.autoplay && (b === "amplify" || b === "video")
                }), a.closest("[data-impression-id]").removeAttr("data-embedded-media-logged")
            }.bind(this), 0), this.animateTweetOpen({
                expando: b,
                complete: function() {
                    this.afterOpeningTweet(b)
                }.bind(this)
            })
        }, this.beforeOpeningTweet = function(a) {
            a.auto_expanded || a.$tweet.find("iframe[" + this.attr.expandedIframeDataStash + "]").each(function(a, b) {
                var c = b.getAttribute(this.attr.expandedIframeDataStash);
                !c || (b.src = c)
            }.bind(this)), a.$tweet.addClass(this.attr.openedTweetClass)
        }, this.afterOpeningTweet = function(a) {
            a.open=!0, a.$scaffold.removeClass(this.attr.animatingClass), a.$scaffold.css("height", "auto"), a.$container.removeClass(this.attr.preexpandedTweetClass), this.trigger(a.$tweet, "uiTimelineNeedsTranslation")
        }, this.removeExpando = function(a, b) {
            var c = a.find(this.attr.jsDetailsSelector).is(document.activeElement), d;
            a.closest(".supplement").length ||!b.isTopLevel ? d = b.$scaffold.parent() : d = a.closest(this.attr.jsStreamItemSelector), this.hasConversationModule(a) || (b.cardsForward ? (b.$ancestors.remove(), b.$descendants.remove(), b.$container.find(this.attr.inlineReplyTweetboxSelector).remove(), b.$scaffold.css("height", ""), b.$scaffold.attr("role", "presentation"), b.$scaffold.find(this.attr.originalTweetContainerSelector).attr("role", "presentation")) : d.html(a)), d.removeClass("js-has-navigable-stream"), c && d.find(this.attr.jsDetailsSelector).focus(), a.find(this.attr.detailsSelector).children().addClass("js-hidden-from-collapse"), this.trigger(d, "uiSelectItem", {
                setFocus: !c
            })
        }, this.closeTweet = function(a, b, c) {
            b.isTopLevel&&!this.hasConversationModule(a) && this.exitDetachedState(b.$container, c.noAnimation);
            var d = function() {
                b.cardsForward || (this.resetCard(a, b), this.destroyCard(a)), b.open=!1, a.removeClass(this.attr.openedTweetClass), b.$scaffold.removeClass(this.attr.animatingClass), this.hasConversationModule(a) ? b.$scaffold.css("height", "auto") : this.removeExpando(a, b), this.trigger(a, "uiHasCollapsedTweet")
            }.bind(this);
            if (this.attr.enableAnimation) {
                var e = this.createStepFn({
                    expando: b,
                    to: b.originalHeight,
                    from: b.$scaffold.height()
                });
                b.$scaffold.addClass(this.attr.animatingClass), this.animateTweetClosed({
                    expando: b,
                    complete: d,
                    stepFn: e,
                    noAnimation: c.noAnimation
                })
            } else 
                d()
        }, this.hasConversationModule = function(a) {
            return a.hasClass(this.attr.hasConversationModuleClass)
        }, this.isConversationTweet = function(a) {
            return a.hasClass(this.attr.conversationTweetClass)
        }, this.shouldLoadAncestors = function(a, b) {
            return b.isTopLevel&&!b.preexpanded&&!this.hasConversationModule(a)
        }, this.shouldLoadDescendants = function(a, b) {
            return b.isTopLevel&&!b.preexpanded&&!this.hasConversationModule(a)
        }, this.loadHtmlFragmentsFromAttributes = function(a, b, c) {
            a.find(this.attr.detailsSelector).children().length ? a.find(this.attr.detailsSelector).find(".js-hidden-from-collapse").removeClass("js-hidden-from-collapse") : (a.find(this.attr.detailsSelector).append($(a.data("expanded-footer"))), this.trigger(a, "uiWantsMediaForTweet"));
            var d = utils.merge(c, {
                loadAncestors: this.shouldLoadAncestors(a, b),
                loadDescendants: this.shouldLoadDescendants(a, b),
                loadSocialProof: !0,
                facepileMax: 9
            });
            b.isTopLevel && b.preexpanded && a.attr("data-use-reply-dialog", "true"), delete d.expando, b.cardsForward || this.createCard(a, undefined, c && c.autoplay);
            var e=!!a.closest(this.attr.topLevelTweetSelector).length, f=!!a.closest(this.attr.conversationModuleSelector).length, g = d.loadAncestors, h = a.closest(".js-stream-tweet.in-tweet-action-experiment:not(.reply)").length;
            (h || e&&!f && d.loadAncestors) && this.renderInlineTweetbox(b, d), this.trigger(a, "uiNeedsTweetExpandedContent", d)
        }, this.scaffoldForAnimation = function(a, b) {
            if (!this.attr.enableAnimation)
                return;
            var c = a.find(this.attr.jsDetailsSelector).is(document.activeElement), d;
            c && (d = document.activeElement);
            var e, f, g, h = {
                "class": this.attr.expansionClasses,
                height: b.originalHeight
            };
            a.closest(this.attr.topLevelTweetSelector).length ? a.closest(this.attr.conversationModuleSelector).length ? (e = a.closest(this.attr.conversationModuleSelector), e.addClass(this.attr.expansionClasses), e.height(e.outerHeight()), b.originalHeight = e.outerHeight()) : (b.cardsForward ? (e = a.closest(this.attr.expandedConversationSelector), e.removeAttr("role"), e.find(this.attr.originalTweetContainerSelector).removeAttr("role")) : (h["class"] = [this.attr.expandedConversationClass, this.attr.expansionClasses, "js-navigable-stream"].join(" "), e = $("<ol/>", h), e.appendTo(a.parent()), f = $('<li class="original-tweet-container"/>'), f.appendTo(e), b.$container.addClass("js-has-navigable-stream"), a.appendTo(f)), b.$container.addClass("js-has-navigable-stream"), this.trigger(e.find(this.attr.originalTweetContainerSelector), "uiSelectItem", {
                setFocus: !c
            })) : (e = $("<div/>", h), e.appendTo(a.parent()), a.appendTo(e), g = e.parent().find(this.attr.inlineReplyTweetBoxSelector), g.length && g.appendTo(e)), d && d.focus(), b.$scaffold = e
        }, this.indicateSocialProof = function(a, b) {
            var c = $(a.target);
            b.social_proof && c.addClass(this.attr.withSocialProofClass)
        }, this.closeAllChildTweets = function(a, b) {
            a.$scaffold.find(this.attr.openChildrenSelector).each(this.collapseTweet.bind(this, !!b))
        }, this.closeAllTopLevelTweets = function(a) {
            expandoHelpers.closeAllButPreserveScroll({
                $scope: this.$node,
                openSelector: this.attr.openedOriginalTweetSelector,
                itemSelector: this.attr.jsStreamItemSelector,
                condensedTweetboxSelector: this.attr.condensedTweetbox,
                callback: this.collapseTweet.bind(this, !!a)
            })
        }, this.closeAllTweets = function(a) {
            this.closeAllTopLevelTweets(!!a), this.select("openChildrenSelector").each(this.collapseTweet.bind(this, !!a))
        }, this.fullyLoadPreexpandedTweets = function() {
            this.select("preexpandedOpenTweetSelector").each(function(a, b) {
                this.loadPreexpandedTweet(b)
            }.bind(this))
        }, this.fullyLoadPreexpandedTweet = function(a, b) {
            this.loadPreexpandedTweet(this.select("preexpandedOpenTweetSelector"), b)
        }, this.clickAway = function(a) {
            var b = ["HTML", "BODY"].indexOf(a.target.tagName)!=-1, c = a.target.id == "page-outer"&&!$(a.target).parents("#page-container").length;
            (b || c) && this.closeAllTweets(!0)
        }, this.after("initialize", function(a, b) {
            this.on("dataTweetSocialProofResult", this.indicateSocialProof), this.on("uiShouldToggleExpandedState", this.expandItem), this.on("uiPromotionCardUrlClick", this.expandItem), this.on("expandTweetByReply", this.expandTweetByReply), this.on(document, "uiWantsToCloseAllTweets", this.closeAllTopLevelTweets), this.on(document, "uiSwiftLoaded uiPageChanged uiHasInjectedNewTimeline uiHasInjectedOldTimelineItems uiHasInjectedRangeTimelineItems", this.fullyLoadPreexpandedTweets), this.before("teardown", this.closeAllTweets), this.on(document, "click", this.clickAway)
        })
    }
    var defineComponent = require("core/component"), utils = require("core/utils"), withExpandingContainers = require("app/ui/expando/with_expanding_containers"), withExpandingSocialActivity = require("app/ui/expando/with_expanding_social_activity"), withExpandingConversations = require("app/ui/expando/with_expanding_conversations"), withCard = require("app/ui/with_card"), withAnimatedGifs = require("app/ui/expando/with_animated_gifs"), withTweetClickHandler = require("app/ui/with_tweet_click_handler"), withTweetActivityActions = require("app/ui/with_tweet_activity_actions"), expandoHelpers = require("app/ui/expando/expando_helpers");
    module.exports = defineComponent(expandingTweets, withExpandingContainers, withExpandingSocialActivity, withExpandingConversations, withAnimatedGifs, withCard, withTweetActivityActions, withTweetClickHandler)
});
define("app/ui/embed_stats", ["module", "require", "exports", "app/ui/with_item_actions", "core/component"], function(module, require, exports) {
    function embedStats() {
        this.defaultAttrs({
            permalinkSelector: ".permalink-tweet",
            embeddedLinkSelector: ".embed-stats-url-link",
            moreButtonSelector: ".embed-stats-more-button",
            moreStatsContainerSelector: ".embed-stats-more",
            itemType: "user"
        }), this.expandMoreResults = function(a) {
            this.select("moreButtonSelector").hide(), this.select("moreStatsContainerSelector").show(), this.trigger("uiExpandedMoreEmbeddedTweetLinks", {
                tweetId: this.tweetId
            }), a.preventDefault()
        }, this.clickLink = function(a) {
            this.trigger("uiClickedEmbeddedTweetLink", {
                tweetId: this.tweetId,
                url: $(a.target).data("expanded-url") || a.target.href
            })
        }, this.after("initialize", function() {
            this.tweetId = this.select("permalinkSelector").data("tweet-id"), this.on("click", {
                embeddedLinkSelector: this.clickLink,
                moreButtonSelector: this.expandMoreResults
            })
        })
    }
    var withItemActions = require("app/ui/with_item_actions"), defineComponent = require("core/component");
    module.exports = defineComponent(embedStats, withItemActions)
});
define("app/ui/media/with_native_media", ["module", "require", "exports"], function(module, require, exports) {
    function withNativeMedia() {
        this.defaultAttrs({
            expandedContentHolderWithPreloadableMedia: "div[data-expanded-footer].has-preloadable-media"
        }), this.preloadEmbeddedMedia = function(a) {
            $(a.target).find(this.attr.expandedContentHolderWithPreloadableMedia).each(function(a, b) {
                $("<div/>").append($(b).data("expanded-footer")).remove()
            })
        }, this.after("initialize", function() {
            this.preloadEmbeddedMedia({
                target: this.$node
            }), this.on("uiHasInjectedTimelineItem", this.preloadEmbeddedMedia)
        })
    }
    module.exports = withNativeMedia
});
define("app/ui/media/media_tweets", ["module", "require", "exports", "core/component", "app/ui/media/with_native_media", "app/ui/media/with_flag_action"], function(module, require, exports) {
    var defineComponent = require("core/component"), withNativeMedia = require("app/ui/media/with_native_media"), withFlagAction = require("app/ui/media/with_flag_action");
    module.exports = defineComponent(withNativeMedia, withFlagAction)
});
define("app/utils/boomerang", ["module", "require", "exports", "core/component", "core/clock", "app/data/scribe_transport"], function(module, require, exports) {
    function Boomerang() {
        this.initializeBoomerang = function() {
            var a = {
                allow_ssl: !0,
                autorun: !1,
                user_ip: this.attr.ip,
                BW: {
                    base_url: this.attr.baseUrl,
                    cookie: this.attr.force ? null: "BA"
                }
            }, b = function(a) {
                (a && a.bw || this.attr.inTest) && this.scribeBoomerangResults(a);
                try {
                    delete window.BOOMR
                } catch (b) {
                    window.BOOMR = undefined
                }
            }.bind(this);
            using("app/utils/boomerang_lib", function() {
                delete BOOMR.plugins.RT, BOOMR.init(a), BOOMR.subscribe("before_beacon", b), clock.setTimeoutEvent("boomerangStart", 1e4)
            })
        }, this.scribeBoomerangResults = function(a) {
            var b = parseInt(a.bw / 1024, 10), c = parseInt(a.bw_err * 100 / a.bw, 10), d = parseInt(a.lat_err * 100 / a.lat, 10);
            scribeTransport.send({
                event_name: "measurement",
                load_time_ms: a.t_done,
                bandwidth_kbytes: b,
                bandwidth_error_percent: c,
                latency_ms: a.lat,
                latency_error_percent: d,
                product: "webclient",
                base_url: this.attr.baseUrl
            }, "boomerang"), this.attr.force && this.trigger("uiShowError", {
                message: "Bandwidth: " + b + " KB/s &plusmn; " + c + "%<br />Latency: " + a.lat + " ms &plusmn; " + a.lat_err
            })
        }, this.startBoomerang = function() {
            BOOMR.page_ready()
        }, this.after("initialize", function() {
            this.on(window, "load", this.initializeBoomerang), this.on("boomerangStart", this.startBoomerang)
        })
    }
    var defineComponent = require("core/component"), clock = require("core/clock"), scribeTransport = require("app/data/scribe_transport");
    module.exports = defineComponent(Boomerang)
});
define("app/data/contact_import", ["module", "require", "exports", "core/component", "app/data/with_data"], function(module, require, exports) {
    function contactImportData() {
        this.contactImportStatus = function(a, b) {
            this.get({
                url: "/who_to_follow/import/status",
                data: {},
                eventData: b,
                success: "dataContactImportStatusSuccess",
                error: "dataContactImportStatusFailure"
            })
        }, this.contactImportFollow = function(a, b) {
            var c = {
                user_ids: b.includeIds || [],
                unchecked_user_ids: b.excludeIds || []
            };
            this.post({
                url: "/find_sources/contacts/follow_some.json",
                data: c,
                eventData: b,
                headers: {
                    "X-PHX": !0
                },
                success: this.handleContactImportSuccess.bind(this),
                error: "dataContactImportFollowFailure"
            })
        }, this.handleContactImportSuccess = function(a) {
            a.followed_ids.forEach(function(a) {
                this.trigger("dataBulkFollowStateChange", {
                    userId: a,
                    newState: "following"
                })
            }.bind(this)), a.requested_ids.forEach(function(a) {
                this.trigger("dataBulkFollowStateChange", {
                    userId: a,
                    newState: "pending"
                })
            }.bind(this)), this.trigger("dataContactImportFollowSuccess", a)
        }, this.inviteContacts = function(a, b) {
            var c = b.contacts.map(function(a) {
                return a.name ? '"' + a.name.replace(/"/g, '\\"') + '" <' + a.email + ">" : a.email
            });
            this.post({
                url: "/users/send_invites_by_email",
                data: {
                    addresses: c.join(","),
                    source: "contact_import"
                },
                eventData: b,
                success: "dataInviteContactsSuccess",
                error: "dataInviteContactsFailure"
            })
        }, this.wipeAddressbook = function(a, b) {
            this.post({
                url: "/settings/contacts/wipe_addressbook",
                data: {},
                eventData: b,
                success: "dataWipeAddressbookSuccess",
                error: "dataWipeAddressbookFailure"
            })
        }, this.unmatchedContacts = function(a, b) {
            this.get({
                url: "/welcome/unmatched_contacts",
                data: {},
                eventData: b,
                success: "dataUnmatchedContactsSuccess",
                error: "dataUnmatchedContactsFailure"
            })
        }, this.getMatchesModule = function(a, b) {
            function c(a) {
                a.html && this.trigger("dataContactImportMatchesSuccess", a)
            }
            this.get({
                url: "/who_to_follow/matches",
                data: {},
                eventData: b,
                success: c.bind(this),
                error: "dataContactImportMatchesFailure"
            })
        }, this.inviteModule = function(a, b) {
            function c(a) {
                a.html && this.trigger("dataInviteModuleSuccess", a)
            }
            this.get({
                url: "/who_to_follow/invite",
                data: {},
                eventData: b,
                success: c.bind(this),
                error: "dataInviteModuleFailure"
            })
        }, this.after("initialize", function() {
            this.on(document, "uiWantsContactImportStatus", this.contactImportStatus), this.on(document, "uiContactImportFollow", this.contactImportFollow), this.on(document, "uiWantsUnmatchedContacts", this.unmatchedContacts), this.on(document, "uiInviteContacts", this.inviteContacts), this.on(document, "uiWantsAddressbookWiped", this.wipeAddressbook), this.on(document, "uiWantsContactImportMatches", this.getMatchesModule), this.on(document, "uiWantsInviteModule", this.inviteModule)
        })
    }
    var defineComponent = require("core/component"), withData = require("app/data/with_data");
    module.exports = defineComponent(contactImportData, withData)
});
define("app/data/contact_import_scribe", ["module", "require", "exports", "core/component", "core/utils", "app/data/with_scribe", "app/utils/scribe_item_types"], function(module, require, exports) {
    function contactImportScribe() {
        this.scribeServiceLaunch = function(a, b) {
            var c = {
                query: b.service
            };
            b.section && (c.section = b.section), this.scribe(utils.merge({}, b.scribeContext, {
                action: "launch_service"
            }), c)
        }, this.scribePreviewInviteOpened = function(a, b) {
            this.scribe({
                component: "invite_friends",
                element: "preview_invite_link",
                action: "click"
            })
        }, this.scribeFollowSuccess = function(a, b) {
            var c = scribeItemTypes.user, d = b.followed_ids.map(function(a) {
                return {
                    id: a,
                    item_type: c
                }
            });
            this.scribe({
                component: "stream_header",
                action: "follow"
            }, {
                item_count: b.followed_ids.length,
                items: d,
                event_value: b.followed_ids.length,
                event_info: "follow_all"
            })
        }, this.scribeImportSuccess = function(a, b) {
            b.done && this.scribe(utils.merge({}, b.scribeContext, {
                element: "email_import",
                action: "success"
            }))
        }, this.scribeWipeAddressbookSuccess = function(a, b) {
            this.scribe({
                element: "remove_all_contacts",
                action: "success"
            }, {
                user_id: b.user_id
            })
        }, this.scribeWipeAddressbookFailure = function(a, b) {
            this.scribe({
                element: "remove_all_contacts",
                action: "failure"
            }, {
                user_id: b.user_id
            })
        }, this.scribeInvitationSuccess = function(a, b) {
            var c = b.sourceEventData, d = b.sourceEventData.scribeContext;
            c.invitable !== undefined && this.scribe(utils.merge({}, d, {
                action: "invitable"
            }), {
                item_count: c.invitable,
                event_value: c.invitable
            }), this.scribe(utils.merge({}, d, {
                action: "invited"
            }), {
                item_count: c.contacts.length,
                event_value: c.contacts.length
            })
        }, this.scribeInvitationFailure = function(a, b) {
            var c = b.sourceEventData, d = b.sourceEventData.scribeContext, e = b.errors && b.errors[0] && b.errors[0].code;
            this.scribe(utils.merge({}, d, {
                action: "error"
            }), {
                item_count: c.contacts.length,
                status_code: e
            })
        }, this.scribeLinkClick = function(a, b) {
            var c = a.target.className;
            c.indexOf("find-friends-btn")!=-1 && this.scribe({
                component: "empty_timeline",
                element: "find_friends_link",
                action: "click"
            }), c.indexOf("js-wipe-addressbook")!=-1 && this.scribe({
                element: "remove_all_contacts",
                action: "open"
            }), c.indexOf("contacts-import-btn")!=-1 && this.scribe({
                element: "contacts_import_link",
                action: "open"
            })
        }, this.after("initialize", function() {
            this.on("uiImportServiceLaunched", this.scribeServiceLaunch), this.on("uiPreviewInviteOpened", this.scribePreviewInviteOpened), this.on("dataContactImportStatusSuccess", this.scribeImportSuccess), this.on("dataContactImportFollowSuccess", this.scribeFollowSuccess), this.on("dataWipeAddressbookSuccess", this.scribeWipeAddressbookSuccess), this.on("dataWipeAddressbookFailure", this.scribeWipeAddressbookFailure), this.on("dataInviteContactsSuccess", this.scribeInvitationSuccess), this.on("dataInviteContactsFailure", this.scribeInvitationFailure), this.on("click", this.scribeLinkClick)
        })
    }
    var defineComponent = require("core/component"), utils = require("core/utils"), withScribe = require("app/data/with_scribe"), scribeItemTypes = require("app/utils/scribe_item_types");
    module.exports = defineComponent(contactImportScribe, withScribe)
});
define("app/ui/dashboard_tweetbox", ["module", "require", "exports", "core/component", "core/utils", "app/ui/with_tweetbox_initialization"], function(module, require, exports) {
    function dashboardTweetbox() {
        this.defaultAttrs({
            hasDefaultText: !0,
            defaultTextFrom: "data-screen-name",
            prependText: "@"
        }), this.getText = function() {
            return this.$node.attr(this.attr.defaultTextFrom) || ""
        }, this.getDefaultText = function() {
            return this.attr.hasDefaultText ? this.attr.prependText + this.getText() + " " : undefined
        }, this.getCondensedText = function() {
            return this.attr.hasDefaultText ? this.attr.prependText + this.getText() : undefined
        }, this.after("initialize", function() {
            this.initTweetbox({
                condensedText: this.getCondensedText(),
                defaultText: this.getDefaultText()
            })
        })
    }
    var defineComponent = require("core/component"), utils = require("core/utils"), withTweetboxInitialization = require("app/ui/with_tweetbox_initialization");
    module.exports = defineComponent(withTweetboxInitialization, dashboardTweetbox)
});
define("app/utils/chrome", ["module", "require", "exports"], function(module, require, exports) {
    var chrome = {
        globalYOffset: null,
        selectors: {
            globalNav: ".global-nav"
        },
        getGlobalYOffset: function() {
            return chrome.globalYOffset === null && (chrome.globalYOffset = $(chrome.selectors.globalNav).height()), chrome.globalYOffset
        },
        getCanvasYOffset: function(a) {
            return a.offset().top - chrome.getGlobalYOffset()
        }
    };
    module.exports = chrome
});
define("app/utils/viewport_helpers", ["module", "require", "exports", "app/utils/chrome"], function(module, require, exports) {
    var chrome = require("app/utils/chrome");
    module.exports = {
        isWithinBounds: function(a, b, c) {
            return !this.isBelowViewport(a, b, c)&&!this.isAboveViewport(a, b, c)
        },
        isAboveViewport: function(a, b, c) {
            var d = a.scrollTop(), e = b.offset().top - (this.getNodeOffsetTop(a) + chrome.getGlobalYOffset());
            return d >= e + b.height() / 2 + (c || 0)
        },
        isBelowViewport: function(a, b, c) {
            var d = a.height() + a.scrollTop(), e = b.offset().top - this.getNodeOffsetTop(a);
            return d <= e - (c || 0) + b.height() / 2
        },
        getNodeOffsetTop: function(a) {
            return a.offset() ? a.offset().top : 0
        }
    }
});
define("app/ui/dynamic_card_watcher", ["module", "require", "exports", "core/component", "app/ui/with_card", "app/utils/viewport_helpers", "core/utils"], function(module, require, exports) {
    function dynamicCardWatcher() {
        this.viewportHelpers = viewportHelpers, this.defaultAttrs({
            containerSelector: "body",
            tweetSelector: ".tweet",
            scrollThrottle: 100,
            viewportThreshold: 200,
            iframeContainerSelector: ".js-macaw-cards-iframe-container",
            unloadedCardsSelector: '.js-macaw-cards-iframe-container[data-watched!="true"]',
            unloadedCardsFilter: "*"
        }), this.watchUnloadedCards = function() {
            var a = this.$container.find(this.attr.unloadedCardsSelector).filter(this.attr.unloadedCardsFilter).filter(function() {
                return this.children.length == 0
            });
            a.attr("data-watched", !0), this.watchedCards = this.watchedCards.concat(a.toArray()), this.throttledProcessWatchedCards()
        }, this.processWatchedCards = function() {
            var a = 0;
            while (a < this.watchedCards.length) {
                var b = this.watchedCards[a];
                viewportHelpers.isWithinBounds(this.$viewport, $(b), this.attr.viewportThreshold) ? (this.loadCard(b), this.loadedCards.push(b), this.watchedCards.splice(a, 1)) : a += 1
            }
            a = 0;
            while (a < this.loadedCards.length) {
                var b = this.loadedCards[a];
                if (!viewportHelpers.isWithinBounds(this.$viewport, $(b), this.attr.viewportThreshold)) {
                    var c = $(b), d = c.find("iframe").attr("height");
                    d && c.css("min-height", d), this.unloadCard(b), this.watchedCards.push(b), this.loadedCards.splice(a, 1)
                } else 
                    a += 1
            }
        }, this.loadCard = function(a) {
            var b = $(a).closest(this.attr.tweetSelector);
            this.createCard(b)
        }, this.unloadCard = function(a) {
            var b = $(a).closest(this.attr.tweetSelector);
            this.destroyCard(b)
        }, this.resetWatchedCards = function() {
            this.watchedCards = [], this.$container.find(this.attr.iframeContainerSelector).removeAttr("data-watched"), this.watchUnloadedCards()
        }, this.cleanup = function() {
            this.watchedCards.forEach(this.unloadCard.bind(this)), this.loadedCards.forEach(this.unloadCard.bind(this)), this.$container = null, this.off(document, "uiPageChanged"), this.off("scroll"), this.off(this.$viewport, "resize")
        }, this.before("teardown", function() {
            this.cleanup()
        }), this.after("initialize", function() {
            this.$container = this.node === window ? $(this.attr.containerSelector) : this.select("containerSelector"), this.$container.length || (this.$container = this.$node), this.watchedCards = [], this.loadedCards = [], this.on(document, "uiPageChanged", this.resetWatchedCards), this.throttledProcessWatchedCards = utils.throttle(this.processWatchedCards.bind(this), this.attr.scrollThrottle), this.on("scroll", this.throttledProcessWatchedCards), this.$viewport = this.node === document ? $(window) : this.$node, this.on(this.$viewport, "resize", this.throttledProcessWatchedCards);
            var a = ["uiHasInjectedNewTimeline", "uiHasInjectedOldTimelineItems", "uiHasInjectedRangeTimelineItems", "uiOverlayPageChanged"].join(" ");
            this.on(document, a, this.watchUnloadedCards), this.watchUnloadedCards()
        })
    }
    var defineComponent = require("core/component"), withCard = require("app/ui/with_card"), viewportHelpers = require("app/utils/viewport_helpers"), utils = require("core/utils");
    module.exports = defineComponent(withCard, dynamicCardWatcher)
});
define("app/ui/who_to_follow/import_loading_dialog", ["module", "require", "exports", "core/component", "app/ui/with_dialog"], function(module, require, exports) {
    function importLoadingDialog() {
        this.after("afterClose", function() {
            this.trigger("uiImportLoadingDialogCancelled")
        }), this.after("initialize", function() {
            this.on(document, "uiOpenImportLoadingDialog", this.open), this.on(document, "uiCloseImportLoadingDialog", this.close)
        })
    }
    var defineComponent = require("core/component"), withDialog = require("app/ui/with_dialog");
    module.exports = defineComponent(importLoadingDialog, withDialog)
});
define("app/utils/oauth_popup", ["module", "require", "exports"], function(module, require, exports) {
    module.exports = function(a) {
        var b = a.url, c = b.indexOf("?")==-1 ? "?": "&";
        a.callbackUrl ? b += c + "callback_hash=" + encodeURIComponent(a.callbackUrl) : a.triggerEvent && (b += c + "trigger_event=true");
        var d = $(window), e = window.screenY || window.screenTop || 0, f = window.screenX || window.screenLeft || 0, g = (d.height() - 500) / 2 + e, h = (d.width() - 500) / 2 + f, a = {
            width: a.width ? a.width: 500,
            height: a.height ? a.height: 500,
            top: g,
            left: h,
            toolbar: "no",
            location: "yes"
        }, i = $.param(a).replace(/&/g, ",");
        window.open(b, "twitter_oauth", i).focus()
    }
});
define("app/ui/with_import_services", ["module", "require", "exports", "core/i18n", "app/utils/oauth_popup"], function(module, require, exports) {
    function withImportServices() {
        this.launchService = function(a) {
            var b = $(a.target).closest(this.attr.launchServiceSelector);
            this.oauthPopup({
                url: b.data("url"),
                triggerEvent: !0,
                width: b.data("width"),
                height: b.data("height")
            });
            var c = {
                service: b.data("service")
            };
            this.attr.otherServicesSelector && (c.section = b.parents(this.attr.otherServicesSelector).length == 0 ? "cta" : "other_services"), this.trigger("uiImportServiceLaunched", c)
        }, this.importDeniedFailure = function() {
            this.trigger("uiShowError", {
                message: _('You denied Twitter\'s access to your contact information.')
            })
        }, this.importMissingFailure = function() {
            this.trigger("uiShowError", {
                message: _('An error occurred validating your credentials.')
            })
        }, this.after("initialize", function() {
            this.oauthPopup = oauthPopup, this.on(document, "uiOauthImportDenied", this.importDeniedFailure), this.on(document, "uiOauthImportMissing", this.importMissingFailure), this.on("click", {
                launchServiceSelector: this.launchService
            })
        })
    }
    var _ = require("core/i18n"), oauthPopup = require("app/utils/oauth_popup");
    module.exports = withImportServices
});
define("app/ui/who_to_follow/import_services", ["module", "require", "exports", "core/component", "core/i18n", "app/ui/with_import_services"], function(module, require, exports) {
    function importServices() {
        this.defaultAttrs({
            launchServiceSelector: ".js-launch-service",
            matchesHref: "/who_to_follow/matches",
            redirectOnSuccess: !0
        }), this.importSuccess = function() {
            this.trigger("uiOpenImportLoadingDialog"), this.startPolling()
        }, this.dialogCancelled = function() {
            this.stopPolling()
        }, this.startPolling = function() {
            this.pollingCount = 0, this.interval = window.setInterval(this.checkForContacts.bind(this), 3e3)
        }, this.stopPolling = function() {
            this.interval && (window.clearInterval(this.interval), this.interval = null), this.trigger("uiCloseImportLoadingDialog")
        }, this.checkForContacts = function() {
            this.pollingCount++>15 ? (this.trigger("uiShowError", {
                message: _('Loading seems to be taking a while. Please wait a moment and try again.')
            }), this.stopPolling()) : this.trigger("uiWantsContactImportStatus")
        }, this.hasStatus = function(a, b) {
            b.done && (this.stopPolling(), b.error ? this.trigger("uiShowError", {
                message: b.message
            }) : this.attr.redirectOnSuccess ? this.trigger("uiNavigate", {
                href: this.attr.matchesHref
            }) : this.trigger("uiWantsContactImportMatches"))
        }, this.after("initialize", function() {
            this.on(document, "uiOauthImportSuccess", this.importSuccess), this.on(document, "uiImportLoadingDialogCancelled", this.dialogCancelled), this.on(document, "dataContactImportStatusSuccess", this.hasStatus), this.attr.hasUserCompletionModule && (this.attr.matchesHref += "?from_num=1")
        }), this.after("teardown", function() {
            this.stopPolling()
        })
    }
    var defineComponent = require("core/component"), _ = require("core/i18n"), withImportServices = require("app/ui/with_import_services");
    module.exports = defineComponent(importServices, withImportServices)
});
define("app/ui/inline_tweet_compose", ["module", "require", "exports", "core/component"], function(module, require, exports) {
    function inlineTweetCompose() {
        this.defaultAttrs({
            text: null
        }), this.triggerTweetCompose = function() {
            setTimeout(function() {
                this.trigger("uiOpenTweetDialog", {
                    text: this.attr.text,
                    scribeContext: {
                        component: "inline_tweet_compose"
                    }
                })
            }.bind(this), 1e3)
        }, this.after("initialize", function() {
            this.on(document, "uiSwiftLoaded", this.triggerTweetCompose)
        })
    }
    var defineComponent = require("core/component");
    module.exports = defineComponent(inlineTweetCompose)
});
define("app/data/notifications_register", ["module", "require", "exports", "core/component", "app/data/with_data"], function(module, require, exports) {
    function notificationsRegister() {
        this.sendData = function() {
            this.post({
                url: "/i/register_webn",
                headers: {},
                data: {},
                eventData: {},
                success: $.noop,
                error: $.noop
            })
        }, this.after("initialize", function(a, b) {
            b.registerWebN===!0 && this.sendData()
        })
    }
    var defineComponent = require("core/component"), withData = require("app/data/with_data");
    module.exports = defineComponent(notificationsRegister, withData)
});
define("app/ui/profile_stats", ["module", "require", "exports", "core/component", "app/ui/with_profile_stats"], function(module, require, exports) {
    var defineComponent = require("core/component"), withProfileStats = require("app/ui/with_profile_stats");
    module.exports = defineComponent(withProfileStats)
});
define("app/data/promptbird", ["module", "require", "exports", "core/component", "app/data/with_data", "core/utils", "app/utils/oauth_popup"], function(module, require, exports) {
    function promptbirdData() {
        this.languageChanged = function() {
            window.location.reload()
        }, this.changeLanguage = function(a, b) {
            var c = {
                lang: b.lang
            };
            this.post({
                url: "/settings/account/set_language",
                eventData: c,
                data: c,
                success: "dataPromptbirdLanguageChangeSuccess",
                error: "dataPromptbirdLanguageChangeFailure"
            })
        }, this.dismissPrompt = function(a, b) {
            var c = {
                prompt_id: b.prompt_id
            };
            b.survey_data != null && (c = utils.merge(c, {
                survey_data: b.survey_data
            })), this.post({
                url: "/users/dismiss_prompt",
                headers: {
                    "X-PHX": !0
                },
                eventData: c,
                data: c,
                success: "dataPromptbirdPromptDismissed",
                error: "dataPromptbirdPromptDismissalError"
            })
        }, this.clickPrompt = function(a, b) {
            var c = {
                prompt_id: b.prompt_id
            };
            b.survey_data != null && (c = utils.merge(c, {
                survey_data: b.survey_data
            })), this.post({
                url: "/users/click_prompt",
                headers: {
                    "X-PHX": !0
                },
                eventData: c,
                data: c,
                success: "dataPromptbirdPromptClicked",
                error: "dataPromptbirdPromptClickError"
            })
        }, this.doOneClickImport = function(a, b) {
            this.oauthPopup(b), this.trigger("dataPromptbirdDidOneClickImport", b)
        }, this.doInlineContactImport = function(a, b) {
            var c = b.url;
            c && (b.popup ? this.oauthPopup({
                url: c,
                width: b.width,
                height: b.height,
                callbackUrl: b.callbackUrl
            }) : window.open(c, "_blank").focus())
        }, this.onPromptMentionTweetCompose = function(a, b) {
            this.trigger("uiOpenTweetDialog", b)
        }, this.after("initialize", function() {
            this.oauthPopup = oauthPopup, this.on("uiPromptbirdSetLanguage", this.changeLanguage), this.on("uiPromptbirdDismissPrompt", this.dismissPrompt), this.on("uiPromptbirdClick", this.clickPrompt), this.on("uiPromptbirdDoOneClickImport", this.doOneClickImport), this.on("dataPromptbirdLanguageChangeSuccess", this.languageChanged), this.on("uiPromptbirdDoInlineContactImport", this.doInlineContactImport), this.on("uiPromptMentionTweetCompose", this.onPromptMentionTweetCompose)
        })
    }
    var defineComponent = require("core/component"), withData = require("app/data/with_data"), utils = require("core/utils"), oauthPopup = require("app/utils/oauth_popup");
    module.exports = defineComponent(promptbirdData, withData)
});
define("app/data/promptbird_scribe", ["module", "require", "exports", "core/component", "app/data/with_scribe"], function(module, require, exports) {
    function promptbirdScribe() {
        this.after("initialize", function() {
            this.scribeOnEvent("uiPromptbirdClick", {
                action: "click"
            }), this.scribeOnEvent("uiPromptbirdPreviewPromotedAccount", {
                action: "preview"
            }), this.scribeOnEvent("uiPromptbirdDismissPrompt", {
                action: "dismiss"
            }), this.scribeOnEvent("uiShowDashboardProfilePromptbird", {
                action: "show"
            }), this.scribeOnEvent("uiPromptMentionTweetCompose", {
                action: "show"
            })
        })
    }
    var defineComponent = require("core/component"), withScribe = require("app/data/with_scribe");
    module.exports = defineComponent(promptbirdScribe, withScribe)
});
define("app/ui/promptbird/with_import_contacts", ["module", "require", "exports"], function(module, require, exports) {
    function withImportContacts() {
        this.defaultAttrs({
            oneClickImportSelector: ".call-to-action.one-click-import-button",
            inlineImportButtonSelector: ".service-links a.service-link"
        }), this.importCallbackUrl = function() {
            return window.location.protocol + "//" + window.location.host + "/who_to_follow/matches"
        }, this.doOneClickImport = function(a) {
            a.preventDefault();
            var b = this.$node.find(".prompt-action-wrapper .call-to-action.one-click-import-button").data("email"), c = "/invitations/oauth_launch?email=" + encodeURIComponent(b), d = this.$node.data("prompt-id"), e = {
                triggerEvent: !0,
                url: c
            };
            d === 46 && (e.width = 880, e.height = 550), this.trigger("uiPromptbirdDoOneClickImport", e)
        }, this.doInlineContactImport = function(a) {
            a.preventDefault();
            var b = $(a.target);
            this.trigger("uiPromptbirdDoInlineContactImport", {
                url: b.data("url"),
                width: b.data("width"),
                height: b.data("height"),
                popup: b.data("popup"),
                serviceName: b.find("strong.service-name").data("service-id"),
                callbackUrl: this.importCallbackUrl()
            })
        }, this.after("initialize", function() {
            this.on("click", {
                oneClickImportSelector: this.doOneClickImport,
                inlineImportButtonSelector: this.doInlineContactImport
            })
        })
    }
    module.exports = withImportContacts
});
define("app/ui/promptbird/with_language_switch", ["module", "require", "exports"], function(module, require, exports) {
    function withLanguageSwitch() {
        this.defaultAttrs({
            languageSelector: ".language",
            setLanguageSelector: ".set-language.call-to-action"
        }), this.promptLanguage = function() {
            return this.select("languageSelector").attr("data-language")
        }, this.setLanguage = function() {
            this.trigger("uiPromptbirdSetLanguage", {
                lang: this.promptLanguage()
            })
        }, this.after("initialize", function() {
            this.on("click", {
                setLanguageSelector: this.setLanguage
            })
        })
    }
    module.exports = withLanguageSwitch
});
define("app/ui/promptbird", ["module", "require", "exports", "core/component", "core/utils", "app/ui/promptbird/with_import_contacts", "app/ui/promptbird/with_language_switch"], function(module, require, exports) {
    function promptbirdPrompt() {
        this.defaultAttrs({
            callToActionSelector: ".call-to-action",
            callToActionDismissSelector: ".call-to-action.dismiss-prompt",
            delayedDismissSelector: ".js-follow-btn",
            delayedHideSelector: ".js-delayed-hide",
            dismissSelector: ".js-dismiss",
            noDismissSelector: ".js-no-dismiss",
            promptMentionTweetComposeSelector: ".prompt-wrapper.show_tweet_dialog .call-to-action",
            deviceFollowSelector: ".prompt-wrapper.device-follow .call-to-action",
            surveyPromptSelector: ".prompt-survey",
            inputPromptSelector: ".prompt-input",
            promptInputFieldSelector: ".prompt-action-wrapper .prompt-input-field",
            promptChoicesContainerSelector: ".prompt-action-wrapper .prompt-choices",
            promptChoiceSelector: ".prompt-action-wrapper .prompt-choices .choice",
            promptEndingMessageSelector: ".promptbird-ending-msg",
            promptWrapperSelector: ".prompt-wrapper",
            promptCheckedChoicesSelector: ".choice",
            dashboardProfilePromptSelector: ".gain_followers_prompt",
            previewPromotedAccountSelector: ".gain_followers_prompt .preview-promoted-account",
            followPromptCallToActionSelector: ".prompt-action-wrapper.user-actions.not-following > .js-follow-btn",
            promptBelowBlackBarClass: "promptbird-below-black-bar",
            disableClass: "disabled"
        }), this.changeButtonState = function(a) {
            a ? this.select("callToActionSelector").removeClass(this.attr.disableClass).attr("disabled", !1) : this.select("callToActionSelector").addClass(this.attr.disableClass).attr("disabled", !0)
        }, this.getAllChoices = function() {
            var a = this.select("promptChoicesContainerSelector");
            return a.find(this.attr.promptCheckedChoicesSelector)
        }, this.getSelectedChoices = function() {
            var a = this.getAllChoices();
            return a.filter(":checked")
        }, this.getUnselectedChoices = function() {
            var a = this.getAllChoices();
            return a.not(":checked")
        }, this.promptInputFieldChanged = function() {
            var a = this.select("promptInputFieldSelector").val().trim();
            this.changeButtonState(a)
        }, this.promptSelectedChoicesChanged = function() {
            this.changeButtonState(this.getSelectedChoices().length > 0)
        }, this.dismissPrompt = function(a) {
            a.preventDefault();
            var b = {
                scribeContext: this.scribeContext(),
                prompt_id: this.$node.data("prompt-id")
            };
            if (this.select("surveyPromptSelector").length || this.select("inputPromptSelector").length)
                b = utils.merge(b, {
                    survey_data: this.getSubmissionData()
                });
            this.isEndingMessageVisible() || this.trigger("uiPromptbirdDismissPrompt", b), this.$node.fadeOut(500, function() {
                $(this).remove()
            }).slideUp({
                queue: !1,
                duration: 500
            })
        }, this.removePrompt = function(a) {
            a.preventDefault(), this.$node.remove()
        }, this.doPromptMentionTweetCompose = function(a) {
            a.preventDefault();
            var b = this.select("promptWrapperSelector").data("screenname"), c = this.select("promptWrapperSelector").data("title");
            this.trigger("uiPromptMentionTweetCompose", {
                screenName: b,
                title: c,
                scribeContext: this.scribeContext()
            })
        }, this.doDeviceFollow = function(a) {
            a.preventDefault();
            var b = this.select("promptWrapperSelector").data("user-id");
            this.trigger("uiDeviceNotificationsOnAction", {
                userId: b,
                scribeContext: this.scribeContext()
            })
        }, this.delayedHidePrompt = function() {
            var a = this.$node;
            setTimeout(function() {
                a.remove()
            }, 1e3)
        }, this.delayedDismissPrompt = function() {
            this.trigger("uiPromptbirdDismissPrompt", {
                prompt_id: this.$node.data("prompt-id")
            });
            var a = this.$node;
            setTimeout(function() {
                a.remove()
            }, 1e3)
        }, this.clickAndDismissPrompt = function() {
            this.trigger("uiPromptbirdDismissPrompt", {
                scribeContext: this.scribeContext(),
                prompt_id: this.$node.data("prompt-id")
            }), this.$node.remove()
        }, this.hasEndingMessage = function() {
            return this.select("promptEndingMessageSelector").length !== 0
        }, this.isEndingMessageVisible = function() {
            return this.select("promptEndingMessageSelector").is(":visible")
        }, this.showEndingMessage = function() {
            var a = this.select("promptWrapperSelector"), b = this.select("promptEndingMessageSelector");
            this.$node.css("height", a.height() + "px"), a.height() > b.height() && b.height(a.height()), this.$node.animate({
                height: b.height() + "px"
            }, 600), a.hide(), b.fadeIn(600)
        }, this.getSubmissionData = function() {
            var a = null, b = null, c = this.select("promptWrapperSelector");
            return this.select("surveyPromptSelector").length ? (a = JSON.stringify(this.getSelectedChoices().map(function() {
                return this.value
            }).get()), b = JSON.stringify(this.getUnselectedChoices().map(function() {
                return this.value
            }).get())) : a = this.select("promptInputFieldSelector").val().trim(), JSON.stringify({
                dataset: c.data("submissions-dataset"),
                app_id: c.data("submissions-app-id"),
                form_selected_values: a,
                form_unselected_values: b
            })
        }, this.generateClickEvent = function(a, b) {
            var c = parseInt(this.$node.data("prompt-id")), d = b.el, e = {
                scribeContext: this.scribeContext(),
                prompt_id: c
            };
            if (this.select("surveyPromptSelector").length || this.select("inputPromptSelector").length)
                e = utils.merge(e, {
                    survey_data: this.getSubmissionData()
                });
            this.trigger("uiPromptbirdClick", e), c !== 223 && c !== 46 && c !== 49 && c !== 50&&!$(d).is(this.attr.noDismissSelector) && (this.hasEndingMessage()&&!this.isEndingMessageVisible() ? this.showEndingMessage() : this.$node.hide()), c === 806 && (a.preventDefault(), this.trigger("uiNeedsSmsConfirmationDialog"))
        }, this.clickPreviewPromotedAccount = function(a) {
            a.preventDefault(), this.trigger("uiPromptbirdPreviewPromotedAccount", {
                scribeContext: this.scribeContext()
            })
        }, this.showDashboardProfilePrompt = function() {
            this.$node.slideDown("fast"), this.trigger("uiShowDashboardProfilePromptbird", {
                scribeContext: this.scribeContext()
            })
        }, this.maybeInitDashboardProfilePrompt = function() {
            if (this.select("dashboardProfilePromptSelector").length === 0)
                return;
            this.on(document, "uiDidGetRecommendations", function() {
                this.trigger("uiGotPromptbirdDashboardProfile"), this.on(document, "dataDidGetSelfPromotedAccount", this.showDashboardProfilePrompt)
            })
        }, this.scribeContext = function() {
            return {
                component: "promptbird_" + this.$node.data("prompt-id")
            }
        }, this.after("initialize", function() {
            this.$node.hasClass(this.attr.promptBelowBlackBarClass) && this.$node.show(), this.on("click", {
                callToActionSelector: this.generateClickEvent,
                callToActionDismissSelector: this.clickAndDismissPrompt,
                dismissSelector: this.dismissPrompt,
                delayedDismissSelector: this.delayedDismissPrompt,
                delayedHideSelector: this.delayedHidePrompt,
                previewPromotedAccountSelector: this.clickPreviewPromotedAccount,
                promptMentionTweetComposeSelector: this.doPromptMentionTweetCompose,
                followPromptCallToActionSelector: this.generateClickEvent,
                deviceFollowSelector: this.doDeviceFollow
            }), this.on("change", {
                promptChoiceSelector: this.promptSelectedChoicesChanged
            }), this.on("input keyup keydown", {
                promptInputFieldSelector: this.promptInputFieldChanged
            }), this.maybeInitDashboardProfilePrompt()
        })
    }
    var defineComponent = require("core/component"), utils = require("core/utils"), withImportContacts = require("app/ui/promptbird/with_import_contacts"), withLanguageSwitch = require("app/ui/promptbird/with_language_switch");
    module.exports = defineComponent(promptbirdPrompt, withImportContacts, withLanguageSwitch)
});
define("app/boot/promptbird", ["module", "require", "exports", "app/ui/who_to_follow/import_services", "app/data/promptbird", "app/data/promptbird_scribe", "app/ui/promptbird", "core/utils"], function(module, require, exports) {
    var ImportServices = require("app/ui/who_to_follow/import_services"), PromptbirdData = require("app/data/promptbird"), PromptbirdScribe = require("app/data/promptbird_scribe"), PromptbirdUI = require("app/ui/promptbird"), utils = require("core/utils");
    module.exports = function(b) {
        var c = ".promptbird", d = utils.merge(b, {
            eventData: {
                scribeContext: {
                    section: "home"
                }
            }
        });
        PromptbirdData.attachTo(document, d), PromptbirdUI.attachTo(c, d), PromptbirdScribe.attachTo(c, d);
        var e = $(c).data("prompt-id");
        (e === 46 || e === 49 || e === 50) && ImportServices.attachTo(c, {
            launchServiceSelector: ".js-service-row"
        })
    }
});
define("app/ui/scrollable_range", ["module", "require", "exports", "core/component", "app/utils/full_path"], function(module, require, exports) {
    function scrollableRange() {
        var a = [], b = [];
        this.attributes({
            tweetSelector: "li.js-stream-item"
        }), this.tweetToStringShort = function(a) {
            return $(".js-stream-item").index(a)
        };
        var c = {};
        this.getCache = function(a) {
            return c[a]
        }, this.setCache = function(a, b) {
            c[a] = b
        }, this.firstElementChild = function(a) {
            var b;
            if (a.length) {
                b = a[0].firstChild;
                while (b && b.nodeType != 1)
                    b = b.nextSibling
            }
            return $(b)
        }, this.handleOffScreen = function(a) {
            var b = this.$node.find("#" + a), d = this.firstElementChild(b);
            d.length == 1 && (b.css({
                height: b[0].cachedOffsetHeight || b[0].offsetHeight
            }), c[this.url][a] = d.detach())
        }, this.handleOnScreen = function(a) {
            var b = this.$node.find("#" + a), d = this.firstElementChild(b);
            if (d.length === 0) {
                if (!c[this.url][a]) {
                    console.warn("++++ cache[this.url][id] not found for " + this.tweetToStringShort($("#" + a)));
                    return 
                }
                d = c[this.url][a], delete c[this.url][a], b.css({
                    height: ""
                }), b.append(d)
            }
        }, this.handleVisibleItemsChanged = function(c, d) {
            d.hidden && d.hidden.length && (a = a.concat(d.hidden)), d.revealed && d.revealed.length && (b = b.concat(d.revealed)), (b.length || a.length) && this.maybeUpdate()
        }, this.maybeUpdate = function() {
            var c = b;
            b.length && (b.forEach(this.handleOnScreen, this), b = []), a.length && (a.forEach(this.handleOffScreen, this), a = [])
        }, this.after("initialize", function() {
            this.url = fullPath(), this.getCache(this.url) || this.setCache(this.url, {}), this.on("uiVisibleItemsChanged", this.handleVisibleItemsChanged)
        })
    }
    var defineComponent = require("core/component"), fullPath = require("app/utils/full_path");
    module.exports = defineComponent(scrollableRange)
});
define("app/ui/scroll_monitor", ["module", "require", "exports", "core/component"], function(module, require, exports) {
    function scrollMonitor() {
        this.attributes({
            autoStart: !1,
            scrollDelay: 0,
            scrollDelta: 0
        }), this.$element = null, this.active=!1, this.frameID = null, this.lastClientHeight = null, this.lastResizeEvent = null, this.lastScrollEvent = null, this.lastScrollTop = null, this.retryScroll = null, this.cancelPendingFrame = function() {
            this.frameID && (cancelAnimationFrame(this.frameID), this.frameID = null)
        }, this.frame = function(a) {
            a || (a = {}), this.frameID = null, a.clientHeight == null && (a.clientHeight = this.lastClientHeight || 0), a.direction == null && (a.direction = 0), a.distance == null && (a.distance = 0), a.scrollTop == null && (a.scrollTop = this.scrollTop());
            var b = a.eventName || "uiElementHasScrolled";
            delete a.eventName, this.trigger(b, a)
        }, this.clientHeight = function() {
            return this.$element.height()
        }, this.handleNativeScroll = function() {
            var a = this.scrollDelay();
            this.retryScroll && (clearTimeout(this.retryScroll), this.retryScroll = null);
            if (!this.validScrollDelay(a)) {
                this.retryScroll = setTimeout(this.trigger.bind(this, "scroll"), this.attr.scrollDelay - a), this.cancelPendingFrame();
                return 
            }
            var b = this.scrollTop(), c = this.scrollDistance(b);
            if (!this.validScrollDistance(c))
                return;
            var d = this.scrollDirection(b);
            this.lastScrollEvent = Date.now(), this.lastScrollTop = b, this.cancelPendingFrame(), this.requestFrame({
                direction: d,
                distance: c,
                scrollTop: b
            })
        }, this.handleNativeResize = function() {
            if (!this.validResizeDelay())
                return;
            this.lastClientHeight = this.clientHeight(), this.lastResizeEvent = Date.now(), this.cancelPendingFrame(), this.requestFrame({
                direction: 0,
                distance: 0,
                scrollTop: this.lastScrollTop
            })
        }, this.resetState = function() {
            this.frameID = null, this.lastClientHeight = null, this.lastResizeEvent = null, this.lastScrollEvent = null, this.lastScrollTop = null
        }, this.requestInitialFrame = function() {
            this.lastClientHeight = this.clientHeight(), this.requestFrame({
                eventName: "uiScrollMonitorStarted"
            })
        }, this.requestFrame = function(a) {
            this.frameID = requestAnimationFrame(this.frame.bind(this, a))
        }, this.scrollDirection = function(a) {
            return this.lastScrollTop ? this.lastScrollTop > a?-1 : this.lastScrollTop < a ? 1 : 0 : a ? 1 : 0
        }, this.eventDelay = function(a) {
            return a ? Date.now() - a : - 1
        }, this.resizeDelay = function() {
            return this.eventDelay(this.lastResizeEvent)
        }, this.scrollDelay = function() {
            return this.eventDelay(this.lastScrollEvent)
        }, this.scrollDistance = function(a) {
            return Math.abs(a - (this.lastScrollTop || 0))
        }, this.scrollTop = function() {
            return this.$element.scrollTop()
        }, this.start = function() {
            if (this.active)
                return;
            this.active=!0, this.requestInitialFrame(), this.on(this.$element, "scroll", this.handleNativeScroll), this.on(window, "resize", this.handleNativeResize)
        }, this.stop = function(a, b) {
            if (!this.active)
                return;
            b || (b = {}), this.active=!1, this.off(this.$element, "scroll", this.handleNativeScroll), this.off(window, "resize", this.handleNativeResize), b.cancelPending && this.cancelPendingFrame()
        }, this.validResizeDelay = function(a) {
            return this.validEventDelay(a, this.attr.scrollDelay)
        }, this.validScrollDelay = function(a) {
            return this.validEventDelay(a, this.attr.scrollDelay)
        }, this.validEventDelay = function(a, b) {
            return b > 0 ? a>-1 ? a >= b : !0 : b === 0
        }, this.validScrollDistance = function(a) {
            return this.attr.scrollDelta === 0 || a >= this.attr.scrollDelta
        }, this.after("initialize", function(a) {
            this.on("uiScrollMonitorStart", this.start), this.on("uiScrollMonitorStop", this.stop), this.$element = $(a === window ? document : a), this.attr.autoStart && this.trigger("uiScrollMonitorStart")
        })
    }
    var defineComponent = require("core/component");
    module.exports = defineComponent(scrollMonitor)
});
define("app/ui/visibility_monitor", ["module", "require", "exports", "core/component"], function(module, require, exports) {
    function visibilityMonitor() {
        var a =- 1, b = 0, c = 1, d =- 1;
        this.attributes({
            scrollTargetSelector: undefined,
            containerSelector: undefined,
            nodeIdentifier: "id",
            viewBuffer: 400
        });
        var e = null, f = null;
        this.lastScrollTop = null, this.clientHeight = null, this.firstOnScreen = null, this.lastOnScreen = null, this.positions, this.sendVisibilityData = function(a, c) {
            this.lastScrollTop = Math.max(c.scrollTop, 0), this.clientHeight = c.clientHeight, this.screenTop = this.lastScrollTop - this.attr.viewBuffer, this.screenBottom = this.getScreenBottom(this.lastScrollTop), this.adjustBounds();
            var d = Object.keys(this.positions).filter(function(a) {
                return this.positions[a] === b
            }, this), e = Object.keys(this.positions).filter(function(a) {
                return this.positions[a] !== b
            }, this);
            this.trigger("uiVisibleItemsChanged", {
                revealed: d,
                hidden: e
            })
        }, this.adjustBounds = function() {
            var f;
            this.positions = {};
            if (!e.children.length) {
                this.firstOnScreen = this.lastOnScreen = null;
                return 
            }
            this.lastOnScreen = null;
            if (!this.firstOnScreen ||!this.firstOnScreen.parentNode || this.firstOnScreen.style.display == "none")
                this.firstOnScreen = e.children()[0];
            f = this.position(this.firstOnScreen);
            if (f === b)
                this.firstOnScreen = this.findLastElementInZone(this.firstOnScreen, b, d);
            else {
                if (f !== a) {
                    this.lastOnScreen = this.findFirstElementBeyondZone(this.firstOnScreen, c, d), this.firstOnScreen = this.findLastElementInZone(this.lastOnScreen, b, d);
                    return 
                }
                this.firstOnScreen = this.findFirstElementBeyondZone(this.firstOnScreen, a)
            }
            this.lastOnScreen || (this.lastOnScreen = this.findLastElementInZone(this.firstOnScreen, b))
        }, this.position = function(d) {
            var e = this.positions[d.getAttribute("id")];
            if (e)
                return e;
            d.cachedOffsetHeight = d.offsetHeight;
            var f = this.getOffsetTop(d), g = f + d.cachedOffsetHeight, h;
            return g < this.screenTop && (h = a), f > this.screenBottom && (h = c), h || (h = b), this.positions[d.getAttribute("id")] = h, h
        }, this.findLastElementInZone = function(a, b, c) {
            var e, f = c === d ? "previousElementSibling": "nextElementSibling";
            while (e = a[f]) {
                if (this.position(e) !== b)
                    break;
                a = e
            }
            return a
        }, this.findFirstElementBeyondZone = function(a, b, c) {
            var e, f = c === d ? "previousElementSibling": "nextElementSibling";
            while (e = a[f]) {
                a = e;
                if (this.position(e) !== b)
                    break
            }
            return a
        }, this.getOffsetTop = function(a) {
            return $(a).offset().top - this.$scrollTarget.offset().top
        }, this.getScreenBottom = function(a) {
            return a + window.innerHeight + this.attr.viewBuffer
        }, this.after("initialize", function(a) {
            e = $(this.attr.containerSelector), this.$scrollTarget = $(this.attr.scrollTargetSelector), this.on(document, "uiElementHasScrolled", this.sendVisibilityData), this.on(document, "uiScrollMonitorStarted", this.sendVisibilityData)
        })
    }
    var defineComponent = require("core/component");
    module.exports = defineComponent(visibilityMonitor)
});
define("app/boot/smart_infinite_scroll", ["module", "require", "exports", "app/ui/scrollable_range", "app/ui/scroll_monitor", "app/ui/visibility_monitor"], function(module, require, exports) {
    function initialize() {
        ScrollableRange.attachTo(document, {
            containerSelector: "#stream-items-id",
            noTeardown: !0
        }), ScrollMonitor.attachTo(document, {
            autoStart: !0,
            scrollDelay: 33,
            ScrollDelta: 30
        }), VisibilityMonitor.attachTo(document, {
            scrollTargetSelector: "body",
            containerSelector: "#stream-items-id",
            nodeIdentifier: "data-item-id",
            viewBuffer: 600
        })
    }
    var ScrollableRange = require("app/ui/scrollable_range"), ScrollMonitor = require("app/ui/scroll_monitor"), VisibilityMonitor = require("app/ui/visibility_monitor");
    module.exports = initialize
});
define("app/data/trends", ["module", "require", "exports", "core/component", "app/utils/setup_polling_with_backoff", "app/data/with_data"], function(module, require, exports) {
    var defineComponent = require('core/component'), setupPollingWithBackoff = require('app/utils/setup_polling_with_backoff'), withData = require('app/data/with_data');
    module.exports = defineComponent(trendsData, withData);
    function trendsData() {
        this.defaultAttrs({
            src: 'module',
            $backoffNode: $(window),
            trendsPollingOptions: {
                focusedInterval: 5 * 60 * 1000,
                blurredInterval: 20 * 60 * 1000,
                eventData: {
                    source: 'clock' 
                }
            }
        });
        this.makeTrendsRequest = function (data) {
            var woeid = data.woeid;
            var source = data.source;
            var success = function (results) {
                results.source = source;
                this.trigger('dataTrendsRefreshed', results);
            };
            // TODO(DISCOFE-536): Remove pc param once server always returns promoted trends
            // for logged in users.
            this.get({
                url: '/trends',
                eventData: data,
                data: {
                    k: this.currentCacheKey,
                    woeid: woeid,
                    pc: true,
                    personalized: data.personalized,
                    src: this.attr.src,
                    show_context: this.attr.show_context
                },
                success: success.bind(this),
                error: 'dataTrendsRefreshedError'
            });
        };
        this.makeTrendsDialogRequest = function (data, isUpdate) {
            var reqData = {
                woeid: data.woeid,
                personalized: data.personalized,
                pc: true
            };
            var success = function (results) {
                this.trigger('dataGotTrendsDialog', results);
                if (this.currentWoeid && this.currentWoeid !== results.woeid) {
                    this.trigger('dataTrendsLocationChanged');
                }
                this.currentWoeid = results.woeid;
                if (results.trends_cache_key) {
                    this.currentCacheKey = results.trends_cache_key;
                    // after the user changes their settings,
                    // clear the push state cache so that on
                    // navigation, this component will initialize
                    // with the new trendsCacheKey.
                    this.trigger('dataPageMutated');
                }
                // SEARCHFE-1021: This triggers a request to MS to render the trends data after a request has been sent
                // to MR to write the new trends settings. This does not work properly when running local monorail because writes
                // are not properly preserved. Testing in this area is limited to ensuring that the correct response is sent to MS.
                // There are separate tests to ensure that these requests are handled properly.
                if (results.update_module_html) {
                    this.trigger('uiRefreshTrends', results);
                }
            };
            var xhr = isUpdate ? this.post : this.get;
            xhr.call(this, {
                url: '/trends/dialog',
                eventData: data,
                data: reqData,
                success: success.bind(this),
                error: 'dataGotTrendsDialogError'
            });
        };
        this.changeTrendsLocation = function (event, data) {
            this.makeTrendsDialogRequest(data, true);
        };
        this.refreshTrends = function (event, data) {
            data = data || {};
            this.makeTrendsRequest(data);
        };
        this.getTrendsDialog = function (event, data) {
            data = data || {};
            this.makeTrendsDialogRequest(data);
        };
        this.updateTrendsCacheKey = function (event, data) {
            this.currentCacheKey = data.trendsCacheKey;
        };
        this.after('initialize', function () {
            // the trends module is served with http caching.
            // a cache key is included in every request so
            // that for every trends setting, a unique url
            // is used.
            this.currentCacheKey = this.attr.trendsCacheKey;
            this.timer = setupPollingWithBackoff('uiRefreshTrends', this.attr.$backoffNode, this.attr.trendsPollingOptions);
            this.on('uiWantsTrendsDialog', this.getTrendsDialog);
            this.on('uiChangeTrendsLocation', this.changeTrendsLocation);
            this.on('uiRefreshTrends', this.refreshTrends);
            // TODO(DISCOFE-482): Remove this temporary hack once we have
            // a trends location write endpoint.
            this.on('dataTempTrendsCacheKeyChanged', this.updateTrendsCacheKey);
        });
    }
});
define("app/data/trends/location_dialog", ["module", "require", "exports", "core/component", "app/data/with_data"], function(module, require, exports) {
    var defineComponent = require('core/component'), withData = require('app/data/with_data');
    module.exports = defineComponent(trendsLocationDialogData, withData);
    function trendsLocationDialogData() {
        this.getTrendsLocationDialog = function (event, data) {
            var success = function (results) {
                this.trigger('dataGotTrendsLocationDialog', results);
                if (results.trendLocations) {
                    this.trigger('dataLoadedTrendLocations', {
                        trendLocations: results.trendLocations 
                    });
                }
            };
            this.get({
                url: '/trends/location_dialog',
                eventData: data,
                success: success.bind(this),
                error: 'dataGotTrendsLocationDialogError'
            });
        };
        this.updateTrendsLocation = function (event, data) {
            var location = data.location || {};
            // TODO(DISCOFE-536): Remove pc param once server always returns promoted trends
            // for logged in users.
            var reqData = {
                woeid: location.woeid,
                personalized: data.personalized,
                pc: true
            };
            var success = function (results) {
                this.trigger('dataChangedTrendLocation', {
                    personalized: results.personalized,
                    location: location
                });
                if (results.trends_cache_key) {
                    // TODO(DISCOFE-482): Remove this temporary hack once we have
                    // a trends location write endpoint.
                    this.trigger('dataTempTrendsCacheKeyChanged', {
                        trendsCacheKey: results.trends_cache_key 
                    });
                    // after the user changes their settings,
                    // clear the push state cache so that on
                    // navigation, this component will initialize
                    // with the new trendsCacheKey.
                    this.trigger('dataPageMutated');
                }
                // SEARCHFE-1021: This triggers a request to MS to render the trends data after a request has been sent
                // to MR to write the new trends settings. This does not work properly when running local monorail because writes
                // are not properly preserved. Testing in this area is limited to ensuring that the correct response is sent to MS.
                // There are separate tests to ensure that these requests are handled properly.
                if (results.update_module_html) {
                    this.trigger('uiRefreshTrends', results);
                }
            };
            // TODO(DISCOFE-482): Posting to the monorail endpoint until we
            // have a MS write endpoint.
            this.post({
                url: '/trends/dialog',
                eventData: data,
                data: reqData,
                success: success.bind(this),
                error: 'dataGotTrendsLocationDialogError'
            });
        };
        this.after('initialize', function () {
            this.on('uiWantsTrendsLocationDialog', this.getTrendsLocationDialog);
            this.on('uiChangeLocation', this.updateTrendsLocation);
        });
    };
});
define("app/data/trends/recent_locations", ["module", "require", "exports", "core/component", "app/utils/storage/custom", "app/data/with_data"], function(module, require, exports) {
    var defineComponent = require('core/component'), customStorage = require('app/utils/storage/custom'), withData = require('app/data/with_data');
    module.exports = defineComponent(trendsRecentLocations, withData);
    function trendsRecentLocations() {
        this.defaultAttrs({
            storageName: 'recent_trend_locations',
            storageKey: 'locations',
            maxRecentLocations: 5
        });
        this.initializeStorage = function () {
            var Storage = customStorage({
                withArray: true,
                withMaxElements: true
            });
            this.storage = new Storage(this.attr.storageName);
            this.storage.setMaxElements(this.attr.storageKey, this.attr.maxRecentLocations);
        };
        this.getRecentTrendLocations = function () {
            this.trigger('dataGotRecentTrendLocations', {
                trendLocations: this.storage.getArray(this.attr.storageKey) 
            });
        };
        this.saveRecentLocation = function (e, data) {
            var location = data.location || {};
            // Only save a locations with a woeid (personalized with not have one)
            // that are not in the list already.
            if (!location.woeid || this.hasRecentLocation(location.woeid)) {
                return;
            }
            this.storage.push(this.attr.storageKey, location);
            // Rebroadcast trend locations so UI can update accordingly.
            this.getRecentTrendLocations();
        };
        this.hasRecentLocation = function (woeid) {
            var locations = this.storage.getArray(this.attr.storageKey);
            return locations.some(function (loc) {
                return loc.woeid === woeid;
            });
        };
        this.after('initialize', function () {
            this.initializeStorage();
            this.on('uiWantsRecentTrendLocations', this.getRecentTrendLocations);
            this.on('dataChangedTrendLocation', this.saveRecentLocation);
        });
    };
});
define("app/utils/scribe_event_initiators", ["module", "require", "exports"], function(module, require, exports) {
    // no_unit_test
    module.exports = {
        clientSideUser: 0,
        serverSideUser: 1,
        clientSideApp: 2,
        serverSideApp: 3
    };
});
define("app/data/trends_scribe", ["module", "require", "exports", "core/component", "app/data/with_scribe", "app/utils/scribe_item_types", "app/utils/scribe_event_initiators"], function(module, require, exports) {
    var defineComponent = require('core/component'), withScribe = require('app/data/with_scribe'), itemTypes = require('app/utils/scribe_item_types'), eventInitiators = require('app/utils/scribe_event_initiators');
    module.exports = defineComponent(trendsScribe, withScribe);
    function trendsScribe() {
        // web:*:*:trends:trend:search
        this.scribeTrendClick = function (e, data) {
            this.scribe('search', data);
        };
        // web:*:*:trends:more:click
        this.scribeMoreClick = function (e, data) {
            this.scribe('click', data);
        };
        // Data should contain: items, initial, source
        this.prepareScribeData = function (data) {
            var items = [];
            var resultsType = data.initial ? 'initial' : 'newer';
            var scribeData = {
                referring_event: resultsType 
            };
            var isPromoted = false;
            scribeData.items = data.items.map(function (trend, pos) {
                var item = {
                    name: trend.name,
                    item_type: itemTypes.trend,
                    item_query: trend.name,
                    position: pos
                };
                if (trend.promotedTrendId) {
                    item.promoted_id = trend.promotedTrendId;
                    isPromoted = true;
                }
                return item;
            });
            if (isPromoted) {
                scribeData.promoted = isPromoted;
            }
            if (data.source === 'clock') {
                scribeData.event_initiator = eventInitiators.clientSideApp;
            }
            return scribeData;
        };
        // web:*:*:trends:<initial|newer>:<results|no_results>
        this.scribeTrendsResults = function (e, data) {
            var scribeData = this.prepareScribeData(data);
            var scribeContext = {
                element: scribeData.referring_event,
                action: data.items && data.items.length ? 'results' : 'no_results'
            };
            this.scribe(scribeContext, data, scribeData);
            if (data.initial) {
                this.scribeTrendsImpression(data);
            }
        };
        // web:*:*:trends::impression
        this.scribeTrendsImpression = function (data) {
            this.scribe('impression', data);
        };
        this.after('initialize', function () {
            this.scribeOnEvent('uiTrendsDialogOpened', 'open');
            this.on('uiTrendSelected', this.scribeTrendClick);
            this.on('uiShowMoreTrends', this.scribeMoreClick);
            this.on('uiTrendsDisplayed', this.scribeTrendsResults);
        });
    }
});
define("app/ui/trends/trends", ["module", "require", "exports", "core/component", "app/utils/scribe_item_types", "app/ui/with_item_actions"], function(module, require, exports) {
    var defineComponent = require('core/component');
    var itemTypes = require('app/utils/scribe_item_types');
    var withItemActions = require('app/ui/with_item_actions');
    module.exports = defineComponent(trendsModule, withItemActions);
    function trendsModule() {
        this.defaultAttrs({
            showMoreLinkSelector: '.js-show-more-trends-container',
            hiddenTrendsSelector: '.js-hidden-trends',
            changeLinkSelector: '.change-trends',
            trendsInnerSelector: '.trends-inner',
            trendItemSelector: '.js-trend-item',
            promotedTweetProofSelector: '.tweet-proof-container.promoted-tweet',
            trendLinkItemSelector: '.js-trend-item a',
            eventTrendClass: 'event-trend',
            itemType: 'trend',
            displaySource: 'module'
        });
        this.openChangeTrendsDialog = function (e) {
            this.trigger('uiShowTrendsLocationDialog');
            e.preventDefault();
        };
        this.showMoreTrends = function (e, data) {
            this.select('hiddenTrendsSelector').show();
            this.select('showMoreLinkSelector').hide();
            this.moreTrendsShown = true;
            this.trigger('uiShowMoreTrends', {
                scribeContext: {
                    element: 'more' 
                }
            });
        };
        this.updateModuleContent = function (e, data) {
            var isInitial = this.$node.hasClass('hidden');
            var source = data.source;
            this.select('trendsInnerSelector').html(data.module_html);
            this.currentWoeid = data.woeid;
            // Unhide trends with animation
            if (this.attr.displaySource === 'front-page') {
                this.$node.slideDown().removeClass('hidden');
            } else {
                this.$node.fadeIn().removeClass('hidden');
            }
            if (this.moreTrendsShown) {
                this.select('hiddenTrendsSelector').show();
                this.select('showMoreLinkSelector').hide();
            }
            var trends = this.getTrendData(this.select('trendItemSelector'));
            this.trigger('uiTrendsDisplayed', {
                items: trends,
                initial: isInitial,
                source: source,
                scribeData: {
                    woeid: this.currentWoeid 
                }
            });
            var tweetproof = this.getPromotedTweetProofData(this.select('promotedTweetProofSelector'));
            this.trigger('uiTweetsDisplayed', {
                tweets: tweetproof 
            });
        };
        this.trendSelected = function (e, data) {
            var $item = $(data.el).closest(this.attr.trendItemSelector);
            var trend = this.getTrendData($item)[0];
            var pos = $item.index();
            var item = {
                name: trend.name,
                item_query: trend.name,
                position: pos,
                item_type: itemTypes.trend
            };
            var scribeData = {
                position: pos,
                query: trend.name,
                url: $item.find('a').attr('href'),
                woeid: this.currentWoeid
            };
            if (trend.promotedTrendId) {
                item.promoted_id = trend.promotedTrendId;
                scribeData.promoted = true;
            }
            scribeData.items = [item];
            this.trigger('uiTrendSelected', {
                isPromoted: !!trend.promotedTrendId,
                promotedTrendId: trend.promotedTrendId,
                scribeContext: {
                    element: 'trend' 
                },
                scribeData: scribeData
            });
        };
        this.getTrendData = function ($trends) {
            return $trends.map(function () {
                var $this = $(this);
                return {
                    name: $this.data('trend-name'),
                    promotedTrendId: $this.data('promoted-trend-id'),
                    trendingEvent: $this.hasClass('event-trend')
                };
            }).toArray();
        };
        this.getPromotedTweetProofData = function ($tweets) {
            return $tweets.map(function (i, el) {
                return {
                    impressionId: $(el).data('impression-id') 
                };
            }).toArray();
        };
        this.after('initialize', function () {
            this.moreTrendsShown = false;
            this.on(document, 'dataTrendsRefreshed', this.updateModuleContent);
            this.on('click', {
                changeLinkSelector: this.openChangeTrendsDialog,
                trendLinkItemSelector: this.trendSelected,
                showMoreLinkSelector: this.showMoreTrends
            });
            this.trigger('uiRefreshTrends');
        });
    }
});
define("app/ui/trends/dialog/with_location_info", ["module", "require", "exports"], function(module, require, exports) {
    module.exports = withLocationInfo;
    function withLocationInfo() {
        this.defaultAttrs({
            location: {},
            personalized: false
        });
        this.setLocationInfo = function (event, data) {
            this.attr.personalized = !!data.personalized;
            this.attr.location = data.location || {};
            this.trigger('uiLocationInfoUpdated');
        };
        this.changeLocationInfo = function (location) {
            this.trigger('uiChangeLocation', {
                location: location 
            });
        };
        this.setPersonalizedTrends = function () {
            this.trigger('uiChangeLocation', {
                personalized: true 
            });
        };
        this.after('initialize', function () {
            this.on(document, 'dataChangedTrendLocation', this.setLocationInfo);
        });
    };
});
define("app/ui/trends/dialog/location_dropdown", ["module", "require", "exports", "core/component", "app/ui/trends/dialog/with_location_info"], function(module, require, exports) {
    var defineComponent = require('core/component'), withLocationInfo = require('app/ui/trends/dialog/with_location_info');
    module.exports = defineComponent(trendsLocationDropdown, withLocationInfo);
    function trendsLocationDropdown() {
        this.defaultAttrs({
            regionsSelector: 'select[name="regions"]',
            citiesSelector: 'select[name="cities"]'
        });
        this.initializeCities = function () {
            this.citiesByRegionWoeid = {};
            var $cities = this.$cities.find('option');
            $cities.each(function (index, city) {
                var $city = $(city);
                var woeid = $city.data('woeid');
                if (!this.citiesByRegionWoeid[woeid]) {
                    this.citiesByRegionWoeid[woeid] = [];
                }
                this.citiesByRegionWoeid[woeid].push($city);
            }.bind(this));
        };
        this.updateDropdown = function () {
            var woeid = this.$regions.val();
            // Default to the empty string if we don't have any cities.
            // This should only happen for the default case (when no region
            // is selected).
            var $cities = this.citiesByRegionWoeid[woeid] || '';
            this.$cities.empty();
            this.$cities.html($cities);
        };
        this.updateRegion = function () {
            this.updateDropdown();
            // Select the default option (the region) and trigger the
            // change event. The default option (All cities) stores the
            // woeid of the region.
            var $defaultOption = this.$cities.children().first();
            if ($defaultOption.length) {
                $defaultOption.prop('selected', true);
                $defaultOption.change();
            }
        };
        this.updateCity = function () {
            var $selectedOption = this.$cities.find('option:selected');
            var woeid = parseInt($selectedOption.val(), 10);
            var name = $selectedOption.data('name');
            // Store the current selection so we can reset if another
            // component changes the location.
            this.currentSelection = woeid;
            this.changeLocationInfo({
                woeid: woeid,
                name: name
            });
        };
        this.possiblyClearSelection = function () {
            if (this.currentSelection != this.attr.location.woeid) {
                this.reset();
            }
        };
        this.reset = function () {
            this.currentSelection = null;
            var $defaultRegion = this.$regions.find('option[value=""]');
            $defaultRegion.prop('selected', true);
            this.updateDropdown();
        };
        this.after('initialize', function () {
            this.$regions = this.select('regionsSelector');
            this.$cities = this.select('citiesSelector');
            this.initializeCities();
            this.on(this.$regions, 'change', this.updateRegion);
            this.on(this.$cities, 'change', this.updateCity);
            this.on(document, 'uiTrendsDialogReset', this.reset);
            this.on('uiLocationInfoUpdated', this.possiblyClearSelection);
            this.updateDropdown();
        });
    };
});
define("app/ui/trends/dialog/location_search", ["module", "require", "exports", "core/component", "app/ui/trends/dialog/with_location_info", "app/ui/typeahead/typeahead_dropdown", "app/ui/typeahead/typeahead_input"], function(module, require, exports) {
    var defineComponent = require('core/component'), withLocationInfo = require('app/ui/trends/dialog/with_location_info'), TypeaheadDropdown = require('app/ui/typeahead/typeahead_dropdown'), TypeaheadInput = require('app/ui/typeahead/typeahead_input');
    module.exports = defineComponent(trendsLocationSearch, withLocationInfo);
    function trendsLocationSearch() {
        this.defaultAttrs({
            inputSelector: 'input.trends-location-search-input' 
        });
        this.executeTypeaheadSelection = function (e, data) {
            // Special case the "No Results" item click.
            if (data.item.woeid == - 1) {
                this.trigger('uiTrendsLocationSearchNoResults');
                return;
            }
            // Store the current selection so we can clear out the
            // search input if the location changes.
            this.currentSelection = data.item;
            this.changeLocationInfo({
                woeid: data.item.woeid,
                name: data.item.name
            });
        };
        this.possiblyClearSelection = function () {
            if (this.currentSelection && this.currentSelection.woeid != this.attr.location.woeid) {
                this.reset();
            }
        };
        this.reset = function (e, data) {
            this.currentSelection = null;
            this.$input.val('');
        };
        this.after('initialize', function () {
            this.$input = this.select('inputSelector');
            this.on('uiTypeaheadItemSelected uiTypeaheadItemComplete', this.executeTypeaheadSelection);
            this.on('uiLocationInfoUpdated', this.possiblyClearSelection);
            this.on(document, 'uiTrendsDialogReset', this.reset);
            TypeaheadInput.attachTo(this.$node, {
                inputSelector: this.attr.inputSelector 
            });
            TypeaheadDropdown.attachTo(this.$node, {
                inputSelector: this.attr.inputSelector,
                blockLinkActions: true,
                datasourceRenders: [[
                'trendLocations',
                ['trendLocations']
                ]],
                deciders: this.attr.typeaheadData,
                eventData: {
                    scribeContext: {
                        component: 'trends_location_search' 
                    }
                }
            });
        });
    };
});
define("app/ui/trends/dialog/current_location", ["module", "require", "exports", "core/component", "app/ui/trends/dialog/with_location_info"], function(module, require, exports) {
    var defineComponent = require('core/component'), withLocationInfo = require('app/ui/trends/dialog/with_location_info');
    module.exports = defineComponent(trendsCurrentLocation, withLocationInfo);
    function trendsCurrentLocation() {
        this.defaultAttrs({
            personalizedSelector: '.js-location-personalized',
            nonpersonalizedSelector: '.js-location-nonpersonalized',
            currentLocationSelector: '.current-location'
        });
        this.updateView = function () {
            // Make sure this is an actual boolean value.
            if (!this.attr.personalized) {
                this.select('currentLocationSelector').text(this.attr.location.name);
            }
            this.select('nonpersonalizedSelector').toggle(!this.attr.personalized);
            this.select('personalizedSelector').toggle(!!this.attr.personalized);
        };
        this.after('initialize', function () {
            this.updateView();
            this.on('uiLocationInfoUpdated', this.updateView);
        });
    };
});
define("app/ui/trends/dialog/with_location_list_picker", ["module", "require", "exports", "core/compose", "app/ui/trends/dialog/with_location_info"], function(module, require, exports) {
    var compose = require('core/compose'), withLocationInfo = require('app/ui/trends/dialog/with_location_info');
    module.exports = withLocationListPicker;
    function withLocationListPicker() {
        compose.mixin(this, [withLocationInfo]);
        this.defaultAttrs({
            locationSelector: '.trend-location-picker-item',
            selectedAttr: 'selected'
        });
        this.selectLocation = function (event, data) {
            event.preventDefault();
            var $item = $(data.el);
            var location = {
                woeid: $item.data('woeid'),
                name: $item.data('name')
            };
            this.changeLocationInfo(location);
            this.showSelected(location.woeid, false);
        };
        this.showSelected = function (woeid, isPersonalized) {
            var locations = this.select('locationSelector');
            locations.removeClass(this.attr.selectedAttr);
            // Only show the selection for non-personalized users.
            if (!isPersonalized && woeid) {
                locations.filter('[data-woeid="' + woeid + '"]').addClass(this.attr.selectedAttr);
            }
        };
        this.locationInfoUpdated = function () {
            this.showSelected(this.attr.location.woeid, this.attr.personalized);
        };
        this.after('initialize', function () {
            this.on('uiLocationInfoUpdated', this.locationInfoUpdated);
            this.on('click', {
                locationSelector: this.selectLocation 
            });
            this.showSelected(this.attr.location.woeid, this.attr.personalized);
        });
    };
});
define("app/ui/trends/dialog/nearby_trends", ["module", "require", "exports", "core/component", "app/ui/trends/dialog/with_location_list_picker"], function(module, require, exports) {
    var defineComponent = require('core/component'), withLocationListPicker = require('app/ui/trends/dialog/with_location_list_picker');
    module.exports = defineComponent(trendsNearby, withLocationListPicker);
    function trendsNearby() {};
});
define("app/ui/trends/dialog/recent_trends", ["module", "require", "exports", "core/component", "app/ui/trends/dialog/with_location_list_picker"], function(module, require, exports) {
    var defineComponent = require('core/component'), withLocationListPicker = require('app/ui/trends/dialog/with_location_list_picker');
    module.exports = defineComponent(trendsRecent, withLocationListPicker);
    function trendsRecent() {
        this.defaultAttrs({
            listContainerSelector: '.trend-location-picker' 
        });
        this.loadTrendLocations = function (e, data) {
            var locations = data.trendLocations;
            this.$list.empty();
            locations.forEach(function (location) {
                var $item = this.$template.clone(false);
                var $link = $item.find('button');
                $link.text(location.name);
                // Need to use attr instead of data so that we can
                // updated selected locations.
                $link.attr('data-woeid', location.woeid);
                $link.attr('data-name', location.name);
                this.$list.append($item);
            }, this);
            this.$node.toggle(locations.length > 0);
        };
        this.after('initialize', function () {
            this.$list = this.select('listContainerSelector');
            this.$template = this.$list.find('li:first').clone(false);
            this.on(document, 'dataGotRecentTrendLocations', this.loadTrendLocations);
            this.trigger('uiWantsRecentTrendLocations');
        });
    };
});
define("app/ui/trends/dialog/dialog", ["module", "require", "exports", "core/component", "app/ui/with_dialog", "app/ui/trends/dialog/location_dropdown", "app/ui/trends/dialog/location_search", "app/ui/trends/dialog/current_location", "app/ui/trends/dialog/nearby_trends", "app/ui/trends/dialog/recent_trends", "app/ui/trends/dialog/with_location_info"], function(module, require, exports) {
    var defineComponent = require('core/component'), withDialog = require('app/ui/with_dialog'), LocationDropdown = require('app/ui/trends/dialog/location_dropdown'), LocationSearch = require('app/ui/trends/dialog/location_search'), CurrentLocation = require('app/ui/trends/dialog/current_location'), NearbyTrends = require('app/ui/trends/dialog/nearby_trends'), RecentTrends = require('app/ui/trends/dialog/recent_trends'), withLocationInfo = require('app/ui/trends/dialog/with_location_info');
    module.exports = defineComponent(trendsLocationDialog, withDialog, withLocationInfo);
    function trendsLocationDialog() {
        this.defaultAttrs({
            contentSelector: '#trends_dialog_content',
            quickSelectSelector: '#trend-locations-quick-select',
            dropdownSelector: '#trend-locations-dropdown-select',
            personalizedSelector: '.trends-personalized',
            nonPersonalizedSelector: '.trends-by-location',
            changeTrendsSelector: '.customize-by-location',
            showDropdownSelector: '.js-show-dropdown-select',
            showQuickSelectSelector: '.js-show-quick-select',
            searchSelector: '.trends-search-locations',
            nearbySelector: '.trends-nearby-locations',
            recentSelector: '.trends-recent-locations',
            currentLocationSelector: '.trends-current-location',
            loadingSelector: '#trend-locations-loading',
            defaultSelector: '.select-default',
            doneSelector: '.done',
            errorSelector: '.trends-dialog-error p',
            errorClass: 'has-error'
        });
        this.openDialog = function (e, data) {
            this.trigger('uiTrendsDialogOpened');
            // Remotely load the dialog html on initial open.
            if (!this.initialized) {
                this.trigger('uiWantsTrendsLocationDialog');
                this.initialized = true;
            } else {
                // Only call setCurrentView when the dialog is already initialized.
                // Otherwise the call will happen after data is remotely loaded.
                this.setCurrentView();
            }
            this.$node.removeClass('has-error');
            this.open();
        };
        this.setCurrentView = function () {
            if (this.attr.personalized) {
                this.showPersonalizedView();
            } else {
                this.showNonpersonalizedView();
            }
            this.trigger(this.$dialog, 'uiDialogContentChanged');
        };
        this.showPersonalizedView = function () {
            this.select('nonPersonalizedSelector').hide();
            this.select('personalizedSelector').show();
            this.trigger(this.$dialog, 'uiDialogContentChanged');
        };
        this.showNonpersonalizedView = function () {
            this.select('personalizedSelector').hide();
            this.select('nonPersonalizedSelector').show();
            this.trigger(this.$dialog, 'uiDialogContentChanged');
        };
        this.showQuickSelectContainer = function (e, data) {
            this.showNonpersonalizedView();
            this.select('dropdownSelector').hide();
            this.select('quickSelectSelector').show();
            this.trigger(this.$dialog, 'uiDialogContentChanged');
        };
        this.showDropdownContainer = function (e, data) {
            this.showNonpersonalizedView();
            this.select('quickSelectSelector').hide();
            this.select('dropdownSelector').show();
            this.trigger(this.$dialog, 'uiDialogContentChanged');
        };
        this.hideViews = function () {
            this.select('personalizedSelector').hide();
            this.select('nonPersonalizedSelector').hide();
        };
        this.showError = function (e, data) {
            this.hideViews();
            this.hideLoading();
            this.initialized = false;
            this.$node.addClass(this.attr.errorClass);
            this.select('errorSelector').html(data.message);
            this.trigger(this.$dialog, 'uiDialogContentChanged');
        };
        this.selectDefault = function (e, data) {
            var $button = $(e.target);
            var personalized = !!$button.data('personalized');
            if (personalized) {
                this.setPersonalizedTrends();
            } else {
                this.changeLocationInfo({
                    name: $button.data('name'),
                    woeid: $button.data('woeid')
                });
            }
            this.close();
        };
        this.reset = function (e, data) {
            this.showQuickSelectContainer();
            this.trigger('uiTrendsDialogReset');
        };
        this.initializeDialog = function (e, data) {
            this.select('contentSelector').html(data.dialog_html);
            this.setLocationInfo(e, data);
            this.initializeComponents();
            this.setCurrentView();
        };
        this.showLoading = function () {
            this.select('loadingSelector').show();
            this.trigger(this.$dialog, 'uiDialogContentChanged');
        };
        this.hideLoading = function () {
            this.select('loadingSelector').hide();
        };
        this.initializeComponents = function (e, data) {
            CurrentLocation.attachTo(this.attr.currentLocationSelector, {
                location: this.attr.location,
                personalized: this.attr.personalized
            });
            LocationSearch.attachTo(this.attr.searchSelector, {
                typeaheadData: this.attr.typeaheadData 
            });
            LocationDropdown.attachTo(this.attr.dropdownSelector);
            NearbyTrends.attachTo(this.attr.nearbySelector, {
                location: this.attr.location,
                personalized: this.attr.personalized
            });
            RecentTrends.attachTo(this.attr.recentSelector, {
                location: this.attr.location,
                personalized: this.attr.personalized
            });
        };
        this.after('initialize', function () {
            this.hideViews();
            this.on('uiChangeLocation', this.showLoading);
            this.on('uiTrendsLocationSearchNoResults', this.showDropdownContainer);
            this.on(document, 'uiShowTrendsLocationDialog', this.openDialog);
            this.on('uiDialogClosed', this.reset);
            this.on(document, 'dataGotTrendsLocationDialog', this.initializeDialog);
            this.on(document, 'dataGotTrendsLocationDialogError', this.showError);
            this.on('uiLocationInfoUpdated', this.hideLoading);
            this.on('click', {
                doneSelector: this.close,
                defaultSelector: this.selectDefault,
                changeTrendsSelector: this.showNonpersonalizedView,
                showDropdownSelector: this.showDropdownContainer,
                showQuickSelectSelector: this.showQuickSelectContainer
            });
        });
    };
});
define("app/boot/trends", ["module", "require", "exports", "app/data/trends", "app/data/trends/location_dialog", "app/data/trends/recent_locations", "app/data/trends_scribe", "app/ui/trends/trends", "app/ui/trends/dialog/dialog", "core/utils"], function(module, require, exports) {
    // no_unit_test
    var TrendsData = require('app/data/trends');
    var TrendsLocationDialogData = require('app/data/trends/location_dialog');
    var TrendsRecentLocationsData = require('app/data/trends/recent_locations');
    var TrendsScribe = require('app/data/trends_scribe');
    var TrendsModule = require('app/ui/trends/trends');
    var TrendsLocationDialog = require('app/ui/trends/dialog/dialog');
    var utils = require('core/utils');
    module.exports = function initialize(options) {
        // TODO(DISCOFE-518): Separate trends module and dialog scribe components.
        // TODO(DISCOFE-519): Separate trends module and dialog data components.
        TrendsScribe.attachTo(document, options);
        TrendsData.attachTo(document, utils.merge(options, {
            show_context: options.show_context 
        }));
        TrendsModule.attachTo('.module.trends', {
            loggedIn: options.loggedIn,
            displaySource: options.src,
            eventData: {
                scribeContext: {
                    component: 'trends' 
                }
            }
        });
        TrendsLocationDialogData.attachTo(document, options);
        TrendsRecentLocationsData.attachTo(document, options);
        TrendsLocationDialog.attachTo('#trends_dialog', {
            typeaheadData: options.typeaheadData,
            eventData: {
                scribeContext: {
                    component: 'trends_location_dialog' 
                }
            }
        });
    };
});
define("app/ui/infinite_scroll_watcher", ["module", "require", "exports", "core/component", "core/utils"], function(module, require, exports) {
    function infiniteScrollWatcher() {
        var a = 0, b = 1;
        this.checkScrollPosition = function() {
            var c = this.webkitFullscreenElement();
            if (c && this.node != c&&!c.contains(this.node))
                return;
            var d = this.$content.height(), e=!1;
            this.inTriggerRange(a) && (d > this.lastTriggeredHeight || this.lastTriggeredFrom(b)) ? (this.trigger("uiNearTheTop"), this.lastTriggerFrom = a, e=!0) : this.inTriggerRange(b) && (d > this.lastTriggeredHeight || this.lastTriggeredFrom(a)) && (this.trigger("uiNearTheBottom"), this.lastTriggerFrom = b, e=!0), e && (this.lastTriggeredHeight = d)
        }, this.inTriggerRange = function(c) {
            var d = this.$content.height(), e = this.$node.scrollTop(), f = e + this.$node.height(), g = Math.abs(Math.min(f - d, 0)), h = this.$node.height() / 2;
            return e < h && c == a || g < h && c == b
        }, this.lastTriggeredFrom = function(a) {
            return this.lastTriggerFrom === a
        }, this.resetScrollState = function() {
            this.lastTriggeredHeight = 0, this.lastTriggerFrom =- 1
        }, this.webkitFullscreenElement = function() {
            return document.webkitFullscreenElement
        }, this.after("initialize", function() {
            this.resetScrollState(), this.$content = this.attr.contentSelector ? this.select("contentSelector") : $(document), this.on("scroll", utils.throttle(this.checkScrollPosition.bind(this), 100)), this.on("uiTimelineReset", this.resetScrollState), this.on("uiSwiftLoaded uiPageChanged", this.checkScrollPosition)
        })
    }
    var defineComponent = require("core/component"), utils = require("core/utils"), InfiniteScrollWatcher = defineComponent(infiniteScrollWatcher);
    module.exports = InfiniteScrollWatcher
});
define("app/data/timeline", ["module", "require", "exports", "core/component", "core/utils", "app/data/with_data"], function(module, require, exports) {
    function timeline() {
        this.defaultAttrs({
            defaultAjaxData: {
                include_entities: 1,
                include_available_features: 1
            },
            noShowError: !0,
            startPollingInterval: 7500,
            maxPollingInterval: 6e4
        }), this.requestItems = function(a, b) {
            a && a.stopPropagation();
            var c = function(c) {
                b.isNewItemRequest ? this.hasActiveNewItemsRequest=!1 : this.hasActiveOldItemsRequest=!1, this.trigger(a.target, "dataGotMoreTimelineItems", c)
            }, d = this.requestInterval, e = function(c) {
                c && c.xhr && c.xhr.statusText === "timeout" && d === this.requestInterval && (this.requestInterval = Math.min(this.requestInterval * 2, this.attr.maxPollingInterval)), b.isNewItemRequest ? this.hasActiveNewItemsRequest=!1 : this.hasActiveOldItemsRequest=!1, this.trigger(a.target, "dataGotMoreTimelineItemsError", c)
            }, f = {};
            b && b.fromPolling && (f["X-Twitter-Polling"]=!0);
            var g = {
                contextual_tweet_id: b.contextual_tweet_id,
                since_id: b.since_id,
                max_id: b.max_id,
                cursor: b.cursor,
                cursor_index: b.cursor_index,
                cursor_offset: b.cursor_offset,
                min_position: b.min_position,
                max_position: b.max_position,
                is_forward: b.is_forward,
                latent_count: b.latent_count,
                composed_count: b.composed_count,
                include_new_items_bar: b.include_new_items_bar,
                preexpanded_id: b.preexpanded_id,
                interval: b.interval,
                count: b.count,
                timeline_empty: b.timeline_empty
            };
            b.query && (g.q = b.query), b.curated_timeline_since_id && (g.curated_timeline_since_id = b.curated_timeline_since_id), b.scroll_cursor && (g.scroll_cursor = b.scroll_cursor), b.refresh_cursor && (g.refresh_cursor = b.refresh_cursor), b.topic && (g.topic = b.topic), b.excluded && (g.excluded = b.excluded);
            var h = b.isNewItemRequest && this.hasActiveNewItemsRequest ||!b.isNewItemRequest && this.hasActiveOldItemsRequest;
            h || (this.hasActiveNewItemsRequest=!!this.hasActiveNewItemsRequest||!!b.isNewItemRequest, this.hasActiveOldItemsRequest=!!this.hasActiveOldItemsRequest ||!b.isNewItemRequest, this.get({
                url: this.attr.endpoint,
                headers: f,
                timeout: this.requestInterval,
                data: utils.merge(this.attr.defaultAjaxData, g),
                eventData: b,
                success: c.bind(this),
                error: e.bind(this)
            }))
        }, this.after("initialize", function() {
            this.hasActiveNewItemsRequest=!1, this.hasActiveOldItemsRequest=!1, this.requestInterval = this.attr.startPollingInterval, this.on("uiWantsMoreTimelineItems", this.requestItems)
        })
    }
    var defineComponent = require("core/component"), utils = require("core/utils"), withData = require("app/data/with_data");
    module.exports = defineComponent(timeline, withData)
});
define("app/boot/timeline", ["module", "require", "exports", "app/ui/infinite_scroll_watcher", "app/data/timeline"], function(module, require, exports) {
    function initialize(a) {
        a.no_global_infinite_scroll || InfiniteScrollWatcher.attachTo(window), TimelineData.attachTo(document, a)
    }
    var InfiniteScrollWatcher = require("app/ui/infinite_scroll_watcher"), TimelineData = require("app/data/timeline");
    module.exports = initialize
});
define("app/data/activity_popup", ["module", "require", "exports", "core/component", "app/data/with_data"], function(module, require, exports) {
    function activityPopupData() {
        this.defaultAttrs({
            noShowError: !0
        }), this.getUsers = function(a, b) {
            var c;
            b.component == "retweeted_popup" ? c = "/i/activity/retweeted_popup" : b.component == "favorited_popup" ? c = "/i/activity/favorited_popup" : b.component == "media_tagged_popup" && (c = "/i/activity/media_tagged_popup"), this.get({
                url: c,
                data: {
                    id: b.tweetId
                },
                eventData: b,
                success: "dataActivityPopupSuccess",
                error: "dataActivityPopupError"
            })
        }, this.after("initialize", function() {
            this.on("uiFetchActivityPopup", this.getUsers)
        })
    }
    var defineComponent = require("core/component"), withData = require("app/data/with_data");
    module.exports = defineComponent(activityPopupData, withData)
});
define("app/ui/dialogs/activity_popup", ["module", "require", "exports", "core/component", "core/utils", "app/ui/with_dialog", "app/ui/with_item_actions", "app/ui/dialogs/with_modal_tweet", "app/ui/with_user_actions"], function(module, require, exports) {
    function activityPopup() {
        this.defaultAttrs({
            itemType: "user",
            titleSelector: ".modal-title",
            contentSelector: ".activity-content",
            openDropdownSelector: ".user-dropdown.open .dropdown-menu",
            usersSelector: ".activity-popup-users"
        }), this.setTitle = function(a) {
            this.select("titleSelector").html(a)
        }, this.setContent = function(a) {
            this.$node.toggleClass("has-content", !!a), this.select("contentSelector").html(a)
        }, this.requestPopup = function(a, b) {
            var c = b.titleHtml, d = b.tweetId, e = b.component;
            this.attr.eventData = utils.merge(this.attr.eventData, {
                scribeContext: {
                    component: e
                }
            }, !0);
            var f;
            if (e == "retweeted_popup")
                f = {
                    modal: "retweeted_activity"
                };
            else if (e == "favorited_popup")
                f = {
                    modal: "favorited_activity"
                };
            else {
                if (e != "media_tagged_popup") {
                    if (window.DEBUG && window.DEBUG.enabled)
                        throw new Error("Invalid activity popup type.");
                    return 
                }
                f = {
                    modal: "media_tagged_popup"
                }
            }
            this.setTitle(c), this.displayTweet(d, f), this.setContent(""), this.open(), this.trigger("uiFetchActivityPopup", {
                tweetId: d,
                component: e
            })
        }, this.updateUsers = function(a, b) {
            this.setTitle(b.htmlTitle), this.setContent(b.htmlUsers);
            var c = this.select("usersSelector");
            c.height() >= parseInt(c.css("max-height"), 10) && c.addClass("dropdown-threshold")
        }, this.showError = function(a, b) {
            this.setContent($("<p>").addClass("error").html(b.message))
        }, this.after("initialize", function() {
            this.on(document, "uiRequestActivityPopup", this.requestPopup), this.on(document, "dataActivityPopupSuccess", this.updateUsers), this.on(document, "dataActivityPopupError", this.showError), this.on(document, "uiShowProfilePopup uiOpenTweetDialogWithOptions uiNeedsDMDialog uiOpenSigninOrSignupDialog", this.close)
        })
    }
    var defineComponent = require("core/component"), utils = require("core/utils"), withDialog = require("app/ui/with_dialog"), withItemActions = require("app/ui/with_item_actions"), withModalTweet = require("app/ui/dialogs/with_modal_tweet"), withUserActions = require("app/ui/with_user_actions");
    module.exports = defineComponent(activityPopup, withDialog, withUserActions, withItemActions, withModalTweet)
});
define("app/data/activity_popup_scribe", ["module", "require", "exports", "core/component", "app/utils/scribe_item_types", "app/data/with_scribe"], function(module, require, exports) {
    function activityPopupScribe() {
        this.scribeActivityPopupOpen = function(a, b) {
            var c = b.sourceEventData;
            this.scribe("open", b, {
                items: [{
                    id: c.tweetId,
                    item_type: scribeItemTypes.tweet
                }
                ],
                item_count: 1
            })
        }, this.after("initialize", function() {
            this.on(document, "dataActivityPopupSuccess", this.scribeActivityPopupOpen)
        })
    }
    var defineComponent = require("core/component"), scribeItemTypes = require("app/utils/scribe_item_types"), withScribe = require("app/data/with_scribe");
    module.exports = defineComponent(activityPopupScribe, withScribe)
});
define("app/boot/activity_popup", ["module", "require", "exports", "app/data/activity_popup", "app/ui/dialogs/activity_popup", "app/data/activity_popup_scribe"], function(module, require, exports) {
    function initialize(a) {
        ActivityPopupData.attachTo(document, a), ActivityPopupScribe.attachTo(document, a), ActivityPopup.attachTo(activityPopupSelector, a)
    }
    var ActivityPopupData = require("app/data/activity_popup"), ActivityPopup = require("app/ui/dialogs/activity_popup"), ActivityPopupScribe = require("app/data/activity_popup_scribe"), activityPopupSelector = "#activity-popup-dialog";
    module.exports = initialize
});
define("app/data/conversations", ["module", "require", "exports", "core/component", "app/data/with_data"], function(module, require, exports) {
    function conversations() {
        this.defaultAttrs({
            statsName: "swift_expando"
        }), this.requestExpansion = function(a, b) {
            var c = function(b) {
                this.trigger(a.target, "dataTweetConversationResult", b), this.trigger(a.target, "dataTweetSocialProofResult", b)
            }, d = function(b, c, d) {
                this.trigger(a.target, "dataTweetExpansionError", {
                    status: c,
                    errorThrown: d
                })
            };
            this.get({
                url: "/i/expanded/batch/" + encodeURIComponent($(a.target).attr("data-tweet-id")),
                data: this.dataHash(b),
                eventData: b,
                success: c.bind(this),
                error: d.bind(this)
            })
        }, this.requestAncestors = function(a, b) {
            var c = function(b) {
                this.trigger(a.target, "dataConversationAncestorsSuccess", b)
            }, d = function(b, c, d) {
                this.trigger(a.target, "dataConversationAncestorsError", {
                    status: c,
                    errorThrown: d
                })
            };
            this.get({
                url: "/i/expanded/batch/" + encodeURIComponent($(a.target).attr("data-tweet-id")),
                data: this.dataHash({
                    loadAncestors: !0,
                    conversationModule: !0
                }),
                eventData: b,
                success: c.bind(this),
                error: d.bind(this)
            })
        }, this.requestDescendants = function(a, b) {
            var c = function(b) {
                this.trigger(a.target, "dataTweetConversationResult", b)
            }, d = function(b, c, d) {
                this.trigger(a.target, "dataTweetExpansionError", {
                    status: c,
                    errorThrown: d
                })
            };
            this.get({
                url: "/i/expanded/batch/" + encodeURIComponent($(a.target).attr("data-tweet-id")),
                data: this.dataHash({
                    loadDescendants: !0
                }),
                eventData: b,
                success: c.bind(this),
                error: d.bind(this)
            })
        }, this.dataHash = function(a) {
            var b = [];
            a.loadSocialProof && b.push("social_proof"), a.loadAncestors && b.push("ancestors"), a.loadDescendants && b.push("descendants");
            var c = {
                include: b
            };
            return a.facepileMax && (c.facepile_max = a.facepileMax), a.conversationModule && (c.conversation_module = a.conversationModule), c.page_context = this.attr.pageName, c.section_context = this.attr.sectionName, c
        }, this.after("initialize", function() {
            this.on("uiNeedsTweetExpandedContent", this.requestExpansion), this.on("uiNeedsConversationAncestors", this.requestAncestors), this.on("uiNeedsConversationDescendants", this.requestDescendants)
        })
    }
    var defineComponent = require("core/component"), withData = require("app/data/with_data"), Conversations = defineComponent(conversations, withData);
    module.exports = Conversations
});
define("app/data/curation", ["module", "require", "exports", "core/component", "app/data/with_data", "app/data/user_info", "app/data/with_scribe", "core/i18n", "core/utils"], function(module, require, exports) {
    function curation() {
        this.curateTweets = function(a, b) {
            function c(a) {
                b.added.forEach(function() {
                    this.scribe({
                        component: "tweet",
                        action: "add_to_timeline"
                    }, a)
                }.bind(this));
                var c = _('Tweet successfully added/removed.');
                this.trigger("uiShowMessage", {
                    message: c
                }), this.trigger("dataTweetsCurated", a)
            }
            function d(a) {
                var b = _('Failed to add/remove Tweet.');
                this.trigger("uiShowError", {
                    message: b
                })
            }
            var e = {
                added: b.added,
                removed: b.removed,
                tweet_id: b.tweetId,
                impression_id: b.impressionId
            };
            this.post({
                url: "/i/curate/batch",
                data: e,
                eventData: b,
                success: c.bind(this),
                error: d.bind(this)
            })
        }, this.addTweet = function(a, b) {
            function c(a) {
                var b = _('Added Tweet to <a href=\'{{url}}\'>{{name}}</a>', {
                    url: a.timeline_url,
                    name: a.timeline_name
                });
                this.trigger("uiShowMessage", {
                    message: b,
                    timeout: 1e4
                }), this.trigger("dataTweetAddedToTimeline", a), this.scribe({
                    component: "tweet",
                    action: "quick_add_to_timeline"
                }, a)
            }
            function d(a) {
                this.trigger("uiShowError", a), this.trigger("dataTweetNotAddedToTimeline", a)
            }
            var e = {
                timeline_id: b.timelineId,
                tweet_id: b.tweetId,
                impression_id: b.impressionId
            };
            this.post({
                url: "/i/curate/add_tweet",
                data: e,
                eventData: b,
                success: c.bind(this),
                error: d.bind(this)
            })
        }, this.removeTweet = function(a, b) {
            function c(a) {
                this.trigger("dataTweetRemovedFromTimeline", a), this.trigger("uiShowMessage", {
                    message: _('Tweet successfully removed.')
                }), this.trigger("dataTweetRemovedFromTimeline", a)
            }
            function d(a) {
                this.trigger("uiShowError", {
                    message: _('Error removing tweet.')
                }), this.trigger("dataTweetNotRemovedFromTimeline", a)
            }
            var e = {
                timeline_id: b.timelineId,
                tweet_id: b.tweetId,
                id: b.tweetId
            };
            this.post({
                url: "/i/curate/remove_tweet",
                data: e,
                eventData: b,
                success: c.bind(this),
                error: d.bind(this)
            })
        }, this.createCustomTimeline = function(a, b) {
            function c(a) {
                this.scribe({
                    component: "custom_timeline",
                    action: "create"
                }, a), this.trigger("uiNavigate", {
                    href: a.timeline_url
                })
            }
            function d(a) {
                this.trigger("uiShowError", {
                    message: _('Error creating collection.')
                })
            }
            var e = {
                name: b.name,
                description: b.description,
                order: b.order,
                tweet_id: b.tweetId,
                impression_id: b.impressionId
            };
            this.post({
                url: "/i/curate/create",
                data: e,
                eventData: b,
                success: c.bind(this),
                error: d.bind(this)
            })
        }, this.updateCustomTimeline = function(a, b) {
            function c(a) {
                this.scribe({
                    element: "custom_timeline",
                    action: "update"
                }, a);
                var b = _('Collection updated. <a href=\'{{url}}\'>Click here to refresh.</a>', {
                    url: a.timeline_url
                });
                this.trigger("uiShowMessage", {
                    message: b,
                    timeout: 5e3
                }), this.trigger("dataCustomTimelineUpdated", a)
            }
            function d(a) {
                this.trigger("uiShowError", {
                    message: _('Error updating collection.')
                })
            }
            var e = {
                timeline_id: b.id,
                name: b.name,
                description: b.description,
                order: b.order
            };
            this.post({
                url: "/i/curate/update",
                data: e,
                eventData: b,
                success: c.bind(this),
                error: d.bind(this)
            })
        }, this.deleteCustomTimeline = function(a, b) {
            function c(a) {
                this.scribe({
                    element: "custom_timeline",
                    action: "delete"
                }, a), this.trigger("uiNavigate", {
                    href: this.attr.timelines_url
                })
            }
            function d(a) {
                this.trigger("uiShowError", {
                    message: _('Error deleting collection.')
                })
            }
            this.post({
                url: "/i/curate/destroy",
                data: {
                    timeline_id: b.timeline_id
                },
                eventData: b,
                success: c.bind(this),
                error: d.bind(this)
            })
        }, this.getFullCustomTimelines = function(a, b) {
            this.get({
                url: "/i/curate/all_timelines",
                eventData: b,
                data: {
                    tweet_id: b.tweetId
                },
                success: "dataGotFullCustomTimelines",
                error: "dataFailedToGetFullCustomTimelines"
            })
        }, this.getCustomTimelinesForDropdown = function(a, b) {
            if (!b.tweetId)
                return;
            this.get({
                url: "/i/curate/timelines",
                eventData: b,
                data: {
                    tweet_id: b.tweetId
                },
                success: "dataGotCustomTimelines",
                error: "dataFailedToGetCustomTimelines"
            })
        }, this.after("initialize", function() {
            userInfo.getDecider("custom_timeline_curation") && (this.on("uiCurateTweets", this.curateTweets), this.on("uiCurateAddTweet", this.addTweet), this.on("uiCurateRemoveTweet", this.removeTweet), this.on("uiNeedsCustomTimelines", this.getCustomTimelinesForDropdown), this.on("uiNeedsFullCustomTimelines", this.getFullCustomTimelines), this.on("uiCreateCustomTimeline", this.createCustomTimeline), this.on("uiUpdateCustomTimeline", this.updateCustomTimeline), this.on("uiDeleteCustomTimeline", this.deleteCustomTimeline))
        })
    }
    var defineComponent = require("core/component"), withData = require("app/data/with_data"), userInfo = require("app/data/user_info"), withScribe = require("app/data/with_scribe"), _ = require("core/i18n"), utils = require("core/utils"), Curation = defineComponent(curation, withData, withScribe);
    module.exports = Curation
});
define("app/data/media_settings", ["module", "require", "exports", "core/component", "app/data/with_data", "core/i18n"], function(module, require, exports) {
    function mediaSettings() {
        this.flagMedia = function(a, b) {
            this.post({
                url: "/i/expanded/flag_possibly_sensitive",
                eventData: b,
                data: b,
                success: "dataFlaggedMediaResult",
                error: "dataFlaggedMediaError"
            })
        }, this.updateViewPossiblySensitive = function(a, b) {
            this.post({
                url: "/i/expanded/update_view_possibly_sensitive",
                eventData: b,
                data: b,
                success: "dataUpdatedViewPossiblySensitiveResult",
                error: "dataUpdatedViewPossiblySensitiveError"
            })
        }, this.after("initialize", function() {
            this.on("uiFlagMedia", this.flagMedia), this.on("uiUpdateViewPossiblySensitive", this.updateViewPossiblySensitive), this.on("dataUpdatedViewPossiblySensitiveResult", function() {
                this.trigger("uiShowMessage", {
                    message: _('Your media display settings have been changed.')
                })
            }), this.on("dataUpdatedViewPossiblySensitiveError", function() {
                this.trigger("uiShowError", {
                    message: _('Couldn\'t set inline media settings.')
                })
            })
        })
    }
    var defineComponent = require("core/component"), withData = require("app/data/with_data"), _ = require("core/i18n");
    module.exports = defineComponent(mediaSettings, withData)
});
define("app/data/media_tags", ["module", "require", "exports", "core/component", "app/data/with_data"], function(module, require, exports) {
    function mediaTags() {
        this.deleteMediaTag = function(a, b) {
            var c = function(a) {
                this.trigger("dataMediaTagRemoveSuccess", a)
            }, d = function(a, c, d) {
                this.trigger("dataMediaTagRemoveFailure", {
                    id: b.id,
                    status: c,
                    errorThrown: d
                })
            }, e = {
                status_id: b.id
            };
            this.post({
                url: "/i/media/media_tags/delete",
                data: e,
                eventData: b,
                success: c.bind(this),
                error: d.bind(this)
            })
        }, this.after("initialize", function() {
            this.on("uiDidRemoveMediaTag", this.deleteMediaTag)
        })
    }
    var defineComponent = require("core/component"), withData = require("app/data/with_data"), MediaTags = defineComponent(mediaTags, withData);
    module.exports = MediaTags
});
define("app/ui/timelines/new_items_bar", ["module", "require", "exports", "core/component", "app/utils/chrome", "app/utils/animate_window_scrolltop", "core/utils"], function(module, require, exports) {
    function newItemsBar() {
        this.defaultAttrs({
            newItemsBarSelector: ".js-new-tweets-bar",
            containerSelector: ".stream-container",
            scrollTopOnNewItemsClick: !0
        }), this.updateNewItemsBar = function(a, b) {
            var c = $(b.html), d = this.select("newItemsBarSelector");
            d.length ? (d.replaceWith(c), this.trigger("uiNewItemsBarUpdated")) : (this.$node.html(c), this.$node.hide(), this.trigger("uiNewItemsBarShown"), this.showNewItemsBar()), this.trigger("uiNewItemsBarVisible")
        }, this.showNewItemsBar = function() {
            var a = this.$node.parent(), b = chrome.getCanvasYOffset(a), c = $(window).scrollTop();
            c > b ? (this.$node.show(), $("html, body").scrollTop(c + this.$node.height())) : this.$node.slideDown()
        }, this.hideNewItemsBar = function() {
            this.trigger("uiNewItemsBarHidden");
            var a = this.select("newItemsBarSelector");
            a.remove()
        }, this.handleNewItemsBarClick = function(a, b) {
            this.attr.scrollTopOnNewItemsClick && animateWinScrollTop(0, "fast"), this.trigger("uiInjectNewItems", {
                fromClick: !0
            }), this.trigger("uiNewItemsBarClick"), this.trigger("uiRefreshUserRecsOnNewTweets")
        }, this.after("initialize", function() {
            this.on(document, "uiUpdateNewItemsBar", this.updateNewItemsBar), this.on(document, "uiHideNewItemsBar", this.hideNewItemsBar), this.on("click", {
                newItemsBarSelector: this.handleNewItemsBarClick
            })
        })
    }
    var defineComponent = require("core/component"), chrome = require("app/utils/chrome"), animateWinScrollTop = require("app/utils/animate_window_scrolltop"), utils = require("core/utils");
    module.exports = defineComponent(newItemsBar)
});
define("app/ui/dialogs/sensitive_flag_confirmation", ["module", "require", "exports", "core/component", "app/ui/with_dialog"], function(module, require, exports) {
    function flagDialog() {
        this.defaultAttrs({
            dialogSelector: "#sensitive_flag_dialog",
            cancelSelector: "#cancel_flag_confirmation",
            submitSelector: "#submit_flag_confirmation",
            settingsSelector: "#sensitive-settings-checkbox",
            illegalSelector: "#sensitive-illegal-checkbox"
        }), this.flag = function() {
            this.select("settingsSelector").attr("checked") && this.trigger("uiUpdateViewPossiblySensitive", {
                do_show: !1
            }), this.select("illegalSelector").attr("checked") && this.trigger("uiFlagMedia", {
                id: this.$dialog.attr("data-tweet-id")
            }), this.close()
        }, this.openWithId = function(b, c) {
            this.$dialog.attr("data-tweet-id", c.id), this.open()
        }, this.after("initialize", function() {
            this.$dialog = this.select("dialogSelector"), this.on(document, "uiFlagConfirmation", this.openWithId), this.on("click", {
                submitSelector: this.flag,
                cancelSelector: this.close
            })
        })
    }
    var defineComponent = require("core/component"), withDialog = require("app/ui/with_dialog");
    module.exports = defineComponent(flagDialog, withDialog)
});
define("app/ui/media/sensitive_media_tweets", ["module", "require", "exports", "core/component"], function(module, require, exports) {
    function sensitiveMediaTweets() {
        this.defaultAttrs({
            mediaNotDisplayedSelector: ".media-not-displayed",
            displayMediaSelector: ".display-this-media",
            alwaysDisplaySelector: ".always-display-media",
            mediaContainerSelector: ".js-media-container",
            detailsFixerSelector: ".js-tweet-details-fixer",
            hiddenClass: "hidden"
        }), this.showMedia = function(a) {
            a = a || this.$node, a.find(this.attr.mediaNotDisplayedSelector).hide(), a.find(this.attr.mediaContainerSelector).removeClass(this.attr.hiddenClass)
        }, this.showLimitedMedia = function(a) {
            var b = $(a.target).closest(this.attr.detailsFixerSelector);
            this.showMedia(b)
        }, this.updateMediaSettings = function(a) {
            this.trigger("uiUpdateViewPossiblySensitive", {
                do_show: !0
            }), this.showMedia()
        }, this.after("initialize", function() {
            this.on("click", {
                displayMediaSelector: this.showLimitedMedia,
                alwaysDisplaySelector: this.updateMediaSettings
            })
        })
    }
    var defineComponent = require("core/component");
    module.exports = defineComponent(sensitiveMediaTweets)
});
define("app/data/tweet_activity_counts_scribe", ["module", "require", "exports", "core/component", "core/utils", "app/ui/with_interaction_data", "app/data/with_interaction_data_scribe"], function(module, require, exports) {
    function tweetActivityCountsScribe(a) {
        this.defaultAttrs({
            itemType: "tweet"
        }), this.scribeActivityCount = function(a, b, c) {
            var d = {
                component: this.attr.itemType,
                element: a,
                action: "click"
            };
            this.scribe(d, this.interactionData(b))
        }, this.after("initialize", function() {
            this.on("uiRequestReplyActivity", this.scribeActivityCount.bind(this, "reply_count")), this.on("uiRequestRetweetedActivity", this.scribeActivityCount.bind(this, "retweet_count")), this.on("uiRequestFavoritedActivity", this.scribeActivityCount.bind(this, "favorite_count"))
        })
    }
    var defineComponent = require("core/component"), utils = require("core/utils"), withInteractionData = require("app/ui/with_interaction_data"), withInteractionDataScribe = require("app/data/with_interaction_data_scribe"), TweetActivityCountsScribe = defineComponent(tweetActivityCountsScribe, withInteractionData, withInteractionDataScribe);
    module.exports = TweetActivityCountsScribe
});
define("app/data/tweet_translation", ["module", "require", "exports", "core/component", "app/data/with_data"], function(module, require, exports) {
    function tweetTranslation() {
        this.getTweetTranslation = function(a, b) {
            var c = function(b) {
                b && b.message && this.trigger("uiShowMessage", {
                    message: b.message
                }), this.trigger(a.target, "dataTweetTranslationSuccess", b)
            }, d = function(c, d, e) {
                this.trigger(a.target, "dataTweetTranslationError", {
                    id: b.id,
                    status: d,
                    errorThrown: e
                })
            }, e = {
                id: b.tweetId,
                dest: b.dest
            };
            this.get({
                url: "/i/translations/show.json",
                data: e,
                headers: {
                    "X-Phx": !0
                },
                eventData: b,
                success: c.bind(this),
                error: d.bind(this)
            })
        }, this.after("initialize", function() {
            this.on("uiNeedsTweetTranslation", this.getTweetTranslation)
        })
    }
    var defineComponent = require("core/component"), withData = require("app/data/with_data"), TweetTranslation = defineComponent(tweetTranslation, withData);
    module.exports = TweetTranslation
});
define("app/ui/user_actions", ["module", "require", "exports", "core/component", "app/ui/with_user_actions"], function(module, require, exports) {
    function userActions() {}
    var defineComponent = require("core/component"), withUserActions = require("app/ui/with_user_actions");
    module.exports = defineComponent(userActions, withUserActions)
});
define("app/boot/tweets", ["module", "require", "exports", "app/boot/activity_popup", "app/data/conversations", "app/data/curation", "app/ui/expando/expanding_tweets", "app/data/media_settings", "app/data/media_tags", "app/ui/media/media_tweets", "app/ui/timelines/new_items_bar", "app/ui/dialogs/sensitive_flag_confirmation", "app/ui/media/sensitive_media_tweets", "app/data/tweet_actions", "app/data/tweet_activity_counts_scribe", "app/data/tweet_translation", "app/ui/user_actions", "core/utils"], function(module, require, exports) {
    function initialize(a, b) {
        activityPopupBoot(b), TweetActionsData.attachTo(document, b), TweetActivityCountsScribe.attachTo(document), CurationData.attachTo(document, b), TweetTranslationData.attachTo(document, b), MediaTagsData.attachTo(document, b), MediaSettingsData.attachTo(document, b), SensitiveMediaTweets.attachTo(document, b), b.excludeConversations || ConversationsData.attachTo(document, b), b.excludeExpandingTweets || ExpandingTweets.attachTo(a, b);
        var c = ".js-new-items-bar-container";
        NewItemsBar.attachTo(c), b.excludeUserActions || UserActions.attachTo(a, utils.merge(b, {
            genericItemSelector: ".js-stream-item"
        })), MediaTweets.attachTo(a, b), SensitiveFlagConfirmationDialog.attachTo(document)
    }
    var activityPopupBoot = require("app/boot/activity_popup"), ConversationsData = require("app/data/conversations"), CurationData = require("app/data/curation"), ExpandingTweets = require("app/ui/expando/expanding_tweets"), MediaSettingsData = require("app/data/media_settings"), MediaTagsData = require("app/data/media_tags"), MediaTweets = require("app/ui/media/media_tweets"), NewItemsBar = require("app/ui/timelines/new_items_bar"), SensitiveFlagConfirmationDialog = require("app/ui/dialogs/sensitive_flag_confirmation"), SensitiveMediaTweets = require("app/ui/media/sensitive_media_tweets"), TweetActionsData = require("app/data/tweet_actions"), TweetActivityCountsScribe = require("app/data/tweet_activity_counts_scribe"), TweetTranslationData = require("app/data/tweet_translation"), UserActions = require("app/ui/user_actions"), utils = require("core/utils");
    module.exports = initialize
});
define("app/boot/help_pips_enable", ["module", "require", "exports", "app/utils/cookie", "app/utils/storage/core"], function(module, require, exports) {
    function initialize(a) {
        var b = new Storage("help_pips"), c =+ (new Date);
        b.clear(), b.setItem("until", c + 12096e5), cookie("help_pips", null)
    }
    var cookie = require("app/utils/cookie"), Storage = require("app/utils/storage/core");
    module.exports = initialize
});
define("app/data/help_pips", ["module", "require", "exports", "core/component", "app/data/with_data"], function(module, require, exports) {
    function helpPipsData() {
        this.defaultAttrs({
            noShowError: !0
        }), this.loadHelpPips = function(a, b) {
            var c = function(a) {
                this.trigger("dataHelpPipsLoaded", {
                    pips: a
                })
            }.bind(this), d = function(a) {
                this.trigger("dataHelpPipsError")
            }.bind(this);
            this.get({
                url: "/i/help/pips",
                data: {},
                eventData: b,
                success: c,
                error: d
            })
        }, this.after("initialize", function() {
            this.loadHelpPips()
        })
    }
    var defineComponent = require("core/component"), withData = require("app/data/with_data");
    module.exports = defineComponent(helpPipsData, withData)
});
define("app/data/help_pips_scribe", ["module", "require", "exports", "core/component", "app/data/with_scribe"], function(module, require, exports) {
    function helpPipsScribe() {
        this.after("initialize", function() {
            this.scribeOnEvent("uiHelpPipIconAdded", "impression"), this.scribeOnEvent("uiHelpPipIconClicked", "open"), this.scribeOnEvent("uiHelpPipPromptFollowed", "success"), this.scribeOnEvent("uiHelpPipExplainTriggered", "show"), this.scribeOnEvent("uiHelpPipExplainClicked", "dismiss"), this.scribeOnEvent("uiHelpPipExplainFollowed", "complete")
        })
    }
    var defineComponent = require("core/component"), withScribe = require("app/data/with_scribe");
    module.exports = defineComponent(helpPipsScribe, withScribe)
});
define("app/ui/help_pip", ["module", "require", "exports", "core/component"], function(module, require, exports) {
    function helpPip() {
        this.explainTriggered = function(a) {
            var b = $(a.target).closest(".js-stream-item");
            if (!b.length)
                return;
            if (this.pip.matcher && b.find(this.pip.matcher).length == 0)
                return;
            if (this.state == "icon")
                this.trigger("uiHelpPipExplainTriggered");
            else {
                if (this.state != "prompt")
                    return;
                this.trigger("uiHelpPipPromptFollowed")
            }
            this.showState("explain", b)
        }, this.dismissTriggered = function(a) {
            var b = $(a.target).closest(".js-stream-item");
            if (b.length && this.pip.matcher && b.find(this.pip.matcher).length == 0)
                return;
            (!b.length || b[0] == this.$streamItem[0]) && this.state == "explain" && this.trigger("uiHelpPipExplainFollowed"), this.dismiss()
        }, this.clicked = function(a) {
            this.state == "icon" ? (this.trigger("uiHelpPipIconClicked"), this.showState("prompt")) : this.state == "explain" && (this.trigger("uiHelpPipExplainClicked"), this.dismiss())
        }, this.showState = function(a, b) {
            if (a == "prompt"&&!this.pip.html.prompt)
                return this.showState("explain", b);
            b = b || this.$streamItem;
            if (this.state == a)
                return;
            this.state == "icon" && (a == "prompt" || a == "explain") && this.trigger("uiHelpPipOpened", {
                pip: this.pip
            }), this.$streamItem[0] != b[0] && this.unhighlight(), this.state = a, this.$streamItem = b;
            var c = this.$pip.find(".js-pip");
            c.prependTo(this.$pip.parent()).fadeOut("fast", function() {
                c.remove();
                var b = this.pip.html[a], d = this.pip[a + "Highlight"];
                this.$pip.html(b).fadeIn("fast"), d && d != "remove" ? this.highlight(d) : this.unhighlight(d == "remove")
            }.bind(this)), this.$pip.hide().prependTo(b)
        }, this.dismiss = function() {
            this.$streamItem && this.unhighlight(), this.$pip.fadeOut(function() {
                this.remove(), this.teardown(), this.trigger("uiHelpPipDismissed")
            }.bind(this))
        }, this.highlight = function(a) {
            if (this.$streamItem.find(a).is(".stork-highlighted"))
                return;
            this.unhighlight(), this.$streamItem.find(a).each(function() {
                var a = $(this), b = $("<span>").addClass("stork-highlight-background"), c = $("<span>").addClass("stork-highlight-container").css({
                    width: a.outerWidth(),
                    height: a.outerHeight()
                });
                a.wrap(c).before(b).addClass("stork-highlighted"), b.fadeIn()
            })
        }, this.unhighlight = function(a) {
            this.$streamItem.find(".stork-highlighted").each(function() {
                var b = $(this), c = b.parent().find(".stork-highlight-background"), d = function() {
                    c.remove(), b.unwrap()
                };
                b.removeClass("stork-highlighted"), a ? d() : c.fadeOut(d)
            })
        }, this.remove = function() {
            this.$pip.remove()
        }, this.after("initialize", function() {
            this.state = "icon", this.pip = this.attr.pip, this.$streamItem = this.attr.$streamItem, this.$pip = $("<div></div>").html(this.pip.html.icon), this.$pip.hide().prependTo(this.$streamItem).fadeIn("fast"), this.on(this.$pip, "click", this.clicked), this.trigger("uiHelpPipIconAdded"), this.on(document, "uiBeforePageChanged", this.remove), this.pip.explainOn && (typeof this.pip.explainOn == "string" && (this.pip.explainOn = {
                event: this.pip.explainOn
            }), this.pip.explainOn.selector ? this.on(this.$node.find(this.pip.explainOn.selector), this.pip.explainOn.event, this.explainTriggered) : this.on(this.pip.explainOn.event, this.explainTriggered)), this.pip.dismissOn && (typeof this.pip.dismissOn == "string" && (this.pip.dismissOn = {
                event: this.pip.dismissOn
            }), this.pip.dismissOn.selector ? this.on(this.$node.find(this.pip.dismissOn.selector), this.pip.dismissOn.event, this.dismissTriggered) : this.on(this.pip.dismissOn.event, this.dismissTriggered))
        })
    }
    var defineComponent = require("core/component");
    module.exports = defineComponent(helpPip)
});
define("app/ui/help_pips_injector", ["module", "require", "exports", "core/component", "app/ui/help_pip", "app/utils/storage/core"], function(module, require, exports) {
    function helpPipsInjector() {
        this.defaultAttrs({
            pipSelector: ".js-pip",
            tweetSelector: ".js-stream-item"
        }), this.pipsLoaded = function(a, b) {
            this.pips = b.pips, this.injectPips()
        }, this.tweetsDisplayed = function(a) {
            this.injectPips()
        }, this.pipOpened = function(a, b) {
            this.storage.setItem(b.pip.category, !0)
        }, this.pipDismissed = function(a) {
            this.injectPips()
        }, this.injectPips = function() {
            if (!this.pips)
                return;
            if (this.select("pipSelector").length)
                return;
            var a = this.pips.filter(function(a) {
                return !this.storage.getItem(a.category)
            }.bind(this)), b = this.select("tweetSelector").slice(0, 10);
            b.each(function(b, c) {
                var d = $(c), e=!1;
                if (d.attr("data-promoted") || d.find("[data-promoted]").length > 0)
                    return;
                $.each(a, function(a, b) {
                    if (d.find(b.matcher).length)
                        return HelpPip.attachTo(this.$node, {
                            $streamItem: d,
                            pip: b,
                            eventData: {
                                scribeContext: {
                                    component: "stork",
                                    element: b.id
                                }
                            }
                        }), e=!0, !1
                }.bind(this));
                if (e)
                    return !1
            }.bind(this))
        }, this.after("initialize", function() {
            this.deferredDisplays = [], this.storage = new Storage("help_pips"), this.on(document, "uiTweetsDisplayed", this.tweetsDisplayed), this.on(document, "dataHelpPipsLoaded", this.pipsLoaded), this.on("uiHelpPipDismissed", this.pipDismissed), this.on("uiHelpPipOpened", this.pipOpened)
        })
    }
    var defineComponent = require("core/component"), HelpPip = require("app/ui/help_pip"), Storage = require("app/utils/storage/core");
    module.exports = defineComponent(helpPipsInjector)
});
define("app/boot/help_pips", ["module", "require", "exports", "app/utils/cookie", "app/utils/storage/core", "app/boot/help_pips_enable", "app/data/help_pips", "app/data/help_pips_scribe", "app/ui/help_pips_injector"], function(module, require, exports) {
    function initialize(a) {
        var b = new Storage("help_pips"), c =+ (new Date);
        cookie("help_pips") && enableHelpPips(), (b.getItem("until") || 0) > c && (HelpPipsData.attachTo(document), HelpPipsInjector.attachTo("#timeline"), HelpPipsScribe.attachTo(document))
    }
    var cookie = require("app/utils/cookie"), Storage = require("app/utils/storage/core"), enableHelpPips = require("app/boot/help_pips_enable"), HelpPipsData = require("app/data/help_pips"), HelpPipsScribe = require("app/data/help_pips_scribe"), HelpPipsInjector = require("app/ui/help_pips_injector");
    module.exports = initialize
});
define("app/ui/expando/close_all_button", ["module", "require", "exports", "core/component"], function(module, require, exports) {
    function closeAllButton() {
        this.defaultAttrs({
            addEvent: "uiHasExpandedTweet",
            subtractEvent: "uiHasCollapsedTweet",
            where: "#timeline",
            closeAllEvent: "uiWantsToCloseAllTweets"
        }), this.incrementOpenCount = function() {
            this.toggleButton(++this.openCount)
        }, this.decrementOpenCount = function() {
            this.toggleButton(--this.openCount)
        }, this.toggleButton = function(a) {
            this.$node[a > 0 ? "fadeIn": "fadeOut"](200)
        }, this.broadcastClose = function(a) {
            a.preventDefault(), this.trigger(document, this.attr.closeAllEvent)
        }, this.readOpenCountFromTimeline = function() {
            this.openCount = $(this.attr.where).find(".open").length, this.toggleButton(this.openCount)
        }, this.hide = function() {
            this.$node.hide()
        }, this.after("initialize", function() {
            this.openCount = 0, this.on(document, "uiSwiftLoaded uiPageChanged", this.readOpenCountFromTimeline), this.on(this.attr.where, this.attr.addEvent, this.incrementOpenCount), this.on(this.attr.where, this.attr.subtractEvent, this.decrementOpenCount), this.on("click", this.broadcastClose), this.on(document, "uiBeforePageChanged", this.hide)
        })
    }
    var defineComponent = require("core/component");
    module.exports = defineComponent(closeAllButton)
});
define("app/ui/with_block_kb_shortcut_helpers", ["module", "require", "exports", "app/utils/user_dom_data"], function(module, require, exports) {
    function withBlockKeyboardShortcutHelpers() {
        this.defaultAttrs({
            actionableTweetSelector: ".js-actionable-tweet"
        }), this.triggerBlockActionOnNode = function(a, b) {
            !this.itemIsMine(a) && this.itemIsBlockable(a) && this.trigger(a, b, {
                userId: this.getUserIdFromNode(a),
                username: this.getUsernameFromNode(a),
                tweetId: this.getUserTweetIdFromNode(a),
                fromShortcut: !0
            })
        }, this.getUserIdFromNode = function(a) {
            var b = userDomDataUtil.getId(a);
            return b || (b = userDomDataUtil.getId(a.find("[data-user-id]"))), b
        }, this.getUserTweetIdFromNode = function(a) {
            var b = a.attr("data-tweet-id");
            return b || (b = a.find("[data-tweet-id]").attr("data-tweet-id")), b
        }, this.getUsernameFromNode = function(a) {
            var b = userDomDataUtil.getName(a);
            return b || (b = userDomDataUtil.getName(a.find("[data-name]"))), b
        }, this.itemIsMine = function(a) {
            return a.is(this.attr.ownTweetSelector) || a.find(this.attr.ownTweetSelector).length > 0
        }, this.itemIsBlockable = function(a) {
            return a.children(this.attr.actionableTweetSelector).length > 0 || a.is(this.attr.actionableTweetSelector)
        }
    }
    var userDomDataUtil = require("app/utils/user_dom_data");
    module.exports = withBlockKeyboardShortcutHelpers
});
define("app/ui/timelines/with_keyboard_navigation", ["module", "require", "exports", "core/compose", "app/ui/with_block_kb_shortcut_helpers"], function(module, require, exports) {
    function withKeyboardNavigation() {
        compose.mixin(this, [withBlockKBShortcutHelpers]), this.defaultAttrs({
            selectedClass: "selected-stream-item",
            selectedSelector: ".selected-stream-item",
            unselectableClass: "js-unselectable-stream-item",
            firstItemSelector: ".js-stream-item:first-child:not(.js-unselectable-stream-item)",
            profilePageSelector: ".route-profile",
            pushStateSelector: "a.js-nav",
            navigationActiveClass: "js-navigation-active"
        }), this.moveSelection = function(a) {
            var b = $(a.target);
            if (b.closest(this.attr.selectedSelector).length)
                return;
            var c;
            b.closest(".js-expansion-container") ? c = b.closest("li") : c = b.closest(this.attr.genericItemSelector), b.closest(this.attr.pushStateSelector).length && (this.$linkClicked = c, clearTimeout(this.linkTimer), this.linkTimer = setTimeout(function() {
                this.$linkClicked = $()
            }.bind(this), 0)), this.$selected.length && this.selectItem(c)
        }, this.clearSelection = function() {
            var a = $(this.attr.selectedSelector);
            this.trigger(a, "uiBeforeTimelineSelectionCleared"), a.removeAttr("tabIndex").removeClass(this.attr.selectedClass), this.$selected = $(), this.trigger(a, "uiTimelineSelectionCleared")
        }, this.selectTopItemHandler = function() {
            this.selectTopItem()
        }, this.selectTopItem = function(a) {
            this.clearSelection(), this.trigger("uiInjectNewItems", a || {}), this.selectAdjacentItem("next")
        }, this.injectAndPossiblySelectTopItem = function(a, b) {
            var c = this.$selected.length;
            c && this.clearSelection(), this.trigger("uiInjectNewItems", b || {}), c && this.selectAdjacentItem("next")
        }, this.selectTopItemByKeyboard = function() {
            this.selectTopItem({
                wasPeriodPress: !0
            })
        }, this.selectPrevItem = function() {
            this.selectAdjacentItem("prev")
        }, this.selectNextItem = function(a, b) {
            this.selectAdjacentItem("next", b)
        }, this.selectNextAdjacentItem = function() {
            var a = this.$selected;
            this.selectAdjacentItem("next"), a == this.$selected && this.selectAdjacentItem("prev")
        }, this.selectNextItemNotFrom = function(a) {
            var b = "next", c = this.$selected;
            while (this.getUserIdFromNode(this.$selected) == a) {
                this.selectAdjacentItem(b);
                if (c == this.$selected) {
                    if (b != "next")
                        return;
                    b = "prev"
                } else 
                    c = this.$selected
            }
        }, this.getAdjacentParentItem = function(a, b) {
            var c = a.closest(".js-navigable-stream"), d = a;
            if (c.length) {
                a = c.closest(".stream-item"), d = a[b]();
                if (!d.length)
                    return this.getAdjacentParentItem(a, b)
            }
            return d
        }, this.getAdjacentChildItem = function(a, b) {
            var c = a, d = c.hasClass("js-has-navigable-stream"), e = b == "next" ? "first-child": "last-child";
            return c.length && d ? (c = c.find(".js-navigable-stream").eq(0).find(">li:" + e), this.getAdjacentChildItem(c, b)) : c
        }, this.selectAdjacentItem = function(a, b) {
            var c;
            this.$selected.length ? c = this[a](this.$selected) : c = this.select("firstItemSelector").eq(0), c.length || (c = this.getAdjacentParentItem(this.$selected, a)), c = this.getAdjacentChildItem(c, a);
            if (c.length && c.hasClass(this.attr.unselectableClass))
                return this.$selected = c, this.selectAdjacentItem(a, b);
            this.selectItem(c);
            var d = a == "next" ? "uiNextItemSelected": "uiPreviousItemSelected";
            this.trigger(this.$selected, d), this.focusSelected(), c.length && (!b ||!b.maintainPosition) && this.adjustScrollForSelectedItem()
        }, this.next = function(a) {
            return a.next()
        }, this.prev = function(a) {
            return a.prev()
        }, this.selectItem = function(a) {
            if (!a.length || this.$selected == a)
                return;
            this.clearSelection(), this.$selected = a, this.$selected.addClass(this.attr.selectedClass), this.trigger(this.$selected, "uiTimelineItemSelected")
        }, this.focusSelected = function() {
            this.$selected.attr("tabIndex", - 1).focus()
        }, this.deselect = function(a) {
            var b = ["HTML", "BODY"].indexOf(a.target.tagName)!=-1, c = a.target.id == "page-outer"&&!$(a.target).parents("#page-container").length;
            (b || c) && this.clearSelection()
        }, this.muteUser = function() {
            this.triggerBlockActionOnNode(this.$selected, "uiDidMuteUser")
        }, this.blockUser = function() {
            this.triggerBlockActionOnNode(this.$selected, "uiOpenBlockUserDialog")
        }, this.updateAfterBlock = function(a, b) {
            $(this.attr.profilePageSelector).size() === 0 ? (this.selectNextItemNotFrom(b.userId), this.trigger("uiRemoveTweetsFromUser", b)) : this.trigger("uiHideProfileTweets")
        }, this.removeTweetsAndEngagementsFromUser = function(a, b) {
            this.selectNextItemNotFrom(b.userId), this.trigger("uiRemoveTweetsFromUser", b)
        }, this.updateSelectionBeforeDelete = function(a, b) {
            this.select("genericItemSelector").length && this.$selected.attr("data-item-id") == b.sourceEventData.id && this.selectNextAdjacentItem()
        }, this.adjustScrollForItem = function(a) {
            a.length && $(window).scrollTop(a.offset().top - $(window).height() / 2)
        }, this.notifyExpansionRequest = function() {
            this.trigger(this.$selected, "uiShouldToggleExpandedState")
        }, this.adjustScrollForSelectedItem = function() {
            this.adjustScrollForItem(this.$selected)
        }, this.processActiveNavigation = function() {
            var a = 2;
            setTimeout(this.removeActiveNavigationClass.bind(this), a * 1e3)
        }, this.setNavigationActive = function() {
            this.$linkClicked.addClass(this.attr.navigationActiveClass)
        }, this.removeActiveNavigationClass = function() {
            var a = this.$node.find("." + this.attr.navigationActiveClass);
            a.removeClass(this.attr.navigationActiveClass)
        }, this.handleEvent = function(a) {
            return function() {
                $("body").hasClass("modal-enabled") || this[a].apply(this, arguments)
            }
        }, this.changeSelection = function(a, b) {
            var c = $(a.target);
            this.$selected.length && (this.selectItem(c), b && b.setFocus && this.focusSelected())
        }, this.after("initialize", function() {
            this.$selected = this.$node.find(this.attr.selectedSelector), this.$linkClicked = $(), this.on(document, "uiShortcutSelectPrev", this.handleEvent("selectPrevItem")), this.on(document, "uiShortcutSelectNext uiSelectNext", this.handleEvent("selectNextItem")), this.on(document, "uiSelectItem", this.handleEvent("changeSelection")), this.on(document, "uiShortcutEnter", this.handleEvent("notifyExpansionRequest")), this.on(document, "uiSelectTopTweet", this.handleEvent("selectTopItemHandler")), this.on(document, "uiShortcutGotoTopOfScreen", this.handleEvent("selectTopItemByKeyboard")), this.on(document, "uiGotoTopOfScreen", this.handleEvent("injectAndPossiblySelectTopItem")), this.on(document, "uiShortcutMuteUser", this.handleEvent("muteUser")), this.on(document, "uiShortcutBlock", this.handleEvent("blockUser")), this.on(document, "uiUpdateAfterBlock", this.updateAfterBlock), this.on(document, "uiRemoveTweetsAndEngagementsFromUser", this.removeTweetsAndEngagementsFromUser), this.on(document, "uiBeforeTweetRemoved", this.updateSelectionBeforeDelete), this.on(document, "uiRemovedSomeTweets", this.adjustScrollForSelectedItem), this.on(document, "uiBeforePageChanged uiClearSelection", this.clearSelection), this.on(document, "uiPageChanged", this.processActiveNavigation), this.on("click", {
                genericItemSelector: this.moveSelection
            }), this.on(document, "uiNavigate", this.setNavigationActive), this.on(document, "click", this.deselect)
        })
    }
    var compose = require("core/compose"), withBlockKBShortcutHelpers = require("app/ui/with_block_kb_shortcut_helpers");
    module.exports = withKeyboardNavigation
});
define("app/ui/with_focus_highlight", ["module", "require", "exports"], function(module, require, exports) {
    function focusHighlight() {
        this.defaultAttrs({
            focusClass: "focus",
            focusContainerSelector: ".tweet"
        }), this.addFocusStyle = function(a, b) {
            $(b.el).addClass(this.attr.focusClass)
        }, this.addFocusStyleToTarget = function(a) {
            $(a.target).addClass(this.attr.focusClass)
        }, this.removeFocusStyle = function(a, b) {
            setTimeout(function() {
                var a = b.el, c = document.activeElement;
                !$.contains(a, c) && a != c && $(a).removeClass(this.attr.focusClass)
            }.bind(this), 0)
        }, this.after("initialize", function() {
            this.on(document, "uiShouldAddFocusStyle", this.addFocusStyleToTarget), this.on("focusin", {
                focusContainerSelector: this.addFocusStyle
            }), this.on("focusout", {
                focusContainerSelector: this.removeFocusStyle
            })
        })
    }
    module.exports = focusHighlight
});
define("app/ui/timelines/with_accessible_timeline_item_labels", ["module", "require", "exports", "app/utils/unique_id"], function(module, require, exports) {
    function sortLabelParts(a, b) {
        a = a.getAttribute("data-aria-label-part") || 0, b = b.getAttribute("data-aria-label-part") || 0;
        if (a == "last")
            return 1;
        if (b == "last")
            return - 1;
        a = parseInt(a, 10), b = parseInt(b, 10);
        if (!a&&!b)
            return 0;
        if (!a)
            return 1;
        if (!b)
            return - 1;
        if (a && b)
            return a == b ? 1 : a - b
    }
    function withAccessibleTimelineItemLabels() {
        this.createARIALabel = function(a, b) {
            var c = a.target, d = $(c), e = d.find("[data-aria-label-part]").toArray();
            if (!e.length)
                return;
            e.sort(sortLabelParts);
            var f = e.map(function(a, b) {
                return uniqueId(a)
            });
            c.setAttribute("aria-labelledby", f.join(" "))
        }, this.removeItemLabel = function(a, b) {
            a.target.removeAttribute("aria-labelledby")
        }, this.after("initialize", function() {
            this.on("uiBeforeTimelineSelectionCleared", this.removeItemLabel), this.on("uiTimelineItemSelected", this.createARIALabel)
        })
    }
    var uniqueId = require("app/utils/unique_id");
    module.exports = withAccessibleTimelineItemLabels
});
define("app/ui/timelines/base_timeline", ["module", "require", "exports", "core/component", "app/ui/timelines/with_keyboard_navigation", "app/ui/with_interaction_data", "app/utils/scribe_event_initiators", "app/ui/with_focus_highlight", "app/utils/animate_window_scrolltop", "app/ui/timelines/with_accessible_timeline_item_labels"], function(module, require, exports) {
    function baseTimeline() {
        this.defaultAttrs({
            containerSelector: ".stream-container",
            itemsSelector: "#stream-items-id",
            genericItemSelector: ".js-stream-item",
            timelineEndSelector: ".timeline-end",
            backToTopSelector: ".back-to-top",
            lastItemSelector: ".stream-item:last",
            streamItemContentsSelector: ".js-actionable-tweet, .js-actionable-user, .js-activity, .js-story-item",
            truncationLimit: 200,
            highlightedSelector: ".stream-container .connect-stream li.js-stream-item.js-activity",
            tweetWithReplyDialogSelector: ".simple-tweet, .conversation-tweet",
            tweetContainerSelector: "li:not(.original-tweet-container)"
        }), this.findFirstItemContent = function(a) {
            var b = a.find(this.attr.streamItemContentsSelector);
            return b = b.not(".conversation-tweet"), $(b[0])
        }, this.injectItems = function(a, b, c, d) {
            var e = $("<div/>").html(b), f = e.children(), g = e.find(this.attr.genericItemSelector);
            f.length > 0 && this.select("timelineEndSelector").addClass("has-items"), a == "prepend" && f.length > this.attr.truncationLimit && (f.length = this.attr.truncationLimit, g.length = this.attr.truncationLimit), this.select("itemsSelector")[a](f), this.reportInjectedItems(g, c, d);
            if (a == "prepend") {
                var h = this.select("itemsSelector");
                h.find(">:gt(" + (this.attr.truncationLimit - 1) + ")").remove();
                var i = h.children().last(), j;
                while (i.find(".promoted-tweet").length)
                    j = i.prev(), i.remove(), i = j
            }
            return f
        }, this.removeDuplicates = function(a) {
            var b = [];
            return a.filter(function(a) {
                return a.tweetId ? b.indexOf(a.tweetId)===-1 ? (b.push(a.tweetId), !0) : !1 : !0
            })
        }, this.extractTimestamp = function(a) {
            return a.find("[data-time-ms]").attr("data-time-ms")
        }, this.reportInjectedItems = function(a, b, c) {
            function g(a) {
                return b == "uiHasInjectedNewTimeline" || b == "uiHasInjectedOldTimelineItems" || b == "uiHasInjectedRangeTimelineItems"
            }
            var d = [], e = 0;
            a.each(function(a, c) {
                g(b) && (d = d.concat(this.extraInteractionData($(c))), d.push(this.interactionData(this.findFirstItemContent($(c)))), e = Math.max(e, this.extractTimestamp($(c)))), this.trigger(c, "uiHasInjectedTimelineItem")
            }.bind(this)), d = this.removeDuplicates(d);
            var f = {};
            g(b) && (f = {
                scribeContext: {
                    component: "stream"
                },
                scribeData: {},
                items: d
            }, c && c.autoplay && (f.scribeData.event_initiator = eventInitiators.clientSideApp)), this.trigger("uiWantsToRefreshTimestamps"), this.trigger(b, f)
        }, this.inspectItemsFromServer = function(a, b) {
            this.isOldItem(b) ? this.injectOldItems(b) : this.isNewItem(b) ? this.notifyNewItems(b) : this.wasRangeRequest(b) && this.injectRangeItems(b)
        }, this.investigateDataError = function(a, b) {
            var c = b.sourceEventData;
            if (!c)
                return;
            this.wasRangeRequest(c) ? this.notifyRangeItemsError(b) : this.wasNewItemsRequest(c) || this.wasOldItemsRequest(c) && this.notifyOldItemsError(b)
        }, this.possiblyShowBackToTop = function() {
            var a = this.select("lastItemSelector").position();
            a && a.top >= $(window).height() && this.select("backToTopSelector").show()
        }, this.scrollToTop = function() {
            animateWinScrollTop(0, "fast")
        }, this.getTimelinePosition = function(a) {
            return a.closest(this.attr.genericItemSelector).index()
        }, this.updateHighlighting = function(a, b) {
            var c = this.select("highlightedSelector");
            c.each(function(a, c) {
                var d = $(c), e = this.extractTimestamp(d);
                d.toggleClass("highlighted", e > b), e <= b && d.removeClass("highlighted")
            }.bind(this))
        }, this.handleTweetRemoved = function() {
            this.select("genericItemSelector").length || this.select("timelineEndSelector").removeClass("has-items")
        }, this.handleReplyAction = function(a, b) {
            var c = $(a.target), d = "expandTweetByReply";
            c.is(this.attr.tweetWithReplyDialogSelector) && (d = "uiOpenReplyDialog"), this.trigger(c, d, b)
        }, this.handleTweetDelete = function(a, b) {
            var c = this.$node.find('[data-tweet-id="' + b.sourceEventData.id + '"]');
            c.toArray().forEach(function(a, c) {
                var d = $(a);
                this.trigger(d, "uiBeforeTweetRemoved", b), d.closest(this.attr.tweetContainerSelector).remove(), this.trigger("uiTweetRemoved", b)
            }, this)
        }, this.after("initialize", function() {
            this.on("dataGotMoreTimelineItems", this.inspectItemsFromServer), this.on("dataGotMoreTimelineItemsError", this.investigateDataError), this.on(document, "uiUpdateActivityHighlighting", this.updateHighlighting), this.on("uiTweetRemoved", this.handleTweetRemoved), this.on("uiReplyToTweet", this.handleReplyAction), this.on(document, "dataDidDeleteTweet", this.handleTweetDelete), this.on("click", {
                backToTopSelector: this.scrollToTop
            }), this.possiblyShowBackToTop()
        })
    }
    var defineComponent = require("core/component"), withKeyboardNavigation = require("app/ui/timelines/with_keyboard_navigation"), withInteractionData = require("app/ui/with_interaction_data"), eventInitiators = require("app/utils/scribe_event_initiators"), withFocusHighLight = require("app/ui/with_focus_highlight"), animateWinScrollTop = require("app/utils/animate_window_scrolltop"), withAccessibleTimelineItemLabels = require("app/ui/timelines/with_accessible_timeline_item_labels");
    module.exports = defineComponent(baseTimeline, withKeyboardNavigation, withInteractionData, withFocusHighLight, withAccessibleTimelineItemLabels)
});
define("app/ui/timelines/with_old_items", ["module", "require", "exports"], function(module, require, exports) {
    function withOldItems() {
        function a(a) {
            return a.removeClass("u-hidden").show()
        }
        function b(a) {
            return a.addClass("u-hidden").hide()
        }
        this.defaultAttrs({
            endOfStreamSelector: ".stream-footer",
            errorMessageSelector: ".stream-fail-container",
            tryAgainSelector: ".try-again-after-whale"
        }), this.getOldItems = function(a) {
            a && a.stopPropagation(), this.shouldGetOldItems() && this.trigger("uiWantsMoreTimelineItems", this.getOldItemsData())
        }, this.injectOldItems = function(a) {
            this.hideWhaleEnd(), this.resetStateVariables(a), a.has_more_items ? this.showMoreSpinner() : this.hideMoreSpinner();
            var b = this.$document.height();
            this.injectItems("append", a.items_html, "uiHasInjectedOldTimelineItems"), this.possiblyShowBackToTop()
        }, this.notifyOldItemsError = function(a) {
            this.showWhaleEnd()
        }, this.showWhaleEnd = function() {
            a(this.select("errorMessageSelector")), b(this.select("endOfStreamSelector")), this.select("timelineEndSelector").addClass("has-items-error")
        }, this.hideWhaleEnd = function() {
            b(this.select("errorMessageSelector")), a(this.select("endOfStreamSelector")), this.select("timelineEndSelector").removeClass("has-items-error")
        }, this.showMoreSpinner = function() {
            this.select("timelineEndSelector").addClass("has-more-items")
        }, this.hideMoreSpinner = function() {
            this.select("timelineEndSelector").removeClass("has-more-items")
        }, this.tryAgainAfterWhale = function(a) {
            a.preventDefault(), this.hideWhaleEnd(), this.getOldItems()
        }, this.after("initialize", function() {
            this.on(window, "uiNearTheBottom", this.getOldItems), this.$document = $(document), this.$window = $(window), this.on("click", {
                tryAgainSelector: this.tryAgainAfterWhale
            })
        })
    }
    module.exports = withOldItems
});
define("app/ui/timelines/with_traveling_ptw", ["module", "require", "exports"], function(module, require, exports) {
    function withTravelingPTw() {
        this.closePromotedItem = function(a) {
            a.hasClass("open") && this.trigger(a, "uiShouldToggleExpandedState", {
                noAnimation: !0
            })
        }, this.transferClass = function(a, b, c) {
            a.hasClass(b) && (a.removeClass(b), c.addClass(b))
        }, this.repositionPromotedItem = function(a) {
            var b = this.$promotedItem;
            this.transferClass(b, "before-expanded", b.prev()), this.transferClass(b, "after-expanded", b.next()), a.call(this, b.detach()), this.transferClass(b.next(), "after-expanded", "prev")
        }, this.after("initialize", function() {
            this.travelingPromoted = this.attr.travelingPromoted, this.$promotedItem = this.$node.find(".promoted-tweet").first().closest(".stream-item")
        }), this.movePromotedToTop = function() {
            if (this.autoplay)
                return;
            this.repositionPromotedItem(function(a) {
                var b = this.$node.find(this.attr.streamItemsSelector).children().first();
                b[b.hasClass("open") ? "after": "before"](a)
            })
        }
    }
    module.exports = withTravelingPTw
});
define("app/ui/timelines/with_autoplaying_timeline", ["module", "require", "exports", "core/compose", "app/ui/timelines/with_traveling_ptw"], function(module, require, exports) {
    function withAutoplayingTimeline() {
        compose.mixin(this, [withTravelingPTw]);
        var a = 700;
        this.defaultAttrs({
            streamItemsSelector: ".stream-items",
            socialProofSelector: ".tweet-stats-container"
        }), this.autoplayNewItems = function(a) {
            if (!a)
                return;
            var b = this.$window.scrollTop(), c = b + this.$window.height(), d = this.$promotedItem.length && this.$promotedItem.offset().top > c, e = this.injectNewItems({}, {
                autoplay: !0
            }), f = this.select("streamItemsSelector");
            this.travelingPTw && d && this.repositionPromotedItem(function(a) {
                e.first().before(a), e = e.add(a), this.trigger(a, "uiShouldFixMargins")
            });
            var g = e.first().offset().top, h = g > b && g < c, i = f.offset().top, j = e.last().next().offset().top - i + 1;
            h ? (f.css("marginTop", - j), this.animateBlockOfItems()) : this.setScrollerScrollTop(b + j)
        }, this.animateBlockOfItems = function() {
            var b = this.select("streamItemsSelector"), c = this.$window.scrollTop(), d = parseFloat(b.css("marginTop"));
            this.isAnimating=!0, b.parent().css("overflow", "hidden"), b.animate({
                marginTop: 0
            }, {
                duration: a + Math.abs(d),
                step: function(a) {
                    this.lockedTimelineScroll && this.setScrollerScrollTop(c + Math.abs(d - Math.ceil(a)))
                }.bind(this),
                complete: function() {
                    b.parent().css("overflow", "inherit"), this.isAnimating=!1, this.afterAnimationQueue.forEach(function(a) {
                        a.call(this)
                    }, this), this.afterAnimationQueue = []
                }.bind(this)
            })
        }, this.handleSocialProofPops = function(a) {
            var b = $(a.target).closest(".stream-item");
            if (!b.length || this.lastClickedItem && b[0] === this.lastClickedItem)
                return;
            var c = $(a.target).find(this.attr.socialProofSelector).hide(), d = function() {
                var a = b.next().offset().top;
                c.show();
                var d = b.next().offset().top, e = this.$window.scrollTop();
                (this.lockedTimelineScroll || e > d) && this.setScrollerScrollTop(e + (d - a))
            }.bind(this);
            this.isAnimating ? this.afterAnimationQueue.push(d) : d()
        }, this.setScrollerScrollTop = function(a) {
            var b = this.attr.overflowScroll ? this.$node: $(window);
            b.scrollTop(a)
        }, this.enableAutoplay = function() {
            this.autoplay=!0, this.travelingPTw = this.attr.travelingPTw, this.lockedTimelineScroll=!1, this.afterAnimationQueue = [], this.newItemsXLine = 0, this.$window = this.attr.overflowScroll ? this.$node : $(window), this.on("mouseover", function() {
                this.lockedTimelineScroll=!0
            }), this.on("mouseleave", function() {
                this.lockedTimelineScroll=!1
            }), this.on("uiHasRenderedTweetSocialProof", this.handleSocialProofPops), this.on("uiHasExpandedTweet", function(a) {
                this.lastClickedItem = $(a.target).data("expando").$container.get(0)
            })
        }, this.after("initialize", function() {
            this.attr.autoplay && this.enableAutoplay()
        })
    }
    var compose = require("core/compose"), withTravelingPTw = require("app/ui/timelines/with_traveling_ptw");
    module.exports = withAutoplayingTimeline
});
define("app/ui/timelines/with_streaming_timeline", ["module", "require", "exports", "app/utils/scale_animation_time", "app/utils/viewport_helpers"], function(module, require, exports) {
    function withStreamingTimeline() {
        var a = 253, b, c, d, e, f = 1;
        this.defaultAttrs({
            streamSelector: "#stream-items-id",
            streamSpeed: 700,
            streamDelay: 400,
            streamSpeedUpFactor: .95,
            streamScrollThreshold: 60,
            streamPauseTweetThreshold: 30,
            streamSpeedUpTweetThreshold: 5
        }), this.newItemsArrived = function() {
            e || this.streamNextItem()
        }, this.streamNextItem = function() {
            var a = $(this.latentItems.pop()).addClass("injected-with-streaming"), b = this.injectItems("prepend", a, "uiHasInjectedNewTimeline", {
                wasStreamingInjection: !0
            });
            b.data("streamingPacket") && this.trigger("uiUserSawItemsViaStreamingInjection");
            var c = this.select("streamSelector"), d = c.offset().top, e = b.next().offset().top - d + 1, g = f * (this.attr.streamSpeed + 2.5 * e);
            c.css("marginTop", - e), c.parent().css("overflow", "hidden"), c.animate({
                marginTop: 0
            }, {
                duration: g,
                complete: function() {
                    c.parent().css("overflow", "inherit"), b.removeClass("injected-with-streaming"), setTimeout(this.queueNextItem.bind(this), f * this.attr.streamDelay)
                }.bind(this)
            })
        }, this.queueNextItem = function() {
            this.latentItems.length < 1 ? e=!1 : this.shouldStream() ? (f = this.latentItems.length > this.attr.streamSpeedUpTweetThreshold ? f * this.attr.streamSpeedUpFactor : 1, e=!0, this.streamNextItem()) : (f = 1, e=!1, this.updateNewTweetsBar())
        }, this.updateNewTweetsBar = function() {
            this.trigger("uiTimelineShouldRefresh", {
                injectImmediately: !1,
                interval: this.pollingTimer.interval,
                fromPolling: !0,
                latent_count: this.latentItems.length
            })
        }, this.finishAnimation = function() {
            this.select("streamSelector").stop(!0, !0)
        }, this.setNewTweetsBarVisible = function() {
            c=!0
        }, this.setNewTweetsBarHidden = function() {
            c=!1
        }, this.setPageHidden = function() {
            b=!0
        }, this.setPageVisible = function() {
            b=!1
        }, this.setReplyActive = function() {
            d=!0
        }, this.setReplyInactive = function() {
            d=!1
        }, this.isMediaPlayingInViewport = function() {
            var a = this.select("streamSelector").find('.animated-gif-playing, .open div[data-card2-name="amplify"], .open div[data-card2-name="player"]');
            return a.toArray().some(function(a) {
                return viewportHelpers.isWithinBounds(this.$window, $(a))
            }, this)
        }, this.isScrolledDown = function() {
            return $(window).scrollTop() > this.attr.streamScrollThreshold
        }, this.isTimelineUnavailable = function() {
            return b || c || this.latentItems.length > this.attr.streamPauseTweetThreshold
        }, this.isUserReplying = function() {
            return d && this.select("streamSelector").find(".tweet-box:focus").length > 0
        }, this.shouldStream = function() {
            return !(this.isTimelineUnavailable() || this.isUserReplying() || this.isScrolledDown() || this.isMediaPlayingInViewport())
        }, this.after("initialize", function() {
            if (!this.attr.streaming)
                return;
            this.on(document, "uiNewItemsShouldStream", this.newItemsArrived), this.on(document, "uiNewItemsBarVisible", this.setNewTweetsBarVisible), this.on(document, "uiHideNewItemsBar", this.setNewTweetsBarHidden), this.on(document, "uiPageHidden", this.setPageHidden), this.on(document, "uiPageVisible", this.setPageVisible), this.on(document, "uiTweetBoxExpanded", this.setReplyActive), this.on(document, "uiTweetBoxCondensed", this.setReplyInactive), this.on(document, "uiBeforePageChanged", this.finishAnimation)
        })
    }
    var scaleAnimationTime = require("app/utils/scale_animation_time"), viewportHelpers = require("app/utils/viewport_helpers");
    module.exports = withStreamingTimeline
});
define("app/ui/timelines/with_polling", ["module", "require", "exports", "core/utils", "app/utils/setup_polling_with_backoff"], function(module, require, exports) {
    function withPolling() {
        this.defaultAttrs({
            pollingWatchNode: $(window),
            pollingEnabled: !0
        }), this.pausePolling = function() {
            this.pollingTimer.pause(), this.pollingPaused=!0
        }, this.resetPolling = function() {
            this.backoffEmptyResponseCount = 0, this.pollingPaused=!1
        }, this.pollForNewItems = function(a, b) {
            this.trigger("uiTimelineShouldRefresh", {
                injectImmediately: !1,
                interval: this.pollingTimer.interval,
                fromPolling: !0
            })
        }, this.onGotMoreTimelineItems = function(a, b) {
            if (!(this.attr.pollingOptions && this.attr.pollingOptions.pauseAfterBackoff && b && b.sourceEventData))
                return;
            if (b.focused_refresh_interval) {
                var c = this.attr.pollingOptions.blurredInterval / this.attr.pollingOptions.focusedInterval;
                this.pollingTimer.clear(), this.attr.pollingOptions.focusedInterval = b.focused_refresh_interval, this.attr.pollingOptions.blurredInterval = b.focused_refresh_interval * c, this.pollingTimer = setupPollingWithBackoff("uiTimelinePollForNewItems", this.attr.pollingWatchNode, this.attr.pollingOptions)
            }
            var d = b.sourceEventData;
            d.fromPolling && (this.isNewItem(b) || d.interval < this.attr.pollingOptions.blurredInterval ? this.resetPolling() : ++this.backoffEmptyResponseCount >= this.attr.pollingOptions.backoffEmptyResponseLimit && this.pausePolling())
        }, this.getNewItemsCountData = function(a) {
            if (this.pollingPaused && this.attr.pollingOptions)
                return this.resetPolling(), {
                    count: this.attr.pollingOptions.resumeItemCount
                }
        }, this.possiblyRefreshBeforeInject = function(a, b, c) {
            return this.pollingPaused && c && c.fromClick && this.trigger("uiTimelineShouldRefresh", {
                injectImmediately: !0
            }), a(b, c)
        }, this.around("injectNewItems", this.possiblyRefreshBeforeInject), this.after("initialize", function() {
            if (!this.attr.pollingEnabled)
                return;
            this.on(document, "uiTimelinePollForNewItems", this.pollForNewItems), this.on(document, "dataGotMoreTimelineItems", this.onGotMoreTimelineItems), this.pollingTimer = setupPollingWithBackoff("uiTimelinePollForNewItems", this.attr.pollingWatchNode, this.attr.pollingOptions), this.resetPolling()
        })
    }
    var utils = require("core/utils"), setupPollingWithBackoff = require("app/utils/setup_polling_with_backoff");
    module.exports = withPolling
});
define("app/ui/timelines/with_new_items", ["module", "require", "exports", "core/utils", "core/compose", "app/ui/timelines/with_autoplaying_timeline", "app/ui/timelines/with_streaming_timeline", "app/ui/timelines/with_polling"], function(module, require, exports) {
    function withNewItems() {
        this.injectNewItems = function(a, b) {
            if (this.latentItems.length < 1)
                return;
            b && b.wasPeriodPress && this.trigger("uiUserPressedPeriodAndSawNewTweets"), b && b.wasPushStateInjection && this.trigger("uiUserPushStateInjectedTweets"), b && b.wasTopBarBirdClick && this.trigger("uiUserClickedTopBarBirdAndSawNewTweets"), b && b.wasComposedTweet && this.trigger("uiUserComposedTweet"), b && b.wasFollowTweetInjection && this.trigger("uiUserFollowTweetInjection"), this.trigger("uiHideNewItemsBar");
            var c = this.injectItems("prepend", this.latentItems.join(""), "uiHasInjectedNewTimeline", b);
            return this.resetLatentItems(), c
        }, compose.mixin(this, [withAutoplayingTimeline, withStreamingTimeline, withPolling]), this.defaultAttrs({
            streamItemSelector: ".js-stream-item:not(.js-stream-item .js-stream-item)",
            refreshOnReturn: !0
        }), this.getNewItems = function(a, b) {
            this.trigger("uiWantsMoreTimelineItems", utils.merge({
                include_new_items_bar: !b ||!b.injectImmediately,
                latent_count: this.latentItems.length,
                composed_count: Object.keys(this.composedThenInjectedTweetIds).length
            }, this.getNewItemsData(), this.getNewItemsCountData && this.getNewItemsCountData(), b))
        }, this.notifyNewItems = function(a) {
            if (!a.items_html ||!a.items_html.trim())
                return;
            var b = a.sourceEventData || {};
            this.resetStateVariables(a);
            var c = this.attr.injectComposedTweets && this.removeComposedTweetsFromPayload(a);
            if (!a.items_html)
                return;
            this.trigger("uiNewItemsAvailable", a), this.latentItems = this.htmlToItemArray(a.items_html).concat(this.latentItems);
            if (a.new_tweets_bar_html) {
                var d, e = a.new_tweets_bar_alternate_html;
                this.attr.injectComposedTweets && c > 0 && e && e[c - 1] ? d = e[c - 1] : d = a.new_tweets_bar_html, this.autoplay ? this.autoplayNewItems(a.new_tweets_bar_html, this.latentItems.length) : this.attr.streaming && this.shouldStream() ? this.trigger("uiNewItemsShouldStream") : b.injectImmediately || (this.trigger("uiUpdateNewItemsBar", {
                    html: d
                }), this.trigger("uiAddPageCount", {
                    count: this.latentItems.length
                }))
            }(b.injectImmediately || b.timeline_empty) && this.trigger("uiInjectNewItems"), b.scrollToTop && this.scrollToTop(), b.selectTopTweet && this.trigger("uiSelectTopTweet")
        }, this.removeComposedTweetsFromPayload = function(a) {
            var b = $(a.items_html).filter(this.attr.streamItemSelector);
            if (b.length == 0)
                return 0;
            var c = 0, d = b.filter(function(a, b) {
                var d = $(b).attr("data-item-id");
                return this.isItemComposedInThisPage(d) ? (c++, delete this.composedThenInjectedTweetIds[d], !1) : !0
            }.bind(this));
            return a.items_html = $("<div/>").append(d).html(), c
        }, this.isItemComposedInThisPage = function(a) {
            return a in this.composedThenInjectedTweetIds && this.composedThenInjectedTweetIds[a] == window.location.href
        }, this.htmlToItemArray = function(a) {
            var b = $("<div>").html(a).find(this.attr.streamItemSelector).toArray();
            return $(b[0]).attr("data-streaming-packet", !0), b.map(function(a) {
                return $("<div>").append(a).html()
            })
        }, this.saveLatentItems = function(a, b) {
            var c = this.select("containerSelector");
            c.attr("data-latent-items", this.latentItems.join(""))
        }, this.resetLatentItems = function() {
            var a = this.select("containerSelector"), b = a.attr("data-latent-items");
            a.removeAttr("data-latent-items"), this.latentItems = this.htmlToItemArray(b)
        }, this.refreshOnNavigate = function(a, b) {
            b.fromCache && this.attr.refreshOnReturn && this.trigger("uiTimelineShouldRefresh", {
                navigated: !0
            })
        }, this.refreshAndSelectTopTweet = function(a, b) {
            this.trigger("uiTimelineShouldRefresh", {
                injectImmediately: !0,
                selectTopTweet: !0
            })
        }, this.injectComposedTweet = function(a, b) {
            if (b.in_reply_to_status_id ||!b.tweet_html)
                return;
            this.injectNewItems();
            var c = $(b.tweet_html).filter(this.attr.streamItemSelector).first().attr("data-item-id");
            if (this.$node.find(".original-tweet[data-tweet-id='" + c + "']:first").length)
                return;
            this.latentItems = this.htmlToItemArray(b.tweet_html), this.injectNewItems(null, {
                wasComposedTweet: a.type === "dataTweetSuccess",
                wasFollowTweetInjection: a.type === "dataFollowStateChange"
            }), this.composedThenInjectedTweetIds[b.tweet_id] = window.location.href
        }, this.refreshAndInjectImmediately = function(a, b) {
            this.trigger("uiTimelineShouldRefresh", {
                injectImmediately: !0,
                selectTopTweet: this.$selected.length == 1
            })
        }, this.resetCacheOfComposedInjectedTweets = function(a, b) {
            this.composedThenInjectedTweetIds = composedThenInjectedTweetIds = {}
        }, this.addPageCount = function(a, b) {
            this.latentItems && this.trigger("uiAddPageCount", {
                count: this.latentItems.length
            })
        }, this.after("initialize", function(a) {
            this.latentItems = [], this.composedThenInjectedTweetIds = composedThenInjectedTweetIds, this.resetLatentItems(), this.injectNewItems(null, {
                wasPushStateInjection: !0
            }), this.on("uiInjectNewItems", this.injectNewItems), this.on(document, "uiTimelineShouldRefresh", this.getNewItems), this.on(document, "uiBeforePageChanged", this.saveLatentItems), this.on(document, "uiPageChanged", this.refreshOnNavigate), this.on(document, "uiGotoTopOfScreen", this.refreshAndInjectImmediately), this.on(document, "uiShortcutGotoTopOfScreen", this.refreshAndSelectTopTweet), this.on(document, "dataPageMutated", this.resetCacheOfComposedInjectedTweets), this.on(document, "uiPageNeedsCount", this.addPageCount), this.attr.injectComposedTweets && this.on(document, "dataTweetSuccess", this.injectComposedTweet), this.attr.injectTweetOnFollow && this.on(document, "dataFollowStateChange", this.injectComposedTweet)
        })
    }
    var utils = require("core/utils"), compose = require("core/compose"), withAutoplayingTimeline = require("app/ui/timelines/with_autoplaying_timeline"), withStreamingTimeline = require("app/ui/timelines/with_streaming_timeline"), withPolling = require("app/ui/timelines/with_polling"), composedThenInjectedTweetIds = {};
    module.exports = withNewItems
});
define("app/ui/timelines/with_activity_supplements", ["module", "require", "exports"], function(module, require, exports) {
    function withActivitySupplements() {
        this.defaultAttrs({
            networkActivityPageViewAllToggle: ".stream-item-activity-network",
            viewAllSupplementsButton: "button.view-all-supplements",
            interactionsPageViewAllToggle: ".stream-item-activity-me button.view-all-supplements",
            additionalStreamItemsSelector: ".sub-stream-item-showing,.sub-stream-item-hidden",
            additionalNetworkActivityItems: ".hidden-supplement, .hidden-supplement-expanded",
            hiddenSupplement: "hidden-supplement",
            visibleSupplement: "hidden-supplement-expanded",
            hiddenSubItem: "sub-stream-item-hidden",
            visibleSubItem: "sub-stream-item-showing",
            visibleSupplementSelector: ".visible-supplement"
        }), this.toggleSupplementTrigger = function(a) {
            var b = a.hasClass("show");
            return a.toggleClass("hide", b).toggleClass("show", !b), b
        }, this.toggleInteractionsSupplements = function(a, b) {
            var c = $(b.el), d = this.toggleSupplementTrigger(c);
            this.toggleSubStreamItemsVisibility(c.parent(), d)
        }, this.toggleNetworkActivitySupplements = function(a, b) {
            if ($(a.target).closest(".supplement").length > 0)
                return;
            var c = $(b.el), d = this.toggleSupplementTrigger(c.find(this.attr.viewAllSupplementsButton));
            d || this.trigger(c.find(".activity-supplement > .stream-item.open"), "uiShouldToggleExpandedState"), this.toggleSubStreamItemsVisibility(c, d), c.find(this.attr.additionalNetworkActivityItems).toggleClass("hidden-supplement", !d).toggleClass("hidden-supplement-expanded", d);
            var e = c.closest(".js-stream-item"), f;
            d ? (e.addClass("js-has-navigable-stream"), f = e.find(".activity-supplement .stream-item:first-child"), e.find(".activity-supplement > .js-unselectable-stream-item").removeClass("js-unselectable-stream-item"), this.trigger(f, "uiSelectItem", {
                setFocus: !0
            })) : (e.removeClass("js-has-navigable-stream"), e.find(".activity-supplement > .hidden-supplement").addClass("js-unselectable-stream-item"), this.trigger(e, "uiSelectItem", {
                setFocus: !0
            }))
        }, this.toggleSubStreamItemsVisibility = function(a, b) {
            a.find(this.attr.additionalStreamItemsSelector).toggleClass("sub-stream-item-hidden", !b).toggleClass("sub-stream-item-showing", b)
        }, this.selectAndFocusTopLevelStreamItem = function(a, b) {
            var c = $(b.el), d = c.hasClass("js-has-navigable-stream"), e = this.select("viewAllSupplementsButton").hasClass("show"), f = c.closest(".js-stream-item");
            e&&!d && (a.stopPropagation(), f.removeClass("js-has-navigable-stream"), this.trigger(f, "uiSelectItem", {
                setFocus: !0
            }))
        }, this.after("initialize", function() {
            this.on("click", {
                interactionsPageViewAllToggle: this.toggleInteractionsSupplements,
                networkActivityPageViewAllToggle: this.toggleNetworkActivitySupplements
            }), this.on("uiSelectItem", {
                visibleSupplementSelector: this.selectAndFocusTopLevelStreamItem
            })
        })
    }
    module.exports = withActivitySupplements
});
define("app/ui/timelines/with_pinned_stream_items", ["module", "require", "exports"], function(module, require, exports) {
    function withPinnedStreamItems() {
        this.defaultAttrs({
            pinnedStreamItemSelector: "li.js-pinned"
        }), this.keepPinnedStreamItemsOnTop = function() {
            if (!this.$pinnedStreamItems.length)
                return;
            var a = this.$pinnedStreamItems.first(), b = this.$pinnedStreamItems.last(), c = this.$items.children().first(), d = a.prev(), e = b.next();
            a.css("margin-top", "0"), a.hasClass("open") && d.removeClass("before-expanded"), b.hasClass("open") && (e.removeClass("after-expanded"), c.addClass("after-expanded")), this.$items.prepend(this.$pinnedStreamItems.detach())
        }, this.after("initialize", function() {
            this.$items = this.select("itemsSelector"), this.$pinnedStreamItems = this.select("pinnedStreamItemSelector"), this.on("uiHasInjectedNewTimeline", this.keepPinnedStreamItemsOnTop)
        })
    }
    module.exports = withPinnedStreamItems
});
define("app/ui/timelines/paginating_timeline", ["module", "require", "exports", "app/ui/timelines/base_timeline", "app/ui/timelines/with_old_items", "app/ui/timelines/with_new_items", "app/ui/timelines/with_activity_supplements", "app/ui/with_timestamp_updating", "app/ui/with_tweet_translation", "app/ui/with_item_actions", "app/ui/timelines/with_traveling_ptw", "app/ui/timelines/with_pinned_stream_items", "app/ui/gallery/with_gallery", "app/ui/with_viewer_follow_state"], function(module, require, exports) {
    var BaseTimeline = require("app/ui/timelines/base_timeline"), withOldItems = require("app/ui/timelines/with_old_items"), withNewItems = require("app/ui/timelines/with_new_items"), withActivitySupplements = require("app/ui/timelines/with_activity_supplements"), withTimestampUpdating = require("app/ui/with_timestamp_updating"), withTweetTranslation = require("app/ui/with_tweet_translation"), withItemActions = require("app/ui/with_item_actions"), withTravelingPtw = require("app/ui/timelines/with_traveling_ptw"), withPinnedStreamItems = require("app/ui/timelines/with_pinned_stream_items"), withGallery = require("app/ui/gallery/with_gallery"), withViewerFollowState = require("app/ui/with_viewer_follow_state"), PaginatingTimeline = BaseTimeline.mixin(withOldItems, withNewItems, withActivitySupplements, withTimestampUpdating, withTweetTranslation, withItemActions, withTravelingPtw, withPinnedStreamItems, withGallery, withViewerFollowState);
    module.exports = PaginatingTimeline
});
define("app/ui/timelines/with_tweet_pagination", ["module", "require", "exports", "app/utils/string"], function(module, require, exports) {
    function withTweetPagination() {
        this.isOldItem = function(a) {
            return a.max_id && (!this.max_id || string.compare(this.max_id, a.max_id) >= 0)
        }, this.isNewItem = function(a) {
            return a.since_id && (!this.since_id || string.compare(this.since_id, a.since_id) < 0)
        }, this.wasRangeRequest = function(a) {
            return a.max_id && a.since_id
        }, this.wasNewItemsRequest = function(a) {
            return a.since_id
        }, this.wasOldItemsRequest = function(a) {
            return a.max_id
        }, this.shouldGetOldItems = function() {
            var a = typeof this.max_id != "undefined" && this.max_id !== null;
            return !a || this.max_id != "-1"
        }, this.getOldItemsData = function() {
            return {
                max_id: this.max_id,
                query: this.query
            }
        }, this.getRangeItemsData = function(a, b) {
            return {
                since_id: a,
                max_id: b,
                query: this.query
            }
        }, this.getNewItemsData = function() {
            var a = {
                since_id: this.since_id,
                query: this.query,
                isNewItemRequest: !0
            };
            return this.select("itemsSelector").children().length == 0 && (a.timeline_empty=!0), a
        }, this.resetStateVariables = function(a) {
            ["max_id", "since_id", "query"].forEach(function(b, c) {
                typeof a[b] != "undefined" && (this[b] = a[b], (b == "max_id" || b == "since_id") && this.select("containerSelector").attr("data-" + b.replace("_", "-"), this[b]))
            }, this)
        }, this.after("initialize", function() {
            this.since_id = this.select("containerSelector").attr("data-since-id") || undefined, this.max_id = this.select("containerSelector").attr("data-max-id") || undefined, this.query = this.attr.query || ""
        }), this.extractStreamItemTweetId = function(a) {
            return a.find("[data-retweet-id]").length ? string.parseBigInt(a.find("[data-retweet-id]").data("retweet-id")) : string.parseBigInt(a.data("item-id"))
        }, this.recalculateMaxId = function() {
            var a = this.select("itemsSelector").children().last(), b = this.extractStreamItemTweetId(a);
            isNaN(b) || this.resetStateVariables({
                max_id: string.subtractOne(b)
            })
        }, this.around("injectItems", function(a, b, c, d, e) {
            var f = a(b, c, d, e);
            return this.max_id && b == "prepend" && this.recalculateMaxId(), f
        })
    }
    var string = require("app/utils/string");
    module.exports = withTweetPagination
});
define("app/ui/with_conversation_actions", ["module", "require", "exports", "app/utils/scale_animation_time"], function(module, require, exports) {
    var scaleAnimationTime = require("app/utils/scale_animation_time");
    module.exports = function() {
        this.defaultAttrs({
            conversationModuleSelector: ".conversation-module",
            hasConversationModuleSelector: ".tweet.has-conversation-module",
            conversationHeaderSelector: ".conversation-header",
            uncollapseSelector: "a.uncollapse",
            conversationRootSelector: "li.conversation-root",
            repliesCountSelector: ".replies-count",
            otherRepliesSelector: ".other-replies",
            topLevelStreamItemSelector: ".stream-item:not(.conversation-tweet-item)",
            afterExpandedClass: "after-expanded",
            beforeExpandedClass: "before-expanded",
            repliesCountClass: "replies-count",
            visuallyHiddenClass: "visuallyhidden",
            conversationRootClass: "conversation-root",
            originalTweetClass: "original-tweet",
            conversationItemsSelector: ".conversation-header, .conversation-tweet-item, .original-tweet-item, .missing-tweets-bar",
            toBeRemovedClass: "to-be-removed",
            unselectableStreamItemClass: "js-unselectable-stream-item",
            firstNavigableStreamItemClass: "first-navigable-stream-item",
            lastNavigableStreamItemClass: "last-navigable-stream-item",
            collapsedRootClass: "collapsed-root",
            collapsedAncestorsClass: "collapsed-ancestors",
            restoreConversationDelay: 100,
            animationTime: 200,
            collapseOverMinimum: 20
        }), this.dedupAndCollapse = function(a, b) {
            this.dedupConversations(), this.collapseConversationTweets(b && b.tweets)
        }, this.dedupAndCollapseNew = function(a, b) {
            this.dedupConversations(), b && b.tweets && b.tweets.length <= this.attr.collapseOverMinimum ? this.collapseFirstConversationTweets(this.attr.collapseOverMinimum) : this.collapseConversationTweets(b && b.tweets)
        }, this.dedupConversations = function() {
            var a = this.select("conversationModuleSelector");
            a.each(function(a, b) {
                if (!b.parentNode)
                    return;
                var c = $(b).attr("data-ancestors").split(","), d = $(this.idsToSelector(c)).not(".open");
                d.find(this.attr.conversationModuleSelector).addClass(this.attr.toBeRemovedClass), d.prev().removeClass(this.attr.beforeExpandedClass).end().next().removeClass(this.attr.afterExpandedClass);
                var e = this;
                d.slideUp(function() {
                    var a = $(this);
                    a.hasClass(e.attr.selectedClass) && e.trigger("uiSelectNext", {
                        maintainPosition: !0
                    }), setTimeout(function() {
                        a.remove()
                    }, 0)
                })
            }.bind(this))
        }, this.idToSelector = function(a) {
            return "#stream-item-tweet-" + a
        }, this.idsToSelector = function(a) {
            return a.map(this.idToSelector).join(",")
        }, this.collapseFirstConversationTweets = function(a) {
            var b = $(this.attr.streamItemSelector).slice(0, a).find(this.attr.conversationModuleSelector);
            this.collapseConversations(b)
        }, this.collapseConversationTweets = function(a) {
            var b;
            if (a) {
                var c = a.map(function(a) {
                    return a.tweetId
                }), d = this.$node.find(this.idsToSelector(c));
                b = d.find(this.attr.conversationModuleSelector)
            } else 
                b = this.select("conversationModuleSelector");
            this.collapseConversations(b)
        }, this.collapseConversations = function(a) {
            var b = {}, c = {};
            a.get().reverse().forEach(function(a) {
                var d = $(a), e = d.attr("data-ancestors"), f = d.find(".conversation-root .tweet").attr("data-item-id");
                d.hasClass("dont-collapse") || (b[e] ? this.collapseAncestors(d) : c[f] && this.collapseRoot(d)), d.hasClass(this.attr.toBeRemovedClass) || (b[e]=!0, c[f]=!0)
            }.bind(this))
        }, this.uncollapseConversationHandler = function(a, b) {
            a.preventDefault();
            var c = this.conversationModuleFromEvent(a);
            this.uncollapseConversation(c), c.addClass("dont-collapse")
        }, this.uncollapseConversation = function(a) {
            a.find(".conversation-tweet-item.conversation-ancestor:visible").length > 0 ? this.expandRoot(a) : this.expandAncestors(a)
        }, this.setSelectionToRoot = function(a) {
            this.trigger(a.find(".conversation-root.conversation-tweet-item"), "uiSelectItem", {
                setFocus: !0
            })
        }, this.expandAncestors = function(a) {
            var b = a.find(this.attr.conversationHeaderSelector), c = a.find(".conversation-tweet-item, .missing-tweets-bar"), d = a.find(".original-tweet-item");
            this.slideAndFadeContent(b, c, d, function() {
                a.removeClass(this.attr.collapsedAncestorsClass).removeClass(this.attr.collapsedRootClass), this.setSelectionToRoot(a)
            }.bind(this))
        }, this.expandRoot = function(a) {
            var b = a.find(this.attr.conversationHeaderSelector), c = a.find(".conversation-tweet-item.conversation-root, .missing-tweets-bar"), d = a.find(".conversation-tweet-item.conversation-ancestor:not(.conversation-root):first");
            d.length === 0 && (d = a.find(".original-tweet-item")), this.slideAndFadeContent(b, c, d, function() {
                this.setSelectionToRoot(a), a.removeClass(this.attr.collapsedAncestorsClass).removeClass(this.attr.collapsedRootClass)
            }.bind(this))
        }, this.collapseAncestors = function(a) {
            var b = a.find(".conversation-tweet-item, .missing-tweets-bar"), c = a.find(this.attr.conversationHeaderSelector), d = a.find(".original-tweet-item");
            this.slideAndFadeContent(b, c, d), a.addClass(this.attr.collapsedAncestorsClass)
        }, this.collapseRoot = function(a) {
            var b = a.find(".conversation-tweet-item.conversation-root, .missing-tweets-bar"), c = a.find(this.attr.conversationHeaderSelector), d = a.find(".conversation-tweet-item.conversation-ancestor:not(.conversation-root):first");
            d.length === 0 && (d = a.find(".original-tweet-item")), this.slideAndFadeContent(b, c, d), a.find(".conversation-tweet-item").length === 1 ? a.addClass(this.attr.collapsedAncestorsClass) : a.addClass(this.attr.collapsedRootClass)
        }, this.updateConversationItemClasses = function(a) {
            var b = $(a.target), c = b.find(this.attr.conversationItemsSelector);
            c.removeClass(this.attr.unselectableStreamItemClass), c.removeClass(this.attr.firstNavigableStreamItemClass), c.removeClass(this.attr.lastNavigableStreamItemClass), c.filter(":hidden").addClass(this.attr.unselectableStreamItemClass);
            var d = c.filter(":visible");
            d.first().addClass(this.attr.firstNavigableStreamItemClass), d.last().addClass(this.attr.lastNavigableStreamItemClass)
        }, this.slideAndFadeContent = function(a, b, c, d) {
            if (a.is(":hidden"))
                return;
            var e = c.offset().top, f = this.getCombinedHeight(a);
            a.hide();
            var g = c.offset().top;
            b.show();
            var h = this.getCombinedHeight(b), i = c.offset().top;
            this.setAbsolutePosition(b), b.hide(), a.show(), this.setAbsolutePosition(a);
            var j = e - g, k = e - i;
            c.css("paddingTop", f), a.fadeOut(scaleAnimationTime(this.attr.animationTime)), b.fadeIn(scaleAnimationTime(this.attr.animationTime)), c.animate({
                paddingTop: h
            }, scaleAnimationTime(this.attr.animationTime), function() {
                this.resetCss(a), this.resetCss(b), this.resetCss(c), this.trigger(c.closest(this.attr.conversationModuleSelector), "uiConversationModuleUpdated"), d && d()
            }.bind(this))
        }, this.resetCss = function(a) {
            var b = {
                position: "",
                top: "",
                width: "",
                height: "",
                paddingTop: ""
            };
            a.css(b)
        }, this.setAbsolutePosition = function(a) {
            a.get().reverse().forEach(function(a) {
                var b = $(a), c = b.width(), d = b.height();
                b.css({
                    position: "absolute",
                    top: b.position().top
                }), b.width(c), b.height(d)
            })
        }, this.getCombinedHeight = function(a) {
            var b = 0;
            return a.each(function() {
                b += $(this).outerHeight()
            }), b
        }, this.conversationModuleFromEvent = function(a) {
            return $(a.target).closest(this.attr.conversationModuleSelector)
        }, this.after("initialize", function() {
            this.on(document, "uiHasInjectedOldTimelineItems", this.dedupAndCollapse), this.on(document, "uiHasInjectedNewTimeline", this.dedupAndCollapseNew), this.on("click", {
                uncollapseSelector: this.uncollapseConversationHandler
            }), this.on("uiShortcutEnter", {
                conversationHeaderSelector: this.uncollapseConversationHandler
            }), this.on("uiUncollapseConversation", this.uncollapseConversationHandler), this.on("uiConversationModuleUpdated", this.updateConversationItemClasses), this.dedupAndCollapse()
        })
    }
});
define("app/ui/timelines/with_tweets_displayed_reporting", ["module", "require", "exports"], function(module, require, exports) {
    function withTweetsDisplayedReporting() {
        this.reportInitialTweetsDisplayed = function() {
            var a = this.select("genericItemSelector"), b = [], c = function(c, d) {
                var e = this.interactionData(this.findFirstItemContent($(d)));
                this.attr.reinjectedPromotedTweets && (e.impressionId = undefined), b.push(e)
            }.bind(this);
            for (var d = 0, e = a.length; d < e; d++)
                c(d, a[d]);
            var f = {
                scribeContext: {
                    component: "stream"
                },
                tweets: b
            };
            this.trigger("uiTweetsDisplayed", f)
        }, this.reportTweetsDisplayed = function(a, b) {
            b.tweets = b.items, this.trigger("uiTweetsDisplayed", b)
        }, this.after("initialize", function() {
            this.attr.reinjectedPromotedTweets = this.attr.reinjectedPromotedTweets, this.reportInitialTweetsDisplayed(), this.on("uiHasInjectedNewTimeline uiHasInjectedOldTimelineItems uiHasInjectedRangeTimelineItems", this.reportTweetsDisplayed)
        })
    }
    module.exports = withTweetsDisplayedReporting
});
define("app/ui/timelines/tweet_timeline", ["module", "require", "exports", "app/ui/timelines/paginating_timeline", "app/ui/timelines/with_tweet_pagination", "app/ui/with_conversation_actions", "app/ui/timelines/with_tweets_displayed_reporting"], function(module, require, exports) {
    function tweetTimeline() {
        this.defaultAttrs({
            itemType: "tweet"
        })
    }
    var PaginatingTimeline = require("app/ui/timelines/paginating_timeline"), withTweetPagination = require("app/ui/timelines/with_tweet_pagination"), withConversationActions = require("app/ui/with_conversation_actions"), withTweetsDisplayedReporting = require("app/ui/timelines/with_tweets_displayed_reporting");
    module.exports = PaginatingTimeline.mixin(tweetTimeline, withTweetPagination, withConversationActions, withTweetsDisplayedReporting)
});
define("app/ui/with_timeline_tweet_actions_kb_shortcuts", ["module", "require", "exports"], function(module, require, exports) {
    function withTimelineTweetActionsKeyboardShortcuts() {
        this.defaultAttrs({
            selectedStreamItemSelector: ".selected-stream-item",
            ownTweetSelector: ".my-tweet"
        }), this.isNotMyTweet = function(a, b, c) {
            return !c.$tweet.is(this.attr.ownTweetSelector)
        }, this.isSelected = function(a, b, c) {
            var d = this.select("selectedStreamItemSelector"), e = d[0], f = a.target;
            return d.is(f)||!!e&&!!$.contains(e, f)
        }, this.getSelectedTweet = function(a, b, c) {
            var d = this.select("selectedStreamItemSelector").find(this.attr.tweetItemSelector), e=!!d.length;
            return e && (c.$tweet = d), e
        }, this.after("initialize", function() {
            if (!this.attr.loggedIn)
                return;
            var a = this.mkTweetDataCollectorForAction(this.interactionDataWithCard), b = this.mkTweetDataCollectorForAction(this.interactionDataWithCard, this.getDataForReply);
            this.on("uiShortcutFavorite", this.composeHandler(this.isSelected, this.getSelectedTweet, a, this.toggleFavorite)), this.on("uiShortcutRetweet", this.composeHandler(this.isSelected, this.getSelectedTweet, this.isNotMyTweet, a, this.toggleRetweet)), this.on("uiShortcutReply", this.composeHandler(this.isSelected, this.getSelectedTweet, b, this.triggerTweetAction("uiReplyToTweet")))
        })
    }
    module.exports = withTimelineTweetActionsKeyboardShortcuts
});
define("app/ui/timeline_tweet_actions", ["module", "require", "exports", "app/ui/tweet_actions", "app/ui/with_timeline_tweet_actions_kb_shortcuts"], function(module, require, exports) {
    var TweetActions = require("app/ui/tweet_actions"), withTimelineTweetActionsKBShortcuts = require("app/ui/with_timeline_tweet_actions_kb_shortcuts");
    module.exports = TweetActions.mixin(withTimelineTweetActionsKBShortcuts)
});
define("app/ui/expando/with_sync_tweet_action_counts", ["module", "require", "exports"], function(module, require, exports) {
    function withSyncTweetActionCounts() {
        this.defaultAttrs({
            tweetIdSelector: "data-tweet-id",
            retweetStatSelector: ".js-stat-retweets a",
            favoriteStatSelector: ".js-stat-favorites a",
            activityTitleSelector: "data-activity-popup-title",
            tweetStatCountSelector: "data-tweet-stat-count",
            compactLocalizedCountSelector: "data-compact-localized-count",
            displayCountSelector: "strong"
        }), this.triggerDataGotTweetStats = function(a, b) {
            var c = $(a.target), d = c.attr(this.attr.tweetIdSelector);
            if (d && b.social_proof) {
                var e = $(b.social_proof), f = this.buildRetweetStat(d, e.find(this.attr.retweetStatSelector)), g = this.buildFavoriteStat(d, e.find(this.attr.favoriteStatSelector));
                c.trigger("dataGotTweetStats", this.buildTweetStats(f, g))
            }
        }, this.buildRetweetStat = function(a, b) {
            return this.buildTweetStat(a, b, "retweet")
        }, this.buildFavoriteStat = function(a, b) {
            return this.buildTweetStat(a, b, "favorite")
        }, this.buildTweetStat = function(a, b, c) {
            if (b.length) {
                var d = b.attr(this.attr.tweetStatCountSelector), e = b.attr(this.attr.compactLocalizedCountSelector), f = b.attr(this.attr.activityTitleSelector);
                if (d != "" && e != "")
                    return {
                        name: c,
                        status_id: a,
                        count: d,
                        commaized_count: e,
                        title: f || ""
                    }
            }
        }, this.buildTweetStats = function(a, b) {
            return {
                stats: [a, b].filter(function(a) {
                    return !!a
                })
            }
        }, this.updateSocialProofStats = function(a, b) {
            a.target == document && b.stats && b.stats.forEach(function(a) {
                var b = this.findTweetOrRetweet(a.status_id), c = b.find(this.socialProofStatElementSelectorFor(a.name));
                this.updateSocialProofStat(c, a)
            }.bind(this))
        }, this.socialProofStatElementSelectorFor = function(a) {
            var b = {
                retweet: this.attr.retweetStatSelector,
                favorite: this.attr.favoriteStatSelector
            };
            return b[a]
        }, this.updateSocialProofStat = function(a, b) {
            a.attr(this.attr.tweetStatCountSelector, b.count), a.find(this.attr.displayCountSelector).text(b.commaized_count)
        }, this.after("initialize", function() {
            this.on(document, "dataTweetSocialProofResult", this.triggerDataGotTweetStats), this.on("dataGotTweetStats", this.updateSocialProofStats)
        })
    }
    module.exports = withSyncTweetActionCounts
});
define("app/ui/profile/highline_tweet_stats", ["module", "require", "exports", "core/component", "app/ui/expando/with_sync_tweet_action_counts"], function(module, require, exports) {
    function highlineTweetStats() {
        this.defaultAttrs({
            tweetSelector: ".tweet, .ProfileTweet",
            tweetActionSelector: ".ProfileTweet-action",
            replyCountSelector: ".ProfileTweet-action--reply .ProfileTweet-actionCount",
            favoriteCountSelector: ".ProfileTweet-action--favorite .ProfileTweet-actionCount",
            retweetCountSelector: ".ProfileTweet-action--retweet .ProfileTweet-actionCount",
            actionCountForPresentationSelector: ".ProfileTweet-actionCountForPresentation",
            actionCountForAriaSelector: ".ProfileTweet-actionCountForAria",
            zeroCountClass: "ProfileTweet-actionCount--isZero"
        }), this.updateTweetStats = function(a, b) {
            b.stats && b.stats.forEach(function(a) {
                var b = this.findTweetOrRetweet(a.status_id), c = b.find(this.statElementSelectorFor(a.name));
                this.updateStat(c, a.count, a.commaized_count), this.updateTitle(c, a.title)
            }.bind(this))
        }, this.updateStat = function(a, b, c) {
            a.attr("data-tweet-stat-count", Math.max(b, 0)), b <= 0 ? (a.addClass(this.attr.zeroCountClass), a.attr("aria-hidden", "true"), a.find(this.attr.actionCountForPresentationSelector).html(""), a.find(this.attr.actionCountForAriaSelector).removeAttr("data-aria-label-part")) : (a.removeClass(this.attr.zeroCountClass), a.removeAttr("aria-hidden"), a.find(this.attr.actionCountForPresentationSelector).html(c), a.find(this.attr.actionCountForAriaSelector).attr("data-aria-label-part", "0"))
        }, this.updateTitle = function(a, b) {
            a.find(this.attr.actionCountForAriaSelector).html(b)
        }, this.findTweetOrRetweet = function(a) {
            var b = this.select("tweetSelector").filter("[data-tweet-id=" + a + "]");
            return b.length || (b = this.select("tweetSelector").filter("[data-retweet-id=" + a + "]")), b
        }, this.statElementSelectorFor = function(a) {
            var b = {
                reply: this.attr.replyCountSelector,
                favorite: this.attr.favoriteCountSelector,
                retweet: this.attr.retweetCountSelector
            };
            return b[a]
        }, this.after("initialize", function() {
            this.on("dataGotTweetStats", this.updateTweetStats)
        })
    }
    var defineComponent = require("core/component"), withSyncTweetActionCounts = require("app/ui/expando/with_sync_tweet_action_counts");
    module.exports = defineComponent(highlineTweetStats, withSyncTweetActionCounts)
});
define("app/ui/with_dismiss_tweet", ["module", "require", "exports"], function(module, require, exports) {
    function withDismissTweet() {
        this.defaultAttrs({
            dismissTweetSelector: ".tweet .js-action-dismiss"
        }), this.after("initialize", function() {
            var a = this.mkTweetDataCollectorForAction(this.interactionDataWithCard);
            if (!this.attr.loggedIn)
                return;
            this.on("click", {
                dismissTweetSelector: this.composeHandler(this.getClosestTweet, a, this.triggerTweetAction("uiDismissTweet"))
            })
        })
    }
    module.exports = withDismissTweet
});
define("app/ui/timelines/with_dismissible_promoted_tweets", ["module", "require", "exports", "app/utils/cookie"], function(module, require, exports) {
    function withDismissiblePromotedTweets() {
        this.defaultAttrs({
            dismissedTweetSelector: ".js-dismissed-promoted-tweet",
            promotedTweetStoreCookieName: "h",
            dismissedTweetClass: "js-dismissed-promoted-tweet"
        }), this.cookie = cookie, this.removeAllDismissed = function() {
            this.select("dismissedTweetSelector").stop().remove()
        }, this.dismissTweet = function(a, b) {
            var c = $(a.target), d = c.closest(this.attr.tweetContainerSelector);
            d.addClass(this.attr.dismissedTweetClass).fadeOut(200, function() {
                d.remove()
            }), d.prev().removeClass("before-expanded"), d.next().removeClass("after-expanded"), this.trigger("uiTweetDismissed", b), this.removeFromPromotedTweetStoreCookie(b)
        }, this.removeTweetsFromBlockedUser = function(a, b) {
            var c = this.$node.find("[data-user-id=" + b.userId + "].js-stream-tweet.promoted-tweet"), d = this;
            $.each(c, function(a, b) {
                var c = $(b).attr("data-tweet-id");
                c && d.removeFromPromotedTweetStoreCookie({
                    id: c
                })
            })
        }, this.removeFromPromotedTweetStoreCookie = function(a) {
            var b;
            try {
                b = JSON.parse(cookie(this.attr.promotedTweetStoreCookieName))
            } catch (c) {
                b = []
            }
            $.isArray(b) || (b = [b]), b = b.filter(function(b) {
                return b && b.tweet_id && b.tweet_id != a.id
            }), b = b.length == 0 ? null : JSON.stringify(b), cookie(this.attr.promotedTweetStoreCookieName, b)
        }, this.after("initialize", function() {
            this.on("uiDismissTweet", this.dismissTweet), this.on(document, "uiBeforePageChanged", this.removeAllDismissed), this.on(document, "jsClearReinjectionCookiesForUser", this.removeTweetsFromBlockedUser)
        })
    }
    var cookie = require("app/utils/cookie");
    module.exports = withDismissiblePromotedTweets
});
define("app/ui/timelines/with_min_max_pagination", ["module", "require", "exports"], function(module, require, exports) {
    function withMinMaxPagination() {
        this.isOldItem = function(a) {
            return typeof a.min_position != "undefined"
        }, this.isNewItem = function(a) {
            return typeof a.max_position != "undefined"
        }, this.getNewItemsData = function() {
            return {
                min_position: this.max_position,
                isNewItemRequest: !0
            }
        }, this.getOldItemsData = function() {
            return {
                max_position: this.min_position
            }
        }, this.resetStateVariables = function(a) {
            typeof a.max_position != "undefined" && (this.max_position = a.max_position, this.select("containerSelector").attr("data-max-position", this.max_position)), typeof a.min_position != "undefined" && (this.min_position = a.min_position, this.select("containerSelector").attr("data-min-position", this.min_position))
        }, this.wasRangeRequest = function() {
            return !1
        }, this.wasNewItemsRequest = function(a) {
            return this.isNewItem(a)
        }, this.wasOldItemsRequest = function(a) {
            return this.isOldItem(a)
        }, this.shouldGetOldItems = function() {
            return this.min_position !== null
        }, this.shouldGetNewItems = function() {
            return this.max_position !== null
        }, this.after("initialize", function() {
            this.min_position = this.select("containerSelector").attr("data-min-position") || undefined, this.max_position = this.select("containerSelector").attr("data-max-position") || undefined
        })
    }
    module.exports = withMinMaxPagination
});
define("app/ui/timelines/min_max_tweet_timeline", ["module", "require", "exports", "app/ui/timelines/paginating_timeline", "app/ui/timelines/with_min_max_pagination", "app/ui/with_conversation_actions", "app/ui/timelines/with_tweets_displayed_reporting"], function(module, require, exports) {
    function minMaxTweetTimeline() {
        this.defaultAttrs({
            itemType: "tweet"
        })
    }
    var PaginatingTimeline = require("app/ui/timelines/paginating_timeline"), withMinMaxPagination = require("app/ui/timelines/with_min_max_pagination"), withConversationActions = require("app/ui/with_conversation_actions"), withTweetsDisplayedReporting = require("app/ui/timelines/with_tweets_displayed_reporting");
    module.exports = PaginatingTimeline.mixin(minMaxTweetTimeline, withMinMaxPagination, withConversationActions, withTweetsDisplayedReporting)
});
define("app/boot/tweet_timeline", ["module", "require", "exports", "app/boot/timeline", "app/boot/tweets", "app/boot/help_pips", "app/ui/expando/close_all_button", "app/ui/timelines/tweet_timeline", "app/ui/timeline_tweet_actions", "app/ui/profile/highline_tweet_stats", "app/ui/with_dismiss_tweet", "app/ui/timelines/with_dismissible_promoted_tweets", "app/ui/more_tweet_actions_dropdown", "app/ui/timelines/min_max_tweet_timeline", "core/utils"], function(module, require, exports) {
    function initialize(a, b, c, d, e) {
        var f = utils.merge(a, {
            endpoint: b,
            itemType: d,
            eventData: {
                scribeContext: {
                    component: e || d
                }
            }
        });
        timelineBoot(utils.merge(f, {
            statsName: c
        })), tweetsBoot("#timeline", f), f.help_pips_decider && helpPipsBoot(f), CloseAllButton.attachTo("#close-all-button", {
            addEvent: "uiHasExpandedTweet uiHasDetachedConversation",
            subtractEvent: "uiHasCollapsedTweet uiHasReattachedConversation"
        });
        var g = f.pageName == "home", h = f.useMinMaxPagination ? MinMaxTweetTimeline: TweetTimeline, i = g ? [withDismissiblePromotedTweets]: [];
        h.mixin.apply(this, i).attachTo("#timeline", f);
        var j = [];
        g && (j = j.concat(withDismissTweet)), HighlineTweetStats.attachTo(document), TimelineTweetActions.mixin.apply(this, j).attachTo("#timeline", f), MoreTweetActionsDropdown.attachTo("#timeline", f)
    }
    var timelineBoot = require("app/boot/timeline"), tweetsBoot = require("app/boot/tweets"), helpPipsBoot = require("app/boot/help_pips"), CloseAllButton = require("app/ui/expando/close_all_button"), TweetTimeline = require("app/ui/timelines/tweet_timeline"), TimelineTweetActions = require("app/ui/timeline_tweet_actions"), HighlineTweetStats = require("app/ui/profile/highline_tweet_stats"), withDismissTweet = require("app/ui/with_dismiss_tweet"), withDismissiblePromotedTweets = require("app/ui/timelines/with_dismissible_promoted_tweets"), MoreTweetActionsDropdown = require("app/ui/more_tweet_actions_dropdown"), MinMaxTweetTimeline = require("app/ui/timelines/min_max_tweet_timeline"), utils = require("core/utils");
    module.exports = initialize
});
define("app/ui/timelines/tweet_visibility", ["module", "require", "exports", "core/component", "app/ui/with_interaction_data", "core/clock", "app/utils/viewport_helpers"], function(module, require, exports) {
    function tweetVisibility() {
        this.viewportHelpers = viewportHelpers, this.defaultAttrs({
            tweetSelector: ".tweet",
            itemType: "tweet",
            checkVisibilityInterval: 500
        }), this.checkTweetVisibility = function() {
            var a = this.allVisibleTweets(), b = a.map(function(a) {
                return this.interactionData(a)
            }, this);
            this.trigger("uiTweetsVisible", {
                tweetData: b
            })
        }, this.allVisibleTweets = function() {
            var a = this.select("tweetSelector").get(), b = this.findVisibleTweet(a);
            if (b==-1)
                return [];
            var c = [], d = b;
            while (a[d] && viewportHelpers.isWithinBounds(this.$window, $(a[d])))
                c.unshift(a[d]), d--;
            d = b + 1;
            while (a[d] && viewportHelpers.isWithinBounds(this.$window, $(a[d])))
                c.push(a[d]), d++;
            return c
        }, this.findVisibleTweet = function(a) {
            return this.findVisibleTweetRecursive(a.length, 0, a, 0)
        }, this.findVisibleTweetRecursive = function(a, b, c, d) {
            var e = Math.floor((a - b) / 2 + b);
            return e === b || d > 100?-1 : viewportHelpers.isAboveViewport(this.$window, $(c[e])) ? this.findVisibleTweetRecursive(a, e, c, d + 1) : viewportHelpers.isBelowViewport(this.$window, $(c[e])) ? this.findVisibleTweetRecursive(e, b, c, d + 1) : e
        }, this.after("initialize", function() {
            this.$window = $(window), clock.setIntervalEvent("uiCheckTweetVisibility", this.attr.checkVisibilityInterval), this.on(document, "uiCheckTweetVisibility", this.checkTweetVisibility)
        })
    }
    var defineComponent = require("core/component"), withInteractionData = require("app/ui/with_interaction_data"), clock = require("core/clock"), viewportHelpers = require("app/utils/viewport_helpers");
    module.exports = defineComponent(tweetVisibility, withInteractionData)
});
define("app/data/tweet_visibility_scribe", ["module", "require", "exports", "core/component", "core/utils", "app/data/with_scribe", "app/data/with_interaction_data_scribe", "core/clock"], function(module, require, exports) {
    function tweetVisibilityScribe() {
        this.defaultAttrs({
            scribeInterval: 6e4
        }), this.getTime = function() {
            return Date.now()
        }, this.handleTweetsVisible = function(a, b) {
            this.recordVisibleTweets(b.tweetData)
        }, this.recordVisibleTweets = function(a) {
            var b = {}, c = this.getTime();
            a.forEach(function(a) {
                this.visibleTweets[a.tweetId] ? b[a.tweetId] = utils.merge(this.visibleTweets[a.tweetId], {
                    visibility_end: c
                }) : b[a.tweetId] = utils.merge(a, {
                    visibility_start: c,
                    visibility_end: c
                })
            }, this), this.visibleTweetKeys().forEach(function(a) {
                var c = this.visibleTweets[a], d=!b[a], e = c.visibility_start != c.visibility_end;
                d && e && this.previouslyVisibleTweets.push(this.visibleTweets[a])
            }, this), this.visibleTweets = b
        }, this.flushVisibleTweets = function(a, b) {
            var c = this.getTime();
            this.visibleTweetKeys().forEach(function(a) {
                this.visibleTweets[a].visibility_end = c
            }, this), this.recordVisibleTweets([]), this.scribeVisibilityResults()
        }, this.scribeVisibilityResults = function() {
            if (!this.previouslyVisibleTweets.length)
                return;
            var a = {
                component: "stream",
                element: "linger",
                action: "results"
            }, b = {
                items: this.previouslyVisibleTweets.map(function(a) {
                    return this.interactionItem(a)
                }, this)
            };
            this.previouslyVisibleTweets = [], this.scribe(a, b)
        }, this.visibleTweetKeys = function() {
            return Object.keys(this.visibleTweets).filter(function(a) {
                return this.visibleTweets.propertyIsEnumerable(a)
            }, this)
        }, this.after("initialize", function() {
            this.visibleTweets = {}, this.previouslyVisibleTweets = [], clock.setIntervalEvent("uiScribeVisibilityResults", this.attr.scribeInterval), this.on("uiScribeVisibilityResults", this.scribeVisibilityResults), this.on("uiTweetsVisible", this.handleTweetsVisible), this.on("uiBeforePageChanged", this.flushVisibleTweets)
        })
    }
    var defineComponent = require("core/component"), utils = require("core/utils"), withScribe = require("app/data/with_scribe"), withInteractionDataScribe = require("app/data/with_interaction_data_scribe"), clock = require("core/clock");
    module.exports = defineComponent(tweetVisibilityScribe, withScribe, withInteractionDataScribe)
});
define("app/ui/user_completion_module", ["module", "require", "exports", "core/component"], function(module, require, exports) {
    function userCompletionModule() {
        var a = ["completeProfileSelector", "followAccountsSelector", "firstTweetSelector", "downloadAppSelector", "findFriendsSelector"];
        this.defaultAttrs({
            selectedClass: "is-selected",
            completedClass: "is-completed",
            targetFollowingCount: 5,
            completeProfileSelector: "#complete-profile-step",
            followAccountsSelector: "#follow-accounts-step",
            firstTweetSelector: "#first-tweet-step:not(.is-completed)",
            downloadAppSelector: "#download-app-step",
            findFriendsSelector: "#find-friends-step",
            unCompletedStepSelector: ".UserCompletion-step:not(.is-completed)"
        }), this.openTweetDialog = function() {
            this.trigger("uiOpenTweetDialog")
        }, this.setCompleteProfileStepCompleted = function(a, b) {
            b.sourceEventData.uploadType == "avatar" && this.setStepCompleted("completeProfileSelector", "complete_profile")
        }, this.setFollowAccountsStepCompleted = function() {
            this.setStepCompleted("followAccountsSelector", "follow_accounts")
        }, this.setFindFriendsStepCompleted = function(a, b) {
            b.done && this.setStepCompleted("findFriendsSelector", "find_friends")
        }, this.setFirstTweetStepCompleted = function() {
            this.setStepCompleted("firstTweetSelector", "tweet")
        }, this.setFirstTweetStepSelected = function() {
            this.unselectAll(), this.selectStep("firstTweetSelector")
        }, this.setFirstTweetStepUnselected = function() {
            this.unselectStep("firstTweetSelector"), this.reselectPrevious()
        }, this.unselectStep = function(a) {
            this.select(a).removeClass(this.attr.selectedClass)
        }, this.selectStep = function(a) {
            this.select(a).addClass(this.attr.selectedClass)
        }, this.unselectAll = function() {
            this.$previouslySelected = null;
            var b = this;
            a.forEach(function(a) {
                var c = b.select(a);
                c.hasClass(this.attr.selectedClass) && (c.removeClass(this.attr.selectedClass), b.$previouslySelected = c)
            }, this)
        }, this.reselectPrevious = function() {
            this.$previouslySelected && this.$previouslySelected.addClass(this.attr.selectedClass)
        }, this.setStepCompleted = function(a, b) {
            if (this.select(a).length == 0 || this.select(a).hasClass(this.attr.completedClass))
                return;
            this.select(a).removeClass(this.attr.selectedClass).addClass(this.attr.completedClass), this.trigger("uiUserCompletionStepCompleted", {
                stepCompleted: b
            }), this.select("unCompletedStepSelector").size() == 0 && this.trigger("uiUserCompletionModuleCompleted")
        }, this.updateFollowAccountsState = function(a, b) {
            var c = b.stats.filter(function(a) {
                return a.user_id == this.attr.userId
            }.bind(this))[0];
            if (c) {
                var d = parseInt(c.highline_stat_value, 10);
                d >= this.attr.targetFollowingCount && this.setFollowAccountsStepCompleted()
            }
        }, this.after("initialize", function() {
            this.on(document, "dataSaveImageSuccess", this.setCompleteProfileStepCompleted), this.on(document, "dataContactImportStatusSuccess", this.setFindFriendsStepCompleted), this.on(document, "dataGotProfileStats", this.updateFollowAccountsState), this.on(document, "uiOpenTweetDialog", this.setFirstTweetStepSelected), this.on(document, "uiSendTweet uiSendTweetWithMedia", this.setFirstTweetStepCompleted), this.on(document, "uiTweetDialogClosed", this.setFirstTweetStepUnselected), this.on("click", {
                firstTweetSelector: this.openTweetDialog
            })
        })
    }
    var defineComponent = require("core/component");
    module.exports = defineComponent(userCompletionModule)
});
define("app/data/user_completion_module_scribe", ["module", "require", "exports", "core/component", "app/data/with_scribe"], function(module, require, exports) {
    function userCompletionModuleScribe() {
        this.defaultAttrs({
            userCompletionStepSelector: ".UserCompletion-step:not(.is-completed)"
        }), this.scribeStepClick = function(a, b) {
            var c = $(a.target).data("scribe-element");
            this.scribe({
                component: "user_completion",
                element: c,
                action: "click"
            })
        }, this.scribeStepComplete = function(a, b) {
            this.scribe({
                component: "user_completion",
                element: b.stepCompleted,
                action: "completed"
            })
        }, this.scribeAllStepsCompleted = function(a, b) {
            this.scribe({
                component: "user_completion",
                action: "module_completed"
            })
        }, this.after("initialize", function() {
            this.on("click", {
                userCompletionStepSelector: this.scribeStepClick
            }), this.on(document, "uiUserCompletionStepCompleted", this.scribeStepComplete), this.on(document, "uiUserCompletionModuleCompleted", this.scribeAllStepsCompleted)
        })
    }
    var defineComponent = require("core/component"), withScribe = require("app/data/with_scribe");
    module.exports = defineComponent(userCompletionModuleScribe, withScribe)
});
define("app/boot/user_completion_module", ["module", "require", "exports", "app/ui/user_completion_module", "app/data/user_completion_module_scribe", "core/utils"], function(module, require, exports) {
    function initialize(a) {
        var b = ".UserCompletion", c = utils.merge(a, {
            eventData: {
                scribeContext: {
                    component: "user_completion"
                }
            }
        });
        UserCompletionModule.attachTo(b, c), UserCompletionModuleScribe.attachTo(b, c)
    }
    var UserCompletionModule = require("app/ui/user_completion_module"), UserCompletionModuleScribe = require("app/data/user_completion_module_scribe"), utils = require("core/utils");
    module.exports = initialize
});
define("app/ui/who_to_follow/with_import_prompt", ["module", "require", "exports", "core/compose"], function(module, require, exports) {
    function withImportPrompt() {
        this.defaultAttrs({
            connectOtherSelector: ".js-connect-other",
            otherServicesSelector: ".other-services"
        }), this.toggleOtherServices = function() {
            var a = this.select("otherServicesSelector"), b;
            a.hasClass("hidden") ? (a.removeClass("hidden"), b = "open") : (a.addClass("hidden"), b = "close"), this.trigger("uiWTFImportPromptToggle", {
                action: b
            })
        }, this.after("initialize", function() {
            this.trigger("uiWTFImportPromptImpression"), this.on("click", {
                connectOtherSelector: this.toggleOtherServices
            })
        })
    }
    var compose = require("core/compose");
    module.exports = withImportPrompt
});
define("app/ui/who_to_follow/with_user_recommendations", ["module", "require", "exports", "core/utils", "$lib/bootstrap_tooltip.js"], function(module, require, exports) {
    function withUserRecommendations() {
        this.defaultAttrs({
            refreshAnimationDuration: 200,
            cycleTimeout: 1e3,
            experimentCycleTimeout: 300,
            wtfOptions: {},
            selfPromotedAccountHtml: "",
            $accountPriorToPreview: null,
            wtfRefreshOnNewSearchTweets: !1,
            wtfRefreshDebounceBucket: null,
            successClass: "has-content",
            recListSelector: ".js-recommended-followers",
            recSelector: ".js-actionable-user",
            refreshRecsSelector: ".js-refresh-suggestions",
            similarToContainerSelector: ".js-expanded-similar-to",
            expandedContainerSelector: ".js-expanded-container",
            itemType: "user"
        }), this.getDebounceInterval = function() {
            var a = this.attr.wtfRefreshDebounceBucket, b = /(\d+)+_min_debounce/, c = 6e4, d = null;
            return b.test(a) && (d = parseInt(a.match(b)[1], 10) * c), d
        }, this.shouldRefreshWTFOnNewHomeTweets = function() {
            var a = this.attr.wtfRefreshDebounceBucket;
            return a === "control" || a === null?!1 : !0
        }, this.refreshRecommendations = function(a, b) {
            if (!this.currentlyRefreshing) {
                this.currentlyRefreshing=!0;
                var c = this.getVisibleIds(null, !0).length || this.attr.wtfOptions.limit;
                this.trigger("uiRefreshUserRecommendations", utils.merge(this.attr.wtfOptions, {
                    excluded: this.getVisibleIds(),
                    limit: c,
                    refreshType: a.type
                })), this.hideRecommendations()
            }
        }, this.sendGetRecommendationEvent = function(a, b) {
            this.trigger("uiGetUserRecommendations", utils.merge(this.attr.wtfOptions, a || {}))
        }, this.getUserRecommendations = function(a, b) {
            this.sendGetRecommendationEvent(a, b), this.hideRecommendations()
        }, this.hideRecommendations = function() {
            this.animateContentOut(this.select("recListSelector"), "animationCallback")
        }, this.isNewUserDuplicate = function(a) {
            return this.getVisibleIds().indexOf(a)!==-1
        }, this.handleRecommendationsResponse = function(a, b) {
            var c = this.getVisibleIds();
            if (this.disabled)
                return;
            b = b || {}, this.hasRecommendations() || (b = utils.merge(b, {
                initialResults: !0
            }));
            var d = b.user_recommendations_html;
            if (d) {
                var e = this.currentlyRefreshingUser(b);
                this.$node.addClass(this.attr.successClass);
                if (this.shouldExpandWtf(b)) {
                    var f = $(d), g = f.filter(this.attr.recSelector).first(), h = f.filter(this.attr.expandedContainerSelector), i = h.find(".js-actionable-user").filter(function() {
                        return c.indexOf($(this).data("user-id") + "")==-1
                    });
                    h.empty(), i.each(function() {
                        h.append(this)
                    }), e&&!this.isNewUserDuplicate(g.data("user-id") + "") && this.animateContentIn(e, "animationCallback", $("<div>").append(g).html(), {
                        modOp: "replaceWith",
                        scribeCallback: function() {
                            this.currentlyExpanding ? this.pendingScribe=!0 : this.reportUsersDisplayed(b)
                        }.bind(this)
                    }), h.size() && this.animateExpansion(h, b)
                } else {
                    if (this.isNewUserDuplicate($(d).data("user-id") + ""))
                        return;
                    var j = this.select("recListSelector"), k;
                    e && (j = e, k = "replaceWith"), this.animateContentIn(j, "animationCallback", d, {
                        modOp: k,
                        scribeCallback: function() {
                            this.reportUsersDisplayed(b)
                        }.bind(this)
                    })
                }
            } else 
                this.handleEmptyRefreshResponse(a, b), this.trigger("uiGotEmptyRecommendationsResponse", b)
        }, this.handleRefreshError = function(a, b) {
            this.handleEmptyRefreshResponse(a, b)
        }, this.handleEmptyRefreshResponse = function(a, b) {
            if (!this.select("recSelector").length)
                return;
            if (this.currentlyExpanding) {
                var c = this.currentlyRefreshingUser(b);
                if (b && b.sourceEventData && b.sourceEventData.clusterfollow && c) {
                    this.currentlyExpanding=!1, this.replenishWhoToFollowDashboard(c);
                    return 
                }
            }
            var d = this.select("recListSelector"), e = this.currentlyRefreshingUser(b);
            e && (d = e), this.animateContentIn(d, "animationCallback", d.html())
        }, this.getVisibleIds = function(a, b) {
            var c = this.select("recSelector").not(a);
            return b || (c = c.not(".promoted-account")), c.map(function() {
                return $(this).attr("data-user-id")
            }).toArray()
        }, this.originalItemCount = function() {
            return $(this.attr.recListSelector).children(this.attr.recSelector).length
        }, this.doAfterFollowAction = function(a, b) {
            if (this.disabled || b.newState != "following")
                return;
            var c = this.expandBucket ? this.attr.experimentCycleTimeout: this.attr.cycleTimeout;
            setTimeout(function() {
                if (this.currentlyRefreshing)
                    return;
                var a = this.select("recSelector").filter("[data-user-id='" + b.userId + "']");
                if (!a.length)
                    return;
                this.cycleRecommendation(a, b)
            }.bind(this), c)
        }, this.isInSimilarToSection = function(a) {
            return !!a.closest(this.attr.similarToContainerSelector).length
        }, this.cycleRecommendation = function(a, b) {
            this.animateContentOut(a, "animationCallback");
            var c = utils.merge(this.attr.wtfOptions, {
                limit: 1,
                visible: this.getVisibleIds(a),
                refreshUserId: b.userId
            });
            this.isInSimilarToSection(a) && (c.similar_to_user_id = this.select("similarToContainerSelector").data("similar-to-user-id")), this.trigger("uiGetUserRecommendations", c)
        }, this.animateExpansion = function(a, b) {
            var c = this.select("recListSelector"), d = this.select("expandedContainerSelector"), e = function() {
                this.pendingScribe && (this.reportUsersDisplayed(b), this.pendingScribe=!1), this.currentlyExpanding=!1
            };
            d.length ? d.html(a.html()) : c.append(a), a.is(":visible") ? e.bind(this)() : a.slideDown("slow", e.bind(this))
        }, this.animateContentIn = function(a, b, c, d) {
            if (!a.length)
                return;
            d = d || {};
            var e = function() {
                a.is(this.attr.recListSelector) && (this.currentlyRefreshing=!1), a[d.modOp || "html"](c).animate({
                    opacity: 1
                }, this.attr.refreshAnimationDuration), d.scribeCallback && d.scribeCallback()
            }.bind(this);
            a.is(":animated") ? this[b] = e : e()
        }, this.animateContentOut = function(a, b) {
            a.animate({
                opacity: 0
            }, {
                duration: this.attr.refreshAnimationDuration,
                complete: function() {
                    this[b] && this[b](), this[b] = null
                }.bind(this)
            })
        }, this.getItemPosition = function(a) {
            var b = this.originalItemCount();
            return this.isInSimilarToSection(a) ? b + a.closest(this.attr.recSelector).index() - 1 : a.closest(this.attr.expandedContainerSelector).length ? b + a.closest(this.attr.recSelector).index() : a.closest(this.attr.recSelector).index()
        }, this.currentlyRefreshingUser = function(a) {
            return !a ||!a.sourceEventData ||!a.sourceEventData.refreshUserId ? null : this.select("recSelector").filter("[data-user-id=" + a.sourceEventData.refreshUserId + "]")
        }, this.shouldExpandWtf = function(a) {
            return !!(a && a.sourceEventData && a.sourceEventData.get_replacement)
        }, this.getUsersDisplayed = function() {
            var a = this.select("recSelector"), b = [];
            return a.each(function(a, c) {
                var d = $(c);
                b.push({
                    id: d.attr("data-user-id"),
                    impressionId: d.attr("data-impression-id")
                })
            }), b
        }, this.reportUsersDisplayed = function(a) {
            var b = this.getUsersDisplayed();
            this.trigger("uiUsersDisplayed", {
                users: b
            }), this.trigger("uiDidGetRecommendations", a)
        }, this.verifyInitialRecommendations = function(a, b) {
            this.hasRecommendations() ? this.reportUsersDisplayed({
                initialResults: !0
            }) : this.sendGetRecommendationEvent({
                initialResults: !0
            })
        }, this.hasRecommendations = function() {
            return this.select("recSelector").length > 0
        }, this.storeSelfPromotedAccount = function(a, b) {
            b.html && (this.selfPromotedAccountHtml = b.html)
        }, this.replaceUser = function(a, b) {
            a.tooltip("hide"), a.parent().hasClass("preview-wrapper") && a.unwrap(), a.replaceWith(b)
        }, this.replaceUserAnimation = function(a, b) {
            a.tooltip("hide"), this.before("teardown", function() {
                this.replaceUser(a, b)
            });
            var c = $("<div/>", {
                "class": a.attr("class"),
                style: a.attr("style")
            }).addClass("preview-wrapper");
            a.wrap(c);
            var d = a.css("minHeight");
            a.css({
                minHeight: 0
            }).slideUp(70, function() {
                b.attr("style", a.attr("style")), a.replaceWith(b), b.delay(350).slideDown(70, function() {
                    b.css({
                        minHeight: d
                    }), b.unwrap(), setTimeout(function() {
                        b.tooltip("show"), setTimeout(function() {
                            b.tooltip("hide")
                        }, 8e3)
                    }, 500)
                })
            })
        }, this.handlePreviewPromotedAccount = function() {
            if (this.disabled)
                return;
            if (this.selfPromotedAccountHtml) {
                var a = $(this.selfPromotedAccountHtml), b = this.select("recSelector").first();
                this.attr.$accountPriorToPreview = b.clone(), this.replaceUserAnimation(b, a), a.find("a").on("click", function(a) {
                    a.preventDefault(), a.stopPropagation()
                })
            }
        }, this.maybeRestoreAccountPriorToPreview = function() {
            var a = this.attr.$accountPriorToPreview;
            if (!a)
                return;
            this.replaceUser(this.select("recSelector").first(), a), this.attr.$accountPriorToPreview = null
        }, this.possiblyRefreshRecsOnNewTweets = function(a, b) {
            (this.shouldRefreshWTFOnNewHomeTweets() || this.attr.wtfRefreshOnNewSearchTweets) && this.refreshRecommendations(a, b)
        }, this.getPossiblyDebounceRefreshRecsFunction = function() {
            var a = this.getDebounceInterval();
            return a !== null ? utils.debounce(this.possiblyRefreshRecsOnNewTweets.bind(this), a, !0) : this.possiblyRefreshRecsOnNewTweets
        }, this.after("initialize", function() {
            this.on(document, "dataDidGetUserRecommendations", this.handleRecommendationsResponse), this.on(document, "dataFailedToGetUserRecommendations", this.handleRefreshError), this.on(document, "dataFollowStateChange", this.doAfterFollowAction), this.on("click", {
                refreshRecsSelector: this.refreshRecommendations
            }), this.on(document, "dataDidGetSelfPromotedAccount", this.storeSelfPromotedAccount), this.on(document, "uiPromptbirdPreviewPromotedAccount", this.handlePreviewPromotedAccount), this.on(document, "uiPromptbirdDismissPrompt", this.maybeRestoreAccountPriorToPreview), this.on(document, "uiRefreshUserRecsOnNewTweets", this.getPossiblyDebounceRefreshRecsFunction())
        })
    }
    var utils = require("core/utils");
    require("$lib/bootstrap_tooltip.js"), module.exports = withUserRecommendations
});
define("app/ui/who_to_follow/who_to_follow_dashboard", ["module", "require", "exports", "core/i18n", "core/utils", "core/component", "app/ui/with_user_actions", "app/ui/with_item_actions", "app/ui/who_to_follow/with_import_prompt", "app/ui/who_to_follow/with_user_recommendations"], function(module, require, exports) {
    function whoToFollowDashboard() {
        this.defaultAttrs({
            dashboardSelector: ".dashboard-user-recommendations",
            recUserSelector: ".js-actionable-user",
            dismissRecSelector: ".js-action-dismiss",
            viewAllSelector: ".js-view-all-link",
            interestsSelector: ".js-interests-link",
            findFriendsSelector: ".js-find-friends-link"
        }), this.dismissRecommendation = function(a, b) {
            if (!this.currentlyRefreshing) {
                this.currentlyDismissing=!0;
                var c = $(a.target).closest(this.attr.recSelector), d = c.attr("data-user-id");
                this.trigger("uiDismissUserRecommendation", {
                    recommended_user_id: d,
                    impressionId: c.attr("data-impression-id"),
                    excluded: [d],
                    visible: this.getVisibleIds(c),
                    token: c.attr("data-feedback-token"),
                    dismissable: this.attr.wtfOptions.dismissable,
                    refreshUserId: d
                }), this.animateContentOut(c, "animationCallback")
            }
        }, this.handleDismissResponse = function(a, b) {
            b = b || {}, this.currentlyDismissing=!1;
            if (b.user_recommendations_html) {
                var c = this.currentlyRefreshingUser(b), d = $(b.user_recommendations_html), e = this.getItemPosition(c);
                this.animateContentIn(c, "animationCallback", b.user_recommendations_html, {
                    modOp: "replaceWith",
                    scribeCallback: function() {
                        var a = {
                            oldUser: this.interactionData(c, {
                                position: e
                            })
                        };
                        d.length && (a.newUser = this.interactionData(d, {
                            position: e
                        })), this.trigger("uiDidDismissUserRecommendation", a)
                    }.bind(this)
                })
            } else 
                this.handleEmptyDismissResponse()
        }, this.handleDismissError = function(a, b) {
            var c = this.currentlyRefreshingUser(b);
            c && c.remove(), this.handleEmptyDismissResponse()
        }, this.handleEmptyDismissResponse = function() {
            this.select("recSelector").length || (this.trigger("uiShowMessage", {
                message: _('You have no more recommendations today!')
            }), this.$node.remove())
        }, this.enable = function() {
            this.disabled=!1, this.refreshRecommendations({
                type: "empty-timeline"
            }), this.$node.show()
        }, this.initRecommendations = function(a, b) {
            this.disabled ? this.$node.hide() : this.verifyInitialRecommendations(a, b)
        }, this.reset = function() {
            this.currentlyRefreshing || this.currentlyDismissing ? this.select("dashboardSelector").html("") : (this.select("dashboardSelector").css("opacity", 1), this.select("recUserSelector").css("opacity", 1))
        }, this.expandWhoToFollow = function(a, b) {
            this.currentlyExpanding=!0;
            var c = utils.merge(this.attr.wtfOptions, {
                limit: 3,
                visible: this.getVisibleIds(a),
                refreshUserId: b.userId,
                get_replacement: !0
            });
            this.trigger("uiGetUserRecommendations", c)
        }, this.triggerLinkClickScribes = function(a) {
            var b = this, c = {
                interests_link: this.attr.interestsSelector,
                import_link: this.attr.findFriendsSelector,
                view_all_link: this.attr.viewAllSelector,
                refresh_link: this.attr.refreshRecsSelector
            }, d = $(a.target);
            $.each(c, function(a, c) {
                d.is(c) && b.trigger(document, "uiClickedWtfLink", {
                    element: a
                })
            })
        }, this.getNewRecommendations = function(a, b, c) {
            var d = this.attr.wtfOptions.display_location;
            d === "wtf-component"&&!this.currentlyExpanding && this.getVisibleIds(null, !0).length <= 3 ? this.expandWhoToFollow(b, c) : a(b, c)
        }, this.after("initialize", function() {
            this.disabled = this.attr.wtfOptions ? this.attr.wtfOptions.disabled : !1, this.on(document, "dataDidDismissRecommendation", this.handleDismissResponse), this.on(document, "dataFailedToDismissUserRecommendation", this.handleDismissError), this.on(document, "uiDidHideEmptyTimelineModule", this.enable), this.on(document, "uiSwiftLoaded uiPageChanged", this.initRecommendations), this.on(document, "uiBeforePageChanged", this.reset), this.on("click", {
                dismissRecSelector: this.dismissRecommendation,
                interestsSelector: this.triggerLinkClickScribes,
                viewAllSelector: this.triggerLinkClickScribes,
                findFriendsSelector: this.triggerLinkClickScribes,
                refreshRecsSelector: this.triggerLinkClickScribes
            }), this.around("cycleRecommendation", function(a, b, c) {
                this.getNewRecommendations(a, b, c)
            })
        })
    }
    var _ = require("core/i18n"), utils = require("core/utils"), defineComponent = require("core/component"), withUserActions = require("app/ui/with_user_actions"), withItemActions = require("app/ui/with_item_actions"), withImportPrompt = require("app/ui/who_to_follow/with_import_prompt"), withUserRecommendations = require("app/ui/who_to_follow/with_user_recommendations");
    module.exports = defineComponent(whoToFollowDashboard, withUserActions, withItemActions, withImportPrompt, withUserRecommendations)
});
define("app/data/who_to_follow", ["module", "require", "exports", "core/component", "core/utils", "app/utils/storage/custom", "app/data/with_data"], function(module, require, exports) {
    function whoToFollowData() {
        this.defaults = {
            maxExcludedRecsInLocalStorage: 100,
            endpoints: {
                users: {
                    url: "/i/users/recommendations",
                    method: "GET",
                    successEvent: "dataDidGetUserRecommendations",
                    errorEvent: "dataFailedToGetUserRecommendations"
                },
                dismiss: {
                    url: "/i/users/recommendations/hide",
                    method: "POST",
                    successEvent: "dataDidDismissRecommendation",
                    errorEvent: "dataFailedToDismissUserRecommendation"
                },
                promoted_self: {
                    url: "/i/users/promoted_self",
                    method: "GET",
                    successEvent: "dataDidGetSelfPromotedAccount",
                    errorEvent: "dataFailedToGetSelfPromotedAccount"
                }
            }
        }, this.refreshEndpoint = function(a) {
            return this.hitEndpoint(a, {
                "Cache-Control": "max-age=0",
                Pragma: "no-cache"
            })
        }, this.hitEndpoint = function(a, b) {
            var b = b || {}, c = this.defaults.endpoints[a];
            return function(a, d) {
                d = d || {}, d.excluded = d.excluded || [];
                var e = d.visible || [];
                delete d.visible, this.JSONRequest({
                    type: c.method,
                    url: c.url,
                    headers: b,
                    dataType: "json",
                    data: utils.merge(d, {
                        excluded: this.storage.pushAll("excluded", d.excluded).concat(e).join(",")
                    }),
                    eventData: d,
                    success: c.successEvent,
                    error: c.errorEvent
                }, c.method)
            }.bind(this)
        }, this.excludeUsers = function(a, b) {
            this.storage.pushAll("excluded", b.userIds), this.trigger("dataDidExcludeUserRecommendations", b)
        }, this.excludeFollowed = function(a, b) {
            b = b || {}, b.newState === "following" && b.userId && this.storage.push("excluded", b.userId)
        }, this.setMaxExcludedIds = function() {
            var a = this.attr.wtfRefreshDebounceBucket, b = a && (a === "0_min_debounce" || a === "1_min_debounce");
            return b ? 30 : this.attr.maxExcludedRecsInLocalStorage
        }, this.after("initialize", function() {
            var a = customStorage({
                withArray: !0,
                withMaxElements: !0,
                withUniqueElements: !0
            });
            this.storage = new a("excluded_wtf_recs"), this.storage.setMaxElements("excluded", this.setMaxExcludedIds()), this.on(document, "uiRefreshUserRecommendations", this.refreshEndpoint("users")), this.on(document, "uiGetUserRecommendations", this.hitEndpoint("users")), this.on(document, "uiDismissUserRecommendation", this.hitEndpoint("dismiss")), this.on(document, "uiDidDismissEmptyTimelineRecommendations", this.excludeUsers), this.on(document, "dataFollowStateChange", this.excludeFollowed), this.on(document, "uiGotPromptbirdDashboardProfile", this.hitEndpoint("promoted_self"))
        })
    }
    var defineComponent = require("core/component"), utils = require("core/utils"), customStorage = require("app/utils/storage/custom"), withData = require("app/data/with_data"), WhoToFollowData = defineComponent(whoToFollowData, withData);
    module.exports = WhoToFollowData
});
define("app/data/who_to_follow_scribe", ["module", "require", "exports", "core/component", "app/ui/with_interaction_data", "app/data/with_interaction_data_scribe", "core/utils"], function(module, require, exports) {
    function whoToFollowScribe() {
        this.defaultAttrs({
            userSelector: ".js-actionable-user",
            itemType: "user"
        }), this.scribeDismissRecommendation = function(a, b) {
            this.scribeInteraction("dismiss", b.oldUser), b.newUser && this.scribeInteraction({
                element: "replace",
                action: "results"
            }, b.newUser, {
                referring_event: "replace"
            })
        }, this.scribeRecommendationResults = function(a, b) {
            var c = [];
            a.emptyResponse || this.$node.find(this.attr.userSelector).map(function(a, b) {
                c.push(this.interactionData($(b), {
                    position: a
                }))
            }.bind(this));
            var d = a.emptyResponse ? "no_results": "results";
            this.scribeInteractiveResults({
                element: b,
                action: d
            }, c, a, {
                referring_event: b
            })
        }, this.scribeRecommendations = function(a, b) {
            var c = b.sourceEventData || {}, d = b.initialResults || c.initialResults;
            d ? (this.scribeRecommendationResults(b, "initial"), b.emptyResponse || this.scribeRecommendationImpression(b)) : (this.scribe({
                action: "refresh"
            }, b, {
                event_info: c.refreshType
            }), this.scribeRecommendationResults(b, "newer"))
        }, this.scribeEmptyRecommendationsResponse = function(a, b) {
            this.scribeRecommendations(a, utils.merge(b, {
                emptyResponse: !0
            }))
        }, this.scribeRecommendationImpression = function(a) {
            this.scribe("impression", a)
        }, this.scribeLinkClicks = function(a, b) {
            this.scribe({
                component: "user_recommendations",
                element: b.element,
                action: "click"
            })
        }, this.after("initialize", function() {
            this.on(document, "uiDidDismissUserRecommendation", this.scribeDismissRecommendation), this.on(document, "uiDidGetRecommendations", this.scribeRecommendations), this.on(document, "uiGotEmptyRecommendationsResponse", this.scribeEmptyRecommendationsResponse), this.on(document, "uiClickedWtfLink", this.scribeLinkClicks)
        })
    }
    var defineComponent = require("core/component"), withInteractionData = require("app/ui/with_interaction_data"), withInteractionDataScribe = require("app/data/with_interaction_data_scribe"), utils = require("core/utils");
    module.exports = defineComponent(whoToFollowScribe, withInteractionData, withInteractionDataScribe)
});
define("app/ui/who_to_follow/who_to_follow_timeline", ["module", "require", "exports", "core/i18n", "core/component", "app/ui/with_user_actions", "app/ui/with_item_actions", "app/ui/who_to_follow/with_user_recommendations", "app/ui/with_import_services"], function(module, require, exports) {
    function whoToFollowTimeline() {
        this.defaultAttrs({
            doneButtonSelector: ".empty-timeline .js-done",
            headerTextSelector: ".empty-timeline .header-text",
            targetFollowingCount: 5,
            titles: {
                0: _('Here are some people you might enjoy following.'),
                1: _('Victory! That\u2019s 1.'),
                2: _('Congratulations! That\u2019s 2.'),
                3: _('Excellent! You\u2019re making progress.'),
                4: _('Good work! You\u2019ve almost reached 5.'),
                5: _('Yee-haw! That\u2019s 5 follows. Now you\u2019re on a roll.')
            },
            launchServiceSelector: ".js-launch-service"
        }), this.dismissAllRecommendations = function(a, b) {
            var c = $(b.el);
            if (c.is(":disabled"))
                return;
            var d = this.getVisibleIds();
            this.trigger("uiDidDismissEmptyTimelineRecommendations", {
                userIds: d
            }), this.trigger("uiDidHideEmptyTimelineModule"), this.$node.remove()
        }, this.refreshDoneButtonState = function() {
            if (this.followingCount >= this.attr.targetFollowingCount) {
                var a = this.select("doneButtonSelector");
                a.attr("disabled", !1)
            }
        }, this.refreshTitle = function() {
            var a = this.attr.titles[this.followingCount.toString()];
            this.select("headerTextSelector").text(a)
        }, this.refreshTimeline = function() {
            this.trigger("uiTimelineShouldRefresh", {
                injectImmediately: !0
            })
        }, this.increaseFollowingCount = function() {
            this.followingCount++
        }, this.decreaseFollowingCount = function() {
            this.followingCount--
        }, this.initRecommendations = function() {
            this.followingCount = this.attr.wtfOptions.followingCount, this.verifyInitialRecommendations()
        }, this.after("initialize", function() {
            this.attr.wtfOptions = this.attr.emptyTimelineOptions || {}, this.on(document, "uiFollowAction", this.increaseFollowingCount), this.on(document, "uiUnfollowAction", this.decreaseFollowingCount), this.on(document, "dataFollowStateChange", this.refreshDoneButtonState), this.on(document, "dataFollowStateChange", this.refreshTitle), this.on(document, "dataFollowStateChange", this.refreshTimeline), this.on(document, "uiSwiftLoaded uiPageChanged", this.initRecommendations), this.on("click", {
                doneButtonSelector: this.dismissAllRecommendations
            })
        })
    }
    var _ = require("core/i18n"), defineComponent = require("core/component"), withUserActions = require("app/ui/with_user_actions"), withItemActions = require("app/ui/with_item_actions"), withUserRecommendations = require("app/ui/who_to_follow/with_user_recommendations"), withImportServices = require("app/ui/with_import_services");
    module.exports = defineComponent(whoToFollowTimeline, withUserActions, withItemActions, withUserRecommendations, withImportServices)
});
define("app/data/who_to_follow/wtf_import_prompt_scribe", ["module", "require", "exports", "core/component", "core/utils", "app/data/with_scribe"], function(module, require, exports) {
    function WTFImportPromptScribe() {
        this.scribeImpression = function(a, b) {
            this.scribe(utils.merge({}, b.scribeContext, {
                element: "wtf_import_prompt",
                action: "impression"
            }))
        }, this.scribeToggle = function(a, b) {
            this.scribe(utils.merge({}, b.scribeContext, {
                element: "wtf_import_prompt",
                action: b.action
            }), {
                section: "other_services"
            })
        }, this.after("initialize", function() {
            this.on("uiWTFImportPromptImpression", this.scribeImpression), this.on("uiWTFImportPromptToggle", this.scribeToggle)
        })
    }
    var defineComponent = require("core/component"), utils = require("core/utils"), withScribe = require("app/data/with_scribe");
    module.exports = defineComponent(WTFImportPromptScribe, withScribe)
});
deferred('$lib/jquery_ui.profile.js', function() {
    /*! jQuery UI 1.8.22 (c) 2012 http://jqueryui.com/about http://jquery.org/license */
    (function($, a) {
        function b(a, b) {
            var d = a.nodeName.toLowerCase();
            if ("area" === d) {
                var e = a.parentNode, f = e.name, g;
                return !a.href ||!f || e.nodeName.toLowerCase() !== "map"?!1 : (g = $("img[usemap=#" + f + "]")[0], !!g && c(g))
            }
            return (/input|select|textarea|button|object/.test(d)?!a.disabled : "a" == d ? a.href || b : b) && c(a)
        }
        function c(a) {
            return !$(a).parents().andSelf().filter(function() {
                return $.curCSS(this, "visibility") === "hidden" || $.expr.filters.hidden(this)
            }).length
        }
        $.ui = $.ui || {};
        if ($.ui.version)
            return;
        $.extend($.ui, {
            version: "1.8.22",
            keyCode: {
                ALT: 18,
                BACKSPACE: 8,
                CAPS_LOCK: 20,
                COMMA: 188,
                COMMAND: 91,
                COMMAND_LEFT: 91,
                COMMAND_RIGHT: 93,
                CONTROL: 17,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                INSERT: 45,
                LEFT: 37,
                MENU: 93,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SHIFT: 16,
                SPACE: 32,
                TAB: 9,
                UP: 38,
                WINDOWS: 91
            }
        }), $.fn.extend({
            propAttr: $.fn.prop || $.fn.attr,
            _focus: $.fn.focus,
            focus: function(a, b) {
                return typeof a == "number" ? this.each(function() {
                    var c = this;
                    setTimeout(function() {
                        $(c).focus(), b && b.call(c)
                    }, a)
                }) : this._focus.apply(this, arguments)
            },
            scrollParent: function() {
                var a;
                return $.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? a = this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test($.curCSS(this, "position", 1)) && /(auto|scroll)/.test($.curCSS(this, "overflow", 1) + $.curCSS(this, "overflow-y", 1) + $.curCSS(this, "overflow-x", 1))
                }).eq(0) : a = this.parents().filter(function() {
                    return /(auto|scroll)/.test($.curCSS(this, "overflow", 1) + $.curCSS(this, "overflow-y", 1) + $.curCSS(this, "overflow-x", 1))
                }).eq(0), /fixed/.test(this.css("position")) ||!a.length ? $(document) : a
            },
            zIndex: function(b) {
                if (b !== a)
                    return this.css("zIndex", b);
                if (this.length) {
                    var c = $(this[0]), d, e;
                    while (c.length && c[0] !== document) {
                        d = c.css("position");
                        if (d === "absolute" || d === "relative" || d === "fixed") {
                            e = parseInt(c.css("zIndex"), 10);
                            if (!isNaN(e) && e !== 0)
                                return e
                        }
                        c = c.parent()
                    }
                }
                return 0
            },
            disableSelection: function() {
                return this.bind(($.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
                    a.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            }
        }), $("<a>").outerWidth(1).jquery || $.each(["Width", "Height"], function(b, c) {
            function g(a, b, c, e) {
                return $.each(d, function() {
                    b -= parseFloat($.curCSS(a, "padding" + this, !0)) || 0, c && (b -= parseFloat($.curCSS(a, "border" + this + "Width", !0)) || 0), e && (b -= parseFloat($.curCSS(a, "margin" + this, !0)) || 0)
                }), b
            }
            var d = c === "Width" ? ["Left", "Right"]: ["Top", "Bottom"], e = c.toLowerCase(), f = {
                innerWidth: $.fn.innerWidth,
                innerHeight: $.fn.innerHeight,
                outerWidth: $.fn.outerWidth,
                outerHeight: $.fn.outerHeight
            };
            $.fn["inner" + c] = function(b) {
                return b === a ? f["inner" + c].call(this) : this.each(function() {
                    $(this).css(e, g(this, b) + "px")
                })
            }, $.fn["outer" + c] = function(a, b) {
                return typeof a != "number" ? f["outer" + c].call(this, a) : this.each(function() {
                    $(this).css(e, g(this, a, !0, b) + "px")
                })
            }
        }), $.extend($.expr[":"], {
            data: $.expr.createPseudo ? $.expr.createPseudo(function(a) {
                return function(b) {
                    return !!$.data(b, a)
                }
            }): function(a, b, c) {
                return !!$.data(a, c[3])
            },
            focusable: function(a) {
                return b(a, !isNaN($.attr(a, "tabindex")))
            },
            tabbable: function(a) {
                var c = $.attr(a, "tabindex"), d = isNaN(c);
                return (d || c >= 0) && b(a, !d)
            }
        }), $(function() {
            var a = document.body, b = a.appendChild(b = document.createElement("div"));
            b.offsetHeight, $.extend(b.style, {
                minHeight: "100px",
                height: "auto",
                padding: 0,
                borderWidth: 0
            }), $.support.minHeight = b.offsetHeight === 100, $.support.selectstart = "onselectstart"in b, a.removeChild(b).style.display = "none"
        }), $.curCSS || ($.curCSS = $.css), $.extend($.ui, {
            plugin: {
                add: function(a, b, c) {
                    var d = $.ui[a].prototype;
                    for (var e in c)
                        d.plugins[e] = d.plugins[e] || [], d.plugins[e].push([b, c[e]])
                },
                call: function(a, b, c) {
                    var d = a.plugins[b];
                    if (!d ||!a.element[0].parentNode)
                        return;
                    for (var e = 0; e < d.length; e++)
                        a.options[d[e][0]] && d[e][1].apply(a.element, c)
                }
            },
            contains: function(a, b) {
                return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16 : a !== b && a.contains(b)
            },
            hasScroll: function(a, b) {
                if ($(a).css("overflow") === "hidden")
                    return !1;
                var c = b && b === "left" ? "scrollLeft": "scrollTop", d=!1;
                return a[c] > 0?!0 : (a[c] = 1, d = a[c] > 0, a[c] = 0, d)
            },
            isOverAxis: function(a, b, c) {
                return a > b && a < b + c
            },
            isOver: function(a, b, c, d, e, f) {
                return $.ui.isOverAxis(a, c, e) && $.ui.isOverAxis(b, d, f)
            }
        })
    })(jQuery), function($, a) {
        if ($.cleanData) {
            var b = $.cleanData;
            $.cleanData = function(a) {
                for (var c = 0, d; (d = a[c]) != null; c++)
                    try {
                        $(d).triggerHandler("remove")
                } catch (e) {}
                b(a)
            }
        } else {
            var c = $.fn.remove;
            $.fn.remove = function(a, b) {
                return this.each(function() {
                    return b || (!a || $.filter(a, [this]).length) && $("*", this).add([this]).each(function() {
                        try {
                            $(this).triggerHandler("remove")
                        } catch (a) {}
                    }), c.call($(this), a, b)
                })
            }
        }
        $.widget = function(a, b, c) {
            var d = a.split(".")[0], e;
            a = a.split(".")[1], e = d + "-" + a, c || (c = b, b = $.Widget), $.expr[":"][e] = function(b) {
                return !!$.data(b, a)
            }, $[d] = $[d] || {}, $[d][a] = function(a, b) {
                arguments.length && this._createWidget(a, b)
            };
            var f = new b;
            f.options = $.extend(!0, {}, f.options), $[d][a].prototype = $.extend(!0, f, {
                namespace: d,
                widgetName: a,
                widgetEventPrefix: $[d][a].prototype.widgetEventPrefix || a,
                widgetBaseClass: e
            }, c), $.widget.bridge(a, $[d][a])
        }, $.widget.bridge = function(b, c) {
            $.fn[b] = function(d) {
                var e = typeof d == "string", f = Array.prototype.slice.call(arguments, 1), g = this;
                return d=!e && f.length ? $.extend.apply(null, [!0, d].concat(f)) : d, e && d.charAt(0) === "_" ? g : (e ? this.each(function() {
                    var c = $.data(this, b), e = c && $.isFunction(c[d]) ? c[d].apply(c, f): c;
                    if (e !== c && e !== a)
                        return g = e, !1
                }) : this.each(function() {
                    var a = $.data(this, b);
                    a ? a.option(d || {})._init() : $.data(this, b, new c(d, this))
                }), g)
            }
        }, $.Widget = function(a, b) {
            arguments.length && this._createWidget(a, b)
        }, $.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            options: {
                disabled: !1
            },
            _createWidget: function(a, b) {
                $.data(b, this.widgetName, this), this.element = $(b), this.options = $.extend(!0, {}, this.options, this._getCreateOptions(), a);
                var c = this;
                this.element.bind("remove." + this.widgetName, function() {
                    c.destroy()
                }), this._create(), this._trigger("create"), this._init()
            },
            _getCreateOptions: function() {
                return $.metadata && $.metadata.get(this.element[0])[this.widgetName]
            },
            _create: function() {},
            _init: function() {},
            destroy: function() {
                this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled " + "ui-state-disabled")
            },
            widget: function() {
                return this.element
            },
            option: function(b, c) {
                var d = b;
                if (arguments.length === 0)
                    return $.extend({}, this.options);
                if (typeof b == "string") {
                    if (c === a)
                        return this.options[b];
                    d = {}, d[b] = c
                }
                return this._setOptions(d), this
            },
            _setOptions: function(a) {
                var b = this;
                return $.each(a, function(a, c) {
                    b._setOption(a, c)
                }), this
            },
            _setOption: function(a, b) {
                return this.options[a] = b, a === "disabled" && this.widget()[b ? "addClass": "removeClass"](this.widgetBaseClass + "-disabled" + " " + "ui-state-disabled").attr("aria-disabled", b), this
            },
            enable: function() {
                return this._setOption("disabled", !1)
            },
            disable: function() {
                return this._setOption("disabled", !0)
            },
            _trigger: function(a, b, c) {
                var d, e, f = this.options[a];
                c = c || {}, b = $.Event(b), b.type = (a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a).toLowerCase(), b.target = this.element[0], e = b.originalEvent;
                if (e)
                    for (d in e)
                        d in b || (b[d] = e[d]);
                return this.element.trigger(b, c), !($.isFunction(f) && f.call(this.element[0], b, c)===!1 || b.isDefaultPrevented())
            }
        }
    }(jQuery), function($, a) {
        var b=!1;
        $(document).mouseup(function(a) {
            b=!1
        }), $.widget("ui.mouse", {
            options: {
                cancel: ":input,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var a = this;
                this.element.bind("mousedown." + this.widgetName, function(b) {
                    return a._mouseDown(b)
                }).bind("click." + this.widgetName, function(b) {
                    if (!0 === $.data(b.target, a.widgetName + ".preventClickEvent"))
                        return $.removeData(b.target, a.widgetName + ".preventClickEvent"), b.stopImmediatePropagation(), !1
                }), this.started=!1
            },
            _mouseDestroy: function() {
                this.element.unbind("." + this.widgetName), $(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(a) {
                if (b)
                    return;
                this._mouseStarted && this._mouseUp(a), this._mouseDownEvent = a;
                var c = this, d = a.which == 1, e = typeof this.options.cancel == "string" && a.target.nodeName ? $(a.target).closest(this.options.cancel).length: !1;
                if (!d || e ||!this._mouseCapture(a))
                    return !0;
                this.mouseDelayMet=!this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    c.mouseDelayMet=!0
                }, this.options.delay));
                if (this._mouseDistanceMet(a) && this._mouseDelayMet(a)) {
                    this._mouseStarted = this._mouseStart(a)!==!1;
                    if (!this._mouseStarted)
                        return a.preventDefault(), !0
                }
                return !0 === $.data(a.target, this.widgetName + ".preventClickEvent") && $.removeData(a.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a) {
                    return c._mouseMove(a)
                }, this._mouseUpDelegate = function(a) {
                    return c._mouseUp(a)
                }, $(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), a.preventDefault(), b=!0, !0
            },
            _mouseMove: function(a) {
                return !$.browser.msie || document.documentMode >= 9||!!a.button ? this._mouseStarted ? (this._mouseDrag(a), a.preventDefault()) : (this._mouseDistanceMet(a) && this._mouseDelayMet(a) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, a)!==!1, this._mouseStarted ? this._mouseDrag(a) : this._mouseUp(a)), !this._mouseStarted) : this._mouseUp(a)
            },
            _mouseUp: function(a) {
                return $(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted=!1, a.target == this._mouseDownEvent.target && $.data(a.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(a)), !1
            },
            _mouseDistanceMet: function(a) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function(a) {
                return this.mouseDelayMet
            },
            _mouseStart: function(a) {},
            _mouseDrag: function(a) {},
            _mouseStop: function(a) {},
            _mouseCapture: function(a) {
                return !0
            }
        })
    }(jQuery), function($, a) {
        $.widget("ui.draggable", $.ui.mouse, {
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1
            },
            _create: function() {
                this.options.helper == "original"&&!/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
            },
            destroy: function() {
                if (!this.element.data("draggable"))
                    return;
                return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy(), this
            },
            _mouseCapture: function(a) {
                var b = this.options;
                return this.helper || b.disabled || $(a.target).is(".ui-resizable-handle")?!1 : (this.handle = this._getHandle(a), this.handle ? (b.iframeFix && $(b.iframeFix===!0 ? "iframe" : b.iframeFix).each(function() {
                    $('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                        width: this.offsetWidth + "px",
                        height: this.offsetHeight + "px",
                        position: "absolute",
                        opacity: "0.001",
                        zIndex: 1e3
                    }).css($(this).offset()).appendTo("body")
                }), !0) : !1)
            },
            _mouseStart: function(a) {
                var b = this.options;
                return this.helper = this._createHelper(a), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), $.ui.ddmanager && ($.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, $.extend(this.offset, {
                    click: {
                        left: a.pageX - this.offset.left,
                        top: a.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.originalPosition = this.position = this._generatePosition(a), this.originalPageX = a.pageX, this.originalPageY = a.pageY, b.cursorAt && this._adjustOffsetFromHelper(b.cursorAt), b.containment && this._setContainment(), this._trigger("start", a)===!1 ? (this._clear(), !1) : (this._cacheHelperProportions(), $.ui.ddmanager&&!b.dropBehaviour && $.ui.ddmanager.prepareOffsets(this, a), this._mouseDrag(a, !0), $.ui.ddmanager && $.ui.ddmanager.dragStart(this, a), !0)
            },
            _mouseDrag: function(a, b) {
                this.position = this._generatePosition(a), this.positionAbs = this._convertPositionTo("absolute");
                if (!b) {
                    var c = this._uiHash();
                    if (this._trigger("drag", a, c)===!1)
                        return this._mouseUp({}), !1;
                    this.position = c.position
                }
                if (!this.options.axis || this.options.axis != "y")
                    this.helper[0].style.left = this.position.left + "px";
                if (!this.options.axis || this.options.axis != "x")
                    this.helper[0].style.top = this.position.top + "px";
                return $.ui.ddmanager && $.ui.ddmanager.drag(this, a), !1
            },
            _mouseStop: function(a) {
                var b=!1;
                $.ui.ddmanager&&!this.options.dropBehaviour && (b = $.ui.ddmanager.drop(this, a)), this.dropped && (b = this.dropped, this.dropped=!1);
                var c = this.element[0], d=!1;
                while (c && (c = c.parentNode))
                    c == document && (d=!0);
                if (!d && this.options.helper === "original")
                    return !1;
                if (this.options.revert == "invalid"&&!b || this.options.revert == "valid" && b || this.options.revert===!0 || $.isFunction(this.options.revert) && this.options.revert.call(this.element, b)) {
                    var e = this;
                    $(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                        e._trigger("stop", a)!==!1 && e._clear()
                    })
                } else 
                    this._trigger("stop", a)!==!1 && this._clear();
                return !1
            },
            _mouseUp: function(a) {
                return this.options.iframeFix===!0 && $("div.ui-draggable-iframeFix").each(function() {
                    this.parentNode.removeChild(this)
                }), $.ui.ddmanager && $.ui.ddmanager.dragStop(this, a), $.ui.mouse.prototype._mouseUp.call(this, a)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
            },
            _getHandle: function(a) {
                var b=!this.options.handle ||!$(this.options.handle, this.element).length?!0 : !1;
                return $(this.options.handle, this.element).find("*").andSelf().each(function() {
                    this == a.target && (b=!0)
                }), b
            },
            _createHelper: function(a) {
                var b = this.options, c = $.isFunction(b.helper) ? $(b.helper.apply(this.element[0], [a])): b.helper == "clone" ? this.element.clone().removeAttr("id"): this.element;
                return c.parents("body").length || c.appendTo(b.appendTo == "parent" ? this.element[0].parentNode : b.appendTo), c[0] != this.element[0]&&!/(fixed|absolute)/.test(c.css("position")) && c.css("position", "absolute"), c
            },
            _adjustOffsetFromHelper: function(a) {
                typeof a == "string" && (a = a.split(" ")), $.isArray(a) && (a = {
                    left: + a[0],
                    top: + a[1] || 0
                }), "left"in a && (this.offset.click.left = a.left + this.margins.left), "right"in a && (this.offset.click.left = this.helperProportions.width - a.right + this.margins.left), "top"in a && (this.offset.click.top = a.top + this.margins.top), "bottom"in a && (this.offset.click.top = this.helperProportions.height - a.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var a = this.offsetParent.offset();
                this.cssPosition == "absolute" && this.scrollParent[0] != document && $.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (a.left += this.scrollParent.scrollLeft(), a.top += this.scrollParent.scrollTop());
                if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && $.browser.msie)
                    a = {
                        top: 0,
                        left: 0
                    };
                return {
                    top: a.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: a.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if (this.cssPosition == "relative") {
                    var a = this.element.position();
                    return {
                        top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var a = this.options;
                a.containment == "parent" && (a.containment = this.helper[0].parentNode);
                if (a.containment == "document" || a.containment == "window")
                    this.containment = [a.containment == "document" ? 0: $(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a.containment == "document" ? 0: $(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (a.containment == "document" ? 0 : $(window).scrollLeft()) + $(a.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (a.containment == "document" ? 0 : $(window).scrollTop()) + ($(a.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                if (!/^(document|window|parent)$/.test(a.containment) && a.containment.constructor != Array) {
                    var b = $(a.containment), c = b[0];
                    if (!c)
                        return;
                    var d = b.offset(), e = $(c).css("overflow") != "hidden";
                    this.containment = [(parseInt($(c).css("borderLeftWidth"), 10) || 0) + (parseInt($(c).css("paddingLeft"), 10) || 0), (parseInt($(c).css("borderTopWidth"), 10) || 0) + (parseInt($(c).css("paddingTop"), 10) || 0), (e ? Math.max(c.scrollWidth, c.offsetWidth) : c.offsetWidth) - (parseInt($(c).css("borderLeftWidth"), 10) || 0) - (parseInt($(c).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(c.scrollHeight, c.offsetHeight) : c.offsetHeight) - (parseInt($(c).css("borderTopWidth"), 10) || 0) - (parseInt($(c).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = b
                } else 
                    a.containment.constructor == Array && (this.containment = a.containment)
            },
            _convertPositionTo: function(a, b) {
                b || (b = this.position);
                var c = a == "absolute" ? 1: - 1, d = this.options, e = this.cssPosition != "absolute" || this.scrollParent[0] != document&&!!$.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent, f = /(html|body)/i.test(e[0].tagName);
                return {
                    top: b.top + this.offset.relative.top * c + this.offset.parent.top * c - ($.browser.safari && $.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed"?-this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * c),
                    left: b.left + this.offset.relative.left * c + this.offset.parent.left * c - ($.browser.safari && $.browser.version < 526 && this.cssPosition == "fixed" ? 0: (this.cssPosition == "fixed"?-this.scrollParent.scrollLeft(): f ? 0: e.scrollLeft()) * c)
                }
            },
            _generatePosition: function(a) {
                var b = this.options, c = this.cssPosition != "absolute" || this.scrollParent[0] != document&&!!$.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent, d = /(html|body)/i.test(c[0].tagName), e = a.pageX, f = a.pageY;
                if (this.originalPosition) {
                    var g;
                    if (this.containment) {
                        if (this.relative_container) {
                            var h = this.relative_container.offset();
                            g = [this.containment[0] + h.left, this.containment[1] + h.top, this.containment[2] + h.left, this.containment[3] + h.top]
                        } else 
                            g = this.containment;
                        a.pageX - this.offset.click.left < g[0] && (e = g[0] + this.offset.click.left), a.pageY - this.offset.click.top < g[1] && (f = g[1] + this.offset.click.top), a.pageX - this.offset.click.left > g[2] && (e = g[2] + this.offset.click.left), a.pageY - this.offset.click.top > g[3] && (f = g[3] + this.offset.click.top)
                    }
                    if (b.grid) {
                        var i = b.grid[1] ? this.originalPageY + Math.round((f - this.originalPageY) / b.grid[1]) * b.grid[1]: this.originalPageY;
                        f = g ? i - this.offset.click.top < g[1] || i - this.offset.click.top > g[3] ? i - this.offset.click.top < g[1] ? i + b.grid[1] : i - b.grid[1] : i : i;
                        var j = b.grid[0] ? this.originalPageX + Math.round((e - this.originalPageX) / b.grid[0]) * b.grid[0]: this.originalPageX;
                        e = g ? j - this.offset.click.left < g[0] || j - this.offset.click.left > g[2] ? j - this.offset.click.left < g[0] ? j + b.grid[0] : j - b.grid[0] : j : j
                    }
                }
                return {
                    top: f - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ($.browser.safari && $.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed"?-this.scrollParent.scrollTop() : d ? 0 : c.scrollTop()),
                    left: e - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ($.browser.safari && $.browser.version < 526 && this.cssPosition == "fixed" ? 0: this.cssPosition == "fixed"?-this.scrollParent.scrollLeft(): d ? 0: c.scrollLeft())
                }
            },
            _clear: function() {
                this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0]&&!this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval=!1
            },
            _trigger: function(a, b, c) {
                return c = c || this._uiHash(), $.ui.plugin.call(this, a, [b, c]), a == "drag" && (this.positionAbs = this._convertPositionTo("absolute")), $.Widget.prototype._trigger.call(this, a, b, c)
            },
            plugins: {},
            _uiHash: function(a) {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }), $.extend($.ui.draggable, {
            version: "1.8.22"
        }), $.ui.plugin.add("draggable", "connectToSortable", {
            start: function(a, b) {
                var c = $(this).data("draggable"), d = c.options, e = $.extend({}, b, {
                    item: c.element
                });
                c.sortables = [], $(d.connectToSortable).each(function() {
                    var b = $.data(this, "sortable");
                    b&&!b.options.disabled && (c.sortables.push({
                        instance: b,
                        shouldRevert: b.options.revert
                    }), b.refreshPositions(), b._trigger("activate", a, e))
                })
            },
            stop: function(a, b) {
                var c = $(this).data("draggable"), d = $.extend({}, b, {
                    item: c.element
                });
                $.each(c.sortables, function() {
                    this.instance.isOver ? (this.instance.isOver = 0, c.cancelHelperRemoval=!0, this.instance.cancelHelperRemoval=!1, this.shouldRevert && (this.instance.options.revert=!0), this.instance._mouseStop(a), this.instance.options.helper = this.instance.options._helper, c.options.helper == "original" && this.instance.currentItem.css({
                        top: "auto",
                        left: "auto"
                    })) : (this.instance.cancelHelperRemoval=!1, this.instance._trigger("deactivate", a, d))
                })
            },
            drag: function(a, b) {
                var c = $(this).data("draggable"), d = this, e = function(a) {
                    var b = this.offset.click.top, c = this.offset.click.left, d = this.positionAbs.top, e = this.positionAbs.left, f = a.height, g = a.width, h = a.top, i = a.left;
                    return $.ui.isOver(d + b, e + c, h, i, f, g)
                };
                $.each(c.sortables, function(e) {
                    this.instance.positionAbs = c.positionAbs, this.instance.helperProportions = c.helperProportions, this.instance.offset.click = c.offset.click, this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = $(d).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                        return b.helper[0]
                    }, a.target = this.instance.currentItem[0], this.instance._mouseCapture(a, !0), this.instance._mouseStart(a, !0, !0), this.instance.offset.click.top = c.offset.click.top, this.instance.offset.click.left = c.offset.click.left, this.instance.offset.parent.left -= c.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= c.offset.parent.top - this.instance.offset.parent.top, c._trigger("toSortable", a), c.dropped = this.instance.element, c.currentItem = c.element, this.instance.fromOutside = c), this.instance.currentItem && this.instance._mouseDrag(a)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval=!0, this.instance.options.revert=!1, this.instance._trigger("out", a, this.instance._uiHash(this.instance)), this.instance._mouseStop(a, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), c._trigger("fromSortable", a), c.dropped=!1)
                })
            }
        }), $.ui.plugin.add("draggable", "cursor", {
            start: function(a, b) {
                var c = $("body"), d = $(this).data("draggable").options;
                c.css("cursor") && (d._cursor = c.css("cursor")), c.css("cursor", d.cursor)
            },
            stop: function(a, b) {
                var c = $(this).data("draggable").options;
                c._cursor && $("body").css("cursor", c._cursor)
            }
        }), $.ui.plugin.add("draggable", "opacity", {
            start: function(a, b) {
                var c = $(b.helper), d = $(this).data("draggable").options;
                c.css("opacity") && (d._opacity = c.css("opacity")), c.css("opacity", d.opacity)
            },
            stop: function(a, b) {
                var c = $(this).data("draggable").options;
                c._opacity && $(b.helper).css("opacity", c._opacity)
            }
        }), $.ui.plugin.add("draggable", "scroll", {
            start: function(a, b) {
                var c = $(this).data("draggable");
                c.scrollParent[0] != document && c.scrollParent[0].tagName != "HTML" && (c.overflowOffset = c.scrollParent.offset())
            },
            drag: function(a, b) {
                var c = $(this).data("draggable"), d = c.options, e=!1;
                if (c.scrollParent[0] != document && c.scrollParent[0].tagName != "HTML") {
                    if (!d.axis || d.axis != "x")
                        c.overflowOffset.top + c.scrollParent[0].offsetHeight - a.pageY < d.scrollSensitivity ? c.scrollParent[0].scrollTop = e = c.scrollParent[0].scrollTop + d.scrollSpeed : a.pageY - c.overflowOffset.top < d.scrollSensitivity && (c.scrollParent[0].scrollTop = e = c.scrollParent[0].scrollTop - d.scrollSpeed);
                    if (!d.axis || d.axis != "y")
                        c.overflowOffset.left + c.scrollParent[0].offsetWidth - a.pageX < d.scrollSensitivity ? c.scrollParent[0].scrollLeft = e = c.scrollParent[0].scrollLeft + d.scrollSpeed : a.pageX - c.overflowOffset.left < d.scrollSensitivity && (c.scrollParent[0].scrollLeft = e = c.scrollParent[0].scrollLeft - d.scrollSpeed)
                } else {
                    if (!d.axis || d.axis != "x")
                        a.pageY - $(document).scrollTop() < d.scrollSensitivity ? e = $(document).scrollTop($(document).scrollTop() - d.scrollSpeed) : $(window).height() - (a.pageY - $(document).scrollTop()) < d.scrollSensitivity && (e = $(document).scrollTop($(document).scrollTop() + d.scrollSpeed));
                    if (!d.axis || d.axis != "y")
                        a.pageX - $(document).scrollLeft() < d.scrollSensitivity ? e = $(document).scrollLeft($(document).scrollLeft() - d.scrollSpeed) : $(window).width() - (a.pageX - $(document).scrollLeft()) < d.scrollSensitivity && (e = $(document).scrollLeft($(document).scrollLeft() + d.scrollSpeed))
                }
                e!==!1 && $.ui.ddmanager&&!d.dropBehaviour && $.ui.ddmanager.prepareOffsets(c, a)
            }
        }), $.ui.plugin.add("draggable", "snap", {
            start: function(a, b) {
                var c = $(this).data("draggable"), d = c.options;
                c.snapElements = [], $(d.snap.constructor != String ? d.snap.items || ":data(draggable)" : d.snap).each(function() {
                    var a = $(this), b = a.offset();
                    this != c.element[0] && c.snapElements.push({
                        item: this,
                        width: a.outerWidth(),
                        height: a.outerHeight(),
                        top: b.top,
                        left: b.left
                    })
                })
            },
            drag: function(a, b) {
                var c = $(this).data("draggable"), d = c.options, e = d.snapTolerance, f = b.offset.left, g = f + c.helperProportions.width, h = b.offset.top, i = h + c.helperProportions.height;
                for (var j = c.snapElements.length - 1; j >= 0; j--) {
                    var k = c.snapElements[j].left, l = k + c.snapElements[j].width, m = c.snapElements[j].top, n = m + c.snapElements[j].height;
                    if (!(k - e < f && f < l + e && m - e < h && h < n + e || k - e < f && f < l + e && m - e < i && i < n + e || k - e < g && g < l + e && m - e < h && h < n + e || k - e < g && g < l + e && m - e < i && i < n + e)) {
                        c.snapElements[j].snapping && c.options.snap.release && c.options.snap.release.call(c.element, a, $.extend(c._uiHash(), {
                            snapItem: c.snapElements[j].item
                        })), c.snapElements[j].snapping=!1;
                        continue
                    }
                    if (d.snapMode != "inner") {
                        var o = Math.abs(m - i) <= e, p = Math.abs(n - h) <= e, q = Math.abs(k - g) <= e, r = Math.abs(l - f) <= e;
                        o && (b.position.top = c._convertPositionTo("relative", {
                            top: m - c.helperProportions.height,
                            left: 0
                        }).top - c.margins.top), p && (b.position.top = c._convertPositionTo("relative", {
                            top: n,
                            left: 0
                        }).top - c.margins.top), q && (b.position.left = c._convertPositionTo("relative", {
                            top: 0,
                            left: k - c.helperProportions.width
                        }).left - c.margins.left), r && (b.position.left = c._convertPositionTo("relative", {
                            top: 0,
                            left: l
                        }).left - c.margins.left)
                    }
                    var s = o || p || q || r;
                    if (d.snapMode != "outer") {
                        var o = Math.abs(m - h) <= e, p = Math.abs(n - i) <= e, q = Math.abs(k - f) <= e, r = Math.abs(l - g) <= e;
                        o && (b.position.top = c._convertPositionTo("relative", {
                            top: m,
                            left: 0
                        }).top - c.margins.top), p && (b.position.top = c._convertPositionTo("relative", {
                            top: n - c.helperProportions.height,
                            left: 0
                        }).top - c.margins.top), q && (b.position.left = c._convertPositionTo("relative", {
                            top: 0,
                            left: k
                        }).left - c.margins.left), r && (b.position.left = c._convertPositionTo("relative", {
                            top: 0,
                            left: l - c.helperProportions.width
                        }).left - c.margins.left)
                    }
                    !c.snapElements[j].snapping && (o || p || q || r || s) && c.options.snap.snap && c.options.snap.snap.call(c.element, a, $.extend(c._uiHash(), {
                        snapItem: c.snapElements[j].item
                    })), c.snapElements[j].snapping = o || p || q || r || s
                }
            }
        }), $.ui.plugin.add("draggable", "stack", {
            start: function(a, b) {
                var c = $(this).data("draggable").options, d = $.makeArray($(c.stack)).sort(function(a, b) {
                    return (parseInt($(a).css("zIndex"), 10) || 0) - (parseInt($(b).css("zIndex"), 10) || 0)
                });
                if (!d.length)
                    return;
                var e = parseInt(d[0].style.zIndex) || 0;
                $(d).each(function(a) {
                    this.style.zIndex = e + a
                }), this[0].style.zIndex = e + d.length
            }
        }), $.ui.plugin.add("draggable", "zIndex", {
            start: function(a, b) {
                var c = $(b.helper), d = $(this).data("draggable").options;
                c.css("zIndex") && (d._zIndex = c.css("zIndex")), c.css("zIndex", d.zIndex)
            },
            stop: function(a, b) {
                var c = $(this).data("draggable").options;
                c._zIndex && $(b.helper).css("zIndex", c._zIndex)
            }
        })
    }(jQuery), function($, a) {
        var b = 5;
        $.widget("ui.slider", $.ui.mouse, {
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null
            },
            _create: function() {
                var a = this, c = this.options, d = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), e = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", f = c.values && c.values.length || 1, g = [];
                this._keySliding=!1, this._mouseSliding=!1, this._animateOff=!0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all" + (c.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = $([]), c.range && (c.range===!0 && (c.values || (c.values = [this._valueMin(), this._valueMin()]), c.values.length && c.values.length !== 2 && (c.values = [c.values[0], c.values[0]])), this.range = $("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (c.range === "min" || c.range === "max" ? " ui-slider-range-" + c.range : "")));
                for (var h = d.length; h < f; h += 1)
                    g.push(e);
                this.handles = d.add($(g.join("")).appendTo(a.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function(a) {
                    a.preventDefault()
                }).hover(function() {
                    c.disabled || $(this).addClass("ui-state-hover")
                }, function() {
                    $(this).removeClass("ui-state-hover")
                }).focus(function() {
                    c.disabled ? $(this).blur() : ($(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), $(this).addClass("ui-state-focus"))
                }).blur(function() {
                    $(this).removeClass("ui-state-focus")
                }), this.handles.each(function(a) {
                    $(this).data("index.ui-slider-handle", a)
                }), this.handles.keydown(function(c) {
                    var d = $(this).data("index.ui-slider-handle"), e, f, g, h;
                    if (a.options.disabled)
                        return;
                    switch (c.keyCode) {
                    case $.ui.keyCode.HOME:
                    case $.ui.keyCode.END:
                    case $.ui.keyCode.PAGE_UP:
                    case $.ui.keyCode.PAGE_DOWN:
                    case $.ui.keyCode.UP:
                    case $.ui.keyCode.RIGHT:
                    case $.ui.keyCode.DOWN:
                    case $.ui.keyCode.LEFT:
                        c.preventDefault();
                        if (!a._keySliding) {
                            a._keySliding=!0, $(this).addClass("ui-state-active"), e = a._start(c, d);
                            if (e===!1)
                                return 
                        }
                    }
                    h = a.options.step, a.options.values && a.options.values.length ? f = g = a.values(d) : f = g = a.value();
                    switch (c.keyCode) {
                    case $.ui.keyCode.HOME:
                        g = a._valueMin();
                        break;
                    case $.ui.keyCode.END:
                        g = a._valueMax();
                        break;
                    case $.ui.keyCode.PAGE_UP:
                        g = a._trimAlignValue(f + (a._valueMax() - a._valueMin()) / b);
                        break;
                    case $.ui.keyCode.PAGE_DOWN:
                        g = a._trimAlignValue(f - (a._valueMax() - a._valueMin()) / b);
                        break;
                    case $.ui.keyCode.UP:
                    case $.ui.keyCode.RIGHT:
                        if (f === a._valueMax())
                            return;
                        g = a._trimAlignValue(f + h);
                        break;
                    case $.ui.keyCode.DOWN:
                    case $.ui.keyCode.LEFT:
                        if (f === a._valueMin())
                            return;
                        g = a._trimAlignValue(f - h)
                    }
                    a._slide(c, d, g)
                }).keyup(function(b) {
                    var c = $(this).data("index.ui-slider-handle");
                    a._keySliding && (a._keySliding=!1, a._stop(b, c), a._change(b, c), $(this).removeClass("ui-state-active"))
                }), this._refreshValue(), this._animateOff=!1
            },
            destroy: function() {
                return this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"), this._mouseDestroy(), this
            },
            _mouseCapture: function(a) {
                var b = this.options, c, d, e, f, g, h, i, j, k;
                return b.disabled?!1 : (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), c = {
                    x: a.pageX,
                    y: a.pageY
                }, d = this._normValueFromMouse(c), e = this._valueMax() - this._valueMin() + 1, g = this, this.handles.each(function(a) {
                    var b = Math.abs(d - g.values(a));
                    e > b && (e = b, f = $(this), h = a)
                }), b.range===!0 && this.values(1) === b.min && (h += 1, f = $(this.handles[h])), i = this._start(a, h), i===!1?!1 : (this._mouseSliding=!0, g._handleIndex = h, f.addClass("ui-state-active").focus(), j = f.offset(), k=!$(a.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = k ? {
                    left: 0,
                    top: 0
                } : {
                    left: a.pageX - j.left - f.width() / 2,
                    top: a.pageY - j.top - f.height() / 2 - (parseInt(f.css("borderTopWidth"), 10) || 0) - (parseInt(f.css("borderBottomWidth"), 10) || 0) + (parseInt(f.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(a, h, d), this._animateOff=!0, !0))
            },
            _mouseStart: function(a) {
                return !0
            },
            _mouseDrag: function(a) {
                var b = {
                    x: a.pageX,
                    y: a.pageY
                }, c = this._normValueFromMouse(b);
                return this._slide(a, this._handleIndex, c), !1
            },
            _mouseStop: function(a) {
                return this.handles.removeClass("ui-state-active"), this._mouseSliding=!1, this._stop(a, this._handleIndex), this._change(a, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff=!1, !1
            },
            _detectOrientation: function() {
                this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(a) {
                var b, c, d, e, f;
                return this.orientation === "horizontal" ? (b = this.elementSize.width, c = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (b = this.elementSize.height, c = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), d = c / b, d > 1 && (d = 1), d < 0 && (d = 0), this.orientation === "vertical" && (d = 1 - d), e = this._valueMax() - this._valueMin(), f = this._valueMin() + d * e, this._trimAlignValue(f)
            },
            _start: function(a, b) {
                var c = {
                    handle: this.handles[b],
                    value: this.value()
                };
                return this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("start", a, c)
            },
            _slide: function(a, b, c) {
                var d, e, f;
                this.options.values && this.options.values.length ? (d = this.values(b ? 0 : 1), this.options.values.length === 2 && this.options.range===!0 && (b === 0 && c > d || b === 1 && c < d) && (c = d), c !== this.values(b) && (e = this.values(), e[b] = c, f = this._trigger("slide", a, {
                    handle: this.handles[b],
                    value: c,
                    values: e
                }), d = this.values(b ? 0 : 1), f!==!1 && this.values(b, c, !0))) : c !== this.value() && (f = this._trigger("slide", a, {
                    handle: this.handles[b],
                    value: c
                }), f!==!1 && this.value(c))
            },
            _stop: function(a, b) {
                var c = {
                    handle: this.handles[b],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("stop", a, c)
            },
            _change: function(a, b) {
                if (!this._keySliding&&!this._mouseSliding) {
                    var c = {
                        handle: this.handles[b],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("change", a, c)
                }
            },
            value: function(a) {
                if (arguments.length) {
                    this.options.value = this._trimAlignValue(a), this._refreshValue(), this._change(null, 0);
                    return 
                }
                return this._value()
            },
            values: function(a, b) {
                var c, d, e;
                if (arguments.length > 1) {
                    this.options.values[a] = this._trimAlignValue(b), this._refreshValue(), this._change(null, a);
                    return 
                }
                if (!arguments.length)
                    return this._values();
                if (!$.isArray(arguments[0]))
                    return this.options.values && this.options.values.length ? this._values(a) : this.value();
                c = this.options.values, d = arguments[0];
                for (e = 0; e < c.length; e += 1)
                    c[e] = this._trimAlignValue(d[e]), this._change(null, e);
                this._refreshValue()
            },
            _setOption: function(a, b) {
                var c, d = 0;
                $.isArray(this.options.values) && (d = this.options.values.length), $.Widget.prototype._setOption.apply(this, arguments);
                switch (a) {
                case"disabled":
                    b ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.propAttr("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.propAttr("disabled", !1), this.element.removeClass("ui-disabled"));
                    break;
                case"orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case"value":
                    this._animateOff=!0, this._refreshValue(), this._change(null, 0), this._animateOff=!1;
                    break;
                case"values":
                    this._animateOff=!0, this._refreshValue();
                    for (c = 0; c < d; c += 1)
                        this._change(null, c);
                    this._animateOff=!1
                }
            },
            _value: function() {
                var a = this.options.value;
                return a = this._trimAlignValue(a), a
            },
            _values: function(a) {
                var b, c, d;
                if (arguments.length)
                    return b = this.options.values[a], b = this._trimAlignValue(b), b;
                c = this.options.values.slice();
                for (d = 0; d < c.length; d += 1)
                    c[d] = this._trimAlignValue(c[d]);
                return c
            },
            _trimAlignValue: function(a) {
                if (a <= this._valueMin())
                    return this._valueMin();
                if (a >= this._valueMax())
                    return this._valueMax();
                var b = this.options.step > 0 ? this.options.step: 1, c = (a - this._valueMin())%b, d = a - c;
                return Math.abs(c) * 2 >= b && (d += c > 0 ? b : - b), parseFloat(d.toFixed(5))
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.options.max
            },
            _refreshValue: function() {
                var a = this.options.range, b = this.options, c = this, d = this._animateOff?!1 : b.animate, e, f = {}, g, h, i, j;
                this.options.values && this.options.values.length ? this.handles.each(function(a, h) {
                    e = (c.values(a) - c._valueMin()) / (c._valueMax() - c._valueMin()) * 100, f[c.orientation === "horizontal" ? "left": "bottom"] = e + "%", $(this).stop(1, 1)[d ? "animate": "css"](f, b.animate), c.options.range===!0 && (c.orientation === "horizontal" ? (a === 0 && c.range.stop(1, 1)[d ? "animate": "css"]({
                        left: e + "%"
                    }, b.animate), a === 1 && c.range[d ? "animate": "css"]({
                        width: e - g + "%"
                    }, {
                        queue: !1,
                        duration: b.animate
                    })) : (a === 0 && c.range.stop(1, 1)[d ? "animate": "css"]({
                        bottom: e + "%"
                    }, b.animate), a === 1 && c.range[d ? "animate": "css"]({
                        height: e - g + "%"
                    }, {
                        queue: !1,
                        duration: b.animate
                    }))), g = e
                }) : (h = this.value(), i = this._valueMin(), j = this._valueMax(), e = j !== i ? (h - i) / (j - i) * 100 : 0, f[c.orientation === "horizontal" ? "left": "bottom"] = e + "%", this.handle.stop(1, 1)[d ? "animate": "css"](f, b.animate), a === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[d ? "animate": "css"]({
                    width: e + "%"
                }, b.animate), a === "max" && this.orientation === "horizontal" && this.range[d ? "animate": "css"]({
                    width: 100 - e + "%"
                }, {
                    queue: !1,
                    duration: b.animate
                }), a === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[d ? "animate": "css"]({
                    height: e + "%"
                }, b.animate), a === "max" && this.orientation === "vertical" && this.range[d ? "animate": "css"]({
                    height: 100 - e + "%"
                }, {
                    queue: !1,
                    duration: b.animate
                }))
            }
        }), $.extend($.ui.slider, {
            version: "1.8.22"
        })
    }(jQuery)
});
deferred('$lib/jquery_webcam.js', function() {
    /*! webcam plugin v1.0 (c) 2010 Robert Eisele (robert@xarg.org) http://www.xarg.org/project/jquery-webcam-plugin/ */
    (function($) {
        var a = {
            extern: null,
            append: !0,
            width: 320,
            height: 240,
            mode: "callback",
            swffile: "jscam.swf",
            quality: 85,
            debug: function() {},
            onCapture: function() {},
            onTick: function() {},
            onSave: function() {},
            onCameraStart: function() {},
            onCameraStop: function() {},
            onLoad: function() {},
            onDetect: function() {}
        };
        window.webcam = a, $.fn.webcam = function(b) {
            if (typeof b == "object")
                for (var c in a)
                    b[c] !== undefined && (a[c] = b[c]);
            var d = '<object id="XwebcamXobjectX" type="application/x-shockwave-flash" data="' + a.swffile + '" width="' + a.width + '" height="' + a.height + '"><param name="movie" value="' + a.swffile + '" /><param name="FlashVars" value="mode=' + a.mode + "&amp;quality=" + a.quality + '" /><param name="allowScriptAccess" value="always" /></object>';
            null !== a.extern ? $(a.extern)[a.append ? "append": "html"](d) : this[a.append ? "append": "html"](d), (_register = function(b) {
                var c = document.getElementById("XwebcamXobjectX");
                c.capture !== undefined ? (a.capture = function(a) {
                    try {
                        return c.capture(a)
                    } catch (b) {}
                }, a.save = function(a) {
                    try {
                        return c.save(a)
                    } catch (b) {}
                }, a.onLoad()) : 0 == b ? a.debug("error", "Flash movie not yet registered!") : window.setTimeout(_register, 1e3 * (4 - b), b - 1)
            })(3)
        }
    })(jQuery)
});
define("app/ui/settings/with_cropper", ["module", "require", "exports", "$lib/jquery_ui.profile.js", "$lib/jquery_webcam.js", "app/data/user_info"], function(module, require, exports) {
    function odd(a) {
        return a%2 != 0
    }
    function Cropper() {
        this.defaultAttrs({
            maxImageSize: 2048e3
        }), this.dataFromBase64URL = function(a) {
            return a.slice(a.indexOf(",") + 1)
        }, this.determineCrop = function() {
            var a = this.$cropImage.offset(), b = this.$cropImage.width(), c = this.$cropImage.height(), d = this.$cropMask.offset(), e = this.$cropMask.width(), f = this.$cropMask.height(), g = this.originalWidth / b, h = this.attr.maskPadding, i = d.top - a.top + h, j = d.left - a.left + h, k = d.left + h > a.left ? d.left + h: a.left, l = d.top + h > a.top ? d.top + h: a.top, m = d.left + e - h < a.left + b ? d.left + e - h: a.left + b, n = d.top + f - h < a.top + c ? d.top + f - h: a.top + c, o = Math.round(g * (j >= 0 ? j : 0)), p = Math.round(g * (i >= 0 ? i : 0)), q = this.originalWidth - o, r = this.originalHeight - p;
            return {
                maskWidth: e - 2 * h,
                maskHeight: f - 2 * h,
                imageLeft: o,
                imageTop: p,
                imageWidth: Math.min(Math.round(g * (m - k)), q),
                imageHeight: Math.min(Math.round(g * (n - l)), r),
                maskY: i < 0?-i: 0,
                maskX: j < 0?-j: 0
            }
        }, this.determineImageType = function(a) {
            return a.substr(a.indexOf(","), 4).indexOf(",/9j") == 0 ? "image/jpeg" : "image/png"
        }, this.compressionImageQuality = function() {
            var a;
            return userInfo.getDecider("hqImageUploads") ? a = HIGH_QUALITY_COMPRESSION : userInfo.getDecider("mqImageUploads") ? a = MEDIUM_QUALITY_COMPRESSION : a = LOW_QUALITY_COMPRESSION, a
        }, this.canvasToDataURL = function(a, b) {
            return b == "image/jpeg" ? a.toDataURL("image/jpeg", this.compressionImageQuality()) : a.toDataURL("image/png")
        }, this.prepareCroppedImage = function() {
            this.$croppedImage = $("<img>"), this.$croppedImage.attr("src", this.$cropImage.attr("src")), this.on(this.$croppedImage, "load", this.croppedImageReady)
        }, this.croppedImageReady = function() {
            this.trigger("uiCroppedImageReady")
        }, this.computeTargetRect = function(a) {
            var b = Math.min(Math.max(a.maskWidth, a.imageWidth), this.attr.maximumWidth), c = Math.min(Math.max(a.maskHeight, a.imageHeight), this.attr.maximumHeight);
            return {
                width: b,
                height: c,
                x: Math.round(a.maskX * (b / a.maskWidth)),
                y: Math.round(a.maskY * (c / a.maskHeight))
            }
        }, this.clientsideCrop = function(a) {
            var b = this.determineImageType(this.$cropImage.attr("src")), c;
            userInfo.getDecider("largeHeaderImageUpload") ? c = this.clientsideCropLarge(a, b) : c = this.clientsideCropStandard(a);
            var d = c.getContext("2d"), e = this.canvasToDataURL(c, b);
            return {
                fileData: this.dataFromBase64URL(e),
                offsetTop: 0,
                offsetLeft: 0,
                width: d.canvas.width,
                height: d.canvas.height
            }
        }, this.clientsideCropStandard = function(a) {
            var b = this.select("drawSurfaceSelector"), c = b[0].getContext("2d"), d = this.computeTargetRect(a);
            return this.$croppedImage.height(this.originalHeight).width(this.originalWidth), c.canvas.width = d.width, c.canvas.height = d.height, c.fillStyle = "white", c.fillRect(0, 0, d.width, d.height), c.drawImage(this.$croppedImage[0], a.imageLeft, a.imageTop, a.imageWidth, a.imageHeight, d.x, d.y, d.width, d.height), b[0]
        }, this.clientsideCropLarge = function(a, b) {
            var c = a.imageHeight, d = a.imageWidth, e = a.imageTop, f = a.imageLeft, g = this.createCanvas(d, c), h = g.getContext("2d");
            h.imageSmoothingEnabled=!1, h.drawImage(this.$croppedImage[0], f, e, d, c, 0, 0, d, c);
            var i = c, j = d, k = this.canvasToData(g, b);
            while (k == null || k.length > this.attr.maxImageSize) {
                var l = Math.ceil(j * .5), m = Math.ceil(i * .5), n = this.createCanvas(l, m), o = n.getContext("2d");
                o.imageSmoothingEnabled=!0, o.drawImage(g, 0, 0, j, i, 0, 0, l, m), k = this.canvasToData(n, b), g = n, j = l, i = m
            }
            return g
        }, this.createCanvas = function(a, b) {
            var c = document.createElement("canvas");
            return c.width = a, c.height = b, c
        }, this.canvasToData = function(a, b) {
            return a.width > MAX_SCALE_WIDTH || a.height > MAX_SCALE_HEIGHT ? null : this.canvasToDataURL(a, b)
        }, this.cropDimensions = function() {
            var a = this.$cropMask.offset();
            return {
                top: a.top,
                left: a.left,
                maskWidth: this.$cropMask.width(),
                maskHeight: this.$cropMask.height(),
                cropWidth: this.$cropMask.width() - 2 * this.attr.maskPadding,
                cropHeight: this.$cropMask.height() - 2 * this.attr.maskPadding
            }
        }, this.bestFitImage = function() {
            var a = this.cropDimensions(), b = this.originalWidth, c = this.originalHeight;
            this.cropWidth = a.cropWidth, this.cropHeight = a.cropHeight;
            var d = b / c;
            b >= c && a.cropWidth >= a.cropHeight && d >= a.cropWidth / a.cropHeight ? (c = a.cropHeight, b = Math.round(b * (c / this.originalHeight))) : (b = a.cropWidth, c = Math.round(c * (b / this.originalWidth))), this.$cropImage.width(b).height(c).offset({
                top: a.maskHeight / 2 - c / 2 + a.top,
                left: a.maskWidth / 2 - b / 2 + a.left
            }), this.bestFitHeight = c, this.bestFitWidth = b
        }, this.onDragStart = function(a, b) {
            this.attr.imageStartOffset = this.select("cropImageSelector").offset()
        }, this.getOffsetConstraints = function() {
            var a = this.$cropMask.offset(), b = this.attr.maskPadding, c = a.left + b, d = c + this.$cropMask.width() - this.$cropImage.width() - 2 * b, e = a.top + b, f = e + this.$cropMask.height() - this.$cropImage.height() - 2 * b;
            return {
                minLeft: d,
                maxLeft: c,
                minTop: f,
                maxTop: e,
                rangeLeft: c - d,
                rangeTop: e - f
            }
        }, this.setImageOffsetConstrainedToFit = function(a) {
            var b = this.getOffsetConstraints();
            this.$cropImage.offset({
                left: Math.min(Math.max(b.minLeft, a.left), b.maxLeft),
                top: Math.min(Math.max(b.minTop, a.top), b.maxTop)
            })
        }, this.onDragHandler = function(a, b) {
            this.setImageOffsetConstrainedToFit({
                top: this.attr.imageStartOffset.top + b.position.top - b.originalPosition.top,
                left: this.attr.imageStartOffset.left + b.position.left - b.originalPosition.left
            })
        }, this.onDragStop = function(a, b) {
            this.select("cropOverlaySelector").offset(this.select("cropMaskSelector").offset())
        }, this.setScaleValue = function(a) {
            var b = this.$cropImage.offset(), c = Math.round(b.left + this.$cropImage.width() / 2), d = Math.round(b.top + this.$cropImage.height() / 2), e = Math.round(this.bestFitHeight * (1 + a / 100)), f = Math.round(this.bestFitWidth * (1 + a / 100));
            e = odd(e) ? e += 1 : e, f = odd(f) ? f += 1 : f, this.$cropImage.height(e).width(f), this.setImageOffsetConstrainedToFit({
                top: Math.round(d - e / 2),
                left: Math.round(c - f / 2)
            })
        }, this.onSlide = function(a, b) {
            b.value != this.lastScaleValue && (this.lastScaleValue = b.value, this.setScaleValue(b.value))
        }, this.imageLoaded = function(a, b) {
            this.originalHeight = this.$cropImage.height(), this.originalWidth = this.$cropImage.width(), this.$slider.slider({
                value: 0,
                max: 100,
                min: 0,
                slide: this.onSlide.bind(this)
            }).slider("option", "value", 0), this.lastScaleValue = 0, this.bestFitImage(), this.select("cropOverlaySelector").draggable({
                drag: this.onDragHandler.bind(this),
                stop: this.onDragStop.bind(this),
                start: this.onDragStart.bind(this),
                containment: this.attr.cropContainerSelector,
                scroll: !1
            })
        }, this.getNormalizedOffset = function() {
            var a = this.getOffsetConstraints(), b = this.$cropImage.offset();
            return {
                left: (b.left - a.minLeft) / (a.rangeLeft || 1),
                top: (b.top - a.minTop) / (a.rangeTop || 1)
            }
        }, this.setNormalizedOffset = function(a) {
            var b = this.getOffsetConstraints();
            this.$cropImage.offset({
                left: b.minLeft + b.rangeLeft * a.left,
                top: b.minTop + b.rangeTop * a.top
            })
        }, this.setCropMetrics = function(a, b) {
            var c = this.getNormalizedOffset();
            this.select("cropZoneSelector").height(b.zoneHeight).width(b.zoneWidth), this.$cropMask.css({
                left: b.left,
                top: b.top,
                width: b.width,
                height: b.height
            });
            if (this.cropWidth != b.width || this.cropHeight != b.height)
                this.bestFitImage(), this.setScaleValue(this.lastScaleValue), this.setNormalizedOffset(c)
        }, this.after("initialize", function() {
            this.$cropImage = this.select("cropImageSelector"), this.$cropMask = this.select("cropMaskSelector"), this.$slider = this.select("cropperSliderSelector"), this.on(this.attr.cropImageSelector, "load", this.imageLoaded), this.on("uiSetCropMetrics", this.setCropMetrics)
        })
    }
    require("$lib/jquery_ui.profile.js"), require("$lib/jquery_webcam.js");
    var userInfo = require("app/data/user_info"), LOW_QUALITY_COMPRESSION = .75, MEDIUM_QUALITY_COMPRESSION = .85, HIGH_QUALITY_COMPRESSION = .9, MAX_SCALE_HEIGHT = 4096, MAX_SCALE_WIDTH = 4096;
    module.exports = Cropper
});
define("app/ui/with_verify_upload_type", ["module", "require", "exports"], function(module, require, exports) {
    function withVerifyUploadType() {
        this.verifyUploadType = function(a) {
            return function(b, c) {
                if (c && (c.uploadType || c.sourceEventData && c.sourceEventData.uploadType) == this.attr.uploadType)
                    return a.apply(this, arguments)
            }
        }
    }
    module.exports = withVerifyUploadType
});
define("app/utils/is_showing_avatar_options", ["module", "require", "exports"], function(module, require, exports) {
    module.exports = function() {
        return $("body").hasClass("show-avatar-options")
    }
});
define("app/ui/dialogs/profile_image_upload_dialog_base", ["module", "require", "exports", "core/component", "app/ui/settings/with_cropper", "app/ui/with_dialog", "app/ui/with_verify_upload_type", "app/utils/is_showing_avatar_options", "core/i18n"], function(module, require, exports) {
    function profileImageUpload() {
        this.defaultAttrs({
            webcamTitle: _('Smile!'),
            titleSelector: ".modal-title",
            profileImageCropDivSelector: ".image-upload-crop",
            profileImageWebcamDivSelector: ".image-upload-webcam",
            cancelSelector: ".profile-image-cancel",
            saveSelector: ".profile-image-save",
            cropperSliderSelector: ".cropper-slider",
            cropImageSelector: ".crop-image",
            cropMaskSelector: ".cropper-mask",
            cropOverlaySelector: ".cropper-overlay",
            cropZoneSelector: ".crop-zone",
            captureWebcamSelector: ".profile-image-capture-webcam",
            webcamContainerSelector: ".webcam-container",
            webcamCanvasSelector: ".webcam-canvas",
            videoSelector: "video",
            videoOverlaySelector: ".video-overlay",
            videoCountdownSelector: ".video-countdown",
            retakeButtonSelector: ".profile-image-previous",
            videoPermissionExplain: ".video-permission-explain",
            videoPermissionFail: ".video-permission-fail",
            imageNameSelector: "#choose-photo div.photo-selector input.file-name",
            imageDataSelector: "#choose-photo div.photo-selector input.file-data",
            imageUploadSpinnerSelector: ".image-upload-spinner",
            maskPadding: 40,
            top: 50,
            uploadType: "",
            drawSurfaceSelector: ".drawsurface",
            showSuccessMessage: !0,
            maximumWidth: 256,
            maximumHeight: 256,
            fileName: "",
            savingClass: "saving",
            isAvatarWhenShowingAvatarOptions: !0,
            alertMessageEvent: "uiAlertBanner"
        }), this.showCropper = function(a) {
            this.setTitle(this.attr.originalTitle), this.select("captureWebcamSelector").hide(), this.select("videoSelector").hide().hide(), this.select("saveSelector").show(), this.attr.fileName = a, this.clearForm(), document.body.focus(), this.trigger(this.$dialog, "uiDialogContentChanged"), this.trigger("uiShowingCropper", {
                scribeElement: this.getScribeElement()
            })
        }, this.setScribeElement = function(a) {
            this.scribeElement = a
        }, this.getScribeElement = function() {
            return this.scribeElement || "upload"
        }, this.reset = function() {
            this.select("cropImageSelector").attr("src", ""), this.select("cropImageSelector").attr("style", ""), this.select("webcamContainerSelector").empty(), this.select("cancelSelector").show(), this.select("saveSelector").attr("disabled", !1).hide(), this.$node.removeClass(this.attr.savingClass), this.select("profileImageWebcamDivSelector").hide(), this.select("profileImageCropDivSelector").hide(), this.select("captureWebcamSelector").hide(), this.select("retakeButtonSelector").hide(), this.select("videoSelector").hide(), this.select("videoPermissionExplain").hide(), this.select("videoPermissionFail").hide()
        }, this.swapVisibility = function(a, b) {
            this.$node.find(a).hide(), this.$node.find(b).show()
        }, this.haveImageSelected = function(a, b) {
            var c = $(this.attr.imageNameSelector).attr("value"), d = "data:image/jpeg;base64," + $(this.attr.imageDataSelector).attr("value");
            this.gotImageData(b.uploadType, c, d), this.trigger("uiCloseDropdowns")
        }, this.gotImageData = function(a, b, c, d) {
            a !== "background" && (this.openDialog(), this.trigger("uiUploadReceived"), this.select("cropImageSelector").attr("src", c), this.select("profileImageCropDivSelector").show(), this.setScribeElement("upload"), this.showCropper(b), d && this.trigger("uiDropped"))
        }, this.openDialog = function() {
            this.open(), this.reset()
        }, this.setTitle = function(a) {
            this.select("titleSelector").text(a)
        }, this.showWebcam = function(a, b) {
            this.setTitle(this.attr.webcamTitle), this.openDialog(), this.select("profileImageWebcamDivSelector").show(), this.select("captureWebcamSelector").show(), this.initializeWebcam(), this.trigger("uiShowingWebcam")
        }, this.webcamCaptured = function() {
            this.swapVisibility(this.attr.profileImageWebcamDivSelector, this.attr.profileImageCropDivSelector), this.setScribeElement("webcam"), $(this.attr.imageDataSelector).attr("value", this.dataFromBase64URL(this.select("cropImageSelector").attr("src"))), $(this.attr.imageNameSelector).attr("value", "webcam-cap.png"), this.select("retakeButtonSelector").show(), this.showCropper()
        }, this.save = function(a, b) {
            if (this.$node.hasClass(this.attr.savingClass))
                return;
            return this.prepareCroppedImage(), a.preventDefault(), !1
        }, this.readyToCrop = function() {
            var a = this.determineCrop(), b = this.clientsideCrop(a);
            b.fileName = this.attr.fileName, b.uploadType = this.attr.uploadType, b.scribeElement = this.getScribeElement(), this.trigger("uiImageSave", b), this.enterSavingState()
        }, this.enterSavingState = function() {
            this.select("imageUploadSpinnerSelector").css("height", this.select("profileImageCropDivSelector").height()), this.$node.addClass(this.attr.savingClass), this.select("saveSelector").attr("disabled", !0), this.select("cancelSelector").hide()
        }, this.uploadSuccess = function(a, b) {
            if (this.attr.showSuccessMessage) {
                var c = {
                    avatar: _('avatar'),
                    header: _('header'),
                    background: _('background')
                }, d = c[this.attr.uploadType] || this.attr.uploadType;
                this.trigger("uiAlertBanner", {
                    message: _('Your {{uploadType}} was published successfully.', {
                        uploadType: d
                    })
                })
            }
            this.trigger("uiProfileImagePublished", {
                scribeElement: this.getScribeElement()
            }), this.close()
        }, this.uploadFailed = function(a, b) {
            this.trigger("uiProfileImageDialogFailure", {
                scribeElement: this.getScribeElement()
            }), this.trigger(this.attr.alertMessageEvent, {
                message: b.message
            }), this.close()
        }, this.clearForm = function() {
            $(this.attr.imageDataSelector).removeAttr("value"), $(this.attr.imageNameSelector).removeAttr("value")
        }, this.interceptGotProfileImageData = function(a, b) {
            this.attr.isAvatarWhenShowingAvatarOptions && b.uploadType == "header" && isShowingAvatarOptions() && (b.uploadType = "avatar"), b.uploadType == this.attr.uploadType && this.gotImageData(b.uploadType, b.name, b.contents, b.wasDropped)
        }, this.proxyTakePhoto = function(a, b) {
            this.takePhoto(a, b)
        }, this.after("initialize", function() {
            this.attr.originalTitle = this.select("titleSelector").text(), this.on(document, "uiCropperWebcam", this.verifyUploadType(this.showWebcam)), this.on(document, "uiImagePickerFileReady", this.verifyUploadType(this.haveImageSelected)), this.on("jsCamCapture", this.webcamCaptured), this.on(this.select("captureWebcamSelector"), "click", this.proxyTakePhoto), this.on(this.select("retakeButtonSelector"), "click", this.showWebcam), this.on(this.select("saveSelector"), "click", this.save), this.on(this.attr.cancelSelector, "click", this.close), this.on("uiCroppedImageReady", this.readyToCrop), this.on(document, "dataSaveImageSuccess", this.verifyUploadType(this.uploadSuccess)), this.on(document, "dataSaveImageFailure", this.verifyUploadType(this.uploadFailed)), this.on(document, "uiGotProfileImageData", this.interceptGotProfileImageData), this.on("uiDialogClosed", function() {
                this.clearForm(), this.reset(), this.trigger("uiProfileImageDialogClose")
            })
        })
    }
    var defineComponent = require("core/component"), withCropper = require("app/ui/settings/with_cropper"), withDialog = require("app/ui/with_dialog"), withVerifyUploadType = require("app/ui/with_verify_upload_type"), isShowingAvatarOptions = require("app/utils/is_showing_avatar_options"), _ = require("core/i18n");
    module.exports = defineComponent(profileImageUpload, withCropper, withDialog, withVerifyUploadType)
});
define("app/ui/settings/with_webcam", ["module", "require", "exports", "$lib/jquery_ui.profile.js", "$lib/jquery_webcam.js", "app/utils/image", "app/utils/flash_version"], function(module, require, exports) {
    function Webcam() {
        this.initializeWebcam = function() {
            $(this.attr.webcamContainerSelector).webcam({
                width: 320,
                height: 240,
                mode: "callback",
                swffile: flashVersion.path + "jscam.swf",
                onLoad: this.jsCamLoad.bind(this),
                onCameraStart: this.jsCamCameraStart.bind(this),
                onCameraStop: this.jsCamCameraStop.bind(this),
                onCapture: this.jsCamCapture.bind(this),
                onSave: this.jsCamSave.bind(this),
                debug: this.jsCamDebug
            })
        }, this.jsCamLoad = function() {
            var a = this.select("webcamCanvasSelector")[0].getContext("2d");
            this.image = a.getImageData(0, 0, 320, 240), this.pos = 0
        }, this.jsCamCameraStart = function() {
            this.select("captureWebcamSelector").attr("disabled", !1), this.trigger("uiWebcamFound")
        }, this.jsCamCameraStop = function() {
            this.select("captureWebcamSelector").attr("disabled", !0)
        }, this.jsCamCapture = function() {
            window.webcam.save()
        }, this.takePhoto = function() {
            webcam.capture()
        }, this.jsCamSave = function(a) {
            var b = this.select("webcamCanvasSelector")[0].getContext("2d"), c = a.split(";"), d = this.image;
            for (var e = 0; e < 320; e++) {
                var f = parseInt(c[e]);
                d.data[this.pos + 0] = f>>16 & 255, d.data[this.pos + 1] = f>>8 & 255, d.data[this.pos + 2] = f & 255, d.data[this.pos + 3] = 255, this.pos += 4
            }
            if (this.pos >= 307200) {
                var g = this.select("webcamCanvasSelector")[0], h = this.select("cropImageSelector")[0];
                b.putImageData(d, 0, 0), h.src = g.toDataURL("image/jpeg"), this.pos = 0, this.trigger("jsCamCapture")
            }
        }, this.jsCamDebug = function(a, b) {}
    }
    require("$lib/jquery_ui.profile.js"), require("$lib/jquery_webcam.js");
    var imageUtil = require("app/utils/image"), flashVersion = require("app/utils/flash_version");
    module.exports = Webcam
});
define("app/ui/settings/with_html5_webcam", ["module", "require", "exports", "app/utils/image"], function(module, require, exports) {
    function Webcam() {
        this.initializeWebcam = function() {
            this.startHtml5Webcam(!1)
        }, this.takePhoto = function() {
            this.takeHtml5Photo(3)
        }, this.startHtml5Webcam = function(a) {
            var b, c;
            a ? (b = {
                video: !0
            }, c = this.html5LoadFailure.bind(this)) : (b = {
                video: {
                    mandatory: {
                        minWidth: 1280,
                        minHeight: 720
                    }
                }
            }, c = function() {
                this.startHtml5Webcam(!0)
            }.bind(this)), this.select("videoPermissionExplain").show(), ImageUtil.getUserMedia(b, this.html5StreamLoaded.bind(this), c)
        }, this.html5StreamLoaded = function(a) {
            var b = this.select("videoSelector");
            b.show();
            var c = b[0];
            if (navigator.mozGetUserMedia)
                c.mozSrcObject = a;
            else {
                var d = window.URL || window.webkitURL;
                c.src = d.createObjectURL(a)
            }
            this.cleanupStream(), this.localMediaStream = a, this.select("captureWebcamSelector").attr("disabled", !1), this.select("videoPermissionExplain").hide(), this.trigger("uiWebcamFound")
        }, this.html5LoadFailure = function(a) {
            this.select("videoPermissionExplain").hide(), this.select("videoPermissionFail").show(), this.trigger("uiWebcamUnavailable")
        }, this.actuallyTakeHtml5Photo = function() {
            var a = this.select("videoSelector"), b = a[0];
            a.css({
                width: "auto"
            });
            var c = this.select("webcamCanvasSelector")[0];
            c.width = b.clientWidth, c.height = b.clientHeight;
            var d = c.getContext("2d");
            d.drawImage(b, 0, 0), a.css({
                width: "100%"
            }), this.localMediaStream.stop();
            var e = this.select("cropImageSelector")[0];
            e.src = c.toDataURL("image/jpeg"), this.trigger("jsCamCapture")
        }, this.takeHtml5Photo = function(a) {
            if (a == 0)
                this.select("videoOverlaySelector").hide(), this.actuallyTakeHtml5Photo();
            else {
                var b = this.select("videoOverlaySelector");
                this.select("videoCountdownSelector").text(a), b.show(), setTimeout(function() {
                    this.takeHtml5Photo(a - 1)
                }.bind(this), 1e3)
            }
        }, this.cleanupStream = function() {
            this.localMediaStream && (this.localMediaStream.stop(), this.localMediaStream = null)
        }, this.after("initialize", function() {
            this.on("uiDialogClosed", function() {
                this.cleanupStream()
            })
        })
    }
    var ImageUtil = require("app/utils/image");
    module.exports = Webcam
});
define("app/ui/dialogs/profile_image_upload_dialog", ["module", "require", "exports", "core/component", "app/ui/dialogs/profile_image_upload_dialog_base", "app/utils/image", "app/data/user_info", "app/ui/settings/with_webcam", "app/ui/settings/with_html5_webcam"], function(module, require, exports) {
    function profileImageUploadProxy() {
        this.after("initialize", function(a, b) {
            this.hasGetUserMedia = userInfo.getDecider("useHtml5Webcam") && ImageUtil.hasGetUserMedia();
            var c;
            this.hasGetUserMedia ? c = Dialog.mixin(withHTML5Webcam) : c = Dialog.mixin(withWebcam), c.attachTo(a, b)
        })
    }
    var defineComponent = require("core/component"), Dialog = require("app/ui/dialogs/profile_image_upload_dialog_base"), ImageUtil = require("app/utils/image"), userInfo = require("app/data/user_info"), withWebcam = require("app/ui/settings/with_webcam"), withHTML5Webcam = require("app/ui/settings/with_html5_webcam");
    module.exports = defineComponent(profileImageUploadProxy)
});
define("app/data/settings/profile_image_upload_scribe", ["module", "require", "exports", "core/component", "core/utils", "app/data/with_scribe"], function(module, require, exports) {
    function profileImageUploadScribe() {
        this.scribeEvent = function(a, b) {
            this.scribe(utils.merge(a.scribeContext, b))
        }, this.after("initialize", function() {
            this.scribeOnEvent("uiUploadReceived", {
                element: "upload",
                action: "complete"
            }), this.scribeOnEvent("uiShowingWebcam", {
                element: "webcam",
                action: "impression"
            }), this.scribeOnEvent("uiWebcamFound", {
                element: "webcam",
                action: "show"
            }), this.scribeOnEvent("uiWebcamUnavailable", {
                element: "webcam",
                action: "failure"
            }), this.scribeOnEvent("jsCamCapture", {
                element: "webcam",
                action: "complete"
            }), this.scribeOnEvent("uiProfileImageDialogClose", {
                action: "close"
            }), this.on("uiImageSave", function(a, b) {
                this.scribeEvent(b, {
                    element: "crop_" + b.scribeElement,
                    action: "complete"
                })
            }), this.on("uiShowingCropper", function(a, b) {
                this.scribeEvent(b, {
                    element: "crop_" + b.scribeElement,
                    action: "impression"
                })
            }), this.on("uiProfileImagePublished", function(a, b) {
                this.scribeEvent(b, {
                    element: "save_" + b.scribeElement,
                    action: "complete"
                })
            }), this.on("uiProfileImageDialogFailure", function(a, b) {
                this.scribeEvent(b, {
                    element: "save_" + b.scribeElement,
                    action: "failure"
                })
            })
        })
    }
    var defineComponent = require("core/component"), utils = require("core/utils"), withScribe = require("app/data/with_scribe"), ProfileImageUploadScribe = defineComponent(profileImageUploadScribe, withScribe);
    module.exports = ProfileImageUploadScribe
});
define("app/ui/alert_banner_to_message_drawer", ["module", "require", "exports", "core/component"], function(module, require, exports) {
    function alertBannerToMessageDrawer() {
        this.showMessage = function(a, b) {
            this.trigger("uiShowMessage", b)
        }, this.after("initialize", function() {
            this.on("uiAlertBanner", this.showMessage)
        })
    }
    var defineComponent = require("core/component");
    module.exports = defineComponent(alertBannerToMessageDrawer)
});
define("app/ui/image_uploader", ["module", "require", "exports", "core/component", "app/utils/image", "app/ui/with_image_selection", "app/data/with_scribe", "core/i18n"], function(module, require, exports) {
    function imageUploader() {
        this.defaults = {
            swfHeight: 30,
            swfWidth: 274,
            uploadType: "",
            fileNameTextSelector: ".photo-file-name",
            alertEvent: "uiAlertBanner"
        }, this.updateFileNameText = function(a, b) {
            var c = this.truncate(b.fileName, 18);
            this.select("fileNameSelector").val(b.fileName), this.select("fileNameTextSelector").text(c), this.trigger("uiFileNameReady", {
                fileName: c
            })
        }, this.addFileError = function(a) {
            a == "tooLarge" ? this.trigger(this.attr.alertEvent, {
                message: this.attr.fileTooBigMessage
            }) : (a == "notImage" || a == "ioError") && this.trigger(this.attr.alertEvent, {
                message: _('You did not select an image.')
            }), this.scribe({
                component: "profile_image",
                element: "upload",
                action: "failure"
            }), typeof this.attr.onError == "function" && this.attr.onError(), this.reset()
        }, this.gotImageData = function(a, b) {
            this.gotResizedImageData(a, b)
        }, this.truncate = function(a, b) {
            if (a.length <= b)
                return a;
            var c = Math.ceil(b / 2), d = Math.floor(b / 2), e = a.substr(0, c), f = a.substr(a.length - d, d);
            return e + "…" + f
        }, this.loadSwf = function(a, b) {
            image.loadPhotoSelectorSwf(this.select("swfSelector"), a, b, this.attr.swfHeight, this.attr.swfWidth, this.attr.maxSizeInBytes)
        }, this.initializeButton = function() {
            this.select("buttonSelector").attr("disabled", !1)
        }, this.resetUploader = function() {
            this.select("fileNameSelector").val(""), this.select("fileNameTextSelector").text(_('No file selected'))
        }, this.after("initialize", function() {
            this.maxSizeInBytes = this.attr.maxSizeInBytes, this.initializeButton(), this.on(this.$node, "uiPreviewThumbnailShow", this.updateFileNameText), this.on("uiResetUploader", this.resetUploader)
        })
    }
    var defineComponent = require("core/component"), image = require("app/utils/image"), withImageSelection = require("app/ui/with_image_selection"), withScribe = require("app/data/with_scribe"), _ = require("core/i18n"), ImageUploader = defineComponent(imageUploader, withImageSelection, withScribe);
    module.exports = ImageUploader
});
define("app/ui/settings/change_photo", ["module", "require", "exports", "core/component", "app/ui/with_dropdownmenu", "app/data/with_scribe", "app/ui/with_verify_upload_type", "app/utils/image", "core/utils", "core/i18n", "app/utils/flash_version"], function(module, require, exports) {
    function changePhoto() {
        this.defaultAttrs({
            fileInputSelector: ".file-input",
            uploadType: "avatar",
            swfSelector: "div.webcam-detect.swf-container",
            chooseExistingSelector: "#photo-choose-existing",
            chooseWebcamSelector: "#photo-choose-webcam",
            deleteImageSelector: "#photo-delete-image",
            caretSelector: ".dropdown-caret",
            photoSelector: "div.photo-selector",
            showDeleteSuccessMessage: !0,
            alwaysOpen: !1,
            confirmDelete: !1,
            defaultToFileInputOpen: !1,
            supportsAutoOpen: !0,
            useHtml5Editor: !1
        }), this.webcamDetectorSwfPath = flashVersion.path + "WebcamDetector.swf", this.isUsingFlashUploader = function() {
            return image.hasFlash()&&!image.hasFileReader()
        }, this.isFirefox36 = function() {
            var a = $.browser;
            return a.mozilla && a.version.slice(0, 3) == "1.9"
        }, this.needsMenuHeldOpen = function() {
            return this.isUsingFlashUploader() || this.isFirefox36()
        }, this.openWebCamDialog = function(a) {
            a.preventDefault(), this.needsMenuHeldOpen() && (this.preventMenuClose=!1), this.trigger("uiCropperWebcam", {
                uploadType: this.attr.uploadType
            })
        }, this.webcamDetected = function() {
            image.hasCanvas() && this.updateDropdownItemVisibility(this.select("chooseWebcamSelector"), !0)
        }, this.dropdownOpened = function(a, b) {
            var c = b && b.scribeContext || this.attr.eventData.scribeContext;
            this.scribe(utils.merge(c, {
                action: "open"
            })), this.needsMenuHeldOpen() && (this.preventMenuClose=!0)
        }, this.setupWebcamDetection = function() {
            var a = this.select("swfSelector");
            image.hasGetUserMedia() && this.attr.useHtml5Editor ? this.webcamDetected() : image.hasFlash() && (window.webcam && (window.webcam.onDetect = this.webcamDetected.bind(this)), a.css("width", "0"), a.css("height", "0"), a.css("overflow", "hidden"), a.flash({
                swf: this.webcamDetectorSwfPath,
                height: 1,
                width: 1,
                wmode: "transparent",
                AllowScriptAccess: "sameDomain"
            }))
        }, this.deleteImage = function() {
            if (this.attr.uploadType !== "background") {
                this.needsMenuHeldOpen() && (this.preventMenuClose=!1), this.attr.confirmDelete && (this.preventMenuClose=!0);
                var a = this.attr.confirmDelete ? "uiConfirmDeleteImage": "uiDeleteImage";
                this.trigger(a, {
                    uploadType: this.attr.uploadType
                })
            } else 
                this.hideFileName();
            this.attr.confirmDelete || this.hideDeleteLink()
        }, this.handleSaveImageSuccess = function(a, b) {
            b.message && this.attr.showSaveSuccessMessage && this.trigger("uiAlertBanner", b), this.showDeleteLink()
        }, this.handleSaveImageFailure = function(a, b) {
            b.message = b.message || _('Sorry! Something went wrong saving your photo. Please try again.', this.attr), this.trigger("uiAlertBanner", b)
        }, this.handleDeleteImageSuccess = function(a, b) {
            b.message && this.attr.showDeleteSuccessMessage && this.trigger("uiAlertBanner", b)
        }, this.handleDeleteImageFailure = function(a, b) {
            b.message = b.message || _('Sorry! Something went wrong deleting your photo. Please try again.', this.attr), this.trigger("uiAlertBanner", b), this.showDeleteLink()
        }, this.showDeleteLinkForTargetedButton = function(a, b) {
            b.uploadType == "background" && this.showDeleteLink()
        }, this.showDeleteLink = function(a, b) {
            this.updateDropdownItemVisibility(this.select("deleteImageSelector"), !0)
        }, this.hideDeleteLink = function(a, b) {
            this.updateDropdownItemVisibility(this.select("deleteImageSelector"), !1)
        }, this.showFileName = function(a, b) {
            this.$node.siblings(".display-file-requirement").hide(), this.$node.siblings(".display-file-name").text(b.fileName).show()
        }, this.hideFileName = function() {
            this.$node.siblings(".display-file-requirement").show(), this.$node.siblings(".display-file-name").hide()
        }, this.updateDropdownItemVisibility = function(a, b) {
            a.toggleClass("u-hidden", !b), this.updateMenuHierarchy()
        }, this.upliftFilePicker = function() {
            var a = this.select("photoSelector");
            this.select("togglerSelector").hide(), a.find("button").attr("disabled", !1), a.appendTo(this.$node)
        }, this.moveFilePickerBackIntoMenu = function() {
            var a = this.select("photoSelector");
            a.appendTo(this.select("chooseExistingSelector")), this.select("togglerSelector").show()
        }, this.updateMenuHierarchy = function() {
            if (this.attr.alwaysOpen)
                return;
            this.availableDropdownItems().length == 1 ? this.upliftFilePicker() : this.moveFilePickerBackIntoMenu()
        }, this.availableDropdownItems = function() {
            return this.select("menuItemSelector").filter(function() {
                return $(this).css("display") != "none"
            })
        }, this.addCaretHover = function() {
            this.select("caretSelector").addClass("hover")
        }, this.removeCaretHover = function() {
            this.select("caretSelector").removeClass("hover")
        }, this.handleCloseRequest = function(a) {
            (this.attr.alwaysOpen || this.preventMenuClose) && a.preventDefault()
        }, this.handleOpenRequest = function(a) {
            var b = this.availableDropdownItems();
            b.length == 1 && this.attr.supportsAutoOpen && image.supportsCropper() && (a.preventDefault(), this.attr.defaultToFileInputOpen ? (this.trigger("uiEditProfileHideOptions"), b.find(this.attr.fileInputSelector).click()) : b.click())
        }, this.after("initialize", function() {
            this.attr.uploadType == "avatar" && this.setupWebcamDetection(), this.on(document, "uiImagePickerFileReady", this.verifyUploadType(this.showDeleteLinkForTargetedButton)), this.on(document, "uiFileNameReady", this.verifyUploadType(this.showFileName)), this.on(document, "uiHideDeleteLink", this.verifyUploadType(this.hideDeleteLink)), this.on(document, "dataSaveImageSuccess", this.verifyUploadType(this.handleSaveImageSuccess)), this.on(document, "dataSaveImageFailure", this.verifyUploadType(this.handleSaveImageFailure)), this.on(document, "dataDeleteImageSuccess", this.verifyUploadType(this.handleDeleteImageSuccess)), this.on(document, "dataDeleteImageFailure", this.verifyUploadType(this.handleDeleteImageFailure)), this.on("uiDropdownOpened", this.dropdownOpened), this.on("uiDropdownOpenRequested", this.handleOpenRequest), this.on("uiDropdownCloseRequested", this.handleCloseRequest), this.on("click", {
                chooseWebcamSelector: this.openWebCamDialog,
                deleteImageSelector: this.deleteImage
            }), this.on("mouseover focusin", {
                firstMenuItemSelector: this.addCaretHover
            }), this.on("mouseout focusout", {
                firstMenuItemSelector: this.removeCaretHover
            }), this.updateMenuHierarchy()
        }), this.before("teardown", function() {
            delete window.webcam
        })
    }
    var defineComponent = require("core/component"), withDropdownMenu = require("app/ui/with_dropdownmenu"), withScribe = require("app/data/with_scribe"), withVerifyUploadType = require("app/ui/with_verify_upload_type"), image = require("app/utils/image"), utils = require("core/utils"), _ = require("core/i18n"), flashVersion = require("app/utils/flash_version");
    module.exports = defineComponent(changePhoto, withDropdownMenu, withScribe, withVerifyUploadType)
});
define("app/data/settings", ["module", "require", "exports", "core/component", "app/data/user_info", "app/data/with_auth_token", "app/data/with_data"], function(module, require, exports) {
    var defineComponent = require('core/component');
    var userInfo = require('app/data/user_info');
    var withAuthToken = require('app/data/with_auth_token');
    var withData = require('app/data/with_data');
    var SettingsData = defineComponent(settingsData, withData, withAuthToken);
    function settingsData() {
        // TODO: dedupe these methods
        this.defaultAttrs({
            ajaxTimeout: 6000,
            noShowError: true
        });
        this.verifyUsername = function (event, data) {
            this.get({
                url: '/users/username_available',
                eventData: data,
                data: data,
                success: 'dataUsernameResult',
                error: 'dataUsernameError'
            });
        };
        this.verifyEmail = function (event, data) {
            this.get({
                url: '/users/email_available',
                eventData: data,
                data: data,
                success: 'dataEmailResult',
                error: 'dataEmailError'
            });
        };
        this.cancelPendingEmail = function (event, data) {
            var success = function (json) {
                this.trigger('dataCancelEmailSuccess', json);
            };
            var error = function (request) {
                this.trigger('dataCancelEmailFailure', request);
            };
            this.post({
                url: data.url,
                data: this.addAuthToken(),
                success: success.bind(this),
                error: error.bind(this)
            });
        };
        this.resendPendingEmail = function (event, data) {
            var success = function (json) {
                this.trigger('dataResendEmailSuccess', json);
            };
            var error = function (request) {
                this.trigger('dataResendEmailFailure', request);
            };
            this.post({
                url: data.url,
                data: this.addAuthToken(),
                success: success.bind(this),
                error: error.bind(this)
            });
        };
        this.resendPassword = function (event, data) {
            this.post({
                url: data.url,
                data: this.addAuthToken(),
                dataType: 'text',
                success: function () {
                    this.trigger('dataForgotPasswordSuccess', {});
                }.bind(this)
            });
        };
        this.deleteGeoData = function (event) {
            var error = function (request) {
                this.trigger('dataGeoDeletionError', {});
            };
            this.post({
                url: '/account/delete_location_data',
                dataType: 'text',
                data: this.addAuthToken(),
                error: error.bind(this)
            });
        };
        this.revokeAuthority = function (event, data) {
            this.post({
                url: '/oauth/revoke',
                eventData: data,
                data: data,
                success: 'dataOAuthRevokeResultSuccess',
                error: 'dataOAuthRevokeResultFailure'
            });
        };
        // duckface events
        this.saveImage = function (event, data) {
            var uploadTypeToUrl = {
                header: '/settings/profile/upload_profile_header',
                avatar: '/settings/profile/profile_image_update'
            };
            data.page_context = this.attr.pageName;
            data.section_context = this.attr.sectionName;
            this.post({
                url: uploadTypeToUrl[data.uploadType],
                eventData: data,
                data: data,
                success: 'dataSaveImageSuccess',
                error: 'dataSaveImageFailure'
            });
        };
        this.deleteImage = function (event, data) {
            var uploadTypeToUrl = {
                header: '/settings/profile/destroy_profile_header',
                avatar: '/settings/profile/destroy_avatar'
            };
            if (userInfo.getDecider('macaw_swift_remove_profile_banner')) {
                uploadTypeToUrl.header = '/i/profiles/remove_profile_banner'; // Override default path
            }
            if (userInfo.getDecider('macaw_swift_remove_profile_image')) {
                uploadTypeToUrl.avatar = '/i/profiles/remove_profile_image'; // Override default path
            }
            data.page_context = this.attr.pageName;
            data.section_context = this.attr.sectionName;
            this.destroy({
                url: uploadTypeToUrl[data.uploadType],
                eventData: data,
                data: data,
                success: 'dataDeleteImageSuccess',
                error: 'dataDeleteImageFailure'
            });
        };
        // method also exists in data/email_banner.js
        this.resendConfirmationEmail = function (event, data) {
            this.post({
                url: '/account/resend_confirmation_email',
                eventData: data,
                data: data,
                success: 'dataResendConfirmationEmailSuccess',
                error: 'dataResendConfirmationEmailError'
            });
        };
        // Call to export tweets
        this.tweetExport = function (event, data) {
            this.post({
                url: '/account/request_tweet_export',
                eventData: data,
                data: data,
                success: 'dataTweetExportSuccess',
                error: 'dataTweetExportError'
            });
        };
        // Call to resend download email
        this.tweetExportResend = function (event, data) {
            this.post({
                url: '/account/request_tweet_export_resend',
                eventData: data,
                data: data,
                success: 'dataTweetExportResendSuccess',
                error: 'dataTweetExportResendError'
            });
        };
        // Call to increase rate limiter on user
        this.tweetExportIncrRateLimiter = function (event, data) {
            this.post({
                url: '/account/request_tweet_export_download',
                eventData: data,
                data: data,
                success: 'dataTweetExportDownloadSuccess',
                error: 'dataTweetExportDownloadError'
            });
        };
        this.after('initialize', function () {
            this.on('uiUsernameChange', this.verifyUsername);
            this.on('uiEmailChange', this.verifyEmail);
            this.on('uiCancelPendingEmail', this.cancelPendingEmail);
            this.on('uiResendPendingEmail', this.resendPendingEmail);
            this.on('uiForgotPassword', this.resendPassword);
            this.on('uiDeleteGeoData', this.deleteGeoData);
            this.on('uiRevokeClick', this.revokeAuthority);
            // duckface endpoint
            this.on('uiImageSave', this.saveImage);
            this.on('uiDeleteImage', this.deleteImage);
            // Grailbird (tweet / DM export)
            this.on('uiTweetExportButtonClicked', this.tweetExport);
            this.on('uiTweetExportResendButtonClicked', this.tweetExportResend);
            this.on('uiTweetExportConfirmEmail', this.resendConfirmationEmail);
            this.on('uiTweetExportIncrRateLimiter', this.tweetExportIncrRateLimiter);
            // signup uses these:
            this.on('dataValidateUsername', this.verifyUsername);
            this.on('dataValidateEmail', this.verifyEmail);
        });
    }
    module.exports = SettingsData;
});
define("bower_components/flight-with-child-components/lib/flight-with-child-components", function() {
    function b() {
        this.defaultAttrs({
            teardownOn: ""
        }), this.after("initialize", function() {
            if (this.attr.teardownOn) {
                if (this.attr.teardownOn === this.childTeardownEvent)
                    throw new Error("Component initialized to listen for its own teardown event.");
                this.on(document, this.attr.teardownOn, function() {
                    this.teardown()
                })
            }
        })
    }
    function c() {
        this.before("initialize", function() {
            this.childTeardownEvent = this.childTeardownEvent || c.nextTeardownEvent()
        }), this.before("teardown", function() {
            this.trigger(this.childTeardownEvent)
        }), this.attachChild = function(a, c, d) {
            d = d || {}, d.teardownOn || (d.teardownOn = this.childTeardownEvent);
            var e = a.prototype.mixedIn || [], f = e.indexOf(b)>-1?!0 : !1;
            (f ? a : a.mixin(b)).attachTo(c, d)
        }
    }
    "use strict";
    var a = 0;
    return c.nextTeardownEvent = function() {
        return a += 1, "_teardownEvent" + a
    }, c.withBoundLifecycle = b, c
})
define("app/ui/start/htl_avatar_editor", ["module", "require", "exports", "core/component", "app/ui/dialogs/profile_image_upload_dialog", "app/data/settings/profile_image_upload_scribe", "app/ui/alert_banner_to_message_drawer", "app/ui/image_uploader", "app/ui/settings/change_photo", "app/data/settings", "app/data/user_info", "bower_components/flight-with-child-components/lib/flight-with-child-components", "core/i18n"], function(module, require, exports) {
    function htlAvatarEditor() {
        this.defaultAttrs({
            userId: null,
            profileEditDialog: "#profile_image_upload_dialog",
            imageUploaderButton: ".avatar-settings .uploader-image .photo-selector",
            dropdownContainer: ".DashboardProfileCard-avatarContainer",
            cancelButton: ".dropdown-menu .cancel-options"
        }), this.updateProfileImages = function(a, b) {
            var c = b && b.status;
            c && b.sourceEventData.uploadType == "avatar" && (this.$node.find(".avatar[data-user-id='" + this.attr.userId + "'], [data-user-id='" + this.attr.userId + "'] .avatar").attr("src", c), this.$node.find("img.DashboardProfileCard-avatarImage").attr("src", c).show(), this.$node.find("div.DashboardProfileCard-avatarImage").remove(), this.$node.find(".top-timeline-tweet-box-user-image").attr("src", c), this.select("profileEditDialog").attr("data-upload-complete", "true"), this.$node.find(".DashboardProfileCard-avatarLink").removeClass("js-tooltip").removeAttr("title"), this.$node.find(".DashboardProfileCard-avatarLink img").removeClass("u-borderUserColorLightHover"))
        }, this.after("initialize", function(a, b) {
            this.select("dropdownContainer").find(".file-input").removeClass("js-tooltip"), this.on("dataSaveImageSuccess", this.updateProfileImages), this.on(this.attr.cancelButton, "click", "uiForceDropdownClosed"), using("css!" + b.profileEditingCSSBundle, function() {}), this.attachChild(SettingsData, document, b);
            var c = {
                scribeContext: {
                    component: "profile_image_upload"
                }
            };
            this.attachChild(ProfileImageUploadScribe, this.attr.profileEditDialog), this.attachChild(ImageUploader, this.attr.imageUploaderButton, {
                maxSizeInBytes: 10485760,
                fileTooBigMessage: _('Please select a profile image that is less than 10 MB.'),
                uploadType: "avatar",
                eventData: c
            }), this.attachChild(ProfileImageUploadDialog, this.attr.profileEditDialog, {
                uploadType: "avatar",
                eventData: c,
                maximumWidth: b.maxAvatarUploadDimension,
                maximumHeight: b.maxAvatarUploadDimension,
                isAvatarWhenShowingAvatarOptions: !1,
                maxImageSize: 716800
            }), this.attachChild(ChangePhoto, this.attr.dropdownContainer, {
                supportsAutoOpen: !1,
                uploadType: "avatar",
                eventData: c,
                useHtml5Editor: userInfo.getDecider("useHtml5Webcam")
            }), this.attachChild(AlertBannerToMessageDrawer, document), this.on("uiProfileImagePublished", this.teardown)
        })
    }
    var defineComponent = require("core/component"), ProfileImageUploadDialog = require("app/ui/dialogs/profile_image_upload_dialog"), ProfileImageUploadScribe = require("app/data/settings/profile_image_upload_scribe"), AlertBannerToMessageDrawer = require("app/ui/alert_banner_to_message_drawer"), ImageUploader = require("app/ui/image_uploader"), ChangePhoto = require("app/ui/settings/change_photo"), SettingsData = require("app/data/settings"), userInfo = require("app/data/user_info"), withChildComponents = require("bower_components/flight-with-child-components/lib/flight-with-child-components"), _ = require("core/i18n");
    module.exports = defineComponent(htlAvatarEditor, withChildComponents)
});
define("app/pages/home", ["module", "require", "exports", "app/utils/boomerang", "app/boot/app", "app/data/contact_import", "app/data/contact_import_scribe", "app/ui/dashboard_tweetbox", "app/ui/dynamic_card_watcher", "app/ui/who_to_follow/import_loading_dialog", "app/ui/who_to_follow/import_services", "app/ui/inline_tweet_compose", "app/ui/multiline_ellipses", "app/data/notifications_register", "app/ui/profile_stats", "app/boot/promptbird", "app/boot/smart_infinite_scroll", "app/boot/trends", "app/boot/tweet_timeline", "app/ui/timelines/tweet_visibility", "app/data/tweet_visibility_scribe", "app/boot/user_completion_module", "app/data/user_info", "core/utils", "app/ui/who_to_follow/who_to_follow_dashboard", "app/data/who_to_follow", "app/data/who_to_follow_scribe", "app/ui/who_to_follow/who_to_follow_timeline", "app/data/who_to_follow/wtf_import_prompt_scribe", "core/i18n", "app/ui/start/htl_avatar_editor"], function(module, require, exports) {
    var Boomerang = require("app/utils/boomerang"), bootApp = require("app/boot/app"), ContactImportData = require("app/data/contact_import"), ContactImportScribe = require("app/data/contact_import_scribe"), DashboardTweetbox = require("app/ui/dashboard_tweetbox"), DynamicCardWatcher = require("app/ui/dynamic_card_watcher"), ImportLoadingDialog = require("app/ui/who_to_follow/import_loading_dialog"), ImportServices = require("app/ui/who_to_follow/import_services"), InlineTweetCompose = require("app/ui/inline_tweet_compose"), MultilineEllipses = require("app/ui/multiline_ellipses"), NotificationsRegister = require("app/data/notifications_register"), ProfileStats = require("app/ui/profile_stats"), promptbirdBoot = require("app/boot/promptbird"), smartInfiniteScrollBoot = require("app/boot/smart_infinite_scroll"), trendsBoot = require("app/boot/trends"), tweetTimelineBoot = require("app/boot/tweet_timeline"), TweetVisibility = require("app/ui/timelines/tweet_visibility"), TweetVisibilityScribe = require("app/data/tweet_visibility_scribe"), userCompletionModuleBoot = require("app/boot/user_completion_module"), userInfo = require("app/data/user_info"), utils = require("core/utils"), WhoToFollowDashboard = require("app/ui/who_to_follow/who_to_follow_dashboard"), WhoToFollowData = require("app/data/who_to_follow"), WhoToFollowScribe = require("app/data/who_to_follow_scribe"), WhoToFollowTimeline = require("app/ui/who_to_follow/who_to_follow_timeline"), WTFImportPromptScribe = require("app/data/who_to_follow/wtf_import_prompt_scribe"), _ = require("core/i18n"), HTLAvatarEditor = require("app/ui/start/htl_avatar_editor");
    module.exports = function(a) {
        bootApp(a), trendsBoot(utils.merge(a, {
            show_context: !0
        })), tweetTimelineBoot(utils.merge(a, {
            preservedScrollEnabled: !0,
            useMinMaxPagination: !0,
            streaming: !!a.streamingExperiment
        }), a.timeline_url, "swift_home_timeline", "tweet", "tweet"), MultilineEllipses.attachTo(document), userCompletionModuleBoot(a);
        var b = utils.merge(a, {
            eventData: {
                scribeContext: {
                    component: "user_recommendations"
                }
            }
        });
        ContactImportScribe.attachTo(document), ContactImportData.attachTo(document), ImportServices.attachTo("#empty-timeline-recommendations", a, {
            eventData: {
                scribeContext: {
                    component: "user_recommendations",
                    element: "etm_import_prompt"
                }
            }
        }), ImportLoadingDialog.attachTo("#import-loading-dialog"), promptbirdBoot(a), WTFImportPromptScribe.attachTo(".dashboard .js-wtf-module", b), WhoToFollowDashboard.attachTo(".dashboard .js-wtf-module", b), WhoToFollowScribe.attachTo(".dashboard .js-wtf-module", b), ImportServices.attachTo(".dashboard .import-prompt", a, {
            otherServicesSelector: ".other-services",
            eventData: {
                scribeContext: {
                    component: "user_recommendations",
                    element: "wtf_import_prompt"
                }
            }
        }), a.emptyTimelineOptions.emptyTimelineModule && WhoToFollowTimeline.attachTo("#empty-timeline-recommendations", b), WhoToFollowScribe.attachTo("#empty-timeline-recommendations", b), WhoToFollowData.attachTo(document, b), DashboardTweetbox.attachTo(".home-tweet-box", {
            draftTweetId: "home",
            hasDefaultText: !1,
            preexpandTweetbox: a.preexpandTweetbox,
            suppressSuccessMessage: !0,
            eventData: {
                scribeContext: {
                    component: "tweet_box"
                }
            }
        }), ProfileStats.attachTo(".dashboard .mini-profile"), DynamicCardWatcher.attachTo(window, {
            containerSelector: "#timeline",
            unloadedCardsFilter: ".mf-website [data-card-name=promo_website]"
        }), a.boomr && Boomerang.attachTo(document, a.boomr), TweetVisibility.attachTo("#timeline", {
            eventData: a.eventData
        }), TweetVisibilityScribe.attachTo(document), a.deciders && a.deciders.smartInfiniteScroll && smartInfiniteScrollBoot(), a.inlineTweetComposeEnabled && InlineTweetCompose.attachTo(document, {
            text: a.inlineTweetComposeOptions.text
        }), $("#profile_image_upload_dialog").length > 0&&!$("#profile_image_upload_dialog").attr("data-upload-complete") && HTLAvatarEditor.attachTo(document, a), NotificationsRegister.attachTo(document, a)
    }
});
define("app/boot/wtf_module", ["module", "require", "exports", "app/ui/who_to_follow/who_to_follow_dashboard", "app/data/who_to_follow", "app/data/who_to_follow_scribe", "app/data/who_to_follow/wtf_import_prompt_scribe", "core/utils"], function(module, require, exports) {
    var WhoToFollowDashboard = require("app/ui/who_to_follow/who_to_follow_dashboard"), WhoToFollowData = require("app/data/who_to_follow"), WhoToFollowScribe = require("app/data/who_to_follow_scribe"), WTFImportPromptScribe = require("app/data/who_to_follow/wtf_import_prompt_scribe"), utils = require("core/utils");
    module.exports = function(b, c, d) {
        var e = utils.merge(c, d, {
            eventData: {
                scribeContext: {
                    component: "user_recommendations"
                }
            }
        });
        WTFImportPromptScribe.attachTo(b, e), WhoToFollowDashboard.attachTo(b, e), WhoToFollowData.attachTo(document, e), WhoToFollowScribe.attachTo(b, e)
    }
});
define("app/boot/connect", ["module", "require", "exports", "app/boot/app", "app/boot/trends", "app/boot/wtf_module", "app/ui/multiline_ellipses", "app/ui/profile/highline_tweet_stats"], function(module, require, exports) {
    function initialize(a) {
        bootApp(a), whoToFollowModule(wtfSelector, a), MultilineEllipses.attachTo(document), HighlineTweetStats.attachTo(document), bootTrends(a)
    }
    var bootApp = require("app/boot/app"), bootTrends = require("app/boot/trends"), whoToFollowModule = require("app/boot/wtf_module"), MultilineEllipses = require("app/ui/multiline_ellipses"), HighlineTweetStats = require("app/ui/profile/highline_tweet_stats"), wtfSelector = ".dashboard .js-wtf-module", timelineSelector = "#timeline";
    module.exports = initialize
});
define("app/pages/connect/interactions", ["module", "require", "exports", "app/boot/connect", "app/boot/tweet_timeline", "app/data/contact_import", "app/data/contact_import_scribe", "app/ui/who_to_follow/import_loading_dialog", "app/ui/who_to_follow/import_services"], function(module, require, exports) {
    var connectBoot = require("app/boot/connect"), tweetTimelineBoot = require("app/boot/tweet_timeline"), ContactImportData = require("app/data/contact_import"), ContactImportScribe = require("app/data/contact_import_scribe"), ImportLoadingDialog = require("app/ui/who_to_follow/import_loading_dialog"), ImportServices = require("app/ui/who_to_follow/import_services");
    module.exports = function(a) {
        connectBoot(a);
        var b = {
            filtered: "/i/notifications/timeline?filter=filtered",
            verified: "/i/notifications/timeline?filter=verified",
            following: "/i/notifications/timeline?filter=following",
            unfiltered: "/i/notifications/timeline?filter=all"
        }, c = a.vitMentionFilter, d = b[c] || b.unfiltered;
        tweetTimelineBoot(a, d, "swift_interactions_timeline", "activity", "stream"), ContactImportData.attachTo(document, a), ContactImportScribe.attachTo(document, a), ImportLoadingDialog.attachTo("#import-loading-dialog", a), ImportServices.attachTo(".dashboard .import-prompt", a, {
            otherServicesSelector: ".other-services",
            eventData: {
                scribeContext: {
                    component: "user_recommendations",
                    element: "wtf_import_prompt"
                }
            }
        })
    }
});
define("app/pages/connect/mentions", ["module", "require", "exports", "app/boot/connect", "app/boot/tweet_timeline", "app/data/contact_import", "app/data/contact_import_scribe", "app/ui/who_to_follow/import_loading_dialog", "app/ui/who_to_follow/import_services"], function(module, require, exports) {
    var connectBoot = require("app/boot/connect"), tweetTimelineBoot = require("app/boot/tweet_timeline"), ContactImportData = require("app/data/contact_import"), ContactImportScribe = require("app/data/contact_import_scribe"), ImportLoadingDialog = require("app/ui/who_to_follow/import_loading_dialog"), ImportServices = require("app/ui/who_to_follow/import_services");
    module.exports = function(a) {
        connectBoot(a);
        var b = {
            filtered: "/mentions/timeline?filter=filtered",
            verified: "/mentions/timeline?filter=verified",
            following: "/mentions/timeline?filter=following",
            unfiltered: "/mentions/timeline?filter=all"
        }, c = a.vitMentionFilter, d = b[c] || b.unfiltered;
        tweetTimelineBoot(a, d, "swift_mentions_timeline", "tweet"), ContactImportData.attachTo(document, a), ContactImportScribe.attachTo(document, a), ImportLoadingDialog.attachTo("#import-loading-dialog", a), ImportServices.attachTo(".dashboard .import-prompt", a, {
            otherServicesSelector: ".other-services",
            eventData: {
                scribeContext: {
                    component: "user_recommendations",
                    element: "wtf_import_prompt"
                }
            }
        })
    }
});
define("app/pages/connect/network_activity", ["module", "require", "exports", "app/boot/connect", "app/boot/tweet_timeline", "app/data/contact_import", "app/data/contact_import_scribe", "app/ui/who_to_follow/import_loading_dialog", "app/ui/who_to_follow/import_services"], function(module, require, exports) {
    var connectBoot = require("app/boot/connect"), tweetTimelineBoot = require("app/boot/tweet_timeline"), ContactImportData = require("app/data/contact_import"), ContactImportScribe = require("app/data/contact_import_scribe"), ImportLoadingDialog = require("app/ui/who_to_follow/import_loading_dialog"), ImportServices = require("app/ui/who_to_follow/import_services");
    module.exports = function(a) {
        a.containingItemSelector = ".supplement", a.marginBreaking=!1, connectBoot(a), tweetTimelineBoot(a, "/activity/timeline", "swift_network_activity_timeline", "activity", "stream"), ContactImportData.attachTo(document, a), ContactImportScribe.attachTo(document, a), ImportLoadingDialog.attachTo("#import-loading-dialog", a), ImportServices.attachTo(".dashboard .import-prompt", a, {
            otherServicesSelector: ".other-services",
            eventData: {
                scribeContext: {
                    component: "user_recommendations",
                    element: "wtf_import_prompt"
                }
            }
        })
    }
});
define("app/data/media_thumbnails_scribe", ["module", "require", "exports", "core/component", "app/data/with_scribe"], function(module, require, exports) {
    function mediaThumbnailsScribe() {
        var a = /\:[A-Z0-9_-]+$/i;
        this.scribeMediaThumbnailResults = function(b, c) {
            var d = c.thumbnails.length, e = d ? "results": "no_results", f = {};
            d && (f.items = c.thumbnails.map(function(b) {
                return {
                    name: b.replace(a, "")
                }
            })), this.scribe({
                action: e
            }, c, f)
        }, this.scribeMediaThumbnailClick = function(b, c) {
            var d = {
                url: c.url && c.url.replace(a, "")
            }, e = {
                element: c.mediaType,
                action: "click"
            };
            this.scribe(e, c, d)
        }, this.scribeMediaViewAllClick = function(a, b) {
            this.scribe({
                action: "view_all"
            }, b)
        }, this.scribeMediaViewMoreClick = function(a, b) {
            this.scribe({
                element: "view_more_photos",
                action: "click"
            }, b)
        }, this.after("initialize", function() {
            this.on(document, "uiMediaGalleryResults", this.scribeMediaThumbnailResults), this.on(document, "uiMediaThumbnailsVisible", this.scribeMediaThumbnailResults), this.on(document, "uiMediaThumbnailClick", this.scribeMediaThumbnailClick), this.on(document, "uiMediaViewAllClick", this.scribeMediaViewAllClick), this.on(document, "uiMediaViewMoreClick", this.scribeMediaViewMoreClick)
        })
    }
    var defineComponent = require("core/component"), withScribe = require("app/data/with_scribe");
    module.exports = defineComponent(mediaThumbnailsScribe, withScribe)
});
define("app/ui/dialogs/iph_search_result_dialog", ["module", "require", "exports", "core/component", "app/ui/with_dialog", "app/data/with_scribe"], function(module, require, exports) {
    function inProductHelpDialog() {
        this.defaultAttrs({
            helpfulSelector: "#helpful_button",
            notHelpfulSelector: "#not_helpful_button",
            inProductHelpSelector: "#search_result_help",
            feedbackQuestionSelector: "#satisfaction_question",
            feedbackButtonsSelector: "#satisfaction_buttons",
            feedbackMessageSelector: "#satisfaction_feedback"
        }), this.openDialog = function(a) {
            this.scribe({
                component: "search_result",
                element: "learn_more_dialog",
                action: "impression"
            }), this.open()
        }, this.voteHelpful = function(a) {
            this.scribe({
                component: "search_result",
                element: "learn_more_dialog",
                action: a ? "helpful": "unhelpful"
            }), this.select("feedbackQuestionSelector").hide(), this.select("feedbackButtonsSelector").hide(), this.select("feedbackMessageSelector").fadeIn(), this.trigger(this.$dialog, "uiDialogContentChanged")
        }, this.after("initialize", function() {
            this.on("click", {
                helpfulSelector: function() {
                    this.voteHelpful(!0)
                },
                notHelpfulSelector: function() {
                    this.voteHelpful(!1)
                }
            }), this.on(this.attr.inProductHelpSelector, "click", this.openDialog), this.select("feedbackMessageSelector").hide()
        })
    }
    var defineComponent = require("core/component"), withDialog = require("app/ui/with_dialog"), withScribe = require("app/data/with_scribe");
    module.exports = defineComponent(inProductHelpDialog, withDialog, withScribe)
});
define("app/ui/search_actions", ["module", "require", "exports", "core/component", "core/i18n"], function(module, require, exports) {
    function searchActions() {
        this.defaultAttrs({
            saveOrRemoveSelector: ".js-toggle-saved-search-link",
            removeSearchSelector: ".js-remove-search",
            addSearchSelector: ".js-add-search",
            spinnerSelector: ".spinner-small",
            query: ""
        }), this.showSpinner = function() {
            this.select("saveOrRemoveSelector").hide(), this.select("spinnerSelector").show()
        }, this.hideSpinner = function() {
            this.select("spinnerSelector").hide(), this.select("saveOrRemoveSelector").show()
        }, this.addSavedSearch = function(a, b) {
            this.trigger("uiAddSavedSearch", {
                query: this.attr.query
            }), this.showSpinner()
        }, this.removeSavedSearch = function(a, b) {
            this.savedSearchId = this.select("removeSearchSelector").data("id"), this.trigger("uiRemoveSavedSearch", {
                id: this.savedSearchId
            }), this.showSpinner()
        }, this.savedSearchAdded = function(a, b) {
            this.select("saveOrRemoveSelector").removeClass("js-add-search").addClass("js-remove-search").data("id", b.id).attr("data-original-title", _('Remove this search')).text(_('Remove')), this.hideSpinner()
        }, this.savedSearchRemoved = function(a, b) {
            this.savedSearchId = this.select("removeSearchSelector").data("id");
            if (b.id !== this.savedSearchId)
                return;
            this.select("saveOrRemoveSelector").removeClass("js-remove-search").addClass("js-add-search").attr("data-original-title", _('Save this search')).text(_('Save')), this.hideSpinner()
        }, this.after("initialize", function() {
            this.on("click", {
                addSearchSelector: this.addSavedSearch,
                removeSearchSelector: this.removeSavedSearch
            }), this.on(document, "dataAddedSavedSearch", this.savedSearchAdded), this.on(document, "dataRemovedSavedSearch", this.savedSearchRemoved), this.on(document, "dataSavedSearchError", this.hideSpinner)
        })
    }
    var defineComponent = require("core/component"), _ = require("core/i18n");
    module.exports = defineComponent(searchActions)
});
define("app/boot/search", ["module", "require", "exports", "app/boot/app", "app/boot/logged_out", "core/utils", "app/boot/wtf_module", "app/boot/trends", "core/i18n", "app/data/media_thumbnails_scribe", "app/ui/navigation_links", "app/ui/dialogs/iph_search_result_dialog", "app/data/client_event", "app/ui/search_actions"], function(module, require, exports) {
    var bootApp = require("app/boot/app"), loggedOutBoot = require("app/boot/logged_out"), utils = require("core/utils"), whoToFollowModule = require("app/boot/wtf_module"), trends = require("app/boot/trends"), _ = require("core/i18n"), MediaThumbnailsScribe = require("app/data/media_thumbnails_scribe"), NavigationLinks = require("app/ui/navigation_links"), InProductHelpDialog = require("app/ui/dialogs/iph_search_result_dialog"), clientEvent = require("app/data/client_event"), SearchActions = require("app/ui/search_actions");
    module.exports = function(b) {
        bootApp(b), loggedOutBoot(b), clientEvent.scribeData.search_details = b.searchDetails, whoToFollowModule(".dashboard .js-wtf-module", b), trends(b), MediaThumbnailsScribe.attachTo(document, b), InProductHelpDialog.attachTo("#in_product_help_dialog"), SearchActions.attachTo(".js-search-actions", b), NavigationLinks.attachTo(".search-nav", {
            eventData: {
                scribeContext: {
                    component: "stream_nav"
                }
            }
        }), NavigationLinks.attachTo(".js-search-pivot", {
            eventData: {
                scribeContext: {
                    component: "stream_nav"
                }
            }
        }), NavigationLinks.attachTo(".js-stream-item .related", {
            eventData: {
                scribeContext: {
                    component: "related_queries"
                }
            }
        }), NavigationLinks.attachTo(".js-stream-item .spelling", {
            eventData: {
                scribeContext: {
                    component: "spelling_corrections"
                }
            }
        }), NavigationLinks.attachTo("a[data-nav='advanced-search']", {
            eventData: {
                scribeContext: {
                    component: "advanced_search"
                }
            }
        }), NavigationLinks.attachTo("a[data-nav='embedded-search']", {
            eventData: {
                scribeContext: {
                    component: "embedded_search"
                }
            }
        }), NavigationLinks.attachTo(".stream-timeline-gallery a[data-nav='list_name']", {
            eventData: {
                scribeContext: {
                    component: "timeline_gallery"
                }
            }
        }), NavigationLinks.attachTo(".stream-timeline-gallery a[data-nav='list_members']", {
            eventData: {
                scribeContext: {
                    component: "timeline_gallery"
                }
            }
        }), NavigationLinks.attachTo(".stream-timeline-gallery a[data-nav='curated_name']", {
            eventData: {
                scribeContext: {
                    component: "timeline_gallery"
                }
            }
        }), NavigationLinks.attachTo(".stream-timeline a[data-nav='list_name']", {
            eventData: {
                scribeContext: {
                    component: "timeline"
                }
            }
        }), NavigationLinks.attachTo(".stream-timeline a[data-nav='list_members']", {
            eventData: {
                scribeContext: {
                    component: "timeline"
                }
            }
        }), NavigationLinks.attachTo(".stream-timeline a[data-nav='curated_name']", {
            eventData: {
                scribeContext: {
                    component: "timeline"
                }
            }
        }), NavigationLinks.attachTo("a[data-nav='events']", {
            eventData: {
                scribeContext: {
                    component: "onebox"
                }
            }
        })
    }
});
define("app/ui/timelines/with_story_pagination", ["module", "require", "exports"], function(module, require, exports) {
    function withStoryPagination() {
        this.isOldItem = function(a) {
            return a.is_scrolling_request
        }, this.isNewItem = function(a) {
            return a.is_refresh_request
        }, this.wasNewItemsRequest = function(a) {
            return !!a.refresh_cursor
        }, this.wasOldItemsRequest = function(a) {
            return !!a.scroll_cursor
        }, this.wasRangeRequest = function() {
            return !1
        }, this.shouldGetOldItems = function() {
            return this.has_more_items
        }, this.getOldItemsData = function() {
            return this.withTopicData({
                scroll_cursor: this.scroll_cursor
            })
        }, this.getNewItemsData = function() {
            return this.withTopicData({
                refresh_cursor: this.refresh_cursor,
                isNewItemRequest: !0
            })
        }, this.withTopicData = function(a) {
            return this.topic && (a.topic = this.topic), a
        }, this.resetStateVariables = function(a) {
            a = a || {}, a.topic && (this.topic = a.topic), this.resetScrollCursor(a), this.resetRefreshCursor(a), this.trigger("uiStoryPaginationReset")
        }, this.resetScrollCursor = function(a) {
            a.scroll_cursor ? (this.scroll_cursor = a.scroll_cursor, this.select("containerSelector").attr("data-scroll-cursor", this.scroll_cursor)) : a.is_scrolling_request ? (this.has_more_items=!1, this.scroll_cursor = null, this.select("containerSelector").removeAttr("data-scroll-cursor")) : this.scroll_cursor = this.select("containerSelector").attr("data-scroll-cursor") || null
        }, this.clearScrollCursor = function() {
            this.scroll_cursor = "", this.select("containerSelector").attr("data-scroll-cursor", this.scroll_cursor)
        }, this.resetRefreshCursor = function(a) {
            a.refresh_cursor ? (this.refresh_cursor = a.refresh_cursor, this.select("containerSelector").attr("data-refresh-cursor", this.refresh_cursor)) : this.refresh_cursor = this.select("containerSelector").attr("data-refresh-cursor") || null
        }, this.onTimelineReset = function(a, b) {
            this.resetStateVariables(b)
        }, this.after("initialize", function(a, b) {
            this.has_more_items=!0, this.resetStateVariables(b), this.on("uiTimelineReset", this.onTimelineReset)
        })
    }
    module.exports = withStoryPagination
});
define("app/ui/gallery/with_grid", ["module", "require", "exports", "app/utils/image/image_loader", "core/i18n"], function(module, require, exports) {
    function withGrid() {
        this.defaultAttrs({
            keepUnrenderedMediaItems: !1,
            numMediaItemsToKeep: 30,
            requiredAttrsForGallery: ["data-resolved-url-large", "data-source-url", "data-tweet-id", "data-status-id", "data-height", "data-width", "class"],
            scribeRows: !1,
            gridWidth: 584,
            gridHeight: 120,
            gridMargin: 8,
            gridRatio: 3,
            gridPanoRatio: 2.5,
            mediaSelector: ".media-thumbnail:not(.twitter-timeline-link):not(.card2-grid-item):not(.profile-picture)",
            mediaOverlaySelector: ".media-overlay",
            mediaRowFirstSelector: ".media-thumbnail.clear:not(.twitter-timeline-link):not(.card2-grid-item):not(.profile-picture)",
            gridFooterSelector: ".stream-media-items-footer"
        }), this.getGridWidth = function() {
            return this.attr.gridWidth
        }, this.render = function() {
            this.currentRow = this.getCurrentRow();
            var a = this.getUnprocessedMedia();
            if (!a.length) {
                this.scribeResults();
                return 
            }
            var b = 0, c = 0, d = [];
            for (var e = 0; e < a.length; e++) {
                if (this.attr.gridRowLimit && this.currentRow > this.attr.gridRowLimit) {
                    if (this.attr.keepUnrenderedMediaItems && e < this.attr.numMediaItemsToKeep) {
                        this.processHiddenMedia(a.eq(e));
                        continue
                    }
                    a.slice(e).remove();
                    break
                }
                var f = $(a.get(e));
                !b && (b = parseInt(f.attr("data-height")));
                var g = this.scaleGridMedia(f, b);
                if (isNaN(g)) {
                    f.remove();
                    continue
                }
                c += g, d.push(f), c / b >= this.attr.gridRatio && (this.setGridRow(d, c, b), this.currentRow++, this.setCurrentRow(), c = 0, b = 0, d = [])
            }
            this.renderLastRow(), this.moveFooter(), this.scribeResults()
        }, this.processHiddenMedia = function(a) {
            var b = this.attr.requiredAttrsForGallery, c = [];
            $.each(a[0].attributes, function() {
                this.specified && b.indexOf(this.name) < 0 && c.push(this.name)
            }), c.forEach(function(b) {
                a.removeAttr(b)
            }), a.attr("data-grid-processed", "true"), a.hide(), a.empty()
        }, this.renderLastRow = function() {
            var a = this.getUnprocessedMedia();
            if (!a.length)
                return;
            a.each(function(a, b) {
                var c = $(b);
                this.scaleGridMedia(c, this.attr.gridHeight, !0), this.renderMedia(c), c.addClass("enabled")
            }.bind(this))
        }, this.renderAll = function() {
            clearTimeout(this.renderDelay), this.renderDelay = setTimeout(this.render.bind(this), 20)
        }, this.setCurrentRow = function() {
            $(this.node).attr("data-processed-rows", this.currentRow)
        }, this.getCurrentRow = function() {
            var a = parseInt($(this.node).attr("data-processed-rows"));
            return a ? this.currentRow = a : this.currentRow = 1, this.currentRow
        }, this.scaleGridMedia = function(a, b, c) {
            var d = parseInt(a.attr("data-height")), e = parseInt(a.attr("data-width")), f = b / d * e;
            return e / d > this.attr.gridPanoRatio && (f = b * this.attr.gridPanoRatio, a.attr("data-pano", "true")), a.attr({
                "scaled-height": b,
                "scaled-width": f
            }), c && (a.height(b), a.width(f)), f
        }, this.setGridRow = function(a, b, c) {
            var d = this.getGridWidth() - a.length * this.attr.gridMargin, e = d / b, f = c * e;
            $.each(a, function(a, b) {
                var c = $(b), d = parseInt(c.attr("scaled-width")) * e;
                c.height(f), c.width(d), c.attr("scaled-height", f), c.attr("Scaled-width", d), c.attr("data-grid-processed", "true"), c.addClass("enabled"), a == 0 && c.addClass("clear"), this.renderMedia(c), this.moveFooter()
            }.bind(this))
        }, this.moveFooter = function() {
            if (this.attr.gridRowLimit)
                return;
            var a = this.select("gridFooterSelector");
            a.length && this.select("itemsSelector").append(a)
        }, this.scribeResults = function() {
            if (this.attr.scribeRows) {
                var a = this.getUnscribedMedia(), b = {
                    thumbnails: [],
                    scribeContext: {
                        component: "media_gallery"
                    }
                };
                $.each(a, function(a, c) {
                    b.thumbnails.push($(c).attr("data-url")), $(c).attr("data-scribed", !0)
                }), this.trigger("uiMediaGalleryResults", b)
            }
        }, this.getMedia = function() {
            return this.select("mediaSelector")
        }, this.getUnprocessedMedia = function() {
            return this.getMedia().filter(':not([data-grid-processed="true"])')
        }, this.getUnscribedMedia = function() {
            return this.getMedia().filter(':not([data-scribed="true"])[data-grid-processed="true"]')
        }, this.markFailedMedia = function(a) {
            var b;
            if (a.hasClass("clear")) {
                b = a.next(this.attr.mediaSelector);
                if (!b.length)
                    return 
            } else {
                b = a.prev(this.attr.mediaSelector);
                while (b.length&&!b.hasClass("clear"))
                    b = b.prev(this.attr.mediaSelector)
            }
            b.attr("data-grid-processed", "false"), b.nextAll(this.attr.mediaSelector).attr("data-grid-processed", "false"), b.nextAll(this.attr.mediaSelector).removeClass("clear"), clearTimeout(this.resetTimer), this.resetTimer = setTimeout(this.render.bind(this), 50)
        }, this.renderMedia = function(a) {
            var b = $(a);
            if (b.attr("data-loaded"))
                return;
            var c = function(a) {
                this.loadThumbSuccess(b, a)
            }.bind(this), d = function() {
                this.loadThumbFail(b)
            }.bind(this);
            imageLoader.load(b.attr("data-resolved-url-small"), c, d)
        }, this.loadThumbSuccess = function(a, b) {
            if (a.attr("data-pano")) {
                var c = a.height() / parseInt(a.attr("data-height")) * parseInt(a.attr("data-width"));
                b.width(c), b.css("margin-left", - (c - a.width()) / 2 + "px")
            }
            a.prepend(b), a.attr("data-loaded", !0)
        }, this.loadThumbFail = function(a) {
            this.markFailedMedia(a), a.remove()
        }, this.openGallery = function(a) {
            a.preventDefault(), a.stopPropagation();
            var b = $(a.target).closest(this.attr.mediaSelector);
            this.trigger(a.target, "uiOpenGallery", {
                title: b.hasClass("video") ? _('Video'): _('Photo')
            });
            var c = b.attr("data-url"), d = b.hasClass("video") ? "video": b.closest(this.attr.mediaSelector).hasClass("video") ? "video": "photo", e = {
                url: c,
                mediaType: d,
                scribeContext: {
                    component: "media_gallery"
                }
            };
            this.trigger("uiMediaThumbnailClick", e)
        }, this.after("initialize", function() {
            this.render(), this.on("click", {
                mediaOverlaySelector: this.openGallery
            }), this.on("uiHasInjectedOldTimelineItems", this.renderAll)
        })
    }
    var imageLoader = require("app/utils/image/image_loader"), _ = require("core/i18n");
    module.exports = withGrid
});
define("app/ui/timelines/base_search_timeline", ["module", "require", "exports", "app/ui/timelines/paginating_timeline", "app/ui/timelines/with_story_pagination", "app/ui/gallery/with_grid", "app/ui/with_user_actions", "app/ui/with_interaction_data"], function(module, require, exports) {
    function baseSearchTimeline() {
        this.defaultAttrs({
            gridRowLimit: 2,
            separationModuleSelector: ".separation-module",
            prevToModuleClass: "before-module",
            userGalleryItemSelector: ".user-gallery-item",
            userGalleryFacepileItemSelector: ".js-user-gallery-facepile",
            prevToUserGalleryItemClass: "before-user-gallery",
            userGallerySelector: ".stream-user-gallery",
            userGalleryScribeComponent: "user_gallery",
            eventData: {
                scribeContext: {
                    component: ""
                }
            }
        }), this.setPrevToModuleClass = function() {
            this.select("separationModuleSelector").prev().addClass(this.attr.prevToModuleClass)
        }, this.initialItemsDisplayed = function() {
            var a = this.select("genericItemSelector"), b = [], c = [], d = function(a, d) {
                if (!$(d).data("item-type"))
                    return;
                var e = $(d), f = this.findFirstItemContent(e);
                !f.length && e.is(this.attr.streamItemContentsSelector) && (f = e);
                var g = this.interactionData(f);
                switch (g.itemType) {
                case"tweet":
                    b.push(g);
                    break;
                case"user":
                    c.push(g)
                }
            }.bind(this);
            for (var e = 0, f = a.length; e < f; e++)
                d(e, a[e]);
            this.reportUsersAndTweets(c, b)
        }, this.reportItemsDisplayed = function(a, b) {
            var c = [], d = [];
            b.items.forEach(function(a) {
                switch (a.itemType) {
                case"tweet":
                    d.push(a);
                    break;
                case"user":
                    c.push(a)
                }
            }), this.reportUsersAndTweets(c, d)
        }, this.reportUsersAndTweets = function(a, b) {
            this.trigger("uiTweetsDisplayed", {
                tweets: b
            }), this.trigger("uiUsersDisplayed", {
                users: a
            })
        }, this.setItemType = function(a) {
            var b = a.closest(this.attr.genericItemSelector), c = b.data("item-type");
            this.attr.itemType = c, this.itemInUserGallery(b) ? this.attr.eventData.scribeContext.component = this.attr.userGalleryScribeComponent : this.attr.eventData.scribeContext.component = c
        }, this.itemInUserGallery = function(a) {
            return a.is(this.attr.userGalleryItemSelector) || a.is(this.attr.userGalleryFacepileItemSelector)
        }, this.getItemPosition = function(a) {
            if (!this.itemInUserGallery(a))
                return - 1;
            var b = a.closest(this.attr.userGallerySelector), c = b.find(this.attr.genericInteractionItemSelector), d = c.index(a);
            if (d!=-1)
                return d
        }, this.after("initialize", function() {
            this.setPrevToModuleClass(), this.initialItemsDisplayed(), this.on("uiHasInjectedNewTimeline uiHasInjectedOldTimelineItems uiHasInjectedRangeTimelineItems", this.reportItemsDisplayed)
        })
    }
    var PaginatingTimeline = require("app/ui/timelines/paginating_timeline"), withStoryPagination = require("app/ui/timelines/with_story_pagination"), withGrid = require("app/ui/gallery/with_grid"), withUserActions = require("app/ui/with_user_actions"), withInteractionData = require("app/ui/with_interaction_data");
    module.exports = PaginatingTimeline.mixin(baseSearchTimeline, withStoryPagination, withGrid, withUserActions, withInteractionData)
});
define("app/ui/with_gallery_scribe_data", ["module", "require", "exports"], function(module, require, exports) {
    function withGalleryScribeData() {
        this.defaultAttrs({
            genericItemSelector: ".js-stream-item",
            userGalleryItemSelector: ".user-gallery-item",
            userGalleryFacepileItemSelector: ".js-user-gallery-facepile",
            userGallerySelector: ".stream-user-gallery",
            userGalleryScribeComponent: "user_gallery",
            eventData: {
                scribeContext: {
                    component: ""
                }
            }
        }), this.setItemType = function(a) {
            var b = a.closest(this.attr.genericItemSelector), c = b.data("item-type");
            this.attr.itemType = c, this.itemInUserGallery(b) ? this.attr.eventData.scribeContext.component = this.attr.userGalleryScribeComponent : this.attr.eventData.scribeContext.component = c
        }, this.itemInUserGallery = function(a) {
            return a.is(this.attr.userGalleryItemSelector) || a.is(this.attr.userGalleryFacepileItemSelector)
        }, this.getItemPosition = function(a) {
            if (!this.itemInUserGallery(a))
                return - 1;
            var b = a.closest(this.attr.userGallerySelector), c = b.find(this.attr.genericInteractionItemSelector), d = c.index(a);
            if (d!=-1)
                return d
        }
    }
    module.exports = withGalleryScribeData
});
define("app/boot/universal_timeline", ["module", "require", "exports", "app/boot/timeline", "app/boot/tweets", "app/boot/help_pips", "app/ui/expando/close_all_button", "app/ui/timelines/base_search_timeline", "app/ui/timeline_tweet_actions", "app/ui/profile/highline_tweet_stats", "app/ui/with_gallery_scribe_data", "app/ui/with_dismiss_tweet", "app/ui/timelines/with_dismissible_promoted_tweets", "app/ui/more_tweet_actions_dropdown", "core/utils"], function(module, require, exports) {
    function initialize(a) {
        var b = utils.merge(a, {
            endpoint: a.search_endpoint
        });
        timelineBoot(b), tweetsBoot("#timeline", utils.merge(b, {
            excludeUserActions: !0
        }));
        var c = [withGalleryScribeData, withDismissTweet];
        HighlineTweetStats.attachTo(document), TimelineTweetActions.mixin.apply(this, c).attachTo("#timeline", b), MoreTweetActionsDropdown.mixin(withGalleryScribeData).attachTo("#timeline", b), b.help_pips_decider && helpPipsBoot(b), CloseAllButton.attachTo("#close-all-button"), BaseSearchTimeline.mixin(withDismissiblePromotedTweets).attachTo("#timeline", b, {
            keepUnrenderedMediaItems: !0,
            gridRowLimit: 2,
            gridHeight: 180,
            gridWidth: 582,
            gridRatio: 2,
            scribeRows: !0,
            tweetWithReplyDialogSelector: ".explore-stream .tweet, .simple-tweet"
        })
    }
    var timelineBoot = require("app/boot/timeline"), tweetsBoot = require("app/boot/tweets"), helpPipsBoot = require("app/boot/help_pips"), CloseAllButton = require("app/ui/expando/close_all_button"), BaseSearchTimeline = require("app/ui/timelines/base_search_timeline"), TimelineTweetActions = require("app/ui/timeline_tweet_actions"), HighlineTweetStats = require("app/ui/profile/highline_tweet_stats"), withGalleryScribeData = require("app/ui/with_gallery_scribe_data"), withDismissTweet = require("app/ui/with_dismiss_tweet"), withDismissiblePromotedTweets = require("app/ui/timelines/with_dismissible_promoted_tweets"), MoreTweetActionsDropdown = require("app/ui/more_tweet_actions_dropdown"), utils = require("core/utils");
    module.exports = initialize
});
define("app/ui/search/spelling_corrections", ["module", "require", "exports", "core/component"], function(module, require, exports) {
    function SpellingCorrections() {
        this.defaultAttrs({
            dismissSelector: ".js-action-dismiss-correction",
            spellingCorrectionSelector: ".corrected-query",
            spellingRevertSelector: ".spelling-revert-query",
            wrapperNodeSelector: ""
        }), this.dismissCorrection = function(a) {
            var b = this.select("wrapperNodeSelector");
            b.length == 0 && (b = this.$node), b.fadeOut(250, function() {
                $(this).hide()
            }), this.scribeEvent("dismiss", "spellingCorrectionSelector", "spelling_corrections")
        }, this.clickCorrection = function(a) {
            this.scribeEvent("search", "spellingCorrectionSelector", "spelling_corrections")
        }, this.clickSpellingRevert = function(a) {
            this.scribeEvent("search", "spellingRevertSelector", "spelling_revert")
        }, this.scribeEvent = function(a, b, c) {
            var d = this.select(b);
            this.trigger("uiSearchAssistanceAction", {
                component: c,
                action: a,
                query: d.data("query"),
                items: [{
                    name: d.data("search-assistance")
                }
                ]
            })
        }, this.after("initialize", function() {
            this.on("click", {
                dismissSelector: this.dismissCorrection,
                spellingCorrectionSelector: this.clickCorrection,
                spellingRevertSelector: this.clickSpellingRevert
            })
        })
    }
    var defineComponent = require("core/component");
    module.exports = defineComponent(SpellingCorrections)
});
define("app/ui/search/related_queries", ["module", "require", "exports", "core/component"], function(module, require, exports) {
    function RelatedQueries() {
        this.defaultAttrs({
            relatedQuerySelector: ".related-query"
        }), this.relatedQueryClick = function(a) {
            this.trigger("uiSearchAssistanceAction", {
                component: "related_queries",
                action: "search",
                query: $(a.target).data("query"),
                items: [{
                    name: $(a.target).data("search-assistance")
                }
                ]
            })
        }, this.after("initialize", function() {
            this.on("click", {
                relatedQuerySelector: this.relatedQueryClick
            })
        })
    }
    var defineComponent = require("core/component");
    module.exports = defineComponent(RelatedQueries)
});
define("app/data/search_assistance_scribe", ["module", "require", "exports", "core/component", "app/data/with_scribe"], function(module, require, exports) {
    function SearchAssistanceScribe() {
        this.scribeSearchAssistance = function(a, b) {
            this.scribe({
                section: "universal_top",
                component: b.component,
                action: b.action
            }, {
                query: b.query,
                items: b.items
            })
        }, this.after("initialize", function() {
            this.on("uiSearchAssistanceAction", this.scribeSearchAssistance)
        })
    }
    var defineComponent = require("core/component"), withScribe = require("app/data/with_scribe");
    module.exports = defineComponent(SearchAssistanceScribe, withScribe)
});
define("app/ui/events/with_update_nfl_game", ["module", "require", "exports"], function(module, require, exports) {
    function withUpdateNFLGame() {
        this.defaultAttrs({
            statusSelector: ".status",
            vsTextSelector: ".vs-text",
            scoreSelector: ".score",
            teamAScoreSelector: ".score .team-a",
            teamBScoreSelector: ".score .team-b",
            hiddenClass: "hidden",
            changedClass: "changed",
            transitionDuration: 1e3
        }), this.updateNFLGame = function(a, b) {
            var c=!1;
            if (b.show_score) {
                var d = a.find(this.attr.teamAScoreSelector).text(), e = a.find(this.attr.teamBScoreSelector).text(), f = b.team_a || {}, g = b.team_b || {}, h = f.score || "", i = g.score || "";
                h !== d && (a.find(this.attr.teamAScoreSelector).text(h), c=!0), i !== e && (a.find(this.attr.teamBScoreSelector).text(i), c=!0), a.find(this.attr.vsTextSelector).addClass(this.attr.hiddenClass), a.find(this.attr.scoreSelector).removeClass(this.attr.hiddenClass)
            } else 
                a.find(this.attr.scoreSelector).addClass(this.attr.hiddenClass), a.find(this.attr.vsTextSelector).removeClass(this.attr.hiddenClass);
            var j = a.find(this.attr.statusSelector).text(), k = b.status || "";
            k !== j && a.find(this.attr.statusSelector).text(k), c&&!a.hasClass(this.attr.hiddenClass)&&!a.hasClass(this.attr.changedClass) && (a.addClass(this.attr.changedClass), setTimeout(function() {
                a.removeClass(this.attr.changedClass), this.trigger("uiNFLGameUpdate")
            }.bind(this), this.attr.transitionDuration))
        }
    }
    module.exports = withUpdateNFLGame
});
define("app/ui/events/with_nfl_polling", ["module", "require", "exports"], function(module, require, exports) {
    function withNFLPolling() {
        this.onGotMoreTimelineItems = function(a, b) {
            b.nfl_update_items && this.trigger(document, "dataNFLUpdateItems", {
                nfl_update_items: b.nfl_update_items
            })
        }, this.after("initialize", function() {
            this.on(document, "dataGotMoreTimelineItems", this.onGotMoreTimelineItems)
        })
    }
    module.exports = withNFLPolling
});
define("app/ui/events/nfl_game_header", ["module", "require", "exports", "core/component", "app/ui/events/with_update_nfl_game", "app/ui/events/with_nfl_polling"], function(module, require, exports) {
    function nflGameHeader() {
        this.defaultAttrs({
            innerSelector: ".nfl-sidebar-inner"
        }), this.updateGame = function(a, b) {
            var c = b.nfl_update_items, d = this.$node.attr("data-id");
            c.hasOwnProperty(d) && this.updateNFLGame(this.select("innerSelector"), c[d])
        }, this.after("initialize", function() {
            this.on(document, "dataNFLUpdateItems", this.updateGame)
        })
    }
    var defineComponent = require("core/component"), withUpdateNFLGame = require("app/ui/events/with_update_nfl_game"), withNFLPolling = require("app/ui/events/with_nfl_polling");
    module.exports = defineComponent(nflGameHeader, withUpdateNFLGame, withNFLPolling)
});
define("app/ui/events/nfl_games_module", ["module", "require", "exports", "core/component", "app/ui/events/with_update_nfl_game", "app/ui/events/with_nfl_polling"], function(module, require, exports) {
    function nflGamesModule() {
        this.defaultAttrs({
            seeMoreButtonSelector: ".nfl-games-see-more",
            listItemSelector: ".nfl-game-item",
            hiddenListItemSelector: ".hidden.nfl-game-item",
            hideButtonDuration: 50
        }), this.updateNFLGames = function(a, b) {
            var c = b.nfl_update_items, d = this.select("listItemSelector");
            d.each(function(_, a) {
                var b = $(a), d = b.attr("data-id");
                c.hasOwnProperty(d) && this.updateNFLGame(b, c[d])
            }.bind(this))
        }, this.handleSeeMoreClick = function(a) {
            this.select("seeMoreButtonSelector").hide(this.attr.hideButtonDuration, function() {
                this.select("hiddenListItemSelector").slideDown(function() {
                    $(this).removeClass("hidden")
                })
            }.bind(this)), this.trigger("uiNFLSeeMoreGamesButtonClicked")
        }, this.after("initialize", function() {
            this.on("click", {
                seeMoreButtonSelector: this.handleSeeMoreClick
            }), this.on(document, "dataNFLUpdateItems", this.updateNFLGames), this.trigger("uiHasDisplayedGamesModule")
        })
    }
    var defineComponent = require("core/component"), withUpdateNFLGame = require("app/ui/events/with_update_nfl_game"), withNFLPolling = require("app/ui/events/with_nfl_polling");
    module.exports = defineComponent(nflGamesModule, withUpdateNFLGame, withNFLPolling)
});
define("app/data/nfl_games_module_scribe", ["module", "require", "exports", "core/component", "app/data/with_scribe", "app/ui/navigation_links"], function(module, require, exports) {
    function nflGamesModuleScribe() {
        this.scribeModuleImpression = function(a, b) {
            var c = {
                component: "games_module",
                action: "impression"
            };
            this.scribe(c, b)
        }, this.scribeSeeMoreModulesButton = function(a, b) {
            var c = {
                component: "games_module",
                element: "see_more_button",
                action: "click"
            };
            this.scribe(c, b)
        }, this.after("initialize", function() {
            NavigationLinks.attachTo(".nfl-games.module .nfl-game-item a", {
                eventData: {
                    scribeContext: {
                        component: "games_module"
                    }
                }
            }), this.on("uiNFLSeeMoreGamesButtonClicked", this.scribeSeeMoreModulesButton), this.on("uiHasDisplayedGamesModule", this.scribeModuleImpression)
        })
    }
    var defineComponent = require("core/component"), withScribe = require("app/data/with_scribe"), NavigationLinks = require("app/ui/navigation_links");
    module.exports = defineComponent(nflGamesModuleScribe, withScribe)
});
define("app/data/nfl_timeline_header_scribe", ["module", "require", "exports", "core/component", "app/data/with_scribe", "app/ui/navigation_links"], function(module, require, exports) {
    function nflTimelineHeaderScribe() {
        this.after("initialize", function() {
            NavigationLinks.attachTo(".js-nav.nfl-navigation-header", {
                eventData: {
                    scribeContext: {
                        component: "timeline_header"
                    }
                }
            })
        })
    }
    var defineComponent = require("core/component"), withScribe = require("app/data/with_scribe"), NavigationLinks = require("app/ui/navigation_links");
    module.exports = defineComponent(nflTimelineHeaderScribe, withScribe)
});
define("app/pages/search/search", ["module", "require", "exports", "app/boot/search", "core/utils", "app/boot/universal_timeline", "app/ui/search/spelling_corrections", "app/ui/search/related_queries", "app/data/search_assistance_scribe", "app/ui/dynamic_card_watcher", "app/ui/events/nfl_game_header", "app/ui/events/nfl_games_module", "app/data/nfl_games_module_scribe", "app/data/nfl_timeline_header_scribe", "app/ui/timelines/tweet_visibility", "app/data/tweet_visibility_scribe"], function(module, require, exports) {
    var searchBoot = require("app/boot/search"), utils = require("core/utils"), universalTimelineBoot = require("app/boot/universal_timeline"), SpellingCorrections = require("app/ui/search/spelling_corrections"), RelatedQueries = require("app/ui/search/related_queries"), SearchAssistanceScribe = require("app/data/search_assistance_scribe"), DynamicCardWatcher = require("app/ui/dynamic_card_watcher"), NFLGameHeader = require("app/ui/events/nfl_game_header"), NFLGamesModule = require("app/ui/events/nfl_games_module"), NFLGamesModuleScribe = require("app/data/nfl_games_module_scribe"), NFLTimelineHeaderScribe = require("app/data/nfl_timeline_header_scribe"), TweetVisibility = require("app/ui/timelines/tweet_visibility"), TweetVisibilityScribe = require("app/data/tweet_visibility_scribe");
    module.exports = function(b) {
        searchBoot(b), universalTimelineBoot(b), DynamicCardWatcher.attachTo(document, {
            containerSelector: "#timeline",
            viewportThreshold: b.hasVineFilter ? 0: 200
        }), RelatedQueries.attachTo("#timeline"), SpellingCorrections.attachTo("#timeline", utils.merge(b, {
            wrapperNodeSelector: ".stream-spelling-corrections"
        })), SearchAssistanceScribe.attachTo(document, b), NFLGamesModuleScribe.attachTo(document, b), NFLTimelineHeaderScribe.attachTo(document, b), NFLGameHeader.attachTo(".nfl-game-header"), NFLGamesModule.attachTo(".nfl-games.module"), TweetVisibility.attachTo("#timeline", {
            eventData: b.eventData
        }), TweetVisibilityScribe.attachTo(document)
    }
});
define("app/ui/timelines/media_timeline", ["module", "require", "exports", "core/component", "app/ui/timelines/base_timeline", "app/ui/timelines/with_old_items", "app/ui/gallery/with_grid", "app/ui/timelines/with_story_pagination", "app/ui/with_item_actions"], function(module, require, exports) {
    function mediaTimeline() {
        this.defaultAttrs({
            itemType: "media"
        }), this.after("initialize", function() {
            this.attr.allowInfiniteScroll || this.hideMoreSpinner()
        })
    }
    var defineComponent = require("core/component"), BaseTimeline = require("app/ui/timelines/base_timeline"), withOldItems = require("app/ui/timelines/with_old_items"), withGrid = require("app/ui/gallery/with_grid"), withStoryPagination = require("app/ui/timelines/with_story_pagination"), withItemActions = require("app/ui/with_item_actions");
    module.exports = BaseTimeline.mixin(mediaTimeline, withStoryPagination, withOldItems, withItemActions, withGrid)
});
define("app/boot/media_timeline", ["module", "require", "exports", "app/boot/timeline", "app/ui/timelines/media_timeline", "core/utils", "app/ui/timeline_tweet_actions", "app/ui/profile/highline_tweet_stats", "app/ui/more_tweet_actions_dropdown"], function(module, require, exports) {
    function initialize(a, b, c, d) {
        var e = utils.merge(a, {
            endpoint: b,
            itemType: c,
            eventData: {
                scribeContext: {
                    component: d || c
                }
            }
        });
        timelineBoot(e), TimelineTweetActions.attachTo("#timeline", e, {
            tweetItemSelector: ".grid-tweet"
        }), MoreTweetActionsDropdown.attachTo("#timeline", e, {
            tweetItemSelector: ".grid-tweet"
        });
        var f = {
            itemsSelector: "#stream-items-id .media-grid",
            gridHeight: 180,
            gridRatio: 2,
            tweetWithReplyDialogSelector: ".grid-tweet"
        };
        HighlineTweetStats.attachTo(document), MediaTimeline.attachTo("#timeline", e, f)
    }
    var timelineBoot = require("app/boot/timeline"), MediaTimeline = require("app/ui/timelines/media_timeline"), utils = require("core/utils"), TimelineTweetActions = require("app/ui/timeline_tweet_actions"), HighlineTweetStats = require("app/ui/profile/highline_tweet_stats"), MoreTweetActionsDropdown = require("app/ui/more_tweet_actions_dropdown");
    module.exports = initialize
});
define("app/pages/search/media", ["module", "require", "exports", "app/boot/search", "app/boot/tweets", "app/boot/media_timeline"], function(module, require, exports) {
    var searchBoot = require("app/boot/search"), tweetsBoot = require("app/boot/tweets"), mediaTimelineBoot = require("app/boot/media_timeline");
    module.exports = function(b) {
        searchBoot(b), tweetsBoot("#timeline", b), mediaTimelineBoot(b, b.search_endpoint, "tweet")
    }
});
define("app/pages/simple_t1", ["module", "require", "exports", "app/boot/app"], function(module, require, exports) {
    var bootApp = require("app/boot/app");
    module.exports = function(a) {
        bootApp(a)
    }
});
define("lib/hogan/template", ["module", "require", "exports"], function(module, require, exports) {
    var Hogan = {};
    (function(a, b) {
        function c(a, b, c) {
            var d, e;
            return b && typeof b == "object" && (b[a] != null ? d = b[a] : c && b.get && typeof b.get == "function" && (d = b.get(a))), d
        }
        function d(a, b, c, d) {
            function e() {}
            function f() {}
            e.prototype = a, f.prototype = a.subs;
            var g, h = new e;
            h.subs = new f, h.subsText = {}, h.ib();
            for (g in b)
                h.subs[g] = b[g], h.subsText[g] = d;
            for (g in c)
                h.partials[g] = c[g];
            return h
        }
        function k(a) {
            return String(a === null || a === undefined ? "" : a)
        }
        function l(a) {
            return a = k(a), j.test(a) ? a.replace(e, "&amp;").replace(f, "&lt;").replace(g, "&gt;").replace(h, "&#39;").replace(i, "&quot;") : a
        }
        a.Template = function(a, b, c, d) {
            a = a || {}, this.r = a.code || this.r, this.c = c, this.options = d || {}, this.text = b || "", this.partials = a.partials || {}, this.subs = a.subs || {}, this.ib()
        }, a.Template.prototype = {
            r: function(a, b, c) {
                return ""
            },
            v: l,
            t: k,
            render: function(b, c, d) {
                return this.ri([b], c || {}, d)
            },
            ri: function(a, b, c) {
                return this.r(a, b, c)
            },
            ep: function(a, b) {
                var c = this.partials[a], e = b[c.name];
                if (c.instance && c.base == e)
                    return c.instance;
                if (typeof e == "string") {
                    if (!this.c)
                        throw new Error("No compiler available.");
                    e = this.c.compile(e, this.options)
                }
                return e ? (this.partials[a].base = e, c.subs && (this.activeSub === undefined && (b.stackText = this.text), e = d(e, c.subs, c.partials, b.stackText || this.text)), this.partials[a].instance = e, e) : null
            },
            rp: function(a, b, c, d) {
                var e = this.ep(a, c);
                return e ? e.ri(b, c, d) : ""
            },
            rs: function(a, b, c) {
                var d = a[a.length - 1];
                if (!m(d)) {
                    c(a, b, this);
                    return 
                }
                for (var e = 0; e < d.length; e++)
                    a.push(d[e]), c(a, b, this), a.pop()
            },
            s: function(a, b, c, d, e, f, g) {
                var h;
                return m(a) && a.length === 0?!1 : (typeof a == "function" && (a = this.ms(a, b, c, d, e, f, g)), h=!!a, !d && h && b && b.push(typeof a == "object" ? a : b[b.length - 1]), h)
            },
            d: function(a, b, d, e) {
                var f, g = a.split("."), h = this.f(g[0], b, d, e), i = this.options.modelGet, j = null;
                if (a === "." && m(b[b.length - 2]))
                    h = b[b.length - 1];
                else 
                    for (var k = 1; k < g.length; k++)
                        f = c(g[k], h, i), f != null ? (j = h, h = f) : h = "";
                return e&&!h?!1 : (!e && typeof h == "function" && (b.push(j), h = this.mv(h, b, d), b.pop()), h)
            },
            f: function(a, b, d, e) {
                var f=!1, g = null, h=!1, i = this.options.modelGet;
                for (var j = b.length - 1; j >= 0; j--) {
                    g = b[j], f = c(a, g, i);
                    if (f != null) {
                        h=!0;
                        break
                    }
                }
                return h ? (!e && typeof f == "function" && (f = this.mv(f, b, d)), f) : e?!1 : ""
            },
            ls: function(a, b, c, d, e) {
                var f = this.options.delimiters;
                return this.options.delimiters = e, this.b(this.ct(k(a.call(b, d)), b, c)), this.options.delimiters = f, !1
            },
            ct: function(a, b, c) {
                if (this.options.disableLambda)
                    throw new Error("Lambda features disabled.");
                return this.c.compile(a, this.options).render(b, c)
            },
            b: b ? function(a) {
                this.buf.push(a)
            }
            : function(a) {
                this.buf += a
            },
            fl: b ? function() {
                var a = this.buf.join("");
                return this.buf = [], a
            }
            : function() {
                var a = this.buf;
                return this.buf = "", a
            },
            ib: function() {
                this.buf = b ? [] : ""
            },
            ms: function(a, b, c, d, e, f, g) {
                var h, i = b[b.length - 1], j = a.call(i);
                return typeof j == "function" ? d?!0 : (h = this.activeSub && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text, this.ls(j, i, c, h.substring(e, f), g)) : j
            },
            mv: function(a, b, c) {
                var d = b[b.length - 1], e = a.call(d);
                return typeof e == "function" ? this.ct(k(e.call(d)), d, c) : e
            },
            sub: function(a, b, c, d) {
                var e = this.subs[a];
                e && (this.activeSub = a, e(b, c, this, d), this.activeSub=!1)
            }
        };
        var e = /&/g, f = /</g, g = />/g, h = /\'/g, i = /\"/g, j = /[&<>\"\']/, m = Array.isArray || function(a) {
            return Object.prototype.toString.call(a) === "[object Array]"
        }
    })(typeof exports != "undefined" ? exports : Hogan)
});
define("lib/mediaelement", ["module", "require", "exports"], function(module, require, exports) {
    function onYouTubePlayerAPIReady() {
        mejs.YouTubeApi.iFrameReady()
    }
    function onYouTubePlayerReady(a) {
        mejs.YouTubeApi.flashReady(a)
    }
    /*!
    * MediaElement.js
    * HTML5 <video> and <audio> shim and player
    * http://mediaelementjs.com/
    *
    * Creates a JavaScript object that mimics HTML5 MediaElement API
    * for browsers that don't understand HTML5 or can't play the provided codec
    * Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
    *
    * Copyright 2010-2014, John Dyer (http://j.hn)
    * License: MIT
    *
    */
    var mejs = mejs || {};
    mejs.version = "2.14.2", mejs.meIndex = 0, mejs.plugins = {
        silverlight: [{
            version: [3, 0],
            types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
        }
        ],
        flash: [{
            version: [9, 0, 124],
            types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/youtube", "video/x-youtube"]
        }
        ],
        youtube: [{
            version: null,
            types: ["video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube"]
        }
        ],
        vimeo: [{
            version: null,
            types: ["video/vimeo", "video/x-vimeo"]
        }
        ]
    }, mejs.Utility = {
        encodeUrl: function(a) {
            return encodeURIComponent(a)
        },
        escapeHTML: function(a) {
            return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
        },
        absolutizeUrl: function(a) {
            var b = document.createElement("div");
            return b.innerHTML = '<a href="' + this.escapeHTML(a) + '">x</a>', b.firstChild.href
        },
        getScriptPath: function(a) {
            var b = 0, c, d = "", e = "", f, g, h, i, j, k = document.getElementsByTagName("script"), l = k.length, m = a.length;
            for (; b < l; b++) {
                h = k[b].src, f = h.lastIndexOf("/"), f>-1 ? (j = h.substring(f + 1), i = h.substring(0, f + 1)) : (j = h, i = "");
                for (c = 0; c < m; c++) {
                    e = a[c], g = j.indexOf(e);
                    if (g>-1) {
                        d = i;
                        break
                    }
                }
                if (d !== "")
                    break
            }
            return d
        },
        secondsToTimeCode: function(a, b, c, d) {
            typeof c == "undefined" ? c=!1 : typeof d == "undefined" && (d = 25);
            var e = Math.floor(a / 3600)%24, f = Math.floor(a / 60)%60, g = Math.floor(a%60), h = Math.floor((a%1 * d).toFixed(3)), i = (b || e > 0 ? (e < 10 ? "0" + e : e) + ":" : "") + (f < 10 ? "0" + f : f) + ":" + (g < 10 ? "0" + g : g) + (c ? ":" + (h < 10 ? "0" + h : h) : "");
            return i
        },
        timeCodeToSeconds: function(a, b, c, d) {
            typeof c == "undefined" ? c=!1 : typeof d == "undefined" && (d = 25);
            var e = a.split(":"), f = parseInt(e[0], 10), g = parseInt(e[1], 10), h = parseInt(e[2], 10), i = 0, j = 0;
            return c && (i = parseInt(e[3]) / d), j = f * 3600 + g * 60 + h + i, j
        },
        convertSMPTEtoSeconds: function(a) {
            if (typeof a != "string")
                return !1;
            a = a.replace(",", ".");
            var b = 0, c = a.indexOf(".")!=-1 ? a.split(".")[1].length: 0, d = 1;
            a = a.split(":").reverse();
            for (var e = 0; e < a.length; e++)
                d = 1, e > 0 && (d = Math.pow(60, e)), b += Number(a[e]) * d;
            return Number(b.toFixed(c))
        },
        removeSwf: function(a) {
            var b = document.getElementById(a);
            b && /object|embed/i.test(b.nodeName) && (mejs.MediaFeatures.isIE ? (b.style.display = "none", function() {
                b.readyState == 4 ? mejs.Utility.removeObjectInIE(a) : setTimeout(arguments.callee, 10)
            }()) : b.parentNode.removeChild(b))
        },
        removeObjectInIE: function(a) {
            var b = document.getElementById(a);
            if (b) {
                for (var c in b)
                    typeof b[c] == "function" && (b[c] = null);
                b.parentNode.removeChild(b)
            }
        }
    }, mejs.PluginDetector = {
        hasPluginVersion: function(a, b) {
            var c = this.plugins[a];
            return b[1] = b[1] || 0, b[2] = b[2] || 0, c[0] > b[0] || c[0] == b[0] && c[1] > b[1] || c[0] == b[0] && c[1] == b[1] && c[2] >= b[2]?!0 : !1
        },
        nav: window.navigator,
        ua: window.navigator.userAgent.toLowerCase(),
        plugins: [],
        addPlugin: function(a, b, c, d, e) {
            this.plugins[a] = this.detectPlugin(b, c, d, e)
        },
        detectPlugin: function(a, b, c, d) {
            var e = [0, 0, 0], f, g, h;
            if (typeof this.nav.plugins != "undefined" && typeof this.nav.plugins[a] == "object") {
                f = this.nav.plugins[a].description;
                if (f && (typeof this.nav.mimeTypes == "undefined" ||!this.nav.mimeTypes[b]||!!this.nav.mimeTypes[b].enabledPlugin)) {
                    e = f.replace(a, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split(".");
                    for (g = 0; g < e.length; g++)
                        e[g] = parseInt(e[g].match(/\d+/), 10)
                    }
            } else if (typeof window.ActiveXObject != "undefined")
                try {
                    h = new ActiveXObject(c), h && (e = d(h))
            } catch (i) {}
            return e
        }
    }, mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function(a) {
        var b = [], c = a.GetVariable("$version");
        return c && (c = c.split(" ")[1].split(","), b = [parseInt(c[0], 10), parseInt(c[1], 10), parseInt(c[2], 10)]), b
    }), mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function(a) {
        var b = [0, 0, 0, 0], c = function(a, b, c, d) {
            while (a.isVersionSupported(b[0] + "." + b[1] + "." + b[2] + "." + b[3]))
                b[c] += d;
            b[c] -= d
        };
        return c(a, b, 0, 1), c(a, b, 1, 1), c(a, b, 2, 1e4), c(a, b, 2, 1e3), c(a, b, 2, 100), c(a, b, 2, 10), c(a, b, 2, 1), c(a, b, 3, 1), b
    }), mejs.MediaFeatures = {
        init: function() {
            var a = this, b = document, c = mejs.PluginDetector.nav, d = mejs.PluginDetector.ua.toLowerCase(), e, f, g = ["source", "track", "audio", "video"];
            a.isiPad = d.match(/ipad/i) !== null, a.isiPhone = d.match(/iphone/i) !== null, a.isiOS = a.isiPhone || a.isiPad, a.isAndroid = d.match(/android/i) !== null, a.isBustedAndroid = d.match(/android 2\.[12]/) !== null, a.isBustedNativeHTTPS = location.protocol === "https:" && (d.match(/android [12]\./) !== null || d.match(/macintosh.* version.* safari/) !== null), a.isIE = c.appName.toLowerCase().indexOf("microsoft")!=-1 || c.appName.toLowerCase().match(/trident/gi) !== null, a.isChrome = d.match(/chrome/gi) !== null, a.isFirefox = d.match(/firefox/gi) !== null, a.isWebkit = d.match(/webkit/gi) !== null, a.isGecko = d.match(/gecko/gi) !== null&&!a.isWebkit&&!a.isIE, a.isOpera = d.match(/opera/gi) !== null, a.hasTouch = "ontouchstart"in window, a.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
            for (e = 0; e < g.length; e++)
                f = document.createElement(g[e]);
            a.supportsMediaTag = typeof f.canPlayType != "undefined" || a.isBustedAndroid;
            try {
                f.canPlayType("video/mp4")
            } catch (h) {
                a.supportsMediaTag=!1
            }
            a.hasSemiNativeFullScreen = typeof f.webkitEnterFullscreen != "undefined", a.hasNativeFullscreen = typeof f.requestFullscreen != "undefined", a.hasWebkitNativeFullScreen = typeof f.webkitRequestFullScreen != "undefined", a.hasMozNativeFullScreen = typeof f.mozRequestFullScreen != "undefined", a.hasMsNativeFullScreen = typeof f.msRequestFullscreen != "undefined", a.hasTrueNativeFullScreen = a.hasWebkitNativeFullScreen || a.hasMozNativeFullScreen || a.hasMsNativeFullScreen, a.nativeFullScreenEnabled = a.hasTrueNativeFullScreen, a.hasMozNativeFullScreen ? a.nativeFullScreenEnabled = document.mozFullScreenEnabled : a.hasMsNativeFullScreen && (a.nativeFullScreenEnabled = document.msFullscreenEnabled), a.isChrome && (a.hasSemiNativeFullScreen=!1), a.hasTrueNativeFullScreen && (a.fullScreenEventName = "", a.hasWebkitNativeFullScreen ? a.fullScreenEventName = "webkitfullscreenchange" : a.hasMozNativeFullScreen ? a.fullScreenEventName = "mozfullscreenchange" : a.hasMsNativeFullScreen && (a.fullScreenEventName = "MSFullscreenChange"), a.isFullScreen = function() {
                if (f.mozRequestFullScreen)
                    return b.mozFullScreen;
                if (f.webkitRequestFullScreen)
                    return b.webkitIsFullScreen;
                if (f.hasMsNativeFullScreen)
                    return b.msFullscreenElement !== null
            }, a.requestFullScreen = function(b) {
                a.hasWebkitNativeFullScreen ? b.webkitRequestFullScreen() : a.hasMozNativeFullScreen ? b.mozRequestFullScreen() : a.hasMsNativeFullScreen && b.msRequestFullscreen()
            }, a.cancelFullScreen = function() {
                a.hasWebkitNativeFullScreen ? document.webkitCancelFullScreen() : a.hasMozNativeFullScreen ? document.mozCancelFullScreen() : a.hasMsNativeFullScreen && document.msExitFullscreen()
            }), a.hasSemiNativeFullScreen && d.match(/mac os x 10_5/i) && (a.hasNativeFullScreen=!1, a.hasSemiNativeFullScreen=!1)
        }
    }, mejs.MediaFeatures.init(), mejs.HtmlMediaElement = {
        pluginType: "native",
        isFullScreen: !1,
        setCurrentTime: function(a) {
            this.currentTime = a
        },
        setMuted: function(a) {
            this.muted = a
        },
        setVolume: function(a) {
            this.volume = a
        },
        stop: function() {
            this.pause()
        },
        setSrc: function(a) {
            var b = this.getElementsByTagName("source");
            while (b.length > 0)
                this.removeChild(b[0]);
            if (typeof a == "string")
                this.src = a;
            else {
                var c, d;
                for (c = 0; c < a.length; c++) {
                    d = a[c];
                    if (this.canPlayType(d.type)) {
                        this.src = d.src;
                        break
                    }
                }
            }
        },
        setVideoSize: function(a, b) {
            this.width = a, this.height = b
        }
    }, mejs.PluginMediaElement = function(a, b, c) {
        this.id = a, this.pluginType = b, this.src = c, this.events = {}, this.attributes = {}
    }, mejs.PluginMediaElement.prototype = {
        pluginElement: null,
        pluginType: "",
        isFullScreen: !1,
        playbackRate: - 1,
        defaultPlaybackRate: - 1,
        seekable: [],
        played: [],
        paused: !0,
        ended: !1,
        seeking: !1,
        duration: 0,
        error: null,
        tagName: "",
        muted: !1,
        volume: 1,
        currentTime: 0,
        play: function() {
            this.pluginApi != null && (this.pluginType == "youtube" || this.pluginType == "vimeo" ? this.pluginApi.playVideo() : this.pluginApi.playMedia(), this.paused=!1)
        },
        load: function() {
            this.pluginApi != null && (this.pluginType != "youtube" && this.pluginType != "vimeo" && this.pluginApi.loadMedia(), this.paused=!1)
        },
        pause: function() {
            this.pluginApi != null && (this.pluginType == "youtube" || this.pluginType == "vimeo" ? this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia(), this.paused=!0)
        },
        stop: function() {
            this.pluginApi != null && (this.pluginType == "youtube" || this.pluginType == "vimeo" ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia(), this.paused=!0)
        },
        canPlayType: function(a) {
            var b, c, d, e = mejs.plugins[this.pluginType];
            for (b = 0; b < e.length; b++) {
                d = e[b];
                if (mejs.PluginDetector.hasPluginVersion(this.pluginType, d.version))
                    for (c = 0; c < d.types.length; c++)
                        if (a == d.types[c])
                            return "probably"
            }
            return ""
        },
        positionFullscreenButton: function(a, b, c) {
            this.pluginApi != null && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(a), Math.floor(b), c)
        },
        hideFullscreenButton: function() {
            this.pluginApi != null && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
        },
        setSrc: function(a) {
            if (typeof a == "string")
                this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a)), this.src = mejs.Utility.absolutizeUrl(a);
            else {
                var b, c;
                for (b = 0; b < a.length; b++) {
                    c = a[b];
                    if (this.canPlayType(c.type)) {
                        this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src)), this.src = mejs.Utility.absolutizeUrl(a);
                        break
                    }
                }
            }
        },
        setCurrentTime: function(a) {
            this.pluginApi != null && (this.pluginType == "youtube" || this.pluginType == "vimeo" ? this.pluginApi.seekTo(a) : this.pluginApi.setCurrentTime(a), this.currentTime = a)
        },
        setVolume: function(a) {
            this.pluginApi != null && (this.pluginType == "youtube" || this.pluginType == "vimeo" ? this.pluginApi.setVolume(a * 100) : this.pluginApi.setVolume(a), this.volume = a)
        },
        setMuted: function(a) {
            this.pluginApi != null && (this.pluginType == "youtube" || this.pluginType == "vimeo" ? (a ? this.pluginApi.mute() : this.pluginApi.unMute(), this.muted = a, this.dispatchEvent("volumechange")) : this.pluginApi.setMuted(a), this.muted = a)
        },
        setVideoSize: function(a, b) {
            this.pluginElement.style && (this.pluginElement.style.width = a + "px", this.pluginElement.style.height = b + "px"), this.pluginApi != null && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(a, b)
        },
        setFullscreen: function(a) {
            this.pluginApi != null && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(a)
        },
        enterFullScreen: function() {
            this.pluginApi != null && this.pluginApi.setFullscreen && this.setFullscreen(!0)
        },
        exitFullScreen: function() {
            this.pluginApi != null && this.pluginApi.setFullscreen && this.setFullscreen(!1)
        },
        addEventListener: function(a, b, c) {
            this.events[a] = this.events[a] || [], this.events[a].push(b)
        },
        removeEventListener: function(a, b) {
            if (!a)
                return this.events = {}, !0;
            var c = this.events[a];
            if (!c)
                return !0;
            if (!b)
                return this.events[a] = [], !0;
            for (var d = 0; d < c.length; d++)
                if (c[d] === b)
                    return this.events[a].splice(d, 1), !0;
            return !1
        },
        dispatchEvent: function(a) {
            var b, c, d = this.events[a];
            if (d) {
                c = Array.prototype.slice.call(arguments, 1);
                for (b = 0; b < d.length; b++)
                    d[b].apply(null, c)
            }
        },
        hasAttribute: function(a) {
            return a in this.attributes
        },
        removeAttribute: function(a) {
            delete this.attributes[a]
        },
        getAttribute: function(a) {
            return this.hasAttribute(a) ? this.attributes[a] : ""
        },
        setAttribute: function(a, b) {
            this.attributes[a] = b
        },
        remove: function() {
            mejs.Utility.removeSwf(this.pluginElement.id), mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)
        }
    }, mejs.MediaPluginBridge = {
        pluginMediaElements: {},
        htmlMediaElements: {},
        registerPluginElement: function(a, b, c) {
            this.pluginMediaElements[a] = b, this.htmlMediaElements[a] = c
        },
        unregisterPluginElement: function(a) {
            delete this.pluginMediaElements[a], delete this.htmlMediaElements[a]
        },
        initPlugin: function(a) {
            var b = this.pluginMediaElements[a], c = this.htmlMediaElements[a];
            if (b) {
                switch (b.pluginType) {
                case"flash":
                    b.pluginElement = b.pluginApi = document.getElementById(a);
                    break;
                case"silverlight":
                    b.pluginElement = document.getElementById(b.id), b.pluginApi = b.pluginElement.Content.MediaElementJS
                }
                b.pluginApi != null && b.success && b.success(b, c)
            }
        },
        fireEvent: function(a, b, c) {
            var d, e, f, g = this.pluginMediaElements[a];
            if (!g)
                return;
            d = {
                type: b,
                target: g
            };
            for (e in c)
                g[e] = c[e], d[e] = c[e];
            f = c.bufferedTime || 0, d.target.buffered = d.buffered = {
                start: function(a) {
                    return 0
                },
                end: function(a) {
                    return f
                },
                length: 1
            }, g.dispatchEvent(d.type, d)
        }
    }, mejs.MediaElementDefaults = {
        mode: "auto",
        plugins: ["flash", "silverlight", "youtube", "vimeo"],
        enablePluginDebug: !1,
        httpsBasicAuthSite: !1,
        type: "",
        pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
        flashName: "flashmediaelement.swf",
        flashStreamer: "",
        enablePluginSmoothing: !1,
        enablePseudoStreaming: !1,
        pseudoStreamingStartQueryParam: "start",
        silverlightName: "silverlightmediaelement.xap",
        defaultVideoWidth: 480,
        defaultVideoHeight: 270,
        pluginWidth: - 1,
        pluginHeight: - 1,
        pluginVars: [],
        timerRate: 250,
        startVolume: .8,
        success: function() {},
        error: function() {}
    }, mejs.MediaElement = function(a, b) {
        return mejs.HtmlMediaElementShim.create(a, b)
    }, mejs.HtmlMediaElementShim = {
        create: function(a, b) {
            var c = mejs.MediaElementDefaults, d = typeof a == "string" ? document.getElementById(a): a, e = d.tagName.toLowerCase(), f = e === "audio" || e === "video", g = f ? d.getAttribute("src"): d.getAttribute("href"), h = d.getAttribute("poster"), i = d.getAttribute("autoplay"), j = d.getAttribute("preload"), k = d.getAttribute("controls"), l, m;
            for (m in b)
                c[m] = b[m];
            return g = typeof g == "undefined" || g === null || g == "" ? null : g, h = typeof h == "undefined" || h === null ? "" : h, j = typeof j == "undefined" || j === null || j === "false" ? "none" : j, i = typeof i != "undefined" && i !== null && i !== "false", k = typeof k != "undefined" && k !== null && k !== "false", l = this.determinePlayback(d, c, mejs.MediaFeatures.supportsMediaTag, f, g), l.url = l.url !== null ? mejs.Utility.absolutizeUrl(l.url) : "", l.method == "native" ? (mejs.MediaFeatures.isBustedAndroid && (d.src = l.url, d.addEventListener("click", function() {
                d.play()
            }, !1)), this.updateNative(l, c, i, j)) : l.method !== "" ? this.createPlugin(l, c, h, i, j, k) : (this.createErrorMessage(l, c, h), this)
        },
        determinePlayback: function(a, b, c, d, e) {
            var f = [], g, h, i, j, k, l, m = {
                method: "",
                url: "",
                htmlMediaElement: a,
                isVideo: a.tagName.toLowerCase() != "audio"
            }, n, o, p, q, r;
            if (typeof b.type != "undefined" && b.type !== "")
                if (typeof b.type == "string")
                    f.push({
                        type: b.type,
                        url: e
                    });
                else 
                    for (g = 0; g < b.type.length; g++)
                        f.push({
                            type: b.type[g],
                            url: e
                        });
            else if (e !== null)
                l = this.formatType(e, a.getAttribute("type")), f.push({
                    type: l,
                    url: e
                });
            else 
                for (g = 0; g < a.childNodes.length; g++)
                    k = a.childNodes[g], k.nodeType == 1 && k.tagName.toLowerCase() == "source" && (e = k.getAttribute("src"), l = this.formatType(e, k.getAttribute("type")), r = k.getAttribute("media"), (!r ||!window.matchMedia || window.matchMedia && window.matchMedia(r).matches) && f.push({
                        type: l,
                        url: e
                    }));
            !d && f.length > 0 && f[0].url !== null && this.getTypeFromFile(f[0].url).indexOf("audio")>-1 && (m.isVideo=!1), mejs.MediaFeatures.isBustedAndroid && (a.canPlayType = function(a) {
                return a.match(/video\/(mp4|m4v)/gi) !== null ? "maybe" : ""
            });
            if (c && (b.mode === "auto" || b.mode === "auto_plugin" || b.mode === "native") && (!mejs.MediaFeatures.isBustedNativeHTTPS || b.httpsBasicAuthSite!==!0)) {
                d || (q = document.createElement(m.isVideo ? "video" : "audio"), a.parentNode.insertBefore(q, a), a.style.display = "none", m.htmlMediaElement = a = q);
                for (g = 0; g < f.length; g++)
                    if (a.canPlayType(f[g].type).replace(/no/, "") !== "" || a.canPlayType(f[g].type.replace(/mp3/, "mpeg")).replace(/no/, "") !== "" || a.canPlayType(f[g].type.replace(/m4a/, "mp4")).replace(/no/, "") !== "") {
                        m.method = "native", m.url = f[g].url;
                        break
                    }
                if (m.method === "native") {
                    m.url !== null && (a.src = m.url);
                    if (b.mode !== "auto_plugin")
                        return m
                }
            }
            if (b.mode === "auto" || b.mode === "auto_plugin" || b.mode === "shim")
                for (g = 0; g < f.length; g++) {
                    l = f[g].type;
                    for (h = 0; h < b.plugins.length; h++) {
                        n = b.plugins[h], o = mejs.plugins[n];
                        for (i = 0; i < o.length; i++) {
                            p = o[i];
                            if (p.version == null || mejs.PluginDetector.hasPluginVersion(n, p.version))
                                for (j = 0; j < p.types.length; j++)
                                    if (l == p.types[j])
                                        return m.method = n, m.url = f[g].url, m
                        }
                    }
                }
            return b.mode === "auto_plugin" && m.method === "native" ? m : (m.method === "" && f.length > 0 && (m.url = f[0].url), m)
        },
        formatType: function(a, b) {
            var c;
            return a&&!b ? this.getTypeFromFile(a) : b&&~b.indexOf(";") ? b.substr(0, b.indexOf(";")) : b
        },
        getTypeFromFile: function(a) {
            a = a.split("?")[0];
            var b = a.substring(a.lastIndexOf(".") + 1).toLowerCase();
            return (/(mp4|m4v|ogg|ogv|webm|webmv|flv|wmv|mpeg|mov)/gi.test(b) ? "video" : "audio") + "/" + this.getTypeFromExtension(b)
        },
        getTypeFromExtension: function(a) {
            switch (a) {
            case"mp4":
            case"m4v":
            case"m4a":
                return "mp4";
            case"webm":
            case"webma":
            case"webmv":
                return "webm";
            case"ogg":
            case"oga":
            case"ogv":
                return "ogg";
            default:
                return a
            }
        },
        createErrorMessage: function(a, b, c) {
            var d = a.htmlMediaElement, e = document.createElement("div");
            e.className = "me-cannotplay";
            try {
                e.style.width = d.width + "px", e.style.height = d.height + "px"
            } catch (f) {}
            b.customError ? e.innerHTML = b.customError : e.innerHTML = c !== "" ? '<a href="' + a.url + '"><img src="' + c + '" width="100%" height="100%" /></a>' : '<a href="' + a.url + '"><span>' + mejs.i18n.t("Download File") + "</span></a>", d.parentNode.insertBefore(e, d), d.style.display = "none", b.error(d)
        },
        createPlugin: function(a, b, c, d, e, f) {
            var g = a.htmlMediaElement, h = 1, i = 1, j = "me_" + a.method + "_" + mejs.meIndex++, k = new mejs.PluginMediaElement(j, a.method, a.url), l = document.createElement("div"), m, n, o;
            k.tagName = g.tagName;
            for (var p = 0; p < g.attributes.length; p++) {
                var q = g.attributes[p];
                q.specified == 1 && k.setAttribute(q.name, q.value)
            }
            n = g.parentNode;
            while (n !== null && n.tagName.toLowerCase() !== "body" && n.parentNode != null) {
                if (n.parentNode.tagName.toLowerCase() === "p") {
                    n.parentNode.parentNode.insertBefore(n, n.parentNode);
                    break
                }
                n = n.parentNode
            }
            a.isVideo ? (h = b.pluginWidth > 0 ? b.pluginWidth : b.videoWidth > 0 ? b.videoWidth : g.getAttribute("width") !== null ? g.getAttribute("width") : b.defaultVideoWidth, i = b.pluginHeight > 0 ? b.pluginHeight : b.videoHeight > 0 ? b.videoHeight : g.getAttribute("height") !== null ? g.getAttribute("height") : b.defaultVideoHeight, h = mejs.Utility.encodeUrl(h), i = mejs.Utility.encodeUrl(i)) : b.enablePluginDebug && (h = 320, i = 240), k.success = b.success, mejs.MediaPluginBridge.registerPluginElement(j, k, g), l.className = "me-plugin", l.id = j + "_container", a.isVideo ? g.parentNode.insertBefore(l, g) : document.body.insertBefore(l, document.body.childNodes[0]), o = ["id=" + j, "isvideo=" + (a.isVideo ? "true" : "false"), "autoplay=" + (d ? "true" : "false"), "preload=" + e, "width=" + h, "startvolume=" + b.startVolume, "timerrate=" + b.timerRate, "flashstreamer=" + b.flashStreamer, "height=" + i, "pseudostreamstart=" + b.pseudoStreamingStartQueryParam], a.url !== null && (a.method == "flash" ? o.push("file=" + mejs.Utility.encodeUrl(a.url)) : o.push("file=" + a.url)), b.enablePluginDebug && o.push("debug=true"), b.enablePluginSmoothing && o.push("smoothing=true"), b.enablePseudoStreaming && o.push("pseudostreaming=true"), f && o.push("controls=true"), b.pluginVars && (o = o.concat(b.pluginVars));
            switch (a.method) {
            case"silverlight":
                l.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + j + '" name="' + j + '" width="' + h + '" height="' + i + '" class="mejs-shim">' + '<param name="initParams" value="' + o.join(",") + '" />' + '<param name="windowless" value="true" />' + '<param name="background" value="black" />' + '<param name="minRuntimeVersion" value="3.0.0.0" />' + '<param name="autoUpgrade" value="true" />' + '<param name="source" value="' + b.pluginPath + b.silverlightName + '" />' + "</object>";
                break;
            case"flash":
                mejs.MediaFeatures.isIE ? (m = document.createElement("div"), l.appendChild(m), m.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + j + '" width="' + h + '" height="' + i + '" class="mejs-shim">' + '<param name="movie" value="' + b.pluginPath + b.flashName + "?x=" + new Date + '" />' + '<param name="flashvars" value="' + o.join("&amp;") + '" />' + '<param name="quality" value="high" />' + '<param name="bgcolor" value="#000000" />' + '<param name="wmode" value="transparent" />' + '<param name="allowScriptAccess" value="always" />' + '<param name="allowFullScreen" value="true" />' + '<param name="scale" value="default" />' + "</object>") : l.innerHTML = '<embed id="' + j + '" name="' + j + '" ' + 'play="true" ' + 'loop="false" ' + 'quality="high" ' + 'bgcolor="#000000" ' + 'wmode="transparent" ' + 'allowScriptAccess="always" ' + 'allowFullScreen="true" ' + 'type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" ' + 'src="' + b.pluginPath + b.flashName + '" ' + 'flashvars="' + o.join("&") + '" ' + 'width="' + h + '" ' + 'height="' + i + '" ' + 'scale="default"' + 'class="mejs-shim"></embed>';
                break;
            case"youtube":
                var r;
                a.url.lastIndexOf("youtu.be")!=-1 ? (r = a.url.substr(a.url.lastIndexOf("/") + 1), r.indexOf("?")!=-1 && (r = r.substr(0, r.indexOf("?")))) : r = a.url.substr(a.url.lastIndexOf("=") + 1), youtubeSettings = {
                    container: l,
                    containerId: l.id,
                    pluginMediaElement: k,
                    pluginId: j,
                    videoId: r,
                    height: i,
                    width: h
                }, mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) ? mejs.YouTubeApi.createFlash(youtubeSettings) : mejs.YouTubeApi.enqueueIframe(youtubeSettings);
                break;
            case"vimeo":
                var s = j + "_player";
                k.vimeoid = a.url.substr(a.url.lastIndexOf("/") + 1), l.innerHTML = '<iframe src="//player.vimeo.com/video/' + k.vimeoid + "?api=1&portrait=0&byline=0&title=0&player_id=" + s + '" width="' + h + '" height="' + i + '" frameborder="0" class="mejs-shim" id="' + s + '"></iframe>';
                if (typeof $f == "function") {
                    var t = $f(l.childNodes[0]);
                    t.addEvent("ready", function() {
                        function a(a, b, c, d) {
                            var e = {
                                type: c,
                                target: b
                            };
                            c == "timeupdate" && (b.currentTime = e.currentTime = d.seconds, b.duration = e.duration = d.duration), b.dispatchEvent(e.type, e)
                        }
                        t.playVideo = function() {
                            t.api("play")
                        }, t.pauseVideo = function() {
                            t.api("pause")
                        }, t.seekTo = function(a) {
                            t.api("seekTo", a)
                        }, t.addEvent("play", function() {
                            a(t, k, "play"), a(t, k, "playing")
                        }), t.addEvent("pause", function() {
                            a(t, k, "pause")
                        }), t.addEvent("finish", function() {
                            a(t, k, "ended")
                        }), t.addEvent("playProgress", function(b) {
                            a(t, k, "timeupdate", b)
                        }), k.pluginApi = t, mejs.MediaPluginBridge.initPlugin(j)
                    })
                } else 
                    console.warn("You need to include froogaloop for vimeo to work")
            }
            return g.style.display = "none", g.removeAttribute("autoplay"), k
        },
        updateNative: function(a, b, c, d) {
            var e = a.htmlMediaElement, f;
            for (f in mejs.HtmlMediaElement)
                e[f] = mejs.HtmlMediaElement[f];
            return b.success(e, e), e
        }
    }, mejs.YouTubeApi = {
        isIframeStarted: !1,
        isIframeLoaded: !1,
        loadIframeApi: function() {
            if (!this.isIframeStarted) {
                var a = document.createElement("script");
                a.src = "//www.youtube.com/player_api";
                var b = document.getElementsByTagName("script")[0];
                b.parentNode.insertBefore(a, b), this.isIframeStarted=!0
            }
        },
        iframeQueue: [],
        enqueueIframe: function(a) {
            this.isLoaded ? this.createIframe(a) : (this.loadIframeApi(), this.iframeQueue.push(a))
        },
        createIframe: function(a) {
            var b = a.pluginMediaElement, c = new YT.Player(a.containerId, {
                height: a.height,
                width: a.width,
                videoId: a.videoId,
                playerVars: {
                    controls: 0
                },
                events: {
                    onReady: function() {
                        a.pluginMediaElement.pluginApi = c, mejs.MediaPluginBridge.initPlugin(a.pluginId), setInterval(function() {
                            mejs.YouTubeApi.createEvent(c, b, "timeupdate")
                        }, 250)
                    },
                    onStateChange: function(a) {
                        mejs.YouTubeApi.handleStateChange(a.data, c, b)
                    }
                }
            })
        },
        createEvent: function(a, b, c) {
            var d = {
                type: c,
                target: b
            };
            if (a && a.getDuration) {
                b.currentTime = d.currentTime = a.getCurrentTime(), b.duration = d.duration = a.getDuration(), d.paused = b.paused, d.ended = b.ended, d.muted = a.isMuted(), d.volume = a.getVolume() / 100, d.bytesTotal = a.getVideoBytesTotal(), d.bufferedBytes = a.getVideoBytesLoaded();
                var e = d.bufferedBytes / d.bytesTotal * d.duration;
                d.target.buffered = d.buffered = {
                    start: function(a) {
                        return 0
                    },
                    end: function(a) {
                        return e
                    },
                    length: 1
                }
            }
            b.dispatchEvent(d.type, d)
        },
        iFrameReady: function() {
            this.isLoaded=!0, this.isIframeLoaded=!0;
            while (this.iframeQueue.length > 0) {
                var a = this.iframeQueue.pop();
                this.createIframe(a)
            }
        },
        flashPlayers: {},
        createFlash: function(a) {
            this.flashPlayers[a.pluginId] = a;
            var b, c = "//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + a.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
            mejs.MediaFeatures.isIE ? (b = document.createElement("div"), a.container.appendChild(b), b.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + a.pluginId + '" width="' + a.width + '" height="' + a.height + '" class="mejs-shim">' + '<param name="movie" value="' + c + '" />' + '<param name="wmode" value="transparent" />' + '<param name="allowScriptAccess" value="always" />' + '<param name="allowFullScreen" value="true" />' + "</object>") : a.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + a.pluginId + '" data="' + c + '" ' + 'width="' + a.width + '" height="' + a.height + '" style="visibility: visible; " class="mejs-shim">' + '<param name="allowScriptAccess" value="always">' + '<param name="wmode" value="transparent">' + "</object>"
        },
        flashReady: function(a) {
            var b = this.flashPlayers[a], c = document.getElementById(a), d = b.pluginMediaElement;
            d.pluginApi = d.pluginElement = c, mejs.MediaPluginBridge.initPlugin(a), c.cueVideoById(b.videoId);
            var e = b.containerId + "_callback";
            window[e] = function(a) {
                mejs.YouTubeApi.handleStateChange(a, c, d)
            }, c.addEventListener("onStateChange", e), setInterval(function() {
                mejs.YouTubeApi.createEvent(c, d, "timeupdate")
            }, 250)
        },
        handleStateChange: function(a, b, c) {
            switch (a) {
            case - 1:
                c.paused=!0, c.ended=!0, mejs.YouTubeApi.createEvent(b, c, "loadedmetadata");
                break;
            case 0:
                c.paused=!1, c.ended=!0, mejs.YouTubeApi.createEvent(b, c, "ended");
                break;
            case 1:
                c.paused=!1, c.ended=!1, mejs.YouTubeApi.createEvent(b, c, "play"), mejs.YouTubeApi.createEvent(b, c, "playing");
                break;
            case 2:
                c.paused=!0, c.ended=!1, mejs.YouTubeApi.createEvent(b, c, "pause");
                break;
            case 3:
                mejs.YouTubeApi.createEvent(b, c, "progress");
                break;
            case 5:
            }
        }
    }, window.mejs = mejs, window.MediaElement = mejs.MediaElement; /*!
     * Adds Internationalization and localization to mediaelement.
     *
     * This file does not contain translations, you have to add the manually.
     * The schema is always the same: me-i18n-locale-[ISO_639-1 Code].js
     *
     * Examples are provided both for german and chinese translation.
     *
     *
     * What is the concept beyond i18n?
     *   http://en.wikipedia.org/wiki/Internationalization_and_localization
     *
     * What langcode should i use?
     *   http://en.wikipedia.org/wiki/ISO_639-1
     *
     *
     * License?
     *
     *   The i18n file uses methods from the Drupal project (drupal.js):
     *     - i18n.methods.t() (modified)
     *     - i18n.methods.checkPlain() (full copy)
     *
     *   The Drupal project is (like mediaelementjs) licensed under GPLv2.
     *    - http://drupal.org/licensing/faq/#q1
     *    - https://github.com/johndyer/mediaelement
     *    - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
     *
     *
     * @author
     *   Tim Latz (latz.tim@gmail.com)
     *
     *
     * @params
     *  - context - document, iframe ..
     *  - exports - CommonJS, window ..
     *
     */
    (function(a, b, c) {
        "use strict";
        var d = {
            locale: {
                language: "",
                strings: {}
            },
            methods: {}
        };
        d.getLanguage = function() {
            var a = d.locale.language || window.navigator.userLanguage || window.navigator.language;
            return a.substr(0, 2).toLowerCase()
        }, typeof mejsL10n != "undefined" && (d.locale.language = mejsL10n.language), d.methods.checkPlain = function(a) {
            var b, c, d = {
                "&": "&amp;",
                '"': "&quot;",
                "<": "&lt;",
                ">": "&gt;"
            };
            a = String(a);
            for (b in d)
                d.hasOwnProperty(b) && (c = new RegExp(b, "g"), a = a.replace(c, d[b]));
            return a
        }, d.methods.t = function(a, b) {
            return d.locale.strings && d.locale.strings[b.context] && d.locale.strings[b.context][a] && (a = d.locale.strings[b.context][a]), d.methods.checkPlain(a)
        }, d.t = function(a, b) {
            if (typeof a == "string" && a.length > 0) {
                var c = d.getLanguage();
                return b = b || {
                    context: c
                }, d.methods.t(a, b)
            }
            throw {
                name: "InvalidArgumentException",
                message: "First argument is either not a string or empty."
            }
        }, b.i18n = d
    })(document, mejs), function(a, b) {
        "use strict", typeof mejsL10n != "undefined" && (a[mejsL10n.language] = mejsL10n.strings)
    }(mejs.i18n.locale.strings); /*!
     * This is a i18n.locale language object.
     *
     * German translation by Tim Latz, latz.tim@gmail.com
     *
     * @author
     *   Tim Latz (latz.tim@gmail.com)
     *
     * @see
     *   me-i18n.js
     *
     * @params
     *  - exports - CommonJS, window ..
     */
    (function(a, b) {
        "use strict", typeof a.de == "undefined" && (a.de = {
            Fullscreen: "Vollbild",
            "Go Fullscreen": "Vollbild an",
            "Turn off Fullscreen": "Vollbild aus",
            Close: "Schließen"
        })
    })(mejs.i18n.locale.strings); /*!
     * This is a i18n.locale language object.
     *
     * Traditional chinese translation by Tim Latz, latz.tim@gmail.com
     *
     * @author
     *   Tim Latz (latz.tim@gmail.com)
     *
     * @see
     *   me-i18n.js
     *
     * @params
     *  - exports - CommonJS, window ..
     */
    (function(a, b) {
        "use strict", typeof a.zh == "undefined" && (a.zh = {
            Fullscreen: "全螢幕",
            "Go Fullscreen": "全屏模式",
            "Turn off Fullscreen": "退出全屏模式",
            Close: "關閉"
        })
    })(mejs.i18n.locale.strings); /*!
     * MediaElementPlayer
     * http://mediaelementjs.com/
     *
     * Creates a controller bar for HTML5 <video> add <audio> tags
     * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
     *
     * Copyright 2010-2013, John Dyer (http://j.hn/)
     * License: MIT
     *
     */
    typeof jQuery != "undefined" ? mejs.$ = jQuery : typeof ender != "undefined" && (mejs.$ = ender), function($) {
        mejs.MepDefaults = {
            poster: "",
            showPosterWhenEnded: !1,
            defaultVideoWidth: 480,
            defaultVideoHeight: 270,
            videoWidth: - 1,
            videoHeight: - 1,
            defaultAudioWidth: 400,
            defaultAudioHeight: 30,
            defaultSeekBackwardInterval: function(a) {
                return a.duration * .05
            },
            defaultSeekForwardInterval: function(a) {
                return a.duration * .05
            },
            audioWidth: - 1,
            audioHeight: - 1,
            startVolume: .8,
            loop: !1,
            autoRewind: !0,
            enableAutosize: !0,
            alwaysShowHours: !1,
            showTimecodeFrameCount: !1,
            framesPerSecond: 25,
            autosizeProgress: !0,
            alwaysShowControls: !1,
            hideVideoControlsOnLoad: !1,
            clickToPlayPause: !0,
            iPadUseNativeControls: !1,
            iPhoneUseNativeControls: !1,
            AndroidUseNativeControls: !1,
            features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
            isVideo: !0,
            enableKeyboard: !0,
            pauseOtherPlayers: !0,
            keyActions: [{
                keys: [32, 179],
                action: function(a, b) {
                    b.paused || b.ended ? a.play() : a.pause()
                }
            }, {
                keys: [38],
                action: function(a, b) {
                    var c = Math.min(b.volume + .1, 1);
                    b.setVolume(c)
                }
            }, {
                keys: [40],
                action: function(a, b) {
                    var c = Math.max(b.volume - .1, 0);
                    b.setVolume(c)
                }
            }, {
                keys: [37, 227],
                action: function(a, b) {
                    if (!isNaN(b.duration) && b.duration > 0) {
                        a.isVideo && (a.showControls(), a.startControlsTimer());
                        var c = Math.max(b.currentTime - a.options.defaultSeekBackwardInterval(b), 0);
                        b.setCurrentTime(c)
                    }
                }
            }, {
                keys: [39, 228],
                action: function(a, b) {
                    if (!isNaN(b.duration) && b.duration > 0) {
                        a.isVideo && (a.showControls(), a.startControlsTimer());
                        var c = Math.min(b.currentTime + a.options.defaultSeekForwardInterval(b), b.duration);
                        b.setCurrentTime(c)
                    }
                }
            }, {
                keys: [70],
                action: function(a, b) {
                    typeof a.enterFullScreen != "undefined" && (a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen())
                }
            }
            ]
        }, mejs.mepIndex = 0, mejs.players = {}, mejs.MediaElementPlayer = function(a, b) {
            if (this instanceof mejs.MediaElementPlayer) {
                var c = this;
                return c.$media = c.$node = $(a), c.node = c.media = c.$media[0], typeof c.node.player != "undefined" ? c.node.player : (c.node.player = c, typeof b == "undefined" && (b = c.$node.data("mejsoptions")), c.options = $.extend({}, mejs.MepDefaults, b), c.id = "mep_" + mejs.mepIndex++, mejs.players[c.id] = c, c.init(), c)
            }
            return new mejs.MediaElementPlayer(a, b)
        }, mejs.MediaElementPlayer.prototype = {
            hasFocus: !1,
            controlsAreVisible: !0,
            init: function() {
                var a = this, b = mejs.MediaFeatures, c = $.extend(!0, {}, a.options, {
                    success: function(b, c) {
                        a.meReady(b, c)
                    },
                    error: function(b) {
                        a.handleError(b)
                    }
                }), d = a.media.tagName.toLowerCase();
                a.isDynamic = d !== "audio" && d !== "video", a.isDynamic ? a.isVideo = a.options.isVideo : a.isVideo = d !== "audio" && a.options.isVideo;
                if (b.isiPad && a.options.iPadUseNativeControls || b.isiPhone && a.options.iPhoneUseNativeControls)
                    a.$media.attr("controls", "controls"), b.isiPad && a.media.getAttribute("autoplay") !== null && a.play();
                else if (!b.isAndroid ||!a.options.AndroidUseNativeControls) {
                    a.$media.removeAttr("controls"), a.container = $('<div id="' + a.id + '" class="mejs-container ' + (mejs.MediaFeatures.svg ? "svg" : "no-svg") + '">' + '<div class="mejs-inner">' + '<div class="mejs-mediaelement"></div>' + '<div class="mejs-layers"></div>' + '<div class="mejs-controls"></div>' + '<div class="mejs-clear"></div>' + "</div>" + "</div>").addClass(a.$media[0].className).insertBefore(a.$media), a.container.addClass((b.isAndroid ? "mejs-android " : "") + (b.isiOS ? "mejs-ios " : "") + (b.isiPad ? "mejs-ipad " : "") + (b.isiPhone ? "mejs-iphone " : "") + (a.isVideo ? "mejs-video " : "mejs-audio "));
                    if (b.isiOS) {
                        var e = a.$media.clone();
                        a.container.find(".mejs-mediaelement").append(e), a.$media.remove(), a.$node = a.$media = e, a.node = a.media = e[0]
                    } else 
                        a.container.find(".mejs-mediaelement").append(a.$media);
                    a.controls = a.container.find(".mejs-controls"), a.layers = a.container.find(".mejs-layers");
                    var f = a.isVideo ? "video": "audio", g = f.substring(0, 1).toUpperCase() + f.substring(1);
                    a.options[f + "Width"] > 0 || a.options[f + "Width"].toString().indexOf("%")>-1 ? a.width = a.options[f + "Width"] : a.media.style.width !== "" && a.media.style.width !== null ? a.width = a.media.style.width : a.media.getAttribute("width") !== null ? a.width = a.$media.attr("width") : a.width = a.options["default" + g + "Width"], a.options[f + "Height"] > 0 || a.options[f + "Height"].toString().indexOf("%")>-1 ? a.height = a.options[f + "Height"] : a.media.style.height !== "" && a.media.style.height !== null ? a.height = a.media.style.height : a.$media[0].getAttribute("height") !== null ? a.height = a.$media.attr("height") : a.height = a.options["default" + g + "Height"], a.setPlayerSize(a.width, a.height), c.pluginWidth = a.width, c.pluginHeight = a.height
                }
                mejs.MediaElement(a.$media[0], c), typeof a.container != "undefined" && a.controlsAreVisible && a.container.trigger("controlsshown")
            },
            showControls: function(a) {
                var b = this;
                a = typeof a == "undefined" || a;
                if (b.controlsAreVisible)
                    return;
                a ? (b.controls.css("visibility", "visible").stop(!0, !0).fadeIn(200, function() {
                    b.controlsAreVisible=!0, b.container.trigger("controlsshown")
                }), b.container.find(".mejs-control").css("visibility", "visible").stop(!0, !0).fadeIn(200, function() {
                    b.controlsAreVisible=!0
                })) : (b.controls.css("visibility", "visible").css("display", "block"), b.container.find(".mejs-control").css("visibility", "visible").css("display", "block"), b.controlsAreVisible=!0, b.container.trigger("controlsshown")), b.setControlsSize()
            },
            hideControls: function(a) {
                var b = this;
                a = typeof a == "undefined" || a;
                if (!b.controlsAreVisible || b.options.alwaysShowControls)
                    return;
                a ? (b.controls.stop(!0, !0).fadeOut(200, function() {
                    $(this).css("visibility", "hidden").css("display", "block"), b.controlsAreVisible=!1, b.container.trigger("controlshidden")
                }), b.container.find(".mejs-control").stop(!0, !0).fadeOut(200, function() {
                    $(this).css("visibility", "hidden").css("display", "block")
                })) : (b.controls.css("visibility", "hidden").css("display", "block"), b.container.find(".mejs-control").css("visibility", "hidden").css("display", "block"), b.controlsAreVisible=!1, b.container.trigger("controlshidden"))
            },
            controlsTimer: null,
            startControlsTimer: function(a) {
                var b = this;
                a = typeof a != "undefined" ? a : 1500, b.killControlsTimer("start"), b.controlsTimer = setTimeout(function() {
                    b.hideControls(), b.killControlsTimer("hide")
                }, a)
            },
            killControlsTimer: function(a) {
                var b = this;
                b.controlsTimer !== null && (clearTimeout(b.controlsTimer), delete b.controlsTimer, b.controlsTimer = null)
            },
            controlsEnabled: !0,
            disableControls: function() {
                var a = this;
                a.killControlsTimer(), a.hideControls(!1), this.controlsEnabled=!1
            },
            enableControls: function() {
                var a = this;
                a.showControls(!1), a.controlsEnabled=!0
            },
            meReady: function(a, b) {
                var c = this, d = mejs.MediaFeatures, e = b.getAttribute("autoplay"), f = typeof e != "undefined" && e !== null && e !== "false", g, h;
                if (c.created)
                    return;
                c.created=!0, c.media = a, c.domNode = b;
                if ((!d.isAndroid ||!c.options.AndroidUseNativeControls) && (!d.isiPad ||!c.options.iPadUseNativeControls) && (!d.isiPhone ||!c.options.iPhoneUseNativeControls)) {
                    c.buildposter(c, c.controls, c.layers, c.media), c.buildkeyboard(c, c.controls, c.layers, c.media), c.buildoverlays(c, c.controls, c.layers, c.media), c.findTracks();
                    for (g in c.options.features) {
                        h = c.options.features[g];
                        if (c["build" + h])
                            try {
                                c["build" + h](c, c.controls, c.layers, c.media)
                            } catch (i) {}
                    }
                    c.container.trigger("controlsready"), c.setPlayerSize(c.width, c.height), c.setControlsSize(), c.isVideo && (mejs.MediaFeatures.hasTouch ? c.$media.bind("touchstart", function() {
                        c.controlsAreVisible ? c.hideControls(!1) : c.controlsEnabled && c.showControls(!1)
                    }) : (c.clickToPlayPauseCallback = function() {
                        c.options.clickToPlayPause && (c.media.paused ? c.play() : c.pause())
                    }, c.media.addEventListener("click", c.clickToPlayPauseCallback, !1), c.container.bind("mouseenter mouseover", function() {
                        c.controlsEnabled && (c.options.alwaysShowControls || (c.killControlsTimer("enter"), c.showControls(), c.startControlsTimer(2500)))
                    }).bind("mousemove", function() {
                        c.controlsEnabled && (c.controlsAreVisible || c.showControls(), c.options.alwaysShowControls || c.startControlsTimer(2500))
                    }).bind("mouseleave", function() {
                        c.controlsEnabled&&!c.media.paused&&!c.options.alwaysShowControls && c.startControlsTimer(1e3)
                    })), c.options.hideVideoControlsOnLoad && c.hideControls(!1), f&&!c.options.alwaysShowControls && c.hideControls(), c.options.enableAutosize && c.media.addEventListener("loadedmetadata", function(a) {
                        c.options.videoHeight <= 0 && c.domNode.getAttribute("height") === null&&!isNaN(a.target.videoHeight) && (c.setPlayerSize(a.target.videoWidth, a.target.videoHeight), c.setControlsSize(), c.media.setVideoSize(a.target.videoWidth, a.target.videoHeight))
                    }, !1)), a.addEventListener("play", function() {
                        var a;
                        for (a in mejs.players) {
                            var b = mejs.players[a];
                            b.id != c.id && c.options.pauseOtherPlayers&&!b.paused&&!b.ended && b.pause(), b.hasFocus=!1
                        }
                        c.hasFocus=!0
                    }, !1), c.media.addEventListener("ended", function(a) {
                        if (c.options.autoRewind)
                            try {
                                c.media.setCurrentTime(0)
                        } catch (b) {}
                        c.media.pause(), c.setProgressRail && c.setProgressRail(), c.setCurrentRail && c.setCurrentRail(), c.options.loop ? c.play() : !c.options.alwaysShowControls && c.controlsEnabled && c.showControls()
                    }, !1), c.media.addEventListener("loadedmetadata", function(a) {
                        c.updateDuration && c.updateDuration(), c.updateCurrent && c.updateCurrent(), c.isFullScreen || (c.setPlayerSize(c.width, c.height), c.setControlsSize())
                    }, !1), setTimeout(function() {
                        c.setPlayerSize(c.width, c.height), c.setControlsSize()
                    }, 50), c.globalBind("resize", function() {
                        c.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || c.setPlayerSize(c.width, c.height), c.setControlsSize()
                    }), c.media.pluginType == "youtube" && c.container.find(".mejs-overlay-play").hide()
                }
                f && a.pluginType == "native" && c.play(), c.options.success && (typeof c.options.success == "string" ? window[c.options.success](c.media, c.domNode, c) : c.options.success(c.media, c.domNode, c))
            },
            handleError: function(a) {
                var b = this;
                b.controls.hide(), b.options.error && b.options.error(a)
            },
            setPlayerSize: function(a, b) {
                var c = this;
                typeof a != "undefined" && (c.width = a), typeof b != "undefined" && (c.height = b);
                if (c.height.toString().indexOf("%") > 0 || c.$node.css("max-width") === "100%" || parseInt(c.$node.css("max-width").replace(/px/, ""), 10) / c.$node.offsetParent().width() === 1 || c.$node[0].currentStyle && c.$node[0].currentStyle.maxWidth === "100%") {
                    var d = c.isVideo ? c.media.videoWidth && c.media.videoWidth > 0 ? c.media.videoWidth: c.options.defaultVideoWidth: c.options.defaultAudioWidth, e = c.isVideo ? c.media.videoHeight && c.media.videoHeight > 0 ? c.media.videoHeight: c.options.defaultVideoHeight: c.options.defaultAudioHeight, f = c.container.parent().closest(":visible").width(), g = c.isVideo ||!c.options.autosizeProgress ? parseInt(f * e / d, 10): e;
                    isNaN(g) && (g = c.container.parent().closest(":visible").height()), c.container.parent()[0].tagName.toLowerCase() === "body" && (f = $(window).width(), g = $(window).height()), g != 0 && f != 0 && (c.container.width(f).height(g), c.$media.add(c.container.find(".mejs-shim")).width("100%").height("100%"), c.isVideo && c.media.setVideoSize && c.media.setVideoSize(f, g), c.layers.children(".mejs-layer").width("100%").height("100%"))
                } else 
                    c.container.width(c.width).height(c.height), c.layers.children(".mejs-layer").width(c.width).height(c.height);
                var h = c.layers.find(".mejs-overlay-play"), i = h.find(".mejs-overlay-button");
                h.height(c.container.height() - c.controls.height()), i.css("margin-top", "-" + (i.height() / 2 - c.controls.height() / 2).toString() + "px")
            },
            setControlsSize: function() {
                var a = this, b = 0, c = 0, d = a.controls.find(".mejs-time-rail"), e = a.controls.find(".mejs-time-total"), f = a.controls.find(".mejs-time-current"), g = a.controls.find(".mejs-time-loaded"), h = d.siblings(), i = h.last(), j = null;
                if (!a.container.is(":visible") ||!d.length ||!d.is(":visible"))
                    return;
                a.options&&!a.options.autosizeProgress && (c = parseInt(d.css("width")));
                if (c === 0 ||!c)
                    h.each(function() {
                        var a = $(this);
                        a.css("position") != "absolute" && a.is(":visible") && (b += $(this).outerWidth(!0))
                    }), c = a.controls.width() - b - (d.outerWidth(!0) - d.width());
                do 
                    d.width(c), e.width(c - (e.outerWidth(!0) - e.width())), i.css("position") != "absolute" && (j = i.position(), c--);
                while (j != null && j.top > 0 && c > 0);
                a.setProgressRail && a.setProgressRail(), a.setCurrentRail && a.setCurrentRail()
            },
            buildposter: function(a, b, c, d) {
                var e = this, f = $('<div class="mejs-poster mejs-layer"></div>').appendTo(c), g = a.$media.attr("poster");
                a.options.poster !== "" && (g = a.options.poster), g !== "" && g != null ? e.setPoster(g) : f.hide(), d.addEventListener("play", function() {
                    f.hide()
                }, !1), a.options.showPosterWhenEnded && a.options.autoRewind && d.addEventListener("ended", function() {
                    f.show()
                }, !1)
            },
            setPoster: function(a) {
                var b = this, c = b.container.find(".mejs-poster"), d = c.find("img");
                d.length == 0 && (d = $('<img width="100%" height="100%" />').appendTo(c)), d.attr("src", a), c.css({
                    "background-image": "url(" + a + ")"
                })
            },
            buildoverlays: function(a, b, c, d) {
                var e = this;
                if (!a.isVideo)
                    return;
                var f = $('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(c), g = $('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(c), h = $('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(c).bind("click touchstart", function() {
                    e.options.clickToPlayPause && d.paused && d.play()
                });
                d.addEventListener("play", function() {
                    h.hide(), f.hide(), b.find(".mejs-time-buffering").hide(), g.hide()
                }, !1), d.addEventListener("playing", function() {
                    h.hide(), f.hide(), b.find(".mejs-time-buffering").hide(), g.hide()
                }, !1), d.addEventListener("seeking", function() {
                    f.show(), b.find(".mejs-time-buffering").show()
                }, !1), d.addEventListener("seeked", function() {
                    f.hide(), b.find(".mejs-time-buffering").hide()
                }, !1), d.addEventListener("pause", function() {
                    mejs.MediaFeatures.isiPhone || h.show()
                }, !1), d.addEventListener("waiting", function() {
                    f.show(), b.find(".mejs-time-buffering").show()
                }, !1), d.addEventListener("loadeddata", function() {
                    f.show(), b.find(".mejs-time-buffering").show()
                }, !1), d.addEventListener("canplay", function() {
                    f.hide(), b.find(".mejs-time-buffering").hide()
                }, !1), d.addEventListener("error", function() {
                    f.hide(), b.find(".mejs-time-buffering").hide(), g.show(), g.find("mejs-overlay-error").html("Error loading this resource")
                }, !1)
            },
            buildkeyboard: function(a, b, c, d) {
                var e = this;
                e.globalBind("keydown", function(b) {
                    if (a.hasFocus && a.options.enableKeyboard)
                        for (var c = 0, e = a.options.keyActions.length; c < e; c++) {
                            var f = a.options.keyActions[c];
                            for (var g = 0, h = f.keys.length; g < h; g++)
                                if (b.keyCode == f.keys[g])
                                    return b.preventDefault(), f.action(a, d, b.keyCode), !1
                        }
                    return !0
                }), e.globalBind("click", function(b) {
                    a.hasFocus = $(b.target).closest(".mejs-container").length != 0
                })
            },
            findTracks: function() {
                var a = this, b = a.$media.find("track");
                a.tracks = [], b.each(function(b, c) {
                    c = $(c), a.tracks.push({
                        srclang: c.attr("srclang") ? c.attr("srclang").toLowerCase(): "",
                        src: c.attr("src"),
                        kind: c.attr("kind"),
                        label: c.attr("label") || "",
                        entries: [],
                        isLoaded: !1
                    })
                })
            },
            changeSkin: function(a) {
                this.container[0].className = "mejs-container " + a, this.setPlayerSize(this.width, this.height), this.setControlsSize()
            },
            play: function() {
                this.load(), this.media.play()
            },
            pause: function() {
                try {
                    this.media.pause()
                } catch (a) {}
            },
            load: function() {
                this.isLoaded || this.media.load(), this.isLoaded=!0
            },
            setMuted: function(a) {
                this.media.setMuted(a)
            },
            setCurrentTime: function(a) {
                this.media.setCurrentTime(a)
            },
            getCurrentTime: function() {
                return this.media.currentTime
            },
            setVolume: function(a) {
                this.media.setVolume(a)
            },
            getVolume: function() {
                return this.media.volume
            },
            setSrc: function(a) {
                this.media.setSrc(a)
            },
            remove: function() {
                var a = this, b, c;
                for (b in a.options.features) {
                    c = a.options.features[b];
                    if (a["clean" + c])
                        try {
                            a["clean" + c](a)
                        } catch (d) {}
                }
                a.isDynamic ? a.$node.insertBefore(a.container) : (a.$media.prop("controls", !0), a.$node.clone().show().insertBefore(a.container), a.$node.remove()), a.media.pluginType !== "native" && a.media.remove(), delete mejs.players[a.id], typeof a.container == "object" && a.container.remove(), a.globalUnbind(), delete a.node.player
            }
        }, function() {
            function b(b, c) {
                var d = {
                    d: [],
                    w: []
                };
                return $.each((b || "").split(" "), function(b, e) {
                    var f = e + "." + c;
                    f.indexOf(".") === 0 ? (d.d.push(f), d.w.push(f)) : d[a.test(e) ? "w": "d"].push(f)
                }), d.d = d.d.join(" "), d.w = d.w.join(" "), d
            }
            var a = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
            mejs.MediaElementPlayer.prototype.globalBind = function(a, c, d) {
                var e = this;
                a = b(a, e.id), a.d && $(document).bind(a.d, c, d), a.w && $(window).bind(a.w, c, d)
            }, mejs.MediaElementPlayer.prototype.globalUnbind = function(a, c) {
                var d = this;
                a = b(a, d.id), a.d && $(document).unbind(a.d, c), a.w && $(window).unbind(a.w, c)
            }
        }(), typeof jQuery != "undefined" && (jQuery.fn.mediaelementplayer = function(a) {
            return a===!1 ? this.each(function() {
                var a = jQuery(this).data("mediaelementplayer");
                a && a.remove(), jQuery(this).removeData("mediaelementplayer")
            }) : this.each(function() {
                jQuery(this).data("mediaelementplayer", new mejs.MediaElementPlayer(this, a))
            }), this
        }), $(document).ready(function() {
            $(".mejs-player").mediaelementplayer()
        }), window.MediaElementPlayer = mejs.MediaElementPlayer
    }(mejs.$), function($) {
        $.extend(mejs.MepDefaults, {
            playpauseText: mejs.i18n.t("Play/Pause")
        }), $.extend(MediaElementPlayer.prototype, {
            buildplaypause: function(a, b, c, d) {
                var e = this, f = $('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + e.id + '" title="' + e.options.playpauseText + '" aria-label="' + e.options.playpauseText + '"></button>' + "</div>").appendTo(b).click(function(a) {
                    return a.preventDefault(), d.paused ? d.play() : d.pause(), !1
                });
                d.addEventListener("play", function() {
                    f.removeClass("mejs-play").addClass("mejs-pause")
                }, !1), d.addEventListener("playing", function() {
                    f.removeClass("mejs-play").addClass("mejs-pause")
                }, !1), d.addEventListener("pause", function() {
                    f.removeClass("mejs-pause").addClass("mejs-play")
                }, !1), d.addEventListener("paused", function() {
                    f.removeClass("mejs-pause").addClass("mejs-play")
                }, !1)
            }
        })
    }(mejs.$), function($) {
        $.extend(mejs.MepDefaults, {
            stopText: "Stop"
        }), $.extend(MediaElementPlayer.prototype, {
            buildstop: function(a, b, c, d) {
                var e = this, f = $('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + e.id + '" title="' + e.options.stopText + '" aria-label="' + e.options.stopText + '"></button>' + "</div>").appendTo(b).click(function() {
                    d.paused || d.pause(), d.currentTime > 0 && (d.setCurrentTime(0), d.pause(), b.find(".mejs-time-current").width("0px"), b.find(".mejs-time-handle").css("left", "0px"), b.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0)), b.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0)), c.find(".mejs-poster").show())
                })
            }
        })
    }(mejs.$), function($) {
        $.extend(MediaElementPlayer.prototype, {
            buildprogress: function(a, b, c, d) {
                $('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(b), b.find(".mejs-time-buffering").hide();
                var e = this, f = b.find(".mejs-time-total"), g = b.find(".mejs-time-loaded"), h = b.find(".mejs-time-current"), i = b.find(".mejs-time-handle"), j = b.find(".mejs-time-float"), k = b.find(".mejs-time-float-current"), l = function(a) {
                    if (a.originalEvent.changedTouches)
                        var b = a.originalEvent.changedTouches[0].pageX;
                    else 
                        var b = a.pageX;
                    var c = f.offset(), e = f.outerWidth(!0), g = 0, h = 0, i = 0;
                    d.duration && (b < c.left ? b = c.left : b > e + c.left && (b = e + c.left), i = b - c.left, g = i / e, h = g <= .02 ? 0 : g * d.duration, m && h !== d.currentTime && d.setCurrentTime(h), mejs.MediaFeatures.hasTouch || (j.css("left", i), k.html(mejs.Utility.secondsToTimeCode(h)), j.show()))
                }, m=!1, n=!1;
                f.bind("mousedown touchstart", function(a) {
                    if (a.which === 1 || a.which === 0)
                        return m=!0, l(a), e.globalBind("mousemove.dur touchmove.dur", function(a) {
                            l(a)
                        }), e.globalBind("mouseup.dur touchend.dur", function(a) {
                            m=!1, j.hide(), e.globalUnbind(".dur")
                        }), !1
                }).bind("mouseenter", function(a) {
                    n=!0, e.globalBind("mousemove.dur", function(a) {
                        l(a)
                    }), mejs.MediaFeatures.hasTouch || j.show()
                }).bind("mouseleave", function(a) {
                    n=!1, m || (e.globalUnbind(".dur"), j.hide())
                }), d.addEventListener("progress", function(b) {
                    a.setProgressRail(b), a.setCurrentRail(b)
                }, !1), d.addEventListener("timeupdate", function(b) {
                    a.setProgressRail(b), a.setCurrentRail(b)
                }, !1), e.loaded = g, e.total = f, e.current = h, e.handle = i
            },
            setProgressRail: function(a) {
                var b = this, c = a != undefined ? a.target: b.media, d = null;
                c && c.buffered && c.buffered.length > 0 && c.buffered.end && c.duration ? d = c.buffered.end(0) / c.duration : c && c.bytesTotal != undefined && c.bytesTotal > 0 && c.bufferedBytes != undefined ? d = c.bufferedBytes / c.bytesTotal : a && a.lengthComputable && a.total != 0 && (d = a.loaded / a.total), d !== null && (d = Math.min(1, Math.max(0, d)), b.loaded && b.total && b.loaded.width(b.total.width() * d))
            },
            setCurrentRail: function() {
                var a = this;
                if (a.media.currentTime != undefined && a.media.duration && a.total && a.handle) {
                    var b = Math.round(a.total.width() * a.media.currentTime / a.media.duration), c = b - Math.round(a.handle.outerWidth(!0) / 2);
                    a.current.width(b), a.handle.css("left", c)
                }
            }
        })
    }(mejs.$), function($) {
        $.extend(mejs.MepDefaults, {
            duration: - 1,
            timeAndDurationSeparator: "<span> | </span>"
        }), $.extend(MediaElementPlayer.prototype, {
            buildcurrent: function(a, b, c, d) {
                var e = this;
                $('<div class="mejs-time"><span class="mejs-currenttime">' + (a.options.alwaysShowHours ? "00:" : "") + (a.options.showTimecodeFrameCount ? "00:00:00" : "00:00") + "</span>" + "</div>").appendTo(b), e.currenttime = e.controls.find(".mejs-currenttime"), d.addEventListener("timeupdate", function() {
                    a.updateCurrent()
                }, !1)
            },
            buildduration: function(a, b, c, d) {
                var e = this;
                b.children().last().find(".mejs-currenttime").length > 0 ? $(e.options.timeAndDurationSeparator + '<span class="mejs-duration">' + (e.options.duration > 0 ? mejs.Utility.secondsToTimeCode(e.options.duration, e.options.alwaysShowHours || e.media.duration > 3600, e.options.showTimecodeFrameCount, e.options.framesPerSecond || 25) : (a.options.alwaysShowHours ? "00:" : "") + (a.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span>").appendTo(b.find(".mejs-time")) : (b.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container"), $('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + (e.options.duration > 0 ? mejs.Utility.secondsToTimeCode(e.options.duration, e.options.alwaysShowHours || e.media.duration > 3600, e.options.showTimecodeFrameCount, e.options.framesPerSecond || 25) : (a.options.alwaysShowHours ? "00:" : "") + (a.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span>" + "</div>").appendTo(b)), e.durationD = e.controls.find(".mejs-duration"), d.addEventListener("timeupdate", function() {
                    a.updateDuration()
                }, !1)
            },
            updateCurrent: function() {
                var a = this;
                a.currenttime && a.currenttime.html(mejs.Utility.secondsToTimeCode(a.media.currentTime, a.options.alwaysShowHours || a.media.duration > 3600, a.options.showTimecodeFrameCount, a.options.framesPerSecond || 25))
            },
            updateDuration: function() {
                var a = this;
                a.container.toggleClass("mejs-long-video", a.media.duration > 3600), a.durationD && (a.options.duration > 0 || a.media.duration) && a.durationD.html(mejs.Utility.secondsToTimeCode(a.options.duration > 0 ? a.options.duration : a.media.duration, a.options.alwaysShowHours, a.options.showTimecodeFrameCount, a.options.framesPerSecond || 25))
            }
        })
    }(mejs.$), function($) {
        $.extend(mejs.MepDefaults, {
            muteText: mejs.i18n.t("Mute Toggle"),
            hideVolumeOnTouchDevices: !0,
            audioVolume: "horizontal",
            videoVolume: "vertical"
        }), $.extend(MediaElementPlayer.prototype, {
            buildvolume: function(a, b, c, d) {
                if ((mejs.MediaFeatures.isAndroid || mejs.MediaFeatures.isiOS) && this.options.hideVolumeOnTouchDevices)
                    return;
                var e = this, f = e.isVideo ? e.options.videoVolume: e.options.audioVolume, g = f == "horizontal" ? $('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + e.id + '" title="' + e.options.muteText + '" aria-label="' + e.options.muteText + '"></button>' + "</div>" + '<div class="mejs-horizontal-volume-slider">' + '<div class="mejs-horizontal-volume-total"></div>' + '<div class="mejs-horizontal-volume-current"></div>' + '<div class="mejs-horizontal-volume-handle"></div>' + "</div>").appendTo(b): $('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + e.id + '" title="' + e.options.muteText + '" aria-label="' + e.options.muteText + '"></button>' + '<div class="mejs-volume-slider">' + '<div class="mejs-volume-total"></div>' + '<div class="mejs-volume-current"></div>' + '<div class="mejs-volume-handle"></div>' + "</div>" + "</div>").appendTo(b), h = e.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"), i = e.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"), j = e.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"), k = e.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"), l = function(a, b) {
                    if (!h.is(":visible") && typeof b == "undefined") {
                        h.show(), l(a, !0), h.hide();
                        return 
                    }
                    a = Math.max(0, a), a = Math.min(a, 1), a == 0 ? g.removeClass("mejs-mute").addClass("mejs-unmute") : g.removeClass("mejs-unmute").addClass("mejs-mute");
                    if (f == "vertical") {
                        var c = i.height(), d = i.position(), e = c - c * a;
                        k.css("top", Math.round(d.top + e - k.height() / 2)), j.height(c - e), j.css("top", d.top + e)
                    } else {
                        var m = i.width(), d = i.position(), n = m * a;
                        k.css("left", Math.round(d.left + n - k.width() / 2)), j.width(Math.round(n))
                    }
                }, m = function(a) {
                    var b = null, c = i.offset();
                    if (f == "vertical") {
                        var e = i.height(), g = parseInt(i.css("top").replace(/px/, ""), 10), h = a.pageY - c.top;
                        b = (e - h) / e;
                        if (c.top == 0 || c.left == 0)
                            return 
                    } else {
                        var j = i.width(), k = a.pageX - c.left;
                        b = k / j
                    }
                    b = Math.max(0, b), b = Math.min(b, 1), l(b), b == 0 ? d.setMuted(!0) : d.setMuted(!1), d.setVolume(b)
                }, n=!1, o=!1;
                g.hover(function() {
                    h.show(), o=!0
                }, function() {
                    o=!1, !n && f == "vertical" && h.hide()
                }), h.bind("mouseover", function() {
                    o=!0
                }).bind("mousedown", function(a) {
                    return m(a), e.globalBind("mousemove.vol", function(a) {
                        m(a)
                    }), e.globalBind("mouseup.vol", function() {
                        n=!1, e.globalUnbind(".vol"), !o && f == "vertical" && h.hide()
                    }), n=!0, !1
                }), g.find("button").click(function() {
                    d.setMuted(!d.muted)
                }), d.addEventListener("volumechange", function(a) {
                    n || (d.muted ? (l(0), g.removeClass("mejs-mute").addClass("mejs-unmute")) : (l(d.volume), g.removeClass("mejs-unmute").addClass("mejs-mute")))
                }, !1), e.container.is(":visible") && (l(a.options.startVolume), a.options.startVolume === 0 && d.setMuted(!0), d.pluginType === "native" && d.setVolume(a.options.startVolume))
            }
        })
    }(mejs.$), function($) {
        $.extend(mejs.MepDefaults, {
            usePluginFullScreen: !0,
            newWindowCallback: function() {
                return ""
            },
            fullscreenText: mejs.i18n.t("Fullscreen")
        }), $.extend(MediaElementPlayer.prototype, {
            isFullScreen: !1,
            isNativeFullScreen: !1,
            isInIframe: !1,
            buildfullscreen: function(a, b, c, d) {
                if (!a.isVideo)
                    return;
                a.isInIframe = window.location != window.parent.location;
                if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                    var e = function(b) {
                        a.isFullScreen && (mejs.MediaFeatures.isFullScreen() ? (a.isNativeFullScreen=!0, a.setControlsSize()) : (a.isNativeFullScreen=!1, a.exitFullScreen()))
                    };
                    mejs.MediaFeatures.hasMozNativeFullScreen ? a.globalBind(mejs.MediaFeatures.fullScreenEventName, e) : a.container.bind(mejs.MediaFeatures.fullScreenEventName, e)
                }
                var f = this, g = 0, h = 0, i = a.container, j = $('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + f.id + '" title="' + f.options.fullscreenText + '" aria-label="' + f.options.fullscreenText + '"></button>' + "</div>").appendTo(b);
                if (f.media.pluginType === "native" ||!f.options.usePluginFullScreen&&!mejs.MediaFeatures.isFirefox)
                    j.click(function() {
                        var b = mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || a.isFullScreen;
                        b ? a.exitFullScreen() : a.enterFullScreen()
                    });
                else {
                    var k = null, l = function() {
                        var a = document.createElement("x"), b = document.documentElement, c = window.getComputedStyle, d;
                        return "pointerEvents"in a.style ? (a.style.pointerEvents = "auto", a.style.pointerEvents = "x", b.appendChild(a), d = c && c(a, "").pointerEvents === "auto", b.removeChild(a), !!d) : !1
                    }();
                    if (l&&!mejs.MediaFeatures.isOpera) {
                        var m=!1, n = function() {
                            if (m) {
                                for (var a in o)
                                    o[a].hide();
                                j.css("pointer-events", ""), f.controls.css("pointer-events", ""), f.media.removeEventListener("click", f.clickToPlayPauseCallback), m=!1
                            }
                        }, o = {}, p = ["top", "left", "right", "bottom"], q, r, s = function() {
                            var a = j.offset().left - f.container.offset().left, b = j.offset().top - f.container.offset().top, c = j.outerWidth(!0), d = j.outerHeight(!0), e = f.container.width(), g = f.container.height();
                            for (q in o)
                                o[q].css({
                                    position: "absolute",
                                    top: 0,
                                    left: 0
                                });
                            o.top.width(e).height(b), o.left.width(a).height(d).css({
                                top: b
                            }), o.right.width(e - a - c).height(d).css({
                                top: b,
                                left: a + c
                            }), o.bottom.width(e).height(g - d - b).css({
                                top: b + d
                            })
                        };
                        f.globalBind("resize", function() {
                            s()
                        });
                        for (q = 0, r = p.length; q < r; q++)
                            o[p[q]] = $('<div class="mejs-fullscreen-hover" />').appendTo(f.container).mouseover(n).hide();
                        j.on("mouseover", function() {
                            if (!f.isFullScreen) {
                                var b = j.offset(), c = a.container.offset();
                                d.positionFullscreenButton(b.left - c.left, b.top - c.top, !1), j.css("pointer-events", "none"), f.controls.css("pointer-events", "none"), f.media.addEventListener("click", f.clickToPlayPauseCallback);
                                for (q in o)
                                    o[q].show();
                                s(), m=!0
                            }
                        }), d.addEventListener("fullscreenchange", function(a) {
                            f.isFullScreen=!f.isFullScreen, f.isFullScreen ? f.media.removeEventListener("click", f.clickToPlayPauseCallback) : f.media.addEventListener("click", f.clickToPlayPauseCallback), n()
                        }), f.globalBind("mousemove", function(a) {
                            if (m) {
                                var b = j.offset();
                                if (a.pageY < b.top || a.pageY > b.top + j.outerHeight(!0) || a.pageX < b.left || a.pageX > b.left + j.outerWidth(!0))
                                    j.css("pointer-events", ""), f.controls.css("pointer-events", ""), m=!1
                            }
                        })
                    } else 
                        j.on("mouseover", function() {
                            k !== null && (clearTimeout(k), delete k);
                            var b = j.offset(), c = a.container.offset();
                            d.positionFullscreenButton(b.left - c.left, b.top - c.top, !0)
                        }).on("mouseout", function() {
                            k !== null && (clearTimeout(k), delete k), k = setTimeout(function() {
                                d.hideFullscreenButton()
                            }, 1500)
                        })
                }
                a.fullscreenBtn = j, f.globalBind("keydown", function(b) {
                    (mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || f.isFullScreen) && b.keyCode == 27 && a.exitFullScreen()
                })
            },
            cleanfullscreen: function(a) {
                a.exitFullScreen()
            },
            containerSizeTimeout: null,
            enterFullScreen: function() {
                var a = this;
                if (a.media.pluginType !== "native" && (mejs.MediaFeatures.isFirefox || a.options.usePluginFullScreen))
                    return;
                $(document.documentElement).addClass("mejs-fullscreen"), normalHeight = a.container.height(), normalWidth = a.container.width();
                if (a.media.pluginType === "native")
                    if (mejs.MediaFeatures.hasTrueNativeFullScreen)
                        mejs.MediaFeatures.requestFullScreen(a.container[0]), a.isInIframe && setTimeout(function c() {
                            if (a.isNativeFullScreen) {
                                var b = window.devicePixelRatio || 1, d = .002, e = b * $(window).width(), f = screen.width, g = Math.abs(f - e), h = f * d;
                                g > h ? a.exitFullScreen() : setTimeout(c, 500)
                            }
                        }, 500);
                    else if (mejs.MediaFeatures.hasSemiNativeFullScreen) {
                        a.media.webkitEnterFullscreen();
                        return 
                    }
                if (a.isInIframe) {
                    var b = a.options.newWindowCallback(this);
                    if (b !== "") {
                        if (!mejs.MediaFeatures.hasTrueNativeFullScreen) {
                            a.pause(), window.open(b, a.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no");
                            return 
                        }
                        setTimeout(function() {
                            a.isNativeFullScreen || (a.pause(), window.open(b, a.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no"))
                        }, 250)
                    }
                }
                a.container.addClass("mejs-container-fullscreen").width("100%").height("100%"), a.containerSizeTimeout = setTimeout(function() {
                    a.container.css({
                        width: "100%",
                        height: "100%"
                    }), a.setControlsSize()
                }, 500), a.media.pluginType === "native" ? a.$media.width("100%").height("100%") : (a.container.find(".mejs-shim").width("100%").height("100%"), a.media.setVideoSize($(window).width(), $(window).height())), a.layers.children("div").width("100%").height("100%"), a.fullscreenBtn && a.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen"), a.setControlsSize(), a.isFullScreen=!0
            },
            exitFullScreen: function() {
                var a = this;
                clearTimeout(a.containerSizeTimeout);
                if (a.media.pluginType !== "native" && mejs.MediaFeatures.isFirefox) {
                    a.media.setFullscreen(!1);
                    return 
                }
                mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || a.isFullScreen) && mejs.MediaFeatures.cancelFullScreen(), $(document.documentElement).removeClass("mejs-fullscreen"), a.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight), a.media.pluginType === "native" ? a.$media.width(normalWidth).height(normalHeight) : (a.container.find(".mejs-shim").width(normalWidth).height(normalHeight), a.media.setVideoSize(normalWidth, normalHeight)), a.layers.children("div").width(normalWidth).height(normalHeight), a.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen"), a.setControlsSize(), a.isFullScreen=!1
            }
        })
    }(mejs.$), function($) {
        $.extend(mejs.MepDefaults, {
            startLanguage: "",
            tracksText: mejs.i18n.t("Captions/Subtitles"),
            hideCaptionsButtonWhenEmpty: !0,
            toggleCaptionsButtonWhenOnlyOne: !1,
            slidesSelector: ""
        }), $.extend(MediaElementPlayer.prototype, {
            hasChapters: !1,
            buildtracks: function(a, b, c, d) {
                if (a.tracks.length == 0)
                    return;
                var e = this, f, g = "";
                if (e.domNode.textTracks)
                    for (var f = e.domNode.textTracks.length - 1; f >= 0; f--)
                        e.domNode.textTracks[f].mode = "hidden";
                a.chapters = $('<div class="mejs-chapters mejs-layer"></div>').prependTo(c).hide(), a.captions = $('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover"><span class="mejs-captions-text"></span></div></div>').prependTo(c).hide(), a.captionsText = a.captions.find(".mejs-captions-text"), a.captionsButton = $('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + e.id + '" title="' + e.options.tracksText + '" aria-label="' + e.options.tracksText + '"></button>' + '<div class="mejs-captions-selector">' + "<ul>" + "<li>" + '<input type="radio" name="' + a.id + '_captions" id="' + a.id + '_captions_none" value="none" checked="checked" />' + '<label for="' + a.id + '_captions_none">' + mejs.i18n.t("None") + "</label>" + "</li>" + "</ul>" + "</div>" + "</div>").appendTo(b);
                var h = 0;
                for (f = 0; f < a.tracks.length; f++)
                    a.tracks[f].kind == "subtitles" && h++;
                e.options.toggleCaptionsButtonWhenOnlyOne && h == 1 ? a.captionsButton.on("click", function() {
                    if (a.selectedTrack == null)
                        var b = a.tracks[0].srclang;
                    else 
                        var b = "none";
                    a.setTrack(b)
                }) : a.captionsButton.hover(function() {
                    $(this).find(".mejs-captions-selector").css("visibility", "visible")
                }, function() {
                    $(this).find(".mejs-captions-selector").css("visibility", "hidden")
                }).on("click", "input[type=radio]", function() {
                    lang = this.value, a.setTrack(lang)
                }), a.options.alwaysShowControls ? a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : a.container.bind("controlsshown", function() {
                    a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
                }).bind("controlshidden", function() {
                    d.paused || a.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
                }), a.trackToLoad =- 1, a.selectedTrack = null, a.isLoadingTrack=!1;
                for (f = 0; f < a.tracks.length; f++)
                    a.tracks[f].kind == "subtitles" && a.addTrackButton(a.tracks[f].srclang, a.tracks[f].label);
                a.loadNextTrack(), d.addEventListener("timeupdate", function(b) {
                    a.displayCaptions()
                }, !1), a.options.slidesSelector != "" && (a.slidesContainer = $(a.options.slidesSelector), d.addEventListener("timeupdate", function(b) {
                    a.displaySlides()
                }, !1)), d.addEventListener("loadedmetadata", function(b) {
                    a.displayChapters()
                }, !1), a.container.hover(function() {
                    a.hasChapters && (a.chapters.css("visibility", "visible"), a.chapters.fadeIn(200).height(a.chapters.find(".mejs-chapter").outerHeight()))
                }, function() {
                    a.hasChapters&&!d.paused && a.chapters.fadeOut(200, function() {
                        $(this).css("visibility", "hidden"), $(this).css("display", "block")
                    })
                }), a.node.getAttribute("autoplay") !== null && a.chapters.css("visibility", "hidden")
            },
            setTrack: function(a) {
                var b = this, c;
                if (a == "none")
                    b.selectedTrack = null, b.captionsButton.removeClass("mejs-captions-enabled");
                else 
                    for (c = 0; c < b.tracks.length; c++)
                        if (b.tracks[c].srclang == a) {
                            b.selectedTrack == null && b.captionsButton.addClass("mejs-captions-enabled"), b.selectedTrack = b.tracks[c], b.captions.attr("lang", b.selectedTrack.srclang), b.displayCaptions();
                            break
                        }
            },
            loadNextTrack: function() {
                var a = this;
                a.trackToLoad++, a.trackToLoad < a.tracks.length ? (a.isLoadingTrack=!0, a.loadTrack(a.trackToLoad)) : (a.isLoadingTrack=!1, a.checkForTracks())
            },
            loadTrack: function(a) {
                var b = this, c = b.tracks[a], d = function() {
                    c.isLoaded=!0, b.enableTrackButton(c.srclang, c.label), b.loadNextTrack()
                };
                $.ajax({
                    url: c.src,
                    dataType: "text",
                    success: function(a) {
                        typeof a == "string" && /<tt\s+xml/gi.exec(a) ? c.entries = mejs.TrackFormatParser.dfxp.parse(a) : c.entries = mejs.TrackFormatParser.webvvt.parse(a), d(), c.kind == "chapters" && b.media.addEventListener("play", function(a) {
                            b.media.duration > 0 && b.displayChapters(c)
                        }, !1), c.kind == "slides" && b.setupSlides(c)
                    },
                    error: function() {
                        b.loadNextTrack()
                    }
                })
            },
            enableTrackButton: function(a, b) {
                var c = this;
                b === "" && (b = mejs.language.codes[a] || a), c.captionsButton.find("input[value=" + a + "]").prop("disabled", !1).siblings("label").html(b), c.options.startLanguage == a && $("#" + c.id + "_captions_" + a).click(), c.adjustLanguageBox()
            },
            addTrackButton: function(a, b) {
                var c = this;
                b === "" && (b = mejs.language.codes[a] || a), c.captionsButton.find("ul").append($('<li><input type="radio" name="' + c.id + '_captions" id="' + c.id + "_captions_" + a + '" value="' + a + '" disabled="disabled" />' + '<label for="' + c.id + "_captions_" + a + '">' + b + " (loading)" + "</label>" + "</li>")), c.adjustLanguageBox(), c.container.find(".mejs-captions-translations option[value=" + a + "]").remove()
            },
            adjustLanguageBox: function() {
                var a = this;
                a.captionsButton.find(".mejs-captions-selector").height(a.captionsButton.find(".mejs-captions-selector ul").outerHeight(!0) + a.captionsButton.find(".mejs-captions-translations").outerHeight(!0))
            },
            checkForTracks: function() {
                var a = this, b=!1;
                if (a.options.hideCaptionsButtonWhenEmpty) {
                    for (i = 0; i < a.tracks.length; i++)
                        if (a.tracks[i].kind == "subtitles") {
                            b=!0;
                            break
                        }
                    b || (a.captionsButton.hide(), a.setControlsSize())
                }
            },
            displayCaptions: function() {
                if (typeof this.tracks == "undefined")
                    return;
                var a = this, b, c = a.selectedTrack;
                if (c != null && c.isLoaded) {
                    for (b = 0; b < c.entries.times.length; b++)
                        if (a.media.currentTime >= c.entries.times[b].start && a.media.currentTime <= c.entries.times[b].stop) {
                            a.captionsText.html(c.entries.text[b]), a.captions.show().height(0);
                            return 
                        }
                    a.captions.hide()
                } else 
                    a.captions.hide()
            },
            setupSlides: function(a) {
                var b = this;
                b.slides = a, b.slides.entries.imgs = [b.slides.entries.text.length], b.showSlide(0)
            },
            showSlide: function(a) {
                if (typeof this.tracks == "undefined" || typeof this.slidesContainer == "undefined")
                    return;
                var b = this, c = b.slides.entries.text[a], d = b.slides.entries.imgs[a];
                typeof d == "undefined" || typeof d.fadeIn == "undefined" ? b.slides.entries.imgs[a] = d = $('<img src="' + c + '">').on("load", function() {
                    d.appendTo(b.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()
                }) : !d.is(":visible")&&!d.is(":animated") && d.fadeIn().siblings(":visible").fadeOut()
            },
            displaySlides: function() {
                if (typeof this.slides == "undefined")
                    return;
                var a = this, b = a.slides, c;
                for (c = 0; c < b.entries.times.length; c++)
                    if (a.media.currentTime >= b.entries.times[c].start && a.media.currentTime <= b.entries.times[c].stop) {
                        a.showSlide(c);
                        return 
                    }
            },
            displayChapters: function() {
                var a = this, b;
                for (b = 0; b < a.tracks.length; b++)
                    if (a.tracks[b].kind == "chapters" && a.tracks[b].isLoaded) {
                        a.drawChapters(a.tracks[b]), a.hasChapters=!0;
                        break
                    }
            },
            drawChapters: function(a) {
                var b = this, c, d, e = 0, f = 0;
                b.chapters.empty();
                for (c = 0; c < a.entries.times.length; c++) {
                    d = a.entries.times[c].stop - a.entries.times[c].start, e = Math.floor(d / b.media.duration * 100);
                    if (e + f > 100 || c == a.entries.times.length - 1 && e + f < 100)
                        e = 100 - f;
                    b.chapters.append($('<div class="mejs-chapter" rel="' + a.entries.times[c].start + '" style="left: ' + f.toString() + "%;width: " + e.toString() + '%;">' + '<div class="mejs-chapter-block' + (c == a.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '">' + '<span class="ch-title">' + a.entries.text[c] + "</span>" + '<span class="ch-time">' + mejs.Utility.secondsToTimeCode(a.entries.times[c].start) + "&ndash;" + mejs.Utility.secondsToTimeCode(a.entries.times[c].stop) + "</span>" + "</div>" + "</div>")), f += e
                }
                b.chapters.find("div.mejs-chapter").click(function() {
                    b.media.setCurrentTime(parseFloat($(this).attr("rel"))), b.media.paused && b.media.play()
                }), b.chapters.show()
            }
        }), mejs.language = {
            codes: {
                af: "Afrikaans",
                sq: "Albanian",
                ar: "Arabic",
                be: "Belarusian",
                bg: "Bulgarian",
                ca: "Catalan",
                zh: "Chinese",
                "zh-cn": "Chinese Simplified",
                "zh-tw": "Chinese Traditional",
                hr: "Croatian",
                cs: "Czech",
                da: "Danish",
                nl: "Dutch",
                en: "English",
                et: "Estonian",
                tl: "Filipino",
                fi: "Finnish",
                fr: "French",
                gl: "Galician",
                de: "German",
                el: "Greek",
                ht: "Haitian Creole",
                iw: "Hebrew",
                hi: "Hindi",
                hu: "Hungarian",
                is: "Icelandic",
                id: "Indonesian",
                ga: "Irish",
                it: "Italian",
                ja: "Japanese",
                ko: "Korean",
                lv: "Latvian",
                lt: "Lithuanian",
                mk: "Macedonian",
                ms: "Malay",
                mt: "Maltese",
                no: "Norwegian",
                fa: "Persian",
                pl: "Polish",
                pt: "Portuguese",
                ro: "Romanian",
                ru: "Russian",
                sr: "Serbian",
                sk: "Slovak",
                sl: "Slovenian",
                es: "Spanish",
                sw: "Swahili",
                sv: "Swedish",
                tl: "Tagalog",
                th: "Thai",
                tr: "Turkish",
                uk: "Ukrainian",
                vi: "Vietnamese",
                cy: "Welsh",
                yi: "Yiddish"
            }
        }, mejs.TrackFormatParser = {
            webvvt: {
                pattern_identifier: /^([a-zA-z]+-)?[0-9]+$/,
                pattern_timecode: /^([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
                parse: function(a) {
                    var b = 0, c = mejs.TrackFormatParser.split2(a, /\r?\n/), d = {
                        text: [],
                        times: []
                    }, e, f;
                    for (; b < c.length; b++)
                        if (this.pattern_identifier.exec(c[b])) {
                            b++, e = this.pattern_timecode.exec(c[b]);
                            if (e && b < c.length) {
                                b++, f = c[b], b++;
                                while (c[b] !== "" && b < c.length)
                                    f = f + "\n" + c[b], b++;
                                    f = $.trim(f).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), d.text.push(f), d.times.push({
                                        start: mejs.Utility.convertSMPTEtoSeconds(e[1]) == 0 ? .2: mejs.Utility.convertSMPTEtoSeconds(e[1]),
                                        stop: mejs.Utility.convertSMPTEtoSeconds(e[3]),
                                        settings: e[5]
                                    })
                                }
                        }
                    return d
                }
            },
            dfxp: {
                parse: function(a) {
                    a = $(a).filter("tt");
                    var b = 0, c = a.children("div").eq(0), d = c.find("p"), e = a.find("#" + c.attr("style")), f, g, h, i, j = {
                        text: [],
                        times: []
                    };
                    if (e.length) {
                        var k = e.removeAttr("id").get(0).attributes;
                        if (k.length) {
                            f = {};
                            for (b = 0; b < k.length; b++)
                                f[k[b].name.split(":")[1]] = k[b].value
                        }
                    }
                    for (b = 0; b < d.length; b++) {
                        var l, m = {
                            start: null,
                            stop: null,
                            style: null
                        };
                        d.eq(b).attr("begin") && (m.start = mejs.Utility.convertSMPTEtoSeconds(d.eq(b).attr("begin"))), !m.start && d.eq(b - 1).attr("end") && (m.start = mejs.Utility.convertSMPTEtoSeconds(d.eq(b - 1).attr("end"))), d.eq(b).attr("end") && (m.stop = mejs.Utility.convertSMPTEtoSeconds(d.eq(b).attr("end"))), !m.stop && d.eq(b + 1).attr("begin") && (m.stop = mejs.Utility.convertSMPTEtoSeconds(d.eq(b + 1).attr("begin")));
                        if (f) {
                            l = "";
                            for (var n in f)
                                l += n + ":" + f[n] + ";"
                        }
                        l && (m.style = l), m.start == 0 && (m.start = .2), j.times.push(m), i = $.trim(d.eq(b).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), j.text.push(i), j.times.start == 0 && (j.times.start = 2)
                    }
                    return j
                }
            },
            split2: function(a, b) {
                return a.split(b)
            }
        }, "x\n\ny".split(/\n/gi).length != 3 && (mejs.TrackFormatParser.split2 = function(a, b) {
            var c = [], d = "", e;
            for (e = 0; e < a.length; e++)
                d += a.substring(e, e + 1), b.test(d) && (c.push(d.replace(b, "")), d = "");
            return c.push(d), c
        })
    }(mejs.$), function($) {
        $.extend(mejs.MepDefaults, {
            contextMenuItems: [{
                render: function(a) {
                    return typeof a.enterFullScreen == "undefined" ? null : a.isFullScreen ? mejs.i18n.t("Turn off Fullscreen") : mejs.i18n.t("Go Fullscreen")
                },
                click: function(a) {
                    a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
                }
            }, {
                render: function(a) {
                    return a.media.muted ? mejs.i18n.t("Unmute") : mejs.i18n.t("Mute")
                },
                click: function(a) {
                    a.media.muted ? a.setMuted(!1) : a.setMuted(!0)
                }
            }, {
                isSeparator: !0
            }, {
                render: function(a) {
                    return mejs.i18n.t("Download Video")
                },
                click: function(a) {
                    window.location.href = a.media.currentSrc
                }
            }
            ]
        }), $.extend(MediaElementPlayer.prototype, {
            buildcontextmenu: function(a, b, c, d) {
                a.contextMenu = $('<div class="mejs-contextmenu"></div>').appendTo($("body")).hide(), a.container.bind("contextmenu", function(b) {
                    if (a.isContextMenuEnabled)
                        return b.preventDefault(), a.renderContextMenu(b.clientX - 1, b.clientY - 1), !1
                }), a.container.bind("click", function() {
                    a.contextMenu.hide()
                }), a.contextMenu.bind("mouseleave", function() {
                    a.startContextMenuTimer()
                })
            },
            cleancontextmenu: function(a) {
                a.contextMenu.remove()
            },
            isContextMenuEnabled: !0,
            enableContextMenu: function() {
                this.isContextMenuEnabled=!0
            },
            disableContextMenu: function() {
                this.isContextMenuEnabled=!1
            },
            contextMenuTimeout: null,
            startContextMenuTimer: function() {
                var a = this;
                a.killContextMenuTimer(), a.contextMenuTimer = setTimeout(function() {
                    a.hideContextMenu(), a.killContextMenuTimer()
                }, 750)
            },
            killContextMenuTimer: function() {
                var a = this.contextMenuTimer;
                a != null && (clearTimeout(a), delete a, a = null)
            },
            hideContextMenu: function() {
                this.contextMenu.hide()
            },
            renderContextMenu: function(a, b) {
                var c = this, d = "", e = c.options.contextMenuItems;
                for (var f = 0, g = e.length; f < g; f++)
                    if (e[f].isSeparator)
                        d += '<div class="mejs-contextmenu-separator"></div>';
                    else {
                        var h = e[f].render(c);
                        h != null && (d += '<div class="mejs-contextmenu-item" data-itemindex="' + f + '" id="element-' + Math.random() * 1e6 + '">' + h + "</div>")
                    }
                c.contextMenu.empty().append($(d)).css({
                    top: b,
                    left: a
                }).show(), c.contextMenu.find(".mejs-contextmenu-item").each(function() {
                    var a = $(this), b = parseInt(a.data("itemindex"), 10), d = c.options.contextMenuItems[b];
                    typeof d.show != "undefined" && d.show(a, c), a.click(function() {
                        typeof d.click != "undefined" && d.click(c), c.contextMenu.hide()
                    })
                }), setTimeout(function() {
                    c.killControlsTimer("rev3")
                }, 100)
            }
        })
    }(mejs.$), function($) {
        $.extend(mejs.MepDefaults, {
            postrollCloseText: mejs.i18n.t("Close")
        }), $.extend(MediaElementPlayer.prototype, {
            buildpostroll: function(a, b, c, d) {
                var e = this, f = e.container.find('link[rel="postroll"]').attr("href");
                typeof f != "undefined" && (a.postroll = $('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + e.options.postrollCloseText + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(c).hide(), e.media.addEventListener("ended", function(b) {
                    $.ajax({
                        dataType: "html",
                        url: f,
                        success: function(a, b) {
                            c.find(".mejs-postroll-layer-content").html(a)
                        }
                    }), a.postroll.show()
                }, !1))
            }
        })
    }(mejs.$)
});
