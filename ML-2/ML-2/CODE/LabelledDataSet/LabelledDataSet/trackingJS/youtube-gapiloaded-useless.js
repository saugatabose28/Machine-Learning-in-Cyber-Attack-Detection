/* JS */
gapi.loaded_0(function(_) {
    var window = this;
    var oa, qa;
    _.q = function(a) {
        return function() {
            return _.aa[a].apply(this, arguments)
        }
    };
    var _DumpException = function(a) {
        throw a;
    };
    _.aa = [];
    _.ba = _.ba || {};
    _.r = this;
    _.ca = function(a) {
        return void 0 !== a
    };
    _.fa = function(a) {
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
};
_.ha = function(a) {
    return "array" == _.fa(a)
};
_.ja = function(a) {
    return "string" == typeof a
};
_.na = "closure_uid_" + (1E9 * Math.random()>>>0);
oa = function(a, b, c) {
    return a.call.apply(a.bind, arguments)
};
qa = function(a, b, c) {
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
};
_.s = function(a, b, c) {
    _.s = Function.prototype.bind&&-1 != Function.prototype.bind.toString().indexOf("native code") ? oa : qa;
    return _.s.apply(null, arguments)
};
_.ra = function(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
    }
};
_.sa = Date.now || function() {
    return + new Date
};
_.u = function(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.J = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.nu = function(a, c, f) {
        return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
    }
};
_.wa = window.gadgets || {};
_.ya = window.osapi = window.osapi || {};
_.google = window.google || {};
window.___jsl = window.___jsl || {};
(window.___jsl.cd = window.___jsl.cd || []).push({
    gwidget: {
        parsetags: "explicit"
    },
    appsapi: {
        plus_one_service: "/plus/v1"
    },
    client: {
        jsonpOverride: !1,
        rms: "migrated"
    },
    csi: {
        rate: .01
    },
    poshare: {
        hangoutContactPickerServer: "https://plus.google.com"
    },
    gappsutil: {
        required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
        display_on_page_ready: !1
    },
    appsutil: {
        required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
        display_on_page_ready: !1
    },
    "oauth-flow": {
        authUrl: "https://accounts.google.com/o/oauth2/auth",
        proxyUrl: "https://accounts.google.com/o/oauth2/postmessageRelay",
        redirectUri: "postmessage"
    },
    iframes: {
        sharebox: {
            params: {
                json: "&"
            },
            url: ":socialhost:/:session_prefix:_/sharebox/dialog"
        },
        plus: {
            url: ":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"
        },
        ":socialhost:": "https://apis.google.com",
        ":im_socialhost:": "https://plus.googleapis.com",
        domains_suggest: {
            url: "https://domains.google.com/suggest/flow"
        },
        card: {
            params: {
                s: "#",
                userid: "&"
            },
            url: ":socialhost:/:session_prefix:_/hovercard/internalcard"
        },
        ":signuphost:": "https://plus.google.com",
        ":gplus_url:": "https://plus.google.com",
        plusone: {
            url: ":socialhost:/:session_prefix:_/+1/fastbutton?usegapi=1"
        },
        plus_share: {
            url: ":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&usegapi=1"
        },
        plus_circle: {
            url: ":socialhost:/:session_prefix:_/widget/plus/circle?usegapi=1"
        },
        plus_followers: {
            url: ":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"
        },
        configurator: {
            url: ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"
        },
        appcirclepicker: {
            url: ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
        },
        page: {
            url: ":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"
        },
        person: {
            url: ":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"
        },
        community: {
            url: ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"
        },
        follow: {
            url: ":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"
        },
        commentcount: {
            url: ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"
        },
        comments: {
            url: ":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1"
        },
        youtube: {
            url: ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1"
        },
        reportabuse: {
            url: ":socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi=1"
        },
        additnow: {
            url: ":socialhost:/additnow/additnow.html"
        },
        ":source:": "1p"
    },
    poclient: {
        update_session: "google.updateSessionCallback"
    },
    "googleapis.config": {
        methods: {
            "pos.plusones.list": !0,
            "pos.plusones.get": !0,
            "pos.plusones.insert": !0,
            "pos.plusones.delete": !0,
            "pos.plusones.getSignupState": !0
        },
        requestCache: {
            enabled: !0
        },
        versions: {
            pos: "v1"
        },
        rpc: "/rpc",
        root: "https://content.googleapis.com",
        "root-1p": "https://clients6.google.com",
        sessionCache: {
            enabled: !0
        },
        transport: {
            isProxyShared: !0
        },
        xd3: "/static/proxy.html",
        developerKey: "AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ",
        auth: {
            useInterimAuth: !1
        }
    },
    report: {
        apis: ["iframes\\..*", "gadgets\\..*", "gapi\\.appcirclepicker\\..*", "gapi\\.client\\..*"],
        rate: 1E-4
    }
});

_.za = function(a, b) {
    return b
};
_.B = function(a, b) {
    var c = a.split("."), d = _.r;
    c[0]in d ||!d.execScript || d.execScript("var " + c[0]);
    for (var e; c.length && (e = c.shift());)
        !c.length && _.ca(b) ? d[e] = b : d[e] ? d = d[e] : d = d[e] = {}
};
_.C = function(a, b) {
    b = _.za(a, b);
    _.B(a, b)
};
_.Aa = window;
_.Ba = window.document;
_.Ea = _.Aa.location;
_.Ga = /\[native code\]/;
_.Ha = function(a, b, c) {
    return a[b] = a[b] || c
};
_.Ka = function() {
    var a;
    if ((a = Object.create) && _.Ga.test(a))
        a = a(null);
    else {
        a = {};
        for (var b in a)
            a[b] = void 0
    }
    return a
};
_.Ma = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
_.Na = function(a, b) {
    if (!a)
        throw Error(b || "");
};
_.Sa = _.Ha(_.Aa, "gapi", {});
_.Ua = function(a, b, c) {
    var d = new RegExp("([#].*&|[#])" + b + "=([^&#]*)", "g");
    b = new RegExp("([?#].*&|[?#])" + b + "=([^&#]*)", "g");
    if (a = a && (d.exec(a) || b.exec(a)))
        try {
            c = (0, window.decodeURIComponent)(a[2])
    } catch (e) {}
    return c
};
_.Wa = function(a, b, c) {
    _.Va(a, b, c, "add", "at")
};
_.Va = function(a, b, c, d, e) {
    if (a[d + "EventListener"])
        a[d + "EventListener"](b, c, !1);
    else if (a[e + "tachEvent"])
        a[e + "tachEvent"]("on" + b, c)
};
_.Ya = _.Ha(_.Aa, "___jsl", _.Ka());
_.Ha(_.Ya, "I", 0);
_.Ha(_.Ya, "hel", 10);
var Za, $a, ab, bb, cb, db;
Za = function(a) {
    var b = window.___jsl = window.___jsl || {};
    b[a] = b[a] || [];
    return b[a]
};
$a = function(a) {
    var b = window.___jsl = window.___jsl || {};
    b.cfg=!a && b.cfg || {};
    return b.cfg
};
ab = function(a) {
    return "object" === typeof a && /\[native code\]/.test(a.push)
};
bb = function(a, b) {
    if (b)
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] && b[c] && "object" === typeof a[c] && "object" === typeof b[c]&&!ab(a[c])&&!ab(b[c]) ? bb(a[c], b[c]) : b[c] && "object" === typeof b[c] ? (a[c] = ab(b[c]) ? [] : {}, bb(a[c], b[c])) : a[c] = b[c])
};
cb = function(a) {
    if (a&&!/^\s+$/.test(a)) {
        for (; 0 == a.charCodeAt(a.length - 1);)
            a = a.substring(0, a.length - 1);
        var b;
        try {
            b = window.JSON.parse(a)
        } catch (c) {}
        if ("object" === typeof b)
            return b;
        try {
            b = (new Function("return (" + a + "\n)"))()
        } catch (d) {}
        if ("object" === typeof b)
            return b;
        try {
            b = (new Function("return ({" + a + "\n})"))()
        } catch (e) {}
        return "object" === typeof b ? b : {}
    }
};
db = function(a) {
    $a(!0);
    var b = window.___gcfg, c = Za("cu");
    if (b && b !== window.___gu) {
        var d = {};
        bb(d, b);
        c.push(d);
        window.___gu = b
    }
    var b = Za("cu"), e = window.document.scripts || window.document.getElementsByTagName("script") || [], d = [], f = [];
    f.push.apply(f, Za("us"));
    for (var g = 0; g < e.length; ++g)
        for (var k = e[g], l = 0; l < f.length; ++l)
            k.src && 0 == k.src.indexOf(f[l]) && d.push(k);
    0 == d.length && 0 < e.length && e[e.length - 1].src && d.push(e[e.length - 1]);
    for (e = 0; e < d.length; ++e)
        d[e].getAttribute("gapi_processed") || (d[e].setAttribute("gapi_processed",
        !0), (f = d[e]) ? (g = f.nodeType, f = 3 == g || 4 == g ? f.nodeValue : f.textContent || f.innerText || f.innerHTML || "") : f = void 0, (f = cb(f)) && b.push(f));
    a && (d = {}, bb(d, a), c.push(d));
    d = Za("cd");
    a = 0;
    for (b = d.length; a < b; ++a)
        bb($a(), d[a]);
    d = Za("ci");
    a = 0;
    for (b = d.length; a < b; ++a)
        bb($a(), d[a]);
    a = 0;
    for (b = c.length; a < b; ++a)
        bb($a(), c[a])
};
_.E = function(a, b) {
    if (!a)
        return $a();
    for (var c = a.split("/"), d = $a(), e = 0, f = c.length; d && "object" === typeof d && e < f; ++e)
        d = d[c[e]];
    return e === c.length && void 0 !== d ? d : b
};
_.eb = function(a, b) {
    var c = a;
    if ("string" === typeof a) {
        for (var d = c = {}, e = a.split("/"), f = 0, g = e.length; f < g - 1; ++f)
            var k = {}, d = d[e[f]] = k;
        d[e[f]] = b
    }
    db(c)
};
var fb = function() {
    var a = window.__GOOGLEAPIS;
    a && (a.googleapis&&!a["googleapis.config"] && (a["googleapis.config"] = a.googleapis), _.Ha(_.Ya, "ci", []).push(a), window.__GOOGLEAPIS = void 0)
};
fb && fb();
db();
_.C("gapi.config.get", _.E);
_.C("gapi.config.update", _.eb);
var jb, lb, nb, ob, qb, rb, sb, ub, vb, wb, xb, zb, Db, Eb, Hb;
_.gb = function(a) {
    return !!a && "object" === typeof a && _.Ga.test(a.push)
};
_.hb = function(a, b, c) {
    if (a) {
        _.Na(_.gb(a), "arrayForEach was called with a non array value");
        for (var d = 0; d < a.length; d++)
            b.call(c, a[d], d)
    }
};
_.ib = function(a, b, c) {
    if (a)
        if (_.gb(a))
            _.hb(a, b, c);
        else {
            _.Na("object" === typeof a, "objectForEach was called with a non object value");
            c = c || a;
            for (var d in a)
                _.Ma(a, d) && void 0 !== a[d] && b.call(c, a[d], d)
        }
};
jb = function(a) {
    a = a.sort();
    for (var b = [], c = void 0, d = 0; d < a.length; d++) {
        var e = a[d];
        e != c && b.push(e);
        c = e
    }
    return b
};
lb = function() {
    var a = [], b = _.Ya.H;
    b && _.ib(b, function(b) {
        a.push.apply(a, b.L)
    });
    return jb(a)
};
_.mb = function(a) {
    if (_.Ga.test(Object.keys))
        return Object.keys(a);
    var b = [], c;
    for (c in a)
        _.Ma(a, c) && b.push(c);
    return b
};
ub = {};
vb = 0;
wb = _.Ka();
xb = _.Ka();
zb = function(a) {
    return "number" === typeof a && a > Math.random()
};
_.Ab = function(a) {
    if ("undefined" === typeof nb) {
        var b = _.E("report") || {}, c = b.rate;
        rb = b.timeout || 1E3;
        ob = b.host || "https://plus.google.com";
        qb = b.path || "/_/widget/report";
        nb = [];
        zb(c) && (nb = b.apis || []);
        var b = b.apiRate || {}, d;
        for (d in b)
            zb(b[d]) && nb.push(d)
    }
    for (d = 0; d < nb.length; ++d)
        if ((new RegExp("^" + nb[d] + "$")).test(a))
            return !0;
    return !1
};
Db = function(a) {
    delete ub[a]
};
Eb = function() {
    sb && (_.Aa.clearTimeout(sb), sb = 0);
    sb = _.Aa.setTimeout(function() {
        var a;
        a = window.document.location;
        a = a.protocol + "//" + a.host + a.pathname;
        var b = _.mb(xb).join(":");
        a = [ob, qb, "?api=", (0, window.encodeURIComponent)(b), "&url=", (0, window.encodeURIComponent)(a), "&loaded=", (0, window.encodeURIComponent)(lb().join(":"))].join("");
        xb = _.Ka();
        var b = new window.Image, c = vb++;
        ub[c] = b;
        b.onload = b.onerror = _.ra(Db, c);
        b.src = a;
        sb = 0
    }, rb)
};
_.Gb = function(a) {
    wb[a] || (xb[a]=!0, wb[a]=!0, Eb())
};
Hb = _.za;
_.za = function(a, b) {
    var c = Hb(a, b);
    "function" === typeof b && _.Ab(a) && (c = function(c) {
        _.Gb(a);
        return b.apply(this, arguments)
    });
    return c
};

