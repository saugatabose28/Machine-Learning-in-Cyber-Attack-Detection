(function() {
    function h(a) {
        this.t = {};
        this.tick = function(a, c, d) {
            d = d ? d : (new Date).getTime();
            this.t[a] = [d, c]
        };
        this.tick("start", null, a)
    }
    var k = new h;
    window.GA_jstiming = {
        Timer: h,
        load: k
    };
    if (window.GA_jstiming) {
        window.GA_jstiming.d = {};
        window.GA_jstiming.j = 1;
        var m = function(a, b, c) {
            var d = a.t[b], e = a.t.start;
            if (d && (e || c))
                return d = a.t[b][0], e = void 0 != c ? c : e[0], d - e
        };
        window.GA_jstiming.report = function(a, b, c) {
            var d = "";
            a.h && (d += "&" + a.h);
            var e = a.t, f = e.start, l = [], p = [], g;
            for (g in e)
                if ("start" != g && 0 != g.indexOf("_")) {
                    var q = e[g][1];
                    q ? e[q] && p.push(g + "." + m(a, g, e[q][0])) : f && l.push(g + "." + m(a, g))
                }
            delete e.start;
            if (b)
                for (var y in b)
                    d += "&" + y + "=" + b[y];
            a = [c ? c: "{{SCHEME}}//csi.gstatic.com/csi", "?v=3", "&s=" +
            (window.GA_jstiming.sn || "gam") + "&action=", a.name, p.length ? "&it=" + p.join(","): "", "", d, "&rt=", l.join(",")].join("");
            b = new Image;
            var z = window.GA_jstiming.j++;
            window.GA_jstiming.d[z] = b;
            b.onload = b.onerror = function() {
                delete window.GA_jstiming.d[z]
            };
            b.src = a;
            b = null;
            return a
        }
    };
    var n = this, r = function(a, b) {
        var c, d = b, e = a.split(".");
        c = c || n;
        e[0]in c ||!c.execScript || c.execScript("var " + e[0]);
        for (var f; e.length && (f = e.shift());)
            e.length || void 0 === d ? c = c[f] ? c[f] : c[f] = {} : c[f] = d
    }, t = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.m = b.prototype;
        a.prototype = new c;
        a.l = function(a, c, f) {
            var l = Array.prototype.slice.call(arguments, 2);
            return b.prototype[c].apply(a, l)
        }
    };
    var u = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/, v = function(a, b) {
        if (!a)
            return b;
        var c = a.match(u);
        return c ? c[0] : b
    };
    var w, x = "false", A=!1, B = w = /^true$/.test(x)?!0 : /^false$/.test(x)?!1 : A;
    var C = function() {
        return v("", "pubads.g.doubleclick.net")
    };
    var D = function(a, b) {
        var c, d;
        for (d in a)
            Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a)
    };
    var E = function(a) {
        this.i = [];
        this.b = {};
        for (var b = 0, c = arguments.length; b < c; ++b)
            this.b[arguments[b]] = ""
    };
    E.prototype.k = function(a) {
        return this.b.hasOwnProperty(a) ? this.b[a] : ""
    };
    E.prototype.c = function() {
        var a = this.i.concat([]), b = function(b) {
            "" != b && a.push(b)
        };
        D(this.b, b);
        return a
    };
    var F = function(a) {
        E.apply(this, arguments)
    };
    t(F, E);
    F.prototype.geil = F.prototype.k;
    function G(a) {
        var b = "adsense";
        if (a && "string" == typeof a && 0 < a.length && null != b) {
            var c = window.GS_googleServiceIds_[b];
            null == c && (c = "adsense" == b ? new H : new I, window.GS_googleServiceIds_[b] = c);
            t:
            {
                for (b = 0; b < c.a.length; b++)
                    if (a == c.a[b])
                        break t;
                c.a[c.a.length] = a
            }
            a = c
        } else 
            a = null;
        return a
    }
    r("GS_googleAddAdSenseService", G);
    function J() {
        for (var a in window.GS_googleServiceIds_) {
            var b = window.GS_googleServiceIds_[a];
            "function" != typeof b && b.enable()
        }
    }
    r("GS_googleEnableAllServices", J);
    function K() {
        window.GS_googleServiceIds_ = {}
    }
    r("GS_googleResetAllServices", K);
    function L() {
        var a;
        a = "adsense";
        a = null == a ? null : window.GS_googleServiceIds_[a];
        return a = null == a ? "" : a.a.join()
    }
    r("GS_googleGetIdsForAdSenseService", L);
    function M(a) {
        return N(a)
    }
    r("GS_googleFindService", M);
    function O() {
        var a = N("adsense");
        return a ? a.c() : ""
    }
    r("GS_googleGetExpIdsForAdSense", O);
    function P(a) {
        this.g = a;
        this.a = [];
        this.f = new F
    }
    P.prototype.toString = function() {
        for (var a = "[" + this.g + " ids: ", b = 0; b < this.a.length; b++)
            0 < b && (a += ","), a += this.a[b];
        return a += "]"
    };
    P.prototype.c = function() {
        return this.f.c().join()
    };
    var N = function(a) {
        return a = null == a ? null : window.GS_googleServiceIds_[a]
    };
    function I() {
        P.call(this, "unknown")
    }
    t(I, P);
    I.prototype.enable = function() {};
    function H() {
        P.call(this, "adsense");
        this.e=!1
    }
    t(H, P);
    H.prototype.enable = function() {
        if (!this.e) {
            var a;
            a = (a = document.URL) && (0 < a.indexOf("?google_debug") || 0 < a.indexOf("&google_debug")) ? "google_ads_dbg.js" : "google_ads.js";
            var b = "http://" + v("", "partner.googleadservices.com");
            B && (b = "https://" + v("", "securepubads.g.doubleclick.net"));
            var c = "", d;
            d = C();
            (d = "pubads.g.doubleclick.net" == d) || (c = "?prodhost=" + C());
            a = b + "/gampad/" + a + c;
            document.write('<script src="' + a + '">\x3c/script>');
            this.e=!0;
            window.GA_jstiming && window.GA_jstiming.Timer &&
            (window.GA_jstiming.load.name = "load", window.GA_jstiming.load.tick("start"))
        }
    };
    window.GS_googleServiceIds_ || (window.GS_googleServiceIds_ = {});
})()
