/*! 2.2.5 */
(function(window) {
    window.LI || (window.LI = {}), LI.TalkIn = LI.Talkin || function(t) {
        "use strict";
        function e() {
            var t = b.domain.split(".").slice( - 2).join(".");
            return b.domain !== t ? (b.domain = t, !0) : !1
        }
        function n(t) {
            for (var e = w.length, n = v(t); e--;)
                if (w[e] === n)
                    return !0;
            return !1
        }
        function i() {
            t.addEventListener ? (d = function(t, e, n) {
                t.addEventListener(e, n, !1)
            }, h = function(t, e, n) {
                t.removeEventListener(e, n)
            }) : t.attachEvent && (d = function(t, e, n) {
                t.attachEvent("on" + e, n)
            }, h = function(t, e, n) {
                t.detachEvent("on" + e, n)
            })
        }
        function r(t) {
            return k.call(t) === y
        }
        function o(t, e) {
            var n = {};
            return n[t] = e, n
        }
        function a(t, e) {
            var n, i, o;
            if (r(t))
                for (n in t)
                    a(n, t[n]);
            else 
                n = t.split("."), i = n[0], o = l.hasOwnProperty(i) ? l[i] : null, n.length > 1 ? (i = n[1], o.hasOwnProperty(i) && o[i](e)) : o(e)
        }
        function s(e, n) {
            var i, r, o, a, f, c, l = "TALKIN_JSON_LIBRARY", p = "TALKIN_LEGACY_CONTAINER", d = "undefined" != typeof JSON;
            if (b.getElementById(l) || d || (i = b.getElementsByTagName("head")[0], i && (r = b.createElement("script"), r.id = l, r.src = LI.ads.assetURL.JSON_URL, r.type = "text/javascript", i.appendChild(r))), !b.getElementById(p)) {
                for (a = b.createElement("div"), a.id = p; n--;)
                    f = b.createElement("iframe"), c = f.style, c.visibility = "hidden", c.width = "1px", c.height = "1px", c.position = "absolute", c.left = "-999px", c.top = "0", a.appendChild(f);
                o = b.getElementsByTagName("body")[0], o && o.appendChild(a)
            }
            return d ? (T=!0, u(e), void 0) : (t.setTimeout(function() {
                s(e)
            }, 100), void 0)
        }
        function u(t) {
            function e(t) {
                if (t.match(/^(?:https?:\/\/|[\/?#.])/i))
                    return t;
                throw Error("URL is not valid: " + t)
            }
            var n, i, r = ["https://www.linkedin.com", "http://www.linkedin.com", "https://linkedin.com", "http://linkedin.com"], o = "/html/talkin/sender.html?", a = r.length;
            if (!T)
                return s(t, a), void 0;
            if (n = b.getElementById("TALKIN_LEGACY_CONTAINER"), n && (i = n.getElementsByTagName("iframe")), i)
                for (t = "#" + encodeURIComponent(JSON.stringify(t)); a--;)
                    i[a].src = e(r[a] + o + ("" + Math.random()).slice(2) + t)
        }
        function f(e) {
            var i, r = e.data;
            if (n(e.origin))
                if (N)
                    if (r === g)
                        l = LI.TalkIn.endpoints, e.source.postMessage(g, e.origin);
                    else 
                        try {
                            i = JSON.parse(r), a(i)
            } catch (o) {} else if (!p && r === g)
                for (p = e.origin, h(t, m, f), c && (t.clearInterval(c), c = null); L.length;)
                    LI.TalkIn.send(L.pop())
        }
        var c, l, p, d, h, g = "__READY__", m = "message", y = "[object Object]", w = ["TKzOtpCyQ2lB7OUEhbHz1wkI1ww", "doTckfvQb6UiSnR+KOXknWFUZDw", "VQFeyjjIKmjjtkdwWlgApCn6W2g", "k6bHUsq8eXftkQ3CTJXvgYJSY9Q", "f640W4X7ZDRDfPdwPRkQXzbNt2Q", "+lus2RBkJ7GswWZiaRZwr2YCWSE", "w/Cq9ectx60qdy04zfYE9z05C/c", "Nv8UVtK4cvfsZjnR37q4cl6FELo", "zVp+SXlpBxy9ceDhF/QhJIMZ/8w", "ipnp/j05RxfRo66icU7vJlMRYwk", "nsN0FYX3oxPXHFo7F61hk3BLmgw", "qOB2HzNYRUAtmrFigAFhhIdKZX8", "ft6Qf4NlUr+igYY6o7gL3U9PAzA", "r/LByGpOBknQftv1+tpZONO+1e8", "UN2TmDNo1h5c+Bty9q7GqXYZ94Y", "ilgaq1nh7Zup+ZAk5SgZPeLQKAE", "j/jyhrBSfizuVEh/YcNna4pJlBM", "4rlVmy8S5DGns8N9yQ1S1zxQfyg", "oYU1rheOj0XNs4hgDNyodd2YW8w", "wC3CbUDuIqAJmcb/jGre+Rlb4T4", "+3DJhQPlY5rBArZfhlWss5X0P+I", "JDYCNYT++v4sSG+FZL1+BAkzkGs", "ue5T9aOY34YF+XnDD5Drnf5MOMg", "Mfoz2r9CRt9122j7jy7TL5Fs5Dg"], v = function() {
            function t(t) {
                return s(e(a(t), t.length * f))
            }
            function e(t, e) {
                var a, s, u, f, c, l, p, d, h = [80], g = 1732584193, m =- 271733879, y =- 1732584194, w = 271733878, v =- 1009589776;
                for (t[e>>5]|=128<<24 - e%32, t[(e + 64>>9<<4) 
                    + 15] = e, l = 0;
                t.length > l;
                l += 16) {
                    for (a = g, s = m, u = y, f = w, c = v, p = 0; 80 > p; p++)
                        h[p] = 16 > p ? t[l + p] : o(h[p - 3]^h[p - 8]^h[p - 14]^h[p - 16], 1), d = r(r(o(g, 5), n(p, m, y, w)), r(r(v, h[p]), i(p))), v = w, w = y, y = o(m, 30), m = g, g = d;
                    g = r(g, a), m = r(m, s), y = r(y, u), w = r(w, f), v = r(v, c)
                }
                return [g, m, y, w, v]
            }
            function n(t, e, n, i) {
                return 20 > t ? e & n|~e & i : 40 > t ? e^n^i : 60 > t ? e & n | e & i | n & i : e^n^i
            }
            function i(t) {
                return 20 > t ? 1518500249 : 40 > t ? 1859775393 : 60 > t?-1894007588 : - 899497514
            }
            function r(t, e) {
                var n = (65535 & t) + (65535 & e), i = (t>>16) + (e>>16) + (n>>16);
                return i<<16 | 65535 & n
            }
            function o(t, e) {
                return t<<e | t>>>32 - e
            }
            function a(t) {
                var e, n = [], i = (1<<f) - 1;
                for (e = 0; t.length * f > e; e += f)
                    n[e>>5]|=(t.charCodeAt(e / f) & i)<<32 - f - e%32;
                return n
            }
            function s(t) {
                var e, n, i, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = "";
                for (n = 0; 4 * t.length > n; n += 3)
                    for (e = (255 & t[n>>2]>>8 * (3 - n%4))<<16 | (255 & t[n + 1>>2]>>8 * (3 - (n + 1)%4))<<8 | 255 & t[n + 2>>2]>>8 * (3 - (n + 2)%4), i = 0; 4 > i; i++)
                        o += 8 * n + 6 * i > 32 * t.length ? u : r.charAt(63 & e>>6 * (3 - i));
                return o
            }
            var u = "", f = 8;
            return function(e) {
                return t(e)
            }
        }(), b = t.document, I = t.top, N = t.window === I, S = void 0 !== t.webkitURL, O = void 0 !== t.postMessage, k = Object.prototype.toString, T=!1, x = 20, L = [];
        if (i(), N)
            O && d(t, m, f);
        else {
            if (!S)
                try {
                    l = I.LI.TalkIn.endpoints
            } catch (j) {
                try {
                    e() && (l = I.LI.TalkIn.endpoints)
                } catch (E) {}
            }
            O&&!l && d(t, m, f)
        }
        return {
            send: function(e, n) {
                N || (l && e ? a(e, n) : (n && (e = o(e, n)), O ? p ? I.postMessage(JSON.stringify(e), p) : (L.push(e), c || (c = t.setInterval(function() {
                    I.postMessage(g, "*"), x--||t.clearInterval(c)
                }, 100))) : u(e)))
            },
            getQueryParams: function() {
                function e(t) {
                    return t.replace(/[\x00'"<\\]/g, "�")
                }
                for (var n, i, r = t.location, o = r.search.slice(1).split("&").concat(r.pathname.match(/\w+=\w+/g)), a = {}; o.length;)
                    i = o.pop(), i && (n = i.split("="), n.length > 1 && (a[n[0]] = e(n[1])));
                return a
            },
            addListener: d,
            removeListener: h,
            VERSION: "1.3.2"
        }
    }(window);
    var AdSuite = function(t, e) {
        function n(t) {
            var e;
            for (e in t)
                this[e] = t[e];
            o.push(this), this.initialize()
        }
        function i() {
            for (var e, n, i = /^liad\-/, r = t.document.getElementsByTagName("meta"), o = r.length, a = {}; o--;)
                e = r[o], n = e.name, n.match(i) && (a[n.replace(i, "")] = e.content);
            return a
        }
        function r() {
            var t = o, e = t.length, r = 0;
            for (n.prototype.metaData = i(), r; e > r; r++)
                t[r].ready()
        }
        var o = [];
        return n.prototype = {
            initialize: function() {},
            ready: function() {},
            send: e.send,
            queryParams: e.getQueryParams()
        }, e.addListener(t, "load", r), {
            Component: n
        }
    }(window, LI.TalkIn);
    new AdSuite.Component({
        initialize: function() {
            this.startTime = (new Date).getTime()
        },
        ready: function() {
            var t = this.queryParams, e = this.metaData, n = this.isLinkedInAd(t.debug), i = t.tile, r = t.autoexpand, o = e.aeh, a = {};
            r && "0" !== o && (a["ads.expand"] = {
                containerId: i,
                height: o || r,
                animate: e.aes || 200,
                push: !0,
                forget: !0
            }), a["adperf.endTimer"] = {
                adId: e.cid || "unknown",
                tileId: i,
                isLinkedin: n,
                adLoadStartTimeMs: this.startTime,
                adLoadEndTimeMs: (new Date).getTime()
            }, this.send(a)
        },
        isLinkedInAd: function(t) {
            for (var e, n = /^http(s)?:\/\/www\.linkedin/g, i = "&d=1", r = document.getElementsByTagName("iframe"), o = r.length; o--;)
                if (e = r[o], e.src.match(n))
                    return t && (e.src += i), !0;
            return !1
        }
    }), new AdSuite.Component({
        ready: function() {
            var t = "http://bluekai.com/consumers_optoutforlinkedin.php", e = this.metaData.oo;
            e && this.append("t" === e ? t : e)
        },
        append: function(t) {
            var e = window.document, n = e.createElement("a"), i = e.createElement("img"), r = i.style, o = e.getElementsByTagName("body")[0], a = "http:" === window.location.protocol ? "s.c.lnkd.licdn.com": "static.licdn.com";
            n.href = t, n.target = "_blank", i.src = "//" + a + "/scds/common/u/images/apps/ads/collision_ad_marker_77x15_v1.png", r.position = "absolute", r.top = r.right = r.border = 0, r.zIndex = 1e4, r.width = "auto", n.appendChild(i), o.appendChild(n)
        }
    }), new AdSuite.Component({
        initialize: function() {
            this.queryParams.sfadapter && this.buildAPI()
        },
        buildAPI: function() {
            var t = "expanded", e = "collapsed", n = window, i = n.$sf = {}, r = this.queryParams.tile, o = this.send, a = this;
            i.ext = {
                register: function(t, e, n) {
                    a.ensurePositioning(), "function" == typeof n && (a._callback = n), o("ads.initialize", {
                        containerId: r
                    })
                },
                expand: function(e) {
                    o("ads.expand", {
                        containerId: r,
                        delta: !0,
                        width: Math.abs("object" == typeof e ? e.l : e),
                        height: Math.abs("object" == typeof e ? e.b : 0),
                        top: - 1 * Math.abs("object" == typeof e ? e.t : 0)
                    }), a.sendStatusMessage(t)
                },
                collapse: function() {
                    o("ads.collapse", {
                        containerId: r
                    }), a.sendStatusMessage(e)
                },
                geom: function() {
                    return {
                        win: {
                            l: 0,
                            r: 0,
                            t: 0,
                            b: 0,
                            w: 0,
                            h: 0
                        },
                        self: {
                            t: 0,
                            l: 0,
                            r: 0,
                            b: 0,
                            xiv: 0,
                            yiv: 0,
                            iv: 0,
                            z: 0,
                            w: 0,
                            h: 0
                        },
                        exp: {
                            t: 150,
                            l: 600,
                            r: 0,
                            b: 600,
                            xs: 0,
                            xy: 0
                        }
                    }
                },
                supports: function() {
                    return {}
                },
                inViewPercentage: function() {
                    return 0
                }
            }, n.LI.noConflict = function() {
                n.$sf = i
            }
        },
        ensurePositioning: function() {
            var t, e = this.wrapper;
            e || (e = this.wrapper = document.getElementById("sf_align"), e && (t = e.style, t.position = "absolute", t.top = "0", t.right = "0", t.width = "auto"))
        },
        sendStatusMessage: function(t) {
            this._callback && this._callback(t)
        }
    }), "object" != typeof JSON && (JSON = {}), function() {
        "use strict";
        function f(t) {
            return 10 > t ? "0" + t : t
        }
        function quote(t) {
            return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function(t) {
                var e = meta[t];
                return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice( - 4)
            }) + '"' : '"' + t + '"'
        }
        function str(t, e) {
            var n, i, r, o, a, s = gap, u = e[t];
            switch (u && "object" == typeof u && "function" == typeof u.toJSON && (u = u.toJSON(t)), "function" == typeof rep && (u = rep.call(e, t, u)), typeof u) {
            case"string":
                return quote(u);
            case"number":
                return isFinite(u) ? u + "" : "null";
            case"boolean":
            case"null":
                return u + "";
            case"object":
                if (!u)
                    return "null";
                if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(u)) {
                    for (o = u.length, n = 0; o > n; n += 1)
                        a[n] = str(n, u) || "null";
                    return r = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]", gap = s, r
                }
                if (rep && "object" == typeof rep)
                    for (o = rep.length, n = 0; o > n; n += 1)
                        "string" == typeof rep[n] && (i = rep[n], r = str(i, u), r && a.push(quote(i) + (gap ? ": " : ":") + r));
                else 
                    for (i in u)
                        Object.prototype.hasOwnProperty.call(u, i) && (r = str(i, u), r && a.push(quote(i) + (gap ? ": " : ":") + r));
                return r = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}", gap = s, r
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(t, e, n) {
            var i;
            if (gap = "", indent = "", "number" == typeof n)
                for (i = 0; n > i; i += 1)
                    indent += " ";
            else 
                "string" == typeof n && (indent = n);
            if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length))
                throw Error("JSON.stringify");
            return str("", {
                "": t
            })
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(t, e) {
                var n, i, r = t[e];
                if (r && "object" == typeof r)
                    for (n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (i = walk(r, n), void 0 !== i ? r[n] = i : delete r[n]);
                return reviver.call(t, e, r)
            }
            var j;
            if (text += "", cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(t) {
                return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice( - 4)
            })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
                return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                    "": j
                }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }()
})(window);
