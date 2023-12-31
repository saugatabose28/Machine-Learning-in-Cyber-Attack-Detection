(function() {
    var k = this, aa = function(a, b) {
        var c = a.split("."), d = k;
        c[0]in d ||!d.execScript || d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());)
            c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
    }, ba = function(a) {
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
                            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable &&
                            !a.propertyIsEnumerable("splice"))
                                return "array";
                                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))
                                    return "function"
            } else 
                return "null";
                else if ("function" == b && "undefined" == typeof a.call)
    return "object";
return b
}, ca = function(a) {
    var b = ba(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}, n = function(a) {
    return "string" == typeof a
}, p = function(a) {
    return "number" == typeof a
}, q = function(a) {
    return "function" == ba(a)
}, da = function(a) {
    var b =
    typeof a;
    return "object" == b && null != a || "function" == b
}, ea = function(a, b, c) {
    return a.call.apply(a.bind, arguments)
}, fa = function(a, b, c) {
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
    t = Function.prototype.bind&&-1 != Function.prototype.bind.toString().indexOf("native code") ? ea : fa;
    return t.apply(null,
    arguments)
}, ja = function(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
    }
};
var v = function(a) {
    a = parseFloat(a);
    return isNaN(a) || 1 < a || 0 > a ? 0 : a
};
var ka = v("1.0"), la = v("0.05"), na = v("0.95"), oa = v("0.02"), pa = v("0.20"), qa = v("0.02"), ra = v("1.0"), sa = v("0.0");
var ta = /^true$/.test("false")?!0 : !1;
var va;
var wa = String.prototype.trim ? function(a) {
    return a.trim()
}
: function(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}, Ea = function(a) {
    if (!xa.test(a))
        return a;
    - 1 != a.indexOf("&") && (a = a.replace(ya, "&amp;"));
    - 1 != a.indexOf("<") && (a = a.replace(za, "&lt;"));
    - 1 != a.indexOf(">") && (a = a.replace(Aa, "&gt;"));
    - 1 != a.indexOf('"') && (a = a.replace(Ba, "&quot;"));
    - 1 != a.indexOf("'") && (a = a.replace(Ca, "&#39;"));
    - 1 != a.indexOf("\x00") && (a = a.replace(Da, "&#0;"));
    return a
}, ya = /&/g, za = /</g, Aa = />/g, Ba = /"/g, Ca = /'/g, Da = /\x00/g, xa = /[\x00&<>"']/,
Ga = function(a, b) {
    for (var c = 0, d = wa(String(a)).split("."), e = wa(String(b)).split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
        var h = d[g] || "", l = e[g] || "", s = RegExp("(\\d*)(\\D*)", "g"), u = RegExp("(\\d*)(\\D*)", "g");
        do {
            var r = s.exec(h) || ["", "", ""], D = u.exec(l) || ["", "", ""];
            if (0 == r[0].length && 0 == D[0].length)
                break;
            c = Fa(0 == r[1].length ? 0 : parseInt(r[1], 10), 0 == D[1].length ? 0 : parseInt(D[1], 10)) || Fa(0 == r[2].length, 0 == D[2].length) || Fa(r[2], D[2])
        }
        while (0 == c)
        }
    return c
}, Fa = function(a, b) {
    return a < b?-1 : a > b ? 1 : 0
}, Ha =
function() {
    return "transform".replace(/\-([a-z])/g, function(a, b) {
        return b.toUpperCase()
    })
}, Ia = function(a) {
    var b = n(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"): "\\s";
    return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
        return b + e.toUpperCase()
    })
};
var Ja = function(a) {
    Ja[" "](a);
    return a
};
Ja[" "] = function() {};
var Ka = function(a) {
    try {
        var b;
        if (b=!!a && null != a.location.href)
            i: {
            try {
                Ja(a.foo);
                b=!0;
                break i
            } catch (c) {}
            b=!1
        }
        return b
    } catch (d) {
        return !1
    }
}, La = function(a, b, c) {
    a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
};
var w = document, x = window;
var Ma = function(a) {
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
}, Na = function(a, b) {
    a.google_image_requests || (a.google_image_requests = []);
    var c = a.document.createElement("img");
    c.src = b;
    a.google_image_requests.push(c)
};
var Oa = null, Pa = function(a, b) {
    for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b.call(null, a[c], c, a)
};
function y(a) {
    return "function" == typeof encodeURIComponent ? encodeURIComponent(a) : escape(a)
}
var Qa = function(a, b) {
    La(a, "readystatechange", b)
}, Sa = function() {
    var a = z();
    return "complete" == a.document.readyState||!!a.google_onload_fired
}, Ta = {}, Ua = function(a, b) {
    var c;
    i: {
        if (!(1E-4 > Math.random()) && (c = Math.random(), c < b)) {
            try {
                var d = new Uint16Array(1);
                window.crypto.getRandomValues(d);
                c = d[0] / 65536
            } catch (e) {
                c = Math.random()
            }
            c = a[Math.floor(c * a.length)];
            break i
        }
        c = null
    }
    return c
};
var Va=!!window.google_async_iframe_id, A = Va && window.parent || window, z = function() {
    if (Va&&!Ka(A)) {
        for (var a = "." + w.domain; 2 < a.split(".").length&&!Ka(A);)
            w.domain = a = a.substr(a.indexOf(".") + 1), A = window.parent;
        Ka(A) || (A = window)
    }
    return A
};
var Wa = .01, Xa=!0, Ya = {}, ab = function(a, b, c, d) {
    var e = Za, f, g = Xa;
    try {
        f = b()
    } catch (h) {
        try {
            var l = Ma(h);
            b = "";
            h.fileName && (b = h.fileName);
            var s =- 1;
            h.lineNumber && (s = h.lineNumber);
            g = e(a, l, b, s, c)
        } catch (u) {
            try {
                var r = Ma(u);
                a = "";
                u.fileName && (a = u.fileName);
                c =- 1;
                u.lineNumber && (c = u.lineNumber);
                Za("pAR", r, a, c, void 0, void 0)
            } catch (D) {
                $a({
                    context: "mRE",
                    msg: D.toString() + "\n" + (D.stack || "")
                }, void 0)
            }
        }
        if (!g)
            throw h;
    } finally {
        if (d)
            try {
                d()
            } catch (ma) {}
    }
    return f
}, Za = function(a, b, c, d, e, f) {
    var g = {};
    if (e)
        try {
            e(g)
    } catch (h) {}
    g.context =
    a;
    g.msg = b.substring(0, 512);
    c && (g.file = c);
    0 < d && (g.line = d.toString());
    g.url = w.URL.substring(0, 512);
    g.ref = w.referrer.substring(0, 512);
    bb(g);
    $a(g, f);
    return Xa
}, $a = function(a, b) {
    try {
        if (Math.random() < (b || Wa)) {
            var c = "/pagead/gen_204?id=jserror" + cb(a), d = "http" + ("http:" == x.location.protocol ? "" : "s") + "://pagead2.googlesyndication.com" + c, d = d.substring(0, 2E3);
            Na(x, d)
        }
    } catch (e) {}
}, bb = function(a) {
    var b = a || {};
    Pa(Ya, function(a, d) {
        b[d] = x[a]
    })
}, db = function(a, b, c, d, e) {
    return function() {
        var f = arguments;
        return ab(a, function() {
            return b.apply(c,
            f)
        }, d, e)
    }
}, B = function(a, b) {
    return db(a, b, void 0, void 0, void 0)
}, eb = function(a, b) {
    return db(a, b, void 0, void 0, void 0)
}, cb = function(a) {
    var b = "";
    Pa(a, function(a, d) {
        if (0 === a || a)
            b += "&" + d + "=" + y(a)
    });
    return b
};
var fb = function(a) {
    return (a = /[&\?]exk=([^& ]+)/.exec(a)) && 2 == a.length ? a[1] : null
};
var C = Array.prototype, E = C.forEach ? function(a, b, c) {
    C.forEach.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++)
        f in e && b.call(c, e[f], f, a)
}, gb = C.map ? function(a, b, c) {
    return C.map.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = Array(d), f = n(a) ? a.split("") : a, g = 0; g < d; g++)
        g in f && (e[g] = b.call(c, f[g], g, a));
    return e
}, hb = C.some ? function(a, b, c) {
    return C.some.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && b.call(c, e[f], f, a))
            return !0;
    return !1
}, ib = function(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)
            c[d] = a[d];
        return c
    }
    return []
}, jb = function(a) {
    for (var b = [], c = 0; c < a; c++)
        b[c] = 0;
    return b
};
var F = function(a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0
};
F.prototype.clone = function() {
    return new F(this.x, this.y)
};
F.prototype.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
F.prototype.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
F.prototype.translate = function(a, b) {
    a instanceof F ? (this.x += a.x, this.y += a.y) : (this.x += a, p(b) && (this.y += b));
    return this
};
var G = function(a, b) {
    this.width = a;
    this.height = b
};
G.prototype.clone = function() {
    return new G(this.width, this.height)
};
G.prototype.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
G.prototype.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var kb = function(a, b) {
    for (var c in a)
        b.call(void 0, a[c], c, a)
}, lb = function(a) {
    var b = 0, c;
    for (c in a)
        b++;
    return b
}, mb = function(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = d;
    return b
}, nb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), ob = function(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)
            a[c] = d[c];
        for (var f = 0; f < nb.length; f++)
            c = nb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};
