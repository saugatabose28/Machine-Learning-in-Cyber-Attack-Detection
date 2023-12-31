/* Web Font Loader v1.5.6 - (c) Adobe Systems, Google. License: Apache 2.0 */
;
(function(window, document, undefined) {
    var j=!0, k = null, m=!1;
    function n(a) {
        return function() {
            return this[a]
        }
    }
    var p = this;
    function q(a, b) {
        var c = a.split("."), d = p;
        !(c[0]in d) && d.execScript && d.execScript("var " + c[0]);
        for (var f; c.length && (f = c.shift());)
            !c.length && void 0 !== b ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
    }
    function aa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function ba(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function r(a, b, c) {
        r = Function.prototype.bind&&-1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
        return r.apply(k, arguments)
    }
    var s = Date.now || function() {
        return + new Date
    };
    function t(a, b) {
        this.z = a;
        this.fa = b || a;
        this.w = this.fa.document
    }
    t.prototype.createElement = function(a, b, c) {
        a = this.w.createElement(a);
        if (b)
            for (var d in b)
                b.hasOwnProperty(d) && ("style" == d ? a.style.cssText = b[d] : a.setAttribute(d, b[d]));
        c && a.appendChild(this.w.createTextNode(c));
        return a
    };
    function u(a, b, c) {
        a = a.w.getElementsByTagName(b)[0];
        a || (a = document.documentElement);
        a && a.lastChild && a.insertBefore(c, a.lastChild)
    }
    function v(a, b, c) {
        b = b || [];
        c = c || [];
        for (var d = a.className.split(/\s+/), f = 0; f < b.length; f += 1) {
            for (var g = m, e = 0; e < d.length; e += 1)
                if (b[f] === d[e]) {
                    g = j;
                    break
                }
            g || d.push(b[f])
        }
        b = [];
        for (f = 0; f < d.length; f += 1) {
            g = m;
            for (e = 0; e < c.length; e += 1)
                if (d[f] === c[e]) {
                    g = j;
                    break
                }
            g || b.push(d[f])
        }
        a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }
    function w(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, f = c.length; d < f; d++)
            if (c[d] == b)
                return j;
        return m
    }
    function ca(a, b) {
        var c = a.createElement("link", {
            rel: "stylesheet",
            href: b
        }), d = m;
        c.onload = function() {
            d || (d = j)
        };
        c.onerror = function() {
            d || (d = j)
        };
        u(a, "head", c)
    };
    function x(a, b, c) {
        this.N = a;
        this.D = b;
        this.la = c
    }
    q("webfont.BrowserInfo", x);
    x.prototype.$ = n("N");
    x.prototype.hasWebFontSupport = x.prototype.$;
    x.prototype.aa = n("D");
    x.prototype.hasWebKitFallbackBug = x.prototype.aa;
    x.prototype.ba = n("la");
    x.prototype.hasWebKitMetricsBug = x.prototype.ba;
    function y(a, b, c, d) {
        this.b = a != k ? a : k;
        this.i = b != k ? b : k;
        this.L = c != k ? c : k;
        this.c = d != k ? d : k
    }
    var da = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
    y.prototype.toString = function() {
        return [this.b, this.i || "", this.L || "", this.c || ""].join("")
    };
    function z(a) {
        a = da.exec(a);
        var b = k, c = k, d = k, f = k;
        a && (a[1] !== k && a[1] && (b = parseInt(a[1], 10)), a[2] !== k && a[2] && (c = parseInt(a[2], 10)), a[3] !== k && a[3] && (d = parseInt(a[3], 10)), a[4] !== k && a[4] && (f = /^[0-9]+$/.test(a[4]) ? parseInt(a[4], 10) : a[4]));
        return new y(b, c, d, f)
    };
    function A(a, b, c, d, f, g, e, h, l, C, ea) {
        this.r = a;
        this.ra = b;
        this.ka = c;
        this.Q = d;
        this.pa = f;
        this.P = g;
        this.ha = e;
        this.qa = h;
        this.ga = l;
        this.O = C;
        this.g = ea
    }
    q("webfont.UserAgent", A);
    A.prototype.getName = n("r");
    A.prototype.getName = A.prototype.getName;
    A.prototype.Z = n("ka");
    A.prototype.getVersion = A.prototype.Z;
    A.prototype.V = n("Q");
    A.prototype.getEngine = A.prototype.V;
    A.prototype.W = n("P");
    A.prototype.getEngineVersion = A.prototype.W;
    A.prototype.X = n("ha");
    A.prototype.getPlatform = A.prototype.X;
    A.prototype.Y = n("ga");
    A.prototype.getPlatformVersion = A.prototype.Y;
    A.prototype.U = n("O");
    A.prototype.getDocumentMode = A.prototype.U;
    A.prototype.T = n("g");
    A.prototype.getBrowserInfo = A.prototype.T;
    function B(a, b) {
        this.a = a;
        this.q = b
    }
    var fa = new A("Unknown", new y, "Unknown", "Unknown", new y, "Unknown", "Unknown", new y, "Unknown", void 0, new x(m, m, m));
    B.prototype.parse = function() {
        var a;
        if ( - 1 != this.a.indexOf("MSIE")||-1 != this.a.indexOf("Trident/")) {
            a = D(this);
            var b = E(this), c = z(b), d = k, f = k, g = k, e = k, h = F(this.a, /Trident\/([\d\w\.]+)/, 1), l = G(this.q), d =- 1 != this.a.indexOf("MSIE") ? F(this.a, /MSIE ([\d\w\.]+)/, 1) : F(this.a, /rv:([\d\w\.]+)/, 1), f = z(d);
            "" != h ? (g = "Trident", e = z(h)) : (g = "Unknown", e = new y, h = "Unknown");
            a = new A("MSIE", f, d, g, e, h, a, c, b, l, new x("Windows" == a && 6 <= f.b || "Windows Phone" == a && 8 <= c.b, m, m))
        } else if ( - 1 != this.a.indexOf("Opera"))
            a: if (a = "Unknown", b = F(this.a,
        /Presto\/([\d\w\.]+)/, 1), c = z(b), d = E(this), f = z(d), g = G(this.q), c.b !== k ? a = "Presto" : ( - 1 != this.a.indexOf("Gecko") && (a = "Gecko"), b = F(this.a, /rv:([^\)]+)/, 1), c = z(b)), - 1 != this.a.indexOf("Opera Mini/"))
            e = F(this.a, /Opera Mini\/([\d\.]+)/, 1), h = z(e), a = new A("OperaMini", h, e, a, c, b, D(this), f, d, g, new x(m, m, m));
        else {
            if ( - 1 != this.a.indexOf("Version/") && (e = F(this.a, /Version\/([\d\.]+)/, 1), h = z(e), h.b !== k)) {
                a = new A("Opera", h, e, a, c, b, D(this), f, d, g, new x(10 <= h.b, m, m));
                break a
            }
            e = F(this.a, /Opera[\/ ]([\d\.]+)/, 1);
            h = z(e);
            a =
            h.b !== k ? new A("Opera", h, e, a, c, b, D(this), f, d, g, new x(10 <= h.b, m, m)) : new A("Opera", new y, "Unknown", a, c, b, D(this), f, d, g, new x(m, m, m))
        } else 
            / OPR\ / [\d.] + /.test(this.a)?a=H(this):/AppleWeb(K | k)it / .test(this.a) ? a = H(this) : - 1 != this.a.indexOf("Gecko") ? (a = "Unknown", b = new y, c = "Unknown", d = E(this), f = z(d), g = m, - 1 != this.a.indexOf("Firefox") ? (a = "Firefox", c = F(this.a, /Firefox\/([\d\w\.]+)/, 1), b = z(c), g = 3 <= b.b && 5 <= b.i) : - 1 != this.a.indexOf("Mozilla") && (a = "Mozilla"), e = F(this.a, /rv:([^\)]+)/, 1), h = z(e), g || (g = 1 < h.b || 1 == h.b && 9 <
        h.i || 1 == h.b && 9 == h.i && 2 <= h.L || e.match(/1\.9\.1b[123]/) != k || e.match(/1\.9\.1\.[\d\.]+/) != k), a = new A(a, b, c, "Gecko", h, e, D(this), f, d, G(this.q), new x(g, m, m))) : a = fa;
        return a
    };
    function D(a) {
        var b = F(a.a, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
        if ("" != b)
            return /BB\d{2}/.test(b) && (b = "BlackBerry"), b;
        a = F(a.a, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/, 1);
        return "" != a ? ("Mac_PowerPC" == a ? a = "Macintosh" : "PlayStation" == a && (a = "Linux"), a) : "Unknown"
    }
    function E(a) {
        var b = F(a.a, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
        if (b || (b = F(a.a, /Windows Phone( OS)? ([^;)]+)/, 2)) || (b = F(a.a, /(iPhone )?OS ([\d_]+)/, 2)))
            return b;
        if (b = F(a.a, /(?:Linux|CrOS|CrKey) ([^;)]+)/, 1))
            for (var b = b.split(/\s/), c = 0; c < b.length; c += 1)
                if (/^[\d\._]+$/.test(b[c]))
                    return b[c];
        return (a = F(a.a, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? a : "Unknown"
    }
    function H(a) {
        var b = D(a), c = E(a), d = z(c), f = F(a.a, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1), g = z(f), e = "Unknown", h = new y, l = "Unknown", C = m;
        /OPR\/[\d.]+/.test(a.a) ? e = "Opera" : - 1 != a.a.indexOf("Chrome")||-1 != a.a.indexOf("CrMo")||-1 != a.a.indexOf("CriOS") ? e = "Chrome" : /Silk\/\d/.test(a.a) ? e = "Silk" : "BlackBerry" == b || "Android" == b ? e = "BuiltinBrowser" : - 1 != a.a.indexOf("PhantomJS") ? e = "PhantomJS" : - 1 != a.a.indexOf("Safari") ? e = "Safari" : - 1 != a.a.indexOf("AdobeAIR") ? e = "AdobeAIR" : - 1 != a.a.indexOf("PlayStation") && (e = "BuiltinBrowser");
        "BuiltinBrowser" == e ? l = "Unknown" : "Silk" == e ? l = F(a.a, /Silk\/([\d\._]+)/, 1) : "Chrome" == e ? l = F(a.a, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : - 1 != a.a.indexOf("Version/") ? l = F(a.a, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == e ? l = F(a.a, /AdobeAIR\/([\d\.]+)/, 1) : "Opera" == e ? l = F(a.a, /OPR\/([\d.]+)/, 1) : "PhantomJS" == e && (l = F(a.a, /PhantomJS\/([\d.]+)/, 1));
        h = z(l);
        C = "AdobeAIR" == e ? 2 < h.b || 2 == h.b && 5 <= h.i : "BlackBerry" == b ? 10 <= d.b : "Android" == b ? 2 < d.b || 2 == d.b && 1 < d.i : 526 <= g.b || 525 <= g.b && 13 <= g.i;
        return new A(e, h, l, "AppleWebKit", g, f, b, d, c, G(a.q),
        new x(C, 536 > g.b || 536 == g.b && 11 > g.i, "iPhone" == b || "iPad" == b || "iPod" == b || "Macintosh" == b))
    }
    function F(a, b, c) {
        return (a = a.match(b)) && a[c] ? a[c] : ""
    }
    function G(a) {
        if (a.documentMode)
            return a.documentMode
    };
    function I(a) {
        this.ea = a || "-"
    }
    I.prototype.c = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++)
            b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
        return b.join(this.ea)
    };
    function J(a, b) {
        this.r = a;
        this.F = 4;
        this.s = "n";
        var c = (b || "n4").match(/^([nio])([1-9])$/i);
        c && (this.s = c[1], this.F = parseInt(c[2], 10))
    }
    J.prototype.getName = n("r");
    function K(a) {
        return a.s + a.F
    };
    function ga(a, b, c) {
        this.d = a;
        this.h = b;
        this.t = c;
        this.f = "wf";
        this.e = new I("-")
    }
    function L(a) {
        var b = w(a.h, a.e.c(a.f, "active")), c = [], d = [a.e.c(a.f, "loading")];
        b || c.push(a.e.c(a.f, "inactive"));
        v(a.h, c, d);
        M(a, "inactive")
    }
    function M(a, b, c) {
        if (a.t[b])
            if (c)
                a.t[b](c.getName(), K(c));
            else 
                a.t[b]()
    };
    function ha() {
        this.K = {}
    };
    function N(a, b) {
        this.d = a;
        this.o = b;
        this.k = this.d.createElement("span", {
            "aria-hidden": "true"
        }, this.o)
    }
    function O(a, b) {
        for (var c = [], d = b.r.split(/,\s*/), f = 0; f < d.length; f++) {
            var g = d[f].replace(/['"]/g, "");
            - 1 == g.indexOf(" ") ? c.push(g) : c.push("'" + g + "'")
        }
        c = "display:block;position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + c.join(",") + ";";
        d = "normal";
        f = b.F + "00";
        "o" === b.s ? d = "oblique" : "i" === b.s && (d = "italic");
        a.k.style.cssText = c + ("font-style:" + d + ";font-weight:" + f + ";")
    }
    function P(a) {
        u(a.d, "body", a.k)
    }
    N.prototype.remove = function() {
        var a = this.k;
        a.parentNode && a.parentNode.removeChild(a)
    };
    function Q(a, b, c, d, f, g, e, h) {
        this.G = a;
        this.ca = b;
        this.d = c;
        this.j = d;
        this.o = h || "BESbswy";
        this.g = f;
        this.p = {};
        this.C = g || 5E3;
        this.J = e || k;
        this.n = this.m = k;
        a = new N(this.d, this.o);
        P(a);
        for (var l in R)
            R.hasOwnProperty(l) && (O(a, new J(R[l], K(this.j))), this.p[R[l]] = a.k.offsetWidth);
        a.remove()
    }
    var R = {
        oa: "serif",
        na: "sans-serif",
        ma: "monospace"
    };
    Q.prototype.start = function() {
        this.m = new N(this.d, this.o);
        P(this.m);
        this.n = new N(this.d, this.o);
        P(this.n);
        this.ia = s();
        O(this.m, new J(this.j.getName() + ",serif", K(this.j)));
        O(this.n, new J(this.j.getName() + ",sans-serif", K(this.j)));
        S(this)
    };
    function T(a, b, c) {
        for (var d in R)
            if (R.hasOwnProperty(d) && b === a.p[R[d]] && c === a.p[R[d]])
                return j;
        return m
    }
    function S(a) {
        var b = a.m.k.offsetWidth, c = a.n.k.offsetWidth;
        b === a.p.serif && c === a.p["sans-serif"] || a.g.D && T(a, b, c) ? s() - a.ia >= a.C ? a.g.D && T(a, b, c) && (a.J === k || a.J.hasOwnProperty(a.j.getName())) ? U(a, a.G) : U(a, a.ca) : setTimeout(r(function() {
            S(this)
        }, a), 25) : U(a, a.G)
    }
    function U(a, b) {
        a.m.remove();
        a.n.remove();
        b(a.j)
    };
    function V(a, b, c, d) {
        this.d = b;
        this.l = c;
        this.v = 0;
        this.M = this.I = m;
        this.C = d;
        this.g = a.g
    }
    function W(a, b, c, d, f) {
        if (0 === b.length && f)
            L(a.l);
        else {
            a.v += b.length;
            f && (a.I = f);
            for (f = 0; f < b.length; f++) {
                var g = b[f], e = c[g.getName()], h = a.l, l = g;
                v(h.h, [h.e.c(h.f, l.getName(), K(l).toString(), "loading")]);
                M(h, "fontloading", l);
                (new Q(r(a.R, a), r(a.S, a), a.d, g, a.g, a.C, d, e)).start()
            }
        }
    }
    V.prototype.R = function(a) {
        var b = this.l;
        v(b.h, [b.e.c(b.f, a.getName(), K(a).toString(), "active")], [b.e.c(b.f, a.getName(), K(a).toString(), "loading"), b.e.c(b.f, a.getName(), K(a).toString(), "inactive")]);
        M(b, "fontactive", a);
        this.M = j;
        X(this)
    };
    V.prototype.S = function(a) {
        var b = this.l, c = w(b.h, b.e.c(b.f, a.getName(), K(a).toString(), "active")), d = [], f = [b.e.c(b.f, a.getName(), K(a).toString(), "loading")];
        c || d.push(b.e.c(b.f, a.getName(), K(a).toString(), "inactive"));
        v(b.h, d, f);
        M(b, "fontinactive", a);
        X(this)
    };
    function X(a) {
        0==--a.v && a.I && (a.M ? (a = a.l, v(a.h, [a.e.c(a.f, "active")], [a.e.c(a.f, "loading"), a.e.c(a.f, "inactive")]), M(a, "active")) : L(a.l))
    };
    function Y(a) {
        this.z = a;
        this.H = new ha;
        this.ja = new B(a.navigator.userAgent, a.document);
        this.a = this.ja.parse();
        this.A = this.B = 0
    }
    Y.prototype.load = function(a) {
        var b = a.context || this.z;
        this.d = new t(this.z, b);
        var b = new ga(this.d, b.document.documentElement, a), c = [], d = a.timeout;
        v(b.h, [b.e.c(b.f, "loading")]);
        M(b, "loading");
        var c = this.H, f = this.d, g = [], e;
        for (e in a)
            if (a.hasOwnProperty(e)) {
                var h = c.K[e];
                h && g.push(h(a[e], f))
            }
        c = g;
        this.A = this.B = c.length;
        a = new V(this.a, this.d, b, d);
        e = 0;
        for (d = c.length; e < d; e++)
            this.da.call(this, c[e], b, a, this.a.g.N)
    };
    Y.prototype.da = function(a, b, c, d) {
        var f = this;
        d ? a.load(function(a, b, d) {
            var l = 0==--f.B;
            setTimeout(function() {
                W(c, a, b || {}, d || k, l)
            }, 0)
        }) : (a = 0==--this.B, this.A--, a && 0 == this.A ? L(b) : W(c, [], {}, k, a))
    };
    function Z(a, b) {
        this.d = a;
        this.u = b
    }
    Z.prototype.load = function(a) {
        var b, c, d = this.u.urls || [], f = this.u.families || [], g = this.u.testStrings || {};
        b = 0;
        for (c = d.length; b < c; b++)
            ca(this.d, d[b]);
        d = [];
        b = 0;
        for (c = f.length; b < c; b++) {
            var e = f[b].split(":");
            if (e[1])
                for (var h = e[1].split(","), l = 0; l < h.length; l += 1)
                    d.push(new J(e[0], h[l]));
            else 
                d.push(new J(e[0]))
        }
        a(d, g)
    };
    var $ = new Y(p);
    $.H.K.custom = function(a, b) {
        return new Z(b, a)
    };
    p.WebFont || (p.WebFont = {}, p.WebFont.load = r($.load, $), p.WebFontConfig && $.load(p.WebFontConfig));
})(this, document);

