(function() {
    var g = void 0, h = true, i = null, k = false, l, m = this;
    function aa() {
        for (var a = "", b = 0; b < 16; b++)
            a += Math.random();
        return a
    }
    function n(a, b) {
        var c = "", d = ba(encodeURIComponent(a));
        d.splice(b || 5, d.length);
        q(d, function(a) {
            if (a == 0)
                a = "A";
            else {
                a>>>=0;
                for (var b = "", d; a > 0;)
                    d = a%64, b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".charAt(d) + b, a>>>=6;
                a = b
            }
            c += a
        });
        return c
    }
    function ba(a) {
        a += String.fromCharCode(128);
        for (var b = [1518500249, 1859775393, 2400959708, 3395469782], c = 1732584193, d = 4023233417, e = 2562383102, f = 271733878, o = 3285377520, p = [], j, t, v, D, w, F = Math.ceil((a.length / 4 + 2) / 16), L = [F], z = 0, s; z < F; z++) {
            L[z] = [];
            for (j = 0; j < 16; j++)
                L[z][j] = a.charCodeAt(z * 64 + j * 4)<<24 | a.charCodeAt(z * 64 + j * 4 + 1)<<16 | a.charCodeAt(z * 64 + j * 4 + 2)<<8 | a.charCodeAt(z * 64 + j * 4 + 3)
        }
        z = (a.length - 1) * 8;
        a = F - 1;
        L[a][14] = Math.floor(z / Math.pow(2, 32));
        L[a][15] = z & 4294967295;
        for (z = 0; z < F; z++) {
            for (s = 0; s < 16; s++)
                p[s] = L[z][s];
            for (s = 16; s < 80; s++)
                p[s] = (p[s - 3]^p[s - 8]^p[s - 14]^p[s - 16])<<1 | (p[s - 3]^p[s - 8]^p[s - 14]^p[s - 16])>>>31;
            a = c;
            j = d;
            t = e;
            v = f;
            D = o;
            for (s = 0; s < 80; s++)
                w = Math.floor(s / 20), w = (a<<5 | a>>>27) + (w == 0 ? j & t^~j & v : w == 1 ? j^t^v : w == 2 ? j & t^j & v^t & v : j^t^v) + D + b[w] + p[s] & 4294967295, D = v, v = t, t = j<<30 | j>>>2, j = a, a = w;
            c = c + a & 4294967295;
            d = d + j & 4294967295;
            e = e + t & 4294967295;
            f = f + v & 4294967295;
            o = o + D & 4294967295
        }
        return [c, d, e, f, o]
    }
    function r(a, b) {
        return function() {
            a.apply(b, arguments)
        }
    }
    function u(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, k) : a.attachEvent && a.attachEvent("on" + b, c)
    }
    function x(a) {
        return typeof a === "number"
    }
    function y(a) {
        return typeof a === "string"
    }
    function A(a) {
        a = new Date( + a);
        return Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())
    }
    function B() {
        return (new Date).getTime()
    }
    function q(a, b) {
        if ((!!a && a.constructor === Object) === h)
            for (var c in a) {
                if (a.hasOwnProperty(c) && b(a[c], c) === k)
                    break
            } else {
            c = 0;
            for (var d = a.length; c < d; c++)
                if (b(a[c], c) === k)
                    break
            }
    }
    function ca(a, b) {
        if (a === b)
            return 0;
        if (a.length === 0)
            return b.length;
        if (b.length === 0)
            return a.length;
        for (var c = [], d = 0, e = b.length; d <= e; d++)
            c[d] = [d];
        for (var f = 0, o = a.length; f <= o; f++)
            c[0][f] = f;
        for (var p, j, t, d = 1; d <= e; d++)
            for (f = 1; f <= o; f++)
                p = d - 1, j = f - 1, t = c[p][j], b.charAt(p) == a.charAt(j) ? c[d][f] = t : (j = c[d][j] + 1, p = c[p][f] + 1, t += 2, c[d][f] = Math.min(j, p, t));
        return c[b.length][a.length]
    };
    function da(a) {
        var b = {};
        a && (a.charAt(0) == "?" && (a = a.substring(1)), a = a.replace("+", " "), q(a.split(/[&;]/g), function(a) {
            a = a.split("=");
            b[decodeURIComponent(a[0])] = decodeURIComponent(a[1])
        }));
        return b
    }
    function ea(a, b, c) {
        var d = "", e = m.location.href.split("?");
        e.length && (e = da(e[1]), b = c || b, e[b] && (d = "&" + a + "=" + e[b]));
        return d
    }
    function fa(a, b) {
        return !b ? h : a === "http:" && b === "80" || a === "https:" && b === "443"
    }
    function C(a) {
        var b = {
            hostname: "",
            pathname: "",
            search: "",
            protocol: "",
            port: "",
            hash: ""
        };
        if (!a)
            return b;
        var c = document.createElement("a"), d = m.location;
        if (!/^https?:/.test(a) && a.indexOf("javascript:") !== 0)
            if (a.indexOf("//") === 0)
                a = d.protocol + a;
            else if (a.indexOf("/") === 0)
                var e = fa(d.protocol, d.port) ? "": d.port, a = d.protocol + "//" + d.hostname + (e ? ":" + e : "") + a;
            else {
                var e = document.baseURI || d.href, f = e.indexOf("?");
                f===-1 && (f = e.indexOf("#"));
                if (f===-1)
                    f = e.length;
                    f = e.lastIndexOf("/", f);
                    a = f===-1 ? "/" + a : e.substr(0, f) + "/" +
                    a
            }
        c.href = a;
        b.hostname = c.hostname;
        b.pathname = c.pathname;
        b.search = c.search;
        b.protocol = c.protocol;
        b.port = c.port;
        b.hash = c.hash;
        if (b.pathname.charAt(0) !== "/")
            b.pathname = "/" + b.pathname;
        if (b.hostname === "")
            b.hostname = d.hostname;
        if (b.protocol === "")
            b.protocol = d.protocol;
        if (b.protocol === "javascript:")
            b.pathname = "", b.hostname = "", b.port = "", b.hash = "";
        if (fa(b.protocol, b.port))
            b.port = "";
        return b
    }
    function E(a) {
        var b = a.protocol;
        a.hostname && (b += "//" + a.hostname, a.port && (b += ":" + a.port));
        return b + a.pathname + a.search + a.hash
    };
    function ga(a) {
        q(document.getElementsByTagName("script"), function(b) {
            if (b.src.match(/chartbeat.js/))
                return b = da(b.src.split("?")[1]), a.uid = a.uid || b.uid, a.domain = a.domain || b.domain, k
        })
    }
    function G(a, b, c) {
        return a[c] ? "&g" + b + "=" + encodeURIComponent(a[c]) : ""
    }
    function ha(a) {
        var b = [];
        q(a, function(a, d) {
            d.charAt(0) == "_" && b.push(d + "=" + a)
        });
        return b.length ? "&" + b.join("&") : ""
    };
    var H = {};
    H.c = function(a) {
        var b = m._sf_async_config;
        if (!a && b && b.noCookies)
            return i;
        if (H.c.w !== g)
            return H.c.w;
        var a = B() + "", c, d;
        try {
            if ((d = m.localStorage).setItem(a, a), c = d.getItem(a) === a, d.removeItem(a), c)
                return H.c.w = d
        } catch (e) {}
        return H.c.w = i
    };
    H.b = function(a) {
        var b = H.c();
        if (!b)
            return "";
        var c = b.getItem(a + "_expires");
        return c && (c =+ c, !isNaN(c) && B() > c) ? (H.remove(a), "") : b.getItem(a) || ""
    };
    H.create = function(a, b, c) {
        var d = H.c();
        if (d) {
            var e = new Date;
            e.setTime(B() + c * 1E3);
            try {
                d.setItem(a, b), d.setItem(a + "_expires", e.getTime())
            } catch (f) {}
        }
    };
    H.remove = function(a) {
        var b = H.c();
        b && (b.removeItem(a), b.removeItem(a + "_expires"))
    };
    function ia() {
        var a = document.createElement("script");
        a.async = h;
        a.src = (m.location.protocol || "http:") + "//static.chartbeat.com/js/inpage.js";
        var b = document.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b)
    }
    function ja(a) {
        if (/[\/|\.]chartbeat\.com$/.test(a.origin)) {
            var b = H.c(h), c = String(a.data);
            b && c.indexOf("_cb_ip") == 0 && (b.setItem("_cb_ip", "1"), a.source.postMessage(1, a.origin), ia())
        }
    };
    var I = {}, J = 1;
    function K(a, b, c) {
        J++;
        I[a] = I[a] || {};
        I[a][J] = [b, c];
        return J
    }
    function ka(a) {
        if (y(a))
            I[a] = g, delete I[a];
        else if (x(a)) {
            var b = h;
            q(I, function(c) {
                q(c, function(d, e) {
                    if (parseInt(e, 10) === a)
                        return c[e] = g, delete c[e], b = k
                });
                return b
            })
        }
    }
    function M(a, b) {
        if (I[a]) {
            var c = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1): [];
            q(I[a], function(a) {
                var b;
                a && a.length === 2 && (b = a[0], a = a[1], b.apply(a, c))
            })
        }
    };
    var N = {};
    N.d = function() {
        N.n ? N.r("pageload") : (N.fa = [{
            target: m,
            event: "scroll"
        }, {
            target: document.body,
            event: "keydown"
        }, {
            target: document.body,
            event: "mousemove"
        }, {
            target: m,
            event: "resize"
        }, {
            target: document.body,
            event: "mousedown"
        }
        ], N.t = i, N.J = k, N.m = i, N.U = {}, q(N.fa, function(a) {
            var b = a.event;
            u(a.target, b, function(a) {
                N.r.call(N, b, a)
            })
        }), K("focus", function() {
            N.r("focus")
        }), N.r("pageload"), u(document.body, "click", function(a) {
            a: if (a = a || window.event) {
                if (a = a.target || a.srcElement, a.tagName !== "A")
                    if (a.parentNode)
                        if (a.parentNode.tagName === "A")
                            a =
                            a.parentNode;
                        else if (a.parentNode.parentNode && a.parentNode.parentNode.tagName === "A")
                            a = a.parentNode.parentNode;
                        else {
                            a = g;
                            break a
                        } else {
                            a = g;
                            break a
                        }
            } else 
                a = g;
            a && M("anchor", a)
        }), N.n = h)
    };
    N.ka = function() {
        var a, b = N.U.keydown;
        if (b === g)
            return k;
        b = B() - b;
        return b <= (a || 15E3) && b >= 0
    };
    N.O = 100;
    N.r = function(a, b) {
        if (!b)
            b = window.event;
        if (b && a === "keydown") {
            var c = b.keyCode ? b.keyCode: b.which;
            if (c === 32 || c > 36 && c < 41)
                a = "scroll"
        }
        N.Ia(a);
        N.t === i ? N.da() : N.J = h
    };
    N.Ia = function(a) {
        N.U[a] = B()
    };
    N.da = function() {
        N.t = m.setTimeout(N.ma, N.O);
        M("activity");
        N.m !== i && m.clearTimeout(N.m);
        N.m = m.setTimeout(function() {
            M("inactive");
            m.clearTimeout(N.m);
            N.m = i
        }, 5E3 + N.O)
    };
    N.ma = function() {
        m.clearTimeout(N.t);
        N.t = i;
        if (N.J)
            N.J = k, N.da()
    };
    var O = {};
    O.la = function() {
        try {
            O.create("_cb_test", "1", 1);
            var a = O.b("_cb_test");
            O.remove("_cb_test");
            return a === "1"
        } catch (b) {
            return k
        }
    };
    O.b = function(a) {
        a += "=";
        var b = "";
        q(document.cookie.split(";"), function(c) {
            for (; c.charAt(0) === " ";)
                c = c.substring(1, c.length);
            if (c.indexOf(a) === 0)
                return b = c.substring(a.length, c.length), k
        });
        return b
    };
    O.create = function(a, b, c) {
        var d = m._sf_async_config;
        if (!d ||!d.noCookies)
            d = new Date, d.setTime(B() + c * 1E3), document.cookie = a + "=" + b + ("; expires=" + d.toGMTString()) + "; path=/"
    };
    O.remove = function(a) {
        O.b(a) && O.create(a, "", - 86400)
    };
    function la(a) {
        this.s = a || "";
        this.na = H.c() !== i || O.la();
        this.I = k;
        ma(this)
    }
    l = la.prototype;
    l.isSupported = function() {
        return this.na
    };
    function ma(a) {
        if (!O.b("_cb_ls")) {
            var b = H.c() !== i, c = O.b("_SUPERFLY_nosample");
            c && q(["", "_v_", "_p_"], function(b) {
                a.create(b + "_SUPERFLY_nosample", c, 600, h)
            });
            var d = O.b("_chartbeat3");
            d && (a.create("_v__chartbeat3", d, 2592E3, h), O.remove("_chartbeat3"));
            b && ((b = O.b("_chartbeat2")) && a.create("_chartbeat2", b, 94608E3, h), (b = O.b("_chartbeat_uuniq")) && a.create("_chartbeat_uuniq", b, 94608E3, h), (b = O.b("_chartbeat5")) && a.create("_chartbeat5", b, 60, h));
            O.create("_cb_ls", "1", 2592E3)
        }
    }
    l.create = function(a, b, c, d) {
        a = d ? a : this.s + a;
        (H.c() ? H : O).create(a, b, c);
        H.c() && O.create(a, b, c)
    };
    l.update = function(a, b, c, d, e, f) {
        a = d ? a : this.s + a;
        e = y(e) ? e : "::";
        d = (d = this.b(a, h)) ? d.split(e) : [];
        x(f) && d.length >= f && d.splice(0, d.length - f + 1);
        d.push(b);
        this.create(a, d.join(e), c, h)
    };
    l.b = function(a, b) {
        var a = b ? a: this.s + a, c = (H.c() ? H : O).b(a);
        if (!c && H.c() && (c = O.b(a)) && O.b("_cb_ls")) {
            this.I = h;
            var d;
            switch (a) {
            case "_SUPERFLY_nosample":
                d = 600;
                break;
            case "_chartbeat4":
                d = 3600;
                break;
            case "_cb_cp":
                d = 3600;
                break;
            case "_chartbeat3":
                d = 2592E3;
                break;
            default:
                d = 94608E3
            }
            H.create(a, c, d)
        }
        return c
    };
    l.remove = function(a, b) {
        a = b ? a : this.s + a;
        (H.c() ? H : O).remove(a);
        H.c() && O.remove(a)
    };
    function na(a) {
        var b, c;
        b = "pageYOffset";
        c = "scrollTop";
        if (a) {
            var d, e;
            d = d || "*";
            e = e || document;
            if ("querySelectorAll"in e)
                a = e.querySelectorAll(d + "[data-cb-scroll-element]");
            else {
                a = [];
                d = e.getElementsByTagName(d);
                for (e = d.length; e--;)
                    d[e].getAttribute("data-cb-scroll-element") && a.push(d[e])
                }
            if (a && a.length)
                return a[0][c]
        }
        if (x(m[b]))
            return m[b];
        else if (document.body && document.body[c])
            return document.body[c];
        else if (document.documentElement[c])
            return document.documentElement[c];
        return 0
    }
    function oa() {
        var a = document, a = a[a.compatMode === "CSS1Compat" ? "documentElement": "body"].clientHeight || 0;
        window.innerHeight && (a = Math.min(window.innerHeight, a));
        return a
    }
    function P(a) {
        a = "scroll" + a;
        return Math.max(document.body[a], document.documentElement[a]) || 0
    }
    function pa(a, b) {
        var c;
        y(b) ? (b = b.toLowerCase(), c = function(a) {
            return (a = a.nodeName) && a.toLowerCase() === b
        }) : c = b;
        for (; a && a !== document.documentElement;) {
            if (c(a))
                return a;
            a = a.parentNode
        }
        return i
    };
    var Q = function() {
        var a, b;
        q(["", "moz", "o", "ms", "webkit"], function(c) {
            a = (c + "Hidden").charAt(0).toLowerCase() + (c + "Hidden").slice(1);
            if (typeof document[a] === "boolean")
                return b = c, k
        });
        var c = {};
        if (b !== g)
            c.T = a, c.N = (b + "VisibilityState").charAt(0).toLowerCase() + (b + "VisibilityState").slice(1), c.u = b + "visibilitychange";
        return c
    }();
    Q.d = function() {
        if (!Q.n)
            Q.q = Q.aa(), Q.u && document.addEventListener && document.addEventListener(Q.u, Q.Da, k), Q.P("focus", "onfocusin", Q.B), Q.P("blur", "onfocusout", Q.Y), Q.q && Q.B(), Q.n = h
    };
    Q.Na = function() {
        return Q.q
    };
    Q.B = function() {
        Q.q = h;
        M("focus")
    };
    Q.Y = function() {
        Q.q = k;
        M("blur")
    };
    Q.P = function(a, b, c) {
        m.addEventListener ? m.addEventListener(a, c, k) : document.attachEvent && document.attachEvent(b, c)
    };
    Q.aa = function() {
        var a = h;
        document.hasFocus && (a = document.hasFocus());
        var b = k;
        Q.T && (b = document[Q.T]);
        return a&&!b
    };
    Q.Da = function() {
        Q.aa() ? Q.B() : Q.Y()
    };
    function qa() {
        var a = i;
        q(document.getElementsByTagName("link"), function(b) {
            if (b.rel == "canonical")
                return b = C(b.href), a = R(b.pathname) + b.search + b.hash, k
        });
        return a
    }
    for (var ra = {}, S = 0; S < 81; S++)
        ra["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=:@[]".charCodeAt(S)] = h;
    function sa(a, b) {
        if (a === "%")
            return "%25";
        var c = parseInt(b, 16);
        return ra[c] ? String.fromCharCode(c) : "%" + b.toUpperCase()
    }
    function R(a) {
        if (!y(a))
            return a;
        a = a.replace(/%([0-9A-Fa-f]{2})?/g, sa);
        return a = a.replace(/[^0-9A-Za-z\-._~!$&'()*+,;=:@\/\[\]?#%]+/g, encodeURIComponent)
    };
    var T = {
        ha: {
            IDLE: 0,
            Ma: 1,
            La: 2,
            ga: 3
        },
        f: 0
    };
    T.d = function() {
        if (!T.n)
            K("activity", T.qa, T), K("inactive", T.ta, T), K("focus", T.sa, T), K("blur", T.ra, T), T.n = h
    };
    T.pa = function() {
        return T.f
    };
    T.qa = function() {
        T.f === 1 ? T.g(3) : T.f === 0 && T.g(2)
    };
    T.ta = function() {
        T.f === 3 ? T.g(1) : T.f === 2 && T.g(0)
    };
    T.sa = function() {
        (T.f === 0 || T.f === 2) && T.g(3)
    };
    T.ra = function() {
        T.f === 3 ? T.g(2) : T.f === 1 && T.g(0)
    };
    T.g = function(a) {
        T.f = a;
        M("state", a)
    };
    function ta(a, b) {
        this.R = a || g;
        this.Z = b || g;
        this.i = this.K = 0
    }
    l = ta.prototype;
    l.d = function() {
        this.i = this.K = 0;
        this.p = i;
        this.Fa = K("state", this.S, this);
        this.S(T.pa())
    };
    l.total = function() {
        this.K += this.i;
        this.i = 0;
        return this.K
    };
    l.S = function(a) {
        m.clearInterval(this.p);
        this.p = i;
        if (a === T.ha.ga)
            this.p = m.setInterval(r(this.va, this), 1E3)
    };
    l.va = function() {
        if (this.R === g || this.R())
            this.i++, this.Z && this.Z()
    };
    l.terminate = function() {
        m.clearInterval(this.p);
        this.p = i;
        ka(this.Fa)
    };
    function U() {
        this.a = m._sf_async_config || {};
        this.oa = r(this.Ba, this);
        this.l = [];
        this.e = new la(this.Ga);
        this.k = k;
        this.h = new ta;
        this.Ca = r(this.D, this);
        u(m, "unload", this.Ca);
        ua(this) || this.d()
    }
    function ua(a) {
        if (Q.N && document[Q.N] === "prerender") {
            a.k = h;
            var b = r(function() {
                if (this.k && document[Q.N] !== "prerender")
                    this.k = k, this.d(), V(this), window.setTimeout(function() {
                        document.removeEventListener(Q.u, b, k)
                    }, 100)
            }, a);
            document.addEventListener(Q.u, b, k);
            return h
        }
        return k
    }
    l = U.prototype;
    l.d = function() {
        this.A = this.j = 0;
        this.H = B();
        this.ca = n(va(this));
        this.F = h;
        this.V = 72E5;
        var a =+ this.a.sessionLength;
        if (!isNaN(a) && this.Ga !== "_p_")
            this.V = a * 6E4;
        this.h.d();
        T.d();
        N.d();
        Q.d();
        this.o = 0;
        this.ja = K("activity", this.za, this)
    };
    function V(a) {
        if (!a.e.b("_SUPERFLY_nosample")&&!a.k)
            a.xa ? a.G() : (a.xa = h, !m._sf_async_config&&!m._cbq ? (a.C = r(a.G, a), u(m, "load", a.C)) : a.G())
    }
    l.G = function() {
        var a = m._sf_startpt, b = m._sf_endpt;
        if (x(a))
            this.$ = x(b) ? b - a : B() - a;
        N.d();
        this.wa = setInterval(r(this.W, this), 15E3);
        this.W()
    };
    l.W = function() {
        var a = this.h.i, a = this.a.reading&&+this.a.reading || a > 0;
        if (this.A < this.j&&!a)
            this.A++;
        else if (a ? this.j = 0 : wa(this), this.A = 0, this.l.push(0), this.l.length > 18 && this.l.shift(), B() - this.H >= this.V)
            this.terminate();
        else {
            var a = this.a, b = W(this);
            this.o = Math.max(this.o, b);
            var c = Math.round((B() - this.H) / 600) / 100, d = 0, e = 0, f = 0, o = this.h.i;
            N.ka() ? e = 1 : this.a.reading&&+this.a.reading || o > 0 || c < 0.09 ? d = 1 : f = 1;
            var p = "", j = "", t = "", v = "", D = "", w = xa(this);
            if (this.F) {
                this.F = k;
                var p = (w ? "&v=" : "&r=") + X(this), j = "&i=" + ya(this),
                F = this.a.hudTrackable;
                F !== g && (t = "&L=" + (F ? "1" : "0"));
                if (w && (w = za(this)))
                    p = "&v=" + encodeURIComponent(w.path), v = "&K=" + [w.left, w.top, w.Ka, encodeURIComponent(w.Ja)].join("::"), w.X > 1 && (v += "&l1=" + w.X);
                a.alias && (D = "&PA=" + encodeURIComponent(a.alias));
                this.M && (p += "&vp=1")
            }
            w = this.$ ? "&b=" + this.$ : "";
            F = this.v ? "&A=" + this.v : "";
            b = (m.location.protocol || "http:") + "//" + a.pingServer + "/ping?h=" + encodeURIComponent(a.domain) + "&p=" + encodeURIComponent(a.path) + "&u=" + this.L + "&d=" + encodeURIComponent(this.z) + "&g=" + a.uid + G(a, 0, "sections") +
            G(a, 1, "authors") + G(a, 3, "sponsorName") + G(a, 4, "type") + (!a.noCookies && this.e.isSupported() ? "&n=" + this.ya : "&nc=1") + (this.Q ? "&f=" + this.Q : "") + "&c=" + c + "&x=" + b + "&m=" + this.o + "&y=" + P("Height") + "&o=" + P("Width") + "&w=" + oa() + "&j=" + Math.round((this.j + 2) * 15E3 / 1E3) + "&R=" + d + "&W=" + e + "&I=" + f + "&E=" + this.h.total() + "&e=" + o + p + v + D + w + F + ea("C", "utm_campaign", a.campaignTag) + ea("M", "utm_medium", a.mediumTag) + "&t=" + this.ca + "&V=39" + Aa(this) + j + t + "&tz=" + (new Date).getTimezoneOffset();
            c = this.e;
            d = c.I;
            c.I = k;
            a = b + (d ? "&l=1" : "") + ha(a) + "&_";
            if (!this.k) {
                b = this.oa;
                c = new Image(1, 1);
                if (b)
                    c.onerror = b;
                c.src = a
            }
        }
    };
    l.Ba = function() {
        this.l.push(1);
        var a = 0;
        q(this.l, function(b) {
            a += b
        });
        a < 3 ? (this.F = h, wa(this)) : (this.terminate(), this.e.create("_SUPERFLY_nosample", "1", 600))
    };
    l.D = function() {};
    l.za = function() {
        var a = W(this);
        this.o = Math.max(this.o, a)
    };
    function W(a) {
        return na(!!a.a.scrollElement)
    }
    function wa(a) {
        var b = a.j, b = b ? Math.min(b * 2, 16): 1;
        a.j = b
    }
    l.ea = function(a, b) {
        if (!this.k)
            this.D(), this.terminate(), this.M = m.location.protocol + "//" + this.a.domain + this.a.path, this.a.path = R(a), b && (this.a.title = b), this.d(), V(this)
    };
    function xa(a) {
        if (a.M)
            return h;
        a = (document.referrer || "").indexOf("://" + m.location.host + "/");
        return a!=-1 && a < 9
    }
    function X(a) {
        a = a.M;
        if (!a && (a = document.referrer || "")) {
            var b = C(a);
            if (b.protocol === "http:" || b.protocol === "https:")
                b.pathname = R(b.pathname), a = E(b)
        }
        return encodeURIComponent(a)
    }
    function ya(a) {
        a = a.a.title.slice(0, 100);
        return encodeURIComponent(a)
    }
    function va(a) {
        var b = m.navigator, c = m.window.screen, d = [b.userAgent, b.platform, (new Date).getTimezoneOffset(), c.width + c.height + c.colorDepth];
        q(b.plugins, function(a) {
            d.push(a.name + a.description + a.filename + a[0].type)
        });
        b = m.performance;
        d = d.concat([b && b.now ? b.now(): "", X(a), document.title, m.location.href, B(), P("Width"), P("Height"), aa()]);
        return d.join()
    }
    function Aa(a) {
        var b = "", c = a.e.b("_chartbeat4");
        c && (q(c.split("::"), function(a) {
            b += "&z=" + encodeURIComponent(a)
        }), a.e.remove("_chartbeat4"));
        return b
    }
    l.terminate = function() {
        this.h.terminate();
        ka(this.ja);
        if (this.C !== g) {
            var a = this.C, b = m;
            b.removeEventListener ? b.removeEventListener("load", a, k) : b.detachEvent && b.detachEvent("onload", a)
        }
        clearInterval(this.wa)
    };
    function Ba(a) {
        for (var b = a.offsetLeft, c = a.offsetTop, d = k, e = a.offsetParent; a && a !== g && a !== document.body;) {
            if (a === e)
                b += a.offsetLeft, c += a.offsetTop, e = a.offsetParent;
            var f = a, o = g;
            o = m.getComputedStyle ? (f = m.getComputedStyle(f, i)) && (f.position || f.getPropertyValue("position")) : f.currentStyle ? f.currentStyle.position : f.style && f.style.position;
            if ((o || "") === "fixed") {
                d = h;
                break
            }
            a = a.parentElement
        }
        d && (b += 0, c += 0);
        return {
            x: b,
            y: c
        }
    };
    function Ca(a, b) {
        for (var c = b || document.documentElement, d = [], e = i, f = a, o, p, j, t, v, D; f && f !== c;) {
            o = f.nodeName.toLowerCase();
            e = f;
            p = e.nodeName;
            if ((f = f.parentNode) && f !== document.documentElement) {
                j = f.children;
                t = 0;
                for (v = 0, D = j.length; v < D; v++) {
                    if (e === j[v]) {
                        o += "[" + (1 + v - t) + "]";
                        break
                    }
                    j[v].nodeName !== p && t++
                }
            }
            d.unshift(o)
        }
        return d.join("/")
    };
    function Y() {
        U.call(this);
        for (var a = r(this.ba, this), b = m._cbq || []; b.length;)
            a(b.shift());
        m._cbq = {
            push: a
        };
        K("anchor", this.Aa, this);
        "postMessage"in window && u(m, "message", r(this.ua, this))
    }(function() {
        var a = U;
        function b() {}
        b.prototype = a.prototype;
        Y.Ha = a.prototype;
        Y.prototype = new b;
        Y.prototype.constructor = Y
    })();
    l = Y.prototype;
    l.d = function() {
        Y.Ha.d.call(this);
        this.v = i;
        ga(this.a);
        var a = m.location, b = this.a;
        b.pingServer = b.pingServer || "ping.chartbeat.net";
        b = this.a;
        b.title = b.title || document.title;
        b = this.a;
        b.domain = b.domain || a.host;
        var b = this.a, c;
        if (this.a.path)
            c = R(this.a.path);
        else 
            a: {
            c = i;
            if (this.a.useCanonical && (c = qa()))
                break a;
                var d = m.location;
                c = R(d.pathname);
                var e = d.search || "", e = e.replace(/PHPSESSID=[^&]+/, ""), f = /&utm_[^=]+=[^&]+/ig;
                (d = f.exec(d.search)) && (e = e.replace(f, ""));
                f = /\?utm_[^=]+=[^&]+(.*)/i;
                (d = f.exec(e)) && (e = e.replace(f,
                d[1] != "" ? "?" + d[1] : ""));
                c += e
        }
        b.path = c;
        this.z = a.host.replace(/^www\./, "");
        this.a.domain = this.a.domain.replace(/^www\./, "");
        a = (this.e.b("_chartbeat2", h) || "").split(".");
        a.length > 4 && (a = []);
        b = B();
        e = "1";
        f = a&&+a[2];
        c = a && a[3];
        if (a && f && c)
            if (e = Math.abs((A(b) - A(f)) / 864E5)) {
                e = Math.min(e, 16) - 1;
                for (f = ""; e--;)
                    f += 0;
                    e = (c + f + "1").slice( - 16)
            } else 
                e = c;
        c = e;
        e = (this.e.b("_chartbeat2", h) || "").split(".");
        d = B();
        f = d-+(e[1] || 0);
        d-=+(e[2] || 0);
        this.ya = e[0] && f > 18E5 && d < 2592E6 ? 0 : 1;
        a[0] || (a[0] = this.a.utoken || n(va(this), 3), a[1] = b);
        a[2] = b;
        a[3] = c;
        this.L = a[0];
        this.Ea = a.join(".");
        this.e.create("_chartbeat2", this.Ea, 94608E3, h);
        this.a.utoken = this.L;
        var o;
        b =+ a[1];
        c =+ a[2];
        if ((a = a[3]) && b && c)
            o = (Math.min((Math.abs((A(c) - A(b)) / 864E5) || 0) + 1, 16, a.length) - 1).toString(16), o += ("0000" + parseInt(a, 2).toString(16)).slice( - 4);
        this.Q = o
    };
    l.ia = function(a) {
        this.v = a
    };
    l.D = function() {
        this.e.update("_chartbeat4", ["t=" + this.ca, "E=" + this.h.total(), "x=" + W(this), "c=" + Math.round((B() - this.H) / 600) / 100, "y=" + P("Height"), "w=" + oa()].join("&"), 3600)
    };
    l.ua = function(a) {
        var b = this.a;
        if (a.origin === "http://" + (b.playerdomain || this.z)) {
            var c = a.data;
            y(c) && c.indexOf("cbqpush::") === 0 ? (a = c.split("::"), a.length == 3 && (a = a.slice(1), a[0].indexOf("_") === 0 && this.ba(a))) : c == "cbdata?" && (b = "domain=" + encodeURIComponent(b.domain) + "&path=" + encodeURIComponent(b.path) + "&title=" + ya(this) + "&referrer=" + X(this) + "&internal=" + (xa(this) ? "1" : "0") + "&subdomain=" + encodeURIComponent(this.z) + "&utoken=" + this.L, a.source.postMessage(b, "*"))
        }
    };
    l.ba = function(a) {
        this.a[a[0]] = a[1];
        this.j = 0
    };
    function Da(a) {
        a = a.replace(/-{2,}/g, "-");
        a = C(a);
        a.pathname = R(a.pathname);
        return a
    }
    l.Aa = function(a) {
        var b = a.href || "", b = Da(b);
        if (!(b.hostname !== m.location.hostname || b.protocol.indexOf("http") !== 0)) {
            var b = E(b), c = pa(a, function(a) {
                return a.id
            }), d = Ca(a, c);
            c && (d && (d = "/" + d), d = "*[@id='" + c.id + "']" + d);
            c = n(d);
            d = encodeURIComponent(d).replace(/-/g, "%2D");
            d.length > 512 && (d = "");
            a = Ba(a);
            this.e.update("_chartbeat5", [a.x, a.y, encodeURIComponent(this.a.path), encodeURIComponent(b), c, d].join(","), 60, k, g, 5)
        }
    };
    function za(a) {
        var b = a.e.b("_chartbeat5");
        if (!b)
            return i;
        var c = b.split("::"), b = c.length, d, e;
        if (b === 1)
            d = c[0].split(","), e = 0;
        else {
            var f, o = Da(m.location.href), p = E(o);
            q(c, function(a, b) {
                var c = a.split(","), o = ca(p, decodeURIComponent(c[3]));
                if (o === 0)
                    return d = c, e = b, k;
                if (f === g || o < f)
                    f = o, d = c, e = b
            })
        }
        c.splice(e, 1);
        a.e.create("_chartbeat5", c.join("::"), 60);
        (a = d[5]) ? (a = a.replace(/%2D/g, "-"), a = decodeURIComponent(a)) : a = "";
        return {
            left: d[0],
            top: d[1],
            path: decodeURIComponent(d[2]),
            Ka: d[4] || "",
            Ja: a,
            X: b
        }
    };
    if (!m.pSUPERFLY) {
        var Z = new Y;
        m.pSUPERFLY = Z;
        Y.prototype.virtualPage = Y.prototype.ea;
        Y.prototype.activity = Y.prototype.ia;
        var $ = m.pSUPERFLY_pub;
        $ && $.virtualPage && (Y.prototype.virtualPage = function() {
            var a = arguments.length ? Array.prototype.slice.call(arguments, 0): [];
            $.virtualPage();
            Y.prototype.ea.apply(Z, a);
            $.d();
            V($)
        });
        $ && $.addEngagedAdFilter && (Y.prototype.addEngagedAdFilter = r($.addEngagedAdFilter, $));
        $ && $.refreshAd && (Y.prototype.refreshAd = r($.refreshAd, $));
        V(Z);
        var Ea = H.c(h);
        if (Ea) {
            u(m, "message", ja);
            var Fa;
            if (Fa = Ea.getItem("_cb_ip")) {
                var Ga = m.location;
                Fa=!(!/^([^.]+[.])?chartbeat\.com$/.test(Ga.hostname) ? 0 : /^\/publishing\/(overlay|hud|mab)\//.test(Ga.pathname))
            }
            Fa && ia()
        }
    };
})();

