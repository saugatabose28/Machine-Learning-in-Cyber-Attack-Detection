(function() {
    var g, aa = aa || {}, l = this;
    function n(a) {
        return void 0 !== a
    }
    function p(a, b, c) {
        a = a.split(".");
        c = c || l;
        a[0]in c ||!c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());)
            !a.length && n(b) ? c[d] = b : c[d] ? c = c[d] : c = c[d] = {}
    }
    function r(a, b) {
        for (var c = a.split("."), d = b || l, e; e = c.shift();)
            if (null != d[e])
                d = d[e];
            else 
                return null;
        return d
    }
    function s() {}
    function ba(a) {
        a.getInstance = function() {
            return a.X ? a.X : a.X = new a
        }
    }
    function ca(a) {
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
}
function t(a) {
    return "array" == ca(a)
}
function da(a) {
    var b = ca(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}
function u(a) {
    return "string" == typeof a
}
function fa(a) {
    return "number" == typeof a
}
function ga(a) {
    return "function" == ca(a)
}
function ha(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}
function ia(a) {
    return a[ja] || (a[ja]=++ka)
}
var ja = "closure_uid_" + (1E9 * Math.random()>>>0), ka = 0;
function la(a, b, c) {
    return a.call.apply(a.bind, arguments)
}
function ma(a, b, c) {
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
function v(a, b, c) {
    v = Function.prototype.bind&&-1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
    return v.apply(null, arguments)
}
function na(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
    }
}
var w = Date.now || function() {
    return + new Date
};
function x(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.L = b.prototype;
    a.prototype = new c;
    a.base = function(a, c, f) {
        return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
    }
}
Function.prototype.bind = Function.prototype.bind || function(a, b) {
    if (1 < arguments.length) {
        var c = Array.prototype.slice.call(arguments, 1);
        c.unshift(this, a);
        return v.apply(null, c)
    }
    return v(this, a)
};
function oa(a) {
    if (Error.captureStackTrace)
        Error.captureStackTrace(this, oa);
    else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
}
x(oa, Error);
oa.prototype.name = "CustomError";
var pa;
var qa = String.prototype.trim ? function(a) {
    return a.trim()
}
: function(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};
function ra(a) {
    return decodeURIComponent(a.replace(/\+/g, " "))
}
function sa(a) {
    var b = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"'
    }, c;
    c = l.document.createElement("div");
    return a.replace(ta, function(a, e) {
        var f = b[a];
        if (f)
            return f;
        if ("#" == e.charAt(0)) {
            var h = Number("0" + e.substr(1));
            isNaN(h) || (f = String.fromCharCode(h))
        }
        f || (c.innerHTML = a + " ", f = c.firstChild.nodeValue.slice(0, - 1));
        return b[a] = f
    })
}
function ua(a) {
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
}
var ta = /&([^;\s<&]+);?/g;
function y(a, b) {
    return - 1 != a.indexOf(b)
}
function va(a, b) {
    for (var c = 0, d = qa(String(a)).split("."), e = qa(String(b)).split("."), f = Math.max(d.length, e.length), h = 0; 0 == c && h < f; h++) {
        var k = d[h] || "", m = e[h] || "", q = RegExp("(\\d*)(\\D*)", "g"), U = RegExp("(\\d*)(\\D*)", "g");
        do {
            var ea = q.exec(k) || ["", "", ""], Rc = U.exec(m) || ["", "", ""];
            if (0 == ea[0].length && 0 == Rc[0].length)
                break;
            c = wa(0 == ea[1].length ? 0 : parseInt(ea[1], 10), 0 == Rc[1].length ? 0 : parseInt(Rc[1], 10)) || wa(0 == ea[2].length, 0 == Rc[2].length) || wa(ea[2], Rc[2])
        }
        while (0 == c)
        }
    return c
}
function wa(a, b) {
    return a < b?-1 : a > b ? 1 : 0
}
function xa(a) {
    for (var b = 0, c = 0; c < a.length; ++c)
        b = 31 * b + a.charCodeAt(c), b%=4294967296;
    return b
}
function ya() {
    return "transform".replace(/\-([a-z])/g, function(a, b) {
        return b.toUpperCase()
    })
}
function za(a) {
    var b = u(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"): "\\s";
    return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
        return b + e.toUpperCase()
    })
};
function Aa() {};
var z = Array.prototype, Ba = z.indexOf ? function(a, b, c) {
    return z.indexOf.call(a, b, c)
}
: function(a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (u(a))
        return u(b) && 1 == b.length ? a.indexOf(b, c) : - 1;
    for (; c < a.length; c++)
        if (c in a && a[c] === b)
            return c;
    return - 1
}, A = z.forEach ? function(a, b, c) {
    z.forEach.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++)
        f in e && b.call(c, e[f], f, a)
}, Ca = z.filter ? function(a, b, c) {
    return z.filter.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = [], f = 0, h = u(a) ?
    a.split("") : a, k = 0; k < d; k++)
        if (k in h) {
            var m = h[k];
            b.call(c, m, k, a) && (e[f++] = m)
        }
    return e
}, B = z.map ? function(a, b, c) {
    return z.map.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = Array(d), f = u(a) ? a.split("") : a, h = 0; h < d; h++)
        h in f && (e[h] = b.call(c, f[h], h, a));
    return e
}, Da = z.some ? function(a, b, c) {
    return z.some.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && b.call(c, e[f], f, a))
            return !0;
    return !1
}, Ea = z.every ? function(a, b, c) {
    return z.every.call(a, b, c)
}
: function(a, b, c) {
    for (var d =
    a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e&&!b.call(c, e[f], f, a))
            return !1;
    return !0
};
function Fa(a, b, c) {
    b = Ga(a, b, c);
    return 0 > b ? null : u(a) ? a.charAt(b) : a[b]
}
function Ga(a, b, c) {
    for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && b.call(c, e[f], f, a))
            return f;
    return - 1
}
function Ha(a, b) {
    return 0 <= Ba(a, b)
}
function Ia(a) {
    return 0 == a.length
}
function Ja() {
    var a = Ka;
    if (!t(a))
        for (var b = a.length - 1; 0 <= b; b--)
            delete a[b];
    a.length = 0
}
function La(a, b) {
    Ha(a, b) || a.push(b)
}
function Ma(a, b) {
    var c = Ba(a, b), d;
    (d = 0 <= c) && z.splice.call(a, c, 1);
    return d
}
function Na(a, b) {
    var c = Ga(a, b, void 0);
    0 <= c && z.splice.call(a, c, 1)
}
function Oa(a) {
    return z.concat.apply(z, arguments)
}
function Pa(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)
            c[d] = a[d];
        return c
    }
    return []
}
function Qa(a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (da(d)) {
            var e = a.length || 0, f = d.length || 0;
            a.length = e + f;
            for (var h = 0; h < f; h++)
                a[e + h] = d[h]
        } else 
            a.push(d)
    }
}
function Ra(a, b, c, d) {
    return z.splice.apply(a, Sa(arguments, 1))
}
function Sa(a, b, c) {
    return 2 >= arguments.length ? z.slice.call(a, b) : z.slice.call(a, b, c)
}
function Ta(a, b, c) {
    if (!da(a) ||!da(b) || a.length != b.length)
        return !1;
    var d = a.length;
    c = c || Ua;
    for (var e = 0; e < d; e++)
        if (!c(a[e], b[e]))
            return !1;
    return !0
}
function Va(a, b) {
    return a > b ? 1 : a < b?-1 : 0
}
function Ua(a, b) {
    return a === b
};
function Wa(a, b) {
    for (var c in a)
        b.call(void 0, a[c], c, a)
}
function Xa(a, b, c) {
    var d = {}, e;
    for (e in a)
        b.call(c, a[e], e, a) && (d[e] = a[e]);
    return d
}
function Ya(a) {
    var b = 0, c;
    for (c in a)
        b++;
    return b
}
function Za(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = a[d];
    return b
}
function $a(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = d;
    return b
}
function ab(a) {
    var b = bb, c;
    for (c in b)
        if (a.call(void 0, b[c], c, b))
            return c
}
function cb(a) {
    for (var b in a)
        return !1;
    return !0
}
function db(a, b) {
    if (b in a)
        throw Error('The object already contains the key "' + b + '"');
    a[b]=!0
}
function eb(a) {
    var b = {}, c;
    for (c in a)
        b[c] = a[c];
    return b
}
function fb(a) {
    var b = ca(a);
    if ("object" == b || "array" == b) {
        if (a.clone)
            return a.clone();
        var b = "array" == b ? []: {}, c;
        for (c in a)
            b[c] = fb(a[c]);
        return b
    }
    return a
}
function gb(a) {
    var b = {}, c;
    for (c in a)
        b[a[c]] = c;
    return b
}
var hb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function ib(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)
            a[c] = d[c];
        for (var f = 0; f < hb.length; f++)
            c = hb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
}
function jb(a) {
    var b = arguments.length;
    if (1 == b && t(arguments[0]))
        return jb.apply(null, arguments[0]);
    for (var c = {}, d = 0; d < b; d++)
        c[arguments[d]]=!0;
    return c
};
function kb(a, b, c) {
    a && (a.dataset ? a.dataset[lb(b)] = c : a.setAttribute("data-" + b, c))
}
function C(a, b) {
    return a ? a.dataset ? a.dataset[lb(b)] : a.getAttribute("data-" + b) : null
}
var mb = {};
function lb(a) {
    return mb[a] || (mb[a] = String(a).replace(/\-([a-z])/g, function(a, c) {
        return c.toUpperCase()
    }))
};
function D() {
    this.Z = this.Z;
    this.K = this.K
}
D.prototype.Z=!1;
D.prototype.H = function() {
    return this.Z
};
D.prototype.dispose = function() {
    this.Z || (this.Z=!0, this.F())
};
function nb(a, b) {
    a.K || (a.K = []);
    a.K.push(n(void 0) ? v(b, void 0) : b)
}
D.prototype.F = function() {
    if (this.K)
        for (; this.K.length;)
            this.K.shift()()
};
function E(a) {
    a && "function" == typeof a.dispose && a.dispose()
}
function ob(a) {
    for (var b = 0, c = arguments.length; b < c; ++b) {
        var d = arguments[b];
        da(d) ? ob.apply(null, d) : E(d)
    }
};
function F() {
    D.call(this);
    this.g = [];
    this.fa = {}
}
x(F, D);
g = F.prototype;
g.Ic = 1;
g.Gb = 0;
g.subscribe = function(a, b, c) {
    var d = this.fa[a];
    d || (d = this.fa[a] = []);
    var e = this.Ic;
    this.g[e] = a;
    this.g[e + 1] = b;
    this.g[e + 2] = c;
    this.Ic = e + 3;
    d.push(e);
    return e
};
g.unsubscribe = function(a, b, c) {
    if (a = this.fa[a]) {
        var d = this.g;
        if (a = Fa(a, function(a) {
            return d[a + 1] == b && d[a + 2] == c
        }))
            return this.ma(a)
    }
    return !1
};
g.ma = function(a) {
    if (0 != this.Gb)
        return this.j || (this.j = []), this.j.push(a), !1;
    var b = this.g[a];
    if (b) {
        var c = this.fa[b];
        c && Ma(c, a);
        delete this.g[a];
        delete this.g[a + 1];
        delete this.g[a + 2]
    }
    return !!b
};
g.publish = function(a, b) {
    var c = this.fa[a];
    if (c) {
        this.Gb++;
        for (var d = Sa(arguments, 1), e = 0, f = c.length; e < f; e++) {
            var h = c[e];
            this.g[h + 1].apply(this.g[h + 2], d)
        }
        this.Gb--;
        if (this.j && 0 == this.Gb)
            for (; c = this.j.pop();)
                this.ma(c);
        return 0 != e
    }
    return !1
};
g.clear = function(a) {
    if (a) {
        var b = this.fa[a];
        b && (A(b, this.ma, this), delete this.fa[a])
    } else 
        this.g.length = 0, this.fa = {}
};
g.Na = function(a) {
    if (a) {
        var b = this.fa[a];
        return b ? b.length : 0
    }
    a = 0;
    for (b in this.fa)
        a += this.Na(b);
    return a
};
g.F = function() {
    F.L.F.call(this);
    delete this.g;
    delete this.fa;
    delete this.j
};
var pb = window.yt && window.yt.config_ || {};
p("yt.config_", pb, void 0);
p("yt.tokens_", window.yt && window.yt.tokens_ || {}, void 0);
var qb = window.yt && window.yt.msgs_ || {};
p("yt.msgs_", qb, void 0);
function rb(a) {
    sb(pb, arguments)
}
function G(a, b) {
    return a in pb ? pb[a] : b
}
function tb() {
    return G("XSRF_TOKEN")
}
function H(a, b) {
    ga(a) && (a = ub(a));
    return window.setTimeout(a, b)
}
function vb(a, b) {
    ga(a) && (a = ub(a));
    window.setInterval(a, b)
}
function I(a) {
    window.clearTimeout(a)
}
function ub(a) {
    return a && window.yterr ? function() {
        try {
            return a.apply(this, arguments)
        } catch (b) {
            throw wb(b), b;
        }
    } : a
}
function wb(a, b) {
    var c = r("yt.www.errors.log");
    c ? c(a, b) : (c = G("ERRORS") || [], c.push([a, b]), rb("ERRORS", c))
}
function xb() {
    var a = {}, b = "FLASH_UPGRADE"in qb ? qb.FLASH_UPGRADE: 'You need to upgrade your Adobe Flash Player to watchthis video. <br> <a href="http://get.adobe.com/flashplayer/">Download it from Adobe.</a>';
    if (b)
        for (var c in a)
            b = b.replace(new RegExp("\\$" + c, "gi"), function() {
                return a[c]
            });
    return b
}
function sb(a, b) {
    if (1 < b.length) {
        var c = b[0];
        a[c] = b[1]
    } else {
        var d = b[0];
        for (c in d)
            a[c] = d[c]
    }
}
var yb = "Microsoft Internet Explorer" == navigator.appName;
var zb = r("yt.pubsub.instance_") || new F;
F.prototype.subscribe = F.prototype.subscribe;
F.prototype.unsubscribeByKey = F.prototype.ma;
F.prototype.publish = F.prototype.publish;
F.prototype.clear = F.prototype.clear;
p("yt.pubsub.instance_", zb, void 0);
var Ab = r("yt.pubsub.subscribedKeys_") || {};
p("yt.pubsub.subscribedKeys_", Ab, void 0);
var Bb = r("yt.pubsub.topicToKeys_") || {};
p("yt.pubsub.topicToKeys_", Bb, void 0);
var Cb = r("yt.pubsub.isSynchronous_") || {};
p("yt.pubsub.isSynchronous_", Cb, void 0);
var Db = r("yt.pubsub.skipSubId_") || null;
p("yt.pubsub.skipSubId_", Db, void 0);
function J(a, b, c) {
    var d = Eb();
    if (d) {
        var e = d.subscribe(a, function() {
            if (!Db || Db != e) {
                var d = arguments, h = function() {
                    Ab[e] && b.apply(c || window, d)
                };
                try {
                    Cb[a] ? h() : H(h, 0)
                } catch (k) {
                    wb(k)
                }
            }
        }, c);
        Ab[e]=!0;
        Bb[a] || (Bb[a] = []);
        Bb[a].push(e);
        return e
    }
    return 0
}
function Fb(a) {
    var b = Eb();
    b && ("number" == typeof a ? a = [a] : "string" == typeof a && (a = [parseInt(a, 10)]), A(a, function(a) {
        b.unsubscribeByKey(a);
        delete Ab[a]
    }))
}
function K(a, b) {
    var c = Eb();
    return c ? c.publish.apply(c, arguments) : !1
}
function Gb(a, b) {
    Cb[a]=!0;
    var c = Eb();
    c && c.publish.apply(c, arguments);
    Cb[a]=!1
}
function Hb(a) {
    Bb[a] && (a = Bb[a], A(a, function(a) {
        Ab[a] && delete Ab[a]
    }), a.length = 0)
}
function Ib(a) {
    var b = Eb();
    if (b)
        if (b.clear(a), a)
            Hb(a);
        else 
            for (var c in Bb)
                Hb(c)
}
function Eb() {
    return r("yt.pubsub.instance_")
};
function Jb(a, b) {
    if (window.spf) {
        var c = "";
        if (a) {
            var d = a.indexOf("jsbin/"), e = a.lastIndexOf(".js"), f = d + 6;
            - 1 < d&&-1 < e && e > f && (c = a.substring(f, e), c = c.replace(Kb, ""), c = c.replace(Lb, ""), c = c.replace("debug-", ""), c = c.replace("tracing-", ""))
        }
        spf.script.load(a, c, b)
    } else 
        Mb(a, b)
}
function Mb(a, b) {
    var c = Nb(a), d = document.getElementById(c), e = d && C(d, "loaded"), f = d&&!e;
    if (e)
        b && b();
    else {
        if (b) {
            var e = J(c, b), h = "" + ia(b);
            Ob[h] = e
        }
        f || (d = Pb(a, c, function() {
            C(d, "loaded") || (kb(d, "loaded", "true"), K(c), H(na(Ib, c), 0))
        }))
    }
}
function Pb(a, b, c) {
    var d = document.createElement("script");
    d.id = b;
    d.onload = function() {
        c && setTimeout(c, 0)
    };
    d.onreadystatechange = function() {
        switch (d.readyState) {
        case "loaded":
        case "complete":
            d.onload()
        }
    };
    d.src = a;
    a = document.getElementsByTagName("head")[0] || document.body;
    a.insertBefore(d, a.firstChild);
    return d
}
function Nb(a) {
    var b = document.createElement("a");
    b.href = a;
    a = b.href.replace(/^[a-zA-Z]+:\/\//, "//");
    return "js-" + xa(a)
}
var Kb = /\.vflset|-vfl[a-zA-Z0-9_+=-]+/, Lb = /-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/, Ob = {};
var Qb = null;
function Rb() {
    var a = G("BG_I", null), b = G("BG_IU", null), c = G("BG_P");
    b ? Jb(b, function() {
        Qb = new botguard.bg(c)
    }) : a && (eval(a), Qb = new botguard.bg(c))
}
function Sb() {
    return null != Qb
}
function Tb() {
    return Qb ? Qb.invoke() : null
};
function Ub(a) {
    if (a.classList)
        return a.classList;
    a = a.className;
    return u(a) && a.match(/\S+/g) || []
}
function Vb(a, b) {
    return a.classList ? a.classList.contains(b) : Ha(Ub(a), b)
}
function Wb(a, b) {
    a.classList ? a.classList.add(b) : Vb(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
}
function Xb(a, b) {
    a.classList ? a.classList.remove(b) : Vb(a, b) && (a.className = Ca(Ub(a), function(a) {
        return a != b
    }).join(" "))
}
function Yb(a, b, c) {
    c ? Wb(a, b) : Xb(a, b)
};
function L(a, b) {
    this.x = n(a) ? a : 0;
    this.y = n(b) ? b : 0
}
L.prototype.clone = function() {
    return new L(this.x, this.y)
};
L.prototype.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
L.prototype.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
function Zb(a, b) {
    this.width = a;
    this.height = b
}
Zb.prototype.clone = function() {
    return new Zb(this.width, this.height)
};
Zb.prototype.isEmpty = function() {
    return !(this.width * this.height)
};
Zb.prototype.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
Zb.prototype.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var M;
t: {
    var $b = l.navigator;
    if ($b) {
        var ac = $b.userAgent;
        if (ac) {
            M = ac;
            break t
        }
    }
    M = ""
};
var bc = y(M, "Opera") || y(M, "OPR"), N = y(M, "Trident") || y(M, "MSIE"), cc = y(M, "Gecko")&&!y(M.toLowerCase(), "webkit")&&!(y(M, "Trident") || y(M, "MSIE")), dc = y(M.toLowerCase(), "webkit"), ec = y(M, "Macintosh"), fc = y(M, "Windows"), gc = l.navigator || null, hc=!!gc && y(gc.appVersion || "", "X11");
function ic() {
    var a = l.document;
    return a ? a.documentMode : void 0
}
var jc = function() {
    var a = "", b;
    if (bc && l.opera)
        return a = l.opera.version, ga(a) ? a() : a;
    cc ? b = /rv\:([^\);]+)(\)|;)/ : N ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : dc && (b = /WebKit\/(\S+)/);
    b && (a = (a = b.exec(M)) ? a[1] : "");
    return N && (b = ic(), b > parseFloat(a)) ? String(b) : a
}(), kc = {};
function lc(a) {
    return kc[a] || (kc[a] = 0 <= va(jc, a))
}
function mc(a) {
    return N && nc >= a
}
var oc = l.document, nc = oc && N ? ic() || ("CSS1Compat" == oc.compatMode ? parseInt(jc, 10) : 5): void 0;
!cc&&!N || N && mc(9) || cc && lc("1.9.1");
N && lc("9");
function pc(a) {
    return a ? new qc(rc(a)) : pa || (pa = new qc)
}
function sc(a) {
    return u(a) ? document.getElementById(a) : a
}
function tc(a) {
    var b = document;
    return u(a) ? b.getElementById(a) : a
}
function uc(a) {
    var b = document;
    return b.querySelectorAll && b.querySelector ? b.querySelectorAll("." + a) : vc(a, void 0)
}
function vc(a, b) {
    var c, d, e, f;
    c = document;
    c = b || c;
    if (c.querySelectorAll && c.querySelector && a)
        return c.querySelectorAll("" + (a ? "." + a : ""));
    if (a && c.getElementsByClassName) {
        var h = c.getElementsByClassName(a);
        return h
    }
    h = c.getElementsByTagName("*");
    if (a) {
        f = {};
        for (d = e = 0; c = h[d]; d++) {
            var k = c.className;
            "function" == typeof k.split && Ha(k.split(/\s+/), a) && (f[e++] = c)
        }
        f.length = e;
        return f
    }
    return h
}
function wc(a) {
    var b=!dc && xc(a) ? a.documentElement : a.body || a.documentElement;
    a = a.parentWindow || a.defaultView;
    return N && lc("10") && a.pageYOffset != b.scrollTop ? new L(b.scrollLeft, b.scrollTop) : new L(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
}
function xc(a) {
    return "CSS1Compat" == a.compatMode
}
function yc(a) {
    if (!a)
        return null;
    if (a.firstChild)
        return a.firstChild;
    for (; a&&!a.nextSibling;)
        a = a.parentNode;
    return a ? a.nextSibling : null
}
function zc(a) {
    if (!a)
        return null;
    if (!a.previousSibling)
        return a.parentNode;
    for (a = a.previousSibling; a && a.lastChild;)
        a = a.lastChild;
    return a
}
function rc(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function Ac(a) {
    var b = Bc.Pe;
    return b ? Cc(a, function(a) {
        return !b || u(a.className) && Ha(a.className.split(/\s+/), b)
    }, !0, void 0) : null
}
function Cc(a, b, c, d) {
    c || (a = a.parentNode);
    c = null == d;
    for (var e = 0; a && (c || e <= d);) {
        if (b(a))
            return a;
        a = a.parentNode;
        e++
    }
    return null
}
function qc(a) {
    this.g = a || l.document || document
}
qc.prototype.createElement = function(a) {
    return this.g.createElement(a)
};
qc.prototype.appendChild = function(a, b) {
    a.appendChild(b)
};
qc.prototype.contains = function(a, b) {
    if (a.contains && 1 == b.nodeType)
        return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
        return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;)
        b = b.parentNode;
    return b == a
};
var Dc = dc ? "webkit": cc ? "moz": N ? "ms": bc ? "o": "", Ec = r("yt.dom.getNextId_");
if (!Ec) {
    Ec = function() {
        return ++Fc
    };
    p("yt.dom.getNextId_", Ec, void 0);
    var Fc = 0
}
function Gc() {
    var a = document, b;
    Da(["fullscreenElement", "fullScreenElement"], function(c) {
        c in a ? b = a[c] : (c = Dc + c.charAt(0).toUpperCase() + c.substr(1), b = c in a ? a[c] : void 0);
        return !!b
    });
    return b
};
function Hc(a) {
    if (a = a || window.event) {
        for (var b in a)
            b in Ic || (this[b] = a[b]);
        this.Pb = a;
        (b = a.target || a.srcElement) && 3 == b.nodeType && (b = b.parentNode);
        this.target = b;
        if (b = a.relatedTarget)
            try {
                b = b.nodeName ? b : null
        } catch (c) {
            b = null
        } else 
            "mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
        this.relatedTarget = b;
        this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
        this.keyCode = a.keyCode ? a.keyCode : a.which;
        this.charCode = a.charCode || ("keypress" ==
        this.type ? this.keyCode : 0);
        this.altKey = a.altKey;
        this.ctrlKey = a.ctrlKey;
        this.shiftKey = a.shiftKey;
        "MozMousePixelScroll" == this.type ? (this.wheelDeltaX = a.axis == a.HORIZONTAL_AXIS ? a.detail : 0, this.wheelDeltaY = a.axis == a.HORIZONTAL_AXIS ? 0 : a.detail) : window.opera ? (this.wheelDeltaX = 0, this.wheelDeltaY = a.detail) : 0 == a.wheelDelta%120 ? "WebkitTransform"in document.documentElement.style ? window.chrome && 0 == navigator.platform.indexOf("Mac") ? (this.wheelDeltaX = a.wheelDeltaX/-30, this.wheelDeltaY = a.wheelDeltaY/-30) : (this.wheelDeltaX =
        a.wheelDeltaX/-1.2, this.wheelDeltaY = a.wheelDeltaY/-1.2) : (this.wheelDeltaX = 0, this.wheelDeltaY = a.wheelDelta/-1.6) : (this.wheelDeltaX = a.wheelDeltaX/-3, this.wheelDeltaY = a.wheelDeltaY/-3)
    }
}
g = Hc.prototype;
g.Pb = null;
g.type = "";
g.target = null;
g.relatedTarget = null;
g.currentTarget = null;
g.data = null;
g.source = null;
g.state = null;
g.keyCode = 0;
g.charCode = 0;
g.altKey=!1;
g.ctrlKey=!1;
g.shiftKey=!1;
g.clientX = 0;
g.clientY = 0;
g.wheelDeltaX = 0;
g.wheelDeltaY = 0;
g.preventDefault = function() {
    this.Pb.returnValue=!1;
    this.Pb.preventDefault && this.Pb.preventDefault()
};
var Ic = {
    stopImmediatePropagation: 1,
    stopPropagation: 1,
    preventMouseEvent: 1,
    preventManipulation: 1,
    preventDefault: 1,
    layerX: 1,
    layerY: 1,
    scale: 1,
    rotation: 1
};
var bb = r("yt.events.listeners_") || {};
p("yt.events.listeners_", bb, void 0);
var Jc = r("yt.events.counter_") || {
    count: 0
};
p("yt.events.counter_", Jc, void 0);
function Kc(a, b, c, d) {
    return ab(function(e) {
        return e[0] == a && e[1] == b && e[2] == c && e[4]==!!d
    })
}
function O(a, b, c, d) {
    if (!a ||!a.addEventListener&&!a.attachEvent)
        return "";
    d=!!d;
    var e = Kc(a, b, c, d);
    if (e)
        return e;
    var e=++Jc.count + "", f=!("mouseenter" != b && "mouseleave" != b ||!a.addEventListener || "onmouseenter"in document), h;
    h = f ? function(d) {
        d = new Hc(d);
        if (!Cc(d.relatedTarget, function(b) {
            return b == a
        }, !0))
            return d.currentTarget = a, d.type = b, c.call(a, d)
    } : function(b) {
        b = new Hc(b);
        b.currentTarget = a;
        return c.call(a, b)
    };
    h = ub(h);
    bb[e] = [a, b, c, h, d];
    a.addEventListener ? "mouseenter" == b && f ? a.addEventListener("mouseover",
    h, d) : "mouseleave" == b && f ? a.addEventListener("mouseout", h, d) : "mousewheel" == b && "MozBoxSizing"in document.documentElement.style ? a.addEventListener("MozMousePixelScroll", h, d) : a.addEventListener(b, h, d) : a.attachEvent("on" + b, h);
    return e
}
function Lc(a) {
    a && ("string" == typeof a && (a = [a]), A(a, function(a) {
        if (a in bb) {
            var c = bb[a], d = c[0], e = c[1], f = c[3], c = c[4];
            d.removeEventListener ? d.removeEventListener(e, f, c) : d.detachEvent && d.detachEvent("on" + e, f);
            delete bb[a]
        }
    }))
};
function Mc(a) {
    this.g = a
}
var Nc = /\s*;\s*/;
g = Mc.prototype;
g.set = function(a, b, c, d, e, f) {
    if (/[;=\s]/.test(a))
        throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b))
        throw Error('Invalid cookie value "' + b + '"');
    n(c) || (c =- 1);
    e = e ? ";domain=" + e : "";
    d = d ? ";path=" + d : "";
    f = f ? ";secure" : "";
    c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(w() + 1E3 * c)).toUTCString();
    this.g.cookie = a + "=" + b + e + d + c + f
};
g.get = function(a, b) {
    for (var c = a + "=", d = (this.g.cookie || "").split(Nc), e = 0, f; f = d[e]; e++) {
        if (0 == f.lastIndexOf(c, 0))
            return f.substr(c.length);
        if (f == a)
            return ""
    }
    return b
};
g.remove = function(a, b, c) {
    var d = n(this.get(a));
    this.set(a, "", 0, b, c);
    return d
};
g.ta = function() {
    return Oc(this).keys
};
g.ra = function() {
    return Oc(this).values
};
g.isEmpty = function() {
    return !this.g.cookie
};
g.Na = function() {
    return this.g.cookie ? (this.g.cookie || "").split(Nc).length : 0
};
g.clear = function() {
    for (var a = Oc(this).keys, b = a.length - 1; 0 <= b; b--)
        this.remove(a[b])
};
function Oc(a) {
    a = (a.g.cookie || "").split(Nc);
    for (var b = [], c = [], d, e, f = 0; e = a[f]; f++)
        d = e.indexOf("="), - 1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    return {
        keys: b,
        values: c
    }
}
var Pc = new Mc(document);
Pc.j = 3950;
function Qc(a, b, c) {
    Pc.set("" + a, b, c, "/", "youtube.com")
}
function Sc(a, b) {
    return Pc.get("" + a, b)
};
function Tc(a, b) {
    a=!!a;
    p("_lactCookie", a, window);
    if (null == r("_lact", window)) {
        if (a && b) {
            var c = Sc("ACTIVITY", "-1");
            p("_lact", parseInt(c, 10), window)
        } else 
            p("_lact", - 1, window), Uc();
        O(document, "keypress", Uc);
        O(document, "mousedown", Uc);
        O(document, "mouseup", Uc)
    }
}
function Uc() {
    var a = r("_lact", window);
    null == a && (Tc(), a = r("_lact", window));
    var b = w();
    p("_lact", b, window);
    r("_lactCookie", window) && 1E3 <= b - a && Qc("ACTIVITY", "" + b)
}
function Vc() {
    var a = r("_lact", window);
    return null == a?-1 : Math.max(w() - a, 0)
};
var Wc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
function Xc(a) {
    if (Yc) {
        Yc=!1;
        var b = l.location;
        if (b) {
            var c = b.href;
            if (c && (c = Zc(c)) && c != b.hostname)
                throw Yc=!0, Error();
        }
    }
    return a.match(Wc)
}
var Yc = dc;
function Zc(a) {
    return (a = Xc(a)[3] || null) ? decodeURI(a) : a
}
function $c(a) {
    if (a[1]) {
        var b = a[0], c = b.indexOf("#");
        0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
        c = b.indexOf("?");
        0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0)
    }
    return a.join("")
}
function ad(a, b, c) {
    if (t(b))
        for (var d = 0; d < b.length; d++)
            ad(a, String(b[d]), c);
    else 
        null != b && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
}
function bd(a, b, c) {
    Math.max(b.length - (c || 0), 0);
    for (c = c || 0; c < b.length; c += 2)
        ad(b[c], b[c + 1], a);
    return a
}
function cd(a, b) {
    for (var c in b)
        ad(c, b[c], a);
    return a
}
function dd(a) {
    a = cd([], a);
    a[0] = "";
    return a.join("")
}
function ed(a, b) {
    return $c(2 == arguments.length ? bd([a], arguments[1], 0) : bd([a], arguments, 1))
}
function fd(a, b) {
    return $c(cd([a], b))
};
function gd(a) {
    "?" == a.charAt(0) && (a = a.substr(1));
    a = a.split("&");
    for (var b = {}, c = 0, d = a.length; c < d; c++) {
        var e = a[c].split("=");
        if (1 == e.length && e[0] || 2 == e.length) {
            var f = ra(e[0] || ""), e = ra(e[1] || "");
            f in b ? t(b[f]) ? Qa(b[f], e) : b[f] = [b[f], e] : b[f] = e
        }
    }
    return b
}
var hd = Zc;
function id(a, b) {
    var c = a.split("#", 2);
    a = c[0];
    var c = 1 < c.length ? "#" + c[1]: "", d = a.split("?", 2);
    a = d[0];
    var d = gd(d[1] || ""), e;
    for (e in b)
        d[e] = b[e];
    return fd(a, d) + c
}
function jd(a) {
    a = hd(a);
    a = null === a ? null : a.split(".").reverse();
    return (null === a?!1 : "com" == a[0] && a[1].match(/^youtube(?:-nocookie)?$/)?!0 : !1) || (null === a?!1 : "google" == a[1]?!0 : "google" == a[2] ? "au" == a[0] && "com" == a[1]?!0 : "uk" == a[0] && "co" == a[1]?!0 : !1 : !1)
};
function kd(a, b) {
    var c = Zc(a);
    if (c == Zc(window.location.href) ||!c && 0 == a.lastIndexOf("/", 0)) {
        var d = Xc(a), c = d[5], e = d[6], d = d[7], f = "";
        c && (f += c);
        e && (f += "?" + e);
        d && (f += "#" + d);
        c = f;
        e = c.indexOf("#");
        if (c = 0 > e ? c : c.substr(0, e))
            c = "s_tempdata-" + xa(c), e = b ? dd(b) : "", Qc(c, e, 5)
    }
};
function ld(a, b, c) {
    var d = G("EVENT_ID");
    d && (b || (b = {}), b.ei || (b.ei = d));
    b && kd(a, b);
    if (c)
        return !1;
    (window.ytspf || {}).enabled ? spf.navigate(a) : window.location = fd(a, {}) + "";
    return !0
};
var md = "StopIteration"in l ? l.StopIteration: Error("StopIteration");
function nd() {}
nd.prototype.next = function() {
    throw md;
};
nd.prototype.Sa = function() {
    return this
};
function od(a) {
    if (a instanceof nd)
        return a;
    if ("function" == typeof a.Sa)
        return a.Sa(!1);
    if (da(a)) {
        var b = 0, c = new nd;
        c.next = function() {
            for (; ;) {
                if (b >= a.length)
                    throw md;
                if (b in a)
                    return a[b++];
                b++
            }
        };
        return c
    }
    throw Error("Not implemented");
}
function pd(a, b, c) {
    if (da(a))
        try {
            A(a, b, c)
    } catch (d) {
        if (d !== md)
            throw d;
    } else {
        a = od(a);
        try {
            for (; ;)
                b.call(c, a.next(), void 0, a)
            } catch (e) {
            if (e !== md)
                throw e;
        }
    }
}
function qd(a) {
    if (da(a))
        return Pa(a);
    a = od(a);
    var b = [];
    pd(a, function(a) {
        b.push(a)
    });
    return b
};
function rd(a, b) {
    this.j = {};
    this.g = [];
    this.Ba = this.k = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c%2)
            throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2)
            this.set(arguments[d], arguments[d + 1])
    } else if (a) {
        a instanceof rd ? (c = a.ta(), d = a.ra()) : (c = $a(a), d = Za(a));
        for (var e = 0; e < c.length; e++)
            this.set(c[e], d[e])
    }
}
g = rd.prototype;
g.Na = function() {
    return this.k
};
g.ra = function() {
    sd(this);
    for (var a = [], b = 0; b < this.g.length; b++)
        a.push(this.j[this.g[b]]);
    return a
};
g.ta = function() {
    sd(this);
    return this.g.concat()
};
g.equals = function(a, b) {
    if (this === a)
        return !0;
    if (this.k != a.Na())
        return !1;
    var c = b || td;
    sd(this);
    for (var d, e = 0; d = this.g[e]; e++)
        if (!c(this.get(d), a.get(d)))
            return !1;
    return !0
};
function td(a, b) {
    return a === b
}
g.isEmpty = function() {
    return 0 == this.k
};
g.clear = function() {
    this.j = {};
    this.Ba = this.k = this.g.length = 0
};
g.remove = function(a) {
    return ud(this.j, a) ? (delete this.j[a], this.k--, this.Ba++, this.g.length > 2 * this.k && sd(this), !0) : !1
};
function sd(a) {
    if (a.k != a.g.length) {
        for (var b = 0, c = 0; b < a.g.length;) {
            var d = a.g[b];
            ud(a.j, d) && (a.g[c++] = d);
            b++
        }
        a.g.length = c
    }
    if (a.k != a.g.length) {
        for (var e = {}, c = b = 0; b < a.g.length;)
            d = a.g[b], ud(e, d) || (a.g[c++] = d, e[d] = 1), b++;
        a.g.length = c
    }
}
g.get = function(a, b) {
    return ud(this.j, a) ? this.j[a] : b
};
g.set = function(a, b) {
    ud(this.j, a) || (this.k++, this.g.push(a), this.Ba++);
    this.j[a] = b
};
g.forEach = function(a, b) {
    for (var c = this.ta(), d = 0; d < c.length; d++) {
        var e = c[d], f = this.get(e);
        a.call(b, f, e, this)
    }
};
g.clone = function() {
    return new rd(this)
};
g.Sa = function(a) {
    sd(this);
    var b = 0, c = this.g, d = this.j, e = this.Ba, f = this, h = new nd;
    h.next = function() {
        for (; ;) {
            if (e != f.Ba)
                throw Error("The map has changed since the iterator was created");
            if (b >= c.length)
                throw md;
            var h = c[b++];
            return a ? h : d[h]
        }
    };
    return h
};
function ud(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
function vd(a) {
    if ("function" == typeof a.ra)
        return a.ra();
    if (u(a))
        return a.split("");
    if (da(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++)
            b.push(a[d]);
        return b
    }
    return Za(a)
}
function wd(a, b) {
    if ("function" == typeof a.forEach)
        a.forEach(b, void 0);
    else if (da(a) || u(a))
        A(a, b, void 0);
    else {
        var c;
        if ("function" == typeof a.ta)
            c = a.ta();
        else if ("function" != typeof a.ra)
            if (da(a) || u(a)) {
                c = [];
                for (var d = a.length, e = 0; e < d; e++)
                    c.push(e)
            } else 
                c = $a(a);
        else 
            c = void 0;
        for (var d = vd(a), e = d.length, f = 0; f < e; f++)
            b.call(void 0, d[f], c && c[f], a)
    }
};
function xd() {};
function yd(a) {
    l.setTimeout(function() {
        throw a;
    }, 0)
}
var zd;
function Ad() {
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
        var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*": b.location.protocol + "//" + b.location.host, a = v(function(a) {
            if (("*" == d || a.origin == d) && a.data == c)
                this.port1.onmessage()
        },
        this);
        b.addEventListener("message", a, !1);
        this.port1 = {};
        this.port2 = {
            postMessage: function() {
                b.postMessage(c, d)
            }
        }
    });
    if ("undefined" !== typeof a&&!y(M, "Trident")&&!y(M, "MSIE")) {
        var b = new a, c = {}, d = c;
        b.port1.onmessage = function() {
            if (n(c.next)) {
                c = c.next;
                var a = c.gd;
                c.gd = null;
                a()
            }
        };
        return function(a) {
            d.next = {
                gd: a
            };
            d = d.next;
            b.port2.postMessage(0)
        }
    }
    return "undefined" !== typeof document && "onreadystatechange"in document.createElement("script") ? function(a) {
        var b = document.createElement("script");
        b.onreadystatechange =
        function() {
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
function Bd(a, b) {
    Cd || Dd();
    Ed || (Cd(), Ed=!0);
    Fd.push(new Gd(a, b))
}
var Cd;
function Dd() {
    if (l.Promise && l.Promise.resolve) {
        var a = l.Promise.resolve();
        Cd = function() {
            a.then(Hd)
        }
    } else 
        Cd = function() {
            var a = Hd;
            !ga(l.setImmediate) || l.Window && l.Window.prototype.setImmediate == l.setImmediate ? (zd || (zd = Ad()), zd(a)) : l.setImmediate(a)
        }
}
var Ed=!1, Fd = [];
function Hd() {
    for (; Fd.length;) {
        var a = Fd;
        Fd = [];
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            try {
                c.g.call(c.scope)
            } catch (d) {
                yd(d)
            }
        }
    }
    Ed=!1
}
function Gd(a, b) {
    this.g = a;
    this.scope = b
};
function Id(a, b) {
    this.j = 0;
    this.B = void 0;
    this.g = this.k = null;
    this.A = this.o=!1;
    try {
        var c = this;
        a.call(b, function(a) {
            Jd(c, 2, a)
        }, function(a) {
            Jd(c, 3, a)
        })
    } catch (d) {
        Jd(this, 3, d)
    }
}
function Kd(a) {
    return new Id(function(b) {
        b(a)
    })
}
Id.prototype.then = function(a, b, c) {
    return Ld(this, ga(a) ? a : null, ga(b) ? b : null, c)
};
Id.prototype.then = Id.prototype.then;
Id.prototype.$goog_Thenable=!0;
Id.prototype.cancel = function(a) {
    0 == this.j && Bd(function() {
        var b = new Md(a);
        Nd(this, b)
    }, this)
};
function Nd(a, b) {
    if (0 == a.j)
        if (a.k) {
            var c = a.k;
            if (c.g) {
                for (var d = 0, e =- 1, f = 0, h; h = c.g[f]; f++)
                    if (h = h.lb)
                        if (d++, h == a && (e = f), 0 <= e && 1 < d)
                            break;
                            0 <= e && (0 == c.j && 1 == d ? Nd(c, b) : (d = c.g.splice(e, 1)[0], Od(c, d, 3, b)))
                        }
        } else 
            Jd(a, 3, b)
    }
function Pd(a, b) {
    a.g && a.g.length || 2 != a.j && 3 != a.j || Qd(a);
    a.g || (a.g = []);
    a.g.push(b)
}
function Ld(a, b, c, d) {
    var e = {
        lb: null,
        Oc: null,
        Pc: null
    };
    e.lb = new Id(function(a, h) {
        e.Oc = b ? function(c) {
            try {
                var e = b.call(d, c);
                a(e)
            } catch (q) {
                h(q)
            }
        } : a;
        e.Pc = c ? function(b) {
            try {
                var e = c.call(d, b);
                !n(e) && b instanceof Md ? h(b) : a(e)
            } catch (q) {
                h(q)
            }
        } : h
    });
    e.lb.k = a;
    Pd(a, e);
    return e.lb
}
Id.prototype.K = function(a) {
    this.j = 0;
    Jd(this, 2, a)
};
Id.prototype.D = function(a) {
    this.j = 0;
    Jd(this, 3, a)
};
function Jd(a, b, c) {
    if (0 == a.j) {
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
                a.j = 1;
                c.then(a.K, a.D, a);
                return 
            }
            if (ha(c))
                try {
                    var f = c.then;
                    if (ga(f)) {
                        Rd(a, c, f);
                        return 
                    }
            } catch (h) {
                b = 3, c = h
            }
        }
        a.B = c;
        a.j = b;
        Qd(a);
        3 != b || c instanceof Md || Sd(a, c)
    }
}
function Rd(a, b, c) {
    function d(b) {
        f || (f=!0, a.D(b))
    }
    function e(b) {
        f || (f=!0, a.K(b))
    }
    a.j = 1;
    var f=!1;
    try {
        c.call(b, e, d)
    } catch (h) {
        d(h)
    }
}
function Qd(a) {
    a.o || (a.o=!0, Bd(a.Z, a))
}
Id.prototype.Z = function() {
    for (; this.g && this.g.length;) {
        var a = this.g;
        this.g = [];
        for (var b = 0; b < a.length; b++)
            Od(this, a[b], this.j, this.B)
    }
    this.o=!1
};
function Od(a, b, c, d) {
    if (2 == c)
        b.Oc(d);
    else {
        if (b.lb)
            for (; a && a.A; a = a.k)
                a.A=!1;
        b.Pc(d)
    }
}
function Sd(a, b) {
    a.A=!0;
    Bd(function() {
        a.A && Td.call(null, b)
    })
}
var Td = yd;
function Md(a) {
    oa.call(this, a)
}
x(Md, oa);
Md.prototype.name = "cancel";
function Ud(a) {
    this.j = a;
    this.g = null;
    var b = this;
    a.then(function(a) {
        b.g = a
    })
}
function Vd(a, b) {
    var c = b || {}, d = Wd().then(function(b) {
        return b(a, {
            apiKey: c.af || c.apiKey,
            environment: c.bf || c.environment,
            helpCenterPath: c.cf || c.helpCenterPath,
            locale: c.locale || c.locale,
            productData: c.df || c.productData,
            receiverUri: c.ef || c.receiverUri,
            theme: c.theme || c.theme,
            window: c.window || c.window
        })
    });
    return new Ud(d)
}
var Xd = null;
function Wd() {
    if (Xd)
        return Xd;
    var a = r("help.service.Lazy.create");
    return a ? Xd = Kd(a) : Xd = (new Id(function(a, c) {
        var d = document.createElement("script");
        d.async=!0;
        d.src = "https://www.gstatic.com/inproduct_help/service/lazy.min.js";
        d.onload = d.onreadystatechange = function() {
            d.readyState && "loaded" != d.readyState && "complete" != d.readyState || a(null)
        };
        d.onerror = c;
        (document.head || document.getElementsByTagName("head")[0]).appendChild(d)
    })).then(function() {
        var a = r("help.service.Lazy.create");
        if (!a)
            throw Error("Failed to load help.service.Lazy.create from https://www.gstatic.com/inproduct_help/service/lazy.min.js");
        return a
    })
}
Ud.prototype.k = function(a) {
    Yd(this, "startFeedback", arguments)
};
Ud.prototype.A = function(a) {
    Yd(this, "startHelp", arguments)
};
function Yd(a, b, c) {
    a.j.then(function(a) {
        a[b].apply(a, c)
    })
};
var Zd=!1;
function $d(a) {
    if (a = a.match(/[\d]+/g))
        a.length = 3, a.join(".")
}
if (navigator.plugins && navigator.plugins.length) {
    var ae = navigator.plugins["Shockwave Flash"];
    ae && (Zd=!0, ae.description && $d(ae.description));
    navigator.plugins["Shockwave Flash 2.0"] && (Zd=!0)
} else if (navigator.mimeTypes && navigator.mimeTypes.length) {
    var be = navigator.mimeTypes["application/x-shockwave-flash"];
    (Zd = be && be.enabledPlugin) && $d(be.enabledPlugin.description)
} else 
    try {
        var ce = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), Zd=!0;
        $d(ce.GetVariable("$version"))
} catch (de) {
    try {
        ce = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),
        Zd=!0
    } catch (ee) {
        try {
            ce = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), Zd=!0, $d(ce.GetVariable("$version"))
        } catch (fe) {}
    }
};
var ge, he, ie, je, ke, le, me;
me = le = ke = je = ie = he = ge=!1;
var ne = M;
ne && ( - 1 != ne.indexOf("Firefox") ? ge=!0 : - 1 != ne.indexOf("Camino") ? he=!0 : - 1 != ne.indexOf("iPad") ? je=!0 : - 1 != ne.indexOf("iPhone")||-1 != ne.indexOf("iPod") ? ie=!0 : - 1 != ne.indexOf("Chrome") ? le=!0 : - 1 != ne.indexOf("Android") ? ke=!0 : - 1 != ne.indexOf("Safari") && (me=!0));
var oe = ge, pe = he, qe = ie, re = je, se = ke, te = le, ue = me;
function ve(a) {
    return (a = a.exec(M)) ? a[1] : ""
}(function() {
    if (oe)
        return ve(/Firefox\/([0-9.]+)/);
    if (N || bc)
        return jc;
    if (te)
        return ve(/Chrome\/([0-9.]+)/);
    if (ue)
        return ve(/Version\/([0-9.]+)/);
    if (qe || re) {
        var a;
        if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(M))
            return a[1] + "." + a[2]
    } else {
        if (se)
            return (a = ve(/Android\s+([0-9.]+)/)) ? a : ve(/Version\/([0-9.]+)/);
        if (pe)
            return ve(/Camino\/([0-9.]+)/)
    }
    return ""
})();
function we() {
    this.k = this.j = this.g = 0;
    this.A = "";
    var a = r("window.navigator.plugins"), b = r("window.navigator.mimeTypes"), a = a && a["Shockwave Flash"], b = b && b["application/x-shockwave-flash"], b = a && b && b.enabledPlugin && a.description || "";
    if (a = b) {
        var c = a.indexOf("Shockwave Flash");
        0 <= c && (a = a.substr(c + 15));
        for (var c = a.split(" "), d = "", a = "", e = 0, f = c.length; e < f; e++)
            if (d)
                if (a)
                    break;
                else 
                    a = c[e];
        else 
            d = c[e];
        d = d.split(".");
        c = parseInt(d[0], 10) || 0;
        d = parseInt(d[1], 10) || 0;
        e = 0;
        if ("r" == a.charAt(0) || "d" == a.charAt(0))
            e = parseInt(a.substr(1),
            10) || 0;
        a = [c, d, e]
    } else 
        a = [0, 0, 0];
    this.A = b;
    b = a;
    this.g = b[0];
    this.j = b[1];
    this.k = b[2];
    if (0 >= this.g) {
        var h, k, m, q;
        if (yb)
            try {
                h = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (U) {
            h = null
        } else 
            m = document.body, q = document.createElement("object"), q.setAttribute("type", "application/x-shockwave-flash"), h = m.appendChild(q);
        if (h && "GetVariable"in h)
            try {
                k = h.GetVariable("$version")
            } catch (ea) {
            k = ""
        }
        m && q && m.removeChild(q);
        (h = k || "") ? (h = h.split(" ")[1].split(","), h = [parseInt(h[0], 10) || 0, parseInt(h[1], 10) || 0, parseInt(h[2],
        10) || 0]) : h = [0, 0, 0];
        this.g = h[0];
        this.j = h[1];
        this.k = h[2]
    }
}
ba(we);
we.prototype.getVersion = function() {
    return [this.g, this.j, this.k]
};
function xe(a, b, c, d) {
    b = "string" == typeof b ? b.split(".") : [b, c, d];
    b[0] = parseInt(b[0], 10) || 0;
    b[1] = parseInt(b[1], 10) || 0;
    b[2] = parseInt(b[2], 10) || 0;
    return a.g > b[0] || a.g == b[0] && a.j > b[1] || a.g == b[0] && a.j == b[1] && a.k >= b[2]
}
function ye(a) {
    return - 1 < a.A.indexOf("Gnash")&&-1 == a.A.indexOf("AVM2") || 9 == a.g && 1 == a.j || 9 == a.g && 0 == a.j && 1 == a.k?!1 : 9 <= a.g
}
function ze(a) {
    return fc?!xe(a, 11, 2) : ec?!xe(a, 11, 3) : !ye(a)
};
function Ae(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
}
Ae.prototype.clone = function() {
    return new Ae(this.top, this.right, this.bottom, this.left)
};
Ae.prototype.contains = function(a) {
    return this && a ? a instanceof Ae ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
Ae.prototype.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
Ae.prototype.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
function Be(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
}
Be.prototype.clone = function() {
    return new Be(this.left, this.top, this.width, this.height)
};
Be.prototype.contains = function(a) {
    return a instanceof Be ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
Be.prototype.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
Be.prototype.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
function Ce(a, b) {
    var c = rc(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
}
function De(a, b) {
    return Ce(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}
function Ee(a) {
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
    N && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}
function Fe(a) {
    if (N&&!mc(8))
        return a.offsetParent;
    var b = rc(a), c = De(a, "position"), d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (c = De(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
            return a;
    return null
}
function Ge(a) {
    var b, c = rc(a), d = De(a, "position"), e = cc && c.getBoxObjectFor&&!a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), f = new L(0, 0), h;
    b = c ? rc(c) : document;
    (h=!N || mc(9)) || (h = pc(b), h = xc(h.g));
    h = h ? b.documentElement : b.body;
    if (a == h)
        return f;
    if (a.getBoundingClientRect)
        b = Ee(a), a = pc(c), a = wc(a.g), f.x = b.left + a.x, f.y = b.top + a.y;
    else if (c.getBoxObjectFor&&!e)
        b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(h), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
    else {
        b = a;
        do {
            f.x +=
            b.offsetLeft;
            f.y += b.offsetTop;
            b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
            if (dc && "fixed" == De(b, "position")) {
                f.x += c.body.scrollLeft;
                f.y += c.body.scrollTop;
                break
            }
            b = b.offsetParent
        }
        while (b && b != a);
        if (bc || dc && "absolute" == d)
            f.y -= c.body.offsetTop;
        for (b = a; (b = Fe(b)) && b != c.body && b != h;)
            f.x -= b.scrollLeft, bc && "TR" == b.tagName || (f.y -= b.scrollTop)
    }
    return f
}
function He(a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a
}
function Ie(a) {
    var b = Je;
    if ("none" != De(a, "display"))
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
}
function Je(a) {
    var b = a.offsetWidth, c = a.offsetHeight, d = dc&&!b&&!c;
    return n(b)&&!d ||!a.getBoundingClientRect ? new Zb(b, c) : (a = Ee(a), new Zb(a.right - a.left, a.bottom - a.top))
}
function Ke(a, b) {
    if (/^\d+px?$/.test(b))
        return parseInt(b, 10);
    var c = a.style.left, d = a.runtimeStyle.left;
    a.runtimeStyle.left = a.currentStyle.left;
    a.style.left = b;
    var e = a.style.pixelLeft;
    a.style.left = c;
    a.runtimeStyle.left = d;
    return e
}
function Le(a, b) {
    var c = a.currentStyle ? a.currentStyle[b]: null;
    return c ? Ke(a, c) : 0
}
var Me = {
    thin: 2,
    medium: 4,
    thick: 6
};
function Ne(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))
        return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"]: null;
    return c in Me ? Me[c] : Ke(a, c)
}
var Oe = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
jb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
jb("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
jb("embed", "iframe", "link", "script", "style", "template");
function Pe(a, b) {
    (a = sc(a)) && a.style && (a.style.display = b ? "" : "none", Yb(a, "hid", !b))
}
function Qe(a) {
    A(arguments, function(a) {
        Pe(a, !0)
    })
}
function Re(a) {
    A(arguments, function(a) {
        Pe(a, !1)
    })
};
var Se = {};
function Te(a, b) {
    var c = G("FEEDBACK_LOCALE_LANGUAGE"), d = G("FEEDBACK_LOCALE_EXTRAS", {});
    a ? ib(Se, a) : ib(Se, d);
    try {
        var e, f = r("yt.player.getPlayerByElement");
        (e = f ? f("player-api") : null) && e.pauseVideo && e.pauseVideo();
        var h = we.getInstance();
        Se.flashVersion = h.getVersion().join(".");
        e && (Se.playback_id = e.getVideoData().cpn)
    } catch (k) {}
    b && ib(Se, {
        trackingParam: b
    });
    return {
        helpCenterPath: "/youtube",
        locale: c,
        productData: Se
    }
}
function Ue() {
    var a = G("SESSION_INDEX"), b = G("FEEDBACK_BUCKET_ID"), c = {
        abuseLink: "https://support.google.com/youtube/bin/answer.py?answer=140536",
        customZIndex: "2000000005"
    };
    a && (c.authuser = a + "");
    b && (c.bucket = b);
    return c
}
function Ve(a, b) {
    try {
        var c = (a || "59") + "", d = Te(b), e = Ue();
        Vd(c, d).k(e);
        return !1
    } catch (f) {
        return !0
    }
}
function We(a, b, c, d) {
    var e;
    d = (d || "59") + "";
    c = Te(c, void 0);
    a = {
        context: b,
        anchor: void 0,
        enableSendFeedback: !0,
        defaultHelpArticleId: a
    };
    ib(a, Ue());
    try {
        Vd(d, c).A(a), e=!1
    } catch (f) {
        e=!0
    }
    return e
};
function Xe(a) {
    a = a || {};
    this.url = a.url || "";
    this.urlV8 = a.url_v8 || "";
    this.urlV9As2 = a.url_v9as2 || "";
    this.args = a.args || eb(Ye);
    this.assets = a.assets || {};
    this.attrs = a.attrs || eb(Ze);
    this.params = a.params || eb($e);
    this.minVersion = a.min_version || "8.0.0";
    this.fallback = a.fallback || null;
    this.fallbackMessage = a.fallbackMessage || null;
    this.html5=!!a.html5;
    this.disable = a.disable || {};
    this.loaded=!!a.loaded;
    this.messages = a.messages || {}
}
var Ye = {
    enablejsapi: 1
}, Ze = {}, $e = {
    allowscriptaccess: "always",
    allowfullscreen: "true",
    bgcolor: "#000000"
};
function af(a) {
    a instanceof Xe || (a = new Xe(a));
    return a
}
Xe.prototype.clone = function() {
    var a = new Xe, b;
    for (b in this) {
        var c = this[b];
        "object" == ca(c) ? a[b] = eb(c) : a[b] = c
    }
    return a
};
function bf() {
    var a = Sc("PREF");
    if (a)
        for (var a = unescape(a).split("&"), b = 0; b < a.length; b++) {
            var c = a[b].split("="), d = c[0];
            (c = c[1]) && (cf[d] = c.toString())
        }
}
ba(bf);
var cf = r("yt.prefs.UserPrefs.prefs_") || {};
p("yt.prefs.UserPrefs.prefs_", cf, void 0);
function df(a) {
    if (/^f([1-9][0-9]*)$/.test(a))
        throw "ExpectedRegexMatch: " + a;
}
function ef(a) {
    if (!/^\w+$/.test(a))
        throw "ExpectedRegexMismatch: " + a;
}
function ff(a) {
    return void 0 !== cf[a] ? cf[a].toString() : null
}
bf.prototype.get = function(a, b) {
    ef(a);
    df(a);
    var c = ff(a);
    return null != c ? c : b ? b : ""
};
bf.prototype.set = function(a, b) {
    ef(a);
    df(a);
    if (null == b)
        throw "ExpectedNotNull";
    cf[a] = b.toString()
};
bf.prototype.remove = function(a) {
    ef(a);
    df(a);
    delete cf[a]
};
bf.prototype.clear = function() {
    cf = {}
};
function gf(a, b, c) {
    if (b) {
        a = u(a) ? tc(a) : a;
        c = af(c);
        var d = eb(c.attrs);
        d.tabindex = 0;
        var e = eb(c.params);
        e.flashvars = dd(c.args);
        if (yb) {
            d.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
            e.movie = b;
            b = document.createElement("object");
            for (var f in d)
                b.setAttribute(f, d[f]);
            for (f in e)
                d = document.createElement("param"), d.setAttribute("name", f), d.setAttribute("value", e[f]), b.appendChild(d)
            } else {
            d.type = "application/x-shockwave-flash";
            d.src = b;
            b = document.createElement("embed");
            b.setAttribute("name", d.id);
            for (f in d)
                b.setAttribute(f,
                d[f]);
            for (f in e)
                b.setAttribute(f, e[f])
            }
        e = document.createElement("div");
        e.appendChild(b);
        a.innerHTML = e.innerHTML
    }
}
function hf(a, b, c) {
    if (a && a.attrs && a.attrs.id) {
        a = af(a);
        var d=!!b, e = sc(a.attrs.id), f = e ? e.parentNode : null;
        if (e && f) {
            if (window != window.top) {
                var h = null;
                if (document.referrer) {
                    var k = document.referrer.substring(0, 128);
                    jd(k) || (h = k)
                } else 
                    h = "unknown";
                h && (d=!0, a.args.framer = h)
            }
            h = jf();
            if (xe(h, a.minVersion)) {
                var k = kf(a, h), m = "";
                - 1 < navigator.userAgent.indexOf("Sony/COM2") || (m = e.getAttribute("src") || e.movie);
                (m != k || d) && gf(f, k, a);
                ze(h) && lf()
            } else 
                mf(f, a, h);
            c && c()
        } else 
            H(function() {
                hf(a, b, c)
            }, 50)
    }
}
function mf(a, b, c) {
    0 == c.g && b.fallback ? b.fallback() : 0 == c.g && b.fallbackMessage ? b.fallbackMessage() : a.innerHTML = '<div id="flash-upgrade">' + xb() + "</div>"
}
function kf(a, b) {
    return ye(b) && a.url || ( - 1 < navigator.userAgent.indexOf("Sony/COM2")&&!xe(b, 9, 1, 58)?!1 : !0) && a.urlV9As2 || a.urlV8 || a.url
}
function jf() {
    var a = we.getInstance();
    bf.getInstance().set("fv", a.getVersion().join("."));
    var b;
    b = [];
    for (var c in cf)
        b.push(c + "=" + escape(cf[c]));
    b = b.join("&");
    Qc("PREF", b, 63072E3);
    return a
}
function lf() {
    var a = sc("flash10-promo-div"), b;
    bf.getInstance();
    b = ff("f" + (Math.floor(107 / 31) + 1));
    b=!!(((null != b && /^[A-Fa-f0-9]+$/.test(b) ? parseInt(b, 16) : null) || 0) & 16384);
    a&&!b && Qe(a)
};
function nf(a) {
    if (window.spf) {
        var b = a.match(of);
        spf.style.load(a, b ? b[1] : "", void 0)
    } else 
        pf(a)
}
function pf(a) {
    var b = qf(a), c = document.getElementById(b), d = c && C(c, "loaded");
    d || c&&!d || (c = rf(a, b, function() {
        C(c, "loaded") || (kb(c, "loaded", "true"), K(b), H(na(Ib, b), 0))
    }))
}
function rf(a, b, c) {
    var d = document.createElement("link");
    d.id = b;
    d.rel = "stylesheet";
    d.onload = function() {
        c && setTimeout(c, 0)
    };
    d.href = a;
    (document.getElementsByTagName("head")[0] || document.body).appendChild(d);
    return d
}
function qf(a) {
    var b = document.createElement("a");
    b.href = a;
    a = b.href.replace(/^[a-zA-Z]+:\/\//, "//");
    return "css-" + xa(a)
}
var of = /cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;
var sf;
var tf = M, tf = tf.toLowerCase();
if (y(tf, "android")) {
    var uf = tf.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);
    if (uf)
        sf = Number(uf[1]);
    else {
        var vf = {
            cupcake: 1.5,
            donut: 1.6,
            eclair: 2,
            froyo: 2.2,
            gingerbread: 2.3,
            honeycomb: 3,
            "ice cream sandwich": 4,
            jellybean: 4.1
        }, wf = tf.match("(" + $a(vf).join("|") + ")");
        sf = wf ? vf[wf[0]] : 0
    }
} else 
    sf = void 0;
function xf() {
    if (2.2 == sf)
        return !0;
    var a;
    a = r("yt.player.utils.videoElement_");
    a || (a = document.createElement("video"), p("yt.player.utils.videoElement_", a, void 0));
    try {
        return !(!a ||!a.canPlayType ||!a.canPlayType('video/mp4; codecs="avc1.42001E, mp4a.40.2"')&&!a.canPlayType('video/webm; codecs="vp8.0, vorbis"'))
    } catch (b) {
        return !1
    }
};
function yf(a, b) {
    var c;
    a instanceof yf ? (this.Ra = n(b) ? b : a.Ra, zf(this, a.Ga), this.Qa = a.Qa, Af(this, a.wa), Bf(this, a.Oa), this.oa = a.oa, Cf(this, a.g.clone()), this.Pa = a.Pa) : a && (c = Xc(String(a))) ? (this.Ra=!!b, zf(this, c[1] || "", !0), this.Qa = Df(c[2] || ""), Af(this, c[3] || "", !0), Bf(this, c[4]), this.oa = Df(c[5] || "", !0), Cf(this, c[6] || "", !0), this.Pa = Df(c[7] || "")) : (this.Ra=!!b, this.g = new Ef(null, 0, this.Ra))
}
g = yf.prototype;
g.Ga = "";
g.Qa = "";
g.wa = "";
g.Oa = null;
g.oa = "";
g.Pa = "";
g.Ra=!1;
g.toString = function() {
    var a = [], b = this.Ga;
    b && a.push(Ff(b, Gf, !0), ":");
    if (b = this.wa) {
        a.push("//");
        var c = this.Qa;
        c && a.push(Ff(c, Gf, !0), "@");
        a.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
        b = this.Oa;
        null != b && a.push(":", String(b))
    }
    if (b = this.oa)
        this.wa && "/" != b.charAt(0) && a.push("/"), a.push(Ff(b, "/" == b.charAt(0) ? Hf : If, !0));
    (b = this.g.toString()) && a.push("?", b);
    (b = this.Pa) && a.push("#", Ff(b, Jf));
    return a.join("")
};
g.resolve = function(a) {
    var b = this.clone(), c=!!a.Ga;
    c ? zf(b, a.Ga) : c=!!a.Qa;
    c ? b.Qa = a.Qa : c=!!a.wa;
    c ? Af(b, a.wa) : c = null != a.Oa;
    var d = a.oa;
    if (c)
        Bf(b, a.Oa);
    else if (c=!!a.oa) {
        if ("/" != d.charAt(0))
            if (this.wa&&!this.oa)
                d = "/" + d;
            else {
                var e = b.oa.lastIndexOf("/");
                - 1 != e && (d = b.oa.substr(0, e + 1) + d)
            }
        e = d;
        if (".." == e || "." == e)
            d = "";
        else if (y(e, "./") || y(e, "/.")) {
            for (var d = 0 == e.lastIndexOf("/", 0), e = e.split("/"), f = [], h = 0; h < e.length;) {
                var k = e[h++];
                "." == k ? d && h == e.length && f.push("") : ".." == k ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(),
                d && h == e.length && f.push("")) : (f.push(k), d=!0)
            }
            d = f.join("/")
        } else 
            d = e
    }
    c ? b.oa = d : c = "" !== a.g.toString();
    c ? Cf(b, Df(a.g.toString())) : c=!!a.Pa;
    c && (b.Pa = a.Pa);
    return b
};
g.clone = function() {
    return new yf(this)
};
function zf(a, b, c) {
    a.Ga = c ? Df(b, !0) : b;
    a.Ga && (a.Ga = a.Ga.replace(/:$/, ""))
}
function Af(a, b, c) {
    a.wa = c ? Df(b, !0) : b
}
function Bf(a, b) {
    if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b)
            throw Error("Bad port number " + b);
        a.Oa = b
    } else 
        a.Oa = null
}
function Cf(a, b, c) {
    b instanceof Ef ? (a.g = b, Kf(a.g, a.Ra)) : (c || (b = Ff(b, Lf)), a.g = new Ef(b, 0, a.Ra))
}
function P(a, b, c) {
    a.g.set(b, c)
}
function Mf(a, b, c) {
    t(c) || (c = [String(c)]);
    Nf(a.g, b, c)
}
function Of(a) {
    P(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random())^w()).toString(36));
    return a
}
function Pf(a) {
    return a instanceof yf ? a.clone() : new yf(a, void 0)
}
function Qf(a, b, c, d) {
    var e = new yf(null, void 0);
    a && zf(e, a);
    b && Af(e, b);
    c && Bf(e, c);
    d && (e.oa = d);
    return e
}
function Df(a, b) {
    return a ? b ? decodeURI(a) : decodeURIComponent(a) : ""
}
function Ff(a, b, c) {
    return u(a) ? (a = encodeURI(a).replace(b, Rf), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
}
function Rf(a) {
    a = a.charCodeAt(0);
    return "%" + (a>>4 & 15).toString(16) + (a & 15).toString(16)
}
var Gf = /[#\/\?@]/g, If = /[\#\?:]/g, Hf = /[\#\?]/g, Lf = /[\#\?@]/g, Jf = /#/g;
function Ef(a, b, c) {
    this.g = a || null;
    this.j=!!c
}
function Sf(a) {
    if (!a.N && (a.N = new rd, a.ca = 0, a.g))
        for (var b = a.g.split("&"), c = 0; c < b.length; c++) {
            var d = b[c].indexOf("="), e = null, f = null;
            0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
            e = ra(e);
            e = Tf(a, e);
            a.add(e, f ? ra(f) : "")
        }
}
g = Ef.prototype;
g.N = null;
g.ca = null;
g.Na = function() {
    Sf(this);
    return this.ca
};
g.add = function(a, b) {
    Sf(this);
    this.g = null;
    a = Tf(this, a);
    var c = this.N.get(a);
    c || this.N.set(a, c = []);
    c.push(b);
    this.ca++;
    return this
};
g.remove = function(a) {
    Sf(this);
    a = Tf(this, a);
    return ud(this.N.j, a) ? (this.g = null, this.ca -= this.N.get(a).length, this.N.remove(a)) : !1
};
g.clear = function() {
    this.N = this.g = null;
    this.ca = 0
};
g.isEmpty = function() {
    Sf(this);
    return 0 == this.ca
};
function Uf(a, b) {
    Sf(a);
    b = Tf(a, b);
    return ud(a.N.j, b)
}
g.ta = function() {
    Sf(this);
    for (var a = this.N.ra(), b = this.N.ta(), c = [], d = 0; d < b.length; d++)
        for (var e = a[d], f = 0; f < e.length; f++)
            c.push(b[d]);
    return c
};
g.ra = function(a) {
    Sf(this);
    var b = [];
    if (u(a))
        Uf(this, a) && (b = Oa(b, this.N.get(Tf(this, a))));
    else {
        a = this.N.ra();
        for (var c = 0; c < a.length; c++)
            b = Oa(b, a[c])
    }
    return b
};
g.set = function(a, b) {
    Sf(this);
    this.g = null;
    a = Tf(this, a);
    Uf(this, a) && (this.ca -= this.N.get(a).length);
    this.N.set(a, [b]);
    this.ca++;
    return this
};
g.get = function(a, b) {
    var c = a ? this.ra(a): [];
    return 0 < c.length ? String(c[0]) : b
};
function Nf(a, b, c) {
    a.remove(b);
    0 < c.length && (a.g = null, a.N.set(Tf(a, b), Pa(c)), a.ca += c.length)
}
g.toString = function() {
    if (this.g)
        return this.g;
    if (!this.N)
        return "";
    for (var a = [], b = this.N.ta(), c = 0; c < b.length; c++)
        for (var d = b[c], e = encodeURIComponent(String(d)), d = this.ra(d), f = 0; f < d.length; f++) {
            var h = e;
            "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
            a.push(h)
        }
    return this.g = a.join("&")
};
g.clone = function() {
    var a = new Ef;
    a.g = this.g;
    this.N && (a.N = this.N.clone(), a.ca = this.ca);
    return a
};
function Tf(a, b) {
    var c = String(b);
    a.j && (c = c.toLowerCase());
    return c
}
function Kf(a, b) {
    b&&!a.j && (Sf(a), a.g = null, a.N.forEach(function(a, b) {
        var e = b.toLowerCase();
        b != e && (this.remove(b), Nf(this, e, a))
    }, a));
    a.j = b
};
var Vf = /^https?:\/\/([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|borg\.google\.com|prod\.google\.com|video\.google\.com|youtube\.com|youtube\.googleapis\.com|youtube-nocookie\.com|youtubeeducation\.com)(:[0-9]+)?\/embed\//;
var Wf = "corp.google.com googleplex.com youtube.com youtube-nocookie.com youtubeeducation.com borg.google.com prod.google.com sandbox.google.com docs.google.com drive.google.com mail.google.com plus.google.com play.google.com googlevideo.com talkgadget.google.com survey.g.doubleclick.net youtube.googleapis.com vevo.com".split(" "), Xf = "";
function Yf(a) {
    return a && a == Xf?!0 : (new RegExp("^(https?:)?//([a-z0-9-]{1,63}\\.)*(" + Wf.join("|").replace(/\./g, ".") + ")(:[0-9]+)?([/?#]|$)", "i")).test(a) ? (Xf = a, !0) : !1
};
var Zf = {}, $f = 0, ag = r("yt.net.ping.workerUrl_") || null;
p("yt.net.ping.workerUrl_", ag, void 0);
function bg(a) {
    var b = new Image, c = "" + $f++;
    Zf[c] = b;
    b.onload = b.onerror = function() {
        delete Zf[c]
    };
    b.src = a;
    b = eval("null")
};
var cg, dg, eg;
var fg = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {}, gg = v(fg.clearResourceTimings || fg.webkitClearResourceTimings || fg.mozClearResourceTimings || fg.msClearResourceTimings || fg.oClearResourceTimings || s, fg), hg = fg.mark ? function(a) {
    fg.mark(a)
}
: s;
function ig() {
    var a = jg(), b = kg().span, c = kg().info, d = r("yt.timing.reportbuilder_");
    if (d) {
        if (d = d(a, b, c, void 0))
            lg(d), mg(), gg()
    } else {
        d = {
            v: 2,
            s: "youtube",
            action: G("TIMING_ACTION")
        };
        if (fg.now && fg.timing) {
            var e = fg.timing.navigationStart + fg.now(), e = Math.round(w() - e);
            c.yt_hrd = e
        }
        var e = G("TIMING_INFO") || {}, f;
        for (f in e)
            c[f] = e[f];
        f = c.srt;
        delete c.srt;
        var h;
        f || 0 === f || (h = fg.timing || {}, f = Math.max(0, h.responseStart - h.navigationStart), isNaN(f) && c.pt && (f = c.pt));
        if (f || 0 === f)
            c.srt = f;
        c.h5jse && (f = window.location.protocol +
        r("ytplayer.config.assets.js"), (f = fg.getEntriesByName ? fg.getEntriesByName(f)[0] : null) ? c.h5jse = Math.round(c.h5jse - f.responseEnd) : delete c.h5jse);
        a.aft || (a.aft = a.pbr && a.pbs > a.pbr ? a.pbr : a.pbs ? a.pbs : a.vr ? a.vr : a.ol);
        f = a._start;
        if (!cg) {
            h || (h = fg.timing || {});
            t:
            if (e = h, e.msFirstPaint)
                e = Math.max(0, e.msFirstPaint);
            else {
                var k = window.chrome;
                if (k && (k = k.loadTimes, ga(k))) {
                    var k = k(), m = 1E3 * Math.min(k.requestTime || Infinity, k.startLoadTime || Infinity), m = Infinity === m ? 0: e.navigationStart - m, e = Math.max(0, Math.round(1E3 * k.firstPaintTime +
                    m) || 0);
                    break t
                }
                e = 0
            }
            0 < e && e > f && (a.fpt = e);
            e = h.redirectEnd - h.redirectStart;
            0 < e && (b.rtime_ = e);
            e = h.domainLookupEnd - h.domainLookupStart;
            0 < e && (b.dns_ = e);
            e = h.connectEnd - h.connectStart;
            0 < e && (b.tcp_ = e);
            e = h.connectEnd - h.secureConnectionStart;
            h.secureConnectionStart && 0 < e && (b.stcp_ = e);
            e = h.responseStart - h.requestStart;
            0 < e && (b.req_ = e);
            e = h.responseEnd - h.responseStart;
            0 < e && (b.rcv_ = e);
            cg=!0
        }
        for (var q in c)
            "_" != q.charAt(0) && (d[q] = c[q]);
        c = {};
        q = [];
        for (var U in a)
            "_" != U.charAt(0) && (e = Math.max(Math.round(a[U] - f), 0), c[U] =
            e, q.push(U + "." + e));
        d.rt = q.join(",");
        a = {};
        U = [];
        for (var ea in b)
            "_" != ea.charAt(0) && (a[ea] = b[ea], U.push(ea + "." + b[ea]));
        d.it = U.join(",");
        (b = r("ytdebug.logTiming")) && b(d, c, a);
        mg();
        gg();
        G("EXP_DEFER_CSI_PING") ? (ng(), dg = d, eg = H(ng, 0)) : lg(d)
    }
}
function lg(a) {
    G("EXP_DEFER_CSI_PING") && (I(eg), dg = null);
    var b = "https:" == window.location.protocol ? "https://gg.google.com/csi": "http://csi.gstatic.com/csi", c = "", d;
    for (d in a)
        c += "&" + d + "=" + a[d];
    (a = b + "?" + c.substring(1)) && bg(a)
}
function ng(a) {
    dg && (a && (dg.yt_fss = a), lg(dg))
}
function jg() {
    return kg().tick
}
function kg() {
    return r("ytcsi.data_") || mg()
}
function mg() {
    var a = {
        tick: {},
        span: {},
        info: {}
    };
    p("ytcsi.data_", a, void 0);
    return a
};
function og() {};
function pg() {}
x(pg, og);
pg.prototype.Na = function() {
    var a = 0;
    pd(this.Sa(!0), function() {
        a++
    });
    return a
};
pg.prototype.clear = function() {
    var a = qd(this.Sa(!0)), b = this;
    A(a, function(a) {
        b.remove(a)
    })
};
function qg(a) {
    this.g = a
}
x(qg, pg);
g = qg.prototype;
g.isAvailable = function() {
    if (!this.g)
        return !1;
    try {
        return this.g.setItem("__sak", "1"), this.g.removeItem("__sak"), !0
    } catch (a) {
        return !1
    }
};
g.set = function(a, b) {
    try {
        this.g.setItem(a, b)
    } catch (c) {
        if (0 == this.g.length)
            throw "Storage mechanism: Storage disabled";
        throw "Storage mechanism: Quota exceeded";
    }
};
g.get = function(a) {
    a = this.g.getItem(a);
    if (!u(a) && null !== a)
        throw "Storage mechanism: Invalid value was encountered";
    return a
};
g.remove = function(a) {
    this.g.removeItem(a)
};
g.Na = function() {
    return this.g.length
};
g.Sa = function(a) {
    var b = 0, c = this.g, d = new nd;
    d.next = function() {
        if (b >= c.length)
            throw md;
        var d;
        d = c.key(b++);
        if (a)
            return d;
        d = c.getItem(d);
        if (!u(d))
            throw "Storage mechanism: Invalid value was encountered";
        return d
    };
    return d
};
g.clear = function() {
    this.g.clear()
};
g.key = function(a) {
    return this.g.key(a)
};
function rg() {
    var a = null;
    try {
        a = window.localStorage || null
    } catch (b) {}
    this.g = a
}
x(rg, qg);
function sg() {
    var a = null;
    try {
        a = window.sessionStorage || null
    } catch (b) {}
    this.g = a
}
x(sg, qg);
function tg(a) {
    a = String(a);
    if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
        try {
            return eval("(" + a + ")")
    } catch (b) {}
    throw Error("Invalid JSON string: " + a);
}
function ug(a) {
    return eval("(" + a + ")")
}
function Q(a) {
    return vg(new wg(void 0), a)
}
function wg(a) {
    this.g = a
}
function vg(a, b) {
    var c = [];
    xg(a, b, c);
    return c.join("")
}
function xg(a, b, c) {
    switch (typeof b) {
    case "string":
        yg(b, c);
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
        if (t(b)) {
            var d = b.length;
            c.push("[");
            for (var e = "", f = 0; f < d; f++)
                c.push(e), e = b[f], xg(a, a.g ? a.g.call(b, String(f), e) : e, c), e = ",";
            c.push("]");
            break
        }
        c.push("{");
        d = "";
        for (f in b)
            Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), yg(f, c), c.push(":"),
            xg(a, a.g ? a.g.call(b, f, e) : e, c), d = ","));
        c.push("}");
        break;
    case "function":
        break;
    default:
        throw Error("Unknown type: " + typeof b);
    }
}
var zg = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\u000b"
}, Ag = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g: /[\\\"\x00-\x1f\x7f-\xff]/g;
function yg(a, b) {
    b.push('"', a.replace(Ag, function(a) {
        if (a in zg)
            return zg[a];
        var b = a.charCodeAt(0), e = "\\u";
        16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
        return zg[a] = e + b.toString(16)
    }), '"')
};
function Bg(a) {
    this.g = a
}
Bg.prototype.set = function(a, b) {
    n(b) ? this.g.set(a, Q(b)) : this.g.remove(a)
};
Bg.prototype.get = function(a) {
    var b;
    try {
        b = this.g.get(a)
    } catch (c) {
        return 
    }
    if (null !== b)
        try {
            return tg(b)
    } catch (d) {
        throw "Storage: Invalid value was encountered";
    }
};
Bg.prototype.remove = function(a) {
    this.g.remove(a)
};
function Cg(a) {
    this.g = a
}
x(Cg, Bg);
function Dg(a) {
    this.data = a
}
function Eg(a) {
    return !n(a) || a instanceof Dg ? a : new Dg(a)
}
Cg.prototype.set = function(a, b) {
    Cg.L.set.call(this, a, Eg(b))
};
Cg.prototype.j = function(a) {
    a = Cg.L.get.call(this, a);
    if (!n(a) || a instanceof Object)
        return a;
    throw "Storage: Invalid value was encountered";
};
Cg.prototype.get = function(a) {
    if (a = this.j(a)) {
        if (a = a.data, !n(a))
            throw "Storage: Invalid value was encountered";
    } else 
        a = void 0;
    return a
};
function Fg(a) {
    this.g = a
}
x(Fg, Cg);
function Gg(a) {
    var b = a.creation;
    a = a.expiration;
    return !!a && a < w()||!!b && b > w()
}
Fg.prototype.set = function(a, b, c) {
    if (b = Eg(b)) {
        if (c) {
            if (c < w()) {
                Fg.prototype.remove.call(this, a);
                return 
            }
            b.expiration = c
        }
        b.creation = w()
    }
    Fg.L.set.call(this, a, b)
};
Fg.prototype.j = function(a, b) {
    var c = Fg.L.j.call(this, a);
    if (c)
        if (!b && Gg(c))
            Fg.prototype.remove.call(this, a);
        else 
            return c
};
function Hg(a) {
    this.g = a
}
x(Hg, Fg);
function Ig(a, b) {
    var c = [];
    pd(b, function(a) {
        var b;
        try {
            b = Hg.prototype.j.call(this, a, !0)
        } catch (f) {
            if ("Storage: Invalid value was encountered" == f)
                return;
            throw f;
        }
        n(b) ? Gg(b) && c.push(a) : c.push(a)
    }, a);
    return c
}
function Jg(a, b) {
    var c = Ig(a, b);
    A(c, function(a) {
        Hg.prototype.remove.call(this, a)
    }, a)
}
function Kg() {
    var a = Lg;
    Jg(a, a.g.Sa(!0))
};
function R(a, b, c) {
    var d = c && 0 < c ? c: 0;
    c = d ? w() + 1E3 * d : 0;
    if ((d = d ? Lg : Mg) && window.JSON) {
        u(b) || (b = JSON.stringify(b, void 0));
        try {
            d.set(a, b, c)
        } catch (e) {
            d.remove(a)
        }
    }
}
function S(a) {
    if (!Mg&&!Lg ||!window.JSON)
        return null;
    var b;
    try {
        b = Mg.get(a)
    } catch (c) {}
    if (!u(b))
        try {
            b = Lg.get(a)
    } catch (d) {}
    if (!u(b))
        return null;
    try {
        b = JSON.parse(b, void 0)
    } catch (e) {}
    return b
}
function Ng(a) {
    Mg && Mg.remove(a);
    Lg && Lg.remove(a)
}
var Lg, Og = new rg;
Lg = Og.isAvailable() ? new Hg(Og) : null;
var Mg, Pg = new sg;
Mg = Pg.isAvailable() ? new Hg(Pg) : null;
function Qg() {
    var a = {
        volume: 100,
        muted: !1
    }, b = S("yt-player-volume") || {};
    a.volume = isNaN(b.volume) ? 100 : Math.min(Math.max(b.volume, 0), 100);
    a.muted = void 0 == b.muted?!1 : b.muted;
    return a
};
function Rg(a, b) {
    D.call(this);
    this.k = this.eb = a;
    this.M = b;
    this.B=!1;
    this.g = {};
    this.da = this.J = null;
    this.S = new F;
    nb(this, na(E, this.S));
    this.A = {};
    this.o = this.pa = this.j = this.Ta = this.G = null;
    this.W=!1;
    this.xa = this.D = null;
    this.qa = {};
    this.hd = ["onReady"];
    this.Ua = null;
    this.tb = 0;
    this.Y = {};
    Sg(this);
    this.Wa("onVolumeChange", v(this.ld, this));
    this.Wa("onError", v(this.kd, this));
    this.Wa("onTabOrderChange", v(this.jd, this));
    this.Wa("WATCH_LATER_VIDEO_ADDED", v(this.md, this));
    this.Wa("WATCH_LATER_VIDEO_REMOVED", v(this.nd,
    this))
}
x(Rg, D);
g = Rg.prototype;
g.ac = function(a, b) {
    this.H() || (Tg(this, a), Ug(this, b), this.B && Vg(this))
};
function Tg(a, b) {
    a.Ta = b;
    a.G = b.clone();
    a.j = a.G.attrs.id || a.j;
    "video-player" == a.j && (a.j = a.M, a.G.attrs.id = a.M);
    a.k.id == a.j && (a.j = a.j + "-player", a.G.attrs.id = a.j);
    var c = a.G.args, d;
    if (!(d = a.G.args.eurl)) {
        d = document.location.toString();
        var e=!!d&&-1 != d.search(Vf), f =- 1 != d.indexOf("/embed/");
        e != f && wb(Error("isIframeEmbed(" + d + ") behavior is not consistent"));
        d = f ? document.referrer && document.referrer.substring(0, 128) || "unknown" : d
    }
    c.eurl = d;
    a.G.args.enablejsapi = "1";
    a.G.args.playerapiid = a.M;
    a.pa || (a.pa = Wg(a, a.G.args.jsapicallback ||
    "onYouTubePlayerReady"));
    a.G.args.jsapicallback = null;
    if (c = a.G.attrs.width)
        a.k.style.width = He(Number(c) || c, !0);
    if (c = a.G.attrs.height)
        a.k.style.height = He(Number(c) || c, !0);
    a.k.style.overflow = "hidden"
}
g.Pd = function() {
    return this.Ta
};
function Vg(a) {
    a.G.loaded || (a.G.loaded=!0, "0" != a.G.args.autoplay ? a.g.loadVideoByPlayerVars(a.G.args) : a.g.cueVideoByPlayerVars(a.G.args))
}
function Xg(a) {
    if (!n(a.G.disable.flash)) {
        var b = a.G.disable, c;
        c = xe(jf(), a.G.minVersion);
        b.flash=!c
    }
    return !a.G.disable.flash
}
function Yg(a) {
    var b = Zg(a);
    b && b.stopVideo && b.stopVideo();
    if (Xg(a)) {
        var c = a.G;
        b && b.getUpdatedConfigurationData && (b = af(b.getUpdatedConfigurationData()), b.args.video_id == c.args.video_id && (c = b));
        c.args.autoplay = 1;
        c.args.html5_unavailable = "1";
        Tg(a, c);
        Ug(a, "flash")
    }
}
function Ug(a, b) {
    if (!a.H()) {
        if (!b) {
            var c;
            if (!(c=!a.G.html5 && Xg(a))) {
                if (!n(a.G.disable.html5)) {
                    if (c = xf())
                        c = $g(a) || a.G.assets.js;
                    a.G.disable.html5=!c;
                    c || (a.G.args.html5_unavailable = "1")
                }
                c=!!a.G.disable.html5
            }
            b = c ? Xg(a) ? "flash" : "unsupported" : "html5"
        }("flash" == b ? a.ue : "html5" == b ? a.ve : a.we).call(a)
    }
}
function $g(a) {
    var b=!0, c = Zg(a);
    c && a.G && (a = a.G, b = C(c, "version") == a.assets.js);
    return b&&!!r("yt.player.Application.create")
}
g.ve = function() {
    if (!this.W) {
        var a = $g(this);
        a && "html5" == ah(this) ? (this.o = "html5", this.B || this.$a()) : (bh(this), this.o = "html5", a && this.xa ? (this.eb.appendChild(this.xa), this.$a()) : (this.G.loaded=!0, this.D = v(function() {
            var a = this.eb, c = this.G.clone();
            r("yt.player.Application.create")(a, c);
            this.$a()
        }, this), this.W=!0, a ? this.D() : (Jb(this.G.assets.js, this.D), nf(this.G.assets.css))))
    }
};
g.ue = function() {
    var a = this.G.clone();
    a.attrs.width = a.attrs.width || "100%";
    a.attrs.height = a.attrs.height || "100%";
    if ("flash" == ah(this))
        this.o = "flash", this.B || hf(a, !1, v(this.$a, this));
    else {
        bh(this);
        this.o = "flash";
        this.G.loaded=!0;
        var b = this.eb, b = u(b) ? tc(b): b, a = af(a);
        if (window != window.top) {
            var c = null;
            document.referrer && (c = document.referrer.substring(0, 128));
            a.args.framer = c
        }
        c = jf();
        xe(c, a.minVersion) ? (c = kf(a, c), gf(b, c, a)) : mf(b, a, c);
        this.$a()
    }
};
function Zg(a) {
    var b = sc(a.j);
    !b && a.k && a.k.querySelector && (b = a.k.querySelector("#" + a.j));
    return b
}
g.$a = function() {
    var a = Zg(this), b=!1;
    try {
        a && a.getApiInterface && a.getApiInterface() && (b=!0)
    } catch (c) {}
    if (b)
        if (this.W=!1, a.isNotServable && a.isNotServable())
            Yg(this);
        else {
            Sg(this);
            this.B=!0;
            a = Zg(this);
            a.addEventListener && (this.J = ch(this, a, "addEventListener"));
            a.removeEventListener && (this.da = ch(this, a, "removeEventListener"));
            for (var b = a.getApiInterface(), b = b.concat(a.getInternalApiInterface()), d = 0; d < b.length; d++) {
                var e = b[d];
                this.g[e] || (this.g[e] = ch(this, a, e))
            }
            for (var f in this.A)
                this.J(f, this.A[f]);
                Vg(this);
                this.pa && this.pa(this.g);
                this.S.publish("onReady", this.g)
        } else 
            this.tb = H(v(this.$a, this), 50)
    };
function ch(a, b, c) {
    var d = b[c];
    return function() {
        try {
            return a.Ua = null, d.apply(b, arguments)
        } catch (e) {
            "Bad NPObject as private data!" != e.message && (e.message += " (" + c + ")", a.Ua = e, wb(e, "WARNING"))
        }
    }
}
function Sg(a) {
    a.B=!1;
    if (a.da)
        for (var b in a.A)
            a.da(b, a.A[b]);
    for (var c in a.Y)
        I(parseInt(c, 10));
    a.Y = {};
    a.J = null;
    a.da = null;
    for (var d in a.g)
        a.g[d] = null;
    a.g.addEventListener = v(a.Wa, a);
    a.g.removeEventListener = v(a.Sd, a);
    a.g.destroy = v(a.dispose, a);
    a.g.getLastError = v(a.Qd, a);
    a.g.getPlayerType = v(a.Rd, a);
    a.g.getCurrentVideoConfig = v(a.Pd, a);
    a.g.loadNewVideoConfig = v(a.ac, a);
    a.g.isReady = v(a.Td, a)
}
g.Td = function() {
    return this.B
};
g.Wa = function(a, b) {
    if (!this.H()) {
        var c = Wg(this, b);
        if (c) {
            if (!Ha(this.hd, a)&&!this.A[a]) {
                var d = dh(this, a);
                this.J && this.J(a, d)
            }
            this.S.subscribe(a, c);
            "onReady" == a && this.B && H(na(c, this.g), 0)
        }
    }
};
g.Sd = function(a, b) {
    if (!this.H()) {
        var c = Wg(this, b);
        c && this.S.unsubscribe(a, c)
    }
};
function Wg(a, b) {
    var c = b;
    if ("string" == typeof b) {
        if (a.qa[b])
            return a.qa[b];
        c = function() {
            var a = r(b);
            a && a.apply(l, arguments)
        };
        a.qa[b] = c
    }
    return c ? c : null
}
function dh(a, b) {
    var c = "ytPlayer" + b + a.M;
    a.A[b] = c;
    l[c] = function(c) {
        var e = H(function() {
            if (!a.H()) {
                a.S.publish(b, c);
                var f = a.Y, h = e.toString();
                h in f && delete f[h]
            }
        }, 0);
        db(a.Y, e.toString())
    };
    return c
}
g.jd = function(a) {
    a = a ? zc : yc;
    for (var b = a(document.activeElement); b && (1 != b.nodeType || (b.focus(), b != document.activeElement));)
        b = a(b)
};
g.ld = function(a) {
    var b = {};
    b.volume = isNaN(a.volume) ? Qg().volume : Math.min(Math.max(a.volume, 0), 100);
    b.muted = void 0 == a.muted ? Qg().muted : a.muted;
    R("yt-player-volume", b, 2592E3)
};
g.kd = function(a) {
    5 == a && Yg(this)
};
g.md = function(a) {
    K("WATCH_LATER_VIDEO_ADDED", a)
};
g.nd = function(a) {
    K("WATCH_LATER_VIDEO_REMOVED", a)
};
g.we = function() {
    bh(this);
    this.o = "unsupported";
    var a = 'Adobe Flash Player or an HTML5 supported browser is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="/html5">Learn more about upgrading to an HTML5 browser</a>', b = navigator.userAgent.match(/Version\/(\d).*Safari/);
    b && 5 <= parseInt(b[1], 10) && (a = 'Adobe Flash Player or QuickTime is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/"> Get the latest Flash Player</a> <br> <a href="http://www.apple.com/quicktime/download/">Get the latest version of QuickTime</a>');
    b = this.G.messages.player_fallback || a;
    a = sc("player-unavailable");
    if (sc("unavailable-submessage") && a) {
        sc("unavailable-submessage").innerHTML = b;
        var b = a || document, c = null;
        b.querySelectorAll && b.querySelector ? c = b.querySelector(".icon") : c = vc("icon", a)[0];
        if (c = b = c || null)
            c = b ? b.dataset ? lb("icon")in b.dataset : b.hasAttribute?!!b.hasAttribute("data-icon") : !!b.getAttribute("data-icon") : !1;
        c && (b.src = C(b, "icon"));
        Xb(a, "hid");
        Wb(sc("player"), "off-screen-trigger")
    }
};
g.Rd = function() {
    return this.o || ah(this)
};
g.Qd = function() {
    return this.Ua
};
function ah(a) {
    return (a = Zg(a)) ? "div" == a.tagName.toLowerCase() ? "html5" : "flash" : null
}
function bh(a) {
    jg().dcp = w();
    hg("dcp");
    a.cancel();
    Sg(a);
    a.o = null;
    a.G && (a.G.loaded=!1);
    var b = Zg(a);
    "html5" == ah(a) ? a.xa = b : b && b.destroy && b.destroy();
    for (a = a.eb; b = a.firstChild;)
        a.removeChild(b)
}
g.cancel = function() {
    if (this.D) {
        var a = this.D;
        this.G.assets.js && a && (a = "" + ia(a), (a = Ob[a]) && Fb(a))
    }
    I(this.tb);
    this.W=!1
};
g.F = function() {
    bh(this);
    this.qa = null;
    for (var a in this.A)
        l[this.A[a]] = null;
    this.g = null;
    delete this.eb;
    delete this.k;
    this.G && (this.Ta = this.G = this.G.fallback = null);
    Rg.L.F.call(this)
};
var eh = {}, fh = "player_uid_" + (1E9 * Math.random()>>>0);
function gh(a, b) {
    a = u(a) ? tc(a) : a;
    b = af(b);
    var c = fh + "_" + ia(a), d = eh[c];
    if (d)
        return d.ac(b), d.g;
    d = new Rg(a, c);
    eh[c] = d;
    K("player-added", d.g);
    nb(d, na(hh, d));
    H(function() {
        d.ac(b)
    }, 0);
    return d.g
}
function ih() {
    for (var a in eh) {
        var b = eh[a];
        b && b.cancel()
    }
}
function jh(a) {
    if (a = sc(a))
        a = fh + "_" + ia(a), (a = eh[a]) && a.dispose()
}
function hh(a) {
    eh[a.M] = null
}
function kh(a) {
    a = sc(a);
    if (!a)
        return null;
    var b = fh + "_" + ia(a), c = eh[b];
    c || (c = new Rg(a, b), eh[b] = c);
    return c.g
};
var lh = r("yt.abuse.botguardInitialized") || Sb;
p("yt.abuse.botguardInitialized", lh, void 0);
var mh = r("yt.abuse.invokeBotguard") || Tb;
p("yt.abuse.invokeBotguard", mh, void 0);
var nh = r("yt.player.exports.navigate") || ld;
p("yt.player.exports.navigate", nh, void 0);
var oh = r("yt.player.embed") || gh;
p("yt.player.embed", oh, void 0);
var ph = r("yt.player.destroy") || jh;
p("yt.player.destroy", ph, void 0);
var qh = r("yt.player.cancelAll") || ih;
p("yt.player.cancelAll", qh, void 0);
var rh = r("yt.player.getPlayerByElement") || kh;
p("yt.player.getPlayerByElement", rh, void 0);
var sh = r("yt.player.exports.feedbackStart") || Ve;
p("yt.player.exports.feedbackStart", sh, void 0);
var th = r("yt.player.exports.feedbackShowArticle") || We;
p("yt.player.exports.feedbackShowArticle", th, void 0);
var uh = r("yt.util.activity.init") || Tc;
p("yt.util.activity.init", uh, void 0);
var vh = r("yt.util.activity.getTimeSinceActive") || Vc;
p("yt.util.activity.getTimeSinceActive", vh, void 0);
var wh = r("yt.util.activity.setTimestamp") || Uc;
p("yt.util.activity.setTimestamp", wh, void 0);
function xh(a) {
    var b = void 0;
    void 0 === b && (b = NaN);
    var c = r("yt.scheduler.instance.addJob");
    c ? (isNaN(b) && (b = 0), c(a, 0, b)) : isNaN(b) ? a() : H(a, b || 0)
};
function yh(a, b) {
    this.version = a;
    this.args = b
}
function zh(a) {
    if (!a.Ba) {
        var b = {};
        a.call(b);
        a.Ba = b.version
    }
    return a.Ba
}
function Ah(a, b) {
    function c() {
        a.apply(this, b.args)
    }
    if (!b.args ||!b.version)
        throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");
    var d;
    try {
        d = zh(a)
    } catch (e) {}
    if (!d || b.version != d)
        throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");
    c.prototype = a.prototype;
    try {
        return new c
    } catch (f) {
        throw f.message = "yt.pubsub2.Data.deserialize(): " + f.message, f;
    }
}
function Bh(a, b) {
    this.j = a;
    this.g = b
}
Bh.prototype.toString = function() {
    return this.j
};
var Ch = r("yt.pubsub2.instance_") || new F;
F.prototype.subscribe = F.prototype.subscribe;
F.prototype.unsubscribeByKey = F.prototype.ma;
F.prototype.publish = F.prototype.publish;
F.prototype.clear = F.prototype.clear;
p("yt.pubsub2.instance_", Ch, void 0);
var Dh = r("yt.pubsub2.subscribedKeys_") || {};
p("yt.pubsub2.subscribedKeys_", Dh, void 0);
var Eh = r("yt.pubsub2.topicToKeys_") || {};
p("yt.pubsub2.topicToKeys_", Eh, void 0);
var Fh = r("yt.pubsub2.isAsync_") || {};
p("yt.pubsub2.isAsync_", Fh, void 0);
p("yt.pubsub2.skipSubKey_", null, void 0);
function Gh(a, b) {
    var c = Hh();
    c && c.publish.call(c, a.toString(), a, b)
}
function Ih(a, b) {
    var c = Hh();
    if (!c)
        return 0;
    var d = c.subscribe(a.toString(), function(c, f) {
        if (!window.yt.pubsub2.skipSubKey_ || window.yt.pubsub2.skipSubKey_ != d) {
            var h = function() {
                if (Dh[d])
                    try {
                        if (f && a instanceof Bh && a != c)
                            try {
                                f = Ah(a.g, f)
                            } catch (h) {
                                throw h.message = "yt.pubsub2 cross-binary conversion error for " + a.toString() + ": " + h.message, h;
                            }
                            b.call(window, f)
                } catch (m) {
                    wb(m)
                }
            };
            Fh[a.toString()] ? r("yt.scheduler.instance") ? xh(h) : H(h, 0) : h()
        }
    });
    Dh[d]=!0;
    Eh[a.toString()] || (Eh[a.toString()] = []);
    Eh[a.toString()].push(d);
    return d
}
function Jh() {
    var a = Kh, b = Hh();
    b && (fa(a) && (a = [a]), A(a, function(a) {
        b.unsubscribeByKey(a);
        delete Dh[a]
    }))
}
function Hh() {
    return r("yt.pubsub2.instance_")
};
function Lh(a, b, c, d, e, f) {
    yh.call(this, 1, arguments);
    this.j = a;
    this.g = b;
    this.o = c || null;
    this.A = d || null;
    this.k = e || null;
    this.source = f || null
}
x(Lh, yh);
function Mh(a, b, c, d, e, f, h) {
    yh.call(this, 1, arguments);
    this.j = a;
    this.Sb = b;
    this.g = c;
    this.o = d || null;
    this.A = e || null;
    this.k = f || null;
    this.source = h || null
}
x(Mh, yh);
var Nh = new Bh("subscription-subscribe", Lh), Oh = new Bh("subscription-subscribe-external", Lh), Ph = new Bh("subscription-unsubscribe", Mh), Qh = new Bh("subscription-external-unsubscribe", Mh);
function Rh(a, b, c) {
    var d = document.location.protocol + "//" + document.domain + "/post_login";
    b && (d = ed(d, "mode", b));
    b = ed("/signin?context=popup", "next", d);
    c && (b = ed(b, "feature", c));
    if (c = window.open(b, "loginPopup", "width=375,height=440,resizable=yes,scrollbars=yes", !0))
        b = J("LOGGED_IN", function(b) {
            Fb(G("LOGGED_IN_PUBSUB_KEY"));
            rb("LOGGED_IN", !0);
            a(b)
        }), rb("LOGGED_IN_PUBSUB_KEY", b), c.moveTo((screen.width - 375) / 2, (screen.height - 440) / 2)
}
p("yt.pubsub.publish", K, void 0);
var Sh = null;
"undefined" != typeof XMLHttpRequest ? Sh = function() {
    return new XMLHttpRequest
} : "undefined" != typeof ActiveXObject && (Sh = function() {
    return new ActiveXObject("Microsoft.XMLHTTP")
});
function Th(a, b, c, d, e, f, h) {
    function k() {
        4 == (m && "readyState"in m ? m.readyState : 0) && b && ub(b)(m)
    }
    var m = Sh && Sh();
    if (!("open"in m))
        return null;
    "onloadend"in m ? m.addEventListener("loadend", k, !1) : m.onreadystatechange = k;
    c = (c || "GET").toUpperCase();
    d = d || "";
    m.open(c, a, !0);
    f && (m.responseType = f);
    h && (m.withCredentials=!0);
    f = "POST" == c;
    if (e = Uh(a, e))
        for (var q in e)
            m.setRequestHeader(q, e[q]), "content-type" == q.toLowerCase() && (f=!1);
    f && m.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    m.send(d);
    return m
}
function Uh(a, b) {
    b = b || {};
    for (var c in Vh) {
        var d = G(Vh[c]), e;
        if (e = d) {
            e = a;
            var f = void 0;
            f = window.location.href;
            var h = Xc(e)[1] || null, k = hd(e);
            h && k ? (e = Xc(e), f = Xc(f), e = e[3] == f[3] && e[1] == f[1] && e[4] == f[4]) : e = k ? hd(f) == k && (Number(Xc(f)[4] || null) || null) == (Number(Xc(e)[4] || null) || null) : !0;
            e || (e = c, f = G("CORS_HEADER_WHITELIST") || {}, e = (h = hd(a)) ? (f = f[h]) ? Ha(f, e) : !1 : !0)
        }
        e && (b[c] = d)
    }
    return b
}
function Wh(a, b) {
    var c = G("XSRF_FIELD_NAME"), d;
    b.headers && (d = b.headers["Content-Type"]);
    return !b.$e && (!hd(a) || hd(a) == document.location.hostname) && "POST" == b.method && (!d || "application/x-www-form-urlencoded" == d)&&!(b.T && b.T[c])
}
function Xh(a, b) {
    var c = b.format || "JSON";
    b.Ye && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
    var d = G("XSRF_FIELD_NAME"), e = G("XSRF_TOKEN"), f = b.jc;
    f && (f[d] && delete f[d], a = id(a, f));
    var h = b.Ze || "", f = b.T;
    Wh(a, b) && (f || (f = {}), f[d] = e);
    f && u(h) && (d = gd(h), ib(d, f), h = dd(d));
    var k=!1, m, q = Th(a, function(a) {
        if (!k) {
            k=!0;
            m && I(m);
            var d;
            t:
            switch (a && "status"in a ? a.status : - 1) {
            case 200:
            case 201:
            case 202:
            case 203:
            case 204:
            case 205:
            case 206:
            case 304:
                d =
                !0;
                break t;
            default:
                d=!1
            }
            var e = null;
            if (d || 400 <= a.status && 500 > a.status)
                e = Yh(c, a);
            if (d)
                t: {
                switch (c) {
                case "XML":
                    d = 0 == parseInt(e && e.return_code, 10);
                    break t;
                case "RAW":
                    d=!0;
                    break t
                }
                d=!!e
            }
            var e = e || {}, f = b.context || l;
            d ? b.aa && b.aa.call(f, a, e) : b.onError && b.onError.call(f, a, e);
            b.kc && b.kc.call(f, a, e)
        }
    }, b.method, h, b.headers, b.responseType, b.withCredentials);
    b.wb && 0 < b.timeout && (m = H(function() {
        k || (k=!0, q.abort(), I(m), b.wb.call(b.context || l, q))
    }, b.timeout));
    return q
}
function Yh(a, b) {
    var c = null;
    switch (a) {
    case "JSON":
        var d = b.responseText, e = b.getResponseHeader("Content-Type") || "";
        d && 0 <= e.indexOf("json") && (c = ug(d));
        break;
    case "XML":
        if (d = (d = b.responseXML) ? Zh(d) : null)
            c = {}, A(d.getElementsByTagName("*"), function(a) {
                c[a.tagName] = $h(a)
            })
    }
    return c
}
function Zh(a) {
    return a ? (a = ("responseXML"in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : null : null
}
function $h(a) {
    var b = "";
    A(a.childNodes, function(a) {
        b += a.nodeValue
    });
    return b
}
var Vh = {
    "X-YouTube-Page-CL": "PAGE_CL",
    "X-YouTube-Page-Timestamp": "PAGE_BUILD_TIMESTAMP",
    "X-YouTube-Variants-Checksum": "VARIANTS_CHECKSUM"
};
function ai() {
    var a = G("PLAYER_CONFIG");
    return a && a.args && void 0 !== a.args.authuser?!0 : !(!G("SESSION_INDEX")&&!G("LOGGED_IN"))
};
var bi = {}, ci = "ontouchstart"in document;
function di(a, b, c) {
    var d;
    switch (a) {
    case "mouseover":
    case "mouseout":
        d = 3;
        break;
    case "mouseenter":
    case "mouseleave":
        d = 9
    }
    return Cc(c, function(a) {
        return Vb(a, b)
    }, !0, d)
}
function ei(a) {
    var b = "mouseover" == a.type && "mouseenter"in bi || "mouseout" == a.type && "mouseleave"in bi, c = a.type in bi || b;
    if ("HTML" != a.target.tagName && c) {
        if (b) {
            var b = "mouseover" == a.type ? "mouseenter": "mouseleave", c = bi[b], d;
            for (d in c.fa) {
                var e = di(b, d, a.target);
                e&&!Cc(a.relatedTarget, function(a) {
                    return a == e
                }, !0) && c.publish(d, e, b, a)
            }
        }
        if (b = bi[a.type])
            for (d in b.fa)(e = di(a.type, d, a.target)
                ) && b.publish(d, e, a.type, a)
    }
}
O(document, "blur", ei, !0);
O(document, "change", ei, !0);
O(document, "click", ei);
O(document, "focus", ei, !0);
O(document, "mouseover", ei);
O(document, "mouseout", ei);
O(document, "mousedown", ei);
O(document, "keydown", ei);
O(document, "keyup", ei);
O(document, "keypress", ei);
O(document, "cut", ei);
O(document, "paste", ei);
ci && (O(document, "touchstart", ei), O(document, "touchend", ei), O(document, "touchcancel", ei));
function fi() {
    this.j = {};
    this.k = []
}
function gi(a, b) {
    return "yt-uix" + (a.lc ? "-" + a.lc : "") + (b ? "-" + b : "")
}
fi.prototype.init = s;
fi.prototype.dispose = s;
function hi(a, b, c) {
    b = J(b, c, a);
    a.k.push(b)
}
function ii(a, b, c) {
    var d = gi(a, void 0), e = v(c, a);
    b in bi || (bi[b] = new F);
    bi[b].subscribe(d, e);
    a.j[c] = e
}
function ji(a, b) {
    kb(a, "tooltip-text", b)
}
fi.prototype.removeData = function(a, b) {
    a && (a.dataset ? delete a.dataset[lb(b)] : a.removeAttribute("data-" + b))
};
function ki() {
    fi.call(this);
    this.g = {}
}
x(ki, fi);
ba(ki);
g = ki.prototype;
g.lc = "tooltip";
g.Lb = 0;
g.register = function() {
    ii(this, "mouseover", this.Wc);
    ii(this, "mouseout", this.Kb);
    ii(this, "click", this.Kb);
    ii(this, "touchstart", this.Je);
    ii(this, "touchend", this.Zc);
    ii(this, "touchcancel", this.Zc)
};
g.dispose = function() {
    for (var a in this.g)
        this.Kb(this.g[a]);
    this.g = {}
};
g.Wc = function(a) {
    if (!(this.Lb && 1E3 > w() - this.Lb)) {
        var b = parseInt(C(a, "tooltip-hide-timer"), 10);
        b && (this.removeData(a, "tooltip-hide-timer"), I(b));
        var b = v(function() {
            li(this, a);
            this.removeData(a, "tooltip-show-timer")
        }, this), c = parseInt(C(a, "tooltip-show-delay"), 10) || 0, b = H(b, c);
        kb(a, "tooltip-show-timer", b.toString());
        a.title && (ji(a, mi(a)), a.title = "");
        b = ia(a).toString();
        this.g[b] = a
    }
};
g.Kb = function(a) {
    var b = parseInt(C(a, "tooltip-show-timer"), 10);
    b && (I(b), this.removeData(a, "tooltip-show-timer"));
    b = v(function() {
        if (a) {
            var b = sc(ni(this, a));
            b && (oi(b), b && b.parentNode && b.parentNode.removeChild(b), this.removeData(a, "content-id"))
        }
        this.removeData(a, "tooltip-hide-timer")
    }, this);
    b = H(b, 50);
    kb(a, "tooltip-hide-timer", b.toString());
    if (b = C(a, "tooltip-text"))
        a.title = b;
    b = ia(a).toString();
    delete this.g[b]
};
g.Je = function(a, b) {
    this.Lb = 0;
    var c = di(b, gi(this), null[0].target);
    this.Wc(c)
};
g.Zc = function(a, b) {
    this.Lb = w();
    var c = di(b, gi(this), null[0].target);
    this.Kb(c)
};
function pi(a, b) {
    ji(a, b);
    var c = C(a, "content-id");
    if (c = sc(c))
        c.innerHTML = b
}
function mi(a) {
    return C(a, "tooltip-text") || a.title
}
function li(a, b) {
    if (b) {
        var c = mi(b);
        if (c) {
            var d = sc(ni(a, b));
            if (!d) {
                d = document.createElement("div");
                d.id = ni(a, b);
                d.className = gi(a, "tip");
                var e = document.createElement("div");
                e.className = gi(a, "tip-body");
                var f = document.createElement("div");
                f.className = gi(a, "tip-arrow");
                var h = document.createElement("div");
                h.className = gi(a, "tip-content");
                var k = qi(a, b), m = ni(a, b, "content");
                h.id = m;
                kb(b, "content-id", m);
                e.appendChild(h);
                k && d.appendChild(k);
                d.appendChild(e);
                d.appendChild(f);
                (Gc() || document.body).appendChild(d);
                pi(b, c);
                (c = parseInt(C(b, "tooltip-max-width"), 10)) && e.offsetWidth > c && (e.style.width = c + "px", Wb(h, gi(a, "normal-wrap")));
                h = Vb(b, gi(a, "reverse"));
                ri(a, b, d, e, k, h) || ri(a, b, d, e, k, !h);
                var q = gi(a, "tip-visible");
                H(function() {
                    Wb(d, q)
                }, 0)
            }
        }
    }
}
function ri(a, b, c, d, e, f) {
    Yb(c, gi(a, "tip-reverse"), f);
    var h = 0;
    f && (h = 1);
    a = Ie(b);
    f = new L((a.width - 10) / 2, f ? a.height : 0);
    var k = Ge(b);
    f = new L(k.x + f.x, k.y + f.y);
    f = f.clone();
    var k = (h & 4 && "rtl" == De(c, "direction") ? h^2 : h)&-5, h = Ie(c), m = h.clone(), q;
    q = f.clone();
    m = m.clone();
    0 != k && (k & 2 && (q.x -= m.width + 0), k & 1 && (q.y -= m.height + 0));
    f = new Be(0, 0, 0, 0);
    f.left = q.x;
    f.top = q.y;
    f.width = m.width;
    f.height = m.height;
    q = new L(f.left, f.top);
    m = cc && (ec || hc) && lc("1.9");
    q instanceof L ? (k = q.x, q = q.y) : (k = q, q = void 0);
    c.style.left = He(k, m);
    c.style.top =
    He(q, m);
    m = new Zb(f.width, f.height);
    if (!(h == m || h && m && h.width == m.width && h.height == m.height))
        if (h = m, f = rc(c), f = pc(f), k = xc(f.g), !N || lc("10") || k && lc("8"))
            f = c.style, cc ? f.MozBoxSizing = "border-box" : dc ? f.WebkitBoxSizing = "border-box" : f.boxSizing = "border-box", f.width = Math.max(h.width, 0) + "px", f.height = Math.max(h.height, 0) + "px";
        else if (f = c.style, k) {
            if (N) {
                k = Le(c, "paddingLeft");
                m = Le(c, "paddingRight");
                q = Le(c, "paddingTop");
                var U = Le(c, "paddingBottom"), k = new Ae(q, m, U, k)
            } else 
                k = Ce(c, "paddingLeft"), m = Ce(c, "paddingRight"),
                q = Ce(c, "paddingTop"), U = Ce(c, "paddingBottom"), k = new Ae(parseFloat(q), parseFloat(m), parseFloat(U), parseFloat(k));
                if (N&&!mc(9)) {
                    m = Ne(c, "borderLeft");
                    q = Ne(c, "borderRight");
                    var U = Ne(c, "borderTop"), ea = Ne(c, "borderBottom"), m = new Ae(U, q, ea, m)
                } else 
                    m = Ce(c, "borderLeftWidth"), q = Ce(c, "borderRightWidth"), U = Ce(c, "borderTopWidth"), ea = Ce(c, "borderBottomWidth"), m = new Ae(parseFloat(U), parseFloat(q), parseFloat(ea), parseFloat(m));
                    f.pixelWidth = h.width - m.left - k.left - k.right - m.right;
                    f.pixelHeight = h.height - m.top - k.top - k.bottom -
                    m.bottom
            } else 
                f.pixelWidth = h.width, f.pixelHeight = h.height;
    h = window.document;
    h = xc(h) ? h.documentElement : h.body;
    h = new Zb(h.clientWidth, h.clientHeight);
    if (1 == c.nodeType) {
        c.getBoundingClientRect ? (f = Ee(c), f = new L(f.left, f.top)) : (f = pc(c), f = wc(f.g), k = Ge(c), f = new L(k.x - f.x, k.y - f.y));
        if (cc&&!lc(12)) {
            n:
            {
                k = ya();
                if (void 0 === c.style[k] && (k = (dc ? "Webkit" : cc ? "Moz" : N ? "ms" : bc ? "O" : null) + za(k), void 0 !== c.style[k])) {
                    k = (dc ? "-webkit" : cc ? "-moz" : N ? "-ms" : bc ? "-o" : null) + "-transform";
                    break n
                }
                k = "transform"
            }
            c = (c = De(c, k) || De(c, "transform")) ?
            (c = c.match(Oe)) ? new L(parseFloat(c[1]), parseFloat(c[2])) : new L(0, 0) : new L(0, 0);
            c = new L(f.x + c.x, f.y + c.y)
        } else 
            c = f;
        m = c
    } else 
        f = ga(c.j), k = c, c.targetTouches && c.targetTouches.length ? k = c.targetTouches[0] : f && c.g.targetTouches && c.g.targetTouches.length && (k = c.g.targetTouches[0]), m = new L(k.clientX, k.clientY);
    c = Ie(d);
    q = Math.floor(c.width / 2);
    f=!!(h.height < m.y + a.height);
    a=!!(m.y < a.height);
    k=!!(m.x < q);
    h=!!(h.width < m.x + q);
    m = (c.width + 3)/-2 - - 5;
    b = C(b, "force-tooltip-direction");
    if ("left" == b || k)
        m =- 5;
    else if ("right" ==
    b || h)
        m = 20 - c.width - 3;
    b = Math.floor(m) + "px";
    d.style.left = b;
    e && (e.style.left = b, e.style.height = c.height + "px", e.style.width = c.width + "px");
    return !(f || a)
}
function ni(a, b, c) {
    a = gi(a);
    var d = b.__yt_uid_key;
    d || (d = Ec(), b.__yt_uid_key = d);
    b = a + d;
    c && (b += "-" + c);
    return b
}
function qi(a, b) {
    var c = null;
    fc && Vb(b, gi(a, "masked")) && ((c = sc("yt-uix-tooltip-shared-mask")) ? (c.parentNode.removeChild(c), Qe(c)) : (c = document.createElement("iframe"), c.src = 'javascript:""', c.id = "yt-uix-tooltip-shared-mask", c.className = gi(a, "tip-mask")));
    return c
}
function oi(a) {
    var b = sc("yt-uix-tooltip-shared-mask"), c = b && Cc(b, function(b) {
        return b == a
    }, !1, 2);
    b && c && (b.parentNode.removeChild(b), Re(b), document.body.appendChild(b))
};
function si() {
    fi.call(this)
}
x(si, fi);
ba(si);
si.prototype.lc = "subscription-button";
si.prototype.register = function() {
    ii(this, "click", this.Tc);
    hi(this, "subscription-subscribe-loading", this.Vc);
    hi(this, "subscription-subscribe-loaded", this.Uc);
    hi(this, "subscription-unsubscirbe-loading", this.Vc);
    hi(this, "subscription-unsubscribe-loaded", this.Uc);
    hi(this, "subscription-subscribe-success", this.Ae);
    hi(this, "subscription-unsubscribe-success", this.Be);
    hi(this, "subscription-enable-ypc", this.ze);
    hi(this, "subscription-disable-ypc", this.ye)
};
var Bc = {
    Xc: "hover-enabled",
    Ce: "yt-uix-button-subscribe",
    De: "yt-uix-button-subscribed",
    ff: "ypc-enabled",
    Pe: "yt-uix-button-subscription-container",
    Qe: "yt-subscription-button-disabled-mask-container"
}, ti = {
    gf: "channel-external-id",
    Ee: "subscriber-count-show-when-subscribed",
    Fe: "subscriber-count-tooltip",
    Ge: "subscriber-count-title",
    hf: "href",
    cd: "is-subscribed",
    jf: "parent-url",
    kf: "sessionlink",
    He: "style-type",
    ed: "subscription-id",
    lf: "target",
    Ne: "ypc-enabled",
    fd: "ypc-offers-url"
};
g = si.prototype;
g.Tc = function(a) {
    var b = C(a, "href"), c = ai();
    if (b)
        a = C(a, "target") || "_self", window.open(b, a);
    else if (c) {
        var b = C(a, "channel-external-id"), c = C(a, "sessionlink"), d;
        if (C(a, "ypc-enabled")) {
            d = C(a, "ypc-item-type");
            var e = C(a, "ypc-item-id"), f = C(a, ti.fd);
            d = {
                itemType: d,
                itemId: e,
                offersUrl: f,
                subscriptionElement: a
            }
        } else 
            d = null;
        e = C(a, "parent-url");
        C(a, "is-subscribed") ? (f = C(a, "subscription-id"), Gh(Ph, new Mh(b, f, d, a, c, e))) : Gh(Nh, new Lh(b, d, a, c, e))
    } else 
        ui(this, a)
};
g.Vc = function(a) {
    this.cb(a, this.$c, !0)
};
g.Uc = function(a) {
    this.cb(a, this.$c, !1)
};
g.Ae = function(a, b) {
    this.cb(a, this.ad, !0, b)
};
g.Be = function(a) {
    this.cb(a, this.ad, !1)
};
g.ze = function(a) {
    this.cb(a, this.Le)
};
g.ye = function(a) {
    this.cb(a, this.Ke)
};
g.ad = function(a, b, c) {
    b ? (kb(a, ti.cd, "true"), c && kb(a, ti.ed, c)) : (this.removeData(a, ti.cd), this.removeData(a, ti.ed));
    vi(a)
};
g.$c = function(a, b) {
    var c;
    c = Ac(a);
    Yb(c, Bc.Qe, b);
    a.setAttribute("aria-busy", b ? "true" : "false");
    a.disabled = b
};
function vi(a) {
    var b = C(a, ti.He), c=!!C(a, "is-subscribed"), b = "-" + b, d = Bc.De + b;
    Yb(a, Bc.Ce + b, !c);
    Yb(a, d, c);
    C(a, ti.Fe)&&!C(a, ti.Ee) && (b = gi(ki.getInstance()), Yb(a, b, !c), a.title = c ? "" : C(a, ti.Ge));
    c ? H(function() {
        Wb(a, Bc.Xc)
    }, 1E3) : Xb(a, Bc.Xc)
}
g.Le = function(a) {
    var b=!!C(a, "ypc-item-type"), c=!!C(a, "ypc-item-id"), d=!!C(a, ti.fd);
    !C(a, "ypc-enabled") && b && c && d && (Wb(a, "ypc-enabled"), kb(a, ti.Ne, "true"))
};
g.Ke = function(a) {
    C(a, "ypc-enabled") && (Xb(a, "ypc-enabled"), this.removeData(a, "ypc-enabled"))
};
function wi(a, b) {
    var c = uc(gi(a));
    return Ca(c, function(a) {
        return b == C(a, "channel-external-id")
    }, a)
}
g.Re = function(a, b, c) {
    var d = Sa(arguments, 2);
    A(a, function(a) {
        b.apply(this, Oa(a, d))
    }, this)
};
g.cb = function(a, b, c) {
    var d = wi(this, a), d = Oa([d], Sa(arguments, 1));
    this.Re.apply(this, d)
};
function ui(a, b) {
    var c = v(function(a) {
        a.discoverable_subscriptions && rb("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS", a.discoverable_subscriptions);
        this.Tc(b)
    }, a);
    Rh(c, "subscribe", "sub_button")
};
var xi = window.yt && window.yt.uix && window.yt.uix.widgets_ || {};
p("yt.uix.widgets_", xi, void 0);
function yi(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented=!1;
    this.Fc=!0
}
yi.prototype.dispose = function() {};
yi.prototype.preventDefault = function() {
    this.defaultPrevented=!0;
    this.Fc=!1
};
function zi(a) {
    zi[" "](a);
    return a
}
zi[" "] = s;
var Ai=!N || mc(9), Bi = N&&!lc("9");
!dc || lc("528");
cc && lc("1.9b") || N && lc("8") || bc && lc("9.5") || dc && lc("528");
cc&&!lc("8") || N && lc("9");
function Ci(a, b) {
    yi.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.charCode = this.keyCode = this.button = this.clientY = this.clientX = 0;
    this.shiftKey = this.altKey = this.ctrlKey=!1;
    this.g = this.state = null;
    a && this.init(a, b)
}
x(Ci, yi);
Ci.prototype.init = function(a, b) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
        if (cc) {
            var e;
            t:
            {
                try {
                    zi(d.nodeName);
                    e=!0;
                    break t
                } catch (f) {}
                e=!1
            }
            e || (d = null)
        }
    } else 
        "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    this.relatedTarget = d;
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.state = a.state;
    this.g = a;
    a.defaultPrevented && this.preventDefault()
};
Ci.prototype.preventDefault = function() {
    Ci.L.preventDefault.call(this);
    var a = this.g;
    if (a.preventDefault)
        a.preventDefault();
    else if (a.returnValue=!1, Bi)
        try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                a.keyCode =- 1
    } catch (b) {}
};
Ci.prototype.j = function() {
    return this.g
};
var Di = "closure_listenable_" + (1E6 * Math.random() | 0), Ei = 0;
function Fi(a, b, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.Fb=!!d;
    this.Jb = e;
    this.key=++Ei;
    this.removed = this.Hb=!1
}
function Gi(a) {
    a.removed=!0;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.Jb = null
};
function Hi(a) {
    this.src = a;
    this.g = {};
    this.j = 0
}
Hi.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || (a = this.g[f] = [], this.j++);
    var h = Ii(a, b, d, e);
    - 1 < h ? (b = a[h], c || (b.Hb=!1)) : (b = new Fi(b, this.src, f, !!d, e), b.Hb = c, a.push(b));
    return b
};
Hi.prototype.remove = function(a, b, c, d) {
    a = a.toString();
    if (!(a in this.g))
        return !1;
    var e = this.g[a];
    b = Ii(e, b, c, d);
    return - 1 < b ? (Gi(e[b]), z.splice.call(e, b, 1), 0 == e.length && (delete this.g[a], this.j--), !0) : !1
};
function Ji(a, b) {
    var c = b.type;
    if (!(c in a.g))
        return !1;
    var d = Ma(a.g[c], b);
    d && (Gi(b), 0 == a.g[c].length && (delete a.g[c], a.j--));
    return d
}
Hi.prototype.removeAll = function(a) {
    a = a && a.toString();
    var b = 0, c;
    for (c in this.g)
        if (!a || c == a) {
            for (var d = this.g[c], e = 0; e < d.length; e++)
                ++b, Gi(d[e]);
                delete this.g[c];
                this.j--
        }
    return b
};
function Ki(a, b, c, d, e) {
    a = a.g[b.toString()];
    b =- 1;
    a && (b = Ii(a, c, d, e));
    return - 1 < b ? a[b] : null
}
function Ii(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.removed && f.listener == b && f.Fb==!!c && f.Jb == d)
            return e
    }
    return - 1
};
var Li = "closure_lm_" + (1E6 * Math.random() | 0), Mi = {}, Ni = 0;
function Oi(a, b, c, d, e) {
    if (t(b)) {
        for (var f = 0; f < b.length; f++)
            Oi(a, b[f], c, d, e);
        return null
    }
    c = Pi(c);
    if (a && a[Di])
        a = a.listen(b, c, d, e);
    else {
        if (!b)
            throw Error("Invalid event type");
        var f=!!d, h = Qi(a);
        h || (a[Li] = h = new Hi(a));
        c = h.add(b, c, !1, d, e);
        c.proxy || (d = Ri(), c.proxy = d, d.src = a, d.listener = c, a.addEventListener ? a.addEventListener(b.toString(), d, f) : a.attachEvent(Si(b.toString()), d), Ni++);
        a = c
    }
    return a
}
function Ri() {
    var a = Ti, b = Ai ? function(c) {
        return a.call(b.src, b.listener, c)
    }
    : function(c) {
        c = a.call(b.src, b.listener, c);
        if (!c)
            return c
    };
    return b
}
function Ui(a, b, c, d, e) {
    if (t(b))
        for (var f = 0; f < b.length; f++)
            Ui(a, b[f], c, d, e);
    else 
        c = Pi(c), a && a[Di] ? a.$b(b, c, d, e) : a && (a = Qi(a)) && (b = Ki(a, b, c, !!d, e)) && Vi(b)
}
function Vi(a) {
    if (fa(a) ||!a || a.removed)
        return !1;
    var b = a.src;
    if (b && b[Di])
        return Ji(b.Ca, a);
    var c = a.type, d = a.proxy;
    b.removeEventListener ? b.removeEventListener(c, d, a.Fb) : b.detachEvent && b.detachEvent(Si(c), d);
    Ni--;
    (c = Qi(b)) ? (Ji(c, a), 0 == c.j && (c.src = null, b[Li] = null)) : Gi(a);
    return !0
}
function Si(a) {
    return a in Mi ? Mi[a] : Mi[a] = "on" + a
}
function Wi(a, b, c, d) {
    var e = 1;
    if (a = Qi(a))
        if (b = a.g[b.toString()])
            for (b = b.concat(), a = 0; a < b.length; a++) {
                var f = b[a];
                f && f.Fb == c&&!f.removed && (e&=!1 !== Xi(f, d))
            }
    return Boolean(e)
}
function Xi(a, b) {
    var c = a.listener, d = a.Jb || a.src;
    a.Hb && Vi(a);
    return c.call(d, b)
}
function Ti(a, b) {
    if (a.removed)
        return !0;
    if (!Ai) {
        var c = b || r("window.event"), d = new Ci(c, this), e=!0;
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
            for (var f = a.type, k = c.length - 1; 0 <= k; k--)
                d.currentTarget = c[k], e&=Wi(c[k], f, !0, d);
            for (k = 0; k < c.length; k++)
                d.currentTarget = c[k], e&=Wi(c[k], f, !1, d)
            }
        return e
    }
    return Xi(a, new Ci(b, this))
}
function Qi(a) {
    a = a[Li];
    return a instanceof Hi ? a : null
}
var Yi = "__closure_events_fn_" + (1E9 * Math.random()>>>0);
function Pi(a) {
    if (ga(a))
        return a;
    a[Yi] || (a[Yi] = function(b) {
        return a.handleEvent(b)
    });
    return a[Yi]
};
function Zi() {
    D.call(this);
    this.Ca = new Hi(this);
    this.tb = this;
    this.pa = null
}
x(Zi, D);
Zi.prototype[Di]=!0;
g = Zi.prototype;
g.addEventListener = function(a, b, c, d) {
    Oi(this, a, b, c, d)
};
g.removeEventListener = function(a, b, c, d) {
    Ui(this, a, b, c, d)
};
function $i(a, b) {
    var c, d = a.pa;
    if (d) {
        c = [];
        for (var e = 1; d; d = d.pa)
            c.push(d), ++e
    }
    var d = a.tb, e = b, f = e.type || e;
    if (u(e))
        e = new yi(e, d);
    else if (e instanceof yi)
        e.target = e.target || d;
    else {
        var h = e, e = new yi(f, d);
        ib(e, h)
    }
    var h=!0, k;
    if (c)
        for (var m = c.length - 1; 0 <= m; m--)
            k = e.currentTarget = c[m], h = aj(k, f, !0, e) && h;
    k = e.currentTarget = d;
    h = aj(k, f, !0, e) && h;
    h = aj(k, f, !1, e) && h;
    if (c)
        for (m = 0; m < c.length; m++)
            k = e.currentTarget = c[m], h = aj(k, f, !1, e) && h
}
g.F = function() {
    Zi.L.F.call(this);
    this.removeAllListeners();
    this.pa = null
};
g.listen = function(a, b, c, d) {
    return this.Ca.add(String(a), b, !1, c, d)
};
g.$b = function(a, b, c, d) {
    return this.Ca.remove(String(a), b, c, d)
};
g.removeAllListeners = function(a) {
    return this.Ca ? this.Ca.removeAll(a) : 0
};
function aj(a, b, c, d) {
    b = a.Ca.g[String(b)];
    if (!b)
        return !0;
    b = b.concat();
    for (var e=!0, f = 0; f < b.length; ++f) {
        var h = b[f];
        if (h&&!h.removed && h.Fb == c) {
            var k = h.listener, m = h.Jb || h.src;
            h.Hb && Ji(a.Ca, h);
            e=!1 !== k.call(m, d) && e
        }
    }
    return e && 0 != d.Fc
};
function bj(a, b) {
    Zi.call(this);
    this.g = a || 1;
    this.j = b || l;
    this.k = v(this.wd, this);
    this.A = w()
}
x(bj, Zi);
g = bj.prototype;
g.enabled=!1;
g.ga = null;
function cj(a, b) {
    a.g = b;
    a.ga && a.enabled ? (a.stop(), a.start()) : a.ga && a.stop()
}
g.wd = function() {
    if (this.enabled) {
        var a = w() - this.A;
        0 < a && a < .8 * this.g ? this.ga = this.j.setTimeout(this.k, this.g - a) : (this.ga && (this.j.clearTimeout(this.ga), this.ga = null), $i(this, "tick"), this.enabled && (this.ga = this.j.setTimeout(this.k, this.g), this.A = w()))
    }
};
g.start = function() {
    this.enabled=!0;
    this.ga || (this.ga = this.j.setTimeout(this.k, this.g), this.A = w())
};
g.stop = function() {
    this.enabled=!1;
    this.ga && (this.j.clearTimeout(this.ga), this.ga = null)
};
g.F = function() {
    bj.L.F.call(this);
    this.stop();
    delete this.j
};
function dj(a, b, c) {
    if (ga(a))
        c && (a = v(a, c));
    else if (a && "function" == typeof a.handleEvent)
        a = v(a.handleEvent, a);
    else 
        throw Error("Invalid listener argument");
    return 2147483647 < b?-1 : l.setTimeout(a, b || 0)
};
var ej = {
    auto: 0,
    tiny: 144,
    light: 144,
    small: 240,
    medium: 360,
    large: 480,
    hd720: 720,
    hd1080: 1080,
    hd1440: 1440,
    highres: 2160
};
function T() {
    D.call(this);
    this.A = new F;
    nb(this, na(E, this.A))
}
x(T, D);
T.prototype.subscribe = function(a, b, c) {
    return this.H() ? 0 : this.A.subscribe(a, b, c)
};
T.prototype.unsubscribe = function(a, b, c) {
    return this.H()?!1 : this.A.unsubscribe(a, b, c)
};
T.prototype.ma = function(a) {
    return this.H()?!1 : this.A.ma(a)
};
T.prototype.publish = function(a, b) {
    return this.H()?!1 : this.A.publish.apply(this.A, arguments)
};
function fj(a, b, c) {
    this.j = a || 0;
    this.k = b || 0;
    this.g = c
}
fj.prototype.equals = function(a) {
    return this.j == a.j && this.k == a.k && this.g == a.g
};
function gj(a) {
    new fj(ej.auto || 0, ej[a] || 0, !1)
}
gj("large");
gj("auto");
var hj;
var ij = M, jj = ij.match(/\((iPad|iPhone|iPod)( Simulator)?;/);
if (!jj || 2 > jj.length)
    hj = void 0;
else {
    var kj = ij.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d_\d)[_ ]/);
    hj = kj && 6 == kj.length ? Number(kj[5].replace("_", ".")) : 0
}
0 <= hj && 0 <= M.search("Safari") && M.search("Version");
function lj(a) {
    return (0 == a.search("cue") || 0 == a.search("load")) && "loadModule" != a
}
function mj(a, b, c) {
    u(a) && (a = {
        mediaContentUrl: a,
        startSeconds: b,
        suggestedQuality: c
    });
    b = a;
    c = /\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);
    b.videoId = c && c[2] ? c[2] : null;
    return nj(a)
}
function nj(a, b, c) {
    if (ha(a)) {
        b = "endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");
        c = {};
        for (var d = 0; d < b.length; d++) {
            var e = b[d];
            a[e] && (c[e] = a[e])
        }
        return c
    }
    return {
        videoId: a,
        startSeconds: b,
        suggestedQuality: c
    }
}
function oj(a, b, c, d) {
    if (ha(a)&&!t(a)) {
        b = "playlist list listType index startSeconds suggestedQuality".split(" ");
        c = {};
        for (d = 0; d < b.length; d++) {
            var e = b[d];
            a[e] && (c[e] = a[e])
        }
        return c
    }
    c = {
        index: b,
        startSeconds: c,
        suggestedQuality: d
    };
    u(a) && 16 == a.length ? c.list = "PL" + a : c.playlist = a;
    return c
}
function pj(a) {
    var b = a.video_id || a.videoId;
    if (u(b)) {
        var c = S("yt-player-two-stage-token") || {}, d = S("yt-player-two-stage-token") || {};
        n(void 0) ? d[b] = void 0 : delete d[b];
        R("yt-player-two-stage-token", d, 300);
        (b = c[b]) && (a.two_stage_token = b)
    }
};
var qj = w(), rj = null, sj = Array(50), tj =- 1, uj=!1;
function vj(a) {
    wj();
    rj.push(a);
    xj(rj)
}
function yj(a) {
    var b = r("yt.mdx.remote.debug.handlers_");
    Ma(b || [], a)
}
function zj(a, b) {
    wj();
    var c = rj, d = Aj(a, String(b));
    Ia(c) ? Bj(d) : (xj(c), A(c, function(a) {
        a(d)
    }))
}
function wj() {
    rj || (rj = r("yt.mdx.remote.debug.handlers_") || [], p("yt.mdx.remote.debug.handlers_", rj, void 0))
}
function Bj(a) {
    var b = (tj + 1)%50;
    tj = b;
    sj[b] = a;
    uj || (uj = 49 == b)
}
function xj(a) {
    var b = sj;
    if (b[0]) {
        var c = tj, d = uj ? c: - 1;
        do {
            var d = (d + 1)%50, e = b[d];
            A(a, function(a) {
                a(e)
            })
        }
        while (d != c);
        sj = Array(50);
        tj =- 1;
        uj=!1
    }
}
function Aj(a, b) {
    var c = (w() - qj) / 1E3;
    c.toFixed && (c = c.toFixed(3));
    var d = [];
    d.push("[", c + "s", "] ");
    d.push("[", "yt.mdx.remote", "] ");
    d.push(a + ": " + b, "\n");
    return d.join("")
};
function Cj(a) {
    a = a || {};
    this.name = a.name || "";
    this.id = a.id || a.screenId || "";
    this.token = a.token || a.loungeToken || "";
    this.uuid = a.uuid || a.dialId || ""
}
function Dj(a, b) {
    return !!b && (a.id == b || a.uuid == b)
}
function Ej(a, b) {
    return a || b?!a!=!b?!1 : a.id == b.id : !0
}
function Fj(a, b) {
    return a || b?!a!=!b?!1 : a.id == b.id && a.token == b.token && a.name == b.name && a.uuid == b.uuid : !0
}
function Gj(a) {
    return {
        name: a.name,
        screenId: a.id,
        loungeToken: a.token,
        dialId: a.uuid
    }
}
function Hj(a) {
    return new Cj(a)
}
function Ij(a) {
    return t(a) ? B(a, Hj) : []
}
function Jj(a) {
    return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + (a.token ? ".." + a.token.slice( - 6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice( - 6) : "-") + "}" : "null"
}
function Kj(a) {
    return t(a) ? "[" + B(a, Jj).join(",") + "]" : "null"
};
var Lj = ["boadgeojelhgndaghljhdicfkmllpafd", "dliochdbjfkdbacpmhlcpmleaejidimm", "hfaagokkkhdbgiakmmlclaapfelnkoah", "fmfcbgogabcbclcofgocippekhfcmgfj", "enhhojjnijigcajfphajepfemndkmdlo"];
function Mj(a) {
    var b = S("yt-remote-cast-last-extension");
    b ? "none" == b ? a(null) : a(b) : Nj(0, a)
}
function Nj(a, b) {
    a == Lj.length ? (R("yt-remote-cast-last-extension", "none"), b(null)) : Oj(Lj[a], function(c) {
        c ? (c = Lj[a], R("yt-remote-cast-last-extension", c), b(c)) : Nj(a + 1, b)
    })
}
function Pj(a) {
    return "chrome-extension://" + a + "/cast_sender.js"
}
function Oj(a, b) {
    var c = new XMLHttpRequest;
    c.onreadystatechange = function() {
        4 == c.readyState && 200 == c.status && b(!0)
    };
    c.onerror = function() {
        b(!1)
    };
    try {
        c.open("GET", Pj(a), !0), c.send()
    } catch (d) {
        b(!1)
    }
}
function Qj(a) {
    window.__onGCastApiAvailable = a;
    Mj(function(b) {
        if (b) {
            zj("bootstrap", "Found cast extension: " + b);
            p("chrome.cast.extensionId", b, void 0);
            var c = document.createElement("script");
            c.src = Pj(b);
            c.onerror = function() {
                Rj();
                Ng("yt-remote-cast-last-extension");
                a(!1, "Extension JS failed to load.")
            };
            (document.head || document.documentElement).appendChild(c)
        } else 
            zj("bootstrap", "No cast extension found"), a(!1, "No cast extension found")
    })
}
function Rj() {
    window.__onGCastApiAvailable && delete window.__onGCastApiAvailable
};
function Sj(a) {
    this.port = this.k = "";
    this.g = "/api/lounge";
    this.j=!0;
    a = a || document.location.href;
    var b = Number(Xc(a)[4] || null) || null || "";
    b && (this.port = ":" + b);
    this.k = Zc(a) || "";
    a = M;
    0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > va(a, "10.0") && (this.j=!1))
}
function Tj(a, b, c, d) {
    var e = a.g;
    if (n(d) ? d : a.j)
        e = "https://" + a.k + a.port + a.g;
    return fd(e + b, c || {})
}
Sj.prototype.sendRequest = function(a, b, c, d, e, f, h) {
    a = {
        format: f ? "RAW": "JSON",
        method: a,
        context: this,
        timeout: 5E3,
        withCredentials: !!h,
        aa: na(this.o, d, !f),
        onError: na(this.A, e),
        wb: na(this.B, e)
    };
    c && (a.T = c, a.headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    });
    return Xh(b, a)
};
Sj.prototype.o = function(a, b, c, d) {
    b ? a(d) : a({
        text: c.responseText
    })
};
Sj.prototype.A = function(a, b) {
    a(Error("Request error: " + b.status))
};
Sj.prototype.B = function(a) {
    a(Error("request timed out"))
};
function Uj(a) {
    a && (this.id = a.id || "", this.name = a.name || "", this.activityId = a.activityId || "", this.status = a.status || "UNKNOWN")
}
Uj.prototype.id = "";
Uj.prototype.name = "";
Uj.prototype.activityId = "";
Uj.prototype.status = "UNKNOWN";
function Vj(a) {
    return {
        id: a.id,
        name: a.name,
        activityId: a.activityId,
        status: a.status
    }
}
Uj.prototype.toString = function() {
    return "{id:" + this.id + ",name:" + this.name + ",activityId:" + this.activityId + ",status:" + this.status + "}"
};
function Wj(a) {
    a = a || [];
    return "[" + B(a, function(a) {
        return a ? a.toString() : "null"
    }).join(",") + "]"
};
function Xj() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
        var b = 16 * Math.random() | 0;
        return ("x" == a ? b : b & 3 | 8).toString(16)
    })
}
function Yj(a, b) {
    return Fa(a, function(a) {
        return a.key == b
    })
}
function Zj(a) {
    return B(a, function(a) {
        return {
            key: a.id,
            name: a.name
        }
    })
}
function ak(a) {
    return B(a, function(a) {
        return Vj(a)
    })
}
function bk(a) {
    return B(a, function(a) {
        return new Uj(a)
    })
}
function ck(a, b) {
    return a || b ? a && b ? a.id == b.id && a.name == b.name : !1 : !0
}
function dk(a, b) {
    return Fa(a, function(a) {
        return a.id == b
    })
}
function ek(a, b) {
    return Fa(a, function(a) {
        return Ej(a, b)
    })
}
function V(a, b) {
    return Fa(a, function(a) {
        return Dj(a, b)
    })
};
function fk(a) {
    T.call(this);
    this.J = a;
    this.screens = []
}
x(fk, T);
g = fk.prototype;
g.V = function() {
    return this.screens
};
g.contains = function(a) {
    return !!ek(this.screens, a)
};
g.get = function(a) {
    return a ? V(this.screens, a) : null
};
function gk(a, b) {
    var c = a.get(b.uuid) || a.get(b.id);
    if (c) {
        var d = c.name;
        c.id = b.id || c.id;
        c.name = b.name;
        c.token = b.token;
        c.uuid = b.uuid || c.uuid;
        return c.name != d
    }
    a.screens.push(b);
    return !0
}
function hk(a, b) {
    var c = a.screens.length != b.length;
    a.screens = Ca(a.screens, function(a) {
        return !!ek(b, a)
    });
    for (var d = 0, e = b.length; d < e; d++)
        c = gk(a, b[d]) || c;
    return c
}
function ik(a, b) {
    var c = a.screens.length;
    a.screens = Ca(a.screens, function(a) {
        return !Ej(a, b)
    });
    return a.screens.length < c
}
g.info = function(a) {
    zj(this.J, a)
};
g.warn = function(a) {
    zj(this.J, a)
};
function jk(a) {
    a && (this.id = a.id || a.name, this.name = a.name, this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.avatar = a.userAvatarUri || "", this.theme = a.theme || "u")
}
jk.prototype.id = "";
jk.prototype.name = "";
g = jk.prototype;
g.app = "";
g.type = "REMOTE_CONTROL";
g.avatar = "";
g.theme = "u";
g.equals = function(a) {
    return a ? this.id == a.id : !1
};
var kk;
function lk() {
    var a = mk(), b = nk();
    Ha(a, b);
    if (ok()) {
        var c = a, d;
        d = 0;
        for (var e = c.length, f; d < e;) {
            var h = d + e>>1, k;
            k = Va(b, c[h]);
            0 < k ? d = h + 1 : (e = h, f=!k)
        }
        d = f ? d : ~d;
        0 > d && Ra(c, - (d + 1), 0, b)
    }
    a = pk(a);
    if (Ia(a))
        try {
            a = "remote_sid", Pc.remove("" + a, "/", "youtube.com")
    } catch (m) {} else 
        try {
            Qc("remote_sid", a.join(","))
    } catch (q) {}
}
function mk() {
    var a = S("yt-remote-connected-devices") || [];
    a.sort(Va);
    return a
}
function pk(a) {
    if (Ia(a))
        return [];
    var b = a[0].indexOf("#"), c =- 1 == b ? a[0] : a[0].substring(0, b);
    return B(a, function(a, b) {
        return 0 == b ? a : a.substring(c.length)
    })
}
function qk(a) {
    R("yt-remote-connected-devices", a, 86400)
}
function nk() {
    if (rk)
        return rk;
    var a = S("yt-remote-device-id");
    a || (a = Xj(), R("yt-remote-device-id", a, 31536E3));
    for (var b = mk(), c = 1, d = a; Ha(b, d);)
        c++, d = a + "#" + c;
    return rk = d
}
function sk() {
    return S("yt-remote-session-browser-channel")
}
function ok() {
    return S("yt-remote-session-screen-id")
}
function tk(a) {
    5 < a.length && (a = a.slice(a.length - 5));
    var b = B(uk(), function(a) {
        return a.loungeToken
    }), c = B(a, function(a) {
        return a.loungeToken
    });
    Ea(c, function(a) {
        return !Ha(b, a)
    }) && vk();
    R("yt-remote-local-screens", a, 31536E3)
}
function uk() {
    return S("yt-remote-local-screens") || []
}
function wk(a) {
    R("yt-remote-load-account-screens", a, 31536E3)
}
function vk() {
    R("yt-remote-lounge-token-expiration", !0, 86400)
}
function xk() {
    return !S("yt-remote-lounge-token-expiration")
}
function yk(a) {
    R("yt-remote-online-screens", a, 60)
}
function zk() {
    return S("yt-remote-online-screens") || []
}
function Ak(a) {
    R("yt-remote-online-dial-devices", a, 30)
}
function Bk() {
    return S("yt-remote-online-dial-devices") || []
}
function Ck(a, b) {
    R("yt-remote-session-browser-channel", a);
    R("yt-remote-session-screen-id", b);
    var c = mk(), d = nk();
    Ha(c, d) || c.push(d);
    qk(c);
    lk()
}
function Dk(a) {
    a || (Ng("yt-remote-session-screen-id"), Ng("yt-remote-session-video-id"));
    lk();
    a = mk();
    Ma(a, nk());
    qk(a)
}
function Ek() {
    if (!kk) {
        var a;
        a = new rg;
        (a = a.isAvailable() ? a : null) && (kk = new Bg(a))
    }
    return kk?!!kk.get("yt-remote-use-staging-server") : !1
}
var rk = "";
function Fk(a) {
    fk.call(this, "AccountScreenService");
    this.g = a;
    this.j = NaN;
    this.screens = Gk();
    this.info("Initializing with " + Kj(this.screens))
}
x(Fk, fk);
g = Fk.prototype;
g.start = function() {
    this.Nc()
};
g.add = function(a, b, c) {
    if (this.contains(a))
        this.Da(a, a.name, b, c);
    else {
        var d = Hk(this, a.id);
        this.g.sendRequest("POST", d, {
            screen_name: a.name
        }, v(this.je, this, a, b, c), v(this.Eb, this, "add", c), !0, !0)
    }
};
g.remove = function(a, b, c) {
    if (this.contains(a)) {
        var d = Hk(this, a.id);
        this.g.sendRequest("DELETE", d, null, v(this.ke, this, a, b, c), v(this.Eb, this, "remove", c), !0, !0)
    } else 
        a = "Trying to remove non-account screen: " + a.name, this.warn(a), c(Error(a))
};
g.Da = function(a, b, c, d) {
    if (this.contains(a)) {
        var e = Hk(this, a.id);
        this.g.sendRequest("PUT", e, {
            screen_name: b
        }, v(this.le, this, a, b, c, d), v(this.Eb, this, "update", d), !0, !0)
    } else 
        a = "Trying to update non-account screen: " + a.name, this.warn(a), d(Error(a))
};
g.F = function() {
    I(this.j);
    Fk.L.F.call(this)
};
function Ik(a, b) {
    return a.length != b.length?!1 : Ta(a, b, function(a, b) {
        return a || b?!a!=!b?!1 : a.id == b.id && a.name == b.name : !0
    })
}
function Gk() {
    var a = Ij(uk()), b = Ij(zk());
    return Ca(b, function(b) {
        return !V(a, b.id)
    })
}
function Hk(a, b) {
    var c = Tj(a.g, "/screens");
    return b ? c + "/" + b : c
}
g.Nc = function() {
    if (!this.H()) {
        I(this.j);
        var a = Hk(this);
        this.g.sendRequest("GET", a, null, v(this.Kd, this), v(this.Eb, this, "load", s), !1, !0)
    }
};
g.Kd = function(a) {
    if (!this.H())
        if (a = Ij(Za(a)), Ik(this.screens, a))
            for (var b = 0, c = this.screens.length; b < c; ++b) {
                var d = this.screens[b], e = V(a, d.id);
                e && e.token && (d.token = e.token)
            } else 
                this.info("Updated account screens: " + Kj(a)), this.screens = a, this.publish("screenChange"), a = this.V().length ? 12E4 : 6E4, this.j = H(v(this.Nc, this), a)
};
g.je = function(a, b) {
    this.H() || (gk(this, a), this.publish("screenChange"), b(a))
};
g.ke = function(a, b) {
    this.H() || (ik(this, a), this.publish("screenChange"), b(a))
};
g.le = function(a, b, c) {
    this.H() || (a = this.get(a.id), a.name = b, c(a), this.publish("screenChange"))
};
g.Eb = function(a, b, c) {
    this.H() || (a = "Failed to " + a + " account screen: " + c, this.warn(a), b(Error(a)))
};
function Jk(a, b, c, d) {
    T.call(this);
    this.J = a;
    this.D = b;
    this.o = c;
    this.B = d;
    this.k = 0;
    this.g = null;
    this.j = NaN
}
x(Jk, T);
var Kk = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
g = Jk.prototype;
g.start = function() {
    !this.g && isNaN(this.j) && this.uc()
};
g.stop = function() {
    this.g && (this.g.abort(), this.g = null);
    isNaN(this.j) || (I(this.j), this.j = NaN)
};
g.F = function() {
    this.stop();
    Jk.L.F.call(this)
};
g.uc = function() {
    this.j = NaN;
    this.g = Xh(Tj(this.J, "/pairing/get_screen"), {
        method: "POST",
        T: {
            pairing_code: this.D
        },
        timeout: 5E3,
        aa: v(this.Bd, this),
        onError: v(this.zd, this),
        wb: v(this.Cd, this)
    })
};
g.Bd = function(a, b) {
    this.g = null;
    var c = b.screen || {};
    c.dialId = this.o;
    c.name = this.B;
    this.publish("pairingComplete", new Cj(c))
};
g.zd = function(a) {
    this.g = null;
    a.status && 404 == a.status ? this.k >= Kk.length ? this.publish("pairingFailed", Error("DIAL polling timed out")) : (a = Kk[this.k], this.j = H(v(this.uc, this), a), this.k++) : this.publish("pairingFailed", Error("Server error " + a.status))
};
g.Cd = function() {
    this.g = null;
    this.publish("pairingFailed", Error("Server not responding"))
};
function Lk(a) {
    fk.call(this, "LocalScreenService");
    this.j = a;
    this.g = NaN;
    Mk(this);
    this.info("Initializing with " + Kj(this.screens))
}
x(Lk, fk);
g = Lk.prototype;
g.start = function() {
    Mk(this) && this.publish("screenChange");
    xk() && Nk(this);
    I(this.g);
    this.g = H(v(this.start, this), 1E4)
};
g.add = function(a, b) {
    Mk(this);
    gk(this, a);
    Ok(this, !1);
    this.publish("screenChange");
    b(a);
    a.token || Nk(this)
};
g.remove = function(a, b) {
    var c = Mk(this);
    ik(this, a) && (Ok(this, !1), c=!0);
    b(a);
    c && this.publish("screenChange")
};
g.Da = function(a, b, c, d) {
    var e = Mk(this), f = this.get(a.id);
    f ? (f.name != b && (f.name = b, Ok(this, !1), e=!0), c(a)) : d(Error("no such local screen."));
    e && this.publish("screenChange")
};
g.F = function() {
    I(this.g);
    Lk.L.F.call(this)
};
function Nk(a) {
    if (a.screens.length) {
        var b = B(a.screens, function(a) {
            return a.id
        }), c = Tj(a.j, "/pairing/get_lounge_token_batch");
        a.j.sendRequest("POST", c, {
            screen_ids: b.join(",")
        }, v(a.re, a), v(a.qe, a))
    }
}
g.re = function(a) {
    Mk(this);
    var b = this.screens.length;
    a = a && a.screens || [];
    for (var c = 0, d = a.length; c < d; ++c) {
        var e = a[c], f = this.get(e.screenId);
        f && (f.token = e.loungeToken, --b)
    }
    Ok(this, !b);
    b && this.warn("Missed " + b + " lounge tokens.")
};
g.qe = function(a) {
    this.warn("Requesting lounge tokens failed: " + a)
};
function Mk(a) {
    var b = Ij(uk()), b = Ca(b, function(a) {
        return !a.uuid
    });
    return hk(a, b)
}
function Ok(a, b) {
    tk(B(a.screens, Gj));
    b && vk()
};
function Pk(a, b) {
    T.call(this);
    this.B = b;
    this.g = Qk(this);
    this.D = a;
    this.k = this.o = NaN;
    this.j = null;
    this.J = v(this.pd, this);
    Rk("Initialized with " + Q(this.g))
}
x(Pk, T);
g = Pk.prototype;
g.start = function() {
    var a = parseInt(S("yt-remote-fast-check-period") || "0", 10);
    (this.o = w() - 144E5 < a ? 0 : a) ? Sk(this, !1) : (this.o = w() + 3E5, R("yt-remote-fast-check-period", this.o), this.gc());
    O(window, "storage", this.J)
};
g.isEmpty = function() {
    return cb(this.g)
};
g.update = function() {
    Rk("Updating availability on schedule.");
    var a = this.B(), b = Xa(this.g, function(b, d) {
        return b&&!!V(a, d)
    }, this);
    Tk(this, b)
};
function Uk(a, b, c) {
    var d = Tj(a.D, "/pairing/get_screen_availability");
    a.D.sendRequest("POST", d, {
        lounge_token: b.token
    }, v(function(a) {
        a = a.screens || [];
        for (var d = 0, h = a.length; d < h; ++d)
            if (a[d].loungeToken == b.token) {
                c("online" == a[d].status);
                return 
            }
        c(!1)
    }, a), v(function() {
        c(!1)
    }, a))
}
g.F = function() {
    I(this.k);
    this.k = NaN;
    this.j && (this.j.abort(), this.j = null);
    var a = Kc(window, "storage", this.J, !1);
    a && Lc(a);
    Pk.L.F.call(this)
};
function Tk(a, b) {
    var c;
    t: if (Ya(b) != Ya(a.g))
        c=!1;
    else {
        c = $a(b);
        for (var d = 0, e = c.length; d < e; ++d)
            if (!a.g[c[d]]) {
                c=!1;
                break t
            }
        c=!0
    }
    c || (Rk("Updated online screens: " + Q(a.g)), a.g = b, a.publish("screenChange"));
    Vk(a)
}
function Sk(a, b) {
    isNaN(a.k) || I(a.k);
    var c = v(a.gc, a), d;
    d = 0;
    b && (d = 2E3 + 8E3 * Math.random());
    d = 0 < a.o && a.o < w() ? 2E4 + d : 1E4 + d;
    a.k = H(c, d)
}
g.gc = function() {
    I(this.k);
    this.k = NaN;
    this.j && this.j.abort();
    var a = Wk(this);
    if (Ya(a)) {
        var b = Tj(this.D, "/pairing/get_screen_availability"), c = {
            lounge_token: $a(a).join(",")
        };
        this.j = this.D.sendRequest("POST", b, c, v(this.pe, this, a), v(this.oe, this))
    } else 
        Tk(this, {}), Sk(this, !1)
};
g.pe = function(a, b) {
    this.j = null;
    var c = $a(Wk(this));
    if (Ta(c, $a(a))) {
        for (var c = b.screens || [], d = {}, e = 0, f = c.length; e < f; ++e)
            d[a[c[e].loungeToken]] = "online" == c[e].status;
        Tk(this, d);
        Sk(this, !1)
    } else 
        this.O("Changing Screen set during request."), this.gc()
};
g.oe = function(a) {
    this.O("Screen availability failed: " + a);
    this.j = null;
    Sk(this, !1)
};
g.pd = function(a) {
    "yt-remote-online-screen-ids" == a.key && (this.g = Qk(this), Sk(this, !0))
};
function Rk(a) {
    zj("OnlineScreenService", a)
}
g.O = function(a) {
    zj("OnlineScreenService", a)
};
function Wk(a) {
    var b = {};
    A(a.B(), function(a) {
        a.token ? b[a.token] = a.id : this.O("Requesting availability of screen w/o lounge token.")
    });
    return b
}
function Qk(a) {
    var b = S("yt-remote-online-screen-ids") || "", b = b ? b.split(","): [], c = {};
    a = a.B();
    for (var d = 0, e = a.length; d < e; ++d) {
        var f = a[d].id;
        c[f] = Ha(b, f)
    }
    return c
}
function Vk(a) {
    var b = $a(Xa(a.g, function(a) {
        return a
    }));
    b.sort(Va);
    b.length ? R("yt-remote-online-screen-ids", b.join(","), 60) : Ng("yt-remote-online-screen-ids");
    a = Ca(a.B(), function(a) {
        return !!this.g[a.id]
    }, a);
    yk(B(a, Gj))
};
function W(a, b) {
    fk.call(this, "ScreenService");
    this.o = a;
    this.k = this.g = this.j = null;
    this.B = [];
    this.D = {};
    Xk(this, b)
}
x(W, fk);
g = W.prototype;
g.start = function(a) {
    a ? (this.g || (this.g = new Fk(this.o), this.g.subscribe("screenChange", v(this.kb, this))), this.g.start()) : this.g && (E(this.g), this.g = null, Yk(this));
    this.j.start();
    this.k.start();
    this.screens.length && (this.publish("screenChange"), this.k.isEmpty() || this.publish("onlineScreenChange"))
};
g.add = function(a, b, c) {
    this.g ? this.g.add(a, v(function(a) {
        this.kb();
        this.j.add(a, s, s);
        b(a)
    }, this), c) : this.j.add(a, b, c)
};
g.remove = function(a, b, c) {
    this.g && this.g.contains(a) ? (this.g.remove(a, v(function(a) {
        this.kb();
        b(a)
    }, this), c), this.j.remove(a, s, s)) : this.j.remove(a, b, c);
    this.k.update()
};
g.Da = function(a, b, c, d) {
    this.g && this.g.contains(a) ? (this.g.Da(a, b, c, d), this.j.Da(a, b, s, s)) : this.j.contains(a) ? this.j.Da(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, this.warn(a), d(Error(a)))
};
g.V = function(a) {
    return a ? this.screens : Oa(this.screens, Ca(this.B, function(a) {
        return !this.contains(a)
    }, this))
};
g.zc = function() {
    return Ca(this.V(!0), function(a) {
        return !!this.k.g[a.id]
    }, this)
};
function Zk(a, b, c, d, e, f) {
    a.info("getAutomaticScreenByIds " + c + " / " + b);
    c || (c = a.D[b]);
    var h = a.V();
    if (h = (c ? V(h, c) : null) || V(h, b)) {
        h.uuid = b;
        var k = $k(a, h);
        Uk(a.k, k, function(a) {
            e(a ? k : null)
        })
    } else 
        c ? al(a, c, v(function(a) {
            var f = $k(this, new Cj({
                name: d,
                screenId: c,
                loungeToken: a,
                dialId: b || ""
            }));
            Uk(this.k, f, function(a) {
                e(a ? f : null)
            })
        }, a), f) : e(null)
}
function bl(a, b, c, d, e, f) {
    a.info("getDialScreenByPairingCode " + b + " / " + c);
    var h = new Jk(a.o, b, c, d);
    h.subscribe("pairingComplete", v(function(a) {
        E(h);
        e($k(this, a))
    }, a));
    h.subscribe("pairingFailed", function(a) {
        E(h);
        f(a)
    });
    h.start();
    return v(h.stop, h)
}
function cl(a, b) {
    for (var c = 0, d = a.screens.length; c < d; ++c)
        if (a.screens[c].name == b)
            return a.screens[c];
    return null
}
g.Qc = function(a, b) {
    for (var c = 2, d = b(a, c); cl(this, d);) {
        c++;
        if (20 < c)
            return a;
        d = b(a, c)
    }
    return d
};
g.We = function(a, b, c, d) {
    Xh(Tj(this.o, "/pairing/get_screen"), {
        method: "POST",
        T: {
            pairing_code: a
        },
        timeout: 5E3,
        aa: v(function(a, d) {
            var h = new Cj(d.screen || {});
            if (!h.name || cl(this, h.name))
                h.name = this.Qc(h.name, b);
            c($k(this, h))
        }, this),
        onError: v(function(a) {
            d(Error("pairing request failed: " + a.status))
        }, this),
        wb: v(function() {
            d(Error("pairing request timed out."))
        }, this)
    })
};
g.F = function() {
    E(this.g);
    E(this.j);
    E(this.k);
    W.L.F.call(this)
};
function al(a, b, c, d) {
    a.info("requestLoungeToken_ for " + b);
    var e = {
        T: {
            screen_ids: b
        },
        method: "POST",
        context: a,
        aa: function(a, e) {
            var k = e && e.screens || [];
            k[0] && k[0].screenId == b ? c(k[0].loungeToken) : d(Error("Missing lounge token in token response"))
        },
        onError: function() {
            d(Error("Request screen lounge token failed"))
        }
    };
    Xh(Tj(a.o, "/pairing/get_lounge_token_batch"), e)
}
function Yk(a) {
    a.g ? a.screens = Oa(a.g.V(), Ca(a.j.V(), function(a) {
        return !this.g.contains(a)
    }, a)) : a.screens = a.j.V();
    for (var b = gb(a.D), c = 0, d = a.screens.length; c < d; ++c) {
        var e = a.screens[c];
        e.uuid = b[e.id] || ""
    }
    a.info("Updated manual screens: " + Kj(a.screens))
}
g.kb = function() {
    Yk(this);
    this.publish("screenChange");
    this.k.update()
};
function Xk(a, b) {
    dl(a);
    a.j = new Lk(a.o);
    a.j.subscribe("screenChange", v(a.kb, a));
    b && (a.g = new Fk(a.o), a.g.subscribe("screenChange", v(a.kb, a)));
    Yk(a);
    a.B = Ij(S("yt-remote-automatic-screen-cache") || []);
    dl(a);
    a.info("Initializing automatic screens: " + Kj(a.B));
    a.k = new Pk(a.o, v(a.V, a, !0));
    a.k.subscribe("screenChange", v(function() {
        this.publish("onlineScreenChange")
    }, a))
}
function $k(a, b) {
    var c = a.get(b.id);
    c ? (c.uuid = b.uuid, b = c) : ((c = V(a.B, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.B.push(b), R("yt-remote-automatic-screen-cache", B(a.B, Gj)));
    dl(a);
    a.D[b.uuid] = b.id;
    R("yt-remote-device-id-map", a.D, 31536E3);
    return b
}
function dl(a) {
    a.D = S("yt-remote-device-id-map") || {}
}
W.prototype.dispose = W.prototype.dispose;
function el(a, b, c) {
    T.call(this);
    this.da = c;
    this.S = a;
    this.j = b;
    this.k = null
}
x(el, T);
function fl(a, b) {
    a.k = b;
    a.publish("sessionScreen", a.k)
}
g = el.prototype;
g.ba = function(a) {
    this.H() || (a && this.warn("" + a), this.k = null, this.publish("sessionScreen", null))
};
g.info = function(a) {
    zj(this.da, a)
};
g.warn = function(a) {
    zj(this.da, a)
};
g.Kc = function() {
    return null
};
g.Ub = function(a) {
    var b = this.j;
    a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop=!0) : b.displayStatus = null;
    chrome.cast.setReceiverDisplayStatus(b, v(function() {
        this.info("Updated receiver status for " + b.friendlyName + ": " + a)
    }, this), v(function() {
        this.warn("Failed to update receiver status for: " + b.friendlyName)
    }, this))
};
g.F = function() {
    this.Ub("");
    el.L.F.call(this)
};
function gl(a, b) {
    el.call(this, a, b, "CastSession");
    this.g = null;
    this.B = 0;
    this.o = null;
    this.J = v(this.Md, this);
    this.D = v(this.Ld, this);
    this.B = H(v(function() {
        hl(this, null)
    }, this), 12E4)
}
x(gl, el);
g = gl.prototype;
g.Zb = function(a) {
    if (this.g) {
        if (this.g == a)
            return;
        this.warn("Overriding cast sesison with new session object");
        this.g.removeUpdateListener(this.J);
        this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.D)
    }
    this.g = a;
    this.g.addUpdateListener(this.J);
    this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.D);
    this.o && il(this);
    jl(this, "getMdxSessionStatus")
};
g.Ya = function(a) {
    this.info("launchWithParams: " + Q(a));
    this.o = a;
    this.g && il(this)
};
g.stop = function() {
    this.g ? this.g.stop(v(function() {
        this.ba()
    }, this), v(function() {
        this.ba(Error("Failed to stop receiver app."))
    }, this)) : this.ba(Error("Stopping cast device witout session."))
};
g.Ub = s;
g.F = function() {
    this.info("disposeInternal");
    I(this.B);
    this.B = 0;
    this.g && (this.g.removeUpdateListener(this.J), this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.D));
    this.g = null;
    gl.L.F.call(this)
};
function il(a) {
    var b = a.o.videoId || a.o.videoIds[a.o.index];
    b && jl(a, "flingVideo", {
        videoId: b,
        currentTime: a.o.currentTime || 0
    });
    a.o = null
}
function jl(a, b, c) {
    a.info("sendYoutubeMessage_: " + b + " " + Q(c));
    var d = {};
    d.type = b;
    c && (d.data = c);
    a.g ? a.g.sendMessage("urn:x-cast:com.google.youtube.mdx", d, s, v(function() {
        this.warn("Failed to send message: " + b + ".")
    }, a)) : a.warn("Sending yt message without session: " + Q(d))
}
g.Ld = function(a, b) {
    if (!this.H())
        if (b) {
            var c = ug(b);
            if (c) {
                var d = "" + c.type, c = c.data || {};
                this.info("onYoutubeMessage_: " + d + " " + Q(c));
                switch (d) {
                case "mdxSessionStatus":
                    hl(this, c.screenId);
                    break;
                default:
                    this.warn("Unknown youtube message: " + d)
                }
            } else 
                this.warn("Unable to parse message.")
        } else 
            this.warn("No data in message.")
    };
