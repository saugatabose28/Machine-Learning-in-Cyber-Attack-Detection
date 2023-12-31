window.OBR = window.OBR || {};
(function(OBR) {
    window.OB_releaseVer = "208751";
    window.OBR = window.OBR || {};
    OBR.j = OBR.j || [];
    OBR.ta = OBR.ta || {};
    window.OBR$ = function(d) {
        return document.getElementById(d)
    };
    OBR.e = OBR.e || function() {
        var d = {}, a = {
            v: function() {
                return d
            },
            i: function(a) {
                d.Z = a;
                d.Ga = [];
                d.startTime = (new Date).getTime()
            },
            startTime: function() {
                return d.startTime
            },
            log: function(a) {
                var g = ((new Date).getTime() - d.startTime) / 1E3;
                1E3 > d.Ga.length && d.Ga.push(g + " >" + a)
            },
            printLog: function() {
                if (d.Z.c.Ig)
                    window.console.log(d.Ga.join("\n"));
                else {
                    var a = d.Z.b.Fa();
                    a && (a.innerHTML = d.Ga.join("<br>"), a.style.display = "block")
                }
                return d.Ga.join("\n")
            }
        };
        a.i(OBR);
        return a
    }();
    OBR.printLog = OBR.e.printLog;
    OBR.A = function() {
        this.O = []
    };
    OBR.A.prototype.add = function(d, a) {
        var c;
        "string" === typeof d && "function" === typeof a && (c = {}, c.name = d, c.Vf = a, this.O.push(c))
    };
    OBR.A.prototype.pc = function(d) {
        var a, c;
        OBR.e.log("remove event :" + d);
        a = 0;
        for (c = this.O.length; a < c; a += 1)
            if (this.O[a] && this.O[a].name && this.O[a].name === d)
                try {
                    this.O.splice(a, 1)
        } catch (g) {
            OBR.e.log("rm evnt err: " + g)
        }
    };
    OBR.A.prototype.m = function(d, a, c) {
        var g, b, e, f;
        a = a || [];
        c=!!c;
        OBR.e.log("event fire:" + d);
        g = 0;
        for (b = this.O.length; g < b; g += 1)
            if (e = this.O[g].name || "", f = this.O[g].Vf, e === d)
                try {
                    f.apply(this, a)
        } catch (k) {
            OBR.e.log("fire evnt *" + d + "* error: " + k)
        }
        !0 === c && this.pc(d)
    };
    OBR.A.prototype.$ = function() {
        this.O = []
    };
    OBR.b = OBR.b || function() {
        var d = {}, a = {}, c = document, g = OBR, b = null;
        a.v = function() {
            d.Z = g;
            return d
        };
        a.i = function(e) {
            g = e
        };
        a.pa = function() {
            return function() {}
        };
        a.xg = function() {
            var e = window.jQuery;
            return void 0 !== e?!(/1\.(0|1|2|3|4)\.(0|1)/.test(e.fn.jquery) || /^1\.1/.test(e.fn.jquery) || /^1\.2/.test(e.fn.jquery) || /^1\.3/.test(e.fn.jquery)) : !1
        };
        a.s = function(e) {
            return null === e || isNaN(e) ? null : g.q("outbrain_widget_" + e)
        };
        a.Fa = function() {
            return g.q("ob_holder")
        };
        a.Xb = function() {
            if (!g.q(g.c.cb)) {
                var e = g.b.createElement("iframe",
                g.c.cb), f = e.style;
                f.display = "none";
                f.width = "1px";
                f.height = "1px";
                e.src = "about:blank";
                (f = a.Fa()) || (f = a.Ob());
                g.b.Q(e, f)
            }
        };
        a.Ob = function() {
            if (c.body)
                return c.body;
            var e;
            e = g.b.B("", "", "body", !0);
            return 0 >= e.length ? c.lastChild : e[0]
        };
        a.createElement = function(e, f, b, a) {
            var g;
            e = c.createElement(e);
            "string" === typeof f && e.setAttribute("id", f);
            "string" === typeof b && (e.style.cssText = b);
            for (g in a)
                a.hasOwnProperty(g) && e.setAttribute(g, a[g]);
            return e
        };
        a.ea = function(e) {
            if (g.c.Kc === g.c.Ec)
                try {
                    c.createStyleSheet().cssText =
                    e
            } catch (f) {
                OBR.e.log(f)
            } else {
                var b = c.createElement("style"), a = c.body ? "string" === typeof c.body.style.WebkitAppearance: !1;
                b.type = "text/css";
                c.getElementsByTagName("head")[0].appendChild(b);
                b[a ? "innerText": "innerHTML"] = e
            }
        };
        a.I = function(e, f) {
            var b = c.createElement("script");
            b.type = g.c.ah;
            b.src = e;
            b.charset = "UTF-8";
            b.async=!!f;
            b.defer=!1;
            return b
        };
        a.fj = function(e, f) {
            var b = g.b.createElement("link", e);
            b.setAttribute("rel", "stylesheet");
            b.setAttribute("type", g.c.Af);
            f && b.setAttribute("href", f);
            return b
        };
        a.lf =
        function(e) {
            var f = g.q("ob_iframe");
            f && (f.src = e)
        };
        a.Yd = function() {
            var e;
            e = isNaN(e) ? 1E5 : e;
            return Math.floor(Math.random() * e)
        };
        a.Uh = function(e, f, b) {
            return e.replace(f, b)
        };
        a.lj = function() {
            var e;
            if (e = OBR.q("objsonpp"))
                if (a.Og())
                    a.fa(e.parentNode) && e.parentNode.removeChild(e);
                else 
                    return OBR.q("objsonpp");
            e = c.createElement("iframe");
            e.id = "objsonpp";
            e.bi && (e.bi = "seamless");
            (e.frameElement || e).style.cssText = "width: 0; height: 0; border: 0";
            e.src = "";
            c.body.appendChild(e);
            return e
        };
        a.L = function(e) {
            var f, b;
            b = c.getElementsByTagName("head");
            try {
                b && 0 < b.length ? b[0].insertBefore(e, b[0].firstChild) : (f = c.getElementsByTagName("script"), f[0].insertBefore(e, f[0].firstChild))
            } catch (a) {
                g.e.log("Err insertToHead:" + a)
            }
        };
        a.kj = function(e) {
            e = e || OBR;
            return "function" !== typeof e.A ? (OBR.e.log("namespace.EventManager not function"), null) : new e.A
        };
        a.F = function(e) {
            return encodeURIComponent(e)
        };
        a.fa = function(e) {
            return null !== e
        };
        a.Vg = function(e) {
            var f, b=!1;
            if (a.Zb(e))
                return !1;
            f = e.Tb().recMode || "";
            e = e.Tb().dynamicWidgetLayout ||
            "";
            f = g.c.$h[f] || "";
            "2" === f && "1" === (g.c.ai[e] || "") && (b=!0);
            b || "1" !== f && "3" !== f || (b=!0);
            return b
        };
        a.Zb = function(e) {
            return void 0 === e || null === e
        };
        a.Zg = function(e) {
            return a.Zb(e) || "" === e
        };
        a.getElementsByClassName = function(e, f) {
            f || (f = document);
            return f.getElementsByClassName ? f.getElementsByClassName(e) : a.B("class", e, "*", !0, !0, f)
        };
        a.B = function(e, f, b, g, d, m) {
            var p, n, q;
            p = [];
            b = b || "*";
            g=!!g;
            d = a.Zg(d)?!0 : !1;
            b = m ? m.getElementsByTagName(b) : c.getElementsByTagName(b);
            m = 0;
            for (n = b.length; m < n; m += 1)
                q = "class" === e ? b[m].className :
                b[m].getAttribute(e), null !== q && (!1 === d && (q = q.toLowerCase(), f = f.toLowerCase()), (q = "" === e?!0 : g?-1 < q.indexOf(f) : q === f) && p.push(b[m]));
            return p
        };
        a.fe = function(e) {
            var f = window;
            f.detachEvent ? f.detachEvent("onscroll", e) : f.removeEventListener && f.removeEventListener("scroll", e, !1)
        };
        a.o = function(e, f, b) {
            e.attachEvent ? e.attachEvent("on" + f, function() {
                b.call(e)
            }) : e.addEventListener && e.addEventListener(f, b, !1)
        };
        a.Q = function(e, f) {
            try {
                f.appendChild(e)
            } catch (b) {
                g.e.log("fail insert into Dom:" + b)
            }
        };
        a.lb = function(e) {
            e =
            g.q(e);
            !a.Zb(e) && a.fa(e.parentNode) && e.parentNode.removeChild(e)
        };
        a.insertBefore = function(e, f) {
            return f.parentNode.insertBefore(e, f)
        };
        a.isArray = function(e) {
            return e instanceof Array?!0 : "[object Array]" === Object.prototype.toString.call(e)
        };
        a.ob = function(e, f) {
            var b = /htt(p|ps)?:\/\/127\.0\.0\.1(:\d\d\d\d)?/i;
            return /htt(p|ps)?:\/\/([\w\-]*|[\w\-]*\.[\w\-]*)\.outbrain\.com(:\d\d\d\d)?/i.test(e) || b.test(e) ? e : f
        };
        a.Oi = function(e) {
            e = e.replace(/^(\s*)/g, "");
            var f = c.createElement("div");
            f.innerHTML = e;
            return f.childNodes
        };
        a.Ca = function(e, f) {
            return e ? e.getAttribute(f) : null
        };
        a.ha = function(e, f, b) {
            e && e.setAttribute(f, b)
        };
        a.ia = function(e, f) {
            var b = RegExp("[ '\"|]" + f + "[ '\"|]");
            e&&!b.test("|" + e.className + "|") && (e.className += " " + f)
        };
        a.ca = function(b, f) {
            b = b.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var a, c;
            try {
                return a = RegExp("[\\?&]" + b + "=([^&#]*)", "i"), c = a.exec(decodeURIComponent(window.location.href.replace(/\+/g, " "))), null === c ? f : c[1]
            } catch (g) {
                return f
            }
        };
        a.rf = function(b) {
            "string" === typeof b && 0 < b.indexOf("#") && (b = b.substr(0,
            b.lastIndexOf("#")));
            return b
        };
        a.Sc = function(b) {
            var f = g.c.J + "/strip_default.png";
            b.src !== f && (b.alt = "", b.title = "", b.src = f)
        };
        a.Kf = function() {
            var b = null, f, a, g = null;
            if ("string" === typeof window.OB_MP_feed)
                b = window.OB_MP_feed;
            else if ((f = c.getElementsByTagName("head")) && 0 < f.length)
                for (a = f[0].getElementsByTagName("link"), f = 0; f < a.length; f += 1)
                    if (g = a[f], null !== g.type && ("application/rss+xml" === g.type || "application/atom+xml" === g.type) && null !== g.href && "" !== g.href) {
                        b = g.href;
                        break
                    }
            return b
        };
        a.P = function(b, f) {
            var a =
            null;
            b.currentStyle ? a = b.currentStyle[f] : window.getComputedStyle && (a = document.defaultView.getComputedStyle(b, null).getPropertyValue(f));
            return a
        };
        a.ji = function() {
            var b = a.Fa(), f, c;
            a.fa(b) && (f = g.b.createElement("span", "ob_a"), a.insertBefore(f, b), f.innerHTML = ".", c = a.P(f, "color"), a.lb("ob_a"), f = g.b.createElement("a", "ob_a"), f.setAttribute("href", "void(0)"), f.innerHTML = ".", a.insertBefore(f, b), b = a.P(f, "color"), a.lb("ob_a"), c = "rgb(0, 0, 0)" === c || "#000000" === c ? "#555" : c, a.ea(".ob-tcolor{color:" + c + "} .ob-lcolor{color:" +
            b + "} .ob-bgtcolor{background-color:" + c + "} .item-link-container:hover .ob-tcolor{border-color:" + c + "}"))
        };
        a.sd = function(b) {
            var f = a.rd("property", "og:url", "meta", "content");
            null === f && (f = a.rd("rel", "canonical", "link", "href"));
            null !== f || b || (f = window.location.href);
            null === f && (f = "");
            return f
        };
        a.rd = function(b, f, c, g) {
            var d = null;
            b = a.B(b, f, c, !1);
            null !== b && 0 < b.length && (d = b[0].getAttribute(g));
            return d
        };
        a.mf = function(b) {
            var f, c;
            f = g.j[b].l("tracking", !1);
            b = g.j[b].l("comScoreEnabled", !0);
            c = g.c.Tc;
            !1 === f && (!0 ===
            b&&!1 === c) && (a.Xb(), f = g.q(g.c.cb)) && (f.src = g.c.J + "/" + g.c.jb + "3rd/comScore/comScore.htm", g.c.Tc=!0)
        };
        a.ug = function() {
            var b = a.Rb(8);
            "string" === typeof window.name && ("" === window.name||-1 < window.name.indexOf("frame")) ? (window.name = b, b = window.name) : "string" === typeof window.name && "" !== window.name && (b = window.name);
            return b = g.b.F(b.substring(0, 9))
        };
        a.Rb = function(b) {
            var f, a;
            f = [];
            b = "number" === typeof b ? b : 8;
            for (a = 0; a < b; a += 1)
                f.push("0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(Math.floor(61 *
                Math.random())));
            return f.join("")
        };
        a.Va = function(b) {
            for (var f in g.ta)
                if (g.ta.hasOwnProperty(f) && g.ta[f].h === b)
                    return g.ta[f];
            return null
        };
        a.vd = function(b) {
            var f, a;
            a = g.j;
            for (f = 0; f < a.length; f += 1)
                if (a[f].Ea() === b)
                    return a[f];
            return null
        };
        a.Sg = function(b) {
            for (var f in b)
                if (b.hasOwnProperty(f))
                    return !1;
            return !0
        };
        a.ra = function(b, f) {
            return "function" !== typeof b ? null : void 0 === f ? b() : b(f)
        };
        a.Og = function() {
            return "Microsoft Internet Explorer" === navigator.appName
        };
        a.Bf = function(b, f) {
            return b * f
        };
        a.pd = function(b) {
            if (!b ||
            "" === b)
                return [];
            b = b.replace("", "").replace("http://", "").replace("https://", "").replace("www.", "").replace("www2.", "").split("/");
            b.pop();
            return 0 < b.length ? b : []
        };
        a.bg = function(b, f) {
            var c = a.pd(b), g = [], d = "";
            if (f >= c.length)
                d = c.join(".");
            else {
                g[0] = c[0];
                for (d = 1; d <= f; d += 1)
                    g[d] = c[d];
                d = g.join(".")
            }
            return d
        };
        a.kg = function() {
            return "http" + ("https:" === c.location.protocol ? "s" : "")
        };
        a.jg = function() {
            var b, f;
            b = c.getElementById("widgetVersionSync");
            null === b && (b = a.createElement("iframe", "widgetVersionSync"), f = a.createElement("div",
            null, "display:none; height:0px; width:0px; border:none;"), f.appendChild(b), a.Ob().appendChild(f));
            return b
        };
        a.Wi = function(b) {
            var f;
            f = window.OB_releaseVer;
            isNaN(f) || (isNaN(b) || f >= b) || (b = a.kg() + "://widgets.outbrain.com/external/sync/outbrainjs.html?needToBeVer=" + b.toString(), f = a.jg(), f.src = b)
        };
        a.Ze = function(b) {
            b = b.l("widgetVersionSync", 1);
            isNaN(b) || "" === b || (b = parseInt(b, 10) || 1, a.Wi(b))
        };
        d.Ub = function() {
            if (b)
                return b;
            var a;
            try {
                var f = window.localStorage;
                f.setItem("OBtst", "");
                f.removeItem("OBtst");
                a = f
            } catch (c) {
                a =
                {
                    nb: {},
                    setItem: function(b, f) {
                        this.nb[b] = f
                    },
                    removeItem: function(b) {
                        this.nb[b] = void 0
                    },
                    getItem: function(b) {
                        return "undefined" !== typeof this.nb[b] ? this.nb[b] : null
                    }
                }
            }
            return b = a
        };
        a.Ai = function(b) {
            d.Ub().setItem("OB-USER-TOKEN", b)
        };
        a.rg = function() {
            var b = d.Ub().getItem("OB-USER-TOKEN");
            return b ? b : null
        };
        a.Cf = function() {
            d.Ub().removeItem("OB-USER-TOKEN")
        };
        a.i(OBR);
        return a
    }();
    OBR.Y = function(d, a, c, g, b, e, f, k, h) {
        var l, m;
        l = this;
        m = 0;
        h = "function" === typeof h ? h : OBR.b.Bf;
        l.start = function() {
            var p;
            m += 1;
            OBR.b.ra(d, m) ? OBR.b.ra(a, m) : (p = OBR.b.ra(k, m)) ? OBR.b.ra(g, m) : (p = m === e && 1E3 !== e) ? OBR.b.ra(g, m) : (OBR.b.ra(c, m), p = f ? h(m, b) : b, setTimeout(function() {
                l.start()
            }, p))
        };
        l.start()
    };
    OBR.Zc = OBR.Zc || {
        Kg: function() {
            return "complete" === document.readyState
        }
    };
    OBR.ed = function() {
        var d = {}, a = [];
        d.add = function(c) {
            a.push(c)
        };
        d.remove = function(c) {
            a.splice(c, 1)
        };
        d.top = function() {
            return 0 < a.length ? a.shift() : null
        };
        d.Ng = function() {
            return 0 >= a.length
        };
        d.jj = function() {
            return a
        };
        d.qf = function() {
            a = []
        };
        return d
    };
    OBR.Aa = function() {
        function d(g, b) {
            a.La = "resolve" === g ? function(f) {
                f && f(b)
            } : function(f, a) {
                a && a(b)
            };
            a.wa = a.Qh = function() {
                throw Error("Promise already completed.");
            };
            for (var e, f = 0; e = c[f++];)
                e[g] && e[g](b);
            delete c
        }
        var a = {}, c = [];
        a.La = function(a, b) {
            c.push({
                resolve: a,
                reject: b
            })
        };
        a.wa = function(a) {
            d("resolve", a)
        };
        a.Qh = function(a) {
            d("reject", a)
        };
        return a
    };
    OBR.c = OBR.c || function() {
        var d = {}, a = {}, c = OBR, g;
        a.Ne = "opera";
        a.Ec = "msie";
        a.Ke = "firefox";
        a.Je = "chrome";
        a.Pe = "safari";
        a.Me = "mozilla";
        a.ej = "boolean";
        a.xj = "string";
        a.rj = "object";
        a.zj = "undefined";
        a.cb = "ob_iframe";
        a.Bd=!0;
        a.Wd = 0;
        a.qb = "outbrain_widget_";
        a.ah = "text/javascript";
        a.Af = "text/css";
        a.hj = document;
        a.Gd = void 0 !== document.createElement("script").async;
        a.Ie = c.b.ug();
        a.Nh = document.referrer;
        a.Mh = c.b.F(document.referrer);
        a.eh = document.location.href;
        a.pj = c.b.F(a.eh);
        a.Qa=!1;
        a.wc = "";
        a.Fb = navigator.userAgent.toLowerCase();
        a.Ah = navigator.platform.toLowerCase();
        g = a.Fb;
        a.Kc = /opera/.test(g) ? a.Ne : /msie/.test(g) ? a.Ec : /firefox/.test(g) ? a.Ke : /chrome/.test(g) ? a.Je : /safari/.test(g) ? a.Pe : a.Me;
        a.eb=!!/(iphone|ipod|symbian|android|windows ce|blackberry|palm|ipad)/.test(g);
        a.Qg = 0;
        a.Ed = a.Fb.match(/msie 8/) || a.Fb.match(/msie 7/);
        a.Pg = function() {
            return void 0 === window.XMLHttpRequest && void 0 !== ActiveXObject
        };
        a.Gh = window.OB_platformType || null;
        a.gb = "number" === typeof a.Gh;
        a.oe = null;
        a.dd = null;
        a.Ni = function() {
            a.gb && (a.oe && a.dd) && (a.oe(),
            a.dd())
        };
        a.xa = "string" === typeof window.OB_releaseVer ? window.OB_releaseVer : "0";
        a.mh=!0 === window.OB_disable_odbl;
        g = ("https:" === document.location.protocol ? "https" : "http") + "://";
        a.hf = "/blogutils/ExcludeRec.action?bocr=";
        a.sj = "html";
        a.Ag = c.b.ob(c.b.ca("wiodb", g + "hpr.outbrain.com"), g + "hpr.outbrain.com");
        a.hc = c.b.ob(c.b.ca("wiodb", g + "odb.outbrain.com"), g + "odb.outbrain.com");
        a.jf = g + "storage.outbrain.com/";
        a.J = c.b.ob(c.b.ca("wihost", g + "widgets.outbrain.com"), g + "widgets.outbrain.com");
        a.Bh = c.b.ob(c.b.ca("wiout",
        g + "outbrain.com"), g + "outbrain.com");
        a.cd = c.b.ca("wixp", null);
        a.kc = g + "log.outbrain.com/";
        a.jb = "nanoWidget/";
        a.Ch = a.gb ? "NANOWDGTLT13" : "NANOWDGT01";
        a.jh = a.J + "/" + a.jb + a.xa + (a.gb ? "/moduleLT" : "/module");
        a.ih = a.J + "/" + a.jb + "3rd";
        a.Ig = "object" === typeof window.console;
        a.ze = c.b.rf(c.b.Kf());
        a.ye = null === a.ze ? "" : c.b.F(a.ze);
        a.Tc=!1;
        a.nh = "true" === c.b.ca("obdraft", !1) ? "&obDraft=true" : "";
        a.Re=!1 !== c.b.ca("obAbtest", !1) ? "&obAbtest=" + c.b.ca("obAbtest", "") : "";
        a.hb = 0;
        a.Ha = null;
        a.Zh = "data-obscrollable";
        a.$h = {
            touch_strip: "1",
            odb_dynamic: "2",
            "odb_dynamic_touch-strip": "3"
        };
        a.ai = {
            "touch-strip": "1"
        };
        a.Si=!!window.OB_testMode;
        a.v = function() {
            d.Z = c;
            return d
        };
        return a
    }();
    OBR.d = OBR.d || function() {
        var d = {}, a, c = {};
        d.i = function(c, b) {
            a = c;
            d.Kh(b)
        };
        d.f = {
            ub: "POPUPDESCRIPTION",
            Oa: "WIDGETSTATISTICS",
            Cb: "STATISTICS",
            Na: "WHATIS",
            sb: "FLYTHROUGH",
            Db: "VIDEOPLUGIN",
            oa: "POSCUL",
            zb: "SCROLL",
            Ab: "SCROLLEXTERNAL",
            wb: "RECINIFRAME",
            yb: "REGISTER",
            xb: "REFRESHWIDGET",
            Bb: "SKYLANDER",
            Ma: "LOADMORE",
            $i: "DYNAMICTEXTTRUNCATION"
        };
        d.Oe = function(a, b) {
            var e = {
                gj: a,
                url: b,
                version: - 1,
                state: 0,
                Gb: null,
                Uc: this,
                Jc: null,
                pf: function() {
                    if (2 === e.state)
                        e.Ld();
                    else if (0 === e.state) {
                        var b = OBR.b.I(e.url, !0);
                        e.state =
                        1;
                        OBR.b.L(b)
                    }
                },
                Ld: function() {
                    e.state = 2;
                    "function" === typeof e.Gb && e.Gb.call(e.Uc, e.Jc)
                }
            };
            return e
        };
        d.Kh = function(c) {
            function b(b) {
                return a.c.jh + "/" + b
            }
            function e(b, a) {
                c[b] || (c[b] = new d.Oe(b, a))
            }
            e(d.f.ub, b("popupDescription.js"));
            e(d.f.Oa, b("widgetStatistics.js"));
            e(d.f.Cb, b("statistics.js"));
            e(d.f.Na, b("whatis.js"));
            e(d.f.sb, b("flyThrough.js"));
            e(d.f.Db, b("videoPlugin.js"));
            e(d.f.oa, b("positionCalculation.js"));
            e(d.f.wb, b("recInIframe.js"));
            e(d.f.yb, b("registration.js"));
            e(d.f.xb, b("refreshWidget.js"));
            e(d.f.Bb, b("skyLander.js"));
            e(d.f.Ma, b("loadMore.js"));
            e(d.f.zb, b("scroll.js"));
            e(d.f.Ab, a.c.ih + "/scroll/scrollExternal.js")
        };
        d.gg = function(a) {
            return c[a]
        };
        d.r = function(a, b, e, f) {
            if (a = d.gg(a))
                a.Gb = b || OBR.b.pa(), a.Uc = e, a.Jc = f, a.pf()
        };
        d.Wa = function(a) {
            return c[a].state
        };
        d.C = function(g) {
            "-1" !== a.c.xa && c[g].Ld()
        };
        d.i(OBR, c);
        return d
    }();
    OBR.i = OBR.i || void 0;
    OBR.q = function(d) {
        return document.getElementById(d)
    };
    OBR.R = OBR.R || function() {
        var d = {}, a = {}, c, g;
        a.i = function(b) {
            c = b = b || OBR;
            d.Ia = new c.A;
            g=!1
        };
        a.v = function() {
            return d
        };
        d.Hg = function() {
            var b, a;
            b = c.b.createElement("iframe", "ob_ping");
            b.setAttribute("id", "ob_ping");
            b.style.border = "0px";
            b.style.width = "0px";
            b.style.height = "0px";
            b.setAttribute("src", c.c.hc + "/utils/ping.html?r=" + c.b.Yd());
            c.b.o(b, "load", function() {
                c.e.log("ping returned");
                c.c.Wd = 2;
                d.Ia.m("success");
                c.R.he()
            });
            a = c.b.Fa();
            null !== a && (c.e.log("ping inserted"), c.b.Q(b, a))
        };
        d.Fh = function() {
            c.e.log("ping Wait");
            new c.Y(function() {
                return 2 === c.c.Wd
            }, function() {}, c.b.pa(), function() {
                d.Ia.m("fail");
                c.R.he()
            }, 50, 200, !1)
        };
        a.he = function() {
            c.b.lb("ob_ping")
        };
        a.wh = function(b) {
            d.Ia.add("success", b)
        };
        a.vh = function(b) {
            d.Ia.add("fail", b)
        };
        a.Tg = function() {
            return g
        };
        a.ve = function() {
            g=!0
        };
        a.Eh = function() {
            d.Hg();
            d.Fh()
        };
        a.K = function() {
            d.Ia.$()
        };
        a.i(OBR);
        return a
    }();
    OBR.sa = OBR.sa || function() {
        var d, a = {}, c = {}, g;
        a.i = function(b) {
            d = b = b || OBR;
            g = new d.A
        };
        a.v = function() {
            return c
        };
        c.Kb = function(b) {
            var a, f;
            a = 0;
            for (f = b.length; a < f; a += 1)
                d.b.ha(b[a], "data-ob-mark", "true"), d.b.ha(b[a], "data-browser", d.c.Kc), d.b.ha(b[a], "data-os", d.c.Ah), g.m("find", [b[a]])
        };
        c.md = function() {
            return d.b.B("class", "OUTBRAIN", "div", !0)
        };
        c.ag = function(b) {
            var a, f = [], c = [];
            for (a = 0; a < b.length; a++) {
                var g = b[a];
                if ("string" === typeof g.containerId)
                    if (d.q(g.containerId)) {
                        var l = d.q(g.containerId);
                        OBR.ya.vf(g,
                        l);
                        c.push(l)
                    } else 
                        f.push(b[a])
            }
            window.OB_elements = f;
            return c
        };
        c.ig = function() {
            var b = [];
            "object" === typeof window.OB_elements && 0 < window.OB_elements.length && (b = window.OB_elements);
            return b
        };
        c.hg = function() {
            var b = [], a = c.md(), f, g;
            f = 0;
            for (g = a.length; f < g; f += 1) {
                var h = d.b.Ca(a[f], "data-ob-mark");
                null !== h && "true" === h ||!a[f] || b.push(a[f])
            }
            f = c.ig();
            if (0 < f.length)
                for (d.e.log("Array of elements found!"), a = c.ag(f), f = 0, g = a.length; f < g; f += 1)
                    b.push(a[f]);
            return b
        };
        a.cj = function(b) {
            c.gd(b)
        };
        c.gd = function(b) {
            if (void 0 ===
            b) {
                var a=!1;
                d.e.log("searching for containers");
                new d.Y(function() {
                    return a
                }, d.b.pa(), function() {
                    a = d.Zc.Kg();
                    var b = c.hg();
                    a && d.e.log("checking:(" + a + ")");
                    0 < b.length && c.Kb(b)
                }, g.m("stopSearch"), 50, 1E3, !1)
            } else 
                0 < (b.length || 0) && c.Kb(b)
        };
        a.nj = function() {
            return 0 < c.md().length
        };
        a.ph = function(b) {
            g.add("find", b)
        };
        a.uj = function(b) {
            g.add("stopSearch", b)
        };
        a.fd = function() {
            c.gd()
        };
        a.Qf = function(b) {
            var a = [], f, g;
            d.w.Dg();
            f = 0;
            for (g = d.j.length; f < g; f += 1) {
                var h = d.b.s(f);
                null !== h && ("string" === typeof b && d.b.ha(h, "data-src",
                b), d.b.ha(h, "data-ob-mark", "false"), a.push(h))
            }
            0 < a.length && (d.j = [], c.Kb(a))
        };
        a.K = function() {
            g.$();
            d.j = []
        };
        a.i(OBR);
        return a
    }();
    OBR.w = OBR.w || function() {
        var d = {}, a = {}, c;
        a.i = function(a) {
            c = a = a || OBR;
            d.jc = new c.ed;
            d.gc = new c.A;
            d.fb=!1
        };
        d.Xf = function(a) {
            var b, e, f = c.b.Uh;
            b = a.tg();
            var k = c.b.rg(), h = c.n.ka(), l=!0 === c.c.Si ||!0 === a.sg();
            b = b && "hp" === b ? c.c.Ag + "/utils/get?url=$LNK$SRC&settings=$SET&recs=$REC&widgetJSId=$WID&key=$KEY&idx=$IDX&version=$VER&ref=$REF&apv=$APV&sig=$SIG&format=$FRT&rand=$RND$LSD$DRFT$ABTEST$XP$TOKEN$WINDOWSIZE$TST" : c.c.hc + "/utils/get?url=$LNK$SRC&settings=$SET&recs=$REC&widgetJSId=$WID&key=$KEY&idx=$IDX&version=$VER&ref=$REF&apv=$APV&sig=$SIG&format=$FRT&rand=$RND$LSD$DRFT$ABTEST$XP$TOKEN$WINDOWSIZE$TST";
            e = a.Ea();
            b = f(b + ("" !== e && null !== e ? "&fbk=" + e : ""), "$LNK", c.b.F(a.ba()));
            b = f(b, "$SRC", d.pg(a));
            b = f(b, "$IDX", a.eg());
            b = f(b, "$SET", !0);
            b = f(b, "$REC", !0);
            b = f(b, "$KEY", c.c.Ch);
            b = f(b, "$WID", a.G());
            b = f(b, "$VER", c.c.xa);
            b = f(b, "$REF", c.c.Mh);
            b = f(b, "$SIG", c.c.Ie);
            b = f(b, "$APV", c.c.Qa);
            b = f(b, "$FRT", a.dg());
            b = f(b, "$RND", c.b.Yd());
            b = f(b, "$DRFT", c.c.nh);
            b = f(b, "$ABTEST", c.c.Re);
            b = f(b, "$XP", c.c.cd ? "&xp=" + c.b.F(c.c.cd) : "");
            b = f(b, "$LSD", k ? "&lsd=" + c.b.F(k) : "");
            b = f(b, "$TOKEN", "" !== c.c.wc ? "&t=" + c.c.wc : "");
            b = f(b, "$WINDOWSIZE",
            "&winW=" + h.width + "&winH=" + h.height);
            return b = f(b, "$TST", l ? "&testMode=true" : "")
        };
        d.pg = function(a) {
            var b = "&srcUrl=";
            a = a.qg();
            return b = null !== a && "string" === typeof a && 0 < a.length ? b + c.b.F(a) : 0 < c.c.ye.length ? b + c.c.ye : ""
        };
        d.Wb = function(a, b) {
            b.H.vi();
            var e = b.h, f = b.G(), k = c.b.I(a, !0);
            "" !== b.Ea() && c.b.o(k, "error", function() {
                OBR.extern.errorInjectionHandler(e)
            });
            c.b.L(k);
            d.gc.m("onOdbFire_" + e + "_" + f, [b], !0);
            c.e.log("fire this src " + a)
        };
        d.wi = function(a) {
            c.c.Gd && setTimeout(function() {
                d.ge(a.h, a.G())
            }, 1E4)
        };
        d.ge =
        function(a, b) {
            c.b.lb("ob_odbCall_" + a + b)
        };
        a.m = function() {
            if (!0 !== d.fb&&!0 === c.R.Tg()) {
                d.fb=!0;
                var a = d.jc.top(), b;
                a ? (c.e.log("fire odb for " + a.ba()), b = d.Xf(a), d.Wb(b, a), d.wi(a)) : d.fb=!1
            }
        };
        a.th = function(a, b) {
            d.gc.add("onOdbFire_" + a.h + "_" + a.G(), b)
        };
        a.yc = function(a, b) {
            d.fb=!1;
            d.ge(a, b)
        };
        a.ii = function(a) {
            !0 === a && (OBR.c.Qa = a)
        };
        a.uc = function(a) {
            c.c.wc = a
        };
        a.Dg = function() {
            c.c.Qa=!1
        };
        a.nc = function(g) {
            d.jc.add(g);
            c.e.log("register odb for " + g.ba());
            a.m()
        };
        a.bf = function(c) {
            a.yc(c.h, c.G());
            a.m()
        };
        a.K = function() {
            d.jc.qf();
            d.gc.$()
        };
        a.v = function() {
            d.Z = c;
            return d
        };
        a.i(OBR);
        return a
    }();
    OBR.k = OBR.k || function() {
        function d() {
            c.e.log("ping fail")
        }
        function a() {
            c.e.log("ping success");
            c.R.ve();
            c.display.kb(b.Eb);
            c.w.m()
        }
        var c, g = {}, b = {}, e;
        b.dc = "manualDataReady";
        b.cc = "manualClickReady";
        g.i = function(a) {
            c = a = a || OBR;
            e = new c.A;
            g.de(b.dh)
        };
        g.v = function() {
            return b
        };
        g.de = function(b) {
            e.add("onHtmlReturn", b)
        };
        g.Ph = function(b) {
            e.add("noRecs", b)
        };
        b.Eb = function(a) {
            c.e.log("rec " + a + " was rendered");
            var e = c.j[a];
            e.X(!0);
            e.H.xi();
            0 === a && c.b.ji();
            b.df(e);
            c.b.Ze(e);
            c.display.Fg(e)
        };
        b.lg = function(b) {
            return Math.floor(Math.random() *
            b) + 1
        };
        b.df = function(a) {
            var e = a.l("widgetStatistics", !1), g = c.c.eb, d = a.l("tracking", !1);
            a.l("globalWidgetStatistics", !1)&&!d ? b.fi() : !e || (g || d) || (e = a.l("wsSampling", 0), 0 !== e && b.lg(e) !== e || b.hi(a))
        };
        b.hi = function(b) {
            2 === c.d.Wa(c.d.f.Oa) && 2 === c.d.Wa(c.d.f.oa) ? c.D.Mc(b.h) : c.d.r(c.d.f.oa, function() {
                c.d.r(c.d.f.Oa, function() {
                    c.D.Mc(b.h)
                }, this)
            }, this)
        };
        b.fi = function() {
            2 === c.d.Wa(c.d.f.Cb) && 2 === c.d.Wa(c.d.f.oa) && c.Hc.start()
        };
        b.Vi = function(a) {
            c.e.log("widget was found");
            a = c.rb.We(a);
            0 === a.h && b.cf();
            !0 === a.Lg() ?
            c.e.log("Dynamic loader - stop odb!") : c.w.nc(a)
        };
        g.Rd = function(a, d) {
            var h = "NA", l = a && a.response ? a.response: null, m;
            if (m = c.b.Va(d))
                if (e.m("onmManualOdbReturned_" + d, [l, d]), m.U())
                    return;
            l && (l.request && l.request.widgetJsId) && (h = l.request.widgetJsId);
            c.w.yc(d, h);
            m && (l && l.documents) && (m.X(!0), g.kd(b.dc, d, h, a));
            c.w.m()
        };
        g.uh = function(b, a) {
            e.add("onmManualOdbReturned_" + b, a)
        };
        g.kd = function(b, a, c, g) {
            b = b + a + c;
            e.m(b, [g.response.documents, a]);
            e.pc(b)
        };
        g.Nd = function(a, d) {
            if (null !== a) {
                var h = 0, h = a.permalink, l = a.widgetId,
                m = c.ya.zf(a);
                h && "string" === typeof h && (l && "string" === typeof l) && (c.e.log("manual Odb call"), h = g.gh(h), g.ib(b.dc + h + l, d), m.idx = h, l = c.rb.Vc(m), l.qi(), c.ta[h] = l, e.m("onmManualOdbCall", [l, b.dc]), c.R.ve(), c.w.nc(l))
            }
        };
        g.ib = function(b, a) {
            e.add(b, a)
        };
        g.yh = function(b) {
            e.add("onmManualOdbCall", b)
        };
        g.gh = function(b) {
            var a = 0, e = c.c;
            null === e.Ha && (e.Ha = 0 < c.j.length ? c.j[0].ba() : null);
            e.Ha === b ? (0 === e.hb && (e.hb = 100), a = e.hb + 1) : e.Ha = b;
            return e.hb = a
        };
        g.bc = function(a, g) {
            var d = OBR.q(c.c.cb);
            c.b.fa(d) && c.b.fa(d.parentNode) &&
            d.parentNode.removeChild(d);
            c.b.Xb();
            "function" === typeof g && e.add(b.cc, g);
            if (null !== a && (d = a.link) && "string" === typeof d) {
                c.e.log("manual Click");
                if (null !== d.match(/http:\/\/.+outbrain.com/i))
                    c.b.lf(d + "&noRedirect=true");
                else 
                    throw "Wrong redirect link: " + d;
                e.m(b.cc);
                e.pc(b.cc)
            }
        };
        b.Xg = function(a) {
            return b.Fd(a) || a.l("stopWidget", !1)
        };
        b.Fd = function(b) {
            return b.l("stopRater", !1)
        };
        b.cf = function() {
            c.R.wh(a);
            c.R.vh(d);
            c.c.mh || c.c.Gd ? (c.e.log("async - no ping"), a()) : c.R.Eh()
        };
        b.uc = function(b) {
            b.response &&
            (b.response.request && b.response.request.t) && c.w.uc(b.response.request.t)
        };
        b.si = function(b) {
            b.response && (b.response.request && b.response.request.readerPlatform) && (c.c.eb = "mobile" === b.response.request.readerPlatform)
        };
        g.ic = function(a, d) {
            var h, l;
            OBR.e.log("HTML returned");
            d = b.Qd(d);
            h = c.j[d];
            b.uc(a);
            b.si(a);
            h ? (0 >= h.ng(a) && e.m("noRecs", [h]), h.H.ui(), h.U() ? g.ld(h) : (h.setData(a), l = h.G(), b.Xg(h) || b.$g(h.Ua()) || (c.w.ii(a.response.settings.apv), g.Ug(h) ? g.va(d) : g.wg(h), l && e.m("odbRtn_" + l, [h]), e.m("onHtmlReturn",
            [h])), g.ld(h), b.of(h))) : c.e.log("odbHtmlReturned : Widget not found")
        };
        b.Qd = function(b) {
            return 1E3 > b ? b : b%1E3
        };
        b.dh = function(b) {
            !0 === b.l("isRegistrationEnabled", !1) && c.d.r(c.d.f.yb, function() {
                c.ee.Sh(b)
            }, this)
        };
        b.$g = function(b) {
            var a=!1;
            null !== b.match(/(<\/?met|<\/?scr)/i) && (a=!0, c.e.log("SECURITY"));
            return a
        };
        g.ld = function(a) {
            b.Fd(a) || (c.w.yc(a.h, a.G()), c.w.m())
        };
        b.of = function(b) {
            !c.c.eb && (b.Yg() && b.Wg()) && c.d.r(c.d.f.Bb, function(b) {
                c.xe.i(b)
            }, this, b)
        };
        g.Ug = function(b) {
            var a=!0;
            if (b.Jd() || b.Cd())
                a =
                !1;
            return a
        };
        g.wg = function(b) {
            var a = b.h;
            b.Jd() ? c.d.r(c.d.f.Db, function() {
                c.pb.xf(a)
            }, this) : b.Cd() && c.display.Eg(b)
        };
        g.va = function(b) {
            c.display.va(c.j[b]);
            c.e.log("HTML - Render");
            g.Hh(b)
        };
        g.Hh = function(b) {
            c.b.mf(b);
            c.ad.vg(b)
        };
        g.Zd = function(b, a) {
            c.b.ia(a, "ob_clicked");
            var e = c.b.Ca(a, "data-redirect");
            null !== e && (a.href = e);
            return !0
        };
        g.ua = function(b) {
            c.D && c.D.Vd();
            c.sa.Qf(b);
            return !0
        };
        g.K = function() {
            e.$()
        };
        g.le = function() {
            c.sa.ph(b.Vi);
            c.c.gb ? c.c.Ni() : c.sa.fd()
        };
        g.gf = function(b, a, e) {
            if (window.confirm("Removing this recommendation will remove it permanently for this section and will refresh the recommendations.\n Are you sure you want to remove this recommendation?")) {
                var d =
                "https://my.outbrain.com/manage/", d=!1 === e ? d + ("add-zapped-document?publisherId=" + a + "&docUrl=" + c.b.F(b)) : d + ("add-rule?publisherId=" + a + "&ruleValue=" + c.b.F(b) + "&ruleType=" + e);
                b = c.b.I(d, !0);
                c.b.L(b)
            }
        };
        g.ff = function(b) {
            window.confirm("Removing this recommendation will remove it permanently for this section and will refresh the recommendations.\n Are you sure you want to remove this recommendation?") && (b = c.b.I(c.c.hc + c.c.hf + b + "&index=1&templateIndex=1&sig=" + c.c.Ie, !0), c.b.L(b))
        };
        g.Xh = function(b) {
            b && (b.ob_exclude_resp &&
            b.ob_exclude_resp.code && 1 !== b.ob_exclude_resp.code) && g.ua()
        };
        g.ce = function(b, a) {
            if (a && "function" === typeof a) {
                var d = "odbRtn_" + b;
                e.add(d, a);
                var g = c.ya.wd(b);
                g && g.Jg() && e.m(d, [g])
            }
        };
        g.Yf = function(b) {
            return (b = c.ya.wd(b)) ? b.p("tcr", - 1) : null
        };
        g.qc = function() {
            c.sa.fd()
        };
        g.$ = function() {
            c.D && c.D.Vd();
            c.display.K();
            c.w.K();
            c.R.K();
            this.K();
            c.sa.K();
            c.Ba && c.Ba.K();
            c.c.Qa=!1
        };
        g.Rh = function() {
            this.$();
            this.le()
        };
        g.ae = function(a, e) {
            a = b.Qd(a);
            var d = c.j[a];
            d.Oh(e);
            OBR.ua && OBR.ua.tc(d);
            c.w.nc(d)
        };
        g.i(OBR);
        return g
    }();
    OBR.display = OBR.display || function() {
        var d, a = {}, c;
        a.i = function(a) {
            d = a = a || OBR;
            c = new d.A
        };
        a.xd = function(c, b) {
            var e = d.b.Oi(c), f = d.b.s(b.h);
            f && (e && 0 < e.length) && (0 < b.Sb() ? a.Mf(f, e[0], b.h) : a.te(e[0], f, b.h), d.e.log("element inserted"))
        };
        a.Mf = function(c, b, e) {
            function f() {
                a.yg(c).La(function(f) {
                    a.ti(f, b, e).La(function(b) {
                        a.Lf(b)
                    })
                })
            }
            var k = new d.Aa;
            k.La(function() {
                a.Nf(c).La(f)
            });
            k.wa()
        };
        a.Nf = function(a) {
            var b = new d.Aa, e = 1, f = setInterval(function() {
                0.1 >= e ? (clearInterval(f), b.wa(a)) : (a.style.opacity = e, d.c.Ed ?
                e = 0 : (a.style.filter = "alpha(opacity=" + 100 * e + ")", e -= 0.1 * e))
            }, 10);
            return b
        };
        a.yg = function(a) {
            var b = new d.Aa;
            a.style.opacity = 0;
            setTimeout(function() {
                b.wa(a)
            }, 0);
            return b
        };
        a.ti = function(c, b, e) {
            var f = new d.Aa;
            a.te(b, c, e);
            setTimeout(function() {
                f.wa(c)
            }, 0);
            return f
        };
        a.te = function(a, b, e) {
            b.innerHTML = "";
            d.b.Q(a, b);
            c.m("afterRender", [e])
        };
        a.Lf = function(a) {
            var b = new d.Aa, e = 0.1, f = setInterval(function() {
                1 <= e ? (clearInterval(f), a.removeAttribute("style"), b.wa(a)) : (a.style.opacity = e, d.c.Ed ? e = 1 : (a.style.filter = "alpha(opacity=" +
                100 * e + ")", e += 1.6 * e))
            }, 50)
        };
        a.tj = function(a) {
            c.add("beforeRender", a)
        };
        a.kb = function(a) {
            c.add("afterRender", a)
        };
        a.Fg = function(a) {
            d.b.Vg(a) && OBR.d.r(OBR.d.f.zb, function(b) {
                OBR.scroll.hh(b)
            }, this, a)
        };
        a.Eg = function(c) {
            OBR.d.r(OBR.d.f.oa, d.b.pa(), this);
            OBR.d.r(OBR.d.f.sb, function() {
                a.Uf(c)
            }, this)
        };
        a.Uf = function(d) {
            a.xd(OBR.Sa.Bg(d), d);
            OBR.Sa.i();
            c.m("afterRender", [d.h])
        };
        a.va = function(c) {
            d.e.log("HTML - render widget with " + c.Ua());
            a.xd(c.Ua(), c);
            c.X(!0)
        };
        a.K = function() {
            c.$()
        };
        a.i(OBR);
        return a
    }();
    OBR.Fe = OBR.Fe || function(d) {
        var a = {}, c = OBR, g = {}, b = {}, e = "", f = null, k = null, h = null, l=!1, m = 0, p = "html", n=!1, q = 4E3, s = "nano", r=!1, u=!1, v = {}, t = 0, w=!1, x = new OBR.A;
        a.bj = 0;
        a.aj = 1E3;
        a.Zi = 2;
        a.h = d;
        a.Ra = "";
        a.oi = function(b, a) {
            x.add("onInjectError_" + b.h, a)
        };
        a.Sf = function(b) {
            x.m("onInjectError_" + b, [b], !0)
        };
        a.H = {
            Td: - 1,
            Sd: - 1,
            ke: - 1,
            Ya: function() {
                var b = [];
                b.push(a.H.Td);
                b.push(a.H.Sd);
                b.push(a.H.ke);
                return b
            },
            vi: function() {
                a.H.Td = (new Date).getTime()
            },
            ui: function() {
                a.H.Sd = (new Date).getTime()
            },
            xi: function() {
                a.H.ke = (new Date).getTime()
            }
        };
        a.Pf = {
            slow: 7E3,
            normal: 5E3,
            fast: 3E3,
            qa: 5
        };
        a.setData = function(f) {
            f && f.response && (f = f.response, f.request && (b = f.request), f.settings && (g = f.settings), f.html && (e = f.html), n=!0);
            a.Ye()
        };
        a.Tb = function() {
            return g
        };
        a.l = function(b, a) {
            var e;
            e = g[b];
            return "undefined" !== typeof e && null !== e ? e : a
        };
        a.Ye = function() {
            a.Ci()
        };
        a.ng = function(b) {
            var a = {};
            return b && (b.response && b.response.request) && (a = b.response.request, b = a.tcr) ? b : - 1
        };
        a.p = function(a, e) {
            var f = b[a];
            return f ? f : e
        };
        a.Ua = function() {
            return e
        };
        a.Ei = function(b) {
            a.ue(b.permalink);
            a.Hi(b.widgetId);
            a.mi(b.dynLoad);
            a.Ii(b.widgetType);
            a.Fi(b.fbk);
            a.pi(b.timeout);
            a.zi(b.srcUrl);
            a.Bi(b.testMode);
            "boolean" === typeof b.isManualWidget && a.ri(u)
        };
        a.G = function() {
            return f
        };
        a.Hi = function(b) {
            f = "string" === typeof b ? b : "NA"
        };
        a.qi = function() {
            p = "japi"
        };
        a.dg = function() {
            return p
        };
        a.vj = function(b) {
            m = b
        };
        a.ij = function() {
            return m
        };
        a.ba = function() {
            return k
        };
        a.ue = function(b) {
            k = b
        };
        a.Bi = function(b) {
            w = "true" === b ||!0 === b
        };
        a.sg = function() {
            return w
        };
        a.zi = function(b) {
            h = b
        };
        a.qg = function() {
            return h
        };
        a.Lg = function() {
            return l
        };
        a.mi = function(b) {
            l = "true" === b ||!0 === b
        };
        a.Cd = function() {
            return "flyThrough" === a.l("displayMode", "")
        };
        a.Jd = function() {
            return "video" === a.l("displayMode", "")
        };
        a.oj = function() {
            return "recInIframe" === a.l("displayMode", "")
        };
        a.Jg = function() {
            return n
        };
        a.Wg = function() {
            return !0 === a.l("isSkylandersInjectionEnabled", !1)
        };
        a.Yg = function() {
            return !0 === a.l("isUIExperimentsEnabled", !1)
        };
        a.tg = function() {
            return s
        };
        a.Ii = function(b) {
            "string" === typeof b && (s = b.toLowerCase())
        };
        a.Fi = function(b) {
            "string" === typeof b && "" !== b && (a.Ra =
            b)
        };
        a.Mg = function() {
            return !isNaN(parseInt(a.Ra, 10))
        };
        a.Ea = function() {
            var b;
            b = parseInt(a.Ra, 10);
            return a.Mg() && "number" === typeof b && 0 <= b && 10 > b ? OBR.b.bg(k, b) : a.Ra
        };
        a.U = function() {
            return r
        };
        a.X = function(b) {
            "boolean" === typeof b && (r = b)
        };
        a.mj = function() {
            return "hp" === s
        };
        a.u = function() {
            return v
        };
        a.ni = function() {
            var b = {
                timeout: 0,
                Ja: null,
                Ib: 0,
                Pc: !1,
                oh: !1,
                ib: "",
                bb: !1,
                vc: !1,
                lc: !1,
                Pa: !1,
                He: "NA",
                reason: 0,
                Yb: !0
            };
            "object" === typeof b && (v = b)
        };
        a.Rg = function() {
            return u
        };
        a.qd = function() {
            return q
        };
        a.pi = function(b) {
            q = a.Pf[b] ||
            6E3
        };
        a.ri = function(b) {
            "boolean" === typeof b && (u = b)
        };
        a.Ci = function() {
            var b = a.p("lsd", null), e=!0 === a.p("oo", !1), f = "string" === typeof b && 0 < b.length, d=!0 === a.l("isUseLocalStorageForUUID", !0);
            d&&!e && f ? c.b.Ai(b) : d || c.b.Cf()
        };
        a.eg = function() {
            return 0 === t ? a.h : 1E3 * t + a.h
        };
        a.Oh = function(b) {
            "string" === typeof b ? (OBR.b.ha(OBR.b.s(a.h), "data-src", b), a.ue(b), t = 0) : t += 1;
            a.X(!1)
        };
        a.Sb = function() {
            return t
        };
        return a
    };
    OBR.rb = OBR.rb || function() {
        var d = OBR, a = {}, c = new d.A;
        a.Vc = function(a) {
            a.idx = a.idx || 0;
            var b = new d.Fe(a.idx);
            b.Ei(a);
            return b
        };
        a.We = function(g) {
            var b, e, f;
            b = d.b.Ca(g, "data-src");
            e = d.ya.yf(g);
            d.b.ha(g, "data-dynLoad", "");
            if ("string" !== typeof b)
                b = d.b.sd(!1);
            else if (0 === b.length || 0 === b.indexOf("DROP") || 0 === b.indexOf("INSERT"))
                b = d.b.sd(!0);
            b = 0 === d.j.length && d.c.Ha === b ? 1 : d.j.length;
            e.idx = b;
            e = a.Vc(e);
            d.j[b] = e;
            0 === b && (f = d.b.createElement("div", "ob_holder"), f.style.display = "none", d.b.insertBefore(f, g), d.b.Xb());
            g.id = d.c.qb + b;
            c.m("onWidgetCreate", [e]);
            return e
        };
        a.xh = function(a) {
            c.add("onWidgetCreate", a)
        };
        return a
    }();
    OBR.ya = OBR.ya || function() {
        var d = OBR, a = {
            N: {
                widgetId: {
                    a: "data-widget-id",
                    t: "string"
                },
                permalink: {
                    a: "data-src",
                    t: "string"
                },
                srcUrl: {
                    a: "data-ob-srcUrl",
                    t: "string"
                },
                dynLoad: {
                    a: "data-dynLoad",
                    t: "boolean"
                },
                widgetType: {
                    a: "data-widget-type",
                    t: "string"
                },
                timeout: {
                    a: "data-timeout",
                    t: "string"
                },
                fbk: {
                    a: "data-fbk",
                    t: "string"
                },
                testMode: {
                    a: "data-ob-test",
                    t: "boolean"
                }
            },
            wd: function(a) {
                var g, b, e;
                if (d.j)
                    for (b = d.j.length, g = 0; g < b; g += 1)
                        if ((e = d.j[g]) && e.G() === a)
                            return e;
                return null
            },
            zf: function(c) {
                var d = {}, b;
                for (b in a.N)
                    a.N.hasOwnProperty(b) &&
                    typeof c[b] === a.N[b].t && (d[b] = c[b]);
                return d
            },
            yf: function(c) {
                var g = {}, b;
                for (b in a.N)
                    if (a.N.hasOwnProperty(b)) {
                        var e = d.b.Ca(c, a.N[b].a);
                        "true" === e || "false" === e ? g[b] = "true" === e?!0 : !1 : typeof e === a.N[b].t && (g[b] = e)
                    }
                return g
            },
            vf: function(c, g) {
                for (var b in a.N)
                    typeof c[b] === a.N[b].t && d.b.ha(g, a.N[b].a, c[b])
            }
        };
        return a
    }();
    OBR.Ba = OBR.Ba || function() {
        var d = {}, a = OBR, c = {}, g = new a.A;
        c.Gf = function(b) {
            b.ni();
            "" !== b.Ea() && (b.oi(b, function() {
                d.zg(b.h)
            }), OBR.w.th(b, function() {
                c.Gi(b)
            }), OBR.k.ce(b.G(), d.sh))
        };
        c.Gi = function(b) {
            var a;
            a = b.u();
            a.timeout = b.qd();
            a.bb || (a.Ja = setTimeout(function() {
                c.kf(b)
            }, a.timeout))
        };
        d.sh = function(b) {
            var a = b.u();
            a.oh=!0;
            b.l("ispartialrecs", !1) && (clearTimeout(a.Ja), a.reason = 3, a.lc=!0, c.Pb(b))
        };
        d.qh = function(b, e) {
            var f;
            b && (b.settings&&!0 === b.settings.ispartialrecs) && (f = a.b.Va(e), clearTimeout(f.u().Ja),
            c.je(f))
        };
        c.rh = function(b, e) {
            b.u().ib = e;
            a.k.uh(b.h, d.qh)
        };
        a.rb.xh(c.Gf);
        a.k.yh(c.rh);
        d.Oc = function(b, e) {
            var f, d, g;
            b && b.response && (f = b.response, OBR.e.log("Cdn response returned"), (d = c.ud(e)) ? (a.w.bf(d), g = d.u(), g.$b = b, f.request && (g.He = f.request.widgetJsId || "NA"), g.Pc = (new Date).getTime(), g.bb&&!g.Pa ? (g.bb=!1, c.Vb(d)) : g.vc&&!g.Pa ? (g.vc=!1, c.Vb(d)) : g.lc&&!g.Pa && (g.lc=!1, c.Vb(d))) : a.e.log("Editorial Widget : Widget not found"))
        };
        c.Vb = function(b) {
            var a = b.u();
            a.Pa=!0;
            c.je(b);
            d.Le(b);
            clearTimeout(b.u().Ja);
            a.reason = 0;
            a.Yb=!0
        };
        c.ud = function(b) {
            var e = a.j[b];
            return e ? e : a.b.Va(b)
        };
        c.vd = function(b) {
            return (b = a.b.vd(b)) ? b : a.b.Va("fbk")
        };
        c.kf = function(b) {
            var a = b.u();
            b.U() || (a.reason = 1, a.vc=!0, c.Pb(b))
        };
        c.je = function(b) {
            var e = b.u();
            b.U()&&!b.l("ispartialrecs", !1) ? e.Yb=!1 : (b.Rg() ? a.k.kd(e.ib, b.h, e.He, e.$b) : (b.setData(e.$b), OBR.k.va(b.h)), b.X(!0))
        };
        d.Le = function(b) {
            var e, f, c;
            f = b.u();
            a.b.Sg(b.Tb()) && b.setData(f.$b);
            c = "" !== b.ba() ? a.b.F(b.ba()) : window.location.href;
            e = b.l("irdfb", "");
            "" !== e && (e += "&reason=" + f.reason ||
            "", e = e + ("&url=" + c || "") + ("&at=" + (b.u().Pc - b.u().Ib) || ""), e += "&to=" + b.qd() || "", e += "&ir=" + (f.Yb ? 1 : 0) || "", b = OBR.b.I(e, !1), OBR.b.L(b))
        };
        c.Pb = function(b) {
            if (0 === b.u().Ib) {
                var e = c.Wf(b);
                c.Wb(e, b);
                a.e.log("CDN call: cdnCall")
            }
        };
        c.Wf = function(b) {
            var e;
            e = a.c.jf;
            b = b.Ea() + "_" + b.G() + "_" + b.h;
            return e + b
        };
        d.zg = function(b) {
            b = c.ud(b);
            var a;
            b && (a = b.u(), clearTimeout(a.Ja), a.bb=!0, a.reason = 2, c.Pb(b))
        };
        c.Wb = function(b, e) {
            var f = a.b.I(b, !1);
            e.u().Ib = (new Date).getTime();
            a.b.L(f);
            a.e.log("fire this src " + b)
        };
        d.K = function() {
            g.$()
        };
        d.v = function() {
            return c
        };
        return d
    }();
    OBR.n = OBR.n || function() {
        var d = {}, a = OBR, c = {
            height: 0,
            width: 0
        }, g = 300;
        d.W = function(b) {
            a = b
        };
        d.v = function() {
            var b = {};
            b.Z = a;
            return b
        };
        d.td = function() {
            return new OBR.vb({})
        };
        d.we = function() {
            var b, a, f;
            f = {
                height: 0,
                width: 0
            };
            b = void 0 !== window.innerWidth;
            a = void 0 !== document.documentElement && void 0 !== document.documentElement.clientWidth && 0 !== document.documentElement.clientWidth;
            b ? (f.height = window.innerHeight, f.width = window.innerWidth) : a ? (f.height = document.documentElement.clientHeight, f.width = document.documentElement.clientWidth) :
            !1 === b&&!1 === a && (f.height = document.getElementsByTagName("body")[0].clientHeight, f.width = document.getElementsByTagName("body")[0].clientWidth);
            c = f
        };
        d.ka = function() {
            return c
        };
        d.se = function() {
            document && document.body && (g = Math.max(Math.max(document.body.scrollHeight, document.documentElement.scrollHeight), Math.max(document.body.offsetHeight, document.documentElement.offsetHeight), Math.max(document.body.clientHeight, document.documentElement.clientHeight)))
        };
        d.od = function() {
            return g
        };
        d.Qb = function(b) {
            var a =
            0;
            if (!b)
                return d.V.Bc;
            try {
                if (b.offsetParent)
                    for (; ;) {
                        a += b.offsetTop;
                        if (!b.offsetParent)
                            break;
                            b = b.offsetParent
                    } else 
                        b.y && (a += b.y)
            } catch (f) {
                return d.V.Bc
            }
            return parseInt(a, 10)
        };
        d.Za = function() {
            return document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop
        };
        d.Dd = function() {
            return OBR.n.ka().height + 10 >= OBR.n.od()
        };
        OBR.b.o(window, "resize", function() {
            d.we();
            d.se()
        });
        d.we();
        d.se();
        return d
    }();
    OBR.vb = OBR.vb || function(d) {
        var a, c = {
            V: {
                Ic: 3,
                Ac: 5,
                tb: 60,
                Bc: 1E4
            },
            M: {
                Gc: 0,
                za: 1,
                Dc: 2,
                Fc: 3
            }
        };
        if (d)
            for (a in d)
                d.hasOwnProperty(a) && (c.V[a] = d[a]);
        c.Jb = function(a) {
            function b(b, a) {
                return e.top - b <= f.height && 0 <= e.bottom + a
            }
            var e = a.getBoundingClientRect(), f = OBR.n.ka(), d = c.V.Ic, h = c.V.Ac, l = c.V.tb;
            a = a.clientHeight;
            var m = c.M.Gc;
            b(0, 0) ? m = c.M.za : b(d + a / 2, h + a / 2) ? m = c.M.Dc : b(l, l) && (m = c.M.Fc);
            return m
        };
        c.Rc = function(a) {
            var b, e, f, d, h;
            b = a.getBoundingClientRect();
            e = OBR.n.Qb(a);
            h = OBR.n.ka();
            f = h.height + OBR.n.Za();
            d = c.M.Gc;
            b =
            0 <= b.top && 0 <= b.left && b.bottom <= h.height && b.right <= h.width;
            a = e - c.V.Ic <= f && e + a.clientHeight - c.V.Ac >= f;
            e = e - c.V.tb <= f && e > f;
            b ? d = c.M.za : a ? d = c.M.Dc : e && (d = c.M.Fc);
            return d
        };
        return c
    };
    OBR.d.C(OBR.d.f.oa);
    OBR.Hc = OBR.Hc || function() {
        var d = {}, a = {}, c, g = (new Date).getTime(), b, e;
        a.i = function(f) {
            c = f;
            d.mc=!1;
            d.na = [];
            d.ma = new c.vb({
                tb: 0
            });
            d.T=!1;
            d.Hb = new c.ed;
            d.Ad=!1;
            d.If = 0;
            a.Mb = {
                Lh: 0,
                bd: 3
            };
            e = d.ma.M.za;
            b = c.c.kc + "loggerServices/widgetGlobalEvent?"
        };
        a.start = function() {
            c.k.de(d.Xc);
            d.Lb();
            d.Xc();
            c.b.o(window, "scroll", d.Kd)
        };
        d.Xc = function() {
            var b = 0, a, e=!1;
            b;
            for (a = c.j.length; b < a; b += 1)
                void 0 === d.na[b] && c.j[b].U() && (d.na[b] = {
                aa: c.b.s(b),
                re: !1
            }, e=!0);
            d.Tf();
            e && d.Kd()
        };
        d.Tf = function() {
            var b = 0, a;
            b;
            for (a = c.j.length; b <
            a; b += 1)
                void 0 !== d.na[b] && (d.na[b]&&!1 === d.na[b].re && c.j[b].U()) && (d.ei(b), d.na[b].re=!0)
        };
        a.ci = function() {
            var b, c, g = d.na, l = g.length || 0;
            for (b = 0; b < l; b += 1)
                if (void 0 !== g[b] && (g[b] && g[b].aa) && (c = d.ma.Jb(g[b].aa), c === e)
                    ) {
                c = d.Wc(b, a.Mb.bd);
                d.ne(c);
                g[b] = null;
                break
            }
        };
        d.ei = function(b) {
            d.ma.Jb(c.b.s(b));
            b = d.Wc(b, a.Mb.Lh);
            d.ne(b)
        };
        d.ne = function(b) {
            d.Hb.add(b);
            d.Ad && d.hd()
        };
        d.hd = function() {
            var b = c.b.Fa(), a;
            for (b || (b = c.b.Ob()); !d.Hb.Ng();)
                a = d.Hb.top(), a += "&ab=" + d.T, a = c.b.I(a, !0), c.b.Q(a, b)
        };
        d.Wc = function(e, k) {
            var h =
            c.j[e], l = [];
            l.push(b);
            l.push("tm=");
            l.push((new Date).getTime() - g);
            l.push("&pid=" + h.p("pid", - 1));
            l.push("&sid=" + h.p("sid", - 1));
            l.push("&wId=" + h.p("wnid", - 1));
            l.push("&wRV=" + c.c.xa);
            l.push("&rId=" + h.p("req_id", - 1));
            l.push("&eT=" + k);
            l.push("&idx=" + h.h);
            l.push("&eIdx=");
            k === a.Mb.bd && l.push(d.If++);
            l.push("&pvId=" + h.p("pvId", ""));
            l.push("&org=" + h.p("org", "0"));
            l.push("&pad=" + h.p("pad", "0"));
            return l.join("")
        };
        d.Lb = function() {
            var b, a;
            !0 !== d.T && (b = c.b.createElement("IFRAME", "ob_ad", "height:1px;width:-1px;left:-1000px;top:-1000px;display:block;border:none"),
            a = c.b.createElement("IMG", "ob_ads", "height:1px;width:-1px;left:-1000px;top:-1000px;display:block;border:none"), a.src = c.c.J + "/nanoWidget/images/adImages/ads-check.gif", b.className = "item-container-ad", document.body.appendChild(b), document.body.appendChild(a), setTimeout(function() {
                if (a&&-1 < a.style.display.indexOf("none") || b && ("hidden" === b.style.visibility || 0 === b.clientHeight))
                    d.T=!0;
                b && b.parentNode && b.parentNode.removeChild(b);
                a && a.parentNode && a.parentNode.removeChild(a);
                d.Ad=!0;
                d.hd()
            }, 300))
        };
        d.Kd =
        function() {
            !0 !== d.mc && (a.ci(), setTimeout(function() {
                d.mc=!1
            }, 150), d.mc=!0)
        };
        a.i(OBR);
        return a
    }();
    OBR.d.C(OBR.d.f.Cb);
    OBR.ad = OBR.ad || function() {
        var d = {}, a = {}, c = OBR;
        d.W = function(a) {
            c = a
        };
        a.fh = function(c, b) {
            var e = c.style;
            e.fontSize = a.P(b, "font-size");
            e.fontWeight = a.P(b, "font-weight");
            e.fontFamily = a.P(b, "font-family");
            e.lineHeight = a.P(b, "line-height");
            var f = a.P(b, "padding-right").replace("px", ""), d = a.P(b, "padding-left").replace("px", "");
            e.display = "block";
            e.visibility = "hidden";
            e.width = b.clientWidth - d - f + "px"
        };
        a.Ta = function(a) {
            return a.innerText || a.textContent
        };
        a.De = function(c, b) {
            for (var e = a.Ta(c), f=!1; 0 < b && c.offsetHeight >
            b && 0 < e.length;)
                e = e.substring(0, e.length - 1), c.innerHTML = e, f=!0;
            a.Th(c, f);
            c.offsetHeight > b && a.De(c, b)
        };
        a.indexOf = function(a, b) {
            a.indexOf || "indexOf"in Array.prototype || (Array.prototype.indexOf = function(b, a) {
                void 0 === a && (a = 0);
                0 > a && (a += this.length);
                0 > a && (a = 0);
                for (var c = this.length; a < c; a++)
                    if (a in this && this[a] === b)
                        return a;
                return - 1
            });
            return a.indexOf(b)
        };
        a.Hf = function(c) {
            var b=!1;
            - 1 < a.indexOf(".,-_' ".split(""), c.substring(c.length - 1, c.length)) && (b=!0);
            return b
        };
        a.P = function(a, b) {
            var c = "";
            document.defaultView &&
            document.defaultView.getComputedStyle ? c = document.defaultView.getComputedStyle(a, "").getPropertyValue(b) : a.currentStyle && (b = b.replace(/\-(\w)/g, function(b, a) {
                return a.toUpperCase()
            }), c = a.currentStyle[b]);
            return c
        };
        a.Th = function(c, b) {
            if (b) {
                var e = a.Ta(c), e = 0 < e.lastIndexOf(" ") ? e.substring(0, e.lastIndexOf(" ")): e.substring(0, e.length - 3);
                a.Hf(e) && (e = e.substring(0, e.length - 1));
                c.innerHTML = e + "&hellip;"
            }
        };
        a.uf = function() {
            var a = document.createElement("div");
            a.style.position = "absolute";
            a.style.top = "-1000px";
            a.style.left = "-1000px";
            document.body.appendChild(a);
            return a
        };
        a.Ti = function(d) {
            function b() {
                for (var b = 0; b < e.length; b++) {
                    var c = e[b];
                    c.title = a.Ta(c);
                    var d = c.clientHeight, g = parseInt(a.P(c, "max-height").replace("px", ""));
                    if (!(d < g)) {
                        var d = c.cloneNode(!0), m = a.uf();
                        a.fh(d, c);
                        m.appendChild(d);
                        a.De(d, g);
                        c.innerHTML = a.Ta(d);
                        m.parentNode.removeChild(m)
                    }
                }
            }
            var e = c.b.getElementsByClassName("ob-rec-text", d);
            0 === c.b.getElementsByClassName("ob-touch-strip-layout", d).length ? b() : setTimeout(b, 1E3)
        };
        a.Ef = function(a) {
            var b =
            !1;
            a = c.b.getElementsByClassName("ob-widget", a);
            0 < a.length && (a = a[0], a.attributes["data-dynamic-truncate"] && "true" === a.attributes["data-dynamic-truncate"].value && (b=!0));
            return b
        };
        d.vg = function(d) {
            (d = c.b.s(d)) && a.Ef(d) && a.Ti(d)
        };
        return d
    }();
    OBR.extern = OBR.extern || function() {
        var d = OBR;
        return {
            getStat: function() {
                d.D.me()
            },
            showDescription: function(a, c) {
                d.d.r(OBR.d.f.ub, function() {
                    OBR.Xd.bh(a, c)
                }, this)
            },
            returnedHtmlData: function(a, c) {
                d.k.ic(a, c)
            },
            returnedIrdData: function(a, c) {
                d.Ba.Oc(a, c)
            },
            returnedJsonData: function(a, c) {
                d.k.Rd(a, c)
            },
            returnedError: function(a) {
                OBR.e.log("Call made using extern class");
                d.e.log("Callback error" + a)
            },
            callRecs: function(a, c) {
                OBR.e.log("Call made using extern class");
                d.k.Nd(a, c)
            },
            callClick: function(a, c) {
                OBR.e.log("Call made using extern class");
                d.k.bc(a, c)
            },
            callWhatIs: function(a, c, d, b, e, f) {
                OBR.d.r(OBR.d.f.Na, function() {
                    OBR.zc.Nc(a, c, d, b, e, f)
                }, this);
                return !1
            },
            recClicked: function(a, c) {
                OBR.e.log("Call made using extern class");
                d.k.Zd(a, c)
            },
            imageError: function(a) {
                OBR.e.log("Call made using extern class");
                d.b.Sc(a)
            },
            showRecInIframe: function(a, c, g, b, e) {
                d.d.r(d.d.f.wb, function() {
                    d.$d.Ji(a, c, g, b, e)
                }, this)
            },
            errorInjectionHandler: function(a) {
                OBR.j[a].Sf(a)
            },
            reloadWidget: function() {
                OBR.e.log("reload widget");
                d.k.Rh()
            },
            researchWidget: function() {
                OBR.e.log("research widget");
                d.k.qc()
            },
            cancelRecommendation: function(a) {
                OBR.e.log("cancel recommendation with bocr " + a);
                d.k.ff(a)
            },
            cancelRecs: function(a, c, g) {
                OBR.e.log("cancel recommendation by doc url " + a + " publisher id = " + c + " isAd = " + g);
                d.k.gf(a, c, g)
            },
            refreshWidget: function(a) {
                OBR.e.log("refresh widget");
                d.k.ua(a)
            },
            refreshSpecificWidget: function(a, c) {
                OBR.e.log("refresh SPECIFIC widget");
                "string" !== typeof c ? d.d.r(d.d.f.xb, function() {
                    OBR.k.ae(a, c)
                }, this) : OBR.k.ae(a, c)
            },
            getCountOfRecs: function(a) {
                return d.k.Yf(a)
            },
            onOdbReturn: function(a,
            c) {
                d.k.ce(a, c)
            },
            closeCard: function() {
                d.Sa.sf()
            },
            closeModal: function() {
                try {
                    d.modal.hideModal()
                } catch (a) {}
            },
            scrollLoad: function() {
                try {
                    OBR.d.C(OBR.d.f.Ab)
                } catch (a) {}
            },
            callLoadMore: function(a, c) {
                OBR.d.r(OBR.d.f.Ma, function() {
                    OBR.ac.yd(c)
                }, this)
            }
        }
    }();
    window.outbrain = window.outbrain || {};
    window.outbrain.returnedHtmlData = function(d, a) {
        OBR.k.ic(d, a)
    };
    window.outbrain.returnedIrdJsonData = function(d, a) {
        OBR.Ba.Oc(d, a)
    };
    window.outbrain.returnedJsonData = function(d, a) {
        OBR.k.Rd(d, a)
    };
    window.outbrain.returnedError = function(d) {
        OBR.e.log("Callback error" + d)
    };
    window.outbrain.callRecs = function(d, a) {
        OBR.k.Nd(d, a)
    };
    window.outbrain.callClick = function(d, a) {
        OBR.k.bc(d, a)
    };
    window.outbrain.callWhatIs = function(d, a, c, g, b, e) {
        OBR.d.r(OBR.d.f.Na, function() {
            OBR.zc.Nc(d, a, c, g, b, e)
        }, this)
    };
    window.outbrain.callLoadMore = function(d, a) {
        OBR.d.r(OBR.d.f.Ma, function() {
            OBR.ac.yd(a)
        }, this)
    };
    window.outbrain.recClicked = function(d, a) {
        OBR.k.Zd(d, a)
    };
    window.outbrain.imageError = function(d) {
        OBR.b.Sc(d)
    };
    window.outbrain.closeModal = function() {
        try {
            OBR.modal.hideModal()
        } catch (d) {}
    };
    window.outbrain_rater = window.outbrain_rater || {};
    window.outbrain_rater.returnedHtmlData = function(d, a) {
        OBR.k.ic(d, a)
    };
    window.outbrain_rater.returnedCancelOdbData = function(d) {
        OBR.k.Xh(d)
    };
    !0 === OBR.c.Bd && (OBR.e.log("Widget Start!"), OBR.c.Bd=!1, "boolean" === typeof window.OB_PASSIVE_MODE&&!0 === window.OB_PASSIVE_MODE ? OBR.e.log("passive") : OBR.k.le());
})(window.OBR);