var H;
i: {
    var pb = k.navigator;
    if (pb) {
        var qb = pb.userAgent;
        if (qb) {
            H = qb;
            break i
        }
    }
    H = ""
}
var I = function(a) {
    return - 1 != H.indexOf(a)
};
var rb = I("Opera") || I("OPR"), J = I("Trident") || I("MSIE"), K = I("Gecko")&&-1 == H.toLowerCase().indexOf("webkit")&&!(I("Trident") || I("MSIE")), M =- 1 != H.toLowerCase().indexOf("webkit"), sb = I("Macintosh"), tb = k.navigator || null, ub=!!tb&&-1 != (tb.appVersion || "").indexOf("X11"), vb = function() {
    var a = k.document;
    return a ? a.documentMode : void 0
}, wb = function() {
    var a = "", b;
    if (rb && k.opera)
        return a = k.opera.version, q(a) ? a() : a;
    K ? b = /rv\:([^\);]+)(\)|;)/ : J ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : M && (b = /WebKit\/(\S+)/);
    b && (a = (a = b.exec(H)) ?
    a[1] : "");
    return J && (b = vb(), b > parseFloat(a)) ? String(b) : a
}(), xb = {}, N = function(a) {
    return xb[a] || (xb[a] = 0 <= Ga(wb, a))
}, yb = k.document, zb = yb && J ? vb() || ("CSS1Compat" == yb.compatMode ? parseInt(wb, 10) : 5) : void 0;
var Ab=!J || J && 9 <= zb;
!K&&!J || J && J && 9 <= zb || K && N("1.9.1");
J && N("9");
var Cb = function(a) {
    return a ? new Bb(O(a)) : va || (va = new Bb)
}, Eb = function(a, b) {
    kb(b, function(b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Db ? a.setAttribute(Db[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
}, Db = {
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
},
Fb = function(a) {
    var b = M || "CSS1Compat" != a.compatMode ? a.body || a.documentElement: a.documentElement;
    a = a.parentWindow || a.defaultView;
    return J && N("10") && a.pageYOffset != b.scrollTop ? new F(b.scrollLeft, b.scrollTop) : new F(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
}, Gb = function(a) {
    return a ? a.parentWindow || a.defaultView : window
}, Ib = function(a, b, c) {
    var d = arguments, e = document, f = d[0], g = d[1];
    if (!Ab && g && (g.name || g.type)) {
        f = ["<", f];
        g.name && f.push(' name="', Ea(g.name), '"');
        if (g.type) {
            f.push(' type="', Ea(g.type),
            '"');
            var h = {};
            ob(h, g);
            delete h.type;
            g = h
        }
        f.push(">");
        f = f.join("")
    }
    f = e.createElement(f);
    g && (n(g) ? f.className = g : "array" == ba(g) ? f.className = g.join(" ") : Eb(f, g));
    2 < d.length && Hb(e, f, d);
    return f
}, Hb = function(a, b, c) {
    function d(c) {
        c && b.appendChild(n(c) ? a.createTextNode(c) : c)
    }
    for (var e = 2; e < c.length; e++) {
        var f = c[e];
        !ca(f) || da(f) && 0 < f.nodeType ? d(f) : E(Jb(f) ? ib(f) : f, d)
    }
}, O = function(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}, Kb = function(a) {
    return a.contentWindow || Gb(a.contentDocument || a.contentWindow.document)
},
Jb = function(a) {
    if (a && "number" == typeof a.length) {
        if (da(a))
            return "function" == typeof a.item || "string" == typeof a.item;
        if (q(a))
            return "function" == typeof a.item
    }
    return !1
}, Bb = function(a) {
    this.za = a || k.document || document
};
Bb.prototype.createElement = function(a) {
    return this.za.createElement(a)
};
Bb.prototype.createTextNode = function(a) {
    return this.za.createTextNode(String(a))
};
var Lb = function(a) {
    return Fb(a.za)
};
Bb.prototype.appendChild = function(a, b) {
    a.appendChild(b)
};
var Mb = function(a) {
    for (var b = 0; a != a.parent;)
        a = a.parent, b++, Ka(a)
};
var P = function(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
};
P.prototype.clone = function() {
    return new P(this.top, this.right, this.bottom, this.left)
};
P.prototype.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
P.prototype.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
P.prototype.translate = function(a, b) {
    a instanceof F ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, p(b) && (this.top += b, this.bottom += b));
    return this
};
var Nb = function(a, b) {
    var c;
    i: {
        c = O(a);
        if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
            c = c[b] || c.getPropertyValue(b) || "";
            break i
        }
        c = ""
    }
    return c || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}, Ob = function(a) {
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
    J && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}, Pb = function(a) {
    if (J&&!(J && 8 <= zb))
        return a.offsetParent;
    var b = O(a), c = Nb(a, "position"), d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (c = Nb(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
            return a;
    return null
}, Qb = function(a) {
    var b, c = O(a), d = Nb(a, "position"), e = K && c.getBoxObjectFor&&!a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) &&
    (0 > b.screenX || 0 > b.screenY), f = new F(0, 0), g;
    b = c ? O(c) : document;
    (g=!J || J && 9 <= zb) || (g = "CSS1Compat" == Cb(b).za.compatMode);
    g = g ? b.documentElement : b.body;
    if (a == g)
        return f;
    if (a.getBoundingClientRect)
        b = Ob(a), a = Lb(Cb(c)), f.x = b.left + a.x, f.y = b.top + a.y;
    else if (c.getBoxObjectFor&&!e)
        b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(g), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
    else {
        b = a;
        do {
            f.x += b.offsetLeft;
            f.y += b.offsetTop;
            b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
            if (M && "fixed" == Nb(b, "position")) {
                f.x += c.body.scrollLeft;
                f.y += c.body.scrollTop;
                break
            }
            b = b.offsetParent
        }
        while (b && b != a);
        if (rb || M && "absolute" == d)
            f.y -= c.body.offsetTop;
        for (b = a; (b = Pb(b)) && b != c.body && b != g;)
            f.x -= b.scrollLeft, rb && "TR" == b.tagName || (f.y -= b.scrollTop)
    }
    return f
}, Rb = function(a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a
}, Sb = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
var Tb = /[&\?](?:client|correlator|url|ifk|oid|eid|iu)=[^&]+/g, Ub = /[&\?](?:slotname|dt|ifi|adx|ady|format|output|flash|impl)=[^&]+/g;
J && N("9");
!M || N("528");
K && N("1.9b") || J && N("8") || rb && N("9.5") || M && N("528");
K&&!N("8") || J && N("9");
var Vb = function(a, b, c) {
    if ("array" == ba(b))
        for (var d = 0; d < b.length; d++)
            Vb(a, String(b[d]), c);
    else 
        null != b && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
}, Wb = function(a, b, c) {
    for (c = c || 0; c < b.length; c += 2)
        Vb(b[c], b[c + 1], a);
    return a
}, Xb = function(a, b) {
    var c = 2 == arguments.length ? Wb([a], arguments[1], 0): Wb([a], arguments, 1);
    if (c[1]) {
        var d = c[0], e = d.indexOf("#");
        0 <= e && (c.push(d.substr(e)), c[0] = d = d.substr(0, e));
        e = d.indexOf("?");
        0 > e ? c[1] = "?" : e == d.length - 1 && (c[1] = void 0)
    }
    return c.join("")
};
var Yb=!1, Q = "", Zb = function(a) {
    a = a.match(/[\d]+/g);
    if (!a)
        return "";
    a.length = 3;
    return a.join(".")
};
if (navigator.plugins && navigator.plugins.length) {
    var $b = navigator.plugins["Shockwave Flash"];
    $b && (Yb=!0, $b.description && (Q = Zb($b.description)));
    navigator.plugins["Shockwave Flash 2.0"] && (Yb=!0, Q = "2.0.0.11")
} else if (navigator.mimeTypes && navigator.mimeTypes.length) {
    var ac = navigator.mimeTypes["application/x-shockwave-flash"];
    (Yb = ac && ac.enabledPlugin) && (Q = Zb(ac.enabledPlugin.description))
} else 
    try {
        var bc = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), Yb=!0, Q = Zb(bc.GetVariable("$version"))
} catch (cc) {
    try {
        bc =
        new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), Yb=!0, Q = "6.0.21"
    } catch (dc) {
        try {
            bc = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), Yb=!0, Q = Zb(bc.GetVariable("$version"))
        } catch (ec) {}
    }
}
var fc = Q;
var gc;
gc=!1;
var R = H;
R && ( - 1 != R.indexOf("Firefox")||-1 != R.indexOf("Camino")||-1 != R.indexOf("iPad")||-1 != R.indexOf("iPhone")||-1 != R.indexOf("iPod")||-1 != R.indexOf("Chrome")||-1 != R.indexOf("Android")||-1 != R.indexOf("Safari") && (gc=!0));
var hc = gc;
ta && (Wa = 1);
if (w && w.URL)
    var ic = w.URL, Xa=!(ic && (0 < ic.indexOf("?google_debug") || 0 < ic.indexOf("&google_debug")));
var S = function(a, b, c, d) {
    c = eb(d || "osd_or_lidar::" + b, c);
    La(a, b, c);
    return c
};
var jc = function() {
    this.Vb = this.Ub = 3E3;
    this.h = "u";
    this.bb = null;
    this.j = [];
    this.Jb=!1;
    this.K =- 1;
    this.xa = 0
}, kc = function(a, b, c) {
    this.ua = a;
    this.Bb = b;
    this.Ab = c
}, oc = function(a, b, c) {
    if (!(b && b.getBoundingClientRect && 0 <= Ga(fc, "11") && c) || J && 9 > wb || 0 < a.j.length)
        return !1;
    try {
        var d = b.getBoundingClientRect()
    } catch (e) {
        return !1
    }
    var f = "DIV" == b.tagName || "INS" == b.tagName, g = O(b), h = [];
    f ? (b.style.position = "relative", d = lc(d), E(d, function(a, d) {
        var e = new mc("e", g, c, String(d));
        this.j.push(e);
        h.push(t(e.Zb, e, b, a))
    }, a)) : (d = nc(a,
    d), E(d, function(a, d) {
        var e = new mc("e", g, c, String(d));
        this.j.push(e);
        h.push(t(e.Yb, e, b, a))
    }, a));
    var l=!0;
    E(h, function(a) {
        l = l && a()
    });
    l ? (a.h = "l", a.bb = b, a.Jb=!f) : (E(a.j, function(a) {
        a.remove()
    }), a.j = []);
    return l
}, lc = function(a) {
    return [new F(Math.floor((a.right - a.left) / 2), Math.floor((a.bottom - a.top) / 2))]
}, nc = function(a, b) {
    var c;
    try {
        c = b || a.bb.getBoundingClientRect()
    } catch (d) {
        c = new P(0, 0, 0, 0)
    }
    var e = lc(c);
    E(e, function(a) {
        a.x += c.left;
        a.y += c.top
    });
    return e
}, qc = function(a) {
    if (a.bb && a.Jb) {
        var b = nc(a);
        E(b, function(a,
        b) {
            this.j[b] && pc(this.j[b], a)
        }, a)
    }
}, rc = function(a) {
    E(a.j, function(a) {
        a.remove()
    });
    a.j = [];
    a.h = "d"
}, vc = function(a) {
    var b = (new Date).getTime(), c = a.Lb ? b - a.Lb: 0, d =- 1;
    4 == a.j.length ? (d = gb(a.j, function(a) {
        return sc(a, b)
    }), d = tc(d)) : 1 == a.j.length && (d = [ - 1, 0, 1, 2, 3, 5][sc(a.j[0], b) + 1]);
    a.xa = d == a.K ? a.xa + c : 0;
    c = new kc(d, a.K, c);
    a.K = d;
    a.Lb = b;
    uc(a, d);
    qc(a);
    return c
}, tc = function(a) {
    var b = jb(lb(wc));
    E(a, function(a) {
        0 <= a&&++b[a]
    });
    return 4 == b[4] ? 6 : 3 <= b[4] ? 5 : 0 < b[4] ? 4 : 4 == b[2] ? 2 : 4 == b[1] ? 1 : 4 == b[0] ? 0 : 3
}, uc = function(a, b) {
    0 ==
    b && xc(a) ? a.h = "n" : a.h = "dlfcrrrr".split("")[b + 1]
}, yc = function(a) {
    return "f" == a.h && a.xa >= a.Ub
}, xc = function(a) {
    return "n" == a.h?!0 : "l" == a.h && a.xa >= a.Vb
}, mc = function(a, b, c, d) {
    this.g = null;
    this.$a = a;
    this.Kb = "e" == a ? String(c) + "~" + String(d) : "";
    this.L = [];
    this.S =- 1;
    this.ab = 0;
    this.wa = jb(lb(zc));
    this.Tb = jb(lb(wc));
    "e" == this.$a && (Ac[this.Kb] = t(this.Wb, this));
    J ? (a = b.createElement("div"), a.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" style="opacity:0;-ms-filter:\'progid:DXImageTransform.Microsoft.Alpha(opacity=0)\';filter:alpha(opacity=0)"><param name="movie" value="' +
    Bc(this, !0) + '"></param><param name="allowscriptaccess" value="always"></param><param name="wmode" value="transparent"></param></object>', a = a.firstChild, a.id = String(Math.random())) : a = Cc(this, b);
    a.width = 1;
    a.height = 1;
    a.style.zIndex =- 999999;
    this.g = a
}, wc = {
    nc: - 1,
    LOADING: 0,
    bc: 1,
    ac: 2,
    ec: 3,
    oc: 4
}, zc = {
    LOADING: 0,
    bc: 1,
    ac: 2,
    jc: 3,
    gc: 4,
    lc: 5,
    mc: 6,
    kc: 7,
    hc: 8,
    ic: 9
}, Ac = {}, Cc = function(a, b) {
    var c = function(a, c, d) {
        var e = b.createElement("param");
        e.name = c;
        e.value = d;
        a.appendChild(e)
    }, d = Bc(a), e = b.createElement("object");
    e.type =
    "application/x-shockwave-flash";
    e.data = d;
    c(e, "movie", d);
    c(e, "allowscriptaccess", "always");
    c(e, "wmode", "opaque");
    e.style.visibility = "hidden";
    e.style.opacity = 0;
    return e
}, Bc = function(a, b) {
    var c = "//www.gstatic.com/osd/hbt.swf";
    "e" == a.$a && (c = Xb("//www.gstatic.com/osd/hbe.swf", "id", a.Kb));
    b && (c = Xb(c, "delay", "1"));
    return c
};
mc.prototype.Zb = function(a, b) {
    if (!this.g)
        return !1;
    this.g.style.position = "absolute";
    pc(this, b);
    var c=!0;
    try {
        a.appendChild(this.g)
    } catch (d) {
        c=!1
    }
    return c
};
mc.prototype.Yb = function(a, b) {
    if (!this.g ||!a.parentNode)
        return !1;
    this.g.style.position = "fixed";
    pc(this, b);
    var c=!0;
    try {
        a.parentNode && a.parentNode.insertBefore(this.g, a.nextSibling)
    } catch (d) {
        c=!1
    }
    return c
};
var pc = function(a, b) {
    var c;
    if (c = a.g)
        c = a.g, c = new F(c.offsetLeft, c.offsetTop), c=!(b == c || b && c && b.x == c.x && b.y == c.y);
    if (c) {
        c = a.g;
        var d, e, f = K && (sb || ub) && N("1.9");
        b instanceof F ? (d = b.x, e = b.y) : (d = b, e = void 0);
        c.style.left = Rb(d, f);
        c.style.top = Rb(e, f)
    }
};
mc.prototype.remove = function() {
    if (this.g)
        try {
            var a = this.g;
            a && a.parentNode && a.parentNode.removeChild(a)
    } catch (b) {}
    this.g = null
};
mc.prototype.Wb = function(a) {
    this.S = a ? 3 : 4
};
var sc = function(a, b) {
    if ("e" == a.$a) {
        var c = null;
        try {
            c = a.g.it()
        } catch (d) {}
        null === c ? (c = 0, 0 < a.S && (c = 2)) : c = c ? 3 : 4;
        ++a.Tb[c + 1];
        a.S = c
    } else {
        var e = Number(b), f = null;
        try {
            f = a.g.fc()
        } catch (g) {}
        Dc(a, f, e);
        c = a.L[a.L.length - 1];
        if (null === f) {
            if (f = e = 0, 0 < a.S || p(c.ya))
                f = e = 2
        } else 
            null === c.ya || c.cb >= e ? (e = 10 <= f ? 4 : 0, f = 0) : f > c.ya ? (c = (f - c.ya) / (e - c.cb) * 1E3, e = 10 <= c ? 4 : 3, c = 0 == c ? 1 : 1 > c ? 3 : 4 > c ? 4 : 23 > c ? 6 : 26 > c ? 8 : 9, 6 == a.ab && 6 == c && (c = 7), f = c) : f = e = 1;
        6 == a.ab && (--a.wa[6], 4 == f || 8 == f?++a.wa[5] : ++a.wa[7]);
        ++a.wa[f];
        a.S = e;
        a.ab = f
    }
    return a.S
}, Dc = function(a,
b, c) {
    var d = c - 1E3, e = a.L.length;
    E(a.L, function(a, b) {
        a.cb <= d && (e = Math.min(e, b + 1))
    });
    var f = a.L.length - e;
    0 < f && a.L.splice(e, f);
    a.L.unshift({
        ya: b,
        cb: c
    })
};
aa("gteh", db("osd_or_lidar::gteh_ex", function(a, b) {
    var c = Ac[a];
    q(c) && c(b)
}));
var Ec = function(a, b) {
    this.r = a || 0;
    this.o = b || ""
}, Fc = function(a, b) {
    a.r && (b[4] = a.r);
    a.o && (b[12] = a.o)
};
Ec.prototype.match = function(a) {
    return (this.r || this.o) && (a.r || a.o) ? this.o || a.o ? this.o == a.o : this.r || a.r ? this.r == a.r : !1 : !1
};
Ec.prototype.toString = function() {
    var a = "" + this.r;
    this.o && (a += "-" + this.o);
    return a
};
var Gc = function(a) {
    var b = [];
    kb(a, function(a, d) {
        var e = y(d), f = a;
        n(f) && (f = y(f));
        b.push(e + "=" + f)
    });
    return b.join("\n")
};
var Hc = function(a, b, c) {
    b = b || x;
    a && b.top != b && (b = b.top);
    try {
        var d;
        if (b.document&&!b.document.body)
            d = new G( - 1, - 1);
        else {
            var e;
            if (c)
                e = new G(b.innerWidth, b.innerHeight);
            else {
                var f = (b || window).document, g = "CSS1Compat" == f.compatMode ? f.documentElement: f.body;
                e = new G(g.clientWidth, g.clientHeight)
            }
            d = e
        }
        return d
    } catch (h) {
        return new G( - 12245933, - 12245933)
    }
}, Jc = function(a, b, c) {
    var d = Ic, e = x || x;
    a && (e = e.top);
    a = b || Hc(a, e, d);
    c = c || Lb(Cb(e.document));
    return - 1 == a.width||-12245933 == a.width ? new P(a.width, a.width, a.width, a.width) :
    new P(c.y, c.x + a.width, c.y + a.height, c.x)
}, Kc = function() {
    return x.outerWidth ? new G(x.outerWidth, x.outerHeight) : new G( - 12245933, - 12245933)
}, Nc = function(a, b) {
    ("msie"in Ta ? Ta.msie : Ta.msie =- 1 != navigator.userAgent.toLowerCase().indexOf("msie"))&&!window.opera ? Qa(a, eb("osd::util::rschange", function() {
        "complete" == a.readyState && b(null)
    })) : La(a, "load", eb("osd::util::load", b))
}, Oc = function(a, b) {
    try {
        b.postMessage(a, "*")
    } catch (c) {}
}, Pc = function(a, b) {
    if (b) {
        a(b);
        var c = b.frames;
        if (c) {
            var d = c.length, e;
            for (e = 0; e < d; ++e)
                Pc(a,
                c[e])
            }
    }
}, Sc = function(a) {
    var b = 0 <= T ? U() - T: - 1, c = Qc ? U() - Rc: - 1, d;
    947190538 == a ? (a = [4E3], d = [250, 1E3]) : (a = [2E3, 4E3], d = [250, 500, 1E3]);
    var e = b;
    - 1 != c && c < b && (e = c);
    for (var f, b = 0; b < a.length; ++b)
        if (e < a[b]) {
            f = d[b];
            break
        }
    void 0 === f && (f = d[a.length]);
    return f
}, Tc = (new Date).getTime(), T =- 1, Qc=!1, Rc =- 1, U = function() {
    return (new Date).getTime() - Tc
};
var V = function(a, b, c, d, e, f, g, h, l) {
    this.a = Uc.clone();
    this.k = this.F = 0;
    this.M = new P(0, 0, 0, 0);
    this.Ba = this.Ia = this.N =- 1;
    this.Z = [0, 0, 0, 0, 0];
    this.H = [0, 0, 0, 0, 0];
    this.A = [0, 0, 0, 0, 0];
    this.zoom = [0, 0, 0, 0, 0];
    this.U = "";
    this.tb=!1;
    this.ub=!0;
    this.l = d;
    this.X = this.ha =- 1;
    this.Na = 0;
    this.ka = b;
    this.p = c && c._adk_ ? c._adk_ : 0;
    this.mb = null;
    this.b = e;
    this.ba = g || "";
    this.ea = h || "";
    this.Ca = function() {};
    this.ib = function() {};
    this.G = this.element = c;
    this.aa = 0;
    this.ma =- 1;
    this.Y = l || Uc;
    this.fb = b?-1 != b.indexOf("dcopt=anid") : !1;
    this.hb = "";
    this.s = c ? String(c._avi_ || "") : "";
    this.Ob = c ? Boolean(c._eos_) : !1;
    this.qa = 0;
    this.Oa = [];
    this.ob=!1;
    this.Ka = "";
    this.fa = null;
    this.ga = "";
    this.m = {};
    this.m.le = 0;
    this.m.nt = 2;
    this.m.Fr = 3;
    this.f = this.Ua = null;
    this.$=!1;
    this.R = this.d = null;
    this.Pa = 0;
    this.w = null;
    this.Qa=!1;
    this.c = null;
    this.da = "";
    this.ca = this.C = this.q = null;
    this.Ma = this.ia=!1;
    this.T = this.oa = null;
    this.gb=!1;
    this.D = this.Pb = null;
    this.ta = 0;
    this.na=!1;
    this.v = null;
    this.V=!1;
    this.Q = null;
    this.sa = 0;
    this.la=!1;
    this.I = null;
    this.Sb = 0;
    this.vb = null;
    this.lb = this.nb =
    this.Ja=!1;
    this.ra = null;
    this.pa = c ? String(c._cvu_ || "") : "";
    this.sb=!1;
    this.jb = void 0;
    this.O = this.kb = this.Sa=!1;
    this.La = [];
    this.yb = this.qb = void 0;
    this.xb = 0;
    this.Ta =- 1;
    this.pb = this.W = 0;
    this.Ra = void 0;
    this.wb=!1;
    this.Ea = 0;
    this.rb = {
        Rb: null,
        Qb: null
    };
    this.Aa=!1;
    this.J = 5 == e ? .02 > Math.random() : Boolean(c && c._tos_);
    this.ja = this.B = this.P =- 1;
    this.Da = 0;
    this.u = {
        Fa: 0,
        Ha: 0,
        Ga: 0
    };
    Vc(this, a, f)
}, Uc = new P(0, 0, 0, 0), Wc = function(a) {
    return new Ec(a.p, a.mb)
}, Zc = function(a, b, c, d) {
    var e = Xc, f = a.ra, g = null, g = f && e ? new P(e.y, e.x + f.width,
    e.y + f.height, e.x): new P( - 12245933, - 12245933, - 12245933, - 12245933);
    d || (a.a = g, f && (a.F = f.width * f.height));
    Yc(a, g, b, c, d, !0)
}, $c = function(a, b, c, d, e) {
    if (!(0 > a.l)) {
        var f = x.innerWidth, g = x.innerHeight, h = new P(Math.round(x.mozInnerScreenY), Math.round(x.mozInnerScreenX + f), Math.round(x.mozInnerScreenY + g), Math.round(x.mozInnerScreenX));
        c = new P(x.screenY + d, x.screenX + c.width, x.screenY + c.height, x.screenX);
        e || (d = new P(h.top - c.top, h.right - c.left, h.bottom - c.top, h.left - c.left), d.top > a.a.top ? a.a = d : (a.a.right = a.a.left +
        f, a.a.bottom = a.a.top + g), a.F = f * g);
        Yc(a, h, c, b, e, !0)
    }
}, bd = function(a, b, c) {
    var d = ad(a, x && x.document);
    if (d) {
        c || Vc(a, x, !0);
        var e = Math.floor((a.a.left + a.a.right) / 2), f = Math.floor((a.a.top + a.a.bottom) / 2), g = Fb(document), d = d(e - g.x, f - g.y) ? .5: 0;
        Yc(a, a.a, d, b, c, !0)
    }
}, ad = function(a, b) {
    cd(a);
    if (!a.Ua) {
        var c = [];
        E(mb(a.m), function(a) {
            c[this.m[a] + 1] = a
        }, a);
        var d = c.join(""), d = b && b[d];
        a.Ua = d && t(d, b)
    }
    return a.Ua
}, cd = function(a) {
    a.m.e =- 1;
    a.m.i = 6;
    a.m.n = 7;
    a.m.t = 8
};
V.prototype.update = function(a, b, c, d, e) {
    if (0 > this.l)
        return null;
    c || Vc(this, d, e);
    Boolean(this.d) && (c ? (this.d && (e = this.d, 3 <= e.K && (e.K = 3)), d.clearInterval(this.R), this.R = null) : this.d&&!this.R && "d" != this.d.h && dd(this, d, !0));
    Boolean(this.q) && (c ? (this.q && this.q.pause(), d.clearInterval(this.C), this.C = null) : this.q&&!this.C && this.ia && (this.C = d.setInterval(B("osd_or_lidar::adblock::nclv_int", t(this.Hb, this)), 1E3), this.Hb()));
    null != this.v && (c ? (d.clearInterval(this.D), this.D = null, this.na=!1) : this.V&&!this.D &&
    ed(this, d, !0));
    null !== this.T && (c ? this.Ma && (d.clearTimeout(this.Pb), this.oa && this.oa.cc()) : this.Ma && this.oa && this.oa.dc());
    null != this.I && "-" != this.I && (c ? (d.clearInterval(this.Q), this.Q = null, this.la=!1) : this.Ja&&!this.Q && (this.Q = d.setInterval(B("osd_or_lidar::adblock::xdev_int", t(this.Ib, this, d, 1E3)), 1E3), this.Ib(d)));
    return Yc(this, this.a, b, a, c, !1)
};
var Yc = function(a, b, c, d, e, f) {
    var g = d - a.l || 1, h = null;
    p(c) ? b = fd(a, c) : (h = c, b = fd(a, b, h));
    a.qb || gd(a, b, g, a.ha, f, e, h);
    a.ha = e?-1 : b;
    a.l = d;
    - 1 != b && (0 > a.N && (a.N = d), a.Ba = d);
    - 1 == a.Ia && hd(a) && (a.Ia = d);
    a.Ca(a, h || Uc);
    return a.k
}, fd = function(a, b, c) {
    if (a.wb && 7 == a.b)
        return a.k = 1, id(a.k);
    var d = null;
    if (p(b))
        a.k = b;
    else {
        c = new P(Math.max(b.top, c.top), Math.min(b.right, c.right), Math.min(b.bottom, c.bottom), Math.max(b.left, c.left));
        if (0 >= a.F || c.top >= c.bottom || c.left >= c.right)
            return a.M = new P(0, 0, 0, 0), a.k = 0, - 1;
        a.M = c.clone().translate( - b.left,
        - b.top);
        d = (c.bottom - c.top) * (c.right - c.left);
        a.k = d / a.F
    }
    return id(a.k)
}, id = function(a) {
    var b =- 1;
    1 <= a ? b = 0 : .75 <= a ? b = 1 : .5 <= a ? b = 2 : .25 <= a ? b = 3 : 0 < a && (b = 4);
    return b
}, gd = function(a, b, c, d, e, f, g) {
    e = e&&-1 != d && 2 >= d;
    var h =- 1 == d||-1 == b?-1 : Math.max(d, b);
    d = e ? h : d;
    - 1 != d && (a.Z[d] += c);
    (e = g || null) ? ( - 1 != d && 2 >= d&&-1 != a.X && (a.zoom[a.X] += c), e = 100 * a.F / ((e.bottom - e.top) * (e.right - e.left)), a.X = 20 <= e ? 0 : 10 <= e ? 1 : 5 <= e ? 2 : 2.5 <= e ? 3 : 4) : a.X =- 1;
    (g = g || null) ? (g = (g.bottom - g.top) * (g.right - g.left), a.Na = 0 < g ? a.F * a.k / g : 0) : a.Na = 0;
    if (7 == a.b) {
        g = jd(a);
        e =- 1 != d && 2 >= d;
        !e && void 0 !== a.Ra && 0 < a.Ra && (a.W += c);
        a.W > a.pb && (a.pb = a.W);
        if (e || void 0 === g || 0 >= g)
            a.W = 0;
        a.Ra = g
    }
    for (g = d; 0 <= g && 4 >= g; g++)
        a.A[g] += c, a.A[g] > a.H[g] && (a.H[g] = a.A[g]);
    for (g = 0; g < a.A.length; ++g)
        if (g < b || f||-1 == b)
            a.A[g] = 0
}, kd = function(a) {
    a.f && rc(a.f)
}, dd = function(a, b, c) {
    a.R = b.setInterval(B("osd_or_lidar::adblock::flv_int", t(a.Nb, a, b)), 1E3);
    c && a.Nb(b)
};
V.prototype.Nb = function(a) {
    if (this.d) {
        var b = vc(this.d);
        this.Pa = 5 <= b.ua && 5 <= b.Bb ? this.Pa + b.Ab : 0;
        if (1E3 <= this.Pa)
            ld(this, a), this.w = "v";
        else if (2 == b.ua || xc(this.d) || yc(this.d))
            ld(this, a), this.w = "i"
    }
};
var ld = function(a, b) {
    b.clearInterval(a.R);
    a.R = null;
    a.Qa=!1;
    a.d && rc(a.d)
};
V.prototype.Hb = function() {
    this.q && this.q.update()
};
var ed = function(a, b, c) {
    a.D = b.setInterval(B("osd_or_lidar::adblock::iem_int", t(a.Mb, a, b, 1E3)), 1E3);
    c && a.Mb(b)
};
V.prototype.Mb = function(a, b) {
    var c = ad(this, a && a.document);
    if (c) {
        Vc(this, a, !0);
        var d = Math.floor((this.a.left + this.a.right) / 2), e = Math.floor((this.a.top + this.a.bottom) / 2), f = Fb(document), c = Boolean(c(d - f.x, e - f.y)), d = b || 0;
        c ? (this.ta += this.na ? d : 0, this.na=!0) : (this.ta = 0, this.na=!1);
        1E3 <= this.ta && (a.clearInterval(this.D), this.D = null, this.V=!1, this.v = "v");
        Vc(this, a, !1)
    } else 
        a.clearInterval(this.D), this.D = null, this.V=!1, this.v = "i"
};
V.prototype.Ib = function(a, b) {
    if (this.vb) {
        var c = this.vb.contentWindow, d = this.a.right - this.a.left, e = this.a.bottom - this.a.top, f = this.Sb, g = Kc(), h = new P(Math.round(c.mozInnerScreenY), Math.round(c.mozInnerScreenX + d), Math.round(c.mozInnerScreenY + e), Math.round(c.mozInnerScreenX)), c = new P(c.screenY + f, c.screenX + g.width, c.screenY + g.height, c.screenX), h = new P(Math.max(h.top, c.top), Math.min(h.right, c.right), Math.min(h.bottom, c.bottom), Math.max(h.left, c.left)), e = d * e, d = 0;
        0 < e && h.top < h.bottom && h.left < h.right && (d = (h.bottom -
        h.top) * (h.right - h.left) / e);
        e = b || 0;
        .5 <= d ? (this.sa += this.la ? e : 0, this.la=!0) : (this.sa = 0, this.la=!1);
        1E3 <= this.sa && (a.clearInterval(this.Q), this.Q = null, this.Ja=!1, this.I = "v")
    }
};
var md = function(a) {
    return a.Qa || a.ia || a.V || a.Ma || a.Ja
}, nd = function(a) {
    return a ? a.top + "-" + a.left + "-" + a.bottom + "-" + a.right : "0-0-0-0"
}, pd = function(a, b, c, d) {
    var e = hd(a);
    if (0 == a.qa)
        a.u.Fa++;
    else if (1 != a.qa || e&&!a.ob) {
        a.u.Ga++;
        var f = a.getStats();
        f.unshift("adk=" + a.p);
        d && f.push("r=" + d);
        b = f.concat(b).join("&");
        d = {};
        Fc(Wc(a), d);
        d[0] = c;
        d[3] = b;
        d[5] = e;
        d[15] = md(a);
        d[11] = a.nb || a.lb;
        d[7] = a.k;
        d[9] = nd(a.M);
        d[13] = a.H.join(",");
        d[14] = a.Na;
        od(a, d, a.Oa);
        a.ob = e
    } else 
        a.u.Ha++
}, od = function(a, b, c) {
    try {
        var d = Gc(b);
        qd(a, d,
        c)
    } catch (e) {}
}, qd = function(a, b, c) {
    if (b && a.element) {
        var d = c ? c.length: 0;
        if (0 < d)
            for (var e = 0; e < d; ++e)
                a = c[e], (a == x.top || a.parent && a.parent != a) && Oc(b, a);
        else {
            c = [];
            try {
                var f = Kb(a.element);
                if (f)
                    c = [f];
                else {
                    var g;
                    var h, d = document, l = a.element || d;
                    g = l.querySelectorAll && l.querySelector ? l.querySelectorAll("IFRAME") : h = l.getElementsByTagName("IFRAME");
                    for (e = 0; e < g.length; ++e)(f = Kb(g[e])
                        ) && c.push(f)
                    }
                var s = c.length;
                if (0 < s)
                    for (var u = ja(Oc, b), e = 0; e < s; ++e)
                        Pc(u, c[e])
                    } catch (r) {}
        }
    }
};
V.prototype.$b = function() {
    this.ma = U()
};
V.prototype.zb = function() {
    this.aa += U() - this.ma;
    this.ma =- 1
};
var Vc = function(a, b, c) {
    b = c ? b : b.top;
    try {
        var d = Uc.clone(), e = new F(0, 0);
        if (a.G) {
            var d = a.G.getBoundingClientRect(), f = a.G, g = new F(0, 0), h = Gb(O(f));
            do {
                var l;
                if (h == b)
                    l = Qb(f);
                else {
                    var s = f, u = void 0;
                    if (s.getBoundingClientRect)
                        var r = Ob(s), u = new F(r.left, r.top);
                    else 
                        var D = Lb(Cb(s)), ma = Qb(s), u = new F(ma.x - D.x, ma.y - D.y);
                    c = void 0;
                    if (K&&!N(12)) {
                        var ga = void 0;
                        var Ra, ha;
                        t:
                        {
                            var ua = s, L = Ha();
                            if (void 0 === ua.style[L]) {
                                var W = (M ? "Webkit" : K ? "Moz" : J ? "ms" : rb ? "O" : null) + Ia(L);
                                if (void 0 !== ua.style[W]) {
                                    ha = (M ? "-webkit" : K ? "-moz" : J ?
                                    "-ms" : rb ? "-o" : null) + "-transform";
                                    break t
                                }
                            }
                            ha = "transform"
                        }
                        if (Ra = Nb(s, ha) || Nb(s, "transform"))
                            var ia = Ra.match(Sb), ga = ia ? new F(parseFloat(ia[1]), parseFloat(ia[2])): new F(0, 0);
                        else 
                            ga = new F(0, 0);
                        c = new F(u.x + ga.x, u.y + ga.y)
                    } else 
                        c = u;
                    l = c
                }
                c = l;
                g.x += c.x;
                g.y += c.y
            }
            while (h && h != b && (f = h.frameElement) && (h = h.parent));
            e = g
        }
        var m = d.right - d.left, ve = d.bottom - d.top, Lc = e.x + a.Y.left, Mc = e.y + a.Y.top, we = a.Y.right || m, xe = a.Y.bottom || ve;
        a.a = new P(Math.round(Mc), Math.round(Lc + we), Math.round(Mc + xe), Math.round(Lc))
    } catch (Se) {
        a.a = a.Y
    } finally {
        a.m.Po =
        5, a.m.me = 1, a.m.om = 4
    }
    a.F = (a.a.bottom - a.a.top) * (a.a.right - a.a.left);
    a.lb = 2 != a.b && 3 != a.b && 6 != a.b || 0 != a.F?!1 : !0
}, hd = function(a) {
    return 1E3 <= Math.max(a.A[2], a.H[2])
};
V.prototype.getStats = function() {
    var a = this.a, a = ["p=" + a.top + "," + a.left + "," + a.bottom + "," + a.right];
    a.push("tos=" + this.Z.join(","));
    a.push("mtos=" + this.H.join(","));
    a.push("rs=" + this.b);
    var b = 5 == this.b || 6 == this.b;
    b || a.push("ht=" + this.aa);
    0 <= this.N && (a.push("tfs=" + this.N), a.push("tls=" + this.Ba));
    this.s && a.push("avi=" + this.s);
    this.v && a.push("iemv=" + this.v);
    this.T && (a.push("mppv=" + this.T), a.push("mppz=" + (this.gb ? "1" : "0")));
    this.I && a.push("xdev=" + this.I);
    this.c && (a.push("ncl=1"), this.c.Va && a.push("nclt=" +
    this.c.Va), this.c.Wa && a.push("nctt=" + this.c.Wa));
    this.ca && a.push("nclv=" + this.ca);
    this.da && a.push("ncldbg=" + this.da);
    this.f ? a.push("swf=" + this.f.h) : this.$ && a.push("swf=-");
    this.w && a.push("swfv=" + (this.d ? this.d.h : "") + this.w);
    this.Ka && a.push("fp=" + y(this.Ka));
    7 == this.b && a.push("qid=" + this.hb);
    this.U && a.push("afp=" + y(this.U));
    b && (this.ea && a.push("ord=" + y(this.ea)), this.ba && a.push("amd=" + y(this.ba + ";")), this.fb && a.push("anid=1"), this.ga && a.push("xbid=" + y(this.ga)), this.La && 0 != this.La.length && a.push("qt=" +
    this.La.join(",")), this.ka && a.push("req=" + y(this.ka).substring(0, 100)));
    null !== this.fa && a.push("tp=" + this.fa);
    0 != this.Ea && a.push("ipc=" + this.Ea);
    this.Ob && a.push("eop=1");
    this.Aa && a.push("ci=1");
    this.Da && a.push("gte=" + this.Da);
    - 1 < this.P && (a.push("tmo=" + this.P), a.push("tme=" + this.B));
    - 1 < this.ja && a.push("tdl=" + this.ja);
    (b = this.u.Fa || this.u.Ha || this.u.Ga ? [this.u.Fa, this.u.Ha, this.u.Ga].join("-") : void 0) && a.push("abd=" + b);
    return a
};
var jd = function(a) {
    if ("as" == a.yb && q(a.element.sdkVolume))
        try {
            return Number(a.element.sdkVolume())
    } catch (b) {
        return - 1
    }
    if ("h" == a.yb) {
        i:
        {
            a = ["ima", "common", "sdkVolume"];
            for (var c = k, d; d = a.shift();)
                if (null != c[d])
                    c = c[d];
                else {
                    a = null;
                    break i
                }
            a = c
        }
        if (q(a))
            try {
                return Number(a())
            } catch (e) {
            return - 1
        }
    }
};
var rd = function() {
    return I("iPad") || I("Android")&&!I("Mobile") || I("Silk")
};
var sd=!1, td = null, ud = null, Xc = null, vd = null, wd = 0, xd=!1, yd = 0, zd = null, Ed = function(a, b, c, d) {
    if (x.top.postMessage)
        if (1 != a.length)
            b();
        else if (vd = a[0].ra) {
            var e;
            try {
                e = x.top.frames.google_top_static_frame?!0 : !1
            } catch (f) {
                e=!1
            }
            if (e) {
                if (d)
                    wd = 2;
                else if (Ad(), 2 != wd) {
                    b();
                    return 
                }
                sd=!0;
                zd = c;
                S(x, "message", Bd, "osd::periscope::message");
                Cd()
            } else 
                Dd() ? b() : x.setTimeout(B("osd::periscope::mpmtgt_to", function() {
                    Ed(a, b, c, d)
                }), 50)
        } else 
            b();
    else 
        b()
    }, Cd = function() {
    var a = {};
    yd = Math.floor(1E6 * Math.random());
    a[0] = "google_loc_request";
    a[1] = yd;
    var b = [], c;
    for (c in a)
        b.push(c + "=" + a[c]);
    x.top.postMessage(b.join("\n"), "*")
}, Bd = function(a) {
    var b = a.data.split("\n");
    a = {};
    for (var c = 0; c < b.length; c++) {
        var d = b[c].indexOf("=");
        - 1 != d && (a[b[c].substr(0, d)] = b[c].substr(d + 1))
    }
    if (a && 1 in a && a[1] == yd) {
        b = parseInt(a[10], 10);
        c = parseInt(a[11], 10);
        b = 0 < b && 0 < c ? new G(b, c) : new G( - 12245933, - 12245933);
        - 12245933 != b.width&&-12245933 != b.height && (ud = b);
        b = parseInt(a[12], 10);
        c = parseInt(a[13], 10);
        b = 0 <= b && 0 <= c ? new F(b, c) : new F( - 12245933, - 12245933);
        - 12245933 != b.x &&
        - 12245933 != b.y && (td = b);
        b = vd;
        if (null != b && 0 < b.width && 0 < b.height) {
            var c = parseInt(a[6], 10), d = parseInt(a[7], 10), e = parseInt(a[8], 10);
            a = parseInt(a[9], 10);
            a = 0 < c && 0 < d && 0 < e && 0 < a && 10 >= Math.abs(e - b.width) + Math.abs(a - b.height) ? new F(c, d) : new F( - 12245933, - 12245933);
            - 12245933 != a.x&&-12245933 != a.y && (Xc = a)
        }
        xd=!0;
        zd && (a = zd, zd = null, a());
        x.setTimeout(B("osd::periscope::pmtgt_to", Cd), Sc())
    }
}, Dd = function() {
    var a = 0 <= T ? U() - T: - 1;
    return - 1 != a && 500 < a
}, Ad = function() {
    var a = Ua([2], na);
    wd = a ? a : 1
}, Fd = function() {
    var a = null != ud && null !=
    td && null != Xc && null != vd;
    return xd && a
};
var Gd = null, Hd = null, Id = null, Jd=!1, Kd = void 0, Nd = function(a, b) {
    if (!Jd) {
        Jd=!0;
        Gd = Gd || S(a, "scroll", Ld, "osd_or_lidar::scroll");
        Hd = Hd || S(a, "resize", Md, "osd_or_lidar::resize");
        if (b)
            for (var c, d = 0; d < X.length; ++d)
                c = X[d], c.element && (c.rb.Rb = S(c.element, "mouseover", t(c.$b, c), "osd_or_lidar::adblock::mouseover"), c.rb.Qb = S(c.element, "mouseout", t(c.zb, c), "osd_or_lidar::adblock::mouseout"));
        var d = Y, e;
        w.mozVisibilityState ? e = "mozvisibilitychange" : w.webkitVisibilityState ? e = "webkitvisibilitychange" : w.visibilityState &&
        (e = "visibilitychange");
        e && (Id = Id || S(w, e, d, "osd_or_lidar::visibility"));
        Y()
    }
}, Md = function() {
    Od(!1);
    Ld()
}, Ld = function() {
    Pd(X, !1)
}, Xd = function() {
    Ic && (Z = Hc(!0, x, Ic));
    var a = Z, b = Qd, c = Rd;
    if (Sd) {
        a = b;
        Od(!1);
        var d = Td, b = d.height - a;
        0 >= b && (b = d.height, a = 0);
        Z = new G(d.width, b);
        b = new Ud;
        b.Fb=!0;
        b.eb = Z;
        b.Db = d;
        b.Cb = a;
        return b
    }
    if (c)
        return a = new Ud, a.Eb=!0, a;
    if (sd)
        return a = new Ud, a.Ya=!1, d = ud, a.eb = d, null != d&&-12245933 != d.height&&-12245933 != d.width && (Z = d, b = td, null != b&&-12245933 != b.x&&-12245933 != b.y && (d = Jc(!1, d, b), a.va =
        d, a.Ya=!0)), a;
    if (Vd)
        return a = new Ud, a.Gb=!0, a;
    if (Wd)
        return a = new Ud, a.Xb=!0, a;
    i: {
        b = new Ud;
        b.eb = a;
        b.Xa=!1;
        if (null != a&&-1 != a.width&&-1 != a.height&&-12245933 != a.width&&-12245933 != a.height) {
            try {
                d = Jc(!0, a)
            } catch (e) {
                a = b;
                break i
            }
            b.va = d;
            b.Xa=!0
        }
        a = b
    }
    return a
}, Pd = function(a, b) {
    if (!Yd)
        if (window.clearTimeout(Zd), Zd = null, 0 == a.length)
            b || $d();
        else {
            ae = null;
            var c = Xd();
            try {
                var d = U();
                if (c.Fb)
                    for (var e = 0; e < a.length; e++)
                        $c(a[e], d, c.Db, c.Cb, b);
                else if (c.Eb)
                    for (e = 0; e < a.length; e++)
                        bd(a[e], d, b);
                else if (c.Ya) {
                    var f = Fd();
                    xd =
                    !1;
                    for (e = 0; e < a.length; e++)
                        Zc(a[e], c.va, d, b ||!f)
                    } else if (Wd)
                        E(a, function(a) {
                            b ? a.c && a.c.pause() : a.c && a.c.update()
                        });
                    else if (c.Gb)
                        E(a, function(a) {
                            if (b) {
                                if (a.f) {
                                    var c = a.f;
                                    3 <= c.K && (c.K = 3);
                                    a.ha =- 1
                                }
                            } else if (a.f && "d" != a.f.h) {
                                var c = vc(a.f), d = [ - 1, - 1, - 1, - 1, - 1, 4, 2, 0], e = d[c.ua + 1];
                                gd(a, e, c.Ab, d[c.Bb + 1], !0, !1);
                                a.ha = e;
                                a.Ca(a, Uc);
                                7 == a.b ? 2E3 <= Math.max(a.A[2], a.H[2]) && kd(a) : hd(a)&&!a.J && kd(a);
                                if (2 == c.ua || xc(a.f) || yc(a.f))
                                    a.ib(a), a.J=!1, kd(a)
                            }
                        });
                        else if (c.Xa)
                            for (e = 0; e < a.length; e++)
                                a[e].update(d, c.va, b, x, be);
                                ce += U() -
                                d;
                                ++de;
                                ee()
                            } finally {
                                b ? E(a, function(a) {
                                    a.k = 0;
                                    a.M = new P(0, 0, 0, 0)
                                }) : $d()
                            }
    }
}, Y = function() {
    var a = fe();
    if (a) {
        if (!Qc) {
            var b = U();
            Rc = b;
            E(X, function(a) {
                var d = a.xb;
                Qc || a.qb||-1 == a.Ta || (d += b - a.Ta);
                a.xb = d
            })
        }
        Qc=!0;
        Od(!0)
    } else 
        b = U(), ge = he(b), Qc=!1, E(X, function(a) {
            0 <= a.l && (a.Ta = b)
        });
    Pd(X, !a)
}, fe = function() {
    if (ie())
        return !0;
    var a;
    a = x.document;
    a = {
        visible: 1,
        hidden: 2,
        prerender: 3,
        preview: 4
    }
    [a.webkitVisibilityState || a.mozVisibilityState || a.visibilityState || ""] || 0;
    return 1 == a || 0 == a
}, $d = function() {
    x && (Zd = x.setTimeout(B("osd_or_lidar::psamp_to",
    function() {
        Pd(X, !1)
    }), Sc(Kd)))
}, X = [], Yd=!1, Z = null, Td = null, je = null, Zd = null, be=!Ka(x.top), ke = "", ae = null, Qd = 0, Sd=!1, Rd=!1, Vd=!1, Wd=!1, Ic = rd() ||!rd() && (I("iPod") || I("iPhone") || I("Android") || I("IEMobile")), ge = 0, le = 0, me = 0, ce = 0, de = 0, ne =- 1, Od = function(a) {
    Z = Hc(!0, x, Ic);
    if (!a) {
        Td = Kc();
        a = x;
        a.top != a && (a = a.top);
        var b = 0, c = 0, d = Z;
        try {
            var e = a.document, f = e.body, g = e.documentElement;
            if ("CSS1Compat" == e.compatMode && g.scrollHeight)
                b = g.scrollHeight != d.height ? g.scrollHeight : g.offsetHeight, c = g.scrollWidth != d.width ? g.scrollWidth :
                g.offsetWidth;
            else {
                var h = g.scrollHeight, l = g.scrollWidth, s = g.offsetHeight, u = g.offsetWidth;
                g.clientHeight != s && (h = f.scrollHeight, l = f.scrollWidth, s = f.offsetHeight, u = f.offsetWidth);
                h > d.height ? h > s ? (b = h, c = l) : (b = s, c = u) : h < s ? (b = h, c = l) : (b = s, c = u)
            }
            je = new G(c, b)
        } catch (r) {
            je = new G( - 12245933, - 12245933)
        }
    }
}, oe = function(a, b) {
    if (ae&&!b)
        return ib(ae);
    var c = a.document, d = 0 <= T ? U() - T: - 1, e = U();
    - 1 == ne && (d = e);
    var f = [], g = X;
    try {
        if (0 < g.length ? ((c = Z) && f.push("bs=" + c.width + "," + c.height), (c = Td) && f.push("bos=" + c.width + "," + c.height),
        (c = je) && f.push("ps=" + c.width + "," + c.height), a.screen && f.push("ss=" + a.screen.width + "," + a.screen.height)) : (f.push("url=" + y(a.location.href.substring(0, 1024))), c.referrer && f.push("referrer=" + y(c.referrer.substring(0, 512)))), f.push("tt=" + d), f.push("pt=" + T), Sd && f.push("xde=1"), Rd && f.push("iem=1"), wd && f.push("pei=" + wd), f.push("deb=" + y([1, le, me, ce, de, ne].join("-"))), f.push("tvt=" + he(e)), a.top != a) {
            0 < g.length && f.push("iframe_loc=" + y(a.location.href.substring(0, 512)));
            var h = Hc(!1, a, Ic);
            f.push("is=" + h.width +
            "," + h.height)
        }
    } catch (l) {
        f.push("error")
    }
    ae = f;
    return ib(ae)
}, pe = function(a) {
    var b;
    var c = a.indexOf("Firefox/");
    b =- 1;
    if (0 <= c) {
        b = Math.floor(a.substr(c + 8))||-1;
        var d = a.indexOf("Mac OS X 10."), c =- 1;
        0 <= d && (c = Number(a.substr(d + 12, 1))||-1);
        var e = 0 < c?-1 : a.indexOf("Windows NT "), d =- 1;
        0 <= e && (d = {
            "6.0": 0,
            "6.1": 1,
            "6.2": 2
        }
        [a.substr(e + 11, 3)]||-1);
        a = 148;
        5 <= c ? a = 4 <= b ? 108 : 3 <= b ? 127 : 108 : 0 <= d && (16 == b || 17 == b || 18 == b) && (a = [[146, 146, 146], [148, 147, 148], [131, 130, 136]][d][b - 16]);
        b = a
    } else 
        b = null;
    null !== b && (Qd = b, Sd=!0)
}, qe = function(a) {
    var b =
    Ib("iframe", {
        id: "google_osd_static_frame_" + Math.floor(1E13 * Math.random()),
        name: "google_osd_static_frame"
    });
    b.style.display = "none";
    b.style.width = "0px";
    b.style.height = "0px";
    a.document.body.appendChild(b)
}, re = function(a, b) {
    var c = b.match(a);
    return c ? c.join("") : ""
}, se = function(a) {
    var b=!1;
    E(X, function(c, d) {
        if (Math.random() < pa) {
            var e;
            var f = String(d);
            Boolean(Boolean(c.G&&!!f&&!hc)&&!hc) ? (e = new jc, (f = oc(e, c.G, f)) ? (c.ib = a, c.f = e) : c.$=!0, e = f) : (c.$=!0, e=!1);
            b = b || e
        }
    });
    (Vd = b) && E(X, function(b) {
        Boolean(b.f) || a(b)
    });
    return b
}, ee = function() {
    if ("osd" == ke)
        for (var a = X, b = 0; b < a.length; b++) {
            var c = oe(x);
            pd(a[b], c, "goog_update_data", "u")
        }
}, he = function(a) {
    var b = ge;
    Qc && (b += a - Rc);
    return b
}, ie = function() {
    return hb(X, function(a) {
        return a.wb
    })
}, Ud = function() {
    this.Db = this.eb = null;
    this.Cb = 0;
    this.va = null;
    this.Xa = this.Xb = this.Gb = this.Ya = this.Eb = this.Fb=!1
};
var $, te = 0, ue = null, ye = "", ze=!1, Ae = null, De = function() {
    if (!(0 < T)) {
        try {
            if (!Be())
                return;
            Od(!1);
            Ce(!1)
        } catch (a) {}
        ue = window.setTimeout(B("osd::nppls_to", De), 250)
    }
}, Ce = function(a) {
    Ee || (S(x, "message", Fe, "osd::message"), ze && S(z(), "message", Fe, "osd::message"), Ee=!0);
    $.getNewBlocks(function(b, c, d, e, f, r, D, ma, ga, Ra) {
        if (window && Date) {
            var ha =- 1, ua=!1;
            if (null == Ae) {
                var L = Ua([1, 2, 3], .03);
                Ae = L ? L : 0
            }
            var L = Ae, W = 3 == d, ia = W && 2 == L, W = W && 3 == L;
            (e || a)&&!W || ia ? ha = U() : e || (ua=!0);
            var m = new V(window, c, b, ha, d, be);
            m.Ca = Ge;
            m.U = re(Ub,
            c);
            m.p = He(c);
            m.mb = fb(c);
            m.Ea = te;
            Ie(m);
            f && (m.s = f, Je=!0);
            m.pa = D;
            m.kb = ma;
            m.O = ga;
            Ra && (m.Aa=!0);
            r && r.width && r.height ? (r = new G(r.width, r.height), 0 < r.width && 0 < r.height && (m.ra = r)) : m.ra = r || null;
            3 == m.b && (m.P = U(), L && (m.Da = L));
            X.push(m);
            ++me;
            ua && b.contentWindow ? Nc(b, function() {
                var a = U();
                m.l = a;
                3 == m.b&&-1 == m.B && (m.B = a);
                Ke(m);
                Y()
            }) : W || (Ke(m), m.B = m.P);
            !a && ia && Y()
        }
    }, a);
    if (a)
        for (var b = U(), c = X.length, d = 0; d < c; ++d) {
            var e = X[d], f = 3 == e.b && 3 == Ae;
            0 >= e.l&&!f && (e.l = b);
            3 == e.b && ( - 1 == e.P && (e.P = b), f||-1 != e.B || (e.B = b))
        }
}, Oe = function() {
    try {
        var a =
        z();
        T = U();
        Mb(a);
        window.clearTimeout(ue);
        ue = null;
        Od(!1);
        Be() ? (le = $.numBlocks(), Ce(!0), 0 == me ? Le("n") : be ? Me(a) : (K && p(a.screenX) && p(a.mozInnerScreenX) && p(a.outerWidth) || E(X, function(b, d) {
            var e = Math.random();
            if (0 > (e -= qa)) {
                var e = String(d), f = new jc;
                Boolean(b.G&&!!e&&!hc) && oc(f, b.G, e) ? (b.w = "u", b.d = f, b.Qa=!0, dd(b, a)) : b.w = "-"
            } else 
                0 > e - sa && J && N(8) && (b.V=!0, ed(b, a), b.v = "u")
        }), Ne())) : Le("c")
    } catch (b) {
        throw X = [], Le("x"), b;
    }
}, Me = function(a, b) {
    var c = b || 0, d = 0 != te;
    if (1 > c && K && p(a.screenX) && p(a.mozInnerScreenX) && p(a.outerWidth) &&
    1 > Math.random())
        pe(a.navigator.userAgent), Ne();
    else if (2 > c && J && N(8) && Math.random() < ra)
        Rd=!0, Ne();
    else if (3 > c&&!d)
        Ed(X, ja(Me, a, 3), function() {
            Ne();
            Y()
        }, $.shouldForcePeriscope());
    else {
        d = function(b) {
            b.nb=!0;
            pd(b, oe(a), "goog_update_data", "i");
            b.O && Pe(b, "i", !0)
        };
        if (!(4 > c && se(d)))
            for (c = 0; c < X.length; c++)
                d(X[c]);
        Ne()
    }
}, Ne = function() {
    if ( - 1 == ne) {
        var a = z(), b = 2 == $.getOseId();
        Nd(a, b);
        window.setTimeout(B("osd::hd_to", function() {
            Le("t")
        }), 36E5);
        Math.random() < ka && (Math.random() < la ? (qe(z()), ze=!0) : qe(x));
        ne = U() - T
    }
},
Le = function(a) {
    window.clearTimeout(Zd);
    Zd = null;
    $ || ($ = Goog_AdSense_getAdAdapterInstance());
    if (!Yd) {
        var b = $.getOseId();
        if (2 == b || Je) {
            - 1 == ne && (X = []);
            var c = z(), d = ["//pagead2.googlesyndication.com/pagead/gen_204?id=osd"], e = X;
            if (0 < e.length) {
                Pd(e, !0);
                for (var f = 0; f < e.length; f++)
                    if (0 < e[f].p) {
                        0 < e[f].ma && e[f].zb();
                        var g = e[f], h = g.a, h = ["p:", h.top, h.left, h.bottom, h.right];
                        h.push("tos:", g.Z.join(","));
                        h.push("mtos:", g.H.join(","));
                        h.push("rs:", g.b);
                        var l = 5 === g.b || 6 === g.b;
                        l || (h.push("zoom:", g.zoom.join(",")), h.push("ht:",
                        g.aa));
                        0 <= g.N && h.push("tfs:", g.N, "tls:", g.Ba);
                        h.push("vt:", g.Ia);
                        g.U && h.push("fp:", g.U);
                        7 === g.b && h.push("qid:", g.hb);
                        g.s && h.push("avi:", g.s);
                        g.v && h.push("iemv:", g.v);
                        g.T && (h.push("mppv:", g.T), h.push("mppz:", g.gb ? "1" : "0"));
                        g.I && h.push("xdev:", g.I);
                        g.c && (h.push("ncl:", "1"), g.c.Va && h.push("nclt:", g.c.Va), g.c.Wa && h.push("nctt:", g.c.Wa));
                        g.ca && h.push("nclv:", g.ca);
                        g.da && h.push("ncldbg:", g.da);
                        g.f ? h.push("swf:", g.f.h) : g.$ && h.push("swf:", "-");
                        g.w && h.push("swfv:", (g.d ? g.d.h : "") + g.w);
                        l && (g.ea && h.push("ord:",
                        g.ea), g.ba && h.push("amd:", g.ba, ";"), g.fb && h.push("anid:", "1"), g.ga && h.push("xbid:", g.ga));
                        null !== g.fa && h.push("tp:" + g.fa);
                        null != g.jb && h.push("vl:" + g.jb);
                        g.Aa && h.push("ci:", "1");
                        d.splice(1, 0, "adk" + e[f].p + "=" + y(h.join(",")))
                    }
            }
            d.push("r=" + a);
            f = oe(c, !1);
            d.push(f.join("&"));
            0 == e.length && (d.push("correlator=" + $.getCorrelator()), d.push("oid=" + b));
            2 == b && (b = d.join("&"), ye && (b += "&fp=" + y(ye)), Na(c, b));
            c = X;
            for (b = 0; b < c.length; b++)
                d = c[b], Pe(d, a), d.s && d.p && d.O && Pe(d, a, !0)
            }
        Yd=!0
    }
}, Je=!1, Ee=!1, Be = function() {
    var a =
    z().document;
    if (!a.body ||!a.body.getBoundingClientRect || "function" != typeof Goog_AdSense_getAdAdapterInstance)
        return !1;
    $ = Goog_AdSense_getAdAdapterInstance();
    return !0
}, Ge = function(a, b) {
    if (a) {
        var c = hd(a);
        if ((c || a.ub)&&!a.tb) {
            var d = c ? "1": "0";
            a.ub=!1;
            var e = $.getCorrelator(), f = a.a, g = je;
            qd(a, ["{vi:", d, ",cl:", e, ",adk:", a.p, ",rs:", a.b, ",pl:", f.left, ",pr:", f.right, ",pt:", f.top, ",pb:", f.bottom, ",vl:", b.left, ",vr:", b.right, ",vt:", b.top, ",vb:", b.bottom, ",dw:", g && g.width || 0, ",dh:", g && g.height || 0, "}"].join(""));
            c && (a.tb=!0);
            if (d = c)
                d = null != a.pa && null != a.pa.match(/\/pagead\/adview\?.*ai=.*&vt=\d+/i)&&!a.sb;
            d && (d = a.pa, w.body ? (Oa || (e = w.createElement("iframe"), e.style.display = "none", e.id = "anonIframe", Oa = e, w.body.appendChild(e)), e=!0) : e=!1, e && Na(Oa.contentWindow, d), a.sb=!0)
        }
        c && a.O&&!md(a) && Pe(a, "v", !0);
        2 == te && c&&!md(a) && Pe(a, "v")
    }
}, He = function(a) {
    return (a = a.match(/[&\?](?:adk)=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
}, Fe = function(a) {
    if (a.data) {
        var b;
        var c = a.data;
        if (n(c)) {
            for (var d = {}, c = c.split("\n"), e = 0; e <
            c.length; e++) {
                var f = c[e].indexOf("=");
                if (!(0 >= f)) {
                    b = Number(c[e].substr(0, f));
                    f = c[e].substr(f + 1);
                    switch (b) {
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
                        if (q(decodeURIComponent))
                            try {
                                f = decodeURIComponent(f)
                            } catch (g) {
                            throw Error("Error: URI malformed: " + f);
                        }
                        break;
                    case 17:
                        f = gb(decodeURIComponent(f).split(","), Number)
                    }
                    d[b] = f
                }
            }
            b = d[0] ? d : null
        } else 
            b = null;
        if (b && (c = b[0], "goog_provide_mode" == c || "goog_request_monitoring" == c || "goog_dom_content_loaded" ==
        c)) {
            i:
            {
                d = new Ec(b[4], b[12]);
                e = X;
                for (f = 0; f < e.length; ++f)
                    if (d.match(Wc(e[f]))) {
                        d = e[f];
                        break i
                    }
                d = null
            }
            if (d)
                if ("goog_dom_content_loaded" == c) - 1 == d.ja && (a = U(), d.ja = a, 3 == d.b && 3 == Ae&&-1 == d.l && (d.l = a, d.B = a, Y()));
            else {
                e = b[6];
                f = d.qa;
                d.qa = 2 == e || 2 == f ? 2 : 3 == e || 3 == f ? 3 : 1 == e || 1 == f ? 1 : 0;
                d.Oa.push(a.source);
                d.J = b[16]?!0 : !1;
                if (b[17])
                    for (a = b[17], b = 0; b < a.length; ++b)
                        switch (a[b]) {
                        case 947190538:
                            Kd = a[b]
                        }
                        "goog_request_monitoring" == c && (a = d, c = be, b = {}, Fc(Wc(a), b), b[0] = "goog_acknowledge_monitoring", b[7] = a.k, b[9] = nd(a.M), b[8] = c,
                        od(a, b, a.Oa));
                        e && 0 != e && (Je=!0);
                        - 1 == d.l && (a = U(), d.l = a, Y(), 3 == d.b && (d.B = a))
                    }
        }
    }
}, Ke = function(a) {
    var b;
    if (b = a)
        b = Wc(a), b=!!b.r||!!b.o;
    if (b) {
        b = be;
        var c = {};
        Fc(Wc(a), c);
        c[0] = "goog_get_mode";
        c[7] = a.k;
        c[9] = nd(a.M);
        c[8] = b;
        od(a, c)
    }
}, Ie = function(a) {
    if (!ye) {
        if (!a.ka)
            return;
        var b = re(Tb, a.ka);
        !b || "&" != b.charAt(0) && "?" != b.charAt(0) || (b = b.slice(1));
        ye = b
    }
    a.Ka = ye
}, Qe = function() {
    S(z(), "unload", function() {
        Le("u")
    }, "osd::unload")
}, Re = function() {
    $ || ($ = Goog_AdSense_getAdAdapterInstance());
    if ($ && 2 == $.getOseId()) {
        var a = Ua([1,
        2], oa);
        a && (te = a)
    }
}, Pe = function(a, b, c) {
    var d = c && (!a.s || a.O), e=!c && a.Sa && hd(a), f = e && a.J, g=!a.Sa && (!a.s || a.kb);
    if (a && a.p && (d || g || f)) {
        d = a.getStats();
        f = z();
        g = oe(f, !1);
        if (a.s) {
            var h;
            h = c ? "osdim" : e ? "osdtos" : "osd2";
            var l = "//pagead2.googlesyndication.com/activeview?id=" + h;
            "osd2" == h && a.J && hd(a) && (l += "&ts=1");
            Na(f, [l, "adk=" + a.p + "&" + d.join("&") + "&js=1", "r=" + b, g.join("&")].join("&"));
            c && (a.O=!1)
        } else 
            pd(a, g, "goog_image_request", b);
        c || e || (a.Sa=!0);
        if (e ||!c && a.J)
            a.J=!1
    }
};
aa("Goog_Osd_UnloadAdBlock", db("osd::unload_ex", function(a, b) {
    var c;
    if (a) {
        c = X;
        for (var d =- 1, e = 0; e < c.length; ++e)
            if (c[e].element == a) {
                d = e;
                break
            }
        c = 0 <= d ? X.splice(d, 1)[0] : null
    } else 
        c = null;
    d = z();
    c && (e = c, kd(e), ld(e, d), e.c && e.c.Za(), d.clearInterval(e.C), e.C = null, e.ia=!1, e.q && e.q.Za());
    if (c && c.element.contentWindow && 3 == c.b) {
        e = c.getStats();
        e.unshift("adk=" + c.p);
        e.push("r=u");
        var f = oe(d, !1);
        e.push(f.join("&"));
        if (b)
            Pe(c, "u");
        else 
            try {
                d.google_image_requests || (d.google_image_requests = []), c.element.contentWindow.osdsir(d,
                e.join("&"))
            } catch (g) {}
    }
}));
aa("Goog_Osd_UpdateElementToMeasure", db("osd::update_elem_ex", function(a, b) {
    if (a && b && da(a) && 1 == a.nodeType && da(b) && 1 == b.nodeType) {
        for (var c, d = X, e = 0; e < d.length; ++e)
            d[e].element == a && (c = d[e]);
        c && (d = z(), c.G = b, kd(c), ld(c, d), c.c && c.c.Za(), d.clearInterval(c.C), c.C = null, c.ia=!1, c.q && c.q.Za())
    }
}));
ab("osd::main", function() {
    Re();
    ke = "osd";
    Qe();
    Sa() ? Oe() : (De(), S(z(), "load", function() {
        window.setTimeout(B("osd::main::hi_to", Oe), 100)
    }, "osd::main::onload"))
});
})();

