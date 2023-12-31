/*!CK:4011118768!*/
/*1415600700,*/

if (self.CavalryLogger) {
    CavalryLogger.start_js(["35s3L"]);
}

__d("BroadcastRequestParam", [], function(a, b, c, d, e, f) {
    e.exports = {
        ANSWER_IDS: "answer_ids",
        BROADCAST_REQUEST_ID: "broadcast_request_id",
        CHECKED_IDS: "checked_ids",
        COMMENT_TOKEN: "comment_token",
        COMPOSER_TOKEN_IDS: "composer_token_ids",
        DESCRIPTION_DOM_ID: "description_dom_id",
        DOM_ID: "dom_id",
        ENTITY_TITLE: "entity_title",
        ENTITY_TOKEN: "entity_token",
        ERROR_CODE: "error_code",
        HAS_VIEWER_VOTED: "has_viewer_voted",
        QUERIED_RECIPIENTS: "queried_recipients",
        QUERY: "q",
        RECIPIENT_IDS: "recipient_ids",
        SEND_REQUEST: "send_request",
        SOURCE: "source",
        SOURCE_OBJ_ID: "source_obj_id",
        SUGGESTION_CARD_ID: "suggestion_card_id",
        SUGGESTION_ID: "suggestion_id",
        SUGGESTION_IDS: "add_suggestions_ids",
        SUGGESTION_ROW_ID: "suggestion_row_id",
        TARGET_ID: "target_id",
        VOTE_ACTION: "vote_action",
        EXISTING_IDS: "existing_ids",
        VALUE: "value",
        BROADCAST_REQUEST_TYPE: "broadcast_request_type",
        COMPOSER_TEXT: "composer_text"
    };
}, null);
__d("ComposedBlockType", [], function(a, b, c, d, e, f) {
    e.exports = {
        UNSTYLED: 0,
        PARAGRAPH: 1,
        UNORDERED_LIST_ITEM: 2,
        ORDERED_LIST_ITEM: 3,
        BLOCKQUOTE: 4,
        HEADER_ONE: 5,
        HEADER_TWO: 6,
        CODE: 7,
        MEDIA: 8
    };
}, null);
__d("ComposedEntityMutability", [], function(a, b, c, d, e, f) {
    e.exports = {
        MUTABLE: 0,
        IMMUTABLE: 1,
        SEGMENTED: 2
    };
}, null);
__d("ComposedEntityType", [], function(a, b, c, d, e, f) {
    e.exports = {
        MENTION: 0,
        LINK: 1,
        IMAGE: 2,
        VIDEO: 3,
        EMOTICON: 4
    };
}, null);
__d("ComposedInlineStyle", [], function(a, b, c, d, e, f) {
    e.exports = {
        NONE: 0,
        BOLD: 1,
        ITALIC: 2,
        UNDERLINE: 4,
        CODE: 8
    };
}, null);
__d("UFITranslationConstants", [], function(a, b, c, d, e, f) {
    e.exports = {
        BING_PAGE_URL: "http:\/\/bing.com\/translator",
        BING_TRANSLATOR_APP: "bing",
        FB_TRANSLATOR_APP: "fb"
    };
}, null);
__d("CLoggerX", ["Banzai", "DOM", "debounce", "Event", "ge", "Parent", "Keys"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = 10 * 60 * 1000, n = b('Keys').RETURN, o = {}, p = function(s) {
        var t = (s.target || s.srcElement).id, u = (s.target || s.srcElement).value.trim().length, v = q.getTracker(t);
        if (!v)
            return;
        if (u > 5&&!v.submitted) {
            g.post('censorlogger', {
                cl_impid: v.impid,
                clearcounter: v.clearcounter,
                instrument: v.type,
                elementid: t,
                parent_fbid: (v.parent_fbid == 'unknown' ? null : v.parent_fbid),
                version: "x"
            }, g.VITAL);
            q.setSubmitted(t, true);
        } else if (u === 0 && v.submitted && s.which != n) {
            o[t] = r(t);
            o[t]();
        } else if (u > 0 && v.submitted)
            if (o[t])
                o[t].reset();
    }, q = {
        init: function() {
            this.trackedElements = this.trackedElements || {};
            this.feedbackForms = this.feedbackForms || {};
        },
        setImpressionID: function(s) {
            this.init();
            this.impressionID = s;
            this.clean();
        },
        setComposerTargetData: function(s) {
            this.cTargetID = s.targetID || 'unknown';
            this.cTargetFBType = s.targetType || 'unknown';
        },
        clean: function() {
            for (var s in this.trackedElements) {
                if (o[s]) {
                    o[s].reset();
                    delete o[s];
                }
                delete this.trackedElements[s];
            }
        },
        trackComposer: function(s, t, u) {
            this.setComposerTargetData(u);
            this.startTracking(s, 'composer', this.cTargetID, this.cTargetFBType, t);
        },
        trackFeedbackForm: function(s, t, u) {
            this.init();
            this.impressionID = this.impressionID || u;
            var v, w;
            v = t ? t.targetID || 'unknown' : 'unknown';
            w = t ? t.targetType || 'unknown' : 'unknown';
            this.feedbackForms[s] = {
                parent_fbid: v,
                parent_type: w
            };
        },
        trackMentionsInput: function(s, t) {
            this.init();
            var u, v, w;
            if (!s)
                return;
            u = l.byTag(s, 'form');
            if (!u)
                return;
            v = h.getID(u);
            w = this.feedbackForms[v];
            if (!w)
                return;
            var x = t || w.parent_fbid, y = t ? 416: w.parent_type;
            this.startTracking(s, 'comment', x, y, u);
        },
        startTracking: function(s, t, u, v, w) {
            this.init();
            var x = h.getID(s);
            if (this.getTracker(x))
                return;
            var y = h.getID(w);
            j.listen(s, 'keyup', p.bind(this));
            this.trackedElements[x] = {
                submitted: false,
                clearcounter: 0,
                type: t,
                impid: this.impressionID,
                parent_fbid: u,
                parent_type: v,
                parentElID: y
            };
            this.addJoinTableInfoToForm(w, x);
        },
        getTracker: function(s) {
            return (this.trackedElements ? this.trackedElements[s] : null);
        },
        setSubmitted: function(s, t) {
            if (this.trackedElements[s])
                this.trackedElements[s].submitted = t;
        },
        incrementClearCounter: function(s) {
            var t = this.getTracker(s);
            if (!t)
                return;
            t.clearcounter++;
            t.submitted = false;
            var u = h.scry(k(t.parentElID), 'input[name="clp"]')[0];
            if (u)
                u.value = this.getJSONRepForTrackerID(s);
            this.trackedElements[s] = t;
        },
        addJoinTableInfoToForm: function(s, t) {
            var u = this.getTracker(t);
            if (!u)
                return;
            var v = h.scry(s, 'input[name="clp"]')[0];
            if (!v)
                h.prependContent(s, h.create('input', {
                    type: 'hidden',
                    name: 'clp',
                    value: this.getJSONRepForTrackerID(t)
                }));
        },
        getCLParamsForTarget: function(s, t) {
            if (!s)
                return "";
            var u = h.getID(s);
            return this.getJSONRepForTrackerID(u, t);
        },
        getJSONRepForTrackerID: function(s, t) {
            var u = this.getTracker(s);
            if (!u)
                return "";
            return JSON.stringify({
                cl_impid: u.impid,
                clearcounter: u.clearcounter,
                elementid: s,
                version: "x",
                parent_fbid: t || u.parent_fbid
            });
        }
    }, r = function(s) {
        return i(function() {
            q.incrementClearCounter(s);
        }, m, q);
    };
    e.exports = q;
}, null);
__d("ClickPointIdentifiersDEPRECATED", [], function(a, b, c, d, e, f) {
    var g = {
        types: {
            TIMELINE_SEE_LIKERS: 'timeline:seelikes'
        },
        getUserActionID: function(h) {
            return '{"ua_id":"' + h + '"}';
        }
    };
    e.exports = g;
}, null);
__d("NumberFormat", ["NumberFormatConfig"], function(a, b, c, d, e, f, g) {
    var h = /(\d{3})(?=\d)/g;
    function i(l) {
        return ('' + l).split('').reverse().join('');
    }
    function j(l, m) {
        if (Math.abs(l).toString().length < g.minDigitsForThousandsSeparator)
            return l.toString();
        var n = i(l);
        return i(n.replace(h, '$1' + m));
    }
    var k = {
        formatIntegerWithDelimiter: j,
        formatInteger: function(l) {
            return j(l, g.numberDelimiter);
        }
    };
    e.exports = k;
}, null);
__d("UFIBlingItem.react", ["React", "NumberFormat", "cx", "fbt", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = g.createClass({
        displayName: "UFIBlingItem",
        propTypes: {
            contextArgs: g.PropTypes.object.isRequired,
            count: g.PropTypes.number.isRequired,
            allowText: g.PropTypes.bool,
            className: g.PropTypes.string,
            iconClassName: g.PropTypes.string,
            itemKey: g.PropTypes.string
        },
        render: function() {
            var m = k(this.props.className, this.props.iconClassName, "UFIBlingBoxSprite"), n = h.formatIntegerWithDelimiter(this.props.count, this.props.contextArgs.numberdelimiter || ','), o = n;
            if (this.props.allowText)
                switch (this.props.itemKey) {
                case 'reshare':
                    if (this.props.contextArgs.reshareedu)
                        o = j._({
                            "Share": "{count} Share",
                            "Shares": "{count} Shares"
                        }, [j.param("count", n), j['enum'](this.props.count === 1 ? 'Share' : 'Shares', {
                            Share: "Share",
                            Shares: "Shares"
                        })]);
                        break;
                }
            return (g.createElement("span", null, g.createElement("i", {
                className: m
            }), g.createElement("span", {
                className: "UFIBlingBoxText"
            }, o)));
        }
    });
    e.exports = l;
}, null);
__d("UFIBlingBox.react", ["React", "UFIBlingItem.react", "UFIConstants", "cx", "fbt", "tx", "FeedNFBConstants"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = b('FeedNFBConstants').data, n = g.createClass({
        displayName: "UFIBlingBox",
        propTypes: {
            contextArgs: g.PropTypes.object.isRequired,
            'data-ft': g.PropTypes.string,
            comments: g.PropTypes.number,
            likes: g.PropTypes.number,
            nfb: g.PropTypes.number,
            onClick: g.PropTypes.func,
            permalink: g.PropTypes.string,
            reshares: g.PropTypes.number
        },
        render: function() {
            var o = [], p = '';
            if (this.props.likes) {
                o.push(g.createElement(h, {
                    className: ((o.length > 0 ? "mls" : '')),
                    contextArgs: this.props.contextArgs,
                    count: this.props.likes,
                    iconClassName: "UFIBlingBoxLikeIcon",
                    itemKey: "like",
                    key: "like"
                }));
                p += (this.props.likes == 1) ? "1 like" : l._("{count} likes", {
                    count: this.props.likes
                });
                p += ' ';
            }
            if (this.props.comments) {
                o.push(g.createElement(h, {
                    className: ((o.length > 0 ? "mls" : '')),
                    contextArgs: this.props.contextArgs,
                    count: this.props.comments,
                    iconClassName: "UFIBlingBoxCommentIcon",
                    itemKey: "comment",
                    key: "comment"
                }));
                p += (this.props.comments == 1) ? "1 comment" : l._("{count} comments", {
                    count: this.props.comments
                });
                p += ' ';
            }
            if (this.props.reshares) {
                o.push(g.createElement(h, {
                    className: ((o.length > 0 ? "mls" : '')),
                    contextArgs: this.props.contextArgs,
                    count: this.props.reshares,
                    iconClassName: "UFIBlingBoxReshareIcon",
                    itemKey: "reshare",
                    key: "reshare"
                }));
                p += (this.props.reshares == 1) ? "1 share" : l._("{count} shares", {
                    count: this.props.reshares
                });
            }
            if (this.props.nfb && m) {
                o.push(g.createElement(h, {
                    className: ((o.length > 0 ? "mls" : '')),
                    contextArgs: this.props.contextArgs,
                    count: this.props.nfb,
                    iconClassName: "_1ufb",
                    itemKey: "nfb",
                    key: "nfb"
                }));
                p += (this.props.nfb == 1) ? m.ONE_NFB : k._("{nfb count}{nfb text}", [k.param("nfb count", this.props.nfb), k.param("nfb text", m.MULT_NFB)]);
                p += ' ';
            }
            var q = g.createElement("a", {
                className: "UFIBlingBox uiBlingBox feedbackBling",
                href: this.props.permalink,
                "data-ft": this.props['data-ft'],
                "aria-label": p
            }, o);
            if (this.props.comments > i.defaultPageSize)
                return q;
            q.props.onClick = this.props.onClick;
            q.props.rel = 'ignore';
            return q;
        }
    });
    e.exports = n;
}, null);
__d("UFILikeLink.react", ["AccessibilityLogger", "React", "TrackingNodes", "tx"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = h.createClass({
        displayName: "UFILikeLink",
        propTypes: {
            likeAction: h.PropTypes.bool,
            onClick: h.PropTypes.func
        },
        _handleClick: function(event) {
            g.logLikeEnterPress();
            if (this.props.onClick)
                this.props.onClick(event);
        },
        render: function() {
            var l = this.props.likeAction ? "Like": "Unlike", m = i.getTrackingInfo(this.props.likeAction ? i.types.LIKE_LINK : i.types.UNLIKE_LINK), n = this.props.likeAction ? "Like this": "Unlike this";
            return (h.createElement("span", null, h.createElement("a", {
                className: "UFILikeLink accessible_elem",
                href: "#",
                role: "button",
                "aria-live": "polite",
                title: n,
                onClick: this._handleClick
            }, l), h.createElement("a", {
                className: "UFILikeLink",
                href: "#",
                role: "button",
                "aria-live": "polite",
                title: n,
                onClick: this.props.onClick,
                "data-ft": m
            }, l)));
        }
    });
    e.exports = k;
}, null);
__d("UFIShareLink.react", ["React", "TrackingNodes", "fbt"], function(a, b, c, d, e, f, g, h, i) {
    var j = g.createClass({
        displayName: "UFIShareLink",
        propTypes: {
            href: g.PropTypes.oneOfType([g.PropTypes.object, g.PropTypes.string]).isRequired
        },
        render: function() {
            var k = "Send this to friends or post it on your timeline.", l = '{ "tn": "' + h.encodeTN(h.types.SHARE_LINK) + '", "type": 25 }';
            return (g.createElement("a", {
                className: "share_action_link",
                "data-ft": l,
                href: this.props.href,
                rel: "dialog",
                title: k
            }, "Share"));
        }
    });
    e.exports = j;
}, null);
__d("ProfileBrowserLink", ["URI"], function(a, b, c, d, e, f, g) {
    var h = '/ajax/browser/dialog/', i = '/browse/', j = function(l, m, n) {
        return new g(l + m).setQueryData(n);
    }, k = {
        constructPageURI: function(l, m) {
            return j(i, l, m);
        },
        constructDialogURI: function(l, m) {
            return j(h, l, m);
        }
    };
    e.exports = k;
}, null);
__d("ProfileBrowserTypes", [], function(a, b, c, d, e, f) {
    var g = {
        LIKES: 'likes',
        GROUP_MESSAGE_VIEWERS: 'group_message_viewers',
        MUTUAL_FRIENDS: 'mutual_friends',
        TODO_LIST_ASSIGNEES: 'todo_list_assignees'
    };
    e.exports = g;
}, null);
__d("UFITimelineBlingBox.react", ["ProfileBrowserLink", "ProfileBrowserTypes", "React", "UFIBlingItem.react", "URI", "cx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    var n = i.createClass({
        displayName: "UFITimelineBlingBox",
        propTypes: {
            contextArgs: i.PropTypes.object.isRequired,
            'data-ft': i.PropTypes.string,
            'data-gt': i.PropTypes.string,
            actorid: i.PropTypes.any,
            commentOnClick: i.PropTypes.func,
            comments: i.PropTypes.number,
            enableShowComments: i.PropTypes.bool,
            enableShowLikes: i.PropTypes.bool,
            feedbackFBID: i.PropTypes.any,
            likes: i.PropTypes.number,
            reshares: i.PropTypes.number
        },
        render: function() {
            var o = [];
            if (this.props.likes && this.props.enableShowLikes) {
                var p = this._getProfileBrowserURI(), q = "See who likes this", r = i.createElement("a", {
                    ajaxify: p.dialog,
                    className: this._getItemClassName(o),
                    "data-ft": this.props['data-ft'],
                    "data-gt": this.props['data-gt'],
                    "data-hover": "tooltip",
                    "data-tooltip-alignh": "right",
                    "data-tooltip-uri": this._getLikeToolTipURI(),
                    href: p.page,
                    key: "like",
                    rel: "dialog",
                    role: "button",
                    title: q
                }, i.createElement(j, {
                    contextArgs: this.props.contextArgs,
                    count: this.props.likes,
                    iconClassName: "UFIBlingBoxTimelineLikeIcon",
                    itemKey: "like"
                }));
                o.push(r);
            }
            if (this.props.comments && this.props.enableShowComments) {
                var s = "Show comments", t = i.createElement("a", {
                    "aria-label": s,
                    className: this._getItemClassName(o),
                    "data-ft": this.props['data-ft'],
                    "data-hover": "tooltip",
                    "data-tooltip-alignh": "right",
                    href: "#",
                    key: "comment",
                    onClick: this.props.commentOnClick
                }, i.createElement(j, {
                    contextArgs: this.props.contextArgs,
                    count: this.props.comments,
                    iconClassName: "UFIBlingBoxTimelineCommentIcon",
                    itemKey: "comment"
                }));
                o.push(t);
            }
            if (this.props.reshares) {
                var u = "Show shares", v = this._getShareViewURI(), w = i.createElement("a", {
                    ajaxify: v.dialog,
                    "aria-label": u,
                    className: this._getItemClassName(o),
                    "data-ft": this.props['data-ft'],
                    "data-hover": "tooltip",
                    "data-tooltip-alignh": "right",
                    href: v.page,
                    key: "reshare",
                    rel: "async"
                }, i.createElement(j, {
                    allowText: true,
                    contextArgs: this.props.contextArgs,
                    count: this.props.reshares,
                    iconClassName: "UFIBlingBoxTimelineReshareIcon",
                    itemKey: "reshare"
                }));
                o.push(w);
            }
            return (i.createElement("span", null, o));
        },
        _getItemClassName: function(o) {
            return ((o.length > 0 ? "mls" : '') + (' ' + "UFIBlingBoxTimelineItem"));
        },
        _getLikeToolTipURI: function() {
            if (this.props.feedbackFBID) {
                var o = new k('/ajax/like/tooltip.php').setQueryData({
                    comment_fbid: this.props.feedbackFBID
                });
                return o.toString();
            } else 
                return null;
        },
        _getProfileBrowserURI: function() {
            if (this.props.feedbackFBID) {
                var o = h.LIKES, p = {
                    id: this.props.feedbackFBID,
                    actorid: this.props.actorid
                }, q = g.constructDialogURI(o, p), r = g.constructPageURI(o, p), s = {
                    dialog: q.toString(),
                    page: r.toString()
                };
                return s;
            }
        },
        _getShareViewURI: function() {
            if (this.props.feedbackFBID) {
                var o = new k('/ajax/shares/view').setQueryData({
                    target_fbid: this.props.feedbackFBID
                }), p = new k('/shares/view').setSubdomain('www').setQueryData({
                    id: this.props.feedbackFBID
                }), q = {
                    dialog: o.toString(),
                    page: p.toString()
                };
                return q;
            }
        }
    });
    e.exports = n;
}, null);
__d("UFICommentList", ["ClientIDs", "KeyedCallbackManager", "UFICentralUpdates", "UFIConstants", "UFIFeedbackTargets", "keyMirror"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    "use strict";
    var m = l({
        actorID: true
    });
    function n(o) {
        this.count = 0;
        this.deletedComments = {};
        this.deletedCount = 0;
        this.dataSource = new h();
        this.feedbackTargetID = o;
        this.lastRequestedOffset = 0;
        this.lastRequestedLength = 0;
        this.basePermalink = "";
        this.commentPermalinks = {};
        this.orderReversed = false;
        k.getFeedbackTarget(this.feedbackTargetID, function(p) {
            this.actorID = p.actorforpost;
            this.basePermalink = p.permalink;
            this.orderReversed = p.isranked;
        }.bind(this));
    }
    n.prototype.addComment = function(o, p, q) {
        var r = p && g.isExistingClientID(p), s = this.dataSource.getAllResources(), t = {};
        for (var u in s) {
            var v = s[u];
            t[v] = u;
        }
        if (r && p in t) {
            t[o] = t[p];
            var w = t[p];
            this.dataSource.setResource(w, o);
        } else if (!t[o]) {
            var x = this.count;
            this.count++;
            t[o] = x;
            this.dataSource.setResource(x, o);
        }
        if (q)
            this.commentPermalinks[o] = this.buildCommentPermalink(o, q, t[o]);
        i.didUpdateFeedback(this.feedbackTargetID);
    };
    n.prototype.addCommentIDs = function(o, p, q) {
        var r = {};
        for (var s = 0; s < p; s++)
            r[o + s] = q[s] || j.unavailableCommentKey;
        this.dataSource.addResourcesAndExecute(r);
        i.didUpdateFeedback(this.feedbackTargetID);
        return this;
    };
    n.prototype.getComments = function(o, p, q, r) {
        var s = [];
        for (var t = 0; t < p; t++)
            s.push(o + t);
        var u = this.dataSource.getUnavailableResourcesFromRequest(s);
        if (u.length) {
            var v = Math.min.apply(Math, u), w = Math.max.apply(Math, u), x = v, y = w - v + 1;
            if (x < this.lastRequestedOffset || (x + y) > (this.lastRequestedOffset + this.lastRequestedLength)) {
                this.lastRequestedOffset = x;
                this.lastRequestedLength = y;
                this.fetchComments(x, y, q);
            }
        } else 
            this.dataSource.deferredExecuteOrEnqueue(s).addCallback(this.deferredCallback.bind(this, o, p, r));
    };
    n.prototype.fetchComments = function(o, p, q) {};
    n.prototype.deferredCallback = function(o, p, q, r) {};
    n.prototype.reset = function() {
        var o = this.dataSource.getAllResources();
        this.dataSource.reset();
        this.count = 0;
        this.deletedCount = 0;
        this.deletedComments = {};
        this.lastRequestedOffset = 0;
        this.lastRequestedLength = 0;
        return o;
    };
    n.prototype.deleteComment = function(o) {
        if (!(o in this.deletedComments)) {
            this.deletedComments[o] = true;
            this.deletedCount++;
        }
    };
    n.prototype.updateCommentCount = function(o) {
        this.count = o;
        this.deletedCount = 0;
        return this;
    };
    n.prototype.getFeedbackTargetID = function() {
        return this.feedbackTargetID;
    };
    n.prototype.getCommentCount = function() {
        return this.count;
    };
    n.prototype.getDeletedCount = function() {
        return this.deletedCount;
    };
    n.prototype.getDisplayedCommentCount = function() {
        return this.count - this.deletedCount;
    };
    n.prototype.getBasePermalink = function() {
        return this.basePermalink;
    };
    n.prototype.buildCommentPermalink = function(o, p, q) {};
    n.prototype.getPermalinkForComment = function(o) {
        return this.commentPermalinks[o];
    };
    n.isValidContextPropertyForReset = function(o) {
        return o in m;
    };
    e.exports = n;
}, null);
__d("UFIInstanceState", ["UFICentralUpdates"], function(a, b, c, d, e, f, g) {
    var h = {};
    function i(k) {
        if (!h[k])
            h[k] = {};
    }
    var j = {
        getKeyForInstance: function(k, l) {
            i(k);
            return h[k][l];
        },
        updateState: function(k, l, m) {
            i(k);
            h[k][l] = m;
            g.didUpdateInstanceState(k, l);
        },
        updateStateField: function(k, l, m, n) {
            var o = this.getKeyForInstance(k, l) || {};
            o[m] = n;
            this.updateState(k, l, o);
        }
    };
    e.exports = j;
}, null);
__d("UFIComments", ["ClientIDs", "ImmutableObject", "UFICentralUpdates", "UFIConstants", "UFIInstanceState", "invariant", "merge", "randomInt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    "use strict";
    var o = {}, p = {};
    function q(fa) {
        return fa in p ? p[fa] : fa;
    }
    function r(fa, ga) {
        fa.forEach(function(ha) {
            var ia = ha.ftentidentifier, ja = j.UFIPayloadSourceType, ka = ha.clientid, la = false, ma = m({}, ha);
            if (ka) {
                delete ma.clientid;
                la = g.isExistingClientID(ka);
                if (la && p[ka])
                    return;
            }
            if ((ga === ja.LIVE_SEND) || (ga === ja.USER_ACTION) || (ga === ja.ENDPOINT_ADD_COMMENT) || (ga === ja.ENDPOINT_EDIT_COMMENT))
                ma.isunseen = true;
            if (ga === ja.ENDPOINT_COMMENT_FETCH || ga === ja.ENDPOINT_ID_COMMENT_FETCH)
                ma.fromfetch = true;
            if (la) {
                if (o[ka].ufiinstanceid)
                    k.updateStateField(o[ka].ufiinstanceid, 'locallycomposed', ha.id, true);
                ma.ufiinstanceid = o[ka].ufiinstanceid;
                p[ka] = ha.id;
                o[ha.id] = o[ka];
                delete o[ka];
                i.didUpdateComment(ka);
            }
            ea.setComment(ha.id, new h(ma));
            i.didUpdateComment(ha.id);
            i.didUpdateFeedback(ia);
        });
    }
    function s(fa) {
        for (var ga = 0; ga < fa.length; ga++) {
            var ha = fa[ga];
            switch (ha.actiontype) {
            case j.UFIActionType.LIKE_ACTION:
                if (ea.getComment(ha.entidentifier))
                    t(ha.clientid, ha.entidentifier, ha.hasviewerliked, ha.likecount);
                break;
            case j.UFIActionType.COMMENT_LIKE:
                t(ha.clientid, ha.commentid, ha.viewerliked, ha.likecount);
                break;
            case j.UFIActionType.DELETE_COMMENT:
                x(ha);
                break;
            case j.UFIActionType.LIVE_DELETE_COMMENT:
                y(ha);
                break;
            case j.UFIActionType.REMOVE_PREVIEW:
                z(ha);
                break;
            case j.UFIActionType.COMMENT_SET_SPAM:
                aa(ha);
                break;
            case j.UFIActionType.CONFIRM_COMMENT_REMOVAL:
                ba(ha);
                break;
            case j.UFIActionType.TRANSLATE_COMMENT:
                v(ha);
                break;
            case j.UFIActionType.COMMENT_LIKECOUNT_UPDATE:
                u(ha);
                break;
            }
        }
    }
    function t(fa, ga, ha, ia) {
        var ja = ea.getComment(ga);
        if (ja) {
            var ka = {}, la = fa && g.isExistingClientID(fa);
            if (!la) {
                ka.hasviewerliked = ha;
                ka.likecount = ia;
            }
            ka.likeconfirmhash = n(0, 1024);
            da(ga, ka);
        }
    }
    function u(fa) {
        var ga = ea.getComment(fa.commentid);
        if (ga && fa.hasviewerliked === ga.hasviewerliked) {
            var ha = {
                likecount: fa.likecount,
                likeconfirmhash: n(0, 1024)
            };
            da(fa.commentid, ha);
        }
    }
    function v(fa) {
        var ga = fa.commentid, ha = ea.getComment(ga);
        if (ha) {
            var ia = {
                translatedtext: fa.translatedtext,
                translatorapp: fa.translatorapp
            };
            da(ga, ia);
        }
    }
    function w(fa) {
        var ga = {
            reportLink: fa.reportLink,
            commenterIsFOF: fa.commenterIsFOF,
            userIsMinor: fa.userIsMinor,
            giveFeedbackLink: fa.giveFeedbackLink
        };
        return ga;
    }
    function x(fa) {
        var ga = ea.getComment(fa.commentid);
        ca(ga, j.UFIStatus.DELETED);
    }
    function y(fa) {
        var ga = ea.getComment(fa.commentid);
        if (ga && ga.status !== j.UFIStatus.DELETED)
            ca(ga, j.UFIStatus.LIVE_DELETED);
    }
    function z(fa) {
        da(fa.commentid, {
            attachment: null
        });
    }
    function aa(fa) {
        var ga = ea.getComment(fa.commentid), ha = fa.shouldHideAsSpam ? j.UFIStatus.SPAM_DISPLAY: null;
        ca(ga, ha);
    }
    function ba(fa) {
        da(fa.commentid, w(fa));
    }
    function ca(fa, ga) {
        da(fa.id, {
            priorstatus: fa.status,
            status: ga
        });
    }
    function da(fa, ga) {
        var ha = ea.getComment(fa) || new h({});
        ea.setComment(fa, h.set(ha, ga));
        i.didUpdateComment(ha.id);
        i.didUpdateFeedback(ha.ftentidentifier);
    }
    var ea = {
        getComment: function(fa) {
            if (fa === j.unavailableCommentKey)
                return null;
            return o[q(fa)];
        },
        setComment: function(fa, ga) {
            l(ga instanceof h);
            o[q(fa)] = ga;
        },
        resetComments: function(fa) {
            for (var ga in fa)
                delete o[q(ga)];
        }
    };
    i.subscribe('update-comments', function(fa, ga) {
        if (ga.comments && ga.comments.length)
            r(ga.comments, ga.payloadsource);
    });
    i.subscribe('update-actions', function(fa, ga) {
        if (ga.actions && ga.actions.length)
            s(ga.actions);
    });
    e.exports = ea;
}, null);
__d("UFIReplyCommentList", ["ActorURI", "MercuryServerDispatcher", "UFICentralUpdates", "UFICommentList", "UFIComments", "UFIConstants", "URI"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    "use strict";
    var n = {};
    for (var o in j)
        if (j.hasOwnProperty(o))
            q[o] = j[o];
    var p = j === null ? null: j.prototype;
    q.prototype = Object.create(p);
    q.prototype.constructor = q;
    q.__superConstructor__ = j;
    q.getCommentList = function(s, t) {
        if (!n[t])
            n[t] = new q(s, t);
        return n[t];
    };
    q.resetWithContext = function(s, t, u) {
        var v = n[t];
        if (!v)
            return;
        v.reset();
        for (var w in u)
            if (this.isValidContextPropertyForReset(w))
                v[w] = u[w];
    };
    function q(s, t) {
        j.call(this, s);
        this.parentCommentID = t;
    }
    q.prototype.fetchComments = function(s, t, u) {
        var v = {
            ft_ent_identifier: this.feedbackTargetID,
            parent_comment_ids: [this.parentCommentID],
            source: null,
            offsets: [s],
            lengths: [t]
        };
        if (!u)
            v[g.PARAMETER_ACTOR] = this.actorID;
        h.trySend('/ajax/ufi/reply_fetch.php', v);
    };
    q.prototype.deferredCallback = function(s, t, u, v) {
        var w = {};
        for (var x = 0; x < t; x++) {
            var y = k.getComment(v[s + x]);
            if (y)
                w[s + x] = y;
        }
        u(w);
    };
    q.prototype.reset = function() {
        var s = p.reset.call(this), t = {};
        for (var u in s) {
            var v = s[u];
            t[v] = true;
        }
        k.resetComments(t);
    };
    q.prototype.getParentCommentID = function() {
        return this.parentCommentID;
    };
    q.prototype.buildCommentPermalink = function(s, t, u) {
        if (!this.basePermalink)
            return null;
        return (m(this.basePermalink).addQueryData({
            reply_comment_id: t,
            total_comments: this.count
        }).toString());
    };
    h.registerEndpoints({
        '/ajax/ufi/reply_fetch.php': {
            mode: h.IMMEDIATE
        }
    });
    function r(s) {
        var t = k.getComment(s.commentid), u = t.id, v = t.ftentidentifier, w = t.parentcommentid;
        if (!w)
            return;
        if (t.status !== l.UFIStatus.DELETED && t.status !== l.UFIStatus.FAILED_ADD)
            q.getCommentList(v, w).deleteComment(u);
    }
    i.subscribe('update-actions', function(s, t) {
        if (t.actions && t.actions.length)
            for (var u = 0; u < t.actions.length; u++) {
                var v = t.actions[u];
                switch (v.actiontype) {
                case l.UFIActionType.DELETE_COMMENT:
                    r(v);
                    break;
                }
            }
    });
    i.subscribe('update-comment-lists', function(s, t) {
        var u = t.commentlists;
        if (u && u.replies && Object.keys(u).length)
            for (var v in u.replies) {
                var w = u.replies[v], x = w.ftentidentifier;
                q.getCommentList(x, v).addCommentIDs(w.range.offset, w.range.length, w.values).updateCommentCount(w.count);
            }
    });
    i.subscribe('update-comments', function(s, t) {
        if (t.comments && t.comments.length)
            t.comments.forEach(function(u) {
                var v = u.entidentifier, w = u.parentcommentid;
                if (!w)
                    return;
                    q.getCommentList(v, w).addComment(u.id, u.clientid, u.legacyid);
                });
    });
    e.exports = q;
}, null);
__d("UFIToplevelCommentList", ["ActorURI", "MercuryServerDispatcher", "UFICentralUpdates", "UFICommentList", "UFIComments", "UFIConstants", "UFIReplyCommentList", "URI"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    "use strict";
    var o = {};
    for (var p in j)
        if (j.hasOwnProperty(p))
            r[p] = j[p];
    var q = j === null ? null: j.prototype;
    r.prototype = Object.create(q);
    r.prototype.constructor = r;
    r.__superConstructor__ = j;
    r.getCommentList = function(t, u) {
        if (!o[t])
            o[t] = {};
        if (!o[t][u]) {
            var v = new r(t, u), w = r.getCommentListsForFeedbackTargetID(t);
            if (w.length)
                v.updateCommentCount(w[0].getCommentCount());
            o[t][u] = v;
        }
        return o[t][u];
    };
    r.getCommentListsForFeedbackTargetID = function(t) {
        var u = [], v = o[t] || {};
        for (var w in v)
            u.push(v[w]);
        return u;
    };
    r.getCommentListForFeedbackTargetID_UNSAFE = function(t) {
        var u = r.getCommentListsForFeedbackTargetID(t);
        return u.length ? u[0] : null;
    };
    r.resetCommentListsForFeedbackTargetID = function(t) {
        if (!o[t])
            return;
        var u = {};
        for (var v in o[t]) {
            var w = o[t][v], x = w.reset();
            for (var y in x) {
                var z = x[y];
                u[z] = true;
            }
        }
        k.resetComments(u);
    };
    r.resetCommentListsWithContext = function(t, u) {
        if (!o[t])
            return;
        var v = {};
        for (var w in o[t]) {
            var x = o[t][w];
            for (var y in u)
                if (this.isValidContextPropertyForReset(y))
                    x[y] = u[y];
            var z = x.reset();
            for (var aa in z) {
                var ba = z[aa];
                v[ba] = true;
                m.resetWithContext(t, ba, u);
            }
        }
        k.resetComments(v);
    };
    function r(t, u) {
        j.call(this, t);
        this.orderingMode = u;
    }
    r.prototype.fetchComments = function(t, u, v) {
        var w = {
            ft_ent_identifier: this.feedbackTargetID,
            viewas: v,
            source: null,
            offset: t,
            length: u,
            orderingmode: this.orderingMode
        };
        if (!v)
            w[g.PARAMETER_ACTOR] = this.actorID;
        h.trySend('/ajax/ufi/comment_fetch.php', w);
    };
    r.prototype.deferredCallback = function(t, u, v, w) {
        var x = {}, y = t, z = t + u - 1;
        for (var aa = 0; aa < u; aa++) {
            var ba = this.orderReversed ? z - aa: y + aa, ca = k.getComment(w[ba]);
            if (ca)
                x[t + aa] = ca;
        }
        v(x);
    };
    r.prototype.getOrderingMode = function() {
        return this.orderingMode;
    };
    r.prototype.buildCommentPermalink = function(t, u, v) {
        if (!this.basePermalink)
            return null;
        var w = Math.floor((this.count - v - 1) / l.defaultPageSize) * l.defaultPageSize;
        return (n(this.basePermalink).addQueryData({
            comment_id: u,
            offset: w,
            total_comments: this.count
        }).toString());
    };
    h.registerEndpoints({
        '/ajax/ufi/comment_fetch.php': {
            mode: h.IMMEDIATE
        }
    });
    function s(t) {
        var u = k.getComment(t.commentid), v = u.id, w = u.ftentidentifier, x = u.parentcommentid;
        if (x)
            return;
        if (u.status !== l.UFIStatus.DELETED && u.status !== l.UFIStatus.FAILED_ADD)
            r.getCommentListsForFeedbackTargetID(w).forEach(function(y) {
                y.deleteComment(v);
            });
    }
    i.subscribe('update-actions', function(t, u) {
        if (u.actions && u.actions.length)
            for (var v = 0; v < u.actions.length; v++) {
                var w = u.actions[v];
                switch (w.actiontype) {
                case l.UFIActionType.DELETE_COMMENT:
                    s(w);
                    break;
                }
            }
    });
    i.subscribe('update-comment-lists', function(t, u) {
        var v = u.commentlists;
        if (v && v.comments && Object.keys(v).length)
            for (var w in v.comments)
                for (var x in v.comments[w]) {
                    var y = v.comments[w][x];
                    r.getCommentList(w, x).addCommentIDs(y.range.offset, y.range.length, y.values);
                }
    });
    i.subscribe('update-comments', function(t, u) {
        if (u.comments && u.comments.length)
            u.comments.forEach(function(v) {
                if (v.parentcommentid)
                    return;
                    var w = v.ftentidentifier;
                    r.getCommentListsForFeedbackTargetID(w).forEach(function(x) {
                        x.addComment(v.id, v.clientid, v.legacyid);
                    });
                });
    });
    i.subscribe('update-feedback', function(t, u) {
        if (u.feedbacktargets && u.feedbacktargets.length)
            u.feedbacktargets.forEach(function(v) {
                var w = v.entidentifier, x = v.defaultcommentorderingmode, y = {};
                if (x)
                    y[x] = true;
                    if (v.orderingmodes)
                        v.orderingmodes.forEach(function(aa) {
                            y[aa.value] = true;
                        });
                        for (var z in y)
                            r.getCommentList(w, z).updateCommentCount(v.commentcount);
                        });
    });
    e.exports = r;
}, null);
__d("XBroadcastRequestAddComposerTokenAsyncControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/profile\/broadcast_request\/async\/add_composer_token\/", {
        comment_token: {
            type: "String"
        },
        source_obj_id: {
            type: "Int"
        }
    });
}, null);
__d("UFIUserActions", ["ActorURI", "AsyncResponse", "BroadcastRequestParam", "CLoggerX", "ClientIDs", "ImmutableObject", "Nectar", "UFICentralUpdates", "UFIToplevelCommentList", "UFIComments", "UFIConstants", "UFIFeedbackTargets", "MercuryServerDispatcher", "XBroadcastRequestAddComposerTokenAsyncControllerURIBuilder", "collectDataAttributes", "copyProperties", "tx", "UnicodeBidi"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x) {
    var y = {
        BAN: 'ban',
        UNDO_BAN: 'undo_ban'
    }, z = {
        changeActor: function(ma, na) {
            r.getFeedbackTarget(ma, function(oa) {
                o.resetCommentListsWithContext(ma, {
                    actorID: na
                });
                var pa = {
                    from_actor_id: oa.actorforpost,
                    ft_ent_identifier: ma
                };
                pa[g.PARAMETER_ACTOR] = na;
                s.trySend('/ajax/ufi/actor_change.php', pa);
            });
        },
        changeCommentLike: function(ma, na, oa) {
            var pa = p.getComment(ma);
            if (pa.hasviewerliked != na) {
                var qa = aa(oa.target), ra = na ? 1: - 1, sa = {
                    commentid: ma,
                    actiontype: q.UFIActionType.COMMENT_LIKE,
                    viewerliked: na,
                    likecount: pa.likecount + ra
                };
                n.handleUpdate(q.UFIPayloadSourceType.USER_ACTION, {
                    actions: [sa]
                });
                r.getFeedbackTarget(pa.ftentidentifier, function(ta) {
                    var ua = {};
                    ua[g.PARAMETER_ACTOR] = ta.actorforpost;
                    s.trySend('/ajax/ufi/comment_like.php', v({
                        comment_id: ma,
                        legacy_id: pa.legacyid,
                        like_action: na,
                        ft_ent_identifier: pa.ftentidentifier,
                        source: oa.source,
                        client_id: k.getNewClientID()
                    }, qa, ua));
                });
            }
        },
        changeAlsoRecommend: function(ma, na) {
            var oa = p.getComment(ma.id);
            if (oa.hasviewerrecommended !== na) {
                var pa = {};
                pa[i.COMMENT_TOKEN] = ma.id;
                pa[i.SOURCE_OBJ_ID] = ma.ftentidentifier;
                s.trySend(new t().getURI(), pa);
            }
        },
        addComment: function(ma, na, oa, pa) {
            r.getFeedbackTarget(ma, function(qa) {
                var ra = aa(pa.target), sa = k.getNewClientID();
                if (!qa.actorforpost)
                    return;
                var ta = x.isDirectionLTR(na) ? 'ltr': 'rtl', ua = {
                    ftentidentifier: ma,
                    body: {
                        text: na,
                        dir: ta
                    },
                    author: qa.actorforpost,
                    id: sa,
                    islocal: true,
                    ufiinstanceid: pa.ufiinstanceid,
                    likecount: 0,
                    hasviewerliked: false,
                    parentcommentid: pa.replyid,
                    attachment: pa.attachedsticker,
                    photo_comment: pa.attachedphoto,
                    timestamp: {
                        time: Date.now(),
                        text: "a few seconds ago"
                    }
                }, va = {
                    actiontype: q.UFIActionType.SUBSCRIBE_ACTION,
                    actorid: qa.actorforpost,
                    hasviewersubscribed: true,
                    entidentifier: ma
                }, wa = {
                    actiontype: q.UFIActionType.ADD_COMMENT_ACTION,
                    feedbackfbid: qa.targetfbid
                };
                n.handleUpdate(q.UFIPayloadSourceType.USER_ACTION, {
                    comments: [ua],
                    actions: [va, wa]
                });
                var xa = null;
                if (pa.replyid)
                    xa = (p.getComment(pa.replyid)).fbid;
                var ya = j.getCLParamsForTarget(pa.target, xa), za = {};
                za[g.PARAMETER_ACTOR] = qa.actorforpost;
                s.trySend('/ajax/ufi/add_comment.php', v({
                    ft_ent_identifier: qa.entidentifier,
                    comment_text: oa,
                    source: pa.source,
                    client_id: sa,
                    reply_fbid: xa,
                    parent_comment_id: pa.replyid,
                    timeline_log_data: pa.timelinelogdata,
                    rootid: pa.rootid,
                    clp: ya,
                    attached_sticker_fbid: pa.attachedsticker ? pa.attachedsticker.fbid: 0,
                    attached_photo_fbid: pa.attachedphoto ? pa.attachedphoto.fbid: 0,
                    giftoccasion: pa.giftoccasion,
                    recommendation_ids: pa.recommendationIDs ? pa.recommendationIDs: []
                }, ra, za));
            });
        },
        _hasCommentTextChanged: function(ma, na) {
            return ma.body && ma.body.text != na;
        },
        _hasCommentPhotoChanged: function(ma, na) {
            return ((ma || na)&&!(ma && na)) || (ma && na && (ma.fbid != na.fbid));
        },
        _hasCommentStickerChanged: function(ma, na) {
            return ((ma || na)&&!(ma && na)) || (ma && (ma.type == "sticker") && na && (ma.fbid != na.fbid));
        },
        editComment: function(ma, na, oa, pa) {
            var qa = aa(pa.target), ra = p.getComment(ma), sa = this._hasCommentTextChanged(ra, na) || this._hasCommentPhotoChanged(ra.photo_comment, pa.attachedPhoto) || this._hasCommentStickerChanged(ra.attachment, pa.attachedSticker);
            ra = l.set(ra, {
                status: q.UFIStatus.PENDING_EDIT,
                body: {
                    text: na
                },
                editnux: null,
                attachment: pa.attachedSticker,
                photo_comment: pa.attachedPhoto
            });
            if (sa)
                ra = l.set(ra, {
                    originalTimestamp: ra.timestamp.time,
                    timestamp: {
                        time: Date.now(),
                        text: "a few seconds ago"
                    }
                });
            n.handleUpdate(q.UFIPayloadSourceType.USER_ACTION, {
                comments: [ra]
            });
            r.getFeedbackTarget(ra.ftentidentifier, function(ta) {
                var ua = {};
                ua[g.PARAMETER_ACTOR] = ta.actorforpost;
                s.trySend('/ajax/ufi/edit_comment.php', v({
                    ft_ent_identifier: ra.ftentidentifier,
                    comment_text: oa,
                    source: pa.source,
                    comment_id: ra.id,
                    parent_comment_id: ra.parentcommentid,
                    attached_sticker_fbid: pa.attachedSticker ? pa.attachedSticker.fbid: 0,
                    attached_photo_fbid: pa.attachedPhoto ? pa.attachedPhoto.fbid: 0
                }, qa, ua));
            });
        },
        translateComment: function(ma, na) {
            s.trySend('/ajax/ufi/translate_comment.php', {
                ft_ent_identifier: ma.ftentidentifier,
                comment_ids: [ma.id],
                source: na.source
            });
        },
        setHideAsSpam: function(ma, na, oa) {
            var pa = aa(oa.target), qa = p.getComment(ma), ra = {
                commentid: ma,
                actiontype: q.UFIActionType.COMMENT_SET_SPAM,
                shouldHideAsSpam: na
            };
            n.handleUpdate(q.UFIPayloadSourceType.USER_ACTION, {
                actions: [ra]
            });
            s.trySend('/ajax/ufi/comment_spam.php', v({
                comment_id: ma,
                spam_action: na,
                ft_ent_identifier: qa.ftentidentifier,
                source: oa.source
            }, pa));
        },
        removeComment: function(ma, na) {
            var oa = aa(na.target), pa = p.getComment(ma), qa = {
                actiontype: q.UFIActionType.DELETE_COMMENT,
                commentid: ma,
                oneclick: na.oneclick
            };
            n.handleUpdate(q.UFIPayloadSourceType.USER_ACTION, {
                actions: [qa]
            });
            r.getFeedbackTarget(pa.ftentidentifier, function(ra) {
                var sa = {};
                sa[g.PARAMETER_ACTOR] = ra.actorforpost;
                s.trySend('/ajax/ufi/delete_comment.php', v({
                    comment_id: pa.id,
                    comment_legacyid: pa.legacyid,
                    ft_ent_identifier: pa.ftentidentifier,
                    one_click: na.oneclick,
                    source: na.source,
                    client_id: k.getNewClientID(),
                    timeline_log_data: na.timelinelogdata
                }, oa, sa));
            });
        },
        banUser: function(ma, na, oa, pa) {
            var qa = oa ? y.BAN: y.UNDO_BAN;
            s.trySend('/ajax/ufi/ban_user.php', {
                page_id: na,
                commenter_id: ma.author,
                action: qa,
                comment_id: ma.id,
                client_side: true
            });
        },
        changeLike: function(ma, na, oa) {
            r.getFeedbackTarget(ma, function(pa) {
                var qa = aa(oa.target);
                if (pa.hasviewerliked !== na) {
                    var ra = na ? 1: - 1, sa = {
                        actiontype: q.UFIActionType.LIKE_ACTION,
                        actorid: pa.actorforpost,
                        hasviewerliked: na,
                        likecount: pa.likecount + ra,
                        entidentifier: ma,
                        likesentences: {
                            current: pa.likesentences.alternate,
                            alternate: pa.likesentences.current
                        }
                    };
                    n.handleUpdate(q.UFIPayloadSourceType.USER_ACTION, {
                        actions: [sa]
                    });
                    var ta = {};
                    ta[g.PARAMETER_ACTOR] = pa.actorforpost;
                    s.trySend('/ajax/ufi/like.php', v({
                        like_action: na,
                        ft_ent_identifier: ma,
                        source: oa.source,
                        client_id: k.getNewClientID(),
                        rootid: oa.rootid,
                        giftoccasion: oa.giftoccasion
                    }, qa, ta));
                }
            });
        },
        changeSubscribe: function(ma, na, oa) {
            r.getFeedbackTarget(ma, function(pa) {
                var qa = aa(oa.target);
                if (pa.hasviewersubscribed !== na) {
                    var ra = {
                        actiontype: q.UFIActionType.SUBSCRIBE_ACTION,
                        actorid: pa.actorforpost,
                        hasviewersubscribed: na,
                        entidentifier: ma
                    };
                    n.handleUpdate(q.UFIPayloadSourceType.USER_ACTION, {
                        actions: [ra]
                    });
                    var sa = {};
                    sa[g.PARAMETER_ACTOR] = pa.actorforpost;
                    s.trySend('/ajax/ufi/subscribe.php', v({
                        subscribe_action: na,
                        ft_ent_identifier: ma,
                        source: oa.source,
                        client_id: k.getNewClientID(),
                        rootid: oa.rootid,
                        comment_expand_mode: oa.commentexpandmode
                    }, qa, sa));
                }
            });
        },
        fetchSpamComments: function(ma, na, oa, pa) {
            s.trySend('/ajax/ufi/id_comment_fetch.php', {
                ft_ent_identifier: ma,
                viewas: pa,
                comment_ids: na,
                parent_comment_id: oa,
                source: null
            });
        },
        removePreview: function(ma, na) {
            var oa = aa(na.target), pa = {
                commentid: ma.id,
                actiontype: q.UFIActionType.REMOVE_PREVIEW
            };
            n.handleUpdate(q.UFIPayloadSourceType.USER_ACTION, {
                actions: [pa]
            });
            s.trySend('/ajax/ufi/remove_preview.php', v({
                comment_id: ma.id,
                ft_ent_identifier: ma.ftentidentifier,
                source: na.source
            }, oa));
        }
    };
    function aa(ma) {
        if (!ma)
            return {
                ft: {}
            };
        var na = {
            ft: u(ma, ['ft']).ft
        };
        m.addModuleData(na, ma);
        return na;
    }
    function ba(ma) {
        var na = ma.request.data;
        if (!ma.isBlockedAction())
            h.defaultErrorHandler(ma);
        var oa = na.client_id || na.comment_id, pa = p.getComment(oa), qa = (pa.status === q.UFIStatus.PENDING_EDIT) ? q.UFIStatus.FAILED_EDIT: q.UFIStatus.FAILED_ADD;
        pa = l.setDeep(pa, {
            status: qa,
            allowRetry: ca(ma),
            body: {
                mentionstext: na.comment_text,
                mentionsphoto: pa.photo_comment
            }
        });
        n.handleUpdate(q.UFIPayloadSourceType.USER_ACTION, {
            comments: [pa]
        });
    }
    function ca(ma) {
        var na = ma.getError();
        if (ma.isBlockedAction())
            return false;
        if (ma.silentError)
            return true;
        if (na === 1357012 || na === 1357006)
            return false;
        return true;
    }
    function da(ma) {
        var na = ma.request.data, oa = na.comment_id, pa = p.getComment(oa);
        pa = l.set(pa, {
            status: pa.priorstatus || null,
            priorstatus: undefined
        });
        n.handleUpdate(q.UFIPayloadSourceType.USER_ACTION, {
            comments: [pa]
        });
    }
    function ea(ma) {
        var na = ma.request.data, oa = na.comment_id, pa = p.getComment(oa);
        if (na.like_action === pa.hasviewerliked) {
            var qa = pa.hasviewerliked?-1 : 1, ra = {
                commentid: oa,
                actiontype: q.UFIActionType.COMMENT_LIKE,
                viewerliked: !pa.hasviewerliked,
                likecount: pa.likecount + qa
            };
            n.handleUpdate(q.UFIPayloadSourceType.USER_ACTION, {
                actions: [ra]
            });
        }
        h.defaultErrorHandler(ma);
    }
    function fa(ma) {
        var na = ma.request.data, oa = na.ft_ent_identifier;
        r.getFeedbackTarget(oa, function(pa) {
            if (pa.hasviewerliked === na.like_action) {
                var qa = pa.hasviewerliked?-1 : 1, ra = {
                    actiontype: q.UFIActionType.LIKE_ACTION,
                    actorid: pa.actorforpost,
                    hasviewerliked: !pa.hasviewerliked,
                    likecount: pa.likecount + qa,
                    entidentifier: oa,
                    likesentences: {
                        current: pa.likesentences.alternate,
                        alternate: pa.likesentences.current
                    }
                };
                n.handleUpdate(q.UFIPayloadSourceType.USER_ACTION, {
                    actions: [ra]
                });
            }
        });
        h.defaultErrorHandler(ma);
    }
    function ga(ma) {
        var na = ma.request.data, oa = na.ft_ent_identifier;
        r.getFeedbackTarget(oa, function(pa) {
            if (pa.hasviewersubscribed === na.subscribe_action) {
                var qa = {
                    actiontype: q.UFIActionType.SUBSCRIBE_ACTION,
                    actorid: pa.actorforpost,
                    hasviewersubscribed: !pa.hasviewersubscribed,
                    entidentifier: oa
                };
                n.handleUpdate(q.UFIPayloadSourceType.USER_ACTION, {
                    actions: [qa]
                });
            }
        });
        h.defaultErrorHandler(ma);
    }
    var ha = {
        '/ajax/ufi/actor_change.php': {
            mode: s.IMMEDIATE
        },
        '/ajax/ufi/comment_like.php': {
            mode: s.BATCH_CONDITIONAL,
            error_handler: ea,
            batch_if: ia,
            batch_function: la
        },
        '/ajax/ufi/comment_spam.php': {
            mode: s.IMMEDIATE,
            error_handler: da
        },
        '/ajax/ufi/add_comment.php': {
            mode: s.IMMEDIATE,
            error_handler: ba
        },
        '/ajax/ufi/delete_comment.php': {
            mode: s.IMMEDIATE,
            error_handler: da
        },
        '/ajax/ufi/ban_user.php': {
            mode: s.IMMEDIATE
        },
        '/ajax/ufi/edit_comment.php': {
            mode: s.IMMEDIATE,
            error_handler: ba
        },
        '/ajax/ufi/like.php': {
            mode: s.BATCH_CONDITIONAL,
            error_handler: fa,
            batch_if: ja,
            batch_function: la
        },
        '/ajax/ufi/subscribe.php': {
            mode: s.BATCH_CONDITIONAL,
            error_handler: ga,
            batch_if: ka,
            batch_function: la
        },
        '/ajax/ufi/id_comment_fetch.php': {
            mode: s.IMMEDIATE
        },
        '/ajax/ufi/remove_preview.php': {
            mode: s.IMMEDIATE
        },
        '/ajax/ufi/translate_comment.php': {
            mode: s.IMMEDIATE
        },
        '/profile/broadcast_request/async/add_composer_token/': {
            mode: s.IMMEDIATE
        }
    };
    ha[(new t()).getURI()] = {
        mode: s.IMMEDIATE
    };
    s.registerEndpoints(ha);
    function ia(ma, na) {
        return ma && ma.ft_ent_identifier == na.ft_ent_identifier && ma.comment_id == na.comment_id;
    }
    function ja(ma, na) {
        return ma && ma.ft_ent_identifier == na.ft_ent_identifier;
    }
    function ka(ma, na) {
        return ma && ma.ft_ent_identifier == na.ft_ent_identifier;
    }
    function la(ma, na) {
        return na;
    }
    e.exports = z;
}, null);
__d("UFIUIEvents", [], function(a, b, c, d, e, f) {
    var g = 'UFIUIEvents/ufiActionLinkLike', h = 'UFIUIEvents/ufiActionLinkUnlike', i = {
        UFIActionLinkLike: g,
        UFIActionLinkUnlike: h
    };
    e.exports = i;
}, null);
__d("UFIActionLinkController", ["Arbiter", "ClickPointIdentifiersDEPRECATED", "CSS", "DOMQuery", "Parent", "React", "TrackingNodes", "UFIBlingBox.react", "UFICentralUpdates", "UFIConstants", "UFIFeedbackTargets", "UFILikeLink.react", "UFIShareLink.react", "UFISubscribeLink.react", "UFITimelineBlingBox.react", "UFIToplevelCommentList", "UFIUserActions", "UFIUIEvents", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y) {
    function z(ba, ca, da) {
        if (this._root)
            throw new Error('UFIActionLinkController attempted to initialize when a root was' + ' already present');
        var ea = j.scry(ba, ca)[0];
        if (ea) {
            var fa = document.createElement('span');
            ea.parentNode.replaceChild(fa, ea);
            fa.appendChild(ea);
            if (typeof da === "function")
                da(fa);
        } else 
            var ga = g.subscribe('PhotoSnowlift.DATA_CHANGE', function() {
                g.unsubscribe(ga);
                z(ba, ca, da);
            }, g.SUBSCRIBE_NEW);
    }
    var aa = function(ba, ca, da) {
        this._id = ca.ftentidentifier;
        this._ftFBID = da.targetfbid;
        this._source = ca.source;
        this._contextArgs = ca;
        this._ufiRoot = ba;
        this._isOnTimeline = this._isRenderingOnTimeline();
        if (this._isOnTimeline) {
            this._attemptInitializeTimelineBling();
        } else 
            this._attemptInitializeBling();
        if (da.viewercanlike || da.hasviewerliked)
            this._attemptInitializeLike();
        if (da.viewercansubscribetopost)
            this._attemptInitializeSubscribe();
        this._attemptInitializeShare();
        o.subscribe('feedback-updated', function(ea, fa) {
            var ga = fa.updates;
            if (this._id in ga)
                this.render();
        }.bind(this));
        o.subscribe('feedback-id-changed', function(ea, fa) {
            var ga = fa.updates;
            if (this._id in ga)
                this._id = ga[this._id];
        }.bind(this));
    };
    y(aa.prototype, {
        _attemptInitializeBling: function() {
            z(this._ufiRoot, '^form .uiBlingBox', function(ba) {
                this._blingRoot = ba;
                if (this._dataReady)
                    this._renderBling();
            }.bind(this));
        },
        _attemptInitializeTimelineBling: function() {
            if (this._root)
                throw new Error('UFIActionLinkController attempted to initialize when a root was' + ' already present');
            var ba = j.scry(this._ufiRoot, '^form .fbTimelineFeedbackActions .UFIBlingBoxTimeline')[0];
            if (ba) {
                var ca = j.scry(ba, '.fbTimelineFeedbackLikes')[0];
                this._enableShowLikes = ca ? true : false;
                var da = j.scry(ba, '.fbTimelineFeedbackComments')[0];
                this._enableShowComments = da ? true : false;
            }
            this._blingTimelineRoot = ba;
            if (this._dataReady)
                this._renderTimelineBling();
        },
        _attemptInitializeLike: function() {
            z(this._ufiRoot, '^form .like_link', function(ba) {
                this._likeRoot = ba;
                if (this._dataReady)
                    this._renderLike();
            }.bind(this));
        },
        _attemptInitializeSubscribe: function() {
            z(this._ufiRoot, '^form .unsub_link', function(ba) {
                this._subscribeRoot = ba;
                if (this._dataReady)
                    this._renderSubscribe();
            }.bind(this));
        },
        _attemptInitializeShare: function() {
            z(this._ufiRoot, '^form .share_action_link', function(ba) {
                this._shareRoot = ba;
                var ca = j.scry(this._shareRoot, '.share_action_link')[0];
                this._shareURI = ca ? ca.getAttribute('href') : null;
                if (this._dataReady)
                    this._renderShare();
            }.bind(this));
        },
        render: function() {
            this._dataReady = true;
            if (this._isOnTimeline) {
                this._renderTimelineBling();
            } else 
                this._renderBling();
            this._renderLike();
            this._renderSubscribe();
            this._renderShare();
        },
        _renderBling: function() {
            if (this._blingRoot)
                q.getFeedbackTarget(this._id, function(ba) {
                    var ca = function(event) {
                        if (this._contextArgs.blingtogglescomments) {
                            var ga = k.byTag(event.target, "form");
                            i.toggleClass(ga, "collapsed_comments");
                            i.toggleClass(ga, "hidden_add_comment");
                        }
                        event.preventDefault();
                    }.bind(this), da = m.getTrackingInfo(m.types.BLINGBOX), ea = v.getCommentListForFeedbackTargetID_UNSAFE(this._id).getDisplayedCommentCount(), fa = l.createElement(n, {
                        likes: ba.likecount,
                        comments: ea,
                        reshares: ba.sharecount,
                        nfb: ba.nfbcount,
                        permalink: ba.permalink,
                        contextArgs: this._contextArgs,
                        onClick: ca,
                        "data-ft": da
                    });
                    this._blingBox = l.render(fa, this._blingRoot);
                }.bind(this));
        },
        _renderTimelineBling: function() {
            if (this._blingTimelineRoot)
                q.getFeedbackTarget(this._id, function(ba) {
                    var ca = m.getTrackingInfo(m.types.BLINGBOX), da = h.getUserActionID(h.types.TIMELINE_SEE_LIKERS), ea = function(event) {
                        var ha = k.byTag(event.target, "form");
                        i.removeClass(ha, "collapsed_comments");
                        var ia = j.scry(ha, 'a.UFIPagerLink');
                        if (ia.length)
                            ia[0].click();
                            event.preventDefault();
                        }.bind(this), fa = v.getCommentListForFeedbackTargetID_UNSAFE(this._id).getDisplayedCommentCount(), ga = l.createElement(u, {
                            comments: fa,
                            commentOnClick: ea,
                            contextArgs: this._contextArgs,
                            "data-ft": ca,
                            "data-gt": da,
                            enableShowComments: this._enableShowComments,
                            enableShowLikes: this._enableShowLikes,
                            feedbackFBID: this._ftFBID,
                            likes: ba.likecount,
                            reshares: ba.sharecount,
                            actorid: ba.actorid
                        });
                        l.render(ga, this._blingTimelineRoot);
                    }.bind(this));
        },
        _renderLike: function() {
            if (this._likeRoot)
                q.getFeedbackTarget(this._id, function(ba) {
                    var ca=!ba.hasviewerliked, da = function(event) {
                        var fa = ca ? x.UFIActionLinkLike: x.UFIActionLinkUnlike;
                        g.inform(fa, {
                            ft_id: this._id,
                            like_action: ca,
                            target: event.target
                        });
                        w.changeLike(this._id, ca, {
                            source: this._source,
                            target: event.target,
                            rootid: this._contextArgs.rootid,
                            giftoccasion: this._contextArgs.giftoccasion
                        });
                        event.preventDefault();
                    }.bind(this), ea = l.createElement(r, {
                        onClick: da,
                        likeAction: ca
                    });
                    this._likeLink = l.render(ea, this._likeRoot);
                }.bind(this));
        },
        _renderSubscribe: function() {
            if (this._subscribeRoot)
                q.getFeedbackTarget(this._id, function(ba) {
                    var ca=!ba.hasviewersubscribed, da = function(event) {
                        w.changeSubscribe(this._id, ca, {
                            source: this._source,
                            target: event.target,
                            rootid: this._contextArgs.rootid,
                            commentexpandmode: ba.commentexpandmode
                        });
                        event.preventDefault();
                    }.bind(this), ea = l.createElement(t, {
                        onClick: da,
                        subscribeAction: ca
                    });
                    this._subscribeLink = l.render(ea, this._subscribeRoot);
                }.bind(this));
        },
        _renderShare: function() {
            if (this._shareRoot && this._shareURI)
                this._shareLink = l.render(l.createElement(s, {
                    href: this._shareURI
                }), this._shareRoot);
        },
        _isRenderingOnTimeline: function() {
            if (this._source === p.UFIFeedbackSourceType.PROFILE) {
                var ba = j.scry(this._ufiRoot, '^form .fbTimelineFeedbackActions .UFIBlingBoxTimeline');
                return (ba.length > 0);
            }
            return false;
        }
    });
    e.exports = aa;
}, null);
__d("MentionsInputUtils", [], function(a, b, c, d, e, f) {
    var g = {
        generateDataFromTextWithEntities: function(h) {
            var i = h.text, j = [];
            (h.ranges || []).forEach(function(l) {
                var m = l.entity;
                if (!m.external)
                    j.push({
                        uid: m.id,
                        text: i.substr(l.offset, l.length),
                        offset: l.offset,
                        length: l.length,
                        weakreference: !!m.weakreference
                    });
            });
            var k = {
                value: i,
                mentions: j
            };
            return k;
        }
    };
    e.exports = g;
}, null);
__d("ClipboardPhotoUploader", ["ArbiterMixin", "AsyncRequest", "mixin"], function(a, b, c, d, e, f, g, h, i) {
    var j = i(g);
    for (var k in j)
        if (j.hasOwnProperty(k))
            m[k] = j[k];
    var l = j === null ? null: j.prototype;
    m.prototype = Object.create(l);
    m.prototype.constructor = m;
    m.__superConstructor__ = j;
    function m(n, o) {
        "use strict";
        this.uploadURIString = n;
        this.data = o;
    }
    m.prototype.handlePaste = function(event) {
        "use strict";
        if (!event.clipboardData)
            return;
        var n = event.clipboardData.items;
        if (!n)
            return;
        for (var o = 0; o < n.length; ++o) {
            var p = n[o];
            if (p.kind === 'file' && p.type.indexOf('image/')!==-1) {
                var q = new FormData();
                q.append('pasted_file', p.getAsFile());
                var r = new h();
                r.setURI(this.uploadURIString).setData(this.data).setRawData(q).setHandler(function(s) {
                    this.inform('upload_success', s);
                }.bind(this)).setErrorHandler(function(s) {
                    this.inform('upload_error', s);
                }.bind(this));
                this.inform('upload_start');
                r.send();
                break;
            }
        }
    };
    e.exports = m;
}, null);
__d("Facepile.react", ["Pixelz.react", "React", "cx"], function(a, b, c, d, e, f, g, h, i) {
    var j = {
        small: 24,
        medium: 32,
        large: 50
    }, k = h.createClass({
        displayName: "Facepile",
        propTypes: {
            floatDirection: h.PropTypes.oneOf(['left', 'right']),
            onFaceClick: h.PropTypes.func,
            size: h.PropTypes.oneOf(['small', 'medium', 'large']).isRequired
        },
        getDefaultProps: function() {
            return {
                floatDirection: 'left'
            };
        },
        _onFaceClick: function(l) {
            if (this.props.onFaceClick)
                this.props.onFaceClick(l);
        },
        renderFace: function(l) {
            var m = j[this.props.size];
            return (h.createElement("li", {
                className: "facepileItem",
                key: l.name,
                onClick: this._onFaceClick.bind(this, l)
            }, h.createElement("a", {
                href: l.URL || '#',
                "aria-label": l.name,
                "data-hover": 'tooltip',
                "data-tooltip-alignh": 'left'
            }, h.createElement(g, {
                src: l.profilePicURI,
                width: m,
                height: m
            }))));
        },
        render: function() {
            var l = (("clearfix") + (' ' + "facepile") + (this.props.size == 'small' ? ' ' + "facepileSmall" : '') + (this.props.size == 'medium' ? ' ' + "facepileMedium" : '') + (this.props.size == 'large' ? ' ' + "facepileLarge" : '') + (this.props.floatDirection === 'left' ? ' ' + "facepileLeft" : '') + (this.props.floatDirection === 'right' ? ' ' + "facepileRight" : ''));
            return (h.createElement("ul", {
                className: l
            }, this.props.profiles.map(this.renderFace)));
        }
    });
    e.exports = k;
}, null);
__d("LegacyMentionsInput.react", ["Bootloader", "CLogConfig", "TypeaheadMetricsConfig", "Event", "Keys", "React", "ReactPropTypes", "cx", "PlaceholderListener"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    b('PlaceholderListener');
    var o = l.createClass({
        displayName: "ReactLegacyMentionsInput",
        propTypes: {
            initialData: m.object,
            placeholder: m.string,
            datasource: m.object,
            ref: m.string,
            viewOptionsTypeObjects: m.object,
            viewOptionsTypeObjectsOrder: m.array,
            hashtags: m.bool,
            autoflip: m.bool,
            onEnterSubmit: m.func,
            onFocus: m.func,
            onBlur: m.func,
            onTypingStateChange: m.func,
            onPaste: m.func
        },
        componentDidMount: function() {
            this.props.initialData && this._initializeTextarea(this.getDOMNode());
        },
        hasEnteredText: function() {
            return !!(this._mentionsInput && this._mentionsInput.getValue().trim());
        },
        submitComment: function(event) {
            var p;
            if (event) {
                p = event.target.value && event.target.value.trim();
            } else {
                var q = this.refs.textarea.getDOMNode();
                if (q.value && q.value !== q.placeholder)
                    p = q.value;
            }
            p = p || '';
            var r = {
                visibleValue: p,
                encodedValue: p
            };
            if (this._mentionsInput)
                r.encodedValue = this._mentionsInput.getRawValue().trim();
            var s = this.props.onEnterSubmit(r, event);
            if (s && this._mentionsInput) {
                this._mentionsInput.reset();
                event && event.preventDefault();
            }
        },
        _handleKeydown: function(event) {
            var p = event.nativeEvent, q = j.getKeyCode(p) == k.RETURN&&!j.$E(p).getModifiers().any, r = this._mentionsInput && this._mentionsInput.getTypeahead().getView().getSelection();
            if (this.props.onEnterSubmit && q&&!r)
                this.submitComment(event);
        },
        _handleFocus: function() {
            this.props.onFocus && this.props.onFocus();
            this._initializeTextarea(this.refs.root.getDOMNode());
        },
        _handleBlur: function() {
            this.props.onBlur && this.props.onBlur();
        },
        _initializeTextarea: function(p) {
            if (this._mentionsInput || this._bootloadingMentions)
                return;
            this._bootloadingMentions = true;
            g.loadModules(["CompactTypeaheadRenderer", "ContextualTypeaheadView", "CLoggerX", "InputSelection", "MentionsInput", "TextAreaControl", "Typeahead", "TypeaheadAreaCore", "TypeaheadBestName", "TypeaheadHoistFriends", "TypeaheadMetrics", "TypeaheadMetricsX", "TypingDetector", "UFIComments"], function(q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da) {
                var ea = this.refs.textarea.getDOMNode();
                new v(ea);
                if (h.gkResults) {
                    var fa = da.getComment(this.props.replyCommentID), ga = fa ? fa.fbid: null;
                    s.trackMentionsInput(ea, ga);
                }
                if (this.props.onTypingStateChange) {
                    var ha = new ca(ea);
                    ha.init();
                    ha.subscribe('change', this.props.onTypingStateChange);
                }
                var ia = {
                    autoSelect: true,
                    renderer: q,
                    causalElement: ea,
                    autoflip: this.props.autoflip
                };
                if (this.props.viewOptionsTypeObjects)
                    ia.typeObjects = this.props.viewOptionsTypeObjects;
                if (this.props.viewOptionsTypeObjectsOrder)
                    ia.typeObjectsOrder = this.props.viewOptionsTypeObjectsOrder;
                var ja = new w(this.props.datasource, {
                    ctor: r,
                    options: ia
                }, {
                    ctor: x
                }, this.refs.typeahead.getDOMNode()), ka = [y, z];
                if (i.gkResults) {
                    var la = new ba({
                        extraData: {
                            event_name: 'mention_metric_x'
                        }
                    });
                    la.init(ja);
                }
                var ma = new aa({
                    extraData: {
                        event_name: 'mentions',
                        from_location: 'comments'
                    }
                });
                w.initNow(ja, ka, ma);
                this._mentionsInput = new u(p, ja, ea, {
                    hashtags: this.props.hashtags
                });
                this._mentionsInput.init({}, this.props.initialData);
                if (this.props.initialData)
                    t.set(ea, ea.value.length);
                if (this.props.onPaste)
                    j.listen(ea, 'paste', this.props.onPaste);
                this._bootloadingMentions = false;
            }.bind(this));
        },
        focus: function() {
            try {
                this.refs.textarea.getDOMNode().focus();
            } catch (p) {}
        },
        render: function() {
            var p = (("textInput") + (' ' + "mentionsTextarea") + (' ' + "uiTextareaAutogrow") + (' ' + "uiTextareaNoResize") + (' ' + "UFIAddCommentInput") + (' ' + "DOMControl_placeholder"));
            return (l.createElement("div", {
                ref: "root",
                className: "uiMentionsInput textBoxContainer ReactLegacyMentionsInput"
            }, l.createElement("div", {
                className: "highlighter"
            }, l.createElement("div", null, l.createElement("span", {
                className: "highlighterContent hidden_elem"
            }))), l.createElement("div", {
                ref: "typeahead",
                className: "uiTypeahead mentionsTypeahead"
            }, l.createElement("div", {
                className: "wrap"
            }, l.createElement("input", {
                type: "hidden",
                autoComplete: "off",
                className: "hiddenInput"
            }), l.createElement("div", {
                className: "innerWrap"
            }, l.createElement("textarea", {
                ref: "textarea",
                name: "add_comment_text",
                className: p,
                title: this.props.placeholder,
                placeholder: this.props.placeholder,
                onFocus: this._handleFocus,
                onBlur: this._handleBlur,
                onKeyDown: this._handleKeydown,
                defaultValue: this.props.placeholder
            })))), l.createElement("input", {
                type: "hidden",
                autoComplete: "off",
                className: "mentionsHidden",
                defaultValue: ""
            })));
        }
    });
    e.exports = o;
}, null);
__d("UFIClassNames", ["cx"], function(a, b, c, d, e, f, g) {
    e.exports = {
        ACTOR_IMAGE: "img UFIActorImage _54ru",
        ROW: "UFIRow",
        UNSEEN_ITEM: "UFIUnseenItem"
    };
}, null);
__d("UFIImageBlock.react", ["ImageBlock.react", "React", "cx"], function(a, b, c, d, e, f, g, h, i) {
    var j = h.createClass({
        displayName: "UFIImageBlock",
        render: function() {
            return (h.createElement(g, h.__spread({}, this.props, {
                imageClassName: "UFIImageBlockImage",
                contentClassName: "UFIImageBlockContent"
            }), this.props.children));
        }
    });
    e.exports = j;
}, null);
__d("UFIStickerButton.react", ["Bootloader", "ContextualLayerAutoFlip", "React", "ReactLayeredComponentMixin", "StickerConstants", "UFIConfig", "cx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    var o = i.createClass({
        displayName: "UFIStickerButton",
        propTypes: {
            onStickerSelected: i.PropTypes.func.isRequired
        },
        mixins: [j],
        getInitialState: function() {
            var p = l.stickerSearch ? k.SEARCH_PACK_ID: k.MRU_STICKER_PACK;
            return {
                renderFlyout: null,
                flyoutShown: false,
                packID: p
            };
        },
        render: function() {
            var p = "Post a sticker";
            return (i.createElement("div", {
                "aria-label": p,
                className: "UFICommentStickerButton",
                "data-hover": "tooltip",
                "data-tooltip-alignh": "center",
                onClick: this._onLinkClicked,
                onMouseDown: this._prepareForClick,
                ref: "link"
            }, i.createElement("div", {
                className: "UFICommentStickerIcon"
            })));
        },
        renderLayers: function() {
            return !this.state.renderFlyout ? {} : this.state.renderFlyout();
        },
        _hideFlyout: function() {
            this.setState({
                flyoutShown: false
            });
        },
        _prepareForClick: function() {
            this._clickGuard = this.state.flyoutShown;
        },
        _onLinkClicked: function() {
            if (this.state.renderFlyout !== null) {
                !this._clickGuard && this.setState({
                    flyoutShown: true
                });
                return;
            }
            g.loadModules(["XUIContextualDialog.react", "StickersFlyout.react"], function(p, q) {
                this.setState({
                    flyoutShown: true,
                    renderFlyout: function() {
                        return {
                            contextualDialog: i.createElement(p, {
                                alignment: "right",
                                behaviors: {
                                    flip: h
                                },
                                className: "_5e-r",
                                contextRef: "link",
                                onBlur: this._hideFlyout,
                                position: "above",
                                shown: this.state.flyoutShown,
                                hasActionableContext: true,
                                width: 278
                            }, i.createElement("div", null, i.createElement(q, {
                                onPackSelect: function(r) {
                                    this.setState({
                                        packID: r
                                    });
                                }.bind(this),
                                onStickerSelect: this._onStickerSelected,
                                onEmoticonSelect: this._onEmoticonSelected,
                                isComments: true,
                                packID: this.state.packID,
                                shown: this.state.flyoutShown
                            })))
                        };
                    }.bind(this)
                });
            }.bind(this));
        },
        _onStickerSelected: function(p, event) {
            this.props.onStickerSelected(p, event);
            this._hideFlyout();
        },
        _onEmoticonSelected: function(p) {
            this.props.onEmoticonSelected(p);
            this._hideFlyout();
        }
    });
    e.exports = o;
}, null);
__d("XFeedNUXSaveSeenStateControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/feed\/nux\/seen\/save\/", {
        link_id: {
            type: "String"
        },
        key: {
            type: "String",
            required: true
        },
        seen: {
            type: "Bool"
        }
    });
}, null);
__d("XUIGrayText.react", ["React", "XUIText.react", "cx", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = g.PropTypes, l = g.createClass({
        displayName: "XUIGrayText",
        propTypes: {
            shade: k.oneOf(['light', 'medium', 'dark'])
        },
        getDefaultProps: function() {
            return {
                shade: 'light'
            };
        },
        render: function() {
            var m = ((this.props.shade === 'light' ? "_50f8" : '') + (this.props.shade === 'medium' ? ' ' + "_c24" : '') + (this.props.shade === 'dark' ? ' ' + "_50f9" : ''));
            return (g.createElement(h, g.__spread({}, this.props, {
                className: j(this.props.className, m)
            }), this.props.children));
        }
    });
    e.exports = l;
}, null);
__d("XUFIRecommendedMentionFriendsAsyncControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/ufi\/recommended_mention_friends\/", {});
}, null);
__d("UFIAddComment.react", ["ActorURI", "AsyncRequest", "Bootloader", "ClipboardPhotoUploader", "CloseButton.react", "DOM", "DOMContainer.react", "getActiveElement", "Event", "Facepile.react", "Focus", "HTML", "Keys", "LegacyMentionsInput.react", "Link.react", "LitestandStoryInsertionStatus", "LoadingIndicator.react", "React", "ReactLayeredComponentMixin", "Run", "SearchableEntry", "SnowflakePermalinkUtils", "Sticker.react", "TrackingNodes", "UFIClassNames", "UFIConfig", "UFIImageBlock.react", "UFIStickerButton.react", "URI", "XFeedNUXSaveSeenStateControllerURIBuilder", "XUIGrayText.react", "XUFIRecommendedMentionFriendsAsyncControllerURIBuilder", "cx", "fbt", "joinClasses", "tx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma, na, oa, pa) {
    var qa = "Write a comment...", ra = "Write a reply...", sa = "fcg fss UFICommentTip", ta = 19, ua = '/ajax/ufi/upload/', va = 80, wa = '/ajax/ufi/sticker_preview/', xa = x.createClass({
        displayName: "UFIAddComment",
        mixins: [y],
        propTypes: {
            contextArgs: x.PropTypes.object.isRequired,
            viewerActor: x.PropTypes.object.isRequired,
            allowPhotoAttachments: x.PropTypes.bool,
            allowStickerAttachments: x.PropTypes.bool,
            attachedPhoto: x.PropTypes.object,
            attachedSticker: x.PropTypes.object,
            hide: x.PropTypes.bool,
            initialData: x.PropTypes.object,
            isEditing: x.PropTypes.bool,
            isFirstComponent: x.PropTypes.bool,
            isLastComponent: x.PropTypes.bool,
            isQAndA: x.PropTypes.bool,
            mentionsDataSource: x.PropTypes.object,
            onCancel: x.PropTypes.func,
            onCommentSubmit: x.PropTypes.func,
            onTypingStateChange: x.PropTypes.func,
            orderingModes: x.PropTypes.array,
            replyCommentID: x.PropTypes.string,
            useAddCommentFacepile: x.PropTypes.bool,
            showSendOnEnterTip: x.PropTypes.bool,
            subtitle: x.PropTypes.any,
            targetID: x.PropTypes.string,
            withoutSeparator: x.PropTypes.bool
        },
        getInitialState: function() {
            if (this.props.attachedPhoto)
                this.props.contextArgs.attachedphoto = this.props.attachedPhoto;
            if (this.props.attachedSticker)
                this.props.contextArgs.attachedsticker = this.props.attachedSticker;
            return {
                attachedPhoto: this.props.attachedPhoto ? this.props.attachedPhoto: null,
                attachedSticker: this.props.attachedSticker ? this.props.attachedSticker: null,
                broadcastRequestTokenizer: null,
                fileInput: null,
                fileUploader: null,
                isCommenting: false,
                isLoadingPhoto: false,
                isRecommending: false,
                recommendationEntries: [],
                renderStickerNUX: null,
                searchSource: null,
                recommendedMentionFriends: null,
                showFacepile: false,
                stickerNUXVisible: false
            };
        },
        _onKeyDown: function(event) {
            if (this.props.isEditing && o.getKeyCode(event.nativeEvent) === s.ESC)
                this.props.onCancel();
            if (this.isMounted()&&!this._isOnBeforeUnloadListenerAdded) {
                z.onBeforeUnload(this._handleUnsavedChanges);
                this._isOnBeforeUnloadListenerAdded = true;
            }
            var ya = n();
            if (o.getKeyCode(event.nativeEvent) === s.ESC)
                ya.blur();
        },
        _handleUnsavedChanges: function() {
            var ya = a.PageTransitions;
            if (ya) {
                var za = ia.getNextURI(), ab = ya.getMostRecentURI();
                if (za.getQueryData().hasOwnProperty('theater') || ab.getQueryData().hasOwnProperty('theater') || ba.isPermalinkURI(za) || ba.isPermalinkURI(ab))
                    return;
                var bb = a.DialogNavigationStack;
                if (bb && bb.isActiveURI(za))
                    return;
            }
            if (this.refs && this.refs.mentionsinput && this.refs.mentionsinput.hasEnteredText())
                return "You haven't finished your comment yet. Do you want to leave without finishing?";
        },
        _blur: function() {
            this.setState({
                stickerNUXVisible: false
            });
            if (this.refs.mentionsinput && this.refs.mentionsinput.hasEnteredText())
                return;
            this.setState({
                isCommenting: false
            });
        },
        _onPaste: function(event) {
            var ya = new j(ua, this._getPhotoUploadData());
            this._cancelCurrentSubscriptions();
            this._subscriptions = [ya.subscribe('upload_start', this._prepareForAttachedPhotoPreview), ya.subscribe('upload_error', this._onRemoveAttachedPhotoPreviewClicked), ya.subscribe('upload_success', function(za, ab) {
                this._onPhotoUploadComplete(ab);
            }.bind(this))];
            ya.handlePaste(event);
        },
        _onEnterSubmit: function(ya, event) {
            this.setState({
                showFacepile: false
            });
            var za = this.state.attachedPhoto || this.state.attachedSticker || this.state.recommendationEntries.length, ab = this.props.isEditing || za;
            if (this.state.isLoadingPhoto) {
                return false;
            } else if (!ya.encodedValue.trim()&&!ab)
                return false;
            ya.encodedValue = ya.encodedValue.trim();
            if (za) {
                if (this.state.recommendationEntries.length) {
                    var bb = [], cb = [];
                    this.state.recommendationEntries.forEach(function(db) {
                        bb.push(db.getUniqueID());
                        cb.push(db.getTitle());
                    });
                    ya.recommendationIDs = bb;
                    if (cb.length)
                        ya.visibleValue += ' \u2014 ' + cb.join(', ');
                }
                ya.attachedPhoto = this.state.attachedPhoto;
                ya.attachedSticker = this.state.attachedSticker;
                this.setState({
                    isLoadingPhoto: false,
                    isRecommending: false,
                    attachedPhoto: null,
                    attachedSticker: null,
                    recommendationEntries: []
                });
            } else {
                ya.attachedPhoto = null;
                ya.attachedSticker = null;
            }
            this.props.onCommentSubmit(ya, event);
            return true;
        },
        _cancelCurrentSubscriptions: function() {
            if (this._subscriptions)
                this._subscriptions.forEach(function(ya) {
                    ya.unsubscribe();
                });
        },
        componentWillMount: function() {
            this._isOnBeforeUnloadListenerAdded = false;
            this._storyInsertionBlocker = v.registerBlocker(function() {
                return this.state.isCommenting;
            }.bind(this));
            if (this.props.contextArgs.canaddrecommendation)
                i.loadModules(["BroadcastRequestTokenizer.react", "BroadcastRequestParam", "WebAsyncSearchSource", "XBroadcastRequestSearchSourceControllerURIBuilder"], function(ya, za, ab, bb) {
                    var cb = new bb().setString(za.SOURCE_OBJ_ID, this.props.contextArgs.ftentidentifier).getURI(), db = new ab({
                        bootstrapRequests: [{
                            uri: cb
                        }
                        ],
                        getAllForEmptyQuery: true,
                        queryRequests: [{
                            uri: cb
                        }
                        ]
                    });
                    this.setState({
                        broadcastRequestTokenizer: ya,
                        searchSource: db
                    });
                }.bind(this));
        },
        componentWillUnmount: function() {
            this._cancelCurrentSubscriptions();
            this._storyInsertionBlocker && this._storyInsertionBlocker.unsubscribe();
            this._storyInsertionBlocker = null;
        },
        focus: function() {
            var ya = {
                isCommenting: true,
                showFacepile: true
            };
            if (this.props.allowStickerAttachments && fa.shouldShowStickerNUX) {
                var za = new ja().setString('key', 'sticker_comments').setBool('seen', true).getURI();
                new h(za).send();
                if (this.state.renderStickerNUX === null)
                    i.loadModules(["XUIAmbientNUX.react"], function(ab) {
                        ya.renderStickerNUX = function() {
                            return {
                                ambientNUX: x.createElement(ab, {
                                    contextRef: "sticker_button",
                                    shown: this.state.stickerNUXVisible,
                                    position: "above",
                                    width: "auto",
                                    alignment: "right",
                                    onCloseButtonClick: this._hideStickerNUX
                                }, "Now you can comment with a sticker!")
                            };
                        }.bind(this);
                    }.bind(this));
                fa.shouldShowStickerNUX = false;
                ya.stickerNUXVisible = true;
            }
            this.setState(ya);
            if (this.props.useAddCommentFacepile&&!this.props.replyCommentID && this.props.orderingModes)
                this._setRecommendedMentionFriends();
        },
        _setRecommendedMentionFriends: function() {
            var ya = new la().getURI();
            new h(ya).setMethod('GET').setReadOnly(true).setHandler(function(za) {
                this.setState({
                    recommendedMentionFriends: za.getPayload()
                });
            }.bind(this)).send();
        },
        renderLayers: function() {
            return !this.state.renderStickerNUX ? {} : this.state.renderStickerNUX();
        },
        renderFacepile: function() {
            if (this.state.showFacepile && this.state.recommendedMentionFriends)
                return (x.createElement("div", {
                    className: "_2phz UFIFacepileMentions"
                }, x.createElement(ka, {
                    shade: "light"
                }, "Mention some friends:"), x.createElement(p, {
                    profiles: this.state.recommendedMentionFriends,
                    layout: "grid",
                    size: "medium",
                    onFaceClick: this.insertFacepileMention
                })));
        },
        render: function() {
            var ya=!this.props.contextArgs.collapseaddcomment || this.state.isCommenting, za = null;
            if (this.props.subtitle) {
                za = x.createElement("span", {
                    className: sa
                }, this.props.subtitle);
            } else if (this.props.isEditing) {
                za = x.createElement("span", {
                    className: sa
                }, na._("Press Esc to {cancel}.", [na.param("cancel", x.createElement(u, {
                    onClick: this.props.onCancel
                }, "cancel"))]));
            } else if (this.props.showSendOnEnterTip)
                za = x.createElement("span", {
                    className: sa
                }, "Press Enter to post.");
            var ab = null, bb = null, cb = this.state.attachedPhoto || this.state.attachedSticker, db = null;
            if (this.props.allowStickerAttachments&&!cb) {
                var eb = this.props.isEditing ? this._prepareForAttachedStickerPreview: this.onStickerSelected;
                bb = x.createElement(ha, {
                    ref: "sticker_button",
                    onStickerSelected: eb,
                    onEmoticonSelected: this._insertEmoticonIntoCommentText
                });
            }
            if (this.props.allowPhotoAttachments) {
                db = this._onPaste;
                var fb = cb ? "UFICommentPhotoAttachedIcon": "UFICommentPhotoIcon", gb = "UFIPhotoAttachLinkWrapper _m";
                ab = x.createElement("div", {
                    ref: "PhotoInputContainer",
                    className: gb,
                    "data-hover": "tooltip",
                    "data-tooltip-alignh": "center",
                    "aria-label": "Attach a Photo"
                }, x.createElement("i", {
                    ref: "PhotoInputControl",
                    className: fb
                }));
            }
            var hb = da.getTrackingInfo(da.types.ADD_COMMENT_BOX), ib = oa(ea.ACTOR_IMAGE, ((!ya ? "hidden_elem" : ''))), jb = x.createElement("div", {
                className: "UFIReplyActorPhotoWrapper",
                onClick: this.focus
            }, x.createElement("img", {
                className: ib,
                src: this.props.viewerActor.thumbSrc,
                alt: this.props.viewerActor.name
            })), kb = oa(ea.ROW, ((this.props.hide ? "noDisplay" : '') + (' ' + "UFIComponent") + (' ' + "UFIAddComment") + (this.props.allowPhotoAttachments ? ' ' + "UFIAddCommentWithPhotoAttacher" : '') + (this.props.withoutSeparator ? ' ' + "UFIAddCommentWithoutSeparator" : '') + (this.props.isFirstComponent ? ' ' + "UFIFirstComponent" : '') + (this.props.isLastComponent ? ' ' + "UFILastComponent" : ''))), lb;
            if (!!this.props.replyCommentID) {
                lb = ra;
            } else if (this.props.isQAndA) {
                lb = "Ask a question...";
            } else 
                lb = qa;
            var mb = this.props.contextArgs.viewoptionstypeobjects, nb = this.props.contextArgs.viewoptionstypeobjectsorder, ob = null;
            if (this.state.attachedSticker) {
                var pb = this._getScaledDimensions(cb.metadata.height, cb.metadata.width);
                ob = x.createElement(ca, {
                    animationTrigger: "load_and_hover",
                    frameCount: cb.metadata.frameCount,
                    framesPerCol: cb.metadata.framesPerCol,
                    framesPerRow: cb.metadata.framesPerRow,
                    spriteURI: cb.metadata.sprite_uri,
                    sourceHeight: pb.height,
                    sourceURI: cb.metadata.source_uri,
                    sourceWidth: pb.width
                });
            } else if (this.state.attachedPhoto) {
                var qb = cb.markupPreview;
                if (r.isHTML(qb.markup))
                    qb = r.replaceJSONWrapper(qb.markup).getRootNode();
                ob = x.createElement(m, null, qb);
                if (!this.props.subtitle)
                    za = null;
            } else if (this.state.isLoadingPhoto)
                ob = x.createElement(w, {
                    color: "white",
                    className: "UFICommentPhotoAttachedPreviewLoadingIndicator",
                    size: "medium"
                });
            var rb, sb = this.state.attachedPhoto ? this._onRemoveAttachedPhotoPreviewClicked: this._onRemoveAttachedStickerPreviewClicked;
            if (ob != null) {
                var tb = null;
                if (this.state.attachedSticker) {
                    tb = "Remove Sticker";
                } else if (this.state.attachedPhoto)
                    tb = "Remove Photo";
                rb = x.createElement("div", {
                    className: "UFICommentPhotoAttachedPreview pas"
                }, ob, x.createElement(k, {
                    tooltip: tb,
                    onClick: sb
                }));
            }
            var ub = this.props.allowStickerAttachments ? oa("UFIMentionsInputWrap", "UFIStickersEnabledInput"): "UFIMentionsInputWrap", vb, wb, xb;
            if (this.props.contextArgs.mentionsinput) {
                var yb = this.props.contextArgs.mentionsinput;
                vb = yb.inputComponent;
                wb = yb.viewComponent;
                xb = yb.viewProps;
            } else 
                vb = t;
            var zb = null;
            if (this.props.contextArgs.canaddrecommendation)
                if (this.state.broadcastRequestTokenizer) {
                    var ac = this.state.broadcastRequestTokenizer;
                    zb = (x.createElement(ac, {
                        active: this.state.isRecommending,
                        entries: this.state.recommendationEntries,
                        onBlur: this._onRecommendationInputBlur,
                        onSubmitAttempt: this._onRecommendationTokenizerSubmit,
                        onTokenChange: this._onRecommendationTokenizerUpdate,
                        onTriggerClick: this._onRecommendationTriggerClick,
                        placeHolder: this.props.contextArgs.broadcastrequestplaceholder,
                        searchSource: this.state.searchSource,
                        sourceID: this.props.contextArgs.ftentidentifier
                    }));
                }
            return (x.createElement("li", {
                className: kb,
                onKeyDown: this._onKeyDown,
                "data-ft": hb
            }, x.createElement(ga, {
                className: ub
            }, jb, x.createElement("div", {
                className: "UFICommentContainer"
            }, x.createElement("div", {
                className: "UFIInputContainer"
            }, x.createElement(vb, {
                replyCommentID: this.props.replyCommentID,
                initialData: this.props.initialData,
                placeholder: lb,
                datasource: this.props.mentionsDataSource,
                ref: "mentionsinput",
                viewComponent: wb,
                viewProps: xb,
                viewOptionsTypeObjects: mb,
                viewOptionsTypeObjectsOrder: nb,
                hashtags: this.props.contextArgs.sht,
                autoflip: this.props.contextArgs.addcommentautoflip,
                monitorHeight: this.props.contextArgs.monitorHeight,
                onEnterSubmit: this._onEnterSubmit,
                onFocus: this.focus,
                onBlur: this._blur,
                onTypingStateChange: this.props.onTypingStateChange,
                onPaste: db
            }), x.createElement("div", {
                className: "UFICommentAttachmentButtons clearfix"
            }, ab, bb)), this.renderFacepile(), rb, zb, za))));
        },
        _onRecommendationInputBlur: function() {
            if (!this.state.recommendationEntries.length)
                this.setState({
                    isRecommending: false
                });
        },
        _onRecommendationTokenizerSubmit: function(event) {
            this.refs.mentionsinput.submitComment(event);
        },
        _onRecommendationTokenizerUpdate: function(ya) {
            this.setState({
                recommendationEntries: ya
            });
        },
        _onRecommendationTriggerClick: function() {
            this.setState({
                isRecommending: true
            });
        },
        componentDidUpdate: function(ya, za, ab) {
            if (!za.attachedPhoto && this.state.attachedPhoto ||!za.attachedSticker && this.state.attachedSticker)
                this.refs.mentionsinput.focus();
            if (ya.viewerActor.id !== this.props.viewerActor.id) {
                if (this.state.fileInput)
                    this.state.fileInput.clear();
                if (this.state.fileUploader)
                    this.state.fileUploader.setData(this._getPhotoUploadData());
                this._onRemoveAttachedPhotoPreviewClicked();
            }
        },
        componentDidMount: function() {
            if (!this.props.allowPhotoAttachments)
                return;
            var ya = this.refs.PhotoInputContainer.getDOMNode(), za = this.refs.PhotoInputControl.getDOMNode(), ab = "Choose a file to upload", bb = l.create('input', {
                accept: 'image/*',
                className: "_n",
                name: 'file',
                type: 'file',
                title: ab,
                'aria-label': ab
            });
            l.appendContent(za, bb);
            var cb = o.listen(ya, 'click', function(event) {
                i.loadModules(["FileInput", "FileInputUploader", "Input"], function(db, eb, fb) {
                    var gb = new db(ya, za, bb), hb = new eb(undefined, ya).setURI(ua).setData(this._getPhotoUploadData());
                    gb.subscribe('change', function(event) {
                        if (gb.getValue()) {
                            this._prepareForAttachedPhotoPreview();
                            hb.setInput(gb.getInput()).send();
                        }
                    }.bind(this));
                    hb.subscribe('success', function(ib, jb) {
                        gb.clear();
                        this._onPhotoUploadComplete(jb.response);
                    }.bind(this));
                    hb.subscribe('failure', function(ib, jb) {
                        gb.clear();
                        this._onPhotoUploadComplete(jb.response);
                    }.bind(this));
                    q.setWithoutOutline(za);
                    this.setState({
                        fileInput: gb,
                        fileUploader: hb
                    });
                }.bind(this));
                cb.remove();
            }.bind(this));
        },
        insertMention: function(ya) {
            if (this.refs.mentionsinput && this.refs.mentionsinput.insertMention)
                this.refs.mentionsinput.insertMention(ya);
        },
        insertFacepileMention: function(ya) {
            var za = new aa({
                uniqueID: ya.uniqueID,
                title: ya.name,
                type: 'user'
            });
            this.insertMention(za);
        },
        _getScaledDimensions: function(ya, za) {
            var ab, bb, cb;
            if (za > ya) {
                cb = va / za;
                ab = ya * cb;
                bb = za * cb;
            } else {
                cb = va / ya;
                ab = ya * cb;
                bb = za * cb;
            }
            return {
                height: Math.round(ab),
                width: Math.round(bb)
            };
        },
        _getPhotoUploadData: function() {
            var ya = this.props.viewerActor.id, za = {
                profile_id: ya,
                target_id: this.props.targetID,
                source: ta
            };
            za[g.PARAMETER_ACTOR] = ya;
            return za;
        },
        _onPhotoUploadComplete: function(ya) {
            if (!this.state.isLoadingPhoto)
                return;
            var za = ya.getPayload();
            if (za && za.fbid) {
                this.props.contextArgs.attachedphoto = za;
                this.setState({
                    attachedPhoto: za,
                    isLoadingPhoto: false
                });
            } else 
                this._onRemoveAttachedPhotoPreviewClicked(null);
        },
        _onRemoveAttachedPhotoPreviewClicked: function(event) {
            this.props.contextArgs.attachedphoto = null;
            this.setState({
                attachedPhoto: null,
                isLoadingPhoto: false
            });
        },
        _prepareForAttachedPhotoPreview: function() {
            this.props.contextArgs.attachedphoto = null;
            this.setState({
                attachedPhoto: null,
                isLoadingPhoto: true
            });
        },
        _onStickerUploadComplete: function(ya) {
            if (!this.state.isLoadingPhoto)
                return;
            var za = ya.getPayload();
            if (za && za.fbid) {
                this.props.contextArgs.attachedsticker = za;
                this.setState({
                    attachedSticker: za,
                    isLoadingPhoto: false
                });
            } else {
                i.loadModules(["Dialog"], function(ab) {
                    var bb = "Sticker Failed", cb = "There was a problem attaching the sticker.";
                    new ab().setTitle(bb).setBody(cb).setButtons(ab.OK).show();
                });
                this._onRemoveAttachedStickerPreviewClicked(null);
            }
        },
        _onRemoveAttachedStickerPreviewClicked: function(event) {
            this.props.contextArgs.attachedsticker = null;
            this.setState({
                attachedSticker: null,
                isLoadingPhoto: false
            });
        },
        _prepareForAttachedStickerPreview: function(ya) {
            this.props.contextArgs.attachedsticker = null;
            this.setState({
                attachedSticker: null,
                isLoadingPhoto: true
            });
            new h(wa).setData({
                sticker_id: ya
            }).setErrorHandler(this._onRemoveAttachedStickerPreviewClicked).setHandler(this._onStickerUploadComplete).send();
        },
        onStickerSelected: function(ya, event) {
            var za = {
                encodedValue: '',
                visibleValue: ''
            };
            this.props.contextArgs.attachedsticker = {
                fbid: ya
            };
            this.props.onCommentSubmit(za, event);
        },
        _insertEmoticonIntoCommentText: function(ya) {
            i.loadModules(["EmoticonsList", "EmoticonUtils", "TextAreaControl", "SelectionPosition"], function(za, ab, bb, cb) {
                var db = za.symbols[ya];
                if (!db)
                    return;
                if (this.props.contextArgs.mentionsinput) {
                    this.refs.mentionsinput.insertEmoticon(db);
                    return;
                }
                if (!this._selectionPosition)
                    this._selectionPosition = new cb(this.refs.mentionsinput.refs.textarea.getDOMNode());
                var eb = this.refs.mentionsinput.refs.textarea.getDOMNode(), fb = bb.getInstance(eb), gb = fb.getValue(), hb = ab.insertEmoticon(db, gb, this._selectionPosition.getPos());
                fb.setValue(hb.result);
                this._selectionPosition.setPos(hb.start, hb.end);
            }.bind(this));
        },
        _hideStickerNUX: function() {
            this.setState({
                stickerNUXVisible: false
            });
        }
    });
    e.exports = xa;
}, null);
__d("UFIAddCommentController", ["Arbiter", "copyProperties", "MentionsInputUtils", "Parent", "UFIAddComment.react", "React", "ShortProfiles", "UFICentralUpdates", "UFIComments", "UFIFeedbackTargets", "UFIInstanceState", "UFIUserActions"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
    function s(t, u, v, w) {
        this.id = u;
        this._ufiInstanceID = w.instanceid;
        this._contextArgs = w;
        this._replyCommentID = v;
        if (t) {
            this.root = t;
            if (!this._contextArgs.rootid)
                this._contextArgs.rootid = t.id;
            this.render();
            n.subscribe('instance-updated', function(x, y) {
                var z = y.updates;
                if (this._ufiInstanceID in z)
                    this.render();
            }.bind(this));
            n.subscribe('feedback-updated', function(x, y) {
                var z = y.updates;
                if (this.id in z)
                    this.render();
            }.bind(this));
        }
        n.subscribe('feedback-id-changed', function(x, y) {
            var z = y.updates;
            if (this.id in z)
                this.id = z[this.id];
        }.bind(this));
    }
    h(s.prototype, {
        _onCommentSubmit: function(t, event) {
            r.addComment(this.id, t.visibleValue, t.encodedValue, {
                source: this._contextArgs.source,
                ufiinstanceid: this._ufiInstanceID,
                target: event.target,
                replyid: this._replyCommentID,
                timelinelogdata: this._contextArgs.timelinelogdata,
                rootid: this._contextArgs.rootid,
                attachedphoto: this._contextArgs.attachedphoto,
                attachedsticker: this._contextArgs.attachedsticker,
                giftoccasion: this._contextArgs.giftoccasion,
                recommendationIDs: t.recommendationIDs
            });
            this._contextArgs.attachedphoto = null;
            this._contextArgs.attachedsticker = null;
            p.getFeedbackTarget(this.id, function(u) {
                var v = j.byTag(this.root, 'form');
                if (v)
                    g.inform('ufi/comment', {
                        form: v,
                        isranked: u.isranked
                    });
            }.bind(this));
            return false;
        },
        _onTypingStateChange: function(t, u) {},
        renderAddComment: function(t, u, v, w, x, y, z, aa, ba, ca) {
            var da = this._contextArgs.logtyping ? this._onTypingStateChange.bind(this): null, ea = null, fa = q.getKeyForInstance(this._ufiInstanceID, 'isediting')&&!this._replyCommentID;
            return (l.createElement(k, {
                hide: fa,
                replyCommentID: this._replyCommentID,
                viewerActor: t,
                targetID: u,
                initialData: ea,
                ref: x,
                withoutSeparator: y,
                onCommentSubmit: this._onCommentSubmit.bind(this),
                mentionsDataSource: v,
                onTypingStateChange: da,
                showSendOnEnterTip: w,
                allowPhotoAttachments: aa,
                allowStickerAttachments: ba,
                source: this._contextArgs.source,
                contextArgs: this._contextArgs,
                subtitle: z,
                isQAndA: ca,
                orderingModes: this._contextArgs.orderingmodes,
                useAddCommentFacepile: this._contextArgs.useaddcommentfacepile
            }));
        },
        renderEditComment: function(t, u, v, w, x, y, z, aa, ba) {
            var ca = o.getComment(v), da;
            if (ca.attachment)
                da = ca.attachment.type == 'sticker' ? ca.attachment : null;
            var ea = i.generateDataFromTextWithEntities(ca.body);
            return (l.createElement(k, {
                viewerActor: t,
                targetID: u,
                initialData: ea,
                onCommentSubmit: x,
                onCancel: y,
                mentionsDataSource: w,
                source: this._contextArgs.source,
                contextArgs: this._contextArgs,
                isEditing: true,
                editingCommentID: v,
                attachedPhoto: ca.photo_comment,
                attachedSticker: da,
                allowPhotoAttachments: z,
                allowStickerAttachments: aa,
                isQAndA: ba
            }));
        },
        render: function() {
            if (!this.root)
                throw new Error('render called on UFIAddCommentController with no root');
            p.getFeedbackTarget(this.id, function(t) {
                if (t.cancomment && t.actorforpost)
                    m.get(t.actorforpost, function(u) {
                        var v = this.renderAddComment(u, t.ownerid, t.mentionsdatasource, t.showsendonentertip, null, null, t.subtitle, t.allowphotoattachments, t.allowstickerattachments, t.isqanda);
                        this._addComment = l.render(v, this.root);
                    }.bind(this));
            }.bind(this));
        }
    });
    e.exports = s;
}, null);
__d("UFIAddCommentLink.react", ["React", "UFIClassNames", "cx", "fbt", "joinClasses", "tx"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = g.createClass({
        displayName: "UFIAddCommentLink",
        propTypes: {
            'data-ft': g.PropTypes.string,
            isFirstCommentComponent: g.PropTypes.bool,
            isFirstComponent: g.PropTypes.bool,
            isLastCommentComponent: g.PropTypes.bool,
            isLastComponent: g.PropTypes.bool,
            isQAndA: g.PropTypes.bool,
            onClick: g.PropTypes.func
        },
        render: function() {
            var n = k(h.ROW, (("UFIAddCommentLink") + (this.props.isFirstCommentComponent ? ' ' + "UFIFirstCommentComponent" : '') + (this.props.isLastCommentComponent ? ' ' + "UFILastCommentComponent" : '') + (this.props.isFirstComponent ? ' ' + "UFIFirstComponent" : '') + (this.props.isLastComponent ? ' ' + "UFILastComponent" : ''))), o;
            if (this.props.isQAndA) {
                o = "Ask a question...";
            } else 
                o = "Write a comment...";
            return (g.createElement("li", {
                className: n,
                "data-ft": this.props['data-ft']
            }, g.createElement("a", {
                className: "UFICommentLink",
                onClick: this.props.onClick,
                href: "#",
                role: "button"
            }, o)));
        }
    });
    e.exports = m;
}, null);
__d("HovercardLinkInterpolator", ["HovercardLink", "Link.react", "React", "URI", "WWWBase", "cx", "isRTL"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    function n(o, p, q, r, s) {
        var t = p.entity, u = q || (t.external ? '_blank' : null), v, w = ((!t.external ? "profileLink" : '') + (t.weakreference ? ' ' + "weakReference" : '')), x, y = t.hashtag ? o.substring(1): o;
        x = m(y) ? 'rtl' : 'ltr';
        if (t.hashtag) {
            var z = new j(t.url).setDomain(new j(k.uri).getDomain());
            v = i.createElement("a", {
                className: "_58cn",
                dir: x,
                href: z.toString()
            }, i.createElement("span", {
                className: "_58cl"
            }, o.substring(0, 1)), i.createElement("span", {
                className: "_58cm"
            }, o.substring(1)));
        } else if (t.weakreference) {
            v = i.createElement(h, {
                className: w,
                dir: x,
                href: t,
                target: u
            }, i.createElement("i", {
                className: "UFIWeakReferenceIcon"
            }), o);
        } else 
            v = i.createElement(h, {
                className: w,
                dir: x,
                href: t,
                target: u
            }, o);
        if (!t.external&&!t.hashtag&&!t.photo)
            v.props['data-hovercard'] = g.constructEndpointWithGroupAndLocation(t, r, s).toString();
        return v;
    }
    e.exports = n;
}, null);
__d("SeeMore.react", ["React", "cx", "tx"], function(a, b, c, d, e, f, g, h, i) {
    var j = g.createClass({
        displayName: "SeeMore",
        getInitialState: function() {
            return {
                isCollapsed: true
            };
        },
        handleClick: function() {
            this.setState({
                isCollapsed: false
            });
        },
        render: function() {
            var k = this.state.isCollapsed, l = k ? g.createElement("span", {
                className: "_5uzb"
            }, "..."): null, m = this.props.children[0], n = k ? null: g.createElement("span", null, this.props.children[1]), o=!k ? null : g.createElement("a", {
                className: "_5v47 fss",
                onClick: this.handleClick,
                href: "#",
                role: "button"
            }, "See More");
            return (g.createElement("span", {
                className: this.props.className
            }, m, l, o, n));
        }
    });
    e.exports = j;
}, null);
__d("findSplitPointForText", [], function(a, b, c, d, e, f) {
    function g(h, i, j) {
        var k = null, l = h.split('\n');
        if (i && h.length > i)
            k = i;
        if (j && l.length > j) {
            var m = l.slice(0, j).join('\n').length;
            if (k !== null) {
                k = Math.min(m, k);
            } else 
                k = m;
        }
        return k;
    }
    e.exports = g;
}, null);
__d("partitionTextAndRanges", [], function(a, b, c, d, e, f) {
    function g(j, k) {
        var l = j.offset + j.length;
        return k > j.offset && k < l;
    }
    function h(j, k) {
        for (var l = 0; l < j.length; l++) {
            var m = j[l];
            if (g(m, k))
                return m.offset;
        }
        return k;
    }
    var i = function(j, k, l) {
        var m = [], n = [], o = h(k, l);
        for (var p = 0; p < k.length; p++) {
            var q = k[p];
            if (q.offset < o) {
                m.push(q);
            } else 
                n.push({
                    offset: q.offset - o,
                    length: q.length,
                    entity: q.entity
                });
        }
        return {
            before: {
                ranges: m,
                text: j.substr(0, o)
            },
            after: {
                ranges: n,
                text: j.substr(o)
            }
        };
    };
    e.exports = i;
}, null);
__d("TruncatedTextWithEntities.react", ["React", "TextWithEntities.react", "SeeMore.react", "findSplitPointForText", "partitionTextAndRanges"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = g.createClass({
        displayName: "TruncatedTextWithEntities",
        render: function() {
            var m = this.props.text || '', n = this.props.ranges || [];
            m = m.replace(/\s*$/, '');
            var o = this.props.maxLines, p = this.props.maxLength;
            if (p && m.length > p) {
                var q = this.props.truncationPercent || .6;
                p = Math.floor(q * p);
            }
            var r = j(m, p, o);
            if (r !== null) {
                while (m[r - 1] === '\n')
                    r--;
                var s = k(m, n, r);
                return (g.createElement("span", {
                    "data-ft": this.props['data-ft'],
                    dir: this.props.dir
                }, g.createElement(i, {
                    className: this.props.className
                }, g.createElement(h, {
                    interpolator: this.props.interpolator,
                    ranges: s.before.ranges,
                    aggregatedRanges: this.props.aggregatedRanges,
                    text: s.before.text,
                    renderEmoticons: this.props.renderEmoticons,
                    renderEmoji: this.props.renderEmoji
                }), g.createElement(h, {
                    interpolator: this.props.interpolator,
                    ranges: s.after.ranges,
                    aggregatedRanges: this.props.aggregatedRanges,
                    text: s.after.text,
                    renderEmoticons: this.props.renderEmoticons,
                    renderEmoji: this.props.renderEmoji
                }))));
            } else 
                return (g.createElement("span", {
                    "data-ft": this.props['data-ft'],
                    dir: this.props.dir
                }, g.createElement(h, {
                    className: this.props.className,
                    interpolator: this.props.interpolator,
                    ranges: n,
                    imageRanges: this.props.imageRanges,
                    aggregatedRanges: this.props.aggregatedRanges,
                    text: m,
                    renderEmoticons: this.props.renderEmoticons,
                    renderEmoji: this.props.renderEmoji
                })));
        }
    });
    e.exports = l;
}, null);
__d("UFIActor.react", ["Badge.react", "Focus", "HovercardLink", "Locale", "React", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = " \u00b7 ", n = k.createClass({
        displayName: "UFIActor",
        propTypes: {
            author: k.PropTypes.object.isRequired,
            'data-ft': k.PropTypes.string,
            focusOnMount: k.PropTypes.bool,
            showHovercard: k.PropTypes.bool,
            isAuthorWeakReference: k.PropTypes.bool,
            groupOrEventID: k.PropTypes.number
        },
        componentDidMount: function() {
            if (this.props.focusOnMount)
                h.setWithoutOutline(this.refs.authorName.getDOMNode());
        },
        render: function() {
            var o = this.props.author, p = j.isRTL() ? 'rtl': 'ltr', q = ((this.props.isAuthorWeakReference ? "weakReference" : '') + (' ' + "UFICommentActorName")), r = [];
            if (this.props.isAuthorWeakReference)
                r.push(k.createElement("i", {
                    className: "UFIWeakReferenceIcon"
                }));
            r.push(o.name);
            var s = o.uri ? k.createElement("a", {
                className: q,
                "data-hovercard": this.props.showHovercard ? i.constructEndpointWithGroupAndLocation(o, this.props.groupOrEventID, 'ufi', this.props.isAuthorWeakReference).toString(): null,
                "data-ft": this.props['data-ft'],
                dir: p,
                href: o.uri,
                ref: "authorName"
            }, r): k.createElement("span", {
                className: q,
                dir: p,
                ref: "authorName"
            }, r);
            return (k.createElement("span", null, s, k.Children.map(this.props.children, function(t) {
                return t ? [t.type == g.type ? "": m, t] : null;
            })));
        }
    });
    e.exports = n;
}, null);
__d("UFICommentLikeCount.react", ["NumberFormat", "ProfileBrowserLink", "ProfileBrowserTypes", "React", "URI", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    "use strict";
    var m = function(o, p) {
        var q = new k('/ajax/like/tooltip.php').setQueryData({
            comment_fbid: o.fbid,
            comment_from: o.author,
            comment_likecount: o.likecount || 0,
            comment_id: o.id,
            cache_buster: o.likeconfirmhash || 0
        });
        if (p)
            q.addQueryData({
                viewas: p
            });
        return q;
    }, n = j.createClass({
        displayName: "UFICommentLikeCount",
        propTypes: {
            comment: j.PropTypes.object.isRequired,
            contextArgs: j.PropTypes.object.isRequired
        },
        render: function() {
            var o = this.props.comment, p = g.formatIntegerWithDelimiter(o.likecount || 0, this.props.contextArgs.numberdelimiter), q = i.LIKES, r = {
                id: o.fbid
            }, s = m(this.props.comment, this.props.contextArgs.viewas), t = j.createElement("i", {
                className: "UFICommentLikeIcon"
            }), u = j.createElement("span", null, p), v = (("UFICommentLikeButton") + (this.props.comment.hasviewerliked ? ' ' + "UFICommentLikedButton" : ''));
            return (j.createElement("a", {
                ajaxify: h.constructDialogURI(q, r).toString(),
                className: v,
                "data-hover": "tooltip",
                "data-tooltip-alignh": "center",
                "data-tooltip-uri": s.toString(),
                href: h.constructPageURI(q, r).toString(),
                rel: "dialog",
                role: "button"
            }, t, u));
        }
    });
    e.exports = n;
}, null);
__d("HelpLink.react", ["React", "joinClasses", "TooltipLink.react"], function(a, b, c, d, e, f, g, h, i) {
    var j = g.createClass({
        displayName: "HelpLink",
        render: function() {
            return (g.createElement(i, g.__spread({}, this.props, {
                className: h(this.props.className, "uiHelpLink mls")
            }), undefined));
        }
    });
    e.exports = j;
}, null);
__d("UFICreatorInfo.react", ["HelpLink.react", "React", "URI", "cx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k) {
    "use strict";
    var l = h.createClass({
        displayName: "UFICreatorInfo",
        propTypes: {
            creatorID: h.PropTypes.number.isRequired,
            creatorType: h.PropTypes.string.isRequired,
            creatorName: h.PropTypes.string.isRequired,
            labelType: h.PropTypes.string.isRequired,
            pageID: h.PropTypes.number.isRequired,
            profileURI: h.PropTypes.string
        },
        render: function() {
            var m, n = this.getCreatorLink();
            switch (this.props.labelType) {
            case 'commented':
                m = k._("Commented on by {creator}", [k.param("creator", n)]);
                break;
            case 'edited_comment':
                m = k._("Edited by {creator}", [k.param("creator", n)]);
                break;
            case 'sent_message':
                m = k._("Sent by {creator}", [k.param("creator", n)]);
                break;
            default:
                return;
            }
            return (h.createElement("span", null, m, h.createElement(g, {
                tooltip: this.getHelpText()
            })));
        },
        getCreatorLink: function() {
            switch (this.props.creatorType) {
            case 'application':
            case 'gray_account':
            case 'indirect_admin':
                return (h.createElement("a", {
                    className: "uiLinkSubtle",
                    "aria-label": this.getTooltipText(),
                    "data-hover": "tooltip"
                }, this.props.creatorName));
            case 'business_admin':
                return (h.createElement("a", {
                    className: "uiLinkSubtle",
                    href: this.props.profileURI
                }, this.props.creatorName));
            case 'direct_admin':
                return this.getProfileLinkWithHovercard();
            case 'former_admin':
                return (h.createElement("span", {
                    className: "uiLinkSubtle"
                }, h.createElement("img", {
                    src: "/images/privacy/cant-see.png",
                    width: 9,
                    height: 9,
                    className: "_3-8_"
                }), this.getProfileLinkWithHovercard()));
            default:
                return (h.createElement("span", {
                    className: "uiLinkSubtle"
                }, this.props.creatorName));
            }
        },
        getTooltipText: function() {
            switch (this.props.creatorType) {
            case 'application':
                return this.getApplicationText();
            case 'gray_account':
                return this.getGrayAccountText();
            case 'indirect_admin':
                return this.getIndirectAdminText();
            }
        },
        getProfileLinkWithHovercard: function() {
            if (!this.props.profileURI)
                return h.createElement("span", null, this.props.creatorName);
            var m = new i('/ajax/hovercard/user.php').setQueryData({
                id: this.props.creatorID
            }).addQueryData({
                type: 'page_admin',
                extragetparams: JSON.stringify({
                    directed_target_id: this.props.pageID
                })
            });
            return (h.createElement("a", {
                className: "uiLinkSubtle",
                "data-hovercard": m,
                href: this.props.profileURI
            }, this.props.creatorName));
        },
        getApplicationText: function() {
            switch (this.props.labelType) {
            case 'commented':
                return (k._("This was commented on by someone using {application}.", [k.param("application", this.props.creatorName)]));
            case 'edited_comment':
                return (k._("This was edited by someone using {application}.", [k.param("application", this.props.creatorName)]));
            case 'sent_message':
                return (k._("This was sent by someone using {application}.", [k.param("application", this.props.creatorName)]));
            }
        },
        getIndirectAdminText: function() {
            switch (this.props.labelType) {
            case 'commented':
                return (k._("This was commented on by someone from {page}.", [k.param("page", this.props.creatorName)]));
            case 'edited_comment':
                return (k._("This was edited by someone from {page}.", [k.param("page", this.props.creatorName)]));
            case 'sent_message':
                return (k._("This was sent by someone from {page}.", [k.param("page", this.props.creatorName)]));
            }
        },
        getGrayAccountText: function() {
            switch (this.props.labelType) {
            case 'commented':
                return ("This was commented on by someone who doesn't have a personal Facebook account.");
            case 'edited_comment':
                return ("This was edited by someone who doesn't have a personal Facebook account.");
            case 'sent_message':
                return ("This was sent by someone who doesn't have a personal Facebook account.");
            }
        },
        getHelpText: function() {
            switch (this.props.labelType) {
            case 'commented':
                return ("Only people who manage this Page can see who posted a comment");
            case 'edited_comment':
                return ("Only people who manage this Page can see who edited a comment");
            case 'sent_message':
                return ("Only people who manage this Page can see who sent a message");
            }
        }
    });
    e.exports = l;
}, null);
__d("UFICommentMetadata.react", ["Bootloader", "React", "Timestamp.react", "TrackingNodes", "UFIConstants", "URI", "UFICreatorInfo.react", "cx", "tx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    "use strict";
    var p = k.UFIStatus, q = ' \u00b7 ', r = "UFIFailureMessageIcon", s = "UFIFailureMessage", t = "uiLinkSubtle", u = function(w) {
        var x = w.status;
        return x === p.FAILED_ADD || x === p.FAILED_EDIT;
    }, v = h.createClass({
        displayName: "UFICommentMetadata",
        propTypes: {
            comment: h.PropTypes.object.isRequired,
            onRetrySubmit: h.PropTypes.func,
            permalink: h.PropTypes.string,
            shortenTimestamp: h.PropTypes.bool,
            showPermalink: h.PropTypes.bool
        },
        render: function() {
            var w = this.props.comment, x = this.props.permalink, y = this.props.onRetrySubmit, z, aa;
            if (u(w)) {
                z = [h.createElement("span", {
                    key: "failure",
                    className: s
                }, h.createElement("i", {
                    className: r
                }), "Unable to post comment."), w.allowRetry && y ? [' ', h.createElement("a", {
                    key: "rety-submit",
                    onClick: y,
                    href: "#",
                    role: "button"
                }, "Try Again")]: null];
            } else {
                var ba = this.props.showPermalink ? x: null, ca = j.getTrackingInfo(j.types.SOURCE);
                aa = h.createElement("a", {
                    key: "timestamp-message",
                    className: t,
                    href: ba,
                    "data-ft": ca
                }, h.createElement(i, {
                    shorten: this.props.shortenTimestamp,
                    time: w.timestamp.time,
                    text: w.timestamp.text,
                    verbose: w.timestamp.verbose
                }));
            }
            var da = null;
            if (w.originalTimestamp) {
                var ea = new l('/ajax/edits/browser/comment').addQueryData({
                    comment_token: w.id
                }).toString();
                da = [q, h.createElement("a", {
                    ajaxify: ea,
                    "aria-label": "Show edit history",
                    className: "uiLinkSubtle",
                    "data-hover": "tooltip",
                    href: "#",
                    key: "edit-link",
                    ref: "EditLink",
                    rel: "dialog",
                    role: "button",
                    title: "Show edit history"
                }, "Edited")];
            }
            var fa = null;
            if (w.creator_data)
                fa = [h.createElement(m, {
                    creatorID: w.creator_data.creatorID,
                    creatorType: w.creator_data.creatorType,
                    creatorName: w.creator_data.creatorName,
                    labelType: w.creator_data.labelType,
                    pageID: w.creator_data.pageID,
                    profileURI: w.creator_data.profileURI
                }), q];
            return (h.createElement("span", null, fa, aa, z, da));
        },
        componentWillUpdate: function(w) {
            var x = this.props.comment, y = w.comment;
            if (!x.editnux&&!!y.editnux)
                g.loadModules(["LegacyContextualDialog"], function(z) {
                    var aa = new z();
                    aa.init(y.editnux).setContext(this.refs.EditLink.getDOMNode()).setWidth(300).setPosition('below').show();
                }.bind(this));
        }
    });
    e.exports = v;
}, null);
__d("UFIReplyLink.react", ["React", "tx"], function(a, b, c, d, e, f, g, h) {
    var i = g.createClass({
        displayName: "UFIReplyLink",
        propTypes: {
            onClick: g.PropTypes.func
        },
        render: function() {
            return (g.createElement("a", {
                className: "UFIReplyLink",
                href: "#",
                onClick: this.props.onClick
            }, "Reply"));
        }
    });
    e.exports = i;
}, null);
__d("UFISpamCount", ["UFISpamCountImpl"], function(a, b, c, d, e, f) {
    e.exports = b('UFISpamCountImpl').module || {
        enabled: false
    };
}, null);
__d("UFICommentActions.react", ["React", "TrackingNodes", "UFICommentLikeCount.react", "UFICommentMetadata.react", "UFIConstants", "UFIReplyLink.react", "UFISpamCount", "cx", "fbt", "tx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    "use strict";
    var q = k.UFIStatus, r = ' \u00b7 ', s = "fsm fwn fcg UFICommentActions", t = "UFIDeletedMessageIcon", u = "UFIDeletedMessage", v = g.createClass({
        displayName: "UFICommentActions",
        propTypes: {
            comment: g.PropTypes.object.isRequired,
            contextArgs: g.PropTypes.object.isRequired,
            feedback: g.PropTypes.object.isRequired,
            hideAsSpamForPageAdmin: g.PropTypes.bool,
            markedAsSpamHere: g.PropTypes.bool,
            onAlsoRecommendToggle: g.PropTypes.func,
            onCommentLikeToggle: g.PropTypes.func,
            onCommentReply: g.PropTypes.func,
            onMarkAsNotSpam: g.PropTypes.func,
            onPreviewRemove: g.PropTypes.func,
            onRetrySubmit: g.PropTypes.func,
            permalink: g.PropTypes.string,
            shortenTimestamp: g.PropTypes.bool,
            showPermalink: g.PropTypes.bool,
            showReplyLink: g.PropTypes.bool,
            viewerCanMarkNotSpam: g.PropTypes.bool
        },
        render: function() {
            var w = this.props, x = w.comment, y = w.permalink, z = w.feedback, aa = w.markedAsSpamHere, ba = x.status === q.SPAM_DISPLAY, ca = w.showReplyLink, da = w.hideAsSpamForPageAdmin, ea, fa, ga, ha, ia, ja, ka, la=!x.islocal && x.status !== q.LIVE_DELETED;
            if (la) {
                if (ba&&!aa) {
                    if (w.viewerCanMarkNotSpam)
                        ea = g.createElement("a", {
                            onClick: w.onMarkAsNotSpam,
                            className: "UFICommentNotSpamLink",
                            href: "#",
                            role: "button"
                        }, "Unhide");
                    if (da && z.isthreaded && x.cancomment && ca)
                        ia = g.createElement(l, {
                            comment: x,
                            onClick: w.onCommentReply,
                            contextArgs: w.contextArgs
                        });
                } else {
                    if (x.viewercanlike) {
                        var ma = h.getTrackingInfo(x.hasviewerliked ? h.types.UNLIKE_LINK : h.types.LIKE_LINK), na = x.hasviewerliked ? "Unlike this comment": "Like this comment";
                        fa = g.createElement("a", {
                            className: "UFILikeLink",
                            "data-ft": ma,
                            href: "#",
                            onClick: w.onCommentLikeToggle,
                            role: "button",
                            title: na
                        }, x.hasviewerliked ? "Unlike" : "Like");
                    }
                    if ((this.props.contextArgs.simplereply && this.props.feedback.cancomment) || (z.isthreaded && x.cancomment && ca))
                        ia = g.createElement(l, {
                            comment: x,
                            contextArgs: w.contextArgs,
                            onClick: w.onCommentReply
                        });
                    if (x.likecount > 0)
                        ga = g.createElement(i, {
                            comment: x,
                            contextArgs: w.contextArgs
                        });
                    if (x.spamcount && m.enabled)
                        ha = g.createElement(m, {
                            count: x.spamcount
                        });
                }
                if (w.contextArgs.canaddrecommendation && x.hasrecommendation) {
                    var oa = ("Also recommend the recommendations in this comment");
                    if (x.hasviewerrecommended) {
                        ka = g.createElement("span", null, "Recommended");
                    } else 
                        ka = g.createElement("a", {
                            className: "UFIRecommendLink",
                            href: "#",
                            onClick: w.onAlsoRecommendToggle,
                            role: "button",
                            title: oa
                        }, "Recommend");
                }
                if (x.attachment && x.attachment.type == "share" && x.canremove)
                    ja = g.createElement("a", {
                        href: "#",
                        onClick: w.onPreviewRemove,
                        role: "button"
                    }, "Remove Preview");
            }
            var pa = g.createElement(j, {
                comment: x,
                onRetrySubmit: w.onRetrySubmit,
                permalink: y,
                shortenTimestamp: w.shortenTimestamp,
                showPermalink: w.showPermalink
            }), qa;
            if (z.isqanda) {
                qa = {
                    likeCount: ga,
                    spamCount: ha,
                    likeToggle: fa,
                    commentReply: ia,
                    spamToggle: ea,
                    metadata: pa,
                    removePreview: ja
                };
            } else if (w.contextArgs.entstream) {
                qa = {
                    metadata: pa,
                    likeToggle: fa,
                    likeCount: ga,
                    alsoRecommend: ka,
                    commentReply: ia,
                    spamCount: ha,
                    spamToggle: ea,
                    removePreview: ja
                };
            } else if (z.isthreaded) {
                qa = {
                    likeToggle: fa,
                    commentReply: ia,
                    spamToggle: ea,
                    removePreview: ja,
                    likeCount: ga,
                    spamCount: ha,
                    metadata: pa
                };
            } else 
                qa = {
                    metadata: pa,
                    likeToggle: fa,
                    likeCount: ga,
                    alsoRecommend: ka,
                    spamCount: ha,
                    commentReply: ia,
                    spamToggle: ea,
                    removePreview: ja
                };
            if (x.status === q.LIVE_DELETED) {
                var ra = g.createElement("span", {
                    className: u
                }, g.createElement("i", {
                    className: t,
                    "data-hover": "tooltip",
                    "aria-label": "Comment deleted"
                }));
                qa.deletionWarning = ra;
            }
            var sa = true, ta = {};
            for (var ua in qa) {
                var va = qa[ua];
                if (va) {
                    ta[ua] = sa ? va : {
                        MIDDOT: r,
                        action: va
                    };
                    sa = false;
                }
            }
            return (g.createElement("div", {
                className: s
            }, ta));
        }
    });
    e.exports = v;
}, null);
__d("LitestandEllipsis", ["DOM", "DOMDimensions", "concatMap", "createArrayFrom", "getElementText"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l, m = {
        add: function(p, q, r) {
            r = r || p;
            g.scry(p, 'br').forEach(g.remove);
            var s = h.getElementDimensions(r).height;
            if (s <= q)
                return p;
            var t, u = '...', v = o(p), w = v.length - 1, x = k(v[w]);
            while (w >= 0 && s > q) {
                t = Math.max(x.lastIndexOf(' '), x.lastIndexOf('\n'));
                if (t===-1)
                    t = x.length - u.length - 1;
                if (t <= 0) {
                    n(v[w], '');
                    w--;
                    x = k(v[w]);
                } else {
                    x = x.substr(0, t).trim() + u;
                    n(v[w], x);
                }
                s = h.getElementDimensions(r).height - 1;
            }
        }
    };
    function n(p, q) {
        l = l || (p.textContent != null ? 'textContent' : 'innerText');
        p[l] = q;
    }
    function o(p) {
        if (g.isTextNode(p))
            return [p];
        return i(o, j(p.childNodes));
    }
    e.exports = m;
}, null);
__d("LitestandShareAttachment", ["CSS", "DOM", "LitestandEllipsis", "csx", "cx", "queryThenMutateDOM"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = 16, n = 22, o = 20, p = 5, q = 3, r = 2, s = 2, t = 5, u = 5, v = {
        init: function(z) {
            var aa, ba, ca, da = w(z);
            l(function() {
                aa = h.scry(z, "._6m6")[0];
                ba = h.scry(z, "._6m7")[0];
                ca = x(z, aa, da);
            }, function() {
                if (!ca) {
                    ba && g.hide(ba);
                    aa && i.add(aa, da * y(z));
                } else if (ba && ca) {
                    g.show(ba);
                    i.add(ba, ca * m);
                }
            });
        },
        getNumDescriptionLines: function(z) {
            return x(z, h.scry(z, "._6m6")[0], w(z));
        },
        getDescriptionLineHeight: function() {
            return m;
        }
    };
    function w(z) {
        var aa = g.hasClass(z, "_59ap"), ba = g.hasClass(z, "_pb2"), ca = h.scry(z, "^div._4rtc").length > 0, da;
        if (ba) {
            da = s;
        } else if (ca) {
            da = r;
        } else if (aa) {
            da = q;
        } else 
            da = p;
        return da;
    }
    function x(z, aa, ba) {
        var ca = h.scry(z, "._6m3")[0];
        if (!aa ||!ca)
            return 0;
        var da = h.scry(z, "._59tj")[0], ea = g.hasClass(z, "_59ap"), fa = g.hasClass(z, "_pb2"), ga = Math.round(aa.scrollHeight / y(z));
        if (ga >= ba&&!fa)
            return 0;
        var ha = ca.offsetHeight - t - aa.offsetHeight - (da ? da.offsetHeight : 0) - (ea ? 0 : u) + 1;
        return Math.floor(Math.max(ha, 0) / m);
    }
    function y(z) {
        return g.hasClass(z, "_pb2") ? o : n;
    }
    e.exports = v;
}, null);
__d("UFICommentAttachment.react", ["DOM", "HTML", "LitestandShareAttachment", "React", "Sticker.react"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = 80, m = j.createClass({
        displayName: "UFICommentAttachment",
        propTypes: {
            comment: j.PropTypes.object.isRequired
        },
        _attachmentFromCommentData: function(n) {
            return n.photo_comment || n.attachment;
        },
        _getScaledDimensions: function(n, o) {
            var p, q, r;
            if (o > n) {
                r = l / o;
                p = n * r;
                q = o * r;
            } else {
                r = l / n;
                p = n * r;
                q = o * r;
            }
            return {
                height: Math.round(p),
                width: Math.round(q)
            };
        },
        componentDidMount: function() {
            var n = this._attachmentFromCommentData(this.props.comment);
            if (n)
                this.renderAttachment(n);
        },
        shouldComponentUpdate: function(n, o) {
            var p = this._attachmentFromCommentData(this.props.comment), q = this._attachmentFromCommentData(n.comment);
            if (!p&&!q)
                return false;
            if (!p ||!q || p.markup != q.markup) {
                return true;
            } else 
                return false;
        },
        componentDidUpdate: function(n) {
            var o = this._attachmentFromCommentData(this.props.comment);
            if (o.type !== 'sticker')
                this.renderAttachment(o);
        },
        renderAttachment: function(n) {
            if (n && this.refs && this.refs.contents && n.markup) {
                var o = n.markup;
                if (h.isHTML(o.markup))
                    o = h.replaceJSONWrapper(o.markup).getRootNode();
                var p = o.parentNode, q = this.refs.contents.getDOMNode();
                if (p && p !== q)
                    o = o.cloneNode(true);
                g.setContent(q, o);
                if (n.type == "share")
                    i.init(q);
            }
        },
        renderSticker: function(n) {
            var o = this._getScaledDimensions(n.metadata.height, n.metadata.width);
            return (j.createElement(k, {
                animationTrigger: "load_and_hover",
                frameCount: n.metadata.frameCount,
                frameRate: n.metadata.frameRate,
                framesPerCol: n.metadata.framesPerCol,
                framesPerRow: n.metadata.framesPerRow,
                spriteURI: n.metadata.sprite_uri,
                sourceHeight: o.height,
                sourceURI: n.metadata.source_uri,
                sourceWidth: o.width
            }));
        },
        render: function() {
            var n = this._attachmentFromCommentData(this.props.comment);
            if (n)
                if (n && n.type === 'sticker') {
                    return this.renderSticker(n);
                } else 
                    return j.createElement("div", {
                        ref: "contents"
                    });
            return j.createElement("span", null);
        }
    });
    e.exports = m;
}, null);
__d("XUIEditButton.react", ["XUIAbstractGlyphButton.react", "React", "cx", "tx", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = h.createClass({
        displayName: "XUIEditButton",
        render: function() {
            var m = this.props.label, n = this.props.title;
            if (!this.props.title&&!this.props.tooltip) {
                if (!m)
                    m = "Edit";
                n = m;
            }
            return (h.createElement(g, h.__spread({}, this.props, {
                label: m,
                title: n,
                "aria-label": this.props.tooltip,
                "data-hover": this.props.tooltip && 'tooltip',
                "data-tooltip-alignh": this.props.tooltip && 'center',
                className: k(this.props.className, "_5upq _5upr")
            })));
        }
    });
    e.exports = l;
}, null);
__d("UFICommentMenu.react", ["Bootloader", "React", "XUICloseButton.react", "XUIEditButton.react", "keyMirror"], function(a, b, c, d, e, f, g, h, i, j, k) {
    "use strict";
    var l, m, n, o, p = k({
        EDIT: true,
        CLOSE: true
    }), q = h.createClass({
        displayName: "UFICommentMenu",
        propTypes: {
            menuData: h.PropTypes.array,
            menuType: h.PropTypes.oneOf(Object.keys(p)).isRequired,
            onAction: h.PropTypes.func,
            onClick: h.PropTypes.func
        },
        getInitialState: function() {
            return {
                bootloading: false,
                bootloaded: false,
                needsExpand: false
            };
        },
        onClickGuard: function(event) {
            if (this.state.bootloading) {
                return;
            } else if (!this.state.bootloaded && this.props.menuData) {
                this.setState({
                    bootloading: true
                });
                g.loadModules(["ContextualDialogArrow", "PopoverMenu.react", "ReactXUIMenu"], function(r, s, t) {
                    l = r, m = s;
                    n = t;
                    o = n.Item;
                    this.setState({
                        bootloading: false,
                        bootloaded: true,
                        needsExpand: true
                    });
                }.bind(this));
            } else if (this.props.onClick)
                this.props.onClick(event);
        },
        shouldComponentUpdate: function(r, s, t) {
            if (this.state.needsExpand&&!s.needsExpand)
                return false;
            return true;
        },
        render: function() {
            var r = null;
            if (this.props.menuType === p.EDIT) {
                r = j;
            } else 
                r = i;
            if (this.props.menuData && this.state.bootloaded) {
                var s = this.props.menuData.map(function(u) {
                    return (h.createElement(o, {
                        value: u.value
                    }, u.label));
                }), t = h.createElement(n, {
                    onItemClick: this.props.onAction
                }, s);
                return (h.createElement(m, h.__spread({}, this.props, {
                    alignh: "right",
                    layerBehaviors: [l],
                    menu: t,
                    ref: "menu"
                }), h.createElement(r, {
                    href: "#",
                    onClick: this.onClickGuard
                })));
            }
            return h.createElement(r, h.__spread({}, this.props, {
                href: "#",
                onClick: this.onClickGuard
            }));
        },
        componentDidUpdate: function() {
            if (this.state.needsExpand) {
                this.refs.menu.showPopover();
                this.setState({
                    needsExpand: false
                });
            }
        }
    });
    q.MenuType = p;
    e.exports = q;
}, null);
__d("UFISocialContext.react", ["HovercardLink", "ProfileBrowserLink", "ProfileBrowserTypes", "React", "URI", "tx"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    "use strict";
    var m = 27, n = j.createClass({
        displayName: "UFISocialContext",
        propTypes: {
            commentAuthor: j.PropTypes.object.isRequired,
            otherMutualCount: j.PropTypes.number.isRequired,
            topMutualFriend: j.PropTypes.object.isRequired
        },
        render: function() {
            var o = this.props.topMutualFriend, p = this.props.otherMutualCount, q = this.props.commentAuthor, r = g.constructEndpoint(o).toString(), s = j.createElement("a", {
                href: o.uri,
                "data-hovercard": r,
                key: "top"
            }, o.name), t = q.name.length + o.name.length, u;
            if (p === 0) {
                u = l._("Friends with {name}", {
                    name: s
                });
            } else if (t < m) {
                var v;
                if (p == 1) {
                    v = "1 other";
                } else 
                    v = l._("{count} others", {
                        count: p
                    });
                u = l._("Friends with {name} and {others}", {
                    name: s,
                    others: this.getOthersLink(v, q, o)
                });
            } else {
                var w = l._("{count} mutual friends", {
                    count: p + 1
                });
                u = this.getOthersLink(w, q);
            }
            return (j.createElement("span", {
                className: "UFICommentSocialContext"
            }, u));
        },
        getOthersLink: function(o, p, q) {
            var r = i.MUTUAL_FRIENDS, s = {
                uid: p.id
            }, t = new k('/ajax/mutual_friends/tooltip.php').setQueryData({
                friend_id: p.id
            });
            if (q)
                t.addQueryData({
                    exclude_id: q.id
                });
            var u = h.constructDialogURI(r, s).toString();
            return (j.createElement("a", {
                ajaxify: u,
                "data-hover": "tooltip",
                "data-tooltip-alignh": "center",
                "data-tooltip-uri": t.toString(),
                href: h.constructPageURI(r, s).toString(),
                key: "others",
                rel: "dialog"
            }, o));
        }
    });
    e.exports = n;
}, null);
__d("URITruncator", ["URI", "tx"], function(a, b, c, d, e, f, g, h) {
    var i = 3;
    function j(k, l) {
        var m = "...", n = m.length;
        if (!k || l === undefined || k.length <= l || l <= n || k.toString().length <= n)
            return k;
        if (!g.isValidURI(k))
            return k.substring(0, l - n) + m;
        var o = new g(k), p = o.getOrigin();
        if (p.length > l - n)
            return p.substring(0, l - n) + m;
        var q = false;
        if (!!o.getFragment()) {
            q = true;
            o.setFragment('');
            if (o.toString().length <= l - n)
                return o.toString() + m;
        }
        var r = o.getQueryData();
        if (r) {
            var s = Object.keys(r);
            if (s.length > 0) {
                q = true;
                for (var t = s.length - 1; t >= 0; t--) {
                    o.removeQueryData(s[t]);
                    if (o.toString().length <= l - n)
                        return o.toString() + m;
                }
            }
        }
        var u = o.getPath() + (q ? m : ''), v = u.split('/'), w = (p.length + u.length) - l, x = 0;
        while (w > 0 && v.length > x + 1) {
            var y = x + 1, z = v[y];
            if (w + n + i <= z.length) {
                var aa = z.length - 1, ba = z.length - w - n, ca = /[a-zA-Z0-9]/;
                w += n;
                while (w > 0) {
                    while (aa > 0 && ca.test(z[aa])) {
                        aa--;
                        w--;
                    }
                    while (aa > 0&&!ca.test(z[aa])) {
                        aa--;
                        w--;
                    }
                }
                if (aa === 0)
                    aa = ba - 1;
                v[y] = z.substring(0, aa + 1) + m;
            } else {
                x++;
                w -= z.length;
                if (x === 1) {
                    w += n;
                } else 
                    w--;
            }
        }
        if (x > 0) {
            if (v[v.length - 1].length === 0 && v.length === x + 2)
                x++;
            v.splice(1, x, m);
        }
        var da = p + v.join('/');
        if (da.length > l)
            da = da.substring(0, l - n) + m;
        return da;
    }
    e.exports = j;
}, null);
__d("UFIComment.react", ["Badge.react", "Bootloader", "HovercardLink", "HovercardLinkInterpolator", "InlineStoryInsert", "Locale", "React", "TrackingNodes", "TruncatedTextWithEntities.react", "UFIActor.react", "UFIClassNames", "UFICommentActions.react", "UFICommentAttachment.react", "UFICommentMenu.react", "UFIConfig", "UFIConstants", "UFIImageBlock.react", "UFISocialContext.react", "UFITranslationConstants", "UnicodeBidi", "URI", "URITruncator", "XUICloseButton.react", "copyProperties", "cx", "joinClasses", "keyMirror", "transformTextRanges", "tx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa, ga, ha, ia) {
    "use strict";
    var ja = v.UFIStatus, ka = ga({
        edit: true,
        hide: true,
        remove: true
    }), la = "UFITranslateLink", ma = "UFITranslatedText", na = "pls", oa = "fcg", pa = null, qa = function(ua) {
        var va = ua.status;
        return va === ja.FAILED_ADD || va === ja.FAILED_EDIT;
    };
    function ra(ua) {
        return ua.commenterIsFOF !== undefined && ua.userIsMinor !== undefined && ua.reportLink !== undefined;
    }
    function sa(ua) {
        if (!ua)
            return ua;
        var va = [];
        ua.forEach(function(wa) {
            va.push(da({}, wa));
        });
        return va;
    }
    var ta = m.createClass({
        displayName: "UFIComment",
        propTypes: {
            authorProfiles: m.PropTypes.object.isRequired,
            comment: m.PropTypes.object.isRequired,
            contextArgs: m.PropTypes.object.isRequired,
            feedback: m.PropTypes.object.isRequired,
            'data-ft': m.PropTypes.string,
            focusOnMount: m.PropTypes.bool,
            hasPartialBorder: m.PropTypes.bool,
            hideAsSpamForPageAdmin: m.PropTypes.bool,
            isFeatured: m.PropTypes.bool,
            isFirst: m.PropTypes.bool,
            isFirstCommentComponent: m.PropTypes.bool,
            isFirstComponent: m.PropTypes.bool,
            isLast: m.PropTypes.bool,
            isLastCommentComponent: m.PropTypes.bool,
            isLastComponent: m.PropTypes.bool,
            isLocallyComposed: m.PropTypes.bool,
            isReply: m.PropTypes.bool,
            onAlsoRecommendToggle: m.PropTypes.func,
            onBlingBoxClick: m.PropTypes.func,
            onCommentLikeToggle: m.PropTypes.func,
            onCommentReply: m.PropTypes.func,
            onCommentTranslate: m.PropTypes.func,
            onEdit: m.PropTypes.func,
            onHideAsSpam: m.PropTypes.func,
            onInlineBan: m.PropTypes.func,
            onMarkAsNotSpam: m.PropTypes.func,
            onPreviewRemove: m.PropTypes.func,
            onRemove: m.PropTypes.func,
            onRetrySubmit: m.PropTypes.func,
            onUndoInlineBan: m.PropTypes.func,
            permalink: m.PropTypes.string,
            shortenTimestamp: m.PropTypes.bool,
            showPermalink: m.PropTypes.bool,
            showRemoveReportMenu: m.PropTypes.bool,
            showReplies: m.PropTypes.bool,
            showReplyLink: m.PropTypes.bool,
            viewerIsAuthor: m.PropTypes.bool
        },
        getInitialState: function() {
            return {
                isHighlighting: this.props.comment.highlightcomment,
                wasHighlighted: this.props.comment.highlightcomment,
                markedAsSpamHere: false,
                isInlinePageDeleted: false,
                isInlineBanned: false
            };
        },
        _onHideAsSpam: function(event) {
            this.props.onHideAsSpam(event);
            this.setState({
                markedAsSpamHere: true
            });
        },
        _onMarkAsNotSpam: function(event) {
            this.props.onMarkAsNotSpam(event);
            this.setState({
                markedAsSpamHere: false
            });
        },
        _onDeleteSpam: function(event) {
            this.props.onRemove(event, this);
        },
        _onInlineBan: function(event) {
            this.props.onInlineBan(event);
            this.setState({
                isInlineBanned: true
            });
        },
        _onUndoInlineBan: function(event) {
            this.props.onUndoInlineBan(event);
            this.setState({
                isInlineBanned: false
            });
        },
        _onAction: function(event, ua) {
            var va = ua.item, wa = va.getValue();
            setTimeout(function() {
                if (wa === ka.remove) {
                    this.props.onRemove(event);
                } else if (wa === ka.edit) {
                    this.props.onEdit(event);
                } else if (wa === ka.hide)
                    this._onHideAsSpam(event);
            }.bind(this), 0);
        },
        _createRemoveReportMenuData: function() {
            return [{
                value: ka.remove,
                label: "Delete Comment..."
            }, {
                value: ka.hide,
                label: "Hide Comment"
            }
            ];
        },
        _createEditDeleteMenuData: function() {
            return [{
                value: ka.edit,
                label: "Edit..."
            }, {
                value: ka.remove,
                label: "Delete..."
            }
            ];
        },
        _renderCloseButton: function() {
            var ua = this.props.comment, va = this.props.feedback, wa = null, xa = null, ya = null, za = false;
            if (ua.canremove&&!this.props.hideAsSpamForPageAdmin) {
                if (this.props.viewerIsAuthor) {
                    if (ua.canedit) {
                        ya = "Edit or Delete";
                        xa = this._createEditDeleteMenuData();
                        za = true;
                    } else {
                        ya = "Remove";
                        wa = this.props.onRemove;
                    }
                } else if (va.canremoveall)
                    if (this.props.showRemoveReportMenu) {
                        ya = "Remove or Report";
                        xa = this._createRemoveReportMenuData();
                    } else {
                        ya = "Remove";
                        wa = this.props.onRemove;
                    }
            } else if (ua.canreport) {
                ya = "Hide";
                wa = this._onHideAsSpam;
            }
            var ab = (("UFICommentCloseButton") + (wa === null && xa === null ? ' ' + "hdn" : '')), bb = null, cb = null;
            if (this.props.contextArgs.viewas) {
                bb = "/ajax/profile/link_disabled_in_viewas.php";
                cb = "dialog";
                wa = null;
            }
            var db = za ? t.MenuType.EDIT: t.MenuType.CLOSE;
            return (m.createElement(t, {
                ajaxify: bb,
                className: ab,
                onClick: wa,
                rel: cb,
                tooltip: ya,
                menuData: xa,
                menuType: db,
                onAction: this._onAction
            }));
        },
        _renderFakeCloseButton: function() {
            return (m.createElement(ca, {
                className: "UFICommentCloseButtonFake",
                tabIndex: "-1"
            }));
        },
        componentDidMount: function() {
            if (this.state.isHighlighting) {
                var ua = this.getDOMNode();
                if (this.props.storyInsert && k._notifStoryUFI(ua)) {
                    h.loadModules(["UFIHighlight"], function(va) {
                        setTimeout(va.actOn.bind(null, ua), 0);
                    });
                } else 
                    h.loadModules(["UFIScrollHighlight"], function(va) {
                        setTimeout(va.actOn.bind(null, ua), 0);
                    });
                this.setState({
                    isHighlighting: false
                });
            }
        },
        shouldComponentUpdate: function(ua, va) {
            var wa = this.props, xa = this.state;
            return (ua.comment !== wa.comment || ua.showReplyLink !== wa.showReplyLink || ua.showReplies !== wa.showReplies || ua.isFirst !== wa.isFirst || ua.isLast !== wa.isLast || ua.isFirstCommentComponent !== wa.isFirstCommentComponent || ua.isLastCommentComponent !== wa.isLastCommentComponent || ua.isFirstComponent !== wa.isFirstComponent || ua.isLastComponent !== wa.isLastComponent || ua.isFeatured !== wa.isFeatured || ua.hasPartialBorder !== wa.hasPartialBorder || va.wasHighlighted !== xa.wasHighlighted || va.isHighlighting !== xa.isHighlighting || va.markedAsSpamHere !== xa.markedAsSpamHere || va.isInlinePageDeleted !== xa.isInlinePageDeleted || va.isInlineBanned !== xa.isInlineBanned);
        },
        render: function() {
            var ua = this.props.comment, va = this.props.feedback, wa = ua.status === ja.DELETED, xa = ua.status === ja.LIVE_DELETED, ya = ua.status === ja.SPAM_DISPLAY, za = this.state.markedAsSpamHere, ab = this.state.isInlinePageDeleted, bb = this.props.hideAsSpamForPageAdmin, cb = this.state.isInlineBanned, db = ra(ua), eb=!ua.status && (ua.isunseen || ua.islocal);
            if (!ua.status && va.lastseentime) {
                var fb = ua.originalTimestamp || ua.timestamp.time;
                eb = eb || fb > va.lastseentime;
            }
            var gb = this.props.contextArgs.markedcomments;
            if (gb && gb[ua.legacyid])
                eb = true;
            var hb = ((this.props.isFirst ? "UFIFirstComment" : '') + (this.props.isLast ? ' ' + "UFILastComment" : '') + (this.props.isFirstCommentComponent ? ' ' + "UFIFirstCommentComponent" : '') + (this.props.isLastCommentComponent ? ' ' + "UFILastCommentComponent" : '') + (this.props.isFirstComponent ? ' ' + "UFIFirstComponent" : '') + (this.props.isLastComponent ? ' ' + "UFILastComponent" : ''));
            if (db)
                if (pa) {
                    var ib, jb = null, kb = null, lb = null;
                    if (bb) {
                        kb = cb ? this._onUndoInlineBan : this._onInlineBan;
                        if (ab) {
                            ib = "You've deleted this comment so no one can see it.";
                        } else if (za) {
                            ib = "Now this is only visible to the person who wrote it and their friends.";
                            lb = this._onDeleteSpam;
                            jb = this._onMarkAsNotSpam;
                        }
                    } else if (za) {
                        ib = "This comment has been hidden.";
                        lb = this._onDeleteSpam;
                        jb = this._onMarkAsNotSpam;
                    }
                    if (ib)
                        return (m.createElement("li", {
                            className: fa(q.ROW, hb, "UFIHide")
                        }, m.createElement(pa, {
                            notice: ib,
                            comment: this.props.comment,
                            authorProfiles: this.props.authorProfiles,
                            onUndo: jb,
                            onBanAction: kb,
                            onDeleteAction: lb,
                            isInlineBanned: cb,
                            isInlinePageDeleted: ab,
                            hideAsSpamForPageAdmin: bb,
                            pageID: this.props.feedback.ownerid
                        })));
                } else 
                    h.loadModules(["UFICommentRemovalControls.react"], function(pb) {
                        pa = pb;
                        setTimeout(function() {
                            this.forceUpdate();
                        }.bind(this));
                    }.bind(this));
            var mb=!wa, nb = fa(q.ROW, hb, (("UFIComment") + (qa(ua) ? ' ' + "UFICommentFailed" : '') + (wa || xa || ya ? ' ' + "UFITranslucentComment" : '') + (this.state.isHighlighting ? ' ' + "highlightComment" : '') + (!mb ? ' ' + "noDisplay" : '') + (mb ? ' ' + "display" : '') + (' ' + "UFIComponent") + (this.props.isFeatured&&!this.props.contextArgs.showverified ? ' ' + "UFIFeaturedComment" : '') + (this.props.hasPartialBorder ? ' ' + "UFIPartialBorder" : ''))), ob = this.renderComment();
            if (eb)
                nb = fa(nb, q.UNSEEN_ITEM);
            return (m.createElement("li", {
                className: nb,
                "data-ft": this.props['data-ft']
            }, ob));
        },
        renderComment: function() {
            var ua = this.props, va = ua.comment, wa = va.body.text, xa = sa(va.body.ranges), ya = ua.permalink, za = ua.feedback, ab = ua.authorProfiles[va.author], bb = va.status === ja.SPAM_DISPLAY, cb = va.status === ja.LIVE_DELETED, db=!(bb || cb), eb = za.canremoveall || va.hiddenbyviewer;
            if (v.commentURLTruncationLength)
                if (xa && xa.length > 0)
                    wa = ha(wa, xa, function(bc, cc) {
                        return cc.entity.external ? ba(bc, v.commentURLTruncationLength) : bc;
                    });
            var fb = null, gb = null;
            if (!ua.isLocallyComposed&&!this.state.wasHighlighted&&!va.fromfetch) {
                gb = v.commentTruncationLength;
                fb = v.commentTruncationMaxLines;
            }
            var hb = n.getTrackingInfo(n.types.SMALL_ACTOR_PHOTO), ib = n.getTrackingInfo(n.types.USER_NAME), jb = n.getTrackingInfo(n.types.USER_MESSAGE), kb = null, lb = null;
            if (va.istranslatable && (va.translatedtext === undefined))
                kb = m.createElement("a", {
                    href: "#",
                    role: "button",
                    title: "Translate this comment",
                    className: la,
                    onClick: ua.onCommentTranslate
                }, "See Translation");
            if (va.translatedtext) {
                var mb = null, nb = y.BING_PAGE_URL, ob = y.BING_TRANSLATOR_APP;
                if (va.translatorapp === ob) {
                    var pb = new aa(nb).addQueryData({
                        text: wa
                    });
                    mb = m.createElement("span", {
                        className: na
                    }, ' ', "(", m.createElement("a", {
                        href: pb.toString(),
                        target: "_blank",
                        className: oa
                    }, "Translated by Bing"), ")");
                }
                lb = m.createElement("span", {
                    className: ma
                }, va.translatedtext, mb);
            }
            var qb = z.isDirectionLTR(wa), rb=!qb, sb = qb && l.isRTL() ? 'ltr' : rb&&!l.isRTL() ? 'rtl' : null, tb = function(bc, cc) {
                return j(bc, cc, '_blank', za.grouporeventid, 'ufi');
            }, ub = m.createElement(o, {
                key: "comment-body",
                className: (("UFICommentBody") + (this.props.contextArgs.useWhitespacesRender ? ' ' + "UFICommentBodyPreserveWhitespace" : '')),
                interpolator: tb,
                ranges: xa,
                text: wa,
                truncationPercent: v.commentTruncationPercent,
                maxLength: gb,
                maxLines: fb,
                renderEmoticons: u.renderEmoticons,
                renderEmoji: u.renderEmoji,
                "data-ft": jb,
                dir: sb
            });
            if (va.socialcontext) {
                ub = m.createElement("div", {
                    key: "body"
                }, ub);
            } else {
                var vb = ((qb && l.isRTL() ? "_5wjy" : '') + (qb && l.isRTL() ? ' ' + "_5wjz" : '') + (rb&&!l.isRTL() ? ' ' + "_5wj-" : '') + (rb&&!l.isRTL() ? ' ' + "_5wj_" : ''));
                ub = vb ? m.createElement("div", {
                    key: "body",
                    className: vb
                }, ub) : [' ', ub];
            }
            var wb = ua.contextArgs.viewas ? null: i.constructEndpointWithGroupAndLocation(ab, za.grouporeventid, 'ufi', va.isauthorweakreference).toString(), xb = m.createElement(p, {
                author: ab,
                showHovercard: !!wb,
                key: "author",
                focusOnMount: ua.focusOnMount,
                "data-ft": ib,
                isAuthorWeakReference: va.isauthorweakreference,
                groupOrEventID: za.grouporeventid
            }, ua.isFeatured && ua.contextArgs.showverified ? m.createElement(g, {
                key: "badge",
                size: "xsmall",
                type: "verified"
            }) : null, va.socialcontext ? m.createElement(x, {
                topMutualFriend: ua.authorProfiles[va.socialcontext.topmutualid],
                otherMutualCount: va.socialcontext.othermutualcount,
                commentAuthor: ab
            }) : null), yb = null;
            if (va.photo_comment_status)
                yb = m.createElement("div", {
                    className: "_50f8"
                }, va.photo_comment_status);
            var zb = null;
            if (va.sticker_attachment_status)
                zb = m.createElement("div", {
                    className: "_50f8"
                }, va.sticker_attachment_status);
            var ac = null;
            if (va.status !== ja.DELETED)
                ac = m.createElement(s, {
                    comment: ua.comment
                });
            return (m.createElement(w, {
                spacing: "medium"
            }, m.createElement("a", {
                href: ab.uri,
                "data-hovercard": wb,
                "data-ft": hb
            }, m.createElement("img", {
                src: ab.thumbSrc,
                className: q.ACTOR_IMAGE,
                alt: ""
            })), m.createElement("div", {
                className: "UFICommentContentBlock"
            }, m.createElement("div", {
                className: "UFICommentContent"
            }, xb, ub, kb, lb, ac), yb, zb, m.createElement(r, {
                comment: va,
                feedback: za,
                onBlingBoxClick: ua.onBlingBoxClick,
                onAlsoRecommendToggle: ua.onAlsoRecommendToggle,
                onCommentLikeToggle: ua.onCommentLikeToggle,
                onCommentReply: ua.onCommentReply,
                onPreviewRemove: ua.onPreviewRemove,
                onRetrySubmit: ua.onRetrySubmit,
                onMarkAsNotSpam: this._onMarkAsNotSpam,
                permalink: ya,
                viewerCanMarkNotSpam: eb,
                shortenTimestamp: ua.shortenTimestamp,
                showPermalink: ua.showPermalink,
                showReplyLink: ua.showReplyLink,
                showReplies: ua.showReplies,
                contextArgs: ua.contextArgs,
                markedAsSpamHere: this.state.markedAsSpamHere,
                hideAsSpamForPageAdmin: ua.hideAsSpamForPageAdmin
            }), db ? this._renderCloseButton() : null), db ? this._renderFakeCloseButton() : null));
        }
    });
    e.exports = ta;
}, null);
__d("UFIContainer.react", ["React", "cx"], function(a, b, c, d, e, f, g, h) {
    var i = g.createClass({
        displayName: "UFIContainer",
        render: function() {
            var j = null;
            if (this.props.hasNub)
                j = g.createElement("li", {
                    className: "UFIArrow"
                }, g.createElement("i", null));
            var k = ((!this.props.isReplyList ? "UFIList" : '') + (this.props.isReplyList ? ' ' + "UFIReplyList" : '') + (this.props.isParentLiveDeleted ? ' ' + "UFITranslucentReplyList" : '') + (this.props.isFirstCommentComponent ? ' ' + "UFIFirstCommentComponent" : '') + (this.props.isLastCommentComponent ? ' ' + "UFILastCommentComponent" : '') + (this.props.isFirstComponent ? ' ' + "UFIFirstComponent" : '') + (this.props.isLastComponent ? ' ' + "UFILastComponent" : ''));
            return (g.createElement("ul", {
                className: k
            }, j, this.props.children));
        }
    });
    e.exports = i;
}, null);
__d("UFILikeSentenceText.react", ["ActorURI", "HovercardLinkInterpolator", "ProfileBrowserLink", "ProfileBrowserTypes", "React", "TextWithEntities.react", "URI"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    function n(p, q, r, s) {
        if (s.count != null) {
            var t = j.LIKES, u = {
                id: p.targetfbid,
                actorid: p.actorid
            }, v = [], w;
            for (var x = 0; x < q.length; x++)
                if (!q[x].count) {
                    w = q[x];
                    var y = w.entity;
                    v.push(y.id);
                }
            var z = new m('/ajax/like/tooltip.php').setQueryData({
                comment_fbid: p.targetfbid,
                comment_from: p.actorforpost,
                seen_user_fbids: v.length ? v: true
            });
            z = g.create(z, p.actorforpost);
            return (k.createElement("a", {
                rel: "dialog",
                ajaxify: i.constructDialogURI(t, u).toString(),
                href: i.constructPageURI(t, u).toString(),
                "data-hover": "tooltip",
                "data-tooltip-alignh": "center",
                "data-tooltip-uri": z.toString(),
                role: "button"
            }, r));
        } else 
            return h(r, s, null, null, 'ufi');
    }
    var o = k.createClass({
        displayName: "UFILikeSentenceText",
        propTypes: {
            contextArgs: k.PropTypes.object.isRequired,
            feedback: k.PropTypes.object.isRequired,
            likeSentenceData: k.PropTypes.object.isRequired
        },
        render: function() {
            var p = this.props.feedback, q = this.props.likeSentenceData, r;
            r = n;
            r = r.bind(null, p, q.ranges);
            return (k.createElement(l, {
                interpolator: r,
                ranges: q.ranges,
                aggregatedRanges: q.aggregatedranges,
                text: q.text
            }));
        }
    });
    e.exports = o;
}, null);
__d("UFILikeSentence.react", ["Bootloader", "LeftRight.react", "ProfileBrowserLink", "ProfileBrowserTypes", "React", "UFIClassNames", "UFIImageBlock.react", "UFILikeSentenceText.react", "URI", "cx", "joinClasses", "tx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
    var s = k.createClass({
        displayName: "UFILikeSentence",
        propTypes: {
            contextArgs: k.PropTypes.object.isRequired,
            feedback: k.PropTypes.object.isRequired,
            isFirstComponent: k.PropTypes.bool,
            isLastComponent: k.PropTypes.bool,
            onOrderingModeChange: k.PropTypes.func,
            onTargetLikeToggle: k.PropTypes.func,
            orderingMode: k.PropTypes.string,
            showOrderingModeSelector: k.PropTypes.bool
        },
        getInitialState: function() {
            return {
                selectorModule: null,
                bootloadedSelectorModule: false
            };
        },
        componentWillMount: function() {
            this._bootloadSelectorModule(this.props);
        },
        componentWillReceiveProps: function(t) {
            this._bootloadSelectorModule(t);
        },
        _bootloadSelectorModule: function(t) {
            if (t.showOrderingModeSelector&&!this.state.bootloadedSelectorModule) {
                var u = function(v) {
                    this.setState({
                        selectorModule: v
                    });
                }.bind(this);
                if (t.contextArgs.entstream) {
                    g.loadModules(["UFIEntStreamOrderingModeSelector.react"], u);
                } else 
                    g.loadModules(["UFIOrderingModeSelector.react"], u);
                this.setState({
                    bootloadedSelectorModule: true
                });
            }
        },
        render: function() {
            var t = this.props.feedback, u = t.likesentences.current, v = this.props.contextArgs.entstream, w = q(l.ROW, t.likesentences.isunseen ? l.UNSEEN_ITEM : '', (("UFILikeSentence") + (this.props.isFirstComponent ? ' ' + "UFIFirstComponent" : '') + (this.props.isLastComponent ? ' ' + "UFILastComponent" : ''))), x = null, y = null;
            if (u.text)
                y = k.createElement("div", {
                    className: "UFILikeSentenceText"
                }, k.createElement(n, {
                    contextArgs: this.props.contextArgs,
                    feedback: t,
                    likeSentenceData: u
                }));
            if (y&&!v) {
                x = k.createElement("i", {
                    className: "UFILikeIcon"
                });
                if (t.viewercanlike&&!t.hasviewerliked)
                    x = k.createElement("a", {
                        className: "UFILikeThumb",
                        href: "#",
                        tabIndex: "-1",
                        title: "Like this",
                        onClick: this.props.onTargetLikeToggle,
                        role: "button",
                        "aria-label": "Like this"
                    }, x);
            }
            var z = y, aa = null;
            if (t.seencount > 0&&!v) {
                var ba = j.GROUP_MESSAGE_VIEWERS, ca = {
                    id: t.targetfbid
                }, da = i.constructDialogURI(ba, ca), ea = i.constructPageURI(ba, ca), fa = new o('/ajax/ufi/seen_tooltip.php').setQueryData({
                    ft_ent_identifier: t.entidentifier,
                    displayed_count: t.seencount
                }), ga;
                if (t.seenbyall) {
                    ga = "Seen by everyone";
                } else 
                    ga = t.seencount == 1 ? "Seen by 1" : r._("Seen by {count}", {
                        count: t.seencount
                    });
                aa = k.createElement("a", {
                    rel: "dialog",
                    ajaxify: da.toString(),
                    href: ea.toString(),
                    "data-hover": "tooltip",
                    "data-tooltip-alignh": "left",
                    "data-tooltip-uri": fa.toString(),
                    className: (("UFISeenCount") + (!!u.text ? ' ' + "UFISeenCountRight" : ''))
                }, k.createElement("span", {
                    className: "UFISeenCountIcon"
                }), ga);
            } else if (this.props.showOrderingModeSelector && this.state.selectorModule) {
                var ha = this.state.selectorModule;
                aa = k.createElement(ha, {
                    currentOrderingMode: this.props.orderingMode,
                    entstream: v,
                    orderingmodes: t.orderingmodes,
                    onOrderChanged: this.props.onOrderingModeChange
                });
                if (!z)
                    z = k.createElement("div", null);
            }
            var ia = null;
            if (x && y) {
                ia = k.createElement(m, null, x, y, aa);
            } else if (z) {
                ia = k.createElement(h, {
                    direction: h.DIRECTION.right
                }, z, aa);
            } else 
                ia = aa;
            return (k.createElement("li", {
                className: w
            }, ia));
        }
    });
    e.exports = s;
}, null);
__d("UFIPager.react", ["LeftRight.react", "React", "UFIClassNames", "UFIImageBlock.react", "XUISpinner.react", "cx", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    var n = h.createClass({
        displayName: "UFIPager",
        propTypes: {
            contextArgs: h.PropTypes.object.isRequired,
            pagerLabel: h.PropTypes.string.isRequired,
            'data-ft': h.PropTypes.string,
            countSentence: h.PropTypes.string,
            isFirstCommentComponent: h.PropTypes.bool,
            isFirstComponent: h.PropTypes.bool,
            isLastCommentComponent: h.PropTypes.bool,
            isLastComponent: h.PropTypes.bool,
            isLoading: h.PropTypes.bool,
            isUnseen: h.PropTypes.bool,
            onPagerClick: h.PropTypes.func
        },
        onPagerClick: function(o) {
            !this.props.isLoading && this.props.onPagerClick && this.props.onPagerClick();
            o.nativeEvent.prevent();
        },
        render: function() {
            var o = this.onPagerClick, p = m(i.ROW, this.props.isUnseen ? i.UNSEEN_ITEM : '', (("UFIPagerRow") + (' ' + "UFIComponent") + (this.props.isFirstCommentComponent ? ' ' + "UFIFirstCommentComponent" : '') + (this.props.isLastCommentComponent ? ' ' + "UFILastCommentComponent" : '') + (this.props.isFirstComponent ? ' ' + "UFIFirstComponent" : '') + (this.props.isLastComponent ? ' ' + "UFILastComponent" : ''))), q = null;
            if (this.props.isLoading)
                q = h.createElement(k, {
                    className: "mls",
                    background: "light",
                    size: "small"
                });
            var r = h.createElement("a", {
                className: "UFIPagerLink",
                onClick: o,
                href: "#",
                role: "button"
            }, this.props.pagerLabel, q), s = (("fcg") + (' ' + "UFIPagerCount")), t = h.createElement("span", {
                className: s
            }, this.props.countSentence), u;
            if (this.props.contextArgs.entstream) {
                u = (h.createElement(g, {
                    direction: g.DIRECTION.right
                }, r, t));
            } else 
                u = (h.createElement(j, null, h.createElement("a", {
                    className: "UFIPagerIcon",
                    onClick: o,
                    href: "#",
                    role: "button"
                }), r, t));
            return (h.createElement("li", {
                className: p,
                "data-ft": this.props['data-ft']
            }, u));
        }
    });
    e.exports = n;
}, null);
__d("intlList", ["React", "fbt", "invariant", "keyMirror"], function(a, b, c, d, e, f, g, h, i, j) {
    'use strict';
    var k = function(m, n) {
        n = n || k.CONJUNCTIONS.AND;
        var o = m.length;
        if (o === 0) {
            return '';
        } else if (o === 1)
            return m[0];
        var p = m[o - 1], q = m[0];
        for (var r = 1; r < o - 1; ++r)
            q = h._("{previous items}, {following items}", [h.param("previous items", q), h.param("following items", m[r])]);
        return l(q, p, n);
    };
    function l(m, n, o) {
        switch (o) {
        case k.CONJUNCTIONS.AND:
            return (h._("{list of items} and {last item}", [h.param("list of items", m), h.param("last item", n)]));
        case k.CONJUNCTIONS.OR:
            return (h._("{list of items} or {last item}", [h.param("list of items", m), h.param("last item", n)]));
        case k.CONJUNCTIONS.NONE:
            return (h._("{list of items}, {last item}", [h.param("list of items", m), h.param("last item", n)]));
        default:
            i(false);
        }
    }
    k.CONJUNCTIONS = j({
        AND: null,
        NONE: null,
        OR: null
    });
    e.exports = k;
}, null);
__d("UFIPagerLabel", ["fbt", "intlList", "tx"], function(a, b, c, d, e, f, g, h, i) {
    var j = {
        VIEW_ONE: 'view_one',
        VIEW_ONE_MORE: 'view_one_more',
        VIEW_ALL: 'view_all',
        VIEW_MORE_EXPLICIT: 'view_more_explicit',
        VIEW_MORE: 'view_more',
        VIEW_PREVIOUS: 'view_previous',
        getReplyLabel: function(k, l) {
            switch (k) {
            case j.VIEW_ONE:
                return "View 1 reply";
            case j.VIEW_ONE_MORE:
                return "View 1 more reply";
            case j.VIEW_ALL:
                return i._("View all {count} replies", {
                    count: l.count
                });
            case j.VIEW_MORE_EXPLICIT:
                return i._("View {count} more replies", {
                    count: l.count
                });
            case j.VIEW_MORE:
                return "View more replies";
            case j.VIEW_PREVIOUS:
                return "View previous replies";
            default:
                return null;
            }
        },
        getCommentLabel: function(k, l) {
            if (l.commenters)
                return this.getCommentLabelWithCommentSentence(k, l);
            switch (k) {
            case j.VIEW_ONE:
                return "View 1 comment";
            case j.VIEW_ONE_MORE:
                return "View 1 more comment";
            case j.VIEW_ALL:
                return i._("View all {count} comments", {
                    count: l.count
                });
            case j.VIEW_MORE_EXPLICIT:
                return i._("View {count} more comments", {
                    count: l.count
                });
            case j.VIEW_MORE:
                return "View more comments";
            case j.VIEW_PREVIOUS:
                return "View previous comments";
            default:
                return null;
            }
        },
        getCommentLabelWithCommentSentence: function(k, l) {
            var m = h(l.commenters);
            switch (k) {
            case j.VIEW_ONE:
                return g._("View 1 comment from {names}", [g.param("names", m)]);
            case j.VIEW_ONE_MORE:
                return g._("View 1 more comment from {names}", [g.param("names", m)]);
            case j.VIEW_ALL:
                switch (l.othersCount) {
                case 0:
                    return g._("View all {count} comments from {names}", [g.param("count", l.count), g.param("names", m)]);
                case 1:
                    return g._("View all {count} comments from {names} and 1 other person", [g.param("count", l.count), g.param("names", m)]);
                default:
                    return g._("View all {count} comments from {names} and {othersCount} others", [g.param("count", l.count), g.param("names", m), g.param("othersCount", l.othersCount)]);
                }
                break;
            case j.VIEW_MORE_EXPLICIT:
            case j.VIEW_MORE:
                switch (l.othersCount) {
                case 0:
                    return g._("View more comments from {names}", [g.param("names", m)]);
                case 1:
                    return g._("View more comments from {names} and 1 other person", [g.param("names", m)]);
                default:
                    return g._("View more comments from {names} and {othersCount} others", [g.param("names", m), g.param("othersCount", l.othersCount)]);
                }
                break;
            case j.VIEW_PREVIOUS:
                switch (l.othersCount) {
                case 0:
                    return g._("View previous comments from {names}", [g.param("names", m)]);
                case 1:
                    return g._("View previous comments from {names} and 1 other person", [g.param("names", m)]);
                default:
                    return g._("View previous comments from {names} and {othersCount} others", [g.param("names", m), g.param("othersCount", l.othersCount)]);
                }
                break;
            default:
                return null;
            }
        },
        getQuestionLabel: function(k, l) {
            switch (k) {
            case j.VIEW_ONE:
                return "View 1 question";
            case j.VIEW_ONE_MORE:
                return "View 1 more question";
            case j.VIEW_ALL:
                return g._("View all {count} questions", [g.param("count", l.count)]);
            case j.VIEW_MORE_EXPLICIT:
                return g._("View {count} more questions", [g.param("count", l.count)]);
            case j.VIEW_MORE:
                return "View more questions";
            case j.VIEW_PREVIOUS:
                return "View previous questions";
            default:
                return null;
            }
        },
        getLabel: function(k, l, m, n) {
            if (l) {
                return j.getReplyLabel(k, n);
            } else if (m) {
                return j.getQuestionLabel(k, n);
            } else 
                return j.getCommentLabel(k, n);
        }
    };
    e.exports = j;
}, null);
__d("UFIReplySocialSentence.react", ["Badge.react", "LiveTimer", "React", "Timestamp.react", "UFIClassNames", "UFIConstants", "UFIImageBlock.react", "cx", "joinClasses", "tx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    var q = ' \u00b7 ', r = 43200, s = i.createClass({
        displayName: "UFIReplySocialSentence",
        propTypes: {
            authors: i.PropTypes.object.isRequired,
            'data-ft': i.PropTypes.string,
            isExpanded: i.PropTypes.bool,
            isFirstComponent: i.PropTypes.bool,
            isLastComponent: i.PropTypes.bool,
            isLoading: i.PropTypes.bool,
            onClick: i.PropTypes.func,
            orderingMode: i.PropTypes.string,
            replies: i.PropTypes.number,
            shortenTimestamp: i.PropTypes.bool,
            showVerified: i.PropTypes.bool,
            timestamp: i.PropTypes.object
        },
        render: function() {
            var t = ((this.props.isLoading ? "UFIReplySocialSentenceLoading" : '')), u = o(k.ROW, (("UFIReplySocialSentenceRow") + (this.props.isFirstComponent ? ' ' + "UFIFirstComponent" : '') + (this.props.isLastComponent ? ' ' + "UFILastComponent" : ''))), v, w;
            if (this.props.isExpanded) {
                v = this.props.replies > 1 ? p._("Hide {count} Replies", {
                    count: this.props.replies
                }) : "Hide 1 Reply";
            } else {
                v = this.props.replies > 1 ? p._("{count} Replies", {
                    count: this.props.replies
                }) : "1 Reply";
                if (this.props.timestamp) {
                    var x = h.getApproximateServerTime() / 1000 - this.props.timestamp.time;
                    if (x < r || this.props.orderingMode == l.UFICommentOrderingMode.RECENT_ACTIVITY)
                        w = i.createElement("span", {
                            className: "fcg"
                        }, q, i.createElement(j, {
                            shorten: this.props.shortenTimestamp,
                            time: this.props.timestamp.time,
                            text: this.props.timestamp.text,
                            verbose: this.props.timestamp.verbose
                        }));
                }
            }
            var y = Object.keys(this.props.authors), z = y.length&&!this.props.isExpanded, aa = null, ba;
            if (z) {
                var ca = this.props.authors[y[0]];
                aa = i.createElement("img", {
                    alt: "",
                    src: ca.thumbSrc,
                    className: k.ACTOR_IMAGE
                });
                var da = ca.name;
                if (this.props.showVerified)
                    da = [ca.name, i.createElement(g, {
                        size: "xsmall",
                        type: "verified"
                    })];
                ba = [p._("{author} replied", {
                    author: da
                }), q, v];
            } else 
                ba = v;
            var ea = null, fa = false;
            if (!z || this.props.contextArgs.feedcarded) {
                if (z)
                    fa = true;
                ea = i.createElement("i", {
                    className: ((!this.props.isExpanded ? "UFIPagerIcon" : '') + (this.props.isExpanded ? ' ' + "UFICollapseIcon" : '') + (fa ? ' ' + "UFIFeedCardedIconWithActor" : ''))
                });
            }
            return (i.createElement("li", {
                className: u,
                "data-ft": this.props['data-ft']
            }, i.createElement("a", {
                className: "UFICommentLink",
                onClick: this.props.onClick,
                href: "#",
                role: "button"
            }, i.createElement(m, null, i.createElement("div", {
                className: ((z ? "UFIReplyActorPhotoWrapper" : '') + (fa ? ' ' + "UFIFeedCardedReplyActor" : ''))
            }, ea, aa), i.createElement("span", {
                className: t
            }, i.createElement("span", {
                className: (("UFIReplySocialSentenceLinkText") + (this.props.showVerified ? ' ' + "UFIReplySocialSentenceVerified" : ''))
            }, ba), w)))));
        }
    });
    e.exports = s;
}, null);
__d("UFIShareRow.react", ["NumberFormat", "React", "UFIClassNames", "UFIImageBlock.react", "URI", "cx", "joinClasses", "tx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    var o = h.createClass({
        displayName: "UFIShareRow",
        propTypes: {
            contextArgs: h.PropTypes.object.isRequired,
            shareCount: h.PropTypes.number.isRequired,
            targetID: h.PropTypes.any.isRequired,
            isFirstComponent: h.PropTypes.bool,
            isLastComponent: h.PropTypes.bool
        },
        render: function() {
            var p = new k('/ajax/shares/view').setQueryData({
                target_fbid: this.props.targetID
            }), q = new k('/shares/view').setSubdomain('www').setQueryData({
                id: this.props.targetID
            }), r;
            if (this.props.shareCount > 1) {
                var s = g.formatIntegerWithDelimiter(this.props.shareCount, this.props.contextArgs.numberdelimiter || ',');
                r = n._("{count} shares", {
                    count: s
                });
            } else 
                r = "1 share";
            var t = m(i.ROW, (("UFIShareRow") + (this.props.isFirstComponent ? ' ' + "UFIFirstComponent" : '') + (this.props.isLastComponent ? ' ' + "UFILastComponent" : '')));
            return (h.createElement("li", {
                className: t
            }, h.createElement(j, null, h.createElement("a", {
                className: "UFIShareIcon",
                rel: "dialog",
                ajaxify: p.toString(),
                href: q.toString()
            }), h.createElement("a", {
                className: "UFIShareLink",
                rel: "dialog",
                ajaxify: p.toString(),
                href: q.toString()
            }, r))));
        }
    });
    e.exports = o;
}, null);
__d("UFISpamPlaceholder.react", ["React", "UFIClassNames", "XUISpinner.react", "fbt", "tx"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = g.createClass({
        displayName: "UFISpamPlaceholder",
        propTypes: {
            numHidden: g.PropTypes.number.isRequired,
            isLoading: g.PropTypes.bool,
            onClick: g.PropTypes.func
        },
        render: function() {
            if (this.props.isLoading)
                return (g.createElement("li", {
                    className: h.ROW
                }, g.createElement("span", {
                    className: "UFISpamCommentWrapper"
                }, g.createElement(i, {
                    className: "mls",
                    background: "light",
                    size: "small"
                }))));
            return (g.createElement("li", {
                className: h.ROW
            }, g.createElement("a", {
                href: "#",
                role: "button",
                className: "UFISpamCommentLink",
                onClick: this.props.onClick,
                "aria-label": "Show comments marked as spam"
            }, g.createElement("span", {
                "data-hover": "tooltip",
                "data-tooltip-alignh": "center",
                "aria-label": k._("{count} hidden", {
                    count: this.props.numHidden
                }),
                className: "UFISpamCommentWrapper"
            }, g.createElement("i", {
                className: "placeholderIcon"
            })))));
        }
    });
    e.exports = l;
}, null);
__d("UFI.react", ["DOMScroll", "Event", "NumberFormat", "React", "LegacyScrollableArea.react", "ScrollAwareDOM", "SearchableEntry", "TrackingNodes", "UFIAddCommentController", "UFIAddCommentLink.react", "UFIComment.react", "UFIConstants", "UFIContainer.react", "UFIInstanceState", "UFILikeSentence.react", "UFIPager.react", "UFIPagerLabel", "UFIReplySocialSentence.react", "UFIShareRow.react", "UFISpamPlaceholder.react", "Vector", "copyProperties", "getUnboundedScrollPosition", "isEmpty", "throttle", "tx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa) {
    "use strict";
    var ga = {
        TOP: 'top',
        BOTTOM: 'bottom',
        ALL: 'all'
    }, ha = j.createClass({
        displayName: "UFI",
        getInitialState: function() {
            return {
                instanceShowRepliesMap: {},
                instanceShowReplySocialSentenceMap: {},
                loadingSpamIDs: {},
                isActiveLoading: {},
                commentIDToFocusOnMount: null,
                replyComposerIDToFocusOnMount: null,
                hasPagedToplevel: false
            };
        },
        componentDidMount: function() {
            this.suppressScrolls = 0;
            this.scrollSubscription = l.subscribe('scroll', function() {
                if (this.suppressScrolls > 0) {
                    this.suppressScrolls--;
                    return false;
                }
                return true;
            }.bind(this));
            if (this.props.feedback.isqanda && this.props.feedback.infinitescroll) {
                var ia = ea(this.loadMoreComments, 20);
                this._scrollEventListener = h.listen(window, 'scroll', ia);
                this._resizeEventListener = h.listen(window, 'resize', ia);
            }
        },
        componentWillUnmount: function() {
            if (this.scrollSubscription) {
                l.unsubscribe(this.scrollSubscription);
                this.scrollSubscription = null;
            }
            if (this._scrollEventListener)
                this._scrollEventListener.remove();
            if (this._resizeEventListener)
                this._resizeEventListener.remove();
        },
        componentWillReceiveProps: function(ia) {
            var ja = ba({}, this.state.isActiveLoading), ka;
            for (ka in this.state.isActiveLoading) {
                var la = this.props.ranges[this.props.id], ma = ia.ranges[this.props.id];
                if (la.getOffset() != ma.getOffset() || la.getLength() != ma.getLength()) {
                    var na = (ma.getOffset() < la.getOffset()) ? 0: la.getLength();
                    if (na < ia.availableComments.length)
                        this.setState({
                            commentIDToFocusOnMount: ia.availableComments[na].id
                        });
                }
                delete ja[ka];
            }
            this.setState({
                isActiveLoading: ja
            });
        },
        componentDidUpdate: function(ia, ja, ka) {
            var la = this.state.replyComposerIDToFocusOnMount;
            if (this.refs && la in this.refs) {
                this.refs[la].focus();
                this.setState({
                    replyComposerIDToFocusOnMount: null
                });
            }
        },
        componentWillUpdate: function(ia, ja, ka) {
            var la, ma;
            for (la in this.state.isActiveLoading) {
                ma = this.state.isActiveLoading[la];
                if (ma !== ga.TOP)
                    this.suppressScrolls++;
            }
        },
        render: function() {
            var ia = this.props, ja = ia.feedback, ka = ia.contextArgs, la = ia.source != r.UFIFeedbackSourceType.ADS, ma=!ia.hideOrderingModeSelector && ja.orderingmodes && ia.commentCounts[ia.id] >= r.minCommentsForOrderingModeSelector, na = (!da(ja.likesentences.current) || (ja.seencount > 0&&!ka.entstream) || ma) && ka.search !== true && la, oa = null;
            if (na)
                oa = j.createElement(u, {
                    contextArgs: ka,
                    feedback: ja,
                    onTargetLikeToggle: ia.onTargetLikeToggle,
                    onOrderingModeChange: ia.onOrderingModeChange,
                    orderingMode: ia.orderingMode,
                    showOrderingModeSelector: ma
                });
            var pa = ia.availableComments && ia.availableComments.length && la, qa = null;
            if (pa)
                qa = this.renderCommentMap(ia.availableComments, ia.ranges[ia.id].getOffset());
            var ra = null, sa = ja.cancomment, ta = sa && ka.showaddcomment && ja.actorforpost && ia.canAddCommentMap[ia.id];
            if (ta) {
                ka.orderingmodes = ja.orderingmodes;
                var ua = new o(null, ia.id, null, ka), va = ia.authorProfiles[ja.actorforpost];
                ra = ua.renderAddComment(va, ja.ownerid, ja.mentionsdatasource, ja.showsendonentertip, 'toplevelcomposer', null, ja.subtitle, ja.allowphotoattachments, ja.allowstickerattachments, ja.isqanda);
            }
            var wa = null, xa = ka.showshares && ja.sharecount && la;
            if (xa&&!ka.entstream)
                wa = j.createElement(y, {
                    targetID: ja.targetfbid,
                    shareCount: ja.sharecount,
                    contextArgs: ka
                });
            var ya = na || xa || pa || sa, za = this.renderPagers();
            this.applyToUFIComponents([za.topPager], qa, [za.bottomPager], {
                isFirstCommentComponent: true
            }, {
                isLastCommentComponent: true
            });
            var ab = ja.isranked ? ra: null, bb = ja.isranked ? null: ra, cb = null;
            if (ta && ja.isranked && this.state.hasPagedToplevel)
                cb = j.createElement(p, {
                    onClick: this.onComment,
                    isQAndA: ja.isqanda
                });
            this.applyToUFIComponents([oa, wa, ab, za.topPager], qa, [za.bottomPager, bb, cb], {
                isFirstComponent: true
            }, {
                isLastComponent: true
            });
            var db = [za.topPager, qa, za.bottomPager];
            if (ka.scrollcomments && ka.scrollwidth)
                db = j.createElement("li", null, j.createElement(k, {
                    width: ka.scrollwidth
                }, j.createElement("ul", null, db)));
            return (j.createElement(s, {
                hasNub: ka.shownub && ya
            }, oa, wa, ab, db, bb, cb));
        },
        applyToUFIComponents: function(ia, ja, ka, la, ma) {
            var na = Object.keys(ja || {}).map(function(pa) {
                return ja[pa];
            }).filter(function(pa) {
                return (pa && pa.props.comment && this._shouldRenderComment(pa.props.comment));
            }.bind(this)), oa = [].concat(ia, na, ka);
            this._applyToFirstComponent(oa, la);
            oa.reverse();
            this._applyToFirstComponent(oa, ma);
        },
        _shouldRenderComment: function(ia) {
            return ia.status !== r.UFIStatus.DELETED;
        },
        _applyToFirstComponent: function(ia, ja) {
            for (var ka = 0; ka < (ia || []).length; ka++)
                if (ia[ka]) {
                    ba(ia[ka].props, ja);
                    return;
                }
        },
        renderCommentMap: function(ia, ja) {
            var ka = this.props, la = {}, ma = ia.length;
            if (!ma)
                return la;
            var na = ia[0].parentcommentid, oa = [], pa = function() {
                if (oa.length > 0) {
                    var xa = function(ya, za) {
                        this.state.loadingSpamIDs[ya[0]] = true;
                        this.forceUpdate();
                        ka.onSpamFetch(ya, za);
                    }.bind(this, oa, na);
                    la['spam' + oa[0]] = j.createElement(z, {
                        onClick: xa,
                        numHidden: oa.length,
                        isLoading: !!this.state.loadingSpamIDs[oa[0]]
                    });
                    oa = [];
                }
            }.bind(this), qa = ka.instanceid, ra = t.getKeyForInstance(qa, 'editcommentid'), sa=!!ia[0].parentcommentid;
            for (var ta = 0; ta < ma; ta++)
                if (ia[ta].status == r.UFIStatus.SPAM) {
                    oa.push(ia[ta].id);
                } else {
                    pa();
                    var ua = Math.max(ka.loggingOffset - ta - ja, 0), va = ia[ta], wa;
                    if (va.id == ra) {
                        wa = this.renderEditCommentBox(va);
                    } else {
                        wa = this.renderComment(va, ua);
                        wa.props.isFirst = ta === 0;
                        wa.props.isLast = ta === ma - 1;
                        if (!sa)
                            wa.props.showReplyLink = true;
                    }
                    la['comment' + va.id] = wa;
                    if (va.status !== r.UFIStatus.DELETED)
                        la['replies' + va.id] = this.renderReplyContainer(va);
                }
            pa();
            return la;
        },
        renderReplyContainer: function(ia) {
            var ja = this.props, ka = {};
            for (var la = 0; la < (ia.replyauthors || []).length; la++) {
                var ma = ja.authorProfiles[ia.replyauthors[la]];
                if (ma)
                    ka[ma.id] = ma;
            }
            var na = ja.repliesMap && ja.repliesMap[ia.id] && this._shouldShowCommentReplies(ia.id), oa, pa = ja.commentCounts[ia.id], qa = Math.max(pa - ia.spamreplycount, 0);
            if (qa && this._shouldShowReplySocialSentence(ia.id)) {
                var ra = this._shouldShowCommentReplies(ia.id) && (this.isLoadingPrev(ia.id) || this.isLoadingNext(ia.id));
                oa = j.createElement(x, {
                    contextArgs: ja.contextArgs,
                    authors: ka,
                    replies: qa,
                    shortenTimestamp: ja.shortenTimestamp,
                    timestamp: ia.recentreplytimestamp,
                    onClick: this.onToggleReplies.bind(this, ia),
                    isLoading: ra,
                    isExpanded: na,
                    showVerified: this.props.contextArgs.showverified && this.props.feedback.showfeaturedreplies,
                    orderingMode: this.props.orderingMode
                });
            }
            var sa, ta, ua, va;
            if (na) {
                var wa = this.renderPagers(ia.id);
                sa = wa.topPager;
                ua = wa.bottomPager;
                ta = this.renderCommentMap(ja.repliesMap[ia.id], ja.ranges[ia.id].getOffset());
                var xa = Object.keys(ta);
                for (var ya = 0; ya < xa.length; ya++) {
                    var za = ta[xa[ya]];
                    if (za)
                        za.props.hasPartialBorder = ya !== 0;
                }
                if (ia.cancomment && ja.canAddCommentMap[ia.id]) {
                    var ab = false, bb = Object.keys(ta);
                    for (var la = bb.length - 1; la >= 0; la--) {
                        var cb = bb[la];
                        if (cb && ta[cb]) {
                            ab = ta[cb].props.isAuthorReply;
                            break;
                        }
                    }
                    va = this.renderReplyComposer(ia, !ab);
                }
            }
            var db;
            if (oa || sa || ta || ua || va) {
                this.applyToUFIComponents([oa, sa], ta, [ua, va], {
                    isFirstComponent: true
                }, {
                    isLastComponent: true
                });
                var eb = ia.status === r.UFIStatus.LIVE_DELETED;
                db = j.createElement(s, {
                    isParentLiveDeleted: eb,
                    isReplyList: true
                }, oa, sa, ta, ua, va);
            }
            return db;
        },
        renderReplyComposer: function(ia, ja) {
            var ka = this.props;
            return (new o(null, ka.id, ia.id, ka.contextArgs)).renderAddComment(ka.authorProfiles[ka.feedback.actorforpost], ka.feedback.ownerid, ka.feedback.mentionsdatasource, false, 'replycomposer-' + ia.id, ja, ka.feedback.subtitle, ka.feedback.allowphotoattachments, ka.feedback.allowstickerattachments, ka.feedback.isqanda);
        },
        renderEditCommentBox: function(ia) {
            var ja = new o(null, this.props.id, null, {
                mentionsinput: this.props.contextArgs.mentionsinput
            }), ka = ja.renderEditComment(this.props.authorProfiles[this.props.feedback.actorforpost], this.props.feedback.ownerid, ia.id, this.props.feedback.mentionsdatasource, this.props.onEditAttempt.bind(null, ia), this.props.onCancelEdit, this.props.feedback.allowphotoattachments, this.props.feedback.allowstickerattachments, this.props.feedback.isqanda);
            return ka;
        },
        _shouldShowCommentReplies: function(ia) {
            if (ia in this.state.instanceShowRepliesMap) {
                return this.state.instanceShowRepliesMap[ia];
            } else if (ia in this.props.showRepliesMap)
                return this.props.showRepliesMap[ia];
            return false;
        },
        _shouldShowReplySocialSentence: function(ia) {
            if (ia in this.state.instanceShowReplySocialSentenceMap) {
                return this.state.instanceShowReplySocialSentenceMap[ia];
            } else if (ia in this.props.showReplySocialSentenceMap)
                return this.props.showReplySocialSentenceMap[ia];
            return false;
        },
        renderComment: function(ia, ja) {
            var ka = this.props, la = ka.feedback, ma = la.actorforpost === ia.author, na = t.getKeyForInstance(this.props.instanceid, 'locallycomposed'), oa = ia.islocal || na && na[ia.id], pa = la.showremovemenu || (la.viewerid === ia.author), qa = la.canremoveall && la.isownerpage&&!ma, ra = ka.source != r.UFIFeedbackSourceType.INTERN, sa = n.getTrackingInfo(n.types.COMMENT, ja), ta=!!ia.parentcommentid, ua = this._shouldShowCommentReplies(ia.id), va=!!ia.isfeatured;
            return (j.createElement(q, {
                comment: ia,
                authorProfiles: this.props.authorProfiles,
                viewerIsAuthor: ma,
                feedback: la,
                "data-ft": sa,
                contextArgs: this.props.contextArgs,
                hideAsSpamForPageAdmin: qa,
                isLocallyComposed: oa,
                isReply: ta,
                isFeatured: va,
                permalink: ka.commentPermalinks[ia.id],
                shortenTimestamp: ka.shortenTimestamp,
                showPermalink: ra,
                showRemoveReportMenu: pa,
                showReplies: ua,
                focusOnMount: ia.id === this.state.commentIDToFocusOnMount,
                onAlsoRecommendToggle: ka.onAlsoRecommendToggle.bind(null, ia),
                onCommentLikeToggle: ka.onCommentLikeToggle.bind(null, ia),
                onCommentReply: this.onCommentReply.bind(this, ia),
                onCommentTranslate: ka.onCommentTranslate.bind(null, ia),
                onEdit: ka.onCommentEdit.bind(null, ia),
                onHideAsSpam: ka.onCommentHideAsSpam.bind(null, ia),
                onInlineBan: ka.onCommentInlineBan.bind(null, ia),
                onMarkAsNotSpam: ka.onCommentMarkAsNotSpam.bind(null, ia),
                onPreviewRemove: ka.onPreviewRemove.bind(null, ia),
                onRemove: ka.onCommentRemove.bind(null, ia),
                onRetrySubmit: ka.onRetrySubmit.bind(null, ia),
                onUndoInlineBan: ka.onCommentUndoInlineBan.bind(null, ia),
                storyInsert: this.props.storyInsert
            }));
        },
        _updateRepliesState: function(ia, ja, ka) {
            var la = this.state.instanceShowRepliesMap;
            la[ia] = ja;
            var ma = this.state.instanceShowReplySocialSentenceMap;
            ma[ia] = ka;
            this.setState({
                instanceShowRepliesMap: la,
                instanceShowReplySocialSentenceMap: ma,
                replyComposerIDToFocusOnMount: ja ? 'replycomposer-' + ia: null
            });
        },
        onToggleReplies: function(ia) {
            var ja=!this._shouldShowCommentReplies(ia.id), ka = this.props.commentCounts[ia.id], la = this._shouldShowReplySocialSentence(ia.id)&&!(ja && ka <= this.props.replySocialSentenceMaxReplies);
            this._updateRepliesState(ia.id, ja, la);
            var ma = this.props.ranges[ia.id].getRequestedLength();
            ma -= this.props.deletedCounts[ia.id];
            if (ja && ma === 0) {
                var na = this.props.commentCounts[ia.id], oa = Math.min(na, this.props.pageSize);
                this.onPage(ia.id, ga.BOTTOM, {
                    offset: na - oa,
                    length: oa
                });
            }
        },
        onPage: function(ia, ja, ka) {
            var la = this.state.hasPagedToplevel || ia === this.props.id, ma = ba({}, this.state.isActiveLoading);
            ma[ia] = ja;
            this.setState({
                isActiveLoading: ma,
                hasPagedToplevel: la
            });
            this.props.onChangeRange(ia, ka);
        },
        isLoadingPrev: function(ia) {
            var ja = this.props;
            ia = ia || ja.id;
            var ka = ja.ranges[ia].getRequestedOffset(), la = ja.ranges[ia].getOffset();
            return ka < la;
        },
        isLoadingNext: function(ia) {
            var ja = this.props;
            ia = ia || ja.id;
            var ka = ja.ranges[ia].getRequestedOffset(), la = ja.ranges[ia].getRequestedLength(), ma = ja.ranges[ia].getOffset(), na = ja.ranges[ia].getLength();
            return ka + la > ma + na;
        },
        renderPagers: function(ia) {
            var ja = this.props;
            ia = ia || ja.id;
            var ka = ja.ranges[ia].getOffset(), la = ja.ranges[ia].getLength(), ma = ja.deletedCounts[ia], na = ja.commentCounts[ia], oa = na - ma, pa = la - ma, qa = ja.contextArgs.numberdelimiter || ',', ra = ia !== ja.id, sa = {
                topPager: null,
                bottomPager: null
            };
            if (ja.source == r.UFIFeedbackSourceType.ADS)
                return sa;
            var ta = this.isLoadingPrev(ia), ua = this.isLoadingNext(ia);
            if (la == na)
                return sa;
            var va = {}, wa = ja.feedback.commentsentenceinfo;
            if (wa) {
                va.commenters = wa.explicit_commenter_names;
                va.othersCount = wa.other_commenter_count;
            }
            var xa = (ka + la) == na;
            if ((na < ja.pageSize && xa) || pa === 0) {
                var ya = Math.min(na, ja.pageSize), za = this.onPage.bind(this, ia, ja.feedback.isranked&&!ra ? ga.BOTTOM : ga.TOP, {
                    offset: na - ya,
                    length: ya
                }), ab, bb;
                if (pa === 0) {
                    if (oa == 1) {
                        ab = w.VIEW_ONE;
                    } else {
                        bb = i.formatIntegerWithDelimiter(oa, qa);
                        ab = w.VIEW_ALL;
                    }
                } else if (oa - pa == 1) {
                    ab = w.VIEW_ONE_MORE;
                } else {
                    ab = w.VIEW_MORE_EXPLICIT;
                    bb = i.formatIntegerWithDelimiter(oa - pa, qa);
                }
                var cb = n.getTrackingInfo(n.types.VIEW_ALL_COMMENTS);
                va.count = bb;
                var db = w.getLabel(ab, ra, ja.feedback.isqanda, va), eb = ja.feedback.isranked&&!ra, fb = j.createElement(v, {
                    key: "allPager",
                    ref: eb ? "bottomPager": "topPager",
                    contextArgs: ja.contextArgs,
                    isUnseen: ja.feedback.hasunseencollapsed,
                    isLoading: ta,
                    pagerLabel: db,
                    onPagerClick: za,
                    "data-ft": cb
                });
                if (eb) {
                    sa.bottomPager = fb;
                } else 
                    sa.topPager = fb;
                return sa;
            }
            var gb = w.getLabel(w.VIEW_MORE, ra, ja.feedback.isqanda, va), hb = w.getLabel(w.VIEW_PREVIOUS, ra, ja.feedback.isqanda, va);
            if (ka > 0) {
                var ib = Math.max(ka - ja.pageSize, 0), ya = ka + la - ib, jb = i.formatIntegerWithDelimiter(pa, qa), kb = i.formatIntegerWithDelimiter(oa, qa), lb = fa._("{countshown} of {totalcount}", {
                    countshown: jb,
                    totalcount: kb
                }), mb;
                if (ja.feedback.isranked&&!ra) {
                    mb = this.onPage.bind(this, ia, ga.BOTTOM, {
                        offset: ib,
                        length: ya
                    });
                    sa.bottomPager = j.createElement(v, {
                        key: "bottomPager",
                        ref: "bottomPager",
                        contextArgs: ja.contextArgs,
                        isLoading: ta,
                        pagerLabel: gb,
                        onPagerClick: mb,
                        countSentence: lb
                    });
                } else {
                    mb = this.onPage.bind(this, ia, ga.TOP, {
                        offset: ib,
                        length: ya
                    });
                    sa.topPager = j.createElement(v, {
                        key: "topPager",
                        ref: "topPager",
                        contextArgs: ja.contextArgs,
                        isLoading: ta,
                        pagerLabel: hb,
                        onPagerClick: mb,
                        countSentence: lb
                    });
                }
            }
            if (ka + la < na) {
                var nb = Math.min(la + ja.pageSize, na - ka), ob;
                if (ja.feedback.isranked&&!ra) {
                    ob = this.onPage.bind(this, ia, ga.TOP, {
                        offset: ka,
                        length: nb
                    });
                    sa.topPager = j.createElement(v, {
                        key: "topPager",
                        ref: "topPager",
                        contextArgs: ja.contextArgs,
                        isLoading: ua,
                        pagerLabel: hb,
                        onPagerClick: ob
                    });
                } else {
                    ob = this.onPage.bind(this, ia, ga.BOTTOM, {
                        offset: ka,
                        length: nb
                    });
                    sa.bottomPager = j.createElement(v, {
                        key: "bottomPager",
                        ref: "bottomPager",
                        contextArgs: ja.contextArgs,
                        isLoading: ua,
                        pagerLabel: gb,
                        onPagerClick: ob
                    });
                }
            }
            return sa;
        },
        loadMoreComments: function() {
            if (this.scrollSubscription && this.refs.bottomPager&&!(this.props.id in this.state.isActiveLoading)) {
                var ia = this.refs.bottomPager.getDOMNode(), ja = ca(window).y, ka = ja + document.documentElement.clientHeight + r.infiniteScrollRangeForQANDAPermalinks;
                if (ia.offsetHeight && ia.offsetTop < ka)
                    this.refs.bottomPager.props.onPagerClick();
            }
        },
        _scrollToAddComment: function() {
            if (this.refs.toplevelcomposer) {
                var ia = this.refs.toplevelcomposer.getDOMNode(), ja = 80, ka = ia.getBoundingClientRect().top;
                if (ka < ja || ka > aa.getViewportDimensions().y - ja)
                    g.scrollTo(ia, true, false, ja);
            }
        },
        onCommentReply: function(ia) {
            var ja = ia.parentcommentid || ia.id;
            if (this.props.feedback.isthreaded && ia.cancomment) {
                if (!this._shouldShowCommentReplies(ja)) {
                    this.onToggleReplies(ia);
                } else if (this.refs && this.refs['replycomposer-' + ja])
                    this.refs['replycomposer-' + ja].focus();
            } else if (this.props.contextArgs.simplereply && ia.author && this.refs.toplevelcomposer && this.refs.toplevelcomposer.insertMention) {
                var ka = this.props.authorProfiles[ia.author].type, la = new m({
                    uniqueID: ia.author,
                    title: this.props.authorProfiles[ia.author].name,
                    type: ka === 'friend' ? 'user': ka
                });
                this.refs.toplevelcomposer.insertMention(la);
                this._scrollToAddComment();
            }
        },
        onComment: function() {
            if (this.refs && this.refs.toplevelcomposer) {
                this.refs.toplevelcomposer.focus();
                var ia = this.refs.toplevelcomposer.getDOMNode(), ja = 60;
                if (ia.getBoundingClientRect().top < ja)
                    g.scrollTo(ia, true, true);
            }
        }
    });
    e.exports = ha;
}, null);
__d("UFIFeaturedReplyCommentList", ["UFIReplyCommentList"], function(a, b, c, d, e, f, g) {
    "use strict";
    for (var h in g)
        if (g.hasOwnProperty(h))
            j[h] = g[h];
    var i = g === null ? null: g.prototype;
    j.prototype = Object.create(i);
    j.prototype.constructor = j;
    j.__superConstructor__ = g;
    j.getCommentList = function(k, l) {};
    function j(k, l, m, n) {
        g.call(this, k, l);
        var o = 0, p = m.length;
        this.updateCommentCount(p);
        this.addCommentIDs(o, p, m);
        var q = {};
        n.forEach(function(r) {
            q[r.id] = r;
        });
        m.forEach(function(r) {
            var s = q[r];
            this.addComment(s.id, s.clientid, s.legacyid);
        }.bind(this));
    }
    j.prototype.fetchComments = function(k, l, m) {};
    e.exports = j;
}, null);
__d("UFIFeaturedToplevelCommentList", ["UFIConstants", "UFIToplevelCommentList"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    for (var i in h)
        if (h.hasOwnProperty(i))
            k[i] = h[i];
    var j = h === null ? null: h.prototype;
    k.prototype = Object.create(j);
    k.prototype.constructor = k;
    k.__superConstructor__ = h;
    k.getCommentList = function(l, m) {};
    k.getCommentListsForFeedbackTargetID = function(l) {};
    k.getCommentListForFeedbackTargetID_UNSAFE = function(l) {};
    k.resetCommentListsForFeedbackTargetID = function(l) {};
    function k(l, m, n) {
        h.call(this, l, g.UFICommentOrderingMode.FEATURED);
        var o = 0, p = m.length;
        this.updateCommentCount(p);
        this.addCommentIDs(o, p, m);
        var q = {};
        n.forEach(function(r) {
            q[r.id] = r;
        });
        m.forEach(function(r) {
            var s = q[r];
            this.addComment(s.id, s.clientid, s.legacyid);
        }.bind(this));
    }
    k.prototype.fetchComments = function(l, m, n) {};
    e.exports = k;
}, null);
__d("UFIRange", [], function(a, b, c, d, e, f) {
    "use strict";
    function g(h, i) {
        this.offset = h || 0;
        this.length = i || 0;
        this.requestedOffset = this.offset;
        this.requestedLength = this.length;
    }
    g.prototype.getOffset = function() {
        return this.offset;
    };
    g.prototype.getLength = function() {
        return this.length;
    };
    g.prototype.updateRange = function(h, i) {
        this.offset = h;
        this.length = i;
        if (this.requestedLength > 0) {
            var j = Math.min(this.offset, this.requestedOffset), k = Math.max(this.offset + this.length, this.requestedOffset + this.requestedLength);
            this.requestedOffset = j;
            this.requestedLength = k - j;
        } else {
            this.requestedOffset = this.offset;
            this.requestedLength = this.length;
        }
    };
    g.prototype.getRequestedOffset = function() {
        return this.requestedOffset;
    };
    g.prototype.getRequestedLength = function() {
        return this.requestedLength;
    };
    g.prototype.updateRequestedRange = function(h, i) {
        this.requestedOffset = h;
        this.requestedLength = i;
    };
    e.exports = g;
}, null);
__d("UFIController", ["Arbiter", "Bootloader", "CSS", "DOM", "LayerRemoveOnHide", "LiveTimer", "Parent", "React", "ReactMount", "ShortProfiles", "UFI.react", "UFIActionLinkController", "UFICentralUpdates", "UFIFeaturedReplyCommentList", "UFIFeaturedToplevelCommentList", "UFICommentTemplates", "UFIConstants", "UFIFeedbackTargets", "UFIInstanceState", "UFIRange", "UFIReplyCommentList", "UFIToplevelCommentList", "UFIUserActions", "URI", "isEmpty", "onEnclosingPageletDestroy", "tx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa, ga) {
    "use strict";
    var ha = function(la, ma, na, oa, pa) {
        var qa = la + ma === na;
        return {
            offset: la,
            length: (qa && ia(pa)) ? oa - la: ma
        };
    }, ia = function(la) {
        return la == w.UFIPayloadSourceType.USER_ACTION || la == w.UFIPayloadSourceType.LIVE_SEND;
    }, ja = function(la, ma) {
        for (var na = 0; na < ma.length; na++) {
            var oa = ma[na];
            if (oa.author)
                la.push(oa.author);
            if (oa.socialcontext)
                la.push(oa.socialcontext.topmutualid);
            if (oa.replyauthors && oa.replyauthors.length)
                for (var pa = 0; pa < oa.replyauthors.length; pa++)
                    la.push(oa.replyauthors[pa]);
        }
    };
    function ka(la, ma, na) {
        this.root = la;
        this.id = ma.ftentidentifier;
        this.source = ma.source;
        this.$UFIController0 = ma.instanceid;
        this.featuredToplevelCommentList = null;
        this.featuredReplyCommentLists = {};
        this.$UFIController1 = ma;
        this.$UFIController1.rootid = this.root.id;
        this.$UFIController2 = false;
        this.storyInsert = ma.storyInsert;
        var oa = na.feedbacktargets[0];
        this.actionLink = new r(la, this.$UFIController1, oa);
        this.orderingMode = oa.defaultcommentorderingmode;
        var pa = null;
        if (na.featuredcommentlists && na.featuredcommentlists.comments && na.featuredcommentlists.comments[this.id]) {
            pa = na.featuredcommentlists.comments[this.id];
            this.featuredToplevelCommentList = new u(this.id, pa.values, na.comments);
        } else 
            pa = na.commentlists.comments[this.id][this.orderingMode];
        this.ranges = {};
        this.replyRanges = {};
        this.repliesMap = {};
        this.showRepliesMap = {};
        this.showReplySocialSentenceMap = {};
        this.shortenTimestamp = ma.shortenTimestamp;
        this.commentcounts = {};
        this.commentcounts[this.id] = this.getToplevelCommentList().getCommentCount();
        var qa = oa.orderingmodes || [{
            value: this.orderingMode
        }
        ];
        qa.forEach(function(ua) {
            this.ranges[ua.value] = new z(pa.range.offset, pa.range.length);
        }.bind(this));
        var ra, sa, ta;
        if (na.commentlists.replies)
            for (ra = 0; ra < pa.values.length; ra++) {
                sa = pa.values[ra];
                ta = na.commentlists.replies[sa];
                if (ta) {
                    this.commentcounts[sa] = this.getReplyCommentList(sa).getCommentCount();
                    this.getReplyRange(sa).updateRange(ta.range.offset, ta.range.length);
                }
            }
        if (na.featuredcommentlists)
            if (na.featuredcommentlists.replies)
                for (ra = 0; ra < pa.values.length; ra++) {
                    sa = pa.values[ra];
                    ta = na.featuredcommentlists.replies[sa];
                    if (ta) {
                        this.featuredReplyCommentLists[sa] = new t(this.id, sa, ta.values, na.comments);
                        this.commentcounts[sa] = this.getReplyCommentList(sa).getCommentCount();
                        this.getReplyRange(sa).updateRange(ta.range.offset, ta.range.length);
                    }
                }
        this.$UFIController3 = null;
        this.$UFIController4 = null;
        this.ufiCentralUpdatesSubscriptions = [s.subscribe('feedback-updated', function(ua, va) {
            var wa = va.updates, xa = va.payloadSource;
            if (xa != w.UFIPayloadSourceType.COLLAPSED_UFI && this.id in wa)
                this.fetchAndUpdate(this.render.bind(this), xa);
        }.bind(this)), s.subscribe('feedback-id-changed', function(ua, va) {
            var wa = va.updates;
            if (this.id in wa)
                this.id = wa[this.id];
        }.bind(this)), s.subscribe('instance-updated', function(ua, va) {
            var wa = va.updates;
            if (this.$UFIController0 in wa) {
                var xa = wa[this.$UFIController0];
                if (xa.editcommentid)
                    this.render(va.payloadSource);
            }
        }.bind(this))];
        this.clearPageletSubscription = fa(this.root, this.$UFIController6.bind(this));
        this.clearPageSubscription = g.subscribe('ufi/page_cleared', this.$UFIController7.bind(this));
        s.handleUpdate(w.UFIPayloadSourceType.INITIAL_SERVER, na);
        if (this.$UFIController1.viewas)
            this.viewasUFICleanSubscription = g.subscribe('pre_page_transition', function(ua, va) {
                if (this.$UFIController1.viewas !== da(va.to).getQueryData('viewas'))
                    ba.resetCommentListsForFeedbackTargetID(this.id);
                }.bind(this));
        h.loadModules(["ScrollAwareDOM"], function(ua) {
            o.scrollMonitor = ua.monitor;
        });
        if (ma.notifyonload)
            g.inform('inlineStory/ufiLoaded');
        g.inform('notifStory/ufiLoaded');
    }
    ka.prototype.$UFIController8 = function() {
        if (!this.$UFIController9)
            this.$UFIController9 = m.byTag(this.root, 'form');
        return this.$UFIController9;
    };
    ka.prototype.$UFIControllera = function(event) {
        var la=!this.feedback.hasviewerliked;
        ca.changeLike(this.id, la, {
            source: this.source,
            target: event.target,
            rootid: this.$UFIController1.rootid
        });
        event.preventDefault();
    };
    ka.prototype.$UFIControllerb = function(la, event) {
        var ma=!la.hasviewerliked;
        ca.changeCommentLike(la.id, ma, {
            source: this.source,
            target: event.target
        });
    };
    ka.prototype.$UFIControllerc = function(la, event) {
        ca.changeAlsoRecommend(la, !la.hasviewerrecommended);
    };
    ka.prototype.$UFIControllerd = function(la) {
        y.updateState(this.$UFIController0, 'isediting', true);
        y.updateState(this.$UFIController0, 'editcommentid', la.id);
    };
    ka.prototype.$UFIControllere = function(la, ma, event) {
        if (!ma.visibleValue&&!ma.attachedPhoto&&!ma.attachedSticker) {
            this.$UFIControllerf(la, event);
        } else 
            ca.editComment(la.id, ma.visibleValue, ma.encodedValue, {
                source: this.$UFIController1.source,
                target: event.target,
                attachedPhoto: ma.attachedPhoto,
                attachedSticker: ma.attachedSticker
            });
        y.updateStateField(this.$UFIController0, 'locallycomposed', la.id, true);
        this.$UFIControllerg();
    };
    ka.prototype.$UFIControllerg = function() {
        y.updateState(this.$UFIController0, 'isediting', false);
        y.updateState(this.$UFIController0, 'editcommentid', null);
    };
    ka.prototype.$UFIControllerf = function(la, event, ma) {
        this.$UFIControllerh(la, false, event, ma);
    };
    ka.prototype.$UFIControllerh = function(la, ma, event, na) {
        var oa = v[':fb:ufi:hide-dialog-template'].build();
        j.setContent(oa.getNode('body'), "Are you sure you want to delete this comment?");
        j.setContent(oa.getNode('title'), "Delete Comment");
        h.loadModules(["DialogX"], function(pa) {
            var qa = new pa({
                modal: true,
                width: 465,
                addedBehaviors: [k]
            }, oa.getRoot());
            qa.subscribe('confirm', function() {
                ca.removeComment(la.id, {
                    source: this.source,
                    oneclick: ma,
                    target: event.target,
                    timelinelogdata: this.$UFIController1.timelinelogdata
                });
                if (na)
                    na.setState({
                        isInlinePageDeleted: true
                    });
                qa.hide();
            }.bind(this));
            qa.show();
        }.bind(this));
    };
    ka.prototype.$UFIControlleri = function(la, event) {
        ca.setHideAsSpam(la.id, true, {
            source: this.source,
            target: event.target
        });
    };
    ka.prototype.$UFIControllerj = function(la, event) {
        ca.setHideAsSpam(la.id, false, {
            source: this.source,
            target: event.target
        });
    };
    ka.prototype.$UFIControllerk = function(la, event) {
        ca.translateComment(la, {
            source: this.source,
            target: event.target
        });
    };
    ka.prototype.$UFIControllerl = function(la, ma, event) {
        ca.banUser(la, this.feedback.ownerid, ma, {
            source: this.source,
            target: event.target
        });
    };
    ka.prototype.$UFIControllerm = function(la, event) {
        this.$UFIControllerl(la, true, event);
    };
    ka.prototype.$UFIControllern = function(la, event) {
        this.$UFIControllerl(la, false, event);
    };
    ka.prototype.$UFIControllero = function(la, ma) {
        ca.fetchSpamComments(this.id, la, ma, this.$UFIController1.viewas);
    };
    ka.prototype.$UFIControllerp = function(la, event) {
        ca.removePreview(la, {
            source: this.source,
            target: event.target
        });
    };
    ka.prototype.$UFIControllerq = function(la) {
        h.loadModules(["UFIRetryActions"], function(ma) {
            ma.retrySubmit(la, {
                source: this.source
            });
        }.bind(this));
    };
    ka.prototype.$UFIControllerr = function() {
        if (this.$UFIController2)
            return;
        var la = m.byTag(this.root, 'form');
        if (la) {
            i.removeClass(la, 'collapsed_comments');
            this.$UFIController2 = true;
        }
    };
    ka.prototype.setRange = function(la) {
        this.getRange().updateRange(la.offset, la.length);
    };
    ka.prototype.setReplyRange = function(la, ma) {
        this.getReplyRange(la).updateRange(ma.offset, ma.length);
    };
    ka.prototype.render = function(la) {
        var ma = this.comments.length ||!ea(this.feedback.likesentences.current);
        if (ma && ia(la))
            this.$UFIControllerr();
        var na = this.getRange();
        if (this.$UFIController3 === null)
            this.$UFIController3 = na.getOffset() + na.getLength() - 1;
        var oa = this.feedback.replysocialsentencemaxreplies||-1, pa = {};
        pa[this.id] = this.getToplevelCommentList().getDeletedCount();
        var qa = {}, ra = {};
        ra[this.id]=!this.featuredToplevelCommentList;
        this.comments.forEach(function(wa) {
            var xa = wa.id;
            pa[xa] = this.getReplyCommentList(xa).getDeletedCount();
            qa[xa] = this.getToplevelCommentList().getPermalinkForComment(xa);
            ra[xa]=!this.featuredReplyCommentLists[xa];
            if (this.repliesMap[xa])
                this.repliesMap[xa].forEach(function(ya) {
                    var za = ya.id;
                    qa[za] = aa.getCommentList(this.id, xa).getPermalinkForComment(za);
                }.bind(this));
        }.bind(this));
        var sa = {};
        sa[this.id] = na;
        for (var ta in this.replyRanges)
            sa[ta] = this.replyRanges[ta];
        var ua=!!this.featuredToplevelCommentList, va = n.createElement(q, {
            feedback: this.feedback,
            id: this.id,
            storyInsert: this.storyInsert,
            onTargetLikeToggle: this.$UFIControllera.bind(this),
            onAlsoRecommendToggle: this.$UFIControllerc.bind(this),
            onCommentLikeToggle: this.$UFIControllerb.bind(this),
            onCommentRemove: this.$UFIControllerf.bind(this),
            onCommentHideAsSpam: this.$UFIControlleri.bind(this),
            onCommentMarkAsNotSpam: this.$UFIControllerj.bind(this),
            onCommentEdit: this.$UFIControllerd.bind(this),
            onCommentTranslate: this.$UFIControllerk.bind(this),
            onCommentInlineBan: this.$UFIControllerm.bind(this),
            onCommentUndoInlineBan: this.$UFIControllern.bind(this),
            onEditAttempt: this.$UFIControllere.bind(this),
            onCancelEdit: this.$UFIControllerg.bind(this),
            onChangeRange: this.$UFIControllers.bind(this),
            onSpamFetch: this.$UFIControllero.bind(this),
            onPreviewRemove: this.$UFIControllerp.bind(this),
            onRetrySubmit: this.$UFIControllerq.bind(this),
            onOrderingModeChange: this.$UFIControllert.bind(this),
            contextArgs: this.$UFIController1,
            repliesMap: this.repliesMap,
            showRepliesMap: this.showRepliesMap,
            showReplySocialSentenceMap: this.showReplySocialSentenceMap,
            shortenTimestamp: this.shortenTimestamp,
            commentCounts: this.commentcounts,
            deletedCounts: pa,
            availableComments: this.comments,
            source: this.source,
            ranges: sa,
            pageSize: w.defaultPageSize,
            authorProfiles: this.authorProfiles,
            instanceid: this.$UFIController0,
            loggingOffset: this.$UFIController3,
            replySocialSentenceMaxReplies: oa,
            orderingMode: this.orderingMode,
            hideOrderingModeSelector: ua,
            commentPermalinks: qa,
            canAddCommentMap: ra
        });
        this.$UFIController4 = n.render(va, this.root);
        l.updateTimeStamps();
        if (this.$UFIController8())
            g.inform('ufi/changed', {
                form: this.$UFIController8()
            });
        if (la != w.UFIPayloadSourceType.INITIAL_SERVER && la != w.UFIPayloadSourceType.COLLAPSED_UFI)
            g.inform('reflow');
    };
    ka.prototype.deferredCallback = function(la, ma, na, oa) {
        la.callbackCount++;
        if (la.callbackCount < la.expectedCallbackCount)
            return;
        p.getMulti(ma, function(pa) {
            this.authorProfiles = pa;
            oa(na);
            if (na == w.UFIPayloadSourceType.ENDPOINT_COMMENT_FETCH)
                g.inform('CommentUFI.Pager');
        }.bind(this));
    };
    ka.prototype.fetchAndUpdate = function(la, ma) {
        x.getFeedbackTarget(this.id, function(na) {
            this.feedback = na;
            var oa = this.getToplevelCommentList(this.orderingMode).getCommentCount(), pa = this.getRange(), qa = ha(pa.getRequestedOffset(), pa.getRequestedLength(), this.commentcounts[this.id], oa, ma), ra = [];
            if (this.feedback.actorforpost)
                ra.push(this.feedback.actorforpost);
            var sa = {
                expectedCallbackCount: 0,
                callbackCount: 0
            }, ta = qa.offset, ua = qa.length, va;
            if (this.$UFIController1.viewas)
                va = this.$UFIController1.viewas + '';
            this.getToplevelCommentList().getComments(ta, ua, va, function(wa, xa, ya) {
                this.commentcounts[this.id] = xa;
                this.setRange(wa);
                this.comments = [];
                for (var za in ya)
                    this.comments.push(ya[za]);
                ja(ra, this.comments);
                if (this.feedback.isthreaded && this.comments.length) {
                    sa.expectedCallbackCount = this.comments.length;
                } else 
                    sa.expectedCallbackCount = 1;
                for (var ab in ya) {
                    var bb = ya[ab], cb = bb.id;
                    if (this.feedback.isthreaded) {
                        var db = this.getReplyCommentList(cb).getCommentCount(), eb;
                        if (this.replyRanges[cb]) {
                            var fb = this.getReplyRange(cb);
                            eb = ha(fb.getRequestedOffset(), fb.getRequestedLength(), this.commentcounts[cb], db, ma);
                        } else 
                            eb = {
                                offset: 0,
                                length: Math.min(db, 2)
                            };
                        var gb = eb.offset, hb = eb.length;
                        this.getReplyCommentList(cb).getComments(gb, hb, null, function(ib, jb, kb, lb) {
                            this.commentcounts[ib] = kb;
                            this.setReplyRange(ib, jb);
                            this.repliesMap[ib] = [];
                            for (var mb in lb)
                                this.repliesMap[ib].push(lb[mb]);
                            ja(ra, this.repliesMap[ib]);
                            this.showRepliesMap[ib] = jb.length > 0;
                            if (this.showReplySocialSentenceMap[ib] === undefined && this.commentcounts[ib] > 0)
                                this.showReplySocialSentenceMap[ib]=!this.showRepliesMap[ib];
                            this.deferredCallback(sa, ra, ma, la);
                        }.bind(this, cb, eb, db));
                    }
                }
                if (!this.feedback.isthreaded ||!this.comments.length)
                    this.deferredCallback(sa, ra, ma, la);
            }.bind(this, qa, oa));
        }.bind(this));
    };
    ka.prototype.getToplevelCommentList = function() {
        if (this.featuredToplevelCommentList)
            return this.featuredToplevelCommentList;
        return ba.getCommentList(this.id, this.orderingMode);
    };
    ka.prototype.getReplyCommentList = function(la) {
        if (la in this.featuredReplyCommentLists)
            return this.featuredReplyCommentLists[la];
        return aa.getCommentList(this.id, la);
    };
    ka.prototype.getRange = function() {
        if (!(this.orderingMode in this.ranges))
            this.ranges[this.orderingMode] = new z();
        return this.ranges[this.orderingMode];
    };
    ka.prototype.getReplyRange = function(la) {
        if (!(la in this.replyRanges))
            this.replyRanges[la] = new z();
        return this.replyRanges[la];
    };
    ka.prototype.$UFIControllers = function(la, ma) {
        if (la == this.id) {
            this.getRange().updateRequestedRange(ma.offset, ma.length);
        } else 
            this.replyRanges[la].updateRequestedRange(ma.offset, ma.length);
        this.fetchAndUpdate(this.render.bind(this), w.UFIPayloadSourceType.USER_ACTION);
    };
    ka.prototype.$UFIController6 = function() {
        n.unmountComponentAtNode(this.root);
        this.ufiCentralUpdatesSubscriptions.forEach(s.unsubscribe.bind(s));
        g.unsubscribe(this.clearPageSubscription);
        this.viewasUFICleanSubscription && g.unsubscribe(this.viewasUFICleanSubscription);
    };
    ka.prototype.$UFIController7 = function() {
        this.$UFIController6();
        g.unsubscribe(this.clearPageletSubscription);
    };
    ka.prototype.$UFIControllert = function(la) {
        this.orderingMode = la;
        this.fetchAndUpdate(this.render.bind(this), w.UFIPayloadSourceType.USER_ACTION);
    };
    e.exports = ka;
}, null);
__d("immutable", [], function(a, b, c, d, e, f) {
    function g() {
        var h = Object;
        function i(vh, wh, xh, yh) {
            var zh;
            if (yh) {
                var ai = yh.prototype;
                zh = h.create(ai);
            } else 
                zh = vh.prototype;
            h.keys(wh).forEach(function(bi) {
                zh[bi] = wh[bi];
            });
            h.keys(xh).forEach(function(bi) {
                vh[bi] = xh[bi];
            });
            zh.constructor = vh;
            vh.prototype = zh;
            return vh;
        }
        function j(vh, wh, xh, yh) {
            return h.getPrototypeOf(wh)[xh].apply(vh, yh);
        }
        function k(vh, wh, xh) {
            j(vh, wh, 'constructor', xh);
        }
        var l = {};
        l.createClass = i;
        l.superCall = j;
        l.defaultSuperCall = k;
        "use strict";
        function m(vh, wh) {
            if (vh === wh)
                return vh !== 0 || wh !== 0 || 1 / vh === 1 / wh;
            if (vh !== vh)
                return wh !== wh;
            if (vh && typeof vh.equals === 'function')
                return vh.equals(wh);
            return false;
        }
        function n(vh, wh) {
            if (!vh)
                throw new Error(wh);
        }
        var o = 'delete', p = 5, q = 1<<p, r = q - 1, s = {}, t = {
            value: false
        }, u = {
            value: false
        };
        function v(vh) {
            vh.value = false;
            return vh;
        }
        function w(vh) {
            vh && (vh.value = true);
        }
        function x() {}
        function y(vh, wh) {
            wh = wh || 0;
            var xh = Math.max(0, vh.length - wh), yh = new Array(xh);
            for (var zh = 0; zh < xh; zh++)
                yh[zh] = vh[zh + wh];
            return yh;
        }
        function z(vh) {
            n(vh !== Infinity);
        }
        function aa(vh) {
            if (vh.size === undefined)
                vh.size = vh.__iterate(ca);
            return vh.size;
        }
        function ba(vh, wh) {
            return wh >= 0 ? wh : aa(vh) + wh;
        }
        function ca() {
            return true;
        }
        function da(vh, wh, xh) {
            return (vh === 0 || (xh !== undefined && vh<=-xh)) && (wh === undefined || (xh !== undefined && wh >= xh));
        }
        function ea(vh, wh) {
            return ga(vh, wh, 0);
        }
        function fa(vh, wh) {
            return ga(vh, wh, wh);
        }
        function ga(vh, wh, xh) {
            return vh === undefined ? xh : vh < 0 ? Math.max(0, wh + vh) : wh === undefined ? vh : Math.min(wh, vh);
        }
        function ha(vh) {
            if (!vh)
                return 0;
            if (vh === true)
                return 1;
            var wh = typeof vh;
            if (wh === 'number') {
                if ((vh | 0) === vh)
                    return vh & oa;
                vh = '' + vh;
                wh = 'string';
            }
            if (wh === 'string')
                return vh.length > ra ? ia(vh) : ja(vh);
            if (vh.hashCode)
                return ha(typeof vh.hashCode === 'function' ? vh.hashCode() : vh.hashCode);
            return ka(vh);
        }
        function ia(vh) {
            var wh = ua[vh];
            if (wh === undefined) {
                wh = ja(vh);
                if (ta === sa) {
                    ta = 0;
                    ua = {};
                }
                ta++;
                ua[vh] = wh;
            }
            return wh;
        }
        function ja(vh) {
            var wh = 0;
            for (var xh = 0; xh < vh.length; xh++)
                wh = (31 * wh + vh.charCodeAt(xh)) & oa;
            return wh;
        }
        function ka(vh) {
            var wh = na && na.get(vh);
            if (wh)
                return wh;
            wh = vh[qa];
            if (wh)
                return wh;
            if (!la) {
                wh = vh.propertyIsEnumerable && vh.propertyIsEnumerable[qa];
                if (wh)
                    return wh;
                wh = ma(vh);
                if (wh)
                    return wh;
            }
            if (Object.isExtensible&&!Object.isExtensible(vh))
                throw new Error('Non-extensible objects are not allowed as keys.');
            wh=++pa & oa;
            if (na) {
                na.set(vh, wh);
            } else if (la) {
                Object.defineProperty(vh, qa, {
                    enumerable: false,
                    configurable: false,
                    writable: false,
                    value: wh
                });
            } else if (vh.propertyIsEnumerable && vh.propertyIsEnumerable === vh.constructor.prototype.propertyIsEnumerable) {
                vh.propertyIsEnumerable = function() {
                    return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
                };
                vh.propertyIsEnumerable[qa] = wh;
            } else if (vh.nodeType) {
                vh[qa] = wh;
            } else 
                throw new Error('Unable to set a non-enumerable property on object.');
            return wh;
        }
        var la = (function() {
            try {
                Object.defineProperty({}, 'x', {});
                return true;
            } catch (vh) {
                return false;
            }
        }());
        function ma(vh) {
            if (vh && vh.nodeType > 0)
                switch (vh.nodeType) {
                case 1:
                    return vh.uniqueID;
                case 9:
                    return vh.documentElement && vh.documentElement.uniqueID;
                }
        }
        var na = typeof WeakMap === 'function' && new WeakMap(), oa = 2147483647, pa = 0, qa = '__immutablehash__';
        if (typeof Symbol === 'function')
            qa = Symbol(qa);
        var ra = 16, sa = 255, ta = 0, ua = {}, va = 0, wa = 1, xa = 2, ya = '@@iterator', za = typeof Symbol === 'function' && Symbol.iterator, ab = za || ya, bb = function vh(wh) {
            this.next = wh;
        };
        (l.createClass)(bb, {
            toString: function() {
                return '[Iterator]';
            }
        }, {});
        bb.KEYS = va;
        bb.VALUES = wa;
        bb.ENTRIES = xa;
        var cb = bb.prototype;
        cb.inspect = cb.toSource = function() {
            return this.toString();
        };
        cb[ab] = function() {
            return this;
        };
        function db(vh, wh, xh, yh) {
            var zh = vh === 0 ? wh: vh === 1 ? xh: [wh, xh];
            yh ? (yh.value = zh) : (yh = {
                value: zh,
                done: false
            });
            return yh;
        }
        function eb() {
            return {
                value: undefined,
                done: true
            };
        }
        function fb(vh) {
            return !!ib(vh);
        }
        function gb(vh) {
            return vh && typeof vh.next === 'function';
        }
        function hb(vh) {
            var wh = ib(vh);
            return wh && wh.call(vh);
        }
        function ib(vh) {
            var wh = vh && ((za && vh[za]) || vh[ya]);
            if (typeof wh === 'function')
                return wh;
        }
        var jb = function vh(wh) {
            return tb(wh) ? wh : ec(wh);
        }, kb = jb;
        (l.createClass)(jb, {
            toArray: function() {
                z(this.size);
                var vh = new Array(this.size || 0);
                this.valueSeq().__iterate((function(wh, xh) {
                    vh[xh] = wh;
                }));
                return vh;
            },
            toIndexedSeq: function() {
                return new ve(this);
            },
            toJS: function() {
                return this.toSeq().map((function(vh) {
                    return vh && typeof vh.toJS === 'function' ? vh.toJS() : vh;
                })).__toJS();
            },
            toKeyedSeq: function() {
                return new ue(this, true);
            },
            toMap: function() {
                z(this.size);
                return md(this.toKeyedSeq());
            },
            toObject: function() {
                z(this.size);
                var vh = {};
                this.__iterate((function(wh, xh) {
                    vh[xh] = wh;
                }));
                return vh;
            },
            toOrderedMap: function() {
                z(this.size);
                return bh(this.toKeyedSeq());
            },
            toSet: function() {
                z(this.size);
                return ug(ub(this) ? this.valueSeq() : this);
            },
            toSetSeq: function() {
                return new we(this);
            },
            toSeq: function() {
                return vb(this) ? this.toIndexedSeq() : ub(this) ? this.toKeyedSeq() : this.toSetSeq();
            },
            toStack: function() {
                z(this.size);
                return mg(ub(this) ? this.valueSeq() : this);
            },
            toList: function() {
                z(this.size);
                return tf(ub(this) ? this.valueSeq() : this);
            },
            toString: function() {
                return '[Iterable]';
            },
            __toString: function(vh, wh) {
                if (this.size === 0)
                    return vh + wh;
                return vh + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + wh;
            },
            concat: function() {
                for (var vh = [], wh = 0; wh < arguments.length; wh++)
                    vh[wh] = arguments[wh];
                return nf(this, jf(this, vh));
            },
            contains: function(vh) {
                return this.some((function(wh) {
                    return m(wh, vh);
                }));
            },
            entries: function() {
                return this.__iterator(xa);
            },
            every: function(vh, wh) {
                var xh = true;
                this.__iterate((function(yh, zh, ai) {
                    if (!vh.call(wh, yh, zh, ai)) {
                        xh = false;
                        return false;
                    }
                }));
                return xh;
            },
            filter: function(vh, wh) {
                return nf(this, bf(this, vh, wh, true));
            },
            find: function(vh, wh, xh) {
                var yh = xh;
                this.__iterate((function(zh, ai, bi) {
                    if (vh.call(wh, zh, ai, bi)) {
                        yh = zh;
                        return false;
                    }
                }));
                return yh;
            },
            forEach: function(vh, wh) {
                return this.__iterate(wh ? vh.bind(wh) : vh);
            },
            join: function(vh) {
                vh = vh !== undefined ? '' + vh : ',';
                var wh = '', xh = true;
                this.__iterate((function(yh) {
                    xh ? (xh = false) : (wh += vh);
                    wh += yh !== null && yh !== undefined ? yh : '';
                }));
                return wh;
            },
            keys: function() {
                return this.__iterator(va);
            },
            map: function(vh, wh) {
                return nf(this, ze(this, vh, wh));
            },
            reduce: function(vh, wh, xh) {
                var yh, zh;
                if (arguments.length < 2) {
                    zh = true;
                } else 
                    yh = wh;
                this.__iterate((function(ai, bi, ci) {
                    if (zh) {
                        zh = false;
                        yh = ai;
                    } else 
                        yh = vh.call(xh, yh, ai, bi, ci);
                }));
                return yh;
            },
            reduceRight: function(vh, wh, xh) {
                var yh = this.toKeyedSeq().reverse();
                return yh.reduce.apply(yh, arguments);
            },
            reverse: function() {
                return nf(this, af(this, true));
            },
            slice: function(vh, wh) {
                if (da(vh, wh, this.size))
                    return this;
                var xh = ea(vh, this.size), yh = fa(wh, this.size);
                if (xh !== xh || yh !== yh)
                    return this.toSeq().cacheResult().slice(vh, wh);
                var zh = xh === 0 ? this: this.skip(xh);
                return nf(this, yh === undefined || yh === this.size ? zh : zh.take(yh - xh));
            },
            some: function(vh, wh) {
                return !this.every(ac(vh), wh);
            },
            sort: function(vh) {
                return this.sortBy(xb, vh);
            },
            values: function() {
                return this.__iterator(wa);
            },
            butLast: function() {
                return this.slice(0, - 1);
            },
            count: function(vh, wh) {
                return aa(vh ? this.toSeq().filter(vh, wh) : this);
            },
            countBy: function(vh, wh) {
                return cf(this, vh, wh);
            },
            equals: function(vh) {
                if (this === vh)
                    return true;
                if (!vh || typeof vh.equals !== 'function')
                    return false;
                if (this.size !== undefined && vh.size !== undefined) {
                    if (this.size !== vh.size)
                        return false;
                    if (this.size === 0 && vh.size === 0)
                        return true;
                }
                if (this.__hash !== undefined && vh.__hash !== undefined && this.__hash !== vh.__hash)
                    return false;
                return this.__deepEquals(vh);
            },
            __deepEquals: function(vh) {
                var wh = this.entries();
                return typeof vh.every === 'function' && vh.every((function(xh, yh) {
                    var zh = wh.next().value;
                    return zh && m(zh[0], yh) && m(zh[1], xh);
                })) && wh.next().done;
            },
            entrySeq: function() {
                var vh = this;
                if (vh._cache)
                    return new nc(vh._cache);
                var wh = vh.toSeq().map(zb).toIndexedSeq();
                wh.fromEntrySeq = (function() {
                    return vh.toSeq();
                });
                return wh;
            },
            filterNot: function(vh, wh) {
                return this.filter(ac(vh), wh);
            },
            findLast: function(vh, wh, xh) {
                return this.toKeyedSeq().reverse().find(vh, wh, xh);
            },
            first: function() {
                return this.find(ca);
            },
            flatMap: function(vh, wh) {
                return nf(this, lf(this, vh, wh));
            },
            flatten: function(vh) {
                return nf(this, kf(this, vh, true));
            },
            fromEntrySeq: function() {
                return new xe(this);
            },
            get: function(vh, wh) {
                return this.find((function(xh, yh) {
                    return m(yh, vh);
                }), undefined, wh);
            },
            getIn: function(vh, wh) {
                var xh = this;
                if (vh)
                    for (var yh = 0; yh < vh.length; yh++) {
                        xh = xh && xh.get ? xh.get(vh[yh], s) : s;
                        if (xh === s)
                            return wh;
                    }
                return xh;
            },
            groupBy: function(vh, wh) {
                return df(this, vh, wh);
            },
            has: function(vh) {
                return this.get(vh, s) !== s;
            },
            isSubset: function(vh) {
                vh = typeof vh.contains === 'function' ? vh : kb(vh);
                return this.every((function(wh) {
                    return vh.contains(wh);
                }));
            },
            isSuperset: function(vh) {
                return vh.isSubset(this);
            },
            keySeq: function() {
                return this.toSeq().map(yb).toIndexedSeq();
            },
            last: function() {
                return this.toSeq().reverse().first();
            },
            max: function(vh) {
                return this.maxBy(xb, vh);
            },
            maxBy: function(vh, wh) {
                var xh = this;
                wh = wh || cc;
                var yh = this.entrySeq().reduce((function(zh, ai) {
                    return wh(vh(ai[1], ai[0], xh), vh(zh[1], zh[0], xh)) > 0 ? ai : zh;
                }));
                return yh && yh[1];
            },
            min: function(vh) {
                return this.minBy(xb, vh);
            },
            minBy: function(vh, wh) {
                var xh = this;
                wh = wh || cc;
                var yh = this.entrySeq().reduce((function(zh, ai) {
                    return wh(vh(ai[1], ai[0], xh), vh(zh[1], zh[0], xh)) < 0 ? ai : zh;
                }));
                return yh && yh[1];
            },
            rest: function() {
                return this.slice(1);
            },
            skip: function(vh) {
                return nf(this, gf(this, vh, true));
            },
            skipLast: function(vh) {
                return nf(this, this.toSeq().reverse().skip(vh).reverse());
            },
            skipWhile: function(vh, wh) {
                return nf(this, hf(this, vh, wh, true));
            },
            skipUntil: function(vh, wh) {
                return this.skipWhile(ac(vh), wh);
            },
            sortBy: function(vh, wh) {
                var xh = this;
                wh = wh || cc;
                return nf(this, new nc(this.entrySeq().entrySeq().toArray().sort((function(yh, zh) {
                    return wh(vh(yh[1][1], yh[1][0], xh), vh(zh[1][1], zh[1][0], xh)) || yh[0] - zh[0];
                }))).fromEntrySeq().valueSeq().fromEntrySeq());
            },
            take: function(vh) {
                return nf(this, ef(this, vh));
            },
            takeLast: function(vh) {
                return nf(this, this.toSeq().reverse().take(vh).reverse());
            },
            takeWhile: function(vh, wh) {
                return nf(this, ff(this, vh, wh));
            },
            takeUntil: function(vh, wh) {
                return this.takeWhile(ac(vh), wh);
            },
            valueSeq: function() {
                return this.toIndexedSeq();
            },
            hashCode: function() {
                return this.__hash || (this.__hash = this.size === Infinity ? 0 : this.reduce((function(vh, wh, xh) {
                    return (vh + (ha(wh)^(wh === xh ? 0 : ha(xh)))) & oa;
                }), 0));
            }
        }, {});
        var lb = '@@__IMMUTABLE_ITERABLE__@@', mb = '@@__IMMUTABLE_KEYED__@@', nb = '@@__IMMUTABLE_INDEXED__@@', ob = jb.prototype;
        ob[lb] = true;
        ob[ab] = ob.values;
        ob.toJSON = ob.toJS;
        ob.__toJS = ob.toArray;
        ob.__toStringMapper = bc;
        ob.inspect = ob.toSource = function() {
            return this.toString();
        };
        ob.chain = ob.flatMap;
        (function() {
            try {
                Object.defineProperty(ob, 'length', {
                    get: function() {
                        if (!jb.noLengthWarning) {
                            var wh;
                            try {
                                throw new Error();
                            } catch (xh) {
                                wh = xh.stack;
                            }
                            if (wh.indexOf('_wrapObject')===-1) {
                                console && emptyFunction && false;
                                return this.size;
                            }
                        }
                    }
                });
            } catch (vh) {}
        })();
        var pb = function vh(wh) {
            return ub(wh) ? wh : gc(wh);
        };
        (l.createClass)(pb, {
            flip: function() {
                return nf(this, ye(this));
            },
            findKey: function(vh, wh) {
                var xh;
                this.__iterate((function(yh, zh, ai) {
                    if (vh.call(wh, yh, zh, ai)) {
                        xh = zh;
                        return false;
                    }
                }));
                return xh;
            },
            findLastKey: function(vh, wh) {
                return this.toSeq().reverse().findKey(vh, wh);
            },
            keyOf: function(vh) {
                return this.findKey((function(wh) {
                    return m(wh, vh);
                }));
            },
            lastKeyOf: function(vh) {
                return this.toSeq().reverse().keyOf(vh);
            },
            mapEntries: function(vh, wh) {
                var xh = this, yh = 0;
                return nf(this, this.toSeq().map((function(zh, ai) {
                    return vh.call(wh, [ai, zh], yh++, xh);
                })).fromEntrySeq());
            },
            mapKeys: function(vh, wh) {
                var xh = this;
                return nf(this, this.toSeq().flip().map((function(yh, zh) {
                    return vh.call(wh, yh, zh, xh);
                })).flip());
            }
        }, {}, jb);
        var qb = pb.prototype;
        qb[mb] = true;
        qb[ab] = ob.entries;
        qb.__toJS = ob.toObject;
        qb.__toStringMapper = (function(vh, wh) {
            return wh + ': ' + bc(vh);
        });
        var rb = function vh(wh) {
            return vb(wh) ? wh : ic(wh);
        };
        (l.createClass)(rb, {
            toKeyedSeq: function() {
                return new ue(this, false);
            },
            filter: function(vh, wh) {
                return nf(this, bf(this, vh, wh, false));
            },
            findIndex: function(vh, wh) {
                var xh = this.toKeyedSeq().findKey(vh, wh);
                return xh === undefined?-1 : xh;
            },
            indexOf: function(vh) {
                var wh = this.toKeyedSeq().keyOf(vh);
                return wh === undefined?-1 : wh;
            },
            lastIndexOf: function(vh) {
                var wh = this.toKeyedSeq().lastKeyOf(vh);
                return wh === undefined?-1 : wh;
            },
            reverse: function() {
                return nf(this, af(this, false));
            },
            splice: function(vh, wh) {
                var xh = arguments.length;
                wh = Math.max(wh | 0, 0);
                if (xh === 0 || (xh === 2&&!wh))
                    return this;
                vh = ea(vh, this.size);
                var yh = this.slice(0, vh);
                return nf(this, xh === 1 ? yh : yh.concat(y(arguments, 2), this.slice(vh + wh)));
            },
            findLastIndex: function(vh, wh) {
                var xh = this.toKeyedSeq().findLastKey(vh, wh);
                return xh === undefined?-1 : xh;
            },
            first: function() {
                return this.get(0);
            },
            flatten: function(vh) {
                return nf(this, kf(this, vh, false));
            },
            get: function(vh, wh) {
                vh = ba(this, vh);
                return (vh < 0 || (this.size === Infinity || (this.size !== undefined && vh > this.size))) ? wh : this.find((function(xh, yh) {
                    return yh === vh;
                }), undefined, wh);
            },
            has: function(vh) {
                vh = ba(this, vh);
                return vh >= 0 && (this.size !== undefined ? this.size === Infinity || vh < this.size : this.indexOf(vh)!==-1);
            },
            interpose: function(vh) {
                return nf(this, mf(this, vh));
            },
            last: function() {
                return this.get( - 1);
            },
            skip: function(vh) {
                var wh = this, xh = gf(wh, vh, false);
                if (rc(wh) && xh !== wh)
                    xh.get = function(yh, zh) {
                        yh = ba(this, yh);
                        return yh >= 0 ? wh.get(yh + vh, zh) : zh;
                    };
                return nf(this, xh);
            },
            skipWhile: function(vh, wh) {
                return nf(this, hf(this, vh, wh, false));
            },
            sortBy: function(vh, wh) {
                var xh = this;
                wh = wh || cc;
                return nf(this, new nc(this.entrySeq().toArray().sort((function(yh, zh) {
                    return wh(vh(yh[1], yh[0], xh), vh(zh[1], zh[0], xh)) || yh[0] - zh[0];
                }))).fromEntrySeq().valueSeq());
            },
            take: function(vh) {
                var wh = this, xh = ef(wh, vh);
                if (rc(wh) && xh !== wh)
                    xh.get = function(yh, zh) {
                        yh = ba(this, yh);
                        return yh >= 0 && yh < vh ? wh.get(yh, zh) : zh;
                    };
                return nf(this, xh);
            }
        }, {}, jb);
        rb.prototype[nb] = true;
        var sb = function vh(wh) {
            return tb(wh)&&!wb(wh) ? wh : kc(wh);
        };
        (l.createClass)(sb, {
            get: function(vh, wh) {
                return this.has(vh) ? vh : wh;
            },
            contains: function(vh) {
                return this.has(vh);
            },
            keySeq: function() {
                return this.valueSeq();
            }
        }, {}, jb);
        sb.prototype.has = ob.contains;
        function tb(vh) {
            return !!(vh && vh[lb]);
        }
        function ub(vh) {
            return !!(vh && vh[mb]);
        }
        function vb(vh) {
            return !!(vh && vh[nb]);
        }
        function wb(vh) {
            return ub(vh) || vb(vh);
        }
        jb.isIterable = tb;
        jb.isKeyed = ub;
        jb.isIndexed = vb;
        jb.isAssociative = wb;
        jb.Keyed = pb;
        jb.Indexed = rb;
        jb.Set = sb;
        jb.Iterator = bb;
        function xb(vh) {
            return vh;
        }
        function yb(vh, wh) {
            return wh;
        }
        function zb(vh, wh) {
            return [wh, vh];
        }
        function ac(vh) {
            return function() {
                return !vh.apply(this, arguments);
            };
        }
        function bc(vh) {
            return typeof vh === 'string' ? JSON.stringify(vh) : vh;
        }
        function cc(vh, wh) {
            return vh > wh ? 1 : vh < wh?-1 : 0;
        }
        function dc(vh, wh) {
            var xh = vh.prototype, yh = (function(zh) {
                xh[zh] = wh[zh];
            });
            Object.keys(wh).forEach(yh);
            Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(wh).forEach(yh);
            return vh;
        }
        var ec = function vh(wh) {
            return wh === null || wh === undefined ? tc() : tb(wh) ? wh.toSeq() : wc(wh);
        }, fc = ec;
        (l.createClass)(ec, {
            toSeq: function() {
                return this;
            },
            toString: function() {
                return this.__toString('Seq {', '}');
            },
            cacheResult: function() {
                if (!this._cache && this.__iterateUncached) {
                    this._cache = this.entrySeq().toArray();
                    this.size = this._cache.length;
                }
                return this;
            },
            __iterate: function(vh, wh) {
                return zc(this, vh, wh, true);
            },
            __iterator: function(vh, wh) {
                return ad(this, vh, wh, true);
            }
        }, {
            of: function() {
                return fc(arguments);
            }
        }, jb);
        var gc = function vh(wh) {
            return wh === null || wh === undefined ? tc().toKeyedSeq() : tb(wh) ? (ub(wh) ? wh.toSeq() : wh.fromEntrySeq()) : uc(wh);
        }, hc = gc;
        (l.createClass)(gc, {
            toKeyedSeq: function() {
                return this;
            },
            toSeq: function() {
                return this;
            }
        }, {
            of: function() {
                return hc(arguments);
            }
        }, ec);
        dc(gc, pb.prototype);
        var ic = function vh(wh) {
            return wh === null || wh === undefined ? tc() : !tb(wh) ? vc(wh) : ub(wh) ? wh.entrySeq() : wh.toIndexedSeq();
        }, jc = ic;
        (l.createClass)(ic, {
            toIndexedSeq: function() {
                return this;
            },
            toString: function() {
                return this.__toString('Seq [', ']');
            },
            __iterate: function(vh, wh) {
                return zc(this, vh, wh, false);
            },
            __iterator: function(vh, wh) {
                return ad(this, vh, wh, false);
            }
        }, {
            of: function() {
                return jc(arguments);
            }
        }, ec);
        dc(ic, rb.prototype);
        var kc = function vh(wh) {
            return (wh === null || wh === undefined ? tc() : !tb(wh) ? vc(wh) : ub(wh) ? wh.entrySeq() : wh).toSetSeq();
        }, lc = kc;
        (l.createClass)(kc, {
            toSetSeq: function() {
                return this;
            }
        }, {
            of: function() {
                return lc(arguments);
            }
        }, ec);
        dc(kc, sb.prototype);
        ec.isSeq = rc;
        ec.Keyed = gc;
        ec.Set = kc;
        ec.Indexed = ic;
        var mc = '@@__IMMUTABLE_SEQ__@@';
        ec.prototype[mc] = true;
        var nc = function vh(wh) {
            this._array = wh;
            this.size = wh.length;
        };
        (l.createClass)(nc, {
            get: function(vh, wh) {
                return this.has(vh) ? this._array[ba(this, vh)] : wh;
            },
            __iterate: function(vh, wh) {
                var xh = this._array, yh = xh.length - 1;
                for (var zh = 0; zh <= yh; zh++)
                    if (vh(xh[wh ? yh - zh: zh], zh, this) === false)
                        return zh + 1;
                return zh;
            },
            __iterator: function(vh, wh) {
                var xh = this._array, yh = xh.length - 1, zh = 0;
                return new bb((function() {
                    return zh > yh ? eb() : db(vh, zh, xh[wh ? yh - zh++: zh++]);
                }));
            }
        }, {}, ic);
        var oc = function vh(wh) {
            var xh = Object.keys(wh);
            this._object = wh;
            this._keys = xh;
            this.size = xh.length;
        };
        (l.createClass)(oc, {
            get: function(vh, wh) {
                if (wh !== undefined&&!this.has(vh))
                    return wh;
                return this._object[vh];
            },
            has: function(vh) {
                return this._object.hasOwnProperty(vh);
            },
            __iterate: function(vh, wh) {
                var xh = this._object, yh = this._keys, zh = yh.length - 1;
                for (var ai = 0; ai <= zh; ai++) {
                    var bi = yh[wh ? zh - ai: ai];
                    if (vh(xh[bi], bi, this) === false)
                        return ai + 1;
                }
                return ai;
            },
            __iterator: function(vh, wh) {
                var xh = this._object, yh = this._keys, zh = yh.length - 1, ai = 0;
                return new bb((function() {
                    var bi = yh[wh ? zh - ai: ai];
                    return ai++>zh ? eb() : db(vh, bi, xh[bi]);
                }));
            }
        }, {}, gc);
        var pc = function vh(wh) {
            this._iterable = wh;
            this.size = wh.length || wh.size;
        };
        (l.createClass)(pc, {
            __iterateUncached: function(vh, wh) {
                if (wh)
                    return this.cacheResult().__iterate(vh, wh);
                var xh = this._iterable, yh = hb(xh), zh = 0;
                if (gb(yh)) {
                    var ai;
                    while (!(ai = yh.next()).done)
                        if (vh(ai.value, zh++, this) === false)
                            break;
                }
                return zh;
            },
            __iteratorUncached: function(vh, wh) {
                if (wh)
                    return this.cacheResult().__iterator(vh, wh);
                var xh = this._iterable, yh = hb(xh);
                if (!gb(yh))
                    return new bb(eb);
                var zh = 0;
                return new bb((function() {
                    var ai = yh.next();
                    return ai.done ? ai : db(vh, zh++, ai.value);
                }));
            }
        }, {}, ic);
        var qc = function vh(wh) {
            this._iterator = wh;
            this._iteratorCache = [];
        };
        (l.createClass)(qc, {
            __iterateUncached: function(vh, wh) {
                if (wh)
                    return this.cacheResult().__iterate(vh, wh);
                var xh = this._iterator, yh = this._iteratorCache, zh = 0;
                while (zh < yh.length)
                    if (vh(yh[zh], zh++, this) === false)
                        return zh;
                var ai;
                while (!(ai = xh.next()).done) {
                    var bi = ai.value;
                    yh[zh] = bi;
                    if (vh(bi, zh++, this) === false)
                        break;
                }
                return zh;
            },
            __iteratorUncached: function(vh, wh) {
                if (wh)
                    return this.cacheResult().__iterator(vh, wh);
                var xh = this._iterator, yh = this._iteratorCache, zh = 0;
                return new bb((function() {
                    if (zh >= yh.length) {
                        var ai = xh.next();
                        if (ai.done)
                            return ai;
                        yh[zh] = ai.value;
                    }
                    return db(vh, zh, yh[zh++]);
                }));
            }
        }, {}, ic);
        function rc(vh) {
            return !!(vh && vh[mc]);
        }
        var sc;
        function tc() {
            return sc || (sc = new nc([]));
        }
        function uc(vh) {
            var wh = Array.isArray(vh) ? new nc(vh).fromEntrySeq(): gb(vh) ? new qc(vh).fromEntrySeq(): fb(vh) ? new pc(vh).fromEntrySeq(): typeof vh === 'object' ? new oc(vh): undefined;
            if (!wh)
                throw new TypeError('Expected Array or iterable object of [k, v] entries, ' + 'or keyed object: ' + vh);
            return wh;
        }
        function vc(vh) {
            var wh = xc(vh);
            if (!wh)
                throw new TypeError('Expected Array or iterable object of values: ' + vh);
            return wh;
        }
        function wc(vh) {
            var wh = xc(vh) || (typeof vh === 'object' && new oc(vh));
            if (!wh)
                throw new TypeError('Expected Array or iterable object of values, or keyed object: ' + vh);
            return wh;
        }
        function xc(vh) {
            return (yc(vh) ? new nc(vh) : gb(vh) ? new qc(vh) : fb(vh) ? new pc(vh) : undefined);
        }
        function yc(vh) {
            return vh && typeof vh.length === 'number';
        }
        function zc(vh, wh, xh, yh) {
            z(vh.size);
            var zh = vh._cache;
            if (zh) {
                var ai = zh.length - 1;
                for (var bi = 0; bi <= ai; bi++) {
                    var ci = zh[xh ? ai - bi: bi];
                    if (wh(ci[1], yh ? ci[0] : bi, vh) === false)
                        return bi + 1;
                }
                return bi;
            }
            return vh.__iterateUncached(wh, xh);
        }
        function ad(vh, wh, xh, yh) {
            var zh = vh._cache;
            if (zh) {
                var ai = zh.length - 1, bi = 0;
                return new bb((function() {
                    var ci = zh[xh ? ai - bi: bi];
                    return bi++>ai ? eb() : db(wh, yh ? ci[0] : bi - 1, ci[1]);
                }));
            }
            return vh.__iteratorUncached(wh, xh);
        }
        function bd(vh, wh) {
            return wh ? cd(wh, vh, '', {
                '': vh
            }) : dd(vh);
        }
        function cd(vh, wh, xh, yh) {
            if (Array.isArray(wh))
                return vh.call(yh, xh, ic(wh).map((function(zh, ai) {
                    return cd(vh, zh, ai, wh);
                })));
            if (ed(wh))
                return vh.call(yh, xh, gc(wh).map((function(zh, ai) {
                    return cd(vh, zh, ai, wh);
                })));
            return wh;
        }
        function dd(vh) {
            if (Array.isArray(vh))
                return ic(vh).map(dd).toList();
            if (ed(vh))
                return gc(vh).map(dd).toMap();
            return vh;
        }
        function ed(vh) {
            return vh && vh.constructor === Object;
        }
        var fd = function vh() {
            throw TypeError('Abstract');
        };
        (l.createClass)(fd, {}, {}, jb);
        var gd = function vh() {
            l.defaultSuperCall(this, hd.prototype, arguments);
        }, hd = gd;
        (l.createClass)(gd, {}, {}, fd);
        dc(gd, pb.prototype);
        var id = function vh() {
            l.defaultSuperCall(this, jd.prototype, arguments);
        }, jd = id;
        (l.createClass)(id, {}, {}, fd);
        dc(id, rb.prototype);
        var kd = function vh() {
            l.defaultSuperCall(this, ld.prototype, arguments);
        }, ld = kd;
        (l.createClass)(kd, {}, {}, fd);
        dc(kd, sb.prototype);
        fd.Keyed = gd;
        fd.Indexed = id;
        fd.Set = kd;
        var md = function vh(wh) {
            return wh === null || wh === undefined ? de() : nd(wh) ? wh : de().merge(pb(wh));
        };
        (l.createClass)(md, {
            toString: function() {
                return this.__toString('Map {', '}');
            },
            get: function(vh, wh) {
                return this._root ? this._root.get(0, ha(vh), vh, wh) : wh;
            },
            set: function(vh, wh) {
                return ee(this, vh, wh);
            },
            setIn: function(vh, wh) {
                n(vh.length > 0);
                return this.updateIn(vh, (function() {
                    return wh;
                }));
            },
            remove: function(vh) {
                return ee(this, vh, s);
            },
            removeIn: function(vh) {
                n(vh.length > 0);
                return this.updateIn(vh, (function() {
                    return s;
                }));
            },
            update: function(vh, wh, xh) {
                return arguments.length === 1 ? vh(this) : this.updateIn([vh], wh, xh);
            },
            updateIn: function(vh, wh, xh) {
                if (!xh) {
                    xh = wh;
                    wh = undefined;
                }
                return vh.length === 0 ? xh(this) : ne(this, vh, wh, xh, 0);
            },
            clear: function() {
                if (this.size === 0)
                    return this;
                if (this.__ownerID) {
                    this.size = 0;
                    this._root = null;
                    this.__hash = undefined;
                    this.__altered = true;
                    return this;
                }
                return de();
            },
            merge: function() {
                return ke(this, undefined, arguments);
            },
            mergeWith: function(vh) {
                for (var wh = [], xh = 1; xh < arguments.length; xh++)
                    wh[xh - 1] = arguments[xh];
                return ke(this, vh, wh);
            },
            mergeDeep: function() {
                return ke(this, le(undefined), arguments);
            },
            mergeDeepWith: function(vh) {
                for (var wh = [], xh = 1; xh < arguments.length; xh++)
                    wh[xh - 1] = arguments[xh];
                return ke(this, le(vh), wh);
            },
            withMutations: function(vh) {
                var wh = this.asMutable();
                vh(wh);
                return wh.wasAltered() ? wh.__ensureOwner(this.__ownerID) : this;
            },
            asMutable: function() {
                return this.__ownerID ? this : this.__ensureOwner(new x());
            },
            asImmutable: function() {
                return this.__ensureOwner();
            },
            wasAltered: function() {
                return this.__altered;
            },
            __iterator: function(vh, wh) {
                return new yd(this, vh, wh);
            },
            __iterate: function(vh, wh) {
                var xh = this, yh = 0;
                this._root && this._root.iterate((function(zh) {
                    yh++;
                    return vh(zh[1], zh[0], xh);
                }), wh);
                return yh;
            },
            __ensureOwner: function(vh) {
                if (vh === this.__ownerID)
                    return this;
                if (!vh) {
                    this.__ownerID = vh;
                    this.__altered = false;
                    return this;
                }
                return be(this.size, this._root, vh, this.__hash);
            }
        }, {}, gd);
        function nd(vh) {
            return !!(vh && vh[od]);
        }
        md.isMap = nd;
        var od = '@@__IMMUTABLE_MAP__@@', pd = md.prototype;
        pd[od] = true;
        pd[o] = pd.remove;
        var qd = function vh(wh, xh, yh) {
            this.ownerID = wh;
            this.bitmap = xh;
            this.nodes = yh;
        }, rd = qd;
        (l.createClass)(qd, {
            get: function(vh, wh, xh, yh) {
                var zh = (1<<((vh === 0 ? wh : wh>>>vh) & r)), ai = this.bitmap;
                return (ai & zh) === 0 ? yh : this.nodes[oe(ai & (zh - 1))].get(vh + p, wh, xh, yh);
            },
            update: function(vh, wh, xh, yh, zh, ai, bi) {
                var ci = (wh === 0 ? xh : xh>>>wh) & r, di = 1<<ci, ei = this.bitmap, fi = (ei & di) !== 0;
                if (!fi && zh === s)
                    return this;
                var gi = oe(ei & (di - 1)), hi = this.nodes, ii = fi ? hi[gi]: undefined, ji = fe(ii, vh, wh + p, xh, yh, zh, ai, bi);
                if (ji === ii)
                    return this;
                if (!fi && ji && hi.length >= se)
                    return je(vh, hi, ei, ci, ji);
                if (fi&&!ji && hi.length === 2 && ge(hi[gi^1]))
                    return hi[gi^1];
                if (fi && ji && hi.length === 1 && ge(ji))
                    return ji;
                var ki = vh && vh === this.ownerID, li = fi ? ji ? ei: ei^di: ei | di, mi = fi ? ji ? pe(hi, gi, ji, ki): re(hi, gi, ki): qe(hi, gi, ji, ki);
                if (ki) {
                    this.bitmap = li;
                    this.nodes = mi;
                    return this;
                }
                return new rd(vh, li, mi);
            },
            iterate: function(vh, wh) {
                var xh = this.nodes;
                for (var yh = 0, zh = xh.length - 1; yh <= zh; yh++)
                    if (xh[wh ? zh - yh: yh].iterate(vh, wh) === false)
                        return false;
            }
        }, {});
        var sd = function vh(wh, xh, yh) {
            this.ownerID = wh;
            this.count = xh;
            this.nodes = yh;
        }, td = sd;
        (l.createClass)(sd, {
            get: function(vh, wh, xh, yh) {
                var zh = (vh === 0 ? wh : wh>>>vh) & r, ai = this.nodes[zh];
                return ai ? ai.get(vh + p, wh, xh, yh) : yh;
            },
            update: function(vh, wh, xh, yh, zh, ai, bi) {
                var ci = (wh === 0 ? xh : xh>>>wh) & r, di = zh === s, ei = this.nodes, fi = ei[ci];
                if (di&&!fi)
                    return this;
                var gi = fe(fi, vh, wh + p, xh, yh, zh, ai, bi);
                if (gi === fi)
                    return this;
                var hi = this.count;
                if (!fi) {
                    hi++;
                } else if (!gi) {
                    hi--;
                    if (hi < te)
                        return ie(vh, ei, hi, ci);
                }
                var ii = vh && vh === this.ownerID, ji = pe(ei, ci, gi, ii);
                if (ii) {
                    this.count = hi;
                    this.nodes = ji;
                    return this;
                }
                return new td(vh, hi, ji);
            },
            iterate: function(vh, wh) {
                var xh = this.nodes;
                for (var yh = 0, zh = xh.length - 1; yh <= zh; yh++) {
                    var ai = xh[wh ? zh - yh: yh];
                    if (ai && ai.iterate(vh, wh) === false)
                        return false;
                }
            }
        }, {});
        var ud = function vh(wh, xh, yh) {
            this.ownerID = wh;
            this.hash = xh;
            this.entries = yh;
        }, vd = ud;
        (l.createClass)(ud, {
            get: function(vh, wh, xh, yh) {
                var zh = this.entries;
                for (var ai = 0, bi = zh.length; ai < bi; ai++)
                    if (m(xh, zh[ai][0]))
                        return zh[ai][1];
                return yh;
            },
            update: function(vh, wh, xh, yh, zh, ai, bi) {
                var ci = zh === s;
                if (xh !== this.hash) {
                    if (ci)
                        return this;
                    w(bi);
                    w(ai);
                    return he(this, vh, wh, xh, [yh, zh]);
                }
                var di = this.entries, ei = 0;
                for (var fi = di.length; ei < fi; ei++)
                    if (m(yh, di[ei][0]))
                        break;
                var gi = ei < fi;
                if (ci&&!gi)
                    return this;
                w(bi);
                (ci ||!gi) && w(ai);
                if (ci && fi === 2)
                    return new wd(vh, this.hash, di[ei^1]);
                var hi = vh && vh === this.ownerID, ii = hi ? di: y(di);
                if (gi) {
                    if (ci) {
                        ei === fi - 1 ? ii.pop() : (ii[ei] = ii.pop());
                    } else 
                        ii[ei] = [yh, zh];
                } else 
                    ii.push([yh, zh]);
                if (hi) {
                    this.entries = ii;
                    return this;
                }
                return new vd(vh, this.hash, ii);
            },
            iterate: function(vh, wh) {
                var xh = this.entries;
                for (var yh = 0, zh = xh.length - 1; yh <= zh; yh++)
                    if (vh(xh[wh ? zh - yh: yh]) === false)
                        return false;
            }
        }, {});
        var wd = function vh(wh, xh, yh) {
            this.ownerID = wh;
            this.hash = xh;
            this.entry = yh;
        }, xd = wd;
        (l.createClass)(wd, {
            get: function(vh, wh, xh, yh) {
                return m(xh, this.entry[0]) ? this.entry[1] : yh;
            },
            update: function(vh, wh, xh, yh, zh, ai, bi) {
                var ci = zh === s, di = m(yh, this.entry[0]);
                if (di ? zh === this.entry[1] : ci)
                    return this;
                w(bi);
                if (ci) {
                    w(ai);
                    return;
                }
                if (di) {
                    if (vh && vh === this.ownerID) {
                        this.entry[1] = zh;
                        return this;
                    }
                    return new xd(vh, xh, [yh, zh]);
                }
                w(ai);
                return he(this, vh, wh, xh, [yh, zh]);
            },
            iterate: function(vh) {
                return vh(this.entry);
            }
        }, {});
        var yd = function vh(wh, xh, yh) {
            this._type = xh;
            this._reverse = yh;
            this._stack = wh._root && ae(wh._root);
        };
        (l.createClass)(yd, {
            next: function() {
                var vh = this._type, wh = this._stack;
                while (wh) {
                    var xh = wh.node, yh = wh.index++, zh;
                    if (xh.entry) {
                        if (yh === 0)
                            return zd(vh, xh.entry);
                    } else if (xh.entries) {
                        zh = xh.entries.length - 1;
                        if (yh <= zh)
                            return zd(vh, xh.entries[this._reverse ? zh - yh: yh]);
                    } else {
                        zh = xh.nodes.length - 1;
                        if (yh <= zh) {
                            var ai = xh.nodes[this._reverse ? zh - yh: yh];
                            if (ai) {
                                if (ai.entry)
                                    return zd(vh, ai.entry);
                                wh = this._stack = ae(ai, wh);
                            }
                            continue;
                        }
                    }
                    wh = this._stack = this._stack.__prev;
                }
                return eb();
            }
        }, {}, bb);
        function zd(vh, wh) {
            return db(vh, wh[0], wh[1]);
        }
        function ae(vh, wh) {
            return {
                node: vh,
                index: 0,
                __prev: wh
            };
        }
        function be(vh, wh, xh, yh) {
            var zh = Object.create(pd);
            zh.size = vh;
            zh._root = wh;
            zh.__ownerID = xh;
            zh.__hash = yh;
            zh.__altered = false;
            return zh;
        }
        var ce;
        function de() {
            return ce || (ce = be(0));
        }
        function ee(vh, wh, xh) {
            var yh = v(t), zh = v(u), ai = fe(vh._root, vh.__ownerID, 0, ha(wh), wh, xh, yh, zh);
            if (!zh.value)
                return vh;
            var bi = vh.size + (yh.value ? xh === s?-1 : 1 : 0);
            if (vh.__ownerID) {
                vh.size = bi;
                vh._root = ai;
                vh.__hash = undefined;
                vh.__altered = true;
                return vh;
            }
            return ai ? be(bi, ai) : de();
        }
        function fe(vh, wh, xh, yh, zh, ai, bi, ci) {
            if (!vh) {
                if (ai === s)
                    return vh;
                w(ci);
                w(bi);
                return new wd(wh, yh, [zh, ai]);
            }
            return vh.update(wh, xh, yh, zh, ai, bi, ci);
        }
        function ge(vh) {
            return vh.constructor === wd || vh.constructor === ud;
        }
        function he(vh, wh, xh, yh, zh) {
            if (vh.hash === yh)
                return new ud(wh, yh, [vh.entry, zh]);
            var ai = (xh === 0 ? vh.hash : vh.hash>>>xh) & r, bi = (xh === 0 ? yh : yh>>>xh) & r, ci, di = ai === bi ? [he(vh, wh, xh + p, yh, zh)]: ((ci = new wd(wh, yh, zh)), ai < bi ? [vh, ci] : [ci, vh]);
            return new qd(wh, (1<<ai) | (1<<bi), di);
        }
        function ie(vh, wh, xh, yh) {
            var zh = 0, ai = 0, bi = new Array(xh);
            for (var ci = 0, di = 1, ei = wh.length; ci < ei; ci++, di<<=1) {
                var fi = wh[ci];
                if (fi !== undefined && ci !== yh) {
                    zh|=di;
                    bi[ai++] = fi;
                }
            }
            return new qd(vh, zh, bi);
        }
        function je(vh, wh, xh, yh, zh) {
            var ai = 0, bi = new Array(q);
            for (var ci = 0; xh !== 0; ci++, xh>>>=1)
                bi[ci] = xh & 1 ? wh[ai++] : undefined;
            bi[yh] = zh;
            return new sd(vh, ai + 1, bi);
        }
        function ke(vh, wh, xh) {
            var yh = [];
            for (var zh = 0; zh < xh.length; zh++) {
                var ai = xh[zh], bi = pb(ai);
                if (!tb(ai))
                    bi = bi.map((function(ci) {
                        return bd(ci);
                    }));
                yh.push(bi);
            }
            return me(vh, wh, yh);
        }
        function le(vh) {
            return (function(wh, xh) {
                return wh && wh.mergeDeepWith && tb(xh) ? wh.mergeDeepWith(vh, xh) : vh ? vh(wh, xh) : xh;
            });
        }
        function me(vh, wh, xh) {
            if (xh.length === 0)
                return vh;
            return vh.withMutations((function(yh) {
                var zh = wh ? (function(bi, ci) {
                    yh.update(ci, s, (function(di) {
                        return di === s ? bi : wh(di, bi);
                    }));
                }): (function(bi, ci) {
                    yh.set(ci, bi);
                });
                for (var ai = 0; ai < xh.length; ai++)
                    xh[ai].forEach(zh);
            }));
        }
        function ne(vh, wh, xh, yh, zh) {
            n(!vh || vh.set);
            var ai = wh[zh], bi = vh ? vh.get(ai, s): s, ci = bi === s ? undefined: bi, di = zh === wh.length - 1 ? yh(bi === s ? xh : bi): ne(ci, wh, xh, yh, zh + 1);
            return di === ci ? vh : di === s ? vh && vh.remove(ai) : (vh || de()).set(ai, di);
        }
        function oe(vh) {
            vh = vh - ((vh>>1) & 1431655765);
            vh = (vh & 858993459) + ((vh>>2) & 858993459);
            vh = (vh + (vh>>4)) & 252645135;
            vh = vh + (vh>>8);
            vh = vh + (vh>>16);
            return vh & 127;
        }
        function pe(vh, wh, xh, yh) {
            var zh = yh ? vh: y(vh);
            zh[wh] = xh;
            return zh;
        }
        function qe(vh, wh, xh, yh) {
            var zh = vh.length + 1;
            if (yh && wh + 1 === zh) {
                vh[wh] = xh;
                return vh;
            }
            var ai = new Array(zh), bi = 0;
            for (var ci = 0; ci < zh; ci++)
                if (ci === wh) {
                    ai[ci] = xh;
                    bi =- 1;
                } else 
                    ai[ci] = vh[ci + bi];
            return ai;
        }
        function re(vh, wh, xh) {
            var yh = vh.length - 1;
            if (xh && wh === yh) {
                vh.pop();
                return vh;
            }
            var zh = new Array(yh), ai = 0;
            for (var bi = 0; bi < yh; bi++) {
                if (bi === wh)
                    ai = 1;
                zh[bi] = vh[bi + ai];
            }
            return zh;
        }
        var se = q / 2, te = q / 4, ue = function vh(wh, xh) {
            this._iter = wh;
            this._useKeys = xh;
            this.size = wh.size;
        };
        (l.createClass)(ue, {
            get: function(vh, wh) {
                return this._iter.get(vh, wh);
            },
            has: function(vh) {
                return this._iter.has(vh);
            },
            valueSeq: function() {
                return this._iter.valueSeq();
            },
            reverse: function() {
                var vh = this, wh = af(this, true);
                if (!this._useKeys)
                    wh.valueSeq = (function() {
                        return vh._iter.toSeq().reverse();
                    });
                return wh;
            },
            map: function(vh, wh) {
                var xh = this, yh = ze(this, vh, wh);
                if (!this._useKeys)
                    yh.valueSeq = (function() {
                        return xh._iter.toSeq().map(vh, wh);
                    });
                return yh;
            },
            __iterate: function(vh, wh) {
                var xh = this, yh;
                return this._iter.__iterate(this._useKeys ? (function(zh, ai) {
                    return vh(zh, ai, xh);
                }) : ((yh = wh ? pf(this) : 0), (function(zh) {
                    return vh(zh, wh?--yh : yh++, xh);
                })), wh);
            },
            __iterator: function(vh, wh) {
                if (this._useKeys)
                    return this._iter.__iterator(vh, wh);
                var xh = this._iter.__iterator(wa, wh), yh = wh ? pf(this): 0;
                return new bb((function() {
                    var zh = xh.next();
                    return zh.done ? zh : db(vh, wh?--yh : yh++, zh.value, zh);
                }));
            }
        }, {}, gc);
        var ve = function vh(wh) {
            this._iter = wh;
            this.size = wh.size;
        };
        (l.createClass)(ve, {
            contains: function(vh) {
                return this._iter.contains(vh);
            },
            __iterate: function(vh, wh) {
                var xh = this, yh = 0;
                return this._iter.__iterate((function(zh) {
                    return vh(zh, yh++, xh);
                }), wh);
            },
            __iterator: function(vh, wh) {
                var xh = this._iter.__iterator(wa, wh), yh = 0;
                return new bb((function() {
                    var zh = xh.next();
                    return zh.done ? zh : db(vh, yh++, zh.value, zh);
                }));
            }
        }, {}, ic);
        var we = function vh(wh) {
            this._iter = wh;
            this.size = wh.size;
        };
        (l.createClass)(we, {
            has: function(vh) {
                return this._iter.contains(vh);
            },
            __iterate: function(vh, wh) {
                var xh = this;
                return this._iter.__iterate((function(yh) {
                    return vh(yh, yh, xh);
                }), wh);
            },
            __iterator: function(vh, wh) {
                var xh = this._iter.__iterator(wa, wh);
                return new bb((function() {
                    var yh = xh.next();
                    return yh.done ? yh : db(vh, yh.value, yh.value, yh);
                }));
            }
        }, {}, kc);
        var xe = function vh(wh) {
            this._iter = wh;
            this.size = wh.size;
        };
        (l.createClass)(xe, {
            entrySeq: function() {
                return this._iter.toSeq();
            },
            __iterate: function(vh, wh) {
                var xh = this;
                return this._iter.__iterate((function(yh) {
                    if (yh) {
                        of(yh);
                        return vh(yh[1], yh[0], xh);
                    }
                }), wh);
            },
            __iterator: function(vh, wh) {
                var xh = this._iter.__iterator(wa, wh);
                return new bb((function() {
                    while (true) {
                        var yh = xh.next();
                        if (yh.done)
                            return yh;
                        var zh = yh.value;
                        if (zh) {
                            of(zh);
                            return vh === xa ? yh : db(vh, zh[0], zh[1], yh);
                        }
                    }
                }));
            }
        }, {}, gc);
        ve.prototype.cacheResult = ue.prototype.cacheResult = we.prototype.cacheResult = xe.prototype.cacheResult = sf;
        function ye(vh) {
            var wh = rf(vh);
            wh._iter = vh;
            wh.size = vh.size;
            wh.flip = (function() {
                return vh;
            });
            wh.reverse = function() {
                var xh = vh.reverse.apply(this);
                xh.flip = (function() {
                    return vh.reverse();
                });
                return xh;
            };
            wh.has = (function(xh) {
                return vh.contains(xh);
            });
            wh.contains = (function(xh) {
                return vh.has(xh);
            });
            wh.cacheResult = sf;
            wh.__iterateUncached = function(xh, yh) {
                var zh = this;
                return vh.__iterate((function(ai, bi) {
                    return xh(bi, ai, zh) !== false;
                }), yh);
            };
            wh.__iteratorUncached = function(xh, yh) {
                if (xh === xa) {
                    var zh = vh.__iterator(xh, yh);
                    return new bb((function() {
                        var ai = zh.next();
                        if (!ai.done) {
                            var bi = ai.value[0];
                            ai.value[0] = ai.value[1];
                            ai.value[1] = bi;
                        }
                        return ai;
                    }));
                }
                return vh.__iterator(xh === wa ? va : wa, yh);
            };
            return wh;
        }
        function ze(vh, wh, xh) {
            var yh = rf(vh);
            yh.size = vh.size;
            yh.has = (function(zh) {
                return vh.has(zh);
            });
            yh.get = (function(zh, ai) {
                var bi = vh.get(zh, s);
                return bi === s ? ai : wh.call(xh, bi, zh, vh);
            });
            yh.__iterateUncached = function(zh, ai) {
                var bi = this;
                return vh.__iterate((function(ci, di, ei) {
                    return zh(wh.call(xh, ci, di, ei), di, bi) !== false;
                }), ai);
            };
            yh.__iteratorUncached = function(zh, ai) {
                var bi = vh.__iterator(xa, ai);
                return new bb((function() {
                    var ci = bi.next();
                    if (ci.done)
                        return ci;
                    var di = ci.value, ei = di[0];
                    return db(zh, ei, wh.call(xh, di[1], ei, vh), ci);
                }));
            };
            return yh;
        }
        function af(vh, wh) {
            var xh = rf(vh);
            xh._iter = vh;
            xh.size = vh.size;
            xh.reverse = (function() {
                return vh;
            });
            if (vh.flip)
                xh.flip = function() {
                    var yh = ye(vh);
                    yh.reverse = (function() {
                        return vh.flip();
                    });
                    return yh;
                };
            xh.get = (function(yh, zh) {
                return vh.get(wh ? yh : - 1 - yh, zh);
            });
            xh.has = (function(yh) {
                return vh.has(wh ? yh : - 1 - yh);
            });
            xh.contains = (function(yh) {
                return vh.contains(yh);
            });
            xh.cacheResult = sf;
            xh.__iterate = function(yh, zh) {
                var ai = this;
                return vh.__iterate((function(bi, ci) {
                    return yh(bi, ci, ai);
                }), !zh);
            };
            xh.__iterator = (function(yh, zh) {
                return vh.__iterator(yh, !zh);
            });
            return xh;
        }
        function bf(vh, wh, xh, yh) {
            var zh = rf(vh);
            if (yh) {
                zh.has = (function(ai) {
                    var bi = vh.get(ai, s);
                    return bi !== s&&!!wh.call(xh, bi, ai, vh);
                });
                zh.get = (function(ai, bi) {
                    var ci = vh.get(ai, s);
                    return ci !== s && wh.call(xh, ci, ai, vh) ? ci : bi;
                });
            }
            zh.__iterateUncached = function(ai, bi) {
                var ci = this, di = 0;
                vh.__iterate((function(ei, fi, gi) {
                    if (wh.call(xh, ei, fi, gi)) {
                        di++;
                        return ai(ei, yh ? fi : di - 1, ci);
                    }
                }), bi);
                return di;
            };
            zh.__iteratorUncached = function(ai, bi) {
                var ci = vh.__iterator(xa, bi), di = 0;
                return new bb((function() {
                    while (true) {
                        var ei = ci.next();
                        if (ei.done)
                            return ei;
                        var fi = ei.value, gi = fi[0], hi = fi[1];
                        if (wh.call(xh, hi, gi, vh))
                            return db(ai, yh ? gi : di++, hi, ei);
                    }
                }));
            };
            return zh;
        }
        function cf(vh, wh, xh) {
            var yh = md().asMutable();
            vh.__iterate((function(zh, ai) {
                yh.update(wh.call(xh, zh, ai, vh), 0, (function(bi) {
                    return bi + 1;
                }));
            }));
            return yh.asImmutable();
        }
        function df(vh, wh, xh) {
            var yh = ub(vh), zh = md().asMutable();
            vh.__iterate((function(bi, ci) {
                zh.update(wh.call(xh, bi, ci, vh), [], (function(di) {
                    return (di.push(yh ? [ci, bi] : bi), di);
                }));
            }));
            var ai = qf(vh);
            return zh.map((function(bi) {
                return nf(vh, ai(bi));
            }));
        }
        function ef(vh, wh) {
            if (wh > vh.size)
                return vh;
            if (wh < 0)
                wh = 0;
            var xh = rf(vh);
            xh.size = vh.size && Math.min(vh.size, wh);
            xh.__iterateUncached = function(yh, zh) {
                var ai = this;
                if (wh === 0)
                    return 0;
                if (zh)
                    return this.cacheResult().__iterate(yh, zh);
                var bi = 0;
                vh.__iterate((function(ci, di) {
                    return ++bi && yh(ci, di, ai) !== false && bi < wh;
                }));
                return bi;
            };
            xh.__iteratorUncached = function(yh, zh) {
                if (zh)
                    return this.cacheResult().__iterator(yh, zh);
                var ai = wh && vh.__iterator(yh, zh), bi = 0;
                return new bb((function() {
                    if (bi++>wh)
                        return eb();
                    return ai.next();
                }));
            };
            return xh;
        }
        function ff(vh, wh, xh) {
            var yh = rf(vh);
            yh.__iterateUncached = function(zh, ai) {
                var bi = this;
                if (ai)
                    return this.cacheResult().__iterate(zh, ai);
                var ci = 0;
                vh.__iterate((function(di, ei, fi) {
                    return wh.call(xh, di, ei, fi)&&++ci && zh(di, ei, bi);
                }));
                return ci;
            };
            yh.__iteratorUncached = function(zh, ai) {
                var bi = this;
                if (ai)
                    return this.cacheResult().__iterator(zh, ai);
                var ci = vh.__iterator(xa, ai), di = true;
                return new bb((function() {
                    if (!di)
                        return eb();
                    var ei = ci.next();
                    if (ei.done)
                        return ei;
                    var fi = ei.value, gi = fi[0], hi = fi[1];
                    if (!wh.call(xh, hi, gi, bi)) {
                        di = false;
                        return eb();
                    }
                    return zh === xa ? ei : db(zh, gi, hi, ei);
                }));
            };
            return yh;
        }
        function gf(vh, wh, xh) {
            if (wh <= 0)
                return vh;
            var yh = rf(vh);
            yh.size = vh.size && Math.max(0, vh.size - wh);
            yh.__iterateUncached = function(zh, ai) {
                var bi = this;
                if (ai)
                    return this.cacheResult().__iterate(zh, ai);
                var ci = 0, di = true, ei = 0;
                vh.__iterate((function(fi, gi) {
                    if (!(di && (di = ci++<wh))) {
                        ei++;
                        return zh(fi, xh ? gi : ei - 1, bi);
                    }
                }));
                return ei;
            };
            yh.__iteratorUncached = function(zh, ai) {
                if (ai)
                    return this.cacheResult().__iterator(zh, ai);
                var bi = wh && vh.__iterator(zh, ai), ci = 0, di = 0;
                return new bb((function() {
                    while (ci < wh) {
                        ci++;
                        bi.next();
                    }
                    var ei = bi.next();
                    if (xh || zh === wa) {
                        return ei;
                    } else if (zh === va) {
                        return db(zh, di++, undefined, ei);
                    } else 
                        return db(zh, di++, ei.value[1], ei);
                }));
            };
            return yh;
        }
        function hf(vh, wh, xh, yh) {
            var zh = rf(vh);
            zh.__iterateUncached = function(ai, bi) {
                var ci = this;
                if (bi)
                    return this.cacheResult().__iterate(ai, bi);
                var di = true, ei = 0;
                vh.__iterate((function(fi, gi, hi) {
                    if (!(di && (di = wh.call(xh, fi, gi, hi)))) {
                        ei++;
                        return ai(fi, yh ? gi : ei - 1, ci);
                    }
                }));
                return ei;
            };
            zh.__iteratorUncached = function(ai, bi) {
                var ci = this;
                if (bi)
                    return this.cacheResult().__iterator(ai, bi);
                var di = vh.__iterator(xa, bi), ei = true, fi = 0;
                return new bb((function() {
                    var gi, hi, ii;
                    do {
                        gi = di.next();
                        if (gi.done)
                            if (yh || ai === wa) {
                                return gi;
                            } else if (ai === va) {
                                return db(ai, fi++, undefined, gi);
                            } else 
                                return db(ai, fi++, gi.value[1], gi);
                        var ji = gi.value;
                        hi = ji[0];
                        ii = ji[1];
                        ei && (ei = wh.call(xh, ii, hi, ci));
                    }
                    while (ei);
                    return ai === xa ? gi : db(ai, hi, ii, gi);
                }));
            };
            return zh;
        }
        function jf(vh, wh) {
            var xh = ub(vh), yh = new nc([vh].concat(wh)).map((function(ai) {
                if (!tb(ai)) {
                    ai = xh ? uc(ai) : vc(Array.isArray(ai) ? ai : [ai]);
                } else if (xh)
                    ai = pb(ai);
                return ai;
            }));
            if (xh) {
                yh = yh.toKeyedSeq();
            } else if (!vb(vh))
                yh = yh.toSetSeq();
            var zh = yh.flatten(true);
            zh.size = yh.reduce((function(ai, bi) {
                if (ai !== undefined) {
                    var ci = bi.size;
                    if (ci !== undefined)
                        return ai + ci;
                }
            }), 0);
            return zh;
        }
        function kf(vh, wh, xh) {
            var yh = rf(vh);
            yh.__iterateUncached = function(zh, ai) {
                var bi = 0, ci = false;
                function di(ei, fi) {
                    var gi = this;
                    ei.__iterate((function(hi, ii) {
                        if ((!wh || fi < wh) && tb(hi)) {
                            di(hi, fi + 1);
                        } else if (zh(hi, xh ? ii : bi++, gi) === false)
                            ci = true;
                        return !ci;
                    }), ai);
                }
                di(vh, 0);
                return bi;
            };
            yh.__iteratorUncached = function(zh, ai) {
                var bi = vh.__iterator(zh, ai), ci = [], di = 0;
                return new bb((function() {
                    while (bi) {
                        var ei = bi.next();
                        if (ei.done !== false) {
                            bi = ci.pop();
                            continue;
                        }
                        var fi = ei.value;
                        if (zh === xa)
                            fi = fi[1];
                        if ((!wh || ci.length < wh) && tb(fi)) {
                            ci.push(bi);
                            bi = fi.__iterator(zh, ai);
                        } else 
                            return xh ? ei : db(zh, di++, fi, ei);
                    }
                    return eb();
                }));
            };
            return yh;
        }
        function lf(vh, wh, xh) {
            var yh = qf(vh);
            return vh.toSeq().map((function(zh, ai) {
                return yh(wh.call(xh, zh, ai, vh));
            })).flatten(true);
        }
        function mf(vh, wh) {
            var xh = rf(vh);
            xh.size = vh.size && vh.size * 2 - 1;
            xh.__iterateUncached = function(yh, zh) {
                var ai = this, bi = 0;
                vh.__iterate((function(ci, di) {
                    return (!bi || yh(wh, bi++, ai) !== false) && yh(ci, bi++, ai) !== false;
                }), zh);
                return bi;
            };
            xh.__iteratorUncached = function(yh, zh) {
                var ai = vh.__iterator(wa, zh), bi = 0, ci;
                return new bb((function() {
                    if (!ci || bi%2) {
                        ci = ai.next();
                        if (ci.done)
                            return ci;
                    }
                    return bi%2 ? db(yh, bi++, wh) : db(yh, bi++, ci.value, ci);
                }));
            };
            return xh;
        }
        function nf(vh, wh) {
            return rc(vh) ? wh : vh.constructor(wh);
        }
        function of(vh) {
            if (vh !== Object(vh))
                throw new TypeError('Expected [K, V] tuple: ' + vh);
        }
        function pf(vh) {
            z(vh.size);
            return aa(vh);
        }
        function qf(vh) {
            return ub(vh) ? pb : vb(vh) ? rb : sb;
        }
        function rf(vh) {
            return Object.create((ub(vh) ? gc : vb(vh) ? ic : kc).prototype);
        }
        function sf() {
            if (this._iter.cacheResult) {
                this._iter.cacheResult();
                this.size = this._iter.size;
                return this;
            } else 
                return ec.prototype.cacheResult.call(this);
        }
        var tf = function vh(wh) {
            var xh = eg();
            if (wh === null || wh === undefined)
                return xh;
            if (uf(wh))
                return wh;
            wh = rb(wh);
            var yh = wh.size;
            if (yh === 0)
                return xh;
            if (yh > 0 && yh < q)
                return cg(0, yh, p, null, new xf(wh.toArray()));
            return xh.merge(wh);
        };
        (l.createClass)(tf, {
            toString: function() {
                return this.__toString('List [', ']');
            },
            get: function(vh, wh) {
                vh = ba(this, vh);
                if (vh < 0 || vh >= this.size)
                    return wh;
                vh += this._origin;
                var xh = ig(this, vh);
                return xh && xh.array[vh & r];
            },
            set: function(vh, wh) {
                return fg(this, vh, wh);
            },
            remove: function(vh) {
                return !this.has(vh) ? this : vh === 0 ? this.shift() : vh === this.size - 1 ? this.pop() : this.splice(vh, 1);
            },
            clear: function() {
                if (this.size === 0)
                    return this;
                if (this.__ownerID) {
                    this.size = this._origin = this._capacity = 0;
                    this._level = p;
                    this._root = this._tail = null;
                    this.__hash = undefined;
                    this.__altered = true;
                    return this;
                }
                return eg();
            },
            push: function() {
                var vh = arguments, wh = this.size;
                return this.withMutations((function(xh) {
                    jg(xh, 0, wh + vh.length);
                    for (var yh = 0; yh < vh.length; yh++)
                        xh.set(wh + yh, vh[yh]);
                }));
            },
            pop: function() {
                return jg(this, 0, - 1);
            },
            unshift: function() {
                var vh = arguments;
                return this.withMutations((function(wh) {
                    jg(wh, - vh.length);
                    for (var xh = 0; xh < vh.length; xh++)
                        wh.set(xh, vh[xh]);
                }));
            },
            shift: function() {
                return jg(this, 1);
            },
            merge: function() {
                return kg(this, undefined, arguments);
            },
            mergeWith: function(vh) {
                for (var wh = [], xh = 1; xh < arguments.length; xh++)
                    wh[xh - 1] = arguments[xh];
                return kg(this, vh, wh);
            },
            mergeDeep: function() {
                return kg(this, le(undefined), arguments);
            },
            mergeDeepWith: function(vh) {
                for (var wh = [], xh = 1; xh < arguments.length; xh++)
                    wh[xh - 1] = arguments[xh];
                return kg(this, le(vh), wh);
            },
            setSize: function(vh) {
                return jg(this, 0, vh);
            },
            slice: function(vh, wh) {
                var xh = this.size;
                if (da(vh, wh, xh))
                    return this;
                return jg(this, ea(vh, xh), fa(wh, xh));
            },
            __iterator: function(vh, wh) {
                return new ag(this, vh, wh);
            },
            __iterate: function(vh, wh) {
                var xh = this, yh = 0, zh = (function(bi) {
                    return vh(bi, yh++, xh);
                }), ai = lg(this._capacity);
                if (wh) {
                    zf(this._tail, 0, ai - this._origin, this._capacity - this._origin, zh, wh) && zf(this._root, this._level, - this._origin, ai - this._origin, zh, wh);
                } else 
                    zf(this._root, this._level, - this._origin, ai - this._origin, zh, wh) && zf(this._tail, 0, ai - this._origin, this._capacity - this._origin, zh, wh);
                return yh;
            },
            __ensureOwner: function(vh) {
                if (vh === this.__ownerID)
                    return this;
                if (!vh) {
                    this.__ownerID = vh;
                    return this;
                }
                return cg(this._origin, this._capacity, this._level, this._root, this._tail, vh, this.__hash);
            }
        }, {
            of: function() {
                return this (arguments);
            }
        }, id);
        function uf(vh) {
            return !!(vh && vh[vf]);
        }
        tf.isList = uf;
        var vf = '@@__IMMUTABLE_LIST__@@', wf = tf.prototype;
        wf[vf] = true;
        wf[o] = wf.remove;
        wf.setIn = pd.setIn;
        wf.removeIn = pd.removeIn;
        wf.update = pd.update;
        wf.updateIn = pd.updateIn;
        wf.withMutations = pd.withMutations;
        wf.asMutable = pd.asMutable;
        wf.asImmutable = pd.asImmutable;
        wf.wasAltered = pd.wasAltered;
        var xf = function vh(wh, xh) {
            this.array = wh;
            this.ownerID = xh;
        }, yf = xf;
        (l.createClass)(xf, {
            removeBefore: function(vh, wh, xh) {
                if (xh === wh ? 1<<wh : this.array.length === 0)
                    return this;
                var yh = (xh>>>wh) & r;
                if (yh >= this.array.length)
                    return new yf([], vh);
                var zh = yh === 0, ai;
                if (wh > 0) {
                    var bi = this.array[yh];
                    ai = bi && bi.removeBefore(vh, wh - p, xh);
                    if (ai === bi && zh)
                        return this;
                }
                if (zh&&!ai)
                    return this;
                var ci = hg(this, vh);
                if (!zh)
                    for (var di = 0; di < yh; di++)
                        ci.array[di] = undefined;
                if (ai)
                    ci.array[yh] = ai;
                return ci;
            },
            removeAfter: function(vh, wh, xh) {
                if (xh === wh ? 1<<wh : this.array.length === 0)
                    return this;
                var yh = ((xh - 1)>>>wh) & r;
                if (yh >= this.array.length)
                    return this;
                var zh = yh === this.array.length - 1, ai;
                if (wh > 0) {
                    var bi = this.array[yh];
                    ai = bi && bi.removeAfter(vh, wh - p, xh);
                    if (ai === bi && zh)
                        return this;
                }
                if (zh&&!ai)
                    return this;
                var ci = hg(this, vh);
                if (!zh)
                    ci.array.pop();
                if (ai)
                    ci.array[yh] = ai;
                return ci;
            }
        }, {});
        function zf(vh, wh, xh, yh, zh, ai) {
            var bi, ci = vh && vh.array;
            if (wh === 0) {
                var di = xh < 0?-xh : 0, ei = yh - xh;
                if (ei > q)
                    ei = q;
                for (bi = di; bi < ei; bi++)
                    if (zh(ci && ci[ai ? di + ei - 1 - bi: bi]) === false)
                        return false;
            } else {
                var fi = 1<<wh, gi = wh - p;
                for (bi = 0; bi <= r; bi++) {
                    var hi = ai ? r - bi: bi, ii = xh + (hi<<wh);
                    if (ii < yh && ii + fi > 0) {
                        var ji = ci && ci[hi];
                        if (!zf(ji, gi, ii, yh, zh, ai))
                            return false;
                    }
                }
            }
            return true;
        }
        var ag = function vh(wh, xh, yh) {
            this._type = xh;
            this._reverse=!!yh;
            this._maxIndex = wh.size - 1;
            var zh = lg(wh._capacity), ai = bg(wh._root && wh._root.array, wh._level, - wh._origin, zh - wh._origin - 1), bi = bg(wh._tail && wh._tail.array, 0, zh - wh._origin, wh._capacity - wh._origin - 1);
            this._stack = yh ? bi : ai;
            this._stack.__prev = yh ? ai : bi;
        };
        (l.createClass)(ag, {
            next: function() {
                var vh = this._stack;
                while (vh) {
                    var wh = vh.array, xh = vh.index++;
                    if (this._reverse) {
                        xh = r - xh;
                        if (xh > vh.rawMax) {
                            xh = vh.rawMax;
                            vh.index = q - xh;
                        }
                    }
                    if (xh >= 0 && xh < q && xh <= vh.rawMax) {
                        var yh = wh && wh[xh];
                        if (vh.level === 0) {
                            var zh = this._type, ai;
                            if (zh !== 1) {
                                ai = vh.offset + (xh<<vh.level);
                                if (this._reverse)
                                    ai = this._maxIndex - ai;
                            }
                            return db(zh, ai, yh);
                        } else 
                            this._stack = vh = bg(yh && yh.array, vh.level - p, vh.offset + (xh<<vh.level), vh.max, vh);
                        continue;
                    }
                    vh = this._stack = this._stack.__prev;
                }
                return eb();
            }
        }, {}, bb);
        function bg(vh, wh, xh, yh, zh) {
            return {
                array: vh,
                level: wh,
                offset: xh,
                max: yh,
                rawMax: ((yh - xh)>>wh),
                index: 0,
                __prev: zh
            };
        }
        function cg(vh, wh, xh, yh, zh, ai, bi) {
            var ci = Object.create(wf);
            ci.size = wh - vh;
            ci._origin = vh;
            ci._capacity = wh;
            ci._level = xh;
            ci._root = yh;
            ci._tail = zh;
            ci.__ownerID = ai;
            ci.__hash = bi;
            ci.__altered = false;
            return ci;
        }
        var dg;
        function eg() {
            return dg || (dg = cg(0, 0, p));
        }
        function fg(vh, wh, xh) {
            wh = ba(vh, wh);
            if (wh >= vh.size || wh < 0)
                return vh.withMutations((function(bi) {
                    wh < 0 ? jg(bi, wh).set(0, xh) : jg(bi, 0, wh + 1).set(wh, xh);
                }));
            wh += vh._origin;
            var yh = vh._tail, zh = vh._root, ai = v(u);
            if (wh >= lg(vh._capacity)) {
                yh = gg(yh, vh.__ownerID, 0, wh, xh, ai);
            } else 
                zh = gg(zh, vh.__ownerID, vh._level, wh, xh, ai);
            if (!ai.value)
                return vh;
            if (vh.__ownerID) {
                vh._root = zh;
                vh._tail = yh;
                vh.__hash = undefined;
                vh.__altered = true;
                return vh;
            }
            return cg(vh._origin, vh._capacity, vh._level, zh, yh);
        }
        function gg(vh, wh, xh, yh, zh, ai) {
            var bi = (yh>>>xh) & r, ci = vh && bi < vh.array.length;
            if (!ci && zh === undefined)
                return vh;
            var di;
            if (xh > 0) {
                var ei = vh && vh.array[bi], fi = gg(ei, wh, xh - p, yh, zh, ai);
                if (fi === ei)
                    return vh;
                di = hg(vh, wh);
                di.array[bi] = fi;
                return di;
            }
            if (ci && vh.array[bi] === zh)
                return vh;
            w(ai);
            di = hg(vh, wh);
            if (zh === undefined && bi === di.array.length - 1) {
                di.array.pop();
            } else 
                di.array[bi] = zh;
            return di;
        }
        function hg(vh, wh) {
            if (wh && vh && wh === vh.ownerID)
                return vh;
            return new xf(vh ? vh.array.slice() : [], wh);
        }
        function ig(vh, wh) {
            if (wh >= lg(vh._capacity))
                return vh._tail;
            if (wh < 1<<(vh._level + p)) {
                var xh = vh._root, yh = vh._level;
                while (xh && yh > 0) {
                    xh = xh.array[(wh>>>yh) & r];
                    yh -= p;
                }
                return xh;
            }
        }
        function jg(vh, wh, xh) {
            var yh = vh.__ownerID || new x(), zh = vh._origin, ai = vh._capacity, bi = zh + wh, ci = xh === undefined ? ai: xh < 0 ? ai + xh: zh + xh;
            if (bi === zh && ci === ai)
                return vh;
            if (bi >= ci)
                return vh.clear();
            var di = vh._level, ei = vh._root, fi = 0;
            while (bi + fi < 0) {
                ei = new xf(ei && ei.array.length ? [undefined, ei] : [], yh);
                di += p;
                fi += 1<<di;
            }
            if (fi) {
                bi += fi;
                zh += fi;
                ci += fi;
                ai += fi;
            }
            var gi = lg(ai), hi = lg(ci);
            while (hi >= 1<<(di + p)) {
                ei = new xf(ei && ei.array.length ? [ei] : [], yh);
                di += p;
            }
            var ii = vh._tail, ji = hi < gi ? ig(vh, ci - 1): hi > gi ? new xf([], yh): ii;
            if (ii && hi > gi && bi < ai && ii.array.length) {
                ei = hg(ei, yh);
                var ki = ei;
                for (var li = di; li > p; li -= p) {
                    var mi = (gi>>>li) & r;
                    ki = ki.array[mi] = hg(ki.array[mi], yh);
                }
                ki.array[(gi>>>p) & r] = ii;
            }
            if (ci < ai)
                ji = ji && ji.removeAfter(yh, 0, ci);
            if (bi >= hi) {
                bi -= hi;
                ci -= hi;
                di = p;
                ei = null;
                ji = ji && ji.removeBefore(yh, 0, bi);
            } else if (bi > zh || hi < gi) {
                fi = 0;
                while (ei) {
                    var ni = (bi>>>di) & r;
                    if (ni !== (hi>>>di) & r)
                        break;
                    if (ni)
                        fi += (1<<di) * ni;
                    di -= p;
                    ei = ei.array[ni];
                }
                if (ei && bi > zh)
                    ei = ei.removeBefore(yh, di, bi - fi);
                if (ei && hi < gi)
                    ei = ei.removeAfter(yh, di, hi - fi);
                if (fi) {
                    bi -= fi;
                    ci -= fi;
                }
            }
            if (vh.__ownerID) {
                vh.size = ci - bi;
                vh._origin = bi;
                vh._capacity = ci;
                vh._level = di;
                vh._root = ei;
                vh._tail = ji;
                vh.__hash = undefined;
                vh.__altered = true;
                return vh;
            }
            return cg(bi, ci, di, ei, ji);
        }
        function kg(vh, wh, xh) {
            var yh = [], zh = 0;
            for (var ai = 0; ai < xh.length; ai++) {
                var bi = xh[ai], ci = rb(bi);
                if (ci.size > zh)
                    zh = ci.size;
                if (!tb(bi))
                    ci = ci.map((function(di) {
                        return bd(di);
                    }));
                yh.push(ci);
            }
            if (zh > vh.size)
                vh = vh.setSize(zh);
            return me(vh, wh, yh);
        }
        function lg(vh) {
            return vh < q ? 0 : (((vh - 1)>>>p)<<p);
        }
        var mg = function vh(wh) {
            return wh === null || wh === undefined ? tg() : og(wh) ? wh : tg().unshiftAll(wh);
        }, ng = mg;
        (l.createClass)(mg, {
            toString: function() {
                return this.__toString('Stack [', ']');
            },
            get: function(vh, wh) {
                var xh = this._head;
                while (xh && vh--)
                    xh = xh.next;
                return xh ? xh.value : wh;
            },
            peek: function() {
                return this._head && this._head.value;
            },
            push: function() {
                if (arguments.length === 0)
                    return this;
                var vh = this.size + arguments.length, wh = this._head;
                for (var xh = arguments.length - 1; xh >= 0; xh--)
                    wh = {
                        value: arguments[xh],
                        next: wh
                    };
                if (this.__ownerID) {
                    this.size = vh;
                    this._head = wh;
                    this.__hash = undefined;
                    this.__altered = true;
                    return this;
                }
                return rg(vh, wh);
            },
            pushAll: function(vh) {
                vh = rb(vh);
                if (vh.size === 0)
                    return this;
                var wh = this.size, xh = this._head;
                vh.reverse().forEach((function(yh) {
                    wh++;
                    xh = {
                        value: yh,
                        next: xh
                    };
                }));
                if (this.__ownerID) {
                    this.size = wh;
                    this._head = xh;
                    this.__hash = undefined;
                    this.__altered = true;
                    return this;
                }
                return rg(wh, xh);
            },
            pop: function() {
                return this.slice(1);
            },
            unshift: function() {
                return this.push.apply(this, arguments);
            },
            unshiftAll: function(vh) {
                return this.pushAll(vh);
            },
            shift: function() {
                return this.pop.apply(this, arguments);
            },
            clear: function() {
                if (this.size === 0)
                    return this;
                if (this.__ownerID) {
                    this.size = 0;
                    this._head = undefined;
                    this.__hash = undefined;
                    this.__altered = true;
                    return this;
                }
                return tg();
            },
            slice: function(vh, wh) {
                if (da(vh, wh, this.size))
                    return this;
                var xh = ea(vh, this.size), yh = fa(wh, this.size);
                if (yh !== this.size)
                    return l.superCall(this, ng.prototype, "slice", [vh, wh]);
                var zh = this.size - xh, ai = this._head;
                while (xh--)
                    ai = ai.next;
                if (this.__ownerID) {
                    this.size = zh;
                    this._head = ai;
                    this.__hash = undefined;
                    this.__altered = true;
                    return this;
                }
                return rg(zh, ai);
            },
            __ensureOwner: function(vh) {
                if (vh === this.__ownerID)
                    return this;
                if (!vh) {
                    this.__ownerID = vh;
                    this.__altered = false;
                    return this;
                }
                return rg(this.size, this._head, vh, this.__hash);
            },
            __iterate: function(vh, wh) {
                if (wh)
                    return this.toSeq().cacheResult.__iterate(vh, wh);
                var xh = 0, yh = this._head;
                while (yh) {
                    if (vh(yh.value, xh++, this) === false)
                        break;
                    yh = yh.next;
                }
                return xh;
            },
            __iterator: function(vh, wh) {
                if (wh)
                    return this.toSeq().cacheResult().__iterator(vh, wh);
                var xh = 0, yh = this._head;
                return new bb((function() {
                    if (yh) {
                        var zh = yh.value;
                        yh = yh.next;
                        return db(vh, xh++, zh);
                    }
                    return eb();
                }));
            }
        }, {
            of: function() {
                return this (arguments);
            }
        }, id);
        function og(vh) {
            return !!(vh && vh[pg]);
        }
        mg.isStack = og;
        var pg = '@@__IMMUTABLE_STACK__@@', qg = mg.prototype;
        qg[pg] = true;
        qg.withMutations = pd.withMutations;
        qg.asMutable = pd.asMutable;
        qg.asImmutable = pd.asImmutable;
        qg.wasAltered = pd.wasAltered;
        function rg(vh, wh, xh, yh) {
            var zh = Object.create(qg);
            zh.size = vh;
            zh._head = wh;
            zh.__ownerID = xh;
            zh.__hash = yh;
            zh.__altered = false;
            return zh;
        }
        var sg;
        function tg() {
            return sg || (sg = rg(0));
        }
        var ug = function vh(wh) {
            return wh === null || wh === undefined ? ah() : vg(wh) ? wh : ah().union(wh);
        };
        (l.createClass)(ug, {
            toString: function() {
                return this.__toString('Set {', '}');
            },
            has: function(vh) {
                return this._map.has(vh);
            },
            add: function(vh) {
                var wh = this._map.set(vh, true);
                if (this.__ownerID) {
                    this.size = wh.size;
                    this._map = wh;
                    return this;
                }
                return wh === this._map ? this : yg(wh);
            },
            remove: function(vh) {
                var wh = this._map.remove(vh);
                if (this.__ownerID) {
                    this.size = wh.size;
                    this._map = wh;
                    return this;
                }
                return wh === this._map ? this : wh.size === 0 ? ah() : yg(wh);
            },
            clear: function() {
                if (this.size === 0)
                    return this;
                if (this.__ownerID) {
                    this.size = 0;
                    this._map.clear();
                    return this;
                }
                return ah();
            },
            union: function() {
                var vh = arguments;
                if (vh.length === 0)
                    return this;
                return this.withMutations((function(wh) {
                    for (var xh = 0; xh < vh.length; xh++)
                        sb(vh[xh]).forEach((function(yh) {
                            return wh.add(yh);
                        }));
                }));
            },
            intersect: function() {
                for (var vh = [], wh = 0; wh < arguments.length; wh++)
                    vh[wh] = arguments[wh];
                if (vh.length === 0)
                    return this;
                vh = vh.map((function(yh) {
                    return sb(yh);
                }));
                var xh = this;
                return this.withMutations((function(yh) {
                    xh.forEach((function(zh) {
                        if (!vh.every((function(ai) {
                            return ai.contains(zh);
                        })))
                            yh.remove(zh);
                    }));
                }));
            },
            subtract: function() {
                for (var vh = [], wh = 0; wh < arguments.length; wh++)
                    vh[wh] = arguments[wh];
                if (vh.length === 0)
                    return this;
                vh = vh.map((function(yh) {
                    return sb(yh);
                }));
                var xh = this;
                return this.withMutations((function(yh) {
                    xh.forEach((function(zh) {
                        if (vh.some((function(ai) {
                            return ai.contains(zh);
                        })))
                            yh.remove(zh);
                    }));
                }));
            },
            merge: function() {
                return this.union.apply(this, arguments);
            },
            mergeWith: function(vh) {
                for (var wh = [], xh = 1; xh < arguments.length; xh++)
                    wh[xh - 1] = arguments[xh];
                return this.union.apply(this, wh);
            },
            wasAltered: function() {
                return this._map.wasAltered();
            },
            __iterate: function(vh, wh) {
                var xh = this;
                return this._map.__iterate((function(yh, zh) {
                    return vh(zh, zh, xh);
                }), wh);
            },
            __iterator: function(vh, wh) {
                return this._map.map((function(xh, yh) {
                    return yh;
                })).__iterator(vh, wh);
            },
            __ensureOwner: function(vh) {
                if (vh === this.__ownerID)
                    return this;
                var wh = this._map.__ensureOwner(vh);
                if (!vh) {
                    this.__ownerID = vh;
                    this._map = wh;
                    return this;
                }
                return yg(wh, vh);
            }
        }, {
            of: function() {
                return this (arguments);
            },
            fromKeys: function(vh) {
                return this (gc(vh).flip().valueSeq());
            }
        }, kd);
        function vg(vh) {
            return !!(vh && vh[wg]);
        }
        ug.isSet = vg;
        var wg = '@@__IMMUTABLE_SET__@@', xg = ug.prototype;
        xg[wg] = true;
        xg[o] = xg.remove;
        xg.mergeDeep = xg.merge;
        xg.mergeDeepWith = xg.mergeWith;
        xg.withMutations = pd.withMutations;
        xg.asMutable = pd.asMutable;
        xg.asImmutable = pd.asImmutable;
        function yg(vh, wh) {
            var xh = Object.create(xg);
            xh.size = vh ? vh.size : 0;
            xh._map = vh;
            xh.__ownerID = wh;
            return xh;
        }
        var zg;
        function ah() {
            return zg || (zg = yg(de()));
        }
        var bh = function vh(wh) {
            return wh === null || wh === undefined ? gh() : ch(wh) ? wh : gh().merge(pb(wh));
        };
        (l.createClass)(bh, {
            toString: function() {
                return this.__toString('OrderedMap {', '}');
            },
            get: function(vh, wh) {
                var xh = this._map.get(vh);
                return xh !== undefined ? this._list.get(xh)[1] : wh;
            },
            clear: function() {
                if (this.size === 0)
                    return this;
                if (this.__ownerID) {
                    this.size = 0;
                    this._map.clear();
                    this._list.clear();
                    return this;
                }
                return gh();
            },
            set: function(vh, wh) {
                return hh(this, vh, wh);
            },
            remove: function(vh) {
                return hh(this, vh, s);
            },
            wasAltered: function() {
                return this._map.wasAltered() || this._list.wasAltered();
            },
            __iterate: function(vh, wh) {
                var xh = this;
                return this._list.__iterate((function(yh) {
                    return yh && vh(yh[1], yh[0], xh);
                }), wh);
            },
            __iterator: function(vh, wh) {
                return this._list.fromEntrySeq().__iterator(vh, wh);
            },
            __ensureOwner: function(vh) {
                if (vh === this.__ownerID)
                    return this;
                var wh = this._map.__ensureOwner(vh), xh = this._list.__ensureOwner(vh);
                if (!vh) {
                    this.__ownerID = vh;
                    this._map = wh;
                    this._list = xh;
                    return this;
                }
                return eh(wh, xh, vh, this.__hash);
            }
        }, {
            of: function() {
                return this (arguments);
            }
        }, md);
        function ch(vh) {
            return !!(vh && vh[dh]);
        }
        bh.isOrderedMap = ch;
        var dh = '@@__IMMUTABLE_ORDERED_MAP__@@';
        bh.prototype[dh] = true;
        bh.prototype[o] = bh.prototype.remove;
        function eh(vh, wh, xh, yh) {
            var zh = Object.create(bh.prototype);
            zh.size = vh ? vh.size : 0;
            zh._map = vh;
            zh._list = wh;
            zh.__ownerID = xh;
            zh.__hash = yh;
            return zh;
        }
        var fh;
        function gh() {
            return fh || (fh = eh(de(), eg()));
        }
        function hh(vh, wh, xh) {
            var yh = vh._map, zh = vh._list, ai = yh.get(wh), bi = ai !== undefined, ci = xh === s;
            if ((!bi && ci) || (bi && xh === zh.get(ai)[1]))
                return vh;
            if (!bi)
                ai = zh.size;
            var di = ci ? yh.remove(wh): bi ? yh: yh.set(wh, ai), ei = ci ? zh.set(ai, undefined): zh.set(ai, [wh, xh]);
            if (vh.__ownerID) {
                vh.size = di.size;
                vh._map = di;
                vh._list = ei;
                vh.__hash = undefined;
                return vh;
            }
            return eh(di, ei);
        }
        var ih = function vh(wh, xh) {
            var yh = function ci(di) {
                if (!(this instanceof yh))
                    return new yh(di);
                this._map = md(di);
            }, zh = Object.keys(wh), ai = yh.prototype = Object.create(jh);
            ai.constructor = yh;
            xh && (ai._name = xh);
            ai._defaultValues = wh;
            ai._keys = zh;
            ai.size = zh.length;
            try {
                zh.forEach((function(ci) {
                    Object.defineProperty(yh.prototype, ci, {
                        get: function() {
                            return this.get(ci);
                        },
                        set: function(di) {
                            n(this.__ownerID);
                            this.set(ci, di);
                        }
                    });
                }));
            } catch (bi) {}
            return yh;
        };
        (l.createClass)(ih, {
            toString: function() {
                return this.__toString(lh(this) + ' {', '}');
            },
            has: function(vh) {
                return this._defaultValues.hasOwnProperty(vh);
            },
            get: function(vh, wh) {
                if (wh !== undefined&&!this.has(vh))
                    return wh;
                var xh = this._defaultValues[vh];
                return this._map ? this._map.get(vh, xh) : xh;
            },
            clear: function() {
                if (this.__ownerID) {
                    this._map && this._map.clear();
                    return this;
                }
                var vh = Object.getPrototypeOf(this).constructor;
                return vh._empty || (vh._empty = kh(this, de()));
            },
            set: function(vh, wh) {
                if (!this.has(vh))
                    throw new Error('Cannot set unknown key "' + vh + '" on ' + lh(this));
                var xh = this._map && this._map.set(vh, wh);
                if (this.__ownerID || xh === this._map)
                    return this;
                return kh(this, xh);
            },
            remove: function(vh) {
                if (!this.has(vh))
                    return this;
                var wh = this._map && this._map.remove(vh);
                if (this.__ownerID || wh === this._map)
                    return this;
                return kh(this, wh);
            },
            wasAltered: function() {
                return this._map.wasAltered();
            },
            __iterator: function(vh, wh) {
                var xh = this;
                return pb(this._defaultValues).map((function(yh, zh) {
                    return xh.get(zh);
                })).__iterator(vh, wh);
            },
            __iterate: function(vh, wh) {
                var xh = this;
                return pb(this._defaultValues).map((function(yh, zh) {
                    return xh.get(zh);
                })).__iterate(vh, wh);
            },
            __ensureOwner: function(vh) {
                if (vh === this.__ownerID)
                    return this;
                var wh = this._map && this._map.__ensureOwner(vh);
                if (!vh) {
                    this.__ownerID = vh;
                    this._map = wh;
                    return this;
                }
                return kh(this, wh, vh);
            }
        }, {}, gd);
        var jh = ih.prototype;
        jh[o] = jh.remove;
        jh.merge = pd.merge;
        jh.mergeWith = pd.mergeWith;
        jh.mergeDeep = pd.mergeDeep;
        jh.mergeDeepWith = pd.mergeDeepWith;
        jh.update = pd.update;
        jh.updateIn = pd.updateIn;
        jh.withMutations = pd.withMutations;
        jh.asMutable = pd.asMutable;
        jh.asImmutable = pd.asImmutable;
        function kh(vh, wh, xh) {
            var yh = Object.create(Object.getPrototypeOf(vh));
            yh._map = wh;
            yh.__ownerID = xh;
            return yh;
        }
        function lh(vh) {
            return vh._name || vh.constructor.name;
        }
        var mh = function vh(wh, xh, yh) {
            if (!(this instanceof nh))
                return new nh(wh, xh, yh);
            n(yh !== 0);
            wh = wh || 0;
            if (xh === undefined)
                xh = Infinity;
            if (wh === xh && ph)
                return ph;
            yh = yh === undefined ? 1 : Math.abs(yh);
            if (xh < wh)
                yh =- yh;
            this._start = wh;
            this._end = xh;
            this._step = yh;
            this.size = Math.max(0, Math.ceil((xh - wh) / yh - 1) + 1);
        }, nh = mh;
        (l.createClass)(mh, {
            toString: function() {
                if (this.size === 0)
                    return 'Range []';
                return 'Range [ ' + this._start + '...' + this._end + (this._step > 1 ? ' by ' + this._step : '') + ' ]';
            },
            get: function(vh, wh) {
                return this.has(vh) ? this._start + ba(this, vh) * this._step : wh;
            },
            contains: function(vh) {
                var wh = (vh - this._start) / this._step;
                return wh >= 0 && wh < this.size && wh === Math.floor(wh);
            },
            slice: function(vh, wh) {
                if (da(vh, wh, this.size))
                    return this;
                vh = ea(vh, this.size);
                wh = fa(wh, this.size);
                if (wh <= vh)
                    return ph;
                return new nh(this.get(vh, this._end), this.get(wh, this._end), this._step);
            },
            indexOf: function(vh) {
                var wh = vh - this._start;
                if (wh%this._step === 0) {
                    var xh = wh / this._step;
                    if (xh >= 0 && xh < this.size)
                        return xh;
                }
                return - 1;
            },
            lastIndexOf: function(vh) {
                return this.indexOf(vh);
            },
            take: function(vh) {
                return this.slice(0, Math.max(0, vh));
            },
            skip: function(vh) {
                return this.slice(Math.max(0, vh));
            },
            __iterate: function(vh, wh) {
                var xh = this.size - 1, yh = this._step, zh = wh ? this._start + xh * yh: this._start;
                for (var ai = 0; ai <= xh; ai++) {
                    if (vh(zh, ai, this) === false)
                        return ai + 1;
                    zh += wh?-yh : yh;
                }
                return ai;
            },
            __iterator: function(vh, wh) {
                var xh = this.size - 1, yh = this._step, zh = wh ? this._start + xh * yh: this._start, ai = 0;
                return new bb((function() {
                    var bi = zh;
                    zh += wh?-yh : yh;
                    return ai > xh ? eb() : db(vh, ai++, bi);
                }));
            },
            __deepEquals: function(vh) {
                return vh instanceof nh ? this._start === vh._start && this._end === vh._end && this._step === vh._step : l.superCall(this, nh.prototype, "__deepEquals", [vh]);
            }
        }, {}, ic);
        var oh = mh.prototype;
        oh.__toJS = oh.toArray;
        oh.first = wf.first;
        oh.last = wf.last;
        var ph = mh(0, 0), qh = function vh(wh, xh) {
            if (xh <= 0 && th)
                return th;
            if (!(this instanceof rh))
                return new rh(wh, xh);
            this._value = wh;
            this.size = xh === undefined ? Infinity : Math.max(0, xh);
            if (this.size === 0)
                th = this;
        }, rh = qh;
        (l.createClass)(qh, {
            toString: function() {
                if (this.size === 0)
                    return 'Repeat []';
                return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
            },
            get: function(vh, wh) {
                return this.has(vh) ? this._value : wh;
            },
            contains: function(vh) {
                return m(this._value, vh);
            },
            slice: function(vh, wh) {
                var xh = this.size;
                return da(vh, wh, xh) ? this : new rh(this._value, fa(wh, xh) - ea(vh, xh));
            },
            reverse: function() {
                return this;
            },
            indexOf: function(vh) {
                if (m(this._value, vh))
                    return 0;
                return - 1;
            },
            lastIndexOf: function(vh) {
                if (m(this._value, vh))
                    return this.size;
                return - 1;
            },
            __iterate: function(vh, wh) {
                for (var xh = 0; xh < this.size; xh++)
                    if (vh(this._value, xh, this) === false)
                        return xh + 1;
                return xh;
            },
            __iterator: function(vh, wh) {
                var xh = this, yh = 0;
                return new bb((function() {
                    return yh < xh.size ? db(vh, yh++, xh._value) : eb();
                }));
            },
            __deepEquals: function(vh) {
                return vh instanceof rh ? m(this._value, vh._value) : l.superCall(this, rh.prototype, "__deepEquals", [vh]);
            }
        }, {}, ic);
        var sh = qh.prototype;
        sh.last = sh.first;
        sh.has = oh.has;
        sh.take = oh.take;
        sh.skip = oh.skip;
        sh.__toJS = oh.__toJS;
        var th, uh = {
            Iterable: jb,
            Seq: ec,
            Collection: fd,
            Map: md,
            List: tf,
            Stack: mg,
            Set: ug,
            OrderedMap: bh,
            Record: ih,
            Range: mh,
            Repeat: qh,
            is: m,
            fromJS: bd
        };
        return uh;
    }
    typeof f === 'object' ? e.exports = g() : typeof define === 'function' && define.amd ? define(g) : Immutable = g();
}, null);
__d("SelectionState", ["immutable"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = g.Record({
        anchorKey: null,
        anchorOffset: null,
        focusKey: null,
        focusOffset: null,
        isBackward: false,
        hasFocus: false
    });
    for (var i in h)
        if (h.hasOwnProperty(i))
            k[i] = h[i];
    var j = h === null ? null: h.prototype;
    k.prototype = Object.create(j);
    k.prototype.constructor = k;
    k.__superConstructor__ = h;
    function k() {
        if (h !== null)
            h.apply(this, arguments);
    }
    k.prototype.getAnchorKey = function() {
        return this.anchorKey;
    };
    k.prototype.getAnchorOffset = function() {
        return this.anchorOffset;
    };
    k.prototype.getFocusKey = function() {
        return this.focusKey;
    };
    k.prototype.getFocusOffset = function() {
        return this.focusOffset;
    };
    k.prototype.getIsBackward = function() {
        return this.isBackward;
    };
    k.prototype.getHasFocus = function() {
        return this.hasFocus;
    };
    k.prototype.hasEdgeWithin = function(l, m, n) {
        var o = this.getAnchorKey(), p = this.getFocusKey();
        if (o === p && o === l) {
            var q = this.getStartOffset(), r = this.getEndOffset();
            return m <= r && q <= n;
        }
        var s;
        if (l === o) {
            s = this.getAnchorOffset();
        } else if (l === p) {
            s = this.getFocusOffset();
        } else 
            return false;
        return m <= s && n >= s;
    };
    k.prototype.isCollapsed = function() {
        return (this.getAnchorKey() === this.getFocusKey() && this.getAnchorOffset() === this.getFocusOffset());
    };
    k.prototype.getStartKey = function() {
        return this.getIsBackward() ? this.getFocusKey() : this.getAnchorKey();
    };
    k.prototype.getStartOffset = function() {
        return this.getIsBackward() ? this.getFocusOffset() : this.getAnchorOffset();
    };
    k.prototype.getEndKey = function() {
        return this.getIsBackward() ? this.getAnchorKey() : this.getFocusKey();
    };
    k.prototype.getEndOffset = function() {
        return this.getIsBackward() ? this.getAnchorOffset() : this.getFocusOffset();
    };
    e.exports = k;
}, null);
__d("MentionResultsPropTypes", ["React", "SearchableEntry", "SelectionState"], function(a, b, c, d, e, f, g, h, i) {
    var j = g.PropTypes, k = {
        viewID: j.string.isRequired,
        selection: j.instanceOf(i).isRequired,
        contextComponent: j.object.isRequired,
        mentionableEntries: j.array.isRequired,
        highlightedMentionable: j.instanceOf(h),
        onMentionSelect: j.func.isRequired,
        onMentionHighlight: j.func.isRequired,
        onMentionRenderHighlight: j.func.isRequired
    };
    e.exports = k;
}, null);
__d("MentionsLayer.react", ["Bootloader", "Locale", "MentionResultsPropTypes", "React", "areEqual"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = j.PropTypes, m = false, n = h.isRTL(), o, p, q, r, s = 5, t = j.createClass({
        displayName: "MentionsLayer",
        propTypes: Object.assign({}, i, {
            typeaheadView: l.func.isRequired,
            typeaheadViewProps: l.object
        }),
        getInitialState: function() {
            return {
                bootloaded: m
            };
        },
        componentWillMount: function() {
            if (!this.state.bootloaded)
                u(function() {
                    this.isMounted() && this.setState({
                        bootloaded: true
                    });
                }.bind(this));
        },
        _onMentionSelect: function(v, w) {
            w.preventDefault();
            this.props.onMentionSelect(v);
        },
        shouldComponentUpdate: function(v, w) {
            return (this.state.bootloaded !== w.bootloaded ||!k(this.props.mentionableEntries, v.mentionableEntries) || this.props.highlightedMentionable !== v.highlightedMentionable || this.props.characterOffset !== v.characterOffset);
        },
        render: function() {
            if (!this.state.bootloaded)
                return null;
            var v = this.props.mentionableEntries, w = this.props.selection, x = (w.isCollapsed() && w.getHasFocus() && v && v.length), y = null, z = this.props.typeaheadViewProps, aa = false, ba = false;
            if (z && z.positionAtContext) {
                aa = true;
                ba = true;
            } else if (x)
                y = r(this.props.characterOffset, n);
            var ca = {};
            if (this.props.autoflip) {
                ca.ContextualLayerAutoFlip = p;
                ca.ContextualLayerUpdateOnScroll = q;
            }
            var da = this.props.typeaheadView;
            return (j.createElement(o, {
                shown: x,
                context: this.props.contextComponent,
                contextBounds: y,
                containerWidthMatchContext: ba,
                offsetY: s,
                position: "below",
                behaviors: ca
            }, j.createElement(da, {
                id: this.props.viewID,
                viewProps: this.props.typeaheadViewProps,
                highlightedEntry: this.props.highlightedMentionable,
                entries: v || [],
                onSelect: this._onMentionSelect,
                onHighlight: this.props.onMentionHighlight,
                onRenderHighlight: this.props.onMentionRenderHighlight
            })));
        }
    });
    function u(v) {
        g.loadModules(["ContextualLayer.react", "ContextualLayerAutoFlip", "ContextualLayerUpdateOnScroll", "getMentionableRect"], function(w, x, y, z) {
            o = w;
            p = x;
            q = y;
            r = z;
            m = true;
            v();
        });
    }
    e.exports = t;
}, null);
__d("fillArray", [], function(a, b, c, d, e, f) {
    function g(h, i) {
        var j = new Array(h);
        for (var k = 0; k < h; k++)
            j[k] = i;
        return j;
    }
    e.exports = g;
}, null);
__d("DocumentCompositeDecorator.Experimental", ["immutable", "fillArray"], function(a, b, c, d, e, f, g, h) {
    var i = '.';
    function j(m) {
        "use strict";
        this.$DocumentCompositeDecorator0 = m.slice();
    }
    j.prototype.getDecorations = function(m) {
        "use strict";
        var n = h(m.getText().length, null);
        this.$DocumentCompositeDecorator0.forEach(function(o, p) {
            var q = 0, r = o.getStrategy();
            r(m, function(s, t) {
                if (k(n, s, t)) {
                    l(n, s, t, p + i + q);
                    q++;
                }
            });
        });
        return g.List(n);
    };
    j.prototype.getComponentForKey = function(m) {
        "use strict";
        var n = parseInt(m.split(i), 10);
        return this.$DocumentCompositeDecorator0[n].getComponent();
    };
    j.prototype.getPropsForKey = function(m) {
        "use strict";
        var n = parseInt(m.split(i), 10);
        return this.$DocumentCompositeDecorator0[n].getProps();
    };
    function k(m, n, o) {
        for (var p = n; p < o; p++)
            if (m[p] != null)
                return false;
        return true;
    }
    function l(m, n, o, p) {
        for (var q = n; q < o; q++)
            m[q] = p;
    }
    e.exports = j;
}, null);
__d("DocumentDecorator", [], function(a, b, c, d, e, f) {
    function g(h, i, j) {
        "use strict";
        this.$DocumentDecorator0 = h;
        this.$DocumentDecorator1 = i;
        this.$DocumentDecorator2 = j || {};
    }
    g.prototype.getStrategy = function() {
        "use strict";
        return this.$DocumentDecorator0;
    };
    g.prototype.getComponent = function() {
        "use strict";
        return this.$DocumentDecorator1;
    };
    g.prototype.getProps = function() {
        "use strict";
        return this.$DocumentDecorator2;
    };
    e.exports = g;
}, null);
__d("DocumentEntityInstance", ["ComposedEntityMutability", "ComposedEntityType", "arrayContains", "getObjectValues", "invariant"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = j(h), m = j(g);
    function n(o, p, q) {
        "use strict";
        k(i(l, o));
        k(i(m, p));
        this.$DocumentEntityInstance0 = o;
        this.$DocumentEntityInstance1 = p;
        this.$DocumentEntityInstance2 = q;
    }
    n.prototype.getType = function() {
        "use strict";
        return this.$DocumentEntityInstance0;
    };
    n.prototype.getMutability = function() {
        "use strict";
        return this.$DocumentEntityInstance1;
    };
    n.prototype.getData = function() {
        "use strict";
        return this.$DocumentEntityInstance2;
    };
    n.prototype.replaceData = function(o) {
        "use strict";
        this.$DocumentEntityInstance2 = o;
    };
    e.exports = n;
}, null);
__d("DocumentEntity", ["DocumentEntityInstance", "invariant"], function(a, b, c, d, e, f, g, h) {
    var i = {}, j = 0, k = {
        create: function(l, m, n) {
            return k.add(new g(l, m, n));
        },
        add: function(l) {
            i[++j] = l;
            return j.toString();
        },
        get: function(l) {
            var m = i[l];
            h(!!m);
            return m;
        }
    };
    e.exports = k;
}, null);
__d("EmoticonSpan.react", ["DocumentEntity", "React", "cx", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = {
        smile: "_5uj7",
        frown: "_5uj8",
        tongue: "_5uj9",
        grin: "_5uja",
        gasp: "_5ujb",
        wink: "_5ujc",
        glasses: "_5ujd",
        sunglasses: "_5ujh",
        grumpy: "_5uji",
        unsure: "_5ujj",
        cry: "_5ujw",
        devil: "_5ujx",
        angel: "_5ujy",
        kiss: "_5ujz",
        heart: "_5uk7",
        kiki: "_5ukd",
        squint: "_5ukg",
        confused: "_5ukj",
        confused_rev: "_5ukl",
        upset: "_5ukp",
        pacman: "_5ukq",
        robot: "_5ukr",
        colonthree: "_5uks",
        penguin: "_5ukt",
        putnam: "_5uku",
        shark: "_5ukv",
        like: "_5ukw",
        poop: "_5ukx"
    }, l = h.createClass({
        displayName: "EmoticonSpan",
        render: function() {
            var m = g.get(this.props.entityKey), n = m.getData().type, o = j("_1ty6", k[n]);
            return (h.createElement("span", {
                className: o,
                title: n,
                "data-offset-key": this.props.offsetKey
            }, h.createElement("span", {
                className: "_5ukz"
            }, this.props.children)));
        }
    });
    e.exports = l;
}, null);
__d("HashtagSpan.react", ["React", "cx"], function(a, b, c, d, e, f, g, h) {
    var i = g.createClass({
        displayName: "HashtagSpan",
        render: function() {
            return (g.createElement("span", {
                "data-offset-key": this.props.offsetKey,
                className: "_5u8n",
                spellCheck: false
            }, this.props.children));
        }
    });
    e.exports = i;
}, null);
__d("MentionSpan.react", ["React", "cx"], function(a, b, c, d, e, f, g, h) {
    var i = g.createClass({
        displayName: "MentionSpan",
        render: function() {
            return (g.createElement("span", {
                "data-offset-key": this.props.offsetKey,
                className: "_5u8u",
                spellCheck: false
            }, this.props.children));
        }
    });
    e.exports = i;
}, null);
__d("WeakMentionSpan.react", ["React", "cx"], function(a, b, c, d, e, f, g, h) {
    var i = g.createClass({
        displayName: "WeakMentionSpan",
        render: function() {
            return (g.createElement("span", {
                "data-offset-key": this.props.offsetKey,
                className: "_whq",
                spellCheck: false
            }, this.props.children));
        }
    });
    e.exports = i;
}, null);
__d("findRangesImmutable", [], function(a, b, c, d, e, f) {
    function g(h, i, j) {
        if (!h.size)
            return;
        var k = 0;
        h.reduce(function(l, m, n) {
            if (l !== m) {
                if (i(l))
                    j(k, n);
                k = n;
            }
            return m;
        });
        i(h.last()) && j(k, h.count());
    }
    e.exports = g;
}, null);
__d("getEntityMatcherExperimental", ["DocumentEntity", "findRangesImmutable"], function(a, b, c, d, e, f, g, h) {
    function i(j, k) {
        k = k || g.get;
        return function(l, m) {
            h(l.getEntities(), function(n) {
                return n !== null && j(k(n));
            }, m);
        };
    }
    e.exports = i;
}, null);
__d("getHashtagRegex", [], function(a, b, c, d, e, f) {
    function g() {
        var h = '\xc0-\xd6' + '\xd8-\xf6' + '\xf8-\xff' + '\u0100-\u024f' + '\u0253-\u0254' + '\u0256-\u0257' + '\u0259' + '\u025b' + '\u0263' + '\u0268' + '\u026f' + '\u0272' + '\u0289' + '\u028b' + '\u02bb' + '\u0300-\u036f' + '\u1e00-\u1eff', i = '\u0400-\u04ff' + '\u0500-\u0527' + '\u2de0-\u2dff' + '\ua640-\ua69f' + '\u0591-\u05bf' + '\u05c1-\u05c2' + '\u05c4-\u05c5' + '\u05c7' + '\u05d0-\u05ea' + '\u05f0-\u05f4' + '\ufb12-\ufb28' + '\ufb2a-\ufb36' + '\ufb38-\ufb3c' + '\ufb3e' + '\ufb40-\ufb41' + '\ufb43-\ufb44' + '\ufb46-\ufb4f' + '\u0610-\u061a' + '\u0620-\u065f' + '\u066e-\u06d3' + '\u06d5-\u06dc' + '\u06de-\u06e8' + '\u06ea-\u06ef' + '\u06fa-\u06fc' + '\u06ff' + '\u0750-\u077f' + '\u08a0' + '\u08a2-\u08ac' + '\u08e4-\u08fe' + '\ufb50-\ufbb1' + '\ufbd3-\ufd3d' + '\ufd50-\ufd8f' + '\ufd92-\ufdc7' + '\ufdf0-\ufdfb' + '\ufe70-\ufe74' + '\ufe76-\ufefc' + '\u200c-\u200c' + '\u0e01-\u0e3a' + '\u0e40-\u0e4e' + '\u1100-\u11ff' + '\u3130-\u3185' + '\uA960-\uA97F' + '\uAC00-\uD7AF' + '\uD7B0-\uD7FF' + '\uFFA1-\uFFDC', j = String.fromCharCode, k = '\u30A1-\u30FA\u30FC-\u30FE' + '\uFF66-\uFF9F' + '\uFF10-\uFF19\uFF21-\uFF3A' + '\uFF41-\uFF5A' + '\u3041-\u3096\u3099-\u309E' + '\u3400-\u4DBF' + '\u4E00-\u9FFF' + j(173824) + '-' + j(177983) + j(177984) + '-' + j(178207) + j(194560) + '-' + j(195103) + '\u3003\u3005\u303B', l = h + i + k, m = '\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6' + '\u00F8-\u0241\u0250-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EE\u037A\u0386' + '\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03CE\u03D0-\u03F5\u03F7-\u0481' + '\u048A-\u04CE\u04D0-\u04F9\u0500-\u050F\u0531-\u0556\u0559\u0561-\u0587' + '\u05D0-\u05EA\u05F0-\u05F2\u0621-\u063A\u0640-\u064A\u066E-\u066F' + '\u0671-\u06D3\u06D5\u06E5-\u06E6\u06EE-\u06EF\u06FA-\u06FC\u06FF\u0710' + '\u0712-\u072F\u074D-\u076D\u0780-\u07A5\u07B1\u0904-\u0939\u093D\u0950' + '\u0958-\u0961\u097D\u0985-\u098C\u098F-\u0990\u0993-\u09A8\u09AA-\u09B0' + '\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC-\u09DD\u09DF-\u09E1\u09F0-\u09F1' + '\u0A05-\u0A0A\u0A0F-\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32-\u0A33' + '\u0A35-\u0A36\u0A38-\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D' + '\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2-\u0AB3\u0AB5-\u0AB9\u0ABD' + '\u0AD0\u0AE0-\u0AE1\u0B05-\u0B0C\u0B0F-\u0B10\u0B13-\u0B28\u0B2A-\u0B30' + '\u0B32-\u0B33\u0B35-\u0B39\u0B3D\u0B5C-\u0B5D\u0B5F-\u0B61\u0B71\u0B83' + '\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99-\u0B9A\u0B9C\u0B9E-\u0B9F' + '\u0BA3-\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0C05-\u0C0C\u0C0E-\u0C10' + '\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C60-\u0C61\u0C85-\u0C8C' + '\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE' + '\u0CE0-\u0CE1\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39' + '\u0D60-\u0D61\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6' + '\u0E01-\u0E30\u0E32-\u0E33\u0E40-\u0E46\u0E81-\u0E82\u0E84\u0E87-\u0E88' + '\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7' + '\u0EAA-\u0EAB\u0EAD-\u0EB0\u0EB2-\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6' + '\u0EDC-\u0EDD\u0F00\u0F40-\u0F47\u0F49-\u0F6A\u0F88-\u0F8B\u1000-\u1021' + '\u1023-\u1027\u1029-\u102A\u1050-\u1055\u10A0-\u10C5\u10D0-\u10FA\u10FC' + '\u1100-\u1159\u115F-\u11A2\u11A8-\u11F9\u1200-\u1248\u124A-\u124D' + '\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0' + '\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310' + '\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C' + '\u166F-\u1676\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711' + '\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7' + '\u17DC\u1820-\u1877\u1880-\u18A8\u1900-\u191C\u1950-\u196D\u1970-\u1974' + '\u1980-\u19A9\u19C1-\u19C7\u1A00-\u1A16\u1D00-\u1DBF\u1E00-\u1E9B' + '\u1EA0-\u1EF9\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D' + '\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC' + '\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC' + '\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u2094\u2102\u2107' + '\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D' + '\u212F-\u2131\u2133-\u2139\u213C-\u213F\u2145-\u2149\u2C00-\u2C2E' + '\u2C30-\u2C5E\u2C80-\u2CE4\u2D00-\u2D25\u2D30-\u2D65\u2D6F\u2D80-\u2D96' + '\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6' + '\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3006\u3031-\u3035' + '\u303B-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF' + '\u3105-\u312C\u3131-\u318E\u31A0-\u31B7\u31F0-\u31FF\u3400-\u4DB5' + '\u4E00-\u9FBB\uA000-\uA48C\uA800-\uA801\uA803-\uA805\uA807-\uA80A' + '\uA80C-\uA822\uAC00-\uD7A3\uF900-\uFA2D\uFA30-\uFA6A\uFA70-\uFAD9' + '\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C' + '\uFB3E\uFB40-\uFB41\uFB43-\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F' + '\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A' + '\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7' + '\uFFDA-\uFFDC', n = '\u0300-\u036F\u0483-\u0486\u0591-\u05B9\u05BB-\u05BD\u05BF' + '\u05C1-\u05C2\u05C4-\u05C5\u05C7\u0610-\u0615\u064B-\u065E\u0670' + '\u06D6-\u06DC\u06DF-\u06E4\u06E7-\u06E8\u06EA-\u06ED\u0711\u0730-\u074A' + '\u07A6-\u07B0\u0901-\u0903\u093C\u093E-\u094D\u0951-\u0954\u0962-\u0963' + '\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7-\u09C8\u09CB-\u09CD\u09D7' + '\u09E2-\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47-\u0A48\u0A4B-\u0A4D' + '\u0A70-\u0A71\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD' + '\u0AE2-\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B43\u0B47-\u0B48\u0B4B-\u0B4D' + '\u0B56-\u0B57\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7' + '\u0C01-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55-\u0C56' + '\u0C82-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5-\u0CD6' + '\u0D02-\u0D03\u0D3E-\u0D43\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D82-\u0D83' + '\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2-\u0DF3\u0E31\u0E34-\u0E3A' + '\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB-\u0EBC\u0EC8-\u0ECD\u0F18-\u0F19' + '\u0F35\u0F37\u0F39\u0F3E-\u0F3F\u0F71-\u0F84\u0F86-\u0F87\u0F90-\u0F97' + '\u0F99-\u0FBC\u0FC6\u102C-\u1032\u1036-\u1039\u1056-\u1059\u135F' + '\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17B6-\u17D3\u17DD' + '\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8-\u19C9' + '\u1A17-\u1A1B\u1DC0-\u1DC3\u20D0-\u20DC\u20E1\u20E5-\u20EB\u302A-\u302F' + '\u3099-\u309A\uA802\uA806\uA80B\uA823-\uA827\uFB1E\uFE00-\uFE0F' + '\uFE20-\uFE23', o = '\u0030-\u0039\u0660-\u0669\u06F0-\u06F9\u0966-\u096F\u09E6-\u09EF' + '\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F' + '\u0CE6-\u0CEF\u0D66-\u0D6F\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29' + '\u1040-\u1049\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9' + '\uFF10-\uFF19', p = m + n + l, q = o + '_', r = p + q, s = '[' + p + ']', t = '[' + r + ']', u = '^|$|[^&/' + r + ']', v = '[#\\uFF03]', w = '(' + u + ')(' + v + ')(' + t + '*' + s + t + '*)';
        return new RegExp(w, 'ig');
    }
    e.exports = g;
}, null);
__d("getHashtagMatchesExperimental", ["getHashtagRegex"], function(a, b, c, d, e, f, g) {
    var h = g();
    function i(j, k) {
        var l = j.getText(), m, n, o, p;
        while ((m = h.exec(l)) !== null) {
            n = m.index + m[1].length;
            o = m[2];
            p = m[3];
            k(n, n + o.length + p.length);
        }
    }
    e.exports = i;
}, null);
__d("getMentionsInputDecorator", ["ComposedEntityType", "DocumentCompositeDecorator.Experimental", "DocumentDecorator", "EmoticonSpan.react", "HashtagSpan.react", "MentionSpan.react", "WeakMentionSpan.react", "getEntityMatcherExperimental", "getHashtagMatchesExperimental"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    var p = g.EMOTICON, q = g.MENTION, r;
    function s() {
        if (!r)
            r = new h([new i(n(function(t) {
                var u = t.getData();
                return t.getType() === q && u && u.isWeak;
            }), m), new i(n(function(t) {
                return t.getType() === q;
            }), l), new i(n(function(t) {
                return t.getType() === p;
            }), j), new i(o, k)]);
        return r;
    }
    e.exports = s;
}, null);
__d("ContentStateInlineStyle", ["immutable"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        add: function(j, k, l) {
            return i(j, k, l, true);
        },
        remove: function(j, k, l) {
            return i(j, k, l, false);
        }
    };
    function i(j, k, l, m) {
        var n = j.getBlockMap(), o = k.getStartKey(), p = k.getStartOffset(), q = k.getEndKey(), r = k.getEndOffset(), s = n.skipUntil(function(t, u) {
            return u === o;
        }).takeUntil(function(t, u) {
            return u === q;
        }).concat(new g.Map([[q, n.get(q)]])).map(function(t, u) {
            var v, w;
            if (o === q) {
                v = p;
                w = r;
            } else {
                v = u === o ? p : 0;
                w = u === q ? r : t.getLength();
            }
            var x = t.getInlineStyles(), y = x.slice(v, w).map(function(z) {
                return m ? z | l : z & (~l);
            });
            return t.set('inlineStyles', x.slice(0, v).concat(y, x.slice(w)).toVector());
        });
        return j.merge({
            blockMap: n.merge(s),
            selectionBefore: k,
            selectionAfter: k
        });
    }
    e.exports = h;
}, null);
__d("DocumentRemovalDirection", [], function(a, b, c, d, e, f) {
    var g = {
        BACKWARD: 0,
        FORWARD: 1
    };
    e.exports = g;
}, null);
__d("applyEntityToContentBlock", ["immutable"], function(a, b, c, d, e, f, g) {
    "use strict";
    function h(i, j, k, l) {
        var m = i.getEntities(), n = m.toSeq().slice(0, j).concat(g.List(g.Repeat(l, k - j)), m.toSeq().slice(k)).toList();
        return i.set('entities', n);
    }
    e.exports = h;
}, null);
__d("applyEntityToContentState", ["applyEntityToContentBlock"], function(a, b, c, d, e, f, g) {
    "use strict";
    function h(i, j, k) {
        var l = i.getBlockMap(), m = j.getStartKey(), n = j.getStartOffset(), o = j.getEndKey(), p = j.getEndOffset(), q = l.skipUntil(function(r, s) {
            return s === m;
        }).takeUntil(function(r, s) {
            return s === o;
        }).merge(l.get(o)).map(function(r) {
            var s = l.get(r), t, u;
            if (m === o) {
                t = n;
                u = p;
            } else {
                t = r === m ? n : 0;
                u = r === o ? 0 : s.getLength();
            }
            return g(s, t, u, k);
        });
        return i.merge({
            blockMap: l.merge(q),
            selectionBefore: j,
            selectionAfter: j
        });
    }
    e.exports = h;
}, null);
__d("DocumentEntitySegmentsExperimental", ["DocumentRemovalDirection"], function(a, b, c, d, e, f, g) {
    var h = g.FORWARD, i = {
        getRemovalRange: function(j, k, l, m, n) {
            var o = l.split(' ');
            o = o.map(function(y, z) {
                if (n === h) {
                    if (z > 0)
                        return ' ' + y;
                } else if (z < o.length - 1)
                    return y + ' ';
                return y;
            });
            var p = m, q, r, s = null, t = null;
            for (var u = 0; u < o.length; u++) {
                r = o[u];
                q = p + r.length;
                if (j < q && p < k) {
                    if (s !== null) {
                        t = q;
                    } else {
                        s = p;
                        t = q;
                    }
                } else if (s !== null)
                    break;
                p = q;
            }
            var v = m + l.length, w = s === m, x = t === v;
            if ((!w && x) || (w&&!x))
                if (n === h) {
                    if (t !== v)
                        t++;
                } else if (s !== m)
                    s--;
            return {
                start: s,
                end: t
            };
        }
    };
    e.exports = i;
}, null);
__d("checkRangeOverlap", ["invariant"], function(a, b, c, d, e, f, g) {
    function h(i, j, k, l) {
        g(i <= j && k <= l);
        return (i < l && j > k);
    }
    e.exports = h;
}, null);
__d("getRangesForDocumentEntityExperimental", ["findRangesImmutable", "invariant"], function(a, b, c, d, e, f, g, h) {
    function i(j, k) {
        var l = [];
        g(j, function(m) {
            return m === k;
        }, function(m, n) {
            l.push({
                start: m,
                end: n
            });
        });
        h(!!l.length);
        return l;
    }
    e.exports = i;
}, null);
__d("getCharacterRemovalRangeExperimental", ["ComposedEntityMutability", "DocumentEntity", "DocumentEntitySegmentsExperimental", "checkRangeOverlap", "getRangesForDocumentEntityExperimental", "invariant"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = g.MUTABLE, n = g.IMMUTABLE;
    function o(p, q, r) {
        var s = q.getStartOffset(), t = q.getEndOffset(), u = p.getEntities(), v = u.get(s);
        if (!v)
            return q;
        var w = h.get(v), x = w.getMutability();
        if (x === m)
            return q;
        var y = k(u, v).filter(function(ba) {
            return j(s, t, ba.start, ba.end);
        });
        l(y.length == 1);
        var z = y[0];
        if (x === n)
            return q.merge({
                anchorOffset: z.start,
                focusOffset: z.end,
                isBackward: false
            });
        var aa = i.getRemovalRange(s, t, p.getText().slice(z.start, z.end), z.start, r);
        return q.merge({
            anchorOffset: aa.start,
            focusOffset: aa.end,
            isBackward: false
        });
    }
    e.exports = o;
}, null);
__d("generateBlockKey", [], function(a, b, c, d, e, f) {
    var g = {}, h = Math.pow(2, 24);
    function i() {
        var j;
        while (j === undefined || g.hasOwnProperty(j) ||!isNaN( + j))
            j = Math.floor(Math.random() * h).toString(32);
        g[j] = true;
        return j;
    }
    e.exports = i;
}, null);
__d("removeEntitiesAtEdges", ["ComposedEntityMutability", "DocumentEntity", "immutable", "findRangesImmutable", "isEmpty"], function(a, b, c, d, e, f, g, h, i, j, k) {
    "use strict";
    var l = g.MUTABLE;
    function m(p, q) {
        var r = p.getBlockMap(), s = {}, t = q.getStartKey(), u = q.getStartOffset(), v = r.get(t), w = o(v, u);
        if (w)
            s[t] = w;
        var x = q.getEndKey(), y = q.getEndOffset(), z = r.get(x);
        if (t === x && w)
            z = w;
        var aa = o(z, y);
        if (aa)
            s[x] = aa;
        if (k(s))
            return p.set('selectionAfter', q);
        return p.merge({
            blockMap: r.merge(s),
            selectionAfter: q
        });
    }
    function n(p, q, r) {
        var s;
        j(p, function(t) {
            return t === q;
        }, function(t, u) {
            if (t <= r && u >= r)
                s = {
                    start: t,
                    end: u
                };
        });
        return s;
    }
    function o(p, q) {
        var r = p.getEntities(), s = r.get(q - 1), t = r.get(q);
        if (t && t === s) {
            var u = h.get(t);
            if (u.getMutability() !== l) {
                var v = n(r, t, q);
                return p.set('entities', r.toSeq().slice(0, v.start).concat(i.Repeat(null, v.end - v.start), r.toSeq().slice(v.end)).toList());
            }
        }
        return null;
    }
    e.exports = m;
}, null);
__d("getContentStateFragment", ["generateBlockKey", "removeEntitiesAtEdges"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    function i(j, k) {
        var l = k.getStartKey(), m = k.getStartOffset(), n = k.getEndKey(), o = k.getEndOffset(), p = h(j, k), q = p.getBlockMap(), r = q.keySeq(), s = r.indexOf(l), t = r.indexOf(n) + 1;
        return q.slice(s, t).map(function(u, v) {
            var w = g(), x = u.getText(), y = u.getInlineStyles(), z = u.getEntities();
            if (l === n)
                return u.merge({
                    key: w,
                    text: x.slice(m, o),
                    inlineStyles: y.slice(m, o),
                    entities: z.slice(m, o)
                });
            if (v === l)
                return u.merge({
                    key: w,
                    text: x.slice(m),
                    inlineStyles: y.slice(m),
                    entities: z.slice(m)
                });
            if (v === n)
                return u.merge({
                    key: w,
                    text: x.slice(0, o),
                    inlineStyles: y.slice(0, o),
                    entities: z.slice(0, o)
                });
            return u.set('key', w);
        });
    }
    e.exports = i;
}, null);
__d("createOrderedMapFromBlockArray", ["immutable"], function(a, b, c, d, e, f, g) {
    function h(i) {
        return g.OrderedMap(g.Seq(i).toKeyedSeq().mapKeys(function(j, k) {
            return k.getKey();
        }));
    }
    e.exports = h;
}, null);
__d("insertFragmentIntoContentState", ["createOrderedMapFromBlockArray", "generateBlockKey", "invariant"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    function j(k, l, m) {
        i(l.isCollapsed());
        var n = l.getStartKey(), o = l.getStartOffset(), p = k.getBlockMap(), q = m.size, r, s;
        if (q === 1) {
            var t = p.get(n), u = m.first(), v = t.getText(), w = t.getInlineStyles(), x = t.getEntities(), y = t.merge({
                text: (v.slice(0, o) + u.getText() + v.slice(o)),
                inlineStyles: w.toSeq().slice(0, o).concat(u.getInlineStyles(), w.toSeq().slice(o)).toList(),
                entities: x.toSeq().slice(0, o).concat(u.getEntities(), x.toSeq().slice(o)).toList()
            });
            p = p.set(n, y);
            r = n;
            s = o + u.getText().length;
            return k.merge({
                blockMap: p.set(n, y),
                selectionBefore: l,
                selectionAfter: l.merge({
                    anchorKey: r,
                    anchorOffset: s,
                    focusKey: r,
                    focusOffset: s,
                    isBackward: false
                })
            });
        }
        var z = [];
        k.getBlockMap().forEach(function(aa, ba) {
            if (ba !== n) {
                z.push(aa);
                return;
            }
            var ca = aa.getText(), da = aa.getInlineStyles(), ea = aa.getEntities(), fa = ca.length, ga = ca.slice(0, o), ha = da.slice(0, o), ia = ea.slice(0, o), ja = m.first(), ka = aa.merge({
                text: ga + ja.getText(),
                inlineStyles: (ha.concat(ja.getInlineStyles())),
                entities: (ia.concat(ja.getEntities()))
            });
            z.push(ka);
            m.slice(1, q - 1).forEach(function(qa) {
                z.push(qa.set('key', h()));
            });
            var la = ca.slice(o, fa), ma = da.slice(o, fa), na = ea.slice(o, fa), oa = m.last();
            r = h();
            var pa = oa.merge({
                key: r,
                text: oa.getText() + la,
                inlineStyles: (oa.getInlineStyles().concat(ma)),
                entities: (oa.getEntities().concat(na))
            });
            z.push(pa);
        });
        s = m.last().getLength();
        return k.merge({
            blockMap: g(z),
            selectionBefore: l,
            selectionAfter: l.merge({
                anchorKey: r,
                anchorOffset: s,
                focusKey: r,
                focusOffset: s,
                isBackward: false
            })
        });
    }
    e.exports = j;
}, null);
__d("insertTextIntoContentState", ["invariant"], function(a, b, c, d, e, f, g) {
    "use strict";
    function h(j, k, l, m, n) {
        g(k.isCollapsed());
        var o = l.length;
        g(o === m.size && o === n.size);
        if (!l.length)
            return j;
        var p = j.getBlockMap(), q = k.getStartKey(), r = k.getStartOffset(), s = p.get(q), t = s.getText(), u = s.merge({
            text: (t.slice(0, r) + l + t.slice(r, s.getLength())),
            inlineStyles: i(s.getInlineStyles(), r, m),
            entities: i(s.getEntities(), r, n)
        }), v = r + o;
        return j.merge({
            blockMap: p.set(q, u),
            selectionAfter: k.merge({
                anchorOffset: v,
                focusOffset: v
            })
        });
    }
    function i(j, k, l) {
        return j.toSeq().slice(0, k).concat(l, j.toSeq().slice(k)).toList();
    }
    e.exports = h;
}, null);
__d("removeRangeFromContentState", ["immutable"], function(a, b, c, d, e, f, g) {
    "use strict";
    function h(i, j) {
        if (j.isCollapsed())
            return i;
        var k = i.getBlockMap(), l = j.getStartKey(), m = j.getStartOffset(), n = j.getEndKey(), o = j.getEndOffset(), p = k.get(l), q = k.get(n), r = p.merge({
            text: (p.getText().slice(0, m) + q.getText().slice(o)),
            inlineStyles: p.getInlineStyles().toSeq().slice(0, m).concat(q.getInlineStyles().toSeq().slice(o)).toList(),
            entities: p.getEntities().toSeq().slice(0, m).concat(q.getEntities().toSeq().slice(o)).toList()
        }), s = k.toSeq().skipUntil(function(t, u) {
            return u === l;
        }).takeUntil(function(t, u) {
            return u === n;
        }).concat(g.Map([[n, null]])).map(function(t, u) {
            return u === l ? r : null;
        });
        k = k.merge(s).filter(function(t) {
            return !!t;
        });
        return i.merge({
            blockMap: k,
            selectionBefore: j,
            selectionAfter: j.merge({
                anchorKey: l,
                anchorOffset: m,
                focusKey: l,
                focusOffset: m,
                isBackward: false
            })
        });
    }
    e.exports = h;
}, null);
__d("setBlockTypeForContentState", ["immutable"], function(a, b, c, d, e, f, g) {
    "use strict";
    function h(i, j, k) {
        var l = j.getStartKey(), m = j.getEndKey(), n = i.getBlockMap(), o = n.toSeq().skipUntil(function(p, q) {
            return q === l;
        }).takeUntil(function(p, q) {
            return q === m;
        }).concat(new g.Map([[m, n.get(m)]])).map(function(p) {
            return p.set('type', k);
        });
        return i.merge({
            blockMap: n.merge(o),
            selectionBefore: j,
            selectionAfter: j
        });
    }
    e.exports = h;
}, null);
__d("splitBlockInContentState", ["generateBlockKey", "invariant"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    function i(j, k) {
        h(k.isCollapsed());
        var l = k.getAnchorKey(), m = k.getAnchorOffset(), n = j.getBlockMap(), o = n.get(l), p = o.getText(), q = o.getInlineStyles(), r = o.getEntities(), s = o.merge({
            text: p.slice(0, m),
            inlineStyles: q.slice(0, m),
            entities: r.slice(0, m)
        }), t = g(), u = s.merge({
            key: t,
            text: p.slice(m),
            inlineStyles: q.slice(m),
            entities: r.slice(m)
        }), v = n.toSeq().takeUntil(function(y) {
            return y === o;
        }), w = n.toSeq().skipUntil(function(y) {
            return y === o;
        }).rest(), x = v.concat([[s.getKey(), s], [u.getKey(), u]], w).toOrderedMap();
        return j.merge({
            blockMap: x,
            selectionBefore: k,
            selectionAfter: k.merge({
                anchorKey: t,
                anchorOffset: 0,
                focusKey: t,
                focusOffset: 0,
                isBackward: false
            })
        });
    }
    e.exports = i;
}, null);
__d("DocumentModifierExperimental", ["ComposedInlineStyle", "ContentStateInlineStyle", "DocumentRemovalDirection", "immutable", "applyEntityToContentState", "getCharacterRemovalRangeExperimental", "getContentStateFragment", "insertFragmentIntoContentState", "insertTextIntoContentState", "invariant", "removeEntitiesAtEdges", "removeRangeFromContentState", "setBlockTypeForContentState", "splitBlockInContentState"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
    "use strict";
    var u = {
        replaceText: function(v, w, x, y, z) {
            if (y === undefined)
                y = g.NONE;
            if (z === undefined)
                z = null;
            var aa = q(v, w), ba = r(aa, w);
            return o(ba, ba.getSelectionAfter(), x, j.List(j.Repeat(y, x.length)), j.List(j.Repeat(z, x.length)));
        },
        insertText: function(v, w, x, y, z) {
            p(w.isCollapsed());
            if (y === undefined)
                y = g.NONE;
            if (z === undefined)
                z = null;
            var aa = q(v, w);
            return o(aa, aa.getSelectionAfter(), x, j.List(j.Repeat(y, x.length)), j.List(j.Repeat(z, x.length)));
        },
        moveText: function(v, w, x) {
            var y = m(v, w), z = u.removeRange(v, w, i.BACKWARD);
            return u.replaceWithFragment(z, x, y);
        },
        replaceWithFragment: function(v, w, x) {
            var y = q(v, w), z = r(y, w);
            return n(z, z.getSelectionAfter(), x);
        },
        removeRange: function(v, w, x) {
            if (w.getAnchorKey() === w.getFocusKey()) {
                var y = w.getAnchorKey(), z = w.getStartOffset(), aa = w.getEndOffset(), ba = v.getBlockForKey(y), ca = ba.getEntities(), da = ca.get(z), ea = ca.get(aa - 1);
                if (da && da === ea) {
                    var fa = l(ba, w, x);
                    return r(v, fa);
                }
            }
            var ga = q(v, w);
            return r(ga, w);
        },
        splitBlock: function(v, w) {
            var x = q(v, w), y = r(x, w);
            return t(y, y.getSelectionAfter());
        },
        applyInlineStyle: function(v, w, x) {
            return h.add(v, w, x);
        },
        removeInlineStyle: function(v, w, x) {
            return h.remove(v, w, x);
        },
        setBlockType: function(v, w, x) {
            return s(v, w, x);
        },
        applyEntity: function(v, w, x) {
            var y = q(v, w);
            return k(y, w, x);
        }
    };
    e.exports = u;
}, null);
__d("EditorChangeType", ["keyMirror"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = g({
        UNDO: true,
        REDO: true,
        CHANGE_SELECTION: true,
        INSERT_CHARACTERS: true,
        BACKSPACE_CHARACTER: true,
        DELETE_CHARACTER: true,
        REMOVE_RANGE: true,
        SPLIT_BLOCK: true,
        INSERT_FRAGMENT: true,
        CHANGE_INLINE_STYLE: true,
        CHANGE_BLOCK_TYPE: true,
        APPLY_ENTITY: true
    });
    e.exports = h;
}, null);
__d("BlockTree", ["immutable", "emptyFunction", "findRangesImmutable"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = g.List, k = h.thatReturnsTrue, l = '-', m = g.Record({
        start: null,
        end: null
    }), n = g.Record({
        start: null,
        end: null,
        decoratorKey: null,
        leaves: null
    }), o = {
        generate: function(q, r) {
            var s = q.getText().length;
            if (!s)
                return j.of(new n({
                    start: 0,
                    end: 0,
                    decoratorKey: null,
                    leaves: j.of(new m({
                        start: 0,
                        end: 0
                    }))
                }));
            var t = [], u = r ? r.getDecorations(q): g.List(g.Repeat(null, s)), v = q.getInlineStyles();
            i(u, k, function(w, x) {
                t.push(new n({
                    start: w,
                    end: x,
                    decoratorKey: u.get(w),
                    leaves: p(v.slice(w, x), w)
                }));
            });
            return j(t);
        },
        getFingerprint: function(q) {
            return q.map(function(r) {
                var s = r.get('decoratorKey'), t = s !== null ? s + '.' + (r.get('end') - r.get('start')): '';
                return '' + t + '.' + r.get('leaves').size;
            }).join(l);
        }
    };
    function p(q, r) {
        var s = [];
        i(q, k, function(t, u) {
            s.push(new m({
                start: t + r,
                end: u + r
            }));
        });
        return j(s);
    }
    e.exports = o;
}, null);
__d("EditorState", ["BlockTree", "ComposedInlineStyle", "EditorChangeType", "immutable", "SelectionState"], function(a, b, c, d, e, f, g, h, i, j, k) {
    "use strict";
    var l = j.Record({
        allowUndo: true,
        currentContent: null,
        decorator: null,
        forceSelection: false,
        inCompositionMode: false,
        inlineStyleOverride: null,
        lastChangeType: null,
        nativelyRenderedContent: null,
        redoStack: null,
        selection: null,
        treeMap: null,
        undoStack: null
    });
    m.create = function(t) {
        t.treeMap = n(t.currentContent, t.decorator);
        return new m(new l(t));
    };
    m.set = function(t, u) {
        var v = t.getImmutable().withMutations(function(w) {
            var x = w.get('decorator'), y = x;
            if (u.decorator === null) {
                y = null;
            } else if (u.decorator)
                y = u.decorator;
            var z = u.currentContent || t.getCurrentContent();
            if (y !== x) {
                w.merge({
                    treeMap: n(z, y),
                    nativelyRenderedContent: null
                });
                return;
            }
            var aa = t.getCurrentContent();
            if (z !== aa)
                w.set('treeMap', o(t, z.getBlockMap(), y));
            w.merge(u);
        });
        return new m(v);
    };
    m.prototype.toJS = function() {
        return this.getImmutable().toJS();
    };
    m.prototype.getAllowUndo = function() {
        return this.getImmutable().get('allowUndo');
    };
    m.prototype.getCurrentContent = function() {
        return this.getImmutable().get('currentContent');
    };
    m.prototype.getUndoStack = function() {
        return this.getImmutable().get('undoStack');
    };
    m.prototype.getRedoStack = function() {
        return this.getImmutable().get('redoStack');
    };
    m.prototype.getSelection = function() {
        return this.getImmutable().get('selection');
    };
    m.prototype.getDecorator = function() {
        return this.getImmutable().get('decorator');
    };
    m.prototype.isInCompositionMode = function() {
        return this.getImmutable().get('inCompositionMode');
    };
    m.prototype.mustForceSelection = function() {
        return this.getImmutable().get('forceSelection');
    };
    m.prototype.getNativelyRenderedContent = function() {
        return this.getImmutable().get('nativelyRenderedContent');
    };
    m.prototype.getLastChangeType = function() {
        return this.getImmutable().get('lastChangeType');
    };
    m.prototype.getInlineStyleOverride = function() {
        return this.getImmutable().get('inlineStyleOverride');
    };
    m.prototype.getCurrentInlineStyle = function() {
        var t = this.getInlineStyleOverride();
        if (t != null)
            return t;
        var u = this.getCurrentContent(), v = this.getSelection();
        if (v.isCollapsed())
            return q(u, v);
        return r(u, v);
    };
    m.prototype.getBlockTree = function(t) {
        return this.getImmutable().getIn(['treeMap', t]);
    };
    m.prototype.isAtDocumentStart = function() {
        var t = this.getCurrentContent().getBlockMap().first().getKey();
        return this.getSelection().hasEdgeWithin(t, 0, 0);
    };
    m.prototype.isAtDocumentEnd = function() {
        var t = this.getCurrentContent(), u = t.getBlockMap(), v = u.last(), w = v.getLength();
        return this.getSelection().hasEdgeWithin(v.getKey(), w, w);
    };
    m.updateSelection = function(t, u, v) {
        return m.set(t, {
            selection: u,
            forceSelection: !!v,
            nativelyRenderedContent: null,
            inlineStyleOverride: null
        });
    };
    m.moveSelectionToEnd = function(t) {
        var u = t.getCurrentContent(), v = u.getLastBlock(), w = v.getKey(), x = v.getLength();
        return m.updateSelection(t, new k({
            anchorKey: w,
            anchorOffset: x,
            focusKey: w,
            focusOffset: x,
            isBackward: false
        }));
    };
    m.moveFocusToEnd = function(t) {
        var u = m.moveSelectionToEnd(t);
        return m.updateSelection(u, u.getSelection().set('hasFocus', true), true);
    };
    m.push = function(t, u, v) {
        if (t.getCurrentContent() === u)
            return t;
        var w = v !== i.INSERT_CHARACTERS;
        if (!t.getAllowUndo())
            return m.set(t, {
                currentContent: u,
                lastChangeType: v,
                selection: u.getSelectionAfter(),
                forceSelection: w,
                inlineStyleOverride: null
            });
        var x = t.getSelection(), y = t.getCurrentContent(), z = t.getUndoStack(), aa = u;
        if (x !== y.getSelectionAfter() || p(t, v)) {
            z = z.push(y);
            aa = aa.set('selectionBefore', x);
        } else if (v === i.INSERT_CHARACTERS || v === i.BACKSPACE_CHARACTER || v === i.DELETE_CHARACTER)
            aa = aa.set('selectionBefore', y.getSelectionBefore());
        return m.set(t, {
            currentContent: aa,
            undoStack: z,
            redoStack: j.Stack(),
            lastChangeType: v,
            selection: u.getSelectionAfter(),
            forceSelection: w,
            inlineStyleOverride: null
        });
    };
    m.undo = function(t) {
        if (!t.getAllowUndo())
            return t;
        var u = t.getUndoStack(), v = u.peek();
        if (!v)
            return t;
        var w = t.getCurrentContent();
        return m.set(t, {
            currentContent: v,
            undoStack: u.shift(),
            redoStack: t.getRedoStack().push(w),
            forceSelection: true,
            inlineStyleOverride: null,
            lastChangeType: i.UNDO,
            nativelyRenderedContent: null,
            selection: w.getSelectionBefore()
        });
    };
    m.redo = function(t) {
        if (!t.getAllowUndo())
            return t;
        var u = t.getRedoStack(), v = u.peek();
        if (!v)
            return t;
        var w = t.getCurrentContent();
        return m.set(t, {
            currentContent: v,
            undoStack: t.getUndoStack().push(w),
            redoStack: u.shift(),
            forceSelection: true,
            inlineStyleOverride: null,
            lastChangeType: i.REDO,
            nativelyRenderedContent: null,
            selection: v.getSelectionAfter()
        });
    };
    function m(t) {
        this.$EditorState0 = t;
    }
    m.prototype.getImmutable = function() {
        return this.$EditorState0;
    };
    function n(t, u) {
        return t.getBlockMap().map(function(v) {
            return g.generate(v, u);
        });
    }
    function o(t, u, v) {
        var w = t.getCurrentContent().getBlockMap(), x = t.getImmutable().get('treeMap');
        return x.merge(u.filter(function(y, z) {
            return y !== w.get(z);
        }).map(function(y) {
            return g.generate(y, v);
        }));
    }
    function p(t, u) {
        var v = t.getLastChangeType();
        return (u !== v || (u !== i.INSERT_CHARACTERS && u !== i.BACKSPACE_CHARACTER && u !== i.DELETE_CHARACTER));
    }
    function q(t, u) {
        var v = u.getStartKey(), w = u.getStartOffset(), x = t.getBlockForKey(v), y = x.getInlineStyles();
        if (w > 0)
            return y.get(w - 1);
        if (x.getLength())
            return y.get(0);
        return s(t, v);
    }
    function r(t, u) {
        var v = u.getStartKey(), w = u.getStartOffset(), x = t.getBlockForKey(v), y = x.getInlineStyles();
        if (w < x.getLength())
            return y.get(w);
        if (w > 0)
            return y.get(w - 1);
        return s(t, v);
    }
    function s(t, u) {
        var v = t.getBlockBefore(u), w;
        while (v) {
            w = v.getLength();
            if (w)
                return v.getInlineStyles().get(w - 1);
            v = t.getBlockBefore(v.getKey());
        }
        return h.NONE;
    }
    e.exports = m;
}, null);
__d("AbstractTextEditorPlaceholder.Experimental.react", ["EditorState", "React", "cx"], function(a, b, c, d, e, f, g, h, i) {
    var j = h.PropTypes, k = h.createClass({
        displayName: "AbstractTextEditorPlaceholder",
        propTypes: {
            editorState: j.instanceOf(g).isRequired,
            text: j.string.isRequired
        },
        shouldComponentUpdate: function(l, m) {
            if (this.props.text !== l.text)
                return true;
            var n = this.props.editorState, o = l.editorState, p = n.getSelection(), q = o.getSelection();
            return (p.getHasFocus() !== q.getHasFocus());
        },
        render: function() {
            var l = this.props.editorState.getSelection().getHasFocus(), m = (("_5ywb") + (l ? ' ' + "_5ywc" : ''));
            return (h.createElement("div", {
                className: m
            }, this.props.text));
        }
    });
    e.exports = k;
}, null);
__d("DocumentCommands", ["keyMirror"], function(a, b, c, d, e, f, g) {
    var h = g({
        UNDO: true,
        REDO: true,
        DELETE: true,
        DELETE_WORD: true,
        BACKSPACE: true,
        BACKSPACE_WORD: true,
        BACKSPACE_TO_END_OF_BLOCK: true,
        BOLD: true,
        ITALIC: true,
        UNDERLINE: true,
        CODE: true,
        INSERT_BLOCK_DELIMITER: true,
        TRANSPOSE_CHARACTERS: true,
        MOVE_SELECTION_TO_START_OF_BLOCK: true,
        MOVE_SELECTION_TO_END_OF_BLOCK: true,
        SECONDARY_CUT: true,
        SECONDARY_PASTE: true
    });
    e.exports = h;
}, null);
__d("getDefaultKeyBinding", ["DocumentCommands", "Keys", "UserAgent"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = i.isPlatform('Mac OS X'), k = i.isPlatform('Windows'), l = i.isBrowser('Firefox'), m = j && l && l < 29;
    function n(u) {
        return u.ctrlKey&&!u.altKey;
    }
    function o(u) {
        return j ? (u.metaKey&&!u.altKey) : n(u);
    }
    function p(u) {
        return (j && u.altKey) || n(u);
    }
    function q(u) {
        if (o(u))
            return u.shiftKey ? g.REDO : g.UNDO;
    }
    function r(u) {
        if (k && u.shiftKey)
            return null;
        return p(u) ? g.DELETE_WORD : g.DELETE;
    }
    function s(u) {
        if (o(u) && j)
            return g.BACKSPACE_TO_END_OF_BLOCK;
        return p(u) ? g.BACKSPACE_WORD : g.BACKSPACE;
    }
    function t(u) {
        switch (u.keyCode) {
        case 66:
            return o(u) ? g.BOLD : null;
        case 68:
            return n(u) ? g.DELETE : null;
        case 72:
            return n(u) ? g.BACKSPACE : null;
        case 73:
            return o(u) ? g.ITALIC : null;
        case 74:
            return o(u) ? g.CODE : null;
        case 75:
            if (!k && n(u))
                return g.SECONDARY_CUT;
            return null;
        case 79:
            return n(u) ? g.INSERT_BLOCK_DELIMITER : null;
        case 84:
            return j && n(u) ? g.TRANSPOSE_CHARACTERS : null;
        case 85:
            return o(u) ? g.UNDERLINE : null;
        case 89:
            if (n(u))
                return k ? g.REDO : g.SECONDARY_PASTE;
            return null;
        case 90:
            return q(u) || null;
        case h.DELETE:
            return r(u);
        case h.BACKSPACE:
            return s(u);
        case h.LEFT:
            return (m && o(u) ? g.MOVE_SELECTION_TO_START_OF_BLOCK : null);
        case h.RIGHT:
            return (m && o(u) ? g.MOVE_SELECTION_TO_END_OF_BLOCK : null);
        default:
            return null;
        }
    }
    e.exports = t;
}, null);
__d("AbstractTextEditorProps.Experimental", ["EditorState", "React", "emptyFunction", "getDefaultKeyBinding"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = i.thatReturns(''), l = h.PropTypes, m = {
        propTypes: {
            editorState: l.instanceOf(g).isRequired,
            placeholder: l.string,
            textAlignment: l.oneOf(['left', 'center', 'right']),
            blockStyleFn: l.func,
            inlineStyleFn: l.func,
            keyBindingFn: l.func,
            spellCheck: l.bool,
            handleReturn: l.func,
            handleKeyCommand: l.func,
            handleBeforeInput: l.func,
            handlePastedFiles: l.func,
            onEscape: l.func,
            onTab: l.func,
            onUpArrow: l.func,
            onDownArrow: l.func,
            onBlur: l.func,
            onFocus: l.func
        },
        getDefaultProps: function() {
            return {
                blockStyleFn: k,
                inlineStyleFn: k,
                keyBindingFn: j,
                spellCheck: false
            };
        }
    };
    e.exports = m;
}, null);
__d("DocumentOffsetKey", [], function(a, b, c, d, e, f) {
    var g = '-', h = {
        encode: function(i, j, k) {
            return i + g + j + g + k;
        },
        decode: function(i) {
            var j = i.split(g), k = j[0], l = j[1], m = j[2];
            return {
                blockKey: k,
                decoratorKey: parseInt(l, 10),
                leafKey: parseInt(m, 10)
            };
        }
    };
    e.exports = h;
}, null);
__d("ElementForBlockType", ["ComposedBlockType"], function(a, b, c, d, e, f, g) {
    var h = {
        getElement: function(i) {
            switch (i) {
            case g.HEADER_ONE:
                return 'h2';
            case g.HEADER_TWO:
                return 'h3';
            case g.UNORDERED_LIST_ITEM:
            case g.ORDERED_LIST_ITEM:
                return 'li';
            case g.BLOCKQUOTE:
                return 'blockquote';
            case g.MEDIA:
                return 'figure';
            default:
                return 'div';
            }
        },
        getWrapperElement: function(i) {
            switch (i) {
            case g.UNORDERED_LIST_ITEM:
                return 'ul';
            case g.ORDERED_LIST_ITEM:
                return 'ol';
            case g.CODE:
                return 'pre';
            default:
                return null;
            }
        }
    };
    e.exports = h;
}, null);
__d("ContentBlock", ["immutable"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = g.Record({
        key: null,
        type: null,
        text: null,
        inlineStyles: null,
        entities: null
    });
    for (var i in h)
        if (h.hasOwnProperty(i))
            k[i] = h[i];
    var j = h === null ? null: h.prototype;
    k.prototype = Object.create(j);
    k.prototype.constructor = k;
    k.__superConstructor__ = h;
    function k() {
        if (h !== null)
            h.apply(this, arguments);
    }
    k.prototype.getKey = function() {
        return this.key;
    };
    k.prototype.getType = function() {
        return this.type;
    };
    k.prototype.getText = function() {
        return this.text;
    };
    k.prototype.getLength = function() {
        return this.getText().length;
    };
    k.prototype.getInlineStyles = function() {
        return this.inlineStyles;
    };
    k.prototype.getEntities = function() {
        return this.entities;
    };
    e.exports = k;
}, null);
__d("DocumentCharacters", [], function(a, b, c, d, e, f) {
    var g = {
        BLOCK_DELIMITER: '\u000D',
        SOFT_NEWLINE: '\u000A',
        PHOTO: '\ud83d\udcf7',
        VIDEO: '\ud83d\udcf9'
    };
    e.exports = g;
}, null);
__d("TextEditorTextNode.react", ["DOMPropertyOperations", "ReactBrowserComponentMixin", "ReactComponent", "ReactElement", "UserAgent_DEPRECATED", "escapeTextForBrowser", "getTextContentAccessor"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    "use strict";
    var n = k.ie() <= 11, o = i.BackendIDOperations, p = m();
    function q(y) {
        return n ? y[p] === '\n' : y.tagName === 'BR';
    }
    function r(y) {
        o.dangerouslyReplaceNodeWithMarkupByID(y, n ? u(y) : t(y));
    }
    function s(y, z) {
        if (n) {
            o.updateTextContentByID(y, z);
        } else 
            o.dangerouslyReplaceNodeWithMarkupByID(y, v(y, z));
    }
    function t(y) {
        return '<br ' + g.createMarkupForID(y) + ' />';
    }
    function u(y) {
        return v(y, '\n');
    }
    function v(y, z) {
        return ('<span ' + g.createMarkupForID(y) + '>' + l(z) + '</span>');
    }
    var w = function(y) {};
    Object.assign(w.prototype, i.Mixin);
    Object.assign(w.prototype, h);
    Object.assign(w.prototype, {
        mountComponent: function(y, z, aa) {
            i.Mixin.mountComponent.call(this, y, z, aa);
            if (this.props === '')
                return (n ? u(y) : t(y));
            return v(y, this.props);
        },
        receiveComponent: function(y, z) {
            var aa = this._rootNodeID, ba = y.props, ca = this.getDOMNode();
            if (q(ca)) {
                if (ba !== '') {
                    this.props = ba;
                    s(aa, ba);
                }
                return;
            }
            if (ba === '') {
                this.props = ba;
                r(aa);
                return;
            }
            var da = this.getDOMNode()[p];
            if (ba !== da)
                o.updateTextContentByID(aa, ba);
        },
        type: w
    });
    var x = function(y) {
        return new j(w, null, null, null, null, y);
    };
    x.type = w;
    e.exports = x;
}, null);
__d("setDocumentSelectionExperimental", [], function(a, b, c, d, e, f) {
    "use strict";
    function g(j, k, l, m, n) {
        var o = a.getSelection(), p = j.getAnchorKey(), q = j.getAnchorOffset(), r = j.getFocusKey(), s = j.getFocusOffset(), t = j.getIsBackward();
        if (!o.extend && t) {
            var u = p, v = q;
            p = r;
            q = s;
            r = u;
            s = v;
            t = false;
        }
        var w = (p === l && m <= q && n >= q), x = (r === l && m <= s && n >= s);
        if (w && x) {
            o.removeAllRanges();
            i(o, k, q - m);
            h(o, k, s - m);
            return;
        }
        if (!t) {
            if (w) {
                o.removeAllRanges();
                i(o, k, q - m);
            }
            if (x)
                h(o, k, s - m);
        } else {
            if (x) {
                o.removeAllRanges();
                i(o, k, s - m);
            }
            if (w) {
                var y = o.focusNode, z = o.focusOffset;
                o.removeAllRanges();
                i(o, k, q - m);
                h(o, y, z);
            }
        }
    }
    function h(j, k, l) {
        if (j.extend) {
            j.extend(k, l);
        } else {
            var m = j.getRangeAt(0);
            m.setEnd(k, l);
            j.addRange(m.cloneRange());
        }
    }
    function i(j, k, l) {
        var m = document.createRange();
        m.setStart(k, l);
        j.addRange(m);
    }
    e.exports = g;
}, null);
__d("TextEditorLeaf.Experimental.react", ["DocumentCharacters", "React", "SelectionState", "TextEditorTextNode.react", "endsWith", "setDocumentSelectionExperimental"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    "use strict";
    var m = h.PropTypes, n = g.SOFT_NEWLINE, o = 3, p = h.createClass({
        displayName: "TextEditorLeaf",
        propTypes: {
            selection: m.instanceOf(i),
            start: m.number.isRequired,
            blockKey: m.string.isRequired,
            text: m.string.isRequired,
            style: m.number,
            inlineStyleFn: m.func.isRequired,
            isLast: m.bool.isRequired
        },
        _setSelection: function() {
            var q = this.props.selection;
            if (q == null ||!q.getHasFocus())
                return;
            var r = this.props.start, s = r + this.props.text.length, t = this.props.blockKey;
            if (!q.hasEdgeWithin(t, r, s))
                return;
            var u = this.getDOMNode(), v = u.firstChild, w;
            if (v.nodeType === o) {
                w = v;
            } else if (v.tagName === 'BR') {
                w = u;
            } else 
                w = v.firstChild;
            l(q, w, t, r, s);
        },
        shouldComponentUpdate: function(q) {
            return (this.refs.leaf.getDOMNode().textContent !== q.text || q.forceSelection);
        },
        componentDidUpdate: function() {
            this._setSelection();
        },
        componentDidMount: function() {
            this._setSelection();
        },
        render: function() {
            var q = this.props.text;
            if (k(q, n) && this.props.isLast)
                q += n;
            var r;
            if (this.props.style)
                r = this.props.inlineStyleFn(this.props.style);
            return (h.createElement("span", {
                "data-offset-key": this.props.offsetKey,
                className: r,
                ref: "leaf"
            }, j(q)));
        }
    });
    e.exports = p;
}, null);
__d("getScrollPosition", ["getDocumentScrollElement", "getUnboundedScrollPosition"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    function i(j) {
        var k = g();
        if (j === window)
            j = k;
        var l = h(j), m = j === k ? document.documentElement: j, n = j.scrollWidth - m.clientWidth, o = j.scrollHeight - m.clientHeight;
        l.x = Math.max(0, Math.min(l.x, n));
        l.y = Math.max(0, Math.min(l.y, o));
        return l;
    }
    e.exports = i;
}, null);
__d("TextEditorBlock.Experimental.react", ["ContentBlock", "DocumentCompositeDecorator.Experimental", "DocumentOffsetKey", "ElementForBlockType", "React", "SelectionState", "Style", "TextEditorLeaf.Experimental.react", "UnicodeBidiDirection", "cx", "getElementPosition", "getScrollPosition", "getViewportDimensions", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
    var u = k.PropTypes, v = o.LTR, w = o.RTL, x = 10, y = k.createClass({
        displayName: "TextEditorBlock",
        propTypes: {
            block: u.instanceOf(g).isRequired,
            tree: u.object.isRequired,
            selection: u.instanceOf(l).isRequired,
            decorator: u.instanceOf(h),
            forceSelection: u.bool.isRequired,
            direction: u.string.isRequired,
            blockPropTypes: u.object,
            blockStyleFn: u.func.isRequired,
            inlineStyleFn: u.func.isRequired
        },
        shouldComponentUpdate: function(aa) {
            return (this.props.block !== aa.block || this.props.tree !== aa.tree || this.props.direction !== aa.direction || (z(aa.selection, aa.block.getKey()) && aa.forceSelection));
        },
        componentDidMount: function() {
            var aa = this.props.selection, ba = aa.getEndKey();
            if (!aa.getHasFocus() || ba !== this.props.block.getKey())
                return;
            var ca = this.getDOMNode(), da = m.getScrollParent(ca), ea = r(da), fa;
            if (da === window) {
                var ga = q(ca), ha = ga.y + ga.height, ia = s().height;
                fa = ha - ia;
                if (fa > 0)
                    window.scrollTo(ea.x, ea.y + fa + x);
            } else {
                var ja = ca.offsetHeight + ca.offsetTop, ka = da.offsetHeight + ea.y;
                fa = ja - ka;
                if (fa > 0)
                    da.scrollTop += fa + x;
            }
        },
        _renderChildren: function() {
            var aa = this.props.block, ba = aa.getKey(), ca = aa.getText(), da = aa.getInlineStyles(), ea = aa.getEntities(), fa = this.props.tree.size - 1, ga = z(this.props.selection, ba);
            return this.props.tree.map(function(ha, ia) {
                var ja = ha.get('leaves'), ka = ja.size - 1, la = ja.map(function(qa, ra) {
                    var sa = i.encode(ba, ia, ra), ta = qa.get('start'), ua = qa.get('end');
                    return (k.createElement(n, {
                        key: sa,
                        offsetKey: sa,
                        blockKey: ba,
                        start: ta,
                        selection: ga ? this.props.selection: null,
                        forceSelection: this.props.forceSelection,
                        text: ca.slice(ta, ua),
                        style: da.get(ta),
                        inlineStyleFn: this.props.inlineStyleFn,
                        isLast: ia === fa && ra === ka
                    }));
                }.bind(this)).toArray(), ma = ha.get('decoratorKey');
                if (ma === null)
                    return la;
                var na = this.props.decorator.getComponentForKey(ma), oa = this.props.decorator.getPropsForKey(ma), pa = i.encode(ba, ia, 0);
                return (k.createElement(na, k.__spread({}, oa, {
                    key: pa,
                    entityKey: ea.get(ha.get('start')),
                    offsetKey: pa
                }), la));
            }.bind(this)).toArray();
        },
        render: function() {
            var aa = this.props.block, ba = aa.getKey(), ca = t(this.props.blockStyleFn(aa.getType()), (("_209g") + (this.props.direction === v ? ' ' + "_2vxa" : '') + (this.props.direction === w ? ' ' + "_2vxb" : ''))), da = j.getElement(aa.getType());
            return (k.createElement(da, k.__spread({
                style: {
                    position: 'relative'
                },
                "data-block": "true",
                "data-offset-key": i.encode(ba, 0, 0),
                className: ca
            }, this.props.blockProps), this._renderChildren()));
        }
    });
    function z(aa, ba) {
        return (aa.getAnchorKey() === ba || aa.getFocusKey() === ba);
    }
    e.exports = y;
}, null);
__d("isSelectionAtLeafStartExperimental", [], function(a, b, c, d, e, f) {
    "use strict";
    function g(h) {
        var i = h.getSelection(), j = i.getAnchorKey(), k = h.getBlockTree(j), l = i.getStartOffset(), m = false;
        k.some(function(n) {
            if (l === n.get('start')) {
                m = true;
                return true;
            }
            if (l < n.get('end'))
                return n.get('leaves').some(function(o) {
                    var p = o.get('start');
                    if (l === p) {
                        m = true;
                        return true;
                    }
                    if (l < p)
                        return false;
                    });
        });
        return m;
    }
    e.exports = g;
}, null);
__d("TextEditorCompositionHandler.Experimental", ["ComposedInlineStyle", "DocumentModifierExperimental", "EditorChangeType", "EditorState", "Keys", "isSelectionAtLeafStartExperimental"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = g.NONE, n = 20, o = {
        onBeforeInput: function(p) {
            this._textInputData = (this._textInputData || '') + p.data;
        },
        onCompositionStart: function() {
            this._stillComposing = true;
        },
        onCompositionEnd: function(p) {
            this._resolved = false;
            this._stillComposing = false;
            setTimeout(function() {
                if (!this._resolved)
                    o.resolveComposition.call(this);
            }.bind(this), n);
        },
        onKeyDown: function(p) {
            if (p.which === k.RIGHT || p.which === k.LEFT)
                p.preventDefault();
        },
        onKeyPress: function(p) {
            if (p.which === k.RETURN)
                p.preventDefault();
        },
        resolveComposition: function() {
            if (this._stillComposing)
                return;
            this._resolved = true;
            var p = this._textInputData;
            this._textInputData = '';
            var q = j.set(this.props.editorState, {
                inCompositionMode: false
            }), r=!p || l(q);
            if (r)
                this.restoreEditorDOM();
            this.exitCurrentMode();
            this.removeRenderGuard();
            if (p) {
                var s = h.replaceText(q.getCurrentContent(), q.getSelection(), p, m, null);
                this.update(j.push(q, s, i.INSERT_CHARACTERS));
                return;
            }
            if (r)
                this.update(j.set(q, {
                    nativelyRenderedContent: null,
                    forceSelection: true
                }));
        }
    };
    e.exports = o;
}, null);
__d("DocumentRemovableWord", ["TokenizeUtil"], function(a, b, c, d, e, f, g) {
    var h = g.getPunctuation();
    h = h.replace("\'", "").slice(1, - 1);
    var i = '\\s' + h, j = '^(' + '[' + i + ']*' + '[^' + i + ']+' + '|[' + i + ']+' + ')', k = new RegExp(j), l = '(' + '[^' + i + ']+' + '[' + i + ']*' + '|[' + i + ']+' + ')$', m = new RegExp(l);
    function n(p, q) {
        var r = q ? m.exec(p): k.exec(p);
        return r ? r[0] : null;
    }
    var o = {
        getBackward: function(p) {
            return n(p, true);
        },
        getForward: function(p) {
            return n(p, false);
        }
    };
    e.exports = o;
}, null);
__d("TextEditorModes", [], function(a, b, c, d, e, f) {
    var g = {
        EDIT: 0,
        COMPOSITE: 1,
        DRAG: 2,
        RENDER: 3,
        CUT: 4
    };
    e.exports = g;
}, null);
__d("getSafeBodyFromHTML", ["UserAgent"], function(a, b, c, d, e, f, g) {
    var h = g.isBrowser('IE <= 9');
    function i(j) {
        var k, l = null;
        if (!h && document.implementation && document.implementation.createHTMLDocument) {
            k = document.implementation.createHTMLDocument('foo');
            k.documentElement.innerHTML = j;
            l = k.getElementsByTagName('body')[0];
        }
        return l;
    }
    e.exports = i;
}, null);
__d("TextEditorPasteHandler", ["ComposedBlockType", "ComposedInlineStyle", "ContentBlock", "DocumentCharacters", "immutable", "arrayContains", "fillArray", "generateBlockKey", "getSafeBodyFromHTML"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    var p = h.BOLD, q = h.ITALIC, r = h.UNDERLINE, s = h.NONE, t = j.BLOCK_DELIMITER, u = '&nbsp;', v = j.SOFT_NEWLINE, w = ' ', x = g.UNSTYLED, y = ['p', 'h1', 'h2', 'h3', 'li', 'blockquote'], z = {
        strong: p,
        b: p,
        em: q,
        i: q,
        u: r
    };
    function aa() {
        return {
            text: '',
            inlines: [],
            blocks: []
        };
    }
    function ba() {
        return {
            text: w,
            inlines: [s],
            blocks: []
        };
    }
    function ca() {
        return {
            text: v,
            inlines: [s],
            blocks: []
        };
    }
    function da(la) {
        return {
            text: t,
            inlines: [s],
            blocks: [la]
        };
    }
    function ea(la, ma) {
        switch (la) {
        case 'h1':
            return g.HEADER_ONE;
        case 'h2':
            return g.HEADER_TWO;
        case 'li':
            if (ma === 'ol')
                return g.ORDERED_LIST_ITEM;
            return g.UNORDERED_LIST_ITEM;
        case 'blockquote':
            return g.BLOCKQUOTE;
        case 'pre':
            return g.CODE;
        default:
            return g.UNSTYLED;
        }
    }
    function fa(la, ma, na) {
        var oa = z[la];
        if (oa) {
            na|=oa;
        } else if (ma.style) {
            na|=ma.style.fontWeight === 'bold' ? p : 0;
            na|=ma.style.fontStyle === 'italic' ? q : 0;
            na|=ma.style.textDecoration === 'underline' ? r : 0;
        }
        return na;
    }
    function ga(la, ma) {
        if (la.text.slice( - 1) === t && ma.text.slice(0, 1) === t) {
            la.text = la.text.slice(0, - 1);
            la.inlines.pop();
            la.blocks.pop();
        }
        if (la.text.slice( - 1) === t && (ma.text === w || ma.text === v))
            return la;
        return {
            text: la.text + ma.text,
            inlines: la.inlines.concat(ma.inlines),
            blocks: la.blocks.concat(ma.blocks)
        };
    }
    function ha(la) {
        return y.some(function(ma) {
            return la.indexOf('<' + ma)!==-1;
        });
    }
    function ia(la, ma, na, oa, pa) {
        var qa = la.nodeName.toLowerCase(), ra = false;
        if (qa === "#text") {
            var sa = la.textContent;
            if (sa.trim() === '')
                return ba();
            return {
                text: sa,
                inlines: m(sa.length, ma),
                blocks: []
            };
        }
        if (qa === "br")
            return ca();
        var ta = aa(), ua;
        ma = fa(qa, la, ma);
        if (qa === "ul" || qa === "ol")
            na = qa;
        if (!oa && l(pa, qa)) {
            ta = da(ea(qa, na));
            oa = true;
            ra = true;
        }
        la = la.firstChild;
        while (la) {
            ua = ia(la, ma, na, oa, pa);
            ta = ga(ta, ua);
            la = la.nextSibling;
        }
        if (ra)
            ta = ga(ta, da(x));
        return ta;
    }
    function ja(la) {
        la = la.trim().replace(t, '').replace(v, w).replace(u, w);
        var ma = o(la);
        if (!ma)
            return null;
        var na = ha(la) ? y: ['div'], oa = ia(ma, 0, 'ul', false, na);
        if (oa.text.indexOf(t) === 0)
            oa = {
                text: oa.text.slice(1),
                inlines: oa.inlines.slice(1),
                blocks: oa.blocks
            };
        if (oa.text.slice( - 1) === t) {
            oa.text = oa.text.slice(0, - 1);
            oa.inlines = oa.inlines.slice(0, - 1);
            oa.blocks.pop();
        }
        if (oa.blocks.length === 0)
            oa.blocks.push(x);
        if (oa.text.split(t).length === oa.blocks.length + 1)
            oa.blocks.unshift(x);
        return oa;
    }
    var ka = {
        processHTML: function(la) {
            return ja(la);
        },
        processHTMLAsImmutable: function(la) {
            var ma = ja(la);
            if (!ma)
                return null;
            var na = 0;
            return ma.text.split(t).map(function(oa, pa) {
                var qa = na + oa.length, ra = new i({
                    key: n(),
                    type: ma.blocks[pa],
                    text: oa,
                    inlineStyles: k.List(ma.inlines.slice(na, qa)),
                    entities: k.List(k.Repeat(null, oa.length))
                });
                na = qa + 1;
                return ra;
            });
        },
        processText: function(la) {
            return {
                text: la,
                inlines: m(la.length, s),
                blocks: m(la.split(t).length, x)
            };
        },
        processTextAsImmutable: function(la) {
            return la.map(function(ma) {
                return new i({
                    key: n(),
                    type: x,
                    text: ma,
                    inlineStyles: k.List(k.Repeat(s, ma.length)),
                    entities: k.List(k.Repeat(null, ma.length))
                });
            });
        }
    };
    e.exports = ka;
}, null);
__d("getSelectionOffsetKeyForNode", [], function(a, b, c, d, e, f) {
    function g(h) {
        return h.getAttribute && h.getAttribute('data-offset-key');
    }
    e.exports = g;
}, null);
__d("findAncestorOffsetKey", ["getSelectionOffsetKeyForNode"], function(a, b, c, d, e, f, g) {
    function h(i) {
        while (i && i !== document.documentElement) {
            var j = g(i);
            if (j != null)
                return j;
            i = i.parentNode;
        }
        return null;
    }
    e.exports = h;
}, null);
__d("getUpdatedSelectionState", ["DocumentOffsetKey"], function(a, b, c, d, e, f, g) {
    function h(i, j, k, l, m) {
        var n = i.getSelection(), o = g.decode(j), p = o.blockKey, q = i.getBlockTree(p).getIn([o.decoratorKey, 'leaves', o.leafKey]), r = g.decode(l), s = r.blockKey, t = i.getBlockTree(s).getIn([r.decoratorKey, 'leaves', r.leafKey]), u = q.get('start'), v = t.get('start'), w = q ? u + k: null, x = t ? v + m: null, y = (n.getAnchorKey() === p && n.getAnchorOffset() === w && n.getFocusKey() === s && n.getFocusOffset() === x);
        if (y)
            return n;
        var z = false;
        if (p === s) {
            var aa = q.get('end'), ba = t.get('end');
            if (v === u && ba === aa) {
                z = m < k;
            } else 
                z = v < u;
        } else {
            var ca = i.getCurrentContent().getBlockMap().keySeq().skipUntil(function(da) {
                return da === p || da === s;
            }).first();
            z = ca === s;
        }
        return n.merge({
            anchorKey: p,
            anchorOffset: w,
            focusKey: s,
            focusOffset: x,
            isBackward: z
        });
    }
    e.exports = h;
}, null);
__d("getDocumentSelectionExperimental", ["DocumentCharacters", "findAncestorOffsetKey", "getSelectionOffsetKeyForNode", "getUpdatedSelectionState", "invariant"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = g.SOFT_NEWLINE;
    function m(r, s) {
        var t = a.getSelection();
        if (t.rangeCount === 0)
            return {
                selectionState: r.getSelection().set('hasFocus', false),
                needsRecovery: false
            };
        var u = t.anchorNode, v = t.focusNode, w = t.anchorOffset, x = t.focusOffset, y = u.nodeType === Node.TEXT_NODE, z = v.nodeType === Node.TEXT_NODE;
        if (y && z)
            return {
                selectionState: j(r, h(u), w, h(v), x),
                needsRecovery: false
            };
        var aa = null, ba = null;
        if (y) {
            aa = {
                key: h(u),
                offset: w
            };
            ba = p(s, v, x);
        } else if (z) {
            ba = {
                key: h(v),
                offset: x
            };
            aa = p(s, u, w);
        } else {
            aa = p(s, u, w);
            ba = p(s, v, x);
        }
        return {
            selectionState: j(r, aa.key, aa.offset, ba.key, ba.offset),
            needsRecovery: true
        };
    }
    function n(r) {
        while (r.firstChild && i(r.firstChild))
            r = r.firstChild;
        return r;
    }
    function o(r) {
        while (r.lastChild && i(r.lastChild))
            r = r.lastChild;
        return r;
    }
    function p(r, s, t) {
        var u = h(s);
        k(u != null || r === s);
        if (t === 0)
            return {
                key: u || i(n(s)),
                offset: 0
            };
        var v = s.childNodes[t - 1], w, x;
        if (!i(v)) {
            w = u;
            x = q(v);
        } else {
            var y = o(v);
            w = i(y);
            x = q(y);
        }
        return {
            key: w,
            offset: x
        };
    }
    function q(r) {
        var s = r.textContent;
        return s === l ? 0 : s.length;
    }
    e.exports = m;
}, null);
__d("getTextContentFromFiles", ["DocumentCharacters"], function(a, b, c, d, e, f, g) {
    var h = g.BLOCK_DELIMITER, i = /\.textClipping$/, j = {
        'text/plain': true,
        'text/html': true,
        'text/rtf': true
    };
    function k(m, n) {
        var o = 0, p = [];
        m.forEach(function(q) {
            l(q, function(r) {
                o++;
                r && p.push(r);
                if (o == m.length)
                    n(p.join(h));
            });
        });
    }
    function l(m, n) {
        if (!a.FileReader || (m.type&&!(m.type in j))) {
            n('');
            return;
        }
        if (m.type === '' && i.test(m.name)) {
            n(m.name.replace(i, ''));
            return;
        }
        var o = new FileReader();
        o.onload = function() {
            n(o.result);
        };
        o.onerror = function() {
            n('');
        };
        o.readAsText(m);
    }
    e.exports = k;
}, null);
__d("TextEditorEditHandler.Experimental", ["BlockTree", "DataTransfer", "DocumentCharacters", "DocumentCommands", "DocumentModifierExperimental", "DocumentOffsetKey", "DocumentRemovableWord", "DocumentRemovalDirection", "EditorChangeType", "EditorState", "Keys", "TextEditorModes", "TextEditorPasteHandler", "UnicodeUtils", "UserAgent", "areEqual", "createOrderedMapFromBlockArray", "findAncestorOffsetKey", "getActiveElement", "getContentStateFragment", "getDocumentSelectionExperimental", "getTextContentFromFiles", "isSelectionAtLeafStartExperimental"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca) {
    "use strict";
    var da = i.SOFT_NEWLINE, ea = u.isEngine('WebKit'), fa = null, ga = {
        onFocus: function(hb) {
            var ib = this.props.editorState, jb = ib.getSelection();
            if (jb.getHasFocus())
                return;
            var kb = jb.set('hasFocus', true);
            this.props.onFocus && this.props.onFocus(hb);
            this.update(p.updateSelection(ib, kb, false));
        },
        onBlur: function(hb) {
            if (ea && y() === document.body)
                a.getSelection().removeAllRanges();
            var ib = this.props.editorState, jb = ib.getSelection();
            if (!jb.getHasFocus())
                return;
            var kb = jb.set('hasFocus', false);
            this.props.onBlur && this.props.onBlur(hb);
            this.update(p.updateSelection(ib, kb, false));
        },
        onBeforeInput: function(hb) {
            var ib = hb.data;
            if (!ib)
                return;
            if (this.props.handleBeforeInput && this.props.handleBeforeInput(ib)) {
                hb.preventDefault();
                return;
            }
            var jb = this.props.editorState, kb = jb.getSelection();
            if (!kb.isCollapsed()) {
                hb.preventDefault();
                this.update(ka(jb, ib, jb.getCurrentInlineStyle(), null));
                return;
            }
            var lb=!ca(jb), mb = ka(jb, ib, jb.getCurrentInlineStyle(), null);
            if (!lb) {
                hb.preventDefault();
                this.update(mb);
                return;
            }
            var nb = kb.getAnchorKey(), ob = jb.getBlockTree(nb), pb = g.getFingerprint(ob), qb = g.getFingerprint(mb.getBlockTree(nb));
            if (gb(ib) || pb !== qb) {
                hb.preventDefault();
            } else 
                mb = p.set(mb, {
                    nativelyRenderedContent: mb.getCurrentContent()
                });
            this.update(mb);
        },
        onSelect: function(hb) {
            if (this._blockSelectEvents)
                return;
            var ib = this.props.editorState, jb = aa(ib, this.refs.editorContainer.getDOMNode().firstChild), kb = jb.selectionState;
            if (kb !== ib.getSelection())
                this.update(p.updateSelection(ib, kb, !!jb.needsRecovery));
        },
        onKeyDown: function(hb) {
            var ib = hb.which, jb = this.props.editorState;
            switch (ib) {
            case q.RETURN:
                hb.preventDefault();
                if (!this.props.handleReturn ||!this.props.handleReturn(hb))
                    this.update(va(jb));
                return;
            case q.ESC:
                hb.preventDefault();
                this.props.onEscape && this.props.onEscape(hb);
                return;
            case q.TAB:
                this.props.onTab && this.props.onTab(hb);
                return;
            case q.UP:
                this.props.onUpArrow && this.props.onUpArrow(hb);
                return;
            case q.DOWN:
                this.props.onDownArrow && this.props.onDownArrow(hb);
                return;
            }
            var kb = this.props.keyBindingFn(hb);
            if (!kb)
                return;
            hb.preventDefault();
            if (this.props.handleKeyCommand && this.props.handleKeyCommand(kb))
                return;
            if (kb === j.UNDO) {
                ia(jb, this.update);
                return;
            }
            var lb = ha(kb, jb);
            if (lb !== jb)
                this.update(lb);
        },
        onCharacterData: function(hb) {
            var ib = x(hb), jb = this.props.editorState, kb = jb.getSelection(), lb = jb.getCurrentContent(), mb = l.decode(ib), nb = mb.blockKey, ob = jb.getBlockTree(nb), pb = ob.getIn([mb.decoratorKey, 'leaves', mb.leafKey]), qb = lb.getBlockForKey(nb);
            if (qb.getText().slice(pb.start, pb.end) === hb.textContent)
                return;
            var rb = jb.getSelection().merge({
                anchorOffset: pb.start,
                focusOffset: pb.end,
                isBackward: false
            }), sb = k.replaceText(lb, rb, hb.textContent, qb.getInlineStyles().get(pb.start), null), tb = aa(this.props.editorState, this.refs.editorContainer.getDOMNode().firstChild), ub = sb.merge({
                selectionBefore: kb,
                selectionAfter: tb.selectionState
            });
            this.update(p.push(jb, ub, o.INSERT_CHARACTERS));
        },
        onDragStart: function(hb) {
            this._internalDrag = true;
            this.setMode(r.DRAG);
        },
        onDragOver: function(hb) {
            this._internalDrag = false;
            this.setMode(r.DRAG);
            hb.preventDefault();
        },
        onCompositionStart: function(hb) {
            this.setRenderGuard();
            this.captureEditorDOM();
            this.setMode(r.COMPOSITE);
            this.update(p.set(this.props.editorState, {
                inCompositionMode: true
            }));
        },
        onCut: function(hb) {
            var ib = this.props.editorState, jb = ib.getSelection();
            if (jb.isCollapsed()) {
                hb.preventDefault();
                return;
            }
            this.setRenderGuard();
            this.captureEditorDOM();
            cb(ib, function(kb) {
                this._clipboard = kb;
                this.setMode(r.CUT);
                setTimeout(function() {
                    this.restoreEditorDOM();
                    this.removeRenderGuard();
                    this.exitCurrentMode();
                    this.update(bb(ib));
                }.bind(this), 0);
            }.bind(this));
        },
        onCopy: function() {
            cb(this.props.editorState, function(hb) {
                this._clipboard = hb;
            }.bind(this));
        },
        onPaste: function(hb) {
            hb.preventDefault();
            var ib = new h(hb.clipboardData);
            if (!ib.isRichText()) {
                var jb = ib.getFiles(), kb = ib.getText();
                if (jb.length > 0) {
                    if (this.props.handlePastedFiles && this.props.handlePastedFiles(jb))
                        return;
                    ba(jb, function(vb) {
                        vb = vb || kb;
                        if (!vb)
                            return;
                        var wb = vb.split(da), xb = s.processTextAsImmutable(wb), yb = this.props.editorState, zb = w(xb), ac = k.replaceWithFragment(yb.getCurrentContent(), yb.getSelection(), zb);
                        this.update(p.push(yb, ac, o.INSERT_FRAGMENT));
                    }.bind(this));
                    return;
                }
            }
            var lb, mb = ib.getText();
            if (mb)
                lb = mb.split(da);
            if (this._clipboard) {
                var nb = lb.filter(za), ob = this._clipboard.toSeq().map(function(vb) {
                    return vb.getText();
                }).filter(za).toArray(), pb = v(nb, ob);
                if (pb) {
                    this.update(ab(this.props.editorState, this._clipboard));
                    return;
                }
            }
            var qb = ib.getHTML();
            if (qb) {
                var rb = s.processHTMLAsImmutable(qb);
                if (rb) {
                    var sb = w(rb);
                    this.update(ab(this.props.editorState, sb));
                    return;
                }
            }
            this._clipboard = null;
            if (lb) {
                var tb = s.processTextAsImmutable(lb), ub = w(tb);
                this.update(ab(this.props.editorState, ub));
            }
        }
    };
    function ha(hb, ib) {
        switch (hb) {
        case j.UNDO:
            return ia(ib);
        case j.REDO:
            return ja(ib);
        case j.DELETE:
            return ma(ib);
        case j.DELETE_WORD:
            return na(ib);
        case j.BACKSPACE:
            return qa(ib);
        case j.BACKSPACE_WORD:
            return ta(ib);
        case j.BACKSPACE_TO_END_OF_BLOCK:
            return ua(ib);
        case j.INSERT_BLOCK_DELIMITER:
            return va(ib);
        case j.TRANSPOSE_CHARACTERS:
            return wa(ib);
        case j.MOVE_SELECTION_TO_START_OF_BLOCK:
            return xa(ib);
        case j.MOVE_SELECTION_TO_END_OF_BLOCK:
            return ya(ib);
        case j.SECONDARY_CUT:
            return oa(ib);
        case j.SECONDARY_PASTE:
            return pa(ib);
        default:
            return ib;
        }
    }
    function ia(hb, ib) {
        var jb = p.undo(hb);
        if (!hb.getNativelyRenderedContent()) {
            ib(jb);
            return;
        }
        ib(p.set(hb, {
            nativelyRenderedContent: null
        }));
        setTimeout(function() {
            ib(jb);
        });
    }
    function ja(hb) {
        return p.redo(hb);
    }
    function ka(hb, ib, jb, kb) {
        var lb = k.replaceText(hb.getCurrentContent(), hb.getSelection(), ib, jb, kb || null);
        return p.push(hb, lb, o.INSERT_CHARACTERS);
    }
    function la(hb, ib, jb) {
        var kb = hb.getSelection(), lb = hb.getCurrentContent(), mb = kb;
        if (kb.isCollapsed()) {
            if (jb === n.FORWARD) {
                if (hb.isAtDocumentEnd())
                    return lb;
            } else if (hb.isAtDocumentStart())
                return lb;
            mb = ib(hb);
            if (mb === kb)
                return lb;
        }
        return k.removeRange(lb, mb, jb);
    }
    function ma(hb) {
        var ib = la(hb, function(kb) {
            var lb = kb.getSelection(), mb = kb.getCurrentContent(), nb = lb.getAnchorKey(), ob = lb.getAnchorOffset(), pb = mb.getBlockForKey(nb).getText()[ob];
            return sa(kb, pb ? t.getUTF16Length(pb, 0) : 1);
        }, n.FORWARD);
        if (ib === hb.getCurrentContent())
            return hb;
        ib = ib.set('selectionBefore', hb.getSelection());
        var jb = hb.getSelection().isCollapsed() ? o.DELETE_CHARACTER: o.REMOVE_RANGE;
        return p.push(hb, ib, jb);
    }
    function na(hb) {
        var ib = la(hb, function(jb) {
            var kb = jb.getSelection(), lb = kb.getStartOffset(), mb = kb.getStartKey(), nb = jb.getCurrentContent(), ob = nb.getBlockForKey(mb).getText().slice(lb), pb = m.getForward(ob) || '';
            return sa(jb, pb.length || 1);
        }, n.FORWARD);
        if (ib === hb.getCurrentContent())
            return hb;
        return p.push(hb, ib, o.REMOVE_RANGE);
    }
    function oa(hb) {
        var ib = hb.getCurrentContent(), jb = hb.getSelection(), kb;
        if (jb.isCollapsed()) {
            var lb = jb.getAnchorKey(), mb = ib.getBlockForKey(lb).getLength();
            if (mb === jb.getAnchorOffset())
                return hb;
            kb = jb.set('focusOffset', mb);
        } else 
            kb = jb;
        fa = z(ib, kb);
        var nb = k.removeRange(ib, kb, n.FORWARD);
        if (nb === ib)
            return hb;
        return p.push(hb, nb, o.REMOVE_RANGE);
    }
    function pa(hb) {
        return (fa ? ab(hb, fa) : hb);
    }
    function qa(hb) {
        var ib = la(hb, function(kb) {
            var lb = kb.getSelection(), mb = kb.getCurrentContent(), nb = lb.getAnchorKey(), ob = lb.getAnchorOffset(), pb = mb.getBlockForKey(nb).getText()[ob - 1];
            return ra(kb, pb ? t.getUTF16Length(pb, 0) : 1);
        }, n.BACKWARD);
        if (ib === hb.getCurrentContent())
            return hb;
        ib = ib.set('selectionBefore', hb.getSelection());
        var jb = hb.getSelection().isCollapsed() ? o.BACKSPACE_CHARACTER: o.REMOVE_RANGE;
        return p.push(hb, ib, jb);
    }
    function ra(hb, ib) {
        var jb = hb.getSelection(), kb = hb.getCurrentContent(), lb = jb.getStartKey(), mb = jb.getStartOffset(), nb = lb, ob;
        if (ib > mb) {
            var pb = kb.getKeyBefore(lb);
            nb = pb;
            var qb = kb.getBlockForKey(pb);
            ob = qb.getText().length;
        } else 
            ob = mb - ib;
        return jb.merge({
            focusKey: nb,
            focusOffset: ob,
            isBackward: true
        });
    }
    function sa(hb, ib) {
        var jb = hb.getSelection(), kb = jb.getStartKey(), lb = jb.getStartOffset(), mb = hb.getCurrentContent(), nb = kb, ob, pb = mb.getBlockForKey(kb);
        if (ib > (pb.getText().length - lb)) {
            nb = mb.getKeyAfter(kb);
            ob = 0;
        } else 
            ob = lb + ib;
        return jb.merge({
            focusKey: nb,
            focusOffset: ob
        });
    }
    function ta(hb) {
        var ib = la(hb, function(jb) {
            var kb = jb.getSelection(), lb = kb.getStartOffset();
            if (lb === 0)
                return ra(jb, 1);
            var mb = kb.getStartKey(), nb = jb.getCurrentContent(), ob = nb.getBlockForKey(mb).getText().slice(0, lb), pb = m.getBackward(ob) || '';
            return ra(jb, pb.length || 1);
        }, n.BACKWARD);
        if (ib === hb.getCurrentContent())
            return hb;
        return p.push(hb, ib, o.REMOVE_RANGE);
    }
    function ua(hb) {
        var ib = la(hb, function(jb) {
            var kb = jb.getSelection();
            if (kb.getStartOffset() === 0)
                return ra(jb, 1);
            return kb.merge({
                focusOffset: 0,
                isBackward: true
            });
        }, n.BACKWARD);
        if (ib === hb.getCurrentContent())
            return hb;
        return p.push(hb, ib, o.REMOVE_RANGE);
    }
    function va(hb) {
        var ib = k.splitBlock(hb.getCurrentContent(), hb.getSelection());
        return p.push(hb, ib, o.SPLIT_BLOCK);
    }
    function wa(hb) {
        var ib = hb.getSelection();
        if (!ib.isCollapsed())
            return hb;
        var jb = ib.getAnchorOffset();
        if (jb === 0)
            return hb;
        var kb = ib.getAnchorKey(), lb = hb.getCurrentContent(), mb = lb.getBlockForKey(kb), nb = mb.getLength();
        if (nb <= 1)
            return hb;
        var ob, pb;
        if (jb === nb) {
            ob = ib.set('anchorOffset', jb - 1);
            pb = ib;
        } else {
            ob = ib.set('focusOffset', jb + 1);
            pb = ob.set('anchorOffset', jb + 1);
        }
        var qb = z(lb, ob), rb = k.removeRange(lb, ob, n.BACKWARD), sb = rb.getSelectionAfter(), tb = sb.getAnchorOffset() - 1, ub = sb.merge({
            anchorOffset: tb,
            focusOffset: tb
        }), vb = k.replaceWithFragment(rb, ub, qb), wb = p.push(hb, vb, o.INSERT_FRAGMENT);
        return p.updateSelection(wb, pb);
    }
    function xa(hb) {
        var ib = hb.getSelection(), jb = ib.getStartKey();
        return p.set(hb, {
            selection: ib.merge({
                anchorKey: jb,
                anchorOffset: 0,
                focusKey: jb,
                focusOffset: 0,
                isBackward: false
            }),
            forceSelection: true
        });
    }
    function ya(hb) {
        var ib = hb.getSelection(), jb = ib.getEndKey(), kb = hb.getCurrentContent(), lb = kb.getBlockForKey(jb).getLength();
        return p.set(hb, {
            selection: ib.merge({
                anchorKey: jb,
                anchorOffset: lb,
                focusKey: jb,
                focusOffset: lb,
                isBackward: false
            }),
            forceSelection: true
        });
    }
    function za(hb) {
        return hb.length > 0;
    }
    function ab(hb, ib) {
        var jb = k.replaceWithFragment(hb.getCurrentContent(), hb.getSelection(), ib);
        return p.push(hb, jb, o.INSERT_FRAGMENT);
    }
    function bb(hb) {
        var ib = k.removeRange(hb.getCurrentContent(), hb.getSelection(), n.FORWARD);
        return p.push(hb, ib, o.REMOVE_RANGE);
    }
    function cb(hb, ib) {
        var jb = hb.getSelection();
        if (!jb.isCollapsed())
            ib(z(hb.getCurrentContent(), jb));
    }
    var db = '\'', eb = '\/', fb = u.isBrowser('Firefox');
    function gb(hb) {
        return (fb && (hb == db || hb == eb));
    }
    e.exports = ga;
}, null);
__d("TextEditorDragHandler.Experimental", ["DataTransfer", "DocumentModifierExperimental", "EditorState", "EditorChangeType", "ex", "findAncestorOffsetKey", "getTextContentFromFiles", "getUpdatedSelectionState"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    "use strict";
    function o(event, s) {
        var t, u;
        if (document.caretRangeFromPoint) {
            var v = document.caretRangeFromPoint(event.x, event.y);
            t = v.startContainer;
            u = v.startOffset;
        } else if (event.rangeParent) {
            t = event.rangeParent;
            u = event.rangeOffset;
        } else 
            return null;
        var w = l(t);
        if (w === null) {
            var x = '';
            if (t.dataset && t.dataset.reactid)
                x = ' Node ID: ' + t.dataset.reactid;
            throw new Error(k('Invalid range for drop event.' + x + ' Offset: ' + u));
        }
        return n(s, w, u, w, u);
    }
    var p = {
        onDragEnd: function() {
            this.exitCurrentMode();
        },
        onDrop: function(s) {
            var t = new g(s.nativeEvent.dataTransfer), u = this.props.editorState, v = o(s.nativeEvent, u);
            s.preventDefault();
            this.exitCurrentMode();
            if (v === null)
                return;
            var w = t.getFiles();
            if (w.length > 0) {
                if (this.props.handleDroppedFiles && this.props.handleDroppedFiles(v, w))
                    return;
                m(w, function(x) {
                    x && this.update(r(u, v, x));
                }.bind(this));
                return;
            }
            if (this._internalDrag) {
                this.update(q(u, v));
                return;
            }
            this.update(r(u, v, t.getText()));
        }
    };
    function q(s, t) {
        var u = h.moveText(s.getCurrentContent(), s.getSelection(), t);
        return i.push(s, u, j.INSERT_FRAGMENT);
    }
    function r(s, t, u) {
        var v = h.insertText(s.getCurrentContent(), t, u, s.getCurrentInlineStyle());
        return i.push(s, v, j.INSERT_FRAGMENT);
    }
    e.exports = p;
}, null);
__d("UnicodeBidiService", ["Locale", "UnicodeBidi", "UnicodeBidiDirection", "invariant"], function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    function k(l) {
        if (!l)
            l = g.getDirection();
        j(i.isStrong(l));
        this.defaultDir = l;
        this.reset();
    }
    k.prototype.reset = function() {
        this.lastDir = this.defaultDir;
    };
    k.prototype.getDirection = function(l) {
        this.lastDir = h.getDirection(l, this.lastDir);
        return this.lastDir;
    };
    e.exports = k;
}, null);
__d("AbstractTextEditor.Experimental.react", ["AbstractTextEditorPlaceholder.Experimental.react", "AbstractTextEditorProps.Experimental", "DocumentOffsetKey", "DOMVector", "EditorState", "ElementForBlockType", "React", "TextEditorBlock.Experimental.react", "TextEditorCompositionHandler.Experimental", "TextEditorEditHandler.Experimental", "TextEditorDragHandler.Experimental", "TextEditorModes", "UnicodeBidiService", "UserAgent", "cx", "extendArray", "requestAnimationFrame", "setImmediate"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x) {
    "use strict";
    var y = a.MutationObserver || a.WebKitMutationObserver, z = (t.isBrowser('Safari') || t.isBrowser('Mobile Safari'));
    function aa(da) {
        return function(ea) {
            var fa = this._handler && this._handler[da];
            fa && fa.call(this, ea);
        };
    }
    function ba(da) {
        switch (da) {
        case r.EDIT:
            return p;
        case r.COMPOSITE:
            return o;
        case r.DRAG:
            return q;
        case r.CUT:
        case r.RENDER:
            return null;
        }
    }
    var ca = m.createClass({
        displayName: "AbstractTextEditor",
        getDefaultProps: h.getDefaultProps,
        _onBlur: aa('onBlur'),
        _onFocus: aa('onFocus'),
        _onSelect: aa('onSelect'),
        _onKeyDown: aa('onKeyDown'),
        _onKeyUp: aa('onKeyUp'),
        _onKeyPress: aa('onKeyPress'),
        _onMouseDown: aa('onMouseDown'),
        _onMouseUp: aa('onMouseUp'),
        _onCharacterData: aa('onCharacterData'),
        _onCompositionStart: aa('onCompositionStart'),
        _onCompositionEnd: aa('onCompositionEnd'),
        _onDragStart: aa('onDragStart'),
        _onDragOver: aa('onDragOver'),
        _onDragEnd: aa('onDragEnd'),
        _onDrop: aa('onDrop'),
        _onCut: aa('onCut'),
        _onCopy: aa('onCopy'),
        _onPaste: aa('onPaste'),
        _onBeforeInput: aa('onBeforeInput'),
        _renderContents: function() {
            var da = this.props.editorState, ea = this.props.blockComponent || n, fa = da.getCurrentContent(), ga = da.getSelection(), ha = da.mustForceSelection(), ia = fa.getBlocksAsArray(), ja = [], ka = null, la = null, ma, na, oa, pa, qa, ra, sa;
            for (var ta = 0; ta < ia.length; ta++) {
                na = ia[ta];
                oa = na.getKey();
                pa = na.getText();
                qa = na.getType();
                ra = m.createElement(ea, {
                    key: oa,
                    tree: da.getBlockTree(oa),
                    decorator: da.getDecorator(),
                    block: na,
                    selection: ga,
                    forceSelection: ha,
                    direction: this._bidiService.getDirection(pa),
                    blockProps: this.props.blockProps,
                    blockStyleFn: this.props.blockStyleFn,
                    inlineStyleFn: this.props.inlineStyleFn
                });
                sa = l.getWrapperElement(qa);
                if (sa) {
                    if (la !== qa) {
                        ma = [];
                        ka = m.createElement(sa, {
                            className: "_4noe",
                            key: oa + '-wrap',
                            "data-offset-key": i.encode(oa, 0, 0)
                        }, ma);
                        la = qa;
                        ja.push(ka);
                    }
                    ma.push(ra);
                } else {
                    ma = null;
                    ka = null;
                    la = null;
                    ja.push(ra);
                }
            }
            return ja;
        },
        _attachMutationObserver: function() {
            if (!y)
                return;
            var da = [], ea = function() {
                if (da.length > 1) {
                    var fa = da[0], ga = fa.target;
                    x(function() {
                        if (this.isMounted() && ga.parentNode)
                            this._onCharacterData(ga);
                    }.bind(this));
                }
                da.length = 0;
            }.bind(this);
            this._mutationObserver = new y(function(fa) {
                if (this._guardAgainstRender)
                    return;
                if (z) {
                    if (da.length === 0)
                        w(ea);
                    v(da, fa);
                } else {
                    da = fa;
                    ea();
                }
            }.bind(this));
            this._mutationObserver.observe(this.refs.editorContainer.getDOMNode(), {
                characterDataOldValue: true,
                characterData: true,
                subtree: true
            });
        },
        _renderPlaceholder: function() {
            var da = this.props.editorState.getCurrentContent(), ea = (this.props.placeholder&&!this.props.editorState.isInCompositionMode()&&!da.hasText());
            if (ea)
                return (m.createElement(g, {
                    text: this.props.placeholder,
                    editorState: this.props.editorState,
                    textAlignment: this.props.textAlignment
                }));
        },
        render: function() {
            var da = this.props.textAlignment, ea = (("_5yw9") + (da === 'left' ? ' ' + "_48yc" : '') + (da === 'right' ? ' ' + "_48yd" : '') + (da === 'center' ? ' ' + "_48ye" : ''));
            return (m.createElement("div", {
                className: ea
            }, this._renderPlaceholder(), m.createElement("div", {
                className: "_5ywa",
                ref: "editorContainer"
            }, m.createElement("div", {
                ref: "editor",
                title: this.props.placeholder,
                role: this.props.role || "textbox",
                "aria-activedescendant": this.props.ariaActiveDescendantID,
                "aria-autocomplete": this.props.ariaAutoComplete,
                "aria-expanded": this.props.ariaExpanded,
                "aria-owns": this.props.ariaOwneeID,
                "aria-haspopup": this.props.ariaHasPopup,
                className: "_54-z",
                onBlur: this._onBlur,
                onFocus: this._onFocus,
                onSelect: this._onSelect,
                onMouseUp: this._onMouseUp,
                onKeyDown: this._onKeyDown,
                onKeyUp: this._onKeyUp,
                onKeyPress: this._onKeyPress,
                onCut: this._onCut,
                onCopy: this._onCopy,
                onPaste: this._onPaste,
                onDragStart: this._onDragStart,
                onDragOver: this._onDragOver,
                onDragEnd: this._onDragEnd,
                onDrop: this._onDrop,
                onCompositionStart: this._onCompositionStart,
                onCompositionEnd: this._onCompositionEnd,
                onBeforeInput: this._onBeforeInput,
                spellCheck: this.props.spellCheck,
                contentEditable: true
            }, this._renderContents()))));
        },
        focus: function() {
            var da = this.props.editorState, ea = da.getSelection().getHasFocus(), fa = j.getScrollPosition();
            this.refs.editor.getDOMNode().focus();
            window.scrollTo(fa.x, fa.y);
            if (ea)
                return;
            this.update(k.updateSelection(da, da.getSelection().set('hasFocus', true), true));
        },
        blur: function() {
            this.refs.editor.getDOMNode().blur();
        },
        componentDidMount: function() {
            this._renderedVersion = null;
            this._clipboard = null;
            this._clonedEditor = null;
            this._guardAgainstRender = false;
            this._handler = p;
            this._attachMutationObserver();
        },
        shouldComponentUpdate: function(da) {
            if (da.textAlignment !== this.props.textAlignment || da.ariaExpanded !== this.props.ariaExpanded || da.ariaActiveDescendantID !== this.props.ariaActiveDescendantID)
                return true;
            var ea = this.props.editorState, fa = da.editorState, ga = ea.getSelection().getHasFocus(), ha = fa.getSelection().getHasFocus();
            if (ga !== ha)
                return true;
            var ia = fa.getNativelyRenderedContent(), ja = ea.isInCompositionMode(), ka = fa.isInCompositionMode();
            if (ea === fa || (ia !== null && fa.getCurrentContent() === ia) || (ja && ka))
                return false;
            var la = ea.getCurrentContent(), ma = fa.getCurrentContent(), na = ea.getDecorator(), oa = fa.getDecorator();
            return (ja !== ka || la !== ma || na !== oa || fa.mustForceSelection());
        },
        componentWillUpdate: function(da) {
            this._blockSelectEvents = true;
            this._bidiService.reset();
        },
        componentDidUpdate: function() {
            this._blockSelectEvents = false;
        },
        componentWillMount: function() {
            this._bidiService = new s();
        },
        componentWillUnmount: function() {
            if (this._mutationObserver) {
                this._mutationObserver.disconnect();
                this._mutationObserver = null;
            }
        },
        setMode: function(da) {
            this._handler = ba(da);
        },
        exitCurrentMode: function() {
            this.setMode(r.EDIT);
        },
        captureEditorDOM: function() {
            this._clonedEditor = this.refs.editor.getDOMNode().cloneNode(true);
        },
        restoreEditorDOM: function() {
            var da = this.refs.editorContainer.getDOMNode();
            da.innerHTML = '';
            da.appendChild(this._clonedEditor);
            this.focus();
            this._clonedEditor = null;
        },
        setRenderGuard: function() {
            this._guardAgainstRender = true;
        },
        removeRenderGuard: function() {
            this._guardAgainstRender = false;
        },
        update: function(da) {
            this.props.onChange(da);
        }
    });
    e.exports = ca;
}, null);
__d("AbstractMentionsTextEditor.Experimental.react", ["AbstractTextEditor.Experimental.react", "AbstractTextEditorProps.Experimental", "DocumentModifierExperimental", "EditorChangeType", "EditorState", "React", "TypeaheadNavigation", "getOrCreateDOMID", "setImmediate", "uniqueID"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    var q = l.PropTypes, r = 5, s = l.createClass({
        displayName: "AbstractMentionsTextEditor",
        propTypes: Object.assign({}, h.propTypes, {
            mentionsSource: q.object,
            mentionCreationFn: q.func.isRequired,
            mentionResultsComponent: q.func.isRequired,
            mentionResultsProps: q.object,
            excludedEntries: q.object,
            handleContentReturn: q.func,
            onAddMention: q.func,
            onShowMentions: q.func
        }),
        getDefaultProps: h.getDefaultProps,
        componentWillMount: function() {
            this._viewID = p();
        },
        getInitialState: function() {
            return {
                highlightedMentionable: null,
                ariaActiveDescendantID: null,
                mentionableEntries: null,
                characterOffset: 0
            };
        },
        _onShowMentions: function(u, v) {
            var w = u && u.length;
            if (!w) {
                this.setState({
                    highlightedMentionable: null,
                    activeDescendantID: null,
                    mentionableEntries: null,
                    characterOffset: 0
                });
                return;
            }
            var x = u.slice(0, r), y = this.props.typeaheadViewProps;
            if (y && y.mentionSortFn)
                x.sort(y.mentionSortFn);
            this.setState({
                highlightedMentionable: u[0],
                mentionableEntries: x,
                characterOffset: v
            });
            if (this.props.onShowMentions)
                this.props.onShowMentions(x, v);
        },
        _onBlur: function(u) {
            this.setState(this.getInitialState());
            this.props.onBlur && this.props.onBlur(u);
        },
        _onFocus: function(u) {
            this.props.mentionsSource && this.props.mentionsSource.bootstrap();
            this.props.onFocus && this.props.onFocus(u);
        },
        _handleReturn: function(u) {
            if (this.state.highlightedMentionable) {
                this._onMentionSelect(this.state.highlightedMentionable);
                return true;
            } else if (this.props.handleContentReturn && this.props.handleContentReturn(u))
                return true;
            return false;
        },
        _onTab: function(u) {
            if (this.state.highlightedMentionable) {
                u.preventDefault();
                this._onMentionSelect(this.state.highlightedMentionable, u);
            }
        },
        _onEscape: function(u) {
            if (this.props.onEscape)
                this.props.onEscape(u);
            if (this.state.mentionableEntries) {
                u.stopPropagation();
                this.setState(this.getInitialState());
            }
        },
        _onUpArrow: function(u) {
            if (this.state.mentionableEntries) {
                u.preventDefault();
                m.moveUp(this.state.mentionableEntries, this.state.highlightedMentionable, this._onMentionHighlight);
            } else 
                this.props.onUpArrow && this.props.onUpArrow(u);
        },
        _onDownArrow: function(u) {
            if (this.state.mentionableEntries) {
                u.preventDefault();
                m.moveDown(this.state.mentionableEntries, this.state.highlightedMentionable, this._onMentionHighlight);
            } else 
                this.props.onDownArrow && this.props.onDownArrow(u);
        },
        _onMentionHighlight: function(u) {
            this.setState({
                highlightedMentionable: u
            });
        },
        _onMentionRenderHighlight: function(u) {
            var v = n(u);
            this.setState({
                ariaActiveDescendantID: v
            });
        },
        _onMentionSelect: function(u) {
            var v = this.props.editorState, w = v.getSelection(), x = v.getCurrentContent(), y = w.getAnchorKey(), z = w.getAnchorOffset(), aa = x.getBlockMap().get(y), ba = z - t(aa.getText().substr(0, z), u.getTitle(), this.state.characterOffset), ca = i.replaceText(x, w.set('anchorOffset', ba), u.getTitle(), v.getCurrentInlineStyle(), this.props.mentionCreationFn(u)), da = k.push(v, ca, j.INSERT_FRAGMENT);
            this.props.onChange(da);
            this.setState(this.getInitialState());
            if (this.props.onAddMention)
                this.props.onAddMention(u);
        },
        shouldComponentUpdate: function(u, v) {
            return (this.props.editorState !== u.editorState || this.state.mentionableEntries !== v.mentionableEntries || this.state.highlightedMentionable !== v.highlightedMentionable || this.state.ariaActiveDescendantID !== v.ariaActiveDescendantID);
        },
        componentDidUpdate: function(u) {
            var v = this.props.editorState;
            if (v === u.editorState)
                return;
            var w = v.getSelection();
            if (w.getHasFocus() && w.isCollapsed()) {
                var x = v.getCurrentContent();
                if (this.props.mentionsSource)
                    o(function() {
                        this.props.mentionsSource.searchWithImmutables(x, w, this._onShowMentions);
                    }.bind(this));
            }
        },
        blur: function() {
            this.refs.abstractTextEditor.blur();
        },
        focus: function() {
            this.refs.abstractTextEditor.focus();
        },
        _renderMentionables: function() {
            var u = this.state.mentionableEntries;
            if (!u ||!u.length)
                return null;
            var v = this.props.mentionResultsComponent;
            return (l.createElement(v, l.__spread({}, this.props.mentionResultsProps, {
                viewID: this._viewID,
                selection: this.props.editorState.getSelection(),
                contextComponent: this,
                characterOffset: this.state.characterOffset,
                mentionableEntries: u || [],
                highlightedMentionable: this.state.highlightedMentionable,
                onMentionSelect: this._onMentionSelect,
                onMentionHighlight: this._onMentionHighlight,
                onMentionRenderHighlight: this._onMentionRenderHighlight
            })));
        },
        render: function() {
            var u = this.state.mentionableEntries, v=!!(u && u.length);
            return (l.createElement("div", {
                ref: "container",
                className: this.props.className,
                tabIndex: "-2"
            }, l.createElement(g, l.__spread({}, this.props, {
                ref: "abstractTextEditor",
                role: "combobox",
                ariaActiveDescendantID: this.state.ariaActiveDescendantID,
                ariaAutoComplete: "list",
                ariaOwneeID: this._viewID,
                ariaExpanded: v,
                ariaHasPopup: v,
                onBlur: this._onBlur,
                onFocus: this._onFocus,
                onTab: this._onTab,
                onEscape: this._onEscape,
                onDownArrow: this._onDownArrow,
                onUpArrow: this._onUpArrow,
                handleReturn: this._handleReturn
            })), this._renderMentionables()));
        }
    });
    function t(u, v, w) {
        for (var x = w; x <= v.length; x++)
            if (u.substr( - x) == v.substr(0, x))
                w = x;
        return w;
    }
    e.exports = s;
}, null);
__d("createMentionEntity", ["ComposedEntityMutability", "ComposedEntityType", "DocumentEntity"], function(a, b, c, d, e, f, g, h, i) {
    function j(k) {
        var l = k.getType().toLowerCase() === 'user' ? g.SEGMENTED: g.IMMUTABLE, m = k.getAuxiliaryData();
        return i.create(h.MENTION, l, {
            id: k.getUniqueID(),
            isWeak: m && m.renderType === 'non_member'
        });
    }
    e.exports = j;
}, null);
__d("MentionsInput.Experimental.react", ["AbstractMentionsTextEditor.Experimental.react", "EditorState", "MentionsLayer.react", "React", "createMentionEntity", "cx", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    var n = j.PropTypes, o = j.createClass({
        displayName: "MentionsInput",
        propTypes: {
            editorState: n.instanceOf(h).isRequired,
            mentionsSource: n.object,
            typeaheadView: n.func.isRequired,
            typeaheadViewPropTypes: n.object,
            spellCheck: n.bool,
            placeholder: n.string,
            className: n.string,
            autoflip: n.bool,
            handleContentReturn: n.func,
            handleDroppedFiles: n.func,
            handlePastedFiles: n.func,
            onAddMention: n.func,
            onShowMentions: n.func,
            onChange: n.func,
            onInputFocus: n.func,
            onInputBlur: n.func,
            onFile: n.func
        },
        blur: function() {
            this.refs.textEditor.blur();
        },
        focus: function() {
            this.refs.textEditor.focus();
        },
        render: function() {
            var p = m(this.props.className, "_5yk1");
            return (j.createElement("div", {
                className: p,
                onClick: this.focus,
                onFocus: this.focus
            }, j.createElement(g, j.__spread({}, this.props, {
                mentionResultsComponent: i,
                mentionResultsProps: {
                    typeaheadView: this.props.typeaheadView,
                    typeaheadViewProps: this.props.typeaheadViewProps,
                    autoflip: this.props.autoflip
                },
                mentionCreationFn: k,
                ref: "textEditor",
                className: "_5yk2"
            }))));
        }
    });
    e.exports = o;
}, null);
__d("ContentState", ["DocumentCharacters", "immutable"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = g.SOFT_NEWLINE, j = h.Record({
        blockMap: null,
        selectionBefore: null,
        selectionAfter: null
    });
    for (var k in j)
        if (j.hasOwnProperty(k))
            m[k] = j[k];
    var l = j === null ? null: j.prototype;
    m.prototype = Object.create(l);
    m.prototype.constructor = m;
    m.__superConstructor__ = j;
    function m() {
        if (j !== null)
            j.apply(this, arguments);
    }
    m.prototype.getBlockMap = function() {
        return this.blockMap;
    };
    m.prototype.getSelectionBefore = function() {
        return this.selectionBefore;
    };
    m.prototype.getSelectionAfter = function() {
        return this.selectionAfter;
    };
    m.prototype.getBlockForKey = function(n) {
        return this.getBlockMap().get(n);
    };
    m.prototype.getKeyBefore = function(n) {
        return this.getBlockMap().reverse().keySeq().skipUntil(function(o) {
            return o === n;
        }).skip(1).first();
    };
    m.prototype.getKeyAfter = function(n) {
        return this.getBlockMap().keySeq().skipUntil(function(o) {
            return o === n;
        }).skip(1).first();
    };
    m.prototype.getBlockAfter = function(n) {
        return this.getBlockMap().skipUntil(function(o, p) {
            return p === n;
        }).skip(1).first();
    };
    m.prototype.getBlockBefore = function(n) {
        return this.getBlockMap().reverse().skipUntil(function(o, p) {
            return p === n;
        }).skip(1).first();
    };
    m.prototype.getBlocksAsArray = function() {
        return this.getBlockMap().toArray();
    };
    m.prototype.getLastBlock = function() {
        return this.getBlockMap().last();
    };
    m.prototype.getPlainText = function(n) {
        return this.getBlockMap().map(function(o) {
            return o.getText();
        }).join(n || i);
    };
    m.prototype.hasText = function() {
        var n = this.getBlockMap();
        return (n.size > 1 || n.first().getLength() > 0);
    };
    e.exports = m;
}, null);
__d("createEmptySelectionState", ["SelectionState"], function(a, b, c, d, e, f, g) {
    "use strict";
    function h(i) {
        return new g({
            anchorKey: i,
            anchorOffset: 0,
            focusKey: i,
            focusOffset: 0,
            isBackward: false,
            hasFocus: false
        });
    }
    e.exports = h;
}, null);
__d("createContentStateFromBlocks", ["ContentState", "createEmptySelectionState", "createOrderedMapFromBlockArray"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    function j(k) {
        var l = i(k), m = h(l.first().getKey());
        return new g({
            blockMap: l,
            selectionBefore: m,
            selectionAfter: m
        });
    }
    e.exports = j;
}, null);
__d("createInitialEditorState", ["EditorState", "immutable", "createEmptySelectionState"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    function j(k, l) {
        var m = k.getBlockMap().first().getKey();
        return g.create({
            currentContent: k,
            undoStack: h.Stack(),
            redoStack: h.Stack(),
            decorator: l || null,
            selection: i(m)
        });
    }
    e.exports = j;
}, null);
__d("createPlainBlocksFromText", ["ComposedBlockType", "ComposedInlineStyle", "ContentBlock", "immutable", "generateBlockKey"], function(a, b, c, d, e, f, g, h, i, j, k) {
    function l(m) {
        return m.map(function(n) {
            var o = n.length;
            return new i({
                key: k(),
                text: n,
                type: g.UNSTYLED,
                inlineStyles: j.List(j.Repeat(h.NONE, o)),
                entities: j.List(j.Repeat(null, o))
            });
        });
    }
    e.exports = l;
}, null);
__d("createEditorStateWithMentions", ["DocumentCharacters", "EditorState", "applyEntityToContentBlock", "createContentStateFromBlocks", "createInitialEditorState", "createPlainBlocksFromText"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = new RegExp(g.SOFT_NEWLINE, 'ig');
    function n(o) {
        var p = o, q = p.text, r = p.ranges, s = p.decorator, t = p.mentionCreationFn, u = p.splitIntoBlocks, v = p.allowUndo, w, x;
        if (u === undefined)
            u = true;
        if (q) {
            w = u ? q.split(m) : [q];
            x = [];
            var y = 0;
            w.forEach(function(ba) {
                x.push(y);
                y += ba.length + 1;
            });
        } else 
            w = [''];
        var z = l(w);
        if (r && r.length && t)
            r.forEach(function(ba) {
                var ca = t(ba.entity);
                if (ca === null)
                    return;
                    var da = ba.offset, ea, fa;
                    for (var ga = 0; ga < x.length; ga++) {
                        var ha = x[ga], ia = x[ga + 1];
                        if (ia === undefined || (da >= ha && da < ia)) {
                            ea = z[ga];
                            fa = da - ha;
                            break;
                        }
                    }
                    z[ga] = i(ea, fa, fa + ba.length, ca);
                });
        var aa = k(j(z, s), s);
        if (v === false)
            aa = h.set(aa, {
                allowUndo: false
            });
        return aa;
    }
    e.exports = n;
}, null);
__d("createEmptyEditorState", ["createContentStateFromBlocks", "createInitialEditorState", "createPlainBlocksFromText"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    function j(k) {
        var l = i(['']), m = g(l);
        return h(m, k);
    }
    e.exports = j;
}, null);
__d("getMentionsTextForContentState", ["ComposedEntityType", "DocumentCharacters", "DocumentEntity", "emptyFunction", "findRangesImmutable"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = /[\\\]:]/g;
    function m(o) {
        var p = o.getBlockMap().map(function(q) {
            var r = q.getText(), s = q.getEntities(), t = [];
            k(s, j.thatReturnsTrue, function(u, v) {
                t.push(n(r.slice(u, v), s.get(u)));
            });
            return t.join('');
        });
        return p.join(h.SOFT_NEWLINE);
    }
    function n(o, p) {
        if (p) {
            var q = i.get(p);
            if (q.getType() === g.MENTION) {
                o = o.replace(l, function(r) {
                    return '\\' + r;
                });
                return '@[' + q.getData().id + ':' + o + ']';
            } else if (q.getType() === g.EMOTICON)
                return q.getData().originalEmoticon;
        }
        return o.replace('@[', '@ [');
    }
    e.exports = m;
}, null);
__d("getVisibleValueForContentState", ["ComposedEntityType", "DocumentCharacters", "DocumentEntity", "emptyFunction", "findRangesImmutable"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = g.EMOTICON, m = h.SOFT_NEWLINE;
    function n(o) {
        var p = o.getBlockMap().map(function(q) {
            var r = q.getText(), s = q.getEntities(), t = '';
            k(q.getEntities(), j.thatReturnsTrue, function(u, v) {
                var w = s.get(u);
                if (w === null) {
                    t += r.slice(u, v);
                } else {
                    var x = i.get(w);
                    if (x.getType() === l) {
                        t += x.getData().originalEmoticon;
                    } else 
                        t += r.slice(u, v);
                }
            });
            return t;
        });
        return p.join(m);
    }
    e.exports = n;
}, null);
__d("applyEmoticonToContentBlock", ["ComposedEntityMutability", "ComposedEntityType", "ComposedInlineStyle", "DocumentEntity", "EmoticonsList", "applyEntityToContentBlock"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    "use strict";
    var m = i.NONE, n = '\u3000';
    function o(p, q, r) {
        var s = j.create(h.EMOTICON, g.IMMUTABLE, {
            type: k.emotes[q],
            originalEmoticon: q
        }), t = p.getText(), u = p.getInlineStyles(), v = p.getEntities(), w = q.length;
        p = p.merge({
            text: (t.slice(0, r) + n + t.slice(r + w)),
            inlineStyles: (u.splice(r, w, m)),
            entities: (v.splice(r, w, s))
        });
        return l(p, r, r + n.length, s);
    }
    e.exports = o;
}, null);
__d("getTextAfterNearestEntity", [], function(a, b, c, d, e, f) {
    function g(h, i) {
        var j = h.getEntities(), k = i;
        while (j.get(k - 1) === null)
            k--;
        return h.getText().slice(k, i);
    }
    e.exports = g;
}, null);
__d("applyEmoticonToContentState", ["EmoticonsList", "applyEmoticonToContentBlock", "getTextAfterNearestEntity"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = new RegExp(g.regexp.source, 'g');
    function k(l, m) {
        var n = m.getAnchorKey(), o = m.getAnchorOffset(), p = l.getBlockForKey(n), q = i(p, o), r, s;
        while (s !== null) {
            s = j.exec(q);
            if (s !== null)
                r = s;
        }
        if (!r)
            return l;
        var t = r[1];
        if (!t && o !== q.length)
            return l;
        var u = r[2], v = o - q.length, w = v + r.index + r[1].length, x = l.getBlockMap().set(n, h(p, u, w));
        o -= (u.length - 1);
        return l.merge({
            blockMap: x,
            selectionBefore: m,
            selectionAfter: m.merge({
                anchorOffset: o,
                focusOffset: o
            })
        });
    }
    e.exports = k;
}, null);
__d("handleBeforeInputForEmoticon", ["DocumentModifierExperimental", "EditorChangeType", "EditorState", "applyEmoticonToContentState"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = new RegExp(/[\s'".,!?]/);
    function l(m, n) {
        var o = m.getSelection();
        if (!o.isCollapsed() ||!n ||!k.test(n))
            return m;
        var p = m.getCurrentContent(), q = j(p, o);
        if (q === p)
            return m;
        var r = g.insertText(q, q.getSelectionAfter(), n);
        return i.push(m, r, h.INSERT_CHARACTERS);
    }
    e.exports = l;
}, null);
__d("handleSoftNewlineForEmoticon", ["DocumentModifierExperimental", "EditorChangeType", "EditorState", "applyEmoticonToContentState"], function(a, b, c, d, e, f, g, h, i, j) {
    function k(l) {
        var m = l.getCurrentContent(), n = l.getSelection(), o = j(m, n);
        if (o === m)
            return l;
        var p = g.splitBlock(o, o.getSelectionAfter());
        return i.push(l, p, h.SPLIT_BLOCK);
    }
    e.exports = k;
}, null);
__d("isSoftNewlineEvent", ["Keys"], function(a, b, c, d, e, f, g) {
    function h(i) {
        return i.which === g.RETURN && (i.getModifierState('Shift') || i.getModifierState('Alt') || i.getModifierState('Control'));
    }
    e.exports = h;
}, null);
__d("UFIExperimentalMentionsInput.react", ["Arbiter", "BanzaiScuba", "Bootloader", "CommentPrelude", "ComposedEntityMutability", "ComposedEntityType", "DocumentEntity", "DocumentModifierExperimental", "DOMVector", "EditorChangeType", "EditorState", "Input", "Keys", "MentionsInput.Experimental.react", "React", "UserAgent", "URI", "createEditorStateWithMentions", "createEmptyEditorState", "createMentionEntity", "cx", "emptyFunction", "getMentionsInputDecorator", "getMentionsTextForContentState", "getVisibleValueForContentState", "handleBeforeInputForEmoticon", "handleSoftNewlineForEmoticon", "isSoftNewlineEvent", "setImmediate"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa, ga, ha, ia) {
    var ja = new h('ufi_tinder', null, {
        addBrowserFields: true,
        addGeoFields: true,
        addPredictedGeographyFields: true,
        addMobileDeviceFields: true,
        addUser: true
    }), ka = 200, la = ((v.isPlatform('iOS') || v.isPlatform('Linux') || v.isPlatform('Mac OS X') || v.isPlatform('Windows') || v.isPlatform('Chrome OS')) && (v.isBrowser('Chrome') || v.isBrowser('Firefox >= 16') || v.isBrowser('IE >= 9') || v.isBrowser('Opera >= 12') || v.isBrowser('Mobile Safari >= 6') || v.isBrowser('Safari >= 5')));
    function ma(qa) {
        var ra = qa.map(function(sa) {
            return {
                kind: 'file',
                type: sa.type,
                getAsFile: ba.thatReturns(sa)
            };
        });
        return {
            clipboardData: {
                items: ra
            }
        };
    }
    function na(qa) {
        var ra = /^image\//;
        return qa.filter(function(sa) {
            return ra.test(sa.type);
        });
    }
    var oa = u.createClass({
        displayName: "UFIExperimentalMentionsInput",
        getInitialState: function() {
            var qa = '', ra = [];
            if (this.props.initialData) {
                qa = this.props.initialData.value || '';
                ra = this.props.initialData.mentions || [];
                ra = ra.map(function(ta) {
                    return Object.assign({}, ta, {
                        entity: {
                            uid: ta.uid,
                            weakreference: ta.weakreference
                        }
                    });
                });
            }
            var sa = x({
                text: qa,
                ranges: ra,
                decorator: ca(),
                mentionCreationFn: pa
            });
            sa = q.moveSelectionToEnd(sa);
            return {
                bootloaded: false,
                fullRender: !!(this.props.initialData && this.props.initialData.value),
                typeaheadReporter: null,
                editorState: sa,
                mentionsSource: null,
                mentionableEntries: null,
                fallbackText: qa
            };
        },
        hasEnteredText: function() {
            return !!this.state.editorState.getCurrentContent().getPlainText().trim();
        },
        focus: function() {
            this._triggerFullRender(function() {
                if (la) {
                    this.refs.mentionsInput.focus();
                } else 
                    this.refs.textarea.getDOMNode().focus();
            }.bind(this));
        },
        submitComment: function(event) {
            if (this._submitComment(event))
                this._clearDocumentState();
        },
        insertMention: function(qa) {
            this._triggerFullRender(function() {
                if (la) {
                    var ra = this.state.editorState, sa = ra.getSelection(), ta = ra.getCurrentContent(), ua = sa.getStartKey(), va = sa.getStartOffset(), wa = ta.getBlockForKey(ua), xa;
                    if (wa.getText().substr(va - 1, 1).trim().length > 0) {
                        var ya = n.replaceText(ta, sa, ' ');
                        sa = ya.getSelectionAfter();
                        xa = n.insertText(ya, sa, qa.getTitle(), ra.getCurrentInlineStyle(), z(qa));
                    } else 
                        xa = n.replaceText(ta, sa, qa.getTitle(), ra.getCurrentInlineStyle(), z(qa));
                    ra = q.push(ra, xa, p.INSERT_FRAGMENT);
                    ra = q.updateSelection(ra, ra.getSelection().set('hasFocus', true), true);
                    this.setState({
                        editorState: ra
                    });
                    this.focus();
                } else {
                    this.refs.textarea.getDOMNode().focus();
                    if (this.state.fallbackText.length) {
                        this.setState({
                            fallbackText: this.state.fallbackText + ' ' + qa.title
                        });
                    } else 
                        this.setState({
                            fallbackText: qa.title
                        });
                }
            }.bind(this));
        },
        insertEmoticon: function(qa) {
            if (!la) {
                this.setState({
                    fallbackText: this.state.fallbackText + ' ' + qa
                });
                return;
            }
            var ra = this.state.editorState, sa = ra.getCurrentContent(), ta = ra.getSelection(), ua = sa.getBlockForKey(ta.getStartKey()).getText()[ta.getStartOffset() - 1];
            if (ua && ua !== ' ')
                qa = ' ' + qa;
            var va = sa.getBlockForKey(ta.getEndKey()).getText()[ta.getEndOffset()];
            if (va && va !== ' ')
                qa += ' ';
            var wa = n.replaceText(ra.getCurrentContent(), ra.getSelection(), qa);
            ra = q.push(ra, wa, p.INSERT_CHARACTERS);
            ra = q.updateSelection(ra, ra.getSelection().set('hasFocus', true), true);
            this.setState({
                editorState: ra
            });
        },
        _informHeightChange: function() {
            if (this.props.monitorHeight)
                ia(function() {
                    if (!this.isMounted())
                        return;
                        var qa = la ? this.refs.mentionsInput.getDOMNode(): this.refs.textarea.getDOMNode(), ra = o.getElementDimensions(qa).y;
                        if (ra !== this._height) {
                            this._height = ra;
                            g.inform('ufi/inputHeightChanged', {
                                node: qa
                            });
                        }
                    }.bind(this));
        },
        _onChange: function(qa) {
            this.setState({
                editorState: qa
            }, this._informHeightChange);
        },
        _clearDocumentState: function() {
            this.state.typeaheadReporter && this.state.typeaheadReporter.sessionEnd();
            var qa = y(ca());
            this.setState({
                editorState: q.moveFocusToEnd(qa)
            });
        },
        _handleContentReturn: function(qa) {
            if (ha(qa)) {
                var ra = ga(this.state.editorState);
                if (ra === this.state.editorState) {
                    return false;
                } else {
                    this.setState({
                        editorState: ra
                    });
                    return true;
                }
            }
            if (this._submitComment(qa)) {
                this._clearDocumentState();
                return true;
            }
            return false;
        },
        _handleBeforeInput: function(qa) {
            var ra = fa(this.state.editorState, qa);
            if (ra === this.state.editorState) {
                return false;
            } else {
                this.setState({
                    editorState: ra
                });
                return true;
            }
        },
        _submitComment: function(qa) {
            var ra = this.state.editorState.getCurrentContent(), sa = ea(ra), ta = da(ra), ua = {
                visibleValue: sa,
                encodedValue: ta
            }, va = r.getValue(this.refs.proxyInput.getDOMNode());
            if (va) {
                var wa = new w(a.location.href);
                ja.addNormal('path', wa.getPath());
                ja.addNormal('proxy_value', va.substr(0, ka));
                ja.post();
            }
            return this.props.onEnterSubmit(ua, qa);
        },
        _handleFiles: function(qa) {
            var ra = na(qa);
            if (ra.length) {
                this.props.onPaste(ma(ra));
                return true;
            }
            return false;
        },
        _handleDroppedFiles: function(qa, ra) {
            return this._handleFiles(ra);
        },
        _handlePastedFiles: function(qa) {
            return this._handleFiles(qa);
        },
        _onMentionsInputBlur: function() {
            this.state.typeaheadReporter && this.state.typeaheadReporter.sessionEnd();
            this.props.onBlur && this.props.onBlur();
        },
        _onMentionsInputFocus: function() {
            if (!this.state.bootloaded&&!this._currentlyBootloading) {
                this._currentlyBootloading = true;
                i.loadModules(["TypeaheadMetricReporter", "getMentionsSearchSource"], function(qa, ra) {
                    if (!this.isMounted())
                        return;
                    var sa = new qa({
                        event_name: 'tinder_mentions'
                    });
                    sa.sessionStart();
                    var ta = ra(this.props.datasource, sa);
                    ta.bootstrap();
                    this.setState({
                        typeaheadReporter: sa,
                        bootloaded: true,
                        mentionsSource: ta
                    }, function() {
                        this._currentlyBootloading = false;
                    }.bind(this));
                }.bind(this));
            } else if (this.state.typeaheadReporter)
                this.state.typeaheadReporter.sessionStart();
            this.props.onFocus && this.props.onFocus();
        },
        _onShowMentions: function(qa, ra) {
            if (this.state.typeaheadReporter)
                this.state.typeaheadReporter.reportResults(qa.map(function(sa) {
                    return sa.getUniqueID();
                }));
        },
        _onAddMention: function(qa, ra, sa) {
            if (this.state.typeaheadReporter) {
                this.state.typeaheadReporter.reportSelect(qa.getUniqueID(), qa.getType(), ra, sa.button >= 0);
                this.state.typeaheadReporter.sessionEnd();
            }
        },
        _onFallbackKeyDown: function(qa) {
            if (qa.which !== s.RETURN)
                return;
            if (ha(qa) ||!this.state.fallbackText.trim())
                return;
            qa.preventDefault();
            var ra = {
                visibleValue: this.state.fallbackText,
                encodedValue: this.state.fallbackText
            };
            if (this.props.onEnterSubmit(ra, qa))
                this.setState({
                    fallbackText: ''
                });
        },
        _onFallbackChange: function(qa) {
            this.setState({
                fallbackText: qa.target.value
            });
        },
        _onFallbackBlur: function(qa) {
            this.props.onBlur && this.props.onBlur();
        },
        _onFallbackFocus: function(qa) {
            this.props.onFocus && this.props.onFocus();
        },
        _sortByRenderType: function(qa, ra) {
            var sa = qa.getAuxiliaryData().renderType, ta = ra.getAuxiliaryData().renderType;
            if (sa === ta)
                return qa.getOrder() - ra.getOrder();
            var ua = this.props.viewOptionsTypeObjectsOrder;
            return ua.indexOf(sa) - ua.indexOf(ta);
        },
        _triggerFullRender: function(qa) {
            this.setState({
                fullRender: true
            }, qa);
        },
        _triggerFullRenderWithoutCallback: function() {
            this._triggerFullRender();
        },
        _renderFallback: function() {
            return (u.createElement("div", null, u.createElement("textarea", {
                ref: "textarea",
                className: "UFIAddCommentInput _5vbt",
                name: "add_comment_text",
                placeholder: this.props.placeholder,
                spellCheck: true,
                onKeyDown: this._onFallbackKeyDown,
                onChange: this._onFallbackChange,
                onBlur: this._onFallbackBlur,
                onFocus: this._onFallbackFocus,
                value: this.state.fallbackText
            })));
        },
        _renderProxyInput: function() {
            if (!this.props.hideProxyInput) {
                var qa = "_5t55 mentionsHidden";
                return (u.createElement("input", {
                    className: qa,
                    name: "add_comment_text",
                    ref: "proxyInput",
                    onFocus: this.focus,
                    tabIndex: "-1"
                }));
            }
        },
        _renderDummy: function() {
            var qa = "UFIAddCommentInput _5vr7 _2y3v";
            return (u.createElement("div", {
                onFocus: this._triggerFullRenderWithoutCallback,
                onSelect: ba,
                onClick: this._triggerFullRenderWithoutCallback,
                onTouchStart: this._triggerFullRenderWithoutCallback,
                onMouseOver: this._triggerFullRenderWithoutCallback
            }, this._renderProxyInput(), u.createElement("div", {
                className: qa
            }, this.props.placeholder)));
        },
        _onClickEditorContainer: function(qa) {
            j.click(qa.target, false);
        },
        _renderMentionsInput: function() {
            var qa = "UFIAddCommentInput _5vr7", ra = Object.assign({
                mentionSortFn: (this.props.viewOptionsTypeObjectsOrder ? this._sortByRenderType : null)
            }, this.props.viewProps);
            return (u.createElement("div", {
                onClick: this._onClickEditorContainer
            }, this._renderProxyInput(), u.createElement(t, {
                ref: "mentionsInput",
                className: qa,
                editorState: this.state.editorState,
                onChange: this._onChange,
                mentionsSource: this.state.mentionsSource,
                typeaheadView: this.props.viewComponent,
                typeaheadViewProps: ra,
                spellCheck: true,
                placeholder: this.props.placeholder,
                onAddMention: this._onAddMention,
                onShowMentions: this._onShowMentions,
                onFocus: this._onMentionsInputFocus,
                onBlur: this._onMentionsInputBlur,
                handleContentReturn: this._handleContentReturn,
                handleBeforeInput: this._handleBeforeInput,
                handlePastedFiles: this._handlePastedFiles,
                handleDroppedFiles: this._handleDroppedFiles,
                autoflip: this.props.autoflip
            })));
        },
        componentDidMount: function() {
            if (!la) {
                if (this.state.fallbackText)
                    this.refs.textarea.getDOMNode().focus();
            } else if (this.state.editorState.getCurrentContent().hasText())
                ia(function() {
                    this.isMounted() && this.focus();
                }.bind(this));
        },
        render: function() {
            if (!la)
                return this._renderFallback();
            if (!this.state.fullRender)
                return this._renderDummy();
            return this._renderMentionsInput();
        }
    });
    function pa(qa) {
        return m.create(l.MENTION, k.IMMUTABLE, {
            id: qa.uid,
            isWeak: qa.weakreference
        });
    }
    e.exports = oa;
}, null);
__d("cssURL", [], function(a, b, c, d, e, f) {
    function g(h) {
        return "url('" + h.replace(/(\\|\s|\(|\)|'|\")/g, '\\$1') + "')";
    }
    e.exports = g;
}, null);
__d("MentionsTypeaheadViewItem.react", ["Badge.react", "ImageBlock.react", "React", "TypeaheadViewItem", "cssURL", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = i.createClass({
        displayName: "MentionsTypeaheadViewItem",
        mixins: [j.Mixin],
        propTypes: Object.assign({}, j.propTypes, {
            ariaDescribedBy: i.PropTypes.string
        }),
        render: function() {
            var n = this.props.entry, o = n.getAuxiliaryData(), p = null;
            if (o)
                if (o.verified) {
                    p = i.createElement(g, {
                        type: "verified",
                        size: "xsmall"
                    });
                } else if (o.workUser)
                    p = i.createElement(g, {
                        type: "work",
                        size: "xsmall"
                    });
            var q = n.getPhoto() ? i.createElement("span", {
                className: "_5u93",
                style: {
                    backgroundImage: k(n.getPhoto())
                }
            }): i.createElement("span", null), r = null;
            if (n.getSubtitle())
                r = i.createElement("div", {
                    className: "_5u95"
                }, n.getSubtitle());
            var s = (("_5u91") + (this.props.highlighted ? ' ' + "_5u92" : ''));
            return (i.createElement("li", {
                role: "option",
                className: s,
                "aria-label": n.getTitle(),
                "aria-selected": this.props.highlighted,
                "aria-describedby": this.props.ariaDescribedBy,
                onMouseDown: this._onSelect,
                onMouseEnter: this._onHighlight
            }, i.createElement(h, {
                spacing: "medium"
            }, q, i.createElement("div", null, i.createElement("div", {
                className: "_5u94"
            }, n.getTitle(), p), r))));
        }
    });
    e.exports = m;
}, null);
__d("MentionsInputTypeaheadView.react", ["MentionsTypeaheadViewItem.react", "ReactPropTypes", "React", "cx"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = i.createClass({
        displayName: "MentionsInputTypeaheadView",
        propTypes: {
            id: h.string,
            highlightedEntry: h.object,
            entries: h.array.isRequired,
            onSelect: h.func.isRequired,
            onHighlight: h.func,
            onRenderHighlight: h.func
        },
        _renderItem: function(l) {
            var m = l === this.props.highlightedEntry;
            return (i.createElement(g, {
                key: l.getUniqueID(),
                entry: l,
                highlighted: m,
                onSelect: this.props.onSelect,
                onHighlight: this.props.onHighlight,
                onRenderHighlight: this.props.onRenderHighlight
            }));
        },
        render: function() {
            var l = (("_5u8_") + (!this.props.entries.length ? ' ' + "_5u90" : ''));
            return (i.createElement("ul", {
                className: l,
                role: "listbox",
                id: this.props.id
            }, this.props.entries.map(this._renderItem)));
        }
    });
    e.exports = k;
}, null);
__d("BanzaiNectar", ["Banzai"], function(a, b, c, d, e, f, g) {
    function h(j) {
        return {
            log: function(k, l, m) {
                var n = {
                    e: l,
                    a: m
                };
                g.post('nectar:' + k, n, j);
            }
        };
    }
    var i = h();
    i.create = h;
    e.exports = i;
}, null);
__d("VideosRenderingInstrumentation", ["DataStore"], function(a, b, c, d, e, f, g) {
    var h = {
        storeRenderTime: function(i) {
            var j = Date.now();
            g.set(i, 'videos_rendering_instrumentation', j);
            return j;
        },
        retrieveRenderTime: function(i) {
            var j = g.get(i, 'videos_rendering_instrumentation', NaN);
            if (Number.isNaN(j))
                j = h.storeRenderTime(i);
            return j;
        }
    };
    e.exports = h;
}, null);
