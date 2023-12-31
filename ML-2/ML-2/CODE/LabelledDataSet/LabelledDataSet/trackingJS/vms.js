(function() {
    var e = document, d = window;
    d._bcvmw = {
        chatWindow: function(n, q, o) {
            if (!q && b()) {
                return 
            }
            var g, t = null, v = d.pageViewer, m = d.hideBox || d.bt_hideAnimationImpl, h = /(ipad|ipod|iphone).*crios\/[0-9]/i.test(navigator.userAgent) || /(android 2|android 3)/i.test(navigator.userAgent) || /iemobile\/9/i.test(navigator.userAgent) || /(msie 7)/i.test(navigator.userAgent) || /(msie 8|msie 9)/i.test(navigator.userAgent) && document.compatMode != "CSS1Compat", u = /(msie 6|opera mini|opera mobi.*presto)/i.test(navigator.userAgent), p = v && v.getParameter("OverrideLayer", n) == "true", j = h || u || v && v.getParameter("OverridePopup", n) == "true";
            if (!n.invite && m) {
                m(2)
            }
            if (n.url&&!n.invite) {
                g = n.url
            } else {
                g = n.url || "https://livechat" + d._bcvm.host + "/bc." + n.type + "?resize=true" + (n.bdid ? "&cbdid=" + n.bdid : (n.cwdid ? "&cwdid=" + n.cwdid : "")) + "&wdid=" + (v.getParameter("WebsiteDefID", n) || v.getParameter("WebsiteID", n)) + "&url=" + (window.encodeURIComponent || window.escape)(e.location.href);
                g += "&curl=" + v.getParameter("CustomUrl", n) + "&" + v.getParameter("WindowParameters", n);
                g += (n.rdid ? "&rdid=" + n.rdid : "") + (n.roid ? "&roid=" + n.roid : "");
                g += (n.group ? "&group=" + n.group : "");
                if (v && v.link) {
                    g = v.link(g, true)
                }
            }
            if (!o&&!q) {
                o = v && v.getParameter("SecureParameters", n)
            }
            if (typeof o == "function") {
                o = o(function(w) {
                    _bcvmw.chatWindow(n, q, w)
                }, "chat");
                if (!o) {
                    return 
                }
            }
            if (o) {
                t = t || {
                    localsecured: [],
                    secured: [],
                    hash: []
                };
                t.secured.push(o)
            }
            if (n.secured || n.localsecured) {
                t = t || {
                    localsecured: [],
                    secured: [],
                    hash: []
                };
                if (n.secured) {
                    t.secured.push(n.secured)
                }
                if (n.hash) {
                    t.hash.push(n.hash)
                }
                if (n.localsecured) {
                    t.localsecured.push(n.localsecured)
                }
            }
            var s = function(D) {
                g = D ? g.replace(/bc\.chat/, "mobilechat/visitor.jsp") + (u ? "&pt=9" : "") : g;
                var B = t ? "about:blank": g, x = n.type + n.bdid;
                if (/OS X.*CriOS.*Mobile/i.test(navigator.userAgent) && n.invite) {
                    window.open(B, x)
                } else {
                    window.open(B, x, (n.open || v.getParameter("OpenParameters", n) || "toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1") + ",width=" + (v.getParameter("ChatWidth", n) || n.width || "640") + ",height=" + (v.getParameter("ChatHeight", n) || n.height || "480"))
                }
                if (t) {
                    var A = e.createElement("form");
                    A.target = x;
                    A.method = "post";
                    A.action = g;
                    for (var z in t) {
                        for (var y = 0; y < t[z].length; y++) {
                            var w = e.createElement("input");
                            w.type = "hidden";
                            w.name = z;
                            w.value = t[z][y];
                            A.appendChild(w)
                        }
                    }
                    var C = function() {
                        try {
                            e.body.appendChild(A)
                        } catch (E) {
                            try {
                                e.body.insertBefore(A, e.body.firstChild)
                            } catch (E) {
                                setTimeout(C, 1000);
                                return 
                            }
                        }
                        A.submit()
                    };
                    C()
                }
            };
            if (!n.embed&&!p || j) {
                s(n.embed || p)
            } else {
                var i = q || (Math.floor(Math.random() * 1000000000) + "" + Math.floor(Math.random() * 1000000000));
                var r = g.replace(/bc\.chat.*/, "").replace(/mobilechat.*/, "") + "mobilechat/launcher.jsp?v=" + (n.version || "1") + (n.cwdid ? "&cwdid=" + n.cwdid : "") + "&cid=" + i;
                var l = n.url&&!n.invite ? g: g.replace(/bc.chat/, "mobilechat/container.jsp");
                d.bcConfig = d.bcConfig || {};
                bcConfig.frame = true;
                bcConfig.aid = g.match(/\/aid\/([0-9]+)\//)[1];
                bcConfig.cid = q;
                bcConfig.cwdid = n.cwdid || "";
                bcConfig.obj = {
                    url: l,
                    hostUrl: e.location.href,
                    post: t
                };
                bcConfig.loader = r.replace(/launcher.jsp.*/, "loader.jsp");
                bcConfig.launchPopup = s;
                var k = e.createElement("script");
                k.type = "text/javascript";
                k.src = r;
                e.getElementsByTagName("head")[0].appendChild(k)
            }
        }
    };
    var b = function() {
        var o = e.cookie, l, k = o.indexOf("_bc-curl="), h, m, n, j, g;
        while (k >= 0) {
            l = o.indexOf(";", k + 1);
            h = l==-1 ? o.substring(k + 9) : o.substring(k + 9, l);
            m = h.split(":");
            if (m.length > 1) {
                n = m[0];
                g = m[1];
                j = (window.decodeURIComponent || window.unescape)(m[2]);
                d._bcvmw.chatWindow({
                    url: j,
                    cwdid: g,
                    version: m[5],
                    embed: true
                }, n);
                return true
            }
            k = o.indexOf("_bc-curl=", k + 9)
        }
        return false
    };
    var f = e.location.href, a = f.indexOf("#reboot-cid=");
    if (a!=-1) {
        var c = (window.decodeURIComponent || window.unescape)(f.substring(a + 12)).split(":");
        if (c.length > 1) {
            setTimeout(function() {
                d._bcvmw.chatWindow({
                    cwdid: c[1],
                    version: 1,
                    embed: true,
                    type: "chat"
                }, c[0])
            }, 1000)
        }
        e.location.href = f.replace(/#.*/, "#");
        return 
    }
    var f = e.location.href, a = f.indexOf("#bc-curl=");
    if (a!=-1) {
        setTimeout(function() {
            d._bcvm.setCookie("_bc-curl", (window.decodeURIComponent || window.unescape)(f.substring(a + 9)));
            e.location.href = f.replace(/#.*/, "#");
            b()
        }, 1000);
        return 
    }
    b()
})();
window._bcvmf = {
    divs: [],
    windows: {},
    floatButton: function(b) {
        if (window.pageViewer && pageViewer.removeButton) {
            pageViewer.removeButton(b.bdid)
        }
        if (!b.img) {
            return 
        }
        var K = window, f = document, t = f.body, O = f.documentElement, C = Math.random() + "", N = function() {
            return new Date().getTime()
        }, E = b.x, D = b.y, k = b.dl, d = b.dt, i = b.px, g = b.py, A = b.fix, G = 1000000000, B = 1000000000, P, u, h, R, H = document.compatMode == "CSS1Compat", M = b.si != null && b.si >= 0, m, s, r, e, J = f.getElementById("bcvml"), Q = function() {
            return Math.max(h.width, h.offsetWidth || 0, h.naturalWidth || 0)
        }, w = function() {
            return Math.max(h.height, h.offsetHeight || 0, h.naturalHeight || 0)
        }, L = function() {
            return (k ? i : 100 - i) / 100 * (((H^!A) && O.clientWidth || t && t.clientWidth) - Math.min(G, Q())) + (k ? E : - E) + (!A || H ? 0 : Math.max(t && t.scrollLeft || 0, O && O.scrollLeft || 0))
        }, I = function() {
            return (d ? g : 100 - g) / 100 * (((H^!A) && O.clientHeight || t && t.clientHeight) - Math.min(B, w())) + (d ? D : - D) + (!A || H ? 0 : Math.max(t && t.scrollTop || 0, O && O.scrollTop || 0))
        }, F = function() {
            u.style.width = Q() + "px";
            u.style.height = w() + "px";
            if (!M) {
                P.style.width = Q() + "px";
                P.style.height = w() + "px"
            }
            s = L();
            r = I();
            P.style.left = s + "px";
            P.style.top = r + "px";
            if (M) {
                m(true)
            }
        };
        P = f.createElement("div");
        u = f.createElement("div");
        h = new Image();
        R = f.createElement("a");
        P.setAttribute("class", "bcFloat");
        P.style.display = "none";
        u.style.position = "absolute";
        R.setAttribute("href", "#");
        R.onclick = function() {
            K._bcvmw.chatWindow(b);
            return false
        };
        if (M) {
            var o = b.sl, l = b.st, q = 0, v = 0, z, p = b.si, j = 100, n = function(a) {
                return 1 - Math.E * Math.exp( - 1 / (1 - a * a))
            };
            G = o;
            B = l;
            m = function(U) {
                var a = G, S = B, y = Math.min(1, (N() - v) / p), x = q ? Q(): o || Q(), T = q ? w(): l || w();
                if (q) {
                    y = 1 - y
                }
                y = n(y);
                G = y * Math.min(Q(), o || Q()) + (1 - y) * Q();
                B = y * Math.min(w(), l || w()) + (1 - y) * w();
                P.style.width = G + "px";
                P.style.height = B + "px";
                if (k) {
                    u.style.marginLeft = (G - Q()) + "px"
                }
                if (d) {
                    u.style.marginTop = (B - w()) + "px"
                }
                if (G != x || B != T) {
                    z = setTimeout(m, j)
                }
                s += a - G;
                r += S - B;
                if (G != a&&!k) {
                    P.style.left = s + "px"
                }
                if (B != S&&!d) {
                    P.style.top = r + "px"
                }
            };
            u.onmouseover = function() {
                v = N() - p * (1 - Math.min(1, (N() - v) / p));
                q = 1;
                if (z) {
                    clearTimeout(z)
                }
                z = setTimeout(m, j)
            };
            u.onmouseout = function() {
                v = N() - p * (1 - Math.min(1, (N() - v) / p));
                q = 0;
                if (z) {
                    clearTimeout(z)
                }
                z = setTimeout(m, j)
            }
        }
        P.appendChild(u);
        u.appendChild(R);
        R.appendChild(h);
        _bcvmf.divs.push(P);
        h.setAttribute("id", C);
        h.setAttribute("border", 0);
        h.onload = function() {
            P.style.textAlign = "left";
            P.style.zIndex = 3141591;
            P.style.overflow = "hidden";
            P.style.position = H && A ? "fixed" : "absolute";
            F();
            P.style.display = "block";
            _bcvmf.updateFloatVisibility()
        };
        h.src = b.img;
        var c = function() {
            try {
                f.body.appendChild(P)
            } catch (a) {
                try {
                    f.body.insertBefore(P, f.body.firstChild)
                } catch (a) {
                    setTimeout(c, 1000);
                    return 
                }
            }
            t = f.body;
            F()
        };
        c();
        _bcvm.addEvent(K, "resize", F);
        if (A&&!H) {
            _bcvm.addEvent(K, "scroll", F)
        }
        if (K.pageViewer && pageViewer.addButton) {
            pageViewer.addButton({
                parents: [P],
                id: C,
                bdid: b.bdid,
                type: b.type,
                roid: b.roid,
                rdid: b.rdid
            }, true)
        }
    },
    updateFloatVisibility: function(a, d) {
        var c = false;
        if (a) {
            _bcvmf.windows[a] = d
        }
        for (var b in _bcvmf.windows) {
            if (!_bcvmf.windows[b]) {
                c = true
            }
        }
        for (var b = 0; b < _bcvmf.divs.length; b++) {
            _bcvmf.divs[b].style.display = c ? "none" : "block"
        }
    }
};
window._bcvmb = {
    button: function(e) {
        if (window.pageViewer && pageViewer.removeButton) {
            pageViewer.removeButton(e.id || e.bdid)
        }
        if (!e.img) {
            return 
        }
        var g = window, m = document, b, h=!e.id ? _bcvm.select(e.element) : [m.getElementById(e.id)], c = Math.random() + "", f, l, n = function() {
            g._bcvmw.chatWindow(e);
            return false
        }, k = [], j = [];
        for (var d = 0; d < h.length; d++) {
            b = h[d];
            l = m.createElement("a");
            b.className = (b.className + " " || "") + "bcStatic";
            l.setAttribute("href", "#");
            l.onclick = n;
            if (!e.html) {
                f = new Image();
                f.setAttribute("border", 0);
                f.src = e.img
            } else {
                f = m.createElement("div");
                f.innerHTML=!e.img ? "" : e[e.img]
            }
            k.push(f);
            l.appendChild(f);
            j.push(l);
            b.appendChild(l)
        }
        if (g.pageViewer && pageViewer.addButton) {
            pageViewer.addButton({
                parents: j,
                id: c,
                eid: e.id,
                tbid: e.html ? e.bdid: null,
                html: e.html,
                available: e.available,
                unavailable: e.unavailable,
                elements: k,
                bdid: e.bdid,
                type: e.type,
                roid: e.roid,
                rdid: e.rdid
            }, true)
        }
    }
};
window._bcvmt = {
    text: function(d) {
        if (window.pageViewer && pageViewer.removeButton) {
            pageViewer.removeButton(d.id)
        }
        if (!d.available) {
            return 
        }
        var g = window, j = document, b = j.getElementById(d.id), c = Math.random() + "", i, h = j.createElement("div"), f = g._bcvm.textButtons[d.id], e = f && f[d.available];
        i = j.createElement("a");
        b.setAttribute("class", "bcText");
        i.setAttribute("href", "#");
        i.onclick = function() {
            g._bcvmw.chatWindow(d);
            return false
        };
        h.setAttribute("id", c);
        h.innerHTML = e;
        i.appendChild(h);
        b.appendChild(i);
        if (g.pageViewer && pageViewer.addButton) {
            pageViewer.addButton({
                parents: [i],
                id: c,
                available: f && f.available,
                unavailable: f && f.unavailable,
                tbid: d.id,
                type: d.type,
                roid: d.roid,
                rdid: d.rdid
            }, true)
        }
    }
};
(function(g, e) {
    e.bcLoaded = true;
    var b = function() {
        return new Date().getTime()
    }, d = function(m, k, j) {
        var n, l = m.indexOf(k + "=");
        if (l!=-1) {
            l += k.length + 1;
            n = m.indexOf(j, l);
            return m.substring(l, n==-1 ? m.length : n)
        }
    }, f = function(j) {
        return d(g.cookie, j, ";")
    }, i = function(k, m, o) {
        var j = o && new Date(b() + o), l = g.location.host, n = l.indexOf(".");
        l = n == l.lastIndexOf(".") ? "." + l : l.substring(n);
        g.cookie = k + "=" + m + (o ? ";expires=" + j.toUTCString() : "") + ";domain=" + (e._bcvm.domain || l) + ";path=" + (e._bcvm.path || "/")
    }, c = function(j) {
        return d(g.location.href, j, "&")
    }, a = function(l) {
        var m = {};
        for (var j in l) {
            m[j] = l[j]
        }
        return m
    };
    host = ".boldchat.com/aid/";
    e._bcvm = e._bcvm || {
        getCookie: f,
        setCookie: i,
        addEvent: function(m, p, l) {
            var j = "on" + p, k = m[j];
            if (m.addEventListener) {
                m.addEventListener(p, l, false)
            } else {
                if (m.attachEvent) {
                    m.attachEvent(j, l)
                } else {
                    m[j] = function(n) {
                        l(n);
                        return k(n)
                    }
                }
            }
        },
        loadScript: function(l) {
            var j = g.getElementsByTagName("head")[0] || g.body;
            var k = g.createElement("script");
            k.id = "bcvm_script_" + new Date().getTime();
            k.async = true;
            k.type = "text/javascript";
            k.src = l;
            j.appendChild(k)
        },
        textButtons: {},
        getPageViewer: function(D) {
            var H = setTimeout, l = clearTimeout, aA = new Image(), B = [], G = 0, Z = new Image(), av = function() {
                return (ak ? 2 : 1) * (G >= 60000 ? (G >= 600000 ? (G >= 3600000 ? (G >= 14400000 ? (G >= 43200000 ? 300 : 180) : 120) : 60) : 30) : (G >= 10000 ? (G >= 30000 ? 30 : 30) : 30)) * 1000
            }, al = g.location.protocol, ao = "https:" == al ? "https://": "http://", ae = al == "https:" || al == "http:", K, aP, ak = false, o = false, q, ad = false, aM = {}, an = {}, C = "", z = "", ai = "", ag, ac, aL, v, aa, aE = "", aj, Y, aH, aG = "SecureParameters", A = {
                VisitRef: "vr",
                VisitInfo: "vi",
                VisitName: "vn",
                VisitPhone: "vp",
                VisitEmail: "ve"
            }, j = {
                WindowParameters: "&",
                OpenParameters: ","
            }, ap = {
                OpenParameters: "op",
                InvitationID: "idid",
                InvitationDefID: "idid",
                WindowScheme: "cp",
                CharSet: ".cs",
                CustomUrl: "curl",
                ChatWidth: "cwidth",
                ChatHeight: "cheight",
                CallWidth: "pwidth",
                CallHeight: "pheight",
                ChatWindowID: "cwdid",
                ChatWindowDefID: "cwdid",
                CallWindowDefID: "pwdid"
            }, t = {
                ConversionCodeID: "ccid",
                ConversionAmount: "ca",
                ConversionRef: "cr",
                ConversionInfo: "ci"
            }, I = {}, F = {}, ab = function() {
                return Math.floor(parseFloat(D) * 99 / 1000000 + (b() - 1332800000000) + Math.random() * 1000000) + "" + Math.floor(1000 + Math.random() * (10000 - 1000))
            }, x = function(aQ) {
                e._bcvm.domain = aQ
            }, r = function(aQ) {
                e._bcvm.path = aQ
            }, W = function(aR, aQ, aS) {
                q = aS;
                aE = ah("wdid", aK("WebsiteDefID") || aK("WebsiteID")) + ah("pvid", q);
                if (ae) {
                    aB(aR, aQ)
                }
                L = true;
                n()
            }, aB = function(aR, aQ) {
                aL = aK("WebsiteDefID") || aK("WebsiteID") || D;
                v = "_bcvm_vid_" + aL;
                aa = "_bcvm_vrid_" + aL;
                ag = aQ || f(v) || c(v);
                ac = aR || f(aa) || c(aa);
                if (ag) {
                    i(v, ag)
                }
                if (ac) {
                    i(aa, ac, 365 * 86400000)
                }
            }, X = function(aR, aQ) {
                if (ae) {
                    aB()
                }
                var aS = aR.indexOf("#");
                return aR.substring(0, aS==-1 ? aR.length : aS) + (aR.indexOf("?")==-1 ? "?" : "") + (ae ? ah("_bcvm_vrid_", "true") + ah(v, ag) + ah(aa, ac) : "") + (aQ ? "" : ah("curl", I.CustomUrl) + "&" + (I.WindowParameters || "")) + (aS==-1 ? "" : aR.substring(aS))
            }, u = function(aR, aQ) {
                for (var aS = 0; aS < aN.length; aS++) {
                    aR = aN[aS](aR, aQ)
                }
                return aR
            }, aN = [X], ax = function(aQ) {
                aN.push(aQ)
            }, N = function(aQ) {
                for (var aR = 0; aR < aN.length; aR++) {
                    if (aN[aR] == aQ) {
                        aN.splice(aR, 1)
                    }
                }
            }, af = function() {
                return q
            }, m = function(aQ) {
                D = aQ;
                e._bcvm.host = host + D
            }, aF = function(aR, aV) {
                if (!aR) {
                    return {}
                }
                var aU = aR.split(aV), aQ, aT, aS = {};
                for (aQ = 0; aQ < aU.length; aQ++) {
                    aT = aU[aQ].indexOf("=");
                    aS[aT==-1 ? aU[aQ]: aU[aQ].substring(0, aT)] = aT==-1 ? null : aU[aQ].substring(aT + 1)
                }
                return aS
            }, R = function(aU, aS, aW) {
                if (!aW) {
                    return aS || aU
                }
                var aQ = aF(aU, aW), aR = aF(aS, aW), aV = "";
                for (var aT in aR) {
                    if (!aQ[aT] || aR[aT]) {
                        aQ[aT] = aR[aT]
                    }
                }
                for (var aT in aQ) {
                    if (aV != "") {
                        aV += aW
                    }
                    aV += aT + (aQ[aT] == null ? "" : "=" + aQ[aT])
                }
                return aV
            }, az = function(aS, aQ, aR) {
                I[aS] = aR ? aQ : R(I[aS], aQ, j[aS])
            }, aK = function(aR, aQ) {
                return (aQ ? aQ[aR] : null) || (aQ && aQ.id && F[aQ.id] ? F[aQ.id][aR] : null) || I[aR] || ""
            }, ah = function(aS, aQ, aR) {
                return aQ && aQ != "" ? (aR ? "?" : "&") + aS + "=" + (encodeURIComponent || escape)(typeof aQ == "function" ? aQ() : aQ) : ""
            }, aI = function(aT, aS) {
                var aR = "", aQ;
                for (var aU in aT) {
                    aR += ah(aT[aU], aK(aU, aS))
                }
                return aR
            }, am = function() {
                i("bc_pv_end", q, 30000)
            }, M = function() {
                ak = false;
                var aQ = av() - (b() - aP - G);
                if (K) {
                    l(K);
                    K = null;
                    if (aQ > 0) {
                        K = H(au, aQ)
                    } else {
                        O()
                    }
                }
            }, w = function() {
                ak = true
            }, k = {
                id: "pageView"
            }, p = function(aR, aQ) {
                G = 0;
                _bcvm.loadScript(ao + "ci" + host + D + "/bc.inv/ci.js?resize=true&std=" + (document.compatMode == "CSS1Compat") + "&ftid=" + aR + "&visit=" + aQ + aE + aI(ap, k) + "&" + b())
            }, aO = false, y = function() {
                if (!aO) {
                    aO = true;
                    G =- 99999999;
                    _bcvm.loadScript(ao + "vms" + host + D + "/bc.cobrowse/setup.js?wait=250" + aE)
                } else {
                    if (typeof _bccb != "undefined") {
                        _bccb.initialize()
                    }
                }
            }, V = function(aQ) {
                if (aQ == 4) {
                    p(29, "true")
                }
                if (aQ == 5) {
                    p(51, "true")
                }
                if (aQ == 6) {
                    _bccb.receive()
                }
                if (aQ == 7) {
                    y()
                }
            }, Q = function(aT, aR, aU) {
                var aQ = aM[aT] && aM[aT].elements || [g.getElementById(aT)], aV, aW=!aR ? "" : aM[aT] && aM[aT][aR];
                for (var aS = 0; aS < aQ.length; aS++) {
                    aV = aQ[aS];
                    if (aU && aV && aV.innerHTML != aW) {
                        aV.innerHTML = aW
                    } else {
                        if (!aU && aV && aV.src != aR) {
                            aV.src = aR
                        }
                    }
                }
            }, aJ = function(aT) {
                var aS = an[aT];
                if (aS) {
                    var aQ = aS.parents;
                    for (var aR = 0; aQ && aR < aQ.length; aR++) {
                        aQ[aR].parentNode.removeChild(aQ[aR])
                    }
                    delete aM[aS.id];
                    delete an[aT]
                }
            }, P = function(aQ) {
                var aR = aQ.id;
                return ah("bdid", aR) + ah(aR + "_html", aQ.html) + ah(aR + "_roid", aQ.roid) + ah(aR + "_rdid", aQ.rdid) + ah(aR + (aQ.tbid ? "_tbid" : aQ.type == "call" ? "_pbdid" : "_cbdid"), aQ.tbid || aQ.bdid)
            }, U = function(aR, aQ) {
                if (aQ) {
                    aM[aR.id] = aR;
                    an[aR.eid || aR.bdid || aR.tbid] = aR
                } else {
                    C += P(aR)
                }
            }, aC = function(aQ) {
                F[aQ.id] = a(I);
                ai += (aQ.type == "call" ? "&fpbdid=" : "&fcbdid=") + aQ.id
            }, ar = function(aQ) {
                F[aQ.id] = a(I);
                ai += (aQ.type == "call" ? "&spbdid=" : "&scbdid=") + aQ.bdid + "," + aQ.id
            }, T = function(aQ) {
                _bcvm.textButtons[aQ.id] = aQ;
                F[aQ.id] = a(I);
                ai += (aQ.type == "call" ? "&tpwdid=" : "&tcwdid=") + aQ.id + "," + (aQ.window || "") + "," + (aQ.department || "") + "," + (aQ.operator || "")
            }, aq = function() {
                var aR = aA.width & 7, aQ = aA.height;
                E(aQ, aR)
            }, ay = null, E = function(aQ, aR) {
                o = true;
                if (aR == 2) {
                    l(K);
                    K = null
                }
                if (aR == 3) {
                    S(aj, "")
                }
                if (aR >= 4) {
                    if (ay) {
                        l(ay)
                    }
                    ay = H(function() {
                        ay = null;
                        p(aR == 4 ? 29 : 51, "false")
                    }, (aQ - 1) * 1000 + 1)
                }
                if (aR == 1) {
                    V(aQ & 15)
                }
            }, at = function() {
                if (!o) {
                    O(true)
                }
            }, au = function() {
                O()
            }, O = function(aR) {
                G = b() - aP;
                var aQ = "";
                for (var aT in aM) {
                    aQ += P(aM[aT])
                }
                var aS = ao + "vmp" + host + D + "/bc.vm?blur=" + ak + "&poll=" + av() + aE + aQ + C + "&" + b();
                if (aQ || C) {
                    _bcvm.loadScript(aS.replace("?", "?script=true&"))
                } else {
                    aA.src = aS
                }
                if (!aR) {
                    K = H(au, av())
                }
                if (o) {
                    H(at, 5000)
                }
                o = false
            }, J = function(aQ, aR) {
                S(null, null, aQ, aR)
            }, L = true, n = function() {
                var aU = e._bcvma || [], aR = aU.length || 0;
                e._bcvma = [];
                for (var aS = 0; aS < aU.length || 0; aS++) {
                    var aW = aU[aS], aT = (aW || [])[0];
                    if (aT == "pageViewed" && aS < aR) {
                        F[k.id] = a(I);
                        aU.push(aW)
                    } else {
                        var aQ = h[aT];
                        if (aQ) {
                            aQ(aW[1], aW[2])
                        }
                    }
                }
                if (ai != z) {
                    S(null, null, null, null, true)
                }
                if (L) {
                    var aV = e._bcct || [];
                    e._bcct = [];
                    for (var aS = 0; aS < aV.length; aS++) {
                        s(aV[aS])
                    }
                }
            }, aw = function(aQ) {
                e._bcct = e._bcct || [];
                e._bcct.push(aQ)
            }, s = function(aS, aU, aR) {
                if (aU && aS[aG]) {
                    return true
                }
                for (var aT in t) {
                    az(aT, null, true)
                }
                for (var aT in aS) {
                    if (aS[aT] && aS[aT] != "") {
                        az(aT, aS[aT])
                    }
                }
                if (!aR) {
                    aR = aK(aG)
                }
                if (typeof aR == "function") {
                    aR = aR(function(aV) {
                        s(aS, aU, aV)
                    }, "conversion");
                    if (!aR) {
                        return 
                    }
                }
                if (!aU) {
                    var aQ = new Image();
                    aQ.src = u(ao + "vms" + host + D + "/bc.vci?" + b() + (aE || ah("wdid", aK("WebsiteDefID") || aK("WebsiteID"))) + aI(A) + aI(t) + ah("secured", aR));
                    B.push(aQ)
                }
            }, aD = function() {
                var aS = screen, aT = e.devicePixelRatio || (aS.deviceXDPI || 1) / (aS.logicalXDPI || 1), aQ = aT, aV = g.createElement("div"), aR = "height: 1in; left: -100%; position: absolute; top: -100%; width: 10%;";
                aV.setAttribute("style", aR);
                try {
                    g.body.appendChild(aV)
                } catch (aU) {
                    try {
                        g.body.insertBefore(aV, g.body.firstChild)
                    } catch (aU) {}
                }
                if (Math.abs(aS.width / aV.offsetWidth / 10 - aQ) / aQ < 0.2) {
                    aQ = 1
                }
                return (aS && aS.width && aS.height ? "&swidth=" + (aS.width * aQ) + "&sheight=" + (aS.height * aQ) : "") + (aV && aV.offsetWidth ? "&sdpi=" + (96 * aT) : "")
            }, S = function(aR, aZ, aS, a0, aW, aU) {
                if (!aU) {
                    aU = aK(aG, k)
                }
                if (typeof aU == "function") {
                    aU = aU(function(a2) {
                        S(aR, aZ, aS, a0, aW, a2)
                    }, "visit");
                    if (!aU) {
                        return 
                    }
                }
                var aV = [], aY, a1 = q || f("bc_pv_end"), aT = e.hideBox || e.bt_hideAnimationImpl;
                if (!aS&&!aW) {
                    L = false;
                    aV = e._bcct || [];
                    e._bcct = aV
                }
                if (a1) {
                    i("bc_pv_end", "", 0)
                }
                aj = aR || g.location.href;
                aH = aZ || g.referrer;
                if (aj.indexOf("bc_ignore_vm")!=-1) {
                    aW = true
                }
                G = 0;
                aP = b();
                if (K&&!aW) {
                    l(K)
                }
                var aX = aV[0] && s(aV[0], true);
                if (aV[0]&&!aX) {
                    e._bcct = aV.splice(1)
                }
                aA.onload = aq;
                if (!aS&&!aW) {
                    q = null
                }
                aE = ah("wdid", aK("WebsiteDefID", k) || aK("WebsiteID", k)) + ah("pvid", q);
                var aQ = u(ao + "vms" + host + D + "/bc.pv?blur=" + ak + "&vm="+!aW + "&poll=" + av() + aD() + (aS ? ah("reinvite", aS) + ah("adi", a0) : ah("vpvid", c("vpvid")) + ah("pve", a1) + ah("url", aj) + ah("referrer", aH) + aI(A, k)) + ah("secured", aU) + aE + aI(ap, k) + (aX ? "" : aI(t)) + "&" + b());
                _bcvm.loadScript(aQ.replace("?", "?script=true&securevm=true&") + (aS ? "" : "&hasbutton=" + ad + ai));
                z = ai;
                if (!aW) {
                    K = H(au, av())
                }
            };
            _bcvm.addEvent(e, "beforeunload", am);
            _bcvm.addEvent(e, "focus", M);
            _bcvm.addEvent(e, "blur", w);
            _bcvm.pageViewer = {
                set: W,
                doExperiments: af,
                setAccountID: m,
                setDomain: x,
                setPath: r,
                pageViewed: S,
                load: n,
                reinvite: J,
                check: E,
                getParameter: aK,
                setParameter: az,
                addFloat: aC,
                addStatic: ar,
                addText: T,
                addButton: U,
                removeButton: aJ,
                update: Q,
                addConversion: aw,
                conversion: s,
                link: u,
                removeLink: N,
                addLink: ax
            };
            return _bcvm.pageViewer
        },
        select: function(m) {
            if (!g.getElementsByTagName) {
                return []
            }
            m = m.replace(/\s*([^\w])\s*/g, "$1");
            var D = [], q = m.split(","), z, L, k, J, p;
            var q = m.split(",");
            var y = function(S, P) {
                if (!P) {
                    P = "*"
                }
                z = [];
                for (var Q = 0, o = S.length; p = S[Q], Q < o; Q++) {
                    var l;
                    if (P == "*") {
                        l = p.all ? p.all : p.getElementsByTagName("*")
                    } else {
                        l = p.getElementsByTagName(P)
                    }
                    for (var j = 0, R = l.length; j < R; j++) {
                        z.push(l[j])
                    }
                }
            };
            COMMA: for (var M = 0, v = q.length; L = q[M], M < v; M++) {
                var n = [g], A = L.split(" ");
                SPACE:
                for (var K = 0, u = A.length; k = A[K], K < u; K++) {
                    var t = k.indexOf("["), r = k.indexOf("]"), s = k.indexOf("#");
                    if (s + 1&&!(s > t && s < r)) {
                        var E = k.split("#"), O = E[0], B = E[1], x = g.getElementById(B);
                        if (!x || (O && x.nodeName.toLowerCase() != O)) {
                            continue COMMA
                        }
                        n = [x];
                        continue SPACE
                    }
                    s = k.indexOf(".");
                    if (s + 1&&!(s > t && s < r)) {
                        var E = k.split("."), O = E[0], I = E[1];
                        y(n, O);
                        n = [];
                        for (var H = 0, N = z.length; J = z[H], H < N; H++) {
                            if (J.className && J.className.match(new RegExp("(^|s)" + I + "(s|$)"))) {
                                n.push(J)
                            }
                        }
                        continue SPACE
                    }
                    if (k.indexOf("[") + 1) {
                        if (k.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?['"]?([^\]'"]*)['"]?\]$/)) {
                            var O = RegExp.$1, G = RegExp.$2, w = RegExp.$3, F = RegExp.$4
                        }
                        y(n, O);
                        n = [];
                        for (var H = 0, N = z.length; J = z[H], H < N; H++) {
                            if (w == "=" && J.getAttribute(G) != F) {
                                continue
                            }
                            if (w == "~"&&!J.getAttribute(G).match(new RegExp("(^|\\s)" + F + "(\\s|$)"))) {
                                continue
                            }
                            if (w == "|"&&!J.getAttribute(G).match(new RegExp("^" + F + "-?"))) {
                                continue
                            }
                            if (w == "^" && J.getAttribute(G).indexOf(F) != 0) {
                                continue
                            }
                            if (w == "$" && J.getAttribute(G).lastIndexOf(F) != (J.getAttribute(G).length - F.length)) {
                                continue
                            }
                            if (w == "*"&&!(J.getAttribute(G).indexOf(F) + 1)) {
                                continue
                            } else {
                                if (!J.getAttribute(G)) {
                                    continue
                                }
                            }
                            n.push(J)
                        }
                        continue SPACE
                    }
                    y(n, k);
                    n = z
                }
                for (var C = 0, N = n.length; C < N; C++) {
                    D.push(n[C])
                }
            }
            return D
        }
    };
    var h = e.pageViewer || e._bcvm.getPageViewer();
    e.pageViewer = h;
    e.pageViewer.load()
})(document, window);
