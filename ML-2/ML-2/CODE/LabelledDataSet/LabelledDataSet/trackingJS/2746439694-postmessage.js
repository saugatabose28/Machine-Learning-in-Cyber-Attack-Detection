var g, k = this, l = function(a, b) {
    var c = a.split("."), d = k;
    c[0]in d ||!d.execScript || d.execScript("var " + c[0]);
    for (var e; c.length && (e = c.shift());)
        c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
}, aa = function(a) {
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
};
Math.random();
var n = function(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.v = b.prototype;
    a.prototype = new c;
    a.u = function(a, c, f) {
        return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
    }
};
var p = function(a) {
    if (Error.captureStackTrace)
        Error.captureStackTrace(this, p);
    else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
};
n(p, Error);
var ba = function(a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;)
        d += c.shift() + e.shift();
    return d + c.join("%s")
}, t = String.prototype.trim ? function(a) {
    return a.trim()
}
: function(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}, u = function(a, b) {
    return a < b?-1 : a > b ? 1 : 0
};
Math.random();
var v = function(a, b) {
    b.unshift(a);
    p.call(this, ba.apply(null, b));
    b.shift()
};
n(v, p);
var w = function(a, b, c) {
    if (!a) {
        var d = "Assertion failed";
        if (b)
            var d = d + (": " + b), e = Array.prototype.slice.call(arguments, 2);
        throw new v("" + d, e || []);
    }
};
var x = Array.prototype, y = function(a) {
    return x.concat.apply(x, arguments)
}, ca = function(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)
            c[d] = a[d];
        return c
    }
    return []
};
var A;
t: {
    var B = k.navigator;
    if (B) {
        var C = B.userAgent;
        if (C) {
            A = C;
            break t
        }
    }
    A = ""
};
var da =- 1 != A.indexOf("Opera")||-1 != A.indexOf("OPR"), D =- 1 != A.indexOf("Trident")||-1 != A.indexOf("MSIE"), E =- 1 != A.indexOf("Gecko")&&-1 == A.toLowerCase().indexOf("webkit")&&!( - 1 != A.indexOf("Trident")||-1 != A.indexOf("MSIE")), F =- 1 != A.toLowerCase().indexOf("webkit"), ea = F&&-1 != A.indexOf("Mobile"), G = function() {
    var a = k.document;
    return a ? a.documentMode : void 0
}, H = function() {
    var a = "", b;
    if (da && k.opera)
        return a = k.opera.version, "function" == aa(a) ? a() : a;
    E ? b = /rv\:([^\);]+)(\)|;)/ : D ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ :
    F && (b = /WebKit\/(\S+)/);
    b && (a = (a = b.exec(A)) ? a[1] : "");
    return D && (b = G(), b > parseFloat(a)) ? String(b) : a
}(), I = {}, J = function(a) {
    if (!I[a]) {
        for (var b = 0, c = t(String(H)).split("."), d = t(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
            var h = c[f] || "", q = d[f] || "", r = RegExp("(\\d*)(\\D*)", "g"), z = RegExp("(\\d*)(\\D*)", "g");
            do {
                var s = r.exec(h) || ["", "", ""], m = z.exec(q) || ["", "", ""];
                if (0 == s[0].length && 0 == m[0].length)
                    break;
                b = u(0 == s[1].length ? 0 : parseInt(s[1], 10), 0 == m[1].length ? 0 : parseInt(m[1], 10)) || u(0 ==
                s[2].length, 0 == m[2].length) || u(s[2], m[2])
            }
            while (0 == b)
            }
        I[a] = 0 <= b
    }
}, K = k.document, fa = K && D ? G() || ("CSS1Compat" == K.compatMode ? parseInt(H, 10) : 5) : void 0;
var L;
if (!(L=!E&&!D)) {
    var M;
    if (M = D)
        M = D && 9 <= fa;
    L = M
}
L || E && J("1.9.1");
D && J("9");
var N;
N=!1;
var O = A;
O && ( - 1 != O.indexOf("Firefox")||-1 != O.indexOf("Camino")||-1 != O.indexOf("iPad")||-1 != O.indexOf("iPhone")||-1 != O.indexOf("iPod")||-1 != O.indexOf("Chrome")||-1 != O.indexOf("Android")||-1 != O.indexOf("Safari") && (N=!0));
var ga = N;
var ia = function(a) {
    var b = window;
    if (ea && ga && a) {
        a.focus();
        var c = 0, d = null, d = a.setInterval(function() {
            b.closed || 5 == c ? (a.clearInterval(d), ha(b)) : (b.close(), c++)
        }, 150)
    } else 
        b.close(), ha(b)
}, ha = function(a) {
    if (!a.closed && a.document && a.document.body)
        if (a = a.document.body, w(null != a, "goog.dom.setTextContent expects a non-null value for node"), "textContent"in a)
            a.textContent = "Please close this window.";
        else if (3 == a.nodeType)
            a.data = "Please close this window.";
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild !=
            a.firstChild;)
                a.removeChild(a.lastChild);
                a.firstChild.data = "Please close this window."
        } else {
            for (var b; b = a.firstChild;)
                a.removeChild(b);
                w(a, "Node cannot be null or undefined.");
                a.appendChild((9 == a.nodeType ? a : a.ownerDocument || a.document).createTextNode("Please close this window."))
        }
};
var ja = "StopIteration"in k ? k.StopIteration: Error("StopIteration"), P = function() {};
P.prototype.next = function() {
    throw ja;
};
P.prototype.s = function() {
    return this
};
var Q = function(a, b) {
    this.g = {};
    this.c = [];
    this.m = this.b = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c%2)
            throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2)
            this.set(arguments[d], arguments[d + 1])
    } else if (a) {
        var e;
        if (a instanceof Q)
            e = a.j(), d = a.h();
        else {
            var c = [], f = 0;
            for (e in a)
                c[f++] = e;
            e = c;
            c = [];
            f = 0;
            for (d in a)
                c[f++] = a[d];
            d = c
        }
        for (c = 0; c < e.length; c++)
            this.set(e[c], d[c])
    }
};
Q.prototype.h = function() {
    R(this);
    for (var a = [], b = 0; b < this.c.length; b++)
        a.push(this.g[this.c[b]]);
    return a
};
Q.prototype.j = function() {
    R(this);
    return this.c.concat()
};
Q.prototype.k = function(a) {
    return S(this.g, a)
};
Q.prototype.remove = function(a) {
    return S(this.g, a) ? (delete this.g[a], this.b--, this.m++, this.c.length > 2 * this.b && R(this), !0) : !1
};
var R = function(a) {
    if (a.b != a.c.length) {
        for (var b = 0, c = 0; b < a.c.length;) {
            var d = a.c[b];
            S(a.g, d) && (a.c[c++] = d);
            b++
        }
        a.c.length = c
    }
    if (a.b != a.c.length) {
        for (var e = {}, c = b = 0; b < a.c.length;)
            d = a.c[b], S(e, d) || (a.c[c++] = d, e[d] = 1), b++;
        a.c.length = c
    }
};
g = Q.prototype;
g.get = function(a, b) {
    return S(this.g, a) ? this.g[a] : b
};
g.set = function(a, b) {
    S(this.g, a) || (this.b++, this.c.push(a), this.m++);
    this.g[a] = b
};
g.forEach = function(a, b) {
    for (var c = this.j(), d = 0; d < c.length; d++) {
        var e = c[d], f = this.get(e);
        a.call(b, f, e, this)
    }
};
g.clone = function() {
    return new Q(this)
};
g.s = function(a) {
    R(this);
    var b = 0, c = this.c, d = this.g, e = this.m, f = this, h = new P;
    h.next = function() {
        for (; ;) {
            if (e != f.m)
                throw Error("The map has changed since the iterator was created");
            if (b >= c.length)
                throw ja;
            var h = c[b++];
            return a ? h : d[h]
        }
    };
    return h
};
var S = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
var ka = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/, la = function(a) {
    if (T) {
        T=!1;
        var b = k.location;
        if (b) {
            var c = b.href;
            if (c && (c = (c = la(c)[3] || null) ? decodeURI(c) : c) && c != b.hostname)
                throw T=!0, Error();
        }
    }
    return a.match(ka)
}, T = F;
var U = function(a, b) {
    var c;
    if (a instanceof U)
        this.d = void 0 !== b ? b : a.d, ma(this, a.i), c = a.q, V(this), this.q = c, c = a.l, V(this), this.l = c, na(this, a.p), c = a.o, V(this), this.o = c, oa(this, a.f.clone()), c = a.n, V(this), this.n = c;
    else if (a && (c = la(String(a)))) {
        this.d=!!b;
        ma(this, c[1] || "", !0);
        var d = c[2] || "";
        V(this);
        this.q = W(d);
        d = c[3] || "";
        V(this);
        this.l = W(d, !0);
        na(this, c[4]);
        d = c[5] || "";
        V(this);
        this.o = W(d, !0);
        oa(this, c[6] || "", !0);
        c = c[7] || "";
        V(this);
        this.n = W(c)
    } else 
        this.d=!!b, this.f = new X(null, 0, this.d)
};
g = U.prototype;
g.i = "";
g.q = "";
g.l = "";
g.p = null;
g.o = "";
g.n = "";
g.t=!1;
g.d=!1;
g.toString = function() {
    var a = [], b = this.i;
    b && a.push(Y(b, pa, !0), ":");
    if (b = this.l) {
        a.push("//");
        var c = this.q;
        c && a.push(Y(c, pa, !0), "@");
        a.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
        b = this.p;
        null != b && a.push(":", String(b))
    }
    if (b = this.o)
        this.l && "/" != b.charAt(0) && a.push("/"), a.push(Y(b, "/" == b.charAt(0) ? qa : ra, !0));
    (b = this.f.toString()) && a.push("?", b);
    (b = this.n) && a.push("#", Y(b, sa));
    return a.join("")
};
g.clone = function() {
    return new U(this)
};
var ma = function(a, b, c) {
    V(a);
    a.i = c ? W(b, !0) : b;
    a.i && (a.i = a.i.replace(/:$/, ""))
}, na = function(a, b) {
    V(a);
    if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b)
            throw Error("Bad port number " + b);
        a.p = b
    } else 
        a.p = null
}, oa = function(a, b, c) {
    V(a);
    b instanceof X ? (a.f = b, a.f.r(a.d)) : (c || (b = Y(b, ta)), a.f = new X(b, 0, a.d))
}, V = function(a) {
    if (a.t)
        throw Error("Tried to modify a read-only Uri");
};
U.prototype.r = function(a) {
    this.d = a;
    this.f && this.f.r(a);
    return this
};
var W = function(a, b) {
    return a ? b ? decodeURI(a) : decodeURIComponent(a) : ""
}, Y = function(a, b, c) {
    return "string" == typeof a ? (a = encodeURI(a).replace(b, ua), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
}, ua = function(a) {
    a = a.charCodeAt(0);
    return "%" + (a>>4 & 15).toString(16) + (a & 15).toString(16)
}, pa = /[#\/\?@]/g, ra = /[\#\?:]/g, qa = /[\#\?]/g, ta = /[\#\?@]/g, sa = /#/g, X = function(a, b, c) {
    this.e = a || null;
    this.d=!!c
}, $ = function(a) {
    if (!a.a && (a.a = new Q, a.b = 0, a.e))
        for (var b = a.e.split("&"), c = 0; c < b.length; c++) {
            var d = b[c].indexOf("="),
            e = null, f = null;
            0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
            e = decodeURIComponent(e.replace(/\+/g, " "));
            e = Z(a, e);
            a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
        }
};
g = X.prototype;
g.a = null;
g.b = null;
g.add = function(a, b) {
    $(this);
    this.e = null;
    a = Z(this, a);
    var c = this.a.get(a);
    c || this.a.set(a, c = []);
    c.push(b);
    this.b++;
    return this
};
g.remove = function(a) {
    $(this);
    a = Z(this, a);
    return this.a.k(a) ? (this.e = null, this.b -= this.a.get(a).length, this.a.remove(a)) : !1
};
g.k = function(a) {
    $(this);
    a = Z(this, a);
    return this.a.k(a)
};
g.j = function() {
    $(this);
    for (var a = this.a.h(), b = this.a.j(), c = [], d = 0; d < b.length; d++)
        for (var e = a[d], f = 0; f < e.length; f++)
            c.push(b[d]);
    return c
};
g.h = function(a) {
    $(this);
    var b = [];
    if ("string" == typeof a)
        this.k(a) && (b = y(b, this.a.get(Z(this, a))));
    else {
        a = this.a.h();
        for (var c = 0; c < a.length; c++)
            b = y(b, a[c])
    }
    return b
};
g.set = function(a, b) {
    $(this);
    this.e = null;
    a = Z(this, a);
    this.k(a) && (this.b -= this.a.get(a).length);
    this.a.set(a, [b]);
    this.b++;
    return this
};
g.get = function(a, b) {
    var c = a ? this.h(a): [];
    return 0 < c.length ? String(c[0]) : b
};
g.toString = function() {
    if (this.e)
        return this.e;
    if (!this.a)
        return "";
    for (var a = [], b = this.a.j(), c = 0; c < b.length; c++)
        for (var d = b[c], e = encodeURIComponent(String(d)), d = this.h(d), f = 0; f < d.length; f++) {
            var h = e;
            "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
            a.push(h)
        }
    return this.e = a.join("&")
};
g.clone = function() {
    var a = new X;
    a.e = this.e;
    this.a && (a.a = this.a.clone(), a.b = this.b);
    return a
};
var Z = function(a, b) {
    var c = String(b);
    a.d && (c = c.toLowerCase());
    return c
};
X.prototype.r = function(a) {
    a&&!this.d && ($(this), this.e = null, this.a.forEach(function(a, c) {
        var d = c.toLowerCase();
        c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.e = null, this.a.set(Z(this, d), ca(a)), this.b += a.length))
    }, this));
    this.d = a
};
var va = function(a) {
    a = new U(a);
    var b = "&" + window.name;
    V(a);
    a.f.set(b, !0);
    b = a.f.h("parent");
    V(a);
    a.f.remove("parent");
    1 == b.length && (b = gadgets.rpc.getOrigin(String(b[0])), V(a), a.f.set("parent", b));
    b = "&" + window.name;
    V(a);
    a.f.remove(b);
    return a.toString()
}, wa = function(a, b, c, d, e, f, h) {
    if (!d ||!d.document.domain)
        return !1;
    var q = va(String(d.document.location.href));
    if (q.substr(0, c.length) != c)
        return !1;
    c = gadgets.util.getUrlParameters(q);
    if (!b ||!c.parent || b != gadgets.rpc.getOrigin(String(c.parent)))
        return !1;
    if (!e)
        return l("oauth2callbackUrl",
        a), d.oauth2verify.call(d, String(window.name), h)?!0 : !1;
    d.oauth2callback.call(d, a);
    try {
        f()
    } catch (r) {}
    return !0
}, xa = function() {
    try {
        return window.parent != window
    } catch (a) {}
    return !0
}, ya = function() {
    try {
        return !!window.opener
    } catch (a) {}
    return !0
}, za = function(a, b, c, d, e) {
    try {
        var f = xa(), h=!f && ya(), q=!0, r = null, z = function() {
            q && ia(r)
        };
        if (!f&&!h)
            return;
        var q = (h ||!f) && "keep_open" !== e, r = h ? window.opener: window.parent, s = va(b);
        try {
            var m;
            if (d && (m = r.frames[d], wa(a, c, s, m, !h, z, e)))
                return;
            for (b = 0; b < r.frames.length; ++b)
                if (m =
                r.frames[b], wa(a, c, s, m, !h, z, e)) {
                    q=!1;
                    break
                }
        } catch (Aa) {}
    } catch (Ba) {}
    z()
};
l("postmessage.onLoad", function() {
    window.name = "pmh" + String(2147483647 * shindig.random() | 0);
    var a = document.createElement("div"), b = "true" == document.getElementById("error").value, c = gadgets.rpc.getOrigin(document.getElementById("origin").value), b = c + (b ? "?" : "#") + document.getElementById("response-form-encoded").value, d = document.getElementById("relay-endpoint").value, e = null, f = document.getElementById("proxy");
    f && f.value && (e = f.value);
    var f = document.getElementById("after-redirect"), h = null;
    f && f.value && (h = f.value);
    a.appendChild(document.createTextNode(b));
    a.setAttribute("id", "postmessage-hello");
    za(b, d, c, e, h)
});
l("postmessage.closePopup", function() {
    var a = null;
    try {
        var b = xa(), c=!b && ya();
        if (!b&&!c)
            return;
        a = c ? window.opener : window.parent
    } catch (d) {}
    ia(a)
});

