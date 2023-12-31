!function(t) {
    "function" == typeof define && define.amd ? define("jquery-ajaxtransport-xdr", ["jquery/nyt"], t) : t(jQuery)
}(function(t) {
    if (!t.support.cors && t.ajaxTransport && window.XDomainRequest) {
        var e = /^https?:\/\//i, n = /^get|post$/i, i = new RegExp("^" + location.protocol, "i");
        t.ajaxTransport("* text html xml json", function(s, o) {
            if (s.crossDomain && s.async && n.test(s.type) && e.test(s.url) && i.test(s.url)) {
                var r = null;
                return {
                    send: function(e, n) {
                        var i = "", a = (o.dataType || "").toLowerCase();
                        r = new XDomainRequest, /^\d+$/.test(o.timeout) && (r.timeout = o.timeout), r.ontimeout = function() {
                            n(500, "timeout")
                        }, r.onload = function() {
                            var e = "Content-Length: " + r.responseText.length + "\r\nContent-Type: " + r.contentType, i = {
                                code: 200,
                                message: "success"
                            }, s = {
                                text: r.responseText
                            };
                            try {
                                if ("html" === a || /text\/html/i.test(r.contentType))
                                    s.html = r.responseText;
                                else if ("json" === a || "text" !== a && /\/json/i.test(r.contentType))
                                    try {
                                        s.json = t.parseJSON(r.responseText)
                                    } catch (o) {
                                    i.code = 500, i.message = "parseerror"
                                } else if ("xml" === a || "text" !== a && /\/xml/i.test(r.contentType)) {
                                    var l = new ActiveXObject("Microsoft.XMLDOM");
                                    l.async=!1;
                                    try {
                                        l.loadXML(r.responseText)
                                    } catch (o) {
                                        l = void 0
                                    }
                                    if (!l ||!l.documentElement || l.getElementsByTagName("parsererror").length)
                                        throw i.code = 500, i.message = "parseerror", "Invalid XML: " + r.responseText;
                                        s.xml = l
                                }
                            } catch (u) {
                                throw u
                            } finally {
                                n(i.code, i.message, s, e)
                            }
                        }, r.onprogress = function() {}, r.onerror = function() {
                            n(500, "error", {
                                text: r.responseText
                            })
                        }, o.data && (i = "string" === t.type(o.data) ? o.data : t.param(o.data)), r.open(s.type, s.url), r.send(i)
                    },
                    abort: function() {
                        r && r.abort()
                    }
                }
            }
        })
    }
}), define("portal/tracker", ["jquery/nyt", "underscore/nyt"], function(t, e) {
    var n = [], i = 0, s = null, o = function(i) {
        var s = new t.Deferred;
        if (window.TAGX) {
            var o = n;
            n = [], e.each(o, function(t) {
                e.isFunction(t[1]) && t[1](), t[0].resolve()
            }), e.isFunction(i) && i(), s.resolve()
        } else 
            n.push([s, i]);
        return s.promise()
    }, r = function() {
        window.TAGX ? o() : s || (s = window.setInterval(function() {
            (window.TAGX || i > 50) && (window.clearInterval(s), window.TAGX && o(), s = null), i += 1
        }, 200))
    }, a = function(t, e) {
        this.moduleName = t, this.constants = e
    };
    return a.prototype = {
        track: function(t, n) {
            var i = this.moduleName;
            t = this.constants ? e.extend({}, this.constants, t) : t, o(function() {
                window.TAGX.EventProxy.trigger(i, t, n)
            }), r()
        }
    }, a
}), define("qute", ["jquery/nyt", "underscore/nyt"], function(t, e) {
    var n = function(n) {
        var i = n ||!1, s = [], o = function(n) {
            var o, r = new t.Deferred, a = e.isFunction(i) ? i(): i;
            return a ? (o = s, s = [], e.each(o, function(t) {
                e.isFunction(t[1]) && t[1](), t[0].resolve()
            }), e.isFunction(n) && n(), r.resolve()) : s.push([r, n]), r.promise()
        };
        return o.run = function() {
            i===!1 && (i=!0), o()
        }, o
    };
    return n
}), function(t) {
    function e(t, e, n) {
        switch (arguments.length) {
        case 2:
            return null != t ? t : e;
        case 3:
            return null != t ? t : null != e ? e : n;
        default:
            throw new Error("Implement me")
        }
    }
    function n() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: - 2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }
    function i(t, e) {
        function n() {
            he.suppressDeprecationWarnings===!1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
        }
        var i=!0;
        return u(function() {
            return i && (n(), i=!1), e.apply(this, arguments)
        }, e)
    }
    function s(t, e) {
        return function(n) {
            return h(t.call(this, n), e)
        }
    }
    function o(t, e) {
        return function(n) {
            return this.lang().ordinal(t.call(this, n), e)
        }
    }
    function r() {}
    function a(t) {
        k(t), u(this, t)
    }
    function l(t) {
        var e = y(t), n = e.year || 0, i = e.quarter || 0, s = e.month || 0, o = e.week || 0, r = e.day || 0, a = e.hour || 0, l = e.minute || 0, u = e.second || 0, c = e.millisecond || 0;
        this._milliseconds =+ c + 1e3 * u + 6e4 * l + 36e5 * a, this._days =+ r + 7 * o, this._months =+ s + 3 * i + 12 * n, this._data = {}, this._bubble()
    }
    function u(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n]);
        return e.hasOwnProperty("toString") && (t.toString = e.toString), e.hasOwnProperty("valueOf") && (t.valueOf = e.valueOf), t
    }
    function c(t) {
        var e, n = {};
        for (e in t)
            t.hasOwnProperty(e) && Ce.hasOwnProperty(e) && (n[e] = t[e]);
        return n
    }
    function d(t) {
        return 0 > t ? Math.ceil(t) : Math.floor(t)
    }
    function h(t, e, n) {
        for (var i = "" + Math.abs(t), s = t >= 0; i.length < e;)
            i = "0" + i;
        return (s ? n ? "+" : "" : "-") + i
    }
    function p(t, e, n, i) {
        var s = e._milliseconds, o = e._days, r = e._months;
        i = null == i?!0 : i, s && t._d.setTime( + t._d + s * n), o && ae(t, "Date", re(t, "Date") + o * n), r && oe(t, re(t, "Month") + r * n), i && he.updateOffset(t, o || r)
    }
    function f(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
    function m(t) {
        return "[object Date]" === Object.prototype.toString.call(t) || t instanceof Date
    }
    function g(t, e, n) {
        var i, s = Math.min(t.length, e.length), o = Math.abs(t.length - e.length), r = 0;
        for (i = 0; s > i; i++)(n && t[i] !== e[i] ||!n && w(t[i]) !== w(e[i])
            ) && r++;
        return r + o
    }
    function v(t) {
        if (t) {
            var e = t.toLowerCase().replace(/(.)s$/, "$1");
            t = en[t] || nn[e] || e
        }
        return t
    }
    function y(t) {
        var e, n, i = {};
        for (n in t)
            t.hasOwnProperty(n) && (e = v(n), e && (i[e] = t[n]));
        return i
    }
    function _(e) {
        var n, i;
        if (0 === e.indexOf("week"))
            n = 7, i = "day";
        else {
            if (0 !== e.indexOf("month"))
                return;
            n = 12, i = "month"
        }
        he[e] = function(s, o) {
            var r, a, l = he.fn._lang[e], u = [];
            if ("number" == typeof s && (o = s, s = t), a = function(t) {
                var e = he().utc().set(i, t);
                return l.call(he.fn._lang, e, s || "")
            }, null != o)
                return a(o);
            for (r = 0; n > r; r++)
                u.push(a(r));
            return u
        }
    }
    function w(t) {
        var e =+ t, n = 0;
        return 0 !== e && isFinite(e) && (n = e >= 0 ? Math.floor(e) : Math.ceil(e)), n
    }
    function b(t, e) {
        return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
    }
    function S(t, e, n) {
        return ee(he([t, 11, 31 + e - n]), e, n).week
    }
    function x(t) {
        return T(t) ? 366 : 365
    }
    function T(t) {
        return t%4 === 0 && t%100 !== 0 || t%400 === 0
    }
    function k(t) {
        var e;
        t._a&&-2 === t._pf.overflow && (e = t._a[_e] < 0 || t._a[_e] > 11 ? _e : t._a[we] < 1 || t._a[we] > b(t._a[ye], t._a[_e]) ? we : t._a[be] < 0 || t._a[be] > 23 ? be : t._a[Se] < 0 || t._a[Se] > 59 ? Se : t._a[xe] < 0 || t._a[xe] > 59 ? xe : t._a[Te] < 0 || t._a[Te] > 999 ? Te : - 1, t._pf._overflowDayOfYear && (ye > e || e > we) && (e = we), t._pf.overflow = e)
    }
    function C(t) {
        return null == t._isValid && (t._isValid=!isNaN(t._d.getTime()) && t._pf.overflow < 0&&!t._pf.empty&&!t._pf.invalidMonth&&!t._pf.nullInput&&!t._pf.invalidFormat&&!t._pf.userInvalidated, t._strict && (t._isValid = t._isValid && 0 === t._pf.charsLeftOver && 0 === t._pf.unusedTokens.length)), t._isValid
    }
    function M(t) {
        return t ? t.toLowerCase().replace("_", "-") : t
    }
    function P(t, e) {
        return e._isUTC ? he(t).zone(e._offset || 0) : he(t).local()
    }
    function D(t, e) {
        return e.abbr = t, ke[t] || (ke[t] = new r), ke[t].set(e), ke[t]
    }
    function E(t) {
        delete ke[t]
    }
    function O(t) {
        var e, n, i, s, o = 0, r = function(t) {
            if (!ke[t] && Me)
                try {
                    require("./lang/" + t)
            } catch (e) {}
            return ke[t]
        };
        if (!t)
            return he.fn._lang;
        if (!f(t)) {
            if (n = r(t))
                return n;
            t = [t]
        }
        for (; o < t.length;) {
            for (s = M(t[o]).split("-"), e = s.length, i = M(t[o + 1]), i = i ? i.split("-") : null; e > 0;) {
                if (n = r(s.slice(0, e).join("-")))
                    return n;
                if (i && i.length >= e && g(s, i, !0) >= e - 1)
                    break;
                e--
            }
            o++
        }
        return he.fn._lang
    }
    function I(t) {
        return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
    }
    function A(t) {
        var e, n, i = t.match(Oe);
        for (e = 0, n = i.length; n > e; e++)
            i[e] = ln[i[e]] ? ln[i[e]] : I(i[e]);
        return function(s) {
            var o = "";
            for (e = 0; n > e; e++)
                o += i[e]instanceof Function ? i[e].call(s, t) : i[e];
            return o
        }
    }
    function L(t, e) {
        return t.isValid() ? (e = Y(e, t.lang()), sn[e] || (sn[e] = A(e)), sn[e](t)) : t.lang().invalidDate()
    }
    function Y(t, e) {
        function n(t) {
            return e.longDateFormat(t) || t
        }
        var i = 5;
        for (Ie.lastIndex = 0; i >= 0 && Ie.test(t);)
            t = t.replace(Ie, n), Ie.lastIndex = 0, i -= 1;
        return t
    }
    function B(t, e) {
        var n, i = e._strict;
        switch (t) {
        case"Q":
            return Ue;
        case"DDDD":
            return Ve;
        case"YYYY":
        case"GGGG":
        case"gggg":
            return i ? qe : Ye;
        case"Y":
        case"G":
        case"g":
            return Ge;
        case"YYYYYY":
        case"YYYYY":
        case"GGGGG":
        case"ggggg":
            return i ? $e : Be;
        case"S":
            if (i)
                return Ue;
        case"SS":
            if (i)
                return Fe;
        case"SSS":
            if (i)
                return Ve;
        case"DDD":
            return Le;
        case"MMM":
        case"MMMM":
        case"dd":
        case"ddd":
        case"dddd":
            return He;
        case"a":
        case"A":
            return O(e._l)._meridiemParse;
        case"X":
            return Re;
        case"Z":
        case"ZZ":
            return We;
        case"T":
            return Ne;
        case"SSSS":
            return je;
        case"MM":
        case"DD":
        case"YY":
        case"GG":
        case"gg":
        case"HH":
        case"hh":
        case"mm":
        case"ss":
        case"ww":
        case"WW":
            return i ? Fe : Ae;
        case"M":
        case"D":
        case"d":
        case"H":
        case"h":
        case"m":
        case"s":
        case"w":
        case"W":
        case"e":
        case"E":
            return Ae;
        case"Do":
            return ze;
        default:
            return n = new RegExp(V(F(t.replace("\\", "")), "i"))
        }
    }
    function j(t) {
        t = t || "";
        var e = t.match(We) || [], n = e[e.length - 1] || [], i = (n + "").match(Ke) || ["-", 0, 0], s =+ (60 * i[1]) + w(i[2]);
        return "+" === i[0]?-s : s
    }
    function H(t, e, n) {
        var i, s = n._a;
        switch (t) {
        case"Q":
            null != e && (s[_e] = 3 * (w(e) - 1));
            break;
        case"M":
        case"MM":
            null != e && (s[_e] = w(e) - 1);
            break;
        case"MMM":
        case"MMMM":
            i = O(n._l).monthsParse(e), null != i ? s[_e] = i : n._pf.invalidMonth = e;
            break;
        case"D":
        case"DD":
            null != e && (s[we] = w(e));
            break;
        case"Do":
            null != e && (s[we] = w(parseInt(e, 10)));
            break;
        case"DDD":
        case"DDDD":
            null != e && (n._dayOfYear = w(e));
            break;
        case"YY":
            s[ye] = he.parseTwoDigitYear(e);
            break;
        case"YYYY":
        case"YYYYY":
        case"YYYYYY":
            s[ye] = w(e);
            break;
        case"a":
        case"A":
            n._isPm = O(n._l).isPM(e);
            break;
        case"H":
        case"HH":
        case"h":
        case"hh":
            s[be] = w(e);
            break;
        case"m":
        case"mm":
            s[Se] = w(e);
            break;
        case"s":
        case"ss":
            s[xe] = w(e);
            break;
        case"S":
        case"SS":
        case"SSS":
        case"SSSS":
            s[Te] = w(1e3 * ("0." + e));
            break;
        case"X":
            n._d = new Date(1e3 * parseFloat(e));
            break;
        case"Z":
        case"ZZ":
            n._useUTC=!0, n._tzm = j(e);
            break;
        case"dd":
        case"ddd":
        case"dddd":
            i = O(n._l).weekdaysParse(e), null != i ? (n._w = n._w || {}, n._w.d = i) : n._pf.invalidWeekday = e;
            break;
        case"w":
        case"ww":
        case"W":
        case"WW":
        case"d":
        case"e":
        case"E":
            t = t.substr(0, 1);
        case"gggg":
        case"GGGG":
        case"GGGGG":
            t = t.substr(0, 2), e && (n._w = n._w || {}, n._w[t] = w(e));
            break;
        case"gg":
        case"GG":
            n._w = n._w || {}, n._w[t] = he.parseTwoDigitYear(e)
        }
    }
    function W(t) {
        var n, i, s, o, r, a, l, u;
        n = t._w, null != n.GG || null != n.W || null != n.E ? (r = 1, a = 4, i = e(n.GG, t._a[ye], ee(he(), 1, 4).year), s = e(n.W, 1), o = e(n.E, 1)) : (u = O(t._l), r = u._week.dow, a = u._week.doy, i = e(n.gg, t._a[ye], ee(he(), r, a).year), s = e(n.w, 1), null != n.d ? (o = n.d, r > o&&++s) : o = null != n.e ? n.e + r : r), l = ne(i, s, o, a, r), t._a[ye] = l.year, t._dayOfYear = l.dayOfYear
    }
    function N(t) {
        var n, i, s, o, r = [];
        if (!t._d) {
            for (s = z(t), t._w && null == t._a[we] && null == t._a[_e] && W(t), t._dayOfYear && (o = e(t._a[ye], s[ye]), t._dayOfYear > x(o) && (t._pf._overflowDayOfYear=!0), i = Z(o, 0, t._dayOfYear), t._a[_e] = i.getUTCMonth(), t._a[we] = i.getUTCDate()), n = 0; 3 > n && null == t._a[n]; ++n)
                t._a[n] = r[n] = s[n];
            for (; 7 > n; n++)
                t._a[n] = r[n] = null == t._a[n] ? 2 === n ? 1 : 0 : t._a[n];
            t._d = (t._useUTC ? Z : J).apply(null, r), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() + t._tzm)
        }
    }
    function R(t) {
        var e;
        t._d || (e = y(t._i), t._a = [e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond], N(t))
    }
    function z(t) {
        var e = new Date;
        return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
    }
    function U(t) {
        if (t._f === he.ISO_8601)
            return void $(t);
        t._a = [], t._pf.empty=!0;
        var e, n, i, s, o, r = O(t._l), a = "" + t._i, l = a.length, u = 0;
        for (i = Y(t._f, r).match(Oe) || [], e = 0; e < i.length; e++)
            s = i[e], n = (a.match(B(s, t)) || [])[0], n && (o = a.substr(0, a.indexOf(n)), o.length > 0 && t._pf.unusedInput.push(o), a = a.slice(a.indexOf(n) + n.length), u += n.length), ln[s] ? (n ? t._pf.empty=!1 : t._pf.unusedTokens.push(s), H(s, n, t)) : t._strict&&!n && t._pf.unusedTokens.push(s);
        t._pf.charsLeftOver = l - u, a.length > 0 && t._pf.unusedInput.push(a), t._isPm && t._a[be] < 12 && (t._a[be] += 12), t._isPm===!1 && 12 === t._a[be] && (t._a[be] = 0), N(t), k(t)
    }
    function F(t) {
        return t.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, i, s) {
            return e || n || i || s
        })
    }
    function V(t) {
        return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function q(t) {
        var e, i, s, o, r;
        if (0 === t._f.length)
            return t._pf.invalidFormat=!0, void(t._d = new Date(0 / 0));
        for (o = 0; o < t._f.length; o++)
            r = 0, e = u({}, t), e._pf = n(), e._f = t._f[o], U(e), C(e) && (r += e._pf.charsLeftOver, r += 10 * e._pf.unusedTokens.length, e._pf.score = r, (null == s || s > r) && (s = r, i = e));
        u(t, i || e)
    }
    function $(t) {
        var e, n, i = t._i, s = Xe.exec(i);
        if (s) {
            for (t._pf.iso=!0, e = 0, n = Ze.length; n > e; e++)
                if (Ze[e][1].exec(i)) {
                    t._f = Ze[e][0] + (s[6] || " ");
                    break
                }
            for (e = 0, n = Qe.length; n > e; e++)
                if (Qe[e][1].exec(i)) {
                    t._f += Qe[e][0];
                    break
                }
            i.match(We) && (t._f += "Z"), U(t)
        } else 
            t._isValid=!1
    }
    function G(t) {
        $(t), t._isValid===!1 && (delete t._isValid, he.createFromInputFallback(t))
    }
    function X(e) {
        var n = e._i, i = Pe.exec(n);
        n === t ? e._d = new Date : i ? e._d = new Date( + i[1]) : "string" == typeof n ? G(e) : f(n) ? (e._a = n.slice(0), N(e)) : m(n) ? e._d = new Date( + n) : "object" == typeof n ? R(e) : "number" == typeof n ? e._d = new Date(n) : he.createFromInputFallback(e)
    }
    function J(t, e, n, i, s, o, r) {
        var a = new Date(t, e, n, i, s, o, r);
        return 1970 > t && a.setFullYear(t), a
    }
    function Z(t) {
        var e = new Date(Date.UTC.apply(null, arguments));
        return 1970 > t && e.setUTCFullYear(t), e
    }
    function Q(t, e) {
        if ("string" == typeof t)
            if (isNaN(t)) {
                if (t = e.weekdaysParse(t), "number" != typeof t)
                    return null
            } else 
                t = parseInt(t, 10);
        return t
    }
    function K(t, e, n, i, s) {
        return s.relativeTime(e || 1, !!n, t, i)
    }
    function te(t, e, n) {
        var i = ve(Math.abs(t) / 1e3), s = ve(i / 60), o = ve(s / 60), r = ve(o / 24), a = ve(r / 365), l = i < on.s && ["s", i] || 1 === s && ["m"] || s < on.m && ["mm", s] || 1 === o && ["h"] || o < on.h && ["hh", o] || 1 === r && ["d"] || r <= on.dd && ["dd", r] || r <= on.dm && ["M"] || r < on.dy && ["MM", ve(r / 30)] || 1 === a && ["y"] || ["yy", a];
        return l[2] = e, l[3] = t > 0, l[4] = n, K.apply({}, l)
    }
    function ee(t, e, n) {
        var i, s = n - e, o = n - t.day();
        return o > s && (o -= 7), s - 7 > o && (o += 7), i = he(t).add("d", o), {
            week: Math.ceil(i.dayOfYear() / 7),
            year: i.year()
        }
    }
    function ne(t, e, n, i, s) {
        var o, r, a = Z(t, 0, 1).getUTCDay();
        return a = 0 === a ? 7 : a, n = null != n ? n : s, o = s - a + (a > i ? 7 : 0) - (s > a ? 7 : 0), r = 7 * (e - 1) + (n - s) + o + 1, {
            year: r > 0 ? t: t - 1,
            dayOfYear: r > 0 ? r: x(t - 1) + r
        }
    }
    function ie(e) {
        var n = e._i, i = e._f;
        return null === n || i === t && "" === n ? he.invalid({
            nullInput: !0
        }) : ("string" == typeof n && (e._i = n = O().preparse(n)), he.isMoment(n) ? (e = c(n), e._d = new Date( + n._d)) : i ? f(i) ? q(e) : U(e) : X(e), new a(e))
    }
    function se(t, e) {
        var n, i;
        if (1 === e.length && f(e[0]) && (e = e[0]), !e.length)
            return he();
        for (n = e[0], i = 1; i < e.length; ++i)
            e[i][t](n) && (n = e[i]);
        return n
    }
    function oe(t, e) {
        var n;
        return "string" == typeof e && (e = t.lang().monthsParse(e), "number" != typeof e) ? t : (n = Math.min(t.date(), b(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t)
    }
    function re(t, e) {
        return t._d["get" + (t._isUTC ? "UTC" : "") + e]()
    }
    function ae(t, e, n) {
        return "Month" === e ? oe(t, n) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
    }
    function le(t, e) {
        return function(n) {
            return null != n ? (ae(this, t, n), he.updateOffset(this, e), this) : re(this, t)
        }
    }
    function ue(t) {
        he.duration.fn[t] = function() {
            return this._data[t]
        }
    }
    function ce(t, e) {
        he.duration.fn["as" + t] = function() {
            return + this / e
        }
    }
    function de(t) {
        "undefined" == typeof ender && (pe = ge.moment, ge.moment = t ? i("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", he) : he)
    }
    for (var he, pe, fe, me = "2.7.0", ge = "undefined" != typeof global ? global : this, ve = Math.round, ye = 0, _e = 1, we = 2, be = 3, Se = 4, xe = 5, Te = 6, ke = {}, Ce = {
        _isAMomentObject: null,
        _i: null,
        _f: null,
        _l: null,
        _strict: null,
        _tzm: null,
        _isUTC: null,
        _offset: null,
        _pf: null,
        _lang: null
    }, Me = "undefined" != typeof module && module.exports, Pe = /^\/?Date\((\-?\d+)/i, De = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Ee = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Oe = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, Ie = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, Ae = /\d\d?/, Le = /\d{1,3}/, Ye = /\d{1,4}/, Be = /[+\-]?\d{1,6}/, je = /\d+/, He = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, We = /Z|[\+\-]\d\d:?\d\d/gi, Ne = /T/i, Re = /[\+\-]?\d+(\.\d{1,3})?/, ze = /\d{1,2}/, Ue = /\d/, Fe = /\d\d/, Ve = /\d{3}/, qe = /\d{4}/, $e = /[+-]?\d{6}/, Ge = /[+-]?\d+/, Xe = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Je = "YYYY-MM-DDTHH:mm:ssZ", Ze = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], Qe = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], Ke = /([\+\-]|\d\d)/gi, tn = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|")
        , {
        Milliseconds: 1, Seconds : 1e3, Minutes : 6e4, Hours : 36e5, Days : 864e5, Months : 2592e6, Years : 31536e6
    }), en = {
        ms: "millisecond",
        s: "second",
        m: "minute",
        h: "hour",
        d: "day",
        D: "date",
        w: "week",
        W: "isoWeek",
        M: "month",
        Q: "quarter",
        y: "year",
        DDD: "dayOfYear",
        e: "weekday",
        E: "isoWeekday",
        gg: "weekYear",
        GG: "isoWeekYear"
    }, nn = {
        dayofyear: "dayOfYear",
        isoweekday: "isoWeekday",
        isoweek: "isoWeek",
        weekyear: "weekYear",
        isoweekyear: "isoWeekYear"
    }, sn = {}, on = {
        s: 45,
        m: 45,
        h: 22,
        dd: 25,
        dm: 45,
        dy: 345
    }, rn = "DDD w W M D d".split(" "), an = "M D H h m s w W".split(" "), ln = {
        M: function() {
            return this.month() + 1
        },
        MMM: function(t) {
            return this.lang().monthsShort(this, t)
        },
        MMMM: function(t) {
            return this.lang().months(this, t)
        },
        D: function() {
            return this.date()
        },
        DDD: function() {
            return this.dayOfYear()
        },
        d: function() {
            return this.day()
        },
        dd: function(t) {
            return this.lang().weekdaysMin(this, t)
        },
        ddd: function(t) {
            return this.lang().weekdaysShort(this, t)
        },
        dddd: function(t) {
            return this.lang().weekdays(this, t)
        },
        w: function() {
            return this.week()
        },
        W: function() {
            return this.isoWeek()
        },
        YY: function() {
            return h(this.year()%100, 2)
        },
        YYYY: function() {
            return h(this.year(), 4)
        },
        YYYYY: function() {
            return h(this.year(), 5)
        },
        YYYYYY: function() {
            var t = this.year(), e = t >= 0 ? "+": "-";
            return e + h(Math.abs(t), 6)
        },
        gg: function() {
            return h(this.weekYear()%100, 2)
        },
        gggg: function() {
            return h(this.weekYear(), 4)
        },
        ggggg: function() {
            return h(this.weekYear(), 5)
        },
        GG: function() {
            return h(this.isoWeekYear()%100, 2)
        },
        GGGG: function() {
            return h(this.isoWeekYear(), 4)
        },
        GGGGG: function() {
            return h(this.isoWeekYear(), 5)
        },
        e: function() {
            return this.weekday()
        },
        E: function() {
            return this.isoWeekday()
        },
        a: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !0)
        },
        A: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !1)
        },
        H: function() {
            return this.hours()
        },
        h: function() {
            return this.hours()%12 || 12
        },
        m: function() {
            return this.minutes()
        },
        s: function() {
            return this.seconds()
        },
        S: function() {
            return w(this.milliseconds() / 100)
        },
        SS: function() {
            return h(w(this.milliseconds() / 10), 2)
        },
        SSS: function() {
            return h(this.milliseconds(), 3)
        },
        SSSS: function() {
            return h(this.milliseconds(), 3)
        },
        Z: function() {
            var t =- this.zone(), e = "+";
            return 0 > t && (t =- t, e = "-"), e + h(w(t / 60), 2) + ":" + h(w(t)%60, 2)
        },
        ZZ: function() {
            var t =- this.zone(), e = "+";
            return 0 > t && (t =- t, e = "-"), e + h(w(t / 60), 2) + h(w(t)%60, 2)
        },
        z: function() {
            return this.zoneAbbr()
        },
        zz: function() {
            return this.zoneName()
        },
        X: function() {
            return this.unix()
        },
        Q: function() {
            return this.quarter()
        }
    }, un = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"];
    rn.length;
    )fe = rn.pop(), ln[fe + "o"] = o(ln[fe], fe);
    for (; an.length;)
        fe = an.pop(), ln[fe + fe] = s(ln[fe], 2);
    for (ln.DDDD = s(ln.DDD, 3), u(r.prototype, {
        set: function(t) {
            var e, n;
            for (n in t)
                e = t[n], "function" == typeof e ? this[n] = e : this["_" + n] = e
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function(t) {
            return this._months[t.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function(t) {
            return this._monthsShort[t.month()]
        },
        monthsParse: function(t) {
            var e, n, i;
            for (this._monthsParse || (this._monthsParse = []), e = 0; 12 > e; e++)
                if (this._monthsParse[e] || (n = he.utc([2e3, e]), i = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[e] = new RegExp(i.replace(".", ""), "i")), this._monthsParse[e].test(t))
                    return e
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function(t) {
            return this._weekdays[t.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function(t) {
            return this._weekdaysShort[t.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function(t) {
            return this._weekdaysMin[t.day()]
        },
        weekdaysParse: function(t) {
            var e, n, i;
            for (this._weekdaysParse || (this._weekdaysParse = []), e = 0; 7 > e; e++)
                if (this._weekdaysParse[e] || (n = he([2e3, 1]).day(e), i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[e] = new RegExp(i.replace(".", ""), "i")), this._weekdaysParse[e].test(t))
                    return e
        },
        _longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        longDateFormat: function(t) {
            var e = this._longDateFormat[t];
            return !e && this._longDateFormat[t.toUpperCase()] && (e = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(t) {
                return t.slice(1)
            }), this._longDateFormat[t] = e), e
        },
        isPM: function(t) {
            return "p" === (t + "").toLowerCase().charAt(0)
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function(t, e, n) {
            return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function(t, e) {
            var n = this._calendar[t];
            return "function" == typeof n ? n.apply(e) : n
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function(t, e, n, i) {
            var s = this._relativeTime[n];
            return "function" == typeof s ? s(t, e, n, i) : s.replace(/%d/i, t)
        },
        pastFuture: function(t, e) {
            var n = this._relativeTime[t > 0 ? "future": "past"];
            return "function" == typeof n ? n(e) : n.replace(/%s/i, e)
        },
        ordinal: function(t) {
            return this._ordinal.replace("%d", t)
        },
        _ordinal: "%d",
        preparse: function(t) {
            return t
        },
        postformat: function(t) {
            return t
        },
        week: function(t) {
            return ee(t, this._week.dow, this._week.doy).week
        },
        _week: {
            dow: 0,
            doy: 6
        },
        _invalidDate: "Invalid date",
        invalidDate: function() {
            return this._invalidDate
        }
    }), he = function(e, i, s, o) {
        var r;
        return "boolean" == typeof s && (o = s, s = t), r = {}, r._isAMomentObject=!0, r._i = e, r._f = i, r._l = s, r._strict = o, r._isUTC=!1, r._pf = n(), ie(r)
    }, he.suppressDeprecationWarnings=!1, he.createFromInputFallback = i("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(t) {
        t._d = new Date(t._i)
    }), he.min = function() {
        var t = [].slice.call(arguments, 0);
        return se("isBefore", t)
    }, he.max = function() {
        var t = [].slice.call(arguments, 0);
        return se("isAfter", t)
    }, he.utc = function(e, i, s, o) {
        var r;
        return "boolean" == typeof s && (o = s, s = t), r = {}, r._isAMomentObject=!0, r._useUTC=!0, r._isUTC=!0, r._l = s, r._i = e, r._f = i, r._strict = o, r._pf = n(), ie(r).utc()
    }, he.unix = function(t) {
        return he(1e3 * t)
    }, he.duration = function(t, e) {
        var n, i, s, o = t, r = null;
        return he.isDuration(t) ? o = {
            ms: t._milliseconds,
            d: t._days,
            M: t._months
        } : "number" == typeof t ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (r = De.exec(t)) ? (n = "-" === r[1]?-1 : 1, o = {
            y : 0, d : w(r[we]) * n, h : w(r[be]) * n, m : w(r[Se]) * n, s : w(r[xe]) * n, ms : w(r[Te]) * n
        }) 
            : (r = Ee.exec(t)) && (n = "-" === r[1]?-1 : 1, s = function(t) {
            var e = t && parseFloat(t.replace(",", "."));
            return (isNaN(e) ? 0 : e) * n
        }, o = {
            y: s(r[2]),
            M: s(r[3]),
            d: s(r[4]),
            h: s(r[5]),
            m: s(r[6]),
            s: s(r[7]),
            w: s(r[8])
        }), i = new l(o), he.isDuration(t) && t.hasOwnProperty("_lang") && (i._lang = t._lang), i
    }, he.version = me, he.defaultFormat = Je, he.ISO_8601 = function() {}, he.momentProperties = Ce, he.updateOffset = function() {}, he.relativeTimeThreshold = function(e, n) {
        return on[e] === t?!1 : (on[e] = n, !0)
    }, he.lang = function(t, e) {
        var n;
        return t ? (e ? D(M(t), e) : null === e ? (E(t), t = "en") : ke[t] || O(t), n = he.duration.fn._lang = he.fn._lang = O(t), n._abbr) : he.fn._lang._abbr
    }, he.langData = function(t) {
        return t && t._lang && t._lang._abbr && (t = t._lang._abbr), O(t)
    }, he.isMoment = function(t) {
        return t instanceof a || null != t && t.hasOwnProperty("_isAMomentObject")
    }, he.isDuration = function(t) {
        return t instanceof l
    }, fe = un.length - 1;
    fe >= 0;
    --fe)_(un[fe]);
    he.normalizeUnits = function(t) {
        return v(t)
    }, he.invalid = function(t) {
        var e = he.utc(0 / 0);
        return null != t ? u(e._pf, t) : e._pf.userInvalidated=!0, e
    }, he.parseZone = function() {
        return he.apply(null, arguments).parseZone()
    }, he.parseTwoDigitYear = function(t) {
        return w(t) + (w(t) > 68 ? 1900 : 2e3)
    }, u(he.fn = a.prototype, {
        clone: function() {
            return he(this)
        },
        valueOf: function() {
            return + this._d + 6e4 * (this._offset || 0)
        },
        unix: function() {
            return Math.floor( + this / 1e3)
        },
        toString: function() {
            return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function() {
            return this._offset ? new Date( + this) : this._d
        },
        toISOString: function() {
            var t = he(this).utc();
            return 0 < t.year() && t.year() <= 9999 ? L(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : L(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
        toArray: function() {
            var t = this;
            return [t.year(), t.month(), t.date(), t.hours(), t.minutes(), t.seconds(), t.milliseconds()]
        },
        isValid: function() {
            return C(this)
        },
        isDSTShifted: function() {
            return this._a ? this.isValid() && g(this._a, (this._isUTC ? he.utc(this._a) : he(this._a)).toArray()) > 0 : !1
        },
        parsingFlags: function() {
            return u({}, this._pf)
        },
        invalidAt: function() {
            return this._pf.overflow
        },
        utc: function() {
            return this.zone(0)
        },
        local: function() {
            return this.zone(0), this._isUTC=!1, this
        },
        format: function(t) {
            var e = L(this, t || he.defaultFormat);
            return this.lang().postformat(e)
        },
        add: function(t, e) {
            var n;
            return n = "string" == typeof t && "string" == typeof e ? he.duration(isNaN( + e)?+t : + e, isNaN( + e) ? e : t) : "string" == typeof t ? he.duration( + e, t) : he.duration(t, e), p(this, n, 1), this
        },
        subtract: function(t, e) {
            var n;
            return n = "string" == typeof t && "string" == typeof e ? he.duration(isNaN( + e)?+t : + e, isNaN( + e) ? e : t) : "string" == typeof t ? he.duration( + e, t) : he.duration(t, e), p(this, n, - 1), this
        },
        diff: function(t, e, n) {
            var i, s, o = P(t, this), r = 6e4 * (this.zone() - o.zone());
            return e = v(e), "year" === e || "month" === e ? (i = 432e5 * (this.daysInMonth() + o.daysInMonth()), s = 12 * (this.year() - o.year()) + (this.month() - o.month()), s += (this - he(this).startOf("month") - (o - he(o).startOf("month"))) / i, s -= 6e4 * (this.zone() - he(this).startOf("month").zone() - (o.zone() - he(o).startOf("month").zone())) / i, "year" === e && (s/=12)) : (i = this - o, s = "second" === e ? i / 1e3 : "minute" === e ? i / 6e4 : "hour" === e ? i / 36e5 : "day" === e ? (i - r) / 864e5 : "week" === e ? (i - r) / 6048e5 : i), n ? s : d(s)
        },
        from: function(t, e) {
            return he.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e)
        },
        fromNow: function(t) {
            return this.from(he(), t)
        },
        calendar: function(t) {
            var e = t || he(), n = P(e, this).startOf("day"), i = this.diff(n, "days", !0), s =- 6 > i ? "sameElse" : - 1 > i ? "lastWeek" : 0 > i ? "lastDay" : 1 > i ? "sameDay" : 2 > i ? "nextDay" : 7 > i ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(s, this))
        },
        isLeapYear: function() {
            return T(this.year())
        },
        isDST: function() {
            return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
        },
        day: function(t) {
            var e = this._isUTC ? this._d.getUTCDay(): this._d.getDay();
            return null != t ? (t = Q(t, this.lang()), this.add({
                d: t - e
            })) : e
        },
        month: le("Month", !0),
        startOf: function(t) {
            switch (t = v(t)) {
            case"year":
                this.month(0);
            case"quarter":
            case"month":
                this.date(1);
            case"week":
            case"isoWeek":
            case"day":
                this.hours(0);
            case"hour":
                this.minutes(0);
            case"minute":
                this.seconds(0);
            case"second":
                this.milliseconds(0)
            }
            return "week" === t ? this.weekday(0) : "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
        },
        endOf: function(t) {
            return t = v(t), this.startOf(t).add("isoWeek" === t ? "week" : t, 1).subtract("ms", 1)
        },
        isAfter: function(t, e) {
            return e = "undefined" != typeof e ? e : "millisecond", + this.clone().startOf(e)>+he(t).startOf(e)
        },
        isBefore: function(t, e) {
            return e = "undefined" != typeof e ? e : "millisecond", + this.clone().startOf(e)<+he(t).startOf(e)
        },
        isSame: function(t, e) {
            return e = e || "ms", + this.clone().startOf(e) ===+ P(t, this).startOf(e)
        },
        min: i("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function(t) {
            return t = he.apply(null, arguments), this > t ? this : t
        }),
        max: i("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function(t) {
            return t = he.apply(null, arguments), t > this ? this : t
        }),
        zone: function(t, e) {
            var n = this._offset || 0;
            return null == t ? this._isUTC ? n : this._d.getTimezoneOffset() : ("string" == typeof t && (t = j(t)), Math.abs(t) < 16 && (t = 60 * t), this._offset = t, this._isUTC=!0, n !== t && (!e || this._changeInProgress ? p(this, he.duration(n - t, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress=!0, he.updateOffset(this, !0), this._changeInProgress = null)), this)
        },
        zoneAbbr: function() {
            return this._isUTC ? "UTC" : ""
        },
        zoneName: function() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        },
        parseZone: function() {
            return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
        },
        hasAlignedHourOffset: function(t) {
            return t = t ? he(t).zone() : 0, (this.zone() - t)%60 === 0
        },
        daysInMonth: function() {
            return b(this.year(), this.month())
        },
        dayOfYear: function(t) {
            var e = ve((he(this).startOf("day") - he(this).startOf("year")) / 864e5) + 1;
            return null == t ? e : this.add("d", t - e)
        },
        quarter: function(t) {
            return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month()%3)
        },
        weekYear: function(t) {
            var e = ee(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return null == t ? e : this.add("y", t - e)
        },
        isoWeekYear: function(t) {
            var e = ee(this, 1, 4).year;
            return null == t ? e : this.add("y", t - e)
        },
        week: function(t) {
            var e = this.lang().week(this);
            return null == t ? e : this.add("d", 7 * (t - e))
        },
        isoWeek: function(t) {
            var e = ee(this, 1, 4).week;
            return null == t ? e : this.add("d", 7 * (t - e))
        },
        weekday: function(t) {
            var e = (this.day() + 7 - this.lang()._week.dow)%7;
            return null == t ? e : this.add("d", t - e)
        },
        isoWeekday: function(t) {
            return null == t ? this.day() || 7 : this.day(this.day()%7 ? t : t - 7)
        },
        isoWeeksInYear: function() {
            return S(this.year(), 1, 4)
        },
        weeksInYear: function() {
            var t = this._lang._week;
            return S(this.year(), t.dow, t.doy)
        },
        get: function(t) {
            return t = v(t), this[t]()
        },
        set: function(t, e) {
            return t = v(t), "function" == typeof this[t] && this[t](e), this
        },
        lang: function(e) {
            return e === t ? this._lang : (this._lang = O(e), this)
        }
    }), he.fn.millisecond = he.fn.milliseconds = le("Milliseconds", !1), he.fn.second = he.fn.seconds = le("Seconds", !1), he.fn.minute = he.fn.minutes = le("Minutes", !1), he.fn.hour = he.fn.hours = le("Hours", !0), he.fn.date = le("Date", !0), he.fn.dates = i("dates accessor is deprecated. Use date instead.", le("Date", !0)), he.fn.year = le("FullYear", !0), he.fn.years = i("years accessor is deprecated. Use year instead.", le("FullYear", !0)), he.fn.days = he.fn.day, he.fn.months = he.fn.month, he.fn.weeks = he.fn.week, he.fn.isoWeeks = he.fn.isoWeek, he.fn.quarters = he.fn.quarter, he.fn.toJSON = he.fn.toISOString, u(he.duration.fn = l.prototype, {
        _bubble: function() {
            var t, e, n, i, s = this._milliseconds, o = this._days, r = this._months, a = this._data;
            a.milliseconds = s%1e3, t = d(s / 1e3), a.seconds = t%60, e = d(t / 60), a.minutes = e%60, n = d(e / 60), a.hours = n%24, o += d(n / 24), a.days = o%30, r += d(o / 30), a.months = r%12, i = d(r / 12), a.years = i
        },
        weeks: function() {
            return d(this.days() / 7)
        },
        valueOf: function() {
            return this._milliseconds + 864e5 * this._days + this._months%12 * 2592e6 + 31536e6 * w(this._months / 12)
        },
        humanize: function(t) {
            var e =+ this, n = te(e, !t, this.lang());
            return t && (n = this.lang().pastFuture(e, n)), this.lang().postformat(n)
        },
        add: function(t, e) {
            var n = he.duration(t, e);
            return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
        },
        subtract: function(t, e) {
            var n = he.duration(t, e);
            return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
        },
        get: function(t) {
            return t = v(t), this[t.toLowerCase() + "s"]()
        },
        as: function(t) {
            return t = v(t), this["as" + t.charAt(0).toUpperCase() + t.slice(1) + "s"]()
        },
        lang: he.fn.lang,
        toIsoString: function() {
            var t = Math.abs(this.years()), e = Math.abs(this.months()), n = Math.abs(this.days()), i = Math.abs(this.hours()), s = Math.abs(this.minutes()), o = Math.abs(this.seconds() + this.milliseconds() / 1e3);
            return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (t ? t + "Y" : "") + (e ? e + "M" : "") + (n ? n + "D" : "") + (i || s || o ? "T" : "") + (i ? i + "H" : "") + (s ? s + "M" : "") + (o ? o + "S" : "") : "P0D"
        }
    });
    for (fe in tn)
        tn.hasOwnProperty(fe) && (ce(fe, tn[fe]), ue(fe.toLowerCase()));
    ce("Weeks", 6048e5), he.duration.fn.asMonths = function() {
        return ( + this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
    }, he.lang("en", {
        ordinal: function(t) {
            var e = t%10, n = 1 === w(t%100 / 10) ? "th": 1 === e ? "st": 2 === e ? "nd": 3 === e ? "rd": "th";
            return t + n
        }
    }), Me ? module.exports = he : "function" == typeof define && define.amd ? (define("moment", ["require", "exports", "module"], function(t, e, n) {
        return n.config && n.config() && n.config().noGlobal===!0 && (ge.moment = pe), he
    }), de(!0)) : de()
}.call(this), define("portal/config/feeds", {
    development: {
        current: "http://localhost:3000/api/v3/streams/portal",
        daily: "http://localhost:3000/api/v3/streams/portal/<%= date %>"
    },
    staging: {
        current: "http://homepage-portal.ast.int.newsdev.net/api/v3/streams/portal",
        daily: "http://homepage-portal.ast.int.newsdev.net/api/v3/streams/portal/<%= date %>"
    },
    production_published: {
        current: "http://int.nyt.com/applications/portal/data/v3/streams.json",
        daily: "http://int.nyt.com/applications/portal/data/v3/daily/<%= date %>.json"
    },
    production: {
        current: "http://homepage-portal.adm.int.newsdev.net/api/v3/streams/portal",
        daily: "http://homepage-portal.adm.int.newsdev.net/api/v3/streams/portal/<%= date %>"
    }
}), define("portal/models/post", ["jquery/nyt", "underscore/nyt", "backbone/nyt"], function(t, e, n) {
    var i = /:\/\/[a-z.\-]*(nytimes.com|nyti.ms)[\:0-9]*(\/|\?|$)/, s = /(?:[a-z0-9]+\.)*[a-z0-9]+\.[a-z]+/, o = n.Model.extend({
        idAttribute: "id",
        defaults: {
            sticky: !1
        },
        initialize: function() {
            e.bindAll(this, "setCustomAttributes"), this.setCustomAttributes(), this.on("change", e.debounce(e.bind(function() {
                this.trigger("after-change")
            }, this), 200)), this.on("change:asset change:date_published change:live_window change:headline_style", this.setCustomAttributes)
        },
        setCustomAttributes: function() {
            0 === this.get("date_published") && this.set("date_published", Math.round((new Date).getTime() / 1e3)), this.set("post_url", this.getAssetProp("url")), this.set("video_id", "video" == this.getAssetProp("type") ? this.getAssetProp("id") : null), this.checkLiveWindow()
        },
        linkIsExternal: function(t) {
            return t = t || this.get("post_url"), t&&!i.test(t)
        },
        isLinked: function() {
            return !!this.get("post_url")
        },
        getLinkHostname: function(t) {
            var e = s.exec(t || this.get("post_url"));
            return e ? e[0] : null
        },
        isVideo: function() {
            var t = this.get("headline_style");
            return "video" == t || "video_live" == t
        },
        hasNYTVideo: function() {
            return this.get("video_id")
        },
        getAssetProp: function(t) {
            return (this.get("asset") || {})[t]
        },
        checkLiveWindow: function() {
            var t, e, n = this.get("live_window");
            n && (t = Date.parse(new Date) / 1e3, (n.start > t || n.end < t) && (e = this.isVideo() ? "video" : "standard", this.set("headline_style", e)))
        },
        present: function(t) {
            t = t || {};
            var n = e.chain(this.attributes).pick(e.keys(t)).reduce(function(t, n, i) {
                return e.isNull(n) || (t[i] = n), t
            }, {}).value();
            return e.defaults(n, t)
        }
    });
    return o
}), define("portal/collections/posts", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "moment", "portal/config/feeds", "portal/models/post"], function(t, e, n, i, s, o) {
    var r = n.Collection.extend({
        model: o,
        order: [],
        initialize: function(t, n) {
            this.options = e.defaults(n || {}, {
                feed: "production_published",
                limit: 0,
                date: null
            }), this.postsDate = this.options.date, this.fetchedDates = [], this.fetchErrors = 0, this.maxErrors = 4, this.on("sort", function() {
                var t = this.pluck("id");
                e.isEqual(t.slice(0, this.order.length), this.order) || this.trigger("reorder"), this.order = t
            }, this)
        },
        parse: function(t) {
            var n = e.isArray(t.streams) ? t.streams[0]: t, i = e.reduce(n.clusters, function(t, e) {
                return t.concat(e.posts)
            }, []);
            return this.options.limit ? i.slice(0, this.options.limit) : i
        },
        comparator: function(t, e) {
            var n = t.get("sticky"), i = e.get("sticky");
            return n&&!i?-1 : i&&!n ? 1 : t.get("date_published") > e.get("date_published")?-1 : 1
        },
        url: function() {
            var t = s[this.options.feed];
            return this.postsDate ? e.template(t.daily, {
                date: this.postsDate
            }) : t.current
        },
        setPostsDate: function(t, e) {
            return this.postsDate = t, this.fetch(e)
        },
        fetchCurrent: function(t) {
            this.postsDate = null, this.fetch(e.extend(t, {
                remove: !1,
                timeout: 15e3
            }))
        },
        canFetchPrevious: function() {
            return this.fetchErrors < this.maxErrors
        },
        fetchPreviousDay: function() {
            var n;
            if (!this.canFetchPrevious())
                return n = new t.Deferred, n.resolve(), n.promise();
            var s = "YYYY-MM-DD", o = e.last(this.fetchedDates), r = this.size(), a = this.last().get("date_published"), l = o ? i(o, s).subtract("days", 1): i(1e3 * a), u = l.format(s), c = function(t, e) {
                t.fetchedDates.push(u), t.fetchErrors += 1, t.canFetchPrevious() && 4 == e.readyState ? t.fetchPreviousDay() : (t.fetchErrors = t.maxErrors, t.trigger("lastDay"))
            };
            return this.setPostsDate(u, {
                timeout: 7e3,
                remove: !1,
                success: function(t, e, n) {
                    var i = t.slice(r);
                    i.length ? (t.fetchErrors = 0, t.fetchedDates.push(u), t.trigger("backfill", i)) : c(t, n.xhr)
                },
                error: c
            })
        }
    });
    return r
}), define("portal/views/base", ["jquery/nyt", "underscore/nyt", "backbone/nyt"], function(t, e, n) {
    var i = n.View.extend({
        setQsParams: function(t, n) {
            var i = "?" + e.map(n, function(t, e) {
                return [encodeURIComponent(e), encodeURIComponent(t)].join("=")
            }).join("&");
            return - 1 != t.indexOf("?") ? t.replace("?", i + "&") : - 1 != t.indexOf("#") ? t.replace("#", i + "#") : t + i
        },
        setUrlProtocol: function(t) {
            return this.options.nytapp ? t.replace(/^https{0,1}/, "nytinteractive") : t
        },
        openHere: function(t) {
            var e = document.defaultView && document.defaultView.top != window ? document.defaultView.top: window;
            e.location.href = this.setUrlProtocol(t)
        },
        openNew: function(t) {
            var e = this.setUrlProtocol(t);
            window.open(e)
        }
    });
    return i
}), define("undercut", ["underscore/nyt"], function(t) {
    var e = function(t, e, n) {
        this.setBase(t), this.partials = {}, this.mixins = {}, this.addPartial(e), this.addMixin(n)
    };
    return e.prototype = {
        addTemplate: function(e, n) {
            return t.isFunction(e) ? e(n) : t.template(e, n)
        },
        setBase: function(t) {
            this.base = this.addTemplate(t)
        },
        addPartial: function(e, n, i) {
            return e ? void(1 == arguments.length && t.isObject(e) ? t.each(e, function(t, e) {
                this.partials[e] = this.addTemplate(t)
            }, this) : this.partials[e] = this.addTemplate(n, i)) : !1
        },
        addMixin: function(e, n) {
            return e ? void(1 == arguments.length && t.isObject(e) ? t.each(e, function(t, e) {
                this.mixins[e] = t
            }, this) : this.mixins[e] = n) : !1
        },
        prepare: function(e) {
            e = t.extend({}, e || {});
            var n = this.partials;
            return t.extend(e, this.mixins, {
                partial: function(i, s) {
                    var o = n[i];
                    return o ? t.isFunction(o) ? o(t.extend(e, s)) : o : void 0
                }
            })
        },
        render: function(t) {
            return this.base(this.prepare(t))
        },
        renderPartial: function(t, e, n) {
            var i = this.prepare(e);
            return i.partial(t, n)
        }
    }, e
}), define("portal/template_helpers", [], function() {
    var t = /"(?=\w)/g, e = /([?!,\.]{1})"$/g, n = /"/g, i = /'/g, s = /@([A-Za-z0-9_]+)/g, o = /#([A-Za-z0-9_]+)/g, r = /--/g, a = /^\s+|\s+$/gm, l = /^(?:\s|\&nbsp;)+|(?:\s|\&nbsp;)+$/gm, u = /\b((?:https?:(?:\/{1,3}|[a-z0-9%])|[a-z0-9.\-]+[.](?:com|net|org|edu|gov|mil|aero|asia|biz|cat|coop|info|int|jobs|mobi|museum|name|post|pro|tel|travel|xxx|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|Ja|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)\/)(?:[^\s()<>{}\[\]]+|\([^\s()]*?\([^\s()]+\)[^\s()]*?\)|\([^\s]+?\))+(?:\([^\s()]*?\([^\s()]+\)[^\s()]*?\)|\([^\s]+?\)|[^\s`!()\[\]{};:'".,<>?\xab\xbb\u201c\u201d\u2018\u2019])|(?:(?!@)[a-z0-9]+(?:[.\-][a-z0-9]+)*[.](?:com|net|org|edu|gov|mil|aero|asia|biz|cat|coop|info|int|jobs|mobi|museum|name|post|pro|tel|travel|xxx|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|Ja|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)\b\/?(?!@)))/, c = function(s) {
        return s.replace(e, "$1&#8221;").replace(t, "&#8220;").replace(n, "&#8221;").replace(i, "&#8217;")
    };
    return {
        linkTweetContent: function(t) {
            return t.replace(s, '<a href="https://twitter.com/$1">@$1</a>').replace(o, '<a href="https://twitter.com/search?q=%23$1&src=hash">#$1</a>')
        },
        linkUrls: function(t) {
            return t.replace(u, '<a href="$1">$1</a>')
        },
        timesStyle: function(t) {
            return t.replace(r, "&#8212;")
        },
        toSmartQuotes: function(t) {
            for (var e, n = [], i = "", s = "<"; t.length;)
                e = t.indexOf(s), - 1 != e ? (i = t.substr(0, e), t = t.substr(e)) : (i = t, t = ""), "<" == s && (i = c(i)), n.push(i), s = "<" == s ? ">" : "<";
            return n.join("")
        },
        trim: function(t, e) {
            return String.prototype.trim ? e===!0 ? t.replace(l, "") : t.trim() : e===!0 ? t.replace(l, "") : t.replace(a, "")
        }
    }
}), define("text", ["module"], function(t) {
    var e, n, i, s, o, r = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"], a = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, l = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im, u = "undefined" != typeof location && location.href, c = u && location.protocol && location.protocol.replace(/\:/, ""), d = u && location.hostname, h = u && (location.port || void 0), p = {}, f = t.config && t.config() || {};
    return e = {
        version: "2.0.12",
        strip: function(t) {
            if (t) {
                t = t.replace(a, "");
                var e = t.match(l);
                e && (t = e[1])
            } else 
                t = "";
            return t
        },
        jsEscape: function(t) {
            return t.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
        },
        createXhr: f.createXhr || function() {
            var t, e, n;
            if ("undefined" != typeof XMLHttpRequest)
                return new XMLHttpRequest;
            if ("undefined" != typeof ActiveXObject)
                for (e = 0; 3 > e; e += 1) {
                    n = r[e];
                    try {
                        t = new ActiveXObject(n)
                    } catch (i) {}
                    if (t) {
                        r = [n];
                        break
                    }
            }
            return t
        },
        parseName: function(t) {
            var e, n, i, s=!1, o = t.indexOf("."), r = 0 === t.indexOf("./") || 0 === t.indexOf("../");
            return - 1 !== o && (!r || o > 1) ? (e = t.substring(0, o), n = t.substring(o + 1, t.length)) : e = t, i = n || e, o = i.indexOf("!"), - 1 !== o && (s = "strip" === i.substring(o + 1), i = i.substring(0, o), n ? n = i : e = i), {
                moduleName: e,
                ext: n,
                strip: s
            }
        },
        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
        useXhr: function(t, n, i, s) {
            var o, r, a, l = e.xdRegExp.exec(t);
            return l ? (o = l[2], r = l[3], r = r.split(":"), a = r[1], r = r[0], !(o && o !== n || r && r.toLowerCase() !== i.toLowerCase() || (a || r) && a !== s)) : !0
        },
        finishLoad: function(t, n, i, s) {
            i = n ? e.strip(i) : i, f.isBuild && (p[t] = i), s(i)
        },
        load: function(t, n, i, s) {
            if (s && s.isBuild&&!s.inlineText)
                return void i();
            f.isBuild = s && s.isBuild;
            var o = e.parseName(t), r = o.moduleName + (o.ext ? "." + o.ext : ""), a = n.toUrl(r), l = f.useXhr || e.useXhr;
            return 0 === a.indexOf("empty:") ? void i() : void(!u || l(a, c, d, h) ? e.get(a, function(n) {
                e.finishLoad(t, o.strip, n, i)
            }, function(t) {
                i.error && i.error(t)
            }) : n([r], function(t) {
                e.finishLoad(o.moduleName + "." + o.ext, o.strip, t, i)
            }))
        },
        write: function(t, n, i) {
            if (p.hasOwnProperty(n)) {
                var s = e.jsEscape(p[n]);
                i.asModule(t + "!" + n, "define(function () { return '" + s + "';});\n")
            }
        },
        writeFile: function(t, n, i, s, o) {
            var r = e.parseName(n), a = r.ext ? "." + r.ext: "", l = r.moduleName + a, u = i.toUrl(r.moduleName + a) + ".js";
            e.load(l, i, function() {
                var n = function(t) {
                    return s(u, t)
                };
                n.asModule = function(t, e) {
                    return s.asModule(t, u, e)
                }, e.write(t, l, n, o)
            }, o)
        }
    }, "node" === f.env ||!f.env && "undefined" != typeof process && process.versions && process.versions.node&&!process.versions["node-webkit"] ? (n = require.nodeRequire("fs"), e.get = function(t, e, i) {
        try {
            var s = n.readFileSync(t, "utf8");
            0 === s.indexOf("") && (s = s.substring(1)), e(s)
        } catch (o) {
            i && i(o)
        }
    }) : "xhr" === f.env ||!f.env && e.createXhr() ? e.get = function(t, n, i, s) {
        var o, r = e.createXhr();
        if (r.open("GET", t, !0), s)
            for (o in s)
                s.hasOwnProperty(o) && r.setRequestHeader(o.toLowerCase(), s[o]);
        f.onXhr && f.onXhr(r, t), r.onreadystatechange = function() {
            var e, s;
            4 === r.readyState && (e = r.status || 0, e > 399 && 600 > e ? (s = new Error(t + " HTTP status: " + e), s.xhr = r, i && i(s)) : n(r.responseText), f.onXhrComplete && f.onXhrComplete(r, t))
        }, r.send(null)
    } : "rhino" === f.env ||!f.env && "undefined" != typeof Packages && "undefined" != typeof java ? e.get = function(t, e) {
        var n, i, s = "utf-8", o = new java.io.File(t), r = java.lang.System.getProperty("line.separator"), a = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(o), s)), l = "";
        try {
            for (n = new java.lang.StringBuffer, i = a.readLine(), i && i.length() && 65279 === i.charAt(0) && (i = i.substring(1)), null !== i && n.append(i); null !== (i = a.readLine());)
                n.append(r), n.append(i);
            l = String(n.toString())
        } finally {
            a.close()
        }
        e(l)
    } : ("xpconnect" === f.env ||!f.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (i = Components.classes, s = Components.interfaces, Components.utils["import"]("resource://gre/modules/FileUtils.jsm"), o = "@mozilla.org/windows-registry-key;1"in i, e.get = function(t, e) {
        var n, r, a, l = {};
        o && (t = t.replace(/\//g, "\\")), a = new FileUtils.File(t);
        try {
            n = i["@mozilla.org/network/file-input-stream;1"].createInstance(s.nsIFileInputStream), n.init(a, 1, 0, !1), r = i["@mozilla.org/intl/converter-input-stream;1"].createInstance(s.nsIConverterInputStream), r.init(n, "utf-8", n.available(), s.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER), r.readString(n.available(), l), r.close(), n.close(), e(l.value)
        } catch (u) {
            throw new Error((a && a.path || "") + ": " + u)
        }
    }), e
}), define("text!portal/templates/share.ejs.html", [], function() {
    return '<div class="portal-post-sharetools"></div>\n<div class="modal-pointer modal-pointer-right">\n  <div class="modal-pointer-conceal"></div>\n</div>'
}), define("portal/views/share", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "shared/sharetools/views/sharetools", "portal/template_helpers", "text!portal/templates/share.ejs.html"], function(t, e, n, i, s, o) {
    if (i && i.notImplemented)
        return {
            notImplemented: !0
        };
    var r = /(<([^>]+)>)/gi, a = /&nbsp;/gi, l = /([a-z]+)-sharetool/, u = e.reduce({
        standard: '<%= (title) ? title + ": " : "" %><%= summaryText %>',
        quote: '"<%= summaryText %>"'
    }, function(t, n, i) {
        return t[i] = e.template(n), t
    }, {}), c = n.View.extend({
        tagName: "div",
        className: "post-share-content modal",
        events: {
            mouseenter: "persist",
            mouseleave: "hide",
            click: "hide"
        },
        initialize: function(n) {
            this.options = e.defaults(n || {}, {
                trigger: t()
            }), this.post = this.options.post, this.template = e.template(o), this.render(), this.initSharetools(this.present())
        },
        initSharetools: function(n) {
            var s = this.post.model, o = s.get("post_url"), r = [{
                type: "twitter",
                label: "Twitter"
            }
            ], a = u[s.get("headline_style")] || u.standard, l = a(n), c = {
                url: o,
                title: l,
                inlineTools: r
            };
            o && r.unshift({
                type: "facebook",
                label: "Facebook"
            }), o&&!s.linkIsExternal() && r.unshift({
                type: "email",
                label: "Email"
            }), t(".portal-post-sharetools", this.el).each(function() {
                var t = new i(e.extend({}, c, {
                    el: this
                }));
                (!o || s.linkIsExternal()) && (t.handleShortUrlShareAction = function(e) {
                    var n = window.open("", e.label + "Share", "toolbar=0,status=0,height=" + e.height + ",width=" + e.width + ",scrollbars=yes,resizable=yes");
                    t.shortUrlRedirect(o || "http://www.nytimes.com", e, n)
                })
            })
        },
        mergeSummaries: function() {
            return e.pluck(this.post.model.get("summaries") || [], "body").join(" ").replace(r, "").replace(a, " ")
        },
        present: function() {
            var t = {
                summaries: [],
                title: null,
                footer: null,
                summaryText: this.mergeSummaries(),
                headline_style: null
            };
            return this.post.model.present(t)
        },
        persist: function() {
            window.clearTimeout(this.hideId)
        },
        show: function() {
            this.persist(), this.position(), this.$el.fadeIn(200), this.post.$el.addClass("share-active")
        },
        hide: function(t) {
            var e = this.$el, n = this.post.$el;
            "click" == t.type ? (this.reportShare(t.target), e.css("display", "none"), n.removeClass("share-active")) : this.hideId = window.setTimeout(function() {
                e.css("display", "none"), n.removeClass("share-active")
            }, 300)
        },
        reportShare: function(e) {
            var n, i, s = t(e), o = s.parents(".sharetool");
            o.length && (n = o.get(0).className.match(l), i = n ? n[1] : "unknown", this.post.trigger("shareLink", this.post.model.get("post_url"), this.post, i))
        },
        position: function() {
            var e = t(window), n = this.getPointer(), i = this.getMeasurements(), s = e.scrollTop(), o = s + e.height(), r = this.post.$el.offset(), a = this.options.trigger.offset().top, l = a + i.triggerMiddle, u = r.left - i.width, c = l - i.middle, d = "auto", h = "auto", p = 5;
            s + p > c ? (c = s + p, d = l - c - i.pointerMiddle, 0 > d && (d = p)) : c + i.height > o - p ? (c = o - p - i.height, d = l - c - i.pointerMiddle, d > i.height - i.pointerHeight && (d = "auto", h = p)) : d = i.middle - i.pointerMiddle, n.css({
                top: d,
                bottom: h
            }), this.$el.css({
                top: c,
                left: u - 10
            })
        },
        getPointer: function() {
            return this.$pointer || (this.$pointer = this.$el.find(".modal-pointer")), this.$pointer
        },
        getMeasurements: function() {
            var t;
            return this.measurements || (t = this.getPointer(), this.$el.css({
                display: "block",
                visibility: "hidden"
            }), this.measurements = {
                width: this.$el.outerWidth(),
                height: this.$el.outerHeight(),
                triggerHeight: this.options.trigger.outerHeight(),
                pointerHeight: t.outerHeight()
            }, e.extend(this.measurements, {
                middle: this.measurements.height / 2,
                pointerMiddle: this.measurements.pointerHeight / 2,
                triggerMiddle: this.measurements.triggerHeight / 2
            }), this.$el.css({
                display: "none",
                visibility: "visible"
            })), this.measurements
        },
        render: function() {
            this.$el[0].parentNode || this.$el.appendTo("body"), this.$pointer = null, this.measurements = null, this.$el.empty().append(t(this.template()))
        }
    });
    return c
}), define("twitter_intents", ["jquery/nyt"], function(t) {
    function e(e) {
        var n = t(e), i = n.is("a") ? n: n.parents("a"), o = i.get(0);
        return o && o.href.match(s) ? o : null
    }
    function n(t, e) {
        var n, i;
        t && t.href && (n = Math.round(u / 2 - r / 2), i = 0, l > a && (i = Math.round(l / 2 - a / 2)), e===!0 ? window.location.href = t.href : window.open(t.href, "intent", o + ",width=" + r + ",height=" + a + ",left=" + n + ",top=" + i))
    }
    function i(t) {
        t = t || window.event;
        var i = e(t.target || t.srcElement);
        i && (n(i), t.returnValue=!1, t.preventDefault && t.preventDefault())
    }
    if (window.__twitterIntentHandler)
        return {
            enable: function() {}
        };
    var s = /twitter\.com(\:\d{2,4})?\/intent\/(\w+)/, o = "scrollbars=yes,resizable=yes,toolbar=no,location=yes", r = 550, a = 420, l = screen.height, u = screen.width;
    return {
        enable: function(e) {
            var n = t(e);
            n.length && n.on("click", i)
        },
        getIntent: e,
        openIntent: n
    }
}), function(t) {
    "function" == typeof define && define.amd ? define("playerjs", [], t) : t()
}(function(t, e) {
    function n(t) {
        return function() {
            var e = {
                method: t
            }, n = Array.prototype.slice.call(arguments);
            /^get/.test(t) ? (i.assert(n.length > 0, "Get methods require a callback."), n.unshift(e)) : (/^set/.test(t) && (i.assert(0 !== n.length, "Set methods require a value."), e.value = n[0]), n = [e]), this.send.apply(this, n)
        }
    }
    var i = {};
    i.DEBUG=!1, i.VERSION = "0.0.10", i.CONTEXT = "player.js", i.POST_MESSAGE=!!t.postMessage, i.ENABLE_CONTEXT=!1, i.origin = function(e) {
        return "//" === e.substr(0, 2) && (e = t.location.protocol + e), e.split("/").slice(0, 3).join("/")
    }, i.addEvent = function(t, e, n) {
        t && (t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n)
    }, i.log = function() {
        i.log.history = i.log.history || [], i.log.history.push(arguments), t.console && i.DEBUG && t.console.log(Array.prototype.slice.call(arguments))
    }, i.isString = function(t) {
        return "[object String]" === Object.prototype.toString.call(t)
    }, i.isObject = function(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
    }, i.isArray = function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }, i.isNone = function(t) {
        return null === t || void 0 === t
    }, i.has = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.indexOf = function(t, e) {
        if (null == t)
            return - 1;
        var n = 0, i = t.length;
        if (Array.prototype.IndexOf && t.indexOf === Array.prototype.IndexOf)
            return t.indexOf(e);
        for (; i > n; n++)
            if (t[n] === e)
                return n;
        return - 1
    }, i.assert = function(t, e) {
        if (!t)
            throw e || "Player.js Assert Failed"
    }, i.Keeper = function() {
        this.init()
    }, i.Keeper.prototype.init = function() {
        this.data = {}
    }, i.Keeper.prototype.getUUID = function() {
        return "listener-xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(t) {
            var e = 16 * Math.random() | 0, n = "x" === t ? e: 3 & e | 8;
            return n.toString(16)
        })
    }, i.Keeper.prototype.has = function(t, e) {
        if (!this.data.hasOwnProperty(t))
            return !1;
        if (i.isNone(e))
            return !0;
        for (var n = this.data[t], s = 0; s < n.length; s++)
            if (n[s].id === e)
                return !0;
        return !1
    }, i.Keeper.prototype.add = function(t, e, n, i, s) {
        var o = {
            id: t,
            event: e,
            cb: n,
            ctx: i,
            one: s
        };
        this.has(e) ? this.data[e].push(o) : this.data[e] = [o]
    }, i.Keeper.prototype.execute = function(t, e, n, s) {
        if (!this.has(t, e))
            return !1;
        for (var o = [], r = [], a = 0; a < this.data[t].length; a++) {
            var l = this.data[t][a];
            i.isNone(e) ||!i.isNone(e) && l.id === e ? (r.push({
                cb: l.cb,
                ctx: l.ctx ? l.ctx: s,
                data: n
            }), l.one===!1 && o.push(l)) : o.push(l)
        }
        0 === o.length ? delete this.data[t] : this.data[t] = o;
        for (var u = 0; u < r.length; u++) {
            var c = r[u];
            c.cb.call(c.ctx, c.data)
        }
    }, i.Keeper.prototype.on = function(t, e, n, i) {
        this.add(t, e, n, i, !1)
    }, i.Keeper.prototype.one = function(t, e, n, i) {
        this.add(t, e, n, i, !0)
    }, i.Keeper.prototype.off = function(t, e) {
        var n = [];
        if (!this.data.hasOwnProperty(t))
            return n;
        for (var s = [], o = 0; o < this.data[t].length; o++) {
            var r = this.data[t][o];
            i.isNone(e) || r.cb === e ? i.isNone(r.id) || n.push(r.id) : s.push(r)
        }
        return 0 === s.length ? delete this.data[t] : this.data[t] = s, n
    }, i.Player = function(t, e) {
        return this instanceof i.Player ? void this.init(t, e) : new i.Player(t, e)
    }, i.EVENTS = {
        READY: "ready",
        PLAY: "play",
        PAUSE: "pause",
        ENDED: "ended",
        TIMEUPDATE: "timeupdate",
        PROGRESS: "progress",
        ERROR: "error"
    }, i.EVENTS.all = function() {
        var t = [];
        for (var e in i.EVENTS)
            i.has(i.EVENTS, e) && i.isString(i.EVENTS[e]) && t.push(i.EVENTS[e]);
        return t
    }, i.METHODS = {
        PLAY: "play",
        PAUSE: "pause",
        GETPAUSED: "getPaused",
        MUTE: "mute",
        UNMUTE: "unmute",
        GETMUTED: "getMuted",
        SETVOLUME: "setVolume",
        GETVOLUME: "getVolume",
        GETDURATION: "getDuration",
        SETCURRENTTIME: "setCurrentTime",
        GETCURRENTTIME: "getCurrentTime",
        SETLOOP: "setLoop",
        GETLOOP: "getLoop",
        REMOVEEVENTLISTENER: "removeEventListener",
        ADDEVENTLISTENER: "addEventListener"
    }, i.METHODS.all = function() {
        var t = [];
        for (var e in i.METHODS)
            i.has(i.METHODS, e) && i.isString(i.METHODS[e]) && t.push(i.METHODS[e]);
        return t
    }, i.READIED = [], i.Player.prototype.init = function(n) {
        var s = this;
        i.isString(n) && (n = e.getElementById(n)), this.elem = n, this.origin = i.origin(n.src), this.keeper = new i.Keeper, this.isReady=!1, this.queue = [], this.events = i.EVENTS.all(), this.methods = i.METHODS.all(), i.POST_MESSAGE ? i.addEvent(t, "message", function(t) {
            s.receive(t)
        }) : i.log("Post Message is not Available."), i.indexOf(i.READIED, n.src)>-1 ? s.loaded=!0 : this.elem.onload = function() {
            s.loaded=!0
        }
    }, i.Player.prototype.send = function(t, e, n) {
        if (t.context = i.CONTEXT, t.version = i.VERSION, e) {
            var s = this.keeper.getUUID();
            t.listener = s, this.keeper.one(s, t.method, e, n)
        }
        return this.isReady || "ready" === t.value ? (i.log("Player.send", t, this.origin), this.loaded===!0 && this.elem.contentWindow.postMessage(JSON.stringify(t), this.origin), !0) : (i.log("Player.queue", t), this.queue.push(t), !1)
    }, i.Player.prototype.receive = function(t) {
        if (i.log("Player.receive", t), t.origin !== this.origin)
            return !1;
        var e;
        try {
            e = JSON.parse(t.data)
        } catch (n) {
            return !1
        }
        return i.ENABLE_CONTEXT && e.context !== i.CONTEXT?!1 : ("ready" === e.event && e.value && e.value.src === this.elem.src && this.ready(e), void(this.keeper.has(e.event, e.listener) && this.keeper.execute(e.event, e.listener, e.value, this)))
    }, i.Player.prototype.ready = function(t) {
        if (this.isReady===!0)
            return !1;
        t.value.events && (this.events = t.value.events), t.value.methods && (this.methods = t.value.methods), this.isReady=!0, this.loaded=!0;
        for (var e = 0; e < this.queue.length; e++) {
            var n = this.queue[e];
            i.log("Player.dequeue", n), "ready" === t.event && this.keeper.execute(n.event, n.listener, !0, this), this.send(n)
        }
        this.queue = []
    }, i.Player.prototype.on = function(t, e, n) {
        var i = this.keeper.getUUID();
        return "ready" === t ? this.keeper.one(i, t, e, n) : this.keeper.on(i, t, e, n), this.send({
            method: "addEventListener",
            value: t,
            listener: i
        }), !0
    }, i.Player.prototype.off = function(t, e) {
        var n = this.keeper.off(t, e);
        if (i.log("Player.off", n), n.length > 0)
            for (var s in n)
                return this.send({
                    method: "removeEventListener",
                    value: t,
                    listener: n[s]
                }), !0;
        return !1
    }, i.Player.prototype.supports = function(t, e) {
        i.assert(i.indexOf(["method", "event"], t)>-1, 'evtOrMethod needs to be either "event" or "method" got ' + t), e = i.isArray(e) ? e : [e];
        for (var n = "event" === t ? this.events : this.methods, s = 0; s < e.length; s++)
            if ( - 1 === i.indexOf(n, e[s]))
                return !1;
        return !0
    };
    for (var s = 0, o = i.METHODS.all().length; o > s; s++) {
        var r = i.METHODS.all()[s];
        i.Player.prototype.hasOwnProperty(r) || (i.Player.prototype[r] = n(r))
    }
    return t.playerjs = i, i.addEvent(t, "message", function(t) {
        var e;
        try {
            e = JSON.parse(t.data)
        } catch (n) {
            return !1
        }
        return i.ENABLE_CONTEXT && e.context !== i.CONTEXT?!1 : void("ready" === e.event && e.value && e.value.src && i.READIED.push(e.value.src))
    }), i.Receiver = function(t, e) {
        this.init(t, e)
    }, i.Receiver.prototype.init = function(n, s) {
        var o = this;
        this.isReady=!1, this.origin = i.origin(e.referrer), this.methods = {}, this.supported = {
            events: n ? n: i.EVENTS.all(),
            methods: s ? s: i.METHODS.all()
        }, this.eventListeners = {}, this.reject=!(t.self !== t.top && i.POST_MESSAGE), this.reject || i.addEvent(t, "message", function(t) {
            o.receive(t)
        })
    }, i.Receiver.prototype.receive = function(e) {
        if (e.origin !== this.origin)
            return !1;
        var n = {};
        if (i.isObject(e.data))
            n = e.data;
        else 
            try {
                n = t.JSON.parse(e.data)
        } catch (s) {
            i.log("JSON Parse Error", s)
        }
        if (i.log("Receiver.receive", e, n), !n.method)
            return !1;
        if (i.ENABLE_CONTEXT && n.context !== i.CONTEXT)
            return !1;
        if ( - 1 === i.indexOf(i.METHODS.all(), n.method))
            return this.emit("error", {
                code: 2,
                msg: 'Invalid Method "' + n.method + '"'
            }), !1;
        var o = i.isNone(n.listener) ? null: n.listener;
        if ("addEventListener" === n.method)
            this.eventListeners.hasOwnProperty(n.value)?-1 === i.indexOf(this.eventListeners[n.value], o) && this.eventListeners[n.value].push(o) : this.eventListeners[n.value] = [o], "ready" === n.value && this.isReady && this.ready();
        else if ("removeEventListener" === n.method) {
            if (this.eventListeners.hasOwnProperty(n.value)) {
                var r = i.indexOf(this.eventListeners[n.value], o);
                r>-1 && this.eventListeners[n.value].splice(r, 1), 0 === this.eventListeners[n.value].length && delete this.eventListeners[n.value]
            }
        } else 
            this.get(n.method, n.value, o)
    }, i.Receiver.prototype.get = function(t, e, n) {
        var i = this;
        if (!this.methods.hasOwnProperty(t))
            return this.emit("error", {
                code: 3,
                msg: 'Method Not Supported"' + t + '"'
            }), !1;
        var s = this.methods[t];
        if ("get" === t.substr(0, 3)) {
            var o = function(e) {
                i.send(t, e, n)
            };
            s.call(this, o)
        } else 
            s.call(this, e)
    }, i.Receiver.prototype.on = function(t, e) {
        this.methods[t] = e
    }, i.Receiver.prototype.send = function(e, n, s) {
        if (i.log("Receiver.send", e, n, s), this.reject)
            return i.log("Receiver.send.reject", e, n, s), !1;
        var o = {
            context: i.CONTEXT,
            version: i.VERSION,
            event: e
        };
        i.isNone(n) || (o.value = n), i.isNone(s) || (o.listener = s);
        var r = JSON.stringify(o);
        t.parent.postMessage(r, "" === this.origin ? "*" : this.origin)
    }, i.Receiver.prototype.emit = function(t, e) {
        if (!this.eventListeners.hasOwnProperty(t))
            return !1;
        i.log("Instance.emit", t, e, this.eventListeners[t]);
        for (var n = 0; n < this.eventListeners[t].length; n++) {
            var s = this.eventListeners[t][n];
            this.send(t, e, s)
        }
        return !0
    }, i.Receiver.prototype.ready = function() {
        i.log("Receiver.ready"), this.isReady=!0;
        var e = {
            src: t.location.toString(),
            events: this.supported.events,
            methods: this.supported.methods
        };
        this.emit("ready", e) || this.send("ready", e)
    }, i.HTML5Adapter = function(t) {
        return this instanceof i.HTML5Adapter ? void this.init(t) : new i.HTML5Adapter(t)
    }, i.HTML5Adapter.prototype.init = function(t) {
        i.assert(t, "playerjs.VideoJSReceiver requires a video element");
        var e = this.receiver = new i.Receiver;
        t.addEventListener("playing", function() {
            e.emit("play")
        }), t.addEventListener("pause", function() {
            e.emit("pause")
        }), t.addEventListener("ended", function() {
            e.emit("ended")
        }), t.addEventListener("timeupdate", function() {
            e.emit("timeupdate", {
                seconds: t.currentTime,
                duration: t.duration
            })
        }), t.addEventListener("progress", function() {
            e.emit("buffered", {
                percent: t.buffered.length
            })
        }), e.on("play", function() {
            t.play()
        }), e.on("pause", function() {
            t.pause()
        }), e.on("getPaused", function(e) {
            e(t.paused)
        }), e.on("getCurrentTime", function(e) {
            e(t.currentTime)
        }), e.on("setCurrentTime", function(e) {
            t.currentTime = e
        }), e.on("getDuration", function(e) {
            e(t.duration)
        }), e.on("getVolume", function(e) {
            e(100 * t.volume)
        }), e.on("setVolume", function(e) {
            t.volume = e / 100
        }), e.on("mute", function() {
            t.muted=!0
        }), e.on("unmute", function() {
            t.muted=!1
        }), e.on("getMuted", function(e) {
            e(t.muted)
        }), e.on("getLoop", function(e) {
            e(t.loop)
        }), e.on("setLoop", function(e) {
            t.loop = e
        })
    }, i.HTML5Adapter.prototype.ready = function() {
        this.receiver.ready()
    }, i.JWPlayerAdapter = function(t) {
        return this instanceof i.JWPlayerAdapter ? void this.init(t) : new i.JWPlayerAdapter(t)
    }, i.JWPlayerAdapter.prototype.init = function(t) {
        i.assert(t, "playerjs.JWPlayerAdapter requires a player object");
        var e = this.receiver = new i.Receiver;
        this.looped=!1, t.onPause(function() {
            e.emit("pause")
        }), t.onPlay(function() {
            e.emit("play")
        }), t.onTime(function(t) {
            var n = t.position, i = t.duration;
            if (!n ||!i)
                return !1;
            var s = {
                seconds: n,
                duration: i
            };
            e.emit("timeupdate", s)
        });
        var n = this;
        t.onComplete(function() {
            n.looped===!0 ? t.seek(0) : e.emit("ended")
        }), t.onError(function() {
            e.emit("error")
        }), e.on("play", function() {
            t.play(!0)
        }), e.on("pause", function() {
            t.pause(!0)
        }), e.on("getPaused", function(e) {
            e("PLAYING" !== t.getState())
        }), e.on("getCurrentTime", function(e) {
            e(t.getPosition())
        }), e.on("setCurrentTime", function(e) {
            t.seek(e)
        }), e.on("getDuration", function(e) {
            e(t.getDuration())
        }), e.on("getVolume", function(e) {
            e(t.getVolume())
        }), e.on("setVolume", function(e) {
            t.setVolume(e)
        }), e.on("mute", function() {
            t.setMute(!0)
        }), e.on("unmute", function() {
            t.setMute(!1)
        }), e.on("getMuted", function(e) {
            e(t.getMute()===!0)
        }), e.on("getLoop", function(t) {
            t(this.looped)
        }, this), e.on("setLoop", function(t) {
            this.looped = t
        }, this)
    }, i.JWPlayerAdapter.prototype.ready = function() {
        this.receiver.ready()
    }, i.MockAdapter = function() {
        return this instanceof i.MockAdapter ? void this.init() : new i.MockAdapter
    }, i.MockAdapter.prototype.init = function() {
        var t = {
            duration: 20,
            currentTime: 0,
            interval: null,
            timeupdate: function() {},
            volume: 100,
            mute: !1,
            playing: !1,
            loop: !1,
            play: function() {
                t.interval = setInterval(function() {
                    t.currentTime += .25, t.timeupdate({
                        seconds: t.currentTime,
                        duration: t.duration
                    })
                }, 250), t.playing=!0
            },
            pause: function() {
                clearInterval(t.interval), t.playing=!1
            }
        }, e = this.receiver = new i.Receiver;
        e.on("play", function() {
            var e = this;
            t.play(), this.emit("play"), t.timeupdate = function(t) {
                e.emit("timeupdate", t)
            }
        }), e.on("pause", function() {
            t.pause(), this.emit("pause")
        }), e.on("getPaused", function(e) {
            e(!t.playing)
        }), e.on("getCurrentTime", function(e) {
            e(t.currentTime)
        }), e.on("setCurrentTime", function(e) {
            t.currentTime = e
        }), e.on("getDuration", function(e) {
            e(t.duration)
        }), e.on("getVolume", function(e) {
            e(t.volume)
        }), e.on("setVolume", function(e) {
            t.volume = e
        }), e.on("mute", function() {
            t.mute=!0
        }), e.on("unmute", function() {
            t.mute=!1
        }), e.on("getMuted", function(e) {
            e(t.mute)
        }), e.on("getLoop", function(e) {
            e(t.loop)
        }), e.on("setLoop", function(e) {
            t.loop = e
        })
    }, i.MockAdapter.prototype.ready = function() {
        this.receiver.ready()
    }, i.SublimeAdapter = function(t) {
        return this instanceof i.SublimeAdapter ? void this.init(t) : new i.SublimeAdapter(t)
    }, i.SublimeAdapter.prototype.events = [i.EVENTS.READY, i.EVENTS.PLAY, i.EVENTS.PAUSE, i.EVENTS.ENDED, i.EVENTS.TIMEUPDATE, i.EVENTS.ERROR], i.SublimeAdapter.prototype.methods = [i.METHODS.PLAY, i.METHODS.PAUSE, i.METHODS.GETDURATION, i.METHODS.SETCURRENTTIME, i.METHODS.GETCURRENTTIME, i.METHODS.REMOVEEVENTLISTENER, i.METHODS.ADDEVENTLISTENER], i.SublimeAdapter.prototype.init = function(t) {
        i.assert(t, "playerjs.SublimeAdapter requires a player object");
        var e = this.receiver = new i.Receiver(this.events, this.methods);
        t.on("pause", function() {
            e.emit("pause")
        }), t.on("play", function() {
            e.emit("play")
        }), t.on("timeUpdate", function(t, n) {
            var i = t.duration();
            if (!n ||!i)
                return !1;
            var s = {
                seconds: n,
                duration: i
            };
            e.emit("timeupdate", s)
        }), t.on("end", function() {
            e.emit("ended")
        }), e.on("play", function() {
            t.play()
        }), e.on("pause", function() {
            t.pause()
        }), e.on("getCurrentTime", function(e) {
            e(t.playbackTime())
        }), e.on("setCurrentTime", function(e) {
            t.seekTo(e)
        }), e.on("getDuration", function(e) {
            e(t.duration())
        })
    }, i.SublimeAdapter.prototype.ready = function() {
        this.receiver.ready()
    }, i.VideoJSAdapter = function(t) {
        return this instanceof i.VideoJSAdapter ? void this.init(t) : new i.VideoJSAdapter(t)
    }, i.VideoJSAdapter.prototype.init = function(t) {
        i.assert(t, "playerjs.VideoJSReceiver requires a player object");
        var e = this.receiver = new i.Receiver;
        t.on("pause", function() {
            e.emit("pause")
        }), t.on("play", function() {
            e.emit("play")
        }), t.on("timeupdate", function() {
            var n = t.currentTime(), i = t.duration();
            if (!n ||!i)
                return !1;
            var s = {
                seconds: n,
                duration: i
            };
            e.emit("timeupdate", s)
        }), t.on("ended", function() {
            e.emit("ended")
        }), t.on("error", function() {
            e.emit("error")
        }), e.on("play", function() {
            t.play()
        }), e.on("pause", function() {
            t.pause()
        }), e.on("getPaused", function(e) {
            e(t.paused())
        }), e.on("getCurrentTime", function(e) {
            e(t.currentTime())
        }), e.on("setCurrentTime", function(e) {
            t.currentTime(e)
        }), e.on("getDuration", function(e) {
            e(t.duration())
        }), e.on("getVolume", function(e) {
            e(100 * t.volume())
        }), e.on("setVolume", function(e) {
            t.volume(e / 100)
        }), e.on("mute", function() {
            t.volume(0)
        }), e.on("unmute", function() {
            t.volume(1)
        }), e.on("getMuted", function(e) {
            e(0 === t.volume())
        }), e.on("getLoop", function(e) {
            e(t.loop())
        }), e.on("setLoop", function(e) {
            t.loop(e)
        })
    }, i.VideoJSAdapter.prototype.ready = function() {
        this.receiver.ready()
    }, i
}(window, document)), define("text!portal/templates/portal_post.ejs.html", [], function() {
    return '<div class="post-style-<%= headline_style %>">\n  <div class="post-loader">...</div>\n  <div class="post-rail">\n    <%= partial(\'pubdate\') %>\n    <div class="share-post">\n      <i class="share-post-icon"></i>\n    </div>\n  </div>\n  <%= partial(\'content\') %>\n  <% if (post_url) { %>\n  <a href="<%= post_url %>" class="post-link-mask"></a>\n  <% } %>\n</div>'
}), define("text!portal/templates/post_content.ejs.html", [], function() {
    return "<div class=\"post-content\">\n  <%= partial('image') %>\n  <%= partial('button') %>\n  <%= partial('twitter_meta') %>\n  <% if (title) { %>\n  <header>\n    <% if (headline_style == 'video_live') { %>\n    <i class=\"post-style-badge\">Live</i>\n    <% } else if (headline_style == 'breaking') { %>\n    <i class=\"post-style-badge\">Breaking</i>\n    <% } %>\n    <%= title %>\n  </header>\n  <% } %>\n  <% if (summaries.length == 1) { %>\n  <p>\n    <% if (headline_style == 'quote') { %><q><% } %><% if (!title && headline_style == 'video_live') { %><i class=\"post-style-badge\">Live</i><% } else if (!title && headline_style == 'breaking') { %><i class=\"post-style-badge\">Breaking</i><% } %><%= (headline_style == 'twitter') ? linkTweetContent(linkUrls(trim(summaries[0].body, true))) : timesStyle(toSmartQuotes(trim(summaries[0].body, true))) %><% if (headline_style == 'quote') { %></q><% } %>\n  </p>\n  <% } else if (summaries.length > 1) { %>\n  <ul>\n    <% _.each(summaries, function(summary) { %>\n      <li><%= (headline_style == 'twitter') ? linkTweetContent(linkUrls(trim(summary.body, true))) : timesStyle(toSmartQuotes(trim(summary.body, true))) %></li>\n    <% }) %>\n  </ul>\n  <% } %>\n  <%= partial('footer') %>\n</div>"
}), define("text!portal/templates/pubdate.ejs.html", [], function() {
    return "<% var pubdate = moment.unix(date_published); %>\n<% var isRecent = moment().diff(pubdate, 'minutes') < 5; %>\n<div class=\"post-timestamp\">\n  <i class=\"post-icon<%= (isRecent) ? ' recent' : '' %>\"><%= (headline_style == 'live') ? 'live' : '' %></i>\n  <time datetime=\"<%= date_published %>\" class=\"<%= (isRecent) ? 'recent' : '' %>\"><%= pubdate.fromNow(true) %></time>\n</div>"
}), define("text!portal/templates/twitter_intents.ejs.html", [], function() {
    return '<div class="intents">\n  <% var tweetId = ((asset.url || \'\').match(/status\\/([0-9]+)/) || [])[1] %>\n  <a class="twitter-intent twitter-intent-reply" href="https://twitter.com/intent/tweet?in_reply_to=<%= tweetId %>">TW</a>\n  <a class="twitter-intent twitter-intent-retweet" href="https://twitter.com/intent/retweet?tweet_id=<%= tweetId %>">RT</a>\n  <a class="twitter-intent twitter-intent-favorite" href="https://twitter.com/intent/favorite?tweet_id=<%= tweetId %>">FAV</a>\n</div>'
}), define("text!portal/templates/button.ejs.html", [], function() {
    return '<% if (call_to_action || button) { %>\n<div class="<%= buttonClass %>">\n  <% if (call_to_action) { %>\n  <%= call_to_action %>\n  <% } else if (button) { %>\n  <a href="<%= button.url %>"><%= button.text %></a>\n  <% } %>\n</div>\n<% } %>'
}), define("text!portal/templates/post_image.ejs.html", [], function() {
    return '<% if (image) { %>\n<figure id="post-image-<%= id %>" class="post-image <%= \'youtube-\' + image.from_youtube %> <%= \'image-style-\' + image.image_style %><% if (!image.credit) { %> no-caption<% } %>">\n  <div class="post-image-frame">\n    <div id="post-image-frame-inner-<%= id %>" class="post-image-frame-inner">\n      <img src="<%= image.url %>"/>\n    </div>\n    <i class="playhead"><span><%= (linkIsExternal && !playsInline) ? \'Watch Video\' + ((footer) ? \' at \' + footer : \'\') : \'Play Video\' %></span></i>\n  </div>\n  <% if (display_asset_style == \'wide\' && image.credit) { %>\n  <figcaption>\n    <span class="credit"><%= image.credit %></span>\n  </figcaption>\n  <% } %>\n</figure>\n<% } %>'
}), define("text!portal/templates/post_nytvideo.ejs.html", [], function() {
    return '<% if (nytvideo) { %>\n<figure class="post-video" id="video-<%= nytvideo.id %>" data-videoid="<%= nytvideo.id %>" data-media-action="modal" data-autoplay="false" data-video-url="">\n  <div class="post-video-frame">\n    <div class="post-video-frame-inner">\n      <img src="<%= nytvideo.url %>" />\n    </div>\n    <i class="playhead media-action-overlay"><span>Play Video</span></i>\n  </div>\n  <figcaption>\n    <span class="credit"><%= nytvideo.credit %></span>\n  </figcaption>\n</figure>\n<% } %>'
}), define("text!portal/templates/footer.ejs.html", [], function() {
    return '<% if (footer) { %>\n  <footer><%= footer %><i class="external-icon"></i></footer>\n<% } %>'
}), define("text!portal/templates/twitter_meta.ejs.html", [], function() {
    return '<% if (headline_style == \'twitter\' && asset.twitter_name) { %>\n\n  <div class="<%= buttonClass %>">\n    <a href="https://twitter.com/intent/user?screen_name=<%= asset.twitter_username %>">Follow</a>\n  </div>\n\n  <div class="twitter-meta">\n    <figure class="post-image image-style-headshot">\n      <div class="post-image-frame">\n        <img src="<%= asset.avatar %>" />\n      </div>\n    </figure>\n    <div class="tweet-credits">\n      <p class="tweet-name"><%= asset.twitter_name %></p>\n      <p class="tweet-username">@<%= asset.twitter_username %></p>\n    </div>\n    \n  </div>\n<% } %>'
}), define("portal/views/post", ["jquery/nyt", "underscore/nyt", "portal/views/base", "undercut", "moment", "portal/views/share", "portal/template_helpers", "twitter_intents", "vhs", "playerjs", "text!portal/templates/portal_post.ejs.html", "text!portal/templates/post_content.ejs.html", "text!portal/templates/pubdate.ejs.html", "text!portal/templates/twitter_intents.ejs.html", "text!portal/templates/button.ejs.html", "text!portal/templates/post_image.ejs.html", "text!portal/templates/post_nytvideo.ejs.html", "text!portal/templates/footer.ejs.html", "text!portal/templates/twitter_meta.ejs.html"], function(t, e, n, i, s, o, r, a, l, u, c, d, h, p, f, m, g, v, y) {
    s.lang("en", {
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "now",
            m: "1m",
            mm: "%dm",
            h: "1h",
            hh: "%dh",
            d: "1d",
            dd: "%dd",
            M: "1mo",
            MM: "%dmo",
            y: "1y",
            yy: "%dy"
        }
    });
    var _ = {
        postClass: "portal-post",
        buttonClass: "post-button"
    }, w = n.extend({
        tagName: "li",
        className: _.postClass,
        events: {},
        requiresRender: ["summaries", "title", "headline_style", "display_asset", "display_asset_style", "button", "call_to_action", "footer", "date_published"],
        id: function() {
            return _.postClass + "-" + this.model.id
        },
        initialize: function(t) {
            this.options = e.defaults(t || {}, {
                displayImages: !0,
                nytapp: null
            }), this.position = 0, this.share = null, this.template = new i(c, {
                content: d,
                pubdate: h,
                twitter_intents: p,
                twitter_meta: y,
                button: f,
                image: m,
                footer: v
            }, {
                playheadImg: '<%= image_path("playbutton_arrow.png") %>',
                moment: s,
                linkTweetContent: r.linkTweetContent,
                toSmartQuotes: r.toSmartQuotes,
                trim: r.trim,
                timesStyle: r.timesStyle,
                linkUrls: r.linkUrls
            }), this.useHiRes = window.devicePixelRatio >= 2, this.videoPlayer = null, this.listen()
        },
        listen: function() {
            this.model.on("after-change", this.onChange, this), this.on("insert", this.adjustImageCrops)
        },
        getTrackingParams: function(t) {
            var e = this.getSelectedImage(), n = this.model.linkIsExternal(t), i = {
                module: "WatchingPortal",
                region: "c-column-middle-span-region",
                pgType: "Homepage",
                action: "click",
                mediaId: e ? e.image_style: "none",
                state: this.model.get("headline_style"),
                contentPlacement: this.position + 1,
                version: n ? "external": "internal",
                contentCollection: this.model.getLinkHostname(t),
                contentId: t,
                eventName: "Watching-article-click"
            };
            return i
        },
        openLink: function(t) {
            var e = this.model.linkIsExternal(t) ? t: this.setQsParams(t, this.getTrackingParams(t));
            this.trigger("openLink", t, this.model), this.openNew(e)
        },
        openIntent: function(t) {
            a.openIntent(t)
        },
        openShare: function(t) {
            return t.stopPropagation(), o.notImplemented?!1 : (this.share || (this.share = new o({
                post: this,
                trigger: this.$el.find(".share-post-icon")
            })), void this.share.show())
        },
        closeShare: function(t) {
            t.stopPropagation(), this.share && this.share.hide(t)
        },
        onChange: function() {
            var t = e.keys(this.model.changedAttributes() || {});
            e.intersection(t, this.requiresRender).length && this.render("updated")
        },
        onClick: function(n) {
            var i = t(n.target), s = this.model.get("post_url"), o = e.bind(function() {
                s&&!this.elemIsIntent(n.target) && this.openLink(s, this.isCmdClick(n))
            }, this);
            i.is("a") || i.parents("a").length ? this.onClickInlineLink(n) : this.model.isVideo()&&!this.videoPlayer && i.parents(".post-image .post-image-frame").length ? this.activateVideo(n) || o() : this.model.isVideo() && this.videoPlayer && i.parents(".post-image").length || o()
        },
        onMouseover: function(e) {
            t(e.target), this.elemIsShare(e.target) && this.openShare(e)
        },
        onMouseout: function(t) {
            this.elemIsShare(t.target) && this.closeShare(t)
        },
        onClickInlineLink: function(e) {
            var n = t(e.target), i = n.is("a") ? n: n.parents("a"), s = i.attr("href"), o = a.getIntent(i);
            e.stopPropagation(), e.preventDefault(), o ? this.openIntent(o) : this.openLink(s, this.isCmdClick(e))
        },
        isCmdClick: function(t) {
            return t.metaKey===!0 || t.ctrlKey===!0
        },
        elemIsButton: function(e) {
            return t(e).parent().hasClass(_.buttonClass)
        },
        elemIsIntent: function(e) {
            return t(e).hasClass("twitter-intent")
        },
        elemIsShare: function(e) {
            var n = t(e);
            return n.hasClass("share-post-icon") || n.hasClass("share-post") && n.parents(".share-active").length
        },
        renderTimestamp: function() {
            var e = this.template.renderPartial("pubdate", this.present());
            this.$el.find(".post-timestamp").replaceWith(t(e))
        },
        getSelectedImage: function(t) {
            var n, i, s = this.model.get("display_asset"), o = s ? s.sectionFrontImages ? s.sectionFrontImages[0].crops: s.crops: null, r = {
                wide: "videoSmall",
                thumb: "thumbWide",
                thumb_square: "thumbStandard",
                wide2x: "videoLarge"
            }, a = this.options.displayImages;
            return t = r[a] ? t && t !== a ? null : a : t || this.model.get("display_asset_style"), a && t && s && o ? (n = o[r[t]], i = n ? n : t == this.model.get("display_asset_style") ? o.external : null, "wide" === t && n && this.useHiRes && (i = o[r.wide2x] || i), i ? e.extend({}, i, {
                credit: s.credit,
                caption: s.caption,
                image_style: t,
                from_youtube: null !== i.url.match("ytimg.com")
            }) : null) : null
        },
        adjustImageCrops: function() {
            var t, e, n, i, s = this.getSelectedImage();
            s && this.$el.parent().length && (t = this.$el.find(".post-image img").filter(function() {
                return this.getAttribute("src") === s.url
            }), 1 == t.length && (n = t.parent(), e = Math.round(n.width() / s.width * s.height), i = e - n.height(), i > 0 && t.css("marginTop", - 1 * Math.floor(i / 2))))
        },
        activateVideo: function(t) {
            var n = this.model.getAssetProp("embed_html"), i = this.$el.find(".post-image"), s=!1, o = this;
            return (n || this.model.hasNYTVideo()) && i.length && (n ? (this.enlargeImage(i), e.defer(function() {
                o.activateExternalVideo(i)
            }), s=!0) : (this.enlargeImage(i), e.defer(function() {
                o.activateNYTVideo(i)
            }), s=!0)), s && t && (t.preventDefault(), t.stopPropagation()), s
        },
        enlargeImage: function(t) {
            t = t || this.$el.find(".post-image"), t.addClass("image-style-wide").removeClass("image-style-thumb_square")
        },
        activateNYTVideo: function(t) {
            var e, n = t.find(".post-image-frame-inner"), i = n.height();
            t.height() - i, e = l.player({
                container: "post-image-" + this.model.id,
                id: this.model.get("video_id"),
                height: i,
                width: n.width(),
                preload: "auto",
                type: "watching",
                ads: !0,
                siteSection: "homepage_watching_homepage",
                cover: !1
            }), this.trigger("addPlayer", e, !0), this.videoPlayer=!0
        },
        activateExternalVideo: function() {
            var e, n = this.$el.find(".post-image-frame"), i = n.find(".post-image-frame-inner"), s = t(this.model.getAssetProp("embed_html"));
            s.attr({
                height: i.height(),
                width: i.width()
            }), i.replaceWith(s), n.addClass("video-active"), e = u.Player(s[0]), this.trigger("addPlayer", e), this.videoPlayer=!0
        },
        getNYTVideoFooter: function() {
            return this.model.isVideo() && this.model.hasNYTVideo()&&!this.model.get("footer") ? 'The New York Times | Watch the full-size video <a href="' + this.model.get("post_url") + '">here</a>.' : null
        },
        present: function() {
            var t = {
                id: null,
                headline_style: "",
                asset: {},
                summaries: [],
                title: null,
                date_published: null,
                footer: this.getNYTVideoFooter(),
                image: this.getSelectedImage(),
                display_asset_style: null,
                button: null,
                call_to_action: null,
                buttonClass: _.buttonClass,
                isLinked: this.model.isLinked(),
                linkIsExternal: this.model.linkIsExternal(),
                playsInline: this.model.isVideo() && (this.model.getAssetProp("embed_html") || this.model.get("video_id")),
                post_url: null
            };
            return this.model.present(t)
        },
        render: function(t) {
            t = t ? e.isArray(t) ? t : [t] : [];
            var n = this.template.render(this.present());
            this.model.isLinked() && t.push("linked-post"), this.model.linkIsExternal() && t.push("external-link"), this.el.className = [this.className].concat(t).join(" "), this.$el.html(n).data("cid", this.model.id), this.videoPlayer && this.activateVideo(), this.adjustImageCrops(), this.trigger("render")
        }
    }, {
        className: _.postClass
    });
    return w
}), function(t) {
    "function" == typeof define && define.amd ? define("detect", [], t) : t()
}(function() {
    var t, e, n, i, s, o, r = window.navigator.userAgent, a = window.navigator.platform;
    return /MSIE/.test(r) ? (t = "Internet Explorer", /IEMobile/.test(r) && (n = 1), e = /MSIE \d+[.]\d+/.exec(r)[0].split(" ")[1]) : /Chrome/.test(r) ? (/CrOS/.test(r) && (a = "CrOS"), t = "Chrome", e = /Chrome\/[\d\.]+/.exec(r)[0].split("/")[1]) : /Opera/.test(r) ? (t = "Opera", (/mini/.test(r) || /Mobile/.test(r)) && (n = 1)) : /Android/.test(r) ? (t = "Android Webkit Browser", n = 1, i = (/Android\s[\.\d]+/.exec(r) || [null])[0]) : /Firefox/.test(r) ? (t = "Firefox", /Fennec/.test(r) && (n = 1), e = /Firefox\/[\.\d]+/.exec(r)[0].split("/")[1]) : /Safari/.test(r) && (t = "Safari", (/iPhone/.test(r) || /iPad/.test(r) || /iPod/.test(r)) && (i = "iOS", n = 1)), e || (e = /Version\/[\.\d]+/.exec(r), e = e ? e[0].split("/")[1] : (/Opera\/[\.\d]+/.exec(r) || [""])[0].split("/")[1]), "MacIntel" === a || "MacPPC" === a ? (i = "Mac OS X", s = (/10[\.\_\d]+/.exec(r) || [])[0], /[\_]/.test(s) && (s = s.split("_").join("."))) : "CrOS" === a ? i = "ChromeOS" : "Win32" === a || "Win64" == a ? (i = "Windows", o = a.replace(/[^0-9]+/, "")) : !i && /Android/.test(r) ? i = "Android" : !i && /Linux/.test(a) ? i = "Linux" : !i && /Windows/.test(r) && (i = "Windows"), {
        browser: t,
        version: e,
        mobile: n,
        os: i,
        osversion: s,
        bit: o
    }
}), define("portal/models/session", ["jquery/nyt", "underscore/nyt", "backbone/nyt"], function(t, e, n) {
    var i = n.Model.extend({
        constructor: function(t) {
            if (n.Model.apply(this, [], t), t = t || {}, this.key = t.key, !this.key)
                throw "Session cannot be initialized with a key (options.key).";
            this.storage = t.persistent===!0 ? window.localStorage : window.sessionStorage, this.set(this.getSession()), this.on("change", this.setSession), this.on("destroy", this.removeSession)
        },
        get: function(t) {
            return this.getSession()[t]
        },
        getSession: function() {
            return this.storage ? JSON.parse(this.storage.getItem(this.key) || "{}") : {}
        },
        setSession: function() {
            if (this.storage)
                try {
                    this.storage.setItem(this.key, JSON.stringify(this.toJSON()))
            } catch (t) {}
        },
        removeSession: function() {
            this.storage && this.storage.removeItem(this.key), this.clear({
                silent: !0
            })
        }
    });
    return i
}), define("portal/collections/players", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "playerjs"], function(t, e, n) {
    var i = n.Model.extend({
        defaults: {
            pausedAt: 0,
            playing: !1,
            player: null,
            isNYT: !1
        },
        initialize: function() {
            this.isNYT = this.get("isNYT"), this.on("change:player", this.listen), this.onReady(this.listen)
        },
        listen: function() {
            var t = this.get("player"), e = this;
            t.on("play", function() {
                e.get("playing") || (e.set("playing", !0), e.setCurrentTime(e.get("pausedAt")))
            }), t.on("pause", function() {
                e.get("playing") && (e.set("playing", !1), e.getCurrentTime(function(t) {
                    e.set("pausedAt", t)
                }))
            })
        },
        onReady: function(t) {
            var n = this.get("player");
            n.on("ready", e.bind(t, this))
        },
        pause: function() {
            this.get("player").pause()
        },
        play: function() {
            this.get("player").on("ready", function() {
                this.play()
            })
        },
        getCurrentTime: function(t) {
            this.get("player").getCurrentTime(t)
        },
        setCurrentTime: function(t) {
            var e = this.get("player");
            t && e.on("ready", function() {
                e.setCurrentTime(t)
            })
        }
    }), s = i.extend({
        onReady: function(t) {
            var n = this.get("player");
            n.loaded(e.bind(t, this))
        },
        pause: function() {
            this.get("player").pause()
        },
        play: function() {
            this.get("player").ready(function() {
                this.play()
            })
        },
        getCurrentTime: function() {},
        setCurrentTime: function() {}
    }), o = n.Collection.extend({
        model: i,
        initialize: function() {
            this.on("change:playing", function(t) {
                t.get("playing")===!0 && this.pauseAll(t)
            })
        },
        add: function(t) {
            var e = t.isNYT ? new s(t): new i(t);
            n.Collection.prototype.add.apply(this, [e])
        },
        pauseAll: function(t) {
            this.each(function(e) {
                e != t && e.pause()
            })
        },
        hasActive: function() {
            return !!this.findWhere({
                playing: !0
            })
        }
    });
    return o
}), function(t) {
    "function" == typeof define && define.amd ? define("jquery.mousewheel", ["jquery/nyt"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
}(function(t) {
    function e(e) {
        var r = e || window.event, a = l.call(arguments, 1), u = 0, d = 0, h = 0, p = 0, f = 0, m = 0;
        if (e = t.event.fix(r), e.type = "mousewheel", "detail"in r && (h =- 1 * r.detail), "wheelDelta"in r && (h = r.wheelDelta), "wheelDeltaY"in r && (h = r.wheelDeltaY), "wheelDeltaX"in r && (d =- 1 * r.wheelDeltaX), "axis"in r && r.axis === r.HORIZONTAL_AXIS && (d =- 1 * h, h = 0), u = 0 === h ? d : h, "deltaY"in r && (h =- 1 * r.deltaY, u = h), "deltaX"in r && (d = r.deltaX, 0 === h && (u =- 1 * d)), 0 !== h || 0 !== d) {
            if (1 === r.deltaMode) {
                var g = t.data(this, "mousewheel-line-height");
                u*=g, h*=g, d*=g
            } else if (2 === r.deltaMode) {
                var v = t.data(this, "mousewheel-page-height");
                u*=v, h*=v, d*=v
            }
            if (p = Math.max(Math.abs(h), Math.abs(d)), (!o || o > p) && (o = p, i(r, p) && (o/=40)), i(r, p) && (u/=40, d/=40, h/=40), u = Math[u >= 1 ? "floor": "ceil"](u / o), d = Math[d >= 1 ? "floor": "ceil"](d / o), h = Math[h >= 1 ? "floor": "ceil"](h / o), c.settings.normalizeOffset && this.getBoundingClientRect) {
                var y = this.getBoundingClientRect();
                f = e.clientX - y.left, m = e.clientY - y.top
            }
            return e.deltaX = d, e.deltaY = h, e.deltaFactor = o, e.offsetX = f, e.offsetY = m, e.deltaMode = 0, a.unshift(e, u, d, h), s && clearTimeout(s), s = setTimeout(n, 200), (t.event.dispatch || t.event.handle).apply(this, a)
        }
    }
    function n() {
        o = null
    }
    function i(t, e) {
        return c.settings.adjustOldDeltas && "mousewheel" === t.type && e%120 === 0
    }
    var s, o, r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], a = "onwheel"in document || document.documentMode >= 9 ? ["wheel"]: ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], l = Array.prototype.slice;
    if (t.event.fixHooks)
        for (var u = r.length; u;)
            t.event.fixHooks[r[--u]] = t.event.mouseHooks;
    var c = t.event.special.mousewheel = {
        version: "3.1.11",
        setup: function() {
            if (this.addEventListener)
                for (var n = a.length; n;)
                    this.addEventListener(a[--n], e, !1);
            else 
                this.onmousewheel = e;
            t.data(this, "mousewheel-line-height", c.getLineHeight(this)), t.data(this, "mousewheel-page-height", c.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var n = a.length; n;)
                    this.removeEventListener(a[--n], e, !1);
            else 
                this.onmousewheel = null;
            t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(e) {
            var n = t(e)["offsetParent"in t.fn ? "offsetParent": "parent"]();
            return n.length || (n = t("body")), parseInt(n.css("fontSize"), 10)
        },
        getPageHeight: function(e) {
            return t(e).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    t.fn.extend({
        mousewheel: function(t) {
            return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
        },
        unmousewheel: function(t) {
            return this.unbind("mousewheel", t)
        }
    })
}), function(t) {
    "function" == typeof define && define.amd ? define("jquery.mCustomScrollbar", ["jquery/nyt"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
}(function(t) {
    var e = "mCustomScrollbar", n = "mCS", i = ".mCustomScrollbar", s = {
        setWidth: !1,
        setHeight: !1,
        setTop: 0,
        setLeft: 0,
        axis: "y",
        scrollbarPosition: "inside",
        scrollInertia: 950,
        autoDraggerLength: !0,
        autoHideScrollbar: !1,
        autoExpandScrollbar: !1,
        alwaysShowScrollbar: 0,
        snapAmount: null,
        snapOffset: 0,
        mouseWheel: {
            enable: !0,
            scrollAmount: "auto",
            axis: "y",
            preventDefault: !1,
            deltaFactor: "auto",
            normalizeDelta: !1,
            invert: !1,
            disableOver: ["select", "option", "keygen", "datalist", "textarea"]
        },
        scrollButtons: {
            enable: !1,
            scrollType: "stepless",
            scrollAmount: "auto"
        },
        keyboard: {
            enable: !0,
            scrollType: "stepless",
            scrollAmount: "auto"
        },
        contentTouchScroll: 25,
        advanced: {
            autoExpandHorizontalScroll: !1,
            autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
            updateOnContentResize: !0,
            updateOnImageLoad: !0,
            updateOnSelectorChange: !1
        },
        theme: "light",
        callbacks: {
            onScrollStart: !1,
            onScroll: !1,
            onTotalScroll: !1,
            onTotalScrollBack: !1,
            whileScrolling: !1,
            onTotalScrollOffset: 0,
            onTotalScrollBackOffset: 0,
            alwaysTriggerOffsets: !0
        },
        live: !1,
        liveSelector: null
    }, o = 0, r = {}, a = function(t) {
        r[t] && (clearTimeout(r[t]), d._delete.call(null, r[t]))
    }, l = window.attachEvent&&!window.addEventListener ? 1: 0, u=!1, c = {
        init: function(e) {
            var e = t.extend(!0, {}, s, e), l = d._selector.call(this);
            if (e.live) {
                var u = e.liveSelector || this.selector || i, h = t(u);
                if ("off" === e.live)
                    return void a(u);
                r[u] = setTimeout(function() {
                    h.mCustomScrollbar(e), "once" === e.live && h.length && a(u)
                }, 500)
            } else 
                a(u);
            return e.setWidth = e.set_width ? e.set_width : e.setWidth, e.setHeight = e.set_height ? e.set_height : e.setHeight, e.axis = e.horizontalScroll ? "x" : d._findAxis.call(null, e.axis), e.scrollInertia = e.scrollInertia < 17 ? 17 : e.scrollInertia, "object" != typeof e.mouseWheel && 1 == e.mouseWheel && (e.mouseWheel = {
                enable: !0,
                scrollAmount: "auto",
                axis: "y",
                preventDefault: !1,
                deltaFactor: "auto",
                normalizeDelta: !1,
                invert: !1
            }), e.mouseWheel.scrollAmount = e.mouseWheelPixels ? e.mouseWheelPixels : e.mouseWheel.scrollAmount, e.mouseWheel.normalizeDelta = e.advanced.normalizeMouseWheelDelta ? e.advanced.normalizeMouseWheelDelta : e.mouseWheel.normalizeDelta, e.scrollButtons.scrollType = d._findScrollButtonsType.call(null, e.scrollButtons.scrollType), d._theme.call(null, e), t(l).each(function() {
                var i = t(this);
                if (!i.data(n)) {
                    i.data(n, {
                        idx: ++o,
                        opt: e,
                        scrollRatio: {
                            y: null,
                            x: null
                        },
                        overflowed: null,
                        bindEvents: !1,
                        tweenRunning: !1,
                        sequential: {},
                        langDir: i.css("direction"),
                        cbOffsets: null,
                        trigger: null
                    });
                    var s = i.data(n).opt, r = i.data("mcs-axis"), a = i.data("mcs-scrollbar-position"), l = i.data("mcs-theme");
                    r && (s.axis = r), a && (s.scrollbarPosition = a), l && (s.theme = l, d._theme.call(null, s)), d._pluginMarkup.call(this), c.update.call(null, i)
                }
            })
        },
        update: function(e) {
            var i = e || d._selector.call(this);
            return t(i).each(function() {
                var e = t(this);
                if (e.data(n)) {
                    var i = e.data(n), s = i.opt, o = t("#mCSB_" + i.idx + "_container"), r = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")];
                    if (!o.length)
                        return;
                    i.tweenRunning && d._stop.call(null, e), e.hasClass("mCS_disabled") && e.removeClass("mCS_disabled"), e.hasClass("mCS_destroyed") && e.removeClass("mCS_destroyed"), d._maxHeight.call(this), d._expandContentHorizontally.call(this), "y" === s.axis || s.advanced.autoExpandHorizontalScroll || o.css("width", d._contentWidth(o.children())), i.overflowed = d._overflowed.call(this), d._scrollbarVisibility.call(this), s.autoDraggerLength && d._setDraggerLength.call(this), d._scrollRatio.call(this), d._bindEvents.call(this);
                    var a = [Math.abs(o[0].offsetTop), Math.abs(o[0].offsetLeft)];
                    "x" !== s.axis && (i.overflowed[0] ? r[0].height() > r[0].parent().height() ? d._resetContentPosition.call(this) : d._scrollTo.call(this, e, a[0].toString(), {
                        dir: "y",
                        dur: 0,
                        overwrite: "none"
                    }) : (d._resetContentPosition.call(this), "y" === s.axis ? d._unbindEvents.call(this) : "yx" === s.axis && i.overflowed[1] && d._scrollTo.call(this, e, a[1].toString(), {
                        dir: "x",
                        dur: 0,
                        overwrite: "none"
                    }))), "y" !== s.axis && (i.overflowed[1] ? r[1].width() > r[1].parent().width() ? d._resetContentPosition.call(this) : d._scrollTo.call(this, e, a[1].toString(), {
                        dir: "x",
                        dur: 0,
                        overwrite: "none"
                    }) : (d._resetContentPosition.call(this), "x" === s.axis ? d._unbindEvents.call(this) : "yx" === s.axis && i.overflowed[0] && d._scrollTo.call(this, e, a[0].toString(), {
                        dir: "y",
                        dur: 0,
                        overwrite: "none"
                    }))), d._autoUpdate.call(this)
                }
            })
        },
        scrollTo: function(e, i) {
            if ("undefined" != typeof e && null != e) {
                var s = d._selector.call(this);
                return t(s).each(function() {
                    var s = t(this);
                    if (s.data(n)) {
                        var o = s.data(n), r = o.opt, a = {
                            trigger: "external",
                            scrollInertia: r.scrollInertia,
                            scrollEasing: "mcsEaseInOut",
                            moveDragger: !1,
                            callbacks: !0,
                            onStart: !0,
                            onUpdate: !0,
                            onComplete: !0
                        }, l = t.extend(!0, {}, a, i), u = d._arr.call(this, e), c = l.scrollInertia < 17 ? 17: l.scrollInertia;
                        u[0] = d._to.call(this, u[0], "y"), u[1] = d._to.call(this, u[1], "x"), l.moveDragger && (u[0]*=o.scrollRatio.y, u[1]*=o.scrollRatio.x), l.dur = c, setTimeout(function() {
                            null !== u[0] && "undefined" != typeof u[0] && "x" !== r.axis && o.overflowed[0] && (l.dir = "y", l.overwrite = "all", d._scrollTo.call(this, s, u[0].toString(), l)), null !== u[1] && "undefined" != typeof u[1] && "y" !== r.axis && o.overflowed[1] && (l.dir = "x", l.overwrite = "none", d._scrollTo.call(this, s, u[1].toString(), l))
                        }, 60)
                    }
                })
            }
        },
        stop: function() {
            var e = d._selector.call(this);
            return t(e).each(function() {
                var e = t(this);
                e.data(n) && d._stop.call(null, e)
            })
        },
        disable: function(e) {
            var i = d._selector.call(this);
            return t(i).each(function() {
                var i = t(this);
                if (i.data(n)) {
                    var s = i.data(n);
                    s.opt, d._autoUpdate.call(this, "remove"), d._unbindEvents.call(this), e && d._resetContentPosition.call(this), d._scrollbarVisibility.call(this, !0), i.addClass("mCS_disabled")
                }
            })
        },
        destroy: function() {
            var i = d._selector.call(this);
            return t(i).each(function() {
                var s = t(this);
                if (s.data(n)) {
                    var o = s.data(n), r = o.opt, l = t("#mCSB_" + o.idx), u = t("#mCSB_" + o.idx + "_container"), c = t(".mCSB_" + o.idx + "_scrollbar");
                    r.live && a(i), d._autoUpdate.call(this, "remove"), d._unbindEvents.call(this), d._resetContentPosition.call(this), s.removeData(n), d._delete.call(null, this.mcs), c.remove(), l.replaceWith(u.contents()), s.removeClass(e + " _" + n + "_" + o.idx + " mCS-autoHide mCS-dir-rtl mCS_no_scrollbar mCS_disabled").addClass("mCS_destroyed")
                }
            })
        }
    }, d = {
        _selector: function() {
            return "object" != typeof t(this) || t(this).length < 1 ? i : this
        },
        _theme: function(e) {
            var n = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"], i = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"], s = ["minimal", "minimal-dark"], o = ["minimal", "minimal-dark"], r = ["minimal", "minimal-dark"];
            e.autoDraggerLength = t.inArray(e.theme, n)>-1?!1 : e.autoDraggerLength, e.autoExpandScrollbar = t.inArray(e.theme, i)>-1?!1 : e.autoExpandScrollbar, e.scrollButtons.enable = t.inArray(e.theme, s)>-1?!1 : e.scrollButtons.enable, e.autoHideScrollbar = t.inArray(e.theme, o)>-1?!0 : e.autoHideScrollbar, e.scrollbarPosition = t.inArray(e.theme, r)>-1 ? "outside" : e.scrollbarPosition
        },
        _findAxis: function(t) {
            return "yx" === t || "xy" === t || "auto" === t ? "yx" : "x" === t || "horizontal" === t ? "x" : "y"
        },
        _findScrollButtonsType: function(t) {
            return "stepped" === t || "pixels" === t || "step" === t || "click" === t ? "stepped" : "stepless"
        },
        _pluginMarkup: function() {
            var i = t(this), s = i.data(n), o = s.opt, r = o.autoExpandScrollbar ? " mCSB_scrollTools_onDrag_expand": "", a = ["<div id='mCSB_" + s.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + s.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_vertical" + r + "'><div class='mCSB_draggerContainer'><div id='mCSB_" + s.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + s.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + s.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='mCSB_draggerContainer'><div id='mCSB_" + s.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"], l = "yx" === o.axis ? "mCSB_vertical_horizontal": "x" === o.axis ? "mCSB_horizontal": "mCSB_vertical", u = "yx" === o.axis ? a[0] + a[1]: "x" === o.axis ? a[1]: a[0], c = "yx" === o.axis ? "<div id='mCSB_" + s.idx + "_container_wrapper' class='mCSB_container_wrapper' />": "", h = o.autoHideScrollbar ? " mCS-autoHide": "", p = "x" !== o.axis && "rtl" === s.langDir ? " mCS-dir-rtl": "";
            o.setWidth && i.css("width", o.setWidth), o.setHeight && i.css("height", o.setHeight), o.setLeft = "y" !== o.axis && "rtl" === s.langDir ? "989999px" : o.setLeft, i.addClass(e + " _" + n + "_" + s.idx + h + p).wrapInner("<div id='mCSB_" + s.idx + "' class='mCustomScrollBox mCS-" + o.theme + " " + l + "'><div id='mCSB_" + s.idx + "_container' class='mCSB_container' style='position:relative; top:" + o.setTop + "; left:" + o.setLeft + ";' dir=" + s.langDir + " /></div>");
            var f = t("#mCSB_" + s.idx), m = t("#mCSB_" + s.idx + "_container");
            "y" === o.axis || o.advanced.autoExpandHorizontalScroll || m.css("width", d._contentWidth(m.children())), "outside" === o.scrollbarPosition ? ("static" === i.css("position") && i.css("position", "relative"), i.css("overflow", "visible"), f.addClass("mCSB_outside").after(u)) : (f.addClass("mCSB_inside").append(u), m.wrap(c)), d._scrollButtons.call(this);
            var g = [t("#mCSB_" + s.idx + "_dragger_vertical"), t("#mCSB_" + s.idx + "_dragger_horizontal")];
            g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
        },
        _contentWidth: function(e) {
            return Math.max.apply(Math, e.map(function() {
                return t(this).outerWidth(!0)
            }).get())
        },
        _expandContentHorizontally: function() {
            var e = t(this), i = e.data(n), s = i.opt, o = t("#mCSB_" + i.idx + "_container");
            s.advanced.autoExpandHorizontalScroll && "y" !== s.axis && o.css({
                position: "absolute",
                width: "auto"
            }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                width: Math.ceil(o[0].getBoundingClientRect().right + .4) - Math.floor(o[0].getBoundingClientRect().left),
                position: "relative"
            }).unwrap()
        },
        _scrollButtons: function() {
            var e = t(this), i = e.data(n), s = i.opt, o = t(".mCSB_" + i.idx + "_scrollbar:first"), r = ["<a href='#' class='mCSB_buttonUp' oncontextmenu='return false;' />", "<a href='#' class='mCSB_buttonDown' oncontextmenu='return false;' />", "<a href='#' class='mCSB_buttonLeft' oncontextmenu='return false;' />", "<a href='#' class='mCSB_buttonRight' oncontextmenu='return false;' />"], a = ["x" === s.axis ? r[2]: r[0], "x" === s.axis ? r[3]: r[1], r[2], r[3]];
            s.scrollButtons.enable && o.prepend(a[0]).append(a[1]).next(".mCSB_scrollTools").prepend(a[2]).append(a[3])
        },
        _maxHeight: function() {
            var e = t(this), i = e.data(n), s = (i.opt, t("#mCSB_" + i.idx)), o = e.css("max-height"), r =- 1 !== o.indexOf("%"), a = e.css("box-sizing");
            if ("none" !== o) {
                var l = r ? e.parent().height() * parseInt(o) / 100: parseInt(o);
                "border-box" === a && (l -= e.innerHeight() - e.height() + (e.outerHeight() - e.innerHeight())), s.css("max-height", Math.round(l))
            }
        },
        _setDraggerLength: function() {
            var e = t(this), i = e.data(n), s = t("#mCSB_" + i.idx), o = t("#mCSB_" + i.idx + "_container"), r = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")], a = [s.height() / o.outerHeight(!1), s.width() / o.outerWidth(!1)], u = [parseInt(r[0].css("min-height")), Math.round(a[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(a[1] * r[1].parent().width())], c = l && u[1] < u[0] ? u[0]: u[1], d = l && u[3] < u[2] ? u[2]: u[3];
            r[0].css({
                height: c,
                "max-height": r[0].parent().height() - 10
            }).find(".mCSB_dragger_bar").css({
                "line-height": u[0] + "px"
            }), r[1].css({
                width: d,
                "max-width": r[1].parent().width() - 10
            })
        },
        _scrollRatio: function() {
            var e = t(this), i = e.data(n), s = t("#mCSB_" + i.idx), o = t("#mCSB_" + i.idx + "_container"), r = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")], a = [o.outerHeight(!1) - s.height(), o.outerWidth(!1) - s.width()], l = [a[0] / (r[0].parent().height() - r[0].height()), a[1] / (r[1].parent().width() - r[1].width())];
            i.scrollRatio = {
                y: l[0],
                x: l[1]
            }
        },
        _onDragClasses: function(t, e, n) {
            var i = n ? "mCSB_dragger_onDrag_expanded": "", s = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag"], o = t.closest(".mCSB_scrollTools");
            "active" === e ? (t.toggleClass(s[0] + " " + i), o.toggleClass(s[1]), t[0]._draggable = t[0]._draggable ? 0 : 1) : t[0]._draggable || ("hide" === e ? (t.removeClass(s[0]), o.removeClass(s[1])) : (t.addClass(s[0]), o.addClass(s[1])))
        },
        _overflowed: function() {
            var e = t(this), i = e.data(n), s = t("#mCSB_" + i.idx), o = t("#mCSB_" + i.idx + "_container"), r = null == i.overflowed ? o.height(): o.outerHeight(!1), a = null == i.overflowed ? o.width(): o.outerWidth(!1);
            return [r > s.height(), a > s.width()]
        },
        _resetContentPosition: function() {
            var e = t(this), i = e.data(n), s = i.opt, o = t("#mCSB_" + i.idx), r = t("#mCSB_" + i.idx + "_container"), a = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")];
            if (d._stop(e), ("x" !== s.axis&&!i.overflowed[0] || "y" === s.axis && i.overflowed[0]) && a[0].add(r).css("top", 0), "y" !== s.axis&&!i.overflowed[1] || "x" === s.axis && i.overflowed[1]) {
                var l = dx = 0;
                "rtl" === i.langDir && (l = o.width() - r.outerWidth(!1), dx = Math.abs(l / i.scrollRatio.x)), r.css("left", l), a[1].css("left", dx)
            }
        },
        _bindEvents: function() {
            function e() {
                r = setTimeout(function() {
                    t.event.special.mousewheel ? (clearTimeout(r), d._mousewheel.call(i[0])) : e()
                }, 1e3)
            }
            var i = t(this), s = i.data(n), o = s.opt;
            if (!s.bindEvents) {
                if (d._draggable.call(this), o.contentTouchScroll && d._contentDraggable.call(this), o.mouseWheel.enable) {
                    var r;
                    e()
                }
                d._draggerRail.call(this), d._wrapperScroll.call(this), o.advanced.autoScrollOnFocus && d._focus.call(this), o.scrollButtons.enable && d._buttons.call(this), o.keyboard.enable && d._keyboard.call(this), s.bindEvents=!0
            }
        },
        _unbindEvents: function() {
            var e = t(this), i = e.data(n), s = n + "_" + i.idx, o = ".mCSB_" + i.idx + "_scrollbar", r = t("#mCSB_" + i.idx + ",#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper," + o + " .mCSB_draggerContainer,#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal," + o + ">a"), a = t("#mCSB_" + i.idx + "_container");
            i.bindEvents && (t(document).unbind("." + s), r.each(function() {
                t(this).unbind("." + s)
            }), clearTimeout(e[0]._focusTimeout), d._delete.call(null, e[0]._focusTimeout), clearTimeout(i.sequential.step), d._delete.call(null, i.sequential.step), clearTimeout(a[0].onCompleteTimeout), d._delete.call(null, a[0].onCompleteTimeout), i.bindEvents=!1)
        },
        _scrollbarVisibility: function(e) {
            var i = t(this), s = i.data(n), o = s.opt, r = t("#mCSB_" + s.idx + "_container_wrapper"), a = r.length ? r: t("#mCSB_" + s.idx + "_container"), l = [t("#mCSB_" + s.idx + "_scrollbar_vertical"), t("#mCSB_" + s.idx + "_scrollbar_horizontal")], u = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
            "x" !== o.axis && (s.overflowed[0]&&!e ? (l[0].add(u[0]).add(l[0].children("a")).css("display", "block"), a.removeClass("mCS_no_scrollbar_y mCS_y_hidden")) : (o.alwaysShowScrollbar ? (2 !== o.alwaysShowScrollbar && u[0].add(l[0].children("a")).css("display", "none"), a.removeClass("mCS_y_hidden")) : (l[0].css("display", "none"), a.addClass("mCS_y_hidden")), a.addClass("mCS_no_scrollbar_y"))), "y" !== o.axis && (s.overflowed[1]&&!e ? (l[1].add(u[1]).add(l[1].children("a")).css("display", "block"), a.removeClass("mCS_no_scrollbar_x mCS_x_hidden")) : (o.alwaysShowScrollbar ? (2 !== o.alwaysShowScrollbar && u[1].add(l[1].children("a")).css("display", "none"), a.removeClass("mCS_x_hidden")) : (l[1].css("display", "none"), a.addClass("mCS_x_hidden")), a.addClass("mCS_no_scrollbar_x"))), s.overflowed[0] || s.overflowed[1] ? i.removeClass("mCS_no_scrollbar") : i.addClass("mCS_no_scrollbar")
        },
        _coordinates: function(t) {
            var e = t.type;
            switch (e) {
            case"pointerdown":
            case"MSPointerDown":
            case"pointermove":
            case"MSPointerMove":
            case"pointerup":
            case"MSPointerUp":
                return [t.originalEvent.pageY, t.originalEvent.pageX];
            case"touchstart":
            case"touchmove":
            case"touchend":
                var n = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0];
                return [n.pageY, n.pageX];
            default:
                return [t.pageY, t.pageX]
            }
        },
        _draggable: function() {
            function e(t) {
                var e = m.find("iframe");
                if (e.length) {
                    var n = t ? "auto": "none";
                    e.css("pointer-events", n)
                }
            }
            function i(t, e, n, i) {
                if (m[0].idleTimer = h.scrollInertia < 233 ? 250 : 0, s.attr("id") === f[1])
                    var o = "x", r = (s[0].offsetLeft - e + i) * c.scrollRatio.x;
                else 
                    var o = "y", r = (s[0].offsetTop - t + n) * c.scrollRatio.y;
                d._scrollTo(a, r.toString(), {
                    dir: o,
                    drag: !0
                })
            }
            var s, o, r, a = t(this), c = a.data(n), h = c.opt, p = n + "_" + c.idx, f = ["mCSB_" + c.idx + "_dragger_vertical", "mCSB_" + c.idx + "_dragger_horizontal"], m = t("#mCSB_" + c.idx + "_container"), g = t("#" + f[0] + ",#" + f[1]);
            g.bind("mousedown." + p + " touchstart." + p + " pointerdown." + p + " MSPointerDown." + p, function(n) {
                if (n.stopImmediatePropagation(), n.preventDefault(), d._mouseBtnLeft(n)) {
                    u=!0, l && (document.onselectstart = function() {
                        return !1
                    }), e(!1), d._stop(a), s = t(this);
                    var i = s.offset(), c = d._coordinates(n)[0] - i.top, p = d._coordinates(n)[1] - i.left, f = s.height() + i.top, m = s.width() + i.left;
                    f > c && c > 0 && m > p && p > 0 && (o = c, r = p), d._onDragClasses(s, "active", h.autoExpandScrollbar)
                }
            }).bind("touchmove." + p, function(t) {
                t.stopImmediatePropagation(), t.preventDefault();
                var e = s.offset(), n = d._coordinates(t)[0] - e.top, a = d._coordinates(t)[1] - e.left;
                i(o, r, n, a)
            }), t(document).bind("mousemove." + p + " pointermove." + p + " MSPointerMove." + p, function(t) {
                if (s) {
                    var e = s.offset(), n = d._coordinates(t)[0] - e.top, a = d._coordinates(t)[1] - e.left;
                    if (o === n)
                        return;
                    i(o, r, n, a)
                }
            }).add(g).bind("mouseup." + p + " touchend." + p + " pointerup." + p + " MSPointerUp." + p, function() {
                s && (d._onDragClasses(s, "active", h.autoExpandScrollbar), s = null), u=!1, l && (document.onselectstart = null), e(!0)
            })
        },
        _contentDraggable: function() {
            function e(t, e) {
                var n = [1.5 * e, 2 * e, e / 1.5, e / 2];
                return t > 90 ? e > 4 ? n[0] : n[3] : t > 60 ? e > 3 ? n[3] : n[2] : t > 30 ? e > 8 ? n[1] : e > 6 ? n[0] : e > 4 ? e : n[2] : e > 8 ? e : n[3]
            }
            function i(t, e, n, i, s, o) {
                t && d._scrollTo(v, t.toString(), {
                    dur: e,
                    scrollEasing: n,
                    dir: i,
                    overwrite: s,
                    drag: o
                })
            }
            var s, o, r, a, l, c, h, p, f, m, g, v = t(this), y = v.data(n), _ = y.opt, w = n + "_" + y.idx, b = t("#mCSB_" + y.idx), S = t("#mCSB_" + y.idx + "_container"), x = [t("#mCSB_" + y.idx + "_dragger_vertical"), t("#mCSB_" + y.idx + "_dragger_horizontal")], T = [], k = [], C = 0, M = "yx" === _.axis ? "none": "all";
            S.bind("touchstart." + w + " pointerdown." + w + " MSPointerDown." + w, function(t) {
                if (d._pointerTouch(t)&&!u) {
                    var e = S.offset();
                    s = d._coordinates(t)[0] - e.top, o = d._coordinates(t)[1] - e.left
                }
            }).bind("touchmove." + w + " pointermove." + w + " MSPointerMove." + w, function(t) {
                if (d._pointerTouch(t)&&!u) {
                    t.stopImmediatePropagation(), c = d._getTime();
                    var e = b.offset(), n = d._coordinates(t)[0] - e.top, r = d._coordinates(t)[1] - e.left, a = "mcsLinearOut";
                    if (T.push(n), k.push(r), y.overflowed[0])
                        var l = x[0].parent().height() - x[0].height(), h = s - n > 0 && n - s>-(l * y.scrollRatio.y);
                    if (y.overflowed[1])
                        var p = x[1].parent().width() - x[1].width(), f = o - r > 0 && r - o>-(p * y.scrollRatio.x);
                    (h || f) && t.preventDefault(), m = "yx" === _.axis ? [s - n, o - r] : "x" === _.axis ? [null, o - r] : [s - n, null], S[0].idleTimer = 250, y.overflowed[0] && i(m[0], C, a, "y", "all", !0), y.overflowed[1] && i(m[1], C, a, "x", M, !0)
                }
            }), b.bind("touchstart." + w + " pointerdown." + w + " MSPointerDown." + w, function(t) {
                if (d._pointerTouch(t)&&!u) {
                    t.stopImmediatePropagation(), d._stop(v), l = d._getTime();
                    var e = b.offset();
                    r = d._coordinates(t)[0] - e.top, a = d._coordinates(t)[1] - e.left, T = [], k = []
                }
            }).bind("touchend." + w + " pointerup." + w + " MSPointerUp." + w, function(t) {
                if (d._pointerTouch(t)&&!u) {
                    t.stopImmediatePropagation(), h = d._getTime();
                    var n = b.offset(), s = d._coordinates(t)[0] - n.top, o = d._coordinates(t)[1] - n.left;
                    if (!(h - c > 30)) {
                        f = 1e3 / (h - l);
                        var v = "mcsEaseOut", w = 2.5 > f, x = w ? [T[T.length - 2], k[k.length - 2]]: [0, 0];
                        p = w ? [s - x[0], o - x[1]] : [s - r, o - a];
                        var C = [Math.abs(p[0]), Math.abs(p[1])];
                        f = w ? [Math.abs(p[0] / 4), Math.abs(p[1] / 4)] : [f, f];
                        var P = [Math.abs(S[0].offsetTop) - p[0] * e(C[0] / f[0], f[0]), Math.abs(S[0].offsetLeft) - p[1] * e(C[1] / f[1], f[1])];
                        m = "yx" === _.axis ? [P[0], P[1]] : "x" === _.axis ? [null, P[1]] : [P[0], null], g = [4 * C[0] + _.scrollInertia, 4 * C[1] + _.scrollInertia];
                        var D = parseInt(_.contentTouchScroll) || 0;
                        m[0] = C[0] > D ? m[0] : 0, m[1] = C[1] > D ? m[1] : 0, y.overflowed[0] && i(m[0], g[0], v, "y", M, !1), y.overflowed[1] && i(m[1], g[1], v, "x", M, !1)
                    }
                }
            })
        },
        _mousewheel: function() {
            var e = t(this), i = e.data(n), s = i.opt, o = n + "_" + i.idx, r = t("#mCSB_" + i.idx), a = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")];
            r.bind("mousewheel." + o, function(n, o) {
                if (d._stop(e), !d._disableMousewheel(e, n.target)) {
                    var u = "auto" !== s.mouseWheel.deltaFactor ? parseInt(s.mouseWheel.deltaFactor): l && n.deltaFactor < 100 ? 100: n.deltaFactor < 40 ? 40: n.deltaFactor || 100;
                    if ("x" === s.axis || "x" === s.mouseWheel.axis)
                        var c = "x", h = [Math.round(u * i.scrollRatio.x), parseInt(s.mouseWheel.scrollAmount)], p = "auto" !== s.mouseWheel.scrollAmount ? h[1]: h[0] >= r.width() ? .9 * r.width(): h[0], f = Math.abs(t("#mCSB_" + i.idx + "_container")[0].offsetLeft), m = a[1][0].offsetLeft, g = a[1].parent().width() - a[1].width(), v = n.deltaX || n.deltaY || o;
                    else 
                        var c = "y", h = [Math.round(u * i.scrollRatio.y), parseInt(s.mouseWheel.scrollAmount)], p = "auto" !== s.mouseWheel.scrollAmount ? h[1]: h[0] >= r.height() ? .9 * r.height(): h[0], f = Math.abs(t("#mCSB_" + i.idx + "_container")[0].offsetTop), m = a[0][0].offsetTop, g = a[0].parent().height() - a[0].height(), v = n.deltaY || o;
                    "y" === c&&!i.overflowed[0] || "x" === c&&!i.overflowed[1] || (s.mouseWheel.invert && (v =- v), s.mouseWheel.normalizeDelta && (v = 0 > v?-1 : 1), (v > 0 && 0 !== m || 0 > v && m !== g || s.mouseWheel.preventDefault) && (n.stopImmediatePropagation(), n.preventDefault()), d._scrollTo(e, (f - v * p).toString(), {
                        dir: c
                    }))
                }
            })
        },
        _disableMousewheel: function(e, i) {
            var s = i.nodeName.toLowerCase(), o = e.data(n).opt.mouseWheel.disableOver, r = ["select", "textarea"];
            return t.inArray(s, o)>-1&&!(t.inArray(s, r)>-1&&!t(i).is(":focus"))
        },
        _draggerRail: function() {
            var e = t(this), i = e.data(n), s = n + "_" + i.idx, o = t("#mCSB_" + i.idx + "_container"), r = o.parent(), a = t(".mCSB_" + i.idx + "_scrollbar .mCSB_draggerContainer");
            a.bind("touchstart." + s + " pointerdown." + s + " MSPointerDown." + s, function() {
                u=!0
            }).bind("touchend." + s + " pointerup." + s + " MSPointerUp." + s, function() {
                u=!1
            }).bind("click." + s, function(n) {
                if (t(n.target).hasClass("mCSB_draggerContainer") || t(n.target).hasClass("mCSB_draggerRail")) {
                    d._stop(e);
                    var s = t(this), a = s.find(".mCSB_dragger");
                    if (s.parent(".mCSB_scrollTools_horizontal").length > 0) {
                        if (!i.overflowed[1])
                            return;
                        var l = "x", u = n.pageX > a.offset().left?-1 : 1, c = Math.abs(o[0].offsetLeft) - .9 * u * r.width()
                    } else {
                        if (!i.overflowed[0])
                            return;
                        var l = "y", u = n.pageY > a.offset().top?-1 : 1, c = Math.abs(o[0].offsetTop) - .9 * u * r.height()
                    }
                    d._scrollTo(e, c.toString(), {
                        dir: l,
                        scrollEasing: "mcsEaseInOut"
                    })
                }
            })
        },
        _focus: function() {
            var e = t(this), i = e.data(n), s = i.opt, o = n + "_" + i.idx, r = t("#mCSB_" + i.idx + "_container"), a = r.parent();
            r.bind("focusin." + o, function() {
                var n = t(document.activeElement), i = r.find(".mCustomScrollBox").length, o = 0;
                n.is(s.advanced.autoScrollOnFocus) && (d._stop(e), clearTimeout(e[0]._focusTimeout), e[0]._focusTimer = i ? (o + 17) * i : 0, e[0]._focusTimeout = setTimeout(function() {
                    var t = [n.offset().top - r.offset().top, n.offset().left - r.offset().left], i = [r[0].offsetTop, r[0].offsetLeft], l = [i[0] + t[0] >= 0 && i[0] + t[0] < a.height() - n.outerHeight(!1), i[1] + t[1] >= 0 && i[0] + t[1] < a.width() - n.outerWidth(!1)], u = "yx" !== s.axis || l[0] || l[1] ? "all": "none";
                    "x" === s.axis || l[0] || d._scrollTo(e, t[0].toString(), {
                        dir: "y",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: u,
                        dur: o
                    }), "y" === s.axis || l[1] || d._scrollTo(e, t[1].toString(), {
                        dir: "x",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: u,
                        dur: o
                    })
                }, e[0]._focusTimer))
            })
        },
        _wrapperScroll: function() {
            var e = t(this), i = e.data(n), s = n + "_" + i.idx, o = t("#mCSB_" + i.idx + "_container").parent();
            o.bind("scroll." + s, function() {
                o.scrollTop(0).scrollLeft(0)
            })
        },
        _buttons: function() {
            var e = t(this), i = e.data(n), s = i.opt, o = i.sequential, r = n + "_" + i.idx, a = (t("#mCSB_" + i.idx + "_container"), ".mCSB_" + i.idx + "_scrollbar"), l = t(a + ">a");
            l.bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function(n) {
                function r(t, n) {
                    o.scrollAmount = s.snapAmount || s.scrollButtons.scrollAmount, d._sequentialScroll.call(this, e, t, n)
                }
                if (n.preventDefault(), d._mouseBtnLeft(n)) {
                    var a = t(this).attr("class");
                    switch (o.type = s.scrollButtons.scrollType, n.type) {
                    case"mousedown":
                    case"touchstart":
                    case"pointerdown":
                    case"MSPointerDown":
                        if ("stepped" === o.type)
                            return;
                        u=!0, i.tweenRunning=!1, r("on", a);
                        break;
                    case"mouseup":
                    case"touchend":
                    case"pointerup":
                    case"MSPointerUp":
                    case"mouseout":
                    case"pointerout":
                    case"MSPointerOut":
                        if ("stepped" === o.type)
                            return;
                        u=!1, o.dir && r("off", a);
                        break;
                    case"click":
                        if ("stepped" !== o.type || i.tweenRunning)
                            return;
                        r("on", a)
                    }
                }
            })
        },
        _keyboard: function() {
            var e = t(this), i = e.data(n), s = i.opt, o = i.sequential, r = n + "_" + i.idx, a = t("#mCSB_" + i.idx), l = t("#mCSB_" + i.idx + "_container"), u = l.parent(), c = "input,textarea,select,datalist,keygen,[contenteditable='true']";
            a.attr("tabindex", "0").bind("blur." + r + " keydown." + r + " keyup." + r, function(n) {
                function r(t, n) {
                    o.type = s.keyboard.scrollType, o.scrollAmount = s.snapAmount || s.keyboard.scrollAmount, "stepped" === o.type && i.tweenRunning || d._sequentialScroll.call(this, e, t, n)
                }
                switch (n.type) {
                case"blur":
                    i.tweenRunning && o.dir && r("off", null);
                    break;
                case"keydown":
                case"keyup":
                    var a = n.keyCode ? n.keyCode: n.which, h = "on";
                    if ("x" !== s.axis && (38 === a || 40 === a) || "y" !== s.axis && (37 === a || 39 === a)) {
                        if ((38 === a || 40 === a)&&!i.overflowed[0] || (37 === a || 39 === a)&&!i.overflowed[1])
                            return;
                        "keyup" === n.type && (h = "off"), t(document.activeElement).is(c) || (n.preventDefault(), n.stopImmediatePropagation(), r(h, a))
                    } else if (33 === a || 34 === a) {
                        if ((i.overflowed[0] || i.overflowed[1]) && (n.preventDefault(), n.stopImmediatePropagation()), "keyup" === n.type) {
                            d._stop(e);
                            var p = 34 === a?-1 : 1;
                            if ("x" === s.axis || "yx" === s.axis && i.overflowed[1]&&!i.overflowed[0])
                                var f = "x", m = Math.abs(l[0].offsetLeft) - .9 * p * u.width();
                            else 
                                var f = "y", m = Math.abs(l[0].offsetTop) - .9 * p * u.height();
                            d._scrollTo(e, m.toString(), {
                                dir: f,
                                scrollEasing: "mcsEaseInOut"
                            })
                        }
                    } else if ((35 === a || 36 === a)&&!t(document.activeElement).is(c) && ((i.overflowed[0] || i.overflowed[1]) && (n.preventDefault(), n.stopImmediatePropagation()), "keyup" === n.type)) {
                        if ("x" === s.axis || "yx" === s.axis && i.overflowed[1]&&!i.overflowed[0])
                            var f = "x", m = 35 === a ? Math.abs(u.width() - l.outerWidth(!1)): 0;
                        else 
                            var f = "y", m = 35 === a ? Math.abs(u.height() - l.outerHeight(!1)): 0;
                        d._scrollTo(e, m.toString(), {
                            dir: f,
                            scrollEasing: "mcsEaseInOut"
                        })
                    }
                }
            })
        },
        _sequentialScroll: function(e, i, s) {
            function o(t) {
                var n = "stepped" !== u.type, i = t ? n ? l.scrollInertia / 1.5: l.scrollInertia: 1e3 / 60, s = t ? n ? 7.5: 40: 2.5, r = [Math.abs(c[0].offsetTop), Math.abs(c[0].offsetLeft)], h = [a.scrollRatio.y > 10 ? 10: a.scrollRatio.y, a.scrollRatio.x > 10 ? 10: a.scrollRatio.x], p = "x" === u.dir[0] ? r[1] + u.dir[1] * h[1] * s: r[0] + u.dir[1] * h[0] * s, f = "x" === u.dir[0] ? r[1] + u.dir[1] * parseInt(u.scrollAmount): r[0] + u.dir[1] * parseInt(u.scrollAmount), m = "auto" !== u.scrollAmount ? f: p, g = t ? n ? "mcsLinearOut": "mcsEaseInOut": "mcsLinear", v = t?!0 : !1;
                return t && 17 > i && (m = "x" === u.dir[0] ? r[1] : r[0]), d._scrollTo(e, m.toString(), {
                    dir: u.dir[0],
                    scrollEasing: g,
                    dur: i,
                    onComplete: v
                }), t ? void(u.dir=!1) : (clearTimeout(u.step), void(u.step = setTimeout(function() {
                    o()
                }, i)))
            }
            function r() {
                clearTimeout(u.step), d._stop(e)
            }
            var a = e.data(n), l = a.opt, u = a.sequential, c = t("#mCSB_" + a.idx + "_container"), h = "stepped" === u.type?!0 : !1;
            switch (i) {
            case"on":
                if (u.dir = ["mCSB_buttonRight" === s || "mCSB_buttonLeft" === s || 39 === s || 37 === s ? "x": "y", "mCSB_buttonUp" === s || "mCSB_buttonLeft" === s || 38 === s || 37 === s?-1: 1], d._stop(e), d._isNumeric(s) && "stepped" === u.type)
                    return;
                o(h);
                break;
            case"off":
                r(), (h || a.tweenRunning && u.dir) && o(!0)
            }
        },
        _arr: function(e) {
            var i = t(this).data(n).opt, s = [];
            return "function" == typeof e && (e = e()), e instanceof Array ? s = e.length > 1 ? [e[0], e[1]] : "x" === i.axis ? [null, e[0]] : [e[0], null] : (s[0] = e.y ? e.y : e.x || "x" === i.axis ? null : e, s[1] = e.x ? e.x : e.y || "y" === i.axis ? null : e), "function" == typeof s[0] && (s[0] = s[0]()), "function" == typeof s[1] && (s[1] = s[1]()), s
        },
        _to: function(e, i) {
            if (null != e && "undefined" != typeof e) {
                var s = t(this), o = s.data(n), r = o.opt, a = t("#mCSB_" + o.idx + "_container"), l = a.parent(), u = typeof e;
                i || (i = "x" === r.axis ? "x" : "y");
                var h = "x" === i ? a.outerWidth(!1): a.outerHeight(!1), p = "x" === i ? a.offset().left: a.offset().top, f = "x" === i ? a[0].offsetLeft: a[0].offsetTop, m = "x" === i ? "left": "top";
                switch (u) {
                case"function":
                    return e();
                case"object":
                    if (e.nodeType)
                        var g = "x" === i ? t(e).offset().left: t(e).offset().top;
                    else if (e.jquery) {
                        if (!e.length)
                            return;
                        var g = "x" === i ? e.offset().left: e.offset().top
                    }
                    return g - p;
                case"string":
                case"number":
                    if (d._isNumeric.call(null, e))
                        return Math.abs(e);
                    if ( - 1 !== e.indexOf("%"))
                        return Math.abs(h * parseInt(e) / 100);
                    if ( - 1 !== e.indexOf("-="))
                        return Math.abs(f - parseInt(e.split("-=")[1]));
                    if ( - 1 !== e.indexOf("+=")) {
                        var v = f + parseInt(e.split("+=")[1]);
                        return v >= 0 ? 0 : Math.abs(v)
                    }
                    if ( - 1 !== e.indexOf("px") && d._isNumeric.call(null, e.split("px")[0]))
                        return Math.abs(e.split("px")[0]);
                    if ("top" === e || "left" === e)
                        return 0;
                    if ("bottom" === e)
                        return Math.abs(l.height() - a.outerHeight(!1));
                    if ("right" === e)
                        return Math.abs(l.width() - a.outerWidth(!1));
                    if ("first" === e || "last" === e) {
                        var y = a.find(":" + e), g = "x" === i ? t(y).offset().left: t(y).offset().top;
                        return g - p
                    }
                    if (t(e).length) {
                        var g = "x" === i ? t(e).offset().left: t(e).offset().top;
                        return g - p
                    }
                    return a.css(m, e), void c.update.call(null, s[0])
                }
            }
        },
        _autoUpdate: function(e) {
            function i() {
                clearTimeout(p[0].autoUpdate), p[0].autoUpdate = setTimeout(function() {
                    return h.advanced.updateOnSelectorChange && (f = r(), f !== w) ? (a(), void(w = f)) : (h.advanced.updateOnContentResize && (m = [p.outerHeight(!1), p.outerWidth(!1), v.height(), v.width(), _()[0], _()[1]], (m[0] !== b[0] || m[1] !== b[1] || m[2] !== b[2] || m[3] !== b[3] || m[4] !== b[4] || m[5] !== b[5]) && (a(), b = m)), h.advanced.updateOnImageLoad && (g = s(), g !== S && (p.find("img").each(function() {
                        o(this.src)
                    }), S = g)), void((h.advanced.updateOnSelectorChange || h.advanced.updateOnContentResize || h.advanced.updateOnImageLoad) && i()))
                }, 60)
            }
            function s() {
                var t = 0;
                return h.advanced.updateOnImageLoad && (t = p.find("img").length), t
            }
            function o(t) {
                function e(t, e) {
                    return function() {
                        return e.apply(t, arguments)
                    }
                }
                function n() {
                    this.onload = null, a()
                }
                var i = new Image;
                i.onload = e(i, n), i.src = t
            }
            function r() {
                h.advanced.updateOnSelectorChange===!0 && (h.advanced.updateOnSelectorChange = "*");
                var e = 0, n = p.find(h.advanced.updateOnSelectorChange);
                return h.advanced.updateOnSelectorChange && n.length > 0 && n.each(function() {
                    e += t(this).height() + t(this).width()
                }), e
            }
            function a() {
                clearTimeout(p[0].autoUpdate), c.update.call(null, l[0])
            }
            var l = t(this), u = l.data(n), h = u.opt, p = t("#mCSB_" + u.idx + "_container");
            if (e)
                return clearTimeout(p[0].autoUpdate), void d._delete.call(null, p[0].autoUpdate);
            var f, m, g, v = p.parent(), y = [t("#mCSB_" + u.idx + "_scrollbar_vertical"), t("#mCSB_" + u.idx + "_scrollbar_horizontal")], _ = function() {
                return [y[0].is(":visible") ? y[0].outerHeight(!0): 0, y[1].is(":visible") ? y[1].outerWidth(!0): 0]
            }, w = r(), b = [p.outerHeight(!1), p.outerWidth(!1), v.height(), v.width(), _()[0], _()[1]], S = s();
            i()
        },
        _snapAmount: function(t, e, n) {
            return Math.round(t / e) * e - n
        },
        _stop: function(e) {
            var i = e.data(n), s = t("#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper,#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal");
            s.each(function() {
                d._stopTween.call(this)
            })
        },
        _scrollTo: function(e, i, s) {
            function o(t) {
                return l && u.callbacks[t] && "function" == typeof u.callbacks[t]
            }
            function r() {
                return [u.callbacks.alwaysTriggerOffsets || _ >= w[0] + S, u.callbacks.alwaysTriggerOffsets||-x >= _]
            }
            function a() {
                var t = [f[0].offsetTop, f[0].offsetLeft], n = [v[0].offsetTop, v[0].offsetLeft], i = [f.outerHeight(!1), f.outerWidth(!1)], o = [p.height(), p.width()];
                e[0].mcs = {
                    content: f,
                    top: t[0],
                    left: t[1],
                    draggerTop: n[0],
                    draggerLeft: n[1],
                    topPct: Math.round(100 * Math.abs(t[0]) / (Math.abs(i[0]) - o[0])),
                    leftPct: Math.round(100 * Math.abs(t[1]) / (Math.abs(i[1]) - o[1])),
                    direction: s.dir
                }
            }
            var l = e.data(n), u = l.opt, c = {
                trigger: "internal",
                dir: "y",
                scrollEasing: "mcsEaseOut",
                drag: !1,
                dur: u.scrollInertia,
                overwrite: "all",
                callbacks: !0,
                onStart: !0,
                onUpdate: !0,
                onComplete: !0
            }, s = t.extend(c, s), h = [s.dur, s.drag ? 0: s.dur], p = t("#mCSB_" + l.idx), f = t("#mCSB_" + l.idx + "_container"), m = u.callbacks.onTotalScrollOffset ? d._arr.call(e, u.callbacks.onTotalScrollOffset): [0, 0], g = u.callbacks.onTotalScrollBackOffset ? d._arr.call(e, u.callbacks.onTotalScrollBackOffset): [0, 0];
            switch (l.trigger = s.trigger, u.snapAmount && (i = d._snapAmount(i, u.snapAmount, u.snapOffset)), s.dir) {
            case"x":
                var v = t("#mCSB_" + l.idx + "_dragger_horizontal"), y = "left", _ = f[0].offsetLeft, w = [p.width() - f.outerWidth(!1), v.parent().width() - v.width()], b = [i, i / l.scrollRatio.x], S = m[1], x = g[1], T = S > 0 ? S / l.scrollRatio.x: 0, k = x > 0 ? x / l.scrollRatio.x: 0;
                break;
            case"y":
                var v = t("#mCSB_" + l.idx + "_dragger_vertical"), y = "top", _ = f[0].offsetTop, w = [p.height() - f.outerHeight(!1), v.parent().height() - v.height()], b = [i, i / l.scrollRatio.y], S = m[0], x = g[0], T = S > 0 ? S / l.scrollRatio.y: 0, k = x > 0 ? x / l.scrollRatio.y: 0
            }
            b[1] < 0 ? b = [0, 0] : b[1] >= w[1] ? b = [w[0], w[1]] : b[0] =- b[0], clearTimeout(f[0].onCompleteTimeout), (l.tweenRunning ||!(0 === _ && b[0] >= 0 || _ === w[0] && b[0] <= w[0])) && (d._tweenTo.call(null, v[0], y, Math.round(b[1]), h[1], s.scrollEasing), d._tweenTo.call(null, f[0], y, Math.round(b[0]), h[0], s.scrollEasing, s.overwrite, {
                onStart: function() {
                    s.callbacks && s.onStart&&!l.tweenRunning && (o("onScrollStart") && (a(), u.callbacks.onScrollStart.call(e[0])), l.tweenRunning=!0, d._onDragClasses(v), l.cbOffsets = r())
                },
                onUpdate: function() {
                    s.callbacks && s.onUpdate && o("whileScrolling") && (a(), u.callbacks.whileScrolling.call(e[0]))
                },
                onComplete: function() {
                    if (s.callbacks && s.onComplete) {
                        "yx" === u.axis && clearTimeout(f[0].onCompleteTimeout);
                        var t = f[0].idleTimer || 0;
                        f[0].onCompleteTimeout = setTimeout(function() {
                            o("onScroll") && (a(), u.callbacks.onScroll.call(e[0])), o("onTotalScroll") && b[1] >= w[1] - T && l.cbOffsets[0] && (a(), u.callbacks.onTotalScroll.call(e[0])), o("onTotalScrollBack") && b[1] <= k && l.cbOffsets[1] && (a(), u.callbacks.onTotalScrollBack.call(e[0])), l.tweenRunning=!1, f[0].idleTimer = 0, d._onDragClasses(v, "hide")
                        }, t)
                    }
                }
            }))
        },
        _tweenTo: function(t, e, n, i, s, o, r) {
            function a() {
                t._mcsstop || (y || f.call(), y = d._getTime() - v, l(), y >= t._mcstime && (t._mcstime = y > t._mcstime ? y + p - (y - t._mcstime) : y + p - 1, t._mcstime < y + 1 && (t._mcstime = y + 1)), t._mcstime < i ? t._mcsid = _request(a) : g.call())
            }
            function l() {
                i > 0 ? (t._mcscurrVal = h(t._mcstime, _, b, i, s), w[e] = Math.round(t._mcscurrVal) + "px") : w[e] = n + "px", m.call()
            }
            function u() {
                p = 1e3 / 60, t._mcstime = y + p, _request = window.requestAnimationFrame ? window.requestAnimationFrame : function(t) {
                    return l(), setTimeout(t, .01)
                }, t._mcsid = _request(a)
            }
            function c() {
                null != t._mcsid && (window.requestAnimationFrame ? window.cancelAnimationFrame(t._mcsid) : clearTimeout(t._mcsid), t._mcsid = null)
            }
            function h(t, e, n, i, s) {
                switch (s) {
                case"linear":
                case"mcsLinear":
                    return n * t / i + e;
                case"mcsLinearOut":
                    return t/=i, t--, n * Math.sqrt(1 - t * t) + e;
                case"easeInOutSmooth":
                    return t/=i / 2, 1 > t ? n / 2 * t * t + e : (t--, - n / 2 * (t * (t - 2) - 1) + e);
                case"easeInOutStrong":
                    return t/=i / 2, 1 > t ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : (t--, n / 2 * ( - Math.pow(2, - 10 * t) + 2) + e);
                case"easeInOut":
                case"mcsEaseInOut":
                    return t/=i / 2, 1 > t ? n / 2 * t * t * t + e : (t -= 2, n / 2 * (t * t * t + 2) + e);
                case"easeOutSmooth":
                    return t/=i, t--, - n * (t * t * t * t - 1) + e;
                case"easeOutStrong":
                    return n * ( - Math.pow(2, - 10 * t / i) + 1) + e;
                case"easeOut":
                case"mcsEaseOut":
                default:
                    var o = (t/=i) * t, r = o * t;
                    return e + n * (.499999999999997 * r * o +- 2.5 * o * o + 5.5 * r +- 6.5 * o + 4 * t)
                }
            }
            var p, r = r || {}, f = r.onStart || function() {}, m = r.onUpdate || function() {}, g = r.onComplete || function() {}, v = d._getTime(), y = 0, _ = t.offsetTop, w = t.style;
            "left" === e && (_ = t.offsetLeft);
            var b = n - _;
            t._mcsstop = 0, "none" !== o && c(), u()
        },
        _getTime: function() {
            return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
        },
        _stopTween: function() {
            var t = this;
            null != t._mcsid && (window.requestAnimationFrame ? window.cancelAnimationFrame(t._mcsid) : clearTimeout(t._mcsid), t._mcsid = null, t._mcsstop = 1)
        },
        _delete: function(t) {
            try {
                delete t
            } catch (e) {
                t = null
            }
        },
        _mouseBtnLeft: function(t) {
            return !(t.which && 1 !== t.which)
        },
        _pointerTouch: function(t) {
            var e = t.originalEvent.pointerType;
            return !(e && "touch" !== e && 2 !== e)
        },
        _isNumeric: function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }
    }, h = "https:" == document.location.protocol ? "https:" : "http:";
    t.event.special.mousewheel || t("head").append(decodeURI("%3Cscript src=" + h + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.11/jquery.mousewheel.min.js%3E%3C/script%3E")), t.fn[e] = function(e) {
        return c[e] ? c[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist") : c.init.apply(this, arguments)
    }, t[e] = function(e) {
        return c[e] ? c[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist") : c.init.apply(this, arguments)
    }, t[e].defaults = s, window[e]=!0, t(window).load(function() {
        t(i)[e]()
    })
}), define("text!portal/templates/portal.ejs.html", [], function() {
    return '<div>\n  <header class="portal-header">\n    <span class="updates-available-message">Scroll to the top</span>\n    <h4>Watching</h4>\n    <span class="updates-available"></span>\n  </header>\n  <div class="portal-posts-frame expanded">\n    <ul class="portal-posts-list"></ul>\n  </div>\n  <div class="styles-indicator"></div>\n  <footer class="portal-footer">\n    <p><a href="https://jfe.qualtrics.com/form/SV_42CUIzSVlPxLfFj">Send Feedback</a></p>\n  </footer>\n</div>'
}), define("text!portal/templates/daybreak.ejs.html", [], function() {
    return '<li class="day-break">\n  <time datetime="<%= date_published %>"><%= formatted_date %></time>\n</li>'
}), define("text!portal/templates/about_message.ejs.html", [], function() {
    return '<li class="<%= className %>">\n  <span>This is Watching, a feature that highlights developing news from around the web. <a href="https://jfe.qualtrics.com/form/SV_42CUIzSVlPxLfFj">Send your feedback.</a></span>\n</li>'
}), define("portal/views/main", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "portal/views/base", "undercut", "portal/views/post", "moment", "detect", "portal/models/session", "portal/collections/players", "foundation/views/page-manager", "jquery.mousewheel", "jquery.mCustomScrollbar", "text!portal/templates/portal.ejs.html", "text!portal/templates/daybreak.ejs.html", "text!portal/templates/about_message.ejs.html"], function(t, e, n, i, s, o, r, a, l, u, c, d, h, p, f, m) {
    var g = {
        frame: ".portal-posts-frame",
        updates: ".updates-available",
        header: ".portal-header",
        daybreak: ".day-break",
        post: "li." + o.className,
        loadingPost: ".portal-post-loading",
        aboutPost: ".portal-post-about"
    }, v = i.extend({
        events: {
            "click .portal-posts-list li.portal-post": "delegateToPost",
            "mouseover .portal-posts-list li.portal-post": "delegateToPost",
            "mouseout .portal-posts-list li.portal-post": "delegateToPost",
            "click header": "scrollToTop"
        },
        initialize: function(i) {
            this.options = e.defaults(i || {}, {
                displayImages: !0,
                nytapp: null
            }), e.bindAll(this, "renderPosts", "addPost", "removePost", "applyWaitingUpdates", "setupScrolling", "refreshScrollPane"), this.posts = this.options.posts, this.$posts = t(), this.session = new l({
                key: "nyt-watching-posts"
            }), this.postViews = {}, this.PostViewClass = o, this.players = new u, this.lastLatest = this.session.get("latestPost"), this.lastViewed = this.session.get("lastViewed"), this.template = new s(p), this.daybreakTemplate = e.template(f), this.listen(), this.groomPosts(), this.updates = new n.Collection, this.sortPending=!1, this.animateDuration = 200, this.postClicksDisabled=!1, this.scrollPane = null, this.preventOverscrollHandler = function() {}
        },
        listen: function() {
            this.listenToOnce(this.posts, "sync", function() {
                this.render(), this.listenTo(this.posts, "reorder", this.renderPosts), this.listenTo(this.posts, "add", this.addPost), this.listenTo(this.posts, "remove", this.removePost), this.listenTo(this.posts, "sync", this.applyWaitingUpdates), this.listenTo(this.posts, "backfill", function() {
                    this.renderPosts(!0, !0)
                }), this.listenTo(this.posts, "lastDay", function() {
                    this.$el.find(g.loadingPost).remove(), this.callScrollPane("update")
                }), this.on("scroll", function(t) {
                    0 === t && this.applyWaitingUpdates(!0)
                })
            }, this)
        },
        groomPosts: function() {
            var t = this;
            window.setInterval(function() {
                t.updateTimestamps(), t.checkLivePosts()
            }, 2e4)
        },
        updateTimestamps: function() {
            e.each(this.postViews, function(t) {
                t.renderTimestamp()
            })
        },
        checkLivePosts: function() {
            this.posts.each(function(t) {
                t.checkLiveWindow()
            })
        },
        stylesLoaded: function() {
            var e, n = new t.Deferred, i = this.$el, s = 0, o = function() {
                var t = i.find(".styles-indicator"), o = "none" == t.css("display"), r = s > 60;
                return o ? n.resolve() : r && n.reject(), (o || r) && window.clearInterval(e), s += 1, o
            };
            return o() || (e = window.setInterval(o, 500)), n.promise()
        },
        refresh: function(t, n) {
            var i = {
                success: e.isFunction(t) ? t: null,
                error: e.isFunction(n) ? n: null
            };
            this.posts.fetchCurrent(i)
        },
        expand: function(e) {
            t(e.target).remove(), this.getFrame().addClass("expanded")
        },
        openStandalone: function() {
            this.options.standaloneUrl && this.openHere(this.options.standaloneUrl)
        },
        removePost: function(t) {
            var e = this.getPost(t);
            e && (e.remove(), this.stopListening(e)), this.updates.remove(t), delete this.players[t.id], delete this.postViews[t.id]
        },
        getPost: function(t, n) {
            var i = e.isObject(t) ? t.id: t, s = this.postViews[i];
            return s || n!==!0 || (s = this.addPost(t)), s
        },
        getPostElFromEl: function(e) {
            var n = t(e);
            return n.is(g.post) ? n : n.parents(g.post)
        },
        getPostEls: function() {
            return this.$el.find(g.post)
        },
        getPostFromElem: function(t) {
            var e = this.getPostElFromEl(t);
            return this.postViews[e.data("cid")]
        },
        getPostElOffset: function(t) {
            var e = this.getPost(t);
            return e ? e.$el.position().top : null
        },
        addPost: function(t) {
            var e = new this.PostViewClass({
                model: t,
                displayImages: this.options.displayImages,
                nytapp: this.options.nytapp
            });
            return e.position = this.posts.indexOf(t), this.trigger("addPost", e), e.render(), this.updates.add(t), this.postViews[t.id] = e, this.listenTo(e, "render", this.refreshScrollPane), this.listenTo(e, "openLink", function(t, n) {
                this.trigger("openLink", t, n, e)
            }), this.listenTo(e, "shareLink", function(t, e, n) {
                this.trigger("shareLink", t, e, n)
            }), this.listenTo(e, "addPlayer", function(e, n) {
                var i = t.id, s = this.players.get(i);
                s ? (s.set("player", e), s.get("playing") && s.play(i)) : (this.players.add({
                    id: i,
                    player: e,
                    isNYT: n===!0
                }), this.players.get(i).play())
            }), e
        },
        delegateToPost: function(n, i) {
            var s, o = this.getPostFromElem(t(n.target)), r = i || n.type;
            if (!o)
                return !1;
            switch (r) {
            case"click":
                if (this.postClicksDisabled)
                    return !1;
                o.onClick(n);
                break;
            default:
                s = "on" + n.type.charAt(0).toUpperCase() + n.type.substring(1), e.isFunction(o[s]) && o[s](n)
            }
        },
        getFrame: function() {
            return this.$el.find(g.frame)
        },
        getFrameHeight: function() {
            return this.getFrame().height()
        },
        getHeader: function() {
            return this.$el.find(g.header)
        },
        getAboutMessage: function() {
            return this.$el.find(g.aboutPost)
        },
        setupScrolling: function() {
            var t = this;
            this.getFrame().mCustomScrollbar({
                theme: "dark-3",
                autoHideScrollbar: !1,
                scrollInertia: 0,
                setTop: 0,
                mouseWheel: {
                    scrollAmount: "Windows" == a.os ? 40: 3
                },
                advanced: {
                    updateOnContentResize: !1
                },
                callbacks: {
                    onScrollStart: function() {
                        t.onScrollStart()
                    },
                    onScroll: function() {
                        t.scrollPane = this.mcs, t.onScroll()
                    }
                }
            }), this.preventOverscroll(), c.getViewport().top > 0 ? this.restoreScrollPosition() : this.resetScrollPosition()
        },
        onScroll: function() {
            this.setPostsShowing(), this.trackScrollPosition(), this.trigger("scroll", this.getScrollY())
        },
        onScrollStart: function() {
            this.trigger("scrollStart")
        },
        preventOverscroll: function() {
            var e = this.getFrame(), n = this.getFrameHeight(), i = "DOMMouseScroll mousewheel";
            e.off(i, this.preventOverscrollHandler), this.preventOverscrollHandler = function(e) {
                var i = t(this), s = this.scrollTop, o = this.scrollHeight, r = "DOMMouseScroll" == e.type?-40 * e.originalEvent.detail : e.originalEvent.wheelDelta, a = r > 0, l = function() {
                    return e.stopPropagation(), e.preventDefault(), e.returnValue=!1, !1
                };
                return !a&&-r > o - n - s ? (i.scrollTop(o), l()) : a && r > s ? (i.scrollTop(0), l()) : void 0
            }, e.on(i, this.preventOverscrollHandler)
        },
        callScrollPane: function(t, e, n) {
            this.getFrame().mCustomScrollbar(t, e, n)
        },
        refreshScrollPane: function() {
            this.callScrollPane("update")
        },
        isScrolled: function() {
            return this.getScrollY() > 0
        },
        scrollToTop: function() {
            this.players.pauseAll(), 0 === this.getScrollY() ? this.trigger("scroll", 0) : this.scrollTo(0)
        },
        scrollTo: function(t, e) {
            var n = e!==!1, i = n ? {
                scrollInertia: this.animateDuration
            }
            : {}, s = this;
            this.callScrollPane("scrollTo", t, i), n && 0 === t && window.setTimeout(function() {
                s.callScrollPane("scrollTo", 0)
            }, this.animateDuration)
        },
        scrollToPost: function(t) {
            var e = this.getPost(t);
            this.scrollTo(e.$el)
        },
        getScrollY: function() {
            return this.scrollPane ? Math.abs(this.scrollPane.top) : 0
        },
        restoreScrollPosition: function() {
            var t, e, n = this.session.get("atPost"), i=!1;
            n && (n != this.lastLatest && (t = this.session.get("atPostOffsetDelta") || 0, e = this.getPostElOffset(n), e && (i=!0, this.scrollTo(e + t, !1))), this.signalNewSinceLastVisit(i))
        },
        resetScrollPosition: function() {
            this.trackScrollPosition()
        },
        applyWaitingUpdates: function(t) {
            (this.updates.length > 0 || this.sortPending) && this.renderPosts(!1, t===!0)
        },
        renderAllPosts: function() {
            var n = "portal-posts-list", i = t('<ul class="' + n + '"></ul>'), s = t("<li></li>").addClass(g.loadingPost.substr(1)), o = [], r = this;
            this.posts.each(function(t, e) {
                var n = this.getPost(t, !0);
                n.position = e, i.append(n.$el), n.videoPlayer && o.push(n)
            }, this), i.append(s), this.addAboutMessage(i), this.$el.find("." + n).replaceWith(i), this.$posts = i, this.addDayBreaks(), e.delay(function() {
                e.each(r.postViews, function(t) {
                    t.trigger("insert")
                })
            })
        },
        addAboutMessage: function(n) {
            var i, s, o = new l({
                key: "nyt-watching-prefs",
                persistent: !0
            });
            return o.get("dismissedAbout")?!1 : (i = t(e.template(m, {
                className: g.aboutPost.substr(1)
            })), s = e.bind(function(t) {
                t.target == i[0] && (i.off("click", s), i.remove(), o.set("dismissedAbout", !0))
            }, this), n.prepend(i), void i.on("click", s))
        },
        insertNewPosts: function() {
            var e = this.getAboutMessage();
            this.posts.each(function(n, i) {
                var s = this.getPost(n, !0), o = i ? this.getPost(this.posts.at(i - 1)): null, r = function(e) {
                    for (var n = e.previousElementSibling; n;) {
                        if (t(n).is(g.post))
                            return n;
                        n = n.previousElementSibling
                    }
                    return null
                };
                s.position = i, 0 !== i || s.el.parentNode&&!s.el.previousElementSibling ? o && r(s.el) != o.el && (o.$el.after(s.$el), s.trigger("insert")) : (e.length ? e.after(s.$el) : this.$posts.prepend(s.$el), s.trigger("insert"))
            }, this), this.addDayBreaks()
        },
        dayBreakAt: function(e) {
            var n = e.get("date_published");
            this.getPost(e).$el.before(t(this.daybreakTemplate({
                date_published: n,
                formatted_date: r.unix(n).format("MMMM DD, YYYY")
            })))
        },
        addDayBreaks: function() {
            this.$el.find(g.daybreak).remove(), this.posts.each(function(t, e) {
                var n = e > 0 ? this.posts.at(e - 1): null, i = t.get("date_published"), s = r.unix(i), o = this.getPost(t), a = o.$el.prev(), l = n ? s.isSame(r.unix(n.get("date_published")), "day"): !0;
                !n || n.get("sticky")!==!1 || l || a.is(g.daybreak) || this.dayBreakAt(t)
            }, this)
        },
        renderPosts: function(t, e) {
            var n = this, i = function() {
                n.refreshScrollPane()
            }, s = (this.posts.at(0) || {}).id;
            e!==!0 && (this.isScrolled() || this.players.hasActive()) ? this.sortPending=!0 : (this.$posts.length ? this.insertNewPosts() : this.renderAllPosts(), t!==!0 ? (this.once("signalAdditions", i), this.signalAdditions(e)) : i(), this.updates.reset(), this.sortPending=!1, this.session.set("lastViewed", s)), this.signalUpdatesPending(), this.session.set("latestPost", s)
        },
        signalUpdatesPending: function() {
            var e = this.getHeader(), n = t(g.updates, e);
            this.updates.length ? (n.text(this.updates.length + " new"), e.addClass("pending")) : e.removeClass("pending")
        },
        signalNewSinceLastVisit: function(t) {
            var e = this.posts.indexOf(this.posts.get(this.lastViewed));
            e > 0 && (this.updates.add(this.posts.slice(0, e)), t ? (this.session.set("lastViewed", this.lastViewed), this.signalUpdatesPending()) : this.signalAdditions(!0))
        },
        signalAdditions: function(e) {
            var n = t(), i = this, s = function() {
                n.removeClass("loading").addClass("loaded"), window.setTimeout(function() {
                    n.removeClass("loaded"), i.trigger("signalAdditions")
                }, 1e3)
            };
            this.updates.each(function(t) {
                var e = this.postViews[t.id];
                e && (n = n.add(e.$el))
            }, this), e===!0 ? s() : (n.addClass("loading"), window.setTimeout(s, 1e3))
        },
        trackScrollPosition: function() {
            var t = this.getPostsShowing(), e = this.getScrollY(), n = e - (this.getPostElOffset(t[0]) || 0);
            t.length && (this.session.set("atPost", t[0].id), this.session.set("atPostOffsetDelta", n))
        },
        trackViewedPosts: function(t) {
            t===!0 && this.session.set("viewedPosts", []), this.session.set("viewedPosts", e.uniq((this.session.get("viewedPosts") || []).concat(e.pluck(this.getPostsShowing(), "id"))))
        },
        getPostsShowing: function() {
            return this.postsShowing || this.setPostsShowing(), this.postsShowing
        },
        setPostsShowing: function() {
            var t, n = this.getScrollY(), i = this.getFrameHeight() + n, s = function(t) {
                return e.isNumber(t) ? t : this.getPost(t).$el.position().top
            }, o = e.sortedIndex(this.posts.models, n, s, this), r = o + e.sortedIndex(this.posts.models.slice(o), i, s, this) - 1, a = this.getPost(this.posts.at(r)), l = a ? a.$el: null;
            return l && l.position().top + l.outerHeight() > i + 10 && r > 0 && (r -= 1), t = this.posts.slice(o, r + 1), this.postsShowing = t, t
        },
        setHackClasses: function(t) {
            "Windows" == a.os && t.addClass("no-bold-hack")
        },
        expandToFill: function(e, n, i, s) {
            if (!e)
                return !1;
            var o = t(e).eq(0).height(), r = t(n), a = r.length ? r.height(): this.$el.parent().height(), l = o - a, u = this.getFrame(), c = this.$el.height(), d = u.height(), h = i && c + l > i ? d + i - c: s && s > c + l ? d + s - c: d + l;
            u.height(h), this.callScrollPane("update"), this.preventOverscroll()
        },
        preRender: function() {
            var e = t(this.template.render());
            return this.$el.empty().append(e), e.addClass("portal-container"), this.setHackClasses(e), e
        },
        render: function() {
            var e;
            this.callScrollPane("destroy"), e = this.preRender(), e.addClass("synced"), this.$posts = t(), this.renderPosts(!0), this.trigger("render"), this.stylesLoaded().done(this.setupScrolling)
        }
    });
    return v
}), define("portal/views/mobile_post", ["portal/views/post", "twitter_intents", "detect"], function(t, e, n) {
    var i = "iOS" === n.os, s = t.extend({
        openNew: function(e) {
            i ? this.openHere(e) : t.prototype.openNew.call(this, e)
        },
        openIntent: function(t) {
            e.openIntent(t, i)
        },
        activateVideo: function() {
            return !1
        },
        activateExternalVideo: function() {
            return !1
        },
        getTrackingParams: function(e) {
            var n = t.prototype.getTrackingParams.call(this, e);
            return delete n.region, _.extend(n, {
                module: "WatchingPortalMobile",
                pgType: this.inPromo ? "Homepage": "StandaloneWatchingPortal"
            })
        }
    });
    return s
}), define("jquery-blutack", ["jquery/nyt"], function(t) {
    function e(t) {
        return t.data("tackProps")
    }
    function n(t, e) {
        t.data("tackProps", e)
    }
    function i(i) {
        if (!e(t(this))) {
            var s = t(this), o = i.offsetTop, r = s.offset(), a = r.top - o, l = s.css("position") || "static", c = {
                offsetTop: parseInt(o, 10),
                offsetLeft: "static" != l ? r.left: "auto",
                tackAt: a,
                proxyId: v + g,
                keepWithin: i.keepWithin ? t(i.keepWithin): null,
                height: s.outerHeight(),
                initial: {
                    position: l,
                    width: i.freezeWidth ? s.css("width"): "auto",
                    top: s.css("top") || "auto",
                    right: s.css("right"),
                    left: s.css("left")
                },
                options: i
            };
            n(s, c), m[a] ? m[a].free.push(s) : m[a] = {
                free: [s],
                tacked: []
            }, g += 1, _ += 1, f.push(this), 1 != _ || w || (w=!0, d()), u()
        }
    }
    function s() {
        var i, s = t(this), o = e(s) || {}, r = s.hasClass(y) ? "tacked": "free", l = m[o.tackAt];
        if (l)
            for (i = l[r].length - 1; i >= 0; i--)
                if (l[r][i].get(0) == this) {
                    l[r].splice(i, 1), a(s), n(s, null), _ -= 1, t("#" + o.proxyId).remove();
                    break
                }
        for (var i = f.length - 1; i >= 0; i--)
            if (f[i] == this) {
                f.splice(i, 1);
                break
            }
    }
    function o(n) {
        var i = e(n), s = t("#" + i.proxyId);
        s.length || (s = t('<div id="' + i.proxyId + '"></div>'), s.insertBefore(n)), s.show(), n.css({
            position: "fixed",
            top: i.offsetTop,
            width: c(n),
            left: i.offsetLeft,
            right: "auto"
        }).addClass(y).data("isPinched", !1)
    }
    function r(t, n) {
        var i = e(t);
        t.css({
            top: i.offsetTop + n
        }).data("isPinched", !0)
    }
    function a(n) {
        var i = e(n);
        t("#" + i.proxyId).hide(), n.css(i.initial).removeClass(y)
    }
    function l(t, n) {
        var i, s = e(t), a = s.keepWithin;
        a && (i = a.offset().top + a.height() - n - (s.height + s.offsetTop), 0 > i ? r(t, i) : t.data("isPinched") && i >= 0 && o(t))
    }
    function u(e) {
        var n, i, s, r, u, c, d = t(window).scrollTop(), h = e && void 0 !== p ? d > p ? "down" : "up" : null;
        if (e && (p = d), !_)
            return !1;
        for (u in m)
            if (m.hasOwnProperty(u)) {
                if (u = Number(u), n = m[u], s = n.tacked, r = n.free, "up" != h && d > u&&!n.fixing) {
                    for (n.fixing=!0, c = r.length - 1; c >= 0; c--)
                        i = r.pop(), o(i), s.push(i);
                        n.fixing=!1
                } else if ("down" != h && u >= d&&!n.fixing) {
                    for (n.fixing=!0, c = s.length - 1; c >= 0; c--)
                        i = s.pop(), a(i), r.push(i);
                        n.fixing=!1
                }
                for (c = s.length - 1; c >= 0; c--)
                    l(s[c], d)
            }
    }
    function c(t) {
        var n = e(t), i = "auto" != n.initial.width ? n.initial.width: t.parent().width() - (t.outerWidth() - t.width());
        t.width(i)
    }
    function d() {
        _ && (t(window).scroll(u), t(window).on("resize", b), t("body").on("orientationchange", b).on("touchend", u))
    }
    function h(e, n) {
        var i, s, o, r, a, l = {
            offsetTop: 0,
            freezeWidth: !1
        }, u = (t(e).data("blutack-options") || "").split(";"), c = {};
        for (a = u.length - 1; a >= 0; a--)
            i = u[a].split(":"), 2 == i.length && (s = t.trim(i[0]), void 0 !== l[s] && (o = t.trim(i[1]), r = o.match(/d+/), r && r.length == o.length ? o = Number(o) : "false" === o ? o=!1 : "true" === o && (o=!0), c[s] = o));
        return t.extend({}, l, c, n)
    }
    var p, f = [], m = {}, g = 0, v = "blutack-proxy-", y = "blutacked", _ = 0, w=!1;
    if (t.fn.blutack)
        return !1;
    var b = function() {
        var n;
        return function() {
            clearTimeout(n), n = setTimeout(function() {
                var n, o, r = [];
                for (o = f.length - 1; o >= 0; o--)
                    n = f[o], r.push({
                        elem: n,
                        options: e(t(n)).options
                    }), s.apply(n);
                for (o = r.length - 1; o >= 0; o--)
                    i.apply(r[o].elem, [r[o].options])
            }, 200)
        }
    }();
    return t.fn.blutack = function(t) {
        return "remove" == t ? this.each(function() {
            s.apply(this)
        }) : "tacked" == t ? this.hasClass(y) : this.each(function() {
            i.apply(this, [h(this, t)])
        })
    }, t(document).ready(function() {
        t(".blutack").blutack()
    }), t
}), define("portal/views/mobile", ["jquery/nyt", "underscore/nyt", "detect", "portal/views/main", "portal/views/mobile_post", "foundation/views/page-manager", "jquery-blutack"], function(t, e, n, i, s, o) {
    var r = "iOS" === n.os, a = i.extend({
        events: {
            "click .portal-posts-list li.portal-post": "delegateToPost",
            "mouseover .portal-posts-list li.portal-post": "mousey",
            "mouseout .portal-posts-list li.portal-post": "mousey",
            "click header": "scrollToTop"
        },
        initialize: function(e) {
            this.$html = t("html, body"), e = e || {}, e.isPromo && (e.displayImages = "thumb_square"), i.prototype.initialize.call(this, e), this.PostViewClass = s
        },
        addPost: function(t) {
            var e = i.prototype.addPost.call(this, t);
            return e.inPromo = this.isPromo(), e
        },
        isPromo: function() {
            return !!this.options.isPromo
        },
        mousey: function(t) {
            r && "mouseover" == t.type && this.delegateToPost(t, "click")
        },
        setupScrolling: function() {
            this.listenTo(o, "nyt:page-scroll-after", this.onScroll), this.listenTo(o, "nyt:page-scroll", e.debounce(function() {
                this.onScrollStart()
            }, 200, !0))
        },
        scrollTo: function(t, e) {
            var n = this, i = e!==!1;
            i ? (this.$html.animate({
                scrollTop: t
            }, this.animateDuration), window.setTimeout(function() {
                n.applyWaitingUpdates(!0)
            }, this.animateDuration)) : this.$html.scrollTop(t)
        },
        scrollToTop: function() {
            this.isPromo() ? this.openStandalone() : this.scrollTo(0)
        },
        getScrollY: function() {
            return t(window).scrollTop()
        },
        isScrolled: function() {
            return this.getScrollY() > 0
        },
        getFrameHeight: function() {
            return o.getViewport().height
        },
        render: function() {
            var t = ["mobile-portal-container"];
            this.isPromo() && t.push("mobile-portal-promo"), i.prototype.render.call(this), this.$el.children().eq(0).addClass(t.join(" ")), this.isPromo() || this.getHeader().blutack()
        },
        addAboutMessage: function(t) {
            this.isPromo() || i.prototype.addAboutMessage.call(this, t)
        }
    });
    return a
}), define("portal/app", ["jquery/nyt", "jquery-ajaxtransport-xdr", "underscore/nyt", "backbone/nyt", "portal/tracker", "qute", "foundation/views/page-manager", "portal/collections/posts", "portal/views/main", "portal/views/mobile"], function(t, e, n, i, s, o, r, a, l, u) {
    var c = Date.parse(new Date), d = function(e, r) {
        var a;
        return c += 1, this.id = "portal_" + c, this.view = null, this.posts = null, this.interval = null, this.options = n.defaults(r || {}, {
            env: "production_published",
            date: null,
            pollRate: 6e4,
            poll: !0,
            mobile: !1,
            mobilePromo: !1,
            limit: 0,
            displayImages: !0,
            standaloneUrl: null,
            nytapp: null
        }), n.defaults(this.options.matchHeight || {}, {
            match: null,
            container: null,
            maxHeight: "auto",
            minHeight: 400
        }), a = {
            module: this.isDesktop() ? "WatchingPortal": "WatchingPortalMobile",
            pgType: this.isDesktop() || this.options.mobilePromo ? "Homepage": "StandaloneWatchingPortal"
        }, this.isDesktop() && (a.region = "c-column-middle-span-region"), this.tracker = new s("WatchingPortal", a), this.$el = t(e), this.$el && this.$el.length ? (this.onReady = o(), this.onFail = o(), this.offset = this.$el.offset(), this.scrollDepth = new i.Model({
            percent: 0,
            quartile: 0,
            remaining: 0,
            atPost: 0
        }), this.setPosts(), this.setView(), void this.fetchPosts()) : !1
    };
    d.prototype = n.extend({
        isDesktop: function() {
            return !this.options.mobile&&!this.options.mobilePromo
        },
        isMobile: function() {
            return this.options.mobile || this.options.mobilePromo
        },
        getQsParam: function(t) {
            var e = window.location.search.indexOf(t), n = window.location.search.substr(e).match(/=([^&]+)/);
            return n ? n[1] : null
        },
        getStream: function() {
            var t = this.getQsParam("portal_stream");
            return t ? t : this.options.env
        },
        getDateParam: function() {
            var t = this.getQsParam("portal_date");
            return t ? t : this.options.date
        },
        setPosts: function() {
            this.posts = new a(null, {
                feed: this.getStream(),
                limit: this.options.limit,
                date: this.getDateParam()
            })
        },
        setView: function() {
            var t, e = {
                el: this.$el,
                posts: this.posts,
                standaloneUrl: this.options.standaloneUrl,
                nytapp: this.options.nytapp
            }, i = this, s = n.once(function() {
                i.stopListening(r, "nyt:page-scroll-after"), i.tracker.track({
                    action: "impression",
                    priority: "true"
                }, "impression")
            });
            t = this.view = this.options.mobilePromo===!0 || this.options.mobile===!0 ? new u(n.extend(e, {
                isPromo: this.options.mobilePromo===!0
            })) : new l(e), this.trackLinks(), this.trackScroll(), this.trackShares(), this.monitorVideos(), this.listenToOnce(t, "render", function() {
                var e = this.options.matchHeight;
                this.onReady.run(), t.stylesLoaded().done(function() {
                    return i.options.mobilePromo===!0?!1 : (i.setHeight(e), i.checkImpression(s) || i.listenTo(r, "nyt:page-scroll-after", function() {
                        i.checkImpression(s)
                    }), i.listenTo(t, "scrollStart", i.disableInactivityTimer), void i.listenTo(t, "scroll", function(t) {
                        this.catchScrollDepth(t), this.loadMore(t), this.enableInactivityTimer()
                    }))
                })
            })
        },
        setHeight: function(t) {
            var e, i, s, o = this;
            t && t.match && (e = function() {
                var e, n = t.maxHeight;
                "auto" === n && (e = o.getUserMaxHeight(), n = e > t.minHeight ? e : t.minHeight), o.view.expandToFill(t.match, t.container, n, t.minHeight)
            }, i = n.debounce(e, 200, !0), s = function() {
                window.setTimeout(i, 2e3)
            }, i(), s(), r.on("nyt:ads-rendered", function() {
                i(), s()
            }), r.on("nyt:page-resize-after", e))
        },
        getUserMaxHeight: function() {
            return r.getViewport().height - 200
        },
        loadMore: function() {
            var t = this;
            !this.loadingMore && this.scrollDepth.get("remaining") < 1e3 && this.posts.canFetchPrevious() && (this.posts.fetchPreviousDay().always(function() {
                t.loadingMore=!1
            }), this.loadingMore=!0)
        },
        enableInactivityTimer: function() {
            r.trigger("nyt:inactivity-timer-enable", "watching")
        },
        disableInactivityTimer: function() {
            r.trigger("nyt:inactivity-timer-disable", "watching")
        },
        monitorVideos: function() {
            this.listenTo(this.view.players, "change:playing", function() {
                this.view.players.hasActive() ? this.disableInactivityTimer() : this.enableInactivityTimer()
            })
        },
        catchScrollDepth: function(t) {
            var e = this.viewHeight || this.view.getFrameHeight(), n = this.view.$posts.height(), i = t + e, s = i / n, o = Math.floor(4 * s) / 4 * 100, r = this.view.getPostsShowing(), a = this.posts.indexOf(r[r.length - 1]);
            this.scrollDepth.set({
                percent: Math.round(100 * s),
                quartile: o,
                remaining: n - i,
                atPost: a,
                fives: 5 * Math.floor(a / 5)
            })
        },
        trackScroll: function() {
            var t = 0;
            this.scrollDepth.on("change:atPost", n.bind(function() {
                var e = this.scrollDepth.get("atPost"), n = this.scrollDepth.get("fives"), i = this.scrollDepth.previous("atPost");
                e > i && (0 === i ? this.tracker.track({
                    action: "scroll",
                    contentPlacement: e
                }, "interaction") : n > t && (t = n, this.tracker.track({
                    action: "scroll",
                    contentPlacement: n
                }, "interaction")))
            }, this))
        },
        trackLinks: function() {
            this.listenTo(this.view, "openLink", function(t, e, n) {
                this.tracker.track(n.getTrackingParams(t), "interaction")
            })
        },
        trackShares: function() {
            this.listenTo(this.view, "shareLink", function(t, e, i) {
                var s = n.extend(e.getTrackingParams(t), {
                    eventName: "Share-" + i
                });
                this.tracker.track(s, "interaction")
            })
        },
        checkImpression: function(t) {
            var e = r.getViewport();
            return this.offset.top + 150 < e.bottom ? (t(), !0) : !1
        },
        fetchPosts: function() {
            var t = this, e = n.once(function(e) {
                e || (t.stopAutoUpdates(), t.$el.remove(), t.onFail.run())
            });
            this.listenToOnce(this.posts, "sync", function() {
                e(!0)
            }), this.listenToOnce(this.posts, "error", function() {
                e(!1)
            }), this.options.poll===!1 || 0 === this.options.pollRate || this.options.mobilePromo===!0 ? this.view.refresh() : this.startAutoUpdates()
        },
        startAutoUpdates: function() {
            var t = this.options.pollRate, e = this, n = function() {
                e.view.refresh(i)
            }, i = function() {
                e.stopAutoUpdates(), e.interval = window.setInterval(n, t)
            };
            n(), i()
        },
        stopAutoUpdates: function() {
            window.clearInterval(this.interval)
        }
    }, i.Events);
    var h = {
        portals: [],
        create: function(e, n) {
            var i = t(e), s = this.get(i);
            return i.length&&!s && (s = new d(i, n), s && this.portals.push(s)), s
        },
        get: function(e) {
            var i = t(e);
            return n.find(this.portals, function(t) {
                return t.$el[0] == i[0]
            })
        }
    };
    return h
});
