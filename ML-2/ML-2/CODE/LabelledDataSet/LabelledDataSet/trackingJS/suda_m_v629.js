(function() {
    var h = "clickmap_sample_iframe_session_ref_btn_notop_common_enum_reload:6.33";
    var f = "";
    var M = "http://beacon.sina.com.cn/b.gif";
    var l = 0, o = 3, q = 1;
    var j = 100;
    var x = 0;
    var D = 965;
    var z = 2;
    var s = 0;
    var I = 0;
    var d = "Apache";
    var B = "SINAGLOBAL";
    var y = "SUP";
    var C = "";
    var b = "";
    var A = "";
    var e = "";
    var k = document.referrer;
    var E = document.URL;
    var m = 0;
    if ("" == k) {
        k = "newpage"
    }
    function w(Q) {
        var R = 0;
        R = Q.indexOf("#");
        if (R > 0) {
            return Q.substring(0, R)
        } else {
            return Q
        }
    }
    function N(R) {
        var T = 0;
        var Q = 0;
        var S = R;
        while (1) {
            T = S.indexOf("<");
            Q = S.indexOf(">", T);
            if (T >= 0 && Q >= 0 && Q > T) {
                S = S.substring(0, T) + S.substring(Q + 1, S.length)
            } else {
                break
            }
        }
        return S
    }
    function O() {
        if ("" != C) {
            return C
        }
        var T = "";
        var R = E.toLowerCase();
        var Q = R.indexOf(".sina.");
        if (Q > 0) {
            T = "sina.com.cn"
        } else {
            var S = R.indexOf(".");
            if (S > 0) {
                S = S + 1
            } else {
                return ""
            }
            Q = R.indexOf("/", S);
            if (Q < 0) {
                Q = R.length
            }
            T = R.substring(S, Q)
        }
        C = T;
        return T
    }
    function H(R) {
        var S = document.cookie.indexOf(R + "=");
        if ( - 1 == S) {
            return ""
        }
        S = document.cookie.indexOf("=", S) + 1;
        var Q = document.cookie.indexOf(";", S);
        if (0 >= Q) {
            Q = document.cookie.length
        }
        ckValue = document.cookie.substring(S, Q);
        return ckValue
    }
    function n(T, R, Q) {
        if (R != null) {
            _suds_cmp_domainRoot = O();
            if (("undefined" == Q) || (null == Q)) {
                document.cookie = T + "=" + R + "; domain=" + _suds_cmp_domainRoot + "; path=/"
            } else {
                var S = new Date();
                var U = S.getTime();
                U = U + 86400000 * Q;
                S.setTime(U);
                U = S.getTime();
                document.cookie = T + "=" + R + "; domain=" + _suds_cmp_domainRoot + "; expires=" + S.toUTCString() + "; path=/"
            }
        }
    }
    function p() {
        ckTmp = H("Apache");
        if ("" == ckTmp) {
            var Q = new Date();
            ckTmp = Q.getTime() + Math.random()
        }
        return ckTmp
    }
    function L(V, R, T, S) {
        if (V == "") {
            return ""
        }
        S = (S == "") ? "=" : S;
        R += S;
        var U = V.indexOf(R);
        if (U < 0) {
            return ""
        }
        U += R.length;
        var Q = V.indexOf(T, U);
        if (Q < U) {
            Q = V.length
        }
        return V.substring(U, Q)
    }
    function u() {
        if ("" == b) {
            b = p(d)
        }
        if ("" == A) {
            A = H(B)
        }
        if ("" == e) {
            var Q = unescape(H(y));
            e = L(Q, "uid", "&", "")
        }
    }
    function P() {
        m = m + 1;
        var R = Math.floor(Math.random() * 100);
        if ((R < j) && (m <= 1)) {
            u();
            try {
                if (!document.addEventListener) {
                    document.attachEvent("onclick", G);
                    window.attachEvent("onunload", J);
                    document.attachEvent("onstop", t);
                    window.attachEvent("onload", a)
                } else {
                    document.addEventListener("click", G, false);
                    window.addEventListener("unload", J, false);
                    document.addEventListener("stop", t, false);
                    window.addEventListener("load", a, false)
                }
            } catch (Q) {}
            window.setTimeout(a, 500);
            k = escape(w(window.document.referrer));
            E = escape(w(window.document.URL))
        } else {
            return 0
        }
    }
    function r() {
        var Q = "";
        if ("" != f) {
            Q = E + "|*|" + f + "|*|" + b + "|*|" + A + "|*|" + k + "|*|" + x + "|*|" + e;
            var S = M + "?" + Q;
            var R = new Image();
            SUDA.img = R;
            R.src = S;
            f = "";
            l = 0
        }
    }
    function v(Q) {
        f = f + Q;
        l++;
        if (l >= q) {
            r();
            if (q < o) {
                q++
            }
        }
    }
    function J() {
        r()
    }
    function t() {
        r()
    }
    function c(R) {
        var Q = new RegExp("^blk_[A-Za-z0-9]+_[0-9]+$");
        if (Q.test(R)) {
            return true
        } else {
            return false
        }
    }
    function K(T, R, Q) {
        for (var S = 0; S < Q; S++) {
            if (!T.parentNode) {
                return null
            }
            T = T.parentNode;
            if (R == T.tagName) {
                break
            }
        }
        if (S >= 4) {
            return null
        } else {
            return T
        }
    }
    function G(ab) {
        var S = ab || event;
        var U = S.srcElement || S.target;
        var aa = "";
        var Z = "";
        var T = "";
        var Q = "";
        if (U == null && U == document) {
            return 
        }
        var ae = "";
        var ag = "";
        var W = "";
        if ("A" == U.tagName) {
            ae = "txt";
            ag = N(U.innerHTML);
            W = escape(w(U.href))
        } else {
            if ("FONT" == U.tagName || "B" == U.tagName || "P" == U.tagName || "STRONG" == U.tagName || "SPAN" == U.tagName) {
                ae = "txt";
                ag = N(U.innerHTML);
                var V = K(U, "A", 4);
                if (!V) {
                    return 
                }
                W = escape(w(V.href))
            } else {
                if ("IMG" == U.tagName) {
                    ae = "img";
                    ag = "";
                    W = escape(w(U.src))
                } else {
                    if ("INPUT" == U.tagName) {
                        if ("image" == U.type || "submit" == U.type) {
                            ae = "submit";
                            ag = "";
                            W = "";
                            var V = K(U, "FROM", 4);
                            if (V) {
                                W = V.action
                            }
                        } else {
                            if ("button" == U.type) {
                                ae = "button";
                                ag = U.value;
                                W = "name_" + U.name
                            }
                        }
                    } else {
                        if ("DIV" == U.tagName) {
                            if (U.title != "") {
                                ae = "div";
                                ag = N(U.title);
                                W = ""
                            }
                        } else {
                            if ("CITE" == U.tagName) {
                                ae = "cite";
                                ag = N(U.innerHTML);
                                W = ""
                            } else {
                                if ("AREA" == U.tagName) {
                                    ae = "area";
                                    ag = U.alt;
                                    W = U.href
                                }
                            }
                        }
                    }
                }
            }
        }
        if ("" != ae) {
            if (S.pageX == null) {
                var ad = document.documentElement, Y = document.body;
                if (S.clientX == null) {
                    S.clientX = 0;
                    S.clientY = 0
                }
                aa = S.clientX + (ad && ad.scrollLeft || Y && Y.scrollLeft || 0) - (ad && ad.clientLeft || Y && Y.clientLeft || 0);
                Z = S.clientY + (ad && ad.scrollTop || Y && Y.scrollTop || 0) - (ad && ad.clientTop || Y && Y.clientTop || 0)
            } else {
                aa = S.pageX;
                Z = S.pageY
            }
            if (2 == z) {
                if (window.document.body.offsetWidth > D + 12) {
                    aa = aa - Math.ceil((window.document.body.offsetWidth - D) / 2)
                }
            }
            if (3 == z) {
                if (window.document.body.offsetWidth > D + 12) {
                    aa = aa - Math.ceil((window.document.body.offsetWidth - D))
                }
            }
            var Q = "";
            try {
                for (i = 0; i < 10; i++) {
                    if (U == document) {
                        break
                    }
                    var af = U.getAttribute("data-sudaclick");
                    if (af) {
                        Q = af;
                        break
                    }
                    if (c(U.id)) {
                        Q = U.id;
                        break
                    }
                    if (!U.parentNode) {
                        break
                    }
                    U = U.parentNode
                }
            } catch (ac) {}
            var R = new Date();
            var X = R.getTime();
            var T = "t=" + ae + ",s=" + ag + ",h=" + W + ",ct=" + X + ",x=" + aa + ",y=" + Z + ",aid=" + Q + "|";
            v(T)
        }
    }
    function a() {
        g(window)
    }
    function g(T) {
        var R = T.frames;
        for (var Q = 0; Q < R.length; Q++) {
            try {
                if (R[Q].location != "") {
                    if (R[Q].document != null) {
                        if (!document.addEventListener) {
                            R[Q].document.detachEvent("onclick", G);
                            R[Q].document.attachEvent("onclick", G)
                        } else {
                            R[Q].document.removeEventListener("click", G, false);
                            R[Q].document.addEventListener("click", G, false)
                        }
                        g(R[Q])
                    }
                }
            } catch (S) {}
        }
    }
    function F(S, R, V, W) {
        var Q = arguments.length;
        var U = new RegExp("^\\d{1,4}|[1-9]\d*.\d*|0.\d*[1-9]\d*$");
        if (Q > 0) {
            for (var T = 0; T < Q; T++) {
                if (U.test(arguments[T])) {
                    if (T == 0) {
                        x = arguments[T]
                    } else {
                        if (T == 1) {
                            j = arguments[T]
                        } else {
                            if (T == 2) {
                                D = arguments[T]
                            } else {
                                if (T == 3) {
                                    if (arguments[T] < 3) {
                                        z = arguments[T]
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        P()
    }
    window.SUDA = window.SUDA || [];
    SUDA.suds_init = function() {
        F.apply(null, arguments)
    }
})();
function suds_init(b, a, c, d) {
    SUDA.suds_init(b, a, c, d)
};