function hl(a, b) {
    I(a.B);
    b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.k && a.k.id == b || Zk(a.S, a.j.label, b, a.j.friendlyName, v(function(a) {
        a ? fl(this, a) : this.ba(Error("Unable to fetch screen."))
    }, a), v(a.ba, a))) : a.ba(Error("Waiting for session status timed out."))
}
g.Kc = function() {
    return this.g
};
g.Md = function(a) {
    this.H() || a || (this.warn("Cast session died."), this.ba())
};
function kl(a, b) {
    el.call(this, a, b, "DialSession");
    this.B = this.M = null;
    this.W = "";
    this.o = null;
    this.J = s;
    this.D = NaN;
    this.Y = v(this.Jd, this);
    this.g = s
}
x(kl, el);
g = kl.prototype;
g.Zb = function(a) {
    this.B = a;
    this.B.addUpdateListener(this.Y)
};
g.Ya = function(a) {
    this.o = a;
    this.J()
};
g.stop = function() {
    this.g();
    this.g = s;
    I(this.D);
    this.B ? this.B.stop(v(this.ba, this, null), v(this.ba, this, "Failed to stop DIAL device.")) : this.ba()
};
g.F = function() {
    this.g();
    this.g = s;
    I(this.D);
    this.B && this.B.removeUpdateListener(this.Y);
    this.B = null;
    kl.L.F.call(this)
};
function ll(a) {
    a.g = bl(a.S, a.W, a.j.label, a.j.friendlyName, v(function(a) {
        this.g = s;
        fl(this, a)
    }, a), v(function(a) {
        this.g = s;
        this.ba(a)
    }, a))
}
g.Jd = function(a) {
    this.H() || a || (this.warn("DIAL session died."), this.g(), this.g = s, this.ba())
};
function ml(a) {
    var b = {};
    b.pairingCode = a.W;
    if (a.o) {
        var c = a.o.index || 0, d = a.o.currentTime || 0;
        b.v = a.o.videoId || a.o.videoIds[c];
        b.t = d
    }
    Ek() && (b.env_useStageMdx = 1);
    return dd(b)
}
g.Wb = function(a) {
    this.W = Xj();
    if (this.o) {
        var b = new chrome.cast.DialLaunchResponse(!0, ml(this));
        a(b);
        ll(this)
    } else 
        this.J = v(function() {
            I(this.D);
            this.J = s;
            this.D = NaN;
            var b = new chrome.cast.DialLaunchResponse(!0, ml(this));
            a(b);
            ll(this)
        }, this), this.D = H(v(function() {
            this.J()
        }, this), 100)
};
g.ud = function(a, b) {
    Zk(this.S, this.M.receiver.label, a, this.j.friendlyName, v(function(a) {
        a && a.token ? (fl(this, a), b(new chrome.cast.DialLaunchResponse(!1))) : this.Wb(b)
    }, this), v(function(a) {
        this.warn("Failed to get DIAL screen: " + a);
        this.Wb(b)
    }, this))
};
function nl(a, b) {
    el.call(this, a, b, "ManualSession");
    this.g = H(v(this.Ya, this, null), 150)
}
x(nl, el);
nl.prototype.stop = function() {
    this.ba()
};
nl.prototype.Zb = s;
nl.prototype.Ya = function() {
    I(this.g);
    this.g = NaN;
    var a = V(this.S.V(), this.j.label);
    a ? fl(this, a) : this.ba(Error("No such screen"))
};
nl.prototype.F = function() {
    I(this.g);
    this.g = NaN;
    nl.L.F.call(this)
};
function X(a) {
    T.call(this);
    this.j = a;
    this.g = null;
    this.B=!1;
    this.k = [];
    this.o = v(this.rd, this)
}
x(X, T);
g = X.prototype;
g.init = function(a, b) {
    chrome.cast.timeout.requestSession = 3E4;
    var c = new chrome.cast.SessionRequest("233637DE");
    c.dialRequest = new chrome.cast.DialRequest("YouTube");
    var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED, e = a ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB: chrome.cast.DefaultActionPolicy.CREATE_SESSION, c = new chrome.cast.ApiConfig(c, v(this.Dc, this), v(this.fe, this), d, e);
    c.customDialLaunchCallback = v(this.ee, this);
    chrome.cast.initialize(c, v(function() {
        this.H() || (chrome.cast.addReceiverActionListener(this.o),
        vj(ol), this.j.subscribe("onlineScreenChange", v(this.oc, this)), this.k = pl(this), chrome.cast.setCustomReceivers(this.k, s, v(function(a) {
            this.O("Failed to set initial custom receivers: " + Q(a))
        }, this)), this.publish("yt-remote-cast2-availability-change", ql(this)), b(!0))
    }, this), function(a) {
        this.O("Failed to initialize API: " + Q(a));
        b(!1)
    })
};
g.Ue = function(a, b) {
    rl("Setting connected screen ID: " + a + " -> " + b);
    if (this.g) {
        var c = this.g.k;
        if (!a || c && c.id != a)
            rl("Unsetting old screen status: " + this.g.j.friendlyName), E(this.g), this.g = null
    }
    if (a && b) {
        if (!this.g) {
            c = V(this.j.V(), a);
            if (!c) {
                rl("setConnectedScreenStatus: Unknown screen.");
                return 
            }
            var d = sl(this, c);
            d || (rl("setConnectedScreenStatus: Connected receiver not custom..."), d = new chrome.cast.Receiver(c.uuid ? c.uuid : c.id, c.name), d.receiverType = chrome.cast.ReceiverType.CUSTOM, this.k.push(d), chrome.cast.setCustomReceivers(this.k,
            s, v(function(a) {
                this.O("Failed to set initial custom receivers: " + Q(a))
            }, this)));
            rl("setConnectedScreenStatus: new active receiver: " + d.friendlyName);
            tl(this, new nl(this.j, d), !0)
        }
        this.g.Ub(b)
    } else 
        rl("setConnectedScreenStatus: no screen.")
};
function sl(a, b) {
    return b ? Fa(a.k, function(a) {
        return Dj(b, a.label)
    }, a) : null
}
g.Ve = function(a) {
    this.H() ? this.O("Setting connection data on disposed cast v2") : this.g ? this.g.Ya(a) : this.O("Setting connection data without a session")
};
g.stopSession = function() {
    this.H() ? this.O("Stopping session on disposed cast v2") : this.g ? (this.g.stop(), E(this.g), this.g = null) : rl("Stopping non-existing session")
};
g.requestSession = function() {
    chrome.cast.requestSession(v(this.Dc, this), v(this.Oe, this))
};
g.F = function() {
    this.j.unsubscribe("onlineScreenChange", v(this.oc, this));
    window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.o);
    yj(ol);
    E(this.g);
    X.L.F.call(this)
};
function rl(a) {
    zj("Controller", a)
}
g.O = function(a) {
    zj("Controller", a)
};
function ol(a) {
    window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
}
function ql(a) {
    return a.B||!!a.k.length||!!a.g
}
function tl(a, b, c) {
    E(a.g);
    (a.g = b) ? (c ? a.publish("yt-remote-cast2-receiver-resumed", b.j) : a.publish("yt-remote-cast2-receiver-selected", b.j), b.subscribe("sessionScreen", v(a.sc, a, b)), b.k ? a.publish("yt-remote-cast2-session-change", b.k) : c && a.g.Ya(null)) : a.publish("yt-remote-cast2-session-change", null)
}
g.sc = function(a, b) {
    this.g == a && (b || tl(this, null), this.publish("yt-remote-cast2-session-change", b))
};
g.rd = function(a, b) {
    if (!this.H())
        if (a)
            switch (rl("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
            case chrome.cast.ReceiverAction.CAST:
                if (this.g)
                    if (this.g.j.label != a.label)
                        rl("onReceiverAction_: Stopping active receiver: " + this.g.j.friendlyName), this.g.stop();
                    else {
                        rl("onReceiverAction_: Casting to active receiver.");
                        this.g.k && this.publish("yt-remote-cast2-session-change", this.g.k);
                        break
                    }
                    switch (a.receiverType) {
                    case chrome.cast.ReceiverType.CUSTOM:
                        tl(this, new nl(this.j, a));
                        break;
                    case chrome.cast.ReceiverType.DIAL:
                        tl(this,
                        new kl(this.j, a));
                        break;
                    case chrome.cast.ReceiverType.CAST:
                        tl(this, new gl(this.j, a));
                        break;
                    default:
                        this.O("Unknown receiver type: " + a.receiverType);
                        return 
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.g && this.g.j.label == a.label ? this.g.stop() : this.O("Stopping receiver w/o session: " + a.friendlyName)
            } else 
                this.O("onReceiverAction_ called without receiver.")
};
g.ee = function(a) {
    if (this.H())
        return Promise.reject(Error("disposed"));
    var b = a.receiver;
    b.receiverType != chrome.cast.ReceiverType.DIAL && (this.O("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
    var c = this.g ? this.g.j: null;
    if (!c || c.label != b.label)
        return this.O("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
    if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
        if (this.g.k)
            return rl("Reselecting dial screen."),
            this.publish("yt-remote-cast2-session-change", this.g.k), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
        this.O('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
        tl(this, new kl(this.j, b))
    }
    b = this.g;
    b.M = a;
    return b.M.appState == chrome.cast.DialAppState.RUNNING ? new Promise(v(b.ud, b, (b.M.extraData || {}).screenId || null)) : new Promise(v(b.Wb, b))
};
g.Dc = function(a) {
    if (!this.H()) {
        rl("New cast session ID: " + a.sessionId);
        var b = a.receiver;
        if (b.receiverType != chrome.cast.ReceiverType.CUSTOM) {
            if (!this.g)
                if (b.receiverType == chrome.cast.ReceiverType.CAST)
                    rl("Got resumed cast session before resumed mdx connection."), tl(this, new gl(this.j, b), !0);
                else {
                    this.O("Got non-cast session without previous mdx receiver event, or mdx resume.");
                    return 
                }
            var c = this.g.j, d = V(this.j.V(), c.label);
            d && Dj(d, b.label) && c.receiverType != chrome.cast.ReceiverType.CAST && b.receiverType ==
            chrome.cast.ReceiverType.CAST && (rl("onSessionEstablished_: manual to cast session change " + b.friendlyName), E(this.g), this.g = new gl(this.j, b), this.g.subscribe("sessionScreen", v(this.sc, this, this.g)), this.g.Ya(null));
            this.g.Zb(a)
        }
    }
};
g.Xe = function() {
    return this.g ? this.g.Kc() : null
};
g.Oe = function(a) {
    this.H() || (this.O("Failed to estabilish a session: " + Q(a)), a.code != chrome.cast.ErrorCode.CANCEL && tl(this, null))
};
g.fe = function(a) {
    rl("Receiver availability updated: " + a);
    if (!this.H()) {
        var b = ql(this);
        this.B = a == chrome.cast.ReceiverAvailability.AVAILABLE;
        ql(this) != b && this.publish("yt-remote-cast2-availability-change", ql(this))
    }
};
function pl(a) {
    var b = a.j.zc(), c = a.g && a.g.j;
    a = B(b, function(a) {
        c && Dj(a, c.label) && (c = null);
        var b = a.uuid ? a.uuid: a.id, f = sl(this, a);
        f ? (f.label = b, f.friendlyName = a.name) : (f = new chrome.cast.Receiver(b, a.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
        return f
    }, a);
    c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
    return a
}
g.oc = function() {
    if (!this.H()) {
        var a = ql(this);
        this.k = pl(this);
        rl("Updating custom receivers: " + Q(this.k));
        chrome.cast.setCustomReceivers(this.k, s, v(function() {
            this.O("Failed to set custom receivers.")
        }, this));
        var b = ql(this);
        b != a && this.publish("yt-remote-cast2-availability-change", b)
    }
};
X.prototype.setLaunchParams = X.prototype.Ve;
X.prototype.setConnectedScreenStatus = X.prototype.Ue;
X.prototype.stopSession = X.prototype.stopSession;
X.prototype.getCastSession = X.prototype.Xe;
X.prototype.requestSession = X.prototype.requestSession;
X.prototype.init = X.prototype.init;
X.prototype.dispose = X.prototype.dispose;
function ul(a, b) {
    te ? wl(a) && (xl(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? yl(b) : Qj(function(a, d) {
        a ? yl(b) : (zl("Failed to load cast API: " + d), Al(!1), xl(!1), Ng("yt-remote-cast-available"), Ng("yt-remote-cast-receiver"), Bl(), b(!1))
    })) : vl("Cannot initialize because not running Chrome")
}
function Bl() {
    vl("dispose");
    Rj();
    var a = Cl();
    a && a.dispose();
    Dl = null;
    p("yt.mdx.remote.cloudview.instance_", null, void 0);
    El(!1);
    Fb(Fl);
    Fl.length = 0
}
function Gl() {
    return !!S("yt-remote-cast-installed")
}
function Hl() {
    var a = S("yt-remote-cast-receiver");
    return a ? a.friendlyName : null
}
function Il() {
    vl("clearCurrentReciever");
    Ng("yt-remote-cast-receiver")
}
function Jl() {
    Gl() ? Cl() ? Kl() ? (vl("Requesting cast selector."), Dl.requestSession()) : (vl("Wait for cast API to be ready to request the session."), Fl.push(J("yt-remote-cast2-api-ready", Jl))) : zl("requestCastSelector: Cast is not initialized.") : zl("requestCastSelector: Cast API is not installed!")
}
function Ll(a) {
    Kl() ? Cl().setLaunchParams(a) : zl("setLaunchParams called before ready.")
}
function Ml(a, b) {
    Kl() ? Cl().setConnectedScreenStatus(a, b) : zl("setConnectedScreenStatus called before ready.")
}
var Dl = null;
function Nl(a) {
    Dl.init(!0, a)
}
function wl(a) {
    var b=!1;
    if (!Dl) {
        var c = r("yt.mdx.remote.cloudview.instance_");
        c || (c = new X(a), c.subscribe("yt-remote-cast2-availability-change", function(a) {
            R("yt-remote-cast-available", a);
            K("yt-remote-cast2-availability-change", a)
        }), c.subscribe("yt-remote-cast2-receiver-selected", function(a) {
            vl("onReceiverSelected: " + a.friendlyName);
            R("yt-remote-cast-receiver", a);
            K("yt-remote-cast2-receiver-selected", a)
        }), c.subscribe("yt-remote-cast2-receiver-resumed", function(a) {
            vl("onReceiverResumed: " + a.friendlyName);
            R("yt-remote-cast-receiver", a)
        }), c.subscribe("yt-remote-cast2-session-change", function(a) {
            vl("onSessionChange: " + Jj(a));
            a || Ng("yt-remote-cast-receiver");
            K("yt-remote-cast2-session-change", a)
        }), p("yt.mdx.remote.cloudview.instance_", c, void 0), b=!0);
        Dl = c
    }
    vl("cloudview.createSingleton_: " + b);
    return b
}
function Cl() {
    Dl || (Dl = r("yt.mdx.remote.cloudview.instance_"));
    return Dl
}
function yl(a) {
    Al(!0);
    xl(!1);
    Nl(function(b) {
        b ? (El(!0), K("yt-remote-cast2-api-ready")) : (zl("Failed to initialize cast API."), Al(!1), Ng("yt-remote-cast-available"), Ng("yt-remote-cast-receiver"), Bl());
        a(b)
    })
}
function vl(a) {
    zj("cloudview", a)
}
function zl(a) {
    zj("cloudview", a)
}
function Al(a) {
    vl("setCastInstalled_ " + a);
    R("yt-remote-cast-installed", a)
}
function Kl() {
    return !!r("yt.mdx.remote.cloudview.apiReady_")
}
function El(a) {
    vl("setApiReady_ " + a);
    p("yt.mdx.remote.cloudview.apiReady_", a, void 0)
}
function xl(a) {
    p("yt.mdx.remote.cloudview.initializing_", a, void 0)
}
var Fl = [];
function Ol() {
    if (!("cast"in window))
        return !1;
    var a = window.cast || {};
    return "ActivityStatus"in a && "Api"in a && "LaunchRequest"in a && "Receiver"in a
}
function Pl(a) {
    zj("CAST", a)
}
function Ql(a) {
    var b = Rl();
    b && b.logMessage && b.logMessage(a)
}
function Sl(a) {
    if (a.source == window && a.data && "CastApi" == a.data.source && "Hello" == a.data.event)
        for (; Tl.length;)
            Tl.shift()()
}
function Ul() {
    if (!r("yt.mdx.remote.castv2_")&&!Vl && (Ia(Ka) && Qa(Ka, Bk()), Ol())) {
        var a = Rl();
        a ? (a.removeReceiverListener("YouTube", Wl), a.addReceiverListener("YouTube", Wl), Pl("API initialized in the other binary")) : (a = new cast.Api, Xl(a), a.addReceiverListener("YouTube", Wl), a.setReloadTabRequestHandler && a.setReloadTabRequestHandler(function() {
            H(function() {
                window.location.reload(!0)
            }, 1E3)
        }), vj(Ql), Pl("API initialized"));
        Vl=!0
    }
}
function Yl() {
    var a = Rl();
    a && (Pl("API disposed"), yj(Ql), a.setReloadTabRequestHandler && a.setReloadTabRequestHandler(s), a.removeReceiverListener("YouTube", Wl), Xl(null));
    Vl=!1;
    Tl = null;
    (a = Kc(window, "message", Sl, !1)) && Lc(a)
}
function Zl(a) {
    var b = Ga(Ka, function(b) {
        return b.id == a.id
    });
    0 <= b && (Ka[b] = Vj(a))
}
function Wl(a) {
    a.length && Pl("Updating receivers: " + Q(a));
    $l(a);
    K("yt-remote-cast-device-list-update");
    A(am(), function(a) {
        bm(a.id)
    });
    A(a, function(a) {
        if (a.isTabProjected) {
            var c = cm(a.id);
            Pl("Detected device: " + c.id + " is tab projected. Firing DEVICE_TAB_PROJECTED event.");
            H(function() {
                K("yt-remote-cast-device-tab-projected", c.id)
            }, 1E3)
        }
    })
}
function dm(a, b) {
    Pl("Updating " + a + " activity status: " + Q(b));
    var c = cm(a);
    c ? (b.activityId && (c.activityId = b.activityId), c.status = "running" == b.status ? "RUNNING" : "stopped" == b.status ? "STOPPED" : "error" == b.status ? "ERROR" : "UNKNOWN", "RUNNING" != c.status && (c.activityId = ""), Zl(c), K("yt-remote-cast-device-status-update", c)) : Pl("Device not found")
}
function am() {
    Ul();
    return bk(Ka)
}
function $l(a) {
    a = B(a, function(a) {
        var c = a.id, d;
        d = a.name;
        d = y(d, "&") ? "document"in l ? sa(d) : ua(d) : d;
        c = {
            id: c,
            name: d
        };
        if (a = cm(a.id))
            c.activityId = a.activityId, c.status = a.status;
        return c
    });
    Ja();
    Qa(Ka, a)
}
function cm(a) {
    var b = am();
    return Fa(b, function(b) {
        return b.id == a
    }) || null
}
function bm(a) {
    var b = cm(a), c = Rl();
    c && b && b.activityId && c.getActivityStatus(b.activityId, function(b) {
        "error" == b.status && (b.status = "stopped");
        dm(a, b)
    })
}
function em(a) {
    Ul();
    var b = cm(a), c = Rl();
    c && b && b.activityId ? (Pl("Stopping cast activity"), c.stopActivity(b.activityId, na(dm, a))) : Pl("Dropping cast activity stop")
}
function Rl() {
    return r("yt.mdx.remote.castapi.api_")
}
function Xl(a) {
    p("yt.mdx.remote.castapi.api_", a, void 0)
}
var Vl=!1, Tl = null, Ka = r("yt.mdx.remote.castapi.devices_") || [];
p("yt.mdx.remote.castapi.devices_", Ka, void 0);
function fm(a, b) {
    this.action = a;
    this.params = b || null
};
function gm() {
    this.g = w()
}
new gm;
gm.prototype.set = function(a) {
    this.g = a
};
gm.prototype.get = function() {
    return this.g
};
function hm(a, b) {
    this.j = new wg(a);
    this.g = b ? ug : tg
}
hm.prototype.stringify = function(a) {
    return vg(this.j, a)
};
hm.prototype.parse = function(a) {
    return this.g(a)
};
function im(a, b, c) {
    D.call(this);
    this.A = a;
    this.k = b;
    this.j = c;
    this.g = v(this.vd, this)
}
x(im, D);
g = im.prototype;
g.Ob=!1;
g.Xa = null;
g.stop = function() {
    this.Xa && (l.clearTimeout(this.Xa), this.Xa = null, this.Ob=!1)
};
g.F = function() {
    im.L.F.call(this);
    this.stop()
};
g.vd = function() {
    this.Xa = null;
    this.Ob && (this.Ob=!1, jm(this))
};
function jm(a) {
    a.Xa = dj(a.g, a.k);
    a.A.call(a.j)
};
function km(a) {
    D.call(this);
    this.j = a;
    this.g = {}
}
x(km, D);
var lm = [];
g = km.prototype;
g.listen = function(a, b, c, d) {
    t(b) || (b && (lm[0] = b.toString()), b = lm);
    for (var e = 0; e < b.length; e++) {
        var f = Oi(a, b[e], c || this.handleEvent, d ||!1, this.j || this);
        if (!f)
            break;
        this.g[f.key] = f
    }
    return this
};
g.$b = function(a, b, c, d, e) {
    if (t(b))
        for (var f = 0; f < b.length; f++)
            this.$b(a, b[f], c, d, e);
    else 
        c = c || this.handleEvent, e = e || this.j || this, c = Pi(c), d=!!d, b = a && a[Di] ? Ki(a.Ca, String(b), c, d, e) : a ? (a = Qi(a)) ? Ki(a, b, c, d, e) : null : null, b && (Vi(b), delete this.g[b.key]);
    return this
};
g.removeAll = function() {
    Wa(this.g, Vi);
    this.g = {}
};
g.F = function() {
    km.L.F.call(this);
    this.removeAll()
};
g.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
};
function mm() {}
mm.prototype.g = null;
function nm(a) {
    var b;
    (b = a.g) || (b = {}, om(a) && (b[0]=!0, b[1]=!0), b = a.g = b);
    return b
};
var pm;
function qm() {}
x(qm, mm);
function rm(a) {
    return (a = om(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function om(a) {
    if (!a.j && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
            var d = b[c];
            try {
                return new ActiveXObject(d), a.j = d
            } catch (e) {}
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return a.j
}
pm = new qm;
function sm(a, b, c, d, e) {
    this.g = a;
    this.k = c;
    this.D = d;
    this.K = e || 1;
    this.o = 45E3;
    this.A = new km(this);
    this.j = new bj;
    cj(this.j, 250)
}
g = sm.prototype;
g.Ha = null;
g.ka=!1;
g.bb = null;
g.ec = null;
g.jb = null;
g.ab = null;
g.ya = null;
g.Ea = null;
g.Ia = null;
g.R = null;
g.ob = 0;
g.na = null;
g.Ib = null;
g.Ka = null;
g.fb =- 1;
g.yc=!0;
g.La=!1;
g.Vb = 0;
g.zb = null;
var tm = {}, um = {};
g = sm.prototype;
g.setTimeout = function(a) {
    this.o = a
};
function vm(a, b, c) {
    a.ab = 1;
    a.ya = Of(b.clone());
    a.Ia = c;
    a.B=!0;
    wm(a, null)
}
function xm(a, b, c, d, e) {
    a.ab = 1;
    a.ya = Of(b.clone());
    a.Ia = null;
    a.B = c;
    e && (a.yc=!1);
    wm(a, d)
}
function wm(a, b) {
    a.jb = w();
    ym(a);
    a.Ea = a.ya.clone();
    Mf(a.Ea, "t", a.K);
    a.ob = 0;
    a.R = a.g.bc(a.g.ib() ? b : null);
    0 < a.Vb && (a.zb = new im(v(a.Ac, a, a.R), a.Vb));
    a.A.listen(a.R, "readystatechange", a.Ud);
    var c = a.Ha ? eb(a.Ha): {};
    a.Ia ? (a.Ib = "POST", c["Content-Type"] = "application/x-www-form-urlencoded", a.R.send(a.Ea, a.Ib, a.Ia, c)) : (a.Ib = "GET", a.yc&&!dc && (c.Connection = "close"), a.R.send(a.Ea, a.Ib, null, c));
    a.g.ja(1)
}
g.Ud = function(a) {
    a = a.target;
    var b = this.zb;
    b && 3 == zm(a) ? b.Xa ? b.Ob=!0 : jm(b) : this.Ac(a)
};
g.Ac = function(a) {
    try {
        if (a == this.R)
            t: {
            var b = zm(this.R), c = this.R.A, d = this.R.getStatus();
            if (N&&!mc(10) || dc&&!lc("420+")) {
                if (4 > b)
                    break t
            } else if (3 > b || 3 == b&&!bc&&!Am(this.R))
                break t;
                this.La || 4 != b || 7 == c || (8 == c || 0 >= d ? this.g.ja(3) : this.g.ja(2));
                Bm(this);
                var e = this.R.getStatus();
                this.fb = e;
                var f = Am(this.R);
                (this.ka = 200 == e) ? (4 == b && Cm(this), this.B ? (Dm(this, b, f), bc && this.ka && 3 == b && (this.A.listen(this.j, "tick", this.xd), this.j.start())) : Em(this, f), this.ka&&!this.La && (4 == b ? this.g.Bb(this) : (this.ka=!1, ym(this)))) :
                (this.Ka = 400 == e && 0 < f.indexOf("Unknown SID") ? 3 : 0, Y(), Cm(this), Fm(this))
            }
    } catch (h) {
        this.R && Am(this.R)
    } finally {}
};
function Dm(a, b, c) {
    for (var d=!0; !a.La && a.ob < c.length;) {
        var e = Gm(a, c);
        if (e == um) {
            4 == b && (a.Ka = 4, Y(), d=!1);
            break
        } else if (e == tm) {
            a.Ka = 4;
            Y();
            d=!1;
            break
        } else 
            Em(a, e)
    }
    4 == b && 0 == c.length && (a.Ka = 1, Y(), d=!1);
    a.ka = a.ka && d;
    d || (Cm(a), Fm(a))
}
g.xd = function() {
    var a = zm(this.R), b = Am(this.R);
    this.ob < b.length && (Bm(this), Dm(this, a, b), this.ka && 4 != a && ym(this))
};
function Gm(a, b) {
    var c = a.ob, d = b.indexOf("\n", c);
    if ( - 1 == d)
        return um;
    c = Number(b.substring(c, d));
    if (isNaN(c))
        return tm;
    d += 1;
    if (d + c > b.length)
        return um;
    var e = b.substr(d, c);
    a.ob = d + c;
    return e
}
function Hm(a, b) {
    a.jb = w();
    ym(a);
    var c = b ? window.location.hostname: "";
    a.Ea = a.ya.clone();
    P(a.Ea, "DOMAIN", c);
    P(a.Ea, "t", a.K);
    try {
        a.na = new ActiveXObject("htmlfile")
    } catch (d) {
        Cm(a);
        a.Ka = 7;
        Y();
        Fm(a);
        return 
    }
    var e = "<html><body>";
    b && (e += '<script>document.domain="' + c + '"\x3c/script>');
    e += "</body></html>";
    a.na.open();
    a.na.write(e);
    a.na.close();
    a.na.parentWindow.m = v(a.de, a);
    a.na.parentWindow.d = v(a.Cc, a, !0);
    a.na.parentWindow.rpcClose = v(a.Cc, a, !1);
    c = a.na.createElement("div");
    a.na.parentWindow.document.body.appendChild(c);
    c.innerHTML = '<iframe src="' + a.Ea + '"></iframe>';
    a.g.ja(1)
}
g.de = function(a) {
    Im(v(this.Te, this, a), 0)
};
g.Te = function(a) {
    this.La || (Bm(this), Em(this, a), ym(this))
};
g.Cc = function(a) {
    Im(v(this.Se, this, a), 0)
};
g.Se = function(a) {
    this.La || (Cm(this), this.ka = a, this.g.Bb(this), this.g.ja(4))
};
g.cancel = function() {
    this.La=!0;
    Cm(this)
};
function ym(a) {
    a.ec = w() + a.o;
    Jm(a, a.o)
}
function Jm(a, b) {
    if (null != a.bb)
        throw Error("WatchDog timer not null");
    a.bb = Im(v(a.Me, a), b)
}
function Bm(a) {
    a.bb && (l.clearTimeout(a.bb), a.bb = null)
}
g.Me = function() {
    this.bb = null;
    var a = w();
    0 <= a - this.ec ? (2 != this.ab && this.g.ja(3), Cm(this), this.Ka = 2, Y(), Fm(this)) : Jm(this, this.ec - a)
};
function Fm(a) {
    a.g.Hc() || a.La || a.g.Bb(a)
}
function Cm(a) {
    Bm(a);
    E(a.zb);
    a.zb = null;
    a.j.stop();
    a.A.removeAll();
    if (a.R) {
        var b = a.R;
        a.R = null;
        Km(b);
        b.dispose()
    }
    a.na && (a.na = null)
}
function Em(a, b) {
    try {
        a.g.Jc(a, b), a.g.ja(4)
    } catch (c) {}
};
function Lm(a, b, c, d, e) {
    if (0 == d)
        c(!1);
    else {
        var f = e || 0;
        d--;
        Mm(a, b, function(e) {
            e ? c(!0) : l.setTimeout(function() {
                Lm(a, b, c, d, f)
            }, f)
        })
    }
}
function Mm(a, b, c) {
    var d = new Image;
    d.onload = function() {
        try {
            Nm(d), c(!0)
        } catch (a) {}
    };
    d.onerror = function() {
        try {
            Nm(d), c(!1)
        } catch (a) {}
    };
    d.onabort = function() {
        try {
            Nm(d), c(!1)
        } catch (a) {}
    };
    d.ontimeout = function() {
        try {
            Nm(d), c(!1)
        } catch (a) {}
    };
    l.setTimeout(function() {
        if (d.ontimeout)
            d.ontimeout()
    }, b);
    d.src = a
}
function Nm(a) {
    a.onload = null;
    a.onerror = null;
    a.onabort = null;
    a.ontimeout = null
};
function Om(a) {
    this.g = a;
    this.j = new hm(null, !0)
}
g = Om.prototype;
g.Tb = null;
g.ea = null;
g.Db=!1;
g.tc = null;
g.Cb = null;
g.Yb = null;
g.dc = null;
g.ha = null;
g.va =- 1;
g.mb = null;
g.nb = null;
g.connect = function(a) {
    this.dc = a;
    a = Pm(this.g, null, this.dc);
    Y();
    this.tc = w();
    var b = this.g.D;
    null != b ? (this.mb = b[0], (this.nb = b[1]) ? (this.ha = 1, Qm(this)) : (this.ha = 2, Rm(this))) : (Mf(a, "MODE", "init"), this.ea = new sm(this, 0, void 0, void 0, void 0), this.ea.Ha = this.Tb, xm(this.ea, a, !1, null, !0), this.ha = 0)
};
function Qm(a) {
    var b = Pm(a.g, a.nb, "/mail/images/cleardot.gif");
    Of(b);
    Lm(b.toString(), 5E3, v(a.ge, a), 3, 2E3);
    a.ja(1)
}
g.ge = function(a) {
    if (a)
        this.ha = 2, Rm(this);
    else {
        Y();
        var b = this.g;
        b.ia = b.Aa.va;
        Sm(b, 9)
    }
    a && this.ja(2)
};
function Rm(a) {
    var b = a.g.Z;
    if (null != b)
        Y(), b ? (Y(), Tm(a.g, a, !1)) : (Y(), Tm(a.g, a, !0));
    else if (a.ea = new sm(a, 0, void 0, void 0, void 0), a.ea.Ha = a.Tb, b = a.g, b = Pm(b, b.ib() ? a.mb : null, a.dc), Y(), !N || mc(10))
        Mf(b, "TYPE", "xmlhttp"), xm(a.ea, b, !1, a.mb, !1);
    else {
        Mf(b, "TYPE", "html");
        var c = a.ea;
        a = Boolean(a.mb);
        c.ab = 3;
        c.ya = Of(b.clone());
        Hm(c, a)
    }
}
g.bc = function(a) {
    return this.g.bc(a)
};
g.Hc = function() {
    return !1
};
g.Jc = function(a, b) {
    this.va = a.fb;
    if (0 == this.ha)
        if (b) {
            try {
                var c = this.j.parse(b)
            } catch (d) {
                c = this.g;
                c.ia = this.va;
                Sm(c, 2);
                return 
            }
            this.mb = c[0];
            this.nb = c[1]
    } else 
        c = this.g, c.ia = this.va, Sm(c, 2);
    else if (2 == this.ha)
        if (this.Db)
            Y(), this.Yb = w();
        else if ("11111" == b) {
            if (Y(), this.Db=!0, this.Cb = w(), c = this.Cb - this.tc, !N || mc(10) || 500 > c)
                this.va = 200, this.ea.cancel(), Y(), Tm(this.g, this, !0)
        } else 
            Y(), this.Cb = this.Yb = w(), this.Db=!1
    };
g.Bb = function() {
    this.va = this.ea.fb;
    if (this.ea.ka)
        0 == this.ha ? this.nb ? (this.ha = 1, Qm(this)) : (this.ha = 2, Rm(this)) : 2 == this.ha && (a=!1, (a=!N || mc(10) ? this.Db : 200 > this.Yb - this.Cb?!1 : !0) ? (Y(), Tm(this.g, this, !0)) : (Y(), Tm(this.g, this, !1)));
    else {
        0 == this.ha ? Y() : 2 == this.ha && Y();
        var a = this.g;
        a.ia = this.va;
        Sm(a, 2)
    }
};
g.ib = function() {
    return this.g.ib()
};
g.isActive = function() {
    return this.g.isActive()
};
g.ja = function(a) {
    this.g.ja(a)
};
function Um(a) {
    Zi.call(this);
    this.headers = new rd;
    this.Y = a || null;
    this.j=!1;
    this.W = this.g = null;
    this.xa = this.J = "";
    this.A = 0;
    this.o = "";
    this.k = this.qa = this.D = this.da=!1;
    this.B = 0;
    this.M = null;
    this.Ta = "";
    this.S = this.Ua=!1
}
x(Um, Zi);
var Vm = /^https?$/i, Wm = ["POST", "PUT"];
g = Um.prototype;
g.send = function(a, b, c, d) {
    if (this.g)
        throw Error("[goog.net.XhrIo] Object is active with another request=" + this.J + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.J = a;
    this.o = "";
    this.A = 0;
    this.xa = b;
    this.da=!1;
    this.j=!0;
    this.g = this.Y ? rm(this.Y) : rm(pm);
    this.W = this.Y ? nm(this.Y) : nm(pm);
    this.g.onreadystatechange = v(this.mc, this);
    try {
        xd(Xm(this, "Opening Xhr")), this.qa=!0, this.g.open(b, String(a), !0), this.qa=!1
    } catch (e) {
        xd(Xm(this, "Error opening Xhr: " + e.message));
        Ym(this, e);
        return 
    }
    a = c || "";
    var f = this.headers.clone();
    d && wd(d, function(a, b) {
        f.set(b, a)
    });
    d = Fa(f.ta(), Zm);
    c = l.FormData && a instanceof l.FormData;
    !Ha(Wm, b) || d || c || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    f.forEach(function(a, b) {
        this.g.setRequestHeader(b, a)
    }, this);
    this.Ta && (this.g.responseType = this.Ta);
    "withCredentials"in this.g && (this.g.withCredentials = this.Ua);
    try {
        $m(this), 0 < this.B && (this.S = an(this.g), xd(Xm(this, "Will abort after " + this.B + "ms if incomplete, xhr2 " + this.S)), this.S ? (this.g.timeout = this.B, this.g.ontimeout = v(this.nc,
        this)) : this.M = dj(this.nc, this.B, this)), xd(Xm(this, "Sending request")), this.D=!0, this.g.send(a), this.D=!1
    } catch (h) {
        xd(Xm(this, "Send error: " + h.message)), Ym(this, h)
    }
};
function an(a) {
    return N && lc(9) && fa(a.timeout) && n(a.ontimeout)
}
function Zm(a) {
    return "content-type" == a.toLowerCase()
}
g.nc = function() {
    "undefined" != typeof aa && this.g && (this.o = "Timed out after " + this.B + "ms, aborting", this.A = 8, Xm(this, this.o), $i(this, "timeout"), Km(this, 8))
};
function Ym(a, b) {
    a.j=!1;
    a.g && (a.k=!0, a.g.abort(), a.k=!1);
    a.o = b;
    a.A = 5;
    bn(a);
    cn(a)
}
function bn(a) {
    a.da || (a.da=!0, $i(a, "complete"), $i(a, "error"))
}
function Km(a, b) {
    a.g && a.j && (Xm(a, "Aborting"), a.j=!1, a.k=!0, a.g.abort(), a.k=!1, a.A = b || 7, $i(a, "complete"), $i(a, "abort"), cn(a))
}
g.F = function() {
    this.g && (this.j && (this.j=!1, this.k=!0, this.g.abort(), this.k=!1), cn(this, !0));
    Um.L.F.call(this)
};
g.mc = function() {
    this.H() || (this.qa || this.D || this.k ? dn(this) : this.se())
};
g.se = function() {
    dn(this)
};
function dn(a) {
    if (a.j && "undefined" != typeof aa)
        if (a.W[1] && 4 == zm(a) && 2 == a.getStatus())
            Xm(a, "Local request error detected and ignored");
        else if (a.D && 4 == zm(a))
            dj(a.mc, 0, a);
        else if ($i(a, "readystatechange"), 4 == zm(a)) {
            Xm(a, "Request complete");
            a.j=!1;
            try {
                var b = a.getStatus(), c;
                t:
                switch (b) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                    c=!0;
                    break t;
                default:
                    c=!1
                }
                var d;
                if (!(d = c)) {
                    var e;
                    if (e = 0 === b) {
                        var f = Xc(String(a.J))[1] || null;
                        if (!f && self.location)
                            var h = self.location.protocol, f = h.substr(0, h.length -
                            1);
                            e=!Vm.test(f ? f.toLowerCase() : "")
                        }
                        d = e
                }
                if (d)
                    $i(a, "complete"), $i(a, "success");
                else {
                    a.A = 6;
                    var k;
                    try {
                        k = 2 < zm(a) ? a.g.statusText : ""
                    } catch (m) {
                        k = ""
                    }
                    a.o = k + " [" + a.getStatus() + "]";
                    bn(a)
                }
            } finally {
                cn(a)
            }
    }
}
function cn(a, b) {
    if (a.g) {
        $m(a);
        var c = a.g, d = a.W[0] ? s: null;
        a.g = null;
        a.W = null;
        b || $i(a, "ready");
        try {
            c.onreadystatechange = d
        } catch (e) {}
    }
}
function $m(a) {
    a.g && a.S && (a.g.ontimeout = null);
    fa(a.M) && (l.clearTimeout(a.M), a.M = null)
}
g.isActive = function() {
    return !!this.g
};
function zm(a) {
    return a.g ? a.g.readyState : 0
}
g.getStatus = function() {
    try {
        return 2 < zm(this) ? this.g.status : - 1
    } catch (a) {
        return - 1
    }
};
function Am(a) {
    try {
        return a.g ? a.g.responseText : ""
    } catch (b) {
        return ""
    }
}
function Xm(a, b) {
    return b + " [" + a.xa + " " + a.J + " " + a.getStatus() + "]"
};
function en(a, b, c) {
    this.K = a || null;
    this.g = 1;
    this.j = [];
    this.A = [];
    this.o = new hm(null, !0);
    this.D = b || null;
    this.Z = null != c ? c : null
}
function fn(a, b) {
    this.g = a;
    this.map = b;
    this.context = null
}
g = en.prototype;
g.rb = null;
g.$ = null;
g.P = null;
g.Qb = null;
g.vb = null;
g.qc = null;
g.Ab = null;
g.hb = 0;
g.Od = 0;
g.U = null;
g.Fa = null;
g.ua = null;
g.Ma = null;
g.Aa = null;
g.yb = null;
g.Va =- 1;
g.xc =- 1;
g.ia =- 1;
g.gb = 0;
g.Za = 0;
g.Ja = 8;
var gn = new Zi;
function hn(a) {
    yi.call(this, "statevent", a)
}
x(hn, yi);
function jn(a, b) {
    yi.call(this, "timingevent", a);
    this.size = b
}
x(jn, yi);
function kn(a) {
    yi.call(this, "serverreachability", a)
}
x(kn, yi);
g = en.prototype;
g.connect = function(a, b, c, d, e) {
    Y();
    this.Qb = b;
    this.rb = c || {};
    d && n(e) && (this.rb.OSID = d, this.rb.OAID = e);
    this.Aa = new Om(this);
    this.Aa.Tb = null;
    this.Aa.j = this.o;
    this.Aa.connect(a)
};
g.disconnect = function() {
    ln(this);
    if (3 == this.g) {
        var a = this.hb++, b = this.vb.clone();
        P(b, "SID", this.k);
        P(b, "RID", a);
        P(b, "TYPE", "terminate");
        mn(this, b);
        a = new sm(this, 0, this.k, a, void 0);
        a.ab = 2;
        a.ya = Of(b.clone());
        (new Image).src = a.ya;
        a.jb = w();
        ym(a)
    }
    nn(this)
};
function ln(a) {
    if (a.Aa) {
        var b = a.Aa;
        b.ea && (b.ea.cancel(), b.ea = null);
        b.va =- 1;
        a.Aa = null
    }
    a.P && (a.P.cancel(), a.P = null);
    a.ua && (l.clearTimeout(a.ua), a.ua = null);
    on(a);
    a.$ && (a.$.cancel(), a.$ = null);
    a.Fa && (l.clearTimeout(a.Fa), a.Fa = null)
}
function pn(a, b) {
    if (0 == a.g)
        throw Error("Invalid operation: sending map when state is closed");
    a.j.push(new fn(a.Od++, b));
    2 != a.g && 3 != a.g || qn(a)
}
g.Hc = function() {
    return 0 == this.g
};
g.getState = function() {
    return this.g
};
function rn(a) {
    var b = 0;
    a.P && b++;
    a.$ && b++;
    return b
}
function qn(a) {
    a.$ || a.Fa || (a.Fa = Im(v(a.Bc, a), 0), a.gb = 0)
}
g.Bc = function(a) {
    this.Fa = null;
    sn(this, a)
};
function sn(a, b) {
    if (1 == a.g) {
        if (!b) {
            a.hb = Math.floor(1E5 * Math.random());
            var c = a.hb++, d = new sm(a, 0, "", c, void 0);
            d.Ha = null;
            var e = tn(a), f = a.vb.clone();
            P(f, "RID", c);
            a.K && P(f, "CVER", a.K);
            mn(a, f);
            vm(d, f, e);
            a.$ = d;
            a.g = 2
        }
    } else 
        3 == a.g && (b ? un(a, b) : 0 != a.j.length && (a.$ || un(a)))
}
function un(a, b) {
    var c, d;
    b ? 6 < a.Ja ? (a.j = a.A.concat(a.j), a.A.length = 0, c = a.hb - 1, d = tn(a)) : (c = b.D, d = b.Ia) : (c = a.hb++, d = tn(a));
    var e = a.vb.clone();
    P(e, "SID", a.k);
    P(e, "RID", c);
    P(e, "AID", a.Va);
    mn(a, e);
    c = new sm(a, 0, a.k, c, a.gb + 1);
    c.Ha = null;
    c.setTimeout(Math.round(1E4) + Math.round(1E4 * Math.random()));
    a.$ = c;
    vm(c, e, d)
}
function mn(a, b) {
    if (a.U) {
        var c = a.U.Yc(a);
        c && Wa(c, function(a, c) {
            P(b, c, a)
        })
    }
}
function tn(a) {
    var b = Math.min(a.j.length, 1E3), c = ["count=" + b], d;
    6 < a.Ja && 0 < b ? (d = a.j[0].g, c.push("ofs=" + d)) : d = 0;
    for (var e = 0; e < b; e++) {
        var f = a.j[e].g, h = a.j[e].map, f = 6 >= a.Ja ? e: f - d;
        try {
            wd(h, function(a, b) {
                c.push("req" + f + "_" + b + "=" + encodeURIComponent(a))
            })
        } catch (k) {
            c.push("req" + f + "_type=" + encodeURIComponent("_badmap"))
        }
    }
    a.A = a.A.concat(a.j.splice(0, b));
    return c.join("&")
}
function vn(a) {
    a.P || a.ua || (a.B = 1, a.ua = Im(v(a.Sc, a), 0), a.Za = 0)
}
function wn(a) {
    if (a.P || a.ua || 3 <= a.Za)
        return !1;
    a.B++;
    a.ua = Im(v(a.Sc, a), xn(a, a.Za));
    a.Za++;
    return !0
}
g.Sc = function() {
    this.ua = null;
    this.P = new sm(this, 0, this.k, "rpc", this.B);
    this.P.Ha = null;
    this.P.Vb = 0;
    var a = this.qc.clone();
    P(a, "RID", "rpc");
    P(a, "SID", this.k);
    P(a, "CI", this.yb ? "0" : "1");
    P(a, "AID", this.Va);
    mn(this, a);
    if (!N || mc(10))
        P(a, "TYPE", "xmlhttp"), xm(this.P, a, !0, this.Ab, !1);
    else {
        P(a, "TYPE", "html");
        var b = this.P, c = Boolean(this.Ab);
        b.ab = 3;
        b.ya = Of(a.clone());
        Hm(b, c)
    }
};
function Tm(a, b, c) {
    a.yb = c;
    a.ia = b.va;
    a.xe(1, 0);
    a.vb = Pm(a, null, a.Qb);
    qn(a)
}
g.Jc = function(a, b) {
    if (0 != this.g && (this.P == a || this.$ == a))
        if (this.ia = a.fb, this.$ == a && 3 == this.g)
            if (7 < this.Ja) {
                var c;
                try {
                    c = this.o.parse(b)
                } catch (d) {
                    c = null
                }
                if (t(c) && 3 == c.length)
                    if (0 == c[0])
                        t: {
                            if (!this.ua) {
                                if (this.P)
                                    if (this.P.jb + 3E3 < this.$.jb)
                                        on(this), this.P.cancel(), this.P = null;
                                    else 
                                        break t;
                                        wn(this);
                                        Y()
                            }
                        } else 
                            this.xc = c[1], 0 < this.xc - this.Va && 37500 > c[2] && this.yb && 0 == this.Za&&!this.Ma && (this.Ma = Im(v(this.yd, this), 6E3));
        else 
            Sm(this, 11)
        } else 
            "y2f%" != b && Sm(this, 11);
    else if (this.P == a && on(this), !/^[\s\xa0]*$/.test(b)) {
        c =
        this.o.parse(b);
        t(c);
        for (var e = 0; e < c.length; e++) {
            var f = c[e];
            this.Va = f[0];
            f = f[1];
            2 == this.g ? "c" == f[0] ? (this.k = f[1], this.Ab = f[2], f = f[3], null != f ? this.Ja = f : this.Ja = 6, this.g = 3, this.U && this.U.wc(this), this.qc = Pm(this, this.ib() ? this.Ab : null, this.Qb), vn(this)) : "stop" == f[0] && Sm(this, 7) : 3 == this.g && ("stop" == f[0] ? Sm(this, 7) : "noop" != f[0] && this.U && this.U.vc(this, f), this.Za = 0)
        }
    }
};
g.yd = function() {
    null != this.Ma && (this.Ma = null, this.P.cancel(), this.P = null, wn(this), Y())
};
function on(a) {
    null != a.Ma && (l.clearTimeout(a.Ma), a.Ma = null)
}
g.Bb = function(a) {
    var b;
    if (this.P == a)
        on(this), this.P = null, b = 2;
    else if (this.$ == a)
        this.$ = null, b = 1;
    else 
        return;
    this.ia = a.fb;
    if (0 != this.g)
        if (a.ka)
            1 == b ? (w(), $i(gn, new jn(gn, a.Ia ? a.Ia.length : 0)), qn(this), this.A.length = 0) : vn(this);
        else {
            var c = a.Ka, d;
            if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.ia)) {
                if (d = 1 == b)
                    this.$ || this.Fa || 1 == this.g || 2 <= this.gb ? d=!1 : (this.Fa = Im(v(this.Bc, this, a), xn(this, this.gb)), this.gb++, d=!0);
                    d=!(d || 2 == b && wn(this))
                }
                if (d)
                    switch (c) {
                    case 1:
                        Sm(this, 5);
                        break;
                    case 4:
                        Sm(this, 10);
                        break;
                    case 3:
                        Sm(this, 6);
                        break;
                    case 7:
                        Sm(this, 12);
                        break;
                    default:
                        Sm(this, 2)
                    }
                }
    };
function xn(a, b) {
    var c = 5E3 + Math.floor(1E4 * Math.random());
    a.isActive() || (c*=2);
    return c * b
}
g.xe = function(a) {
    if (!Ha(arguments, this.g))
        throw Error("Unexpected channel state: " + this.g);
    };
function Sm(a, b) {
    if (2 == b || 9 == b) {
        var c = null;
        a.U && (c = null);
        var d = v(a.Ie, a);
        c || (c = new yf("//www.google.com/images/cleardot.gif"), Of(c));
        Mm(c.toString(), 1E4, d)
    } else 
        Y();
    yn(a, b)
}
g.Ie = function(a) {
    a ? Y() : (Y(), yn(this, 8))
};
function yn(a, b) {
    a.g = 0;
    a.U && a.U.Gc(a, b);
    nn(a);
    ln(a)
}
function nn(a) {
    a.g = 0;
    a.ia =- 1;
    if (a.U)
        if (0 == a.A.length && 0 == a.j.length)
            a.U.Xb(a);
        else {
            var b = Pa(a.A), c = Pa(a.j);
            a.A.length = 0;
            a.j.length = 0;
            a.U.Xb(a, b, c)
        }
}
function Pm(a, b, c) {
    var d = Pf(c);
    if ("" != d.wa)
        b && Af(d, b + "." + d.wa), Bf(d, d.Oa);
    else 
        var e = window.location, d = Qf(e.protocol, b ? b + "." + e.hostname : e.hostname, e.port, c);
    a.rb && Wa(a.rb, function(a, b) {
        P(d, b, a)
    });
    P(d, "VER", a.Ja);
    mn(a, d);
    return d
}
g.bc = function(a) {
    if (a)
        throw Error("Can't create secondary domain capable XhrIo object.");
    a = new Um;
    a.Ua=!1;
    return a
};
g.isActive = function() {
    return !!this.U && this.U.isActive(this)
};
function Im(a, b) {
    if (!ga(a))
        throw Error("Fn must not be null and must be a function");
    return l.setTimeout(function() {
        a()
    }, b)
}
g.ja = function() {
    $i(gn, new kn(gn))
};
function Y() {
    $i(gn, new hn(gn))
}
g.ib = function() {
    return !(!N || mc(10))
};
function zn() {}
g = zn.prototype;
g.wc = function() {};
g.vc = function() {};
g.Gc = function() {};
g.Xb = function() {};
g.Yc = function() {
    return {}
};
g.isActive = function() {
    return !0
};
function An(a, b) {
    bj.call(this);
    if (ga(a))
        b && (a = v(a, b));
    else if (a && ga(a.handleEvent))
        a = v(a.handleEvent, a);
    else 
        throw Error("Invalid listener argument");
    this.D = a;
    Oi(this, "tick", v(this.B, this));
    this.stop();
    cj(this, 5E3 + 2E4 * Math.random())
}
x(An, bj);
An.prototype.o = 0;
An.prototype.B = function() {
    if (500 < this.g) {
        var a = this.g;
        24E4 > 2 * a && (a*=2);
        cj(this, a)
    }
    this.D()
};
An.prototype.start = function() {
    An.L.start.call(this);
    this.o = w() + this.g
};
An.prototype.stop = function() {
    this.o = 0;
    An.L.stop.call(this)
};
function Bn(a, b) {
    this.M = a;
    this.A = b;
    this.k = new F;
    this.j = new An(this.od, this);
    this.g = null;
    this.J=!1;
    this.B = null;
    this.Z = "";
    this.D = this.o = 0;
    this.K = []
}
x(Bn, zn);
g = Bn.prototype;
g.subscribe = function(a, b, c) {
    return this.k.subscribe(a, b, c)
};
g.unsubscribe = function(a, b, c) {
    return this.k.unsubscribe(a, b, c)
};
g.ma = function(a) {
    return this.k.ma(a)
};
g.publish = function(a, b) {
    return this.k.publish.apply(this.k, arguments)
};
g.dispose = function() {
    this.J || (this.J=!0, this.k.clear(), this.disconnect(), E(this.k))
};
g.H = function() {
    return this.J
};
function Cn(a) {
    return {
        firstTestResults: [""],
        secondTestResults: !a.g.yb,
        sessionId: a.g.k,
        arrayId: a.g.Va
    }
}
g.connect = function(a, b, c) {
    if (!this.g || 2 != this.g.getState()) {
        this.Z = "";
        this.j.stop();
        this.B = a || null;
        this.o = b || 0;
        a = this.M + "/test";
        b = this.M + "/bind";
        var d = new en("1", c ? c.firstTestResults : null, c ? c.secondTestResults : null), e = this.g;
        e && (e.U = null);
        d.U = this;
        this.g = d;
        e ? (3 != e.getState() && 0 == rn(e) || e.getState(), this.g.connect(a, b, this.A, e.k, e.Va)) : c ? this.g.connect(a, b, this.A, c.sessionId, c.arrayId) : this.g.connect(a, b, this.A)
    }
};
g.disconnect = function(a) {
    this.D = a || 0;
    this.j.stop();
    this.g && (3 == this.g.getState() && sn(this.g), this.g.disconnect());
    this.D = 0
};
g.sendMessage = function(a, b) {
    var c = {
        _sc: a
    };
    b && ib(c, b);
    this.j.enabled || 2 == (this.g ? this.g.getState() : 0) ? this.K.push(c) : this.g && 3 == this.g.getState() && pn(this.g, c)
};
g.wc = function() {
    var a = this.j;
    a.stop();
    cj(a, 5E3 + 2E4 * Math.random());
    this.B = null;
    this.o = 0;
    if (this.K.length) {
        a = this.K;
        this.K = [];
        for (var b = 0, c = a.length; b < c; ++b)
            pn(this.g, a[b])
    }
    this.publish("handlerOpened")
};
g.Gc = function(a, b) {
    var c = 2 == b && 401 == this.g.ia;
    if (4 != b&&!c) {
        if (6 == b || 410 == this.g.ia)
            c = this.j, c.stop(), cj(c, 500);
        this.j.start()
    }
    this.publish("handlerError", b)
};
g.Xb = function(a, b, c) {
    if (!this.j.enabled)
        this.publish("handlerClosed");
    else if (c)
        for (a = 0, b = c.length; a < b; ++a)
            this.K.push(c[a].map)
};
g.Yc = function() {
    var a = {
        v: 2
    };
    this.Z && (a.gsessionid = this.Z);
    0 != this.o && (a.ui = "" + this.o);
    0 != this.D && (a.ui = "" + this.D);
    this.B && ib(a, this.B);
    return a
};
g.vc = function(a, b) {
    if ("S" == b[0])
        this.Z = b[1];
    else if ("gracefulReconnect" == b[0]) {
        var c = this.j;
        c.stop();
        cj(c, 500);
        this.j.start();
        this.g.disconnect()
    } else 
        this.publish("handlerMessage", new fm(b[0], b[1]))
};
function Dn(a, b) {
    (a.A.loungeIdToken = b) || a.j.stop()
}
g.getDeviceId = function() {
    return this.A.id
};
g.od = function() {
    this.j.stop();
    0 != rn(this.g) ? this.j.start() : this.connect(this.B, this.o)
};
function En(a) {
    Fn(this, a)
}
function Gn(a, b) {
    if (a.j)
        throw Error(b + " is not allowed in V3.");
}
function Hn(a) {
    a.K =- 1;
    a.B=!1;
    a.A = null;
    a.g =- 1;
    a.k = null;
    a.o = 0;
    a.D = w()
}
function Fn(a, b) {
    a.videoIds = [];
    a.j = "";
    a.index =- 1;
    a.videoId = "";
    Hn(a);
    b && (a.videoIds = b.videoIds, a.index = b.index, a.j = b.listId, a.videoId = b.videoId, a.g = b.playerState, a.k = b.errorReason, a.K = b.volume, a.B = b.muted, a.A = b.trackData, a.o = b.playerTime, a.D = b.playerTimeAt)
}
function In(a) {
    return a.j ? a.videoId : a.videoIds[a.index]
}
function Jn(a) {
    switch (a.g) {
    case 1:
        return (w() - a.D) / 1E3 + a.o;
    case - 1E3:
        return 0
    }
    return a.o
}
En.prototype.setVideoId = function(a) {
    Gn(this, "setVideoId");
    var b = this.index;
    this.index = Ba(this.videoIds, a);
    b != this.index && Hn(this);
    return - 1 != b
};
function Kn(a, b, c) {
    Gn(a, "setPlaylist");
    c = c || In(a);
    Ta(a.videoIds, b) && c == In(a) || (a.videoIds = Pa(b), a.setVideoId(c))
}
En.prototype.add = function(a) {
    Gn(this, "add");
    return a&&!Ha(this.videoIds, a) ? (this.videoIds.push(a), !0) : !1
};
En.prototype.remove = function(a) {
    Gn(this, "remove");
    var b = In(this);
    return Ma(this.videoIds, a) ? (this.index = Ba(this.videoIds, b), !0) : !1
};
function Ln(a) {
    var b = {};
    b.videoIds = Pa(a.videoIds);
    b.index = a.index;
    b.listId = a.j;
    b.videoId = a.videoId;
    b.playerState = a.g;
    b.errorReason = a.k;
    b.volume = a.K;
    b.muted = a.B;
    b.trackData = fb(a.A);
    b.playerTime = a.o;
    b.playerTimeAt = a.D;
    return b
}
En.prototype.clone = function() {
    return new En(Ln(this))
};
function Z(a, b, c) {
    T.call(this);
    this.pa = a;
    this.M = [];
    this.M.push(O(window, "beforeunload", v(this.Dd, this)));
    this.j = [];
    this.C = new En;
    3 == c["mdx-version"] && (this.C.j = "RQ" + b.token);
    this.S = b.id;
    this.g = Mn(this, c);
    this.g.subscribe("handlerOpened", this.Id, this);
    this.g.subscribe("handlerClosed", this.Ed, this);
    this.g.subscribe("handlerError", this.Fd, this);
    this.C.j ? this.g.subscribe("handlerMessage", this.Gd, this) : this.g.subscribe("handlerMessage", this.Hd, this);
    Dn(this.g, b.token);
    this.subscribe("remoteQueueChange",
    function() {
        var a = this.C.videoId;
        ok() && R("yt-remote-session-video-id", a)
    }, this)
}
x(Z, T);
g = Z.prototype;
g.pb = NaN;
g.cc=!1;
g.xb = NaN;
g.ic = NaN;
g.ub = NaN;
g.connect = function(a, b) {
    if (b) {
        if (this.C.j) {
            var c = b.listId, d = b.videoId, e = b.index, f = b.currentTime || 0;
            5 >= f && (f = 0);
            h = {
                videoId: d,
                currentTime: f
            };
            c && (h.listId = c);
            n(e) && (h.currentIndex = e);
            c && (this.C.j = c);
            this.C.videoId = d;
            this.C.index = e || 0
        } else {
            var d = b.videoIds[b.index], f = b.currentTime || 0;
            5 >= f && (f = 0);
            var h = {
                videoIds: d,
                videoId: d,
                currentTime: f
            };
            this.C.videoIds = [d];
            this.C.index = 0
        }
        this.C.state = 3;
        c = this.C;
        c.o = f;
        c.D = w();
        this.I("Connecting with setPlaylist and params: " + Q(h));
        this.g.connect({
            method: "setPlaylist",
            params: Q(h)
        }, a, sk())
    } else 
        this.I("Connecting without params"), this.g.connect({}, a, sk());
    Nn(this)
};
g.dispose = function() {
    this.H() || (this.publish("beforeDispose"), On(this, 3));
    Z.L.dispose.call(this)
};
g.F = function() {
    Pn(this);
    Qn(this);
    Rn(this);
    I(this.ub);
    this.ub = NaN;
    this.o = null;
    Lc(this.M);
    this.M.length = 0;
    this.g.dispose();
    Z.L.F.call(this);
    this.j = this.C = this.g = null
};
g.I = function(a) {
    zj("conn", a)
};
g.Dd = function() {
    this.B(2)
};
function Mn(a, b) {
    return new Bn(Tj(a.pa, "/bc", void 0, !1), b)
}
function On(a, b) {
    a.publish("proxyStateChange", b)
}
function Nn(a) {
    a.pb = H(v(function() {
        this.I("Connecting timeout");
        this.B(1)
    }, a), 2E4)
}
function Pn(a) {
    I(a.pb);
    a.pb = NaN
}
function Rn(a) {
    I(a.xb);
    a.xb = NaN
}
function Sn(a) {
    Qn(a);
    a.ic = H(v(function() {
        this.k("getNowPlaying")
    }, a), 2E4)
}
function Qn(a) {
    I(a.ic);
    a.ic = NaN
}
function Tn(a) {
    var b = a.g;
    return !!b.g && 3 == b.g.getState() && isNaN(a.pb)
}
g.Id = function() {
    this.I("Channel opened");
    this.cc && (this.cc=!1, Rn(this), this.xb = H(v(function() {
        this.I("Timing out waiting for a screen.");
        this.B(1)
    }, this), 15E3));
    Ck(Cn(this.g), this.S)
};
g.Ed = function() {
    this.I("Channel closed");
    isNaN(this.pb) ? Dk(!0) : Dk();
    this.dispose()
};
g.Fd = function(a) {
    Dk();
    isNaN(this.D()) ? (this.I("Channel error: " + a + " without reconnection"), this.dispose()) : (this.cc=!0, this.I("Channel error: " + a + " with reconnection in " + this.D() + " ms"), On(this, 2))
};
function Un(a, b) {
    b && (Pn(a), Rn(a));
    b == Tn(a) ? b && (On(a, 1), a.k("getSubtitlesTrack")) : b ? (a.J() && Fn(a.C), On(a, 1), a.k("getNowPlaying")) : a.B(1)
}
function Vn(a, b) {
    var c = b.params.videoId;
    delete b.params.videoId;
    c == a.C.videoId && (cb(b.params) ? a.C.A = null : a.C.A = b.params, a.publish("remotePlayerChange"))
}
function Wn(a, b) {
    var c = b.params.videoId || b.params.video_id, d = parseInt(b.params.currentIndex, 10);
    a.C.j = b.params.listId;
    var e = a.C, f = e.videoId;
    e.videoId = c;
    e.index = d;
    c != f && Hn(e);
    a.publish("remoteQueueChange")
}
function Xn(a, b) {
    b.params = b.params || {};
    Wn(a, b);
    Yn(a, b)
}
function Yn(a, b) {
    var c = parseInt(b.params.currentTime || b.params.current_time, 10), d = a.C;
    d.o = isNaN(c) ? 0 : c;
    d.D = w();
    c = parseInt(b.params.state, 10);
    c = isNaN(c)?-1 : c;
    - 1 == c&&-1E3 == a.C.g && (c =- 1E3);
    a.C.g = c;
    d = null;
    - 1E3 == c && (d = a.C.k || "unknown", n(b.params.currentError) && (d = tg(b.params.currentError).reason || d));
    a.C.k = d;
    1 == a.C.g ? Sn(a) : Qn(a);
    a.publish("remotePlayerChange")
}
function Zn(a, b) {
    var c = "true" == b.params.muted;
    a.C.K = parseInt(b.params.volume, 10);
    a.C.B = c;
    a.publish("remotePlayerChange")
}
g.Gd = function(a) {
    a.params ? this.I("Received: action=" + a.action + ", params=" + Q(a.params)) : this.I("Received: action=" + a.action + " {}");
    switch (a.action) {
    case "loungeStatus":
        a = tg(a.params.devices);
        this.j = B(a, function(a) {
            return new jk(a)
        });
        a=!!Fa(this.j, function(a) {
            return "LOUNGE_SCREEN" == a.type
        });
        Un(this, a);
        break;
    case "loungeScreenConnected":
        Un(this, !0);
        break;
    case "loungeScreenDisconnected":
        Na(this.j, function(a) {
            return "LOUNGE_SCREEN" == a.type
        });
        Un(this, !1);
        break;
    case "remoteConnected":
        var b = new jk(tg(a.params.device));
        Fa(this.j, function(a) {
            return a.equals(b)
        }) || La(this.j, b);
        break;
    case "remoteDisconnected":
        b = new jk(tg(a.params.device));
        Na(this.j, function(a) {
            return a.equals(b)
        });
        break;
    case "gracefulDisconnect":
        break;
    case "playlistModified":
        Wn(this, a);
        break;
    case "nowPlaying":
        Xn(this, a);
        break;
    case "onStateChange":
        Yn(this, a);
        break;
    case "onVolumeChanged":
        Zn(this, a);
        break;
    case "onSubtitlesTrackChanged":
        Vn(this, a);
        break;
    default:
        this.I("Unrecognized action: " + a.action)
    }
};
g.Hd = function(a) {
    a.params ? this.I("Received: action=" + a.action + ", params=" + Q(a.params)) : this.I("Received: action=" + a.action);
    $n(this, a);
    ao(this, a);
    if (Tn(this)) {
        var b = this.C.clone(), c=!1, d, e, f, h, k, m, q;
        a.params && (d = a.params.videoId || a.params.video_id, e = a.params.videoIds || a.params.video_ids, f = a.params.state, h = a.params.currentTime || a.params.current_time, k = a.params.volume, m = a.params.muted, n(a.params.currentError) && (q = tg(a.params.currentError)));
        if ("onSubtitlesTrackChanged" == a.action)
            d == In(this.C) && (delete a.params.videoId,
            cb(a.params) ? this.C.A = null : this.C.A = a.params, this.publish("remotePlayerChange"));
        else if (In(this.C) || "onStateChange" != a.action)
            "playlistModified" != a.action && "nowPlayingPlaylist" != a.action || e ? (d || "nowPlaying" != a.action && "nowPlayingPlaylist" != a.action ? d || (d = In(this.C)) : this.C.setVideoId(""), e && (e = e.split(","), Kn(this.C, e, d))) : Kn(this.C, []), this.C.add(d) && this.k("getPlaylist"), d && this.C.setVideoId(d), b.index == this.C.index && Ta(b.videoIds, this.C.videoIds) || this.publish("remoteQueueChange"), n(f) && (b = parseInt(f,
            10), b = isNaN(b)?-1 : b, - 1 == b&&-1E3 == this.C.g && (b =- 1E3), 0 == b && "0" == h && (b =- 1), c = c || b != this.C.g, this.C.g = b, d = null, - 1E3 == b && (d = this.C.k || "unknown", q && (d = q.reason || d)), c = c || this.C.k != d, this.C.k = d, 1 == this.C.g ? Sn(this) : Qn(this)), "onError" != a.action||-1 != this.C.g&&-1E3 != this.C.g || (a = tg(a.params.errors) || [], 1 == a.length && "PLAYER_ERROR" == a[0].error && a[0].videoId == In(this.C) && (this.C.g =- 1E3, this.C.k = a[0].reason || "unknown", c=!0)), h && (b = parseInt(h, 10), c = this.C, c.o = isNaN(b) ? 0 : b, c.D = w(), c=!0), n(k) && (b = parseInt(k, 10),
        isNaN(b) || (c = c || this.C.K != b, this.C.K = b), n(m) && (m = "true" == m, c = c || this.C.B != m, this.C.B = m)), c && this.publish("remotePlayerChange")
    }
};
function $n(a, b) {
    switch (b.action) {
    case "loungeStatus":
        var c = tg(b.params.devices);
        a.j = B(c, function(a) {
            return new jk(a)
        });
        break;
    case "loungeScreenDisconnected":
        Na(a.j, function(a) {
            return "LOUNGE_SCREEN" == a.type
        });
        break;
    case "remoteConnected":
        var d = new jk(tg(b.params.device));
        Fa(a.j, function(a) {
            return a.equals(d)
        }) || La(a.j, d);
        break;
    case "remoteDisconnected":
        d = new jk(tg(b.params.device)), Na(a.j, function(a) {
            return a.equals(d)
        })
    }
}
function ao(a, b) {
    var c=!1;
    if ("loungeStatus" == b.action)
        c=!!Fa(a.j, function(a) {
            return "LOUNGE_SCREEN" == a.type
        });
    else if ("loungeScreenConnected" == b.action)
        c=!0;
    else if ("loungeScreenDisconnected" == b.action)
        c=!1;
    else 
        return;
    if (!isNaN(a.xb))
        if (c)
            Rn(a);
        else 
            return;
    c == Tn(a) ? c && On(a, 1) : c ? (Pn(a), a.J() && Fn(a.C), On(a, 1), a.k("getNowPlaying")) : a.B(1)
}
g.qd = function() {
    if (this.o) {
        var a = this.o;
        this.o = null;
        this.C.videoId != a && this.k("getNowPlaying")
    }
};
Z.prototype.subscribe = Z.prototype.subscribe;
Z.prototype.unsubscribeByKey = Z.prototype.ma;
Z.prototype.da = function() {
    var a = 3;
    this.H() || (a = 0, isNaN(this.D()) ? Tn(this) && (a = 1) : a = 2);
    return a
};
Z.prototype.getProxyState = Z.prototype.da;
Z.prototype.B = function(a) {
    this.I("Disconnecting with " + a);
    Pn(this);
    this.publish("beforeDisconnect", a);
    1 == a && Dk();
    this.g.disconnect(a);
    this.dispose()
};
Z.prototype.disconnect = Z.prototype.B;
Z.prototype.Y = function() {
    var a = this.C;
    if (this.o) {
        var b = a = this.C.clone(), c = this.o, d = a.index, e = b.videoId;
        b.videoId = c;
        b.index = d;
        c != e && Hn(b)
    }
    return Ln(a)
};
Z.prototype.getPlayerContextData = Z.prototype.Y;
Z.prototype.qa = function(a) {
    var b = new En(a);
    b.videoId && b.videoId != this.C.videoId && (this.o = b.videoId, I(this.ub), this.ub = H(v(this.qd, this), 5E3));
    var c = [];
    this.C.j == b.j && this.C.videoId == b.videoId && this.C.index == b.index && Ta(this.C.videoIds, b.videoIds) || c.push("remoteQueueChange");
    this.C.g == b.g && this.C.K == b.K && this.C.B == b.B && Jn(this.C) == Jn(b) && Q(this.C.A) == Q(b.A) || c.push("remotePlayerChange");
    Fn(this.C, a);
    A(c, function(a) {
        this.publish(a)
    }, this)
};
Z.prototype.setPlayerContextData = Z.prototype.qa;
Z.prototype.W = function() {
    return this.g.A.loungeIdToken
};
Z.prototype.getLoungeToken = Z.prototype.W;
Z.prototype.J = function() {
    var a = this.g.getDeviceId(), b = Fa(this.j, function(b) {
        return "REMOTE_CONTROL" == b.type && b.id != a
    });
    return b ? b.id : ""
};
Z.prototype.getOtherConnectedRemoteId = Z.prototype.J;
Z.prototype.D = function() {
    var a = this.g;
    return a.j.enabled ? a.j.o - w() : NaN
};
Z.prototype.getReconnectTimeout = Z.prototype.D;
Z.prototype.xa = function() {
    if (!isNaN(this.D())) {
        var a = this.g.j;
        a.enabled && (a.stop(), a.start(), a.B())
    }
};
Z.prototype.reconnect = Z.prototype.xa;
Z.prototype.k = function(a, b) {
    b ? this.I("Sending: action=" + a + ", params=" + Q(b)) : this.I("Sending: action=" + a);
    this.g.sendMessage(a, b)
};
Z.prototype.sendMessage = Z.prototype.k;
function bo(a) {
    T.call(this);
    this.k = a;
    this.la = co();
    this.I("Initializing local screens: " + Kj(this.la));
    this.za = eo();
    this.I("Initializing account screens: " + Kj(this.za));
    this.Rb = null;
    this.g = [];
    this.j = [];
    fo(this, am() || []);
    this.I("Initializing DIAL devices: " + Wj(this.j));
    a = Ij(zk());
    go(this, a);
    this.I("Initializing online screens: " + Kj(this.g));
    this.o = w() + 3E5;
    ho(this)
}
x(bo, T);
var io = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
g = bo.prototype;
g.qb = NaN;
g.Mb = "";
g.I = function(a) {
    zj("RM", a)
};
g.O = function(a) {
    zj("RM", a)
};
function eo() {
    var a = co(), b = Ij(zk());
    return Ca(b, function(b) {
        return !ek(a, b)
    })
}
function co() {
    var a = Ij(uk());
    return Ca(a, function(a) {
        return !a.uuid
    })
}
function ho(a) {
    J("yt-remote-cast-device-list-update", function() {
        var a = am();
        fo(this, a || [])
    }, a);
    J("yt-remote-cast-device-status-update", a.te, a);
    a.Nb();
    var b = w() > a.o ? 2E4: 1E4;
    vb(v(a.Nb, a), b)
}
g.publish = function(a, b) {
    if (this.H())
        return !1;
    this.I("Firing " + a);
    return this.A.publish.apply(this.A, arguments)
};
g.Nb = function() {
    var a = am() || [];
    Ia(a) || fo(this, a);
    a = jo(this);
    Ia(a) || (Da(a, function(a) {
        return !ek(this.za, a)
    }, this) && xk() ? ko(this) : lo(this, a))
};
function mo(a) {
    go(a, a.g, !0);
    fo(a, am() || []);
    a.publish("managedScreenChange", jo(a))
}
function no(a, b) {
    var c = jo(a);
    return Ca(b, function(a) {
        return a.uuid ? (a = dk(this.j, a.uuid), !!a && "RUNNING" == a.status) : !!ek(c, a)
    }, a)
}
function fo(a, b) {
    var c=!1;
    A(b, function(a) {
        var b = V(this.la, a.id);
        b && b.name != a.name && (this.I("Renaming screen id " + b.id + " from " + b.name + " to " + a.name), b.name = a.name, c=!0)
    }, a);
    c && (a.I("Renaming due to DIAL."), oo(a));
    Ak(ak(b));
    var d=!Ta(a.j, b, ck);
    d && a.I("Updating DIAL devices: " + Wj(a.j) + " to " + Wj(b));
    a.j = b;
    go(a, a.g);
    d && a.publish("onlineReceiverChange")
}
g.te = function(a) {
    var b = dk(this.j, a.id);
    b && (this.I("Updating DIAL device: " + b.id + "(" + b.name + ") from status: " + b.status + " to status: " + a.status + " and from activityId: " + b.activityId + " to activityId: " + a.activityId), b.activityId = a.activityId, b.status = a.status, Ak(ak(this.j)));
    go(this, this.g)
};
function go(a, b, c) {
    var d = no(a, b), e=!Ta(a.g, d, Fj);
    if (e || c)
        Ia(b) || yk(B(d, Gj));
    e && (a.I("Updating online screens: " + Kj(a.g) + " -> " + Kj(d)), a.g = d, a.publish("onlineReceiverChange"))
}
function lo(a, b) {
    var c = [], d = {};
    A(b, function(a) {
        a.token && (d[a.token] = a, c.push(a.token))
    });
    var e = {
        method: "POST",
        T: {
            lounge_token: c.join(",")
        },
        context: a,
        aa: function(a, b) {
            var c = [];
            A(b.screens || [], function(a) {
                "online" == a.status && c.push(d[a.loungeToken])
            });
            var e = this.Rb ? po(this, this.Rb): null;
            e&&!ek(c, e) && c.push(e);
            go(this, c, !0)
        }
    };
    Xh(Tj(a.k, "/pairing/get_screen_availability"), e)
}
function ko(a) {
    var b = jo(a), c = B(b, function(a) {
        return a.id
    });
    Ia(c) || (a.I("Updating lounge tokens for: " + Q(c)), Xh(Tj(a.k, "/pairing/get_lounge_token_batch"), {
        T: {
            screen_ids: c.join(",")
        },
        method: "POST",
        context: a,
        aa: function(a, c) {
            qo(this, c.screens || []);
            this.la = Ca(this.la, function(a) {
                return !!a.token
            });
            oo(this);
            lo(this, b)
        }
    }))
}
function qo(a, b) {
    A(Oa(a.la, a.za), function(a) {
        var d = Fa(b, function(b) {
            return a.id == b.screenId
        });
        d && (a.token = d.loungeToken)
    })
}
function oo(a) {
    var b = co();
    Ta(a.la, b, Fj) || (a.I("Saving local screens: " + Kj(b) + " to " + Kj(a.la)), tk(B(a.la, Gj)), mo(a))
}
function ro(a, b, c) {
    var d = Ga(b, function(a) {
        return Ej(c, a)
    }), e = 0 > d;
    0 > d ? b.push(c) : b[d] = c;
    ek(a.g, c) || a.g.push(c);
    return e
}
g.Qc = function(a, b) {
    for (var c = jo(this), c = B(c, function(a) {
        return a.name
    }), d = a, e = 2; Ha(c, d);)
        d = b.call(l, e), e++;
    return d
};
g.Lc = function(a, b, c) {
    var d=!1;
    b >= io.length && (this.I("Pairing DIAL device " + a + " with " + c + " timed out."), d=!0);
    var e = dk(this.j, a);
    if (!e)
        this.I("Pairing DIAL device " + a + " with " + c + " failed: no device for " + a), d=!0;
    else if ("ERROR" == e.status || "STOPPED" == e.status)
        this.I("Pairing DIAL device " + a + " with " + c + " failed: launch error on " + a), d=!0;
    d ? (so(this), this.publish("screenPair", null)) : Xh(Tj(this.k, "/pairing/get_screen"), {
        method: "POST",
        T: {
            pairing_code: c
        },
        context: this,
        aa: function(a, b) {
            if (c == this.Mb) {
                so(this);
                var d = new Cj(b.screen);
                d.name = e.name;
                d.uuid = e.id;
                this.I("Pairing " + c + " succeeded.");
                var m = ro(this, this.la, d);
                this.I("Paired with " + (m ? "a new" : "an old") + " local screen:" + Jj(d));
                oo(this);
                this.publish("screenPair", d)
            }
        },
        onError: function() {
            c == this.Mb && (this.I("Polling pairing code: " + c), I(this.qb), this.qb = H(v(this.Lc, this, a, b + 1, c), io[b]))
        }
    })
};
function to(a, b, c) {
    var d = $, e = "";
    so(d);
    if (dk(d.j, a)) {
        if (!e) {
            var f = e = Xj();
            Ul();
            var h = cm(a), k = Rl();
            if (k && h) {
                var m = new cast.Receiver(h.id, h.name), m = new cast.LaunchRequest("YouTube", m);
                m.parameters = "pairingCode=" + f;
                m.description = new cast.LaunchDescription;
                m.description.text = document.title;
                b && (m.parameters += "&v=" + b, c && (m.parameters += "&t=" + Math.round(c)), m.description.url = "http://i.ytimg.com/vi/" + b + "/default.jpg");
                "UNKNOWN" != h.status && (h.status = "UNKNOWN", Zl(h), K("yt-remote-cast-device-status-update", h));
                Pl("Sending a cast launch request with params: " + m.parameters);
                k.launch(m, na(dm, a))
            } else 
                Pl("No cast API or no cast device. Dropping cast launch.")
            }
        d.Mb = e;
        d.qb = H(v(d.Lc, d, a, 0, e), io[0])
    } else 
        d.I("No DIAL device with id: " + a)
}
function so(a) {
    I(a.qb);
    a.qb = NaN;
    a.Mb = ""
}
function po(a, b) {
    var c = V(jo(a), b);
    a.I("Found screen: " + Jj(c) + " with key: " + b);
    return c
}
function uo(a) {
    var b = $, c = V(b.g, a);
    b.I("Found online screen: " + Jj(c) + " with key: " + a);
    return c
}
function vo(a) {
    var b = $, c = dk(b.j, a);
    if (!c) {
        var d = V(b.la, a);
        d && (c = dk(b.j, d.uuid))
    }
    b.I("Found DIAL: " + (c ? c.toString() : "null") + " with key: " + a);
    return c
}
function jo(a) {
    return Oa(a.za, Ca(a.la, function(a) {
        return !ek(this.za, a)
    }, a))
}
g.ne = function() {
    var a = Tj(this.k, "/screens");
    Xh(a, {
        method: "GET",
        context: this,
        withCredentials: !0,
        aa: function(a, c) {
            this.za = B(Za(c), function(a) {
                return new Cj(a)
            });
            this.I("Load account screens successfully.");
            this.Nb();
            mo(this);
            this.publish("accountScreenLoad")
        },
        onError: function() {
            this.O("Load account screens failed.");
            wo(this)
        }
    })
};
function wo(a) {
    Ia(a.za) && Ia(eo()) || (a.I("Clear cached account screens."), a.za = [], a.Nb(), mo(a))
};
function xo(a) {
    fk.call(this, "ScreenServiceProxy");
    this.X = a;
    this.g = [];
    this.g.push(this.X.$_s("screenChange", v(this.ie, this)));
    this.g.push(this.X.$_s("onlineScreenChange", v(this.he, this)))
}
x(xo, fk);
g = xo.prototype;
g.V = function(a) {
    return this.X.$_gs(a)
};
g.contains = function(a) {
    return !!this.X.$_c(a)
};
g.get = function(a) {
    return this.X.$_g(a)
};
g.start = function(a) {
    this.X.$_st(a)
};
g.add = function(a, b, c) {
    this.X.$_a(a, b, c)
};
g.remove = function(a, b, c) {
    this.X.$_r(a, b, c)
};
g.Da = function(a, b, c, d) {
    this.X.$_un(a, b, c, d)
};
g.F = function() {
    for (var a = 0, b = this.g.length; a < b; ++a)
        this.X.$_ubk(this.g[a]);
    this.g.length = 0;
    this.X = null;
    xo.L.F.call(this)
};
g.ie = function() {
    this.publish("screenChange")
};
g.he = function() {
    this.publish("onlineScreenChange")
};
W.prototype.$_st = W.prototype.start;
W.prototype.$_gspc = W.prototype.We;
W.prototype.$_c = W.prototype.contains;
W.prototype.$_g = W.prototype.get;
W.prototype.$_a = W.prototype.add;
W.prototype.$_un = W.prototype.Da;
W.prototype.$_r = W.prototype.remove;
W.prototype.$_gs = W.prototype.V;
W.prototype.$_gos = W.prototype.zc;
W.prototype.$_s = W.prototype.subscribe;
W.prototype.$_ubk = W.prototype.ma;
function yo(a) {
    var b=!!G("MDX_ENABLE_CASTV2"), c=!!G("MDX_ENABLE_QUEUE");
    b ? p("yt.mdx.remote.castv2_", !0, void 0) : Ul();
    Lg && Kg();
    lk();
    zo || (zo = new Sj, Ek() && (zo.g = "/api/loungedev"));
    $ || b || ($ = new bo(zo), $.subscribe("screenPair", Ao), $.subscribe("managedScreenChange", Bo), $.subscribe("onlineReceiverChange", function() {
        K("yt-remote-receiver-availability-change")
    }));
    Co || (Co = r("yt.mdx.remote.deferredProxies_") || [], p("yt.mdx.remote.deferredProxies_", Co, void 0));
    Do(c);
    c = Eo();
    if (b&&!c) {
        var d = new W(zo, Fo(a));
        p("yt.mdx.remote.screenService_",
        d, void 0);
        c = Eo();
        ul(d, function(a) {
            a ? Go() && Ml(Go(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                K("yt-remote-receiver-availability-change")
            })
        })
    }
    if (a&&!r("yt.mdx.remote.initialized_")) {
        p("yt.mdx.remote.initialized_", !0, void 0);
        Ho("Initializing: " + Q(a));
        Io.push(J("yt-remote-cast2-availability-change", function() {
            K("yt-remote-receiver-availability-change")
        }));
        Io.push(J("yt-remote-cast2-receiver-selected", function() {
            Jo(null);
            K("yt-remote-auto-connect", "cast-selector-receiver")
        }));
        Io.push(J("yt-remote-cast2-session-change",
        Ko));
        Io.push(J("yt-remote-connection-change", function(a) {
            a ? Ml(Go(), "YouTube TV") : Lo() || (Ml(null, null), Il())
        }));
        var e = Mo();
        a.isAuto && (e.id += "#dial");
        e.name = a.device;
        e.app = a.app;
        Ho(" -- with channel params: " + Q(e));
        No(e);
        b && c.start(Fo(a));
        Go() || Oo();
        $ && (a.loadAccountScreens || Go() ? $.ne() : wo($))
    }
}
function Po() {
    Fb(Io);
    Io.length = 0;
    E(Qo);
    Qo = null;
    Co && (A(Co, function(a) {
        a(null)
    }), Co.length = 0, Co = null, p("yt.mdx.remote.deferredProxies_", null, void 0));
    $ && (E($), $ = null);
    zo = null;
    Yl()
}
function Ro() {
    if (So() && Gl()) {
        var a = [];
        if (S("yt-remote-cast-available") || r("yt.mdx.remote.cloudview.castButtonShown_") || To())
            a.push({
                key: "cast-selector-receiver",
                name: Uo()
            }), p("yt.mdx.remote.cloudview.castButtonShown_", !0, void 0);
        return a
    }
    if (r("yt.mdx.remote.cloudview.initializing_"))
        return [];
    var b = [], b = Vo() ? Eo().X.$_gos(): Ij(zk());
    (a = Wo()) && To() && (ek(b, a) || b.push(a));
    Vo() || (a = bk(Bk()), a = Ca(a, function(a) {
        return !V(b, a.id)
    }), b = Oa(b, a));
    return Zj(b)
}
function Xo() {
    if (So() && Gl()) {
        var a = Hl();
        return a ? {
            key: "cast-selector-receiver",
            name: a
        } : null
    }
    var a = Ro(), b = Yo(), c = Wo();
    c || (c = Lo());
    return Fa(a, function(a) {
        return c && Dj(c, a.key) || b && (a = vo(a.key)) && a.id == b?!0 : !1
    })
}
function Uo() {
    if (So() && Gl())
        return Hl();
    var a = Wo();
    return a ? a.name : null
}
function Wo() {
    var a = Go();
    if (!a)
        return null;
    if (!$) {
        var b = Eo().V();
        return V(b, a)
    }
    return po($, a)
}
function Ko(a) {
    Ho("remote.onCastSessionChange_: " + Jj(a));
    if (a) {
        var b = Wo();
        b && b.id == a.id ? Ml(b.id, "YouTube TV") : (b && Zo(), $o(a, 1))
    } else 
        Zo()
}
function ap(a, b) {
    Ho("Connecting to: " + Q(a));
    if ("cast-selector-receiver" == a.key)
        Jo(b || null), Ll(b || null);
    else {
        Zo();
        Jo(b || null);
        var c = null;
        $ ? c = uo(a.key) : (c = Eo().V(), c = V(c, a.key));
        if (c)
            $o(c, 1);
        else {
            if ($ && (c = vo(a.key))) {
                bp(c);
                return 
            }
            H(function() {
                cp(null)
            }, 0)
        }
    }
}
function Zo() {
    $ && so($);
    t: {
        var a = To();
        if (a && (a = a.getOtherConnectedRemoteId())) {
            Ho("Do not stop DIAL due to " + a);
            dp("");
            break t
        }(a = Yo()) ? (Ho("Stopping DIAL: " + a), em(a), dp("")) : (a = Wo()) && a.uuid && (Ho("Stopping DIAL: " + a.uuid), em(a.uuid))
    }
    Kl() ? Cl().stopSession() : zl("stopSession called before API ready.");
    (a = To()) ? a.disconnect(1) : (Gb("yt-remote-before-disconnect", 1), Gb("yt-remote-connection-change", !1));
    cp(null)
}
function Ho(a) {
    zj("remote", a)
}
function So() {
    return !!r("yt.mdx.remote.castv2_")
}
function Vo() {
    return r("yt.mdx.remote.screenService_")
}
function Eo() {
    if (!Qo) {
        var a = Vo();
        a && (Qo = new xo(a))
    }
    return Qo
}
function Fo(a) {
    var b=!!S("yt-remote-load-account-screens");
    if (a) {
        var c=!!a.isSignedIn;
        c ? (b|=!!a.loadAccountScreens, wk(b)) : wk(!1);
        return c && b
    }
    return b
}
function Go() {
    return r("yt.mdx.remote.currentScreenId_")
}
function ep(a) {
    p("yt.mdx.remote.currentScreenId_", a, void 0);
    if ($) {
        var b = $;
        b.o = w() + 3E5;
        if ((b.Rb = a) && (a = po(b, a))&&!ek(b.g, a)) {
            var c = Pa(b.g);
            c.push(a);
            go(b, c, !0)
        }
    }
}
function Yo() {
    return r("yt.mdx.remote.currentDialId_")
}
function dp(a) {
    p("yt.mdx.remote.currentDialId_", a, void 0)
}
function fp() {
    return r("yt.mdx.remote.connectData_")
}
function Jo(a) {
    p("yt.mdx.remote.connectData_", a, void 0)
}
function To() {
    return r("yt.mdx.remote.connection_")
}
function cp(a) {
    var b = To();
    Jo(null);
    a ? Aa(!To()) : (ep(""), dp(""));
    p("yt.mdx.remote.connection_", a, void 0);
    Co && (A(Co, function(b) {
        b(a)
    }), Co.length = 0);
    b&&!a ? Gb("yt-remote-connection-change", !1) : !b && a && K("yt-remote-connection-change", !0)
}
function Lo() {
    var a = ok();
    if (!a)
        return null;
    if (Vo()) {
        var b = Eo().V();
        return V(b, a)
    }
    return $ ? po($, a) : null
}
function $o(a, b) {
    Aa(!Go());
    ep(a.id);
    var c = new Z(zo, a, Mo());
    c.connect(b, fp());
    c.subscribe("beforeDisconnect", function(a) {
        Gb("yt-remote-before-disconnect", a)
    });
    c.subscribe("beforeDispose", function() {
        To() && (To(), cp(null))
    });
    cp(c)
}
function bp(a) {
    Yo();
    Ho("Connecting to: " + (a ? a.toString() : "null"));
    dp(a.id);
    var b = fp();
    b ? to(a.id, b.videoIds[b.index], b.currentTime) : to(a.id)
}
function Oo() {
    var a = Lo();
    a ? (Ho("Resume connection to: " + Jj(a)), $o(a, 0)) : (Dk(), Il(), Ho("Skipping connecting because no session screen found."))
}
function Ao(a) {
    Ho("Paired with: " + Jj(a));
    a ? $o(a, 1) : cp(null)
}
function Bo() {
    var a = Go();
    a&&!Wo() && (Ho("Dropping current screen with id: " + a), Zo());
    Lo() || Dk()
}
var zo = null, Co = null, Qo = null, $ = null;
function Do(a) {
    var b = Mo();
    if (cb(b)) {
        var b = nk(), c = S("yt-remote-session-name") || "", d = S("yt-remote-session-app") || "", b = {
            device: "REMOTE_CONTROL",
            id: b,
            name: c,
            app: d
        };
        a && (b["mdx-version"] = 3);
        p("yt.mdx.remote.channelParams_", b, void 0)
    }
}
function Mo() {
    return r("yt.mdx.remote.channelParams_") || {}
}
function No(a) {
    a ? (R("yt-remote-session-app", a.app), R("yt-remote-session-name", a.name)) : (Ng("yt-remote-session-app"), Ng("yt-remote-session-name"));
    p("yt.mdx.remote.channelParams_", a, void 0)
}
var Io = [];
var gp = null, hp = [];
function ip() {
    jp();
    if (Xo()) {
        var a = gp;
        "html5" != a.getPlayerType() && a.loadNewVideoConfig(a.getCurrentVideoConfig(), "html5")
    }
}
function kp(a) {
    "cast-selector-receiver" == a ? Jl() : lp(a)
}
function lp(a) {
    var b = Ro();
    if (a = Yj(b, a)) {
        var c = gp, d = c.getVideoData().video_id, e = c.getVideoData().list, f = c.getCurrentTime();
        ap(a, {
            videoIds: [d],
            listId: e,
            videoId: d,
            index: 0,
            currentTime: f
        });
        "html5" != c.getPlayerType() ? c.loadNewVideoConfig(c.getCurrentVideoConfig(), "html5") : c.updateRemoteReceivers && c.updateRemoteReceivers(b, a)
    }
}
function jp() {
    var a = gp;
    a && a.updateRemoteReceivers && a.updateRemoteReceivers(Ro(), Xo())
};
var mp = null, np = [];
function op(a) {
    return {
        externalChannelId: a.externalChannelId,
        bd: a.offersUrl,
        source: a.source,
        Sb: a.subscriptionId
    }
}
function pp(a) {
    qp(op(a))
}
function qp(a) {
    ai() ? (Gh(Nh, new Lh(a.externalChannelId, a.bd ? {
        itemType: "U",
        itemId: a.externalChannelId,
        offersUrl: a.bd
    } : null)), (a = "/gen_204?" + dd({
        event: "subscribe",
        source: a.source
    })) && bg(a)) : rp(a)
}
function rp(a) {
    Rh(function(b) {
        b.subscription_ajax && qp(a)
    }, null, "sub_button")
}
function sp(a) {
    a = op(a);
    Gh(Ph, new Mh(a.externalChannelId, a.Sb, null));
    (a = "/gen_204?" + dd({
        event: "unsubscribe",
        source: a.source
    })) && bg(a)
}
function tp(a, b) {
    mp && mp.channelSubscribed(a, b)
}
function up(a) {
    mp && mp.channelUnsubscribed(a)
};
function vp(a) {
    D.call(this);
    this.j = a;
    this.j.subscribe("command", this.Ec, this);
    this.k = {};
    this.A=!1
}
x(vp, D);
g = vp.prototype;
g.start = function() {
    this.A || this.H() || (this.A=!0, wp(this.j, "RECEIVING"))
};
g.Ec = function(a, b) {
    if (this.A&&!this.H()) {
        var c = b || {};
        switch (a) {
        case "addEventListener":
            if (u(c.event) && (c = c.event, !(c in this.k))) {
                var d = v(this.sd, this, c);
                this.k[c] = d;
                this.addEventListener(c, d)
            }
            break;
        case "removeEventListener":
            u(c.event) && xp(this, c.event);
            break;
        default:
            this.g.isReady() && this.g[a] && (c = yp(a, b || {}), c = this.g[a].apply(this.g, c), (c = zp(a, c)) && this.A&&!this.H() && wp(this.j, a, c))
        }
    }
};
g.sd = function(a, b) {
    this.A&&!this.H() && wp(this.j, a, this.hc(a, b))
};
g.hc = function(a, b) {
    if (null != b)
        return {
            value: b
        }
};
function xp(a, b) {
    b in a.k && (a.removeEventListener(b, a.k[b]), delete a.k[b])
}
g.F = function() {
    this.j.unsubscribe("command", this.Ec, this);
    this.j = null;
    for (var a in this.k)
        xp(this, a);
    vp.L.F.call(this)
};
function Ap(a, b) {
    vp.call(this, b);
    this.g = a;
    this.start()
}
x(Ap, vp);
Ap.prototype.addEventListener = function(a, b) {
    this.g.addEventListener(a, b)
};
Ap.prototype.removeEventListener = function(a, b) {
    this.g.removeEventListener(a, b)
};
function yp(a, b) {
    switch (a) {
    case "loadVideoById":
        return b = nj(b), pj(b), [b];
    case "cueVideoById":
        return b = nj(b), pj(b), [b];
    case "loadVideoByPlayerVars":
        return pj(b), [b];
    case "cueVideoByPlayerVars":
        return pj(b), [b];
    case "loadPlaylist":
        return b = oj(b), pj(b), [b];
    case "cuePlaylist":
        return b = oj(b), pj(b), [b];
    case "seekTo":
        return [b.seconds, b.allowSeekAhead];
    case "playVideoAt":
        return [b.index];
    case "setVolume":
        return [b.volume];
    case "setPlaybackQuality":
        return [b.suggestedQuality];
    case "setPlaybackRate":
        return [b.suggestedRate];
    case "setLoop":
        return [b.loopPlaylists];
    case "setShuffle":
        return [b.shufflePlaylist];
    case "getOptions":
        return [b.module];
    case "getOption":
        return [b.module, b.option];
    case "setOption":
        return [b.module, b.option, b.value]
    }
    return []
}
function zp(a, b) {
    switch (a) {
    case "isMuted":
        return {
            muted: b
        };
    case "getVolume":
        return {
            volume: b
        };
    case "getPlaybackRate":
        return {
            playbackRate: b
        };
    case "getAvailablePlaybackRates":
        return {
            availablePlaybackRates: b
        };
    case "getVideoLoadedFraction":
        return {
            videoLoadedFraction: b
        };
    case "getPlayerState":
        return {
            playerState: b
        };
    case "getCurrentTime":
        return {
            currentTime: b
        };
    case "getPlaybackQuality":
        return {
            playbackQuality: b
        };
    case "getAvailableQualityLevels":
        return {
            availableQualityLevels: b
        };
    case "getDuration":
        return {
            duration: b
        };
    case "getVideoUrl":
        return {
            videoUrl: b
        };
    case "getVideoEmbedCode":
        return {
            videoEmbedCode: b
        };
    case "getPlaylist":
        return {
            playlist: b
        };
    case "getPlaylistIndex":
        return {
            playlistIndex: b
        };
    case "getOptions":
        return {
            options: b
        };
    case "getOption":
        return {
            option: b
        }
    }
}
Ap.prototype.hc = function(a, b) {
    switch (a) {
    case "onReady":
        return;
    case "onStateChange":
        return {
            playerState: b
        };
    case "onPlaybackQualityChange":
        return {
            playbackQuality: b
        };
    case "onPlaybackRateChange":
        return {
            playbackRate: b
        };
    case "onError":
        return {
            errorCode: b
        }
    }
    return Ap.L.hc.call(this, a, b)
};
Ap.prototype.F = function() {
    Ap.L.F.call(this);
    delete this.g
};
function Bp(a, b) {
    this.source = null;
    this.A = a || null;
    this.origin = "*";
    this.D = window.document.location.protocol + "//" + window.document.location.hostname;
    this.B = b;
    this.k = this.g = this.j = this.o = null;
    O(window, "message", v(this.K, this))
}
Bp.prototype.K = function(a) {
    var b = this.B || G("POST_MESSAGE_ORIGIN") || this.D;
    if ("*" == b || a.origin == b)
        if (!this.A || a.source == this.A)
            if (this.source = a.source, this.origin = "null" == a.origin ? this.origin : a.origin, a = a.data, u(a)) {
                try {
                    a = tg(a)
                } catch (c) {
                    return 
                }
                this.o = a.id;
                switch (a.event) {
                case "listening":
                    this.g && (this.g(), this.g = null);
                    break;
                case "command":
                    this.j && (this.k&&!Ha(this.k, a.func) || this.j(a.func, a.args))
                }
            }
};
Bp.prototype.sendMessage = function(a) {
    this.source && (a.id = this.o, a = Q(a), this.source.postMessage(a, this.origin))
};
function Cp() {
    var a = this.j = new Bp, b = v(this.Wd, this);
    a.j = b;
    a.k = null;
    this.A = [];
    this.K=!1;
    this.o = (a = G("POST_MESSAGE_ORIGIN")) && Yf(a) ? a : null;
    this.B = {}
}
g = Cp.prototype;
g.Wd = function(a, b) {
    if (this.o && this.o != this.j.origin)
        this.dispose();
    else if ("addEventListener" == a && b) {
        var c = b[0];
        this.B[c] || "onReady" == c || (this.addEventListener(c, Dp(this, c)), this.B[c]=!0)
    } else 
        this.Mc(a, b)
};
g.Mc = function() {};
function Dp(a, b) {
    return v(function(a) {
        this.sendMessage(b, a)
    }, a)
}
g.addEventListener = function() {};
g.Nd = function() {
    this.K=!0;
    this.sendMessage("initialDelivery", this.fc());
    this.sendMessage("onReady");
    A(this.A, this.Rc, this);
    this.A = []
};
g.fc = function() {
    return null
};
function Ep(a, b) {
    a.sendMessage("infoDelivery", b)
}
g.Rc = function(a) {
    this.K ? this.j.sendMessage(a) : this.A.push(a)
};
g.sendMessage = function(a, b) {
    this.Rc({
        event: a,
        info: void 0 == b ? null: b
    })
};
g.dispose = function() {
    this.j = null
};
function Fp(a) {
    Cp.call(this);
    this.g = a;
    this.k = [];
    this.addEventListener("onReady", v(this.Xd, this));
    this.addEventListener("onVideoProgress", v(this.be, this));
    this.addEventListener("onVolumeChange", v(this.ce, this));
    this.addEventListener("onApiChange", v(this.Yd, this));
    this.addEventListener("onPlaybackQualityChange", v(this.Zd, this));
    this.addEventListener("onPlaybackRateChange", v(this.$d, this));
    this.addEventListener("onStateChange", v(this.ae, this))
}
x(Fp, Cp);
g = Fp.prototype;
g.Mc = function(a, b) {
    if (this.g[a]) {
        b = b || [];
        if (0 < b.length && lj(a)) {
            var c;
            c = b;
            if (ha(c[0])&&!t(c[0]))
                c = c[0];
            else {
                var d = {};
                switch (a) {
                case "loadVideoById":
                case "cueVideoById":
                    d = nj.apply(window, c);
                    break;
                case "loadVideoByUrl":
                case "cueVideoByUrl":
                    d = mj.apply(window, c);
                    break;
                case "loadPlaylist":
                case "cuePlaylist":
                    d = oj.apply(window, c)
                }
                c = d
            }
            pj(c);
            b.length = 1;
            b[0] = c
        }
        this.g[a].apply(this.g, b);
        lj(a) && Ep(this, this.fc())
    }
};
g.Xd = function() {
    var a = v(this.Nd, this);
    this.j.g = a
};
g.addEventListener = function(a, b) {
    this.k.push({
        Vd: a,
        listener: b
    });
    this.g.addEventListener(a, b)
};
g.fc = function() {
    var a = this.g.getApiInterface();
    Ma(a, "getVideoData");
    for (var b = {
        apiInterface: a
    }, c = 0, d = a.length; c < d; c++) {
        var e = a[c], f = e;
        if (0 == f.search("get") || 0 == f.search("is")) {
            var f = e, h = 0;
            0 == f.search("get") ? h = 3 : 0 == f.search("is") && (h = 2);
            f = f.charAt(h).toLowerCase() + f.substr(h + 1);
            try {
                var k = this.g[e]();
                b[f] = k
            } catch (m) {}
        }
    }
    b.videoData = this.g.getVideoData();
    return b
};
g.ae = function(a) {
    a = {
        playerState: a,
        currentTime: this.g.getCurrentTime(),
        duration: this.g.getDuration(),
        videoData: this.g.getVideoData(),
        videoStartBytes: 0,
        videoBytesTotal: this.g.getVideoBytesTotal(),
        videoLoadedFraction: this.g.getVideoLoadedFraction(),
        playbackQuality: this.g.getPlaybackQuality(),
        availableQualityLevels: this.g.getAvailableQualityLevels(),
        videoUrl: this.g.getVideoUrl(),
        playlist: this.g.getPlaylist(),
        playlistIndex: this.g.getPlaylistIndex()
    };
    this.g.getProgressState && (a.progressState = this.g.getProgressState());
    this.g.getStoryboardFormat && (a.storyboardFormat = this.g.getStoryboardFormat());
    Ep(this, a)
};
g.Zd = function(a) {
    Ep(this, {
        playbackQuality: a
    })
};
g.$d = function(a) {
    Ep(this, {
        playbackRate: a
    })
};
g.Yd = function() {
    for (var a = this.g.getOptions(), b = {
        namespaces: a
    }, c = 0, d = a.length; c < d; c++) {
        var e = a[c], f = this.g.getOptions(e);
        b[e] = {
            options: f
        };
        for (var h = 0, k = f.length; h < k; h++) {
            var m = f[h], q = this.g.getOption(e, m);
            b[e][m] = q
        }
    }
    this.sendMessage("apiInfoDelivery", b)
};
g.ce = function() {
    Ep(this, {
        muted: this.g.isMuted(),
        volume: this.g.getVolume()
    })
};
g.be = function(a) {
    a = {
        currentTime: a,
        videoBytesLoaded: this.g.getVideoBytesLoaded(),
        videoLoadedFraction: this.g.getVideoLoadedFraction()
    };
    this.g.getProgressState && (a.progressState = this.g.getProgressState());
    Ep(this, a)
};
g.dispose = function() {
    Fp.L.dispose.call(this);
    for (var a = 0; a < this.k.length; a++) {
        var b = this.k[a];
        this.g.removeEventListener(b.Vd, b.listener)
    }
    this.k = []
};
function Gp(a, b, c) {
    T.call(this);
    this.g = a;
    this.j = b;
    this.k = c
}
x(Gp, T);
function wp(a, b, c) {
    if (!a.H()) {
        var d = a.g;
        d.H() || a.j != d.g || (a = {
            id: a.k,
            command: b
        }, c && (a.data = c), d.g.postMessage(Q(a), d.k))
    }
}
Gp.prototype.F = function() {
    this.j = this.g = null;
    Gp.L.F.call(this)
};
function Hp(a, b, c) {
    D.call(this);
    this.g = a;
    this.k = c;
    this.A = O(window, "message", v(this.o, this));
    this.j = new Gp(this, a, b);
    nb(this, na(E, this.j))
}
x(Hp, D);
Hp.prototype.o = function(a) {
    if (!this.H() && a.origin == this.k && a.source == this.g && (a = a.data, u(a))) {
        try {
            a = tg(a)
        } catch (b) {
            return 
        }
        if (a.command) {
            var c = this.j;
            c.H() || c.publish("command", a.command, a.data)
        }
    }
};
Hp.prototype.F = function() {
    Lc(this.A);
    this.g = null;
    Hp.L.F.call(this)
};
var Ip = {};
function Jp(a) {
    return a ? 24 == a.length && "UC" == a.slice(0, 2) ? a.substr(2) : 22 == a.length ? a : null : null
};
var Kp = [];
function Lp(a, b) {
    if (!b) {
        var c = G("CONVERSION_CONFIG_DICT");
        if (!c)
            return;
        b = c.uid || null;
        if (!b)
            return 
    }
    if ("subscribe" == a || "unsubscribe" == a) {
        if (u(b)) {
            var d = Jp(b);
            d && (d = {
                label: "followon_" + a,
                foc_id: d,
                r: Math.round(1E4 * Math.random())
            }, (d = fd("//googleads.g.doubleclick.net/pagead/viewthroughconversion/962985656/", d)) && d && bg(d))
        }
    } else 
        t: {
        c = G("CONVERSION_CONFIG_DICT");
        if (u(b)) {
            var e = Jp(b);
            if (!c || c.uid != e)
                if (c = Ip[e], !c || c.uid != e)
                    break t
        }
        if (a && c && c.baseUrl && c.uid) {
            var f = c.rmktEnabled, e = c.focEnabled && (!c.isAd || "view" !=
            a);
            if (f || e) {
                var h = {};
                if (f) {
                    f = {
                        utuid: c.uid,
                        type: a,
                        client_name: "html5"
                    };
                    "cvisit" == a && (f.type = "cview");
                    c.vid && (f.utvid = c.vid);
                    c.eventLabel && (f.el = c.eventLabel);
                    c.playerStyle && (f.ps = c.playerStyle);
                    c.feature && (f.feature = c.feature);
                    c.ppe && (f.ppe = c.ppe);
                    c.subscribed && (f.subscribed = c.subscribed);
                    c.engaged && (f.engaged = c.engaged);
                    var k = [];
                    for (d in f)
                        k.push(encodeURIComponent(d) + "=" + encodeURIComponent(f[d]));
                        d = k.join(";");
                        h.data = d
                }
                e && (h.label = "followon_" + a, h.foc_id = c.uid, h.r = Math.round(1E4 * Math.random()));
                if ("unsubscribe" ==
                a || "dislike" == a)
                    h.r = Math.round(1E4 * Math.random());
                    d = fd(c.baseUrl, h)
                } else 
                    d = null
        } else 
            d = null;
            d && d && bg(d)
    }
};
function Mp(a) {
    yh.call(this, 1, arguments)
}
x(Mp, yh);
function Np(a, b, c) {
    yh.call(this, 1, arguments);
    this.k = a;
    this.j = b;
    this.g = c
}
x(Np, yh);
function Op(a, b, c, d) {
    yh.call(this, 1, arguments);
    this.k = a;
    this.g = b;
    this.A = c || null;
    this.j = d || null
}
x(Op, yh);
function Pp(a, b) {
    yh.call(this, 1, arguments);
    this.j = a;
    this.g = b || null
}
x(Pp, yh);
function Qp(a) {
    yh.call(this, 1, arguments)
}
x(Qp, yh);
var Rp = new Bh("ypc-delayedloader-load", Mp), Sp = new Bh("ypc-guide-sync-success", Np), Tp = new Bh("ypc-purchase-success", Op), Up = new Bh("ypc-subscription-cancel", Qp), Vp = new Bh("ypc-subscription-cancel-success", Pp), Wp = new Bh("ypc-init-subscription", Qp);
var Xp=!1, Yp = [], Kh = [];
function Zp(a) {
    a.g ? Xp ? Gh(Oh, a) : Gh(Rp, new Mp(function() {
        Gh(Wp, new Qp(a.g))
    })) : $p(a.j, a.o, a.A, a.k, a.source)
}
function aq(a) {
    a.g ? Xp ? Gh(Qh, a) : Gh(Rp, new Mp(function() {
        Gh(Up, new Qp(a.g))
    })) : bq(a.j, a.Sb, a.o, a.A, a.k, a.source)
}
function cq(a) {
    if (a.length) {
        var b = Ra(a, 0, 40);
        K("subscription-batch-subscribe-loading", b);
        dq("subscription-subscribe-loading", b);
        var c = {};
        c.session_token = tb();
        c.a = b.join(",");
        var d = function() {
            K("subscription-batch-subscribe-loaded", b);
            dq("subscription-subscribe-loaded", b)
        };
        Xh("/subscription_ajax?action_create_subscription_to_all=1", {
            method: "POST",
            T: c,
            aa: function(c, f) {
                d();
                var h = f.response, k = h.id;
                if (t(k) && k.length == b.length) {
                    var m = {}, q = h.channel_info_map;
                    A(k, function(a, c) {
                        var d = b[c], e = q[d];
                        m[d] = a;
                        K("subscription-subscribe-success",
                        d, a, null, e)
                    });
                    K("subscription-batch-subscribe-success", m);
                    (h = h.guide_notification_html_content) && K("guide-add-subscription", h);
                    a.length && cq(a)
                }
            },
            onError: function() {
                d();
                K("subscription-batch-subscribe-failure", b);
                dq("subscription-subscribe-failure", b)
            }
        })
    }
}
function eq(a) {
    if (a.length) {
        var b = Ra(a, 0, 40);
        K("subscription-batch-unsubscribe-loading", b);
        dq("subscription-unsubscirbe-loading", b);
        var c = {};
        c.session_token = tb();
        c.c = b.join(",");
        var d = function() {
            K("subscription-batch-unsubscribe-loaded", b);
            dq("subscription-unsubscribe-loaded", b)
        };
        Xh("/subscription_ajax?action_remove_subscriptions=1", {
            method: "POST",
            T: c,
            aa: function() {
                d();
                K("subscription-batch-unsubscribe-success", b);
                dq("subscription-unsubscribe-success", b);
                a.length && eq(a)
            },
            onError: function() {
                d();
                K("subscription-batch-unsubscribe-failure",
                b);
                dq("subscription-unsubscribe-failure", b)
            }
        })
    }
}
function fq(a, b, c) {
    gq(a, b, null, null, c)
}
function hq(a, b, c) {
    gq(a, null, null, b, c)
}
function iq(a, b, c) {
    jq(a, b, null, c)
}
function kq(a, b, c) {
    jq(a, null, b, c)
}
function lq(a, b, c, d, e) {
    gq(a, b, c, d, e)
}
function mq(a) {
    var b = a.k.subscriptionElement || null, c = a.g.subscriptionId, d = a.g.channelInfo;
    c && K("subscription-subscribe-success", a.j, c, b, d)
}
function nq(a) {
    var b = a.g;
    Wa(a.k, function(a, d) {
        K("subscription-subscribe-success", d, a, null, b[d])
    });
    K("guide-add-subscription", a.j)
}
function oq(a) {
    K("subscription-unsubscribe-success", a.j.itemId, a.j.subscriptionElement || null);
    a.g && (K("subscription-batch-unsubscribe-success", a.g), dq("subscription-unsubscribe-success", a.g), dq("subscription-enable-ypc", a.g))
}
function $p(a, b, c, d, e) {
    K("subscription-subscribe-loading", a);
    var f = {};
    f.c = a;
    d && (f.eurl = d);
    e && (f.source = e);
    d = {};
    d.session_token = tb();
    (e = G("PLAYBACK_ID")) && (d.plid = e);
    c && pq("/subscription_ajax?action_create_subscription_to_channel=1", f, c);
    Xh("/subscription_ajax?action_create_subscription_to_channel=1", {
        method: "POST",
        jc: f,
        T: d,
        aa: function(c, d) {
            var e = d.response;
            K("subscription-subscribe-success", a, e.id, b, e.channel_info);
            e.show_feed_privacy_dialog && K("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG", a);
            (e = e.guide_notification_html_content) &&
            K("guide-add-subscription", e)
        },
        onError: function() {
            K("subscription-subscribe-failure", a)
        },
        kc: function() {
            K("subscription-subscribe-loaded", a)
        }
    })
}
function bq(a, b, c, d, e, f) {
    K("subscription-unsubscirbe-loading", a);
    var h = {};
    e && (h.eurl = e);
    f && (h.source = f);
    e = {};
    e.session_token = tb();
    e.c = a;
    e.s = b;
    (b = G("PLAYBACK_ID")) && (e.plid = b);
    d && pq("/subscription_ajax?action_remove_subscriptions=1", {}, d);
    Xh("/subscription_ajax?action_remove_subscriptions=1", {
        method: "POST",
        jc: h,
        T: e,
        aa: function() {
            K("subscription-unsubscribe-success", a, c)
        },
        onError: function() {
            K("subscription-unsubscribe-failure", a)
        },
        kc: function() {
            K("subscription-unsubscribe-loaded", a)
        }
    })
}
function gq(a, b, c, d, e) {
    if (null !== b || null !== c || null !== d) {
        var f = {};
        f.session_token = tb();
        a && (f.channel_id = a);
        null === b || (f.email_on_upload = b);
        null === c || (f.receive_no_updates = c);
        null === d || (f.uploads_only = d);
        Xh("/subscription_ajax?action_update_subscription_preferences=1", {
            method: "POST",
            T: f,
            onError: function() {
                e && e()
            }
        })
    }
}
function jq(a, b, c, d) {
    if (a.length && (null !== b || null !== c)) {
        var e = Ra(a, 0, 40);
        K("subscription-batch-prefs-loading", e);
        var f = {};
        f.session_token = tb();
        f.s = e.join(",");
        null !== b && (f.email_on_upload = b, f.receive_no_updates=!b);
        null === c || (f.uploads_only = c);
        var h = function() {
            K("subscription-batch-prefs-loaded", e)
        };
        Xh("/subscription_ajax?action_update_subscription_preferences_batch=1", {
            method: "POST",
            T: f,
            aa: function() {
                h();
                K("subscription-batch-prefs-success", e);
                a.length && jq(a, b, c, d)
            },
            onError: function() {
                h();
                d && d();
                K("subscription-batch-prefs-failure", e)
            }
        })
    }
}
function dq(a, b) {
    A(b, function(b) {
        K(a, b)
    })
}
function pq(a, b, c) {
    a = id(a, b);
    c = gd(c);
    kd(a, c)
};
var qq = null, rq = null, sq = null, tq=!1;
var uq = {}, vq = 0;
p("yt.setAjaxToken", function() {}, void 0);
p("yt.setConfig", rb, void 0);
p("yt.setMsg", function(a) {
    sb(qb, arguments)
}, void 0);
p("yt.www.errors.log", function(a, b) {
    if (a && window && window.yterr&&!(5 <= vq)) {
        var c = a.stacktrace, d = a.columnNumber;
        var e = a, f = r("window.location.href");
        if (u(e))
            a = {
                message: e,
                name: "Unknown error",
                lineNumber: "Not available",
                fileName: f,
                stack: "Not available"
            };
        else {
            var h, k, m=!1;
            try {
                h = e.lineNumber || e.line || "Not available"
            } catch (q) {
                h = "Not available", m=!0
            }
            try {
                k = e.fileName || e.filename || e.sourceURL || l.$googDebugFname || f
            } catch (U) {
                k = "Not available", m=!0
            }
            a=!m && e.lineNumber && e.fileName && e.stack && e.message && e.name ? e : {
                message: e.message ||
                "Not available",
                name: e.name || "UnknownError",
                lineNumber: h,
                fileName: k,
                stack: e.stack || "Not available"
            }
        }
        c = c || a.stack;
        e = a.lineNumber.toString();
        isNaN(e) || isNaN(d) || (e = e + ":" + d);
        uq[a.message] || (d = {
            jc: {
                a: "logerror",
                t: "jserror",
                type: a.name,
                msg: a.message.substr(0, 1E3),
                line: e,
                level: b || "ERROR"
            },
            T: {
                url: window.location.href,
                file: a.fileName
            },
            method: "POST"
        }, c && (d.T.stack = c), Xh("/gen_204", d), uq[a.message]=!0, vq++)
    }
}, void 0);
p("yt.embed.openLoginDialog", function() {
    Rh(function(a) {
        if (qq.onLoginDialogSuccess)
            qq.onLoginDialogSuccess(a)
    })
}, void 0);
p("writeEmbed", function() {
    var a = new Xe(G("PLAYER_CONFIG")), b = document.referrer, c = G("POST_MESSAGE_ORIGIN"), d=!1;
    u(b) && u(c)&&-1 < b.indexOf(c) && Yf(c) && Yf(b) && (d=!0);
    window != window.top && b && b != document.URL && (a.args.loaderUrl = b);
    G("LIGHTWEIGHT_AUTOPLAY") && (a.args.autoplay = "1");
    a.args.autoplay && pj(a.args);
    qq = gh("player", a);
    b = G("POST_MESSAGE_ID", "player");
    G("ENABLE_JS_API") ? sq = new Fp(qq) : G("ENABLE_POST_API") && u(b) && u(c) && (rq = new Hp(window.parent, b, c), sq = new Ap(qq, rq.j));
    tq = d&&!G("ENABLE_CAST_API");
    tq || (c =
    qq, yo({
        device: "Desktop",
        app: "youtube-desktop",
        isSignedIn: G("LOGGED_IN"),
        loadAccountScreens: a.args.has_mdx_screens
    }), gp = c, gp.addEventListener("onReady", ip), gp.addEventListener("onRemoteReceiverSelected", kp), hp.push(J("yt-remote-receiver-availability-change", jp)), hp.push(J("yt-remote-auto-connect", lp)));
    G("BG_P") && (G("BG_I") || G("BG_IU")) && Rb();
    mp = qq;
    mp.addEventListener("SUBSCRIBE", pp);
    mp.addEventListener("UNSUBSCRIBE", sp);
    np.push(J("subscription-subscribe-success", tp));
    np.push(J("subscription-unsubscribe-success",
    up))
}, void 0);
p("yt.www.watch.ads.restrictioncookie.spr", function(a) {
    (a = a + "mac_204?action_fcts=1") && bg(a);
    return !0
}, void 0);
O(window, "load", function() {
    jg().ol = w();
    hg("ol");
    if (G("TIMING_WAIT")) {
        var a = G("TIMING_ACTION"), b = jg();
        if (a && b._start)
            if (a = G("TIMING_WAIT", []), a.length) {
                for (var c=!0, d = 0, e = a.length; d < e; ++d)
                    if (!(a[d]in b)) {
                        c=!1;
                        break
                    }
                    c && ig()
            } else (b.ol || b.aft) 
                && ig()
    } else 
        b = G("TIMING_ACTION"), a=!!G("TIMING_WFF"), c = jg(), b && c._start && (a && c.vr ||!a && (c.ol || c.aft)) && ig();
    Xp=!0;
    Kh.push(Ih(Nh, Zp), Ih(Ph, aq));
    Xp || (Kh.push(Ih(Oh, Zp), Ih(Qh, aq)), Yp.push(J("subscription-batch-subscribe", cq)), Yp.push(J("subscription-batch-unsubscribe",
    eq)), Yp.push(J("subscription-pref-email", fq)), Yp.push(J("subscription-pref-uploads", hq)), Yp.push(J("subscription-prefs", lq)), Yp.push(J("subscription-batch-pref-email", iq)), Yp.push(J("subscription-batch-pref-uploads", kq)), Kh.push(Ih(Tp, mq), Ih(Vp, oq), Ih(Sp, nq)), Kp.push(J("subscription-subscribe-success", na(Lp, "subscribe")), J("subscription-unsubscribe-success", na(Lp, "unsubscribe")), J("player-subscribe", na(Lp, "subscribe")), J("player-unsubscribe", na(Lp, "unsubscribe"))))
});
O(window, "unload", function() {
    var a = qq;
    a && a.sendAbandonmentPing && a.sendAbandonmentPing();
    G("PL_ATT") && (Qb = null);
    Fb(Yp);
    Yp.length = 0;
    Jh();
    Kh.length = 0;
    Xp=!1;
    Fb(Kp);
    Kp.length = 0;
    mp && (mp.removeEventListener("SUBSCRIBE", qp), mp.removeEventListener("UNSUBSCRIBE", sp));
    mp = null;
    Fb(np);
    tq || (Fb(hp), hp.length = 0, gp && (gp.removeEventListener("onRemoteReceiverSelected", kp), gp.removeEventListener("onReady", ip), gp = null), Po());
    ob(sq, rq);
    qq.destroy()
});
var wq = si.getInstance(), xq = gi(wq);
xq in xi || (wq.register(), hi(wq, "yt-uix-init-" + xq, wq.init), hi(wq, "yt-uix-dispose-" + xq, wq.dispose), xi[xq] = wq);
})();

