var IO = IO || {};
!function() {
    function checkNative() {
        return "function" != typeof WebSocket && "object" != typeof WebSocket || WebSocket.isNotNative || /version\/5[\s\S]*safari/i.test(navigator.userAgent)?!1 : !0
    }
    function log(a) {
        window.console && window.console.log && console.log(a)
    }
    function addEvent(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c)
    }
    function removeEvent(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent("on" + b, c)
    }
    function getHashCode(a, b) {
        b || (a = a.toLowerCase());
        var d, e, c = 1315423911;
        for (d = a.length - 1; d >= 0; d--) {
            e = a.charCodeAt(d);
            c^=(c<<5) + e + (c>>2)
        }
        return 2147483647 & c
    }
    function merge(a, b) {
        for (var c in b)
            a[c] = "object" == typeof a[c] && "object" == typeof b[c] ? arguments.callee(b[c], a[c]) : b[c];
        return a
    }
    function fnBind(a, b, c) {
        return function() {
            var d, e;
            if (c && arguments.length) {
                d = Array.prototype.slice.call(c, 0);
                for (e = 0; e < arguments.length; e++)
                    Array.prototype.push.call(d, arguments[e])
            }
            return a.apply(b || this, d || c || arguments)
        }
    }
    function bindArg(a) {
        return fnBind(a, null, Array.prototype.slice.call(arguments, 1))
    }
    function getScript(a, b, c) {
        var e, f, d = document.createElement("script");
        d.type = "text/javascript";
        c && (d.charset = c);
        d.src = a;
        e = document.getElementsByTagName("head")[0];
        f=!1;
        d.onload = d.onreadystatechange = function() {
            if (!(f || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState)) {
                f=!0;
                b && setTimeout(b, 1);
                d.onload = d.onreadystatechange = null;
                setTimeout(function() {
                    e.removeChild(d)
                }, 1)
            }
        };
        setTimeout(function() {
            e.appendChild(d)
        }, 1)
    }
    var _iframeID, _iframe, _pWin, proxy, swfobject = function() {
        function A() {
            var a, c, d;
            if (!t) {
                try {
                    a = i.getElementsByTagName("body")[0].appendChild(Q("span"));
                    a.parentNode.removeChild(a)
                } catch (b) {
                    return 
                }
                t=!0;
                c = l.length;
                for (d = 0; c > d; d++)
                    l[d]()
            }
        }
        function B(a) {
            t ? a() : l[l.length] = a
        }
        function C(b) {
            if (typeof h.addEventListener != a)
                h.addEventListener("load", b, !1);
            else if (typeof i.addEventListener != a)
                i.addEventListener("load", b, !1);
            else if (typeof h.attachEvent != a)
                R(h, "onload", b);
            else if ("function" == typeof h.onload) {
                var c = h.onload;
                h.onload = function() {
                    c();
                    b()
                }
            } else 
                h.onload = b
        }
        function D() {
            k ? E() : F()
        }
        function E() {
            var f, g, c = i.getElementsByTagName("body")[0], d = Q(b);
            d.setAttribute("type", e);
            f = c.appendChild(d);
            if (f) {
                g = 0;
                !function() {
                    if (typeof f.GetVariable != a) {
                        var b = f.GetVariable("$version");
                        if (b) {
                            b = b.split(" ")[1].split(",");
                            y.pv = [parseInt(b[0], 10), parseInt(b[1], 10), parseInt(b[2], 10)]
                        }
                    } else if (10 > g) {
                        g++;
                        setTimeout(arguments.callee, 10);
                        return 
                    }
                    c.removeChild(d);
                    f = null;
                    F()
                }()
            } else 
                F()
        }
        function F() {
            var c, d, e, f, g, h, i, j, k, l, n, b = m.length;
            if (b > 0)
                for (c = 0; b > c; c++) {
                    d = m[c].id;
                    e = m[c].callbackFn;
                    f = {
                        success: !1,
                        id: d
                    };
                    if (y.pv[0] > 0) {
                        g = P(d);
                        if (g)
                            if (!S(m[c].swfVersion) || y.wk && y.wk < 312)
                                if (m[c].expressInstall && H()) {
                                    h = {};
                                    h.data = m[c].expressInstall;
                                    h.width = g.getAttribute("width") || "0";
                                    h.height = g.getAttribute("height") || "0";
                                    g.getAttribute("class") && (h.styleclass = g.getAttribute("class"));
                                    g.getAttribute("align") && (h.align = g.getAttribute("align"));
                                    i = {};
                                    j = g.getElementsByTagName("param");
                                    k = j.length;
                                    for (l = 0; k > l; l++)
                                        "movie" != j[l].getAttribute("name").toLowerCase() && (i[j[l].getAttribute("name")] = j[l].getAttribute("value"));
                                        I(h, i, d, e)
                                } else {
                                    J(g);
                                    e && e(f)
                                } else {
                                    U(d, !0);
                                    if (e) {
                                        f.success=!0;
                                        f.ref = G(d);
                                        e(f)
                                    }
                                }
                            } else {
                                U(d, !0);
                                if (e) {
                                    n = G(d);
                                    if (n && typeof n.SetVariable != a) {
                                        f.success=!0;
                                        f.ref = n
                                    }
                                    e(f)
                                }
                            }
                        }
            }
        function G(c) {
            var f, d = null, e = P(c);
            if (e && "OBJECT" == e.nodeName)
                if (typeof e.SetVariable != a)
                    d = e;
                else {
                    f = e.getElementsByTagName(b)[0];
                    f && (d = f)
                }
            return d
        }
        function H() {
            return !u && S("6.0.65") && (y.win || y.mac)&&!(y.wk && y.wk < 312)
        }
        function I(b, c, d, e) {
            var g, j, k, l;
            u=!0;
            r = e || null;
            s = {
                success: !1,
                id: d
            };
            g = P(d);
            if (g) {
                if ("OBJECT" == g.nodeName) {
                    p = K(g);
                    q = null
                } else {
                    p = g;
                    q = d
                }
                b.id = f;
                (typeof b.width == a ||!/%$/.test(b.width) && parseInt(b.width, 10) < 310) && (b.width = "310");
                (typeof b.height == a ||!/%$/.test(b.height) && parseInt(b.height, 10) < 137) && (b.height = "137");
                i.title = i.title.slice(0, 47) + " - Flash Player Installation";
                j = y.ie && y.win ? "ActiveX" : "PlugIn", k = "MMredirectURL=" + h.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + j + "&MMdoctitle=" + i.title;
                typeof c.flashvars != a ? c.flashvars += "&" + k : c.flashvars = k;
                if (y.ie && y.win && 4 != g.readyState) {
                    l = Q("div");
                    d += "SWFObjectNew";
                    l.setAttribute("id", d);
                    g.parentNode.insertBefore(l, g);
                    g.style.display = "none";
                    !function() {
                        4 == g.readyState ? g.parentNode.removeChild(g) : setTimeout(arguments.callee, 10)
                    }()
                }
                L(b, c, d)
            }
        }
        function J(a) {
            if (y.ie && y.win && 4 != a.readyState) {
                var b = Q("div");
                a.parentNode.insertBefore(b, a);
                b.parentNode.replaceChild(K(a), b);
                a.style.display = "none";
                !function() {
                    4 == a.readyState ? a.parentNode.removeChild(a) : setTimeout(arguments.callee, 10)
                }()
            } else 
                a.parentNode.replaceChild(K(a), a)
        }
        function K(a) {
            var d, e, f, g, c = Q("div");
            if (y.win && y.ie)
                c.innerHTML = a.innerHTML;
            else {
                d = a.getElementsByTagName(b)[0];
                if (d) {
                    e = d.childNodes;
                    if (e) {
                        f = e.length;
                        for (g = 0; f > g; g++)
                            1 == e[g].nodeType && "PARAM" == e[g].nodeName || 8 == e[g].nodeType || c.appendChild(e[g].cloneNode(!0))
                        }
                }
            }
            return c
        }
        function L(c, d, f) {
            var g, i, j, k, l, m, o, p, h = P(f);
            if (y.wk && y.wk < 312)
                return g;
            if (h) {
                typeof c.id == a && (c.id = f);
                if (y.ie && y.win) {
                    i = "";
                    for (j in c)
                        c[j] != Object.prototype[j] && ("data" == j.toLowerCase() ? d.movie = c[j] : "styleclass" == j.toLowerCase() ? i += ' class="' + c[j] + '"' : "classid" != j.toLowerCase() && (i += " " + j + '="' + c[j] + '"'));
                    k = "";
                    for (l in d)
                        d[l] != Object.prototype[l] && (k += '<param name="' + l + '" value="' + d[l] + '" />');
                    h.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + i + ">" + k + "</object>";
                    n[n.length] = c.id;
                    g = P(c.id)
                } else {
                    m = Q(b);
                    m.setAttribute("type", e);
                    for (o in c)
                        c[o] != Object.prototype[o] && ("styleclass" == o.toLowerCase() ? m.setAttribute("class", c[o]) : "classid" != o.toLowerCase() && m.setAttribute(o, c[o]));
                    for (p in d)
                        d[p] != Object.prototype[p] && "movie" != p.toLowerCase() && M(m, p, d[p]);
                    h.parentNode.replaceChild(m, h);
                    g = m
                }
            }
            return g
        }
        function M(a, b, c) {
            var d = Q("param");
            d.setAttribute("name", b);
            d.setAttribute("value", c);
            a.appendChild(d)
        }
        function N(a) {
            var b = P(a);
            if (b && "OBJECT" == b.nodeName)
                if (y.ie && y.win) {
                    b.style.display = "none";
                    !function() {
                        4 == b.readyState ? O(a) : setTimeout(arguments.callee, 10)
                    }()
                } else 
                    b.parentNode.removeChild(b)
        }
        function O(a) {
            var c, b = P(a);
            if (b) {
                for (c in b)
                    "function" == typeof b[c] && (b[c] = null);
                b.parentNode.removeChild(b)
            }
        }
        function P(a) {
            var b = null;
            try {
                b = i.getElementById(a)
            } catch (c) {}
            return b
        }
        function Q(a) {
            return i.createElement(a)
        }
        function R(a, b, c) {
            a.attachEvent(b, c);
            o[o.length] = [a, b, c]
        }
        function S(a) {
            var b = y.pv, c = a.split(".");
            c[0] = parseInt(c[0], 10);
            c[1] = parseInt(c[1], 10) || 0;
            c[2] = parseInt(c[2], 10) || 0;
            return b[0] > c[0] || b[0] == c[0] && b[1] > c[1] || b[0] == c[0] && b[1] == c[1] && b[2] >= c[2]?!0 : !1
        }
        function T(c, d, e, f) {
            var g, h, j;
            if (!y.ie ||!y.mac) {
                g = i.getElementsByTagName("head")[0];
                if (g) {
                    h = e && "string" == typeof e ? e : "screen";
                    if (f) {
                        v = null;
                        w = null
                    }
                    if (!v || w != h) {
                        j = Q("style");
                        j.setAttribute("type", "text/css");
                        j.setAttribute("media", h);
                        v = g.appendChild(j);
                        y.ie && y.win && typeof i.styleSheets != a && i.styleSheets.length > 0 && (v = i.styleSheets[i.styleSheets.length - 1]);
                        w = h
                    }
                    y.ie && y.win ? v && typeof v.addRule == b && v.addRule(c, d) : v && typeof i.createTextNode != a && v.appendChild(i.createTextNode(c + " {" + d + "}"))
                }
            }
        }
        function U(a, b) {
            if (x) {
                var c = b ? "visible": "hidden";
                t && P(a) ? P(a).style.visibility = c : T("#" + a, "visibility:" + c)
            }
        }
        function V(b) {
            var c = /[\\\"<>\.;]/, d = null != c.exec(b);
            return d && typeof encodeURIComponent != a ? encodeURIComponent(b) : b
        }
        var p, q, r, s, v, w, a = "undefined", b = "object", c = "Shockwave Flash", d = "ShockwaveFlash.ShockwaveFlash", e = "application/x-shockwave-flash", f = "SWFObjectExprInst", g = "onreadystatechange", h = window, i = document, j = navigator, k=!1, l = [D], m = [], n = [], o = [], t=!1, u=!1, x=!0, y = function() {
            var s, f = typeof i.getElementById != a && typeof i.getElementsByTagName != a && typeof i.createElement != a, g = j.userAgent.toLowerCase(), l = j.platform.toLowerCase(), m = l ? /win/.test(l): /win/.test(g), n = l ? /mac/.test(l): /mac/.test(g), o = /webkit/.test(g) ? parseFloat(g.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")): !1, p=!1, q = [0, 0, 0], r = null;
            if (typeof j.plugins != a && typeof j.plugins[c] == b) {
                r = j.plugins[c].description;
                if (r && (typeof j.mimeTypes == a ||!j.mimeTypes[e] || j.mimeTypes[e].enabledPlugin)) {
                    k=!0;
                    p=!1;
                    r = r.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                    q[0] = parseInt(r.replace(/^(.*)\..*$/, "$1"), 10);
                    q[1] = parseInt(r.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                    q[2] = /[a-zA-Z]/.test(r) ? parseInt(r.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                }
            } else if (typeof h.ActiveXObject != a)
                try {
                    s = new ActiveXObject(d);
                    if (s) {
                        r = s.GetVariable("$version");
                        if (r) {
                            p=!0;
                            r = r.split(" ")[1].split(",");
                            q = [parseInt(r[0], 10), parseInt(r[1], 10), parseInt(r[2], 10)]
                        }
                    }
            } catch (t) {}
            return {
                w3: f,
                pv: q,
                wk: o,
                ie: p,
                win: m,
                mac: n
            }
        }();
        !function() {
            if (y.w3) {
                (typeof i.readyState != a && "complete" == i.readyState || typeof i.readyState == a && (i.getElementsByTagName("body")[0] || i.body)) && A();
                if (!t) {
                    typeof i.addEventListener != a && i.addEventListener("DOMContentLoaded", A, !1);
                    if (y.ie && y.win) {
                        i.attachEvent(g, function() {
                            if ("complete" == i.readyState) {
                                i.detachEvent(g, arguments.callee);
                                A()
                            }
                        });
                        h == top && function() {
                            if (!t) {
                                try {
                                    i.documentElement.doScroll("left")
                                } catch (a) {
                                    setTimeout(arguments.callee, 0);
                                    return 
                                }
                                A()
                            }
                        }()
                    }
                    y.wk && function() {
                        t || (/loaded|complete/.test(i.readyState) ? A() : setTimeout(arguments.callee, 0))
                    }();
                    C(A)
                }
            }
        }();
        !function() {
            y.ie && y.win && window.attachEvent("onunload", function() {
                var b, c, d, e, f, a = o.length;
                for (b = 0; a > b; b++)
                    o[b][0].detachEvent(o[b][1], o[b][2]);
                c = n.length;
                for (d = 0; c > d; d++)
                    N(n[d]);
                for (e in y)
                    y[e] = null;
                y = null;
                for (f in swfobject)
                    swfobject[f] = null;
                swfobject = null
            })
        }();
        return {
            registerObject: function(a, b, c, d) {
                if (y.w3 && a && b) {
                    var e = {};
                    e.id = a;
                    e.swfVersion = b;
                    e.expressInstall = c;
                    e.callbackFn = d;
                    m[m.length] = e;
                    U(a, !1)
                } else 
                    d && d({
                        success: !1,
                        id: a
                    })
            },
            getObjectById: function(a) {
                return y.w3 ? G(a) : void 0
            },
            embedSWF: function(c, d, e, f, g, h, i, j, k, l) {
                var m = {
                    success: !1,
                    id: d
                };
                if (y.w3&&!(y.wk && y.wk < 312) && c && d && e && f && g) {
                    U(d, !1);
                    B(function() {
                        var n, o, p, q, r, s;
                        e += "";
                        f += "";
                        n = {};
                        if (k && typeof k === b)
                            for (o in k)
                                n[o] = k[o];
                        n.data = c;
                        n.width = e;
                        n.height = f;
                        p = {};
                        if (j && typeof j === b)
                            for (q in j)
                                p[q] = j[q];
                        if (i && typeof i === b)
                            for (r in i)
                                typeof p.flashvars != a ? p.flashvars += "&" + r + "=" + i[r] : p.flashvars = r + "=" + i[r];
                        if (S(g)) {
                            s = L(n, p, d);
                            n.id == d && U(d, !0);
                            m.success=!0;
                            m.ref = s
                        } else {
                            if (h && H()) {
                                n.data = h;
                                I(n, p, d, l);
                                return 
                            }
                            U(d, !0)
                        }
                        l && l(m)
                    })
                } else 
                    l && l(m)
            },
            switchOffAutoHideShow: function() {
                x=!1
            },
            ua: y,
            getFlashPlayerVersion: function() {
                return {
                    major: y.pv[0],
                    minor: y.pv[1],
                    release: y.pv[2]
                }
            },
            hasFlashPlayerVersion: S,
            createSWF: function(a, b, c) {
                return y.w3 ? L(a, b, c) : void 0
            },
            showExpressInstall: function(a, b, c, d) {
                y.w3 && H() && I(a, b, c, d)
            },
            removeSWF: function(a) {
                y.w3 && N(a)
            },
            createCSS: function(a, b, c, d) {
                y.w3 && T(a, b, c, d)
            },
            addDomLoadEvent: B,
            addLoadEvent: C,
            getQueryParamValue: function(a) {
                var c, d, b = i.location.search || i.location.hash;
                if (b) {
                    /\?/.test(b) && (b = b.split("?")[1]);
                    if (null == a)
                        return V(b);
                    c = b.split("&");
                    for (d = 0; d < c.length; d++)
                        if (c[d].substring(0, c[d].indexOf("=")) == a)
                            return V(c[d].substring(c[d].indexOf("=") + 1))
                }
                return ""
            },
            expressInstallCallback: function() {
                if (u) {
                    var a = P(f);
                    if (a && p) {
                        a.parentNode.replaceChild(p, a);
                        if (q) {
                            U(q, !0);
                            y.ie && y.win && (p.style.display = "block")
                        }
                        r && r(s)
                    }
                    u=!1
                }
            }
        }
    }();
    WEB_SOCKET_SWF_LOCATION = "http://i1.sinaimg.cn/woocall/swf/sina_financews.swf";
    checkNative() ||!function() {
        var a;
        a = window.WEB_SOCKET_LOGGER ? WEB_SOCKET_LOGGER : window.console && window.console.log && window.console.error ? window.console : {
            log: function() {},
            error: function() {}
        };
        if (swfobject.getFlashPlayerVersion().major < 10) {
            a.error("Flash Player >= 10.0.0 is required.");
            window.WebSocket = window.WebSocket || {};
            window.WebSocket.canUse=!1;
            window.WebSocket.isNotNative=!0
        } else {
            "file:" == location.protocol && a.error("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://...");
            window.WebSocket = function(a, b, c, d, e) {
                var f = this;
                f.__id = WebSocket.__nextId++;
                WebSocket.__instances[f.__id] = f;
                f.readyState = WebSocket.CONNECTING;
                f.bufferedAmount = 0;
                f.__events = {};
                b ? "string" == typeof b && (b = [b]) : b = [];
                f.__createTask = setTimeout(function() {
                    WebSocket.__addTask(function() {
                        f.__createTask = null;
                        WebSocket.__flash.create(f.__id, a, b, c || null, d || 0, e || null)
                    })
                }, 0)
            };
            window.WebSocket.isNotNative=!0;
            WebSocket.prototype.send = function(a) {
                if (this.readyState == WebSocket.CONNECTING)
                    throw "INVALID_STATE_ERR: Web Socket connection has not been established";
                var b = WebSocket.__flash.send(this.__id, encodeURIComponent(a));
                if (0 > b)
                    return !0;
                this.bufferedAmount += b;
                return !1
            };
            WebSocket.prototype.initFlashLC = function(a, b) {
                WebSocket.__flash.init(a, b)
            };
            WebSocket.prototype.close = function() {
                if (this.__createTask) {
                    clearTimeout(this.__createTask);
                    this.__createTask = null;
                    this.readyState = WebSocket.CLOSED
                } else if (this.readyState != WebSocket.CLOSED && this.readyState != WebSocket.CLOSING) {
                    this.readyState = WebSocket.CLOSING;
                    WebSocket.__flash.close(this.__id)
                }
            };
            WebSocket.prototype.addEventListener = function(a, b) {
                a in this.__events || (this.__events[a] = []);
                this.__events[a].push(b)
            };
            WebSocket.prototype.removeEventListener = function(a, b) {
                var d, e;
                if (a in this.__events) {
                    d = this.__events[a];
                    for (e = d.length - 1; e >= 0; --e)
                        if (d[e] === b) {
                            d.splice(e, 1);
                            break
                        }
                }
            };
            WebSocket.prototype.dispatchEvent = function(a) {
                var c, d, b = this.__events[a.type] || [];
                for (c = 0; c < b.length; ++c)
                    b[c](a);
                d = this["on" + a.type];
                d && d.apply(this, [a])
            };
            WebSocket.prototype.__handleEvent = function(a) {
                var b, c;
                "readyState"in a && (this.readyState = a.readyState);
                "protocol"in a && (this.protocol = a.protocol);
                if ("open" == a.type || "error" == a.type)
                    b = this.__createSimpleEvent(a.type);
                else if ("close" == a.type) {
                    b = this.__createSimpleEvent("close");
                    b.wasClean = a.wasClean?!0 : !1;
                    b.code = a.code;
                    b.reason = a.reason
                } else {
                    if ("message" != a.type)
                        throw "unknown event type: " + a.type;
                    c = decodeURIComponent(a.message);
                    b = this.__createMessageEvent("message", c)
                }
                this.dispatchEvent(b)
            };
            WebSocket.prototype.__createSimpleEvent = function(a) {
                if (document.createEvent && window.Event) {
                    var b = document.createEvent("Event");
                    b.initEvent(a, !1, !1);
                    return b
                }
                return {
                    type: a,
                    bubbles: !1,
                    cancelable: !1
                }
            };
            WebSocket.prototype.__createMessageEvent = function(a, b) {
                if (document.createEvent && window.MessageEvent&&!window.opera) {
                    var c = document.createEvent("MessageEvent");
                    c.initMessageEvent("message", !1, !1, b, null, null, window, null);
                    return c
                }
                return {
                    type: a,
                    data: b,
                    bubbles: !1,
                    cancelable: !1
                }
            };
            WebSocket.CONNECTING = 0;
            WebSocket.OPEN = 1;
            WebSocket.CLOSING = 2;
            WebSocket.CLOSED = 3;
            WebSocket.__isFlashImplementation=!0;
            WebSocket.__initialized=!1;
            WebSocket.__flash = null;
            WebSocket.__instances = {};
            WebSocket.__tasks = [];
            WebSocket.__nextId = 0;
            WebSocket.loadFlashPolicyFile = function(a) {
                WebSocket.__addTask(function() {
                    WebSocket.__flash.loadManualPolicyFile(a)
                })
            };
            WebSocket.canUse=!0;
            WebSocket.__initialize = function() {
                var c, d;
                if (!WebSocket.__initialized) {
                    WebSocket.__initialized=!0;
                    WebSocket.__swfLocation && (window.WEB_SOCKET_SWF_LOCATION = WebSocket.__swfLocation);
                    if (window.WEB_SOCKET_SWF_LOCATION) {
                        window.WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR || WEB_SOCKET_SWF_LOCATION.match(/(^|\/)WebSocketMainInsecure\.swf(\?.*)?$/) ||!WEB_SOCKET_SWF_LOCATION.match(/^\w+:\/\/([^\/]+)/) || RegExp.$1;
                        c = document.createElement("div");
                        c.id = "webSocketContainer";
                        c.style.position = "absolute";
                        if (WebSocket.__isFlashLite()) {
                            c.style.left = "0px";
                            c.style.top = "0px"
                        } else {
                            c.style.left = "-100px";
                            c.style.top = "-100px"
                        }
                        d = document.createElement("div");
                        d.id = "webSocketFlash";
                        c.appendChild(d);
                        document.body.insertBefore(c, document.body.childNodes[0]);
                        swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                            hasPriority: !0,
                            swliveconnect: !0,
                            allowScriptAccess: "always"
                        }, null, function(b) {
                            if (!b.success) {
                                WebSocket.canUse=!1;
                                a.error("[WebSocket] swfobject.embedSWF failed")
                            }
                        })
                    } else 
                        a.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf")
                }
            };
            WebSocket.flashOK=!1;
            WebSocket.__onFlashInitialized = function() {
                setTimeout(function() {
                    WebSocket.flashOK=!0;
                    WebSocket.__flash = document.getElementById("webSocketFlash");
                    WebSocket.__flash.setCallerUrl(location.href);
                    WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);
                    for (var a = 0; a < WebSocket.__tasks.length; ++a)
                        WebSocket.__tasks[a]();
                    WebSocket.__tasks = []
                }, 0)
            };
            WebSocket.__onFlashEvent = function() {
                setTimeout(function() {
                    var b, c;
                    try {
                        b = WebSocket.__flash.receiveEvents();
                        for (c = 0; c < b.length; ++c)
                            WebSocket.__instances[b[c].webSocketId].__handleEvent(b[c])
                    } catch (d) {
                        a.error(d)
                    }
                }, 0);
                return !0
            };
            WebSocket.__log = function(b) {
                a.log(decodeURIComponent(b))
            };
            WebSocket.__error = function(b) {
                a.error(decodeURIComponent(b))
            };
            WebSocket.__addTask = function(a) {
                WebSocket.__flash ? a() : WebSocket.__tasks.push(a)
            };
            WebSocket.__isFlashLite = function() {
                if (!window.navigator ||!window.navigator.mimeTypes)
                    return !1;
                var a = window.navigator.mimeTypes["application/x-shockwave-flash"];
                return a && a.enabledPlugin && a.enabledPlugin.filename ? a.enabledPlugin.filename.match(/flashlite/i)?!0 : !1 : !1
            };
            window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION || swfobject.addDomLoadEvent(function() {
                WebSocket.__initialize()
            })
        }
    }();
    if (!IO.WebPush3) {
        IO.WebPush3 = function(a, b, c, d) {
            this.id = "ws_" + getHashCode(a + b);
            this.host = a || "hq.sinajs.cn";
            this.list = (b + "").split(",");
            this.onmessage = c;
            this.cfg = merge({
                interval: 3,
                format: "",
                local: !1,
                ondebug: function() {},
                onMode: function() {}
            }, d || {});
            if (this.cfg.interval < 1) {
                this.cfg.interval = 1;
                log("刷新时间间隔已默认至1秒")
            }
            this.init()
        };
        merge(IO.WebPush3.prototype, {
            socket: void 0,
            connection: void 0,
            localConn: void 0,
            mode: void 0,
            hasInit: !1,
            init: function() {
                if (!this.hasInit) {
                    if (!(this.tryNative() || this.tryFlash() || this.tryJS())) {
                        this.tryInitLater();
                        return !1
                    }
                    this.hasInit=!0; (this.tryNative() || this.tryFlash()) && (this.cfg.local ? this.createLocalConn() : this.subscribe())
                }
            }, tryInitLater : function() {
                setTimeout(fnBind(this.init, this), 100)
            }, createLocalConn: function() {
                this.cfg.ondebug("使用localConn");
                var a = this;
                this.localConn = new IO.LocalConn({
                    key: this.id,
                    onmessage: function(b) {
                        a.listen(b)
                    },
                    onchange: function() {
                        a.subscribe()
                    }
                })
            }, beMyaster: function(a) {
                "master" == a ? this.connection || this.subscribe() : this.close()
            }, subscribe: function() {}, receive: function() {}, close: function() {}, onClose: function() {}, listen: function(data) {
                function _makeKV($0, $1, $2) {
                    try {
                        _data[$1] = "json" == _format ? eval("(" + $2 + ")") : $2;
                        _hasData=!0
                    } catch (e) {}
                }
                var _messages, _data, _format, _hasData, i, l;
                if (data) {
                    _messages = data.match(/^[\s\S]+?$/gm);
                    _data = {};
                    _format = this.cfg.format;
                    _hasData=!1;
                    for (i = 0, l = _messages.length; l > i; i++)
                        /^sys_ / .test(_messages[i]) || _messages[i].replace(/([^=]*)=([\s\S]*)/, _makeKV);
                    _hasData && this.onmessage(_data)
                }
            }, tryNative: function() {
                this.cfg.ondebug("尝试原生");
                if (checkNative()) {
                    this.nativeOK();
                    this.tryNative = function() {
                        return !0
                    };
                    return !0
                }
                this.tryNative = function() {
                    return !1
                };
                return !1
            }, nativeOK: function() {
                this.cfg.ondebug("原生可用");
                this.cfg.onMode("native");
                this.socket = WebSocket;
                this.subscribe = this.subScribeNative;
                this.receive = this.receiveNative;
                this.close = this.closeNative;
                this.onClose = this.onCloseNative
            }, subScribeNative: function() {
                var a;
                this.cfg.ondebug("变主，开始订阅");
                this.connection = new this.socket("ws://" + this.host + "/wskt?list=" + this.list);
                if (this.socket.isNotNative || this.connection.binaryType) {
                    a = this;
                    this.connection.toLongToConnectTimer = setTimeout(function() {
                        a.connection.close()
                    }, 4e3 / (this.closeTimes + 1));
                    a = this;
                    this.connection.onopen = function() {
                        this.opened=!0;
                        a.resetCloseTimesTimer = setTimeout(function() {
                            a.closeTimes = 0
                        }, 6e5)
                    };
                    a = this;
                    this.connection.refresher = setInterval(function() {
                        a.connection.opened && a.connection.send("")
                    }, 6e4);
                    this.connection.onmessage = fnBind(this.receive, this);
                    this.connection.onclose = fnBind(this.onClose, this)
                } else {
                    this.connection.close();
                    this.cfg.ondebug("webSocket不完整，不可用");
                    this.tryJS(!0)
                }
            }, receiveNative: function(a) {
                clearTimeout(this.connection.toLongToConnectTimer);
                this.cfg.local ? this.localConn.sendc(a.data.replace(/^sys_[\s\S]*?$(\r|\n)/gm, "")) : this.listen(a.data.replace(/^sys_[\s\S]*?$(\r|\n)/gm, ""))
            }, closeTimes: 0, maxRetryTimes : 3, closeNative : function() {
                this.localConn && this.localConn.close();
                this.localConn = null;
                this.socket = null;
                this.subscribe = function() {};
                this.receive = null;
                if (this.connection) {
                    clearInterval(this.connection.refresher);
                    this.connection.onclose = function() {};
                    this.connection.close();
                    this.connection = null
                }
            }, onCloseNative: function() {
                clearTimeout(this.resetCloseTimesTimer);
                this.closeTimes++;
                this.cfg.ondebug("socket断开一次，目前第" + this.closeTimes + "次");
                clearInterval(this.connection.refresher);
                this.connection.refresher = this.connection.onmessage = this.connection.onclose = null;
                this.connection = null;
                if (this.closeTimes >= this.maxRetryTimes) {
                    this.cfg.ondebug("超过尝试次数，切换为js模式");
                    this.tryJS(!0)
                } else 
                    this.subscribe()
            }, tryFlash: function() {
                this.cfg.ondebug("尝试flash，或等待flash中");
                if (WebSocket.flashOK) {
                    this.flashOK();
                    this.tryFlash = function() {
                        return !0
                    };
                    return !0
                }
                WebSocket.canUse || (this.tryFlash = function() {
                    return !1
                });
                return !1
            }, flashOK: function() {
                this.cfg.ondebug("flash可用");
                this.cfg.onMode("flash");
                this.socket = WebSocket;
                this.subscribe = this.subScribeNative;
                this.receive = this.receiveNative;
                this.close = this.closeNative;
                this.onClose = this.onCloseNative
            }, tryJS: function(a) {
                if (WebSocket.canUse&&!a)
                    return !1;
                if (window.loadHQ) {
                    this.jsHQOK();
                    return !0
                }
                getScript("http://finance.sina.com.cn/basejs/hq.js", fnBind(this.jsHQOK, this));
                return !0
            }, jsHQOK: function() {
                this.cfg.ondebug("使用js模式");
                this.cfg.onMode("js");
                this.tryJS = function() {
                    return !0
                };
                this.subscribe = this.subScribeJS;
                this.receive = this.receiveJS;
                this.close = this.closeJS;
                this.subscribe()
            }, subScribeJS: function() {
                var a = bindArg(loadHQ, this.list, fnBind(this.receive, this), {
                    domain: this.host,
                    type: this.cfg.format
                });
                a();
                this.connection = setInterval(a, 1e3 * this.cfg.interval)
            }, lastData: {}, receiveJS: function() {
                var c, d, e, a = {}, b = "json" == this.cfg.format ? "hq_json_": "hq_str_";
                for (d = 0, e = this.list.length; e > d; d++)
                    if (this.lastData[this.list[d]] !== window[b + this.list[d]]) {
                        this.lastData[this.list[d]] = a[this.list[d]] = window[b + this.list[d]];
                        c=!0
                    }
                c && this.onmessage(a)
            }, closeJS: function() {
                this.subscribe = function() {};
                this.localConn && this.localConn.close();
                this.localConn = null;
                clearInterval(this.connection)
            }
        });
        if ("object" == typeof localStorage && checkNative()) {
            _iframeID = "IO_WEBPUSH3_LOCALCONN_IFRAME";
            proxy = void 0;
            IO.LocalConn = function(a) {
                if (!_iframe) {
                    if (!(_iframe = document.getElementById(_iframeID))) {
                        _iframe = document.createElement("iframe");
                        _iframe.id = _iframeID;
                        _iframe.style.display = "none";
                        _iframe.src = "http://woocall.sina.com.cn/lib/iframe/IO.WebPush3.localConn.htm";
                        document.body.insertBefore(_iframe, document.body.firstChild)
                    }
                    _pWin = _iframe.contentWindow;
                    addEvent(window, "message", function(a) {
                        if ("M OK now!" == a.data) {
                            proxy = {};
                            proxy.postMessage = function(a) {
                                _pWin.postMessage(a, "*")
                            };
                            proxy.listen = function(a) {
                                addEvent(window, "message", a)
                            }
                        }
                    })
                }
                if (proxy) {
                    this.id = "lc" + Math.random();
                    this.id = this.id.replace("0.", "");
                    this.cfg = merge({
                        key: "",
                        onmessage: function() {},
                        onchange: function() {}
                    }, a);
                    var b = this;
                    proxy.listen(function(a) {
                        if ( - 1 != a.data.indexOf(b.id + ":")) {
                            var c, d;
                            a.data.replace(/([^:]+):([\s\S]*)/, function() {
                                c = arguments[1];
                                d = arguments[2]
                            });
                            switch (c) {
                            case"IO_LOCALCONN_ONCHANGE_" + b.id:
                                b.onchange(d);
                                break;
                            case"IO_LOCALCONN_ONMESSAGE_" + b.id:
                                b.onmessage(d)
                            }
                        }
                    });
                    proxy.postMessage(["newLocalConn(", this.cfg.key, ",", this.id, ")"].join(""))
                } else 
                    setTimeout(fnBind(arguments.callee, this, arguments), 100)
            };
            merge(IO.LocalConn.prototype, {
                onchange: function(a) {
                    this.cfg.onchange && this.cfg.onchange(a)
                },
                onmessage: function(a) {
                    this.cfg.onmessage && this.cfg.onmessage(a)
                },
                sendc: function(a) {
                    a && proxy.postMessage("IO_LOCALCONN_SEND_" + this.id + ":" + a)
                },
                close: function() {
                    proxy.postMessage("IO_LOCALCONN_CLOSE_" + this.id + ":now!")
                }
            })
        } else {
            IO.LocalConn = function(a) {
                this.cfg = merge({
                    key: "",
                    onmessage: function() {},
                    onchange: function() {}
                }, a);
                IO.LocalConn.flash = {
                    init: function() {}
                };
                IO.LocalConn.prototype.sendc = function(a) {
                    this.onmessage(a)
                };
                this.onchange("master")
            };
            merge(IO.LocalConn.prototype, {
                flashID: "localConnFlash",
                onchange: function(a) {
                    this.cfg.onchange && this.cfg.onchange(a)
                },
                onmessage: function(a) {
                    this.cfg.onmessage && this.cfg.onmessage(a)
                },
                sendc: function(a) {
                    a && this.constructor.flash.sendc(this.id, a)
                },
                close: function() {}
            });
            IO.LocalConn.flash=!1;
            IO.LocalConn.objs = {};
            IO.LocalConn.ready = function() {
                IO.LocalConn.flash = document.localConnFlash || window.localConnFlash
            };
            IO.LocalConn.onmessage = function(a, b) {
                this.objs[a].onmessage(b)
            };
            IO.LocalConn.onchange = function(a, b) {
                this.objs[a].onchange(b)
            }
        }
    }
}();
