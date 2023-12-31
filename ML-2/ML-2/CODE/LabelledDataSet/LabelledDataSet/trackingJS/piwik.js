/*!
 * Piwik - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link http://piwik.org
 * @source https://github.com/piwik/piwik/blob/master/js/piwik.js
 * @license http://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
if (typeof JSON2 !== "object") {
    JSON2 = {}
}(function() {
    function d(f) {
        return f < 10 ? "0" + f : f
    }
    function l(n, m) {
        var f = Object.prototype.toString.apply(n);
        if (f === "[object Date]") {
            return isFinite(n.valueOf()) ? n.getUTCFullYear() + "-" + d(n.getUTCMonth() + 1) + "-" + d(n.getUTCDate()) + "T" + d(n.getUTCHours()) + ":" + d(n.getUTCMinutes()) + ":" + d(n.getUTCSeconds()) + "Z" : null
        }
        if (f === "[object String]" || f === "[object Number]" || f === "[object Boolean]") {
            return n.valueOf()
        }
        if (f !== "[object Array]" && typeof n.toJSON === "function") {
            return n.toJSON(m)
        }
        return n
    }
    var c = new RegExp("[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]", "g"), e = '\\\\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]', i = new RegExp("[" + e, "g"), j, b, k = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, h;
    function a(f) {
        i.lastIndex = 0;
        return i.test(f) ? '"' + f.replace(i, function(m) {
            var n = k[m];
            return typeof n === "string" ? n : "\\u" + ("0000" + m.charCodeAt(0).toString(16)).slice( - 4)
        }) + '"' : '"' + f + '"'
    }
    function g(s, p) {
        var n, m, t, f, q = j, o, r = p[s];
        if (r && typeof r === "object") {
            r = l(r, s)
        }
        if (typeof h === "function") {
            r = h.call(p, s, r)
        }
        switch (typeof r) {
        case"string":
            return a(r);
        case"number":
            return isFinite(r) ? String(r) : "null";
        case"boolean":
        case"null":
            return String(r);
        case"object":
            if (!r) {
                return "null"
            }
            j += b;
            o = [];
            if (Object.prototype.toString.apply(r) === "[object Array]") {
                f = r.length;
                for (n = 0; n < f; n += 1) {
                    o[n] = g(n, r) || "null"
                }
                t = o.length === 0 ? "[]" : j ? "[\n" + j + o.join(",\n" + j) + "\n" + q + "]" : "[" + o.join(",") + "]";
                j = q;
                return t
            }
            if (h && typeof h === "object") {
                f = h.length;
                for (n = 0; n < f; n += 1) {
                    if (typeof h[n] === "string") {
                        m = h[n];
                        t = g(m, r);
                        if (t) {
                            o.push(a(m) + (j ? ": " : ":") + t)
                        }
                    }
                }
            } else {
                for (m in r) {
                    if (Object.prototype.hasOwnProperty.call(r, m)) {
                        t = g(m, r);
                        if (t) {
                            o.push(a(m) + (j ? ": " : ":") + t)
                        }
                    }
                }
            }
            t = o.length === 0 ? "{}" : j ? "{\n" + j + o.join(",\n" + j) + "\n" + q + "}" : "{" + o.join(",") + "}";
            j = q;
            return t
        }
    }
    if (typeof JSON2.stringify !== "function") {
        JSON2.stringify = function(o, m, n) {
            var f;
            j = "";
            b = "";
            if (typeof n === "number") {
                for (f = 0; f < n; f += 1) {
                    b += " "
                }
            } else {
                if (typeof n === "string") {
                    b = n
                }
            }
            h = m;
            if (m && typeof m !== "function" && (typeof m !== "object" || typeof m.length !== "number")) {
                throw new Error("JSON2.stringify")
            }
            return g("", {
                "": o
            })
        }
    }
    if (typeof JSON2.parse !== "function") {
        JSON2.parse = function(o, f) {
            var n;
            function m(s, r) {
                var q, p, t = s[r];
                if (t && typeof t === "object") {
                    for (q in t) {
                        if (Object.prototype.hasOwnProperty.call(t, q)) {
                            p = m(t, q);
                            if (p !== undefined) {
                                t[q] = p
                            } else {
                                delete t[q]
                            }
                        }
                    }
                }
                return f.call(s, r, t)
            }
            o = String(o);
            c.lastIndex = 0;
            if (c.test(o)) {
                o = o.replace(c, function(p) {
                    return "\\u" + ("0000" + p.charCodeAt(0).toString(16)).slice( - 4)
                })
            }
            if ((new RegExp("^[\\],:{}\\s]*$")).test(o.replace(new RegExp('\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})', "g"), "@").replace(new RegExp('"[^"\\\\\n\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?', "g"), "]").replace(new RegExp("(?:^|:|,)(?:\\s*\\[)+", "g"), ""))) {
                n = eval("(" + o + ")");
                return typeof f === "function" ? m({
                    "": n
                }, "") : n
            }
            throw new SyntaxError("JSON2.parse")
        }
    }
}());
if (typeof _paq !== "object") {
    _paq = []
}
if (typeof Piwik !== "object") {
    Piwik = (function() {
        var i, a = {}, s = document, e = navigator, F = screen, C = window, f = C.performance || C.mozPerformance || C.msPerformance || C.webkitPerformance, n = false, A = [], k = C.encodeURIComponent, B = C.decodeURIComponent, g = unescape, G, r, c;
        function u(R) {
            var Q = typeof R;
            return Q !== "undefined"
        }
        function o(Q) {
            return typeof Q === "function"
        }
        function E(Q) {
            return typeof Q === "object"
        }
        function l(Q) {
            return typeof Q === "string" || Q instanceof String
        }
        function L() {
            var Q, S, R;
            for (Q = 0; Q < arguments.length; Q += 1) {
                R = arguments[Q];
                S = R.shift();
                if (l(S)) {
                    G[S].apply(G, R)
                } else {
                    S.apply(G, R)
                }
            }
        }
        function O(T, S, R, Q) {
            if (T.addEventListener) {
                T.addEventListener(S, R, Q);
                return true
            }
            if (T.attachEvent) {
                return T.attachEvent("on" + S, R)
            }
            T["on" + S] = R
        }
        function J(R, U) {
            var Q = "", T, S;
            for (T in a) {
                if (Object.prototype.hasOwnProperty.call(a, T)) {
                    S = a[T][R];
                    if (o(S)) {
                        Q += S(U)
                    }
                }
            }
            return Q
        }
        function M() {
            var Q;
            J("unload");
            if (i) {
                do {
                    Q = new Date()
                }
                while (Q.getTimeAlias() < i)
                }
        }
        function K() {
            var Q;
            if (!n) {
                n = true;
                J("load");
                for (Q = 0; Q < A.length; Q++) {
                    A[Q]()
                }
            }
            return true
        }
        function m() {
            var R;
            if (s.addEventListener) {
                O(s, "DOMContentLoaded", function Q() {
                    s.removeEventListener("DOMContentLoaded", Q, false);
                    K()
                })
            } else {
                if (s.attachEvent) {
                    s.attachEvent("onreadystatechange", function Q() {
                        if (s.readyState === "complete") {
                            s.detachEvent("onreadystatechange", Q);
                            K()
                        }
                    });
                    if (s.documentElement.doScroll && C === C.top) {
                        (function Q() {
                            if (!n) {
                                try {
                                    s.documentElement.doScroll("left")
                                } catch (S) {
                                    setTimeout(Q, 0);
                                    return 
                                }
                                K()
                            }
                        }())
                    }
                }
            }
            if ((new RegExp("WebKit")).test(e.userAgent)) {
                R = setInterval(function() {
                    if (n || /loaded|complete/.test(s.readyState)) {
                        clearInterval(R);
                        K()
                    }
                }, 10)
            }
            O(C, "load", K, false)
        }
        function h(S, R) {
            var Q = s.createElement("script");
            Q.type = "text/javascript";
            Q.src = S;
            if (Q.readyState) {
                Q.onreadystatechange = function() {
                    var T = this.readyState;
                    if (T === "loaded" || T === "complete") {
                        Q.onreadystatechange = null;
                        R()
                    }
                }
            } else {
                Q.onload = R
            }
            s.getElementsByTagName("head")[0].appendChild(Q)
        }
        function v() {
            var Q = "";
            try {
                Q = C.top.document.referrer
            } catch (S) {
                if (C.parent) {
                    try {
                        Q = C.parent.document.referrer
                    } catch (R) {
                        Q = ""
                    }
                }
            }
            if (Q === "") {
                Q = s.referrer
            }
            return Q
        }
        function j(Q) {
            var S = new RegExp("^([a-z]+):"), R = S.exec(Q);
            return R ? R[1] : null
        }
        function b(Q) {
            var S = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"), R = S.exec(Q);
            return R ? R[1] : Q
        }
        function D(S, R) {
            var Q = "[\\?&#]" + R + "=([^&#]*)";
            var U = new RegExp(Q);
            var T = U.exec(S);
            return T ? B(T[1]) : ""
        }
        function q(Q) {
            return g(k(Q))
        }
        function N(ag) {
            var S = function(al, W) {
                return (al<<W) | (al>>>(32 - W))
            }, ah = function(an) {
                var al = "", am, W;
                for (am = 7; am >= 0; am--) {
                    W = (an>>>(am * 4)) & 15;
                    al += W.toString(16)
                }
                return al
            }, V, aj, ai, R = [], aa = 1732584193, Y = 4023233417, X = 2562383102, U = 271733878, T = 3285377520, af, ae, ad, ac, ab, ak, Q, Z = [];
            ag = q(ag);
            Q = ag.length;
            for (aj = 0; aj < Q - 3; aj += 4) {
                ai = ag.charCodeAt(aj)<<24 | ag.charCodeAt(aj + 1)<<16 | ag.charCodeAt(aj + 2)<<8 | ag.charCodeAt(aj + 3);
                Z.push(ai)
            }
            switch (Q & 3) {
            case 0:
                aj = 2147483648;
                break;
            case 1:
                aj = ag.charCodeAt(Q - 1)<<24 | 8388608;
                break;
            case 2:
                aj = ag.charCodeAt(Q - 2)<<24 | ag.charCodeAt(Q - 1)<<16 | 32768;
                break;
            case 3:
                aj = ag.charCodeAt(Q - 3)<<24 | ag.charCodeAt(Q - 2)<<16 | ag.charCodeAt(Q - 1)<<8 | 128;
                break
            }
            Z.push(aj);
            while ((Z.length & 15) !== 14) {
                Z.push(0)
            }
            Z.push(Q>>>29);
            Z.push((Q<<3) & 4294967295);
            for (V = 0; V < Z.length; V += 16) {
                for (aj = 0; aj < 16; aj++) {
                    R[aj] = Z[V + aj]
                }
                for (aj = 16; aj <= 79; aj++) {
                    R[aj] = S(R[aj - 3]^R[aj - 8]^R[aj - 14]^R[aj - 16], 1)
                }
                af = aa;
                ae = Y;
                ad = X;
                ac = U;
                ab = T;
                for (aj = 0; aj <= 19; aj++) {
                    ak = (S(af, 5) + ((ae & ad) | (~ae & ac)) + ab + R[aj] + 1518500249) & 4294967295;
                    ab = ac;
                    ac = ad;
                    ad = S(ae, 30);
                    ae = af;
                    af = ak
                }
                for (aj = 20; aj <= 39; aj++) {
                    ak = (S(af, 5) + (ae^ad^ac) + ab + R[aj] + 1859775393) & 4294967295;
                    ab = ac;
                    ac = ad;
                    ad = S(ae, 30);
                    ae = af;
                    af = ak
                }
                for (aj = 40; aj <= 59; aj++) {
                    ak = (S(af, 5) + ((ae & ad) | (ae & ac) | (ad & ac)) + ab + R[aj] + 2400959708) & 4294967295;
                    ab = ac;
                    ac = ad;
                    ad = S(ae, 30);
                    ae = af;
                    af = ak
                }
                for (aj = 60; aj <= 79; aj++) {
                    ak = (S(af, 5) + (ae^ad^ac) + ab + R[aj] + 3395469782) & 4294967295;
                    ab = ac;
                    ac = ad;
                    ad = S(ae, 30);
                    ae = af;
                    af = ak
                }
                aa = (aa + af) & 4294967295;
                Y = (Y + ae) & 4294967295;
                X = (X + ad) & 4294967295;
                U = (U + ac) & 4294967295;
                T = (T + ab) & 4294967295
            }
            ak = ah(aa) + ah(Y) + ah(X) + ah(U) + ah(T);
            return ak.toLowerCase()
        }
        function I(S, Q, R) {
            if (S === "translate.googleusercontent.com") {
                if (R === "") {
                    R = Q
                }
                Q = D(Q, "u");
                S = b(Q)
            } else {
                if (S === "cc.bingj.com" || S === "webcache.googleusercontent.com" || S.slice(0, 5) === "74.6.") {
                    Q = s.links[0].href;
                    S = b(Q)
                }
            }
            return [S, Q, R]
        }
        function w(R) {
            var Q = R.length;
            if (R.charAt(--Q) === ".") {
                R = R.slice(0, Q)
            }
            if (R.slice(0, 2) === "*.") {
                R = R.slice(1)
            }
            return R
        }
        function P(R) {
            R = R && R.text ? R.text : R;
            if (!l(R)) {
                var Q = s.getElementsByTagName("title");
                if (Q && u(Q[0])) {
                    R = Q[0].text
                }
            }
            return R
        }
        function y(Q, R) {
            if (R) {
                return R
            }
            if (Q.slice( - 9) === "piwik.php") {
                Q = Q.slice(0, Q.length - 9)
            }
            return Q
        }
        function x(U) {
            var Q = "Piwik_Overlay";
            var X = new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)$");
            var S = X.exec(s.referrer);
            if (S) {
                var T = S[1];
                if (T !== String(U)) {
                    return false
                }
                var W = S[2], R = S[3];
                C.name = Q + "###" + W + "###" + R
            }
            var V = C.name.split("###");
            return V.length === 3 && V[0] === Q
        }
        function H(R, W, T) {
            var V = C.name.split("###"), U = V[1], Q = V[2], S = y(R, W);
            h(S + "plugins/Overlay/client/client.js?v=1", function() {
                Piwik_Overlay_Client.initialize(S, T, U, Q)
            })
        }
        function z(ap, aS) {
            var W = I(s.domain, C.location.href, v()), bd = w(W[0]), bs = W[1], a0 = W[2], bt = false, aW = "GET", aY = aW, aK = "application/x-www-form-urlencoded; charset=UTF-8", au = aK, U = ap || "", am = "", aU = "", bi = aS || "", aI, ay = s.title, aA = "7z|aac|apk|ar[cj]|as[fx]|avi|azw3|bin|csv|deb|dmg|docx?|epub|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mobi|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|pptx?|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xlsx?|xml|z|zip", aV = [bd], Z = [], aN = [], ao = [], aT = 500, aa, aq, ab, ad, aC = ["pk_campaign", "piwik_campaign", "utm_campaign", "utm_source", "utm_medium"], ax = ["pk_kwd", "piwik_kwd", "utm_term"], bq = "_pk_", ag, br, ae = false, bl, aE, aH, al = 63072000000, an = 1800000, aJ = 15768000000, aF = true, at = 0, Y = false, aj, aO = {}, V = {}, bm = 200, a6 = {}, bj = {}, a3 = false, a1 = false, aZ, aP, ah, aB = N, a2, aG;
            function a8(bC, bz, by, bB, bx, bA) {
                if (ae) {
                    return 
                }
                var bw;
                if (by) {
                    bw = new Date();
                    bw.setTime(bw.getTime() + by)
                }
                s.cookie = bC + "=" + k(bz) + (by ? ";expires=" + bw.toGMTString() : "") + ";path=" + (bB || "/") + (bx ? ";domain=" + bx : "") + (bA ? ";secure" : "")
            }
            function ak(by) {
                if (ae) {
                    return 0
                }
                var bw = new RegExp("(^|;)[ ]*" + by + "=([^;]*)"), bx = bw.exec(s.cookie);
                return bx ? B(bx[2]) : 0
            }
            function bn(bw) {
                var bx;
                if (ab) {
                    bx = new RegExp("#.*");
                    return bw.replace(bx, "")
                }
                return bw
            }
            function bc(by, bw) {
                var bz = j(bw), bx;
                if (bz) {
                    return bw
                }
                if (bw.slice(0, 1) === "/") {
                    return j(by) + "://" + b(by) + bw
                }
                by = bn(by);
                bx = by.indexOf("?");
                if (bx >= 0) {
                    by = by.slice(0, bx)
                }
                bx = by.lastIndexOf("/");
                if (bx !== by.length - 1) {
                    by = by.slice(0, bx + 1)
                }
                return by + bw
            }
            function aX(bz) {
                var bx, bw, by;
                for (bx = 0; bx < aV.length; bx++) {
                    bw = w(aV[bx].toLowerCase());
                    if (bz === bw) {
                        return true
                    }
                    if (bw.slice(0, 1) === ".") {
                        if (bz === bw.slice(1)) {
                            return true
                        }
                        by = bz.length - bw.length;
                        if ((by > 0) && (bz.slice(by) === bw)) {
                            return true
                        }
                    }
                }
                return false
            }
            function bv(bw) {
                var bx = new Image(1, 1);
                bx.onload = function() {
                    r = 0
                };
                bx.src = U + (U.indexOf("?") < 0 ? "?" : "&") + bw
            }
            function a9(bw) {
                try {
                    var by = C.XMLHttpRequest ? new C.XMLHttpRequest(): C.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP"): null;
                    by.open("POST", U, true);
                    by.onreadystatechange = function() {
                        if (this.readyState === 4 && this.status !== 200) {
                            bv(bw)
                        }
                    };
                    by.setRequestHeader("Content-Type", au);
                    by.send(bw)
                } catch (bx) {
                    bv(bw)
                }
            }
            function aD(by, bx) {
                var bw = new Date();
                if (!bl) {
                    if (aY === "POST") {
                        a9(by)
                    } else {
                        bv(by)
                    }
                    i = bw.getTime() + bx
                }
            }
            function a7(bw) {
                return bq + bw + "." + bi + "." + a2
            }
            function X() {
                if (ae) {
                    return "0"
                }
                if (!u(e.cookieEnabled)) {
                    var bw = a7("testcookie");
                    a8(bw, "1");
                    return ak(bw) === "1" ? "1" : "0"
                }
                return e.cookieEnabled ? "1" : "0"
            }
            function aQ() {
                a2 = aB((ag || bd) + (br || "/")).slice(0, 4)
            }
            function ai() {
                var bx = a7("cvar"), bw = ak(bx);
                if (bw.length) {
                    bw = JSON2.parse(bw);
                    if (E(bw)) {
                        return bw
                    }
                }
                return {}
            }
            function T() {
                if (Y === false) {
                    Y = ai()
                }
            }
            function bh() {
                var bw = new Date();
                aZ = bw.getTime()
            }
            function af(bA, bx, bw, bz, by, bB) {
                a8(a7("id"), bA + "." + bx + "." + bw + "." + bz + "." + by + "." + bB, al, br, ag)
            }
            function S() {
                var bx = new Date(), bw = Math.round(bx.getTime() / 1000), bz = ak(a7("id")), by;
                if (bz) {
                    by = bz.split(".");
                    by.unshift("0")
                } else {
                    if (!aG) {
                        aG = aB((e.userAgent || "") + (e.platform || "") + JSON2.stringify(bj) + bx.getTime() + Math.random()).slice(0, 16)
                    }
                    by = ["1", aG, bw, 0, bw, "", ""]
                }
                return by
            }
            function R() {
                var bw = ak(a7("ref"));
                if (bw.length) {
                    try {
                        bw = JSON2.parse(bw);
                        if (E(bw)) {
                            return bw
                        }
                    } catch (bx) {}
                }
                return ["", "", 0, ""]
            }
            function Q() {
                var bw = ae;
                ae = false;
                a8(a7("id"), "", - 86400, br, ag);
                a8(a7("ses"), "", - 86400, br, ag);
                a8(a7("cvar"), "", - 86400, br, ag);
                a8(a7("ref"), "", - 86400, br, ag);
                ae = bw
            }
            function bg(bA) {
                if (!bA ||!E(bA)) {
                    return 
                }
                var bz = [];
                var by;
                for (by in bA) {
                    if (Object.prototype.hasOwnProperty.call(bA, by)) {
                        bz.push(by)
                    }
                }
                var bB = {};
                bz.sort();
                var bw = bz.length;
                var bx;
                for (bx = 0; bx < bw; bx++) {
                    bB[bz[bx]] = bA[bz[bx]]
                }
                return bB
            }
            function az(by, bW, bX, bz) {
                var bU, bx = new Date(), bG = Math.round(bx.getTime() / 1000), b0, bV, bB, bM, bR, bF, bP, bC, bT, bA = 1024, b2, bJ, bQ = Y, bH = a7("ses"), bI = a7("ref"), b3 = a7("cvar"), bN = S(), bL = ak(bH), bS = R(), bZ = aI || bs, bD, bw;
                if (ae) {
                    Q()
                }
                if (bl) {
                    return ""
                }
                b0 = bN[0];
                bV = bN[1];
                bM = bN[2];
                bB = bN[3];
                bR = bN[4];
                bF = bN[5];
                if (!u(bN[6])) {
                    bN[6] = ""
                }
                bP = bN[6];
                if (!u(bz)) {
                    bz = ""
                }
                var bK = s.characterSet || s.charset;
                if (!bK || bK.toLowerCase() === "utf-8") {
                    bK = null
                }
                bD = bS[0];
                bw = bS[1];
                bC = bS[2];
                bT = bS[3];
                if (!bL) {
                    var bY = an / 1000;
                    if (!bF || (bG - bF) > bY) {
                        bB++;
                        bF = bR
                    }
                    if (!aH ||!bD.length) {
                        for (bU in aC) {
                            if (Object.prototype.hasOwnProperty.call(aC, bU)) {
                                bD = D(bZ, aC[bU]);
                                if (bD.length) {
                                    break
                                }
                            }
                        }
                        for (bU in ax) {
                            if (Object.prototype.hasOwnProperty.call(ax, bU)) {
                                bw = D(bZ, ax[bU]);
                                if (bw.length) {
                                    break
                                }
                            }
                        }
                    }
                    b2 = b(a0);
                    bJ = bT.length ? b(bT) : "";
                    if (b2.length&&!aX(b2) && (!aH ||!bJ.length || aX(bJ))) {
                        bT = a0
                    }
                    if (bT.length || bD.length) {
                        bC = bG;
                        bS = [bD, bw, bC, bn(bT.slice(0, bA))];
                        a8(bI, JSON2.stringify(bS), aJ, br, ag)
                    }
                }
                by += "&idsite=" + bi + "&rec=1&r=" + String(Math.random()).slice(2, 8) + "&h=" + bx.getHours() + "&m=" + bx.getMinutes() + "&s=" + bx.getSeconds() + "&url=" + k(bn(bZ)) + (a0.length ? "&urlref=" + k(bn(a0)) : "") + "&_id=" + bV + "&_idts=" + bM + "&_idvc=" + bB + "&_idn=" + b0 + (bD.length ? "&_rcn=" + k(bD) : "") + (bw.length ? "&_rck=" + k(bw) : "") + "&_refts=" + bC + "&_viewts=" + bF + (String(bP).length ? "&_ects=" + bP : "") + (String(bT).length ? "&_ref=" + k(bn(bT.slice(0, bA))) : "") + (bK ? "&cs=" + k(bK) : "");
                for (bU in bj) {
                    if (Object.prototype.hasOwnProperty.call(bj, bU)) {
                        by += "&" + bU + "=" + bj[bU]
                    }
                }
                if (bW) {
                    by += "&data=" + k(JSON2.stringify(bW))
                } else {
                    if (ad) {
                        by += "&data=" + k(JSON2.stringify(ad))
                    }
                }
                function bE(b4, b5) {
                    var b6 = JSON2.stringify(b4);
                    if (b6.length > 2) {
                        return "&" + b5 + "=" + k(b6)
                    }
                    return ""
                }
                var b1 = bg(aO);
                var bO = bg(V);
                by += bE(b1, "cvar");
                by += bE(bO, "e_cvar");
                if (Y) {
                    by += bE(Y, "_cvar");
                    for (bU in bQ) {
                        if (Object.prototype.hasOwnProperty.call(bQ, bU)) {
                            if (Y[bU][0] === "" || Y[bU][1] === "") {
                                delete Y[bU]
                            }
                        }
                    }
                    a8(b3, JSON2.stringify(Y), an, br, ag)
                }
                if (aF) {
                    if (at) {
                        by += "&gt_ms=" + at
                    } else {
                        if (f && f.timing && f.timing.requestStart && f.timing.responseEnd) {
                            by += "&gt_ms=" + (f.timing.responseEnd - f.timing.requestStart)
                        }
                    }
                }
                af(bV, bM, bB, bG, bF, u(bz) && String(bz).length ? bz : bP);
                a8(bH, "*", an, br, ag);
                by += J(bX);
                if (aU.length) {
                    by += "&" + aU
                }
                if (o(aj)) {
                    by = aj(by)
                }
                return by
            }
            function bb(bz, by, bD, bA, bw, bG) {
                var bB = "idgoal=0", bC, bx = new Date(), bE = [], bF;
                if (String(bz).length) {
                    bB += "&ec_id=" + k(bz);
                    bC = Math.round(bx.getTime() / 1000)
                }
                bB += "&revenue=" + by;
                if (String(bD).length) {
                    bB += "&ec_st=" + bD
                }
                if (String(bA).length) {
                    bB += "&ec_tx=" + bA
                }
                if (String(bw).length) {
                    bB += "&ec_sh=" + bw
                }
                if (String(bG).length) {
                    bB += "&ec_dt=" + bG
                }
                if (a6) {
                    for (bF in a6) {
                        if (Object.prototype.hasOwnProperty.call(a6, bF)) {
                            if (!u(a6[bF][1])) {
                                a6[bF][1] = ""
                            }
                            if (!u(a6[bF][2])) {
                                a6[bF][2] = ""
                            }
                            if (!u(a6[bF][3]) || String(a6[bF][3]).length === 0) {
                                a6[bF][3] = 0
                            }
                            if (!u(a6[bF][4]) || String(a6[bF][4]).length === 0) {
                                a6[bF][4] = 1
                            }
                            bE.push(a6[bF])
                        }
                    }
                    bB += "&ec_items=" + k(JSON2.stringify(bE))
                }
                bB = az(bB, ad, "ecommerce", bC);
                aD(bB, aT)
            }
            function ba(bw, bA, bz, by, bx, bB) {
                if (String(bw).length && u(bA)) {
                    bb(bw, bA, bz, by, bx, bB)
                }
            }
            function bp(bw) {
                if (u(bw)) {
                    bb("", bw, "", "", "", "")
                }
            }
            function aM(bz, bA) {
                var bw = new Date(), by = az("action_name=" + k(P(bz || ay)), bA, "log");
                aD(by, aT);
                if (aa && aq&&!a1) {
                    a1 = true;
                    O(s, "click", bh);
                    O(s, "mouseup", bh);
                    O(s, "mousedown", bh);
                    O(s, "mousemove", bh);
                    O(s, "mousewheel", bh);
                    O(C, "DOMMouseScroll", bh);
                    O(C, "scroll", bh);
                    O(s, "keypress", bh);
                    O(s, "keydown", bh);
                    O(s, "keyup", bh);
                    O(C, "resize", bh);
                    O(C, "focus", bh);
                    O(C, "blur", bh);
                    aZ = bw.getTime();
                    setTimeout(function bx() {
                        var bB;
                        bw = new Date();
                        if ((aZ + aq) > bw.getTime()) {
                            if (aa < bw.getTime()) {
                                bB = az("ping=1", bA, "ping");
                                aD(bB, aT)
                            }
                            setTimeout(bx, aq)
                        }
                    }, aq)
                }
            }
            function ac(by, bA, bw, bz, bB) {
                if (String(by).length === 0 || String(bA).length === 0) {
                    return false
                }
                var bx = az("e_c=" + k(by) + "&e_a=" + k(bA) + (u(bw) ? "&e_n=" + k(bw) : "") + (u(bz) ? "&e_v=" + k(bz) : ""), bB, "event");
                aD(bx, aT)
            }
            function aw(bw, bz, bx, bA) {
                var by = az("search=" + k(bw) + (bz ? "&search_cat=" + k(bz) : "") + (u(bx) ? "&search_count=" + bx : ""), bA, "sitesearch");
                aD(by, aT)
            }
            function aR(bw, bz, by) {
                var bx = az("idgoal=" + bw + (bz ? "&revenue=" + bz : ""), by, "goal");
                aD(bx, aT)
            }
            function bf(bx, bw, bz) {
                var by = az(bw + "=" + k(bn(bx)), bz, "link");
                aD(by, aT)
            }
            function bk(bx, bw) {
                if (bx !== "") {
                    return bx + bw.charAt(0).toUpperCase() + bw.slice(1)
                }
                return bw
            }
            function av(bB) {
                var bA, bw, bz = ["", "webkit", "ms", "moz"], by;
                if (!aE) {
                    for (bw = 0; bw < bz.length; bw++) {
                        by = bz[bw];
                        if (Object.prototype.hasOwnProperty.call(s, bk(by, "hidden"))) {
                            if (s[bk(by, "visibilityState")] === "prerender") {
                                bA = true
                            }
                            break
                        }
                    }
                }
                if (bA) {
                    O(s, by + "visibilitychange", function bx() {
                        s.removeEventListener(by + "visibilitychange", bx, false);
                        bB()
                    });
                    return 
                }
                bB()
            }
            function ar(by, bx) {
                var bz, bw = "(^| )(piwik[_-]" + bx;
                if (by) {
                    for (bz = 0; bz < by.length; bz++) {
                        bw += "|" + by[bz]
                    }
                }
                bw += ")( |$)";
                return new RegExp(bw)
            }
            function be(bz, bw, bA) {
                var by = ar(aN, "download"), bx = ar(ao, "link"), bB = new RegExp("\\.(" + aA + ")([?&#]|$)", "i");
                return bx.test(bz) ? "link" : (by.test(bz) || bB.test(bw) ? "download" : (bA ? 0 : "link"))
            }
            function a5(bB) {
                var bz, bx, bw;
                bz = bB.parentNode;
                while (bz !== null && u(bz)) {
                    bx = bB.tagName.toUpperCase();
                    if (bx === "A" || bx === "AREA") {
                        break
                    }
                    bB = bz;
                    bz = bB.parentNode
                }
                if (u(bB.href)) {
                    var bC = bB.hostname || b(bB.href), bD = bC.toLowerCase(), by = bB.href.replace(bC, bD), bA = new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):", "i");
                    if (!bA.test(by)) {
                        bw = be(bB.className, by, aX(bD));
                        if (bw) {
                            by = g(by);
                            bf(by, bw)
                        }
                    }
                }
            }
            function bu(bw) {
                var bx, by;
                bw = bw || C.event;
                bx = bw.which || bw.button;
                by = bw.target || bw.srcElement;
                if (bw.type === "click") {
                    if (by) {
                        a5(by)
                    }
                } else {
                    if (bw.type === "mousedown") {
                        if ((bx === 1 || bx === 2) && by) {
                            aP = bx;
                            ah = by
                        } else {
                            aP = ah = null
                        }
                    } else {
                        if (bw.type === "mouseup") {
                            if (bx === aP && by === ah) {
                                a5(by)
                            }
                            aP = ah = null
                        }
                    }
                }
            }
            function a4(bx, bw) {
                if (bw) {
                    O(bx, "mouseup", bu, false);
                    O(bx, "mousedown", bu, false)
                } else {
                    O(bx, "click", bu, false)
                }
            }
            function aL(bx) {
                if (!a3) {
                    a3 = true;
                    var by, bw = ar(Z, "ignore"), bz = s.links;
                    if (bz) {
                        for (by = 0; by < bz.length; by++) {
                            if (!bw.test(bz[by].className)) {
                                a4(bz[by], bx)
                            }
                        }
                    }
                }
            }
            function bo() {
                var bx, by, bz = {
                    pdf: "application/pdf",
                    qt: "video/quicktime",
                    realp: "audio/x-pn-realaudio-plugin",
                    wma: "application/x-mplayer2",
                    dir: "application/x-director",
                    fla: "application/x-shockwave-flash",
                    java: "application/x-java-vm",
                    gears: "application/x-googlegears",
                    ag: "application/x-silverlight"
                }, bw = (new RegExp("Mac OS X.*Safari/")).test(e.userAgent) ? C.devicePixelRatio || 1: 1;
                if (!((new RegExp("MSIE")).test(e.userAgent))) {
                    if (e.mimeTypes && e.mimeTypes.length) {
                        for (bx in bz) {
                            if (Object.prototype.hasOwnProperty.call(bz, bx)) {
                                by = e.mimeTypes[bz[bx]];
                                bj[bx] = (by && by.enabledPlugin) ? "1" : "0"
                            }
                        }
                    }
                    if (typeof navigator.javaEnabled !== "unknown" && u(e.javaEnabled) && e.javaEnabled()) {
                        bj.java = "1"
                    }
                    if (o(C.GearsFactory)) {
                        bj.gears = "1"
                    }
                    bj.cookie = X()
                }
                bj.res = F.width * bw + "x" + F.height * bw
            }
            bo();
            aQ();
            return {
                getVisitorId: function() {
                    return (S())[1]
                },
                getVisitorInfo: function() {
                    return S()
                },
                getAttributionInfo: function() {
                    return R()
                },
                getAttributionCampaignName: function() {
                    return R()[0]
                },
                getAttributionCampaignKeyword: function() {
                    return R()[1]
                },
                getAttributionReferrerTimestamp: function() {
                    return R()[2]
                },
                getAttributionReferrerUrl: function() {
                    return R()[3]
                },
                setTrackerUrl: function(bw) {
                    U = bw
                },
                setSiteId: function(bw) {
                    bi = bw
                },
                setCustomData: function(bw, bx) {
                    if (E(bw)) {
                        ad = bw
                    } else {
                        if (!ad) {
                            ad = []
                        }
                        ad[bw] = bx
                    }
                },
                getCustomData: function() {
                    return ad
                },
                setCustomRequestProcessing: function(bw) {
                    aj = bw
                },
                appendToTrackingUrl: function(bw) {
                    aU = bw
                },
                getRequest: function(bw) {
                    return az(bw)
                },
                addPlugin: function(bw, bx) {
                    a[bw] = bx
                },
                setCustomVariable: function(bx, bw, bA, by) {
                    var bz;
                    if (!u(by)) {
                        by = "visit"
                    }
                    if (!u(bw)) {
                        return 
                    }
                    if (!u(bA)) {
                        bA = ""
                    }
                    if (bx > 0) {
                        bw=!l(bw) ? String(bw) : bw;
                        bA=!l(bA) ? String(bA) : bA;
                        bz = [bw.slice(0, bm), bA.slice(0, bm)];
                        if (by === "visit" || by === 2) {
                            T();
                            Y[bx] = bz
                        } else {
                            if (by === "page" || by === 3) {
                                aO[bx] = bz
                            } else {
                                if (by === "event") {
                                    V[bx] = bz
                                }
                            }
                        }
                    }
                },
                getCustomVariable: function(bx, by) {
                    var bw;
                    if (!u(by)) {
                        by = "visit"
                    }
                    if (by === "page" || by === 3) {
                        bw = aO[bx]
                    } else {
                        if (by === "event") {
                            bw = V[bx]
                        } else {
                            if (by === "visit" || by === 2) {
                                T();
                                bw = Y[bx]
                            }
                        }
                    }
                    if (!u(bw) || (bw && bw[0] === "")) {
                        return false
                    }
                    return bw
                },
                deleteCustomVariable: function(bw, bx) {
                    if (this.getCustomVariable(bw, bx)) {
                        this.setCustomVariable(bw, "", "", bx)
                    }
                },
                setLinkTrackingTimer: function(bw) {
                    aT = bw
                },
                setDownloadExtensions: function(bw) {
                    aA = bw
                },
                addDownloadExtensions: function(bw) {
                    aA += "|" + bw
                },
                setDomains: function(bw) {
                    aV = l(bw) ? [bw] : bw;
                    aV.push(bd)
                },
                setIgnoreClasses: function(bw) {
                    Z = l(bw) ? [bw] : bw
                },
                setRequestMethod: function(bw) {
                    aY = bw || aW
                },
                setRequestContentType: function(bw) {
                    au = bw || aK
                },
                setReferrerUrl: function(bw) {
                    a0 = bw
                },
                setCustomUrl: function(bw) {
                    aI = bc(bs, bw)
                },
                setDocumentTitle: function(bw) {
                    ay = bw
                },
                setAPIUrl: function(bw) {
                    am = bw
                },
                setDownloadClasses: function(bw) {
                    aN = l(bw) ? [bw] : bw
                },
                setLinkClasses: function(bw) {
                    ao = l(bw) ? [bw] : bw
                },
                setCampaignNameKey: function(bw) {
                    aC = l(bw) ? [bw] : bw
                },
                setCampaignKeywordKey: function(bw) {
                    ax = l(bw) ? [bw] : bw
                },
                discardHashTag: function(bw) {
                    ab = bw
                },
                setCookieNamePrefix: function(bw) {
                    bq = bw;
                    Y = ai()
                },
                setCookieDomain: function(bw) {
                    ag = w(bw);
                    aQ()
                },
                setCookiePath: function(bw) {
                    br = bw;
                    aQ()
                },
                setVisitorCookieTimeout: function(bw) {
                    al = bw * 1000
                },
                setSessionCookieTimeout: function(bw) {
                    an = bw * 1000
                },
                setReferralCookieTimeout: function(bw) {
                    aJ = bw * 1000
                },
                setConversionAttributionFirstReferrer: function(bw) {
                    aH = bw
                },
                disableCookies: function() {
                    ae = true;
                    bj.cookie = "0"
                },
                deleteCookies: function() {
                    Q()
                },
                setDoNotTrack: function(bx) {
                    var bw = e.doNotTrack || e.msDoNotTrack;
                    bl = bx && (bw === "yes" || bw === "1");
                    if (bl) {
                        this.disableCookies()
                    }
                },
                addListener: function(bx, bw) {
                    a4(bx, bw)
                },
                enableLinkTracking: function(bw) {
                    if (n) {
                        aL(bw)
                    } else {
                        A.push(function() {
                            aL(bw)
                        })
                    }
                },
                enableJSErrorTracking: function() {
                    if (bt) {
                        return 
                    }
                    bt = true;
                    var bw = C.onerror;
                    C.onerror = function(bB, bz, by, bA, bx) {
                        av(function() {
                            var bC = "JavaScript Errors";
                            var bD = bz + ":" + by;
                            if (bA) {
                                bD += ":" + bA
                            }
                            ac(bC, bD, bB)
                        });
                        if (bw) {
                            return bw(bB, bz, by, bA, bx)
                        }
                        return false
                    }
                },
                disablePerformanceTracking: function() {
                    aF = false
                },
                setGenerationTimeMs: function(bw) {
                    at = parseInt(bw, 10)
                },
                setHeartBeatTimer: function(by, bx) {
                    var bw = new Date();
                    aa = bw.getTime() + by * 1000;
                    aq = bx * 1000
                },
                killFrame: function() {
                    if (C.location !== C.top.location) {
                        C.top.location = C.location
                    }
                },
                redirectFile: function(bw) {
                    if (C.location.protocol === "file:") {
                        C.location = bw
                    }
                },
                setCountPreRendered: function(bw) {
                    aE = bw
                },
                trackGoal: function(bw, by, bx) {
                    av(function() {
                        aR(bw, by, bx)
                    })
                },
                trackLink: function(bx, bw, by) {
                    av(function() {
                        bf(bx, bw, by)
                    })
                },
                trackPageView: function(bw, bx) {
                    if (x(bi)) {
                        av(function() {
                            H(U, am, bi)
                        })
                    } else {
                        av(function() {
                            aM(bw, bx)
                        })
                    }
                },
                trackEvent: function(bx, bz, bw, by) {
                    av(function() {
                        ac(bx, bz, bw, by)
                    })
                },
                trackSiteSearch: function(bw, by, bx) {
                    av(function() {
                        aw(bw, by, bx)
                    })
                },
                setEcommerceView: function(bz, bw, by, bx) {
                    if (!u(by) ||!by.length) {
                        by = ""
                    } else {
                        if (by instanceof Array) {
                            by = JSON2.stringify(by)
                        }
                    }
                    aO[5] = ["_pkc", by];
                    if (u(bx) && String(bx).length) {
                        aO[2] = ["_pkp", bx]
                    }
                    if ((!u(bz) ||!bz.length) && (!u(bw) ||!bw.length)) {
                        return 
                    }
                    if (u(bz) && bz.length) {
                        aO[3] = ["_pks", bz]
                    }
                    if (!u(bw) ||!bw.length) {
                        bw = ""
                    }
                    aO[4] = ["_pkn", bw]
                },
                addEcommerceItem: function(bA, bw, by, bx, bz) {
                    if (bA.length) {
                        a6[bA] = [bA, bw, by, bx, bz]
                    }
                },
                trackEcommerceOrder: function(bw, bA, bz, by, bx, bB) {
                    ba(bw, bA, bz, by, bx, bB)
                },
                trackEcommerceCartUpdate: function(bw) {
                    bp(bw)
                }
            }
        }
        function t() {
            return {
                push: L
            }
        }
        O(C, "beforeunload", M, false);
        m();
        Date.prototype.getTimeAlias = Date.prototype.getTime;
        G = new z();
        var p = {
            setTrackerUrl: 1,
            setAPIUrl: 1,
            setSiteId: 1
        };
        var d;
        for (r = 0; r < _paq.length; r++) {
            d = _paq[r][0];
            if (p[d]) {
                L(_paq[r]);
                delete _paq[r];
                if (p[d] > 1) {
                    if (console !== undefined && console && console.error) {
                        console.error("The method " + d + ' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Piwik trackers documentation: http://developer.piwik.org/api-reference/tracking-javascript#multiple-piwik-trackers')
                    }
                }
                p[d]++
            }
        }
        for (r = 0; r < _paq.length; r++) {
            if (_paq[r]) {
                L(_paq[r])
            }
        }
        _paq = new t();
        c = {
            addPlugin: function(Q, R) {
                a[Q] = R
            },
            getTracker: function(Q, R) {
                return new z(Q, R)
            },
            getAsyncTracker: function() {
                return G
            }
        };
        if (typeof define === "function" && define.amd) {
            define("piwik", [], function() {
                return c
            })
        }
        return c
    }())
}
if (window && window.piwikAsyncInit) {
    window.piwikAsyncInit()
}(function() {
    var a = (typeof AnalyticsTracker);
    if (a === "undefined") {
        AnalyticsTracker = Piwik
    }
}());
if (typeof piwik_log !== "function") {
    piwik_log = function(b, f, d, g) {
        function a(h) {
            try {
                return eval("piwik_" + h)
            } catch (i) {}
            return 
        }
        var c, e = Piwik.getTracker(d, f);
        e.setDocumentTitle(b);
        e.setCustomData(g);
        c = a("tracker_pause");
        if (c) {
            e.setLinkTrackingTimer(c)
        }
        c = a("download_extensions");
        if (c) {
            e.setDownloadExtensions(c)
        }
        c = a("hosts_alias");
        if (c) {
            e.setDomains(c)
        }
        c = a("ignore_classes");
        if (c) {
            e.setIgnoreClasses(c)
        }
        e.trackPageView();
        if (a("install_tracker")) {
            piwik_track = function(i, k, j, h) {
                e.setSiteId(k);
                e.setTrackerUrl(j);
                e.trackLink(i, h)
            };
            e.enableLinkTracking()
        }
    };
    /*! @license-end */
};
