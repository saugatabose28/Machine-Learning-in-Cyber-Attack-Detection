/*!
 * Copyright (c) 2011, Yahoo! Inc.  All rights reserved.
 * Copyright (c) 2012, Log-Normal, Inc.  All rights reserved.
 * Copyrights licensed under the BSD License. See the accompanying license file at http://static-src.linkedin.com/scds/common/u/html/license/boomerang.txt for terms.
 */
BOOMR_start = (new Date).getTime(), function(e) {
    var n, i, t, r = e.document;
    if ("undefined" == typeof BOOMR && (BOOMR = {}), !BOOMR.version) {
        BOOMR.version = "0.9", n = {
            beacon_url: "",
            site_domain: e.location.hostname.replace(/.*?([^.]+\.[^.]+)\.?$/, "$1").toLowerCase(),
            user_ip: "",
            events: {
                page_ready: [],
                page_unload: [],
                dom_loaded: [],
                visibility_changed: [],
                before_beacon: []
            },
            vars: {},
            disabled_plugins: {},
            fireEvent: function(e, n) {
                var i, t, r;
                if (!this.events.hasOwnProperty(e))
                    return !1;
                for (r = this.events[e], i = 0; r.length > i; i++)
                    t = r[i], t[0].call(t[2], n, t[1]);
                return !0
            },
            addListener: function(e, n, i) {
                e.addEventListener ? e.addEventListener(n, i, !1) : e.attachEvent && e.attachEvent("on" + n, i)
            }
        }, i = {
            t_start: BOOMR_start,
            t_end: null,
            utils: {
                getCookie: function(e) {
                    if (!e)
                        return null;
                    e = " " + e + "=";
                    var n, i;
                    return i = " " + r.cookie + ";", (n = i.indexOf(e)) >= 0 ? (n += e.length, i = i.substring(n, i.indexOf(";", n))) : null
                },
                setCookie: function(e, i, t) {
                    var o, s, a, u, l = [];
                    if (!e)
                        return !1;
                    for (o in i)
                        i.hasOwnProperty(o) && l.push(encodeURIComponent(o) + "=" + encodeURIComponent(i[o]));
                    return l = l.join("&"), s = e + "=" + l, a = [s, "path=/", "domain=" + n.site_domain], t && (u = new Date, u.setTime(u.getTime() + 1e3 * t), u = u.toGMTString(), a.push("expires=" + u)), 4e3 > s.length ? (r.cookie = a.join("; "), l === this.getCookie(e)) : !1
                },
                getSubCookies: function(e) {
                    var n, i, t, r, o = {};
                    if (!e)
                        return null;
                    if (n = e.split("&"), 0 === n.length)
                        return null;
                    for (i = 0, t = n.length; t > i; i++)
                        r = n[i].split("="), r.push(""), o[decodeURIComponent(r[0])] = decodeURIComponent(r[1]);
                    return o
                },
                removeCookie: function(e) {
                    return this.setCookie(e, {}, 0)
                },
                pluginConfig: function(e, n, i, t) {
                    var r, o = 0;
                    if (!n ||!n[i])
                        return !1;
                    for (r = 0; t.length > r; r++)
                        n[i][t[r]] !== void 0 && (e[t[r]] = n[i][t[r]], o++);
                    return o > 0
                }
            },
            init: function(i) {
                var t, o, s = ["beacon_url", "site_domain", "user_ip"];
                for (i || (i = {}), t = 0; s.length > t; t++)
                    i[s[t]] !== void 0 && (n[s[t]] = i[s[t]]);
                i.log !== void 0 && (this.log = i.log), this.log || (this.log = function() {});
                for (o in this.plugins)
                    i[o] && "enabled"in i[o] && i[o].enabled===!1 ? n.disabled_plugins[o] = 1 : (n.disabled_plugins[o] && delete n.disabled_plugins[o], this.plugins.hasOwnProperty(o) && "function" == typeof this.plugins[o].init && this.plugins[o].init(i));
                "autorun"in i && i.autorun===!1 || ("onpagehide"in e ? n.addListener(e, "pageshow", BOOMR.page_ready) : n.addListener(e, "load", BOOMR.page_ready)), n.addListener(e, "DOMContentLoaded", function() {
                    n.fireEvent("dom_loaded")
                });
                var a = function() {
                    n.fireEvent("visibility_changed")
                };
                return r.webkitVisibilityState ? n.addListener(r, "webkitvisibilitychange", a) : r.msVisibilityState ? n.addListener(r, "msvisibilitychange", a) : r.visibilityState && n.addListener(r, "visibilitychange", a), "onpagehide"in e || n.addListener(e, "unload", function() {
                    e = null
                }), this
            },
            page_ready: function() {
                return n.fireEvent("page_ready"), this
            },
            subscribe: function(i, t, r, o) {
                var s, a, u;
                if (!n.events.hasOwnProperty(i))
                    return this;
                for (u = n.events[i], s = 0; u.length > s; s++)
                    if (a = u[s], a[0] === t && a[1] === r && a[2] === o)
                        return this;
                if (u.push([t, r || {}, o || null]), "page_unload" === i) {
                    var l = function() {
                        t && t.call(o, null, r), t = o = r = null
                    };
                    "onpagehide"in e ? n.addListener(e, "pagehide", l) : (n.addListener(e, "unload", l), n.addListener(e, "beforeunload", l))
                }
                return this
            },
            addVar: function(e, i) {
                if ("string" == typeof e)
                    n.vars[e] = i;
                else if ("object" == typeof e) {
                    var t, r = e;
                    for (t in r)
                        r.hasOwnProperty(t) && (n.vars[t] = r[t])
                }
                return this
            },
            removeVar: function() {
                var e, i;
                if (!arguments.length)
                    return this;
                for (i = 1 === arguments.length && "[object Array]" === Object.prototype.toString.apply(arguments[0]) ? arguments[0] : arguments, e = 0; i.length > e; e++)
                    n.vars.hasOwnProperty(i[e]) && delete n.vars[i[e]];
                return this
            },
            sendBeacon: function() {
                var e, i, t, o = 0;
                for (e in this.plugins)
                    if (this.plugins.hasOwnProperty(e)) {
                        if (n.disabled_plugins[e])
                            continue;
                            if (!this.plugins[e].is_complete())
                                return this
                    }
                if (n.vars.v = BOOMR.version, n.vars.u = r.URL.replace(/#.*/, ""), n.fireEvent("before_beacon", n.vars), !n.beacon_url)
                    return this;
                i = n.beacon_url + (n.beacon_url.indexOf("?")>-1 ? "&" : "?");
                for (e in n.vars)
                    n.vars.hasOwnProperty(e) && (o++, i += "&" + encodeURIComponent(e) + "=" + (void 0 === n.vars[e] || null === n.vars[e] ? "" : encodeURIComponent(n.vars[e])));
                return o && (t = new Image, t.src = i), this
            }
        }, delete BOOMR_start;
        var o = function(e) {
            return function(n, i) {
                return this.log(n, e, "boomerang" + (i ? "." + i : "")), this
            }
        };
        i.debug = o("debug"), i.info = o("info"), i.warn = o("warn"), i.error = o("error"), e.YAHOO && e.YAHOO.widget && e.YAHOO.widget.Logger ? i.log = e.YAHOO.log : e.Y !== void 0 && e.Y.log !== void 0 ? i.log = e.Y.log : "undefined" != typeof console && console.log !== void 0 && (i.log = function(e, n, i) {
            console.log(i + ": [" + n + "] " + e)
        });
        for (t in i)
            i.hasOwnProperty(t) && (BOOMR[t] = i[t]);
        BOOMR.plugins = BOOMR.plugins || {}
    }
}(window);
(function(t) {
    var e = t.document;
    BOOMR = BOOMR || {}, BOOMR.plugins = BOOMR.plugins || {};
    var n = {
        complete: !1,
        timers: {},
        cookie: "RT",
        cookie_exp: 600,
        strict_referrer: !0,
        navigationType: 0,
        navigationStart: void 0,
        responseStart: void 0,
        t_start: void 0,
        r: void 0,
        r2: void 0,
        setCookie: function() {
            var t,
            n = (new Date).getTime();
            return this.cookie ? BOOMR.utils.setCookie(this.cookie,
            {
                s: n,
                r: e.URL.replace(/#.*/,
                "")
            }, this.cookie_exp) ? (t = (new Date).getTime(), t - n > 50 && (BOOMR.utils.removeCookie(this.cookie), BOOMR.error("took more than 50ms to set cookie... aborting: " + n + " -> " + t, "rt")), this) : (BOOMR.error("cannot set start cookie", "rt"), this) : this
        }, initFromCookie : function() {
            var t;
            this.r = this.r2 = e.referrer.replace(/#.*/, ""), this.cookie && (t = BOOMR.utils.getSubCookies(BOOMR.utils.getCookie(this.cookie)), t && t.s && t.r && (this.r = t.r, this.strict_referrer && this.r !== this.r2 || (this.t_start = parseInt(t.s, 10))))
        }, checkPreRender: function() {
            return e.webkitVisibilityState && "prerender" === e.webkitVisibilityState || e.msVisibilityState && 3 === e.msVisibilityState ? (BOOMR.plugins.RT.startTimer("t_load", this.navigationStart), BOOMR.plugins.RT.endTimer("t_load"), BOOMR.plugins.RT.startTimer("t_prerender", this.navigationStart), BOOMR.plugins.RT.startTimer("t_postrender"), BOOMR.subscribe("visibility_changed", BOOMR.plugins.RT.done, null, BOOMR.plugins.RT), !0) : !1
        }, initNavTiming: function() {
            var e, n, i;
            this.navigationStart || (n = t.performance || t.msPerformance || t.webkitPerformance || t.mozPerformance, n && n.navigation && (this.navigationType = n.navigation.type), n && n.timing ? e = n.timing : t.chrome && t.chrome.csi && t.chrome.csi().startE ? (e = {
                navigationStart: t.chrome.csi().startE
            }, i = "csi") : t.gtbExternal && t.gtbExternal.startE() && (e = {
                navigationStart: t.gtbExternal.startE()
            }, i = "gtb"), e ? (BOOMR.addVar("rt.start", i || "navigation"), this.navigationStart = e.navigationStart || e.fetchStart || void 0, this.responseStart = e.responseStart || void 0, navigator.userAgent.match(/Firefox\/[78]\./) && (this.navigationStart = e.unloadEventStart || e.fetchStart || void 0)) : BOOMR.warn("This browser doesn't support the WebTiming API", "rt"))
        }, domloaded: function() {
            BOOMR.plugins.RT.endTimer("t_domloaded")
        }
    };
    BOOMR.plugins.RT = {
        init: function(t) {
            return BOOMR.utils.pluginConfig(n, t, "RT", ["cookie", "cookie_exp", "strict_referrer"]), n.complete ? this : (n.complete=!1, n.timers = {}, BOOMR.subscribe("page_ready", this.done, null, this), BOOMR.subscribe("dom_loaded", n.domloaded, null, n), BOOMR.subscribe("page_unload", n.setCookie, null, n), BOOMR.t_start && (this.startTimer("boomerang", BOOMR.t_start), this.endTimer("boomerang", BOOMR.t_end), this.endTimer("boomr_fb", BOOMR.t_start)), this)
        },
        startTimer: function(t, e) {
            return t && ("t_page" === t && this.endTimer("t_resp", e), n.timers[t] = {
                start: "number" == typeof e ? e: (new Date).getTime()
            }, n.complete=!1), this
        },
        endTimer: function(t, e) {
            return t && (n.timers[t] = n.timers[t] || {}, "end"in n.timers[t] || (n.timers[t].end = "number" == typeof e ? e : (new Date).getTime())), this
        },
        setTimer: function(t, e) {
            return t && (n.timers[t] = {
                delta: e
            }), this
        },
        done: function() {
            var t, e, i, r = (new Date).getTime(), o = {
                t_done: 1,
                t_resp: 1,
                t_page: 1
            }, s = 0, a = [];
            if (n.complete=!1, n.initNavTiming(), n.checkPreRender())
                return this;
            n.responseStart ? (this.endTimer("t_resp", n.responseStart), n.timers.t_load ? this.setTimer("t_page", n.timers.t_load.end - n.responseStart) : this.setTimer("t_page", r - n.responseStart)) : n.timers.hasOwnProperty("t_page") && this.endTimer("t_page"), n.timers.hasOwnProperty("t_postrender") && (this.endTimer("t_postrender"), this.endTimer("t_prerender")), n.navigationStart ? t = n.navigationStart : n.t_start && 2 !== n.navigationType ? (t = n.t_start, BOOMR.addVar("rt.start", "cookie")) : (BOOMR.addVar("rt.start", "none"), t = void 0), n.initFromCookie(), this.endTimer("t_done", r), BOOMR.removeVar("t_done", "t_page", "t_resp", "r", "r2", "rt.tstart", "rt.bstart", "rt.end", "t_postrender", "t_prerender", "t_load"), BOOMR.addVar("rt.tstart", t), BOOMR.addVar("rt.bstart", BOOMR.t_start), BOOMR.addVar("rt.end", n.timers.t_done.end);
            for (e in n.timers)
                n.timers.hasOwnProperty(e) && (i = n.timers[e], "number" != typeof i.delta && ("number" != typeof i.start && (i.start = t), i.delta = i.end - i.start), isNaN(i.delta) || (o.hasOwnProperty(e) ? BOOMR.addVar(e, i.delta) : a.push(e + "|" + i.delta), s++));
            return s && (BOOMR.addVar("r", n.r), n.r2 !== n.r && BOOMR.addVar("r2", n.r2), a.length && BOOMR.addVar("t_other", a.join(","))), n.timers = {}, n.complete=!0, BOOMR.sendBeacon(), this
        },
        is_complete: function() {
            return n.complete
        }
    }
})(window);
(function(t) {
    BOOMR = BOOMR || {}, BOOMR.plugins = BOOMR.plugins || {};
    var e = {
        complete: !1,
        done: function() {
            var e, n, i, r;
            e = t.performance || t.msPerformance || t.webkitPerformance || t.mozPerformance, e && e.timing && e.navigation && (BOOMR.info("This user agent supports NavigationTiming.", "nt"), n = t.performance.navigation, i = t.performance.timing, r = {
                nt_red_cnt: n.redirectCount,
                nt_nav_type: n.type,
                nt_nav_st: i.navigationStart,
                nt_red_st: i.redirectStart,
                nt_red_end: i.redirectEnd,
                nt_fet_st: i.fetchStart,
                nt_dns_st: i.domainLookupStart,
                nt_dns_end: i.domainLookupEnd,
                nt_con_st: i.connectStart,
                nt_con_end: i.connectEnd,
                nt_req_st: i.requestStart,
                nt_res_st: i.responseStart,
                nt_res_end: i.responseEnd,
                nt_domloading: i.domLoading,
                nt_domint: i.domInteractive,
                nt_domcontloaded_st: i.domContentLoadedEventStart,
                nt_domcontloaded_end: i.domContentLoadedEventEnd,
                nt_domcomp: i.domComplete,
                nt_load_st: i.loadEventStart,
                nt_load_end: i.loadEventEnd,
                nt_unload_st: i.unloadEventStart,
                nt_unload_end: i.unloadEventEnd
            }, i.secureConnectionStart && (r.nt_ssl_st = i.secureConnectionStart), BOOMR.addVar(r)), this.complete=!0, BOOMR.sendBeacon()
        }
    };
    BOOMR.plugins.NavigationTiming = {
        init: function() {
            return BOOMR.subscribe("page_ready", e.done, null, e), this
        },
        is_complete: function() {
            return e.complete
        }
    }
})(window);
var BOOMR = BOOMR || {};
BOOMR.plugins = BOOMR.plugins || {}, BOOMR.plugins.RS_TIMING = function(e) {
    "use strict";
    var n = e.BOOMR, t = {
        complete: !1,
        rsSupported: !1,
        rsTiming: {}
    }, i = {
        "static.licdn.com": [["/scds/common/u/images", "aa"], ["/scds/common/u/img", "ab"], ["/scds/common/u", "ac"], ["/scds/concat/common", "ad"], ["static.licdn.com", "ae"]],
        "media.licdn.com": [["/mpr/mpr/shrink", "af"], ["/mpr/mpr", "ag"], ["/media/p", "ah"], ["/media-proxy/ext", "ai"], ["media.licdn.com", "aj"]],
        "s.c.lnkd.licdn.com": [["/scds/common/u/images", "ak"], ["/scds/common/u/img", "al"], ["/scds/common/u", "am"], ["/scds/concat/common", "an"], ["s.c.lnkd.licdn.com", "ao"]],
        "m.c.licdn.com": [["/mpr/mpr/shrink", "ap"], ["/mpr/mpr", "aq"], ["/media/p", "ar"], ["/media-proxy/ext", "as"], ["m.c.licdn.com", "at"]],
        "image-store.slidesharecdn.com": [["image-store.slidesharecdn.com", "au"]],
        "www.linkedin.com": [["/common", "av"], ["/chrome", "aw"], ["www.linkedin.com", "ax"]],
        "cdn.doubleverify.com": [["cdn.doubleverify.com", "ay"]],
        "cdn3.doubleverify.com": [["cdn3.doubleverify.com", "az"]],
        "ad.doubleclick.net": [["ad.doubleclick.net", "ba"]]
    };
    return {
        getRsTiming: function() {
            var n = e.location, t = n.protocol, i = "https:" === t ? "media.licdn.com": "m.c.lnkd.licdn.com", o = "https:" === t ? "media.licdn-ei.com": "m.c.lnkd.licdn-ei.com", s = "www.linkedin.com" === n.host ? i: o;
            this.checkForKeysFunction(), this.getTimingDetails(s), this.done()
        },
        checkForKeysFunction: function() {
            Object.keys || (Object.keys = function(e) {
                if (e !== Object(e))
                    throw new TypeError("Object.keys called on a non-object");
                var n, t = [];
                for (n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                return t
            })
        },
        getTimingDetails: function(e) {
            var n, i, o, s = 0, c = 0, a = 0, r = 0, d = 0, m = 0, l = 0, u = 0, p = 0, h = 0, g = 0, f = 0;
            try {
                n = window.performance.getEntriesByType("resource"), t.rsSupported=!0
            } catch (O) {
                t.rsSupported=!1
            }
            if (t.rsSupported!==!1) {
                for (i = n.length, o = 0; i > o; o++)
                    this.getIndividualEntries && t.rsEntries.push(this.formatResourceTimings(n[o])), g = n[o].responseEnd - n[o].startTime, 0 >= g || (f = n[o].domainLookupEnd - n[o].domainLookupStart, "img" === n[o].initiatorType || "css" === n[o].initiatorType?-1 !== n[o].name.indexOf(e) ? (l += g, u++, f > 0 && (h = f)) : (d += g, m++, f > 0 && (p = f)) : "script" === n[o].initiatorType ? (s += g, c++, f > 0 && (p = f)) : "link" === n[o].initiatorType && (a += g, r++, f > 0 && (p = f)));
                u > 0 && (l = Math.floor(l / u)), m > 0 && (d = Math.floor(d / m)), c > 0 && (s = Math.floor(s / c)), r > 0 && (a = Math.floor(a / r)), p > 0 && (p = Math.floor(p)), h > 0 && (h = Math.floor(h)), t.rsTiming.jsTime = s, t.rsTiming.jsCount = c, t.rsTiming.cssTime = a, t.rsTiming.cssCount = r, t.rsTiming.sImgTime = d, t.rsTiming.sImgCount = m, t.rsTiming.mImgTime = l, t.rsTiming.mImgCount = u, t.rsTiming.sDnsTime = p, t.rsTiming.mDnsTime = h
            }
        },
        formatResourceTimings: function(e) {
            var n = {
                start: Math.round(e.startTime),
                duration: Math.round(e.duration),
                mobilePageKey: e.initiatorType,
                url: this.truncateUrl(e.name)
            };
            return n
        },
        setupUrlMap: function() {
            var e, n, t, o = window.location, s = o.origin, c = s.indexOf("linkedin-ei")>-1, a = o.protocol.concat("//"), r = Object.keys(i), d = r.length;
            for (t = 0; d > t; t++)
                n = r[t], e = i[n], n = a.concat(n), c && (n = this.normalizeUrlKey(n)), delete i[r[t]], e[e.length - 1][0] = n, i[n] = e
        },
        normalizeUrlKey: function(e) {
            return e.indexOf("licdn")>-1 ? e = e.replace("licdn", "licdn-ei") : e.indexOf("linkedin.")>-1 && (e = e.replace("linkedin.", "linkedin-ei.")), e
        },
        truncateUrl: function(e) {
            var n, t, o, s, c, a, r = Object.keys(i), d = r.length;
            for (n = 0; d > n; n++)
                if (c = r[n], 0 === e.lastIndexOf(c, 0)) {
                    for (s = null, a = i[c], o = a.length, t = 0; o - 1 > t; t++)
                        if (e.indexOf(a[t][0])>-1) {
                            s = c + a[t][0];
                            break
                        }
                        return s || (s = c, t = a.length - 1), encodeURIComponent(e.replace(s, a[t][1]))
                }
            return encodeURIComponent(e)
        },
        init: function(i) {
            var o = Math.random(), s = e.LI.RUM.flags.rs_timings_individual, c = s ? parseInt(s.substring(1), 10): 0 / 0;
            this.getIndividualEntries = isNaN(c)?!1 : 1 / c > o, n.utils.pluginConfig(t, i, "RS_TIMING", []), this.getIndividualEntries && (this.setupUrlMap(), t.rsEntries = []), this.getRsTiming()
        },
        is_complete: function() {
            return t.complete
        },
        done: function() {
            t.complete || (t.complete=!0, n.addVar({
                rsTiming: t.rsSupported===!0 ? t.rsTiming: null
            }), this.getIndividualEntries && n.addVar({
                rsEntries: t.rsSupported===!0 ? t.rsEntries: null
            }), n.sendBeacon())
        }
    }
}(window);
var BOOMR = BOOMR || {};
BOOMR.plugins = BOOMR.plugins || {}, BOOMR.plugins.POP_ID = function(e) {
    "use strict";
    var t = e.BOOMR, n = "get", o = "/pop/admin", i = e.track.errors, s = i.codes.RUM_POP_ID_ERROR, c = {
        complete: !1,
        popId: ""
    };
    return {
        getPop: function() {
            function t(e) {
                c.popId = e.getResponseHeader("X-Li-Pop"), u.done()
            }
            function a(e, n, o) {
                i.push({
                    code: s,
                    message: o + " " + n,
                    unique: "Error in ajax request to get PoP info"
                }), t(e, o)
            }
            var r, u = this, d = e.location.host, p = e.location.protocol, l = p + "//" + d + o;
            l += (/\?/.test(l) ? "&" : "?") + (new Date).getTime();
            try {
                r = new XMLHttpRequest
            } catch (m) {
                throw Error("Cannot create XMLHttpRequest instance: " + m.message)
            }
            r && (r.onreadystatechange = function() {
                4 === this.readyState && (this.status >= 200 && 400 > this.status ? t(this, this.statusText) : a(this, this.status, this.statusText))
            }, r.open(n, l, !0), r.send())
        },
        init: function(e) {
            t.utils.pluginConfig(c, e, "POP_ID", []), this.getPop()
        },
        is_complete: function() {
            return c.complete
        },
        done: function() {
            c.complete || (c.complete=!0, t.addVar({
                popId: c.popId
            }), t.sendBeacon())
        }
    }
}(window);
var BOOMR = BOOMR || {};
BOOMR.plugins = BOOMR.plugins || {}, BOOMR.plugins.POP_BEACONS = function(e) {
    "use strict";
    var n, t = e.BOOMR, i = "get", o = "1", c = "2", a=!!document.all, s=!a||!!window.atob, r = a&&!!window.XDomainRequest, d = e.track.errors, p = d.codes.RUM_POP_BEACONS_ERROR, m = {
        ei: "www.linkedin-ei.com/pop/admin",
        la: "pop-ela4.perf.linkedin.com/pop/admin",
        va: "pop-lva1.perf.linkedin.com/pop/admin",
        tx: "pop-ltx1.perf.linkedin.com/pop/admin",
        sg: "pop-nsg7.perf.linkedin.com/pop/admin",
        db: "pop-idb2.perf.linkedin.com/pop/admin",
        hk: "pop-ehk2.perf.linkedin.com/pop/admin",
        ac: "ac.perf.linkedin.com/pop/admin",
        ap: "acpc.perf.linkedin.com/pop/admin"
    }, l = {
        mi1: "m.c.llnw-mia.licdn.com/cdo/rum/id",
        mi2: "media-llnw-mia.licdn.com/cdo/rum/id",
        gr1: "m.c.llnw-gru.licdn.com/cdo/rum/id",
        gr2: "media-llnw-gru.licdn.com/cdo/rum/id"
    }, u = {
        complete: !1,
        beaconLatencies: []
    };
    return {
        updateUrls: function() {
            for (var e in m)
                l[e + o] = m[e], l[e + c] = m[e]
        },
        getPopLatency: function(e, t) {
            for (n = e.length; e.length;) {
                var i = e.pop(), o = "ac.perf.linkedin.com/pop/admin" === i || "acpc.perf.linkedin.com/pop/admin" === i?!0 : !1;
                this.getDomainResponse(i, t, o)
            }
        },
        getDomainResponse: function(e, n, t) {
            function o(n) {
                var i = (new Date).getTime(), o = {
                    domain: e,
                    latency: i - f
                };
                t && (o.domain = "ac-" + n.getResponseHeader("X-Li-Pop")), u.beaconLatencies.push(o), h.checkDone()
            }
            function c(n, t, i) {
                var o = (new Date).getTime(), c = {
                    domain: e,
                    latency: o - f
                };
                u.beaconLatencies.push(c), "No Transport" !== i && "" !== i && d.push({
                    code: p,
                    message: i + " " + t,
                    unique: "Failed to fetch the pop admin object"
                }), h.checkDone()
            }
            function a() {
                c("", "", "")
            }
            var m, l, h = this, f = 0, g = n + "//" + e + "?" + (new Date).getTime();
            if (f = (new Date).getTime(), s) {
                try {
                    m = new XMLHttpRequest
                } catch (R) {
                    throw Error("Cannot create XMLHttpRequest instance: " + R.message)
                }
                m && (m.onreadystatechange = function() {
                    4 === this.readyState && (this.status >= 200 && 400 > this.status ? o(this) : c(this, this.status, this.statusText))
                }, m.open(i, g, !0), m.send())
            } else 
                r&&!t ? (l = new XDomainRequest, l.open(i, g), l.onload = function() {
                    o(l)
                }, l.onerror = a, l.send()) : a()
        },
        checkDone: function() {
            var e=--n;
            0 === e && this.done()
        },
        init: function(n) {
            var i = e.LI.RUM.flags.pop_beacons_frequency.split("-"), a = parseInt(i[0].substring(1)), s = [], r = e.location, d = r.protocol, p = "http:" === d ? o: c, m = (new Date).getTime();
            if (this.updateUrls(), 0 === m%a) {
                var h;
                if (1 >= i.length)
                    for (var f in l)
                        p === f.charAt(2) && (s[s.length] = l[f]);
                else 
                    for (h = 1; i.length > h; h++) {
                        var g, R = i[h].charAt(2);
                        "0" === R ? g = i[h].substring(0, 2) + p : R === p && (g = i[h]), g in l && (s[s.length] = l[g])
                    }
                t.utils.pluginConfig(u, n, "POP_BEACONS", []), this.getPopLatency(s, d)
            } else 
                this.done()
            },
        is_complete: function() {
            return u.complete
        },
        done: function() {
            u.complete || (u.complete=!0, u.beaconLatencies.length && t.addVar({
                beaconLatencies: u.beaconLatencies
            }), t.sendBeacon())
        }
    }
}(window);
(function(e, n) {
    var t = e.BOOMR = e.BOOMR || {}, i = t.plugins = t.plugins || {}, o = {
        isDone: !1
    };
    i.STREAM_TIMING = {
        init: function(e) {
            t.utils.pluginConfig(o, e, "STREAM_TIMING", [])
        },
        is_complete: function() {
            return o.isDone
        },
        done: function() {
            o.isDone=!0, n.streamMetrics && t.addVar(n.streamMetrics), t.sendBeacon()
        }
    }
})(window, LI.RUM);
BOOMR.t_end = (new Date).getTime();
(function(e) {
    "use strict";
    function t() {
        for (var e, t = "treeID", n = document.getElementsByTagName("head")[0].getElementsByTagName("meta"), i = n.length; i--;)
            if (e = n[i], e.name === t)
                return e.content;
        return null
    }
    function n(e) {
        var t;
        if (!r&&!s) {
            s=!0;
            try {
                t = new XMLHttpRequest
            } catch (n) {
                throw Error("Cannot create XMLHttpRequest instance: " + n.message)
            }
            t && (t.onreadystatechange = function() {
                4 === this.readyState && (this.status >= 200 && 400 > this.status ? r=!0 : s=!1)
            }, t.open("POST", i.urls["rum-track"], c), t.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), t.setRequestHeader("X-IsAJAXForm", "1"), t.send("plist=" + JSON.stringify(e)))
        }
    }
    var i = e.LI.RUM, o = "object" == typeof(e.performance || e.mozPerformance || e.msPerformance || e.webkitPerformance), r=!1, s=!1, a = 500, c=!0;
    i.VERSION = "1.0.2", BOOMR.subscribe("page_ready", function() {
        BOOMR.plugins.STREAM_TIMING && o && BOOMR.plugins.STREAM_TIMING.done()
    }), BOOMR.subscribe("before_beacon", function(r) {
        var s, c = i.timeMarks, d = function() {
            return document.body.id ? document.body.id.substring("pagekey-".length) : ""
        };
        if (o&&!r.nt_load_end)
            return setTimeout(i.fire, a), a = 2 * a, void 0;
        s = {
            totalTime: r.nt_load_end - r.nt_nav_st,
            dnsTime: r.nt_dns_end - r.nt_dns_st,
            connectTime: r.nt_con_end - r.nt_con_st,
            firstByteTime: r.nt_res_st - r.nt_con_end,
            pageDownloadTime: r.nt_res_end - r.nt_res_st,
            frontendTime: r.nt_load_st - r.nt_res_end,
            navigationTimingApi: o,
            serverStartTime: i.serverStartTime,
            treeId: t(),
            pageKey: d(),
            boomerangStart: BOOMR.t_start,
            boomerangEnd: BOOMR.t_end,
            redirectCount: r.nt_red_cnt,
            navigationType: r.nt_nav_type,
            navigationStart: r.nt_nav_st,
            unloadEventStart: r.nt_unload_st,
            unloadEventEnd: r.nt_unload_end,
            redirectStart: r.nt_red_st,
            redirectEnd: r.nt_red_end,
            fetchStart: r.nt_fet_st,
            domainLookupStart: r.nt_dns_st,
            domainLookupEnd: r.nt_dns_end,
            connectStart: r.nt_con_st,
            connectEnd: r.nt_con_end,
            secureConnectionStart: r.nt_ssl_st,
            requestStart: r.nt_req_st,
            responseStart: r.nt_res_st,
            responseEnd: r.nt_res_end,
            domLoading: r.nt_domloading,
            domInteractive: r.nt_domint,
            domContentLoadedEventStart: r.nt_domcontloaded_st,
            domContentLoadedEventEnd: r.nt_domcontloaded_end,
            domComplete: r.nt_domcomp,
            loadEventStart: r.nt_load_st,
            loadEventEnd: r.nt_load_end,
            timeDone: r.t_done,
            timePage: r.t_page,
            timeResponse: r.t_resp,
            timeLoad: r.t_load,
            timePrerender: r.t_prerender,
            timePostrender: r.t_postrender,
            timeSource: r["rt.start"],
            bandwidth: r.bw,
            bandwidthErr: r.bw_err,
            latency: r.lat,
            latencyError: r.lat_err,
            bandwidthTime: r.bw_time,
            isSSL: "https:" === e.location.protocol ? 1: 0
        }, BOOMR.plugins.Ads && r.ad_latency_metrics.length > 0 && (s.adMetrics = r.ad_latency_metrics), BOOMR.plugins.CDN_PERF && (s.usedCDN = r.usedCDN), BOOMR.plugins.POP_ID && (s.pointOfPresenceId = r.popId), BOOMR.plugins.POP_BEACONS && (s.beaconLatencies = r.beaconLatencies), BOOMR.plugins.RS_TIMING && (s.resourceTiming = r.rsTiming), r.rsEntries && (s.httpMetrics = r.rsEntries), BOOMR.plugins.STREAM_TIMING && o && (s.timeToNavInteractive = r.timeToNavInteractive && r.timeToNavInteractive - s.responseStart, s.timeToAboveFold = r.timeToAboveFold && r.timeToAboveFold - s.responseStart, s.timeToPageInteractive = r.timeToPageInteractive && r.timeToPageInteractive - s.responseStart);
        for (var m in c)
            c.hasOwnProperty(m) && (s[m] = c[m]);
        if (i.getTotalTimes) {
            var l = i.getTotalTimes();
            for (var u in l)
                l.hasOwnProperty(u) && (s[u] = l[u]);
            void 0 !== s.totalDustRenderTime && (s.hasFizzyEmbed=!0, s.totalFizzyDustRenderTime = s.totalDustRenderTime, void 0 !== s.totalFizzyTime && (s.totalFizzyNotDustTime = s.totalFizzyTime - s.totalDustRenderTime))
        }
        i.report = s, i.done=!0, n(s)
    }), BOOMR.subscribe("page_unload", function() {
        var e, t, n = BOOMR.plugins;
        if (!r) {
            c=!1;
            for (t in n)
                e = n[t], e.is_complete() || "function" != typeof e.done || e.done()
        }
    }), BOOMR.init({
        log: function() {},
        autorun: !1,
        RT: {
            strict_referrer: !1
        },
        BW: {
            base_url: i.urls["boomerang-bw-img"]
        }
    }), i.fire = function() {
        var e;
        (!i.canFire || i.canFire()) && (e = i.markTime && i.markTime("tracking"), BOOMR.page_ready())
    }, i.fire()
})(window);