_.Pi = window.googleapis && window.googleapis.server || {};
var Tb = {
    "\b": "\\b",
    "\t": "\\t",
    "\n": "\\n",
    "\f": "\\f",
    "\r": "\\r",
    '"': '\\"',
    "\\": "\\\\"
}, Ub = function(a) {
    var b, c, d;
    b = /[\"\\\x00-\x1f\x7f-\x9f]/g;
    if (void 0 !== a) {
        switch (typeof a) {
        case "string":
            return b.test(a) ? '"' + a.replace(b, function(a) {
                var b = Tb[a];
                if (b)
                    return b;
                b = a.charCodeAt();
                return "\\u00" + Math.floor(b / 16).toString(16) + (b%16).toString(16)
            }) + '"' : '"' + a + '"';
        case "number":
            return (0, window.isFinite)(a) ? String(a) : "null";
        case "boolean":
        case "null":
            return String(a);
        case "object":
            if (!a)
                return "null";
            b = [];
            if ("number" ===
            typeof a.length&&!a.propertyIsEnumerable("length")) {
                d = a.length;
                for (c = 0; c < d; c += 1)
                    b.push(Ub(a[c]) || "null");
                return "[" + b.join(",") + "]"
            }
            for (c in a)
                !/___$/.test(c) && _.Ma(a, c) && "string" === typeof c && (d = Ub(a[c])) && b.push(Ub(c) + ":" + d);
            return "{" + b.join(",") + "}"
        }
        return ""
    }
}, Vb = function(a) {
    if (!a)
        return !1;
    if (/^[\],:{}\s]*$/.test(a.replace(/\\["\\\/b-u]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
        try {
            return eval("(" + a + ")")
    } catch (b) {}
    return !1
}, Wb=!1, Zb;
try {
    Wb=!!window.JSON && '["a"]' === window.JSON.stringify(["a"]) && "a" === window.JSON.parse('["a"]')[0]
} catch (Xb) {}
Zb = function(a) {
    try {
        return window.JSON.parse(a)
    } catch (b) {
        return !1
    }
};
_.$b = Wb ? window.JSON.stringify : Ub;
_.ac = Wb ? Zb : Vb;

_.Cj = function() {
    var a = /\s*;\s*/;
    return {
        get: function(b, c) {
            for (var d = b + "=", e = (window.document.cookie || "").split(a), f = 0, g; g = e[f]; ++f)
                if (0 == g.indexOf(d))
                    return g.substr(d.length);
            return c
        }
    }
}();
_.Lb = function() {
    function a(a, b) {
        if (!(a < c) && d)
            if (2 === a && d.warn)
                d.warn(b);
            else if (3 === a && d.error)
                try {
                    d.error(b)
        } catch (g) {} else 
            d.log && d.log(b)
    }
    var b = function(b) {
        a(1, b)
    };
    _.Jb = function(b) {
        a(2, b)
    };
    _.Ib = function(b) {
        a(3, b)
    };
    _.Kb = function() {};
    b.INFO = 1;
    b.WARNING = 2;
    b.NONE = 4;
    var c = 1, d = window.console ? window.console: window.opera ? window.opera.postError: void 0;
    return b
}();

_.H = _.H || {};
_.H = _.H || {};
(function() {
    var a = [];
    _.H.sT = function(b) {
        a.push(b)
    };
    _.H.GT = function() {
        for (var b = 0, c = a.length; b < c; ++b)
            a[b]()
    }
})();
_.Mb = function(a) {
    for (var b = 0; b < this.length; b++)
        if (this[b] === a)
            return b;
    return - 1
};
_.Nb = function(a, b) {
    var c = _.Ha(_.Ya, "watt", _.Ka());
    _.Ha(c, a, b)
};
_.H = _.H || {};
(function() {
    var a = null;
    _.H.Fb = function(b) {
        var c = "undefined" === typeof b;
        if (null !== a && c)
            return a;
        var d = {};
        b = b || window.location.href;
        var e = b.indexOf("?"), f = b.indexOf("#");
        b = ( - 1 === f ? b.substr(e + 1) : [b.substr(e + 1, f - e - 1), "&", b.substr(f + 1)].join("")).split("&");
        for (var e = window.decodeURIComponent ? window.decodeURIComponent : window.unescape, f = 0, g = b.length; f < g; ++f) {
            var k = b[f].indexOf("=");
            if ( - 1 !== k) {
                var l = b[f].substring(0, k), k = b[f].substring(k + 1), k = k.replace(/\+/g, " ");
                try {
                    d[l] = e(k)
                } catch (m) {}
            }
        }
        c && (a = d);
        return d
    };
    _.H.Fb()
})();
_.C("gadgets.util.getUrlParameters", _.H.Fb);
_.Ob = window.console;
_.Qb = function(a) {
    _.Ob && _.Ob.log && _.Ob.log(a)
};
_.Rb = function() {};
_.Sb = function() {
    var a = window.gadgets && window.gadgets.config && window.gadgets.config.get;
    a && _.eb(a());
    return {
        register: function(a, c, d) {
            d && d(_.E())
        },
        get: function(a) {
            return _.E(a)
        },
        update: function(a, c) {
            if (c)
                throw "Config replacement is not supported";
            _.eb(a)
        },
        gb: function() {}
    }
}();
_.C("gadgets.config.register", _.Sb.register);
_.C("gadgets.config.get", _.Sb.get);
_.C("gadgets.config.init", _.Sb.gb);
_.C("gadgets.config.update", _.Sb.update);
_.C("gadgets.json.stringify", _.$b);
_.C("gadgets.json.parse", _.ac);
_.Ua(_.Aa.location.href, "rpctoken") && _.Wa(_.Ba, "unload", function() {});
var bc, ec;
bc = function() {
    var a = _.Ba.readyState;
    return "complete" === a || "interactive" === a&&-1 == window.navigator.userAgent.indexOf("MSIE")
};
_.cc = function(a) {
    if (bc())
        a();
    else {
        var b=!1, c = function() {
            if (!b)
                return b=!0, a.apply(this, arguments)
        };
        _.Aa.addEventListener ? (_.Aa.addEventListener("load", c, !1), _.Aa.addEventListener("DOMContentLoaded", c, !1)) : _.Aa.attachEvent && (_.Aa.attachEvent("onreadystatechange", function() {
            bc() && c.apply(this, arguments)
        }), _.Aa.attachEvent("onload", c))
    }
};
_.dc = function(a, b) {
    if (!bc())
        try {
            a()
    } catch (c) {}
    _.cc(b)
};
ec = ec || {};
ec.Py = null;
ec.Ax = null;
ec.Gm = null;
ec.frameElement = null;
ec = ec || {};
ec.Hs || (ec.Hs = function() {
    function a(a) {
        "undefined" != typeof window.addEventListener ? window.addEventListener("message", a, !1) : "undefined" != typeof window.attachEvent && window.attachEvent("onmessage", a);
        window.___jsl = window.___jsl || {};
        var b = window.___jsl;
        b.RPMQ = b.RPMQ || [];
        b.RPMQ.push(a)
    }
    function b(a) {
        var b = (0, _.ac)(a.data);
        if (b && b.f) {
            (0, _.Kb)("gadgets.rpc.receive(" + window.name + "): " + a.data);
            var d = _.J.Of(b.f);
            e && ("undefined" !== typeof a.origin ? a.origin !== d : a.domain !== /^.+:\/\/([^:]+).*/.exec(d)[1]) ? _.Ib("Invalid rpc message origin. " +
            d + " vs " + (a.origin || "")) : c(b, a.origin)
        }
    }
    var c, d, e=!0;
    return {
        Mp: function() {
            return "wpm"
        },
        A: function() {
            return !0
        },
        gb: function(f, g) {
            _.Sb.register("rpc", null, function(a) {
                "true" === String((a && a.rpc || {}).disableForceSecure) && (e=!1)
            });
            c = f;
            d = g;
            a(b);
            d("..", !0);
            return !0
        },
        pb: function(a) {
            d(a, !0);
            return !0
        },
        call: function(a, b, c) {
            var d = _.J.Of(a), e = _.J.du(a);
            d ? window.setTimeout(function() {
                var a = (0, _.$b)(c);
                (0, _.Kb)("gadgets.rpc.send(" + window.name + "): " + a);
                e.postMessage(a, d)
            }, 0) : ".." != a && _.Ib("No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message");
            return !0
        }
    }
}());
ec = ec || {};
ec.Tl || (ec.Tl = function() {
    function a(a, b) {
        G[b] = G[b] || function() {
            a.apply({}, arguments)
        }
    }
    function b() {
        if (null === v && window.document.body && l) {
            var a = l + "?cb=" + Math.random() + "&origin=" + z + "&jsl=1", c = window.document.createElement("div");
            c.style.height = "1px";
            c.style.width = "1px";
            a = '<object height="1" width="1" id="___xpcswf" type="application/x-shockwave-flash"><param name="allowScriptAccess" value="always"></param><param name="movie" value="' + a + '"></param><embed type="application/x-shockwave-flash" allowScriptAccess="always" src="' + a +
            '" height="1" width="1"></embed></object>';
            window.document.body.appendChild(c);
            c.innerHTML = a;
            v = c.firstChild
        }
        ++w;
        null !== t && (null !== v || 50 <= w) ? window.clearTimeout(t) : t = window.setTimeout(b, 100)
    }
    function c() {
        A[".."] || (k(".."), y++, 50 <= y && null !== D ? (window.clearTimeout(D), D = null) : D = window.setTimeout(c, 100))
    }
    function d() {
        if (null !== v && v.setup)
            for (; 0 < x.length;) {
                var a = x.shift(), b = a.VJ;
                v.setup(a.Si, ".." === b ? _.J.qo : b, ".." === b ? "INNER" : "OUTER")
            }
        null !== t && window.clearTimeout(t);
        t = null
    }
    function e() {
        A[".."] || null !==
        D || (D = window.setTimeout(c, 100))
    }
    function f(a, b, c) {
        b = _.J.Of(a);
        var d = _.J.Ag(a);
        v["sendMessage_" + (".." === a ? _.J.qo : a) + "_" + d + "_" + (".." === a ? "INNER" : "OUTER")].call(v, (0, _.$b)(c), b);
        return !0
    }
    function g(a, b) {
        var c = (0, _.ac)(a), d = c._scr;
        d ? (p(d, !0), A[d]=!0, ".." !== d && k(d, !0)) : window.setTimeout(function() {
            n(c, b)
        }, 0)
    }
    function k(a, b) {
        var c = _.J.qo, d = {};
        d._scr = b ? ".." : c;
        d._pnt = c;
        f(a, 0, d)
    }
    var l = null, m=!1, n = null, p = null, v = null, x = [], t = null, w = 0, y = 0, D = null, A = {}, z = window.location.protocol + "//" + window.location.host, G;
    window.___jsl =
    window.___jsl || {};
    G = window.___jsl._fm = {};
    _.Sb.register("rpc", null, function(a) {
        m && (l = a && a.rpc && a.rpc.commSwf || "//xpc.googleusercontent.com/gadgets/xpc.swf")
    });
    a(d, "ready");
    a(e, "setupDone");
    a(g, "receiveMessage");
    return {
        Mp: function() {
            return "flash"
        },
        A: function() {
            return !0
        },
        gb: function(a, b) {
            n = a;
            p = b;
            return m=!0
        },
        pb: function(a, c) {
            x.push({
                Si: c,
                VJ: a
            });
            null === v && null === t && (t = window.setTimeout(b, 100));
            return !0
        },
        call: f,
        bD: g,
        D: d,
        G: e
    }
}());
if (window.gadgets && window.gadgets.rpc)
    "undefined" != typeof _.J && _.J || (_.J = window.gadgets.rpc, _.J.config = _.J.config, _.J.register = _.J.register, _.J.uh = _.J.unregister, _.J.Ey = _.J.registerDefault, _.J.fA = _.J.unregisterDefault, _.J.hv = _.J.forceParentVerifiable, _.J.call = _.J.call, _.J.Rj = _.J.getRelayUrl, _.J.Ze = _.J.setRelayUrl, _.J.xn = _.J.setAuthToken, _.J.Dk = _.J.setupReceiver, _.J.Ag = _.J.getAuthToken, _.J.Dr = _.J.removeReceiver, _.J.Iv = _.J.getRelayChannel, _.J.qn = _.J.receive, _.J.Ay = _.J.receiveSameDomain, _.J.Ba = _.J.getOrigin,
    _.J.Of = _.J.getTargetOrigin, _.J.du = _.J._getTargetWin, _.J.aD = _.J._parseSiblingId);
else {
    _.J = function() {
        function a(a, b) {
            if (!Z[a]) {
                var c = ta;
                b || (c = pa);
                Z[a] = c;
                for (var d = $[a] || [], e = 0; e < d.length; ++e) {
                    var f = d[e];
                    f.t = A[a];
                    c.call(a, f.f, f)
                }
                $[a] = []
            }
        }
        function b() {
            function a() {
                Ta=!0
            }
            la || ("undefined" != typeof window.addEventListener ? window.addEventListener("unload", a, !1) : "undefined" != typeof window.attachEvent && window.attachEvent("onunload", a), la=!0)
        }
        function c(a, c, d, e, f) {
            A[c] && A[c] === d || (_.Ib("Invalid gadgets.rpc token. " +
            A[c] + " vs " + d), La(c, 2));
            f.onunload = function() {
                I[c]&&!Ta && (La(c, 1), _.J.Dr(c))
            };
            b();
            e = (0, _.ac)((0, window.decodeURIComponent)(e))
        }
        function d(b, c) {
            if (b && "string" === typeof b.s && "string" === typeof b.f && b.a instanceof Array)
                if (A[b.f] && A[b.f] !== b.t && (_.Ib("Invalid gadgets.rpc token. " + A[b.f] + " vs " + b.t), La(b.f, 2)), "__ack" === b.s)
                    window.setTimeout(function() {
                        a(b.f, !0)
                    }, 0);
                else {
                    b.c && (b.callback = function(a) {
                        _.J.call(b.f, (b.g ? "legacy__" : "") + "__cb", null, b.c, a)
                    });
                    if (c) {
                        var d = e(c);
                        b.origin = c;
                        var f = b.r, g;
                        try {
                            g = e(f)
                        } catch (k) {}
                        f &&
                        g == d || (f = c);
                        b.referer = f
                    }
                    d = (w[b.s] || w[""]).apply(b, b.a);
                    b.c && "undefined" !== typeof d && _.J.call(b.f, "__cb", null, b.c, d)
                }
            }
        function e(a) {
            if (!a)
                return "";
            a = a.split("#")[0].split("?")[0];
            a = a.toLowerCase();
            0 == a.indexOf("//") && (a = window.location.protocol + a);
            - 1 == a.indexOf("://") && (a = window.location.protocol + "//" + a);
            var b = a.substring(a.indexOf("://") + 3), c = b.indexOf("/");
            - 1 != c && (b = b.substring(0, c));
            a = a.substring(0, a.indexOf("://"));
            if ("http" !== a && "https" !== a && "chrome-extension" !== a && "file" !== a)
                throw Error("b");
            var c = "", d = b.indexOf(":");
            if ( - 1 != d) {
                var e = b.substring(d + 1), b = b.substring(0, d);
                if ("http" === a && "80" !== e || "https" === a && "443" !== e)
                    c = ":" + e
            }
            return a + "://" + b + c
        }
        function f(a) {
            if ("/" == a.charAt(0)) {
                var b = a.indexOf("|");
                return {
                    id: 0 < b ? a.substring(1, b): a.substring(1),
                    origin: 0 < b ? a.substring(b + 1): null
                }
            }
            return null
        }
        function g(a) {
            if ("undefined" === typeof a || ".." === a)
                return window.parent;
            var b = f(a);
            if (b)
                return window.top.frames[b.id];
            a = String(a);
            return (b = window.frames[a]) ? b : (b = window.document.getElementById(a)) && b.contentWindow ?
            b.contentWindow : null
        }
        function k(a, b) {
            if (!0 !== I[a]) {
                "undefined" === typeof I[a] && (I[a] = 0);
                var c = g(a);
                ".." !== a && null == c ||!0 !== ta.pb(a, b)?!0 !== I[a] && 10 > I[a]++?window.setTimeout(function() {
                    k(a, b)
                }, 500) : (Z[a] = pa, I[a]=!0) : I[a]=!0
            }
        }
        function l(a) {
            (a = y[a]) && "/" === a.substring(0, 1) && (a = "/" === a.substring(1, 2) ? window.document.location.protocol + a : window.document.location.protocol + "//" + window.document.location.host + a);
            return a
        }
        function m(a, b, c) {
            b&&!/http(s)?:\/\/.+/.test(b) && (0 == b.indexOf("//") ? b = window.location.protocol +
            b : "/" == b.charAt(0) ? b = window.location.protocol + "//" + window.location.host + b : - 1 == b.indexOf("://") && (b = window.location.protocol + "//" + b));
            y[a] = b;
            "undefined" !== typeof c && (D[a]=!!c)
        }
        function n(a, b) {
            b = b || "";
            A[a] = String(b);
            k(a, b)
        }
        function p(a) {
            a = (a.passReferrer || "").split(":", 2);
            V = a[0] || "none";
            xa = a[1] || "origin"
        }
        function v(b) {
            "true" === String(b.useLegacyProtocol) && (ta = ec.Gm || pa, ta.gb(d, a))
        }
        function x(a, b) {
            function c(d) {
                d = d && d.rpc || {};
                p(d);
                var f = d.parentRelayUrl || "", f = e(U.parent || b) + f;
                m("..", f, "true" === String(d.useLegacyProtocol));
                v(d);
                n("..", a)
            }
            !U.parent && b ? c({}) : _.Sb.register("rpc", null, c)
        }
        function t(a, b, c) {
            if (".." === a)
                x(c || U.rpctoken || U.ifpctok || "", b);
            else 
                t: {
                var d = null;
                if ("/" != a.charAt(0)) {
                    if (!_.H)
                        break t;
                        d = window.document.getElementById(a);
                        if (!d)
                            throw Error("c`" + a);
                }
                d = d && d.src;
                b = b || _.J.Ba(d);
                m(a, b);
                b = _.H.Fb(d);
                n(a, c || b.rpctoken)
            }
        }
        var w = {}, y = {}, D = {}, A = {}, z = 0, G = {}, I = {}, U = {}, Z = {}, $ = {}, V = null, xa = null, P = window.top !== window.self, ma = window.name, La = function() {}, X = window.console, ea = X && X.log && function(a) {
            X.log(a)
        }
        || function() {},
        pa = function() {
            function a(b) {
                return function() {
                    ea(b + ": call ignored")
                }
            }
            return {
                getCode: function() {
                    return "noop"
                },
                isParentVerifiable: function() {
                    return !0
                },
                init: a("init"),
                setup: a("setup"),
                call: a("call")
            }
        }();
        _.H && (U = _.H.Fb());
        var Ta=!1, la=!1, ta = function() {
            if ("flash" == U.rpctx)
                return ec.Tl;
            if ("rmr" == U.rpctx)
                return ec.Py;
            var a = "function" === typeof window.postMessage ? ec.Hs: "object" === typeof window.postMessage ? ec.Hs: window.ActiveXObject ? ec.Tl ? ec.Tl: ec.Ax ? ec.Ax: ec.Gm: 0 < window.navigator.userAgent.indexOf("WebKit") ?
            ec.Py: "Gecko" === window.navigator.product ? ec.frameElement: ec.Gm;
            a || (a = pa);
            return a
        }();
        w[""] = function() {
            ea("Unknown RPC service: " + this.s)
        };
        w.__cb = function(a, b) {
            var c = G[a];
            c && (delete G[a], c.call(this, b))
        };
        return {
            config: function(a) {
                "function" === typeof a.Wy && (La = a.Wy)
            },
            register: function(a, b) {
                if ("__cb" === a || "__ack" === a)
                    throw Error("d");
                if ("" === a)
                    throw Error("e");
                w[a] = b
            },
            uh: function(a) {
                if ("__cb" === a || "__ack" === a)
                    throw Error("f");
                if ("" === a)
                    throw Error("g");
                delete w[a]
            },
            Ey: function(a) {
                w[""] = a
            },
            fA: function() {
                delete w[""]
            },
            hv: function() {},
            call: function(a, b, c, d) {
                a = a || "..";
                var e = "..";
                ".." === a ? e = ma : "/" == a.charAt(0) && (e = _.J.Ba(window.location.href), e = "/" + ma + (e ? "|" + e : ""));
                ++z;
                c && (G[z] = c);
                var g = {
                    s: b,
                    f: e,
                    c: c ? z: 0,
                    a: Array.prototype.slice.call(arguments, 3),
                    t: A[a],
                    l: !!D[a]
                }, k;
                t: if ("bidir" === V || "c2p" === V && ".." === a || "p2c" === V && ".." !== a) {
                    k = window.location.href;
                    var l = "?";
                    if ("query" === xa)
                        l = "#";
                    else if ("hash" === xa)
                        break t;
                    l = k.lastIndexOf(l);
                    l =- 1 === l ? k.length : l;
                    k = k.substring(0, l)
                } else 
                    k = null;
                k && (g.r = k);
                if (".." === a || null != f(a) || window.document.getElementById(a))(k =
                Z[a]) || null === f(a) || (k = ta), 0 === b.indexOf("legacy__") && (k = ta, g.s = b.substring(8), g.c = g.c ? g.c : z), g.g=!0, g.r = e, k ? (D[a] && (k = ec.Gm), !1 === k.call(a, e, g) && (Z[a] = pa, ta.call(a, e, g))): $[a] ? $[a].push(g): $[a] = [g]
            }, Rj: l, Ze : m, xn : n, Dk : t, Ag : function(a) {
                return A[a]
            }, Dr: function(a) {
                delete y[a];
                delete D[a];
                delete A[a];
                delete I[a];
                delete Z[a]
            }, Iv: function() {
                return ta.Mp()
            }, qn: function(a, b) {
                4 < a.length ? ta.bD(a, d) : c.apply(null, a.concat(b))
            }, Ay: function(a) {
                a.a = Array.prototype.slice.call(a.a);
                window.setTimeout(function() {
                    d(a)
                },
                0)
            }, Ba: e, Of : function(a) {
                var b = null, c = l(a);
                c ? b = c : (c = f(a)) ? b = c.origin : b = ".." == a ? U.parent : window.document.getElementById(a).src;
                return e(b)
            }, gb: function() {
                !1 === ta.gb(d, a) && (ta = pa);
                P ? t("..") : _.Sb.register("rpc", null, function(a) {
                    a = a.rpc || {};
                    p(a);
                    v(a)
                })
            }, du: g, aD : f, A : "__ack", qo : ma || "..", D : 0, C : 1, B : 2
        }
    }();
    _.J.gb()
};
_.J.config({
    Wy: function(a) {
        throw Error("h`" + a);
    }
});
_.Kb = _.Rb;
_.C("gadgets.rpc.config", _.J.config);
_.C("gadgets.rpc.register", _.J.register);
_.C("gadgets.rpc.unregister", _.J.uh);
_.C("gadgets.rpc.registerDefault", _.J.Ey);
_.C("gadgets.rpc.unregisterDefault", _.J.fA);
_.C("gadgets.rpc.forceParentVerifiable", _.J.hv);
_.C("gadgets.rpc.call", _.J.call);
_.C("gadgets.rpc.getRelayUrl", _.J.Rj);
_.C("gadgets.rpc.setRelayUrl", _.J.Ze);
_.C("gadgets.rpc.setAuthToken", _.J.xn);
_.C("gadgets.rpc.setupReceiver", _.J.Dk);
_.C("gadgets.rpc.getAuthToken", _.J.Ag);
_.C("gadgets.rpc.removeReceiver", _.J.Dr);
_.C("gadgets.rpc.getRelayChannel", _.J.Iv);
_.C("gadgets.rpc.receive", _.J.qn);
_.C("gadgets.rpc.receiveSameDomain", _.J.Ay);
_.C("gadgets.rpc.getOrigin", _.J.Ba);
_.C("gadgets.rpc.getTargetOrigin", _.J.Of);

_.K = {};
_.Pc = {};
window.iframer = _.Pc;
var Rc;
_.Qc = function(a) {
    var b = _.fa(a);
    return "array" == b || "object" == b && "number" == typeof a.length
};
Rc = 0;
_.Sc = function(a) {
    return a[_.na] || (a[_.na]=++Rc)
};
_.Tc = function(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
};
_.Uc = function(a) {
    return "function" == _.fa(a)
};
_.Vc = function(a) {
    return "number" == typeof a
};
_.Wc = function(a, b) {
    return 0 == a.lastIndexOf(b, 0)
};
_.Xc = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};
_.Yc = function(a, b) {
    return Array(b + 1).join(a)
};
_.Zc = 2147483648 * Math.random() | 0;
_.$c = function(a) {
    return String(a).replace(/\-([a-z])/g, function(a, c) {
        return c.toUpperCase()
    })
};
_.ad = Array.prototype;
_.bd = _.ad.indexOf ? function(a, b, c) {
    return _.ad.indexOf.call(a, b, c)
} : function(a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (_.ja(a))
        return _.ja(b) && 1 == b.length ? a.indexOf(b, c) : - 1;
    for (; c < a.length; c++)
        if (c in a && a[c] === b)
            return c;
    return - 1
};
_.cd = _.ad.lastIndexOf ? function(a, b, c) {
    return _.ad.lastIndexOf.call(a, b, null == c ? a.length - 1 : c)
} : function(a, b, c) {
    c = null == c ? a.length - 1 : c;
    0 > c && (c = Math.max(0, a.length + c));
    if (_.ja(a))
        return _.ja(b) && 1 == b.length ? a.lastIndexOf(b, c) : - 1;
    for (; 0 <= c; c--)
        if (c in a && a[c] === b)
            return c;
    return - 1
};
_.dd = _.ad.forEach ? function(a, b, c) {
    _.ad.forEach.call(a, b, c)
} : function(a, b, c) {
    for (var d = a.length, e = _.ja(a) ? a.split("") : a, f = 0; f < d; f++)
        f in e && b.call(c, e[f], f, a)
};
_.ed = _.ad.filter ? function(a, b, c) {
    return _.ad.filter.call(a, b, c)
} : function(a, b, c) {
    for (var d = a.length, e = [], f = 0, g = _.ja(a) ? a.split("") : a, k = 0; k < d; k++)
        if (k in g) {
            var l = g[k];
            b.call(c, l, k, a) && (e[f++] = l)
        }
    return e
};
_.fd = _.ad.map ? function(a, b, c) {
    return _.ad.map.call(a, b, c)
} : function(a, b, c) {
    for (var d = a.length, e = Array(d), f = _.ja(a) ? a.split("") : a, g = 0; g < d; g++)
        g in f && (e[g] = b.call(c, f[g], g, a));
    return e
};
_.gd = _.ad.some ? function(a, b, c) {
    return _.ad.some.call(a, b, c)
} : function(a, b, c) {
    for (var d = a.length, e = _.ja(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && b.call(c, e[f], f, a))
            return !0;
    return !1
};
_.hd = _.ad.every ? function(a, b, c) {
    return _.ad.every.call(a, b, c)
} : function(a, b, c) {
    for (var d = a.length, e = _.ja(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e&&!b.call(c, e[f], f, a))
            return !1;
    return !0
};
_.id = function(a, b) {
    return 0 <= (0, _.bd)(a, b)
};
_.jd = function(a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c], e;
        if (_.ha(d) || (e = _.Qc(d)) && Object.prototype.hasOwnProperty.call(d, "callee"))
            a.push.apply(a, d);
        else if (e)
            for (var f = a.length, g = d.length, k = 0; k < g; k++)
                a[f + k] = d[k];
        else 
            a.push(d)
    }
};

var ld, md, nd, od, qd, rd, sd;
_.L = function(a, b) {
    return _.aa[a] = b
};
_.kd = function(a, b) {
    return - 1 != a.indexOf(b)
};
ld = /[\x00&<>"']/;
md = /\x00/g;
nd = /'/g;
od = /"/g;
qd = />/g;
rd = /</g;
sd = /&/g;
_.td = function(a) {
    if (!ld.test(a))
        return a;
    - 1 != a.indexOf("&") && (a = a.replace(sd, "&amp;"));
    - 1 != a.indexOf("<") && (a = a.replace(rd, "&lt;"));
    - 1 != a.indexOf(">") && (a = a.replace(qd, "&gt;"));
    - 1 != a.indexOf('"') && (a = a.replace(od, "&quot;"));
    - 1 != a.indexOf("'") && (a = a.replace(nd, "&#39;"));
    - 1 != a.indexOf("\x00") && (a = a.replace(md, "&#0;"));
    return a
};
_.ud = function(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = a[d];
    return b
};
_.vd = function(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = d;
    return b
};
_.wd = function(a, b) {
    for (var c in a)
        if (a[c] == b)
            return !0;
    return !1
};
_.xd = function(a) {
    var b = arguments.length;
    if (1 == b && _.ha(arguments[0]))
        return _.xd.apply(null, arguments[0]);
    for (var c = {}, d = 0; d < b; d++)
        c[arguments[d]]=!0;
    return c
};
t:
{
    var zd = _.r.navigator;
    if (zd) {
        var Ad = zd.userAgent;
        if (Ad) {
            _.yd = Ad;
            break t
        }
    }
    _.yd = ""
}
_.Bd = function(a) {
    return _.kd(_.yd, a)
};
_.Cd = function() {
    return _.Bd("Trident") || _.Bd("MSIE")
};
var Fd, Hd;
_.Dd = function() {};
_.Ed = function() {
    return _.Bd("Opera") || _.Bd("OPR")
};
Fd = function(a, b) {
    return a < b?-1 : a > b ? 1 : 0
};
_.Gd = function(a, b, c) {
    return 2 >= arguments.length ? _.ad.slice.call(a, b) : _.ad.slice.call(a, b, c)
};
Hd = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
_.Id = function(a, b) {
    for (var c = 0, d = (0, _.Xc)(String(a)).split("."), e = (0, _.Xc)(String(b)).split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
        var k = d[g] || "", l = e[g] || "", m = RegExp("(\\d*)(\\D*)", "g"), n = RegExp("(\\d*)(\\D*)", "g");
        do {
            var p = m.exec(k) || ["", "", ""], v = n.exec(l) || ["", "", ""];
            if (0 == p[0].length && 0 == v[0].length)
                break;
            c = Fd(0 == p[1].length ? 0 : (0, window.parseInt)(p[1], 10), 0 == v[1].length ? 0 : (0, window.parseInt)(v[1], 10)) || Fd(0 == p[2].length, 0 == v[2].length) || Fd(p[2], v[2])
        }
        while (0 == c)
        }
    return c
};
_.Jd = function(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)
            a[c] = d[c];
        for (var f = 0; f < Hd.length; f++)
            c = Hd[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};
_.Kd = function(a, b, c) {
    for (var d in a)
        b.call(c, a[d], d, a)
};
_.Ld = function(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)
            c[d] = a[d];
        return c
    }
    return []
};
var Wd, Xd, Zd, ae, ge, ke;
_.Sd = _.Ed();
_.M = _.Cd();
_.Td = _.Bd("Gecko")&&!_.kd(_.yd.toLowerCase(), "webkit")&&!(_.Bd("Trident") || _.Bd("MSIE"));
_.Ud = _.kd(_.yd.toLowerCase(), "webkit");
_.Vd = _.Ud && _.Bd("Mobile");
Wd = _.r.navigator || null;
Xd = Wd && Wd.platform || "";
_.Md = _.kd(Xd, "Mac");
_.Nd = _.kd(Xd, "Win");
_.Od = _.kd(Xd, "Linux");
var Yd = _.yd;
_.Pd=!!Yd && _.kd(Yd, "Android");
_.Qd=!!Yd && _.kd(Yd, "iPhone");
_.Rd=!!Yd && _.kd(Yd, "iPad");
Zd = _.r.navigator || null;
_.$d=!!Zd && _.kd(Zd.appVersion || "", "X11");
ae = function() {
    var a = _.r.document;
    return a ? a.documentMode : void 0
};
_.be = function() {
    var a = "", b;
    if (_.Sd && _.r.opera)
        return a = _.r.opera.version, _.Uc(a) ? a() : a;
    _.Td ? b = /rv\:([^\);]+)(\)|;)/ : _.M ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : _.Ud && (b = /WebKit\/(\S+)/);
    b && (a = (a = b.exec(_.yd)) ? a[1] : "");
    return _.M && (b = ae(), b > (0, window.parseFloat)(a)) ? String(b) : a
}();
ge = {};
_.he = function(a) {
    return ge[a] || (ge[a] = 0 <= _.Id(_.be, a))
};
_.je = function(a) {
    return _.M && _.ie >= a
};
ke = _.r.document;
_.ie = ke && _.M ? ae() || ("CSS1Compat" == ke.compatMode ? (0, window.parseInt)(_.be, 10) : 5) : void 0;

