this.gbar_ = this.gbar_ || {};
(function(_) {
    var window = this;
    try {
        var db, eb, fb, gb, hb, ib, jb, lb, tb, ub;
        _.$a = function(a) {
            var c = typeof a;
            if ("object" == c)
                if (a) {
                    if (a instanceof Array)
                        return "array";
                        if (a instanceof Object)
                            return c;
                            var d = Object.prototype.toString.call(a);
                            if ("[object Window]" == d)
                                return "object";
                                if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))
                                    return "array";
                                    if ("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))
                                        return "function"
                } else 
                    return "null";
                    else if ("function" == c && "undefined" == typeof a.call)
    return "object";
return c
};
_.ab = function(a) {
    return "array" == _.$a(a)
};
_.bb = function(a) {
    a && "function" == typeof a.Y && a.Y()
};
_.cb = function(a, c, d) {
    c < a.w ? a.b[c + a.k] = d : a.o[c] = d
};
db = function(a, c) {
    return a < c?-1 : a > c ? 1 : 0
};
eb = /[\x00&<>"']/;
fb = /\x00/g;
gb = /'/g;
hb = /"/g;
ib = />/g;
jb = /</g;
lb = /&/g;
_.mb = function(a) {
    return /^[\s\xa0]*$/.test(a)
};
_.nb = function(a, c) {
    try {
        return _.Za(a[c]), !0
    } catch (d) {}
    return !1
};
_.ob = function(a) {
    var c = a.length;
    if (0 < c) {
        for (var d = Array(c), e = 0; e < c; e++)
            d[e] = a[e];
        return d
    }
    return []
};
_.pb = function(a) {
    return _.ka.concat.apply(_.ka, arguments)
};
_.qb = function(a, c) {
    var d = (0, _.la)(a, c), e;
    (e = 0 <= d) && _.ka.splice.call(a, d, 1);
    return e
};
_.rb = function(a, c) {
    for (var d = 0, e = (0, _.ja)(String(a)).split("."), f = (0, _.ja)(String(c)).split("."), g = Math.max(e.length, f.length), h = 0; 0 == d && h < g; h++) {
        var l = e[h] || "", q = f[h] || "", r = RegExp("(\\d*)(\\D*)", "g"), w = RegExp("(\\d*)(\\D*)", "g");
        do {
            var E = r.exec(l) || ["", "", ""], P = w.exec(q) || ["", "", ""];
            if (0 == E[0].length && 0 == P[0].length)
                break;
            d = db(0 == E[1].length ? 0 : (0, window.parseInt)(E[1], 10), 0 == P[1].length ? 0 : (0, window.parseInt)(P[1], 10)) || db(0 == E[2].length, 0 == P[2].length) || db(E[2], P[2])
        }
        while (0 == d)
        }
    return d
};
_.sb = function(a) {
    if (!eb.test(a))
        return a;
    - 1 != a.indexOf("&") && (a = a.replace(lb, "&amp;"));
    - 1 != a.indexOf("<") && (a = a.replace(jb, "&lt;"));
    - 1 != a.indexOf(">") && (a = a.replace(ib, "&gt;"));
    - 1 != a.indexOf('"') && (a = a.replace(hb, "&quot;"));
    - 1 != a.indexOf("'") && (a = a.replace(gb, "&#39;"));
    - 1 != a.indexOf("\x00") && (a = a.replace(fb, "&#0;"));
    return a
};
tb = function(a) {
    var c = arguments.length;
    if (1 == c && _.ab(arguments[0]))
        return tb.apply(null, arguments[0]);
    for (var d = {}, e = 0; e < c; e++)
        d[arguments[e]]=!0;
    return d
};
ub = function(a) {
    var c = [], d = 0, e;
    for (e in a)
        c[d++] = e;
    return c
};
_.vb = function(a) {
    var c = [], d = 0, e;
    for (e in a)
        c[d++] = a[e];
    return c
};
_.wb = function(a, c, d) {
    for (var e in a)
        c.call(d, a[e], e, a)
};
_.xb = function(a) {
    var c = typeof a;
    return "object" == c && null != a || "function" == c
};
_.yb = function(a) {
    return "function" == _.$a(a)
};
_.zb = function(a) {
    return "number" == typeof a
};
_.Ab = function(a) {
    var c = _.$a(a);
    return "array" == c || "object" == c && "number" == typeof a.length
};
t: {
    var Cb = _.m.navigator;
    if (Cb) {
        var Db = Cb.userAgent;
        if (Db) {
            _.Bb = Db;
            break t
        }
    }
    _.Bb = ""
}
var Eb = function(a) {
    return - 1 != _.Bb.indexOf(a)
};
var Ib, Nb, Pb, Rb, Sb;
_.Fb = Eb("Opera") || Eb("OPR");
_.J = Eb("Trident") || Eb("MSIE");
_.Gb = Eb("Gecko")&&-1 == _.Bb.toLowerCase().indexOf("webkit")&&!(Eb("Trident") || Eb("MSIE"));
_.K =- 1 != _.Bb.toLowerCase().indexOf("webkit");
_.Hb = _.K && Eb("Mobile");
Ib = _.m.navigator || null;
_.Jb = Ib && Ib.platform || "";
_.Kb = Eb("Macintosh");
_.Lb = Eb("Windows");
_.Mb = Eb("Linux");
Nb = _.m.navigator || null;
_.Ob=!!Nb&&-1 != (Nb.appVersion || "").indexOf("X11");
Pb = function() {
    var a = _.m.document;
    return a ? a.documentMode : void 0
};
_.Qb = function() {
    var a = "", c;
    if (_.Fb && _.m.opera)
        return a = _.m.opera.version, _.yb(a) ? a() : a;
    _.Gb ? c = /rv\:([^\);]+)(\)|;)/ : _.J ? c = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : _.K && (c = /WebKit\/(\S+)/);
    c && (a = (a = c.exec(_.Bb)) ? a[1] : "");
    return _.J && (c = Pb(), c > (0, window.parseFloat)(a)) ? String(c) : a
}();
Rb = {};
_.L = function(a) {
    return Rb[a] || (Rb[a] = 0 <= _.rb(_.Qb, a))
};
Sb = _.m.document;
_.Tb = Sb && _.J ? Pb() || ("CSS1Compat" == Sb.compatMode ? (0, window.parseInt)(_.Qb, 10) : 5) : void 0;
var Vb, Wb;
_.Ub=!_.J || _.J && 9 <= _.Tb;
Vb=!_.J || _.J && 9 <= _.Tb;
Wb = _.J&&!_.L("9");
!_.K || _.L("528");
_.Gb && _.L("1.9b") || _.J && _.L("8") || _.Fb && _.L("9.5") || _.K && _.L("528");
_.Gb&&!_.L("8") || _.J && _.L("9");
_.Xb = function(a, c) {
    this.type = a;
    this.d = this.target = c;
    this.A=!1;
    this.Ze=!0
};
_.Xb.prototype.Y = function() {};
_.Xb.prototype.stopPropagation = function() {
    this.A=!0
};
_.Xb.prototype.preventDefault = function() {
    this.Ze=!1
};
_.Yb = _.J ? "focusin" : "DOMFocusIn";
_.Zb = _.K ? "webkitTransitionEnd" : _.Fb ? "otransitionend" : "transitionend";
_.$b = function(a, c) {
    _.Xb.call(this, a ? a.type : "");
    this.o = this.d = this.target = null;
    this.C = this.keyCode = this.button = this.clientY = this.clientX = 0;
    this.F = this.B = this.k = this.w=!1;
    this.b = this.state = null;
    a && this.init(a, c)
};
_.v(_.$b, _.Xb);
_.$b.prototype.init = function(a, c) {
    var d = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.d = c;
    var e = a.relatedTarget;
    e ? _.Gb && (_.nb(e, "nodeName") || (e = null)) : "mouseover" == d ? e = a.fromElement : "mouseout" == d && (e = a.toElement);
    this.o = e;
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.C = a.charCode || ("keypress" == d ? a.keyCode : 0);
    this.w = a.ctrlKey;
    this.k = a.altKey;
    this.B = a.shiftKey;
    this.F = a.metaKey;
    this.state =
    a.state;
    this.b = a;
    a.defaultPrevented && this.preventDefault()
};
_.$b.prototype.stopPropagation = function() {
    _.$b.G.stopPropagation.call(this);
    this.b.stopPropagation ? this.b.stopPropagation() : this.b.cancelBubble=!0
};
_.$b.prototype.preventDefault = function() {
    _.$b.G.preventDefault.call(this);
    var a = this.b;
    if (a.preventDefault)
        a.preventDefault();
    else if (a.returnValue=!1, Wb)
        try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                a.keyCode =- 1
    } catch (c) {}
};
_.$b.prototype.M = function() {
    return this.b
};
var cc;
_.ac = "closure_listenable_" + (1E6 * Math.random() | 0);
_.bc = function(a) {
    return !(!a ||!a[_.ac])
};
cc = 0;
var dc = function(a, c, d, e, f) {
    this.ob = a;
    this.b = null;
    this.src = c;
    this.type = d;
    this.kc=!!e;
    this.Fc = f;
    this.key=++cc;
    this.Gb = this.jc=!1
}, ec = function(a) {
    a.Gb=!0;
    a.ob = null;
    a.b = null;
    a.src = null;
    a.Fc = null
};
var fc = function(a) {
    this.src = a;
    this.b = {};
    this.d = 0
}, hc, gc;
fc.prototype.add = function(a, c, d, e, f) {
    var g = a.toString();
    a = this.b[g];
    a || (a = this.b[g] = [], this.d++);
    var h = gc(a, c, e, f);
    - 1 < h ? (c = a[h], d || (c.jc=!1)) : (c = new dc(c, this.src, g, !!e, f), c.jc = d, a.push(c));
    return c
};
fc.prototype.remove = function(a, c, d, e) {
    a = a.toString();
    if (!(a in this.b))
        return !1;
    var f = this.b[a];
    c = gc(f, c, d, e);
    return - 1 < c ? (ec(f[c]), _.ka.splice.call(f, c, 1), 0 == f.length && (delete this.b[a], this.d--), !0) : !1
};
hc = function(a, c) {
    var d = c.type;
    if (!(d in a.b))
        return !1;
    var e = _.qb(a.b[d], c);
    e && (ec(c), 0 == a.b[d].length && (delete a.b[d], a.d--));
    return e
};
_.ic = function(a, c, d, e, f) {
    a = a.b[c.toString()];
    c =- 1;
    a && (c = gc(a, d, e, f));
    return - 1 < c ? a[c] : null
};
gc = function(a, c, d, e) {
    for (var f = 0; f < a.length; ++f) {
        var g = a[f];
        if (!g.Gb && g.ob == c && g.kc==!!d && g.Fc == e)
            return f
    }
    return - 1
};
var jc, kc, lc, nc, pc, qc, wc, vc, rc, xc;
jc = "closure_lm_" + (1E6 * Math.random() | 0);
kc = {};
lc = 0;
_.M = function(a, c, d, e, f) {
    if (_.ab(c)) {
        for (var g = 0; g < c.length; g++)
            _.M(a, c[g], d, e, f);
        return null
    }
    d = _.mc(d);
    return _.bc(a) ? a.Ua(c, d, e, f) : nc(a, c, d, !1, e, f)
};
nc = function(a, c, d, e, f, g) {
    if (!c)
        throw Error("h");
    var h=!!f, l = _.oc(a);
    l || (a[jc] = l = new fc(a));
    d = l.add(c, d, e, f, g);
    if (d.b)
        return d;
    e = pc();
    d.b = e;
    e.src = a;
    e.ob = d;
    a.addEventListener ? a.addEventListener(c.toString(), e, h) : a.attachEvent(qc(c.toString()), e);
    lc++;
    return d
};
pc = function() {
    var a = rc, c = Vb ? function(d) {
        return a.call(c.src, c.ob, d)
    }
    : function(d) {
        d = a.call(c.src, c.ob, d);
        if (!d)
            return d
    };
    return c
};
_.sc = function(a, c, d, e, f) {
    if (_.ab(c)) {
        for (var g = 0; g < c.length; g++)
            _.sc(a, c[g], d, e, f);
        return null
    }
    d = _.mc(d);
    return _.bc(a) ? a.rd(c, d, e, f) : nc(a, c, d, !0, e, f)
};
_.tc = function(a, c, d, e, f) {
    if (_.ab(c))
        for (var g = 0; g < c.length; g++)
            _.tc(a, c[g], d, e, f);
    else 
        d = _.mc(d), _.bc(a) ? a.sd(c, d, e, f) : a && (a = _.oc(a)) && (c = _.ic(a, c, d, !!e, f)) && _.uc(c)
};
_.uc = function(a) {
    if (_.zb(a) ||!a || a.Gb)
        return !1;
    var c = a.src;
    if (_.bc(c))
        return c.hc(a);
    var d = a.type, e = a.b;
    c.removeEventListener ? c.removeEventListener(d, e, a.kc) : c.detachEvent && c.detachEvent(qc(d), e);
    lc--;
    (d = _.oc(c)) ? (hc(d, a), 0 == d.d && (d.src = null, c[jc] = null)) : ec(a);
    return !0
};
qc = function(a) {
    return a in kc ? kc[a] : kc[a] = "on" + a
};
wc = function(a, c, d, e) {
    var f = 1;
    if (a = _.oc(a))
        if (c = a.b[c.toString()])
            for (c = c.concat(), a = 0; a < c.length; a++) {
                var g = c[a];
                g && g.kc == d&&!g.Gb && (f&=!1 !== vc(g, e))
            }
    return Boolean(f)
};
vc = function(a, c) {
    var d = a.ob, e = a.Fc || a.src;
    a.jc && _.uc(a);
    return d.call(e, c)
};
rc = function(a, c) {
    if (a.Gb)
        return !0;
    if (!Vb) {
        var d = c || _.p("window.event"), e = new _.$b(d, this), f=!0;
        if (!(0 > d.keyCode || void 0 != d.returnValue)) {
            t:
            {
                var g=!1;
                if (0 == d.keyCode)
                    try {
                        d.keyCode =- 1;
                        break t
                } catch (h) {
                    g=!0
                }
                if (g || void 0 == d.returnValue)
                    d.returnValue=!0
            }
            d = [];
            for (g = e.d; g; g = g.parentNode)
                d.push(g);
            for (var g = a.type, l = d.length - 1; !e.A && 0 <= l; l--)
                e.d = d[l], f&=wc(d[l], g, !0, e);
            for (l = 0; !e.A && l < d.length; l++)
                e.d = d[l], f&=wc(d[l], g, !1, e)
            }
        return f
    }
    return vc(a, new _.$b(c, this))
};
_.oc = function(a) {
    a = a[jc];
    return a instanceof fc ? a : null
};
xc = "__closure_events_fn_" + (1E9 * Math.random()>>>0);
_.mc = function(a) {
    if (_.yb(a))
        return a;
    a[xc] || (a[xc] = function(c) {
        return a.handleEvent(c)
    });
    return a[xc]
};
var Dc;
_.yc = function(a) {
    _.y.call(this);
    this.C = a;
    this.U = {}
};
_.v(_.yc, _.y);
var zc = [];
_.yc.prototype.b = function(a, c, d, e) {
    return Cc(this, a, c, d, e)
};
_.yc.prototype.M = function(a, c, d, e, f) {
    return Cc(this, a, c, d, e, f)
};
var Cc = function(a, c, d, e, f, g) {
    _.ab(d) || (d && (zc[0] = d.toString()), d = zc);
    for (var h = 0; h < d.length; h++) {
        var l = _.M(c, d[h], e || a.handleEvent, f ||!1, g || a.C || a);
        if (!l)
            break;
        a.U[l.key] = l
    }
    return a
};
_.yc.prototype.F = function(a, c, d, e) {
    return Dc(this, a, c, d, e)
};
Dc = function(a, c, d, e, f, g) {
    if (_.ab(d))
        for (var h = 0; h < d.length; h++)
            Dc(a, c, d[h], e, f, g);
    else {
        c = _.sc(c, d, e || a.handleEvent, f, g || a.C || a);
        if (!c)
            return a;
        a.U[c.key] = c
    }
    return a
};
_.Ec = function(a) {
    _.wb(a.U, _.uc);
    a.U = {}
};
_.yc.prototype.L = function() {
    _.yc.G.L.call(this);
    _.Ec(this)
};
_.yc.prototype.handleEvent = function() {
    throw Error("i");
};
_.Fc = "StopIteration"in _.m ? _.m.StopIteration : Error("j");
_.Gc = function() {};
_.Gc.prototype.next = function() {
    throw _.Fc;
};
_.Gc.prototype.Lb = function() {
    return this
};
_.Hc = function(a, c) {
    this.d = {};
    this.b = [];
    this.o = this.k = 0;
    var d = arguments.length;
    if (1 < d) {
        if (d%2)
            throw Error("b");
        for (var e = 0; e < d; e += 2)
            this.set(arguments[e], arguments[e + 1])
    } else if (a) {
        a instanceof _.Hc ? (d = a.Ea(), e = a.Fa()) : (d = ub(a), e = _.vb(a));
        for (var f = 0; f < d.length; f++)
            this.set(d[f], e[f])
    }
};
_.k = _.Hc.prototype;
_.k.Fa = function() {
    Ic(this);
    for (var a = [], c = 0; c < this.b.length; c++)
        a.push(this.d[this.b[c]]);
    return a
};
_.k.Ea = function() {
    Ic(this);
    return this.b.concat()
};
_.k.cc = function() {
    return 0 == this.k
};
_.k.clear = function() {
    this.d = {};
    this.o = this.k = this.b.length = 0
};
_.k.remove = function(a) {
    return Jc(this.d, a) ? (delete this.d[a], this.k--, this.o++, this.b.length > 2 * this.k && Ic(this), !0) : !1
};
var Ic = function(a) {
    if (a.k != a.b.length) {
        for (var c = 0, d = 0; c < a.b.length;) {
            var e = a.b[c];
            Jc(a.d, e) && (a.b[d++] = e);
            c++
        }
        a.b.length = d
    }
    if (a.k != a.b.length) {
        for (var f = {}, d = c = 0; c < a.b.length;)
            e = a.b[c], Jc(f, e) || (a.b[d++] = e, f[e] = 1), c++;
        a.b.length = d
    }
};
_.k = _.Hc.prototype;
_.k.get = function(a, c) {
    return Jc(this.d, a) ? this.d[a] : c
};
_.k.set = function(a, c) {
    Jc(this.d, a) || (this.k++, this.b.push(a), this.o++);
    this.d[a] = c
};
_.k.forEach = function(a, c) {
    for (var d = this.Ea(), e = 0; e < d.length; e++) {
        var f = d[e], g = this.get(f);
        a.call(c, g, f, this)
    }
};
_.k.clone = function() {
    return new _.Hc(this)
};
_.k.Lb = function(a) {
    Ic(this);
    var c = 0, d = this.b, e = this.d, f = this.o, g = this, h = new _.Gc;
    h.next = function() {
        for (; ;) {
            if (f != g.o)
                throw Error("l");
            if (c >= d.length)
                throw _.Fc;
            var h = d[c++];
            return a ? h : e[h]
        }
    };
    return h
};
var Jc = function(a, c) {
    return Object.prototype.hasOwnProperty.call(a, c)
};
_.Kc = function(a) {
    if ("function" == typeof a.Fa)
        return a.Fa();
    if (_.s(a))
        return a.split("");
    if (_.Ab(a)) {
        for (var c = [], d = a.length, e = 0; e < d; e++)
            c.push(a[e]);
        return c
    }
    return _.vb(a)
};
_.Lc = function(a) {
    if ("function" == typeof a.Ea)
        return a.Ea();
    if ("function" != typeof a.Fa) {
        if (_.Ab(a) || _.s(a)) {
            var c = [];
            a = a.length;
            for (var d = 0; d < a; d++)
                c.push(d);
            return c
        }
        return ub(a)
    }
};
_.N = function() {
    _.y.call(this);
    this.K = new fc(this);
    this.Na = this;
    this.ka = null
};
_.v(_.N, _.y);
_.N.prototype[_.ac]=!0;
_.k = _.N.prototype;
_.k.zc = function() {
    return this.ka
};
_.k.Vd = function(a) {
    this.ka = a
};
_.k.addEventListener = function(a, c, d, e) {
    _.M(this, a, c, d, e)
};
_.k.removeEventListener = function(a, c, d, e) {
    _.tc(this, a, c, d, e)
};
_.k.dispatchEvent = function(a) {
    var c, d = this.zc();
    if (d)
        for (c = []; d; d = d.zc()
            )c.push(d);
    var d = this.Na, e = a.type || a;
    if (_.s(a))
        a = new _.Xb(a, d);
    else if (a instanceof _.Xb)
        a.target = a.target || d;
    else {
        var f = a;
        a = new _.Xb(e, d);
        _.ia(a, f)
    }
    var f=!0, g;
    if (c)
        for (var h = c.length - 1; !a.A && 0 <= h; h--)
            g = a.d = c[h], f = g.xb(e, !0, a) && f;
    a.A || (g = a.d = d, f = g.xb(e, !0, a) && f, a.A || (f = g.xb(e, !1, a) && f));
    if (c)
        for (h = 0; !a.A && h < c.length; h++)
            g = a.d = c[h], f = g.xb(e, !1, a) && f;
    return f
};
_.k.L = function() {
    _.N.G.L.call(this);
    this.Pc();
    this.ka = null
};
_.k.Ua = function(a, c, d, e) {
    return this.K.add(String(a), c, !1, d, e)
};
_.k.rd = function(a, c, d, e) {
    return this.K.add(String(a), c, !0, d, e)
};
_.k.sd = function(a, c, d, e) {
    return this.K.remove(String(a), c, d, e)
};
_.k.hc = function(a) {
    return hc(this.K, a)
};
_.k.Pc = function(a) {
    var c;
    if (this.K) {
        c = this.K;
        a = a && a.toString();
        var d = 0, e;
        for (e in c.b)
            if (!a || e == a) {
                for (var f = c.b[e], g = 0; g < f.length; g++)
                    ++d, ec(f[g]);
                    delete c.b[e];
                    c.d--
            }
        c = d
    } else 
        c = 0;
    return c
};
_.k.xb = function(a, c, d) {
    a = this.K.b[String(a)];
    if (!a)
        return !0;
    a = a.concat();
    for (var e=!0, f = 0; f < a.length; ++f) {
        var g = a[f];
        if (g&&!g.Gb && g.kc == c) {
            var h = g.ob, l = g.Fc || g.src;
            g.jc && this.hc(g);
            e=!1 !== h.call(l, d) && e
        }
    }
    return e && 0 != d.Ze
};
_.k.qd = function(a, c, d, e) {
    return _.ic(this.K, String(a), c, d, e)
};
var Mc = function(a) {
    _.m.setTimeout(function() {
        throw a;
    }, 0)
}, Nc, Oc = function() {
    var a = _.m.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
        var a = window.document.createElement("iframe");
        a.style.display = "none";
        a.src = "";
        window.document.documentElement.appendChild(a);
        var c = a.contentWindow, a = c.document;
        a.open();
        a.write("");
        a.close();
        var d = "callImmediate" + Math.random(), e = "file:" == c.location.protocol ? "*": c.location.protocol + "//" + c.location.host,
        a = (0, _.t)(function(a) {
            if (("*" == e || a.origin == e) && a.data == d)
                this.port1.onmessage()
        }, this);
        c.addEventListener("message", a, !1);
        this.port1 = {};
        this.port2 = {
            postMessage: function() {
                c.postMessage(d, e)
            }
        }
    });
    if ("undefined" !== typeof a&&!Eb("Trident")&&!Eb("MSIE")) {
        var c = new a, d = {}, e = d;
        c.port1.onmessage = function() {
            if (_.n(d.next)) {
                d = d.next;
                var a = d.je;
                d.je = null;
                a()
            }
        };
        return function(a) {
            e.next = {
                je: a
            };
            e = e.next;
            c.port2.postMessage(0)
        }
    }
    return "undefined" !== typeof window.document && "onreadystatechange"in window.document.createElement("script") ? function(a) {
        var c = window.document.createElement("script");
        c.onreadystatechange = function() {
            c.onreadystatechange = null;
            c.parentNode.removeChild(c);
            c = null;
            a();
            a = null
        };
        window.document.documentElement.appendChild(c)
    } : function(a) {
        _.m.setTimeout(a, 0)
    }
};
var Uc = function(a, c) {
    Pc || Qc();
    Rc || (Pc(), Rc=!0);
    Sc.push(new Tc(a, c))
}, Pc, Qc = function() {
    if (_.m.Promise && _.m.Promise.resolve) {
        var a = _.m.Promise.resolve();
        Pc = function() {
            a.then(Vc)
        }
    } else 
        Pc = function() {
            var a = Vc;
            !_.yb(_.m.setImmediate) || _.m.Window && _.m.Window.prototype.setImmediate == _.m.setImmediate ? (Nc || (Nc = Oc()), Nc(a)) : _.m.setImmediate(a)
        }
}, Rc=!1, Sc = [], Vc = function() {
    for (; Sc.length;) {
        var a = Sc;
        Sc = [];
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            try {
                d.b.call(d.scope)
            } catch (e) {
                Mc(e)
            }
        }
    }
    Rc=!1
}, Tc = function(a, c) {
    this.b = a;
    this.scope = c
};
_.Wc = function(a) {
    a.prototype.then = a.prototype.then;
    a.prototype.$goog_Thenable=!0
};
_.Xc = function(a) {
    if (!a)
        return !1;
    try {
        return !!a.$goog_Thenable
    } catch (c) {
        return !1
    }
};
_.Zc = function(a, c) {
    this.d = 0;
    this.A = void 0;
    this.b = this.w = null;
    this.k = this.o=!1;
    try {
        var d = this;
        a.call(c, function(a) {
            Yc(d, 2, a)
        }, function(a) {
            Yc(d, 3, a)
        })
    } catch (e) {
        Yc(this, 3, e)
    }
};
_.Zc.prototype.then = function(a, c, d) {
    return $c(this, _.yb(a) ? a : null, _.yb(c) ? c : null, d)
};
_.Wc(_.Zc);
var bd = function(a, c) {
    a.b && a.b.length || 2 != a.d && 3 != a.d || ad(a);
    a.b || (a.b = []);
    a.b.push(c)
}, $c = function(a, c, d, e) {
    var f = {
        lc: null,
        Se: null,
        Ve: null
    };
    f.lc = new _.Zc(function(a, h) {
        f.Se = c ? function(d) {
            try {
                var f = c.call(e, d);
                a(f)
            } catch (r) {
                h(r)
            }
        } : a;
        f.Ve = d ? function(c) {
            try {
                var f = d.call(e, c);
                !_.n(f) && "undefined" != typeof cd && c instanceof cd ? h(c) : a(f)
            } catch (r) {
                h(r)
            }
        } : h
    });
    f.lc.w = a;
    bd(a, f);
    return f.lc
};
_.Zc.prototype.C = function(a) {
    this.d = 0;
    Yc(this, 2, a)
};
_.Zc.prototype.B = function(a) {
    this.d = 0;
    Yc(this, 3, a)
};
var Yc = function(a, c, d) {
    if (0 == a.d) {
        if (a == d)
            c = 3, d = new TypeError("Promise cannot resolve to itself");
        else {
            if (_.Xc(d)) {
                a.d = 1;
                d.then(a.C, a.B, a);
                return 
            }
            if (_.xb(d))
                try {
                    var e = d.then;
                    if (_.yb(e)) {
                        dd(a, d, e);
                        return 
                    }
            } catch (f) {
                c = 3, d = f
            }
        }
        a.A = d;
        a.d = c;
        ad(a);
        3 != c || "undefined" != typeof cd && d instanceof cd || ed(a, d)
    }
}, dd = function(a, c, d) {
    a.d = 1;
    var e=!1, f = function(c) {
        e || (e=!0, a.C(c))
    }, g = function(c) {
        e || (e=!0, a.B(c))
    };
    try {
        d.call(c, f, g)
    } catch (h) {
        g(h)
    }
}, ad = function(a) {
    a.o || (a.o=!0, Uc(a.K, a))
};
_.Zc.prototype.K = function() {
    for (; this.b && this.b.length;) {
        var a = this.b;
        this.b = [];
        for (var c = 0; c < a.length; c++) {
            var d = a[c], e = this.A;
            if (2 == this.d)
                d.Se(e);
            else {
                if (d.lc)
                    for (var f = void 0, f = this; f && f.k; f = f.w)
                        f.k=!1;
                d.Ve(e)
            }
        }
    }
    this.o=!1
};
var ed = function(a, c) {
    a.k=!0;
    Uc(function() {
        a.k && fd.call(null, c)
    })
}, fd = Mc, cd = function(a) {
    _.ga.call(this, a)
};
_.v(cd, _.ga);
cd.prototype.name = "cancel";
_.gd = function(a, c) {
    _.N.call(this);
    this.k = a || 1;
    this.d = c || _.m;
    this.o = (0, _.t)(this.A, this);
    this.w = (0, _.fa)()
};
_.v(_.gd, _.N);
_.gd.prototype.enabled=!1;
_.gd.prototype.b = null;
_.gd.prototype.A = function() {
    if (this.enabled) {
        var a = (0, _.fa)() - this.w;
        0 < a && a < .8 * this.k ? this.b = this.d.setTimeout(this.o, this.k - a) : (this.b && (this.d.clearTimeout(this.b), this.b = null), this.dispatchEvent("tick"), this.enabled && (this.b = this.d.setTimeout(this.o, this.k), this.w = (0, _.fa)()))
    }
};
_.hd = function(a) {
    a.enabled=!0;
    a.b || (a.b = a.d.setTimeout(a.o, a.k), a.w = (0, _.fa)())
};
_.id = function(a) {
    a.enabled=!1;
    a.b && (a.d.clearTimeout(a.b), a.b = null)
};
_.gd.prototype.L = function() {
    _.gd.G.L.call(this);
    _.id(this);
    delete this.d
};
_.jd = function(a, c, d) {
    if (_.yb(a))
        d && (a = (0, _.t)(a, d));
    else if (a && "function" == typeof a.handleEvent)
        a = (0, _.t)(a.handleEvent, a);
    else 
        throw Error("m");
    return 2147483647 < c?-1 : _.m.setTimeout(a, c || 0)
};
var kd, ld;
kd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
_.md = function(a) {
    if (ld) {
        ld=!1;
        var c = _.m.location;
        if (c) {
            var d = c.href;
            if (d && (d = (d = _.md(d)[3] || null) ? (0, window.decodeURI)(d) : d) && d != c.hostname)
                throw ld=!0, Error();
        }
    }
    return a.match(kd)
};
ld = _.K;
_.nd = tb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
_.pd = function() {
    this.b = "";
    this.d = _.od
};
_.pd.prototype.nb=!0;
_.od = {};
_.pd.prototype.gb = function() {
    return this.b
};
_.qd = function(a) {
    var c = new _.pd;
    c.b = a;
    return c
};
_.rd = _.qd("");
_.td = function() {
    this.b = "";
    this.k = _.sd;
    this.d = null
};
_.td.prototype.Cd=!0;
_.td.prototype.Ub = function() {
    return this.d
};
_.td.prototype.nb=!0;
_.td.prototype.gb = function() {
    return this.b
};
_.ud = tb("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
_.vd = tb("link", "script", "style");
_.sd = {};
_.wd = function(a, c) {
    var d = new _.td;
    d.b = a;
    d.d = c;
    return d
};
_.xd = _.wd("", 0);
var yd;
yd=!_.J || _.J && 9 <= _.Tb;
_.zd=!_.Gb&&!_.J || _.J && _.J && 9 <= _.Tb || _.Gb && _.L("1.9.1");
_.Ad = _.J&&!_.L("9");
_.Bd = _.J || _.Fb || _.K;
var Cd, Ed, Gd;
_.Dd = function(a, c) {
    _.wb(c, function(c, e) {
        "style" == e ? a.style.cssText = c : "class" == e ? a.className = c : "for" == e ? a.htmlFor = c : e in Cd ? a.setAttribute(Cd[e], c) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? a.setAttribute(e, c) : a[e] = c
    })
};
Cd = {
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
};
_.Fd = function(a, c) {
    var d = c[0], e = c[1];
    if (!yd && e && (e.name || e.type)) {
        d = ["<", d];
        e.name && d.push(' name="', _.sb(e.name), '"');
        if (e.type) {
            d.push(' type="', _.sb(e.type), '"');
            var f = {};
            _.ia(f, e);
            delete f.type;
            e = f
        }
        d.push(">");
        d = d.join("")
    }
    d = a.createElement(d);
    e && (_.s(e) ? d.className = e : _.ab(e) ? d.className = e.join(" ") : _.Dd(d, e));
    2 < c.length && Ed(a, d, c);
    return d
};
Ed = function(a, c, d) {
    function e(d) {
        d && c.appendChild(_.s(d) ? a.createTextNode(d) : d)
    }
    for (var f = 2; f < d.length; f++) {
        var g = d[f];
        !_.Ab(g) || _.xb(g) && 0 < g.nodeType ? e(g) : (0, _.ma)(Gd(g) ? _.ob(g) : g, e)
    }
};
Gd = function(a) {
    if (a && "number" == typeof a.length) {
        if (_.xb(a))
            return "function" == typeof a.item || "string" == typeof a.item;
        if (_.yb(a))
            return "function" == typeof a.item
    }
    return !1
};
var Nd, Pd, Wd, Qd, Sd, Rd, Vd, Td, Od, Yd;
_.Hd = function(a, c) {
    var d;
    a instanceof _.Hd ? (this.hb = _.n(c) ? c : a.hb, _.Id(this, a.Bb), this.Vc = a.Vc, _.Jd(this, a.Ab), _.Kd(this, a.Bc), _.Ld(this, a.pd), _.Md(this, a.b.clone()), this.Ac = a.Ac) : a && (d = _.md(String(a))) ? (this.hb=!!c, _.Id(this, d[1] || "", !0), this.Vc = Nd(d[2] || ""), _.Jd(this, d[3] || "", !0), _.Kd(this, d[4]), _.Ld(this, d[5] || "", !0), _.Md(this, d[6] || "", !0), this.Ac = Nd(d[7] || "")) : (this.hb=!!c, this.b = new Od(null, 0, this.hb))
};
_.k = _.Hd.prototype;
_.k.Bb = "";
_.k.Vc = "";
_.k.Ab = "";
_.k.Bc = null;
_.k.pd = "";
_.k.Ac = "";
_.k.hb=!1;
_.k.toString = function() {
    var a = [], c = this.Bb;
    c && a.push(Pd(c, Qd, !0), ":");
    if (c = this.Ab) {
        a.push("//");
        var d = this.Vc;
        d && a.push(Pd(d, Qd, !0), "@");
        a.push((0, window.encodeURIComponent)(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
        c = this.Bc;
        null != c && a.push(":", String(c))
    }
    if (c = this.pd)
        this.Ab && "/" != c.charAt(0) && a.push("/"), a.push(Pd(c, "/" == c.charAt(0) ? Rd : Sd, !0));
    (c = this.b.toString()) && a.push("?", c);
    (c = this.Ac) && a.push("#", Pd(c, Td));
    return a.join("")
};
_.k.clone = function() {
    return new _.Hd(this)
};
_.Id = function(a, c, d) {
    a.Bb = d ? Nd(c, !0) : c;
    a.Bb && (a.Bb = a.Bb.replace(/:$/, ""));
    return a
};
_.Jd = function(a, c, d) {
    a.Ab = d ? Nd(c, !0) : c;
    return a
};
_.Kd = function(a, c) {
    if (c) {
        c = Number(c);
        if ((0, window.isNaN)(c) || 0 > c)
            throw Error("A`" + c);
        a.Bc = c
    } else 
        a.Bc = null;
    return a
};
_.Ld = function(a, c, d) {
    a.pd = d ? Nd(c, !0) : c;
    return a
};
_.Md = function(a, c, d) {
    c instanceof Od ? (a.b = c, Ud(a.b, a.hb)) : (d || (c = Pd(c, Vd)), a.b = new Od(c, 0, a.hb));
    return a
};
Nd = function(a, c) {
    return a ? c ? (0, window.decodeURI)(a) : (0, window.decodeURIComponent)(a) : ""
};
Pd = function(a, c, d) {
    return _.s(a) ? (a = (0, window.encodeURI)(a).replace(c, Wd), d && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
};
Wd = function(a) {
    a = a.charCodeAt(0);
    return "%" + (a>>4 & 15).toString(16) + (a & 15).toString(16)
};
Qd = /[#\/\?@]/g;
Sd = /[\#\?:]/g;
Rd = /[\#\?]/g;
Vd = /[\#\?@]/g;
Td = /#/g;
Od = function(a, c, d) {
    this.b = a || null;
    this.d=!!d
};
Yd = function(a) {
    if (!a.ca && (a.ca = new _.Hc, a.wa = 0, a.b))
        for (var c = a.b.split("&"), d = 0; d < c.length; d++) {
            var e = c[d].indexOf("="), f = null, g = null;
            0 <= e ? (f = c[d].substring(0, e), g = c[d].substring(e + 1)) : f = c[d];
            f = (0, window.decodeURIComponent)(f.replace(/\+/g, " "));
            f = Xd(a, f);
            a.add(f, g ? (0, window.decodeURIComponent)(g.replace(/\+/g, " ")) : "")
        }
};
_.k = Od.prototype;
_.k.ca = null;
_.k.wa = null;
_.k.add = function(a, c) {
    Yd(this);
    this.b = null;
    a = Xd(this, a);
    var d = this.ca.get(a);
    d || this.ca.set(a, d = []);
    d.push(c);
    this.wa++;
    return this
};
_.k.remove = function(a) {
    Yd(this);
    a = Xd(this, a);
    return Jc(this.ca.d, a) ? (this.b = null, this.wa -= this.ca.get(a).length, this.ca.remove(a)) : !1
};
_.k.clear = function() {
    this.ca = this.b = null;
    this.wa = 0
};
_.k.cc = function() {
    Yd(this);
    return 0 == this.wa
};
var Zd = function(a, c) {
    Yd(a);
    c = Xd(a, c);
    return Jc(a.ca.d, c)
};
_.k = Od.prototype;
_.k.Ea = function() {
    Yd(this);
    for (var a = this.ca.Fa(), c = this.ca.Ea(), d = [], e = 0; e < c.length; e++)
        for (var f = a[e], g = 0; g < f.length; g++)
            d.push(c[e]);
    return d
};
_.k.Fa = function(a) {
    Yd(this);
    var c = [];
    if (_.s(a))
        Zd(this, a) && (c = _.pb(c, this.ca.get(Xd(this, a))));
    else {
        a = this.ca.Fa();
        for (var d = 0; d < a.length; d++)
            c = _.pb(c, a[d])
    }
    return c
};
_.k.set = function(a, c) {
    Yd(this);
    this.b = null;
    a = Xd(this, a);
    Zd(this, a) && (this.wa -= this.ca.get(a).length);
    this.ca.set(a, [c]);
    this.wa++;
    return this
};
_.k.get = function(a, c) {
    var d = a ? this.Fa(a): [];
    return 0 < d.length ? String(d[0]) : c
};
_.k.toString = function() {
    if (this.b)
        return this.b;
    if (!this.ca)
        return "";
    for (var a = [], c = this.ca.Ea(), d = 0; d < c.length; d++)
        for (var e = c[d], f = (0, window.encodeURIComponent)(String(e)), e = this.Fa(e), g = 0; g < e.length; g++) {
            var h = f;
            "" !== e[g] && (h += "=" + (0, window.encodeURIComponent)(String(e[g])));
            a.push(h)
        }
    return this.b = a.join("&")
};
_.k.clone = function() {
    var a = new Od;
    a.b = this.b;
    this.ca && (a.ca = this.ca.clone(), a.wa = this.wa);
    return a
};
var Xd = function(a, c) {
    var d = String(c);
    a.d && (d = d.toLowerCase());
    return d
}, Ud = function(a, c) {
    c&&!a.d && (Yd(a), a.b = null, a.ca.forEach(function(a, c) {
        var f = c.toLowerCase();
        c != f && (this.remove(c), this.remove(f), 0 < a.length && (this.b = null, this.ca.set(Xd(this, f), _.ob(a)), this.wa += a.length))
    }, a));
    a.d = c
};

} catch (e) {
    _._DumpException(e)
}
try {
    var $d, ae, be, ce;
    $d = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    };
    ae = function(a, c) {
        c.push('"', a.replace(_.Ha, function(a) {
            if (a in $d)
                return $d[a];
            var c = a.charCodeAt(0), f = "\\u";
            16 > c ? f += "000" : 256 > c ? f += "00" : 4096 > c && (f += "0");
            return $d[a] = f + c.toString(16)
        }), '"')
    };
    be = function(a, c, d) {
        switch (typeof c) {
        case "string":
            ae(c, d);
            break;
        case "number":
            d.push((0, window.isFinite)(c)&&!(0, window.isNaN)(c) ? c : "null");
            break;
        case "boolean":
            d.push(c);
            break;
        case "undefined":
            d.push("null");
            break;
        case "object":
            if (null == c) {
                d.push("null");
                break
            }
            if (_.ab(c)) {
                var e = c.length;
                d.push("[");
                for (var f = "", g = 0; g < e; g++)
                    d.push(f), be(a, c[g], d), f = ",";
                d.push("]");
                break
            }
            d.push("{");
            e = "";
            for (f in c)
                Object.prototype.hasOwnProperty.call(c, f) && (g = c[f], "function" != typeof g && (d.push(e), ae(f, d), d.push(":"),
                be(a, g, d), e = ","));
            d.push("}");
            break;
        case "function":
            break;
        default:
            throw Error("e`" + typeof c);
        }
    };
    ce = function() {};
    _.de = function(a) {
        var c = [];
        be(new ce, a, c);
        return c.join("")
    };
    _.ee = function(a, c) {
        var d = Array.prototype.slice.call(arguments, 1);
        return function() {
            var c = d.slice();
            c.push.apply(c, arguments);
            return a.apply(this, c)
        }
    };
    _.fe = function(a, c, d) {
        a.b.set(c, d);
        return a
    };
    _.ge = function(a) {
        return _.m.JSON && _.m.JSON.stringify ? _.m.JSON.stringify(a.Xa()) : _.de(a.Xa())
    };
    _.he = function(a, c) {
        var d = _.ee(_.bb, c);
        a.Ka || (a.Ka = []);
        a.Ka.push(_.n(void 0) ? (0, _.t)(d, void 0) : d)
    };
    _.ie = function(a) {
        return a instanceof _.Hd ? a.clone() : new _.Hd(a, void 0)
    };
    _.O = function(a, c, d) {
        return _.Fd(window.document, arguments)
    };
    _.je = function(a) {
        a = _.md(a)[1] || null;
        !a && window.self.location && (a = window.self.location.protocol, a = a.substr(0, a.length - 1));
        return a ? a.toLowerCase() : ""
    };
    _.ke = function(a, c) {
        if ("function" == typeof a.forEach)
            a.forEach(c, void 0);
        else if (_.Ab(a) || _.s(a))(0, _.ma)(a, c, void 0);
        else 
            for (var d = _.Lc(a), e = _.Kc(a), f = e.length, g = 0; g < f; g++)
                c.call(void 0, e[g], d && d[g], a)
    };
    _.le = function(a, c, d) {
        return Math.min(Math.max(a, c), d)
    };
    _.me = function(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
            try {
                return eval("(" + a + ")")
        } catch (c) {}
        throw Error("d`" + a);
    };
    _.ne = function(a) {
        var c = Number(a);
        return 0 == c && _.mb(a) ? window.NaN : c
    };
    _.oe = function(a) {
        switch (a) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
            return !0;
        default:
            return !1
        }
    };
    var pe = function() {};
    pe.prototype.b = null;
    var re;
    re = function() {};
    _.v(re, pe);
    _.te = function(a) {
        return (a = _.se(a)) ? new window.ActiveXObject(a) : new window.XMLHttpRequest
    };
    _.se = function(a) {
        if (!a.d && "undefined" == typeof window.XMLHttpRequest && "undefined" != typeof window.ActiveXObject) {
            for (var c = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], d = 0; d < c.length; d++) {
                var e = c[d];
                try {
                    return new window.ActiveXObject(e), a.d = e
                } catch (f) {}
            }
            throw Error("C");
        }
        return a.d
    };
    _.qe = new re;

} catch (e) {
    _._DumpException(e)
}
try {
    var kf, Cf, Df, Ff, Jf, Kf, Lf, Of;
    kf = {};
    _.lf = function(a, c) {
        this.width = a;
        this.height = c
    };
    _.k = _.lf.prototype;
    _.k.clone = function() {
        return new _.lf(this.width, this.height)
    };
    _.k.cc = function() {
        return !(this.width * this.height)
    };
    _.k.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.k.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.k.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    _.mf = function() {
        this.b = "";
        this.d = kf
    };
    _.mf.prototype.nb=!0;
    _.mf.prototype.gb = function() {
        return this.b
    };
    _.mf.prototype.Cd=!0;
    _.mf.prototype.Ub = function() {
        return 1
    };
    _.nf = function(a) {
        return a.parentWindow || a.defaultView
    };
    _.of = function(a) {
        return _.K || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
    };
    _.Q = function(a, c) {
        this.x = _.n(a) ? a : 0;
        this.y = _.n(c) ? c : 0
    };
    _.Q.prototype.clone = function() {
        return new _.Q(this.x, this.y)
    };
    _.Q.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.Q.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.Q.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.pf = function(a) {
        return a instanceof _.td && a.constructor === _.td && a.k === _.sd ? a.b : "type_error:SafeHtml"
    };
    _.qf = function(a) {
        return a instanceof _.mf && a.constructor === _.mf && a.d === kf ? a.b : "type_error:SafeUrl"
    };
    _.rf = function(a, c) {
        if (a.contains && 1 == c.nodeType)
            return a == c || a.contains(c);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == c || Boolean(a.compareDocumentPosition(c) & 16);
        for (; c && a != c;)
            c = c.parentNode;
        return c == a
    };
    _.sf = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.tf = function(a) {
        for (var c; c = a.firstChild;)
            a.removeChild(c)
    };
    _.uf = function(a) {
        return a ? _.nf(a) : window
    };
    _.vf = function(a) {
        a = (a || window).document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new _.lf(a.clientWidth, a.clientHeight)
    };
    _.wf = function(a, c, d) {
        return 2 >= arguments.length ? _.ka.slice.call(a, c) : _.ka.slice.call(a, c, d)
    };
    _.xf = function(a) {
        this.b = a || _.m.document || window.document
    };
    _.xf.prototype.N = function(a) {
        return _.s(a) ? this.b.getElementById(a) : a
    };
    _.xf.prototype.d = function(a, c, d) {
        return _.Fd(this.b, arguments)
    };
    _.yf = function(a) {
        return "CSS1Compat" == a.b.compatMode
    };
    _.zf = function(a) {
        var c = a.b;
        a = _.of(c);
        c = _.nf(c);
        return _.J && _.L("10") && c.pageYOffset != a.scrollTop ? new _.Q(a.scrollLeft, a.scrollTop) : new _.Q(c.pageXOffset || a.scrollLeft, c.pageYOffset || a.scrollTop)
    };
    _.xf.prototype.appendChild = function(a, c) {
        a.appendChild(c)
    };
    _.xf.prototype.k = _.tf;
    _.xf.prototype.removeNode = _.sf;
    _.xf.prototype.contains = _.rf;
    _.Af = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    _.Bf = function(a) {
        return _.xb(a) && 1 == a.nodeType
    };
    Df = function(a, c, d, e) {
        _.ka.splice.apply(a, _.wf(arguments, 1))
    };
    _.Ef = function(a) {
        return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    };
    Ff = 0;
    _.Gf = function(a, c) {
        if ("textContent"in a)
            a.textContent = c;
        else if (3 == a.nodeType)
            a.data = c;
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;)
                a.removeChild(a.lastChild);
            a.firstChild.data = c
        } else 
            _.tf(a), a.appendChild(_.Af(a).createTextNode(String(c)))
    };
    _.Hf = function(a) {
        return a ? new _.xf(_.Af(a)) : Cf || (Cf = new _.xf)
    };
    _.If = function(a, c) {
        return a == c?!0 : a && c ? a.width == c.width && a.height == c.height : !1
    };
    Jf = function(a) {
        var c = _.s(void 0) ? _.Ef(void 0): "\\s";
        return a.replace(new RegExp("(^" + (c ? "|[" + c + "]+" : "") + ")([a-z])", "g"), function(a, c, f) {
            return c + f.toUpperCase()
        })
    };
    Kf = function() {
        return "transform".replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        })
    };
    Lf = function(a, c) {
        return c in a ? a[c] : void 0
    };
    _.Mf = function(a) {
        for (var c in a)
            return !1;
        return !0
    };
    _.Nf = function(a) {
        return a[_.ca] || (a[_.ca]=++Ff)
    };
    _.Pf = function(a, c, d) {
        _.ab(d) && (d = d.join(" "));
        var e = "aria-" + c;
        "" === d || void 0 == d ? (Of || (Of = {
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
        }), d = Of, c in d ? a.setAttribute(e, d[c]) : a.removeAttribute(e)) : a.setAttribute(e, d)
    };
    var Tf;
    _.Sf = function(a, c, d, e, f) {
        if (!(_.J || _.K && _.L("525")))
            return !0;
        if (_.Kb && f)
            return _.Qf(a);
        if (f&&!e)
            return !1;
        _.zb(c) && (c = _.Rf(c));
        if (!d && (17 == c || 18 == c || _.Kb && 91 == c))
            return !1;
        if (_.K && e && d)
            switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
            }
        if (_.J && e && c == a)
            return !1;
        switch (a) {
        case 13:
            return !0;
        case 27:
            return !_.K
        }
        return _.Qf(a)
    };
    _.Qf = function(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || _.K && 0 == a)
            return !0;
        switch (a) {
        case 32:
        case 63:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
            return !0;
        default:
            return !1
        }
    };
    _.Rf = function(a) {
        if (_.Gb)
            a = Tf(a);
        else if (_.Kb && _.K)
            t: switch (a) {
        case 93:
            a = 91;
            break t
        }
        return a
    };
    Tf = function(a) {
        switch (a) {
        case 61:
            return 187;
        case 59:
            return 186;
        case 173:
            return 189;
        case 224:
            return 91;
        case 0:
            return 224;
        default:
            return a
        }
    };
    var Uf, Vf, Wf;
    Wf = Vf = Uf=!1;
    var Xf = _.Bb;
    Xf && ( - 1 != Xf.indexOf("Firefox")||-1 != Xf.indexOf("Camino") || ( - 1 != Xf.indexOf("iPad") ? Vf=!0 : - 1 != Xf.indexOf("iPhone")||-1 != Xf.indexOf("iPod") ? Uf=!0 : - 1 != Xf.indexOf("Chrome") && (Wf=!0)));
    _.Yf = Uf;
    _.Zf = Vf;
    _.$f = Wf;
    _.ag = function() {
        return _.K ? "-webkit" : _.Gb ? "-moz" : _.J ? "-ms" : _.Fb ? "-o" : null
    };
    _.bg = function(a, c, d, e) {
        this.top = a;
        this.right = c;
        this.bottom = d;
        this.left = e
    };
    _.k = _.bg.prototype;
    _.k.clone = function() {
        return new _.bg(this.top, this.right, this.bottom, this.left)
    };
    _.k.contains = function(a) {
        return this && a ? a instanceof _.bg ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    _.k.expand = function(a, c, d, e) {
        _.xb(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += c, this.bottom += d, this.left -= e);
        return this
    };
    _.k.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.k.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.k.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    _.cg = function(a, c, d, e) {
        this.left = a;
        this.top = c;
        this.width = d;
        this.height = e
    };
    _.k = _.cg.prototype;
    _.k.clone = function() {
        return new _.cg(this.left, this.top, this.width, this.height)
    };
    _.k.contains = function(a) {
        return a instanceof _.cg ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
    };
    _.k.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.k.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.k.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var fg, lg, sg, ig;
    _.dg = function(a, c) {
        var d = _.Af(a);
        return d.defaultView && d.defaultView.getComputedStyle && (d = d.defaultView.getComputedStyle(a, null)) ? d[c] || d.getPropertyValue(c) || "" : ""
    };
    _.eg = function(a, c) {
        return _.dg(a, c) || (a.currentStyle ? a.currentStyle[c] : null) || a.style && a.style[c]
    };
    fg = function(a) {
        var c;
        try {
            c = a.getBoundingClientRect()
        } catch (d) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        _.J && a.ownerDocument.body && (a = a.ownerDocument, c.left -= a.documentElement.clientLeft + a.body.clientLeft, c.top -= a.documentElement.clientTop + a.body.clientTop);
        return c
    };
    _.gg = function(a) {
        if (_.J&&!(_.J && 8 <= _.Tb))
            return a.offsetParent;
        var c = _.Af(a), d = _.eg(a, "position"), e = "fixed" == d || "absolute" == d;
        for (a = a.parentNode; a && a != c; a = a.parentNode)
            if (d = _.eg(a, "position"), e = e && "static" == d && a != c.documentElement && a != c.body, !e && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == d || "absolute" == d || "relative" == d))
                return a;
        return null
    };
    _.hg = function(a) {
        var c, d = _.Af(a), e = _.eg(a, "position"), f = _.Gb && d.getBoxObjectFor&&!a.getBoundingClientRect && "absolute" == e && (c = d.getBoxObjectFor(a)) && (0 > c.screenX || 0 > c.screenY), g = new _.Q(0, 0), h;
        c = d ? _.Af(d) : window.document;
        h=!_.J || _.J && 9 <= _.Tb || _.yf(_.Hf(c)) ? c.documentElement : c.body;
        if (a == h)
            return g;
        if (a.getBoundingClientRect)
            c = fg(a), a = _.zf(_.Hf(d)), g.x = c.left + a.x, g.y = c.top + a.y;
        else if (d.getBoxObjectFor&&!f)
            c = d.getBoxObjectFor(a), a = d.getBoxObjectFor(h), g.x = c.screenX - a.screenX, g.y = c.screenY - a.screenY;
        else {
            c = a;
            do {
                g.x += c.offsetLeft;
                g.y += c.offsetTop;
                c != a && (g.x += c.clientLeft || 0, g.y += c.clientTop || 0);
                if (_.K && "fixed" == _.eg(c, "position")) {
                    g.x += d.body.scrollLeft;
                    g.y += d.body.scrollTop;
                    break
                }
                c = c.offsetParent
            }
            while (c && c != a);
            if (_.Fb || _.K && "absolute" == e)
                g.y -= d.body.offsetTop;
            for (c = a; (c = _.gg(c)) && c != d.body && c != h;)
                g.x -= c.scrollLeft, _.Fb && "TR" == c.tagName || (g.y -= c.scrollTop)
        }
        return g
    };
    _.jg = function(a) {
        var c;
        if (a.getBoundingClientRect)
            c = fg(a), c = new _.Q(c.left, c.top);
        else {
            c = _.zf(_.Hf(a));
            var d = _.hg(a);
            c = new _.Q(d.x - c.x, d.y - c.y)
        }
        if (_.Gb&&!_.L(12)) {
            i:
            {
                d = Kf();
                if (void 0 === a.style[d] && (d = (_.K ? "Webkit" : _.Gb ? "Moz" : _.J ? "ms" : _.Fb ? "O" : null) + Jf(d), void 0 !== a.style[d])) {
                    d = _.ag() + "-transform";
                    break i
                }
                d = "transform"
            }
            a = (a = _.eg(a, d) || _.eg(a, "transform")) ? (a = a.match(ig)) ? new _.Q((0, window.parseFloat)(a[1]), (0, window.parseFloat)(a[2])) : new _.Q(0, 0) : new _.Q(0, 0);
            a = new _.Q(c.x + a.x, c.y + a.y)
        } else 
            a = c;
        return a
    };
    _.kg = function(a, c) {
        "number" == typeof a && (a = (c ? Math.round(a) : a) + "px");
        return a
    };
    _.mg = function(a) {
        var c = lg;
        if ("none" != _.eg(a, "display"))
            return c(a);
        var d = a.style, e = d.display, f = d.visibility, g = d.position;
        d.visibility = "hidden";
        d.position = "absolute";
        d.display = "inline";
        a = c(a);
        d.display = e;
        d.position = g;
        d.visibility = f;
        return a
    };
    lg = function(a) {
        var c = a.offsetWidth, d = a.offsetHeight, e = _.K&&!c&&!d;
        return _.n(c)&&!e ||!a.getBoundingClientRect ? new _.lf(c, d) : (a = fg(a), new _.lf(a.right - a.left, a.bottom - a.top))
    };
    _.ng = function(a) {
        var c = _.hg(a);
        a = _.mg(a);
        return new _.cg(c.x, c.y, a.width, a.height)
    };
    _.og = function(a, c) {
        a.style.display = c ? "" : "none"
    };
    _.pg = function(a) {
        return "rtl" == _.eg(a, "direction")
    };
    _.qg = _.Gb ? "MozUserSelect" : _.K ? "WebkitUserSelect" : null;
    _.rg = function(a, c) {
        if (/^\d+px?$/.test(c))
            return (0, window.parseInt)(c, 10);
        var d = a.style.left, e = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = c;
        var f = a.style.pixelLeft;
        a.style.left = d;
        a.runtimeStyle.left = e;
        return f
    };
    sg = function(a, c) {
        var d = a.currentStyle ? a.currentStyle[c]: null;
        return d ? _.rg(a, d) : 0
    };
    _.tg = function(a, c) {
        if (_.J) {
            var d = sg(a, c + "Left"), e = sg(a, c + "Right"), f = sg(a, c + "Top"), g = sg(a, c + "Bottom");
            return new _.bg(f, e, g, d)
        }
        d = _.dg(a, c + "Left");
        e = _.dg(a, c + "Right");
        f = _.dg(a, c + "Top");
        g = _.dg(a, c + "Bottom");
        return new _.bg((0, window.parseFloat)(f), (0, window.parseFloat)(e), (0, window.parseFloat)(g), (0, window.parseFloat)(d))
    };
    ig = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
    _.ug = function(a, c, d) {
        _.y.call(this);
        this.d = a;
        this.k = c || 0;
        this.C = d;
        this.b = (0, _.t)(this.o, this)
    };
    _.v(_.ug, _.y);
    _.ug.prototype.aa = 0;
    _.ug.prototype.L = function() {
        _.ug.G.L.call(this);
        _.vg(this);
        delete this.d;
        delete this.C
    };
    _.wg = function(a) {
        _.vg(a);
        a.aa = _.jd(a.b, _.n(void 0) ? void 0 : a.k)
    };
    _.vg = function(a) {
        0 != a.aa && _.m.clearTimeout(a.aa);
        a.aa = 0
    };
    _.ug.prototype.o = function() {
        this.aa = 0;
        this.d && this.d.call(this.C)
    };
    var yg, Ag;
    _.xg = {};
    yg = null;
    _.zg = function(a) {
        a = _.Nf(a);
        delete _.xg[a];
        _.Mf(_.xg) && yg && _.vg(yg)
    };
    _.Bg = function() {
        yg || (yg = new _.ug(function() {
            Ag()
        }, 20));
        var a = yg;
        0 != a.aa || _.wg(a)
    };
    Ag = function() {
        var a = (0, _.fa)();
        _.wb(_.xg, function(c) {
            _.Cg(c, a)
        });
        _.Mf(_.xg) || _.Bg()
    };
    _.Cg = function(a, c) {
        a.k = (c - a.w) / (a.O - a.w);
        1 <= a.k && (a.k = 1);
        _.Dg(a, a.k);
        1 == a.k ? (a.b = 0, _.zg(a), a.d("finish"), a.C()) : 1 == a.b && a.F()
    };
    _.Dg = function(a, c) {
        _.yb(a.H) && (c = a.H(c));
        a.o = Array(a.A.length);
        for (var d = 0; d < a.A.length; d++)
            a.o[d] = (a.R[d] - a.A[d]) * c + a.A[d]
    };
    _.Eg = function() {};
    _.ba(_.Eg);
    _.Eg.prototype.b = 0;
    _.Fg = function(a) {
        return ":" + (a.b++).toString(36)
    };
    _.R = function(a) {
        _.N.call(this);
        this.d = a || _.Hf();
        this.X = Gg;
        this.aa = null;
        this.ea=!1;
        this.D = null;
        this.M = void 0;
        this.C = this.o = this.b = this.w = null;
        this.ta=!1
    };
    _.v(_.R, _.N);
    _.R.prototype.za = _.Eg.P();
    var Gg = null;
    _.R.prototype.getId = function() {
        return this.aa || (this.aa = _.Fg(this.za))
    };
    _.R.prototype.N = function() {
        return this.D
    };
    var Hg = function(a, c) {
        if (a == c)
            throw Error("L");
        var d;
        if (d = c && a.b && a.aa) {
            d = a.b;
            var e = a.aa;
            d = d.C && e ? Lf(d.C, e) || null : null
        }
        if (d && a.b != c)
            throw Error("L");
        a.b = c;
        _.R.G.Vd.call(a, c)
    };
    _.R.prototype.Vd = function(a) {
        if (this.b && this.b != a)
            throw Error("M");
        _.R.G.Vd.call(this, a)
    };
    _.R.prototype.jb = function() {
        this.D = this.d.b.createElement("div")
    };
    _.R.prototype.rb = function(a) {
        Ig(this, a)
    };
    var Ig = function(a, c, d) {
        if (a.ea)
            throw Error("N");
        a.D || a.jb();
        c ? c.insertBefore(a.D, d || null) : a.d.b.body.appendChild(a.D);
        a.b&&!a.b.ea || a.ga()
    };
    _.k = _.R.prototype;
    _.k.Ra = function(a) {
        this.D = a
    };
    _.k.ga = function() {
        this.ea=!0;
        _.Jg(this, function(a) {
            !a.ea && a.N() && a.ga()
        })
    };
    _.k.qa = function() {
        _.Jg(this, function(a) {
            a.ea && a.qa()
        });
        this.M && _.Ec(this.M);
        this.ea=!1
    };
    _.k.L = function() {
        this.ea && this.qa();
        this.M && (this.M.Y(), delete this.M);
        _.Jg(this, function(a) {
            a.Y()
        });
        !this.ta && this.D && _.sf(this.D);
        this.b = this.w = this.D = this.C = this.o = null;
        _.R.G.L.call(this)
    };
    _.k.Za = function(a, c, d) {
        if (a.ea && (d ||!this.ea))
            throw Error("N");
        if (0 > c || c > _.Kg(this))
            throw Error("P");
        this.C && this.o || (this.C = {}, this.o = []);
        if (a.b == this) {
            var e = a.getId();
            this.C[e] = a;
            _.qb(this.o, a)
        } else {
            var e = this.C, f = a.getId();
            if (f in e)
                throw Error("a`" + f);
            e[f] = a
        }
        Hg(a, this);
        Df(this.o, c, 0, a);
        a.ea && this.ea && a.b == this ? (d = this.D, d.insertBefore(a.N(), d.childNodes[c] || null)) : d ? (this.D || this.jb(), c = _.Lg(this, c + 1), Ig(a, this.D, c ? c.D : null)) : this.ea&&!a.ea && a.D && a.D.parentNode && 1 == a.D.parentNode.nodeType && a.ga()
    };
    _.Kg = function(a) {
        return a.o ? a.o.length : 0
    };
    _.Lg = function(a, c) {
        return a.o ? a.o[c] || null : null
    };
    _.Jg = function(a, c, d) {
        a.o && (0, _.ma)(a.o, c, d)
    };
    _.R.prototype.removeChild = function(a, c) {
        if (a) {
            var d = _.s(a) ? a: a.getId();
            a = this.C && d ? Lf(this.C, d) || null : null;
            if (d && a) {
                var e = this.C;
                d in e && delete e[d];
                _.qb(this.o, a);
                c && (a.qa(), a.D && _.sf(a.D));
                Hg(a, null)
            }
        }
        if (!a)
            throw Error("Q");
        return a
    };
    _.Mg = function(a) {
        _.N.call(this);
        this.D = a;
        a = _.J ? "focusout" : "blur";
        this.b = _.M(this.D, _.J ? "focusin" : "focus", this, !_.J);
        this.d = _.M(this.D, a, this, !_.J)
    };
    _.v(_.Mg, _.N);
    _.Mg.prototype.handleEvent = function(a) {
        var c = new _.$b(a.b);
        c.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
        this.dispatchEvent(c)
    };
    _.Mg.prototype.L = function() {
        _.Mg.G.L.call(this);
        _.uc(this.b);
        _.uc(this.d);
        delete this.D
    };
    _.Ng = function(a, c) {
        a.innerHTML = _.pf(c)
    };
} catch (e) {
    _._DumpException(e)
}
try {
    var bl = function(a, c) {
        _.Xb.call(this, a);
        this.x = c.o[0];
        this.y = c.o[1];
        this.state = c.b
    }, fl, gl, jl, kl, nl, pl, sl, El, Fl, Gl, Hl, Il, Jl, Kl, Ll, Ml, Nl, Ol, Pl, Rl, Sl, Ul, $l, bm, cm, dm, em, fm, lm, mm, nm;
    _.v(bl, _.Xb);
    var cl = function() {
        _.N.call(this);
        this.b = 0;
        this.O = this.w = null
    };
    _.v(cl, _.N);
    cl.prototype.M = function() {
        this.d("begin")
    };
    cl.prototype.C = function() {
        this.d("end")
    };
    cl.prototype.d = function(a) {
        this.dispatchEvent(a)
    };
    var dl = function(a, c) {
        var d, e, f, g;
        d = window.document;
        d = c || d;
        if (d.querySelectorAll && d.querySelector && a)
            return d.querySelectorAll("" + (a ? "." + a : ""));
        if (a && d.getElementsByClassName) {
            var h = d.getElementsByClassName(a);
            return h
        }
        h = d.getElementsByTagName("*");
        if (a) {
            g = {};
            for (e = f = 0; d = h[e]; e++) {
                var l = d.className;
                "function" == typeof l.split && _.ra(l.split(/\s+/), a) && (g[f++] = d)
            }
            g.length = f;
            return g
        }
        return h
    }, el = function(a, c, d, e) {
        cl.call(this);
        if (!_.ab(a) ||!_.ab(c))
            throw Error("H");
        if (a.length != c.length)
            throw Error("I");
        this.A = a;
        this.R = c;
        this.J = d;
        this.H = e;
        this.o = []
    };
    _.v(el, cl);
    el.prototype.k = 0;
    el.prototype.L = function() {
        0 != this.b && (_.zg(this), this.b = 0, _.Dg(this, this.k), this.d("stop"), this.C());
        this.d("destroy");
        el.G.L.call(this)
    };
    el.prototype.F = function() {
        this.d("animate")
    };
    el.prototype.d = function(a) {
        this.dispatchEvent(new bl(a, this))
    };
    _.X = function(a, c) {
        var d = c || window.document, e = null;
        d.querySelectorAll && d.querySelector ? e = d.querySelector("." + a) : e = dl(a, c)[0];
        return e || null
    };
    fl = [1, 4, 2];
    gl = function(a) {
        _.D(this, a, 0, [])
    };
    _.v(gl, _.C);
    _.hl = function(a) {
        _.D(this, a, 0, [])
    };
    _.v(_.hl, _.C);
    var il = function(a, c, d, e, f) {
        el.call(this, c, d, e, f);
        this.U = a
    };
    _.v(il, el);
    il.prototype.B = _.Ya;
    il.prototype.F = function() {
        this.B();
        il.G.F.call(this)
    };
    il.prototype.C = function() {
        this.B();
        il.G.C.call(this)
    };
    il.prototype.M = function() {
        this.B();
        il.G.M.call(this)
    };
    jl = function(a) {
        return a.b
    };
    kl = function(a) {
        return _.zd && void 0 != a.children ? a.children : (0, _.na)(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    };
    _.ll = function(a) {
        return a
    };
    nl = function(a, c, d, e, f) {
        _.ml.b(c, d, e, f || a.C || a, a)
    };
    _.ol = function(a, c, d, e) {
        d.b(c, e, void 0, a.C || a, a)
    };
    pl = function(a) {
        return (_.Ub ? 0 == a.b.button : "click" == a.type?!0 : !!(a.b.button & fl[0]))&&!(_.K && _.Kb && a.w)
    };
    _.ql = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random())^(0, _.fa)()).toString(36)
    };
    _.rl = function() {
        return _.G(_.I(), _.hl, 2)
    };
    sl = function(a) {
        _.D(this, a, 0, [])
    };
    _.v(sl, _.C);
    var tl = function(a) {
        _.D(this, a, 0, [])
    };
    _.v(tl, _.C);
    var ul = function(a) {
        _.D(this, a, 0, [])
    };
    _.v(ul, _.C);
    var vl = function(a) {
        _.D(this, a, 0, [])
    };
    _.v(vl, _.C);
    var wl = function(a) {
        _.D(this, a, 0, [])
    };
    _.v(wl, _.C);
    var xl = function(a) {
        _.D(this, a, 0, [])
    };
    _.v(xl, _.C);
    var yl = function(a) {
        _.D(this, a, 0, [])
    };
    _.v(yl, _.C);
    var zl = function(a) {
        _.D(this, a, 0, [])
    };
    _.v(zl, _.C);
    var Al = function(a) {
        _.D(this, a, 0, [])
    };
    _.v(Al, _.C);
    var Bl = function(a) {
        _.D(this, a, 0, [])
    };
    _.v(Bl, _.C);
    var Cl = function(a) {
        _.D(this, a, 0, [])
    };
    _.v(Cl, _.C);
    Cl.prototype.vc = function() {
        return _.G(this, gl, 7)
    };
    var Dl = function(a) {
        _.D(this, a, 0, [])
    };
    _.v(Dl, _.C);
    El = /[()']|%5B|%5D|%25/g;
    Fl = {
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "%5B": "[",
        "%5D": "]",
        "%25": "%"
    };
    Gl = /^(?:(?:https?|mailto):|[^&:/?#]*(?:[/?#]|$))/i;
    Hl = function(a) {
        try {
            var c = (0, window.encodeURI)(a)
        } catch (d) {
            return "about:invalid#zClosurez"
        }
        return c.replace(El, function(a) {
            return Fl[a]
        })
    };
    Il = function(a) {
        a = a.tabIndex;
        return _.zb(a) && 0 <= a && 32768 > a
    };
    Jl = function(a) {
        a = a.getAttributeNode("tabindex");
        return null != a && a.specified
    };
    Kl = {
        IMG: " ",
        BR: "\n"
    };
    Ll = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    };
    Ml = /[?&]($|#)/;
    Nl = /#|$/;
    Ol = function(a, c, d, e) {
        for (var f = d.length; 0 <= (c = a.indexOf(d, c)) && c < e;) {
            var g = a.charCodeAt(c - 1);
            if (38 == g || 63 == g)
                if (g = a.charCodeAt(c + f), !g || 61 == g || 38 == g || 35 == g)
                    return c;
            c += f + 1
        }
        return - 1
    };
    Pl = function(a, c, d) {
        if (_.ab(c))
            for (var e = 0; e < c.length; e++)
                Pl(a, String(c[e]), d);
        else 
            null != c && d.push("&", a, "" === c ? "" : "=", (0, window.encodeURIComponent)(String(c)))
    };
    _.Ql = function(a) {
        if (a[1]) {
            var c = a[0], d = c.indexOf("#");
            0 <= d && (a.push(c.substr(d)), a[0] = c = c.substr(0, d));
            d = c.indexOf("?");
            0 > d ? a[1] = "?" : d == c.length - 1 && (a[1] = void 0)
        }
        return a.join("")
    };
    Rl = function(a) {
        if (a instanceof _.mf)
            return a;
        a = a.nb ? a.gb() : String(a);
        a = Gl.test(a) ? Hl(a) : "about:invalid#zClosurez";
        var c = new _.mf;
        c.b = a;
        return c
    };
    Sl = function(a) {
        return _.uf().matchMedia("(-webkit-min-device-pixel-ratio: " + a + "),(min--moz-device-pixel-ratio: " + a + "),(min-resolution: " + a + "dppx)").matches ? a : 0
    };
    _.Tl = function(a, c, d) {
        if (!(a.nodeName in Ll))
            if (3 == a.nodeType)
                d ? c.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : c.push(a.nodeValue);
            else if (a.nodeName in Kl)
                c.push(Kl[a.nodeName]);
            else 
                for (a = a.firstChild; a;)
                    _.Tl(a, c, d), a = a.nextSibling
    };
    Ul = function(a, c, d, e) {
        if (null != a)
            for (a = a.firstChild; a;) {
                if (c(a) && (d.push(a), e) || Ul(a, c, d, e))
                    return !0;
                    a = a.nextSibling
            }
        return !1
    };
    _.Vl = function(a, c) {
        for (; a && 1 != a.nodeType;)
            a = c ? a.nextSibling : a.previousSibling;
        return a
    };
    _.Wl = function(a, c) {
        for (var d in c)
            Pl(d, c[d], a);
        return a
    };
    _.Xl = function(a, c, d) {
        d ? _.T(a, c) : _.U(a, c)
    };
    _.Yl = function(a, c) {
        var d;
        d = c instanceof _.mf ? c : Rl(c);
        a.href = _.qf(d)
    };
    _.Zl = function(a, c) {
        var d;
        d = c instanceof _.mf ? c : Rl(c);
        a.href = _.qf(d)
    };
    $l = function(a, c, d, e, f) {
        if (2 != c.length || 2 != d.length)
            throw Error("J");
        il.apply(this, arguments)
    };
    _.v($l, il);
    $l.prototype.B = function() {
        this.U.scrollLeft = Math.round(this.o[0]);
        this.U.scrollTop = Math.round(this.o[1])
    };
    _.am = function(a, c, d) {
        if (c instanceof _.lf)
            d = c.height, c = c.width;
        else if (void 0 == d)
            throw Error("G");
        a.style.width = _.kg(c, !0);
        a.style.height = _.kg(d, !0)
    };
    bm = function(a, c) {
        var d = [];
        return Ul(a, c, d, !0) ? d[0] : void 0
    };
    cm = function(a) {
        return a.contentDocument || a.contentWindow.document
    };
    dm = function(a) {
        var c;
        if (_.Bd&&!(_.J && _.L("9")&&!_.L("10") && _.m.SVGElement && a instanceof _.m.SVGElement) && (c = a.parentElement))
            return c;
        c = a.parentNode;
        return _.Bf(c) ? c : null
    };
    em = function(a) {
        return void 0 != a.previousElementSibling ? a.previousElementSibling : _.Vl(a.previousSibling, !1)
    };
    fm = function(a) {
        return void 0 != a.nextElementSibling ? a.nextElementSibling : _.Vl(a.nextSibling, !0)
    };
    _.gm = function(a, c) {
        var d = c || window.document;
        return d.querySelectorAll && d.querySelector ? d.querySelectorAll("." + a) : dl(a, c)
    };
    _.hm = function(a) {
        return _.s(a) ? window.document.getElementById(a) : a
    };
    _.im = function(a, c, d) {
        for (var e = a.search(Nl), f = 0, g, h = []; 0 <= (g = Ol(a, f, c, e));)
            h.push(a.substring(f, g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
        h.push(a.substr(f));
        a = [h.join("").replace(Ml, "$1"), "&", c];
        null != d && a.push("=", (0, window.encodeURIComponent)(String(d)));
        return _.Ql(a)
    };
    _.jm = function(a) {
        a = _.Wl([], a);
        a[0] = "";
        return a.join("")
    };
    _.km = function(a, c, d, e, f, g, h) {
        var l = "";
        a && (l += a + ":");
        d && (l += "//", c && (l += c + "@"), l += d, e && (l += ":" + e));
        f && (l += f);
        g && (l += "?" + g);
        h && (l += "#" + h);
        return l
    };
    lm = function(a, c, d) {
        d = d || [];
        for (var e = [], f = 0; f < d.length; f++)
            e[f] = d[f].Xa();
        a.d[c] = d;
        _.cb(a, c, e)
    };
    mm = function(a, c) {
        var d = c ? c.Xa(): c;
        a.d[2] = c;
        _.cb(a, 2, d)
    };
    _.om = function(a, c, d, e, f) {
        d = _.Zj(d, f);
        d = _.M(a, c, d, e, f);
        nm(a, c);
        return d
    };
    nm = function(a, c) {
        if (a instanceof window.Element) {
            var d = _.x("eq").Ne(a, c);
            if (d)
                if (_.J && d instanceof window.MouseEvent && a.dispatchEvent) {
                    var e = window.document.createEvent("MouseEvent");
                    e.initMouseEvent(d.type, !0, !0, d.view, d.detail, d.screenX, d.screenY, d.clientX, d.clientY, d.ctrlKey, d.altKey, d.shiftKey, d.metaKey, d.button, d.relatedTarget);
                    a.dispatchEvent(e)
                } else 
                    a.dispatchEvent && a.dispatchEvent(d)
        }
    };
    _.pm = function(a) {
        _.yc.call(this, a);
        this.Ma = a || this
    };
    _.v(_.pm, _.yc);
    _.pm.prototype.b = function(a, c, d, e) {
        if (d) {
            if ("function" != typeof d)
                throw new TypeError("Function expected");
            d = _.Zj(d, this.Ma);
            d = _.pm.G.b.call(this, a, c, d, e);
            nm(a, qm(c));
            return d
        }
        return _.pm.G.b.call(this, a, c, d, e)
    };
    _.pm.prototype.M = function(a, c, d, e, f) {
        if (d) {
            if ("function" != typeof d)
                throw new TypeError("Function expected");
            d = _.Zj(d, f || this.Ma);
            d = _.pm.G.M.call(this, a, c, d, e, f);
            nm(a, qm(c));
            return d
        }
        return _.pm.G.M.call(this, a, c, d, e, f)
    };
    _.pm.prototype.F = function(a, c, d, e) {
        if (d) {
            if ("function" != typeof d)
                throw new TypeError("Function expected");
            d = _.Zj(d, this.Ma);
            d = _.pm.G.F.call(this, a, c, d, e);
            nm(a, qm(c));
            return d
        }
        return _.pm.G.F.call(this, a, c, d, e)
    };
    var qm = function(a) {
        return _.ab(a) ? (0, _.oa)(a, qm) : _.s(a) ? a : a ? a.toString() : a
    };
    _.rm = function(a) {
        _.pm.call(this);
        this.d = a
    };
    _.v(_.rm, _.pm);
    _.rm.prototype.L = function() {
        this.d = null;
        _.rm.G.L.call(this)
    }; /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    _.sm = function(a, c) {
        this.o = [];
        this.Q = c || null;
        this.b = this.d=!1;
        this.k = void 0;
        this.K = this.F = this.A=!1;
        this.w = 0;
        this.C = null;
        this.M = 0
    };
    _.sm.prototype.B = function(a, c) {
        this.A=!1;
        this.d=!0;
        this.k = c;
        this.b=!a;
        tm(this)
    };
    _.sm.prototype.$a = function(a) {
        if (this.d) {
            if (!this.K)
                throw new um;
            this.K=!1
        }
        this.d=!0;
        this.k = a;
        this.b=!1;
        tm(this)
    };
    _.sm.prototype.addCallback = function(a, c) {
        return vm(this, a, null, c)
    };
    var vm = function(a, c, d, e) {
        a.o.push([c, d, e]);
        a.d && tm(a);
        return a
    };
    _.sm.prototype.then = function(a, c, d) {
        var e, f, g = new _.Zc(function(a, c) {
            e = a;
            f = c
        });
        vm(this, e, function(a) {
            f(a)
        });
        return g.then(a, c, d)
    };
    _.Wc(_.sm);
    var wm = function(a) {
        return (0, _.qa)(a.o, function(a) {
            return _.yb(a[1])
        })
    }, tm = function(a) {
        if (a.w && a.d && wm(a)) {
            var c = a.w, d = xm[c];
            d && (_.m.clearTimeout(d.aa), delete xm[c]);
            a.w = 0
        }
        a.C && (a.C.M--, delete a.C);
        for (var c = a.k, e = d=!1; a.o.length&&!a.A;) {
            var f = a.o.shift(), g = f[0], h = f[1], f = f[2];
            if (g = a.b ? h : g)
                try {
                    var l = g.call(f || a.Q, c);
                    _.n(l) && (a.b = a.b && (l == c || l instanceof Error), a.k = c = l);
                    _.Xc(c) && (e=!0, a.A=!0)
                } catch (q) {
                c = q, a.b=!0, wm(a) || (d=!0)
            }
        }
        a.k = c;
        e && (l = (0, _.t)(a.B, a, !0), e = (0, _.t)(a.B, a, !1), c instanceof _.sm ? (vm(c,
        l, e), c.F=!0) : c.then(l, e));
        d && (c = new ym(c), xm[c.aa] = c, a.w = c.aa)
    }, um = function() {
        _.ga.call(this)
    };
    _.v(um, _.ga);
    um.prototype.message = "Deferred has already fired";
    um.prototype.name = "AlreadyCalledError";
    var ym = function(a) {
        this.aa = _.m.setTimeout((0, _.t)(this.d, this), 0);
        this.b = a
    };
    ym.prototype.d = function() {
        delete xm[this.aa];
        throw this.b;
    };
    var xm = {};
    var zm = function() {
        _.y.call(this);
        this.b = new _.sm
    };
    _.v(zm, _.y);
    zm.prototype.Ta = function() {
        return this.b
    };
    zm.prototype.k = function(a) {
        try {
            var c = _.p("gadgets.config.update");
            c({
                "googleapis.config": {
                    gcv: _.A(_.F(a, 2)),
                    sessionIndex: _.A(_.F(a, 4)),
                    elog: _.H,
                    ilog: _.ee(_.W, 16)
                }
            });
            c({
                gwidget: {
                    lang: _.A(_.F(a, 5))
                }
            });
            this.b.$a()
        } catch (d) {
            _.H(d)
        }
    };
    zm.prototype.d = function(a) {
        a && this.b.addCallback(a)
    };
    zm.prototype.init = function() {
        try {
            var a = _.G(_.I(), _.Cj, 5) || new _.Cj;
            _.F(a, 1) ? _.x("gl").Ta().addCallback((0, _.t)(this.k, this, a)) : this.b.$a();
            _.u("gbar.lGC", (0, _.t)(this.d, this));
            _.u("gbar.lPWF", (0, _.t)(this.d, this));
            _.ta(_.sa.P(), "api").Sa()
        } catch (c) {
            _.H(c)
        }
        return this
    };
    var Am = window, Bm = window.document, Cm = Am.location, Dm = function() {}, Em = /\[native code\]/, Fm = function(a, c, d) {
        return a[c] = a[c] || d
    }, Gm = function(a) {
        for (var c = 0; c < this.length; c++)
            if (this[c] === a)
                return c;
        return - 1
    }, Hm = function(a) {
        a = a.sort();
        for (var c = [], d = void 0, e = 0; e < a.length; e++) {
            var f = a[e];
            f != d && c.push(f);
            d = f
        }
        return c
    }, Im = function() {
        var a;
        if ((a = Object.create) && Em.test(a))
            a = a(null);
        else {
            a = {};
            for (var c in a)
                a[c] = void 0
        }
        return a
    }, Jm = function(a, c) {
        for (var d = 0; d < c.length && a; d++)
            a = a[c[d]];
        return a
    }, Km = Fm(Am, "gapi", {});
    var Lm = function(a, c, d) {
        var e = new RegExp("([#].*&|[#])" + c + "=([^&#]*)", "g");
        c = new RegExp("([?#].*&|[?#])" + c + "=([^&#]*)", "g");
        if (a = a && (e.exec(a) || c.exec(a)))
            try {
                d = (0, window.decodeURIComponent)(a[2])
        } catch (f) {}
        return d
    };
    var Mm;
    Mm = Fm(Am, "___jsl", Im());
    Fm(Mm, "I", 0);
    Fm(Mm, "hel", 10);
    var Nm = function() {
        var a = Cm.href;
        return Mm.dpo ? Mm.h : Lm(a, "jsh", Mm.h)
    }, Om = function(a) {
        var c = Fm(Mm, "PQ", []);
        Mm.PQ = [];
        var d = c.length;
        if (0 === d)
            a();
        else 
            for (var e = 0, f = function() {
                ++e === d && a()
            }, g = 0; g < d; g++)
                c[g](f)
    }, Pm = function(a) {
        return Fm(Fm(Mm, "H", Im()), a, Im())
    }, Qm = function(a) {
        var c = Fm(Mm, "us", []);
        c.push(a);
        (a = /^https:(.*)$/.exec(a)) && c.push("http:" + a[1])
    };
    var Rm = Fm(Mm, "perf", Im());
    Fm(Rm, "g", Im());
    var Sm = Fm(Rm, "i", Im());
    Fm(Rm, "r", []);
    Im();
    Im();
    var Um = function(a, c, d) {
        c && 0 < c.length && (c = Tm(c), d && 0 < d.length && (c += "___" + Tm(d)), 28 < c.length && (c = c.substr(0, 28) + (c.length - 28)), d = c, c = Fm(Sm, "_p", Im()), Fm(c, d, Im())[a] = (new Date).getTime(), c = Rm.r, "function" === typeof c ? c(a, "_p", d) : c.push([a, "_p", d]))
    }, Tm = function(a) {
        return a.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/\,/g, "_")
    };
    var Vm = Im(), Wm = [], Xm = function(a) {
        throw Error("X`" + (a ? ": " + a : ""));
    };
    Wm.push(["jsl", function(a) {
        for (var c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                var d = a[c];
                "object" == typeof d ? Mm[c] = Fm(Mm, c, []).concat(d) : Fm(Mm, c, d)
            }(a = a.u) && Qm(a)
    }
    ]);
    var Ym = /^(\/[a-zA-Z0-9_\-]+)+$/, Zm = /^[a-zA-Z0-9\-_\.,!]+$/, $m = /^gapi\.loaded_[0-9]+$/, an = /^[a-zA-Z0-9,._-]+$/, en = function(a, c, d, e) {
        var f = a.split(";"), g = Vm[f.shift()], h = null;
        g && (h = g(f, c, d, e));
        if (c = h)
            c = h, d = c.match(bn), e = c.match(cn), c=!!e && 1 === e.length && dn.test(c)&&!!d && 1 === d.length;
        c || Xm(a);
        return h
    }, hn = function(a, c, d, e) {
        a = fn(a);
        $m.test(d) || Xm("invalid_callback");
        c = gn(c);
        e = e && e.length ? gn(e) : null;
        var f = function(a) {
            return (0, window.encodeURIComponent)(a).replace(/%2C/g, ",")
        };
        return [(0, window.encodeURIComponent)(a.ph).replace(/%2C/g,
        ",").replace(/%2F/g, "/"), "/k=", f(a.version), "/m=", f(c), e ? "/exm=" + f(e): "", "/rt=j/sv=1/d=1/ed=1", a.fe ? "/am=" + f(a.fe): "", a.Ye ? "/rs=" + f(a.Ye): "", "/cb=", f(d)].join("")
    }, fn = function(a) {
        "/" !== a.charAt(0) && Xm("relative path");
        for (var c = a.substring(1).split("/"), d = []; c.length;) {
            a = c.shift();
            if (!a.length || 0 == a.indexOf("."))
                Xm("empty/relative directory");
            else if (0 < a.indexOf("=")) {
                c.unshift(a);
                break
            }
            d.push(a)
        }
        a = {};
        for (var e = 0, f = c.length; e < f; ++e) {
            var g = c[e].split("="), h = (0, window.decodeURIComponent)(g[0]), l = (0, window.decodeURIComponent)(g[1]);
            2 == g.length && h && l && (a[h] = a[h] || l)
        }
        c = "/" + d.join("/");
        Ym.test(c) || Xm("invalid_prefix");
        d = jn(a, "k", !0);
        e = jn(a, "am");
        a = jn(a, "rs");
        return {
            ph: c,
            version: d,
            fe: e,
            Ye: a
        }
    }, gn = function(a) {
        for (var c = [], d = 0, e = a.length; d < e; ++d) {
            var f = a[d].replace(/\./g, "_").replace(/-/g, "_");
            an.test(f) && c.push(f)
        }
        return c.join(",")
    }, jn = function(a, c, d) {
        a = a[c];
        !a && d && Xm("missing: " + c);
        if (a) {
            if (Zm.test(a))
                return a;
            Xm("invalid: " + c)
        }
        return null
    }, dn = /^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/, cn = /\/cb=/g, bn = /\/\//g, kn = function() {
        var a = Nm();
        if (!a)
            throw Error("Y");
        return a
    };
    Vm.m = function(a, c, d, e) {
        (a = a[0]) || Xm("missing_hint");
        return "https://apis.google.com" + hn(a, c, d, e)
    };
    var ln = (0, window.decodeURI)("%73cript"), mn = function(a, c) {
        for (var d = [], e = 0; e < a.length; ++e) {
            var f = a[e];
            f && 0 > Gm.call(c, f) && d.push(f)
        }
        return d
    }, on = function(a) {
        "loading" != Bm.readyState ? nn(a) : Bm.write("<" + ln + ' src="' + (0, window.encodeURI)(a) + '"></' + ln + ">")
    }, nn = function(a) {
        var c = Bm.createElement(ln);
        c.setAttribute("src", a);
        c.async = "true";
        (a = Bm.getElementsByTagName(ln)[0]) ? a.parentNode.insertBefore(c, a) : (Bm.head || Bm.body || Bm.documentElement).appendChild(c)
    }, pn = function(a, c) {
        var d = c && c._c;
        if (d)
            for (var e = 0; e <
            Wm.length; e++) {
                var f = Wm[e][0], g = Wm[e][1];
                g && Object.prototype.hasOwnProperty.call(d, f) && g(d[f], a, c)
            }
    }, rn = function(a, c) {
        qn(function() {
            var d;
            d = c === Nm() ? Fm(Km, "_", Im()) : Im();
            d = Fm(Pm(c), "_", d);
            a(d)
        })
    }, sn = function() {
        return !1
    }, un = function(a, c) {
        var d = c || {};
        "function" == typeof c && (d = {}, d.callback = c);
        if (!sn ||!sn(d)) {
            pn(a, d);
            var e = a ? a.split(":"): [], f = d.h || kn(), g = Fm(Mm, "ah", Im());
            if (g["::"] && e.length) {
                for (var h = [], l = null; l = e.shift();) {
                    var q = l.split("."), q = g[l] || g[q[1] && "ns:" + q[0] || ""] || f, r = h.length && h[h.length -
                    1] || null, w = r;
                    r && r.hint == q || (w = {
                        hint: q,
                        sc: []
                    }, h.push(w));
                    w.sc.push(l)
                }
                var E = h.length;
                if (1 < E) {
                    var P = d.callback;
                    P && (d.callback = function() {
                        0==--E && P()
                    })
                }
                for (; e = h.shift();)
                    tn(e.sc, d, e.hint)
                } else 
                    tn(e || [], d, f)
        }
    }, tn = function(a, c, d) {
        a = Hm(a) || [];
        var e = c.callback, f = c.config, g = c.timeout, h = c.ontimeout, l = null, q=!1;
        if (g&&!h ||!g && h)
            throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
        var r = Fm(Pm(d), "r", []).sort(), w = Fm(Pm(d), "L", []).sort(), E = [].concat(r), P = function(a, c) {
            if (q)
                return 0;
            Am.clearTimeout(l);
            w.push.apply(w, kb);
            var e = ((Km || {}).config || {}).update;
            e ? e(f) : f && Fm(Mm, "cu", []).push(f);
            if (c) {
                Um("me0", a, E);
                try {
                    rn(c, d)
                } finally {
                    Um("me1", a, E)
                }
            }
            return 1
        };
        0 < g && (l = Am.setTimeout(function() {
            q=!0;
            h()
        }, g));
        var kb = mn(a, w);
        if (kb.length) {
            var kb = mn(a, r), Ac = Fm(Mm, "CP", []), Bc = Ac.length;
            Ac[Bc] = function(a) {
                if (!a)
                    return 0;
                Um("ml1", kb, E);
                var c = function(c) {
                    Ac[Bc] = null;
                    P(kb, a) && Om(function() {
                        e && e();
                        c()
                    })
                }, d = function() {
                    var a = Ac[Bc + 1];
                    a && a()
                };
                0 < Bc && Ac[Bc - 1] ? Ac[Bc] = function() {
                    c(d)
                } : c(d)
            };
            if (kb.length) {
                var xj = "loaded_" + Mm.I++;
                Km[xj] = function(a) {
                    Ac[Bc](a);
                    Km[xj] = null
                };
                a = en(d, kb, "gapi." + xj, r);
                r.push.apply(r, kb);
                Um("ml0", kb, E);
                c.sync || Am.___gapisync ? on(a) : nn(a)
            } else 
                Ac[Bc](Dm)
        } else 
            P(kb) && e && e()
    };
    var qn = function(a) {
        if (Mm.hee && 0 < Mm.hel)
            try {
                return a()
        } catch (c) {
            Mm.hel--, un("debug_error", function() {
                try {
                    window.___jsl.hefn(c)
                } catch (a) {
                    throw c;
                }
            })
        } else 
            return a()
    };
    Km.load = function(a, c) {
        return qn(function() {
            return un(a, c)
        })
    };
    var vn = function(a, c, d, e, f, g, h) {
        this.d = a;
        this.k = c;
        this.b = d;
        this.A = e;
        this.w = f;
        this.C = g;
        this.o = h
    };
    vn.prototype.toString = function() {
        var a = [];
        null !== this.d && a.push(this.d, ":");
        null !== this.b && (a.push("//"), null !== this.k && a.push(this.k, "@"), a.push(this.b), null !== this.A && a.push(":", this.A.toString()));
        null !== this.w && a.push(this.w);
        null !== this.C && a.push("?", this.C);
        null !== this.o && a.push("#", this.o);
        return a.join("")
    };
    var wn = function(a) {
        return "string" == typeof a && 0 < a.length ? a : null
    }, xn = /^(?:([^:/?#]+):)?(?:\/\/(?:([^/?#]*)@)?([^/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
    var yn = /\.?[a-zA-Z0-9-]+\.google\.com$/, zn = function(a, c) {
        if (c) {
            var d;
            d = (d = a.match(xn)) ? new vn(wn(d[1]), wn(d[2]), wn(d[3]), wn(d[4]), wn(d[5]), wn(d[6]), wn(d[7])) : null;
            if (!d)
                return !1;
            var e = d.d && (0, window.decodeURIComponent)(d.d).replace(/\+/g, " ");
            if ("http" != e && "https" != e)
                return !1;
            d = d.b && (0, window.decodeURIComponent)(d.b).replace(/\+/g, " ");
            if (!d)
                return !1;
            for (var e = c.split(","), f = 0, g = e.length; f < g; ++f) {
                var h = e[f];
                if (yn.test(h)) {
                    var l = d.length, q = h.length;
                    if (l >= q && d.substring(l - q) == h)
                        return !0
                }
            }
        }
        return !1
    };
    Vm.n = function(a, c, d, e) {
        2 != a.length && Xm("dev_hint_2_components_only");
        var f = a[0].replace(/\/+$/, "");
        return zn(f, Mm.m) ? (a = hn(a[1], c, d, e), f + a) : null
    };
    var An = /([^\/]*\/\/[^\/]*)(\/js\/.*)$/, sn = function(a) {
        var c = Jm(a, ["_c", "jsl", "u"]), d = An.exec(c);
        if (Mm.dpo ||!c ||!d)
            return !1;
        var e = d[1], d = d[2], f = Lm(c, "nr"), g = Lm(Am.location.href, "_bsh");
        a = Jm(a, ["_c", "jsl", "m"]);
        !g || a && zn(g, a) || Xm();
        if (void 0 == f && g && g != e)
            return e = g + d + (0 <= d.indexOf("?") ? "&" : "?") + "nr=" + (0, window.encodeURIComponent)(c), a = Bm.getElementsByTagName(ln), a = a[a.length - 1].src, (c && c.replace(/^.*:/, "")) == (a && a.replace(/^.*:/, "")) ? on(e) : nn(e), !0;
        /^http/.test(f) && Qm((0, window.decodeURIComponent)(String(f)));
        return !1
    };
    var Bn = function() {
        _.ga.call(this)
    };
    _.v(Bn, _.ga);
    var Cn = function() {
        _.y.call(this);
        this.d = new _.sm
    };
    _.v(Cn, _.y);
    Cn.prototype.Ta = function() {
        return this.d
    };
    Cn.prototype.b = _.p("gapi.load");
    Cn.prototype.init = function() {
        try {
            if (!this.b)
                throw new Bn;
            var a = _.Dj(), c = {
                isPlusUser: _.A(_.F(a, 4)),
                "googleapis.config": {
                    signedIn: _.A(_.F(a, 5))
                },
                lang: _.A(_.F(a, 10))
            }, d = _.A(_.F(a, 6));
            d && (c.iframes = {
                ":socialhost:": d
            });
            this.b("", {
                config: c
            });
            try {
                var e = _.x("gs");
                if (!e)
                    throw new Bn;
                this.b(e.gd.join(":"), (0, _.t)(this.d.$a, this.d));
                for (var f = e.he, a = 0; a < f.length; a++)
                    this.b(f[a].sc, f[a].options)
                } catch (g) {
                _.H(g)
            }
        } catch (h) {
            _.H(h)
        }
        return this
    };
    _.wa("gl", (new Cn).init());
    _.wa("gc", (new zm).init());
    var Dn = function() {
        _.y.call(this);
        this.d = new _.N
    };
    _.v(Dn, _.y);
    Dn.prototype[_.ac]=!0;
    _.k = Dn.prototype;
    _.k.Ua = function(a, c, d, e) {
        return this.d.Ua(a, c, d, e)
    };
    _.k.rd = function(a, c, d, e) {
        return this.d.rd(a, c, d, e)
    };
    _.k.sd = function(a, c, d, e) {
        return this.d.sd(a, c, d, e)
    };
    _.k.hc = function(a) {
        return this.d.hc(a)
    };
    _.k.dispatchEvent = function(a) {
        return this.d.dispatchEvent(a)
    };
    _.k.Pc = function(a) {
        return this.d.Pc(a)
    };
    _.k.zc = function() {
        return this.d.zc()
    };
    _.k.xb = function(a, c, d) {
        return this.d.xb(a, c, d)
    };
    _.k.qd = function(a, c, d, e) {
        return this.d.qd(a, c, d, e)
    };
    _.En = function(a, c, d) {
        this.w = a;
        this.url = c;
        this.C = d || 0;
        this.d = 0;
        this.o = []
    };
    _.Fn = function(a, c) {
        a.d = c;
        if (3 == c || 5 == c) {
            for (var d = 0; d < a.o.length; d++)
                try {
                    a.o[d]()
                } catch (e) {
                _.H(e)
            }
            a.o = []
        }
    };
    _.k = _.En.prototype;
    _.k.ld = function() {
        return {}
    };
    _.k.$c = function() {};
    _.k.nd = function() {
        return {}
    };
    _.k.od = function() {
        return {}
    };
    _.k.Yb = function() {};
    _.k.Zd = function() {
        return !1
    };
    _.k.yb = function() {
        return null
    };
    _.k.md = function() {
        return {}
    };
    _.k.Ad = function() {};
    _.Gn = function(a, c) {
        Dn.call(this);
        this.b = a;
        this.w=!1;
        this.K = _.B(null != _.F(c, 12) ? _.F(c, 12) : 3E4);
        this.k = [];
        this.b.$c(this);
        0 < this.b.C && window.setTimeout((0, _.t)(this.C, this), 1E3 * this.b.C)
    };
    _.v(_.Gn, Dn);
    _.Gn.prototype.C = function() {
        this.w ? Hn(this) : 0 == this.b.d && _.Fn(this.b, 1)
    };
    _.Gn.prototype.o = function(a, c) {
        window.clearTimeout(this.B);
        var d = _.wf(arguments, 1);
        this.dispatchEvent("ifs.onready");
        a && a.apply(null, d)
    };
    var Hn = function(a) {
        try {
            if (!a.b.b) {
                _.Fn(a.b, 2);
                if (a.b.Zd())
                    a.A();
                else {
                    var c = a.b.nd();
                    c.open = (0, _.t)(a.o, a, c.open);
                    c.onready = (0, _.t)(a.o, a, c.onready);
                    window.iframes.setHandler(a.b.w, c);
                    var d = window.iframes.open(a.b.url, {
                        style: a.b.w
                    }, a.b.od(), a.b.ld(a), (0, _.t)(a.b.Yb, a.b));
                    a.b.b = d
                }
                0 < a.K && (window.clearTimeout(a.B), a.B = window.setTimeout((0, _.t)(a.dispatchEvent, a, "ifs.ontimeout"), a.K))
            }
        } catch (e) {
            _.H(new In)
        }
    };
    _.Gn.prototype.A = function() {
        if (_.p("gapi.iframes.getContext")) {
            var a = this.b.od(), c = this.b.ld(this);
            Jn(this, c);
            c._ready = (0, _.t)(this.o, this, (0, _.t)(this.b.Ad, this.b));
            var d = "", e;
            for (e in c)
                d += "," + e;
            a = {
                where: this.b.yb(),
                url: this.b.url,
                attributes: this.b.md(),
                queryParams: a,
                fragmentParams: {
                    _methods: d.substr(1)
                },
                messageHandlers: c,
                messageHandlersFilter: _.p("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER")
            };
            a = _.p("gapi.iframes.getContext")().openChild(a);
            a.registerWasClosed((0, _.t)(this.b.Yb, this.b));
            this.b.b =
            a
        } else 
            _.p("gapi.load")("gapi.iframes", (0, _.t)(this.A, this))
    };
    var Jn = function(a, c) {
        for (var d in c)
            c.hasOwnProperty(d) && (c[d] = (0, _.t)(function(a, c) {
                c && "object" === typeof c && c.args ? a.apply(null, c.args) : a(c)
            }, a, c[d]))
    };
    _.Gn.prototype.F = function(a, c) {
        this.dispatchEvent(new _.Kn(a, _.wf(arguments, 1)))
    };
    _.Ln = function(a, c, d) {
        if (4 != a.b.d)
            if (d || a.C(), a = a.b, 3 == a.d || 5 == a.d)
                try {
                    c()
        } catch (e) {
            _.H(e)
        } else 
            a.o.push(c)
    };
    _.Mn = function(a, c, d, e) {
        _.Ln(a, (0, _.t)(function() {
            this.b.Zd() ? 3 == this.b.d && this.b.b.send(c, {
                args: d
            }, _.p("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER")) : 3 == this.b.d && this.b.b[c] && this.b.b[c].apply(null, d)
        }, a), e)
    };
    _.Gn.prototype.M = function() {
        try {
            this.w=!0;
            1 == this.b.d && Hn(this);
            for (var a = 0; a < this.k.length; a++)
                try {
                    this.k[a]()
                } catch (c) {
                _.H(c)
            }
            this.k = null
        } catch (d) {
            _.H(d)
        }
    };
    _.Gn.prototype.init = function() {
        try {
            _.x("gc").Ta().addCallback((0, _.t)(this.M, this))
        } catch (a) {
            _.H(a)
        }
        return this
    };
    _.Kn = function(a, c) {
        _.Xb.call(this, a);
        this.k = c
    };
    _.v(_.Kn, _.Xb);
    var In = function() {
        _.ga.call(this)
    };
    _.v(In, _.ga);
    var On = function(a) {
        _.En.call(this, "notifications", Nn(a), _.B(null != _.F(a, 9) ? _.F(a, 9) : 5));
        this.B = _.z(_.F(a, 11));
        this.k = null
    };
    _.v(On, _.En);
    _.Pn = {
        Ph: "onError",
        Qh: "onInfo",
        Kh: "hideNotificationWidget",
        Th: "postSharedMessage",
        Uh: "reauth",
        Xh: "setNotificationWidgetHeight",
        Yh: "setNotificationWidgetSize",
        Zh: "switchTo",
        Mh: "navigateTo",
        Wh: "setNotificationText",
        Vh: "setNotificationAnimation"
    };
    On.prototype.$c = function(a) {
        a.Ua("onInfo", (0, _.t)(this.A, this))
    };
    On.prototype.A = function(a) {
        a = a.k[0];
        2 <= a && 4 >= a && _.Fn(this, 5)
    };
    var Nn = function(a) {
        var c;
        c = _.F(a, 1);
        if (!c) {
            c = _.F(a, 2);
            var d = _.F(a, 3), e = _.F(a, 4), f = _.F(a, 5), g = _.F(a, 6), h = _.F(a, 7);
            "/" == c && (c = "");
            "/" == d && (d = "");
            c = _.km(c, void 0, d, e, f, g, h)
        }
        a = _.F(a, 8);
        d = window.document.location.protocol + "//" + window.document.location.host;
        a && (c = _.im(c, "hl", a));
        window.document.documentMode && (c = _.im(c, "hostiemode", window.document.documentMode));
        return c = _.im(c, "origin", d)
    };
    _.k = On.prototype;
    _.k.ld = function(a) {
        for (var c = {}, d = _.vb(_.Pn), e = 0; e < d.length; e++)
            c[d[e]] = (0, _.t)(a.F, a, d[e]);
        c.getNotificationText = (0, _.t)(this.gg, this);
        return c
    };
    _.k.gg = function() {
        return this.k ? this.k() : ""
    };
    _.k.nd = function() {
        return {
            open: (0, _.t)(this.ih, this),
            onready: (0, _.t)(this.Ad, this)
        }
    };
    _.k.ih = function(a) {
        this.b = a;
        var c = this.yb();
        try {
            return a.openInto(c, this.md())
        } catch (d) {
            _.H(d)
        }
    };
    _.k.md = function() {
        return {
            "class": "gb_Ha",
            frameBorder: 0,
            scrolling: "no",
            allowTransparency: !0,
            "aria-hidden": "true"
        }
    };
    _.k.Ad = function() {
        _.Fn(this, 3)
    };
    _.k.Yb = function() {
        _.Fn(this, 4);
        var a = this.b.getIframeEl();
        a.parentNode && a.parentNode.removeChild(a)
    };
    _.k.Zd = function() {
        return this.B
    };
    _.k.yb = function() {
        return _.hm("gbsfw")
    };
    _.Xa(function() {
        var a = _.rl();
        if (a && _.hm("gbsfw")) {
            var a = new On(a), c = new _.Gn(a, _.rl() || new _.hl);
            _.wa("if", c.init());
            _.u("gbar.noam", function(a) {
                _.Mn(c, "onAsyncMessage", [a])
            })
        }
    });
    var Qn, Rn;
    Qn = function() {};
    _.ml = new Qn;
    Rn = ["click", _.Gb ? "keypress": "keydown", "keyup"];
    Qn.prototype.b = function(a, c, d, e, f) {
        var g = function(a) {
            var d = _.mc(c), f = _.Bf(a.target) ? a.target.getAttribute("role") || null: null;
            "click" == a.type && pl(a) ? d.call(e, a) : 13 != a.keyCode && 3 != a.keyCode || "keyup" == a.type ? 32 != a.keyCode || "keyup" != a.type || "button" != f && "tab" != f || (d.call(e, a), a.preventDefault()) : (a.type = "keypress", d.call(e, a))
        };
        g.d = c;
        g.b = e;
        f ? f.b(a, Rn, g, d) : _.M(a, Rn, g, d)
    };
    _.Sn = _.K ? "webkitAnimationEnd" : _.Fb ? "oAnimationEnd" : "animationend";
    _.Tn = function(a, c, d) {
        _.rm.call(this, a);
        this.T = this.K = null;
        this.aa = c;
        this.k = _.X("gb_D", this.d);
        this.w = _.X("gb_A", this.d);
        this.S=!1;
        this.A = _.x("dd");
        this.A.fh(this);
        this.k.setAttribute("aria-hidden", "true");
        d || this.xa()
    };
    _.v(_.Tn, _.rm);
    _.k = _.Tn.prototype;
    _.k.xa = function() {
        this.w && (nl(this, this.w, this.Ec, !1, this), this.w.setAttribute("aria-expanded", "false"));
        this.k && nl(this, this.k, this.ag, !1, this);
        nl(this, window.document, this.Ce, !0, this);
        this.M(window.document, _.Sf(27) ? "keypress" : "keyup", this.ta, !1, this);
        this.M(this.d, "mouseover", this.rg, !1, this);
        this.M(this.d, "mouseout", this.qg, !1, this)
    };
    _.k.getId = function() {
        return this.aa
    };
    _.k.Ec = function(a) {
        _.S(this.d, "gb_Ia") ? this.close() : this.open();
        a.preventDefault();
        a.stopPropagation()
    };
    _.k.ag = function(a) {
        for (a = a.target; a && a != this.k;) {
            if ("A" == a.tagName&&!_.S(a, "gb_2b")) {
                this.close(!0);
                this.w && (0, window.setTimeout)((0, _.t)(this.w.focus, this.w), 0);
                break
            }
            a = a.parentNode
        }
    };
    _.k.Ce = function(a) {
        _.rf(this.d, a.target) || this.close()
    };
    _.k.rg = function(a) {
        Un(this, (0, _.t)(this.Xb, this), a)
    };
    _.k.qg = function(a) {
        Un(this, (0, _.t)(this.xd, this), a)
    };
    var Un = function(a, c, d) {
        var e = d.o && _.rf(a.d, d.o), f = d.o && Vn(a, d.o);
        a = Vn(a, d.target);
        e || c(0, d);
        e&&!f || a || c(1, d);
        !f && a && c(2, d)
    };
    _.Tn.prototype.ta = function(a) {
        27 == a.keyCode && this.close()
    };
    _.Tn.prototype.Xb = _.Ya;
    _.Tn.prototype.xd = _.Ya;
    var Vn = function(a, c) {
        return c && a.k ? _.S(c, "gb_ga") || _.S(c, "gb_ha")||!!a.k && _.rf(a.k, c) : !1
    };
    _.Tn.prototype.L = function() {
        _.Tn.G.L.call(this);
        this.k = null
    };
    var Wn = function(a) {
        if (a.w && (a = a.w.getAttribute("data-ved")))
            return {
                ved: a
            }
    };
    _.Tn.prototype.open = function() {
        if (!_.S(this.d, "gb_Ia")) {
            this.A.dd(0, this);
            this.A.$e(this);
            _.T(this.d, "gb_Ia");
            this.k.setAttribute("aria-hidden", "false");
            this.w && this.w.setAttribute("aria-expanded", "true");
            if (_.J && this.k) {
                var a = _.X("gb_dc");
                if (!a) {
                    var a = _.O("IFRAME", {
                        "class": "gb_dc",
                        src: 'javascript:""',
                        frameBorder: 0
                    }), c = _.X("gb_zc");
                    c && c.appendChild(a)
                }
                _.U(a, "gb_Tb");
                this.ia()
            }
            this.K && _.W(this.K, Wn(this));
            this.A.dd(1, this);
            this.ue()
        }
    };
    _.Tn.prototype.ue = function() {
        this.k.focus()
    };
    _.Tn.prototype.ia = function() {
        if (_.J && this.k) {
            var a = _.X("gb_dc");
            a && _.am(a, _.mg(this.k))
        }
    };
    _.Tn.prototype.close = function(a) {
        if (_.S(this.d, "gb_Ia") && this.A.rf(this)) {
            this.A.Me(this) && this.A.$e(null);
            _.U(this.d, "gb_Ia");
            this.k.setAttribute("aria-hidden", "true");
            this.w && this.w.setAttribute("aria-expanded", "false");
            if (_.J) {
                var c = _.X("gb_dc");
                c && _.T(c, "gb_Tb")
            }
            !a && this.T && _.W(this.T, Wn(this));
            this.A.dd(2, this);
            return !0
        }
        return !1
    };
    var Xn = function(a) {
        _.D(this, a, 0, [])
    };
    _.v(Xn, _.C);
    var Yn = function(a) {
        _.D(this, a, 0, [])
    };
    _.v(Yn, _.C);
    var Zn = function(a) {
        _.D(this, a, 0, [1, 2])
    };
    _.v(Zn, _.C);
    var $n = function(a) {
        _.D(this, a, "og.stoq", [])
    };
    _.v($n, _.C);
    $n.b = "og.stoq";
    var eo;
    _.co = function(a, c, d) {
        return _.ao("POST", a, c, d).then(function(a) {
            return _.bo(a.responseText, d)
        })
    };
    _.ao = function(a, c, d, e) {
        return new _.Zc(function(f, g) {
            var h = e || {}, l, q = _.te(_.qe);
            try {
                q.open(a, c, !0)
            } catch (r) {
                g(new eo("Error opening XHR: " + r.message, c))
            }
            q.onreadystatechange = function() {
                if (4 == q.readyState) {
                    _.m.clearTimeout(l);
                    var a;
                    !(a = _.oe(q.status)) && (a = 0 === q.status) && (a = _.je(c), a=!("http" == a || "https" == a || "" == a));
                    a ? f(q) : g(new fo(q.status, c))
                }
            };
            q.onerror = function() {
                g(new eo("Network error", c))
            };
            var w;
            if (h.headers) {
                for (var E in h.headers)
                    w = h.headers[E], null != w && q.setRequestHeader(E, w);
                w = h.headers["Content-Type"]
            }
            "POST" ==
            a && void 0 === w && q.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
            h.withCredentials && (q.withCredentials = h.withCredentials);
            h.responseType && (q.responseType = h.responseType);
            h.Vg && q.overrideMimeType(h.Vg);
            0 < h.be && (l = _.m.setTimeout(function() {
                q.onreadystatechange = _.Ya;
                q.abort();
                g(new go(c))
            }, h.be));
            try {
                q.send(d)
            } catch (P) {
                q.onreadystatechange = _.Ya, _.m.clearTimeout(l), g(new eo("Error sending XHR: " + P.message, c))
            }
        })
    };
    _.bo = function(a, c) {
        var d = a;
        if (c && c.ce) {
            var e = c.ce;
            0 == d.lastIndexOf(e, 0) && (d = d.substring(e.length))
        }
        return _.me(d)
    };
    eo = function(a, c) {
        _.ga.call(this, a + ", url=" + c);
        this.url = c
    };
    _.v(eo, _.ga);
    eo.prototype.name = "XhrError";
    var fo = function(a, c) {
        eo.call(this, "Request Failed, status=" + a, c);
        this.status = a
    };
    _.v(fo, eo);
    fo.prototype.name = "XhrHttpError";
    var go = function(a) {
        eo.call(this, "Request timed out", a)
    };
    _.v(go, eo);
    go.prototype.name = "XhrTimeoutError";
    _.ho = function() {
        this.o = "pending";
        this.A = [];
        this.k = this.C = void 0
    };
    _.Wc(_.ho);
    var io = function() {
        _.ga.call(this, "Multiple attempts to set the state of this Result")
    };
    _.v(io, _.ga);
    _.ho.prototype.b = function() {
        return this.o
    };
    _.ho.prototype.la = function() {
        return this.C
    };
    var jo = function(a, c, d) {
        "pending" == a.o ? a.A.push({
            $a: c,
            scope: d || null
        }) : c.call(d, a)
    };
    _.ho.prototype.w = function(a) {
        if ("pending" == this.o)
            this.C = a, this.o = "success", ko(this);
        else 
            throw new io;
    };
    _.ho.prototype.d = function(a) {
        if ("pending" == this.o)
            this.k = a, this.o = "error", ko(this);
        else 
            throw new io;
    };
    var ko = function(a) {
        var c = a.A;
        a.A = [];
        for (var d = 0; d < c.length; d++) {
            var e = c[d];
            e.$a.call(e.scope, a)
        }
    };
    _.ho.prototype.then = function(a, c, d) {
        var e, f, g = new _.Zc(function(a, c) {
            e = a;
            f = c
        });
        jo(this, function(a) {
            "success" == a.b() ? e(a.la()) : "error" == a.b() && f(a.k)
        });
        return g.then(a, c, d)
    };
    _.lo = function(a) {
        var c = new _.ho;
        a.then(c.w, c.d, c);
        return c
    };
    var po, qo, oo;
    _.mo = function(a, c, d) {
        jo(a, c, d)
    };
    _.no = function(a, c, d) {
        _.mo(a, function(a) {
            "error" == a.b() && c.call(this, a.k, a)
        }, d)
    };
    po = function(a, c) {
        var d = new oo([a]);
        _.mo(a, function(a) {
            "success" == a.b() ? d.w(c(a.la())) : d.d(a.k)
        });
        return d
    };
    qo = function(a, c) {
        var d = new oo([a]);
        _.mo(a, function(a) {
            "success" == a.b() ? (a = c.call(void 0, a), d.B.push(a), _.mo(a, function(a) {
                "success" == a.b() ? d.w(a.la()) : d.d(a.k)
            })) : d.d(a.k)
        });
        return d
    };
    oo = function(a) {
        _.ho.call(this);
        this.B = a
    };
    _.v(oo, _.ho);
    var ro = function(a) {
        _.D(this, a, "og.sto", [])
    };
    _.v(ro, _.C);
    ro.b = "og.sto";
    var so = function(a, c, d) {
        this.b = a;
        this.k = c;
        this.d = d;
        this.o = {
            be: 3E3,
            withCredentials: !0,
            ce: ")]}'\n"
        }
    }, uo = function(a) {
        var c = to;
        return _.F(a, 2) || _.km(_.F(c, 1), void 0, _.F(c, 2), _.F(c, 3), _.F(a, 1), _.F(c, 5))
    };
    so.prototype.get = function() {
        var a = new $n, c = vo();
        _.cb(a, 1, c);
        a = {
            "f.req": _.ge(a)
        };
        return wo(this, xo(this, this.b, a))
    };
    so.prototype.set = function(a) {
        var c = vo();
        _.cb(a, 1, c);
        a = {
            "f.req": _.ge(a)
        };
        return wo(this, xo(this, this.k, a))
    };
    so.prototype.remove = function() {
        var a = new $n, c = vo();
        _.cb(a, 1, c);
        a = {
            "f.req": _.ge(a)
        };
        return wo(this, xo(this, this.d, a))
    };
    var xo = function(a, c, d) {
        try {
            d.ntok = (0, window.encodeURIComponent)(vo());
            if (!d.ntok) {
                var e = new _.ho;
                e.d(Error("Z"));
                return e
            }
            var f = _.jm(d), g = _.lo(_.co(c, f, a.o));
            _.no(g, function(a) {
                _.H(a)
            });
            return g
        } catch (h) {
            return _.H(h), a = new _.ho, a.d(h), a
        }
    }, wo = function(a, c) {
        return qo(c, (0, _.t)(function(a) {
            try {
                var c = a.la(), f = yo(c);
                if (0 == f.length)
                    throw Error("$");
                var g = new ro(f[0]), h = new _.ho;
                h.w(g);
                return h
            } catch (l) {
                return a = new _.ho, a.d(l), a
            }
        }, a))
    }, yo = function(a) {
        return (0, _.na)(a, function(a) {
            return 0 < a.length && "og.sto" == a[0]
        })
    }, vo = function() {
        if (window.__PVT)
            return window.__PVT;
        _.H(Error("aa"));
        return ""
    };
    var zo = function(a, c, d) {
        _.y.call(this);
        this.b = a;
        this.d = {
            yh: 0,
            Kf: 0,
            wh: 0
        };
        this.o = c || _.ll;
        this.k = d || _.ll
    };
    _.v(zo, _.y);
    zo.prototype.set = function(a) {
        this.d.yh++;
        return Ao(this.b.set(this.o(a)))
    };
    zo.prototype.get = function() {
        this.d.Kf++;
        var a = this.b.get();
        return po(a, this.k)
    };
    zo.prototype.remove = function() {
        this.d.wh++;
        return Ao(this.b.remove())
    };
    var Ao = function(a) {
        return po(a, function(a) {
            return a?!0 : !1
        })
    };
    if (_.G(_.I(), ul, 20)) {
        var to, Bo = _.G(_.I(), ul, 20) || new ul;
        to = _.G(Bo, tl, 5);
        var Co;
        Co = _.G(to, sl, 6);
        var Do = uo(Co), Eo;
        Eo = _.G(to, sl, 7);
        var Fo = uo(Eo), Go;
        Go = _.G(to, sl, 8);
        var Ho = new zo(new so(Do, Fo, uo(Go)), function(a) {
            var c = new $n;
            mm(c, a);
            return c
        }, function(a) {
            return a ? _.G(a, Zn, 2) : null
        });
        _.wa("s", Ho)
    };
    var Io = function(a, c) {
        _.N.call(this);
        this.D = a;
        var d = _.Bf(this.D) ? this.D: this.D ? this.D.body: null;
        d && _.pg(d);
        this.b = _.M(this.D, _.Gb ? "DOMMouseScroll" : "mousewheel", this, c)
    };
    _.v(Io, _.N);
    Io.prototype.handleEvent = function(a) {
        var c = 0, d = 0, e = 0;
        a = a.b;
        if ("mousewheel" == a.type) {
            d = 1;
            if (_.J || _.K && (_.Lb || _.L("532.0")))
                d = 40;
            e = Jo( - a.wheelDelta, d);
            _.n(a.wheelDeltaX) ? (c = Jo( - a.wheelDeltaX, d), d = Jo( - a.wheelDeltaY, d)) : d = e
        } else 
            e = a.detail, 100 < e ? e = 3 : - 100 > e && (e =- 3), _.n(a.axis) && a.axis === a.HORIZONTAL_AXIS ? c = e : d = e;
        _.zb(this.d) && _.le(c, - this.d, this.d);
        _.zb(this.k) && (d = _.le(d, - this.k, this.k));
        c = new Ko(0, a, 0, d);
        this.dispatchEvent(c)
    };
    var Jo = function(a, c) {
        return _.K && (_.Kb || _.Mb) && 0 != a%c ? a : a / c
    };
    Io.prototype.L = function() {
        Io.G.L.call(this);
        _.uc(this.b);
        this.b = null
    };
    var Ko = function(a, c, d, e) {
        _.$b.call(this, c);
        this.type = "mousewheel";
        this.K = e
    };
    _.v(Ko, _.$b);
    var Lo = function(a) {
        return 3 * a * a - 2 * a * a * a
    };
    var No = function(a, c) {
        _.N.call(this);
        this.b = a;
        this.k = Mo(this.b);
        this.C = c || 100;
        this.o = _.M(a, "resize", this.w, !1, this)
    };
    _.v(No, _.N);
    No.prototype.L = function() {
        _.uc(this.o);
        No.G.L.call(this)
    };
    No.prototype.w = function() {
        this.d || (this.d = new _.ug(this.A, this.C, this), _.he(this, this.d));
        _.wg(this.d)
    };
    No.prototype.A = function() {
        if (!this.b.Ja) {
            var a = this.k, c = Mo(this.b);
            this.k = c;
            if (a) {
                var d=!1;
                a.width != c.width && (this.dispatchEvent("d"), d=!0);
                a.height != c.height && (this.dispatchEvent("c"), d=!0);
                d && this.dispatchEvent("resize")
            } else 
                this.dispatchEvent("c"), this.dispatchEvent("d"), this.dispatchEvent("resize")
        }
    };
    var Oo = function(a) {
        _.N.call(this);
        this.d = a || window;
        this.k = _.M(this.d, "resize", this.o, !1, this);
        this.b = _.vf(this.d)
    };
    _.v(Oo, _.N);
    var Qo = function() {
        var a = window, c = _.Nf(a);
        return Po[c] = Po[c] || new Oo(a)
    }, Po = {};
    Oo.prototype.k = null;
    Oo.prototype.d = null;
    Oo.prototype.b = null;
    var Mo = function(a) {
        return a.b ? a.b.clone() : null
    };
    Oo.prototype.L = function() {
        Oo.G.L.call(this);
        this.k && (_.uc(this.k), this.k = null);
        this.b = this.d = null
    };
    Oo.prototype.o = function() {
        var a = _.vf(this.d);
        _.If(a, this.b) || (this.b = a, this.dispatchEvent("resize"))
    };
    var Ro = function(a, c) {
        _.rm.call(this, a);
        this.na = c;
        this.k = _.X("gb_D", this.d);
        this.R = _.x("dd");
        this.rh = new No(Qo());
        this.Na=!1;
        this.R.Nb(1, this.na, (0, _.t)(this.Oc, this));
        this.R.Nb(2, this.na, (0, _.t)(this.ed, this));
        this.R.Me(this.na) && (0, window.setTimeout)((0, _.t)(this.Oc, this), 0)
    };
    _.v(Ro, _.rm);
    Ro.prototype.Oc = function() {
        So(this);
        this.Na || (this.Na=!0, this.b(this.rh, "c", this.Hd))
    };
    Ro.prototype.ed = function() {};
    Ro.prototype.Hd = function() {
        So(this)
    };
    var So = function(a) {
        var c = _.vf().height, d;
        d = a.k;
        if (1 == d.nodeType)
            d = _.jg(d);
        else {
            var e = _.yb(d.M), f = d;
            d.targetTouches && d.targetTouches.length ? f = d.targetTouches[0] : e && d.b.targetTouches && d.b.targetTouches.length && (f = d.b.targetTouches[0]);
            d = new _.Q(f.clientX, f.clientY)
        }
        a.k.style.maxHeight = Math.max(1, c - 30 - d.y) + "px";
        a.R.Re()
    };
    var To;
    _.Uo = function(a) {
        if (To) {
            var c = To, d = void 0;
            if (0 > d || void 0 == d) {
                d = null;
                try {
                    d = c.cssRules || c.rules
                } catch (e) {
                    if (15 == e.code)
                        throw e.styleSheet = c, e;
                }
                d = d.length
            }
            if (c.insertRule)
                c.insertRule(a, d);
            else if (a = /^([^\{]+)\{([^\{]+)\}/.exec(a), 3 == a.length)
                c.addRule(a[1], a[2], d);
            else 
                throw Error("ba");
        } else 
            c = window.document, d = c.createElement("style"), d.type = "text/css", c.getElementsByTagName("head")[0].appendChild(d), d.styleSheet ? d.styleSheet.cssText = a : d.appendChild(c.createTextNode(a)), To = d.sheet
    };
    var Vo = function(a, c, d) {
        _.N.call(this);
        this.target = a;
        this.k = c || a;
        this.A = d || new _.cg(window.NaN, window.NaN, window.NaN, window.NaN);
        this.d = _.Af(a);
        this.b = new _.yc(this);
        _.he(this, this.b);
        _.M(this.k, ["touchstart", "mousedown"], this.td, !1, this)
    };
    _.v(Vo, _.N);
    var Wo = _.J || _.Gb && _.L("1.9.3");
    _.k = Vo.prototype;
    _.k.clientX = 0;
    _.k.clientY = 0;
    _.k.bf = 0;
    _.k.cf = 0;
    _.k.Cb = 0;
    _.k.Db = 0;
    _.k.bb=!1;
    _.k.L = function() {
        Vo.G.L.call(this);
        _.tc(this.k, ["touchstart", "mousedown"], this.td, !1, this);
        _.Ec(this.b);
        Wo && this.d.releaseCapture();
        this.k = this.target = null
    };
    _.k.td = function(a) {
        var c = "mousedown" == a.type;
        if (this.bb || c&&!pl(a))
            this.dispatchEvent("earlycancel");
        else if (Xo(a), this.dispatchEvent(new Yo("start", this, a.clientX, a.clientY))) {
            this.bb=!0;
            a.preventDefault();
            var c = this.d, d = c.documentElement, e=!Wo;
            this.b.b(c, ["touchmove", "mousemove"], this.C, e);
            this.b.b(c, ["touchend", "mouseup"], this.Cc, e);
            Wo ? (d.setCapture(!1), this.b.b(d, "losecapture", this.Cc)) : this.b.b(_.uf(c), "blur", this.Cc);
            this.w && this.b.b(this.w, "scroll", this.Nc, e);
            this.clientX = this.bf = a.clientX;
            this.clientY = this.cf = a.clientY;
            this.Cb = this.target.offsetLeft;
            this.Db = this.target.offsetTop;
            this.o = _.zf(_.Hf(this.d));
            (0, _.fa)()
        }
    };
    _.k.Cc = function(a, c) {
        _.Ec(this.b);
        Wo && this.d.releaseCapture();
        if (this.bb) {
            Xo(a);
            this.bb=!1;
            var d = Zo(this, this.Cb), e = $o(this, this.Db);
            this.dispatchEvent(new Yo("end", this, a.clientX, a.clientY, 0, d, e, c || "touchcancel" == a.type))
        } else 
            this.dispatchEvent("earlycancel")
    };
    var Xo = function(a) {
        var c = a.type;
        "touchstart" == c || "touchmove" == c ? a.init(a.b.targetTouches[0], a.d) : "touchend" != c && "touchcancel" != c || a.init(a.b.changedTouches[0], a.d)
    };
    Vo.prototype.C = function(a) {
        Xo(a);
        var c = 1 * (a.clientX - this.clientX), d = a.clientY - this.clientY;
        this.clientX = a.clientX;
        this.clientY = a.clientY;
        if (!this.bb) {
            var e = this.bf - this.clientX, f = this.cf - this.clientY;
            if (0 < e * e + f * f)
                if (this.dispatchEvent(new Yo("start", this, a.clientX, a.clientY)))
                    this.bb=!0;
                else {
                    this.Ja || this.Cc(a);
                    return 
                }
        }
        d = ap(this, c, d);
        c = d.x;
        d = d.y;
        this.bb && this.dispatchEvent(new Yo("beforedrag", this, a.clientX, a.clientY, 0, c, d)) && (bp(this, a, c, d), a.preventDefault())
    };
    var ap = function(a, c, d) {
        var e = _.zf(_.Hf(a.d));
        c += e.x - a.o.x;
        d += e.y - a.o.y;
        a.o = e;
        a.Cb += c;
        a.Db += d;
        c = Zo(a, a.Cb);
        a = $o(a, a.Db);
        return new _.Q(c, a)
    };
    Vo.prototype.Nc = function(a) {
        var c = ap(this, 0, 0);
        a.clientX = this.clientX;
        a.clientY = this.clientY;
        bp(this, a, c.x, c.y)
    };
    var bp = function(a, c, d, e) {
        a.target.style.left = d + "px";
        a.target.style.top = e + "px";
        a.dispatchEvent(new Yo("drag", a, c.clientX, c.clientY, 0, d, e))
    }, Zo = function(a, c) {
        var d = a.A, e = (0, window.isNaN)(d.left) ? null: d.left, d = (0, window.isNaN)(d.width) ? 0: d.width;
        return Math.min(null != e ? e + d : window.Infinity, Math.max(null != e ? e : - window.Infinity, c))
    }, $o = function(a, c) {
        var d = a.A, e = (0, window.isNaN)(d.top) ? null: d.top, d = (0, window.isNaN)(d.height) ? 0: d.height;
        return Math.min(null != e ? e + d : window.Infinity, Math.max(null != e ? e : - window.Infinity, c))
    }, Yo = function(a, c, d, e, f, g, h, l) {
        _.Xb.call(this, a);
        this.clientX = d;
        this.clientY = e;
        this.left = _.n(g) ? g : c.Cb;
        this.top = _.n(h) ? h : c.Db;
        this.k=!!l
    };
    _.v(Yo, _.Xb);
    var cp = function() {
        _.N.call(this);
        this.k = [];
        this.za = [];
        this.O = []
    };
    _.v(cp, _.N);
    _.k = cp.prototype;
    _.k.Fd=!1;
    _.k.Gd=!1;
    _.k.Ic=!1;
    _.k.ad = function(a) {
        this.za.push(a);
        this.Fd = a.Gd=!0
    };
    _.k.init = function() {
        if (!this.Ic) {
            for (var a, c = 0; a = this.k[c]; c++)
                this.$b(a);
            this.Ic=!0
        }
    };
    _.k.$b = function(a) {
        this.Fd && (_.M(a.b, "mousedown", a.Oe, !1, a), this.S && _.T(a.b, this.S));
        this.Gd && this.V && _.T(a.b, this.V)
    };
    _.k.oc = function(a) {
        this.Fd && (_.tc(a.b, "mousedown", a.Oe, !1, a), this.S && _.U(a.b, this.S));
        this.Gd && this.V && _.U(a.b, this.V);
        a.Y()
    };
    var fp = function(a) {
        a.U = [];
        for (var c, d = 0; c = a.za[d]; d++)
            for (var e, f = 0; e = c.k[f]; f++)
                for (var g = a, h = c, l = [e.b], q = g.U, r = 0; r < l.length; r++) {
                    var w = l[r], E, P = w;
                    E = _.hg(P);
                    P = _.mg(P);
                    E = new _.bg(E.y, E.x + P.width, E.y + P.height, E.x);
                    q.push(new dp(E, h, e, w));
                    ep(g, E)
                }
        a.w || (a.w = new _.bg(0, 0, 0, 0))
    }, gp = function(a) {
        var c, d, e, f;
        for (d = 0; c = a.O[d]; d++)
            c.b = [], c.d = c.D.scrollLeft, c.k = c.D.scrollTop, e = _.hg(c.D), f = _.mg(c.D), c.fa = new _.bg(e.y, e.x + f.width, e.y + f.height, e.x);
        for (d = 0; f = a.U[d]; d++)
            for (e = 0; c = a.O[e]; e++)
                _.rf(c.D, f.D) && (c.b.push(f),
                f.ec = c)
    };
    cp.prototype.ia = function(a) {
        var c = a.k ? null: this.F;
        if (c && c.Z) {
            var d = a.clientX;
            a = a.clientY;
            var e = _.zf(_.Hf(this.J)), f = d + e.x, e = a + e.y, g;
            this.C && (g = this.C(c.Qa, c.fa, f, e));
            this.dispatchEvent(new hp("drag", 0, this.d, 0, c.Qa, 0, d, a));
            c.Z.dispatchEvent(new hp("drop", 0, this.d, 0, c.Qa, 0, d, a, 0, 0, g))
        }
        this.dispatchEvent(new hp("dragend", 0, this.d));
        _.tc(this.o, "drag", this.ta, !1, this);
        _.tc(this.o, "end", this.ia, !1, this);
        _.tc(_.Af(this.d.Rb).body, "selectstart", this.ya);
        for (c = 0; d = this.O[c]; c++)
            _.tc(d.D, "scroll", this.X,
            !1, this), d.b = [];
        this.o.Y();
        _.sf(this.J);
        delete this.d;
        delete this.J;
        delete this.o;
        delete this.U;
        delete this.F
    };
    cp.prototype.ta = function(a) {
        var c, d = _.zf(_.Hf(this.J));
        c = new _.Q(a.clientX + d.x, a.clientY + d.y);
        var d = c.x, e = c.y, f = this.F, g;
        if (f) {
            this.C && f.Z && (g = this.C(f.Qa, f.fa, d, e));
            if (f.fa.contains(c) && g == this.W)
                return;
            f.Z && (this.dispatchEvent(new hp("dragout", 0, this.d, 0, f.Qa)), f.Z.dispatchEvent(new hp("dragout", 0, this.d, 0, f.Qa, 0, void 0, void 0, 0, 0, this.W)));
            this.W = g;
            this.F = null
        }
        if (this.w.contains(c)) {
            t:
            {
                for (var h = 0; f = this.U[h]; h++)
                    if (f.fa.contains(c))
                        if (f.ec) {
                            if (f.ec.fa.contains(c)) {
                                c = f;
                                break t
                            }
                        } else {
                            c = f;
                            break t
                        }
                c =
                null
            }
            if ((f = this.F = c) && f.Z)
                this.C && (g = this.C(f.Qa, f.fa, d, e)), d = new hp("dragover", 0, this.d, 0, f.Qa), d.k = g, this.dispatchEvent(d), f.Z.dispatchEvent(new hp("dragover", 0, this.d, 0, f.Qa, 0, a.clientX, a.clientY, 0, 0, g));
            else if (!f) {
                this.b || (this.b = new dp(this.w.clone()));
                a = this.b.fa;
                a.top = this.w.top;
                a.right = this.w.right;
                a.bottom = this.w.bottom;
                a.left = this.w.left;
                for (g = 0; f = this.U[g]; g++)
                    c = f.fa, f.ec && (f = f.ec.fa, c = new _.bg(Math.max(c.top, f.top), Math.min(c.right, f.right), Math.min(c.bottom, f.bottom), Math.max(c.left,
                    f.left))), f = null, d >= c.right ? f = c.right > a.left ? c.right : a.left : d < c.left && (f = c.left < a.right ? c.left : a.right), h = null, e >= c.bottom ? h = c.bottom > a.top ? c.bottom : a.top : e < c.top && (h = c.top < a.bottom ? c.top : a.bottom), null === f || null === h || (Math.abs(f - d) > Math.abs(h - e) ? h = null : f = null), null !== f ? f <= d ? a.left = f : a.right = f : null !== h && (h <= e ? a.top = h : a.bottom = h);
                this.F = 10 <= (a.right - a.left) * (a.bottom - a.top) ? this.b : null
            }
        }
    };
    cp.prototype.ya = function() {
        return !1
    };
    cp.prototype.X = function(a) {
        for (var c = 0, d; d = this.O[c]; c++)
            if (a.target == d.D) {
                var e = d.k - d.D.scrollTop, f = d.d - d.D.scrollLeft;
                d.k = d.D.scrollTop;
                d.d = d.D.scrollLeft;
                this.b && this.F == this.b && (0 < e ? this.b.fa.top += e : this.b.fa.bottom += e, 0 < f ? this.b.fa.left += f : this.b.fa.right += f);
                for (var g = 0, h; h = d.b[g]; g++)
                    h = h.fa, h.top += e, h.left += f, h.bottom += e, h.right += f, ep(this, h)
            }
        this.o.Nc(a)
    };
    var ep = function(a, c) {
        if (1 == a.U.length)
            a.w = new _.bg(c.top, c.right, c.bottom, c.left);
        else {
            var d = a.w;
            d.left = Math.min(c.left, d.left);
            d.right = Math.max(c.right, d.right);
            d.top = Math.min(c.top, d.top);
            d.bottom = Math.max(c.bottom, d.bottom)
        }
    };
    cp.prototype.L = function() {
        cp.G.L.call(this);
        for (var a, c = 0; a = this.k[c]; c++)
            this.oc(a);
        this.k.length = 0
    };
    var hp = function(a, c, d, e, f, g, h, l, q, r, w) {
        _.Xb.call(this, a);
        this.w = d;
        this.C = f;
        this.clientX = h;
        this.clientY = l;
        this.k = w
    };
    _.v(hp, _.Xb);
    var ip = function(a, c) {
        _.N.call(this);
        this.b = _.hm(a);
        this.data = c;
        this.k = null;
        this.d = new _.yc(this);
        _.he(this, this.d);
        if (!this.b)
            throw Error("ca");
    };
    _.v(ip, _.N);
    _.k = ip.prototype;
    _.k.Rb = null;
    _.k.ve = function(a) {
        return a
    };
    _.k.Oe = function(a) {
        if (pl(a)) {
            var c = this.ve(a.target);
            c && (this.d.b(c, "mousemove", this.Pe, !1).b(c, "mouseout", this.Pe, !1), this.d.b(_.Af(c), "mouseup", this.Zg, !0), this.Rb = c, this.o = new _.Q(a.clientX, a.clientY), a.preventDefault())
        }
    };
    _.k.Pe = function(a) {
        var c = this.Rb, c = "mouseout" == a.type && a.target == c;
        if (5 < Math.abs(a.clientX - this.o.x) + Math.abs(a.clientY - this.o.y) || c)
            if (_.Ec(this.d), c = this.k, !c.d)
                if (c.d = this, 0 == c.dispatchEvent(new hp("dragstart", 0, c.d)))
                    c.d = null;
                else {
                    var d = this.Rb, e;
                    t:
                    {
                        e = d.cloneNode(!0);
                        for (var f = d.getElementsByTagName("textarea"), g = e.getElementsByTagName("textarea"), h = 0; h < f.length; h++)
                            g[h].value = f[h].value;
                            switch (d.tagName.toLowerCase()) {
                            case "tr":
                                e = _.O("table", null, _.O("tbody", null, e));
                                break t;
                            case "td":
                            case "th":
                                e =
                                _.O("table", null, _.O("tbody", null, _.O("tr", null, e)));
                                break t;
                            case "textarea":
                                e.value = d.value
                            }
                        }
                        c.ha && _.T(e, c.ha);
                        c.J = e;
                        e = _.Af(d);
                        e.body.appendChild(c.J);
                        f = c.J;
                        g = _.hg(d);
                        d = _.tg(d, "margin");
                        g.x -= 2 * (d.left || 0);
                        g.y -= 2 * (d.top || 0);
                        f.style.position = "absolute";
                        f.style.left = g.x + "px";
                        f.style.top = g.y + "px";
                        d = new Vo(f);
                        c.o = d;
                        c.o.w = c.Pa;
                        _.M(c.o, "drag", c.ta, !1, c);
                        _.M(c.o, "end", c.ia, !1, c);
                        _.M(e.body, "selectstart", c.ya);
                        fp(c);
                        gp(c);
                        c.F = null;
                        for (e = 0; d = c.O[e]; e++)
                            _.M(d.D, "scroll", c.X, !1, c);
                            c.o.td(a);
                            a.preventDefault()
                }
    };
    _.k.Zg = function() {
        _.Ec(this.d);
        delete this.o;
        this.Rb = null
    };
    var dp = function(a, c, d, e) {
        this.fa = a;
        this.Z = c;
        this.Qa = d;
        this.D = e
    };
    dp.prototype.ec = null;
    var jp = function(a) {
        this.b = [];
        this.D = a;
        this.k = this.d = 0;
        this.fa = null
    };
    var kp = function(a, c) {
        cp.call(this);
        var d = new ip(a, c);
        d.k = this;
        this.k.push(d)
    };
    _.v(kp, cp);
    var lp = function(a, c, d) {
        _.y.call(this);
        this.b = a;
        this.d = new _.gd(50);
        this.w = new _.yc(this);
        this.o = new _.Q;
        this.A = _.ng(a);
        this.B = c || 0;
        if (c) {
            if (a = this.A.clone(), c = this.B) {
                var e = Math.min(c, .25 * a.height);
                a.top += e;
                a.height -= 2 * e;
                c = Math.min(c, .25 * a.width);
                a.top += c;
                a.height -= 2 * c
            }
        } else 
            a = this.A;
        this.k = a;
        d || this.w.b(_.Af(this.b), "mousemove", this.F);
        this.w.b(this.d, "tick", this.K)
    };
    _.v(lp, _.y);
    lp.prototype.C=!0;
    lp.prototype.K = function() {
        this.b.scrollTop += this.o.y;
        this.b.scrollLeft += this.o.x
    };
    lp.prototype.F = function(a) {
        var c = this.C ? mp(a.clientX, this.k.left, this.k.width): 0;
        a = mp(a.clientY, this.k.top, this.k.height);
        this.o.x = c;
        this.o.y = a;
        (c=!c&&!a) || (c=!1);
        c ? _.id(this.d) : this.d.enabled || _.hd(this.d)
    };
    var mp = function(a, c, d) {
        var e = 0;
        a < c ? e =- 8 : a > c + d && (e = 8);
        return e
    };
    lp.prototype.L = function() {
        lp.G.L.call(this);
        this.w.Y();
        this.d.Y()
    };
    var np = function() {
        cp.call(this)
    };
    _.v(np, cp);
    np.prototype.removeItem = function(a) {
        a = _.hm(a);
        for (var c, d = 0; c = this.k[d]; d++)
            if (c.b == a) {
                this.k.splice(d, 1);
                this.oc(c);
                break
            }
    };
    var op = function(a, c) {
        cp.call(this);
        this.R=!1;
        this.B = [];
        this.na = c ||!1;
        this.H = null;
        this.M = a;
        this.A = {}
    };
    _.v(op, np);
    _.k = op.prototype;
    _.k.dh = _.Eg.P();
    _.k.ad = function(a) {
        op.G.ad.call(this, a);
        this.B.push(a);
        this.R=!0
    };
    _.k.init = function() {
        op.G.init.call(this);
        this.na && this.R && _.M(this.M, "keydown", this.Qe, !1, this)
    };
    _.k.L = function() {
        this.na && this.R && _.tc(this.M, "keydown", this.Qe, !1, this);
        op.G.L.call(this)
    };
    _.k.$b = function(a) {
        op.G.$b.call(this, a);
        var c = a.b, c = c.id || (c.id = "ogbkddg" + _.Fg(this.dh));
        this.A[c] = a
    };
    _.k.oc = function(a) {
        delete this.A[a.b.id];
        op.G.oc.call(this, a)
    };
    _.k.Qe = function(a) {
        var c;
        t: {
            c = a.target;
            if (this.A)
                for (var d = this.M; c && c !== d;) {
                    var e = c.id;
                    if (e in this.A) {
                        c = this.A[e];
                        break t
                    }
                    c = c.parentNode
                }
            c = null
        }
        if (c)
            if (32 == a.keyCode)
                this.H ? this.Wb(0, c) : (this.H = c, _.T(this.M, "gb_ac"), _.T(c.b, "gb_u"), this.sa = _.M(window.document, "mousedown", (0, _.t)(this.Wb, this, a, c, !1)), _.M(this.M, _.Yb, this.Ee, !1, this), d = new hp("dragstart", 0, c), d.B = "kbd", this.dispatchEvent(d), pp(c.b).focus()), a.preventDefault(), a.stopPropagation();
            else if (this.H) {
                d = null;
                switch (a.keyCode) {
                case 37:
                    for (a =
                    em(c.b); a&&!(a.id in this.A);)
                        a = em(a);
                        e = d =- 1;
                        if (a)
                            var f = dm(a), d = qp(this, f), e = kl(f), e = (0, _.la)(e, a);
                        else if (f = dm(c.b), d = qp(this, f) - 1, 0 <= d) {
                            f = this.B[d].k[0].b;
                            for (a = void 0 != f.lastElementChild ? f.lastElementChild : _.Vl(f.lastChild, !1); a&&!(a.id in this.A);
                            )a = em(a);
                            a ? (e = kl(f), e = (0, _.la)(e, a), e++) : e = 0
                        } else 
                            d =- 1;
                            d =- 1 == d ? null : new rp(this.B[d], e);
                            break;
                        case 39:
                            for (a = fm(c.b); a&&!(a.id in this.A);)
                                a = fm(a);
                                e = d =- 1;
                                a ? (f = dm(a), d = qp(this, f), e = kl(f), e = (0, _.la)(e, a)) : (f = dm(c.b), d = qp(this, f) + 1, d < this.B.length ? e = 0 : d =
                                - 1);
                                d =- 1 == d ? null : new rp(this.B[d], e);
                                break;
                            case 9:
                                this.Wb(0, c);
                                break;
                            case 27:
                                this.Wb(0, c, !0)
                            }
                            d && (this.dispatchEvent(new hp("dragout", 0, c)), a = new hp("dragover", 0, null), a.C = d.target.k[0], a.k = d.b, this.dispatchEvent(a), pp(c.b).focus())
            }
        };
    _.k.Ee = function(a) {
        var c = pp(this.H.b);
        a.target != c && this.Wb(0, this.H)
    };
    _.k.Wb = function(a, c, d) {
        _.U(this.M, "gb_ac");
        d ? this.dispatchEvent(new hp("dragout", 0, c)) : (a = dm(c.b), a = qp(this, a), (a =- 1 != a ? this.B[a] : null) && a.dispatchEvent(new hp("drop", 0, null)));
        this.dispatchEvent(new hp("dragend", 0, c));
        _.uc(this.sa);
        delete this.sa;
        _.tc(this.M, _.Yb, this.Ee, !1, this);
        this.H = null;
        _.U(c.b, "gb_u")
    };
    var qp = function(a, c) {
        for (var d =- 1, e = 0; e < a.B.length; e++)
            if (a.B[e].k[0].b == c) {
                d = e;
                break
            }
        return d
    }, pp = function(a) {
        return bm(a, function(a) {
            var d;
            if (d = _.Bf(a))(d = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName?!a.disabled && (!Jl(a) || Il(a)) : Jl(a) && Il(a)
                ) && _.J ? (a = _.yb(a.getBoundingClientRect) ? a.getBoundingClientRect() : {
                height: a.offsetHeight,
                width: a.offsetWidth
            }, a = null != a && 0 < a.height && 0 < a.width) : a = d, d = a;
            return d
        })
    }, rp = function(a, c) {
        this.target = a;
        this.b = c
    };
    var tp = function(a, c, d) {
        _.N.call(this);
        this.o = new _.pm(this);
        this.d = a;
        this.M = c;
        c = new op(a.k, d);
        sp(c, _.gm("gb_m", a.A));
        sp(c, _.gm("gb_m", a.o));
        this.w = c;
        this.A = new kp(this.d.A);
        this.C = new kp(this.d.o);
        this.R = this.k = this.B = null;
        this.S = 0;
        this.b = null;
        this.H = _.O("LI", {
            "class": "gb_m",
            visibility: "hidden"
        });
        this.J = _.X("gb_S");
        this.O = this.F=!1;
        this.U = _.pg(this.d.k);
        a = this.w;
        c = [this.A, this.C];
        for (d = 0; d < c.length; d++)
            a.ad(c[d]);
        a.ha = "gb_o";
        a.O.push(new jp(this.d.k));
        c = (0, _.t)(this.kd, this);
        a.C = c;
        this.o.b(a, "dragstart",
        this.V);
        this.o.b(a, "dragend", this.Yf);
        this.o.b(a, "dragover", this.$f);
        this.o.b(a, "dragout", this.Zf);
        a = this.A;
        if (c = (0, _.t)(this.kd, this))
            a.C = c;
        this.o.b(a, "drop", this.De);
        a = this.C;
        if (c = (0, _.t)(this.kd, this))
            a.C = c;
        this.o.b(a, "drop", this.De);
        this.w.init();
        this.A.init();
        this.C.init();
        this.J && this.o.b(this.J, "click", this.Qf)
    };
    _.v(tp, _.N);
    var up = new _.lf(88, 100), sp = function(a, c) {
        for (var d = 0; d < c.length; d++) {
            var e = new vp(c[d]), f = a;
            e.k = f;
            f.k.push(e);
            f.Ic && f.$b(e)
        }
    };
    tp.prototype.V = function(a) {
        this.o.F(this.d.k, _.Zb, this.W);
        var c = this.d;
        c.ha=!0;
        wp(c, !0, !0);
        var c = a.w.b, d = dm(c);
        xp(this);
        1 == kl(d).length%this.b.Pb && d.appendChild(this.H);
        this.k = c;
        this.S = (0, _.la)(kl(dm(c)), c);
        this.R = dm(c);
        _.Pf(c, "grabbed", "true");
        "kbd" != a.B && (this.B = new lp(this.d.k, 32), this.B.C=!1)
    };
    tp.prototype.W = function() {
        fp(this.w);
        gp(this.w)
    };
    var xp = function(a) {
        if (!a.b) {
            var c = a.d.A, d = _.mg(c);
            a.b = {
                Qc: _.tg(c, "padding"),
                Ob: up
            };
            a.b.Pb = Math.floor((d.width - a.b.Qc.left - a.b.Qc.right) / a.b.Ob.width)
        }
    };
    _.k = tp.prototype;
    _.k.Yf = function(a) {
        _.Pf(a.w.b, "grabbed", "false");
        this.B && (_.bb(this.B), this.B = null);
        this.k && (_.sf(this.H), a = this.R, a.insertBefore(this.k, a.childNodes[this.S] || null), this.k = null)
    };
    _.k.$f = function(a) {
        var c = a.C.b;
        c.insertBefore(this.k, c.childNodes[a.k || 0] || null);
        fp(this.A);
        fp(this.C)
    };
    _.k.Zf = function() {
        _.sf(this.k);
        fp(this.A);
        fp(this.C)
    };
    _.k.De = function() {
        this.k = null;
        _.sf(this.H);
        this.dispatchEvent(new yp("linkmoved"));
        this.F || (this.F=!0, _.W(50))
    };
    _.k.kd = function(a, c, d, e) {
        xp(this);
        a = e - (c.top + this.b.Qc.top);
        c = _.le(Math.floor((d - (c.left + this.b.Qc.left)) / this.b.Ob.width), 0, this.b.Pb - 1);
        this.U && (c = this.b.Pb - 1 - c);
        d = _.le(Math.floor(a / this.b.Ob.height), 0, window.Infinity);
        return c + d * this.b.Pb
    };
    _.k.Qf = function(a) {
        a.preventDefault();
        var c = this.d.A;
        if (c && this.w && this.M) {
            a = this.w;
            var d = this.M, e = _.O("SPAN", _.F(d, 5) ? "gb_q" : "gb_a");
            e.style.backgroundPosition = _.F(d, 5);
            var f = _.O("SPAN", "gb_r");
            _.Gf(f, _.A(_.F(d, 3)));
            var g = {
                "class": "gb_c",
                "data-pid": _.F(d, 1),
                href: _.F(d, 2),
                id: "gb" + _.F(d, 1)
            };
            _.F(d, 6) && (g["class"] += " gbpq");
            _.F(d, 4) && (g.target = _.F(d, 4));
            _.F(d, 7) && (g.rel = "noreferrer");
            d = _.O("A", g, e, f);
            d = _.O("LI", "gb_m", d);
            c.appendChild(d);
            c = new vp(d);
            c.k = a;
            a.k.push(c);
            a.Ic && a.$b(c);
            this.dispatchEvent(new yp("linkadded"));
            this.F || (this.F=!0, _.W(50));
            _.W(51, {
                a: _.F(this.M, 1)
            })
        }
    };
    var vp = function(a, c) {
        ip.call(this, a, c)
    };
    _.v(vp, ip);
    vp.prototype.ve = function(a) {
        for (; !_.S(a, "gb_m");)
            a = dm(a);
        return a
    };
    var yp = function(a) {
        _.Xb.call(this, a)
    };
    _.v(yp, _.Xb);
    var zp = function(a) {
        this.d = a;
        this.k = _.x("s")
    }, Ap = function(a, c) {
        var d = new Zn, e = (0, _.oa)(c.Tg, a.b, a);
        lm(d, 1, e);
        e = (0, _.oa)(c.Wg, a.b, a);
        lm(d, 2, e);
        return d
    };
    zp.prototype.b = function(a) {
        var c = new Yn, d = new Xn;
        _.cb(d, 1, a);
        _.cb(c, 1, 2);
        mm(c, d);
        return c
    };
    var Bp = function(a) {
        var c = _.gm("gb_c", a.d.A);
        a = _.gm("gb_c", a.d.o);
        var d = function(a) {
            return _.ne(a.getAttribute("data-pid"))
        };
        return {
            Tg: (0, _.oa)(c, d),
            Wg: (0, _.oa)(a, d)
        }
    };
    var Dp = function(a, c, d) {
        Ro.call(this, a, "aw");
        this.X = (this.A = _.X("gb_x", this.k)) ? _.X("gb_c", this.A) : null;
        this.w = _.X("gb_C", this.k);
        this.ka = (this.o = _.X("gb_y", this.k)) ? _.X("gb_c", this.o) : null;
        this.J = _.X("gb_Vb", this.k);
        this.B = _.X("gb_K", this.k);
        this.T = _.X("gb_1b", this.k);
        this.O = _.X("gb_P");
        _.X("gb_s");
        this.W = this.K = this.S = 0;
        this.Pa = new Io(this.k);
        this.Q = _.z(_.F(c, 8)) ? new tp(this, _.G(c, Dl, 9), _.z(_.F(c, 11))) : null;
        this.eb = _.z(_.F(c, 8)) ? new zp(this) : null;
        this.nh = _.z(_.F(c, 10));
        this.Pg = (this.ia = _.z(_.F(c,
        1))) && _.z(_.F(c, 12));
        this.sh = d;
        this.ia && (this.za = this.ya=!1, this.$g = _.A(_.F(c, 2)), this.Sg = _.A(_.F(c, 4)), this.Qg = _.z(_.F(c, 5)), this.Oa = _.A(_.F(c, 6)), this.bh = _.A(_.F(c, 7)));
        this.ha=!1;
        this.sa = _.G(c, Dl, 9);
        this.H = null;
        this.w&&!this.nh && (_.ol(this, this.w, _.ml, this.og), _.U(this.w, "gb_U"), this.w.setAttribute("aria-expanded", "false"), this.w.setAttribute("aria-hidden", "true"));
        this.o && this.o.setAttribute("aria-hidden", "true");
        this.J && (_.ol(this, this.J, _.ml, this.eg), this.J.setAttribute("aria-hidden", "true"));
        this.B && this.B.setAttribute("aria-hidden", "true");
        this.T && (_.ol(this, this.T, _.ml, this.lg), this.T.setAttribute("aria-hidden", "true"));
        this.Q && (this.b(this.Q, "linkmoved", this.ta), this.b(this.Q, "linkadded", this.kb));
        this.b(this.k, "scroll", this.cg);
        this.b(this.Pa, "mousewheel", this.pg);
        if (Cp(this)) {
            _.U(this.O, "gb_Tb");
            if (a = _.X("gb_q", this.O))
                a = a.style.backgroundPosition.split(" "), _.Uo(".gb_P .gb_q::before{left:" + a[0] + ";top:" + a[1] + "}");
            (a = _.X("gb_a", this.O)) && _.Uo(".gb_b .gb_P .gb_a::before{content:" +
            a.style.backgroundImage + "}")
        }
    };
    _.v(Dp, Ro);
    Dp.prototype.L = function() {
        Dp.G.L.call(this);
        this.Pa.Y();
        this.V = this.T = this.J = this.o = this.w = this.A = this.k = null
    };
    var Cp = function(a) {
        return a.sa && a.O ? (a = _.F(a.sa, 1), !!a&&!_.hm("gb" + a)) : !1
    }, wp = function(a, c, d) {
        c || (a.ha=!1);
        Ep(a, c);
        _.Xl(a.k, "gb_J", c);
        a.w && (a.w.setAttribute("aria-hidden", c + ""), a.w.setAttribute("aria-expanded", c + ""));
        a.o && a.o.setAttribute("aria-hidden", !c + "");
        a.J && a.J.setAttribute("aria-hidden", !c + "");
        a.B && a.B.setAttribute("aria-hidden", !c + "");
        a.T && a.T.setAttribute("aria-hidden", !c + "");
        if (c && a.ka&&!d)
            try {
                a.ka.focus()
        } catch (e) {
            _.H(e)
        }
    };
    _.k = Dp.prototype;
    _.k.og = function(a) {
        a.preventDefault();
        wp(this, !0);
        t: {
            a = new $l(this.k, [this.k.scrollLeft, this.k.scrollTop], [this.k.scrollLeft, this.o.offsetTop], 200, Lo);
            if (0 == a.b)
                a.k = 0, a.o = a.A;
            else if (1 == a.b)
                break t;
            _.zg(a);
            var c = (0, _.fa)();
            a.w = c;
            - 1 == a.b && (a.w -= a.J * a.k);
            a.O = a.w + a.J;
            a.k || a.M();
            a.d("play");
            - 1 == a.b && a.d("resume");
            a.b = 1;
            var d = _.Nf(a);
            d in _.xg || (_.xg[d] = a);
            _.Bg();
            _.Cg(a, c)
        }
    };
    _.k.eg = function() {
        _.W(1, {
            t: 66
        })
    };
    _.k.lg = function(a) {
        if (this.Pg) {
            a.preventDefault();
            a = _.p("gapi.load");
            var c = this.sh;
            a("additnow", function() {
                var a = {
                    sidx: c,
                    pann: "ogb"
                };
                _.p("gapi.additnow.renderappfinder")(a)
            })
        }
        _.W(1, {
            t: 91
        })
    };
    _.k.Oc = function() {
        Dp.G.Oc.call(this);
        this.k.scrollTop = 0;
        this.w && this.w.setAttribute("aria-hidden", "false");
        window.setTimeout(_.ee(_.T, this.k, "gb_E"), 0);
        if (this.X)
            try {
                this.X.focus()
        } catch (a) {
            _.H(a)
        }
        this.H = _.om(this.k, "keydown", this.bg, !1, this);
        if (this.ia&&!this.ya) {
            this.ya=!0;
            this.V = _.O("IMG", {
                src: "//ssl.gstatic.com/gb/images/spinner_32.gif"
            });
            this.B.appendChild(this.V);
            var c = "gbar.mkplcb" + (100 * Math.random()>>>0);
            _.u(c, (0, _.t)(this.Rg, this));
            c = _.O("SCRIPT", {
                src: _.im(this.$g, "callback", c)
            });
            this.b(c,
            ["error", "load", "readystatechange"], this.mg);
            this.B.appendChild(c)
        }
        Ep(this, !1);
        if (this.Q && (c = this.Q, !c.O)) {
            var d = _.ag();
            xp(c);
            for (var e = c.b.Pb, f = c.b.Ob.width, g = c.b.Ob.height, h = [], l = 1 + _.gm("gb_m", c.d.k).length, q = 0; q < l; q++) {
                var r = q%e, r = ["transform:translate(", r * f * (c.U?-1 : 1), "px,", (q - r) / e * g, "px);"].join("");
                d && (r = [d, "-", r, r].join(""));
                h.push([".gb_T .gb_F :nth-of-type(", q + 1, ") .gb_c{", r, "}"].join(""))
            }
            _.ma(h, _.Uo);
            e = "transition:transform .2s cubic-bezier(.333, 0, 0, 1);";
            d && (e = [d, "-transition:", d, "-transform .2s cubic-bezier(.333, 0, 0, 1);",
            e].join(""));
            window.setTimeout(_.ee(_.Uo, [".gb_T:not(.gb_ac) .gb_c{", e, "}"].join("")), 0);
            c.O=!0
        }
    };
    _.k.ed = function() {
        Dp.G.ed.call(this);
        wp(this, !1);
        this.w && this.w.setAttribute("aria-hidden", "true");
        this.H && (_.uc(this.H), this.H = null);
        _.U(this.k, "gb_t");
        try {
            this.d.focus()
        } catch (a) {
            _.H(a)
        }
    };
    _.k.bg = function(a) {
        9 != a.keyCode || _.S(this.k, "gb_t") || (_.T(this.k, "gb_t"), this.H && (_.uc(this.H), this.H = null))
    };
    var Fp = function(a) {
        a.K = 0;
        a.S = 0;
        a.W = 0;
        Ep(a, _.S(a.k, "gb_J"))
    }, Ep = function(a, c) {
        if (!a.S) {
            var d = a.w || a.J, e = d.style.display;
            d.style.display = "block";
            a.S = d.offsetTop + d.offsetHeight;
            d.style.display = e
        }
        a.K || (d = _.S(a.k, "gb_J"), _.T(a.k, "gb_J"), a.K = a.k.scrollHeight, a.W = a.K, a.o && (a.K -= a.o.offsetTop), _.Xl(a.k, "gb_J", d));
        _.U(a.k, "gb_N");
        var f;
        a.ha ? f = a.W : c ? f = a.K : f = a.S;
        a.k.style.height = _.kg(f, !0);
        a.R.Re()
    };
    _.k = Dp.prototype;
    _.k.cg = function() {
        0 >= this.k.scrollTop && (this.Q && this.Q.k || wp(this, !1))
    };
    _.k.pg = function(a) {
        var c = this.k;
        _.S(this.k, "gb_J") ? ((0 == c.scrollTop && 0 > a.K || c.scrollTop == c.scrollHeight - c.clientHeight && 0 < a.K) && a.preventDefault(), 0 > a.K && 0 >= this.k.scrollTop && wp(this, !1)) : 0 < a.K && (wp(this, !0, !0), a.preventDefault())
    };
    _.k.Rg = function(a) {
        try {
            var c = a && a.installedApps;
            this.za=!0;
            if (!a || c&&!_.ab(c))
                throw Gp(this, this.Oa), new Hp;
            c = c || [];
            _.sf(this.V);
            _.U(this.B, "gb_L");
            0 == c.length && Gp(this, this.bh);
            var d = _.uf();
            a = _.Gb && _.Hb;
            for (var e = 1 < (_.n(d.devicePixelRatio)&&!a ? d.devicePixelRatio : d.matchMedia ? Sl(.75) || Sl(1.5) || Sl(2) || Sl(3) || 1 : 1), d = 0; d < c.length; d++) {
                var f = c[d], g = _.O("SPAN", "gb_q"), h = _.O("SPAN", "gb_r", f.name), l = _.O("A", {
                    className: "gb_c",
                    href: f.url,
                    target: "_blank"
                }, g, h), q = f.iconUrl48x48, r = f.iconUrl96x96;
                if (a = e ? r || q :
                q || r) {
                    var w = _.O("IMG", "gb_Tb");
                    this.b(w, "load", this.Xf);
                    l.insertBefore(w, h);
                    w.src = a
                }
                this.Qg && l.setAttribute("rel", "noreferrer");
                var E = _.O("LI", "gb_m", l);
                this.B.appendChild(E);
                _.ol(this, l, _.ml, (0, _.t)(this.Zb, this, f.name));
                this.b(E, "mousedown", this.kg)
            }
            this.K = 0;
            Ep(this, _.S(this.k, "gb_J"))
        } catch (P) {
            _.H(P)
        }
    };
    _.k.kg = function(a) {
        a.preventDefault()
    };
    _.k.Xf = function(a) {
        a = a.d;
        _.U(a, "gb_Tb");
        _.T(a.previousSibling, "gb_Tb")
    };
    _.k.mg = function(a) {
        if (("readystatechange" != a.type || "loaded" == a.target.readyState)&&!this.za)
            throw Gp(this, this.Oa), new Ip;
    };
    var Gp = function(a, c) {
        _.sf(a.V);
        _.U(a.B, "gb_L");
        a.B.appendChild(_.O("DIV", "gb_M", c));
        a.K = 0;
        Ep(a, _.S(a.k, "gb_J"))
    };
    Dp.prototype.Zb = function(a) {
        _.W(14, {
            ppd: this.Sg,
            ppa: a
        })
    };
    Dp.prototype.ta = function() {
        Fp(this);
        this.X = this.A ? _.X("gb_c", this.A) : null;
        this.ka = this.o ? _.X("gb_c", this.o) : null;
        var a = this.eb, c;
        c = c || Bp(a);
        a.k.set(Ap(a, c))
    };
    Dp.prototype.kb = function() {
        _.T(this.O, "gb_Tb");
        this.ta()
    };
    var Ip = function() {
        _.ga.call(this)
    };
    _.v(Ip, _.ga);
    var Hp = function() {
        _.ga.call(this)
    };
    _.v(Hp, _.ga);
    var Jp = function(a) {
        _.y.call(this);
        this.b = a
    };
    _.v(Jp, _.y);
    _.Xa(function() {
        var a = _.X("gb_z"), c = _.X("gb_Ub");
        if (a && c) {
            c && a && c.parentNode != a && a.appendChild(c);
            var c = _.I().vc() || new _.Ka, d = _.zj() || new _.yj, a = new Dp(a, c, _.F(d, 5));
            _.wa("aw", new Jp(a))
        }
    });
    var Kp = function(a) {
        this.b = a
    }, Lp = /\s*;\s*/;
    _.k = Kp.prototype;
    _.k.set = function(a, c, d, e, f, g) {
        if (/[;=\s]/.test(a))
            throw Error("da`" + a);
        if (/[;\r\n]/.test(c))
            throw Error("ea`" + c);
        _.n(d) || (d =- 1);
        f = f ? ";domain=" + f : "";
        e = e ? ";path=" + e : "";
        g = g ? ";secure" : "";
        d = 0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date((0, _.fa)() + 1E3 * d)).toUTCString();
        this.b.cookie = a + "=" + c + f + e + d + g
    };
    _.k.get = function(a, c) {
        for (var d = a + "=", e = (this.b.cookie || "").split(Lp), f = 0, g; g = e[f]; f++) {
            if (0 == g.lastIndexOf(d, 0))
                return g.substr(d.length);
            if (g == a)
                return ""
        }
        return c
    };
    _.k.remove = function(a, c, d) {
        var e = _.n(this.get(a));
        this.set(a, "", 0, c, d);
        return e
    };
    _.k.Ea = function() {
        return Mp(this).keys
    };
    _.k.Fa = function() {
        return Mp(this).Jh
    };
    _.k.cc = function() {
        return !this.b.cookie
    };
    _.k.clear = function() {
        for (var a = Mp(this).keys, c = a.length - 1; 0 <= c; c--)
            this.remove(a[c])
    };
    var Mp = function(a) {
        a = (a.b.cookie || "").split(Lp);
        for (var c = [], d = [], e, f, g = 0; f = a[g]; g++)
            e = f.indexOf("="), - 1 == e ? (c.push(""), d.push(f)) : (c.push(f.substring(0, e)), d.push(f.substring(e + 1)));
        return {
            keys: c,
            Jh: d
        }
    }, Np = new Kp(window.document);
    Np.d = 3950;
    var Op = function(a, c, d) {
        this.b = a;
        this.k = "dp_" + a;
        this.o = "count_" + a;
        this.A = c;
        this.d=!!d
    };
    Op.prototype.Xd = function() {
        return !!window.navigator.cookieEnabled
    };
    Op.prototype.pa = function(a) {
        this.Xd() && this.nc(a)
    };
    Op.prototype.nc = function() {
        throw Error("fa");
    };
    var Pp = function(a) {
        0 < a.A && a.Xd() && a.Gc(void 0, void 0)
    };
    Op.prototype.Gc = function() {
        throw Error("fa");
    };
    var Qp = function(a) {
        var c;
        (c = a.Dd()) || (c = 0 < a.A && a.qb() >= a.A);
        return c
    };
    Op.prototype.qb = function() {
        return 0
    };
    Op.prototype.Dd = function() {
        return !1
    };
    var Rp = function(a, c, d) {
        Op.call(this, a, c);
        this.w =- 2 == d ? 94608E4 : d;
        this.C = new RegExp("\\b" + this.b + "-([0-9]+):")
    };
    _.v(Rp, Op);
    var Sp = function() {
        var a = _.m.location.hostname.match("google(?:.[a-z]{2,3}){1,2}$");
        if (a && a[0])
            return a[0];
        _.H(Error("ga"));
        return null
    };
    _.k = Rp.prototype;
    _.k.Xd = function() {
        window.navigator.cookieEnabled || (this.w =- 1);
        return !0
    };
    _.k.nc = function() {
        var a = Np.get("OGP", ""), a = a + ("-" + this.b + ":"), c = Sp();
        c && Np.set("OGP", a, this.w, "/", c)
    };
    _.k.Gc = function(a) {
        var c;
        c = Np.get("OGPC", "");
        var d = this.qb(c), e=!0;
        - 1 == d && (e=!1, d = 0);
        a = this.b + "-" + (d + (a || 1)) + ":";
        c = e ? c.replace(this.C, a) : (c ? c : "") + a;
        (e = Sp()) && Np.set("OGPC", c, this.w, "/", e)
    };
    _.k.qb = function(a) {
        var c = a || Np.get("OGPC", "");
        a =- 1;
        c && (c = c.match(this.C)) && 1 < c.length && (a = (0, window.parseInt)(c[1], 10) || 0);
        return a
    };
    _.k.Dd = function() {
        return - 1 != Np.get("OGP", "").indexOf("-" + this.b + ":")
    };
    var Vp = function() {
        _.N.call(this);
        this.d = "closure_frame" + Tp++;
        this.k = [];
        Up[this.d] = this
    }, Wp;
    _.v(Vp, _.N);
    var Up = {}, Tp = 0, Xp = function(a, c) {
        var d = _.Hf(a);
        _.ke(c, function(c, f) {
            var g = d.d("input", {
                type: "hidden",
                name: f,
                value: c
            });
            a.appendChild(g)
        })
    };
    _.k = Vp.prototype;
    _.k.ba = null;
    _.k.ja = null;
    _.k.mb = null;
    _.k.ah = 0;
    _.k.Va=!1;
    _.k.lb = null;
    _.k.send = function(a, c, d, e) {
        if (this.Va)
            throw Error("ha");
        a = new _.Hd(a);
        c = c ? c.toUpperCase() : "GET";
        d && _.fe(a, "zx", _.ql());
        Wp || (Wp = _.O("form"), Wp.acceptCharset = "utf-8", d = Wp.style, d.position = "absolute", d.visibility = "hidden", d.top = d.left = "-10px", d.width = d.height = "10px", d.overflow = "hidden", window.document.body.appendChild(Wp));
        this.ba = Wp;
        "GET" == c && Xp(this.ba, a.b);
        e && Xp(this.ba, e);
        this.ba.action = a.toString();
        this.ba.method = c;
        this.Va=!0;
        this.mb = this.d + "_" + (this.ah++).toString(36);
        e = {
            name: this.mb,
            id: this.mb
        };
        _.J && 7 > _.Qb && (e.src = 'javascript:""');
        this.ja = _.Hf(this.ba).d("iframe", e);
        e = this.ja.style;
        e.visibility = "hidden";
        e.width = e.height = "10px";
        e.display = "none";
        _.K ? e.marginTop = e.marginLeft = "-10px" : (e.position = "absolute", e.top = e.left = "-10px");
        if (_.J&&!_.L("11")) {
            this.ba.target = this.mb || "";
            jl(_.Hf(this.ba)).body.appendChild(this.ja);
            _.M(this.ja, "readystatechange", this.Nd, !1, this);
            try {
                this.b=!1, this.ba.submit()
            } catch (f) {
                _.tc(this.ja, "readystatechange", this.Nd, !1, this), Yp(this)
            }
        } else {
            jl(_.Hf(this.ba)).body.appendChild(this.ja);
            e = this.mb + "_inner";
            d = cm(this.ja);
            a = "<body><iframe id=" + e + " name=" + e + "></iframe>";
            window.document.baseURI && (a = '<head><base href="' + _.sb(window.document.baseURI) + '"></head>' + a);
            _.Fb ? d.documentElement.innerHTML = a : d.write(a);
            _.M(d.getElementById(e), "load", this.Mc, !1, this);
            var g = this.ba.getElementsByTagName("textarea");
            a = 0;
            for (c = g.length; a < c; a++) {
                var h = g[a].value, l = [];
                _.Tl(g[a], l, !1);
                l.join("") != h && (_.Gf(g[a], h), g[a].value = h)
            }
            g = d.importNode(this.ba, !0);
            g.target = e;
            g.action = this.ba.action;
            d.body.appendChild(g);
            h = this.ba.getElementsByTagName("select");
            l = g.getElementsByTagName("select");
            a = 0;
            for (c = h.length; a < c; a++)
                for (var q = h[a].getElementsByTagName("option"), r = l[a].getElementsByTagName("option"), w = 0, E = q.length; w < E; w++)
                    r[w].selected = q[w].selected;
            h = this.ba.getElementsByTagName("input");
            l = g.getElementsByTagName("input");
            a = 0;
            for (c = h.length; a < c; a++)
                if ("file" == h[a].type && h[a].value != l[a].value) {
                    this.ba.target = e;
                    g = this.ba;
                    break
                }
            try {
                this.b=!1, g.submit(), d.close(), _.Gb && _.jd(this.A, 250, this)
            } catch (P) {
                _.tc(d.getElementById(e),
                "load", this.Mc, !1, this), d.close(), Yp(this)
            }
        }
        Zp(this)
    };
    _.k.L = function() {
        if (this.Va && this.Va) {
            var a = $p(this);
            if (a)
                if (_.bc(a))
                    a.Pc(void 0);
                else if (a = _.oc(a)) {
                    var c = 0, d;
                    for (d in a.b)
                        for (var e = a.b[d].concat(), f = 0; f < e.length; ++f)
                            _.uc(e[f])&&++c
                }
            this.Va=!1;
            this.dispatchEvent("abort");
            aq(this)
        }
        Vp.G.L.call(this);
        this.ja && bq(this);
        Zp(this);
        this.ba = null;
        delete this.w;
        this.ba = null;
        delete Up[this.d]
    };
    _.k.Nd = function() {
        if ("complete" == this.ja.readyState) {
            _.tc(this.ja, "readystatechange", this.Nd, !1, this);
            var a;
            try {
                if (a = cm(this.ja), _.J && "about:blank" == a.location&&!window.navigator.onLine) {
                    Yp(this);
                    return 
                }
            } catch (c) {
                Yp(this);
                return 
            }
            cq(this, a)
        }
    };
    _.k.Mc = function() {
        if (!_.Fb || "about:blank" != (this.ja ? cm($p(this)) : null).location) {
            _.tc($p(this), "load", this.Mc, !1, this);
            try {
                cq(this, this.ja ? cm($p(this)) : null)
            } catch (a) {
                Yp(this)
            }
        }
    };
    var cq = function(a, c) {
        a.Va=!1;
        var d, e;
        d || "function" != typeof a.w || (e = a.w(c)) && (d = 4);
        d ? Yp(a) : (a.dispatchEvent("complete"), a.dispatchEvent("success"), aq(a))
    }, Yp = function(a) {
        a.b || (a.Va=!1, a.dispatchEvent("complete"), a.dispatchEvent("error"), aq(a), a.b=!0)
    }, aq = function(a) {
        bq(a);
        Zp(a);
        a.ba = null;
        a.dispatchEvent("ready")
    }, bq = function(a) {
        var c = a.ja;
        c && (c.onreadystatechange = null, c.onload = null, c.onerror = null, a.k.push(c));
        a.lb && (_.m.clearTimeout(a.lb), a.lb = null);
        _.Gb || _.Fb ? a.lb = _.jd(a.o, 2E3, a) : a.o();
        a.ja = null;
        a.mb = null
    };
    Vp.prototype.o = function() {
        this.lb && (_.m.clearTimeout(this.lb), this.lb = null);
        for (; 0 != this.k.length;) {
            var a = this.k.pop();
            _.sf(a)
        }
    };
    var Zp = function(a) {
        a.ba && a.ba == Wp && _.tf(a.ba)
    }, $p = function(a) {
        return a.ja ? _.J&&!_.L("11") ? a.ja : cm(a.ja).getElementById(a.mb + "_inner") : null
    };
    Vp.prototype.A = function() {
        if (this.Va) {
            var a = this.ja ? cm($p(this)): null;
            a&&!_.nb(a, "documentUri") ? (_.tc($p(this), "load", this.Mc, !1, this), Yp(this)) : _.jd(this.A, 250, this)
        }
    };
    var dq = window.location.protocol + "//www.google.com/_/og/promos/", eq = function(a, c, d, e, f, g) {
        var h = {};
        h.p = c;
        h.g = a;
        h.a = d;
        h.at = e;
        h.eid = f;
        h.pid = 1;
        if (g)
            h.t = g;
        else 
            return _.H(Error("ia")), null;
        return h
    }, fq = function(a, c, d) {
        if (a) {
            var e = [dq, d ? "g": "z"];
            d && c && e.push(["?authuser=", c].join(""));
            c = e.join("");
            d = new Vp;
            _.M(d, "ready", d.Y, !1, d);
            d.send(c, "POST", !1, a)
        }
    };
    var gq = function(a, c, d, e, f, g, h) {
        Op.call(this, a, c);
        g || h ? (this.K = d, this.F = e, this.B = g || h || "", this.w=!!h, this.C = f) : _.H(Error("ja"))
    };
    _.v(gq, Op);
    gq.prototype.nc = function(a) {
        var c = this.F;
        (a = eq(this.b, this.K, "d", 2, a || "", this.B)) && (a.u = c);
        fq(a, this.C, this.w)
    };
    gq.prototype.Gc = function(a, c) {
        var d = a || 1, e = eq(this.b, this.K, "i", 1, c || "", this.B);
        e && (e.c = d);
        fq(e, this.C, this.w)
    };
    var hq = function(a, c, d, e) {
        Op.call(this, a, c, e);
        this.w = _.ta(_.sa.P(), "p_st");
        this.D = d
    };
    _.v(hq, Op);
    hq.prototype.nc = function() {
        this.w.d(this.D, this.k, "1", this.d)
    };
    hq.prototype.Gc = function(a) {
        a = this.qb() + (a || 1);
        this.w.d(this.D, this.o, a.toString(), this.d)
    };
    hq.prototype.Dd = function() {
        return !!this.w.b(this.D, this.k, this.d)
    };
    hq.prototype.qb = function() {
        var a = this.w.b(this.D, this.o, this.d);
        return (0, window.parseInt)(a || 0, 10)
    };
    var iq = function(a, c, d, e, f, g, h, l) {
        switch (a) {
        case 2:
            return a = _.G(_.I(), Cl, 9) || new Cl, new gq(c, d, e, f, _.B(_.F(a, 8)), h, l);
        case 1:
            return new hq(c, d, g, void 0);
        default:
            return new Rp(c, d, f)
        }
    };
    var kq = function(a, c) {
        _.rm.call(this, a);
        this.d = a;
        this.K = _.A(_.F(c, 1));
        this.R = _.A(_.F(c, 2));
        this.za = _.A(_.F(c, 3));
        this.ha = _.B(_.F(c, 5));
        this.Pa = _.B(null != _.F(c, 6) ? _.F(c, 6) : - 1);
        this.Q = this.Oa();
        this.w = jq;
        this.ta=!1;
        var d = _.sa.P();
        this.ka = _.ta(d, "p_log");
        this.S = _.ta(d, "p_st");
        this.A = _.X(this.w.gf, this.d);
        this.Jb = _.X(this.w.nf, this.d);
        this.X = _.X(this.w.kf, this.d);
        this.Na = "";
        this.ya=!1;
        var e, f;
        2 == this.ha && (e = _.A(_.F(c, 8)), this.Na = (f = _.A(_.F(c, 7))) || e, this.ya=!!f);
        this.o = iq(this.ha, this.R, _.B(null != _.F(c,
        4) ? _.F(c, 4) : 25), this.K, this.Pa, this.d, e, f)
    };
    _.v(kq, _.rm);
    kq.prototype.L = function() {
        kq.G.L.call(this);
        this.X = this.Jb = this.A = null
    };
    var jq = {
        gf: "gb_fb",
        nf: "gb_bb",
        kf: "gb_ub",
        Kb: "gb_Ia"
    };
    kq.prototype.open = function() {
        _.S(this.d, this.w.Kb) || (_.T(this.d, this.w.Kb), this.d.removeAttribute("aria-hidden"))
    };
    kq.prototype.Oa = function() {
        return {
            Gg: "i",
            accept: "a",
            pa: "d",
            Jb: "x"
        }
    };
    kq.prototype.close = function() {
        _.S(this.d, this.w.Kb) && (_.U(this.d, this.w.Kb), this.d.setAttribute("aria-hidden", "true"))
    };
    var lq = function(a, c) {
        if (!a.Q.accept)
            throw Error("ka`accept");
        a.Q.accept = c
    };
    kq.prototype.W = function() {
        var a = this.A;
        a && nl(this, a, this.Aa, !1, this);
        (a = this.Jb) && nl(this, a, this.Bd, !1, this);
        (a = this.X) && nl(this, a, this.eb, !1, this)
    };
    kq.prototype.B = function() {
        return !Qp(this.o)
    };
    kq.prototype.H = function() {
        return ""
    };
    var mq = function(a) {
        var c = "";
        a && (a = a.getAttributeNode("data-ved")) && a.value && (c = ["&ved=", a.value].join(""));
        return c
    };
    kq.prototype.ia = function() {
        this.W();
        this.open();
        Pp(this.o);
        this.ka.log(this.K, this.za, "i", this.H())
    };
    var nq = function(a) {
        a.B() && a.ia()
    }, oq = function(a, c, d, e, f) {
        a.ta || (a.ka.log(a.K, a.za, c, a.H() + mq(d), 1), f ? 2 == kq.prototype.ha && (c = a.ka, d = a.ya, a = eq(a.R, a.K, "l", 3, e, a.Na), fq(a, c.k, d)) : (a.o.pa(e), a.close(), a.ta=!0))
    };
    kq.prototype.Aa = function(a, c) {
        oq(this, this.Q.accept, a.target, "2", c)
    };
    kq.prototype.Bd = function(a, c) {
        oq(this, this.Q.Jb, a.target, "1", c)
    };
    kq.prototype.eb = function(a, c) {
        oq(this, this.Q.pa, a.target, "3", c)
    };
    var pq = function(a, c) {
        kq.call(this, a, _.G(c, Bl, 1) || new Bl);
        this.k = _.x("aw");
        this.T = _.x("dd");
        this.O = _.z(_.F(c, 2));
        this.J = _.z(_.F(c, 3));
        var d = _.X("gb_A", _.X("gb_z"));
        this.F(d, "click", this.Sf, !0);
        (d = _.X("gb_9a", a)) && _.Uo(".gb_b .gb_9a::before{content:" + d.style.backgroundImage + "}");
        this.J && this.B() && (nq(this), this.T.df("aw"))
    };
    _.v(pq, kq);
    _.k = pq.prototype;
    _.k.Aa = function(a, c) {
        if (this.A && this.O) {
            var d = new _.Hd(this.A.href);
            _.fe(d, "continue", window.location.href);
            _.Zl(this.A, d.toString())
        }
        pq.G.Aa.call(this, a, c)
    };
    _.k.Sf = function() {
        nq(this)
    };
    _.k.Bd = function(a, c) {
        pq.G.Bd.call(this, a, c);
        a.preventDefault();
        a.stopPropagation()
    };
    _.k.open = function() {
        pq.G.open.call(this);
        Fp(this.k.b)
    };
    _.k.close = function() {
        pq.G.close.call(this);
        Fp(this.k.b)
    };
    var qq = function(a) {
        this.b = {};
        this.b.mouseout = _.A(_.F(a, 1));
        this.b.mouseover = _.A(_.F(a, 2));
        this.b.mousedown = _.A(_.F(a, 3))
    }, rq = function(a, c) {
        if (c)
            for (var d in a.b) {
                var e = a.b[d];
                e && _.om(c, d, (0, _.t)(function(a) {
                    c.style.color = a
                }, a, e))
            }
    }, sq = function(a, c) {
        for (var d = 0; d < c.length; d++)
            rq(a, c[d])
    };
    var uq = function(a, c) {
        _.Tn.call(this, a, "pc", !0);
        var d = _.G(c, Bl, 1) || new Bl;
        this.J = _.A(_.F(d, 1));
        this.ha = _.A(_.F(d, 3));
        this.kb = _.A(_.F(d, 2));
        this.Zb = _.z(_.F(c, 5));
        this.na = _.B(_.F(c, 6));
        this.Na = _.B(null != _.F(d, 4) ? _.F(d, 4) : 25, 25);
        this.Q = window.document.getElementById("gb");
        d = _.sa.P();
        this.ka = _.ta(d, "p_log");
        this.Oa = _.ta(d, "p_st");
        this.za = this.Zb ? 5 : 1;
        this.O = iq(this.za, this.kb, this.Na, this.J, this.na, this.d);
        this.Q && (this.H = _.X("gb_5", this.Q));
        this.X=!1;
        if (this.H&&!Qp(this.O)) {
            d = _.A(_.F(c, 2));
            if ("n" != d) {
                var e =
                tq[d];
                this.B = e ? _.X(e, this.H) : null;
                if (!this.B) {
                    _.H(Error("la"), {
                        target: d
                    });
                    return 
                }
            }
            this.R = "gb_ob";
            "b" == _.F(c, 3) && (_.T(this.d, "gb_ib"), this.R = "gb_pb");
            (this.V = _.X("gb_jb", this.d)) && nl(this, this.V, this.ya, !0, this);
            (this.o = _.X("gb_V", this.d)) && nl(this, this.o, this.sa, !0, this);
            d = _.gm("gb_A", this.H);
            for (e = 0; e < d.length; e++)
                nl(this, d[e], this.Pa, !0, this);
            d = Qo();
            this.M(d, "resize", this.eb, !1, this);
            (d = _.G(c, Al, 4) || new Al) && sq(new qq(d), [this.o]);
            this.ka.log(this.J, this.ha, "i", void 0);
            _.F(c, 7) && this.Oa.d(a, "OGPL",
            this.J);
            this.W = 0;
            this.open();
            Pp(this.O)
        }
        this.xa()
    };
    _.v(uq, _.Tn);
    var tq = {
        p: "gb_ca",
        s: "gb_Ob",
        i: "gb_Bc",
        v: "gb_z"
    };
    uq.prototype.L = function() {
        uq.G.L.call(this);
        this.Q = this.H = this.B = this.button = this.V = null
    };
    var vq = function(a) {
        var c = _.X("gb_nb", a.d);
        if (c)
            return c;
        c = window.document.createElement("iframe");
        c.frameBorder = "0";
        c.tabIndex = "-1";
        _.T(c, "gb_nb");
        c.src = "javascript:''";
        a.Q.appendChild(c);
        return c
    };
    uq.prototype.open = function() {
        uq.G.open.call(this);
        var a = vq(this);
        if (a) {
            var c = _.X("gb_D", this.d);
            c.appendChild(a);
            a = a.style;
            a.width = c.offsetWidth + "px";
            a.height = c.offsetHeight + "px";
            a.visibility = "visible";
            a.top = "-1px";
            a.left = "-1px"
        }
        this.W = this.k.offsetWidth;
        wq(this, !0)
    };
    uq.prototype.close = function() {
        if (uq.G.close.call(this)) {
            var a = vq(this);
            a && (a = a.style, a.width = "", a.height = "", a.visibility = "", a.top = "", a.left = "");
            wq(this, !1);
            return !0
        }
        return !1
    };
    var wq = function(a, c) {
        a.B && (c ? _.T(a.B, a.R) : _.U(a.B, a.R))
    };
    uq.prototype.Ce = function() {};
    uq.prototype.Ec = function() {};
    var xq = function(a, c) {
        a.X || (a.O.pa(), a.ka.log(a.J, a.ha, c, void 0, 1), a.close(), a.X=!0)
    };
    uq.prototype.eb = function() {
        try {
            if (this.k) {
                var a = 276, c = window.document.getElementById("hplogo");
                c && (a = Math.max(a, c.offsetWidth));
                2 * (this.W + ((0, window.parseInt)(this.k.style.right, 10) || 0)) + a > window.document.body.clientWidth ? this.close() : this.open()
            }
        } catch (d) {
            _.H(d)
        }
    };
    uq.prototype.Pa = function() {
        xq(this, "a")
    };
    uq.prototype.ya = function() {
        xq(this, "x")
    };
    uq.prototype.sa = function() {
        xq(this, "a")
    };
    var zq = function(a, c) {
        this.kb = c;
        var d = _.G(c, Bl, 1);
        if (d)
            if (kq.call(this, a, d), this.k = _.X("gb_D", this.d))
                if (this.J = window.document.getElementById("gb"))
                    if (this.O = _.X("gb_5", this.J)) {
                        var d = _.A(_.F(c, 2)), e = null;
                        "n" != d && ((e = (e = yq[d]) ? _.X(e, this.O) : null) || _.H(Error("la"), {
                            target: d
                        }));
                        this.T = e;
                        d = "gb_ob";
                        "b" == _.F(c, 3) && (_.T(this.k, "gb_ib"), d = "gb_pb");
                        this.sa = d;
                        this.na = 0;
                        (d = _.G(c, Al, 4)) && sq(new qq(d), [this.A]);
                        nq(this)
                    } else 
                        _.H(Error("ma"));
                else 
                    _.H(Error("na"));
        else 
            _.H(Error("oa"));
        else 
            _.H(Error("pa"))
    };
    _.v(zq, kq);
    var yq = {
        p: "gb_ca",
        s: "gb_Ob",
        i: "gb_Bc",
        v: "gb_z"
    };
    zq.prototype.L = function() {
        zq.G.L.call(this);
        this.J = this.O = this.T = this.button = this.V = null
    };
    var Aq = function(a) {
        var c = _.X("gb_nb", a.k);
        if (c)
            return c;
        c = window.document.createElement("iframe");
        c.frameBorder = "0";
        c.tabIndex = "-1";
        _.T(c, "gb_nb");
        c.src = "javascript:''";
        a.J.appendChild(c);
        return c
    };
    zq.prototype.ia = function() {
        zq.G.ia.call(this);
        _.F(this.kb, 7) && this.S.d(this.d, "OGPL", this.K)
    };
    zq.prototype.open = function() {
        zq.G.open.call(this);
        var a = Aq(this);
        a && (this.k.appendChild(a), a = a.style, a.width = this.k.offsetWidth + "px", a.height = this.k.offsetHeight + "px", a.visibility = "visible", a.top = "-1px", a.left = "-1px");
        this.na = this.k.offsetWidth;
        Bq(this, !0)
    };
    zq.prototype.close = function() {
        zq.G.close.call(this);
        var a = Aq(this);
        a && (a = a.style, a.width = "", a.height = "", a.visibility = "", a.top = "", a.left = "");
        Bq(this, !1)
    };
    var Bq = function(a, c) {
        a.T && (c ? _.T(a.T, a.sa) : _.U(a.T, a.sa))
    };
    zq.prototype.W = function() {
        zq.G.W.call(this);
        for (var a = _.gm("gb_A", this.O), c = 0; c < a.length; c++)
            nl(this, a[c], this.Zb, !0, this);
        a = Qo();
        this.M(a, "resize", this.Hd, !1, this)
    };
    zq.prototype.Hd = function() {
        try {
            if (this.k) {
                var a = 276, c = window.document.getElementById("hplogo");
                c && (a = Math.max(a, c.offsetWidth));
                2 * (this.na + ((0, window.parseInt)(this.k.style.right, 10) || 0)) + a > window.document.body.clientWidth ? this.close() : this.open()
            }
        } catch (d) {
            _.H(d)
        }
    };
    zq.prototype.Zb = function(a) {
        this.Aa(a)
    };
    var Cq = function() {
        var a;
        (a = "Win64" != _.Jb) || (a = jl(_.Hf()), a=!(a.webkitIsFullScreen || a.mozFullScreen || a.msFullscreenElement || a.fullscreenElement));
        if (a)
            return !1;
        try {
            if (new window.ActiveXObject("htmlfile"))
                return !1
        } catch (c) {}
        return !0
    };
    var Dq = function() {
        _.y.call(this);
        this.b = null;
        this.d = this.o = 0
    };
    _.v(Dq, _.y);
    var Eq = window.location.protocol + "//" + window.location.host, Fq = function() {
        try {
            return window.external.IsSearchProviderInstalled(Eq)
        } catch (a) {
            _.H(a)
        }
        return 3
    };
    Dq.prototype.k = function() {
        try {
            var a = Fq(), c = 0 != a, d = (new Date).getTime() - this.o, e = 2E4 < d, d = 0 > d;
            this.d++;
            var f = 40 < this.d;
            if (c || e || d || f)
                this.b(a);
            else {
                var g = (0, _.t)(this.k, this);
                window.setTimeout(g, 500)
            }
        } catch (h) {
            _.H(h)
        }
    };
    var Gq = function(a, c, d) {
        _.om(a, c, d)
    };
    var Iq = function(a, c, d) {
        kq.call(this, a, c);
        this.k = _.hm("gba");
        d && sq(new qq(d), [this.A, this.Jb, this.X]);
        Hq(this)
    };
    _.v(Iq, kq);
    var Hq = function(a) {
        _.om(a.d, "mouseover", function(a) {
            a.stopPropagation()
        })
    }, Jq = function(a, c) {
        var d = _.mg(a.d).height;
        c || (d =- d);
        var e = window.gbar;
        e && e.elh && e.elh(d)
    };
    Iq.prototype.H = function() {
        return "ic=" + this.o.qb()
    };
    Iq.prototype.open = function() {
        Iq.G.open.call(this);
        this.k && _.T(this.k, "gb_Mc");
        Jq(this, !0)
    };
    Iq.prototype.close = function() {
        Iq.G.close.call(this);
        this.k && _.U(this.k, "gb_Mc");
        Jq(this, !1)
    };
    var Kq = function(a, c) {
        Iq.call(this, a, _.G(c, Bl, 1), _.G(c, Al, 2));
        this.J = _.x("p_dse");
        this.o.o = "dse_pd_dp_" + this.R;
        this.o.k = "dse_pd_c_" + this.R;
        nq(this)
    };
    _.v(Kq, Iq);
    Kq.prototype.B = function() {
        var a;
        if (Kq.G.B.call(this))
            t: {
            a = _.J ? (0, window.parseInt)(_.Qb, 10) : - 1;
            if (0 <= a) {
                if (7 > a || 11 < a || 10 == a && Cq()) {
                    a=!1;
                    break t
                }
            } else if (!_.$f) {
                a=!1;
                break t
            }
            a = 0 == Fq()
        } else 
            a=!1;
        return a
    };
    Kq.prototype.T = function(a, c) {
        var d = "c";
        switch (c) {
        case 1:
            d = "l";
            break;
        case 2:
            d = "a";
            break;
        case 0:
        case 3:
            d = "c";
            break;
        default:
            _.H(Error("qa"))
        }
        lq(this, d);
        Kq.G.Aa.call(this, a, "c" == d)
    };
    Kq.prototype.Aa = function(a) {
        var c = (0, _.t)(this.T, this, a);
        a = this.J;
        a.b = c;
        try {
            c = "/homepage/search/js/google-secure.xml";
            "https:" != window.location.protocol && (c = "/homepage/search/js/google.xml");
            window.external.AddSearchProvider(c);
            a.o = (new Date).getTime();
            a.d = 0;
            var d = (0, _.t)(Dq.prototype.k, a);
            window.setTimeout(d, 500)
        } catch (e) {
            _.H(e)
        }
    };
    var Lq = function(a) {
        _.y.call(this);
        this.b = a
    };
    _.v(Lq, _.y);
    var Mq = _.m.location.protocol + "//" + _.m.location.host + "/", Nq = [Mq, _.m.location.protocol + "//" + _.m.location.host, Mq + "webhp/", Mq + "webhp", Mq + "ig/", Mq + "ig", _.m.location.href], Pq = function(a, c) {
        var d = a.b.b(c, "web-pr-hpvisit");
        if (!d)
            return !1;
        var e = (0, window.parseInt)(d, 10);
        if (!e)
            return _.H(Error("ra`" + d)), !1;
        if (e >= Math.floor(window.google.time() / 864E5) - 7)
            return !0;
        Oq(c, "web-pr-hpvisit");
        return !1
    }, Qq = function(a, c) {
        try {
            return a.isHomePage(c)
        } catch (d) {
            return _.H(d), !0
        }
    }, Rq = function(a, c) {
        var d=!1;
        try {
            try {
                d = _.m.external.isGoogleHomePage()
            } catch (e) {
                if (Pq(a, c))
                    return !0;
                var f = Nq.slice(0), g = a.b.b(c, "mgmhp_hp_url");
                g && f.push(g);
                for (g = 0; g < f.length; g++) {
                    var h = f[g];
                    if (d = d || Qq(c, h))
                        return !0
                }
            }
        } catch (l) {
            return _.H(l), !0
        }
        return d
    };
    var Sq = function(a, c) {
        Iq.call(this, a, _.G(c, Bl, 1), _.G(c, Al, 2));
        this.J = _.x("p_mgmhp");
        this.o.o = "mgmhp_pd_count_1111";
        this.o.k = "mgmhp_pd_dp";
        this.o.d=!0;
        this.T = _.A(_.F(c, 3));
        nq(this)
    };
    _.v(Sq, Iq);
    Sq.prototype.B = function() {
        return Rq(this.J, this.d)?!1 : Sq.G.B.call(this)
    };
    Sq.prototype.Aa = function(a) {
        var c=!1, d = "a", e = this.J, f = this.d, g = this.T, h = Mq;
        g && (h += "?rlz=" + g);
        f.setHomePage(h);
        Rq(e, f) || g && Qq(f, h) || (c=!0, d = "c");
        lq(this, d);
        Sq.G.Aa.call(this, a, c)
    };
    var Tq = function(a, c) {
        Iq.call(this, a, _.G(c, Bl, 1), _.G(c, Al, 3));
        this.T = _.z(null != _.F(c, 5) ? _.F(c, 5) : !1);
        this.J = _.A(_.F(c, 2));
        this.O = _.z(null != _.F(c, 4) ? _.F(c, 4) : !1);
        nq(this)
    };
    _.v(Tq, Iq);
    Tq.prototype.Aa = function(a) {
        Tq.G.Aa.call(this, a, this.T);
        a = this.J;
        var c = this.O;
        a && ("function" == typeof a ? a.call() : "string" == typeof a && (c ? _.m.open(a) : null != _.m.location && _.Yl(_.m.location, a)))
    };
    var Uq = function(a, c) {
        kq.call(this, a, c)
    };
    _.v(Uq, kq);
    var Vq = function(a, c) {
        kq.call(this, a, c)
    };
    _.v(Vq, Uq);
    Vq.prototype.Aa = function(a) {
        Vq.G.Aa.call(this, a, !0)
    };
    var Wq = function(a, c) {
        var d = _.G(c, Bl, 1);
        kq.call(this, a, d);
        this.k = this.K + "_upccb";
        this.J = 0;
        nq(this)
    };
    _.v(Wq, Vq);
    Wq.prototype.H = function() {
        var a = (0, window.parseInt)(this.S.b(this.d, this.k, !1) || "0", 10);
        return [["upcc", this.J].join("="), ["upccb", a].join("=")].join("&")
    };
    Wq.prototype.open = function() {
        if (!_.S(this.d, this.w.Kb)) {
            var a = (0, window.parseInt)(this.S.b(this.d, this.k, !1) || "0", 10);
            a++;
            this.S.d(this.d, this.k, a.toString(), !1);
            this.J++
        }
        Wq.G.open.call(this)
    };
    Wq.prototype.Oa = function() {
        return {
            Gg: "i",
            accept: "h",
            pa: "d",
            Jb: "x"
        }
    };
    var Xq = function(a, c, d, e, f, g, h, l) {
        this.data = {};
        _.ia(this.data, {
            ogsr: 1 / a,
            ei: c,
            ct: e,
            cad: f,
            id: d,
            loc: window.google ? window.google.sn: "",
            prid: g,
            ogd: h,
            ogprm: "up"
        });
        if (l)
            for (a = l.split("&"), c = 0; c < a.length; c++)
                d = a[c].split("="), 2 == d.length && (this.data[d[0]] = d[1])
    };
    _.v(Xq, _.Mj);
    var Yq = function(a, c, d, e, f, g) {
        _.y.call(this);
        this.w = a;
        this.d = c;
        this.A = d;
        this.o = e;
        this.k = f;
        this.b = g;
        _.u("gbar.up.sl", (0, _.t)(this.log, this))
    };
    _.v(Yq, _.y);
    Yq.prototype.log = function(a, c, d, e, f) {
        try {
            var g = this.w;
            if (void 0 != f && null != f)
                if (0 <= f && 1 >= f)
                    g = f;
                else {
                    _.H(Error("sa`" + c + "`" + d + "`" + f));
                    return 
                }
            if (Math.random() <= g) {
                var h = new Xq(g, this.d, a, c, d, this.o, this.A, e);
                this.b ? h.b() : _.Jj(h)
            }
        } catch (l) {
            _.H(Error("sa`" + c + "`" + d + "`" + f))
        }
    };
    var Zq = function() {
        _.y.call(this);
        _.u("gbar.up.spd", (0, _.t)(this.d, this));
        _.u("gbar.up.gpd", (0, _.t)(this.b, this));
        _.u("gbar.up.dpc", (0, _.t)(this.w, this));
        _.u("gbar.up.iic", (0, _.t)(this.o, this));
        _.u("gbar.up.gcc", (0, _.t)(this.k, this))
    };
    _.v(Zq, _.y);
    var $q = function() {
        try {
            return !!_.m.localStorage && "object" == typeof _.m.localStorage
        } catch (a) {
            return !1
        }
    }, ar = function(a) {
        return a && a.style && a.style.behavior && "undefined" != typeof a.load
    };
    Zq.prototype.d = function(a, c, d, e) {
        try {
            window.navigator.cookieEnabled && (e || (c = "og-up-" + c), $q() ? _.m.localStorage.setItem(c, d) : ar(a) && (a.setAttribute(c, d), a.save(a.id)))
        } catch (f) {
            f.code != window.DOMException.QUOTA_EXCEEDED_ERR && _.H(f)
        }
    };
    var Oq = function(a, c) {
        try {
            window.navigator.cookieEnabled && (c = "og-up-" + c, $q() ? _.m.localStorage.removeItem(c) : ar(a) && (a.removeAttribute(c), a.save(a.id)))
        } catch (d) {
            d.code != window.DOMException.QUOTA_EXCEEDED_ERR && _.H(d)
        }
    };
    Zq.prototype.b = function(a, c, d) {
        try {
            if (!window.navigator.cookieEnabled)
                return "";
            d || (c = "og-up-" + c);
            if ($q())
                return _.m.localStorage.getItem(c);
            if (ar(a))
                return a.load(a.id), a.getAttribute(c)
        } catch (e) {
            e.code != window.DOMException.QUOTA_EXCEEDED_ERR && _.H(e)
        }
        return ""
    };
    Zq.prototype.w = function(a, c) {
        (new Rp(a, 1, c)).pa()
    };
    Zq.prototype.o = function(a, c) {
        Pp(new Rp(a, 1, c))
    };
    Zq.prototype.k = function(a, c) {
        return (new Rp(a, 1)).qb(c)
    };
    var br = function(a) {
        _.y.call(this);
        this.d = {};
        this.w = {};
        this.b = null;
        this.k = 1;
        this.o=!1;
        this.A = a;
        _.u("gbar.up.r", (0, _.t)(this.register, this));
        _.u("gbar.up.nap", (0, _.t)(this.Sb, this));
        _.u("gbar.up.aop", (0, _.t)(this.pf, this));
        _.u("gbar.up.tp", (0, _.t)(this.Md, this));
        _.u("gbar.up.ssp", (0, _.t)(this.Yd, this))
    };
    _.v(br, _.y);
    var cr = function(a, c, d) {
        return - 1 == (0, _.la)(c, a.k) ? (_.H(Error("ta`" + a.k + "`" + d)), !1) : !0
    };
    _.k = br.prototype;
    _.k.register = function(a, c) {
        cr(this, [1, 2], "r") && (this.d[a] = this.d[a] || [], this.d[a].push(c), 2 == this.k && _.m.setTimeout((0, _.t)(function() {
            c(this.Yd(a))
        }, this), 0))
    };
    _.k.Sb = function(a, c, d) {
        if (cr(this, [1], "nap") && d) {
            for (var e = 0; e < d.length; e++)
                this.w[d[e]]=!0;
            this.A.log(a, c, "nap", "tpt=" + d.join(","))
        }
    };
    _.k.pf = function(a, c, d) {
        if (cr(this, [1], "aop") && d) {
            if (this.b)
                for (var e in this.b)
                    this.b[e] = this.b[e]&&-1 != (0, _.la)(d, e);
            else 
                for (this.b = {}, e = 0; e < d.length; e++)
                    this.b[d[e]]=!0;
            this.A.log(a, c, "aop", "tpt=" + d.join(","))
        }
    };
    _.k.Md = function() {
        try {
            if (this.k = 2, !this.o) {
                this.o=!0;
                for (var a in this.d)
                    for (var c = this.d[a], d = 0; d < c.length; d++)
                        try {
                            var e = c[d], f = this.Yd(a);
                            e.apply(null, [f])
                        } catch (g) {
                    _.H(g)
                }
            }
        } catch (h) {
            _.H(h)
        }
    };
    _.k.Yd = function(a) {
        if (cr(this, [2], "ssp")) {
            var c=!this.w[a];
            this.b && (c = c&&!!this.b[a]);
            return c
        }
        return !1
    };
    var dr = function(a, c) {
        this.d = a;
        this.o = c
    };
    dr.prototype.k = function() {
        var a = _.G(this.d, vl, 6) || new vl, c = _.X("gb_qb");
        a && c && this.w.register("3", function(d) {
            d && new Wq(c, a)
        })
    };
    _.er = function(a, c) {
        for (var d in c)
            try {
                c[d].apply(a)
        } catch (e) {
            _.H(Error(d))
        }
    };
    dr.prototype.init = function() {
        if (this.d) {
            var a = this.d, a = new Yq(_.B(null != _.F(a, 1) ? _.F(a, 1) : 1E-4, 1E-4), this.o, _.A(_.F(a, 2)), _.A(_.F(a, 3)), _.B(_.F(a, 8)), _.Na), c = new Zq;
            _.wa("p_log", a);
            _.wa("p_st", c);
            _.wa("p_tr", new br(a));
            _.wa("p_mgmhp", new Lq(c));
            _.wa("p_dse", new Dq);
            _.u("gbar.up.aeh", Gq)
        }
        this.w = _.ta(_.sa.P(), "p_tr");
        a = {};
        a["3"] = this.k;
        _.er(this, a)
    };
    _.fr = function() {
        dr.call(this, _.G(_.I(), Cl, 9) || new Cl, _.A(_.Gj(_.Ra())));
        this.A = _.zj() || new _.yj;
        this.b = null
    };
    _.v(_.fr, dr);
    _.ba(_.fr);
    _.k = _.fr.prototype;
    _.k.Ig = function() {
        var a = _.G(this.d, zl, 4) || new zl, c = _.X("gb_hb");
        a && c && (this.b.register("7", function(d) {
            d && (_.F(a, 8) ? new zq(c, a) : new uq(c, a))
        }), this.b.Sb("7", "7", ["5"]))
    };
    _.k.Lg = function() {
        var a = _.G(this.d, yl, 5), c = _.X("gb_tb");
        a && c && (this.b.Sb("up", "up", ["2", "9", "6"]), this.b.register("up", function(d) {
            d && new Tq(c, a)
        }))
    };
    _.k.Kg = function() {
        var a = _.G(this.d, xl, 9), c = _.X("gb_tb");
        a && c && _.F(a, 4) && (this.b.Sb("2", "2", ["1"]), this.b.register("2", function(d) {
            d && new Sq(c, a)
        }))
    };
    _.k.Jg = function() {
        var a = _.G(this.d, wl, 10), c = _.X("gb_tb");
        a && c && _.F(a, 3) && (this.b.Sb("9", "9", ["2"]), this.b.register("9", function(d) {
            d && new Kq(c, a)
        }))
    };
    _.k.Hg = function() {
        var a = this.d.vc(), c = _.X("gb_ab");
        if (a && c) {
            var d = _.x("aw");
            d && (Cp(d.b) || this.b.register("aw", function(d) {
                d && new pq(c, a)
            }))
        }
    };
    _.k.init = function() {
        _.fr.G.init.call(this);
        var a = _.sa.P();
        this.b = _.ta(a, "p_tr");
        var c = _.ta(a, "p_st"), a = _.ta(a, "p_log"), d = this.A;
        if (c = c.b(void 0, "OGPL"))
            _.F(d, 1) && a.log(c, "7", "s", void 0, 1), Oq(void 0, "OGPL")
    };

} catch (e) {
    _._DumpException(e)
}
try {
    var gr = function(a) {
        _.D(this, a, 0, [])
    };
    _.v(gr, _.C);
    var hr = function(a) {
        _.D(this, a, 0, [])
    };
    _.v(hr, _.C);
    var ir = function(a) {
        _.D(this, a, 0, [])
    };
    _.v(ir, _.C);
    var jr = function(a) {
        _.D(this, a, 0, [])
    };
    _.v(jr, _.C);
    var kr = function(a) {
        _.D(this, a, 0, [])
    };
    _.v(kr, _.C);
    var lr = function(a) {
        _.D(this, a, 0, [])
    };
    _.v(lr, _.C);
    var mr = function(a, c, d, e, f) {
        this.d = a;
        this.name = c;
        this.b = d;
        this.o = e;
        this.k = f
    }, nr = /^(?:(.*?)\.)?([a-zA-Z_$][\w$]*(?:\/.?<)?)?(\(.*\))?@(?::0|((?:http|https|file):\/\/[^\s)]+|javascript:.*))$/, or = /^\s{3,4}at(?: (?:(.*?)\.)?((?:new )?(?:[a-zA-Z_$][\w$]*|<anonymous>))(?: \[as ([a-zA-Z_$][\w$]*)\])?)? (?:\(unknown source\)|\(native\)|\((?:eval at )?((?:http|https|file):\/\/[^\s)]+|javascript:.*)\)|((?:http|https|file):\/\/[^\s)]+|javascript:.*))$/, pr = function(a) {
        this.b = [];
        if (a.stack) {
            a = a.stack.replace(/\s*$/,
            "").split("\n");
            for (var c = 0; c < a.length; c++) {
                var d, e = nr;
                if (d = a[c].match(or))
                    d = new mr(d[1] || "", d[2] || "", d[3] || "", "", d[4] || d[5] || ""), this.b.push(d);
                else if (d = a[c].match(e))
                    d = new mr(d[1] || "", d[2] || "", "", d[3] || "", d[4] || ""), this.b.push(d)
                }
        }
    }, qr = function(a) {
        return (0, _.oa)(a.b, function(a) {
            var d = [a.d ? a.d + ".": "", a.name ? a.name: "anonymous", a.o, a.b ? " [as " + a.b + "]": ""];
            if (a.k) {
                d.push(" at ");
                a = a.k;
                var e = "", f = a.match(/(.*?)(:\d+(:\d+)?)$/);
                f && (a = f[1], e = f[2]);
                t:
                {
                    for (var f = _.x("m"), g = /^https?:/, h = a.replace(g, ""),
                    l = 0; l < f.w.length; l++)
                        if (f.w[l].replace(g, "") == h) {
                            f = "db" + l;
                            break t
                        }
                    f = null
                }
                g = window.location.href.replace(/#.*/, "");
                h = /http.*?extern_js.*?\.js/;
                d.push(f ? "[" + f + "]" : a.replace(g, "[page]").replace(h, "[xjs]"));
                d.push(e)
            }
            return d.join("")
        })
    }, rr = function(a, c, d, e, f) {
        _.Pj.call(this, a, c, d, e, f);
        this.k = new pr(d)
    };
    _.v(rr, _.Pj);
    rr.prototype.b = function() {
        rr.G.b.call(this);
        window.console && window.console.log && window.console.log("Stack: ", this.k)
    };
    rr.prototype.d = function(a) {
        var c = rr.G.d.call(this, a) + "&jsst=";
        var d = this.k;
        a = a - c.length;
        if (4 > a)
            a = "";
        else if (0 == d.b.length)
            a = "none";
        else {
            var d = qr(d), e, f;
            e = d.length - 2;
            for (f = (0, window.encodeURIComponent)(String(d.join("\n"))); 0 < e && f.length > a; e--, f = (0, window.encodeURIComponent)(String(d.join("\n"))
                ))e == d.length - 2 ? d[e] = "[...]" : d.splice(e, 1);
            a = f.substr(0, a)
        }
        return c + a
    };
    var sr = function(a, c, d) {
        _.y.call(this);
        this.b = a;
        this.d = c;
        this.k = d
    };
    _.v(sr, _.y);
    sr.prototype.uf = function(a, c) {
        return new rr(this.b, this.d, a, this.k, c)
    };
    var tr = function(a, c) {
        for (var d = 0; a && 3 >= d;) {
            if (c(a))
                return a;
            a = a.parentNode;
            d++
        }
        return null
    }, ur = function(a) {
        return void 0 != a.firstElementChild ? a.firstElementChild : _.Vl(a.firstChild, !0)
    }, vr = function(a, c) {
        for (var d = c || Math.random, e = a.length - 1; 0 < e; e--) {
            var f = Math.floor(d() * (e + 1)), g = a[e];
            a[e] = a[f];
            a[f] = g
        }
    }, wr = function(a) {
        for (var c = [], d = 0; d < arguments.length; d++) {
            var e = arguments[d];
            if (_.ab(e))
                for (var f = 0; f < e.length; f += 8192)
                    for (var g = wr.apply(null, _.wf(e, f, f + 8192)), h = 0; h < g.length; h++)
                        c.push(g[h]);
            else 
                c.push(e)
        }
        return c
    },
    xr = function(a) {
        var c = _.$a(a);
        if ("object" == c || "array" == c) {
            if (a.clone)
                return a.clone();
            var c = "array" == c ? []: {}, d;
            for (d in a)
                c[d] = xr(a[d]);
            return c
        }
        return a
    }, yr = function(a) {
        _.rm.call(this, a);
        this.k = _.X("gb_X", this.d);
        this.o = _.x("el")
    };
    _.v(yr, _.rm);
    yr.prototype.A = function() {
        _.Ng(this.k, _.xd);
        this.o.Ha()
    };
    yr.prototype.w = function(a) {
        this.k.appendChild(a);
        this.o.Ha()
    };
    _.Xa(function() {
        var a = _.X("gb_8b");
        a && (a = new yr(a), _.u("gbar.sncw", (0, _.t)(a.A, a)), _.u("gbar.snaw", (0, _.t)(a.w, a)))
    });
    _.Xa(function() {
        var a = _.x("el");
        _.om(window, "resize", function() {
            _.Hk(a);
            a.Ke && a.Ha()
        })
    });
    var Ar = function(a, c, d, e) {
        var f = ["i1", "i2"], g = [], g = 0 == a.b%2 ? [d, c]: [c, d];
        c = [];
        for (d = 0; d < f.length; d++)
            c.push({
                ra: g[d].ra,
                url: zr([[a.d, a.o, a.k, a.b].join("-"), f[d], g[d].La], [e])
            });
        return c
    }, Br = function(a, c, d) {
        this.qh = a;
        this.Fg = c;
        this.wb = d
    }, Cr = function(a, c) {
        function d(a) {
            null != f && (e = Math.abs(new Date - f), a && (e*=-1))
        }
        var e =- 1, f = null;
        this.b = function() {
            var c = new window.Image(0, 0);
            c.onload = function() {
                d()
            };
            c.onerror = c.onabort = function() {
                d(!0)
            };
            f = new Date;
            c.src = a
        };
        this.We = function() {
            return c
        };
        this.Gh = function() {
            return e
        };
        this.ic = function() {
            return [c, e].join("=")
        }
    }, zr = function(a, c) {
        return ["//", a.join("-"), c.join("&")].join("")
    };
    var Dr = function() {};
    Dr.id = "ad";
    Dr.Ja = "//www.google.com/favicon.ico?";
    Dr.A = "//pagead2.googlesyndication.com/favicon.ico?";
    Dr.fb = function(a) {
        var c = a.ic(), d = {
            ra: "g_img_dt",
            url: Dr.Ja + c
        }, c = {
            ra: "a_img_dt",
            url: Dr.A + c
        };
        return 0 == a.b%2 ? [d, c] : [c, d]
    };
    var Er = function() {};
    Er.id = "as";
    Er.O = "unicast.metric.gstatic.com";
    Er.C = "stbcast.metric.gstatic.com";
    Er.U = {
        ra: "un_img_dt",
        La: Er.O
    };
    Er.B = {
        ra: "sa_img_dt",
        La: Er.C
    };
    Er.b = "/v6exp3/6.gif";
    Er.fb = function(a) {
        return Ar(a, Er.U, Er.B, Er.b)
    };
    var Fr = function() {};
    Fr.id = "ds";
    Fr.Ka = "dnssec-nd.gexperiments1.com";
    Fr.d = "dnssec-vd.gexperiments2.com";
    Fr.T = {
        ra: "nd_img_dt",
        La: Fr.Ka
    };
    Fr.k = {
        ra: "vd_img_dt",
        La: Fr.d
    };
    Fr.fb = function(a) {
        return Ar(a, Fr.T, Fr.k, "/dnssec/1.gif")
    };
    var Gr = function() {};
    Gr.id = "dv";
    Gr.d = "bogus-dnssec-vd.gexperiments2.com";
    Gr.K = "bogus-dnssec-bd.gexperiments3.com";
    Gr.k = {
        ra: "vd_img_dt",
        La: Gr.d
    };
    Gr.F = {
        ra: "bd_img_dt",
        La: Gr.K
    };
    Gr.fb = function(a) {
        return Ar(a, Gr.k, Gr.F, "/dnssec/1.gif")
    };
    var Hr = function() {};
    Hr.id = "3";
    Hr.b = "/v6exp3/6.gif";
    Hr.S = {
        ra: "v4_img_dt",
        La: "v6exp3-v4.metric.gstatic.com"
    };
    Hr.M = {
        ra: "ds_img_dt",
        La: "v6exp3-ds.metric.gstatic.com"
    };
    Hr.fb = function(a) {
        return Ar(a, Hr.S, Hr.M, Hr.b)
    };
    var Ir = function() {};
    Ir.id = "dz";
    Ir.w = "v6exp3-ds.metric.ipv6test.net";
    Ir.o = "v6exp3-ds.metric.ipv6test.com";
    Ir.b = "/v6exp3/6.gif";
    Ir.H = {
        ra: "4z_img_dt",
        La: Ir.w
    };
    Ir.J = {
        ra: "dz_img_dt",
        La: Ir.o
    };
    Ir.fb = function(a) {
        return Ar(a, Ir.H, Ir.J, Ir.b)
    };
    var Jr = function() {};
    Jr.id = "dzc";
    Jr.R = "//dzc-" + Ir.w + "/v6exp3/6.gif?";
    Jr.Q = "//dzc-" + Ir.o + "/v6exp3/6.gif?";
    Jr.fb = function(a) {
        var c = a.ic(), d = {
            ra: "4z_img_dt",
            url: Jr.R + c
        }, c = {
            ra: "dz_img_dt",
            url: Jr.Q + c
        };
        return 0 == a.b%2 ? [c, d] : [d, c]
    };
    var Kr = [new Br(.1, !0, Dr), new Br(1, !0, Er), new Br(1, !0, Fr), new Br(1, !0, Gr), new Br(.1, !1, Jr), new Br(1, !1, Ir), new Br(95.8, !0, Hr)], Lr = function(a, c, d) {
        this.d = String(a);
        "p" != this.d.charAt(0) && (this.d = "p" + this.d);
        this.o = c;
        this.k = d;
        c = Math.random();
        this.b = Math.floor(9E5 * c);
        this.b += 1E5;
        a = "https:" == window.document.location.protocol;
        c*=100;
        d = Kr[Kr.length - 1].wb;
        var e, f = 0;
        for (e = 0; e < Kr.length&&!(f += Kr[e].qh, f >= c); e++);
        e < Kr.length && (!a || Kr[e].Fg) && (d = Kr[e].wb);
        this.wb = d
    };
    Lr.prototype.ic = function() {
        return ["ipv6exp=", this.wb.id, "&p=", this.d, "&rnd=", this.o, "&hmac=", this.k, "&nonce=", this.b].join("")
    };
    var Mr = function(a) {
        for (var c = a.wb.fb(a), d = 0; d < c.length; d++) {
            var e = new Cr(c[d].url, c[d].ra);
            e.b();
            c[d] = e
        }(0, window.setTimeout)(function() {
            var d;
            d = ["/gen_204?ipv6exp=" + a.wb.id, "sentinel=1"];
            for (var e = {
                Ug: []
            }, h = 0; h < c.length; h++)
                d.push(c[h].ic()), e[c[h].We()] = c[h].Gh(), e.Ug.push(c[h].We());
            d = zr([[a.d, a.o, a.k, a.b].join("-"), "s1", "v6exp3-v4.metric.gstatic.com"], d);
            (new window.Image(0, 0)).src = d
        }, 3E4)
    }, Nr = function(a, c, d) {
        var e = new Lr(a, c, d);
        (0, window.setTimeout)(function() {
            Mr(e)
        }, 1E4)
    };
    var Or = function() {
        var a = _.G(_.I(), lr, 22) || new lr;
        this.k = _.A(_.F(a, 1));
        this.d = _.A(_.F(a, 2));
        this.b = _.A(_.F(a, 3))
    };
    _.Xa(function() {
        if (_.G(_.I(), lr, 22)) {
            var a = new Or;
            if (a.k && a.d && a.b)
                try {
                    var c = [a.k, a.d, a.b, "if-v6exp3-v4.metric.gstatic.com"].join("-") || window.location.hostname, a = [], d = c.indexOf(".metric.");
                    (a =- 1 < d ? c.substring(0, d).split("-") : c.split(".")) && 3 <= a.length && Nr(a[0], a[1], a[2])
                } catch (e) {
                _.H(e)
            }
        }
    });
    var Pr = function(a) {
        _.rm.call(this, a);
        this.o = _.S(this.d, "gb_Na");
        (a = _.X("gb_Oa", this.d)) && _.ol(this, a, _.ml, this.k)
    };
    _.v(Pr, _.rm);
    Pr.prototype.k = function(a) {
        var c;
        (a = a.d) && (a = a.getAttributeNode("data-ved")) && a.value && (c = {
            ved: a.value
        });
        _.W(this.o ? 41 : 39, c)
    };
    _.Xa(function() {
        if (_.G(_.I(), kr, 15)) {
            var a = _.X("gb_La");
            a && new Pr(a)
        }
    });
    _.Xa(function() {
        var a = _.fr.P();
        null == a.b && a.init();
        var c = {};
        c["7"] = a.Ig;
        c.up = a.Lg;
        c["2"] = a.Kg;
        c["9"] = a.Jg;
        _.er(a, c);
        a.b.Md()
    });
    var Rr = function(a, c, d) {
        _.rm.call(this, a);
        this.w = c;
        this.o=!d;
        this.k=!1;
        if (this.o) {
            a = _.hm("gbqfq");
            c = _.hm("gbqfqwb");
            d = _.hm("gbqfqw");
            var e = _.hm("gbqfb");
            if (!this.k) {
                a && c && (this.b(a, "focus", (0, _.t)(this.Tc, this, d)), this.b(a, "blur", (0, _.t)(this.$d, this, d)), _.ol(this, c, _.ml, (0, _.t)(this.Ud, this, a)));
                e && (_.ol(this, e, _.ml, _.ee(_.T, e, "gbqfb-no-focus")), this.b(e, "blur", _.ee(_.U, e, "gbqfb-no-focus")));
                a = _.hm("gbqfqb");
                c = _.hm("gbqfwd");
                d = _.hm("gbqfwc");
                var e = _.hm("gbqfqc"), f = _.hm("gbqfwf"), g = _.hm("gbqfwe");
                a && c && e && f && (this.b(a, "focus", (0, _.t)(this.Tc, this, d)), this.b(a, "blur", (0, _.t)(this.$d, this, d)), _.ol(this, c, _.ml, (0, _.t)(this.Ud, this, a)), this.b(e, "focus", (0, _.t)(this.Tc, this, g)), this.b(e, "blur", (0, _.t)(this.$d, this, g)), _.ol(this, f, _.ml, (0, _.t)(this.Ud, this, e)));
                this.k=!0
            }
            a = _.hm("gbqfqw");
            window.document.activeElement == _.hm("gbqfq") && this.Tc(a)
        }
        this.b(_.hm("gbqf"), "submit", Qr);
        _.u("gbar.qfhi", (0, _.t)(this.Ih, this))
    };
    _.v(Rr, _.rm);
    var Qr = function(a) {
        var c;
        (a = a.d) && (a = a.getAttributeNode("data-ved")) && a.value && (c = {
            ved: a.value
        });
        _.W(31, c)
    };
    _.k = Rr.prototype;
    _.k.Tc = function(a) {
        a && _.T(a, "gbqfqwf")
    };
    _.k.$d = function(a) {
        a && _.U(a, "gbqfqwf")
    };
    _.k.Ud = function(a) {
        a && a.focus()
    };
    _.k.Ih = function(a) {
        var c = _.hm("gbqffd");
        if (c && (_.Ng(c, _.xd), a))
            for (var d in a) {
                var e = window.document.createElement("input");
                e.name = d;
                e.value = a[d];
                e.type = "hidden";
                c.appendChild(e)
            }
    };
    _.k.ge = function(a, c) {
        _.hm(a ? "gbqfaa" : "gbqfab").appendChild(c);
        this.ff()
    };
    _.k.ff = function() {
        var a = _.hm("gbqfqwb");
        if (a) {
            var c = _.hm("gbqfaa"), d = _.hm("gbqfab");
            if (c || d) {
                var e = "left", f = "right";
                this.w && (e = "right", f = "left");
                c && (a.style[e] = c.offsetWidth + "px");
                d && (a.style[f] = d.offsetWidth + "px")
            }
        }
    };
    _.Xa(function() {
        var a = window.document.getElementById("gbq");
        if (a) {
            var c = _.Ra(), c = _.z(_.F(c, 12)), d = _.G(_.I(), jr, 18) || new jr, a = new Rr(a, c, _.z(_.F(d, 1)));
            _.u("gbar.qfas", (0, _.t)(a.ge, a, !0));
            _.u("gbar.qfae", (0, _.t)(a.ge, a, !1));
            _.u("gbar.qfau", (0, _.t)(a.ff, a));
            _.x("api").Sa()
        }
    });
    var Sr = function() {
        this.d = []
    };
    Sr.prototype.b = 0;
    var Tr = function(a, c) {
        return 1 <= a.b ? 1 <= a.d.length ? 2 : (a.d.push(c), 1) : (c(), 0)
    };
    var Ur = function() {
        var a = window.location.href.match(/.*(\?|#|&)usegapi=([^&#]+)/) || [];
        return "1" === (0, window.decodeURIComponent)(a[a.length - 1] || "")
    };
    var Vr = function() {
        this.b = {}
    };
    var Wr = function(a, c, d, e) {
        a = a || window;
        "number" != typeof d && (d = 800);
        "number" != typeof e && (e = 600);
        var f = a.screen.availWidth, g = a.screen.availHeight, h = Math.min(f, null != a.outerWidth ? a.outerWidth : a.document.documentElement.clientWidth), l = Math.min(g, null != a.outerHeight ? a.outerHeight : a.document.documentElement.clientHeight), q = null != a.screenY ? a.screenY: a.screenTop;
        a = Math.max(0, (null != a.screenX ? a.screenX : a.screenLeft) + (h>>1) - (d>>1));
        l = Math.max(0, q + (l>>1) - (e>>1));
        q = l + e;
        a + d > f && (a = Math.max(0, f - d));
        q > g && (l = Math.max(0, g - e));
        d = {
            left: a,
            top: l,
            menubar: !1,
            toolbar: !1,
            location: !1,
            status: !0,
            scrollbars: !0,
            width: d,
            height: e
        };
        c && (d.target = c);
        return d
    };
    var Xr = function(a) {
        this.b = a
    };
    Xr.prototype.k = function(a) {
        return a
    };
    Xr.prototype.o = function(a) {
        return a
    };
    Xr.prototype.d = 0;
    Xr.prototype.update = function(a, c) {
        var d = this.b.b(a);
        c&&!c.error && c.result ? Yr(d, c.result, this.d) : Zr(d, null, this.d)
    };
    var $r = function(a) {
        this.b = a
    };
    _.v($r, Xr);
    $r.prototype.k = function(a) {
        this.w = a.params && a.params.id;
        this.d = this.b.b(this.w).b;
        return a
    };
    $r.prototype.o = function(a) {
        this.update(this.w, a);
        return a
    };
    var as = function(a) {
        this.b = a
    };
    _.v(as, Xr);
    as.prototype.k = function(a) {
        var c = a.params, d = c && c.optimistic, e = c && c.id;
        this.C = e;
        var f = this.b.b(e).get(), f = f ? xr(f): {
            id: e,
            isSetByViewer: !1,
            metadata: {}
        }, g;
        g = f || {};
        g.metadata = g.metadata || {};
        g.metadata.globalCounts = g.metadata.globalCounts || {};
        this.w(f, c);
        this.A = f;
        d && (Zr(this.b.b(e), f), a = xr(a), delete a.params.optimistic);
        this.d = this.b.b(e).b;
        return a
    };
    as.prototype.o = function(a) {
        if (a.result) {
            var c = a.result, d = this.A;
            c.metadata = c.metadata || d.metadata;
            c.metadata.globalCounts = c.metadata.globalCounts || d.metadata.globalCounts;
            c.metadata.globalCounts.count = c.metadata.globalCounts.count || d.metadata.globalCounts.count;
            if (d = c.metadata.globalCounts.person || d.metadata.globalCounts.person)
                c.metadata.globalCounts.person = d
        }
        this.update(this.C, a);
        return a
    };
    var bs = function(a) {
        this.w = a || "inline";
        this.k = {
            ping: _.Ya,
            track: _.Ya,
            error: _.Ya
        }
    }, cs = function(a, c) {
        _.yb(c) && (a.k.track = c, a.k.ping = function(a) {
            c({
                evt: a
            })
        })
    };
    var ds = function(a) {
        this.b = a
    };
    _.v(ds, as);
    ds.prototype.w = function(a) {
        a.isSetByViewer && void 0 != a.metadata.globalCounts.count && (a.metadata.globalCounts.count = Math.max(a.metadata.globalCounts.count - 1, 0));
        a.isSetByViewer=!1
    };
    var es = function(a) {
        this.b = a
    };
    _.v(es, as);
    es.prototype.w = function(a, c) {
        a.isSetByViewer || void 0 == a.metadata.globalCounts.count || a.metadata.globalCounts.count++;
        a.isSetByViewer=!0;
        a.aclJson = c.aclJson
    };
    var fs = function(a, c) {
        c || (c = {});
        var d = window, e = "undefined" != typeof a.href ? a.href: String(a), f = c.target || a.target, g = [], h;
        for (h in c)
            switch (h) {
            case "width":
            case "height":
            case "top":
            case "left":
                g.push(h + "=" + c[h]);
                break;
            case "target":
            case "noreferrer":
                break;
            default:
                g.push(h + "=" + (c[h] ? 1 : 0))
            }
        g = g.join(",");
        if (c.noreferrer) {
            if (d = d.open("", f, g))
                _.J&&-1 != e.indexOf(";") && (e = "'" + e.replace(/'/g, "%27") + "'"), d.opener = null, e = _.sb(e), d.document.write('<META HTTP-EQUIV="refresh" content="0; url=' + e + '">'), d.document.close()
        } else 
            d = d.open(e, f, g);
        return d
    };
    var gs = function() {
        this.b = _.md(window.location.href)
    };
    var hs = function(a, c) {
        _.N.call(this);
        this.k = a || null;
        this.d = c || null;
        this.b = 1
    };
    _.v(hs, _.N);
    hs.prototype.get = function() {
        return this.d || this.k
    };
    var Zr = function(a, c, d) {
        d && d != a.b || (a.d = c, a.b++, a.dispatchEvent("change"))
    }, Yr = function(a, c, d) {
        d && d != a.b ? (a.k = c, a.d || a.dispatchEvent("change")) : (a.d = null, a.b++, a.k = c, a.dispatchEvent("change"))
    };
    var js = function(a, c) {
        _.N.call(this);
        this.M = a;
        this.o = "https://plus.google.com";
        this.C = is();
        this.F = c;
        this.B = [1100, 850];
        this.w=!1
    };
    _.v(js, _.N);
    var ks = /^\/_\/im(?=\/|$)/, is = function() {
        var a = window;
        return a.location.protocol + "//" + a.location.host
    };
    js.prototype.b=!1;
    js.prototype.k = null;
    js.prototype.A = function(a) {
        try {
            var c = new Vr;
            c.b = Object(a);
            this.b=!!c.b.created;
            this.H = String(c.b.version || "");
            this.dispatchEvent(new _.Xb(this.b ? "plus_signed_up" : "signup_cancelled"))
        } catch (d) {
            if (this.k)
                try {
                    this.k(d)
                } catch (e) {}
        }
    };
    var ls = function(a) {
        this.k = {};
        this.o = {};
        this.d = (a || window.googleapis).plusones
    };
    ls.prototype.get = function(a) {
        return ms(this, this.d.get(a))
    };
    ls.prototype.remove = function(a) {
        return ms(this, this.d.remove(a))
    };
    ls.prototype.b = function(a) {
        this.k[a] || (this.k[a] = new hs);
        return this.k[a]
    };
    var ns = function(a, c) {
        a.o[c] || (a.o[c] = new Sr);
        return a.o[c]
    };
    ls.prototype.hc = function(a) {
        _.uc(a)
    };
    var ms = function(a, c) {
        c.transport = {
            name: "wrapped_googleapis",
            execute: (0, _.t)(a.w, a, c.transport)
        };
        return c
    };
    ls.prototype.w = function(a, c, d) {
        for (var e = {}, f = [], g = [], h = 0, l = c.length; h < l; ++h) {
            var q = c[h], r = os(this, q);
            r && (r.b++, g.push(r));
            r = q.id;
            e[r] = ps(this, q);
            (q = e[r].k(q)) && f.push(q)
        }
        a.execute(f, (0, _.t)(function(a) {
            for (var c = 0, f = g.length; c < f; ++c) {
                var h = g[c];
                for (h.b--; !(1 <= h.b) && h.d.length;)
                    h.d.shift()()
            }
            var c = {}, l;
            for (l in e)(f = e[l].o(a[l] || null)
                ) && (c[l] = f);
            d(c)
        }, this))
    };
    var ps = function(a, c) {
        switch (c.method) {
        case "pos.plusones.get":
            return new $r(a);
        case "pos.plusones.insert":
            return new es(a);
        case "pos.plusones.delete":
            return new ds(a);
        default:
            return new Xr(a)
        }
    }, os = function(a, c) {
        var d = c.method, e = c.params, e = e && e.id;
        return "pos.plusones.insert" != d && "pos.plusones.delete" != d ||!e ? null : ns(a, e)
    };
    var qs = function(a, c, d) {
        this.k = a;
        this.d = c;
        this.b = d
    }, ss = function(a, c, d, e, f, g, h) {
        _.yc.call(this);
        this.d = a;
        this.D = c;
        _.T(c, "esw");
        this.O = this.d.A;
        (this.Q = e || null) && (e = this.Q.getElementsByTagName("a")) && e[0] && (e[0].onclick = (0, _.t)(function() {
            rs(this, !1);
            Tr(ns(this.d.b, this.w), (0, _.t)(this.V, this, (0, _.fa)() - this.O));
            window.event && (window.event.returnValue=!1);
            return !1
        }, this));
        _.S(c, "eswa") || _.T(c, "eswd");
        this.k = this.d.k;
        this.R = f ? f.split(" ") : [];
        this.w = d;
        this.W = g || null;
        this.K = h || null;
        this.o = this.d.b.b(d);
        this.b(this.o, "change", this.B);
        a.d.Ua("plus_signed_up", (0, _.t)(this.T, this));
        a.d.Ua("signup_cancelled", (0, _.t)(this.T, this))
    };
    _.v(ss, _.yc);
    var ts = {
        Oh: "eswa",
        Nh: "eswd",
        Lh: "eswh",
        $h: "esww",
        ERROR: "eswe"
    };
    ss.prototype.A=!1;
    ss.prototype.J=!1;
    ss.prototype.N = function() {
        return this.D
    };
    ss.prototype.S = function(a) {
        if (a && a.error && a.error.code) {
            this.A=!0;
            switch (a.error.code) {
            case 401:
                this.d.d.b=!1
            }
            this.k.error({
                code: a.error.code,
                message: a.error.message,
                entity: this.w
            });
            this.B()
        } else 
            a && this.k.track({
                resp: "plusone",
                state: a.isSetByViewer
            })
    };
    var us = function(a, c) {
        var d = window.google || null;
        d && (d.comm && d.comm.j && d.comm.j(), d.j && d.j.en && d.j.init && d.j.cl && d.j.cl());
        d = c ? a.V : a.X;
        rs(a, !c);
        var e = ns(a.d.b, a.w), f = _.t, g;
        g = (0, _.fa)() - a.O;
        d = Tr(e, f(d, a, g));
        c && 2 != d ? window.setTimeout((0, _.t)(a.B, a), 150) : 2 == d && a.k.ping("throttler_rejected")
    }, vs = function(a, c, d) {
        a = {
            id: a.w,
            cdx: c.toString(16),
            gpsrc: "inline",
            source: a.W || a.d.w
        };
        d && (a.optimistic=!0);
        return a
    };
    ss.prototype.X = function(a) {
        var c = this.o.get();
        c && c.isSetByViewer || (this.k.track({
            req: "plusone",
            evt: "set_plusone"
        }), c = this.d.b, a = vs(this, a, !0), this.K && (a.image_title = this.K.k, a.image_thumbnail = this.K.d, a.image_landing = this.K.b), a = ws(this, a), ms(c, c.d.insert(a)).execute((0, _.t)(this.S, this)));
        xs(this, !0)
    };
    ss.prototype.V = function(a) {
        var c = this.o.get();
        c && c.isSetByViewer && (this.k.track({
            req: "plusone",
            evt: "set_unplusone"
        }), this.d.b.remove(ws(this, vs(this, a, !1))).execute((0, _.t)(this.S, this)));
        xs(this, !1)
    };
    var ws = function(a, c) {
        var d = a.d.d.H;
        d && (c.profileVersion = d);
        return c
    }, rs = function(a, c) {
        a.Q && (a.Q.style.display = c ? "" : "none")
    }, xs = function(a, c) {
        for (var d = new gs, e = 0, f = a.R.length; e < f; ++e) {
            var g = a.R[e];
            if (g) {
                var h = d, g = _.md(g), l = g[1];
                l || (g[1] = h.b[1], l = g[2]);
                l || (g[2] = h.b[2], l = g[3]);
                l || (g[3] = h.b[3], l = g[4]);
                if (!l) {
                    g[4] = h.b[4];
                    var q = g[5], r = h.b[5];
                    if (l = q) {
                        if ("/" != q.charAt(0))
                            if (h.b[3]&&!r)
                                q = "/" + q;
                            else {
                                var w = r.lastIndexOf("/");
                                - 1 != w && (q = r.substr(0, w + 1) + q)
                            }
                        r = q;
                        if (".." == r || "." == r)
                            q = "";
                        else if ( - 1 != r.indexOf("./") ||
                        - 1 != r.indexOf("/.")) {
                            for (var q = 0 == r.lastIndexOf("/", 0), r = r.split("/"), w = [], E = 0; E < r.length;) {
                                var P = r[E++];
                                "." == P ? q && E == r.length && w.push("") : ".." == P ? ((1 < w.length || 1 == w.length && "" != w[0]) && w.pop(), q && E == r.length && w.push("")) : (w.push(P), q=!0)
                            }
                            q = w.join("/")
                        } else 
                            q = r;
                        g[5] = q
                    }
                }
                l || (g[5] = h.b[5], l = g[6]);
                l || (g[6] = h.b[6], l = g[7]);
                l || (g[7] = h.b[7]);
                g = _.km(g[1], g[2], g[3], g[4], g[5], g[6], g[7]);
                if (0 == g.lastIndexOf("http://", 0) || 0 == g.lastIndexOf("https://", 0))
                    h = {
                        entity: a.w,
                        toggle: c ? "on": "off"
                    }, window.google && window.google.kEI &&
                    (h.ei = window.google.kEI), h.zx = _.ql(), g = _.Ql(_.Wl([g], h)), (new window.Image).src = g
            }
        }
    };
    ss.prototype.B = function() {
        try {
            if (this.H) {
                var a = this.H - (0, _.fa)();
                if (0 < a) {
                    window.setTimeout((0, _.t)(this.B, this), a);
                    return 
                }
                this.H = void 0
            }
            if (this.A)
                ys(this, "eswe"), rs(this, !1);
            else {
                var c = this.o.get();
                c && (zs(this) ? (ys(this, "esww"), this.H = (0, _.fa)() + 650) : ys(this, c.isSetByViewer ? "eswa" : "eswd"))
            }
        } catch (d) {}
    };
    var ys = function(a, c) {
        var d = [], e;
        for (e in ts) {
            var f = ts[e];
            c != f && d.push(f)
        }
        _.Qg(a.D, d);
        _.T(a.D, c)
    }, zs = function(a) {
        var c = ns(a.d.b, a.w);
        return !!a.H||!!c.d.length||!!c.b&&!a.o.d
    };
    ss.prototype.T = function() {
        var a = this.d.d.b;
        this.k.track({
            req: "signup",
            success: a
        });
        a && (this.A=!1, us(this, this.J));
        this.J=!1
    };
    ss.prototype.L = function() {
        ss.G.L.call(this)
    };
    var Bs = function(a, c, d) {
        _.y.call(this);
        a = a || {};
        this.b = {};
        this.k = [];
        this.d = new bs(d);
        this.d.o = c || window.document;
        this.d.b = new ls(a.googleapis);
        d=!!a.signed;
        var e = a.elog;
        c = new js("g", 1);
        c.k = e;
        c.w=!0;
        c.C = is();
        c.b = d;
        if (d = a.base) {
            d.match(/.*\/$/) && (d = d.substr(0, d.length - 1));
            var e = _.md(d), f = e[5] || "", g = ks.exec(f);
            g && (e[5] = f.substr(g[0].length), d = _.km(e[1], e[2], e[3], e[4], e[5], e[6], e[7]));
            c.o = d
        }
        this.d.d = c;
        cs(this.d, a.logEvent);
        c = this.d;
        d = a.logErr;
        _.yb(d) && (c.k.error = d);
        c = a.loadTime || (0, _.fa)();
        this.d.A = c;
        this.o =
        a.logRender || null;
        As(this)
    }, Cs;
    _.v(Bs, _.y);
    var Ds = 0;
    _.u("gbar.pw.init", function(a, c, d) {
        if (Cs)
            throw Error("ua");
        a = new Bs(a, c, d);
        _.u("gbar.pw.clk", (0, _.t)(a.A, a));
        _.u("gbar.pw.hvr", (0, _.t)(a.w, a));
        Cs = a;
        if (a.o)
            try {
                a.o()
        } catch (e) {}
        return a
    });
    _.u("gbar.pw.dsp", function() {
        _.bb(Cs);
        Cs = null
    });
    var As = function(a) {
        var c = _.gm("esw", a.d.o), d = {};
        (0, _.ma)(c, function(a) {
            a.id || (a.id = "gbpwm_" + Ds++);
            var c = a.id;
            if (c in this.b)
                d[c] = this.b[c], delete this.b[c];
            else if (a = Es(this, a))
                d[c] && this.k.push(d[c]), d[c] = a
        }, a);
        Fs(a);
        a.b = d
    }, Es = function(a, c) {
        var d = c.getAttribute("g:entity");
        if (!d)
            return null;
        var e = c.getAttribute("g:undo"), f = void 0;
        e && (f = a.d.o.getElementById(e));
        var e = c.getAttribute("g:pingback"), g = c.getAttribute("g:source"), h = c.getAttribute("g:imgtitle"), l = c.getAttribute("g:imgtbn"), q = c.getAttribute("g:imgland"),
        r = null;
        h && l && q && (r = new qs(h, l, q));
        d = new ss(a.d, c, d, f, e, g, r);
        f = _.S(d.D, "eswa");
        (e = d.o.get()) ? e.isSetByViewer = f : e = {
            id: d.w,
            isSetByViewer: f,
            metadata: {}
        };
        Yr(d.o, e);
        return d
    };
    Bs.prototype.A = function(a) {
        a.id && a.id in this.b ? Gs(this, a) : As(this);
        if (a.id && (a = this.b[a.id])) {
            var c = a.o.get(), c=!!c && c.isSetByViewer;
            a.k.ping("click");
            var d;
            d = a.d.d;
            if (d.b)
                a.A ? (fs("https://www.google.com/support/profiles/?p=plusone_button_error&hl=en-US", Wr(window, "GooglePlusOneHelp", 800, 600)), a.k.ping("help_window"), d=!0) : d=!1;
            else {
                var e = window, f = d.o + "/_/+1/messageproxy";
                if (!d.d) {
                    var g = window.document.createElement("div");
                    g.style.position = "absolute";
                    g.style.left = "-1000px";
                    g.style.top = "-1000px";
                    g.style.width = "1px";
                    g.style.height = "1px";
                    window.document.body.appendChild(g);
                    if (Ur())
                        f = {
                            url: f,
                            where: g,
                            messageHandlers: {
                                handleMessage: (0, _.t)(d.A, d)
                            },
                            messageHandlersFilter: window.gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
                        }, d.d = window.gapi.iframes.getContext().openChild(f);
                    else {
                        var h = window.iframes;
                        d.d = h.open.apply(h, [f, {
                            container: g
                        }, {}, {
                            handleMessage: (0, _.t)(d.A, d)
                        }
                        ])
                    }
                }
                var l;
                d.d.getId ? l = d.d.getId() : l = d.d.getId();
                l = d.o + "/up/?type=st&client=" + d.F + "&gpsrc=" + (0, window.encodeURIComponent)(d.M) + "&parent=" +
                (0, window.encodeURIComponent)(d.C) + "&proxy=" + l + "&wlbsl=1";
                d.w && (l += "&rsz=1");
                l += window.__P1_LOCALE ? "&hl=" + window.__P1_LOCALE : "";
                d = Wr(e, "GooglePlusPopupSignup", d.B[0], d.B[1]);
                (e = window.iframer) && e.send && e.send("drefresh");
                (d = fs(l, d)) && d.focus();
                a.J=!!c;
                a.k.track({
                    req: "signup"
                });
                d=!0
            }
            d || (zs(a) ? a.k.ping("blocked") : us(a, c))
        }
    };
    Bs.prototype.w = function(a) {
        if (a) {
            a.id && a.id in this.b ? Gs(this, a) : As(this);
            for (var c in this.b);
        }
    };
    var Gs = function(a, c) {
        if (c.id && c.id in a.b) {
            for (var d = a.b[c.id].N(); d && d.parentNode;)
                d = d.parentNode;
            d != a.d.o && (_.bb(a.b[c.id]), (d = Es(a, c)) && (a.b[c.id] = d))
        }
    }, Fs = function(a) {
        for (var c in a.b)
            _.bb(a.b[c]);
        a.b = null
    };
    Bs.prototype.L = function() {
        Fs(this);
        for (var a = 0; a < this.k.length; a++)
            _.bb(this.k[a]);
        this.k = null;
        Bs.G.L.call(this)
    };
    var Hs = function(a) {
        _.Xb.call(this, a)
    };
    _.v(Hs, _.Xb);
    var Is = function(a) {
        _.D(this, a, 0, [])
    };
    _.v(Is, _.C);
    var Js = function(a) {
        _.N.call(this);
        this.D = a
    };
    _.v(Js, _.N);
    Js.prototype.d = "normal";
    Js.prototype.N = function() {
        return this.D
    };
    Js.prototype.k = function() {};
    var Ks = function(a) {
        _.D(this, a, 0, [])
    };
    _.v(Ks, _.C);
    var Ls = function() {
        var a = new _.Hd(null, void 0);
        _.Id(a, "https");
        _.Jd(a, "plus.google.com");
        _.Ld(a, "/:session_prefix:_/socialgraph/circlepicker/menu");
        this.He = a
    };
    _.ba(Ls);
    var Ms = function() {};
    _.v(Ms, _.y);
    Ms.prototype.k = _.Ya;
    Ms.prototype.d = _.Ya;
    Ms.prototype.b = _.Ya;
    var Ns = function(a, c, d, e, f, g, h, l) {
        _.N.call(this);
        this.B = a;
        this.o = c;
        this.J = null;
        this.S = new _.yc(this);
        _.he(this, this.S);
        this.d = d;
        this.H = e;
        this.F = f || new Ms;
        this.C = h || window.gapi;
        this.w = l || Ur();
        _.he(this, this.F);
        this.S.b(this.o, "e", this.Vf).b(this.o, "action", this.Uf).b(this.o, "leave", this.Wf).b(this, "sgcp_amh", this.ng)
    };
    _.v(Ns, _.N);
    _.k = Ns.prototype;
    _.k.uc=!1;
    _.k.jd=!1;
    _.k.tc=!1;
    _.k.Wd=!1;
    _.k.Od=!1;
    _.k.Eh=!1;
    _.k.ef=!1;
    _.k.Eg = function() {
        this.b && this.b.send("leave", void 0, void 0, this.d.CROSS_ORIGIN_IFRAMES_FILTER);
        this.tc=!1;
        this.O && (_.m.clearTimeout(this.O), this.O = null)
    };
    _.k.af = function(a) {
        Os(this);
        this.uc ? a ? this.b.send("buttonAction", void 0, void 0, this.d.CROSS_ORIGIN_IFRAMES_FILTER) : (this.Wd=!!a, this.b.send("buttonHover", void 0, void 0, this.d.CROSS_ORIGIN_IFRAMES_FILTER)) : this.tc=!!a
    };
    _.k.L = function() {
        this.b && this.b.close();
        Ns.G.L.call(this)
    };
    _.k.ng = function() {
        var a = this.o.N();
        if (a)
            try {
                a.focus(), this.Wd || a.blur()
        } catch (c) {}
    };
    var Os = function(a) {
        if (!a.U&&!a.b) {
            a.A || (a.A = (0, _.fa)());
            a.dispatchEvent("sgcp_lof");
            a.F.k();
            a.k = {
                width: 210,
                height: Ps(a),
                anchor: a.o.N(),
                anchorPos: "top-left",
                leftOffset: - 1
            };
            a.k.style = "slide-menu";
            var c = Ls.P().He.toString(), d = {};
            d.oo = window.location.protocol + "//" + window.location.host;
            window.document.documentMode && (d.hostiemode = window.document.documentMode);
            _.F(a.B, 3) && (d.egid = _.F(a.B, 3));
            _.F(a.B, 1) && (d.eemail = _.F(a.B, 1));
            a.H && (d.as = a.H);
            null != a.M && (d.pc = a.M);
            a.Od && (d.flw = "d");
            a.J && (d.bc = a.J);
            d.sts = a.A;
            var e = a.C && a.C.config && a.C.config.get("iframes/:source:");
            e && (d.gsrc = e);
            d.tpbm = a.Eh;
            a.W && (d.at = a.W);
            e = {
                updateButton: (0, _.t)(a.V, a),
                dispatchEvent: (0, _.t)(a.Be, a),
                show: (0, _.t)(a.Fh, a),
                displayStateCallback: (0, _.t)(a.yd, a),
                isShown: (0, _.t)(a.Og, a),
                setOffset: (0, _.t)(a.Ch, a),
                setHideOnLeave: (0, _.t)(a.Ah, a),
                setEntityInNoCircles: (0, _.t)(a.zh, a),
                _event: (0, _.t)(a.wg, a)
            };
            a.X && (e.showNotification = (0, _.t)(a.X, a));
            if (a.w) {
                e.dispatchEvent = (0, _.t)(function(a) {
                    this.Be(a[0], a[1])
                }, a);
                e.updateButton = (0, _.t)(function(a) {
                    this.V(a[0],
                    0, a[2])
                }, a);
                a.k.url = c;
                a.k.queryParams = d;
                a.k.messageHandlers = e;
                a.k.messageHandlersFilter = a.d.CROSS_ORIGIN_IFRAMES_FILTER;
                a.k.relayOpen =- 1;
                a.U=!0;
                var c = "", f;
                for (f in e)
                    c += "," + f;
                a.k.fragmentParams = {
                    _methods: c.substr(1)
                };
                a.aa = "CP" + Math.random();
                a.k.id = a.aa;
                var g = a.C;
                a = (0, _.t)(function() {
                    var a = g.iframes.getContext(), c = g.iframes.CROSS_ORIGIN_IFRAMES_FILTER;
                    this.b = {
                        getTargetIframeId: (0, _.t)(function() {
                            return this.aa
                        }, this)
                    };
                    a.open(this.k, (0, _.t)(function(a) {
                        this.b = a;
                        this.U=!1;
                        this.b.register("_ready", (0, _.t)(this.Ge,
                        this), c);
                        this.b.registerWasRestyled((0, _.t)(function(a) {
                            this.yd(a[0], a[1])
                        }, this), c);
                        this.b.registerWasClosed((0, _.t)(this.Fe, this), c)
                    }, this));
                    this.yd(!0, !1)
                }, a);
                g.iframes && g.iframes.getContext ? a() : g.load("gapi.iframes", a)
            } else 
                _.wb(e, function(a, c) {
                    this.d.registerForOpenedSibling("_sameOrigin_" + c, a)
                }, a), a.b = a.d.open(c, a.k, d, e, (0, _.t)(a.Fe, a)), a.b.register("ready", (0, _.t)(a.Ge, a))
        }
    };
    Ns.prototype.V = function(a, c, d) {
        c = ur(this.o.D).nextSibling;
        var e = c.parentNode;
        e && e.replaceChild(window.document.createTextNode(String(a)), c);
        a = this.o;
        a.d = d;
        _.og(ur(a.D), "accented" == d);
        c = ["ibk", "cpb"];
        _.S(a.D, "cpss") && c.push("cpss");
        switch (d) {
        case "accented":
            d = "kpgb";
            break;
        case "blocked":
            d = "cpbb";
            break;
        default:
            d = "ksb"
        }
        c.push(d);
        a.D.className = c.join(" ");
        this.o.k()
    };
    var Ps = function(a) {
        var c = null != a.R ? a.R: 5, d = 32 + 22 * c;
        1 < c && (a.M || a.Od) && (d += 7);
        return Math.min(178, d)
    };
    _.k = Ns.prototype;
    _.k.zh = function() {};
    _.k.Fh = function(a) {
        this.b && (this.w ? this.b.restyle({
            showMenu: a
        }) : this.b.send("showMenu", a))
    };
    _.k.Og = function() {
        return this.jd
    };
    _.k.Ch = function(a, c) {
        this.b && (this.w ? this.b.send("setOffset", [a, c], void 0, this.d.CROSS_ORIGIN_IFRAMES_FILTER) : this.b.setOffset(a, c))
    };
    _.k.Ah = function(a) {
        this.b && this.b.send("setHideOnLeave", a, void 0, this.d.CROSS_ORIGIN_IFRAMES_FILTER)
    };
    _.k.Be = function(a, c) {
        this.dispatchEvent(null != c ? new Hs(a) : a)
    };
    _.k.Ge = function() {
        this.uc=!0;
        (this.Wd = this.tc) ? this.b.send("buttonAction", void 0, void 0, this.d.CROSS_ORIGIN_IFRAMES_FILTER) : this.b.send("buttonHover", void 0, void 0, this.d.CROSS_ORIGIN_IFRAMES_FILTER);
        if (this.w || this.b.displayState)
            this.F.d(), this.dispatchEvent("sgcp_wr");
        if (this.ef)
            if (this.uc) {
                var a = {};
                a.following = "normal" == this.o.d;
                this.Mb && (a.abuseDetails = this.Mb.Xa());
                this.b.send("toggleFollow", a, void 0, this.d.CROSS_ORIGIN_IFRAMES_FILTER)
            } else 
                this.ef=!0
    };
    _.k.Fe = function() {
        this.b = null;
        this.uc=!1;
        this.F.b()
    };
    _.k.yd = function(a, c) {
        a&&!c ? this.jd=!0 : !a && c && (this.jd=!1);
        this.b && (this.b.displayState || this.w && this.b.send) ? this.w ? this.b.send("displayState", [a, c], void 0, this.d.CROSS_ORIGIN_IFRAMES_FILTER) : this.b.displayState(a, c) : a ? this.dispatchEvent(c ? "sgcp_ams" : "sgcp_bms") : c && this.dispatchEvent("sgcp_amh")
    };
    _.k.Uf = function(a) {
        this.af(!0);
        a.target.Mb && (this.Mb = new Ks(a.target.Mb.Xa()), delete a.target.Mb)
    };
    _.k.Wf = function() {};
    _.k.wg = function() {};
    _.k.Vf = function() {
        this.af(!1)
    };
    var Qs = function() {
        _.N.call(this);
        this.b = {};
        this.d = function() {
            return new Ms
        }
    };
    _.v(Qs, _.N);
    _.ba(Qs);
    Qs.prototype.init = function(a) {
        var c = Ls.P(), d = _.Ld(_.Kd(_.Jd(_.Id(new _.Hd, a.scheme), a.host), a.port), a.path);
        a = _.Md(d, a.query, void 0);
        c.He = a;
        _.M(window, "resize", this.k, !1, this)
    };
    Qs.prototype.k = function() {
        for (var a in this.b)
            this.b[a].Y(), delete this.b[a]
    };
    var Ts = function(a, c) {
        var d = Rs(c.target || c.srcElement);
        return d ? Ss(a, d) : null
    }, Ss = function(a, c) {
        var d = _.Nf(c), e = a.b[d];
        if (!e) {
            var e = new Is, f = c.getAttribute("g:oid");
            "" != f && _.cb(e, 3, f);
            f = c.getAttribute("g:em");
            "" != f && _.cb(e, 1, f);
            var f = new Js(c), g = c.getAttribute("g:as"), h = a.d(), e = new Ns(e, f, window.iframes, g, h, 0, void 0, !0);
            if (f = c.getAttribute("g:pc"))
                e.M = (0, window.parseInt)(f, 10);
            f =+ (c.getAttribute("g:circles") || "0,0").split(",")[1];
            e.R = f;
            f = c.getAttribute("g:follow");
            if ("d" == f || "1" == f)
                e.Od=!0;
            a.b[d] = e
        }
        return e
    }, Rs = function(a) {
        return tr(a, function(a) {
            return "cirp" == a.getAttribute("g:type")
        })
    };
    var Us = function() {
        _.y.call(this);
        this.b = null;
        this.d = new _.sm
    };
    _.v(Us, _.y);
    _.k = Us.prototype;
    _.k.Ta = function() {
        return this.d
    };
    _.k.gh = function(a) {
        try {
            this.b = Qs.P(), this.b.init({
                scheme: _.A(_.F(a, 3)),
                host: _.A(_.F(a, 4)),
                port: _.A(_.F(a, 5)),
                path: _.A(_.F(a, 6)),
                query: _.A(_.F(a, 7))
            }), _.u("gbar.cp.me", (0, _.t)(this.Yg, this)), _.u("gbar.cp.ml", (0, _.t)(this.Xg, this)), _.u("gbar.cp.c", (0, _.t)(this.sf, this)), _.u("gbar.cp.rc", (0, _.t)(this.th, this)), _.u("gbar.cp.rel", (0, _.t)(this.uh, this)), _.u("gbar.cp.bl", !0), this.d.$a()
        } catch (c) {
            _.H(c)
        }
    };
    _.k.hh = function(a) {
        a && this.d.addCallback(a)
    };
    _.k.Yg = function(a, c) {
        try {
            var d = this.b, e = a || window.event, f = c || (new Date).getTime(), g = Ts(d, e);
            if (g) {
                var h = f || (0, _.fa)();
                g.A && (h = Math.min(g.A, h));
                g.A = h;
                var l = g.o, q = new _.$b(e);
                q.o && _.rf(l.D, q.o) || (l.b || (l.b = window.setTimeout((0, _.t)(l.dispatchEvent, l, "e"), 100)), l.dispatchEvent(q));
                for (var r in d.b) {
                    var w = d.b[r];
                    w != g && w.Eg()
                }
            }
            return !1
        } catch (E) {
            _.H(E)
        }
    };
    _.k.Xg = function(a) {
        try {
            var c = a || window.event, d = Ts(this.b, c);
            if (d) {
                var e = d.o, f = new _.$b(c);
                f.o && _.rf(e.D, f.o) || (e.b && (window.clearTimeout(e.b), e.b = null), e.dispatchEvent(f))
            }
            return !1
        } catch (g) {
            _.H(g)
        }
    };
    _.k.sf = function(a) {
        try {
            var c = a || window.event, d = Ts(this.b, c);
            (new _.$b(c)).stopPropagation();
            d && d.o.dispatchEvent("action");
            return !1
        } catch (e) {
            _.H(e)
        }
    };
    _.k.th = function(a, c) {
        try {
            var d = Ss(this.b, a);
            d && _.M(d, "sgcp_wr", c)
        } catch (e) {
            _.H(e)
        }
    };
    _.k.uh = function(a, c, d) {
        try {
            var e = Ss(this.b, a);
            e && _.M(e, c, d)
        } catch (f) {
            _.H(f)
        }
    };
    _.k.init = function() {
        try {
            var a = _.G(_.I(), _.bk, 6) || new _.bk;
            _.F(a, 1) && _.x("gc").Ta().addCallback((0, _.t)(this.gh, this, a));
            _.u("gbar.cp.l", (0, _.t)(this.hh, this))
        } catch (c) {
            _.H(c)
        }
        return this
    };
    _.wa("cp", (new Us).init());
    var Vs = function() {
        _.y.call(this)
    };
    _.v(Vs, _.y);
    Vs.prototype.b = function(a) {
        try {
            _.p("gapi.load")("cloudsearch", function() {
                _.Xa(function() {
                    _.p("gapi.cloudsearch.installDefault")(_.A(_.F(a, 2)), _.A(_.F(a, 3)))
                })
            })
        } catch (c) {
            _.H(c)
        }
    };
    Vs.prototype.init = function() {
        try {
            var a = _.G(_.I(), ir, 19) || new ir;
            _.F(a, 1) && _.x("gc").Ta().addCallback((0, _.t)(this.b, this, a))
        } catch (c) {
            _.H(c)
        }
        return this
    };
    _.wa("cls", (new Vs).init());
    var Ws = function() {
        this.b = new _.sm
    };
    Ws.prototype.Ta = function() {
        return this.b
    };
    Ws.prototype.d = function(a) {
        try {
            _.p("gbar.pw.init")({
                signed: _.A(_.F(a, 4)),
                logRender: _.ee(_.W, 15),
                logEvent: _.ee(_.W, 16),
                logError: _.ee(_.W, 19)
            }), this.b.$a()
        } catch (c) {
            _.H(c)
        }
    };
    Ws.prototype.init = function() {
        try {
            var a = _.Dj();
            _.ta(_.sa.P(), "gc").Ta().addCallback((0, _.t)(this.d, this, a))
        } catch (c) {
            _.H(c)
        }
        return this
    };
    _.u("gbar.pw.su", function() {});
    (new Ws).init();
    var Xs = _.Ra(), Ys = _.Ej(), Zs = _.G(_.I(), _.Aj, 13) || new _.Aj, $s = new sr(Xs, Ys, null != _.F(Zs, 2) ? _.F(Zs, 2) : .001);
    _.wa("lm", $s);
    var at = function(a) {
        a = ["https://pagead2.googlesyndication.com/pagead/gen_204?id=drsl&drsl=", a].join("");
        (new window.Image(0, 0)).src = a
    }, bt = function(a) {
        for (var c = [], d = 0; d < a.length; d++)
            a[d] && c.push(a[d]);
        return c.join(";")
    }, ct = function(a, c) {
        var d = c ? c.toString(): "";
        return a ? [a, d].join(":") : ""
    };
    var dt = function(a) {
        this.d = a
    };
    dt.prototype.getName = function() {
        return this.d
    };
    var Y = function(a) {
        this.d = a || vr;
        this.b = []
    };
    _.ba(Y);
    var Z = function(a, c) {
        a.b.push(c)
    }, et = function() {
        var a = Y.P();
        a.d(a.b);
        var c = _.wf(a.b, 0, 2);
        (0, _.ma)(c, function(a) {
            try {
                a.o()
            } catch (c) {
                try {
                    at(bt([ct((35).toString(), a.getName())]))
                } catch (f) {}
            }
        });
        (0, window.setTimeout)(function() {
            var a = (0, _.oa)(c, function(a) {
                return a.w()
            });
            at(bt(a))
        }, 1E4)
    };
    var $ = function(a, c) {
        this.b = "";
        this.A = c;
        this.d = a.toString()
    };
    _.v($, dt);
    $.prototype.w = function() {
        return ct(this.getName(), this.b.toString())
    };
    $.prototype.o = function() {
        var a = this.A();
        _.n(a) && (this.b = a)
    };
    var ft = function(a) {
        return (0, _.t)(function(a) {
            this.b = a
        }, a)
    };
    Z(Y.P(), new $(25, function(a) {
        a = a || window.navigator;
        return !!a && "cookieEnabled"in a && a.cookieEnabled
    }));
    Z(Y.P(), new $(30, function(a) {
        a = a || window.document.body;
        return "borderRadius"in a.style ? "border-radius" : "WebkitBorderRadius"in a.style ? "-webkit-border-radius" : "MozBorderRadius"in a.style ? "-moz-border-radius" : ""
    }));
    Z(Y.P(), new $(34, function(a) {
        return "openDatabase"in (a || window)
    }));
    Z(Y.P(), new $(31, function(a) {
        return "applicationCache"in (a || window)
    }));
    Z(Y.P(), new $(33, function(a) {
        return "Storage"in (a || window)
    }));
    Z(Y.P(), new $(32, function(a) {
        return "postMessage"in (a || window)
    }));
    var gt = function(a, c, d, e) {
        this.k=!1;
        this.b = e || function() {};
        var f = _.n(d) ? d: "//www.gstatic.com/drasil/";
        this.A = (0, _.oa)(c, function(a) {
            return [f, a].join("")
        });
        this.d = a.toString()
    };
    _.v(gt, dt);
    gt.prototype.w = function() {
        return ct(this.getName(), this.k.toString())
    };
    gt.prototype.o = function() {
        (0, _.ma)(this.A, function(a) {
            var c = _.O("img");
            c.onload = (0, _.t)(this.handleEvent, this, !0);
            c.onerror = (0, _.t)(this.handleEvent, this, !1);
            c.src = a
        }, this)
    };
    gt.prototype.handleEvent = function(a) {
        this.k = this.k || a;
        this.b();
        return !1
    };
    Z(Y.P(), new gt(11, ["1x1.gif"]));
    Z(Y.P(), new gt(12, ["1x1.jpg"]));
    Z(Y.P(), new gt(13, ["1x1.png"]));
    Z(Y.P(), new gt(14, ["data:image/gif;base64,R0lGODdhAQABAIAAAP///////ywAAAAAAQABAAACAkQBADs=", "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEASABIAAD//gATQ3JlYXRlZCB3aXRoIEdJTVD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALLAB//Z", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB90KDhEJIUhUqJMAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAADElEQVQI12P4//8/AAX+Av7czFnnAAAAAElFTkSuQmCC"], ""));
    Z(Y.P(), new $(23, function(a, c) {
        var d = c || window, e = a || ft(this);
        "setTimeout"in d && d.setTimeout(function() {
            e(!0)
        }, 0);
        return !1
    }));
    Z(Y.P(), new $(22, function(a, c) {
        var d = c || window, e = a || ft(this);
        if ("setInterval"in d)
            var f = d.setInterval(function() {
                d.clearInterval(f);
                e(!0)
            }, 0);
        return !1
    }));
    Z(Y.P(), new $(18, function(a) {
        a = a || window;
        return !!("alert"in a)&&!!("confirm"in a)
    }));
    Z(Y.P(), new $(19, function(a) {
        return "forms"in (a || window.document)
    }));
    Z(Y.P(), new $(21, function(a) {
        return "location"in (a || window.document)
    }));
    Z(Y.P(), new $(20, function(a) {
        return "getElementById"in (a || window.document)
    }));
    Z(Y.P(), new $(17, function(a) {
        a = a || _.O("div");
        var c = a.outerHTML;
        "style"in a && (a.style.backgroundColor = "red");
        return c != a.outerHTML
    }));
    var ht = function(a, c, d) {
        this.k = d || _.p("navigator.plugins") || [];
        $.call(this, a, c)
    };
    _.v(ht, $);
    var it = function(a, c) {
        var d = _.oa(_.ob(a.k), _.ob), d = (0, _.na)(wr(d), c);
        return (0, _.oa)(d, function(a) {
            return a.enabledPlugin
        })
    }, jt = function(a, c) {
        return it(a, function(a) {
            return _.ra(a.suffixes.split(","), c)
        })
    };
    Z(Y.P(), new ht(16, function() {
        return 0 < jt(this, "pdf").length
    }));
    Z(Y.P(), new ht(15, function() {
        var a = /Shockwave Flash \d/, c = jt(this, "swf");
        return 0 < (0, _.na)(c, function(c) {
            return a.test(c.description)
        }).length
    }));
    var kt = function() {
        var a = _.p("window.top.outerHeight") || 0, c = _.p("window.devicePixelRatio") || 1, d = _.p("screen.height") || 0;
        return d * (a * c > d ? c : 1)
    };
    Z(Y.P(), new $(1, kt));
    var lt = function() {
        var a = _.p("window.top.outerWidth") || 0, c = _.p("window.devicePixelRatio") || 1, d = _.p("screen.width") || 0;
        return d * (a * c > d ? c : 1)
    };
    Z(Y.P(), new $(2, lt));
    Z(Y.P(), new $(26, function() {
        return _.p("screen.height") || 0
    }));
    Z(Y.P(), new $(27, function() {
        return _.p("screen.width") || 0
    }));
    Z(Y.P(), new $(3, function() {
        var a = mt(), c = kt();
        return 1 == a ? 0 : c / a * 25.4
    }));
    Z(Y.P(), new $(4, function() {
        var a = mt(), c = lt();
        return 1 == a ? 0 : c / a * 25.4
    }));
    Z(Y.P(), new $(28, function() {
        return _.p("window.devicePixelRatio") || 1
    }));
    var mt = function() {
        var a;
        t: {
            a = 1;
            var c = 1E3;
            do {
                var d = Math.floor((c - a) / 2 + a), e = window.matchMedia("(max-resolution:" + d.toString() + "dpi)").matches, f = window.matchMedia("(min-resolution:" + d.toString() + "dpi)").matches;
                if (f && e) {
                    a = d;
                    break t
                }
                f ? a = d + 1 : c = d - 1
            }
            while (c >= a);
            a = null
        }
        return a || 1
    };
    Z(Y.P(), new $(29, mt));
    Z(Y.P(), new $(5, function() {
        return _.p("window.top.outerHeight") || 0
    }));
    Z(Y.P(), new $(6, function() {
        return _.p("window.top.outerWidth") || 0
    }));
    Z(Y.P(), new $(7, function() {
        return Math.pow(2, _.p("screen.colorDepth") || 0)
    }));
    Z(Y.P(), new $(24, function() {
        return "ontouchstart"in window || "onmsgesturechange"in window
    }));
    var ot = function(a, c, d) {
        this.C = c;
        try {
            var e;
            (e = d) || (e = window.document.createElement("video"));
            this.k = e
        } catch (f) {}
        $.call(this, a, nt)
    };
    _.v(ot, $);
    var nt = function() {
        return "" != (this.k && this.k.canPlayType || function() {
            return ""
        }).call(this.k, this.C).replace(/^no$/, "")
    };
    Z(Y.P(), new ot(8, 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'));
    Z(Y.P(), new ot(9, 'video/ogg; codecs="theora"'));
    Z(Y.P(), new ot(10, 'video/webm; codecs="vp8, vorbis"'));
    _.u("drasil.iframe.run", function() {
        et()
    });
    _.Xa(function() {
        _.G(_.I(), hr, 23) && et()
    });
    var rt = function(a, c) {
        _.rm.call(this, a);
        this.o = new _.Lk(_.z(_.F(c, 1), !1));
        this.J = _.Jk.P();
        this.w = _.X("gb_zc", this.d);
        if (this.o.d) {
            this.k=!1;
            if (_.rk()) {
                _.U(this.d, "gb_ba");
                _.Pg(this.d, ["gb_Kc", "gb_i", "gb_Dc"]);
                this.O = _.dg(this.d, "width");
                this.ka = _.dg(this.w, "width");
                var d = this.d;
                _.U(d, "gb_Dc");
                _.T(d, "gb_ba");
                this.T = _.dg(this.d, "width");
                this.X = _.dg(this.w, "width");
                _.Qg(this.d, ["gb_Kc", "gb_i", "gb_ba"])
            }
            pt(this);
            this.J.A("hrc", this.V, this);
            d = _.X("gb_Fc", this.d);
            this.b(d, "click", this.R);
            d = _.X("gb_Hc", this.d);
            this.b(d, "click", this.W)
        }
        this.B = _.z(_.F(c, 2), !1);
        this.Q = _.z(_.F(c, 4), !1);
        this.H = null;
        this.B && (this.H = _.F(c, 3));
        if (this.B || this.Q)
            this.F(a, ["mouseover", "touchstart"], this.K), d = new _.Mg(a), this.F(d, "focusin", this.K);
        (d = _.X("gb_6b", this.d)) && _.ol(this, d, _.ml, qt)
    };
    _.v(rt, _.rm);
    var qt = function() {
        _.W(9, {
            l: "i"
        })
    };
    rt.prototype.V = function() {
        pt(this)
    };
    rt.prototype.R = function() {
        0 != this.k && (this.k=!1, pt(this, !0))
    };
    rt.prototype.W = function() {
        1 != this.k && (this.k=!0, pt(this, !0))
    };
    rt.prototype.K = function() {
        if (this.B) {
            var a = this.H;
            _.ek.P().Kd(a, void 0)
        }
        this.Q && this.d.setAttribute("activated", "1")
    };
    var pt = function(a, c) {
        var d = c && _.rk();
        0 == a.o.k.o ? d ? (_.Pg(a.d, ["gb_Jc", "gb_da"]), _.wk(a.d), a.F(a.d, _.Zb, a.S), a.A(!0), (0, window.setTimeout)((0, _.t)(a.o.b, a.o, a.d, a.k), 0), (0, window.setTimeout)((0, _.t)(a.A, a, !1), 0)) : (a.o.b(a.d, a.k), _.rk() && a.A(!1)) : (_.U(a.d, "gb_Jc"), a.o.b(a.d, a.k), st(a.d, ""), st(a.w, ""), a.J.Ha(!0))
    };
    rt.prototype.A = function(a) {
        a = this.k?!a : a;
        st(this.d, a ? this.O : this.T);
        st(this.w, a ? this.ka : this.X)
    };
    rt.prototype.S = function() {
        _.U(this.d, "gb_da")
    };
    var st = function(a, c) {
        a.style.minWidth = a.style.maxWidth = c
    };
    _.Xa(function() {
        var a = _.G(_.I(), _.ak, 16) || new _.ak, c = _.X("gb_5");
        if (a && c && (new rt(c, a), _.F(a, 4))) {
            var d = function() {
                var c = _.F(a, 5);
                _.hk(_.ek.P(), c, void 0)
            };
            "1" == c.getAttribute("activated") ? d() : (_.sc(c, ["mouseover", "touchstart"], d), c = new _.Mg(c), _.sc(c, "focusin", d))
        }
    });
    var tt = null;
    var ut = function(a) {
        _.rm.call(this, a);
        this.o = _.X("gb_5", this.d);
        this.k = {};
        this.k.gray = this.k["default"] = {
            add: [],
            remove: ["gb_Nc", "gb_k", "gb_l"]
        };
        this.k.white = {
            add: ["gb_Nc"],
            remove: ["gb_k", "gb_l"]
        };
        this.k.dark = {
            add: ["gb_l"],
            remove: ["gb_Nc", "gb_k"]
        };
        this.k.light = {
            add: ["gb_k"],
            remove: ["gb_Nc", "gb_l"]
        };
        this.w = void 0;
        _.u("gbar.tst", (0, _.t)(this.A, this));
        _.u("gbar.tsl", (0, _.t)(this.Q, this));
        _.u("gbar.setContinueCb", (0, _.t)(this.B, this));
        _.u("gbar.pc", (0, _.t)(this.K, this));
        a = _.G(_.I(), gr, 27) || new gr;
        if (_.F(a,
        1)) {
            var c;
            if (null == tt) {
                c = _.Hf();
                var d = c.b, e = c.b.createElement("div");
                e.style.backgroundColor = "rgb(1, 2, 3)";
                c.appendChild(d.body, e);
                d = _.dg(e, "backgroundColor");
                d = d.replace(/ /g, "");
                d = "rgb(0,0,0)" === d ? "black" : "rgb(255,255,255)" === d ? "white" : "none";
                c.removeNode(e);
                tt = d
            }
            c = tt;
            "none" != c && (_.W(54, {
                m: c
            }), _.F(a, 2) && (_.Pg(this.d, ["gb_b", "gb_B"]), this.o && _.Pg(this.o, ["gb_b", "gb_B"]), this.A("black" == c ? "dark" : "light")))
        }
    };
    _.v(ut, _.rm);
    ut.prototype.A = function(a) {
        a = this.k[a];
        _.Qg(this.d, a.remove);
        _.Pg(this.d, a.add);
        this.o && (_.Qg(this.o, a.remove), _.Pg(this.o, a.add))
    };
    ut.prototype.Q = function(a, c, d, e) {
        var f = _.X("gb_Oa");
        f && (c && (f.title = c), c = _.O("SPAN", "gb_Ra"), c.style.backgroundImage = "url(" + a + ")", d && (c.style.width = d + "px"), e && (c.style.height = e + "px"), d && e ? c.style.backgroundSize = d + "px " + e + "px" : (a = _.O("IMG", {
            "class": "gb_Sa",
            src: a
        }), c.appendChild(a)), _.tf(f), f.appendChild(c))
    };
    ut.prototype.B = function(a) {
        this.w = a
    };
    ut.prototype.K = function(a) {
        var c = this.w&&!a.href.match(/.*\/accounts\/ClearSID[?]/) && (0, window.encodeURIComponent)(this.w());
        c && _.Zl(a, a.href.replace(/([?&]continue=)[^&]*/, "$1" + c))
    };
    _.Xa(function() {
        var a = window.document.getElementById("gb");
        a && new ut(a)
    });
} catch (e) {
    _._DumpException(e)
}
})(this.gbar_);
// Google Inc.

