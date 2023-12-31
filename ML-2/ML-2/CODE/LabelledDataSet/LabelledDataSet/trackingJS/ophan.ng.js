(function() {
    var n = {}.hasOwnProperty;
    define("ophan/transmit", [], function() {
        var e, t, o, i, r;
        return r = "xxxxxxxxxxxxxxx".replace(/x/g, function() {
            return Math.floor(36 * Math.random()).toString(36)
        }), o = function(n) {
            return t("//ophan.theguardian.com/i.gif?" + e(n))
        }, i = function(e) {
            var o, i, a;
            return JSON ? (a = function() {
                var t;
                t = [];
                for (o in e)
                    n.call(e, o) && (i = e[o], null != i && t.push("" + encodeURIComponent(o) + "=" + encodeURIComponent(JSON.stringify(i))));
                return t
            }(), t("//ophan.theguardian.com/a.gif?viewId=" + r + "&" + a.join("&"))) : void 0
        }, e = function(e) {
            var t, o, i;
            return e.viewId = r, i = function() {
                var i;
                i = [];
                for (t in e)
                    n.call(e, t) && (o = e[t], null != o && i.push("" + encodeURIComponent(t) + "=" + encodeURIComponent(o)));
                return i
            }(), i.join("&")
        }, t = function(n) {
            var e;
            return e = new Image, e.src = n
        }, {
            sendInitial: o,
            sendMore: i,
            viewId: r
        }
    })
}).call(this), function() {
    define("ophan/visibility", [], function() {
        return {
            state: function() {
                return document.visibilityState || document.webkitVisibilityState || document.mozVisibilityState || document.msVisibilityState
            },
            changeEvent: document.visibilityState ? "visibilitychange": document.webkitVisibilityState ? "webkitvisibilitychange": document.mozVisibilityState ? "mozvisibilitychange": document.msVisibilityState ? "msvisibilitychange": void 0
        }
    })
}.call(this), function() {
    var n = {}.hasOwnProperty;
    define("ophan/core", ["ophan/transmit", "ophan/visibility"], function(e, t) {
        var o, i, r, a, u, d, l, c, f, s, v, p, m, g, h;
        return o = 14, c = window.document, l = null != window.localStorage && "undefined" != typeof JSON && null !== JSON, m = null, s = function(n, e) {
            return m = n, "prerender" !== t.state() ? g(e) : t.changeEvent ? c.addEventListener(t.changeEvent, function() {
                return "visible" === t.state() ? g(e) : void 0
            }, !1) : void 0
        }, g = function(n) {
            var i;
            return i = {
                v: o,
                platform: m,
                url: location.href,
                ref: c.referrer,
                visibilityState: t.state(),
                isModernBrowser: "undefined" != typeof guardian && null !== guardian ? guardian.isModernBrowser: void 0,
                httpStatus: n,
                tz: (new Date).getTimezoneOffset()
            }, u(i), d(i), "next-gen" === m && a(i), r(i), e.sendInitial(i)
        }, p = [], f=!1, v = function(n) {
            var t, o, r, a;
            if ("complete" === document.readyState) {
                r = {}, t = n();
                for (o in t)
                    a = t[o], r[o] = a;
                return e.sendMore(r), i()
            }
            return p.push(n)
        }, i = function() {
            var n;
            return "undefined" == typeof localStorage || null === localStorage || f || (f=!0, n = window.location.search.replace(/^(?:.*[&\?]heatmap(?:\=([^&]*))?)?.*$/, "$1"), ("true" === n || "false" === n) && (localStorage.ophan_heatmap = n), "true" !== localStorage.ophan_heatmap && "show" !== n) ? void 0 : c.body.appendChild(c.createElement("script")).src = "//dashboard.ophan.co.uk/assets/js/heatmap-bookmarklet.js"
        }, "function" == typeof window.addEventListener && window.addEventListener("load", function() {
            var n, t, o, r, a, u, d;
            for (r = {}, u = 0, d = p.length; d > u; u++) {
                n = p[u], t = n();
                for (o in t)
                    a = t[o], r[o] = a
            }
            return e.sendMore(r), i()
        }, !1), d = function(e) {
            var t, o, i;
            if (l) {
                if (o = JSON.parse(window.localStorage.getItem("ophan_follow")), null != o)
                    for (t in o)
                        n.call(o, t) && (i = o[t], e[t] = i);
                return window.localStorage.removeItem("ophan_follow")
            }
        }, a = function(n) {
            var e, t, o, i, r, a, u;
            if (e = function() {
                var n, e, o, i;
                for (o = document.querySelectorAll("[data-component]"), i = [], n = 0, e = o.length; e > n; n++)
                    t = o[n], i.push(t.getAttribute("data-component"));
                return i
            }(), e.length > 0) {
                for (i = {}, a = 0, u = e.length; u > a; a++)
                    t = e[a], i[t] = 1;
                return n.renderedComponents = function() {
                    var n;
                    n = [];
                    for (o in i)
                        r = i[o], n.push(o);
                    return n
                }()
            }
        }, h = function(e) {
            var t, o, i;
            if (l) {
                t = JSON.parse(window.localStorage.getItem("ophan_follow")) || {};
                for (o in e)
                    n.call(e, o) && (i = e[o], t[o] = i);
                return window.localStorage.setItem("ophan_follow", JSON.stringify(t))
            }
        }, u = function(n) {
            var e, t, o, i;
            return e = "next-gen" === m ? "undefined" != typeof guardian && null !== guardian && null != (t = guardian.config) && null != (o = t.page) ? o.contentType : void 0 : "undefined" != typeof guardian && null !== guardian && null != (i = guardian.page) ? i.contentTypes : void 0, null != e && "" !== e ? n.contentType = e.toLowerCase() : void 0
        }, r = function(n) {
            var e, t;
            return e = c.createElement("div"), t = c.createAttribute("class"), t.value = "ad_unit", e.setAttributeNode(t), c.body.appendChild(e), null != window.getComputedStyle && (n.adUnitWasHidden = "none" === window.getComputedStyle(e).display), c.body.removeChild(e)
        }, {
            init: s,
            storeDataToSendOnNextEvent: h,
            onLoadCapture: v,
            servingPlatform: function() {
                return m
            },
            viewId: e.viewId
        }
    })
}.call(this), function() {
    define("ophan/attention", ["ophan/visibility", "ophan/transmit"], function(n, e) {
        var t, o, i, r, a, u, d, l, c, f, s, v, p, m;
        return t = 5e3, o = ["focus", "click", "scroll", "mousemove", "touchstart", "touchend", "touchcancel", "touchleave", "touchmove", "keyup", "keydown"], i = 1e4, v = 0, p = null, f = 0, a = null, m=!1, r = function() {
            return null != a && window.clearTimeout(a), a = null
        }, l = function() {
            return null == p && (p = new Date), r(), a = window.setTimeout(function() {
                return m ? void 0 : c()
            }, t)
        }, u = function() {
            var n, e;
            return null != p ? (n = new Date, e = Math.min(n.getTime() - p.getTime(), i), v += e, p = n) : void 0
        }, c = function() {
            return r(), u(), p = null
        }, s = function() {
            return u(), v !== f ? (e.sendMore({
                attentionMs: v
            }), f = v) : void 0
        }, d = function() {
            var e, t, r, a, u, d, f;
            for (r = 0, u = o.length; u > r; r++)
                e = o[r], window.addEventListener(e, l);
            if (document.addEventListener(n.changeEvent, function() {
                return "visible" === n.state() ? l() : c()
            }, !1), null != document.querySelectorAll)
                for (f = document.getElementsByTagName("video"), a = 0, d = f.length; d > a; a++)
                    t = f[a], t.addEventListener("playing", function() {
                        return m=!0, l()
                    }), t.addEventListener("ended", function() {
                        return m=!1, c()
                    }), t.addEventListener("pause", function() {
                        return m=!1, c()
                    });
            return window.setInterval(s, i)
        }, {
            init: d
        }
    })
}.call(this), function() {
    define("ophan/click-path-capture", ["ophan/core"], function(n) {
        var e, t, o;
        return o = function(n) {
            var e, t;
            return e = null != n && null != (t = n.nodeName) ? t.toLowerCase() : void 0, "a" === e ? n : null == e || "body" === e ? null : o(n.parentNode)
        }, e = function(n) {
            var t, o;
            return t = null != n && null != (o = n.nodeName) ? o.toLowerCase() : void 0, null == t || "body" === t ? null : ("function" == typeof n.getAttribute ? n.getAttribute("data-component") : void 0) || e(n.parentNode)
        }, t = function(e) {
            var t, o, i;
            return o = function() {
                return "next-gen" === n.servingPlatform()
            }, t = function(n) {
                var e;
                return (null != n && null != (e = n.nodeName) ? e.toLowerCase() : void 0) === document.body.nodeName.toLowerCase()
            }, i = function(n, e) {
                var o;
                return t(n) ? e : (o = n.getAttribute("data-link-name"), null != o && e.push(o), i(n.parentNode, e))
            }, o() ? i(e, []) : ""
        }, "function" == typeof document.addEventListener ? document.addEventListener("click", function(i) {
            var r, a;
            return a = o(i.target), r = {
                from: [location.protocol, "//", location.host, location.pathname].join(""),
                to: a ? a.href: void 0,
                referringComponent: e(i.target),
                referringDataLinkNames: t(i.target),
                refPlatform: n.servingPlatform(),
                refViewId: n.viewId
            }, n.storeDataToSendOnNextEvent(r)
        }, !1) : void 0
    })
}.call(this), function() {
    define("ophan/perf", ["ophan/core"], function(n) {
        var e;
        return e = function() {
            var n, e;
            return n = window.performance || window.msPerformance || window.webkitPerformance || window.mozPerformance, e = null != n ? n.timing : void 0, null != e ? {
                performance: {
                    dns: e.domainLookupEnd - e.domainLookupStart,
                    connection: e.connectEnd - e.connectStart,
                    firstByte: e.responseStart - e.connectEnd,
                    lastByte: e.responseEnd - e.responseStart,
                    domContentLoadedEvent: e.domContentLoadedEventStart - e.responseEnd,
                    loadEvent: e.loadEventStart - e.domContentLoadedEventStart,
                    navType: n.navigation.type,
                    redirectCount: n.navigation.redirectCount
                }
            } : {}
        }, n.onLoadCapture(e), {}
    })
}.call(this), function() {
    define("ophan/campaign", ["ophan/transmit"], function(n) {
        return "undefined" != typeof googletag && null !== googletag ? googletag.cmd.push(function() {
            var e;
            return e = (new Date).getTime(), googletag.pubads().addEventListener("slotRenderEnded", function(t) {
                return n.sendMore({
                    ads: [{
                        slot: t.slot.getSlotId().getDomId(),
                        campaignId: t.isEmpty ? "__empty__": t.lineItemId,
                        creativeId: t.creativeId,
                        timeToRenderEnded: (new Date).getTime() - e,
                        adServer: "DFP"
                    }
                    ]
                })
            })
        }) : void 0
    })
}.call(this), function() {
    define("ophan/ng", ["ophan/core", "ophan/transmit", "ophan/attention", "ophan/click-path-capture", "ophan/perf", "ophan/campaign"], function(n, e, t) {
        return n.init("next-gen"), null != window.addEventListener && t.init(), {
            record: e.sendMore,
            viewId: e.viewId
        }
    })
}.call(this);
//# sourceMappingURL=ophan.ng.js.map
