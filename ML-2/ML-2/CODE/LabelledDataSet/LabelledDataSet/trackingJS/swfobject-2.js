define(function() {
    /*!	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
    	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
    */
    var a = function() {
        var E = "undefined", s = "object", T = "Shockwave Flash", X = "ShockwaveFlash.ShockwaveFlash", r = "application/x-shockwave-flash", S = "SWFObjectExprInst", y = "onreadystatechange", P = window, k = document, u = navigator, U = false, V = [i], p = [], O = [], J = [], m, R, F, C, K = false, b = false, o, H, n = true, N = function() {
            var ab = typeof k.getElementById != E && typeof k.getElementsByTagName != E && typeof k.createElement != E, ai = u.userAgent.toLowerCase(), Z = u.platform.toLowerCase(), af = Z ? /win/.test(Z): /win/.test(ai), ad = Z ? /mac/.test(Z): /mac/.test(ai), ag = /webkit/.test(ai) ? parseFloat(ai.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")): false, Y=!+"\v1", ah = [0, 0, 0], ac = null;
            if (typeof u.plugins != E && typeof u.plugins[T] == s) {
                ac = u.plugins[T].description;
                if (ac&&!(typeof u.mimeTypes != E && u.mimeTypes[r]&&!u.mimeTypes[r].enabledPlugin)) {
                    U = true;
                    Y = false;
                    ac = ac.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                    ah[0] = parseInt(ac.replace(/^(.*)\..*$/, "$1"), 10);
                    ah[1] = parseInt(ac.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                    ah[2] = /[a-zA-Z]/.test(ac) ? parseInt(ac.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                }
            } else {
                if (typeof P.ActiveXObject != E) {
                    try {
                        var ae = new ActiveXObject(X);
                        if (ae) {
                            ac = ae.GetVariable("$version");
                            if (ac) {
                                Y = true;
                                ac = ac.split(" ")[1].split(",");
                                ah = [parseInt(ac[0], 10), parseInt(ac[1], 10), parseInt(ac[2], 10)]
                            }
                        }
                    } catch (aa) {}
                }
            }
            return {
                w3: ab,
                pv: ah,
                wk: ag,
                ie: Y,
                win: af,
                mac: ad
            }
        }(), l = function() {
            if (!N.w3) {
                return 
            }
            if ((typeof k.readyState != E && k.readyState == "complete") || (typeof k.readyState == E && (k.getElementsByTagName("body")[0] || k.body))) {
                g()
            }
            if (!K) {
                if (typeof k.addEventListener != E) {
                    k.addEventListener("DOMContentLoaded", g, false)
                }
                if (N.ie && N.win) {
                    k.attachEvent(y, function() {
                        if (k.readyState == "complete") {
                            k.detachEvent(y, arguments.callee);
                            g()
                        }
                    });
                    if (P == top) {
                        (function() {
                            if (K) {
                                return 
                            }
                            try {
                                k.documentElement.doScroll("left")
                            } catch (Y) {
                                setTimeout(arguments.callee, 0);
                                return 
                            }
                            g()
                        })()
                    }
                }
                if (N.wk) {
                    (function() {
                        if (K) {
                            return 
                        }
                        if (!/loaded|complete/.test(k.readyState)) {
                            setTimeout(arguments.callee, 0);
                            return 
                        }
                        g()
                    })()
                }
                t(g)
            }
        }();
        function g() {
            if (K) {
                return 
            }
            try {
                var aa = k.getElementsByTagName("body")[0].appendChild(D("span"));
                aa.parentNode.removeChild(aa)
            } catch (ab) {
                return 
            }
            K = true;
            var Y = V.length;
            for (var Z = 0; Z < Y; Z++) {
                V[Z]()
            }
        }
        function L(Y) {
            if (K) {
                Y()
            } else {
                V[V.length] = Y
            }
        }
        function t(Z) {
            if (typeof P.addEventListener != E) {
                P.addEventListener("load", Z, false)
            } else {
                if (typeof k.addEventListener != E) {
                    k.addEventListener("load", Z, false)
                } else {
                    if (typeof P.attachEvent != E) {
                        j(P, "onload", Z)
                    } else {
                        if (typeof P.onload == "function") {
                            var Y = P.onload;
                            P.onload = function() {
                                Y();
                                Z()
                            }
                        } else {
                            P.onload = Z
                        }
                    }
                }
            }
        }
        function i() {
            if (U) {
                W()
            } else {
                I()
            }
        }
        function W() {
            var Y = k.getElementsByTagName("body")[0];
            var ab = D(s);
            ab.setAttribute("type", r);
            var aa = Y.appendChild(ab);
            if (aa) {
                var Z = 0;
                (function() {
                    if (typeof aa.GetVariable != E) {
                        var ac = aa.GetVariable("$version");
                        if (ac) {
                            ac = ac.split(" ")[1].split(",");
                            N.pv = [parseInt(ac[0], 10), parseInt(ac[1], 10), parseInt(ac[2], 10)]
                        }
                    } else {
                        if (Z < 10) {
                            Z++;
                            setTimeout(arguments.callee, 10);
                            return 
                        }
                    }
                    Y.removeChild(ab);
                    aa = null;
                    I()
                })()
            } else {
                I()
            }
        }
        function I() {
            var ah = p.length;
            if (ah > 0) {
                for (var ag = 0; ag < ah; ag++) {
                    var Z = p[ag].id;
                    var ac = p[ag].callbackFn;
                    var ab = {
                        success: false,
                        id: Z
                    };
                    if (N.pv[0] > 0) {
                        var af = d(Z);
                        if (af) {
                            if (G(p[ag].swfVersion)&&!(N.wk && N.wk < 312)) {
                                x(Z, true);
                                if (ac) {
                                    ab.success = true;
                                    ab.ref = A(Z);
                                    ac(ab)
                                }
                            } else {
                                if (p[ag].expressInstall && B()) {
                                    var aj = {};
                                    aj.data = p[ag].expressInstall;
                                    aj.width = af.getAttribute("width") || "0";
                                    aj.height = af.getAttribute("height") || "0";
                                    if (af.getAttribute("class")) {
                                        aj.styleclass = af.getAttribute("class")
                                    }
                                    if (af.getAttribute("align")) {
                                        aj.align = af.getAttribute("align")
                                    }
                                    var ai = {};
                                    var Y = af.getElementsByTagName("param");
                                    var ad = Y.length;
                                    for (var ae = 0; ae < ad; ae++) {
                                        if (Y[ae].getAttribute("name").toLowerCase() != "movie") {
                                            ai[Y[ae].getAttribute("name")] = Y[ae].getAttribute("value")
                                        }
                                    }
                                    Q(aj, ai, Z, ac)
                                } else {
                                    q(af);
                                    if (ac) {
                                        ac(ab)
                                    }
                                }
                            }
                        }
                    } else {
                        x(Z, true);
                        if (ac) {
                            var aa = A(Z);
                            if (aa && typeof aa.SetVariable != E) {
                                ab.success = true;
                                ab.ref = aa
                            }
                            ac(ab)
                        }
                    }
                }
            }
        }
        function A(ab) {
            var Y = null;
            var Z = d(ab);
            if (Z && Z.nodeName == "OBJECT") {
                if (typeof Z.SetVariable != E) {
                    Y = Z
                } else {
                    var aa = Z.getElementsByTagName(s)[0];
                    if (aa) {
                        Y = aa
                    }
                }
            }
            return Y
        }
        function B() {
            return !b && G("6.0.65") && (N.win || N.mac)&&!(N.wk && N.wk < 312)
        }
        function Q(ab, ac, Y, aa) {
            b = true;
            F = aa || null;
            C = {
                success: false,
                id: Y
            };
            var af = d(Y);
            if (af) {
                if (af.nodeName == "OBJECT") {
                    m = h(af);
                    R = null
                } else {
                    m = af;
                    R = Y
                }
                ab.id = S;
                if (typeof ab.width == E || (!/%$/.test(ab.width) && parseInt(ab.width, 10) < 310)) {
                    ab.width = "310"
                }
                if (typeof ab.height == E || (!/%$/.test(ab.height) && parseInt(ab.height, 10) < 137)) {
                    ab.height = "137"
                }
                k.title = k.title.slice(0, 47) + " - Flash Player Installation";
                var ae = N.ie && N.win ? "ActiveX": "PlugIn", ad = "MMredirectURL=" + P.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ae + "&MMdoctitle=" + k.title;
                if (typeof ac.flashvars != E) {
                    ac.flashvars += "&" + ad
                } else {
                    ac.flashvars = ad
                }
                if (N.ie && N.win && af.readyState != 4) {
                    var Z = D("div");
                    Y += "SWFObjectNew";
                    Z.setAttribute("id", Y);
                    af.parentNode.insertBefore(Z, af);
                    af.style.display = "none";
                    (function() {
                        if (af.readyState == 4) {
                            af.parentNode.removeChild(af)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                }
                v(ab, ac, Y)
            }
        }
        function q(Z) {
            if (N.ie && N.win && Z.readyState != 4) {
                var Y = D("div");
                Z.parentNode.insertBefore(Y, Z);
                Y.parentNode.replaceChild(h(Z), Y);
                Z.style.display = "none";
                (function() {
                    if (Z.readyState == 4) {
                        Z.parentNode.removeChild(Z)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                Z.parentNode.replaceChild(h(Z), Z)
            }
        }
        function h(ad) {
            var ab = D("div");
            if (N.win && N.ie) {
                ab.innerHTML = ad.innerHTML
            } else {
                var Z = ad.getElementsByTagName(s)[0];
                if (Z) {
                    var ae = Z.childNodes;
                    if (ae) {
                        var Y = ae.length;
                        for (var aa = 0; aa < Y; aa++) {
                            if (!(ae[aa].nodeType == 1 && ae[aa].nodeName == "PARAM")&&!(ae[aa].nodeType == 8)) {
                                ab.appendChild(ae[aa].cloneNode(true))
                            }
                        }
                    }
                }
            }
            return ab
        }
        function v(aj, ah, Z) {
            var Y, ab = d(Z);
            if (N.wk && N.wk < 312) {
                return Y
            }
            if (ab) {
                if (typeof aj.id == E) {
                    aj.id = Z
                }
                if (N.ie && N.win) {
                    var ai = "";
                    for (var af in aj) {
                        if (aj[af] != Object.prototype[af]) {
                            if (af.toLowerCase() == "data") {
                                ah.movie = aj[af]
                            } else {
                                if (af.toLowerCase() == "styleclass") {
                                    ai += ' class="' + aj[af] + '"'
                                } else {
                                    if (af.toLowerCase() != "classid") {
                                        ai += " " + af + '="' + aj[af] + '"'
                                    }
                                }
                            }
                        }
                    }
                    var ag = "";
                    for (var ae in ah) {
                        if (ah[ae] != Object.prototype[ae]) {
                            ag += '<param name="' + ae + '" value="' + ah[ae] + '" />'
                        }
                    }
                    ab.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ai + ">" + ag + "</object>";
                    O[O.length] = aj.id;
                    Y = d(aj.id)
                } else {
                    var aa = D(s);
                    aa.setAttribute("type", r);
                    for (var ad in aj) {
                        if (aj[ad] != Object.prototype[ad]) {
                            if (ad.toLowerCase() == "styleclass") {
                                aa.setAttribute("class", aj[ad])
                            } else {
                                if (ad.toLowerCase() != "classid") {
                                    aa.setAttribute(ad, aj[ad])
                                }
                            }
                        }
                    }
                    for (var ac in ah) {
                        if (ah[ac] != Object.prototype[ac] && ac.toLowerCase() != "movie") {
                            f(aa, ac, ah[ac])
                        }
                    }
                    ab.parentNode.replaceChild(aa, ab);
                    Y = aa
                }
            }
            return Y
        }
        function f(aa, Y, Z) {
            var ab = D("param");
            ab.setAttribute("name", Y);
            ab.setAttribute("value", Z);
            aa.appendChild(ab)
        }
        function z(Z) {
            var Y = d(Z);
            if (Y && Y.nodeName == "OBJECT") {
                if (N.ie && N.win) {
                    Y.style.display = "none";
                    (function() {
                        if (Y.readyState == 4) {
                            c(Z)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                } else {
                    Y.parentNode.removeChild(Y)
                }
            }
        }
        function c(aa) {
            var Z = d(aa);
            if (Z) {
                for (var Y in Z) {
                    if (typeof Z[Y] == "function") {
                        Z[Y] = null
                    }
                }
                Z.parentNode.removeChild(Z)
            }
        }
        function d(aa) {
            var Y = null;
            try {
                Y = k.getElementById(aa)
            } catch (Z) {}
            return Y
        }
        function D(Y) {
            return k.createElement(Y)
        }
        function j(aa, Y, Z) {
            aa.attachEvent(Y, Z);
            J[J.length] = [aa, Y, Z]
        }
        function G(aa) {
            var Z = N.pv, Y = aa.split(".");
            Y[0] = parseInt(Y[0], 10);
            Y[1] = parseInt(Y[1], 10) || 0;
            Y[2] = parseInt(Y[2], 10) || 0;
            return (Z[0] > Y[0] || (Z[0] == Y[0] && Z[1] > Y[1]) || (Z[0] == Y[0] && Z[1] == Y[1] && Z[2] >= Y[2])) ? true : false
        }
        function w(ad, Z, ae, ac) {
            if (N.ie && N.mac) {
                return 
            }
            var ab = k.getElementsByTagName("head")[0];
            if (!ab) {
                return 
            }
            var Y = (ae && typeof ae == "string") ? ae: "screen";
            if (ac) {
                o = null;
                H = null
            }
            if (!o || H != Y) {
                var aa = D("style");
                aa.setAttribute("type", "text/css");
                aa.setAttribute("media", Y);
                o = ab.appendChild(aa);
                if (N.ie && N.win && typeof k.styleSheets != E && k.styleSheets.length > 0) {
                    o = k.styleSheets[k.styleSheets.length - 1]
                }
                H = Y
            }
            if (N.ie && N.win) {
                if (o && typeof o.addRule == s) {
                    o.addRule(ad, Z)
                }
            } else {
                if (o && typeof k.createTextNode != E) {
                    o.appendChild(k.createTextNode(ad + " {" + Z + "}"))
                }
            }
        }
        function x(aa, Y) {
            if (!n) {
                return 
            }
            var Z = Y ? "visible": "hidden";
            if (K && d(aa)) {
                d(aa).style.visibility = Z
            } else {
                w("#" + aa, "visibility:" + Z)
            }
        }
        function M(Z) {
            var aa = /[\\\"<>\.;]/;
            var Y = aa.exec(Z) != null;
            return Y && typeof encodeURIComponent != E ? encodeURIComponent(Z) : Z
        }
        var e = function() {
            if (N.ie && N.win) {
                window.attachEvent("onunload", function() {
                    var ad = J.length;
                    for (var ac = 0; ac < ad; ac++) {
                        J[ac][0].detachEvent(J[ac][1], J[ac][2])
                    }
                    var aa = O.length;
                    for (var ab = 0; ab < aa; ab++) {
                        z(O[ab])
                    }
                    for (var Z in N) {
                        N[Z] = null
                    }
                    N = null;
                    for (var Y in a) {
                        a[Y] = null
                    }
                    a = null
                })
            }
        }();
        return {
            registerObject: function(ac, Y, ab, aa) {
                if (N.w3 && ac && Y) {
                    var Z = {};
                    Z.id = ac;
                    Z.swfVersion = Y;
                    Z.expressInstall = ab;
                    Z.callbackFn = aa;
                    p[p.length] = Z;
                    x(ac, false)
                } else {
                    if (aa) {
                        aa({
                            success: false,
                            id: ac
                        })
                    }
                }
            },
            getObjectById: function(Y) {
                if (N.w3) {
                    return A(Y)
                }
            },
            embedSWF: function(ac, ai, af, ah, Z, ab, aa, ae, ag, ad) {
                var Y = {
                    success: false,
                    id: ai
                };
                if (N.w3&&!(N.wk && N.wk < 312) && ac && ai && af && ah && Z) {
                    x(ai, false);
                    L(function() {
                        af += "";
                        ah += "";
                        var ak = {};
                        if (ag && typeof ag === s) {
                            for (var am in ag) {
                                ak[am] = ag[am]
                            }
                        }
                        ak.data = ac;
                        ak.width = af;
                        ak.height = ah;
                        var an = {};
                        if (ae && typeof ae === s) {
                            for (var al in ae) {
                                an[al] = ae[al]
                            }
                        }
                        if (aa && typeof aa === s) {
                            for (var aj in aa) {
                                if (typeof an.flashvars != E) {
                                    an.flashvars += "&" + aj + "=" + aa[aj]
                                } else {
                                    an.flashvars = aj + "=" + aa[aj]
                                }
                            }
                        }
                        if (G(Z)) {
                            var ao = v(ak, an, ai);
                            if (ak.id == ai) {
                                x(ai, true)
                            }
                            Y.success = true;
                            Y.ref = ao
                        } else {
                            if (ab && B()) {
                                ak.data = ab;
                                Q(ak, an, ai, ad);
                                return 
                            } else {
                                x(ai, true)
                            }
                        }
                        if (ad) {
                            ad(Y)
                        }
                    })
                } else {
                    if (ad) {
                        ad(Y)
                    }
                }
            },
            switchOffAutoHideShow: function() {
                n = false
            },
            ua: N,
            getFlashPlayerVersion: function() {
                return {
                    major: N.pv[0],
                    minor: N.pv[1],
                    release: N.pv[2]
                }
            },
            hasFlashPlayerVersion: G,
            createSWF: function(aa, Z, Y) {
                if (N.w3) {
                    return v(aa, Z, Y)
                } else {
                    return undefined
                }
            },
            showExpressInstall: function(aa, ab, Y, Z) {
                if (N.w3 && B()) {
                    Q(aa, ab, Y, Z)
                }
            },
            removeSWF: function(Y) {
                if (N.w3) {
                    z(Y)
                }
            },
            createCSS: function(ab, aa, Z, Y) {
                if (N.w3) {
                    w(ab, aa, Z, Y)
                }
            },
            addDomLoadEvent: L,
            addLoadEvent: t,
            getQueryParamValue: function(ab) {
                var aa = k.location.search || k.location.hash;
                if (aa) {
                    if (/\?/.test(aa)) {
                        aa = aa.split("?")[1]
                    }
                    if (ab == null) {
                        return M(aa)
                    }
                    var Z = aa.split("&");
                    for (var Y = 0; Y < Z.length; Y++) {
                        if (Z[Y].substring(0, Z[Y].indexOf("=")) == ab) {
                            return M(Z[Y].substring((Z[Y].indexOf("=") + 1)))
                        }
                    }
                }
                return ""
            },
            expressInstallCallback: function() {
                if (b) {
                    var Y = d(S);
                    if (Y && m) {
                        Y.parentNode.replaceChild(m, Y);
                        if (R) {
                            x(R, true);
                            if (N.ie && N.win) {
                                m.style.display = "block"
                            }
                        }
                        if (F) {
                            F(C)
                        }
                    }
                    b = false
                }
            }
        }
    }();
    return a
});
