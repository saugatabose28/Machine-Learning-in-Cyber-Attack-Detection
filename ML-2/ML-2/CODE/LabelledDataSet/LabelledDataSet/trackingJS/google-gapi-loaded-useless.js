/* JS */
gapi.loaded_0(function(_) {
    var window = this;
    var oa, pa;
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
pa = function(a, b, c) {
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
    _.s = Function.prototype.bind&&-1 != Function.prototype.bind.toString().indexOf("native code") ? oa : pa;
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
    a.lu = function(a, c, f) {
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
        udc_webconsentflow: {
            url: "https://www.google.com/settings/webconsent?usegapi=1"
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
_.Ja = function() {
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
_.La = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
_.Na = function(a, b) {
    if (!a)
        throw Error(b || "");
};
_.Oa = _.Ha(_.Aa, "gapi", {});
_.Ta = function(a, b, c) {
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
_.Ya = _.Ha(_.Aa, "___jsl", _.Ja());
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
var jb, lb, nb, pb, qb, rb, tb, ub, vb, wb, yb, zb, Db, Fb, Hb;
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
                _.La(a, d) && void 0 !== a[d] && b.call(c, a[d], d)
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
        _.La(a, c) && b.push(c);
    return b
};
ub = {};
vb = 0;
wb = _.Ja();
yb = _.Ja();
zb = function(a) {
    return "number" === typeof a && a > Math.random()
};
_.Cb = function(a) {
    if ("undefined" === typeof nb) {
        var b = _.E("report") || {}, c = b.rate;
        rb = b.timeout || 1E3;
        pb = b.host || "https://plus.google.com";
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
Fb = function() {
    tb && (_.Aa.clearTimeout(tb), tb = 0);
    tb = _.Aa.setTimeout(function() {
        var a;
        a = window.document.location;
        a = a.protocol + "//" + a.host + a.pathname;
        var b = _.mb(yb).join(":");
        a = [pb, qb, "?api=", (0, window.encodeURIComponent)(b), "&url=", (0, window.encodeURIComponent)(a), "&loaded=", (0, window.encodeURIComponent)(lb().join(":"))].join("");
        yb = _.Ja();
        var b = new window.Image, c = vb++;
        ub[c] = b;
        b.onload = b.onerror = _.ra(Db, c);
        b.src = a;
        tb = 0
    }, rb)
};
_.Gb = function(a) {
    wb[a] || (yb[a]=!0, wb[a]=!0, Fb())
};
Hb = _.za;
_.za = function(a, b) {
    var c = Hb(a, b);
    "function" === typeof b && _.Cb(a) && (c = function(c) {
        _.Gb(a);
        return b.apply(this, arguments)
    });
    return c
};

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
                !/___$/.test(c) && _.La(a, c) && "string" === typeof c && (d = Ub(a[c])) && b.push(Ub(c) + ":" + d);
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
} catch (Yb) {}
Zb = function(a) {
    try {
        return window.JSON.parse(a)
    } catch (b) {
        return !1
    }
};
_.$b = Wb ? window.JSON.stringify : Ub;
_.ac = Wb ? Zb : Vb;

_.C("gadgets.json.stringify", _.$b);
_.C("gadgets.json.parse", _.ac);
_.Ta(_.Aa.location.href, "rpctoken") && _.Wa(_.Ba, "unload", function() {});
_.Ki = window.gapi && window.gapi.util || {};
_.Mi = function(a) {
    if (!a)
        return "";
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
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
};
_.Ki.Ca = function(a) {
    return _.Mi(a)
};
_.Pb = window.console;
_.Qb = function(a) {
    _.Pb && _.Pb.log && _.Pb.log(a)
};
_.Rb = function() {};
_.I = _.I || {};
_.Mb = function(a) {
    for (var b = 0; b < this.length; b++)
        if (this[b] === a)
            return b;
    return - 1
};
_.Nb = function(a, b) {
    var c = _.Ha(_.Ya, "watt", _.Ja());
    _.Ha(c, a, b)
};
_.I = _.I || {};
(function() {
    var a = null;
    _.I.Eb = function(b) {
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
    _.I.Eb()
})();
_.C("gadgets.util.getUrlParameters", _.I.Eb);
var vk = function(a) {
    this.B = a;
    this.A = _.Aa;
    this.G = this.F;
    this.M = /MSIE\s*[0-8](\D|$)/.test(window.navigator.userAgent);
    if (this.B.Cy) {
        this.A = this.B.Ov(this.A, this.B.Cy);
        a = this.A.document;
        var b = a.createElement("script");
        b.setAttribute("type", "text/javascript");
        b.text = "window.doPostMsg=function(w,s,o) {window.setTimeout(function(){w.postMessage(s,o);},0);};";
        a.body.appendChild(b);
        this.G = this.A.doPostMsg
    }
    this.C = {};
    this.D = {};
    a = (0, _.s)(this.K, this);
    _.Wa(this.A, "message", a);
    _.Ha(_.Ya, "RPMQ", []).push(a);
    this.A !=
    this.A.parent && uk(this, this.A.parent, "{h:'" + (0, window.escape)(this.A.name) + "'}", "*")
}, wk = function(a) {
    var b = null;
    0 === a.indexOf("{h:'") && a.indexOf("'}") === a.length - 2 && (b = (0, window.unescape)(a.substring(4, a.length - 2)));
    return b
}, xk = function(a) {
    a = (0, _.ac)(a);
    return null !== a && "object" === typeof a&&!!a.g
};
vk.prototype.K = function(a) {
    var b = String(a.data);
    (0, _.Rb)("gapi.rpc.receive(" + yk + "): " + (!b || 512 >= b.length ? b : b.substr(0, 512) + "... (" + b.length + " bytes)"));
    var c = 0 !== b.indexOf("!_");
    c || (b = b.substring(2));
    var d = xk(b);
    if (!c&&!d) {
        if (!d && (c = wk(b))) {
            if (this.C[c])
                this.C[c]();
            else 
                this.D[c] = 1;
            return 
        }
        var e = a.origin, f = this.B.QD;
        this.M ? _.Aa.setTimeout(function() {
            f(b, e)
        }, 0) : f(b, e)
    }
};
vk.prototype.ob = function(a, b) {
    ".." === a || this.D[a] ? (b(), delete this.D[a]) : this.C[a] = b
};
var uk = function(a, b, c, d) {
    var e = xk(c) ? "": "!_";
    (0, _.Rb)("gapi.rpc.send(" + yk + "): " + (!c || 512 >= c.length ? c : c.substr(0, 512) + "... (" + c.length + " bytes)"));
    a.G(b, e + c, d)
};
vk.prototype.F = function(a, b, c) {
    a.postMessage(b, c)
};
vk.prototype.send = function(a, b, c) {
    (a = this.B.Ov(this.A, a))&&!a.closed && uk(this, a, b, c)
};
var zk, Ak, Bk, Ck, Dk, Ek, Fk, Gk, Hk, yk, Ik, Jk, Kk, Lk, Mk, Nk, Ok, Pk, Uk, Vk, Xk, Yk, $k, Zk, Qk, Rk, al, bl, cl, dl;
zk = 0;
Ak = [];
Bk = {};
Ck = {};
Dk = _.I.Eb;
Ek = Dk();
Fk = Ek.rpctoken;
Gk = Ek.parent || _.Ba.referrer;
Hk = Ek.rly;
yk = Hk || (_.Aa !== _.Aa.top || _.Aa.opener) && _.Aa.name || "..";
Ik = null;
Jk = {};
Kk = function() {};
Lk = {
    send: Kk,
    ob: Kk
};
Mk = function(a, b) {
    "/" == b.charAt(0) && (b = b.substring(1), a = _.Aa.top);
    for (var c = b.split("/"); c.length;) {
        var d;
        d = c.shift();
        "{" == d.charAt(0) && "}" == d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));
        if (".." === d)
            a = a == a.parent ? a.opener : a.parent;
        else if (".." !== d && a.frames[d]) {
            if (a = a.frames[d], !("postMessage"in a))
                throw "Not a window";
        } else 
            return null
    }
    return a
};
Nk = function(a) {
    return (a = Bk[a]) && a.Oi
};
Ok = function(a) {
    if (a.f in{})
        return !1;
    var b = a.t, c = Bk[a.r];
    a = a.origin;
    return c && (c.Oi === b ||!c.Oi&&!b) && (a === c.origin || "*" === c.origin)
};
Pk = function(a) {
    var b = a.id.split("/"), c = b[b.length - 1], d = a.origin;
    return function(a) {
        var b = a.origin;
        return a.f == c && (d == b || "*" == d)
    }
};
_.Sk = function(a, b, c) {
    a = Qk(a);
    Ck[a.name] = {
        Dp: b,
        nk: a.nk,
        Ti: c || Ok
    };
    Rk()
};
_.Tk = function(a) {
    delete Ck[Qk(a).name]
};
Uk = {};
Vk = function(a, b) {
    var c = Uk["_" + a];
    c && c[1](this) && c[0].call(this, b)
};
Xk = function(a) {
    var b = a.c;
    if (!b)
        return Kk;
    var c = a.r, d = a.g ? "legacy__": "";
    return function() {
        var a = [].slice.call(arguments, 0);
        a.unshift(c, d + "__cb", null, b);
        _.Wk.apply(null, a)
    }
};
Yk = function(a) {
    Ik = a
};
$k = function(a) {
    Jk[a] || (Jk[a] = _.Aa.setTimeout(function() {
        Jk[a]=!1;
        Zk(a)
    }, 0))
};
Zk = function(a) {
    var b = Bk[a];
    if (b && b.ready) {
        var c = b.tr;
        for (b.tr = []; c.length;)
            Lk.send(a, (0, _.$b)(c.shift()), b.origin)
    }
};
Qk = function(a) {
    return 0 === a.indexOf("legacy__") ? {
        name: a.substring(8),
        nk: !0
    } : {
        name: a,
        nk: !1
    }
};
Rk = function() {
    for (var a = _.E("rpc/residenceSec") || 60, b = (new Date).getTime() / 1E3, c = 0, d; d = Ak[c]; ++c) {
        var e = d.hh;
        if (!e || 0 < a && b - d.timestamp > a)
            Ak.splice(c, 1), --c;
        else {
            var f = e.s, g = Ck[f] || Ck["*"];
            if (g)
                if (Ak.splice(c, 1), --c, e.origin = d.origin, d = Xk(e), e.callback = d, g.Ti(e)) {
                    if ("__cb" !== f&&!!g.nk!=!!e.g)
                        break;
                        e = g.Dp.apply(e, e.a);
                        void 0 !== e && d(e)
                } else (0, _.Rb)("gapi.rpc.rejected(" + yk + "): " + f)
            }
    }
};
al = function(a, b, c) {
    Ak.push({
        hh: a,
        origin: b,
        timestamp: (new Date).getTime() / 1E3
    });
    c || Rk()
};
bl = function(a, b) {
    var c = (0, _.ac)(a);
    al(c, b, !1)
};
cl = function(a) {
    for (; a.length;)
        al(a.shift(), this.origin, !0);
    Rk()
};
dl = function(a) {
    var b=!1;
    a = a.split("|");
    var c = a[0];
    0 <= c.indexOf("/") && (b=!0);
    return {
        id: c,
        origin: a[1] || "*",
        Iq: b
    }
};
_.el = function(a, b, c, d) {
    var e = dl(a);
    d && (_.Aa.frames[e.id] = _.Aa.frames[e.id] || d);
    a = e.id;
    if (!Bk.hasOwnProperty(a)) {
        c = c || null;
        d = e.origin;
        if (".." === a)
            d = _.Ki.Ca(Gk), c = c || Fk;
        else if (!e.Iq) {
            var f = _.Ba.getElementById(a);
            f && (f = f.src, d = _.Ki.Ca(f), c = c || Dk(f).rpctoken)
        }
        "*" === e.origin && d || (d = e.origin);
        Bk[a] = {
            Oi: c,
            tr: [],
            origin: d,
            KI: b,
            uy: function() {
                var b = a;
                Bk[b].ready = 1;
                Zk(b)
            }
        };
        Lk.ob(a, Bk[a].uy)
    }
    return Bk[a].uy
};
_.Wk = function(a, b, c, d) {
    a = a || "..";
    _.el(a);
    a = a.split("|", 1)[0];
    var e = b, f = [].slice.call(arguments, 3), g = c, k = yk, l = Fk, m = Bk[a], n = k, p = dl(a);
    if (m && ".." !== a) {
        if (p.Iq) {
            if (!(l = Bk[a].KI)) {
                l = null;
                Ik ? l = Ik.substring(1).split("/") : l = [yk];
                for (var n = l.length - 1, v = _.Aa.parent; v !== _.Aa.top;) {
                    var x = v.parent;
                    if (!n--) {
                        for (var t = null, w = x.frames.length, y = 0; y < w; ++y)
                            x.frames[y] == v && (t = y);
                        l.unshift("{" + t + "}")
                    }
                    v = x
                }
                l = "/" + l.join("/")
            }
            n = l
        } else 
            n = k = "..";
        l = m.Oi
    }
    g && p ? (m = Ok, p.Iq && (m = Pk(p)), Uk["_" + ++zk] = [g, m], p = zk) : p = null;
    f = {
        s: e,
        f: k,
        r: n,
        t: l,
        c: p,
        a: f
    };
    e = Qk(e);
    f.s = e.name;
    f.g = e.nk;
    Bk[a].tr.push(f);
    $k(a)
};
if ("function" === typeof _.Aa.postMessage || "object" === typeof _.Aa.postMessage)
    Lk = new vk({
        Cy: Hk ? "../" + Hk: null,
        QD: bl,
        Ov: Mk,
        jT: yk,
        jF: Nk,
        NT: Yk
    }), _.Sk("__cb", Vk, function() {
        return !0
    }), _.Sk("_processBatch", cl, function() {
        return !0
    }), _.el("..");

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

var kd, ld, nd, od, pd, qd, rd;
_.L = function(a, b) {
    return _.aa[a] = b
};
kd = /[\x00&<>"']/;
ld = /\x00/g;
nd = /'/g;
od = /"/g;
pd = />/g;
qd = /</g;
rd = /&/g;
_.sd = function(a) {
    if (!kd.test(a))
        return a;
    - 1 != a.indexOf("&") && (a = a.replace(rd, "&amp;"));
    - 1 != a.indexOf("<") && (a = a.replace(qd, "&lt;"));
    - 1 != a.indexOf(">") && (a = a.replace(pd, "&gt;"));
    - 1 != a.indexOf('"') && (a = a.replace(od, "&quot;"));
    - 1 != a.indexOf("'") && (a = a.replace(nd, "&#39;"));
    - 1 != a.indexOf("\x00") && (a = a.replace(ld, "&#0;"));
    return a
};
_.td = function(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = a[d];
    return b
};
_.ud = function(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = d;
    return b
};
_.vd = function(a, b) {
    for (var c in a)
        if (a[c] == b)
            return !0;
    return !1
};
_.wd = function(a) {
    var b = arguments.length;
    if (1 == b && _.ha(arguments[0]))
        return _.wd.apply(null, arguments[0]);
    for (var c = {}, d = 0; d < b; d++)
        c[arguments[d]]=!0;
    return c
};
t: {
    var yd = _.r.navigator;
    if (yd) {
        var zd = yd.userAgent;
        if (zd) {
            _.xd = zd;
            break t
        }
    }
    _.xd = ""
}
_.Ad = function(a) {
    return - 1 != _.xd.indexOf(a)
};
_.Bd = function() {
    return _.Ad("Trident") || _.Ad("MSIE")
};
_.je = [];
_.ke = [];
_.le=!1;
_.me = function(a) {
    _.je[_.je.length] = a;
    if (_.le)
        for (var b = 0; b < _.ke.length; b++)
            a((0, _.s)(_.ke[b].wrap, _.ke[b]))
};
var zf, Bf, Cf, Af;
_.vf = function(a) {
    if (Error.captureStackTrace)
        Error.captureStackTrace(this, _.vf);
    else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
};
_.u(_.vf, Error);
_.vf.prototype.name = "CustomError";
_.wf = function(a) {
    return a
};
_.xf = function(a) {
    var b = {}, c;
    for (c in a)
        b[c] = a[c];
    return b
};
_.yf = function(a) {
    for (var b = {}, c = 0, d = 0; d < a.length;) {
        var e = a[d++], f = _.Tc(e) ? "o" + _.Sc(e): (typeof e).charAt(0) + e;
        Object.prototype.hasOwnProperty.call(b, f) || (b[f]=!0, a[c++] = e)
    }
    a.length = c
};
zf = function(a) {
    _.r.setTimeout(function() {
        throw a;
    }, 0)
};
_.Df = function(a) {
    a = Af(a);
    !_.Uc(_.r.setImmediate) || _.r.Window && _.r.Window.prototype.setImmediate == _.r.setImmediate ? (Bf || (Bf = Cf()), Bf(a)) : _.r.setImmediate(a)
};
Cf = function() {
    var a = _.r.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
        var a = window.document.createElement("iframe");
        a.style.display = "none";
        a.src = "";
        window.document.documentElement.appendChild(a);
        var b = a.contentWindow, a = b.document;
        a.open();
        a.write("");
        a.close();
        var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*": b.location.protocol + "//" + b.location.host, a = (0, _.s)(function(a) {
            if (("*" == d || a.origin == d) &&
            a.data == c)
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
    if ("undefined" !== typeof a&&!_.Bd()) {
        var b = new a, c = {}, d = c;
        b.port1.onmessage = function() {
            if (_.ca(c.next)) {
                c = c.next;
                var a = c.uu;
                c.uu = null;
                a()
            }
        };
        return function(a) {
            d.next = {
                uu: a
            };
            d = d.next;
            b.port2.postMessage(0)
        }
    }
    return "undefined" !== typeof window.document && "onreadystatechange"in window.document.createElement("script") ? function(a) {
        var b = window.document.createElement("script");
        b.onreadystatechange = function() {
            b.onreadystatechange = null;
            b.parentNode.removeChild(b);
            b = null;
            a();
            a = null
        };
        window.document.documentElement.appendChild(b)
    } : function(a) {
        _.r.setTimeout(a, 0)
    }
};
Af = _.wf;
_.me(function(a) {
    Af = a
});
var Jf = function(a, b) {
    Ef || Ff();
    Gf || (Ef(), Gf=!0);
    Hf.push(new If(a, b))
}, Ef, Ff = function() {
    if (_.r.Promise && _.r.Promise.resolve) {
        var a = _.r.Promise.resolve();
        Ef = function() {
            a.then(Kf)
        }
    } else 
        Ef = function() {
            _.Df(Kf)
        }
}, Gf=!1, Hf = [], Kf = function() {
    for (; Hf.length;) {
        var a = Hf;
        Hf = [];
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            try {
                c.Dp.call(c.scope)
            } catch (d) {
                zf(d)
            }
        }
    }
    Gf=!1
}, If = function(a, b) {
    this.Dp = a;
    this.scope = b
};
_.Lf = function(a) {
    a.prototype.then = a.prototype.then;
    a.prototype.$goog_Thenable=!0
};
_.Mf = function(a) {
    if (!a)
        return !1;
    try {
        return !!a.$goog_Thenable
    } catch (b) {
        return !1
    }
};
_.Of = function(a, b) {
    this.B = 0;
    this.F = void 0;
    this.A = this.C = null;
    this.D = this.G=!1;
    try {
        var c = this;
        a.call(b, function(a) {
            Nf(c, 2, a)
        }, function(a) {
            Nf(c, 3, a)
        })
    } catch (d) {
        Nf(this, 3, d)
    }
};
_.Of.prototype.then = function(a, b, c) {
    return Pf(this, _.Uc(a) ? a : null, _.Uc(b) ? b : null, c)
};
_.Lf(_.Of);
_.Of.prototype.cancel = function(a) {
    0 == this.B && Jf(function() {
        var b = new Qf(a);
        Rf(this, b)
    }, this)
};
var Rf = function(a, b) {
    if (0 == a.B)
        if (a.C) {
            var c = a.C;
            if (c.A) {
                for (var d = 0, e =- 1, f = 0, g; g = c.A[f]; f++)
                    if (g = g.qj)
                        if (d++, g == a && (e = f), 0 <= e && 1 < d)
                            break;
                            0 <= e && (0 == c.B && 1 == d ? Rf(c, b) : (d = c.A.splice(e, 1)[0], Sf(c, d, 3, b)))
                        }
        } else 
            Nf(a, 3, b)
    }, Uf = function(a, b) {
    a.A && a.A.length || 2 != a.B && 3 != a.B || Tf(a);
    a.A || (a.A = []);
    a.A.push(b)
}, Pf = function(a, b, c, d) {
    var e = {
        qj: null,
        Cx: null,
        Jx: null
    };
    e.qj = new _.Of(function(a, g) {
        e.Cx = b ? function(c) {
            try {
                var e = b.call(d, c);
                a(e)
            } catch (m) {
                g(m)
            }
        } : a;
        e.Jx = c ? function(b) {
            try {
                var e = c.call(d, b);
                !_.ca(e) && b instanceof
                Qf ? g(b) : a(e)
            } catch (m) {
                g(m)
            }
        } : g
    });
    e.qj.C = a;
    Uf(a, e);
    return e.qj
};
_.Of.prototype.M = function(a) {
    this.B = 0;
    Nf(this, 2, a)
};
_.Of.prototype.K = function(a) {
    this.B = 0;
    Nf(this, 3, a)
};
var Nf = function(a, b, c) {
    if (0 == a.B) {
        if (a == c)
            b = 3, c = new TypeError("Promise cannot resolve to itself");
        else {
            if (_.Mf(c)) {
                a.B = 1;
                c.then(a.M, a.K, a);
                return 
            }
            if (_.Tc(c))
                try {
                    var d = c.then;
                    if (_.Uc(d)) {
                        Vf(a, c, d);
                        return 
                    }
            } catch (e) {
                b = 3, c = e
            }
        }
        a.F = c;
        a.B = b;
        Tf(a);
        3 != b || c instanceof Qf || Wf(a, c)
    }
}, Vf = function(a, b, c) {
    a.B = 1;
    var d=!1, e = function(b) {
        d || (d=!0, a.M(b))
    }, f = function(b) {
        d || (d=!0, a.K(b))
    };
    try {
        c.call(b, e, f)
    } catch (g) {
        f(g)
    }
}, Tf = function(a) {
    a.G || (a.G=!0, Jf(a.V, a))
};
_.Of.prototype.V = function() {
    for (; this.A && this.A.length;) {
        var a = this.A;
        this.A = [];
        for (var b = 0; b < a.length; b++)
            Sf(this, a[b], this.B, this.F)
    }
    this.G=!1
};
var Sf = function(a, b, c, d) {
    if (2 == c)
        b.Cx(d);
    else {
        if (b.qj)
            for (; a && a.D; a = a.C)
                a.D=!1;
        b.Jx(d)
    }
}, Wf = function(a, b) {
    a.D=!0;
    Jf(function() {
        a.D && Xf.call(null, b)
    })
}, Xf = zf, Qf = function(a) {
    _.vf.call(this, a)
};
_.u(Qf, _.vf);
Qf.prototype.name = "cancel";

_.fl = function(a) {
    return new _.Of(a)
};
_.gl = _.gl || {};
_.gl.oF = function() {
    var a = 0, b = 0;
    window.self.innerHeight ? (a = window.self.innerWidth, b = window.self.innerHeight) : window.document.documentElement && window.document.documentElement.clientHeight ? (a = window.document.documentElement.clientWidth, b = window.document.documentElement.clientHeight) : window.document.body && (a = window.document.body.clientWidth, b = window.document.body.clientHeight);
    return {
        width: a,
        height: b
    }
};

_.gl = _.gl || {};
(function() {
    function a(a, c) {
        window.getComputedStyle(a, "").getPropertyValue(c).match(/^([0-9]+)/);
        return (0, window.parseInt)(RegExp.$1, 10)
    }
    _.gl.Ib = function() {
        var b = _.gl.oF().height, c = window.document.body, d = window.document.documentElement;
        if ("CSS1Compat" === window.document.compatMode && d.scrollHeight)
            return d.scrollHeight !== b ? d.scrollHeight : d.offsetHeight;
        if (0 <= window.navigator.userAgent.indexOf("AppleWebKit")) {
            b = 0;
            for (c = [window.document.body]; 0 < c.length;) {
                var e = c.shift(), d = e.childNodes;
                if ("undefined" !==
                typeof e.style) {
                    var f = e.style.overflowY;
                    f || (f = (f = window.document.defaultView.getComputedStyle(e, null)) ? f.overflowY : null);
                    if ("visible" != f && "inherit" != f && (f = e.style.height, f || (f = (f = window.document.defaultView.getComputedStyle(e, null)) ? f.height : ""), 0 < f.length && "auto" != f))
                        continue
                }
                for (e = 0; e < d.length; e++) {
                    f = d[e];
                    if ("undefined" !== typeof f.offsetTop && "undefined" !== typeof f.offsetHeight)
                        var g = f.offsetTop + f.offsetHeight + a(f, "margin-bottom"), b = Math.max(b, g);
                    c.push(f)
                }
            }
            return b + a(window.document.body, "border-bottom") + a(window.document.body, "margin-bottom") + a(window.document.body, "padding-bottom")
        }
        if (c && d)
            return e = d.scrollHeight, f = d.offsetHeight, d.clientHeight !== f && (e = c.scrollHeight, f = c.offsetHeight), e > b ? e > f ? e : f : e < f ? e : f
    }
})();

var Oi, Pi;
Oi = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/u\/(\d)\//;
Pi = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/b\/(\d{10,})\//;
_.Qi = function(a) {
    var b = _.E("googleapis.config/sessionIndex");
    null == b && (b = window.__X_GOOG_AUTHUSER);
    if (null == b) {
        var c = window.google;
        c && (b = c.authuser)
    }
    null == b && (a = a || window.location.href, b = _.Ta(a, "authuser") || null, null == b && (b = (b = a.match(Oi)) ? b[1] : null));
    return null == b ? null : String(b)
};
_.Ri = function(a) {
    var b = _.E("googleapis.config/sessionDelegate");
    null == b && (b = (a = (a || window.location.href).match(Pi)) ? a[1] : null);
    return null == b ? null : String(b)
};
_.Si = function(a, b) {
    var c = _.Qi(a) || b, d = _.Ri(a), e = "";
    c && (e += "u/" + c + "/");
    d && (e += "b/" + d + "/");
    return e || null
};

var Vi = function() {
    this.B =- 1
};
var Wi = function() {
    this.B =- 1;
    this.B = 64;
    this.A = [];
    this.F = [];
    this.K = [];
    this.D = [];
    this.D[0] = 128;
    for (var a = 1; a < this.B; ++a)
        this.D[a] = 0;
    this.G = this.C = 0;
    this.reset()
};
_.u(Wi, Vi);
Wi.prototype.reset = function() {
    this.A[0] = 1732584193;
    this.A[1] = 4023233417;
    this.A[2] = 2562383102;
    this.A[3] = 271733878;
    this.A[4] = 3285377520;
    this.G = this.C = 0
};
var Xi = function(a, b, c) {
    c || (c = 0);
    var d = a.K;
    if (_.ja(b))
        for (var e = 0; 16 > e; e++)
            d[e] = b.charCodeAt(c)<<24 | b.charCodeAt(c + 1)<<16 | b.charCodeAt(c + 2)<<8 | b.charCodeAt(c + 3), c += 4;
    else 
        for (e = 0; 16 > e; e++)
            d[e] = b[c]<<24 | b[c + 1]<<16 | b[c + 2]<<8 | b[c + 3], c += 4;
    for (e = 16; 80 > e; e++) {
        var f = d[e - 3]^d[e - 8]^d[e - 14]^d[e - 16];
        d[e] = (f<<1 | f>>>31) & 4294967295
    }
    b = a.A[0];
    c = a.A[1];
    for (var g = a.A[2], k = a.A[3], l = a.A[4], m, e = 0; 80 > e; e++)
        40 > e ? 20 > e ? (f = k^c & (g^k), m = 1518500249) : (f = c^g^k, m = 1859775393) : 60 > e ? (f = c & g | k & (c | g), m = 2400959708) : (f = c^g^k, m = 3395469782),
        f = (b<<5 | b>>>27) + f + l + m + d[e] & 4294967295, l = k, k = g, g = (c<<30 | c>>>2) & 4294967295, c = b, b = f;
    a.A[0] = a.A[0] + b & 4294967295;
    a.A[1] = a.A[1] + c & 4294967295;
    a.A[2] = a.A[2] + g & 4294967295;
    a.A[3] = a.A[3] + k & 4294967295;
    a.A[4] = a.A[4] + l & 4294967295
};
Wi.prototype.update = function(a, b) {
    if (null != a) {
        _.ca(b) || (b = a.length);
        for (var c = b - this.B, d = 0, e = this.F, f = this.C; d < b;) {
            if (0 == f)
                for (; d <= c;)
                    Xi(this, a, d), d += this.B;
            if (_.ja(a))
                for (; d < b;) {
                    if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.B) {
                        Xi(this, e);
                        f = 0;
                        break
                    }
                } else 
                    for (; d < b;)
                        if (e[f] = a[d], ++f, ++d, f == this.B) {
                            Xi(this, e);
                            f = 0;
                            break
                        }
        }
        this.C = f;
        this.G += b
    }
};
Wi.prototype.M = function() {
    var a = [], b = 8 * this.G;
    56 > this.C ? this.update(this.D, 56 - this.C) : this.update(this.D, this.B - (this.C - 56));
    for (var c = this.B - 1; 56 <= c; c--)
        this.F[c] = b & 255, b/=256;
    Xi(this, this.F);
    for (c = b = 0; 5 > c; c++)
        for (var d = 24; 0 <= d; d -= 8)
            a[b] = this.A[c]>>d & 255, ++b;
    return a
};
_.Yi = function() {
    this.A = new Wi
};
_.h = _.Yi.prototype;
_.h.reset = function() {
    this.A.reset()
};
_.h.cA = function(a) {
    this.A.update(a)
};
_.h.Ku = function() {
    return this.A.M()
};
_.h.xs = function(a) {
    a = (0, window.unescape)((0, window.encodeURIComponent)(a));
    for (var b = [], c = 0, d = a.length; c < d; ++c)
        b.push(a.charCodeAt(c));
    this.cA(b)
};
_.h.Ef = function() {
    for (var a = this.Ku(), b = "", c = 0; c < a.length; c++)
        b += "0123456789ABCDEF".charAt(Math.floor(a[c] / 16)) + "0123456789ABCDEF".charAt(a[c]%16);
    return b
};

var il, hl, ol, pl, jl, ml, kl, ql, ll, hl;
_.nl = function() {
    var a;
    hl ? (a = new _.Aa.Uint32Array(1), il.getRandomValues(a), a = Number("0." + a[0])) : (a = jl, a += (0, window.parseInt)(kl.substr(0, 20), 16), kl = ll(kl), a = a / (ml + Math.pow(16, 20)));
    return a
};
il = _.Aa.crypto;
hl=!1;
ol = 0;
pl = 0;
jl = 1;
ml = 0;
kl = "";
ql = function(a) {
    a = a || _.Aa.event;
    var b = a.screenX + a.clientX<<16, b = b + (a.screenY + a.clientY), b = (new Date).getTime()%1E6 * b;
    jl = jl * b%ml;
    0 < ol&&++pl == ol && _.Va(_.Aa, "mousemove", ql, "remove", "de")
};
ll = function(a) {
    var b = new _.Yi;
    b.xs(a);
    return b.Ef()
};
hl=!!il && "function" == typeof il.getRandomValues;
hl || (ml = 1E6 * (window.screen.width * window.screen.width + window.screen.height), kl = ll(_.Ba.cookie + "|" + _.Ba.location + "|" + (new Date).getTime() + "|" + Math.random()), ol = _.E("random/maxObserveMousemove") || 0, 0 != ol && _.Wa(_.Aa, "mousemove", ql));

var sl, ul, vl, wl, xl, yl, zl, Al, Bl, Cl, Fl, Gl, Hl, Il, Jl, Kl;
_.rl = function(a, b) {
    a = a || {};
    for (var c in a)
        _.La(a, c) && (b[c] = a[c])
};
sl = /^([^?#]*)(\?([^#]*))?(\#(.*))?$/;
_.tl = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
ul = function(a, b) {
    var c = [];
    if (a)
        for (var d in a)
            if (_.La(a, d) && null != a[d]) {
                var e = b ? b(a[d]): a[d];
                c.push((0, window.encodeURIComponent)(d) + "=" + (0, window.encodeURIComponent)(e))
            }
    return c
};
vl = function(a) {
    return a.lu + (0 < a.query.length ? "?" + a.query.join("&") : "") + (0 < a.Rl.length ? "#" + a.Rl.join("&") : "")
};
wl = function(a) {
    a = a.match(sl);
    var b = _.Ja();
    b.lu = a[1];
    b.query = a[3] ? [a[3]] : [];
    b.Rl = a[5] ? [a[5]] : [];
    return b
};
xl = /'/g;
yl = /"/g;
zl = />/g;
Al = /</g;
Bl = /&/g;
Cl = function(a) {
    for (; a.firstChild;)
        a.removeChild(a.firstChild)
};
_.Dl = function(a, b) {
    var c = "";
    2E3 < b.length && (c = b.substring(2E3), b = b.substring(0, 2E3));
    var d = a.createElement("div"), e = a.createElement("a");
    e.href = b;
    d.appendChild(e);
    d.innerHTML = d.innerHTML;
    b = String(d.firstChild.href);
    d.parentNode && d.parentNode.removeChild(d);
    return b + c
};
_.El = function(a, b, c, d) {
    a = wl(a);
    a.query.push.apply(a.query, ul(b, d));
    a.Rl.push.apply(a.Rl, ul(c, d));
    return vl(a)
};
Fl = function(a) {
    return String(a).replace(Bl, "&amp;").replace(Al, "&lt;").replace(zl, "&gt;").replace(yl, "&quot;").replace(xl, "&#39;")
};
Hl = function() {
    var a = _.Ya.onl;
    if (!a) {
        a = _.Ja();
        _.Ya.onl = a;
        var b = _.Ja();
        a.e = function(a) {
            var d = b[a];
            d && (delete b[a], d())
        };
        a.a = function(a, d) {
            b[a] = d
        };
        a.r = function(a) {
            delete b[a]
        }
    }
    return a
};
Il = function(a, b) {
    var c = b.onload;
    return "function" === typeof c ? (Hl().a(a, c), c) : null
};
Jl = function(a) {
    _.Na(/^\w+$/.test(a), "Unsupported id - " + a);
    Hl();
    return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"'
};
Kl = function(a) {
    Hl().r(a)
};
var Ml, Nl, Rl;
_.Ll = {
    allowtransparency: "true",
    frameborder: "0",
    hspace: "0",
    marginheight: "0",
    marginwidth: "0",
    scrolling: "no",
    style: "",
    tabindex: "0",
    vspace: "0",
    width: "100%"
};
Ml = {
    allowtransparency: !0,
    onload: !0
};
Nl = 0;
_.Ol = function(a, b) {
    var c, d = 0;
    do 
        c = b.id || ["I", Nl++, "_", (new Date).getTime()].join("");
    while (a.getElementById(c) && 5>++d);
    _.Na(5 > d, "Error creating iframe id");
    return c
};
_.Pl = function(a, b) {
    return a ? b + "/" + a : ""
};
_.Ql = function(a, b, c, d) {
    var e = {}, f = {};
    a.documentMode && 9 > a.documentMode && (e.hostiemode = a.documentMode);
    _.rl(d.queryParams || {}, e);
    _.rl(d.fragmentParams || {}, f);
    var g = d.connectWithQueryParams ? e: f, k = d.pfname, l = _.Ja();
    l.id = c;
    l.parent = a.location.protocol + "//" + a.location.host;
    c = _.Ta(a.location.href, "parent");
    k = k || "";
    !k && c && (k = _.Pl(_.Ta(a.location.href, "id", ""), _.Ta(a.location.href, "pfname", "")));
    l.pfname = k;
    _.rl(l, g);
    (l = _.Ta(b, "rpctoken") || e.rpctoken || f.rpctoken) || (l = g.rpctoken = d.rpctoken || String(Math.round(1E8 *
    _.nl())));
    d.rpctoken = l;
    g = a.location.href;
    a = _.Ja();
    (l = _.Ta(g, "_bsh", _.Ya.bsh)) && (a._bsh = l);
    (g = _.Ya.dpo ? _.Ya.h : _.Ta(g, "jsh", _.Ya.h)) && (a.jsh = g);
    d.hintInFragment ? _.rl(a, f) : _.rl(a, e);
    return _.El(b, e, f, d.paramsSerializer)
};
Rl = function(a) {
    _.Na(!a || _.tl.test(a), "Illegal url for new iframe - " + a)
};
_.Sl = function(a, b, c, d, e) {
    Rl(c.src);
    var f, g = Il(d, c), k = g ? Jl(d): "";
    try {
        f = a.createElement('<iframe frameborder="' + Fl(String(c.frameborder)) + '" scrolling="' + Fl(String(c.scrolling)) + '" ' + k + ' name="' + Fl(String(c.name)) + '"/>')
    } catch (l) {
        f = a.createElement("iframe"), g && (f.onload = function() {
            f.onload = null;
            g.call(this)
        }, Kl(d))
    }
    for (var m in c)
        a = c[m], "style" === m && "object" === typeof a ? _.rl(a, f.style) : Ml[m] || f.setAttribute(m, String(a));
    (m = e && e.beforeNode || null) || e && e.dontclear || Cl(b);
    b.insertBefore(f, m);
    f = m ? m.previousSibling : b.lastChild;
    c.allowtransparency && (f.allowTransparency=!0);
    return f
};
var Tl, Wl;
Tl = /^:[\w]+$/;
_.Ul = /:([a-zA-Z_]+):/g;
_.Vl = function() {
    var a = _.Qi() || "0", b = _.Ri(), c = _.Si(void 0, a), d=!1 === _.E("isLoggedIn"), e = d ? "_/im/" : "";
    e && (c = "");
    var f = _.E("iframes/:socialhost:"), g = _.E("iframes/:im_socialhost:");
    return Gl = {
        socialhost: f,
        ctx_socialhost: d ? g: f,
        session_index: a,
        session_delegate: b,
        session_prefix: c,
        im_prefix: e
    }
};
Wl = function(a, b) {
    return _.Vl()[b] || ""
};
_.Xl = function(a) {
    return _.Dl(_.Ba, a.replace(_.Ul, Wl))
};
_.Yl = function(a) {
    var b = a;
    Tl.test(a) && (b = _.E("iframes/" + b.substring(1) + "/url"), _.Na(!!b, "Unknown iframe url config for - " + a));
    return _.Xl(b)
};
_.Zl = function(a, b, c) {
    var d = c || {};
    c = d.attributes || {};
    _.Na(!d.allowPost ||!c.onload, "onload is not supported by post iframe");
    a = _.Yl(a);
    c = b.ownerDocument || _.Ba;
    var e = _.Ol(c, d);
    a = _.Ql(c, a, e, d);
    var f = _.Ja();
    _.rl(_.Ll, f);
    _.rl(d.attributes, f);
    f.name = f.id = e;
    f.src = a;
    d.eurl = a;
    if ((d || {}).allowPost && 2E3 < a.length) {
        var g = wl(a);
        f.src = "";
        f["data-postorigin"] = a;
        a = _.Sl(c, b, f, e);
        var k;
        if ( - 1 != window.navigator.userAgent.indexOf("WebKit")) {
            k = a.contentWindow.document;
            k.open();
            var f = k.createElement("div"), l = {}, m = e + "_inner";
            l.name = m;
            l.src = "";
            l.style = "display:none";
            _.Sl(c, f, l, m, d)
        }
        f = (d = g.query[0]) ? d.split("&") : [];
        d = [];
        for (l = 0; l < f.length; l++)
            m = f[l].split("=", 2), d.push([(0, window.decodeURIComponent)(m[0]), (0, window.decodeURIComponent)(m[1])]);
        g.query = [];
        f = vl(g);
        g = c.createElement("form");
        g.action = f;
        g.method = "POST";
        g.target = e;
        g.style.display = "none";
        for (e = 0; e < d.length; e++)
            f = c.createElement("input"), f.type = "hidden", f.name = d[e][0], f.value = d[e][1], g.appendChild(f);
        b.appendChild(g);
        g.submit();
        g.parentNode.removeChild(g);
        k && k.close();
        b = a
    } else 
        b = _.Sl(c, b, f, e, d);
    return b
};

var $l = function(a) {
    this.A = a
};
_.h = $l.prototype;
_.h.value = function() {
    return this.A
};
_.h.yf = function(a) {
    this.A.width = a;
    return this
};
_.h.Qb = function() {
    return this.A.width
};
_.h.ih = function(a) {
    this.A.height = a;
    return this
};
_.h.Ib = function() {
    return this.A.height
};
_.am = function(a) {
    this.A = a
};
_.am.prototype.ih = function(a) {
    this.A.height = a;
    return this
};
_.am.prototype.Ib = function() {
    return this.A.height
};
_.am.prototype.yf = function(a) {
    this.A.width = a;
    return this
};
_.am.prototype.Qb = function() {
    return this.A.width
};
_.bm = function(a) {
    this.A = a || {}
};
_.bm.prototype.value = function() {
    return this.A
};
_.cm = function(a, b) {
    a.A.url = b;
    return a
};
_.bm.prototype.getUrl = function() {
    return this.A.url
};
_.dm = function(a, b) {
    a.A.style = b;
    return a
};
_.bm.prototype.ca = function() {
    return this.A.id
};
_.em = function(a, b) {
    a.A.queryParams = b;
    return a
};
_.fm = function(a, b) {
    a.A.relayOpen = b;
    return a
};
_.bm.prototype.Qh = _.q(7);
_.bm.prototype.getContext = _.q(8);
_.bm.prototype.Jb = function() {
    return this.A.openerIframe
};
_.bm.prototype.Ij = function() {
    this.A.attributes = this.A.attributes || {};
    return new $l(this.A.attributes)
};

var im, km, jm, mm, om, pm;
_.bm.prototype.getContext = _.L(8, function() {
    return this.A.context
});
_.bm.prototype.Qh = _.L(7, function() {
    return this.A.apis
});
_.gm = function(a) {
    a.A.waitForOnload=!0
};
_.hm = function(a) {
    return a.A.rpctoken
};
im = function(a, b) {
    a.A.onload = b
};
km = function(a) {
    this.resolve = this.reject = null;
    this.promise = _.fl((0, _.s)(function(a, c) {
        this.resolve = a;
        this.reject = c
    }, this));
    a && (this.promise = jm(this.promise, a))
};
jm = function(a, b) {
    return a.then(function(a) {
        try {
            b(a)
        } catch (d) {}
        return a
    })
};
_.lm = function(a) {
    return new _.Of(function(b, c) {
        var d = a.length, e = [];
        if (d)
            for (var f = function(a, c) {
                d--;
                e[a] = c;
                0 == d && b(e)
            }, g = function(a) {
                c(a)
            }, k = 0, l; l = a[k]; k++)
                l.then(_.ra(f, k), g);
        else 
            b(e)
    })
};
mm = function(a) {
    return new _.Of(function(b) {
        b(a)
    })
};
_.qm = function(a) {
    this.A = a || {}
};
_.u(_.qm, _.bm);
_.rm = function(a, b) {
    a.A.frameName = b;
    return a
};
_.qm.prototype.Gc = function() {
    return this.A.frameName
};
_.sm = function(a, b) {
    a.A.rpcAddr = b;
    return a
};
_.qm.prototype.Hg = function() {
    return this.A.rpcAddr
};
_.tm = function(a, b) {
    a.A.retAddr = b;
    return a
};
_.um = function(a) {
    return a.A.retAddr
};
_.qm.prototype.Xe = function(a) {
    this.A.origin = a;
    return this
};
_.qm.prototype.Ca = function() {
    return this.A.origin
};
_.qm.prototype.xf = function(a) {
    this.A.setRpcReady = a;
    return this
};
_.qm.prototype.Ji = function(a) {
    this.A.context = a;
    return this
};
var vm = function(a, b) {
    a.A._rpcReadyFn = b
};
_.qm.prototype.Ea = function() {
    return this.A.iframeEl
};
var wm, Am;
wm = /^[\w\.\-]*$/;
_.xm = function(a) {
    return a.Uc === a.getContext().Uc
};
_.ym = function() {
    return !0
};
_.zm = function(a) {
    for (var b = _.Ja(), c = 0; c < a.length; c++)
        b[a[c]]=!0;
    return function(a) {
        return !!b[a.Uc]
    }
};
Am = function(a, b, c) {
    var d = pm[a];
    return function(a) {
        if (!b.nb() && (_.Na(this.origin === b.Uc, "Wrong origin " + this.origin + " != " + b.Uc), d && 0 < d.length)) {
            for (var f = this.callback, g = [], k = 0; k < d.length; k++)
                g.push(mm(d[k].call(b, a, b)));
            c || _.lm(g).then(f)
        }
    }
};
_.Bm = function(a, b, c) {
    _.Na("_default" != a, "Cannot update default api");
    om[a] = {
        map: b,
        filter: c
    }
};
_.Cm = function(a, b, c) {
    _.Na("_default" != a, "Cannot update default api");
    _.Ha(om, a, {
        map: {},
        filter: _.xm
    }).map[b] = c
};
_.Dm = function(a, b) {
    _.Ha(om, "_default", {
        map: {},
        filter: _.ym
    }).map[a] = b;
    _.ib(_.nm.A, function(c) {
        c.register(a, b, _.ym)
    })
};
_.Em = function() {
    return _.nm
};
_.Fm = function(a) {
    a = a || {};
    this.Zd=!1;
    this.R = _.Ja();
    this.A = _.Ja();
    this.V = a._window || _.Aa;
    this.C = this.V.location.href;
    this.da = (this.ia = _.Ta(this.C, "parent", "")) ? _.Ta(this.C, "pfname", "") : "";
    this.la = this.ia ? _.Ta(this.C, "id", "") : "";
    this.ce = _.Pl(this.la, this.da);
    this.Uc = _.Ki.Ca(this.C);
    if (this.la) {
        var b = new _.qm;
        _.sm(b, a._parentRpcAddr || "..");
        _.tm(b, a._parentRetAddr || this.la);
        b.Xe(_.Ki.Ca(_.Ta(this.C, "parent", this.C)));
        _.rm(b, this.da);
        this.B = this.zj(b.value())
    } else 
        this.B = null
};
_.h = _.Fm.prototype;
_.h.nb = function() {
    return this.Zd
};
_.h.ha = function() {
    if (!this.nb()) {
        for (var a = 0; a < this.A.length; a++)
            this.A[a].ha();
        this.Zd=!0
    }
};
_.h.Gc = function() {
    return this.ce
};
_.h.Ia = function() {
    return this.V
};
_.h.zn = _.q(9);
_.h.Np = function(a) {
    return this.R[a]
};
_.h.zj = function(a) {
    _.Na(!this.nb(), "Cannot attach iframe in disposed context");
    a = new _.qm(a);
    a.Hg() || _.sm(a, a.ca());
    _.um(a) || _.tm(a, "..");
    a.Ca() || a.Xe(_.Ki.Ca(a.getUrl()));
    a.Gc() || _.rm(a, _.Pl(a.ca(), this.ce));
    var b = a.Gc();
    if (this.A[b])
        return this.A[b];
    var c = a.Hg(), d = c;
    a.Ca() && (d = c + "|" + a.Ca());
    var e = _.um(a), f = _.hm(a);
    f || (f = (f = a.Ea()) && (f.getAttribute("data-postorigin") || f.src) || a.getUrl(), f = _.Ta(f, "rpctoken"));
    vm(a, _.el(d, e, f, a.A._popupWindow));
    d = ((window.gadgets || {}).rpc || {}).setAuthToken;
    f && d && d(c,
    f);
    var g = new _.Gm(this, c, b, a), k = a.A.messageHandlersFilter;
    _.ib(a.A.messageHandlers, function(a, b) {
        g.register(b, a, k)
    });
    a.A.setRpcReady && g.xf();
    _.Hm(g, "_g_rpcReady");
    return g
};
_.h.Hr = function(a) {
    _.rm(a, null);
    var b = a.ca();
    !b || wm.test(b)&&!this.Ia().document.getElementById(b) || (_.Qb("Ignoring requested iframe ID - " + b), a.A.id = null)
};
_.h.Te = function(a) {
    _.Na(!this.nb(), "Cannot open iframe in disposed context");
    var b = new _.qm(a);
    Im(this, b);
    var c = b.Gc();
    if (c && this.A[c])
        return this.A[c];
    this.Hr(b);
    c = b.getUrl();
    _.Na(c, "No url for new iframe");
    var d = b.A.queryParams || {};
    d.usegapi = "1";
    _.em(b, d);
    d = this.xa && this.xa(c, b);
    d || (d = b.A.where, _.Na(!!d, "No location for new iframe"), c = _.Zl(c, d, a), b.A.iframeEl = c, d = c.getAttribute("id"));
    _.sm(b, d).A.id = d;
    b.Xe(_.Ki.Ca(b.A.eurl || ""));
    this.Ra && this.Ra(b, b.Ea());
    c = this.zj(a);
    c.Vr && c.Vr(c, a);
    (a = b.A.onCreate) &&
    a(c);
    b.A.disableRelayOpen || c.jj("_open");
    return c
};
var Jm = function(a, b, c) {
    var d = b.A.canvasUrl;
    if (!d)
        return c;
    _.Na(!b.A.allowPost, "Post is not supported when using canvas url");
    var e = b.getUrl();
    _.Na(e && _.Ki.Ca(e) === a.Uc && _.Ki.Ca(d) === a.Uc, "Wrong origin for canvas or hidden url " + d);
    _.cm(b, d);
    _.gm(b);
    b.A.canvasUrl = null;
    return function(a) {
        var b = a.Ia(), d = b.location.hash, d = _.Yl(e) + (/#/.test(e) ? d.replace(/^#/, "&") : d);
        b.location.replace(d);
        c && c(a)
    }
}, Lm = function(a, b, c) {
    var d = b.A.relayOpen;
    if (d) {
        var e = a.B;
        d instanceof _.Gm ? (e = d, _.fm(b, 0)) : 0 < Number(d) && _.fm(b,
        Number(d) - 1);
        if (e) {
            _.Na(!!e.Ox, "Relaying iframe open is disabled");
            if (d = b.A.style)
                if (d = _.Km[d])
                    b.Ji(a), d(b.value()), b.Ji(null);
            b.A.openerIframe = null;
            c.resolve(e.Ox(b));
            return !0
        }
    }
    return !1
}, Pm = function(a, b, c) {
    var d = b.A.style;
    if (d)
        if (_.Na(!!_.Mm, "Defer style is disabled, when requesting style " + d), _.Nm[d])
            Im(a, b);
        else 
            return Om(d, function() {
                _.Na(!!_.Nm[d], "Fail to load style - " + d);
                c.resolve(a.open(b.value()))
            }), !0;
    return !1
};
_.Fm.prototype.open = function(a, b) {
    _.Na(!this.nb(), "Cannot open iframe in disposed context");
    var c = new _.qm(a), d = Jm(this, c, b), e = new km(d);
    (d = c.getUrl()) && _.cm(c, _.Yl(d));
    if (Lm(this, c, e) || Pm(this, c, e) || Lm(this, c, e))
        return e.promise;
    var f;
    c.A.waitForOnload && im(c.Ij(), function() {
        e.resolve(f)
    });
    f = this.Te(a);
    c.A.waitForOnload || e.resolve(f);
    return e.promise
};
_.Fm.prototype.U = _.q(10);
_.Gm = function(a, b, c, d) {
    this.Zd=!1;
    this.ub = a;
    this.wf = b;
    this.ce = c;
    this.Ya = d;
    this.Hi = _.um(this.Ya);
    this.Uc = this.Ya.Ca();
    this.LG = this.Ya.Ea();
    this.Rz = this.Ya.A.where;
    this.Ci = [];
    this.jj("_default");
    a = this.Ya.Qh() || [];
    for (b = 0; b < a.length; b++)
        this.jj(a[b]);
    this.ub.A[c] = this
};
_.h = _.Gm.prototype;
_.h.nb = function() {
    return this.Zd
};
_.h.ha = function() {
    if (!this.nb()) {
        for (var a = 0; a < this.Ci.length; a++)
            this.jg(this.Ci[a]);
        delete _.nm.A[this.Gc()];
        this.Zd=!0
    }
};
_.h.getContext = function() {
    return this.ub
};
_.h.Hg = function() {
    return this.wf
};
_.h.Gc = function() {
    return this.ce
};
_.h.Ea = function() {
    return this.LG
};
_.h.Oa = function() {
    return this.Rz
};
_.h.Sd = function(a) {
    this.Rz = a
};
_.h.xf = function() {
    (0, this.Ya.A._rpcReadyFn)()
};
_.h.vb = function(a, b) {
    this.Ya.value()[a] = b
};
_.h.Mj = function(a) {
    return this.Ya.value()[a]
};
_.h.jb = function() {
    return this.Ya.value()
};
_.h.ca = function() {
    return this.Ya.ca()
};
_.h.Ca = function() {
    return this.Uc
};
_.h.register = function(a, b, c) {
    _.Na(!this.nb(), "Cannot register handler on disposed iframe " + a);
    _.Na((c || _.xm)(this), "Rejecting untrusted message " + a);
    c = this.ce + ":" + this.ub.ce + ":" + a;
    1 == _.Ha(pm, c, []).push(b) && (this.Ci.push(a), _.Sk(c, Am(c, this, "_g_wasClosed" === a)))
};
_.h.jg = function(a, b) {
    var c = this.ce + ":" + this.ub.ce + ":" + a, d = pm[c];
    if (d) {
        if (b) {
            var e = _.Mb.call(d, b);
            0 <= e && d.splice(e, 1)
        } else 
            d.splice(0, d.length);
        0 == d.length && (e = _.Mb.call(this.Ci, a), 0 <= e && this.Ci.splice(e, 1), _.Tk(c))
    }
};
_.h.cF = function() {
    return this.Ci
};
_.h.jj = function(a) {
    this.Co = this.Co || [];
    if (!(0 <= _.Mb.call(this.Co, a))) {
        this.Co.push(a);
        a = om[a] || {
            map: {}
        };
        for (var b in a.map)
            _.La(a.map, b) && this.register(b, a.map[b], a.filter)
    }
};
_.h.send = function(a, b, c, d) {
    _.Na(!this.nb(), "Cannot send message to disposed iframe - " + a);
    _.Na((d || _.xm)(this), "Wrong target for message " + a);
    c = new km(c);
    _.Wk(this.wf, this.ub.ce + ":" + this.ce + ":" + a, c.resolve, b);
    return c.promise
};
_.Hm = function(a, b, c, d) {
    return a.send(b, c, d, _.ym)
};
_.Gm.prototype.eI = function(a) {
    return a
};
_.Gm.prototype.ping = _.q(11);
pm = _.Ja();
om = _.Ja();
_.nm = new _.Fm;
_.Dm("_g_rpcReady", _.Gm.prototype.xf);
_.Dm("_g_discover", _.Gm.prototype.cF);
_.Dm("_g_ping", _.Gm.prototype.eI);
var Om, Im;
_.Nm = _.Ja();
_.Km = _.Ja();
_.Mm = function(a) {
    return _.Nm[a]
};
Om = function(a, b) {
    _.Oa.load("gapi.iframes.style." + a, b)
};
Im = function(a, b) {
    var c = b.A.style;
    if (c) {
        _.dm(b, null);
        var d = _.Nm[c];
        _.Na(d, "No such style: " + c);
        b.Ji(a);
        d(b.value());
        b.Ji(null)
    }
};
var Qm, Rm;
Qm = {
    height: !0,
    width: !0
};
Rm = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i;
_.Sm = function(a) {
    "number" === typeof a && (a = String(a) + "px");
    return a
};
_.Gm.prototype.Ia = function() {
    if (!_.xm(this))
        return null;
    var a = this.Ya.A._popupWindow;
    if (a)
        return a;
    for (var b = this.wf.split("/"), a = this.getContext().Ia(), c = 0; c < b.length && a; c++) {
        var d = b[c];
        ".." === d ? a = a == a.parent ? a.opener : a.parent : a = a.frames[d]
    }
    return a
};
var Tm = function(a, b) {
    var c = a.B, d=!0;
    b.filter && (d = b.filter.call(b.Pe, b.params));
    return mm(d).then(function(d) {
        if (d && c) {
            var f;
            b.Rx && b.Rx.call(a, b.params);
            b.bz ? f = b.bz(b.params) : f = _.Hm(c, b.message, b.params);
            return b.oK ? f.then(function() {
                return !0
            }) : !0
        }
        return !1
    })
};
_.Fm.prototype.F = function(a, b, c) {
    a = Tm(this, {
        bz: function(a) {
            var b = _.nm.B;
            _.ib(_.nm.A, function(c) {
                c !== b && _.Hm(c, "_g_wasClosed", a)
            });
            var c = _.Hm(b, "_g_closeMe", a);
            _.Hm(b, "_g_wasClosed", a);
            return c
        },
        message: "_g_closeMe",
        params: a,
        Pe: c,
        filter: this.Np("onCloseSelfFilter")
    });
    b = new km(b);
    b.resolve(a);
    return b.promise
};
_.Fm.prototype.Y = function(a, b, c) {
    a = a || {};
    b = new km(b);
    b.resolve(Tm(this, {
        message: "_g_restyleMe",
        params: a,
        Pe: c,
        filter: this.Np("onRestyleSelfFilter"),
        oK: !0,
        Rx: this.ua
    }));
    return b.promise
};
_.Fm.prototype.ua = function(a) {
    "auto" === a.height && (a.height = _.gl.Ib())
};
_.Um = function(a) {
    var b = {};
    if (a)
        for (var c in a)
            _.La(a, c) && _.La(Qm, c) && Rm.test(a[c]) && (b[c] = a[c]);
    return b
};
_.h = _.Gm.prototype;
_.h.close = function(a, b) {
    return _.Hm(this, "_g_close", a, b)
};
_.h.Fi = function(a, b) {
    return _.Hm(this, "_g_restyle", a, b)
};
_.h.Gi = function(a, b) {
    return _.Hm(this, "_g_restyleDone", a, b)
};
_.h.AD = function(a) {
    return this.getContext().F(a, void 0, this)
};
_.h.HI = function(a) {
    if (a && "object" === typeof a)
        return this.getContext().Y(a, void 0, this)
};
_.h.II = function(a) {
    var b = this.Ya.A.onRestyle;
    b && b.call(this, a, this);
    a = a && "object" === typeof a ? _.Um(a) : {};
    (b = this.Ea()) && a && "object" === typeof a && (_.La(a, "height") && (a.height = _.Sm(a.height)), _.La(a, "width") && (a.width = _.Sm(a.width)), _.rl(a, b.style))
};
_.h.BD = function(a) {
    var b = this.Ya.A.onClose;
    b && b.call(this, a, this);
    this.yu && this.yu() || (a = this.Ea()) && a.parentNode && a.parentNode.removeChild(a);
    if (a = this.Ya.A.controller)
        b = {}, b.frameName = this.Gc(), _.Hm(a, "_g_disposeControl", b)
};
_.Fm.prototype.va = _.q(12);
_.Fm.prototype.pa = _.q(13);
_.Gm.prototype.By = _.q(14);
_.Gm.prototype.eh = function(a, b) {
    this.register("_g_wasClosed", a, b)
};
_.Gm.prototype.qK = function() {
    this.getContext().Ia().setTimeout((0, _.s)(function() {
        this.ha()
    }, this), 0)
};
_.Dm("_g_close", _.Gm.prototype.AD);
_.Dm("_g_closeMe", _.Gm.prototype.BD);
_.Dm("_g_restyle", _.Gm.prototype.HI);
_.Dm("_g_restyleMe", _.Gm.prototype.II);
_.Dm("_g_wasClosed", _.Gm.prototype.qK);

var Wm, Zm, bn, cn, ln, mn, on, pn, qn;
_.Vm = function(a, b) {
    a.A.onClose = b
};
Wm = function(a, b) {
    a.A.apis = b;
    return a
};
_.Xm = function(a, b) {
    a.A.messageHandlersFilter = b;
    return a
};
_.Ym = function(a, b) {
    a.A.messageHandlers = b;
    return a
};
Zm = function(a, b) {
    a.A.rpctoken = b;
    return a
};
_.$m = function(a, b) {
    a.A.where = b;
    return a
};
_.an = function(a, b) {
    a.A.anchor = b;
    return a
};
bn = function(a, b, c) {
    this.promise = a;
    this.resolve = b;
    this.reject = c
};
cn = function(a) {
    this.vd = a || {}
};
cn.prototype.value = function() {
    return this.vd
};
var dn = function(a) {
    var b = new cn;
    b.vd.role = a;
    return b
};
cn.prototype.rb = function(a) {
    this.vd.handler = a;
    return this
};
cn.prototype.ta = function() {
    return this.vd.handler
};
var en = function(a, b) {
    a.vd.filter = b;
    return a
}, fn = function(a, b) {
    a.vd.apis = b;
    return a
};
cn.prototype.Qh = function() {
    return this.vd.apis
};
var gn = function(a) {
    a.vd.runOnce=!0;
    return a
}, hn = function(a) {
    this.A = a || {}
};
hn.prototype.value = function() {
    return this.A
};
hn.prototype.getIframe = function() {
    return this.A.iframe
};
var jn = function(a, b) {
    a.A.role = b;
    return a
}, kn = function(a, b) {
    a.A.data = b;
    return a
};
hn.prototype.xf = function(a) {
    this.A.setRpcReady = a;
    return this
};
ln = function(a, b) {
    a.A.rpctoken = b;
    return a
};
mn = function(a) {
    a.A.selfConnect=!0;
    return a
};
_.nn = function() {
    var a, b, c = new _.Of(function(c, e) {
        a = c;
        b = e
    });
    return new bn(c, a, b)
};
on = /^https?:\/\/[^\/%\\?#\s]+$/i;
pn = {
    longdesc: !0,
    name: !0,
    src: !0,
    frameborder: !0,
    marginwidth: !0,
    marginheight: !0,
    scrolling: !0,
    align: !0,
    height: !0,
    width: !0,
    id: !0,
    "class": !0,
    title: !0,
    tabindex: !0,
    hspace: !0,
    vspace: !0,
    allowtransparency: !0
};
qn = function(a, b, c) {
    var d = a.wf, e = b.Hi;
    _.tm(_.sm(c, a.Hi + "/" + b.wf), e + "/" + d);
    _.rm(c, b.Gc()).Xe(b.Uc)
};
_.Fm.prototype.M = function(a, b) {
    var c = new hn(a), d = new hn(b), e = c.A.setRpcReady, f = c.getIframe(), g = d.getIframe();
    if (g) {
        var k = c.A.rpctoken, l = new _.qm;
        qn(f, g, l);
        kn(jn(ln(new hn(l.value()), k), c.A.role), c.A.data).xf(e);
        var m = new _.qm;
        qn(g, f, m);
        kn(jn(ln(new hn(m.value()), k), d.A.role), d.A.data).xf(!0);
        _.Hm(f, "_g_connect", l.value(), function() {
            e || _.Hm(g, "_g_connect", m.value())
        });
        e && _.Hm(g, "_g_connect", m.value())
    } else 
        d = {}, kn(jn(mn(new hn(d)), c.A.role), c.A.data), _.Hm(f, "_g_connect", d)
};
_.h = _.Gm.prototype;
_.h.DD = function(a) {
    var b, c = new _.qm(a);
    a = new hn(c.value());
    a.A.selfConnect ? b = this : (_.Na(on.test(c.Ca()), "Illegal origin for connected iframe - " + c.Ca()), b = this.ub.A[c.Gc()], b) ? c.A.setRpcReady && (b.xf(), _.Hm(b, "_g_rpcReady")) : (c = _.rm(_.tm(_.sm(Zm(new _.qm, _.hm(c)), c.Hg()), _.um(c)).Xe(c.Ca()), c.Gc()).xf(c.A.setRpcReady), b = this.ub.zj(c.value()));
    var c = this.ub, d = a.A.role;
    a = a.A.data;
    rn(c);
    d = d || "";
    _.Ha(c.K, d, []).push({
        Pe: b.Gc(),
        data: a
    });
    sn(b, a, c.N[d])
};
_.h.Vr = function(a, b) {
    if (!(new _.qm(b)).A._relayedDepth) {
        var c = {};
        mn(jn(new hn(c), "_opener"));
        _.Hm(a, "_g_connect", c)
    }
};
_.h.Ox = function(a) {
    var b = this, c = a.A.messageHandlers, d = a.A.messageHandlersFilter, e = a.A.onClose;
    _.Vm(_.Xm(_.Ym(a, null), null), null);
    _.nn();
    return _.Hm(this, "_g_open", a.value()).then(function(f) {
        var g = new _.qm(f[0]), k = g.Gc();
        f = new _.qm;
        var l = b.Hi, m = _.um(g);
        _.tm(_.sm(f, b.wf + "/" + g.Hg()), m + "/" + l);
        _.rm(f, k);
        f.Xe(g.Ca());
        Wm(f, g.Qh());
        Zm(f, _.hm(a));
        _.Ym(f, c);
        _.Xm(f, d);
        _.Vm(f, e);
        (g = b.ub.A[k]) || (g = b.ub.zj(f.value()));
        return g
    })
};
_.h.Hr = function(a) {
    var b = a.getUrl();
    _.Na(!b || _.tl.test(b), "Illegal url for new iframe - " + b);
    var c = a.Ij().value(), b = {}, d;
    for (d in c)
        _.La(c, d) && _.La(pn, d) && (b[d] = c[d]);
    _.La(c, "style") && (d = c.style, "object" === typeof d && (b.style = _.Um(d)));
    a.value().attributes = b
};
_.h.SH = function(a) {
    a = new _.qm(a);
    this.Hr(a);
    var b = a.A._relayedDepth || 0;
    a.A._relayedDepth = b + 1;
    a.A.openerIframe = this;
    _.nn();
    var c = _.hm(a);
    Zm(a, null);
    return this.ub.open(a.value()).then((0, _.s)(function(a) {
        var e = (new _.qm(a.jb())).Qh(), f = new _.qm;
        qn(a, this, f);
        0 == b && jn(new hn(f.value()), "_opener");
        f.xf(!0);
        Zm(f, c);
        _.Hm(a, "_g_connect", f.value());
        f = new _.qm;
        _.rm(_.tm(_.sm(Wm(f, e), a.Hg()), a.Hi), a.Gc()).Xe(a.Ca());
        return f.value()
    }, this))
};
var rn = function(a) {
    a.K || (a.K = _.Ja(), a.N = _.Ja())
};
_.Fm.prototype.G = function(a, b, c, d) {
    rn(this);
    "object" === typeof a ? (b = new cn(a), c = b.vd.role || "") : (b = en(fn(dn(a).rb(b), c), d), c = a);
    d = this.K[c] || [];
    a=!1;
    for (var e = 0; e < d.length&&!a; e++)
        sn(this.A[d[e].Pe], d[e].data, [b]), a = b.vd.runOnce;
    c = _.Ha(this.N, c, []);
    a || b.vd.dontWait || c.push(b)
};
_.Fm.prototype.ka = _.q(15);
var sn = function(a, b, c) {
    c = c || [];
    for (var d = 0; d < c.length; d++) {
        var e = c[d];
        if (e && a) {
            var f = e.vd.filter || _.xm;
            if (a && f(a)) {
                for (var f = e.Qh() || [], g = 0; g < f.length; g++)
                    a.jj(f[g]);
                e.ta() && e.ta()(a, b);
                e.vd.runOnce && (c.splice(d, 1), --d)
            }
        }
    }
};
_.Fm.prototype.D = function(a, b, c) {
    this.G(gn(en(fn(dn("_opener").rb(a), b), c)).value())
};
_.Gm.prototype.GI = function(a) {
    this.getContext().D(function(b) {
        b.send("_g_wasRestyled", a, void 0, _.ym)
    }, null, _.ym)
};
var tn = _.nm.B;
tn && tn.register("_g_restyleDone", _.Gm.prototype.GI, _.ym);
_.Dm("_g_connect", _.Gm.prototype.DD);
var un = {};
un._g_open = _.Gm.prototype.SH;
_.Bm("_open", un, _.ym);

_.C("gapi.iframes.create", _.Zl);
_.Gm.prototype.By = _.L(14, function(a, b) {
    this.register("_g_wasRestyled", a, b)
});
_.Fm.prototype.pa = _.L(13, function(a) {
    this.zn("onRestyleSelfFilter", a)
});
_.Fm.prototype.va = _.L(12, function(a) {
    this.zn("onCloseSelfFilter", a)
});
_.Gm.prototype.ping = _.L(11, function(a, b) {
    return _.Hm(this, "_g_ping", b, a)
});
_.Fm.prototype.U = _.L(10, function() {
    return this.B
});
_.Fm.prototype.zn = _.L(9, function(a, b) {
    this.R[a] = b
});
_.C("gapi.iframes.registerStyle", function(a, b) {
    _.Nm[a] = b
});
_.C("gapi.iframes.registerBeforeOpenStyle", function(a, b) {
    _.Km[a] = b
});
_.C("gapi.iframes.getStyle", _.Mm);
_.C("gapi.iframes.getBeforeOpenStyle", function(a) {
    return _.Km[a]
});
_.C("gapi.iframes.registerIframesApi", _.Bm);
_.C("gapi.iframes.registerIframesApiHandler", _.Cm);
_.C("gapi.iframes.getContext", _.Em);
_.C("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER", _.xm);
_.C("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER", _.ym);
_.C("gapi.iframes.makeWhiteListIframesFilter", _.zm);
_.C("gapi.iframes.Context", _.Fm);
_.C("gapi.iframes.Context.prototype.isDisposed", _.Fm.prototype.nb);
_.C("gapi.iframes.Context.prototype.getWindow", _.Fm.prototype.Ia);
_.C("gapi.iframes.Context.prototype.getFrameName", _.Fm.prototype.Gc);
_.C("gapi.iframes.Context.prototype.getGlobalParam", _.Fm.prototype.Np);
_.C("gapi.iframes.Context.prototype.setGlobalParam", _.Fm.prototype.zn);
_.C("gapi.iframes.Context.prototype.open", _.Fm.prototype.open);
_.C("gapi.iframes.Context.prototype.openChild", _.Fm.prototype.Te);
_.C("gapi.iframes.Context.prototype.getParentIframe", _.Fm.prototype.U);
_.C("gapi.iframes.Context.prototype.closeSelf", _.Fm.prototype.F);
_.C("gapi.iframes.Context.prototype.restyleSelf", _.Fm.prototype.Y);
_.C("gapi.iframes.Context.prototype.setCloseSelfFilter", _.Fm.prototype.va);
_.C("gapi.iframes.Context.prototype.setRestyleSelfFilter", _.Fm.prototype.pa);
_.C("gapi.iframes.Iframe", _.Gm);
_.C("gapi.iframes.Iframe.prototype.isDisposed", _.Gm.prototype.nb);
_.C("gapi.iframes.Iframe.prototype.getContext", _.Gm.prototype.getContext);
_.C("gapi.iframes.Iframe.prototype.getFrameName", _.Gm.prototype.Gc);
_.C("gapi.iframes.Iframe.prototype.getId", _.Gm.prototype.ca);
_.C("gapi.iframes.Iframe.prototype.register", _.Gm.prototype.register);
_.C("gapi.iframes.Iframe.prototype.unregister", _.Gm.prototype.jg);
_.C("gapi.iframes.Iframe.prototype.send", _.Gm.prototype.send);
_.C("gapi.iframes.Iframe.prototype.applyIframesApi", _.Gm.prototype.jj);
_.C("gapi.iframes.Iframe.prototype.getIframeEl", _.Gm.prototype.Ea);
_.C("gapi.iframes.Iframe.prototype.getSiteEl", _.Gm.prototype.Oa);
_.C("gapi.iframes.Iframe.prototype.setSiteEl", _.Gm.prototype.Sd);
_.C("gapi.iframes.Iframe.prototype.getWindow", _.Gm.prototype.Ia);
_.C("gapi.iframes.Iframe.prototype.getOrigin", _.Gm.prototype.Ca);
_.C("gapi.iframes.Iframe.prototype.close", _.Gm.prototype.close);
_.C("gapi.iframes.Iframe.prototype.restyle", _.Gm.prototype.Fi);
_.C("gapi.iframes.Iframe.prototype.restyleDone", _.Gm.prototype.Gi);
_.C("gapi.iframes.Iframe.prototype.registerWasRestyled", _.Gm.prototype.By);
_.C("gapi.iframes.Iframe.prototype.registerWasClosed", _.Gm.prototype.eh);
_.C("gapi.iframes.Iframe.prototype.getParam", _.Gm.prototype.Mj);
_.C("gapi.iframes.Iframe.prototype.setParam", _.Gm.prototype.vb);
_.C("gapi.iframes.Iframe.prototype.ping", _.Gm.prototype.ping);

_.Fm.prototype.ka = _.L(15, function(a, b) {
    var c = _.Ha(this.N, a, []);
    if (b)
        for (var d = 0, e=!1; !e && d < c.length; d++)
            c[d].Ic === b && (e=!0, c.splice(d, 1));
    else 
        c.splice(0, c.length)
});
_.C("gapi.iframes.Context.prototype.addOnConnectHandler", _.Fm.prototype.G);
_.C("gapi.iframes.Context.prototype.removeOnConnectHandler", _.Fm.prototype.ka);
_.C("gapi.iframes.Context.prototype.addOnOpenerHandler", _.Fm.prototype.D);
_.C("gapi.iframes.Context.prototype.connectIframes", _.Fm.prototype.M);

_.Ni = window.googleapis && window.googleapis.server || {};
_.I = _.I || {};
(function() {
    function a(a, b) {
        return String.fromCharCode(b)
    }
    var b = {
        0: !1,
        10: !0,
        13: !0,
        34: !0,
        39: !0,
        60: !0,
        62: !0,
        92: !0,
        8232: !0,
        8233: !0,
        65282: !0,
        65287: !0,
        65308: !0,
        65310: !0,
        65340: !0
    };
    _.I.escape = function(a, b) {
        if (a) {
            if ("string" === typeof a)
                return _.I.Ml(a);
            if ("Array" === typeof a)
                for (var e = 0, f = a.length; e < f; ++e)
                    a[e] = _.I.escape(a[e]);
            else if ("object" === typeof a && b) {
                e = {};
                for (f in a)
                    a.hasOwnProperty(f) && (e[_.I.Ml(f)] = _.I.escape(a[f], !0));
                return e
            }
        }
        return a
    };
    _.I.Ml = function(a) {
        if (!a)
            return a;
        for (var d = [], e, f, g = 0, k = a.length; g < k; ++g)
            e = a.charCodeAt(g), f = b[e], !0 === f ? d.push("&#", e, ";") : !1 !== f && d.push(a.charAt(g));
        return d.join("")
    };
    _.I.XT = function(b) {
        return b ? b.replace(/&#([0-9]+);/g, a) : b
    }
})();

_.I = _.I || {};
(function() {
    function a(b) {
        var c = "";
        if (3 == b.nodeType || 4 == b.nodeType)
            c = b.nodeValue;
        else if (b.innerText)
            c = b.innerText;
        else if (b.innerHTML)
            c = b.innerHTML;
        else if (b.firstChild) {
            c = [];
            for (b = b.firstChild; b; b = b.nextSibling)
                c.push(a(b));
            c = c.join("")
        }
        return c
    }
    _.I.createElement = function(a) {
        var c;
        if (!window.document.body || window.document.body.namespaceURI)
            try {
                c = window.document.createElementNS("http://www.w3.org/1999/xhtml", a)
        } catch (d) {}
        return c || window.document.createElement(a)
    };
    _.I.So = function(a) {
        var c = _.I.createElement("iframe");
        try {
            var d = ["<", "iframe"], e = a || {}, f;
            for (f in e)
                e.hasOwnProperty(f) && (d.push(" "), d.push(f), d.push('="'), d.push(_.I.Ml(e[f])), d.push('"'));
            d.push("></");
            d.push("iframe");
            d.push(">");
            var g = _.I.createElement(d.join(""));
            g && (!c || g.tagName == c.tagName && g.namespaceURI == c.namespaceURI) && (c = g)
        } catch (k) {}
        d = c;
        a = a || {};
        for (var l in a)
            a.hasOwnProperty(l) && (d[l] = a[l]);
        return c
    };
    _.I.Ul = function() {
        if (window.document.body)
            return window.document.body;
        try {
            var a = window.document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "body");
            if (a && 1 == a.length)
                return a[0]
        } catch (c) {}
        return window.document.documentElement || window.document
    };
    _.I.CS = function(b) {
        return a(b)
    }
})();

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

_.I = _.I || {};
(function() {
    var a = [];
    _.I.uT = function(b) {
        a.push(b)
    };
    _.I.IT = function() {
        for (var b = 0, c = a.length; b < c; ++b)
            a[b]()
    }
})();
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
        fb: function() {}
    }
}();
_.C("gadgets.config.register", _.Sb.register);
_.C("gadgets.config.get", _.Sb.get);
_.C("gadgets.config.init", _.Sb.fb);
_.C("gadgets.config.update", _.Sb.update);
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
ec.Ky = null;
ec.vx = null;
ec.Fm = null;
ec.frameElement = null;
ec = ec || {};
ec.Fs || (ec.Fs = function() {
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
        jv: function() {
            return "wpm"
        },
        A: function() {
            return !0
        },
        fb: function(f, g) {
            _.Sb.register("rpc", null, function(a) {
                "true" === String((a && a.rpc || {}).disableForceSecure) && (e=!1)
            });
            c = f;
            d = g;
            a(b);
            d("..", !0);
            return !0
        },
        ob: function(a) {
            d(a, !0);
            return !0
        },
        call: function(a, b, c) {
            var d = _.J.Of(a), e = _.J.bu(a);
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
ec.Ql || (ec.Ql = function() {
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
                var a = x.shift(), b = a.UJ;
                v.setup(a.Oi, ".." === b ? _.J.no : b, ".." === b ? "INNER" : "OUTER")
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
        v["sendMessage_" + (".." === a ? _.J.no : a) + "_" + d + "_" + (".." === a ? "INNER" : "OUTER")].call(v, (0, _.$b)(c), b);
        return !0
    }
    function g(a, b) {
        var c = (0, _.ac)(a), d = c._scr;
        d ? (p(d, !0), A[d]=!0, ".." !== d && k(d, !0)) : window.setTimeout(function() {
            n(c, b)
        }, 0)
    }
    function k(a, b) {
        var c = _.J.no, d = {};
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
        jv: function() {
            return "flash"
        },
        A: function() {
            return !0
        },
        fb: function(a, b) {
            n = a;
            p = b;
            return m=!0
        },
        ob: function(a, c) {
            x.push({
                Oi: c,
                UJ: a
            });
            null === v && null === t && (t = window.setTimeout(b, 100));
            return !0
        },
        call: f,
        YC: g,
        D: d,
        G: e
    }
}());
if (window.gadgets && window.gadgets.rpc)
    "undefined" != typeof _.J && _.J || (_.J = window.gadgets.rpc, _.J.config = _.J.config, _.J.register = _.J.register, _.J.jg = _.J.unregister, _.J.zy = _.J.registerDefault, _.J.bA = _.J.unregisterDefault, _.J.cv = _.J.forceParentVerifiable, _.J.call = _.J.call, _.J.Nj = _.J.getRelayUrl, _.J.Ze = _.J.setRelayUrl, _.J.wn = _.J.setAuthToken, _.J.Ak = _.J.setupReceiver, _.J.Ag = _.J.getAuthToken, _.J.Ar = _.J.removeReceiver, _.J.Ev = _.J.getRelayChannel, _.J.pn = _.J.receive, _.J.vy = _.J.receiveSameDomain, _.J.Ca = _.J.getOrigin,
    _.J.Of = _.J.getTargetOrigin, _.J.bu = _.J._getTargetWin, _.J.XC = _.J._parseSiblingId);
else {
    _.J = function() {
        function a(a, b) {
            if (!Z[a]) {
                var c = ta;
                b || (c = qa);
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
                Ua=!0
            }
            la || ("undefined" != typeof window.addEventListener ? window.addEventListener("unload", a, !1) : "undefined" != typeof window.attachEvent && window.attachEvent("onunload", a), la=!0)
        }
        function c(a, c, d, e, f) {
            A[c] && A[c] === d || (_.Ib("Invalid gadgets.rpc token. " +
            A[c] + " vs " + d), Ma(c, 2));
            f.onunload = function() {
                H[c]&&!Ua && (Ma(c, 1), _.J.Ar(c))
            };
            b();
            e = (0, _.ac)((0, window.decodeURIComponent)(e))
        }
        function d(b, c) {
            if (b && "string" === typeof b.s && "string" === typeof b.f && b.a instanceof Array)
                if (A[b.f] && A[b.f] !== b.t && (_.Ib("Invalid gadgets.rpc token. " + A[b.f] + " vs " + b.t), Ma(b.f, 2)), "__ack" === b.s)
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
            if (!0 !== H[a]) {
                "undefined" === typeof H[a] && (H[a] = 0);
                var c = g(a);
                ".." !== a && null == c ||!0 !== ta.ob(a, b)?!0 !== H[a] && 10 > H[a]++?window.setTimeout(function() {
                    k(a, b)
                }, 500) : (Z[a] = qa, H[a]=!0) : H[a]=!0
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
            "true" === String(b.useLegacyProtocol) && (ta = ec.Fm || qa, ta.fb(d, a))
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
                    if (!_.I)
                        break t;
                        d = window.document.getElementById(a);
                        if (!d)
                            throw Error("c`" + a);
                }
                d = d && d.src;
                b = b || _.J.Ca(d);
                m(a, b);
                b = _.I.Eb(d);
                n(a, c || b.rpctoken)
            }
        }
        var w = {}, y = {}, D = {}, A = {}, z = 0, G = {}, H = {}, U = {}, Z = {}, $ = {}, V = null, xa = null, P = window.top !== window.self, ma = window.name, Ma = function() {}, X = window.console, ea = X && X.log && function(a) {
            X.log(a)
        }
        || function() {},
        qa = function() {
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
        _.I && (U = _.I.Eb());
        var Ua=!1, la=!1, ta = function() {
            if ("flash" == U.rpctx)
                return ec.Ql;
            if ("rmr" == U.rpctx)
                return ec.Ky;
            var a = "function" === typeof window.postMessage ? ec.Fs: "object" === typeof window.postMessage ? ec.Fs: window.ActiveXObject ? ec.Ql ? ec.Ql: ec.vx ? ec.vx: ec.Fm: 0 < window.navigator.userAgent.indexOf("WebKit") ?
            ec.Ky: "Gecko" === window.navigator.product ? ec.frameElement: ec.Fm;
            a || (a = qa);
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
                "function" === typeof a.Ry && (Ma = a.Ry)
            },
            register: function(a, b) {
                if ("__cb" === a || "__ack" === a)
                    throw Error("d");
                if ("" === a)
                    throw Error("e");
                w[a] = b
            },
            jg: function(a) {
                if ("__cb" === a || "__ack" === a)
                    throw Error("f");
                if ("" === a)
                    throw Error("g");
                delete w[a]
            },
            zy: function(a) {
                w[""] = a
            },
            bA: function() {
                delete w[""]
            },
            cv: function() {},
            call: function(a, b, c, d) {
                a = a || "..";
                var e = "..";
                ".." === a ? e = ma : "/" == a.charAt(0) && (e = _.J.Ca(window.location.href), e = "/" + ma + (e ? "|" + e : ""));
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
                Z[a]) || null === f(a) || (k = ta), 0 === b.indexOf("legacy__") && (k = ta, g.s = b.substring(8), g.c = g.c ? g.c : z), g.g=!0, g.r = e, k ? (D[a] && (k = ec.Fm), !1 === k.call(a, e, g) && (Z[a] = qa, ta.call(a, e, g))): $[a] ? $[a].push(g): $[a] = [g]
            }, Nj: l, Ze : m, wn : n, Ak : t, Ag : function(a) {
                return A[a]
            }, Ar: function(a) {
                delete y[a];
                delete D[a];
                delete A[a];
                delete H[a];
                delete Z[a]
            }, Ev: function() {
                return ta.jv()
            }, pn: function(a, b) {
                4 < a.length ? ta.YC(a, d) : c.apply(null, a.concat(b))
            }, vy: function(a) {
                a.a = Array.prototype.slice.call(a.a);
                window.setTimeout(function() {
                    d(a)
                },
                0)
            }, Ca: e, Of : function(a) {
                var b = null, c = l(a);
                c ? b = c : (c = f(a)) ? b = c.origin : b = ".." == a ? U.parent : window.document.getElementById(a).src;
                return e(b)
            }, fb: function() {
                !1 === ta.fb(d, a) && (ta = qa);
                P ? t("..") : _.Sb.register("rpc", null, function(a) {
                    a = a.rpc || {};
                    p(a);
                    v(a)
                })
            }, bu: g, XC : f, A : "__ack", no : ma || "..", D : 0, C : 1, B : 2
        }
    }();
    _.J.fb()
};
_.J.config({
    Ry: function(a) {
        throw Error("h`" + a);
    }
});
_.Kb = _.Rb;
_.C("gadgets.rpc.config", _.J.config);
_.C("gadgets.rpc.register", _.J.register);
_.C("gadgets.rpc.unregister", _.J.jg);
_.C("gadgets.rpc.registerDefault", _.J.zy);
_.C("gadgets.rpc.unregisterDefault", _.J.bA);
_.C("gadgets.rpc.forceParentVerifiable", _.J.cv);
_.C("gadgets.rpc.call", _.J.call);
_.C("gadgets.rpc.getRelayUrl", _.J.Nj);
_.C("gadgets.rpc.setRelayUrl", _.J.Ze);
_.C("gadgets.rpc.setAuthToken", _.J.wn);
_.C("gadgets.rpc.setupReceiver", _.J.Ak);
_.C("gadgets.rpc.getAuthToken", _.J.Ag);
_.C("gadgets.rpc.removeReceiver", _.J.Ar);
_.C("gadgets.rpc.getRelayChannel", _.J.Ev);
_.C("gadgets.rpc.receive", _.J.pn);
_.C("gadgets.rpc.receiveSameDomain", _.J.vy);
_.C("gadgets.rpc.getOrigin", _.J.Ca);
_.C("gadgets.rpc.getTargetOrigin", _.J.Of);

var Li = _.Ki = _.Ki || {};
window.___jsl = window.___jsl || {};
Li.Go = {
    A: function() {
        return window.___jsl.bsh
    },
    uv: function() {
        return window.___jsl.h
    },
    Or: function(a) {
        window.___jsl.bsh = a
    },
    uJ: function(a) {
        window.___jsl.h = a
    }
};
_.Ti = function(a) {
    var b;
    if (b = _.E("enableMultilogin"))
        if (b = a("cookie_policy"))
            b = String(a("immediate") || ""), a = String(a("prompt") || ""), b=!("true" === b.toLowerCase() || "none" === a.toLowerCase());
    return b?!0 : !1
};
_.Ui = function(a, b, c) {
    a = String(a);
    if (null != (_.Ta(a, "authuser") || null) || null != (_.Ta(a, "hd") || null))
        return a;
    b = _.Qi(b);
    if (c) {
        var d = a, e = d.match(/^((https?:)?\/\/[^\/?#]*)?(\/[^\/?#]+)\/[0-9]+([\/][^?#]*)([?#].*)?$/);
        if (e && e[0]) {
            var f = e[1], g = e[4], k = e[5];
            e[3] == "/" + c && (d = (f || "") + (g || "/") + (k || ""))
        }
        if ((e = d.match(/^(((https?:)?\/\/[^\/?#]*)([\/][^?#]*)?|([\/][^?#]*))([?#].*)?$/)) && e[0]) {
            var f = e[2], l = e[4] || e[5], k = e[6];
            null != b && (d = (f || "") + "/" + c + "/" + (0, window.encodeURIComponent)(b) + (l || "/") + (k || ""));
            return d
        }
    }
    null ==
    b ? _.Ti(function(b) {
        return _.Ta(a, b) || null
    }) || (l = (0, window.encodeURIComponent)("authuser") + "=0") : l = b.match(/^([-a-z0-9]+[.])+[-a-z0-9]+$/) ? [(0, window.encodeURIComponent)("authuser") + "=", (0, window.encodeURIComponent)(String(b)), "&" + (0, window.encodeURIComponent)("hd") + "=", (0, window.encodeURIComponent)(b)].join("") : ["authuser=", (0, window.encodeURIComponent)(b)].join("");
    c = a.split("#");
    b = c[0].indexOf("?");
    0 > b ? c[0] = [c[0], "?", l].join("") : (d = [c[0]], b < c[0].length - 1 && d.push("&"), d.push(l), c[0] = d.join(""));
    return d = c.join("#")
};
_.google.qT = _.Ui;
_.google.Xp = _.Qi;
_.google.KS = _.Ri;
_.google.LS = _.Si;

_.Zi = function() {
    return Math.floor((new Date).getTime() / 1E3)
};
var aj, bj;
_.$i = function(a, b) {
    this.A = a;
    var c = b || {};
    this.D = c.sH;
    this.B = c.domain;
    this.C = c.path;
    this.G = c.YI
};
aj = /^[-+/_=.:|%&a-zA-Z0-9@]*$/;
bj = /^[A-Z_][A-Z0-9_]{0,63}$/;
_.$i.prototype.$f = function() {
    for (var a = this.A + "=", b = window.document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
        var d = b[c];
        if (0 == d.indexOf(a))
            return d.substr(a.length)
    }
};
_.$i.prototype.write = function(a, b) {
    if (!bj.test(this.A))
        throw "Invalid cookie name";
    if (!aj.test(a))
        throw "Invalid cookie value";
    var c = this.A + "=" + a;
    this.B && (c += ";domain=" + this.B);
    this.C && (c += ";path=" + this.C);
    var d = "number" === typeof b ? b: this.D;
    if (0 <= d) {
        var e = new Date;
        e.setSeconds(e.getSeconds() + d);
        c += ";expires=" + e.toUTCString()
    }
    this.G && (c += ";secure");
    window.document.cookie = c;
    return !0
};
_.$i.prototype.clear = function() {
    this.write("", 0)
};
_.$i.iterate = function(a) {
    for (var b = window.document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
        var d = b[c].split("="), e = d.shift();
        a(e, d.join("="))
    }
};
var dj;
_.cj = function(a) {
    this.A = a
};
dj = {};
_.cj.prototype.$f = function() {
    if (dj.hasOwnProperty(this.A))
        return dj[this.A]
};
_.cj.prototype.write = function(a) {
    dj[this.A] = a;
    return !0
};
_.cj.prototype.clear = function() {
    delete dj[this.A]
};
_.cj.iterate = function(a) {
    for (var b in dj)
        dj.hasOwnProperty(b) && a(b, dj[b])
};
_.ej = function(a) {
    this.B = a;
    this.A = window.sessionStorage
};
_.ej.prototype.$f = function() {
    return this.A && this.A.getItem(this.B)
};
_.ej.prototype.write = function(a) {
    try {
        this.A && this.A.setItem(this.B, a)
    } catch (b) {
        return !1
    }
    return !0
};
_.ej.prototype.clear = function() {
    this.A && this.A.removeItem(this.B)
};
_.ej.iterate = function(a) {
    if (window.sessionStorage)
        for (var b = 0, c = window.sessionStorage.length; b < c; ++b) {
            var d = window.sessionStorage.key(b);
            a(d, window.sessionStorage[d])
        }
};
for (var fj = 0; 64 > fj; ++fj);
var gj;
gj = [".APPS.GOOGLEUSERCONTENT.COM", "@DEVELOPER.GSERVICEACCOUNT.COM"];
_.hj = "https:" === window.location.protocol;
_.ij = _.hj || "http:" === window.location.protocol ? _.$i : _.cj;
_.jj = function(a) {
    a = a.toUpperCase();
    for (var b = 0, c = gj.length; b < c; ++b) {
        var d = a.split(gj[b]);
        2 == d.length && "" === d[1] && (a = d[0])
    }
    a = a.replace(/-/g, "_").toUpperCase();
    40 < a.length && (b = new _.Yi, b.xs(a), a = b.Ef().toUpperCase());
    return a
};
_.kj = function(a) {
    var b = a.substr(1), c = "", d = window.location.hostname;
    if ("" !== b) {
        c = (0, window.parseInt)(b, 10);
        if ((0, window.isNaN)(c))
            return null;
        b = d.split(".");
        if (b.length < c - 1)
            return null;
        b.length == c - 1 && (d = "." + d)
    } else 
        d = "";
    return {
        xb: "S" == a.charAt(0),
        domain: d,
        ud: c
    }
};
_.lj = function(a) {
    if (0 !== a.indexOf("GCSC"))
        return null;
    var b = {
        Bc: !1
    };
    a = a.substr(4);
    if (!a)
        return b;
    var c = a.charAt(0);
    a = a.substr(1);
    var d = a.lastIndexOf("_");
    if ( - 1 == d)
        return b;
    var e = _.kj(a.substr(d + 1));
    if (null == e)
        return b;
    a = a.substring(0, d);
    if ("_" !== a.charAt(0))
        return b;
    d = "E" === c && e.xb;
    return !d && ("U" !== c || e.xb) || d&&!_.hj ? b : {
        Bc: !0,
        xb: d,
        wu: a.substr(1),
        domain: e.domain,
        ud: e.ud
    }
};
var mj, nj, rj, sj, vj;
mj = _.Ja();
nj = _.Ja();
_.oj = _.Ja();
_.pj = _.Ja();
_.qj = null;
rj = "state code cookie_policy g_user_cookie_policy authuser prompt g-oauth-window status".split(" ");
sj = function(a) {
    this.B = a;
    this.A = null
};
sj.prototype.write = function(a) {
    var b = _.Ja(), c = _.Ja(), d;
    for (d in a)
        _.La(a, d) && (c[d] = a[d], b[d] = a[d]);
    d = 0;
    for (var e = rj.length; d < e; ++d)
        delete c[rj[d]];
    a = String(a.authuser || 0);
    d = _.Ja();
    d[a] = _.I.Eb("#" + _.tj(c));
    this.B.write((0, _.$b)(d));
    this.A = b
};
sj.prototype.$f = function() {
    return this.A
};
sj.prototype.clear = function() {
    this.B.clear();
    this.A = _.Ja()
};
_.uj = function(a) {
    if (!a)
        return null;
    "single_host_origin" !== a && (a = _.J.Ca(a));
    var b = window.location.hostname, c = b, d = _.hj;
    if ("single_host_origin" !== a) {
        c = a.split("://");
        if (2 == c.length)
            d = "https" === c.shift();
        else 
            return _.Qb("WARNING invalid cookie_policy: " + a), null;
        c = c[0]
    }
    if ( - 1 !== c.indexOf(":"))
        c = b = "";
    else {
        a = "." + c;
        if (b.lastIndexOf(a) !== b.length - a.length)
            return _.Qb("Invalid cookie_policy domain: " + c), null;
        c = a;
        b = c.split(".").length - 1
    }
    return {
        domain: c,
        xb: d,
        ud: b
    }
};
vj = function(a) {
    if (!a)
        return null;
    var b = a.client_id;
    if (!b)
        return null;
    b = _.jj(b);
    a = _.uj(a.cookie_policy);
    return a?!_.hj && a.xb ? (_.Qb("WARNING: https cookie_policy set for http domain"), null) : ["GCSC", a.xb ? "E": "U", "_", b, "_", a.xb ? "S": "H", a.ud].join("") : null
};
_.wj = function(a) {
    return a ? {
        domain: a.domain,
        path: "/",
        YI: a.xb
    } : null
};
_.xj = function(a) {
    var b = mj[a];
    b || (b = new sj(new _.cj(a)), mj[a] = b);
    return {
        ph: b,
        key: a
    }
};
_.yj = function(a, b) {
    var c = b ? nj: mj, d = b ? _.ij: _.ej, e = a && vj(a), f=!!e;
    a&&!a.g_user_cookie_policy && (d = _.cj, e = "token");
    if (!e)
        if (!b && _.qj)
            e = _.qj;
        else 
            return null;
    var g = c[e];
    if (!g) {
        g = _.lj(e);
        if (!("token" === e || g && g.Bc))
            return null;
        g = new d(e, _.wj(g));
        b || (g = new sj(g))
    }
    c[e] = g;
    return {
        ph: g,
        key: e,
        kE: f
    }
};
_.zj = function(a, b, c) {
    a = a && "token" !== a ? _.xj(a) : _.yj();
    if (!a)
        return null;
    if (c) {
        c = a.ph;
        _.Ja();
        var d = c.B.$f();
        c = null;
        try {
            c = (0, _.ac)(d)
        } catch (e) {}
        0 == c && (c = null);
        d = _.Qi() || "0";
        d = String(d);
        c = c && c[d]
    } else 
        c = a.ph.$f();
    c && c.expires_at && _.Zi() > c.expires_at && (a.ph.clear(), c = null);
    c && c.error&&!b && (c = null);
    return c
};
_.tj = function(a) {
    var b = "";
    if (!a)
        return b;
    for (var c in a)
        if ({}.hasOwnProperty.call(a, c)) {
            var d;
            d = a[c];
            if (null != d) {
                var e = [(0, window.encodeURIComponent)(c), "="];
                if (d instanceof Array) {
                    for (var f = [], g = 0; g < d.length; g++)
                        f.push((0, window.encodeURIComponent)(d[g]));
                        e.push(f.join("+"))
                    } else 
                        e.push((0, window.encodeURIComponent)(d));
                        d = e.join("")
                    } else 
                        d = "";
                        d && (b && (b += "&"), b += d)
        }
    return b
};
_.ej.iterate(function(a) {
    var b = _.lj(a);
    b && b.Bc && (mj[a] = new sj(new _.ej(a)))
});
_.ij.iterate(function(a) {
    mj[a] && (nj[a] = new _.ij(a, _.wj(_.lj(a))))
});

_.Aj = function() {
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
var Cj, Dj;
_.Bj = function(a) {
    this.A = a
};
Cj = /\s*;\s*/;
_.h = _.Bj.prototype;
_.h.isEnabled = function() {
    return window.navigator.cookieEnabled
};
_.h.set = function(a, b, c, d, e, f) {
    if (/[;=\s]/.test(a))
        throw Error("E`" + a);
    if (/[;\r\n]/.test(b))
        throw Error("F`" + b);
    _.ca(c) || (c =- 1);
    e = e ? ";domain=" + e : "";
    d = d ? ";path=" + d : "";
    f = f ? ";secure" : "";
    c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date((0, _.sa)() + 1E3 * c)).toUTCString();
    this.A.cookie = a + "=" + b + e + d + c + f
};
_.h.get = function(a, b) {
    for (var c = a + "=", d = (this.A.cookie || "").split(Cj), e = 0, f; f = d[e]; e++) {
        if (0 == f.lastIndexOf(c, 0))
            return f.substr(c.length);
        if (f == a)
            return ""
    }
    return b
};
_.h.remove = function(a, b, c) {
    var d = _.ca(this.get(a));
    this.set(a, "", 0, b, c);
    return d
};
_.h.dd = function() {
    return Dj(this).keys
};
_.h.vc = function() {
    return Dj(this).fA
};
_.h.isEmpty = function() {
    return !this.A.cookie
};
_.h.eb = function() {
    return this.A.cookie ? (this.A.cookie || "").split(Cj).length : 0
};
_.h.Jh = function(a) {
    for (var b = Dj(this).fA, c = 0; c < b.length; c++)
        if (b[c] == a)
            return !0;
    return !1
};
_.h.clear = function() {
    for (var a = Dj(this).keys, b = a.length - 1; 0 <= b; b--)
        this.remove(a[b])
    };
Dj = function(a) {
    a = (a.A.cookie || "").split(Cj);
    for (var b = [], c = [], d, e, f = 0; e = a[f]; f++)
        d = e.indexOf("="), - 1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    return {
        keys: b,
        fA: c
    }
};
_.Ej = new _.Bj(window.document);
_.Ej.B = 3950;

var Fj = function() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        n = m = 0
    }
    function b(a) {
        for (var b = g, c = 0; 64 > c; c += 4)
            b[c / 4] = a[c]<<24 | a[c + 1]<<16 | a[c + 2]<<8 | a[c + 3];
        for (c = 16; 80 > c; c++)
            a = b[c - 3]^b[c - 8]^b[c - 14]^b[c - 16], b[c] = (a<<1 | a>>>31) & 4294967295;
        a = e[0];
        for (var d = e[1], f = e[2], k = e[3], l = e[4], m, n, c = 0; 80 > c; c++)
            40 > c ? 20 > c ? (m = k^d & (f^k), n = 1518500249) : (m = d^f^k, n = 1859775393) : 60 > c ? (m = d & f | k & (d | f), n = 2400959708) : (m = d^f^k, n = 3395469782), m = ((a<<5 | a>>>27) & 4294967295) + m + l + n + b[c] & 4294967295,
            l = k, k = f, f = (d<<30 | d>>>2) & 4294967295, d = a, a = m;
        e[0] = e[0] + a & 4294967295;
        e[1] = e[1] + d & 4294967295;
        e[2] = e[2] + f & 4294967295;
        e[3] = e[3] + k & 4294967295;
        e[4] = e[4] + l & 4294967295
    }
    function c(a, c) {
        if ("string" === typeof a) {
            a = (0, window.unescape)((0, window.encodeURIComponent)(a));
            for (var d = [], e = 0, g = a.length; e < g; ++e)
                d.push(a.charCodeAt(e));
            a = d
        }
        c || (c = a.length);
        d = 0;
        if (0 == m)
            for (; d + 64 < c;)
                b(a.slice(d, d + 64)), d += 64, n += 64;
        for (; d < c;)
            if (f[m++] = a[d++], n++, 64 == m)
                for (m = 0, b(f); d + 64 < c;)
                    b(a.slice(d, d + 64)), d += 64, n += 64
    }
    function d() {
        var a = [],
        d = 8 * n;
        56 > m ? c(k, 56 - m) : c(k, 64 - (m - 56));
        for (var g = 63; 56 <= g; g--)
            f[g] = d & 255, d>>>=8;
        b(f);
        for (g = d = 0; 5 > g; g++)
            for (var l = 24; 0 <= l; l -= 8)
                a[d++] = e[g]>>l & 255;
        return a
    }
    for (var e = [], f = [], g = [], k = [128], l = 1; 64 > l; ++l)
        k[l] = 0;
    var m, n;
    a();
    return {
        reset: a,
        update: c,
        M: d,
        Ef: function() {
            for (var a = d(), b = "", c = 0; c < a.length; c++)
                b += "0123456789ABCDEF".charAt(Math.floor(a[c] / 16)) + "0123456789ABCDEF".charAt(a[c]%16);
            return b
        }
    }
};
var Gj = function() {
    var a = window.__OVERRIDE_SID;
    null == a && (a = (new _.Bj(window.document)).get("SID"));
    return !!a
}, Ij = function(a, b, c) {
    if (1 == (_.ha(c) ? 2 : 1))
        return Hj([b, a].join(" "));
    var d = [], e = [];
    (0, _.dd)(c || [], function(a) {
        e.push(a.key);
        d.push(a.value)
    });
    c = (new Date).getTime();
    var f = [], f = 0 == d.length ? [c, b, a]: [d.join(":"), c, b, a];
    a = Hj(f.join(" "));
    a = [c, a];
    0 == e.length || a.push(e.join(""));
    return a.join("_")
}, Hj = function(a) {
    var b = Fj();
    b.update(a);
    return b.Ef().toLowerCase()
};
_.Jj = {
    Dm: function(a) {
        var b = {
            SAPISIDHASH: !0,
            APISIDHASH: !0
        };
        return a && (a.OriginToken || a.Authorization && b[String(a.Authorization).split(" ")[0]])?!0 : !1
    },
    fH: Gj,
    YE: function() {
        var a = null;
        Gj() && (a = window.__PVT, null == a && (a = _.Aj.get("BEAT")));
        return a
    },
    Tl: function(a) {
        var b = _.Mi(String(window.location.href));
        if (Gj()) {
            var c = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:"), d = c ? window.__SAPISID: window.__APISID;
            null == d && (d = (new _.Bj(window.document)).get(c ? "SAPISID" : "APISID"));
            if (d)
                return [c ? "SAPISIDHASH": "APISIDHASH", Ij(b, d, a)].join(" ")
        }
        return null
    }
};

_.I = _.I || {};
_.I.gl = function(a, b, c, d) {
    "undefined" != typeof a.addEventListener ? a.addEventListener(b, c, d) : "undefined" != typeof a.attachEvent ? a.attachEvent("on" + b, c) : _.Jb("cannot attachBrowserEvent: " + b)
};
_.I.tI = function(a) {
    var b = window;
    b.removeEventListener ? b.removeEventListener("mousemove", a, !1) : b.detachEvent ? b.detachEvent("onmousemove", a) : _.Jb("cannot removeBrowserEvent: mousemove")
};

_.Kj = function() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        n = m = 0
    }
    function b(a) {
        for (var b = g, c = 0; 64 > c; c += 4)
            b[c / 4] = a[c]<<24 | a[c + 1]<<16 | a[c + 2]<<8 | a[c + 3];
        for (c = 16; 80 > c; c++)
            a = b[c - 3]^b[c - 8]^b[c - 14]^b[c - 16], b[c] = (a<<1 | a>>>31) & 4294967295;
        a = e[0];
        for (var d = e[1], f = e[2], k = e[3], l = e[4], m, n, c = 0; 80 > c; c++)
            40 > c ? 20 > c ? (m = k^d & (f^k), n = 1518500249) : (m = d^f^k, n = 1859775393) : 60 > c ? (m = d & f | k & (d | f), n = 2400959708) : (m = d^f^k, n = 3395469782), m = ((a<<5 | a>>>27) & 4294967295) + m + l + n + b[c] & 4294967295,
            l = k, k = f, f = (d<<30 | d>>>2) & 4294967295, d = a, a = m;
        e[0] = e[0] + a & 4294967295;
        e[1] = e[1] + d & 4294967295;
        e[2] = e[2] + f & 4294967295;
        e[3] = e[3] + k & 4294967295;
        e[4] = e[4] + l & 4294967295
    }
    function c(a, c) {
        if ("string" === typeof a) {
            a = (0, window.unescape)((0, window.encodeURIComponent)(a));
            for (var d = [], e = 0, g = a.length; e < g; ++e)
                d.push(a.charCodeAt(e));
            a = d
        }
        c || (c = a.length);
        d = 0;
        if (0 == m)
            for (; d + 64 < c;)
                b(a.slice(d, d + 64)), d += 64, n += 64;
        for (; d < c;)
            if (f[m++] = a[d++], n++, 64 == m)
                for (m = 0, b(f); d + 64 < c;)
                    b(a.slice(d, d + 64)), d += 64, n += 64
    }
    function d() {
        var a = [],
        d = 8 * n;
        56 > m ? c(k, 56 - m) : c(k, 64 - (m - 56));
        for (var g = 63; 56 <= g; g--)
            f[g] = d & 255, d>>>=8;
        b(f);
        for (g = d = 0; 5 > g; g++)
            for (var l = 24; 0 <= l; l -= 8)
                a[d++] = e[g]>>l & 255;
        return a
    }
    for (var e = [], f = [], g = [], k = [128], l = 1; 64 > l; ++l)
        k[l] = 0;
    var m, n;
    a();
    return {
        reset: a,
        update: c,
        M: d,
        Ef: function() {
            for (var a = d(), b = "", c = 0; c < a.length; c++)
                b += "0123456789ABCDEF".charAt(Math.floor(a[c] / 16)) + "0123456789ABCDEF".charAt(a[c]%16);
            return b
        }
    }
};
_.Lj = function() {
    function a(a) {
        var b = _.Kj();
        b.update(a);
        return b.Ef()
    }
    var b = window.crypto;
    if (b && "function" == typeof b.getRandomValues)
        return function() {
            var a = new window.Uint32Array(1);
            b.getRandomValues(a);
            return Number("0." + a[0])
        };
    var c = _.E("random/maxObserveMousemove");
    null == c && (c =- 1);
    var d = 0, e = Math.random(), f = 1, g = 1E6 * (window.screen.width * window.screen.width + window.screen.height), k = function(a) {
        a = a || window.event;
        var b = a.screenX + a.clientX<<16, b = b + (a.screenY + a.clientY), b = (new Date).getTime()%1E6 * b;
        f =
        f * b%g;
        0 < c&&++d == c && _.I.tI(k)
    };
    0 != c && _.I.gl(window, "mousemove", k, !1);
    var l = a(window.document.cookie + "|" + window.document.location + "|" + (new Date).getTime() + "|" + e);
    return function() {
        var b = f, b = b + (0, window.parseInt)(l.substr(0, 20), 16);
        l = a(l);
        return b / (g + Math.pow(16, 20))
    }
}();
_.C("shindig.random", _.Lj);
var Ed, Gd;
_.Cd = function() {};
_.Dd = function() {
    return _.Ad("Opera") || _.Ad("OPR")
};
Ed = function(a, b) {
    return a < b?-1 : a > b ? 1 : 0
};
_.Fd = function(a, b, c) {
    return 2 >= arguments.length ? _.ad.slice.call(a, b) : _.ad.slice.call(a, b, c)
};
Gd = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
_.Hd = function(a, b) {
    for (var c = 0, d = (0, _.Xc)(String(a)).split("."), e = (0, _.Xc)(String(b)).split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
        var k = d[g] || "", l = e[g] || "", m = RegExp("(\\d*)(\\D*)", "g"), n = RegExp("(\\d*)(\\D*)", "g");
        do {
            var p = m.exec(k) || ["", "", ""], v = n.exec(l) || ["", "", ""];
            if (0 == p[0].length && 0 == v[0].length)
                break;
            c = Ed(0 == p[1].length ? 0 : (0, window.parseInt)(p[1], 10), 0 == v[1].length ? 0 : (0, window.parseInt)(v[1], 10)) || Ed(0 == p[2].length, 0 == v[2].length) || Ed(p[2], v[2])
        }
        while (0 == c)
        }
    return c
};
_.Id = function(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)
            a[c] = d[c];
        for (var f = 0; f < Gd.length; f++)
            c = Gd[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};
_.Jd = function(a, b, c) {
    for (var d in a)
        b.call(c, a[d], d, a)
};
_.Kd = function(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)
            c[d] = a[d];
        return c
    }
    return []
};
_.Ld = function() {
    return _.Ad("Android")
};
_.Md = function() {
    return _.Ad("iPhone")&&!_.Ad("iPod")&&!_.Ad("iPad")
};
var Ud, Zd, ee, ie;
_.Nd = _.Dd();
_.M = _.Bd();
_.Od = _.Ad("Gecko")&&-1 == _.xd.toLowerCase().indexOf("webkit")&&!(_.Ad("Trident") || _.Ad("MSIE"));
_.Pd =- 1 != _.xd.toLowerCase().indexOf("webkit");
_.Qd = _.Pd && _.Ad("Mobile");
_.Rd = _.Ad("Macintosh");
_.Sd = _.Ad("Windows");
_.Td = _.Ad("Linux");
Ud = _.r.navigator || null;
_.Vd=!!Ud&&-1 != (Ud.appVersion || "").indexOf("X11");
_.Wd = _.Ld();
_.Xd = _.Md();
_.Yd = _.Ad("iPad");
Zd = function() {
    var a = _.r.document;
    return a ? a.documentMode : void 0
};
_.de = function() {
    var a = "", b;
    if (_.Nd && _.r.opera)
        return a = _.r.opera.version, _.Uc(a) ? a() : a;
    _.Od ? b = /rv\:([^\);]+)(\)|;)/ : _.M ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : _.Pd && (b = /WebKit\/(\S+)/);
    b && (a = (a = b.exec(_.xd)) ? a[1] : "");
    return _.M && (b = Zd(), b > (0, window.parseFloat)(a)) ? String(b) : a
}();
ee = {};
_.fe = function(a) {
    return ee[a] || (ee[a] = 0 <= _.Hd(_.de, a))
};
_.he = function(a) {
    return _.M && _.ge >= a
};
ie = _.r.document;
_.ge = ie && _.M ? Zd() || ("CSS1Compat" == ie.compatMode ? (0, window.parseInt)(_.de, 10) : 5) : void 0;

var bh, dh, eh;
_.$g = function(a) {
    return /^[\s\xa0]*$/.test(a)
};
_.ah = function(a) {
    return _.$g(null == a ? "" : String(a))
};
bh = function(a) {
    return Array.prototype.join.call(arguments, "")
};
_.ch = function(a, b) {
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) == c
};
dh = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
_.fh = function(a) {
    if (eh) {
        eh=!1;
        var b = _.r.location;
        if (b) {
            var c = b.href;
            if (c && (c = (c = _.fh(c)[3] || null) ? (0, window.decodeURI)(c) : c) && c != b.hostname)
                throw eh=!0, Error();
        }
    }
    return a.match(dh)
};
eh = _.Pd;
_.gh = function(a) {
    if (a[1]) {
        var b = a[0], c = b.indexOf("#");
        0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
        c = b.indexOf("?");
        0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0)
    }
    return a.join("")
};
_.hh = function(a, b, c) {
    if (_.ha(b))
        for (var d = 0; d < b.length; d++)
            _.hh(a, String(b[d]), c);
    else 
        null != b && c.push("&", a, "" === b ? "" : "=", (0, window.encodeURIComponent)(String(b)))
};
_.ih = function(a, b) {
    for (var c in b)
        _.hh(c, b[c], a);
    return a
};
_.jh = function(a, b) {
    _.ch(a, "/") && (a = a.substr(0, a.length - 1));
    _.Wc(b, "/") && (b = b.substr(1));
    return bh(a, "/", b)
};

var Mj;
Mj = function(a, b) {
    var c = _.I.So({
        id: a,
        name: a
    });
    c.style.width = "1px";
    c.style.height = "1px";
    c.style.position = "absolute";
    c.style.top = "-100px";
    var d;
    if (window.navigator) {
        d = window.navigator.userAgent || "";
        var e = window.navigator.product || "";
        d = 0 != d.indexOf("Opera")&&-1 == d.indexOf("WebKit") && "Gecko" == e && 0 < d.indexOf("rv:1.")
    } else 
        d=!1;
    c.src = d ? "about:blank" : b;
    c.tabIndex = "-1";
    window.document.body.appendChild(c);
    d && (c.src = b);
    return c
};
_.Nj = function() {
    function a() {
        return !!m("auth/useFirstPartyAuthV2")
    }
    function b(a, b, c, d) {
        var e = m("proxy");
        if (c ||!e)
            var e = m("root"), f = m("root-1p") || e, g = m("xd3"), e = (c || String(b ? f : e)) + g;
        (b = _.I.Eb().jsh || _.Ki.Go.uv()) && (e += (0 <= e.indexOf("?") ? "&" : "?") + "jsh=" + (0, window.encodeURIComponent)(b));
        m("push") && (e += (0 <= e.indexOf("?") ? "&" : "?") + "p=1");
        e += "#parent=" + (0, window.encodeURIComponent)(null != d ? String(d) : _.Ki.Ca(window.document.location.href));
        return e + ("&rpctoken=" + a)
    }
    function c(a, b, c, d) {
        var f = e(c, d);
        p[f] ||
        (c = Mj(f, b), _.J.register("ready:" + a, function() {
            _.J.jg("ready:" + a);
            if (!v[f]) {
                v[f]=!0;
                var b = x[f];
                x[f] = [];
                for (var c = 0, d = b.length; c < d; ++c) {
                    var e = b[c];
                    k(e.hh, e.AI, e.mc)
                }
            }
        }), _.J.Ak(f, b), p[f] = c)
    }
    function d(a, d) {
        var e = String(2147483647 * (0, _.Lj)() | 0), f = b(e, a, d);
        _.cc(function() {
            c(e, f, a, d)
        })
    }
    function e(a, c) {
        var d = b("", a, c, ""), e = n[d];
        e || (e = _.Kj(), e.update(d), e = e.Ef().toLowerCase(), e += Math.random(), n[d] = e);
        return "apiproxy" + e
    }
    function f(a) {
        if (!a)
            return null;
        var b = {}, c = a.headers || {}, d;
        for (d in c)({})
            .hasOwnProperty.call(c,
            d) && (b[d] = c[d]);
        b["Content-Type"] = "application/json";
        return [{
            key: "gapiRequest",
            params: {
                id: "gapiRequest",
                key: "gapiRequest",
                httpMethod: "POST",
                root: a.root,
                url: "/rpc",
                urlParams: a.urlParams,
                headers: b,
                clientName: a.clientName || null,
                clientVersion: a.clientVersion || null,
                body: a.requests || []
            }
        }
        ]
    }
    function g(a) {
        return function(b) {
            b = b.gapiRequest.data.body;
            var c = (0, _.ac)(b);
            if (c) {
                for (var d = {}, e = 0, f = c.length; e < f; ++e)
                    d[c[e].id] = c[e];
                a(d, b)
            } else 
                a(c, b)
        }
    }
    function k(a, b, c) {
        var k = void 0, m=!1;
        if ("makeRequest" !== a && "makeHttpRequests" !==
        a)
            throw 'only "makeRequest" and "makeHttpRequests" RPCs are implemented';
        "makeRequest" === a && (a = "makeHttpRequests", b = f(b), c = g(c));
        var n = function(a) {
            if (a) {
                if ("undefined" != typeof k && "undefined" != typeof a.root && k != a.root)
                    throw "all requests in a batch must have the same root URL";
                k = a.root || k;
                m = _.Jj.Dm(a.headers)
            }
        };
        if (b) {
            for (var G = _.E("client/jsonpOverride"), H = 0, U = b.length; H < U; ++H) {
                var Z = b[H];
                Z && (Z = Z.params, n(Z), G && l(Z, c))
            }
            if (G)
                return 
        }
        var $ = e(m, k);
        p[$] || d(m, k);
        v[$] ? _.J.call($, a, function(a) {
            if (this.f == $ &&
            this.t == _.J.Ag(this.f) && this.origin == _.J.Of(this.f)) {
                var b = (0, _.ac)(a);
                c(b, a)
            }
        }, b) : (x[$] || (x[$] = []), x[$].push({
            hh: a,
            AI: b,
            mc: c
        }))
    }
    function l(a, b) {
        if ("GET" != a.httpMethod)
            throw "JSONP supports GET methods only.";
        var c = "jpcb" + String(2147483647 * (0, _.Lj)() | 0), d = window.document.createElement("script"), e = window.document.getElementsByTagName("head")[0];
        window[c] = function(a) {
            b(a);
            try {
                delete window[c]
            } catch (f) {
                window[c] = void 0
            }
            window.setTimeout(function() {
                e.removeChild(d)
            }, 1)
        };
        var f = a.root || m("root"), g = a.urlParams;
        g.callback = c;
        f = _.jh(f, a.url);
        g = _.gh(_.ih([f], g));
        d.setAttribute("id", c);
        d.setAttribute("src", g);
        d.setAttribute("charset", "utf-8");
        e.appendChild(d)
    }
    function m(a) {
        return _.E("googleapis.config/" + a)
    }
    var n = {}, p = {}, v = {}, x = {};
    return {
        bl: function(b, c, d) {
            var e = d || "auto";
            b = b || {};
            if ("none" == e)
                return b;
            c = c || window.location.href;
            d = b.Authorization;
            var f = b.OriginToken;
            if (!d&&!f) {
                f = _.zj(void 0, void 0);
                !f && window.gapi.auth2 && "function" == typeof window.gapi.auth2._gt && (f = window.gapi.auth2._gt());
                f && f.access_token &&
                ("oauth2" == e || "auto" == e) && (d = String(f.token_type || "Bearer") + " " + f.access_token);
                if (f=!d)
                    f = (!!m("auth/useFirstPartyAuth") || "1p" == e) && "oauth2" != e;
                if (f && _.Jj.fH()) {
                    if (a()) {
                        d = m("primaryEmail");
                        var e = m("appDomain"), f = m("fogId"), g = [];
                        d && g.push({
                            key: "e",
                            value: d
                        });
                        e && g.push({
                            key: "a",
                            value: e
                        });
                        f && g.push({
                            key: "u",
                            value: f
                        });
                        d = _.Jj.Tl(g)
                    } else 
                        d = _.Jj.Tl();
                    d && (c = _.google.Xp(c), c = b["X-Goog-AuthUser"] || c, _.ah(c) && (!a() || a() && _.ah(m("primaryEmail")) && _.ah(m("appDomain")) && _.ah(m("fogId"))) && (c = "0"), _.ah(c) || (b["X-Goog-AuthUser"] = c))
                }
                d ? b.Authorization = d : !1 !== m("auth/useOriginToken") && (f = _.Jj.YE()) && (b.OriginToken = f)
            }
            return b
        },
        A: l,
        eg: k
    }
}();

var ___;
_.kc = window.tamings___ || [];
_.lc = window.caja___;
___ = window.___;
_.ya.pk = function() {
    var a = {}, b = [], c = function(a) {
        var b = {
            method: a.request.method,
            id: a.key
        };
        a.request.rpc && (b.params = a.request.rpc);
        return b
    };
    a.execute = function(a) {
        for (var e = {}, f = {}, g = 0, k = [], l = 0; l < b.length; l++) {
            var m = b[l].request.transport;
            f[m.name] || (k.push(m), g++);
            f[m.name] = f[m.name] || [];
            f[m.name].push(c(b[l]))
        }
        l = function(c) {
            c.error && (e.error = c.error);
            for (var f = 0; f < b.length; f++) {
                var k = b[f].key, l = c[k];
                l && (e[k] = l.error ? l : l.data || l.result)
            }
            g--;
            0 === g && a(e)
        };
        for (m = 0; m < k.length; m++)
            k[m].execute(f[k[m].name], l);
        0 == g && window.setTimeout(function() {
            a(e)
        }, 0)
    };
    a.add = function(c, e) {
        e && c && b.push({
            key: c,
            request: e
        });
        return a
    };
    return a
};
_.ya.Zk = function(a, b) {
    if ("newBatch" !== a) {
        for (var c = a.split("."), d = window.osapi, e = 0; e < c.length - 1; e++)
            d[c[e]] = d[c[e]] || {}, d = d[c[e]];
        var f = c[c.length - 1];
        d[f] ? (d.__dupwarn || _.Jb("Skipping duplicate osapi method definition " + a + " on transport " + b.name + "; others may exist, but suppressing warnings"), d.__dupwarn=!0) : (d[f] = function(c) {
            c = c || {};
            c.userId = c.userId || "@viewer";
            c.groupId = c.groupId || "@self";
            return new mc(a, b, c)
        }, "undefined" !== typeof _.kc && _.kc.push(function() {
            _.lc.markTameAsFunction(d[f], a)
        }))
    }
};
var mc = function(a, b, c) {
    this.method = a;
    this.transport = b;
    this.rpc = c
};
mc.prototype.execute = function(a) {
    var b = "undefined" !== typeof _.lc && _.lc.getUseless && _.lc.getUseless(), c = b ? _.lc.getUseless(): this, d = b ? _.lc.untame(a): a;
    a = _.ya.pk();
    a.add(this.method, this);
    a.execute(function(a) {
        a.error ? d.call(c, a.error) : d.call(c, a[c.method])
    })
};
_.C("osapi.newBatch.add", _.ya.pk.add);
_.C("osapi.newBatch.execute", _.ya.pk.execute);
_.C("osapi._registerMethod", _.ya.Zk);
_.C("osapi._BoundCall", mc);
_.C("osapi._BoundCall.prototype.execute", mc.prototype.execute);
var Oj = function(a) {
    a = a.split(".");
    for (var b = window.osapi || window, c; c = a.shift();)
        if (null != b[c])
            b = b[c];
        else 
            return null;
    return b
}, Pj = function(a, b) {
    var c = a.split("."), d = window;
    c[0]in d ||!d.execScript || d.execScript("var " + c[0]);
    for (var e; c.length && (e = c.shift());)
        c.length || void 0 === b ? d[e] ? d = d[e] : d = d[e] = {} : d[e] = b
};
var Rj, Tj, Wj, Xj, Yj, Sj, Zj, ak;
Rj = {};
Tj = function(a, b) {
    _.ya.Zk(a, {
        name: "googleapis",
        execute: Sj,
        root: b
    });
    var c = Oj(a);
    Pj(a, c);
    if (0 != a.indexOf("googleapis.")) {
        var d = a.substring(a.indexOf(".") + 1), e = d.lastIndexOf(".delete");
        - 1 != e && e + 7 == d.length && (d = d.replace(".delete", ".remove"));
        Pj("googleapis." + d, c)
    }
};
_.Uj = function(a) {
    for (var b in a)
        a.hasOwnProperty(b) && (Rj[b] = a[b])
};
_.Vj = function(a) {
    null == a ? _.Qj && delete _.Qj.key : (_.Qj = _.Qj || {}, _.Qj.key = a)
};
Wj = function(a, b) {
    if ("trace" != a)
        throw 'only the "trace" parameter may be set using this API';
    null == b ? _.Qj && delete _.Qj[a] : (_.Qj = _.Qj || {}, _.Qj[a] = b)
};
Xj = function(a) {
    a = a || {};
    if (window.navigator) {
        for (var b = ["appVersion", "platform", "userAgent"], c = [], d = 0; d < b.length; d++)
            window.navigator[b[d]] && c.push((0, window.encodeURIComponent)(b[d]) + "=" + (0, window.encodeURIComponent)(window.navigator[b[d]]));
        a["X-ClientDetails"] = c.join("&")
    }
    return a
};
Yj = function(a) {
    a.clientVersion = "1.0.0-alpha";
    _.Qj && (a.urlParams = _.Qj)
};
Sj = function(a, b) {
    for (var c = this.root || null, d = 0; d < a.length; d++) {
        var e = a[d], f;
        f = e.method;
        f = f.substring(0, f.indexOf("."));
        e.jsonrpc = "2.0";
        e.key = e.id;
        c = e.root || c;
        (f = Rj[f] || "v1", !e.apiVersion) && (e.apiVersion = f)
    }
    d = {};
    d = _.Nj.bl(d);
    d = Xj(d);
    c = {
        requests: a,
        headers: d,
        root: c
    };
    Yj(c);
    _.Nj.eg("makeRequest", c, b)
};
Zj = function(a, b) {
    for (var c = 0, d = a.length; c < d; c++) {
        var e = a[c];
        e.key = e.id;
        var f = e.params.headers || {}, f = _.Nj.bl(f), f = Xj(f);
        e.params.headers = f;
        Yj(e.params)
    }
    _.Nj.eg("makeHttpRequests", a, b)
};
ak = function() {
    var a = _.I.Eb(), b = {
        debug: "googleapis.config/debug"
    }, c;
    for (c in b)
        a[c] && _.eb(b[c], "true" == a[c]);
    for (var d in _.E("googleapis.config/methods"))
        Tj(d);
    _.E("googleapis.config/versions") && _.Uj(_.E("googleapis.config/versions"));
    _.E("googleapis.config/developerKey") && _.Vj(_.E("googleapis.config/developerKey"));
    _.ya.Zk("googleapis.newHttpRequest", {
        name: "googleapis",
        execute: Zj
    });
    Pj("googleapis.newHttpRequest", Oj("googleapis.newHttpRequest"))
};
ak();
var bk = function() {
    this.A = {};
    this.B = _.ya.pk()
};
bk.prototype.add = function(a, b, c) {
    this.A[a] = c;
    this.B.add(a, b);
    return this
};
bk.prototype.execute = function(a) {
    var b = this;
    this.B.execute(function(c) {
        var d = {}, e=!1, f;
        for (f in c)
            if (c.hasOwnProperty(f)) {
                var g = c[f], k = b.A[f];
                k ? k(g) : (d[f] = g, e=!0)
            }
        e && a && a(d)
    })
};
_.C("googleapis.ApiClient.register", Tj);
_.C("googleapis.ApiClient.setVersions", _.Uj);
_.C("googleapis.ApiClient.setDeveloperKey", _.Vj);
_.C("googleapis.ApiClient.setUrlParameter", Wj);
_.C("googleapis.ApiClient.init", ak);
_.C("googleapis.Batch", bk);
_.C("googleapis.Batch.prototype.add", bk.prototype.add);
_.C("googleapis.Batch.prototype.execute", bk.prototype.execute);
_.C("googleapis.init", function() {
    ak()
});
_.C("googleapis.newBatch", function() {
    return new bk
});
_.C("googleapis.newRequest", function(a, b, c) {
    b = b || {};
    var d = {
        name: "googleapis",
        execute: Sj,
        root: c
    }, e = _.ya.pk(), f = this;
    c = {};
    c.method = a;
    c.transport = d;
    c.rpc = b;
    c.execute = function(c) {
        e.add(a, {
            method: a,
            rpc: b,
            transport: d
        });
        e.execute(function(b) {
            b.error ? c.call(f, b.error) : c.call(f, b[a])
        })
    };
    return c
});
_.C("googleapis.register", function(a, b) {
    Tj(a, b)
});
_.C("googleapis.setUrlParameter", function(a, b) {
    Wj(a, b)
});
_.C("googleapis.setDeveloperKey", function(a) {
    _.Vj(a)
});
_.C("googleapis.setVersions", function(a) {
    _.Uj(a)
});

_.I = _.I || {};
_.I.Um = function(a, b, c) {
    for (var d = [], e = 2, f = arguments.length; e < f; ++e)
        d.push(arguments[e]);
    return function() {
        for (var c = d.slice(), e = 0, f = arguments.length; e < f; ++e)
            c.push(arguments[e]);
        return b.apply(a, c)
    }
};
_.I.ok = function(a) {
    var b, c, d = {};
    for (b = 0; c = a[b]; ++b)
        d[c] = c;
    return d
};

_.K.ra = _.K.ra || {};
_.K.ra.qD = function(a) {
    try {
        return !!a.document
    } catch (b) {}
    return !1
};
_.K.ra.Mv = function(a) {
    var b = a.parent;
    return a != b && _.K.ra.qD(b) ? _.K.ra.Mv(b) : a
};
_.K.ra.OS = function(a) {
    var b = a.userAgent || "";
    a = a.product || "";
    return 0 != b.indexOf("Opera")&&-1 == b.indexOf("WebKit") && "Gecko" == a && 0 < b.indexOf("rv:1.")
};

var Cq = function() {
    _.K.Pw++;
    return ["I", _.K.Pw, "_", (new Date).getTime()].join("")
}, Zq;
var Dq = function(a) {
    return a instanceof Array ? a.join(",") : a instanceof Object ? (0, _.$b)(a) : a
};
var Eq = function() {};
var Fq = function(a) {
    a && a.match(Gq) && _.eb("googleapis.config/gcv", a)
};
var Hq = function(a) {
    _.Ki.Go.uJ(a)
};
var Iq = function(a) {
    _.Ki.Go.Or(a)
};
_.Jq = function(a, b) {
    var c = b || {}, d;
    for (d in a)
        a.hasOwnProperty(d) && (c[d] = a[d]);
    return c
};
_.Kq = function(a, b, c, d, e) {
    var f = [], g;
    for (g in a)
        if (a.hasOwnProperty(g)) {
            var k = b, l = c, m = a[g], n = d, p = Lq(g);
            p[k] = p[k] || {};
            n = _.I.Um(n, m);
            m._iframe_wrapped_rpc_ && (n._iframe_wrapped_rpc_=!0);
            p[k][l] = n;
            f.push(g)
        }
    if (e)
        for (g in _.K.bi)
            _.K.bi.hasOwnProperty(g) && f.push(g);
    return f.join(",")
};
var Mq = function(a, b, c) {
    var d = {};
    if (a && a._methods) {
        a = a._methods.split(",");
        for (var e = 0; e < a.length; e++) {
            var f = a[e];
            d[f] = Nq(f, b, c)
        }
    }
    return d
};
var Oq = function(a) {
    if (a && a.disableMultiLevelParentRelay)
        a=!1;
    else {
        var b;
        if (b = _.Pc && _.Pc._open && "inline" != a.style&&!0 !== a.inline)
            a = a.container, b=!(a && ("string" == typeof a && window.document.getElementById(a) || window.document == (a.ownerDocument || a.document)));
        a = b
    }
    return a
};
var Pq = function(a, b) {
    var c = {}, d = b.params || {}, e;
    for (e in a)
        "#" == e.charAt(0) && (c[e.substring(1)] = a[e]), 0 == e.indexOf("fr-") && (c[e.substring(3)] = a[e]), "#" == d[e] && (c[e] = a[e]);
    for (var f in c)
        delete a["fr-" + f], delete a["#" + f], delete a[f];
    return c
};
var Qq = function(a) {
    if (":" == a.charAt(0)) {
        var b = _.E("iframes/" + a.substring(1));
        a = {};
        _.rl(b, a);
        (b = a.url) && (a.url = _.Xl(b));
        a.params || (a.params = {});
        return a
    }
    return {
        url: _.Xl(a)
    }
};
var Rq = function(a) {
    function b() {}
    b.prototype = Sq.prototype;
    a.prototype = new b
};
var Tq = function(a) {
    return _.K.Ek[a]
};
var Uq = function(a, b) {
    _.K.Ek[a] = b
};
var Wq = function(a) {
    a = a || {};
    "auto" === a.height && (a.height = _.gl.Ib());
    var b = window && Xq && Xq.ja();
    b ? b.Iy(a.width || 0, a.height || 0) : _.Pc && _.Pc._resizeMe && _.Pc._resizeMe(a)
};
var Yq = function(a) {
    Fq(a)
};
Zq = function(a) {
    var b = _.Ta(a.location.href, "urlindex");
    if (b = _.Ha(_.Ya, "fUrl", [])[b]) {
        var c = a.location.hash, b = b + (/#/.test(b) ? c.replace(/^#/, "&") : c);
        a.location.replace(b)
    }
};
_.$q = function() {
    return _.Aa.location.origin || _.Aa.location.protocol + "//" + _.Aa.location.host
};
if (window.ToolbarApi)
    Xq = window.ToolbarApi, Xq.ja = window.ToolbarApi.getInstance, Xq.prototype = window.ToolbarApi.prototype, _.h = Xq.prototype, _.h.Px = Xq.prototype.openWindow, _.h.zu = Xq.prototype.closeWindow, _.h.zz = Xq.prototype.setOnCloseHandler, _.h.ru = Xq.prototype.canClosePopup, _.h.Iy = Xq.prototype.resizeWindow;
else {
    var Xq = function() {}, ar = null;
    Xq.ja = function() {
        !ar && window.external && window.external.GTB_IsToolbar && (ar = new Xq);
        return ar
    };
    _.h = Xq.prototype;
    _.h.Px = function(a) {
        return window.external.GTB_OpenPopup &&
        window.external.GTB_OpenPopup(a)
    };
    _.h.zu = function(a) {
        window.external.GTB_ClosePopupWindow && window.external.GTB_ClosePopupWindow(a)
    };
    _.h.zz = function(a, b) {
        window.external.GTB_SetOnCloseHandler && window.external.GTB_SetOnCloseHandler(a, b)
    };
    _.h.ru = function(a) {
        return window.external.GTB_CanClosePopup && window.external.GTB_CanClosePopup(a)
    };
    _.h.Iy = function(a, b) {
        return window.external.GTB_ResizeWindow && window.external.GTB_ResizeWindow(a, b)
    };
    window.ToolbarApi = Xq;
    window.ToolbarApi.getInstance = Xq.ja
};
var br = function() {
    _.J.register("_noop_echo", function() {
        this.callback(_.K.VE(_.K.Uf[this.f]))
    })
}, cr = function() {
    window.setTimeout(function() {
        _.J.call("..", "_noop_echo", _.K.WH)
    }, 0)
}, Nq = function(a, b, c) {
    var d = function(d) {
        var f = Array.prototype.slice.call(arguments, 0), g = f[f.length - 1];
        if ("function" === typeof g) {
            var k = g;
            f.pop()
        }
        f.unshift(b, a, k, c);
        _.J.call.apply(_.J, f)
    };
    d._iframe_wrapped_rpc_=!0;
    return d
}, Lq = function(a) {
    _.K.rn[a] || (_.K.rn[a] = {}, _.J.register(a, function(b, c) {
        var d = this.f;
        if (!("string" != typeof b ||
        b in{}
        || d in{})) {
            var e = this.callback, f = _.K.rn[a][d], g;
            f && Object.hasOwnProperty.call(f, b) ? g = f[b] : Object.hasOwnProperty.call(_.K.bi, a) && (g = _.K.bi[a]);
            if (g)
                return d = Array.prototype.slice.call(arguments, 1), g._iframe_wrapped_rpc_ && e && d.push(e), g.apply({}, d)
        }
        _.Ib(['Unregistered call in window "', window.name, '" for method "', a, '", via proxyId "', b, '" from frame "', d, '".'].join(""));
        return null
    }));
    return _.K.rn[a]
};
_.K.nD = function(a, b, c) {
    var d = Array.prototype.slice.call(arguments);
    _.K.Bv(function(a) {
        a.sameOrigin && (d.unshift("/" + a.claimedOpenerId + "|" + window.location.protocol + "//" + window.location.host), _.J.call.apply(_.J, d))
    })
};
_.K.oI = function(a, b) {
    _.J.register(a, b)
};
var Gq = /^[-_.0-9A-Za-z]+$/, dr = {
    open: "open",
    onready: "ready",
    close: "close",
    onresize: "resize",
    onOpen: "open",
    onReady: "ready",
    onClose: "close",
    onResize: "resize",
    onRenderStart: "renderstart"
}, er = {
    onBeforeParentOpen: "beforeparentopen"
}, fr = {
    onOpen: function(a) {
        var b = a.jb();
        a.Ed(b.container || b.element);
        return a
    },
    onClose: function(a) {
        a.remove()
    }
};
_.K.Ij = function(a) {
    var b = _.Ja();
    _.rl(_.Ll, b);
    _.rl(a, b);
    return b
};
var Sq = function(a, b, c, d, e, f, g, k) {
    this.config = Qq(a);
    this.openParams = this.qk = b || {};
    this.params = c || {};
    this.methods = d;
    this.Hn=!1;
    gr(this, b.style);
    this.oj = {};
    hr(this, function() {
        var a;
        (a = this.qk.style) && _.K.Ek[a] ? a = _.K.Ek[a] : a ? (_.Jb(['Missing handler for style "', a, '". Continuing with default handler.'].join("")), a = null) : a = fr;
        if (a) {
            var b;
            if ("function" === typeof a)
                b = a(this);
            else {
                var c = {};
                for (b in a) {
                    var d = a[b];
                    c[b] = "function" === typeof d ? _.I.Um(a, d, this) : d
                }
                b = c
            }
            for (var g in e)
                a = b[g], "function" === typeof a &&
                ir(this, e[g], _.I.Um(b, a))
        }
        f && ir(this, "close", f)
    });
    this.vf = this.ac = g;
    this.gr = (k || []).slice();
    g && this.gr.unshift(g.ca())
};
Sq.prototype.jb = function() {
    return this.qk
};
Sq.prototype.Fe = function() {
    return this.params
};
Sq.prototype.cm = function() {
    return this.methods
};
Sq.prototype.Jb = function() {
    return this.vf
};
var gr = function(a, b) {
    if (!a.Hn) {
        var c = b&&!_.K.Ek[b] && _.K.Uo[b];
        c ? (a.To = [], c(function() {
            a.Hn=!0;
            for (var b = 0, c = a.To.length; b < c; ++b)
                a.To[b].call(a)
        })) : a.Hn=!0
    }
}, hr = function(a, b) {
    a.Hn ? b.call(a) : a.To.push(b)
};
Sq.prototype.Nb = function(a, b) {
    hr(this, function() {
        ir(this, a, b)
    })
};
var ir = function(a, b, c) {
    a.oj[b] = a.oj[b] || [];
    a.oj[b].push(c)
};
Sq.prototype.fh = function(a, b) {
    hr(this, function() {
        var c = this.oj[a];
        if (c)
            for (var d = 0, e = c.length; d < e; ++d)
                if (c[d] === b) {
                    c.splice(d, 1);
                    break
                }
    })
};
Sq.prototype.je = function(a, b) {
    var c, d = this.oj[a];
    if (d)
        for (var e = Array.prototype.slice.call(arguments, 1), f = 0, g = d.length; f < g; ++f)
            try {
                c = d[f].apply({}, e)
    } catch (k) {
        _.Ib(['Exception when calling callback "', a, '" with exception "', k.name, ": ", k.message, '".'].join(""))
    }
    return c
};
var jr = function(a) {
    return "number" == typeof a ? {
        value: a,
        Ep: a + "px"
    } : "100%" == a ? {
        value: 100,
        Ep: "100%",
        gx: !0
    } : null
}, kr = function(a, b, c, d, e, f, g) {
    Sq.call(this, a, b, c, d, dr, e, f, g);
    this.id = b.id || Cq();
    this.B = b.rpctoken && String(b.rpctoken) || Math.round(1E9 * (0, _.Lj)());
    this.D = Pq(this.params, this.config);
    this.yp = {};
    hr(this, function() {
        this.je("open");
        _.Jq(this.yp, this)
    })
};
Rq(kr);
_.h = kr.prototype;
_.h.Ed = function(a, b) {
    if (!this.config.url)
        return _.Ib("Cannot open iframe, empty URL."), this;
    var c = this.id;
    _.K.Uf[c] = this;
    var d = _.Jq(this.methods);
    d._ready = this.cn;
    d._close = this.close;
    d._open = this.it;
    d._resizeMe = this.jt;
    d._renderstart = this.Kx;
    var e = this.D;
    this.B && (e.rpctoken = this.B);
    e._methods = _.Kq(d, c, "", this, !0);
    this.C = a = "string" === typeof a ? window.document.getElementById(a) : a;
    d = {};
    d.id = c;
    if (b) {
        d.attributes = b;
        var f = b.style;
        if ("string" === typeof f) {
            var g;
            if (f) {
                g = [];
                for (var f = f.split(";"), k = 0, l = f.length; k <
                l; ++k) {
                    var m = f[k];
                    if (0 != m.length || k + 1 != l)
                        m = m.split(":"), 2 == m.length && m[0].match(/^[ a-zA-Z_-]+$/) && m[1].match(/^[ +.%0-9a-zA-Z_-]+$/) ? g.push(m.join(":")) : _.Ib(['Iframe style "', f[k], '" not allowed.'].join(""))
                    }
                g = g.join(";")
            } else 
                g = "";
            b.style = g
        }
    }
    this.jb().allowPost && (d.allowPost=!0);
    d.queryParams = this.params;
    d.fragmentParams = e;
    d.paramsSerializer = Dq;
    this.A = _.Zl(this.config.url, a, d);
    e = this.A.getAttribute("data-postorigin") || this.A.src;
    _.K.Uf[c] = this;
    _.J.wn(this.id, this.B);
    _.J.Ze(this.id, e);
    return this
};
_.h.Lc = function(a, b) {
    this.yp[a] = b
};
_.h.ca = function() {
    return this.id
};
_.h.Ea = function() {
    return this.A
};
_.h.Oa = function() {
    return this.C
};
_.h.Sd = function(a) {
    this.C = a
};
_.h.cn = function(a) {
    var b = Mq(a, this.id, "");
    this.vf && "function" == typeof this.methods._ready && (a._methods = _.Kq(b, this.vf.ca(), this.id, this, !1), this.methods._ready(a));
    _.Jq(a, this);
    _.Jq(b, this);
    this.je("ready", a)
};
_.h.Kx = function(a) {
    this.je("renderstart", a)
};
_.h.close = function(a) {
    a = this.je("close", a);
    delete _.K.Uf[this.id];
    return a
};
_.h.remove = function() {
    var a = window.document.getElementById(this.id);
    a && a.parentNode && a.parentNode.removeChild(a)
};
_.h.it = function(a) {
    var b = Mq(a.params, this.id, a.proxyId);
    delete a.params._methods;
    "_parent" == a.openParams.anchor && (a.openParams.anchor = this.C);
    if (Oq(a.openParams))
        new lr(a.url, a.openParams, a.params, b, b._onclose, this, a.openedByProxyChain);
    else {
        var c = new kr(a.url, a.openParams, a.params, b, b._onclose, this, a.openedByProxyChain), d = this;
        hr(c, function() {
            var a = {
                childId: c.ca()
            }, f = c.yp;
            f._toclose = c.close;
            a._methods = _.Kq(f, d.id, c.id, c, !1);
            b._onopen(a)
        })
    }
};
_.h.jt = function(a) {
    if (void 0 === this.je("resize", a) && this.A) {
        var b = jr(a.width);
        null != b && (this.A.style.width = b.Ep);
        a = jr(a.height);
        null != a && (this.A.style.height = a.Ep);
        this.A.parentElement && (null != b && b.gx || null != a && a.gx) && (this.A.parentElement.style.display = "block")
    }
};
var lr = function(a, b, c, d, e, f, g) {
    Sq.call(this, a, b, c, d, er, e, f, g);
    this.url = a;
    this.A = null;
    this.rr = Cq();
    hr(this, function() {
        var a;
        this.je("beforeparentopen");
        var b = _.Jq(this.methods);
        b._onopen = this.RH;
        b._ready = this.cn;
        b._onclose = this.QH;
        this.params._methods = _.Kq(b, "..", this.rr, this, !0);
        b = {};
        for (a in this.params)
            b[a] = Dq(this.params[a]);
        var c = this.config.url;
        if (this.qk.hideUrlFromParent) {
            a = window.name;
            var d = c, c = _.El(this.config.url, this.params, {}, Dq), e = b, b = {};
            b._methods = e._methods;
            b["#opener"] = e["#opener"];
            b["#urlindex"] = e["#urlindex"];
            b["#opener"] && void 0 != e["#urlindex"] ? (b["#opener"] = a + "," + b["#opener"], a = d) : (d = _.Ha(_.Ya, "fUrl", []), e = d.length, d[e] = c, _.Ya.rUrl = Zq, b["#opener"] = a, b["#urlindex"] = e, a = _.Ki.Ca(_.Aa.location.href), c = _.E("iframes/relay_url_" + (0, window.encodeURIComponent)(a)) || "/_/gapi/sibling/1/frame.html", a = a + c);
            c = a
        }
        _.Pc._open({
            url: c,
            openParams: this.qk,
            params: b,
            proxyId: this.rr,
            openedByProxyChain: this.gr
        })
    })
};
Rq(lr);
lr.prototype.B = function() {
    return this.A
};
lr.prototype.RH = function(a) {
    this.A = a.childId;
    var b = Mq(a, "..", this.A);
    _.Jq(b, this);
    this.close = b._toclose;
    _.K.Uf[this.A] = this;
    this.vf && this.methods._onopen && (a._methods = _.Kq(b, this.vf.ca(), this.A, this, !1), this.methods._onopen(a))
};
lr.prototype.cn = function(a) {
    var b = String(this.A), c = Mq(a, "..", b);
    _.Jq(a, this);
    _.Jq(c, this);
    this.je("ready", a);
    this.vf && this.methods._ready && (a._methods = _.Kq(c, this.vf.ca(), b, this, !1), this.methods._ready(a))
};
lr.prototype.QH = function(a) {
    if (this.vf && this.methods._onclose)
        this.methods._onclose(a);
    else 
        return a = this.je("close", a), delete _.K.Uf[this.A], a
};
var mr = function(a, b, c, d, e, f, g) {
    Sq.call(this, a, b, c, d, er, f, g);
    this.id = b.id || Cq();
    this.B = e;
    d._close = this.close;
    this.onClosed = this.A;
    this.jA = 0;
    hr(this, function() {
        this.je("beforeparentopen");
        var b = _.Jq(this.methods);
        this.params._methods = _.Kq(b, "..", this.rr, this, !0);
        b = {};
        b.queryParams = this.params;
        a = _.Ql(_.Ba, this.config.url, this.id, b);
        var c = e.Px(a);
        this.canAutoClose = function(a) {
            a(e.ru(c))
        };
        e.zz(c, this);
        this.jA = c
    })
};
Rq(mr);
mr.prototype.close = function(a) {
    a = this.je("close", a);
    this.B.zu(this.jA);
    return a
};
mr.prototype.A = function() {
    this.je("close")
};
(function() {
    _.K.Uf = {};
    _.K.Ek = {};
    _.K.Uo = {};
    _.K.Pw = 0;
    _.K.rn = {};
    _.K.bi = {};
    _.K.gn = null;
    _.K.fn = [];
    _.K.WH = function(a) {
        var b=!1;
        try {
            if (null != a)
                var e = window.parent.frames[a.id], b = e.iframer.id == a.id && e.iframes.openedId_(_.Pc.id)
        } catch (f) {}
        try {
            _.K.gn = {
                origin: this.origin,
                referer: this.referer,
                claimedOpenerId: a && a.id,
                claimedOpenerProxyChain: a && a.proxyChain || [],
                sameOrigin: b
            };
            for (a = 0; a < _.K.fn.length; ++a)
                _.K.fn[a](_.K.gn);
            _.K.fn = []
        } catch (g) {}
    };
    _.K.VE = function(a) {
        var b = a && a.vf, e = null;
        b && (e = {}, e.id = b.ca(), e.proxyChain =
        a.gr);
        return e
    };
    br();
    if (window.parent != window) {
        var a = _.I.Eb();
        a.gcv && Fq(a.gcv);
        var b = a.jsh;
        b && Hq(b);
        _.Jq(Mq(a, "..", ""), _.Pc);
        _.Jq(a, _.Pc);
        cr()
    }
    _.K.ta = Tq;
    _.K.rb = Uq;
    _.K.tJ = Yq;
    _.K.resize = Wq;
    _.K.zE = function(a) {
        return _.K.Uo[a]
    };
    _.K.Rr = function(a, b) {
        _.K.Uo[a] = b
    };
    _.K.Hy = Wq;
    _.K.EJ = Yq;
    _.K.Cm = {};
    _.K.Cm.get = Tq;
    _.K.Cm.set = Uq;
    _.K.cD = function(a, b) {
        Lq(a);
        _.K.bi[a] = b || window[a]
    };
    _.K.rS = function(a) {
        delete _.K.bi[a]
    };
    _.K.open = function(a, b, e, f, g, k) {
        3 == arguments.length ? f = {} : 4 == arguments.length && "function" === typeof f &&
        (g = f, f = {});
        var l = "bubble" === b.style && Xq ? Xq.ja(): null;
        return l ? new mr(a, b, e, f, l, g, k) : Oq(b) ? new lr(a, b, e, f, g, k) : new kr(a, b, e, f, g, k)
    };
    _.K.close = function(a, b) {
        _.Pc && _.Pc._close && _.Pc._close(a, b)
    };
    _.K.ready = function(a, b, e) {
        2 == arguments.length && "function" === typeof b && (e = b, b = {});
        var f = a || {};
        "height"in f || (f.height = _.gl.Ib());
        f._methods = _.Kq(b || {}, "..", "", _.Pc, !0);
        _.Pc && _.Pc._ready && _.Pc._ready(f, e)
    };
    _.K.Bv = function(a) {
        _.K.gn ? a(_.K.gn) : _.K.fn.push(a)
    };
    _.K.TH = function(a) {
        return !!_.K.Uf[a]
    };
    _.K.FE = function() {
        return ["https://ssl.gstatic.com/gb/js/",
        _.E("googleapis.config/gcv")].join("")
    };
    _.K.ry = function(a) {
        var b = {
            mouseover: 1,
            mouseout: 1
        };
        if (_.Pc._event)
            for (var e = 0; e < a.length; e++) {
                var f = a[e];
                f in b && _.I.gl(window.document, f, function(a) {
                    _.Pc._event({
                        event: a.type,
                        timestamp: (new Date).getTime()
                    })
                }, !0)
            }
    };
    _.K.wJ = Hq;
    _.K.Or = Iq;
    _.K.px = Eq;
    _.K.Uw = _.Pc
})();
_.C("iframes.allow", _.K.cD);
_.C("iframes.callSiblingOpener", _.K.nD);
_.C("iframes.registerForOpenedSibling", _.K.oI);
_.C("iframes.close", _.K.close);
_.C("iframes.getGoogleConnectJsUri", _.K.FE);
_.C("iframes.getHandler", _.K.ta);
_.C("iframes.getDeferredHandler", _.K.zE);
_.C("iframes.getParentInfo", _.K.Bv);
_.C("iframes.iframer", _.K.Uw);
_.C("iframes.open", _.K.open);
_.C("iframes.openedId_", _.K.TH);
_.C("iframes.propagate", _.K.ry);
_.C("iframes.ready", _.K.ready);
_.C("iframes.resize", _.K.resize);
_.C("iframes.setGoogleConnectJsVersion", _.K.tJ);
_.C("iframes.setBootstrapHint", _.K.Or);
_.C("iframes.setJsHint", _.K.wJ);
_.C("iframes.setHandler", _.K.rb);
_.C("iframes.setDeferredHandler", _.K.Rr);
_.C("IframeBase", Sq);
_.C("IframeBase.prototype.addCallback", Sq.prototype.Nb);
_.C("IframeBase.prototype.getMethods", Sq.prototype.cm);
_.C("IframeBase.prototype.getOpenerIframe", Sq.prototype.Jb);
_.C("IframeBase.prototype.getOpenParams", Sq.prototype.jb);
_.C("IframeBase.prototype.getParams", Sq.prototype.Fe);
_.C("IframeBase.prototype.removeCallback", Sq.prototype.fh);
_.C("Iframe", kr);
_.C("Iframe.prototype.close", kr.prototype.close);
_.C("Iframe.prototype.exposeMethod", kr.prototype.Lc);
_.C("Iframe.prototype.getId", kr.prototype.ca);
_.C("Iframe.prototype.getIframeEl", kr.prototype.Ea);
_.C("Iframe.prototype.getSiteEl", kr.prototype.Oa);
_.C("Iframe.prototype.openInto", kr.prototype.Ed);
_.C("Iframe.prototype.remove", kr.prototype.remove);
_.C("Iframe.prototype.setSiteEl", kr.prototype.Sd);
_.C("Iframe.prototype.addCallback", kr.prototype.Nb);
_.C("Iframe.prototype.getMethods", kr.prototype.cm);
_.C("Iframe.prototype.getOpenerIframe", kr.prototype.Jb);
_.C("Iframe.prototype.getOpenParams", kr.prototype.jb);
_.C("Iframe.prototype.getParams", kr.prototype.Fe);
_.C("Iframe.prototype.removeCallback", kr.prototype.fh);
_.C("IframeProxy", lr);
_.C("IframeProxy.prototype.getTargetIframeId", lr.prototype.B);
_.C("IframeProxy.prototype.addCallback", lr.prototype.Nb);
_.C("IframeProxy.prototype.getMethods", lr.prototype.cm);
_.C("IframeProxy.prototype.getOpenerIframe", lr.prototype.Jb);
_.C("IframeProxy.prototype.getOpenParams", lr.prototype.jb);
_.C("IframeProxy.prototype.getParams", lr.prototype.Fe);
_.C("IframeProxy.prototype.removeCallback", lr.prototype.fh);
_.C("IframeWindow", mr);
_.C("IframeWindow.prototype.close", mr.prototype.close);
_.C("IframeWindow.prototype.onClosed", mr.prototype.A);
_.C("iframes.util.getTopMostAccessibleWindow", _.K.ra.Mv);
_.C("iframes.handlers.get", _.K.Cm.get);
_.C("iframes.handlers.set", _.K.Cm.set);
_.C("iframes.resizeMe", _.K.Hy);
_.C("iframes.setVersionOverride", _.K.EJ);
Sq.prototype.send = function(a, b, c) {
    _.K.Xy(this, a, b, c)
};
_.Pc.send = function(a, b, c) {
    _.K.Xy(_.Pc, a, b, c)
};
Sq.prototype.register = function(a, b) {
    var c = this;
    c.Nb(a, function(a) {
        b.call(c, a)
    })
};
_.K.Xy = function(a, b, c, d) {
    var e = [];
    void 0 !== c && e.push(c);
    d && e.push(function(a) {
        d.call(this, [a])
    });
    a[b] && a[b].apply(a, e)
};
_.K.Bf = function() {
    return !0
};
_.C("iframes.CROSS_ORIGIN_IFRAMES_FILTER", _.K.Bf);
_.C("IframeBase.prototype.send", Sq.prototype.send);
_.C("IframeBase.prototype.register", Sq.prototype.register);
_.C("Iframe.prototype.send", kr.prototype.send);
_.C("Iframe.prototype.register", kr.prototype.register);
_.C("IframeProxy.prototype.send", lr.prototype.send);
_.C("IframeProxy.prototype.register", lr.prototype.register);
_.C("IframeWindow.prototype.send", mr.prototype.send);
_.C("IframeWindow.prototype.register", mr.prototype.register);
_.C("iframes.iframer.send", _.K.Uw.send);

_.ne = function(a, b) {
    var c;
    t: {
        c = a.length;
        for (var d = _.ja(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) {
                c = e;
                break t
            }
        c =- 1
    }
    return 0 > c ? null : _.ja(a) ? a.charAt(c) : a[c]
};
_.oe = function(a, b) {
    for (var c = a.split("."), d = b || _.r, e; e = c.shift();)
        if (null != d[e])
            d = d[e];
        else 
            return null;
    return d
};
_.pe = function(a, b) {
    return 1 == _.ad.splice.call(a, b, 1).length
};
_.qe = function(a, b) {
    var c = (0, _.bd)(a, b), d;
    (d = 0 <= c) && _.pe(a, c);
    return d
};
_.re = function() {
    this.Zd = this.Zd;
    this.Ra = this.Ra
};
_.re.prototype.Zd=!1;
_.re.prototype.nb = function() {
    return this.Zd
};
_.re.prototype.ha = function() {
    this.Zd || (this.Zd=!0, this.W())
};
_.te = function(a, b) {
    var c = _.ra(_.se, b);
    a.Ra || (a.Ra = []);
    a.Ra.push(_.ca(void 0) ? (0, _.s)(c, void 0) : c)
};
_.re.prototype.W = function() {
    if (this.Ra)
        for (; this.Ra.length;)
            this.Ra.shift()()
};
_.se = function(a) {
    a && "function" == typeof a.ha && a.ha()
};
_.ue = function(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.bh=!1;
    this.Jy=!0
};
_.ue.prototype.W = function() {};
_.ue.prototype.ha = function() {};
_.ue.prototype.stopPropagation = function() {
    this.bh=!0
};
_.ue.prototype.preventDefault = function() {
    this.defaultPrevented=!0;
    this.Jy=!1
};
var ve = function(a) {
    ve[" "](a);
    return a
};
ve[" "] = _.Cd;
var xe=!_.M || _.he(9), ye=!_.M || _.he(9), ze = _.M&&!_.fe("9");
!_.Pd || _.fe("528");
_.Od && _.fe("1.9b") || _.M && _.fe("8") || _.Nd && _.fe("9.5") || _.Pd && _.fe("528");
_.Od&&!_.fe("8") || _.M && _.fe("9");
_.Ae = _.M ? "focusin" : "DOMFocusIn";
_.Be = _.M ? "focusout" : "DOMFocusOut";
_.Ce = _.Pd ? "webkitTransitionEnd" : _.Nd ? "otransitionend" : "transitionend";
_.De = function(a, b) {
    _.ue.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey=!1;
    this.state = null;
    this.hn=!1;
    this.A = null;
    a && this.fb(a, b)
};
_.u(_.De, _.ue);
var Ee = [1, 4, 2];
_.De.prototype.fb = function(a, b) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
        if (_.Od) {
            var e;
            t:
            {
                try {
                    ve(d.nodeName);
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
    this.offsetX = _.Pd || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = _.Pd || void 0 !== a.offsetY ? a.offsetY : a.layerY;
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY :
    a.pageY;
    this.screenX = a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.hn = _.Rd ? a.metaKey : a.ctrlKey;
    this.state = a.state;
    this.A = a;
    a.defaultPrevented && this.preventDefault()
};
_.Fe = function(a) {
    return (xe ? 0 == a.A.button : "click" == a.type?!0 : !!(a.A.button & Ee[0]))&&!(_.Pd && _.Rd && a.ctrlKey)
};
_.De.prototype.stopPropagation = function() {
    _.De.J.stopPropagation.call(this);
    this.A.stopPropagation ? this.A.stopPropagation() : this.A.cancelBubble=!0
};
_.De.prototype.preventDefault = function() {
    _.De.J.preventDefault.call(this);
    var a = this.A;
    if (a.preventDefault)
        a.preventDefault();
    else if (a.returnValue=!1, ze)
        try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                a.keyCode =- 1
    } catch (b) {}
};
_.De.prototype.nE = function() {
    return this.A
};
_.De.prototype.W = function() {};
var Ge, Ie;
Ge = "closure_listenable_" + (1E6 * Math.random() | 0);
_.He = function(a) {
    return !(!a ||!a[Ge])
};
Ie = 0;
var Je = function(a, b, c, d, e) {
    this.Xg = a;
    this.A = null;
    this.src = b;
    this.type = c;
    this.tl=!!d;
    this.Ic = e;
    this.key=++Ie;
    this.Di = this.ql=!1
}, Ke = function(a) {
    a.Di=!0;
    a.Xg = null;
    a.A = null;
    a.src = null;
    a.Ic = null
};
var Le = function(a) {
    this.src = a;
    this.A = {};
    this.B = 0
}, Ne, Me;
Le.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.A[f];
    a || (a = this.A[f] = [], this.B++);
    var g = Me(a, b, d, e);
    - 1 < g ? (b = a[g], c || (b.ql=!1)) : (b = new Je(b, this.src, f, !!d, e), b.ql = c, a.push(b));
    return b
};
Le.prototype.remove = function(a, b, c, d) {
    a = a.toString();
    if (!(a in this.A))
        return !1;
    var e = this.A[a];
    b = Me(e, b, c, d);
    return - 1 < b ? (Ke(e[b]), _.pe(e, b), 0 == e.length && (delete this.A[a], this.B--), !0) : !1
};
Ne = function(a, b) {
    var c = b.type;
    if (!(c in a.A))
        return !1;
    var d = _.qe(a.A[c], b);
    d && (Ke(b), 0 == a.A[c].length && (delete a.A[c], a.B--));
    return d
};
_.Oe = function(a, b, c, d, e) {
    a = a.A[b.toString()];
    b =- 1;
    a && (b = Me(a, c, d, e));
    return - 1 < b ? a[b] : null
};
Me = function(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.Di && f.Xg == b && f.tl==!!c && f.Ic == d)
            return e
    }
    return - 1
};
var Pe, Qe, Re, Ve, We, af, $e, Xe, bf;
Pe = "closure_lm_" + (1E6 * Math.random() | 0);
Qe = {};
Re = 0;
_.N = function(a, b, c, d, e) {
    if (_.ha(b)) {
        for (var f = 0; f < b.length; f++)
            _.N(a, b[f], c, d, e);
        return null
    }
    c = _.Se(c);
    return _.He(a) ? a.P(b, c, d, e) : _.Te(a, b, c, !1, d, e)
};
_.Te = function(a, b, c, d, e, f) {
    if (!b)
        throw Error("k");
    var g=!!e, k = _.Ue(a);
    k || (a[Pe] = k = new Le(a));
    c = k.add(b, c, d, e, f);
    if (c.A)
        return c;
    d = Ve();
    c.A = d;
    d.src = a;
    d.Xg = c;
    a.addEventListener ? a.addEventListener(b.toString(), d, g) : a.attachEvent(We(b.toString()), d);
    Re++;
    return c
};
Ve = function() {
    var a = Xe, b = ye ? function(c) {
        return a.call(b.src, b.Xg, c)
    }
    : function(c) {
        c = a.call(b.src, b.Xg, c);
        if (!c)
            return c
    };
    return b
};
_.Ye = function(a, b, c, d, e) {
    if (_.ha(b))
        for (var f = 0; f < b.length; f++)
            _.Ye(a, b[f], c, d, e);
    else 
        c = _.Se(c), _.He(a) ? a.Ka(b, c, d, e) : a && (a = _.Ue(a)) && (b = _.Oe(a, b, c, !!d, e)) && _.Ze(b)
};
_.Ze = function(a) {
    if (_.Vc(a) ||!a || a.Di)
        return !1;
    var b = a.src;
    if (_.He(b))
        return Ne(b.Be, a);
    var c = a.type, d = a.A;
    b.removeEventListener ? b.removeEventListener(c, d, a.tl) : b.detachEvent && b.detachEvent(We(c), d);
    Re--;
    (c = _.Ue(b)) ? (Ne(c, a), 0 == c.B && (c.src = null, b[Pe] = null)) : Ke(a);
    return !0
};
We = function(a) {
    return a in Qe ? Qe[a] : Qe[a] = "on" + a
};
af = function(a, b, c, d) {
    var e = 1;
    if (a = _.Ue(a))
        if (b = a.A[b.toString()])
            for (b = b.concat(), a = 0; a < b.length; a++) {
                var f = b[a];
                f && f.tl == c&&!f.Di && (e&=!1 !== $e(f, d))
            }
    return Boolean(e)
};
$e = function(a, b) {
    var c = a.Xg, d = a.Ic || a.src;
    a.ql && _.Ze(a);
    return c.call(d, b)
};
Xe = function(a, b) {
    if (a.Di)
        return !0;
    if (!ye) {
        var c = b || _.oe("window.event"), d = new _.De(c, this), e=!0;
        if (!(0 > c.keyCode || void 0 != c.returnValue)) {
            t:
            {
                var f=!1;
                if (0 == c.keyCode)
                    try {
                        c.keyCode =- 1;
                        break t
                } catch (g) {
                    f=!0
                }
                if (f || void 0 == c.returnValue)
                    c.returnValue=!0
            }
            c = [];
            for (f = d.currentTarget; f; f = f.parentNode)
                c.push(f);
            for (var f = a.type, k = c.length - 1; !d.bh && 0 <= k; k--)
                d.currentTarget = c[k], e&=af(c[k], f, !0, d);
            for (k = 0; !d.bh && k < c.length; k++)
                d.currentTarget = c[k], e&=af(c[k], f, !1, d)
            }
        return e
    }
    return $e(a, new _.De(b, this))
};
_.Ue = function(a) {
    a = a[Pe];
    return a instanceof Le ? a : null
};
bf = "__closure_events_fn_" + (1E9 * Math.random()>>>0);
_.Se = function(a) {
    if (_.Uc(a))
        return a;
    a[bf] || (a[bf] = function(b) {
        return a.handleEvent(b)
    });
    return a[bf]
};
_.me(function(a) {
    Xe = a(Xe)
});
_.cf = function() {
    _.re.call(this);
    this.Be = new Le(this);
    this.ir = this;
    this.qd = null
};
_.u(_.cf, _.re);
_.cf.prototype[Ge]=!0;
_.h = _.cf.prototype;
_.h.Wh = function() {
    return this.qd
};
_.h.jh = _.q(1);
_.h.addEventListener = function(a, b, c, d) {
    _.N(this, a, b, c, d)
};
_.h.removeEventListener = function(a, b, c, d) {
    _.Ye(this, a, b, c, d)
};
_.h.dispatchEvent = function(a) {
    var b, c = this.Wh();
    if (c)
        for (b = []; c; c = c.Wh()
            )b.push(c);
    var c = this.ir, d = a.type || a;
    if (_.ja(a))
        a = new _.ue(a, c);
    else if (a instanceof _.ue)
        a.target = a.target || c;
    else {
        var e = a;
        a = new _.ue(d, c);
        _.Id(a, e)
    }
    var e=!0, f;
    if (b)
        for (var g = b.length - 1; !a.bh && 0 <= g; g--)
            f = a.currentTarget = b[g], e = df(f, d, !0, a) && e;
    a.bh || (f = a.currentTarget = c, e = df(f, d, !0, a) && e, a.bh || (e = df(f, d, !1, a) && e));
    if (b)
        for (g = 0; !a.bh && g < b.length; g++)
            f = a.currentTarget = b[g], e = df(f, d, !1, a) && e;
    return e
};
_.h.W = function() {
    _.cf.J.W.call(this);
    if (this.Be) {
        var a = this.Be, b = 0, c;
        for (c in a.A) {
            for (var d = a.A[c], e = 0; e < d.length; e++)
                ++b, Ke(d[e]);
            delete a.A[c];
            a.B--
        }
    }
    this.qd = null
};
_.h.P = function(a, b, c, d) {
    return this.Be.add(String(a), b, !1, c, d)
};
_.h.Ka = function(a, b, c, d) {
    return this.Be.remove(String(a), b, c, d)
};
var df = function(a, b, c, d) {
    b = a.Be.A[String(b)];
    if (!b)
        return !0;
    b = b.concat();
    for (var e=!0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g&&!g.Di && g.tl == c) {
            var k = g.Xg, l = g.Ic || g.src;
            g.ql && Ne(a.Be, g);
            e=!1 !== k.call(l, d) && e
        }
    }
    return e && 0 != d.Jy
};

var gg, hg, ig;
gg=!_.M || _.he(9);
hg=!_.Od&&!_.M || _.M && _.he(9) || _.Od && _.fe("1.9.1");
ig = _.M&&!_.fe("9");
_.jg = _.M || _.Nd || _.Pd;
_.kg = _.M&&!_.he(9);
var og, qg, sg, Fg, Gg, Hg, tg;
_.mg = function(a, b) {
    var c = b || window.document;
    return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : _.lg(window.document, "*", a, b)
};
_.ng = function(a, b) {
    var c = b || window.document, d = null;
    c.querySelectorAll && c.querySelector ? d = c.querySelector("." + a) : d = _.lg(window.document, "*", a, b)[0];
    return d || null
};
_.lg = function(a, b, c, d) {
    a = d || a;
    b = b && "*" != b ? b.toUpperCase() : "";
    if (a.querySelectorAll && a.querySelector && (b || c))
        return a.querySelectorAll(b + (c ? "." + c : ""));
    if (c && a.getElementsByClassName) {
        a = a.getElementsByClassName(c);
        if (b) {
            d = {};
            for (var e = 0, f = 0, g; g = a[f]; f++)
                b == g.nodeName && (d[e++] = g);
            d.length = e;
            return d
        }
        return a
    }
    a = a.getElementsByTagName(b || "*");
    if (c) {
        d = {};
        for (f = e = 0; g = a[f]; f++)
            b = g.className, "function" == typeof b.split && _.id(b.split(/\s+/), c) && (d[e++] = g);
        d.length = e;
        return d
    }
    return a
};
_.pg = function(a, b) {
    _.Jd(b, function(b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in og ? a.setAttribute(og[d], b) : _.Wc(d, "aria-") || _.Wc(d, "data-") ? a.setAttribute(d, b) : a[d] = b
    })
};
og = {
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
_.rg = function(a, b, c) {
    return qg(window.document, arguments)
};
qg = function(a, b) {
    var c = b[0], d = b[1];
    if (!gg && d && (d.name || d.type)) {
        c = ["<", c];
        d.name && c.push(' name="', _.sd(d.name), '"');
        if (d.type) {
            c.push(' type="', _.sd(d.type), '"');
            var e = {};
            _.Id(e, d);
            delete e.type;
            d = e
        }
        c.push(">");
        c = c.join("")
    }
    c = a.createElement(c);
    d && (_.ja(d) ? c.className = d : _.ha(d) ? c.className = d.join(" ") : _.pg(c, d));
    2 < b.length && sg(a, c, b, 2);
    return c
};
sg = function(a, b, c, d) {
    function e(c) {
        c && b.appendChild(_.ja(c) ? a.createTextNode(c) : c)
    }
    for (; d < c.length; d++) {
        var f = c[d];
        !_.Qc(f) || _.Tc(f) && 0 < f.nodeType ? e(f) : (0, _.dd)(tg(f) ? _.Kd(f) : f, e)
    }
};
_.vg = function(a, b) {
    sg(_.ug(a), a, arguments, 1)
};
_.wg = function(a) {
    for (var b; b = a.firstChild;)
        a.removeChild(b)
};
_.xg = function(a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b)
};
_.yg = function(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
};
_.zg = function(a) {
    var b, c = a.parentNode;
    if (c && 11 != c.nodeType) {
        if (a.removeNode)
            return a.removeNode(!1);
        for (; b = a.firstChild;)
            c.insertBefore(b, a);
        return _.yg(a)
    }
};
_.Ag = function(a) {
    return hg && void 0 != a.children ? a.children : (0, _.ed)(a.childNodes, function(a) {
        return 1 == a.nodeType
    })
};
_.Bg = function(a) {
    if (void 0 != a.firstElementChild)
        a = a.firstElementChild;
    else 
        for (a = a.firstChild; a && 1 != a.nodeType;)
            a = a.nextSibling;
    return a
};
_.Cg = function(a) {
    return _.Tc(a) && 1 == a.nodeType
};
_.Dg = function(a, b) {
    if (a.contains && 1 == b.nodeType)
        return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
        return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;)
        b = b.parentNode;
    return b == a
};
_.ug = function(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
};
_.Eg = function(a, b) {
    if ("textContent"in a)
        a.textContent = b;
    else if (3 == a.nodeType)
        a.data = b;
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;)
            a.removeChild(a.lastChild);
        a.firstChild.data = b
    } else 
        _.wg(a), a.appendChild(_.ug(a).createTextNode(String(b)))
};
Fg = {
    SCRIPT: 1,
    STYLE: 1,
    HEAD: 1,
    IFRAME: 1,
    OBJECT: 1
};
Gg = {
    IMG: " ",
    BR: "\n"
};
_.Ig = function(a) {
    if (ig && "innerText"in a)
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
    else {
        var b = [];
        Hg(a, b, !0);
        a = b.join("")
    }
    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    ig || (a = a.replace(/ +/g, " "));
    " " != a && (a = a.replace(/^\s*/, ""));
    return a
};
_.Jg = function(a) {
    var b = [];
    Hg(a, b, !1);
    return b.join("")
};
Hg = function(a, b, c) {
    if (!(a.nodeName in Fg))
        if (3 == a.nodeType)
            c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if (a.nodeName in Gg)
            b.push(Gg[a.nodeName]);
        else 
            for (a = a.firstChild; a;)
                Hg(a, b, c), a = a.nextSibling
};
tg = function(a) {
    if (a && "number" == typeof a.length) {
        if (_.Tc(a))
            return "function" == typeof a.item || "string" == typeof a.item;
        if (_.Uc(a))
            return "function" == typeof a.item
    }
    return !1
};
_.Kg = function(a) {
    this.A = a || _.r.document || window.document
};
_.h = _.Kg.prototype;
_.h.I = _.q(0);
_.h.T = function(a, b, c) {
    return qg(this.A, arguments)
};
_.h.createElement = function(a) {
    return this.A.createElement(a)
};
_.h.Ia = function() {
    var a = this.A;
    return a.parentWindow || a.defaultView
};
_.h.appendChild = function(a, b) {
    a.appendChild(b)
};
_.h.append = _.vg;
_.h.Qv = _.wg;
_.h.Xw = _.xg;
_.h.removeNode = _.yg;
_.h.cE = _.zg;
_.h.rE = _.Ag;
_.h.rv = _.Bg;
_.h.isElement = _.Cg;
_.h.contains = _.Dg;

var Lr;
_.Cr = function(a) {
    return "CSS1Compat" == a.compatMode
};
_.Dr = function(a) {
    return !_.Pd && _.Cr(a) ? a.documentElement : a.body || a.documentElement
};
_.Er = function(a, b) {
    this.width = a;
    this.height = b
};
_.h = _.Er.prototype;
_.h.clone = function() {
    return new _.Er(this.width, this.height)
};
_.h.isEmpty = function() {
    return !(this.width * this.height)
};
_.h.ceil = _.q(4);
_.h.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
_.h.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
_.Fr = function(a, b) {
    this.x = _.ca(a) ? a : 0;
    this.y = _.ca(b) ? b : 0
};
_.h = _.Fr.prototype;
_.h.clone = function() {
    return new _.Fr(this.x, this.y)
};
_.h.ceil = _.q(5);
_.h.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
_.h.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
_.h.translate = _.q(6);
_.Gr = function(a) {
    var b = _.Dr(a);
    a = a.parentWindow || a.defaultView;
    return _.M && _.fe("10") && a.pageYOffset != b.scrollTop ? new _.Fr(b.scrollLeft, b.scrollTop) : new _.Fr(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
};
_.Hr = function(a) {
    a = a.document;
    a = _.Cr(a) ? a.documentElement : a.body;
    return new _.Er(a.clientWidth, a.clientHeight)
};
_.Fr.prototype.ceil = _.L(5, function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
});
_.Er.prototype.ceil = _.L(4, function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
});
_.Kg.prototype.I = _.L(0, function(a) {
    return _.ja(a) ? this.A.getElementById(a) : a
});
_.Ir = function(a) {
    return _.Gr(a.A)
};
_.Jr = function(a) {
    return _.Cr(a.A)
};
_.Kr = function(a) {
    return _.Hr(a || window)
};
_.Mr = function(a) {
    return a ? new _.Kg(_.ug(a)) : Lr || (Lr = new _.Kg)
};
_.Nr = function(a) {
    return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
};
_.Or = function(a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
};
_.Pr = function(a) {
    return a ? a.parentWindow || a.defaultView : window
};
_.Qr = function(a) {
    return _.ja(a) ? window.document.getElementById(a) : a
};
_.Rr = function(a) {
    var b = _.ja(void 0) ? _.Nr(void 0): "\\s";
    return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
        return b + e.toUpperCase()
    })
};
_.Sr = function(a, b) {
    for (var c in b)
        a[c] = b[c]
};
var Tr;
Tr = function() {
    return _.Pd ? "Webkit" : _.Od ? "Moz" : _.M ? "ms" : _.Nd ? "O" : null
};
_.Ur = function() {
    return _.Pd ? "-webkit" : _.Od ? "-moz" : _.M ? "-ms" : _.Nd ? "-o" : null
};
var $r, is, es;
_.Q = function(a, b, c) {
    if (_.ja(b))(b = _.Vr(a, b)) && (a.style[b] = c);
    else 
        for (var d in b) {
            c = a;
            var e = b[d], f = _.Vr(c, d);
            f && (c.style[f] = e)
        }
};
_.Vr = function(a, b) {
    var c = _.$c(b);
    if (void 0 === a.style[c]) {
        var d = Tr() + _.Rr(c);
        if (void 0 !== a.style[d])
            return d
    }
    return c
};
_.Wr = function(a, b) {
    var c = _.ug(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
};
_.Xr = function(a, b) {
    return a.currentStyle ? a.currentStyle[b] : null
};
_.Yr = function(a, b) {
    return _.Wr(a, b) || _.Xr(a, b) || a.style && a.style[b]
};
_.Zr = function(a) {
    return _.Yr(a, "position")
};
$r = function(a) {
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
    _.M && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
};
_.as = function(a) {
    if (_.M&&!_.he(8))
        return a.offsetParent;
    var b = _.ug(a), c = _.Yr(a, "position"), d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (c = _.Yr(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
            return a;
    return null
};
_.bs = function(a) {
    var b, c = _.ug(a), d = _.Yr(a, "position"), e = _.Od && c.getBoxObjectFor&&!a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), f = new _.Fr(0, 0), g;
    b = c ? _.ug(c) : window.document;
    g=!_.M || _.he(9) || _.Jr(_.Mr(b)) ? b.documentElement : b.body;
    if (a == g)
        return f;
    if (a.getBoundingClientRect)
        b = $r(a), a = _.Ir(_.Mr(c)), f.x = b.left + a.x, f.y = b.top + a.y;
    else if (c.getBoxObjectFor&&!e)
        b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(g), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
    else {
        b =
        a;
        do {
            f.x += b.offsetLeft;
            f.y += b.offsetTop;
            b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
            if (_.Pd && "fixed" == _.Zr(b)) {
                f.x += c.body.scrollLeft;
                f.y += c.body.scrollTop;
                break
            }
            b = b.offsetParent
        }
        while (b && b != a);
        if (_.Nd || _.Pd && "absolute" == d)
            f.y -= c.body.offsetTop;
        for (b = a; (b = _.as(b)) && b != c.body && b != g;)
            f.x -= b.scrollLeft, _.Nd && "TR" == b.tagName || (f.y -= b.scrollTop)
    }
    return f
};
_.ds = function(a, b) {
    var c = new _.Fr(0, 0), d = _.Pr(_.ug(a)), e = a;
    do {
        var f = d == b ? _.bs(e): _.cs(e);
        c.x += f.x;
        c.y += f.y
    }
    while (d && d != b && (e = d.frameElement) && (d = d.parent));
    return c
};
_.cs = function(a) {
    var b;
    if (a.getBoundingClientRect)
        b = $r(a), b = new _.Fr(b.left, b.top);
    else {
        b = _.Ir(_.Mr(a));
        var c = _.bs(a);
        b = new _.Fr(c.x - b.x, c.y - b.y)
    }
    if (_.Od&&!_.fe(12)) {
        i:
        {
            c = _.$c("transform");
            if (void 0 === a.style[c] && (c = Tr() + _.Rr(c), void 0 !== a.style[c])) {
                c = _.Ur() + "-transform";
                break i
            }
            c = "transform"
        }
        a = (a = _.Yr(a, c) || _.Yr(a, "transform")) ? (a = a.match(es)) ? new _.Fr((0, window.parseFloat)(a[1]), (0, window.parseFloat)(a[2])) : new _.Fr(0, 0) : new _.Fr(0, 0);
        a = new _.Fr(b.x + a.x, b.y + a.y)
    } else 
        a = b;
    return a
};
_.hs = function(a, b, c) {
    if (b instanceof _.Er)
        c = b.height, b = b.width;
    else if (void 0 == c)
        throw Error("K");
    a.style.width = _.fs(b, !0);
    _.gs(a, c)
};
_.fs = function(a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a
};
_.gs = function(a, b) {
    a.style.height = _.fs(b, !0)
};
_.js = function(a) {
    var b = is;
    if ("none" != _.Yr(a, "display"))
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
};
is = function(a) {
    var b = a.offsetWidth, c = a.offsetHeight, d = _.Pd&&!b&&!c;
    return _.ca(b)&&!d ||!a.getBoundingClientRect ? new _.Er(b, c) : (a = $r(a), new _.Er(a.right - a.left, a.bottom - a.top))
};
_.ls = function(a) {
    var b = _.Mr(void 0), c = null, d = b.A;
    _.M && d.createStyleSheet ? (c = d.createStyleSheet(), _.ks(c, a)) : (d = _.lg(b.A, "head", void 0, void 0)[0], d || (c = _.lg(b.A, "body", void 0, void 0)[0], d = b.T("head"), c.parentNode.insertBefore(d, c)), c = b.T("style"), _.ks(c, a), b.appendChild(d, c));
    return c
};
_.ks = function(a, b) {
    _.M && _.ca(a.cssText) ? a.cssText = b : a.innerHTML = b
};
_.ms = _.Od ? "MozUserSelect" : _.Pd ? "WebkitUserSelect" : null;
es = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;

var ps, qs, rs, ts, us;
_.ns = function(a) {
    return "rtl" == _.Yr(a, "direction")
};
_.os = function(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
};
_.h = _.os.prototype;
_.h.Qb = function() {
    return this.right - this.left
};
_.h.Ib = function() {
    return this.bottom - this.top
};
_.h.clone = function() {
    return new _.os(this.top, this.right, this.bottom, this.left)
};
_.h.contains = function(a) {
    return this && a ? "undefined" != typeof _.os && a instanceof _.os ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
_.h.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
_.h.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
_.h.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
_.h.translate = function(a, b) {
    a instanceof _.Fr ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, _.Vc(b) && (this.top += b, this.bottom += b));
    return this
};
ps = function(a, b) {
    if (/^\d+px?$/.test(b))
        return (0, window.parseInt)(b, 10);
    var c = a.style.left, d = a.runtimeStyle.left;
    a.runtimeStyle.left = a.currentStyle.left;
    a.style.left = b;
    var e = a.style.pixelLeft;
    a.style.left = c;
    a.runtimeStyle.left = d;
    return e
};
qs = function(a, b) {
    var c = _.Xr(a, b);
    return c ? ps(a, c) : 0
};
rs = {
    thin: 2,
    medium: 4,
    thick: 6
};
_.ss = function(a, b) {
    if (_.M) {
        var c = qs(a, b + "Left"), d = qs(a, b + "Right"), e = qs(a, b + "Top"), f = qs(a, b + "Bottom");
        return new _.os(e, d, f, c)
    }
    c = _.Wr(a, b + "Left");
    d = _.Wr(a, b + "Right");
    e = _.Wr(a, b + "Top");
    f = _.Wr(a, b + "Bottom");
    return new _.os((0, window.parseFloat)(e), (0, window.parseFloat)(d), (0, window.parseFloat)(f), (0, window.parseFloat)(c))
};
ts = function(a, b) {
    if ("none" == _.Xr(a, b + "Style"))
        return 0;
    var c = _.Xr(a, b + "Width");
    return c in rs ? rs[c] : ps(a, c)
};
us = function(a, b) {
    return new _.Fr(a.x - b.x, a.y - b.y)
};
_.vs = function(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
};
_.vs.prototype.clone = function() {
    return new _.vs(this.left, this.top, this.width, this.height)
};
_.ws = function(a) {
    return new _.os(a.top, a.left + a.width, a.top + a.height, a.left)
};
_.h = _.vs.prototype;
_.h.contains = function(a) {
    return "undefined" != typeof _.vs && a instanceof _.vs ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
_.h.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
_.h.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
_.h.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
_.h.translate = function(a, b) {
    a instanceof _.Fr ? (this.left += a.x, this.top += a.y) : (this.left += a, _.Vc(b) && (this.top += b));
    return this
};
_.xs = function(a) {
    return _.ss(a, "padding")
};
_.ys = function(a) {
    if (_.M&&!_.he(9)) {
        var b = ts(a, "borderLeft"), c = ts(a, "borderRight"), d = ts(a, "borderTop");
        a = ts(a, "borderBottom");
        return new _.os(d, c, a, b)
    }
    b = _.Wr(a, "borderLeftWidth");
    c = _.Wr(a, "borderRightWidth");
    d = _.Wr(a, "borderTopWidth");
    a = _.Wr(a, "borderBottomWidth");
    return new _.os((0, window.parseFloat)(d), (0, window.parseFloat)(c), (0, window.parseFloat)(a), (0, window.parseFloat)(b))
};
_.zs = function(a, b) {
    return (b & 4 && _.ns(a) ? b^2 : b)&-5
};
_.As = function(a, b, c) {
    var d, e = _.Od && (_.Rd || _.Vd) && _.fe("1.9");
    b instanceof _.Fr ? (d = b.x, b = b.y) : (d = b, b = c);
    a.style.left = _.fs(d, e);
    a.style.top = _.fs(b, e)
};
_.Bs = function(a) {
    for (var b = new _.os(0, window.Infinity, window.Infinity, 0), c = _.Mr(a), d = c.A.body, e = c.A.documentElement, f = _.Dr(c.A); a = _.as(a);)
        if (!(_.M && 0 == a.clientWidth || _.Pd && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != _.Yr(a, "overflow")) {
            var g = _.bs(a), k;
            k = a;
            if (_.Od&&!_.fe("1.9")) {
                var l = (0, window.parseFloat)(_.Wr(k, "borderLeftWidth"));
                if (_.ns(k))
                    var m = k.offsetWidth - k.clientWidth - l - (0, window.parseFloat)(_.Wr(k, "borderRightWidth")), l = l + m;
                    k = new _.Fr(l, (0, window.parseFloat)(_.Wr(k, "borderTopWidth")))
                } else 
                    k =
                    new _.Fr(k.clientLeft, k.clientTop);
                    g.x += k.x;
                    g.y += k.y;
                    b.top = Math.max(b.top, g.y);
                    b.right = Math.min(b.right, g.x + a.clientWidth);
                    b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
                    b.left = Math.max(b.left, g.x)
        }
    d = f.scrollLeft;
    f = f.scrollTop;
    b.left = Math.max(b.left, d);
    b.top = Math.max(b.top, f);
    c = _.Kr(c.Ia());
    b.right = Math.min(b.right, d + c.width);
    b.bottom = Math.min(b.bottom, f + c.height);
    return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
};
_.Cs = function(a) {
    var b = _.bs(a);
    a = _.js(a);
    return new _.vs(b.x, b.y, a.width, a.height)
};
_.Ds = function(a) {
    if (1 == a.nodeType)
        return _.cs(a);
    var b = _.Uc(a.nE), c = a;
    a.targetTouches && a.targetTouches.length ? c = a.targetTouches[0] : b && a.A.targetTouches && a.A.targetTouches.length && (c = a.A.targetTouches[0]);
    return new _.Fr(c.clientX, c.clientY)
};
_.Es = function(a, b, c, d, e, f, g, k, l) {
    var m, n;
    if (m = c.offsetParent) {
        var p = "HTML" == m.tagName || "BODY" == m.tagName;
        p && "static" == _.Zr(m) || (n = _.bs(m), p || (p = (p = _.ns(m)) && _.Od?-m.scrollLeft : !p || _.M && _.fe("8") || "visible" == _.Yr(m, "overflowX") ? m.scrollLeft : m.scrollWidth - m.clientWidth - m.scrollLeft, n = us(n, new _.Fr(p, m.scrollTop))))
    }
    m = n || new _.Fr;
    n = _.Cs(a);
    if (p = _.Bs(a)) {
        var v = new _.vs(p.left, p.top, p.right - p.left, p.bottom - p.top), p = Math.max(n.left, v.left), x = Math.min(n.left + n.width, v.left + v.width);
        if (p <= x) {
            var t = Math.max(n.top,
            v.top), v = Math.min(n.top + n.height, v.top + v.height);
            t <= v && (n.left = p, n.top = t, n.width = x - p, n.height = v - t)
        }
    }
    p = _.Mr(a);
    t = _.Mr(c);
    p.A != t.A && (x = p.A.body, t = _.ds(x, t.Ia()), t = us(t, _.bs(x)), !_.M || _.he(9) || _.Jr(p) || (t = us(t, _.Ir(p))), n.left += t.x, n.top += t.y);
    a = _.zs(a, b);
    b = new _.Fr(a & 2 ? n.left + n.width : n.left, a & 1 ? n.top + n.height : n.top);
    b = us(b, m);
    e && (b.x += (a & 2?-1 : 1) * e.x, b.y += (a & 1?-1 : 1) * e.y);
    var w;
    if (g)
        if (l)
            w = l;
        else if (w = _.Bs(c))
            w.top -= m.y, w.right -= m.x, w.bottom -= m.y, w.left -= m.x;
    e = w;
    l = b.clone();
    w = _.zs(c, d);
    d = _.js(c);
    a = k ?
    k.clone() : d.clone();
    k = l;
    l = a;
    k = k.clone();
    l = l.clone();
    a = 0;
    if (f || 0 != w)
        w & 2 ? k.x -= l.width + (f ? f.right : 0) : f && (k.x += f.left), w & 1 ? k.y -= l.height + (f ? f.bottom : 0) : f && (k.y += f.top);
    g && (e ? (f = k, w = l, a = 0, 65 == (g & 65) && (f.x < e.left || f.x >= e.right) && (g&=-2), 132 == (g & 132) && (f.y < e.top || f.y >= e.bottom) && (g&=-5), f.x < e.left && g & 1 && (f.x = e.left, a|=1), f.x < e.left && f.x + w.width > e.right && g & 16 && (w.width = Math.max(w.width - (f.x + w.width - e.right), 0), a|=4), f.x + w.width > e.right && g & 1 && (f.x = Math.max(e.right - w.width, e.left), a|=1), g & 2 && (a = a | (f.x < e.left ?
    16 : 0) | (f.x + w.width > e.right ? 32 : 0)), f.y < e.top && g & 4 && (f.y = e.top, a|=2), f.y <= e.top && f.y + w.height < e.bottom && g & 32 && (w.height = Math.max(w.height - (e.top - f.y), 0), f.y = e.top, a|=8), f.y >= e.top && f.y + w.height > e.bottom && g & 32 && (w.height = Math.max(w.height - (f.y + w.height - e.bottom), 0), a|=8), f.y + w.height > e.bottom && g & 4 && (f.y = Math.max(e.bottom - w.height, e.top), a|=2), g & 8 && (a = a | (f.y < e.top ? 64 : 0) | (f.y + w.height > e.bottom ? 128 : 0)), g = a) : g = 256, a = g);
    f = new _.vs(0, 0, 0, 0);
    f.left = k.x;
    f.top = k.y;
    f.width = l.width;
    f.height = l.height;
    g = a;
    g & 496 ||
    (_.As(c, new _.Fr(f.left, f.top)), a = new _.Er(f.width, f.height), d == a || d && a && d.width == a.width && d.height == a.height || (f = a, d = _.Jr(_.Mr(_.ug(c))), !_.M || _.fe("10") || d && _.fe("8") ? (c = c.style, _.Od ? c.MozBoxSizing = "border-box" : _.Pd ? c.WebkitBoxSizing = "border-box" : c.boxSizing = "border-box", c.width = Math.max(f.width, 0) + "px", c.height = Math.max(f.height, 0) + "px") : (k = c.style, d ? (d = _.xs(c), c = _.ys(c), k.pixelWidth = f.width - c.left - d.left - d.right - c.right, k.pixelHeight = f.height - c.top - d.top - d.bottom - c.bottom) : (k.pixelWidth = f.width,
    k.pixelHeight = f.height))));
    return g
};
_.Fs = function(a, b, c) {
    c || (a = a.parentNode);
    for (c = 0; a;) {
        if (b(a))
            return a;
        a = a.parentNode;
        c++
    }
    return null
};
_.Gs = function(a, b) {
    a.style.display = b ? "" : "none"
};
_.Hs = function(a, b) {
    var c = a.style;
    "opacity"in c ? c.opacity = b : "MozOpacity"in c ? c.MozOpacity = b : "filter"in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
};
_.Is = function(a, b) {
    b ? a.tabIndex = 0 : (a.tabIndex =- 1, a.removeAttribute("tabIndex"))
};
_.Js = function(a, b) {
    var c = {}, d;
    for (d in a)
        b.call(void 0, a[d], d, a) && (c[d] = a[d]);
    return c
};

_.Ks = function(a) {
    a = a.className;
    return _.ja(a) && a.match(/\S+/g) || []
};
_.Ls = function() {
    var a = window, b = a.document, c = 0;
    if (b) {
        var c = b.body, d = b.documentElement;
        if (!d ||!c)
            return 0;
        a = _.Hr(a).height;
        if (_.Cr(b) && d.scrollHeight)
            c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
        else {
            var b = d.scrollHeight, e = d.offsetHeight;
            d.clientHeight != e && (b = c.scrollHeight, e = c.offsetHeight);
            c = b > a ? b > e ? b : e : b < e ? b : e
        }
    }
    return c
};
_.Ms = function(a) {
    this.S = a;
    this.A = a.jb()
};
_.Ms.prototype.va = function() {
    Ns(this)
};
_.Ms.prototype.onBeforeParentOpen = _.Ms.prototype.va;
var Ns = function(a) {
    var b = a.S.Jb();
    if (a.A.anchorBox && b && b.Ea())
        b = _.bs(b.Ea()), a.A.anchorBox.left += b.x, a.A.anchorBox.top += b.y;
    else {
        b = a.A.anchor;
        if ("_default" != b && "_iframe" != b) {
            var c = _.Qr(b);
            if (c)
                a.A.anchorBox = _.Cs(c);
            else {
                _.Ib("Anchor not found in DOM: " + b + '. Falling back to "_default".');
                a.A.anchor = "_default";
                return 
            }
        }
        "_iframe" == b && (b = _.Kr(), a.A.anchorBox = new _.vs(0, 0, b.width, b.height))
    }
    a.A.anchor = ""
};
_.Os = function(a) {
    _.Ms.call(this, a)
};
_.u(_.Os, _.Ms);
_.Os.prototype.open = function() {
    var a = this.A, b = window.document.createElement("ins");
    window.document.getElementById(a.container).appendChild(b);
    b.style.display = "block";
    _.Q(b, a.containerCss);
    this.S.Sd(b);
    this.S.Ed(b)
};
_.Os.prototype.jc = function() {
    window.document.getElementById(this.S.id).style.height = this.S.height + "px"
};
_.Os.prototype.close = function() {
    _.yg(this.S.Oa());
    _.yg(this.V);
    this.V = null
};
_.Rs = function(a) {
    if (a.V)
        return a.V;
    var b = a.A;
    !b.anchorBox && b.anchor && Ns(a);
    var c = a.S.Jb();
    if ("_default" == b.anchor && c) {
        var d = _.Cs(_.Qr(c.Oa()));
        b.anchorBox = d
    }
    if (!b.anchorBox)
        return _.Ib("No anchor box defined."), null;
    b = new _.Fr(b.anchorBox.left, b.anchorBox.top);
    c && (c = _.ds(c.Ea(), window), a.R = new _.Fr, a.R.x = c.x, a.R.y = c.y, b.x += c.x, b.y += c.y, _.Ps(b));
    a.da = b;
    c = _.Qs(a, !0);
    a.V = window.document.createElement("ins");
    a.V.style.cssText = c;
    window.document.body.appendChild(a.V);
    return a.V
};
_.Qs = function(a, b) {
    var c = a.A;
    return "position: absolute !important;background-color: transparent !important;left: " + a.da.x + "px !important;top: " + a.da.y + "px !important;width: " + c.anchorBox.width + "px !important;height: " + c.anchorBox.height + "px !important;z-index: -10000 !important;display: " + (b ? "block" : "none") + " !important;"
};
_.Ss = function(a, b) {
    var c = 0, d = 0;
    if (b.pageX || b.pageY)
        c = b.pageX, d = b.pageY;
    else if (b.clientX || b.clientY) {
        var c = b.target ? b.target: b.srcElement, e;
        c.ownerDocument && c.ownerDocument.parentWindow ? e = c.ownerDocument.parentWindow : e = window;
        d = c = 0;
        _.M ? (c = e.document.documentElement.scrollLeft, d = e.document.documentElement.scrollTop) : (c = e.pageXOffset, d = e.pageYOffset);
        c = b.clientX + c;
        d = b.clientY + d
    }
    e = new _.Fr(c, d);
    return (c = _.ws(_.Cs(a))) && c.contains(e)
};
_.Ps = function(a) {
    var b = window, c = window.document.body, d = _.bs(c), b = c.currentStyle || b.getComputedStyle(c, "");
    b.position && "static" != b.position && (a.x -= d.x, a.y -= d.y)
};
_.Ts = function(a) {
    var b = a.S.Jb() && a.S.Jb().Oa(), b = b && b.style.zIndex ? (0, window.parseInt)(b.style.zIndex, 10) + 1: 0;
    return Math.min(2147483647, Math.max(2E9, a.A.zIndex || b))
};
var Us, Vs, Ws;
Us = {
    "bottom-center": 1,
    "bottom-end": 7,
    "bottom-left": 1,
    "bottom-right": 3,
    "bottom-start": 5,
    "left-bottom": 1,
    "left-center": 0,
    "left-top": 0,
    "right-bottom": 3,
    "right-center": 2,
    "right-top": 2,
    "top-center": 0,
    "top-end": 6,
    "top-left": 0,
    "top-right": 2,
    "top-start": 4
};
Vs = {
    "bottom-center": !0,
    "top-center": !0
};
Ws = {
    "left-center": !0,
    "right-center": !0
};
_.Xs = function(a, b, c, d, e) {
    e = e || {
        x: 0,
        y: 0
    };
    if (Vs[b]) {
        var f = _.js(a).width / 2;
        e.x = "top-right" == d || "bottom-right" == d ? e.x + f : e.x - f
    }
    Vs[d] && (f = _.js(c).width / 2, e.x += f);
    Ws[b] && (f = _.js(a).height / 2, e.y = "right-bottom" == d || "left-bottom" == d ? e.y + f : e.y - f);
    Ws[d] && (e.y += _.js(c).height / 2);
    _.Es(c, Us[d], a, Us[b], new _.Fr(e.x, e.y));
    d = _.Fs(a, function(a) {
        if (a == window.document)
            return !1;
        a = _.Zr(a);
        return !!a && "static" != a
    });
    c = b = 0;
    d && (c = _.bs(d), b =- c.x, c =- c.y);
    a = a.style;
    (0, window.parseInt)(a.left, 10) < b && (a.left = b + "px");
    (0, window.parseInt)(a.top, 10) < c && (a.top = c + "px")
};
_.Ys = function(a) {
    _.Ms.call(this, a.S);
    this.G = a;
    this.B = null
};
_.u(_.Ys, _.Os);
_.Ys.prototype.va = function() {
    this.G.va()
};
_.Ys.prototype.onBeforeParentOpen = _.Ys.prototype.va;
_.Ys.prototype.open = function() {
    this.G.open();
    if (this.A.closeClickDetection || this.A.hideClickDetection)
        this.B = _.N(window.document, ["click", "touchstart"], (0, _.s)(this.C, this), !1)
};
_.Ys.prototype.open = _.Ys.prototype.open;
_.Ys.prototype.jc = function(a) {
    this.G.jc(a)
};
_.Ys.prototype.onready = _.Ys.prototype.jc;
_.Ys.prototype.D = function(a) {
    this.G.onRenderStart && this.G.onRenderStart(a)
};
_.Ys.prototype.onRenderStart = _.Ys.prototype.D;
_.Ys.prototype.close = function() {
    if (this.A.closeClickDetection || this.A.hideClickDetection)
        _.Ze(this.B), this.B = null;
    this.G.close()
};
_.Ys.prototype.close = _.Ys.prototype.close;
_.Ys.prototype.C = function(a) {
    _.Ss(this.S.Oa(), a) || (this.A.hideClickDetection && this.G.show ? this.G.show(!1) : this.G.close())
};

var Zs = function() {
    _.cf.call(this);
    this.A = []
};
_.u(Zs, _.cf);
Zs.prototype.W = function() {
    for (var a in this.A)
        _.Ze(this.A[a]);
    this.A = [];
    this.B = _.r.clearTimeout(this.B);
    Zs.J.W.call(this);
    this.dispatchEvent({
        type: "dispose"
    })
};
_.C("iframes.styles.createAnchor", function() {
    return new Zs
});

_.ni = _.wd("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
_.pi = function() {
    this.A = "";
    this.B = _.oi
};
_.pi.prototype.Tg=!0;
_.oi = {};
_.pi.prototype.Jg = function() {
    return this.A
};
_.qi = function(a) {
    var b = new _.pi;
    b.A = a;
    return b
};
_.ri = _.qi("");
var si;
_.ti = function() {
    this.A = "";
    this.B = si
};
_.ti.prototype.Tg=!0;
_.ti.prototype.Jg = function() {
    return this.A
};
_.ti.prototype.Cq=!0;
_.ti.prototype.Bg = function() {
    return 1
};
_.ui = function(a) {
    return a instanceof _.ti && a.constructor === _.ti && a.B === si ? a.A : "type_error:SafeUrl"
};
si = {};
var vi;
_.wi = function() {
    this.A = "";
    this.C = vi;
    this.B = null
};
_.wi.prototype.Cq=!0;
_.wi.prototype.Bg = function() {
    return this.B
};
_.wi.prototype.Tg=!0;
_.wi.prototype.Jg = function() {
    return this.A
};
_.xi = function(a) {
    return a instanceof _.wi && a.constructor === _.wi && a.C === vi ? a.A : "type_error:SafeHtml"
};
_.zi = function(a) {
    if (a instanceof _.wi)
        return a;
    var b = null;
    a.Cq && (b = a.Bg());
    return _.yi(_.sd(a.Tg ? a.Jg() : String(a)), b)
};
_.Ai = _.wd("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
_.Bi = _.wd("link", "script", "style");
vi = {};
_.yi = function(a, b) {
    var c = new _.wi;
    c.A = a;
    c.B = b;
    return c
};
_.Ci = _.yi("", 0);

_.$s = function(a, b, c, d) {
    return _.ad.splice.apply(a, _.Fd(arguments, 1))
};
_.at = function(a, b, c, d, e) {
    if (_.ha(b)) {
        for (var f = 0; f < b.length; f++)
            _.at(a, b[f], c, d, e);
        return null
    }
    c = _.Se(c);
    return _.He(a) ? a.Be.add(String(b), c, !0, d, e) : _.Te(a, b, c, !0, d, e)
};
_.bt = function(a, b, c) {
    if (b in a)
        throw Error("i`" + b);
    a[b] = c
};
_.ct = function(a) {
    if (!_.ha(a))
        for (var b = a.length - 1; 0 <= b; b--)
            delete a[b];
    a.length = 0
};
_.dt = function(a) {
    a.ja = function() {
        return a.Yw ? a.Yw : a.Yw = new a
    }
};
_.et = function(a) {
    _.re.call(this);
    this.yc = a;
    this.C = {}
};
_.u(_.et, _.re);
var ft = [];
_.et.prototype.P = function(a, b, c, d) {
    return _.gt(this, a, b, c, d)
};
_.gt = function(a, b, c, d, e, f) {
    _.ha(c) || (c && (ft[0] = c.toString()), c = ft);
    for (var g = 0; g < c.length; g++) {
        var k = _.N(b, c[g], d || a.handleEvent, e ||!1, f || a.yc || a);
        if (!k)
            break;
        a.C[k.key] = k
    }
    return a
};
_.et.prototype.Ka = function(a, b, c, d, e) {
    if (_.ha(b))
        for (var f = 0; f < b.length; f++)
            this.Ka(a, b[f], c, d, e);
    else 
        c = c || this.handleEvent, e = e || this.yc || this, c = _.Se(c), d=!!d, b = _.He(a) ? _.Oe(a.Be, String(b), c, d, e) : a ? (a = _.Ue(a)) ? _.Oe(a, b, c, d, e) : null : null, b && (_.Ze(b), delete this.C[b.key]);
    return this
};
_.ht = function(a) {
    _.Jd(a.C, _.Ze);
    a.C = {}
};
_.et.prototype.W = function() {
    _.et.J.W.call(this);
    _.ht(this)
};
_.et.prototype.handleEvent = function() {
    throw Error("L");
};

var Tu = {}, Uu = function() {
    this.A = Tu
}, Zu, $u;
Uu.prototype.Tg=!0;
Uu.prototype.Jg = function() {
    return ""
};
Uu.prototype.toString = function() {
    return "Const{}"
};
var Vu = {}, Wu = /^[-.%_!# a-zA-Z0-9]+$/, Xu = function(a) {
    return a instanceof Uu && a.constructor === Uu && a.A === Tu ? "" : "type_error:Const"
}, Yu = function() {
    this.A = Vu
};
Yu.prototype.Tg=!0;
Yu.prototype.Jg = function() {
    return ""
};
Yu.prototype.Cq=!0;
Yu.prototype.Bg = function() {
    return 1
};
Zu = function(a) {
    var b = 0, c = "", d = function(a) {
        _.ha(a) ? (0, _.dd)(a, d) : (a = _.zi(a), c += _.xi(a), a = a.Bg(), 0 == b ? b = a : 0 != a && b != a && (b = null))
    };
    (0, _.dd)(arguments, d);
    return _.yi(c, b)
};
$u = /^[a-zA-Z0-9-]+$/;
_.av = function(a, b) {
    _.ha(b) || (b = [b]);
    var c = (0, _.fd)(b, function(a) {
        return _.ja(a) ? a : a.ln + " " + a.duration + "s " + a.timing + " " + a.vg + "s"
    });
    _.Q(a, "transition", c.join(","))
};
_.bv = function(a) {
    var b=!1, c;
    return function() {
        b || (c = a(), b=!0);
        return c
    }
}(function() {
    if (_.M)
        return _.fe("10.0");
    var a = window.document.createElement("div"), b = _.Ur(), c = {
        transition: "opacity 1s linear"
    };
    b && (c[b + "-transition"] = "opacity 1s linear");
    b = {
        style: c
    };
    if (!$u.test("div"))
        throw Error("v`div");
    if ("div"in _.Bi)
        throw Error("w`div");
    var c = null, d = "<div";
    if (b)
        for (var e in b) {
            if (!$u.test(e))
                throw Error("x`" + e);
                var f = b[e];
                if (null != f) {
                    var g;
                    g = e;
                    if (f instanceof Uu)
                        f = Xu(f);
                    else if ("style" == g.toLowerCase()) {
                        if (!_.Tc(f))
                            throw Error("A`" +
                            typeof f + "`" + f);
                            if (!(f instanceof _.pi)) {
                                var k = "", l = void 0;
                                for (l in f) {
                                    if (!/^[-_a-zA-Z0-9]+$/.test(l))
                                        throw Error("u`" + l);
                                        var m = f[l];
                                        null != m && (m instanceof Uu ? m = Xu(m) : Wu.test(m) || (m = "zClosurez"), k += l + ":" + m + ";")
                                    }
                                    f = k ? _.qi(k) : _.ri
                            }
                            f = f instanceof _.pi && f.constructor === _.pi && f.B === _.oi ? f.A : "type_error:SafeStyle"
                        } else {
                            if (/^on/i.test(g))
                                throw Error("y`" + g + "`" + f);
                                if (g.toLowerCase()in _.Ai)
                                    if (f instanceof Yu)
                                        f = f instanceof Yu && f.constructor === Yu && f.A === Vu ? "" : "type_error:TrustedResourceUrl";
                                    else if (f instanceof
                                    _.ti)
                                        f = _.ui(f);
                                    else 
                                        throw Error("z`" + g + "`div`" + f);
                        }
                        f.Tg && (f = f.Jg());
                        g = g + '="' + _.sd(String(f)) + '"';
                        d = d + (" " + g)
                    }
            }
    e = void 0;
    _.ca(e) ? _.ha(e) || (e = [e]) : e = [];
    !0 === _.ni.div ? d += ">" : (c = Zu(e), d += ">" + _.xi(c) + "</div>", c = c.Bg());
    (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? c = 0 : c = null);
    b = _.yi(d, c);
    a.innerHTML = _.xi(b);
    a = a.firstChild;
    b = a.style[_.$c("transition")];
    return "" != ("undefined" !== typeof b ? b : a.style[_.Vr(a, "transition")] || "")
});

var aD = function(a, b, c, d, e) {
    this.width = a;
    this.height = b;
    this.A = c;
    this.B = d;
    this.opacity = e
}, bD = function(a, b, c, d) {
    return new aD(void 0 == b ? a.width : b, void 0 == c ? a.height : c, a.A, a.B, void 0 == d ? a.opacity : d)
};
aD.prototype.equals = function(a) {
    return this.width == a.width && this.height == a.height && this.A == a.A && this.B == a.B && this.opacity == a.opacity
};
aD.prototype.interpolate = function(a, b) {
    var c = 1 - b;
    return new aD(Math.round(this.width * c + a.width * b), Math.round(this.height * c + a.height * b), Math.round(this.A * c + a.A * b), Math.round(this.B * c + a.B * b), this.opacity * c + a.opacity * b)
};
_.cD = function(a) {
    _.Ms.call(this, a);
    this.$ = new _.et(this)
};
_.u(_.cD, _.Os);
_.eD = function(a) {
    var b = Number(a.F(200, "widgetWidth", "width")), c = Number(a.F(100, "widgetHeight", "height")), d = a.F("auto", "corner"), e = a.F({}, "menuCss"), f = a.F(!0, "hideOnClick");
    a.dc=!!a.F(!0, "hideOnLeave");
    a.lb=!!a.F((0, _.bv)(), "useCss3Transition");
    a.fd=!!a.F(!0, "allowOffset");
    var g = window.document.createElement("div");
    a.B = g;
    var k = _.Rs(a);
    k.parentNode.appendChild(g);
    var l = window.document.createElement("div");
    a.N = l;
    g.appendChild(l);
    e.position = "absolute";
    e.width = b + "px";
    e.height = "0";
    e.border = e.border || "1px solid #aaa";
    e.background = e.background || "#fff";
    e.zIndex = _.Ts(a);
    e.overflow = "hidden";
    e.boxShadow = e.MozBoxShadow = e.webkitBoxShadow = e.boxShadow || "0 2px 2px rgba(0,0,0,0.3)";
    _.Q(g, e);
    _.Q(l, {
        left: "-1000px",
        top: "-1000px",
        position: "absolute",
        width: b + "px",
        height: c + "px"
    });
    a.hd = g.offsetWidth - b;
    a.jd = g.offsetHeight;
    e = "auto" == d ? ["top", "start"] : d.split("-");
    k = _.ns(k);
    a.Ra = "bottom" == e[0];
    a.ka = "right" == e[1] || "left" != e[1] && k;
    a.C = dD(a, b, c, "auto" == d);
    a.$a = _.r.setTimeout((0, _.s)(a.gd, a), 500);
    a.$.P(g, "mouseover", a.PG);
    _.gt(a.$, g,
    "mouseout", a.OG, !1, a);
    f && _.r.setTimeout((0, _.s)(function() {
        this.U || this.$.P(window.document, "click", this.HH)
    }, a), 0)
};
_.cD.prototype.open = function() {
    _.eD(this);
    this.S.Sd(this.B);
    this.S.Nb("resize", (0, _.s)(this.resize, this));
    this.S.Lc("showMenu", (0, _.s)(this.Oz, this));
    var a = this.S.methods;
    a.setHideOnLeave = (0, _.s)(this.Tw, this);
    a.displayStateCallback && (this.qd = a.displayStateCallback, delete a.displayStateCallback);
    this.S.Ed(this.N, {
        height: "100%"
    });
    _.fD(this, this.C)
};
_.cD.prototype.open = _.cD.prototype.open;
_.cD.prototype.jc = function(a) {
    this.U || (a = a || {}, this.N.style.left = "0", this.N.style.top = "0", this.D && (_.yg(this.D), this.D = null), this.$a && (_.r.clearTimeout(this.$a), this.$a = null), gD(this, (0, window.parseInt)(a.width, 10) || (0, window.parseInt)(this.S.width, 10) || this.C.width, (0, window.parseInt)(a.height, 10) || (0, window.parseInt)(this.S.height, 10) || this.C.height))
};
_.cD.prototype.onready = _.cD.prototype.jc;
_.cD.prototype.resize = function(a) {
    this.U || gD(this, (0, window.isNaN)( + a.width) ? this.C.width : + a.width, (0, window.isNaN)( + a.height) ? this.C.height : + a.height)
};
_.cD.prototype.close = function() {
    this.Ha ? hD(this) : (this.pa=!0, iD(this))
};
_.cD.prototype.close = _.cD.prototype.close;
_.cD.prototype.F = function(a, b) {
    for (var c, d = 1, e = arguments.length; d < e && (c = this.A[arguments[d]], void 0 === c); ++d);
    return void 0 !== c ? c && "object" == typeof c ? (d = {}, _.Sr(d, c), d) : c : a
};
var dD = function(a, b, c, d) {
    var e = _.Rs(a), f = _.Bs(e.offsetParent);
    f.right -= a.hd;
    f.bottom -= a.jd;
    if (d) {
        var g = e.offsetLeft;
        d = g + b < f.right;
        g = g + e.offsetWidth - b >= f.left;
        a.ka = a.ka?!d || g : !d && g;
        g = e.offsetTop;
        d = g + c < f.bottom;
        g = g + e.offsetHeight - c >= f.top;
        a.Ra = a.Ra?!d || g : !d && g
    }
    d = jD(a.ka, e.offsetLeft, e.offsetWidth, b, f.left, f.right);
    a = jD(a.Ra, e.offsetTop, e.offsetHeight, c, f.top, f.bottom);
    return new aD(b, c, d, a, 1)
}, jD = function(a, b, c, d, e, f) {
    return a ? (a = b + c, Math.min(f - a, Math.max(e + d - a, 0))) : Math.max(e - b, Math.min(f - b - d, 0))
},
gD = function(a, b, c) {
    a.S.Ea().style.width = b + "px";
    a.S.Ea().style.height = c + "px";
    a.N.style.width = b + "px";
    a.N.style.height = c + "px";
    b = a.fd ? dD(a, b, c, !1) : bD(a.ua, b, c);
    a.C = b;
    a.M || kD(a, b)
};
_.h = _.cD.prototype;
_.h.Tw = function(a) {
    this.dc=!!a
};
_.h.PG = function() {
    !this.M && this.K && (_.r.clearTimeout(this.K), this.K = null)
};
_.h.OG = function(a) {
    if (!(this.M || this.K ||!this.dc || a.relatedTarget && _.Dg(this.B, a.relatedTarget))) {
        var b = _.Cs(this.B);
        a = a.clientY > b.top && a.clientY < b.top + b.height ? 0 : 300;
        this.K = _.r.setTimeout((0, _.s)(this.tb, this), a)
    }
};
_.h.HH = function(a) {
    _.Ss(this.B, a) || this.tb()
};
_.h.Oz = function(a) {
    this.show(!!a || void 0 === a)
};
_.h.show = function(a) {
    a?!this.U && this.Ha && (this.M = this.Ha=!1, _.fD(this, this.C)) : this.tb()
};
_.fD = function(a, b) {
    lD(a, bD(b, void 0, 0, 0));
    _.r.setTimeout((0, _.s)(function() {
        this.M || (this.C = b, this.lb && _.av(this.B, "width 350ms cubic-bezier(.23, .50, .32, 1),height 350ms cubic-bezier(.23, .50, .32, 1),left 350ms cubic-bezier(.23, .50, .32, 1),top 350ms cubic-bezier(.23, .50, .32, 1),opacity 350ms cubic-bezier(.23, .50, .32, 1)"), kD(this, b), this.ia(!0, !1), this.xa && (_.r.clearTimeout(this.xa), this.pa=!1), this.xa = _.r.setTimeout((0, _.s)(this.ia, this, !0, !0), 350))
    }, a), 0)
};
_.cD.prototype.tb = function() {
    this.M || iD(this)
};
var iD = function(a) {
    a.M || (a.ia(!1, !1), kD(a, bD(a.ua, void 0, 0, 0)), a.M=!0, a.xa && _.r.clearTimeout(a.xa), a.xa = _.r.setTimeout((0, _.s)(function() {
        this.Ha=!0;
        this.pa ? (hD(this), this.pa=!1) : (this.lb && _.av(this.B, ""), this.B.visibility = "hidden", this.B.left = "-1000px", this.B.top = "-1000px");
        this.ia(!1, !0)
    }, a), 350))
}, hD = function(a) {
    a.U=!0;
    _.se(a.$);
    a.$ = null;
    a.K && (_.r.clearTimeout(a.K), a.K = null);
    a.Y && (_.r.clearTimeout(a.Y), a.Y = null);
    _.yg(a.B);
    a.B = null;
    _.yg(_.Rs(a));
    a.N = null;
    a.D = null
};
_.cD.prototype.ia = function(a, b) {
    var c = this.qd;
    c && _.r.setTimeout(function() {
        c(a, b)
    }, 0)
};
_.cD.prototype.gd = function() {
    this.D = window.document.createElement("div");
    this.D.style.width = this.D.style.height = "100%";
    this.D.style.position = "absolute";
    this.D.style.background = "url(//ssl.gstatic.com/ui/v1/activityindicator/loading_gs.gif) no-repeat " + (this.C.width - 19) / 2 + "px " + (this.C.height - 19) / 2 + "px";
    this.B.appendChild(this.D)
};
var kD = function(a, b) {
    if (!a.M)
        if (a.lb)
            lD(a, b);
        else {
            var c = (0, _.sa)() - 20 + 350;
            a.Y && _.r.clearTimeout(a.Y);
            a.Mc(a.ua, b, c)
        }
}, lD = function(a, b) {
    var c = a.B, d = _.Rs(a);
    c.style.left = a.ka ? d.offsetLeft + d.offsetWidth + b.A - b.width + "px" : d.offsetLeft + b.A + "px";
    c.style.width = b.width + "px";
    c.style.top = a.Ra ? d.offsetTop + d.offsetHeight + b.B - b.height + "px" : d.offsetTop + b.B + "px";
    c.style.height = b.height + "px";
    _.Hs(c, b.opacity);
    a.ua = b
};
_.cD.prototype.Mc = function(a, b, c) {
    this.Y = null;
    if (!this.U&&!a.equals(b)) {
        var d = (0, _.sa)();
        d >= c ? lD(this, b) : (d = Math.min(1 - (c - d) / 350, 1), lD(this, a.interpolate(b, 1 - Math.pow(1 - d, 3))), this.Y = _.r.setTimeout((0, _.s)(this.Mc, this, a, b, c), 20))
    }
};

_.K.rb("slide-menu", function(a) {
    return new _.Ys(new _.cD(a))
});
_.C("gapi.plusone.render", _.fc);
_.C("gapi.plusone.go", _.gc);
_.vn = _.Ha(_.Ya, "rw", _.Ja());
var wn = function(a, b) {
    var c = _.vn[a];
    c && c.state < b && (c.state = b)
};
var xn = function(a) {
    a = (a = _.vn[a]) ? a.oid : void 0;
    if (a) {
        var b = _.Ba.getElementById(a);
        b && b.parentNode.removeChild(b);
        delete _.vn[a];
        xn(a)
    }
};
_.yn = function(a) {
    a = a.container;
    "string" === typeof a && (a = window.document.getElementById(a));
    return a
};
_.zn = function(a) {
    var b = a.clientWidth;
    return "position:absolute;top:-10000px;width:" + (b ? b + "px" : a.style.width || "300px") + ";margin:0px;border-style:none;"
};
_.An = function(a, b) {
    var c = {}, d = a.jb(), e = b && b.width, f = b && b.height, g = b && b.verticalAlign;
    g && (c.verticalAlign = g);
    e || (e = d.width || a.width);
    f || (f = d.height || a.height);
    d.width = c.width = e;
    d.height = c.height = f;
    d = a.Ea();
    e = a.ca();
    wn(e, 2);
    t: {
        e = a.Oa();
        c = c || {};
        if (_.Ya.oa) {
            var k = d.id;
            if (k) {
                f = (f = _.vn[k]) ? f.state : void 0;
                if (1 === f || 4 === f)
                    break t;
                xn(k)
            }
        }(f = e.nextSibling) && f.getAttribute && f.getAttribute("data-gapistub") && (e.parentNode.removeChild(f), e.style.cssText = "");
        var f = c.width, g = c.height, l = e.style;
        l.textIndent = "0";
        l.margin =
        "0";
        l.padding = "0";
        l.background = "transparent";
        l.borderStyle = "none";
        l.cssFloat = "none";
        l.styleFloat = "none";
        l.lineHeight = "normal";
        l.fontSize = "1px";
        l.verticalAlign = "baseline";
        e = e.style;
        e.display = "inline-block";
        d = d.style;
        d.position = "static";
        d.left = 0;
        d.top = 0;
        d.visibility = "visible";
        f && (e.width = d.width = f + "px");
        g && (e.height = d.height = g + "px");
        c.verticalAlign && (e.verticalAlign = c.verticalAlign);
        k && wn(k, 3)
    }(k = b ? b.title : null) && a.Ea().setAttribute("title", k)
};
_.Bn = function(a) {
    var b = a.Oa();
    b && b.removeChild(a.Ea())
};
_.Cn = function(a) {
    a.where = _.yn(a);
    var b = a.messageHandlers = a.messageHandlers || {}, c = function(a) {
        _.An(this, a)
    };
    b._ready = c;
    b._renderstart = c;
    var d = a.onClose;
    a.onClose = function(a) {
        d && d.call(this, a);
        _.Bn(this)
    };
    a.onCreate = function(a) {
        a = a.Ea();
        a.style.cssText = _.zn(a)
    }
};

var Ar = _.K.rb, Br = {
    open: function(a) {
        var b = _.yn(a.jb());
        return a.Ed(b, {
            style: _.zn(b)
        })
    },
    attach: function(a, b) {
        var c = _.yn(a.jb()), d = b.id, e = b.getAttribute("data-postorigin") || b.src, f = /#(?:.*&)?rpctoken=(\d+)/.exec(e), f = f && f[1];
        a.id = d;
        a.B = f;
        a.C = c;
        a.A = b;
        _.K.Uf[d] = a;
        f = _.Jq(a.methods);
        f._ready = a.cn;
        f._close = a.close;
        f._open = a.it;
        f._resizeMe = a.jt;
        f._renderstart = a.Kx;
        _.Kq(f, d, "", a, !0);
        _.J.wn(a.id, a.B);
        _.J.Ze(a.id, e);
        var c = _.K.Ij({
            style: _.zn(c)
        }), g;
        for (g in c)
            Object.prototype.hasOwnProperty.call(c, g) && ("style" == g ? a.A.style.cssText = c[g] : a.A.setAttribute(g, c[g]))
    }
};
Br.onready = _.An;
Br.onRenderStart = _.An;
Br.close = _.Bn;
Ar("inline", Br);

_.Ji = (window.gapi || {}).load;
_.Dn = _.Ja();
_.En = function(a) {
    var b = window;
    a = (a || b.location.href).match(/.*(\?|#|&)usegapi=([^&#]+)/) || [];
    return "1" === (0, window.decodeURIComponent)(a[a.length - 1] || "")
};
var In, Jn, Kn, Ln, Mn, Pn, Nn, On, Qn;
_.Fn = {
    apppackagename: 1,
    callback: 1,
    clientid: 1,
    cookiepolicy: 1,
    openidrealm: - 1,
    includegrantedscopes: - 1,
    requestvisibleactions: 1,
    scope: 1
};
_.Gn=!1;
_.Hn = function() {
    if (!_.Gn) {
        for (var a = window.document.getElementsByTagName("meta"), b = 0; b < a.length; ++b) {
            var c = a[b].name.toLowerCase();
            if (_.Wc(c, "google-signin-")) {
                var c = c.substring(14), d = a[b].content;
                _.Fn[c] && d && (_.Dn[c] = d)
            }
        }
        if (window.self !== window.top) {
            var a = window.document.location.toString(), e;
            for (e in _.Fn)
                0 < _.Fn[e] && (b = _.Ta(a, e, "")) && (_.Dn[e] = b)
            }
        _.Gn=!0
    }
    e = _.Ja();
    _.rl(_.Dn, e);
    return e
};
In = function(a) {
    return function(b, c) {
        return a ? _.Vl()[c] || a[c] || "" : _.Vl()[c] || ""
    }
};
Jn = {
    button: !0,
    div: !0,
    span: !0
};
Kn = function(a) {
    return _.Ha(_.Ya, "watt", _.Ja())[a]
};
Ln = function(a) {
    var b = _.Ha(_.Ya, "sws", []);
    return 0 <= _.Mb.call(b, a)
};
Mn = function() {};
Pn = function(a) {
    var b = a.Mh, c = function(a) {
        c.J.constructor.call(this, a);
        var b = this.sd.length;
        this.A = [];
        for (var d = 0; d < b; ++d)
            this.sd[d].kS || (this.A[d] = new this.sd[d](a))
    };
    _.u(c, b);
    for (var d = []; a;) {
        if (b = a.Mh) {
            b.sd && _.jd(d, b.sd);
            var b = b.prototype, e;
            for (e in b)
                if (b.hasOwnProperty(e) && _.Uc(b[e]) && b[e] !== a) {
                    var f=!!b[e].$R, g = Nn(e, b, d, f);
                    (f = On(e, b, g, f)) && (c.prototype[e] = f)
                }
        }
        a = a.J && a.J.constructor
    }
    c.prototype.sd = d;
    return c
};
Nn = function(a, b, c, d) {
    for (var e = [], f = 0; f < c.length && (c[f].prototype[a] === b[a] || (e.push(f), !d)); ++f);
    return e
};
On = function(a, b, c, d) {
    var e;
    c.length ? d ? e = function(b) {
        var d = this.A[c[0]];
        return d ? d[a].apply(this.A[c[0]], arguments) : this.sd[c[0]].prototype[a].apply(this, arguments)
    } : b[a].pD ? e = function(b) {
        var d;
        t: {
            d = Array.prototype.slice.call(arguments, 0);
            for (var e = 0; e < c.length; ++e) {
                var l = this.A[c[e]];
                if (l = l ? l[a].apply(l, d) : this.sd[c[e]].prototype[a].apply(this, d)) {
                    d = l;
                    break t
                }
            }
            d=!1
        }
        return d
    } : b[a].oD ? e = function(b) {
        var d;
        t: {
            d = Array.prototype.slice.call(arguments, 0);
            for (var e = 0; e < c.length; ++e) {
                var l = this.A[c[e]], l = l ?
                l[a].apply(l, d): this.sd[c[e]].prototype[a].apply(this, d);
                if (null != l) {
                    d = l;
                    break t
                }
            }
            d = void 0
        }
        return d
    } : b[a].wx ? e = function(b) {
        for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < c.length; ++e) {
            var l = this.A[c[e]];
            l ? l[a].apply(l, d) : this.sd[c[e]].prototype[a].apply(this, d)
        }
    } : e = function(b) {
        for (var d = Array.prototype.slice.call(arguments, 0), e = [], l = 0; l < c.length; ++l) {
            var m = this.A[c[l]];
            e.push(m ? m[a].apply(m, d) : this.sd[c[l]].prototype[a].apply(this, d))
        }
        return e
    } : d || b[a].pD || b[a].oD || b[a].wx ? e = null : e = Qn;
    return e
};
Qn = function() {
    return []
};
Mn.prototype.B = function(a) {
    if (this.A)
        for (var b = 0; b < this.A.length; ++b)
            if (this.A[b]instanceof a)
                return this.A[b];
    return null
};
var Rn = function(a) {
    return this.Vo.B(a)
};
var Sn;
Sn = function(a) {
    var b;
    a.match(/^https?%3A/i) && (b = (0, window.decodeURIComponent)(a));
    return _.Dl(window.document, b ? b : a)
};
_.Tn = function(a) {
    a = a || "canonical";
    for (var b = window.document.getElementsByTagName("link"), c = 0, d = b.length; c < d; c++) {
        var e = b[c], f = e.getAttribute("rel");
        if (f && f.toLowerCase() == a && (e = e.getAttribute("href")) && (e = Sn(e)) && null != e.match(/^https?:\/\/[\w\-\_\.]+/i))
            return e
    }
    return window.location.href
};
_.Un = function() {
    return window.location.origin || window.location.protocol + "//" + window.location.host
};
_.Vn = function(a, b, c, d) {
    return (a = "string" == typeof a ? a : void 0) ? Sn(a) : _.Tn(d)
};
_.Wn = function(a, b, c) {
    null == a && c && (a = c.db, null == a && (a = c.gwidget && c.gwidget.db));
    return a || void 0
};
_.Xn = function(a, b, c) {
    null == a && c && (a = c.ecp, null == a && (a = c.gwidget && c.gwidget.ecp));
    return a || void 0
};
_.Yn = function(a, b) {
    return _.Vn(a, 0, 0, b.action ? void 0 : "publisher")
};
var Zn, $n, ao, bo, co, eo, go, fo;
Zn = {
    se: "0"
};
$n = {
    post: !0
};
ao = {
    style: "position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"
};
bo = "onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" ");
co = _.Ha(_.Ya, "WI", _.Ja());
eo = ["style", "data-gapiscan"];
go = function(a) {
    for (var b = _.Ja(), c = 0 != a.nodeName.toLowerCase().indexOf("g:"), d = 0, e = a.attributes.length; d < e; d++) {
        var f = a.attributes[d], g = f.name, k = f.value;
        0 <= _.Mb.call(eo, g) || c && 0 != g.indexOf("data-") || "null" === k || "specified"in f&&!f.specified || (c && (g = g.substr(5)), b[g.toLowerCase()] = k)
    }
    a = a.style;
    (c = fo(a && a.height)) && (b.height = String(c));
    (a = fo(a && a.width)) && (b.width = String(a));
    return b
};
_.io = function(a, b, c, d, e, f) {
    var g;
    c.rd ? g = b : (g = window.document.createElement("div"), b.setAttribute("data-gapistub", !0), g.style.cssText = "position:absolute;width:450px;left:-10000px;", b.parentNode.insertBefore(g, b));
    f.siteElement = g;
    g.id || (g.id = _.ho(a));
    b = _.Ja();
    b[">type"] = a;
    _.rl(c, b);
    a = _.Zl(d, g, e);
    f.iframeNode = a;
    f.id = a.getAttribute("id")
};
_.ho = function(a) {
    _.Ha(co, a, 0);
    return "___" + a + "_" + co[a]++
};
fo = function(a) {
    var b = void 0;
    "number" === typeof a ? b = a : "string" === typeof a && (b = (0, window.parseInt)(a, 10));
    return b
};
var jo, ko, lo, mo, no = /(?:^|\s)g-((\S)*)(?:$|\s)/, oo = {
    plusone: !0,
    autocomplete: !0,
    profile: !0,
    signin: !0
};
jo = _.Ha(_.Ya, "SW", _.Ja());
ko = _.Ha(_.Ya, "SA", _.Ja());
lo = _.Ha(_.Ya, "SM", _.Ja());
mo = _.Ha(_.Ya, "FW", []);
var po = function(a, b) {
    var c;
    "string" === typeof a ? c = window.document.getElementById(a) : c = a;
    return c || b
}, so = function(a, b) {
    var c, d, e, f;
    _.qo("ps0");
    var g = po(a, _.Ba);
    d = _.Ba.documentMode;
    if (g.querySelectorAll && (!d || 8 < d)) {
        d = b ? [b] : _.mb(jo).concat(_.mb(ko)).concat(_.mb(lo));
        e = [];
        for (var k = 0; k < d.length; k++) {
            var l = d[k];
            e.push(".g-" + l, "g\\:" + l)
        }
        d = g.querySelectorAll(e.join(","))
    } else 
        d = g.getElementsByTagName("*");
    g = _.Ja();
    for (e = 0; e < d.length; e++) {
        k = d[e];
        var m = k, l = b, n = m.nodeName.toLowerCase(), p = void 0;
        m.getAttribute("data-gapiscan") ?
        l = null : (0 == n.indexOf("g:") ? p = n.substr(2) : (m = (m = String(m.className || m.getAttribute("class"))) && no.exec(m)) && (p = m[1]), l=!p ||!(jo[p] || ko[p] || lo[p]) || l && p !== l ? null : p);
        l && (oo[l] || 0 == k.nodeName.toLowerCase().indexOf("g:") || 0 != _.mb(go(k)).length) && (k.setAttribute("data-gapiscan", !0), _.Ha(g, l, []).push(k))
    }
    for (c in g)
        mo.push(c);
    _.qo("ps1");
    if (c = mo.join(":"))
        try {
            _.Oa.load(c, void 0)
    } catch (v) {
        _.Qb(v);
        return 
    }
    k = [];
    for (f in g)
        for (e = g[f], d = 0, c = e.length; d < c; d++)
            l = e[d], ro(f, l, go(l), k, c)
};
var to = function(a, b) {
    var c = Kn(a);
    b && c ? (c(b), (c = b.iframeNode) && c.setAttribute("data-gapiattached", !0)) : _.Oa.load(a, function() {
        var c = Kn(a), e = b && b.iframeNode;
        e && c ? (c(b), e.setAttribute("data-gapiattached", !0)) : (0, _.Oa[a].go)(e && e.parentNode)
    })
}, ro = function(a, b, c, d, e, f) {
    switch (uo(b, a, f)) {
    case 0:
        a = lo[a] ? a + "_annotation" : a;
        d = {};
        d.iframeNode = b;
        d.userParams = c;
        to(a, d);
        break;
    case 1:
        if (b.parentNode) {
            for (var g in c) {
                if (f = _.La(c, g))
                    f = c[g], f=!!f && "object" === typeof f && (!f.toString || f.toString === Object.prototype.toString ||
                    f.toString === Array.prototype.toString);
                if (f)
                    try {
                        c[g] = (0, _.$b)(c[g])
                    } catch (k) {
                    delete c[g]
                }
            }
            g=!0;
            c.dontclear && (g=!1);
            delete c.dontclear;
            var l, m, n;
            f = {};
            var p = n = a;
            "plus" == a && c.action && (n = a + "_" + c.action, p = a + "/" + c.action);
            (n = _.E("iframes/" + n + "/url")) || (n = ":im_socialhost:/:session_prefix::im_prefix:_/widget/render/" + p + "?usegapi=1");
            for (m in Zn)
                f[m] = m + "/" + (c[m] || Zn[m]) + "/";
            m = _.Dl(_.Ba, n.replace(_.Ul, In(f)));
            p = "iframes/" + a + "/params/";
            f = {};
            _.rl(c, f);
            (n = _.E("lang") || _.E("gwidget/lang")) && (f.hl = n);
            $n[a] || (f.origin =
            _.Un());
            f.exp = _.E(p + "exp");
            if (p = _.E(p + "location"))
                for (n = 0; n < p.length; n++) {
                    var v = p[n];
                    f[v] = _.Aa.location[v]
                }
            switch (a) {
            case "plus":
            case "follow":
                f.url = _.Yn(f.href, c);
                delete f.href;
                break;
            case "plusone":
                p = (p = c.href) ? Sn(p) : _.Tn();
                f.url = p;
                f.db = _.Wn(c.db, 0, _.E());
                f.ecp = _.Xn(c.ecp, 0, _.E());
                delete f.href;
                break;
            case "signin":
                f.url = _.Tn()
            }
            _.Ya.ILI && (f.iloader = "1");
            delete f["data-onload"];
            delete f.rd;
            for (var x in Zn)
                f[x] && delete f[x];
            f.gsrc = _.E("iframes/:source:");
            x = _.E("inline/css");
            "undefined" !== typeof x &&
            0 < e && x >= e && (f.ic = "1");
            x = /^#|^fr-/;
            e = {};
            for (var t in f)
                _.La(f, t) && x.test(t) && (e[t.replace(x, "")] = f[t], delete f[t]);
            t = "q" == _.E("iframes/" + a + "/params/si") ? f : e;
            x = _.Hn();
            for (l in x)
                !_.La(x, l) || _.La(f, l) || _.La(e, l) || (t[l] = x[l]);
            l = [].concat(bo);
            t = _.E("iframes/" + a + "/methods");
            _.gb(t) && (l = l.concat(t));
            for (var w in c)
                _.La(c, w) && /^on/.test(w) && ("plus" != a || "onconnect" != w) && (l.push(w), delete f[w]);
            delete f.callback;
            e._methods = l.join(",");
            l = _.El(m, f, e);
            t = {
                allowPost: 1,
                attributes: ao
            };
            t.dontclear=!g;
            w = {};
            w.userParams =
            c;
            w.url = l;
            w.type = a;
            _.io(a, b, c, l, t, w);
            b = w.id;
            c = _.Ja();
            c.id = b;
            c.userParams = w.userParams;
            c.url = w.url;
            c.type = w.type;
            c.state = 1;
            _.vn[b] = c;
            b = w
        } else 
            b = null;
        b && ((c = b.id) && d.push(c), to(a, b))
    }
}, uo = function(a, b, c) {
    if (a && 1 === a.nodeType && b) {
        if (c)
            return 1;
        if (lo[b]) {
            if (Jn[a.nodeName.toLowerCase()])
                return (a = a.innerHTML) && a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") ? 0 : 1
        } else {
            if (ko[b])
                return 0;
            if (jo[b])
                return 1
        }
    }
    return null
};
_.Ha(_.Oa, "platform", {}).go = function(a, b) {
    so(a, b)
};
var vo = _.Ha(_.Ya, "perf", _.Ja()), wo = _.Ha(vo, "g", _.Ja()), xo = _.Ha(vo, "i", _.Ja()), yo, zo, Ao, Bo, Eo, Fo;
_.Ha(vo, "r", []);
yo = _.Ja();
zo = _.Ja();
Ao = function(a, b, c, d) {
    yo[c] = yo[c]||!!d;
    _.Ha(zo, c, []);
    zo[c].push([a, b])
};
Bo = function(a, b, c) {
    var d = vo.r;
    "function" === typeof d ? d(a, b, c) : d.push([a, b, c])
};
_.qo = function(a, b) {
    wo[a] = b || (new Date).getTime();
    Bo(a)
};
_.Do = function(a, b, c, d) {
    if ("_p" == b)
        throw Error("I");
    _.Co(a, b, c, d)
};
_.Co = function(a, b, c, d) {
    Eo(b, c)[a] = d || (new Date).getTime();
    Bo(a, b, c)
};
Eo = function(a, b) {
    var c = _.Ha(xo, a, _.Ja());
    return _.Ha(c, b, _.Ja())
};
Fo = function(a, b, c) {
    var d = null;
    b && c && (d = Eo(b, c)[a]);
    return d || wo[a]
};
_.Go = function(a, b, c, d, e, f) {
    _.Do("wrt0", a, b, c);
    _.Do("wrt1", a, b, d);
    _.Do("wrt2", a, b, e);
    _.Do("wrt3", a, b, f)
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
    window.__gapi_jstiming__ = {
        Timer: a,
        load: c
    };
    if (b) {
        var d = b.navigationStart, e = b.responseStart;
        0 < d && e >= d && (window.__gapi_jstiming__.srt = e - d)
    }
    if (b) {
        var f = window.__gapi_jstiming__.load;
        0 < d && e >= d && (f.tick("_wtsrt", void 0,
        d), f.tick("wtsrt_", "_wtsrt", e), f.tick("tbsd_", "wtsrt_"))
    }
    try {
        b = null, window.chrome && window.chrome.csi && (b = Math.floor(window.chrome.csi().pageT), f && 0 < d && (f.tick("_tbnd", void 0, window.chrome.csi().startE), f.tick("tbnd_", "_tbnd", d))), null == b && window.gtbExternal && (b = window.gtbExternal.pageT()), null == b && window.external && (b = window.external.pageT, f && 0 < d && (f.tick("_tbnd", void 0, window.external.startE), f.tick("tbnd_", "_tbnd", d))), b && (window.__gapi_jstiming__.pt = b)
    } catch (g) {}
})();
if (window.__gapi_jstiming__) {
    window.__gapi_jstiming__.nu = {};
    window.__gapi_jstiming__.xI = 1;
    var Ho = function(a, b, c) {
        var d = a.t[b], e = a.t.start;
        if (d && (e || c))
            return d = a.t[b][0], void 0 != c ? e = c : e = e[0], d - e
    };
    window.__gapi_jstiming__.getTick = Ho;
    window.__gapi_jstiming__.getLabels = function(a) {
        var b = [], c;
        for (c in a.t)
            b.push(c);
        return b
    };
    var Io = function(a, b, c) {
        var d = "";
        window.__gapi_jstiming__.srt && (d += "&srt=" + window.__gapi_jstiming__.srt);
        window.__gapi_jstiming__.pt && (d += "&tbsrt=" + window.__gapi_jstiming__.pt);
        try {
            window.external &&
            window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" + window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
        } catch (e) {}
        var f = window.chrome;
        if (f && (f = f.loadTimes)) {
            f().wasFetchedViaSpdy && (d += "&p=s");
            if (f().wasNpnNegotiated) {
                var d = d + "&npn=1", g = f().npnNegotiatedProtocol;
                g && (d += "&npnv=" + (window.encodeURIComponent || window.escape)(g))
            }
            f().wasAlternateProtocolAvailable && (d += "&apa=1")
        }
        var k = a.t, l = k.start, f =
        [], g = [], m;
        for (m in k)
            if ("start" != m && 0 != m.indexOf("_")) {
                var n = k[m][1];
                n ? k[n] && g.push(m + "." + Ho(a, m, k[n][0])) : l && f.push(m + "." + Ho(a, m))
            }
        if (b)
            for (var p in b)
                d += "&" + p + "=" + b[p];
        (b = c) || (b = "https:" == window.document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
        return [b, "?v=3", "&s=" + (window.__gapi_jstiming__.sn || "") + "&action=", a.name, g.length ? "&it=" + g.join(","): "", d, "&rt=", f.join(",")].join("")
    }, Jo = function(a, b, c) {
        a = Io(a, b, c);
        if (!a)
            return "";
        b = new window.Image;
        var d = window.__gapi_jstiming__.xI++;
        window.__gapi_jstiming__.nu[d] = b;
        b.onload = b.onerror = function() {
            window.__gapi_jstiming__ && delete window.__gapi_jstiming__.nu[d]
        };
        b.src = a;
        b = null;
        return a
    };
    window.__gapi_jstiming__.report = function(a, b, c) {
        if ("prerender" == window.document.webkitVisibilityState) {
            var d=!1, e = function() {
                if (!d) {
                    b ? b.prerender = "1" : b = {
                        prerender: "1"
                    };
                    var f;
                    "prerender" == window.document.webkitVisibilityState ? f=!1 : (Jo(a, b, c), f=!0);
                    f && (d=!0, window.document.removeEventListener("webkitvisibilitychange", e, !1))
                }
            };
            window.document.addEventListener("webkitvisibilitychange", e, !1);
            return ""
        }
        return Jo(a, b, c)
    }
};
var Ko = [73, 74, 77, 78], Lo = {
    g: "gapi_global",
    m: "gapi_module",
    w: "gwidget"
}, Mo = function(a, b) {
    this.type = a ? "_p" == a ? "m" : "w" : "g";
    this.name = a;
    this.A = b
};
Mo.prototype.key = function() {
    switch (this.type) {
    case "g":
        return this.type;
    case "m":
        return this.type + "." + this.A;
    case "w":
        return this.type + "." + this.name + this.A
    }
};
var No = new Mo, Oo = window.navigator.userAgent.match(/iPhone|iPad|Android|PalmWebOS|Maemo|Bada/), Po = _.Ha(vo, "_c", _.Ja()), Qo = Math.random() < (_.E("csi/rate") || 0), So = function(a, b, c) {
    for (var d = new Mo(b, c), e = _.Ha(Po, d.key(), _.Ja()), f = zo[a] || [], g = 0; g < f.length; ++g) {
        var k = f[g], l = k[0], m = a, n = b, p = c, k = Fo(k[1], n, p), m = Fo(m, n, p);
        e[l] = k && m ? m - k : null
    }
    yo[a] && Qo && (Ro(No), Ro(d))
}, To = function(a, b) {
    b = b || [];
    for (var c = [], d = 0; d < b.length; d++)
        c.push(a + b[d]);
    return c
}, Uo = function(a, b) {
    var c = [];
    c.push("l" + (_.E("isPlusUser") ? "1" : "0"));
    var d = "m" + (Oo ? "1" : "0");
    c.push(d);
    if ("m" == a.type)
        c.push("p" + a.A);
    else if ("w" == a.type) {
        var e = "n" + a.A;
        c.push(e);
        "0" == a.A && c.push(d + e)
    }
    c.push("u" + (_.E("isLoggedIn") ? "1" : "0"));
    return To(b ? "e" + b : "", c)
}, Ro = function(a) {
    var b = _.Aa.__gapi_jstiming__;
    b.sn = Lo[a.type];
    var c = new b.Timer(0), d;
    t: {
        switch (a.type) {
        case "g":
            d = "global";
            break t;
        case "m":
            d = a.A;
            break t;
        case "w":
            d = a.name;
            break t
        }
        d = void 0
    }
    c.name = d;
    d=!1;
    var e = a.key(), f = Po[e];
    c.tick("_start", null, 0);
    for (var g in f)
        c.tick(g, "_start", f[g]), d=!0;
    Po[e] = _.Ja();
    if (d) {
        g =
        [];
        d = _.E("lexps");
        g = g.concat(To("e", d));
        g = g.concat(Uo(a));
        for (e = 0; e < Ko.length; e++)
            f = Ko[e], 0 <= _.Mb.call(d, f) && (g = g.concat(Uo(a, f)));
        g = To("abc_", g);
        b.report(c, {
            e: g.join(",")
        })
    }
};
Ao("blt", "bs0", "bs1");
Ao("psi", "ps0", "ps1");
Ao("rpcqi", "rqe", "rqd");
Ao("bsprt", "bsrt0", "bsrt1");
Ao("bsrqt", "bsrt1", "bsrt2");
Ao("bsrst", "bsrt2", "bsrt3");
Ao("mli", "ml0", "ml1");
Ao("mei", "me0", "me1", !0);
Ao("wcdi", "wrs", "wcdi");
Ao("wci", "wrs", "wdc");
Ao("wdi", "wrs", "wrdi");
Ao("wdt", "bs0", "wrdt");
Ao("wri", "wrs", "wrri", !0);
Ao("wrt", "bs0", "wrrt");
Ao("wji", "wje0", "wje1", !0);
Ao("wjli", "wjl0", "wjl1");
Ao("whi", "wh0", "wh1", !0);
Ao("wai", "waaf0", "waaf1", !0);
Ao("wadi", "wrs", "waaf1", !0);
Ao("wadt", "bs0", "waaf1", !0);
Ao("wprt", "wrt0", "wrt1");
Ao("wrqt", "wrt1", "wrt2");
Ao("wrst", "wrt2", "wrt3", !0);
Ao("fbprt", "fsrt0", "fsrt1");
Ao("fbrqt", "fsrt1", "fsrt2");
Ao("fbrst", "fsrt2", "fsrt3", !0);
Ao("fdns", "fdns0", "fdns1");
Ao("fcon", "fcon0", "fcon1");
Ao("freq", "freq0", "freq1");
Ao("frsp", "frsp0", "frsp1");
Ao("fttfb", "fttfb0", "fttfb1");
Ao("ftot", "ftot0", "ftot1", !0);
var Vo = vo.r;
if ("function" !== typeof Vo) {
    for (var Wo; Wo = Vo.shift();)
        So.apply(null, Wo);
    vo.r = So
};
var Xo = ["div"], Yo = "onload", Zo=!0, $o=!0, ap = function(a) {
    return a
}, bp = null, cp = function(a) {
    var b = _.E(a);
    return "undefined" !== typeof b ? b : _.E("gwidget/" + a)
}, bp = _.E(), gp, hp, ip, jp, kp, lp, mp, pp, np, qp, vp, xp, yp, zp, Ap, rp, tp, Cp, sp, Dp, Ep, Fp, Gp;
_.E("gwidget");
var dp = cp("parsetags"), Yo = "explicit" === dp || "onload" === dp ? dp: Yo, ep = cp("google_analytics");
"undefined" !== typeof ep && (Zo=!!ep);
var fp = cp("data_layer");
"undefined" !== typeof fp && ($o=!!fp);
gp = function() {
    var a = this && this.ca();
    a && (_.Ya.drw = a)
};
hp = function() {
    _.Ya.drw = null
};
ip = function(a) {
    return function(b) {
        var c = a;
        "number" === typeof b ? c = b : "string" === typeof b && (c = b.indexOf("px"), - 1 != c && (b = b.substring(0, c)), c = (0, window.parseInt)(b, 10));
        return c
    }
};
jp = function(a) {
    "string" === typeof a && (a = window[a]);
    return "function" === typeof a ? a : null
};
kp = function() {
    return cp("lang") || "en-US"
};
lp = function(a) {
    if (!_.K.ta("attach")) {
        var b = {}, c = _.K.ta("inline"), d;
        for (d in c)
            c.hasOwnProperty(d) && (b[d] = c[d]);
        b.open = function(a) {
            var b = a.jb().renderData.id, b = window.document.getElementById(b);
            if (!b)
                throw Error("J");
            return c.attach(a, b)
        };
        _.K.rb("attach", b)
    }
    a.style = "attach"
};
mp = function() {
    var a = {};
    a.width = [ip(450)];
    a.height = [ip(24)];
    a.onready = [jp];
    a.lang = [kp, "hl"];
    a.iloader = [function() {
        return _.Ya.ILI
    }, "iloader"];
    return a
}();
pp = function(a) {
    var b = {};
    b.Kc = a[0];
    b.th =- 1;
    b.cU = "___" + b.Kc + "_";
    b.rK = "g:" + b.Kc;
    b.XS = "g-" + b.Kc;
    b.Dy = [];
    b.config = {};
    b.rl = [];
    b.eA = {};
    b.Mn = {};
    var c = function(a) {
        for (var c in a)
            if (_.La(a, c)) {
                b.config[c] = [jp];
                b.rl.push(c);
                var d = a[c], k = null, l = null, m = null;
                "function" === typeof d ? k = d : d && "object" === typeof d && (k = d.NS, l = d.Nn, m = d.Rn);
                m && (b.rl.push(m), b.config[m] = [jp], b.eA[c] = m);
                k && (b.config[c] = [k]);
                l && (b.Mn[c] = l)
            }
    }, d = function(a) {
        for (var c = {}, d = 0; d < a.length; ++d)
            c[a[d].toLowerCase()] = 1;
        c[b.rK] = 1;
        b.rH = c
    };
    a[1] && (b.Sx =
    a[1]);
    (function(a) {
        b.config = a;
        for (var c in mp)
            mp.hasOwnProperty(c)&&!b.config.hasOwnProperty(c) && (b.config[c] = mp[c])
    })(a[2] || {});
    a[3] && c(a[3]);
    a[4] && d(a[4]);
    a[5] && (b.bg = a[5]);
    b.UT=!0 === a[6];
    b.iI = a[7];
    b.jK = a[8];
    b.rH || d(Xo);
    b.dr = function(a) {
        b.th++;
        _.Do("wrs", b.Kc, String(b.th));
        var c = [], d = a.element, k = a.config, l = ":" + b.Kc;
        ":plus" == l && a.Zf && a.Zf.action && (l += "_" + a.Zf.action);
        var m = np(b, k), n = {};
        _.rl(_.Hn(), n);
        for (var p in a.Zf)
            null != a.Zf[p] && (n[p] = a.Zf[p]);
        p = {
            container: d.id,
            renderData: a.vI,
            style: "inline",
            height: k.height,
            width: k.width
        };
        lp(p);
        b.bg && (c[2] = p, c[3] = n, c[4] = m, b.bg("i", c));
        l = _.K.open(l, p, n, m);
        (0, _.op)(b, l, k, d, a.LD);
        c[5] = l;
        b.bg && b.bg("e", c)
    };
    return b
};
np = function(a, b) {
    for (var c = {}, d = a.rl.length - 1; 0 <= d; --d) {
        var e = a.rl[d], f = b[a.eA[e] || e] || b[e], g = b[e];
        g && f !== g && (f = function(a, b) {
            return function(c) {
                b.apply(this, arguments);
                a.apply(this, arguments)
            }
        }(f, g));
        f && (c[e] = f)
    }
    for (var k in a.Mn)
        a.Mn.hasOwnProperty(k) && (c[k] = qp(c[k] || function() {}, a.Mn[k]));
    c.drefresh = gp;
    c.erefresh = hp;
    return c
};
qp = function(a, b) {
    return function(c) {
        var d = b(c);
        if (d) {
            var e = c.href || null;
            if (Zo) {
                if (window._gat)
                    try {
                        var f = window._gat._getTrackerByName("~0");
                        f && "UA-XXXXX-X" != f._getAccount() ? f._trackSocial("Google", d, e) : window._gaq && window._gaq.push(["_trackSocial", "Google", d, e])
                    } catch (g) {}
                if (window.ga && window.ga.getAll)
                    try {
                        for (var k = window.ga.getAll(), f = 0; f < k.length; f++)
                            k[f].send("social", "Google", d, e)
                        } catch (l) {}
            }
            if ($o && window.dataLayer)
                try {
                    window.dataLayer.push({
                        event: "social",
                        socialNetwork: "Google",
                        socialAction: d,
                        socialTarget: e
                    })
                } catch (m) {}
        }
        a.call(this, c)
    }
};
_.op = function(a, b, c, d, e) {
    rp(b, c);
    sp(b, d);
    tp(a, b, e);
    up(a.Kc, a.th.toString(), b);
    (new vp).Vo.Df(a, b, c, d, e)
};
vp = function() {
    if (!this.Vo) {
        for (var a = this.constructor; a&&!a.Mh;)
            a = a.J && a.J.constructor;
        a.Mh.Ju || (a.Mh.Ju = Pn(a));
        this.Vo = new a.Mh.Ju(this);
        this.B || (this.B = Rn)
    }
};
_.wp = function() {};
xp = vp;
_.wp.J || _.u(_.wp, Mn);
xp.Mh = _.wp;
_.wp.prototype.Df = function(a) {
    a = a ? a : function() {};
    a.wx=!0;
    return a
}();
yp = function(a) {
    return _.Gm && a instanceof _.Gm
};
zp = function(a) {
    return yp(a) ? "_renderstart" : "renderstart"
};
Ap = function(a) {
    return yp(a) ? "_ready" : "ready"
};
_.Bp = function() {
    return !0
};
rp = function(a, b) {
    if (b.onready) {
        var c=!1, d = function() {
            c || (c=!0, b.onready.call(null))
        };
        a.register(Ap(a), d, _.Bp);
        a.register(zp(a), d, _.Bp)
    }
};
tp = function(a, b, c) {
    var d = a.Kc, e = String(a.th), f=!1, g = function() {
        f || (f=!0, c && _.Do("wrdt", d, e), _.Do("wrdi", d, e))
    };
    b.register(zp(b), g, _.Bp);
    var k=!1;
    a = function() {
        k || (k=!0, g(), c && _.Do("wrrt", d, e), _.Do("wrri", d, e))
    };
    b.register(Ap(b), a, _.Bp);
    yp(b) ? b.register("widget-interactive-" + b.id, a, _.Bp) : _.J.register("widget-interactive-" + b.id, a);
    _.J.register("widget-csi-tick-" + b.id, function(a, b, c) {
        "wdc" === a ? _.Do("wdc", d, e, c) : "wje0" === a ? _.Do("wje0", d, e, c) : "wje1" === a ? _.Do("wje1", d, e, c) : "wh0" == a ? _.Co("wh0", d, e, c) : "wh1" ==
        a ? _.Co("wh1", d, e, c) : "wcdi" == a && _.Co("wcdi", d, e, c)
    })
};
Cp = function(a) {
    return "number" == typeof a ? a + "px" : "100%" == a ? a : null
};
sp = function(a, b) {
    var c = function(c) {
        c = c || a;
        var e = Cp(c.width);
        e && b.style.width != e && (b.style.width = e);
        (c = Cp(c.height)) && b.style.height != c && (b.style.height = c)
    };
    yp(a) ? a.vb("onRestyle", c) : (a.register("ready", c, _.Bp), a.register("renderstart", c, _.Bp), a.register("resize", c, _.Bp))
};
Dp = function(a, b) {
    for (var c in mp)
        if (mp.hasOwnProperty(c)) {
            var d = mp[c][1];
            d&&!b.hasOwnProperty(d) && (b[d] = a[d])
        }
    return b
};
Ep = function(a, b) {
    var c = {}, d;
    for (d in a)
        a.hasOwnProperty(d) && (c[a[d][1] || d] = (a[d] && a[d][0] || ap)(b[d.toLowerCase()], b, bp));
    return c
};
Fp = function(a) {
    if (a = a.iI)
        for (var b = 0; b < a.length; b++)(new window.Image)
            .src = a[b]
};
Gp = function(a, b) {
    var c = b.userParams, d = b.siteElement;
    d || (d = (d = b.iframeNode) && d.parentNode);
    if (d && 1 === d.nodeType) {
        var e = Ep(a.config, c);
        a.Dy.push({
            element: d,
            config: e,
            Zf: Dp(e, Ep(a.Sx, c)),
            BT: 3,
            LD: !!c["data-onload"],
            vI: b
        })
    }
    c = a.Dy;
    for (d = a.dr; 0 < c.length;)
        d(c.shift())
};
_.Hp = function(a) {
    var b = pp(a);
    Fp(b);
    _.Nb(b.Kc, function(a) {
        Gp(b, a)
    });
    jo[b.Kc]=!0;
    var c = {
        Z: function(a, c) {
            var f = c || {};
            f.type = b.Kc;
            var g = f.type;
            delete f.type;
            var k = po(a);
            if (k) {
                var l = {}, m;
                for (m in f)
                    _.La(f, m) && (l[m.toLowerCase()] = f[m]);
                l.rd = 1;
                (f=!!l.ri) && delete l.ri;
                ro(g, k, l, [], 0, f)
            } else 
                _.Qb("string" === "gapi." + g + ".render: missing element " + typeof a ? a : "")
        },
        go: function(a) {
            so(a, b.Kc)
        },
        A: function() {
            var a = _.Ha(_.Ya, "WI", _.Ja()), b;
            for (b in a)
                delete a[b]
        }
    };
    a = function() {
        "onload" === Yo && c.go()
    };
    Ln(b.Kc) || _.dc(a, a);
    _.C("gapi." + b.Kc + ".go", c.go);
    _.C("gapi." + b.Kc + ".render", c.Z);
    return c
};
var Ip = Gp, Jp = function(a, b) {
    a.th++;
    _.Do("wrs", a.Kc, String(a.th));
    var c = b.userParams, d = Ep(a.config, c), e = [], f = b.iframeNode, g = b.siteElement, k = np(a, d), l = Ep(a.Sx, c);
    _.rl(_.Hn(), l);
    var l = Dp(d, l), c=!!c["data-onload"], m = _.nm, n = _.Ja();
    n.renderData = b;
    n.height = d.height;
    n.width = d.width;
    n.id = b.id;
    n.url = b.url;
    n.iframeEl = f;
    n.where = n.container = g;
    n.apis = ["_open"];
    n.messageHandlers = k;
    n.messageHandlersFilter = _.ym;
    _.Cn(n);
    f = l;
    a.bg && (e[2] = n, e[3] = f, e[4] = k, a.bg("i", e));
    k = m.zj(n);
    k.id = b.id;
    k.Vr(k, n);
    (0, _.op)(a, k, d, g, c);
    e[5] = k;
    a.bg && a.bg("e", e)
}, Gp = function(a, b) {
    var c = b.url;
    a.jK || _.En(c) ? _.Em ? Jp(a, b) : (0, _.Ji)("gapi.iframes.impl", function() {
        Jp(a, b)
    }) : _.K.open ? Ip(a, b) : (0, _.Ji)("iframes", function() {
        Ip(a, b)
    })
};
var up;
_.Kp = function() {
    var a = window;
    return !!a.performance&&!!a.performance.getEntries
};
_.Lp = function(a) {
    var b = a.indexOf("#");
    - 1 != b && (a = a.substring(0, b));
    a = window.performance.getEntriesByName(a);
    if (1 > a.length)
        return null;
    a = a[0];
    return 0 == a.responseStart ? null : a
};
up = function(a, b, c) {
    if (_.Kp()) {
        var d = function() {
            var a=!1;
            return function() {
                if (a)
                    return !0;
                a=!0;
                return !1
            }
        }(), e = function() {
            d() || window.setTimeout(function() {
                var d = _.Lp(c.Ea().src);
                d && _.Go(a, b, Math.round(d.startTime), Math.round(d.requestStart), Math.round(d.responseStart), Math.round(d.responseEnd))
            }, 1E3)
        };
        c.register(zp(c), e, _.Bp);
        c.register(Ap(c), e, _.Bp)
    }
};
_.C("gapi.widget.make", _.Hp);
var Wp, Xp, Yp, $p;
Wp = function(a, b) {
    if ("string" == typeof a) {
        a = a.toLowerCase();
        var c;
        for (c = 0; c < b.length; c++)
            if (b[c] == a)
                return a
    }
};
Xp = "inline bubble none only pp vertical-bubble".split(" ");
Yp = ["left", "right"];
_.Zp = function(a) {
    return Wp(a, Xp)
};
$p = function(a) {
    return Wp(a, Yp)
};
_.aq = function(a) {
    a.source = [null, "source"];
    a.expandTo = [null, "expandTo"];
    a.align = [$p];
    a.annotation = [_.Zp];
    a.origin = [_.Un]
};

_.K.Rr("bubble", function(a) {
    (0, _.Ji)("iframes-styles-bubble", a)
});
_.K.Rr("slide-menu", function(a) {
    (0, _.Ji)("iframes-styles-slide-menu", a)
});
var FQ = {
    tall: {
        "true": {
            width: 50,
            height: 60
        },
        "false": {
            width: 50,
            height: 24
        }
    },
    small: {
        "false": {
            width: 24,
            height: 15
        },
        "true": {
            width: 70,
            height: 15
        }
    },
    medium: {
        "false": {
            width: 32,
            height: 20
        },
        "true": {
            width: 90,
            height: 20
        }
    },
    standard: {
        "false": {
            width: 38,
            height: 24
        },
        "true": {
            width: 106,
            height: 24
        }
    }
}, GQ = function(a) {
    return "string" == typeof a && FQ[a.toLowerCase()] ? a.toLowerCase() : "standard"
}, HQ = function(a) {
    return "string" == typeof a ? "" != a && "0" != a && "false" != a.toLowerCase() : !!a
}, IQ = function(a, b) {
    return "tall" == GQ(b) ? "true" : null == a || HQ(a) ?
    "true" : "false"
}, JQ = function(a) {
    if (HQ(a))
        return "true"
}, KQ = function(a) {
    var b = (0, window.parseInt)(a, 10);
    if (b == a)
        return String(b)
}, LQ = {
    width: 180,
    height: 35
}, MQ = {
    href: [_.Vn, "url"],
    width: [KQ],
    size: [GQ],
    resize: [JQ],
    autosize: [JQ],
    count: [function(a, b) {
        return IQ(b.count, b.size)
    }
    ],
    db: [_.Wn],
    ecp: [_.Xn],
    textcolor: [function(a) {
        if ("string" == typeof a && a.match(/^[0-9A-F]{6}$/i))
            return a
    }
    ],
    drm: [JQ],
    recommendations: [],
    fu: [],
    ad: [JQ],
    cr: [KQ],
    ag: [KQ],
    "fr-ai": [],
    "fr-sigh": []
}, NQ = function(a, b, c) {
    a = _.Zp(a);
    b = GQ(b);
    if ("" !=
    a) {
        if ("inline" == a || "only" == a)
            return a = 450, c.width && (a = 120 < c.width ? c.width : 120), {
                width: a,
                height: FQ[b]["false"].height
            };
        if ("bubble" != a) {
            if ("none" == a)
                return FQ[b]["false"];
            if ("pp" == a)
                return LQ
        }
    }
    return FQ[b]["true"]
}, OQ = function(a, b) {
    return FQ[GQ(a)][IQ(b, a)]
};
(function() {
    var a = {
        0: "plusone"
    }, b = _.E("iframes/plusone/preloadUrl");
    b && (a[7] = b);
    _.aq(MQ);
    a[1] = MQ;
    a[2] = {
        width: [function(a, b) {
            return b.annotation ? NQ(b.annotation, b.size, b).width : OQ(b.size, b.count).width
        }
        ],
        height: [function(a, b) {
            return b.annotation ? NQ(b.annotation, b.size, b).height : OQ(b.size, b.count).height
        }
        ]
    };
    a[3] = {
        onPlusOne: {
            Nn: function(a) {
                return "on" == a.state ? "+1" : null
            },
            Rn: "callback"
        },
        onstartinteraction: !0,
        onendinteraction: !0,
        onpopup: !0
    };
    a[4] = ["div", "button"];
    a = _.Hp(a);
    _.gc = a.go;
    _.fc = a.Z
})();

});
// Google Inc.

