(function() {
    var k, q = this, r = function(a) {
        return void 0 !== a
    }, aa = function() {}, ba = function(a) {
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
                                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" !=
                                typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))
                                    return "function"
            } else 
                return "null";
                else if ("function" == b && "undefined" == typeof a.call)
    return "object";
return b
}, ca = function(a) {
    return "array" == ba(a)
}, da = function(a) {
    var b = ba(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}, t = function(a) {
    return "string" == typeof a
}, u = function(a) {
    return "number" == typeof a
}, ea = function(a) {
    return "function" == ba(a)
}, w = function(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}, fa = "closure_uid_" +
(1E9 * Math.random()>>>0), ga = 0, ha = function(a, b, c) {
    return a.call.apply(a.bind, arguments)
}, ia = function(a, b, c) {
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
}, y = function(a, b, c) {
    y = Function.prototype.bind&&-1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;
    return y.apply(null, arguments)
},
z = function(a, b) {
    var c = a.split("."), d = q;
    c[0]in d ||!d.execScript || d.execScript("var " + c[0]);
    for (var e; c.length && (e = c.shift());)
        !c.length && r(b) ? d[e] = b : d[e] ? d = d[e] : d = d[e] = {}
}, A = function(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.V = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.Xa = function(a, c, f) {
        return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
    }
};
var ja = document, ka = window;
var la = function(a) {
    if (Error.captureStackTrace)
        Error.captureStackTrace(this, la);
    else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
};
A(la, Error);
la.prototype.name = "CustomError";
var ma;
var na = function(a) {
    return /^[\s\xa0]*$/.test(null == a ? "" : String(a))
}, oa = function(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}, xa = function(a) {
    if (!pa.test(a))
        return a;
    - 1 != a.indexOf("&") && (a = a.replace(qa, "&amp;"));
    - 1 != a.indexOf("<") && (a = a.replace(ra, "&lt;"));
    - 1 != a.indexOf(">") && (a = a.replace(sa, "&gt;"));
    - 1 != a.indexOf('"') && (a = a.replace(ua, "&quot;"));
    - 1 != a.indexOf("'") && (a = a.replace(va, "&#39;"));
    - 1 != a.indexOf("\x00") && (a = a.replace(wa, "&#0;"));
    return a
}, qa = /&/g, ra = /</g, sa = />/g, ua = /"/g, va = /'/g, wa = /\x00/g,
pa = /[\x00&<>"']/, Aa = function(a) {
    return B(a, "&") ? "document"in q ? ya(a) : za(a) : a
}, ya = function(a) {
    var b = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"'
    }, c;
    c = q.document.createElement("div");
    return a.replace(Ba, function(a, e) {
        var f = b[a];
        if (f)
            return f;
        if ("#" == e.charAt(0)) {
            var g = Number("0" + e.substr(1));
            isNaN(g) || (f = String.fromCharCode(g))
        }
        f || (c.innerHTML = a + " ", f = c.firstChild.nodeValue.slice(0, - 1));
        return b[a] = f
    })
}, za = function(a) {
    return a.replace(/&([^;]+);/g, function(a, c) {
        switch (c) {
        case "amp":
            return "&";
        case "lt":
            return "<";
        case "gt":
            return ">";
        case "quot":
            return '"';
        default:
            if ("#" == c.charAt(0)) {
                var d = Number("0" + c.substr(1));
                if (!isNaN(d))
                    return String.fromCharCode(d)
                }
            return a
        }
    })
}, Ba = /&([^;\s<&]+);?/g, Ca = {
    "\x00": "\\0",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\x0B",
    '"': '\\"',
    "\\": "\\\\"
}, Da = {
    "'": "\\'"
}, Ea = function(a) {
    a = String(a);
    if (a.quote)
        return a.quote();
    for (var b = ['"'], c = 0; c < a.length; c++) {
        var d = a.charAt(c), e = d.charCodeAt(0), f = c + 1, g;
        if (!(g = Ca[d])) {
            if (!(31 < e && 127 > e))
                if (d in Da)
                    d = Da[d];
                else if (d in
                Ca)
                    d = Da[d] = Ca[d];
                else {
                    e = d;
                    g = d.charCodeAt(0);
                    if (31 < g && 127 > g)
                        e = d;
                    else {
                        if (256 > g) {
                            if (e = "\\x", 16 > g || 256 < g)
                                e += "0"
                        } else 
                            e = "\\u", 4096 > g && (e += "0");
                            e += g.toString(16).toUpperCase()
                        }
                        d = Da[d] = e
                }
            g = d
        }
        b[f] = g
    }
    b.push('"');
    return b.join("")
}, B = function(a, b) {
    return - 1 != a.indexOf(b)
}, Fa = function(a, b) {
    return a < b?-1 : a > b ? 1 : 0
}, Ga = function(a) {
    return String(a).replace(/\-([a-z])/g, function(a, c) {
        return c.toUpperCase()
    })
}, Ha = function(a) {
    var b = t(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g,
    "\\x08"): "\\s";
    return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
        return b + e.toUpperCase()
    })
};
var Ia = function(a) {
    Ia[" "](a);
    return a
};
Ia[" "] = aa;
var Ja = function(a) {
    try {
        var b;
        if (b=!!a && null != a.location.href)
            t: {
            try {
                Ia(a.foo);
                b=!0;
                break t
            } catch (c) {}
            b=!1
        }
        return b
    } catch (d) {
        return !1
    }
}, Ka = function(a, b) {
    if (!(1E-4 > Math.random())) {
        var c = Math.random();
        if (c < b) {
            try {
                var d = new Uint16Array(1);
                window.crypto.getRandomValues(d);
                c = d[0] / 65536
            } catch (e) {
                c = Math.random()
            }
            return a[Math.floor(c * a.length)]
        }
    }
    return null
}, C = function(a, b, c) {
    for (var d in a)
        Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a)
}, La = function(a, b, c, d) {
    a.addEventListener ? a.addEventListener(b,
    c, d ||!1) : a.attachEvent && a.attachEvent("on" + b, c)
}, Ma = function(a, b, c) {
    a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
};
var Oa = function(a) {
    var b = a.toString();
    a.name&&-1 == b.indexOf(a.name) && (b += ": " + a.name);
    a.message&&-1 == b.indexOf(a.message) && (b += ": " + a.message);
    a.stack && (b = Na(a.stack, b));
    return b
}, Pa = function(a, b, c) {
    a.google_image_requests || (a.google_image_requests = []);
    var d = a.document.createElement("img");
    if (c) {
        var e = function() {
            c();
            Ma(d, "load", e);
            Ma(d, "error", e)
        };
        La(d, "load", e);
        La(d, "error", e)
    }
    d.src = b;
    a.google_image_requests.push(d)
}, Na = function(a, b) {
    try {
        - 1 == a.indexOf(b) && (a = b + "\n" + a);
        for (var c; a != c;)
            c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,
            "$1");
        return a.replace(/\n */g, "\n")
    } catch (d) {
        return b
    }
};
var Qa = function(a, b) {
    for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b.call(null, a[c], c, a)
};
function D(a) {
    return "function" == typeof encodeURIComponent ? encodeURIComponent(a) : escape(a)
}
function Ra() {
    var a = Sa, b = document, c = b.createElement("script");
    c.type = "text/javascript";
    c.src = a;
    var d = b.getElementsByTagName("head")[0];
    if (d)
        try {
            window.setTimeout(function() {
                d.appendChild(c)
            }, 0)
    } catch (e) {}
}
var Ua = function(a, b) {
    Ta(a, "load", b)
}, Ta = function(a, b, c) {
    La(a, b, c, void 0)
}, Wa = function() {
    var a = Va();
    "google_onload_fired"in a || (a.google_onload_fired=!1, Ua(a, function() {
        a.google_onload_fired=!0
    }))
};
function Xa() {
    return "msie"in Ya ? Ya.msie : Ya.msie =- 1 != navigator.userAgent.toLowerCase().indexOf("msie")
}
var Ya = {};
function Za() {
    if (navigator.plugins && navigator.mimeTypes.length) {
        var a = navigator.plugins["Shockwave Flash"];
        if (a && a.description)
            return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
    } else {
        if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
            for (var a = 3, b = 1; b;)
                try {
                    b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + (a + 1)), a++
            } catch (c) {
                b = null
            }
            return a.toString()
        }
        if (Xa()&&!window.opera) {
            b = null;
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
            } catch (d) {
                a = 0;
                try {
                    b =
                    new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), a = 6, b.Ya = "always"
                } catch (e) {
                    if (6 == a)
                        return a.toString()
                    }
                try {
                    b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                } catch (f) {}
            }
            if (b)
                return a = b.GetVariable("$version").split(" ")[1], a.replace(/,/g, ".")
            }
    }
    return "0"
}
var $a = function(a, b) {
    return Ka(a, b)
}, ab = function(a) {
    var b = a.length;
    if (0 == b)
        return 0;
    for (var c = 305419896, d = 0; d < b; d++)
        c^=(c<<5) + (c>>2) + a.charCodeAt(d) & 4294967295;
    return 0 < c ? c : 4294967296 + c
};
var bb = Array.prototype, cb = function(a, b) {
    if (t(a))
        return t(b) && 1 == b.length ? a.indexOf(b, 0) : - 1;
    for (var c = 0; c < a.length; c++)
        if (c in a && a[c] === b)
            return c;
    return - 1
}, db = function(a, b, c) {
    for (var d = a.length, e = t(a) ? a.split("") : a, f = 0; f < d; f++)
        f in e && b.call(c, e[f], f, a)
}, fb = function(a, b) {
    for (var c = a.length, d = [], e = 0, f = t(a) ? a.split("") : a, g = 0; g < c; g++)
        if (g in f) {
            var h = f[g];
            b.call(void 0, h, g, a) && (d[e++] = h)
        }
    return d
}, gb = function(a, b) {
    for (var c = a.length, d = Array(c), e = t(a) ? a.split("") : a, f = 0; f < c; f++)
        f in e && (d[f] = b.call(void 0,
        e[f], f, a));
    return d
}, hb = function(a, b) {
    for (var c = a.length, d = t(a) ? a.split("") : a, e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a))
            return !0;
    return !1
}, ib = function(a, b) {
    for (var c = a.length, d = t(a) ? a.split("") : a, e = 0; e < c; e++)
        if (e in d&&!b.call(void 0, d[e], e, a))
            return !1;
    return !0
}, jb = function(a, b, c) {
    for (var d = a.length, e = t(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && b.call(c, e[f], f, a))
            return f;
    return - 1
}, kb = function(a, b) {
    0 <= cb(a, b) || a.push(b)
}, lb = function(a, b) {
    var c = jb(a, b, void 0);
    0 <= c && bb.splice.call(a, c, 1)
}, mb = function(a) {
    return bb.concat.apply(bb,
    arguments)
}, nb = function(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)
            c[d] = a[d];
        return c
    }
    return []
}, ob = function(a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c], e;
        if (ca(d) || (e = da(d)) && Object.prototype.hasOwnProperty.call(d, "callee"))
            a.push.apply(a, d);
        else if (e)
            for (var f = a.length, g = d.length, h = 0; h < g; h++)
                a[f + h] = d[h];
        else 
            a.push(d)
    }
}, pb = function(a, b, c) {
    return 2 >= arguments.length ? bb.slice.call(a, b) : bb.slice.call(a, b, c)
}, qb = function(a) {
    for (var b = {}, c = 0, d = 0; d < a.length;) {
        var e = a[d++],
        f = w(e) ? "o" + (e[fa] || (e[fa]=++ga)): (typeof e).charAt(0) + e;
        Object.prototype.hasOwnProperty.call(b, f) || (b[f]=!0, a[c++] = e)
    }
    a.length = c
}, rb = function(a, b) {
    for (var c = {}, d = 0; d < a.length; d++) {
        var e = a[d], f = b.call(void 0, e, d, a);
        r(f) && (c[f] || (c[f] = [])).push(e)
    }
    return c
};
var E = function(a, b) {
    this.x = r(a) ? a : 0;
    this.y = r(b) ? b : 0
};
E.prototype.clone = function() {
    return new E(this.x, this.y)
};
E.prototype.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
E.prototype.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
E.prototype.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
var sb = function(a, b) {
    this.width = a;
    this.height = b
};
k = sb.prototype;
k.clone = function() {
    return new sb(this.width, this.height)
};
k.isEmpty = function() {
    return !(this.width * this.height)
};
k.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
k.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
k.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var tb = function(a, b) {
    for (var c in a)
        b.call(void 0, a[c], c, a)
}, ub = function(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = a[d];
    return b
}, vb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), wb = function(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)
            a[c] = d[c];
        for (var f = 0; f < vb.length; f++)
            c = vb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};
