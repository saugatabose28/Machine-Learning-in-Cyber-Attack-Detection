(function() {
    var h = this, aa = function(a) {
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
}, ba = function(a) {
    var b = aa(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}, p = function(a) {
    return "string" == typeof a
}, q = function(a) {
    return "number" == typeof a
}, r = function(a) {
    return "function" == aa(a)
}, da = function(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}, ea = function(a, b, c) {
    return a.call.apply(a.bind, arguments)
}, fa = function(a, b, c) {
    if (!a)
        throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments,
        2);
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
    return t.apply(null, arguments)
}, ga = function(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
    }
}, u = Date.now || function() {
    return + new Date
};
var ha;
var ia = String.prototype.trim ? function(a) {
    return a.trim()
}
: function(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}, qa = function(a) {
    if (!ja.test(a))
        return a;
    - 1 != a.indexOf("&") && (a = a.replace(ka, "&amp;"));
    - 1 != a.indexOf("<") && (a = a.replace(la, "&lt;"));
    - 1 != a.indexOf(">") && (a = a.replace(ma, "&gt;"));
    - 1 != a.indexOf('"') && (a = a.replace(na, "&quot;"));
    - 1 != a.indexOf("'") && (a = a.replace(oa, "&#39;"));
    - 1 != a.indexOf("\x00") && (a = a.replace(pa, "&#0;"));
    return a
}, ka = /&/g, la = /</g, ma = />/g, na = /"/g, oa = /'/g, pa = /\x00/g, ja = /[\x00&<>"']/,
ra = function(a) {
    return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
}, ta = function(a, b) {
    for (var c = 0, d = ia(String(a)).split("."), e = ia(String(b)).split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
        var k = d[g] || "", l = e[g] || "", m = RegExp("(\\d*)(\\D*)", "g"), n = RegExp("(\\d*)(\\D*)", "g");
        do {
            var w = m.exec(k) || ["", "", ""], x = n.exec(l) || ["", "", ""];
            if (0 == w[0].length && 0 == x[0].length)
                break;
            c = sa(0 == w[1].length ? 0 : parseInt(w[1], 10), 0 == x[1].length ? 0 : parseInt(x[1], 10)) || sa(0 == w[2].length,
            0 == x[2].length) || sa(w[2], x[2])
        }
        while (0 == c)
        }
    return c
}, sa = function(a, b) {
    return a < b?-1 : a > b ? 1 : 0
}, ua = function() {
    return "transform".replace(/\-([a-z])/g, function(a, b) {
        return b.toUpperCase()
    })
}, va = function(a) {
    var b = p(void 0) ? ra(void 0): "\\s";
    return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
        return b + e.toUpperCase()
    })
};
var wa = function(a) {
    wa[" "](a);
    return a
};
wa[" "] = function() {};
var xa = function(a) {
    try {
        var b;
        if (b=!!a && null != a.location.href)
            i: {
            try {
                wa(a.foo);
                b=!0;
                break i
            } catch (c) {}
            b=!1
        }
        return b
    } catch (d) {
        return !1
    }
}, ya = function(a, b) {
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
}, za = function(a, b, c) {
    a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
};
var Aa = function(a) {
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
}, v = function(a, b) {
    a.google_image_requests || (a.google_image_requests = []);
    var c = a.document.createElement("img");
    c.src = b;
    a.google_image_requests.push(c)
};
var y = document, z = window;
var Ba = null, Ca = function(a, b) {
    for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b.call(null, a[c], c, a)
}, Da = function(a) {
    return !!a && "function" == typeof a&&!!a.call
};
function A(a) {
    return "function" == typeof encodeURIComponent ? encodeURIComponent(a) : escape(a)
}
var Ea = function(a) {
    z.addEventListener ? z.addEventListener("load", a, !1) : z.attachEvent && z.attachEvent("onload", a)
};
var Fa = function(a) {
    return {
        visible: 1,
        hidden: 2,
        prerender: 3,
        preview: 4
    }
    [a.webkitVisibilityState || a.mozVisibilityState || a.visibilityState || ""] || 0
}, Ga = function() {
    var a;
    y.mozVisibilityState ? a = "mozvisibilitychange" : y.webkitVisibilityState ? a = "webkitvisibilitychange" : y.visibilityState && (a = "visibilitychange");
    return a
};
var Ha=!0, Ia = {}, La = function(a, b, c, d) {
    var e = Ja, f, g = Ha;
    try {
        f = b()
    } catch (k) {
        try {
            var l = Aa(k);
            b = "";
            k.fileName && (b = k.fileName);
            var m =- 1;
            k.lineNumber && (m = k.lineNumber);
            g = e(a, l, b, m, c)
        } catch (n) {
            try {
                var w = Aa(n);
                a = "";
                n.fileName && (a = n.fileName);
                c =- 1;
                n.lineNumber && (c = n.lineNumber);
                Ja("pAR", w, a, c, void 0, void 0)
            } catch (x) {
                Ka({
                    context: "mRE",
                    msg: x.toString() + "\n" + (x.stack || "")
                }, void 0)
            }
        }
        if (!g)
            throw k;
    } finally {
        if (d)
            try {
                d()
            } catch (ca) {}
    }
    return f
}, Ja = function(a, b, c, d, e, f) {
    var g = {};
    if (e)
        try {
            e(g)
    } catch (k) {}
    g.context = a;
    g.msg =
    b.substring(0, 512);
    c && (g.file = c);
    0 < d && (g.line = d.toString());
    g.url = y.URL.substring(0, 512);
    g.ref = y.referrer.substring(0, 512);
    Ma(g);
    Ka(g, f);
    return Ha
}, Ka = function(a, b) {
    try {
        if (Math.random() < (b || .01)) {
            var c = "/pagead/gen_204?id=jserror" + Na(a), d = "http" + ("http:" == z.location.protocol ? "" : "s") + "://pagead2.googlesyndication.com" + c, d = d.substring(0, 2E3);
            v(z, d)
        }
    } catch (e) {}
}, Ma = function(a) {
    var b = a || {};
    Ca(Ia, function(a, d) {
        b[d] = z[a]
    })
}, Oa = function(a, b, c, d, e) {
    return function() {
        var f = arguments;
        return La(a, function() {
            return b.apply(c,
            f)
        }, d, e)
    }
}, B = function(a, b) {
    return Oa(a, b, void 0, void 0, void 0)
}, Na = function(a) {
    var b = "";
    Ca(a, function(a, d) {
        if (0 === a || a)
            b += "&" + d + "=" + A(a)
    });
    return b
};
var C = Array.prototype, Pa = C.indexOf ? function(a, b, c) {
    return C.indexOf.call(a, b, c)
}
: function(a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (p(a))
        return p(b) && 1 == b.length ? a.indexOf(b, c) : - 1;
    for (; c < a.length; c++)
        if (c in a && a[c] === b)
            return c;
    return - 1
}, D = C.forEach ? function(a, b, c) {
    C.forEach.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++)
        f in e && b.call(c, e[f], f, a)
}, Qa = C.filter ? function(a, b, c) {
    return C.filter.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = [], f = 0, g = p(a) ?
    a.split("") : a, k = 0; k < d; k++)
        if (k in g) {
            var l = g[k];
            b.call(c, l, k, a) && (e[f++] = l)
        }
    return e
}, Ra = C.map ? function(a, b, c) {
    return C.map.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = Array(d), f = p(a) ? a.split("") : a, g = 0; g < d; g++)
        g in f && (e[g] = b.call(c, f[g], g, a));
    return e
}, Sa = C.some ? function(a, b, c) {
    return C.some.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && b.call(c, e[f], f, a))
            return !0;
    return !1
}, Ta = function(a) {
    var b = E;
    i: {
        for (var c = b.length, d = p(b) ? b.split("") : b, e = 0; e <
        c; e++)
            if (e in d && a.call(void 0, d[e], e, b)) {
                a = e;
                break i
            }
        a =- 1
    }
    return 0 > a ? null : p(b) ? b.charAt(a) : b[a]
}, Ua = function(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)
            c[d] = a[d];
        return c
    }
    return []
}, Ya = function(a, b, c, d) {
    C.splice.apply(a, Va(arguments, 1))
}, Va = function(a, b, c) {
    return 2 >= arguments.length ? C.slice.call(a, b) : C.slice.call(a, b, c)
}, Za = function(a) {
    for (var b = [], c = 0; c < a; c++)
        b[c] = 0;
    return b
}, $a = function(a) {
    for (var b = [], c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        if ("array" == aa(d))
            for (var e = 0; e <
            d.length; e += 8192)
                for (var f = $a.apply(null, Va(d, e, e + 8192)), g = 0; g < f.length; g++)
                    b.push(f[g]);
        else 
            b.push(d)
    }
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
    a instanceof F ? (this.x += a.x, this.y += a.y) : (this.x += a, q(b) && (this.y += b));
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
var ab = function(a, b) {
    for (var c in a)
        b.call(void 0, a[c], c, a)
}, bb = function(a) {
    var b = 0, c;
    for (c in a)
        b++;
    return b
}, cb = function(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = d;
    return b
}, db = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), eb = function(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)
            a[c] = d[c];
        for (var f = 0; f < db.length; f++)
            c = db[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};
