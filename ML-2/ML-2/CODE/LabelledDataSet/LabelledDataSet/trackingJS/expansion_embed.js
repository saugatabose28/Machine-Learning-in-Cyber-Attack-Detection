(function() {
    var g, l = this, m = function(a) {
        return void 0 !== a
    }, aa = function(a) {
        a = a.split(".");
        for (var b = l, c; c = a.shift();)
            if (null != b[c])
                b = b[c];
            else 
                return null;
        return b
    }, ba = function() {}, ca = function(a) {
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
}, n = function(a) {
    return "array" == ca(a)
}, da = function(a) {
    var b = ca(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}, q = function(a) {
    return "string" == typeof a
}, r = function(a) {
    return "number" == typeof a
}, s = function(a) {
    return "function" == ca(a)
}, ea = function(a) {
    var b =
    typeof a;
    return "object" == b && null != a || "function" == b
}, ia = function(a) {
    return a[ga] || (a[ga]=++ha)
}, ga = "closure_uid_" + (1E9 * Math.random()>>>0), ha = 0, ja = function(a, b, c) {
    return a.call.apply(a.bind, arguments)
}, ka = function(a, b, c) {
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
}, t = function(a, b, c) {
    t = Function.prototype.bind &&
    - 1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
    return t.apply(null, arguments)
}, ma = function(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
    }
}, u = Date.now || function() {
    return + new Date
}, v = function(a, b) {
    var c = a.split("."), d = l;
    c[0]in d ||!d.execScript || d.execScript("var " + c[0]);
    for (var e; c.length && (e = c.shift());)
        !c.length && m(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
}, x = function(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.j = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.ki = function(a, c, f) {
        return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
    }
};
var na = function(a) {
    na[" "](a);
    return a
};
na[" "] = ba;
var oa = function(a, b) {
    try {
        return na(a[b]), !0
    } catch (c) {}
    return !1
};
var y = document, z = window;
var pa = function(a) {
    if (Error.captureStackTrace)
        Error.captureStackTrace(this, pa);
    else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
};
x(pa, Error);
pa.prototype.name = "CustomError";
var qa;
var ra = String.prototype.trim ? function(a) {
    return a.trim()
}
: function(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}, za = function(a) {
    if (!sa.test(a))
        return a;
    - 1 != a.indexOf("&") && (a = a.replace(ta, "&amp;"));
    - 1 != a.indexOf("<") && (a = a.replace(ua, "&lt;"));
    - 1 != a.indexOf(">") && (a = a.replace(va, "&gt;"));
    - 1 != a.indexOf('"') && (a = a.replace(wa, "&quot;"));
    - 1 != a.indexOf("'") && (a = a.replace(xa, "&#39;"));
    - 1 != a.indexOf("\x00") && (a = a.replace(ya, "&#0;"));
    return a
}, ta = /&/g, ua = /</g, va = />/g, wa = /"/g, xa = /'/g, ya = /\x00/g, sa = /[\x00&<>"']/,
Ba = function(a, b) {
    for (var c = 0, d = ra(String(a)).split("."), e = ra(String(b)).split("."), f = Math.max(d.length, e.length), h = 0; 0 == c && h < f; h++) {
        var k = d[h] || "", p = e[h] || "", w = RegExp("(\\d*)(\\D*)", "g"), A = RegExp("(\\d*)(\\D*)", "g");
        do {
            var la = w.exec(k) || ["", "", ""], fa = A.exec(p) || ["", "", ""];
            if (0 == la[0].length && 0 == fa[0].length)
                break;
            c = Aa(0 == la[1].length ? 0 : parseInt(la[1], 10), 0 == fa[1].length ? 0 : parseInt(fa[1], 10)) || Aa(0 == la[2].length, 0 == fa[2].length) || Aa(la[2], fa[2])
        }
        while (0 == c)
        }
    return c
}, Aa = function(a, b) {
    return a < b?-1 :
    a > b ? 1 : 0
}, Ca = function(a) {
    var b = Number(a);
    return 0 == b && /^[\s\xa0]*$/.test(a) ? NaN : b
}, Da = function(a) {
    return String(a).replace(/\-([a-z])/g, function(a, c) {
        return c.toUpperCase()
    })
}, Ea = function(a) {
    var b = q(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"): "\\s";
    return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
        return b + e.toUpperCase()
    })
};
var Fa = function(a) {
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
        } catch (e) {
            b = c
        }
    }
    return b
}, Ga = function(a, b) {
    a.google_image_requests || (a.google_image_requests = []);
    var c = a.document.createElement("img");
    c.src = b;
    a.google_image_requests.push(c)
};
var Ha = null, Ia = function(a, b) {
    for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b.call(null, a[c], c, a)
}, Ja = function(a) {
    return r(a) && 0 < a
}, Ka = function(a) {
    return s(a) || "undefined" === typeof a
};
function La(a) {
    return "function" == typeof encodeURIComponent ? encodeURIComponent(a) : escape(a)
}
var Ma = function(a) {
    t: {
        var b = [!0];
        if (!(1E-4 > Math.random())) {
            var c = Math.random();
            if (c < a) {
                try {
                    var d = new Uint16Array(1);
                    window.crypto.getRandomValues(d);
                    c = d[0] / 65536
                } catch (e) {
                    c = Math.random()
                }
                a = b[Math.floor(c * b.length)];
                break t
            }
        }
        a = null
    }
    return a
}, Na = function(a) {
    return !!a && (0 < a.indexOf("?google_debug") || 0 < a.indexOf("&google_debug"))
};
var Oa = null, Pa = function() {
    var a;
    if (!Oa)
        t: {
        for (var b = [z.top], c = [], d = 0, e; e = b[d++];) {
            c.push(e);
            try {
                if (e.frames)
                    for (var f = e.frames.length, h = 0; h < f && 1024 > b.length; ++h)
                        b.push(e.frames[h])
                    } catch (k) {}
        }
        for (b = 0; b < c.length; b++)
            try {
                a = c[b].frames.google_esf;
                var p;
                if (p = a)
                    try {
                        p=!!a && null != a.location.href && oa(a, "foo")
                    } catch (w) {
                        p=!1
                    }
                    if (p) {
                        Oa = a;
                        break t
                    }
                } catch (A) {}
                Oa = null
    }
    a = Oa;
    if (!a)
        return null;
    (c = a.esf_winPropArray) || (c = a.esf_winPropArray = []);
    for (a = 0; a < c.length; a++)
        if (c[a].window == z)
            return c[a].store;
    a = {};
    a.window =
    z;
    a.store = {};
    c.push(a);
    return a.store
};
var Qa = Array.prototype, Ra = Qa.indexOf ? function(a, b, c) {
    return Qa.indexOf.call(a, b, c)
}
: function(a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (q(a))
        return q(b) && 1 == b.length ? a.indexOf(b, c) : - 1;
    for (; c < a.length; c++)
        if (c in a && a[c] === b)
            return c;
    return - 1
}, B = Qa.forEach ? function(a, b, c) {
    Qa.forEach.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)
        f in e && b.call(c, e[f], f, a)
}, Sa = Qa.filter ? function(a, b, c) {
    return Qa.filter.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = [], f =
    0, h = q(a) ? a.split("") : a, k = 0; k < d; k++)
        if (k in h) {
            var p = h[k];
            b.call(c, p, k, a) && (e[f++] = p)
        }
    return e
}, Ta = Qa.map ? function(a, b, c) {
    return Qa.map.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = Array(d), f = q(a) ? a.split("") : a, h = 0; h < d; h++)
        h in f && (e[h] = b.call(c, f[h], h, a));
    return e
}, Ua = Qa.some ? function(a, b, c) {
    return Qa.some.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && b.call(c, e[f], f, a))
            return !0;
    return !1
}, Va = function(a, b) {
    return 0 <= Ra(a, b)
}, Wa = function(a, b) {
    var c =
    Ra(a, b), d;
    (d = 0 <= c) && Qa.splice.call(a, c, 1);
    return d
}, Xa = function(a) {
    return Qa.concat.apply(Qa, arguments)
}, Ya = function(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)
            c[d] = a[d];
        return c
    }
    return []
}, Za = function(a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c], e;
        if (n(d) || (e = da(d)) && Object.prototype.hasOwnProperty.call(d, "callee"))
            a.push.apply(a, d);
        else if (e)
            for (var f = a.length, h = d.length, k = 0; k < h; k++)
                a[f + k] = d[k];
        else 
            a.push(d)
    }
};
var $a = function(a, b) {
    return Math.min(Math.max(a, 0), b)
};
var C = function(a, b) {
    this.x = m(a) ? a : 0;
    this.y = m(b) ? b : 0
};
g = C.prototype;
g.clone = function() {
    return new C(this.x, this.y)
};
g.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
g.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
g.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
g.translate = function(a, b) {
    a instanceof C ? (this.x += a.x, this.y += a.y) : (this.x += a, r(b) && (this.y += b));
    return this
};
g.scale = function(a, b) {
    var c = r(b) ? b: a;
    this.x*=a;
    this.y*=c;
    return this
};
var D = function(a, b) {
    this.width = a;
    this.height = b
};
g = D.prototype;
g.clone = function() {
    return new D(this.width, this.height)
};
g.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
g.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
g.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
g.scale = function(a, b) {
    var c = r(b) ? b: a;
    this.width*=a;
    this.height*=c;
    return this
};
var ab = function(a, b, c) {
    for (var d in a)
        b.call(c, a[d], d, a)
}, bb = function(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = a[d];
    return b
}, cb = function(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = d;
    return b
}, eb = function() {
    var a = db, b;
    for (b in a)
        return !1;
    return !0
}, fb = function(a) {
    var b = {}, c;
    for (c in a)
        b[c] = a[c];
    return b
}, gb = function(a) {
    var b = ca(a);
    if ("object" == b || "array" == b) {
        if (a.clone)
            return a.clone();
        var b = "array" == b ? []: {}, c;
        for (c in a)
            b[c] = gb(a[c]);
        return b
    }
    return a
}, hb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
ib = function(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)
            a[c] = d[c];
        for (var f = 0; f < hb.length; f++)
            c = hb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
}, jb = function(a) {
    var b = arguments.length;
    if (1 == b && n(arguments[0]))
        return jb.apply(null, arguments[0]);
    if (b%2)
        throw Error("Uneven number of arguments");
    for (var c = {}, d = 0; d < b; d += 2)
        c[arguments[d]] = arguments[d + 1];
    return c
}, kb = function(a) {
    var b = arguments.length;
    if (1 == b && n(arguments[0]))
        return kb.apply(null, arguments[0]);
    for (var c =
    {}, d = 0; d < b; d++)
        c[arguments[d]]=!0;
    return c
};
var lb;
t: {
    var mb = l.navigator;
    if (mb) {
        var nb = mb.userAgent;
        if (nb) {
            lb = nb;
            break t
        }
    }
    lb = ""
}
var ob = function(a) {
    return - 1 != lb.indexOf(a)
};
var pb = ob("Opera") || ob("OPR"), E = ob("Trident") || ob("MSIE"), F = ob("Gecko")&&-1 == lb.toLowerCase().indexOf("webkit")&&!(ob("Trident") || ob("MSIE")), G =- 1 != lb.toLowerCase().indexOf("webkit"), qb = G && ob("Mobile"), rb = ob("Macintosh"), sb = l.navigator || null, tb=!!sb&&-1 != (sb.appVersion || "").indexOf("X11"), ub = ob("Android"), vb = function() {
    var a = l.document;
    return a ? a.documentMode : void 0
}, wb = function() {
    var a = "", b;
    if (pb && l.opera)
        return a = l.opera.version, s(a) ? a() : a;
    F ? b = /rv\:([^\);]+)(\)|;)/ : E ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ :
    G && (b = /WebKit\/(\S+)/);
    b && (a = (a = b.exec(lb)) ? a[1] : "");
    return E && (b = vb(), b > parseFloat(a)) ? String(b) : a
}(), yb = {}, H = function(a) {
    return yb[a] || (yb[a] = 0 <= Ba(wb, a))
}, zb = l.document, Ab = zb && E ? vb() || ("CSS1Compat" == zb.compatMode ? parseInt(wb, 10) : 5) : void 0;
var Bb=!E || E && 9 <= Ab, Cb=!F&&!E || E && E && 9 <= Ab || F && H("1.9.1");
E && H("9");
var Db = E || pb || G;
var Gb = function(a) {
    return a ? new Eb(Fb(a)) : qa || (qa = new Eb)
}, Ib = function(a, b) {
    ab(b, function(b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Hb ? a.setAttribute(Hb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
}, Hb = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
}, Kb = function(a) {
    a = (a || window).document;
    a = Jb(a) ? a.documentElement : a.body;
    return new D(a.clientWidth, a.clientHeight)
}, Lb = function(a) {
    return a.parentWindow || a.defaultView
}, Nb = function(a, b, c) {
    return Mb(document, arguments)
}, Mb = function(a, b) {
    var c = b[0], d = b[1];
    if (!Bb && d && (d.name || d.type)) {
        c = ["<", c];
        d.name && c.push(' name="', za(d.name), '"');
        if (d.type) {
            c.push(' type="', za(d.type), '"');
            var e = {};
            ib(e, d);
            delete e.type;
            d = e
        }
        c.push(">");
        c = c.join("")
    }
    c = a.createElement(c);
    d && (q(d) ? c.className = d : n(d) ?
    c.className = d.join(" ") : Ib(c, d));
    2 < b.length && Ob(a, c, b, 2);
    return c
}, Ob = function(a, b, c, d) {
    function e(c) {
        c && b.appendChild(q(c) ? a.createTextNode(c) : c)
    }
    for (; d < c.length; d++) {
        var f = c[d];
        !da(f) || ea(f) && 0 < f.nodeType ? e(f) : B(Pb(f) ? Ya(f) : f, e)
    }
}, Jb = function(a) {
    return "CSS1Compat" == a.compatMode
}, I = function(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
}, Fb = function(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}, Qb = function(a, b) {
    if ("textContent"in a)
        a.textContent = b;
    else if (3 == a.nodeType)
        a.data =
        b;
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;)
            a.removeChild(a.lastChild);
        a.firstChild.data = b
    } else {
        for (var c; c = a.firstChild;)
            a.removeChild(c);
        a.appendChild(Fb(a).createTextNode(String(b)))
    }
}, Rb = function(a, b) {
    b ? a.tabIndex = 0 : (a.tabIndex =- 1, a.removeAttribute("tabIndex"))
}, Pb = function(a) {
    if (a && "number" == typeof a.length) {
        if (ea(a))
            return "function" == typeof a.item || "string" == typeof a.item;
        if (s(a))
            return "function" == typeof a.item
    }
    return !1
}, Eb = function(a) {
    this.V = a || l.document ||
    document
};
Eb.prototype.W = Gb;
var Tb = function(a) {
    return a.V
};
g = Eb.prototype;
g.$ = function(a) {
    return q(a) ? this.V.getElementById(a) : a
};
g.Hb = function(a, b, c) {
    return Mb(this.V, arguments)
};
g.createElement = function(a) {
    return this.V.createElement(a)
};
g.createTextNode = function(a) {
    return this.V.createTextNode(String(a))
};
g.$a = function() {
    return Lb(this.V)
};
var Ub = function(a) {
    var b = a.V;
    a=!G && Jb(b) ? b.documentElement : b.body || b.documentElement;
    b = Lb(b);
    return E && H("10") && b.pageYOffset != a.scrollTop ? new C(a.scrollLeft, a.scrollTop) : new C(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
};
Eb.prototype.appendChild = function(a, b) {
    a.appendChild(b)
};
Eb.prototype.append = function(a, b) {
    Ob(Fb(a), a, arguments, 1)
};
Eb.prototype.canHaveChildren = function(a) {
    if (1 != a.nodeType)
        return !1;
    switch (a.tagName) {
    case "APPLET":
    case "AREA":
    case "BASE":
    case "BR":
    case "COL":
    case "COMMAND":
    case "EMBED":
    case "FRAME":
    case "HR":
    case "IMG":
    case "INPUT":
    case "IFRAME":
    case "ISINDEX":
    case "KEYGEN":
    case "LINK":
    case "NOFRAMES":
    case "NOSCRIPT":
    case "META":
    case "OBJECT":
    case "PARAM":
    case "SCRIPT":
    case "SOURCE":
    case "STYLE":
    case "TRACK":
    case "WBR":
        return !1
    }
    return !0
};
Eb.prototype.removeNode = I;
var Vb = function(a) {
    return Cb && void 0 != a.children ? a.children : Sa(a.childNodes, function(a) {
        return 1 == a.nodeType
    })
};
Eb.prototype.contains = function(a, b) {
    if (a.contains && 1 == b.nodeType)
        return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
        return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;)
        b = b.parentNode;
    return b == a
};
G && document.createElement("iframe");
F || G || E && H(11);
var Wb=!0, Xb = {}, $b = function(a) {
    var b = Yb, c, d = Wb;
    try {
        c = a()
    } catch (e) {
        try {
            var f = Fa(e);
            a = "";
            e.fileName && (a = e.fileName);
            var h =- 1;
            e.lineNumber && (h = e.lineNumber);
            d = b("osd_proto::reqm_int", f, a, h, void 0)
        } catch (k) {
            try {
                var p = Fa(k), b = "";
                k.fileName && (b = k.fileName);
                f =- 1;
                k.lineNumber && (f = k.lineNumber);
                Yb("pAR", p, b, f, void 0, void 0)
            } catch (w) {
                Zb("jserror", {
                    context: "mRE",
                    msg: w.toString() + "\n" + (w.stack || "")
                }, void 0)
            }
        }
        if (!d)
            throw e;
    } finally {}
    return c
}, Yb = function(a, b, c, d, e, f) {
    var h = {};
    if (e)
        try {
            e(h)
    } catch (k) {}
    h.context =
    a;
    h.msg = b.substring(0, 512);
    c && (h.file = c);
    0 < d && (h.line = d.toString());
    h.url = y.URL.substring(0, 512);
    h.ref = y.referrer.substring(0, 512);
    ac(h);
    Zb("jserror", h, f);
    return Wb
}, Zb = function(a, b, c) {
    try {
        if (Math.random() < (c || .01)) {
            var d = "/pagead/gen_204?id=" + a + bc(b), e = "http" + ("http:" == z.location.protocol ? "" : "s") + "://pagead2.googlesyndication.com" + d, e = e.substring(0, 2E3);
            Ga(z, e)
        }
    } catch (f) {}
}, ac = function(a) {
    var b = a || {};
    Ia(Xb, function(a, d) {
        b[d] = z[a]
    })
}, cc = function(a) {
    return function() {
        var b = arguments;
        return $b(function() {
            return a.apply(void 0,
            b)
        })
    }
}, bc = function(a) {
    var b = "";
    Ia(a, function(a, d) {
        if (0 === a || a)
            b += "&" + d + "=" + La(a)
    });
    return b
};
var dc = function(a) {
    a = String(a);
    if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
        try {
            return eval("(" + a + ")")
    } catch (b) {}
    throw Error("Invalid JSON string: " + a);
}, gc = function(a) {
    var b = [];
    ec(new fc, a, b);
    return b.join("")
}, fc = function() {
    this.Wd = void 0
}, ec = function(a, b, c) {
    switch (typeof b) {
    case "string":
        hc(b, c);
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
        if (n(b)) {
            var d = b.length;
            c.push("[");
            for (var e = "", f = 0; f < d; f++)
                c.push(e), e = b[f], ec(a, a.Wd ? a.Wd.call(b, String(f), e) : e, c), e = ",";
            c.push("]");
            break
        }
        c.push("{");
        d = "";
        for (f in b)
            Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), hc(f, c), c.push(":"), ec(a, a.Wd ? a.Wd.call(b, f, e) : e, c), d = ","));
        c.push("}");
        break;
    case "function":
        break;
    default:
        throw Error("Unknown type: " + typeof b);
    }
}, ic = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\u000b"
}, jc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g: /[\\\"\x00-\x1f\x7f-\xff]/g, hc = function(a, b) {
    b.push('"', a.replace(jc, function(a) {
        if (a in ic)
            return ic[a];
        var b = a.charCodeAt(0), e = "\\u";
        16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
        return ic[a] = e + b.toString(16)
    }), '"')
};
var kc = function(a) {
    return function() {
        return a
    }
}, lc = kc(!1), mc = function(a) {
    var b=!1, c;
    return function() {
        b || (c = a(), b=!0);
        return c
    }
};
var nc = "StopIteration"in l ? l.StopIteration: Error("StopIteration"), oc = function() {};
oc.prototype.next = function() {
    throw nc;
};
oc.prototype.Sh = function() {
    return this
};
var qc = function(a, b) {
    this.xa = {};
    this.r = [];
    this.Rc = this.F = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c%2)
            throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2)
            this.set(arguments[d], arguments[d + 1])
    } else if (a) {
        a instanceof qc ? (c = a.wb(), d = a.Va()) : (c = cb(a), d = bb(a));
        for (var e = 0; e < c.length; e++)
            this.set(c[e], d[e])
    }
};
g = qc.prototype;
g.Va = function() {
    rc(this);
    for (var a = [], b = 0; b < this.r.length; b++)
        a.push(this.xa[this.r[b]]);
    return a
};
g.wb = function() {
    rc(this);
    return this.r.concat()
};
g.Uc = function(a) {
    return sc(this.xa, a)
};
g.clear = function() {
    this.xa = {};
    this.Rc = this.F = this.r.length = 0
};
g.remove = function(a) {
    return sc(this.xa, a) ? (delete this.xa[a], this.F--, this.Rc++, this.r.length > 2 * this.F && rc(this), !0) : !1
};
var rc = function(a) {
    if (a.F != a.r.length) {
        for (var b = 0, c = 0; b < a.r.length;) {
            var d = a.r[b];
            sc(a.xa, d) && (a.r[c++] = d);
            b++
        }
        a.r.length = c
    }
    if (a.F != a.r.length) {
        for (var e = {}, c = b = 0; b < a.r.length;)
            d = a.r[b], sc(e, d) || (a.r[c++] = d, e[d] = 1), b++;
        a.r.length = c
    }
};
g = qc.prototype;
g.get = function(a, b) {
    return sc(this.xa, a) ? this.xa[a] : b
};
g.set = function(a, b) {
    sc(this.xa, a) || (this.F++, this.r.push(a), this.Rc++);
    this.xa[a] = b
};
g.forEach = function(a, b) {
    for (var c = this.wb(), d = 0; d < c.length; d++) {
        var e = c[d], f = this.get(e);
        a.call(b, f, e, this)
    }
};
g.clone = function() {
    return new qc(this)
};
g.Sh = function(a) {
    rc(this);
    var b = 0, c = this.r, d = this.xa, e = this.Rc, f = this, h = new oc;
    h.next = function() {
        for (; ;) {
            if (e != f.Rc)
                throw Error("The map has changed since the iterator was created");
            if (b >= c.length)
                throw nc;
            var h = c[b++];
            return a ? h : d[h]
        }
    };
    return h
};
var sc = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
var tc = function(a) {
    if ("function" == typeof a.Va)
        return a.Va();
    if (q(a))
        return a.split("");
    if (da(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++)
            b.push(a[d]);
        return b
    }
    return bb(a)
}, uc = function(a, b, c) {
    if ("function" == typeof a.forEach)
        a.forEach(b, c);
    else if (da(a) || q(a))
        B(a, b, c);
    else {
        var d;
        if ("function" == typeof a.wb)
            d = a.wb();
        else if ("function" != typeof a.Va)
            if (da(a) || q(a)) {
                d = [];
                for (var e = a.length, f = 0; f < e; f++)
                    d.push(f)
            } else 
                d = cb(a);
        else 
            d = void 0;
        for (var e = tc(a), f = e.length, h = 0; h < f; h++)
            b.call(c, e[h], d && d[h], a)
    }
};
var J = function() {
    this.Ka = this.Ka;
    this.Gb = this.Gb
};
J.prototype.Ka=!1;
J.prototype.gb = function() {
    this.Ka || (this.Ka=!0, this.i())
};
var vc = function(a, b) {
    a.Gb || (a.Gb = []);
    a.Gb.push(m(void 0) ? t(b, void 0) : b)
};
J.prototype.i = function() {
    if (this.Gb)
        for (; this.Gb.length;)
            this.Gb.shift()()
};
var K = function(a) {
    a && "function" == typeof a.gb && a.gb()
}, wc = function(a) {
    for (var b = 0, c = arguments.length; b < c; ++b) {
        var d = arguments[b];
        da(d) ? wc.apply(null, d) : K(d)
    }
};
var xc = function(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.Fb=!1;
    this.Rf=!0
};
xc.prototype.i = function() {};
xc.prototype.gb = function() {};
xc.prototype.stopPropagation = function() {
    this.Fb=!0
};
xc.prototype.preventDefault = function() {
    this.defaultPrevented=!0;
    this.Rf=!1
};
var yc=!E || E && 9 <= Ab, zc = E&&!H("9");
!G || H("528");
F && H("1.9b") || E && H("8") || pb && H("9.5") || G && H("528");
F&&!H("8") || E && H("9");
var Ac = G ? "webkitTransitionEnd": pb ? "otransitionend": "transitionend";
var Bc = function(a, b) {
    xc.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey=!1;
    this.hc = this.state = null;
    if (a) {
        var c = this.type = a.type;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        d ? F && (oa(d, "nodeName") || (d = null)) : "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = G || void 0 !== a.offsetX ? a.offsetX : a.layerX;
        this.offsetY = G || void 0 !== a.offsetY ? a.offsetY : a.layerY;
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.state = a.state;
        this.hc =
        a;
        a.defaultPrevented && this.preventDefault()
    }
};
x(Bc, xc);
Bc.prototype.stopPropagation = function() {
    Bc.j.stopPropagation.call(this);
    this.hc.stopPropagation ? this.hc.stopPropagation() : this.hc.cancelBubble=!0
};
Bc.prototype.preventDefault = function() {
    Bc.j.preventDefault.call(this);
    var a = this.hc;
    if (a.preventDefault)
        a.preventDefault();
    else if (a.returnValue=!1, zc)
        try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                a.keyCode =- 1
    } catch (b) {}
};
Bc.prototype.pa = function() {
    return this.hc
};
Bc.prototype.i = function() {};
var Cc = "closure_listenable_" + (1E6 * Math.random() | 0), Dc = function(a) {
    return !(!a ||!a[Cc])
}, Ec = 0;
var Fc = function(a, b, c, d, e) {
    this.Db = a;
    this.Qd = null;
    this.src = b;
    this.type = c;
    this.Ld=!!d;
    this.Nd = e;
    this.key=++Ec;
    this.dc = this.Md=!1
}, Gc = function(a) {
    a.dc=!0;
    a.Db = null;
    a.Qd = null;
    a.src = null;
    a.Nd = null
};
var Hc = function(a) {
    this.src = a;
    this.L = {};
    this.Wc = 0
};
Hc.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.L[f];
    a || (a = this.L[f] = [], this.Wc++);
    var h = Ic(a, b, d, e);
    - 1 < h ? (b = a[h], c || (b.Md=!1)) : (b = new Fc(b, this.src, f, !!d, e), b.Md = c, a.push(b));
    return b
};
Hc.prototype.remove = function(a, b, c, d) {
    a = a.toString();
    if (!(a in this.L))
        return !1;
    var e = this.L[a];
    b = Ic(e, b, c, d);
    return - 1 < b ? (Gc(e[b]), Qa.splice.call(e, b, 1), 0 == e.length && (delete this.L[a], this.Wc--), !0) : !1
};
var Jc = function(a, b) {
    var c = b.type;
    if (!(c in a.L))
        return !1;
    var d = Wa(a.L[c], b);
    d && (Gc(b), 0 == a.L[c].length && (delete a.L[c], a.Wc--));
    return d
};
Hc.prototype.Ob = function(a) {
    a = a && a.toString();
    var b = 0, c;
    for (c in this.L)
        if (!a || c == a) {
            for (var d = this.L[c], e = 0; e < d.length; e++)
                ++b, Gc(d[e]);
                delete this.L[c];
                this.Wc--
        }
    return b
};
Hc.prototype.bd = function(a, b, c, d) {
    a = this.L[a.toString()];
    var e =- 1;
    a && (e = Ic(a, b, c, d));
    return - 1 < e ? a[e] : null
};
var Ic = function(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.dc && f.Db == b && f.Ld==!!c && f.Nd == d)
            return e
    }
    return - 1
};
var Kc = "closure_lm_" + (1E6 * Math.random() | 0), Lc = {}, Mc = 0, L = function(a, b, c, d, e) {
    if (n(b)) {
        for (var f = 0; f < b.length; f++)
            L(a, b[f], c, d, e);
        return null
    }
    c = Nc(c);
    return Dc(a) ? a.tb(b, c, d, e) : Oc(a, b, c, !1, d, e)
}, Oc = function(a, b, c, d, e, f) {
    if (!b)
        throw Error("Invalid event type");
    var h=!!e, k = Pc(a);
    k || (a[Kc] = k = new Hc(a));
    c = k.add(b, c, d, e, f);
    if (c.Qd)
        return c;
    d = Qc();
    c.Qd = d;
    d.src = a;
    d.Db = c;
    a.addEventListener ? a.addEventListener(b.toString(), d, h) : a.attachEvent(Rc(b.toString()), d);
    Mc++;
    return c
}, Qc = function() {
    var a = Sc, b = yc ? function(c) {
        return a.call(b.src,
        b.Db, c)
    }
    : function(c) {
        c = a.call(b.src, b.Db, c);
        if (!c)
            return c
    };
    return b
}, Tc = function(a, b, c, d, e) {
    if (n(b)) {
        for (var f = 0; f < b.length; f++)
            Tc(a, b[f], c, d, e);
        return null
    }
    c = Nc(c);
    return Dc(a) ? a.Rd(b, c, d, e) : Oc(a, b, c, !0, d, e)
}, Uc = function(a, b, c, d, e) {
    if (n(b))
        for (var f = 0; f < b.length; f++)
            Uc(a, b[f], c, d, e);
    else 
        c = Nc(c), Dc(a) ? a.Vb(b, c, d, e) : a && (a = Pc(a)) && (b = a.bd(b, c, !!d, e)) && M(b)
}, M = function(a) {
    if (r(a) ||!a || a.dc)
        return !1;
    var b = a.src;
    if (Dc(b))
        return b.Fd(a);
    var c = a.type, d = a.Qd;
    b.removeEventListener ? b.removeEventListener(c,
    d, a.Ld) : b.detachEvent && b.detachEvent(Rc(c), d);
    Mc--;
    (c = Pc(b)) ? (Jc(c, a), 0 == c.Wc && (c.src = null, b[Kc] = null)) : Gc(a);
    return !0
}, Vc = function(a) {
    if (a)
        if (Dc(a))
            a.Ca && a.Ca.Ob("end");
        else if (a = Pc(a)) {
            var b = 0, c = "end".toString(), d;
            for (d in a.L)
                if (!c || d == c)
                    for (var e = a.L[d].concat(), f = 0; f < e.length; ++f)
                        M(e[f])&&++b
        }
}, Wc = function(a, b, c, d, e) {
    c = Nc(c);
    d=!!d;
    return Dc(a) ? a.bd(b, c, d, e) : a ? (a = Pc(a)) ? a.bd(b, c, d, e) : null : null
}, Rc = function(a) {
    return a in Lc ? Lc[a] : Lc[a] = "on" + a
}, Yc = function(a, b, c, d) {
    var e = 1;
    if (a = Pc(a))
        if (b = a.L[b.toString()])
            for (b =
            b.concat(), a = 0; a < b.length; a++) {
                var f = b[a];
                f && f.Ld == c&&!f.dc && (e&=!1 !== Xc(f, d))
            }
    return Boolean(e)
}, Xc = function(a, b) {
    var c = a.Db, d = a.Nd || a.src;
    a.Md && M(a);
    return c.call(d, b)
}, Sc = function(a, b) {
    if (a.dc)
        return !0;
    if (!yc) {
        var c = b || aa("window.event"), d = new Bc(c, this), e=!0;
        if (!(0 > c.keyCode || void 0 != c.returnValue)) {
            t:
            {
                var f=!1;
                if (0 == c.keyCode)
                    try {
                        c.keyCode =- 1;
                        break t
                } catch (h) {
                    f=!0
                }
                if (f || void 0 == c.returnValue)
                    c.returnValue=!0
            }
            c = [];
            for (f = d.currentTarget; f; f = f.parentNode)
                c.push(f);
            for (var f = a.type, k = c.length - 1; !d.Fb &&
            0 <= k; k--)
                d.currentTarget = c[k], e&=Yc(c[k], f, !0, d);
            for (k = 0; !d.Fb && k < c.length; k++)
                d.currentTarget = c[k], e&=Yc(c[k], f, !1, d)
            }
        return e
    }
    return Xc(a, new Bc(b, this))
}, Pc = function(a) {
    a = a[Kc];
    return a instanceof Hc ? a : null
}, Zc = "__closure_events_fn_" + (1E9 * Math.random()>>>0), Nc = function(a) {
    if (s(a))
        return a;
    a[Zc] || (a[Zc] = function(b) {
        return a.handleEvent(b)
    });
    return a[Zc]
};
var N = function() {
    J.call(this);
    this.Ca = new Hc(this);
    this.Bh = this;
    this.Ed = null
};
x(N, J);
N.prototype[Cc]=!0;
g = N.prototype;
g.Ie = function(a) {
    this.Ed = a
};
g.addEventListener = function(a, b, c, d) {
    L(this, a, b, c, d)
};
g.removeEventListener = function(a, b, c, d) {
    Uc(this, a, b, c, d)
};
g.dispatchEvent = function(a) {
    var b, c = this.Ed;
    if (c)
        for (b = []; c; c = c.Ed)
            b.push(c);
    var c = this.Bh, d = a.type || a;
    if (q(a))
        a = new xc(a, c);
    else if (a instanceof xc)
        a.target = a.target || c;
    else {
        var e = a;
        a = new xc(d, c);
        ib(a, e)
    }
    var e=!0, f;
    if (b)
        for (var h = b.length - 1; !a.Fb && 0 <= h; h--)
            f = a.currentTarget = b[h], e = $c(f, d, !0, a) && e;
    a.Fb || (f = a.currentTarget = c, e = $c(f, d, !0, a) && e, a.Fb || (e = $c(f, d, !1, a) && e));
    if (b)
        for (h = 0; !a.Fb && h < b.length; h++)
            f = a.currentTarget = b[h], e = $c(f, d, !1, a) && e;
    return e
};
g.i = function() {
    N.j.i.call(this);
    this.Ca && this.Ca.Ob(void 0);
    this.Ed = null
};
g.tb = function(a, b, c, d) {
    return this.Ca.add(String(a), b, !1, c, d)
};
g.Rd = function(a, b, c, d) {
    return this.Ca.add(String(a), b, !0, c, d)
};
g.Vb = function(a, b, c, d) {
    return this.Ca.remove(String(a), b, c, d)
};
g.Fd = function(a) {
    return Jc(this.Ca, a)
};
var $c = function(a, b, c, d) {
    b = a.Ca.L[String(b)];
    if (!b)
        return !0;
    b = b.concat();
    for (var e=!0, f = 0; f < b.length; ++f) {
        var h = b[f];
        if (h&&!h.dc && h.Ld == c) {
            var k = h.Db, p = h.Nd || h.src;
            h.Md && a.Fd(h);
            e=!1 !== k.call(p, d) && e
        }
    }
    return e && 0 != d.Rf
};
N.prototype.bd = function(a, b, c, d) {
    return this.Ca.bd(String(a), b, c, d)
};
var ad = function(a) {
    l.setTimeout(function() {
        throw a;
    }, 0)
}, bd, cd = function() {
    var a = l.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
        var a = document.createElement("iframe");
        a.style.display = "none";
        a.src = "";
        document.documentElement.appendChild(a);
        var b = a.contentWindow, a = b.document;
        a.open();
        a.write("");
        a.close();
        var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*": b.location.protocol + "//" + b.location.host, a = t(function(a) {
            if (("*" ==
            d || a.origin == d) && a.data == c)
                this.port1.onmessage()
        }, this);
        b.addEventListener("message", a, !1);
        this.port1 = {};
        this.port2 = {
            postMessage: function() {
                b.postMessage(c, d)
            }
        }
    });
    if ("undefined" !== typeof a&&!ob("Trident")&&!ob("MSIE")) {
        var b = new a, c = {}, d = c;
        b.port1.onmessage = function() {
            if (m(c.next)) {
                c = c.next;
                var a = c.qg;
                c.qg = null;
                a()
            }
        };
        return function(a) {
            d.next = {
                qg: a
            };
            d = d.next;
            b.port2.postMessage(0)
        }
    }
    return "undefined" !== typeof document && "onreadystatechange"in document.createElement("script") ? function(a) {
        var b = document.createElement("script");
        b.onreadystatechange = function() {
            b.onreadystatechange = null;
            b.parentNode.removeChild(b);
            b = null;
            a();
            a = null
        };
        document.documentElement.appendChild(b)
    } : function(a) {
        l.setTimeout(a, 0)
    }
};
var id = function(a, b) {
    dd || ed();
    fd || (dd(), fd=!0);
    gd.push(new hd(a, b))
}, dd, ed = function() {
    if (l.Promise && l.Promise.resolve) {
        var a = l.Promise.resolve();
        dd = function() {
            a.then(jd)
        }
    } else 
        dd = function() {
            var a = jd;
            !s(l.setImmediate) || l.Window && l.Window.prototype.setImmediate == l.setImmediate ? (bd || (bd = cd()), bd(a)) : l.setImmediate(a)
        }
}, fd=!1, gd = [], jd = function() {
    for (; gd.length;) {
        var a = gd;
        gd = [];
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            try {
                c.Uh.call(c.scope)
            } catch (d) {
                ad(d)
            }
        }
    }
    fd=!1
}, hd = function(a, b) {
    this.Uh = a;
    this.scope =
    b
};
var kd = function(a) {
    a.prototype.then = a.prototype.then;
    a.prototype.$goog_Thenable=!0
}, ld = function(a) {
    if (!a)
        return !1;
    try {
        return !!a.$goog_Thenable
    } catch (b) {
        return !1
    }
};
var nd = function(a, b) {
    this.k = 0;
    this.Ra = void 0;
    this.na = this.A = null;
    this.Id = this.Ne=!1;
    try {
        var c = this;
        a.call(b, function(a) {
            md(c, 2, a)
        }, function(a) {
            md(c, 3, a)
        })
    } catch (d) {
        md(this, 3, d)
    }
};
nd.prototype.then = function(a, b, c) {
    return od(this, s(a) ? a : null, s(b) ? b : null, c)
};
kd(nd);
nd.prototype.cancel = function(a) {
    0 == this.k && id(function() {
        var b = new pd(a);
        qd(this, b)
    }, this)
};
var qd = function(a, b) {
    if (0 == a.k)
        if (a.A) {
            var c = a.A;
            if (c.na) {
                for (var d = 0, e =- 1, f = 0, h; h = c.na[f]; f++)
                    if (h = h.Qc)
                        if (d++, h == a && (e = f), 0 <= e && 1 < d)
                            break;
                            0 <= e && (0 == c.k && 1 == d ? qd(c, b) : (d = c.na.splice(e, 1)[0], rd(c, d, 3, b)))
                        }
        } else 
            md(a, 3, b)
    }, td = function(a, b) {
    a.na && a.na.length || 2 != a.k && 3 != a.k || sd(a);
    a.na || (a.na = []);
    a.na.push(b)
}, od = function(a, b, c, d) {
    var e = {
        Qc: null,
        bg: null,
        cg: null
    };
    e.Qc = new nd(function(a, h) {
        e.bg = b ? function(c) {
            try {
                var e = b.call(d, c);
                a(e)
            } catch (w) {
                h(w)
            }
        } : a;
        e.cg = c ? function(b) {
            try {
                var e = c.call(d, b);
                !m(e) &&
                b instanceof pd ? h(b) : a(e)
            } catch (w) {
                h(w)
            }
        } : h
    });
    e.Qc.A = a;
    td(a, e);
    return e.Qc
};
nd.prototype.Wf = function(a) {
    this.k = 0;
    md(this, 2, a)
};
nd.prototype.Xf = function(a) {
    this.k = 0;
    md(this, 3, a)
};
var md = function(a, b, c) {
    if (0 == a.k) {
        if (a == c)
            b = 3, c = new TypeError("Promise cannot resolve to itself");
        else {
            if (ld(c)) {
                a.k = 1;
                c.then(a.Wf, a.Xf, a);
                return 
            }
            if (ea(c))
                try {
                    var d = c.then;
                    if (s(d)) {
                        ud(a, c, d);
                        return 
                    }
            } catch (e) {
                b = 3, c = e
            }
        }
        a.Ra = c;
        a.k = b;
        sd(a);
        3 != b || c instanceof pd || vd(a, c)
    }
}, ud = function(a, b, c) {
    a.k = 1;
    var d=!1, e = function(b) {
        d || (d=!0, a.Wf(b))
    }, f = function(b) {
        d || (d=!0, a.Xf(b))
    };
    try {
        c.call(b, e, f)
    } catch (h) {
        f(h)
    }
}, sd = function(a) {
    a.Ne || (a.Ne=!0, id(a.Oh, a))
};
nd.prototype.Oh = function() {
    for (; this.na && this.na.length;) {
        var a = this.na;
        this.na = [];
        for (var b = 0; b < a.length; b++)
            rd(this, a[b], this.k, this.Ra)
    }
    this.Ne=!1
};
var rd = function(a, b, c, d) {
    if (2 == c)
        b.bg(d);
    else {
        if (b.Qc)
            for (; a && a.Id; a = a.A)
                a.Id=!1;
        b.cg(d)
    }
}, vd = function(a, b) {
    a.Id=!0;
    id(function() {
        a.Id && wd.call(null, b)
    })
}, wd = ad, pd = function(a) {
    pa.call(this, a)
};
x(pd, pa);
pd.prototype.name = "cancel";
var xd = function(a, b) {
    N.call(this);
    this.Eb = a || 1;
    this.Xb = b || l;
    this.Se = t(this.Re, this);
    this.Te = u()
};
x(xd, N);
g = xd.prototype;
g.enabled=!1;
g.P = null;
g.setInterval = function(a) {
    this.Eb = a;
    this.P && this.enabled ? (this.stop(), this.start()) : this.P && this.stop()
};
g.Re = function() {
    if (this.enabled) {
        var a = u() - this.Te;
        0 < a && a < .8 * this.Eb ? this.P = this.Xb.setTimeout(this.Se, this.Eb - a) : (this.P && (this.Xb.clearTimeout(this.P), this.P = null), this.dispatchEvent("tick"), this.enabled && (this.P = this.Xb.setTimeout(this.Se, this.Eb), this.Te = u()))
    }
};
g.start = function() {
    this.enabled=!0;
    this.P || (this.P = this.Xb.setTimeout(this.Se, this.Eb), this.Te = u())
};
g.stop = function() {
    this.enabled=!1;
    this.P && (this.Xb.clearTimeout(this.P), this.P = null)
};
g.i = function() {
    xd.j.i.call(this);
    this.stop();
    delete this.Xb
};
var yd = function(a, b, c) {
    if (s(a))
        c && (a = t(a, c));
    else if (a && "function" == typeof a.handleEvent)
        a = t(a.handleEvent, a);
    else 
        throw Error("Invalid listener argument");
    return 2147483647 < b?-1 : l.setTimeout(a, b || 0)
};
var zd = function(a, b, c) {
    J.call(this);
    this.ze = a;
    this.Eb = b || 0;
    this.Wb = c;
    this.xh = t(this.Dh, this)
};
x(zd, J);
g = zd.prototype;
g.da = 0;
g.i = function() {
    zd.j.i.call(this);
    this.stop();
    delete this.ze;
    delete this.Wb
};
g.start = function(a) {
    this.stop();
    this.da = yd(this.xh, m(a) ? a : this.Eb)
};
g.stop = function() {
    this.ra() && l.clearTimeout(this.da);
    this.da = 0
};
g.ra = function() {
    return 0 != this.da
};
g.Dh = function() {
    this.da = 0;
    this.ze && this.ze.call(this.Wb)
};
var Ad = function(a) {
    J.call(this);
    this.Wb = a;
    this.r = {}
};
x(Ad, J);
var Bd = [];
Ad.prototype.tb = function(a, b, c, d) {
    n(b) || (b && (Bd[0] = b.toString()), b = Bd);
    for (var e = 0; e < b.length; e++) {
        var f = L(a, b[e], c || this.handleEvent, d ||!1, this.Wb || this);
        if (!f)
            break;
        this.r[f.key] = f
    }
    return this
};
Ad.prototype.Rd = function(a, b, c, d) {
    return Cd(this, a, b, c, d)
};
var Cd = function(a, b, c, d, e, f) {
    if (n(c))
        for (var h = 0; h < c.length; h++)
            Cd(a, b, c[h], d, e, f);
    else {
        b = Tc(b, c, d || a.handleEvent, e, f || a.Wb || a);
        if (!b)
            return a;
        a.r[b.key] = b
    }
    return a
};
Ad.prototype.Vb = function(a, b, c, d, e) {
    if (n(b))
        for (var f = 0; f < b.length; f++)
            this.Vb(a, b[f], c, d, e);
    else if (a = Wc(a, b, c || this.handleEvent, d, e || this.Wb || this))
        M(a), delete this.r[a.key];
    return this
};
Ad.prototype.Ob = function() {
    ab(this.r, M);
    this.r = {}
};
Ad.prototype.i = function() {
    Ad.j.i.call(this);
    this.Ob()
};
Ad.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
};
var Dd = function() {
    J.call(this);
    this.je = {}
};
x(Dd, J);
Dd.prototype.Xd = null;
Dd.prototype.Rb = function(a) {
    a && a()
};
Dd.prototype.La = function() {
    return !0
};
var Ed = function(a, b) {
    a.je.expandable_ad = {
        ga: b,
        sf: !1
    }
}, Fd = function(a, b) {
    if (b && q(a))
        try {
            return dc(a)
    } catch (c) {
        return null
    } else if (!b&&!q(a))
        return gc(a);
    return a
};
Dd.prototype.i = function() {
    Dd.j.i.call(this);
    delete this.Xd;
    delete this.je;
    delete this.lf
};
var Gd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/, Jd = function(a) {
    if (Hd) {
        Hd=!1;
        var b = l.location;
        if (b) {
            var c = b.href;
            if (c && (c = Id(c)) && c != b.hostname)
                throw Hd=!0, Error();
        }
    }
    return a.match(Gd)
}, Hd = G, Id = function(a) {
    return (a = Jd(a)[3] || null) ? decodeURI(a) : a
}, Kd = function(a) {
    var b = Jd(a);
    a = b[1];
    var c = b[2], d = b[3], b = b[4], e = "";
    a && (e += a + ":");
    d && (e += "//", c && (e += c + "@"), e += d, b && (e += ":" + b));
    return e
}, Ld = function(a) {
    if (a[1]) {
        var b = a[0], c = b.indexOf("#");
        0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
        c = b.indexOf("?");
        0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0)
    }
    return a.join("")
}, Md = function(a, b, c) {
    if (n(b))
        for (var d = 0; d < b.length; d++)
            Md(a, String(b[d]), c);
    else 
        null != b && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
}, Nd = function(a, b, c, d) {
    for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
        var f = a.charCodeAt(b - 1);
        if (38 == f || 63 == f)
            if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f)
                return b;
        b += e + 1
    }
    return - 1
}, Od = /#|$/, Pd = /[?&]($|#)/;
var Qd = function(a, b) {
    var c;
    if (a instanceof Qd)
        this.ma = m(b) ? b : a.ma, Rd(this, a.Ua), c = a.Cb, O(this), this.Cb = c, c = a.Ea, O(this), this.Ea = c, Sd(this, a.lb), c = a.Fa, O(this), this.Fa = c, Td(this, a.Wa.clone()), c = a.Bb, O(this), this.Bb = c;
    else if (a && (c = Jd(String(a)))) {
        this.ma=!!b;
        Rd(this, c[1] || "", !0);
        var d = c[2] || "";
        O(this);
        this.Cb = Ud(d);
        d = c[3] || "";
        O(this);
        this.Ea = Ud(d, !0);
        Sd(this, c[4]);
        d = c[5] || "";
        O(this);
        this.Fa = Ud(d, !0);
        Td(this, c[6] || "", !0);
        c = c[7] || "";
        O(this);
        this.Bb = Ud(c)
    } else 
        this.ma=!!b, this.Wa = new Vd(null, 0, this.ma)
};
g = Qd.prototype;
g.Ua = "";
g.Cb = "";
g.Ea = "";
g.lb = null;
g.Fa = "";
g.Bb = "";
g.Wh=!1;
g.ma=!1;
g.toString = function() {
    var a = [], b = this.Ua;
    b && a.push(Wd(b, Xd, !0), ":");
    if (b = this.Ea) {
        a.push("//");
        var c = this.Cb;
        c && a.push(Wd(c, Xd, !0), "@");
        a.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
        b = this.lb;
        null != b && a.push(":", String(b))
    }
    if (b = this.Fa)
        this.Ea && "/" != b.charAt(0) && a.push("/"), a.push(Wd(b, "/" == b.charAt(0) ? Yd : Zd, !0));
    (b = this.Wa.toString()) && a.push("?", b);
    (b = this.Bb) && a.push("#", Wd(b, $d));
    return a.join("")
};
g.resolve = function(a) {
    var b = this.clone(), c=!!a.Ua;
    c ? Rd(b, a.Ua) : c=!!a.Cb;
    if (c) {
        var d = a.Cb;
        O(b);
        b.Cb = d
    } else 
        c=!!a.Ea;
    c ? (d = a.Ea, O(b), b.Ea = d) : c = null != a.lb;
    d = a.Fa;
    if (c)
        Sd(b, a.lb);
    else if (c=!!a.Fa) {
        if ("/" != d.charAt(0))
            if (this.Ea&&!this.Fa)
                d = "/" + d;
            else {
                var e = b.Fa.lastIndexOf("/");
                - 1 != e && (d = b.Fa.substr(0, e + 1) + d)
            }
        e = d;
        if (".." == e || "." == e)
            d = "";
        else if ( - 1 != e.indexOf("./")||-1 != e.indexOf("/.")) {
            for (var d = 0 == e.lastIndexOf("/", 0), e = e.split("/"), f = [], h = 0; h < e.length;) {
                var k = e[h++];
                "." == k ? d && h == e.length && f.push("") :
                ".." == k ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && h == e.length && f.push("")) : (f.push(k), d=!0)
            }
            d = f.join("/")
        } else 
            d = e
    }
    c ? (O(b), b.Fa = d) : c = "" !== a.Wa.toString();
    c ? Td(b, Ud(a.Wa.toString())) : c=!!a.Bb;
    c && (a = a.Bb, O(b), b.Bb = a);
    return b
};
g.clone = function() {
    return new Qd(this)
};
var Rd = function(a, b, c) {
    O(a);
    a.Ua = c ? Ud(b, !0) : b;
    a.Ua && (a.Ua = a.Ua.replace(/:$/, ""))
}, Sd = function(a, b) {
    O(a);
    if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b)
            throw Error("Bad port number " + b);
        a.lb = b
    } else 
        a.lb = null
}, Td = function(a, b, c) {
    O(a);
    b instanceof Vd ? (a.Wa = b, a.Wa.Ye(a.ma)) : (c || (b = Wd(b, ae)), a.Wa = new Vd(b, 0, a.ma))
}, O = function(a) {
    if (a.Wh)
        throw Error("Tried to modify a read-only Uri");
};
Qd.prototype.Ye = function(a) {
    this.ma = a;
    this.Wa && this.Wa.Ye(a);
    return this
};
var be = function(a) {
    return a instanceof Qd ? a.clone() : new Qd(a, void 0)
}, Ud = function(a, b) {
    return a ? b ? decodeURI(a) : decodeURIComponent(a) : ""
}, Wd = function(a, b, c) {
    return q(a) ? (a = encodeURI(a).replace(b, ce), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
}, ce = function(a) {
    a = a.charCodeAt(0);
    return "%" + (a>>4 & 15).toString(16) + (a & 15).toString(16)
}, Xd = /[#\/\?@]/g, Zd = /[\#\?:]/g, Yd = /[\#\?]/g, ae = /[\#\?@]/g, $d = /#/g, Vd = function(a, b, c) {
    this.fa = a || null;
    this.ma=!!c
}, ee = function(a) {
    if (!a.s && (a.s = new qc, a.F = 0, a.fa))
        for (var b =
        a.fa.split("&"), c = 0; c < b.length; c++) {
            var d = b[c].indexOf("="), e = null, f = null;
            0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
            e = decodeURIComponent(e.replace(/\+/g, " "));
            e = de(a, e);
            a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
        }
    };
g = Vd.prototype;
g.s = null;
g.F = null;
g.add = function(a, b) {
    ee(this);
    this.fa = null;
    a = de(this, a);
    var c = this.s.get(a);
    c || this.s.set(a, c = []);
    c.push(b);
    this.F++;
    return this
};
g.remove = function(a) {
    ee(this);
    a = de(this, a);
    return this.s.Uc(a) ? (this.fa = null, this.F -= this.s.get(a).length, this.s.remove(a)) : !1
};
g.clear = function() {
    this.s = this.fa = null;
    this.F = 0
};
g.Uc = function(a) {
    ee(this);
    a = de(this, a);
    return this.s.Uc(a)
};
g.wb = function() {
    ee(this);
    for (var a = this.s.Va(), b = this.s.wb(), c = [], d = 0; d < b.length; d++)
        for (var e = a[d], f = 0; f < e.length; f++)
            c.push(b[d]);
    return c
};
g.Va = function(a) {
    ee(this);
    var b = [];
    if (q(a))
        this.Uc(a) && (b = Xa(b, this.s.get(de(this, a))));
    else {
        a = this.s.Va();
        for (var c = 0; c < a.length; c++)
            b = Xa(b, a[c])
    }
    return b
};
g.set = function(a, b) {
    ee(this);
    this.fa = null;
    a = de(this, a);
    this.Uc(a) && (this.F -= this.s.get(a).length);
    this.s.set(a, [b]);
    this.F++;
    return this
};
g.get = function(a, b) {
    var c = a ? this.Va(a): [];
    return 0 < c.length ? String(c[0]) : b
};
g.toString = function() {
    if (this.fa)
        return this.fa;
    if (!this.s)
        return "";
    for (var a = [], b = this.s.wb(), c = 0; c < b.length; c++)
        for (var d = b[c], e = encodeURIComponent(String(d)), d = this.Va(d), f = 0; f < d.length; f++) {
            var h = e;
            "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
            a.push(h)
        }
    return this.fa = a.join("&")
};
g.clone = function() {
    var a = new Vd;
    a.fa = this.fa;
    this.s && (a.s = this.s.clone(), a.F = this.F);
    return a
};
var de = function(a, b) {
    var c = String(b);
    a.ma && (c = c.toLowerCase());
    return c
};
Vd.prototype.Ye = function(a) {
    a&&!this.ma && (ee(this), this.fa = null, this.s.forEach(function(a, c) {
        var d = c.toLowerCase();
        c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.fa = null, this.s.set(de(this, d), Ya(a)), this.F += a.length))
    }, this));
    this.ma = a
};
Vd.prototype.extend = function(a) {
    for (var b = 0; b < arguments.length; b++)
        uc(arguments[b], function(a, b) {
            this.add(b, a)
        }, this)
}; /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var P = function(a, b) {
    this.Gd = [];
    this.Nf = a;
    this.Ef = b || null;
    this.Nc = this.qa=!1;
    this.Ra = void 0;
    this.Oe = this.Sg = this.Le=!1;
    this.Hd = 0;
    this.A = null;
    this.Cd = 0
};
P.prototype.cancel = function(a) {
    if (this.qa)
        this.Ra instanceof P && this.Ra.cancel();
    else {
        if (this.A) {
            var b = this.A;
            delete this.A;
            a ? b.cancel(a) : (b.Cd--, 0 >= b.Cd && b.cancel())
        }
        this.Nf ? this.Nf.call(this.Ef, this) : this.Oe=!0;
        this.qa || this.Qf(new fe)
    }
};
P.prototype.Mf = function(a, b) {
    this.Le=!1;
    ge(this, a, b)
};
var ge = function(a, b, c) {
    a.qa=!0;
    a.Ra = c;
    a.Nc=!b;
    he(a)
}, je = function(a) {
    if (a.qa) {
        if (!a.Oe)
            throw new ie;
        a.Oe=!1
    }
};
P.prototype.ga = function(a) {
    je(this);
    ge(this, !0, a)
};
P.prototype.Qf = function(a) {
    je(this);
    ge(this, !1, a)
};
var le = function(a, b, c) {
    ke(a, b, null, c)
}, ke = function(a, b, c, d) {
    a.Gd.push([b, c, d]);
    a.qa && he(a)
};
P.prototype.then = function(a, b, c) {
    var d, e, f = new nd(function(a, b) {
        d = a;
        e = b
    });
    ke(this, d, function(a) {
        a instanceof fe ? f.cancel() : e(a)
    });
    return f.then(a, b, c)
};
kd(P);
var me = function(a, b) {
    b instanceof P ? le(a, t(b.Th, b)) : le(a, function() {
        return b
    })
};
P.prototype.Th = function(a) {
    var b = new P;
    ke(this, b.ga, b.Qf, b);
    a && (b.A = this, this.Cd++);
    return b
};
var ne = function(a) {
    return Ua(a.Gd, function(a) {
        return s(a[1])
    })
}, he = function(a) {
    if (a.Hd && a.qa && ne(a)) {
        var b = a.Hd, c = oe[b];
        c && (l.clearTimeout(c.da), delete oe[b]);
        a.Hd = 0
    }
    a.A && (a.A.Cd--, delete a.A);
    for (var b = a.Ra, d = c=!1; a.Gd.length&&!a.Le;) {
        var e = a.Gd.shift(), f = e[0], h = e[1], e = e[2];
        if (f = a.Nc ? h : f)
            try {
                var k = f.call(e || a.Ef, b);
                m(k) && (a.Nc = a.Nc && (k == b || k instanceof Error), a.Ra = b = k);
                ld(b) && (d=!0, a.Le=!0)
            } catch (p) {
            b = p, a.Nc=!0, ne(a) || (c=!0)
        }
    }
    a.Ra = b;
    d && (k = t(a.Mf, a, !0), d = t(a.Mf, a, !1), b instanceof P ? (ke(b, k, d), b.Sg =
    !0) : b.then(k, d));
    c && (b = new pe(b), oe[b.da] = b, a.Hd = b.da)
}, ie = function() {
    pa.call(this)
};
x(ie, pa);
ie.prototype.message = "Deferred has already fired";
ie.prototype.name = "AlreadyCalledError";
var fe = function() {
    pa.call(this)
};
x(fe, pa);
fe.prototype.message = "Deferred was canceled";
fe.prototype.name = "CanceledError";
var pe = function(a) {
    this.da = l.setTimeout(t(this.Hh, this), 0);
    this.Eh = a
};
pe.prototype.Hh = function() {
    delete oe[this.da];
    throw this.Eh;
};
var oe = {};
var qe = {
    1: "NativeMessagingTransport",
    2: "FrameElementMethodTransport",
    3: "IframeRelayTransport",
    4: "IframePollingTransport",
    5: "FlashTransport",
    6: "NixTransport",
    7: "DirectTransport"
}, re = ["pu", "lru", "pru", "lpu", "ppu"], se = {}, ue = function() {
    for (var a = 10, b = te, c = b.length, d = ""; 0 < a--;)
        d += b.charAt(Math.floor(Math.random() * c));
    return d
}, te = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var ve = function(a) {
    J.call(this);
    this.Pc = a || Gb()
};
x(ve, J);
ve.prototype.Sc = 0;
ve.prototype.getType = function() {
    return this.Sc
};
ve.prototype.$a = function() {
    return this.Pc.$a()
};
ve.prototype.getName = function() {
    return qe[String(this.Sc)] || ""
};
var we = kb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
var ye = function() {
    this.bf = "";
    this.Nh = xe
};
ye.prototype.jc=!0;
ye.prototype.ic = function() {
    return this.bf
};
ye.prototype.toString = function() {
    return "Const{" + this.bf + "}"
};
var ze = function(a) {
    return a instanceof ye && a.constructor === ye && a.Nh === xe ? a.bf : "type_error:Const"
}, xe = {};
var Be = function() {
    this.Ve = "";
    this.th = Ae
};
Be.prototype.jc=!0;
var Ae = {};
Be.prototype.ic = function() {
    return this.Ve
};
var Ce = function(a) {
    var b = new Be;
    b.Ve = a;
    return b
}, De = Ce(""), Ee = /^[-.%_!# a-zA-Z0-9]+$/;
var Ie = function() {
    this.gc = "";
    this.uh = Fe
};
Ie.prototype.jc=!0;
Ie.prototype.ic = function() {
    return this.gc
};
Ie.prototype.Ze=!0;
Ie.prototype.Yc = function() {
    return 1
};
var Fe = {};
var Ke = function() {
    this.$f = "";
    this.wh = Je
};
Ke.prototype.jc=!0;
Ke.prototype.ic = function() {
    return this.$f
};
Ke.prototype.Ze=!0;
Ke.prototype.Yc = function() {
    return 1
};
var Je = {};
var Me = function() {
    this.gc = "";
    this.Kh = Le;
    this.ng = null
};
Me.prototype.Ze=!0;
Me.prototype.Yc = function() {
    return this.ng
};
Me.prototype.jc=!0;
Me.prototype.ic = function() {
    return this.gc
};
var Ne = function(a) {
    return a instanceof Me && a.constructor === Me && a.Kh === Le ? a.gc : "type_error:SafeHtml"
}, Oe = /^[a-zA-Z0-9-]+$/, Pe = kb("action", "cite", "data", "formaction", "href", "manifest", "poster", "src"), Qe = kb("link", "script", "style"), Se = function(a) {
    var b = 0, c = "", d = function(a) {
        if (n(a))
            B(a, d);
        else {
            if (!(a instanceof Me)) {
                var f = null;
                a.Ze && (f = a.Yc());
                a = Re(za(a.jc ? a.ic() : String(a)), f)
            }
            c += Ne(a);
            a = a.Yc();
            0 == b ? b = a : 0 != a && b != a && (b = null)
        }
    };
    B(arguments, d);
    return Re(c, b)
}, Le = {}, Re = function(a, b) {
    var c = new Me;
    c.gc = a;
    c.ng =
    b;
    return c
};
Re("", 0);
var Ue = function(a, b, c, d, e) {
    ve.call(this, c);
    this.m = a;
    this.Mb = e || 2;
    this.oe = b || "*";
    this.le = new Ad(this);
    this.tc = new xd(100, this.$a());
    this.se=!!d;
    this.ab = new P;
    this.hb = new P;
    this.jb = new P;
    this.Kg = ue();
    this.ld = null;
    this.se ? 1 == Te(this.m) ? me(this.jb, this.ab) : me(this.jb, this.hb) : (me(this.jb, this.ab), 2 == this.Mb && me(this.jb, this.hb));
    le(this.jb, this.Bf, this);
    this.jb.ga(!0);
    this.le.tb(this.tc, "tick", this.zf)
};
x(Ue, ve);
Ue.prototype.ca = null;
Ue.prototype.xf=!1;
Ue.prototype.Sc = 1;
var Ve = {};
Ue.prototype.Bc = 0;
var Xe = function(a) {
    var b = a.pa().data;
    if (!q(b))
        return !1;
    var c = b.indexOf("|"), d = b.indexOf(":");
    if ( - 1 == c||-1 == d)
        return !1;
    var e = b.substring(0, c), c = b.substring(c + 1, d), b = b.substring(d + 1);
    if (d = se[e])
        return d.qe(c, b, a.pa().origin), !0;
    var d = We(b)[0], f;
    for (f in se)
        if (a = se[f], 1 == Te(a)&&!a.La() && "tp" == c && ("SETUP" == d || "SETUP_NTPV2" == d))
            return f = a, delete se[f.name], f.name = e, se[e] = f, a.qe(c, b), !0;
    return !1
}, Ye = function(a) {
    if (2 == a.Mb && (null == a.ca || 2 == a.ca)) {
        var b;
        b = "SETUP_NTPV2," + a.Kg;
        a.send("tp", b)
    }
    null != a.ca && 1 !=
    a.ca || a.send("tp", "SETUP")
}, Ze = function(a, b) {
    if (2 != a.Mb || null != a.ca && 2 != a.ca || 2 != b) {
        if (null != a.ca && 1 != a.ca || 1 != b)
            return;
        a.send("tp", "SETUP_ACK")
    } else 
        a.send("tp", "SETUP_ACK_NTPV2");
    a.hb.qa || a.hb.ga(!0)
}, $e = function(a, b) {
    b > a.ca && (a.ca = b);
    1 == a.ca && (a.hb.qa || a.se || a.hb.ga(!0), a.ld = null)
};
g = Ue.prototype;
g.Rb = function() {
    var a = this.$a(), b = ia(a), c = Ve[b];
    r(c) || (c = 0);
    0 == c && L(a.postMessage ? a : a.document, "message", Xe, !1, Ue);
    Ve[b] = c + 1;
    this.xf=!0;
    this.zf()
};
g.zf = function() {
    var a = 0 == Te(this.m);
    this.se && a || this.m.La() || this.Ka ? this.tc.stop() : (this.tc.start(), Ye(this))
};
g.send = function(a, b) {
    var c = this.m.ib;
    c && (this.send = function(a, b) {
        var f = this, h = this.m.name;
        this.Bc = yd(function() {
            f.Bc = 0;
            try {
                var k = c.postMessage ? c: c.document;
                k.postMessage && k.postMessage(h + "|" + a + ":" + b, f.oe)
            } catch (p) {}
        }, 0)
    }, this.send(a, b))
};
g.Bf = function() {
    this.m.Uf(1 == this.Mb || 1 == this.ca ? 200 : void 0)
};
g.i = function() {
    if (this.xf) {
        var a = this.$a(), b = ia(a), c = Ve[b];
        Ve[b] = c - 1;
        1 == c && Uc(a.postMessage ? a : a.document, "message", Xe, !1, Ue)
    }
    this.Bc && (l.clearTimeout(this.Bc), this.Bc = 0);
    K(this.le);
    delete this.le;
    K(this.tc);
    delete this.tc;
    this.ab.cancel();
    delete this.ab;
    this.hb.cancel();
    delete this.hb;
    this.jb.cancel();
    delete this.jb;
    delete this.send;
    Ue.j.i.call(this)
};
var We = function(a) {
    a = a.split(",");
    a[1] = a[1] || null;
    return a
};
var bf = function(a, b) {
    Dd.call(this);
    for (var c = 0, d; d = re[c]; c++)
        if (d in a&&!/^https?:\/\//.test(a[d]))
            throw Error("URI " + a[d] + " is invalid for field " + d);
    this.S = a;
    this.name = this.S.cn || ue();
    this.Pc = b || Gb();
    this.nd = [];
    this.me = new Ad(this);
    a.lpu = a.lpu || Kd(this.Pc.$a().location.href) + "/robots.txt";
    a.ppu = a.ppu || Kd(a.pu || "") + "/robots.txt";
    se[this.name] = this;
    Wc(window, "unload", af) || Tc(window, "unload", af)
};
x(bf, Dd);
var cf = /^%*tp$/, df = /^%+tp$/;
g = bf.prototype;
g.ob = null;
g.vb = null;
g.G = null;
g.k = 1;
g.La = function() {
    return 2 == this.k
};
g.ib = null;
g.vd = null;
g.getConfig = function() {
    return this.S
};
g.Rb = function(a) {
    this.Fe = a || ba;
    3 == this.k && (this.k = 1);
    this.vb ? le(this.vb, this.Zf) : this.Zf()
};
g.Zf = function() {
    this.vb = null;
    this.S.ifrid && (this.vd = this.Pc.$(this.S.ifrid));
    if (this.vd) {
        var a = this.vd.contentWindow;
        a || (a = window.frames[this.S.ifrid]);
        this.ib = a
    }
    if (!this.ib) {
        if (window == window.top)
            throw Error("CrossPageChannel: Can't connect, peer window-object not set.");
        this.ib = window.parent
    }
    if (!this.G) {
        this.S.tp || (this.S.tp = s(document.postMessage) || s(window.postMessage) || E && window.postMessage ? 1 : F ? 2 : E && this.S.pru ? 3 : 4);
        switch (this.S.tp) {
        case 1:
            this.G = new Ue(this, this.S.ph, this.Pc, !!this.S.osh, this.S.nativeProtocolVersion ||
            2);
            break;
        case 6:
            this.G = null;
            break;
        case 2:
            this.G = null;
            break;
        case 3:
            this.G = null;
            break;
        case 4:
            this.G = null
        }
        if (!this.G)
            throw Error("CrossPageChannel: No suitable transport found!");
    }
    for (this.G.Rb(); 0 < this.nd.length;)
        this.nd.shift()()
};
g.close = function() {
    this.vb && (this.vb.cancel(), this.vb = null);
    this.nd.length = 0;
    this.me.Ob();
    this.k = 3;
    K(this.G);
    this.Fe = this.G = null;
    K(this.ob);
    this.ob = null
};
g.Uf = function(a) {
    this.La() || this.ob && this.ob.ra() || (this.k = 2, K(this.ob), m(a) ? (this.ob = new zd(this.Fe, a), this.ob.start()) : (this.ob = null, this.Fe()))
};
g.Bf = bf.prototype.Uf;
g.send = function(a, b) {
    if (this.La()) {
        var c;
        try {
            c=!!this.ib&&!Boolean(this.ib.closed)
        } catch (d) {
            c=!1
        }
        c ? (ea(b) && (b = gc(b)), this.G.send(ef(a), b)) : this.close()
    }
};
g.qe = function(a, b, c) {
    if (this.vb)
        this.nd.push(t(this.qe, this, a, b, c));
    else {
        var d = this.S.ph;
        if ((/^[\s\xa0]*$/.test(null == c ? "" : String(c)) || /^[\s\xa0]*$/.test(null == d ? "" : String(d)) || c == this.S.ph)&&!this.Ka && 3 != this.k)
            if (a && "tp" != a)
                this.La() && (a = a.replace(/%[0-9a-f]{2}/gi, decodeURIComponent), a = df.test(a) ? a.substring(1) : a, a = (c = this.je[a]) ? c : this.lf ? {
                    ga: ma(this.lf, a),
                    sf: ea(b)
                } : null) && (b = Fd(b, a.sf), null != b && a.ga(b));
            else 
                switch (a = this.G, c = We(b), b = c[1], c[0]) {
                case "SETUP_ACK":
                    $e(a, 1);
                    a.ab.qa || a.ab.ga(!0);
                    break;
                case "SETUP_ACK_NTPV2":
                    2 == a.Mb && ($e(a, 2), a.ab.qa || a.ab.ga(!0));
                    break;
                case "SETUP":
                    $e(a, 1);
                    Ze(a, 1);
                    break;
                case "SETUP_NTPV2":
                    2 == a.Mb && (c = a.ca, $e(a, 2), Ze(a, 2), 1 != c && null == a.ld || a.ld == b || Ye(a), a.ld = b)
                }
            }
};
var ef = function(a) {
    cf.test(a) && (a = "%" + a);
    return a.replace(/[%:|]/g, encodeURIComponent)
}, Te = function(a) {
    var b = a.S.role;
    return r(b) ? b : window.parent == a.ib ? 1 : 0
};
bf.prototype.i = function() {
    this.close();
    this.vd = this.ib = null;
    delete se[this.name];
    K(this.me);
    delete this.me;
    bf.j.i.call(this)
};
var af = function() {
    for (var a in se)
        K(se[a])
};
var ff = function() {
    return G ? "Webkit" : F ? "Moz" : E ? "ms" : pb ? "O" : null
}, gf = function() {
    return G ? "-webkit" : F ? "-moz" : E ? "-ms" : pb ? "-o" : null
};
var hf = function(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
};
g = hf.prototype;
g.clone = function() {
    return new hf(this.top, this.right, this.bottom, this.left)
};
g.contains = function(a) {
    return this && a ? a instanceof hf ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
g.expand = function(a, b, c, d) {
    ea(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += b, this.bottom += c, this.left -= d);
    return this
};
g.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
g.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
g.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
g.translate = function(a, b) {
    a instanceof C ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, r(b) && (this.top += b, this.bottom += b));
    return this
};
g.scale = function(a, b) {
    var c = r(b) ? b: a;
    this.left*=a;
    this.right*=a;
    this.top*=c;
    this.bottom*=c;
    return this
};
var Q = function(a, b, c) {
    if (q(b))(b = jf(a, b)) && (a.style[b] = c);
    else 
        for (var d in b) {
            c = a;
            var e = b[d], f = jf(c, d);
            f && (c.style[f] = e)
        }
}, jf = function(a, b) {
    var c = Da(b);
    if (void 0 === a.style[c]) {
        var d = ff() + Ea(c);
        if (void 0 !== a.style[d])
            return d
    }
    return c
}, kf = function(a, b) {
    var c = Fb(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
}, lf = function(a, b) {
    return kf(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}, mf = function(a) {
    return lf(a,
    "position")
}, of = function(a, b, c) {
    var d, e = F && (rb || tb) && H("1.9");
    b instanceof C ? (d = b.x, b = b.y) : (d = b, b = c);
    a.style.left = nf(d, e);
    a.style.top = nf(b, e)
}, pf = function(a) {
    return new C(a.offsetLeft, a.offsetTop)
}, qf = function(a) {
    a = a ? Fb(a) : document;
    var b;
    (b=!E || E && 9 <= Ab) || (b = Gb(a), b = Jb(b.V));
    return b ? a.documentElement : a.body
}, rf = function(a) {
    var b;
    try {
        b = a.getBoundingClientRect()
    } catch (c) {
        return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    }
    E && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft,
    b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}, sf = function(a) {
    if (E&&!(E && 8 <= Ab))
        return a.offsetParent;
    var b = Fb(a), c = lf(a, "position"), d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (c = lf(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
            return a;
    return null
}, uf = function(a) {
    if (1 == a.nodeType) {
        var b;
        if (a.getBoundingClientRect)
            b = rf(a), b = new C(b.left,
            b.top);
        else {
            b = Ub(Gb(a));
            var c, d = Fb(a), e = lf(a, "position"), f = F && d.getBoxObjectFor&&!a.getBoundingClientRect && "absolute" == e && (c = d.getBoxObjectFor(a)) && (0 > c.screenX || 0 > c.screenY), h = new C(0, 0), k = qf(d);
            if (a != k)
                if (a.getBoundingClientRect)
                    c = rf(a), d = Ub(Gb(d)), h.x = c.left + d.x, h.y = c.top + d.y;
                else if (d.getBoxObjectFor&&!f)
                    c = d.getBoxObjectFor(a), d = d.getBoxObjectFor(k), h.x = c.screenX - d.screenX, h.y = c.screenY - d.screenY;
                else {
                    c = a;
                    do {
                        h.x += c.offsetLeft;
                        h.y += c.offsetTop;
                        c != a && (h.x += c.clientLeft || 0, h.y += c.clientTop || 0);
                        if (G &&
                        "fixed" == mf(c)) {
                            h.x += d.body.scrollLeft;
                            h.y += d.body.scrollTop;
                            break
                        }
                        c = c.offsetParent
                    }
                    while (c && c != a);
                    if (pb || G && "absolute" == e)
                        h.y -= d.body.offsetTop;
                        for (c = a; (c = sf(c)) && c != d.body && c != k;)
                            h.x -= c.scrollLeft, pb && "TR" == c.tagName || (h.y -= c.scrollTop)
                        }
            b = new C(h.x - b.x, h.y - b.y)
        }
        if (F&&!H(12)) {
            i:
            {
                h = Da("transform");
                if (void 0 === a.style[h] && (h = ff() + Ea(h), void 0 !== a.style[h])) {
                    h = gf() + "-transform";
                    break i
                }
                h = "transform"
            }
            a = (a = lf(a, h) || lf(a, "transform")) ? (a = a.match(tf)) ? new C(parseFloat(a[1]), parseFloat(a[2])) : new C(0, 0) :
            new C(0, 0);
            a = new C(b.x + a.x, b.y + a.y)
        } else 
            a = b;
        return a
    }
    b = s(a.pa);
    h = a;
    a.targetTouches && a.targetTouches.length ? h = a.targetTouches[0] : b && a.pa().targetTouches && a.pa().targetTouches.length && (h = a.pa().targetTouches[0]);
    return new C(h.clientX, h.clientY)
}, vf = function(a, b, c) {
    if (b instanceof D)
        c = b.height, b = b.width;
    else if (void 0 == c)
        throw Error("missing height argument");
    a.style.width = nf(b, !0);
    a.style.height = nf(c, !0)
}, nf = function(a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a
}, xf = function(a) {
    var b =
    wf;
    if ("none" != lf(a, "display"))
        return b(a);
    var c = a.style, d = c.display, e = c.visibility, f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a
}, wf = function(a) {
    var b = a.offsetWidth, c = a.offsetHeight, d = G&&!b&&!c;
    return m(b)&&!d ||!a.getBoundingClientRect ? new D(b, c) : (a = rf(a), new D(a.right - a.left, a.bottom - a.top))
}, yf = function(a, b) {
    var c = a.style;
    "opacity"in c ? c.opacity = b : "MozOpacity"in c ? c.MozOpacity = b : "filter"in c && (c.filter = "" === b ?
    "" : "alpha(opacity=" + 100 * b + ")")
}, R = function(a, b) {
    a.style.display = b ? "" : "none"
}, zf = function(a, b, c, d) {
    if (/^\d+px?$/.test(b))
        return parseInt(b, 10);
    var e = a.style[c], f = a.runtimeStyle[c];
    a.runtimeStyle[c] = a.currentStyle[c];
    a.style[c] = b;
    b = a.style[d];
    a.style[c] = e;
    a.runtimeStyle[c] = f;
    return b
}, Af = function(a, b) {
    var c = a.currentStyle ? a.currentStyle[b]: null;
    return c ? zf(a, c, "left", "pixelLeft") : 0
}, Bf = {
    thin: 2,
    medium: 4,
    thick: 6
}, Cf = function(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))
        return 0;
    var c =
    a.currentStyle ? a.currentStyle[b + "Width"]: null;
    return c in Bf ? Bf[c] : zf(a, c, "left", "pixelLeft")
}, tf = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
var Df = function() {
    this.Td = []
}, S = function(a) {
    return a + "px"
}, Ef = function(a) {
    setTimeout(function() {
        Q(a, {
            transition: "opacity 5000ms 3000ms",
            opacity: 0
        })
    }, 0)
}, Gf = function(a, b, c, d, e) {
    a.Td.push(new Ff(b, c, d, e))
}, Hf = function(a, b, c, d, e) {
    Gf(a, b, c, S(d), e)
}, If = function(a, b) {
    Gf(a, b, "zIndex", 999999)
}, Jf = function(a) {
    for (var b = a.Td.length - 1; 0 <= b; b--) {
        var c = a.Td[b];
        c.ad ? (c.Xe.style.removeProperty(c.Ya), c.Xe.style.setProperty(c.Ya, c.gg, c.yh)) : c.Xe.style[c.Ya] = c.gg
    }
    a.Td.length = 0
}, Ff = function(a, b, c, d) {
    this.Xe = a;
    this.Ya =
    (this.ad = m(d) && a.style && a.style.getPropertyPriority) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
    this.gg = this.ad ? a.style.getPropertyValue(this.Ya) : a.style[this.Ya];
    this.yh = this.ad ? a.style.getPropertyPriority(this.Ya) : null;
    this.ad ? (a.style.removeProperty(this.Ya), a.style.setProperty(this.Ya, c, d)) : a.style[this.Ya] = c
};
var Kf = {
    NORMAL: 0,
    LIGHTBOX: 1,
    EXPANSION_MODES: 2
}, Lf = function(a) {
    return (a || y.location.protocol + "//" + y.location.host) + "/robots.txt"
}, Mf = function(a, b) {
    var c = a.match("[?&#]" + b + "=([^&#]*)");
    return c ? decodeURIComponent(c[1]) : void 0
}, U = function() {
    var a = T().MOBILE_BROWSER_CLASS;
    if (null != a && 0 <= a)
        return 3 != a;
    a = z.navigator.userAgent;
    return qb || ub || F && (/Mobile/.test(a) || /Tablet/.test(a)) || E && /IEMobile/.test(a)
}, T = function() {
    return z.CREATIVE_TOOLSET_PARAMS || {}
}, Nf = function() {
    var a = T();
    return {
        SAMPLE_VIEWPORT_SIZES: a.SAMPLE_VIEWPORT_SIZES,
        JS_EXPERIMENT_LABELS: a.JS_EXPERIMENT_LABELS,
        MOBILE_BROWSER_CLASS: a.MOBILE_BROWSER_CLASS
    }
}, Of = function(a, b, c) {
    var d = Na(y.URL);
    c = c ? encodeURIComponent : function(a) {
        return a
    };
    return a + ( - 1 == a.indexOf(c("?")) ? c("?") : c("&")) + c([d ? "google_debug&": "", "xpc=", b, "&p=", encodeURIComponent(y.location.protocol), "//", encodeURIComponent(y.location.host)].join(""))
};
var V = function(a) {
    var b = T().JS_EXPERIMENT_LABELS;
    return q(b) ? Va(b.split(","), a) : !1
};
var Qf = function(a, b) {
    Pf("ct-error", a, b, void 0)
}, Pf = function(a, b, c, d) {
    c = fb(c || {});
    c.eventType = b;
    b = T();
    m(b.EXPANSION_CLICK_INFO) && (c.ai = b.EXPANSION_CLICK_INFO);
    Zb(a, c, d || .01)
};
var Rf, Sf, Tf, Uf, Vf, Wf, Xf;
Xf = Wf = Vf = Uf = Tf = Sf = Rf=!1;
var Yf = lb;
Yf && ( - 1 != Yf.indexOf("Firefox") ? Rf=!0 : - 1 != Yf.indexOf("Camino") ? Sf=!0 : - 1 != Yf.indexOf("iPad") ? Uf=!0 : - 1 != Yf.indexOf("iPhone")||-1 != Yf.indexOf("iPod") ? Tf=!0 : - 1 != Yf.indexOf("Chrome") ? Wf=!0 : - 1 != Yf.indexOf("Android") ? Vf=!0 : - 1 != Yf.indexOf("Safari") && (Xf=!0));
var Zf = Rf, $f = Sf, ag = Tf, bg = Uf, cg = Vf, dg = Wf, eg = Xf;
var fg = [], gg = function() {
    return 0 < (z.studioV2 && z.studioV2.creativeCount)
}, hg = function(a) {
    try {
        return !!a.contentWindow.studio&&!!a.contentWindow.studio.sdk
    } catch (b) {
        return !1
    }
}, ig = function() {
    if (!gg())
        return !1;
    B(y.getElementsByTagName("iframe"), function(a) {
        if (hg(a))
            return !1
    });
    return !0
}, jg = function(a, b, c) {
    gg() && B(y.getElementsByTagName("iframe"), function(d) {
        hg(d) ? fg.push(L(d.contentDocument.body, a, b, c, void 0)) : fg.push(L(d, "load", function() {
            hg(d) && fg.push(L(d.contentDocument.body, a, b, c, void 0))
        }))
    })
};
var kg = function() {
    return m(y.body.onmouseenter) && m(y.body.onmouseleave)&&!eg
}, lg = [], mg = "touchstart touchend click mousedown mouseup vclick".split(" "), ng = new N, og=!1, pg=!1, qg = function() {
    return pg ||!ig()
}, ug = function() {
    og || (B(mg, function(a) {
        lg.push(L(y.body, a, function(b) {
            $c(ng, a, !0, rg(b))
        }, !0));
        lg.push(L(y.body, a, function(b) {
            $c(ng, a, !1, rg(b))
        }, !1));
        jg(a, function(b) {
            pg || $c(ng, a, !0, rg(b))
        }, !0);
        jg(a, function(b) {
            pg || $c(ng, a, !1, rg(b))
        }, !1)
    }), sg(), og=!0, tg())
}, tg = function() {
    gg() && yd(function() {
        pg || Pf("ct-info",
        "remote-events-not-enabled", void 0, void 0)
    }, 3E3)
}, wg = function(a, b, c, d) {
    Va(mg, a) && (ug(), a = L(ng, a, b, c, d), vg(d, a))
}, xg = function(a) {
    null !== a && "object" == typeof a && q(a.type) && Va(mg, a.type) && pg && ng.dispatchEvent(rg(a))
}, rg = function(a) {
    a = s(a.pa) ? a : new Bc(a);
    a.target = null;
    a.srcElement = null;
    a.currentTarget = null;
    a.relatedTarget = null;
    return a
}, yg = function(a) {
    pg = a
}, zg = function(a) {
    return s(a.pa) ? a.pa() : a
}, sg = function() {
    var a = null, b = null;
    lg.push(L(ng, "touchstart", function(c) {
        c = zg(c);
        da(c.touches) && 0 != c.touches.length &&
        (a = u(), c = c.touches[0], b = new C(c.screenX, c.screenY))
    }));
    lg.push(L(ng, "touchend", function(c) {
        if (null != b && null != a && (c = zg(c), da(c.changedTouches) && 0 != c.changedTouches.length)) {
            c = c.changedTouches[0];
            var d = new C(c.screenX, c.screenY), e, f = b.x - d.x;
            e = b.y - d.y;
            e = Math.sqrt(f * f + e * e);
            f = u() - a;
            500 >= f && 9 >= e && (e = y.createEvent("CustomEvent"), e.initEvent("vclick", !0, !0), ib(e, {
                clientX: c.clientX,
                clientY: c.clientY,
                si: b,
                ri: d,
                duration: f
            }), ng.dispatchEvent(e));
            b = a = null
        }
    }))
}, vg = function(a, b) {
    for (var c = 1; c < arguments.length; c++)
        da(arguments[c]) ?
        ma(vg, a).apply(this, arguments[c]) : function(b) {
            vc(a, function() {
                M(b)
            })
        }(arguments[c])
};
var Ag = function(a) {
    if (a.classList)
        return a.classList;
    a = a.className;
    return q(a) && a.match(/\S+/g) || []
}, Bg = function(a, b) {
    return a.classList ? a.classList.contains(b) : Va(Ag(a), b)
}, Cg = function(a, b) {
    a.classList ? a.classList.add(b) : Bg(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
}, Dg = function(a, b) {
    if (a.classList)
        B(b, function(b) {
            Cg(a, b)
        });
    else {
        var c = {};
        B(Ag(a), function(a) {
            c[a]=!0
        });
        B(b, function(a) {
            c[a]=!0
        });
        a.className = "";
        for (var d in c)
            a.className += 0 < a.className.length ? " " + d : d
    }
}, Eg = function(a, b) {
    a.classList ?
    a.classList.remove(b) : Bg(a, b) && (a.className = Sa(Ag(a), function(a) {
        return a != b
    }).join(" "))
}, Fg = function(a, b) {
    a.classList ? B(b, function(b) {
        Eg(a, b)
    }) : a.className = Sa(Ag(a), function(a) {
        return !Va(b, a)
    }).join(" ")
};
var Gg = function(a) {
    this.w = a;
    this.Xc()
};
Gg.prototype.display = function() {
    Cg(this.w, "on")
};
Gg.prototype.Xc = function() {
    var a = this.w.parentNode;
    Q(a, "perspective", "1000px");
    vf(a, "100%", "100%");
    Dg(this.w, ["effect-container", "flip-effect"])
};
var Hg = function(a) {
    J.call(this);
    this.w = a;
    this.Ue=!1;
    this.Xa = [];
    this.Xc()
};
x(Hg, J);
Hg.prototype.i = function() {
    this.Af();
    Hg.j.i.call(this)
};
Hg.prototype.Af = function() {
    B(this.Xa, I);
    this.Xa = [];
    this.Ue=!1
};
Hg.prototype.display = function() {
    if (this.Ue) {
        var a = xf(this.w), a = "translateX(" + (a.width + .55 * a.height - pf(this.Xa[0]).x) + "px) rotate(20deg)";
        Cg(this.w, "on");
        for (var b = 0; b < this.Xa.length; ++b)
            Q(this.Xa[b], "transform", a);
        L(this.Xa[0], Ac, this.Af, !1, this)
    }
};
Hg.prototype.Xc = function() {
    this.Xa = [Nb("div", {
        className: "shine shine-1"
    }), Nb("div", {
        className: "shine shine-2"
    }), Nb("div", {
        className: "shine shine-3"
    }), Nb("div", {
        className: "shine shine-4"
    })];
    for (var a = 0; a < this.Xa.length; ++a)
        this.w.appendChild(this.Xa[a]);
    Dg(this.w, ["effect-container", "shimmer-effect"]);
    this.Ue=!0
};
var Ig = function(a) {
    return (a = a.exec(lb)) ? a[1] : ""
}, Jg = function() {
    if (Zf)
        return Ig(/Firefox\/([0-9.]+)/);
    if (E || pb)
        return wb;
    if (dg)
        return Ig(/Chrome\/([0-9.]+)/);
    if (eg)
        return Ig(/Version\/([0-9.]+)/);
    if (ag || bg) {
        var a;
        if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(lb))
            return a[1] + "." + a[2]
    } else {
        if (cg)
            return (a = Ig(/Android\s+([0-9.]+)/)) ? a : Ig(/Version\/([0-9.]+)/);
        if ($f)
            return Ig(/Camino\/([0-9.]+)/)
    }
    return ""
}();
var Kg = mc(function() {
    return !E || 0 <= Ba(Jg, 9)
}), Lg = mc(function() {
    return G || F && 0 <= Ba(Jg, 10) || E && 0 <= Ba(Jg, 10)
});
var Mg = function(a) {
    J.call(this);
    this.w = a;
    this.eg = this.dg = 0;
    this.Xc()
};
x(Mg, J);
Mg.prototype.Mh = function() {
    var a = this.w, b = this.dg, c = this.eg;
    Kg() && (b = Lg() ? "translate3d(" + b + "px," + c + "px,0px)" : "translate(" + b + "px," + c + "px)", Q(a, E && 9 == Ab ? "-ms-transform" : "transform", b))
};
Mg.prototype.Vh = function(a) {
    var b = a.beta;
    this.dg = parseInt( - 1 * a.gamma / 90 * 15, 10);
    this.eg = parseInt( - 1 * b / 90 * 15, 10);
    z.requestAnimationFrame = z.requestAnimationFrame || z.mozRequestAnimationFrame || z.msRequestAnimationFrame || z.webkitRequestAnimationFrame;
    s(z.requestAnimationFrame) && z.requestAnimationFrame(t(this.Mh, this))
};
Mg.prototype.display = function() {
    vg(this, L(z, "deviceorientation", this.Vh, !1, this))
};
Mg.prototype.Xc = function() {
    Q(this.w.parentNode, "perspective", "1000px");
    Dg(this.w, ["effect-container", "tilt-effect"])
};
var Ng = function() {
    J.call(this);
    this.mg=!1;
    this.zb = null;
    var a = y.body, b = V("apply_tilt_effect"), c = V("apply_flip_effect"), d = V("apply_shimmer_effect"), e = V("apply_effect_on_osd");
    b ? this.zb = new Mg(a) : c ? this.zb = new Gg(a) : d && (this.zb = new Hg(a));
    (b || c || d)&&!e && vg(this, L(z, "load", this.Vf, !1, this))
};
x(Ng, J);
Ng.prototype.i = function() {
    K(this.zb);
    this.zb = null;
    Ng.j.i.call(this)
};
Ng.prototype.Vf = function() {
    this.mg || null == this.zb || (this.mg=!0, this.zb.display())
};
var Og = {
    CATBOX_USL: "catbox_usl",
    CATBOX_OFFER_ID: "catbox_offer_id",
    CATBOX_URL: "catbox_url",
    CATBOX_VANITY_ID: "catbox_vanity_id"
}, Pg = {
    ENGAGEMENT_START: "engstart",
    ENGAGEMENT_END: "engend"
}, Qg = {
    CLICK_TO_EXPAND: 29,
    HOVER_TO_EXPAND: 30,
    GENERIC_ENGAGEMENT: 32,
    VIDEO_PLAY: 33,
    VIDEO_UNMUTE: 34,
    VIDEO_VIEW_TIMER: 35,
    MOUSE_HOVER: 36,
    SWIPE: 37,
    VIDEO_REPLAY: 10001,
    VIDEO_PAUSE: 10002,
    VIDEO_STOP: 10003,
    VIDEO_MUTE: 10004,
    VIDEO_MIDPOINT: 10005,
    VIDEO_COMPLETE: 10006,
    VIDEO_INTERACTION: 10007,
    FULL_SCREEN: 10008,
    MANUAL_CLOSE: 10009,
    CONTRACTION: 10010,
    VIDEO_FIRST_QUARTILE: 10011,
    VIDEO_THIRD_QUARTILE: 10012,
    SUCCESSFUL_ENGAGEMENT: 10025,
    ENGAGEMENT_END: 10026,
    VIDEO2_START: 10027,
    VIDEO2_FIRST_QUARTILE: 10028,
    VIDEO2_MIDPOINT: 10029,
    VIDEO2_THIRD_QUARTILE: 10030,
    VIDEO2_COMPLETE: 10031,
    VIDEO3_START: 10032,
    VIDEO3_FIRST_QUARTILE: 10033,
    VIDEO3_MIDPOINT: 10034,
    VIDEO3_THIRD_QUARTILE: 10035,
    VIDEO3_COMPLETE: 10036,
    VIDEO4_START: 10037,
    VIDEO4_FIRST_QUARTILE: 10038,
    VIDEO4_MIDPOINT: 10039,
    VIDEO4_THIRD_QUARTILE: 10040,
    VIDEO4_COMPLETE: 10041,
    VIDEO5_START: 10042,
    VIDEO5_FIRST_QUARTILE: 10043,
    VIDEO5_MIDPOINT: 10044,
    VIDEO5_THIRD_QUARTILE: 10045,
    VIDEO5_COMPLETE: 10046,
    ASSETS_LOADED: 10047,
    RENDERING_COMPLETED: 10048
}, Rg = {
    CATBOX_VIEW_SHEET: 10177,
    CATBOX_VIEW_OFFER: 10178,
    CATBOX_CLICK_OFFER_ATTACHMENT: 10179,
    CATBOX_CLICK_IMAGE_ATTACHMENT: 10180,
    CATBOX_CLICK_VIDEO_ATTACHMENT: 10181,
    CATBOX_CLICK_OFFER_GROUP_ATTACHMENT: 10182,
    CATBOX_CLICK_IMAGE_GROUP_ATTACHMENT: 10183,
    CATBOX_CLICK_WEB_SNIPPET_ATTACHMENT: 10184,
    CATBOX_CLICK_CALL_TO_ORDER_ATTACHMENT: 10185,
    CATBOX_CLICK_THROUGH_OFFER: 10197
}, Sg = {
    GDN_REPORTING_DEFERRED: 10199
};
var Tg = function() {
    this.$b = {}
}, W = function(a, b, c) {
    var d;
    if (ea(c)) {
        var e;
        "touchend" == c.type || "touchcancel" == c.type ? c.changedTouches && 0 < c.changedTouches.length ? (d = c.changedTouches[0].clientX, e = c.changedTouches[0].clientY) : s(c.pa) && (c = c.pa(), c.changedTouches && 0 < c.changedTouches.length && (d = c.changedTouches[0].clientX, e = c.changedTouches[0].clientY)) : (e = uf(c), d = e.x, e = e.y);
        d = m(d) && m(e) ? d + "," + e : ""
    } else 
        d = c + "";
    d && (a.$b[b] = d)
}, Vg = function(a) {
    var b = {};
    Ia(a.$b, t(function(a, d) {
        Ug(d) && (b[d] = a)
    }, a));
    return b
}, Ug =
function(a) {
    var b = T().JS_SPAM_SIGNALS;
    a = Wg[a];
    return m(a) && null != b && (b & a) == a
}, Wg = {
    zcf: 8192,
    zcr: 16384,
    clkt: 16,
    zbq: 262144,
    gcf: 32768,
    gcr: 65536,
    gq: 4096,
    gv: 524288
};
var Zg = function() {
    this.Vd = z.jstiming;
    this.af = {};
    this.Vd && ab(Xg, function(a) {
        Yg(this, a)
    }, this)
}, ch = function(a, b) {
    if (T().MEASURE_LATENCY && a.Vd) {
        var c = $g[b];
        c && (c = a.af[c]) && (ah[b] ? na(c.tick("start")) : na(c.tick(b)), bh[b] && a.reportEvents())
    }
}, Yg = function(a, b) {
    var c = new window.jstiming.Timer;
    c.name = "loadcreativetoolset";
    a.af[b] = c
};
Zg.prototype.reportEvents = function() {
    T().MEASURE_LATENCY && this.Vd && ab(this.af, function(a, b) {
        var c = a.t;
        !c || 2 > Object.keys(c).length || (na(this.Vd.report(a)), Yg(this, b))
    }, this)
};
var Xg = {
    Gi: "notifier",
    Di: "expansion",
    vi: "collapse"
}, $g = {
    notifier_start: "notifier",
    notifier_completed: "notifier",
    about_to_expand: "expansion",
    expansion_requested: "expansion",
    expansion_completed: "expansion",
    expansion_cancelled: "expansion",
    collapse_requested: "collapse",
    collapsed: "collapse",
    creative_loaded: "expansion",
    creative_rendered: "expansion"
}, bh = {
    notifier_completed: !0,
    expansion_completed: !0,
    expansion_cancelled: !0,
    collapsed: !0
}, ah = {
    notifier_start: !0,
    expansion_requested: !0,
    collapse_requested: !0
};
var X = function(a) {
    N.call(this);
    this.I=!1;
    this.N = this.aboutToExpandCallback = this.expansionCallback = null;
    this.D = a.D;
    this.re = a.mf;
    this.$d = a.zg;
    this.Xd = null;
    this.qc = a.Ag || a.mf;
    this.qc > this.re && (this.qc = this.re);
    var b = y.body;
    this.mc = y.createElement("div");
    b.appendChild(this.mc);
    this.ea = 0;
    this.q = a.Cg || new Tg;
    this.Dc = a.Bg;
    this.v = a.Ha;
    this.R = 0
};
x(X, N);
var dh = function() {
    var a;
    a = q("engagement_css_link") ? document.getElementById("engagement_css_link") : "engagement_css_link";
    if (!ea(a) || 1 != a.nodeType) {
        a = y.getElementsByTagName("head");
        a = 0 < a.length ? a[0] : y.body.parentNode.appendChild(y.createElement("head"));
        var b = y.createElement("link");
        b.rel = "stylesheet";
        b.type = "text/css";
        b.href = T().ENGAGEMENT_CSS_URL || "//pagead2.googlesyndication.com/pagead/css/engagement.css";
        b.id = "engagement_css_link";
        a.appendChild(b);
        b = y.createElement("link");
        b.rel = "stylesheet";
        b.type =
        "text/css";
        b.href = "//fonts.googleapis.com/css?family=Roboto:300,400,500,700";
        a.appendChild(b)
    }
};
X.prototype.i = function() {
    I(this.mc);
    K(this.N);
    this.N = null;
    X.j.i.call(this)
};
X.prototype.remove = function() {
    if (4 == this.ea || 0 == this.ea)
        this.q.$b = {};
    this.dispatchEvent(new xc("removed", this))
};
X.prototype.Lc = function() {
    return this.R
};
X.prototype.getContext = function() {
    return this.ea
};
var fh = function(a, b) {
    Va(eh[a.ea], b) || Qf("notifierContextTransitionError", {
        old: a.ea,
        "new": b,
        not: a.D
    });
    a.ea = b;
    a.Dc && (1 == a.ea ? ch(a.Dc, "notifier_start") : 2 == a.ea && ch(a.Dc, "notifier_completed"))
};
g = X.prototype;
g.ra = function() {
    return 1 == this.ea
};
g.Ud = function() {
    return 1 == this.ea || 2 == this.ea
};
g.isExpanded = function() {
    return 3 == this.ea
};
g.Pa = function(a) {
    fh(this, a ? 3 : 0);
    this.remove()
};
g.ub = function() {
    return this.re
};
g.cc = function() {
    return this.D
};
var gh = function(a) {
    a.I && a.expansionCallback && (fh(a, 2), a.remove(), a.expansionCallback(), a.expansionCallback = null)
};
X.prototype.Be = function() {
    this.aboutToExpandCallback && (Va(eh[this.ea], 2) && this.aboutToExpandCallback(), this.aboutToExpandCallback = null);
    this.Dc && ch(this.Dc, "about_to_expand")
};
var ih = function(a, b, c) {
    var d = z.CREATIVE_TOOLSET_PARAMS;
    if (m(d) && m(d.EXPANSION_CLICK_INFO)) {
        var e = hh(a.v, !1);
        null != c && ib(e, c);
        ab(e, function(a, b) {
            e[b] = String(a)
        });
        Pf("ct-info", b, e, 1)
    }
}, eh = {
    0: [1],
    1: [2, 4],
    4: [0],
    2: [3],
    3: [0]
};
var jh = function(a, b) {
    this.fg = this.ec = 0;
    this.Zc = this.Ta = null;
    this.Sd = 0;
    this.ec = 0 < a ? a : 0;
    this.fg = b && 0 < b && b < this.ec ? this.ec - b : 0
};
jh.prototype.start = function(a, b, c) {
    null !== this.Ta || null !== this.Zc || 0 >= this.ec || (this.Sd = u(), this.Ta = yd(b, this.ec, a), c && (this.Zc = yd(c, this.fg, a)))
};
jh.prototype.clear = function() {
    null !== this.Ta && (l.clearTimeout(this.Ta), this.Ta = null);
    null !== this.Zc && (l.clearTimeout(this.Zc), this.Zc = null);
    this.Sd = 0
};
var kh = function(a) {
    return a.Sd ? u() - a.Sd : 0
};
var lh = function(a) {
    X.call(this, a);
    this.Vc = 0;
    this.J = null;
    this.zd = new jh(50);
    a = y.body;
    kg() ? vg(this, L(a, "mouseenter", this.Jd, !1, this), L(a, "mouseleave", this.Bd, !1, this)) : vg(this, L(a, "mouseover", this.Jd, !0, this), L(a, "mouseout", this.Bd, !0, this))
};
x(lh, X);
g = lh.prototype;
g.Jd = function(a) {
    this.Vc || (this.Vc = u(), a && (W(this.q, "zcf", a), W(this.q, "zcr", a)))
};
g.i = function() {
    I(this.J);
    this.J = null;
    lh.j.i.call(this)
};
g.Bd = function() {
    this.Vc = 0
};
g.remove = function() {
    lh.j.remove.call(this);
    this.I=!1
};
g.Pa = function(a) {
    lh.j.Pa.call(this, a);
    var b = V("lb_reexpand_overlay");
    !a && z.innerWidth && (F || b) && (this.J = document.createElement("div"), Q(this.J, {
        position: "absolute",
        width: z.innerWidth + "px",
        height: z.innerHeight + "px",
        opacity: 0,
        top: 0,
        zIndex: 999999
    }), L(this.J, "mouseover", function() {
        y.body.removeChild(this.J);
        this.J = null
    }, !0, this), y.body.appendChild(this.J))
};
g.start = function(a, b) {
    this.zd.clear();
    this.I ? this.$c(a, b) : this.zd.start(this, ma(this.$c, a, b))
};
g.$c = function(a, b) {
    this.zd.clear();
    this.R = 0;
    this.I && (this.expansionCallback = a, this.aboutToExpandCallback = b, fh(this, 1), this.ag())
};
var mh = function(a) {
    lh.call(this, a);
    this.Jc = new jh(3E3);
    wg("mousedown", this.Ec, !0, this);
    this.D = "DesktopClickToExpand"
};
x(mh, lh);
g = mh.prototype;
g.i = function() {
    this.Jc.clear();
    mh.j.i.call(this)
};
g.Ec = function() {
    this.isExpanded() || (this.I=!0, this.Jc.clear(), this.Jc.start(this, this.Ch))
};
g.Ch = function() {
    this.I=!1
};
g.pb = function() {
    return 29
};
g.remove = function() {
    mh.j.remove.call(this);
    this.Jc.clear()
};
g.ag = function() {
    this.Jc.clear();
    this.R = 1;
    gh(this)
};
var nh = function(a, b) {
    n(b) || (b = [b]);
    var c = Ta(b, function(a) {
        return q(a) ? a : a.qi + " " + a.duration + "s " + a.timing + " " + a.pi + "s"
    });
    Q(a, "transition", c.join(","))
}, oh = mc(function() {
    if (E)
        return H("10.0");
    var a = document.createElement("div"), b = gf(), c = {
        transition: "opacity 1s linear"
    };
    b && (c[b + "-transition"] = "opacity 1s linear");
    b = {
        style: c
    };
    if (!Oe.test("div"))
        throw Error("Invalid tag name <div>.");
    if ("div"in Qe)
        throw Error("Tag name <div> is not allowed for SafeHtml.");
    var c = null, d = "<div";
    if (b)
        for (var e in b) {
            if (!Oe.test(e))
                throw Error('Invalid attribute name "' +
                e + '".');
                var f = b[e];
                if (null != f) {
                    var h;
                    h = e;
                    if (f instanceof ye)
                        f = ze(f);
                    else if ("style" == h.toLowerCase()) {
                        if (!ea(f))
                            throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof f + " given: " + f);
                            if (!(f instanceof Be)) {
                                var k = "", p = void 0;
                                for (p in f) {
                                    if (!/^[-_a-zA-Z0-9]+$/.test(p))
                                        throw Error("Name allows only [-_a-zA-Z0-9], got: " + p);
                                        var w = f[p];
                                        null != w && (w instanceof ye ? w = ze(w) : Ee.test(w) || (w = "zClosurez"), k += p + ":" + w + ";")
                                    }
                                    f = k ? Ce(k) : De
                            }
                            k = void 0;
                            k = f instanceof Be && f.constructor ===
                            Be && f.th === Ae ? f.Ve : "type_error:SafeStyle";
                            f = k
                        } else {
                            if (/^on/i.test(h))
                                throw Error('Attribute "' + h + '" requires goog.string.Const value, "' + f + '" given.');
                                if (h.toLowerCase()in Pe)
                                    if (f instanceof Ke)
                                        f = f instanceof Ke && f.constructor === Ke && f.wh === Je ? f.$f : "type_error:TrustedResourceUrl";
                                    else if (f instanceof Ie)
                                        f = f instanceof Ie && f.constructor === Ie && f.uh === Fe ? f.gc : "type_error:SafeUrl";
                                    else 
                                        throw Error('Attribute "' + h + '" on tag "div" requires goog.html.SafeUrl or goog.string.Const value, "' + f + '" given.');
                        }
                        f.jc &&
                        (f = f.ic());
                        h = h + '="' + za(String(f)) + '"';
                        d += " " + h
                }
            }
    e = void 0;
    m(e) ? n(e) || (e = [e]) : e = [];
    !0 === we.div ? d += ">" : (c = Se(e), d += ">" + Ne(c) + "</div>", c = c.Yc());
    (b = b && b.dir) && (c = /^(ltr|rtl|auto)$/i.test(b) ? 0 : null);
    b = Re(d, c);
    a.innerHTML = Ne(b);
    a = a.firstChild;
    b = a.style[Da("transition")];
    return "" != ("undefined" !== typeof b ? b : a.style[jf(a, "transition")] || "")
});
var ph = function() {
    N.call(this);
    this.k = 0;
    this.endTime = this.startTime = null
};
x(ph, N);
ph.prototype.yd = function() {
    this.ba("begin")
};
ph.prototype.Hc = function() {
    this.ba("end")
};
ph.prototype.ba = function(a) {
    this.dispatchEvent(a)
};
var qh = function(a, b, c, d, e) {
    ph.call(this);
    this.o = a;
    this.mh = b;
    this.Tg = c;
    this.If = d;
    this.oh = n(e) ? e : [e]
};
x(qh, ph);
g = qh.prototype;
g.play = function() {
    if (1 == this.k)
        return !1;
    this.yd();
    this.ba("play");
    this.startTime = u();
    this.k = 1;
    if (oh())
        return Q(this.o, this.Tg), this.Ta = yd(this.Wg, void 0, this), !0;
    this.Je(!1);
    return !1
};
g.Wg = function() {
    xf(this.o);
    nh(this.o, this.oh);
    Q(this.o, this.If);
    this.Ta = yd(t(this.Je, this, !1), 1E3 * this.mh)
};
g.stop = function() {
    1 == this.k && this.Je(!0)
};
g.Je = function(a) {
    Q(this.o, "transition", "");
    l.clearTimeout(this.Ta);
    Q(this.o, this.If);
    this.endTime = u();
    this.k = 0;
    a ? this.ba("stop") : this.ba("finish");
    this.Hc()
};
g.i = function() {
    this.stop();
    qh.j.i.call(this)
};
g.pause = function() {};
var rh = function(a) {
    this.lg = a;
    this.va=!1
};
rh.prototype.play = function() {
    this.lg.play();
    this.va=!0
};
rh.prototype.stop = function() {
    this.lg.stop();
    this.va=!1
};
rh.prototype.ra = function() {
    return this.va
};
var sh = function(a, b) {
    this.zh = a;
    this.va=!1;
    this.P = new xd(b);
    L(this.P, "tick", t(this.Re, this))
};
sh.prototype.play = function() {
    this.P.start();
    this.va=!0
};
sh.prototype.stop = function() {
    this.P.stop();
    this.va=!1
};
sh.prototype.ra = function() {
    return this.va
};
sh.prototype.Re = function() {
    this.zh() || this.stop()
};
var th = function(a, b, c, d, e, f, h) {
    J.call(this);
    this.ud = f || 0;
    this.yc = h || 0;
    this.pd = e;
    t: {
        f = this.ud;
        switch (e) {
        case 0:
            e = {
                appearanceDirection: 0,
                fontFamily: "Arial,sans-serif",
                fontSizeLongText: 12,
                fontSizeShortText: 14,
                height: 20,
                initialBackgroundColor: "#eee",
                notifierTextBottom: 1,
                notifierTextColor: "#000",
                overlayBackgroundColor: "#aaa",
                overlayOpacity: .75,
                overlayWidth: 120,
                progressBarAppearanceTime: 100,
                progressBarOpacity: 1,
                raiseDelta: 1,
                roundCornerRadius: 5,
                startBottomPosition: - 20,
                width: 120
            };
            break t;
        case 1:
            e = {
                appearanceDirection: 1,
                fontFamily: "Arial,sans-serif",
                fontSizeLongText: 12,
                fontSizeShortText: 14,
                height: 34,
                initialBackgroundColor: "#999",
                notifierTextColor: "#222",
                notifierTextBottom: 0,
                overlayBackgroundColor: "#f1f1f1",
                overlayOpacity: .8,
                overlayWidth: 300 < f ? 300: f,
                progressBarAppearanceTime: 0,
                progressBarOpacity: .8,
                raiseDelta: - 1,
                roundCornerRadius: 0,
                startBottomPosition: this.yc,
                width: 120
            };
            break t
        }
        throw Error("unexpected state");
    }
    this.ka = e;
    this.ja = a;
    this.of = b;
    this.vc = c;
    this.cb = d;
    this.Na = this.Ma = this.Aa = this.Lb = null;
    this.zc = this.Qb = 0;
    this.nf = this.ka.fi;
    this.Qa = this.ka.height;
    this.Dg = oh()
};
x(th, J);
g = th.prototype;
g.i = function() {
    I(this.Aa);
    this.Aa = null;
    I(this.Lb);
    this.Lb = null;
    null != this.Ma && this.Ma.stop();
    null != this.Na && this.Na.stop();
    th.j.i.call(this)
};
g.Gg = function() {
    if (0 > this.Qb ? 0 : 1 != this.ka.Eg || this.Qb + this.Qa < this.yc)
        return !1;
    this.Qb += this.ka.ji;
    Q(this.ja, "bottom", S(this.Qb));
    return !0
};
g.Fg = function() {
    if (100 <= this.zc)
        return !1;
    this.zc += 1;
    this.Aa.style.width = nf(this.zc + "%", !0);
    return !0
};
g.Ub = function() {
    if (!this.Aa) {
        var a = this.ka, b = document.createElement("SPAN");
        Qb(b, this.vc);
        this.Aa = document.createElement("DIV");
        var c = this.cb ? "right": "left";
        Q(this.Aa, {
            background: a.Zh,
            height: S(this.Qa),
            opacity: a.ei,
            width: 0,
            zIndex: 999999,
            "float": c
        });
        var d = this.ka, d = {
            bottom: S(d.$h),
            color: d.bi,
            fontSize: S(16 < this.vc.length ? this.ka.Xh : this.ka.Yh),
            fontFamily: d.fontFamily,
            left: S(5),
            letterSpacing: "0.05em",
            position: "absolute",
            verticalAlign: "middle",
            zIndex: 999999
        };
        this.cb && (b.setAttribute("dir", "rtl"), 0 == this.pd &&
        (d.right = S(5)));
        Q(b, d);
        this.ja.appendChild(b);
        this.ja.appendChild(this.Aa);
        c = jb("background", a.ci, "bottom", a.rf, "height", S(this.Qa), "lineHeight", S(this.Qa), "position", "absolute", "padding", 0, "width", S(a.pf), "zIndex", 999999, "textDirection", 0, "textAlign", c, "border-top-" + c + "-radius", S(a.qf), "-moz-border-top-" + c + "-radius", S(a.qf), "-webkit-border-top-" + c + "-radius", S(a.qf));
        if (1 == this.pd) {
            var e = Fb(b), d = E && b.currentStyle, f;
            if (f = d)
                e = Gb(e), f = Jb(e.V);
            if (f && "auto" != d.width && "auto" != d.height&&!d.boxSizing)
                e = zf(b,
                d.width, "width", "pixelWidth"), d = zf(b, d.height, "height", "pixelHeight"), d = new D(e, d);
            else {
                d = new D(b.offsetWidth, b.offsetHeight);
                if (E) {
                    e = Af(b, "paddingLeft");
                    f = Af(b, "paddingRight");
                    var h = Af(b, "paddingTop"), k = Af(b, "paddingBottom"), e = new hf(h, f, k, e)
                } else 
                    e = kf(b, "paddingLeft"), f = kf(b, "paddingRight"), h = kf(b, "paddingTop"), k = kf(b, "paddingBottom"), e = new hf(parseFloat(h), parseFloat(f), parseFloat(k), parseFloat(e));
                if (!E || E && 9 <= Ab)
                    f = kf(b, "borderLeftWidth"), h = kf(b, "borderRightWidth"), k = kf(b, "borderTopWidth"), p =
                    kf(b, "borderBottomWidth"), f = new hf(parseFloat(k), parseFloat(h), parseFloat(p), parseFloat(f));
                else {
                    f = Cf(b, "borderLeft");
                    var h = Cf(b, "borderRight"), k = Cf(b, "borderTop"), p = Cf(b, "borderBottom");
                    f = new hf(k, h, p, f)
                }
                d = new D(d.width - f.left - e.left - e.right - f.right, d.height - f.top - e.top - e.bottom - f.bottom)
            }
            Q(b, "left", S((this.ka.pf - d.width) / 2));
            b = {
                background: "#fff",
                opacity: .4,
                bottom: S( - this.yc - this.Qa),
                height: S(this.yc + 2 * this.Qa),
                left: 0,
                overflow: "hidden",
                padding: 0,
                position: "absolute",
                width: S(this.ud),
                zIndex: 999998
            };
            this.Lb = document.createElement("DIV");
            Q(this.Lb, b);
            this.ja.appendChild(this.Lb);
            this.cb && Q(this.Lb, "left", S(a.pf - this.ud));
            c["border-bottom"] = "1px solid #6d6e70";
            300 < this.ud && (c[this.cb ? "border-left": "border-right"] = "1px solid #6d6e70")
        } else 
            c["pointer-events"] = "none";
        yf(this.ja, a.di);
        Q(this.ja, c);
        this.Dg ? (this.Na || (a = this.nf / 1E3, a = new qh(this.ja, a, {
            bottom: S(this.ka.rf)
        }, {
            bottom: S(1 == this.ka.Eg ? this.yc - this.Qa - 1 : 0)
        }, {
            property: "bottom",
            duration: a,
            timing: "linear",
            delay: 0
        }), vc(this, ma(K, a)), this.Na =
        new rh(a)), this.Ma || (a = this.of / 1E3, a = new qh(this.Aa, a, {
            width: 0
        }, {
            width: "100%"
        }, {
            property: "width",
            duration: a,
            timing: "linear",
            delay: 0
        }), vc(this, ma(K, a)), this.Ma = new rh(a))) : (this.Na || (this.Na = new sh(t(this.Gg, this), this.nf / this.Qa)), this.Ma || (this.Ma = new sh(t(this.Fg, this), this.of / 100)))
    }
    this.Ia();
    R(this.ja, !0);
    this.zc = 0;
    this.Qb = this.ka.rf;
    this.Na.play();
    this.Ma.play()
};
g.Ia = function() {
    this.Na && this.Na.stop();
    this.Ma && this.Ma.stop();
    this.ja && this.Aa && (Q(this.ja, {
        bottom: S( - this.Qa),
        display: "none"
    }), this.Aa.style.width = nf(0, !0))
};
var uh = function(a, b, c, d, e) {
    J.call(this);
    this.vc = c;
    this.cb = d;
    this.pd = e;
    dh();
    a = y.createElement("div");
    Dg(a, ["progressbar-notifier", "container", "off", this.cb ? "rtl": "ltr"]);
    0 == this.pd && Cg(a, "desktop");
    T().IS_MOBILE_APP_REQUEST && (a.style.height = nf(Kb().height, !0));
    b = y.createElement("span");
    b.className = "spanner";
    c = y.createTextNode(" ");
    d = y.createElement("div");
    d.className = "overlay overlay1";
    e = y.createElement("div");
    e.className = "overlay overlay2";
    var f = y.createElement("div");
    f.className = "viz";
    var h = y.createElement("div");
    h.className = "notifier-text";
    var k = y.createTextNode(this.vc ? this.vc : "Expanding..."), p = y.createElement("div");
    p.className = "progbar-container";
    var w = y.createElement("div");
    w.className = "progbar-border";
    var A = y.createElement("div");
    A.className = "progbar";
    y.body.appendChild(a);
    a.appendChild(b);
    b.appendChild(c);
    a.appendChild(d);
    a.appendChild(e);
    a.appendChild(f);
    f.appendChild(h);
    h.appendChild(k);
    f.appendChild(p);
    p.appendChild(w);
    p.appendChild(A);
    a = {
        container: a,
        overlay: d
    };
    this.w = a.container;
    this.ja = a.overlay;
    this.la = null
};
x(uh, J);
var vh = {
    Qh: "off",
    Rh: "on",
    Ph: "cancel"
};
uh.prototype.i = function() {
    I(this.w);
    uh.j.i.call(this)
};
var wh = function(a, b) {
    Fg(a.w, bb(vh));
    Cg(a.w, b)
};
uh.prototype.Ub = function() {
    null != this.la && (M(this.la), this.la = null);
    wh(this, "on")
};
uh.prototype.Ia = function(a) {
    var b = t(function() {
        null != this.la && this.Ia(0)
    }, this);
    a && 4 == a ? (wh(this, "cancel"), null == this.la && (this.la = Tc(this.ja, Ac, b, !1, this))) : (M(this.la), this.la = null, wh(this, "off"))
};
var xh = function(a) {
    lh.call(this, a);
    this.Z = 0;
    this.eb = null;
    this.B = new jh(this.ub(), this.$d);
    wg("mousedown", this.Ec, !0, this);
    wg("mouseup", this.te, !0, this);
    a = a.jd || "Expanding...";
    var b = T().EXPANSION_RIGHT_TO_LEFT ||!1;
    "DesktopProgressBarCSS3" == this.D && oh() ? this.N = new uh(0, 0, a, b, 0) : (this.D = "DesktopProgressBarJS", this.N = new th(this.mc, this.qc, a, b, 0))
};
x(xh, lh);
g = xh.prototype;
g.i = function() {
    M(this.eb);
    this.eb = null;
    xh.j.i.call(this)
};
g.Ec = function() {
    this.isExpanded() || (this.Z = u())
};
g.te = function() {
    if (!this.isExpanded() && this.Z && this.ra()) {
        this.B.clear();
        this.R = 3;
        var a = this.Cc(), b = u() - this.Z;
        W(this.q, "zbq", a);
        W(this.q, "clkt", b);
        this.Z = 0;
        ih(this, "engagement_opt_in", {
            hovlen: a
        });
        gh(this)
    }
};
g.Jd = function(a) {
    xh.j.Jd.call(this, a);
    this.I=!0
};
g.Bd = function() {
    var a = this.Cc();
    xh.j.Bd.call(this);
    this.I=!1;
    this.zd.clear();
    var b = this.ra();
    b && (fh(this, 4), ih(this, "engagement_opt_out", {
        hovlen: a
    }));
    this.B.clear();
    this.remove();
    b && fh(this, 0)
};
g.Ae = function(a) {
    a && W(this.q, "zcr", a)
};
g.Cc = function() {
    return this.Vc ? u() - this.Vc : 0
};
g.pb = function() {
    return 30
};
g.remove = function() {
    xh.j.remove.call(this);
    this.B.clear();
    this.Z = 0;
    this.N.Ia(this.getContext());
    M(this.eb);
    this.eb = null
};
g.Kc = function() {
    this.R = 2;
    gh(this)
};
g.ag = function() {
    this.B.start(this, this.Kc, this.Be);
    this.N.Ub();
    if (Ug("zcf") || Ug("zcr"))
        this.eb = L(y.body, "mousemove", this.Ae, !0, this)
};
var yh = function(a) {
    X.call(this, a);
    this.aa = 0;
    wg("touchstart", this.He, !0, this);
    wg("touchend", this.Ge, !0, this)
};
x(yh, X);
g = yh.prototype;
g.start = function(a) {
    a()
};
g.pb = kc(29);
g.Lc = function() {
    return 4
};
g.ub = kc(0);
g.cc = kc("InstantlyEngage");
g.He = function(a) {
    this.isExpanded() || (this.aa = u(), W(this.q, "gcf", a))
};
g.Ge = function(a) {
    !this.isExpanded() && this.aa && this.Pd(a)
};
g.Pd = function(a) {
    if (this.aa) {
        var b = u();
        W(this.q, "gq", b - this.aa);
        this.aa = 0;
        W(this.q, "gcr", a)
    }
};
var zh = function(a) {
    X.call(this, a)
};
x(zh, X);
g = zh.prototype;
g.start = function() {
    ih(this, "pre_engagement")
};
g.remove = ba;
g.Ud = lc;
g.Pa = ba;
g.pb = kc(32);
g.ub = kc(Infinity);
g.cc = kc("NeverEngage");
var Ah = function() {
    N.call(this)
};
x(Ah, N);
g = Ah.prototype;
g.remove = ba;
g.Ud = lc;
g.start = function(a) {
    a()
};
g.Pa = function() {};
g.pb = function() {
    return 32
};
g.Lc = function() {
    return 1
};
g.cc = function() {
    return "NoOp"
};
g.ub = function() {
    return 0
};
var Ch = function(a) {
    X.call(this, a);
    this.uc = this.aa = 0;
    this.ke=!1;
    this.B = new jh(this.ub(), this.$d);
    var b = oh();
    "MobileProgressBarTapToCancelCSS3" != this.D || b || (this.D = "MobileProgressBarTapToCancel");
    "MobileProgressBarTapToExpandCSS3" != this.D || b || (this.D = "MobileProgressBarTapToExpand");
    wg("touchstart", this.He, !0, this);
    wg("touchend", this.Ge, !0, this);
    b = T().EXPANSION_RIGHT_TO_LEFT ||!1;
    t: {
        if (a = a.jd) {
            switch (this.D) {
            case "MobileProgressBarTapToCancel":
            case "MobileProgressBarTapToExpand":
                a = a.toUpperCase();
                break t;
            case "MobileProgressBarTapToCancelCSS3":
            case "MobileProgressBarTapToExpandCSS3":
                a += "...";
                break t
            }
            throw Error("unexpected");
        }
        a = Bh[this.D]
    }
    this.N = "MobileProgressBarTapToCancelCSS3" == this.D || "MobileProgressBarTapToExpandCSS3" == this.D ? new uh(0, 0, a, b, 1) : new th(this.mc, this.qc, a, b, 1, z.innerWidth, z.innerHeight)
};
x(Ch, X);
var Bh = {
    MobileProgressBarTapToCancel: "TAP TO CANCEL",
    MobileProgressBarTapToCancelCSS3: "Tap to cancel...",
    MobileProgressBarTapToExpand: "TAP TO EXPAND",
    MobileProgressBarTapToExpandCSS3: "Tap to expand..."
};
Ch.prototype.i = function() {
    this.B.clear();
    Ch.j.i.call(this)
};
var Dh = function(a) {
    return "MobileProgressBarTapToCancel" == a.D || "MobileProgressBarTapToCancelCSS3" == a.D
};
Ch.prototype.pb = function() {
    return 29
};
Ch.prototype.remove = function() {
    Ch.j.remove.call(this);
    this.B.clear();
    this.N.Ia(this.getContext());
    this.I=!1;
    this.uc = this.aa = 0;
    this.ke=!1
};
var Eh = function(a) {
    fh(a, 4);
    ih(a, "tap", {
        abproglen: kh(a.B)
    });
    a.remove();
    fh(a, 0)
}, Fh = function(a) {
    var b = {};
    ib(b, a.q.$b);
    b.scproglen = kh(a.B);
    ih(a, "tap", b);
    a.I=!0;
    gh(a)
}, Gh = function(a) {
    var b;
    if (b = a.ra() && null !== a.B.Ta)
        a = a.B, b = kh(a), b = 0 < Math.max(0, a.ec - b);
    return b
};
g = Ch.prototype;
g.He = function(a) {
    this.isExpanded() || (this.aa = u(), Gh(this) ? Dh(this) ? (this.B.clear(), Eh(this), a.preventDefault ? a.preventDefault() : a.returnValue=!1, a.stopPropagation()) : this.ke=!0 : W(this.q, "gcf", a))
};
g.Ge = function(a) {
    !this.isExpanded() && this.aa && (this.ke ? Gh(this) && (this.B.clear(), this.Pd(a), 8 != this.Lc() && (this.R = 6), Fh(this), a.preventDefault ? a.preventDefault() : a.returnValue=!1, a.stopPropagation()) : this.Pd(a))
};
g.Pd = function(a) {
    if (this.aa) {
        var b = u();
        W(this.q, "gcr", a);
        W(this.q, "gq", b - this.aa);
        this.aa = 0;
        this.uc ? W(this.q, "gv", b - this.uc) : this.uc = b
    }
};
g.Kc = function() {
    Dh(this) ? (8 != this.Lc() && (this.R = 5), Fh(this)) : Eh(this)
};
g.Yg = function() {
    Dh(this) && this.Be()
};
g.De = mc(qg);
g.start = function(a, b) {
    if (!Gh(this)) {
        this.R = 0;
        if (!this.De())
            this.R = 8;
        else if (0 == this.aa && 0 == this.uc)
            return;
        this.expansionCallback = a;
        this.aboutToExpandCallback = b;
        fh(this, 1);
        this.B.start(this, this.Kc, this.Yg);
        this.N.Ub()
    }
};
var Hh = function(a) {
    X.call(this, a);
    this.xc = this.Z = 0;
    this.eb = null;
    this.B = new jh(this.ub(), this.$d);
    this.rc = new jh(50);
    this.od=!1;
    this.J = null;
    wg("mousedown", this.Ec, !0, this);
    wg("mouseup", this.te, !0, this);
    var b = y.body;
    kg() ? vg(this, L(b, "mouseenter", this.wf, !1, this), L(b, "mouseleave", this.vf, !1, this)) : vg(this, L(b, "mouseover", this.wf, !0, this), L(b, "mouseout", this.vf, !0, this));
    a = a.jd || "Expanding...";
    b = T().EXPANSION_RIGHT_TO_LEFT ||!1;
    "DesktopProgressBarCSS3" == this.D && oh() ? this.N = new uh(0, 0, a, b, 0) : (this.D = "DesktopProgressBarJS",
    this.N = new th(this.mc, this.qc, a, b, 0))
};
x(Hh, X);
g = Hh.prototype;
g.i = function() {
    this.B.clear();
    this.rc.clear();
    I(this.J);
    this.J = null;
    Hh.j.i.call(this)
};
g.Cc = function() {
    return this.xc ? u() - this.xc : 0
};
g.Ec = function() {
    this.isExpanded() || (this.Z = u())
};
g.te = function() {
    if (!this.isExpanded() && this.Z && this.od) {
        this.B.clear();
        this.R = 3;
        var a = this.Cc(), b = u() - this.Z;
        W(this.q, "zbq", a);
        W(this.q, "clkt", b);
        this.Z = 0;
        ih(this, "engagement_opt_in", {
            hovlen: a
        });
        gh(this)
    }
};
g.vf = function() {
    this.I=!1;
    this.rc.clear();
    var a = this.ra();
    a && (fh(this, 4), ih(this, "engagement_opt_out", {
        hovlen: this.Cc()
    }));
    this.B.clear();
    this.remove();
    this.xc = 0;
    a && fh(this, 0)
};
g.wf = function(a) {
    this.I=!0;
    this.xc || (this.xc = u(), a && (W(this.q, "zcf", a), W(this.q, "zcr", a)))
};
g.Ae = function(a) {
    a && W(this.q, "zcr", a)
};
g.pb = function() {
    return this.od ? 30 : 29
};
g.remove = function() {
    Hh.j.remove.call(this);
    this.B.clear();
    this.Z = 0;
    this.I=!1;
    this.N.Ia(this.getContext());
    M(this.eb)
};
g.Pa = function(a) {
    Hh.j.Pa.call(this, a);
    var b = V("lb_reexpand_overlay");
    !a && z.innerWidth && (F || b) && (this.J = document.createElement("div"), Q(this.J, {
        position: "absolute",
        width: z.innerWidth + "px",
        height: z.innerHeight + "px",
        opacity: 0,
        top: 0,
        zIndex: 999999
    }), L(this.J, "mouseover", function() {
        y.body.removeChild(this.J);
        this.J = null
    }, !0, this), y.body.appendChild(this.J))
};
g.Kc = function() {
    this.R = 2;
    gh(this)
};
g.start = function(a, b) {
    this.rc.clear();
    this.I ? this.$c(a, b) : this.rc.start(this, ma(this.$c, a, b))
};
g.$c = function(a, b) {
    this.rc.clear();
    this.R = 0;
    if (this.I)
        if (this.expansionCallback = a, this.aboutToExpandCallback = b, fh(this, 1), this.od=!1, this.Z && 3E3 > u() - this.Z)
            this.R = 1, gh(this);
        else if (this.od=!0, this.B.start(this, this.Kc, this.Be), this.N.Ub(), Ug("zcf") || Ug("zcr"))
            this.eb = L(y.body, "mousemove", this.Ae, !0, this)
};
var Ih = function(a, b, c, d) {
    J.call(this);
    a = qf();
    this.Ic = a.clientHeight;
    this.wa = a.clientWidth;
    this.xd = 2 <= this.wa / this.Ic ? "horizontal" : "vertical";
    this.Hg = 160 > this.wa ? "vertical" : "horizontal";
    this.Fc = "slide";
    this.Ig = b;
    this.Sa = this.uf = new C(this.wa / 2, this.Ic / 2);
    this.cb = c;
    this.va=!1;
    this.md = new jh(50);
    this.la = null;
    this.ue = y.createElement("div");
    this.ve = y.createElement("div");
    this.sa = y.createElement("div");
    this.K = d;
    this.mb = y.createElement("div");
    this.tf=!1;
    dh();
    b = y.createElement("div");
    c = y.createElement("span");
    d = y.createElement("div");
    a = y.createElement("div");
    var e = y.createElement("div");
    Q(b, "zIndex", 999999);
    Q(b, "height", "100%");
    Dg(b, ["touchagain", "container", this.xd, this.Fc, this.cb ? "rtl": "ltr", "off"]);
    c.className = "spanner";
    var f = y.createTextNode(" ");
    d.className = "overlay overlay1";
    a.className = "overlay overlay2";
    this.sa.className = "viz";
    this.ue.className = "leftWing";
    this.ve.className = "rightWing";
    this.K.className = "callToAction";
    this.K.tabIndex =- 1;
    e.className = "expandSymbol";
    this.mb.className = "notifier-text";
    c.appendChild(f);
    y.body.appendChild(b);
    b.appendChild(c);
    b.appendChild(d);
    b.appendChild(a);
    b.appendChild(this.sa);
    this.sa.appendChild(this.ue);
    this.sa.appendChild(this.K);
    this.K.appendChild(e);
    this.K.appendChild(this.mb);
    this.sa.appendChild(this.ve);
    Qb(this.mb, this.Ig);
    this.w = b
};
x(Ih, J);
var Jh = {
    Qh: "off",
    Rh: "on",
    Ph: "cancel"
};
Ih.prototype.i = function() {
    this.md.clear();
    I(this.sa);
    Ih.j.i.call(this)
};
var Kh = function(a, b) {
    Fg(a.w, bb(Jh));
    Cg(a.w, b)
}, Lh = function(a, b) {
    if (b < a.wa / 2) {
        var c = a.w;
        Eg(c, "right");
        Cg(c, "left")
    } else 
        c = a.w, Eg(c, "left"), Cg(c, "right")
};
Ih.prototype.Ia = function(a) {
    4 == a ? (Kh(this, "cancel"), this.la = L("slide" == this.Fc && "horizontal" == this.xd ? this.K : this.sa, Ac, ma(this.Ia, 0), !1, this)) : (Kh(this, "off"), M(this.la));
    "slide" == this.Fc && ("horizontal" == this.xd ? Mh(this, this.Sa.x, !0) : Nh(this, this.Sa.y, !0));
    this.va=!1
};
Ih.prototype.Ub = function(a) {
    this.va || (this.va=!0, this.md.clear(), this.tf || Oh(this), this.Sa = a ? a : this.uf, "horizontal" == this.xd ? (Ph(this), a = this.K) : (Qh(this), a = this.sa), this.la = Tc(a, Ac, function() {
        this.K.focus()
    }, !1, this))
};
var Ph = function(a) {
    var b = "slide" == a.Fc;
    Kh(a, "off");
    Lh(a, a.Sa.x);
    Mh(a, a.Sa.x, b);
    Nh(a, a.Sa.y, !1);
    a.md.start(a, function() {
        Kh(this, "on");
        b && Mh(this, this.Sa.x, !1)
    })
}, Qh = function(a) {
    var b = "slide" == a.Fc;
    Kh(a, "off");
    Nh(a, a.Sa.y, b);
    Mh(a, a.wa / 2, !1);
    a.md.start(a, function() {
        Kh(this, "on");
        b && Nh(this, this.Sa.y, !1)
    })
}, Mh = function(a, b, c) {
    var d = a.K.clientWidth;
    b = c ? b < a.wa / 2 ? 0 - d : a.wa : $a(b - d / 2, a.wa - d);
    c = $a(b, a.wa);
    d = $a(a.wa - (b + d), a.wa);
    Q(a.K, "left", S(b));
    Q(a.ue, "width", S(c));
    Q(a.ve, "width", S(d))
}, Nh = function(a, b, c) {
    var d =
    "vertical" == a.Hg ? a.mb.offsetTop + a.mb.clientHeight: a.sa.clientHeight;
    b = c ? b < a.Ic / 2 ? 0 - d : a.Ic : $a(b - d / 2, a.Ic - d);
    Q(a.sa, "top", S(b))
}, Oh = function(a) {
    var b = 60;
    Q(a.mb, "fontSize", S(b));
    for (var c = Math.max(Math.min(a.sa.clientHeight - 6, 60), 10); a.mb.clientHeight > c;)
        Q(a.mb, "fontSize", S(b--));
    a.tf=!0
};
var Rh = function(a) {
    X.call(this, a);
    var b = T().EXPANSION_RIGHT_TO_LEFT ||!1;
    a = a.jd || "Expand";
    this.td = null;
    this.wd = this.Tb =- 1;
    this.sd = new jh(4E3);
    this.K = y.createElement("div");
    this.N = new Ih(0, a, b, this.K);
    L(this.K, "touchstart", this.gh, !0, this);
    L(this.K, "touchend", this.fh, !0, this);
    L(this.K, "blur", this.hh, !0, this);
    wg("touchstart", this.dh, !0, this);
    wg("touchend", this.bh, !1, this)
};
x(Rh, X);
g = Rh.prototype;
g.pb = function() {
    return 29
};
g.gh = function() {
    if (1 == this.getContext() || 4 == this.getContext())
        this.wd = u()
};
g.fh = function(a) {
    if (1 == this.getContext() || 4 == this.getContext()) {
        var b = u();
        W(this.q, "gcr", a);
        - 1 < this.Tb && W(this.q, "gv", b - this.Tb);
        - 1 < this.wd && W(this.q, "gq", b - this.wd);
        a = {};
        ib(a, this.q.$b);
        a.engnotlen = kh(this.sd);
        ih(this, "touchAgain", a);
        gh(this)
    }
};
g.hh = function() {
    this.ra() && (fh(this, 4), this.q.$b = {}, ih(this, "touchAgain", {
        abnotlen: kh(this.sd)
    }), this.remove(), fh(this, 0))
};
g.ih = function() {
    var a = this.K, b = new xc("blur", this.K);
    Dc(a) ? $c(a, "blur", !0, b) : Yc(a, "blur", !0, b)
};
g.remove = function() {
    Rh.j.remove.call(this);
    this.sd.clear();
    this.I=!1;
    this.td = null;
    this.wd = this.Tb =- 1;
    this.N.Ia(this.getContext())
};
g.dh = function(a) {
    0 == this.getContext() && (this.td = uf(a), W(this.q, "gcf", a), this.Tb =- 1)
};
g.bh = function(a) {
    0 > this.Tb && (this.td = uf(a), this.Tb = u())
};
g.De = mc(qg);
g.start = function(a, b) {
    0 == this.getContext() && (this.De() ? this.R = 6 : this.R = 8, fh(this, 1), this.I=!0, this.expansionCallback = a, this.aboutToExpandCallback = b, this.N.Ub(this.td), this.sd.start(this, this.ih))
};
var Sh = function(a) {
    this.v = a
};
Sh.prototype.cpeEnabled = function() {
    return this.v.cpeEnabled()
};
Sh.prototype.getClientEnvironment = function() {
    return {
        browserClass: this.v.getClientEnvironment().browserClass
    }
};
var Th = function() {
    this.cf = null
}, Uh = ["googlesyndication.com", "googleadservices.com", "doubleclick.net"], Vh = function(a) {
    a = Id(a);
    if (!a)
        return !1;
    for (var b = 0; b < Uh.length; ++b) {
        var c = Uh[b], d = String(c).toLowerCase(), c = String(a.substr(a.length - c.length, c.length)).toLowerCase();
        if (0 == (d < c?-1 : d == c ? 0 : 1))
            return !0
    }
    return !1
};
Th.prototype.Gc = function() {
    if (!this.cf) {
        var a;
        if ((a = T()) && a.CREATIVE_CONVERSION_URL)
            a = a.CREATIVE_CONVERSION_URL;
        else {
            a = z.location.href;
            var b = a.search(Od), c = Nd(a, 0, "ct_conv", b);
            if (0 > c)
                a = null;
            else {
                var d = a.indexOf("&", c);
                if (0 > d || d > b)
                    d = b;
                c += 8;
                a = decodeURIComponent(a.substr(c, d - c).replace(/\+/g, " "))
            }
            a = a ? Vh(a) ? a : "" : ""
        }
        this.cf = a
    }
    return this.cf
};
var Wh = function() {
    this.H = null;
    this.Xg = this.Pe=!1;
    this.T = null;
    this.Cf = new Th;
    this.Kb = this.nb = this.Zb = null
};
Wh.prototype.cpeEnabled = function() {
    return T().ENABLE_CPE
};
Wh.prototype.getClientEnvironment = function() {
    var a = 0;
    U()&&!T().IS_MOBILE_APP_REQUEST ? a = 1 : T().IS_MOBILE_APP_REQUEST && (a = 2);
    return {
        browserClass: a
    }
};
var hh = function(a, b) {
    var c = {};
    if (a.H) {
        var d = a.H.ub(), d = Infinity == d?-1 : d;
        c.engdelay = d.toString();
        c.notifier = a.H.cc();
        d = a.H.Lc();
        c.engactd = d;
        8 == d && (b=!1)
    }
    b && null !== a.Kb && ib(c, Vg(a.Kb));
    r(a.Zb) && (c.visfrc = a.Zb);
    null === a.nb || (c.viscrd = a.nb.top + "," + a.nb.left + "," + a.nb.bottom + "," + a.nb.right);
    a.T && (d = a.T.Ba, c.engcyc = d.engagementCycle, d.engagementAction && (c.engact = d.engagementAction), c.cycchrg = d.cycleWasCharged, d.chargeableAction && (c.chrgact = d.chargeableAction));
    return c
};
var Xh = function() {
    this.kc = [];
    this.qb = []
}, Yh = function() {
    var a = aa("googlecreative.reporting.sharedReporter");
    a || (a = new Xh, v("googlecreative.reporting.sharedReporter", a));
    return a
};
g = Xh.prototype;
g.addReporter = function(a) {
    B(this.kc, function(b) {
        b.newReporterCallback(a);
        a.newReporterCallback(b)
    });
    B(this.qb, function(b) {
        a.registerChargeableEventName(b)
    });
    this.kc.push(a)
};
g.reportEvents = function(a) {
    B(this.kc, function(b) {
        b.reportEvents(a)
    })
};
g.registerChargeableEventName = function(a) {
    B(this.kc, function(b) {
        b.registerChargeableEventName(a)
    });
    this.qb.push(a)
};
g.logCustomVariable = function(a, b) {
    B(this.kc, function(c) {
        c.logCustomVariable(a, b)
    })
};
g.getType = function() {
    return "UNIFIED_DISPATCHER"
};
g.getConfig = function() {
    return {
        reportingApiVersion: 2
    }
};
g.newReporterCallback = ba;
g.supportsChargeableEvents = function() {
    var a=!1;
    B(this.kc, function(b) {
        b.supportsChargeableEvents() && (a=!0)
    });
    return a
};
var Zh = {
    EXPANSION: "expansion",
    EXPANSION_HOVER: "expansion_hover",
    GENERIC_ENGAGEMENT: "generic_engagement",
    RM_VIDEO_PLAY: "rm_video_play",
    RM_VIDEO_UNMUTE: "rm_video_unmute",
    RM_VIDEO_VIEW_TIMER: "rm_video_view_timer",
    MOUSE_HOVER: "mouse_hover",
    SWIPE: "swipe",
    CLICK_THROUGH: "click_through",
    RM_VIDEO_REPLAY: "rm_video_replay",
    RM_VIDEO_PAUSE: "rm_video_pause",
    RM_VIDEO_STOP: "rm_video_stop",
    RM_VIDEO_MUTE: "rm_video_mute",
    VIDEOPLAYTIME50: "videoplaytime50",
    VIDEOPLAYTIME100: "videoplaytime100",
    RM_VIDEO_INTERACTION: "rm_video_interaction",
    RM_FULLSCREEN: "rm_fullscreen",
    RM_MANUAL_CLOSE: "rm_manual_close",
    CONTRACTION: "contraction",
    VIDEOPLAYTIME25: "videoplaytime25",
    VIDEOPLAYTIME75: "videoplaytime75",
    ENGAGE_1S: "engage_1s",
    ENGAGE_2S: "engage_2s",
    ENGAGE_3S: "engage_3s",
    ENGAGE_4S: "engage_4s",
    ENGAGE_5S: "engage_5s",
    ENGAGE_10S: "engage_10s",
    ENGAGE_15S: "engage_15s",
    ENGAGE_30S: "engage_30s",
    ENGAGE_60S: "engage_60s",
    ENGAGE_90S: "engage_90s",
    ENGAGE_120S: "engage_120s",
    ENGAGE_180S: "engage_180s",
    ENGAGE_SUCCESS: "engage_success",
    ENGAGE_ENDED: "engage_ended",
    VIDEO2_PLAYTIME0: "video2_playtime0",
    VIDEO2_PLAYTIME25: "video2_playtime25",
    VIDEO2_PLAYTIME50: "video2_playtime50",
    VIDEO2_PLAYTIME75: "video2_playtime75",
    VIDEO2_PLAYTIME100: "video2_playtime100",
    VIDEO3_PLAYTIME0: "video3_playtime0",
    VIDEO3_PLAYTIME25: "video3_playtime25",
    VIDEO3_PLAYTIME50: "video3_playtime50",
    VIDEO3_PLAYTIME75: "video3_playtime75",
    VIDEO3_PLAYTIME100: "video3_playtime100",
    VIDEO4_PLAYTIME0: "video4_playtime0",
    VIDEO4_PLAYTIME25: "video4_playtime25",
    VIDEO4_PLAYTIME50: "video4_playtime50",
    VIDEO4_PLAYTIME75: "video4_playtime75",
    VIDEO4_PLAYTIME100: "video4_playtime100",
    VIDEO5_PLAYTIME0: "video5_playtime0",
    VIDEO5_PLAYTIME25: "video5_playtime25",
    VIDEO5_PLAYTIME50: "video5_playtime50",
    VIDEO5_PLAYTIME75: "video5_playtime75",
    VIDEO5_PLAYTIME100: "video5_playtime100",
    CATALOG_VIEW_SHEET: "catbox_view_sheet",
    CATALOG_VIEW_OFFER: "catbox_view_offer",
    CATALOG_CLICK_OFFER_ATTACHMENT: "catbox_click_offer_attachment",
    CATALOG_CLICK_IMAGE_ATTACHMENT: "catbox_click_image_attachment",
    CATALOG_CLICK_VIDEO_ATTACHMENT: "catbox_click_video_attachment",
    CATALOG_CLICK_OFFER_GROUP_ATTACHMENT: "catbox_click_offer_group_attachment",
    CATALOG_CLICK_IMAGE_GROUP_ATTACHMENT: "catbox_click_image_group_attachment",
    CATALOG_CLICK_WEB_SNIPPET_ATTACHMENT: "catbox_click_web_snippet_attachment",
    CATALOG_CLICK_CALL_TO_ORDER_ATTACHMENT: "catbox_click_call_to_order_attachment",
    CATALOG_CLICK_THROUGH_OFFER: "catbox_click_through_offer",
    VISUAL_SHOPPING_ROW_SCROLL: "visual_shopping_row_scroll",
    video1Paused: "rm_video_pause",
    video1Played0Percent: "part2viewed",
    video1Played25Percent: "videoplaytime25",
    video1Played50Percent: "videoplaytime50",
    video1Played75Percent: "videoplaytime75",
    video1Played100Percent: "videoplaytime100",
    video2Paused: "rm_video_pause",
    video2Played0Percent: "video2_playtime0",
    video2Played25Percent: "video2_playtime25",
    video2Played50Percent: "video2_playtime50",
    video2Played75Percent: "video2_playtime75",
    video2Played100Percent: "video2_playtime100",
    video3Paused: "rm_video_pause",
    video3Played0Percent: "video3_playtime0",
    video3Played25Percent: "video3_playtime25",
    video3Played50Percent: "video3_playtime50",
    video3Played75Percent: "video3_playtime75",
    video3Played100Percent: "video3_playtime100",
    video4Paused: "rm_video_pause",
    video4Played0Percent: "video4_playtime0",
    video4Played25Percent: "video4_playtime25",
    video4Played50Percent: "video4_playtime50",
    video4Played75Percent: "video4_playtime75",
    video4Played100Percent: "video4_playtime100",
    video5Paused: "rm_video_pause",
    video5Played0Percent: "video5_playtime0",
    video5Played25Percent: "video5_playtime25",
    video5Played50Percent: "video5_playtime50",
    video5Played75Percent: "video5_playtime75",
    video5Played100Percent: "video5_playtime100",
    "video-paused": "rm_video_pause",
    "video-viewed0percent": "part2viewed",
    "video-viewed25percent": "videoplaytime25",
    "video-viewed50percent": "videoplaytime50",
    "video-viewed75percent": "videoplaytime75",
    "video-viewed100percent": "videoplaytime100"
};
V("studio_events") && (Zh.EXPAND_TIMER = "expansion_hover", Zh.GDN_REPORTING_DEFERRED = "gdn_reporting_deferred");
var $h = {
    EXPANSION: 29,
    EXPANSION_HOVER: 30,
    GENERIC_ENGAGEMENT: 32,
    RM_VIDEO_PLAY: 33,
    RM_VIDEO_UNMUTE: 34,
    RM_VIDEO_VIEW_TIMER: 35,
    MOUSE_HOVER: 36,
    SWIPE: 37
};
V("studio_events") && ($h.EXPAND_TIMER = 30);
var ai = {
    29: "EXPANSION",
    30: "EXPANSION_HOVER",
    32: "GENERIC_ENGAGEMENT",
    33: "RM_VIDEO_PLAY",
    34: "RM_VIDEO_UNMUTE",
    35: "RM_VIDEO_VIEW_TIMER",
    36: "MOUSE_HOVER",
    37: "SWIPE",
    10001: "RM_VIDEO_REPLAY",
    10002: "RM_VIDEO_PAUSE",
    10003: "RM_VIDEO_STOP",
    10004: "RM_VIDEO_MUTE",
    10005: "VIDEOPLAYTME50",
    10006: "VIDEOPLAYTME100",
    10007: "RM_VIDEO_INTERACTION",
    10008: "RM_FULL_SCREEN",
    10009: "RM_MANUAL_CLOSE",
    10010: "CONTRACTION",
    10011: "VIDEOPLAYTIME25",
    10012: "VIDEOPLAYTIME75",
    10013: "ENGAGE_1S",
    10014: "ENGAGE_2S",
    10015: "ENGAGE_3S",
    10016: "ENGAGE_4S",
    10017: "ENGAGE_5S",
    10018: "ENGAGE_10S",
    10019: "ENGAGE_15S",
    10020: "ENGAGE_30S",
    10021: "ENGAGE_60S",
    10022: "ENGAGE_90S",
    10023: "ENGAGE_120S",
    10024: "ENGAGE_180S",
    10025: "ENGAGE_SUCCESS",
    10026: "ENGAGE_ENDED",
    10027: "VIDEO2_PLAYTIME0",
    10028: "VIDEO2_PLAYTIME25",
    10029: "VIDEO2_PLAYTIME50",
    10030: "VIDEO2_PLAYTIME75",
    10031: "VIDEO2_PLAYTIME100",
    10032: "VIDEO3_PLAYTIME0",
    10033: "VIDEO3_PLAYTIME25",
    10034: "VIDEO3_PLAYTIME50",
    10035: "VIDEO3_PLAYTIME75",
    10036: "VIDEO3_PLAYTIME100",
    10037: "VIDEO4_PLAYTIME0",
    10038: "VIDEO4_PLAYTIME25",
    10039: "VIDEO4_PLAYTIME50",
    10040: "VIDEO4_PLAYTIME75",
    10041: "VIDEO4_PLAYTIME100",
    10042: "VIDEO5_PLAYTIME0",
    10043: "VIDEO5_PLAYTIME25",
    10044: "VIDEO5_PLAYTIME50",
    10045: "VIDEO5_PLAYTIME75",
    10046: "VIDEO5_PLAYTIME100",
    10177: "CATALOG_VIEW_SHEET",
    10178: "CATALOG_VIEW_OFFER",
    10179: "CATALOG_CLICK_OFFER_ATTACHMENT",
    10180: "CATALOG_CLICK_IMAGE_ATTACHMENT",
    10181: "CATALOG_CLICK_VIDEO_ATTACHMENT",
    10182: "CATALOG_CLICK_OFFER_GROUP_ATTACHMENT",
    10183: "CATALOG_CLICK_IMAGE_GROUP_ATTACHMENT",
    10184: "CATALOG_CLICK_WEB_SNIPPET_ATTACHMENT",
    10185: "CATALOG_CLICK_CALL_TO_ORDER_ATTACHMENT",
    10197: "CATALOG_CLICK_THROUGH_OFFER",
    10198: "VISUAL_SHOPPING_ROW_SCROLL"
};
V("studio_events") && (ai[10199] = "GDN_REPORTING_DEFERRED");
var bi = Xa(bb({
    ti: "chrgact",
    ui: "ctype",
    wi: "cycchrg",
    xi: "deferred_action",
    yi: "no_charge",
    zi: "engact",
    Ai: "engactd",
    Bi: "engcyc",
    Ci: "engdelay",
    Ei: "label",
    Fi: "explen",
    Ii: "noconv",
    Hi: "notifier",
    Ji: "random",
    Li: "unload",
    Mi: "value",
    Ni: "visfrc",
    Oi: "viscrd"
}), bb(Og), bb({
    Ki: "row"
}), bb(Pg)), ci = function(a) {
    var b = {};
    Ia(a, function(a, d) {
        Va(bi, d) && (b[d] = a)
    });
    return b
};
var di = function() {
    this.time = 0;
    this.Ke=!1;
    this.data = null
};
di.prototype.setTime = function(a) {
    this.time = a;
    return this
};
var ei = function(a, b) {
    this.og = a;
    this.$e = b
};
x(ei, di);
var fi = function(a, b) {
    var c = [], d = "", e = b.indexOf("?") + 1;
    0 != e ? (c.push(b.substr(0, e)), d = b.substr(e)) : (c.push(b), c.push("?"));
    Ia(a, function(a, b) {
        d = d.replace(new RegExp(b + "=[^&\\s]*&?"), "");
        c.push([b, "=", a, "&"].join(""))
    });
    d ? c.push(d) : (e = c.pop(), e = e.substr(0, e.length - 1), c.push(e));
    return c.join("")
};
ei.prototype.Kf = function() {
    if (this.Ke) {
        var a = {
            context: "GdnChargeableEventUrlBuilder assembleUrl",
            msg: "eventAlreadySent cannot be true for chargeable url: " + this.og
        };
        Zb("cpeunif", a);
        return ""
    }
    a = fb(this.data || {});
    a.ctype = this.og.toString();
    return fi(a, this.$e)
};
var gi = function(a, b) {
    this.Lh = a;
    this.$e = b
};
x(gi, di);
gi.prototype.Kf = function() {
    var a = fb(this.data || {});
    a.label = this.Lh;
    this.Ke && (a.noconv = 1);
    a.random = u();
    var b = [this.$e], c;
    for (c in a)
        Md(c, a[c], b);
    return Ld(b)
};
var hi = function(a, b) {
    this.v = a;
    this.Pf=!1;
    this.Qe = {};
    this.qb = [];
    this.T = b;
    this.Of=!1
};
hi.prototype.reportEvents = function(a) {
    for (var b = 0; b < a.length; ++b) {
        var c = a[b], d = c.unifiedReportingEvent, d = "CUSTOM_EVENT" != d.type ? d.type: d.name, e;
        e = d;
        if (this.v.cpeEnabled()&&!T().ENGAGEMENT_URL) {
            var f = {
                context: "GdnEventReporter.shouldReportChargeableEvent",
                msg: "CPE is enabled but chargeable url is not set"
            };
            Qf("cpeAndNoChargeableUrl", f);
            e=!1
        } else 
            !this.v.cpeEnabled() || this.Of || ii(this) || (f = {
                context: "GdnEventReporter.shouldReportChargeableEvent",
                msg: "CPE default chargeable event is not configured and attempt to configure failed."
            },
            Qf("cpeChargeableEventConfigureFailed", f)), e = 0 == this.qb.length&&!!$h[e] || Va(this.qb, e), e = this.v.cpeEnabled()&&!!T().ENGAGEMENT_URL&&!this.Pf && e;
        if (e) {
            if (this.Pf=!0, e = this.T, e.Ba.chargeableAction = d, e.Ba.cycleWasCharged=!0, ji(this, d, new ei($h[d] || $h.GENERIC_ENGAGEMENT, T().ENGAGEMENT_URL || ""), 1, c.time, !0, c.data, !1), 1 < c.count) {
                this.Qe[d]=!0;
                e = [];
                if (n(c.data))
                    for (f = 1; f < c.data.length; ++f)
                        e.push(gb(c.data[f]));
                ki(this, d, {
                    count: c.count - 1,
                    time: 0,
                    data: e,
                    unifiedReportingEvent: c.unifiedReportingEvent
                })
            }
        } else 
            e =
            d, this.v.Cf.Gc() ? e = m(Zh[e]) : (Qf("noFreeUrl", {
                context: "GdnEventReporter.shouldReportFreeEvent",
                msg: "free url is not set"
            }), e=!1), e && ki(this, d, c);
        this.Qe[d]=!0
    }
};
var ki = function(a, b, c) {
    var d=!!a.Qe[b], e = new gi(Zh[b], a.v.Cf.Gc() || "");
    ji(a, b, e, c.count, c.time, !1, c.data, d)
}, ji = function(a, b, c, d, e, f, h, k) {
    for (var p = 0; p < d; ++p) {
        var w = [];
        n(h) && h.length > p && (w = ci(h[p]));
        if ("engstart"in w) {
            var A = a.T, la = b;
            A.Kd = u();
            if (A.yb) {
                var fa = A.yb, Ge = A.Kd;
                if (null == fa.Mc) {
                    var pc = [{
                        interval: 1E3,
                        args: {
                            action: 10013
                        }
                    }, {
                        interval: 2E3,
                        args: {
                            action: 10014
                        }
                    }, {
                        interval: 3E3,
                        args: {
                            action: 10015,
                            chargeable: !0
                        }
                    }, {
                        interval: 4E3,
                        args: {
                            action: 10016
                        }
                    }, {
                        interval: 5E3,
                        args: {
                            action: 10017
                        }
                    }, {
                        interval: 1E4,
                        args: {
                            action: 10018
                        }
                    },
                    {
                        interval: 15E3,
                        args: {
                            action: 10019
                        }
                    }, {
                        interval: 3E4,
                        args: {
                            action: 10020
                        }
                    }, {
                        interval: 6E4,
                        args: {
                            action: 10021
                        }
                    }, {
                        interval: 9E4,
                        args: {
                            action: 10022
                        }
                    }, {
                        interval: 12E4,
                        args: {
                            action: 10023
                        }
                    }, {
                        interval: 18E4,
                        args: {
                            action: 10024
                        }
                    }
                    ], Sb = T().EXPERIMENTAL_REPORTING_SCHEDULE, He = void 0, xb = T().ENGAGEMENT_CONVERSION_URLS;
                    m(xb) && (He = xb.ENGAGEMENT_DURATION_10S);
                    if (m(Sb))
                        try {
                            pc = dc(Sb).schedule
                    } catch (qj) {
                        Qf("badExpSchedJson", {
                            context: "experimental reporting schedule parse error",
                            msg: qj.toString()
                        })
                    } else if (m(He)) {
                        Sb = null;
                        for (xb =
                        0; xb < pc.length; xb++)
                            if (1E4 == pc[xb].interval) {
                                Sb = pc[xb];
                                break
                            }
                            Sb && (Sb.args.conversionUrl = He)
                    }
                    fa.Mc = pc
                }
                fa.xb = 0;
                fa.Oc = Ge;
                Ge = u() - fa.Oc;
                li(fa, Ge)
            }
            A.Ba.currentState = 1;
            A.Ba.timestamp = A.Kd;
            A.Ba.engagementAction = la
        } else 
            "engend"in w && (A = a.T, A.Jf = u(), A.yb && (A = A.yb, clearTimeout(A.Me), A.xb = 0, A.Oc = null, A.Me = 0), A = a.T, w.explen = "" + (A.Jf - A.Kd));
        A = hh(a.v, f);
        ib(A, w);
        la = c.setTime(e);
        la.Ke = k;
        la.data = A;
        if (A = la.Kf())
            2E3 < A.length && Qf("reporting-url-too-long"), Ga(z, A), 0 < e && (e = 0), k=!0;
        "engend"in w && (w = a.T, w.Ba.currentState =
        0, w.Ba.timestamp = u(), w.Ba.engagementCycle++, w.Ba.cycleWasCharged=!1)
    }
};
g = hi.prototype;
g.registerChargeableEventName = function(a) {
    Va(this.qb, a) || Za(this.qb, a)
};
g.logCustomVariable = ba;
g.getType = function() {
    return "GDN"
};
g.getConfig = function() {
    return {
        reportingApiVersion: 2
    }
};
g.newReporterCallback = function(a) {
    s(a.getType) && "STUDIO" == a.getType() && (this.v.Pe=!0)
};
g.supportsChargeableEvents = function() {
    return this.v.cpeEnabled()
};
var ii = function(a) {
    if (!z.CREATIVE_TOOLSET_PARAMS || null == T().NEVER_CHARGE_FOR_EXPANSION)
        return !1;
    T().NEVER_CHARGE_FOR_EXPANSION && 0 == a.qb.length && Yh().registerChargeableEventName("GENERIC_ENGAGEMENT");
    return a.Of=!0
};
var ni = function(a, b) {
    this.v = a;
    this.T = b;
    if (!mi) {
        var c = Yh();
        this.We = new hi(this.v, this.T);
        c.addReporter(this.We);
        mi=!0;
        this.v.Xg=!0
    }
    this.We && ii(this.We)
}, mi=!1, oi = {
    29: !0,
    30: !0
}, pi = function(a, b) {
    var c = ai[a];
    return m(c) ? {
        unifiedReportingEvent: {
            type: "CUSTOM_EVENT",
            name: c,
            videoName: "",
            trigger: "Counter"
        },
        count: 1,
        time: 0,
        data: [b]
    } : null
};
ni.prototype.Ab = function(a, b) {
    var c = null;
    (V("studio_events")?!oi[a] : 1) ? c = pi(a, b) : this.v.Pe ? this.v.Pe && (ea(b) || (b = {}), b.deferred_action = a, c = pi(Sg.GDN_REPORTING_DEFERED, b)) : c = pi(a, b);
    c && Yh().reportEvents([c])
};
ni.prototype.setChargeableAction = function(a) {
    (a = ai[a]) && Yh().registerChargeableEventName(a)
};
var qi = function() {
    this.Ba = CreativeToolset.EngagementState;
    this.yb = this.Jf = this.Kd = null
};
var ri = function(a) {
    this.Ah = a;
    this.Mc = null;
    this.xb = 0;
    this.Oc = null;
    this.Me = 0
}, li = function(a, b) {
    if (a.xb < a.Mc.length) {
        var c = a.Mc[a.xb].interval - b;
        0 < c ? a.Me = setTimeout(t(a.hg, a), c) : a.hg()
    }
};
ri.prototype.hg = function() {
    if (null != this.Oc) {
        var a = u() - this.Oc;
        this.Ah(this.Mc[this.xb].args, a);
        this.xb += 1;
        li(this, a)
    }
};
var si = function() {
    this.df = ""
}, Y = function(a, b) {
    var c;
    a.df || (c = T(), a.df = c && c.SEARCH_UPLIFT_URL ? c.SEARCH_UPLIFT_URL : "");
    if (c = a.df) {
        for (var d = c.search(Od), e = 0, f, h = []; 0 <= (f = Nd(c, e, "vi", d));)
            h.push(c.substring(e, f)), e = Math.min(c.indexOf("&", f) + 1 || d, d);
        h.push(c.substr(e));
        c = [h.join("").replace(Pd, "$1"), "&", "vi"];
        null != b && c.push("=", encodeURIComponent(String(b)));
        c = Ld(c);
        y.body ? (Ha || (d = y.createElement("iframe"), d.style.display = "none", d.id = "anonIframe", Ha = d, y.body.appendChild(d)), d=!0) : d=!1;
        d && Ga(Ha.contentWindow,
        c)
    }
};
var ti = function(a) {
    this.v = a;
    this.yb = new ri(t(this.nh, this));
    this.T = new qi;
    this.T.yb = this.yb;
    this.v.T = this.T;
    this.Tf = new ni(this.v, this.T);
    this.kh = new si
};
ti.prototype.nh = function(a, b) {
    var c = {};
    c.explen = b;
    if (a.chargeable)
        this.Ab(32, c);
    else if (m(a.conversionUrl)) {
        var d = new Qd(a.conversionUrl);
        Rd(d, z.location.protocol);
        d = d.toString();
        Vh(d) && Ga(z, d)
    }
    this.Ab(a.action, c)
};
ti.prototype.setChargeableAction = function(a) {
    $h[ai[a]] && this.Tf.setChargeableAction(a)
};
ti.prototype.Ab = function(a, b) {
    if ("number" === typeof a) {
        var c = b || {}, d = this.kh;
        switch (a) {
        case 29:
        case 30:
            Y(d, "201");
            break;
        case 32:
            Y(d, "259");
            break;
        case 10013:
            Y(d, "202");
            break;
        case 10014:
            Y(d, "203");
            break;
        case 10015:
            Y(d, "204");
            break;
        case 10016:
            Y(d, "205");
            break;
        case 10017:
            Y(d, "206");
            break;
        case 10018:
            Y(d, "211");
            break;
        case 10019:
            Y(d, "216");
            break;
        case 10020:
            Y(d, "231");
            break;
        case 10021:
            Y(d, "240");
            break;
        case 10022:
            Y(d, "241");
            break;
        case 10023:
            Y(d, "242");
            break;
        case 10024:
            Y(d, "243")
        }
        this.Tf.Ab(a, c)
    }
};
var db = {}, ui = null, vi = function(a) {
    a = ia(a);
    delete db[a];
    eb() && ui && ui.stop()
}, xi = function() {
    ui || (ui = new zd(function() {
        wi()
    }, 20));
    var a = ui;
    a.ra() || a.start()
}, wi = function() {
    var a = u();
    ab(db, function(b) {
        yi(b, a)
    });
    eb() || xi()
};
var zi = function(a, b, c, d) {
    ph.call(this);
    if (!n(a) ||!n(b))
        throw Error("Start and end parameters must be arrays");
    if (a.length != b.length)
        throw Error("Start and end points must be the same length");
    this.Tc = a;
    this.Jh = b;
    this.duration = c;
    this.kg = d;
    this.coords = [];
    this.Ih=!1
};
x(zi, ph);
g = zi.prototype;
g.oa = 0;
g.play = function(a) {
    if (a || 0 == this.k)
        this.oa = 0, this.coords = this.Tc;
    else if (1 == this.k)
        return !1;
    vi(this);
    this.startTime = a = u();
    - 1 == this.k && (this.startTime -= this.duration * this.oa);
    this.endTime = this.startTime + this.duration;
    this.oa || this.yd();
    this.ba("play");
    - 1 == this.k && this.ba("resume");
    this.k = 1;
    var b = ia(this);
    b in db || (db[b] = this);
    xi();
    yi(this, a);
    return !0
};
g.stop = function(a) {
    vi(this);
    this.k = 0;
    a && (this.oa = 1);
    Ai(this, this.oa);
    this.ba("stop");
    this.Hc()
};
g.pause = function() {
    1 == this.k && (vi(this), this.k =- 1, this.ba("pause"))
};
g.i = function() {
    0 == this.k || this.stop(!1);
    this.ba("destroy");
    zi.j.i.call(this)
};
var yi = function(a, b) {
    a.oa = (b - a.startTime) / (a.endTime - a.startTime);
    1 <= a.oa && (a.oa = 1);
    Ai(a, a.oa);
    1 == a.oa ? (a.k = 0, vi(a), a.ba("finish"), a.Hc()) : 1 == a.k && a.Ee()
}, Ai = function(a, b) {
    s(a.kg) && (b = a.kg(b));
    a.coords = Array(a.Tc.length);
    for (var c = 0; c < a.Tc.length; c++)
        a.coords[c] = (a.Jh[c] - a.Tc[c]) * b + a.Tc[c]
};
zi.prototype.Ee = function() {
    this.ba("animate")
};
zi.prototype.ba = function(a) {
    this.dispatchEvent(new Bi(a, this))
};
var Bi = function(a, b) {
    xc.call(this, a);
    this.coords = b.coords;
    this.x = b.coords[0];
    this.y = b.coords[1];
    this.z = b.coords[2];
    this.duration = b.duration;
    this.oa = b.oa;
    this.state = b.k
};
x(Bi, xc);
var Ci = function(a, b, c, d, e) {
    zi.call(this, b, c, d, e);
    this.element = a
};
x(Ci, zi);
g = Ci.prototype;
g.Od = ba;
g.pg = function() {
    m(this.ac) || (this.ac = "rtl" == lf(this.element, "direction"));
    return this.ac
};
g.Ee = function() {
    this.Od();
    Ci.j.Ee.call(this)
};
g.Hc = function() {
    this.Od();
    Ci.j.Hc.call(this)
};
g.yd = function() {
    this.Od();
    Ci.j.yd.call(this)
};
var Di = function(a, b, c, d, e) {
    if (2 != b.length || 2 != c.length)
        throw Error("Start and end points must be 2D");
    Ci.apply(this, arguments)
};
x(Di, Ci);
Di.prototype.Od = function() {
    var a = this.Ih && this.pg() ? "right": "left";
    this.element.style[a] = Math.round(this.coords[0]) + "px";
    this.element.style.top = Math.round(this.coords[1]) + "px"
};
var Ei = function(a) {
    return 1 - Math.pow(1 - a, 3)
};
var Fi;
var Gi = function(a) {
    N.call(this);
    this.o = a;
    a = E ? "focusout" : "blur";
    this.Og = L(this.o, E ? "focusin" : "focus", this, !E);
    this.Pg = L(this.o, a, this, !E)
};
x(Gi, N);
Gi.prototype.handleEvent = function(a) {
    var b = new Bc(a.pa());
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    this.dispatchEvent(b)
};
Gi.prototype.i = function() {
    Gi.j.i.call(this);
    M(this.Og);
    M(this.Pg);
    delete this.o
};
var Hi = function() {};
Hi.getInstance = function() {
    return Hi.rg ? Hi.rg : Hi.rg = new Hi
};
Hi.prototype.Gh = 0;
var Ji = function(a) {
    N.call(this);
    this.ed = a || Gb();
    this.ac = Ii;
    this.da = null;
    this.Ga=!1;
    this.o = null;
    this.kb = void 0;
    this.qd = this.rd = this.A = null;
    this.yg=!1
};
x(Ji, N);
Ji.prototype.Fh = Hi.getInstance();
var Ii = null;
g = Ji.prototype;
g.pe = function() {
    return this.da || (this.da = ":" + (this.Fh.Gh++).toString(36))
};
g.$ = function() {
    return this.o
};
g.ne = function() {
    this.kb || (this.kb = new Ad(this));
    return this.kb
};
g.getParent = function() {
    return this.A
};
g.Ie = function(a) {
    if (this.A && this.A != a)
        throw Error("Method not supported");
    Ji.j.Ie.call(this, a)
};
g.W = function() {
    return this.ed
};
g.Hb = function() {
    this.o = this.ed.createElement("div")
};
g.cd = function() {
    this.Ga=!0;
    Ki(this, function(a) {
        !a.Ga && a.$() && a.cd()
    })
};
g.Jb = function() {
    Ki(this, function(a) {
        a.Ga && a.Jb()
    });
    this.kb && this.kb.Ob();
    this.Ga=!1
};
g.i = function() {
    this.Ga && this.Jb();
    this.kb && (this.kb.gb(), delete this.kb);
    Ki(this, function(a) {
        a.gb()
    });
    !this.yg && this.o && I(this.o);
    this.A = this.o = this.qd = this.rd = null;
    Ji.j.i.call(this)
};
g.pg = function() {
    null == this.ac && (this.ac = "rtl" == lf(this.Ga ? this.o : this.ed.V.body, "direction"));
    return this.ac
};
var Ki = function(a, b) {
    a.rd && B(a.rd, b, void 0)
};
Ji.prototype.removeChild = function(a, b) {
    if (a) {
        var c = q(a) ? a: a.pe(), d;
        this.qd && c ? (d = this.qd, d = (c in d ? d[c] : void 0) || null) : d = null;
        a = d;
        if (c && a) {
            d = this.qd;
            c in d && delete d[c];
            Wa(this.rd, a);
            b && (a.Jb(), a.o && I(a.o));
            c = a;
            if (null == c)
                throw Error("Unable to set parent component");
            c.A = null;
            Ji.j.Ie.call(c, null)
        }
    }
    if (!a)
        throw Error("Child is not in parent component");
    return a
};
var Li = function(a, b) {
    Ji.call(this, b);
    this.Ng=!!a;
    this.Yb = null
};
x(Li, Ji);
g = Li.prototype;
g.we = null;
g.Ad=!1;
g.Y = null;
g.U = null;
g.Da = null;
g.ig=!1;
g.Hb = function() {
    Li.j.Hb.call(this);
    var a = this.$(), b = ra("goog-modalpopup").split(" ");
    Dg(a, b);
    Rb(a, !0);
    R(a, !1);
    this.Ng&&!this.U && (this.U = this.W().Hb("iframe", {
        frameborder: 0,
        style: "border:0;vertical-align:bottom;",
        src: 'javascript:""'
    }), this.U.className = "goog-modalpopup-bg", R(this.U, !1), yf(this.U, 0));
    this.Y || (this.Y = this.W().Hb("div", "goog-modalpopup-bg"), R(this.Y, !1));
    this.Da || (this.Da = this.W().createElement("span"), R(this.Da, !1), Rb(this.Da, !0), this.Da.style.position = "absolute")
};
g.cd = function() {
    if (this.U) {
        var a = this.$();
        a.parentNode && a.parentNode.insertBefore(this.U, a)
    }
    a = this.$();
    a.parentNode && a.parentNode.insertBefore(this.Y, a);
    Li.j.cd.call(this);
    a = this.$();
    a.parentNode && a.parentNode.insertBefore(this.Da, a.nextSibling);
    this.we = new Gi(Tb(this.W()));
    this.ne().tb(this.we, "focusin", this.Lg);
    Mi(this, !1)
};
g.Jb = function() {
    this.Gf() && this.ef(!1);
    K(this.we);
    Li.j.Jb.call(this);
    I(this.U);
    I(this.Y);
    I(this.Da)
};
g.ef = function(a) {
    a != this.Ad && (this.Sb && this.Sb.stop(), this.Ac && this.Ac.stop(), this.Pb && this.Pb.stop(), this.wc && this.wc.stop(), this.Ga && Mi(this, a), a ? this.sh() : this.rh())
};
var Mi = function(a, b) {
    if (b) {
        a.fc || (a.fc = []);
        for (var c = a.W(), c = Vb(c.V.body), d = 0; d < c.length; d++) {
            var e = c[d], f;
            if (f = e != a.o)
                f = e.getAttribute("aria-hidden"), f=!(null == f || void 0 == f ? 0 : String(f));
            if (f) {
                f = e;
                var h=!0;
                n(h) && (h = h.join(" "));
                "" === h || void 0 == h ? (Fi || (Fi = {
                    atomic: !1,
                    autocomplete: "none",
                    dropeffect: "none",
                    haspopup: !1,
                    live: "off",
                    multiline: !1,
                    multiselectable: !1,
                    orientation: "vertical",
                    readonly: !1,
                    relevant: "additions text",
                    required: !1,
                    sort: "none",
                    busy: !1,
                    disabled: !1,
                    hidden: !1,
                    invalid: "false"
                }), h = Fi, "hidden"in
                h ? f.setAttribute("aria-hidden", h.hidden) : f.removeAttribute("aria-hidden")) : f.setAttribute("aria-hidden", h);
                a.fc.push(e)
            }
        }
    } else if (a.fc) {
        for (d = 0; d < a.fc.length; d++)
            a.fc[d].removeAttribute("aria-hidden");
        a.fc = null
    }
};
Li.prototype.sh = function() {
    if (this.dispatchEvent("beforeshow")) {
        try {
            this.Yb = Tb(this.W()).activeElement
        } catch (a) {}
        this.Ce();
        this.jh();
        this.ne().tb(this.W().$a(), "resize", this.Ce);
        Ni(this, !0);
        this.focus();
        this.Ad=!0;
        this.Sb && this.Ac ? (Tc(this.Sb, "end", this.Sf, !1, this), this.Ac.play(), this.Sb.play()) : this.Sf()
    }
};
Li.prototype.rh = function() {
    if (this.dispatchEvent("beforehide")) {
        this.ne().Vb(this.W().$a(), "resize", this.Ce);
        this.Ad=!1;
        this.Pb && this.wc ? (Tc(this.Pb, "end", this.Lf, !1, this), this.wc.play(), this.Pb.play()) : this.Lf();
        t:
        {
            try {
                var a = this.W(), b = a.V.body, c = a.V.activeElement || b;
                if (!this.Yb || this.Yb == b) {
                    this.Yb = null;
                    break t
                }(c == b || a.contains(this.$(), c)) && this.Yb.focus()
            } catch (d) {}
            this.Yb = null
        }
    }
};
var Ni = function(a, b) {
    a.U && R(a.U, b);
    a.Y && R(a.Y, b);
    R(a.$(), b);
    R(a.Da, b)
};
g = Li.prototype;
g.Sf = function() {
    this.dispatchEvent("show")
};
g.Lf = function() {
    Ni(this, !1);
    this.dispatchEvent("hide")
};
g.Gf = function() {
    return this.Ad
};
g.focus = function() {
    this.jg()
};
g.Ce = function() {
    this.U && R(this.U, !1);
    this.Y && R(this.Y, !1);
    var a = Tb(this.W()), b = Kb((a ? Lb(a) : window) || window), c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth)), a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
    this.U && (R(this.U, !0), vf(this.U, c, a));
    this.Y && (R(this.Y, !0), vf(this.Y, c, a))
};
g.jh = function() {
    var a = Tb(this.W()), b = (a ? Lb(a) : window) || window;
    if ("fixed" == mf(this.$()))
        var c = a = 0;
    else 
        c = Ub(this.W()), a = c.x, c = c.y;
    var d = xf(this.$()), b = Kb(b), a = Math.max(a + b.width / 2 - d.width / 2, 0), c = Math.max(c + b.height / 2 - d.height / 2, 0);
    of(this.$(), a, c);
    of(this.Da, a, c)
};
g.Lg = function(a) {
    this.ig ? this.ig=!1 : a.target == this.Da && yd(this.jg, 0, this)
};
g.jg = function() {
    try {
        E && Tb(this.W()).body.focus(), this.$().focus()
    } catch (a) {}
};
g.i = function() {
    K(this.Sb);
    this.Sb = null;
    K(this.Pb);
    this.Pb = null;
    K(this.Ac);
    this.Ac = null;
    K(this.wc);
    this.wc = null;
    Li.j.i.call(this)
};
var Oi = function(a, b, c, d, e) {
    this.l = a;
    this.C = b;
    this.M = c.clone();
    this.Yd = Kb(this.C);
    this.Jg = d;
    this.lc = e;
    this.nc = [];
    this.n = new Df;
    this.sg = 300;
    this.X = this.rb = this.Ja = null
}, Pi = function(a) {
    a = a.C;
    return U() ? new D(a.innerWidth, a.innerHeight) : Kb(a)
}, Qi = function(a, b, c, d) {
    var e = Math.round(d.width / 2 - c.width / 2);
    d = Math.round(d.height / 2 - c.height / 2);
    Gf(a.n, a.l, "left", 0);
    Gf(a.n, a.l, "top", 0);
    var f = Math.floor(a.M.width / 2 - c.width / 2);
    a = Math.floor(a.M.height / 2 - c.height / 2 + 21);
    e = Math.max(0, e - f) + f;
    d = Math.max(0, d - a) + a;
    U() ?
    (e -= b.x, b = d - b.y) : b = d;
    return new C(e, b)
}, Ri = function(a) {
    t: {
        a = a.l;
        var b;
        if (Db&&!(E && H("9")&&!H("10") && l.SVGElement && a instanceof l.SVGElement) && (b = a.parentElement)) {
            a = b;
            break t
        }
        b = a.parentNode;
        a = ea(b) && 1 == b.nodeType ? b : null
    }
    return uf(a)
};
Oi.prototype.Ug = function() {
    var a = Kb(this.C), b = this.Yd;
    b == a || b && a && b.width == a.width && b.height == a.height || (this.Yd = a, this.Q() && (a = Ri(this), a = Qi(this, a, this.M, Pi(this)), Hf(this.n, this.l, "left", a.x, "important"), Hf(this.n, this.l, "top", a.y, "important"), Si(this, a.x, a.y)))
};
Oi.prototype.Q = function() {
    return null != this.Ja && this.Ja.Gf()
};
var Ti = function(a) {
    a.rb && 1 == a.rb.k && (Vc(a.rb), a.rb.stop());
    B(a.nc, function(a) {
        M(a)
    }, a);
    a.nc = [];
    if (a.Q()) {
        a.Ja.Jb();
        var b = a.Ja.o;
        b && a.C.document.body.removeChild(b)
    }
    a.X && I(a.X);
    Jf(a.n)
};
Oi.prototype.ff = function() {
    this.lc()
};
Oi.prototype.hf = function(a) {
    var b = U() ? pf(this.l): uf(this.l), c = b.x - (Math.floor(this.M.width / 2) - Math.floor(a.width / 2));
    a = b.y - (Math.floor(this.M.height / 2) - Math.floor(a.height / 2));
    Hf(this.n, this.l, "width", this.M.width, "important");
    Hf(this.n, this.l, "height", this.M.height, "important");
    Hf(this.n, this.l, "left", c, "important");
    Hf(this.n, this.l, "top", a, "important");
    Si(this, c, a);
    (U() || V("recenter_on_resize")) && this.nc.push(L(this.C, "resize", this.Ug, !1, this));
    s(this.C.document.elementFromPoint) && (c = uf(this.l),
    a = xf(this.l), this.C.document.elementFromPoint(c.x + a.width / 2, c.y + a.height / 2) != this.l && Qf("lightbox-behind-content", {
        url: this.C.document.location.href
    }));
    this.Jg()
};
var Si = function(a, b, c) {
    if (!a.X) {
        var d = z.location.protocol;
        a.X = a.C.document.createElement("img");
        a.X.src = [d, "//pagead2.googlesyndication.com/pagead/bf/images/close_circle.png"].join("");
        a.X.style.outline = "none";
        a.X.style.zIndex = 1E6;
        a.X.style.width = "42px";
        a.X.style.height = "42px";
        a.nc.push(L(a.X, "click", a.ff, !1, a));
        a.l.parentNode.insertBefore(a.X, a.l)
    }
    b = b + a.M.width - 21;
    c -= 21;
    a.X.style.position = mf(a.l);
    of(a.X, b, c);
    R(a.X, !0)
};
var Ui = function() {
    J.call(this);
    this.ua = null
};
x(Ui, J);
Ui.prototype.i = function() {
    I(this.ua);
    this.ua = null;
    Ui.j.i.call(this)
};
Ui.prototype.show = function(a, b) {
    this.ua || (this.ua = y.createElement("div"), y.body.appendChild(this.ua));
    Q(this.ua, {
        visibility: "visible",
        opacity: .7,
        "pointer-events": "none",
        backgroundColor: "#333",
        color: "#fff",
        font: "bold 26px Arial",
        textAlign: "center",
        position: "absolute",
        display: (bg || ag || eg || cg)&&!H(537) ? "-webkit-box": G ? "-webkit-flex": F&&!H(22) ? "-moz-flex": "flex",
        left: 0,
        top: 0,
        zIndex: 999999,
        transition: "",
        "-moz-justify-content": "center",
        "-moz-align-items": "center",
        "-webkit-justify-content": "center",
        "-webkit-align-items": "center",
        "justify-content": "center",
        "align-items": "center",
        "-webkit-box-align": "center"
    });
    vf(this.ua, a);
    Qb(this.ua, b);
    Ef(this.ua)
};
y && y.URL && (Wb=!Na(y.URL));
var Vi = function(a, b) {
    this.ta = a || 0;
    this.ia = b || ""
};
Vi.prototype.match = function(a) {
    return (this.ta || this.ia) && (a.ta || a.ia) ? this.ia || a.ia ? this.ia == a.ia : this.ta || a.ta ? this.ta == a.ta : !1 : !1
};
Vi.prototype.toString = function() {
    var a = "" + this.ta;
    this.ia && (a += "-" + this.ia);
    return a
};
var Wi = function(a) {
    var b = [];
    ab(a, function(a, d) {
        var e = La(d), f = a;
        q(f) && (f = La(f));
        b.push(e + "=" + f)
    });
    return b.join("\n")
}, Xi = 0, Yi = 0, Zi = function() {
    var a = 0, b = z;
    if (b && b.Goog_AdSense_getAdAdapterInstance)
        return b;
    try {
        for (; b && 5 > a;) {
            if (b.google_osd_static_frame)
                return b;
            a++;
            b = b != b.parent ? b.parent : null
        }
    } catch (c) {}
    return null
}, $i = function(a, b, c, d) {
    if (10 < Yi)
        z.clearInterval(Xi);
    else if (++Yi, z.postMessage && (b.ta || b.ia)) {
        var e = Zi();
        if (e) {
            var f = {};
            b.ta && (f[4] = b.ta);
            b.ia && (f[12] = b.ia);
            f[0] = "goog_request_monitoring";
            f[6] = a;
            f[16] = c;
            d && d.length && (f[17] = d.join(","));
            try {
                var h = Wi(f);
                e.postMessage(h, "*")
            } catch (k) {}
        }
    }
};
var aj = function(a, b, c) {
    if (c.data) {
        var d = c.data;
        if (q(d)) {
            c = {};
            for (var d = d.split("\n"), e = 0; e < d.length; e++) {
                var f = d[e].indexOf("=");
                if (!(0 >= f)) {
                    var h = Number(d[e].substr(0, f)), f = d[e].substr(f + 1);
                    switch (h) {
                    case 5:
                    case 8:
                    case 11:
                    case 15:
                    case 16:
                        f = "true" == f;
                        break;
                    case 4:
                    case 7:
                    case 6:
                    case 14:
                        f = Number(f);
                        break;
                    case 3:
                        if (s(decodeURIComponent))
                            try {
                                f = decodeURIComponent(f)
                            } catch (k) {
                            throw Error("Error: URI malformed: " + f);
                        }
                        break;
                    case 17:
                        f = Ta(decodeURIComponent(f).split(","), Number)
                    }
                    c[h] = f
                }
            }
            c = c[0] ? c : null
        } else 
            c =
            null;
        if (c && (d = new Vi(c[4], c[12]), a && a.match(d) && "goog_update_data" == c[0])) {
            a = {
                Zb: c[7]
            };
            if (c = c[9])
                c = c.split("-"), 4 == c.length && (a.nb = new hf(Ca(c[0]), Ca(c[3]), Ca(c[2]), Ca(c[1])));
            b(a)
        }
    }
};
var Z = function() {
    N.call(this);
    this.jf = this.Q = this.Oa=!1;
    this.ae=!0;
    this.ce = new D(0, 0);
    this.he = this.de = this.lc = this.fe = null;
    this.kf = new hf(0, 0, 0, 0);
    this.M = new D(0, 0);
    this.u = new D(0, 0);
    this.Xd = null;
    this.bb = 0;
    this.za = this.H = null;
    this.oc=!1;
    this.Ha = bj || (bj = new Wh);
    this.wg = new Sh(this.Ha);
    this.fb = new ti(this.Ha);
    this.sc = 0;
    this.ha = this.kd = null;
    this.Kb = new Tg;
    this.Ha.Kb = this.Kb;
    this.sb = new Zg;
    this.O = null;
    this.dd = new P;
    var a = t(this.xg, this), b = /[&\?]exk=([^& ]+)/.exec(z.location.href), b = new Vi(T().AD_KEY ||
    0, b && 2 == b.length ? b[1] : null);
    if (b.ta || b.ia)
        a = ma(aj, b, a), z.addEventListener ? z.addEventListener("message", a, !1) : z.attachEvent && z.attachEvent("onmessage", a), Xi = z.setInterval(cc(ma($i, 2, b, void 0, void 0)), 500);
    this.Nb = this.Ib = null;
    this.ge = new Ui;
    vc(this, ma(K, this.ge))
}, cj, dj, ej;
x(Z, N);
Z.prototype.i = function() {
    wc(this.H, this.ha, this.Ib);
    this.Ib = this.O = this.ha = this.H = null;
    this.dd = new P;
    Z.j.i.call(this)
};
var bj = null;
Z.prototype.ah = function() {
    V("report_page_unload") && vg(this, Tc(z, "beforeunload", t(this.Df, this, {
        unload: !0
    }), !0, this))
};
Z.prototype.Df = function(a) {
    if (this.isExpanded() && this.fb) {
        var b = this.fb;
        a = a || {};
        a.engend=!0;
        b.Ab(10010, a)
    }
};
var fj = function(a) {
    if (G && 1 == a.bb) {
        a.Nb = y.createElement("div");
        a.Nb.id = "inframe-close-button";
        var b = Math.floor(21);
        Q(a.Nb, {
            position: "absolute",
            top: "0",
            right: "0",
            height: S(b),
            width: S(b),
            zIndex: 999999,
            backgroundColor: "transparent !important",
            display: "none"
        });
        y.body.appendChild(a.Nb)
    }
}, gj = function(a, b) {
    null != a.Nb && Q(a.Nb, {
        display: b ? "block": "none"
    })
};
Z.prototype.instantlyResizeWindow = function(a, b) {
    hj(this, function() {
        if (T().ALLOW_INSTANT_RESIZING) {
            if (!this.isExpanded() && 0 <= a && 0 <= b) {
                var c = new D(a, b);
                ij(this, ["resize_w", c.width, "_h", c.height].join(""))
            }
        } else 
            jj(this, "illegal_instant_resizing", {
                resizew: a,
                resizeh: b
            })
    }, this)
};
Z.prototype.getMaxExpandableSize = function(a) {
    this.za ? le(this.za, a) : (this.za = new P, le(this.za, a), ij(this, "maxsize") || (this.Dd=!0))
};
var kj = function(a) {
    var b = a.width, c = a.height, d = a.expansionCallback, e = a.collapseCallback, f = a.initiateCollapseCallback, h = a.expansionImminentCallback;
    h && Pf("ct-info", "exp-imm-used", void 0, void 0);
    h = a.aboutToExpandCallback || h;
    a = a.expansionMode;
    b = Ja(b) && Ja(c);
    d = s(d) && s(e) && Ka(f) && Ka(h);
    d = b && d;
    if ("undefined" !== typeof a) {
        if (!r(a) || 0 > a || 2 <= a)
            d=!1;
        1 !== a || f || (d=!1)
    }
    return d
}, hj = function(a, b, c) {
    le(a.dd, t(b, c));
    !a.dd.qa && a.dd.ga()
}, lj = function(a, b) {
    a.Oa=!0;
    if (!b)
        return a.Oa=!1, a.Oa;
    a.Oa = kj(b);
    if (a.Oa) {
        a.ce = new D(b.width,
        b.height);
        a.M = a.ce.clone();
        a.fe = b.expansionCallback;
        a.lc = b.collapseCallback;
        a.de = s(b.initiateCollapseCallback) ? b.initiateCollapseCallback : null;
        var c = b.aboutToExpandCallback || b.expansionImminentCallback;
        a.he = s(c) ? c : null;
        a.bb = b.expansionMode || 0;
        1 === a.bb && a.shouldMaintainCoordinates(!1);
        hj(a, a.$g, a);
        fj(a);
        s(b.toolsetReadyCallback) && hj(a, b.toolsetReadyCallback);
        a.oc || hj(a, function() {
            this.Ib = new Ng;
            vc(this, ma(K, this.Ib))
        }, a);
        hj(a, a.ah, a)
    }
    return a.Oa
};
Z.prototype.$g = function() {
    var a = T();
    this.oc ? this.H = new Ah : (this.H = mj(this, a.ENGAGEMENT_NOTIFIER, a.EXPANSION_TEXT), U() && (a.ENGAGEMENT_BORDER_WIDTH || V("1-point-5-click")) && (this.sc = a.ENGAGEMENT_BORDER_WIDTH || 35, this.ha = mj(this, a.CENTER_ENGAGEMENT_NOTIFIER || "InstantlyEngage", a.CENTER_EXPANSION_TEXT), a = Kb(), this.kf = new hf(this.sc, a.width - this.sc, a.height - this.sc, this.sc), wg("touchstart", this.qh, !1, this)), L(this.H, "removed", this.Yf, !1, this), null === this.ha || L(this.ha, "removed", this.Yf, !1, this))
};
var mj = function(a, b, c) {
    var d = T(), e = d.ENGAGEMENT_DELAY_MS;
    if (!e || 0 > e)
        e = 2E3;
    var f = d.NOTIFIER_ANIMATION_MS;
    if (!f || 0 > f)
        f = null;
    var h = V("delay_after_notifier_finishes");
    !f && h && (f = e, e += 200);
    h = d.ABOUT_TO_EXPAND_TIME_LEFT_MS;
    if (!h || 0 >= h || h >= e)
        h = 500;
    e = {
        D: b,
        jd: c,
        mf: e,
        zg: h,
        Ag: f,
        Cg: a.Kb,
        Bg: a.sb,
        Ha: a.Ha
    };
    switch (b) {
    case "NoOp":
        return new Ah;
    case "InstantlyEngage":
        return new yh(e);
    case "NeverEngage":
        return new zh(e);
    case "DesktopProgressBarJS":
    case "DesktopProgressBarCSS3":
        return a = d.ENGAGEMENT_TYPE, m(a)&&-1 != a ?
        2 == a ? new xh(e) : 3 == a ? new mh(e) : new Hh(e) : new Hh(e);
    case "MobileProgressBarTapToCancel":
    case "MobileProgressBarTapToCancelCSS3":
    case "MobileProgressBarTapToExpand":
    case "MobileProgressBarTapToExpandCSS3":
        return new Ch(e);
    case "MobileTouchAgain":
        return new Rh(e);
    default:
        return mj(a, U() ? "MobileProgressBarTapToCancelCSS3" : "DesktopProgressBarCSS3", c)
    }
};
g = Z.prototype;
g.qh = function(a) {
    this.kd = uf(a)
};
g.getCollapsedHeight = function() {
    return this.u.height
};
g.getCollapsedWidth = function() {
    return this.u.width
};
g.gf = function() {
    return this.u.clone()
};
g.getExpandedHeight = function() {
    return this.M.height
};
g.getExpandedWidth = function() {
    return this.M.width
};
var nj = function(a, b) {
    a.M = b.clone()
};
Z.prototype.isExpanded = function() {
    return this.Q
};
Z.prototype.isExpansionEnabled = function() {
    return this.Oa
};
Z.prototype.shouldMaintainCoordinates = function(a) {
    this.ae = a
};
var oj = function(a) {
    return !a.Oa || a.Q || a.Za() || a.jf&&!U() && Zf?!1 : !0
}, rj = function(a, b) {
    if ("function" == typeof b) {
        var c = t(function() {
            this.dispatchEvent("expanding");
            b()
        }, a);
        if (oj(a)) {
            ch(a.sb, "expansion_requested");
            var d = t(function(a) {
                if (null != a) {
                    if (a.lightboxWidth < this.getExpandedWidth()) {
                        this.ge.show(this.u, "Zoom out for the full experience");
                        pj(this, {
                            overlay: !0,
                            maxw: a.lightboxWidth,
                            maxh: a.lightboxHeight
                        });
                        this.H && this.H.remove();
                        this.ha && this.ha.remove();
                        return 
                    }
                    a = this.ge;
                    a.ua && Q(a.ua, {
                        visibility: "hidden"
                    })
                }
                this.ha &&
                this.kf.contains(this.kd) ? this.O = this.ha : this.H && (this.O = this.H, this.ha&&!this.kd && (null.gi("1.5 click is enabled, but no touch coordinates being  sent from the creative iframe."), jj(this, "incompatible_with_1_point_5_click", {
                    studio: gg()
                })));
                null !== this.O && (this.Ha.H = this.O, this.O.start(c, t(this.Qg, this)))
            }, a);
            U() && 1 == a.bb ? a.getMaxExpandableSize(d) : d()
        }
    }
};
Z.prototype.Yf = function() {
    this.kd = null
};
var uj = function(a, b, c) {
    a.Q=!0;
    a.jf=!0;
    null === a.O || a.O.Pa(!0);
    a.ae && sj(a, b, c);
    gj(a, !0);
    tj();
    if (a.fb && a.O) {
        var d = a.O.pb();
        a.fb.Ab(d, {
            engstart: !0
        })
    }
    1 == a.bb && (d = t(function(a) {
        (a.lightboxWidth < b.width || a.lightboxHeight < b.height) && pj(this, {
            overlay: !1,
            maxw: a.lightboxWidth,
            maxh: a.lightboxHeight,
            bc: T().MOBILE_BROWSER_CLASS
        })
    }, a), a.getMaxExpandableSize(d));
    "function" == typeof a.fe && (a.fe(b.width, b.height, c), ch(a.sb, "expansion_completed"))
};
Z.prototype.Qg = function() {
    s(this.he) && this.he()
};
var tj = function() {
    var a = y.getElementById("abgc");
    a && R(a, !1);
    (a = y.getElementById("cbc")) && R(a, !1)
}, sj = function(a, b, c) {
    if (1 === a.bb) {
        var d = y.body;
        c = Math.round((b.width - a.u.width) / 2);
        0 < c && Q(d, "marginLeft", S(c));
        a = Math.round((b.height - a.u.height) / 2);
        0 < a && Q(d, "marginTop", S(a))
    } else {
        d = y.body;
        if (0 == c || 3 == c) {
            var e = b.width - a.u.width;
            0 < e && Q(d, "marginLeft", S(e))
        }
        if (0 == c || 1 == c)
            a = b.height - a.u.height, 0 < a && Q(d, "marginTop", S(a))
    }
};
Z.prototype.Za = function() {
    return !!this.O && this.O.Ud()
};
Z.prototype.reportEngagement = function(a, b) {
    this.fb && this.fb.Ab(a, b);
    switch (a) {
    case 10047:
        ch(this.sb, "creative_loaded");
        break;
    case 10048:
        ch(this.sb, "creative_rendered")
    }
};
Z.prototype.setChargeableAction = function(a) {
    this.fb.setChargeableAction(a)
};
var pj = function(a, b) {
    var c = {
        expandw: a.getExpandedWidth(),
        expandh: a.getExpandedHeight()
    };
    Ia(b, function(a, b) {
        c[b] = a
    });
    var d = T();
    m(d.EXPANSION_CLICK_INFO) && (c.ai = d.EXPANSION_CLICK_INFO);
    jj(a, "oversized_expansion", c)
}, jj = function(a, b, c) {
    c = fb(c || {});
    c.ee = a.isExpansionEnabled() ? 1 : 0;
    c.ie = a.isExpanded() ? 1 : 0;
    c.em = a.bb;
    c.p = a.oc ? 1 : 0;
    c.not = a.H && a.H.cc();
    a.ha && (c.not += "," + a.ha.cc());
    Qf(b, c)
};
Z.prototype.xg = function(a) {
    this.oc || (this.Ha.Zb = a.Zb, this.Ha.nb = a.nb || null);
    null != this.Ib && .9 <= a.Zb && this.Ib.Vf()
};
Z.prototype.getConfig = function() {
    return this.wg
};
Z.prototype.dispatchEvent = function(a) {
    return Z.j.dispatchEvent.call(this, a)
};
var wj = function() {
    if (cj&&!cj.Ka)
        return cj;
    Z.call(this);
    cj = this;
    this.m = null;
    this.Dd=!1;
    var a = y.URL;
    this.u = Kb(z).clone();
    a = vj(a);
    if (!m(a.cn)) {
        var b = Pa();
        b = b ? b.adUrl : void 0;
        (b = b || "") && (a = vj(b))
    }
    m(a.cn) && (this.m = new bf(a), vc(this, ma(K, this.m)), Ed(this.m, t(this.ye, this)), this.m.Rb(t(this.Zg, this)), window.setTimeout(t(this.xe, this), 3E4))
};
x(wj, Z);
wj.prototype.enableExpansion = function(a) {
    return lj(this, a)?!0 : !1
};
var vj = function(a) {
    var b;
    b = Mf(a, "xpc");
    a = Mf(a, "p");
    var c = {};
    c.cn = b;
    c.ph = a;
    c.ppu = Lf(a);
    c.lpu = Lf();
    return c
};
wj.prototype.xe = function() {
    if (this.m&&!this.m.La() && (this.m.gb(), this.m = null, jj(this, "xct-commTimeout"), this.Dd)) {
        var a = {
            lightboxWidth: 0,
            lightboxHeight: 0
        };
        this.za && (this.za.ga(a), this.za = null)
    }
};
wj.prototype.expandWindow = function(a, b) {
    if (oj(this)) {
        a && b && nj(this, new D(a, b));
        var c = this.M.clone(), d = ["expand_w", c.width, "_h", c.height, "_m", this.bb].join(""), c = t(function() {
            ij(this, d)
        }, this);
        rj(this, c)
    }
};
wj.prototype.collapseWindow = function() {
    this.Oa && this.Q && ij(this, "collapse")
};
var ij = function(a, b) {
    if (a.m && a.m.La())
        return a.m.send("expandable_ad", b), !0;
    jj(a, "xct-commError", {
        msg: b
    });
    return !1
};
wj.prototype.ye = function(a) {
    var b = a.split("_");
    if ("ok" === b[0]) {
        for (var c, d, e, f = new D(0, 0), h = 2; h < b.length; ++h) {
            var k = b[h].charAt(0), p = parseInt(b[h].substring(1), 10);
            "w" == k ? f.width = p : "h" == k ? f.height = p : "d" == k ? c = p : "i" == k ? d = p : "e" == k && (e = p)
        }
        "expand" == b[1] && Ja(f.width) && Ja(f.height) && r(c) && 0 <= c ? uj(this, f, c) : "collapse" == b[1] && Ja(f.width) && Ja(f.height) ? (ch(this.sb, "collapse_requested"), this.Df(), this.Q=!1, null === this.O || this.O.Pa(!1), this.ae && Q(y.body, {
            marginLeft: 0,
            marginTop: 0
        }), gj(this, !1), (a = y.getElementById("abgc")) &&
        R(a, !0), (a = y.getElementById("cbc")) && R(a, !0), this.dispatchEvent("collapsed"), nj(this, this.ce), "function" == typeof this.lc && (this.lc(f.width, f.height), ch(this.sb, "collapsed"))) : "resize" == b[1] && Ja(f.width) && Ja(f.height) ? this.u = f.clone() : "maxsize" == b[1] && r(d) && r(e) ? (f = {
            lightboxWidth: d,
            lightboxHeight: e
        }, this.za && (this.za.ga(f), this.za = null)) : "params" != b[1] && jj(this, "xct-badMsg", {
            Mg: a
        })
    } else 
        "initiateCollapse" === b[0] ? null !== this.O && this.Za() ? this.O.Pa(!1) : "function" === typeof this.de && this.de() : jj(this, "xct-badMsg",
        {
            Mg: a
        })
};
wj.prototype.Zg = function() {
    var a = gc(Nf());
    ij(this, "params_" + a);
    this.Dd&&!ij(this, "maxsize") && (this.Dd=!0)
};
wj.prototype.dispatchEvent = function(a) {
    var b = wj.j.dispatchEvent.call(this, a);
    ij(this, a);
    return b
};
(function(a) {
    function b() {
        if (cj&&!cj.Ka)
            return cj;
        a.call(this);
        cj = this;
        this.oc=!0;
        this.fb = null
    }
    x(b, a);
    v("CreativeToolset", a);
    v("CreativeToolset.prototype.collapseWindow", a.prototype.collapseWindow);
    v("CreativeToolset.prototype.enableExpansion", a.prototype.enableExpansion);
    v("CreativeToolset.prototype.expandWindow", a.prototype.expandWindow);
    v("CreativeToolset.prototype.instantlyResizeWindow", a.prototype.instantlyResizeWindow);
    v("CreativeToolset.prototype.getCollapsedHeight", a.prototype.getCollapsedHeight);
    v("CreativeToolset.prototype.getCollapsedWidth", a.prototype.getCollapsedWidth);
    v("CreativeToolset.prototype.getExpandedHeight", a.prototype.getExpandedHeight);
    v("CreativeToolset.prototype.getExpandedWidth", a.prototype.getExpandedWidth);
    v("CreativeToolset.prototype.getMaxExpandableSize", a.prototype.getMaxExpandableSize);
    v("CreativeToolset.prototype.isExpanded", a.prototype.isExpanded);
    v("CreativeToolset.prototype.isExpansionEnabled", a.prototype.isExpansionEnabled);
    v("CreativeToolset.prototype.shouldMaintainCoordinates",
    a.prototype.shouldMaintainCoordinates);
    v("CreativeToolset.prototype.reportEngagement", a.prototype.reportEngagement);
    v("CreativeToolset.prototype.setChargeableAction", a.prototype.setChargeableAction);
    v("CreativeToolset.prototype.getConfig", a.prototype.getConfig);
    v("CreativeToolsetProxy", b);
    v("CreativeToolsetProxy.prototype", CreativeToolset.prototype);
    v("CreativeToolset.BrowserClass.DESKTOP", 0);
    v("CreativeToolset.BrowserClass.MOBILE_WEB", 1);
    v("CreativeToolset.BrowserClass.IN_APP", 2);
    v("EngagementAction",
    Qg);
    v("CreativeToolset.EngagementAction", Qg);
    v("CreativeToolset.CatBoxEngagementAction", Rg);
    v("CreativeToolset.CatBoxEngagementParam", Og);
    v("CreativeToolset.CONVERSION_URL_PARAM", "ct_conv");
    v("CreativeToolset.ExpansionMode", Kf);
    var c = {
        currentState: 0,
        timestamp: u(),
        engagementCycle: 0,
        cycleWasCharged: !1
    };
    v("CreativeToolset.EngagementState", c);
    v("CreativeToolset.EngagementCycleParam", Pg);
    bj = new Wh;
    dj = a;
    ej = function() {
        return cj&&!cj.Ka ? cj : cj = new dj
    };
    v("CreativeToolset.getInstance", ej);
    c = new ti(bj);
    na(c);
    L(z, "load", function() {
        Y(new si, "199")
    });
    v("CreativeToolset.internals.creativeBodyRemoteEventSink", xg);
    v("CreativeToolset.internals.enableRemoteEvents", yg);
    Z.prototype.listen = Z.prototype.tb;
    Z.prototype.listenOnce = Z.prototype.Rd;
    Z.prototype.unlisten = Z.prototype.Vb;
    Z.prototype.unlistenByKey = Z.prototype.Fd
})(wj);
var xj = function(a, b, c, d, e) {
    this.Q=!1;
    this.yf = a;
    this.C = d;
    this.Ff = e;
    this.Rg = b;
    this.u = c.clone();
    this.n = new Df;
    this.pc = null;
    this.fd = this.u.clone();
    this.Zd = this.gd = null
};
g = xj.prototype;
g.Ud = function() {
    return this.Za
};
g.isExpanded = function() {
    return this.Q
};
g.gf = function() {
    return this.u.clone()
};
g.pe = function() {
    return this.yf
};
g.Gc = function() {
    return this.Rg
};
g.collapse = function() {
    yj(this) && (this.pc && (Ti(this.pc), this.pc = null), Jf(this.n), this.Za = this.Q=!1)
};
var zj = function(a, b, c) {
    Hf(a.n, b, "width", c.width);
    Hf(a.n, b, "height", c.height);
    If(a.n, b)
}, Aj = function(a) {
    var b = [], c = yj(a);
    if (!c)
        return b;
    b.push(c);
    a.C && a.Ff && b.push(a.C.document.getElementById(a.Ff));
    return b
};
xj.prototype.expand = function(a, b) {
    var c = Aj(this);
    if (!(0 >= c.length)) {
        for (var d = 0, e = c.length; d < e; ++d)
            zj(this, c[d], a);
        c = c[c.length - 1];
        a.width > this.u.width && (0 == b || 3 == b) && Hf(this.n, c, "left", this.u.width - a.width);
        a.height > this.u.height && (1 == b || 0 == b) && Hf(this.n, c, "top", this.u.height - a.height);
        Bj(this, c, !1);
        this.Q=!0
    }
};
var Cj = function(a) {
    return !!a && "ins" == a.nodeName.toLowerCase()
};
xj.prototype.resize = function(a) {
    var b = Aj(this);
    if (!(0 >= b.length)) {
        for (var c = b.length, d = 0; d < c; ++d)
            vf(b[d], a);
        b = b[c - 1].parentNode;
        c = b.parentNode;
        d = c.parentNode;
        Cj(b) && c && Cj(c) && (vf(b, a), vf(c, a), d && d && Cj(d) && Bg(d, "adsbygoogle") && vf(d, a))
    }
};
xj.prototype.ug = function() {
    if (this.Za) {
        this.Q=!0;
        this.Za=!1;
        var a = Aj(this);
        1 < a.length && zj(this, a[0], this.fd);
        this.gd && (this.gd(), this.gd = null)
    }
};
xj.prototype.tg = function() {
    this.Q || this.collapse();
    this.Zd && this.Zd()
};
var Bj = function(a, b, c) {
    b = b.parentNode;
    var d = b.parentNode, e = d.parentNode, f = b;
    Cj(b) && d && Cj(d) && (f = d.parentNode, e && Cj(e) && Bg(e, "adsbygoogle") && (f = e.parentNode), c || (If(a.n, b), If(a.n, d), f == e.parentNode && If(a.n, e)));
    for (b = f; b && b.style && "body" != b.nodeName.toLowerCase(); b = b.parentNode)
        c&&!U() || "visible" == b.style.overflow || Gf(a.n, b, "overflow", "visible"), c && (e = b, d = mf(e), e = lf(e, "zIndex"), "static" != d && "auto" != e && Gf(a.n, b, "zIndex", "auto", "important"))
}, yj = function(a) {
    a.l || (a.l = y.getElementById(a.yf));
    return a.l
};
var $ = function(a, b) {
    N.call(this);
    this.ya = a;
    this.Vg = b;
    var c;
    t: {
        c = a.Gc();
        var d;
        try {
            var e = c, f = y.URL;
            f instanceof Qd || (f = be(f));
            e instanceof Qd || (e = be(e));
            d = f.resolve(e)
        } catch (h) {
            f = c.indexOf("//");
            d = c.substring(0, f);
            d = (e = 0 <= f && (0 == f || ":" == c.charAt(f - 1))) && 0 < f ? d : y.location.protocol;
            c = e ? c.substring(f + 2) : y.location.host;
            f = c.indexOf("/");
            0 > f && (f = c.indexOf("?"));
            e && 0 < f && (c = c.substring(0, f));
            c = d + "//" + c;
            break t
        }
        c = d.Ua + "://" + d.Ea;
        null != d.lb && (c += ":" + d.lb)
    }
    this.oe = c;
    c = this.ya;
    d = {};
    d.ifrid = c.pe();
    d.pu = c.Gc();
    d.cn =
    this.Vg;
    d.ppu = Lf(this.oe);
    d.lpu = Lf();
    this.m = new bf(d);
    Ed(this.m, t(this.ye, this));
    this.Hf();
    yd(this.xe, 3E4, this)
};
x($, N);
$.prototype.Hf = function() {
    if (this.m)
        try {
            this.m.Rb()
    } catch (a) {
        yd(this.Hf, 10, this)
    }
};
$.prototype.xe = function() {
    this.m&&!this.m.La() && (this.m.G.Rb = function() {}, 1 == this.m.G.Sc && (this.m.G.ii = function() {}), 4 == this.m.G.Sc && (this.m.G.hi = function() {}), this.m.G.gb(), this.m.gb())
};
$.prototype.ye = function(a) {
    var b = a.split("_"), c = b[0];
    switch (c) {
    case "expand":
        if (!this.ya.isExpanded()) {
            a = new D(0, 0);
            for (var d = c = 0; d < b.length; ++d) {
                var e = b[d].charAt(0);
                "w" == e ? a.width = parseInt(b[d].substring(1), 10) : "h" == e ? a.height = parseInt(b[d].substring(1), 10) : "m" == e && (c = parseInt(b[d].substring(1), 10))
            }
            var b = this.ya, d = Aj(b), e = uf(d[d.length - 1]), f = Kb(b.C || z), d = e.y, h = f.height - (e.y + b.u.height), d = a.height - b.u.height > d || h >= d, h = e.x, e = f.width - (e.x + b.u.width), b = a.width - b.u.width > h || e >= h, e = 2;
            d&&!b ? e = 3 : !d && b ?
            e = 1 : d || b || (e = 0);
            b = e;
            this.hd = "ok_expand_w" + a.width + "_h" + a.height + "_d" + b;
            if (0 === c)
                this.ya.expand(a, b), this.be();
            else if (1 === c && (c = this.ya, b = t(this.be, this), d = t(this.vg, this), !(c.Za || c.Q || (c.Za=!0, e = Aj(c), 0 >= e.length)))) {
                e = e[e.length - 1];
                f = c.C || z;
                c.gd = b;
                c.Zd = d;
                c.fd = a.clone();
                c.pc = new Oi(e, f, c.fd, t(c.ug, c), t(c.tg, c));
                Bj(c, e, !0);
                a = c.pc;
                a.Ja = new Li(!1, new Eb(a.C.document));
                c = a.Ja;
                b = a.C.document.body;
                if (c.Ga)
                    throw Error("Component already rendered");
                c.o || c.Hb();
                b ? b.insertBefore(c.o, null) : c.ed.V.body.appendChild(c.o);
                c.A&&!c.A.Ga || c.cd();
                (c = a.Ja.o) && Rb(c, !1);
                c = a.Ja.Y;
                b = c.style;
                b.position = "absolute";
                b.left = 0;
                b.top = 0;
                b.background = "#666";
                b.outline = "none";
                yf(c, .7);
                b.zIndex = 999998;
                a.nc.push(L(c, "click", a.ff, !1, a));
                If(a.n, a.l);
                a.Ja.ef(!0);
                Q(a.l, "outline", "none");
                e = Ri(a);
                c = xf(a.l);
                Hf(a.n, a.l, "width", c.width, "important");
                Hf(a.n, a.l, "height", c.height, "important");
                b = Qi(a, e, c, Pi(a));
                a.Yd = Kb(a.C);
                U() ? (e = d = 0, Gf(a.n, a.l, "position", "absolute", "important"), a.l.parentNode && Gf(a.n, a.l.parentNode, "position", "relative", "important")) :
                (d = e.x, e = e.y, Gf(a.n, a.l, "position", "fixed", "important"));
                t:
                {
                    f = Nf();
                    if (null == f.SAMPLE_VIEWPORT_SIZES) {
                        if (U()&&!Ma(.05) ||!U()&&!Ma(.01))
                            break t
                    } else if (!f.SAMPLE_VIEWPORT_SIZES)
                        break t;
                    f = Kb(a.C);
                    h = Pi(a);
                    Pf("ct-info", "viewport", {
                        event: "lbstart",
                        ew: a.M.width,
                        eh: a.M.height,
                        lw: f.width,
                        lh: f.height,
                        vw: h.width,
                        vh: h.height
                    }, 1)
                }
                V("no_expansion_animation") ? (Hf(a.n, a.l, "left", b.x, "important"), Hf(a.n, a.l, "top", b.y, "important"), a.hf(c)) : (a.rb = new Di(a.l, [d, e], [b.x, b.y], a.sg, Ei), L(a.rb, "end", t(a.hf, a, c), !1), a.rb.play())
            }
        }
        break;
    case "collapse":
        this.ya.isExpanded() && (this.ya.collapse(), a = this.ya.gf(), Dj(this, "ok_collapse_w" + a.width + "_h" + a.height));
        break;
    case "resize":
        a = new D(0, 0);
        for (c = 0; c < b.length; ++c)
            d = b[c].charAt(0), "w" == d ? a.width = parseInt(b[c].substring(1), 10) : "h" == d && (a.height = parseInt(b[c].substring(1), 10));
        this.hd = "ok_resize_w" + a.width + "_h" + a.height;
        this.ya.resize(a);
        this.be();
        break;
    case "maxsize":
        a = this.ya;
        a.isExpanded() ? a = a.fd : (a = a.C || z, a = U() ? new D(a.innerWidth, a.innerHeight) : Kb(a), c = Math.floor(.9 * a.width) - 42, b =
        Math.floor(.8 * a.height) - 42, 0 > c && (c = 0), 0 > b && (b = 0), c = new D(c, b), U() && 310 <= a.width && (c.width = Math.max(c.width, 300)), a = c);
        Dj(this, "ok_maxsize_i" + a.width + "_e" + a.height);
        break;
    case "params":
        z.CREATIVE_TOOLSET_PARAMS = dc(a.substr(7));
        Dj(this, "ok_params");
        break;
    case "expanding":
    case "collapsed":
        this.dispatchEvent(c)
    }
};
var Dj = function(a, b) {
    a.m.send("expandable_ad", b)
};
$.prototype.be = function() {
    this.hd && (Dj(this, this.hd), this.hd = null)
};
$.prototype.vg = function() {
    Dj(this, "initiateCollapse")
};
v("ExpandableAdSlotFactory.createIframeFromWindow", function(a) {
    var b = a.google_frame_id;
    b || (b = "google_frame_" + Math.floor(2147483647 * Math.random()));
    var c = Ej(b, a.google_ad_url, parseInt(a.google_ad_width, 10), parseInt(a.google_ad_height, 10), a.google_container_id);
    return a[b] = c
});
var Fj = function(a) {
    if (!a)
        return null;
    var b = a.a, c = a.b, d = a.c, e = a.d, f = a.e, h = a.h;
    if (!b ||!c || 0 >= d || 0 >= e ||!f)
        return null;
    a = new xj(b, c, new D(d, e), a.f, a.g);
    f = new $(a, f);
    h && (z[h] = f);
    return f
}, Ej = function(a, b, c, d, e, f, h, k) {
    if (!a ||!b || 0 >= c || 0 >= d)
        return null;
    var p = ue();
    b = Of(b, p, k);
    k = "<iframe allowtransparency=true frameborder=0 height=" + d + " hspace=0 id=" + a + " marginheight=0 marginwidth=0 name=" + a + ' scrolling=no src="' + b + '" style="left:0;position:absolute;top:0" vspace=0 width=' + c + " allowfullscreen=true></iframe>";
    if (!h) {
        var w = "border:none;height:" + d + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + c + "px;background-color:transparent";
        k = ['<ins id="', a + "_expand", '" style="display:inline-table;', w, '"><ins id="', a + "_anchor", '" style="display:block;', w, '">', k, "</ins></ins>"].join("")
    }(e = e ? y.getElementById(e) : null) ? e.innerHTML = k : y.write(k);
    return Fj({
        a: a,
        b: b,
        c: c,
        d: d,
        e: p,
        f: f,
        g: h,
        h: void 0
    })
};
v("ExpandableAdSlotFactory.createIframe", Ej);
v("DhtmlExpandableIframeFactory.createElement", function(a, b, c, d) {
    if (!a ||!b || 0 >= c || 0 >= d)
        return null;
    var e = ue(), f = b = Of(b, e), h = document.createElement("iframe");
    h.style.cssText = "border:none;height:" + d + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + c + "px";
    h.name = a;
    h.id = a;
    h.src = f;
    h.style.cssText = "left:0;position:absolute;top:0";
    h.width = c;
    h.height = d;
    h.frameBorder = 0;
    h.hspace = 0;
    h.vspace = 0;
    h.scrolling = "no";
    h.ni = 0;
    h.oi = 0;
    h.mi=!0;
    h.li=!0;
    Fj({
        a: a,
        b: b,
        c: c,
        d: d,
        e: e,
        f: void 0,
        g: void 0,
        h: "expandableAdSlot_" +
        a
    });
    a = "border:none;height:" + d + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + c + "px";
    b = y.createElement("ins");
    b.style.cssText = "display:inline-table;" + a;
    c = y.createElement("ins");
    c.style.cssText = "display:block;" + a;
    c.appendChild(h);
    b.appendChild(c);
    return b
});
$.prototype.listen = $.prototype.tb;
$.prototype.listenOnce = $.prototype.Rd;
$.prototype.unlisten = $.prototype.Vb;
$.prototype.unlistenByKey = $.prototype.Fd;
if (Na(document.URL))
    document.write('<script src="//pagead2.googlesyndication.com/pagead/expansion_embed_dbg.js">\x3c/script>');
else {
    var Gj = z.google_eas_queue;
    if (Gj && n(Gj))
        for (var Hj = 0; Hj < Gj.length; Hj++)
            Gj[Hj] && Fj(Gj[Hj]);
    z.google_eas_queue = {
        push: Fj
    }
};
})();