var F;
t: {
    var xb = q.navigator;
    if (xb) {
        var zb = xb.userAgent;
        if (zb) {
            F = zb;
            break t
        }
    }
    F = ""
};
var Ab = B(F, "Opera") || B(F, "OPR"), G = B(F, "Trident") || B(F, "MSIE"), Bb = B(F, "Gecko")&&!B(F.toLowerCase(), "webkit")&&!(B(F, "Trident") || B(F, "MSIE")), H = B(F.toLowerCase(), "webkit"), Cb = q.navigator || null, Db = B(Cb && Cb.platform || "", "Mac"), Eb = q.navigator || null, Fb=!!Eb && B(Eb.appVersion || "", "X11"), Gb = function() {
    var a = q.document;
    return a ? a.documentMode : void 0
}, Hb = function() {
    var a = "", b;
    if (Ab && q.opera)
        return a = q.opera.version, ea(a) ? a() : a;
    Bb ? b = /rv\:([^\);]+)(\)|;)/ : G ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : H && (b = /WebKit\/(\S+)/);
    b && (a = (a = b.exec(F)) ? a[1] : "");
    return G && (b = Gb(), b > parseFloat(a)) ? String(b) : a
}(), Ib = {}, I = function(a) {
    var b;
    if (!(b = Ib[a])) {
        b = 0;
        for (var c = oa(String(Hb)).split("."), d = oa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
            var g = c[f] || "", h = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), n = RegExp("(\\d*)(\\D*)", "g");
            do {
                var p = l.exec(g) || ["", "", ""], m = n.exec(h) || ["", "", ""];
                if (0 == p[0].length && 0 == m[0].length)
                    break;
                b = Fa(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 == m[1].length ? 0 : parseInt(m[1], 10)) || Fa(0 == p[2].length,
                0 == m[2].length) || Fa(p[2], m[2])
            }
            while (0 == b)
            }
        b = Ib[a] = 0 <= b
    }
    return b
}, Jb = q.document, Kb = Jb && G ? Gb() || ("CSS1Compat" == Jb.compatMode ? parseInt(Hb, 10) : 5) : void 0;
var Lb=!G || G && 9 <= Kb, Mb=!Bb&&!G || G && G && 9 <= Kb || Bb && I("1.9.1");
G && I("9");
var Pb = function(a) {
    return a ? new Nb(Ob(a)) : ma || (ma = new Nb)
}, Qb = function(a) {
    var b = document;
    return t(a) ? b.getElementById(a) : a
}, Sb = function(a, b) {
    tb(b, function(b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Rb ? a.setAttribute(Rb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
}, Rb = {
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
}, Tb = function(a) {
    a = a.document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new sb(a.clientWidth, a.clientHeight)
}, Wb = function(a) {
    var b = Ub(a);
    a = Vb(a);
    return G && I("10") && a.pageYOffset != b.scrollTop ? new E(b.scrollLeft, b.scrollTop) : new E(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
}, Ub = function(a) {
    return H || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
}, Vb = function(a) {
    return a.parentWindow ||
    a.defaultView
}, Yb = function(a, b, c) {
    function d(c) {
        c && b.appendChild(t(c) ? a.createTextNode(c) : c)
    }
    for (var e = 2; e < c.length; e++) {
        var f = c[e];
        !da(f) || w(f) && 0 < f.nodeType ? d(f) : db(Xb(f) ? nb(f) : f, d)
    }
}, Zb = function(a) {
    return Mb && void 0 != a.children ? a.children : fb(a.childNodes, function(a) {
        return 1 == a.nodeType
    })
}, Ob = function(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}, Xb = function(a) {
    if (a && "number" == typeof a.length) {
        if (w(a))
            return "function" == typeof a.item || "string" == typeof a.item;
        if (ea(a))
            return "function" ==
            typeof a.item
    }
    return !1
}, Nb = function(a) {
    this.j = a || q.document || document
};
Nb.prototype.k = function(a, b, c) {
    var d = this.j, e = arguments, f = e[0], g = e[1];
    if (!Lb && g && (g.name || g.type)) {
        f = ["<", f];
        g.name && f.push(' name="', xa(g.name), '"');
        if (g.type) {
            f.push(' type="', xa(g.type), '"');
            var h = {};
            wb(h, g);
            delete h.type;
            g = h
        }
        f.push(">");
        f = f.join("")
    }
    f = d.createElement(f);
    g && (t(g) ? f.className = g : ca(g) ? f.className = g.join(" ") : Sb(f, g));
    2 < e.length && Yb(d, f, e);
    return f
};
Nb.prototype.appendChild = function(a, b) {
    a.appendChild(b)
};
Nb.prototype.contains = function(a, b) {
    if (a.contains && 1 == b.nodeType)
        return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
        return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;)
        b = b.parentNode;
    return b == a
};
var $b = function(a, b, c, d, e) {
    this.slot = a;
    this.isEmpty = b;
    this.size = c;
    this.creativeId = d;
    this.lineItemId = e;
    this.serviceName = "publisher_ads"
};
var ac = function(a, b) {
    this.j = a;
    this.k = b;
    this.o = this.j.getName();
    this.r = this.j.getSlotId().getInstance();
    var c = this.o, d = c.split("/");
    this.t = "/" == c.charAt(0) && 2 <= d.length ? d[1] : "/" != c.charAt(0) && 1 <= d.length ? d[0] : "";
    this.v = "";
    this.u = 0;
    this.l=!1
};
ac.prototype.A = 0;
ac.prototype.n=!1;
var bc = function(a) {
    a.A = 0;
    a.n=!1;
    a.m = null;
    a.q = null;
    a.B = null;
    a.w = null
};
ac.prototype.getName = function() {
    return this.o
};
ac.prototype.getInstance = function() {
    return this.r
};
var J = function(a) {
    return a.o + "_" + a.r
}, K = function(a) {
    return a.j.getSlotId().getDomId()
}, L = function(a) {
    return "google_ads_iframe_" + J(a)
};
ac.prototype.toString = function() {
    var a = this.j.getSlotId().toString();
    return "[gam.gut.AdSlot: nwid=" + this.t + ", name=" + this.o + ", instance=" + this.r + ", iframeLoaded=" + this.n + ", tries=" + this.A + ", GUT slot id=" + a + "]"
};
var cc = function(a, b) {
    a.m || (a.m = (new Date).getTime());
    a.j.fetchStarted(b || "")
}, dc = function(a) {
    a.B || (a.B = (new Date).getTime());
    a.j.renderStarted()
}, M = function(a, b) {
    a.w || (a.w = (new Date).getTime());
    a.j.renderEnded(b)
};
ac.prototype.getSizes = function(a) {
    var b = a || window;
    a = null;
    b.top == b && (a = Tb(window), a = this.j.getSizes(a.width, a.height));
    null == a && (a = this.j.getSizes());
    for (var b = [], c = 0; c < a.length; ++c)
        b.push([a[c].getWidth(), a[c].getHeight()]);
    return b
};
var ec = function(a) {
    a = a.getSizes();
    for (var b = [], c = 0; c < a.length; ++c)
        b.push(a[c].join("x"));
    return b.join("|")
}, fc = function(a) {
    var b = [], c = a.j.getTargetingMap();
    C(c, function(a, c) {
        for (var d = [], h = 0; h < a.length; ++h)
            d.push(encodeURIComponent(a[h]));
        b.push(encodeURIComponent(c) + "=" + d.join(","))
    });
    if (ea(a.j.getCategoryExclusions) && (a = a.j.getCategoryExclusions(), 0 < a.length&&!("excl_cat"in c))) {
        for (var c = [], d = 0; d < a.length; ++d)
            c.push(encodeURIComponent(a[d]));
        b.push(encodeURIComponent("excl_cat") + "=" + c.join(","))
    }
    return b.join("&")
};
k = ac.prototype;
k.getContentUrl = function() {
    return this.j.getContentUrl()
};
k.setClickUrl = function(a) {
    this.j.setClickUrl(a)
};
k.getClickUrl = function() {
    return this.j.getClickUrl()
};
k.getOutOfPage = function() {
    return this.j.getOutOfPage()
};
k.getAudExtId = function() {
    return this.j.getAudExtId()
};
k.getCollapseEmptyDiv = function() {
    return this.j.getCollapseEmptyDiv()
};
k.getDivStartsCollapsed = function() {
    return this.j.getDivStartsCollapsed()
};
var gc = function(a, b) {
    var c = null, d=!0, e = null, f = null;
    w(b) && (d = b._empty_, d || (c = [b._width_, b._height_], 0 == b._is_afc_ && b._creative_ids_ && b._adgroup2_ids_ && (e = b._creative_ids_[0], f = b._adgroup2_ids_[0])));
    return new $b(a.j, d, c, e, f)
}, hc = function(a) {
    return new $b(a.j, !0, null, null, null)
};
var ic = {
    google_ad_channel: "channel",
    google_ad_host: "host",
    google_ad_host_channel: "h_ch",
    google_ad_host_tier_id: "ht_id",
    google_ad_section: "region",
    google_ad_type: "ad_type",
    google_adtest: "adtest",
    google_original_width: "orig_w",
    google_available_width: "avail_w",
    google_allow_expandable_ads: "ea",
    google_alternate_ad_url: "alternate_ad_url",
    google_alternate_color: "alt_color",
    google_bid: "bid",
    google_city: "gcs",
    google_color_bg: "color_bg",
    google_color_border: "color_border",
    google_color_line: "color_line",
    google_color_link: "color_link",
    google_color_text: "color_text",
    google_color_url: "color_url",
    google_contents: "contents",
    google_country: "gl",
    google_cpm: "cpm",
    google_cust_age: "cust_age",
    google_cust_ch: "cust_ch",
    google_cust_gender: "cust_gender",
    google_cust_id: "cust_id",
    google_cust_interests: "cust_interests",
    google_cust_job: "cust_job",
    google_cust_l: "cust_l",
    google_cust_lh: "cust_lh",
    google_cust_u_url: "cust_u_url",
    google_disable_video_autoplay: "disable_video_autoplay",
    google_ed: "ed",
    google_encoding: "oe",
    google_feedback: "feedback_link",
    google_flash_version: "flash",
    google_font_face: "f",
    google_font_size: "fs",
    google_hints: "hints",
    google_kw: "kw",
    google_kw_type: "kw_type",
    google_language: "hl",
    google_page_url: "url",
    google_pgb_reactive: "pra",
    google_region: "gr",
    google_reuse_colors: "reuse_colors",
    google_responsive_formats: "resp_fmts",
    google_safe: "adsafe",
    google_sc_id: "sc_id",
    google_tag_info: "gut",
    google_targeting: "targeting",
    google_ui_features: "ui",
    google_ui_version: "uiv",
    google_video_doc_id: "video_doc_id",
    google_video_product_type: "video_product_type"
},
jc = {
    google_ad_block: "ad_block",
    google_ad_client: "client",
    google_ad_format: "format",
    google_ad_output: "output",
    google_ad_callback: "callback",
    google_ad_height: "h",
    google_ad_slot: "slotname",
    google_ad_unit_key: "adk",
    google_ad_unit_key_2: "adk2",
    google_ad_width: "w",
    google_analytics_url_parameters: "aup",
    google_captcha_token: "captok",
    google_content_recommendation_ui_type: "crui",
    google_ctr_threshold: "ctr_t",
    google_cust_criteria: "cust_params",
    google_image_size: "image_size",
    google_last_modified_time: "lmt",
    google_loeid: "loeid",
    google_max_num_ads: "num_ads",
    google_max_radlink_len: "max_radlink_len",
    google_mtl: "mtl",
    google_enable_content_recommendations: "ecr",
    google_num_radlinks: "num_radlinks",
    google_num_radlinks_per_unit: "num_radlinks_per_unit",
    google_only_ads_with_video: "only_ads_with_video",
    google_rl_dest_url: "rl_dest_url",
    google_rl_filtering: "rl_filtering",
    google_rl_mode: "rl_mode",
    google_rt: "rt",
    google_source_type: "src_type",
    google_sui: "sui",
    google_skip: "skip",
    google_tag_for_child_directed_treatment: "tfcd",
    google_tag_origin: "to",
    google_tdsma: "tdsma",
    google_tfs: "tfs",
    google_tl: "tl"
}, kc = {
    google_lact: "lact",
    google_only_pyv_ads: "pyv",
    google_only_userchoice_ads: "uc",
    google_scs: "scs",
    google_with_pyv_ads: "withpyv",
    google_previous_watch: "p_w",
    google_previous_searches: "p_s",
    google_video_url_to_fetch: "durl",
    google_yt_pt: "yt_pt",
    google_yt_up: "yt_up"
};
var lc=!!window.google_async_iframe_id, mc = lc && window.parent || window, Va = function() {
    if (lc&&!Ja(mc)) {
        for (var a = "." + ja.domain; 2 < a.split(".").length&&!Ja(mc);)
            ja.domain = a = a.substr(a.indexOf(".") + 1), mc = window.parent;
        Ja(mc) || (mc = window)
    }
    return mc
};
var oc = function(a) {
    this.k = [];
    this.j = {};
    for (var b = 0, c = arguments.length; b < c; ++b)
        this.j[arguments[b]] = ""
}, pc=!1, qc = function(a, b, c) {
    "" != b && (c ? a.j.hasOwnProperty(c) && (a.j[c] = b) : a.k.push(b))
};
oc.prototype.l = function(a) {
    return this.j.hasOwnProperty(a) ? this.j[a] : ""
};
pc=!1;
var rc = {}, uc = function(a, b) {
    var c = sc, d, e=!0;
    try {
        d = b()
    } catch (f) {
        try {
            var g = Oa(f), h = "";
            f.fileName && (h = f.fileName);
            var l =- 1;
            f.lineNumber && (l = f.lineNumber);
            e = c(a, g, h, l, void 0)
        } catch (n) {
            try {
                var p = Oa(n), c = "";
                n.fileName && (c = n.fileName);
                g =- 1;
                n.lineNumber && (g = n.lineNumber);
                sc("pAR", p, c, g, void 0, void 0)
            } catch (m) {
                tc({
                    context: "mRE",
                    msg: m.toString() + "\n" + (m.stack || "")
                }, void 0)
            }
        }
        if (!e)
            throw f;
    } finally {}
    return d
}, sc = function(a, b, c, d, e, f) {
    var g = {};
    if (e)
        try {
            e(g)
    } catch (h) {}
    g.context = a;
    g.msg = b.substring(0, 512);
    c && (g.file =
    c);
    0 < d && (g.line = d.toString());
    g.url = ja.URL.substring(0, 512);
    g.ref = ja.referrer.substring(0, 512);
    vc(g);
    tc(g, f);
    return !0
}, tc = function(a, b) {
    try {
        if (Math.random() < (b || .01)) {
            var c = "/pagead/gen_204?id=jserror" + wc(a), d = "http" + ("http:" == ka.location.protocol ? "" : "s") + "://pagead2.googlesyndication.com" + c, d = d.substring(0, 2E3);
            Pa(ka, d, void 0)
        }
    } catch (e) {}
}, vc = function(a) {
    var b = a || {};
    Qa(rc, function(a, d) {
        b[d] = ka[a]
    })
}, xc = function(a, b) {
    return function() {
        var c = arguments;
        return uc(a, function() {
            return b.apply(void 0, c)
        })
    }
},
yc = function(a) {
    return xc("osd::util::rschange", a)
}, wc = function(a) {
    var b = "";
    Qa(a, function(a, d) {
        if (0 === a || a)
            b += "&" + d + "=" + D(a)
    });
    return b
};
var zc = function(a, b) {
    for (var c = 0, d = a, e = 0; a != a.parent;)
        if (a = a.parent, e++, Ja(a))
            d = a, c = e;
        else if (b)
            break;
    return {
        X: d,
        k: c
    }
}, Ac = null;
var Dc = function(a) {
    this.S = a;
    N(this, 3, null);
    N(this, 4, 0);
    N(this, 5, 0);
    N(this, 6, 0);
    N(this, 15, 0);
    a = Va();
    if ("E" == a.google_pstate_gc_expt) {
        a = zc(a, !1).X;
        var b = a.google_global_correlator;
        b || (a.google_global_correlator = b = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
        a = b
    } else 
        a = 1 + Math.floor(Math.random() * Math.pow(2, 43));
    N(this, 7, a);
    N(this, 8, {});
    N(this, 9, {});
    N(this, 10, {});
    N(this, 11, []);
    N(this, 12, 0);
    N(this, 16, null);
    a = Va();
    Bc(a) ? (b = a.j || {}, b = this.S[Cc(14)] = b, a.j = b) : N(this, 14, {})
}, Ec = {
    google_persistent_state: !0,
    google_persistent_state_async: !0
},
Fc = {}, Bc = function(a) {
    return "E" == a.google_pstate_expt || "EU" == a.google_pstate_expt
}, Hc = function(a) {
    var b = Va();
    if (Bc(b)) {
        var c;
        t:
        {
            var d, e;
            try {
                var f = b.google_pstate;
                if (d = Gc(f)) {
                    f.C = (f.C || 0) + 1;
                    c = f;
                    break t
                }
            } catch (g) {
                e = Oa(g)
            }
            tc({
                context: "ps::eg",
                msg: e,
                L: r(d) ? d ? 1: 0: 2,
                url: b.location.href
            }, 1);
            c = b.google_pstate = new Dc({})
        }
        return c
    }
    a = a && Ec[a] ? a : lc ? "google_persistent_state_async" : "google_persistent_state";
    if (Fc[a])
        return Fc[a];
    c = "google_persistent_state_async" == a ? {} : b;
    d = b[a];
    return Gc(d) ? Fc[a] = d : b[a] = Fc[a] = new Dc(c)
},
Gc = function(a) {
    return "object" == typeof a && "object" == typeof a.S
}, Cc = function(a) {
    switch (a) {
    case 3:
        return "google_exp_persistent";
    case 4:
        return "google_num_sdo_slots";
    case 5:
        return "google_num_0ad_slots";
    case 6:
        return "google_num_ad_slots";
    case 7:
        return "google_correlator";
    case 8:
        return "google_prev_ad_formats_by_region";
    case 9:
        return "google_prev_ad_slotnames_by_region";
    case 10:
        return "google_num_slots_by_channel";
    case 11:
        return "google_viewed_host_channels";
    case 12:
        return "google_num_slot_to_show";
    case 14:
        return "gaGlobal";
    case 15:
        return "google_num_reactive_ad_slots";
    case 16:
        return "google_persistent_language"
    }
    throw Error("unexpected state");
}, Ic = function(a) {
    var b = Cc(14);
    return a.S[b]
}, N = function(a, b, c) {
    a = a.S;
    b = Cc(b);
    void 0 === a[b] && (a[b] = c)
};
var Jc = function(a) {
    return function() {
        return a
    }
}, Kc = function(a) {
    var b = arguments, c = b.length;
    return function() {
        for (var a = 0; a < c; a++)
            if (!b[a].apply(this, arguments))
                return !1;
        return !0
    }
}, Lc = function() {
    return function() {
        return !na.apply(this, arguments)
    }
};
var Mc = function(a, b, c, d, e) {
    var f = "";
    a && (f += a + ":");
    c && (f += "//", b && (f += b + "@"), f += c, d && (f += ":" + d));
    e && (f += e);
    return f
}, Nc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/, Qc = function(a) {
    if (Oc) {
        Oc=!1;
        var b = q.location;
        if (b) {
            var c = b.href;
            if (c && (c = Pc(c)) && c != b.hostname)
                throw Oc=!0, Error();
        }
    }
    return a.match(Nc)
}, Oc = H, Pc = function(a) {
    return (a = Qc(a)[3] || null) ? decodeURI(a) : a
};
function Rc(a, b, c, d) {
    c = c || a.google_ad_width;
    d = d || a.google_ad_height;
    if (a.top == a)
        return !1;
    var e = b.documentElement;
    if (c && d) {
        var f = 1, g = 1;
        a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
        if (g > 2 * d || f > 2 * c)
            return !1
    }
    return !0
};
var Sc = function(a) {
    this.j = {};
    this.k = a
}, Tc = function(a, b, c, d) {
    b && (c || (c = ""), "google_gl" == b ? b = "google_country" : "google_region" == b && (b = "google_section"), b in a.k && ("undefined" == typeof d || d ||!a.j[b]) && (a.j[b] = c))
}, Uc = function(a, b) {
    C(b.j, function(a, b) {
        this.j[b] || (this.j[b] = a)
    }, a)
}, Vc = function(a) {
    var b = new Sc(a.k);
    a = a.j;
    var c = {}, d;
    for (d in a)
        c[d] = a[d];
    b.j = c;
    delete b.j.google_page_url;
    return b
}, Wc = function(a) {
    return a.j.google_page_url
};
Sc.prototype.F = function() {
    var a = [];
    C(this.j, function(b, c) {
        var d = ic[c] || jc[c] || kc[c] || null;
        d && b && a.push(d + "=" + D(b))
    });
    return a.join("&")
};
var Yc = function(a, b, c, d) {
    var e = Xc(a, Vc(b), c, d);
    a = Xc(a, b, c, d);
    b = [];
    e[0] && 0 < e[0].length && b.push(e[0].join("&"));
    a[1] && 0 < a[1].length && b.push("sps=" + a[1].join("|"));
    return b.join("&")
}, Xc = function(a, b, c, d) {
    var e = [], f = [], g = b.j;
    C(d, function(b, d) {
        if (b) {
            var n = "";
            null != g[d] && (n = D(g[d]));
            for (var p = [], m =- 1, v =- 1, x = 0; x < a.length; ++x) {
                var s = J(a[x]);
                ++m;
                null == c[s] ? p.push("") : (s = c[s].j, null != s[d] ? (p.push(D(D(s[d]))), v = m) : p.push(""))
            }
            if (0 <= v) {
                m = [];
                m.push(D(n));
                for (x = 0; x <= v; ++x)
                    m.push(p[x]);
                f.push(b + "," + m.join(","))
            } else 
                n &&
                e.push(b + "=" + n)
        }
    });
    b = [];
    b.push(e);
    b.push(f);
    return b
}, Zc = function() {
    var a = window, b;
    t: {
        b = a.navigator;
        var c = document, d = b.userAgent, e = b.platform;
        if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(e)&&!/^Opera/.test(d)) {
            var f = (/WebKit\/(\d+)/.exec(d) || [0, 0])[1], g = (/rv\:(\d+\.\d+)/.exec(d) || [0, 0])[1];
            if (/Win/.test(e) && /Trident/.test(d) && 9 < c.documentMode ||!f && "Gecko" == b.product && 1.7 < g&&!/rv\:1\.8([^.]|\.0)/.test(d) || 524 < f) {
                b=!0;
                break t
            }
        }
        b=!1
    }
    a = Rc(a, a.document, 500, 300);
    c = {};
    if (!b || a)
        c.ea = "0";
    return c
}, $c = function() {
    var a,
    b = window, c = document;
    var d = zc(window, !1).X;
    a = d.location.href;
    if (d == d.top)
        a=!0;
    else {
        var e=!1, f = d.document;
        f && f.referrer && (a = f.referrer, d.parent == d.top && (e=!0));
        (d = d.location.ancestorOrigins) && (d = d[d.length - 1])&&-1 == a.indexOf(d) && (e=!1);
        a = e
    }
    b = Rc(Va(), c, b.google_ad_width, b.google_ad_height);
    c = a;
    a = Va();
    a = a.top == a ? 0 : Ja(a.top) ? 1 : 2;
    e = 4;
    b || 1 != a ? b || 2 != a ? b && 1 == a ? e = 7 : b && 2 == a && (e = 8) : e = 6 : e = 5;
    c && (e|=16);
    return "" + e || null
};
var ad = function(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
};
k = ad.prototype;
k.getWidth = function() {
    return this.right - this.left
};
k.getHeight = function() {
    return this.bottom - this.top
};
k.clone = function() {
    return new ad(this.top, this.right, this.bottom, this.left)
};
k.contains = function(a) {
    return this && a ? a instanceof ad ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
k.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
k.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
k.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
var bd = function(a, b, c) {
    b = b || ka;
    a && b.top != b && (b = b.top);
    try {
        return b.document&&!b.document.body ? new sb( - 1, - 1) : c ? new sb(b.innerWidth, b.innerHeight) : Tb(b || window)
    } catch (d) {
        return new sb( - 12245933, - 12245933)
    }
}, cd = function(a, b) {
    Xa()&&!window.opera ? Ta(a, "readystatechange", yc(function() {
        "complete" == a.readyState && b(null)
    })) : Ta(a, "load", xc("osd::util::load", b))
}, dd = function() {
    var a = 0;
    !r(ka.postMessage) && (a|=1);
    return a
};
var ed = function() {
    return H ? "Webkit" : Bb ? "Moz" : G ? "ms" : Ab ? "O" : null
};
var fd = function(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
};
fd.prototype.clone = function() {
    return new fd(this.left, this.top, this.width, this.height)
};
var gd = function(a) {
    return new fd(a.left, a.top, a.right - a.left, a.bottom - a.top)
};
fd.prototype.contains = function(a) {
    return a instanceof fd ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
fd.prototype.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
fd.prototype.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
fd.prototype.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var id = function(a, b, c) {
    if (t(b))(b = hd(a, b)) && (a.style[b] = c);
    else 
        for (var d in b) {
            c = a;
            var e = b[d], f = hd(c, d);
            f && (c.style[f] = e)
        }
}, hd = function(a, b) {
    var c = Ga(b);
    if (void 0 === a.style[c]) {
        var d = ed() + Ha(c);
        if (void 0 !== a.style[d])
            return d
    }
    return c
}, jd = function(a, b) {
    var c = Ob(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
}, kd = function(a, b) {
    return jd(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}, ld = function(a) {
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
    G && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}, md = function(a) {
    if (G&&!(G && 8 <= Kb))
        return a.offsetParent;
    var b = Ob(a), c = kd(a, "position"), d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (c = kd(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth ||
        a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
            return a;
    return null
}, nd = function(a) {
    var b, c = Ob(a), d = kd(a, "position"), e = Bb && c.getBoxObjectFor&&!a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), f = new E(0, 0), g;
    b = c ? Ob(c) : document;
    (g=!G || G && 9 <= Kb) || (g = "CSS1Compat" == Pb(b).j.compatMode);
    g = g ? b.documentElement : b.body;
    if (a == g)
        return f;
    if (a.getBoundingClientRect)
        b = ld(a), a = Pb(c), a = Wb(a.j), f.x = b.left + a.x, f.y = b.top + a.y;
    else if (c.getBoxObjectFor &&
    !e)
        b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(g), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
    else {
        b = a;
        do {
            f.x += b.offsetLeft;
            f.y += b.offsetTop;
            b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
            if (H && "fixed" == kd(b, "position")) {
                f.x += c.body.scrollLeft;
                f.y += c.body.scrollTop;
                break
            }
            b = b.offsetParent
        }
        while (b && b != a);
        if (Ab || H && "absolute" == d)
            f.y -= c.body.offsetTop;
        for (b = a; (b = md(b)) && b != c.body && b != g;)
            f.x -= b.scrollLeft, Ab && "TR" == b.tagName || (f.y -= b.scrollTop)
    }
    return f
}, od = function(a, b) {
    "number" == typeof a && (a = (b ?
    Math.round(a) : a) + "px");
    return a
}, pd = function(a) {
    var b = a.offsetWidth, c = a.offsetHeight, d = H&&!b&&!c;
    return r(b)&&!d ||!a.getBoundingClientRect ? new sb(b, c) : (a = ld(a), new sb(a.right - a.left, a.bottom - a.top))
}, qd = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
var O = function(a, b) {
    this.m = a;
    this.k = b && b.k ? b.k : [];
    this.q = b ? b.q : !1;
    this.l = b && b.l ? b.l : 0;
    this.o = b ? b.o : "";
    this.j = b && b.j ? b.j : [];
    this.n = null;
    this.r=!1;
    if (b) {
        var c;
        for (c = 0; c < this.k.length; ++c)
            this.k[c].push("true");
        for (c = 0; c < this.j.length; ++c)
            this.j[c].fa=!0
    }
}, Sa = "", rd = 0, sd = 0, td = function(a, b) {
    var c = a.k, d = a.m.google_ad_request_done;
    d && (d = d.orig_callback || d, a.m.google_ad_request_done = function(a) {
        if (a && 0 < a.length) {
            var f = 1 < a.length ? a[1].url: null, g = a[0].log_info || null, h = a[0].activeview_url || null, l = a[0].activeview_js_enabled ||
            null, n = a[0].activeview_js_immediate_enabled || null;
            c.push([b, Aa(a[0].url), f, g, null, h, l, n])
        }
        d(a)
    }, a.m.google_ad_request_done.orig_callback = d)
}, ud = function(a, b, c, d) {
    var e = a.k;
    if (0 < e.length)
        for (var f = b.document.getElementsByTagName("a"), g = 0; g < f.length; g++)
            for (var h = 0; h < e.length; h++)
                if (0 <= f[g].href.indexOf(e[h][1])) {
                    var l = f[g].parentNode;
                    if (e[h][2])
                        for (var n = l, p = 0; 4 > p; p++) {
                            if (0 <= n.innerHTML.indexOf(e[h][2])) {
                                l = n;
                                break
                            }
                            n = n.parentNode
                        }
                        c(l, e[h][0], d || 0, !0, e[h][3], void 0, e[h][5], "true" == e[h][6], "true" == e[h][7],
                        "true" == e[h][8]);
                        e.splice(h, 1);
                        break
                }
    if (g = 0 < e.length)
        Ac || (Ac = zc(window, !0).X), g = b != Ac;
    if (g)
        try {
            ud(a, b.parent, c, d)
    } catch (m) {}
    for (g = 0; g < e.length; ++g)
        a = e[g], "true" == a[6] && vd("osd2", a[3]), "true" == a[7] && vd("osdim", a[3])
}, vd = function(a, b) {
    if (a && b) {
        var c = ["//"];
        c.push("pagead2.googlesyndication.com");
        c.push("/activeview");
        c.push("?id=" + a);
        c.push("&r=j");
        c.push("&avi=" + b);
        Pa(ka, c.join(""), void 0)
    }
};
k = O.prototype;
k.getNewBlocks = function(a, b) {
    b && ud(this, this.m, a, 1);
    for (var c = this.j.length, d = 0; d < c; d++) {
        var e = this.j[d];
        !e.m && e.j && (a(e.j, e.l, e.o, e.k, "", e.n, "", !1, !1, e.fa), e.m=!0)
    }
    b && (this.n = a)
};
k.getRegisteredAdblockUrls = function() {
    for (var a = [], b = this.j.length, c = 0; c < b; c++)
        a.push(this.j[c].l);
    return a
};
k.setupOse = function(a) {
    if (this.getOseId())
        return this.getOseId();
    var b = window.google_enable_ose, c;
    !0 === b ? c = 2 : !1 !== b && (c = $a([0], sd), null == c && ((c = $a([2], rd)) || (c = 3)));
    if (!c)
        return 0;
    this.l = c;
    this.o = String(a || 0);
    return this.getOseId()
};
k.getOseId = function() {
    return window ? this.l : - 1
};
k.getCorrelator = function() {
    return this.o
};
k.numBlocks = function() {
    return this.k.length + this.j.length
};
k.registerAdBlock = function(a, b, c, d, e, f) {
    var g = null;
    e && f && (g = {
        width: e,
        height: f
    });
    if (this.n && d)
        this.n(d, a, b, !0, "", g, "", !1, !1, !1);
    else {
        if ("js" == c)
            td(this, a);
        else {
            var h = new wd(a, b, d, g);
            this.j.push(h);
            d && cd(d, function() {
                h.k=!0
            })
        }
        this.q || (Wa(), Ra(), this.q=!0)
    }
};
k.unloadAdBlock = function(a, b) {
    r(window.Goog_Osd_UnloadAdBlock) && Goog_Osd_UnloadAdBlock(a, b)
};
k.setUpForcePeriscope = function() {
    window.google_enable_ose_periscope && (this.r=!0)
};
k.shouldForcePeriscope = function() {
    return this.r
};
var xd = function() {
    var a = Va(), b = a.__google_ad_urls;
    if (!b)
        return a.__google_ad_urls = new O(a);
    try {
        if (0 <= b.getOseId())
            return b
    } catch (c) {}
    return a.__google_ad_urls = new O(a, b)
}, wd = function(a, b, c, d) {
    this.l = a;
    this.o = b;
    this.j = c;
    this.m = this.k=!1;
    this.n = d;
    this.fa=!1
};
z("Goog_AdSense_getAdAdapterInstance", xd);
z("Goog_AdSense_OsdAdapter", O);
z("Goog_AdSense_OsdAdapter.prototype.numBlocks", O.prototype.numBlocks);
z("Goog_AdSense_OsdAdapter.prototype.getNewBlocks", O.prototype.getNewBlocks);
z("Goog_AdSense_OsdAdapter.prototype.getOseId", O.prototype.getOseId);
z("Goog_AdSense_OsdAdapter.prototype.getCorrelator", O.prototype.getCorrelator);
z("Goog_AdSense_OsdAdapter.prototype.getRegisteredAdblockUrls", O.prototype.getRegisteredAdblockUrls);
z("Goog_AdSense_OsdAdapter.prototype.setupOse", O.prototype.setupOse);
z("Goog_AdSense_OsdAdapter.prototype.registerAdBlock", O.prototype.registerAdBlock);
z("Goog_AdSense_OsdAdapter.prototype.setUpForcePeriscope", O.prototype.setUpForcePeriscope);
z("Goog_AdSense_OsdAdapter.prototype.shouldForcePeriscope", O.prototype.shouldForcePeriscope);
z("Goog_AdSense_OsdAdapter.prototype.unloadAdBlock", O.prototype.unloadAdBlock);
var P = q.googletag._vars_, yd = P["#7#"], zd = P["#20#"], Sa = [P["#6#"] ? "https": "http", "://", P["#1#"], "/pagead/osd.js"].join(""), rd = yd, sd = zd;
var Ad = function(a, b) {
    var c = b[J(a)];
    return null != c ? Wc(c) : null
}, Bd = function(a, b, c) {
    if (null != Wc(b))
        return !0;
    b=!1;
    for (var d = 0; d < a.length&&!b; d++)
        b = null != Ad(a[d], c);
    return b
}, Cd = function(a) {
    var b = a;
    "about:blank" != a && (b = b.replace(/</g, "%3C").replace(/>/g, "%3E").replace(/"/g, "%22").replace(/'/g, "%27"), /^https?:\/\//.test(b) || (b = "unknown:" + b));
    return b
}, Dd = /\+/g, Ed = function(a) {
    var b = P["#6#"];
    return a || b ? "https://" + P["#3#"] : "http://" + P["#2#"]
}, Fd = function() {
    var a = navigator.userAgent, b = a.indexOf("MSIE ");
    return - 1 ==
    b ? 0 : parseFloat(a.substring(b + 5, a.indexOf(";", b)))
}, Gd = function(a, b) {
    var c = 0, d = [];
    a && (d.push(a.getName()), d.push(ec(a)), d.push(K(a)));
    if (b) {
        var e;
        e = [];
        for (var f = 0, g = b; g && 25 > f; g = g.parentNode, ++f)
            e.push(9 != g.nodeType && g.id || "");
        (e = e.join()) && d.push(e)
    }
    0 < d.length && (c = ab(d.join(":")));
    return c.toString()
}, Hd = {
    bb: "visible",
    Za: "hidden",
    ab: "prerender",
    $a: "other"
}, Id = function(a) {
    a = a || document;
    a = a.webkitVisibilityState || a.mozVisibilityState || a.visibilityState || "visible";
    var b;
    t: {
        for (b in Hd)
            if (Hd[b] == a) {
                b =
                !0;
                break t
            }
        b=!1
    }
    return b ? a : "other"
}, Jd = function() {
    return Boolean(q.JSON && q.JSON.parse) && (!G || I(9)) && (!Ab || I(12))
};
var Kd = function() {
    this.j = {};
    var a = ja.URL;
    null == Q(this, "target_platform") && (this.j.target_platform = "DESKTOP");
    for (var b = this.j, a = a.split("?"), a = a[a.length - 1].split("&"), c = 0; c < a.length; c++) {
        var d = a[c].split("=");
        if (d[0]) {
            var e = d[0].toLowerCase();
            if ("google_domain_reset_url" != e)
                try {
                    var f;
                    if (1 < d.length) {
                        var g = d[1];
                        f = window.decodeURIComponent ? decodeURIComponent(g.replace(Dd, " ")) : unescape(g)
                    } else 
                        f = "";
                        b[e] = f
                } catch (h) {}
        }
    }
}, Q = function(a, b) {
    return null == b ? null : a.j[b]
};
var Ld = function(a) {
    this.j = {};
    this.v = {};
    this.l = [];
    this.o = {};
    this.t = [];
    this.D = a;
    this.k = new Sc(a);
    this.n = {};
    this.u = {};
    this.q = {};
    this.m = {};
    this.A = this.r = "";
    this.w = null;
    this.B =- 1
}, Md = function(a, b, c) {
    b = new ac(b, c ||!1);
    if (!b.getName())
        return null;
    c = J(b);
    var d = a.j[c];
    if (d)
        return d;
    a.j[c] = b;
    a.v[b.getName()] || (a.v[b.getName()] = []);
    return a.v[b.getName()][b.getInstance()] = b
}, Od = function(a) {
    return fb(Nd(a), function(a) {
        return !a.m
    })
}, Pd = function(a, b) {
    - 1 == jb(a.l, function(a) {
        return J(b) == J(a)
    }) && a.l.push(b)
}, Qd =
function(a, b) {
    for (var c = 0; c < b.length; c++) {
        var d = b[c], e = J(d);
        e in a.j && (bc(d), lb(a.l, function(a) {
            return J(a) == e
        }))
    }
}, Rd = function(a) {
    a = fb(Nd(a), function(a) {
        return !!a.m&&!(a.m && a.q)
    });
    return gb(a, function(a) {
        return [a.getName(), a.getInstance()]
    })
}, Sd = function(a) {
    var b = 0;
    C(a.j, function() {
        b++
    });
    return b
};
Ld.prototype.toString = function() {
    var a = "[AdData:", b = [];
    C(this.j, function(a) {
        b.push(a.toString())
    });
    C(this.o, function(a, d) {
        b.push("[" + d + "," + a + "]")
    });
    a += b.join();
    return a + "]"
};
var Td = function(a, b) {
    if (b) {
        var c = b.getName(), d = b.getSlotId().getInstance();
        return a.j[c + "_" + d] || null
    }
    return null
}, Nd = function(a) {
    var b = [];
    C(a.j, function(a) {
        b.push(a)
    });
    return b
}, Ud = function(a) {
    a = gb(Nd(a), function(a) {
        return a.t
    });
    qb(a);
    return a
}, Vd = function(a) {
    var b = [];
    C(a.o, function(a, d) {
        b.push(D(d) + "=" + D(a))
    });
    0 < a.t.length&&!("excl_cat"in a.o) && b.push(D("excl_cat") + "=" + D(a.t.join(",")));
    return b.join("&")
}, Wd = function(a, b) {
    var c = a.q[J(b)], d;
    if (c)
        if (c)
            try {
                var e = window.top, f = new E(0, 0), g, h = Ob(c);
                g =
                h ? Vb(h) : window;
                do {
                    var l;
                    if (g == e)
                        l = nd(c);
                    else {
                        var h = c, n = void 0;
                        if (h.getBoundingClientRect)
                            var p = ld(h), n = new E(p.left, p.top);
                        else 
                            var m = void 0, v = Pb(h), m = Wb(v.j), x = nd(h), n = new E(x.x - m.x, x.y - m.y);
                            m = void 0;
                            if (Bb&&!I(12)) {
                                var s = void 0;
                                var R = void 0, ta;
                                n:
                                {
                                    var eb = h, yb = Ga("transform");
                                    if (void 0 === eb.style[yb]) {
                                        var og = ed() + Ha(yb);
                                        if (void 0 !== eb.style[og]) {
                                            ta = (H ? "-webkit" : Bb ? "-moz" : G ? "-ms" : Ab ? "-o" : null) + "-transform";
                                            break n
                                        }
                                    }
                                    ta = "transform"
                                }
                                if (R = kd(h, ta) || kd(h, "transform"))
                                    var nc = R.match(qd), s = nc ? new E(parseFloat(nc[1]),
                                    parseFloat(nc[2])): new E(0, 0);
                                else 
                                    s = new E(0, 0);
                                    m = new E(n.x + s.x, n.y + s.y)
                                } else 
                                    m = n;
                                    l = m
                        }
                        h = l;
                        f.x += h.x;
                        f.y += h.y
                }
                while (g && g != e && (c = g.frameElement) && (g = g.parent));
                d = f
            } catch (kh) {
        d = new E( - 12245933, - 12245933)
    } else 
        d = null;
    else 
        d = null;
    return d
};
var Xd = function() {
    this.o = "";
    this.u = "json_html";
    this.k = "fif";
    this.m = 1;
    this.v=!1;
    this.n = "";
    this.j = [];
    this.w = this.persistentRoadblocksOnly=!1;
    this.videoPodNumber = this.videoPodPosition = NaN;
    this.r = this.t = "";
    this.q=!1;
    this.videoStreamCorrelator = NaN;
    this.l = 0
};
var Yd = function(a) {
    a = String(a);
    if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
        try {
            return eval("(" + a + ")")
    } catch (b) {}
    throw Error("Invalid JSON string: " + a);
}, S = function(a) {
    var b = [];
    Zd(new $d, a, b);
    return b.join("")
}, $d = function() {}, Zd = function(a, b, c) {
    switch (typeof b) {
    case "string":
        ae(b, c);
        break;
    case "number":
        c.push(isFinite(b) &&
        !isNaN(b) ? b : "null");
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
        if (ca(b)) {
            var d = b.length;
            c.push("[");
            for (var e = "", f = 0; f < d; f++)
                c.push(e), Zd(a, b[f], c), e = ",";
            c.push("]");
            break
        }
        c.push("{");
        d = "";
        for (e in b)
            Object.prototype.hasOwnProperty.call(b, e) && (f = b[e], "function" != typeof f && (c.push(d), ae(e, c), c.push(":"), Zd(a, f, c), d = ","));
        c.push("}");
        break;
    case "function":
        break;
    default:
        throw Error("Unknown type: " + typeof b);
    }
}, be = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\u000b"
}, ce = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g: /[\\\"\x00-\x1f\x7f-\xff]/g, ae = function(a, b) {
    b.push('"', a.replace(ce, function(a) {
        if (a in be)
            return be[a];
        var b = a.charCodeAt(0), e = "\\u";
        16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
        return be[a] = e + b.toString(16)
    }), '"')
};
var de = function(a, b, c, d) {
    this.n = a;
    this.k = 1;
    this.m = b;
    this.q = c;
    this.u = d;
    this.o = Math.random();
    this.j = {};
    this.l = null;
    this.r = y(this.v, this)
};
de.prototype.v = function(a) {
    if (a.origin == this.q && a.source == this.m) {
        var b = null;
        try {
            b = Yd(a.data)
        } catch (c) {}
        if (w(b) && (a = b.i, b.c === this.n && a != this.o && (2 != this.k && (this.k = 2, ee(this), this.l && (this.l(), this.l = null)), a = b.s, b = b.p, t(a) && (t(b) || w(b)) && this.j.hasOwnProperty(a))))
            this.j[a](b)
    }
};
var ee = function(a) {
    var b = {};
    b.c = a.n;
    b.i = a.o;
    a.m.postMessage(S(b), a.q)
};
de.prototype.t = function() {
    if (1 == this.k) {
        try {
            this.m.postMessage && ee(this)
        } catch (a) {}
        window.setTimeout(y(this.t, this), 50)
    }
};
de.prototype.send = function(a, b) {
    var c = {};
    c.c = this.n;
    c.i = this.o;
    c.s = a;
    c.p = b;
    this.m.postMessage(S(c), this.q)
};
de.prototype.close = function() {
    3 != this.k && (this.k = 3, Ma(window, "message", this.r))
};
H && document.createElement("iframe");
Bb || H || G && I(11);
var fe = function(a) {
    this.k = a;
    this.n = null;
    this.r = this.m = 0;
    this.l = null;
    this.B = "sfchannel" + a
};
var ge = function(a, b, c, d, e, f) {
    this.l = a.clone();
    this.j = b.clone();
    this.m = c;
    this.k = d.clone();
    this.n = e;
    this.o = f
}, he = function(a) {
    return S({
        windowCoords_t: a.l.top,
        windowCoords_r: a.l.right,
        windowCoords_b: a.l.bottom,
        windowCoords_l: a.l.left,
        frameCoords_t: a.j.top,
        frameCoords_r: a.j.right,
        frameCoords_b: a.j.bottom,
        frameCoords_l: a.j.left,
        styleZIndex: a.m,
        allowedExpansion_t: a.k.top,
        allowedExpansion_r: a.k.right,
        allowedExpansion_b: a.k.bottom,
        allowedExpansion_l: a.k.left,
        xInView: a.n,
        yInView: a.o
    })
}, ie = function(a) {
    var b =
    window.screenX || window.screenLeft || 0, c = window.screenY || window.screenTop || 0, b = new ad(c, (window.outerWidth || document.documentElement.clientWidth || 0) - b, (window.outerHeight || document.documentElement.clientHeight || 0) - c, b), c = nd(a), d;
    if ("none" != kd(a, "display"))
        d = pd(a);
    else {
        d = a.style;
        var e = d.display, f = d.visibility, g = d.position;
        d.visibility = "hidden";
        d.position = "absolute";
        d.display = "inline";
        var h = pd(a);
        d.display = e;
        d.position = g;
        d.visibility = f;
        d = h
    }
    c = new fd(c.x, c.y, d.width, d.height);
    d = new ad(c.top, c.left + c.width,
    c.top + c.height, c.left);
    for (var e = String(kd(a, "zIndex")), f = new ad(0, Infinity, Infinity, 0), g = Pb(a), l = g.j.body, n = g.j.documentElement, h = Ub(g.j); a = md(a);)
        if (!(G && 0 == a.clientWidth || H && 0 == a.clientHeight && a == l) && a != l && a != n && "visible" != kd(a, "overflow")) {
            var p = nd(a), m;
            m = a;
            if (Bb&&!I("1.9")) {
                var v = parseFloat(jd(m, "borderLeftWidth"));
                if ("rtl" == kd(m, "direction"))
                    var x = m.offsetWidth - m.clientWidth - v - parseFloat(jd(m, "borderRightWidth")), v = v + x;
                    m = new E(v, parseFloat(jd(m, "borderTopWidth")))
                } else 
                    m = new E(m.clientLeft,
                    m.clientTop);
                    p.x += m.x;
                    p.y += m.y;
                    f.top = Math.max(f.top, p.y);
                    f.right = Math.min(f.right, p.x + a.clientWidth);
                    f.bottom = Math.min(f.bottom, p.y + a.clientHeight);
                    f.left = Math.max(f.left, p.x)
        }
    a = h.scrollLeft;
    h = h.scrollTop;
    f.left = Math.max(f.left, a);
    f.top = Math.max(f.top, h);
    g = Tb(Vb(g.j) || window);
    f.right = Math.min(f.right, a + g.width);
    f.bottom = Math.min(f.bottom, h + g.height);
    a = 0 <= f.top && 0 <= f.left && f.bottom > f.top && f.right > f.left ? f : null;
    var s;
    if (null != a)
        t: {
        h = gd(a);
        s = Math.max(h.left, c.left);
        f = Math.min(h.left + h.width, c.left + c.width);
        if (s <= f && (g = Math.max(h.top, c.top), h = Math.min(h.top + h.height, c.top + c.height), g <= h)) {
            s = new fd(s, g, f - s, h - g);
            break t
        }
        s = null
    }
    a = (f = (f = null != s && (0 != s.width || s.left + s.width != a.left && s.left != a.right)) && (0 != s.height || s.top + s.height != a.top && s.top != a.bottom)) ? new ad(Math.max(d.top - a.top, 0), Math.max(a.right - d.right, 0), Math.max(a.bottom - d.bottom, 0), Math.max(d.left - a.left, 0)) : new ad(0, 0, 0, 0);
    g = f = 0;
    s&&!(new sb(s.width, s.height)).isEmpty() && (f = s.width / c.width, g = s.height / c.height);
    return new ge(b, d, e, a, f, g)
};
var je=!1, ke = "", le = function(a) {
    a = a.match(/[\d]+/g);
    if (!a)
        return "";
    a.length = 3;
    return a.join(".")
};
if (navigator.plugins && navigator.plugins.length) {
    var me = navigator.plugins["Shockwave Flash"];
    me && (je=!0, me.description && (ke = le(me.description)));
    navigator.plugins["Shockwave Flash 2.0"] && (je=!0, ke = "2.0.0.11")
} else if (navigator.mimeTypes && navigator.mimeTypes.length) {
    var ne = navigator.mimeTypes["application/x-shockwave-flash"];
    (je = ne && ne.enabledPlugin) && (ke = le(ne.enabledPlugin.description))
} else 
    try {
        var oe = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), je=!0, ke = le(oe.GetVariable("$version"))
} catch (pe) {
    try {
        oe =
        new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), je=!0, ke = "6.0.21"
    } catch (qe) {
        try {
            oe = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), je=!0, ke = le(oe.GetVariable("$version"))
        } catch (re) {}
    }
}
var se = je, te = ke;
var ue = function() {
    this.j = {
        shared: {
            sf_ver: "1-0-0",
            ck_on: navigator.cookieEnabled ? 1: 0,
            flash_ver: se ? te: "0"
        }
    }
};
var ve = function() {
    this.j=!0;
    this.k=!1
};
var we = function(a, b, c) {
    var d = new ve, e = new ue;
    this.n = a;
    this.j = b;
    this.k = c;
    this.m = d;
    this.l = e
};
var xe = function(a) {
    this.j = a
}, ye = function(a, b) {
    this.j = a;
    this.version = b
};
A(ye, xe);
ye.prototype.l = function() {
    return S({
        uid: this.j,
        version: this.version
    })
};
var ze = function(a, b, c) {
    this.j = a;
    this.m = b;
    this.k = c
};
A(ze, xe);
ze.prototype.l = function() {
    return S({
        uid: this.j,
        initialWidth: this.m,
        initialHeight: this.k
    })
};
var Ae = function(a, b) {
    this.j = a;
    this.description = b
};
A(Ae, xe);
Ae.prototype.l = function() {
    return S({
        uid: this.j,
        description: this.description
    })
};
var Be = function(a, b) {
    this.j = a;
    this.k = b
};
A(Be, xe);
Be.prototype.l = function() {
    return S({
        uid: this.j,
        expand_t: this.k.top,
        expand_r: this.k.right,
        expand_b: this.k.bottom,
        expand_l: this.k.left
    })
};
var Ce = function(a) {
    this.j = a
};
A(Ce, xe);
Ce.prototype.l = function() {
    return S({
        uid: this.j
    })
};
var De = function(a, b) {
    this.j = a;
    this.m = b
};
A(De, xe);
De.prototype.l = function() {
    var a = {
        uid: this.j,
        newGeometry: he(this.m)
    };
    return S(a)
};
var Ee = function(a, b, c, d) {
    De.call(this, a, c);
    this.n = b;
    this.k = d
};
A(Ee, De);
Ee.prototype.l = function() {
    var a = {
        uid: this.j,
        success: this.n,
        newGeometry: he(this.m),
        expand_t: this.k.top,
        expand_r: this.k.right,
        expand_b: this.k.bottom,
        expand_l: this.k.left
    };
    return S(a)
};
var Fe = function(a) {
    try {
        for (var b = null; b != a; b = a, a = a.parent)
            switch (a.location.protocol) {
            case "https:":
                return !0;
            case "http:":
            case "file:":
                return !1
            }
    } catch (c) {}
    return !0
};
var Ie = function(a) {
    fe.call(this, Ge++);
    this.q = a.Ca;
    this.v = a.Q;
    this.D = window.location.protocol + "//" + window.location.host;
    this.A = window.location.protocol + "//tpc.googlesyndication.com";
    this.u = Boolean(a.Aa);
    var b = a.Q, c = a.size;
    b.style.width = od(c.width, !0);
    b.style.height = od(c.height, !0);
    this.n = this.t = ie(a.Q);
    var b = a.Ba, d = a.content, c = a.size;
    a = Pb(this.v);
    var d = "1-0-0;" + d.length + ";" + d, e;
    e = new we(this.k, this.D, this.t);
    var f = e.n, g = e.j, h = he(e.k), l;
    l = e.m;
    l = S({
        expandByOverlay: l.j,
        expandByPush: l.k,
        readCookie: !1,
        writeCookie: !1
    });
    e = {
        uid: f,
        hostPeerName: g,
        initialGeometry: h,
        permissions: l,
        metadata: S(e.l.j)
    };
    e = S(e);
    d = d + e;
    this.u && (e = Pb(this.v), He || (f = e.k("script", {
        src: "//pagead2.googlesyndication.com/pagead/expansion_embed.js?source=safeframe"
    }), e.j.getElementsByTagName("script")[0].parentElement.appendChild(f), He=!0), e = Vb(e.j), e.google_eas_queue = e.google_eas_queue || [], e.google_eas_queue.push({
        a: b,
        b: e.location.protocol + "//tpc.googlesyndication.com",
        c: c.width,
        d: c.height,
        e: "sf-gdn-exp-" + this.k,
        f: void 0,
        g: void 0,
        h: void 0
    }));
    e = Vb(a.j);
    f = "//tpc.googlesyndication.com/safeframe/1-0-0/html/container.html";
    g = e;
    for (h = 0; g != g.parent;)
        h++, g = g.parent;
    (g = h) && (f += "?n=" + g);
    e = (Fe(e) ? "https:" : "http:") + f;
    this.u && (e += "#" + ["xpc=", "sf-gdn-exp-" + this.k, "&p=", encodeURIComponent(ja.location.protocol), "//", encodeURIComponent(ja.location.host)].join(""));
    b = {
        id: b,
        name: d,
        src: e,
        scrolling: "no",
        marginWidth: "0",
        marginHeight: "0",
        width: String(c.width),
        height: String(c.height),
        "data-is-safeframe": "true"
    };
    c = {
        frameborder: 0,
        style: "border:0;vertical-align:bottom;",
        allowTransparency: "true",
        src: G&&!I(9) ? "javascript:\"<html><body style='background:transparent'></body></html>\"": "about:blank"
    };
    b && wb(c, b);
    a = a.k("iframe", c);
    this.v.appendChild(a);
    this.j = a;
    this.w = y(this.Fa, this);
    this.o = 0;
    this.l = new de(this.B, this.j.contentWindow, this.A, !1);
    a = y(this.Ga, this);
    this.l.j.init_done = a;
    a = y(this.Ia, this);
    this.l.j.register_done = a;
    a = y(this.Ja, this);
    this.l.j.report_error = a;
    a = y(this.Ea, this);
    this.l.j.expand_request = a;
    a = y(this.Da, this);
    this.l.j.collapse_request = a;
    a = this.l;
    if (b =
    y(this.Ha, this))
        a.l = b;
    La(window, "message", a.r);
    a.u && a.t()
};
A(Ie, fe);
var Ge = 1;
k = Ie.prototype;
k.Ha = function() {
    La(window, "resize", this.w);
    La(window, "scroll", this.w)
};
k.Ga = function(a) {
    try {
        if (0 != this.m)
            throw Error("Container already initialized");
        if (!t(a))
            throw Error("Could not parse serialized message");
        var b, c = Yd(a);
        if (!(w(c) && u(c.uid) && t(c.version)))
            throw Error("Cannot parse JSON message");
        b = new ye(c.uid, c.version);
        if (this.k != b.j || "1-0-0" != b.version)
            throw Error("Wrong source container");
        this.m = 1
    } catch (d) {
        this.q.error("Invalid INITIALIZE_DONE message. Reason: " + d.message)
    }
};
k.Ia = function(a) {
    try {
        if (1 != this.m)
            throw Error("Container not initialized");
        if (!t(a))
            throw Error("Could not parse serialized message");
        var b = Yd(a);
        if (!(w(b) && u(b.uid) && u(b.initialWidth) && u(b.initialHeight)))
            throw Error("Cannot parse JSON message");
        if (this.k != (new ze(b.uid, b.initialWidth, b.initialHeight)).j)
            throw Error("Wrong source container");
        this.m = 2
    } catch (c) {
        this.q.error("Invalid REGISTER_DONE message. Reason: " + c.message)
    }
};
k.Ja = function(a) {
    try {
        if (!t(a))
            throw Error("Could not parse serialized message");
        var b, c = Yd(a);
        if (!(w(c) && u(c.uid) && t(c.description)))
            throw Error("Cannot parse JSON message");
        b = new Ae(c.uid, c.description);
        if (this.k != b.j)
            throw Error("Wrong source container");
        this.q.info("Ext reported an error. Description: " + b.description)
    } catch (d) {
        this.q.error("Invalid REPORT_ERROR message. Reason: " + d.message)
    }
};
k.Ea = function(a) {
    try {
        if (2 != this.m)
            throw Error("Container is not registered");
        if (0 != this.r)
            throw Error("Container is not collapsed");
        if (!t(a))
            throw Error("Could not parse serialized message");
        var b, c = Yd(a);
        if (!(w(c) && u(c.uid) && u(c.expand_t) && u(c.expand_r) && u(c.expand_b) && u(c.expand_l)))
            throw Error("Cannot parse JSON message");
        b = new Be(c.uid, new ad(c.expand_t, c.expand_r, c.expand_b, c.expand_l));
        if (this.k != b.j)
            throw Error("Wrong source container");
        if (!(0 <= b.k.top && 0 <= b.k.left && 0 <= b.k.bottom && 0 <= b.k.right))
            throw Error("Invalid expansion amounts");
        var d = ie(this.j), e = b.k;
        if (e.top <= d.k.top && e.right <= d.k.right && e.bottom <= d.k.bottom && e.left <= d.k.left) {
            var f = gd(new ad(d.j.top - b.k.top, d.j.right + b.k.right, d.j.bottom + b.k.bottom, d.j.left - b.k.left));
            id(this.j, "zIndex", "10000");
            id(this.j, "position", "absolute");
            var g = this.j, h = f.left, l = f.top, n, p, m = Bb && (Db || Fb) && I("1.9");
            h instanceof E ? (n = h.x, p = h.y) : (n = h, p = l);
            g.style.left = od(n, m);
            g.style.top = od(p, m);
            this.j.style.width = od(f.width, !0);
            this.j.style.height = od(f.height, !0);
            this.r = 2;
            this.n = ie(this.j);
            var v = new Ee(this.k,
            !0, this.n, b.k)
        } else 
            this.n = d, v = new Ee(this.k, !1, this.n, b.k);
        this.l.send("expand_response", v.l())
    } catch (x) {
        this.q.error("Invalid EXPAND_REQUEST message. Reason: " + x.message)
    }
};
k.Da = function(a) {
    try {
        if (2 != this.m)
            throw Error("Container is not registered");
        if (2 != this.r)
            throw Error("Container is not expanded");
        if (!t(a))
            throw Error("Could not parse serialized message");
        var b = Yd(a);
        if (!w(b) ||!u(b.uid))
            throw Error("Cannot parse JSON message");
        if (this.k != (new Ce(b.uid)).j)
            throw Error("Wrong source container");
        var c = gd(this.t.j);
        id(this.j, "zIndex", this.t.m);
        id(this.j, "position", "static");
        this.j.style.width = od(c.width, !0);
        this.j.style.height = od(c.height, !0);
        this.r = 0;
        this.n = ie(this.j);
        this.l.send("collapse_response", (new De(this.k, this.n)).l())
    } catch (d) {
        this.q.error("Invalid COLLAPSE_REQUEST message. Reason: " + d.message)
    }
};
k.Fa = function() {
    if (1 == this.m || 2 == this.m)
        switch (this.o) {
        case 0:
            Je(this);
            setTimeout(y(this.wa, this), 1E3);
            this.o = 1;
            break;
        case 1:
            this.o = 2;
            break;
        case 2:
            this.o = 2
        }
};
k.wa = function() {
    if (1 == this.m || 2 == this.m)
        switch (this.o) {
        case 1:
            this.o = 0;
            break;
        case 2:
            Je(this), setTimeout(y(this.wa, this), 1E3), this.o = 1
        }
};
var Je = function(a) {
    a.n = ie(a.j);
    a.l.send("geometry_update", (new De(a.k, a.n)).l())
}, He=!1;
var Me = function(a) {
    this.m = document;
    this.j = a || 0;
    this.k = Ke(this, "__gads=");
    this.o = this.n=!1;
    Le(this)
}, Ne = function(a, b) {
    if (b._cookies_ && b._cookies_.length && (a.l = b._cookies_[0], null != a.l && (a.k = a.l._value_, null != a.l && a.k))) {
        var c = new Date;
        c.setTime(1E3 * a.l._expires_);
        a.m.cookie = "__gads=" + a.k + "; expires=" + c.toGMTString() + "; path=" + a.l._path_ + "; domain=." + a.l._domain_
    }
}, Le = function(a) {
    if (!a.k&&!a.o && 1 != a.j) {
        a.m.cookie = "GoogleAdServingTest=Good";
        var b = "Good" == Ke(a, "GoogleAdServingTest=");
        if (b) {
            var c = new Date;
            c.setTime((new Date).valueOf() +- 1);
            a.m.cookie = "GoogleAdServingTest=; expires=" + c.toGMTString()
        }
        a.n = b;
        a.o=!0
    }
}, Ke = function(a, b) {
    var c = a.m.cookie, d = c.indexOf(b), e = "";
    - 1 != d && (d += b.length, e = c.indexOf(";", d), - 1 == e && (e = c.length), e = c.substring(d, e));
    return e
}, Oe = null, Pe = function(a) {
    null == Oe && (Oe = new Me(a));
    return Oe
};
var Qe = new oc, Re = [], Te = function(a, b, c) {
    c = c || [];
    a = new Se(a);
    if (Kc.apply(a, c)()) {
        var d = ub(a.j);
        c = a.k;
        var e = a.l;
        (pc ? 0 : e ? c.j.hasOwnProperty(e) && "" == c.j[e] : 1) && (b = Ka(d, b * d.length)) && qc(c, b, e)
    }
    Re.push(a);
    return a
}, Ue = function() {
    return mb(Qe.k, fb(ub(Qe.j), Lc()))
}, Se = function(a) {
    this.j = a;
    this.k = Qe;
    this.l = "exp" + (this[fa] || (this[fa]=++ga));
    this.k.j[this.l] = ""
}, Ve = function(a) {
    return "experiment"in a.j ? a.j.experiment == a.k.l(a.l) : !1
}, We = function(a, b) {
    b in a.j && qc(a.k, a.j[b], a.l)
}, Xe = function(a) {
    for (var b = 0; b < Re.length; ++b) {
        var c =
        Re[b], d = c.j, e = {}, f = void 0;
        for (f in d)
            e[d[f]] = f;
        d = e[a];
        if (null != d) {
            We(c, d);
            return 
        }
    }
    0 <= cb(Qe.k, a) || qc(Qe, a)
}, Ye = P["#18#"], Ze;
Ze = 0 <= cb(["prerender"], Id(void 0));
Te({
    control: "108809009",
    experiment: "108809010"
}, Ye, [Jc(Ze)]);
var $e = Te({
    control: "108809021",
    experiment: "108809022"
}, P["#25#"], [Jc(Jd())]);
Te({
    branch_1: "108809028",
    branch_2: "108809029"
}, P["#27#"]);
var af = Te({
    control: "108809030",
    experiment: "108809031"
}, P["#28#"]), bf = Te({
    control: "108809034",
    experiment: "108809035"
}, P["#31#"]);
P["#39#"] && Xe(P["#39#"]);
var cf = function() {
    var a = q.googletag;
    return null != a && ea(a.getVersion) ? a.getVersion() : null
};
var df = function(a, b, c, d, e) {
    this.j = b;
    this.q = c;
    this.l = d;
    this.n = a;
    this.k = e;
    this.m = "";
    this.w = ic;
    this.o = [];
    this.u = []
};
df.prototype.F = function(a, b) {
    if (!ca(a))
        return "";
    if ("sra" == this.n)
        0 == a.length && (a = Nd(this.j));
    else {
        if (0 == a.length)
            return "";
        1 < a.length && (a = [a[0]])
    }
    this.t();
    this.v(a);
    return b ? ef(this.m, 2048) : this.m
};
df.prototype.v = function(a) {
    try {
        var b, c = "", d = 0;
        "prerender" == Id(document) ? (c = "108809008", d = P["#17#"]) : (c = "108809007", d = P["#16#"]);
        b = $a([c], d);
        T(this, "eid", (b ? mb(this.k.j, b) : this.k.j).join())
    } catch (e) {}
    this.l && 0 !== this.l.j && T(this, "co", this.l.j);
    b = this.j.B;
    - 1 !== b && T(this, "tfcd", b);
    Boolean(window.postMessage) && T(this, "sfv", "1-0-0");
    if ("sra" == this.n) {
        b = a.length;
        for (c = 0; c < b; c++) {
            var d = a[c].getName(), f = "";
            if ("" != d) {
                d = d.split("/");
                for (f = 0; f < d.length; f++)
                    if ("" != d[f]) {
                        for (var g=!1, h = 0; h < this.o.length; h++)
                            if (d[f] ==
                            this.o[h]) {
                                g=!0;
                                break
                            }
                            g || this.o.push(d[f])
                    }
                f = "";
                for (g = 0; g < d.length; g++) {
                    if (0 < g)
                        f += "/";
                    else if ("" == d[0])
                        continue;
                    for (h = 0; h < this.o.length; h++)
                        if (d[g] == this.o[h]) {
                            f += h;
                            break
                        }
                }
            }
            this.u.push(f)
        }
        T(this, "iu_parts", this.o.join());
        T(this, "enc_prev_ius", this.u.join());
        b = [];
        for (c = 0; c < a.length; ++c)
            b.push(ec(a[c]));
        T(this, "prev_iu_szs", b.join());
        if (a.length) {
            b = "";
            for (c = 0; c < a.length; ++c)
                b += a[c].getOutOfPage() ? "1" : "0";
            b = parseInt(b, 2)
        } else 
            b = 0;
        b && T(this, "ists", b);
        ff(this);
        c = null;
        b = [];
        for (c = 0; c < a.length; ++c)
            b.push(fc(a[c]));
        c = b.join("|");
        c.length == b.length - 1 && (c = null);
        T(this, "prev_scp", c)
    } else 
        b = a[0].j.gtfcd(), - 1 !== b && T(this, "tfcd", b), b = a[0], T(this, "iu", b.getName()), T(this, "sz", ec(b)), b.getClickUrl() && T(this, "click", b.getClickUrl()), b.getOutOfPage() && T(this, "ists", "1"), b in this.j.m && T(this, "logonly", "1"), ff(this), b = a[0], c = fc(b), T(this, "scp", c), b = b.getAudExtId(), 0 < b && T(this, "audextid", b);
    b = a[0].k;
    c = Bd(a, this.j.k, this.j.n);
    d = this.k.v;
    f = 3 == this.k.m;
    g = 0;
    1 != this.k.m && (g|=1);
    b && (g|=2);
    c && (g|=4);
    d && (g|=8);
    f && (g|=16);
    b = g;
    0 <
    b && T(this, "eri", b);
    "prerender" == Id() && T(this, "d_imp", 1);
    b = window;
    c = document;
    T(this, "cust_params", Vd(this.j));
    this.l && 1 != this.l.j && (T(this, "cookie", this.l.k), this.l.n && T(this, "cookie_enabled", "1"));
    (d = this.j.r) && T(this, "uule", d);
    this.l && 1 != this.l.j && (b = (Wc(this.j.k) || (b.top == b ? c.URL : c.referrer)) != c.URL ? c.domain : "") && T(this, "cdm", b);
    null != Q(this.q, "google_preview") && T(this, "gct", Q(this.q, "google_preview"));
    this.r(new Date, a);
    b = {};
    b.u_tz =- (new Date).getTimezoneOffset();
    var l;
    c = window;
    try {
        l = c.history.length
    } catch (n) {
        l =
        0
    }
    b.u_his = l;
    b.u_java = navigator.javaEnabled();
    window.screen && (b.u_h = window.screen.height, b.u_w = window.screen.width, b.u_ah = window.screen.availHeight, b.u_aw = window.screen.availWidth, b.u_cd = window.screen.colorDepth);
    navigator.plugins && (b.u_nplug = navigator.plugins.length);
    navigator.mimeTypes && (b.u_nmime = navigator.mimeTypes.length);
    gf(this, b);
    q.devicePixelRatio && U(this, "u_sd", Number(q.devicePixelRatio.toFixed(3)));
    var p;
    try {
        p = Za()
    } catch (m) {
        p = "0"
    }
    U(this, "flash", p);
    l = window;
    p = document;
    b = "sra" == this.n ? Wc(this.j.k) :
    Ad(a[0], this.j.n) || Wc(this.j.k);
    null == b && (b = Wc(this.j.k) || (l.top == l ? p.URL : p.referrer), null != Q(this.q, "google_preview") && (c = b.indexOf("google_preview=", b.lastIndexOf("?")), d = b.indexOf("&", c), - 1 == d && (d = b.length - 1, --c), b = b.substring(0, c) + b.substring(d + 1, b.length)));
    T(this, "url", b);
    Bd(a, this.j.k, this.j.n) && l.top != l || T(this, "ref", p.referrer);
    T(this, "vrg", cf());
    T(this, "vrp", "54")
};
var hf = function(a, b) {
    for (var c = b.length, d = [], e = 0; e < c; e++) {
        var f = Gd(b[e]);
        b[e].v = f;
        d.push(f)
    }
    T(a, "adks", d.join(","))
}, gf = function(a, b) {
    C(b, function(a, b) {
        U(this, b, a)
    }, a)
}, ff = function(a) {
    a.l && 1 == a.l.j || T(a, "ppid", a.j.A)
};
df.prototype.r = function(a, b) {
    T(this, "lmt", (Date.parse(document.lastModified) / 1E3).toString());
    U(this, "dt", a.getTime());
    if (document.body) {
        var c = document.body.scrollHeight, d = document.body.clientHeight;
        d && c && T(this, "cc", Math.round(100 * d / c).toString())
    }
    c = Q(this.q, "deb");
    null != c && T(this, "deb", c);
    c = Q(this.q, "haonly");
    null != c && T(this, "haonly", c);
    c = Zc();
    Qa(c, y(function(a, b) {
        T(this, b, a)
    }, this));
    c = $c();
    null != c && T(this, "frm", c);
    if (c = bd(!0))
        T(this, "biw", c.width), T(this, "bih", c.height);
    this.k.l && T(this, "oid",
    this.k.l);
    if ("sra" == this.n)
        hf(this, b);
    else {
        if (c = Wd(this.j, b[0]))
            T(this, "adx", Math.round(c.x)), T(this, "ady", Math.round(c.y));
        c = b[0].v || Gd(b[0], this.j.u[J(b[0])]);
        T(this, "adk", c)
    }
    c = dd();
    0 < c && T(this, "osd", c);
    c = this.j.k;
    d = "";
    "sra" == this.n ? d = Yc(b, c, this.j.n, this.w) : (d = this.j.n[J(b[0])], null == d ? d = c : Uc(d, c), d = Vc(d), d = d.F());
    d && (this.m += "&" + d)
};
df.prototype.t = function() {
    this.m = Ed(Boolean(this.j.r) || Ve(af)) + "/gampad/ads?";
    U(this, "gdfp_req", 1);
    T(this, "correlator", this.k.o);
    U(this, "output", this.k.u);
    U(this, "callback", this.k.n);
    U(this, "impl", this.k.k);
    this.k.persistentRoadblocksOnly && T(this, "per_only", 1);
    "sra" == this.n ? T(this, "json_a", 1) : this.k.w && T(this, "fif_to", 1)
};
var T = function(a, b, c) {
    null != c && U(a, b, D("" + c))
}, U = function(a, b, c) {
    null != c && "" != c && (a.m = "?" != a.m.charAt(a.m.length - 1) ? a.m + ("&" + b + "=" + c) : a.m + (b + "=" + c))
}, ef = function(a, b) {
    var c = b - 8;
    if (a.length > b) {
        var d = a.lastIndexOf("&", c);
        - 1 != d ? a = a.substring(0, d) : (a = a.substring(0, c), a = a.replace(/%\w?$/, ""));
        a += "&trunc=1"
    }
    return a
};
var jf = navigator;
function kf(a) {
    var b = 1, c = 0, d;
    if (void 0 != a && "" != a)
        for (b = 0, d = a.length - 1; 0 <= d; d--)
            c = a.charCodeAt(d), b = (b<<6 & 268435455) + c + (c<<14), c = b & 266338304, b = 0 != c ? b^c>>21 : b;
    return b
}
function lf(a, b) {
    if (!a || "none" == a)
        return 1;
    a = String(a);
    "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
    return kf(a.toLowerCase())
}
var mf = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/, nf = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/;
var of = function(a, b, c, d, e) {
    df.call(this, a, b, c, d, e)
};
A(of, df);
of.prototype.r = function(a, b) {
    0 < navigator.userAgent.indexOf("MSIE ") && Tc(this.j.k, "google_encoding", document.charset, !1);
    df.prototype.r.call(this, a, b);
    T(this, "ifi", b[0].u);
    var c;
    var d = window;
    d == d.top ? c = 0 : (c = [], c.push(d.document.URL), d.name && c.push(d.name), d = bd(!1, d, !1), c.push(d.width.toString()), c.push(d.height.toString()), c = ab(c.join("")));
    0 != c && T(this, "ifk", c.toString())
};
of.prototype.v = function(a) {
    var b = a[0], c = window;
    c.google_unique_id?++c.google_unique_id : c.google_unique_id = 1;
    b.u = c.google_unique_id;
    this.k.q && (U(this, "hxva", 1), T(this, "cmsid", this.k.r), T(this, "vid", this.k.t));
    isNaN(this.k.videoPodNumber) || U(this, "pod", this.k.videoPodNumber);
    isNaN(this.k.videoPodPosition) || U(this, "ppos", this.k.videoPodPosition);
    isNaN(this.k.videoStreamCorrelator) || U(this, "scor", this.k.videoStreamCorrelator);
    df.prototype.v.call(this, a);
    a = window;
    var b = a.document.domain, c = a.document.cookie,
    d = a.history.length, e = a.screen, f = a.document.referrer, g = Math.round((new Date).getTime() / 1E3), h = window.google_analytics_domain_name, b = "undefined" == typeof h ? lf("auto", b): lf(h, b), l =- 1 < c.indexOf("__utma=" + b + "."), n =- 1 < c.indexOf("__utmb=" + b), h = Hc("google_persistent_state"), p;
    (p = Ic(h)) || (p = h.S[Cc(14)] = {});
    h = p;
    p=!1;
    if (l)
        f = c.split("__utma=" + b + ".")[1].split(";")[0].split("."), n ? h.K = f[3] + "" : h.K || (h.K = g + ""), h.vid = f[0] + "." + f[1], h.pa=!0;
    else {
        h.K || (h.K = g + "");
        if (!h.vid) {
            p=!0;
            n = Math.round(2147483647 * Math.random());
            l = [jf.appName, jf.version, jf.language ? jf.language: jf.browserLanguage, jf.platform, jf.userAgent, jf.javaEnabled() ? 1: 0].join("");
            e ? l += e.width + "x" + e.height + e.colorDepth : window.java && (e = java.awt.Toolkit.getDefaultToolkit().getScreenSize(), l += e.screen.width + "x" + e.screen.height);
            l = l + c + (f || "");
            for (f = l.length; 0 < d;)
                l += d--^f++;
            h.vid = (n^kf(l) & 2147483647) + "." + g
        }
        h.pa=!1
    }
    if (!h.Na) {
        var m;
        t:
        {
            g = 999;
            if (f = window.google_analytics_domain_name)
                f = 0 == f.indexOf(".") ? f.substr(1) : f, g = ("" + f).split(".").length;
            f = 999;
            c = c.split(";");
            for (e = 0; e < c.length; e++)
                if (d = mf.exec(c[e]) || nf.exec(c[e])) {
                    if (d[1] == g) {
                        m = d[2];
                        break t
                    }
                    d[1] < f && (f = d[1], m = d[2])
                }
        }
        p && m&&-1 != m.search(/^\d+\.\d+$/) ? h.vid = m : m != h.vid && (h.Na = m)
    }
    h.Wa = b;
    h.qa || (h.qa = Math.round(2147483647 * Math.random()));
    m = Hc();
    m = Ic(m);
    U(this, "ga_vid", m.vid);
    U(this, "ga_sid", m.K);
    U(this, "ga_hid", m.qa);
    U(this, "ga_fc", m.pa);
    T(this, "ga_wpids", a.google_analytics_uacct)
};
var pf = function() {};
var qf, rf = function() {};
A(rf, pf);
rf.prototype.j = function() {
    var a;
    t: {
        if (!this.k && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    new ActiveXObject(d);
                    a = this.k = d;
                    break t
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        a = this.k
    }
    return a ? new ActiveXObject(a) : new XMLHttpRequest
};
qf = new rf;
var sf = function(a) {
    q.setTimeout(function() {
        throw a;
    }, 0)
}, tf, uf = function() {
    var a = q.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
        var a = document.createElement("iframe");
        a.style.display = "none";
        a.src = "";
        document.documentElement.appendChild(a);
        var b = a.contentWindow, a = b.document;
        a.open();
        a.write("");
        a.close();
        var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*": b.location.protocol + "//" + b.location.host, a = y(function(a) {
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
    if ("undefined" !== typeof a&&!B(F, "Trident")&&!B(F, "MSIE")) {
        var b = new a, c = {}, d = c;
        b.port1.onmessage = function() {
            if (r(c.next)) {
                c = c.next;
                var a = c.ya;
                c.ya = null;
                a()
            }
        };
        return function(a) {
            d.next = {
                ya: a
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
        q.setTimeout(a, 0)
    }
};
var Af = function(a, b) {
    vf || wf();
    xf || (vf(), xf=!0);
    yf.push(new zf(a, b))
}, vf, wf = function() {
    if (q.Promise && q.Promise.resolve) {
        var a = q.Promise.resolve();
        vf = function() {
            a.then(Bf)
        }
    } else 
        vf = function() {
            var a = Bf;
            !ea(q.setImmediate) || q.Window && q.Window.prototype.setImmediate == q.setImmediate ? (tf || (tf = uf()), tf(a)) : q.setImmediate(a)
        }
}, xf=!1, yf = [], Bf = function() {
    for (; yf.length;) {
        var a = yf;
        yf = [];
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            try {
                c.j.call(c.k)
            } catch (d) {
                sf(d)
            }
        }
    }
    xf=!1
}, zf = function(a, b) {
    this.j = a;
    this.k = b
};
var Df = function(a, b) {
    this.k = 0;
    this.o = void 0;
    this.j = this.n = null;
    this.l = this.m=!1;
    try {
        var c = this;
        a.call(b, function(a) {
            Cf(c, 2, a)
        }, function(a) {
            Cf(c, 3, a)
        })
    } catch (d) {
        Cf(this, 3, d)
    }
};
Df.prototype.then = function(a, b, c) {
    return Ef(this, ea(a) ? a : null, ea(b) ? b : null, c)
};
Df.prototype.then = Df.prototype.then;
Df.prototype.$goog_Thenable=!0;
var Gf = function(a, b) {
    a.j && a.j.length || 2 != a.k && 3 != a.k || Ff(a);
    a.j || (a.j = []);
    a.j.push(b)
}, Ef = function(a, b, c, d) {
    var e = {
        N: null,
        ga: null,
        ha: null
    };
    e.N = new Df(function(a, g) {
        e.ga = b ? function(c) {
            try {
                var e = b.call(d, c);
                a(e)
            } catch (n) {
                g(n)
            }
        } : a;
        e.ha = c ? function(b) {
            try {
                var e = c.call(d, b);
                a(e)
            } catch (n) {
                g(n)
            }
        } : g
    });
    e.N.n = a;
    Gf(a, e);
    return e.N
};
Df.prototype.q = function(a) {
    this.k = 0;
    Cf(this, 2, a)
};
Df.prototype.r = function(a) {
    this.k = 0;
    Cf(this, 3, a)
};
var Cf = function(a, b, c) {
    if (0 == a.k) {
        if (a == c)
            b = 3, c = new TypeError("Promise cannot resolve to itself");
        else {
            var d;
            if (c)
                try {
                    d=!!c.$goog_Thenable
            } catch (e) {
                d=!1
            } else 
                d=!1;
            if (d) {
                a.k = 1;
                c.then(a.q, a.r, a);
                return 
            }
            if (w(c))
                try {
                    var f = c.then;
                    if (ea(f)) {
                        Hf(a, c, f);
                        return 
                    }
            } catch (g) {
                b = 3, c = g
            }
        }
        a.o = c;
        a.k = b;
        Ff(a);
        3 != b || If(a, c)
    }
}, Hf = function(a, b, c) {
    a.k = 1;
    var d=!1, e = function(b) {
        d || (d=!0, a.q(b))
    }, f = function(b) {
        d || (d=!0, a.r(b))
    };
    try {
        c.call(b, e, f)
    } catch (g) {
        f(g)
    }
}, Ff = function(a) {
    a.m || (a.m=!0, Af(a.t, a))
};
Df.prototype.t = function() {
    for (; this.j && this.j.length;) {
        var a = this.j;
        this.j = [];
        for (var b = 0; b < a.length; b++) {
            var c = a[b], d = this.o;
            if (2 == this.k)
                c.ga(d);
            else {
                if (c.N)
                    for (var e = void 0, e = this; e && e.l; e = e.n)
                        e.l=!1;
                c.ha(d)
            }
        }
    }
    this.m=!1
};
var If = function(a, b) {
    a.l=!0;
    Af(function() {
        a.l && Jf.call(null, b)
    })
}, Jf = sf;
var Nf = function(a, b) {
    var c = {
        timeoutMs: 0,
        withCredentials: !0
    };
    return new Df(function(d, e) {
        var f = c || {}, g, h = qf.j();
        try {
            h.open("POST", a, !0)
        } catch (l) {
            e(new Kf("Error opening XHR: " + l.message, a))
        }
        h.onreadystatechange = function() {
            if (4 == h.readyState) {
                q.clearTimeout(g);
                var b;
                t:
                switch (h.status) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                    b=!0;
                    break t;
                default:
                    b=!1
                }
                !b && (b = 0 === h.status) && (b = Qc(a)[1] || null, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), b = b ? b.toLowerCase() :
                "", b=!("http" == b || "https" == b || "" == b));
                b ? d(h) : e(new Lf(h.status, a))
            }
        };
        h.onerror = function() {
            e(new Kf("Network error", a))
        };
        var n;
        if (f.headers) {
            for (var p in f.headers)
                n = f.headers[p], null != n && h.setRequestHeader(p, n);
            n = f.headers["Content-Type"]
        }
        void 0 === n && h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        f.withCredentials && (h.withCredentials = f.withCredentials);
        f.responseType && (h.responseType = f.responseType);
        f.Ra && h.overrideMimeType(f.Ra);
        0 < f.Sa && (g = q.setTimeout(function() {
            h.onreadystatechange =
            aa;
            h.abort();
            e(new Mf(a))
        }, f.Sa));
        try {
            h.send(b)
        } catch (m) {
            h.onreadystatechange = aa, q.clearTimeout(g), e(new Kf("Error sending XHR: " + m.message, a))
        }
    })
}, Kf = function(a, b) {
    la.call(this, a + ", url=" + b);
    this.url = b
};
A(Kf, la);
Kf.prototype.name = "XhrError";
var Lf = function(a, b) {
    Kf.call(this, "Request Failed, status=" + a, b)
};
A(Lf, Kf);
Lf.prototype.name = "XhrHttpError";
var Mf = function(a) {
    Kf.call(this, "Request timed out", a)
};
A(Mf, Kf);
Mf.prototype.name = "XhrTimeoutError";
var Of = function() {};
A(Of, pf);
Of.prototype.j = function() {
    var a = new XMLHttpRequest;
    if ("withCredentials"in a)
        return a;
    if ("undefined" != typeof XDomainRequest)
        return new Pf;
    throw Error("Unsupported browser");
};
var Pf = function() {
    this.j = new XDomainRequest;
    this.readyState = 0;
    this.responseText = this.onreadystatechange = null;
    this.status =- 1;
    this.j.onload = y(this.Oa, this);
    this.j.onerror = y(this.va, this);
    this.j.onprogress = y(this.Pa, this);
    this.j.ontimeout = y(this.Qa, this)
};
k = Pf.prototype;
k.open = function(a, b, c) {
    if (null != c&&!c)
        throw Error("Only async requests are supported.");
    this.j.open(a, b)
};
k.send = function(a) {
    if (a)
        if ("string" == typeof a)
            this.j.send(a);
        else 
            throw Error("Only string data is supported");
    else 
        this.j.send()
};
k.abort = function() {
    this.j.abort()
};
k.setRequestHeader = function() {};
k.Oa = function() {
    this.status = 200;
    this.responseText = this.j.responseText;
    Qf(this, 4)
};
k.va = function() {
    this.status = 500;
    this.responseText = null;
    Qf(this, 4)
};
k.Qa = function() {
    this.va()
};
k.Pa = function() {
    this.status = 200;
    Qf(this, 1)
};
var Qf = function(a, b) {
    a.readyState = b;
    if (a.onreadystatechange)
        a.onreadystatechange()
};
var Rf = null, Sf = function(a) {
    if (a = Qb(a))
        a.innerHTML = ""
}, Tf = function(a, b) {
    var c = Qb(a);
    c && (c.style.display = b ? "" : "none")
}, Uf = function(a) {
    document.write('<script type="text/javascript" src="' + a + '">\x3c/script>')
}, Vf = function(a, b, c, d, e, f) {
    f = (f || document).createElement("iframe");
    f.id = b;
    f.name = b;
    null != d && null != e && (f.width = String(d), f.height = String(e));
    f.vspace = "0";
    f.hspace = "0";
    f.allowTransparency = "true";
    f.scrolling = "no";
    f.marginWidth = "0";
    f.marginHeight = "0";
    f.frameBorder = "0";
    f.style.border = "0";
    f.style.verticalAlign =
    "bottom";
    c && (f.style.visibility = "hidden", f.style.display = "none");
    f.src = "javascript:\"<html><body style='background:transparent'></body></html>\"";
    a.appendChild(f);
    return f
}, Xf = function(a, b, c, d, e) {
    new Ie({
        Q: a,
        Ba: b,
        content: Wf(c),
        size: new sb(d, e),
        Ca: {
            info: function() {},
            j: function() {},
            error: function() {}
        },
        Aa: !0
    })
}, ag = function(a, b, c) {
    c && (b = Wf(b));
    if (0 != Fd()) {
        var d;
        try {
            d=!!a.contentWindow.document
        } catch (e) {
            d=!1
        }
        if (d) {
            var f = b, g = Yf();
            try {
                var h = window.frames[a.name];
                if (6 < parseInt(Fd(), 10) || 0 > f.indexOf("http://" +
                P["#1#"] + "/pagead/inject_object_div.js")) {
                    var l;
                    i:
                    {
                        a = f;
                        b = document;
                        var n = Fd(), p;
                        if (!(p = 0 == n || isNaN(n) || 7 > n || 9 < n || b.documentMode && 10 <= b.documentMode)) {
                            var m = navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);
                            p = 6 <= (m ? parseFloat(m[1]) : 0)
                        }
                        if (!p)
                            for (n = 0; n < a.length; ++n)
                                if (127 < a.charCodeAt(n)) {
                                    l=!0;
                                    break i
                                }
                        l=!1
                    }
                    if (l) {
                        var v = unescape(encodeURIComponent(f)), x = Math.floor(v.length / 2);
                        a = [];
                        for (l = 0; l < x; ++l)
                            a[l] = String.fromCharCode(256 * v.charCodeAt(2 * l + 1) + v.charCodeAt(2 * l));
                        1 == v.length%2 && (a[x] = v.charAt(v.length -
                        1));
                        f = a.join("")
                    }
                    h.contents = f;
                    h.location.replace("javascript:window.contents")
                } else 
                    h.contents = f, h.location.replace("javascript:document.write(window.contents);document.close();")
                } catch (s) {
                Zf("Could not write third party content into IE iframe: " + s.message)
            } finally {
                $f(g)
            }
        } else {
            v = b;
            h = Yf();
            try {
                f = "google-ad-content-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random())^+new Date).toString(36)), window[f] = v, v = 'var adContent = window.parent["' + f + '"];window.parent["' +
                f + '"] = null;document.write(adContent);', v = 6 == Fd() ? "window.onload = function() {document.write(\\'<sc\\' + \\'ript type=\"text/javascript\">document.domain = \"" + document.domain + '";' + v + "<\\/scr\\' + \\'ipt>\\');document.close(); };" : 'document.domain = "' + document.domain + '";' + v + "document.close();", a.src = 'javascript:\'<script type="text/javascript">' + v + "\x3c/script>'"
            } catch (R) {
                window[f] = null, Zf("Could not write third party content into  IE iframe with modified document.domain: " + R.message)
            } finally {
                $f(h)
            }
        }
    } else {
        h =
        b;
        try {
            g = a.contentWindow ? a.contentWindow.document : a.contentDocument, - 1 != navigator.userAgent.indexOf("Firefox") && g.open("text/html", "replace"), g.write(h), g.close()
        } catch (ta) {
            Zf("Could not write content into iframe using  the DOM standards method:" + ta.message)
        }
    }
}, Wf = function(a) {
    if (!Boolean(a))
        return a;
    var b = a.toLowerCase();
    return - 1 < b.indexOf("<!doctype")||-1 < b.indexOf("<html") ? a : "<html>\n<head>\n<script>var inDapIF=true;\x3c/script>\n</head><body>" + a + "</body></html>\n"
}, Zf = function(a) {
    Rf || (Rf = null);
    Rf.k(a)
}, Yf = function() {
    var a = [], b = document.getElementsByTagName("base");
    if (b)
        for (var c = 0, d = b.length; c < d; ++c) {
            var e = b[c], f = e.getAttribute("target");
            f && (a.push({
                Ta: e,
                Ua: f
            }), e.removeAttribute("target"))
        }
    return a
}, $f = function(a) {
    if (a)
        for (var b = 0, c = a.length; b < c; ++b) {
            var d = a[b];
            d.Ta.setAttribute("target", d.Ua)
        }
};
var bg = function(a, b, c, d) {
    var e = Q(c, "api_experiment");
    na(e) || db(gb(e.split(","), oa), Xe);
    null != Q(c, "google_force_post") && We($e, "experiment");
    db(Ue(), function(a) {
        googletag._tmanager_.addFeature(a)
    });
    this.j = b;
    this.n = c;
    this.l = {};
    this.I = d;
    this.t = Math.floor(4503599627370496 * Math.random());
    this.ca=!1;
    this.k = a;
    this.ja = this.r=!1;
    "MOBILE" == Q(c, "target_platform") && (this.ja=!0);
    this.r = this.j && null !== this.j.w ? Boolean(this.j.w) : this.ja;
    G && I(9) && (qf = new Of)
};
bg.prototype.P = function() {
    return "lean"
};
var cg = function(a, b) {
    b && window.top != window ? a.ca=!0 : b = Math.floor(4503599627370496 * Math.random());
    a.t = Math.floor(b)
};
bg.prototype.xa = function() {
    return null
};
bg.prototype.Y = function() {
    return !1
};
var dg = function(a, b) {
    for (var c = 0; c < b.length; c++)
        a.l[J(b[c])] = null;
    Qd(a.j, b)
};
bg.prototype.za = function() {};
bg.prototype.w = function(a) {
    var b = new Xd;
    b.o = this.t + "";
    b.u = "json_html";
    b.k = this.M(this.k);
    b.m = a;
    b.n = this.ia();
    b.j = Ue();
    b.v = this.ca;
    return b
};
bg.prototype.F = function(a, b, c) {
    return eg(this, this.k ? "sra" : "single", this.w(b)).F(a, c)
};
var fg = function(a) {
    return Jd() && Ve($e) && 2048 < a.length
}, gg = function(a, b) {
    return b ? ef(a, 8192) : ef(a, 2048)
}, ig = function(a, b, c) {
    b = Qc(b);
    Nf(Mc(b[1], b[2], b[3], b[4], b[5]), b[6]).then(function(a) {
        var b;
        a = a.responseText;
        a = a.substring(a.indexOf("(") + 1, a.lastIndexOf(")")).replace(/\\x/g, "\\u00");
        var f = q.JSON.parse;
        try {
            b = f(a)
        } catch (g) {
            b = null
        }
        b && (hg(b), c(b))
    }, function() {}, a)
}, hg = function(a) {
    ca(a) ? db(a, hg) : C(a, function(a) {
        a._cookies_ && delete a._cookies_
    })
}, jg = function(a, b) {
    db(b, function(a) {
        var b = this.w(1);
        b.k = this.M(!1);
        b = eg(this, "single", b).F([a], !0);
        cc(a, b)
    }, a)
}, kg = function(a, b, c, d, e, f, g) {
    a = a.createElement(b);
    a.style.width = d + "px";
    e && (a.style.height = e + "px");
    a.style.display = f;
    a.style.position = "relative";
    g && (a.style.margin = g);
    a.style.border = 0;
    c && a.appendChild(c);
    return a
};
bg.prototype.o = function(a, b, c, d) {
    c in this.j.m || (d && this.Y([c]), a = c.getCollapseEmptyDiv(), null == a && (a = "true" === Q(this.n, "google_collapse_empty_div")), a && Tf(K(c), !1))
};
bg.prototype.D = function(a, b, c) {
    this.l || (this.l = {});
    var d = [];
    if (this.k)
        if (ca(a)) {
            d = c || Nd(this.j);
            b = [];
            var e = {};
            for (c = 0; c < d.length; ++c) {
                for (var f = d[c], g = null, g = null, h = Math.min(a.length, c + 1), l = 0; l < h; l++)
                    if (null == e[l] && (g = a[l], g = g[f.getName()])) {
                        e[l]=!0;
                        break
                    }
                    g && (lg(this, f, g), b.push(f))
                }
                d = b
        } else 
            d = mg(this, a);
    else {
        c = [];
        f = 0;
        for (e in a)
            c[f++] = e;
        1 < c.length || 0 == c.length ? a = null : (e = c[0], a = a[e], (b = b ? this.j.j[b] : ng(this, e)) ? (lg(this, b, a), a = b) : a = null);
        a && d.push(a)
    }
    return d
};
var mg = function(a, b) {
    var c = [];
    C(b, function(a, b) {
        var f = ng(this, b);
        f && (lg(this, f, a), c.push(f))
    }, a);
    return c
}, lg = function(a, b, c) {
    a.l[J(b)] = c;
    b.q || (b.q = (new Date).getTime());
    b.j.fetchEnded();
    null != c._cookies_ && Ne(a.I, c);
    c._persistent_for_stream_ && (a.j.m[b] = null)
}, ng = function(a, b) {
    if (!a.k)
        for (var c = a.j.l, d = c.length - 1; 0 <= d; --d)
            if (c[d].getName() == b) {
                var e = c[d];
                if (!a.l[J(e)])
                    return e
            }
    d = [];
    if (e = a.j.v[b])
        for (c = 0; c < e.length; ++c)
            e[c] && d.push(c);
    if (c = d.length ? d : null)
        for (d = 0; d < c.length; ++d)
            if ((e = a.j.j[b + "_" + c[d]]) &&
            !a.l[J(e)])
                return e;
    return null
}, pg = function() {
    q.googletag._getcook_ = 1
};
var qg = function(a, b) {
    var c;
    c = P["#6#"] ? "https://" + P["#33#"] : "http://" + P["#33#"];
    if (!b || 0 > b || 1 < b)
        b = 0;
    this.l = Math.random() < b;
    this.k = a;
    this.j = c + "/pagead/gen_204?id=" + D(a)
}, V = function(a, b, c) {
    b && b.match(/^\w+$/) && c && (a.j += "&" + b + "=" + D(c))
}, rg = function(a, b) {
    var c = cf();
    null != c && V(a, "vrg", "" + c);
    V(a, "vrp", "54");
    var c = document, d = window, e = Ud(b);
    0 < e.length && (V(a, "pub_id", e[0]), 3 >= e.length || (e = pb(e, 0, 3), e.push("__extra__")), V(a, "nw_id", e.join(",")));
    V(a, "nslots", Sd(b).toString());
    e = Ue();
    0 < e.length && V(a, "eid", e.join());
    V(a, "pub_url", c.URL);
    null != Wc(b.k) && d.top != d || V(a, "pub_ref", c.referrer)
}, sg = function(a) {
    a.l && a.k && a.j && Pa(window, a.j)
};
var tg = function(a, b, c, d, e) {
    df.call(this, a, b, c, d, e)
};
A(tg, df);
tg.prototype.t = function() {
    df.prototype.t.call(this);
    U(this, "m_ast", "js");
    U(this, "markup", "html");
    U(this, "js", "afmc")
};
var W = function(a, b, c, d) {
    bg.call(this, a, b, c, d);
    this.v = this.J = this.B = null;
    this.ra = this.O = this.G = this.A=!1;
    this.$ = this.aa = "";
    this.videoStreamCorrelator = NaN;
    this.U = 0
};
A(W, bg);
W.prototype.P = function() {
    return "unknown"
};
W.prototype.w = function(a) {
    a = W.V.w.call(this, a);
    a.q = this.ra;
    a.r = this.$;
    a.t = this.aa;
    a.l = this.U;
    return a
};
var ug = function(a) {
    var b = Rd(a.j);
    if (0 < b.length) {
        for (var c = {}, d = [], e = 0; e < b.length; ++e)
            c[b[e][0]]=!0;
        C(c, function(a, b) {
            d.push(b)
        });
        a.B = new qg("gpt_missing_cb", P["#10#"]);
        V(a.B, "pending", d.join());
        V(a.B, "correlator", a.t.toString());
        V(a.B, "impl", a.P());
        rg(a.B, a.j);
        sg(a.B)
    }
};
W.prototype.La = function() {
    ug(this);
    if (this.k&&!this.G) {
        var a = Sd(this.j), b = this.j.l.length;
        a != b && (this.J = new qg("gpt_sra_mismatch", P["#11#"]), V(this.J, "correlator", this.t.toString()), V(this.J, "fslots", b.toString()), rg(this.J, this.j), sg(this.J))
    }
};
W.prototype.Ma = function() {
    Sd(this.j);
    this.v = new qg("gpt_req_disp_mismatch", P["#23#"]);
    V(this.v, "fslots", this.j.l.length.toString());
    V(this.v, "impl", this.M(this.k));
    V(this.v, "sra", this.k ? "1" : "0");
    V(this.v, "correlator", this.t.toString());
    rg(this.v, this.j);
    sg(this.v)
};
var eg = function(a, b, c) {
    switch (Q(a.n, "target_platform")) {
    case "MOBILE":
        return new tg(b, a.j, a.n, a.I, c);
    default:
        return new of(b, a.j, a.n, a.I, c)
    }
};
W.prototype.o = function(a, b, c, d) {
    a.google_js_backfill ? b.write('<script src="' + P["#5#"] + '">\x3c/script>') : W.V.o.call(this, a, b, c, d)
};
W.prototype.D = function(a, b, c) {
    return bg.prototype.D.call(this, a, b, c)
};
var vg = function(a, b, c) {
    a.U && b && (a = a.j.j[c], c = "", a && (c = a.getContentUrl()), xd().registerAdBlock(c, 3, "json_html", b))
};
var X = function(a, b, c, d) {
    W.call(this, a, b, c, d);
    this.u = [];
    this.q = {};
    this.m = 0;
    this.Z = [];
    this.Ka = [];
    this.ka = {};
    this.T=!1;
    this.oa = this.na = NaN;
    this.da=!1;
    this.R = NaN;
    this.ma=!1;
    this.W = this.H = null
};
A(X, W);
X.prototype.P = function() {
    return this.k ? "gut_friendly_iframe_sra" : "gut_friendly_iframe"
};
X.prototype.ia = function() {
    return "callbackProxy"
};
X.prototype.M = function(a) {
    return a ? "fifs" : "fif"
};
X.prototype.w = function(a) {
    a = X.V.w.call(this, a);
    !this.k && this.T && (a.w=!0);
    a.persistentRoadblocksOnly = this.ma;
    a.videoPodNumber = this.na;
    a.videoPodPosition = this.oa;
    a.videoStreamCorrelator = this.videoStreamCorrelator;
    return a
};
var Cg = function(a, b, c, d) {
    if (!(a.A || a.G && 1 == d)) {
        for (var e = 0; e < b.length; e++)
            Pd(a.j, b[e]), wg(a, b[e]);
        d = a.F(b, d, !1);
        if (fg(d))
            xg(a, d, b), yg(a, b[c]);
        else {
            d = gg(d, !1);
            d = Cd(d);
            jg(a, b);
            zg(a, b, c);
            d = Ag(b, d, !0);
            googletag._tmanager_.tickRepeated("ad_fetch_start", a.m, b[0].k);
            a.q[a.m] = b;
            a.m++;
            if (Ve(bf) && null == document.getElementById(K(b[c])) && (c = jb(b, function(a) {
                return null != document.getElementById(K(a))
            }), - 1 == c))
                return;
            Bg(b[c], d)
        }
        pg()
    }
}, Dg = function(a, b, c) {
    Pd(a.j, b);
    c = a.F([b], c, !1);
    fg(c) ? (xg(a, c, [b]), yg(a, b)) : (c =
    gg(c, !1), a.T=!1, c = Cd(c), googletag._tmanager_.tickRepeated("ad_fetch_start", a.m, b.k), a.q[a.m] = [b], a.m++, cc(b, c), zg(a, [b], 0), c = Ag([b], c, !(b in a.j.m)), Bg(b, c));
    pg();
    a.ka[J(b)] = setTimeout(y(a.la, a, !0), P["#13#"])
}, Ag = function(a, b, c) {
    var d = "";
    c && (a = gb(a, function(a) {
        return Ea(J(a))
    }), d += '<script type="text/javascript">function callbackProxy(adContents) { ', d += "window.parent.googletag.impl.pubads.setAdContentsBySlotForAsync(adContents, [" + a.join() + "]);}", d += "\x3c/script>");
    return d += '<script src = "' + b +
    '">\x3c/script>'
}, xg = function(a, b, c) {
    b = gg(b, !0);
    var d = Cd(b);
    a.k ? jg(a, c) : cc(c[0], d);
    var e = gb(c, function(a) {
        return J(a)
    }), d = y(function(a) {
        !this.k && c[0]in this.j.m || Eg(this, a, e)
    }, a);
    ig(a, b, d);
    googletag._tmanager_.tickRepeated("ad_fetch_start", a.m, c[0].k);
    a.q[a.m] = c;
    a.m++
}, yg = function(a, b) {
    if (a.I && 1 != q.googletag._getcook_) {
        var c;
        c = a.I;
        var d = document.domain;
        if (1 == c.j ||!c.k&&!c.n)
            c = null;
        else {
            var e = Ed(Boolean(a.j.r)) + "/gampad/cookie.js?", e = e + ("domain=" + D(d)), e = e + "&callback=window.parent.googletag.impl.pubads.setCookieInfo" +
            ("&iu=" + b.t);
            c.k && (e += "&cookie=" + D(c.k));
            c = e
        }
        c && (c = '<script src = "' + Cd(c) + '">\x3c/script>', Bg(b, c))
    }
}, Bg = function(a, b) {
    var c = document, d = L(a) + "__hidden__", e = c.getElementById(d);
    if (!e) {
        e = K(a);
        e = c.getElementById(e);
        if (null == e)
            return;
        e = Vf(e, d, !0, 0, 0, c)
    }
    ag(e, b, !1)
}, Fg = function(a) {
    return L(a) + "__container__"
}, Ig = function(a, b) {
    var c = document;
    if (!(b in a.j.m)) {
        var d = K(b), e = c.getElementById(d);
        if (e) {
            for (var d = Fg(b), f = L(b) + "__hidden__", e = e.childNodes, g=!1, h = 0; h < e.length; ++h)
                if (1 == e[h].nodeType) {
                    var l = e[h];
                    if (l.id != d && l.id != f) {
                        g=!0;
                        break
                    }
                }(g = g || Gg(c, b)) && Hg(b)
        }
    }
}, Gg = function(a, b) {
    var c = a.getElementById(Fg(b));
    return Boolean(c) && hb(Zb(c), function(a) {
        return a.id != L(b)
    })
};
X.prototype.za = function(a, b) {
    var c = rb(a, function(a) {
        return 0 != a.getSizes().length
    });
    c[!1] && db(c[!1], function(a) {
        this.o(window, document, a, !0)
    }, this);
    if (a = c[!0]) {
        r(b.videoStreamCorrelator) ? this.videoStreamCorrelator = b.videoStreamCorrelator : (c=!0, r(b.changeCorrelator) && (c = b.changeCorrelator), c && cg(this));
        this.na = b.videoPodNumber || NaN;
        this.oa = b.videoPodPosition || NaN;
        this.ma = b.persistentRoadblocksOnly ||!1;
        this.da = b.clearUnfilledSlots ||!1;
        dg(this, a);
        this.k && kb(this.Ka, a);
        this.R = a.length;
        for (c = 0; c < a.length; ++c)
            Ig(this,
            a[c]);
        Jg(this, a, 0, b.isVideoRefresh ? 3 : 2)
    }
};
X.prototype.Y = function(a) {
    for (var b = 0; b < a.length; ++b)
        Hg(a[b]), Kg(this, a[b]);
    return !0
};
var Hg = function(a) {
    var b = a.l;
    Lg(a);
    var c = K(a);
    if (b) {
        var d = document.getElementById(c);
        if (d) {
            var e = Fg(a) + "__to_be_removed__";
            a = nb(d.childNodes);
            db(a, function(a) {
                1 == a.nodeType && a.id == e || d.removeChild(a)
            })
        }
    } else 
        Sf(c)
}, wg = function(a, b) {
    var c = document, d = b.getSizes();
    if (0 != d.length) {
        var e = d[0];
        if (1 < d.length) {
            t:
            if (d = K(b), (d = (c || document).getElementById(d)) && d.style.height && d.style.width)
                for (var d = [d.style.width, d.style.height], f = 0; f < d.length; ++f)
                    if (2 < d[f].length && "px" == d[f].substring(d[f].length - 2))
                        d[f] =
                        parseInt(d[f], 10);
                    else {
                        d = null;
                        break t
                    } else 
                        d = null;
            e = d || e
        }
        d = L(b);
        f = c.getElementById(d);
        if (!f) {
            f = K(b);
            f = c.getElementById(f);
            if (null == f)
                return;
            var g = c.createElement("div");
            g.id = Fg(b);
            g.name = g.id;
            g.style.border = "0pt none";
            a.r && (g.style.margin = "auto", g.style.textAlign = "center");
            f.appendChild(g);
            f = Vf(g, d, !1, e[0], e[1], c)
        }
        a.j.q[J(b)] = f
    }
}, Mg = function(a, b) {
    for (var c = 0; c < a.m; c++)
        if (a.q.hasOwnProperty(c) && ib(a.q[c], function(a, c) {
            return J(a) == b[c]
        }))
            return c;
    return - 1
}, Og = function(a, b, c) {
    for (var d = [], e = 0; e < c.length; e++)
        d.push(a.j.j[c[e]]);
    b = a.D(b, void 0, d);
    c = Mg(a, c);
    0 <= c && (googletag._tmanager_.tickRepeated("ad_fetch_end", c, b[0].k), delete a.q[c]);
    db(b, function(a) {
        Ng(this, a)
    }, a)
}, Eg = function(a, b, c) {
    if (a.k)
        Og(a, b, c);
    else {
        b = a.D(b, c[0]);
        c = Mg(a, c);
        0 <= c && (googletag._tmanager_.tickRepeated("ad_fetch_end", c, b[0].k), delete a.q[c]);
        c = a.u[0];
        for (var d=!1, e = 0; e < b.length; ++e)
            Ng(a, b[e]), b[e] === c && (d=!0);
        d && (clearTimeout(a.ka[J(c)]), a.la())
    }
};
X.prototype.la = function(a) {
    a && (this.T=!0);
    0 < this.u.length && (this.u.shift(), this.Z.shift(), 0 < this.u.length && Dg(this, this.u[0], this.Z[0]))
};
var Pg = function(a, b) {
    Pd(a.j, b);
    wg(a, b);
    null != a.l[J(b)] && Ng(a, b)
}, Jg = function(a, b, c, d) {
    if (a.k)
        Cg(a, b, c, d);
    else if (!(a.A || a.G && 1 == d)) {
        for (c = 0; c < b.length; c++)
            wg(a, b[c]);
        ob(a.u, b);
        c = b.length;
        for (var e = [], f = 0; f < c; f++)
            e[f] = d;
        ob(a.Z, e);
        a.u.length == b.length && Dg(a, b[0], d)
    }
};
X.prototype.sa = function(a) {
    if (!this.k) {
        var b = document.getElementById(K(a));
        b && (this.j.u[J(a)] = b)
    }
};
X.prototype.ua = function() {};
X.prototype.ta = function() {};
X.prototype.ba = function(a) {
    Kg(this, a);
    var b = null, c =- 1;
    if (this.k) {
        Pg(this, a);
        b = Od(this.j);
        if (0 == b.length)
            return;
        b = rb(b, function(a) {
            return 0 != a.getSizes().length
        });
        b[!1] && db(b[!1], function(a) {
            this.o(window, document, a, !0)
        }, this);
        b = b[!0];
        if (!b)
            return;
        c=!a.m && 0 <= cb(b, a) ? jb(b, function(b) {
            return J(a) == J(b)
        }) : 0
    } else {
        if (0 == a.getSizes().length) {
            this.o(window, document, a, !0);
            return 
        }
        b = [a];
        c = 0
    }
    Jg(this, b, c, 1)
};
var Kg = function(a, b) {
    var c = b.getDivStartsCollapsed();
    null == c && (c = "true" === Q(a.n, "google_divs_start_collapsed"));
    c && Tf(K(b), !1)
}, Ng = function(a, b) {
    try {
        t:
        {
            var c = window, d = document, e = a.l[J(b)];
            dc(b);
            if (null == e || e._empty_)
                a.o(c, d, b, a.da), M(b, hc(b));
            else if (a.O)
                M(b, hc(b));
            else {
                var f = e._html_;
                if (!t(f)) {
                    Lg(b);
                    break t
                }
                Tf(K(b), !0);
                if (b.l)
                    Lg(b), wg(a, b);
                else {
                    var g = document.getElementById(L(b)), h = xd();
                    h.unloadAdBlock && h.unloadAdBlock(g, b.l)
                }
                if (e._use_safe_frame_) {
                    var l = e._width_, n = e._height_, p = d.getElementById(Fg(b));
                    if (null != p) {
                        for (var m; m = p.firstChild;)
                            p.removeChild(m);
                        a.r || (p.style.display = "inline-block");
                        Xf(p, L(b), f, l, n);
                        b.l=!0;
                        vg(a, d.getElementById(L(b)), J(b))
                    }
                } else {
                    var v = e._width_, x = d.getElementById(L(b));
                    null != x && (x.height = String(e._height_), x.width = String(v), ag(x, f, !0), vg(a, x, J(b)))
                }
                M(b, gc(b, e))
            }
            var s = L(b) + "__hidden__";
            if (0 == Fd())
                Rf || (Rf = null), Rf.j("iFrame not removed as non-IE browser, id: " + s);
            else {
                var R = d.getElementById(s);
                R ? "hidden" != R.style.visibility || "none" != R.style.display ? Zf("iFrame found to remove but it isn't hidden, id: " +
                s) : (R.parentNode.removeChild(R), Rf || (Rf = null), Rf.j("Hidden iFrame removed, id: " + s)) : Zf("iFrame not found to remove, id: " + s)
            }
        }
    } catch (ta) {}
}, Lg = function(a) {
    var b = document.getElementById(Fg(a));
    if (b) {
        var c = document.getElementById(L(a)), d = xd();
        d.unloadAdBlock && d.unloadAdBlock(c, a.l);
        a.l ? (b.style.display = "none", b.id += "__to_be_removed__", c.id = c.id + "__to_be_removed__", window.setTimeout(function() {
            b.parentNode && b.parentNode.removeChild(b)
        }, P["#24#"])) : b.parentNode.removeChild(b)
    }
    a.l=!1
};
X.prototype.xa = function() {
    return isNaN(this.R) || this.k ? 0 == Od(this.j).length : Od(this.j).length == Sd(this.j) - this.R
};
var zg = function(a, b, c) {
    null == document.getElementById(K(b[c])) && Qg(a);
    a.k && (hb(b, function(a) {
        return null != document.getElementById(K(a))
    }) || Rg(a))
}, Qg = function(a) {
    a.H = new qg("gpt_target_slot_has_no_div", P["#29#"]);
    V(a.H, "sra", a.k ? "1" : "0");
    rg(a.H, a.j);
    sg(a.H)
}, Rg = function(a) {
    a.W = new qg("gpt_request_slots_have_no_divs", P["#29#"]);
    rg(a.W, a.j);
    sg(a.W)
};
var Sg = function(a, b, c, d) {
    W.call(this, a, b, c, d);
    this.u = this.m = 0;
    this.q=!1
};
A(Sg, W);
Sg.prototype.P = function() {
    return this.k ? "gut_sync_sra" : "gut_sync"
};
Sg.prototype.ia = function() {
    return this.q ? (this.q=!1, "googletag.impl.pubads.setPassbackAdContents") : "googletag.impl.pubads.setAdContentsBySlotForSync"
};
Sg.prototype.M = function(a) {
    return a ? "ss" : "s"
};
var Tg = function(a, b) {
    if (!a.A) {
        var c = a.F([b], 1, !0), c = Cd(c);
        googletag._tmanager_.tickRepeated("ad_fetch_start", a.m, b.k);
        a.m++;
        cc(b, c);
        pg();
        Uf(c)
    }
}, Vg = function(a, b, c) {
    b = a.D(b);
    googletag._tmanager_.tickRepeated("ad_fetch_end", a.u, b[0].k);
    a.u++;
    if (a.k)
        c = a.j.l, 1 == c.length && Ug(a, c[0], void 0);
    else 
        for (var d = 0; d < b.length; ++d)
            Ug(a, b[d], c)
}, Wg = function(a, b) {
    if (!a.A) {
        var c = a.F(b, 1, !0), c = Cd(c);
        pg();
        Uf(c);
        googletag._tmanager_.tickRepeated("ad_fetch_start", a.m, b[0].k);
        a.m++;
        jg(a, b)
    }
};
Sg.prototype.sa = function(a) {
    if (!this.k) {
        var b;
        b = null;
        var c = ja.getElementsByTagName("script");
        c && c.length && (b = c[c.length - 1]);
        (b = b && b.parentElement) && (this.j.u[J(a)] = b)
    }
};
Sg.prototype.ua = function(a) {
    var b = "google_temp_div_" + J(a), c = '<div id="' + xa(b) + '"></div>';
    document.write(c);
    (b = Qb(b)) && (this.j.q[J(a)] = b)
};
Sg.prototype.ta = function(a) {
    var b = this.j;
    a = J(a);
    var c = b.q[a];
    c && (c && c.parentNode && c.parentNode.removeChild(c), delete b.q[a])
};
Sg.prototype.ba = function(a) {
    Pd(this.j, a);
    var b = this.j.l.length;
    this.k ? 1 == b ? (b = fb(Nd(this.j), function(a) {
        return 0 != a.getSizes().length
    }), 0 <= cb(b, a) || this.o(window, document, a, !1), b.length && Wg(this, b)) : Ug(this, a, void 0) : 0 == a.getSizes().length ? this.o(window, document, a, !1) : Tg(this, a)
};
var Ug = function(a, b, c) {
    var d = window, e = document, f = a.l[J(b)];
    dc(b);
    if (null == f || f._empty_)
        a.o(d, e, b, !1), M(b, hc(b));
    else if (a.O)
        M(b, hc(b));
    else if (f._use_safe_frame_)
        if (c = f._html_) {
            var d = f._width_, g = f._height_;
            Xg(b, e);
            var h = L(b) + "__container__", l = '<div id="' + xa(h) + '"></div>';
            e.write(l);
            h = e.getElementById(h);
            null != h && (a.r ? h.style.margin = "auto" : h.style.display = "inline-block", Xf(h, L(b), c, d, g), vg(a, e.getElementById(L(b)), J(b)));
            M(b, gc(b, f))
        } else 
            M(b, hc(b));
    else if (f._snippet_&&!f._is_afc_)
        Xg(b, e), f = a.l[J(b)],
        null != f && (c = Yg(a, b, e, f), M(b, gc(b, f)), (f = e.getElementById(c)) && vg(a, f, J(b)));
    else if (d = F, null != d&&-1 != d.indexOf("MSIE ")&&-1 == d.indexOf("IEMobile")) {
        e = "googletag.impl.pubads.syncAdSlotLoaded(this, '" + J(b) + "'," + c + ");";
        c = "about:blank";
        if (d = Q(a.n, "google_domain_reset_url"))
            if (g = Pc(d), null === g || 0 <= g.indexOf(document.domain))
                c = d;
        l = c;
        c = f._width_;
        f = f._height_;
        d = a.r;
        Xg(b, document);
        g = L(b);
        h = [];
        l = Cd(l);
        h.push('<iframe id="', xa(g), '" name="', xa(g), '" width="', c, '" height="', f, '" vspace="0" hspace="0" allowtransparency="true" ',
        "scrolling=", a.H ? '"auto"' : '"no"', ' marginwidth="0" marginheight="0" frameborder="0" style=', '"border:0px;left:0;position:absolute;top:0;"', ' src="', l, '"');
        null != e && h.push(' onload="', e, '"');
        h.push("></iframe>");
        e = [];
        l = K(b) + "_ad_container";
        e.push('<div id="', xa(l), '"');
        d && e.push(' style="text-align:center" ');
        e.push(">");
        e.push('<ins style="position:relative;width:' + c + "px;height:" + f + 'px;border:none;display:inline-table;vertical-align:bottom;">' + ('<ins style="position:relative;width:' + c + "px;height:" +
        f + 'px;border:none;display:block;">' + h.join("") + "</ins>") + "</ins>");
        e.push("</div>");
        document.write(e.join(""));
        (f = document.getElementById(g)) && vg(a, f, J(b))
    } else 
        Xg(b, e || document), f = Yg(a, b, e || document), e.write("<script>googletag.impl.pubads.createDomIframe(" + Ea(f) + " ," + Ea(J(b)) + "," + a.r + "," + c + ");\x3c/script>")
}, Yg = function(a, b, c, d) {
    b = K(b) + "_ad_container";
    var e = '<div id="' + xa(b) + '"';
    a.r && d ? (e += ' style="width:' + d._width_, e += 'px;margin:auto;">') : e += ">";
    d && (e += d._html_);
    c.write(e + "\n</div>\n");
    return b
},
Xg = function(a, b) {
    var c = b.getElementById(K(a));
    c && c.parentNode && "" === c.innerHTML && c.parentNode.removeChild(c)
};
var Zg = function() {
    this.l = this.j = this.k = null
}, Y = function(a) {
    null == a.k && (a.k = new Ld(ic));
    return a.k
}, Z = function(a) {
    if (null != a.j)
        return a.j;
    switch (Q($g(a), "google_ad_impl")) {
    case "gut_sync_sra":
        googletag._tmanager_.setSraMode(!0);
        a.j = new Sg(!0, Y(a), $g(a), Pe(void 0));
        googletag._tmanager_.addFeature("sync");
        break;
    case "gut_friendly_iframe":
        googletag._tmanager_.setSraMode(!1);
        a.j = new X(!1, Y(a), $g(a), Pe(void 0));
        googletag._tmanager_.addFeature("fif");
        break;
    case "gut_friendly_iframe_sra":
        googletag._tmanager_.setSraMode(!0);
        a.j = new X(!0, Y(a), $g(a), Pe(void 0));
        googletag._tmanager_.addFeature("fif");
        break;
    default:
        googletag._tmanager_.setSraMode(!1), a.j = new Sg(!1, Y(a), $g(a), Pe(void 0)), googletag._tmanager_.addFeature("sync")
    }
    var b = a.j;
    b.A = null != Q(b.n, "google_nofetch") || Boolean(window.google_noFetch) || b.A;
    b.G = null != Q(b.n, "google_disable_initial_load") || Boolean(window.google_DisableInitialLoad) || b.G;
    b.O = null != Q(b.n, "google_norender") || b.O;
    var c = y(b.La, b), d = window;
    d.attachEvent ? d.attachEvent("onload", c) : d.addEventListener &&
    d.addEventListener("load", c, !1);
    c = y(b.Ma, b);
    d = window;
    d.attachEvent ? d.attachEvent("onunload", c) : d.addEventListener && d.addEventListener("unload", c, !1);
    b.U = xd().setupOse(b.t);
    return a.j
}, $g = function(a) {
    null == a.l && (a.l = new Kd);
    return a.l
}, ah = null, $ = function() {
    ah || (ah = new Zg);
    return ah
}, bh = null, ch = function() {
    bh || (bh = new Zg);
    return bh
};
var dh = P["#38#"], eh = function(a, b) {
    var c = {
        methodId: a
    };
    b.name && (c.name = b.name);
    b.message && (c.message = b.message.substring(0, 512));
    b.fileName && (c.fileName = b.fileName);
    b.lineNumber && (c.lineNumber = b.lineNumber);
    b.stack && (c.stack = Na(b.stack, ""));
    return c
}, gh = function(a, b) {
    fh(a, b, void 0);
    throw b;
}, fh = function(a, b, c) {
    if (!b.Va)
        try {
            b.Va=!0;
            var d = dh;
            r(c) && 0 <= c && 1 >= c && (d = c);
            var e = eh(a, b), f = new qg("gpt_exception", d);
            try {
                rg(f, Y($()))
            } catch (g) {}
            C(e, function(a, b) {
                V(f, b, a)
            });
            sg(f)
    } catch (h) {}
};
var hh = function() {};
k = hh.prototype;
k.addSlot = function(a) {
    if (!a)
        return null;
    var b = a.getName();
    return b && b.length ? Md(Y($()), a) : null
};
k.fillSlot = function(a) {
    var b = $(), c = Z(b);
    (a = Td(Y(b), a)) && (null == c.l[J(a)] || c.k) && (c.sa(a), c.ua(a), c.ba(a), c.ta(a))
};
k.setCookieOptions = function(a) {
    $();
    var b = Pe(a);
    b.j = a;
    Le(b)
};
k.setTagForChildDirectedTreatment = function(a) {
    Y($()).B = a
};
k.passback = function(a) {
    if (a) {
        var b = a.getName();
        b && b.length && (b = ch(), a = Md(Y(b), a, !0), b = Z(b), b.q=!0, b.ba(a))
    }
};
k.disableFetch = function() {
    window.google_noFetch=!0
};
k.disableInitialLoad = function() {
    window.google_DisableInitialLoad=!0
};
k.addAttribute = function(a, b) {
    var c = Y($()), d = b;
    if (!na(a)) {
        na(d) && (d = "");
        var e = c.o[a];
        c.o[a] = e ? e + "," + d : d
    }
};
k.clearAttribute = function(a) {
    var b = Y($());
    na(a) || b.o[a] && delete b.o[a]
};
k.addPageCategoryExclusion = function(a) {
    var b = Y($());
    na(a) || kb(b.t, a)
};
k.clearPageCategoryExclusions = function() {
    Y($()).t = []
};
k.addAdSensePageAttribute = function(a, b) {
    var c = Y($());
    Tc(c.k, a, b)
};
k.addAdSenseSlotAttribute = function(a, b, c) {
    var d = Y($());
    a && (a = Td(d, a)) && (a = J(a), null == d.n[a] && (d.n[a] = new Sc(d.D)), Tc(d.n[a], b, c))
};
k.enableSingleRequest = function() {
    var a = $g($());
    null == Q(a, "google_ad_impl") && (a.j.google_ad_impl = "gut_sync_sra")
};
k.collapseEmptyDivs = function(a) {
    var b = $g($());
    b.j.google_collapse_empty_div = "true";
    a && (b.j.google_divs_start_collapsed = "true")
};
k.enableAsyncRendering = function() {
    var a = $g($());
    null == Q(a, "google_ad_impl") && (a.j.google_ad_impl = "gut_friendly_iframe")
};
k.enableAsyncSingleRequest = function() {
    var a = $g($());
    null == Q(a, "google_ad_impl") && (a.j.google_ad_impl = "gut_friendly_iframe_sra")
};
k.setVideoContentInformation = function(a, b) {
    var c = Z($());
    c.ra=!0;
    c.aa = a;
    c.$ = b;
    c.videoStreamCorrelator = Math.floor(4503599627370496 * Math.random())
};
k.getVideoContentInformation = function() {
    var a = Z($());
    return {
        cmsid: a.$,
        vid: a.aa
    }
};
k.getVideoStreamCorrelator = function() {
    return Z($()).videoStreamCorrelator
};
k.refresh = function(a, b) {
    var c = $(), d = Z(c), c = Y(c), e = null, e = null != a ? ih(a): Nd(c);
    0 == e.length || d.za(e, b)
};
k.getCorrelator = function() {
    return Z($()).t + ""
};
k.setCorrelator = function(a) {
    cg(Z($()), a)
};
k.setMobilePlatform = function() {
    $g($()).j.target_platform = "MOBILE"
};
k.setApiExperiment = function(a) {
    Xe(a)
};
k.isAdRequestFinished = function() {
    return Z($()).xa()
};
k.isSlotAPersistentRoadblock = function(a) {
    if (!a)
        return !1;
    var b = Y($());
    return !!(new ac(a, !1)in b.m)
};
k.clearNoRefreshState = function() {
    Y($()).m = {}
};
k.clearSlotContents = function(a) {
    var b = $(), c = Z(b), b = Y(b), d = null, d = a ? ih(a): Nd(b);
    return c.Y(d)
};
k.setLocation = function(a) {
    Y($()).r = a
};
k.setPublisherProvidedId = function(a) {
    Y($()).A = a
};
k.getVersion = function() {
    return "54"
};
k.setCenterAds = function(a) {
    Y($()).w = a
};
var ih = function(a) {
    for (var b = [], c = Y($()), d = 0; d < a.length; ++d) {
        var e = Td(c, a[d]);
        e && b.push(e)
    }
    return b
}, jh = function(a, b) {
    var c;
    c = q.googletag || (q.googletag = {});
    c = c.impl || (c.impl = {});
    c = c.pubads || (c.pubads = {});
    c[a] || (c[a] = b)
};
jh("createDomIframe", function(a, b, c, d) {
    try {
        var e;
        e = d ? ch() : $();
        var f = Z(e), g;
        if (g = Y(e).j[b]) {
            d = document;
            var h = f.l[J(g)], l = h._width_, n = h._height_, p = h._html_, m = d.createElement("iframe"), v = L(g);
            m.id = v;
            m.name = v;
            m.width = l;
            m.height = n;
            m.vspace = 0;
            m.hspace = 0;
            m.allowTransparency = "true";
            m.scrolling = "no";
            m.marginWidth = 0;
            m.marginHeight = 0;
            m.frameBorder = 0;
            m.style.border = 0;
            m.style.position = "absolute";
            m.style.top = 0;
            m.style.left = 0;
            var x = kg(d, "ins", m, l, n, "block"), s = kg(d, "ins", x, l, n, "inline-table");
            s.style.verticalAlign =
            "bottom";
            var R = d.getElementById(a);
            if (c) {
                var ta = kg(d, "div", s, l, null, "block", "auto");
                R.appendChild(ta)
            } else 
                R.appendChild(s);
            m.contentWindow.document.write(p);
            m.contentWindow.document.write("<script>document.close();\x3c/script>");
            M(g, gc(g, h));
            var eb = document.getElementById(L(g));
            eb && vg(f, eb, b)
        }
    } catch (yb) {
        gh(2401, yb)
    }
});
jh("setAdContentsBySlot", function(a) {
    try {
        Z($()).D(a)
    } catch (b) {
        gh(2402, b)
    }
});
jh("setAdContentsBySlotForSync", function(a) {
    try {
        Vg(Z($()), a)
    } catch (b) {
        gh(2403, b)
    }
});
jh("setPassbackAdContents", function(a) {
    try {
        Vg(Z(ch()), a, !0)
    } catch (b) {
        gh(2404, b)
    }
});
jh("setAdContentsBySlotForAsync", function(a, b) {
    try {
        Eg(Z($()), a, b)
    } catch (c) {
        gh(2405, c)
    }
});
jh("syncAdSlotLoaded", function(a, b, c) {
    try {
        var d = Z(c ? ch() : $());
        if (b) {
            var e = d.j.j[b];
            if (e&&!e.n) {
                e.n=!0;
                var f = d.l[J(e)], g = a.parentNode, h = f && f._html_;
                h ? (!f._expandable_ || f._is_afc_ && f._is_3pas_ ? ag(a, h, !0) : g.innerHTML = h, M(e, gc(e, f))) : (g.removeChild(a), M(e, hc(e)))
            }
        }
    } catch (l) {
        gh(2407, l)
    }
});
jh("setCookieInfo", function(a) {
    try {
        var b;
        $();
        b = Pe(void 0);
        Ne(b, a)
    } catch (c) {
        gh(2408, c)
    }
});
try {
    $g($());
    googletag._tmanager_.tick("pubads_load");
    window.google_noFetch=!1;
    window.google_DisableInitialLoad=!1;
    try {
        var lh = q.googletag.pubads;
        if (ea(lh))
            lh().onGoogleAdsJsLoad(new hh)
        } catch (mh) {
        fh(3002, mh)
    }
} catch (nh) {
    gh(3001, nh)
};
})();