var dh, fh, gh;
_.bh = function(a) {
    return /^[\s\xa0]*$/.test(a)
};
_.ch = function(a) {
    return _.bh(null == a ? "" : String(a))
};
dh = function(a) {
    return Array.prototype.join.call(arguments, "")
};
_.eh = function(a, b) {
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) == c
};
fh = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
_.hh = function(a) {
    if (gh) {
        gh=!1;
        var b = _.r.location;
        if (b) {
            var c = b.href;
            if (c && (c = (c = _.hh(c)[3] || null) ? (0, window.decodeURI)(c) : c) && c != b.hostname)
                throw gh=!0, Error();
        }
    }
    return a.match(fh)
};
gh = _.Ud;
_.ih = function(a) {
    if (a[1]) {
        var b = a[0], c = b.indexOf("#");
        0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
        c = b.indexOf("?");
        0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0)
    }
    return a.join("")
};
_.jh = function(a, b, c) {
    if (_.ha(b))
        for (var d = 0; d < b.length; d++)
            _.jh(a, String(b[d]), c);
    else 
        null != b && c.push("&", a, "" === b ? "" : "=", (0, window.encodeURIComponent)(String(b)))
};
_.kh = function(a, b) {
    for (var c in b)
        _.jh(c, b[c], a);
    return a
};
_.lh = function(a, b) {
    _.eh(a, "/") && (a = a.substr(0, a.length - 1));
    _.Wc(b, "/") && (b = b.substr(1));
    return dh(a, "/", b)
};

