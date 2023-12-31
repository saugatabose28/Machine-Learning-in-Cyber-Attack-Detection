window.Modernizr = function(e, t, i) {
    function n(e) {
        b.cssText = e
    }
    function o(e, t) {
        return n(k.join(e + ";") + (t || ""))
    }
    function s(e, t) {
        return typeof e === t
    }
    function r(e, t) {
        return !!~("" + e).indexOf(t)
    }
    function a(e, t) {
        for (var n in e)
            if (b[e[n]] !== i)
                return "pfx" == t ? e[n] : !0;
        return !1
    }
    function l(e, t, n) {
        for (var o in e) {
            var r = t[e[o]];
            if (r !== i)
                return n===!1 ? e[o] : s(r, "function") ? r.bind(n || t) : r
        }
        return !1
    }
    function c(e, t, i) {
        var n = e.charAt(0).toUpperCase() + e.substr(1), o = (e + " " + S.join(n + " ") + n).split(" ");
        return s(t, "string") || s(t, "undefined") ? a(o, t) : (o = (e + " " + M.join(n + " ") + n).split(" "), l(o, t, i))
    }
    function u() {
        f.input = function(i) {
            for (var n = 0, o = i.length; o > n; n++)
                A[i[n]]=!!(i[n]in w);
            return A.list && (A.list=!(!t.createElement("datalist") ||!e.HTMLDataListElement)), A
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), f.inputtypes = function(e) {
            for (var n, o, s, r = 0, a = e.length; a > r; r++)
                w.setAttribute("type", o = e[r]), n = "text" !== w.type, n && (w.value = _, w.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && w.style.WebkitAppearance !== i ? (g.appendChild(w), s = t.defaultView, n = s.getComputedStyle && "textfield" !== s.getComputedStyle(w, null).WebkitAppearance && 0 !== w.offsetHeight, g.removeChild(w)) : /^(search|tel)$/.test(o) || (/^(url|email)$/.test(o) ? n = w.checkValidity && w.checkValidity()===!1 : /^color$/.test(o) ? (g.appendChild(w), g.offsetWidth, n = w.value != _, g.removeChild(w)) : n = w.value != _)), E[e[r]]=!!n;
            return E
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var d, h, p = "2.5.2", f = {}, m=!0, g = t.documentElement, v = "modernizr", y = t.createElement(v), b = y.style, w = t.createElement("input"), _ = ":)", C = {}.toString, k = " -webkit- -moz- -o- -ms- ".split(" "), x = "Webkit Moz O ms", S = x.split(" "), M = x.toLowerCase().split(" "), T = {
        svg: "http://www.w3.org/2000/svg"
    }, D = {}, E = {}, A = {}, P = [], R = P.slice, F = function(e, i, n, o) {
        var s, r, a, l = t.createElement("div"), c = t.body, u = c ? c: t.createElement("body");
        if (parseInt(n, 10))
            for (; n--;)
                a = t.createElement("div"), a.id = o ? o[n] : v + (n + 1), l.appendChild(a);
        return s = ["&#173;", "<style>", e, "</style>"].join(""), l.id = v, u.innerHTML += s, u.appendChild(l), c || g.appendChild(u), r = i(l, e), c ? l.parentNode.removeChild(l) : u.parentNode.removeChild(u), !!r
    }, O = function(t) {
        var i = e.matchMedia || e.msMatchMedia;
        if (i)
            return i(t).matches;
        var n;
        return F("@media " + t + " { #" + v + " { position: absolute; } }", function(t) {
            n = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
        }), n
    }, I = function() {
        function e(e, o) {
            o = o || t.createElement(n[e] || "div"), e = "on" + e;
            var r = e in o;
            return r || (o.setAttribute || (o = t.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(e, ""), r = s(o[e], "function"), s(o[e], "undefined") || (o[e] = i), o.removeAttribute(e))), o = null, r
        }
        var n = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return e
    }(), W = {}.hasOwnProperty;
    h = s(W, "undefined") || s(W.call, "undefined") ? function(e, t) {
        return t in e && s(e.constructor.prototype[t], "undefined")
    } : function(e, t) {
        return W.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function(e) {
        var t = this;
        if ("function" != typeof t)
            throw new TypeError;
        var i = R.call(arguments, 1), n = function() {
            if (this instanceof n) {
                var o = function() {};
                o.prototype = t.prototype;
                var s = new o, r = t.apply(s, i.concat(R.call(arguments)));
                return Object(r) === r ? r : s
            }
            return t.apply(e, i.concat(R.call(arguments)))
        };
        return n
    }), function(i, n) {
        var o = i.join(""), s = n.length;
        F(o, function(i, n) {
            for (var o = t.styleSheets[t.styleSheets.length - 1], r = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "", a = i.childNodes, l = {}; s--;)
                l[a[s].id] = a[s];
            f.touch = "ontouchstart"in e || e.DocumentTouch && t instanceof DocumentTouch || 9 === (l.touch && l.touch.offsetTop), f.csstransforms3d = 9 === (l.csstransforms3d && l.csstransforms3d.offsetLeft) && 3 === l.csstransforms3d.offsetHeight, f.generatedcontent = (l.generatedcontent && l.generatedcontent.offsetHeight) >= 1, f.fontface = /src/i.test(r) && 0 === r.indexOf(n.split(" ")[0])
        }, s, n)
    }(['@font-face {font-family:"font";src:url("https://")}', ["@media (", k.join("touch-enabled),("), v, ")", "{#touch{top:9px;position:absolute}}"].join(""), ["@media (", k.join("transform-3d),("), v, ")", "{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join(""), ['#generatedcontent:after{content:"', _, '";visibility:hidden}'].join("")], ["fontface", "touch", "csstransforms3d", "generatedcontent"]), D.flexbox = function() {
        return c("flexOrder")
    }, D["flexbox-legacy"] = function() {
        return c("boxDirection")
    }, D.canvas = function() {
        var e = t.createElement("canvas");
        return !(!e.getContext ||!e.getContext("2d"))
    }, D.canvastext = function() {
        return !(!f.canvas ||!s(t.createElement("canvas").getContext("2d").fillText, "function"))
    }, D.webgl = function() {
        try {
            var n, o = t.createElement("canvas");
            n=!(!e.WebGLRenderingContext ||!o.getContext("experimental-webgl")&&!o.getContext("webgl")), o = i
        } catch (s) {
            n=!1
        }
        return n
    }, D.touch = function() {
        return f.touch
    }, D.geolocation = function() {
        return !!navigator.geolocation
    }, D.postmessage = function() {
        return !!e.postMessage
    }, D.websqldatabase = function() {
        return !!e.openDatabase
    }, D.indexedDB = function() {
        return !!c("indexedDB", e)
    }, D.hashchange = function() {
        return I("hashchange", e) && (t.documentMode === i || t.documentMode > 7)
    }, D.history = function() {
        return !(!e.history ||!history.pushState)
    }, D.draganddrop = function() {
        var e = t.createElement("div");
        return "draggable"in e || "ondragstart"in e && "ondrop"in e
    }, D.websockets = function() {
        for (var t =- 1, i = S.length; ++t < i;)
            if (e[S[t] + "WebSocket"])
                return !0;
        return "WebSocket"in e
    }, D.rgba = function() {
        return n("background-color:rgba(150,255,150,.5)"), r(b.backgroundColor, "rgba")
    }, D.hsla = function() {
        return n("background-color:hsla(120,40%,100%,.5)"), r(b.backgroundColor, "rgba") || r(b.backgroundColor, "hsla")
    }, D.multiplebgs = function() {
        return n("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
    }, D.backgroundsize = function() {
        return c("backgroundSize")
    }, D.borderimage = function() {
        return c("borderImage")
    }, D.borderradius = function() {
        return c("borderRadius")
    }, D.boxshadow = function() {
        return c("boxShadow")
    }, D.textshadow = function() {
        return "" === t.createElement("div").style.textShadow
    }, D.opacity = function() {
        return o("opacity:.55"), /^0.55$/.test(b.opacity)
    }, D.cssanimations = function() {
        return c("animationName")
    }, D.csscolumns = function() {
        return c("columnCount")
    }, D.cssgradients = function() {
        var e = "background-image:", t = "gradient(linear,left top,right bottom,from(#9f9),to(white));", i = "linear-gradient(left top,#9f9, white);";
        return n((e + "-webkit- ".split(" ").join(t + e) + k.join(i + e)).slice(0, - e.length)), r(b.backgroundImage, "gradient")
    }, D.cssreflections = function() {
        return c("boxReflect")
    }, D.csstransforms = function() {
        return !!c("transform")
    }, D.csstransforms3d = function() {
        var e=!!c("perspective");
        return e && "webkitPerspective"in g.style && (e = f.csstransforms3d), e
    }, D.csstransitions = function() {
        return c("transition")
    }, D.fontface = function() {
        return f.fontface
    }, D.generatedcontent = function() {
        return f.generatedcontent
    }, D.video = function() {
        var e = t.createElement("video"), i=!1;
        try {
            (i=!!e.canPlayType) && (i = new Boolean(i), i.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), i.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), i.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (n) {}
        return i
    }, D.audio = function() {
        var e = t.createElement("audio"), i=!1;
        try {
            (i=!!e.canPlayType) && (i = new Boolean(i), i.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), i.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), i.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), i.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (n) {}
        return i
    }, D.localstorage = function() {
        try {
            return localStorage.setItem(v, v), localStorage.removeItem(v), !0
        } catch (e) {
            return !1
        }
    }, D.sessionstorage = function() {
        try {
            return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
        } catch (e) {
            return !1
        }
    }, D.webworkers = function() {
        return !!e.Worker
    }, D.applicationcache = function() {
        return !!e.applicationCache
    }, D.svg = function() {
        return !!t.createElementNS&&!!t.createElementNS(T.svg, "svg").createSVGRect
    }, D.inlinesvg = function() {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == T.svg
    }, D.smil = function() {
        return !!t.createElementNS && /SVGAnimate/.test(C.call(t.createElementNS(T.svg, "animate")))
    }, D.svgclippaths = function() {
        return !!t.createElementNS && /SVGClipPath/.test(C.call(t.createElementNS(T.svg, "clipPath")))
    };
    for (var N in D)
        h(D, N) && (d = N.toLowerCase(), f[d] = D[N](), P.push((f[d] ? "" : "no-") + d));
    return f.input || u(), f.addTest = function(e, t) {
        if ("object" == typeof e)
            for (var n in e)
                h(e, n) && f.addTest(n, e[n]);
        else {
            if (e = e.toLowerCase(), f[e] !== i)
                return f;
            t = "function" == typeof t ? t() : t, g.className += " " + (t ? "" : "no-") + e, f[e] = t
        }
        return f
    }, n(""), y = w = null, function(e, t) {
        var i = function(e, i, n) {
            var o, s, r = t.body || (o = i.insertBefore(t.createElement("body"), i.firstChild));
            return r.insertBefore(e, r.firstChild), e.hidden=!0, s = "none" === (n ? n(e, null) : e.currentStyle).display, r.removeChild(e), o && i.removeChild(o), s
        }(t.createElement("a"), t.documentElement, e.getComputedStyle), n = function(e) {
            return e.innerHTML = "<x-element></x-element>", 1 === e.childNodes.length
        }(t.createElement("a")), o = Date.call, s = "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video", r = e.html5 || {};
        r = {
            elements: "object" == typeof r.elements ? r.elements: (r.elements || s).split(" "),
            shivCSS: !(r.shivCSS===!1),
            shivMethods: !(r.shivMethods===!1),
            shivDocument: function(e) {
                if (!n&&!e.documentShived) {
                    for (var t = e.createElement, s = e.createDocumentFragment, a = 0, l = r.elements, c = l.length; c > a; ++a)
                        o.call(t, e, l[a]);
                    e.createElement = function(i) {
                        var n = o.call(t, e, i);
                        return r.shivMethods && n.canHaveChildren&&!n.xmlns&&!n.tagUrn && r.shivDocument(n.document), n
                    }, e.createDocumentFragment = function() {
                        var t = o.call(s, e);
                        return r.shivMethods ? r.shivDocument(t) : t
                    }
                }
                var u = e.getElementsByTagName("head")[0];
                if (r.shivCSS&&!i && u) {
                    var d = e.createElement("p");
                    d.innerHTML = "x<style>article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}</style>", u.insertBefore(d.lastChild, u.firstChild)
                }
                return e.documentShived=!0, e
            }
        }, r.type = "default", e.html5 = r, r.shivDocument(t)
    }(this, t), f._version = p, f._prefixes = k, f._domPrefixes = M, f._cssomPrefixes = S, f.mq = O, f.hasEvent = I, f.testProp = function(e) {
        return a([e])
    }, f.testAllProps = c, f.testStyles = F, f.prefixed = function(e, t, i) {
        return t ? c(e, t, i) : c(e, "pfx")
    }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + P.join(" ") : ""), f
}(this, this.document);
