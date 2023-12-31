(function(window) {
    var f = void 0, i=!0, j=!1, l, m = this;
    function n(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                    if (a instanceof Object)
                        return b;
                        var c = Object.prototype.toString.call(a);
                        if ("[object Window]" == c)
                            return "object";
                            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))
                                return "array";
                                if ("[object Function]" == c || "undefined" == typeof a.call && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))
                                    return "function"
            } else 
                return "null";
                else if ("function" == b && "undefined" == typeof a.call)
    return "object";
return b
}
function o(a) {
    return "function" == n(a)
}
Math.floor(2147483648 * Math.random()).toString(36);
function p(a, b) {
    this.width = a;
    this.height = b
}
p.prototype.toString = function() {
    return this.width + "x" + this.height
};
var aa = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function q(a) {
    a = "" + a;
    return !aa.test(a) ? encodeURIComponent(a) : a
};
function ba() {
    this.f = {};
    this.k = []
}
l = ba.prototype;
l.a = 0;
l.m = function() {
    return this.a
};
l.d = function(a) {
    return Object.prototype.hasOwnProperty.call(this.f, a)
};
l.set = function(a, b) {
    Object.prototype.hasOwnProperty.call(this.f, a) || (this.a++, this.k.push(a));
    this.f[a] = b
};
l.get = function(a, b) {
    return Object.prototype.hasOwnProperty.call(this.f, a) ? this.f[a] : b
};
l.j = function() {
    return this.k.concat()
};
l.e = function() {
    for (var a = [], b = 0; b < this.k.length; b++)
        a.push(this.f[this.k[b]]);
    return a
};
var ca = Array.prototype;
function da(a) {
    return ca.concat.apply(ca, arguments)
};
function r(a) {
    this.b = new ba;
    this.D=!!a
}
l = r.prototype;
l.a = 0;
l.m = function() {
    return this.a
};
l.d = function(a) {
    a = s(this, a);
    return this.b.d(a)
};
l.j = function() {
    for (var a = this.b.e(), b = this.b.j(), c = [], d = 0; d < b.length; d++)
        for (var g = a[d], e = 0; e < g.length; e++)
            c.push(b[d]);
    return c
};
l.e = function(a) {
    var b = [];
    if (a)
        this.d(a) && (b = da(b, this.b.get(s(this, a))));
    else 
        for (var a = this.b.e(), c = 0; c < a.length; c++)
            b = da(b, a[c]);
    return b
};
l.set = function(a, b) {
    a = s(this, a);
    this.d(a) && (this.a -= this.b.get(a).length);
    this.b.set(a, [b]);
    this.a++;
    return this
};
l.get = function(a, b) {
    var c = a ? this.e(a): [];
    return 0 < c.length ? c[0] : b
};
function s(a, b) {
    var c = "" + b;
    a.D && (c = c.toLowerCase());
    return c
}
l.toString = function() {
    if (!this.a)
        return "";
    for (var a = [], b = this.b.j(), c = 0; c < b.length; c++)
        for (var d = b[c], g = q(d), d = this.e(d), e = 0; e < d.length; e++) {
            var h = g;
            "" !== d[e] && (h += "=" + q(d[e]));
            a.push(h)
        }
    return a.join("&")
};
var t, u, v, w, x;
function ea() {
    return m.navigator ? m.navigator.userAgent : null
}
function y() {
    return m.navigator
}
x = w = v = u = t = j;
var z;
if (z = ea()) {
    var fa = y();
    x = 0 == z.indexOf("Opera");
    t=!x&&-1 != z.indexOf("MSIE");
    w = (v=!x&&-1 != z.indexOf("WebKit"))&&-1 != z.indexOf("Mobile");
    u=!x&&!v && "Gecko" == fa.product
}
var ga = t, ha = u, A = v, ia = w;
var B;
if (x && m.opera) {
    var ja = m.opera.version;
    "function" == typeof ja && ja()
} else 
    ha ? B = /rv\:([^\);]+)(\)|;)/ : ga ? B = /MSIE\s+([^\);]+)(\)|;)/ : A && (B = /WebKit\/(\S+)/), B && B.exec(ea());
