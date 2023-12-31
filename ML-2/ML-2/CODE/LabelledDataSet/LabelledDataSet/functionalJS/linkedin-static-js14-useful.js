LI.define("TreasuryNmp");
LI.TreasuryNmp = function(c, b) {
    var d = "treasury-open-item", a;
    a = LI.TREASURY_CONF = b;
    YAHOO.util.Get.css(LI.TreasuryNmpDependencies.treasuryCSS);
    YAHOO.util.Get.script(LI.TreasuryNmpDependencies.treasuryJS);
    $(document).on("click", 'a[href*="mediaId"]', function(j) {
        var h = $(this), f = unescape(h.attr("href")), g = f && f.match(/mediaId=(\d+)/), i = g && g[1], k, l, i;
        if (i) {
            k = f.match(/id=(\d+)/);
            l = k && k[1] && parseInt(k[1], 10);
            a.url.post_view_event = a.url.post_view_event.replace("_ownerId", l);
            a.isNmp = true;
            a.selfView = (l === a.sessionId);
            a.memberId = l;
            h.attr("data-event-id", d);
            h.attr("data-item-id", i);
            LI.Events.fire(d, h);
            j.preventDefault()
        }
    })
};
LI.define("NusFlagging");
(function() {
    var m = "data-selected-nus-item", b = "comment-item", l = "loading", n = "nus-undo", i = "feed-delete-comment", d = ".nusDeleteUpdate [data-li-dialog-action=ok]", c = ".nusDeleteUpdate [data-li-dialog-action=cancel]", a = ".homepage-nus-comment .standard-form [data-li-dialog-action=ok]", f = ".homepage-nus-comment .standard-form [data-li-dialog-action=cancel]", k = ".report-copyright-material [data-li-dialog-action=ok]", h = ".report-copyright-material [data-li-dialog-action=cancel]", g = "click", e = "flaggingComment";
    function j(r, q) {
        var u = {
            flagLinkSelector: "li.comment-item [data-li-uscp-action=flag-member-comment]",
            undoFlagLinkSelector: "li.comment-item [data-li-uscp-action=undo-flag-member-comment]",
            reportLinkSelector: "li.comment-item [data-li-uscp-action=report-member-comment]",
            copyrightReportUrl: null
        }, p = $.extend({}, u, q), s = $(r), t = $("body");
        if (p.reportLinkSelector) {
            s.delegate(p.reportLinkSelector, g, this.reportMember)
        }
        if (p.flagLinkSelector) {
            s.delegate(p.flagLinkSelector, g, this.flagMember)
        }
        if (p.undoFlagLinkSelector) {
            s.delegate(p.undoFlagLinkSelector, g, this.undoFlagMember)
        }
        t.delegate(k, g, this.continueToReportCopyright);
        t.delegate(h, g, this.cancelReportCopyright);
        t.delegate(f, g, this.cancelReportFlaggedMemberComment);
        t.delegate(a, g, this.reportFlaggedMemberComment);
        var o = $("<span></span>").addClass("callout-content").text(LI.i18n.get("NUS_FLAGGING_DELETE")), v = $("<span></span>").addClass("callout-content").text(LI.i18n.get("NUS_FLAGGING_FLAG_AND_HIDE"));
        $("<span></span>").attr("id", "delete-my-comment").css("display", "none").html(o).appendTo("body");
        $("<span></span>").attr("id", "flag-member-comment").css("display", "none").html(v).appendTo("body")
    }
    j.prototype = {
        flagMember: function(p) {
            p.preventDefault();
            var s = $(p.target), t = s.parents(".comment-item"), r = t.attr("li-data-uscp-entity"), q = t.attr("data-flag-url") + "&entityId=" + r + "&reason=" + e;
            function o() {
                if (!j.Dialog) {
                    j.Dialog = new LI.Dialog()
                }
                var x = ['<div class="', n, '">', "<p>", LI.i18n.get("NUS_FLAGGING_COMMENT_HIDDEN_YOU_CAN_UNDO_OR_REPORT"), "</p></div>"].join(""), w = $(this), v = $(x);
                w.addClass("nus-hidden-undo");
                w.append(v).removeClass(l)
            }
            function u() {
                var v = $(this);
                LI.injectAlert(LI.i18n.get("NUS_FLAGGING_THERE_WAS_AN_ERROR"), "error");
                v.removeClass(l)
            }
            t.addClass(l);
            $.ajax({
                url: q,
                method: "POST",
                headers: {
                    "X-IsAJAXForm": 1
                },
                context: t,
                success: o,
                error: u
            })
        },
        undoFlagMember: function(o) {
            o.preventDefault();
            var s = $(o.target), u = s.parents(".comment-item"), q = u.attr("li-data-uscp-entity"), p = u.attr("data-uflag-url") + "&entityId=" + q + "&reason=" + e;
            function r() {
                var x = $(o.target), v = $(this), w = x.parents("." + n);
                w.remove();
                v.removeClass("nus-hidden-undo")
            }
            function t() {
                LI.injectAlert(LI.i18n.get("NUS_FLAGGING_THERE_WAS_AN_ERROR"), "error")
            }
            $.ajax({
                url: p,
                method: "POST",
                headers: {
                    "X-IsAJAXForm": 1
                },
                context: u,
                success: r,
                error: t
            })
        },
        reportMember: function(o, q) {
            o.preventDefault();
            var r = j.prototype, p, u, t = LI.CommentFlagReportDependencies.url, s = {
                title: LI.i18n.get("NUS_FLAGGING_REPORT"),
                dustTemplate: "comment_report_form",
                dustDataUrl: t
            };
            if (q) {
                j.Dialog.swap({
                    content: s
                })
            } else {
                p = $(o.target);
                u = p.parents(".comment-item");
                u.attr(m, true);
                j.Dialog.open(o, {
                    name: "CommentFlagReportDialog",
                    width: 500,
                    className: "dialog-v2 comment-report-form copyright-enabled homepage-nus-comment",
                    type: "interrupt",
                    content: s,
                    dependencies: LI.CommentFlagReportDependencies
                })
            }
        },
        reportFlaggedMemberComment: function(o) {
            o.preventDefault();
            var t = $("li." + b + "[" + m + "]"), q = $(o.target).parents(".standard-form"), s = t.attr("li-data-uscp-entity"), u = $("#social_flag_comment_form_id").find("[name=reason]:radio:checked").val(), r = t.attr("data-flag-url") + "&entityId=" + s + "&reason=" + u;
            function v() {
                var y = $("li." + b + "[" + m + "]"), w = $(this), z = y.children("." + n), A = w.find("li.copyright :radio").is(":checked"), x = LI.i18n.get("NUS_FLAGGING_THANK_YOU_FOR_REPORTING");
                if (A) {
                    j.prototype.reportCommentAsCopyright()
                } else {
                    j.Dialog.close();
                    z.children("p").html(x).end().children("a").remove();
                    y.removeAttr(m)
                }
            }
            function p(w) {
                var x = $(this);
                j.Dialog.close();
                LI.injectAlert(LI.i18n.get("NUS_FLAGGING_THERE_WAS_AN_ERROR"), "error");
                x.removeAttr(m)
            }
            $.ajax({
                url: r,
                method: "POST",
                headers: {
                    "X-IsAJAXForm": 1
                },
                context: q,
                success: v,
                error: p
            })
        },
        cancelReportFlaggedMemberComment: function(o) {
            o.preventDefault();
            var p = $("li." + b + "[" + m + "]");
            p.removeAttr(m);
            j.Dialog.close()
        },
        reportCommentAsCopyright: function() {
            var q = j.prototype, p = ['<div class="report-copyright-material dialog-container interrupt">', "<p>", LI.i18n.get("NUS_FLAGGING_THANK_YOU_COPYRIGHT_REPORTED"), "</p>", "<p>", LI.i18n.get("NUS_FLAGGING_CONTINUE_TO_FILE_COPYRIGHT_FORM"), "</p>", '<div class="dialog-actions">', '<a href="#" data-li-dialog-action="open-form"><button class="btn-primary confirm-delete" type="button">', LI.i18n.get("NUS_FLAGGING_OPEN_THE_FORM"), "</button></a>", '<a href="#" data-li-dialog-action="cancel" class="dialog-close"><button class="btn-secondary" type="button">', LI.i18n.get("NUS_FLAGGING_CANCEL"), "</button></a>", "</div></div>"].join(""), o = $(p);
            j.Dialog.swap({
                content: {
                    node: o.get(0)
                }
            })
        },
        continueToReportCopyright: function(o) {
            var r = $("li." + b + "[" + m + "]"), s = r.children("." + n), p = this.reportCopyrightUrl, q = LI.i18n.get("NUS_FLAGGING_THANK_YOU_FOR_REPORTING");
            window.open(p, "", "height=600,width=800");
            j.Dialog.close();
            s.children("p").html(q).end().children("a").remove();
            r.removeAttr(m)
        },
        cancelReportCopyright: function(o) {
            j.prototype.reportMember(o, true)
        },
        deleteEntity: function(o) {
            o.preventDefault();
            var s = j.prototype, q = $(o.target), t = q.parents("li." + b), r = ['<div class="dialog-container interrupt">', '<div class="alert attention"><p><strong>', LI.i18n.get("NUS_FLAGGING_ARE_YOU_SURE_DELETE_COMMENT"), "</strong></p></div>", '<p class="actions">', '<a href="#" data-li-uscp-item-id="', q.attr("id"), '" data-li-dialog-action="ok" class="btn-primary confirm-delete">', LI.i18n.get("NUS_FLAGGING_YES_PLEASE_DELETE_IT"), "</a>", '<a href="#" data-li-dialog-action="cancel" class="dialog-close btn-secondary">', LI.i18n.get("NUS_FLAGGING_CANCEL"), "</a>", "</p></div>"].join(""), p = $(r);
            t.attr(m, true);
            j.Dialog.open(o, {
                name: "nusDeleteUdpate",
                type: "interrupt",
                width: "500",
                className: "dialog-v2 nusDeleteUpdate",
                content: {
                    node: p.get(0),
                    title: LI.i18n.get("NusDeleteUpdate-please-confirm")
                }
            });
            $(d).bind(g, s.hideDeletedEntity);
            $(c).bind(g, s.unHideDeletedEntity)
        },
        hideDeletedEntity: function(o) {
            o.preventDefault();
            var p = $("li." + b + "[" + m + "]"), q = p.find("." + i);
            LI.Controls.getControl("feed-wrapper", "NusDiscussion").deleteComment(q[0], p[0]);
            p.removeAttr(m).removeClass("." + l);
            $(d).unbind(g);
            $(c).unbind(g);
            j.Dialog.close()
        },
        unHideDeletedEntity: function(o) {
            o.preventDefault();
            var p = $("li." + b + "[" + m + "]");
            p.removeAttr(m).removeClass("." + l);
            $(d).unbind(g);
            $(c).unbind(g);
            j.Dialog.close()
        }
    };
    LI.NusFlagging = j
}());
LI.define("SCINHiding");
LI.SCINHiding = LI.BaseControl.extend(function(b) {
    var j = "nus-scin-hide-item", c = "linkedin-sponsor", m = "scin-nus-hide-undo", d = "scin-nus-hide-close", l = "scin-feed-item", a = "scin-nus-hide", e = "scin-nus-hide-content", h = "tl/apps/home/embed/scin_hide_confirmation", n = "data-li-scin-hideurl", k = "data-li-scin-track-undo", f = 500, g = "click", i = {
        breakoutPage: 0
    };
    return {
        beforeDecoration: function() {
            this._config = _.defaults(this._config, i)
        },
        attachEventListeners: function() {
            this._$el.on(g, _.bind(this.click, this))
        },
        onResolve: function(o) {
            this.click()
        },
        click: function(v) {
            var p = $(v.target), s = p.attr(n), r, o, q, u = Boolean(parseInt(this._config.breakoutPage, 2));
            if (s) {
                r = p.closest("." + c);
                if (r.length) {
                    o = $(r[0]);
                    v.preventDefault();
                    if (p.hasClass(j)) {
                        q = p.attr(k);
                        LI.asyncRequest("GET", s, {
                            success: function(x) {
                                o.children().addClass(e);
                                var w;
                                if (x.responseText.hideEntity && x.responseText.hideEntity.result === 200) {
                                    x.responseText.hideEntity.undoTrackUrl = q;
                                    w = x.responseText;
                                    dust.render(h, w, function(y, z) {
                                        if (!y && z) {
                                            o.append(z);
                                            o.addClass(l)
                                        } else {
                                            return
                                        }
                                    })
                                } else {
                                    return
                                }
                            },
                            failure: function() {
                                return
                            }
                        })
                    } else {
                        if (p.hasClass(m)) {
                            o.children().removeClass(e);
                            o.children("." + a).remove();
                            LI.asyncRequest("GET", s, {
                                success: function(w) {
                                    if (w.responseText.hideEntity.result === 204) {
                                        return
                                    } else {
                                        return
                                    }
                                },
                                failure: function() {
                                    return
                                }
                            })
                        } else {
                            if (p.hasClass(d)) {
                                var t = p.attr(n);
                                o.animate({
                                    opacity: 0
                                }, f, function() {
                                    $(this).remove();
                                    if (u) {
                                        window.location = t
                                    }
                                })
                            } else {
                                return
                            }
                        }
                    }
                } else {
                    return
                }
            }
        }
    }
});
(function() {
    dust.register("tl/apps/home/embed/scin_hide_confirmation", b);
    function b(d, c) {
        return d.section(c.get("hideEntity"), c, {
            "block": a
        }, null)
    }
    function a(d, c) {
        return d.write('<div class="scin-nus-hide"><p class="scin-nus-hide-text">').reference(c.get("i18n_scin_hidden_update"), c, "h", ["s"]).write(' <a href="').reference(c.get("undo_link"), c, "h").write('" class="scin-nus-hide-undo" data-li-track-url="').reference(c.get("undoTrackUrl"), c, "h").write('" data-li-scin-hideurl="').reference(c.get("undo_link"), c, "h").write('">').reference(c.get("i18n_scin_hide_undo"), c, "h", ["s"]).write('</a><a href="close_home_link" data-li-scin-hideurl="').reference(c.get("close_home_link"), c, "h").write('" class="scin-nus-hide-close">').reference(c.get("i18n_scin_hide_close"), c, "h").write("</a></p></div>")
    }
    return b
})();
(function() {
    dust.register("scin_hide_confirmation", dust.cache["tl/apps/home/embed/scin_hide_confirmation"])
})();
(function() {
    LI.ChannelFollow = function(c) {
        var b = "not-following", d = "not-followed", g = "href", a = "POST", e = ".feed-item-meta", j = "trigger-inline-recommendation", h = "adding-inline-recommendation";
        var k = function() {
            $(c).on("click", "a", f)
        };
        var f = function(n) {
            var p = $(n.target), o, m, l, q;
            if (p.get(0).tagName.toUpperCase() !== "A") {
                p = p.parent("a")
            }
            if (p) {
                m = p.parent("li");
                if (m.hasClass("feed-see-more-channels")) {
                    n.preventDefault();
                    i(m, n)
                } else {
                    if (m.hasClass("channel-feed-follow")) {
                        o = p.attr(g);
                        if (o) {
                            n.preventDefault();
                            LI.asyncRequest(a, o, {
                                success: function(s, r, u) {
                                    var t = p.hasClass(b);
                                    if (t) {
                                        m.removeClass(d);
                                        i(m, n)
                                    } else {
                                        m.addClass(d)
                                    }
                                }
                            })
                        }
                    }
                }
            }
        };
        var i = function(l, m) {
            var n = l.closest(".feed-item-meta").siblings();
            if (l&&!(l.hasClass(h)) && ((n.closest(".rollup-member-details")).length === 0) && (!(n.hasClass("recommended-item-section")))) {
                l.addClass(h);
                LI.Events.fire(j, m, l)
            }
        };
        k()
    }
}());
(function() {
    LI.define("FollowRecommendation");
    LI.FollowRecommendation = function(b, d) {
        var l = "trigger-inline-recommendation", a = "POST", g = "GET", j = "hide", c = "show", h = "data-inl-recom-url", i = "data-inl-recom-tmpl", k = "adding-inline-recommendation";
        var m = function() {
            LI.Events.bind(l, f);
            $(b).on("click", "a", e)
        };
        var f = function(s, n) {
            var q = $(s.target), r, o, p;
            r = q.closest(".feed-body");
            o = q.attr(i);
            p = q.attr(h);
            LI.asyncRequest(g, p, {
                success: function(u, t, v) {
                    if (u.responseText) {
                        dust.render(o, u.responseText, function(x, w) {
                            if (!x) {
                                $(w).appendTo(r).hide().addClass("animate").show()
                            }
                        })
                    }
                    n.removeClass(k)
                },
                error: function(t) {
                    n.removeClass(k)
                }
            })
        };
        var e = function(n) {
            var p = $(n.target), o;
            if (p && (p.get(0).tagName.toUpperCase() === "A") && p.hasClass("recommended-item-follow-action")) {
                n.preventDefault();
                o = p.attr("href");
                LI.asyncRequest(a, o, {
                    success: function(u, q, s) {
                        var r, t;
                        p.addClass(j);
                        p.next().removeClass(j).addClass(c);
                        r = p.prev().find("span:first-child");
                        t = parseInt(r.text().replace(",", ""), 10);
                        r.text(isFinite(t)?++t : t)
                    }
                })
            }
        };
        m()
    }
}());
(function() {
    dust.register("tl/shared/uscp/feed/recommendations/_follow", e);
    function e(i, h) {
        return i.write('<div class="recommended-item-section">').section(h.get("recommended_channels"), h, {
            "block": d
        }, null).write("</div>")
    }
    function d(i, h) {
        return i.exists(h.get("channels"), h, {
            "block": c
        }, null)
    }
    function c(i, h) {
        return i.write('<ul class="recommended-items">').section(h.get("channels"), h, {
            "block": b
        }, null).write('</ul><div class="recommended_items_see_more"><a href="').reference(h.get("follow_recommendations_see_more"), h, "h").write('" class="see-more">').reference(h.get("i18n_follow_recommendation_follow_more_channels"), h, "h", ["s"]).write('<span class="text">').reference(h.get("i18_follow_recommendation_see_more"), h, "h", ["s"]).write('</span><span class="glyph"></span></a></div>')
    }
    function b(i, h) {
        return i.section(h.get("channel"), h, {
            "block": a
        }, null)
    }
    function a(i, h) {
        return i.write('<li class="recommended-item"><div class="recommended-item-photo">').exists(h.get("logo"), h, {
            "else": g,
            "block": f
        }, null).write('</div><div class="recommended-item-properties"><a class="recommended-item-title" href="').reference(h.get("follow_recommendations_item_link"), h, "h").write('">').reference(h.get("fmtAuto_string_truncate_1"), h, "h").write('</a><p class="recommended-item-follower-count">').reference(h.get("i18n_num_followers"), h, "h", ["s"]).write('</p><a class="recommended-item-follow-action follow show" href="').reference(h.get("follow_recommendations_follow_action_link"), h, "h").write('"><span class="glyph"></span>').reference(h.get("i18n_follow_recommendation_action_text"), h, "h").write('</a><span class="recommended-item-follow-action following hide"><span class="glyph"></span>').reference(h.get("i18n_follow_recommendation_following"), h, "h").write("</span></div></li>")
    }
    function g(i, h) {
        return i.write('<a href="').reference(h.get("follow_recommendations_item_link_img"), h, "h").write('"><img alt="').reference(h.get("vanityName"), h, "h").write('" src="').reference(h.get("no_photo_img_link"), h, "h").write('" width="65" height="65"/></a>')
    }
    function f(i, h) {
        return i.write('<a href="').reference(h.get("follow_recommendations_item_link_img"), h, "h").write('"><img alt="').reference(h.get("vanityName"), h, "h").write('" src="').reference(h.get("resolved_photo"), h, "h").write('" width="65" height="65"/></a>')
    }
    return e
})();
(function() {
    dust.register("_follow", dust.cache["tl/shared/uscp/feed/recommendations/_follow"])
})(); /*! SWFObject v2.1 <http://code.google.com/p/swfobject/>
	Copyright (c) 2007-2008 Geoff Stearns, Michael Williams, and Bobby van der Sluis
	This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
	
	(This is a LI modified version to support lazy loading)
*/

