(function() {
    var m = this, aa = function(a) {
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
                                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))
                                    return "function"
            } else 
                return "null";
                else if ("function" == b && "undefined" == typeof a.call)
    return "object";
return b
}, ba = function(a, b, c) {
    return a.call.apply(a.bind, arguments)
}, ca = function(a, b, c) {
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
}, p = function(a, b, c) {
    p = Function.prototype.bind&&-1 != Function.prototype.bind.toString().indexOf("native code") ?
    ba : ca;
    return p.apply(null, arguments)
};
var t = (new Date).getTime();
var da = function() {}, v = function(a, b, c) {
    switch (typeof b) {
    case "string":
        ea(b, c);
        break;
    case "number":
        c.push(isFinite(b)&&!isNaN(b) ? b : "null");
        break;
    case "boolean":
        c.push(b);
        break;
    case "undefined":
        c.push("null");
        break;
    case "object":
        if (null == b) {
            c.push("null");
            break
        }
        if (b instanceof Array) {
            var d = b.length;
            c.push("[");
            for (var f = "", g = 0; g < d; g++)
                c.push(f), v(a, b[g], c), f = ",";
            c.push("]");
            break
        }
        c.push("{");
        d = "";
        for (f in b)
            b.hasOwnProperty(f) && (g = b[f], "function" != typeof g && (c.push(d), ea(f, c), c.push(":"), v(a, g, c), d =
            ","));
        c.push("}");
        break;
    case "function":
        break;
    default:
        throw Error("Unknown type: " + typeof b);
    }
}, w = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\u000b"
}, fa = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g: /[\\\"\x00-\x1f\x7f-\xff]/g, ea = function(a, b) {
    b.push('"');
    b.push(a.replace(fa, function(a) {
        if (a in w)
            return w[a];
        var b = a.charCodeAt(0), f = "\\u";
        16 > b ? f += "000" : 256 > b ? f += "00" : 4096 > b && (f += "0");
        return w[a] = f + b.toString(16)
    }));
    b.push('"')
};
var ga = /&/g, ha = /</g, ia = />/g, ja = /"/g, ka = /'/g, la = /\x00/g, x = {
    "\x00": "\\0",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\x0B",
    '"': '\\"',
    "\\": "\\\\"
}, B = {
    "'": "\\'"
};
var C = function(a) {
    C[" "](a);
    return a
};
C[" "] = function() {};
var E = function(a) {
    try {
        var b;
        if (b=!!a && null != a.location.href)
            t: {
            try {
                C(a.foo);
                b=!0;
                break t
            } catch (c) {}
            b=!1
        }
        return b
    } catch (d) {
        return !1
    }
}, F = function(a, b) {
    if (!(1E-4 > Math.random())) {
        var c = Math.random();
        if (c < b) {
            try {
                var d = new Uint16Array(1);
                window.crypto.getRandomValues(d);
                c = d[0] / 65536
            } catch (f) {
                c = Math.random()
            }
            return a[Math.floor(c * a.length)]
        }
    }
    return null
};
var ma = function(a) {
    var b = a.toString();
    a.name&&-1 == b.indexOf(a.name) && (b += ": " + a.name);
    a.message&&-1 == b.indexOf(a.message) && (b += ": " + a.message);
    if (a.stack) {
        a = a.stack;
        var c = b;
        try {
            - 1 == a.indexOf(c) && (a = c + "\n" + a);
            for (var d; a != d;)
                d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
            b = a.replace(/\n */g, "\n")
        } catch (f) {
            b = c
        }
    }
    return b
};
var na = document, G = window;
var H = function(a, b) {
    for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b.call(null, a[c], c, a)
}, I = function(a) {
    return !!a && "function" == typeof a&&!!a.call
}, oa = function(a, b) {
    if (!(2 > arguments.length))
        for (var c = 1, d = arguments.length; c < d; ++c)
            a.push(arguments[c])
}, pa = function(a) {
    a.google_unique_id?++a.google_unique_id : a.google_unique_id = 1
}, J = function(a) {
    a = a.google_unique_id;
    return "number" == typeof a ? a : 0
}, qa = function(a) {
    var b = a.length;
    if (0 == b)
        return 0;
    for (var c = 305419896, d = 0; d < b; d++)
        c^=(c<<5) + (c>>2) + a.charCodeAt(d) &
        4294967295;
    return 0 < c ? c : 4294967296 + c
}, K = function(a, b) {
    return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
}, ra = /(^| )adsbygoogle($| )/;
var sa = {
    google_analytics_domain_name: !0,
    google_analytics_uacct: !0
}, ta = function(a) {
    a.google_page_url && (a.google_page_url = String(a.google_page_url));
    var b = [];
    H(a, function(a, d) {
        if (null != a) {
            var f;
            try {
                var g = [];
                v(new da, a, g);
                f = g.join("")
            } catch (h) {}
            f && oa(b, d, "=", f, ";")
        }
    });
    return b.join("")
};
var L = function(a) {
    a = parseFloat(a);
    return isNaN(a) || 1 < a || 0 > a ? 0 : a
}, M = function(a, b) {
    return /^true$/.test(a)?!0 : /^false$/.test(a)?!1 : b
}, ua = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/, va = function(a, b) {
    if (!a)
        return b;
    var c = a.match(ua);
    return c ? c[0] : b
};
var wa = L("0.15"), xa = L("0.01"), ya = L("0.01"), za = L("0.05"), Aa = L("0.01"), Ba = L("0.05"), Ca = L("0.01"), Da = L("0.001"), Ea = L("0.2"), Fa = M("true", !0), Ga = L("0.05"),
Ha = parseInt("100", 10), Ia = isNaN(Ha) ? 100: Ha;
var Ja = M("false", !1);
var Ka=!!window.google_async_iframe_id, La = function(a, b, c) {
    var d = ["<iframe"], f;
    for (f in a)
        a.hasOwnProperty(f) && oa(d, f + "=" + a[f]);
    d.push('style="left:0;position:absolute;top:0;"');
    d.push("></iframe>");
    a = a.id;
    b = "border:none;height:" + c + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + b + "px;background-color:transparent";
    return ['<ins id="', a + "_expand", '" style="display:inline-table;', b, '"><ins id="', a + "_anchor", '" style="display:block;', b, '">', d.join(" "), "</ins></ins>"].join("")
};
var N=!0, Ma = {}, Pa = function(a, b, c, d) {
    var f = Na, g, h = N;
    try {
        g = b()
    } catch (e) {
        try {
            var k = ma(e);
            b = "";
            e.fileName && (b = e.fileName);
            var l =- 1;
            e.lineNumber && (l = e.lineNumber);
            h = f(a, k, b, l, c)
        } catch (r) {
            try {
                var D = ma(r);
                a = "";
                r.fileName && (a = r.fileName);
                c =- 1;
                r.lineNumber && (c = r.lineNumber);
                Na("pAR", D, a, c, void 0, void 0)
            } catch (z) {
                Oa({
                    context: "mRE",
                    msg: z.toString() + "\n" + (z.stack || "")
                }, void 0)
            }
        }
        if (!h)
            throw e;
    } finally {
        if (d)
            try {
                d()
            } catch (A) {}
    }
    return g
}, Na = function(a, b, c, d, f, g) {
    var h = {};
    if (f)
        try {
            f(h)
    } catch (e) {}
    h.context = a;
    h.msg =
    b.substring(0, 512);
    c && (h.file = c);
    0 < d && (h.line = d.toString());
    h.url = na.URL.substring(0, 512);
    h.ref = na.referrer.substring(0, 512);
    Qa(h);
    Oa(h, g);
    return N
}, Oa = function(a, b) {
    try {
        if (Math.random() < (b || .01)) {
            var c = "/pagead/gen_204?id=jserror" + Ra(a), d = "http" + ("http:" == G.location.protocol ? "" : "s") + "://pagead2.googlesyndication.com" + c, c = d = d.substring(0, 2E3);
            G.google_image_requests || (G.google_image_requests = []);
            var f = G.document.createElement("img");
            f.src = c;
            G.google_image_requests.push(f)
        }
    } catch (g) {}
}, Qa = function(a) {
    var b =
    a || {};
    H(Ma, function(a, d) {
        b[d] = G[a]
    })
}, Sa = function(a, b) {
    return function() {
        var c = arguments;
        return Pa(a, function() {
            return b.apply(void 0, c)
        }, void 0, void 0)
    }
}, O = function(a, b) {
    return Sa(a, b)
}, Ra = function(a) {
    var b = "";
    H(a, function(a, d) {
        if (0 === a || a)
            b += "&" + d + "=" + ("function" == typeof encodeURIComponent ? encodeURIComponent(a) : escape(a))
    });
    return b
};
var P = null, Ta = function() {
    if (!P) {
        for (var a = window, b = a, c = 0; a != a.parent;)
            if (a = a.parent, c++, E(a))
                b = a;
            else 
                break;
        P = b
    }
    return P
};
var Ua = function(a) {
    a = a.document;
    return ("CSS1Compat" == a.compatMode ? a.documentElement : a.body).clientHeight
}, Q = function(a) {
    a = a.document;
    return ("CSS1Compat" == a.compatMode ? a.documentElement : a.body).clientWidth
};
var R = {
    "120x90": !0,
    "160x90": !0,
    "180x90": !0,
    "200x90": !0,
    "468x15": !0,
    "728x15": !0
};
var S = /^([0-9.]+)px$/, Va = /^([0-9.]+)$/, T = function(a) {
    return (a = S.exec(a)) ? Number(a[1]) : null
}, Wa = function(a) {
    return (a = T(a)) ? Math.round(a) : null
}, U = function(a, b, c) {
    for (var d = 0; d < c.length; d++) {
        var f = "google_ad_" + c[d];
        if (!b.hasOwnProperty(f)) {
            var g = Wa(a[c[d]]);
            null != g && (b[f] = g)
        }
    }
};
var Xa = {
    rectangle: 1,
    horizontal: 2,
    vertical: 4
}, Ya = [{
    width: 970,
    height: 90,
    format: 2
}, {
    width: 728,
    height: 90,
    format: 2
}, {
    width: 468,
    height: 60,
    format: 2
}, {
    width: 336,
    height: 280,
    format: 1
}, {
    width: 320,
    height: 50,
    format: 2
}, {
    width: 300,
    height: 600,
    format: 4
}, {
    width: 300,
    height: 250,
    format: 1
}, {
    width: 250,
    height: 250,
    format: 1
}, {
    width: 234,
    height: 60,
    format: 2
}, {
    width: 200,
    height: 200,
    format: 1
}, {
    width: 180,
    height: 150,
    format: 1
}, {
    width: 160,
    height: 600,
    format: 4
}, {
    width: 125,
    height: 125,
    format: 1
}, {
    width: 120,
    height: 600,
    format: 4
}, {
    width: 120,
    height: 240,
    format: 4
}
], Za = function(a, b) {
    return b.width - a.width || b.height - a.height
}, $a = function(a, b) {
    var c = Math.min(Ua(b), 16 * Q(b) / 9), d = b.document.documentElement.getBoundingClientRect(), f = a.getBoundingClientRect();
    return (d && f ? f.top - d.top : 0) < c - 100
};
N=!M("false", !1);
Ma = {
    client: "google_ad_client",
    format: "google_ad_format",
    slotname: "google_ad_slot",
    output: "google_ad_output",
    ad_type: "google_ad_type",
    async_oa: "google_async_for_oa_experiment",
    dimpr: "google_always_use_delayed_impressions_experiment",
    peri: "google_top_experiment",
    pse: "google_pstate_expt"
};
var ab = function(a, b, c) {
    c || (c = Ja ? "https" : "http");
    return [c, "://", a, b].join("")
};
var V = null;
var W = function(a) {
    this.j = a;
    a.google_iframe_oncopy || (a.google_iframe_oncopy = {
        handlers: {},
        upd: p(this.u, this)
    });
    this.r = a.google_iframe_oncopy
}, bb;
var X = "var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
/[\x00&<>"']/.test(X) && ( - 1 != X.indexOf("&") && (X = X.replace(ga, "&amp;")), - 1 != X.indexOf("<") && (X = X.replace(ha, "&lt;")), - 1 != X.indexOf(">") && (X = X.replace(ia, "&gt;")), - 1 != X.indexOf('"') && (X = X.replace(ja, "&quot;")), - 1 != X.indexOf("'") && (X = X.replace(ka, "&#39;")), - 1 != X.indexOf("\x00") && (X = X.replace(la, "&#0;")));
bb = X;
W.prototype.set = function(a, b) {
    this.r.handlers[a] = b;
    this.j.addEventListener && this.j.addEventListener("load", p(this.s, this, a), !1)
};
W.prototype.s = function(a) {
    a = this.j.document.getElementById(a);
    try {
        var b = a.contentWindow.document;
        if (a.onload && b && (!b.body ||!b.body.firstChild))
            a.onload()
    } catch (c) {}
};
W.prototype.u = function(a, b) {
    var c = cb("rx", a), d;
    t: {
        if (a && (d = a.match("dt=([^&]+)")) && 2 == d.length) {
            d = d[1];
            break t
        }
        d = ""
    }
    d = (new Date).getTime() - d;
    c = c.replace(/&dtd=(\d+|M)/, "&dtd=" + (1E4 > d ? d + "" : "M"));
    this.set(b, c);
    return c
};
var cb = function(a, b) {
    var c = new RegExp("\\b" + a + "=(\\d+)"), d = c.exec(b);
    d && (b = b.replace(c, a + "=" + ( + d[1] + 1 || 1)));
    return b
};
var Y;
t: {
    var db = m.navigator;
    if (db) {
        var eb = db.userAgent;
        if (eb) {
            Y = eb;
            break t
        }
    }
    Y = ""
};
var fb =- 1 != Y.indexOf("Opera")||-1 != Y.indexOf("OPR"), gb =- 1 != Y.indexOf("Trident")||-1 != Y.indexOf("MSIE"), hb =- 1 != Y.indexOf("Gecko")&&-1 == Y.toLowerCase().indexOf("webkit")&&!( - 1 != Y.indexOf("Trident")||-1 != Y.indexOf("MSIE")), ib =- 1 != Y.toLowerCase().indexOf("webkit");
(function() {
    var a = "", b;
    if (fb && m.opera)
        return a = m.opera.version, "function" == aa(a) ? a() : a;
    hb ? b = /rv\:([^\);]+)(\)|;)/ : gb ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : ib && (b = /WebKit\/(\S+)/);
    b && (a = (a = b.exec(Y)) ? a[1] : "");
    return gb && (b = (b = m.document) ? b.documentMode : void 0, b > parseFloat(a)) ? String(b) : a
})();
var Z, $ = function(a) {
    this.k = [];
    this.j = a || window;
    this.i = 0;
    this.l = null;
    this.m = 0
}, jb = function(a, b) {
    this.t = a;
    this.q = b
};
$.prototype.w = function(a, b) {
    0 != this.i || 0 != this.k.length || b && b != window ? this.p(a, b) : (this.i = 2, this.o(new jb(a, window)))
};
$.prototype.p = function(a, b) {
    this.k.push(new jb(a, b || this.j));
    kb(this)
};
$.prototype.A = function(a) {
    this.i = 1;
    if (a) {
        var b = O("sjr::timeout", p(this.n, this, !0));
        this.l = this.j.setTimeout(b, a)
    }
};
$.prototype.n = function(a) {
    a&&++this.m;
    1 == this.i && (null != this.l && (this.j.clearTimeout(this.l), this.l = null), this.i = 0);
    kb(this)
};
$.prototype.B = function() {
    return !(!window ||!Array)
};
$.prototype.C = function() {
    return this.m
};
$.prototype.nq = $.prototype.w;
$.prototype.nqa = $.prototype.p;
$.prototype.al = $.prototype.A;
$.prototype.rl = $.prototype.n;
$.prototype.sz = $.prototype.B;
$.prototype.tc = $.prototype.C;
var kb = function(a) {
    var b = O("sjr::tryrun", p(a.v, a));
    a.j.setTimeout(b, 0)
};
$.prototype.v = function() {
    if (0 == this.i && this.k.length) {
        var a = this.k.shift();
        this.i = 2;
        var b = O("sjr::run", p(this.o, this, a));
        a.q.setTimeout(b, 0);
        kb(this)
    }
};
$.prototype.o = function(a) {
    this.i = 0;
    a.t()
};
var lb = function(a) {
    try {
        return a.sz()
    } catch (b) {
        return !1
    }
}, mb = function(a) {
    return !!a && ("object" == typeof a || "function" == typeof a) && lb(a) && I(a.nq) && I(a.nqa) && I(a.al) && I(a.rl)
}, nb = function() {
    if (Z && lb(Z))
        return Z;
    var a = Ta(), b = a.google_jobrunner;
    return mb(b) ? Z = b : a.google_jobrunner = Z = new $(a)
}, ob = function(a, b) {
    nb().nq(a, b)
}, pb = function(a, b) {
    nb().nqa(a, b)
};
var qb = Ka ? 1 == J(G): !J(G), rb = function() {
    var a = C("script"), b;
    b = va("", "pagead2.googlesyndication.com");
    return ["<", a, ' src="', ab(b, "/pagead/js/r20141113/r20141119/show_ads_impl.js", ""), '"></', a, ">"].join("")
}, sb = function(a, b, c, d) {
    return function() {
        var f=!1;
        d && nb().al(3E4);
        var g = a.document.getElementById(b);
        g&&!E(g.contentWindow) && 3 ==
        a.google_top_js_status && (a.google_top_js_status = 6);
        try {
            if (E(a.document.getElementById(b).contentWindow)) {
                var h = a.document.getElementById(b).contentWindow, e = h.document;
                e.body && e.body.firstChild || (e.open(), h.google_async_iframe_close=!0, e.write(c))
            } else {
                var k = a.document.getElementById(b).contentWindow, l;
                g = c;
                g = String(g);
                if (g.quote)
                    l = g.quote();
                else {
                    h = ['"'];
                    for (e = 0; e < g.length; e++) {
                        var r = g.charAt(e), D = r.charCodeAt(0), z = e + 1, A;
                        if (!(A = x[r])) {
                            var n;
                            if (31 < D && 127 > D)
                                n = r;
                            else {
                                var s = r;
                                if (s in B)
                                    n = B[s];
                                else if (s in
                                x)
                                    n = B[s] = x[s];
                                else {
                                    var u = s, q = s.charCodeAt(0);
                                    if (31 < q && 127 > q)
                                        u = s;
                                    else {
                                        if (256 > q) {
                                            if (u = "\\x", 16 > q || 256 < q)
                                                u += "0"
                                        } else 
                                            u = "\\u", 4096 > q && (u += "0");
                                        u += q.toString(16).toUpperCase()
                                    }
                                    n = B[s] = u
                                }
                            }
                            A = n
                        }
                        h[z] = A
                    }
                    h.push('"');
                    l = h.join("")
                }
                k.location.replace("javascript:" + l)
            }
            f=!0
        } catch (y) {
            k = Ta().google_jobrunner, mb(k) && k.rl()
        }
        f && (f = cb("google_async_rrc", c), (new W(a)).set(b, sb(a, b, f, !1)))
    }
}, tb = function(a) {
    var b = ["<iframe"];
    H(a, function(a, d) {
        null != a && b.push(" " + d + '="' + a + '"')
    });
    b.push("></iframe>");
    return b.join("")
}, ub = function(a,
b, c, d) {
    d = d ? '"' : "";
    var f = d + "0" + d;
    a.width = d + b + d;
    a.height = d + c + d;
    a.frameborder = f;
    a.marginwidth = f;
    a.marginheight = f;
    a.vspace = f;
    a.hspace = f;
    a.allowtransparency = d + "true" + d;
    a.scrolling = d + "no" + d;
    a.allowfullscreen = d + "true" + d
}, wb = function(a, b, c) {
    vb(a, b, c, function(a, b, g) {
        a = a.document;
        for (var h = b.id, e = 0; !h || a.getElementById(h);)
            h = "aswift_" + e++;
        b.id = h;
        b.name = h;
        h = Number(g.google_ad_width);
        e = Number(g.google_ad_height);
        16 == g.google_reactive_ad_format ? (g = a.createElement("div"), g.innerHTML = La(b, h, e), c.appendChild(g.firstChild)) :
        c.innerHTML = La(b, h, e);
        return b.id
    })
}, vb = function(a, b, c, d) {
    var f = C("script"), g = {};
    ub(g, b.google_ad_width, b.google_ad_height, !0);
    g.onload = '"' + bb + '"';
    d = d(a, g, b);
    var g = b.google_override_format ||!R[b.google_ad_width + "x" + b.google_ad_height] && "aa" == b.google_loader_used ? F(["c", "e"], Ea): null, h = b.google_ad_output, e = b.google_ad_format;
    e || "html" != h && null != h || (e = b.google_ad_width + "x" + b.google_ad_height, "e" == g && (e += "_as"));
    h=!b.google_ad_slot || b.google_override_format ||!R[b.google_ad_width + "x" + b.google_ad_height] &&
    "aa" == b.google_loader_used;
    e = e && h ? e.toLowerCase() : "";
    b.google_ad_format = e;
    for (var e = [b.google_ad_slot, b.google_ad_format, b.google_ad_type, b.google_ad_width, b.google_ad_height], h = [], k = 0, l = c; l && 25 > k; l = l.parentNode, ++k)
        h.push(9 != l.nodeType && l.id || "");
    (h = h.join()) && e.push(h);
    b.google_ad_unit_key = qa(e.join(":")).toString();
    e = a.google_adk2_experiment = a.google_adk2_experiment || F(["C", "E"], Da) || "N";
    if ("E" == e) {
        e = [];
        for (h = 0; c && 25 > h; ++h) {
            k = (k = 9 != c.nodeType && c.id) ? "/" + k : "";
            t:
            {
                if (c && c.nodeName && c.parentElement)
                    for (var l =
                    c.nodeName.toLowerCase(), r = c.parentElement.childNodes, D = 0, z = 0; z < r.length; ++z) {
                        var A = r[z];
                        if (A.nodeName && A.nodeName.toLowerCase() == l) {
                            if (c == A) {
                                l = "." + D;
                                break t
                            }
                            ++D
                        }
                    }
                l = ""
            }
            e.push((c.nodeName && c.nodeName.toLowerCase()) + k + l);
            c = c.parentElement
        }
        c = e.join() + ":";
        e = a;
        h = [];
        if (e)
            try {
                for (var n = e.parent, k = 0; n && n != e && 25 > k; ++k) {
                    for (var s = n.frames, l = 0; l < s.length; ++l)
                        if (e == s[l]) {
                            h.push(l);
                            break
                        }
                        e = n;
                        n = e.parent
                }
        } catch (u) {}
        b.google_ad_unit_key_2 = qa(c + h.join()).toString()
    } else 
        "C" == e && (b.google_ad_unit_key_2 = "ctrl");
    b = ta(b);
    var q;
    if (n = qb) {
        if (!V)
            i: {
            s = [G.top];
            n = [];
            for (c = 0; e = s[c++];) {
                n.push(e);
                try {
                    if (e.frames)
                        for (var y = e.frames.length, h = 0; h < y && 1024 > s.length; ++h)
                            s.push(e.frames[h])
                        } catch (Ib) {}
            }
            for (y = 0; y < n.length; y++)
                try {
                    if (q = n[y].frames.google_esf) {
                        V = q;
                        break i
                    }
                } catch (Jb) {}
                V = null
        }
        n=!V
    }
    n ? (q = {}, ub(q, 0, 0, !1), q.style = "display:none", q.id = "google_esf", q.name = "google_esf", q.src = ab(va("", "googleads.g.doubleclick.net"), "/pagead/html/r20141113/r20141119/zrt_lookup.html"),
    q = tb(q)) : q = "";
    y = (new Date).getTime();
    n = a.google_top_experiment;
    if (s = a.google_async_for_oa_experiment)
        a.google_async_for_oa_experiment = void 0;
    c = a.google_always_use_delayed_impressions_experiment;
    e = a.google_auto_width_experiment;
    h = a.google_floating_ads_js_experiment;
    g = ["<!doctype html><html><body>", q, "<", f, ">", b, "google_show_ads_impl=true;google_unique_id=", a.google_unique_id, ';google_async_iframe_id="', d, '";google_start_time=', t, ";", n ? 'google_top_experiment="' + n + '";': "", s ? 'google_async_for_oa_experiment="' +
    s + '";': "", c ? 'google_always_use_delayed_impressions_experiment="' + c + '";': "", g ? 'google_append_as_for_format_override="' + g + '";': "", e ? 'google_auto_width_experiment="' + e + '";': "", h ? 'google_floating_ads_js_experiment="' + h + '";': "", "google_bpp=", y > t ? y - t: 1, ";google_async_rrc=0;</", f, ">", rb(), "</body></html>"].join("");
    (a.document.getElementById(d) ? ob : pb)(sb(a, d, g, !0))
}, xb = function() {
    if (void 0 === window.google_auto_width_experiment) {
        var a = ["C", "E"], b = xa;
        window.google_auto_width_experiment = F(a, b);
        if (window.google_auto_width_experiment)
            return window.google_auto_width_experiment;
        b = ya;
        a = ["CI", "EI"];
        window.google_auto_width_experiment = F(a, b);
        return window.google_auto_width_experiment
    }
    return ""
}, yb = Math.floor(1E6 * Math.random()), zb = function(a) {
    for (var b = a.data.split("\n"), c = {}, d = 0; d < b.length; d++) {
        var f = b[d].indexOf("=");
        - 1 != f && (c[b[d].substr(0, f)] = b[d].substr(f + 1))
    }
    b = c[3];
    if (c[1] == yb && (window.google_top_js_status = 4, a.source == top && 0 == b.indexOf(a.origin) && (window.google_top_values = c, window.google_top_js_status = 5), window.google_top_js_callbacks)) {
        for (a = 0; a < window.google_top_js_callbacks.length; a++)
            window.google_top_js_callbacks[a]();
        window.google_top_js_callbacks.length = 0
    }
}, Ab = function(a, b) {
    var c = navigator;
    if (Fa && a && b && c) {
        var d = a.document, c = d.createElement("script"), f;
        (f = b) ? (f = f.toLowerCase()) && "ca-" != f.substring(0, 3) && (f = "ca-" + f) : f = "";
        c.async=!0;
        c.type = "text/javascript";
        c.src = ab("www.gstatic.com", "/pub-config/" + f + ".js");
        d = d.getElementsByTagName("script")[0];
        d.parentNode.insertBefore(c, d)
    }
};
var Bb = function(a) {
    return ra.test(a.className) && "done" != a.getAttribute("data-adsbygoogle-status")
}, Db = function(a, b, c) {
    pa(c);
    Cb(a, b, c);
    var d = K(a, c);
    if (!d || "none" != d.display || "on" == b.google_adtest || 0 < b.google_reactive_ad_format) {
        1 == J(c) && Ab(c, b.google_ad_client);
        H(sa, function(a, d) {
            b[d] = b[d] || c[d]
        });
        b.google_loader_used = "aa";
        if ((d = b.google_ad_output) && "html" != d)
            throw Error("No support for google_ad_output=" + d);
        Pa("aa::main", function() {
            wb(c, b, a)
        })
    } else 
        c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag"))
},
Cb = function(a, b, c) {
    for (var d = a.attributes, f = d.length, g = 0; g < f; g++) {
        var h = d[g];
        if (/data-/.test(h.nodeName)) {
            var e = h.nodeName.replace("data", "google").replace(/-/g, "_");
            b.hasOwnProperty(e) || (h = h.nodeValue, "google_reactive_ad_format" == e && (h =+ h, h = isNaN(h) ? null : h), null === h || (b[e] = h))
        }
    }
    if (b.google_enable_content_recommendations && 1 == b.google_reactive_ad_format)
        b.google_ad_width = Q(c), void 0 === window.google_floating_ads_js_experiment && (window.google_floating_ads_js_experiment = F(["4091000", "4091001"], Ga)), "4091001" ==
    window.google_floating_ads_js_experiment ? b.google_ad_height = Ia : b.google_ad_height = 50, a.style.display = "none";
    else if (1 == b.google_reactive_ad_format)
        b.google_ad_width = 320, b.google_ad_height = 50, a.style.display = "none";
    else if (8 == b.google_reactive_ad_format)
        b.google_ad_width = Q(c), b.google_ad_height = Ua(c), a.style.display = "none";
    else if (d = b.google_ad_format, "auto" == d || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(d)) {
        void 0 === b.google_responsive_optimization_experiment && (f = 488 > Q(window), d = 320 == Q(window),
        g = ["C320", "E320"], (g = f ? F(g, za) : null) || (g = F(["CMATF", "EMATF", "EMATF100"], Ba), e = "horizontal" == b.google_ad_format, g = g&&!e && f && $a(a, c) ? g : null), (f = g) || (f = ["IC", "IEA", "IEB"], g = a.offsetWidth, f = d && 300 <= g && 320 > g ? F(f, Ca) : null), b.google_responsive_optimization_experiment = f || F(["SC", "SE"], Aa) || "-");
        var d = a.offsetWidth, f = b.google_ad_format, k;
        if ("auto" == f)
            k = Q(c), k = Math.min(1200, k), k = .25 >= d / k ? 4 : 3;
        else {
            g = 0;
            for (k in Xa) 
                - 1 != f.indexOf(k) && (g|=Xa[k]);
                k = g
        }
        b && (b.google_responsive_formats = k);
        t:
        {
            g = Ya.sort(Za);
            for (e = 0; e <
            g.length; e++) {
                var h = g[e], l;
                if (l = g[e].width <= d && h.format & k)
                    if (l = h, b && a) {
                        var r = b.google_responsive_optimization_experiment;
                        l = ("EMATF" == r || "EMATF100" == r || "IC" == r || "IEA" == r || "IEB" == r) && 488 > Q(c) && $a(a, c) ? 250 > l.height : !0
                    } else 
                        l=!0;
                        if (l) {
                            k = h;
                            break t
                        }
            }
            k = null
        }
        e = k;
        if (!e)
            throw Error("Cannot find a responsive size for a container of width=" + d + "px and data-ad-format=" + f);
            k = b.google_responsive_optimization_experiment;
            ("SC" == k || "SE" == k ? e.width != (300 < d && 300 < e.height ? e.width : 1200 < d ? 1200 : Math.round(d)) : "C320" == k ||
            "E320" == k ? 320 == e.width && 50 == e.height : "IC" != k && "IEA" != k && "IEB" != k || 234 == e.width && 60 == e.height) || (b.google_responsive_optimization_experiment = void 0);
            k = b.google_responsive_optimization_experiment;
            f = "SE" == k ? e.width : 300 < d && 300 < e.height ? e.width : 1200 < d ? 1200 : Math.round(d);
            g = "E320" != k && "EMATF100" != k || 320 != e.width || 50 != e.height ? e.height : 100;
            if (e = 234 == e.width && 60 == e.height && "IEA" == k || "IEB" == k) {
                e = Q(c);
                if (!(d=!(320 == e && 300 <= d && 320 > d)))
                    i: {
                        d = a;
                        for (h = 0; 10 > h && d.parentElement; h++) {
                            d = d.parentElement;
                            l = K(d, c);
                            if (!l)
                                break;
                                l = l.overflowX || l.overflow;
                                if ("hidden" == l || "scroll" == l || "auto" == l)
                                    break;
                                    if (d.clientWidth >= e) {
                                        d=!1;
                                        break i
                                    }
                        }
                        d=!0
                    }
                    d ? e=!1 : (c = K(a, c), d = a.getBoundingClientRect(), c && d ? (d = d.left, 0 >= d ? e=!1 : (e -= d + a.offsetWidth, "rtl" != c.direction ? (c = T(c.marginLeft) || 0, a.style.marginLeft = c - d + "px") : (c = T(c.marginRight) || 0, a.style.marginRight = c - e + "px"), e=!0)) : e=!1)
                }
                e && (f = 320, g = "IEA" == k ? 50 : 100);
                b.google_ad_width = f;
                b.google_ad_height = g;
                a.style.height = b.google_ad_height + "px";
                b.google_ad_resizable=!0;
                delete b.google_ad_format;
                b.google_loader_features_used =
                128
        } else 
            !Va.test(b.google_ad_width)&&!S.test(a.style.width) ||!Va.test(b.google_ad_height)&&!S.test(a.style.height) ? (c = K(a, c), a.style.width = c.width, a.style.height = c.height, U(c, b, ["width", "height"]), b.google_loader_features_used = 256) : "E" == xb() || Eb(c) ? (k = "CI" != c.google_auto_width_experiment, d = a.style, U(d, b, ["height"]), f = a.style.width, a.style.width = "100%", g = a.offsetWidth, a.style.width = f, f = g, g = Wa(d.width), e = Wa(d.height), !e ||!g || 50 > e || 120 > f || R[g + "x" + e] ? (U(d, b, ["width"]), a=!1) : (f = Math.min(1200, f), 300 < e &&
            (f = Math.min(300, f)), f <= g ? (U(d, b, ["width"]), a=!1) : (k ? (b.google_ad_width = f, b.google_original_width = g, a.style.width = f + "px") : (b.google_ad_width = g, b.google_available_width = f), a=!0)), !a && Eb(c) && (c.google_auto_width_experiment = null)) : U(a.style, b, ["width", "height"])
}, Eb = function(a) {
    a = a.google_auto_width_experiment;
    return "EI" == a || "CI" == a
}, Fb = function(a) {
    for (var b = document.getElementsByTagName("ins"), c = 0, d = b[c]; c < b.length; d = b[++c])
        if (Bb(d) && (!a || d.id == a))
            return d;
    return null
}, Gb = function(a) {
    var b = a.element;
    a = a.params || {};
    if (b) {
        if (!Bb(b) && (b = b.id && Fb(b.id), !b))
            throw Error("adsbygoogle: 'element' has already been filled.");
        if (!("innerHTML"in b))
            throw Error("adsbygoogle.push(): 'element' is not a good DOM element.");
    } else if (b = Fb(), !b)
        throw Error("adsbygoogle.push(): All ins elements in the DOM with class=adsbygoogle already have ads in them.");
    var c = window;
    b.setAttribute("data-adsbygoogle-status", "done");
    Db(b, a, c)
}, Hb = function() {
    if (!window.google_top_experiment&&!window.google_top_js_status) {
        var a = window;
        if (2 !== (a.top == a ? 0 : E(a.top) ? 1 : 2))
            window.google_top_js_status = 0;
        else if (top.postMessage) {
            var b;
            try {
                b = G.top.frames.google_top_static_frame?!0 : !1
            } catch (c) {
                b=!1
            }
            if (b) {
                if (window.google_top_experiment = F(["jp_c", "jp_zl", "jp_wfpmr", "jp_zlt", "jp_wnt"], wa), "jp_c" !== window.google_top_experiment) {
                    a = window;
                    a.addEventListener ? a.addEventListener("message", zb, !1) : a.attachEvent && a.attachEvent("onmessage", zb);
                    window.google_top_js_status = 3;
                    a = {
                        0: "google_loc_request",
                        1: yb
                    };
                    b = [];
                    for (var d in a)
                        b.push(d + "=" + a[d]);
                    top.postMessage(b.join("\n"),
                    "*")
                }
            } else 
                window.google_top_js_status = 2
        } else 
            window.google_top_js_status = 1
    }
    if ((d = window.adsbygoogle) && d.shift)
        for (b = 20; (a = d.shift()) && 0 < b--;)
            try {
                Gb(a)
    } catch (f) {
        throw window.setTimeout(Hb, 0), f;
    }
    window.adsbygoogle = {
        push: Gb
    }
};
Hb();
})();