function ka(a) {
    this.g = a
}
var C = /\s*;\s*/;
l = ka.prototype;
l.get = function(a, b) {
    for (var c = a + "=", d = (this.g.cookie || "").split(C), g = 0, e; e = d[g]; g++)
        if (0 == e.indexOf(c))
            return e.substr(c.length);
    return b
};
l.set = function(a, b, c, d, g, e) {
    if (/[;=\s]/.test(a))
        throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b))
        throw Error('Invalid cookie value "' + b + '"');
    this.g.cookie = a + "=" + b + (g ? ";domain=" + g : "") + (d ? ";path=" + d : "") + (c instanceof Date ? ";expires=" + c.toUTCString() : 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date( + new Date + 1E3 * c)).toUTCString()) + (e ? ";secure" : "")
};
l.remove = function(a, b, c) {
    var d = this.d(a);
    this.set(a, "", 0, b, c);
    return d
};
l.j = function() {
    return la(this).keys
};
l.e = function() {
    return la(this).K
};
l.m = function() {
    return !this.g.cookie ? 0 : (this.g.cookie || "").split(C).length
};
l.d = function(a) {
    return this.get(a) !== f
};
function la(a) {
    for (var a = (a.g.cookie || "").split(C), b = [], c = [], d, g, e = 0; g = a[e]; e++)
        d = g.indexOf("="), - 1 == d ? (b.push(""), c.push(g)) : (b.push(g.substring(0, d)), c.push(g.substring(d + 1)));
    return {
        keys: b,
        K: c
    }
}
l.isEnabled = function() {
    var a = navigator.cookieEnabled;
    if (a && A) {
        var b = "COOKIE_TEST_" + + new Date;
        na.set(b, "1");
        if (!this.get(b))
            return j;
        this.remove(b)
    }
    return a
};
var na = new ka(document);
var D = j, E = "";
function F(a) {
    a = a.match(/[\d]+/g);
    a.length = 3;
    return a[0] + "." + a[1] + " r" + a[2]
}
var G = y();
if (G.plugins && G.plugins.length) {
    var H = G.plugins["Shockwave Flash"];
    H && (D = i, H.description && (E = F(H.description)));
    G.plugins["Shockwave Flash 2.0"] && (D = i, E = "2.0.0.11")
} else if (G.mimeTypes && G.mimeTypes.length) {
    var I = G.mimeTypes["application/x-shockwave-flash"];
    (D=!(!I ||!I.enabledPlugin)) && (E = F(I.enabledPlugin.description))
} else 
    try {
        var J = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), D = i, E = F(J.GetVariable("$version"))
} catch (oa) {
    try {
        J = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), D = i, E = "6.0.21",
        J.M = "always", E = F(J.GetVariable("$version"))
    } catch (pa) {
        try {
            J = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), D = i, E = F(J.GetVariable("$version"))
        } catch (qa) {}
    }
}
var ra = E;
var sa = ["application/x-silverlight", "application/x-silverlight-2", "application/x-silverlight-2-b2", "application/x-silverlight-2-b1"], K = j, L = "";
function M(a) {
    return "1.0.30226.2" == a ? "2.0.30226.2" : a
}
var N = y();
if (N.plugins && N.plugins.length) {
    var O = N.plugins["Silverlight Plug-In"];
    O && (K = i, O.description && (L = M(O.description)))
} else if (N.mimeTypes && N.mimeTypes.length)
    for (var P = 0; P < sa.length; P++) {
        var Q = N.mimeTypes[sa[P]];
        if (Q && Q.enabledPlugin) {
            (K=!!Q.enabledPlugin) && (L = M(Q.enabledPlugin.description));
            break
        }
    } else {
    var R = [0, 0, 0, 0];
    try {
        for (var ta = new ActiveXObject("AgControl.AgControl"), K = i, P = 0; P < R.length; P++) {
            for (var S = 0, T = 1048575, ua = 0; S < T;) {
                var U = R[P] = S + (T - S>>1);
                ta.IsVersionSupported(R.join(".")) ? (ua = U, S = U + 1) :
                T = U
            }
            R[P] = ua
        }
        L = M(R.join("."))
    } catch (va) {}
}
var wa = L;
function V(a, b) {
    this.c = b || "";
    this.v = this.u = this.w = i;
    this.I = 0;
    this.F = 250;
    this.i = new r
}
l = V.prototype;
l.l = ("https:" == document.location.protocol ? "https://s" : "http://") + "counter.rambler.ru/top100.scn";
l.L = "http://top100.rambler.ru";
l.r = "Rambler's Top100";
l.G = function(a) {
    this.c = a
};
l.A = function() {
    return this.c
};
l.p = function(a, b) {
    this.i.set(a, b)
};
l.B = function(a) {
    return this.i.get(a)
};
l.H = function(a) {
    this.p("__uid", a)
};
function xa(a, b) {
    return '<a href="' + (a.L + (a.c ? "/home?id=" + a.c : "")) + '" target="_blank"><img src="' + b + '" title="' + a.r + '" alt="' + a.r + '" border="0" /></a>'
}
function ya(a, b) {
    var c = y(), d = document, g = m.screen, e = new r;
    e.set("rn", Math.round(2147483647 * Math.random()));
    e.set("v", "0.3");
    var h;
    h = window;
    var k = h.document;
    if (A&&!ia) {
        h.innerHeight !== f || (h = window);
        var k = h.innerHeight, ma = h.document.documentElement.scrollHeight;
        h == h.top && ma < k && (k -= 15);
        h = new p(h.innerWidth, k)
    } else 
        h = "CSS1Compat" == k.compatMode ? k.documentElement : k.body, h = new p(h.clientWidth, h.clientHeight);
    e.set("bs", h.toString());
    e.set("ce", na.isEnabled() ? 1 : 0);
    d && (e.set("rf", d.referrer || ""), e.set("en",
    d.characterSet || d.charset || ""), a.w && e.set("pt", d.title.substring(0, a.F)));
    g && (e.set("cd", g.colorDepth + "-bit"), e.set("sr", g.width + "x" + g.height));
    c && (e.set("la", c.language || c.browserLanguage || ""), e.set("ja", c.javaEnabled() ? 1 : 0), e.set("acn", c.appCodeName), e.set("an", c.appName), e.set("pl", c.platform));
    e.set("tz", (new Date).getTimezoneOffset());
    "string" == typeof b && e.set("url", b);
    a.u && e.set("fv", ra);
    a.v && e.set("sv", wa);
    a.i.m() && e.set("cv", a.i.toString());
    return e
}
l.q = function(a) {
    a = ya(this, a);
    a.set("le", 1);
    var a = this.l + "?" + this.c + "&" + a.toString(), b = new Image(1, 1), c = this.I, d = null, g = za(b);
    0 < c && (d = m.setTimeout(g, c));
    c = Aa(b, d);
    b.onerror = b.onabort = g;
    b.onload = c;
    b.src = a
};
l.J = function(a, b) {
    var c = ya(this, b);
    c.set("le", 0);
    var d = "string" == typeof a ? document.getElementById(a): a;
    d && 1 == d.nodeType ? d.innerHTML = xa(this, this.l + "?" + this.c + "&" + c.toString()) : this.q(b)
};
l.z = function(a) {
    if ((a = "string" == typeof a ? document.getElementById(a) : a) && 1 == a.nodeType) {
        var b = new r;
        b.set("le", 2);
        a.innerHTML = xa(this, this.l + "?" + this.c + "&" + b.toString())
    }
};
function za(a) {
    return function() {
        Ba(a);
        o(f) && f()
    }
}
function Aa(a, b) {
    return function() {
        m.clearTimeout(b || null);
        Ba(a);
        o(f) && f()
    }
}
function Ba(a) {
    a.onload = a.onerror = a.onabort = null;
    delete a
}
function W() {
    this.o = {}
}
W.prototype.t = 0;
W.prototype.h = function(a, b) {
    return this.o[a !== f ? a: "~" + this.t++] = new V(0, b)
};
W.prototype.C = function(a) {
    return this.h(f, a)
};
W.prototype.n = function(a) {
    a = a || "";
    return this.o[a] || this.h(a)
};
function Ca(a) {
    this.s = a || new W
}
Ca.prototype.push = function(a) {
    for (var b = arguments, c = 0, d = 0; d < b.length; d++)
        try {
            if (o(b[d]))
                b[d]();
            else {
                var g = "", e = b[d][0], h = e.lastIndexOf(".");
                0 < h && (g = e.substring(0, h), e = e.substring(h + 1));
                var k = this.s.n(g);
                k[e].apply(k, b[d].slice(1))
            }
        } catch (ma) {
        c += 1
    }
    return c
};
var X = V.prototype;
X.setAccount = X.G;
X.getAccount = X.A;
X.trackPageview = X.q;
X.trackPageviewByLogo = X.J;
X.drawLogoTo = X.z;
X.setCustomVar = X.p;
X.getCustomVar = X.B;
X.sync = X.H;
var Y = W.prototype;
Y.createTracker = Y.h;
Y.getTracker = Y.C;
Y.getTrackerByName = Y.n;
var Z = m._top100 || {}, Da = m._top100q || [];
if (!Z ||!o(Z.h)) {
    m._top100 = Z = new W;
    var $ = new Ca(Z);
    "array" == n(Da) && $.push.apply($, Da);
    m._top100q = $
};
})(window)