var H;
i: {
    var fb = h.navigator;
    if (fb) {
        var gb = fb.userAgent;
        if (gb) {
            H = gb;
            break i
        }
    }
    H = ""
}
var I = function(a) {
    return - 1 != H.indexOf(a)
};
var hb = I("Opera") || I("OPR"), J = I("Trident") || I("MSIE"), K = I("Gecko")&&-1 == H.toLowerCase().indexOf("webkit")&&!(I("Trident") || I("MSIE")), L =- 1 != H.toLowerCase().indexOf("webkit"), ib = I("Macintosh"), jb = h.navigator || null, kb=!!jb&&-1 != (jb.appVersion || "").indexOf("X11"), lb = function() {
    var a = h.document;
    return a ? a.documentMode : void 0
}, mb = function() {
    var a = "", b;
    if (hb && h.opera)
        return a = h.opera.version, r(a) ? a() : a;
    K ? b = /rv\:([^\);]+)(\)|;)/ : J ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : L && (b = /WebKit\/(\S+)/);
    b && (a = (a = b.exec(H)) ?
    a[1] : "");
    return J && (b = lb(), b > parseFloat(a)) ? String(b) : a
}(), nb = {}, M = function(a) {
    return nb[a] || (nb[a] = 0 <= ta(mb, a))
}, ob = h.document, pb = ob && J ? lb() || ("CSS1Compat" == ob.compatMode ? parseInt(mb, 10) : 5) : void 0;
var qb=!J || J && 9 <= pb;
!K&&!J || J && J && 9 <= pb || K && M("1.9.1");
J && M("9");
var sb = function(a) {
    return a ? new rb(N(a)) : ha || (ha = new rb)
}, ub = function(a) {
    var b = document;
    return b.querySelectorAll && b.querySelector ? b.querySelectorAll("." + a) : tb("*", a, void 0)
}, tb = function(a, b, c) {
    var d = document;
    c = c || d;
    var e = a && "*" != a ? a.toUpperCase(): "";
    if (c.querySelectorAll && c.querySelector && (e || b))
        return c.querySelectorAll(e + (b ? "." + b : ""));
    if (b && c.getElementsByClassName) {
        a = c.getElementsByClassName(b);
        if (e) {
            c = {};
            for (var f = d = 0, g; g = a[f]; f++)
                e == g.nodeName && (c[d++] = g);
            c.length = d;
            return c
        }
        return a
    }
    a = c.getElementsByTagName(e ||
    "*");
    if (b) {
        c = {};
        for (f = d = 0; g = a[f]; f++) {
            var e = g.className, k;
            if (k = "function" == typeof e.split)
                k = 0 <= Pa(e.split(/\s+/), b);
            k && (c[d++] = g)
        }
        c.length = d;
        return c
    }
    return a
}, wb = function(a, b) {
    ab(b, function(b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in vb ? a.setAttribute(vb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
}, vb = {
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
}, xb = function(a) {
    var b = L || "CSS1Compat" != a.compatMode ? a.body || a.documentElement: a.documentElement;
    a = a.parentWindow || a.defaultView;
    return J && M("10") && a.pageYOffset != b.scrollTop ? new F(b.scrollLeft, b.scrollTop) : new F(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
}, yb = function(a) {
    return a ? a.parentWindow || a.defaultView : window
}, Ab = function(a, b, c) {
    var d = arguments, e = document, f = d[0], g = d[1];
    if (!qb && g && (g.name || g.type)) {
        f = ["<", f];
        g.name && f.push(' name="', qa(g.name), '"');
        if (g.type) {
            f.push(' type="', qa(g.type), '"');
            var k = {};
            eb(k, g);
            delete k.type;
            g = k
        }
        f.push(">");
        f = f.join("")
    }
    f = e.createElement(f);
    g && (p(g) ? f.className = g : "array" == aa(g) ? f.className = g.join(" ") : wb(f, g));
    2 < d.length && zb(e, f, d);
    return f
}, zb = function(a, b, c) {
    function d(c) {
        c && b.appendChild(p(c) ? a.createTextNode(c) : c)
    }
    for (var e = 2; e < c.length; e++) {
        var f = c[e];
        !ba(f) || da(f) && 0 < f.nodeType ? d(f) : D(Bb(f) ? Ua(f) : f, d)
    }
}, Cb = function(a) {
    a && a.parentNode &&
    a.parentNode.removeChild(a)
}, N = function(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}, Db = function(a) {
    return a.contentWindow || yb(a.contentDocument || a.contentWindow.document)
}, Bb = function(a) {
    if (a && "number" == typeof a.length) {
        if (da(a))
            return "function" == typeof a.item || "string" == typeof a.item;
        if (r(a))
            return "function" == typeof a.item
    }
    return !1
}, rb = function(a) {
    this.Ka = a || h.document || document
};
rb.prototype.createElement = function(a) {
    return this.Ka.createElement(a)
};
rb.prototype.createTextNode = function(a) {
    return this.Ka.createTextNode(String(a))
};
var Eb = function(a) {
    return xb(a.Ka)
};
rb.prototype.appendChild = function(a, b) {
    a.appendChild(b)
};
rb.prototype.contains = function(a, b) {
    if (a.contains && 1 == b.nodeType)
        return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
        return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;)
        b = b.parentNode;
    return b == a
};
var Fb = function() {
    return I("iPad") || I("Android")&&!I("Mobile") || I("Silk")
};
var O = function(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
};
O.prototype.clone = function() {
    return new O(this.top, this.right, this.bottom, this.left)
};
O.prototype.contains = function(a) {
    return this && a ? a instanceof O ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
O.prototype.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
O.prototype.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
O.prototype.translate = function(a, b) {
    a instanceof F ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, q(b) && (this.top += b, this.bottom += b));
    return this
};
var Gb = function(a, b) {
    var c;
    i: {
        c = N(a);
        if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
            c = c[b] || c.getPropertyValue(b) || "";
            break i
        }
        c = ""
    }
    return c || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}, Kb = function(a, b, c) {
    var d, e = K && (ib || kb) && M("1.9");
    b instanceof F ? (d = b.x, b = b.y) : (d = b, b = c);
    a.style.left = Hb(d, e);
    a.style.top = Hb(b, e)
}, Lb = function(a) {
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
    J && a.ownerDocument.body &&
    (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}, Mb = function(a) {
    if (J&&!(J && 8 <= pb))
        return a.offsetParent;
    var b = N(a), c = Gb(a, "position"), d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (c = Gb(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
            return a;
    return null
}, Nb = function(a) {
    var b,
    c = N(a), d = Gb(a, "position"), e = K && c.getBoxObjectFor&&!a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), f = new F(0, 0), g;
    b = c ? N(c) : document;
    (g=!J || J && 9 <= pb) || (g = "CSS1Compat" == sb(b).Ka.compatMode);
    g = g ? b.documentElement : b.body;
    if (a == g)
        return f;
    if (a.getBoundingClientRect)
        b = Lb(a), a = Eb(sb(c)), f.x = b.left + a.x, f.y = b.top + a.y;
    else if (c.getBoxObjectFor&&!e)
        b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(g), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
    else {
        b = a;
        do {
            f.x += b.offsetLeft;
            f.y += b.offsetTop;
            b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
            if (L && "fixed" == Gb(b, "position")) {
                f.x += c.body.scrollLeft;
                f.y += c.body.scrollTop;
                break
            }
            b = b.offsetParent
        }
        while (b && b != a);
        if (hb || L && "absolute" == d)
            f.y -= c.body.offsetTop;
        for (b = a; (b = Mb(b)) && b != c.body && b != g;)
            f.x -= b.scrollLeft, hb && "TR" == b.tagName || (f.y -= b.scrollTop)
    }
    return f
}, Hb = function(a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a
}, Ob = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
var Pb = function(a, b, c) {
    if ("array" == aa(b))
        for (var d = 0; d < b.length; d++)
            Pb(a, String(b[d]), c);
    else 
        null != b && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
}, Qb = function(a, b, c) {
    for (c = c || 0; c < b.length; c += 2)
        Pb(b[c], b[c + 1], a);
    return a
}, Rb = function(a, b) {
    var c = 2 == arguments.length ? Qb([a], arguments[1], 0): Qb([a], arguments, 1);
    if (c[1]) {
        var d = c[0], e = d.indexOf("#");
        0 <= e && (c.push(d.substr(e)), c[0] = d = d.substr(0, e));
        e = d.indexOf("?");
        0 > e ? c[1] = "?" : e == d.length - 1 && (c[1] = void 0)
    }
    return c.join("")
};
var Sb;
Sb=!1;
var P = H;
P && ( - 1 != P.indexOf("Firefox")||-1 != P.indexOf("Camino")||-1 != P.indexOf("iPad")||-1 != P.indexOf("iPhone")||-1 != P.indexOf("iPod")||-1 != P.indexOf("Chrome")||-1 != P.indexOf("Android")||-1 != P.indexOf("Safari") && (Sb=!0));
var Tb = Sb;
var Ub = function() {
    for (var a = z, b = a, c = 0; a != a.parent;)
        a = a.parent, c++, xa(a) && (b = a);
    return b
};
var Vb = ["GoogleActiveViewClass", "DfaVisibilityIdentifier"];
var Wb = function() {
    this.wc = this.wc;
    this.gd = this.gd
};
Wb.prototype.wc=!1;
J && M("9");
!L || M("528");
K && M("1.9b") || J && M("8") || hb && M("9.5") || L && M("528");
K&&!M("8") || J && M("9");
var Q = function(a, b, c) {
    Wb.call(this);
    this.dd = a;
    this.cd = b;
    this.bd = c;
    this.$c = t(this.ed, this)
};
(function() {
    function a() {}
    a.prototype = Wb.prototype;
    Q.ld = Wb.prototype;
    Q.prototype = new a;
    Q.kd = function(a, c, d) {
        for (var e = Array(arguments.length - 2), f = 2; f < arguments.length; f++)
            e[f - 2] = arguments[f];
        return Wb.prototype[c].apply(a, e)
    }
})();
Q.prototype.yb=!1;
Q.prototype.xb = 0;
Q.prototype.wb = null;
Q.prototype.pause = function() {
    this.xb++
};
Q.prototype.ed = function() {
    this.wb = null;
    this.yb&&!this.xb && (this.yb=!1, Xb(this))
};
var Xb = function(a) {
    var b;
    b = a.$c;
    var c = a.cd;
    if (!r(b))
        if (b && "function" == typeof b.handleEvent)
            b = t(b.handleEvent, b);
        else 
            throw Error("Invalid listener argument");
    b = 2147483647 < c?-1 : h.setTimeout(b, c || 0);
    a.wb = b;
    a.dd.call(a.bd)
};
var Yb=!1, R = "", Zb = function(a) {
    a = a.match(/[\d]+/g);
    if (!a)
        return "";
    a.length = 3;
    return a.join(".")
};
if (navigator.plugins && navigator.plugins.length) {
    var $b = navigator.plugins["Shockwave Flash"];
    $b && (Yb=!0, $b.description && (R = Zb($b.description)));
    navigator.plugins["Shockwave Flash 2.0"] && (Yb=!0, R = "2.0.0.11")
} else if (navigator.mimeTypes && navigator.mimeTypes.length) {
    var ac = navigator.mimeTypes["application/x-shockwave-flash"];
    (Yb = ac && ac.enabledPlugin) && (R = Zb(ac.enabledPlugin.description))
} else 
    try {
        var bc = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), Yb=!0, R = Zb(bc.GetVariable("$version"))
} catch (cc) {
    try {
        bc =
        new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), Yb=!0, R = "6.0.21"
    } catch (dc) {
        try {
            bc = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), Yb=!0, R = Zb(bc.GetVariable("$version"))
        } catch (ec) {}
    }
}
var fc = R;
if (y && y.URL)
    var gc = y.URL, Ha=!(gc && (0 < gc.indexOf("?google_debug") || 0 < gc.indexOf("&google_debug")));
var S = function(a, b, c, d, e) {
    c = Oa(d || "osd_or_lidar::" + b, c, void 0, void 0, void 0);
    a.addEventListener ? a.addEventListener(b, c, e ||!1) : a.attachEvent && a.attachEvent("on" + b, c);
    return c
};
var hc = function(a, b, c) {
    b = b || z;
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
    } catch (k) {
        return new G( - 12245933, - 12245933)
    }
}, ic = function() {
    return z.outerWidth ? new G(z.outerWidth, z.outerHeight) : new G( - 12245933, - 12245933)
}, jc = function(a, b) {
    try {
        b.postMessage(a, "*")
    } catch (c) {}
}, kc = function(a,
b) {
    if (b) {
        a(b);
        var c = b.frames;
        if (c) {
            var d = c.length, e;
            for (e = 0; e < d; ++e)
                kc(a, c[e])
            }
    }
}, oc = function() {
    var a = 0 <= lc ? T() - lc: - 1, b = mc ? T() - nc: - 1, c, d;
    c = [2E3, 4E3];
    d = [250, 500, 1E3];
    var e = a;
    - 1 != b && b < a && (e = b);
    for (var f, a = 0; a < c.length; ++a)
        if (e < c[a]) {
            f = d[a];
            break
        }
    void 0 === f && (f = d[c.length]);
    return f
}, pc = (new Date).getTime(), lc =- 1, mc=!1, nc =- 1, T = function() {
    return (new Date).getTime() - pc
}, qc = function() {
    var a = Ab("div");
    a.style.cssText = "position:relative;left:0px;top:0px;width:0;height:0;";
    return a
};
var sc = function(a) {
    this.Yc = a || 100;
    rc(this)
}, uc = function() {
    var a = H;
    return Boolean(/Firefox\//.exec(a)&&!/(Tablet|Mobile);/.exec(a) && q(z[tc()]))
}, rc = function(a) {
    a.pc = null;
    a.lc = null;
    a.nb = null;
    a.$=!1;
    a.Ia=!0;
    a.vb=!1;
    a.mc = null;
    a.nc = null
}, vc = {
    ai: 1,
    ou: 4,
    zP: 0
};
sc.prototype.K = function(a, b, c, d) {
    if (this.$ ||!a || "DIV" != a.tagName && "INS" != a.tagName)
        return !1;
    a.style.position = "relative";
    var e = Ab("iframe", {
        frameborder: "no",
        scrolling: "no",
        width: 1,
        height: 1
    });
    e.style.position = "absolute";
    e.style.opacity = "0.001";
    d && (e.style.zIndex =- 999999);
    Kb(e, b);
    a.appendChild(e);
    a = e.contentWindow;
    if (!a ||!a.document)
        return Cb(e), !1;
    b = a.document;
    b.open();
    b.close();
    b = b.documentElement;
    b.style.position = "absolute";
    Kb(b, 0, 0);
    d = 1;
    var f;
    d instanceof G ? (f = d.height, d = d.width) : f = 1;
    b.style.width =
    Hb(d, !0);
    b.style.height = Hb(f, !0);
    this.pc = e;
    this.lc = b;
    this.nb = a;
    this.$=!0;
    this.mc = c;
    return !0
};
vc.n = 5;
sc.prototype.ma = function() {
    if (this.$ && this.Ia) {
        var a, b, c = t(function() {
            var d, e, f = this.nb[tc()];
            void 0 !== b && (d = f > b, d !== a && (e = t(this.mc, this, d)), a = d);
            b = f;
            this.lc.style.opacity = this.vb ? .1 : .2;
            this.vb=!this.vb;
            this.nc = z.setTimeout(B("osd_or_lidar::ppsamp_to", c), this.Yc);
            e && e()
        }, this);
        this.Ia=!1;
        c()
    }
};
var wc = {
    t: 6,
    tC: 3,
    n: 2
}, xc = function(a) {
    a.$&&!a.Ia && (z.clearTimeout(a.nc), a.Ia=!0)
};
sc.prototype.Ca = function() {
    this.$ && (xc(this), Cb(this.pc), this.$=!1, rc(this))
};
var tc = function(a) {
    var b=!1, c;
    return function() {
        b || (c = a(), b=!0);
        return c
    }
}(function() {
    wc.mo =- 1;
    var a = [], b = function(b, d) {
        a[b + 1] = d
    };
    ab(vc, b);
    ab(wc, b);
    return a.join("")
}), U = function(a) {
    this.hb = a || 5E3;
    this.L = null;
    this.ib=!1;
    this.za = this.ya = null;
    this.lb = this.kb=!1;
    this.mb = null;
    this.gc = new Q(t(this.Kc, this), 100);
    this.oa=!1;
    this.M =- 1;
    this.ob = this.jb = this.Ba = 0;
    this.cc = function() {}
}, yc = function(a, b, c, d, e) {
    this.Lc = a;
    this.ec = b;
    this.na = c;
    this.Y = d;
    this.dc = e
};
U.prototype.K = function(a, b, c, d) {
    var e = h.navigator || null;
    if (!(e && e.mimeTypes && e.mimeTypes["application/x-pnacl"] && a) || "DIV" != a.tagName && "INS" != a.tagName)
        return !1;
    e = N(a).createElement("embed");
    e.setAttribute("width", c);
    e.setAttribute("height", b);
    e.setAttribute("src", "//www.gstatic.com/osd/hb.nmf?v=3");
    e.setAttribute("type", "application/x-pnacl");
    zc(e, "load", t(this.jc, this));
    zc(e, "message", t(this.Vc, this));
    zc(e, "loadstart", t(this.Uc, this));
    zc(e, "crash", t(this.Tc, this));
    e.style.visibility = "hidden";
    e.style.opacity =
    0;
    e.style.zIndex =- 999999;
    this.kb = this.ib = this.lb=!1;
    Kb(e, new F(0, 0));
    e.style.position = "absolute";
    b = qc();
    c=!0;
    try {
        b.appendChild(e), a.insertBefore(b, a.childNodes[0] || null)
    } catch (f) {
        c=!1
    }
    if (a = c)
        this.jb = u(), this.L = e, this.cc = d;
    return a
};
var zc = function(a, b, c) {
    S(a, b, c, "osd_or_lidar::pnacl::" + b, !0)
};
U.prototype.update = function() {
    var a = this.M;
    this.oa && (this.oa=!1, this.M = 0);
    Ac(this, a);
    if (this.L&&!this.lb && r(this.L.postMessage))
        try {
            this.L.postMessage("", "*")
    } catch (b) {}
};
U.prototype.pause = function() {
    this.oa=!0;
    Ac(this, this.M)
};
var Bc = function(a) {
    if (a.L)
        try {
            Cb(a.L)
    } catch (b) {}
    a.L = null;
    a.M =- 1
}, Ac = function(a, b) {
    if (isFinite(b)&&!isNaN(b) && (!(0 > b || 1 < b)||-1 == b)) {
        var c = u(), d = new yc(a.oa ? 0 : b, a.M, 0 < a.Ba ? c - a.Ba : 0, !a.ib && c - a.jb > a.hb, a.kb);
        a.M = b;
        a.Ba = c;
        a.cc(d)
    }
};
U.prototype.jc = function() {
    null == this.za && (this.za = this.ob ? u() - this.ob : 0);
    null == this.ya && (this.ya = u() - this.jb);
    this.ib=!0
};
U.prototype.Uc = function() {
    this.ob = u()
};
U.prototype.Tc = function() {
    this.kb=!0;
    Ac(this, - 1);
    Bc(this)
};
U.prototype.Vc = function(a) {
    this.mb = String(a.data);
    this.gc && (a = this.gc, a.wb || a.xb ? a.yb=!0 : Xb(a))
};
U.prototype.Kc = function() {
    this.lb=!0;
    this.jc();
    var a = this.mb / 100;
    this.mb = null;
    this.oa ? this.M = a : Ac(this, a)
};
var Cc = function(a, b) {
    this.Oc = a || 3E3;
    this.hb = b || 3E3;
    this.k = "u";
    this.qb = null;
    this.g = [];
    this.hc=!1;
    this.J =- 1;
    this.Fa = this.Ba = 0
}, Dc = function(a, b, c) {
    this.Aa = a;
    this.Xb = b;
    this.na = c
}, Hc = function(a, b, c) {
    if (!(b && b.getBoundingClientRect && 0 <= ta(fc, "11") && c) || J && 9 > mb || 0 < a.g.length)
        return !1;
    try {
        var d = b.getBoundingClientRect()
    } catch (e) {
        return !1
    }
    var f = "DIV" == b.tagName || "INS" == b.tagName, g = N(b), k = [];
    if (f) {
        var l = qc(), d = Ec(d);
        D(d, function(a, b) {
            var d = new Fc("e", g, c, String(b));
            this.g.push(d);
            k.push(t(d.Xc, d, l, a))
        }, a);
        b.insertBefore(l, b.childNodes[0] || null)
    } else 
        d = Gc(a, d), D(d, function(a, d) {
            var e = new Fc("e", g, c, String(d));
            this.g.push(e);
            k.push(t(e.Wc, e, b, a))
        }, a);
    var m=!0;
    D(k, function(a) {
        m = m && a()
    });
    m ? (a.k = "l", a.qb = b, a.hc=!f) : (D(a.g, function(a) {
        a.remove()
    }), a.g = []);
    return m
}, Ec = function(a) {
    return [new F(Math.floor((a.right - a.left) / 2), Math.floor((a.bottom - a.top) / 2))]
}, Gc = function(a, b) {
    var c;
    try {
        c = b || a.qb.getBoundingClientRect()
    } catch (d) {
        c = new O(0, 0, 0, 0)
    }
    var e = Ec(c);
    D(e, function(a) {
        a.x += c.left;
        a.y += c.top
    });
    return e
},
Jc = function(a) {
    if (a.qb && a.hc) {
        var b = Gc(a);
        D(b, function(a, b) {
            this.g[b] && Ic(this.g[b], a)
        }, a)
    }
}, Kc = function(a) {
    D(a.g, function(a) {
        a.remove()
    });
    a.g = [];
    a.k = "d"
}, Oc = function(a) {
    var b = (new Date).getTime(), c = a.rc ? b - a.rc: 0, d =- 1;
    4 == a.g.length ? (d = Ra(a.g, function(a) {
        return Lc(a, b)
    }), d = Mc(d)) : 1 == a.g.length && (d = [ - 1, 0, 1, 2, 3, 5][Lc(a.g[0], b) + 1]);
    a.Fa = d == a.J ? a.Fa + c : 0;
    c = new Dc(d, a.J, c);
    a.J = d;
    a.rc = b;
    Nc(a, d);
    Jc(a);
    return c
}, Mc = function(a) {
    var b = Za(bb(Pc));
    D(a, function(a) {
        0 <= a&&++b[a]
    });
    return 4 == b[4] ? 6 : 3 <= b[4] ? 5 : 0 < b[4] ?
    4 : 4 == b[2] ? 2 : 4 == b[1] ? 1 : 4 == b[0] ? 0 : 3
}, Nc = function(a, b) {
    0 == b && a.Y() ? a.k = "n" : a.k = "dlfcrrrr".split("")[b + 1]
}, Qc = function(a) {
    return "f" == a.k && a.Fa >= a.Oc
};
Cc.prototype.Y = function() {
    return "n" == this.k?!0 : "l" == this.k && this.Fa >= this.hb
};
var Fc = function(a, b, c, d) {
    this.d = null;
    this.pb = a;
    this.kc = "e" == a ? String(c) + "~" + String(d) : "";
    this.N = [];
    this.Z =- 1;
    this.rb = 0;
    this.Ea = Za(bb(Rc));
    this.Nc = Za(bb(Pc));
    "e" == this.pb && (Sc[this.kc] = t(this.Pc, this));
    J ? (a = b.createElement("div"), a.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" style="opacity:0;-ms-filter:\'progid:DXImageTransform.Microsoft.Alpha(opacity=0)\';filter:alpha(opacity=0)"><param name="movie" value="' + Tc(this, !0) + '"></param><param name="allowscriptaccess" value="always"></param><param name="wmode" value="transparent"></param></object>',
    a = a.firstChild, a.id = String(Math.random())) : a = Uc(this, b);
    a.width = 1;
    a.height = 1;
    a.style.zIndex =- 999999;
    this.d = a
}, Pc = {
    ud: - 1,
    LOADING: 0,
    jd: 1,
    hd: 2,
    md: 3,
    vd: 4
}, Rc = {
    LOADING: 0,
    jd: 1,
    hd: 2,
    qd: 3,
    nd: 4,
    sd: 5,
    td: 6,
    rd: 7,
    od: 8,
    pd: 9
}, Sc = {}, Uc = function(a, b) {
    var c = function(a, c, d) {
        var e = b.createElement("param");
        e.name = c;
        e.value = d;
        a.appendChild(e)
    }, d = Tc(a), e = b.createElement("object");
    e.type = "application/x-shockwave-flash";
    e.data = d;
    c(e, "movie", d);
    c(e, "allowscriptaccess", "always");
    c(e, "wmode", "opaque");
    e.style.visibility = "hidden";
    e.style.opacity = 0;
    return e
}, Tc = function(a, b) {
    var c = "//www.gstatic.com/osd/hbt.swf";
    "e" == a.pb && (c = Rb("//www.gstatic.com/osd/hbe.swf", "id", a.kc));
    b && (c = Rb(c, "delay", "1"));
    return c
};
Fc.prototype.Xc = function(a, b) {
    if (!this.d)
        return !1;
    this.d.style.position = "absolute";
    Ic(this, b);
    var c=!0;
    try {
        a.appendChild(this.d)
    } catch (d) {
        c=!1
    }
    return c
};
Fc.prototype.Wc = function(a, b) {
    if (!this.d ||!a.parentNode)
        return !1;
    this.d.style.position = "fixed";
    Ic(this, b);
    var c=!0;
    try {
        a.parentNode && a.parentNode.insertBefore(this.d, a.nextSibling)
    } catch (d) {
        c=!1
    }
    return c
};
var Ic = function(a, b) {
    var c;
    if (c = a.d)
        c = a.d, c = new F(c.offsetLeft, c.offsetTop), c=!(b == c || b && c && b.x == c.x && b.y == c.y);
    c && Kb(a.d, b)
};
Fc.prototype.remove = function() {
    if (this.d)
        try {
            Cb(this.d)
    } catch (a) {}
    this.d = null
};
Fc.prototype.Pc = function(a) {
    this.Z = a ? 3 : 4
};
var Lc = function(a, b) {
    if ("e" == a.pb) {
        var c = null;
        try {
            c = a.d.it()
        } catch (d) {}
        null === c ? (c = 0, 0 < a.Z && (c = 2)) : c = c ? 3 : 4;
        ++a.Nc[c + 1];
        a.Z = c
    } else {
        var e = Number(b), f = null;
        try {
            f = a.d.fc()
        } catch (g) {}
        Vc(a, f, e);
        c = a.N[a.N.length - 1];
        if (null === f) {
            if (f = e = 0, 0 < a.Z || q(c.Ha))
                f = e = 2
        } else 
            null === c.Ha || c.ub >= e ? (e = 10 <= f ? 4 : 0, f = 0) : f > c.Ha ? (c = (f - c.Ha) / (e - c.ub) * 1E3, e = 10 <= c ? 4 : 3, c = 0 == c ? 1 : 1 > c ? 3 : 4 > c ? 4 : 23 > c ? 6 : 26 > c ? 8 : 9, 6 == a.rb && 6 == c && (c = 7), f = c) : f = e = 1;
        6 == a.rb && (--a.Ea[6], 4 == f || 8 == f?++a.Ea[5] : ++a.Ea[7]);
        ++a.Ea[f];
        a.Z = e;
        a.rb = f
    }
    return a.Z
}, Vc = function(a,
b, c) {
    var d = c - 1E3, e = a.N.length;
    D(a.N, function(a, b) {
        a.ub <= d && (e = Math.min(e, b + 1))
    });
    var f = a.N.length - e;
    0 < f && a.N.splice(e, f);
    a.N.unshift({
        Ha: b,
        ub: c
    })
}, Wc = Oa("osd_or_lidar::gteh_ex", function(a, b) {
    var c = Sc[a];
    r(c) && c(b)
}), Xc = ["gteh"], V = h;
Xc[0]in V ||!V.execScript || V.execScript("var " + Xc[0]);
for (var Yc; Xc.length && (Yc = Xc.shift());)
    Xc.length || void 0 === Wc ? V = V[Yc] ? V[Yc] : V[Yc] = {} : V[Yc] = Wc;
var Zc = function(a, b) {
    this.u = a || 0;
    this.q = b || ""
};
Zc.prototype.match = function(a) {
    return (this.u || this.q) && (a.u || a.q) ? this.q || a.q ? this.q == a.q : this.u || a.u ? this.u == a.u : !1 : !1
};
Zc.prototype.toString = function() {
    var a = "" + this.u;
    this.q && (a += "-" + this.q);
    return a
};
var $c = function(a) {
    var b = [];
    ab(a, function(a, d) {
        var e = A(d), f = a;
        p(f) && (f = A(f));
        b.push(e + "=" + f)
    });
    return b.join("\n")
};
var W = function(a, b, c, d, e, f, g, k, l) {
    this.a = ad.clone();
    this.l = this.C = 0;
    this.qa = new O(0, 0, 0, 0);
    this.Ab = this.Rb = this.sa =- 1;
    this.Pa = [0, 0, 0, 0, 0];
    this.O = [0, 0, 0, 0, 0];
    this.v = [0, 0, 0, 0, 0];
    this.zoom = [0, 0, 0, 0, 0];
    this.Db = "";
    this.fa = d;
    this.ka = this.da =- 1;
    this.Wa = 0;
    this.Cb = b;
    this.o = c && c._adk_ ? c._adk_ : 0;
    this.Cc = null;
    this.h = e;
    this.Bb = g || "";
    this.Gb = k || "";
    this.ra = function() {};
    this.ca = function() {};
    this.p = this.element = c;
    this.xc = 0;
    this.la = l || ad;
    this.yc = b?-1 != b.indexOf("dcopt=anid") : !1;
    this.Ac = "";
    this.ea = c ? String(c._avi_ ||
    "") : "";
    this.Ec = c ? String(c._avihost_ || "") : "";
    this.Nb = c ? Boolean(c._ismobileweb_) : !1;
    this.zb = c ? Boolean(c._eos_) : !1;
    this.ha = c ? Boolean(c._imm_) : !1;
    this.Lb = 0;
    this.Dc = [];
    this.Mb=!1;
    this.Hb = "";
    this.Qa = null;
    this.Ra = "";
    this.j = {};
    this.j.le = 0;
    this.j.nt = 2;
    this.j.Fr = 3;
    this.f = this.eb = null;
    this.Sa=!1;
    this.A = this.c = null;
    this.Xa = 0;
    this.S = null;
    this.ba=!1;
    this.b = null;
    this.T = "";
    this.V = this.s = null;
    this.Ya = 0;
    this.H = null;
    this.D = this.aa=!1;
    this.F = this.w = null;
    this.La=!1;
    this.B = this.ia = this.va = null;
    this.xa = 0;
    this.ua=!1;
    this.Q =
    null;
    this.R=!1;
    this.U = null;
    this.wa = 0;
    this.ta=!1;
    this.G = null;
    this.Kb = 0;
    this.Va = null;
    this.Ua = this.ga = this.P=!1;
    this.Fc = null;
    this.Za = c ? String(c._cvu_ || "") : "";
    this.W = this.I = this.Ob=!1;
    this.Ta = [];
    this.Vb = this.Qb = void 0;
    this.Tb = 0;
    this.ab =- 1;
    this.Pb = this.ja = 0;
    this.$a = void 0;
    this.Sb=!1;
    this.Fb = 0;
    this.X = {
        cb: null,
        bb: null
    };
    this.Ub = this.zc=!1;
    this.m = 5 == e ? .02 > Math.random() : Boolean(c && c._tos_);
    this.Ib = this.Bc = this.Jb =- 1;
    this.Eb = 0;
    this.r = {
        Ma: 0,
        Oa: 0,
        Na: 0
    };
    bd(this, a, f)
}, ad = new O(0, 0, 0, 0), dd = function(a, b, c, d) {
    var e =
    a.Fc, f = null, f = new O( - 12245933, - 12245933, - 12245933, - 12245933);
    d || (a.a = f, e && (a.C = e.width * e.height));
    cd(a, f, b, c, d, !0)
}, ed = function(a, b, c, d, e) {
    if (!(0 > a.fa)) {
        var f = z.innerWidth, g = z.innerHeight, k = new O(Math.round(z.mozInnerScreenY), Math.round(z.mozInnerScreenX + f), Math.round(z.mozInnerScreenY + g), Math.round(z.mozInnerScreenX));
        c = new O(z.screenY + d, z.screenX + c.width, z.screenY + c.height, z.screenX);
        e || (d = new O(k.top - c.top, k.right - c.left, k.bottom - c.top, k.left - c.left), d.top > a.a.top ? a.a = d : (a.a.right = a.a.left + f, a.a.bottom =
        a.a.top + g), a.C = f * g);
        cd(a, k, c, b, e, !0)
    }
}, jd = function(a, b, c) {
    var d = id(a, z && z.document);
    if (d) {
        c || bd(a, z, !0);
        var e = Math.floor((a.a.left + a.a.right) / 2), f = Math.floor((a.a.top + a.a.bottom) / 2), g = xb(document), d = d(e - g.x, f - g.y) ? .5: 0;
        cd(a, a.a, d, b, c, !0)
    }
}, id = function(a, b) {
    kd(a);
    if (!a.eb) {
        var c = [];
        D(cb(a.j), function(a) {
            c[this.j[a] + 1] = a
        }, a);
        var d = c.join(""), d = b && b[d];
        a.eb = d && t(d, b)
    }
    return a.eb
}, kd = function(a) {
    a.j.e =- 1;
    a.j.i = 6;
    a.j.n = 7;
    a.j.t = 8
};
W.prototype.update = function(a, b, c, d, e) {
    if (0 > this.fa)
        return null;
    c || bd(this, d, e);
    Boolean(this.c) && (c ? (this.c && (e = this.c, 3 <= e.J && (e.J = 3)), d.clearInterval(this.A), this.A = null) : this.c&&!this.A && "d" != this.c.k && ld(this, d, !0));
    Boolean(this.s) && (c ? (this.s && this.s.pause(), d.clearInterval(this.V), this.V = null) : this.s&&!this.V && this.aa && md(this, d, !0));
    null != this.Q && (c ? (d.clearInterval(this.B), this.B = null, this.ua=!1) : this.R&&!this.B && nd(this, d, !0));
    null !== this.F && (c ? this.D && (this.Wb(d, !1), this.w && xc(this.w)) :
    this.D && this.w && this.w.ma());
    null != this.G && "-" != this.G && (c ? (d.clearInterval(this.U), this.U = null, this.ta=!1) : this.P&&!this.U && od(this, d, !0));
    return cd(this, this.a, b, a, c, !1)
};
var cd = function(a, b, c, d, e, f) {
    var g = d - a.fa || 1, k = null;
    q(c) ? b = pd(a, c) : (k = c, b = pd(a, b, k));
    a.Qb || qd(a, b, g, a.da, f, e, k);
    a.da = e?-1 : b;
    a.fa = d;
    - 1 != b && (0 > a.sa && (a.sa = d), a.Ab = d);
    - 1 == a.Rb && X(a) && (a.Rb = d);
    a.ra(a, k || ad);
    return a.l
}, pd = function(a, b, c) {
    if (a.Sb && 7 == a.h)
        return a.l = 1, rd(a.l);
    var d = null;
    if (q(b))
        a.l = b;
    else {
        c = new O(Math.max(b.top, c.top), Math.min(b.right, c.right), Math.min(b.bottom, c.bottom), Math.max(b.left, c.left));
        if (0 >= a.C || c.top >= c.bottom || c.left >= c.right)
            return a.qa = new O(0, 0, 0, 0), a.l = 0, - 1;
        a.qa = c.clone().translate( - b.left,
        - b.top);
        d = (c.bottom - c.top) * (c.right - c.left);
        a.l = d / a.C
    }
    return rd(a.l)
}, rd = function(a) {
    var b =- 1;
    1 <= a ? b = 0 : .75 <= a ? b = 1 : .5 <= a ? b = 2 : .25 <= a ? b = 3 : 0 < a && (b = 4);
    return b
}, qd = function(a, b, c, d, e, f, g) {
    e = e&&-1 != d && 2 >= d;
    var k =- 1 == d||-1 == b?-1 : Math.max(d, b);
    d = e ? k : d;
    - 1 != d && (a.Pa[d] += c);
    (e = g || null) ? ( - 1 != d && 2 >= d&&-1 != a.ka && (a.zoom[a.ka] += c), e = 100 * a.C / ((e.bottom - e.top) * (e.right - e.left)), a.ka = 20 <= e ? 0 : 10 <= e ? 1 : 5 <= e ? 2 : 2.5 <= e ? 3 : 4) : a.ka =- 1;
    (g = g || null) ? (g = (g.bottom - g.top) * (g.right - g.left), a.Wa = 0 < g ? a.C * a.l / g : 0) : a.Wa = 0;
    if (7 == a.h) {
        g =
        sd(a);
        e =- 1 != d && 2 >= d;
        !e && void 0 !== a.$a && 0 < a.$a && (a.ja += c);
        a.ja > a.Pb && (a.Pb = a.ja);
        if (e || void 0 === g || 0 >= g)
            a.ja = 0;
        a.$a = g
    }
    for (g = d; 0 <= g && 4 >= g; g++)
        a.v[g] += c, a.v[g] > a.O[g] && (a.O[g] = a.v[g]);
    for (g = 0; g < a.v.length; ++g)
        if (g < b || f||-1 == b)
            a.v[g] = 0
};
W.prototype.Mc = function(a) {
    var b = rd(a.Lc);
    qd(this, b, a.na, rd(a.ec), !1, !1);
    this.da = b;
    X(this) && (this.ra(this, ad), this.m || Bc(this.b));
    a.dc ? (this.T = "c", this.ca(this), this.m=!1, Bc(this.b)) : a.Y && (this.T = "l", this.ca(this), this.m=!1, Bc(this.b))
};
var td = function(a) {
    a.f && Kc(a.f)
}, ld = function(a, b, c) {
    a.A = b.setInterval(B("osd_or_lidar::adblock::flv_int", t(a.sc, a, b)), 1E3);
    c && a.sc(b)
};
W.prototype.sc = function(a) {
    if (this.c) {
        var b = Oc(this.c);
        this.Xa = 5 <= b.Aa && 5 <= b.Xb ? this.Xa + b.na : 0;
        if (1E3 <= this.Xa)
            a.clearInterval(this.A), this.A = null, this.ba=!1, this.c && Kc(this.c), this.S = "v";
        else if (2 == b.Aa || this.c.Y() || Qc(this.c))
            a.clearInterval(this.A), this.A = null, this.ba=!1, this.c && Kc(this.c), this.S = "i"
    }
};
var md = function(a, b, c) {
    a.V = b.setInterval(B("osd_or_lidar::adblock::nclv_int", t(a.uc, a)), 1E3);
    c && a.uc()
};
W.prototype.uc = function() {
    this.s && this.s.update()
};
W.prototype.Ic = function(a, b) {
    var c = rd(b.ec);
    this.Ya =- 1 != c && 2 >= c ? this.Ya + b.na : 0;
    1E3 <= this.Ya ? (ud(this, a), this.H = "v") : b.dc ? (this.T = "c", ud(this, a), this.H = "i") : b.Y && (this.T = "l", ud(this, a), this.H = "i")
};
var ud = function(a, b) {
    b.clearInterval(a.V);
    a.V = null;
    a.aa=!1;
    a.s && Bc(a.s)
}, nd = function(a, b, c) {
    a.B = b.setInterval(B("osd_or_lidar::adblock::iem_int", t(a.tc, a, b, 1E3)), 1E3);
    c && a.tc(b)
};
W.prototype.tc = function(a, b) {
    var c = id(this, a && a.document);
    if (c) {
        bd(this, a, !0);
        var d = Math.floor((this.a.left + this.a.right) / 2), e = Math.floor((this.a.top + this.a.bottom) / 2), f = xb(document), c = Boolean(c(d - f.x, e - f.y)), d = b || 0;
        c ? (this.xa += this.ua ? d : 0, this.ua=!0) : (this.xa = 0, this.ua=!1);
        1E3 <= this.xa && (a.clearInterval(this.B), this.B = null, this.R=!1, this.Q = "v");
        bd(this, a, !1)
    } else 
        a.clearInterval(this.B), this.B = null, this.R=!1, this.Q = "i"
};
var vd = function(a, b, c) {
    b.clearTimeout(a.va);
    a.va = b.setTimeout(B("osd_or_lidar::adblock::mppv_to", t(a.fd, a, b)), c)
};
W.prototype.fd = function(a) {
    if (null !== this.ia) {
        var b = u() - this.ia;
        1E3 <= b ? (this.F = "v", this.D=!1, a.clearTimeout(this.va), this.w && (this.w.Ca(), this.w = null)) : vd(this, a, 1E3 - b)
    }
};
W.prototype.Wb = function(a, b) {
    b && null === this.ia ? (this.ia = u(), vd(this, a, 1E3)) : (this.ia = null, a.clearTimeout(this.va))
};
var od = function(a, b, c) {
    a.U = b.setInterval(B("osd_or_lidar::adblock::xdev_int", t(a.vc, a, b, 1E3)), 1E3);
    c && a.vc(b)
};
W.prototype.vc = function(a, b) {
    if (this.Va) {
        var c = this.Va.contentWindow, d = this.a.right - this.a.left, e = this.a.bottom - this.a.top, f = this.Kb, g = ic(), k = new O(Math.round(c.mozInnerScreenY), Math.round(c.mozInnerScreenX + d), Math.round(c.mozInnerScreenY + e), Math.round(c.mozInnerScreenX)), c = new O(c.screenY + f, c.screenX + g.width, c.screenY + g.height, c.screenX), k = new O(Math.max(k.top, c.top), Math.min(k.right, c.right), Math.min(k.bottom, c.bottom), Math.max(k.left, c.left)), e = d * e, d = 0;
        0 < e && k.top < k.bottom && k.left < k.right && (d = (k.bottom -
        k.top) * (k.right - k.left) / e);
        e = b || 0;
        .5 <= d ? (this.wa += this.ta ? e : 0, this.ta=!0) : (this.wa = 0, this.ta=!1);
        1E3 <= this.wa && (a.clearInterval(this.U), this.U = null, this.P=!1, this.G = "v")
    }
};
var bd = function(a, b, c) {
    b = c ? b : b.top;
    try {
        var d = ad.clone(), e = new F(0, 0);
        if (a.p && (d = a.p.getBoundingClientRect(), c ||!b.frameElement)) {
            var f = a.p, g = new F(0, 0), k = yb(N(f));
            c = f;
            do {
                var l;
                if (k == b)
                    l = Nb(c);
                else {
                    var m = c, n = void 0;
                    if (m.getBoundingClientRect)
                        var w = Lb(m), n = new F(w.left, w.top);
                    else 
                        var x = Eb(sb(m)), ca = Nb(m), n = new F(ca.x - x.x, ca.y - x.y);
                    f = void 0;
                    if (K&&!M(12)) {
                        var Z = void 0;
                        var Wa, Xa;
                        t:
                        {
                            var Ib = m, fd = ua();
                            if (void 0 === Ib.style[fd]) {
                                var ze = (L ? "Webkit" : K ? "Moz" : J ? "ms" : hb ? "O" : null) + va(fd);
                                if (void 0 !== Ib.style[ze]) {
                                    Xa =
                                    (L ? "-webkit" : K ? "-moz" : J ? "-ms" : hb ? "-o" : null) + "-transform";
                                    break t
                                }
                            }
                            Xa = "transform"
                        }
                        if (Wa = Gb(m, Xa) || Gb(m, "transform"))
                            var Jb = Wa.match(Ob), Z = Jb ? new F(parseFloat(Jb[1]), parseFloat(Jb[2])): new F(0, 0);
                        else 
                            Z = new F(0, 0);
                        f = new F(n.x + Z.x, n.y + Z.y)
                    } else 
                        f = n;
                    l = f
                }
                f = l;
                g.x += f.x;
                g.y += f.y
            }
            while (k && k != b && (c = k.frameElement) && (k = k.parent));
            e = g
        }
        var Ae = d.right - d.left, Be = d.bottom - d.top, gd = e.x + a.la.left, hd = e.y + a.la.top, Ce = a.la.right || Ae, De = a.la.bottom || Be;
        a.a = new O(Math.round(hd), Math.round(gd + Ce), Math.round(hd + De), Math.round(gd))
    } catch ($e) {
        a.a =
        a.la
    } finally {
        a.j.Po = 5, a.j.me = 1, a.j.om = 4
    }
    a.C = (a.a.bottom - a.a.top) * (a.a.right - a.a.left);
    a.Ua = 2 != a.h && 3 != a.h && 6 != a.h || 0 != a.C?!1 : !0
}, X = function(a) {
    return 1E3 <= Math.max(a.v[2], a.O[2])
};
W.prototype.getStats = function() {
    var a = this.a, a = ["p=" + a.top + "," + a.left + "," + a.bottom + "," + a.right];
    a.push("tos=" + this.Pa.join(","));
    a.push("mtos=" + this.O.join(","));
    a.push("rs=" + this.h);
    var b = 5 == this.h || 6 == this.h;
    b || a.push("ht=" + this.xc);
    0 <= this.sa && (a.push("tfs=" + this.sa), a.push("tls=" + this.Ab));
    this.ea && a.push("avi=" + this.ea);
    this.Q && a.push("iemv=" + this.Q);
    this.F && (a.push("mppv=" + this.F), a.push("mppz=" + (this.La ? "1" : "0")));
    this.G && a.push("xdev=" + this.G);
    this.b && (a.push("ncl=1"), this.b.ya && a.push("nclt=" +
    this.b.ya), this.b.za && a.push("nctt=" + this.b.za));
    this.H && a.push("nclv=" + this.H);
    this.T && a.push("ncldbg=" + this.T);
    this.f ? a.push("swf=" + this.f.k) : this.Sa && a.push("swf=-");
    this.S && a.push("swfv=" + (this.c ? this.c.k : "") + this.S);
    this.Hb && a.push("fp=" + A(this.Hb));
    7 == this.h && a.push("qid=" + this.Ac);
    this.Db && a.push("afp=" + A(this.Db));
    b && (this.Gb && a.push("ord=" + A(this.Gb)), this.Bb && a.push("amd=" + A(this.Bb + ";")), this.yc && a.push("anid=1"), this.Ra && a.push("xbid=" + A(this.Ra)), this.Ta && 0 != this.Ta.length && a.push("qt=" +
    this.Ta.join(",")), this.Cb && a.push("req=" + A(this.Cb).substring(0, 100)));
    null !== this.Qa && a.push("tp=" + this.Qa);
    0 != this.Fb && a.push("ipc=" + this.Fb);
    this.zb && a.push("eop=1");
    this.zc && a.push("ci=1");
    this.Eb && a.push("gte=" + this.Eb);
    - 1 < this.Jb && (a.push("tmo=" + this.Jb), a.push("tme=" + this.Bc));
    - 1 < this.Ib && a.push("tdl=" + this.Ib);
    (b = this.r.Ma || this.r.Oa || this.r.Na ? [this.r.Ma, this.r.Oa, this.r.Na].join("-") : void 0) && a.push("abd=" + b);
    return a
};
var sd = function(a) {
    if ("as" == a.Vb && r(a.element.sdkVolume))
        try {
            return Number(a.element.sdkVolume())
    } catch (b) {
        return - 1
    }
    if ("h" == a.Vb) {
        i:
        {
            a = ["ima", "common", "sdkVolume"];
            for (var c = h, d; d = a.shift();)
                if (null != c[d])
                    c = c[d];
                else {
                    a = null;
                    break i
                }
            a = c
        }
        if (r(a))
            try {
                return Number(a())
            } catch (e) {
            return - 1
        }
    }
}, wd = function(a) {
    return null != a.Za && null != a.Za.match(/\/pagead\/adview\?.*ai=.*&vt=\d+/i)&&!a.Ob
}, xd = function(a) {
    a.X.cb && (za(a.element, "mouseover", a.X.cb), a.X.cb = null);
    a.X.bb && (za(a.element, "mouseout", a.X.bb), a.X.bb =
    null)
};
var yd=!1;
var zd = null, Ad = null, Bd = null, Cd=!1, Gd = function() {
    if (!Cd) {
        Cd=!0;
        zd = zd || S(z, "scroll", Dd, "osd_or_lidar::scroll");
        Ad = Ad || S(z, "resize", Ed, "osd_or_lidar::resize");
        var a = Fd, b = Ga();
        b && (Bd = Bd || S(y, b, a, "osd_or_lidar::visibility"));
        Fd()
    }
}, Jd = function() {
    Cd=!1;
    Da(zd) && (za(z, "scroll", zd), zd = null);
    Da(Ad) && (za(z, "resize", Ad), Ad = null);
    if (Da(Bd)) {
        var a = Ga();
        a && za(z, a, Bd);
        Bd = null
    }
    for (var b = 0; b < E.length; ++b)
        a = E[b], a.element && xd(a);
    Hd && D(E, function(a) {
        td(a)
    });
    Id && D(E, function(a) {
        a.b && Bc(a.b)
    })
}, Ed = function() {
    Kd(!1);
    Dd()
},
Dd = function() {
    Ld(E, !1)
}, Td = function() {
    Md && (Nd = hc(!0, z, Md));
    var a = Nd, b = Od, c = Pd;
    if (Qd) {
        a = b;
        Kd(!1);
        var d = Rd, e = d.height - a;
        0 >= e && (e = d.height, a = 0);
        Nd = new G(d.width, e);
        e = new Sd;
        e.ac=!0;
        e.oc = Nd;
        e.Zb = d;
        e.Yb = a;
        return e
    }
    if (c)
        return a = new Sd, a.$b=!0, a;
    if (Hd)
        return a = new Sd, a.bc=!0, a;
    if (Id)
        return a = new Sd, a.Sc=!0, a;
    i: {
        b = new Sd;
        b.oc = a;
        b.fb=!1;
        if (null != a&&-1 != a.width&&-1 != a.height&&-12245933 != a.width&&-12245933 != a.height) {
            try {
                var c = Md, f = z || z, f = f.top, e = a || hc(!0, f, c), g = Eb(sb(f.document)), d =- 1 == e.width||-12245933 ==
                e.width ? new O(e.width, e.width, e.width, e.width) : new O(g.y, g.x + e.width, g.y + e.height, g.x)
            } catch (k) {
                a = b;
                break i
            }
            b.gb = d;
            b.fb=!0
        }
        a = b
    }
    return a
}, Ld = function(a, b) {
    if (!Ud)
        if (window.clearTimeout(Vd), Vd = null, 0 == a.length)
            b || Wd();
        else {
            Xd = null;
            var c = Td();
            try {
                var d = T();
                if (c.ac)
                    for (var e = 0; e < a.length; e++)
                        ed(a[e], d, c.Zb, c.Yb, b);
                else if (c.$b)
                    for (e = 0; e < a.length; e++)
                        jd(a[e], d, b);
                else if (c.Jc) {
                    var f = yd&&!1;
                    yd=!1;
                    for (e = 0; e < a.length; e++)
                        dd(a[e], c.gb, d, b ||!f)
                    } else if (Id)
                        D(a, function(a) {
                            b ? a.b && a.b.pause() : a.b && a.b.update()
                        });
                    else if (c.bc)
                        D(a, function(a) {
                            if (b) {
                                if (a.f) {
                                    var c = a.f;
                                    3 <= c.J && (c.J = 3);
                                    a.da =- 1
                                }
                            } else if (a.f && "d" != a.f.k) {
                                var c = Oc(a.f), d = [ - 1, - 1, - 1, - 1, - 1, 4, 2, 0], e = d[c.Aa + 1];
                                qd(a, e, c.na, d[c.Xb + 1], !0, !1);
                                a.da = e;
                                a.ra(a, ad);
                                7 == a.h ? 2E3 <= Math.max(a.v[2], a.O[2]) && td(a) : X(a)&&!a.m && td(a);
                                if (2 == c.Aa || a.f.Y() || Qc(a.f))
                                    a.ca(a), a.m=!1, td(a)
                            }
                        });
                        else if (c.fb)
                            for (e = 0; e < a.length; e++)
                                a[e].update(d, c.gb, b, z, Yd);
                                Zd += T() - d;
                                ++$d;
                                ae()
                            } finally {
                                b ? D(a, function(a) {
                                    a.l = 0;
                                    a.qa = new O(0, 0, 0, 0)
                                }) : Wd()
                            }
    }
}, Fd = function() {
    var a = be();
    if (a) {
        if (!mc) {
            var b =
            T();
            nc = b;
            D(E, function(a) {
                var d = a.Tb;
                mc || a.Qb||-1 == a.ab || (d += b - a.ab);
                a.Tb = d
            })
        }
        mc=!0;
        Kd(!0)
    } else 
        b = T(), ce = de(b), mc=!1, D(E, function(a) {
            0 <= a.fa && (a.ab = b)
        });
    Ld(E, !a)
}, be = function() {
    if (ee())
        return !0;
    var a = Fa(z.document);
    return 1 == a || 0 == a
}, Wd = function() {
    z && (Vd = z.setTimeout(B("osd_or_lidar::psamp_to", function() {
        Ld(E, !1)
    }), oc()))
}, fe = function(a) {
    return null != Ta(function(b) {
        return b.element == a
    })
}, E = [], Ud=!1, Nd = null, Rd = null, ge = null, Vd = null, Yd=!xa(z.top), he = "", Xd = null, Od = 0, Qd=!1, Pd=!1, Hd=!1, Id=!1, Md = Fb() ||!Fb() &&
(I("iPod") || I("iPhone") || I("Android") || I("IEMobile")), ce = 0, ie = 0, je = 0, Zd = 0, $d = 0, ke =- 1, le = function() {
    var a = z.document;
    return a.body && a.body.getBoundingClientRect?!0 : !1
}, Kd = function(a) {
    Nd = hc(!0, z, Md);
    if (!a) {
        Rd = ic();
        a = z;
        a.top != a && (a = a.top);
        var b = 0, c = 0, d = Nd;
        try {
            var e = a.document, f = e.body, g = e.documentElement;
            if ("CSS1Compat" == e.compatMode && g.scrollHeight)
                b = g.scrollHeight != d.height ? g.scrollHeight : g.offsetHeight, c = g.scrollWidth != d.width ? g.scrollWidth : g.offsetWidth;
            else {
                var k = g.scrollHeight, l = g.scrollWidth,
                m = g.offsetHeight, n = g.offsetWidth;
                g.clientHeight != m && (k = f.scrollHeight, l = f.scrollWidth, m = f.offsetHeight, n = f.offsetWidth);
                k > d.height ? k > m ? (b = k, c = l) : (b = m, c = n) : k < m ? (b = k, c = l) : (b = m, c = n)
            }
            ge = new G(c, b)
        } catch (w) {
            ge = new G( - 12245933, - 12245933)
        }
    }
}, me = function(a) {
    if (Xd&&!a)
        return Ua(Xd);
    var b = z.document;
    a = 0 <= lc ? T() - lc : - 1;
    var c = T();
    - 1 == ke && (a = c);
    var d = [], e = E;
    try {
        if (0 < e.length ? ((b = Nd) && d.push("bs=" + b.width + "," + b.height), (b = Rd) && d.push("bos=" + b.width + "," + b.height), (b = ge) && d.push("ps=" + b.width + "," + b.height), z.screen &&
        d.push("ss=" + z.screen.width + "," + z.screen.height)) : (d.push("url=" + A(z.location.href.substring(0, 1024))), b.referrer && d.push("referrer=" + A(b.referrer.substring(0, 512)))), d.push("tt=" + a), d.push("pt=" + lc), Qd && d.push("xde=1"), Pd && d.push("iem=1"), d.push("deb=" + A([1, ie, je, Zd, $d, ke].join("-"))), d.push("tvt=" + de(c)), z.top != z) {
            0 < e.length && d.push("iframe_loc=" + A(z.location.href.substring(0, 512)));
            var f = hc(!1, z, Md);
            d.push("is=" + f.width + "," + f.height)
        }
    } catch (g) {
        d.push("error")
    }
    Xd = d;
    return Ua(Xd)
}, ne = function() {
    return K &&
    q(z.screenX) && q(z.mozInnerScreenX) && q(z.outerWidth)
}, oe = function(a) {
    var b = a.indexOf("Firefox/"), c =- 1;
    if (0 <= b)
        c = Math.floor(a.substr(b + 8))||-1;
    else 
        return null;
    var d = a.indexOf("Mac OS X 10."), b =- 1;
    0 <= d && (b = Number(a.substr(d + 12, 1))||-1);
    var e = 0 < b?-1 : a.indexOf("Windows NT "), d =- 1;
    0 <= e && (d = {
        "6.0": 0,
        "6.1": 1,
        "6.2": 2
    }
    [a.substr(e + 11, 3)]||-1);
    a = 148;
    5 <= b ? a = 4 <= c ? 108 : 3 <= c ? 127 : 108 : 0 <= d && (16 == c || 17 == c || 18 == c) && (a = [[146, 146, 146], [148, 147, 148], [131, 130, 136]][d][c - 16]);
    return a
}, qe = function() {
    var a = pe, b=!1;
    D(E, function(c,
    d) {
        if (1 > Math.random()) {
            var e;
            var f = String(d);
            Boolean(Boolean(c.p&&!!f&&!Tb)&&!Tb) ? (e = new Cc, (f = Hc(e, c.p, f)) ? (c.ca = a, c.f = e) : c.Sa=!0, e = f) : (c.Sa=!0, e=!1);
            b = b || e
        }
    });
    (Hd = b) && D(E, function(b) {
        Boolean(b.f) || a(b)
    });
    return b
}, re = function() {
    var a = pe, b=!1;
    D(E, function(c) {
        if (.02 > Math.random()) {
            if (c.p) {
                var d = c.a.bottom - c.a.top, e = c.a.right - c.a.left, f = new U;
                if (d = f.K(c.p, d, e, t(c.Mc, c)))
                    a && (c.ca = a), c.b = f;
                c = d
            } else 
                c=!1;
            b = b || c
        }
    });
    (Id = b) && D(E, function(b) {
        Boolean(b.b) || a(b)
    });
    return b
}, ae = function() {
    if ("osd" == he)
        for (var a =
        E, b = 0; b < a.length; b++) {
            var c = me(), d = a[b], e = c, c = X(d);
            if (0 == d.Lb)
                d.r.Ma++;
            else if (1 != d.Lb || c&&!d.Mb) {
                d.r.Na++;
                var f = d.getStats();
                f.unshift("adk=" + d.o);
                f.push("r=u");
                var f = f.concat(e).join("&"), e = {}, g = new Zc(d.o, d.Cc), k = e;
                g.u && (k[4] = g.u);
                g.q && (k[12] = g.q);
                e[0] = "goog_update_data";
                e[3] = f;
                e[5] = c;
                e[15] = d.ba || d.aa || d.R || d.D || d.P;
                e[11] = d.ga || d.Ua;
                e[7] = d.l;
                f = d.qa;
                e[9] = f ? f.top + "-" + f.left + "-" + f.bottom + "-" + f.right : "0-0-0-0";
                e[13] = d.O.join(",");
                e[14] = d.Wa;
                f = d;
                g = d.Dc;
                try {
                    var l = $c(e);
                    if (l && f.element) {
                        var m = g ? g.length:
                        0;
                        if (0 < m)
                            for (var n = 0; n < m; ++n) {
                                var w = g[n];
                                (w == z.top || w.parent && w.parent != w) && jc(l, w)
                            } else {
                                e = [];
                                try {
                                    var x = Db(f.element);
                                    if (x)
                                        e = [x];
                                    else 
                                        for (var ca = tb("iframe", void 0, f.element), n = 0; n < ca.length; ++n)(x = Db(ca[n])
                                            ) && e.push(x);
                                            var Z = e.length;
                                            if (0 < Z)
                                                for (var Wa = ga(jc, l), n = 0; n < Z; ++n)
                                                    kc(Wa, e[n])
                                                } catch (Xa) {}
                                            }
                        }
                    } catch (Ib) {}
                    d.Mb = c
            } else 
                d.r.Oa++
    }
}, se = function(a) {
    D(a, function(a) {
        fe(a.element) || E.push(a)
    })
}, de = function(a) {
    var b = ce;
    mc && (b += a - nc);
    return b
}, ee = function() {
    return Sa(E, function(a) {
        return a.Sb
    })
}, Sd = function() {
    this.Zb =
    this.oc = null;
    this.Yb = 0;
    this.gb = null;
    this.fb = this.Sc = this.bc = this.Jc = this.$b = this.ac=!1
};
var te = function(a) {
    this.pa = new sc;
    this.Qc = a;
    this.Da = [];
    this.Ga = this.ic = this.sb = this.tb = null
};
te.prototype.ad = function(a) {
    this.Da.push({
        Zc: a,
        Ja: u()
    })
};
te.prototype.Rc = function() {
    var a;
    a = this.Da;
    var b = u(), c, d, e = a.length;
    if (0 < e)
        for (c = 0, d = b - a[0].Ja, --e; 0 <= e; e--) {
            if (b < a[e].Ja) {
                d = c =- 1;
                break
            }
            a[e].Zc && (c += b - a[e].Ja);
            b = a[e].Ja
        } else 
            d = c =- 1;
    a = {
        Hc: d,
        Gc: c
    };
    this.Ca();
    this.Qc(a)
};
var ue = function(a) {
    var b, c = t(function(a) {
        a !== b && (a ? (this.pa.ma(), this.tb = z.setTimeout(B("osd_or_lidar::ah_mt", t(this.Rc, this)), 1E3)) : (z.clearTimeout(this.tb), this.Da = [], xc(this.pa)), b = a)
    }, a), d = t(function() {
        var a;
        a = z.screenX;
        var b = z.screenY, e = ic();
        a = new O(b + this.ic + 60, a + e.width - 20, b + e.height - 50, a + 20);
        a = a.top >= a.bottom || a.left >= a.right ? null : a;
        null === a ? a=!1 : (b = this.pa.nb, b = new F(Math.round(b.mozInnerScreenX), Math.round(b.mozInnerScreenY)), a = a.contains(b));
        c(a);
        this.sb = z.setTimeout(B("osd_or_lidar::ah_gt",
        d), 100)
    }, a), e = t(function() {
        1 === Fa(y) ? d() : (z.clearTimeout(this.sb), c(!1))
    }, a), f = Ga();
    if (f) {
        var g = S(y, f, e, "osd_or_lidar::ah_pv");
        a.Ga = function() {
            za(y, f, g);
            this.Ga = null
        }
    }
    e()
};
te.prototype.K = function(a) {
    if (!a)
        return !1;
    var b = a.getBoundingClientRect(), b = new F(Math.floor((b.right - b.left) / 2), Math.floor((b.bottom - b.top) / 2)), c;
    c = oe(H);
    null === c ? c=!1 : (this.ic = c, c=!0);
    return c && this.pa.K(a, b, t(this.ad, this))?!0 : !1
};
te.prototype.ma = function() {
    ue(this)
};
te.prototype.Ca = function() {
    z.clearTimeout(this.tb);
    z.clearTimeout(this.sb);
    this.Ga && this.Ga();
    this.pa.Ca();
    this.Da = []
};
var ve = function(a, b) {
    return a.dataset ? b in a.dataset ? a.dataset[b] : null : a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
};
var we = null, xe=!1, ye=!1, Ee = 0, Fe = 0, Y = 0, Ge = 0, He = 0, Ie = 0, Je = 0, Me = function(a) {
    if (a) {
        var b = a.I&&!(a.ha&&!a.W);
        if (!b || wd(a)) {
            if (X(a) && wd(a)) {
                var c = a.Za, d;
                y.body ? (Ba || (d = y.createElement("iframe"), d.style.display = "none", d.id = "anonIframe", Ba = d, y.body.appendChild(d)), d=!0) : d=!1;
                d && v(Ba.contentWindow, c);
                a.Ob=!0
            }
            b || a.ba || a.aa || a.R || a.D || a.P ||!X(a) ? a.Ua && Ke(a, "z") : Ke(a, "v");
            5 != Y && 6 != Y && 1 != Y ||!X(a) || Le(a, !0)
        }
    }
}, Ke = function(a, b) {
    if (a&&!Ud) {
        7 === a.h && "i" == b && (a.ga=!0);
        var c=!a.zb&&!a.I, d = a.ha&&!a.W;
        if (c || d) {
            var e =
            "//" + (a.Ec || "pagead2.googlesyndication.com") + (a.Nb ? "/pagead/gen_204" : "/activeview") + "?id=", f = [];
            f.push("v=246");
            var g = "adk=" + (a.o || 1) + "&" + a.getStats().join("&");
            f.push(g);
            f.push("r=" + b);
            xe || f.push("its=0");
            ye && f.push("ahm=1");
            f.push("ndc=" + Ge);
            f.push("tdc=" + He);
            f.push("npl=" + Ie);
            f.push("tpl=" + Je);
            ie = z.__google_lidar_;
            g = me(!1);
            f.push(g.join("&"));
            f.push(Ne());
            f = "&" + f.join("&");
            c && (v(z, (e + "lidar2" + f).substring(0, 2E3)), a.I=!0);
            d && (v(z, (e + "lidarim" + f).substring(0, 2E3)), a.W=!0)
        }
    }
    Oe() || (Ud=!0, E = [], Jd())
},
Oe = function() {
    if (Ee || Fe || 2 == Y || 7 == Y || 4 == Y)
        return !0;
    for (var a = E, b = 0; b < a.length; b++) {
        var c = a[b], d=!c.I;
        if (c.ha&&!c.W || d || c.m || wd(c))
            return !0
    }
    return !1
}, Ne = function() {
    var a = we || z;
    if (!a)
        return "";
    var b = a.document, c = [];
    c.push("url=" + A(a.location.href.substring(0, 512)));
    b && b.referrer && c.push("referrer=" + A(b.referrer.substring(0, 512)));
    b = a.location && a.location.ancestorOrigins;
    if (Yd && b && 0 < b.length) {
        for (var d = [], a = b.length, e = a - 1; 0 <= e; --e)
            d.push(A(b[e]));
        b = d.join(",");
        b = b.substring(0, 512);
        c.push("adep=" + a);
        c.push("anc=" +
        b)
    }
    return c.join("&")
}, Le = function(a, b) {
    if (!b ||!a.Ub) {
        var c = (7 == Y || 6 == Y ? "https://" : "//") + "pagead2.googlesyndication.com/activeview?id=avtest&exp=pde&exp_id=" + Y + "&v=246&type=" + (b ? "imm" : "eos") + "&avi=" + a.ea;
        4 == Y || 5 == Y ? (c = c.split("?"), z.navigator.sendBeacon(c[0], c[1])) : v(z, c);
        a.Ub=!0
    }
};
var Pe = null, Re = function() {
    He = T();
    Ge = Qe()
}, Se = function() {
    Je = T();
    Ie = Qe()
}, Ze = function() {
    try {
        var a = T();
        lc = a;
        we = Ub();
        Kd(!1);
        if (le()) {
            var b = ya([1, 3], 0);
            if (b) {
                var c = document.createElement("a");
                c.hasOwnProperty && c.hasOwnProperty("ping") || (b = 1 == b ? 2 : 4);
                3 == b && (Pe = c);
                Ee = b
            }
            var d = ya([1, 3], 0);
            d && (z.navigator.sendBeacon || (d = 1 == d ? 2 : 4), Fe = d);
            je = 0;
            var e = Te(a);
            je = e.length;
            se(e);
            if (1 > E.length)
                Ue("n");
            else if (window.setTimeout(function() {
                xe=!0
            }, 1), 1 > Math.random() && uc() && ne() && void 0 !== Ga() && z !== z.top && D(E, function(a) {
                if (a.ea &&
                5 === a.h) {
                    var b = new te(function(b) {
                        var c = Ve(z);
                        null === c && (c =- 1);
                        v(z, ["//pagead2.googlesyndication.com/pagead/gen_204?id=ah&v=246", "avi=" + a.ea, "adk=" + a.o, "pmd=" + b.Hc, "pd=" + b.Gc, "fd=" + c].join("&").substring(0, 2E3))
                    });
                    b.K(a.element) && (ye=!0, b.ma())
                }
            }), ke = T() - a, Yd)We();
            else {
                Xe();
                if (K) {
                    var f = ne(), g = uc(), k;
                    D(E, function(a) {
                        var b = Math.random();
                        if (f && 0 > (b -= .01))
                            i: {
                            void 0 === k && (b = oe(z.navigator.userAgent), null !== b && (Od = b, Qd=!1), k = Od), b = k;
                            a.P=!0;
                            a.Kb = b;
                            a.G = "u";
                            var b = qc(), c = Ab("iframe", {
                                frameborder: 0,
                                height: 0,
                                width: 0
                            });
                            c.style.visibility = "hidden";
                            c.style.opacity = 0;
                            c.style.zIndex =- 999999;
                            Kb(c, new F(0, 0));
                            c.style.position = "absolute";
                            try {
                                b.appendChild(c);
                                var d = a.element;
                                d.insertBefore(b, d.childNodes[0] || null)
                            } catch (e) {
                                a.G = "-";
                                a.P=!1;
                                break i
                            }
                            a.Va = c;
                            od(a, z)
                        } else 
                            g && 0 > b - .01 && null === a.F && a.element && uc() && (d = a.element.getBoundingClientRect(), d = new F(Math.floor((d.right - d.left) / 2), Math.floor((d.bottom - d.top) / 2)), b = new sc, a.La = .5 < Math.random(), b.K(a.element, d, t(a.Wb, a, z), a.La) ? (a.D=!0, a.w = b, a.F = "u", b.ma()) : (a.D =
                            !1, a.F = "-"))
                    })
                } else 
                    D(E, function(a, b) {
                        var c = Math.random();
                        if (0 > (c -= .01)) {
                            var c = String(b), d = new Cc;
                            Boolean(a.p&&!!c&&!Tb) && Hc(d, a.p, c) ? (a.S = "u", a.c = d, a.ba=!0, ld(a, z)) : a.S = "-"
                        } else if (0 > (c -= .01)) {
                            var c = a.a.bottom - a.a.top, d = a.a.right - a.a.left, e = new U;
                            e.K(a.p, c, d, t(a.Ic, a, z)) ? (a.s = e, a.aa=!0, md(a, z), a.H = "u") : a.H = "-"
                        } else 
                            0 > c - .01 && J && M(8) && (a.R=!0, nd(a, z), a.Q = "u")
                        });
                Gd();
                Ye()
            }
        } else 
            Ue("c")
    } catch (l) {
        throw E = [], Ue("x"), l;
    }
}, Ye = function() {
    window.setTimeout(B("lidar::hd_to", function() {
        Ue("t")
    }), 36E5)
}, We = function() {
    var a;
    ne() && 1 > Math.random() ? (a = oe(z.navigator.userAgent), null !== a && (Od = a, Qd=!0), a=!0) : a=!1;
    a ? (Gd(), Ye()) : (a = J && M(8) && 1 > Math.random() ? Pd=!0 : !1, a ? (Gd(), Ye()) : re() ? (Gd(), Ye()) : qe() ? (Gd(), Ye()) : Ue("i"))
}, Ve = function(a, b, c) {
    b = b || 100;
    c = c || 0;
    return a === z.top ? c : c >= b ? null : Ve(a.parent, b, c + 1)
}, Ue = function(a) {
    window.clearTimeout(Vd);
    Vd = null;
    var b = E, c = [], d = [];
    if (!Ud) {
        var e = ["//pagead2.googlesyndication.com/activeview?id=lidar2"], f = e.length;
        e.push("v=246");
        var g = e.length;
        e.push(null);
        Ld(b, !0);
        if (!Ud) {
            0 < b.length && (4 ==
            Y || 7 == Y || 2 == Y) && D(b, function(a) {
                X(a) && Le(a, !1)
            });
            c = Qa(b, function(a) {
                return !a.I
            });
            d = Qa(b, function(a) {
                return a.ha&&!a.W
            });
            e.push("r=" + a);
            xe || e.push("its=0");
            ye && e.push("ahm=1");
            ie = z.__google_lidar_;
            a = me(!1);
            e.push(a.join("&"));
            0 == c.length || e.push(Ne());
            0 != c.length ? D(c, function(a, b) {
                var c = "adk=" + (a.o || b + 1) + "&" + a.getStats().join("&");
                e[g] = c;
                e[0] = a.Nb ? "//pagead2.googlesyndication.com/pagead/gen_204?id=lidar2" : "//pagead2.googlesyndication.com/activeview?id=lidar2";
                (c = a.m&&!a.ga && X(a)) && Ya(e, f, 0, "ts=1");
                v(z, e.join("&").substring(0, 2E3));
                c && (a.m=!1, C.splice.call(e, f, 1))
            }) : 0 == b.length && (e[0] = "//pagead2.googlesyndication.com/pagead/gen_204?id=lidar2", c = Qe(), e.push("nd=" + c), v(z, e.join("&").substring(0, 2E3)));
            0 == d.length || D(d, function(a, b) {
                var c = "adk=" + (a.o || b + 1) + "&" + a.getStats().join("&");
                e[g] = c;
                e[0] = "//pagead2.googlesyndication.com/activeview?id=lidarim";
                v(z, e.join("&").substring(0, 2E3))
            });
            D(b, function(a, b) {
                if (a.m&&!a.ga && X(a)) {
                    var c = "adk=" + (a.o || b + 1) + "&" + a.getStats().join("&");
                    e[g] = c;
                    e[0] = "//pagead2.googlesyndication.com/activeview?id=lidartos";
                    v(z, e.join("&").substring(0, 2E3));
                    a.m=!1
                }
            });
            if (Ee || Fe)
                e[0] = "//pagead2.googlesyndication.com/activeview?id=avtest", Ee && e.splice( - 1, 0, "ape=" + Ee), Fe && e.splice( - 1, 0, "sbe=" + Fe), D(b, function(a, b) {
                    var c = "adk=" + (a.o || b + 1) + "&" + a.getStats().join("&");
                    e[g] = c;
                    var c = e.join("&").substring(0, 2E3), d = 3 == Fe;
                    3 == Ee || d ? d ? (d = c.split("?"), z.navigator.sendBeacon(d[0], d[1]) || (c = c.replace(/&sbe=3&/, "&sbe=3&sberr=1&"), v(z, c))) : (d = Pe, d.href = "javascript:void(0)", d.ping = c, d.click ? d.click() : (c = document.createEvent("HTMLEvents"),
                    c.initEvent("click", !0, !0), d.dispatchEvent(c))) : v(z, c)
                });
            Ud=!0
        }
    }
}, Te = function(a) {
    var b = [], c = $a(Ra(Vb, function(a) {
        return Ua(ub(a))
    })), c = Qa(c, function(a) {
        return "DIV" == a.nodeName || "INS" == a.nodeName
    }), c = Ra(c, function(a) {
        return {
            element: a,
            qc: a && a.id ? 0 == a.id.lastIndexOf("DfaVisibilityIdentifier", 0) ? 5: 0 == a.id.lastIndexOf("DfpVisibilityIdentifier", 0) ? 6: 0: 0
        }
    });
    D(c, function(c) {
        if (0 != c.qc&&!fe(c.element)) {
            var e = c.element;
            c = c.qc;
            var f = ve(e, "admeta") || ve(e, "admetaDfp") || "", g = ve(e, "ord") || "", k;
            i:
            if (g) {
                k = z.document.getElementsByTagName("script");
                for (var l = new RegExp(".doubleclick.net/(N.+/)?(pf)?(ad[ijx])/.*;ord=" + ra(g)), m = 0; m < k.length; m++) {
                    var n = k[m];
                    if (n && n.src && l.test(n.src)) {
                        k = n.src;
                        break i
                    }
                }
                k = z != z.top && l.test(z.location.href) ? z.location.href : ""
            } else 
                k = "";
            e = new W(z, k, e, a, c, Yd, f, g);
            g = k.match(/.doubleclick.net\/(N.+\/)?(pf)?(ad[ijx])\//);
            e.Qa = g ? {
                adi: "adi",
                adj: "adj",
                adx: "adx"
            }
            [g[3]] : "";
            if (6 == c) {
                if (!e.o) {
                    f = f.split(",", 3).join(":");
                    g = f.length;
                    if (0 == g)
                        f = 0;
                    else {
                        l = 305419896;
                        for (m = 0; m < g; m++)
                            l^=(l<<5) + (l>>2) + f.charCodeAt(m) & 4294967295;
                        f = 0 < l ? l :
                        4294967296 + l
                    }
                    e.o = f
                }
                1 > Math.random() && (e.I=!0)
            }
            7 != c && (e.ra = Me);
            if (k) {
                i:
                {
                    if (k && (c = k.match(/\/\/.*(;u=xb[^;\?]*)/i)) && (c = c[c.length - 1].split("=")) && 2 == c.length) {
                        c = c[1];
                        break i
                    }
                    c = null
                }
                e.Ra = c
            }
            b.push(e)
        }
    });
    return b
}, pe = function(a) {
    a && (a.ga=!0, a.I && (!a.ha || a.W) || Ke(a, "i"))
}, Xe = function() {
    var a = ya([1, 2, 4, 5], .01);
    a && z.navigator.sendBeacon && (Y = a)
}, Qe = function() {
    return ub("GoogleActiveViewClass").length
};
La("lidar::main", function() {
    z.__google_lidar_ ? z.__google_lidar_ += 1 : (z.__google_lidar_ = 1, he = "lidar", S(z, "unload", function() {
        Ue("u")
    }, "lidar::unload"), document.readyState && "complete" === document.readyState ? Ze() : (Ea(function() {
        z.setTimeout(B("lidar::init_to", Ze), 100)
    }), S(z, "DOMContentLoaded", Re, "lidar::dcl"), S(z, "load", Se, "lidar::pl")))
});
})();