var swfobject = function() {
    var UNDEF = "undefined",
    OBJECT = "object",
    SHOCKWAVE_FLASH = "Shockwave Flash",
    SHOCKWAVE_FLASH_AX = "ShockwaveFlash.ShockwaveFlash",
    FLASH_MIME_TYPE = "application/x-shockwave-flash",
    EXPRESS_INSTALL_ID = "SWFObjectExprInst",

    win = window,
    doc = document,
    nav = navigator,

    domLoadFnArr = [],
    regObjArr = [],
    objIdArr = [],
    listenersArr = [],
    script,
    timer = null,
    storedAltContent = null,
    storedAltContentId = null,
    isDomLoaded = false,
    isExpressInstallActive = false;

    /* Centralized function for browser feature detection
    		- Proprietary feature detection (conditional compiling) is used to detect Internet Explorer's features
    		- User agent string detection is only used when no alternative is possible
    		- Is executed directly for optimal performance
    	*/
    var ua = function() {
        var w3cdom = typeof doc.getElementById != UNDEF && typeof doc.getElementsByTagName != UNDEF && typeof doc.createElement != UNDEF,
        playerVersion = [0, 0, 0],
        d = null;
        if (typeof nav.plugins != UNDEF && typeof nav.plugins[SHOCKWAVE_FLASH] == OBJECT) {
            d = nav.plugins[SHOCKWAVE_FLASH].description;
            if (d && !(typeof nav.mimeTypes != UNDEF && nav.mimeTypes[FLASH_MIME_TYPE] && !nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)) {
                // navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin indicates whether plug-ins are enabled or disabled in Safari 3+
                d = d.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                playerVersion[0] = parseInt(d.replace(/^(.*)\..*$/, "$1"), 10);
                playerVersion[1] = parseInt(d.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                playerVersion[2] = /r/.test(d) ? parseInt(d.replace(/^.*r(.*)$/, "$1"), 10) : 0;
            }
        } else if (typeof win.ActiveXObject != UNDEF) {
            var a = null, fp6Crash = false;
            try {
                a = new ActiveXObject(SHOCKWAVE_FLASH_AX + ".7");
            } catch (e) {
                try {
                    a = new ActiveXObject(SHOCKWAVE_FLASH_AX + ".6");
                    playerVersion = [6, 0, 21];
                    a.AllowScriptAccess = "always"; // Introduced in fp6.0.47
                } catch (e) {
                    if (playerVersion[0] == 6) {
                        fp6Crash = true;
                    }
                }
                if (!fp6Crash) {
                    try {
                        a = new ActiveXObject(SHOCKWAVE_FLASH_AX);
                    } catch (e) {}
                }
            }
            if (!fp6Crash && a) {
                // a will return null when ActiveX is disabled
                try {
                    d = a.GetVariable("$version"); // Will crash fp6.0.21/23/29
                    if (d) {
                        d = d.split(" ")[1].split(",");
                        playerVersion = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
                    }
                } catch (e) {}
            }
        }
        var u = nav.userAgent.toLowerCase(),
        p = nav.platform.toLowerCase(),
        webkit = /webkit/.test(u) ? parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, // returns either the webkit version or false if not webkit
        ie = false,
        windows = p ? /win/.test(p) : /win/.test(u),
        mac = p ? /mac/.test(p) : /mac/.test(u);
        /*@cc_on
        			ie = true;
        			@if (@_win32)
        				windows = true;
        			@elif (@_mac)
        				mac = true;
        			@end
        		@*/
        return {
            w3cdom: w3cdom,
            pv: playerVersion,
            webkit: webkit,
            ie: ie,
            win: windows,
            mac: mac 
        };
    }();

    /* Cross-browser onDomLoad
    		- Based on Dean Edwards' solution: http://dean.edwards.name/weblog/2006/06/again/
    		- Will fire an event as soon as the DOM of a page is loaded (supported by Gecko based browsers - like Firefox -, IE, Opera9+, Safari)
    	*/
    var onDomLoad = function() {
        if (!ua.w3cdom) {
            return;
        }
        addDomLoadEvent(main);
        if (ua.ie && ua.win) {
            try {
                // Avoid a possible Operation Aborted error
                doc.write("<scr" + "ipt id=__ie_ondomload defer=true src=//:></scr" + "ipt>"); // String is split into pieces to avoid Norton AV to add code that can cause errors 
                script = getElementById("__ie_ondomload");
                if (script) {
                    addListener(script, "onreadystatechange", checkReadyState);
                }
            } catch (e) {}
        }
        if (ua.webkit && typeof doc.readyState != UNDEF) {
            timer = setInterval(function() {
                if (/loaded|complete/.test(doc.readyState)) {
                    callDomLoadFunctions();
                }
            }, 10);
        }
        if (typeof doc.addEventListener != UNDEF) {
            doc.addEventListener("DOMContentLoaded", callDomLoadFunctions, null);
        }
        addLoadEvent(callDomLoadFunctions);
    }();

    function checkReadyState() {
        if (script.readyState == "complete") {
            script.parentNode.removeChild(script);
            callDomLoadFunctions();
        }
    }

    function callDomLoadFunctions() {
        if (isDomLoaded) {
            return;
        }
        if (ua.ie && ua.win) {
            // Test if we can really add elements to the DOM; we don't want to fire it too early
            var s = createElement("span");
            try {
                // Avoid a possible Operation Aborted error
                var t = doc.getElementsByTagName("body")[0].appendChild(s);
                t.parentNode.removeChild(t);
            } catch (e) {
                return;
            }
        }
        isDomLoaded = true;
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
        var dl = domLoadFnArr.length;
        for (var i = 0; i < dl; i++) {
            domLoadFnArr[i]();
        }
    }

    function addDomLoadEvent(fn) {
        if (isDomLoaded) {
            fn();
        } else {
            domLoadFnArr[domLoadFnArr.length] = fn; // Array.push() is only available in IE5.5+
        }
    }

    /* Cross-browser onload
    		- Based on James Edwards' solution: http://brothercake.com/site/resources/scripts/onload/
    		- Will fire an event as soon as a web page including all of its assets are loaded 
    	 */
    function addLoadEvent(fn) {
        if (typeof win.addEventListener != UNDEF) {
            win.addEventListener("load", fn, false);
        } else if (typeof doc.addEventListener != UNDEF) {
            doc.addEventListener("load", fn, false);
        } else if (typeof win.attachEvent != UNDEF) {
            addListener(win, "onload", fn);
        } else if (typeof win.onload == "function") {
            var fnOld = win.onload;
            win.onload = function() {
                fnOld();
                fn();
            };
        } else {
            win.onload = fn;
        }
    }

    /* Main function
    		- Will preferably execute onDomLoad, otherwise onload (as a fallback)
    	*/
    function main() {
        // Static publishing only
        var rl = regObjArr.length;
        for (var i = 0; i < rl; i++) {
            // For each registered object element
            var id = regObjArr[i].id;
            if (ua.pv[0] > 0) {
                var obj = getElementById(id);
                if (obj) {
                    regObjArr[i].width = obj.getAttribute("width") ? obj.getAttribute("width") : "0";
                    regObjArr[i].height = obj.getAttribute("height") ? obj.getAttribute("height") : "0";
                    if (hasPlayerVersion(regObjArr[i].swfVersion)) {
                        // Flash plug-in version >= Flash content version: Houston, we have a match!
                        if (ua.webkit && ua.webkit < 312) {
                            // Older webkit engines ignore the object element's nested param elements
                            fixParams(obj);
                        }
                        setVisibility(id, true);
                    } else if (regObjArr[i].expressInstall && !isExpressInstallActive && hasPlayerVersion("6.0.65") && (ua.win || ua.mac)) {
                        // Show the Adobe Express Install dialog if set by the web page author and if supported (fp6.0.65+ on Win/Mac OS only)
                        showExpressInstall(regObjArr[i]);
                    } else {
                        // Flash plug-in and Flash content version mismatch: display alternative content instead of Flash content
                        displayAltContent(obj);
                    }
                }
            } else {
                // If no fp is installed, we let the object element do its job (show alternative content)
                setVisibility(id, true);
            }
        }
    }

    /* Fix nested param elements, which are ignored by older webkit engines
    		- This includes Safari up to and including version 1.2.2 on Mac OS 10.3
    		- Fall back to the proprietary embed element
    	*/
    function fixParams(obj) {
        var nestedObj = obj.getElementsByTagName(OBJECT)[0];
        if (nestedObj) {
            var e = createElement("embed"), a = nestedObj.attributes;
            if (a) {
                var al = a.length;
                for (var i = 0; i < al; i++) {
                    if (a[i].nodeName == "DATA") {
                        e.setAttribute("src", a[i].nodeValue);
                    } else {
                        e.setAttribute(a[i].nodeName, a[i].nodeValue);
                    }
                }
            }
            var c = nestedObj.childNodes;
            if (c) {
                var cl = c.length;
                for (var j = 0; j < cl; j++) {
                    if (c[j].nodeType == 1 && c[j].nodeName == "PARAM") {
                        e.setAttribute(c[j].getAttribute("name"), c[j].getAttribute("value"));
                    }
                }
            }
            obj.parentNode.replaceChild(e, obj);
        }
    }

    /* Show the Adobe Express Install dialog
    		- Reference: http://www.adobe.com/cfusion/knowledgebase/index.cfm?id=6a253b75
    	*/
    function showExpressInstall(regObj) {
        isExpressInstallActive = true;
        var obj = getElementById(regObj.id);
        if (obj) {
            if (regObj.altContentId) {
                var ac = getElementById(regObj.altContentId);
                if (ac) {
                    storedAltContent = ac;
                    storedAltContentId = regObj.altContentId;
                }
            } else {
                storedAltContent = abstractAltContent(obj);
            }
            if (!(/%$/.test(regObj.width)) && parseInt(regObj.width, 10) < 310) {
                regObj.width = "310";
            }
            if (!(/%$/.test(regObj.height)) && parseInt(regObj.height, 10) < 137) {
                regObj.height = "137";
            }
            doc.title = doc.title.slice(0, 47) + " - Flash Player Installation";
            var pt = ua.ie && ua.win ? "ActiveX" : "PlugIn",
            dt = doc.title,
            fv = "MMredirectURL=" + win.location + "&MMplayerType=" + pt + "&MMdoctitle=" + dt,
            replaceId = regObj.id;
            // For IE when a SWF is loading (AND: not available in cache) wait for the onload event to fire to remove the original object element
            // In IE you cannot properly cancel a loading SWF file without breaking browser load references, also obj.onreadystatechange doesn't work
            if (ua.ie && ua.win && obj.readyState != 4) {
                var newObj = createElement("div");
                replaceId += "SWFObjectNew";
                newObj.setAttribute("id", replaceId);
                obj.parentNode.insertBefore(newObj, obj); // Insert placeholder div that will be replaced by the object element that loads expressinstall.swf
                obj.style.display = "none";
                var fn = function() {
                    obj.parentNode.removeChild(obj);
                };
                addListener(win, "onload", fn);
            }
            createSWF({
                data: regObj.expressInstall,
                id: EXPRESS_INSTALL_ID,
                width: regObj.width,
                height: regObj.height 
            }, {
                flashvars: fv 
            }, replaceId);
        }
    }

    /* Functions to abstract and display alternative content
    	*/
    function displayAltContent(obj) {
        if (ua.ie && ua.win && obj.readyState != 4) {
            // For IE when a SWF is loading (AND: not available in cache) wait for the onload event to fire to remove the original object element
            // In IE you cannot properly cancel a loading SWF file without breaking browser load references, also obj.onreadystatechange doesn't work
            var el = createElement("div");
            obj.parentNode.insertBefore(el, obj); // Insert placeholder div that will be replaced by the alternative content
            el.parentNode.replaceChild(abstractAltContent(obj), el);
            obj.style.display = "none";
            var fn = function() {
                obj.parentNode.removeChild(obj);
            };
            addListener(win, "onload", fn);
        } else {
            obj.parentNode.replaceChild(abstractAltContent(obj), obj);
        }
    }

    function abstractAltContent(obj) {
        var ac = createElement("div");
        if (ua.win && ua.ie) {
            ac.innerHTML = obj.innerHTML;
        } else {
            var nestedObj = obj.getElementsByTagName(OBJECT)[0];
            if (nestedObj) {
                var c = nestedObj.childNodes;
                if (c) {
                    var cl = c.length;
                    for (var i = 0; i < cl; i++) {
                        if (!(c[i].nodeType == 1 && c[i].nodeName == "PARAM") && !(c[i].nodeType == 8)) {
                            ac.appendChild(c[i].cloneNode(true));
                        }
                    }
                }
            }
        }
        return ac;
    }

    /* Cross-browser dynamic SWF creation
    	*/
    function createSWF(attObj, parObj, id) {
        var r, el = getElementById(id);
        if (el) {
            if (typeof attObj.id == UNDEF) {
                // if no 'id' is defined for the object element, it will inherit the 'id' from the alternative content
                attObj.id = id;
            }
            if (ua.ie && ua.win) {
                // IE, the object element and W3C DOM methods do not combine: fall back to outerHTML
                var att = "";
                for (var i in attObj) {
                    if (attObj[i] != Object.prototype[i]) {
                        // Filter out prototype additions from other potential libraries, like Object.prototype.toJSONString = function() {}
                        if (i.toLowerCase() == "data") {
                            parObj.movie = attObj[i];
                        } else if (i.toLowerCase() == "styleclass") {
                            // 'class' is an ECMA4 reserved keyword
                            att += ' class="' + attObj[i] + '"';
                        } else if (i.toLowerCase() != "classid") {
                            att += ' ' + i + '="' + attObj[i] + '"';
                        }
                    }
                }
                var par = "";
                for (var j in parObj) {
                    if (parObj[j] != Object.prototype[j]) {
                        // Filter out prototype additions from other potential libraries
                        par += '<param name="' + j + '" value="' + parObj[j] + '" />';
                    }
                }
                el.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + att + '>' + par + '</object>';
                objIdArr[objIdArr.length] = attObj.id; // Stored to fix object 'leaks' on unload (dynamic publishing only)
                r = getElementById(attObj.id);
            } else if (ua.webkit && ua.webkit < 312) {
                // Older webkit engines ignore the object element's nested param elements: fall back to the proprietary embed element
                var e = createElement("embed");
                e.setAttribute("type", FLASH_MIME_TYPE);
                for (var k in attObj) {
                    if (attObj[k] != Object.prototype[k]) {
                        // Filter out prototype additions from other potential libraries
                        if (k.toLowerCase() == "data") {
                            e.setAttribute("src", attObj[k]);
                        } else if (k.toLowerCase() == "styleclass") {
                            // 'class' is an ECMA4 reserved keyword
                            e.setAttribute("class", attObj[k]);
                        } else if (k.toLowerCase() != "classid") {
                            // Filter out IE specific attribute
                            e.setAttribute(k, attObj[k]);
                        }
                    }
                }
                for (var l in parObj) {
                    if (parObj[l] != Object.prototype[l]) {
                        // Filter out prototype additions from other potential libraries
                        if (l.toLowerCase() != "movie") {
                            // Filter out IE specific param element
                            e.setAttribute(l, parObj[l]);
                        }
                    }
                }
                el.parentNode.replaceChild(e, el);
                r = e;
            } else {
                // Well-behaving browsers
                var o = createElement(OBJECT);
                o.setAttribute("type", FLASH_MIME_TYPE);
                for (var m in attObj) {
                    if (attObj[m] != Object.prototype[m]) {
                        // Filter out prototype additions from other potential libraries
                        if (m.toLowerCase() == "styleclass") {
                            // 'class' is an ECMA4 reserved keyword
                            o.setAttribute("class", attObj[m]);
                        } else if (m.toLowerCase() != "classid") {
                            // Filter out IE specific attribute
                            o.setAttribute(m, attObj[m]);
                        }
                    }
                }
                for (var n in parObj) {
                    if (parObj[n] != Object.prototype[n] && n.toLowerCase() != "movie") {
                        // Filter out prototype additions from other potential libraries and IE specific param element
                        createObjParam(o, n, parObj[n]);
                    }
                }
                el.parentNode.replaceChild(o, el);
                r = o;
            }
        }
        return r;
    }

    function createObjParam(el, pName, pValue) {
        var p = createElement("param");
        p.setAttribute("name", pName);
        p.setAttribute("value", pValue);
        el.appendChild(p);
    }

    /* Cross-browser SWF removal
    		- Especially needed to safely and completely remove a SWF in Internet Explorer
    	*/
    function removeSWF(id) {
        var obj = getElementById(id);
        if (obj && (obj.nodeName == "OBJECT" || obj.nodeName == "EMBED")) {
            if (ua.ie && ua.win) {
                if (obj.readyState == 4) {
                    removeObjectInIE(id);
                } else {
                    win.attachEvent("onload", function() {
                        removeObjectInIE(id);
                    });
                }
            } else {
                obj.parentNode.removeChild(obj);
            }
        }
    }

    function removeObjectInIE(id) {
        var obj = getElementById(id);
        if (obj) {
            for (var i in obj) {
                if (typeof obj[i] == "function") {
                    obj[i] = null;
                }
            }
            obj.parentNode.removeChild(obj);
        }
    }

    /* Functions to optimize JavaScript compression
    	*/
    function getElementById(id) {
        var el = null;
        try {
            el = doc.getElementById(id);
        } catch (e) {}
        return el;
    }

    function createElement(el) {
        return doc.createElement(el);
    }

    /* Updated attachEvent function for Internet Explorer
    		- Stores attachEvent information in an Array, so on unload the detachEvent functions can be called to avoid memory leaks
    	*/
    function addListener(target, eventType, fn) {
        target.attachEvent(eventType, fn);
        listenersArr[listenersArr.length] = [target, eventType, fn];
    }

    /* Flash Player and SWF content version matching
    	*/
    function hasPlayerVersion(rv) {
        var pv = ua.pv, v = rv.split(".");
        v[0] = parseInt(v[0], 10);
        v[1] = parseInt(v[1], 10) || 0; // supports short notation, e.g. "9" instead of "9.0.0"
        v[2] = parseInt(v[2], 10) || 0;
        return (pv[0] > v[0] || (pv[0] == v[0] && pv[1] > v[1]) || (pv[0] == v[0] && pv[1] == v[1] && pv[2] >= v[2])) ? true : false;
    }

    /* Cross-browser dynamic CSS creation
    		- Based on Bobby van der Sluis' solution: http://www.bobbyvandersluis.com/articles/dynamicCSS.php
    	*/
    function createCSS(sel, decl) {
        if (ua.ie && ua.mac) {
            return;
        }
        var h = doc.getElementsByTagName("head")[0], s = createElement("style");
        s.setAttribute("type", "text/css");
        s.setAttribute("media", "screen");
        if (!(ua.ie && ua.win) && typeof doc.createTextNode != UNDEF) {
            s.appendChild(doc.createTextNode(sel + " {" + decl + "}"));
        }
        h.appendChild(s);
        if (ua.ie && ua.win && typeof doc.styleSheets != UNDEF && doc.styleSheets.length > 0) {
            var ls = doc.styleSheets[doc.styleSheets.length - 1];
            if (typeof ls.addRule == OBJECT) {
                ls.addRule(sel, decl);
            }
        }
    }

    function setVisibility(id, isVisible) {
        var v = isVisible ? "visible" : "hidden";
        if (isDomLoaded && getElementById(id)) {
            getElementById(id).style.visibility = v;
        } else {
            createCSS("#" + id, "visibility:" + v);
        }
    }

    /* Filter to avoid XSS attacks 
    	*/
    function urlEncodeIfNecessary(s) {
        var regex = /[\\\"<>\.;]/;
        var hasBadChars = regex.exec(s) != null;
        return hasBadChars ? encodeURIComponent(s) : s;
    }

    /* Release memory to avoid memory leaks caused by closures, fix hanging audio/video threads and force open sockets/NetConnections to disconnect (Internet Explorer only)
    	*/
    var cleanup = function() {
        if (ua.ie && ua.win) {
            window.attachEvent("onunload", function() {
                // remove listeners to avoid memory leaks
                var ll = listenersArr.length;
                for (var i = 0; i < ll; i++) {
                    listenersArr[i][0].detachEvent(listenersArr[i][1], listenersArr[i][2]);
                }
                // cleanup dynamically embedded objects to fix audio/video threads and force open sockets and NetConnections to disconnect
                var il = objIdArr.length;
                for (var j = 0; j < il; j++) {
                    removeSWF(objIdArr[j]);
                }
                // cleanup library's main closures to avoid memory leaks
                for (var k in ua) {
                    ua[k] = null;
                }
                ua = null;
                for (var l in swfobject) {
                    swfobject[l] = null;
                }
                swfobject = null;
            });
        }
    }();


    return {
        /* Public API
        			- Reference: http://code.google.com/p/swfobject/wiki/SWFObject_2_0_documentation
        		*/
        registerObject: function(objectIdStr, swfVersionStr, xiSwfUrlStr) {
            if (!ua.w3cdom || !objectIdStr || !swfVersionStr) {
                return;
            }
            var regObj = {};
            regObj.id = objectIdStr;
            regObj.swfVersion = swfVersionStr;
            regObj.expressInstall = xiSwfUrlStr ? xiSwfUrlStr : false;
            regObjArr[regObjArr.length] = regObj;
            setVisibility(objectIdStr, false);
        },

        getObjectById: function(objectIdStr) {
            var r = null;
            if (ua.w3cdom) {
                var o = getElementById(objectIdStr);
                if (o) {
                    var n = o.getElementsByTagName(OBJECT)[0];
                    if (!n || (n && typeof o.SetVariable != UNDEF)) {
                        r = o;
                    } else if (typeof n.SetVariable != UNDEF) {
                        r = n;
                    }
                }
            }
            return r;
        },

        embedSWF: function(swfUrlStr, replaceElemIdStr, widthStr, heightStr, swfVersionStr, xiSwfUrlStr, flashvarsObj, parObj, attObj) {
            if (!ua.w3cdom || !swfUrlStr || !replaceElemIdStr || !widthStr || !heightStr || !swfVersionStr) {
                return;
            }
            widthStr += ""; // Auto-convert to string
            heightStr += "";
            if (hasPlayerVersion(swfVersionStr)) {
                setVisibility(replaceElemIdStr, false);
                var att = {};
                if (attObj && typeof attObj === OBJECT) {
                    for (var i in attObj) {
                        if (attObj[i] != Object.prototype[i]) {
                            // Filter out prototype additions from other potential libraries
                            att[i] = attObj[i];
                        }
                    }
                }
                att.data = swfUrlStr;
                att.width = widthStr;
                att.height = heightStr;
                var par = {};
                if (parObj && typeof parObj === OBJECT) {
                    for (var j in parObj) {
                        if (parObj[j] != Object.prototype[j]) {
                            // Filter out prototype additions from other potential libraries
                            par[j] = parObj[j];
                        }
                    }
                }
                if (flashvarsObj && typeof flashvarsObj === OBJECT) {
                    for (var k in flashvarsObj) {
                        if (flashvarsObj[k] != Object.prototype[k]) {
                            // Filter out prototype additions from other potential libraries
                            if (typeof par.flashvars != UNDEF) {
                                par.flashvars += "&" + k + "=" + flashvarsObj[k];
                            } else {
                                par.flashvars = k + "=" + flashvarsObj[k];
                            }
                        }
                    }
                }
                addDomLoadEvent(function() {
                    createSWF(att, par, replaceElemIdStr);
                    if (att.id == replaceElemIdStr) {
                        setVisibility(replaceElemIdStr, true);
                    }
                });
            } else if (xiSwfUrlStr && !isExpressInstallActive && hasPlayerVersion("6.0.65") && (ua.win || ua.mac)) {
                isExpressInstallActive = true; // deferred execution
                setVisibility(replaceElemIdStr, false);
                addDomLoadEvent(function() {
                    var regObj = {};
                    regObj.id = regObj.altContentId = replaceElemIdStr;
                    regObj.width = widthStr;
                    regObj.height = heightStr;
                    regObj.expressInstall = xiSwfUrlStr;
                    showExpressInstall(regObj);
                });
            }
        },

        getFlashPlayerVersion: function() {
            return {
                major: ua.pv[0],
                minor: ua.pv[1],
                release: ua.pv[2] 
            };
        },

        hasFlashPlayerVersion: hasPlayerVersion,

        createSWF: function(attObj, parObj, replaceElemIdStr) {
            if (ua.w3cdom) {
                return createSWF(attObj, parObj, replaceElemIdStr);
            } else {
                return undefined;
            }
        },

        removeSWF: function(objElemIdStr) {
            if (ua.w3cdom) {
                removeSWF(objElemIdStr);
            }
        },

        createCSS: function(sel, decl) {
            if (ua.w3cdom) {
                createCSS(sel, decl);
            }
        },

        addDomLoadEvent: addDomLoadEvent,

        addLoadEvent: addLoadEvent,

        getQueryParamValue: function(param) {
            var q = doc.location.search || doc.location.hash;
            if (param == null) {
                return urlEncodeIfNecessary(q);
            }
            if (q) {
                var pairs = q.substring(1).split("&");
                for (var i = 0; i < pairs.length; i++) {
                    if (pairs[i].substring(0, pairs[i].indexOf("=")) == param) {
                        return urlEncodeIfNecessary(pairs[i].substring((pairs[i].indexOf("=") + 1)));
                    }
                }
            }
            return "";
        },

        // For internal usage only
        expressInstallCallback: function() {
            if (isExpressInstallActive && storedAltContent) {
                var obj = getElementById(EXPRESS_INSTALL_ID);
                if (obj) {
                    obj.parentNode.replaceChild(storedAltContent, obj);
                    if (storedAltContentId) {
                        setVisibility(storedAltContentId, true);
                        if (ua.ie && ua.win) {
                            storedAltContent.style.display = "block";
                        }
                    }
                    storedAltContent = null;
                    storedAltContentId = null;
                    isExpressInstallActive = false;
                }
            }
        },

        triggerOnDomLoad: callDomLoadFunctions
    };
}();

LI.Controls.register("LI.swfobject");
var signalTrigger = YDom.get("signal-callout-trigger"), signalCallout;
if (signalTrigger) {
    signalCallout = new LI.BalloonCallout(signalTrigger, {
        id: "signal-callout",
        width: 686,
        offsetX: 224,
        offsetY: 3,
        orientation: "top-right",
        type: "instructional-callout",
        anchor: true,
        events: ["click"],
        eventsOnInternalElements: {
            elementClass: "callout-close",
            elementEvent: "click",
            elementAction: "close"
        },
        relativeToTrigger: true
    });
    signalCallout.openEvent.subscribe(function() {
        var g = YDom.getElementsByClassName("instructional-callout-video-wrapper", "div", "callout-overlay")[0], e = "https://www.youtube.com/v/BDhj72OPCZk?rel=1&fs=1", d = "instructional-callout-video", c = "425", a = "264", f = {
            allowScriptAccess: "never",
            wmode: "opaque"
        }, b;
        if (g) {
            g.innerHTML = '<div id="' + d + '"></div>';
            swfobject.embedSWF(e, d, c, a, "9.0.0", false, {}, f);
            b = YDom.getFirstChild(g);
            if (!b.firstChild) {
                b.innerHTML = '<a rel="nofollow" href="https://www.youtube.com/watch?v=BDhj72OPCZk"><img src="https://img.youtube.com/vi/BDhj72OPCZk/hqdefault.jpg" width="' + c + '" height="' + a + '"></a>'
            }
        }
    })
};
(function() {
    var f = 9, p = "b8949c0eb73c11e089614040d3dc5c07", q = "//api.embed.ly/1/oembed?key=" + p, r = {
        CNBC: {
            regex: /https?:\/\/video\.cnbc\.com\/gallery.+/i,
            oembed: q
        },
        DailyMotion: {
            regex: /https?:\/\/(www\.)?dailymotion.com\/video\/.+/i,
            oembed: "//www.dailymotion.com/services/oembed"
        },
        Livestream: {
            regex: /https?:\/\/.+.livestream.com\/.+\/.+/i,
            oembed: q
        },
        Slideshare: {
            regex: /^https?:\/\/(www\.)?slideshare\.net\/.+\/.+/i,
            oembed: "//www.slideshare.net/api/oembed/2"
        },
        Vimeo: {
            regex: /https?:\/\/(www\.)?vimeo\.com\/groups\/.+\/videos\/(\d+)|vimeo\.com\/(\d+)|vimeo\.com\/m\/#\/(\d+)/i,
            oembed: "//vimeo.com/api/oembed.json"
        }
    }, w = "feed-content", e = "video-container", d = "video-body", a = "video-head", i = "video-share", s = "video-shown", v = "share-object", g = "photo", j = "properties", m = "div", n = "a", t, o, l;
    function u() {
        var y = 0, x, A, z;
        if (navigator.plugins && navigator.plugins.length) {
            x = navigator.plugins["Shockwave Flash"];
            if (x && x.description && x.description.length) {
                A = /[0-9]+./;
                y = parseInt(x.description.match(A)[0], 10)
            }
        } else {
            if (YAHOO.env.ua.ie) {
                for (z = (f + 10);
                z >= f;
                z--) {
                    try {
                        x = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + z);
                        y = z;
                        break
                    } catch (B) {}
                }
            }
        }
        return (y >= f)
    }
    function c(x) {
        return (x && x.html) || ""
    }
    function k(z, A) {
        var x = null, y;
        if (z.nodeName.toLowerCase() === "a") {
            x = z.getAttribute(A)
        } else {
            y = YDom.getAncestorByTagName(z, "a");
            if (y) {
                x = y.getAttribute(A)
            }
        }
        return x
    }
    function b(y) {
        var A, z, C, B, x;
        o = o || YDom.getElementsByClassName(w)[0];
        l = l || (o && o.offsetWidth) || 545;
        C = {
            url: encodeURIComponent(y),
            format: "json",
            maxwidth: l,
            callback: "{callback}",
            autoplay: true
        };
        for (B in r) {
            if (r.hasOwnProperty(B)) {
                x = r[B];
                if (x.regex.test(y)) {
                    A = x.oembed;
                    z = B;
                    break
                }
            }
        }
        if (!A) {
            return
        }
        if (z && WebTracking) {
            WebTracking.trackUserAction("Inline" + z + "-play")
        }
        return LI.addParams(A, C)
    }
    function h(C) {
        var P = YEvent.getTarget(C), B = k(P, "data-contentpermalink"), H, K = "", F, z, x, G, D, M, N, y, A, J, O, E, Q, L;
        function I(S) {
            var R = _.bind(YDom.getElementsByClassName, YDom);
            G = YDom.getAncestorByClassName(S, w);
            M = R(e, m, G)[0];
            O = R(g, m, G)[0];
            E = R(j, m, G)[0];
            D = R(v, m, G)[0];
            N = R(i, n, D)[0];
            y = R(a, m, M)[0];
            A = R(d, m, M)[0];
            D = N || D
        }
        if (B) {
            if (!(F = b(B))) {
                return
            }
            if (t === undefined) {
                t = (!YAHOO.env.ua.mobile && u())
            }
            if (!t) {
                return
            }
            YEvent.preventDefault(C);
            I(P);
            J = YDom.getElementsByClassName("embed-icon", "span", G)[0];
            if (!J) {
                J = document.createElement("span");
                YDom.addClass(J, "embed-icon");
                Q = YDom.getElementsByClassName("image", "a", G)[0];
                if (Q) {
                    YDom.addClass(Q, "embed-image");
                    J.style.left = (Q.offsetWidth / 2 - 8) + "px";
                    J.style.top = (Q.offsetHeight / 2 - 8) + "px";
                    Q.appendChild(J)
                }
            }
            if (J) {
                YDom.addClass(J, "loading-icon")
            }
            H = k(P, "href");
            z = {
                on: {
                    success: function(R) {
                        if (!R ||!R.type ||!(YAHOO.lang.isNumber( + R.width)) ||!(YAHOO.lang.isNumber( + R.height))) {
                            location.href = H;
                            return
                        }
                        if (R.type === "video" || R.type === "rich") {
                            K = c(R)
                        } else {
                            if (R.type === "photo") {
                                K = '<a href="' + H + '" target="_blank"><img src="' + R.url + '" width=' + R.width + '" height="' + R.height + '" border="0"></a>'
                            } else {
                                location.href = H;
                                return
                            }
                        }
                        if (typeof K !== "string") {
                            location.href = H;
                            return
                        }
                        K = K.replace(/ src=\"https?:\/\//, ' src="//');
                        if (!M) {
                            M = document.createElement("div");
                            M.className = "video-container";
                            M.innerHTML = '<div class="video-head"><a href="#" role="button" class="video-close">x</a></div><div class="video-body"></div>';
                            G.insertBefore(M, D);
                            I(P)
                        }
                        M.style.width = R.width + "px";
                        y.style.backgroundPosition = "0 -2940px";
                        A.innerHTML = K;
                        YDom.setStyle(A, "opacity", 0);
                        A.style.height = (D.offsetHeight - 20) + "px";
                        D.style.display = "none";
                        M.style.display = "block";
                        YDom.addClass(O, s);
                        YDom.addClass(E, s);
                        L = new YAHOO.util.Anim(A, {
                            height: {
                                to: R.height
                            }
                        }, 0.2);
                        L.onComplete.subscribe(function() {
                            new YAHOO.util.Anim(A, {
                                opacity: {
                                    to: 1
                                }
                            }, 0.2).animate();
                            LI.Events.fire("layout:updated")
                        });
                        L.animate();
                        if (J) {
                            YDom.removeClass(J, "loading-icon")
                        }
                    },
                    failure: function(R) {
                        location.href = H
                    },
                    timeout: function(R) {
                        location.href = H
                    }
                },
                timeout: 4000
            };
            x = new LI.JSONPRequest(F, z);
            x.send()
        } else {
            if (YDom.hasClass(P, "video-close")) {
                YEvent.stopEvent(C);
                I();
                M.style.display = "none";
                D.style.display = "block";
                YDom.removeClass(O, s);
                YDom.removeClass(E, s);
                A.innerHTML = "";
                LI.Events.fire("layout:updated")
            }
        }
    }
    YEvent.onDOMReady(function() {
        YEvent.on("body", "click", h)
    })
})();
(function() {
    function a(c, e, j, k) {
        e = e || 0;
        function i(m) {
            var l = 0;
            while (!!m) {
                l += m.offsetTop;
                m = m.offsetParent
            }
            return l
        }
        function d(l) {
            if (!!l) {
                return _posY(l) + l.offsetHeight
            }
        }
        function b() {
            var l = document.documentElement;
            if (!!window.innerWidth) {
                return window.innerHeight
            } else {
                if (l.clientHeight > 0) {
                    return l.clientHeight
                }
            }
            return 0
        }
        function g() {
            if (window.pageYOffset) {
                return window.pageYOffset
            }
            return Math.max(document.documentElement.scrollTop, document.body.scrollTop)
        }
        function f(l, m) {
            var m = m ? m: 0;
            viewPortHeight = b(), scrollDistance = g(), y = i(l);
            return ((y - m) < (viewPortHeight + scrollDistance))
        }
        function h() {
            if (f(c, e)) {
                j.call(this)
            }
        }
        this.destroy = function() {
            YEvent.removeListener(window, "scroll", h)
        };
        YEvent.on(window, "scroll", h, null, k)
    }
    LI.ElementVisible = a
})();
LI.define("DelayedAdLoad");
LI.DelayedAdLoad = function(d, b) {
    var c = Y$("iframe", d, true), a = c ? c.offsetHeight: null, f = c ? c.getAttribute("data-src"): null;
    b = {
        elementId: b.elementId || "my-feed-post",
        controlName: b.controlName || "LI.NusInfinitePagination",
        subProperty: b.subProperty || null,
        customEvent: b.customEvent || "infiniteScrollStopEvent"
    };
    function e() {
        if (c) {
            LI.grow(c, a);
            c.src = f
        }
    }
    function g() {
        var k = YDom.get(b.elementId), m = b.customEvent, j = null;
        if (!c ||!f ||!k) {
            throw "Could not initialize DelayedAdLoad"
        }
        c.style.height = 0;
        j = LI.Controls.getControl(k, b.controlName);
        if (j && b.subProperty) {
            j = j[b.subProperty]
        }
        if (j) {
            if (YAHOO.lang.isArray(m)) {
                for (var l = 0, h = m.length;
                l < h;
                l++) {
                    j[m[l]].subscribe(e, null, this)
                }
            } else {
                j[m].subscribe(e, null, this)
            }
        } else {
            e()
        }
    }
    g()
};
(function() {
    var af = "data-li-filter", y = "data-li-nus-sort", U = "data-li-update-date", az = "data-li-update-id", o = "data-li-update-request-id", r = "data-li-update-next-batch-offset", T = "data-li-update-next-track-offset", g = "data-li-update-position", u = "data-li-update-sb", aB = "data-li-update-token", D = "data-li-track-url", x = "data-li-update-play-module-key", v = "href", t = "chron", Q = "feed-no-more", ag = "feed-unfilter", j = "selected", ah = "trigger", V = "feed-item", al = "filter-", b = "filters-menu", d = "feed-filters", I = "droplist", L = "open", aC = "feed-sort-time", q = "feed-sort-relevance", B = "ad-iframe-4", aa = "ul", ay = "adPageView", n = "beforeParamChange", l = "beforeReplaceList", ak = "paramChange", ap = "realTimePollSuccess", Z = "replaceList", R = "loadingData", k = "feed-wrapper", ab = "today-news-wrapper", i = "slick-sharing-cont", av = "filters-wrapper", p = "tabbed-filters-wrapper", G = "filterType", K = "lastUpdateId", e = "nusRequestId", am = "showHidden", ao = "backfillOffset", h = "orderBy", W = "typeFilter", au = "orderBySel", E = "offset", aj = "trkOffset", aA = "cxtId", H = "filterValue", O = "paginationToken", S = "trkMod", A = "nusFilterBy-relevanceClick", f = "nusFilterBy-timeClick", ar = "nusTypeFilter-btnClick", J = "nusTypeFilter-menuClick-", P = "nusTypeFilter-unfilter", w = "ALL", ae = "COWORKERS", aD = "COWORKERS_V2", Y = "MYUPDATE", ai = "NEWS", a = "Relevance", z = "Time", F = false, aw = false;
    function at(aE) {
        var aF;
        for (aF in aE) {
            if (aE.hasOwnProperty(aF)) {
                if (aE[aF] === undefined) {
                    delete aE[aF]
                }
            }
        }
        return aE
    }
    function c(aE) {
        return aE === Y
    }
    function m(aE) {
        return aE === ae || aE === aD
    }
    function X(aE, aF, aG) {
        return (aG && ((aE && aG === "Relevance") || (aF && aG === "Time")))
    }
    function C(aE) {
        return m(aE) || c(aE)
    }
    function s(aE) {
        return aE === z || aE === a
    }
    function aq(aE) {
        if (YAHOO.lang.isUndefined(aE)) {
            aE = w
        }
        return aE === w || aE === aD
    }
    function M() {
        var aG, aI, aF, aE = YDom.get(aC), aH = YDom.get(q);
        if (aE && YDom.hasClass(aE, j)) {
            aG = aE
        } else {
            if (aH && YDom.hasClass(aH, j)) {
                aG = aH
            }
        }
        if (aG) {
            aF = aG.getElementsByTagName("a");
            aI = aF[0] ? aF[0].getAttribute(y) : null
        }
        return aI
    }
    function an(aI, aF) {
        var aH, aG, aE;
        if (!s(aF)) {
            aG = aI.innerHTML;
            aH = YDom.getAttribute(aI, v);
            aE = YDom.getElementsByClassName("sprite-facetsearch", "span", "nus-filters");
            aE[0].innerHTML = aG;
            YDom.setAttribute(aE[0], v, aH)
        }
    }
    function N(aF, aG, aM) {
        var aH, aE, aI, aL, aQ, aN, aP, aO, aJ, aK;
        aE = aG.getElementsByTagName("a");
        aI = aE.length;
        if (aI > 0) {
            for (aK = aI - 1;
            aK >= 0;
            --aK) {
                aL = aE[aK];
                aQ = aL.getAttribute(af);
                if (aQ) {
                    aN = aL.parentNode;
                    if (aQ === aF) {
                        if (aM) {
                            an(aL, aF)
                        }
                        YDom.addClass(aN, j);
                        aP = aN;
                        aO = aN.parentNode;
                        if (aO !== aG) {
                            aJ = YDom.getChildren(aG);
                            aH = aJ[aJ.length - 2]
                        }
                    } else {
                        YDom.removeClass(aN, j)
                    }
                }
            }
            if (aH) {
                aG.replaceChild(aP, aH);
                aO.insertBefore(aH, YDom.getFirstChild(aO))
            }
        }
    }
    function ac() {
        var aE;
        if (!this.refreshAdsEnabled) {
            return
        }
        aE = {
            success: function(aK) {
                var aH, aL, aJ, aI, aF, aG;
                aJ = LI.domify(aK.responseText);
                aH = YDom.getChildren(aJ);
                aF = aH.length;
                if (aF === 3) {
                    for (aG = 0;
                    aG < aF;
                    ++aG) {
                        aI = YDom.get("ad-slot-" + (aG + 1));
                        aL = aH[aG];
                        if (aI && aL) {
                            aI.innerHTML = aL.innerHTML
                        }
                    }
                }
            },
            scope: this
        };
        YAHOO.util.Connect.asyncRequest("GET", this.adsUrl, aE)
    }
    function ax(aE) {
        var aF = aE.getAttribute(U);
        return (aF&&!isNaN(aF))
    }
    function ad(aH) {
        var aF, aG, aE;
        aF = YDom.getFirstChild(aH);
        if (!aF.getAttribute(U)) {
            aE = YDom.getFirstChildBy(aH, ax);
            aG = parseInt(aE.getAttribute(U), 10);
            aF.setAttribute(U, aG)
        }
    }(function() {
        LI.NusEvents = new YAHOO.util.EventProvider();
        LI.NusEvents.createEvent(ay);
        LI.NusEvents.createEvent(n);
        LI.NusEvents.createEvent(l);
        LI.NusEvents.createEvent(ak);
        LI.NusEvents.createEvent(ap);
        LI.NusEvents.createEvent(Z);
        LI.NusEvents.createEvent(R)
    }());
    (function() {
        var aK = {}, aF = false, aE, aJ, aH, aG, aI = false;
        aK[am] = false;
        aK[h] = M();
        function aL(aN, aM) {
            if (aF) {
                LI.NusEvents.fireEvent(n, aN);
                aK[aM] = aN.newValue;
                LI.NusEvents.fireEvent(ak, aN);
                aF = false
            }
        }
        LI.NusParams = {
            remove: function(aM) {
                delete aK[aM]
            },
            get: function(aM) {
                return aK[aM]
            },
            getAll: function() {
                var aM = {};
                YAHOO.lang.augmentObject(aM, aK);
                return aM
            },
            set: function(aN, aP) {
                var aM = aP.split("."), aO;
                if (aN === W || aN === h) {
                    aE = aK[aN]
                }
                if (aE !== aP) {
                    aF = true;
                    aJ = aM[0];
                    aK[aN] = aM[0]
                }
                if (aM.length === 2 && aN === W) {
                    aH = aN;
                    aG = aM[0];
                    aI = true;
                    this.set(h, aM[1]);
                    return
                }
                aO = {
                    type: aH,
                    key: aN,
                    prevValue: aE,
                    newValue: (aI) ? aG + "." + aJ: aJ
                };
                aI = false;
                aL(aO, aN)
            },
            silentSet: function(aM, aN) {
                if (aE !== aN) {
                    aK[aM] = aN
                }
            }
        }
    }());
    (function() {
        var aF = LI.HistoryManager, aL = "orderBy", aE = LI.NusParams;
        function aH(aM) {
            var aO = YEvent.getTarget(aM), aN = aO.getAttribute(y), aP = aO.getAttribute(x);
            if (aN !== null) {
                YEvent.preventDefault(aM);
                aE.silentSet(au, "true");
                if (aN === a) {
                    WebTracking.trackUserAction(A)
                } else {
                    WebTracking.trackUserAction(f)
                }
                if (aN === z && this.isOzFeedEmbed) {
                    aE.remove(h)
                }
                if (!this.historyOn || aF.failed || this.isOzFeedEmbed) {
                    aE.set(h, aN)
                } else {
                    if (aw && LI.NusParams && LI.NusParams.get(h) !== aN) {
                        aE.silentSet(W, w)
                    }
                    aF.navigate(aL, aN)
                }
            }
            if (this.isOzFeedEmbed && aP != null) {
                aE.set(S, aP)
            }
        }
        function aK(aO, aN, aQ) {
            var aR = aQ.name, aP = aF.getCurrentState(aR), aM;
            if (aR === aL && aP !== aM) {
                aM = YAHOO.util.History.getBookmarkedState(aR);
                if (aM !== null) {
                    aE.set(h, aP)
                }
            }
        }
        function aJ(aM) {
            aE.set(h, aM)
        }
        function aI(aM) {
            if ((aM.key === h) && s(aM.newValue)) {
                this.toggleSelection(aM.newValue)
            }
        }
        function aG(aN, aM) {
            this.el = aN;
            this.historyOn = (aF !== undefined);
            this.defaultToRelevance = aM.defaultToRelevance || false;
            this.sortDefaultState = this.defaultToRelevance ? a : z;
            this.isOzFeedEmbed = aM.isOzFeedEmbed || false;
            if (this.historyOn) {
                aF.register({
                    name: aL,
                    scope: this,
                    onHistoryStateChange: aJ,
                    onHistoryManagerReady: aK,
                    defaultState: this.sortDefaultState
                })
            }
            YEvent.on(aN, "click", aH, null, this);
            LI.NusEvents.subscribe(ak, aI, null, this)
        }
        aG.prototype = {
            toggleSelection: function(aN) {
                var aO = YDom.get(q), aM = YDom.get(aC);
                if (aN === z) {
                    YDom.removeClass(aO, j);
                    YDom.addClass(aM, j)
                } else {
                    if (aN === a) {
                        YDom.removeClass(aM, j);
                        YDom.addClass(aO, j)
                    }
                }
                this.replaceList()
            }
        };
        LI.NusSortMenu = aG
    }());
    (function() {
        var aM = LI.HistoryManager, aE = "typeFilter", aG = LI.NusParams;
        function aH(aN) {
            var aP = YEvent.getTarget(aN), aO = aP.getAttribute(af);
            if (aO !== null) {
                YEvent.preventDefault(aN);
                if (YDom.hasClass(aP, "btn")) {
                    WebTracking.trackUserAction(ar)
                } else {
                    WebTracking.trackUserAction(J + aO)
                }
                if (!this.historyOn || aM.failed) {
                    aG.set(W, aO)
                } else {
                    aM.navigate(aE, aO)
                }
            } else {
                if (YDom.hasClass(aP, ag)) {
                    YEvent.preventDefault(aN);
                    WebTracking.trackUserAction(P);
                    if (!this.historyOn || aM.failed) {
                        aG.set(W, w)
                    } else {
                        aM.navigate(aE, w)
                    }
                } else {
                    if (YDom.hasClass(aP, ah) || YDom.hasClass(aP.parentNode, ah)) {
                        YEvent.preventDefault(aN)
                    }
                }
            }
        }
        function aJ(aP, aO, aR) {
            var aS = aR.name, aQ = aM.getCurrentState(aS), aN;
            if (aS === aE) {
                aN = YAHOO.util.History.getBookmarkedState(aS);
                if (null !== aN) {
                    aG.set(W, aQ)
                }
            }
        }
        function aI(aN) {
            aG.set(W, aN)
        }
        function aK(aN) {
            if (aN.key === W && C(aN.newValue)) {
                aG.set(G, aN.newValue);
                if (this.isCoworkersV2Enabled && this.isVerifiedEmployee) {
                    aG.set(H, this.anetId)
                }
            }
            if (aN.key === W && C(aN.prevValue)) {
                aG.remove(G);
                if (this.isCoworkersV2Enabled && this.isVerifiedEmployee) {
                    aG.remove(H, this.anetId)
                }
            }
        }
        function aL(aN) {
            if ((aN.key === W || aN.type === W)&&!s(aN.newValue) && aN.key !== au) {
                this.toggleSelection(aN.newValue)
            }
        }
        function aF(aO, aN) {
            this.el = aO;
            this.isTabbedFiltersEnabled = aN.isTabbedFiltersEnabled || false;
            this.isCoworkersV2Enabled = aN.isCoworkersV2Enabled || false;
            this.isVerifiedEmployee = aN.isVerifiedEmployee || false;
            this.isNewRealTimeUX = aN.isNewRealTimeUX;
            this.anetId = aN.anetId || 0;
            this.historyOn = (aM !== undefined);
            this.filterDefaultState = w;
            this.tabbedFiltersWrapper = null;
            this.activeIndex = 0;
            if (this.historyOn) {
                aM.register({
                    name: aE,
                    scope: this,
                    onHistoryStateChange: aI,
                    onHistoryManagerReady: aJ,
                    defaultState: this.filterDefaultState
                })
            }
            YEvent.on(aO, "click", aH, null, this);
            LI.NusEvents.subscribe(n, aK, null, this);
            LI.NusEvents.subscribe(ak, aL, null, this)
        }
        aF.prototype = {
            getSelectedFilterIndex: function(aR) {
                var aP, aN = 0, aS = aR.parentNode, aO = YDom.getChildren(aS), aQ = aO.length;
                for (aP = 0;
                aP < aQ;
                aP++) {
                    if (aO[aP] === aR) {
                        aN = aP;
                        break
                    }
                }
                return aN
            },
            setSelectedClass: function() {
                var aN = 0, aO;
                if (!YAHOO.lang.isObject(this.tabbedFiltersWrapper)) {
                    this.tabbedFiltersWrapper = YDom.get(p)
                }
                aO = YDom.getElementsByClassName(j, "li", this.tabbedFiltersWrapper);
                if (aO.length > 0) {
                    aN = this.getSelectedFilterIndex(aO[0]);
                    YDom.replaceClass(this.tabbedFiltersWrapper, al + this.activeIndex, al + aN);
                    this.activeIndex = aN
                }
            },
            toggleSelection: function(aO) {
                var aP = YDom.getElementsByClassName(d, aa, this.el), aN, aQ;
                if (aP.length > 0) {
                    aN = aP[0];
                    N(aO, aN, this.isNewRealTimeUX);
                    aQ = YDom.getElementsByClassName(I, "div", aN);
                    if (aQ.length > 0) {
                        YDom.removeClass(aQ[0], L)
                    }
                    if (this.isTabbedFiltersEnabled) {
                        this.setSelectedClass()
                    }
                }
            }
        };
        LI.NusFilterMenu = aF
    }());
    (function() {
        function aF(aI) {
            return !!aI.getAttribute(D)
        }
        function aG(aI) {
            var aK = YEvent.getTarget(aI), aL = aF(aK), aJ;
            if (!aL) {
                aK = YDom.getAncestorBy(aK, aF)
            }
            if (aK) {
                aJ = aK.getAttribute(D);
                if (aJ) {
                    aH(aJ)
                }
            }
        }
        function aH(aI) {
            YAHOO.util.Connect.asyncRequest("GET", aI, function() {})
        }
        function aE(aJ, aI) {
            YEvent.on(aJ, "click", aG)
        }
        LI.NusTracking = aE
    }());
    (function() {
        function aG(aH) {
            if (aH.key === h || aH.key === W) {
                this.replaceList()
            }
        }
        function aF(aH, aI) {
            ad(this.feedListEl)
        }
        function aE(aI, aH) {
            this.el = aI;
            this.adsUrl = aH.adsUrl || "";
            this.refreshAdsEnabled = aH.refreshAdsEnabled || false;
            this.refreshAdsFrequency = {
                "B": 2,
                "C": 2
            }
            [aH.refreshAdsFrequency] || 1;
            this.feedItemsUrl = aH.feedItemsUrl || "";
            this.uscpItemsUrl = aH.uscpItemsUrl || "";
            this.uscpItemsMyUpdatesUrl = aH.uscpItemsMyUpdatesUrl || "";
            this.isTodayPromoEnabled = aH.isTodayPromoEnabled || false;
            this.isTabbedFiltersEnabled = aH.isTabbedFiltersEnabled || false;
            this.isCoworkersV2Enabled = aH.isCoworkersV2Enabled || false;
            this.isVerifiedEmployee = aH.isVerifiedEmployee || false;
            this.anetId = aH.anetId || 0;
            this.isTodayFeedEnabled = aH.isTodayFeedEnabled || false;
            this.isUSCPSortingEnabled = aH.isUSCPSortingEnabled || false;
            this.isUSCPTimeSortingEnabled = aH.isUSCPTimeSortingEnabled || false;
            F = this.isUSCPSortingEnabled || this.isUSCPTimeSortingEnabled;
            aw = ((this.isUSCPSortingEnabled&&!this.isUSCPTimeSortingEnabled) || (!this.isUSCPSortingEnabled && this.isUSCPTimeSortingEnabled));
            this.feedWrapperEl = YDom.get(k);
            this.feedListEl = YDom.getElementsByClassName(t, aa, this.feedWrapperEl)[0];
            this.todayNewsContainer = null;
            this.defaultGhostLabel = "";
            this.ghostLabelForCoworkers = "";
            this.visibilityValue = "EVERYONE";
            this.isShareBoxHidden = false;
            this.isCoworkerFilterSelected = false;
            if (!this.feedListEl) {
                return
            }
            if (this.isTodayPromoEnabled) {
                this.todayNewsContainer = YDom.get(ab);
                this.manageTodayModule()
            }
            LI.NusEvents.subscribe(ak, aG, null, this);
            LI.NusEvents.subscribe(ay, ac, null, this);
            if (LI.NusInjection) {
                LI.NusInjection.injectEvent.subscribe(aF, null, this)
            }
            if (LI.NusTracking) {
                LI.NusTracking(aI, aH)
            }
        }
        aE.prototype = {
            getTypeFilter: function() {
                return LI.NusParams.get(W)
            },
            hideProcessingOverlay: function() {
                var aH = this.mask;
                if (aH) {
                    aH.hide()
                }
            },
            replaceList: function() {
                function aN(aQ) {
                    aQ.innerHTML = '<li class="' + Q + '">' + LI.i18n.get("Nus-no-updates") + ' <button class="btn-link ' + ag + '">' + LI.i18n.get("Nus-click-to-see-all") + "</button></li>"
                }
                var aK = this.feedListEl, aM = LI.NusParams.getAll(), aJ = {}, aI = [aJ, aM, am, h, S], aP = aM[W], aH, aL, aO = {
                    success: function(aS) {
                        var aR = aS.responseText, aQ = {
                            hasErrors: false,
                            hasResults: false,
                            selectedFilter: aP
                        };
                        LI.NusEvents.fireEvent(l);
                        if (this.isTodayPromoEnabled) {
                            aL = this.todayNewsContainer;
                            if (YDom.inDocument(aL)) {
                                this.todayNewsContainer = aK.removeChild(aL)
                            }
                        }
                        if (aR) {
                            if (LI.isFullPage(aR)) {
                                aN(aK);
                                aQ.hasErrors = true
                            } else {
                                aK.innerHTML = aR;
                                LI.Controls.parseFragment(aK);
                                if (LI.lazyLoadImages) {
                                    LI.lazyLoadImages()
                                }
                                LI.showAllDeferredImg(aK);
                                if (X(this.isUSCPSortingEnabled, this.isUSCPTimeSortingEnabled, aJ.orderBy)) {
                                    this._swapFilterMenu(aP)
                                }
                            }
                            aQ.hasResults = true
                        } else {
                            if (aP && aP !== w) {
                                aN(aK)
                            }
                        }
                        if (!F && window.li !== undefined && li.NMPTodayFeed && aP !== ai) {
                            li.NMPTodayFeed.hideFeed()
                        }
                        if (this.isTodayPromoEnabled && (YAHOO.lang.isUndefined(aP) || (aP === w))) {
                            this.manageTodayModule()
                        }
                        if (this.isTabbedFiltersEnabled) {
                            this.toggleShareBoxVisibility(aP)
                        }
                        this.hideProcessingOverlay();
                        LI.NusEvents.fireEvent(ay);
                        LI.NusEvents.fireEvent(Z, aQ)
                    },
                    failure: function(aQ) {
                        aN(aK)
                    },
                    scope: this
                };
                if (aM[au]) {
                    aI.push(au)
                }
                if (C(aM[G])) {
                    aI.push(G);
                    if (this.isCoworkersV2Enabled && this.isVerifiedEmployee) {
                        aI.push(H)
                    }
                } else {
                    aI.push(W)
                }
                YAHOO.lang.augmentObject.apply(this, aI);
                aJ = at(aJ);
                if (aJ.orderBy) {
                    (function() {
                        var aQ = aJ.orderBy.split(".");
                        aJ.orderBy = aQ[aQ.length - 1]
                    }())
                }
                if (X(this.isUSCPSortingEnabled, this.isUSCPTimeSortingEnabled, aJ.orderBy)) {
                    aH = (aP === Y) ? LI.addParams(this.uscpItemsMyUpdatesUrl, aJ) : LI.addParams(this.uscpItemsUrl, aJ)
                } else {
                    aH = LI.addParams(this.feedItemsUrl, aJ)
                }
                if (!F && (this.isTodayFeedEnabled && aM[W] === ai)) {
                    if (this.isTabbedFiltersEnabled) {
                        this.toggleShareBoxVisibility(aP)
                    }
                    if (aM[W] === ai && li.NMPTodayFeed.triggerTodayFilterClick) {
                        li.NMPTodayFeed.triggerTodayFilterClick()
                    }
                } else {
                    this.showProcessingOverlay();
                    LI.NusEvents.fireEvent(R);
                    YAHOO.util.Connect.asyncRequest("GET", aH, aO)
                }
            },
            showProcessingOverlay: function() {
                var aH = this.mask;
                if (!aH) {
                    aH = new LI.ProcessingOverlay(this.el);
                    this.mask = aH
                }
                aH.show()
            },
            manageTodayModule: function() {
                var aK, aJ, aI = this.todayNewsContainer, aH=!YDom.inDocument(aI);
                if (YAHOO.lang.isNull(aI)) {
                    return
                }
                aK = YDom.getElementsByClassName(V, "li", this.feedListEl)[0];
                if (aK && aK.id === ab) {
                    aK = YDom.getNextSibling(aK)
                }
                if (!aK && aH) {
                    this.feedListEl.appendChild(aI)
                } else {
                    aJ = parseInt(aK.getAttribute(U), 10);
                    aI.setAttribute(U, aJ);
                    if (aH) {
                        YDom.insertBefore(aI, aK)
                    }
                }
            },
            toggleShareBoxVisibility: function(aK) {
                var aJ = YDom.get(i), aI = aq(aK), aH = this.isShareBoxHidden ? true: false;
                if (!YAHOO.lang.isObject(aJ)) {
                    return
                }
                if (aH && aI) {
                    LI.show(aJ);
                    this.isShareBoxHidden = false
                } else {
                    if (!aH&&!aI) {
                        LI.hide(aJ);
                        this.isShareBoxHidden = true
                    }
                }
            },
            _setVisibilityToCoworkers: function(aL, aJ) {
                var aH = this, aI = aJ[0], aN = aJ[1], aK = LI.NusParams.getAll(), aM = aK[W]
            },
            _swapFilterMenu: function(aQ) {
                var aN = YDom.getElementsByClassName(d, aa, av), aP = YDom.getElementsByClassName(b, "li"), aJ, aH, aI, aK, aM, aO, aL;
                if (aN.length > 0 && aP.length > 0) {
                    aN = aN[0];
                    aP = aP[0];
                    aH = aN.parentNode;
                    aJ = YDom.getElementsByClassName(d, aa, aP);
                    if (aJ.length > 0) {
                        N(aQ, aJ[0]);
                        aH.removeChild(aN);
                        aH.appendChild(aJ[0]);
                        aP.parentNode.removeChild(aP);
                        if (aQ === Y) {
                            aI = aJ[0].getElementsByTagName("a");
                            aK = aI.length;
                            for (aL = aK - 1;
                            aL >= 0;
                            --aL) {
                                aM = aI[aL];
                                aO = aM.getAttribute(af);
                                if (aO === Y) {
                                    an(aM, Y);
                                    break
                                }
                            }
                        }
                    }
                }
            }
        };
        LI.Nus = aE
    }());
    (function() {
        var aF = "nusInfPag-noMore", aO = "nusInfPag-showMoreClick", aH = "nusInfiniteScroll";
        function aE() {
            WebTracking.trackUserAction(aF)
        }
        function aN() {
            WebTracking.trackUserAction(aO);
            if (window.COMSCORE) {
                COMSCORE.beacon({
                    c1: 2,
                    c2: 6402952,
                    c3: "",
                    c4: "",
                    c5: "",
                    c6: "",
                    c15: ""
                })
            }
        }
        function aM() {
            WebTracking.trackUserAction(aH);
            if (window.COMSCORE) {
                COMSCORE.beacon({
                    c1: 2,
                    c2: 6402952,
                    c3: "",
                    c4: "",
                    c5: "",
                    c6: "",
                    c15: ""
                })
            }
        }
        function aL() {
            var aU, aT, aV, aX, aS, aW;
            aU = YDom.getChildren(this.el);
            aT = aU[aU.length - 1];
            aV = aT.getAttribute(u) !== "_";
            aX = YDom.get(B);
            if (aV) {
                this.disableParam(o)
            }
            aW = this.infinitePagination.getRequestMade() + 1;
            if (this.refreshAdsSkipInitialLoad === false || aW != 1) {
                if (aX && aW%this.refreshAdsFrequency === 0) {
                    aS = aX.src;
                    aX.src = aS
                }
            }
            LI.NusEvents.fireEvent(ay)
        }
        function aG() {
            var aS, aU = LI.NusParams.getAll(), aV = {}, aT = [aV, aU, am, h];
            if (X(this.isUSCPSortingEnabled, this.isUSCPTimeSortingEnabled, aU.orderBy) && this.uscpConfig) {
                this.config = this.uscpConfig;
                if (this.uscpItemsMyUpdatesUrl && c(aU.filterType)) {
                    this.config.url = this.uscpItemsMyUpdatesUrl
                }
            } else {
                this.config = this.signalConfig
            }
            aS = new LI.InfinitePagination(this.el, this.config);
            if (C(aU[G])) {
                aT.push(G);
                if (aU[G] === aD) {
                    aT.push(H)
                }
            } else {
                aT.push(W)
            }
            YAHOO.lang.augmentObject.apply(this, aT);
            aV = at(aV);
            aS.addParams(aV);
            aS.triggerClickEvent.subscribe(aN);
            aS.triggerScrollEvent.subscribe(aM);
            aS.noMoreResultsEvent.subscribe(aE);
            aS.addedToListEvent.subscribe(aJ);
            aS.fetchEvent.subscribe(aL, null, this);
            return aS
        }
        function aJ() {
            if (LI.lazyLoadImages) {
                LI.lazyLoadImages()
            }
            LI.Events.fire("infinitePagination-newPage");
            $(document).trigger("infinitePagination-newPage")
        }
        function aI(aS, aT) {
            if (aT === Z || (aT === ak && (aS.newValue === "NEWS.Time" || aS.newValue === "Relevance"))) {
                if (this.infinitePagination) {
                    this.infinitePagination.hideNoMoreResultsEl();
                    this.infinitePagination.disableTriggers();
                    this.infinitePagination.destroy()
                }
                if ((!aS.hasErrors && aS.hasResults) || (aS.newValue === "NEWS.Time" || aS.newValue === "Relevance")) {
                    this.infinitePagination = aG.call(this);
                    this.infinitePagination.enableTriggers()
                }
            }
        }
        function aK() {
            this.infinitePagination.disableTriggers()
        }
        function aR() {
            this.infinitePagination.enableTriggers()
        }
        var aP = _.once(function(aS) {
            if (window.track && window.track.errors) {
                window.track.errors.push({
                    code: window.track.errors.codes.HP_STREAM_SERVER_ERROR,
                    message: aS.statusText || ""
                })
            }
        });
        function aQ(aZ, aX) {
            var aS = aX.isUSCPSortingEnabled || false, aY = aX.isUSCPTimeSortingEnabled || false, aU = {}, aV = {
                i18n: {
                    noMoreResults: LI.i18n.get("Nus-no-more-updates")
                },
                enableInfiniteScroll: aX.enableInfiniteScroll
            }, aT = aX.onloadOrderBy || "", aW = LI.NusParams;
            if (aW&&!aW.get(h)) {
                aW.set(h, aT)
            }
            this.uscpBackfillUrl = aX.uscpBackfillUrl;
            this.uscpBackfillTimeout = aX.uscpBackfillTimeout || 3000;
            signalConfig = YAHOO.lang.merge(aV, {
                url: aX.url,
                attributes: [{
                    urlParam: ao,
                    attribute: u
                }, {
                    urlParam: K,
                    attribute: az
                }, {
                    urlParam: e,
                    attribute: o
                }, {
                    urlParam: E,
                    attribute: g
                }
                ],
                infiniteScrollStopThreshold: aX.infiniteScrollStopThreshold || ""
            });
            if (aS || aY) {
                aU = YAHOO.lang.merge(aV, {
                    url: aX.uscpUrl,
                    attributes: [{
                        urlParam: O,
                        attribute: aB
                    }, {
                        urlParam: aA,
                        attribute: o
                    }, {
                        urlParam: E,
                        attribute: r
                    }, {
                        urlParam: aj,
                        attribute: T
                    }, {
                        urlParam: S,
                        attribute: x,
                        notRequired: true
                    }
                    ],
                    infiniteScrollStopThreshold: aX.infiniteScrollStopThreshold || ""
                })
            }
            this.el = aZ;
            this.config = null;
            this.isUSCPSortingEnabled = aS;
            this.isUSCPTimeSortingEnabled = aY;
            this.uscpConfig = aU;
            this.signalConfig = signalConfig;
            this.uscpItemsMyUpdatesUrl = aX.uscpItemsMyUpdatesUrl || "";
            this.refreshAdsFrequency = {
                "B": 2,
                "C": 1
            }
            [aX.refreshAdsFrequency] || 1;
            this.refreshAdsSkipInitialLoad = {
                "B": false,
                "C": true
            }
            [aX.refreshAdsFrequency] || false;
            LI.NusEvents.subscribe(Z, aI, Z, this);
            LI.NusEvents.subscribe(ak, aI, ak, this);
            LI.NusEvents.subscribe(R, aK, null, this);
            LI.NusEvents.subscribe(Z, aR, null, this);
            this.infinitePagination = aG.call(this);
            if (this.uscpBackfillUrl) {
                this._backfillUscp()
            }
        }
        aQ.prototype = {
            disableParam: function(aU) {
                var aT, aS;
                aS = this.infinitePagination.attributes.length;
                for (aT = 0;
                aT < aS;
                ++aT) {
                    if (this.infinitePagination.attributes[aT].attribute === aU) {
                        this.infinitePagination.attributes[aT].notRequired = true
                    }
                }
            },
            _backfillUscp: function() {
                var aT = this, aS = this.infinitePagination, aU = aS.url;
                setTimeout(function() {
                    var aW = aS.callback, aV = aW && _.bind(aW.failure, aS);
                    if (aV) {
                        aS.callback.failure = function(aX) {
                            aV(aX);
                            aP(aX)
                        }
                    }
                    aW.timeout = aT.uscpBackfillTimeout;
                    aS.url = aT.uscpBackfillUrl;
                    aS.fetchMoreResults();
                    aS.url = aU
                }, 50)
            }
        };
        LI.NusInfinitePagination = aQ
    }());
    (function() {
        var aF = "realTimeTest", aK = "nusRealTime-click";
        function aG() {
            WebTracking.trackUserAction(aK)
        }
        function aM(aN, aV, aS) {
            var aU = aV[0], aT = aV[1], aQ = aU.length, aP = (aQ < 10), aR, aO;
            for (aR = 0;
            aR < aQ;
            ++aR) {
                aO = aU[aR];
                LI.showAllDeferredImg(aO);
                if (aP) {
                    LI.highlight(aO)
                }
            }
            ad(aT);
            LI.NusEvents.fireEvent(ay)
        }
        function aI(aN, aO) {
            LI.NusEvents.fireEvent.apply(LI.NusEvents, [ap].concat(aO))
        }
        function aJ() {
            var aU = {}, aS, aR = LI.NusParams.getAll(), aQ = [aU, aR, am, W, h, S], aP = aR[h] || "", aT = $(".feed-item"), aO = aT.length, aN;
            this.config.sortType = aP;
            aS = new LI.RealTimeResults(this.el, this.config);
            aU[aF] = "C";
            YAHOO.lang.augmentObject.apply(this, aQ);
            aU[h] = z;
            while (aO--) {
                aN = aT.eq(aO).attr(x);
                if (aN) {
                    aU[S] = aN;
                    break
                }
            }
            aU = at(aU);
            aS.addParams(aU);
            aS.notificationClickEvent.subscribe(aG);
            aS.resultsInsertedEvent.subscribe(aM);
            aS.pollSuccessEvent.subscribe(aI, null, this);
            return aS
        }
        function aH(aN) {
            if (this.realTimeResults) {
                this.realTimeResults.destroy();
                LI.NusEvents.unsubscribe(Z, aH);
                delete this.realTimeResults
            }
            if (aN&&!aN.hasErrors && aN.hasResults) {
                $.proxy(aL, this)()
            }
        }
        function aL() {
            this.realTimeResults = aJ.call(this);
            LI.NusEvents.subscribe(Z, aH, null, this);
            if (document.readyState === "complete" && this.realTimeResults) {
                this.realTimeResults.start()
            }
        }
        function aE(aO, aN) {
            this.realTimeResultsOn = aN.realTimeResultsOn || false;
            if (this.realTimeResultsOn) {
                this.el = aO;
                this.config = {
                    method: "GET",
                    url: aN.url,
                    fetchUrl: aN.fetchUrl,
                    uscpUrl: aN.uscpUrl,
                    contextId: aN.contextId,
                    moduleKey: aN.moduleKey,
                    uscpFetchUrl: aN.uscpFetchUrl,
                    realTimeMaxDisplay: aN.realTimeMaxDisplay,
                    dateUrlParam: "queryAfter",
                    dateAttribute: U,
                    i18n: {
                        newResult: aN.isNewRealTimeUX ? LI.i18n.get("Nus-see-new-update"): LI.i18n.get("Nus-new-result"),
                        newResults: aN.isNewRealTimeUX ? LI.i18n.get("Nus-see-new-updates"): LI.i18n.get("Nus-new-results"),
                        newResultsMax: aN.isNewRealTimeUX ? LI.i18n.get("Nus-see-new-updates-max"): LI.i18n.get("Nus-new-results")
                    },
                    isNewRealTimeUX: aN.isNewRealTimeUX,
                    progressivePoll: aN.progressivePoll || false,
                    isFeedKatificationEnabled: aN.isFeedKatificationEnabled,
                    interval: function(aP) {
                        return 1000 * Math.pow(1.3, aP) + 20000 * (aP + 1)
                    }
                };
                $.proxy(aL, this)()
            }
        }
        LI.NusRealTimeResults = aE
    }());
    (function() {
        var aU, aG, aP, aX = false, aW, aT, aJ = 265, aI = 2, aH;
        function aF(aZ, aY) {
            aU = aV(aZ, "jymbii-carousel");
            aG = YDom.getElementsByClassName("carousel-wheel", "ul", aZ)[0];
            aP = YDom.getElementsByClassName("carousel-item", "li", aG);
            aW = aP.length;
            aT = aW - aI;
            aM();
            YEvent.on(aZ, "click", aE);
            YEvent.on(aZ, "mouseover", aR);
            YEvent.on(aZ, "mouseout", aL)
        }
        function aM() {
            if (aT <= 0) {
                aQ()
            }
            aI = (aT > 1) ? 2 : 1;
            aH = aJ * aI
        }
        function aQ() {
            var aY = YDom.getElementsByClassName("next", "div", aU)[0];
            YDom.addClass(aY, "disabled");
            aX = true
        }
        function aV(a0, aZ) {
            var aY;
            if (YDom.hasClass(a0, aZ)) {
                aY = a0
            } else {
                aY = YDom.getAncestorByClassName(a0, aZ)
            }
            return aY
        }
        function aO(aY) {
            return aV(aY, "carousel-item")
        }
        function aK(aY) {
            return aV(aY, "carousel-wheel")
        }
        function aS(aY) {
            YDom.addClass(aY, "hidden")
        }
        function aN(aY) {
            var aZ;
            if (!aX) {
                aZ = parseInt(aG.style.left, 10) || 0;
                aZ -= aH;
                aG.style.left = aZ + "px";
                aT -= aI
            }
            aM()
        }
        function aR(a0) {
            var aZ = YEvent.getTarget(a0), aY = aO(aZ);
            if (aY) {
                YDom.addClass(aY, "active")
            }
            if (YDom.hasClass(aZ, "remove-button") || YDom.hasClass(aZ, "next")) {
                YDom.addClass(aZ, "active")
            }
        }
        function aL(a0) {
            var aZ = YEvent.getTarget(a0), aY = aO(aZ);
            if (aY) {
                YDom.removeClass(aY, "active")
            }
            if (YDom.hasClass(aZ, "remove-button") || YDom.hasClass(aZ, "next")) {
                YDom.removeClass(aZ, "active")
            }
        }
        function aE(a0) {
            var aZ, aY;
            aZ = YEvent.getTarget(a0);
            if (YDom.hasClass(aZ, "remove-button")) {
                YEvent.preventDefault(a0);
                aY = aO(aZ);
                aS(aY);
                aT--;
                aM()
            } else {
                if (YDom.hasClass(aZ, "next")) {
                    YEvent.preventDefault(a0);
                    aN(aG)
                }
            }
        }
        LI.NusJYMBIICarousel = aF
    }())
}());
function saveCookie(a, c, f) {
    var e = new Date();
    e.setTime(e.getTime() + (f * 24 * 60 * 60 * 1000));
    var b = "; expires=" + e.toGMTString();
    document.cookie = a + "=" + c + b + "; path=/"
}
function readCookie(d) {
    var a = d + "=";
    var b = document.cookie.split(";");
    for (var e = 0;
    e < b.length;
    e++) {
        var f = b[e];
        while (f.charAt(0) == " ") {
            f = f.substring(1, f.length)
        }
        if (f.indexOf(a) == 0) {
            return f.substring(a.length, f.length)
        }
    }
    return null
}
function eraseCookie(a) {
    saveCookie(a, "", - 1)
};
LI.TalkIn.register("ads", function(e) {
    "use strict";
    function t(t) {
        var o, a, r, s, c = n.getElementById("dialog-slideshare"), l = n.getElementById("media-player");
        return c && l ? (o = t.mediaId || "", a = LI.ads.assetURL.SLIDESHARE_PLAYER_CSS || "", r = t.isLeadgenDisabled !== void 0 ? t.isLeadgenDisabled : "true", s = t.title ? encodeURIComponent(t.title.slice( - 20)) : "", l.setAttribute("src", "//www.slideshare.net/slideshow/embed_code/" + o + "?custom_css=" + a + "&disable_leads=" + r + "&lead_source=linkedin_" + s), n.getElementById("header-slideshare").appendChild(n.createTextNode(t.title)), n.getElementById("description-slideshare").appendChild(n.createTextNode(t.description)), n.getElementById("btn-learnMore").onclick = function() {
            e.open(t.clickThroughUrl, "_blank")
        }, i[o] = {
            dialog: new LI.Dialog,
            player: l,
            config: {
                name: "slideshare-ad-dialog",
                className: "dialog-v2 slideshare-ad",
                type: "task-modal",
                width: 708,
                content: {
                    title: t.dialogTitle,
                    node: "dialog-slideshare-container"
                },
                dependencies: LI.SlideshareAdDependencies
            }
        }, i[o]) : !1
    }
    var n = e.document, i = {};
    return {
        openRichMediaDialog: function(n) {
            var o = i[n.mediaId] || t(n);
            o ? (o.player.style.display = "block", o.dialog.open(o.config)) : e.open(n.clickThroughUrl, "_blank")
        }
    }
}(window));