var gk;
_.ek = function(a) {
    if (!_.Qc(a))
        return null;
    for (var b = {}, c = 0; c < a.length; c++)
        b[a[c]] = a[c];
    return b
};
_.fk = function(a, b) {
    var c = a.length;
    if (c != b.length)
        return !1;
    for (var d = 0; d < c; ++d) {
        var e = a.charCodeAt(d), f = b.charCodeAt(d);
        65 <= e && 90 >= e && (e += 32);
        65 <= f && 90 >= f && (f += 32);
        if (e != f)
            return !1
    }
    return !0
};
gk = null;
_.hk = function(a) {
    if (null === gk) {
        var b = _.E("client/headers/response");
        b || (b = _.E("googleapis/headers/response"));
        gk = _.ek(b)
    }
    if (null != gk) {
        if (gk.hasOwnProperty(a))
            return !0;
        for (var c in gk)
            if (gk.hasOwnProperty(c) && _.fk(c, a))
                return !0
    }
    return !1
};
_.ik = function(a) {
    a = String(a || "").split("\x00").join("");
    for (var b = [], c = 0, d = a.length; c < d; ++c) {
        var e = a.charAt(c), f = a.charCodeAt(c);
        if (55296 <= f && 56319 >= f && c + 1 < d) {
            var g = a.charAt(c + 1), k = a.charCodeAt(c + 1);
            56320 <= k && 57343 >= k && (e += g, f = 65536 + (f - 55296<<10) + (k - 56320), ++c)
        }
        if (!(0 <= f && 1114109 >= f) || 55296 <= f && 57343 >= f || 64976 <= f && 65007 >= f || 65534 == (f & 65534))
            f = 65533, e = String.fromCharCode(f);
        g=!(32 <= f && 126 >= f) || " " == e || ":" == e || "\\" == e;
        "%" == e && (c + 2 >= d ? g=!0 : (k = 16 * (0, window.parseInt)(a.charAt(c + 1), 16) + (0, window.parseInt)(a.charAt(c +
        2), 16), 0 <= k && 255 >= k ? (f = k, e = 0 == f ? "" : "%" + (256 + k).toString(16).toUpperCase().substr(1), c += 2) : g=!0));
        g && (e = (0, window.encodeURIComponent)(e), 1 >= e.length && (0 <= f && 127 >= f ? e = "%" + (256 + f).toString(16).toUpperCase().substr(1) : (f = 65533, e = (0, window.encodeURIComponent)(String.fromCharCode(f)))));
        b.push(e)
    }
    a = b.join("");
    a = a.split("#")[0];
    a = a.split("?");
    b = a[0].split("/");
    e = [];
    c = 0;
    for (d = b.length; c < d; ++c)
        f = b[c], g = f.split("%2E").join("."), g = g.split((0, window.encodeURIComponent)("\uff0e")).join("."), "." == g ? c + 1 == d && e.push("") :
        ".." == g ? (0 < e.length && e.pop(), c + 1 == d && e.push("")) : e.push(f);
    a[0] = e.join("/");
    for (a = a.join("?"); a && "/" == a.charAt(0);)
        a = a.substr(1);
    return "/" + a
};
_.kk = function(a) {
    var b = _.ik(a);
    if (String(a) != b)
        throw Error("G");
    (a = b) && "/" == a.charAt(a.length - 1) || (a = (a || "") + "/");
    _.J.register("init", function() {
        _.kk(a)
    });
    _.jk = a;
    _.H.Fb(window.location.href)
};
_.lk = "function" == typeof window.atob;
var mk, nk, ok, pk, qk, rk, sk, tk, uk;
mk = null;
nk = function(a, b) {
    if (null != a)
        for (var c in a)
            if (a.hasOwnProperty(c) && _.fk(c, b))
                return {
                    name: c,
                    value: a[c]
                }
};
ok = null;
pk = function(a, b, c, d) {
    var e = nk(b, "X-Goog-Safety-Encoding");
    if (null != e) {
        if (_.lk)
            a = window.atob(a);
        else {
            if (!mk) {
                var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", f = f + (f.toLowerCase() + "0123456789+/=");
                mk = {};
                for (var g = 0; g < f.length; g++)
                    mk[f.charAt(g)] = g
            }
            for (var f = mk, g = [], k = 0; k < a.length;) {
                var l = f[a.charAt(k++)], m = k < a.length ? f[a.charAt(k)]: 0;
                ++k;
                var n = k < a.length ? f[a.charAt(k)]: 0;
                ++k;
                var p = k < a.length ? f[a.charAt(k)]: 0;
                ++k;
                if (null == l || null == m || null == n || null == p)
                    throw Error();
                g.push(l<<2 | m>>4);
                64 != n && (g.push(m<<4 & 240 | n>>2), 64 !=
                p && g.push(n<<6 & 192 | p))
            }
            a = String.fromCharCode.apply(null, g)
        }
        f = nk(b, "X-Goog-Safety-Content-Type");
        b["Content-Type"] = f.value;
        delete b[e.name];
        delete b[f.name]
    }
    return {
        body: a,
        headers: b,
        status: c,
        statusText: d
    }
};
qk = function() {
    try {
        return new window.XMLHttpRequest
    } catch (a) {}
    try {
        return new window.ActiveXObject("Msxml2.XMLHTTP")
    } catch (b) {}
    return null
};
rk = function(a, b) {
    b = b || "0.1";
    var c = [];
    c.push(a || "google-api-javascript-client");
    b && (c.push("/"), c.push(b));
    return c.join("")
};
sk = function(a, b) {
    if (!a ||!b)
        return !1;
    for (var c = 0, d = b.length; c < d; ++c) {
        var e = b.charCodeAt(c);
        if (!(32 <= e && 126 >= e))
            return !1
    }
    null === ok && ((c = _.E("client/headers/request")) || (c = _.E("googleapis/headers/request")), ok = _.ek(c));
    return null != ok ? ok.hasOwnProperty(a) : !1
};
tk = function(a, b, c, d) {
    a = a || {};
    var e = a.headers || {}, f = a.httpMethod || "GET", g = String(a.url || ""), k = a.urlParams || null, l = a.body || null, m = a.clientName || null, n = a.clientVersion || null;
    c = c || null;
    d = d || null;
    g = _.ik(g);
    g = _.jk + String(g || "/").substr(1);
    g = _.ih(_.kh([g], k));
    e["X-JavaScript-User-Agent"] = rk(m, n);
    delete e["X-Origin"];
    c && (e["X-Origin"] = c);
    delete e["X-Referer"];
    d && (e["X-Referer"] = d);
    e["X-Goog-Encode-Response-If-Executable"] = "base64";
    l && "object" === typeof l && (l = (0, _.$b)(l));
    var p = qk();
    if (!p)
        throw Error("H");
    p.open(f, g);
    p.onreadystatechange = function() {
        if (4 == p.readyState && 0 !== p.status) {
            var a = p.responseText;
            var c = p.getAllResponseHeaders(), d = {};
            if (c)
                for (var c = c.split("\r\n"), e = 0; e < c.length; e++) {
                    var f = c[e], g = f.indexOf(": ");
                    if (0 < g) {
                        var k = f.substring(0, g), f = f.substring(g + 2);
                        _.hk(k) && (d[k] = f)
                    }
                }
            a = pk(a, d, p.status, p.statusText);
            b(a)
        }
    };
    p.onerror = function() {
        var c;
        c = {
            error: {
                code: - 1,
                message: "A network error occurred, and the request could not be completed."
            }
        };
        if ("/rpc" == a.url) {
            for (var d = a.body, e = [], f = 0; f < d.length; f++) {
                var g =
                (0, _.$b)(c), g = (0, _.ac)(g);
                g.id = d[f].id;
                e.push(g)
            }
            c = e
        }
        c = (0, _.$b)(c);
        c = pk(c);
        b(c)
    };
    for (var v in e)
        e.hasOwnProperty(v) && (f = e[v], sk(v, f) && p.setRequestHeader(v, f));
    p.send(l ? l : null)
};
uk = function(a, b, c, d) {
    var e = {}, f = 0;
    if (0 == a.length)
        b(e);
    else {
        var g = function(k) {
            var l = k.key;
            tk(k.params, function(c) {
                e[l] = {
                    data: c
                };
                f++;
                a.length == f ? b((0, _.$b)(e)) : g(a[f])
            }, c, d)
        };
        g(a[f])
    }
};
_.Pi = _.Pi || {};
_.Pi.sI = function() {
    _.J.register("makeHttpRequests", function(a) {
        ".." == this.f && this.t == _.J.Ag("..") && this.origin == _.J.Of("..") && uk.call(this, a, this.callback, this.origin, this.referer)
    })
};
_.Pi.gb = function() {
    var a = String(window.location.pathname);
    18 <= a.length && "/static/proxy.html" == a.substr(a.length - 18) && (a = a.substr(0, a.length - 18));
    a || (a = "/");
    _.Pi.bx(a)
};
_.Pi.bx = function(a) {
    var b = _.ik(a);
    if (String(a) != b)
        throw Error("G");
    _.Pi.sI();
    _.kk(a);
    _.J.call("..", "ready:" + _.J.Ag(".."))
};
_.C("googleapis.ApiServer.makeHttpRequests", uk);
_.C("googleapis.ApiServer.initWithPath", _.kk);
_.C("googleapis.server.init", _.Pi.gb);
_.C("googleapis.server.initWithPath", _.Pi.bx);
});
// Google Inc.

