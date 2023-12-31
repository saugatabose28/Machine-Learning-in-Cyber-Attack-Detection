this._ = this._ || {};
(function(_) {
    var window = this;
    try {
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
} catch (e) {
    _._DumpException(e)
}
try {
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

} catch (e) {
    _._DumpException(e)
}
try {
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
} catch (e) {
    _._DumpException(e)
}
try {
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

} catch (e) {
    _._DumpException(e)
}
try {
    _.Mi = window.gapi && window.gapi.util || {};
} catch (e) {
    _._DumpException(e)
}
try {
    var Ni = _.Mi = _.Mi || {};
    window.___jsl = window.___jsl || {};
    Ni.Jo = {
        A: function() {
            return window.___jsl.bsh
        },
        yv: function() {
            return window.___jsl.h
        },
        Rr: function(a) {
            window.___jsl.bsh = a
        },
        vJ: function(a) {
            window.___jsl.h = a
        }
    };
} catch (e) {
    _._DumpException(e)
}
try {
    var Qi, Ri;
    Qi = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/u\/(\d)\//;
    Ri = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/b\/(\d{10,})\//;
    _.Si = function(a) {
        var b = _.E("googleapis.config/sessionIndex");
        null == b && (b = window.__X_GOOG_AUTHUSER);
        if (null == b) {
            var c = window.google;
            c && (b = c.authuser)
        }
        null == b && (a = a || window.location.href, b = _.Ua(a, "authuser") || null, null == b && (b = (b = a.match(Qi)) ? b[1] : null));
        return null == b ? null : String(b)
    };
    _.Ti = function(a) {
        var b = _.E("googleapis.config/sessionDelegate");
        null == b && (b = (a = (a || window.location.href).match(Ri)) ? a[1] : null);
        return null == b ? null : String(b)
    };
    _.Ui = function(a, b) {
        var c = _.Si(a) || b, d = _.Ti(a), e = "";
        c && (e += "u/" + c + "/");
        d && (e += "b/" + d + "/");
        return e || null
    };

} catch (e) {
    _._DumpException(e)
}
try {
    _.Vi = function(a) {
        var b;
        if (b = _.E("enableMultilogin"))
            if (b = a("cookie_policy"))
                b = String(a("immediate") || ""), a = String(a("prompt") || ""), b=!("true" === b.toLowerCase() || "none" === a.toLowerCase());
        return b?!0 : !1
    };
    _.Wi = function(a, b, c) {
        a = String(a);
        if (null != (_.Ua(a, "authuser") || null) || null != (_.Ua(a, "hd") || null))
            return a;
        b = _.Si(b);
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
        b ? _.Vi(function(b) {
            return _.Ua(a, b) || null
        }) || (l = (0, window.encodeURIComponent)("authuser") + "=0") : l = b.match(/^([-a-z0-9]+[.])+[-a-z0-9]+$/) ? [(0, window.encodeURIComponent)("authuser") + "=", (0, window.encodeURIComponent)(String(b)), "&" + (0, window.encodeURIComponent)("hd") + "=", (0, window.encodeURIComponent)(b)].join("") : ["authuser=", (0, window.encodeURIComponent)(b)].join("");
        c = a.split("#");
        b = c[0].indexOf("?");
        0 > b ? c[0] = [c[0], "?", l].join("") : (d = [c[0]], b < c[0].length - 1 && d.push("&"), d.push(l), c[0] = d.join(""));
        return d = c.join("#")
    };
    _.google.oT = _.Wi;
    _.google.$p = _.Si;
    _.google.HS = _.Ti;
    _.google.IS = _.Ui;

} catch (e) {
    _._DumpException(e)
}
try {
    var Xi = function() {
        this.B =- 1
    };
    var Yi = function() {
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
    _.u(Yi, Xi);
    Yi.prototype.reset = function() {
        this.A[0] = 1732584193;
        this.A[1] = 4023233417;
        this.A[2] = 2562383102;
        this.A[3] = 271733878;
        this.A[4] = 3285377520;
        this.G = this.C = 0
    };
    var Zi = function(a, b, c) {
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
    Yi.prototype.update = function(a, b) {
        if (null != a) {
            _.ca(b) || (b = a.length);
            for (var c = b - this.B, d = 0, e = this.F, f = this.C; d < b;) {
                if (0 == f)
                    for (; d <= c;)
                        Zi(this, a, d), d += this.B;
                if (_.ja(a))
                    for (; d < b;) {
                        if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.B) {
                            Zi(this, e);
                            f = 0;
                            break
                        }
                    } else 
                        for (; d < b;)
                            if (e[f] = a[d], ++f, ++d, f == this.B) {
                                Zi(this, e);
                                f = 0;
                                break
                            }
            }
            this.C = f;
            this.G += b
        }
    };
    Yi.prototype.M = function() {
        var a = [], b = 8 * this.G;
        56 > this.C ? this.update(this.D, 56 - this.C) : this.update(this.D, this.B - (this.C - 56));
        for (var c = this.B - 1; 56 <= c; c--)
            this.F[c] = b & 255, b/=256;
        Zi(this, this.F);
        for (c = b = 0; 5 > c; c++)
            for (var d = 24; 0 <= d; d -= 8)
                a[b] = this.A[c]>>d & 255, ++b;
        return a
    };
    _.$i = function() {
        this.A = new Yi
    };
    _.h = _.$i.prototype;
    _.h.reset = function() {
        this.A.reset()
    };
    _.h.gA = function(a) {
        this.A.update(a)
    };
    _.h.Ou = function() {
        return this.A.M()
    };
    _.h.zs = function(a) {
        a = (0, window.unescape)((0, window.encodeURIComponent)(a));
        for (var b = [], c = 0, d = a.length; c < d; ++c)
            b.push(a.charCodeAt(c));
        this.gA(b)
    };
    _.h.Ef = function() {
        for (var a = this.Ou(), b = "", c = 0; c < a.length; c++)
            b += "0123456789ABCDEF".charAt(Math.floor(a[c] / 16)) + "0123456789ABCDEF".charAt(a[c]%16);
        return b
    };

} catch (e) {
    _._DumpException(e)
}
try {
    var kl, jl, ql, rl, ll, ol, ml, sl, nl, jl;
    _.pl = function() {
        var a;
        jl ? (a = new _.Aa.Uint32Array(1), kl.getRandomValues(a), a = Number("0." + a[0])) : (a = ll, a += (0, window.parseInt)(ml.substr(0, 20), 16), ml = nl(ml), a = a / (ol + Math.pow(16, 20)));
        return a
    };
    kl = _.Aa.crypto;
    jl=!1;
    ql = 0;
    rl = 0;
    ll = 1;
    ol = 0;
    ml = "";
    sl = function(a) {
        a = a || _.Aa.event;
        var b = a.screenX + a.clientX<<16, b = b + (a.screenY + a.clientY), b = (new Date).getTime()%1E6 * b;
        ll = ll * b%ol;
        0 < ql&&++rl == ql && _.Va(_.Aa, "mousemove", sl, "remove", "de")
    };
    nl = function(a) {
        var b = new _.$i;
        b.zs(a);
        return b.Ef()
    };
    jl=!!kl && "function" == typeof kl.getRandomValues;
    jl || (ol = 1E6 * (window.screen.width * window.screen.width + window.screen.height), ml = nl(_.Ba.cookie + "|" + _.Ba.location + "|" + (new Date).getTime() + "|" + Math.random()), ql = _.E("random/maxObserveMousemove") || 0, 0 != ql && _.Wa(_.Aa, "mousemove", sl));

} catch (e) {
    _._DumpException(e)
}
try {
    var ul, wl, xl, yl, zl, Al, Bl, Cl, Dl, El, Hl, Il, Jl, Kl, Ll, Ml;
    _.tl = function(a, b) {
        a = a || {};
        for (var c in a)
            _.Ma(a, c) && (b[c] = a[c])
    };
    ul = /^([^?#]*)(\?([^#]*))?(\#(.*))?$/;
    _.vl = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
    wl = function(a, b) {
        var c = [];
        if (a)
            for (var d in a)
                if (_.Ma(a, d) && null != a[d]) {
                    var e = b ? b(a[d]): a[d];
                    c.push((0, window.encodeURIComponent)(d) + "=" + (0, window.encodeURIComponent)(e))
                }
        return c
    };
    xl = function(a) {
        return a.nu + (0 < a.query.length ? "?" + a.query.join("&") : "") + (0 < a.Ul.length ? "#" + a.Ul.join("&") : "")
    };
    yl = function(a) {
        a = a.match(ul);
        var b = _.Ka();
        b.nu = a[1];
        b.query = a[3] ? [a[3]] : [];
        b.Ul = a[5] ? [a[5]] : [];
        return b
    };
    zl = /'/g;
    Al = /"/g;
    Bl = />/g;
    Cl = /</g;
    Dl = /&/g;
    El = function(a) {
        for (; a.firstChild;)
            a.removeChild(a.firstChild)
    };
    _.Fl = function(a, b) {
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
    _.Gl = function(a, b, c, d) {
        a = yl(a);
        a.query.push.apply(a.query, wl(b, d));
        a.Ul.push.apply(a.Ul, wl(c, d));
        return xl(a)
    };
    Hl = function(a) {
        return String(a).replace(Dl, "&amp;").replace(Cl, "&lt;").replace(Bl, "&gt;").replace(Al, "&quot;").replace(zl, "&#39;")
    };
    Jl = function() {
        var a = _.Ya.onl;
        if (!a) {
            a = _.Ka();
            _.Ya.onl = a;
            var b = _.Ka();
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
    Kl = function(a, b) {
        var c = b.onload;
        return "function" === typeof c ? (Jl().a(a, c), c) : null
    };
    Ll = function(a) {
        _.Na(/^\w+$/.test(a), "Unsupported id - " + a);
        Jl();
        return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"'
    };
    Ml = function(a) {
        Jl().r(a)
    };
    var Ol, Pl, Tl;
    _.Nl = {
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
    Ol = {
        allowtransparency: !0,
        onload: !0
    };
    Pl = 0;
    _.Ql = function(a, b) {
        var c, d = 0;
        do 
            c = b.id || ["I", Pl++, "_", (new Date).getTime()].join("");
        while (a.getElementById(c) && 5>++d);
        _.Na(5 > d, "Error creating iframe id");
        return c
    };
    _.Rl = function(a, b) {
        return a ? b + "/" + a : ""
    };
    _.Sl = function(a, b, c, d) {
        var e = {}, f = {};
        a.documentMode && 9 > a.documentMode && (e.hostiemode = a.documentMode);
        _.tl(d.queryParams || {}, e);
        _.tl(d.fragmentParams || {}, f);
        var g = d.connectWithQueryParams ? e: f, k = d.pfname, l = _.Ka();
        l.id = c;
        l.parent = a.location.protocol + "//" + a.location.host;
        c = _.Ua(a.location.href, "parent");
        k = k || "";
        !k && c && (k = _.Rl(_.Ua(a.location.href, "id", ""), _.Ua(a.location.href, "pfname", "")));
        l.pfname = k;
        _.tl(l, g);
        (l = _.Ua(b, "rpctoken") || e.rpctoken || f.rpctoken) || (l = g.rpctoken = d.rpctoken || String(Math.round(1E8 *
        _.pl())));
        d.rpctoken = l;
        g = a.location.href;
        a = _.Ka();
        (l = _.Ua(g, "_bsh", _.Ya.bsh)) && (a._bsh = l);
        (g = _.Ya.dpo ? _.Ya.h : _.Ua(g, "jsh", _.Ya.h)) && (a.jsh = g);
        d.hintInFragment ? _.tl(a, f) : _.tl(a, e);
        return _.Gl(b, e, f, d.paramsSerializer)
    };
    Tl = function(a) {
        _.Na(!a || _.vl.test(a), "Illegal url for new iframe - " + a)
    };
    _.Ul = function(a, b, c, d, e) {
        Tl(c.src);
        var f, g = Kl(d, c), k = g ? Ll(d): "";
        try {
            f = a.createElement('<iframe frameborder="' + Hl(String(c.frameborder)) + '" scrolling="' + Hl(String(c.scrolling)) + '" ' + k + ' name="' + Hl(String(c.name)) + '"/>')
        } catch (l) {
            f = a.createElement("iframe"), g && (f.onload = function() {
                f.onload = null;
                g.call(this)
            }, Ml(d))
        }
        for (var m in c)
            a = c[m], "style" === m && "object" === typeof a ? _.tl(a, f.style) : Ol[m] || f.setAttribute(m, String(a));
        (m = e && e.beforeNode || null) || e && e.dontclear || El(b);
        b.insertBefore(f, m);
        f = m ? m.previousSibling : b.lastChild;
        c.allowtransparency && (f.allowTransparency=!0);
        return f
    };
    var Vl, Yl;
    Vl = /^:[\w]+$/;
    _.Wl = /:([a-zA-Z_]+):/g;
    _.Xl = function() {
        var a = _.Si() || "0", b = _.Ti(), c = _.Ui(void 0, a), d=!1 === _.E("isLoggedIn"), e = d ? "_/im/" : "";
        e && (c = "");
        var f = _.E("iframes/:socialhost:"), g = _.E("iframes/:im_socialhost:");
        return Il = {
            socialhost: f,
            ctx_socialhost: d ? g: f,
            session_index: a,
            session_delegate: b,
            session_prefix: c,
            im_prefix: e
        }
    };
    Yl = function(a, b) {
        return _.Xl()[b] || ""
    };
    _.Zl = function(a) {
        return _.Fl(_.Ba, a.replace(_.Wl, Yl))
    };
    _.$l = function(a) {
        var b = a;
        Vl.test(a) && (b = _.E("iframes/" + b.substring(1) + "/url"), _.Na(!!b, "Unknown iframe url config for - " + a));
        return _.Zl(b)
    };
    _.am = function(a, b, c) {
        var d = c || {};
        c = d.attributes || {};
        _.Na(!d.allowPost ||!c.onload, "onload is not supported by post iframe");
        a = _.$l(a);
        c = b.ownerDocument || _.Ba;
        var e = _.Ql(c, d);
        a = _.Sl(c, a, e, d);
        var f = _.Ka();
        _.tl(_.Nl, f);
        _.tl(d.attributes, f);
        f.name = f.id = e;
        f.src = a;
        d.eurl = a;
        if ((d || {}).allowPost && 2E3 < a.length) {
            var g = yl(a);
            f.src = "";
            f["data-postorigin"] = a;
            a = _.Ul(c, b, f, e);
            var k;
            if ( - 1 != window.navigator.userAgent.indexOf("WebKit")) {
                k = a.contentWindow.document;
                k.open();
                var f = k.createElement("div"), l = {}, m = e + "_inner";
                l.name = m;
                l.src = "";
                l.style = "display:none";
                _.Ul(c, f, l, m, d)
            }
            f = (d = g.query[0]) ? d.split("&") : [];
            d = [];
            for (l = 0; l < f.length; l++)
                m = f[l].split("=", 2), d.push([(0, window.decodeURIComponent)(m[0]), (0, window.decodeURIComponent)(m[1])]);
            g.query = [];
            f = xl(g);
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
            b = _.Ul(c, b, f, e, d);
        return b
    };

} catch (e) {
    _._DumpException(e)
}
try {
    _.Oi = function(a) {
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
    _.Mi.Ba = function(a) {
        return _.Oi(a)
    };
} catch (e) {
    _._DumpException(e)
}
try {
    _.H = _.H || {};
} catch (e) {
    _._DumpException(e)
}
try {
    _.H = _.H || {};
    _.H.Vm = function(a, b, c) {
        for (var d = [], e = 2, f = arguments.length; e < f; ++e)
            d.push(arguments[e]);
        return function() {
            for (var c = d.slice(), e = 0, f = arguments.length; e < f; ++e)
                c.push(arguments[e]);
            return b.apply(a, c)
        }
    };
    _.H.rk = function(a) {
        var b, c, d = {};
        for (b = 0; c = a[b]; ++b)
            d[c] = c;
        return d
    };

} catch (e) {
    _._DumpException(e)
}
try {
    _.H = _.H || {};
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
        _.H.escape = function(a, b) {
            if (a) {
                if ("string" === typeof a)
                    return _.H.Pl(a);
                if ("Array" === typeof a)
                    for (var e = 0, f = a.length; e < f; ++e)
                        a[e] = _.H.escape(a[e]);
                else if ("object" === typeof a && b) {
                    e = {};
                    for (f in a)
                        a.hasOwnProperty(f) && (e[_.H.Pl(f)] = _.H.escape(a[f], !0));
                    return e
                }
            }
            return a
        };
        _.H.Pl = function(a) {
            if (!a)
                return a;
            for (var d = [], e, f, g = 0, k = a.length; g < k; ++g)
                e = a.charCodeAt(g), f = b[e], !0 === f ? d.push("&#", e, ";") : !1 !== f && d.push(a.charAt(g));
            return d.join("")
        };
        _.H.VT = function(b) {
            return b ? b.replace(/&#([0-9]+);/g, a) : b
        }
    })();

} catch (e) {
    _._DumpException(e)
}
try {
    _.il = _.il || {};
    _.il.pF = function() {
        var a = 0, b = 0;
        window.self.innerHeight ? (a = window.self.innerWidth, b = window.self.innerHeight) : window.document.documentElement && window.document.documentElement.clientHeight ? (a = window.document.documentElement.clientWidth, b = window.document.documentElement.clientHeight) : window.document.body && (a = window.document.body.clientWidth, b = window.document.body.clientHeight);
        return {
            width: a,
            height: b
        }
    };

} catch (e) {
    _._DumpException(e)
}
try {
    _.il = _.il || {};
    (function() {
        function a(a, c) {
            window.getComputedStyle(a, "").getPropertyValue(c).match(/^([0-9]+)/);
            return (0, window.parseInt)(RegExp.$1, 10)
        }
        _.il.Jb = function() {
            var b = _.il.pF().height, c = window.document.body, d = window.document.documentElement;
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

} catch (e) {
    _._DumpException(e)
}
try {
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

} catch (e) {
    _._DumpException(e)
}
try {
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
} catch (e) {
    _._DumpException(e)
}
try {
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
} catch (e) {
    _._DumpException(e)
}
try {
    _.Ob = window.console;
    _.Qb = function(a) {
        _.Ob && _.Ob.log && _.Ob.log(a)
    };
    _.Rb = function() {};
} catch (e) {
    _._DumpException(e)
}
try {
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
} catch (e) {
    _._DumpException(e)
}
try {
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

} catch (e) {
    _._DumpException(e)
}
try {
    _.C("gadgets.json.stringify", _.$b);
    _.C("gadgets.json.parse", _.ac);
    _.Ua(_.Aa.location.href, "rpctoken") && _.Wa(_.Ba, "unload", function() {});
} catch (e) {
    _._DumpException(e)
}
try {
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

} catch (e) {
    _._DumpException(e)
}
try {
    _.H = _.H || {};
    _.H.ll = function(a, b, c, d) {
        "undefined" != typeof a.addEventListener ? a.addEventListener(b, c, d) : "undefined" != typeof a.attachEvent ? a.attachEvent("on" + b, c) : _.Jb("cannot attachBrowserEvent: " + b)
    };
    _.H.uI = function(a) {
        var b = window;
        b.removeEventListener ? b.removeEventListener("mousemove", a, !1) : b.detachEvent ? b.detachEvent("onmousemove", a) : _.Jb("cannot removeBrowserEvent: mousemove")
    };

} catch (e) {
    _._DumpException(e)
}
try {
    _.Mj = function() {
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
    _.Nj = function() {
        function a(a) {
            var b = _.Mj();
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
            0 < c&&++d == c && _.H.uI(k)
        };
        0 != c && _.H.ll(window, "mousemove", k, !1);
        var l = a(window.document.cookie + "|" + window.document.location + "|" + (new Date).getTime() + "|" + e);
        return function() {
            var b = f, b = b + (0, window.parseInt)(l.substr(0, 20), 16);
            l = a(l);
            return b / (g + Math.pow(16, 20))
        }
    }();
    _.C("shindig.random", _.Nj);
} catch (e) {
    _._DumpException(e)
}
try {
    _.K = {};
    _.Pc = {};
    window.iframer = _.Pc;
} catch (e) {
    _._DumpException(e)
}
try {
    _.K.ta = _.K.ta || {};
    _.K.ta.uD = function(a) {
        try {
            return !!a.document
        } catch (b) {}
        return !1
    };
    _.K.ta.Rv = function(a) {
        var b = a.parent;
        return a != b && _.K.ta.uD(b) ? _.K.ta.Rv(b) : a
    };
    _.K.ta.MS = function(a) {
        var b = a.userAgent || "";
        a = a.product || "";
        return 0 != b.indexOf("Opera")&&-1 == b.indexOf("WebKit") && "Gecko" == a && 0 < b.indexOf("rv:1.")
    };

} catch (e) {
    _._DumpException(e)
}
try {
    var Eq = function() {
        _.K.Uw++;
        return ["I", _.K.Uw, "_", (new Date).getTime()].join("")
    }, ar;
    var Fq = function(a) {
        return a instanceof Array ? a.join(",") : a instanceof Object ? (0, _.$b)(a) : a
    };
    var Gq = function() {};
    var Hq = function(a) {
        a && a.match(Iq) && _.eb("googleapis.config/gcv", a)
    };
    var Jq = function(a) {
        _.Mi.Jo.vJ(a)
    };
    var Kq = function(a) {
        _.Mi.Jo.Rr(a)
    };
    _.Lq = function(a, b) {
        var c = b || {}, d;
        for (d in a)
            a.hasOwnProperty(d) && (c[d] = a[d]);
        return c
    };
    _.Mq = function(a, b, c, d, e) {
        var f = [], g;
        for (g in a)
            if (a.hasOwnProperty(g)) {
                var k = b, l = c, m = a[g], n = d, p = Nq(g);
                p[k] = p[k] || {};
                n = _.H.Vm(n, m);
                m._iframe_wrapped_rpc_ && (n._iframe_wrapped_rpc_=!0);
                p[k][l] = n;
                f.push(g)
            }
        if (e)
            for (g in _.K.gi)
                _.K.gi.hasOwnProperty(g) && f.push(g);
        return f.join(",")
    };
    var Oq = function(a, b, c) {
        var d = {};
        if (a && a._methods) {
            a = a._methods.split(",");
            for (var e = 0; e < a.length; e++) {
                var f = a[e];
                d[f] = Pq(f, b, c)
            }
        }
        return d
    };
    var Qq = function(a) {
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
    var Rq = function(a, b) {
        var c = {}, d = b.params || {}, e;
        for (e in a)
            "#" == e.charAt(0) && (c[e.substring(1)] = a[e]), 0 == e.indexOf("fr-") && (c[e.substring(3)] = a[e]), "#" == d[e] && (c[e] = a[e]);
        for (var f in c)
            delete a["fr-" + f], delete a["#" + f], delete a[f];
        return c
    };
    var Sq = function(a) {
        if (":" == a.charAt(0)) {
            var b = _.E("iframes/" + a.substring(1));
            a = {};
            _.tl(b, a);
            (b = a.url) && (a.url = _.Zl(b));
            a.params || (a.params = {});
            return a
        }
        return {
            url: _.Zl(a)
        }
    };
    var Tq = function(a) {
        function b() {}
        b.prototype = Uq.prototype;
        a.prototype = new b
    };
    var Vq = function(a) {
        return _.K.Hk[a]
    };
    var Wq = function(a, b) {
        _.K.Hk[a] = b
    };
    var Xq = function(a) {
        a = a || {};
        "auto" === a.height && (a.height = _.il.Jb());
        var b = window && Yq && Yq.ja();
        b ? b.Ny(a.width || 0, a.height || 0) : _.Pc && _.Pc._resizeMe && _.Pc._resizeMe(a)
    };
    var Zq = function(a) {
        Hq(a)
    };
    ar = function(a) {
        var b = _.Ua(a.location.href, "urlindex");
        if (b = _.Ha(_.Ya, "fUrl", [])[b]) {
            var c = a.location.hash, b = b + (/#/.test(b) ? c.replace(/^#/, "&") : c);
            a.location.replace(b)
        }
    };
    _.br = function() {
        return _.Aa.location.origin || _.Aa.location.protocol + "//" + _.Aa.location.host
    };
    if (window.ToolbarApi)
        Yq = window.ToolbarApi, Yq.ja = window.ToolbarApi.getInstance, Yq.prototype = window.ToolbarApi.prototype, _.h = Yq.prototype, _.h.Ux = Yq.prototype.openWindow, _.h.Cu = Yq.prototype.closeWindow, _.h.Dz = Yq.prototype.setOnCloseHandler, _.h.tu = Yq.prototype.canClosePopup, _.h.Ny = Yq.prototype.resizeWindow;
    else {
        var Yq = function() {}, cr = null;
        Yq.ja = function() {
            !cr && window.external && window.external.GTB_IsToolbar && (cr = new Yq);
            return cr
        };
        _.h = Yq.prototype;
        _.h.Ux = function(a) {
            return window.external.GTB_OpenPopup &&
            window.external.GTB_OpenPopup(a)
        };
        _.h.Cu = function(a) {
            window.external.GTB_ClosePopupWindow && window.external.GTB_ClosePopupWindow(a)
        };
        _.h.Dz = function(a, b) {
            window.external.GTB_SetOnCloseHandler && window.external.GTB_SetOnCloseHandler(a, b)
        };
        _.h.tu = function(a) {
            return window.external.GTB_CanClosePopup && window.external.GTB_CanClosePopup(a)
        };
        _.h.Ny = function(a, b) {
            return window.external.GTB_ResizeWindow && window.external.GTB_ResizeWindow(a, b)
        };
        window.ToolbarApi = Yq;
        window.ToolbarApi.getInstance = Yq.ja
    };
    var dr = function() {
        _.J.register("_noop_echo", function() {
            this.callback(_.K.XE(_.K.Uf[this.f]))
        })
    }, er = function() {
        window.setTimeout(function() {
            _.J.call("..", "_noop_echo", _.K.XH)
        }, 0)
    }, Pq = function(a, b, c) {
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
    }, Nq = function(a) {
        _.K.tn[a] || (_.K.tn[a] = {}, _.J.register(a, function(b, c) {
            var d = this.f;
            if (!("string" != typeof b ||
            b in{}
            || d in{})) {
                var e = this.callback, f = _.K.tn[a][d], g;
                f && Object.hasOwnProperty.call(f, b) ? g = f[b] : Object.hasOwnProperty.call(_.K.gi, a) && (g = _.K.gi[a]);
                if (g)
                    return d = Array.prototype.slice.call(arguments, 1), g._iframe_wrapped_rpc_ && e && d.push(e), g.apply({}, d)
            }
            _.Ib(['Unregistered call in window "', window.name, '" for method "', a, '", via proxyId "', b, '" from frame "', d, '".'].join(""));
            return null
        }));
        return _.K.tn[a]
    };
    _.K.rD = function(a, b, c) {
        var d = Array.prototype.slice.call(arguments);
        _.K.Fv(function(a) {
            a.sameOrigin && (d.unshift("/" + a.claimedOpenerId + "|" + window.location.protocol + "//" + window.location.host), _.J.call.apply(_.J, d))
        })
    };
    _.K.pI = function(a, b) {
        _.J.register(a, b)
    };
    var Iq = /^[-_.0-9A-Za-z]+$/, fr = {
        open: "open",
        onready: "ready",
        close: "close",
        onresize: "resize",
        onOpen: "open",
        onReady: "ready",
        onClose: "close",
        onResize: "resize",
        onRenderStart: "renderstart"
    }, gr = {
        onBeforeParentOpen: "beforeparentopen"
    }, hr = {
        onOpen: function(a) {
            var b = a.kb();
            a.Gd(b.container || b.element);
            return a
        },
        onClose: function(a) {
            a.remove()
        }
    };
    _.K.Lj = function(a) {
        var b = _.Ka();
        _.tl(_.Nl, b);
        _.tl(a, b);
        return b
    };
    var Uq = function(a, b, c, d, e, f, g, k) {
        this.config = Sq(a);
        this.openParams = this.tk = b || {};
        this.params = c || {};
        this.methods = d;
        this.Kn=!1;
        ir(this, b.style);
        this.sj = {};
        jr(this, function() {
            var a;
            (a = this.tk.style) && _.K.Hk[a] ? a = _.K.Hk[a] : a ? (_.Jb(['Missing handler for style "', a, '". Continuing with default handler.'].join("")), a = null) : a = hr;
            if (a) {
                var b;
                if ("function" === typeof a)
                    b = a(this);
                else {
                    var c = {};
                    for (b in a) {
                        var d = a[b];
                        c[b] = "function" === typeof d ? _.H.Vm(a, d, this) : d
                    }
                    b = c
                }
                for (var g in e)
                    a = b[g], "function" === typeof a &&
                    kr(this, e[g], _.H.Vm(b, a))
            }
            f && kr(this, "close", f)
        });
        this.vf = this.ac = g;
        this.jr = (k || []).slice();
        g && this.jr.unshift(g.ca())
    };
    Uq.prototype.kb = function() {
        return this.tk
    };
    Uq.prototype.He = function() {
        return this.params
    };
    Uq.prototype.dm = function() {
        return this.methods
    };
    Uq.prototype.Kb = function() {
        return this.vf
    };
    var ir = function(a, b) {
        if (!a.Kn) {
            var c = b&&!_.K.Hk[b] && _.K.Xo[b];
            c ? (a.Wo = [], c(function() {
                a.Kn=!0;
                for (var b = 0, c = a.Wo.length; b < c; ++b)
                    a.Wo[b].call(a)
            })) : a.Kn=!0
        }
    }, jr = function(a, b) {
        a.Kn ? b.call(a) : a.Wo.push(b)
    };
    Uq.prototype.Ob = function(a, b) {
        jr(this, function() {
            kr(this, a, b)
        })
    };
    var kr = function(a, b, c) {
        a.sj[b] = a.sj[b] || [];
        a.sj[b].push(c)
    };
    Uq.prototype.hh = function(a, b) {
        jr(this, function() {
            var c = this.sj[a];
            if (c)
                for (var d = 0, e = c.length; d < e; ++d)
                    if (c[d] === b) {
                        c.splice(d, 1);
                        break
                    }
        })
    };
    Uq.prototype.le = function(a, b) {
        var c, d = this.sj[a];
        if (d)
            for (var e = Array.prototype.slice.call(arguments, 1), f = 0, g = d.length; f < g; ++f)
                try {
                    c = d[f].apply({}, e)
        } catch (k) {
            _.Ib(['Exception when calling callback "', a, '" with exception "', k.name, ": ", k.message, '".'].join(""))
        }
        return c
    };
    var lr = function(a) {
        return "number" == typeof a ? {
            value: a,
            Gp: a + "px"
        } : "100%" == a ? {
            value: 100,
            Gp: "100%",
            lx: !0
        } : null
    }, mr = function(a, b, c, d, e, f, g) {
        Uq.call(this, a, b, c, d, fr, e, f, g);
        this.id = b.id || Eq();
        this.B = b.rpctoken && String(b.rpctoken) || Math.round(1E9 * (0, _.Nj)());
        this.D = Rq(this.params, this.config);
        this.Bp = {};
        jr(this, function() {
            this.le("open");
            _.Lq(this.Bp, this)
        })
    };
    Tq(mr);
    _.h = mr.prototype;
    _.h.Gd = function(a, b) {
        if (!this.config.url)
            return _.Ib("Cannot open iframe, empty URL."), this;
        var c = this.id;
        _.K.Uf[c] = this;
        var d = _.Lq(this.methods);
        d._ready = this.fn;
        d._close = this.close;
        d._open = this.kt;
        d._resizeMe = this.lt;
        d._renderstart = this.Px;
        var e = this.D;
        this.B && (e.rpctoken = this.B);
        e._methods = _.Mq(d, c, "", this, !0);
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
        this.kb().allowPost && (d.allowPost=!0);
        d.queryParams = this.params;
        d.fragmentParams = e;
        d.paramsSerializer = Fq;
        this.A = _.am(this.config.url, a, d);
        e = this.A.getAttribute("data-postorigin") || this.A.src;
        _.K.Uf[c] = this;
        _.J.xn(this.id, this.B);
        _.J.Ze(this.id, e);
        return this
    };
    _.h.Nc = function(a, b) {
        this.Bp[a] = b
    };
    _.h.ca = function() {
        return this.id
    };
    _.h.Fa = function() {
        return this.A
    };
    _.h.Pa = function() {
        return this.C
    };
    _.h.Ud = function(a) {
        this.C = a
    };
    _.h.fn = function(a) {
        var b = Oq(a, this.id, "");
        this.vf && "function" == typeof this.methods._ready && (a._methods = _.Mq(b, this.vf.ca(), this.id, this, !1), this.methods._ready(a));
        _.Lq(a, this);
        _.Lq(b, this);
        this.le("ready", a)
    };
    _.h.Px = function(a) {
        this.le("renderstart", a)
    };
    _.h.close = function(a) {
        a = this.le("close", a);
        delete _.K.Uf[this.id];
        return a
    };
    _.h.remove = function() {
        var a = window.document.getElementById(this.id);
        a && a.parentNode && a.parentNode.removeChild(a)
    };
    _.h.kt = function(a) {
        var b = Oq(a.params, this.id, a.proxyId);
        delete a.params._methods;
        "_parent" == a.openParams.anchor && (a.openParams.anchor = this.C);
        if (Qq(a.openParams))
            new nr(a.url, a.openParams, a.params, b, b._onclose, this, a.openedByProxyChain);
        else {
            var c = new mr(a.url, a.openParams, a.params, b, b._onclose, this, a.openedByProxyChain), d = this;
            jr(c, function() {
                var a = {
                    childId: c.ca()
                }, f = c.Bp;
                f._toclose = c.close;
                a._methods = _.Mq(f, d.id, c.id, c, !1);
                b._onopen(a)
            })
        }
    };
    _.h.lt = function(a) {
        if (void 0 === this.le("resize", a) && this.A) {
            var b = lr(a.width);
            null != b && (this.A.style.width = b.Gp);
            a = lr(a.height);
            null != a && (this.A.style.height = a.Gp);
            this.A.parentElement && (null != b && b.lx || null != a && a.lx) && (this.A.parentElement.style.display = "block")
        }
    };
    var nr = function(a, b, c, d, e, f, g) {
        Uq.call(this, a, b, c, d, gr, e, f, g);
        this.url = a;
        this.A = null;
        this.wr = Eq();
        jr(this, function() {
            var a;
            this.le("beforeparentopen");
            var b = _.Lq(this.methods);
            b._onopen = this.SH;
            b._ready = this.fn;
            b._onclose = this.RH;
            this.params._methods = _.Mq(b, "..", this.wr, this, !0);
            b = {};
            for (a in this.params)
                b[a] = Fq(this.params[a]);
            var c = this.config.url;
            if (this.tk.hideUrlFromParent) {
                a = window.name;
                var d = c, c = _.Gl(this.config.url, this.params, {}, Fq), e = b, b = {};
                b._methods = e._methods;
                b["#opener"] = e["#opener"];
                b["#urlindex"] = e["#urlindex"];
                b["#opener"] && void 0 != e["#urlindex"] ? (b["#opener"] = a + "," + b["#opener"], a = d) : (d = _.Ha(_.Ya, "fUrl", []), e = d.length, d[e] = c, _.Ya.rUrl = ar, b["#opener"] = a, b["#urlindex"] = e, a = _.Mi.Ba(_.Aa.location.href), c = _.E("iframes/relay_url_" + (0, window.encodeURIComponent)(a)) || "/_/gapi/sibling/1/frame.html", a = a + c);
                c = a
            }
            _.Pc._open({
                url: c,
                openParams: this.tk,
                params: b,
                proxyId: this.wr,
                openedByProxyChain: this.jr
            })
        })
    };
    Tq(nr);
    nr.prototype.B = function() {
        return this.A
    };
    nr.prototype.SH = function(a) {
        this.A = a.childId;
        var b = Oq(a, "..", this.A);
        _.Lq(b, this);
        this.close = b._toclose;
        _.K.Uf[this.A] = this;
        this.vf && this.methods._onopen && (a._methods = _.Mq(b, this.vf.ca(), this.A, this, !1), this.methods._onopen(a))
    };
    nr.prototype.fn = function(a) {
        var b = String(this.A), c = Oq(a, "..", b);
        _.Lq(a, this);
        _.Lq(c, this);
        this.le("ready", a);
        this.vf && this.methods._ready && (a._methods = _.Mq(c, this.vf.ca(), b, this, !1), this.methods._ready(a))
    };
    nr.prototype.RH = function(a) {
        if (this.vf && this.methods._onclose)
            this.methods._onclose(a);
        else 
            return a = this.le("close", a), delete _.K.Uf[this.A], a
    };
    var or = function(a, b, c, d, e, f, g) {
        Uq.call(this, a, b, c, d, gr, f, g);
        this.id = b.id || Eq();
        this.B = e;
        d._close = this.close;
        this.onClosed = this.A;
        this.nA = 0;
        jr(this, function() {
            this.le("beforeparentopen");
            var b = _.Lq(this.methods);
            this.params._methods = _.Mq(b, "..", this.wr, this, !0);
            b = {};
            b.queryParams = this.params;
            a = _.Sl(_.Ba, this.config.url, this.id, b);
            var c = e.Ux(a);
            this.canAutoClose = function(a) {
                a(e.tu(c))
            };
            e.Dz(c, this);
            this.nA = c
        })
    };
    Tq(or);
    or.prototype.close = function(a) {
        a = this.le("close", a);
        this.B.Cu(this.nA);
        return a
    };
    or.prototype.A = function() {
        this.le("close")
    };
    (function() {
        _.K.Uf = {};
        _.K.Hk = {};
        _.K.Xo = {};
        _.K.Uw = 0;
        _.K.tn = {};
        _.K.gi = {};
        _.K.hn = null;
        _.K.gn = [];
        _.K.XH = function(a) {
            var b=!1;
            try {
                if (null != a)
                    var e = window.parent.frames[a.id], b = e.iframer.id == a.id && e.iframes.openedId_(_.Pc.id)
            } catch (f) {}
            try {
                _.K.hn = {
                    origin: this.origin,
                    referer: this.referer,
                    claimedOpenerId: a && a.id,
                    claimedOpenerProxyChain: a && a.proxyChain || [],
                    sameOrigin: b
                };
                for (a = 0; a < _.K.gn.length; ++a)
                    _.K.gn[a](_.K.hn);
                _.K.gn = []
            } catch (g) {}
        };
        _.K.XE = function(a) {
            var b = a && a.vf, e = null;
            b && (e = {}, e.id = b.ca(), e.proxyChain =
            a.jr);
            return e
        };
        dr();
        if (window.parent != window) {
            var a = _.H.Fb();
            a.gcv && Hq(a.gcv);
            var b = a.jsh;
            b && Jq(b);
            _.Lq(Oq(a, "..", ""), _.Pc);
            _.Lq(a, _.Pc);
            er()
        }
        _.K.ua = Vq;
        _.K.tb = Wq;
        _.K.uJ = Zq;
        _.K.resize = Xq;
        _.K.BE = function(a) {
            return _.K.Xo[a]
        };
        _.K.Ur = function(a, b) {
            _.K.Xo[a] = b
        };
        _.K.My = Xq;
        _.K.FJ = Zq;
        _.K.Dm = {};
        _.K.Dm.get = Vq;
        _.K.Dm.set = Wq;
        _.K.gD = function(a, b) {
            Nq(a);
            _.K.gi[a] = b || window[a]
        };
        _.K.pS = function(a) {
            delete _.K.gi[a]
        };
        _.K.open = function(a, b, e, f, g, k) {
            3 == arguments.length ? f = {} : 4 == arguments.length && "function" === typeof f &&
            (g = f, f = {});
            var l = "bubble" === b.style && Yq ? Yq.ja(): null;
            return l ? new or(a, b, e, f, l, g, k) : Qq(b) ? new nr(a, b, e, f, g, k) : new mr(a, b, e, f, g, k)
        };
        _.K.close = function(a, b) {
            _.Pc && _.Pc._close && _.Pc._close(a, b)
        };
        _.K.ready = function(a, b, e) {
            2 == arguments.length && "function" === typeof b && (e = b, b = {});
            var f = a || {};
            "height"in f || (f.height = _.il.Jb());
            f._methods = _.Mq(b || {}, "..", "", _.Pc, !0);
            _.Pc && _.Pc._ready && _.Pc._ready(f, e)
        };
        _.K.Fv = function(a) {
            _.K.hn ? a(_.K.hn) : _.K.gn.push(a)
        };
        _.K.UH = function(a) {
            return !!_.K.Uf[a]
        };
        _.K.HE = function() {
            return ["https://ssl.gstatic.com/gb/js/",
            _.E("googleapis.config/gcv")].join("")
        };
        _.K.wy = function(a) {
            var b = {
                mouseover: 1,
                mouseout: 1
            };
            if (_.Pc._event)
                for (var e = 0; e < a.length; e++) {
                    var f = a[e];
                    f in b && _.H.ll(window.document, f, function(a) {
                        _.Pc._event({
                            event: a.type,
                            timestamp: (new Date).getTime()
                        })
                    }, !0)
                }
        };
        _.K.xJ = Jq;
        _.K.Rr = Kq;
        _.K.ux = Gq;
        _.K.Zw = _.Pc
    })();
    _.C("iframes.allow", _.K.gD);
    _.C("iframes.callSiblingOpener", _.K.rD);
    _.C("iframes.registerForOpenedSibling", _.K.pI);
    _.C("iframes.close", _.K.close);
    _.C("iframes.getGoogleConnectJsUri", _.K.HE);
    _.C("iframes.getHandler", _.K.ua);
    _.C("iframes.getDeferredHandler", _.K.BE);
    _.C("iframes.getParentInfo", _.K.Fv);
    _.C("iframes.iframer", _.K.Zw);
    _.C("iframes.open", _.K.open);
    _.C("iframes.openedId_", _.K.UH);
    _.C("iframes.propagate", _.K.wy);
    _.C("iframes.ready", _.K.ready);
    _.C("iframes.resize", _.K.resize);
    _.C("iframes.setGoogleConnectJsVersion", _.K.uJ);
    _.C("iframes.setBootstrapHint", _.K.Rr);
    _.C("iframes.setJsHint", _.K.xJ);
    _.C("iframes.setHandler", _.K.tb);
    _.C("iframes.setDeferredHandler", _.K.Ur);
    _.C("IframeBase", Uq);
    _.C("IframeBase.prototype.addCallback", Uq.prototype.Ob);
    _.C("IframeBase.prototype.getMethods", Uq.prototype.dm);
    _.C("IframeBase.prototype.getOpenerIframe", Uq.prototype.Kb);
    _.C("IframeBase.prototype.getOpenParams", Uq.prototype.kb);
    _.C("IframeBase.prototype.getParams", Uq.prototype.He);
    _.C("IframeBase.prototype.removeCallback", Uq.prototype.hh);
    _.C("Iframe", mr);
    _.C("Iframe.prototype.close", mr.prototype.close);
    _.C("Iframe.prototype.exposeMethod", mr.prototype.Nc);
    _.C("Iframe.prototype.getId", mr.prototype.ca);
    _.C("Iframe.prototype.getIframeEl", mr.prototype.Fa);
    _.C("Iframe.prototype.getSiteEl", mr.prototype.Pa);
    _.C("Iframe.prototype.openInto", mr.prototype.Gd);
    _.C("Iframe.prototype.remove", mr.prototype.remove);
    _.C("Iframe.prototype.setSiteEl", mr.prototype.Ud);
    _.C("Iframe.prototype.addCallback", mr.prototype.Ob);
    _.C("Iframe.prototype.getMethods", mr.prototype.dm);
    _.C("Iframe.prototype.getOpenerIframe", mr.prototype.Kb);
    _.C("Iframe.prototype.getOpenParams", mr.prototype.kb);
    _.C("Iframe.prototype.getParams", mr.prototype.He);
    _.C("Iframe.prototype.removeCallback", mr.prototype.hh);
    _.C("IframeProxy", nr);
    _.C("IframeProxy.prototype.getTargetIframeId", nr.prototype.B);
    _.C("IframeProxy.prototype.addCallback", nr.prototype.Ob);
    _.C("IframeProxy.prototype.getMethods", nr.prototype.dm);
    _.C("IframeProxy.prototype.getOpenerIframe", nr.prototype.Kb);
    _.C("IframeProxy.prototype.getOpenParams", nr.prototype.kb);
    _.C("IframeProxy.prototype.getParams", nr.prototype.He);
    _.C("IframeProxy.prototype.removeCallback", nr.prototype.hh);
    _.C("IframeWindow", or);
    _.C("IframeWindow.prototype.close", or.prototype.close);
    _.C("IframeWindow.prototype.onClosed", or.prototype.A);
    _.C("iframes.util.getTopMostAccessibleWindow", _.K.ta.Rv);
    _.C("iframes.handlers.get", _.K.Dm.get);
    _.C("iframes.handlers.set", _.K.Dm.set);
    _.C("iframes.resizeMe", _.K.My);
    _.C("iframes.setVersionOverride", _.K.FJ);
    Uq.prototype.send = function(a, b, c) {
        _.K.cz(this, a, b, c)
    };
    _.Pc.send = function(a, b, c) {
        _.K.cz(_.Pc, a, b, c)
    };
    Uq.prototype.register = function(a, b) {
        var c = this;
        c.Ob(a, function(a) {
            b.call(c, a)
        })
    };
    _.K.cz = function(a, b, c, d) {
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
    _.C("IframeBase.prototype.send", Uq.prototype.send);
    _.C("IframeBase.prototype.register", Uq.prototype.register);
    _.C("Iframe.prototype.send", mr.prototype.send);
    _.C("Iframe.prototype.register", mr.prototype.register);
    _.C("IframeProxy.prototype.send", nr.prototype.send);
    _.C("IframeProxy.prototype.register", nr.prototype.register);
    _.C("IframeWindow.prototype.send", or.prototype.send);
    _.C("IframeWindow.prototype.register", or.prototype.register);
    _.C("iframes.iframer.send", _.K.Zw.send);

} catch (e) {
    _._DumpException(e)
}
try {
    _.Pi = window.googleapis && window.googleapis.server || {};
} catch (e) {
    _._DumpException(e)
}
try {
    _.H = _.H || {};
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
        _.H.createElement = function(a) {
            var c;
            if (!window.document.body || window.document.body.namespaceURI)
                try {
                    c = window.document.createElementNS("http://www.w3.org/1999/xhtml", a)
            } catch (d) {}
            return c || window.document.createElement(a)
        };
        _.H.Vo = function(a) {
            var c = _.H.createElement("iframe");
            try {
                var d = ["<", "iframe"], e = a || {}, f;
                for (f in e)
                    e.hasOwnProperty(f) && (d.push(" "), d.push(f), d.push('="'), d.push(_.H.Pl(e[f])), d.push('"'));
                d.push("></");
                d.push("iframe");
                d.push(">");
                var g = _.H.createElement(d.join(""));
                g && (!c || g.tagName == c.tagName && g.namespaceURI == c.namespaceURI) && (c = g)
            } catch (k) {}
            d = c;
            a = a || {};
            for (var l in a)
                a.hasOwnProperty(l) && (d[l] = a[l]);
            return c
        };
        _.H.mv = function() {
            if (window.document.body)
                return window.document.body;
            try {
                var a = window.document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "body");
                if (a && 1 == a.length)
                    return a[0]
            } catch (c) {}
            return window.document.documentElement || window.document
        };
        _.H.AS = function(b) {
            return a(b)
        }
    })();

} catch (e) {
    _._DumpException(e)
}
try {
    _.aj = function() {
        return Math.floor((new Date).getTime() / 1E3)
    };
    var cj, dj;
    _.bj = function(a, b) {
        this.A = a;
        var c = b || {};
        this.D = c.tH;
        this.B = c.domain;
        this.C = c.path;
        this.G = c.ZI
    };
    cj = /^[-+/_=.:|%&a-zA-Z0-9@]*$/;
    dj = /^[A-Z_][A-Z0-9_]{0,63}$/;
    _.bj.prototype.bg = function() {
        for (var a = this.A + "=", b = window.document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
            var d = b[c];
            if (0 == d.indexOf(a))
                return d.substr(a.length)
        }
    };
    _.bj.prototype.write = function(a, b) {
        if (!dj.test(this.A))
            throw "Invalid cookie name";
        if (!cj.test(a))
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
    _.bj.prototype.clear = function() {
        this.write("", 0)
    };
    _.bj.iterate = function(a) {
        for (var b = window.document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
            var d = b[c].split("="), e = d.shift();
            a(e, d.join("="))
        }
    };
    var fj;
    _.ej = function(a) {
        this.A = a
    };
    fj = {};
    _.ej.prototype.bg = function() {
        if (fj.hasOwnProperty(this.A))
            return fj[this.A]
    };
    _.ej.prototype.write = function(a) {
        fj[this.A] = a;
        return !0
    };
    _.ej.prototype.clear = function() {
        delete fj[this.A]
    };
    _.ej.iterate = function(a) {
        for (var b in fj)
            fj.hasOwnProperty(b) && a(b, fj[b])
    };
    _.gj = function(a) {
        this.B = a;
        this.A = window.sessionStorage
    };
    _.gj.prototype.bg = function() {
        return this.A && this.A.getItem(this.B)
    };
    _.gj.prototype.write = function(a) {
        try {
            this.A && this.A.setItem(this.B, a)
        } catch (b) {
            return !1
        }
        return !0
    };
    _.gj.prototype.clear = function() {
        this.A && this.A.removeItem(this.B)
    };
    _.gj.iterate = function(a) {
        if (window.sessionStorage)
            for (var b = 0, c = window.sessionStorage.length; b < c; ++b) {
                var d = window.sessionStorage.key(b);
                a(d, window.sessionStorage[d])
            }
    };
    for (var hj = 0; 64 > hj; ++hj);
    var ij;
    ij = [".APPS.GOOGLEUSERCONTENT.COM", "@DEVELOPER.GSERVICEACCOUNT.COM"];
    _.jj = "https:" === window.location.protocol;
    _.kj = _.jj || "http:" === window.location.protocol ? _.bj : _.ej;
    _.lj = function(a) {
        a = a.toUpperCase();
        for (var b = 0, c = ij.length; b < c; ++b) {
            var d = a.split(ij[b]);
            2 == d.length && "" === d[1] && (a = d[0])
        }
        a = a.replace(/-/g, "_").toUpperCase();
        40 < a.length && (b = new _.$i, b.zs(a), a = b.Ef().toUpperCase());
        return a
    };
    _.mj = function(a) {
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
            yb: "S" == a.charAt(0),
            domain: d,
            wd: c
        }
    };
    _.nj = function(a) {
        if (0 !== a.indexOf("GCSC"))
            return null;
        var b = {
            Dc: !1
        };
        a = a.substr(4);
        if (!a)
            return b;
        var c = a.charAt(0);
        a = a.substr(1);
        var d = a.lastIndexOf("_");
        if ( - 1 == d)
            return b;
        var e = _.mj(a.substr(d + 1));
        if (null == e)
            return b;
        a = a.substring(0, d);
        if ("_" !== a.charAt(0))
            return b;
        d = "E" === c && e.yb;
        return !d && ("U" !== c || e.yb) || d&&!_.jj ? b : {
            Dc: !0,
            yb: d,
            zu: a.substr(1),
            domain: e.domain,
            wd: e.wd
        }
    };
    var oj, pj, tj, uj, xj;
    oj = _.Ka();
    pj = _.Ka();
    _.qj = _.Ka();
    _.rj = _.Ka();
    _.sj = null;
    tj = "state code cookie_policy g_user_cookie_policy authuser prompt g-oauth-window status".split(" ");
    uj = function(a) {
        this.B = a;
        this.A = null
    };
    uj.prototype.write = function(a) {
        var b = _.Ka(), c = _.Ka(), d;
        for (d in a)
            _.Ma(a, d) && (c[d] = a[d], b[d] = a[d]);
        d = 0;
        for (var e = tj.length; d < e; ++d)
            delete c[tj[d]];
        a = String(a.authuser || 0);
        d = _.Ka();
        d[a] = _.H.Fb("#" + _.vj(c));
        this.B.write((0, _.$b)(d));
        this.A = b
    };
    uj.prototype.bg = function() {
        return this.A
    };
    uj.prototype.clear = function() {
        this.B.clear();
        this.A = _.Ka()
    };
    _.wj = function(a) {
        if (!a)
            return null;
        "single_host_origin" !== a && (a = _.J.Ba(a));
        var b = window.location.hostname, c = b, d = _.jj;
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
            yb: d,
            wd: b
        }
    };
    xj = function(a) {
        if (!a)
            return null;
        var b = a.client_id;
        if (!b)
            return null;
        b = _.lj(b);
        a = _.wj(a.cookie_policy);
        return a?!_.jj && a.yb ? (_.Qb("WARNING: https cookie_policy set for http domain"), null) : ["GCSC", a.yb ? "E": "U", "_", b, "_", a.yb ? "S": "H", a.wd].join("") : null
    };
    _.yj = function(a) {
        return a ? {
            domain: a.domain,
            path: "/",
            ZI: a.yb
        } : null
    };
    _.zj = function(a) {
        var b = oj[a];
        b || (b = new uj(new _.ej(a)), oj[a] = b);
        return {
            rh: b,
            key: a
        }
    };
    _.Aj = function(a, b) {
        var c = b ? pj: oj, d = b ? _.kj: _.gj, e = a && xj(a), f=!!e;
        a&&!a.g_user_cookie_policy && (d = _.ej, e = "token");
        if (!e)
            if (!b && _.sj)
                e = _.sj;
            else 
                return null;
        var g = c[e];
        if (!g) {
            g = _.nj(e);
            if (!("token" === e || g && g.Dc))
                return null;
            g = new d(e, _.yj(g));
            b || (g = new uj(g))
        }
        c[e] = g;
        return {
            rh: g,
            key: e,
            mE: f
        }
    };
    _.Bj = function(a, b, c) {
        a = a && "token" !== a ? _.zj(a) : _.Aj();
        if (!a)
            return null;
        if (c) {
            c = a.rh;
            _.Ka();
            var d = c.B.bg();
            c = null;
            try {
                c = (0, _.ac)(d)
            } catch (e) {}
            0 == c && (c = null);
            d = _.Si() || "0";
            d = String(d);
            c = c && c[d]
        } else 
            c = a.rh.bg();
        c && c.expires_at && _.aj() > c.expires_at && (a.rh.clear(), c = null);
        c && c.error&&!b && (c = null);
        return c
    };
    _.vj = function(a) {
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
    _.gj.iterate(function(a) {
        var b = _.nj(a);
        b && b.Dc && (oj[a] = new uj(new _.gj(a)))
    });
    _.kj.iterate(function(a) {
        oj[a] && (pj[a] = new _.kj(a, _.yj(_.nj(a))))
    });

} catch (e) {
    _._DumpException(e)
}
try {
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
} catch (e) {
    _._DumpException(e)
}
try {
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

} catch (e) {
    _._DumpException(e)
}
try {
    var Ej, Fj;
    _.Dj = function(a) {
        this.A = a
    };
    Ej = /\s*;\s*/;
    _.h = _.Dj.prototype;
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
        for (var c = a + "=", d = (this.A.cookie || "").split(Ej), e = 0, f; f = d[e]; e++) {
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
    _.h.fd = function() {
        return Fj(this).keys
    };
    _.h.xc = function() {
        return Fj(this).jA
    };
    _.h.isEmpty = function() {
        return !this.A.cookie
    };
    _.h.fb = function() {
        return this.A.cookie ? (this.A.cookie || "").split(Ej).length : 0
    };
    _.h.Mh = function(a) {
        for (var b = Fj(this).jA, c = 0; c < b.length; c++)
            if (b[c] == a)
                return !0;
        return !1
    };
    _.h.clear = function() {
        for (var a = Fj(this).keys, b = a.length - 1; 0 <= b; b--)
            this.remove(a[b])
    };
    Fj = function(a) {
        a = (a.A.cookie || "").split(Ej);
        for (var b = [], c = [], d, e, f = 0; e = a[f]; f++)
            d = e.indexOf("="), - 1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {
            keys: b,
            jA: c
        }
    };
    _.Gj = new _.Dj(window.document);
    _.Gj.B = 3950;

} catch (e) {
    _._DumpException(e)
}
try {
    var Hj = function() {
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
    var Ij = function() {
        var a = window.__OVERRIDE_SID;
        null == a && (a = (new _.Dj(window.document)).get("SID"));
        return !!a
    }, Kj = function(a, b, c) {
        if (1 == (_.ha(c) ? 2 : 1))
            return Jj([b, a].join(" "));
        var d = [], e = [];
        (0, _.dd)(c || [], function(a) {
            e.push(a.key);
            d.push(a.value)
        });
        c = (new Date).getTime();
        var f = [], f = 0 == d.length ? [c, b, a]: [d.join(":"), c, b, a];
        a = Jj(f.join(" "));
        a = [c, a];
        0 == e.length || a.push(e.join(""));
        return a.join("_")
    }, Jj = function(a) {
        var b = Hj();
        b.update(a);
        return b.Ef().toLowerCase()
    };
    _.Lj = {
        Em: function(a) {
            var b = {
                SAPISIDHASH: !0,
                APISIDHASH: !0
            };
            return a && (a.OriginToken || a.Authorization && b[String(a.Authorization).split(" ")[0]])?!0 : !1
        },
        gH: Ij,
        $E: function() {
            var a = null;
            Ij() && (a = window.__PVT, null == a && (a = _.Cj.get("BEAT")));
            return a
        },
        Wl: function(a) {
            var b = _.Oi(String(window.location.href));
            if (Ij()) {
                var c = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:"), d = c ? window.__SAPISID: window.__APISID;
                null == d && (d = (new _.Dj(window.document)).get(c ? "SAPISID" : "APISID"));
                if (d)
                    return [c ? "SAPISIDHASH": "APISIDHASH", Kj(b, d, a)].join(" ")
            }
            return null
        }
    };

} catch (e) {
    _._DumpException(e)
}
try {
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
} catch (e) {
    _._DumpException(e)
}
try {
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

} catch (e) {
    _._DumpException(e)
}
try {
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

} catch (e) {
    _._DumpException(e)
}
try {
    var Oj;
    Oj = function(a, b) {
        var c = _.H.Vo({
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
    _.Pj = function() {
        function a() {
            return !!m("auth/useFirstPartyAuthV2")
        }
        function b(a, b, c, d) {
            var e = m("proxy");
            if (c ||!e)
                var e = m("root"), f = m("root-1p") || e, g = m("xd3"), e = (c || String(b ? f : e)) + g;
            (b = _.H.Fb().jsh || _.Mi.Jo.yv()) && (e += (0 <= e.indexOf("?") ? "&" : "?") + "jsh=" + (0, window.encodeURIComponent)(b));
            m("push") && (e += (0 <= e.indexOf("?") ? "&" : "?") + "p=1");
            e += "#parent=" + (0, window.encodeURIComponent)(null != d ? String(d) : _.Mi.Ba(window.document.location.href));
            return e + ("&rpctoken=" + a)
        }
        function c(a, b, c, d) {
            var f = e(c, d);
            p[f] ||
            (c = Oj(f, b), _.J.register("ready:" + a, function() {
                _.J.uh("ready:" + a);
                if (!v[f]) {
                    v[f]=!0;
                    var b = x[f];
                    x[f] = [];
                    for (var c = 0, d = b.length; c < d; ++c) {
                        var e = b[c];
                        k(e.jh, e.BI, e.nc)
                    }
                }
            }), _.J.Dk(f, b), p[f] = c)
        }
        function d(a, d) {
            var e = String(2147483647 * (0, _.Nj)() | 0), f = b(e, a, d);
            _.cc(function() {
                c(e, f, a, d)
            })
        }
        function e(a, c) {
            var d = b("", a, c, ""), e = n[d];
            e || (e = _.Mj(), e.update(d), e = e.Ef().toLowerCase(), e += Math.random(), n[d] = e);
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
                    m = _.Lj.Em(a.headers)
                }
            };
            if (b) {
                for (var G = _.E("client/jsonpOverride"), I = 0, U = b.length; I < U; ++I) {
                    var Z = b[I];
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
                jh: a,
                BI: b,
                nc: c
            }))
        }
        function l(a, b) {
            if ("GET" != a.httpMethod)
                throw "JSONP supports GET methods only.";
            var c = "jpcb" + String(2147483647 * (0, _.Nj)() | 0), d = window.document.createElement("script"), e = window.document.getElementsByTagName("head")[0];
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
            f = _.lh(f, a.url);
            g = _.ih(_.kh([f], g));
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
            fl: function(b, c, d) {
                var e = d || "auto";
                b = b || {};
                if ("none" == e)
                    return b;
                c = c || window.location.href;
                d = b.Authorization;
                var f = b.OriginToken;
                if (!d&&!f) {
                    f = _.Bj(void 0, void 0);
                    !f && window.gapi.auth2 && "function" == typeof window.gapi.auth2._gt && (f = window.gapi.auth2._gt());
                    f && f.access_token &&
                    ("oauth2" == e || "auto" == e) && (d = String(f.token_type || "Bearer") + " " + f.access_token);
                    if (f=!d)
                        f = (!!m("auth/useFirstPartyAuth") || "1p" == e) && "oauth2" != e;
                    if (f && _.Lj.gH()) {
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
                            d = _.Lj.Wl(g)
                        } else 
                            d = _.Lj.Wl();
                        d && (c = _.google.$p(c), c = b["X-Goog-AuthUser"] || c, _.ch(c) && (!a() || a() && _.ch(m("primaryEmail")) && _.ch(m("appDomain")) && _.ch(m("fogId"))) && (c = "0"), _.ch(c) || (b["X-Goog-AuthUser"] = c))
                    }
                    d ? b.Authorization = d : !1 !== m("auth/useOriginToken") && (f = _.Lj.$E()) && (b.OriginToken = f)
                }
                return b
            },
            A: l,
            fg: k
        }
    }();

} catch (e) {
    _._DumpException(e)
}
try {
    var ___;
    _.kc = window.tamings___ || [];
    _.lc = window.caja___;
    ___ = window.___;
} catch (e) {
    _._DumpException(e)
}
try {
    _.ya.sk = function() {
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
    _.ya.dl = function(a, b) {
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
        a = _.ya.sk();
        a.add(this.method, this);
        a.execute(function(a) {
            a.error ? d.call(c, a.error) : d.call(c, a[c.method])
        })
    };
    _.C("osapi.newBatch.add", _.ya.sk.add);
    _.C("osapi.newBatch.execute", _.ya.sk.execute);
    _.C("osapi._registerMethod", _.ya.dl);
    _.C("osapi._BoundCall", mc);
    _.C("osapi._BoundCall.prototype.execute", mc.prototype.execute);
} catch (e) {
    _._DumpException(e)
}
try {
    var Qj = function(a) {
        a = a.split(".");
        for (var b = window.osapi || window, c; c = a.shift();)
            if (null != b[c])
                b = b[c];
            else 
                return null;
        return b
    }, Rj = function(a, b) {
        var c = a.split("."), d = window;
        c[0]in d ||!d.execScript || d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());)
            c.length || void 0 === b ? d[e] ? d = d[e] : d = d[e] = {} : d[e] = b
    };
    var Tj, Vj, Yj, Zj, ak, Uj, bk, ck;
    Tj = {};
    Vj = function(a, b) {
        _.ya.dl(a, {
            name: "googleapis",
            execute: Uj,
            root: b
        });
        var c = Qj(a);
        Rj(a, c);
        if (0 != a.indexOf("googleapis.")) {
            var d = a.substring(a.indexOf(".") + 1), e = d.lastIndexOf(".delete");
            - 1 != e && e + 7 == d.length && (d = d.replace(".delete", ".remove"));
            Rj("googleapis." + d, c)
        }
    };
    _.Wj = function(a) {
        for (var b in a)
            a.hasOwnProperty(b) && (Tj[b] = a[b])
    };
    _.Xj = function(a) {
        null == a ? _.Sj && delete _.Sj.key : (_.Sj = _.Sj || {}, _.Sj.key = a)
    };
    Yj = function(a, b) {
        if ("trace" != a)
            throw 'only the "trace" parameter may be set using this API';
        null == b ? _.Sj && delete _.Sj[a] : (_.Sj = _.Sj || {}, _.Sj[a] = b)
    };
    Zj = function(a) {
        a = a || {};
        if (window.navigator) {
            for (var b = ["appVersion", "platform", "userAgent"], c = [], d = 0; d < b.length; d++)
                window.navigator[b[d]] && c.push((0, window.encodeURIComponent)(b[d]) + "=" + (0, window.encodeURIComponent)(window.navigator[b[d]]));
            a["X-ClientDetails"] = c.join("&")
        }
        return a
    };
    ak = function(a) {
        a.clientVersion = "1.0.0-alpha";
        _.Sj && (a.urlParams = _.Sj)
    };
    Uj = function(a, b) {
        for (var c = this.root || null, d = 0; d < a.length; d++) {
            var e = a[d], f;
            f = e.method;
            f = f.substring(0, f.indexOf("."));
            e.jsonrpc = "2.0";
            e.key = e.id;
            c = e.root || c;
            (f = Tj[f] || "v1", !e.apiVersion) && (e.apiVersion = f)
        }
        d = {};
        d = _.Pj.fl(d);
        d = Zj(d);
        c = {
            requests: a,
            headers: d,
            root: c
        };
        ak(c);
        _.Pj.fg("makeRequest", c, b)
    };
    bk = function(a, b) {
        for (var c = 0, d = a.length; c < d; c++) {
            var e = a[c];
            e.key = e.id;
            var f = e.params.headers || {}, f = _.Pj.fl(f), f = Zj(f);
            e.params.headers = f;
            ak(e.params)
        }
        _.Pj.fg("makeHttpRequests", a, b)
    };
    ck = function() {
        var a = _.H.Fb(), b = {
            debug: "googleapis.config/debug"
        }, c;
        for (c in b)
            a[c] && _.eb(b[c], "true" == a[c]);
        for (var d in _.E("googleapis.config/methods"))
            Vj(d);
        _.E("googleapis.config/versions") && _.Wj(_.E("googleapis.config/versions"));
        _.E("googleapis.config/developerKey") && _.Xj(_.E("googleapis.config/developerKey"));
        _.ya.dl("googleapis.newHttpRequest", {
            name: "googleapis",
            execute: bk
        });
        Rj("googleapis.newHttpRequest", Qj("googleapis.newHttpRequest"))
    };
    ck();
    var dk = function() {
        this.A = {};
        this.B = _.ya.sk()
    };
    dk.prototype.add = function(a, b, c) {
        this.A[a] = c;
        this.B.add(a, b);
        return this
    };
    dk.prototype.execute = function(a) {
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
    _.C("googleapis.ApiClient.register", Vj);
    _.C("googleapis.ApiClient.setVersions", _.Wj);
    _.C("googleapis.ApiClient.setDeveloperKey", _.Xj);
    _.C("googleapis.ApiClient.setUrlParameter", Yj);
    _.C("googleapis.ApiClient.init", ck);
    _.C("googleapis.Batch", dk);
    _.C("googleapis.Batch.prototype.add", dk.prototype.add);
    _.C("googleapis.Batch.prototype.execute", dk.prototype.execute);
    _.C("googleapis.init", function() {
        ck()
    });
    _.C("googleapis.newBatch", function() {
        return new dk
    });
    _.C("googleapis.newRequest", function(a, b, c) {
        b = b || {};
        var d = {
            name: "googleapis",
            execute: Uj,
            root: c
        }, e = _.ya.sk(), f = this;
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
        Vj(a, b)
    });
    _.C("googleapis.setUrlParameter", function(a, b) {
        Yj(a, b)
    });
    _.C("googleapis.setDeveloperKey", function(a) {
        _.Xj(a)
    });
    _.C("googleapis.setVersions", function(a) {
        _.Wj(a)
    });

} catch (e) {
    _._DumpException(e)
}
})(this._);
// Google Inc.

