/**
 * @license Copyright 2013 Andy Earnshaw, MIT License
 *
 * Implements the ECMAScript Internationalization API in ES5-compatible environments,
 * following the ECMA-402 specification as closely as possible
 *
 * ECMA-402: http://ecma-international.org/ecma-402/1.0/
 *
 * CLDR format locale data should be provided using IntlPolyfill.__addLocaleData().
 */
!function(a, b) {
    var c = b();
    "function" == typeof define && define.amd && define(c), "object" == typeof exports && (module.exports = c), a.Intl || (a.Intl = c, c.__applyLocaleSensitivePrototypes()), a.IntlPolyfill = c
}("undefined" != typeof global ? global : this, function() {
    "use strict";
    function a(a) {
        return P.test(a) ? R.test(a)?!1 : S.test(a)?!1 : !0 : !1
    }
    function b(a) {
        var b, c;
        a = a.toLowerCase(), c = a.split("-");
        for (var d = 1, e = c.length; e > d; d++)
            if (2 === c[d].length)
                c[d] = c[d].toUpperCase();
            else if (4 === c[d].length)
                c[d] = c[d].charAt(0).toUpperCase() + c[d].slice(1);
            else if (1 === c[d].length && "x" != c[d])
                break;
        a = bb.call(c, "-"), (b = a.match(Q)) && b.length > 1 && (b.sort(), a = a.replace(RegExp("(?:" + Q.source + ")+", "i"), bb.call(b, ""))), W.call(lb.tags, a) && (a = lb.tags[a]), c = a.split("-");
        for (var d = 1, e = c.length; e > d; d++)
            W.call(lb.subtags, c[d]) ? c[d] = lb.subtags[c[d]] : W.call(lb.extLang, c[d]) && (c[d] = lb.extLang[c[d]][0], 1 === d && lb.extLang[c[1]][1] === c[0] && (c = $.call(c, d++), e -= 1));
        return bb.call(c, "-")
    }
    function c() {
        return O
    }
    function d(a) {
        var b = String(a), c = L(b);
        return jb.test(c)===!1?!1 : !0
    }
    function e(c) {
        if (void 0 === c)
            return new J;
        for (var d = new J, c = "string" == typeof c ? [c] : c, e = M(c), f = e.length, g = 0; f > g;) {
            var h = String(g), i = h in e;
            if (i) {
                var j = e[h];
                if (null == j || "string" != typeof j && "object" != typeof j)
                    throw new TypeError("String or Object type expected");
                var k = String(j);
                if (!a(k))
                    throw new RangeError("'" + k + "' is not a structurally valid language tag");
                k = b(k), - 1 === Y.call(d, k) && ab.call(d, k)
            }
            g++
        }
        return d
    }
    function f(a, b) {
        for (var c = b; ;) {
            if (Y.call(a, c)>-1)
                return c;
            var d = c.lastIndexOf("-");
            if (0 > d)
                return;
            d >= 2 && "-" == c.charAt(d - 2) && (d -= 2), c = c.substring(0, d)
        }
    }
    function g(a, b) {
        for (var d, e = 0, g = b.length; g > e&&!d;) {
            var h = b[e], i = String(h).replace(kb, ""), d = f(a, i);
            e++
        }
        var j = new I;
        if (void 0 !== d) {
            if (j["[[locale]]"] = d, String(h) !== String(i)) {
                var k = h.match(kb)[0], l = h.indexOf("-u-");
                j["[[extension]]"] = k, j["[[extensionIndex]]"] = l
            }
        } else 
            j["[[locale]]"] = c();
        return j
    }
    function h(a, b) {
        return g(a, b)
    }
    function i(a, b, c, d, e) {
        if (0 === a.length)
            throw new ReferenceError("No locale data has been provided for this object yet.");
        var f = c["[[localeMatcher]]"];
        if ("lookup" === f)
            var i = g(a, b);
        else 
            var i = h(a, b);
        var j = i["[[locale]]"];
        if (W.call(i, "[[extension]]"))
            var k = i["[[extension]]"], l = i["[[extensionIndex]]"], m = String.prototype.split, n = m.call(k, "-"), o = n.length;
        var p = new I;
        p["[[dataLocale]]"] = j;
        for (var q = "-u", r = 0, s = d.length; s > r;) {
            var t = d[r], u = e[j], v = u[t], w = v[0], x = "", y = Y;
            if (void 0 !== n) {
                var z = y.call(n, t);
                if ( - 1 !== z)
                    if (o > z + 1 && n[z + 1].length > 2) {
                        var A = n[z + 1], B = y.call(v, A);
                        if ( - 1 !== B)
                            var w = A, x = "-" + t + "-" + w
                    } else {
                        var B = y(v, "true");
                        if ( - 1 !== B)
                            var w = "true"
                    }
            }
            if (W.call(c, "[[" + t + "]]")) {
                var C = c["[[" + t + "]]"];
                - 1 !== y.call(v, C) && C !== w && (w = C, x = "")
            }
            p["[[" + t + "]]"] = w, q += x, r++
        }
        if (q.length > 2)
            var D = j.substring(0, l), E = j.substring(l), j = D + q + E;
        return p["[[locale]]"] = j, p
    }
    function j(a, b) {
        for (var c = b.length, d = new J, e = 0; c > e;) {
            var g = b[e], h = String(g).replace(kb, ""), i = f(a, h);
            void 0 !== i && ab.call(d, g), e++
        }
        var j = $.call(d);
        return j
    }
    function k(a, b) {
        return j(a, b)
    }
    function l(a, b, c) {
        if (void 0 !== c) {
            var c = new I(M(c)), d = c.localeMatcher;
            if (void 0 !== d && (d = String(d), "lookup" !== d && "best fit" !== d))throw new RangeError('matcher should be "lookup" or "best fit"')
        }
        if (void 0 === d || "best fit" === d)
            var e = k(a, b);
        else 
            var e = j(a, b);
        for (var f in e)
            W.call(e, f) && X(e, f, {
                writable: !1,
                configurable: !1,
                value: e[f]
            });
        return X(e, "length", {
            writable: !1
        }), e
    }
    function m(a, b, c, d, e) {
        var f = a[b];
        if (void 0 !== f) {
            if (f = "boolean" === c ? Boolean(f) : "string" === c ? String(f) : f, void 0 !== d&&-1 === Y.call(d, f)
                )throw new RangeError("'" + f + "' is not an allowed value for `" + b + "`");
            return f
        }
        return e
    }
    function n(a, b, c, d, e) {
        var f = a[b];
        if (void 0 !== f) {
            if (f = Number(f), isNaN(f) || c > f || f > d)
                throw new RangeError("Value is not a number or outside accepted range");
            return Math.floor(f)
        }
        return e
    }
    function o() {
        var a = arguments[0], b = arguments[1];
        return this && this !== T ? p(M(this), a, b) : new T.NumberFormat(a, b)
    }
    function p(a, b, c) {
        var f = N(a), g = K();
        if (f["[[initializedIntlObject]]"]===!0)
            throw new TypeError("`this` object has already been initialized as an Intl object");
        X(a, "__getInternalProperties", {
            value: function() {
                return arguments[0] === fb ? f : void 0
            }
        }), f["[[initializedIntlObject]]"]=!0;
        var h = e(b);
        c = void 0 === c ? {} : M(c);
        var j = new I, k = m(c, "localeMatcher", "string", new J("lookup", "best fit"), "best fit");
        j["[[localeMatcher]]"] = k;
        var l = eb.NumberFormat["[[localeData]]"], o = i(eb.NumberFormat["[[availableLocales]]"], h, j, eb.NumberFormat["[[relevantExtensionKeys]]"], l);
        f["[[locale]]"] = o["[[locale]]"], f["[[numberingSystem]]"] = o["[[nu]]"], f["[[dataLocale]]"] = o["[[dataLocale]]"];
        var p = o["[[dataLocale]]"], s = m(c, "style", "string", new J("decimal", "percent", "currency"), "decimal");
        f["[[style]]"] = s;
        var t = m(c, "currency", "string");
        if (void 0 !== t&&!d(t)
            )throw new RangeError("'" + t + "' is not a valid currency code");
        if ("currency" === s && void 0 === t)
            throw new TypeError("Currency code is required when style is currency");
        if ("currency" === s) {
            t = t.toUpperCase(), f["[[currency]]"] = t;
            var u = q(t)
        }
        var v = m(c, "currencyDisplay", "string", new J("code", "symbol", "name"), "symbol");
        "currency" === s && (f["[[currencyDisplay]]"] = v);
        var w = n(c, "minimumIntegerDigits", 1, 21, 1);
        f["[[minimumIntegerDigits]]"] = w;
        var x = "currency" === s ? u: 0, y = n(c, "minimumFractionDigits", 0, 20, x);
        f["[[minimumFractionDigits]]"] = y;
        var z = "currency" === s ? Math.max(y, u): "percent" === s ? Math.max(y, 0): Math.max(y, 3), A = n(c, "maximumFractionDigits", y, 20, z);
        f["[[maximumFractionDigits]]"] = A;
        var B = c.minimumSignificantDigits, C = c.maximumSignificantDigits;
        (void 0 !== B || void 0 !== C) && (B = n(c, "minimumSignificantDigits", 1, 21, 1), C = n(c, "maximumSignificantDigits", B, 21, 21), f["[[minimumSignificantDigits]]"] = B, f["[[maximumSignificantDigits]]"] = C);
        var D = m(c, "useGrouping", "boolean", void 0, !0);
        f["[[useGrouping]]"] = D;
        var E = l[p], F = E.patterns, G = F[s];
        return f["[[positivePattern]]"] = G.positivePattern, f["[[negativePattern]]"] = G.negativePattern, f["[[boundFormat]]"] = void 0, f["[[initializedNumberFormat]]"]=!0, V && (a.format = r.call(a)), g.exp.test(g.input), a
    }
    function q(a) {
        return void 0 !== mb[a] ? mb[a] : 2
    }
    function r() {
        var a = null != this && "object" == typeof this && N(this);
        if (!a ||!a["[[initializedNumberFormat]]"])
            throw new TypeError("`this` value for format() is not an initialized Intl.NumberFormat object.");
        if (void 0 === a["[[boundFormat]]"]) {
            var b = function(a) {
                return s(this, Number(a))
            }, c = db.call(b, this);
            a["[[boundFormat]]"] = c
        }
        return a["[[boundFormat]]"]
    }
    function s(a, b) {
        var c, d = K(), e = N(a), f = e["[[dataLocale]]"], g = e["[[numberingSystem]]"], h = eb.NumberFormat["[[localeData]]"][f], i = h.symbols[g] || h.symbols.latn, j=!1;
        if (isFinite(b)===!1)
            isNaN(b) ? c = i.nan : (c = i.infinity, 0 > b && (j=!0));
        else {
            if (0 > b && (j=!0, b =- b), "percent" === e["[[style]]"] && (b*=100), c = W.call(e, "[[minimumSignificantDigits]]") && W.call(e, "[[maximumSignificantDigits]]") ? t(b, e["[[minimumSignificantDigits]]"], e["[[maximumSignificantDigits]]"]) : u(b, e["[[minimumIntegerDigits]]"], e["[[minimumFractionDigits]]"], e["[[maximumFractionDigits]]"]), nb[g]) {
                var k = nb[e["[[numberingSystem]]"]];
                c = String(c).replace(/\d/g, function(a) {
                    return k[a]
                })
            } else 
                c = String(c);
            if (c = c.replace(/\./g, i.decimal), e["[[useGrouping]]"]===!0) {
                var l = c.split(i.decimal), m = l[0], n = h.patterns.primaryGroupSize || 3, o = h.patterns.secondaryGroupSize || n;
                if (m.length > n) {
                    var p = new J, q = m.length - n, r = q%o, s = m.slice(0, r);
                    for (s.length && ab.call(p, s); q > r;)
                        ab.call(p, m.slice(r, r + o)), r += o;
                    ab.call(p, m.slice(q)), l[0] = bb.call(p, i.group)
                }
                c = bb.call(l, i.decimal)
            }
        }
        var v = e[j===!0 ? "[[negativePattern]]": "[[positivePattern]]"];
        if (v = v.replace("{number}", c), "currency" === e["[[style]]"]) {
            var w, x = e["[[currency]]"], y = h.currencies[x];
            switch (e["[[currencyDisplay]]"]) {
            case"symbol":
                w = y || x;
                break;
            default:
            case"code":
            case"name":
                w = x
            }
            v = v.replace("{currency}", w)
        }
        return d.exp.test(d.input), v
    }
    function t(a, b, c) {
        var d = c;
        if (0 === a)
            var e = bb.call(Array(d + 1), "0"), f = 0;
        else 
            var f = F(Math.abs(a)), g = Math.round(Math.exp(Math.abs(f - d + 1) * Math.LN10)), e = String(Math.round(0 > f - d + 1 ? a * g : a / g));
        if (f >= d)
            return e + bb.call(Array(f - d + 1 + 1), "0");
        if (f === d - 1)
            return e;
        if (f >= 0 ? e = e.slice(0, f + 1) + "." + e.slice(f + 1) : 0 > f && (e = "0." + bb.call(Array( - (f + 1) + 1), "0") + e), e.indexOf(".") >= 0 && c > b) {
            for (var h = c - b; h > 0 && "0" === e.charAt(e.length - 1);)
                e = e.slice(0, - 1), h--;
            "." === e.charAt(e.length - 1) && (e = e.slice(0, - 1))
        }
        return e
    }
    function u(a, b, c, d) {
        var e, f = Number.prototype.toFixed.call(a, d), g = f.split(".")[0].length, h = d - c, i = (e = f.indexOf("e"))>-1 ? f.slice(e + 1): 0;
        for (i && (f = f.slice(0, e).replace(".", ""), f += bb.call(Array(i - (f.length - 1) + 1), "0") + "." + bb.call(Array(d + 1), "0"), g = f.length); h > 0 && "0" === f.slice( - 1);)
            f = f.slice(0, - 1), h--;
        if ("." === f.slice( - 1) && (f = f.slice(0, - 1)), b > g)
            var j = bb.call(Array(b - g + 1), "0");
        return (j ? j : "") + f
    }
    function v() {
        var a = arguments[0], b = arguments[1];
        return this && this !== T ? w(M(this), a, b) : new T.DateTimeFormat(a, b)
    }
    function w(a, b, c) {
        var d = N(a), f = K();
        if (d["[[initializedIntlObject]]"]===!0)
            throw new TypeError("`this` object has already been initialized as an Intl object");
        X(a, "__getInternalProperties", {
            value: function() {
                return arguments[0] === fb ? d : void 0
            }
        }), d["[[initializedIntlObject]]"]=!0;
        var g = e(b), c = x(c, "any", "date"), h = new I;
        u = m(c, "localeMatcher", "string", new J("lookup", "best fit"), "best fit"), h["[[localeMatcher]]"] = u;
        var j = eb.DateTimeFormat, k = j["[[localeData]]"], l = i(j["[[availableLocales]]"], g, h, j["[[relevantExtensionKeys]]"], k);
        d["[[locale]]"] = l["[[locale]]"], d["[[calendar]]"] = l["[[ca]]"], d["[[numberingSystem]]"] = l["[[nu]]"], d["[[dataLocale]]"] = l["[[dataLocale]]"];
        var n = l["[[dataLocale]]"], o = c.timeZone;
        if (void 0 !== o && (o = L(o), "UTC" !== o))throw new RangeError("timeZone is not supported.");
        d["[[timeZone]]"] = o, h = new I;
        for (var p in ob)
            if (W.call(ob, p)) {
                var q = m(c, p, "string", ob[p]);
                h["[[" + p + "]]"] = q
            }
        var r, s = k[n], t = s.formats, u = m(c, "formatMatcher", "string", new J("basic", "best fit"), "best fit");
        r = "basic" === u ? y(h, t) : A(h, t);
        for (var p in ob)
            if (W.call(ob, p) && W.call(r, p)) {
                var v = r[p];
                d["[[" + p + "]]"] = v
            }
        var w, z = m(c, "hour12", "boolean");
        if (d["[[hour]]"])
            if (z = void 0 === z ? s.hour12 : z, d["[[hour12]]"] = z, z===!0) {
                var C = s.hourNo0;
                d["[[hourNo0]]"] = C, w = r.pattern12
            } else 
                w = r.pattern;
        else 
            w = r.pattern;
        return d["[[pattern]]"] = w, d["[[boundFormat]]"] = void 0, d["[[initializedDateTimeFormat]]"]=!0, V && (a.format = B.call(a)), f.exp.test(f.input), a
    }
    function x(a, b, c) {
        if (void 0 === a)
            a = null;
        else {
            var d = M(a);
            a = new I;
            for (var e in d)
                a[e] = d[e]
        }
        var f = Z, a = f(a), g=!0;
        return ("date" === b || "any" === b) && (void 0 !== a.weekday || void 0 !== a.year || void 0 !== a.month || void 0 !== a.day) && (g=!1), ("time" === b || "any" === b) && (void 0 !== a.hour || void 0 !== a.minute || void 0 !== a.second) && (g=!1), !g || "date" !== c && "all" !== c || (a.year = a.month = a.day = "numeric"), !g || "time" !== c && "all" !== c || (a.hour = a.minute = a.second = "numeric"), a
    }
    function y(a, b) {
        return z(a, b)
    }
    function z(a, b, c) {
        for (var d, e = 8, f = 120, g = 20, h = 8, i = 6, j = 6, k = 3, l =- 1 / 0, m = 0, n = b.length; n > m;) {
            var o = b[m], p = 0;
            for (var q in ob)
                if (W.call(ob, q)) {
                    var r = a["[[" + q + "]]"], s = W.call(o, q) ? o[q]: void 0;
                    if (void 0 === r && void 0 !== s)
                        p -= g;
                    else if (void 0 !== r && void 0 === s)
                        p -= f;
                    else {
                        var t = ["2-digit", "numeric", "narrow", "short", "long"], u = Y.call(t, r), v = Y.call(t, s), w = Math.max(Math.min(v - u, 2), - 2);
                        !c || ("numeric" !== r && "2-digit" !== r || "numeric" === s || "2-digit" === s) && ("numeric" === r || "2-digit" === r || "2-digit" !== s && "numeric" !== s) || (p -= e), 2 === w ? p -= i : 1 === w ? p -= k : - 1 === w ? p -= j : - 2 === w && (p -= h)
                    }
                }
            p > l && (l = p, d = o), m++
        }
        return d
    }
    function A(a, b) {
        return z(a, b, !0)
    }
    function B() {
        var a = null != this && "object" == typeof this && N(this);
        if (!a ||!a["[[initializedDateTimeFormat]]"])
            throw new TypeError("`this` value for format() is not an initialized Intl.DateTimeFormat object.");
        if (void 0 === a["[[boundFormat]]"]) {
            var b = function() {
                var a = Number(0 === arguments.length ? Date.now() : arguments[0]);
                return C(this, a)
            }, c = db.call(b, this);
            a["[[boundFormat]]"] = c
        }
        return a["[[boundFormat]]"]
    }
    function C(a, b) {
        if (!isFinite(b))
            throw new RangeError("Invalid valid date passed to format");
        var c = a.__getInternalProperties(fb), d = K(), e = c["[[locale]]"], f = new T.NumberFormat([e], {
            useGrouping: !1
        }), g = new T.NumberFormat([e], {
            minimumIntegerDigits: 2,
            useGrouping: !1
        }), h = D(b, c["[[calendar]]"], c["[[timeZone]]"]), i = c["[[pattern]]"], j = c["[[dataLocale]]"], k = eb.DateTimeFormat["[[localeData]]"][j].calendars, l = c["[[calendar]]"];
        for (var m in ob)
            if (W.call(c, "[[" + m + "]]")) {
                var n, o, p = c["[[" + m + "]]"], q = h["[[" + m + "]]"];
                if ("year" === m && 0 >= q ? q = 1 - q : "month" === m ? q++ : "hour" === m && c["[[hour12]]"]===!0 && (q%=12, n = q !== h["[[" + m + "]]"], 0 === q && c["[[hourNo0]]"]===!0 && (q = 12)), "numeric" === p)
                    o = s(f, q);
                else if ("2-digit" === p)
                    o = s(g, q), o.length > 2 && (o = o.slice( - 2));
                else if (p in gb)
                    switch (m) {
                    case"month":
                        o = H(k, l, "months", p, h["[[" + m + "]]"]);
                        break;
                    case"weekday":
                        try {
                            o = H(k, l, "days", p, h["[[" + m + "]]"])
                        } catch (r) {
                            throw new Error("Could not find weekday data for locale " + e)
                        }
                        break;
                    case"timeZoneName":
                        o = "";
                        break;
                    default:
                        o = h["[[" + m + "]]"]
                    }
                    i = i.replace("{" + m + "}", o)
        }
        return c["[[hour12]]"]===!0 && (o = H(k, l, "dayPeriods", n ? "pm" : "am"), i = i.replace("{ampm}", o)), d.exp.test(d.input), i
    }
    function D(a, b, c) {
        var d = new Date(a), e = "get" + (c || "");
        return new I({
            "[[weekday]]": d[e + "Day"](),
            "[[era]]": + (d[e + "FullYear"]() >= 0),
            "[[year]]": d[e + "FullYear"](),
            "[[month]]": d[e + "Month"](),
            "[[day]]": d[e + "Date"](),
            "[[hour]]": d[e + "Hours"](),
            "[[minute]]": d[e + "Minutes"](),
            "[[second]]": d[e + "Seconds"](),
            "[[inDST]]": !1
        })
    }
    function E(a, b) {
        if (!a.number)
            throw new Error("Object passed doesn't contain locale data for Intl.NumberFormat");
        var c, d = [b], e = b.split("-");
        for (e.length > 2 && 4 == e[1].length && ab.call(d, e[0] + "-" + e[2]); c = cb.call(d);)
            ab.call(eb.NumberFormat["[[availableLocales]]"], c), eb.NumberFormat["[[localeData]]"][c] = a.number, a.date && (a.date.nu = a.number.nu, ab.call(eb.DateTimeFormat["[[availableLocales]]"], c), eb.DateTimeFormat["[[localeData]]"][c] = a.date);
        void 0 === O && (O = b), hb || (p(T.NumberFormat.prototype), hb=!0), a.date&&!ib && (w(T.DateTimeFormat.prototype), ib=!0)
    }
    function F(a) {
        if ("function" == typeof Math.log10)
            return Math.floor(Math.log10(a));
        var b = Math.round(Math.log(a) * Math.LOG10E);
        return b - (Number("1e" + b) > a)
    }
    function G(a) {
        if (!W.call(this, "[[availableLocales]]"))
            throw new TypeError("supportedLocalesOf() is not a constructor");
        var b = K(), c = arguments[1], d = this["[[availableLocales]]"], f = e(a);
        return b.exp.test(b.input), l(d, f, c)
    }
    function H(a, b, c, d, e) {
        var f = a[b] && a[b][c] ? a[b][c]: a.gregory[c], g = {
            narrow: ["short", "long"],
            "short": ["long", "narrow"],
            "long": ["short", "narrow"]
        }, h = W.call(f, d) ? f[d]: W.call(f, g[d][0]) ? f[g[d][0]]: f[g[d][1]];
        return null != e ? h[e] : h
    }
    function I(a) {
        for (var b in a)(a instanceof I || W.call(a, b)
            ) && X(this, b, {
                value: a[b],
                enumerable: !0,
                writable: !0,
                configurable: !0
            })
            }
    function J() {
        X(this, "length", {
            writable: !0,
            value: 0
        }), arguments.length && ab.apply(this, $.call(arguments))
    }
    function K() {
        for (var a = /[.?*+^$[\]\\(){}|-]/g, b = RegExp.lastMatch, c = RegExp.multiline ? "m" : "", d = {
            input: RegExp.input
        }, e = new J, f=!1, g = {}, h = 1; 9 >= h; h++)
            f = (g["$" + h] = RegExp["$" + h]) || f;
        if (b = b.replace(a, "\\$&"), f)
            for (var h = 1; 9 >= h; h++) {
                var i = g["$" + h];
                i ? (i = i.replace(a, "\\$&"), b = b.replace(i, "(" + i + ")")) : b = "()" + b, ab.call(e, b.slice(0, b.indexOf("(") + 1)), b = b.slice(b.indexOf("(") + 1)
            }
        return d.exp = new RegExp(bb.call(e, "") + b, c), d
    }
    function L(a) {
        for (var b = a.length; b--;) {
            var c = a.charAt(b);
            c >= "a" && "z" >= c && (a = a.slice(0, b) + c.toUpperCase() + a.slice(b + 1))
        }
        return a
    }
    function M(a) {
        if (null == a)
            throw new TypeError("Cannot convert null or undefined to object");
        return Object(a)
    }
    function N(a) {
        return W.call(a, "__getInternalProperties") ? a.__getInternalProperties(fb) : Z(null)
    }
    var O, P, Q, R, S, T = {}, U = function() {
        try {
            return !!Object.defineProperty({}, "a", {})
        } catch (a) {
            return !1
        }
    }(), V=!U&&!Object.prototype.__defineGetter__, W = Object.prototype.hasOwnProperty, X = U ? Object.defineProperty : function(a, b, c) {
        "get"in c && a.__defineGetter__ ? a.__defineGetter__(b, c.get) : (!W.call(a, b) || "value"in c) && (a[b] = c.value)
    }, Y = Array.prototype.indexOf || function(a) {
        var b = this;
        if (!b.length)
            return - 1;
        for (var c = arguments[1] || 0, d = b.length; d > c; c++)
            if (b[c] === a)
                return c;
        return - 1
    }, Z = Object.create || function(a, b) {
        function c() {}
        var d;
        c.prototype = a, d = new c;
        for (var e in b)
            W.call(b, e) && X(d, e, b[e]);
        return d
    }, $ = Array.prototype.slice, _ = Array.prototype.concat, ab = Array.prototype.push, bb = Array.prototype.join, cb = Array.prototype.shift, db = (Array.prototype.unshift, Function.prototype.bind || function(a) {
        var b = this, c = $.call(arguments, 1);
        return 1 === b.length ? function() {
            return b.apply(a, _.call(c, $.call(arguments)))
        } : function() {
            return b.apply(a, _.call(c, $.call(arguments)))
        }
    }), eb = Z(null), fb = Math.random(), gb = Z(null, {
        narrow: {},
        "short": {},
        "long": {}
    }), hb=!1, ib=!1, jb = /^[A-Z]{3}$/, kb = /-u(?:-[0-9a-z]{2,8})+/gi, lb = {
        tags: {
            "art-lojban": "jbo",
            "i-ami": "ami",
            "i-bnn": "bnn",
            "i-hak": "hak",
            "i-klingon": "tlh",
            "i-lux": "lb",
            "i-navajo": "nv",
            "i-pwn": "pwn",
            "i-tao": "tao",
            "i-tay": "tay",
            "i-tsu": "tsu",
            "no-bok": "nb",
            "no-nyn": "nn",
            "sgn-BE-FR": "sfb",
            "sgn-BE-NL": "vgt",
            "sgn-CH-DE": "sgg",
            "zh-guoyu": "cmn",
            "zh-hakka": "hak",
            "zh-min-nan": "nan",
            "zh-xiang": "hsn",
            "sgn-BR": "bzs",
            "sgn-CO": "csn",
            "sgn-DE": "gsg",
            "sgn-DK": "dsl",
            "sgn-ES": "ssp",
            "sgn-FR": "fsl",
            "sgn-GB": "bfi",
            "sgn-GR": "gss",
            "sgn-IE": "isg",
            "sgn-IT": "ise",
            "sgn-JP": "jsl",
            "sgn-MX": "mfs",
            "sgn-NI": "ncs",
            "sgn-NL": "dse",
            "sgn-NO": "nsl",
            "sgn-PT": "psr",
            "sgn-SE": "swl",
            "sgn-US": "ase",
            "sgn-ZA": "sfs",
            "zh-cmn": "cmn",
            "zh-cmn-Hans": "cmn-Hans",
            "zh-cmn-Hant": "cmn-Hant",
            "zh-gan": "gan",
            "zh-wuu": "wuu",
            "zh-yue": "yue"
        },
        subtags: {
            BU: "MM",
            DD: "DE",
            FX: "FR",
            TP: "TL",
            YD: "YE",
            ZR: "CD",
            heploc: "alalc97",
            "in": "id",
            iw: "he",
            ji: "yi",
            jw: "jv",
            mo: "ro",
            ayx: "nun",
            bjd: "drl",
            ccq: "rki",
            cjr: "mom",
            cka: "cmr",
            cmk: "xch",
            drh: "khk",
            drw: "prs",
            gav: "dev",
            hrr: "jal",
            ibi: "opa",
            kgh: "kml",
            lcq: "ppr",
            mst: "mry",
            myt: "mry",
            sca: "hle",
            tie: "ras",
            tkk: "twm",
            tlw: "weo",
            tnf: "prs",
            ybd: "rki",
            yma: "lrr"
        },
        extLang: {
            aao: ["aao", "ar"],
            abh: ["abh", "ar"],
            abv: ["abv", "ar"],
            acm: ["acm", "ar"],
            acq: ["acq", "ar"],
            acw: ["acw", "ar"],
            acx: ["acx", "ar"],
            acy: ["acy", "ar"],
            adf: ["adf", "ar"],
            ads: ["ads", "sgn"],
            aeb: ["aeb", "ar"],
            aec: ["aec", "ar"],
            aed: ["aed", "sgn"],
            aen: ["aen", "sgn"],
            afb: ["afb", "ar"],
            afg: ["afg", "sgn"],
            ajp: ["ajp", "ar"],
            apc: ["apc", "ar"],
            apd: ["apd", "ar"],
            arb: ["arb", "ar"],
            arq: ["arq", "ar"],
            ars: ["ars", "ar"],
            ary: ["ary", "ar"],
            arz: ["arz", "ar"],
            ase: ["ase", "sgn"],
            asf: ["asf", "sgn"],
            asp: ["asp", "sgn"],
            asq: ["asq", "sgn"],
            asw: ["asw", "sgn"],
            auz: ["auz", "ar"],
            avl: ["avl", "ar"],
            ayh: ["ayh", "ar"],
            ayl: ["ayl", "ar"],
            ayn: ["ayn", "ar"],
            ayp: ["ayp", "ar"],
            bbz: ["bbz", "ar"],
            bfi: ["bfi", "sgn"],
            bfk: ["bfk", "sgn"],
            bjn: ["bjn", "ms"],
            bog: ["bog", "sgn"],
            bqn: ["bqn", "sgn"],
            bqy: ["bqy", "sgn"],
            btj: ["btj", "ms"],
            bve: ["bve", "ms"],
            bvl: ["bvl", "sgn"],
            bvu: ["bvu", "ms"],
            bzs: ["bzs", "sgn"],
            cdo: ["cdo", "zh"],
            cds: ["cds", "sgn"],
            cjy: ["cjy", "zh"],
            cmn: ["cmn", "zh"],
            coa: ["coa", "ms"],
            cpx: ["cpx", "zh"],
            csc: ["csc", "sgn"],
            csd: ["csd", "sgn"],
            cse: ["cse", "sgn"],
            csf: ["csf", "sgn"],
            csg: ["csg", "sgn"],
            csl: ["csl", "sgn"],
            csn: ["csn", "sgn"],
            csq: ["csq", "sgn"],
            csr: ["csr", "sgn"],
            czh: ["czh", "zh"],
            czo: ["czo", "zh"],
            doq: ["doq", "sgn"],
            dse: ["dse", "sgn"],
            dsl: ["dsl", "sgn"],
            dup: ["dup", "ms"],
            ecs: ["ecs", "sgn"],
            esl: ["esl", "sgn"],
            esn: ["esn", "sgn"],
            eso: ["eso", "sgn"],
            eth: ["eth", "sgn"],
            fcs: ["fcs", "sgn"],
            fse: ["fse", "sgn"],
            fsl: ["fsl", "sgn"],
            fss: ["fss", "sgn"],
            gan: ["gan", "zh"],
            gds: ["gds", "sgn"],
            gom: ["gom", "kok"],
            gse: ["gse", "sgn"],
            gsg: ["gsg", "sgn"],
            gsm: ["gsm", "sgn"],
            gss: ["gss", "sgn"],
            gus: ["gus", "sgn"],
            hab: ["hab", "sgn"],
            haf: ["haf", "sgn"],
            hak: ["hak", "zh"],
            hds: ["hds", "sgn"],
            hji: ["hji", "ms"],
            hks: ["hks", "sgn"],
            hos: ["hos", "sgn"],
            hps: ["hps", "sgn"],
            hsh: ["hsh", "sgn"],
            hsl: ["hsl", "sgn"],
            hsn: ["hsn", "zh"],
            icl: ["icl", "sgn"],
            ils: ["ils", "sgn"],
            inl: ["inl", "sgn"],
            ins: ["ins", "sgn"],
            ise: ["ise", "sgn"],
            isg: ["isg", "sgn"],
            isr: ["isr", "sgn"],
            jak: ["jak", "ms"],
            jax: ["jax", "ms"],
            jcs: ["jcs", "sgn"],
            jhs: ["jhs", "sgn"],
            jls: ["jls", "sgn"],
            jos: ["jos", "sgn"],
            jsl: ["jsl", "sgn"],
            jus: ["jus", "sgn"],
            kgi: ["kgi", "sgn"],
            knn: ["knn", "kok"],
            kvb: ["kvb", "ms"],
            kvk: ["kvk", "sgn"],
            kvr: ["kvr", "ms"],
            kxd: ["kxd", "ms"],
            lbs: ["lbs", "sgn"],
            lce: ["lce", "ms"],
            lcf: ["lcf", "ms"],
            liw: ["liw", "ms"],
            lls: ["lls", "sgn"],
            lsg: ["lsg", "sgn"],
            lsl: ["lsl", "sgn"],
            lso: ["lso", "sgn"],
            lsp: ["lsp", "sgn"],
            lst: ["lst", "sgn"],
            lsy: ["lsy", "sgn"],
            ltg: ["ltg", "lv"],
            lvs: ["lvs", "lv"],
            lzh: ["lzh", "zh"],
            max: ["max", "ms"],
            mdl: ["mdl", "sgn"],
            meo: ["meo", "ms"],
            mfa: ["mfa", "ms"],
            mfb: ["mfb", "ms"],
            mfs: ["mfs", "sgn"],
            min: ["min", "ms"],
            mnp: ["mnp", "zh"],
            mqg: ["mqg", "ms"],
            mre: ["mre", "sgn"],
            msd: ["msd", "sgn"],
            msi: ["msi", "ms"],
            msr: ["msr", "sgn"],
            mui: ["mui", "ms"],
            mzc: ["mzc", "sgn"],
            mzg: ["mzg", "sgn"],
            mzy: ["mzy", "sgn"],
            nan: ["nan", "zh"],
            nbs: ["nbs", "sgn"],
            ncs: ["ncs", "sgn"],
            nsi: ["nsi", "sgn"],
            nsl: ["nsl", "sgn"],
            nsp: ["nsp", "sgn"],
            nsr: ["nsr", "sgn"],
            nzs: ["nzs", "sgn"],
            okl: ["okl", "sgn"],
            orn: ["orn", "ms"],
            ors: ["ors", "ms"],
            pel: ["pel", "ms"],
            pga: ["pga", "ar"],
            pks: ["pks", "sgn"],
            prl: ["prl", "sgn"],
            prz: ["prz", "sgn"],
            psc: ["psc", "sgn"],
            psd: ["psd", "sgn"],
            pse: ["pse", "ms"],
            psg: ["psg", "sgn"],
            psl: ["psl", "sgn"],
            pso: ["pso", "sgn"],
            psp: ["psp", "sgn"],
            psr: ["psr", "sgn"],
            pys: ["pys", "sgn"],
            rms: ["rms", "sgn"],
            rsi: ["rsi", "sgn"],
            rsl: ["rsl", "sgn"],
            sdl: ["sdl", "sgn"],
            sfb: ["sfb", "sgn"],
            sfs: ["sfs", "sgn"],
            sgg: ["sgg", "sgn"],
            sgx: ["sgx", "sgn"],
            shu: ["shu", "ar"],
            slf: ["slf", "sgn"],
            sls: ["sls", "sgn"],
            sqk: ["sqk", "sgn"],
            sqs: ["sqs", "sgn"],
            ssh: ["ssh", "ar"],
            ssp: ["ssp", "sgn"],
            ssr: ["ssr", "sgn"],
            svk: ["svk", "sgn"],
            swc: ["swc", "sw"],
            swh: ["swh", "sw"],
            swl: ["swl", "sgn"],
            syy: ["syy", "sgn"],
            tmw: ["tmw", "ms"],
            tse: ["tse", "sgn"],
            tsm: ["tsm", "sgn"],
            tsq: ["tsq", "sgn"],
            tss: ["tss", "sgn"],
            tsy: ["tsy", "sgn"],
            tza: ["tza", "sgn"],
            ugn: ["ugn", "sgn"],
            ugy: ["ugy", "sgn"],
            ukl: ["ukl", "sgn"],
            uks: ["uks", "sgn"],
            urk: ["urk", "ms"],
            uzn: ["uzn", "uz"],
            uzs: ["uzs", "uz"],
            vgt: ["vgt", "sgn"],
            vkk: ["vkk", "ms"],
            vkt: ["vkt", "ms"],
            vsi: ["vsi", "sgn"],
            vsl: ["vsl", "sgn"],
            vsv: ["vsv", "sgn"],
            wuu: ["wuu", "zh"],
            xki: ["xki", "sgn"],
            xml: ["xml", "sgn"],
            xmm: ["xmm", "ms"],
            xms: ["xms", "sgn"],
            yds: ["yds", "sgn"],
            ysl: ["ysl", "sgn"],
            yue: ["yue", "zh"],
            zib: ["zib", "sgn"],
            zlm: ["zlm", "ms"],
            zmi: ["zmi", "ms"],
            zsl: ["zsl", "sgn"],
            zsm: ["zsm", "ms"]
        }
    }, mb = {
        BHD: 3,
        BYR: 0,
        XOF: 0,
        BIF: 0,
        XAF: 0,
        CLF: 0,
        CLP: 0,
        KMF: 0,
        DJF: 0,
        XPF: 0,
        GNF: 0,
        ISK: 0,
        IQD: 3,
        JPY: 0,
        JOD: 3,
        KRW: 0,
        KWD: 3,
        LYD: 3,
        OMR: 3,
        PYG: 0,
        RWF: 0,
        TND: 3,
        UGX: 0,
        UYI: 0,
        VUV: 0,
        VND: 0
    };
    !function() {
        var a = "[a-z]{3}(?:-[a-z]{3}){0,2}", b = "(?:[a-z]{2,3}(?:-" + a + ")?|[a-z]{4}|[a-z]{5,8})", c = "[a-z]{4}", d = "(?:[a-z]{2}|\\d{3})", e = "(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3})", f = "[0-9a-wy-z]", g = f + "(?:-[a-z0-9]{2,8})+", h = "x(?:-[a-z0-9]{1,8})+", i = "(?:en-GB-oed|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)|sgn-(?:BE-FR|BE-NL|CH-DE))", j = "(?:art-lojban|cel-gaulish|no-bok|no-nyn|zh-(?:guoyu|hakka|min|min-nan|xiang))", k = "(?:" + i + "|" + j + ")", l = b + "(?:-" + c + ")?(?:-" + d + ")?(?:-" + e + ")*(?:-" + g + ")*(?:-" + h + ")?";
        P = RegExp("^(?:" + l + "|" + h + "|" + k + ")$", "i"), R = RegExp("^(?!x).*?-(" + e + ")-(?:\\w{4,8}-(?!x-))*\\1\\b", "i"), S = RegExp("^(?!x).*?-(" + f + ")-(?:\\w+-(?!x-))*\\1\\b", "i"), Q = RegExp("-" + g, "ig")
    }(), X(T, "NumberFormat", {
        configurable: !0,
        writable: !0,
        value: o
    }), X(T.NumberFormat, "prototype", {
        writable: !1
    }), eb.NumberFormat = {
        "[[availableLocales]]": [],
        "[[relevantExtensionKeys]]": ["nu"],
        "[[localeData]]": {}
    }, X(T.NumberFormat, "supportedLocalesOf", {
        configurable: !0,
        writable: !0,
        value: db.call(G, eb.NumberFormat)
    }), X(T.NumberFormat.prototype, "format", {
        configurable: !0,
        get: r
    });
    var nb = {
        arab: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
        arabext: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
        bali: ["᭐", "᭑", "᭒", "᭓", "᭔", "᭕", "᭖", "᭗", "᭘", "᭙"],
        beng: ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"],
        deva: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
        fullwide: ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"],
        gujr: ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"],
        guru: ["੦", "੧", "੨", "੩", "੪", "੫", "੬", "੭", "੮", "੯"],
        hanidec: ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
        khmr: ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"],
        knda: ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"],
        laoo: ["໐", "໑", "໒", "໓", "໔", "໕", "໖", "໗", "໘", "໙"],
        latn: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        limb: ["᥆", "᥇", "᥈", "᥉", "᥊", "᥋", "᥌", "᥍", "᥎", "᥏"],
        mlym: ["൦", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯"],
        mong: ["᠐", "᠑", "᠒", "᠓", "᠔", "᠕", "᠖", "᠗", "᠘", "᠙"],
        mymr: ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"],
        orya: ["୦", "୧", "୨", "୩", "୪", "୫", "୬", "୭", "୮", "୯"],
        tamldec: ["௦", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯"],
        telu: ["౦", "౧", "౨", "౩", "౪", "౫", "౬", "౭", "౮", "౯"],
        thai: ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"],
        tibt: ["༠", "༡", "༢", "༣", "༤", "༥", "༦", "༧", "༨", "༩"]
    };
    X(T.NumberFormat.prototype, "resolvedOptions", {
        configurable: !0,
        writable: !0,
        value: function() {
            var a, b = new I, c = ["locale", "numberingSystem", "style", "currency", "currencyDisplay", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "useGrouping"], d = null != this && "object" == typeof this && N(this);
            if (!d ||!d["[[initializedNumberFormat]]"])
                throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.");
            for (var e = 0, f = c.length; f > e; e++)
                W.call(d, a = "[[" + c[e] + "]]") && (b[c[e]] = {
                    value: d[a],
                    writable: !0,
                    configurable: !0,
                    enumerable: !0
                });
            return Z({}, b)
        }
    }), X(T, "DateTimeFormat", {
        configurable: !0,
        writable: !0,
        value: v
    }), X(v, "prototype", {
        writable: !1
    });
    var ob = {
        weekday: ["narrow", "short", "long"],
        era: ["narrow", "short", "long"],
        year: ["2-digit", "numeric"],
        month: ["2-digit", "numeric", "narrow", "short", "long"],
        day: ["2-digit", "numeric"],
        hour: ["2-digit", "numeric"],
        minute: ["2-digit", "numeric"],
        second: ["2-digit", "numeric"],
        timeZoneName: ["short", "long"]
    };
    eb.DateTimeFormat = {
        "[[availableLocales]]": [],
        "[[relevantExtensionKeys]]": ["ca", "nu"],
        "[[localeData]]": {}
    }, X(T.DateTimeFormat, "supportedLocalesOf", {
        configurable: !0,
        writable: !0,
        value: db.call(G, eb.DateTimeFormat)
    }), X(T.DateTimeFormat.prototype, "format", {
        configurable: !0,
        get: B
    }), X(T.DateTimeFormat.prototype, "resolvedOptions", {
        writable: !0,
        configurable: !0,
        value: function() {
            var a, b = new I, c = ["locale", "calendar", "numberingSystem", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"], d = null != this && "object" == typeof this && N(this);
            if (!d ||!d["[[initializedDateTimeFormat]]"])
                throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.");
            for (var e = 0, f = c.length; f > e; e++)
                W.call(d, a = "[[" + c[e] + "]]") && (b[c[e]] = {
                    value: d[a],
                    writable: !0,
                    configurable: !0,
                    enumerable: !0
                });
            return Z({}, b)
        }
    });
    var pb = T.__localeSensitiveProtos = {
        Number: {},
        Date: {}
    };
    return pb.Number.toLocaleString = function() {
        if ("[object Number]" !== Object.prototype.toString.call(this))
            throw new TypeError("`this` value must be a number for Number.prototype.toLocaleString()");
        return s(new o(arguments[0], arguments[1]), this)
    }, pb.Date.toLocaleString = function() {
        if ("[object Date]" !== Object.prototype.toString.call(this))
            throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleString()");
        var a =+ this;
        if (isNaN(a))
            return "Invalid Date";
        var b = arguments[0], c = arguments[1], c = x(c, "any", "all"), d = new v(b, c);
        return C(d, a)
    }, pb.Date.toLocaleDateString = function() {
        if ("[object Date]" !== Object.prototype.toString.call(this))
            throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleDateString()");
        var a =+ this;
        if (isNaN(a))
            return "Invalid Date";
        var b = arguments[0], c = arguments[1], c = x(c, "date", "date"), d = new v(b, c);
        return C(d, a)
    }, pb.Date.toLocaleTimeString = function() {
        if ("[object Date]" !== Object.prototype.toString.call(this))
            throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleTimeString()");
        var a =+ this;
        if (isNaN(a))
            return "Invalid Date";
        var b = arguments[0], c = arguments[1], c = x(c, "time", "time"), d = new v(b, c);
        return C(d, a)
    }, X(T, "__applyLocaleSensitivePrototypes", {
        writable: !0,
        configurable: !0,
        value: function() {
            X(Number.prototype, "toLocaleString", {
                writable: !0,
                configurable: !0,
                value: pb.Number.toLocaleString
            });
            for (var a in pb.Date)
                W.call(pb.Date, a) && X(Date.prototype, a, {
                    writable: !0,
                    configurable: !0,
                    value: pb.Date[a]
                })
        }
    }), X(T, "__addLocaleData", {
        value: function(b) {
            if (!a(b.locale))
                throw new Error("Object passed doesn't identify itself with a valid language tag");
            E(b, b.locale)
        }
    }), I.prototype = Z(null), J.prototype = Z(null), T
});
IntlPolyfill.__addLocaleData({
    locale: "en-US",
    date: {
        ca: ["gregory", "buddhist", "chinese", "coptic", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "japanese", "persian", "roc"],
        hourNo0: true,
        hour12: true,
        formats: [{
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit",
            pattern: "{weekday}, {month} {day}, {year}, {hour}:{minute}:{second}",
            pattern12: "{weekday}, {month} {day}, {year}, {hour}:{minute}:{second} {ampm}"
        }, {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
            pattern: "{weekday}, {month} {day}, {year}"
        }, {
            month: "long",
            day: "numeric",
            year: "numeric",
            pattern: "{month} {day}, {year}"
        }, {
            month: "numeric",
            day: "numeric",
            year: "numeric",
            pattern: "{month}/{day}/{year}"
        }, {
            month: "numeric",
            year: "numeric",
            pattern: "{month}/{year}"
        }, {
            month: "long",
            year: "numeric",
            pattern: "{month} {year}"
        }, {
            month: "long",
            day: "numeric",
            pattern: "{month} {day}"
        }, {
            month: "numeric",
            day: "numeric",
            pattern: "{month}/{day}"
        }, {
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit",
            pattern: "{hour}:{minute}:{second}",
            pattern12: "{hour}:{minute}:{second} {ampm}"
        }, {
            hour: "numeric",
            minute: "2-digit",
            pattern: "{hour}:{minute}",
            pattern12: "{hour}:{minute} {ampm}"
        }
        ],
        calendars: {
            buddhist: {
                eras: {
                    short: ["BE"]
                }
            },
            chinese: {
                months: {
                    short: ["Mo1", "Mo2", "Mo3", "Mo4", "Mo5", "Mo6", "Mo7", "Mo8", "Mo9", "Mo10", "Mo11", "Mo12"],
                    long: ["Month1", "Month2", "Month3", "Month4", "Month5", "Month6", "Month7", "Month8", "Month9", "Month10", "Month11", "Month12"]
                }
            },
            coptic: {
                months: {
                    long: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"]
                },
                eras: {
                    short: ["ERA0", "ERA1"]
                }
            },
            ethiopic: {
                months: {
                    long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                eras: {
                    short: ["ERA0", "ERA1"]
                }
            },
            ethioaa: {
                eras: {
                    short: ["ERA0"]
                }
            },
            generic: {
                months: {
                    long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                eras: {
                    short: ["ERA0", "ERA1"]
                }
            },
            gregory: {
                months: {
                    short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                },
                days: {
                    narrow: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                    narrow: ["B", "A"],
                    short: ["BC", "AD", "BCE", "CE"],
                    long: ["Before Christ", "Anno Domini", "Before Common Era", "Common Era"]
                },
                dayPeriods: {
                    am: "AM",
                    pm: "PM"
                }
            },
            hebrew: {
                months: {
                    long: ["Tishri", "Heshvan", "Kislev", "Tevet", "Shevat", "Adar I", "Adar", "Nisan", "Iyar", "Sivan", "Tamuz", "Av", "Elul", "Adar II"]
                },
                eras: {
                    short: ["AM"]
                }
            },
            indian: {
                months: {
                    long: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"]
                },
                eras: {
                    short: ["Saka"]
                }
            },
            islamic: {
                months: {
                    short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "Dhuʻl-Q.", "Dhuʻl-H."],
                    long: ["Muharram", "Safar", "Rabiʻ I", "Rabiʻ II", "Jumada I", "Jumada II", "Rajab", "Shaʻban", "Ramadan", "Shawwal", "Dhuʻl-Qiʻdah", "Dhuʻl-Hijjah"]
                },
                eras: {
                    short: ["AH"]
                }
            },
            japanese: {
                eras: {
                    narrow: ["Taika (645-650)", "Hakuchi (650-671)", "Hakuhō (672-686)", "Shuchō (686-701)", "Taihō (701-704)", "Keiun (704-708)", "Wadō (708-715)", "Reiki (715-717)", "Yōrō (717-724)", "Jinki (724-729)", "Tempyō (729-749)", "Tempyō-kampō (749-749)", "Tempyō-shōhō (749-757)", "Tempyō-hōji (757-765)", "Temphō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770-780)", "Ten-ō (781-782)", "Enryaku (782-806)", "Daidō (806-810)", "Kōnin (810-824)", "Tenchō (824-834)", "Jōwa (834-848)", "Kajō (848-851)", "Ninju (851-854)", "Saiko (854-857)", "Tennan (857-859)", "Jōgan (859-877)", "Genkei (877-885)", "Ninna (885-889)", "Kampyō (889-898)", "Shōtai (898-901)", "Engi (901-923)", "Enchō (923-931)", "Shōhei (931-938)", "Tengyō (938-947)", "Tenryaku (947-957)", "Tentoku (957-961)", "Ōwa (961-964)", "Kōhō (964-968)", "Anna (968-970)", "Tenroku (970-973)", "Ten-en (973-976)", "Jōgen (976-978)", "Tengen (978-983)", "Eikan (983-985)", "Kanna (985-987)", "Ei-en (987-989)", "Eiso (989-990)", "Shōryaku (990-995)", "Chōtoku (995-999)", "Chōhō (999-1004)", "Kankō (1004-1012)", "Chōwa (1012-1017)", "Kannin (1017-1021)", "Jian (1021-1024)", "Manju (1024-1028)", "Chōgen (1028-1037)", "Chōryaku (1037-1040)", "Chōkyū (1040-1044)", "Kantoku (1044-1046)", "Eishō (1046-1053)", "Tengi (1053-1058)", "Kōhei (1058-1065)", "Jiryaku (1065-1069)", "Enkyū (1069-1074)", "Shōho (1074-1077)", "Shōryaku (1077-1081)", "Eiho (1081-1084)", "Ōtoku (1084-1087)", "Kanji (1087-1094)", "Kaho (1094-1096)", "Eichō (1096-1097)", "Shōtoku (1097-1099)", "Kōwa (1099-1104)", "Chōji (1104-1106)", "Kashō (1106-1108)", "Tennin (1108-1110)", "Ten-ei (1110-1113)", "Eikyū (1113-1118)", "Gen-ei (1118-1120)", "Hoan (1120-1124)", "Tenji (1124-1126)", "Daiji (1126-1131)", "Tenshō (1131-1132)", "Chōshō (1132-1135)", "Hoen (1135-1141)", "Eiji (1141-1142)", "Kōji (1142-1144)", "Tenyō (1144-1145)", "Kyūan (1145-1151)", "Ninpei (1151-1154)", "Kyūju (1154-1156)", "Hogen (1156-1159)", "Heiji (1159-1160)", "Eiryaku (1160-1161)", "Ōho (1161-1163)", "Chōkan (1163-1165)", "Eiman (1165-1166)", "Nin-an (1166-1169)", "Kaō (1169-1171)", "Shōan (1171-1175)", "Angen (1175-1177)", "Jishō (1177-1181)", "Yōwa (1181-1182)", "Juei (1182-1184)", "Genryuku (1184-1185)", "Bunji (1185-1190)", "Kenkyū (1190-1199)", "Shōji (1199-1201)", "Kennin (1201-1204)", "Genkyū (1204-1206)", "Ken-ei (1206-1207)", "Shōgen (1207-1211)", "Kenryaku (1211-1213)", "Kenpō (1213-1219)", "Shōkyū (1219-1222)", "Jōō (1222-1224)", "Gennin (1224-1225)", "Karoku (1225-1227)", "Antei (1227-1229)", "Kanki (1229-1232)", "Jōei (1232-1233)", "Tempuku (1233-1234)", "Bunryaku (1234-1235)", "Katei (1235-1238)", "Ryakunin (1238-1239)", "En-ō (1239-1240)", "Ninji (1240-1243)", "Kangen (1243-1247)", "Hōji (1247-1249)", "Kenchō (1249-1256)", "Kōgen (1256-1257)", "Shōka (1257-1259)", "Shōgen (1259-1260)", "Bun-ō (1260-1261)", "Kōchō (1261-1264)", "Bun-ei (1264-1275)", "Kenji (1275-1278)", "Kōan (1278-1288)", "Shōō (1288-1293)", "Einin (1293-1299)", "Shōan (1299-1302)", "Kengen (1302-1303)", "Kagen (1303-1306)", "Tokuji (1306-1308)", "Enkei (1308-1311)", "Ōchō (1311-1312)", "Shōwa (1312-1317)", "Bunpō (1317-1319)", "Genō (1319-1321)", "Genkyō (1321-1324)", "Shōchū (1324-1326)", "Kareki (1326-1329)", "Gentoku (1329-1331)", "Genkō (1331-1334)", "Kemmu (1334-1336)", "Engen (1336-1340)", "Kōkoku (1340-1346)", "Shōhei (1346-1370)", "Kentoku (1370-1372)", "Bunchũ (1372-1375)", "Tenju (1375-1379)", "Kōryaku (1379-1381)", "Kōwa (1381-1384)", "Genchũ (1384-1392)", "Meitoku (1384-1387)", "Kakei (1387-1389)", "Kōō (1389-1390)", "Meitoku (1390-1394)", "Ōei (1394-1428)", "Shōchō (1428-1429)", "Eikyō (1429-1441)", "Kakitsu (1441-1444)", "Bun-an (1444-1449)", "Hōtoku (1449-1452)", "Kyōtoku (1452-1455)", "Kōshō (1455-1457)", "Chōroku (1457-1460)", "Kanshō (1460-1466)", "Bunshō (1466-1467)", "Ōnin (1467-1469)", "Bunmei (1469-1487)", "Chōkyō (1487-1489)", "Entoku (1489-1492)", "Meiō (1492-1501)", "Bunki (1501-1504)", "Eishō (1504-1521)", "Taiei (1521-1528)", "Kyōroku (1528-1532)", "Tenmon (1532-1555)", "Kōji (1555-1558)", "Eiroku (1558-1570)", "Genki (1570-1573)", "Tenshō (1573-1592)", "Bunroku (1592-1596)", "Keichō (1596-1615)", "Genwa (1615-1624)", "Kan-ei (1624-1644)", "Shōho (1644-1648)", "Keian (1648-1652)", "Shōō (1652-1655)", "Meiryaku (1655-1658)", "Manji (1658-1661)", "Kanbun (1661-1673)", "Enpō (1673-1681)", "Tenwa (1681-1684)", "Jōkyō (1684-1688)", "Genroku (1688-1704)", "Hōei (1704-1711)", "Shōtoku (1711-1716)", "Kyōhō (1716-1736)", "Genbun (1736-1741)", "Kanpō (1741-1744)", "Enkyō (1744-1748)", "Kan-en (1748-1751)", "Hōryaku (1751-1764)", "Meiwa (1764-1772)", "An-ei (1772-1781)", "Tenmei (1781-1789)", "Kansei (1789-1801)", "Kyōwa (1801-1804)", "Bunka (1804-1818)", "Bunsei (1818-1830)", "Tenpō (1830-1844)", "Kōka (1844-1848)", "Kaei (1848-1854)", "Ansei (1854-1860)", "Man-en (1860-1861)", "Bunkyū (1861-1864)", "Genji (1864-1865)", "Keiō (1865-1868)", "M", "T", "S", "H"],
                    short: ["Taika (645-650)", "Hakuchi (650-671)", "Hakuhō (672-686)", "Shuchō (686-701)", "Taihō (701-704)", "Keiun (704-708)", "Wadō (708-715)", "Reiki (715-717)", "Yōrō (717-724)", "Jinki (724-729)", "Tempyō (729-749)", "Tempyō-kampō (749-749)", "Tempyō-shōhō (749-757)", "Tempyō-hōji (757-765)", "Temphō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770-780)", "Ten-ō (781-782)", "Enryaku (782-806)", "Daidō (806-810)", "Kōnin (810-824)", "Tenchō (824-834)", "Jōwa (834-848)", "Kajō (848-851)", "Ninju (851-854)", "Saiko (854-857)", "Tennan (857-859)", "Jōgan (859-877)", "Genkei (877-885)", "Ninna (885-889)", "Kampyō (889-898)", "Shōtai (898-901)", "Engi (901-923)", "Enchō (923-931)", "Shōhei (931-938)", "Tengyō (938-947)", "Tenryaku (947-957)", "Tentoku (957-961)", "Ōwa (961-964)", "Kōhō (964-968)", "Anna (968-970)", "Tenroku (970-973)", "Ten-en (973-976)", "Jōgen (976-978)", "Tengen (978-983)", "Eikan (983-985)", "Kanna (985-987)", "Ei-en (987-989)", "Eiso (989-990)", "Shōryaku (990-995)", "Chōtoku (995-999)", "Chōhō (999-1004)", "Kankō (1004-1012)", "Chōwa (1012-1017)", "Kannin (1017-1021)", "Jian (1021-1024)", "Manju (1024-1028)", "Chōgen (1028-1037)", "Chōryaku (1037-1040)", "Chōkyū (1040-1044)", "Kantoku (1044-1046)", "Eishō (1046-1053)", "Tengi (1053-1058)", "Kōhei (1058-1065)", "Jiryaku (1065-1069)", "Enkyū (1069-1074)", "Shōho (1074-1077)", "Shōryaku (1077-1081)", "Eiho (1081-1084)", "Ōtoku (1084-1087)", "Kanji (1087-1094)", "Kaho (1094-1096)", "Eichō (1096-1097)", "Shōtoku (1097-1099)", "Kōwa (1099-1104)", "Chōji (1104-1106)", "Kashō (1106-1108)", "Tennin (1108-1110)", "Ten-ei (1110-1113)", "Eikyū (1113-1118)", "Gen-ei (1118-1120)", "Hoan (1120-1124)", "Tenji (1124-1126)", "Daiji (1126-1131)", "Tenshō (1131-1132)", "Chōshō (1132-1135)", "Hoen (1135-1141)", "Eiji (1141-1142)", "Kōji (1142-1144)", "Tenyō (1144-1145)", "Kyūan (1145-1151)", "Ninpei (1151-1154)", "Kyūju (1154-1156)", "Hogen (1156-1159)", "Heiji (1159-1160)", "Eiryaku (1160-1161)", "Ōho (1161-1163)", "Chōkan (1163-1165)", "Eiman (1165-1166)", "Nin-an (1166-1169)", "Kaō (1169-1171)", "Shōan (1171-1175)", "Angen (1175-1177)", "Jishō (1177-1181)", "Yōwa (1181-1182)", "Juei (1182-1184)", "Genryuku (1184-1185)", "Bunji (1185-1190)", "Kenkyū (1190-1199)", "Shōji (1199-1201)", "Kennin (1201-1204)", "Genkyū (1204-1206)", "Ken-ei (1206-1207)", "Shōgen (1207-1211)", "Kenryaku (1211-1213)", "Kenpō (1213-1219)", "Shōkyū (1219-1222)", "Jōō (1222-1224)", "Gennin (1224-1225)", "Karoku (1225-1227)", "Antei (1227-1229)", "Kanki (1229-1232)", "Jōei (1232-1233)", "Tempuku (1233-1234)", "Bunryaku (1234-1235)", "Katei (1235-1238)", "Ryakunin (1238-1239)", "En-ō (1239-1240)", "Ninji (1240-1243)", "Kangen (1243-1247)", "Hōji (1247-1249)", "Kenchō (1249-1256)", "Kōgen (1256-1257)", "Shōka (1257-1259)", "Shōgen (1259-1260)", "Bun-ō (1260-1261)", "Kōchō (1261-1264)", "Bun-ei (1264-1275)", "Kenji (1275-1278)", "Kōan (1278-1288)", "Shōō (1288-1293)", "Einin (1293-1299)", "Shōan (1299-1302)", "Kengen (1302-1303)", "Kagen (1303-1306)", "Tokuji (1306-1308)", "Enkei (1308-1311)", "Ōchō (1311-1312)", "Shōwa (1312-1317)", "Bunpō (1317-1319)", "Genō (1319-1321)", "Genkyō (1321-1324)", "Shōchū (1324-1326)", "Kareki (1326-1329)", "Gentoku (1329-1331)", "Genkō (1331-1334)", "Kemmu (1334-1336)", "Engen (1336-1340)", "Kōkoku (1340-1346)", "Shōhei (1346-1370)", "Kentoku (1370-1372)", "Bunchū (1372-1375)", "Tenju (1375-1379)", "Kōryaku (1379-1381)", "Kōwa (1381-1384)", "Genchū (1384-1392)", "Meitoku (1384-1387)", "Kakei (1387-1389)", "Kōō (1389-1390)", "Meitoku (1390-1394)", "Ōei (1394-1428)", "Shōchō (1428-1429)", "Eikyō (1429-1441)", "Kakitsu (1441-1444)", "Bun-an (1444-1449)", "Hōtoku (1449-1452)", "Kyōtoku (1452-1455)", "Kōshō (1455-1457)", "Chōroku (1457-1460)", "Kanshō (1460-1466)", "Bunshō (1466-1467)", "Ōnin (1467-1469)", "Bunmei (1469-1487)", "Chōkyō (1487-1489)", "Entoku (1489-1492)", "Meiō (1492-1501)", "Bunki (1501-1504)", "Eishō (1504-1521)", "Taiei (1521-1528)", "Kyōroku (1528-1532)", "Tenmon (1532-1555)", "Kōji (1555-1558)", "Eiroku (1558-1570)", "Genki (1570-1573)", "Tenshō (1573-1592)", "Bunroku (1592-1596)", "Keichō (1596-1615)", "Genwa (1615-1624)", "Kan-ei (1624-1644)", "Shōho (1644-1648)", "Keian (1648-1652)", "Shōō (1652-1655)", "Meiryaku (1655-1658)", "Manji (1658-1661)", "Kanbun (1661-1673)", "Enpō (1673-1681)", "Tenwa (1681-1684)", "Jōkyō (1684-1688)", "Genroku (1688-1704)", "Hōei (1704-1711)", "Shōtoku (1711-1716)", "Kyōhō (1716-1736)", "Genbun (1736-1741)", "Kanpō (1741-1744)", "Enkyō (1744-1748)", "Kan-en (1748-1751)", "Hōryaku (1751-1764)", "Meiwa (1764-1772)", "An-ei (1772-1781)", "Tenmei (1781-1789)", "Kansei (1789-1801)", "Kyōwa (1801-1804)", "Bunka (1804-1818)", "Bunsei (1818-1830)", "Tenpō (1830-1844)", "Kōka (1844-1848)", "Kaei (1848-1854)", "Ansei (1854-1860)", "Man-en (1860-1861)", "Bunkyū (1861-1864)", "Genji (1864-1865)", "Keiō (1865-1868)", "Meiji", "Taishō", "Shōwa", "Heisei"]
                }
            },
            persian: {
                months: {
                    long: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"]
                },
                eras: {
                    short: ["AP"]
                }
            },
            roc: {
                eras: {
                    short: ["Before R.O.C.", "Minguo"]
                }
            }
        }
    },
    number: {
        nu: ["latn"],
        patterns: {
            decimal: {
                positivePattern: "{number}",
                negativePattern: "-{number}"
            },
            currency: {
                positivePattern: "{currency}{number}",
                negativePattern: "-{currency}{number}"
            },
            percent: {
                positivePattern: "{number}%",
                negativePattern: "-{number}%"
            }
        },
        symbols: {
            latn: {
                decimal: ".",
                group: ",",
                nan: "NaN",
                percent: "%",
                infinity: "∞"
            }
        },
        currencies: {
            AUD: "A$",
            BRL: "R$",
            CAD: "CA$",
            CNY: "CN¥",
            EUR: "€",
            GBP: "£",
            HKD: "HK$",
            ILS: "₪",
            INR: "₹",
            JPY: "¥",
            KRW: "₩",
            MXN: "MX$",
            NZD: "NZ$",
            THB: "฿",
            TWD: "NT$",
            USD: "$",
            VND: "₫",
            XAF: "FCFA",
            XCD: "EC$",
            XOF: "CFA",
            XPF: "CFPF"
        }
    }
})
