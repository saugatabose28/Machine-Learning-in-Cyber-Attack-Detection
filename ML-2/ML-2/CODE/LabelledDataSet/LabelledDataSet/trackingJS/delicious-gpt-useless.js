(function() {
    var e, h = this, k = function(a) {
        return void 0 !== a
    }, m = function(a) {
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
                                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable &&
                                !a.propertyIsEnumerable("call"))
                                    return "function"
            } else 
                return "null";
                else if ("function" == b && "undefined" == typeof a.call)
    return "object";
return b
}, n = function(a) {
    return "array" == m(a)
}, aa = function(a) {
    var b = m(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}, p = function(a) {
    return "string" == typeof a
}, q = function(a) {
    return "boolean" == typeof a
}, s = function(a) {
    return "number" == typeof a
}, ba = function(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}, ca = "closure_uid_" + (1E9 * Math.random()>>>0), da = 0,
ea = function(a, b, c) {
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
}, ga = function(a, b, c) {
    ga = Function.prototype.bind&&-1 != Function.prototype.bind.toString().indexOf("native code") ? ea : fa;
    return ga.apply(null, arguments)
}, ha = function(a) {
    var b =
    t;
    function c() {}
    c.prototype = b.prototype;
    a.S = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.R = function(a, c, g) {
        return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
    }
};
var u = function(a, b) {
    var c = parseFloat(a);
    return isNaN(c) || 1 < c || 0 > c ? b : c
}, ia = function(a, b) {
    var c = parseInt(a, 10);
    return isNaN(c) ? b : c
}, ja = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/, ka = function(a, b) {
    if (!a)
        return b;
    var c = a.match(ja);
    return c ? c[0] : b
};
var la = u("0.02", 0), ma = u("0.0", 0);
var na = u("0.005", 0), oa = u("0", 0), pa = u("0.001", 0), qa = ia("1500", 1500), ra = u("0.01", 0), sa = u("1.0", 0), ta = u("0.5", 0), ua = u("", .001), va = ia("", 200), wa = u("0.01", 0),
xa = u("0.01", 0), ya = /^true$/.test("")?!0 : !1, za = u("0.05", 0), Aa = u("0.01", 0), Ba = u("0.1", 0), Ca = u("0.01", 0), Da = u("1", 0), Ea = u("", .001);
var Fa = function(a) {
    return /^[\s\xa0]*$/.test(a)
}, Ga = function(a, b) {
    return a < b?-1 : a > b ? 1 : 0
};
var v = function(a, b, c) {
    for (var d in a)
        Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a)
};
var w = function() {
    return h.googletag || (h.googletag = {})
}, x = function(a, b, c) {
    var d = w();
    a in d&&!c || (d[a] = b)
}, Ha = function(a, b) {
    a.addEventListener ? a.addEventListener("load", b, !1) : a.attachEvent && a.attachEvent("onload", b)
};
var y = {};
y["#1#"] = ka("", "pagead2.googlesyndication.com");
y["#2#"] = ka("", "pubads.g.doubleclick.net");
y["#3#"] = ka("", "securepubads.g.doubleclick.net");
y["#4#"] = ka("", "partner.googleadservices.com");
y["#5#"] = "http://pagead2.googlesyndication.com/pagead/show_ads.js";
var Ia;
t: {
    var Ja = null, z = window, Ka = null;
    try {
        for (; null != z && z !== Ja;) {
            Ka = z.location.protocol;
            if ("https:" === Ka)
                break;
            else if ("http:" === Ka || "file:" === Ka) {
                Ia=!1;
                break t
            }
            Ja = z;
            z = z.parent
        }
    } catch (La) {}
    Ia=!0
}
y["#6#"] = Ia;
y["#7#"] = la;
y["#10#"] = oa;
y["#11#"] = pa;
y["#12#"] = na;
y["#13#"] = qa;
y["#16#"] = ra;
y["#17#"] = sa;
y["#18#"] = ta;
y["#20#"] = ma;
y["#23#"] = ua;
y["#24#"] = va;
y["#25#"] = wa;
y["#27#"] = xa;
y["#28#"] = za;
y["#29#"] = Aa;
y["#31#"] = Ba;
y["#33#"] = ka("", "pagead2.googlesyndication.com");
y["#34#"] = Da;
y["#36#"] = ya;
y["#37#"] = Ca;
y["#38#"] = Ea;
y["#39#"] = "";
x("_vars_", y);
var Ma = Array.prototype, Na = function(a, b) {
    if (p(a))
        return p(b) && 1 == b.length ? a.indexOf(b, 0) : - 1;
    for (var c = 0; c < a.length; c++)
        if (c in a && a[c] === b)
            return c;
    return - 1
}, Oa = function(a, b, c) {
    for (var d = a.length, f = p(a) ? a.split("") : a, g = 0; g < d; g++)
        g in f && b.call(c, f[g], g, a)
}, Pa = function(a, b) {
    for (var c = a.length, d = Array(c), f = p(a) ? a.split("") : a, g = 0; g < c; g++)
        g in f && (d[g] = b.call(void 0, f[g], g, a));
    return d
}, Qa = function(a, b) {
    var c;
    t: {
        c = a.length;
        for (var d = p(a) ? a.split("") : a, f = 0; f < c; f++)
            if (f in d && b.call(void 0, d[f], f, a)) {
                c =
                f;
                break t
            }
        c =- 1
    }
    return 0 > c ? null : p(a) ? a.charAt(c) : a[c]
}, Ra = function(a, b) {
    0 <= Na(a, b) || a.push(b)
}, Sa = function(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)
            c[d] = a[d];
        return c
    }
    return []
}, Ta = function(a, b, c) {
    return 2 >= arguments.length ? Ma.slice.call(a, b) : Ma.slice.call(a, b, c)
}, Ua = function(a) {
    for (var b = {}, c = 0, d = 0; d < a.length;) {
        var f = a[d++], g = ba(f) ? "o" + (f[ca] || (f[ca]=++da)): (typeof f).charAt(0) + f;
        Object.prototype.hasOwnProperty.call(b, g) || (b[g]=!0, a[c++] = f)
    }
    a.length = c
}, Wa = function(a, b) {
    a.sort(b || Va)
},
Ya = function(a) {
    for (var b = Xa, c = 0; c < a.length; c++)
        a[c] = {
            index: c,
            value: a[c]
        };
    var d = b || Va;
    Wa(a, function(a, b) {
        return d(a.value, b.value) || a.index - b.index
    });
    for (c = 0; c < a.length; c++)
        a[c] = a[c].value
}, Va = function(a, b) {
    return a > b ? 1 : a < b?-1 : 0
};
var Za = function(a) {
    return s(a) && isFinite(a) && 0 == a%1 && 0 <= a
}, $a = function(a) {
    return a.replace(/[^a-zA-Z0-9]/g, function(a) {
        return "&#" + a.charCodeAt() + ";"
    })
}, ab = function() {
    return A("#6#") ? "https:" : "http:"
}, bb = function(a) {
    var b = [], b = Pa(a, function(a) {
        a = a.getName();
        var b = a.split("/");
        return "/" == a.charAt(0) && 2 <= b.length ? b[1] : "/" != a.charAt(0) && 1 <= b.length ? b[0] : ""
    });
    Ua(b);
    return b
}, A = function(a) {
    return w()._vars_[a]
};
var cb = A("#36#");
var C = function(a, b) {
    this.b = a;
    this.a = b || []
};
C.prototype.getMessageId = function() {
    return this.b
};
C.prototype.getMessageArgs = function() {
    return this.a
};
var db = function(a, b, c, d, f) {
    this.b = new Date;
    this.g = d || null;
    this.f = c || null;
    this.c = a;
    this.d = b;
    this.a = f || null
};
e = db.prototype;
e.getSlot = function() {
    return this.g
};
e.getService = function() {
    return this.f
};
e.getLevel = function() {
    return this.c
};
e.getTimestamp = function() {
    return this.b
};
e.getMessage = function() {
    return this.d
};
e.getReference = function() {
    return this.a
};
var eb = ["Debug", "Info", "Warning", "Error", "Fatal"];
db.prototype.toString = function() {
    var a = this.b.toTimeString() + ": " + eb[this.c] + ": " + this.d;
    this.a && (a += " Duration: " + (this.b.getTime() - this.a.getTimestamp().getTime()) + "ms.");
    return a
};
var E = function() {
    this.a = []
};
E.prototype.getAllEvents = function() {
    return this.a
};
E.prototype.getEventsByService = function(a) {
    return fb(this, function(b) {
        return b.getService() === a
    })
};
E.prototype.getEventsBySlot = function(a) {
    return fb(this, function(b) {
        return b.getSlot() === a
    })
};
E.prototype.getEventsByLevel = function(a) {
    return fb(this, function(b) {
        return b.getLevel() >= a
    })
};
var fb = function(a, b) {
    for (var c = [], d = 0; d < a.a.length; ++d)
        b(a.a[d]) && c.push(a.a[d]);
    return c
};
E.prototype.log = function(a, b, c, d, f) {
    a = new db(a, b, c, d, f);
    this.a.push(a);
    return a
};
var G = function(a, b, c, d, f) {
    return a.log(1, b, c, d, f)
}, H = function(a, b, c, d) {
    a.log(2, b, c, d, void 0)
}, I = function(a, b, c, d) {
    a.log(3, b, c, d, void 0)
}, J = function() {
    var a = w();
    return a.debug_log || (a.debug_log = new E)
};
x("getEventLog", J);
var K = function(a) {
    return function() {
        return new C(a, [])
    }
}, L = function(a) {
    return function(b) {
        return new C(a, [b])
    }
}, M = function(a) {
    return function(b, c) {
        return new C(a, [b, c])
    }
}, N = function(a) {
    return function(b, c, d) {
        return new C(a, [b, c, d])
    }
}, gb = function(a) {
    return "[" + Pa(a, function(a) {
        return p(a) ? "'" + a + "'" : n(a) ? gb(a) : String(a)
    }).join(", ") + "]"
}, hb = K(1), ib = L(2), jb = L(3), kb = L(4), lb = L(5), mb = L(6), nb = K(8), ob = N(9), pb = N(10), qb = M(12), rb = L(13), sb = L(14), tb = K(16), ub = N(17), vb = K(19), wb = L(20), xb = L(21), yb = M(22), zb = M(23), Ab =
L(26), Bb = L(27), Cb = L(28), Db = L(30), Eb = M(31), Fb = K(34), Gb = L(35), Hb = N(36), Ib = N(37), Jb = K(38), Kb = L(39), Lb = M(40), Mb = K(42), Nb = M(43), Ob = K(44), Pb = K(45), Qb = L(46), Rb = L(47), Sb = L(48), Tb = K(49), Ub = K(50), Vb = K(52), Wb = M(53), Xb = M(54), Yb = L(55), Zb = L(56), $b = M(57), ac = N(58), bc = L(59), cc = L(60), dc = M(61), ec = M(62), hc = L(63), ic = M(64), jc = L(65), kc = K(66), lc = K(67), mc = K(68), nc = K(69), oc = K(70), pc = K(71), qc = K(72), rc = L(75), sc = N(77), tc = L(78), uc = K(79), vc = L(80), wc = M(82), xc = M(84), yc = L(85), zc = K(87), Ac = N(88), Bc = L(90), Cc = L(92), Dc = L(93), Ec = L(94),
Fc = L(95), P = function(a, b) {
    var c = gb(Sa(b)), c = c.substring(1, c.length - 1);
    return new C(96, [a, c])
};
x("getVersion", function() {
    return "54"
});
var Hc = function(a) {
    this.b = a;
    this.a = Gc + "/pagead/gen_204?id=" + encodeURIComponent(a)
}, Gc = A("#6#") ? "https://" + A("#33#"): "http://" + A("#33#"), Q = function(a, b, c) {
    b && b.match(/^\w+$/) && c && (a.a += "&" + b + "=" + encodeURIComponent(c))
}, Ic = function(a, b) {
    if (!k(b) || 0 > b || 1 < b)
        b = A("#23#");
    if (Math.random() < b && a.b && a.a) {
        var c = a.a, d = window;
        d.google_image_requests || (d.google_image_requests = []);
        var f = d.document.createElement("img");
        f.src = c;
        d.google_image_requests.push(f)
    }
}, Jc = function(a, b) {
    Q(a, "vrg", "54");
    var c = bb(b);
    3 >= c.length ||
    (c = Ta(c, 0, 3), c.push("__extra__"));
    Q(a, "nw_id", c.join(","))
};
var Kc = A("#38#"), Lc = [], Mc = function(a, b) {
    var c = {
        methodId: a
    };
    b.name && (c.name = b.name);
    b.message && (c.message = b.message.substring(0, 512));
    b.fileName && (c.fileName = b.fileName);
    b.lineNumber && (c.lineNumber = b.lineNumber);
    if (b.stack) {
        var d;
        var f = b.stack;
        try {
            - 1 == f.indexOf("") && (f = "\n" + f);
            for (var g; f != g;)
                g = f, f = f.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
            d = f.replace(/\n */g, "\n")
        } catch (l) {
            d = ""
        }
        c.stack = d
    }
    return c
}, R = function(a, b) {
    Nc(a, b);
    throw b;
}, Nc = function(a, b) {
    if (!b.Q)
        try {
            b.Q=!0;
            var c = Mc(a, b),
            d = new Hc("gpt_exception");
            try {
                Jc(d, Lc)
            } catch (f) {}
            v(c, function(a, b) {
                Q(d, b, a)
            });
            Ic(d, Kc)
    } catch (g) {}
};
var Oc = function() {
    this.b = this.a = 0
};
Oc.prototype.push = function(a) {
    try {
        for (var b = J(), c = 0; c < arguments.length; ++c)
            try {
                "function" == m(arguments[c]) && (arguments[c](), this.a++)
            } catch (d) {
            this.b++, I(b, Db(String(d.message)))
        }
        G(b, Eb(String(this.a), String(this.b)));
        return this.a
    } catch (f) {
        R(1001, f)
    }
};
(function() {
    function a(a) {
        this.t = {};
        this.tick = function(a, b, c) {
            this.t[a] = [void 0 != c ? c: (new Date).getTime(), b];
            if (void 0 == c)
                try {
                    window.console.timeStamp("CSI/" + a)
            } catch (d) {}
        };
        this.tick("start", null, a)
    }
    var b;
    window.performance && (b = window.performance.timing);
    var c = b ? new a(b.responseStart): new a;
    window.GPT_jstiming = {
        Timer: a,
        load: c
    };
    b && (c = b.navigationStart, b = b.responseStart, 0 < c && b >= c && (window.GPT_jstiming.srt = b - c));
    try {
        b = null, window.chrome && window.chrome.csi && (b = Math.floor(window.chrome.csi().pageT)), null ==
        b && window.gtbExternal && (b = window.gtbExternal.pageT()), null == b && window.external && (b = window.external.pageT), b && (window.GPT_jstiming.pt = b)
    } catch (d) {}
})();
if (window.GPT_jstiming) {
    window.GPT_jstiming.N = {};
    window.GPT_jstiming.P = 1;
    var Pc = function(a, b, c) {
        var d = a.t[b], f = a.t.start;
        if (d && (f || c))
            return d = a.t[b][0], void 0 != c ? f = c : f = f[0], d - f
    };
    window.GPT_jstiming.getTick = Pc;
    var Qc = function(a, b, c) {
        var d = "";
        window.GPT_jstiming.srt && (d += "&srt=" + window.GPT_jstiming.srt);
        window.GPT_jstiming.pt && (d += "&tbsrt=" + window.GPT_jstiming.pt);
        try {
            window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" + window.gtbExternal.tran() :
            window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
        } catch (f) {}
        var g = window.chrome;
        if (g && (g = g.loadTimes)) {
            g().wasFetchedViaSpdy && (d += "&p=s");
            if (g().wasNpnNegotiated) {
                var d = d + "&npn=1", l = g().npnNegotiatedProtocol;
                l && (d += "&npnv=" + (encodeURIComponent || escape)(l))
            }
            g().wasAlternateProtocolAvailable && (d += "&apa=1")
        }
        var r = a.t, O = r.start, g = [], l = [], B;
        for (B in r)
            if ("start" != B && 0 != B.indexOf("_")) {
                var D = r[B][1];
                D ? r[D] && l.push(B + "." + Pc(a, B, r[D][0])) : O && g.push(B + "." + Pc(a, B))
            }
        if (b)
            for (var F in b)
                d +=
                "&" + F + "=" + b[F];
        (b = c) || (b = "https:" == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
        return [b, "?v=3", "&s=" + (window.GPT_jstiming.sn || "gpt") + "&action=", a.name, l.length ? "&it=" + l.join(","): "", d, "&rt=", g.join(",")].join("")
    }, Rc = function(a, b, c) {
        a = Qc(a, b, c);
        if (!a)
            return "";
        b = new Image;
        var d = window.GPT_jstiming.P++;
        window.GPT_jstiming.N[d] = b;
        b.onload = b.onerror = function() {
            window.GPT_jstiming && delete window.GPT_jstiming.N[d]
        };
        b.src = a;
        b = null;
        return a
    };
    window.GPT_jstiming.report =
    function(a, b, c) {
        if ("prerender" == document.webkitVisibilityState) {
            var d=!1, f = function() {
                if (!d) {
                    b ? b.prerender = "1" : b = {
                        prerender: "1"
                    };
                    var g;
                    "prerender" == document.webkitVisibilityState ? g=!1 : (Rc(a, b, c), g=!0);
                    g && (d=!0, document.removeEventListener("webkitvisibilitychange", f, !1))
                }
            };
            document.addEventListener("webkitvisibilitychange", f, !1);
            return ""
        }
        return Rc(a, b, c)
    }
};
var Sc = function(a, b) {
    for (var c in a)
        if (b.call(void 0, a[c], c, a))
            return !0;
    return !1
}, Tc = function(a, b) {
    for (var c in a)
        if (a[c] == b)
            return !0;
    return !1
};
var Uc = function(a, b) {
    this.b = a;
    this.a = b
};
e = Uc.prototype;
e.clone = function() {
    return new Uc(this.b, this.a)
};
e.isEmpty = function() {
    return !(this.b * this.a)
};
e.ceil = function() {
    this.b = Math.ceil(this.b);
    this.a = Math.ceil(this.a);
    return this
};
e.floor = function() {
    this.b = Math.floor(this.b);
    this.a = Math.floor(this.a);
    return this
};
e.round = function() {
    this.b = Math.round(this.b);
    this.a = Math.round(this.a);
    return this
};
var S;
t: {
    var Vc = h.navigator;
    if (Vc) {
        var Wc = Vc.userAgent;
        if (Wc) {
            S = Wc;
            break t
        }
    }
    S = ""
};
var Xc =- 1 != S.indexOf("Opera")||-1 != S.indexOf("OPR"), T =- 1 != S.indexOf("Trident")||-1 != S.indexOf("MSIE"), Yc =- 1 != S.indexOf("Gecko")&&-1 == S.toLowerCase().indexOf("webkit")&&!( - 1 != S.indexOf("Trident")||-1 != S.indexOf("MSIE")), Zc =- 1 != S.toLowerCase().indexOf("webkit"), $c = function() {
    var a = h.document;
    return a ? a.documentMode : void 0
}, ad = function() {
    var a = "", b;
    if (Xc && h.opera)
        return a = h.opera.version, "function" == m(a) ? a() : a;
    Yc ? b = /rv\:([^\);]+)(\)|;)/ : T ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Zc && (b = /WebKit\/(\S+)/);
    b && (a = (a = b.exec(S)) ? a[1] : "");
    return T && (b = $c(), b > parseFloat(a)) ? String(b) : a
}(), bd = {}, cd = function(a) {
    if (!bd[a]) {
        for (var b = 0, c = String(ad).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(c.length, d.length), g = 0; 0 == b && g < f; g++) {
            var l = c[g] || "", r = d[g] || "", O = RegExp("(\\d*)(\\D*)", "g"), B = RegExp("(\\d*)(\\D*)", "g");
            do {
                var D = O.exec(l) || ["", "", ""], F = B.exec(r) || ["", "", ""];
                if (0 == D[0].length && 0 == F[0].length)
                    break;
                b = Ga(0 == D[1].length ? 0 : parseInt(D[1],
                10), 0 == F[1].length ? 0 : parseInt(F[1], 10)) || Ga(0 == D[2].length, 0 == F[2].length) || Ga(D[2], F[2])
            }
            while (0 == b)
            }
        bd[a] = 0 <= b
    }
}, dd = h.document, ed = dd && T ? $c() || ("CSS1Compat" == dd.compatMode ? parseInt(ad, 10) : 5) : void 0;
var fd;
if (!(fd=!Yc&&!T)) {
    var gd;
    if (gd = T)
        gd = T && 9 <= ed;
    fd = gd
}
fd || Yc && cd("1.9.1");
T && cd("9");
var hd = {
    T: "slotRenderEnded"
}, id = function(a, b, c, d) {
    this.slot = a;
    this.isEmpty = b;
    this.size = c;
    this.lineItemId = this.creativeId = null;
    this.serviceName = d
};
var t = function() {
    this.L = [];
    this.M = {};
    this.b=!1;
    this.m = {};
    this.log = J();
    G(this.log, Gb(this.getName()), this)
};
e = t.prototype;
e.getName = function() {
    return "unknown"
};
e.getVersion = function() {
    return "unversioned"
};
e.getSlots = function() {
    return this.L
};
e.getSlotIdMap = function() {
    return this.M
};
e.enable = function() {
    if (this.b)
        G(this.log, Jb(), this);
    else {
        this.b=!0;
        try {
            this.A()
        } catch (a) {
            I(this.log, Kb(String(a)), this)
        }
    }
};
e.w = function(a) {
    this.L.push(a);
    this.M[a.getSlotId().getId()] = a;
    G(this.log, Lb(this.getName(), a.getName()), this, a)
};
e.addEventListener = function(a, b) {
    try {
        if ("function" != m(b) ||!p(a)) {
            var c = P("Service.addEventListener", arguments);
            H(this.log, c, this);
            return this
        }
        if (!Tc(hd, a))
            return H(this.log, Dc(a), this), this;
        c = a;
        n(this.m[c]) || (this.m[c] = []);
        this.m[c].push(b);
        return this
    } catch (d) {
        R(1401, d)
    }
};
var jd = function(a, b) {
    var c = a.m.slotRenderEnded;
    n(c) && Oa(c, function(a) {
        try {
            a(b)
        } catch (c) {
            a = c && p(c.name) ? c.name : null;
            var g = c && p(c.message) ? c.message: null, l = "";
            a && g ? l = a + ": " + g : a ? l = a : g && (l = g);
            H(this.log, Cc(l), this)
        }
    }, a)
};
var kd = {
    load: !0,
    gpt_load: !0,
    _pubads_load_start: !0,
    pubads_load: !0
}, ld = {
    ad_fetch_start: !0
}, md = {
    pubads_load: "_pubads_load_start",
    ad_fetch_end: "ad_fetch_start"
}, nd = {}, od = function() {
    this.f=!1;
    h.GPT_jstiming && h.GPT_jstiming.load && ("http:" == h.location.protocol || "https:" == h.location.protocol) && Math.random() < A("#37#") && (this.f=!0);
    this.a = this.d = null;
    this.j=!1;
    this.k = window.GPT_jstiming.getTick(window.GPT_jstiming.load, "start", 0);
    this.c = window.GPT_jstiming.load;
    this.c.name = "global";
    this.b = {};
    this.b.load=!1;
    this.b.gpt_load=!1;
    this.b._pubads_load_start=!1;
    this.b.pubads_load=!1;
    this.g = 500;
    this.i = [];
    this.h = {};
    this.m=!1
}, qd = function(a, b, c, d, f) {
    c && a.c ? (a.c.tick(b, d, f), pd(a, !0)) : c || (a.a || (a.a = new h.GPT_jstiming.Timer(a.k), a.a.name = "ad_events"), a.a.tick(b, d, f), 0 != b.indexOf("_") && (a.j=!0))
};
od.prototype.tick = function(a, b) {
    try {
        if (this.f) {
            var c = kd.hasOwnProperty(a), d = b ? ".psbk": "";
            a += d;
            var f = md[a];
            f && (f += d);
            c && (this.b[a]=!0);
            qd(this, a, c, f)
        }
    } catch (g) {
        R(2601, g)
    }
};
var rd = function(a) {
    window.setTimeout(ga(function() {
        try {
            pd(this, !1) && (this.g = 32E3 < 2 * this.g ? 32E3 : 2 * this.g), rd(this)
        } catch (a) {
            R(2602, a)
        }
    }, a), a.g)
}, pd = function(a, b) {
    if (!a.f)
        return !1;
    var c = "https:" == h.location.protocol ? "https://www.google.com/csi": "http://csi.gstatic.com/csi", d = {
        vrg: "54"
    };
    a.i.length && (d.e = a.i.join());
    return b && a.c && null != a.c && (a.b.load || "complete" == document.readyState) && a.b.gpt_load && a.b._pubads_load_start == a.b.pubads_load ? (h.GPT_jstiming.report(a.c, d, c), a.c = null, !0) : !b && a.a && a.j ? (h.GPT_jstiming.report(a.a,
    d, c), a.a = null, a.j=!1, !0) : !1
};
od.prototype.tickRepeated = function(a, b, c) {
    if (this.f&&!(4 < b)) {
        var d = md[a], f = kd.hasOwnProperty(a), g = a, l = d, r = "";
        c && (r = ".psbk");
        d && (l = this.d && nd[d] ? l + (".sra" + r) : l + (r + "." + b));
        g = this.d && nd[a] ? g + (".sra" + r) : g + (r + "." + b);
        l && this.h.hasOwnProperty("_" + l) && (l = "_" + l, qd(this, l, !1, void 0, this.h[l] + this.k), delete this.h[l]);
        qd(this, g, f, l);
        f || "ad_fetch_start" != a || this.m || (qd(this, "first_ad_fetch_start" + r, !1, void 0, window.GPT_jstiming.getTick(this.a, g) + this.k), this.m=!0);
        ld.hasOwnProperty(a) && (a = window.GPT_jstiming.getTick(this.a,
        g), this.h["_" + g] = a)
    }
};
od.prototype.addFeature = function(a) {
    0 < a.length && Ra(this.i, a)
};
od.prototype.setSraMode = function(a) {
    null === this.d && ((this.d = a) ? this.addFeature("sra") : this.addFeature("non-sra"))
};
var td = function() {
    return w()._tmanager_ || sd()
}, sd = function() {
    var a = new od;
    x("_tmanager_", a);
    rd(a);
    Ha(window, function() {
        a.tick("load")
    });
    a.addFeature("v54");
    return a
};
var ud = function() {
    this.a = {};
    this.b=!1;
    this.c = J();
    this.f = G(this.c, nb());
    Ha(window, ga(ud.prototype.d, this))
}, vd = function(a, b) {
    var c = null;
    b in a.a && (c = a.a[b]);
    return c
}, wd = function() {
    var a = U();
    v(a.a, function(a, c) {
        a.enable();
        td().addFeature(c)
    })
};
ud.prototype.d = function() {
    try {
        this.b=!0, G(this.c, hb(), null, null, this.f)
    } catch (a) {
        R(1802, a)
    }
};
var U = function() {
    var a = w();
    return a.service_manager_instance || (a.service_manager_instance = new ud)
};
x("enableServices", function() {
    try {
        wd()
    } catch (a) {
        R(1801, a)
    }
});
var xd = function(a) {
    return n(a) && 2 == a.length && Za(a[0]) && Za(a[1])
}, yd = function(a) {
    return n(a) && 1 < a.length && s(a[0]) && s(a[1])
};
var zd = function(a, b) {
    this.b = a;
    this.a = b
};
zd.prototype.getWidth = function() {
    return this.b
};
zd.prototype.getHeight = function() {
    return this.a
};
var Ad = function(a) {
    var b = [];
    if (n(a))
        if (yd(a))
            b.push(new zd(a[0], a[1]));
        else 
            for (var c = 0; c < a.length; ++c) {
                var d = a[c];
                yd(d) && b.push(new zd(d[0], d[1]))
            }
    return b
};
var Bd = function(a, b) {
    this.a = a;
    this.b = b
};
Bd.prototype.clone = function() {
    return new Bd(this.a, this.b)
};
var Cd = function(a) {
    this.a = a
}, Dd = function(a, b) {
    var c = Qa(a.a, function(a) {
        a = a.a;
        return a.b <= b.b && a.a <= b.a
    });
    return null == c ? null : c.b
}, Ed = function(a) {
    if (!n(a) || 2 != a.length)
        throw Error("Each mapping entry has to be an array of size 2");
    var b;
    b = a[0];
    if (!xd(b))
        throw Error("Size has to be an array of two non-negative integers");
    b = new Uc(b[0], b[1]);
    if (n(a[1]) && 0 == a[1].length)
        a = [];
    else if (a = Ad(a[1]), 0 == a.length)
        throw Error("At least one slot size must be present");
    return new Bd(b, a)
};
var Fd = function(a, b, c) {
    this.b = a;
    this.c = s(b) ? b : 0;
    this.a = this.b + "_" + this.c;
    this.d = c || "gpt_unit_" + this.a
};
e = Fd.prototype;
e.getId = function() {
    return this.a
};
e.getName = function() {
    return this.b
};
e.getInstance = function() {
    return this.c
};
e.toString = Fd.prototype.getId;
e.getDomId = function() {
    return this.d
};
var Gd = function(a, b, c, d) {
    this.j = a;
    this.v = Ad(c);
    this.l = null;
    this.b = new Fd(a, b, d);
    this.c = [];
    this.f = {};
    this.h = null;
    this.a = J();
    G(this.a, ib(this.b.toString()), null, this);
    this.g = this.k = null;
    this.n = this.s = "";
    this.m=!0;
    this.d = {};
    this.i = [];
    this.u=!1;
    this.r = this.q = null;
    this.o = 0;
    this.p =- 1
};
e = Gd.prototype;
e.set = function(a, b) {
    try {
        if (!p(a) ||!b)
            return H(this.a, P("Slot.set", arguments), null, this), this;
        var c = this.getName();
        this.f[a] = b;
        this.k || this.g ? H(this.a, pb(a, String(b), c), null, this) : G(this.a, ob(a, String(b), c), null, this);
        return this
    } catch (d) {
        R(201, d)
    }
};
e.get = function(a) {
    try {
        return p(a) ? this.f.hasOwnProperty(a) ? this.f[a] : null : (H(this.a, P("Slot.get", arguments), null, this), null)
    } catch (b) {
        R(202, b)
    }
};
e.getAttributeKeys = function() {
    try {
        var a = [];
        v(this.f, function(b, d) {
            a.push(d)
        });
        return a
    } catch (b) {
        R(203, b)
    }
};
e.addService = function(a) {
    try {
        var b = U();
        if (!Tc(b.a, a))
            return H(this.a, Ec(this.b.toString()), null, this), this;
        for (b = 0; b < this.c.length; ++b)
            if (a == this.c[b])
                return H(this.a, qb(a.getName(), this.b.toString()), a, this), this;
        this.c.push(a);
        a.w(this);
        return this
    } catch (c) {
        R(204, c)
    }
};
e.getName = function() {
    return this.j
};
e.getAdUnitPath = function() {
    try {
        return this.j
    } catch (a) {
        R(215, a)
    }
};
e.getSlotId = function() {
    return this.b
};
e.getServices = function() {
    return this.c
};
e.getSizes = function(a, b) {
    return s(a) && s(b) && this.l ? Dd(this.l, new Uc(a, b)) : this.v
};
e.defineSizeMapping = function(a) {
    try {
        if (!n(a))
            throw Error("Size mapping has to be an array");
        var b = Pa(a, Ed);
        this.l = new Cd(b)
    } catch (c) {
        H(this.a, rb(c.message), null, this)
    }
    return this
};
e.hasWrapperDiv = function() {
    return !!document.getElementById(this.b.getDomId())
};
e.setClickUrl = function(a) {
    try {
        if (!p(a))
            return H(this.a, P("Slot.setClickUrl", arguments), null, this), this;
        this.n = a;
        return this
    } catch (b) {
        R(206, b)
    }
};
e.getClickUrl = function() {
    return this.n
};
e.setCategoryExclusion = function(a) {
    try {
        return p(a)&&!Fa(null == a ? "" : String(a)) ? (Ra(this.i, a), G(this.a, sb(a), null, this)) : H(this.a, P("Slot.setCategoryExclusion", arguments), null, this), this
    } catch (b) {
        R(207, b)
    }
};
e.clearCategoryExclusions = function() {
    try {
        return G(this.a, tb(), null, this), this.i = [], this
    } catch (a) {
        R(208, a)
    }
};
e.getCategoryExclusions = function() {
    try {
        return Sa(this.i)
    } catch (a) {
        R(209, a)
    }
};
e.setTargeting = function(a, b) {
    try {
        var c = [];
        n(b) ? c = b : b && c.push(b.toString());
        p(a) ? (G(this.a, ub(a, c.join(), this.getName()), null, this), this.d[a] = c) : H(this.a, P("Slot.setTargeting", arguments), null, this);
        return this
    } catch (d) {
        R(210, d)
    }
};
e.clearTargeting = function() {
    try {
        return G(this.a, vb(), null, this), this.d = {}, this
    } catch (a) {
        R(211, a)
    }
};
e.getTargetingMap = function() {
    var a = this.d, b = {}, c;
    for (c in a)
        b[c] = a[c];
    return b
};
e.getTargeting = function(a) {
    try {
        return p(a) ? this.d.hasOwnProperty(a) ? Sa(this.d[a]) : [] : (H(this.a, P("Slot.getTargeting", arguments), null, this), [])
    } catch (b) {
        R(212, b)
    }
};
e.getTargetingKeys = function() {
    try {
        var a = [];
        v(this.d, function(b, d) {
            a.push(d)
        });
        return a
    } catch (b) {
        R(213, b)
    }
};
e.getOutOfPage = function() {
    return this.u
};
e.getAudExtId = function() {
    return this.o
};
e.setTagForChildDirectedTreatment = function(a) {
    if (0 === a || 1 === a)
        this.p = a
};
e.gtfcd = function() {
    return this.p
};
e.setCollapseEmptyDiv = function(a, b) {
    try {
        if (!q(a) || b&&!q(b))
            return H(this.a, P("Slot.setCollapseEmptyDiv", arguments), null, this), this;
        this.r = (this.q = a) && Boolean(b);
        b&&!a && H(this.a, wb(this.b.toString()), null, this);
        return this
    } catch (c) {
        R(214, c)
    }
};
e.getCollapseEmptyDiv = function() {
    return this.q
};
e.getDivStartsCollapsed = function() {
    return this.r
};
var Hd = function(a, b) {
    if (!a.hasWrapperDiv())
        return I(a.a, xb(a.b.toString()), null, a), !1;
    var c = h.document, d = a.b.getDomId(), c = c && c.getElementById(d);
    if (!c)
        return I(a.a, yb(d, a.b.toString()), null, a), !1;
    d = a.h;
    return p(d) && 0 < d.length ? (a.renderStarted(), c.innerHTML = d, a.renderEnded(b), !0) : !1
};
e = Gd.prototype;
e.fetchStarted = function(a) {
    this.k = G(this.a, jb(this.getName()), null, this);
    this.s = a
};
e.getContentUrl = function() {
    return this.s
};
e.fetchEnded = function() {
    G(this.a, kb(this.getName()), null, this, this.k)
};
e.renderStarted = function() {
    this.g = G(this.a, lb(this.getName()), null, this)
};
e.renderEnded = function(a) {
    G(this.a, mb(this.getName()), null, this, this.g);
    Oa(this.c, function(b) {
        b.getName() == a.serviceName && jd(b, a)
    })
};
var Id = function() {
    this.a = {};
    this.b = {};
    this.c = J()
}, Jd = function(a, b, c, d) {
    if (!p(b) || 0 >= b.length ||!c)
        return null;
    b in a.a || (a.a[b] = []);
    c = new Gd(b, a.a[b].length, c, d);
    d = c.getSlotId().getDomId();
    if (a.b[d])
        return I(a.c, Cb(d)), null;
    a.a[b].push(c);
    a.b[c.getSlotId().getDomId()] = c;
    Lc.push(c);
    return c
};
Id.prototype.d = function(a, b) {
    var c = b || 0, d = p(a) && this.a[a] || [];
    return 0 <= c && c < d.length && (d = d[c], d.getSlotId().getInstance() == c) ? d : null
};
var Kd = function(a, b) {
    return Sc(a.a, function(a) {
        return 0 <= Na(a, b)
    })
}, V = function() {
    var a = w();
    return a.slot_manager_instance || (a.slot_manager_instance = new Id)
}, W = function(a, b, c) {
    try {
        var d = V();
        return d && Jd(d, a, b, c)
    } catch (f) {
        R(802, f)
    }
};
x("defineOutOfPageSlot", function(a, b) {
    try {
        var c = V();
        if (!c)
            return null;
        var d = Jd(c, a, [1, 1], b);
        return d ? (d.u=!0, d) : null
    } catch (f) {
        R(801, f)
    }
});
x("defineSlot", W);
x("defineUnit", W);
Id.prototype.find = Id.prototype.d;
Id.getInstance = V;
var Ld = function(a) {
    try {
        var b = J();
        if (p(a)) {
            var c, d = V();
            if (c = d.b[a] ? d.b[a] : null)
                if (c.m&&!c.hasWrapperDiv())
                    H(c.a, zb(c.j, c.b.getDomId()), null, c);
                else 
                    for (a = 0; a < c.c.length; ++a)
                        c.c[a].b && c.c[a].p(c);
            else 
                I(b, Bb(String(a)))
            } else 
                I(b, Ab(String(a)))
    } catch (f) {
        R(2201, f)
    }
};
x("display", Ld, !0);
var Md = /#|$/, Nd = function(a, b) {
    var c = a.search(Md), d;
    t: {
        d = 0;
        for (var f = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
            var g = a.charCodeAt(d - 1);
            if (38 == g || 63 == g)
                if (g = a.charCodeAt(d + f), !g || 61 == g || 38 == g || 35 == g)
                    break t;
            d += f + 1
        }
        d =- 1
    }
    if (0 > d)
        return null;
    f = a.indexOf("&", d);
    if (0 > f || f > c)
        f = c;
    d += b.length + 1;
    return decodeURIComponent(a.substr(d, f - d).replace(/\+/g, " "))
};
var Od = null, Pd = Yc || Zc || Xc || "function" == typeof h.atob;
var Rd = function(a, b, c) {
    var d = Qd++;
    this.a = new Gd(a, d, b);
    this.a.addService(c);
    this.b = c
}, Qd = 1;
e = Rd.prototype;
e.setClickUrl = function(a) {
    try {
        return this.a.setClickUrl(a), this
    } catch (b) {
        R(1202, b)
    }
};
e.setTargeting = function(a, b) {
    try {
        return this.a.setTargeting(a, b), this
    } catch (c) {
        R(1204, c)
    }
};
e.setAudExtId = function(a) {
    try {
        return Za(a) && (this.a.o = a), this
    } catch (b) {
        R(1205, b)
    }
};
e.setTagForChildDirectedTreatment = function(a) {
    try {
        return this.a.setTagForChildDirectedTreatment(a), this
    } catch (b) {
        R(1203, b)
    }
};
e.display = function() {
    try {
        Sd(this.b, this.a)
    } catch (a) {
        R(1201, a)
    }
};
var Td = function(a, b) {
    this.a = a;
    this.b = b || {
        changeCorrelator: !0
    }
}, X = function() {
    t.call(this);
    this.g=!1;
    this.a = null;
    this.D = 0;
    this.n =- 1;
    this.o = {};
    this.j = {};
    this.v = [];
    this.B = this.u = "";
    this.I=!1;
    this.G=!0;
    this.f = this.F=!1;
    this.c = cb?!1 : !0;
    this.H = cb;
    this.q = this.i=!1;
    this.d = [];
    this.l = [];
    this.h = [];
    this.C = {};
    this.s=!1;
    this.k =- 1;
    this.J = this.K = "";
    this.r = [];
    null !== Nd(window.location.href, "google_force_safeframe_image") && this.r.push("108809020")
};
ha(X);
var Ud = {
    adsense_ad_format: "google_ad_format",
    adsense_ad_types: "google_ad_type",
    adsense_allow_expandable_ads: "google_allow_expandable_ads",
    adsense_background_color: "google_color_bg",
    adsense_bid: "google_bid",
    adsense_border_color: "google_color_border",
    adsense_channel_ids: "google_ad_channel",
    adsense_content_section: "google_ad_section",
    adsense_cpm: "google_cpm",
    adsense_ed: "google_ed",
    adsense_encoding: "google_encoding",
    adsense_family_safe: "google_safe",
    adsense_feedback: "google_feedback",
    adsense_flash_version: "google_flash_version",
    adsense_font_face: "google_font_face",
    adsense_font_size: "google_font_size",
    adsense_hints: "google_hints",
    adsense_host: "google_ad_host",
    adsense_host_channel: "google_ad_host_channel",
    adsense_host_tier_id: "google_ad_host_tier_id",
    adsense_keyword_type: "google_kw_type",
    adsense_keywords: "google_kw",
    adsense_line_color: "google_line_color",
    adsense_link_color: "google_color_link",
    adsense_relevant_content: "google_contents",
    adsense_reuse_colors: "google_reuse_colors",
    adsense_targeting: "google_targeting",
    adsense_targeting_types: "google_targeting",
    adsense_test_mode: "google_adtest",
    adsense_text_color: "google_color_text",
    adsense_ui_features: "google_ui_features",
    adsense_ui_version: "google_ui_version",
    adsense_url_color: "google_color_url",
    alternate_ad_iframe_color: "google_alternate_color",
    alternate_ad_url: "google_alternate_ad_url",
    demographic_age: "google_cust_age",
    demographic_ch: "google_cust_ch",
    demographic_gender: "google_cust_gender",
    demographic_interests: "google_cust_interests",
    demographic_job: "google_cust_job",
    demographic_l: "google_cust_l",
    demographic_lh: "google_cust_lh",
    demographic_u_url: "google_cust_u_url",
    demographic_unique_id: "google_cust_id",
    document_language: "google_language",
    geography_override_city: "google_city",
    geography_override_country: "google_country",
    geography_override_region: "google_region",
    page_url: "google_page_url"
};
e = X.prototype;
e.set = function(a, b) {
    try {
        if (!(p(a) && 0 < a.length))
            return H(this.log, P("PubAdsService.set", arguments), this, null), this;
        this.o[a] = b;
        G(this.log, Hb(a, String(b), this.getName()), this, null);
        return this
    } catch (c) {
        R(21, c)
    }
};
e.get = function(a) {
    try {
        return this.o[a]
    } catch (b) {
        R(22, b)
    }
};
e.getAttributeKeys = function() {
    try {
        var a = [];
        v(this.o, function(b, d) {
            a.push(d)
        });
        return a
    } catch (b) {
        R(23, b)
    }
};
e.display = function(a, b, c, d) {
    try {
        this.enable();
        var f = c ? W(a, b, c): W(a, b);
        f.addService(this);
        d && f.setClickUrl(d);
        Ld(f.getSlotId().getDomId())
    } catch (g) {
        R(24, g)
    }
};
e.A = function() {
    if (this.c) {
        if (!this.g) {
            var a = document, b = a.createElement("script");
            U();
            b.async=!0;
            b.type = "text/javascript";
            b.src = Vd();
            (a = a.getElementsByTagName("head")[0] || a.getElementsByTagName("body")[0]) ? (G(this.log, Qb("GPT PubAds"), this), td().tick("_pubads_load_start"), a.appendChild(b), this.g=!0) : I(this.log, Rb("GPT PubAds"), this)
        }
    } else 
        Wd(this)
};
e.getName = function() {
    return "publisher_ads"
};
var Vd = function() {
    return ab() + "//partner.googleadservices.com/gpt/pubads_impl_54.js"
}, Wd = function(a) {
    var b = U();
    a.g || b.b || (b = document, a.g=!0, td().tick("_pubads_load_start"), b.write('<script type="text/javascript" src="' + $a(Vd()) + '">\x3c/script>'))
};
X.prototype.fillSlot = function(a) {
    G(this.log, Ub());
    this.a.fillSlot(a);
    this.C[a.getName()]=!0;
    if (this.a)
        for (a = 0; a < this.h.length; a++) {
            var b = this.h[a];
            b.a[0].getName()in this.C && (this.refresh(b.a, b.b), Ma.splice.call(this.h, a, 1), a--)
        } else 
            I(this.log, Tb(), this)
};
X.prototype.onGoogleAdsJsLoad = function(a) {
    this.a = a;
    G(this.log, Sb("GPT"), this);
    this.a.setCookieOptions(this.D);
    this.a.setTagForChildDirectedTreatment(this.n);
    Oa(this.r, function(a) {
        this.a.setApiExperiment(a)
    }, this);
    this.a.setCenterAds(this.H);
    cb && (this.f=!1, this.a.setMobilePlatform());
    this.G || this.a.disableFetch();
    this.i && this.a.collapseEmptyDivs(this.q);
    if (this.f) {
        this.c ? this.a.enableAsyncSingleRequest() : this.a.enableSingleRequest();
        Xd(this);
        a = this.getSlots();
        for (var b = 0; b < a.length; ++b)
            Yd(this, a[b])
    } else 
        this.c &&
        this.a.enableAsyncRendering();
    this.F && this.a.disableInitialLoad();
    Zd(this);
    $d(this);
    if (0 < this.d.length)
        for (b = 0; b < this.d.length; ++b)
            this.p(this.d[b]);
    if (0 < this.l.length)
        for (b = 0; b < this.l.length; ++b)
            Sd(this, this.l[b])
};
X.prototype.w = function(a) {
    this.c || (a.m=!1);
    t.prototype.w.call(this, a)
};
X.prototype.p = function(a) {
    if (U().b&&!this.c)
        I(this.log, Vb(), this);
    else if (this.a)
        Xd(this), Yd(this, a) && this.fillSlot(a);
    else if (this.c || this.g && 0 == this.d.length) {
        for (var b=!1, c = 0; c < this.d.length; ++c)
            a === this.d[c] && (b=!0);
        b || (G(this.log, Wb(a.getName(), "GPT"), this, a), this.d.push(a))
    } else 
        I(this.log, Yb(a.getName()), this, a)
};
var Yd = function(a, b) {
    if (a.a && null == a.a.addSlot(b))
        return I(a.log, Zb(b.getName()), a, b), !1;
    for (var c = b.getAttributeKeys(), d = 0; d < c.length; ++d)
        c[d]in Ud ? a.a.addAdSenseSlotAttribute(b, Ud[c[d]], String(b.get(c[d]))) : H(a.log, ac(String(c[d]), String(b.get(c[d])), b.getName()), a, b);
    return !0
}, Xd = function(a) {
    if (!a.I) {
        a.I=!0;
        for (var b = a.getAttributeKeys(), c = 0; c < b.length; ++c)
            b[c]in Ud ? a.a.addAdSensePageAttribute(Ud[b[c]], String(a.get(b[c]))) : H(a.log, $b(String(b[c]), String(a.get(b[c]))), a);
        a.a.addAdSensePageAttribute("google_tag_info",
        "v2");
        v(a.j, function(a, b) {
            if (n(a))
                for (var c = 0; c < a.length; ++c)
                    this.a.addAttribute(b, a[c])
        }, a);
        Oa(a.v, function(a) {
            this.a.addPageCategoryExclusion(a)
        }, a);
        a.a.setPublisherProvidedId(a.B);
        a.u && a.a.setLocation(a.u)
    }
};
e = X.prototype;
e.setCookieOptions = function(a) {
    try {
        if (!s(a) ||!Za(a))
            return H(this.log, bc(String(a)), this), this;
        this.D = a;
        this.a && this.a.setCookieOptions(a);
        return this
    } catch (b) {
        R(17, b)
    }
};
e.setTagForChildDirectedTreatment = function(a) {
    try {
        if (0 !== a && 1 !== a)
            return H(this.log, Bc(String(a)), this), this;
        this.n = a;
        this.a && this.a.setTagForChildDirectedTreatment(a);
        return this
    } catch (b) {
        R(18, b)
    }
};
e.clearTagForChildDirectedTreatment = function() {
    try {
        return this.n =- 1, this.a && this.a.setTagForChildDirectedTreatment( - 1), this
    } catch (a) {
        R(19, a)
    }
};
e.setTargeting = function(a, b) {
    try {
        var c = null;
        p(b) ? c = [b] : n(b) ? c = b : aa(b) && (c = Sa(b));
        var d = c ? c.join(): String(b);
        if (!p(a) || Fa(null == a ? "" : String(a)) ||!c)
            return H(this.log, P("PubAdsService.setTargeting", arguments), this), this;
        this.j[a] = c;
        G(this.log, Ac(a, d, this.getName()), this);
        if (this.a)
            for (this.a.clearAttribute(a), d = 0; d < c.length; ++d)
                this.a.addAttribute(a, c[d]);
        return this
    } catch (f) {
        R(1, f)
    }
};
e.clearTargeting = function(a) {
    try {
        if (!p(a) || Fa(null == a ? "" : String(a)))
            return H(this.log, P("PubAdsService.clearTargeting", arguments), this), this;
        if (!this.j[a])
            return H(this.log, xc(a, this.getName()), this), this;
        delete this.j[a];
        G(this.log, wc(a, this.getName()), this);
        this.a && this.a.clearAttribute(a);
        return this
    } catch (b) {
        R(2, b)
    }
};
e.setCategoryExclusion = function(a) {
    try {
        if (!p(a) || Fa(null == a ? "" : String(a)))
            return H(this.log, P("PubAdsService.setCategoryExclusion", arguments), this), this;
        Ra(this.v, a);
        G(this.log, yc(a), this);
        this.a && this.a.addPageCategoryExclusion(a);
        return this
    } catch (b) {
        R(3, b)
    }
};
e.clearCategoryExclusions = function() {
    try {
        return this.v = [], G(this.log, zc(), this), this.a && this.a.clearPageCategoryExclusions(), this
    } catch (a) {
        R(4, a)
    }
};
e.noFetch = function() {
    this.a ? H(this.log, dc("noFetch", "pubads"), this) : this.G=!1;
    var a = new Hc("gpt_unrenamed_function_call");
    Q(a, "method", "34");
    Jc(a, this.getSlots());
    Ic(a)
};
e.disableInitialLoad = function() {
    try {
        this.a ? H(this.log, dc("disableInitialLoad", "pubads"), this) : this.F=!0
    } catch (a) {
        R(5, a)
    }
};
e.enableSingleRequest = function() {
    try {
        return this.b&&!this.f ? H(this.log, cc("enableSingleRequest"), this) : (G(this.log, hc("single request"), this), this.f=!0), this.f
    } catch (a) {
        R(6, a)
    }
};
e.enableAsyncRendering = function() {
    try {
        return this.b&&!this.c ? H(this.log, cc("enableAsyncRendering"), this) : (G(this.log, hc("asynchronous rendering"), this), this.c=!0), this.c
    } catch (a) {
        R(7, a)
    }
};
e.enableSyncRendering = function() {
    try {
        if (this.b && this.c)
            H(this.log, cc("enableSyncRendering"), this);
        else {
            G(this.log, hc("synchronous rendering"), this);
            this.c=!1;
            for (var a = this.getSlots(), b = 0; b < a.length; ++b)
                a[b].m=!1
        }
        return !this.c
    } catch (c) {
        R(8, c)
    }
};
e.setCentering = function(a) {
    try {
        G(this.log, ic("centering", String(a)), this), this.H = a
    } catch (b) {
        R(9, b)
    }
};
e.setPublisherProvidedId = function(a) {
    try {
        return this.b ? H(this.log, ec("setPublisherProvidedId", a), this) : (G(this.log, ic("PPID", a), this), this.B = a), this
    } catch (b) {
        R(20, b)
    }
};
e.definePassback = function(a, b) {
    try {
        return !p(a) || 0 >= a.length ||!Boolean(b) ? (I(this.log, P("PubAdsService.definePassback", arguments)), null) : new Rd(a, b, this)
    } catch (c) {
        R(10, c)
    }
};
var Sd = function(a, b) {
    Wd(a);
    a.a ? a.a.passback(b) : (G(a.log, Xb(b.getName(), "GPT"), a, b), a.l.push(b))
};
e = X.prototype;
e.refresh = function(a, b) {
    try {
        if (a&&!n(a) || b && (!ba(b) || b.changeCorrelator&&!q(b.changeCorrelator)))
            H(this.log, P("PubAdsService.refresh", arguments), this);
        else {
            var c = null;
            if (a && (c = ae(this, a), !c.length)) {
                H(this.log, P("PubAdsService.refresh", arguments), this);
                return 
            }
            if (this.a) {
                G(this.log, oc(), this);
                var d=!0;
                k(b) && k(b.changeCorrelator) && (d = b.changeCorrelator);
                this.a.refresh(c, {
                    changeCorrelator: d
                })
            } else 
                this.f ? (G(this.log, nc(), this), c ? Ra(this.h, new Td(c, b)) : Ra(this.h, new Td(this.getSlots(), b))) : H(this.log,
                kc(), this)
            }
    } catch (f) {
        R(11, f)
    }
};
e.O = function(a, b) {
    if (a&&!n(a) || b.videoStreamCorrelator&&!s(b.videoStreamCorrelator) || b.videoPodNumber&&!s(b.videoPodNumber) || b.videoPodPosition&&!s(b.videoPodPosition) || b.persistentRoadblocksOnly&&!q(b.persistentRoadblocksOnly) || b.clearUnfilledSlots&&!q(b.clearUnfilledSlots))
        H(this.log, P("PubAdsService.internalVideoRefresh", arguments), this);
    else if (this.a) {
        var c = null;
        if (a && (c = ae(this, a), !c.length)) {
            I(this.log, jc("internalVideoRefresh"), this);
            return 
        }
        G(this.log, oc(), this);
        this.a.refresh(c, b)
    } else 
        H(this.log,
        kc(), this)
};
e.enableVideoAds = function() {
    try {
        this.s=!0, Zd(this)
    } catch (a) {
        R(12, a)
    }
};
e.setVideoContent = function(a, b) {
    try {
        this.s=!0, this.K = a, this.J = b, Zd(this)
    } catch (c) {
        R(13, c)
    }
};
e.getVideoContent = function() {
    try {
        return this.a ? this.a.getVideoContentInformation() : null
    } catch (a) {
        R(30, a)
    }
};
var Zd = function(a) {
    a.s && a.a && a.a.setVideoContentInformation(a.K, a.J)
}, $d = function(a) {
    a.a && a.a.setCorrelator( - 1 == a.k ? void 0 : a.k)
};
X.prototype.getCorrelator = function() {
    try {
        return 0 == this.getSlots().length ? "not_available" : this.a ? this.a.getCorrelator() : "not_loaded"
    } catch (a) {
        R(27, a)
    }
};
X.prototype.setCorrelator = function(a) {
    try {
        var b = window;
        if (b.top == b)
            return this;
        if (!Za(a) || 0 === a)
            return H(this.log, Fc(String(a)), this), this;
        this.k = a;
        $d(this);
        return this
    } catch (c) {
        R(28, c)
    }
};
X.prototype.updateCorrelator = function() {
    try {
        return this.k =- 1, $d(this), this
    } catch (a) {
        R(25, a)
    }
};
var be = function(a) {
    if (!a.a)
        return 0;
    a = a.a.getVideoStreamCorrelator();
    return isNaN(a) ? 0 : a
};
e = X.prototype;
e.getVideoStreamCorrelator = function() {
    var a = new Hc("gpt_unrenamed_function_call");
    Q(a, "method", "31");
    Jc(a, this.getSlots());
    Ic(a);
    return be(this)
};
e.isAdRequestFinished = function() {
    try {
        return this.a ? this.a.isAdRequestFinished() : !1
    } catch (a) {
        R(29, a)
    }
};
e.isSlotAPersistentRoadblock = function(a) {
    var b = new Hc("gpt_unrenamed_function_call");
    Q(b, "method", "32");
    Jc(b, this.getSlots());
    Ic(b);
    return this.a ? this.a.isSlotAPersistentRoadblock(a) : !1
};
e.collapseEmptyDivs = function(a) {
    try {
        return this.i ? H(this.log, uc(), this) : this.b ? H(this.log, cc("collapseEmptyDivs"), this) : (this.q = Boolean(a), G(this.log, tc(String(this.q)), this), this.i=!0), this.i
    } catch (b) {
        R(14, b)
    }
};
e.clear = function(a) {
    try {
        if (!this.a)
            return H(this.log, mc(), this), !1;
        var b = null;
        if (a && (b = ae(this, a), 0 == b.length))
            return H(this.log, P("PubAdsService.clear", arguments), this), !1;
        G(this.log, pc(), this);
        return this.a.clearSlotContents(b)
    } catch (c) {
        R(15, c)
    }
};
var ce = function(a) {
    a.a ? (G(a.log, qc(), a), a.a.clearNoRefreshState()) : H(a.log, lc(), a)
};
X.prototype.clearNoRefreshState = function() {
    var a = new Hc("gpt_unrenamed_function_call");
    Q(a, "method", "33");
    Jc(a, this.getSlots());
    Ic(a);
    ce(this)
};
X.prototype.setLocation = function(a, b, c) {
    try {
        var d = "role:1 producer:12";
        if (k(b)) {
            if (!s(a))
                return H(this.log, rc("Latitude")), this;
            if (!s(b))
                return H(this.log, rc("Longitude")), this;
            d += " latlng{ latitude_e7: " + Math.round(1E7 * a) + " longitude_e7: " + Math.round(1E7 * b) + "}";
            if (k(c)) {
                if (isNaN(c))
                    return H(this.log, rc("Radius")), this;
                d += " radius:" + Math.round(c)
            }
        } else {
            if (50 < a.length) {
                var f = a.substring(0, 50);
                H(this.log, sc(String(a), "50", f));
                a = f
            }
            d += ' loc:"' + a + '"'
        }
        var g;
        if (Pd)
            g = h.btoa(d);
        else {
            f = d;
            d = [];
            for (b = a = 0; b < f.length; b++) {
                for (var l =
                f.charCodeAt(b); 255 < l;)
                    d[a++] = l & 255, l>>=8;
                d[a++] = l
            }
            if (!aa(d))
                throw Error("encodeByteArray takes an array as a parameter");
            if (!Od)
                for (Od = {}, l = 0; 65 > l; l++)
                    Od[l] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(l);
            l = Od;
            f = [];
            for (a = 0; a < d.length; a += 3) {
                var r = d[a], O = a + 1 < d.length, B = O ? d[a + 1]: 0, D = a + 2 < d.length, F = D ? d[a + 2]: 0;
                b = r>>2;
                c = (r & 3)<<4 | B>>4;
                var fc = (B & 15)<<2 | F>>6, gc = F & 63;
                D || (gc = 64, O || (fc = 64));
                f.push(l[b], l[c], l[fc], l[gc])
            }
            g = f.join("")
        }
        this.u = "a " + g;
        return this
    } catch (ue) {
        R(16, ue)
    }
};
X.prototype.getVersion = function() {
    return this.a ? this.a.getVersion() : void 0
};
X.prototype.forceExperiment = function(a) {
    this.b ? H(this.log, ec("forceExperiment", a), this) : this.r.push(a)
};
var Y = function() {
    try {
        var a = U(), b = vd(a, "publisher_ads");
        if (!b) {
            var c = b = new X;
            a.a[c.getName()] = c
        }
        return b
    } catch (d) {
        R(26, d)
    }
}, ae = function(a, b) {
    for (var c = [], d = 0; d < b.length; ++d) {
        var f = b[d];
        f instanceof Gd ? c.push(f) : H(a.log, vc(String(d)), a)
    }
    return c
};
x("pubads", Y);
var Z = function() {
    t.call(this);
    this.o=!0;
    this.d = this.l=!1;
    this.h = 0;
    this.g = this.f = void 0;
    this.n = this.k=!1;
    this.i = {};
    this.c = {};
    this.a=!1;
    this.j = {}
};
ha(Z);
e = Z.prototype;
e.set = function(a, b) {
    p(a) && 0 < a.length ? (this.j[a] = b, G(this.log, Hb(a, String(b), this.getName()), this, null)) : H(this.log, Ib(String(a), String(b), this.getName()), this, null);
    return this
};
e.get = function(a) {
    return this.j[a]
};
e.getAttributeKeys = function() {
    var a = [];
    v(this.j, function(b, c) {
        a.push(c)
    });
    return a
};
e.display = function(a, b, c, d) {
    this.enable();
    a = c ? W(a, b, c) : W(a, b);
    a.addService(this);
    d && a.setClickUrl(d);
    Ld(a.getSlotId().getDomId())
};
e.A = function() {
    if (this.o) {
        if (!this.n) {
            var a = document, b = document.createElement("script");
            b.async=!0;
            b.type = "text/javascript";
            b.src = de();
            try {
                var c = a.getElementsByTagName("script")[0];
                G(this.log, Qb("GPT CompanionAds"), this);
                this.n=!0;
                c.parentNode && c.parentNode.insertBefore(b, c)
            } catch (d) {
                I(this.log, Rb("GPT CompanionAds"), this)
            }
        }
    } else 
        this.k || (h.document.write('<script type="text/javascript" src="' + $a(de()) + '">\x3c/script>'), this.k=!0)
};
e.enableSyncLoading = function() {
    try {
        this.o=!1
    } catch (a) {
        R(402, a)
    }
};
e.setRefreshUnfilledSlots = function(a) {
    try {
        q(a) && (this.l = a)
    } catch (b) {
        R(403, b)
    }
};
e.setClearUnfilledSlots = function(a) {
    try {
        q(a) && (this.d = a)
    } catch (b) {
        R(412, b)
    }
};
e.notifyUnfilledSlots = function(a) {
    try {
        if (this.l)
            ee(this, fe(this, a));
        else if (this.d) {
            var b = fe(this, a), c = Y();
            if (c.b)
                for (c.clear(b), a = 0; a < b.length; ++a) {
                    var d = new id(b[a], !0, null, c.getName());
                    jd(c, d)
                } else 
                    I(this.log, Nb("PubAds", "clear"))
                }
        } catch (f) {
        R(413, f)
    }
};
e.isRoadblockingSupported = function() {
    var a = Y();
    if (!a.b)
        return !1;
    var a = a.getSlots(), b = this.getSlots();
    if (a.length != b.length)
        return !1;
    for (var c = 0; c < b.length; ++c) {
        for (var d=!1, f = 0; f < a.length; ++f)
            if (b[c] === a[f]) {
                d=!0;
                break
            }
        if (!d)
            return !1
    }
    return !0
};
e.refreshAllSlots = function() {
    try {
        this.l && ee(this, null)
    } catch (a) {
        R(404, a)
    }
};
e.setVideoSessionInfo = function(a, b, c, d, f, g, l) {
    try {
        this.a=!1, this.h = 0, this.g = this.f = void 0, this.h = a, k(f) && (this.f = f), k(g) && (this.g = g), k(l) && (this.a = l)
    } catch (r) {
        R(405, r)
    }
};
e.setVideoSession = function(a, b, c, d) {
    this.setVideoSessionInfo(a, "", "", "", b, c, d)
};
e.getDisplayAdsCorrelator = function() {
    try {
        return Y().getCorrelator()
    } catch (a) {
        R(406, a)
    }
};
e.getVideoStreamCorrelator = function() {
    try {
        return be(Y())
    } catch (a) {
        R(407, a)
    }
};
var ee = function(a, b) {
    var c = Y();
    if (c.b) {
        if (a.a) {
            if (!a.isRoadblockingSupported()) {
                H(a.log, Mb());
                return 
            }
            ce(c);
            c.clear()
        }
        var d = {
            isVideoRefresh: !0
        };
        k(a.h) && (d.videoStreamCorrelator = a.h);
        a.f && (d.videoPodNumber = a.f);
        a.g && (d.videoPodPosition = a.g);
        a.a && (d.persistentRoadblocksOnly = a.a);
        a.d && (d.clearUnfilledSlots = a.d);
        c.O(b, d)
    } else 
        I(a.log, Nb("PubAds", "refresh"))
};
Z.prototype.isSlotAPersistentRoadblock = function(a) {
    try {
        var b = Y();
        if (b.b && Kd(V(), a))
            return b.a ? b.a.isSlotAPersistentRoadblock(a) : !1;
        I(this.log, Ob());
        return !1
    } catch (c) {
        R(408, c)
    }
};
var fe = function(a, b) {
    for (var c = a.getSlotIdMap(), d = [], f = 0; f < b.length; ++f) {
        var g = b[f];
        g in c ? d.push(c[g]) : H(a.log, Pb(), a)
    }
    return d
};
Z.prototype.getName = function() {
    return "companion_ads"
};
var de = function() {
    return ab() + "//pagead2.googlesyndication.com/pagead/show_companion_ad.js"
};
Z.prototype.onImplementationLoaded = function() {
    try {
        G(this.log, Sb("GPT CompanionAds"), this), this.k=!0
    } catch (a) {
        R(409, a)
    }
};
var ge = function(a, b) {
    var c = b && b.getSlotId().getId();
    if (c && c in a.i && b.hasWrapperDiv() && a.b&&!a.isSlotAPersistentRoadblock(b)) {
        b.h = a.i[c];
        var d = null;
        a.c.hasOwnProperty(c) && (d = a.c[c], delete a.c[c]);
        c = new id(b, !1, d, a.getName());
        return Hd(b, c)
    }
    return !1
};
Z.prototype.p = function(a) {
    ge(this, a)
};
Z.prototype.fillSlot = function(a, b, c, d) {
    try {
        return Kd(V(), a) && p(b) && 0 < b.length ? (this.i[a.getSlotId().getId()] = b, null != c && null != d && (this.c[a.getSlotId().getId()] = [c, d]), ge(this, a)) : !1
    } catch (f) {
        R(410, f)
    }
};
Z.prototype.slotRenderEnded = function(a, b, c) {
    try {
        var d = null;
        null != b && null != c && (d = [b, c]);
        var f = new id(a, !1, d, this.getName());
        jd(this, f)
    } catch (g) {
        R(411, g)
    }
};
x("companionAds", function() {
    try {
        var a = U(), b = vd(a, "companion_ads");
        if (!b) {
            var c = b = new Z;
            a.a[c.getName()] = c
        }
        return b
    } catch (d) {
        R(401, d)
    }
});
var $ = function() {
    t.call(this);
    this.a = {};
    this.c = {}
};
ha($);
e = $.prototype;
e.getName = function() {
    return "content"
};
e.set = function(a, b) {
    p(a) && 0 < a.length ? (this.a[a] = b, G(this.log, Hb(a, String(b), this.getName()), this, null)) : H(this.log, Ib(String(a), String(b), this.getName()), this, null);
    return this
};
e.get = function(a) {
    return this.a[a]
};
e.getAttributeKeys = function() {
    var a = [];
    v(this.a, function(b, c) {
        a.push(c)
    });
    return a
};
e.display = function(a, b, c, d) {
    this.enable();
    a = c ? W(a, b, c) : W(a, b);
    a.addService(this);
    d && a.setClickUrl(d);
    Ld(a.getSlotId().getDomId())
};
var he = function(a, b) {
    var c = b && b.getSlotId().getId();
    c in a.c && a.b && b.hasWrapperDiv()&&!b.g && (b.h = a.c[c], c = new id(b, !1, null, a.getName()), Hd(b, c))
};
$.prototype.A = function() {
    for (var a = this.getSlots(), b = 0; b < a.length; ++b)
        he(this, a[b])
};
$.prototype.p = function(a) {
    he(this, a)
};
$.prototype.setContent = function(a, b) {
    try {
        Kd(V(), a) && p(b) && 0 < b.length && (this.c[a.getSlotId().getId()] = b, he(this, a))
    } catch (c) {
        R(602, c)
    }
};
x("content", function() {
    try {
        var a = U(), b = vd(a, "content");
        if (!b) {
            var c = b = new $;
            a.a[c.getName()] = c
        }
        return b
    } catch (d) {
        R(601, d)
    }
});
var ie = function() {
    var a = window, b = document;
    if (w()._pubconsole_disable_)
        return !1;
    var c;
    c = document.cookie.split("google_pubconsole=");
    if (c = 2 == c.length ? c[1].split(";")[0] : "")
        if (c = c.split("|"), 0 < c.length && ("1" == c[0] || "0" == c[0]))
            return !0;
    U();
    c=!1;
    try {
        c = a.top.document.URL === b.URL
    } catch (d) {}
    a = c ? b.URL : b.referrer;
    return null !== Nd(a, "google_debug") || null !== Nd(a, "google_console") || null !== Nd(a, "google_force_console") || null !== Nd(a, "googfc")
}, je = function() {
    try {
        if (ie()) {
            var a = document, b = a.createElement("script");
            b.type = "text/javascript";
            b.src = ab() + "//publisherconsole.appspot.com/js/loader.js";
            b.async=!0;
            var c = a.getElementsByTagName("script")[0];
            c && c.parentNode && c.parentNode.insertBefore(b, c)
        }
    } catch (d) {
        R(2002, d)
    }
};
"complete" === document.readyState ? je() : Ha(window, je);
x("disablePublisherConsole", function() {
    try {
        w()._pubconsole_disable_=!0
    } catch (a) {
        R(2001, a)
    }
});
var ke = function() {
    this.a = [];
    this.c=!1;
    this.b = J()
};
ke.prototype.addSize = function(a, b) {
    try {
        var c;
        if (!(c=!xd(a))) {
            var d = b, f;
            if (!(f = xd(d))) {
                var g;
                if (n(d))
                    t: {
                    for (var l = d.length, r = p(d) ? d.split("") : d, d = 0; d < l; d++)
                        if (d in r&&!xd.call(void 0, r[d])) {
                            g=!1;
                            break t
                        }
                        g=!0
                } else 
                    g=!1;
                f = g
            }
            c=!f
        }
        if (c)
            return this.c=!0, H(this.b, P("SizeMappingBuilder.addSize", arguments)), this;
        this.a.push([a, b]);
        return this
    } catch (O) {
        R(1601, O)
    }
};
ke.prototype.build = function() {
    try {
        if (this.c)
            return H(this.b, Fb()), null;
        Ya(this.a);
        return this.a
    } catch (a) {
        R(1602, a)
    }
};
var Xa = function(a, b) {
    var c;
    t: {
        c = b[0];
        for (var d = a[0], f = Va, g = Math.min(c.length, d.length), l = 0; l < g; l++) {
            var r = f(c[l], d[l]);
            if (0 != r) {
                c = r;
                break t
            }
        }
        c = Va(c.length, d.length)
    }
    return c
};
x("sizeMapping", function() {
    try {
        return new ke
    } catch (a) {
        R(1603, a)
    }
});
var me = function() {
    var a = le;
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
function ne() {
    Oa(document.getElementsByTagName("script"), function(a) {
        var b = a.src;
        b && (0 <= b.indexOf("/tag/js/gpt.js") || 0 <= b.indexOf("/tag/js/gpt_mobile.js")) && a.innerHTML&&!a.googletag_executed && (a.googletag_executed=!0, eval(a.innerHTML))
    })
}
try {
    var oe = td(), pe = w().cmd;
    if (!pe || n(pe)) {
        var qe = w().cmd = new Oc;
        pe && 0 < pe.length && qe.push.apply(qe, pe)
    }
    ne();
    var re = A("#34#");
    if (Math.random() < re) {
        var se = document, te = se.createElement("iframe"), le;
        le = se ? se.parentWindow || se.defaultView : window;
        for (var ve = "//tpc.googlesyndication.com/safeframe/1-0-0/html/container.html", we, xe = le, ye = 0; xe != xe.parent;)
            ye++, xe = xe.parent;
        (we = ye) && (ve += "?n=" + we);
        te.src = (me() ? "https:" : "http:") + ve;
        te.style.visibility = "hidden";
        te.style.display = "none";
        var ze = se.getElementsByTagName("script");
        if (0 < ze.length) {
            var Ae = ze[ze.length - 1];
            Ae.parentNode && Ae.parentNode.insertBefore(te, Ae.nextSibling)
        }
    }
    oe.tick("gpt_load")
} catch (Be) {
    R(2801, Be)
};
})()

