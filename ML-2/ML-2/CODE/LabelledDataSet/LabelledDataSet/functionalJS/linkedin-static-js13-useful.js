LI.define("TodayModuleCarousel");
LI.TodayModuleCarousel = (function() {
    var e = {
        scrollerContainer: ".scroller",
        triggerContainer: ".trigger",
        itemClass: "item",
        delay: 300
    }, h = new YUtil.Scroll(document.body, {
        scroll: {
            to: [0, 0]
        }
    }, 0.4, YUtil.Easing.easeOut), o = YAHOO.lang, p = 0, c = "tod-home-", d, m, j, k;
    function b(r) {
        if (r && window.WebTracking) {
            WebTracking.trackUserAction(c + r)
        }
    }
    function f(s, r) {
        if (YDom.hasClass(s, r)) {
            return s
        } else {
            return YDom.getAncestorByClassName(s, r)
        }
    }
    function n(r) {
        h.stop();
        h.attributes.scroll.to = [r.offsetLeft - p, 0];
        h.animate()
    }
    function g(t) {
        var s = Y$(".current", d, true), r = LI.indexOf(j, t), u = k[r];
        YDom.removeClass(s, "current");
        YDom.addClass(t, "current");
        if (u) {
            n(u);
            b("activate-" + r)
        }
    }
    function q(u, t) {
        var s, r;
        e = o.merge(e, t);
        d = u;
        s = Y$(e.scrollerContainer, d, true);
        r = Y$(e.triggerContainer, d, true);
        p = s.offsetLeft;
        j = Y$("." + e.itemClass, r);
        k = Y$("." + e.itemClass, s);
        h.setEl(s.parentNode);
        g(j[0]);
        YEvent.on(j, "mouseover", a);
        YEvent.on(r, "click", l)
    }
    function a(s) {
        var t = YEvent.getTarget(s), r = f(t, e.itemClass);
        if (r) {
            YEvent.on(r, "mouseout", i);
            m = setTimeout(function() {
                e.delay = 100;
                g(r);
                YEvent.removeListener(r, "mouseout", i)
            }, e.delay)
        }
    }
    function i(r) {
        clearTimeout(m)
    }
    function l(s) {
        var t = YEvent.getTarget(s), r = f(t, e.itemClass);
        if (r&&!YDom.hasClass(r, "current")) {
            g(r);
            YEvent.preventDefault(s)
        }
    }
    return q
}());
(function(a) {
    var b = function(e, g, f) {
        var c = false, d = e === window ? "window": e.id;
        f = f || 100;
        g = g || "scroll";
        YEvent.on(e, g, function(h) {
            c = true
        });
        setInterval(function() {
            if (c) {
                c = false;
                LI.Events.fire("debounced-" + d + "-" + g, d)
            }
        }, f)
    };
    LIModules.exports("DebounceEvent", b)
}(window.require));
LI.define("Scroller");
LI.Scroller = (function() {
    var b = {};
    function e(i, h) {
        var g;
        b[h] = {
            evtName: h + "-scroll",
            scrollPos: d(h)
        };
        g = b[h];
        g.prevScrollPos = g.scrollPos;
        LI.DebounceEvent(i, "scroll", 10);
        if (i === window) {
            LI.DebounceEvent(i, "resize", 10);
            g.elHeight = YDom.getViewportHeight()
        } else {
            g.elHeight = i.offsetHeight;
            g.contentEl = YDom.getFirstChild(i)
        }
        LI.Events.bind("debounced-" + h + "-scroll", c);
        if (i === window) {
            LI.Events.bind("debounced-window-resize", function() {
                g.elHeight = YDom.getViewportHeight()
            })
        }
    }
    function a(h, i, g) {
        return h - (i + g)
    }
    function d(g) {
        var h;
        if (g === "window") {
            h = YDom.getDocumentScrollTop()
        } else {
            h = YDom.get(g).scrollTop
        }
        return h
    }
    function f(g, h) {
        if (g > h) {
            return "up"
        } else {
            return "down"
        }
    }
    function c(j) {
        var h, k, i, g = b[j];
        if (typeof g === "undefined") {
            return
        }
        if (j === "window") {
            i = YDom.getDocumentHeight()
        } else {
            i = g.contentEl.offsetHeight
        }
        g.prevScrollPos = g.scrollPos;
        g.scrollPos = d(j);
        h = a(i, g.scrollPos, g.elHeight);
        k = f(g.prevScrollPos, g.scrollPos);
        LI.Events.fire(g.evtName, {
            "scrollPos": g.scrollPos,
            "distToBottom": h,
            "scrollDirection": k
        })
    }
    return {
        register: function(h) {
            var g;
            g = h === window ? "window" : h.id;
            if (typeof b[g] !== "undefined") {
                return b[g].evtName
            } else {
                e(h, g);
                return b[g].evtName
            }
        },
        destroyItem: function(i) {
            var h, g;
            h = i === window ? "window" : i.id;
            g = b[h];
            if (typeof g !== "undefined") {
                LI.Events.unbind(g.evtName);
                delete b[h]
            }
        }
    }
})();
LI.define("Sticky");
LI.Sticky = function(b, v) {
    var e = v.stickyClass || false, g = v.stickyDistance || 0, n = v.fixedHeaderHeight || 0, o = v.unstickHeight || 0, j = v.resultsLoadedEvtName || "", d, l, m = "position", q = "fixed", r = "top", i = "px", f = YDom.getStyle(b, m), h = YDom.getStyle(b, r), u = LI.Scroller.register(window), a, t = "notSticky";
    if (!b || f === "absolute") {
        return
    }
    function c() {
        d = s(b.parentNode);
        l = parseInt(YDom.getStyle(b, "height"), 10)
    }
    function s(x) {
        var z = 0, y = x || b;
        if (y.offsetParent) {
            do {
                z += y.offsetTop;
                y = y.offsetParent
            }
            while (y);
            return z
        } else {
            return b.offsetTop
        }
    }
    function p() {
        if (e) {
            YDom.addClass(b, e)
        } else {
            YDom.setStyle(b, m, q);
            YDom.setStyle(b, r, (g + n) + i)
        }
        t = "sticky"
    }
    function w() {
        if (e) {
            YDom.removeClass(b, e)
        } else {
            YDom.setStyle(b, m, f);
            h = typeof h === "number" ? h + i : h;
            YDom.setStyle(b, r, h)
        }
        t = "notSticky"
    }
    function k() {
        YDom.setStyle(b, m, "relative");
        YDom.setStyle(b, r, (YDom.getDocumentHeight() - d - l - o) + i);
        t = "footerSticky"
    }
    LI.Events.bind(u, function(x) {
        var z = x.scrollPos + g + n, y = o - x.distToBottom;
        if (t === "notSticky") {
            a = s();
            if (a && z >= a) {
                p()
            }
        }
        if (t !== "notSticky") {
            if (a && z < a) {
                w()
            } else {
                if (y > 0 && (YDom.getViewportHeight() - n - g - l - y) < 0) {
                    k()
                } else {
                    p()
                }
            }
        }
    });
    if (typeof j === "string" && j !== "") {
        LI.Events.bind(j, function() {
            window.scrollTo(0, (YDom.getDocumentScrollTop() + 1))
        })
    }
    c();
    YEvent.on(window, "load", function() {
        c()
    })
};
(function() {
    var a = /Firefox\/(\d+\.\d+)/.exec(navigator.userAgent);
    if (a && a[1] && parseFloat(a[1]) <= 3.6) {
        var c = dust.escapeHtml, f = "--", d = new RegExp(f, "g");
        dust.escapeHtml = function(h) {
            h = c(h);
            if (typeof h === "string" && h.indexOf(f)>-1) {
                return h.replace(d, "&#45;&#45;")
            }
            return h
        }
    }
    var b = "__i18n__", g;
    if (dust.helpers && dust.helpers.i18n) {
        g = dust.helpers.i18n;
        dust.helpers.i18n = function(j, l, i, m) {
            var k, h = m.templateName || l.getTemplateName();
            if (m.key !== "undefined" && h !== "undefined") {
                k = b + h + "__" + m.key;
                if (dust.cache && typeof dust.cache[k] === "function") {
                    return dust.cache[k](j, l)
                }
            }
            return g(j, l, i, m)
        }
    }
    LI.define("Profile.helper.injectAlertA11y");
    var e;
    LI.Profile.helper.injectAlertA11y = function(i, h) {
        if (!i) {
            return
        }
        h = h || "success";
        e = e || $("#alert-a11y");
        if (!e.length) {
            return
        }
        LI.injectAlert({
            node: e[0],
            message: i,
            type: h
        })
    };
    LI.Profile.helper.replaceElem = function(i, k) {
        var h = $(i), j = $(k);
        if (h.length && j.length) {
            j.before(h).hide()
        }
    }
})();
(function(a) {
    LI.define("Profile2");
    var b = (typeof window.console !== "undefined") ? window.console: {
        log: a.noop()
    };
    LI.Profile2.Render = (function() {
        var c = {};
        function e(j, i, f, h) {
            var g;
            if (typeof j.responseText === "string") {
                g = a.parseJSON(j.responseText)
            } else {
                g = j.responseText
            }
            if (g.content) {
                g = g.content
            }
            dust.render(i, g, function(l, k) {
                if (l) {
                    b.log(l);
                    if (h) {
                        h(l)
                    }
                    return
                }
                if (f) {
                    f(k)
                }
            })
        }
        function d(g, i) {
            var h, f;
            if (typeof g.getResponseHeader === "function") {
                f = g.getResponseHeader(i) || ""
            } else {
                h = g.getResponseHeader || {};
                if (h.hasOwnProperty(i)) {
                    f = h[i]
                }
            }
            return f
        }
        a.extend(c, {
            render: function(j) {
                var h = j.response || {}, i = j.template || "", f = j.success, g = j.error;
                if (h && i) {
                    this.getFizzyHeaderConcatTemplates(h, function() {
                        e(h, i, f, g)
                    })
                }
            },
            getFizzyHeaderConcatTemplates: function(g, l) {
                if (!g) {
                    return
                }
                var j = "X-FS-TL", i = "x-fs-tl", h = "X-Fs-Tl", f = [], k;
                k = d(g, j) || d(g, i) || d(g, h);
                if (k) {
                    a.ajaxSetup({
                        cache: true
                    });
                    a.each(k.split(","), function(m, n) {
                        f.push(a.getScript(a.trim(n)))
                    });
                    a.ajaxSetup({
                        cache: false
                    });
                    if (l) {
                        a.when.apply(null, f).done(function() {
                            l()
                        })
                    }
                } else {
                    if (l) {
                        l()
                    }
                }
            }
        });
        return c
    })()
})(jQuery);
$.fn.MiniProfile = function(c, b, a) {
    this.id = c;
    this.$panel = b;
    this.content = "";
    this.manager = a
};
$.extend($.fn.MiniProfile.prototype, {
    calculatePosition: function(x) {
        var k = this, r = 80, d = 80, q =- 115, a = 10, s = 10, f = k.$panel, g = f.find(".new-miniprofile-content"), p = $(window).height(), w = $(window).width(), h = $(document).scrollTop(), b = $(document).scrollLeft(), m = {}, i = 0, v = 0, e = 0, c = 0, j, u, t = {}, o = k.manager.getDefaultShownBelow(), l = false, n = false;
        $("img", x).each(function(y) {
            x = $(this);
            return false
        });
        i = x.innerHeight();
        v = x.innerWidth();
        f.css({
            "visibility": "hidden"
        }).removeClass("hidden");
        e = g.outerHeight();
        c = g.outerWidth();
        f.addClass("hidden").css({
            "visibility": "visible"
        });
        j = {
            x: x.offset().left + (v / 2),
            y: x.offset().top
        };
        u = {
            x: x.offset().left + (v / 2),
            y: x.offset().top + i
        };
        if (u.y + e < h + p) {
            n = true
        }
        if (j.y - e - r > h) {
            l = true
        }
        if (o && n) {
            m.bottom = true
        } else {
            if (!o && l) {
                m.top = true
            } else {
                if (n) {
                    m.bottom = true
                } else {
                    m.top = true
                }
            }
        }
        if (j.x + c + q < b + w) {
            m.right = true
        } else {
            if (j.x - c + d > b) {
                m.left = true
            } else {
                m.right = true
            }
        }
        if (m.top) {
            t.y = j.y - e - a
        }
        if (m.bottom) {
            t.y = u.y + a
        }
        if (m.left) {
            t.x = j.x - c + d
        }
        if (m.right) {
            t.x = j.x + q - s
        }
        return {
            x: t.x,
            y: t.y,
            directions: m
        }
    },
    id: function() {
        return this.id
    },
    getContent: function() {
        return this.content
    },
    show: function(a) {
        var b = this;
        b.manager.loadProfile(a, {
            success: function(e) {
                var c = b.manager.config, d = b.manager, g = b.$panel, f = d.$lastSelectedNode;
                if (e) {
                    b.content = e;
                    if (d.areDifferentLinkNodes(f, a)) {
                        return
                    }
                    g.html(e);
                    LI.Controls.parseFragment(g.get(0));
                    var h = b.calculatePosition(a);
                    if (h) {
                        g.css({
                            "visibility": "hidden"
                        }).removeClass("hidden").offset({
                            top: h.y,
                            left: h.x
                        }).addClass("hidden").css({
                            "visibility": "visible"
                        });
                        b.setPointer(h.directions);
                        b.manager.showPanel(g)
                    }
                }
            }
        });
        return b
    },
    setPointer: function(f) {
        var e = this.$panel, d = [], b, c;
        d = [];
        for (var a in f) {
            d.push(a)
        }
        e.find(".triangle").removeClass("top bottom left right").addClass(d.join(" "));
        if (e.find(".miniprofile-shared-connections").length) {
            b = "triangle-bottom";
            c = "triangle-bottom-grey"
        } else {
            b = "triangle-bottom-grey";
            c = "triangle-bottom"
        }
        e.find("." + b).removeClass(b).addClass(c)
    }
});
$.fn.MiniProfileManager = (function(b) {
    var a = {};
    $.extend(a, {
        config: b,
        profileRegistry: {},
        defaultShownBelow: false,
        $panel: null,
        showPanelTimer: null,
        currentProfileId: null,
        mouseInsidePanel: false,
        mouseInsideLink: false,
        $lastSelectedNode: null,
        $lastMouseOverNode: null,
        isHiding: null,
        initPanel: function() {
            var d = this, c = d.config, e;
            if (!d.$panel) {
                e = $("<div></div>");
                d.$panel = e;
                e.attr("id", d.config.PANEL_ID_NAME);
                $("body").append(e);
                e.css("z-index", d.config.zIndex);
                e.mouseenter(function() {
                    d.mouseInsidePanel = true
                });
                e.mouseleave(function() {
                    d.mouseInsidePanel = false
                })
            }
        },
        showPanel: function(c) {
            c.removeClass("hidden")
        },
        hidePanel: function(c) {
            c.addClass("hidden")
        },
        isPanelHidden: function(c) {
            return c.hasClass("hidden")
        },
        setDefaultShownBelow: function(c) {
            this.defaultShownBelow = c
        },
        getDefaultShownBelow: function() {
            return this.defaultShownBelow
        },
        delayShowPanel: function(d, e) {
            var c = this;
            c.showPanelTimer = setTimeout(function() {
                if (c.mouseInsideLink) {
                    d.show(e)
                }
                c.showPanelTimer = null
            }, b.SHOW_PANEL_DELAY)
        },
        delayHidePanel: function(g, c) {
            var e = this, d = e.config, f;
            if (e.mouseInsidePanel) {
                return
            }
            e.isHiding = true;
            setTimeout(function() {
                var h = e.areDifferentLinkNodes(c, e.$lastSelectedNode);
                if ((!e.mouseInsidePanel&&!e.mouseInsideLink) || (e.mouseInsideLink && h)) {
                    e.hidePanel(g)
                }
                if (e.isHiding) {
                    e.isHiding = false;
                    f = e.registerMiniProfile(e.$lastSelectedNode);
                    if (h) {
                        e.delayShowPanel(f, e.$lastSelectedNode)
                    }
                }
            }, d.HIDE_PANEL_DELAY)
        },
        loadProfile: function(d, n) {
            var l = this, g = l.config, f = "throw /*LI:DBE*/ 1;", e = d.attr(g.MINIPROFILE_JS_ATTRIBUTE_NAME), o = d.attr(g.MINIPROFILE_TEMPLATE_ATTRIBUTE_NAME) || "tl/shared/profile/mini_profile_shell", c = d.attr(g.MINIPROFILE_URL_ATTRIBUTE_NAME), j = (typeof window.console !== "undefined") ? window.console: {
                log: $.noop()
            }, h, m, k;
            if (c) {
                m = l.getProfileContent(c);
                if (m) {
                    n.success(m);
                    return
                }
            }
            if (e) {
                $.getScript(e)
            }
            var i = function(p) {
                if (p) {
                    n.success(p);
                    $("body").trigger(g.NEW_CONTENT_EVENT)
                }
            };
            $.ajax({
                type: "GET",
                url: c,
                headers: {
                    "X-IsAJAXForm": 1
                },
                data: "",
                dataType: "text",
                success: function(u, p, q) {
                    var s, r = false, t = LI.Profile2;
                    if (t && t.Render) {
                        t.Render.render({
                            template: o,
                            response: q,
                            success: i
                        })
                    } else {
                        if (o && window.dust) {
                            try {
                                u = u.replace(f, "");
                                s = $.parseJSON(u);
                                dust.render(o, s.content, function(x, w) {
                                    if (x) {
                                        j.log(x);
                                        return
                                    }
                                    i(w)
                                })
                            } catch (v) {}
                        }
                    }
                },
                error: function(p, r, q) {}
            })
        },
        getProfileContent: function(c) {
            var d = this.profileRegistry[c];
            if (!d) {
                return null
            }
            return d.getContent()
        },
        getMiniProfile: function(e) {
            var d = this, c = e.attr(b.MINIPROFILE_URL_ATTRIBUTE_NAME);
            return d.profileRegistry[c]
        },
        registerMiniProfile: function(h) {
            var f = this, e = f.config, g = f.getMiniProfile(h), c, d;
            c = h.attr(e.MINIPROFILE_ID_ATTRIBUTE_NAME);
            if (!c) {
                c = "LI-" + Math.floor(Math.random() * 9999999);
                h.attr(e.MINIPROFILE_ID_ATTRIBUTE_NAME, c)
            }
            if (!g) {
                d = h.attr(e.MINIPROFILE_URL_ATTRIBUTE_NAME);
                g = new $.fn.MiniProfile(c, f.$panel, f);
                f.profileRegistry[d] = g
            }
            return g
        },
        areDifferentLinkNodes: function(e, d) {
            var f = this, c = f.config;
            return (!e ||!d || e.attr(c.MINIPROFILE_ID_ATTRIBUTE_NAME) !== d.attr(c.MINIPROFILE_ID_ATTRIBUTE_NAME))
        },
        handleMouseEvent: function(k) {
            var j = this, f = j.config, e = $(k.target), g, i, c, h, d;
            if (!j.$panel) {
                j.initPanel()
            }
            j.$lastMouseOverNode = e;
            g = e.closest("." + f.MINIPROFILE_SEARCH_CLASS_NAME);
            if (g.length) {
                j.mouseInsideLink = true;
                h = j.registerMiniProfile(g);
                if (!j.currentProfileId || j.currentProfileId !== h.id) {
                    j.currentProfileId = h.id;
                    if (j.showPanelTimer) {
                        d = j.showPanelTimer;
                        window.clearTimeout(d);
                        d = null
                    }
                    j.$lastSelectedNode = g;
                    if (j.isHiding) {} else {
                        j.isHiding = false;
                        j.delayShowPanel(h, g)
                    }
                }
            } else {
                j.mouseInsideLink = false;
                if (j.mouseInsidePanel) {
                    return
                }
                j.currentProfileId = null;
                if (!j.isPanelHidden(j.$panel) && j.$panel.find("." + f.MINIPROFILE_CONTENT_CLASS_NAME).length) {
                    j.delayHidePanel(j.$panel, j.$lastSelectedNode)
                }
            }
        }
    });
    return a
}({
    SHOW_PANEL_DELAY: 500,
    HIDE_PANEL_DELAY: 400,
    PANEL_ID_NAME: "lui-mini-profile-body",
    PANEL_ZINDEX: 1007,
    MINIPROFILE_SEARCH_CLASS_NAME: "new-miniprofile-container",
    MINIPROFILE_CONTENT_CLASS_NAME: "new-miniprofile-content",
    MINIPROFILE_ID_ATTRIBUTE_NAME: "data-li-miniprofile-id",
    MINIPROFILE_JS_ATTRIBUTE_NAME: "data-li-getjs",
    MINIPROFILE_TEMPLATE_ATTRIBUTE_NAME: "data-li-tl",
    MINIPROFILE_URL_ATTRIBUTE_NAME: "data-li-url",
    NEW_CONTENT_EVENT: "show-mini-profile"
}));
$(function() {
    var b = $(document);
    function a(d) {
        $.fn.MiniProfileManager.handleMouseEvent(d)
    }(function c() {
        if (b.on) {
            b.on("mouseover", a)
        }
    }())
});
(function() {
    var f = "click", e = "remove-mention-dialog-content", c = "", a = "error", d = "loading", g = "prompt", b = "success";
    LI.define("RemoveMentionDialog");
    LI.RemoveMentionDialog = function(h, i) {
        var m, o, l, j, n, k, p;
        h = $(h);
        j = function(q) {
            q.preventDefault();
            if (!m) {
                m = new LI.Dialog()
            }
            m.open(q, {
                className: "dialog-v2 remove-mention-dialog",
                content: {
                    node: e,
                    title: LI.i18n.get("remove-mention-dialog-remove-mention")
                },
                name: "removeMentionDialog",
                type: "task-modal",
                width: 400
            });
            o = $("#" + e);
            m.submitEvent.subscribe(k, null, this)
        };
        h.on(f, _.bind(j, this));
        l = function() {
            o.addClass(a).removeClass(d).removeClass(g)
        };
        n = function(r) {
            var q = r.responseText || r;
            if (q && (q.isRemoveMentionSuccessful || q.result === "SUCCESS")) {
                o.addClass(b).removeClass(d);
                p()
            } else {
                l()
            }
        };
        k = function(t, s) {
            var q, u = $(s[0]), v = "GET", r = u.attr("href");
            o.addClass(d).removeClass(g);
            if (u.attr("data-li-mention-type") === "GRP_CMT") {
                $.ajax({
                    "method": v,
                    "url": r,
                    "error": l,
                    "success": n
                })
            } else {
                LI.asyncRequest(v, r, {
                    failure: l,
                    success: n
                })
            }
            if (u.hasClass("remove-mention-confirm")) {
                q = {
                    mention_category: u.attr("data-li-mention-type"),
                    update_id: u.attr("data-li-update-id")
                };
                WebTracking.trackUserAction(u.attr("data-li-action-type"), q, true)
            }
        };
        p = function() {
            var q = $("." + h.attr("data-li-mention-class"));
            $.each(q, function(r, u) {
                u = $(u);
                var t = u.html(), s = u.parent();
                if (s.hasClass("new-miniprofile-container")) {
                    s.attr({
                        "class": c,
                        "data-li-tl": c,
                        "data-li-url": c
                    });
                    s.html(t)
                }
            })
        }
    }
}());
(function() {
    dust.register("tl/shared/profile/sorted_shared_connections", p);
    var w = {
        "fmtName": h,
        "viewProfileLink": b,
        "picLink": f,
        "img_src": e,
        "connectionsLink": l
    };
    function p(z, y) {
        y = y.shiftBlocks(w);
        return z.exists(y.get("MiniProfile"), y, {
            "else": o,
            "block": s
        }, null)
    }
    function o(z, y) {
        y = y.shiftBlocks(w);
        return z.section(y.get("sorted_shared_connections"), y, {
            "block": m
        }, null)
    }
    function m(z, y) {
        y = y.shiftBlocks(w);
        return z.write("<ul>").section(y.get("sortedSharedConnections"), y, {
            "block": k
        }, {
            "numConnections": "4"
        }).write("</ul>")
    }
    function k(z, y) {
        y = y.shiftBlocks(w);
        return z.helper("lt", y, {
            "block": v
        }, {
            "key": u,
            "value": t,
            "type": "number"
        })
    }
    function i(z, y) {
        y = y.shiftBlocks(w);
        return z.reference(y.get("full_name"), y, "h")
    }
    function g(z, y) {
        y = y.shiftBlocks(w);
        return z.reference(y.get("profile_link"), y, "h", ["s"])
    }
    function f(z, y) {
        y = y.shiftBlocks(w);
        return z.reference(y.get("pic_link_1"), y, "h", ["s"])
    }
    function e(z, y) {
        y = y.shiftBlocks(w);
        return z.exists(y.get("pictureId"), y, {
            "else": d,
            "block": c
        }, null)
    }
    function d(z, y) {
        y = y.shiftBlocks(w);
        return z.write("/scds/common/u/img/icon/icon_no_photo_40x40.png")
    }
    function c(z, y) {
        y = y.shiftBlocks(w);
        return z.reference(y.get("linkAuto_media_1"), y, "h", ["s"])
    }
    function v(z, y) {
        y = y.shiftBlocks(w);
        return z.write('<li><a href="').block(y.getBlock("viewProfileLink"), y, {}, null).write('"><img class="photo" src="').block(y.getBlock("img_src"), y, {}, null).write('" alt="').block(y.getBlock("fmtName"), y, {}, null).write('" /><span class="name"> ').block(y.getBlock("fmtName"), y, {}, null).write(' </span><span class="headline"> ').reference(y.get("headline"), y, "h").write(" </span></a></li>")
    }
    function u(z, y) {
        y = y.shiftBlocks(w);
        return z.reference(y.get("$idx"), y, "h")
    }
    function t(z, y) {
        y = y.shiftBlocks(w);
        return z.reference(y.get("maxIdx"), y, "h")
    }
    function s(z, y) {
        y = y.shiftBlocks(w);
        return z.exists(y.getPath(false, ["sorted_shared_connections", "sortedSharedConnections"]), y, {
            "block": r
        }, null)
    }
    function r(z, y) {
        y = y.shiftBlocks(w);
        return z.section(y.get("mini_profile"), y, {
            "block": q
        }, null)
    }
    function q(z, y) {
        y = y.shiftBlocks(w);
        return z.write('<div class="miniprofile-shared-connections">').section(y.get("sorted_shared_connections"), y, {
            "block": n
        }, null).write("</div>")
    }
    function n(z, y) {
        y = y.shiftBlocks(w);
        return z.write('<div class="shared-connections">').write('<span class="label"><a href="').block(y.getBlock("connectionsLink"), y, {}, null).write('"><span class="connections-label">&nbsp;</span></a>').reference(y.get("sharedConnectionsCount"), y, "h").write("</span><ul>").section(y.get("sortedSharedConnections"), y, {
            "block": j
        }, null).write("</ul></div>")
    }
    function l(z, y) {
        y = y.shiftBlocks(w);
        return z.reference(y.get("connections_link"), y, "h", ["s"])
    }
    function j(z, y) {
        y = y.shiftBlocks(w);
        return z.write('<li><a href="').block(y.getBlock("viewProfileLink"), y, {}, null).write('" title="').block(y.getBlock("fmtName"), y, {}, null).write('"><img src="').exists(y.getPath(true, ["pictureId"]), y, {
            "else": a,
            "block": x
        }, null).write('" alt="').block(y.getBlock("fmtName"), y, {}, null).write('" width="30" height="30"/></a></li>')
    }
    function h(z, y) {
        y = y.shiftBlocks(w);
        return z.reference(y.get("full_name"), y, "h")
    }
    function b(z, y) {
        y = y.shiftBlocks(w);
        return z.reference(y.get("profile_link"), y, "h", ["s"])
    }
    function a(z, y) {
        y = y.shiftBlocks(w);
        return z.reference(y.get("media_gh"), y, "h")
    }
    function x(z, y) {
        y = y.shiftBlocks(w);
        return z.reference(y.get("media_link"), y, "h")
    }
    return p
})();
(function() {
    dust.register("sorted_shared_connections", dust.cache["tl/shared/profile/sorted_shared_connections"])
})();
(function() {
    dust.register("tl/shared/mentions/remove_mention_dialog_content", p);
    var w = {
        "unmentionUrl": o,
        "unmentionTracking": d
    };
    function p(z, y) {
        y = y.shiftBlocks(w);
        return z.write('<div id="remove-mention-dialog-content" class="prompt"><div class="prompt-content">').helper("select", y, {
            "block": q
        }, {
            "key": j
        }).write('<ul class="actions"><li><a class="remove-mention-confirm dialog-submit dialog-submit-suppress" data-li-action-type="mention_remove" data-li-mention-type="').block(y.getBlock("unmentionTracking"), y, {}, null).write('" data-li-update-id="').reference(y.get("updateID"), y, "h").write('" href="').block(y.getBlock("unmentionUrl"), y, {}, null).write('">').reference(y.get("remove_mention_dialog__text_plain__remove_mention"), y, "h").write('</a></li><li><a class="remove-mention-cancel dialog-close" href="#">').reference(y.get("remove_mention_dialog__text_plain__cancel"), y, "h").write("</a></li>").helper("eq", y, {
            "block": h
        }, {
            "key": b,
            "value": "treatment"
        }).write('</ul></div><div class="loading-content">').reference(y.get("remove_mention_dialog__text_plain__loading"), y, "h").write('</div><div class="success-content"><p>').reference(y.get("remove_mention_dialog__text_plain__you_have_successfully_removed"), y, "h").write('</p><ul class="actions"><li><a class="remove-mention-continue dialog-close" href="#">').reference(y.get("remove_mention_dialog__text_plain__continue"), y, "h").write("</a></li>").helper("eq", y, {
            "block": a
        }, {
            "key": x,
            "value": "treatment"
        }).write('</ul></div><div class="error-content"><p>').reference(y.get("remove_mention_dialog__text_plain__sorry_there_was_an_error"), y, "h").write('</p><ul class="actions"><li><a class="remove-mention-try-again dialog-submit dialog-submit-suppress" data-li-mention-type="').block(y.getBlock("unmentionTracking"), y, {}, null).write('" href="').block(y.getBlock("unmentionUrl"), y, {}, null).write('">').reference(y.get("remove_mention_dialog__text_plain__try_again"), y, "h").write("</a></li></ul></div></div>")
    }
    function o(z, y) {
        y = y.shiftBlocks(w);
        return z.exists(y.get("groupID"), y, {
            "else": m,
            "block": e
        }, null)
    }
    function m(z, y) {
        y = y.shiftBlocks(w);
        return z.exists(y.get("shareID"), y, {
            "else": k,
            "block": f
        }, null)
    }
    function k(z, y) {
        y = y.shiftBlocks(w);
        return z.exists(y.get("discussionScopeID"), y, {
            "else": i,
            "block": g
        }, null)
    }
    function i(z, y) {
        y = y.shiftBlocks(w);
        return z.reference(y.get("remove_mention_from_article_comment_link"), y, "h")
    }
    function g(z, y) {
        y = y.shiftBlocks(w);
        return z.reference(y.get("remove_mention_from_comment_link"), y, "h")
    }
    function f(z, y) {
        y = y.shiftBlocks(w);
        return z.reference(y.get("remove_mention_from_update_link"), y, "h")
    }
    function e(z, y) {
        y = y.shiftBlocks(w);
        return z.reference(y.get("remove_mention_from_group_discussion_comment_link"), y, "h")
    }
    function d(z, y) {
        y = y.shiftBlocks(w);
        return z.exists(y.get("groupID"), y, {
            "else": c,
            "block": r
        }, null)
    }
    function c(z, y) {
        y = y.shiftBlocks(w);
        return z.exists(y.get("shareID"), y, {
            "else": v,
            "block": s
        }, null)
    }
    function v(z, y) {
        y = y.shiftBlocks(w);
        return z.exists(y.get("discussionScopeID"), y, {
            "else": u,
            "block": t
        }, null)
    }
    function u(z, y) {
        y = y.shiftBlocks(w);
        return z.write("TOD_CMT")
    }
    function t(z, y) {
        y = y.shiftBlocks(w);
        return z.write("NUS_CMT")
    }
    function s(z, y) {
        y = y.shiftBlocks(w);
        return z.write("NUS_SHARE")
    }
    function r(z, y) {
        y = y.shiftBlocks(w);
        return z.write("GRP_CMT")
    }
    function q(z, y) {
        y = y.shiftBlocks(w);
        return z.helper("eq", y, {
            "block": n
        }, {
            "value": "treatment"
        }).helper("default", y, {
            "block": l
        }, null)
    }
    function n(z, y) {
        y = y.shiftBlocks(w);
        return z.write("<p>").reference(y.get("remove_mention_dialog__text_plain__this_will_remove_the_link_to_your_profile_and_delete"), y, "h").write("</p>")
    }
    function l(z, y) {
        y = y.shiftBlocks(w);
        return z.write("<p>").reference(y.get("remove_mention_dialog__text_plain__this_will_remove_the_link_to_your_profile"), y, "h").write("</p>")
    }
    function j(z, y) {
        y = y.shiftBlocks(w);
        return z.reference(y.get("lix_mentions_viral_updates"), y, "h")
    }
    function h(z, y) {
        y = y.shiftBlocks(w);
        return z.write('<li class="privacy-settings"><a href="').reference(y.get("privacy_settings_link"), y, "h").write('" target="_blank">').reference(y.get("remove_mention_dialog__text_plain__privacy_settings"), y, "h").write("</a></li>")
    }
    function b(z, y) {
        y = y.shiftBlocks(w);
        return z.reference(y.get("lix_mentions_viral_updates"), y, "h")
    }
    function a(z, y) {
        y = y.shiftBlocks(w);
        return z.write('<li class="privacy-settings"><a href="').reference(y.get("privacy_settings_link"), y, "h").write('" target="_blank">').reference(y.get("remove_mention_dialog__text_plain__privacy_settings"), y, "h").write("</a></li>")
    }
    function x(z, y) {
        y = y.shiftBlocks(w);
        return z.reference(y.get("lix_mentions_viral_updates"), y, "h")
    }
    return p
})();
(function() {
    dust.register("remove_mention_dialog_content", dust.cache["tl/shared/mentions/remove_mention_dialog_content"])
})();
(function() {
    var g = "inputChange", a = "character", d = "", f = "hide", c = "match", b = "hp-share", i = "nus-discussion", h = "group-discussion-open", j = "group-discussion-closed";
    LI.MentionsDecorator = function(ap, aa) {
        var af = aa.mentionStrategy, Q = aa.triggers || "A", at = aa.context || d, F = d, au = false, G = (aa.inputCallout && aa.inputCallout.currentImpressionCount) || 0, E = Y$(aa.mentionsEl)[0], X, O = Y$(aa.highlightEl)[0], an, L = YAHOO.env.ua.ie, m = Y$(aa.mentionsInputEl)[0], A, S, K, aq, s = d, v = d, M = false, t, am = aa.maximumMentions || 30, q, z, ac = [], B = aa.queryDelay || 250, w = this, ag = (aa.inputCallout && aa.inputCallout.enabled) || false, x, n = aa.typeahead, ao = aa.typeaheadEl && Y$(aa.typeaheadEl)[0], D = true, aj = aa.dedupeConnections || false, C = aa.urlAppend || d, W = YAHOO.lang, N = aa.isFromCap || false;
        if (LI.MentionsDecorator.debugMode === undefined) {
            LI.MentionsDecorator.debugMode = (window.location.href.indexOf("mentions_debug=true")!==-1)
        }
        au = LI.MentionsDecorator.debugMode;
        w.mentionEntities = [];
        w.currentMatch = {};
        w.previousToken = "";
        w.previousEditedMentionTokens = null;
        w.currentMentionTokens = null;
        w.sendSecondWord = w.hasLastResults = w.usedSecondToken = w.sentSecondQuery = w.dependenciesLoaded = false;
        w.upperRegexObj = /^[A-Z\u00C0-\u00D6\u00D8-\u00DE]$/;
        q = function(av) {
            if (au) {
                var aw = (window.console && window.console.log) ? window.console.log: window.alert;
                aw(w);
                aw(av)
            }
        };
        function al() {
            return !YDom.hasClass(document.body, "member")
        }
        function ai() {
            function av(ax) {
                var ay = false, aw;
                try {
                    aw = ax.responseText.influencer_entitlement.result;
                    ay = aw.isInfluencer
                } catch (az) {
                    q("influencer check failed")
                }
                LI.MentionsDecorator.isInfluencer = ay
            }
            if (!LI.MentionsDecorator.isInfluencer&&!LI.MentionsDecorator.influencerCheckPerformed) {
                LI.MentionsDecorator.influencerCheckPerformed = true;
                if (al()) {
                    LI.MentionsDecorator.isInfluencer = false
                } else {
                    if (LI.MentionsIsInfluencerUrl && LI.MentionsIsInfluencerUrl.length) {
                        LI.asyncRequest("POST", LI.MentionsIsInfluencerUrl, {
                            failure: av,
                            success: av
                        }, null)
                    } else {
                        q("failed to get influencer check url");
                        LI.MentionsDecorator.isInfluencer = false
                    }
                }
            }
        }
        if (!N && (at === i || at === b)) {
            ai()
        }
        function H() {
            u();
            p(true);
            if (K) {
                K.close()
            }
        }
        function p(av) {
            if (!z) {
                z = YDom.getAncestorByClassName(m, "mentions-container")
            }
            LI.toggleClass(z, "hasFocus", av)
        }
        function u() {
            var aw = false, av = false, ay=!!window._;
            if (!ay) {
                YAHOO.util.Get.script(LI.MentionsUnderscore.scripts[0], {
                    onSuccess: function() {
                        ay = true;
                        ax()
                    },
                    onFailure: function() {
                        q("LI.MentionsUnderscore failed")
                    }
                })
            }
            if (!w.dependenciesLoaded) {
                if (!av) {
                    YAHOO.util.Get.script(LI.MentionsDependencies.scripts[0], {
                        onSuccess: function() {
                            av = true;
                            ax()
                        },
                        onFailure: function() {
                            q("LI.MentionsDependencies failed")
                        }
                    })
                }
                if (at&&!LI.DataSource&&!aw) {
                    YAHOO.util.Get.script(LI.MentionsDataSourceDependencies.scripts[0], {
                        onSuccess: function() {
                            aw = true;
                            ax()
                        },
                        onFailure: function() {
                            q("LI.MentionsDataSourceDependencies failed")
                        }
                    })
                } else {
                    aw = true
                }
            }
            function ax() {
                if (av && aw && ay) {
                    t = LI.DataSource;
                    w.dependenciesLoaded = true;
                    if (at) {
                        J()
                    } else {
                        ak()
                    }
                }
            }
        }
        function J() {
            var aw = [], ay = [], av, aA, aB, az = LI.i18n.get("typeahead2-search-connections"), ax = "&query=" + new Date().getTime();
            aB = {
                discussionparticipants: LI.i18n.get("typeahead2-search-discussion-participants"),
                company: LI.i18n.get("typeahead2-search-companies"),
                mynetwork: az,
                my1stnetwork: az
            };
            switch (at) {
            case i:
                if (LI.MentionsDecorator.isInfluencer) {
                    aw[0] = W.merge(t.Sources.TYPE_COMPANIES_AND_NETWORK, {})
                } else {
                    aw[0] = W.merge(t.Sources.TYPE_COMPANIES_AND_FIRST_DEGREE_CONNECTIONS, {})
                }
                ay[0] = "connectionsAndCompany";
                aw[1] = W.merge(t.Sources.TYPE_DISCUSSION_PARTICIPANTS, {});
                aw[1].liveData += "?" + (C.indexOf("&") === 0 ? C.substr(1) : C) + ax;
                ay[1] = "discussionparticipants";
                break;
            case b:
                if (LI.MentionsDecorator.isInfluencer || af === "X" || af === "Z") {
                    aw[0] = "TYPE_COMPANIES_AND_NETWORK"
                } else {
                    aw[0] = "TYPE_COMPANIES_AND_FIRST_DEGREE_CONNECTIONS"
                }
                break;
            case h:
                aw[0] = W.merge(t.Sources.TYPE_GROUP_MEMBERS_AND_NETWORK, {});
                aw[0].config.scriptQueryAppend += C;
                break;
            case j:
                aw[0] = W.merge(t.Sources.TYPE_GROUP_MEMBERS, {});
                aw[0].config.scriptQueryAppend += C;
                break
            }
            av = aw.length;
            if (av > 1) {
                F = {};
                aA = {};
                for (an = 0;
                an < av;
                an++) {
                    aA[ay[an]] = aw[an].create(m)
                }
                F.create = function() {
                    var aC = {};
                    if (aj) {
                        aC.doWithSourceSuccessCallback = y
                    }
                    return t.Helper.createAggregatedDataSource(aA, aC, aB)
                }
            } else {
                if (av === 1) {
                    F = aw[0]
                }
            }
            q("contextDataSource: " + F);
            ak()
        }
        function y(aw, aB) {
            q("function call: deDupeDataSources");
            var aA, ay, az = aw.results, av = [], ax, aC;
            for (aC in aB) {
                if (aC === "discussionparticipants") {
                    ay = az.length;
                    ax = aB[aC].resultList;
                    while (ay--) {
                        aA = ax.length;
                        if (az[ay].sourceID === "mynetwork" || az[ay].sourceID === "my1stnetwork") {
                            while (aA--) {
                                if (az[ay].id === ax[aA].id) {
                                    av.push(ay)
                                }
                            }
                        }
                    }
                }
            }
            av.sort();
            aA = av.length;
            while (aA--) {
                az.splice(av[aA], 1)
            }
            return {
                results: az
            }
        }
        function ak() {
            var aw, ax, av, ay;
            if (!M && w.dependenciesLoaded) {
                B = parseInt(B.toString().replace(/(?:\D*)(\d+)(?:\D*)/gi, "$1"), 10);
                if (isNaN(B)) {
                    B = 250
                }
                S = new LI.InputChangeObserver(m);
                S[g].subscribe(ab);
                w.typeahead = aa.typeahead || LI.Controls.getControl(ao, "LI.Typeahead2");
                av = w.typeahead;
                if (at) {
                    av.source = F
                }
                av.onItemSelect = Y;
                if (Q === "H") {
                    av.onDataReturn = l
                }
                av.init();
                x = new LI.TokenMatcher(S, Q);
                x[c].subscribe(P);
                x[f].subscribe(I);
                X = new LI.TokenHighlighter(O);
                YEvent.on(m, "blur", o);
                ay = m.getAttribute("data-bidi-event");
                if (ay) {
                    $(m).on(ay, T)
                }
                M = true
            }
        }
        function l(az, aA, av) {
            q("function call: handleDataReturn");
            var aI = w.currentMatch, aC, aF, aD, ax = aA[2], aH, aG, ay, aw, aB = decodeURIComponent(aA[1]), aE;
            if (Q === "H") {
                aC = aI.trigger;
                if (aC === "upper") {
                    if (!w.sentSecondQuery) {
                        aw = aI.token;
                        aH = ax.length;
                        w.hasLastResults=!!aH;
                        aF = (aw.indexOf(" ")!==-1);
                        aG = aF ? aw.substr(aw.indexOf(" ") + 1) : "";
                        ay = aG.length;
                        aD = aF ? w.upperRegexObj.test(aG.substr(0, 1)) : false;
                        aE = (aB === aw.substr(0, aB.length)) || (aB === aG.substr(0, aB.length));
                        if (aE && aF && aD && ay && ((!w.usedSecondToken&&!aH) || w.usedSecondToken)) {
                            w.sendSecondWord = true;
                            if (!aH && ay >= 4 && aB === aw && aG !== aw) {
                                U();
                                w.sentSecondQuery = true
                            }
                        } else {
                            if (!aE && aF && aD) {
                                if (ay <= 3) {
                                    w.sendSecondWord = false
                                } else {
                                    if (ay >= 4&&!aH) {
                                        w.sendSecondWord = true;
                                        U();
                                        w.sentSecondQuery = true
                                    }
                                }
                            }
                        }
                    } else {
                        w.sentSecondQuery = false;
                        w.sendSecondWord = false
                    }
                }
            }
        }
        function P(ax, aw) {
            var av = aw[0].match;
            q("match: " + YJson.stringify(av));
            if (k(av)&&!V()) {
                ae();
                w.currentMatch = av;
                ac.push(window.setTimeout(U, B))
            }
        }
        function V() {
            var ay = w.previousEditedMentionTokens, aw = w.currentMentionTokens, av, ax;
            if (ay && aw) {
                w.previousEditedMentionTokens = null;
                w.currentMentionTokens = null;
                if (ay.length === aw.length) {
                    av = ay[ay.length - 1];
                    ax = aw[aw.length - 1];
                    if (av.length > ax.length) {
                        return true
                    }
                    if (ay[0].length > aw[0].length) {
                        return true
                    }
                }
            }
            return false
        }
        function U() {
            var aD = w.currentMatch, ax, aB, az, aA = false, ay, aC, av, aw;
            if (Q === "H") {
                ax = aD.trigger;
                if (ax === "upper") {
                    aw = aD.token;
                    aB = aw.indexOf(" ")!==-1;
                    aC = aB ? aw.substr(aw.indexOf(" ") + 1) : "";
                    ay = w.previousToken;
                    az = aB ? w.upperRegexObj.test(aC.substr(0, 1)) : false;
                    if (ay.length) {
                        aA = (ay === aC.substr(0, ay.length)) || (ay === aw.substr(0, ay.length))
                    }
                    if (aC.length >= 4) {
                        if (aB && az && (w.sendSecondWord || (aA && ((!w.usedSecondToken&&!w.hasLastResults) || w.usedSecondToken)))) {
                            av = aD.start;
                            aD.token = aC;
                            aD.start = av + aw.lastIndexOf(" ");
                            if (av) {
                                aD.start++
                            }
                            w.usedSecondToken = true
                        } else {
                            w.usedSecondToken = false
                        }
                    }
                }
                w.previousToken = w.currentMatch.token
            }
            q("query: " + w.currentMatch.token);
            if (at === b) {
                if (LI.MentionsDecorator.isInfluencer || (w.currentMatch.trigger === "@" && (af === "X" || af === "Z"))) {
                    w.typeahead.setSource("TYPE_COMPANIES_AND_NETWORK")
                } else {
                    w.typeahead.setSource("TYPE_COMPANIES_AND_FIRST_DEGREE_CONNECTIONS")
                }
            }
            w.typeahead.sendQuery(w.currentMatch.token)
        }
        function k(aA) {
            var av = aA.start, aB = aA.end, az, ay, ax, aw = w.mentionEntities;
            an = aw.length;
            while (an--) {
                az = aw[an];
                ay = az.index - 1;
                ax = ay + az.length;
                if ((av >= ay && av < ax) || (aB >= ay && aB <= ax)) {
                    return false
                }
            }
            return true
        }
        function I() {
            ae();
            ao.value = d;
            try {
                w.typeahead.collapseContainer()
            } catch (av) {}
        }
        function ab() {
            v = s;
            s = m.value;
            ad(v)
        }
        function Y(aI, aH) {
            var aA = m.value, aL = w.currentMatch, ax, aB, aF, aJ = d, aC, aK = aH[2], aG, aw, av, ay, aE, az, aD = w.currentMatch.triggerIncluded;
            aG = aK.sourceID;
            ax = LI.htmlUnencode(aK.displayName);
            az = ax.length;
            if (aK.type !== "category") {
                av = aL.start;
                q("itemType: " + aG);
                switch (aG) {
                case"groupmembers":
                case"my1stnetwork":
                case"mynetwork":
                case"discussionparticipants":
                    aG = "member";
                    break
                }
                if (av) {
                    ++av
                }
                aw = [aA.substr(0, av), ax, aA.substr(w.currentMatch.end)].join(d);
                if (av) {
                    aF = ax.indexOf(" ");
                    if (aF!==-1) {
                        aJ = LI.htmlUnencode(ax.substr(0, aF));
                        if (aJ !== d) {
                            aE = av - (aJ.length + 1);
                            ay = av + az;
                            aC = aw.substr(aE, ay).toLowerCase();
                            aB = [aJ, " ", ax].join(d).toLowerCase();
                            if (aB === aC) {
                                if (k({
                                    "start": aE,
                                    "end": (aE + az)
                                })) {
                                    aw = [aw.substr(0, aE), ax, aw.substr(ay)].join(d);
                                    av = aE
                                }
                            }
                        }
                    }
                }
                m.value = aw;
                if (w.mentionEntities.length < am) {
                    w.mentionEntities.push({
                        "id": aK.id,
                        "index": av,
                        "length": az,
                        "type": aG,
                        "token": ax,
                        "triggerIncluded": aD,
                        "caretPosition": aL.caretPosition
                    });
                    ar();
                    ab();
                    R();
                    m.focus();
                    if (av&&!aD) {
                        av++
                    }
                    e(m, av + az);
                    X.render(m.value, w.mentionEntities)
                }
            }
        }
        function o() {
            p(false);
            if (K) {
                K.close()
            }
            ao.value = d;
            window.setTimeout(function() {
                w.typeahead.collapseContainer();
                w.currentMatch = d
            }, 250)
        }
        function ae() {
            var av = ac.length;
            while (av--) {
                window.clearTimeout(ac[av])
            }
        }
        this.clearMentions = function() {
            w.mentionEntities = [];
            R();
            X.render(d, [])
        };
        function R() {
            E.value = YJson.stringify(r())
        }
        function r() {
            var aw, ax = [], av = w.mentionEntities.length;
            for (an = 0;
            an < av;
            an++) {
                aw = w.mentionEntities[an];
                ax[an] = {
                    "id": aw.id,
                    "index": aw.index,
                    "length": aw.length,
                    "type": aw.type
                }
            }
            return ax
        }
        function Z(aw) {
            var az = aw, av = false, ax;
            if (M) {
                try {
                    av = w.typeahead.isContainerOpen()
                } catch (ay) {}
                if (av) {
                    ax = aw.keyCode;
                    switch (ax) {
                    case 9:
                    case 13:
                        if (!((!YAHOO.env.ua.opera && (navigator.userAgent.toLowerCase().indexOf("mac")===-1)) || (YAHOO.env.ua.webkit > 420))) {
                            az = {
                                type: "keydown",
                                keyCode: 39,
                                target: ao,
                                currentTarget: ao
                            }
                        }
                        o();
                    case 27:
                        o();
                    case 38:
                    case 40:
                        w.typeahead.proxyKeyDown(az);
                        YEvent.stopEvent(aw);
                        break
                    }
                }
            } else {
                ak()
            }
        }
        function ad(aL) {
            var aA, aM = [], aP, aE, aF, aH, aI = false, aQ, aD, aR, aW = w.mentionEntities.length, aU = [], aK, aO, av, ax, aJ, ay, aG, aC, az, aS, aT = " ", aw, aB, aN, aV = (L && L <= 9);
            s = m.value;
            aC = aV && D?-1 : 0;
            aH = s.length - aL.length;
            for (an = 0;
            an < aW;
            an++) {
                aP = w.mentionEntities[an];
                aF = aP.token;
                aE = aP.index;
                aQ = encodeURIComponent(aF);
                if (aQ.indexOf("%00")>-1) {
                    aF = decodeURIComponent(aQ.replace("%00", ""))
                }
                ax = s.indexOf(aF);
                aR = aL.indexOf(aF) === aL.lastIndexOf(aF) && ax === s.lastIndexOf(aF);
                aD = ax===-1;
                if (aR && ax !== aE && ax!==-1) {
                    w.mentionEntities[an].index = s.indexOf(aF)
                } else {
                    aN = aF.length;
                    aw = s.substr(aE, aN);
                    if (aw !== aF) {
                        q("adjustMentions: strCheck !== curToken");
                        aA = aE + aH + aC;
                        aB = s.substr(aA, aN);
                        if (aB === aF) {
                            q("adjustMentions: strDiffCheck === curToken");
                            w.mentionEntities[an].index = aA
                        } else {
                            q("adjustMentions: strDiffCheck !== curToken");
                            aK = aF.split(aT);
                            az = new RegExp("[^" + aF.replace(/\s/g, d).replace(/\-/g, "\\-") + "\\s]", "gi");
                            aO = aw.replace(az, "").split(aT);
                            aM = _.intersection(aK, aO);
                            q("curToken: " + aF);
                            q("strCheck: " + aw);
                            q("strDiffCheck: " + aB);
                            q("commonTokens: " + aM);
                            if (aM.length) {
                                aI = true;
                                ay = aM.join(aT);
                                ax = aP.index;
                                aJ = ay.length;
                                av = ax + aJ;
                                w.previousEditedMentionTokens = aK;
                                w.currentMentionTokens = aO;
                                aP.token = ay;
                                aP.length = aJ;
                                aP.end = av;
                                w.mentionEntities[an] = aP;
                                aG = s.substr(0, ax) + ay + d + s.substr(ax - 1 + aN);
                                m.value = aG;
                                if (aV) {
                                    aH = s.length - m.value.length;
                                    ah(m, av, 0)
                                } else {
                                    e(m, av)
                                }
                            } else {
                                aU.push(an)
                            }
                            aC = 0
                        }
                    }
                }
            }
            aS = aU.length;
            aU.sort().reverse();
            if (aS) {
                for (an = 0;
                an < aS;
                an++) {
                    w.mentionEntities.splice(aU[an], 1)
                }
            }
            ar();
            if (aI) {
                ad(s)
            }
            R();
            X.render(s, w.mentionEntities);
            D = false
        }
        function ah(av, ax, aw) {
            setTimeout(function() {
                e(av, ax)
            }, aw)
        }
        function ar() {
            w.mentionEntities.sort(function(aw, av) {
                return aw.index - av.index
            })
        }
        function T(aw, av) {
            z.setAttribute("dir", av)
        }
        q("input focused before init: " + (m === document.activeElement));
        if (m === document.activeElement) {
            H()
        }
        YEvent.on(m, "focus", H, w);
        YEvent.on(m, "keydown", Z, w);
        if (ag&&!K) {
            YEvent.on(window, "load", function() {
                A = aa.inputCallout;
                function aw(ax) {
                    if (ax.target.className === "hopscotch-bubble-close" && Y$(".mentions-share-box-promo-content", Y$(".hopscotch-bubble-container")[0], true)) {
                        window.oUISettings.saveSettings(this.uiSetting, 3)
                    }
                }
                function av() {
                    if (!K) {
                        return
                    }
                    K.open();
                    window.oUISettings.saveSettings(A.uiSetting, ++G);
                    YEvent.on(Y$(".hopscotch-bubble-container")[0], "click", aw, A, true)
                }
                aq = Y$("#" + A.contentID, document, true);
                if (aq && LI.HopscotchCallout) {
                    K = new LI.HopscotchCallout(m, {
                        id: A.contentID,
                        orientation: "bottom",
                        showOn: false,
                        xOffset: A.offsetX,
                        yOffset: A.offsetY,
                        width: A.width,
                        title: "",
                        content: aq.innerHTML
                    })
                }
                if (L && L <= 7) {
                    window.setTimeout(av, 500)
                } else {
                    av()
                }
            })
        }
        this.adjustMentions = ad
    };
    LI.MentionsDecorator.highlight = function(q, l, k) {
        var o = l, x, v, w, n, r, t, s, u, p = [], m = 0;
        if (o && o.length && o !== "[]") {
            o = YJson.parse(o);
            x = o.length;
            o = o.sort(function(z, y) {
                return y.index - z.index
            });
            while (x--) {
                n = o[x];
                s = n.index;
                w = n.length;
                v = s + w;
                u = q.substr(s, w);
                r = n.mini || "";
                t = n.profile || "";
                if (s) {
                    p.push(LI.htmlEncode(q.substr(m, (s - m))))
                }
                if (t) {
                    if (r) {
                        if (k) {
                            p.push(['<span class="miniprofile-container ', n.mini, '">', '<a href="', n.profile, '" class="mention">', LI.htmlEncode(u), "</a></span>"].join(""))
                        } else {
                            p.push(['<span class="new-miniprofile-container ', n.mini, '" data-li-url="', n.mini, '" data-li-tl="tl/shared/profile/mini_profile_shell">', '<a href="', n.profile, '" class="mention">', LI.htmlEncode(u), "</a></span>"].join(""))
                        }
                    } else {
                        p.push(['<a href="', n.profile, '" class="mention">', LI.htmlEncode(u), "</a>"].join(""))
                    }
                } else {
                    p.push(LI.htmlEncode(u))
                }
                if (!x) {
                    p.push(LI.htmlEncode(q.substr(v)))
                }
                m = v
            }
            p = p.join("")
        } else {
            p = LI.htmlEncode(q)
        }
        return p
    };
    function e(m, k) {
        var l;
        if (m.setSelectionRange) {
            m.setSelectionRange(k, k)
        } else {
            if (m.createTextRange) {
                l = m.createTextRange();
                l.collapse(true);
                l.moveEnd(a, k);
                l.moveStart(a, k);
                l.select()
            }
        }
    }
}());
LI.define("SimilarMentionedInCompanies");
LI.SimilarMentionedInCompanies = LI.BaseControl.extend(function(d) {
    var a = 0, b = 80, c = 500;
    return {
        attachEventListeners: function() {
            this._$el.on("click", ".like, .post-comment, .share-source, .title, .image", this.showSimilarMentionedInCompanies)
        },
        showSimilarMentionedInCompanies: function(k) {
            var j, f, i, g, h = this;
            a++;
            if ((a%3) === 1) {
                j = $(k.target).closest(".linkedin-mentionedIn:not(.digested)");
                if (j.length) {
                    f = j.find(".similar-companies");
                    i = JSON.parse(j.attr("data-config"));
                    g = i.mid;
                    if (!f.length) {
                        $.ajax({
                            type: "GET",
                            url: h._config.url + "&companyId=" + encodeURIComponent(g),
                            dataType: "json"
                        }).done(function(l) {
                            var e = l.content;
                            if (e && e.biz_similar_companies && e.biz_similar_companies.count) {
                                dust.render("tl/apps/home/embed/biz_similar_mentioned_in_companies", e, function(o, n) {
                                    var p = j.find(".feed-body"), m = $(n).hide();
                                    p.append(m);
                                    LI.Controls.parseFragment(m);
                                    $("html, body").animate({
                                        scrollTop: j.offset().top - b
                                    }, c, function() {
                                        m.slideDown()
                                    })
                                })
                            }
                        })
                    }
                }
            }
        }
    }
});
(function() {
    dust.register("tl/apps/home/embed/biz_similar_mentioned_in_companies", e);
    function e(h, g) {
        return h.section(g.get("biz_similar_companies"), g, {
            "block": d
        }, null)
    }
    function d(h, g) {
        return h.write('<div class="similar-companies"><span>').reference(g.get("i18n_follow_more_companies"), g, "h", ["s"]).write("</span><ul>").section(g.get("companies"), g, {
            "block": c
        }, null).write("</ul>").helper("jsControl", g, {
            "block": f
        }, {
            "name": "FollowToggler"
        }).write("</div>")
    }
    function c(h, g) {
        return h.write('<li><div class="entityblock"><a href="').reference(g.get("company_link"), g, "h").write('">').exists(g.get("logoId"), g, {
            "else": b,
            "block": a
        }, null).write('</a><div class="body"><a href="').reference(g.get("company_link"), g, "h").write('"><h3 class="name">').reference(g.get("companyName"), g, "h").write('<span class="a11y-headline">').reference(g.get("ind_lookup"), g, "h").write('</span></h3></a><p class="headline">').reference(g.get("ind_lookup"), g, "h").write('</p><div class="follow-container follow-lnk unfollow-allowed"><a role="button" class="action-follow" href="').reference(g.get("follow_link"), g, "h").write('">').reference(g.get("i18n_follow"), g, "h", ["s"]).write('</a><a role="button" class="action-unfollow" href="').reference(g.get("unfollow_link"), g, "h").write('">').reference(g.get("i18n_unfollow"), g, "h", ["s"]).write('</a><a role="button" class="following">').reference(g.get("i18n_following"), g, "h", ["s"]).write("</a></div></div></div></li>")
    }
    function b(h, g) {
        return h.write('<img class="image" width="60" height="60" src="').reference(g.get("ghostImage60"), g, "h", ["s"]).write('" alt="').reference(g.get("companyName"), g, "h").write('"/>')
    }
    function a(h, g) {
        return h.write('<img class="image" width="60" height="60" src="').reference(g.get("company_logo_link"), g, "h", ["s"]).write('" alt="').reference(g.get("companyName"), g, "h").write('"/>')
    }
    function f(h, g) {
        return h.write("{toggleContainerClass: 'follow-container',toggleClass: 'is-following'}")
    }
    return e
})();
(function() {
    dust.register("biz_similar_mentioned_in_companies", dust.cache["tl/apps/home/embed/biz_similar_mentioned_in_companies"])
})();
