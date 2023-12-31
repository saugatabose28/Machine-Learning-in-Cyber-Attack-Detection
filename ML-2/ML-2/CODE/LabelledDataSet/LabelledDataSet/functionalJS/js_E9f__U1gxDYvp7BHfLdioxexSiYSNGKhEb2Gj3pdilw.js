/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;
window.Modernizr = function(a, b, c) {
    function C(a) {
        j.cssText = a
    }
    function D(a, b) {
        return C(n.join(a + ";") + (b || ""))
    }
    function E(a, b) {
        return typeof a === b
    }
    function F(a, b) {
        return !!~("" + a).indexOf(b)
    }
    function G(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!F(e, "-") && j[e] !== c)
                return b == "pfx" ? e : !0
        }
        return !1
    }
    function H(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)
                return d===!1 ? a[e] : E(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }
    function I(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + p.join(d + " ") + d).split(" ");
        return E(b, "string") || E(b, "undefined") ? G(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), H(e, b, c))
    }
    function J() {
        e.input = function(c) {
            for (var d = 0, e = c.length; d < e; d++)
                u[c[d]] = c[d]in k;
            return u.list && (u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement), u
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function(a) {
            for (var d = 0, e, f, h, i = a.length; d < i; d++)
                k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity()===!1 : e = k.value != l)), t[a[d]]=!!e;
            return t
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var d = "2.6.2", e = {}, f=!0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k = b.createElement("input"), l = ":)", m = {}.toString, n = " -webkit- -moz- -o- -ms- ".split(" "), o = "Webkit Moz O ms", p = o.split(" "), q = o.toLowerCase().split(" "), r = {
        svg: "http://www.w3.org/2000/svg"
    }, s = {}, t = {}, u = {}, v = [], w = v.slice, x, y = function(a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
        if (parseInt(d, 10))
            while (d--)
                j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
    }, z = function() {
        function d(d, e) {
            e = e || b.createElement(a[d] || "div"), d = "on" + d;
            var f = d in e;
            return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = E(e[d], "function"), E(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f
        }
        var a = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return d
    }(), A = {}.hasOwnProperty, B;
    !E(A, "undefined")&&!E(A.call, "undefined") ? B = function(a, b) {
        return A.call(a, b)
    } : B = function(a, b) {
        return b in a && E(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if (typeof c != "function")
            throw new TypeError;
        var d = w.call(arguments, 1), e = function() {
            if (this instanceof e) {
                var a = function() {};
                a.prototype = c.prototype;
                var f = new a, g = c.apply(f, d.concat(w.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(w.call(arguments)))
        };
        return e
    }), s.flexbox = function() {
        return I("flexWrap")
    }, s.flexboxlegacy = function() {
        return I("boxDirection")
    }, s.canvas = function() {
        var a = b.createElement("canvas");
        return !!a.getContext&&!!a.getContext("2d")
    }, s.canvastext = function() {
        return !!e.canvas&&!!E(b.createElement("canvas").getContext("2d").fillText, "function")
    }, s.webgl = function() {
        return !!a.WebGLRenderingContext
    }, s.touch = function() {
        var c;
        return "ontouchstart"in a || a.DocumentTouch && b instanceof DocumentTouch ? c=!0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
            c = a.offsetTop === 9
        }), c
    }, s.geolocation = function() {
        return "geolocation"in navigator
    }, s.postmessage = function() {
        return !!a.postMessage
    }, s.websqldatabase = function() {
        return !!a.openDatabase
    }, s.indexedDB = function() {
        return !!I("indexedDB", a)
    }, s.hashchange = function() {
        return z("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
    }, s.history = function() {
        return !!a.history&&!!history.pushState
    }, s.draganddrop = function() {
        var a = b.createElement("div");
        return "draggable"in a || "ondragstart"in a && "ondrop"in a
    }, s.websockets = function() {
        return "WebSocket"in a || "MozWebSocket"in a
    }, s.rgba = function() {
        return C("background-color:rgba(150,255,150,.5)"), F(j.backgroundColor, "rgba")
    }, s.hsla = function() {
        return C("background-color:hsla(120,40%,100%,.5)"), F(j.backgroundColor, "rgba") || F(j.backgroundColor, "hsla")
    }, s.multiplebgs = function() {
        return C("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background)
    }, s.backgroundsize = function() {
        return I("backgroundSize")
    }, s.borderimage = function() {
        return I("borderImage")
    }, s.borderradius = function() {
        return I("borderRadius")
    }, s.boxshadow = function() {
        return I("boxShadow")
    }, s.textshadow = function() {
        return b.createElement("div").style.textShadow === ""
    }, s.opacity = function() {
        return D("opacity:.55"), /^0.55$/.test(j.opacity)
    }, s.cssanimations = function() {
        return I("animationName")
    }, s.csscolumns = function() {
        return I("columnCount")
    }, s.cssgradients = function() {
        var a = "background-image:", b = "gradient(linear,left top,right bottom,from(#9f9),to(white));", c = "linear-gradient(left top,#9f9, white);";
        return C((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, - a.length)), F(j.backgroundImage, "gradient")
    }, s.cssreflections = function() {
        return I("boxReflect")
    }, s.csstransforms = function() {
        return !!I("transform")
    }, s.csstransforms3d = function() {
        var a=!!I("perspective");
        return a && "webkitPerspective"in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
            a = b.offsetLeft === 9 && b.offsetHeight === 3
        }), a
    }, s.csstransitions = function() {
        return I("transition")
    }, s.fontface = function() {
        var a;
        return y('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
            var e = b.getElementById("smodernizr"), f = e.sheet || e.styleSheet, g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText: f.cssText || "": "";
            a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0
        }), a
    }, s.generatedcontent = function() {
        var a;
        return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
            a = b.offsetHeight >= 3
        }), a
    }, s.video = function() {
        var a = b.createElement("video"), c=!1;
        try {
            if (c=!!a.canPlayType)
                c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
        } catch (d) {}
        return c
    }, s.audio = function() {
        var a = b.createElement("audio"), c=!1;
        try {
            if (c=!!a.canPlayType)
                c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "")
        } catch (d) {}
        return c
    }, s.localstorage = function() {
        try {
            return localStorage.setItem(h, h), localStorage.removeItem(h), !0
        } catch (a) {
            return !1
        }
    }, s.sessionstorage = function() {
        try {
            return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0
        } catch (a) {
            return !1
        }
    }, s.webworkers = function() {
        return !!a.Worker
    }, s.applicationcache = function() {
        return !!a.applicationCache
    }, s.svg = function() {
        return !!b.createElementNS&&!!b.createElementNS(r.svg, "svg").createSVGRect
    }, s.inlinesvg = function() {
        var a = b.createElement("div");
        return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r.svg
    }, s.smil = function() {
        return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")))
    }, s.svgclippaths = function() {
        return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")))
    };
    for (var K in s)
        B(s, K) && (x = K.toLowerCase(), e[x] = s[K](), v.push((e[x] ? "" : "no-") + x));
    return e.input || J(), e.addTest = function(a, b) {
        if (typeof a == "object")
            for (var d in a)
                B(a, d) && e.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (e[a] !== c)
                return e;
            b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
    }, C(""), i = k = null, function(a, b) {
        function k(a, b) {
            var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }
        function l() {
            var a = r.elements;
            return typeof a == "string" ? a.split(" ") : a
        }
        function m(a) {
            var b = i[a[g]];
            return b || (b = {}, h++, a[g] = h, i[h] = b), b
        }
        function n(a, c, f) {
            c || (c = b);
            if (j)
                return c.createElement(a);
            f || (f = m(c));
            var g;
            return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren&&!d.test(a) ? f.frag.appendChild(g) : g
        }
        function o(a, c) {
            a || (a = b);
            if (j)
                return a.createDocumentFragment();
            c = c || m(a);
            var d = c.frag.cloneNode(), e = 0, f = l(), g = f.length;
            for (; e < g; e++)
                d.createElement(f[e]);
            return d
        }
        function p(a, b) {
            b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                return r.shivMethods ? n(c, a, b) : b.createElem(c)
            }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
                return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
            }) + ");return n}")(r, b.frag)
        }
        function q(a) {
            a || (a = b);
            var c = m(a);
            return r.shivCSS&&!f&&!c.hasCSS && (c.hasCSS=!!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
        }
        var c = a.html5 || {}, d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, f, g = "_html5shiv", h = 0, i = {}, j;
        (function() {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>", f = "hidden"in a, j = a.childNodes.length == 1 || function() {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                }()
            } catch (c) {
                f=!0, j=!0
            }
        })();
        var r = {
            elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: c.shivCSS!==!1,
            supportsUnknownElements: j,
            shivMethods: c.shivMethods!==!1,
            type: "default",
            shivDocument: q,
            createElement: n,
            createDocumentFragment: o
        };
        a.html5 = r, q(b)
    }(this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.hasEvent = z, e.testProp = function(a) {
        return G([a])
    }, e.testAllProps = I, e.testStyles = y, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), e
}(this, this.document), function(a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a)
    }
    function e(a) {
        return "string" == typeof a
    }
    function f() {}
    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }
    function h() {
        var a = p.shift();
        q = 1, a ? a.t ? m(function() {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(), h()) : q = 0
    }
    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                "img" != a && m(function() {
                    t.removeChild(l)
                }, 50);
                for (var d in y[c])
                    y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }
        var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = {
            t: d,
            s: c,
            e: f,
            a: i,
            x: j
        };
        1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
            k.call(this, r)
        }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }
    function j(a, b, c, d, f) {
        return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }
    function k() {
        var a = B;
        return a.loader = {
            load: j,
            i: 0
        }, a
    }
    var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance"in l.style, s = r&&!!b.createRange().compareNode, t = s ? l: n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l=!!b.attachEvent&&!l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function(a) {
        return "[object Array]" == o.call(a)
    }, x = [], y = {}, z = {
        timeout: function(a, b) {
            return b.length && (a.timeout = b[0]), a
        }
    }, A, B;
    B = function(a) {
        function b(a) {
            var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {
                url: c,
                origUrl: c,
                prefixes: a
            }, e, f, g;
            for (f = 0; f < d; f++)
                g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++)
                c = x[f](c);
            return c
        }
        function g(a, e, f, g, h) {
            var i = b(a), j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec=!0 : y[i.url] = 1, f.load(i.url, i.forceCSS ||!i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
            })))
        }
        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a))
                        c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                    else if (Object(a) === a)
                        for (n in m = function() {
                            var b = 0, c;
                            for (c in a)
                                a.hasOwnProperty(c) && b++;
                                return b
                            }(), a)
                                a.hasOwnProperty(n) && (!c&&!--m && (d(j) ? j = function() {
                                    var a = [].slice.call(arguments);
                                    k.apply(this, a), l()
                                } : j[n] = function(a) {
                                    return function() {
                                        var b = [].slice.call(arguments);
                                        a && a.apply(this, b), l()
                                    }
                                }(k[n])), g(a[n], j, b, n, h))
                } else 
                    !c && l()
            }
            var h=!!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
            c(h ? a.yep : a.nope, !!i), i && c(i)
        }
        var i, j, l = this.yepnope.loader;
        if (e(a))
            g(a, 0, l, 0);
        else if (w(a))
            for (i = 0; i < a.length; i++)
                j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
        else 
            Object(a) === a && h(a, l)
    }, B.addPrefix = function(a, b) {
        z[a] = b
    }, B.addFilter = function(a) {
        x.push(a)
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
        b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
        var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
        k.src = a;
        for (o in d)
            k.setAttribute(o, d[o]);
        c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
            !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
        }, m(function() {
            l || (l = 1, c(1))
        }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
        var e = b.createElement("link"), j, c = i ? h: c || f;
        e.href = a, e.rel = "stylesheet", e.type = "text/css";
        for (j in d)
            e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
}(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
};;
eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c%a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--)
            r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }
        ];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--)
        if (k[c])
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('8={3c:"1.6",1E:"1i.2j,1i.26,1i.2l",1P:"",1Z:11,12:"",2n:11,Z:"",29:\'<N W="$0">$$</N>\',1T:"&#H;",1d:"&#H;&#H;&#H;&#H;",1r:"&#H;<1D/>",2X:5(){9 $(F).2B("1q")[0]},J:{},U:{}};(5($){$(5(){5 27(n,o){5 22(a,b){3 c=(18 b.4=="1f")?b.4:b.4.3q;q.1b({1F:a,4:"("+c+")",C:1+(c.z(/\\\\./g,"%").z(/\\[.*?\\]/g,"%").2W(/\\((?!\\?)/g)||[]).C,Q:(b.Q)?b.Q:8.29})}5 1z(){3 b=0;3 c=D 1y;R(3 i=0;i<q.C;i++){3 d=q[i].4;d=d.z(/\\\\\\\\|\\\\(\\d+)/g,5(m,a){9!a?m:"\\\\"+(b+1+1k(a))});c.1b(d);b+=q[i].C}3 e=c.2q("|");9 D 1o(e,(o.5e)?"2b":"g")}5 2e(a){9 a.z(/&/g,"&4N;").z(/</g,"&4H;")}5 23(b){9 b.z(/ +/g,5(a){9 a.z(/ /g,p)})}5 M(a){a=2e(a);7(p){a=23(a)}9 a}5 2i(c){3 i=0;3 j=1;3 d;X(d=q[i++]){3 e=I;7(e[j]){3 f=/(\\\\\\$)|(?:\\$\\$)|(?:\\$(\\d+))/g;3 g=d.Q.z(f,5(m,a,K){3 b=\'\';7(a){9"$"}A 7(!K){9 M(e[j])}A 7(K=="0"){9 d.1F}A{9 M(e[j+1k(K,10)])}});3 h=I[I.C-2];3 k=I[I.C-1];3 l=k.1S(t,h);t=h+c.C;s+=M(l)+g;9 g}A{j+=d.C}}}3 p=8.1T;3 q=D 1y;R(3 r 1N o.T){22(r,o.T[r])}3 s="";3 t=0;n.z(1z(),2i);3 u=n.1S(t,n.C);s+=M(u);9 s}5 1L(a){7(!8.U[a]){3 b=\'<3f 3e="1j" 3a="37/1K"\'+\' 34="\'+a+\'">\';8.U[a]=19;7($.30.2Y){3 c=G.1O(b);3 d=$(c);$("1B").1V(d)}A{$("1B").1V(b)}}}5 1h(a,b){3 c=a&&a.1g&&a.1g[0]&&a.1g[0].2O;7(!c)c="";c=c.z(/\\r\\n?/g,"\\n");3 d=27(c,b);7(8.1d){d=d.z(/\\t/g,8.1d)}7(8.1r){d=d.z(/\\n/g,8.1r)}$(a).2M(d)}5 16(a,b){3 c={12:8.12,1w:a+".Y",Z:8.Z,1X:a+".1K"};3 d;7(b&&18 b=="1v")d=$.2D(c,b);A d=c;9{B:d.12+d.1w,1j:d.Z+d.1X}}7($.1u)$.1u({2A:"1v.14"});3 v=D 1o("\\\\b"+8.1P+"\\\\b","2b");3 w=[];$(8.1E).1t(5(){3 c=F;3 d=$(c).2r("W");7(!d){9}3 e=$.2p(d.z(v,""));7(\'\'!=e){w.1b(c);3 f=16(e,c.14);7(8.1Z||c.14){7(!8.U[f.B]){1p{8.U[f.B]=19;$.5n(f.B,5(b){b.2k=f.B;8.J[f.B]=b;7(8.2n){1L(f.1j)}$("."+e).1t(5(){3 a=16(e,F.14);7(b.2k==a.B){1h(F,b)}})})}1l(59){55("B 50 R: "+e+\'@\'+4U)}}}A{3 g=8.J[f.B];7(g){1h(c,g)}}}});7(G.1m&&G.1m.28){5 21(a){7(\'\'==a){9""}1n{3 b=(D 4E()).24()}X(a.4x(b)>-1);a=a.z(/\\<1D[^>]*?\\>/4u,b);3 c=G.1O(\'<1q>\');c.4s=a;a=c.4r.z(D 1o(b,"g"),\'\\r\\n\');9 a}3 x="";3 y=1s;$(w).4j().M("1q").V("2h",5(){y=F}).V("2m",5(){7(y==F)x=G.1m.28().4c});$("49").V("48",5(){7(\'\'!=x){2f.41.3X(\'3W\',21(x));3U.3T=11}}).V("2h",5(){x=""}).V("2m",5(){y=1s})}})})(2c);8.J["2j.Y"]={T:{3L:{4:/\\/\\*[^*]*\\*+(?:[^\\/][^*]*\\*+)*\\//},2g:{4:/\\<!--(?:.|\\n)*?--\\>/},1W:{4:/\\/\\/.*/},3H:{4:/3G|3E|3D|3C|3A|3z|3y|3x|3w|3v|3u|3t|3s|3r|3m|z-3k/},3j:{4:/\\/[^\\/\\\\\\n]*(?:\\\\.[^\\/\\\\\\n]*)*\\/[3i]*/},1f:{4:/(?:\\\'[^\\\'\\\\\\n]*(?:\\\\.[^\\\'\\\\\\n]*)*\\\')|(?:\\"[^\\"\\\\\\n]*(?:\\\\.[^\\"\\\\\\n]*)*\\")/},1M:{4:/\\b[+-]?(?:\\d*\\.?\\d+|\\d+\\.?\\d*)(?:[1a][+-]?\\d+)?\\b/},3g:{4:/\\b(I|1C|1J|1l|1H|1I|3d|1n|A|11|R|5|7|1N|3b|D|1s|9|1G|F|19|1p|18|3|39|X|38)\\b/},1e:{4:/\\b(36|24|2f|35|3h|33|G|32|31|1k|3l|2Z|3n|3o|3p|2V|2U|2T)\\b/},1c:{4:/(?:\\<\\w+)|(?:\\>)|(?:\\<\\/\\w+\\>)|(?:\\/\\>)/},1R:{4:/\\s+\\w+(?=\\s*=)/},1Q:{4:/([\\"\\\'])(?:(?:[^\\1\\\\\\r\\n]*?(?:\\1\\1|\\\\.))*[^\\1\\\\\\r\\n]*?)\\1/},1A:{4:/&[\\w#]+?;/},2S:{4:/(\\$|2c)/}}};8.J["26.Y"]={T:{2g:{4:/\\<!--(?:.|\\n)*?--\\>/},1f:{4:/(?:\\\'[^\\\'\\\\\\n]*(?:\\\\.[^\\\'\\\\\\n]*)*\\\')|(?:\\"[^\\"\\\\\\n]*(?:\\\\.[^\\"\\\\\\n]*)*\\")/},1M:{4:/\\b[+-]?(?:\\d*\\.?\\d+|\\d+\\.?\\d*)(?:[1a][+-]?\\d+)?\\b/},1c:{4:/(?:\\<\\w+)|(?:\\>)|(?:\\<\\/\\w+\\>)|(?:\\/\\>)/},1R:{4:/\\s+\\w+(?=\\s*=)/},1Q:{4:/([\\"\\\'])(?:(?:[^\\1\\\\\\r\\n]*?(?:\\1\\1|\\\\.))*[^\\1\\\\\\r\\n]*?)\\1/},1A:{4:/&[\\w#]+?;/}}};8.J["2l.Y"]={T:{2R:{4:/\\/\\*[^*]*\\*+([^\\/][^*]*\\*+)*\\//},1W:{4:/(?:\\/\\/.*)|(?:[^\\\\]\\#.*)/},2Q:{4:/\\\'[^\\\'\\\\]*(?:\\\\.[^\\\'\\\\]*)*\\\'/},2P:{4:/\\"[^\\"\\\\]*(?:\\\\.[^\\"\\\\]*)*\\"/},3B:{4:/\\b(?:[2N][1U][17][17]|[3F][2L][1U][1x]|[2K][2J][17][2I][1x])\\b/},2H:{4:/\\b[+-]?(\\d*\\.?\\d+|\\d+\\.?\\d*)([1a][+-]?\\d+)?\\b/},2G:{4:/\\b(?:3M|2F(?:2E|3O(?:3P(?:15|13)|2C(?:15|13))|15|1Y|2z|2y|2x(?:15|1Y|13)|13)|P(?:2w(?:2v|2u)|3Z(?:2t|2s(?:42|43)|44|E(?:2o|46)|5m(?:5l|5g)|L(?:5b|5a)|O(?:S|52(?:51|4Z|4X))|4T|S(?:4R|4Q|4P)|4M))|4L)\\b/},1e:{4:/(?:\\$4J|\\$4I|\\$4G|\\$4F|\\$4D|\\$4A|\\$4z|\\$4y|\\$4w|\\$4v)\\b/},25:{4:/\\b(?:4t|4B|4C|4q|4p|4o|4n|4m|4l|1C|1J|1l|4k|W|4K|4i|1H|4h|1I|4g|1n|4O|A|4f|4e|4d|4S|4b|4a|4V|4W|47|4Y|45|2a|2a|40|R|3Y|5|1e|7|53|54|3V|56|57|58|D|3S|3R|3Q|3N|5c|5d|3K|5f|3J|9|3I|1G|F|5h|1p|5i|5j|3|X|5k)\\b/},2d:{4:/\\$(\\w+)/,Q:\'<N W="25">$</N><N W="2d">$1</N>\'},1c:{4:/(?:\\<\\?[20][5o][20])|(?:\\<\\?)|(?:\\?\\>)/}}}', 62, 335, '|||var|exp|function||if|ChiliBook|return||||||||||||||||||||||||||replace|else|recipe|length|new||this|document|160|arguments|recipes|||filter|span|||replacement|for||steps|required|bind|class|while|js|stylesheetFolder||false|recipeFolder|WARNING|chili|ERROR|getPath|Ll|typeof|true|eE|push|tag|replaceTab|global|string|childNodes|makeDish|code|stylesheet|parseInt|catch|selection|do|RegExp|try|pre|replaceNewLine|null|each|metaobjects|object|recipeFile|Ee|Array|knowHow|entity|head|break|br|elementPath|stepName|switch|continue|default|case|css|checkCSS|numbers|in|createElement|elementClass|avalue|aname|substring|replaceSpace|Uu|append|com|stylesheetFile|NOTICE|recipeLoading|Pp|preformatted|prepareStep|replaceSpaces|valueOf|keyword|xml|cook|createRange|defaultReplacement|extends|gi|jQuery|variable|escapeHTML|window|htcom|mousedown|chef|mix|path|php|mouseup|stylesheetLoading|OL|trim|join|attr|CONFIG_FILE_|BINDIR|INSTALL_DIR|EXTENSION_DIR|EAR_|USER_|STRICT|PARSE|selector|next|RE_|extend|ALL|E_|const1|number|Ss|Aa|Ff|Rr|html|Nn|data|string2|string1|mlcom|jquery|Infinity|isNaN|NaN|match|getPRE|msie|setTimeout|browser|unescape|escape|constructor|href|element|toString|text|with|void|type|instanceof|version|delete|rel|link|keywords|prototype|gim|regexp|content|parseFloat|taconite|clearTimeout|setInterval|clearInterval|source|clearFields|clearForm|resetForm|fieldValue|formSerialize|fieldSerialize|ajaxSubmit|ajaxForm|unblock|block|value|onUnblock|unblockUI|blockUI|Tt|silverlight|plugin|static|require_once|public|jscom|DEFAULT_INCLUDE_PATH|print|CO|MPILE_|php_user_filter|or|old_function|returnValue|event|include_once|Text|setData|foreach|HP_|final|clipboardData|PATH|SCAN_DIR|DATADIR|exit|XTENSION_DIR|eval|copy|body|endif|endforeach|htmlText|enddeclare|empty|elseif|die|declare|const|parents|cfunction|as|array|and|abstract|__METHOD__|__LINE__|innerText|innerHTML|__CLASS__|ig|php_errormsg|_SESSION|indexOf|_SERVER|_REQUEST|_POST|__FILE__|__FUNCTION__|_GET|Date|_FILES|_ENV|lt|_COOKIE|GLOBALS|clone|__COMPILER_HALT_OFFSET__|VERSION|amp|echo|YSCONFDIR|HLIB_SUFFIX|API|endfor|PREFIX|recipePath|endswitch|endwhile|START|exception|END|unavailable|CONT|UTPUT_HANDLER_|implements|include|alert|interface|isset|list|recipeNotAvailable|OCALSTATEDIR|IBDIR|private|protected|ignoreCase|require|SIZE|throw|unset|use|xor|MAX|INT_|getJSON|Hh'.split('|'), 0, {}));;
/*!
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version: 2.9999.8 (26-OCT-2012)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.3.2 or later
 */
;
(function($, undefined) {
    "use strict";

    var ver = '2.9999.8';

    // if $.support is not defined (pre jQuery 1.3) add what I need
    if ($.support === undefined) {
        $.support = {
            opacity: !($.browser.msie)
        };
    }

    function debug(s) {
        if ($.fn.cycle.debug)
            log(s);
    }
    function log() {
        if (window.console && console.log)
            console.log('[cycle] ' + Array.prototype.join.call(arguments, ' '));
    }
    $.expr[':'].paused = function(el) {
        return el.cyclePause;
    };


    // the options arg can be...
    //   a number  - indicates an immediate transition should occur to the given slide index
    //   a string  - 'pause', 'resume', 'toggle', 'next', 'prev', 'stop', 'destroy' or the name of a transition effect (ie, 'fade', 'zoom', etc)
    //   an object - properties to control the slideshow
    //
    // the arg2 arg can be...
    //   the name of an fx (only used in conjunction with a numeric value for 'options')
    //   the value true (only used in first arg == 'resume') and indicates
    //	 that the resume should occur immediately (not wait for next timeout)

    $.fn.cycle = function(options, arg2) {
        var o = {
            s: this.selector,
            c: this.context 
        };

        // in 1.3+ we can fix mistakes with the ready state
        if (this.length === 0 && options != 'stop') {
            if (!$.isReady && o.s) {
                log('DOM not ready, queuing slideshow');
                $(function() {
                    $(o.s, o.c).cycle(options, arg2);
                });
                return this;
            }
            // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
            log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
            return this;
        }

        // iterate the matched nodeset
        return this.each(function() {
            var opts = handleArguments(this, options, arg2);
            if (opts === false)
                return;

            opts.updateActivePagerLink = opts.updateActivePagerLink || $.fn.cycle.updateActivePagerLink;

            // stop existing slideshow for this container (if there is one)
            if (this.cycleTimeout)
                clearTimeout(this.cycleTimeout);
            this.cycleTimeout = this.cyclePause = 0;
            this.cycleStop = 0; // issue #108

            var $cont = $(this);
            var $slides = opts.slideExpr ? $(opts.slideExpr, this) : $cont.children();
            var els = $slides.get();

            if (els.length < 2) {
                log('terminating; too few slides: ' + els.length);
                return;
            }

            var opts2 = buildOptions($cont, $slides, els, opts, o);
            if (opts2 === false)
                return;

            var startTime = opts2.continuous ? 10 : getTimeout(els[opts2.currSlide], els[opts2.nextSlide], opts2, !opts2.backwards);

            // if it's an auto slideshow, kick it off
            if (startTime) {
                startTime += (opts2.delay || 0);
                if (startTime < 10)
                    startTime = 10;
                debug('first timeout: ' + startTime);
                this.cycleTimeout = setTimeout(function() {
                    go(els, opts2, 0, !opts.backwards);
                }, startTime);
            }
        });
    };

    function triggerPause(cont, byHover, onPager) {
        var opts = $(cont).data('cycle.opts');
        if (!opts)
            return;
        var paused = !!cont.cyclePause;
        if (paused && opts.paused)
            opts.paused(cont, opts, byHover, onPager);
        else if (!paused && opts.resumed)
            opts.resumed(cont, opts, byHover, onPager);
    }

    // process the args that were passed to the plugin fn
    function handleArguments(cont, options, arg2) {
        if (cont.cycleStop === undefined)
            cont.cycleStop = 0;
        if (options === undefined || options === null)
            options = {};
        if (options.constructor == String) {
            switch (options) {
            case 'destroy':
            case 'stop':
                var opts = $(cont).data('cycle.opts');
                if (!opts)
                    return false;
                cont.cycleStop++; // callbacks look for change
                if (cont.cycleTimeout)
                    clearTimeout(cont.cycleTimeout);
                cont.cycleTimeout = 0;
                if (opts.elements)
                    $(opts.elements).stop();
                $(cont).removeData('cycle.opts');
                if (options == 'destroy')
                    destroy(cont, opts);
                return false;
            case 'toggle':
                cont.cyclePause = (cont.cyclePause === 1) ? 0 : 1;
                checkInstantResume(cont.cyclePause, arg2, cont);
                triggerPause(cont);
                return false;
            case 'pause':
                cont.cyclePause = 1;
                triggerPause(cont);
                return false;
            case 'resume':
                cont.cyclePause = 0;
                checkInstantResume(false, arg2, cont);
                triggerPause(cont);
                return false;
            case 'prev':
            case 'next':
                opts = $(cont).data('cycle.opts');
                if (!opts) {
                    log('options not found, "prev/next" ignored');
                    return false;
                }
                $.fn.cycle[options](opts);
                return false;
            default:
                options = {
                    fx: options 
                };
            }
            return options;
        } else if (options.constructor == Number) {
            // go to the requested slide
            var num = options;
            options = $(cont).data('cycle.opts');
            if (!options) {
                log('options not found, can not advance slide');
                return false;
            }
            if (num < 0 || num >= options.elements.length) {
                log('invalid slide index: ' + num);
                return false;
            }
            options.nextSlide = num;
            if (cont.cycleTimeout) {
                clearTimeout(cont.cycleTimeout);
                cont.cycleTimeout = 0;
            }
            if (typeof arg2 == 'string')
                options.oneTimeFx = arg2;
            go(options.elements, options, 1, num >= options.currSlide);
            return false;
        }
        return options;

        function checkInstantResume(isPaused, arg2, cont) {
            if (!isPaused && arg2 === true) {
                // resume now!
                var options = $(cont).data('cycle.opts');
                if (!options) {
                    log('options not found, can not resume');
                    return false;
                }
                if (cont.cycleTimeout) {
                    clearTimeout(cont.cycleTimeout);
                    cont.cycleTimeout = 0;
                }
                go(options.elements, options, 1, !options.backwards);
            }
        }
    }

    function removeFilter(el, opts) {
        if (!$.support.opacity && opts.cleartype && el.style.filter) {
            try {
                el.style.removeAttribute('filter');
            } catch (smother) {}
            // handle old opera versions
        }
    }

    // unbind event handlers
    function destroy(cont, opts) {
        if (opts.next)
            $(opts.next).unbind(opts.prevNextEvent);
        if (opts.prev)
            $(opts.prev).unbind(opts.prevNextEvent);

        if (opts.pager || opts.pagerAnchorBuilder)
            $.each(opts.pagerAnchors || [], function() {
                this.unbind().remove();
            });
        opts.pagerAnchors = null;
        $(cont).unbind('mouseenter.cycle mouseleave.cycle');
        if (opts.destroy) // callback
        opts.destroy(opts);
    }

    // one-time initialization
    function buildOptions($cont, $slides, els, options, o) {
        var startingSlideSpecified;
        // support metadata plugin (v1.0 and v2.0)
        var opts = $.extend({}, $.fn.cycle.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
        var meta = $.isFunction($cont.data) ? $cont.data(opts.metaAttr) : null;
        if (meta)
            opts = $.extend(opts, meta);
        if (opts.autostop)
            opts.countdown = opts.autostopCount || els.length;

        var cont = $cont[0];
        $cont.data('cycle.opts', opts);
        opts.$cont = $cont;
        opts.stopCount = cont.cycleStop;
        opts.elements = els;
        opts.before = opts.before ? [opts.before] : [];
        opts.after = opts.after ? [opts.after] : [];

        // push some after callbacks
        if (!$.support.opacity && opts.cleartype)
            opts.after.push(function() {
                removeFilter(this, opts);
            });
        if (opts.continuous)
            opts.after.push(function() {
                go(els, opts, 0, !opts.backwards);
            });

        saveOriginalOpts(opts);

        // clearType corrections
        if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
            clearTypeFix($slides);

        // container requires non-static position so that slides can be position within
        if ($cont.css('position') == 'static')
            $cont.css('position', 'relative');
        if (opts.width)
            $cont.width(opts.width);
        if (opts.height && opts.height != 'auto')
            $cont.height(opts.height);

        if (opts.startingSlide !== undefined) {
            opts.startingSlide = parseInt(opts.startingSlide, 10);
            if (opts.startingSlide >= els.length || opts.startSlide < 0)
                opts.startingSlide = 0; // catch bogus input
            else 
                startingSlideSpecified = true;
        } else if (opts.backwards)
            opts.startingSlide = els.length - 1;
        else
            opts.startingSlide = 0;

        // if random, mix up the slide array
        if (opts.random) {
            opts.randomMap = [];
            for (var i = 0; i < els.length; i++)
                opts.randomMap.push(i);
            opts.randomMap.sort(function(a, b) {
                return Math.random() - 0.5;
            });
            if (startingSlideSpecified) {
                // try to find the specified starting slide and if found set start slide index in the map accordingly
                for ( var cnt = 0; cnt < els.length; cnt++ ) {
                    if ( opts.startingSlide == opts.randomMap[cnt] ) {
                        opts.randomIndex = cnt;
                    }
                }
            } else {
                opts.randomIndex = 1;
                opts.startingSlide = opts.randomMap[1];
            }
        } else if (opts.startingSlide >= els.length)
            opts.startingSlide = 0; // catch bogus input
        opts.currSlide = opts.startingSlide || 0;
        var first = opts.startingSlide;

        // set position and zIndex on all the slides
        $slides.css({
            position: 'absolute',
            top: 0,
            left: 0
        }).hide().each(function(i) {
            var z;
            if (opts.backwards)
                z = first ? i <= first ? els.length + (i - first) : first - i : els.length - i;
            else
                z = first ? i >= first ? els.length - (i - first) : first - i : els.length - i;
            $(this).css('z-index', z);
        });

        // make sure first slide is visible
        $(els[first]).css('opacity', 1).show(); // opacity bit needed to handle restart use case
        removeFilter(els[first], opts);

        // stretch slides
        if (opts.fit) {
            if (!opts.aspect) {
                if (opts.width)
                    $slides.width(opts.width);
                if (opts.height && opts.height != 'auto')
                    $slides.height(opts.height);
            } else {
                $slides.each(function() {
                    var $slide = $(this);
                    var ratio = (opts.aspect === true) ? $slide.width() / $slide.height() : opts.aspect;
                    if ( opts.width && $slide.width() != opts.width ) {
                        $slide.width( opts.width );
                        $slide.height( opts.width / ratio );
                    }

                    if ( opts.height && $slide.height() < opts.height ) {
                        $slide.height( opts.height );
                        $slide.width( opts.height * ratio );
                    }
                });
            }
        }

        if (opts.center && ((!opts.fit) || opts.aspect)) {
            $slides.each(function() {
                var $slide = $(this);
                $slide.css({
                    "margin-left": opts.width ?
                    ((opts.width - $slide.width()) / 2) + "px" :
                    0,
                    "margin-top": opts.height ?
                    ((opts.height - $slide.height()) / 2) + "px" :
                    0
                });
            });
        }

        if (opts.center && !opts.fit && !opts.slideResize) {
            $slides.each(function() {
                var $slide = $(this);
                $slide.css({
                    "margin-left": opts.width ? ((opts.width - $slide.width()) / 2) + "px" : 0,
                    "margin-top": opts.height ? ((opts.height - $slide.height()) / 2) + "px" : 0
                });
            });
        }

        // stretch container
        var reshape = (opts.containerResize || opts.containerResizeHeight) && !$cont.innerHeight();
        if (reshape) {
            // do this only if container has no size http://tinyurl.com/da2oa9
            var maxw = 0, maxh = 0;
            for (var j = 0; j < els.length; j++) {
                var $e = $(els[j]), e = $e[0], w = $e.outerWidth(), h = $e.outerHeight();
                if (!w) 
                    w = e.offsetWidth || e.width || $e.attr('width');
                if (!h) 
                    h = e.offsetHeight || e.height || $e.attr('height');
                maxw = w > maxw ? w : maxw;
                maxh = h > maxh ? h : maxh;
            }
            if (opts.containerResize && maxw > 0 && maxh > 0)
                $cont.css({
                    width: maxw + 'px',
                    height: maxh + 'px'
                });
            if (opts.containerResizeHeight && maxh > 0)
                $cont.css({
                    height: maxh + 'px'
                });
        }

        var pauseFlag = false; // https://github.com/malsup/cycle/issues/44
        if (opts.pause)
            $cont.bind('mouseenter.cycle', function() {
                pauseFlag = true;
                this.cyclePause++;
                triggerPause(cont, true);
            }).bind('mouseleave.cycle', function() {
                if (pauseFlag)
                    this.cyclePause--;
                    triggerPause(cont, true);
                });

        if (supportMultiTransitions(opts) === false)
            return false;

        // apparently a lot of people use image slideshows without height/width attributes on the images.
        // Cycle 2.50+ requires the sizing info for every slide; this block tries to deal with that.
        var requeue = false;
        options.requeueAttempts = options.requeueAttempts || 0;
        $slides.each(function() {
            // try to get height/width of each slide
            var $el = $(this);
            this.cycleH = (opts.fit && opts.height) ? opts.height : ($el.height() || this.offsetHeight || this.height || $el.attr('height') || 0);
            this.cycleW = (opts.fit && opts.width) ? opts.width : ($el.width() || this.offsetWidth || this.width || $el.attr('width') || 0);

            if ( $el.is('img') ) {
                // sigh..  sniffing, hacking, shrugging...  this crappy hack tries to account for what browsers do when
                // an image is being downloaded and the markup did not include sizing info (height/width attributes);
                // there seems to be some "default" sizes used in this situation
                var loadingIE = ($.browser.msie && this.cycleW == 28 && this.cycleH == 30 && !this.complete);
                var loadingFF = ($.browser.mozilla && this.cycleW == 34 && this.cycleH == 19 && !this.complete);
                var loadingOp = ($.browser.opera && ((this.cycleW == 42 && this.cycleH == 19) || (this.cycleW == 37 && this.cycleH == 17)) && !this.complete);
                var loadingOther = (this.cycleH === 0 && this.cycleW === 0 && !this.complete);
                // don't requeue for images that are still loading but have a valid size
                if (loadingIE || loadingFF || loadingOp || loadingOther) {
                    if (o.s && opts.requeueOnImageNotLoaded && ++options.requeueAttempts < 100) {
                        // track retry count so we don't loop forever
                        log(options.requeueAttempts, ' - img slide not loaded, requeuing slideshow: ', this.src, this.cycleW, this.cycleH);
                        setTimeout(function() {
                            $(o.s, o.c).cycle(options);
                        }, opts.requeueTimeout);
                        requeue = true;
                        return false; // break each loop
                    } else {
                        log('could not determine size of image: ' + this.src, this.cycleW, this.cycleH);
                    }
                }
            }
            return true;
        });

        if (requeue)
            return false;

        opts.cssBefore = opts.cssBefore || {};
        opts.cssAfter = opts.cssAfter || {};
        opts.cssFirst = opts.cssFirst || {};
        opts.animIn = opts.animIn || {};
        opts.animOut = opts.animOut || {};

        $slides.not(':eq(' + first + ')').css(opts.cssBefore);
        $($slides[first]).css(opts.cssFirst);

        if (opts.timeout) {
            opts.timeout = parseInt(opts.timeout, 10);
            // ensure that timeout and speed settings are sane
            if (opts.speed.constructor == String)
                opts.speed = $.fx.speeds[opts.speed] || parseInt(opts.speed, 10);
            if (!opts.sync)
                opts.speed = opts.speed / 2;

            var buffer = opts.fx == 'none' ? 0 : opts.fx == 'shuffle' ? 500 : 250;
            while ((opts.timeout - opts.speed) < buffer) // sanitize timeout
            opts.timeout += opts.speed;
        }
        if (opts.easing)
            opts.easeIn = opts.easeOut = opts.easing;
        if (!opts.speedIn)
            opts.speedIn = opts.speed;
        if (!opts.speedOut)
            opts.speedOut = opts.speed;

        opts.slideCount = els.length;
        opts.currSlide = opts.lastSlide = first;
        if (opts.random) {
            if (++opts.randomIndex == els.length)
                opts.randomIndex = 0;
            opts.nextSlide = opts.randomMap[opts.randomIndex];
        } else if (opts.backwards)
            opts.nextSlide = opts.startingSlide === 0 ? (els.length - 1) : opts.startingSlide - 1;
        else
            opts.nextSlide = opts.startingSlide >= (els.length - 1) ? 0 : opts.startingSlide + 1;

        // run transition init fn
        if (!opts.multiFx) {
            var init = $.fn.cycle.transitions[opts.fx];
            if ($.isFunction(init))
                init($cont, $slides, opts);
            else if (opts.fx != 'custom' && !opts.multiFx) {
                log('unknown transition: ' + opts.fx, '; slideshow terminating');
                return false;
            }
        }

        // fire artificial events
        var e0 = $slides[first];
        if (!opts.skipInitializationCallbacks) {
            if (opts.before.length)
                opts.before[0].apply(e0, [e0, e0, opts, true]);
            if (opts.after.length)
                opts.after[0].apply(e0, [e0, e0, opts, true]);
        }
        if (opts.next)
            $(opts.next).bind(opts.prevNextEvent, function() {
                return advance(opts, 1);
            });
        if (opts.prev)
            $(opts.prev).bind(opts.prevNextEvent, function() {
                return advance(opts, 0);
            });
        if (opts.pager || opts.pagerAnchorBuilder)
            buildPager(els, opts);

        exposeAddSlide(opts, els);

        return opts;
    }

    // save off original opts so we can restore after clearing state
    function saveOriginalOpts(opts) {
        opts.original = {
            before: [],
            after: [] 
        };
        opts.original.cssBefore = $.extend({}, opts.cssBefore);
        opts.original.cssAfter = $.extend({}, opts.cssAfter);
        opts.original.animIn = $.extend({}, opts.animIn);
        opts.original.animOut = $.extend({}, opts.animOut);
        $.each(opts.before, function() {
            opts.original.before.push(this);
        });
        $.each(opts.after, function() {
            opts.original.after.push(this);
        });
    }

    function supportMultiTransitions(opts) {
        var i, tx, txs = $.fn.cycle.transitions;
        // look for multiple effects
        if (opts.fx.indexOf(',') > 0) {
            opts.multiFx = true;
            opts.fxs = opts.fx.replace(/\s*/g, '').split(',');
            // discard any bogus effect names
            for (i = 0; i < opts.fxs.length; i++) {
                var fx = opts.fxs[i];
                tx = txs[fx];
                if (!tx || !txs.hasOwnProperty(fx) || !$.isFunction(tx)) {
                    log('discarding unknown transition: ', fx);
                    opts.fxs.splice(i, 1);
                    i--;
                }
            }
            // if we have an empty list then we threw everything away!
            if (!opts.fxs.length) {
                log('No valid transitions named; slideshow terminating.');
                return false;
            }
        } else if (opts.fx == 'all') {
            // auto-gen the list of transitions
            opts.multiFx = true;
            opts.fxs = [];
            for (var p in txs) {
                if (txs.hasOwnProperty(p)) {
                    tx = txs[p];
                    if (txs.hasOwnProperty(p) && $.isFunction(tx))
                        opts.fxs.push(p);
                }
            }
        }
        if (opts.multiFx && opts.randomizeEffects) {
            // munge the fxs array to make effect selection random
            var r1 = Math.floor(Math.random() * 20) + 30;
            for (i = 0; i < r1; i++) {
                var r2 = Math.floor(Math.random() * opts.fxs.length);
                opts.fxs.push(opts.fxs.splice(r2, 1)[0]);
            }
            debug('randomized fx sequence: ', opts.fxs);
        }
        return true;
    }

    // provide a mechanism for adding slides after the slideshow has started
    function exposeAddSlide(opts, els) {
        opts.addSlide = function(newSlide, prepend) {
            var $s = $(newSlide), s = $s[0];
            if (!opts.autostopCount)
                opts.countdown++;
            els[prepend ? 'unshift': 'push'](s);
            if (opts.els)
                opts.els[prepend ? 'unshift': 'push'](s); // shuffle needs this
            opts.slideCount = els.length;

            // add the slide to the random map and resort
            if (opts.random) {
                opts.randomMap.push(opts.slideCount - 1);
                opts.randomMap.sort(function(a, b) {
                    return Math.random() - 0.5;
                });
            }

            $s.css('position', 'absolute');
            $s[prepend ? 'prependTo': 'appendTo'](opts.$cont);

            if (prepend) {
                opts.currSlide++;
                opts.nextSlide++;
            }

            if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
                clearTypeFix($s);

            if (opts.fit && opts.width)
                $s.width(opts.width);
            if (opts.fit && opts.height && opts.height != 'auto')
                $s.height(opts.height);
            s.cycleH = (opts.fit && opts.height) ? opts.height : $s.height();
            s.cycleW = (opts.fit && opts.width) ? opts.width : $s.width();

            $s.css(opts.cssBefore);

            if (opts.pager || opts.pagerAnchorBuilder)
                $.fn.cycle.createPagerAnchor(els.length - 1, s, $(opts.pager), els, opts);

            if ($.isFunction(opts.onAddSlide))
                opts.onAddSlide($s);
            else
                $s.hide(); // default behavior
        };
    }

    // reset internal state; we do this on every pass in order to support multiple effects
    $.fn.cycle.resetState = function(opts, fx) {
        fx = fx || opts.fx;
        opts.before = [];
        opts.after = [];
        opts.cssBefore = $.extend({}, opts.original.cssBefore);
        opts.cssAfter = $.extend({}, opts.original.cssAfter);
        opts.animIn = $.extend({}, opts.original.animIn);
        opts.animOut = $.extend({}, opts.original.animOut);
        opts.fxFn = null;
        $.each(opts.original.before, function() {
            opts.before.push(this);
        });
        $.each(opts.original.after, function() {
            opts.after.push(this);
        });

        // re-init
        var init = $.fn.cycle.transitions[fx];
        if ($.isFunction(init))
            init(opts.$cont, $(opts.elements), opts);
    };

    // this is the main engine fn, it handles the timeouts, callbacks and slide index mgmt
    function go(els, opts, manual, fwd) {
        var p = opts.$cont[0], curr = els[opts.currSlide], next = els[opts.nextSlide];

        // opts.busy is true if we're in the middle of an animation
        if (manual && opts.busy && opts.manualTrump) {
            // let manual transitions requests trump active ones
            debug('manualTrump in go(), stopping active transition');
            $(els).stop(true, true);
            opts.busy = 0;
            clearTimeout(p.cycleTimeout);
        }

        // don't begin another timeout-based transition if there is one active
        if (opts.busy) {
            debug('transition active, ignoring new tx request');
            return;
        }


        // stop cycling if we have an outstanding stop request
        if (p.cycleStop != opts.stopCount || p.cycleTimeout === 0 && !manual)
            return;

        // check to see if we should stop cycling based on autostop options
        if (!manual && !p.cyclePause && !opts.bounce &&
        ((opts.autostop && (--opts.countdown <= 0)) ||
        (opts.nowrap && !opts.random && opts.nextSlide < opts.currSlide))) {
            if (opts.end)
                opts.end(opts);
            return;
        }

        // if slideshow is paused, only transition on a manual trigger
        var changed = false;
        if ((manual || !p.cyclePause) && (opts.nextSlide != opts.currSlide)) {
            changed = true;
            var fx = opts.fx;
            // keep trying to get the slide size if we don't have it yet
            curr.cycleH = curr.cycleH || $(curr).height();
            curr.cycleW = curr.cycleW || $(curr).width();
            next.cycleH = next.cycleH || $(next).height();
            next.cycleW = next.cycleW || $(next).width();

            // support multiple transition types
            if (opts.multiFx) {
                if (fwd && (opts.lastFx === undefined || ++opts.lastFx >= opts.fxs.length))
                    opts.lastFx = 0;
                else if (!fwd && (opts.lastFx === undefined || --opts.lastFx < 0))
                    opts.lastFx = opts.fxs.length - 1;
                fx = opts.fxs[opts.lastFx];
            }

            // one-time fx overrides apply to:  $('div').cycle(3,'zoom');
            if (opts.oneTimeFx) {
                fx = opts.oneTimeFx;
                opts.oneTimeFx = null;
            }

            $.fn.cycle.resetState(opts, fx);

            // run the before callbacks
            if (opts.before.length)
                $.each(opts.before, function(i, o) {
                    if (p.cycleStop != opts.stopCount) 
                        return;
                        o.apply(next, [curr, next, opts, fwd]);
                    });

            // stage the after callacks
            var after = function() {
                opts.busy = 0;
                $.each(opts.after, function(i, o) {
                    if (p.cycleStop != opts.stopCount) 
                        return;
                    o.apply(next, [curr, next, opts, fwd]);
                });
                if (!p.cycleStop) {
                    // queue next transition
                    queueNext();
                }
            };

            debug('tx firing(' + fx + '); currSlide: ' + opts.currSlide + '; nextSlide: ' + opts.nextSlide);

            // get ready to perform the transition
            opts.busy = 1;
            if (opts.fxFn) // fx function provided?
            opts.fxFn(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
            else if ($.isFunction($.fn.cycle[opts.fx])) // fx plugin ?
            $.fn.cycle[opts.fx](curr, next, opts, after, fwd, manual && opts.fastOnEvent);
            else
                $.fn.cycle.custom(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
        } else {
            queueNext();
        }

        if (changed || opts.nextSlide == opts.currSlide) {
            // calculate the next slide
            var roll;
            opts.lastSlide = opts.currSlide;
            if (opts.random) {
                opts.currSlide = opts.nextSlide;
                if (++opts.randomIndex == els.length) {
                    opts.randomIndex = 0;
                    opts.randomMap.sort(function(a, b) {
                        return Math.random() - 0.5;
                    });
                }
                opts.nextSlide = opts.randomMap[opts.randomIndex];
                if (opts.nextSlide == opts.currSlide)
                    opts.nextSlide = (opts.currSlide == opts.slideCount - 1) ? 0 : opts.currSlide + 1;
            } else if (opts.backwards) {
                roll = (opts.nextSlide - 1) < 0;
                if (roll && opts.bounce) {
                    opts.backwards = !opts.backwards;
                    opts.nextSlide = 1;
                    opts.currSlide = 0;
                } else {
                    opts.nextSlide = roll ? (els.length - 1) : opts.nextSlide - 1;
                    opts.currSlide = roll ? 0 : opts.nextSlide + 1;
                }
            } else {
                // sequence
                roll = (opts.nextSlide + 1) == els.length;
                if (roll && opts.bounce) {
                    opts.backwards = !opts.backwards;
                    opts.nextSlide = els.length - 2;
                    opts.currSlide = els.length - 1;
                } else {
                    opts.nextSlide = roll ? 0 : opts.nextSlide + 1;
                    opts.currSlide = roll ? els.length - 1 : opts.nextSlide - 1;
                }
            }
        }
        if (changed && opts.pager)
            opts.updateActivePagerLink(opts.pager, opts.currSlide, opts.activePagerClass);

        function queueNext() {
            // stage the next transition
            var ms = 0, timeout = opts.timeout;
            if (opts.timeout && !opts.continuous) {
                ms = getTimeout(els[opts.currSlide], els[opts.nextSlide], opts, fwd);
                if (opts.fx == 'shuffle')
                    ms -= opts.speedOut;
            } else if (opts.continuous && p.cyclePause) // continuous shows work off an after callback, not this timer logic
            ms = 10;
            if (ms > 0)
                p.cycleTimeout = setTimeout(function() {
                    go(els, opts, 0, !opts.backwards);
                }, ms);
        }
    }

    // invoked after transition
    $.fn.cycle.updateActivePagerLink = function(pager, currSlide, clsName) {
        $(pager).each(function() {
            $(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);
        });
    };

    // calculate timeout value for current transition
    function getTimeout(curr, next, opts, fwd) {
        if (opts.timeoutFn) {
            // call user provided calc fn
            var t = opts.timeoutFn.call(curr, curr, next, opts, fwd);
            while (opts.fx != 'none' && (t - opts.speed) < 250) // sanitize timeout
            t += opts.speed;
            debug('calculated timeout: ' + t + '; speed: ' + opts.speed);
            if (t !== false)
                return t;
        }
        return opts.timeout;
    }

    // expose next/prev function, caller must pass in state
    $.fn.cycle.next = function(opts) {
        advance(opts, 1);
    };
    $.fn.cycle.prev = function(opts) {
        advance(opts, 0);
    };

    // advance slide forward or back
    function advance(opts, moveForward) {
        var val = moveForward ? 1 : - 1;
        var els = opts.elements;
        var p = opts.$cont[0], timeout = p.cycleTimeout;
        if (timeout) {
            clearTimeout(timeout);
            p.cycleTimeout = 0;
        }
        if (opts.random && val < 0) {
            // move back to the previously display slide
            opts.randomIndex--;
            if (--opts.randomIndex == - 2)
                opts.randomIndex = els.length - 2;
            else if (opts.randomIndex == - 1)
                opts.randomIndex = els.length - 1;
            opts.nextSlide = opts.randomMap[opts.randomIndex];
        } else if (opts.random) {
            opts.nextSlide = opts.randomMap[opts.randomIndex];
        } else {
            opts.nextSlide = opts.currSlide + val;
            if (opts.nextSlide < 0) {
                if (opts.nowrap) 
                    return false;
                opts.nextSlide = els.length - 1;
            } else if (opts.nextSlide >= els.length) {
                if (opts.nowrap) 
                    return false;
                opts.nextSlide = 0;
            }
        }

        var cb = opts.onPrevNextEvent || opts.prevNextClick; // prevNextClick is deprecated
        if ($.isFunction(cb))
            cb(val > 0, opts.nextSlide, els[opts.nextSlide]);
        go(els, opts, 1, moveForward);
        return false;
    }

    function buildPager(els, opts) {
        var $p = $(opts.pager);
        $.each(els, function(i, o) {
            $.fn.cycle.createPagerAnchor(i, o, $p, els, opts);
        });
        opts.updateActivePagerLink(opts.pager, opts.startingSlide, opts.activePagerClass);
    }

    $.fn.cycle.createPagerAnchor = function(i, el, $p, els, opts) {
        var a;
        if ($.isFunction(opts.pagerAnchorBuilder)) {
            a = opts.pagerAnchorBuilder(i, el);
            debug('pagerAnchorBuilder(' + i + ', el) returned: ' + a);
        } else
            a = '<a href="#">' + (i + 1) + '</a>';

        if (!a)
            return;
        var $a = $(a);
        // don't reparent if anchor is in the dom
        if ($a.parents('body').length === 0) {
            var arr = [];
            if ($p.length > 1) {
                $p.each(function() {
                    var $clone = $a.clone(true);
                    $(this).append($clone);
                    arr.push($clone[0]);
                });
                $a = $(arr);
            } else {
                $a.appendTo($p);
            }
        }

        opts.pagerAnchors = opts.pagerAnchors || [];
        opts.pagerAnchors.push($a);

        var pagerFn = function(e) {
            e.preventDefault();
            opts.nextSlide = i;
            var p = opts.$cont[0], timeout = p.cycleTimeout;
            if (timeout) {
                clearTimeout(timeout);
                p.cycleTimeout = 0;
            }
            var cb = opts.onPagerEvent || opts.pagerClick; // pagerClick is deprecated
            if ($.isFunction(cb))
                cb(opts.nextSlide, els[opts.nextSlide]);
            go(els, opts, 1, opts.currSlide < i); // trigger the trans
            //		return false; // <== allow bubble
        };

        if ( /mouseenter|mouseover/i.test(opts.pagerEvent) ) {
            $a.hover(pagerFn, function() {
                /* no-op */
            });
        } else {
            $a.bind(opts.pagerEvent, pagerFn);
        }

        if ( ! /^click/.test(opts.pagerEvent) && !opts.allowPagerClickBubble)
            $a.bind('click.cycle', function() {
                return false;
            }); // suppress click

        var cont = opts.$cont[0];
        var pauseFlag = false; // https://github.com/malsup/cycle/issues/44
        if (opts.pauseOnPagerHover) {
            $a.hover(
            function() {
                pauseFlag = true;
                cont.cyclePause++;
                triggerPause(cont, true, true);
            }, function() {
                if (pauseFlag)
                    cont.cyclePause--;
                triggerPause(cont, true, true);
            });
        }
    };

    // helper fn to calculate the number of slides between the current and the next
    $.fn.cycle.hopsFromLast = function(opts, fwd) {
        var hops, l = opts.lastSlide, c = opts.currSlide;
        if (fwd)
            hops = c > l ? c - l : opts.slideCount - l;
        else
            hops = c < l ? l - c : l + opts.slideCount - c;
        return hops;
    };

    // fix clearType problems in ie6 by setting an explicit bg color
    // (otherwise text slides look horrible during a fade transition)
    function clearTypeFix($slides) {
        debug('applying clearType background-color hack');
        function hex(s) {
            s = parseInt(s, 10).toString(16);
            return s.length < 2 ? '0' + s : s;
        }
        function getBg(e) {
            for ( ; e && e.nodeName.toLowerCase() != 'html'; e = e.parentNode) {
                var v = $.css(e, 'background-color');
                if (v && v.indexOf('rgb') >= 0 ) {
                    var rgb = v.match(/\d+/g);
                    return '#' + hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
                }
                if (v && v != 'transparent')
                    return v;
            }
            return '#ffffff';
        }
        $slides.each(function() {
            $(this).css('background-color', getBg(this));
        });
    }

    // reset common props before the next transition
    $.fn.cycle.commonReset = function(curr, next, opts, w, h, rev) {
        $(opts.elements).not(curr).hide();
        if (typeof opts.cssBefore.opacity == 'undefined')
            opts.cssBefore.opacity = 1;
        opts.cssBefore.display = 'block';
        if (opts.slideResize && w !== false && next.cycleW > 0)
            opts.cssBefore.width = next.cycleW;
        if (opts.slideResize && h !== false && next.cycleH > 0)
            opts.cssBefore.height = next.cycleH;
        opts.cssAfter = opts.cssAfter || {};
        opts.cssAfter.display = 'none';
        $(curr).css('zIndex', opts.slideCount + (rev === true ? 1 : 0));
        $(next).css('zIndex', opts.slideCount + (rev === true ? 0 : 1));
    };

    // the actual fn for effecting a transition
    $.fn.cycle.custom = function(curr, next, opts, cb, fwd, speedOverride) {
        var $l = $(curr), $n = $(next);
        var speedIn = opts.speedIn, speedOut = opts.speedOut, easeIn = opts.easeIn, easeOut = opts.easeOut;
        $n.css(opts.cssBefore);
        if (speedOverride) {
            if (typeof speedOverride == 'number')
                speedIn = speedOut = speedOverride;
            else
                speedIn = speedOut = 1;
            easeIn = easeOut = null;
        }
        var fn = function() {
            $n.animate(opts.animIn, speedIn, easeIn, function() {
                cb();
            });
        };
        $l.animate(opts.animOut, speedOut, easeOut, function() {
            $l.css(opts.cssAfter);
            if (!opts.sync) 
                fn();
        });
        if (opts.sync) 
            fn();
    };

    // transition definitions - only fade is defined here, transition pack defines the rest
    $.fn.cycle.transitions = {
        fade: function($cont, $slides, opts) {
            $slides.not(':eq(' + opts.currSlide + ')').css('opacity', 0);
            opts.before.push(function(curr, next, opts) {
                $.fn.cycle.commonReset(curr, next, opts);
                opts.cssBefore.opacity = 0;
            });
            opts.animIn = {
                opacity: 1 
            };
            opts.animOut = {
                opacity: 0 
            };
            opts.cssBefore = {
                top: 0,
                left: 0 
            };
        }
    };

    $.fn.cycle.ver = function() {
        return ver;
    };

    // override these globally if you like (they are all optional)
    $.fn.cycle.defaults = {
        activePagerClass: 'activeSlide',
        // class name used for the active pager link
        after: null,
        // transition callback (scope set to element that was shown):  function(currSlideElement, nextSlideElement, options, forwardFlag)
        allowPagerClickBubble: false,
        // allows or prevents click event on pager anchors from bubbling
        animIn: null,
        // properties that define how the slide animates in
        animOut: null,
        // properties that define how the slide animates out
        aspect: false,
        // preserve aspect ratio during fit resizing, cropping if necessary (must be used with fit option)
        autostop: 0,
        // true to end slideshow after X transitions (where X == slide count)
        autostopCount: 0,
        // number of transitions (optionally used with autostop to define X)
        backwards: false,
        // true to start slideshow at last slide and move backwards through the stack
        before: null,
        // transition callback (scope set to element to be shown):     function(currSlideElement, nextSlideElement, options, forwardFlag)
        center: null,
        // set to true to have cycle add top/left margin to each slide (use with width and height options)
        cleartype: !$.support.opacity,
        // true if clearType corrections should be applied (for IE)
        cleartypeNoBg: false,
        // set to true to disable extra cleartype fixing (leave false to force background color setting on slides)
        containerResize: 1,
        // resize container to fit largest slide
        containerResizeHeight: 0,
        // resize containers height to fit the largest slide but leave the width dynamic
        continuous: 0,
        // true to start next transition immediately after current one completes
        cssAfter: null,
        // properties that defined the state of the slide after transitioning out
        cssBefore: null,
        // properties that define the initial state of the slide before transitioning in
        delay: 0,
        // additional delay (in ms) for first transition (hint: can be negative)
        easeIn: null,
        // easing for "in" transition
        easeOut: null,
        // easing for "out" transition
        easing: null,
        // easing method for both in and out transitions
        end: null,
        // callback invoked when the slideshow terminates (use with autostop or nowrap options): function(options)
        fastOnEvent: 0,
        // force fast transitions when triggered manually (via pager or prev/next); value == time in ms
        fit: 0,
        // force slides to fit container
        fx: 'fade',
        // name of transition effect (or comma separated names, ex: 'fade,scrollUp,shuffle')
        fxFn: null,
        // function used to control the transition: function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag)
        height: 'auto',
        // container height (if the 'fit' option is true, the slides will be set to this height as well)
        manualTrump: true,
        // causes manual transition to stop an active transition instead of being ignored
        metaAttr: 'cycle',
        // data- attribute that holds the option data for the slideshow
        next: null,
        // element, jQuery object, or jQuery selector string for the element to use as event trigger for next slide
        nowrap: 0,
        // true to prevent slideshow from wrapping
        onPagerEvent: null,
        // callback fn for pager events: function(zeroBasedSlideIndex, slideElement)
        onPrevNextEvent: null,
        // callback fn for prev/next events: function(isNext, zeroBasedSlideIndex, slideElement)
        pager: null,
        // element, jQuery object, or jQuery selector string for the element to use as pager container
        pagerAnchorBuilder: null,
        // callback fn for building anchor links:  function(index, DOMelement)
        pagerEvent: 'click.cycle',
        // name of event which drives the pager navigation
        pause: 0,
        // true to enable "pause on hover"
        pauseOnPagerHover: 0,
        // true to pause when hovering over pager link
        prev: null,
        // element, jQuery object, or jQuery selector string for the element to use as event trigger for previous slide
        prevNextEvent: 'click.cycle',
        // event which drives the manual transition to the previous or next slide
        random: 0,
        // true for random, false for sequence (not applicable to shuffle fx)
        randomizeEffects: 1,
        // valid when multiple effects are used; true to make the effect sequence random
        requeueOnImageNotLoaded: true,
        // requeue the slideshow if any image slides are not yet loaded
        requeueTimeout: 250,
        // ms delay for requeue
        rev: 0,
        // causes animations to transition in reverse (for effects that support it such as scrollHorz/scrollVert/shuffle)
        shuffle: null,
        // coords for shuffle animation, ex: { top:15, left: 200 }
        skipInitializationCallbacks: false,
        // set to true to disable the first before/after callback that occurs prior to any transition
        slideExpr: null,
        // expression for selecting slides (if something other than all children is required)
        slideResize: 1,
        // force slide width/height to fixed size before every transition
        speed: 1000,
        // speed of the transition (any valid fx speed value)
        speedIn: null,
        // speed of the 'in' transition
        speedOut: null,
        // speed of the 'out' transition
        startingSlide: undefined,
        // zero-based index of the first slide to be displayed
        sync: 1,
        // true if in/out transitions should occur simultaneously
        timeout: 4000,
        // milliseconds between slide transitions (0 to disable auto advance)
        timeoutFn: null,
        // callback for determining per-slide timeout value:  function(currSlideElement, nextSlideElement, options, forwardFlag)
        updateActivePagerLink: null,
        // callback fn invoked to update the active pager link (adds/removes activePagerClass style)
        width: null // container width (if the 'fit' option is true, the slides will be set to this width as well)
    };

})(jQuery);


/*!
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version:	 2.73
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($) {
    "use strict";

    //
    // These functions define slide initialization and properties for the named
    // transitions. To save file size feel free to remove any of these that you
    // don't need.
    //
    $.fn.cycle.transitions.none = function($cont, $slides, opts) {
        opts.fxFn = function(curr, next, opts, after) {
            $(next).show();
            $(curr).hide();
            after();
        };
    };

    // not a cross-fade, fadeout only fades out the top slide
    $.fn.cycle.transitions.fadeout = function($cont, $slides, opts) {
        $slides.not(':eq(' + opts.currSlide + ')').css({
            display: 'block',
            'opacity': 1 
        });
        opts.before.push(function(curr, next, opts, w, h, rev) {
            $(curr).css('zIndex', opts.slideCount + (rev !== true ? 1 : 0));
            $(next).css('zIndex', opts.slideCount + (rev !== true ? 0 : 1));
        });
        opts.animIn.opacity = 1;
        opts.animOut.opacity = 0;
        opts.cssBefore.opacity = 1;
        opts.cssBefore.display = 'block';
        opts.cssAfter.zIndex = 0;
    };

    // scrollUp/Down/Left/Right
    $.fn.cycle.transitions.scrollUp = function($cont, $slides, opts) {
        $cont.css('overflow', 'hidden');
        opts.before.push($.fn.cycle.commonReset);
        var h = $cont.height();
        opts.cssBefore.top = h;
        opts.cssBefore.left = 0;
        opts.cssFirst.top = 0;
        opts.animIn.top = 0;
        opts.animOut.top = - h;
    };
    $.fn.cycle.transitions.scrollDown = function($cont, $slides, opts) {
        $cont.css('overflow', 'hidden');
        opts.before.push($.fn.cycle.commonReset);
        var h = $cont.height();
        opts.cssFirst.top = 0;
        opts.cssBefore.top = - h;
        opts.cssBefore.left = 0;
        opts.animIn.top = 0;
        opts.animOut.top = h;
    };
    $.fn.cycle.transitions.scrollLeft = function($cont, $slides, opts) {
        $cont.css('overflow', 'hidden');
        opts.before.push($.fn.cycle.commonReset);
        var w = $cont.width();
        opts.cssFirst.left = 0;
        opts.cssBefore.left = w;
        opts.cssBefore.top = 0;
        opts.animIn.left = 0;
        opts.animOut.left = 0 - w;
    };
    $.fn.cycle.transitions.scrollRight = function($cont, $slides, opts) {
        $cont.css('overflow', 'hidden');
        opts.before.push($.fn.cycle.commonReset);
        var w = $cont.width();
        opts.cssFirst.left = 0;
        opts.cssBefore.left = - w;
        opts.cssBefore.top = 0;
        opts.animIn.left = 0;
        opts.animOut.left = w;
    };
    $.fn.cycle.transitions.scrollHorz = function($cont, $slides, opts) {
        $cont.css('overflow', 'hidden').width();
        opts.before.push(function(curr, next, opts, fwd) {
            if (opts.rev)
                fwd = !fwd;
            $.fn.cycle.commonReset(curr, next, opts);
            opts.cssBefore.left = fwd ? (next.cycleW - 1) : (1 - next.cycleW);
            opts.animOut.left = fwd ? - curr.cycleW : curr.cycleW;
        });
        opts.cssFirst.left = 0;
        opts.cssBefore.top = 0;
        opts.animIn.left = 0;
        opts.animOut.top = 0;
    };
    $.fn.cycle.transitions.scrollVert = function($cont, $slides, opts) {
        $cont.css('overflow', 'hidden');
        opts.before.push(function(curr, next, opts, fwd) {
            if (opts.rev)
                fwd = !fwd;
            $.fn.cycle.commonReset(curr, next, opts);
            opts.cssBefore.top = fwd ? (1 - next.cycleH) : (next.cycleH - 1);
            opts.animOut.top = fwd ? curr.cycleH : - curr.cycleH;
        });
        opts.cssFirst.top = 0;
        opts.cssBefore.left = 0;
        opts.animIn.top = 0;
        opts.animOut.left = 0;
    };

    // slideX/slideY
    $.fn.cycle.transitions.slideX = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $(opts.elements).not(curr).hide();
            $.fn.cycle.commonReset(curr, next, opts, false, true);
            opts.animIn.width = next.cycleW;
        });
        opts.cssBefore.left = 0;
        opts.cssBefore.top = 0;
        opts.cssBefore.width = 0;
        opts.animIn.width = 'show';
        opts.animOut.width = 0;
    };
    $.fn.cycle.transitions.slideY = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $(opts.elements).not(curr).hide();
            $.fn.cycle.commonReset(curr, next, opts, true, false);
            opts.animIn.height = next.cycleH;
        });
        opts.cssBefore.left = 0;
        opts.cssBefore.top = 0;
        opts.cssBefore.height = 0;
        opts.animIn.height = 'show';
        opts.animOut.height = 0;
    };

    // shuffle
    $.fn.cycle.transitions.shuffle = function($cont, $slides, opts) {
        var i, w = $cont.css('overflow', 'visible').width();
        $slides.css({
            left: 0,
            top: 0
        });
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, true, true);
        });
        // only adjust speed once!
        if (!opts.speedAdjusted) {
            opts.speed = opts.speed / 2; // shuffle has 2 transitions
            opts.speedAdjusted = true;
        }
        opts.random = 0;
        opts.shuffle = opts.shuffle || {
            left: - w,
            top: 15
        };
        opts.els = [];
        for (i = 0; i < $slides.length; i++)
            opts.els.push($slides[i]);

        for (i = 0; i < opts.currSlide; i++)
            opts.els.push(opts.els.shift());

        // custom transition fn (hat tip to Benjamin Sterling for this bit of sweetness!)
        opts.fxFn = function(curr, next, opts, cb, fwd) {
            if (opts.rev)
                fwd = !fwd;
            var $el = fwd ? $(curr) : $(next);
            $(next).css(opts.cssBefore);
            var count = opts.slideCount;
            $el.animate(opts.shuffle, opts.speedIn, opts.easeIn, function() {
                var hops = $.fn.cycle.hopsFromLast(opts, fwd);
                for (var k = 0; k < hops; k++) {
                    if (fwd)
                        opts.els.push(opts.els.shift());
                    else
                        opts.els.unshift(opts.els.pop());
                }
                if (fwd) {
                    for (var i = 0, len = opts.els.length; i < len; i++)
                        $(opts.els[i]).css('z-index', len - i + count);
                } else {
                    var z = $(curr).css('z-index');
                    $el.css('z-index', parseInt(z, 10) + 1 + count);
                }
                $el.animate({
                    left: 0,
                    top: 0
                }, opts.speedOut, opts.easeOut, function() {
                    $(fwd ? this : curr).hide();
                    if (cb) 
                        cb();
                });
            });
        };
        $.extend(opts.cssBefore, {
            display: 'block',
            opacity: 1,
            top: 0,
            left: 0 
        });
    };

    // turnUp/Down/Left/Right
    $.fn.cycle.transitions.turnUp = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, false);
            opts.cssBefore.top = next.cycleH;
            opts.animIn.height = next.cycleH;
            opts.animOut.width = next.cycleW;
        });
        opts.cssFirst.top = 0;
        opts.cssBefore.left = 0;
        opts.cssBefore.height = 0;
        opts.animIn.top = 0;
        opts.animOut.height = 0;
    };
    $.fn.cycle.transitions.turnDown = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, false);
            opts.animIn.height = next.cycleH;
            opts.animOut.top = curr.cycleH;
        });
        opts.cssFirst.top = 0;
        opts.cssBefore.left = 0;
        opts.cssBefore.top = 0;
        opts.cssBefore.height = 0;
        opts.animOut.height = 0;
    };
    $.fn.cycle.transitions.turnLeft = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, true);
            opts.cssBefore.left = next.cycleW;
            opts.animIn.width = next.cycleW;
        });
        opts.cssBefore.top = 0;
        opts.cssBefore.width = 0;
        opts.animIn.left = 0;
        opts.animOut.width = 0;
    };
    $.fn.cycle.transitions.turnRight = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, true);
            opts.animIn.width = next.cycleW;
            opts.animOut.left = curr.cycleW;
        });
        $.extend(opts.cssBefore, {
            top: 0,
            left: 0,
            width: 0 
        });
        opts.animIn.left = 0;
        opts.animOut.width = 0;
    };

    // zoom
    $.fn.cycle.transitions.zoom = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, false, true);
            opts.cssBefore.top = next.cycleH / 2;
            opts.cssBefore.left = next.cycleW / 2;
            $.extend(opts.animIn, {
                top: 0,
                left: 0,
                width: next.cycleW,
                height: next.cycleH 
            });
            $.extend(opts.animOut, {
                width: 0,
                height: 0,
                top: curr.cycleH / 2,
                left: curr.cycleW / 2 
            });
        });
        opts.cssFirst.top = 0;
        opts.cssFirst.left = 0;
        opts.cssBefore.width = 0;
        opts.cssBefore.height = 0;
    };

    // fadeZoom
    $.fn.cycle.transitions.fadeZoom = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, false);
            opts.cssBefore.left = next.cycleW / 2;
            opts.cssBefore.top = next.cycleH / 2;
            $.extend(opts.animIn, {
                top: 0,
                left: 0,
                width: next.cycleW,
                height: next.cycleH 
            });
        });
        opts.cssBefore.width = 0;
        opts.cssBefore.height = 0;
        opts.animOut.opacity = 0;
    };

    // blindX
    $.fn.cycle.transitions.blindX = function($cont, $slides, opts) {
        var w = $cont.css('overflow', 'hidden').width();
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts);
            opts.animIn.width = next.cycleW;
            opts.animOut.left = curr.cycleW;
        });
        opts.cssBefore.left = w;
        opts.cssBefore.top = 0;
        opts.animIn.left = 0;
        opts.animOut.left = w;
    };
    // blindY
    $.fn.cycle.transitions.blindY = function($cont, $slides, opts) {
        var h = $cont.css('overflow', 'hidden').height();
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts);
            opts.animIn.height = next.cycleH;
            opts.animOut.top = curr.cycleH;
        });
        opts.cssBefore.top = h;
        opts.cssBefore.left = 0;
        opts.animIn.top = 0;
        opts.animOut.top = h;
    };
    // blindZ
    $.fn.cycle.transitions.blindZ = function($cont, $slides, opts) {
        var h = $cont.css('overflow', 'hidden').height();
        var w = $cont.width();
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts);
            opts.animIn.height = next.cycleH;
            opts.animOut.top = curr.cycleH;
        });
        opts.cssBefore.top = h;
        opts.cssBefore.left = w;
        opts.animIn.top = 0;
        opts.animIn.left = 0;
        opts.animOut.top = h;
        opts.animOut.left = w;
    };

    // growX - grow horizontally from centered 0 width
    $.fn.cycle.transitions.growX = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, true);
            opts.cssBefore.left = this.cycleW / 2;
            opts.animIn.left = 0;
            opts.animIn.width = this.cycleW;
            opts.animOut.left = 0;
        });
        opts.cssBefore.top = 0;
        opts.cssBefore.width = 0;
    };
    // growY - grow vertically from centered 0 height
    $.fn.cycle.transitions.growY = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, false);
            opts.cssBefore.top = this.cycleH / 2;
            opts.animIn.top = 0;
            opts.animIn.height = this.cycleH;
            opts.animOut.top = 0;
        });
        opts.cssBefore.height = 0;
        opts.cssBefore.left = 0;
    };

    // curtainX - squeeze in both edges horizontally
    $.fn.cycle.transitions.curtainX = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, true, true);
            opts.cssBefore.left = next.cycleW / 2;
            opts.animIn.left = 0;
            opts.animIn.width = this.cycleW;
            opts.animOut.left = curr.cycleW / 2;
            opts.animOut.width = 0;
        });
        opts.cssBefore.top = 0;
        opts.cssBefore.width = 0;
    };
    // curtainY - squeeze in both edges vertically
    $.fn.cycle.transitions.curtainY = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, false, true);
            opts.cssBefore.top = next.cycleH / 2;
            opts.animIn.top = 0;
            opts.animIn.height = next.cycleH;
            opts.animOut.top = curr.cycleH / 2;
            opts.animOut.height = 0;
        });
        opts.cssBefore.height = 0;
        opts.cssBefore.left = 0;
    };

    // cover - curr slide covered by next slide
    $.fn.cycle.transitions.cover = function($cont, $slides, opts) {
        var d = opts.direction || 'left';
        var w = $cont.css('overflow', 'hidden').width();
        var h = $cont.height();
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts);
            opts.cssAfter.display = '';
            if (d == 'right')
                opts.cssBefore.left = - w;
            else if (d == 'up')
                opts.cssBefore.top = h;
            else if (d == 'down')
                opts.cssBefore.top = - h;
            else
                opts.cssBefore.left = w;
        });
        opts.animIn.left = 0;
        opts.animIn.top = 0;
        opts.cssBefore.top = 0;
        opts.cssBefore.left = 0;
    };

    // uncover - curr slide moves off next slide
    $.fn.cycle.transitions.uncover = function($cont, $slides, opts) {
        var d = opts.direction || 'left';
        var w = $cont.css('overflow', 'hidden').width();
        var h = $cont.height();
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, true, true);
            if (d == 'right')
                opts.animOut.left = w;
            else if (d == 'up')
                opts.animOut.top = - h;
            else if (d == 'down')
                opts.animOut.top = h;
            else
                opts.animOut.left = - w;
        });
        opts.animIn.left = 0;
        opts.animIn.top = 0;
        opts.cssBefore.top = 0;
        opts.cssBefore.left = 0;
    };

    // toss - move top slide and fade away
    $.fn.cycle.transitions.toss = function($cont, $slides, opts) {
        var w = $cont.css('overflow', 'visible').width();
        var h = $cont.height();
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, true, true);
            // provide default toss settings if animOut not provided
            if (!opts.animOut.left && !opts.animOut.top)
                $.extend(opts.animOut, {
                    left: w * 2,
                    top: - h / 2,
                    opacity: 0 
                });
            else
                opts.animOut.opacity = 0;
        });
        opts.cssBefore.left = 0;
        opts.cssBefore.top = 0;
        opts.animIn.left = 0;
    };

    // wipe - clip animation
    $.fn.cycle.transitions.wipe = function($cont, $slides, opts) {
        var w = $cont.css('overflow', 'hidden').width();
        var h = $cont.height();
        opts.cssBefore = opts.cssBefore || {};
        var clip;
        if (opts.clip) {
            if (/l2r/.test(opts.clip))
                clip = 'rect(0px 0px ' + h + 'px 0px)';
            else if (/r2l/.test(opts.clip))
                clip = 'rect(0px ' + w + 'px ' + h + 'px ' + w + 'px)';
            else if (/t2b/.test(opts.clip))
                clip = 'rect(0px ' + w + 'px 0px 0px)';
            else if (/b2t/.test(opts.clip))
                clip = 'rect(' + h + 'px ' + w + 'px ' + h + 'px 0px)';
            else if (/zoom/.test(opts.clip)) {
                var top = parseInt(h / 2, 10);
                var left = parseInt(w / 2, 10);
                clip = 'rect(' + top + 'px ' + left + 'px ' + top + 'px ' + left + 'px)';
            }
        }

        opts.cssBefore.clip = opts.cssBefore.clip || clip || 'rect(0px 0px 0px 0px)';

        var d = opts.cssBefore.clip.match(/(\d+)/g);
        var t = parseInt(d[0], 10), r = parseInt(d[1], 10), b = parseInt(d[2], 10), l = parseInt(d[3], 10);

        opts.before.push(function(curr, next, opts) {
            if (curr == next) 
                return;
            var $curr = $(curr), $next = $(next);
            $.fn.cycle.commonReset(curr, next, opts, true, true, false);
            opts.cssAfter.display = 'block';

            var step = 1, count = parseInt((opts.speedIn / 13), 10) - 1;
            (function f() {
                var tt = t ? t - parseInt(step * (t / count), 10) : 0;
                var ll = l ? l - parseInt(step * (l / count), 10) : 0;
                var bb = b < h ? b + parseInt(step * ((h - b) / count || 1), 10) : h;
                var rr = r < w ? r + parseInt(step * ((w - r) / count || 1), 10) : w;
                $next.css({
                    clip: 'rect(' + tt + 'px ' + rr + 'px ' + bb + 'px ' + ll + 'px)' 
                });
                (step++ <= count) ? setTimeout(f, 13) : $curr.css('display', 'none');
            })();
        });
        $.extend(opts.cssBefore, {
            display: 'block',
            opacity: 1,
            top: 0,
            left: 0 
        });
        opts.animIn = {
            left: 0 
        };
        opts.animOut = {
            left: 0 
        };
    };

})(jQuery);;
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c * (t/=d) * t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return - c * (t/=d) * (t - 2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t/=d / 2) < 1) 
            return c / 2 * t * t + b;
        return - c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c * (t/=d) * t * t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t/=d / 2) < 1) 
            return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c * (t/=d) * t * t * t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return - c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t/=d / 2) < 1) 
            return c / 2 * t * t * t * t + b;
        return - c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c * (t/=d) * t * t * t * t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t/=d / 2) < 1) 
            return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return - c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return - c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t == d) ? b + c : c * ( - Math.pow(2, - 10 * t / d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t == 0) 
            return b;
        if (t == d) 
            return b + c;
        if ((t/=d / 2) < 1) 
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * ( - Math.pow(2, - 10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return - c * (Math.sqrt(1 - (t/=d) * t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t/=d / 2) < 1) 
            return - c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) 
            return b;
        if ((t/=d) == 1) 
            return b + c;
        if (!p) 
            p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else 
            var s = p / (2 * Math.PI) * Math.asin (c / a);
        return - (a * Math.pow(2, 10 * (t -= 1)) * Math.sin( (t * d - s) * (2 * Math.PI) / p )) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) 
            return b;
        if ((t/=d) == 1) 
            return b + c;
        if (!p) 
            p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else 
            var s = p / (2 * Math.PI) * Math.asin (c / a);
        return a * Math.pow(2, - 10 * t) * Math.sin( (t * d - s) * (2 * Math.PI) / p ) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) 
            return b;
        if ((t/=d / 2) == 2) 
            return b + c;
        if (!p) 
            p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else 
            var s = p / (2 * Math.PI) * Math.asin (c / a);
        if (t < 1) 
            return - .5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin( (t * d - s) * (2 * Math.PI) / p )) + b;
        return a * Math.pow(2, - 10 * (t -= 1)) * Math.sin( (t * d - s) * (2 * Math.PI) / p ) * .5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) 
            s = 1.70158;
        return c * (t/=d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) 
            s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) 
            s = 1.70158;
        if ((t/=d / 2) < 1) 
            return c / 2 * (t * t * (((s*=(1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s*=(1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce (x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t/=d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d / 2) 
            return jQuery.easing.easeInBounce (x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce (x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
;
/**
 * Isotope v1.5.21
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time license fee
 * http://metafizzy.co/#licenses
 *
 * Copyright 2012 David DeSandro / Metafizzy
 */
(function(a, b, c) {
    "use strict";
    var d = a.document, e = a.Modernizr, f = function(a) {
        return a.charAt(0).toUpperCase() + a.slice(1)
    }, g = "Moz Webkit O Ms".split(" "), h = function(a) {
        var b = d.documentElement.style, c;
        if (typeof b[a] == "string")
            return a;
        a = f(a);
        for (var e = 0, h = g.length; e < h; e++) {
            c = g[e] + a;
            if (typeof b[c] == "string")
                return c
        }
    }, i = h("transform"), j = h("transitionProperty"), k = {
        csstransforms: function() {
            return !!i
        },
        csstransforms3d: function() {
            var a=!!h("perspective");
            if (a) {
                var c = " -o- -moz- -ms- -webkit- -khtml- ".split(" "), d = "@media (" + c.join("transform-3d),(") + "modernizr)", e = b("<style>" + d + "{#modernizr{height:3px}}" + "</style>").appendTo("head"), f = b('<div id="modernizr" />').appendTo("html");
                a = f.height() === 3, f.remove(), e.remove()
            }
            return a
        },
        csstransitions: function() {
            return !!j
        }
    }, l;
    if (e)
        for (l in k)
            e.hasOwnProperty(l) || e.addTest(l, k[l]);
    else {
        e = a.Modernizr = {
            _version: "1.6ish: miniModernizr for Isotope"
        };
        var m = " ", n;
        for (l in k)
            n = k[l](), e[l] = n, m += " " + (n ? "" : "no-") + l;
        b("html").addClass(m)
    }
    if (e.csstransforms) {
        var o = e.csstransforms3d ? {
            translate: function(a) {
                return "translate3d(" + a[0] + "px, " + a[1] + "px, 0) "
            },
            scale: function(a) {
                return "scale3d(" + a + ", " + a + ", 1) "
            }
        }
        : {
            translate: function(a) {
                return "translate(" + a[0] + "px, " + a[1] + "px) "
            },
            scale: function(a) {
                return "scale(" + a + ") "
            }
        }, p = function(a, c, d) {
            var e = b.data(a, "isoTransform") || {}, f = {}, g, h = {}, j;
            f[c] = d, b.extend(e, f);
            for (g in e)
                j = e[g], h[g] = o[g](j);
            var k = h.translate || "", l = h.scale || "", m = k + l;
            b.data(a, "isoTransform", e), a.style[i] = m
        };
        b.cssNumber.scale=!0, b.cssHooks.scale = {
            set: function(a, b) {
                p(a, "scale", b)
            },
            get: function(a, c) {
                var d = b.data(a, "isoTransform");
                return d && d.scale ? d.scale : 1
            }
        }, b.fx.step.scale = function(a) {
            b.cssHooks.scale.set(a.elem, a.now + a.unit)
        }, b.cssNumber.translate=!0, b.cssHooks.translate = {
            set: function(a, b) {
                p(a, "translate", b)
            },
            get: function(a, c) {
                var d = b.data(a, "isoTransform");
                return d && d.translate ? d.translate : [0, 0]
            }
        }
    }
    var q, r;
    e.csstransitions && (q = {
        WebkitTransitionProperty: "webkitTransitionEnd",
        MozTransitionProperty: "transitionend",
        OTransitionProperty: "oTransitionEnd otransitionend",
        transitionProperty: "transitionend"
    }
    [j], r = h("transitionDuration"));
    var s = b.event, t;
    s.special.smartresize = {
        setup: function() {
            b(this).bind("resize", s.special.smartresize.handler)
        },
        teardown: function() {
            b(this).unbind("resize", s.special.smartresize.handler)
        },
        handler: function(a, b) {
            var c = this, d = arguments;
            a.type = "smartresize", t && clearTimeout(t), t = setTimeout(function() {
                jQuery.event.handle.apply(c, d)
            }, b === "execAsap" ? 0 : 100)
        }
    }, b.fn.smartresize = function(a) {
        return a ? this.bind("smartresize", a) : this.trigger("smartresize", ["execAsap"])
    }, b.Isotope = function(a, c, d) {
        this.element = b(c), this._create(a), this._init(d)
    };
    var u = ["width", "height"], v = b(a);
    b.Isotope.settings = {
        resizable: !0,
        layoutMode: "masonry",
        containerClass: "isotope",
        itemClass: "isotope-item",
        hiddenClass: "isotope-hidden",
        hiddenStyle: {
            opacity: 0,
            scale: .001
        },
        visibleStyle: {
            opacity: 1,
            scale: 1
        },
        containerStyle: {
            position: "relative",
            overflow: "hidden"
        },
        animationEngine: "best-available",
        animationOptions: {
            queue: !1,
            duration: 800
        },
        sortBy: "original-order",
        sortAscending: !0,
        resizesContainer: !0,
        transformsEnabled: !0,
        itemPositionDataEnabled: !1
    }, b.Isotope.prototype = {
        _create: function(a) {
            this.options = b.extend({}, b.Isotope.settings, a), this.styleQueue = [], this.elemCount = 0;
            var c = this.element[0].style;
            this.originalStyle = {};
            var d = u.slice(0);
            for (var e in this.options.containerStyle)
                d.push(e);
            for (var f = 0, g = d.length; f < g; f++)
                e = d[f], this.originalStyle[e] = c[e] || "";
            this.element.css(this.options.containerStyle), this._updateAnimationEngine(), this._updateUsingTransforms();
            var h = {
                "original-order": function(a, b) {
                    return b.elemCount++, b.elemCount
                },
                random: function() {
                    return Math.random()
                }
            };
            this.options.getSortData = b.extend(this.options.getSortData, h), this.reloadItems(), this.offset = {
                left: parseInt(this.element.css("padding-left") || 0, 10),
                top: parseInt(this.element.css("padding-top") || 0, 10)
            };
            var i = this;
            setTimeout(function() {
                i.element.addClass(i.options.containerClass)
            }, 0), this.options.resizable && v.bind("smartresize.isotope", function() {
                i.resize()
            }), this.element.delegate("." + this.options.hiddenClass, "click", function() {
                return !1
            })
        },
        _getAtoms: function(a) {
            var b = this.options.itemSelector, c = b ? a.filter(b).add(a.find(b)): a, d = {
                position: "absolute"
            };
            return this.usingTransforms && (d.left = 0, d.top = 0), c.css(d).addClass(this.options.itemClass), this.updateSortData(c, !0), c
        },
        _init: function(a) {
            this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(a)
        },
        option: function(a) {
            if (b.isPlainObject(a)) {
                this.options = b.extend(!0, this.options, a);
                var c;
                for (var d in a)
                    c = "_update" + f(d), this[c] && this[c]()
            }
        },
        _updateAnimationEngine: function() {
            var a = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, ""), b;
            switch (a) {
            case"css":
            case"none":
                b=!1;
                break;
            case"jquery":
                b=!0;
                break;
            default:
                b=!e.csstransitions
            }
            this.isUsingJQueryAnimation = b, this._updateUsingTransforms()
        },
        _updateTransformsEnabled: function() {
            this._updateUsingTransforms()
        },
        _updateUsingTransforms: function() {
            var a = this.usingTransforms = this.options.transformsEnabled && e.csstransforms && e.csstransitions&&!this.isUsingJQueryAnimation;
            a || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), this.getPositionStyles = a ? this._translate : this._positionAbs
        },
        _filter: function(a) {
            var b = this.options.filter === "" ? "*": this.options.filter;
            if (!b)
                return a;
            var c = this.options.hiddenClass, d = "." + c, e = a.filter(d), f = e;
            if (b !== "*") {
                f = e.filter(b);
                var g = a.not(d).not(b).addClass(c);
                this.styleQueue.push({
                    $el: g,
                    style: this.options.hiddenStyle
                })
            }
            return this.styleQueue.push({
                $el: f,
                style: this.options.visibleStyle
            }), f.removeClass(c), a.filter(b)
        },
        updateSortData: function(a, c) {
            var d = this, e = this.options.getSortData, f, g;
            a.each(function() {
                f = b(this), g = {};
                for (var a in e)
                    !c && a === "original-order" ? g[a] = b.data(this, "isotope-sort-data")[a] : g[a] = e[a](f, d);
                b.data(this, "isotope-sort-data", g)
            })
        },
        _sort: function() {
            var a = this.options.sortBy, b = this._getSorter, c = this.options.sortAscending ? 1: - 1, d = function(d, e) {
                var f = b(d, a), g = b(e, a);
                return f === g && a !== "original-order" && (f = b(d, "original-order"), g = b(e, "original-order")), (f > g ? 1 : f < g?-1 : 0) * c
            };
            this.$filteredAtoms.sort(d)
        },
        _getSorter: function(a, c) {
            return b.data(a, "isotope-sort-data")[c]
        },
        _translate: function(a, b) {
            return {
                translate: [a, b]
            }
        },
        _positionAbs: function(a, b) {
            return {
                left: a,
                top: b
            }
        },
        _pushPosition: function(a, b, c) {
            b = Math.round(b + this.offset.left), c = Math.round(c + this.offset.top);
            var d = this.getPositionStyles(b, c);
            this.styleQueue.push({
                $el: a,
                style: d
            }), this.options.itemPositionDataEnabled && a.data("isotope-item-position", {
                x: b,
                y: c
            })
        },
        layout: function(a, b) {
            var c = this.options.layoutMode;
            this["_" + c + "Layout"](a);
            if (this.options.resizesContainer) {
                var d = this["_" + c + "GetContainerSize"]();
                this.styleQueue.push({
                    $el: this.element,
                    style: d
                })
            }
            this._processStyleQueue(a, b), this.isLaidOut=!0
        },
        _processStyleQueue: function(a, c) {
            var d = this.isLaidOut ? this.isUsingJQueryAnimation ? "animate": "css": "css", f = this.options.animationOptions, g = this.options.onLayout, h, i, j, k;
            i = function(a, b) {
                b.$el[d](b.style, f)
            };
            if (this._isInserting && this.isUsingJQueryAnimation)
                i = function(a, b) {
                    h = b.$el.hasClass("no-transition") ? "css" : d, b.$el[h](b.style, f)
                };
            else if (c || g || f.complete) {
                var l=!1, m = [c, g, f.complete], n = this;
                j=!0, k = function() {
                    if (l)
                        return;
                    var b;
                    for (var c = 0, d = m.length; c < d; c++)
                        b = m[c], typeof b == "function" && b.call(n.element, a, n);
                    l=!0
                };
                if (this.isUsingJQueryAnimation && d === "animate")
                    f.complete = k, j=!1;
                else if (e.csstransitions) {
                    var o = 0, p = this.styleQueue[0], s = p && p.$el, t;
                    while (!s ||!s.length) {
                        t = this.styleQueue[o++];
                        if (!t)
                            return;
                        s = t.$el
                    }
                    var u = parseFloat(getComputedStyle(s[0])[r]);
                    u > 0 && (i = function(a, b) {
                        b.$el[d](b.style, f).one(q, k)
                    }, j=!1)
                }
            }
            b.each(this.styleQueue, i), j && k(), this.styleQueue = []
        },
        resize: function() {
            this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
        },
        reLayout: function(a) {
            this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, a)
        },
        addItems: function(a, b) {
            var c = this._getAtoms(a);
            this.$allAtoms = this.$allAtoms.add(c), b && b(c)
        },
        insert: function(a, b) {
            this.element.append(a);
            var c = this;
            this.addItems(a, function(a) {
                var d = c._filter(a);
                c._addHideAppended(d), c._sort(), c.reLayout(), c._revealAppended(d, b)
            })
        },
        appended: function(a, b) {
            var c = this;
            this.addItems(a, function(a) {
                c._addHideAppended(a), c.layout(a), c._revealAppended(a, b)
            })
        },
        _addHideAppended: function(a) {
            this.$filteredAtoms = this.$filteredAtoms.add(a), a.addClass("no-transition"), this._isInserting=!0, this.styleQueue.push({
                $el: a,
                style: this.options.hiddenStyle
            })
        },
        _revealAppended: function(a, b) {
            var c = this;
            setTimeout(function() {
                a.removeClass("no-transition"), c.styleQueue.push({
                    $el: a,
                    style: c.options.visibleStyle
                }), c._isInserting=!1, c._processStyleQueue(a, b)
            }, 10)
        },
        reloadItems: function() {
            this.$allAtoms = this._getAtoms(this.element.children())
        },
        remove: function(a, b) {
            this.$allAtoms = this.$allAtoms.not(a), this.$filteredAtoms = this.$filteredAtoms.not(a);
            var c = this, d = function() {
                a.remove(), b && b.call(c.element)
            };
            a.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({
                $el: a,
                style: this.options.hiddenStyle
            }), this._sort(), this.reLayout(d)) : d()
        },
        shuffle: function(a) {
            this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), this.reLayout(a)
        },
        destroy: function() {
            var a = this.usingTransforms, b = this.options;
            this.$allAtoms.removeClass(b.hiddenClass + " " + b.itemClass).each(function() {
                var b = this.style;
                b.position = "", b.top = "", b.left = "", b.opacity = "", a && (b[i] = "")
            });
            var c = this.element[0].style;
            for (var d in this.originalStyle)
                c[d] = this.originalStyle[d];
            this.element.unbind(".isotope").undelegate("." + b.hiddenClass, "click").removeClass(b.containerClass).removeData("isotope"), v.unbind(".isotope")
        },
        _getSegments: function(a) {
            var b = this.options.layoutMode, c = a ? "rowHeight": "columnWidth", d = a ? "height": "width", e = a ? "rows": "cols", g = this.element[d](), h, i = this.options[b] && this.options[b][c] || this.$filteredAtoms["outer" + f(d)](!0) || g;
            h = Math.floor(g / i), h = Math.max(h, 1), this[b][e] = h, this[b][c] = i
        },
        _checkIfSegmentsChanged: function(a) {
            var b = this.options.layoutMode, c = a ? "rows": "cols", d = this[b][c];
            return this._getSegments(a), this[b][c] !== d
        },
        _masonryReset: function() {
            this.masonry = {}, this._getSegments();
            var a = this.masonry.cols;
            this.masonry.colYs = [];
            while (a--)
                this.masonry.colYs.push(0)
        },
        _masonryLayout: function(a) {
            var c = this, d = c.masonry;
            a.each(function() {
                var a = b(this), e = Math.ceil(a.outerWidth(!0) / d.columnWidth);
                e = Math.min(e, d.cols);
                if (e === 1)
                    c._masonryPlaceBrick(a, d.colYs);
                else {
                    var f = d.cols + 1 - e, g = [], h, i;
                    for (i = 0; i < f; i++)
                        h = d.colYs.slice(i, i + e), g[i] = Math.max.apply(Math, h);
                    c._masonryPlaceBrick(a, g)
                }
            })
        },
        _masonryPlaceBrick: function(a, b) {
            var c = Math.min.apply(Math, b), d = 0;
            for (var e = 0, f = b.length; e < f; e++)
                if (b[e] === c) {
                    d = e;
                    break
                }
            var g = this.masonry.columnWidth * d, h = c;
            this._pushPosition(a, g, h);
            var i = c + a.outerHeight(!0), j = this.masonry.cols + 1 - f;
            for (e = 0; e < j; e++)
                this.masonry.colYs[d + e] = i
        },
        _masonryGetContainerSize: function() {
            var a = Math.max.apply(Math, this.masonry.colYs);
            return {
                height: a
            }
        },
        _masonryResizeChanged: function() {
            return this._checkIfSegmentsChanged()
        },
        _fitRowsReset: function() {
            this.fitRows = {
                x: 0,
                y: 0,
                height: 0
            }
        },
        _fitRowsLayout: function(a) {
            var c = this, d = this.element.width(), e = this.fitRows;
            a.each(function() {
                var a = b(this), f = a.outerWidth(!0), g = a.outerHeight(!0);
                e.x !== 0 && f + e.x > d && (e.x = 0, e.y = e.height), c._pushPosition(a, e.x, e.y), e.height = Math.max(e.y + g, e.height), e.x += f
            })
        },
        _fitRowsGetContainerSize: function() {
            return {
                height: this.fitRows.height
            }
        },
        _fitRowsResizeChanged: function() {
            return !0
        },
        _cellsByRowReset: function() {
            this.cellsByRow = {
                index: 0
            }, this._getSegments(), this._getSegments(!0)
        },
        _cellsByRowLayout: function(a) {
            var c = this, d = this.cellsByRow;
            a.each(function() {
                var a = b(this), e = d.index%d.cols, f = Math.floor(d.index / d.cols), g = (e + .5) * d.columnWidth - a.outerWidth(!0) / 2, h = (f + .5) * d.rowHeight - a.outerHeight(!0) / 2;
                c._pushPosition(a, g, h), d.index++
            })
        },
        _cellsByRowGetContainerSize: function() {
            return {
                height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
            }
        },
        _cellsByRowResizeChanged: function() {
            return this._checkIfSegmentsChanged()
        },
        _straightDownReset: function() {
            this.straightDown = {
                y: 0
            }
        },
        _straightDownLayout: function(a) {
            var c = this;
            a.each(function(a) {
                var d = b(this);
                c._pushPosition(d, 0, c.straightDown.y), c.straightDown.y += d.outerHeight(!0)
            })
        },
        _straightDownGetContainerSize: function() {
            return {
                height: this.straightDown.y
            }
        },
        _straightDownResizeChanged: function() {
            return !0
        },
        _masonryHorizontalReset: function() {
            this.masonryHorizontal = {}, this._getSegments(!0);
            var a = this.masonryHorizontal.rows;
            this.masonryHorizontal.rowXs = [];
            while (a--)
                this.masonryHorizontal.rowXs.push(0)
        },
        _masonryHorizontalLayout: function(a) {
            var c = this, d = c.masonryHorizontal;
            a.each(function() {
                var a = b(this), e = Math.ceil(a.outerHeight(!0) / d.rowHeight);
                e = Math.min(e, d.rows);
                if (e === 1)
                    c._masonryHorizontalPlaceBrick(a, d.rowXs);
                else {
                    var f = d.rows + 1 - e, g = [], h, i;
                    for (i = 0; i < f; i++)
                        h = d.rowXs.slice(i, i + e), g[i] = Math.max.apply(Math, h);
                    c._masonryHorizontalPlaceBrick(a, g)
                }
            })
        },
        _masonryHorizontalPlaceBrick: function(a, b) {
            var c = Math.min.apply(Math, b), d = 0;
            for (var e = 0, f = b.length; e < f; e++)
                if (b[e] === c) {
                    d = e;
                    break
                }
            var g = c, h = this.masonryHorizontal.rowHeight * d;
            this._pushPosition(a, g, h);
            var i = c + a.outerWidth(!0), j = this.masonryHorizontal.rows + 1 - f;
            for (e = 0; e < j; e++)
                this.masonryHorizontal.rowXs[d + e] = i
        },
        _masonryHorizontalGetContainerSize: function() {
            var a = Math.max.apply(Math, this.masonryHorizontal.rowXs);
            return {
                width: a
            }
        },
        _masonryHorizontalResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0)
        },
        _fitColumnsReset: function() {
            this.fitColumns = {
                x: 0,
                y: 0,
                width: 0
            }
        },
        _fitColumnsLayout: function(a) {
            var c = this, d = this.element.height(), e = this.fitColumns;
            a.each(function() {
                var a = b(this), f = a.outerWidth(!0), g = a.outerHeight(!0);
                e.y !== 0 && g + e.y > d && (e.x = e.width, e.y = 0), c._pushPosition(a, e.x, e.y), e.width = Math.max(e.x + f, e.width), e.y += g
            })
        },
        _fitColumnsGetContainerSize: function() {
            return {
                width: this.fitColumns.width
            }
        },
        _fitColumnsResizeChanged: function() {
            return !0
        },
        _cellsByColumnReset: function() {
            this.cellsByColumn = {
                index: 0
            }, this._getSegments(), this._getSegments(!0)
        },
        _cellsByColumnLayout: function(a) {
            var c = this, d = this.cellsByColumn;
            a.each(function() {
                var a = b(this), e = Math.floor(d.index / d.rows), f = d.index%d.rows, g = (e + .5) * d.columnWidth - a.outerWidth(!0) / 2, h = (f + .5) * d.rowHeight - a.outerHeight(!0) / 2;
                c._pushPosition(a, g, h), d.index++
            })
        },
        _cellsByColumnGetContainerSize: function() {
            return {
                width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
            }
        },
        _cellsByColumnResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0)
        },
        _straightAcrossReset: function() {
            this.straightAcross = {
                x: 0
            }
        },
        _straightAcrossLayout: function(a) {
            var c = this;
            a.each(function(a) {
                var d = b(this);
                c._pushPosition(d, c.straightAcross.x, 0), c.straightAcross.x += d.outerWidth(!0)
            })
        },
        _straightAcrossGetContainerSize: function() {
            return {
                width: this.straightAcross.x
            }
        },
        _straightAcrossResizeChanged: function() {
            return !0
        }
    }, b.fn.imagesLoaded = function(a) {
        function h() {
            a.call(c, d)
        }
        function i(a) {
            var c = a.target;
            c.src !== f && b.inArray(c, g)===-1 && (g.push(c), --e <= 0 && (setTimeout(h), d.unbind(".imagesLoaded", i)))
        }
        var c = this, d = c.find("img").add(c.filter("img")), e = d.length, f = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", g = [];
        return e || h(), d.bind("load.imagesLoaded error.imagesLoaded", i).each(function() {
            var a = this.src;
            this.src = f, this.src = a
        }), c
    };
    var w = function(b) {
        a.console && a.console.error(b)
    };
    b.fn.isotope = function(a, c) {
        if (typeof a == "string") {
            var d = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var c = b.data(this, "isotope");
                if (!c) {
                    w("cannot call methods on isotope prior to initialization; attempted to call method '" + a + "'");
                    return 
                }
                if (!b.isFunction(c[a]) || a.charAt(0) === "_") {
                    w("no such method '" + a + "' for isotope instance");
                    return 
                }
                c[a].apply(c, d)
            })
        } else 
            this.each(function() {
                var d = b.data(this, "isotope");
                d ? (d.option(a), d._init(c)) : b.data(this, "isotope", new b.Isotope(a, this, c))
            });
        return this
    }
})(window, jQuery);;
if (typeof Object.create !== "function") {
    Object.create = function(o) {
        function F() {};
        F.prototype = o;
        return new F();
    };
}
var ua = {
    toString: function() {
        return navigator.userAgent;
    },
    test: function(s) {
        return this.toString().toLowerCase().indexOf(s.toLowerCase())>-1;
    }
};
ua.version = (ua.toString().toLowerCase().match(/[\s\S]+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1];
ua.webkit = ua.test("webkit");
ua.gecko = ua.test("gecko")&&!ua.webkit;
ua.opera = ua.test("opera");
ua.ie = ua.test("msie")&&!ua.opera;
ua.ie6 = ua.ie && document.compatMode && typeof document.documentElement.style.maxHeight === "undefined";
ua.ie7 = ua.ie && document.documentElement && typeof document.documentElement.style.maxHeight !== "undefined" && typeof XDomainRequest === "undefined";
ua.ie8 = ua.ie && typeof XDomainRequest !== "undefined";
var domReady = function() {
    var _1 = [];
    var _2 = function() {
        if (!arguments.callee.done) {
            arguments.callee.done = true;
            for (var i = 0; i < _1.length; i++) {
                _1[i]();
            }
        }
    };
    if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", _2, false);
    }
    if (ua.ie) {
        (function() {
            try {
                document.documentElement.doScroll("left");
            } catch (e) {
                setTimeout(arguments.callee, 50);
                return;
            }
            _2();
        })();
        document.onreadystatechange = function() {
            if (document.readyState === "complete") {
                document.onreadystatechange = null;
                _2();
            }
        };
    }
    if (ua.webkit && document.readyState) {
        (function() {
            if (document.readyState !== "loading") {
                _2();
            } else {
                setTimeout(arguments.callee, 10);
            }
        })();
    }
    window.onload = _2;
    return function(fn) {
        if (typeof fn === "function") {
            _1[_1.length] = fn;
        }
        return fn;
    };
}();
var cssHelper = function() {
    var _3 = {
        BLOCKS: /[^\s{][^{]*\{(?:[^{}]*\{[^{}]*\}[^{}]*|[^{}]*)*\}/g,
        BLOCKS_INSIDE: /[^\s{][^{]*\{[^{}]*\}/g,
        DECLARATIONS: /[a-zA-Z\-]+[^;]*:[^;]+;/g,
        RELATIVE_URLS: /url\(['"]?([^\/\)'"][^:\)'"]+)['"]?\)/g,
        REDUNDANT_COMPONENTS: /(?:\/\*([^*\\\\]|\*(?!\/))+\*\/|@import[^;]+;)/g,
        REDUNDANT_WHITESPACE: /\s*(,|:|;|\{|\})\s*/g,
        MORE_WHITESPACE: /\s{2,}/g,
        FINAL_SEMICOLONS: /;\}/g,
        NOT_WHITESPACE: /\S+/g
    };
    var _4, _5 = false;
    var _6 = [];
    var _7 = function(fn) {
        if (typeof fn === "function") {
            _6[_6.length] = fn;
        }
    };
    var _8 = function() {
        for (var i = 0; i < _6.length; i++) {
            _6[i](_4);
        }
    };
    var _9 = {};
    var _a = function(n, v) {
        if (_9[n]) {
            var _b = _9[n].listeners;
            if (_b) {
                for (var i = 0; i < _b.length; i++) {
                    _b[i](v);
                }
            }
        }
    };
    var _c = function(_d, _e, _f) {
        if (ua.ie&&!window.XMLHttpRequest) {
            window.XMLHttpRequest = function() {
                return new ActiveXObject("Microsoft.XMLHTTP");
            };
        }
        if (!XMLHttpRequest) {
            return "";
        }
        var r = new XMLHttpRequest();
        try {
            r.open("get", _d, true);
            r.setRequestHeader("X_REQUESTED_WITH", "XMLHttpRequest");
        } catch (e) {
            _f();
            return;
        }
        var _10 = false;
        setTimeout(function() {
            _10 = true;
        }, 5000);
        document.documentElement.style.cursor = "progress";
        r.onreadystatechange = function() {
            if (r.readyState === 4&&!_10) {
                if (!r.status && location.protocol === "file:" || (r.status >= 200 && r.status < 300) || r.status === 304 || navigator.userAgent.indexOf("Safari")>-1 && typeof r.status === "undefined") {
                    _e(r.responseText);
                } else {
                    _f();
                }
                document.documentElement.style.cursor = "";
                r = null;
            }
        };
        r.send("");
    };
    var _11 = function(_12) {
        _12 = _12.replace(_3.REDUNDANT_COMPONENTS, "");
        _12 = _12.replace(_3.REDUNDANT_WHITESPACE, "$1");
        _12 = _12.replace(_3.MORE_WHITESPACE, " ");
        _12 = _12.replace(_3.FINAL_SEMICOLONS, "}");
        return _12;
    };
    var _13 = {
        mediaQueryList: function(s) {
            var o = {};
            var idx = s.indexOf("{");
            var lt = s.substring(0, idx);
            s = s.substring(idx + 1, s.length - 1);
            var mqs = [], rs = [];
            var qts = lt.toLowerCase().substring(7).split(",");
            for (var i = 0; i < qts.length; i++) {
                mqs[mqs.length] = _13.mediaQuery(qts[i], o);
            }
            var rts = s.match(_3.BLOCKS_INSIDE);
            if (rts !== null) {
                for (i = 0; i < rts.length; i++) {
                    rs[rs.length] = _13.rule(rts[i], o);
                }
            }
            o.getMediaQueries = function() {
                return mqs;
            };
            o.getRules = function() {
                return rs;
            };
            o.getListText = function() {
                return lt;
            };
            o.getCssText = function() {
                return s;
            };
            return o;
        },
        mediaQuery: function(s, mql) {
            s = s || "";
            var not = false, _14;
            var exp = [];
            var _15 = true;
            var _16 = s.match(_3.NOT_WHITESPACE);
            for (var i = 0; i < _16.length; i++) {
                var _17 = _16[i];
                if (!_14 && (_17 === "not" || _17 === "only")) {
                    if (_17 === "not") {
                        not = true;
                    }
                } else {
                    if (!_14) {
                        _14 = _17;
                    } else {
                        if (_17.charAt(0) === "(") {
                            var _18 = _17.substring(1, _17.length - 1).split(":");
                            exp[exp.length] = {
                                mediaFeature: _18[0],
                                value: _18[1] || null
                            };
                        }
                    }
                }
            }
            return {
                getList: function() {
                    return mql || null;
                },
                getValid: function() {
                    return _15;
                },
                getNot: function() {
                    return not;
                },
                getMediaType: function() {
                    return _14;
                },
                getExpressions: function() {
                    return exp;
                }
            };
        },
        rule: function(s, mql) {
            var o = {};
            var idx = s.indexOf("{");
            var st = s.substring(0, idx);
            var ss = st.split(",");
            var ds = [];
            var dts = s.substring(idx + 1, s.length - 1).split(";");
            for (var i = 0; i < dts.length; i++) {
                ds[ds.length] = _13.declaration(dts[i], o);
            }
            o.getMediaQueryList = function() {
                return mql || null;
            };
            o.getSelectors = function() {
                return ss;
            };
            o.getSelectorText = function() {
                return st;
            };
            o.getDeclarations = function() {
                return ds;
            };
            o.getPropertyValue = function(n) {
                for (var i = 0; i < ds.length; i++) {
                    if (ds[i].getProperty() === n) {
                        return ds[i].getValue();
                    }
                }
                return null;
            };
            return o;
        },
        declaration: function(s, r) {
            var idx = s.indexOf(":");
            var p = s.substring(0, idx);
            var v = s.substring(idx + 1);
            return {
                getRule: function() {
                    return r || null;
                },
                getProperty: function() {
                    return p;
                },
                getValue: function() {
                    return v;
                }
            };
        }
    };
    var _19 = function(el) {
        if (typeof el.cssHelperText !== "string") {
            return;
        }
        var o = {
            mediaQueryLists: [],
            rules: [],
            selectors: {},
            declarations: [],
            properties: {}
        };
        var _1a = o.mediaQueryLists;
        var ors = o.rules;
        var _1b = el.cssHelperText.match(_3.BLOCKS);
        if (_1b !== null) {
            for (var i = 0; i < _1b.length; i++) {
                if (_1b[i].substring(0, 7) === "@media ") {
                    _1a[_1a.length] = _13.mediaQueryList(_1b[i]);
                    ors = o.rules = ors.concat(_1a[_1a.length - 1].getRules());
                } else {
                    ors[ors.length] = _13.rule(_1b[i]);
                }
            }
        }
        var oss = o.selectors;
        var _1c = function(r) {
            var ss = r.getSelectors();
            for (var i = 0; i < ss.length; i++) {
                var n = ss[i];
                if (!oss[n]) {
                    oss[n] = [];
                }
                oss[n][oss[n].length] = r;
            }
        };
        for (i = 0; i < ors.length; i++) {
            _1c(ors[i]);
        }
        var ods = o.declarations;
        for (i = 0; i < ors.length; i++) {
            ods = o.declarations = ods.concat(ors[i].getDeclarations());
        }
        var ops = o.properties;
        for (i = 0; i < ods.length; i++) {
            var n = ods[i].getProperty();
            if (!ops[n]) {
                ops[n] = [];
            }
            ops[n][ops[n].length] = ods[i];
        }
        el.cssHelperParsed = o;
        _4[_4.length] = el;
        return o;
    };
    var _1d = function(el, s) {
        el.cssHelperText = _11(s || el.innerHTML);
        return _19(el);
    };
    var _1e = function() {
        _5 = true;
        _4 = [];
        var _1f = [];
        var _20 = function() {
            for (var i = 0; i < _1f.length; i++) {
                _19(_1f[i]);
            }
            var _21 = document.getElementsByTagName("style");
            for (i = 0; i < _21.length; i++) {
                _1d(_21[i]);
            }
            _5 = false;
            _8();
        };
        var _22 = document.getElementsByTagName("link");
        for (var i = 0; i < _22.length; i++) {
            var _23 = _22[i];
            if (_23.getAttribute("rel").indexOf("style")>-1 && _23.href && _23.href.length !== 0&&!_23.disabled) {
                _1f[_1f.length] = _23;
            }
        }
        if (_1f.length > 0) {
            var c = 0;
            var _24 = function() {
                c++;
                if (c === _1f.length) {
                    _20();
                }
            };
            var _25 = function(_26) {
                var _27 = _26.href;
                _c(_27, function(_28) {
                    _28 = _11(_28).replace(_3.RELATIVE_URLS, "url(" + _27.substring(0, _27.lastIndexOf("/")) + "/$1)");
                    _26.cssHelperText = _28;
                    _24();
                }, _24);
            };
            for (i = 0; i < _1f.length; i++) {
                _25(_1f[i]);
            }
        } else {
            _20();
        }
    };
    var _29 = {
        mediaQueryLists: "array",
        rules: "array",
        selectors: "object",
        declarations: "array",
        properties: "object"
    };
    var _2a = {
        mediaQueryLists: null,
        rules: null,
        selectors: null,
        declarations: null,
        properties: null
    };
    var _2b = function(_2c, v) {
        if (_2a[_2c] !== null) {
            if (_29[_2c] === "array") {
                return (_2a[_2c] = _2a[_2c].concat(v));
            } else {
                var c = _2a[_2c];
                for (var n in v) {
                    if (v.hasOwnProperty(n)) {
                        if (!c[n]) {
                            c[n] = v[n];
                        } else {
                            c[n] = c[n].concat(v[n]);
                        }
                    }
                }
                return c;
            }
        }
    };
    var _2d = function(_2e) {
        _2a[_2e] = (_29[_2e] === "array") ? [] : {};
        for (var i = 0; i < _4.length; i++) {
            _2b(_2e, _4[i].cssHelperParsed[_2e]);
        }
        return _2a[_2e];
    };
    domReady(function() {
        var els = document.body.getElementsByTagName("*");
        for (var i = 0; i < els.length; i++) {
            els[i].checkedByCssHelper = true;
        }
        if (document.implementation.hasFeature("MutationEvents", "2.0") || window.MutationEvent) {
            document.body.addEventListener("DOMNodeInserted", function(e) {
                var el = e.target;
                if (el.nodeType === 1) {
                    _a("DOMElementInserted", el);
                    el.checkedByCssHelper = true;
                }
            }, false);
        } else {
            setInterval(function() {
                var els = document.body.getElementsByTagName("*");
                for (var i = 0; i < els.length; i++) {
                    if (!els[i].checkedByCssHelper) {
                        _a("DOMElementInserted", els[i]);
                        els[i].checkedByCssHelper = true;
                    }
                }
            }, 1000);
        }
    });
    var _2f = function(d) {
        if (typeof window.innerWidth != "undefined") {
            return window["inner" + d];
        } else {
            if (typeof document.documentElement != "undefined" && typeof document.documentElement.clientWidth != "undefined" && document.documentElement.clientWidth != 0) {
                return document.documentElement["client" + d];
            }
        }
    };
    return {
        addStyle: function(s, _30) {
            var el = document.createElement("style");
            el.setAttribute("type", "text/css");
            document.getElementsByTagName("head")[0].appendChild(el);
            if (el.styleSheet) {
                el.styleSheet.cssText = s;
            } else {
                el.appendChild(document.createTextNode(s));
            }
            el.addedWithCssHelper = true;
            if (typeof _30 === "undefined" || _30 === true) {
                cssHelper.parsed(function(_31) {
                    var o = _1d(el, s);
                    for (var n in o) {
                        if (o.hasOwnProperty(n)) {
                            _2b(n, o[n]);
                        }
                    }
                    _a("newStyleParsed", el);
                });
            } else {
                el.parsingDisallowed = true;
            }
            return el;
        },
        removeStyle: function(el) {
            return el.parentNode.removeChild(el);
        },
        parsed: function(fn) {
            if (_5) {
                _7(fn);
            } else {
                if (typeof _4 !== "undefined") {
                    if (typeof fn === "function") {
                        fn(_4);
                    }
                } else {
                    _7(fn);
                    _1e();
                }
            }
        },
        mediaQueryLists: function(fn) {
            cssHelper.parsed(function(_32) {
                fn(_2a.mediaQueryLists || _2d("mediaQueryLists"));
            });
        },
        rules: function(fn) {
            cssHelper.parsed(function(_33) {
                fn(_2a.rules || _2d("rules"));
            });
        },
        selectors: function(fn) {
            cssHelper.parsed(function(_34) {
                fn(_2a.selectors || _2d("selectors"));
            });
        },
        declarations: function(fn) {
            cssHelper.parsed(function(_35) {
                fn(_2a.declarations || _2d("declarations"));
            });
        },
        properties: function(fn) {
            cssHelper.parsed(function(_36) {
                fn(_2a.properties || _2d("properties"));
            });
        },
        broadcast: _a,
        addListener: function(n, fn) {
            if (typeof fn === "function") {
                if (!_9[n]) {
                    _9[n] = {
                        listeners: []
                    };
                }
                _9[n].listeners[_9[n].listeners.length] = fn;
            }
        },
        removeListener: function(n, fn) {
            if (typeof fn === "function" && _9[n]) {
                var ls = _9[n].listeners;
                for (var i = 0; i < ls.length; i++) {
                    if (ls[i] === fn) {
                        ls.splice(i, 1);
                        i -= 1;
                    }
                }
            }
        },
        getViewportWidth: function() {
            return _2f("Width");
        },
        getViewportHeight: function() {
            return _2f("Height");
        }
    };
}();
domReady(function enableCssMediaQueries() {
    var _37;
    var _38 = {
        LENGTH_UNIT: /[0-9]+(em|ex|px|in|cm|mm|pt|pc)$/,
        RESOLUTION_UNIT: /[0-9]+(dpi|dpcm)$/,
        ASPECT_RATIO: /^[0-9]+\/[0-9]+$/,
        ABSOLUTE_VALUE: /^[0-9]*(\.[0-9]+)*$/
    };
    var _39 = [];
    var _3a = function() {
        var id = "css3-mediaqueries-test";
        var el = document.createElement("div");
        el.id = id;
        var _3b = cssHelper.addStyle("@media all and (width) { #" + id + " { width: 1px !important; } }", false);
        document.body.appendChild(el);
        var ret = el.offsetWidth === 1;
        _3b.parentNode.removeChild(_3b);
        el.parentNode.removeChild(el);
        _3a = function() {
            return ret;
        };
        return ret;
    };
    var _3c = function() {
        _37 = document.createElement("div");
        _37.style.cssText = "position:absolute;top:-9999em;left:-9999em;" + "margin:0;border:none;padding:0;width:1em;font-size:1em;";
        document.body.appendChild(_37);
        if (_37.offsetWidth !== 16) {
            _37.style.fontSize = 16 / _37.offsetWidth + "em";
        }
        _37.style.width = "";
    };
    var _3d = function(_3e) {
        _37.style.width = _3e;
        var _3f = _37.offsetWidth;
        _37.style.width = "";
        return _3f;
    };
    var _40 = function(_41, _42) {
        var l = _41.length;
        var min = (_41.substring(0, 4) === "min-");
        var max = (!min && _41.substring(0, 4) === "max-");
        if (_42 !== null) {
            var _43;
            var _44;
            if (_38.LENGTH_UNIT.exec(_42)) {
                _43 = "length";
                _44 = _3d(_42);
            } else {
                if (_38.RESOLUTION_UNIT.exec(_42)) {
                    _43 = "resolution";
                    _44 = parseInt(_42, 10);
                    var _45 = _42.substring((_44 + "").length);
                } else {
                    if (_38.ASPECT_RATIO.exec(_42)) {
                        _43 = "aspect-ratio";
                        _44 = _42.split("/");
                    } else {
                        if (_38.ABSOLUTE_VALUE) {
                            _43 = "absolute";
                            _44 = _42;
                        } else {
                            _43 = "unknown";
                        }
                    }
                }
            }
        }
        var _46, _47;
        if ("device-width" === _41.substring(l - 12, l)) {
            _46 = screen.width;
            if (_42 !== null) {
                if (_43 === "length") {
                    return ((min && _46 >= _44) || (max && _46 < _44) || (!min&&!max && _46 === _44));
                } else {
                    return false;
                }
            } else {
                return _46 > 0;
            }
        } else {
            if ("device-height" === _41.substring(l - 13, l)) {
                _47 = screen.height;
                if (_42 !== null) {
                    if (_43 === "length") {
                        return ((min && _47 >= _44) || (max && _47 < _44) || (!min&&!max && _47 === _44));
                    } else {
                        return false;
                    }
                } else {
                    return _47 > 0;
                }
            } else {
                if ("width" === _41.substring(l - 5, l)) {
                    _46 = document.documentElement.clientWidth || document.body.clientWidth;
                    if (_42 !== null) {
                        if (_43 === "length") {
                            return ((min && _46 >= _44) || (max && _46 < _44) || (!min&&!max && _46 === _44));
                        } else {
                            return false;
                        }
                    } else {
                        return _46 > 0;
                    }
                } else {
                    if ("height" === _41.substring(l - 6, l)) {
                        _47 = document.documentElement.clientHeight || document.body.clientHeight;
                        if (_42 !== null) {
                            if (_43 === "length") {
                                return ((min && _47 >= _44) || (max && _47 < _44) || (!min&&!max && _47 === _44));
                            } else {
                                return false;
                            }
                        } else {
                            return _47 > 0;
                        }
                    } else {
                        if ("device-aspect-ratio" === _41.substring(l - 19, l)) {
                            return _43 === "aspect-ratio" && screen.width * _44[1] === screen.height * _44[0];
                        } else {
                            if ("color-index" === _41.substring(l - 11, l)) {
                                var _48 = Math.pow(2, screen.colorDepth);
                                if (_42 !== null) {
                                    if (_43 === "absolute") {
                                        return ((min && _48 >= _44) || (max && _48 < _44) || (!min&&!max && _48 === _44));
                                    } else {
                                        return false;
                                    }
                                } else {
                                    return _48 > 0;
                                }
                            } else {
                                if ("color" === _41.substring(l - 5, l)) {
                                    var _49 = screen.colorDepth;
                                    if (_42 !== null) {
                                        if (_43 === "absolute") {
                                            return ((min && _49 >= _44) || (max && _49 < _44) || (!min&&!max && _49 === _44));
                                        } else {
                                            return false;
                                        }
                                    } else {
                                        return _49 > 0;
                                    }
                                } else {
                                    if ("resolution" === _41.substring(l - 10, l)) {
                                        var res;
                                        if (_45 === "dpcm") {
                                            res = _3d("1cm");
                                        } else {
                                            res = _3d("1in");
                                        }
                                        if (_42 !== null) {
                                            if (_43 === "resolution") {
                                                return ((min && res >= _44) || (max && res < _44) || (!min&&!max && res === _44));
                                            } else {
                                                return false;
                                            }
                                        } else {
                                            return res > 0;
                                        }
                                    } else {
                                        return false;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    var _4a = function(mq) {
        var _4b = mq.getValid();
        var _4c = mq.getExpressions();
        var l = _4c.length;
        if (l > 0) {
            for (var i = 0; i < l && _4b; i++) {
                _4b = _40(_4c[i].mediaFeature, _4c[i].value);
            }
            var not = mq.getNot();
            return (_4b&&!not || not&&!_4b);
        }
    };
    var _4d = function(mql) {
        var mqs = mql.getMediaQueries();
        var t = {};
        for (var i = 0; i < mqs.length; i++) {
            if (_4a(mqs[i])) {
                t[mqs[i].getMediaType()] = true;
            }
        }
        var s = [], c = 0;
        for (var n in t) {
            if (t.hasOwnProperty(n)) {
                if (c > 0) {
                    s[c++] = ",";
                }
                s[c++] = n;
            }
        }
        if (s.length > 0) {
            _39[_39.length] = cssHelper.addStyle("@media " + s.join("") + "{" + mql.getCssText() + "}", false);
        }
    };
    var _4e = function(_4f) {
        for (var i = 0; i < _4f.length; i++) {
            _4d(_4f[i]);
        }
        if (ua.ie) {
            document.documentElement.style.display = "block";
            setTimeout(function() {
                document.documentElement.style.display = "";
            }, 0);
            setTimeout(function() {
                cssHelper.broadcast("cssMediaQueriesTested");
            }, 100);
        } else {
            cssHelper.broadcast("cssMediaQueriesTested");
        }
    };
    var _50 = function() {
        for (var i = 0; i < _39.length; i++) {
            cssHelper.removeStyle(_39[i]);
        }
        _39 = [];
        cssHelper.mediaQueryLists(_4e);
    };
    var _51 = 0;
    var _52 = function() {
        var _53 = cssHelper.getViewportWidth();
        var _54 = cssHelper.getViewportHeight();
        if (ua.ie) {
            var el = document.createElement("div");
            el.style.position = "absolute";
            el.style.top = "-9999em";
            el.style.overflow = "scroll";
            document.body.appendChild(el);
            _51 = el.offsetWidth - el.clientWidth;
            document.body.removeChild(el);
        }
        var _55;
        var _56 = function() {
            var vpw = cssHelper.getViewportWidth();
            var vph = cssHelper.getViewportHeight();
            if (Math.abs(vpw - _53) > _51 || Math.abs(vph - _54) > _51) {
                _53 = vpw;
                _54 = vph;
                clearTimeout(_55);
                _55 = setTimeout(function() {
                    if (!_3a()) {
                        _50();
                    } else {
                        cssHelper.broadcast("cssMediaQueriesTested");
                    }
                }, 500);
            }
        };
        window.onresize = function() {
            var x = window.onresize || function() {};
            return function() {
                x();
                _56();
            };
        }();
    };
    var _57 = document.documentElement;
    _57.style.marginLeft = "-32767px";
    setTimeout(function() {
        _57.style.marginTop = "";
    }, 20000);
    return function() {
        if (!_3a()) {
            cssHelper.addListener("newStyleParsed", function(el) {
                _4e(el.cssHelperParsed.mediaQueryLists);
            });
            cssHelper.addListener("cssMediaQueriesTested", function() {
                if (ua.ie) {
                    _57.style.width = "1px";
                }
                setTimeout(function() {
                    _57.style.width = "";
                    _57.style.marginLeft = "";
                }, 0);
                cssHelper.removeListener("cssMediaQueriesTested", arguments.callee);
            });
            _3c();
            _50();
        } else {
            _57.style.marginLeft = "";
        }
        _52();
    };
}());
try {
    document.execCommand("BackgroundImageCache", false, true);
} catch (e) {}
;
(function ($) {
    $(document).ready(function() {


        function loadLiveChat() {
            var liveChatScriptName = 'mtagconfig-nonlive.js';
            var isLive, isTest;
            (window.location.hostname == 'homestead.com' || window.location.hostname == 'www.homestead.com') == true ? isLive = true : isLive = false;
            (window.location.hostname.match(/.com/)) ? isTest = true : isTest = false;
            if ((!isTest && !isLive) || $('body').hasClass('logged-in')) 
                return;
            if (isLive) 
                liveChatScriptName = 'mtagconfig.js';
            $.getScript('/' + template_url + '/js/' + liveChatScriptName);
        }

        loadLiveChat();
        $(function() {
            $( document ).tooltip({
                position: {
                    my: "center bottom-10",
                    at: "center top",
                    using: function( position, feedback ) {
                        $( this ).css( position );
                        $( "<div>" )
                        .addClass( "arrow" )
                        .addClass( feedback.vertical )
                        .addClass( feedback.horizontal )
                        .appendTo( this );
                    }
                }
            });

        });
        // ecommerce
        $('#ecommerce-popup-close').click(function() {
            $('#ecommerce-popup, #ecommerce-overlay').hide();
            return false;
        });

        $('#ecommerce .hsbutton').click(function() {
            $('#ecommerce-popup, #ecommerce-overlay').show();
            return false;
        });

        // design services
        $('#dsprice-popup-close').click(function() {
            $('#dsprice-popup, #dsprice-overlay').hide();
            return false;
        });

        $('#design .price-overlay').click(function() {
            $('#dsprice-popup, #dsprice-overlay').show();
            return false;
        });

        // IE8 fix for divs
        $(".row .columns:last-child").addClass('last');

        $('#customers .element').each(function() {
            if ($(this).find('.overlay').length == 0) 
                $(this).append($(this).next());
        });

        $('#customers .element span').each(function() {
            if ($(this).find('.overlay').length == 0) 
                $(this).append($(this).next());
        });

        if ($('#hs-slides').length > 0) {
            $('#hs-slides').before('<div id="slide-nav" class="slide-nav">').cycle({
                pause: true,
                // used to pause on hover
                fx: 'fade',
                speed: 'slow',
                timeout: 6000,
                pager: '#slide-nav'
                //before: function() { if (window.console) console.log(this.src); }
            });
        }

        $('#hs-slide-prev').click(function() {
            $('#hs-slides').cycle('prev').cycle('pause');
            return false;
        });

        $('#hs-slide-next').click(function() {
            $('#hs-slides').cycle('next').cycle('pause');
            return false;
        });


        $('.nav-primary').find('h3').bind('click focus', function() {
            $('body').toggleClass('nav-menu');
            $(this).parent().toggleClass('expanded')
        });

        var $container = $('#container'),
        $customers = $('#customers');

        if ($container.length > 0)
            $container.isotope({
                itemSelector: '.element',
                masonry : {
                    columnWidth : 120
                }
            });


        // change size of clicked element
        $container.delegate( '.element', 'click', function() {
            if ($(this).hasClass('large')) 
                var resized = true;
            $('#container .element img').width('110').height('110');
            $('#container .element').removeClass('large');
            if (!resized) {
                $(this).toggleClass('large');
                $(this).find('img').animate({
                    'width': '400',
                    'height': '400'
                });
            }
            $container.isotope('reLayout');
            return false;
        });


        if ($customers.length > 0)
            $customers.isotope({

                //itemSelector: '.element',
                masonry : {
                    columnWidth : $('.element:last').width()
                }
                //*/
            });
        //console.log($('.element').width());

        // used to calculate height of the large overlay on page load then show
        var _h = $('.element.start span div.overlay h2').height() + $('.element.start span div.overlay p').height();
        $('.element.start span div.overlay').height(_h).css({
            'visibility': 'visible' 
        });


        // change size of clicked element
        $customers.delegate( '.element', 'click', function() {
            var _t = this;
            if ($(this).hasClass('large')) 
                var resized = true;
            $('#customers .element img').width('200').height('200');
            $('#customers .element').removeClass('large');
            $('#customers .element.large span').width('400');
            $('#customers .element div.overlay').css({
                'visibility': 'hidden' 
            });
            if (!resized) {
                $(this).toggleClass('large');
                $(this).find('img').animate({
                    'width': '400',
                    'height': '400'
                }, function() {
                    var _h = $(_t).find('h2').height() + $(_t).find('p').height(); // with visibility hidden, we can calculate. with display=none we can't
                    $(_t).find('.overlay').hide().height(_h).css({
                        'visibility': 'visible' 
                    }).fadeIn(); // quick swap of css from visible to display to fade in
                });
            }
            $customers.isotope('reLayout');
            return false;
        });

        if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
            var viewportmeta = document.querySelector('meta[name="viewport"]');
            if (viewportmeta) {
                viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
                document.body.addEventListener('gesturestart', function () {
                    viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
                }, false);
            }
        }



    });

})(jQuery);;
/*
        Easybox v1.4 - Lightweight easy to use lightbox clone for jQuery
        Based on Slimbox2 by Christophe Beyls <http://www.digitalia.be>
*/
/android|iphone|ipod|series60|symbian|windows ce|blackberry|msie 6/i.test(navigator.userAgent) || jQuery(function(a) {
    a("a.lightbox").easybox({
        /* */
    }, null, function(a) {
        return this == a||-1 != this.className.indexOf("lightbox") && this.hasAttribute("data-group") && this.getAttribute("data-group") == a.getAttribute("data-group")
    }, function(b) {
        var c = {};
        if (a("#easyOptions").length) {
            var f = a.parseJSON(a("#easyOptions").html()), d = b.getAttribute("data-group");
            a.each(f, function(e, b) {
                if ("global" == e || "string" == typeof d && e == d)
                    c =
                    a.extend(c, b)
            })
        }
        return c
    })
});
(function(b) {
    function A(a) {
        if (s || 0 > a || a >= d.length)
            return !1;
        B();
        f = a;
        k = (f || (c.loop ? d.length : 0)) - 1;
        e = (f + 1)%d.length || (c.loop ? 0 : - 1);
        c.preloadNext && (0 <= k && C(d[k]), 0 <= e && C(d[e]));
        d[f].loaded || b(w).show();
        C(d[f]);
        return !1
    }
    function W() {
        var a = d[f];
        b(w).hide();
        a.error ? b(j).addClass("error").width(c.errorSize[0]).height(c.errorSize[1]) : (!c.hideCaption && a.caption.length && b(m).html(a.caption).css({
            display: ""
        }), b(j).width(a.width).height(a.height));
        !c.hideCaption && 1 < d.length && c.counterText.length && b(n).html(c.counterText.replace(/{x}/,
        f + 1).replace(/{y}/, d.length)).css({
            display: ""
        });
        s=!0;
        b(j).css({
            visibility: "hidden",
            display: ""
        });
        P([j.offsetWidth, j.offsetHeight], - 1, c.resizeDuration);
        b(g).queue(function(h) {
            b(j).css({
                visibility: "",
                display: "none"
            });
            a.error || (b(a.obj).appendTo(j), a.handler.show(a), D=!0);
            Q();
            b(j).fadeIn(c.fadeDuration, X);
            s=!1;
            h()
        })
    }
    function P(a, h, o) {
        i = a.slice();
        var d = {};
        if (g.offsetHeight != a[1] || g.offsetWidth != a[0])
            d = {
                height: a[1],
                marginTop: - a[1] / 2,
                width: a[0],
                marginLeft: - a[0] / 2
            };
        if ( - 1 < h)
            d.opacity = h;
        b(g).animate(d, o, c.resizeEasing)
    }
    function X() {
        if (!c.hideBottom) {
            if ((0 <= k || 0 <= e)&&!c.noNavigation&&!c.hideButtons)
                b(E).css({
                    display: ""
                }), b([m, n]).addClass("nav"), 0 > k && b(F).addClass("disabled"), 0 > e && b(G).addClass("disabled");
            b(x).fadeIn(c.captionFadeDuration);
            b(g).animate({
                height: i[1] + x.offsetHeight
            }, c.captionFadeDuration, c.resizeEasing)
        }
    }
    function B() {
        null != l && (clearTimeout(l), l = null);
        null != t && (clearTimeout(t), t = null);
        if (0 <= f) {
            var a = d[f];
            !a.error && D && a.handler.hide(a)
        }
        b([j, m, n]).html("");
        b(w).hide();
        b([x, j]).stop(!0, !0).hide();
        b(g).stop(!0).css({
            width: i[0],
            height: i[1],
            marginLeft: - i[0] / 2,
            marginTop: - i[1] / 2,
            opacity: ""
        });
        b([E, m, n]).hide();
        b([j, m, n, F, G]).removeClass();
        D = s=!1
    }
    function H() {
        if (!p)
            return !1;
        B();
        f = k = e =- 1;
        I();
        R(0);
        for (var a = 0; a < d.length; ++a) {
            var h = d[a];
            !h.loaded && h.loading && h.handler.abort(h)
        }
        b(J).stop().fadeOut(c.fadeDuration);
        P([i[0] / 2, i[1] / 2], 0, c.fadeDuration);
        b(g).queue(function(a) {
            b(g).css({
                left: "",
                top: ""
            }).hide();
            p=!1;
            a()
        });
        return !1
    }
    function u() {
        q=!0;
        return A(k)
    }
    function v() {
        q=!1;
        return A(e)
    }
    function K() {
        return s || c.noClose?!1 : H()
    }
    function Y() {
        r =
        !r;
        q=!1;
        b(L).toggleClass("disabled", r);
        r ? null != l && (clearTimeout(l), l = null) : Q();
        return !1
    }
    function Q() {
        if (c.slideshow&&!r && null == l) {
            if (q && 0 <= k)
                return l = setTimeout(u, c.slideshow), !1;
            if (!q && 0 <= e)
                return l = setTimeout(v, c.slideshow), !1
        }
        c.autoClose && null == t && (t = setTimeout(H, c.autoClose));
        return !1
    }
    function C(a) {
        a.loaded && M(a);
        if (!a.loading) {
            a.loading=!0;
            for (var b = y.length - 1; 0 <= b; --b)
                if (y[b].identify(a)) {
                    a.handler = y[b];
                    a.handler.preLoad(a, function() {
                        M(a)
                    });
                    return 
                }
            a.error=!0;
            M(a)
        }
    }
    function M(a) {
        if (!a.loaded &&
        (a.loaded=!0, !a.error)) {
            if (!a.width ||!a.height)
                a.width = c.defaultContentSize[0], a.height = c.defaultContentSize[1];
            if (a.height > c.maximumContentSize[1])
                a.width = Math.round(c.maximumContentSize[1] * a.width / a.height), a.height = c.maximumContentSize[1];
            if (a.width > c.maximumContentSize[0])
                a.height = Math.round(c.maximumContentSize[0] / a.width * a.height), a.width = c.maximumContentSize[0];
            a.handler.postLoad(a)
        }
        d[f] == a && W()
    }
    function R(a) {
        a ? b("object:visible").add("embed").each(function(a, b) {
            N[a] = [b, b.style.visibility];
            b.style.visibility = "hidden"
        }) : (b.each(N, function(a, b) {
            b[0].style.visibility = b[1]
        }), N = []);
        a = a ? "bind" : "unbind";
        b(document)[a]("keydown", Z);
        if (b.fn.mousewheel)
            b(window)[a]("mousewheel", $);
        b(g)[a]("mousedown", aa)[a]("mousemove", S)[a]("mouseup", I);
        b(window)[a]("mousemove", S)[a]("mouseup", I)
    }
    function Z(a) {
        var a = a.keyCode, h = b.inArray;
        return 0 <= h(a, c.closeKeys) ? K() : 0 <= h(a, c.nextKeys)&&!c.noNavigation ? v() : 0 <= h(a, c.previousKeys)&&!c.noNavigation ? u() : !c.preventOtherKeys
    }
    function $(a, b) {
        return 0 < b&&!c.noNavigation ?
        u() : 0 > b&&!c.noNavigation ? v() : !1
    }
    function aa(a) {
        return c.dragDrop ? (z=!0, b(g).css({
            cursor: "pointer"
        }), T = a.pageX - b(this).position().left, U = a.pageY - b(this).position().top, !1) : !0
    }
    function S(a) {
        if (c.dragDrop && z) {
            var h = a.pageX - b(window).scrollLeft() - T, a = a.pageY - b(window).scrollTop() - U;
            b(g).css({
                left: h + "px",
                top: a + "px"
            });
            return !1
        }
        return !0
    }
    function I() {
        z && (z=!1, b(g).css({
            cursor: ""
        }));
        return !0
    }
    var O = {
        loop: !1,
        preloadNext: !0,
        dragDrop: !0,
        hideBottom: !1,
        hideCaption: !1,
        hideButtons: !1,
        noNavigation: !1,
        noClose: !1,
        overlayOpacity: 0.8,
        resizeDuration: 400,
        resizeEasing: "easybox",
        fadeDuration: 400,
        initCenterSize: [250, 250],
        errorSize: [320, 180],
        defaultContentSize: [960, 720],
        maximumContentSize: [1280, 720],
        captionFadeDuration: 200,
        slideshow: 0,
        autoClose: 0,
        counterText: "{x} of {y}",
        closeKeys: [27],
        previousKeys: [37],
        nextKeys: [39],
        preventOtherKeys: !0
    }, y = [], c, d, f =- 1, k, e, i, N = [], q, r, z=!1, T = 0, U = 0, p=!1, s, D, l = null, t = null, J, g, j, E, F, G, L, V, x, m, n, w;
    b(function() {
        b("body").append(b([J = b('<div id="easyOverlay" />').click(K)[0], g = b('<div id="easyCenter" />').append([j =
        b('<div id="easyContainer" />')[0], w = b('<div id="easyLoadingIndicator" />')[0], x = b('<div id="easyBottom" />').append([E = b('<div id="easyNavigation" />').append([F = b('<a id="easyPrevLink" href="#" />').click(u)[0], G = b('<a id="easyNextLink" href="#" />').click(v)[0]])[0], V = b('<a id="easyCloseLink" href="#" />').click(K)[0], L = b('<a id="easySlideLink" href="#" />').click(Y)[0], m = b('<div id="easyCaption" />')[0], n = b('<div id="easyNumber" />')[0]])[0]])[0]]).css("display", "none"));
        b.easybox.resourceHandler({
            identify: function(a) {
                return a.url ?
                !0 : !1
            },
            postLoad: function(a) {
                a.obj = b('<iframe width="' + a.width + '" height="' + a.height + '" src="' + a.url + '" frameborder="0"></iframe>')[0]
            }
        });
        b.easybox.resourceHandler({
            identify: function(a) {
                return a.html?!0 : !1
            },
            postLoad: function(a) {
                a.obj = b('<div style="width:' + a.width + "px;height:" + a.height + 'px">' + a.html + "</div>")[0]
            }
        });
        b.easybox.resourceHandler({
            identify: function(a) {
                if (!a.url)
                    return !1;
                var c = /^(.*)\#([A-Za-z0-9\-_]*)$/i.exec(a.url);
                return null != c && b("#" + c[2]).length ? (a.id = c[2], !0) : !1
            },
            preLoad: function(a,
            c) {
                var o = b("#" + a.id)[0];
                o ? (a.width = a.width || b(o).width(), a.height = a.height || b(o).height(), a.obj = o) : a.error=!0;
                c()
            },
            postLoad: function(a) {
                a.parent = b(a.obj).parent()[0];
                a.display = b(a.obj).css("display")
            },
            show: function(a) {
                b(a.obj).css("display", "block")
            },
            hide: function(a) {
                b(a.parent).append(b(a.obj).css("display", a.display))
            }
        });
        b.easybox.resourceHandler({
            identify: function(a) {
                return !a.url?!1 : /(\.jpg|\.jpeg|\.png|\.gif)$/i.test(a.url)
            },
            preLoad: function(a, b) {
                var c = new Image;
                c.onload = function() {
                    a.width = a.width ||
                    this.width;
                    a.height = a.height || this.height;
                    b()
                };
                c.onerror = function() {
                    a.error=!0;
                    b()
                };
                c.src = a.url
            },
            postLoad: function(a) {
                a.obj = b('<img src="' + a.url + '" style="display:block;width:' + a.width + "px;height:" + a.height + 'px" alt="' + a.caption + '" />')[0]
            }
        });
        b.easybox.resourceHandler({
            identify: function(a) {
                return !a.url?!1 : /(\.mpg|\.mpeg|\.mp4|\.ogv|\.webm|\.flv)$/i.test(a.url)
            },
            postLoad: function(a) {
                a.obj = b('<div style="overflow:hidden;width:' + a.width + "px;height:" + a.height + 'px" />')[0]
            },
            show: function(a) {
                var c=!!b.fn.flowplayer;
                b(a.obj).append(b('<video src="' + a.url + '" width="' + a.width + '" height="' + a.height + '"' + (!c ? ' controls="controls"' : "") + " />"));
                c && b(a.obj).flowplayer()
            }
        });
        b.easybox.resourceHandler({
            identify: function(a) {
                if (!a.url)
                    return !1;
                var b = /^http\:\/\/www\.youtube\.com\/watch\?v=([A-Za-z0-9\-_]*)(&(.*))?$/i.exec(a.url);
                return null != b ? (a.id = b[1], !0) : !1
            },
            preLoad: function(a, c) {
                b.ajax("http://gdata.youtube.com/feeds/api/videos/" + a.id + "?v=2&alt=jsonc", {
                    type: "GET",
                    dataType: "jsonp",
                    timeout: 2E3,
                    error: function(b, d) {
                        if ("abort" !=
                        d)
                            a.error=!0, c()
                    },
                    success: function(b) {
                        !b.error && b.data && "allowed" == b.data.accessControl.embed ? (b = "widescreen" == b.data.aspectRatio, a.height = a.height || 720, a.width = Math.round(a.height * (b ? 16 / 9 : 4 / 3))) : a.error=!0;
                        c()
                    }
                })
            },
            postLoad: function(a) {
                a.obj = b('<iframe src="http://www.youtube.com/embed/' + a.id + '?version=3&autohide=1&autoplay=1&rel=0" width="' + a.width + '" height="' + a.height + '" frameborder="0"></iframe>')[0]
            }
        });
        b.easybox.resourceHandler({
            identify: function(a) {
                if (!a.url)
                    return !1;
                var b = /^http\:\/\/vimeo\.com\/([0-9]*)(.*)?$/i.exec(a.url);
                return null != b ? (a.id = b[1], !0) : !1
            },
            preLoad: function(a, c) {
                b.ajax("http://vimeo.com/api/v2/video/" + a.id + ".json", {
                    type: "GET",
                    dataType: "jsonp",
                    timeout: 2E3,
                    error: function(b, d) {
                        if ("abort" != d)
                            a.error=!0, c()
                    },
                    success: function(b) {
                        if (b.length)
                            if ("anywhere" == b[0].embed_privacy || "approved" == b[0].embed_privacy) {
                                if (b[0].width && b[0].height)
                                    a.width = b[0].width, a.height = b[0].height
                            } else 
                                a.error=!0;
                        c()
                    }
                })
            },
            postLoad: function(a) {
                a.obj = b('<iframe src="http://player.vimeo.com/video/' + a.id + '?title=0&byline=0&portrait=0&autoplay=true" width="' +
                a.width + '" height="' + a.height + '" frameborder="0"></iframe>')[0]
            }
        });
        b.easybox.resourceHandler({
            identify: function(a) {
                if (!a.url)
                    return !1;
                var b = /^http\:\/\/www\.dailymotion\.com\/video\/([A-Za-z0-9]*)(.*)?$/i.exec(a.url);
                return null != b ? (a.id = b[1], !0) : !1
            },
            preLoad: function(a, c) {
                b.ajax("https://api.dailymotion.com/video/" + a.id + "?fields=allow_embed,aspect_ratio", {
                    type: "GET",
                    dataType: "jsonp",
                    timeout: 2E3,
                    error: function(b, d) {
                        if ("abort" != d)
                            a.error=!0, c()
                    },
                    success: function(b) {
                        b.allow_embed ? (b = b.aspect_ratio, a.height =
                        a.height || 720, a.width = Math.round(a.height * b)) : a.error=!0;
                        c()
                    }
                })
            },
            postLoad: function(a) {
                a.obj = b('<iframe src="http://www.dailymotion.com/embed/video/' + a.id + '?autoplay=1" width="' + a.width + '" height="' + a.height + '" frameborder="0"></iframe>')[0]
            }
        })
    });
    b.fn.easybox = function(a, c, d, g) {
        var c = c || function(a) {
            var b = {
                url: a.href,
                caption: a.title
            };
            if (a.hasAttribute("data-width"))
                b.width = a.getAttribute("data-width");
            if (a.hasAttribute("data-height"))
                b.height = a.getAttribute("data-height");
            return b
        }, d = d || function(a) {
            return this ==
            a
        }, g = g || function() {
            return {}
        }, j = this;
        return j.unbind("click").click(function() {
            var f = this, k = 0, e, i = 0, l;
            e = b.grep(j, function(a, b) {
                return d.call(f, a, b)
            });
            for (l = e.length; i < l; ++i)
                e[i] == f && (k = i), e[i] = c(e[i], i);
            return b.easybox(e, k, b.extend({}, a, g(f)))
        })
    };
    b.easybox = function(a, h, e) {
        if (p)
            return !1;
        c = b.extend({}, O, e);
        var e = 0, f;
        d = [];
        for (f = a.length; e < f; ++e)
            d.push(b.extend({
                caption: "",
                width: 0,
                height: 0
            }, a[e], {
                handler: null,
                loaded: !1,
                loading: !1,
                error: !1,
                obj: null
            }));
        if (d.length)
            return p=!0, c.loop = c.loop && 1 < d.length,
            c.slideshow = c.slideshow && 1 < d.length ? c.slideshow : 0, b(L).removeClass("disabled").css({
                display: c.slideshow && 1 < d.length&&!c.hideButtons ? "": "none"
            }), q = r=!1, b(V).css({
                display: !c.hideButtons ? "": "none"
            }), i = c.initCenterSize.slice(), B(), R(1), b(g).show(), b(J).css({
                opacity: c.overlayOpacity
            }).fadeIn(c.fadeDuration, function() {
                A(Math.min(d.length - 1, h || 0))
            }), !1
    };
    b.easybox.previous = function() {
        return 0 <= k?!u() : !1
    };
    b.easybox.next = function() {
        return 0 <= e?!v() : !1
    };
    b.easybox.close = function() {
        return p?!H() : !1
    };
    b.easybox.isOpen =
    function() {
        return p
    };
    b.easybox.defaults = function(a) {
        O = b.extend(O, a)
    };
    b.easybox.resourceHandler = function(a) {
        y.push(b.extend({
            identify: function() {
                return !1
            },
            preLoad: function(a, b) {
                b()
            },
            postLoad: function() {},
            abort: function() {},
            show: function() {},
            hide: function() {}
        }, a))
    };
    b.easing.easybox = function(a) {
        return 0.7 > a ? 1.2 * Math.pow(a / 0.7, 2) : 1.2 - 0.2 * Math.sqrt((a - 0.7) / (1 - 0.7))
    }
})(jQuery);;
/*! jQuery UI - v1.10.3 - 2013-05-03
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function( $, undefined ) {

    var uuid = 0,
    runiqueId = /^ui-id-\d+$/;

    // $.ui might exist from components with no dependencies, e.g., $.ui.position
    $.ui = $.ui || {};

    $.extend( $.ui, {
        version: "1.10.3",

        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });

    // plugins
    $.fn.extend({
        focus: (function( orig ) {
            return function( delay, fn ) {
                return typeof delay === "number" ?
                this.each(function() {
                    var elem = this;
                    setTimeout(function() {
                        $( elem ).focus();
                        if ( fn ) {
                            fn.call( elem );
                        }
                    }, delay );
                }) :
                orig.apply( this, arguments );
            };
        })( $.fn.focus ),

        scrollParent: function() {
            var scrollParent;
            if (($.ui.ie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) {
                scrollParent = this.parents().filter(function() {
                    return (/(relative|absolute|fixed)/).test($.css(this, "position")) && (/(auto|scroll)/).test($.css(this, "overflow") + $.css(this, "overflow-y") + $.css(this, "overflow-x"));
                }).eq(0);
            } else {
                scrollParent = this.parents().filter(function() {
                    return (/(auto|scroll)/).test($.css(this, "overflow") + $.css(this, "overflow-y") + $.css(this, "overflow-x"));
                }).eq(0);
            }

            return (/fixed/).test(this.css("position")) || !scrollParent.length ? $(document) : scrollParent;
        },

        zIndex: function( zIndex ) {
            if ( zIndex !== undefined ) {
                return this.css( "zIndex", zIndex );
            }

            if ( this.length ) {
                var elem = $( this[ 0 ] ), position, value;
                while ( elem.length && elem[ 0 ] !== document ) {
                    // Ignore z-index if position is set to a value where z-index is ignored by the browser
                    // This makes behavior of this function consistent across browsers
                    // WebKit always returns auto if the element is positioned
                    position = elem.css( "position" );
                    if ( position === "absolute" || position === "relative" || position === "fixed" ) {
                        // IE returns 0 when zIndex is not specified
                        // other browsers return a string
                        // we ignore the case of nested elements with an explicit value of 0
                        // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
                        value = parseInt( elem.css( "zIndex" ), 10 );
                        if ( !isNaN( value ) && value !== 0 ) {
                            return value;
                        }
                    }
                    elem = elem.parent();
                }
            }

            return 0;
        },

        uniqueId: function() {
            return this.each(function() {
                if ( !this.id ) {
                    this.id = "ui-id-" + (++uuid);
                }
            });
        },

        removeUniqueId: function() {
            return this.each(function() {
                if ( runiqueId.test( this.id ) ) {
                    $( this ).removeAttr( "id" );
                }
            });
        }
    });

    // selectors
    function focusable( element, isTabIndexNotNaN ) {
        var map, mapName, img,
        nodeName = element.nodeName.toLowerCase();
        if ( "area" === nodeName ) {
            map = element.parentNode;
            mapName = map.name;
            if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
                return false;
            }
            img = $( "img[usemap=#" + mapName + "]" )[0];
            return !!img && visible( img );
        }
        return ( /input|select|textarea|button|object/.test( nodeName ) ?
        !element.disabled :
        "a" === nodeName ?
        element.href || isTabIndexNotNaN :
        isTabIndexNotNaN) &&
        // the element and all of its ancestors must be visible
        visible( element );
    }

    function visible( element ) {
        return $.expr.filters.visible( element ) &&
        !$( element ).parents().addBack().filter(function() {
            return $.css( this, "visibility" ) === "hidden";
        }).length;
    }

    $.extend( $.expr[ ":" ], {
        data: $.expr.createPseudo ?
        $.expr.createPseudo(function( dataName ) {
            return function( elem ) {
                return !!$.data( elem, dataName );
            };
        }) :
        // support: jQuery <1.8
        function( elem, i, match ) {
            return !!$.data( elem, match[ 3 ] );
        },

        focusable: function( element ) {
            return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
        },

        tabbable: function( element ) {
            var tabIndex = $.attr( element, "tabindex" ),
            isTabIndexNaN = isNaN( tabIndex );
            return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
        }
    });

    // support: jQuery <1.8
    if ( !$( "<a>" ).outerWidth( 1 ).jquery ) {
        $.each( [ "Width", "Height" ], function( i, name ) {
            var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
            type = name.toLowerCase(),
            orig = {
                innerWidth: $.fn.innerWidth,
                innerHeight: $.fn.innerHeight,
                outerWidth: $.fn.outerWidth,
                outerHeight: $.fn.outerHeight
            };

            function reduce( elem, size, border, margin ) {
                $.each( side, function() {
                    size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
                    if ( border ) {
                        size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
                    }
                    if ( margin ) {
                        size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
                    }
                });
                return size;
            }

            $.fn[ "inner" + name ] = function( size ) {
                if ( size === undefined ) {
                    return orig[ "inner" + name ].call( this );
                }

                return this.each(function() {
                    $( this ).css( type, reduce( this, size ) + "px" );
                });
            };

            $.fn[ "outer" + name] = function( size, margin ) {
                if ( typeof size !== "number" ) {
                    return orig[ "outer" + name ].call( this, size );
                }

                return this.each(function() {
                    $( this).css( type, reduce( this, size, true, margin ) + "px" );
                });
            };
        });
    }

    // support: jQuery <1.8
    if ( !$.fn.addBack ) {
        $.fn.addBack = function( selector ) {
            return this.add( selector == null ?
            this.prevObject : this.prevObject.filter( selector )
            );
        };
    }

    // support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
    if ( $( "<a>" ).data( "a-b", "a" ).removeData( "a-b" ).data( "a-b" ) ) {
        $.fn.removeData = (function( removeData ) {
            return function( key ) {
                if ( arguments.length ) {
                    return removeData.call( this, $.camelCase( key ) );
                } else {
                    return removeData.call( this );
                }
            };
        })( $.fn.removeData );
    }





    // deprecated
    $.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );

    $.support.selectstart = "onselectstart" in document.createElement( "div" );
    $.fn.extend({
        disableSelection: function() {
            return this.bind( ( $.support.selectstart ? "selectstart" : "mousedown" ) +
            ".ui-disableSelection", function( event ) {
                event.preventDefault();
            });
        },

        enableSelection: function() {
            return this.unbind( ".ui-disableSelection" );
        }
    });

    $.extend( $.ui, {
        // $.ui.plugin is deprecated. Use $.widget() extensions instead.
        plugin: {
            add: function( module, option, set ) {
                var i,
                proto = $.ui[ module ].prototype;
                for ( i in set ) {
                    proto.plugins[ i ] = proto.plugins[ i ] || [];
                    proto.plugins[ i ].push( [ option, set[ i ] ] );
                }
            },
            call: function( instance, name, args ) {
                var i,
                set = instance.plugins[ name ];
                if ( !set || !instance.element[ 0 ].parentNode || instance.element[ 0 ].parentNode.nodeType === 11 ) {
                    return;
                }

                for ( i = 0; i < set.length; i++ ) {
                    if ( instance.options[ set[ i ][ 0 ] ] ) {
                        set[ i ][ 1 ].apply( instance.element, args );
                    }
                }
            }
        },

        // only used by resizable
        hasScroll: function( el, a ) {

            //If overflow is hidden, the element might have extra content, but the user wants to hide it
            if ( $( el ).css( "overflow" ) === "hidden") {
                return false;
            }

            var scroll = ( a && a === "left" ) ? "scrollLeft" : "scrollTop",
            has = false;

            if ( el[ scroll ] > 0 ) {
                return true;
            }

            // TODO: determine which cases actually cause this to happen
            // if the element doesn't have the scroll set, see if it's possible to
            // set the scroll
            el[ scroll ] = 1;
            has = ( el[ scroll ] > 0 );
            el[ scroll ] = 0;
            return has;
        }
    });

})( jQuery );

(function( $, undefined ) {

    var uuid = 0,
    slice = Array.prototype.slice,
    _cleanData = $.cleanData;
    $.cleanData = function( elems ) {
        for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
            try {
                $( elem ).triggerHandler( "remove" );
                // http://bugs.jquery.com/ticket/8235
            } catch ( e ) {}
        }
        _cleanData( elems );
    };

    $.widget = function( name, base, prototype ) {
        var fullName, existingConstructor, constructor, basePrototype,
        // proxiedPrototype allows the provided prototype to remain unmodified
        // so that it can be used as a mixin for multiple widgets (#8876)
        proxiedPrototype = {},
        namespace = name.split( "." )[ 0 ];

        name = name.split( "." )[ 1 ];
        fullName = namespace + "-" + name;

        if ( !prototype ) {
            prototype = base;
            base = $.Widget;
        }

        // create selector for plugin
        $.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
            return !!$.data( elem, fullName );
        };

        $[ namespace ] = $[ namespace ] || {};
        existingConstructor = $[ namespace ][ name ];
        constructor = $[ namespace ][ name ] = function( options, element ) {
            // allow instantiation without "new" keyword
            if ( !this._createWidget ) {
                return new constructor( options, element );
            }

            // allow instantiation without initializing for simple inheritance
            // must use "new" keyword (the code above always passes args)
            if ( arguments.length ) {
                this._createWidget( options, element );
            }
        };
        // extend with the existing constructor to carry over any static properties
        $.extend( constructor, existingConstructor, {
            version: prototype.version,
            // copy the object used to create the prototype in case we need to
            // redefine the widget later
            _proto: $.extend( {}, prototype ),
            // track widgets that inherit from this widget in case this widget is
            // redefined after a widget inherits from it
            _childConstructors: []
        });

        basePrototype = new base();
        // we need to make the options hash a property directly on the new instance
        // otherwise we'll modify the options hash on the prototype that we're
        // inheriting from
        basePrototype.options = $.widget.extend( {}, basePrototype.options );
        $.each( prototype, function( prop, value ) {
            if ( !$.isFunction( value ) ) {
                proxiedPrototype[ prop ] = value;
                return;
            }
            proxiedPrototype[ prop ] = (function() {
                var _super = function() {
                    return base.prototype[ prop ].apply( this, arguments );
                },
                _superApply = function( args ) {
                    return base.prototype[ prop ].apply( this, args );
                };
                return function() {
                    var __super = this._super,
                    __superApply = this._superApply,
                    returnValue;

                    this._super = _super;
                    this._superApply = _superApply;

                    returnValue = value.apply( this, arguments );

                    this._super = __super;
                    this._superApply = __superApply;

                    return returnValue;
                };
            })();
        });
        constructor.prototype = $.widget.extend( basePrototype, {
            // TODO: remove support for widgetEventPrefix
            // always use the name + a colon as the prefix, e.g., draggable:start
            // don't prefix for widgets that aren't DOM-based
            widgetEventPrefix: existingConstructor ? basePrototype.widgetEventPrefix : name
        }, proxiedPrototype, {
            constructor: constructor,
            namespace: namespace,
            widgetName: name,
            widgetFullName: fullName
        });

        // If this widget is being redefined then we need to find all widgets that
        // are inheriting from it and redefine all of them so that they inherit from
        // the new version of this widget. We're essentially trying to replace one
        // level in the prototype chain.
        if ( existingConstructor ) {
            $.each( existingConstructor._childConstructors, function( i, child ) {
                var childPrototype = child.prototype;

                // redefine the child widget using the same prototype that was
                // originally used, but inherit from the new version of the base
                $.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
            });
            // remove the list of existing child constructors from the old constructor
            // so the old child constructors can be garbage collected
            delete existingConstructor._childConstructors;
        } else {
            base._childConstructors.push( constructor );
        }

        $.widget.bridge( name, constructor );
    };

    $.widget.extend = function( target ) {
        var input = slice.call( arguments, 1 ),
        inputIndex = 0,
        inputLength = input.length,
        key,
        value;
        for ( ; inputIndex < inputLength; inputIndex++ ) {
            for ( key in input[ inputIndex ] ) {
                value = input[ inputIndex ][ key ];
                if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
                    // Clone objects
                    if ( $.isPlainObject( value ) ) {
                        target[ key ] = $.isPlainObject( target[ key ] ) ?
                        $.widget.extend( {}, target[ key ], value ) :
                        // Don't extend strings, arrays, etc. with objects
                        $.widget.extend( {}, value );
                        // Copy everything else by reference
                    } else {
                        target[ key ] = value;
                    }
                }
            }
        }
        return target;
    };

    $.widget.bridge = function( name, object ) {
        var fullName = object.prototype.widgetFullName || name;
        $.fn[ name ] = function( options ) {
            var isMethodCall = typeof options === "string",
            args = slice.call( arguments, 1 ),
            returnValue = this;

            // allow multiple hashes to be passed on init
            options = !isMethodCall && args.length ?
            $.widget.extend.apply( null, [ options ].concat(args) ) :
            options;

            if ( isMethodCall ) {
                this.each(function() {
                    var methodValue,
                    instance = $.data( this, fullName );
                    if ( !instance ) {
                        return $.error( "cannot call methods on " + name + " prior to initialization; " +
                        "attempted to call method '" + options + "'" );
                    }
                    if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
                        return $.error( "no such method '" + options + "' for " + name + " widget instance" );
                    }
                    methodValue = instance[ options ].apply( instance, args );
                    if ( methodValue !== instance && methodValue !== undefined ) {
                        returnValue = methodValue && methodValue.jquery ?
                        returnValue.pushStack( methodValue.get() ) :
                        methodValue;
                        return false;
                    }
                });
            } else {
                this.each(function() {
                    var instance = $.data( this, fullName );
                    if ( instance ) {
                        instance.option( options || {})._init();
                    } else {
                        $.data( this, fullName, new object( options, this ) );
                    }
                });
            }

            return returnValue;
        };
    };

    $.Widget = function( /* options, element */
    ) {};
    $.Widget._childConstructors = [];

    $.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: false,

            // callbacks
            create: null
        },
        _createWidget: function( options, element ) {
            element = $( element || this.defaultElement || this )[ 0 ];
            this.element = $( element );
            this.uuid = uuid++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.options = $.widget.extend( {},
            this.options,
            this._getCreateOptions(),
            options );

            this.bindings = $();
            this.hoverable = $();
            this.focusable = $();

            if ( element !== this ) {
                $.data( element, this.widgetFullName, this );
                this._on( true, this.element, {
                    remove: function( event ) {
                        if ( event.target === element ) {
                            this.destroy();
                        }
                    }
                });
                this.document = $( element.style ?
                // element within the document
                element.ownerDocument :
                // element is window or document
                element.document || element );
                this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
            }

            this._create();
            this._trigger( "create", null, this._getCreateEventData() );
            this._init();
        },
        _getCreateOptions: $.noop,
        _getCreateEventData: $.noop,
        _create: $.noop,
        _init: $.noop,

        destroy: function() {
            this._destroy();
            // we can probably remove the unbind calls in 2.0
            // all event bindings should go through this._on()
            this.element
            .unbind( this.eventNamespace )
            // 1.9 BC for #7810
            // TODO remove dual storage
            .removeData( this.widgetName )
            .removeData( this.widgetFullName )
            // support: jquery <1.6.3
            // http://bugs.jquery.com/ticket/9413
            .removeData( $.camelCase( this.widgetFullName ) );
            this.widget()
            .unbind( this.eventNamespace )
            .removeAttr( "aria-disabled" )
            .removeClass(
            this.widgetFullName + "-disabled " +
            "ui-state-disabled" );

            // clean up events and states
            this.bindings.unbind( this.eventNamespace );
            this.hoverable.removeClass( "ui-state-hover" );
            this.focusable.removeClass( "ui-state-focus" );
        },
        _destroy: $.noop,

        widget: function() {
            return this.element;
        },

        option: function( key, value ) {
            var options = key,
            parts,
            curOption,
            i;

            if ( arguments.length === 0 ) {
                // don't return a reference to the internal hash
                return $.widget.extend( {}, this.options );
            }

            if ( typeof key === "string" ) {
                // handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
                options = {};
                parts = key.split( "." );
                key = parts.shift();
                if ( parts.length ) {
                    curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
                    for ( i = 0; i < parts.length - 1; i++ ) {
                        curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
                        curOption = curOption[ parts[ i ] ];
                    }
                    key = parts.pop();
                    if ( value === undefined ) {
                        return curOption[ key ] === undefined ? null : curOption[ key ];
                    }
                    curOption[ key ] = value;
                } else {
                    if ( value === undefined ) {
                        return this.options[ key ] === undefined ? null : this.options[ key ];
                    }
                    options[ key ] = value;
                }
            }

            this._setOptions( options );

            return this;
        },
        _setOptions: function( options ) {
            var key;

            for ( key in options ) {
                this._setOption( key, options[ key ] );
            }

            return this;
        },
        _setOption: function( key, value ) {
            this.options[ key ] = value;

            if ( key === "disabled" ) {
                this.widget()
                .toggleClass( this.widgetFullName + "-disabled ui-state-disabled", !!value )
                .attr( "aria-disabled", value );
                this.hoverable.removeClass( "ui-state-hover" );
                this.focusable.removeClass( "ui-state-focus" );
            }

            return this;
        },

        enable: function() {
            return this._setOption( "disabled", false );
        },
        disable: function() {
            return this._setOption( "disabled", true );
        },

        _on: function( suppressDisabledCheck, element, handlers ) {
            var delegateElement,
            instance = this;

            // no suppressDisabledCheck flag, shuffle arguments
            if ( typeof suppressDisabledCheck !== "boolean" ) {
                handlers = element;
                element = suppressDisabledCheck;
                suppressDisabledCheck = false;
            }

            // no element argument, shuffle and use this.element
            if ( !handlers ) {
                handlers = element;
                element = this.element;
                delegateElement = this.widget();
            } else {
                // accept selectors, DOM elements
                element = delegateElement = $( element );
                this.bindings = this.bindings.add( element );
            }

            $.each( handlers, function( event, handler ) {
                function handlerProxy() {
                    // allow widgets to customize the disabled handling
                    // - disabled as an array instead of boolean
                    // - disabled class as method for disabling individual parts
                    if ( !suppressDisabledCheck &&
                    ( instance.options.disabled === true ||
                    $( this ).hasClass( "ui-state-disabled" ) ) ) {
                        return;
                    }
                    return ( typeof handler === "string" ? instance[ handler ] : handler )
                    .apply( instance, arguments );
                }

                // copy the guid so direct unbinding works
                if ( typeof handler !== "string" ) {
                    handlerProxy.guid = handler.guid =
                    handler.guid || handlerProxy.guid || $.guid++;
                }

                var match = event.match( /^(\w+)\s*(.*)$/ ),
                eventName = match[1] + instance.eventNamespace,
                selector = match[2];
                if ( selector ) {
                    delegateElement.delegate( selector, eventName, handlerProxy );
                } else {
                    element.bind( eventName, handlerProxy );
                }
            });
        },

        _off: function( element, eventName ) {
            eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) + this.eventNamespace;
            element.unbind( eventName ).undelegate( eventName );
        },

        _delay: function( handler, delay ) {
            function handlerProxy() {
                return ( typeof handler === "string" ? instance[ handler ] : handler )
                .apply( instance, arguments );
            }
            var instance = this;
            return setTimeout( handlerProxy, delay || 0 );
        },

        _hoverable: function( element ) {
            this.hoverable = this.hoverable.add( element );
            this._on( element, {
                mouseenter: function( event ) {
                    $( event.currentTarget ).addClass( "ui-state-hover" );
                },
                mouseleave: function( event ) {
                    $( event.currentTarget ).removeClass( "ui-state-hover" );
                }
            });
        },

        _focusable: function( element ) {
            this.focusable = this.focusable.add( element );
            this._on( element, {
                focusin: function( event ) {
                    $( event.currentTarget ).addClass( "ui-state-focus" );
                },
                focusout: function( event ) {
                    $( event.currentTarget ).removeClass( "ui-state-focus" );
                }
            });
        },

        _trigger: function( type, event, data ) {
            var prop, orig,
            callback = this.options[ type ];

            data = data || {};
            event = $.Event( event );
            event.type = ( type === this.widgetEventPrefix ?
            type :
            this.widgetEventPrefix + type ).toLowerCase();
            // the original event may come from any element
            // so we need to reset the target on the new event
            event.target = this.element[ 0 ];

            // copy original event properties over to the new event
            orig = event.originalEvent;
            if ( orig ) {
                for ( prop in orig ) {
                    if ( !( prop in event ) ) {
                        event[ prop ] = orig[ prop ];
                    }
                }
            }

            this.element.trigger( event, data );
            return !( $.isFunction( callback ) &&
            callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
            event.isDefaultPrevented() );
        }
    };

    $.each( {
        show: "fadeIn",
        hide: "fadeOut" 
    }, function( method, defaultEffect ) {
        $.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
            if ( typeof options === "string" ) {
                options = {
                    effect: options 
                };
            }
            var hasOptions,
            effectName = !options ?
            method :
            options === true || typeof options === "number" ?
            defaultEffect :
            options.effect || defaultEffect;
            options = options || {};
            if ( typeof options === "number" ) {
                options = {
                    duration: options 
                };
            }
            hasOptions = !$.isEmptyObject( options );
            options.complete = callback;
            if ( options.delay ) {
                element.delay( options.delay );
            }
            if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
                element[ method ]( options );
            } else if ( effectName !== method && element[ effectName ] ) {
                element[ effectName ]( options.duration, options.easing, callback );
            } else {
                element.queue(function( next ) {
                    $( this )[ method ]();
                    if ( callback ) {
                        callback.call( element[ 0 ] );
                    }
                    next();
                });
            }
        };
    });

})( jQuery );

(function( $, undefined ) {

    var mouseHandled = false;
    $( document ).mouseup( function() {
        mouseHandled = false;
    });

    $.widget("ui.mouse", {
        version: "1.10.3",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var that = this;

            this.element
            .bind("mousedown." + this.widgetName, function(event) {
                return that._mouseDown(event);
            })
            .bind("click." + this.widgetName, function(event) {
                if (true === $.data(event.target, that.widgetName + ".preventClickEvent")) {
                    $.removeData(event.target, that.widgetName + ".preventClickEvent");
                    event.stopImmediatePropagation();
                    return false;
                }
            });

            this.started = false;
        },

        // TODO: make sure destroying one instance of mouse doesn't mess with
        // other instances of mouse
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName);
            if ( this._mouseMoveDelegate ) {
                $(document)
                .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            }
        },

        _mouseDown: function(event) {
            // don't let more than one widget handle mouseStart
            if ( mouseHandled ) {
                return;
            }

            // we may have missed mouseup (out of window)
            (this._mouseStarted && this._mouseUp(event));

            this._mouseDownEvent = event;

            var that = this,
            btnIsLeft = (event.which === 1),
            // event.target.nodeName works around a bug in IE 8 with
            // disabled inputs (#7620)
            elIsCancel = (typeof this.options.cancel === "string" && event.target.nodeName ? $(event.target).closest(this.options.cancel).length : false);
            if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
                return true;
            }

            this.mouseDelayMet = !this.options.delay;
            if (!this.mouseDelayMet) {
                this._mouseDelayTimer = setTimeout(function() {
                    that.mouseDelayMet = true;
                }, this.options.delay);
            }

            if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
                this._mouseStarted = (this._mouseStart(event) !== false);
                if (!this._mouseStarted) {
                    event.preventDefault();
                    return true;
                }
            }

            // Click event may never have fired (Gecko & Opera)
            if (true === $.data(event.target, this.widgetName + ".preventClickEvent")) {
                $.removeData(event.target, this.widgetName + ".preventClickEvent");
            }

            // these delegates are required to keep context
            this._mouseMoveDelegate = function(event) {
                return that._mouseMove(event);
            };
            this._mouseUpDelegate = function(event) {
                return that._mouseUp(event);
            };
            $(document)
            .bind("mousemove." + this.widgetName, this._mouseMoveDelegate)
            .bind("mouseup." + this.widgetName, this._mouseUpDelegate);

            event.preventDefault();

            mouseHandled = true;
            return true;
        },

        _mouseMove: function(event) {
            // IE mouseup check - mouseup happened when mouse was out of window
            if ($.ui.ie && ( !document.documentMode || document.documentMode < 9 ) && !event.button) {
                return this._mouseUp(event);
            }

            if (this._mouseStarted) {
                this._mouseDrag(event);
                return event.preventDefault();
            }

            if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
                this._mouseStarted =
                (this._mouseStart(this._mouseDownEvent, event) !== false);
                (this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event));
            }

            return !this._mouseStarted;
        },

        _mouseUp: function(event) {
            $(document)
            .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
            .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);

            if (this._mouseStarted) {
                this._mouseStarted = false;

                if (event.target === this._mouseDownEvent.target) {
                    $.data(event.target, this.widgetName + ".preventClickEvent", true);
                }

                this._mouseStop(event);
            }

            return false;
        },

        _mouseDistanceMet: function(event) {
            return (Math.max(
            Math.abs(this._mouseDownEvent.pageX - event.pageX),
            Math.abs(this._mouseDownEvent.pageY - event.pageY)
            ) >= this.options.distance
            );
        },

        _mouseDelayMet: function( /* event */
        ) {
            return this.mouseDelayMet;
        },

        // These are placeholder methods, to be overriden by extending plugin
        _mouseStart: function( /* event */
        ) {},
        _mouseDrag: function( /* event */
        ) {},
        _mouseStop: function( /* event */
        ) {},
        _mouseCapture: function( /* event */
        ) {
            return true;
        }
    });

})(jQuery);

(function( $, undefined ) {

    $.widget("ui.draggable", $.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "drag",
        options: {
            addClasses: true,
            appendTo: "parent",
            axis: false,
            connectToSortable: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            grid: false,
            handle: false,
            helper: "original",
            iframeFix: false,
            opacity: false,
            refreshPositions: false,
            revert: false,
            revertDuration: 500,
            scope: "default",
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: false,
            snapMode: "both",
            snapTolerance: 20,
            stack: false,
            zIndex: false,

            // callbacks
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {

            if (this.options.helper === "original" && !(/^(?:r|a|f)/).test(this.element.css("position"))) {
                this.element[0].style.position = "relative";
            }
            if (this.options.addClasses) {
                this.element.addClass("ui-draggable");
            }
            if (this.options.disabled) {
                this.element.addClass("ui-draggable-disabled");
            }

            this._mouseInit();

        },

        _destroy: function() {
            this.element.removeClass( "ui-draggable ui-draggable-dragging ui-draggable-disabled" );
            this._mouseDestroy();
        },

        _mouseCapture: function(event) {

            var o = this.options;

            // among others, prevent a drag on a resizable-handle
            if (this.helper || o.disabled || $(event.target).closest(".ui-resizable-handle").length > 0) {
                return false;
            }

            //Quit if we're not on a valid handle
            this.handle = this._getHandle(event);
            if (!this.handle) {
                return false;
            }

            $(o.iframeFix === true ? "iframe" : o.iframeFix).each(function() {
                $("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>")
                .css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1000
                })
                .css($(this).offset())
                .appendTo("body");
            });

            return true;

        },

        _mouseStart: function(event) {

            var o = this.options;

            //Create and append the visible helper
            this.helper = this._createHelper(event);

            this.helper.addClass("ui-draggable-dragging");

            //Cache the helper size
            this._cacheHelperProportions();

            //If ddmanager is used for droppables, set the global draggable
            if ($.ui.ddmanager) {
                $.ui.ddmanager.current = this;
            }

            /*
            		 * - Position generation -
            		 * This block generates everything position related - it's the core of draggables.
            		 */

            //Cache the margins of the original element
            this._cacheMargins();

            //Store the helper's css position
            this.cssPosition = this.helper.css( "position" );
            this.scrollParent = this.helper.scrollParent();
            this.offsetParent = this.helper.offsetParent();
            this.offsetParentCssPosition = this.offsetParent.css( "position" );

            //The element's absolute position on the page minus margins
            this.offset = this.positionAbs = this.element.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };

            //Reset scroll cache
            this.offset.scroll = false;

            $.extend(this.offset, {
                click: {
                    //Where the click happened, relative to the element
                    left: event.pageX - this.offset.left,
                    top: event.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset() //This is a relative to absolute position minus the actual position calculation - only used for relative positioned helper
            });

            //Generate the original position
            this.originalPosition = this.position = this._generatePosition(event);
            this.originalPageX = event.pageX;
            this.originalPageY = event.pageY;

            //Adjust the mouse offset relative to the helper if "cursorAt" is supplied
            (o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));

            //Set a containment if given in the options
            this._setContainment();

            //Trigger event + callbacks
            if (this._trigger("start", event) === false) {
                this._clear();
                return false;
            }

            //Recache the helper size
            this._cacheHelperProportions();

            //Prepare the droppable offsets
            if ($.ui.ddmanager && !o.dropBehaviour) {
                $.ui.ddmanager.prepareOffsets(this, event);
            }


            this._mouseDrag(event, true); //Execute the drag once - this causes the helper not to be visible before getting its correct position

            //If the ddmanager is used for droppables, inform the manager that dragging has started (see #5003)
            if ( $.ui.ddmanager ) {
                $.ui.ddmanager.dragStart(this, event);
            }

            return true;
        },

        _mouseDrag: function(event, noPropagation) {
            // reset any necessary cached properties (see #5009)
            if ( this.offsetParentCssPosition === "fixed" ) {
                this.offset.parent = this._getParentOffset();
            }

            //Compute the helpers position
            this.position = this._generatePosition(event);
            this.positionAbs = this._convertPositionTo("absolute");

            //Call plugins and callbacks and use the resulting position if something is returned
            if (!noPropagation) {
                var ui = this._uiHash();
                if (this._trigger("drag", event, ui) === false) {
                    this._mouseUp({});
                    return false;
                }
                this.position = ui.position;
            }

            if (!this.options.axis || this.options.axis !== "y") {
                this.helper[0].style.left = this.position.left + "px";
            }
            if (!this.options.axis || this.options.axis !== "x") {
                this.helper[0].style.top = this.position.top + "px";
            }
            if ($.ui.ddmanager) {
                $.ui.ddmanager.drag(this, event);
            }

            return false;
        },

        _mouseStop: function(event) {

            //If we are using droppables, inform the manager about the drop
            var that = this,
            dropped = false;
            if ($.ui.ddmanager && !this.options.dropBehaviour) {
                dropped = $.ui.ddmanager.drop(this, event);
            }

            //if a drop comes from outside (a sortable)
            if (this.dropped) {
                dropped = this.dropped;
                this.dropped = false;
            }

            //if the original element is no longer in the DOM don't bother to continue (see #8269)
            if ( this.options.helper === "original" && !$.contains( this.element[ 0 ].ownerDocument, this.element[ 0 ] ) ) {
                return false;
            }

            if ((this.options.revert === "invalid" && !dropped) || (this.options.revert === "valid" && dropped) || this.options.revert === true || ($.isFunction(this.options.revert) && this.options.revert.call(this.element, dropped))) {
                $(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    if (that._trigger("stop", event) !== false) {
                        that._clear();
                    }
                });
            } else {
                if (this._trigger("stop", event) !== false) {
                    this._clear();
                }
            }

            return false;
        },

        _mouseUp: function(event) {
            //Remove frame helpers
            $("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this);
            });

            //If the ddmanager is used for droppables, inform the manager that dragging has stopped (see #5003)
            if ( $.ui.ddmanager ) {
                $.ui.ddmanager.dragStop(this, event);
            }

            return $.ui.mouse.prototype._mouseUp.call(this, event);
        },

        cancel: function() {

            if (this.helper.is(".ui-draggable-dragging")) {
                this._mouseUp({});
            } else {
                this._clear();
            }

            return this;

        },

        _getHandle: function(event) {
            return this.options.handle ?
            !!$( event.target ).closest( this.element.find( this.options.handle ) ).length :
            true;
        },

        _createHelper: function(event) {

            var o = this.options,
            helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event])) : (o.helper === "clone" ? this.element.clone().removeAttr("id") : this.element);

            if (!helper.parents("body").length) {
                helper.appendTo((o.appendTo === "parent" ? this.element[0].parentNode : o.appendTo));
            }

            if (helper[0] !== this.element[0] && !(/(fixed|absolute)/).test(helper.css("position"))) {
                helper.css("position", "absolute");
            }

            return helper;

        },

        _adjustOffsetFromHelper: function(obj) {
            if (typeof obj === "string") {
                obj = obj.split(" ");
            }
            if ($.isArray(obj)) {
                obj = {
                    left: + obj[0],
                    top: + obj[1] || 0
                };
            }
            if ("left" in obj) {
                this.offset.click.left = obj.left + this.margins.left;
            }
            if ("right" in obj) {
                this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
            }
            if ("top" in obj) {
                this.offset.click.top = obj.top + this.margins.top;
            }
            if ("bottom" in obj) {
                this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
            }
        },

        _getParentOffset: function() {

            //Get the offsetParent and cache its position
            var po = this.offsetParent.offset();

            // This is a special case where we need to modify a offset calculated on start, since the following happened:
            // 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
            // 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
            //    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
            if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0])) {
                po.left += this.scrollParent.scrollLeft();
                po.top += this.scrollParent.scrollTop();
            }

            //This needs to be actually done for all browsers, since pageX/pageY includes this information
            //Ugly IE fix
            if ((this.offsetParent[0] === document.body) ||
            (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && $.ui.ie)) {
                po = {
                    top: 0,
                    left: 0 
                };
            }

            return {
                top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };

        },

        _getRelativeOffset: function() {

            if (this.cssPosition === "relative") {
                var p = this.element.position();
                return {
                    top: p.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: p.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            } else {
                return {
                    top: 0,
                    left: 0 
                };
            }

        },

        _cacheMargins: function() {
            this.margins = {
                left: (parseInt(this.element.css("marginLeft"), 10) || 0),
                top: (parseInt(this.element.css("marginTop"), 10) || 0),
                right: (parseInt(this.element.css("marginRight"), 10) || 0),
                bottom: (parseInt(this.element.css("marginBottom"), 10) || 0)
            };
        },

        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },

        _setContainment: function() {

            var over, c, ce,
            o = this.options;

            if ( !o.containment ) {
                this.containment = null;
                return;
            }

            if ( o.containment === "window" ) {
                this.containment = [
                $( window ).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
                $( window ).scrollTop() - this.offset.relative.top - this.offset.parent.top,
                $( window ).scrollLeft() + $( window ).width() - this.helperProportions.width - this.margins.left,
                $( window ).scrollTop() + ( $( window ).height() || document.body.parentNode.scrollHeight ) - this.helperProportions.height - this.margins.top
                ];
                return;
            }

            if ( o.containment === "document") {
                this.containment = [
                0,
                0,
                $( document ).width() - this.helperProportions.width - this.margins.left,
                ( $( document ).height() || document.body.parentNode.scrollHeight ) - this.helperProportions.height - this.margins.top
                ];
                return;
            }

            if ( o.containment.constructor === Array ) {
                this.containment = o.containment;
                return;
            }

            if ( o.containment === "parent" ) {
                o.containment = this.helper[ 0 ].parentNode;
            }

            c = $( o.containment );
            ce = c[ 0 ];

            if ( !ce ) {
                return;
            }

            over = c.css( "overflow" ) !== "hidden";

            this.containment = [
            ( parseInt( c.css( "borderLeftWidth" ), 10 ) || 0 ) + ( parseInt( c.css( "paddingLeft" ), 10 ) || 0 ),
            ( parseInt( c.css( "borderTopWidth" ), 10 ) || 0 ) + ( parseInt( c.css( "paddingTop" ), 10 ) || 0 ) ,
            ( over ? Math.max( ce.scrollWidth, ce.offsetWidth ) : ce.offsetWidth ) - ( parseInt( c.css( "borderRightWidth" ), 10 ) || 0 ) - ( parseInt( c.css( "paddingRight" ), 10 ) || 0 ) - this.helperProportions.width - this.margins.left - this.margins.right,
            ( over ? Math.max( ce.scrollHeight, ce.offsetHeight ) : ce.offsetHeight ) - ( parseInt( c.css( "borderBottomWidth" ), 10 ) || 0 ) - ( parseInt( c.css( "paddingBottom" ), 10 ) || 0 ) - this.helperProportions.height - this.margins.top - this.margins.bottom
            ];
            this.relative_container = c;
        },

        _convertPositionTo: function(d, pos) {

            if (!pos) {
                pos = this.position;
            }

            var mod = d === "absolute" ? 1 : - 1,
            scroll = this.cssPosition === "absolute" && !( this.scrollParent[ 0 ] !== document && $.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) ? this.offsetParent : this.scrollParent;

            //Cache the scroll
            if (!this.offset.scroll) {
                this.offset.scroll = {
                    top : scroll.scrollTop(),
                    left : scroll.scrollLeft()
                };
            }

            return {
                top: (
                pos.top + // The absolute mouse position
                this.offset.relative.top * mod + // Only for relative positioned nodes: Relative offset from element to offset parent
                this.offset.parent.top * mod - // The offsetParent's offset without borders (offset + border)
                ( ( this.cssPosition === "fixed" ? - this.scrollParent.scrollTop() : this.offset.scroll.top ) * mod )
                ),
                left: (
                pos.left + // The absolute mouse position
                this.offset.relative.left * mod + // Only for relative positioned nodes: Relative offset from element to offset parent
                this.offset.parent.left * mod - // The offsetParent's offset without borders (offset + border)
                ( ( this.cssPosition === "fixed" ? - this.scrollParent.scrollLeft() : this.offset.scroll.left ) * mod )
                )
            };

        },

        _generatePosition: function(event) {

            var containment, co, top, left,
            o = this.options,
            scroll = this.cssPosition === "absolute" && !( this.scrollParent[ 0 ] !== document && $.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) ? this.offsetParent : this.scrollParent,
            pageX = event.pageX,
            pageY = event.pageY;

            //Cache the scroll
            if (!this.offset.scroll) {
                this.offset.scroll = {
                    top : scroll.scrollTop(),
                    left : scroll.scrollLeft()
                };
            }

            /*
            		 * - Position constraining -
            		 * Constrain the position to a mix of grid, containment.
            		 */

            // If we are not dragging yet, we won't check for options
            if ( this.originalPosition ) {
                if ( this.containment ) {
                    if ( this.relative_container ) {
                        co = this.relative_container.offset();
                        containment = [
                        this.containment[ 0 ] + co.left,
                        this.containment[ 1 ] + co.top,
                        this.containment[ 2 ] + co.left,
                        this.containment[ 3 ] + co.top
                        ];
                    } else {
                        containment = this.containment;
                    }

                    if (event.pageX - this.offset.click.left < containment[0]) {
                        pageX = containment[0] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top < containment[1]) {
                        pageY = containment[1] + this.offset.click.top;
                    }
                    if (event.pageX - this.offset.click.left > containment[2]) {
                        pageX = containment[2] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top > containment[3]) {
                        pageY = containment[3] + this.offset.click.top;
                    }
                }

                if (o.grid) {
                    //Check for grid elements set to 0 to prevent divide by 0 error causing invalid argument errors in IE (see ticket #6950)
                    top = o.grid[1] ? this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY;
                    pageY = containment ? ((top - this.offset.click.top >= containment[1] || top - this.offset.click.top > containment[3]) ? top : ((top - this.offset.click.top >= containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top;

                    left = o.grid[0] ? this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX;
                    pageX = containment ? ((left - this.offset.click.left >= containment[0] || left - this.offset.click.left > containment[2]) ? left : ((left - this.offset.click.left >= containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left;
                }

            }

            return {
                top: (
                pageY - // The absolute mouse position
                this.offset.click.top - // Click offset (relative to the element)
                this.offset.relative.top - // Only for relative positioned nodes: Relative offset from element to offset parent
                this.offset.parent.top + // The offsetParent's offset without borders (offset + border)
                ( this.cssPosition === "fixed" ? - this.scrollParent.scrollTop() : this.offset.scroll.top )
                ),
                left: (
                pageX - // The absolute mouse position
                this.offset.click.left - // Click offset (relative to the element)
                this.offset.relative.left - // Only for relative positioned nodes: Relative offset from element to offset parent
                this.offset.parent.left + // The offsetParent's offset without borders (offset + border)
                ( this.cssPosition === "fixed" ? - this.scrollParent.scrollLeft() : this.offset.scroll.left )
                )
            };

        },

        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging");
            if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
                this.helper.remove();
            }
            this.helper = null;
            this.cancelHelperRemoval = false;
        },

        // From now on bulk stuff - mainly helpers

        _trigger: function(type, event, ui) {
            ui = ui || this._uiHash();
            $.ui.plugin.call(this, type, [event, ui]);
            //The absolute position has to be recalculated after plugins
            if (type === "drag") {
                this.positionAbs = this._convertPositionTo("absolute");
            }
            return $.Widget.prototype._trigger.call(this, type, event, ui);
        },

        plugins: {},

        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            };
        }

    });

    $.ui.plugin.add("draggable", "connectToSortable", {
        start: function(event, ui) {

            var inst = $(this).data("ui-draggable"), o = inst.options,
            uiSortable = $.extend({}, ui, {
                item: inst.element 
            });
            inst.sortables = [];
            $(o.connectToSortable).each(function() {
                var sortable = $.data(this, "ui-sortable");
                if (sortable && !sortable.options.disabled) {
                    inst.sortables.push({
                        instance: sortable,
                        shouldRevert: sortable.options.revert
                    });
                    sortable.refreshPositions(); // Call the sortable's refreshPositions at drag start to refresh the containerCache since the sortable container cache is used in drag and needs to be up to date (this will ensure it's initialised as well as being kept in step with any changes that might have happened on the page).
                    sortable._trigger("activate", event, uiSortable);
                }
            });

        },
        stop: function(event, ui) {

            //If we are still over the sortable, we fake the stop event of the sortable, but also remove helper
            var inst = $(this).data("ui-draggable"),
            uiSortable = $.extend({}, ui, {
                item: inst.element 
            });

            $.each(inst.sortables, function() {
                if (this.instance.isOver) {

                    this.instance.isOver = 0;

                    inst.cancelHelperRemoval = true; //Don't remove the helper in the draggable instance
                    this.instance.cancelHelperRemoval = false; //Remove it in the sortable instance (so sortable plugins like revert still work)

                    //The sortable revert is supported, and we have to set a temporary dropped variable on the draggable to support revert: "valid/invalid"
                    if (this.shouldRevert) {
                        this.instance.options.revert = this.shouldRevert;
                    }

                    //Trigger the stop of the sortable
                    this.instance._mouseStop(event);

                    this.instance.options.helper = this.instance.options._helper;

                    //If the helper has been the original item, restore properties in the sortable
                    if (inst.options.helper === "original") {
                        this.instance.currentItem.css({
                            top: "auto",
                            left: "auto" 
                        });
                    }

                } else {
                    this.instance.cancelHelperRemoval = false; //Remove the helper in the sortable instance
                    this.instance._trigger("deactivate", event, uiSortable);
                }

            });

        },
        drag: function(event, ui) {

            var inst = $(this).data("ui-draggable"), that = this;

            $.each(inst.sortables, function() {

                var innermostIntersecting = false,
                thisSortable = this;

                //Copy over some variables to allow calling the sortable's native _intersectsWith
                this.instance.positionAbs = inst.positionAbs;
                this.instance.helperProportions = inst.helperProportions;
                this.instance.offset.click = inst.offset.click;

                if (this.instance._intersectsWith(this.instance.containerCache)) {
                    innermostIntersecting = true;
                    $.each(inst.sortables, function () {
                        this.instance.positionAbs = inst.positionAbs;
                        this.instance.helperProportions = inst.helperProportions;
                        this.instance.offset.click = inst.offset.click;
                        if (this !== thisSortable &&
                        this.instance._intersectsWith(this.instance.containerCache) &&
                        $.contains(thisSortable.instance.element[0], this.instance.element[0])
                        ) {
                            innermostIntersecting = false;
                        }
                        return innermostIntersecting;
                    });
                }


                if (innermostIntersecting) {
                    //If it intersects, we use a little isOver variable and set it once, so our move-in stuff gets fired only once
                    if (!this.instance.isOver) {

                        this.instance.isOver = 1;
                        //Now we fake the start of dragging for the sortable instance,
                        //by cloning the list group item, appending it to the sortable and using it as inst.currentItem
                        //We can then fire the start event of the sortable with our passed browser event, and our own helper (so it doesn't create a new one)
                        this.instance.currentItem = $(that).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", true);
                        this.instance.options._helper = this.instance.options.helper; //Store helper option to later restore it
                        this.instance.options.helper = function() {
                            return ui.helper[0];
                        };

                        event.target = this.instance.currentItem[0];
                        this.instance._mouseCapture(event, true);
                        this.instance._mouseStart(event, true, true);

                        //Because the browser event is way off the new appended portlet, we modify a couple of variables to reflect the changes
                        this.instance.offset.click.top = inst.offset.click.top;
                        this.instance.offset.click.left = inst.offset.click.left;
                        this.instance.offset.parent.left -= inst.offset.parent.left - this.instance.offset.parent.left;
                        this.instance.offset.parent.top -= inst.offset.parent.top - this.instance.offset.parent.top;

                        inst._trigger("toSortable", event);
                        inst.dropped = this.instance.element; //draggable revert needs that
                        //hack so receive/update callbacks work (mostly)
                        inst.currentItem = inst.element;
                        this.instance.fromOutside = inst;

                    }

                    //Provided we did all the previous steps, we can fire the drag event of the sortable on every draggable drag, when it intersects with the sortable
                    if (this.instance.currentItem) {
                        this.instance._mouseDrag(event);
                    }

                } else {

                    //If it doesn't intersect with the sortable, and it intersected before,
                    //we fake the drag stop of the sortable, but make sure it doesn't remove the helper by using cancelHelperRemoval
                    if (this.instance.isOver) {

                        this.instance.isOver = 0;
                        this.instance.cancelHelperRemoval = true;

                        //Prevent reverting on this forced stop
                        this.instance.options.revert = false;

                        // The out event needs to be triggered independently
                        this.instance._trigger("out", event, this.instance._uiHash(this.instance));

                        this.instance._mouseStop(event, true);
                        this.instance.options.helper = this.instance.options._helper;

                        //Now we remove our currentItem, the list group clone again, and the placeholder, and animate the helper back to it's original size
                        this.instance.currentItem.remove();
                        if (this.instance.placeholder) {
                            this.instance.placeholder.remove();
                        }

                        inst._trigger("fromSortable", event);
                        inst.dropped = false; //draggable revert needs that
                    }

                }

            });

        }
    });

    $.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var t = $("body"), o = $(this).data("ui-draggable").options;
            if (t.css("cursor")) {
                o._cursor = t.css("cursor");
            }
            t.css("cursor", o.cursor);
        },
        stop: function() {
            var o = $(this).data("ui-draggable").options;
            if (o._cursor) {
                $("body").css("cursor", o._cursor);
            }
        }
    });

    $.ui.plugin.add("draggable", "opacity", {
        start: function(event, ui) {
            var t = $(ui.helper), o = $(this).data("ui-draggable").options;
            if (t.css("opacity")) {
                o._opacity = t.css("opacity");
            }
            t.css("opacity", o.opacity);
        },
        stop: function(event, ui) {
            var o = $(this).data("ui-draggable").options;
            if (o._opacity) {
                $(ui.helper).css("opacity", o._opacity);
            }
        }
    });

    $.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var i = $(this).data("ui-draggable");
            if (i.scrollParent[0] !== document && i.scrollParent[0].tagName !== "HTML") {
                i.overflowOffset = i.scrollParent.offset();
            }
        },
        drag: function( event ) {

            var i = $(this).data("ui-draggable"), o = i.options, scrolled = false;

            if (i.scrollParent[0] !== document && i.scrollParent[0].tagName !== "HTML") {

                if (!o.axis || o.axis !== "x") {
                    if ((i.overflowOffset.top + i.scrollParent[0].offsetHeight) - event.pageY < o.scrollSensitivity) {
                        i.scrollParent[0].scrollTop = scrolled = i.scrollParent[0].scrollTop + o.scrollSpeed;
                    } else if (event.pageY - i.overflowOffset.top < o.scrollSensitivity) {
                        i.scrollParent[0].scrollTop = scrolled = i.scrollParent[0].scrollTop - o.scrollSpeed;
                    }
                }

                if (!o.axis || o.axis !== "y") {
                    if ((i.overflowOffset.left + i.scrollParent[0].offsetWidth) - event.pageX < o.scrollSensitivity) {
                        i.scrollParent[0].scrollLeft = scrolled = i.scrollParent[0].scrollLeft + o.scrollSpeed;
                    } else if (event.pageX - i.overflowOffset.left < o.scrollSensitivity) {
                        i.scrollParent[0].scrollLeft = scrolled = i.scrollParent[0].scrollLeft - o.scrollSpeed;
                    }
                }

            } else {

                if (!o.axis || o.axis !== "x") {
                    if (event.pageY - $(document).scrollTop() < o.scrollSensitivity) {
                        scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
                    } else if ($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity) {
                        scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);
                    }
                }

                if (!o.axis || o.axis !== "y") {
                    if (event.pageX - $(document).scrollLeft() < o.scrollSensitivity) {
                        scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);
                    } else if ($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity) {
                        scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed);
                    }
                }

            }

            if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
                $.ui.ddmanager.prepareOffsets(i, event);
            }

        }
    });

    $.ui.plugin.add("draggable", "snap", {
        start: function() {

            var i = $(this).data("ui-draggable"),
            o = i.options;

            i.snapElements = [];

            $(o.snap.constructor !== String ? ( o.snap.items || ":data(ui-draggable)" ) : o.snap).each(function() {
                var $t = $(this),
                $o = $t.offset();
                if (this !== i.element[0]) {
                    i.snapElements.push({
                        item: this,
                        width: $t.outerWidth(),
                        height: $t.outerHeight(),
                        top: $o.top,
                        left: $o.left
                    });
                }
            });

        },
        drag: function(event, ui) {

            var ts, bs, ls, rs, l, r, t, b, i, first,
            inst = $(this).data("ui-draggable"),
            o = inst.options,
            d = o.snapTolerance,
            x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width,
            y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;

            for (i = inst.snapElements.length - 1; i >= 0; i--) {

                l = inst.snapElements[i].left;
                r = l + inst.snapElements[i].width;
                t = inst.snapElements[i].top;
                b = t + inst.snapElements[i].height;

                if ( x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d || !$.contains( inst.snapElements[ i ].item.ownerDocument, inst.snapElements[ i ].item ) ) {
                    if (inst.snapElements[i].snapping) {
                        (inst.options.snap.release && inst.options.snap.release.call(inst.element, event, $.extend(inst._uiHash(), {
                            snapItem: inst.snapElements[i].item 
                        })));
                    }
                    inst.snapElements[i].snapping = false;
                    continue;
                }

                if (o.snapMode !== "inner") {
                    ts = Math.abs(t - y2) <= d;
                    bs = Math.abs(b - y1) <= d;
                    ls = Math.abs(l - x2) <= d;
                    rs = Math.abs(r - x1) <= d;
                    if (ts) {
                        ui.position.top = inst._convertPositionTo("relative", {
                            top: t - inst.helperProportions.height,
                            left: 0 
                        }).top - inst.margins.top;
                    }
                    if (bs) {
                        ui.position.top = inst._convertPositionTo("relative", {
                            top: b,
                            left: 0 
                        }).top - inst.margins.top;
                    }
                    if (ls) {
                        ui.position.left = inst._convertPositionTo("relative", {
                            top: 0,
                            left: l - inst.helperProportions.width 
                        }).left - inst.margins.left;
                    }
                    if (rs) {
                        ui.position.left = inst._convertPositionTo("relative", {
                            top: 0,
                            left: r 
                        }).left - inst.margins.left;
                    }
                }

                first = (ts || bs || ls || rs);

                if (o.snapMode !== "outer") {
                    ts = Math.abs(t - y1) <= d;
                    bs = Math.abs(b - y2) <= d;
                    ls = Math.abs(l - x1) <= d;
                    rs = Math.abs(r - x2) <= d;
                    if (ts) {
                        ui.position.top = inst._convertPositionTo("relative", {
                            top: t,
                            left: 0 
                        }).top - inst.margins.top;
                    }
                    if (bs) {
                        ui.position.top = inst._convertPositionTo("relative", {
                            top: b - inst.helperProportions.height,
                            left: 0 
                        }).top - inst.margins.top;
                    }
                    if (ls) {
                        ui.position.left = inst._convertPositionTo("relative", {
                            top: 0,
                            left: l 
                        }).left - inst.margins.left;
                    }
                    if (rs) {
                        ui.position.left = inst._convertPositionTo("relative", {
                            top: 0,
                            left: r - inst.helperProportions.width 
                        }).left - inst.margins.left;
                    }
                }

                if (!inst.snapElements[i].snapping && (ts || bs || ls || rs || first)) {
                    (inst.options.snap.snap && inst.options.snap.snap.call(inst.element, event, $.extend(inst._uiHash(), {
                        snapItem: inst.snapElements[i].item 
                    })));
                }
                inst.snapElements[i].snapping = (ts || bs || ls || rs || first);

            }

        }
    });

    $.ui.plugin.add("draggable", "stack", {
        start: function() {
            var min,
            o = this.data("ui-draggable").options,
            group = $.makeArray($(o.stack)).sort(function(a, b) {
                return (parseInt($(a).css("zIndex"), 10) || 0) - (parseInt($(b).css("zIndex"), 10) || 0);
            });

            if (!group.length) {
                return;
            }

            min = parseInt($(group[0]).css("zIndex"), 10) || 0;
            $(group).each(function(i) {
                $(this).css("zIndex", min + i);
            });
            this.css("zIndex", (min + group.length));
        }
    });

    $.ui.plugin.add("draggable", "zIndex", {
        start: function(event, ui) {
            var t = $(ui.helper), o = $(this).data("ui-draggable").options;
            if (t.css("zIndex")) {
                o._zIndex = t.css("zIndex");
            }
            t.css("zIndex", o.zIndex);
        },
        stop: function(event, ui) {
            var o = $(this).data("ui-draggable").options;
            if (o._zIndex) {
                $(ui.helper).css("zIndex", o._zIndex);
            }
        }
    });

})(jQuery);

(function( $, undefined ) {

    function isOverAxis( x, reference, size ) {
        return ( x > reference ) && ( x < ( reference + size ) );
    }

    $.widget("ui.droppable", {
        version: "1.10.3",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: false,
            addClasses: true,
            greedy: false,
            hoverClass: false,
            scope: "default",
            tolerance: "intersect",

            // callbacks
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {

            var o = this.options,
            accept = o.accept;

            this.isover = false;
            this.isout = true;

            this.accept = $.isFunction(accept) ? accept : function(d) {
                return d.is(accept);
            };

            //Store the droppable's proportions
            this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight 
            };

            // Add the reference and positions to the manager
            $.ui.ddmanager.droppables[o.scope] = $.ui.ddmanager.droppables[o.scope] || [];
            $.ui.ddmanager.droppables[o.scope].push(this);

            (o.addClasses && this.element.addClass("ui-droppable"));

        },

        _destroy: function() {
            var i = 0,
            drop = $.ui.ddmanager.droppables[this.options.scope];

            for ( ; i < drop.length; i++ ) {
                if ( drop[i] === this ) {
                    drop.splice(i, 1);
                }
            }

            this.element.removeClass("ui-droppable ui-droppable-disabled");
        },

        _setOption: function(key, value) {

            if (key === "accept") {
                this.accept = $.isFunction(value) ? value : function(d) {
                    return d.is(value);
                };
            }
            $.Widget.prototype._setOption.apply(this, arguments);
        },

        _activate: function(event) {
            var draggable = $.ui.ddmanager.current;
            if (this.options.activeClass) {
                this.element.addClass(this.options.activeClass);
            }
            if (draggable) {
                this._trigger("activate", event, this.ui(draggable));
            }
        },

        _deactivate: function(event) {
            var draggable = $.ui.ddmanager.current;
            if (this.options.activeClass) {
                this.element.removeClass(this.options.activeClass);
            }
            if (draggable) {
                this._trigger("deactivate", event, this.ui(draggable));
            }
        },

        _over: function(event) {

            var draggable = $.ui.ddmanager.current;

            // Bail if draggable and droppable are same element
            if (!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) {
                return;
            }

            if (this.accept.call(this.element[0], (draggable.currentItem || draggable.element))) {
                if (this.options.hoverClass) {
                    this.element.addClass(this.options.hoverClass);
                }
                this._trigger("over", event, this.ui(draggable));
            }

        },

        _out: function(event) {

            var draggable = $.ui.ddmanager.current;

            // Bail if draggable and droppable are same element
            if (!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) {
                return;
            }

            if (this.accept.call(this.element[0], (draggable.currentItem || draggable.element))) {
                if (this.options.hoverClass) {
                    this.element.removeClass(this.options.hoverClass);
                }
                this._trigger("out", event, this.ui(draggable));
            }

        },

        _drop: function(event, custom) {

            var draggable = custom || $.ui.ddmanager.current,
            childrenIntersection = false;

            // Bail if draggable and droppable are same element
            if (!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) {
                return false;
            }

            this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var inst = $.data(this, "ui-droppable");
                if (
                inst.options.greedy &&
                !inst.options.disabled &&
                inst.options.scope === draggable.options.scope &&
                inst.accept.call(inst.element[0], (draggable.currentItem || draggable.element)) &&
                $.ui.intersect(draggable, $.extend(inst, {
                    offset: inst.element.offset() 
                }), inst.options.tolerance)
                ) {
                    childrenIntersection = true;
                    return false;
                }
            });
            if (childrenIntersection) {
                return false;
            }

            if (this.accept.call(this.element[0], (draggable.currentItem || draggable.element))) {
                if (this.options.activeClass) {
                    this.element.removeClass(this.options.activeClass);
                }
                if (this.options.hoverClass) {
                    this.element.removeClass(this.options.hoverClass);
                }
                this._trigger("drop", event, this.ui(draggable));
                return this.element;
            }

            return false;

        },

        ui: function(c) {
            return {
                draggable: (c.currentItem || c.element),
                helper: c.helper,
                position: c.position,
                offset: c.positionAbs
            };
        }

    });

    $.ui.intersect = function(draggable, droppable, toleranceMode) {

        if (!droppable.offset) {
            return false;
        }

        var draggableLeft, draggableTop,
        x1 = (draggable.positionAbs || draggable.position.absolute).left, x2 = x1 + draggable.helperProportions.width,
        y1 = (draggable.positionAbs || draggable.position.absolute).top, y2 = y1 + draggable.helperProportions.height,
        l = droppable.offset.left, r = l + droppable.proportions.width,
        t = droppable.offset.top, b = t + droppable.proportions.height;

        switch (toleranceMode) {
        case "fit":
            return (l <= x1 && x2 <= r && t <= y1 && y2 <= b);
        case "intersect":
            return (l < x1 + (draggable.helperProportions.width / 2) && // Right Half
            x2 - (draggable.helperProportions.width / 2) < r && // Left Half
            t < y1 + (draggable.helperProportions.height / 2) && // Bottom Half
            y2 - (draggable.helperProportions.height / 2) < b ); // Top Half
        case "pointer":
            draggableLeft = ((draggable.positionAbs || draggable.position.absolute).left + (draggable.clickOffset || draggable.offset.click).left);
            draggableTop = ((draggable.positionAbs || draggable.position.absolute).top + (draggable.clickOffset || draggable.offset.click).top);
            return isOverAxis( draggableTop, t, droppable.proportions.height ) && isOverAxis( draggableLeft, l, droppable.proportions.width );
        case "touch":
            return (
            (y1 >= t && y1 <= b) || // Top edge touching
            (y2 >= t && y2 <= b) || // Bottom edge touching
            (y1 < t && y2 > b) // Surrounded vertically
            ) && (
            (x1 >= l && x1 <= r) || // Left edge touching
            (x2 >= l && x2 <= r) || // Right edge touching
            (x1 < l && x2 > r) // Surrounded horizontally
            );
        default:
            return false;
        }

    };

    /*
    	This manager tracks offsets of draggables and droppables
    */
    $.ui.ddmanager = {
        current: null,
        droppables: {
            "default": [] 
        },
        prepareOffsets: function(t, event) {

            var i, j,
            m = $.ui.ddmanager.droppables[t.options.scope] || [],
            type = event ? event.type : null, // workaround for #2317
            list = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();

            droppablesLoop: for (i = 0; i < m.length; i++) {

                //No disabled and non-accepted
                if (m[i].options.disabled || (t && !m[i].accept.call(m[i].element[0], (t.currentItem || t.element)))) {
                    continue;
                }

                // Filter out elements in the current dragged item
                for (j = 0; j < list.length; j++) {
                    if (list[j] === m[i].element[0]) {
                        m[i].proportions.height = 0;
                        continue droppablesLoop;
                    }
                }

                m[i].visible = m[i].element.css("display") !== "none";
                if (!m[i].visible) {
                    continue;
                }

                //Activate the droppable if used directly from draggables
                if (type === "mousedown") {
                    m[i]._activate.call(m[i], event);
                }

                m[i].offset = m[i].element.offset();
                m[i].proportions = {
                    width: m[i].element[0].offsetWidth,
                    height: m[i].element[0].offsetHeight 
                };

            }

        },
        drop: function(draggable, event) {

            var dropped = false;
            // Create a copy of the droppables in case the list changes during the drop (#9116)
            $.each(($.ui.ddmanager.droppables[draggable.options.scope] || []).slice(), function() {

                if (!this.options) {
                    return;
                }
                if (!this.options.disabled && this.visible && $.ui.intersect(draggable, this, this.options.tolerance)) {
                    dropped = this._drop.call(this, event) || dropped;
                }

                if (!this.options.disabled && this.visible && this.accept.call(this.element[0], (draggable.currentItem || draggable.element))) {
                    this.isout = true;
                    this.isover = false;
                    this._deactivate.call(this, event);
                }

            });
            return dropped;

        },
        dragStart: function( draggable, event ) {
            //Listen for scrolling so that if the dragging causes scrolling the position of the droppables can be recalculated (see #5003)
            draggable.element.parentsUntil( "body" ).bind( "scroll.droppable", function() {
                if ( !draggable.options.refreshPositions ) {
                    $.ui.ddmanager.prepareOffsets( draggable, event );
                }
            });
        },
        drag: function(draggable, event) {

            //If you have a highly dynamic page, you might try this option. It renders positions every time you move the mouse.
            if (draggable.options.refreshPositions) {
                $.ui.ddmanager.prepareOffsets(draggable, event);
            }

            //Run through all droppables and check their positions based on specific tolerance options
            $.each($.ui.ddmanager.droppables[draggable.options.scope] || [], function() {

                if (this.options.disabled || this.greedyChild || !this.visible) {
                    return;
                }

                var parentInstance, scope, parent,
                intersects = $.ui.intersect(draggable, this, this.options.tolerance),
                c = !intersects && this.isover ? "isout" : (intersects && !this.isover ? "isover" : null);
                if (!c) {
                    return;
                }

                if (this.options.greedy) {
                    // find droppable parents with same scope
                    scope = this.options.scope;
                    parent = this.element.parents(":data(ui-droppable)").filter(function () {
                        return $.data(this, "ui-droppable").options.scope === scope;
                    });

                    if (parent.length) {
                        parentInstance = $.data(parent[0], "ui-droppable");
                        parentInstance.greedyChild = (c === "isover");
                    }
                }

                // we just moved into a greedy child
                if (parentInstance && c === "isover") {
                    parentInstance.isover = false;
                    parentInstance.isout = true;
                    parentInstance._out.call(parentInstance, event);
                }

                this[c] = true;
                this[c === "isout" ? "isover" : "isout"] = false;
                this[c === "isover" ? "_over" : "_out"].call(this, event);

                // we just moved out of a greedy child
                if (parentInstance && c === "isout") {
                    parentInstance.isout = false;
                    parentInstance.isover = true;
                    parentInstance._over.call(parentInstance, event);
                }
            });

        },
        dragStop: function( draggable, event ) {
            draggable.element.parentsUntil( "body" ).unbind( "scroll.droppable" );
            //Call prepareOffsets one final time since IE does not fire return scroll events when overflow was caused by drag (see #5003)
            if ( !draggable.options.refreshPositions ) {
                $.ui.ddmanager.prepareOffsets( draggable, event );
            }
        }
    };

})(jQuery);

(function( $, undefined ) {

    function num(v) {
        return parseInt(v, 10) || 0;
    }

    function isNumber(value) {
        return !isNaN(parseInt(value, 10));
    }

    $.widget("ui.resizable", $.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: false,
            animate: false,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: false,
            autoHide: false,
            containment: false,
            ghost: false,
            grid: false,
            handles: "e,s,se",
            helper: false,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            // See #7960
            zIndex: 90,

            // callbacks
            resize: null,
            start: null,
            stop: null
        },
        _create: function() {

            var n, i, handle, axis, hname,
            that = this,
            o = this.options;
            this.element.addClass("ui-resizable");

            $.extend(this, {
                _aspectRatio: !!(o.aspectRatio),
                aspectRatio: o.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: o.helper || o.ghost || o.animate ? o.helper || "ui-resizable-helper" : null
            });

            //Wrap the element if it cannot hold child nodes
            if (this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {

                //Create a wrapper element and set the wrapper to the new current internal element
                this.element.wrap(
                $("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })
                );

                //Overwrite the original this.element
                this.element = this.element.parent().data(
                "ui-resizable", this.element.data("ui-resizable")
                );

                this.elementIsWrapper = true;

                //Move margins to the wrapper
                this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom") 
                });
                this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                });

                //Prevent Safari textarea resize
                this.originalResizeStyle = this.originalElement.css("resize");
                this.originalElement.css("resize", "none");

                //Push the actual element to our proportionallyResize internal array
                this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block" 
                }));

                // avoid IE jump (hard set the margin)
                this.originalElement.css({
                    margin: this.originalElement.css("margin") 
                });

                // fix handlers offset
                this._proportionallyResize();

            }

            this.handles = o.handles || (!$(".ui-resizable-handle", this.element).length ? "e,s,se" : {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw" 
            });
            if (this.handles.constructor === String) {

                if ( this.handles === "all") {
                    this.handles = "n,e,s,w,se,sw,ne,nw";
                }

                n = this.handles.split(",");
                this.handles = {};

                for (i = 0; i < n.length; i++) {

                    handle = $.trim(n[i]);
                    hname = "ui-resizable-" + handle;
                    axis = $("<div class='ui-resizable-handle " + hname + "'></div>");

                    // Apply zIndex to all handles - see #7960
                    axis.css({
                        zIndex: o.zIndex 
                    });

                    //TODO : What's going on here?
                    if ("se" === handle) {
                        axis.addClass("ui-icon ui-icon-gripsmall-diagonal-se");
                    }

                    //Insert into internal handles object and append to element
                    this.handles[handle] = ".ui-resizable-" + handle;
                    this.element.append(axis);
                }

            }

            this._renderAxis = function(target) {

                var i, axis, padPos, padWrapper;

                target = target || this.element;

                for (i in this.handles) {

                    if (this.handles[i].constructor === String) {
                        this.handles[i] = $(this.handles[i], this.element).show();
                    }

                    //Apply pad to wrapper element, needed to fix axis position (textarea, inputs, scrolls)
                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {

                        axis = $(this.handles[i], this.element);

                        //Checking the correct pad and border
                        padWrapper = /sw|ne|nw|se|n|s/.test(i) ? axis.outerHeight() : axis.outerWidth();

                        //The padding type i have to apply...
                        padPos = [ "padding",
                        /ne|nw|n/.test(i) ? "Top" :
                        /se|sw|s/.test(i) ? "Bottom" :
                        /^e$/.test(i) ? "Right" : "Left" ].join("");

                        target.css(padPos, padWrapper);

                        this._proportionallyResize();

                    }

                    //TODO: What's that good for? There's not anything to be executed left
                    if (!$(this.handles[i]).length) {
                        continue;
                    }
                }
            };

            //TODO: make renderAxis a prototype function
            this._renderAxis(this.element);

            this._handles = $(".ui-resizable-handle", this.element)
            .disableSelection();

            //Matching axis name
            this._handles.mouseover(function() {
                if (!that.resizing) {
                    if (this.className) {
                        axis = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    }
                    //Axis, default = se
                    that.axis = axis && axis[1] ? axis[1] : "se";
                }
            });

            //If we want to auto hide the elements
            if (o.autoHide) {
                this._handles.hide();
                $(this.element)
                .addClass("ui-resizable-autohide")
                .mouseenter(function() {
                    if (o.disabled) {
                        return;
                    }
                    $(this).removeClass("ui-resizable-autohide");
                    that._handles.show();
                })
                .mouseleave(function() {
                    if (o.disabled) {
                        return;
                    }
                    if (!that.resizing) {
                        $(this).addClass("ui-resizable-autohide");
                        that._handles.hide();
                    }
                });
            }

            //Initialize the mouse interaction
            this._mouseInit();

        },

        _destroy: function() {

            this._mouseDestroy();

            var wrapper,
            _destroy = function(exp) {
                $(exp).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing")
                .removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove();
            };

            //TODO: Unwrap at same DOM position
            if (this.elementIsWrapper) {
                _destroy(this.element);
                wrapper = this.element;
                this.originalElement.css({
                    position: wrapper.css("position"),
                    width: wrapper.outerWidth(),
                    height: wrapper.outerHeight(),
                    top: wrapper.css("top"),
                    left: wrapper.css("left")
                }).insertAfter( wrapper );
                wrapper.remove();
            }

            this.originalElement.css("resize", this.originalResizeStyle);
            _destroy(this.originalElement);

            return this;
        },

        _mouseCapture: function(event) {
            var i, handle,
            capture = false;

            for (i in this.handles) {
                handle = $(this.handles[i])[0];
                if (handle === event.target || $.contains(handle, event.target)) {
                    capture = true;
                }
            }

            return !this.options.disabled && capture;
        },

        _mouseStart: function(event) {

            var curleft, curtop, cursor,
            o = this.options,
            iniPos = this.element.position(),
            el = this.element;

            this.resizing = true;

            // bugfix for http://dev.jquery.com/ticket/1749
            if ( (/absolute/).test( el.css("position") ) ) {
                el.css({
                    position: "absolute",
                    top: el.css("top"),
                    left: el.css("left") 
                });
            } else if (el.is(".ui-draggable")) {
                el.css({
                    position: "absolute",
                    top: iniPos.top,
                    left: iniPos.left 
                });
            }

            this._renderProxy();

            curleft = num(this.helper.css("left"));
            curtop = num(this.helper.css("top"));

            if (o.containment) {
                curleft += $(o.containment).scrollLeft() || 0;
                curtop += $(o.containment).scrollTop() || 0;
            }

            //Store needed variables
            this.offset = this.helper.offset();
            this.position = {
                left: curleft,
                top: curtop 
            };
            this.size = this._helper ? {
                width: el.outerWidth(),
                height: el.outerHeight() 
            } : {
                width: el.width(),
                height: el.height() 
            };
            this.originalSize = this._helper ? {
                width: el.outerWidth(),
                height: el.outerHeight() 
            } : {
                width: el.width(),
                height: el.height() 
            };
            this.originalPosition = {
                left: curleft,
                top: curtop 
            };
            this.sizeDiff = {
                width: el.outerWidth() - el.width(),
                height: el.outerHeight() - el.height() 
            };
            this.originalMousePosition = {
                left: event.pageX,
                top: event.pageY 
            };

            //Aspect Ratio
            this.aspectRatio = (typeof o.aspectRatio === "number") ? o.aspectRatio : ((this.originalSize.width / this.originalSize.height) || 1);

            cursor = $(".ui-resizable-" + this.axis).css("cursor");
            $("body").css("cursor", cursor === "auto" ? this.axis + "-resize" : cursor);

            el.addClass("ui-resizable-resizing");
            this._propagate("start", event);
            return true;
        },

        _mouseDrag: function(event) {

            //Increase performance, avoid regex
            var data,
            el = this.helper, props = {},
            smp = this.originalMousePosition,
            a = this.axis,
            prevTop = this.position.top,
            prevLeft = this.position.left,
            prevWidth = this.size.width,
            prevHeight = this.size.height,
            dx = (event.pageX - smp.left) || 0,
            dy = (event.pageY - smp.top) || 0,
            trigger = this._change[a];

            if (!trigger) {
                return false;
            }

            // Calculate the attrs that will be change
            data = trigger.apply(this, [event, dx, dy]);

            // Put this in the mouseDrag handler since the user can start pressing shift while resizing
            this._updateVirtualBoundaries(event.shiftKey);
            if (this._aspectRatio || event.shiftKey) {
                data = this._updateRatio(data, event);
            }

            data = this._respectSize(data, event);

            this._updateCache(data);

            // plugins callbacks need to be called first
            this._propagate("resize", event);

            if (this.position.top !== prevTop) {
                props.top = this.position.top + "px";
            }
            if (this.position.left !== prevLeft) {
                props.left = this.position.left + "px";
            }
            if (this.size.width !== prevWidth) {
                props.width = this.size.width + "px";
            }
            if (this.size.height !== prevHeight) {
                props.height = this.size.height + "px";
            }
            el.css(props);

            if (!this._helper && this._proportionallyResizeElements.length) {
                this._proportionallyResize();
            }

            // Call the user callback if the element was resized
            if ( ! $.isEmptyObject(props) ) {
                this._trigger("resize", event, this.ui());
            }

            return false;
        },

        _mouseStop: function(event) {

            this.resizing = false;
            var pr, ista, soffseth, soffsetw, s, left, top,
            o = this.options, that = this;

            if (this._helper) {

                pr = this._proportionallyResizeElements;
                ista = pr.length && (/textarea/i).test(pr[0].nodeName);
                soffseth = ista && $.ui.hasScroll(pr[0], "left") /* TODO - jump height */
                ? 0 : that.sizeDiff.height;
                soffsetw = ista ? 0 : that.sizeDiff.width;

                s = {
                    width: (that.helper.width() - soffsetw),
                    height: (that.helper.height() - soffseth) 
                };
                left = (parseInt(that.element.css("left"), 10) + (that.position.left - that.originalPosition.left)) || null;
                top = (parseInt(that.element.css("top"), 10) + (that.position.top - that.originalPosition.top)) || null;

                if (!o.animate) {
                    this.element.css($.extend(s, {
                        top: top,
                        left: left 
                    }));
                }

                that.helper.height(that.size.height);
                that.helper.width(that.size.width);

                if (this._helper && !o.animate) {
                    this._proportionallyResize();
                }
            }

            $("body").css("cursor", "auto");

            this.element.removeClass("ui-resizable-resizing");

            this._propagate("stop", event);

            if (this._helper) {
                this.helper.remove();
            }

            return false;

        },

        _updateVirtualBoundaries: function(forceAspectRatio) {
            var pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b,
            o = this.options;

            b = {
                minWidth: isNumber(o.minWidth) ? o.minWidth : 0,
                maxWidth: isNumber(o.maxWidth) ? o.maxWidth : Infinity,
                minHeight: isNumber(o.minHeight) ? o.minHeight : 0,
                maxHeight: isNumber(o.maxHeight) ? o.maxHeight : Infinity
            };

            if (this._aspectRatio || forceAspectRatio) {
                // We want to create an enclosing box whose aspect ration is the requested one
                // First, compute the "projected" size for each dimension based on the aspect ratio and other dimension
                pMinWidth = b.minHeight * this.aspectRatio;
                pMinHeight = b.minWidth / this.aspectRatio;
                pMaxWidth = b.maxHeight * this.aspectRatio;
                pMaxHeight = b.maxWidth / this.aspectRatio;

                if (pMinWidth > b.minWidth) {
                    b.minWidth = pMinWidth;
                }
                if (pMinHeight > b.minHeight) {
                    b.minHeight = pMinHeight;
                }
                if (pMaxWidth < b.maxWidth) {
                    b.maxWidth = pMaxWidth;
                }
                if (pMaxHeight < b.maxHeight) {
                    b.maxHeight = pMaxHeight;
                }
            }
            this._vBoundaries = b;
        },

        _updateCache: function(data) {
            this.offset = this.helper.offset();
            if (isNumber(data.left)) {
                this.position.left = data.left;
            }
            if (isNumber(data.top)) {
                this.position.top = data.top;
            }
            if (isNumber(data.height)) {
                this.size.height = data.height;
            }
            if (isNumber(data.width)) {
                this.size.width = data.width;
            }
        },

        _updateRatio: function( data ) {

            var cpos = this.position,
            csize = this.size,
            a = this.axis;

            if (isNumber(data.height)) {
                data.width = (data.height * this.aspectRatio);
            } else if (isNumber(data.width)) {
                data.height = (data.width / this.aspectRatio);
            }

            if (a === "sw") {
                data.left = cpos.left + (csize.width - data.width);
                data.top = null;
            }
            if (a === "nw") {
                data.top = cpos.top + (csize.height - data.height);
                data.left = cpos.left + (csize.width - data.width);
            }

            return data;
        },

        _respectSize: function( data ) {

            var o = this._vBoundaries,
            a = this.axis,
            ismaxw = isNumber(data.width) && o.maxWidth && (o.maxWidth < data.width), ismaxh = isNumber(data.height) && o.maxHeight && (o.maxHeight < data.height),
            isminw = isNumber(data.width) && o.minWidth && (o.minWidth > data.width), isminh = isNumber(data.height) && o.minHeight && (o.minHeight > data.height),
            dw = this.originalPosition.left + this.originalSize.width,
            dh = this.position.top + this.size.height,
            cw = /sw|nw|w/.test(a), ch = /nw|ne|n/.test(a);
            if (isminw) {
                data.width = o.minWidth;
            }
            if (isminh) {
                data.height = o.minHeight;
            }
            if (ismaxw) {
                data.width = o.maxWidth;
            }
            if (ismaxh) {
                data.height = o.maxHeight;
            }

            if (isminw && cw) {
                data.left = dw - o.minWidth;
            }
            if (ismaxw && cw) {
                data.left = dw - o.maxWidth;
            }
            if (isminh && ch) {
                data.top = dh - o.minHeight;
            }
            if (ismaxh && ch) {
                data.top = dh - o.maxHeight;
            }

            // fixing jump error on top/left - bug #2330
            if (!data.width && !data.height && !data.left && data.top) {
                data.top = null;
            } else if (!data.width && !data.height && !data.top && data.left) {
                data.left = null;
            }

            return data;
        },

        _proportionallyResize: function() {

            if (!this._proportionallyResizeElements.length) {
                return;
            }

            var i, j, borders, paddings, prel,
            element = this.helper || this.element;

            for ( i = 0; i < this._proportionallyResizeElements.length; i++) {

                prel = this._proportionallyResizeElements[i];

                if (!this.borderDif) {
                    this.borderDif = [];
                    borders = [prel.css("borderTopWidth"), prel.css("borderRightWidth"), prel.css("borderBottomWidth"), prel.css("borderLeftWidth")];
                    paddings = [prel.css("paddingTop"), prel.css("paddingRight"), prel.css("paddingBottom"), prel.css("paddingLeft")];

                    for ( j = 0; j < borders.length; j++ ) {
                        this.borderDif[ j ] = ( parseInt( borders[ j ], 10 ) || 0 ) + ( parseInt( paddings[ j ], 10 ) || 0 );
                    }
                }

                prel.css({
                    height: (element.height() - this.borderDif[0] - this.borderDif[2]) || 0,
                    width: (element.width() - this.borderDif[1] - this.borderDif[3]) || 0
                });

            }

        },

        _renderProxy: function() {

            var el = this.element, o = this.options;
            this.elementOffset = el.offset();

            if (this._helper) {

                this.helper = this.helper || $("<div style='overflow:hidden;'></div>");

                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++o.zIndex //TODO: Don't modify option
                });

                this.helper
                .appendTo("body")
                .disableSelection();

            } else {
                this.helper = this.element;
            }

        },

        _change: {
            e: function(event, dx) {
                return {
                    width: this.originalSize.width + dx 
                };
            },
            w: function(event, dx) {
                var cs = this.originalSize, sp = this.originalPosition;
                return {
                    left: sp.left + dx,
                    width: cs.width - dx 
                };
            },
            n: function(event, dx, dy) {
                var cs = this.originalSize, sp = this.originalPosition;
                return {
                    top: sp.top + dy,
                    height: cs.height - dy 
                };
            },
            s: function(event, dx, dy) {
                return {
                    height: this.originalSize.height + dy 
                };
            },
            se: function(event, dx, dy) {
                return $.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [event, dx, dy]));
            },
            sw: function(event, dx, dy) {
                return $.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [event, dx, dy]));
            },
            ne: function(event, dx, dy) {
                return $.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [event, dx, dy]));
            },
            nw: function(event, dx, dy) {
                return $.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [event, dx, dy]));
            }
        },

        _propagate: function(n, event) {
            $.ui.plugin.call(this, n, [event, this.ui()]);
            (n !== "resize" && this._trigger(n, event, this.ui()));
        },

        plugins: {},

        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            };
        }

    });

    /*
     * Resizable Extensions
     */

    $.ui.plugin.add("resizable", "animate", {

        stop: function( event ) {
            var that = $(this).data("ui-resizable"),
            o = that.options,
            pr = that._proportionallyResizeElements,
            ista = pr.length && (/textarea/i).test(pr[0].nodeName),
            soffseth = ista && $.ui.hasScroll(pr[0], "left") /* TODO - jump height */
            ? 0 : that.sizeDiff.height,
            soffsetw = ista ? 0 : that.sizeDiff.width,
            style = {
                width: (that.size.width - soffsetw),
                height: (that.size.height - soffseth) 
            },
            left = (parseInt(that.element.css("left"), 10) + (that.position.left - that.originalPosition.left)) || null,
            top = (parseInt(that.element.css("top"), 10) + (that.position.top - that.originalPosition.top)) || null;

            that.element.animate(
            $.extend(style, top && left ? {
                top: top,
                left: left 
            } : {}), {
                duration: o.animateDuration,
                easing: o.animateEasing,
                step: function() {

                    var data = {
                        width: parseInt(that.element.css("width"), 10),
                        height: parseInt(that.element.css("height"), 10),
                        top: parseInt(that.element.css("top"), 10),
                        left: parseInt(that.element.css("left"), 10)
                    };

                    if (pr && pr.length) {
                        $(pr[0]).css({
                            width: data.width,
                            height: data.height 
                        });
                    }

                    // propagating resize, and updating values for each animation step
                    that._updateCache(data);
                    that._propagate("resize", event);

                }
            });
        }

    });

    $.ui.plugin.add("resizable", "containment", {

        start: function() {
            var element, p, co, ch, cw, width, height,
            that = $(this).data("ui-resizable"),
            o = that.options,
            el = that.element,
            oc = o.containment,
            ce = (oc instanceof $) ? oc.get(0) : (/parent/.test(oc)) ? el.parent().get(0) : oc;

            if (!ce) {
                return;
            }

            that.containerElement = $(ce);

            if (/document/.test(oc) || oc === document) {
                that.containerOffset = {
                    left: 0,
                    top: 0 
                };
                that.containerPosition = {
                    left: 0,
                    top: 0 
                };

                that.parentData = {
                    element: $(document),
                    left: 0,
                    top: 0,
                    width: $(document).width(),
                    height: $(document).height() || document.body.parentNode.scrollHeight
                };
            }

            // i'm a node, so compute top, left, right, bottom
            else {
                element = $(ce);
                p = [];
                $([ "Top", "Right", "Left", "Bottom" ]).each(function(i, name) {
                    p[i] = num(element.css("padding" + name));
                });

                that.containerOffset = element.offset();
                that.containerPosition = element.position();
                that.containerSize = {
                    height: (element.innerHeight() - p[3]),
                    width: (element.innerWidth() - p[1]) 
                };

                co = that.containerOffset;
                ch = that.containerSize.height;
                cw = that.containerSize.width;
                width = ($.ui.hasScroll(ce, "left") ? ce.scrollWidth : cw );
                height = ($.ui.hasScroll(ce) ? ce.scrollHeight : ch);

                that.parentData = {
                    element: ce,
                    left: co.left,
                    top: co.top,
                    width: width,
                    height: height
                };
            }
        },

        resize: function( event ) {
            var woset, hoset, isParent, isOffsetRelative,
            that = $(this).data("ui-resizable"),
            o = that.options,
            co = that.containerOffset, cp = that.position,
            pRatio = that._aspectRatio || event.shiftKey,
            cop = {
                top: 0,
                left: 0 
            }, ce = that.containerElement;

            if (ce[0] !== document && (/static/).test(ce.css("position"))) {
                cop = co;
            }

            if (cp.left < (that._helper ? co.left : 0)) {
                that.size.width = that.size.width + (that._helper ? (that.position.left - co.left) : (that.position.left - cop.left));
                if (pRatio) {
                    that.size.height = that.size.width / that.aspectRatio;
                }
                that.position.left = o.helper ? co.left : 0;
            }

            if (cp.top < (that._helper ? co.top : 0)) {
                that.size.height = that.size.height + (that._helper ? (that.position.top - co.top) : that.position.top);
                if (pRatio) {
                    that.size.width = that.size.height * that.aspectRatio;
                }
                that.position.top = that._helper ? co.top : 0;
            }

            that.offset.left = that.parentData.left + that.position.left;
            that.offset.top = that.parentData.top + that.position.top;

            woset = Math.abs( (that._helper ? that.offset.left - cop.left : (that.offset.left - cop.left)) + that.sizeDiff.width );
            hoset = Math.abs( (that._helper ? that.offset.top - cop.top : (that.offset.top - co.top)) + that.sizeDiff.height );

            isParent = that.containerElement.get(0) === that.element.parent().get(0);
            isOffsetRelative = /relative|absolute/.test(that.containerElement.css("position"));

            if (isParent && isOffsetRelative) {
                woset -= that.parentData.left;
            }

            if (woset + that.size.width >= that.parentData.width) {
                that.size.width = that.parentData.width - woset;
                if (pRatio) {
                    that.size.height = that.size.width / that.aspectRatio;
                }
            }

            if (hoset + that.size.height >= that.parentData.height) {
                that.size.height = that.parentData.height - hoset;
                if (pRatio) {
                    that.size.width = that.size.height * that.aspectRatio;
                }
            }
        },

        stop: function() {
            var that = $(this).data("ui-resizable"),
            o = that.options,
            co = that.containerOffset,
            cop = that.containerPosition,
            ce = that.containerElement,
            helper = $(that.helper),
            ho = helper.offset(),
            w = helper.outerWidth() - that.sizeDiff.width,
            h = helper.outerHeight() - that.sizeDiff.height;

            if (that._helper && !o.animate && (/relative/).test(ce.css("position"))) {
                $(this).css({
                    left: ho.left - cop.left - co.left,
                    width: w,
                    height: h 
                });
            }

            if (that._helper && !o.animate && (/static/).test(ce.css("position"))) {
                $(this).css({
                    left: ho.left - cop.left - co.left,
                    width: w,
                    height: h 
                });
            }

        }
    });

    $.ui.plugin.add("resizable", "alsoResize", {

        start: function () {
            var that = $(this).data("ui-resizable"),
            o = that.options,
            _store = function (exp) {
                $(exp).each(function() {
                    var el = $(this);
                    el.data("ui-resizable-alsoresize", {
                        width: parseInt(el.width(), 10),
                        height: parseInt(el.height(), 10),
                        left: parseInt(el.css("left"), 10),
                        top: parseInt(el.css("top"), 10)
                    });
                });
            };

            if (typeof(o.alsoResize) === "object" && !o.alsoResize.parentNode) {
                if (o.alsoResize.length) {
                    o.alsoResize = o.alsoResize[0];
                    _store(o.alsoResize);
                } else {
                    $.each(o.alsoResize, function (exp) {
                        _store(exp);
                    });
                }
            } else {
                _store(o.alsoResize);
            }
        },

        resize: function (event, ui) {
            var that = $(this).data("ui-resizable"),
            o = that.options,
            os = that.originalSize,
            op = that.originalPosition,
            delta = {
                height: (that.size.height - os.height) || 0,
                width: (that.size.width - os.width) || 0,
                top: (that.position.top - op.top) || 0,
                left: (that.position.left - op.left) || 0
            },
            _alsoResize = function (exp, c) {
                $(exp).each(function() {
                    var el = $(this), start = $(this).data("ui-resizable-alsoresize"), style = {},
                    css = c && c.length ? c : el.parents(ui.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];

                    $.each(css, function (i, prop) {
                        var sum = (start[prop] || 0) + (delta[prop] || 0);
                        if (sum && sum >= 0) {
                            style[prop] = sum || null;
                        }
                    });

                    el.css(style);
                });
            };

            if (typeof(o.alsoResize) === "object" && !o.alsoResize.nodeType) {
                $.each(o.alsoResize, function (exp, c) {
                    _alsoResize(exp, c);
                });
            } else {
                _alsoResize(o.alsoResize);
            }
        },

        stop: function () {
            $(this).removeData("resizable-alsoresize");
        }
    });

    $.ui.plugin.add("resizable", "ghost", {

        start: function() {

            var that = $(this).data("ui-resizable"), o = that.options, cs = that.size;

            that.ghost = that.originalElement.clone();
            that.ghost
            .css({
                opacity: 0.25,
                display: "block",
                position: "relative",
                height: cs.height,
                width: cs.width,
                margin: 0,
                left: 0,
                top: 0 
            })
            .addClass("ui-resizable-ghost")
            .addClass(typeof o.ghost === "string" ? o.ghost : "");

            that.ghost.appendTo(that.helper);

        },

        resize: function() {
            var that = $(this).data("ui-resizable");
            if (that.ghost) {
                that.ghost.css({
                    position: "relative",
                    height: that.size.height,
                    width: that.size.width 
                });
            }
        },

        stop: function() {
            var that = $(this).data("ui-resizable");
            if (that.ghost && that.helper) {
                that.helper.get(0).removeChild(that.ghost.get(0));
            }
        }

    });

    $.ui.plugin.add("resizable", "grid", {

        resize: function() {
            var that = $(this).data("ui-resizable"),
            o = that.options,
            cs = that.size,
            os = that.originalSize,
            op = that.originalPosition,
            a = that.axis,
            grid = typeof o.grid === "number" ? [o.grid, o.grid] : o.grid,
            gridX = (grid[0] || 1),
            gridY = (grid[1] || 1),
            ox = Math.round((cs.width - os.width) / gridX) * gridX,
            oy = Math.round((cs.height - os.height) / gridY) * gridY,
            newWidth = os.width + ox,
            newHeight = os.height + oy,
            isMaxWidth = o.maxWidth && (o.maxWidth < newWidth),
            isMaxHeight = o.maxHeight && (o.maxHeight < newHeight),
            isMinWidth = o.minWidth && (o.minWidth > newWidth),
            isMinHeight = o.minHeight && (o.minHeight > newHeight);

            o.grid = grid;

            if (isMinWidth) {
                newWidth = newWidth + gridX;
            }
            if (isMinHeight) {
                newHeight = newHeight + gridY;
            }
            if (isMaxWidth) {
                newWidth = newWidth - gridX;
            }
            if (isMaxHeight) {
                newHeight = newHeight - gridY;
            }

            if (/^(se|s|e)$/.test(a)) {
                that.size.width = newWidth;
                that.size.height = newHeight;
            } else if (/^(ne)$/.test(a)) {
                that.size.width = newWidth;
                that.size.height = newHeight;
                that.position.top = op.top - oy;
            } else if (/^(sw)$/.test(a)) {
                that.size.width = newWidth;
                that.size.height = newHeight;
                that.position.left = op.left - ox;
            } else {
                that.size.width = newWidth;
                that.size.height = newHeight;
                that.position.top = op.top - oy;
                that.position.left = op.left - ox;
            }
        }

    });

})(jQuery);

(function( $, undefined ) {

    $.widget("ui.selectable", $.ui.mouse, {
        version: "1.10.3",
        options: {
            appendTo: "body",
            autoRefresh: true,
            distance: 0,
            filter: "*",
            tolerance: "touch",

            // callbacks
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var selectees,
            that = this;

            this.element.addClass("ui-selectable");

            this.dragged = false;

            // cache selectee children based on filter
            this.refresh = function() {
                selectees = $(that.options.filter, that.element[0]);
                selectees.addClass("ui-selectee");
                selectees.each(function() {
                    var $this = $(this),
                    pos = $this.offset();
                    $.data(this, "selectable-item", {
                        element: this,
                        $element: $this,
                        left: pos.left,
                        top: pos.top,
                        right: pos.left + $this.outerWidth(),
                        bottom: pos.top + $this.outerHeight(),
                        startselected: false,
                        selected: $this.hasClass("ui-selected"),
                        selecting: $this.hasClass("ui-selecting"),
                        unselecting: $this.hasClass("ui-unselecting")
                    });
                });
            };
            this.refresh();

            this.selectees = selectees.addClass("ui-selectee");

            this._mouseInit();

            this.helper = $("<div class='ui-selectable-helper'></div>");
        },

        _destroy: function() {
            this.selectees
            .removeClass("ui-selectee")
            .removeData("selectable-item");
            this.element
            .removeClass("ui-selectable ui-selectable-disabled");
            this._mouseDestroy();
        },

        _mouseStart: function(event) {
            var that = this,
            options = this.options;

            this.opos = [event.pageX, event.pageY];

            if (this.options.disabled) {
                return;
            }

            this.selectees = $(options.filter, this.element[0]);

            this._trigger("start", event);

            $(options.appendTo).append(this.helper);
            // position helper (lasso)
            this.helper.css({
                "left": event.pageX,
                "top": event.pageY,
                "width": 0,
                "height": 0
            });

            if (options.autoRefresh) {
                this.refresh();
            }

            this.selectees.filter(".ui-selected").each(function() {
                var selectee = $.data(this, "selectable-item");
                selectee.startselected = true;
                if (!event.metaKey && !event.ctrlKey) {
                    selectee.$element.removeClass("ui-selected");
                    selectee.selected = false;
                    selectee.$element.addClass("ui-unselecting");
                    selectee.unselecting = true;
                    // selectable UNSELECTING callback
                    that._trigger("unselecting", event, {
                        unselecting: selectee.element
                    });
                }
            });

            $(event.target).parents().addBack().each(function() {
                var doSelect,
                selectee = $.data(this, "selectable-item");
                if (selectee) {
                    doSelect = (!event.metaKey && !event.ctrlKey) || !selectee.$element.hasClass("ui-selected");
                    selectee.$element
                    .removeClass(doSelect ? "ui-unselecting" : "ui-selected")
                    .addClass(doSelect ? "ui-selecting" : "ui-unselecting");
                    selectee.unselecting = !doSelect;
                    selectee.selecting = doSelect;
                    selectee.selected = doSelect;
                    // selectable (UN)SELECTING callback
                    if (doSelect) {
                        that._trigger("selecting", event, {
                            selecting: selectee.element
                        });
                    } else {
                        that._trigger("unselecting", event, {
                            unselecting: selectee.element
                        });
                    }
                    return false;
                }
            });

        },

        _mouseDrag: function(event) {

            this.dragged = true;

            if (this.options.disabled) {
                return;
            }

            var tmp,
            that = this,
            options = this.options,
            x1 = this.opos[0],
            y1 = this.opos[1],
            x2 = event.pageX,
            y2 = event.pageY;

            if (x1 > x2) {
                tmp = x2;
                x2 = x1;
                x1 = tmp;
            }
            if (y1 > y2) {
                tmp = y2;
                y2 = y1;
                y1 = tmp;
            }
            this.helper.css({
                left: x1,
                top: y1,
                width: x2 - x1,
                height: y2 - y1
            });

            this.selectees.each(function() {
                var selectee = $.data(this, "selectable-item"),
                hit = false;

                //prevent helper from being selected if appendTo: selectable
                if (!selectee || selectee.element === that.element[0]) {
                    return;
                }

                if (options.tolerance === "touch") {
                    hit = ( !(selectee.left > x2 || selectee.right < x1 || selectee.top > y2 || selectee.bottom < y1) );
                } else if (options.tolerance === "fit") {
                    hit = (selectee.left > x1 && selectee.right < x2 && selectee.top > y1 && selectee.bottom < y2);
                }

                if (hit) {
                    // SELECT
                    if (selectee.selected) {
                        selectee.$element.removeClass("ui-selected");
                        selectee.selected = false;
                    }
                    if (selectee.unselecting) {
                        selectee.$element.removeClass("ui-unselecting");
                        selectee.unselecting = false;
                    }
                    if (!selectee.selecting) {
                        selectee.$element.addClass("ui-selecting");
                        selectee.selecting = true;
                        // selectable SELECTING callback
                        that._trigger("selecting", event, {
                            selecting: selectee.element
                        });
                    }
                } else {
                    // UNSELECT
                    if (selectee.selecting) {
                        if ((event.metaKey || event.ctrlKey) && selectee.startselected) {
                            selectee.$element.removeClass("ui-selecting");
                            selectee.selecting = false;
                            selectee.$element.addClass("ui-selected");
                            selectee.selected = true;
                        } else {
                            selectee.$element.removeClass("ui-selecting");
                            selectee.selecting = false;
                            if (selectee.startselected) {
                                selectee.$element.addClass("ui-unselecting");
                                selectee.unselecting = true;
                            }
                            // selectable UNSELECTING callback
                            that._trigger("unselecting", event, {
                                unselecting: selectee.element
                            });
                        }
                    }
                    if (selectee.selected) {
                        if (!event.metaKey && !event.ctrlKey && !selectee.startselected) {
                            selectee.$element.removeClass("ui-selected");
                            selectee.selected = false;

                            selectee.$element.addClass("ui-unselecting");
                            selectee.unselecting = true;
                            // selectable UNSELECTING callback
                            that._trigger("unselecting", event, {
                                unselecting: selectee.element
                            });
                        }
                    }
                }
            });

            return false;
        },

        _mouseStop: function(event) {
            var that = this;

            this.dragged = false;

            $(".ui-unselecting", this.element[0]).each(function() {
                var selectee = $.data(this, "selectable-item");
                selectee.$element.removeClass("ui-unselecting");
                selectee.unselecting = false;
                selectee.startselected = false;
                that._trigger("unselected", event, {
                    unselected: selectee.element
                });
            });
            $(".ui-selecting", this.element[0]).each(function() {
                var selectee = $.data(this, "selectable-item");
                selectee.$element.removeClass("ui-selecting").addClass("ui-selected");
                selectee.selecting = false;
                selectee.selected = true;
                selectee.startselected = true;
                that._trigger("selected", event, {
                    selected: selectee.element
                });
            });
            this._trigger("stop", event);

            this.helper.remove();

            return false;
        }

    });

})(jQuery);

(function( $, undefined ) {

    /*jshint loopfunc: true */

    function isOverAxis( x, reference, size ) {
        return ( x > reference ) && ( x < ( reference + size ) );
    }

    function isFloating(item) {
        return (/left|right/).test(item.css("float")) || (/inline|table-cell/).test(item.css("display"));
    }

    $.widget("ui.sortable", $.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "sort",
        ready: false,
        options: {
            appendTo: "parent",
            axis: false,
            connectWith: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            dropOnEmpty: true,
            forcePlaceholderSize: false,
            forceHelperSize: false,
            grid: false,
            handle: false,
            helper: "original",
            items: "> *",
            opacity: false,
            placeholder: false,
            revert: false,
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1000,

            // callbacks
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function() {

            var o = this.options;
            this.containerCache = {};
            this.element.addClass("ui-sortable");

            //Get the items
            this.refresh();

            //Let's determine if the items are being displayed horizontally
            this.floating = this.items.length ? o.axis === "x" || isFloating(this.items[0].item) : false;

            //Let's determine the parent's offset
            this.offset = this.element.offset();

            //Initialize mouse events for interaction
            this._mouseInit();

            //We're ready to go
            this.ready = true;

        },

        _destroy: function() {
            this.element
            .removeClass("ui-sortable ui-sortable-disabled");
            this._mouseDestroy();

            for ( var i = this.items.length - 1; i >= 0; i-- ) {
                this.items[i].item.removeData(this.widgetName + "-item");
            }

            return this;
        },

        _setOption: function(key, value) {
            if ( key === "disabled" ) {
                this.options[ key ] = value;

                this.widget().toggleClass( "ui-sortable-disabled", !!value );
            } else {
                // Don't call widget base _setOption for disable as it adds ui-state-disabled class
                $.Widget.prototype._setOption.apply(this, arguments);
            }
        },

        _mouseCapture: function(event, overrideHandle) {
            var currentItem = null,
            validHandle = false,
            that = this;

            if (this.reverting) {
                return false;
            }

            if (this.options.disabled || this.options.type === "static") {
                return false;
            }

            //We have to refresh the items data once first
            this._refreshItems(event);

            //Find out if the clicked node (or one of its parents) is a actual item in this.items
            $(event.target).parents().each(function() {
                if ($.data(this, that.widgetName + "-item") === that) {
                    currentItem = $(this);
                    return false;
                }
            });
            if ($.data(event.target, that.widgetName + "-item") === that) {
                currentItem = $(event.target);
            }

            if (!currentItem) {
                return false;
            }
            if (this.options.handle && !overrideHandle) {
                $(this.options.handle, currentItem).find("*").addBack().each(function() {
                    if (this === event.target) {
                        validHandle = true;
                    }
                });
                if (!validHandle) {
                    return false;
                }
            }

            this.currentItem = currentItem;
            this._removeCurrentsFromItems();
            return true;

        },

        _mouseStart: function(event, overrideHandle, noActivation) {

            var i, body,
            o = this.options;

            this.currentContainer = this;

            //We only need to call refreshPositions, because the refreshItems call has been moved to mouseCapture
            this.refreshPositions();

            //Create and append the visible helper
            this.helper = this._createHelper(event);

            //Cache the helper size
            this._cacheHelperProportions();

            /*
            		 * - Position generation -
            		 * This block generates everything position related - it's the core of draggables.
            		 */

            //Cache the margins of the original element
            this._cacheMargins();

            //Get the next scrolling parent
            this.scrollParent = this.helper.scrollParent();

            //The element's absolute position on the page minus margins
            this.offset = this.currentItem.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };

            $.extend(this.offset, {
                click: {
                    //Where the click happened, relative to the element
                    left: event.pageX - this.offset.left,
                    top: event.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset() //This is a relative to absolute position minus the actual position calculation - only used for relative positioned helper
            });

            // Only after we got the offset, we can change the helper's position to absolute
            // TODO: Still need to figure out a way to make relative sorting possible
            this.helper.css("position", "absolute");
            this.cssPosition = this.helper.css("position");

            //Generate the original position
            this.originalPosition = this._generatePosition(event);
            this.originalPageX = event.pageX;
            this.originalPageY = event.pageY;

            //Adjust the mouse offset relative to the helper if "cursorAt" is supplied
            (o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));

            //Cache the former DOM position
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0] 
            };

            //If the helper is not the original, hide the original so it's not playing any role during the drag, won't cause anything bad this way
            if (this.helper[0] !== this.currentItem[0]) {
                this.currentItem.hide();
            }

            //Create the placeholder
            this._createPlaceholder();

            //Set a containment if given in the options
            if (o.containment) {
                this._setContainment();
            }

            if ( o.cursor && o.cursor !== "auto" ) {
                // cursor option
                body = this.document.find( "body" );

                // support: IE
                this.storedCursor = body.css( "cursor" );
                body.css( "cursor", o.cursor );

                this.storedStylesheet = $( "<style>*{ cursor: " + o.cursor + " !important; }</style>" ).appendTo( body );
            }

            if (o.opacity) {
                // opacity option
                if (this.helper.css("opacity")) {
                    this._storedOpacity = this.helper.css("opacity");
                }
                this.helper.css("opacity", o.opacity);
            }

            if (o.zIndex) {
                // zIndex option
                if (this.helper.css("zIndex")) {
                    this._storedZIndex = this.helper.css("zIndex");
                }
                this.helper.css("zIndex", o.zIndex);
            }

            //Prepare scrolling
            if (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {
                this.overflowOffset = this.scrollParent.offset();
            }

            //Call callbacks
            this._trigger("start", event, this._uiHash());

            //Recache the helper size
            if (!this._preserveHelperProportions) {
                this._cacheHelperProportions();
            }


            //Post "activate" events to possible containers
            if ( !noActivation ) {
                for ( i = this.containers.length - 1; i >= 0; i-- ) {
                    this.containers[ i ]._trigger( "activate", event, this._uiHash( this ) );
                }
            }

            //Prepare possible droppables
            if ($.ui.ddmanager) {
                $.ui.ddmanager.current = this;
            }

            if ($.ui.ddmanager && !o.dropBehaviour) {
                $.ui.ddmanager.prepareOffsets(this, event);
            }

            this.dragging = true;

            this.helper.addClass("ui-sortable-helper");
            this._mouseDrag(event); //Execute the drag once - this causes the helper not to be visible before getting its correct position
            return true;

        },

        _mouseDrag: function(event) {
            var i, item, itemElement, intersection,
            o = this.options,
            scrolled = false;

            //Compute the helpers position
            this.position = this._generatePosition(event);
            this.positionAbs = this._convertPositionTo("absolute");

            if (!this.lastPositionAbs) {
                this.lastPositionAbs = this.positionAbs;
            }

            //Do scrolling
            if (this.options.scroll) {
                if (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {

                    if ((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - event.pageY < o.scrollSensitivity) {
                        this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop + o.scrollSpeed;
                    } else if (event.pageY - this.overflowOffset.top < o.scrollSensitivity) {
                        this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop - o.scrollSpeed;
                    }

                    if ((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - event.pageX < o.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft + o.scrollSpeed;
                    } else if (event.pageX - this.overflowOffset.left < o.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft - o.scrollSpeed;
                    }

                } else {

                    if (event.pageY - $(document).scrollTop() < o.scrollSensitivity) {
                        scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
                    } else if ($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity) {
                        scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);
                    }

                    if (event.pageX - $(document).scrollLeft() < o.scrollSensitivity) {
                        scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);
                    } else if ($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity) {
                        scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed);
                    }

                }

                if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
                    $.ui.ddmanager.prepareOffsets(this, event);
                }
            }

            //Regenerate the absolute position used for position checks
            this.positionAbs = this._convertPositionTo("absolute");

            //Set the helper position
            if (!this.options.axis || this.options.axis !== "y") {
                this.helper[0].style.left = this.position.left + "px";
            }
            if (!this.options.axis || this.options.axis !== "x") {
                this.helper[0].style.top = this.position.top + "px";
            }

            //Rearrange
            for (i = this.items.length - 1; i >= 0; i--) {

                //Cache variables and intersection, continue if no intersection
                item = this.items[i];
                itemElement = item.item[0];
                intersection = this._intersectsWithPointer(item);
                if (!intersection) {
                    continue;
                }

                // Only put the placeholder inside the current Container, skip all
                // items form other containers. This works because when moving
                // an item from one container to another the
                // currentContainer is switched before the placeholder is moved.
                //
                // Without this moving items in "sub-sortables" can cause the placeholder to jitter
                // beetween the outer and inner container.
                if (item.instance !== this.currentContainer) {
                    continue;
                }

                // cannot intersect with itself
                // no useless actions that have been done before
                // no action if the item moved is the parent of the item checked
                if (itemElement !== this.currentItem[0] &&
                this.placeholder[intersection === 1 ? "next" : "prev"]()[0] !== itemElement &&
                !$.contains(this.placeholder[0], itemElement) &&
                (this.options.type === "semi-dynamic" ? !$.contains(this.element[0], itemElement) : true)
                ) {

                    this.direction = intersection === 1 ? "down" : "up";

                    if (this.options.tolerance === "pointer" || this._intersectsWithSides(item)) {
                        this._rearrange(event, item);
                    } else {
                        break;
                    }

                    this._trigger("change", event, this._uiHash());
                    break;
                }
            }

            //Post events to containers
            this._contactContainers(event);

            //Interconnect with droppables
            if ($.ui.ddmanager) {
                $.ui.ddmanager.drag(this, event);
            }

            //Call callbacks
            this._trigger("sort", event, this._uiHash());

            this.lastPositionAbs = this.positionAbs;
            return false;

        },

        _mouseStop: function(event, noPropagation) {

            if (!event) {
                return;
            }

            //If we are using droppables, inform the manager about the drop
            if ($.ui.ddmanager && !this.options.dropBehaviour) {
                $.ui.ddmanager.drop(this, event);
            }

            if (this.options.revert) {
                var that = this,
                cur = this.placeholder.offset(),
                axis = this.options.axis,
                animation = {};

                if ( !axis || axis === "x" ) {
                    animation.left = cur.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft);
                }
                if ( !axis || axis === "y" ) {
                    animation.top = cur.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop);
                }
                this.reverting = true;
                $(this.helper).animate( animation, parseInt(this.options.revert, 10) || 500, function() {
                    that._clear(event);
                });
            } else {
                this._clear(event, noPropagation);
            }

            return false;

        },

        cancel: function() {

            if (this.dragging) {

                this._mouseUp({
                    target: null 
                });

                if (this.options.helper === "original") {
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
                } else {
                    this.currentItem.show();
                }

                //Post deactivating events to containers
                for (var i = this.containers.length - 1; i >= 0; i--) {
                    this.containers[i]._trigger("deactivate", null, this._uiHash(this));
                    if (this.containers[i].containerCache.over) {
                        this.containers[i]._trigger("out", null, this._uiHash(this));
                        this.containers[i].containerCache.over = 0;
                    }
                }

            }

            if (this.placeholder) {
                //$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
                if (this.placeholder[0].parentNode) {
                    this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
                }
                if (this.options.helper !== "original" && this.helper && this.helper[0].parentNode) {
                    this.helper.remove();
                }

                $.extend(this, {
                    helper: null,
                    dragging: false,
                    reverting: false,
                    _noFinalSort: null
                });

                if (this.domPosition.prev) {
                    $(this.domPosition.prev).after(this.currentItem);
                } else {
                    $(this.domPosition.parent).prepend(this.currentItem);
                }
            }

            return this;

        },

        serialize: function(o) {

            var items = this._getItemsAsjQuery(o && o.connected),
            str = [];
            o = o || {};

            $(items).each(function() {
                var res = ($(o.item || this).attr(o.attribute || "id") || "").match(o.expression || (/(.+)[\-=_](.+)/));
                if (res) {
                    str.push((o.key || res[1] + "[]") + "=" + (o.key && o.expression ? res[1] : res[2]));
                }
            });

            if (!str.length && o.key) {
                str.push(o.key + "=");
            }

            return str.join("&");

        },

        toArray: function(o) {

            var items = this._getItemsAsjQuery(o && o.connected),
            ret = [];

            o = o || {};

            items.each(function() {
                ret.push($(o.item || this).attr(o.attribute || "id") || "");
            });
            return ret;

        },

        /* Be careful with the following core functions */
        _intersectsWith: function(item) {

            var x1 = this.positionAbs.left,
            x2 = x1 + this.helperProportions.width,
            y1 = this.positionAbs.top,
            y2 = y1 + this.helperProportions.height,
            l = item.left,
            r = l + item.width,
            t = item.top,
            b = t + item.height,
            dyClick = this.offset.click.top,
            dxClick = this.offset.click.left,
            isOverElementHeight = ( this.options.axis === "x" ) || ( ( y1 + dyClick ) > t && ( y1 + dyClick ) < b ),
            isOverElementWidth = ( this.options.axis === "y" ) || ( ( x1 + dxClick ) > l && ( x1 + dxClick ) < r ),
            isOverElement = isOverElementHeight && isOverElementWidth;

            if ( this.options.tolerance === "pointer" ||
            this.options.forcePointerForContainers ||
            (this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > item[this.floating ? "width" : "height"])
            ) {
                return isOverElement;
            } else {

                return (l < x1 + (this.helperProportions.width / 2) && // Right Half
                x2 - (this.helperProportions.width / 2) < r && // Left Half
                t < y1 + (this.helperProportions.height / 2) && // Bottom Half
                y2 - (this.helperProportions.height / 2) < b ); // Top Half

            }
        },

        _intersectsWithPointer: function(item) {

            var isOverElementHeight = (this.options.axis === "x") || isOverAxis(this.positionAbs.top + this.offset.click.top, item.top, item.height),
            isOverElementWidth = (this.options.axis === "y") || isOverAxis(this.positionAbs.left + this.offset.click.left, item.left, item.width),
            isOverElement = isOverElementHeight && isOverElementWidth,
            verticalDirection = this._getDragVerticalDirection(),
            horizontalDirection = this._getDragHorizontalDirection();

            if (!isOverElement) {
                return false;
            }

            return this.floating ?
            ( ((horizontalDirection && horizontalDirection === "right") || verticalDirection === "down") ? 2 : 1 )
            : ( verticalDirection && (verticalDirection === "down" ? 2 : 1) );

        },

        _intersectsWithSides: function(item) {

            var isOverBottomHalf = isOverAxis(this.positionAbs.top + this.offset.click.top, item.top + (item.height / 2), item.height),
            isOverRightHalf = isOverAxis(this.positionAbs.left + this.offset.click.left, item.left + (item.width / 2), item.width),
            verticalDirection = this._getDragVerticalDirection(),
            horizontalDirection = this._getDragHorizontalDirection();

            if (this.floating && horizontalDirection) {
                return ((horizontalDirection === "right" && isOverRightHalf) || (horizontalDirection === "left" && !isOverRightHalf));
            } else {
                return verticalDirection && ((verticalDirection === "down" && isOverBottomHalf) || (verticalDirection === "up" && !isOverBottomHalf));
            }

        },

        _getDragVerticalDirection: function() {
            var delta = this.positionAbs.top - this.lastPositionAbs.top;
            return delta !== 0 && (delta > 0 ? "down" : "up");
        },

        _getDragHorizontalDirection: function() {
            var delta = this.positionAbs.left - this.lastPositionAbs.left;
            return delta !== 0 && (delta > 0 ? "right" : "left");
        },

        refresh: function(event) {
            this._refreshItems(event);
            this.refreshPositions();
            return this;
        },

        _connectWith: function() {
            var options = this.options;
            return options.connectWith.constructor === String ? [options.connectWith] : options.connectWith;
        },

        _getItemsAsjQuery: function(connected) {

            var i, j, cur, inst,
            items = [],
            queries = [],
            connectWith = this._connectWith();

            if (connectWith && connected) {
                for (i = connectWith.length - 1; i >= 0; i--) {
                    cur = $(connectWith[i]);
                    for ( j = cur.length - 1; j >= 0; j--) {
                        inst = $.data(cur[j], this.widgetFullName);
                        if (inst && inst !== this && !inst.options.disabled) {
                            queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element) : $(inst.options.items, inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), inst]);
                        }
                    }
                }
            }

            queries.push([$.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem 
            }) : $(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);

            for (i = queries.length - 1; i >= 0; i--) {
                queries[i][0].each(function() {
                    items.push(this);
                });
            }

            return $(items);

        },

        _removeCurrentsFromItems: function() {

            var list = this.currentItem.find(":data(" + this.widgetName + "-item)");

            this.items = $.grep(this.items, function (item) {
                for (var j = 0; j < list.length; j++) {
                    if (list[j] === item.item[0]) {
                        return false;
                    }
                }
                return true;
            });

        },

        _refreshItems: function(event) {

            this.items = [];
            this.containers = [this];

            var i, j, cur, inst, targetData, _queries, item, queriesLength,
            items = this.items,
            queries = [[$.isFunction(this.options.items) ? this.options.items.call(this.element[0], event, {
                item: this.currentItem 
            }) : $(this.options.items, this.element), this]],
            connectWith = this._connectWith();

            if (connectWith && this.ready) {
                //Shouldn't be run the first time through due to massive slow-down
                for (i = connectWith.length - 1; i >= 0; i--) {
                    cur = $(connectWith[i]);
                    for (j = cur.length - 1; j >= 0; j--) {
                        inst = $.data(cur[j], this.widgetFullName);
                        if (inst && inst !== this && !inst.options.disabled) {
                            queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element[0], event, {
                                item: this.currentItem 
                            }) : $(inst.options.items, inst.element), inst]);
                            this.containers.push(inst);
                        }
                    }
                }
            }

            for (i = queries.length - 1; i >= 0; i--) {
                targetData = queries[i][1];
                _queries = queries[i][0];

                for (j = 0, queriesLength = _queries.length; j < queriesLength; j++) {
                    item = $(_queries[j]);

                    item.data(this.widgetName + "-item", targetData); // Data for target checking (mouse manager)

                    items.push({
                        item: item,
                        instance: targetData,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    });
                }
            }

        },

        refreshPositions: function(fast) {

            //This has to be redone because due to the item being moved out/into the offsetParent, the offsetParent's position will change
            if (this.offsetParent && this.helper) {
                this.offset.parent = this._getParentOffset();
            }

            var i, item, t, p;

            for (i = this.items.length - 1; i >= 0; i--) {
                item = this.items[i];

                //We ignore calculating positions of all connected containers when we're not over them
                if (item.instance !== this.currentContainer && this.currentContainer && item.item[0] !== this.currentItem[0]) {
                    continue;
                }

                t = this.options.toleranceElement ? $(this.options.toleranceElement, item.item) : item.item;

                if (!fast) {
                    item.width = t.outerWidth();
                    item.height = t.outerHeight();
                }

                p = t.offset();
                item.left = p.left;
                item.top = p.top;
            }

            if (this.options.custom && this.options.custom.refreshContainers) {
                this.options.custom.refreshContainers.call(this);
            } else {
                for (i = this.containers.length - 1; i >= 0; i--) {
                    p = this.containers[i].element.offset();
                    this.containers[i].containerCache.left = p.left;
                    this.containers[i].containerCache.top = p.top;
                    this.containers[i].containerCache.width = this.containers[i].element.outerWidth();
                    this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                }
            }

            return this;
        },

        _createPlaceholder: function(that) {
            that = that || this;
            var className,
            o = that.options;

            if (!o.placeholder || o.placeholder.constructor === String) {
                className = o.placeholder;
                o.placeholder = {
                    element: function() {

                        var nodeName = that.currentItem[0].nodeName.toLowerCase(),
                        element = $( "<" + nodeName + ">", that.document[0] )
                        .addClass(className || that.currentItem[0].className + " ui-sortable-placeholder")
                        .removeClass("ui-sortable-helper");

                        if ( nodeName === "tr" ) {
                            that.currentItem.children().each(function() {
                                $( "<td>&#160;</td>", that.document[0] )
                                .attr( "colspan", $( this ).attr( "colspan" ) || 1 )
                                .appendTo( element );
                            });
                        } else if ( nodeName === "img" ) {
                            element.attr( "src", that.currentItem.attr( "src" ) );
                        }

                        if ( !className ) {
                            element.css( "visibility", "hidden" );
                        }

                        return element;
                    },
                    update: function(container, p) {

                        // 1. If a className is set as 'placeholder option, we don't force sizes - the class is responsible for that
                        // 2. The option 'forcePlaceholderSize can be enabled to force it even if a class name is specified
                        if (className && !o.forcePlaceholderSize) {
                            return;
                        }

                        //If the element doesn't have a actual height by itself (without styles coming from a stylesheet), it receives the inline height from the dragged item
                        if (!p.height()) {
                            p.height(that.currentItem.innerHeight() - parseInt(that.currentItem.css("paddingTop") || 0, 10) - parseInt(that.currentItem.css("paddingBottom") || 0, 10));
                        }
                        if (!p.width()) {
                            p.width(that.currentItem.innerWidth() - parseInt(that.currentItem.css("paddingLeft") || 0, 10) - parseInt(that.currentItem.css("paddingRight") || 0, 10));
                        }
                    }
                };
            }

            //Create the placeholder
            that.placeholder = $(o.placeholder.element.call(that.element, that.currentItem));

            //Append it after the actual current item
            that.currentItem.after(that.placeholder);

            //Update the size of the placeholder (TODO: Logic to fuzzy, see line 316/317)
            o.placeholder.update(that, that.placeholder);

        },

        _contactContainers: function(event) {
            var i, j, dist, itemWithLeastDistance, posProperty, sizeProperty, base, cur, nearBottom, floating,
            innermostContainer = null,
            innermostIndex = null;

            // get innermost container that intersects with item
            for (i = this.containers.length - 1; i >= 0; i--) {

                // never consider a container that's located within the item itself
                if ($.contains(this.currentItem[0], this.containers[i].element[0])) {
                    continue;
                }

                if (this._intersectsWith(this.containers[i].containerCache)) {

                    // if we've already found a container and it's more "inner" than this, then continue
                    if (innermostContainer && $.contains(this.containers[i].element[0], innermostContainer.element[0])) {
                        continue;
                    }

                    innermostContainer = this.containers[i];
                    innermostIndex = i;

                } else {
                    // container doesn't intersect. trigger "out" event if necessary
                    if (this.containers[i].containerCache.over) {
                        this.containers[i]._trigger("out", event, this._uiHash(this));
                        this.containers[i].containerCache.over = 0;
                    }
                }

            }

            // if no intersecting containers found, return
            if (!innermostContainer) {
                return;
            }

            // move the item into the container if it's not there already
            if (this.containers.length === 1) {
                if (!this.containers[innermostIndex].containerCache.over) {
                    this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
                    this.containers[innermostIndex].containerCache.over = 1;
                }
            } else {

                //When entering a new container, we will find the item with the least distance and append our item near it
                dist = 10000;
                itemWithLeastDistance = null;
                floating = innermostContainer.floating || isFloating(this.currentItem);
                posProperty = floating ? "left" : "top";
                sizeProperty = floating ? "width" : "height";
                base = this.positionAbs[posProperty] + this.offset.click[posProperty];
                for (j = this.items.length - 1; j >= 0; j--) {
                    if (!$.contains(this.containers[innermostIndex].element[0], this.items[j].item[0])) {
                        continue;
                    }
                    if (this.items[j].item[0] === this.currentItem[0]) {
                        continue;
                    }
                    if (floating && !isOverAxis(this.positionAbs.top + this.offset.click.top, this.items[j].top, this.items[j].height)) {
                        continue;
                    }
                    cur = this.items[j].item.offset()[posProperty];
                    nearBottom = false;
                    if (Math.abs(cur - base) > Math.abs(cur + this.items[j][sizeProperty] - base)) {
                        nearBottom = true;
                        cur += this.items[j][sizeProperty];
                    }

                    if (Math.abs(cur - base) < dist) {
                        dist = Math.abs(cur - base);
                        itemWithLeastDistance = this.items[j];
                        this.direction = nearBottom ? "up" : "down";
                    }
                }

                //Check if dropOnEmpty is enabled
                if (!itemWithLeastDistance && !this.options.dropOnEmpty) {
                    return;
                }

                if (this.currentContainer === this.containers[innermostIndex]) {
                    return;
                }

                itemWithLeastDistance ? this._rearrange(event, itemWithLeastDistance, null, true) : this._rearrange(event, null, this.containers[innermostIndex].element, true);
                this._trigger("change", event, this._uiHash());
                this.containers[innermostIndex]._trigger("change", event, this._uiHash(this));
                this.currentContainer = this.containers[innermostIndex];

                //Update the placeholder
                this.options.placeholder.update(this.currentContainer, this.placeholder);

                this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
                this.containers[innermostIndex].containerCache.over = 1;
            }


        },

        _createHelper: function(event) {

            var o = this.options,
            helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event, this.currentItem])) : (o.helper === "clone" ? this.currentItem.clone() : this.currentItem);

            //Add the helper to the DOM if that didn't happen already
            if (!helper.parents("body").length) {
                $(o.appendTo !== "parent" ? o.appendTo : this.currentItem[0].parentNode)[0].appendChild(helper[0]);
            }

            if (helper[0] === this.currentItem[0]) {
                this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left") 
                };
            }

            if (!helper[0].style.width || o.forceHelperSize) {
                helper.width(this.currentItem.width());
            }
            if (!helper[0].style.height || o.forceHelperSize) {
                helper.height(this.currentItem.height());
            }

            return helper;

        },

        _adjustOffsetFromHelper: function(obj) {
            if (typeof obj === "string") {
                obj = obj.split(" ");
            }
            if ($.isArray(obj)) {
                obj = {
                    left: + obj[0],
                    top: + obj[1] || 0
                };
            }
            if ("left" in obj) {
                this.offset.click.left = obj.left + this.margins.left;
            }
            if ("right" in obj) {
                this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
            }
            if ("top" in obj) {
                this.offset.click.top = obj.top + this.margins.top;
            }
            if ("bottom" in obj) {
                this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
            }
        },

        _getParentOffset: function() {


            //Get the offsetParent and cache its position
            this.offsetParent = this.helper.offsetParent();
            var po = this.offsetParent.offset();

            // This is a special case where we need to modify a offset calculated on start, since the following happened:
            // 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
            // 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
            //    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
            if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0])) {
                po.left += this.scrollParent.scrollLeft();
                po.top += this.scrollParent.scrollTop();
            }

            // This needs to be actually done for all browsers, since pageX/pageY includes this information
            // with an ugly IE fix
            if ( this.offsetParent[0] === document.body || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && $.ui.ie)) {
                po = {
                    top: 0,
                    left: 0 
                };
            }

            return {
                top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };

        },

        _getRelativeOffset: function() {

            if (this.cssPosition === "relative") {
                var p = this.currentItem.position();
                return {
                    top: p.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: p.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            } else {
                return {
                    top: 0,
                    left: 0 
                };
            }

        },

        _cacheMargins: function() {
            this.margins = {
                left: (parseInt(this.currentItem.css("marginLeft"), 10) || 0),
                top: (parseInt(this.currentItem.css("marginTop"), 10) || 0)
            };
        },

        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },

        _setContainment: function() {

            var ce, co, over,
            o = this.options;
            if (o.containment === "parent") {
                o.containment = this.helper[0].parentNode;
            }
            if (o.containment === "document" || o.containment === "window") {
                this.containment = [
                0 - this.offset.relative.left - this.offset.parent.left,
                0 - this.offset.relative.top - this.offset.parent.top,
                $(o.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left,
                ($(o.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
                ];
            }

            if (!(/^(document|window|parent)$/).test(o.containment)) {
                ce = $(o.containment)[0];
                co = $(o.containment).offset();
                over = ($(ce).css("overflow") !== "hidden");

                this.containment = [
                co.left + (parseInt($(ce).css("borderLeftWidth"), 10) || 0) + (parseInt($(ce).css("paddingLeft"), 10) || 0) - this.margins.left,
                co.top + (parseInt($(ce).css("borderTopWidth"), 10) || 0) + (parseInt($(ce).css("paddingTop"), 10) || 0) - this.margins.top,
                co.left + (over ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css("borderLeftWidth"), 10) || 0) - (parseInt($(ce).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left,
                co.top + (over ? Math.max(ce.scrollHeight, ce.offsetHeight) : ce.offsetHeight) - (parseInt($(ce).css("borderTopWidth"), 10) || 0) - (parseInt($(ce).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top
                ];
            }

        },

        _convertPositionTo: function(d, pos) {

            if (!pos) {
                pos = this.position;
            }
            var mod = d === "absolute" ? 1 : - 1,
            scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
            scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

            return {
                top: (
                pos.top + // The absolute mouse position
                this.offset.relative.top * mod + // Only for relative positioned nodes: Relative offset from element to offset parent
                this.offset.parent.top * mod - // The offsetParent's offset without borders (offset + border)
                ( ( this.cssPosition === "fixed" ? - this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ) * mod)
                ),
                left: (
                pos.left + // The absolute mouse position
                this.offset.relative.left * mod + // Only for relative positioned nodes: Relative offset from element to offset parent
                this.offset.parent.left * mod - // The offsetParent's offset without borders (offset + border)
                ( ( this.cssPosition === "fixed" ? - this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ) * mod)
                )
            };

        },

        _generatePosition: function(event) {

            var top, left,
            o = this.options,
            pageX = event.pageX,
            pageY = event.pageY,
            scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

            // This is another very weird special case that only happens for relative elements:
            // 1. If the css position is relative
            // 2. and the scroll parent is the document or similar to the offset parent
            // we have to refresh the relative offset during the scroll so there are no jumps
            if (this.cssPosition === "relative" && !(this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0])) {
                this.offset.relative = this._getRelativeOffset();
            }

            /*
            		 * - Position constraining -
            		 * Constrain the position to a mix of grid, containment.
            		 */

            if (this.originalPosition) {
                //If we are not dragging yet, we won't check for options

                if (this.containment) {
                    if (event.pageX - this.offset.click.left < this.containment[0]) {
                        pageX = this.containment[0] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top < this.containment[1]) {
                        pageY = this.containment[1] + this.offset.click.top;
                    }
                    if (event.pageX - this.offset.click.left > this.containment[2]) {
                        pageX = this.containment[2] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top > this.containment[3]) {
                        pageY = this.containment[3] + this.offset.click.top;
                    }
                }

                if (o.grid) {
                    top = this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1];
                    pageY = this.containment ? ( (top - this.offset.click.top >= this.containment[1] && top - this.offset.click.top <= this.containment[3]) ? top : ((top - this.offset.click.top >= this.containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top;

                    left = this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0];
                    pageX = this.containment ? ( (left - this.offset.click.left >= this.containment[0] && left - this.offset.click.left <= this.containment[2]) ? left : ((left - this.offset.click.left >= this.containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left;
                }

            }

            return {
                top: (
                pageY - // The absolute mouse position
                this.offset.click.top - // Click offset (relative to the element)
                this.offset.relative.top - // Only for relative positioned nodes: Relative offset from element to offset parent
                this.offset.parent.top + // The offsetParent's offset without borders (offset + border)
                ( ( this.cssPosition === "fixed" ? - this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ))
                ),
                left: (
                pageX - // The absolute mouse position
                this.offset.click.left - // Click offset (relative to the element)
                this.offset.relative.left - // Only for relative positioned nodes: Relative offset from element to offset parent
                this.offset.parent.left + // The offsetParent's offset without borders (offset + border)
                ( ( this.cssPosition === "fixed" ? - this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ))
                )
            };

        },

        _rearrange: function(event, i, a, hardRefresh) {

            a ? a[0].appendChild(this.placeholder[0]) : i.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction === "down" ? i.item[0] : i.item[0].nextSibling));

            //Various things done here to improve the performance:
            // 1. we create a setTimeout, that calls refreshPositions
            // 2. on the instance, we have a counter variable, that get's higher after every append
            // 3. on the local scope, we copy the counter variable, and check in the timeout, if it's still the same
            // 4. this lets only the last addition to the timeout stack through
            this.counter = this.counter ? ++this.counter : 1;
            var counter = this.counter;

            this._delay(function() {
                if (counter === this.counter) {
                    this.refreshPositions(!hardRefresh); //Precompute after each DOM insertion, NOT on mousemove
                }
            });

        },

        _clear: function(event, noPropagation) {

            this.reverting = false;
            // We delay all events that have to be triggered to after the point where the placeholder has been removed and
            // everything else normalized again
            var i,
            delayedTriggers = [];

            // We first have to update the dom position of the actual currentItem
            // Note: don't do it if the current item is already removed (by a user), or it gets reappended (see #4088)
            if (!this._noFinalSort && this.currentItem.parent().length) {
                this.placeholder.before(this.currentItem);
            }
            this._noFinalSort = null;

            if (this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS) {
                    if (this._storedCSS[i] === "auto" || this._storedCSS[i] === "static") {
                        this._storedCSS[i] = "";
                    }
                }
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
            } else {
                this.currentItem.show();
            }

            if (this.fromOutside && !noPropagation) {
                delayedTriggers.push(function(event) {
                    this._trigger("receive", event, this._uiHash(this.fromOutside));
                });
            }
            if ((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !noPropagation) {
                delayedTriggers.push(function(event) {
                    this._trigger("update", event, this._uiHash());
                }); //Trigger update callback if the DOM position has changed
            }

            // Check if the items Container has Changed and trigger appropriate
            // events.
            if (this !== this.currentContainer) {
                if (!noPropagation) {
                    delayedTriggers.push(function(event) {
                        this._trigger("remove", event, this._uiHash());
                    });
                    delayedTriggers.push((function(c) {
                        return function(event) {
                            c._trigger("receive", event, this._uiHash(this));
                        };
                    }).call(this, this.currentContainer));
                    delayedTriggers.push((function(c) {
                        return function(event) {
                            c._trigger("update", event, this._uiHash(this));
                        };
                    }).call(this, this.currentContainer));
                }
            }


            //Post events to containers
            for (i = this.containers.length - 1; i >= 0; i--) {
                if (!noPropagation) {
                    delayedTriggers.push((function(c) {
                        return function(event) {
                            c._trigger("deactivate", event, this._uiHash(this));
                        };
                    }).call(this, this.containers[i]));
                }
                if (this.containers[i].containerCache.over) {
                    delayedTriggers.push((function(c) {
                        return function(event) {
                            c._trigger("out", event, this._uiHash(this));
                        };
                    }).call(this, this.containers[i]));
                    this.containers[i].containerCache.over = 0;
                }
            }

            //Do what was originally in plugins
            if ( this.storedCursor ) {
                this.document.find( "body" ).css( "cursor", this.storedCursor );
                this.storedStylesheet.remove();
            }
            if (this._storedOpacity) {
                this.helper.css("opacity", this._storedOpacity);
            }
            if (this._storedZIndex) {
                this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex);
            }

            this.dragging = false;
            if (this.cancelHelperRemoval) {
                if (!noPropagation) {
                    this._trigger("beforeStop", event, this._uiHash());
                    for (i = 0; i < delayedTriggers.length; i++) {
                        delayedTriggers[i].call(this, event);
                    }
                    //Trigger all delayed events
                    this._trigger("stop", event, this._uiHash());
                }

                this.fromOutside = false;
                return false;
            }

            if (!noPropagation) {
                this._trigger("beforeStop", event, this._uiHash());
            }

            //$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);

            if (this.helper[0] !== this.currentItem[0]) {
                this.helper.remove();
            }
            this.helper = null;

            if (!noPropagation) {
                for (i = 0; i < delayedTriggers.length; i++) {
                    delayedTriggers[i].call(this, event);
                }
                //Trigger all delayed events
                this._trigger("stop", event, this._uiHash());
            }

            this.fromOutside = false;
            return true;

        },

        _trigger: function() {
            if ($.Widget.prototype._trigger.apply(this, arguments) === false) {
                this.cancel();
            }
        },

        _uiHash: function(_inst) {
            var inst = _inst || this;
            return {
                helper: inst.helper,
                placeholder: inst.placeholder || $([]),
                position: inst.position,
                originalPosition: inst.originalPosition,
                offset: inst.positionAbs,
                item: inst.currentItem,
                sender: _inst ? _inst.element : null
            };
        }

    });

})(jQuery);

(function($, undefined) {

    var dataSpace = "ui-effects-";

    $.effects = {
        effect: {}
    };

    /*!
     * jQuery Color Animations v2.1.2
     * https://github.com/jquery/jquery-color
     *
     * Copyright 2013 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * Date: Wed Jan 16 08:47:09 2013 -0600
     */
    (function( jQuery, undefined ) {

        var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
        // plusequals test for += 100 -= 100
        rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
        // a set of RE's that can match strings and generate color tuples.
        stringParsers = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function( execResult ) {
                return [
                execResult[ 1 ],
                execResult[ 2 ],
                execResult[ 3 ],
                execResult[ 4 ]
                ];
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function( execResult ) {
                return [
                execResult[ 1 ] * 2.55,
                execResult[ 2 ] * 2.55,
                execResult[ 3 ] * 2.55,
                execResult[ 4 ]
                ];
            }
        }, {
            // this regex ignores A-F because it's compared against an already lowercased string
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function( execResult ) {
                return [
                parseInt( execResult[ 1 ], 16 ),
                parseInt( execResult[ 2 ], 16 ),
                parseInt( execResult[ 3 ], 16 )
                ];
            }
        }, {
            // this regex ignores A-F because it's compared against an already lowercased string
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function( execResult ) {
                return [
                parseInt( execResult[ 1 ] + execResult[ 1 ], 16 ),
                parseInt( execResult[ 2 ] + execResult[ 2 ], 16 ),
                parseInt( execResult[ 3 ] + execResult[ 3 ], 16 )
                ];
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function( execResult ) {
                return [
                execResult[ 1 ],
                execResult[ 2 ] / 100,
                execResult[ 3 ] / 100,
                execResult[ 4 ]
                ];
            }
        }
        ],
        // jQuery.Color( )
        color = jQuery.Color = function( color, green, blue, alpha ) {
            return new jQuery.Color.fn.parse( color, green, blue, alpha );
        },
        spaces = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },

            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        },
        propTypes = {
            "byte": {
                floor: true,
                max: 255
            },
            "percent": {
                max: 1
            },
            "degrees": {
                mod: 360,
                floor: true
            }
        },
        support = color.support = {},
        // element for support tests
        supportElem = jQuery( "<p>" )[ 0 ],
        // colors = jQuery.Color.names
        colors,
        // local aliases of functions called often
        each = jQuery.each;

        // determine rgba support immediately
        supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
        support.rgba = supportElem.style.backgroundColor.indexOf( "rgba" ) > - 1;

        // define cache name and alpha properties
        // for rgba and hsla spaces
        each( spaces, function( spaceName, space ) {
            space.cache = "_" + spaceName;
            space.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            };
        });

        function clamp( value, prop, allowEmpty ) {
            var type = propTypes[ prop.type ] || {};

            if ( value == null ) {
                return (allowEmpty || !prop.def) ? null : prop.def;
            }

            // ~~ is an short way of doing floor for positive numbers
            value = type.floor ? ~~value : parseFloat( value );

            // IE will pass in empty strings as value for alpha,
            // which will hit this case
            if ( isNaN( value ) ) {
                return prop.def;
            }

            if ( type.mod ) {
                // we add mod before modding to make sure that negatives values
                // get converted properly: -10 -> 350
                return (value + type.mod) % type.mod;
            }

            // for now all property types without mod have min and max
            return 0 > value ? 0 : type.max < value ? type.max : value;
        }

        function stringParse( string ) {
            var inst = color(),
            rgba = inst._rgba = [];

            string = string.toLowerCase();

            each( stringParsers, function( i, parser ) {
                var parsed,
                match = parser.re.exec( string ),
                values = match && parser.parse( match ),
                spaceName = parser.space || "rgba";

                if ( values ) {
                    parsed = inst[ spaceName ]( values );

                    // if this was an rgba parse the assignment might happen twice
                    // oh well....
                    inst[ spaces[ spaceName ].cache ] = parsed[ spaces[ spaceName ].cache ];
                    rgba = inst._rgba = parsed._rgba;

                    // exit each( stringParsers ) here because we matched
                    return false;
                }
            });

            // Found a stringParser that handled it
            if ( rgba.length ) {

                // if this came from a parsed string, force "transparent" when alpha is 0
                // chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
                if ( rgba.join() === "0,0,0,0" ) {
                    jQuery.extend( rgba, colors.transparent );
                }
                return inst;
            }

            // named colors
            return colors[ string ];
        }

        color.fn = jQuery.extend( color.prototype, {
            parse: function( red, green, blue, alpha ) {
                if ( red === undefined ) {
                    this._rgba = [ null, null, null, null ];
                    return this;
                }
                if ( red.jquery || red.nodeType ) {
                    red = jQuery( red ).css( green );
                    green = undefined;
                }

                var inst = this,
                type = jQuery.type( red ),
                rgba = this._rgba = [];

                // more than 1 argument specified - assume ( red, green, blue, alpha )
                if ( green !== undefined ) {
                    red = [ red, green, blue, alpha ];
                    type = "array";
                }

                if ( type === "string" ) {
                    return this.parse( stringParse( red ) || colors._default );
                }

                if ( type === "array" ) {
                    each( spaces.rgba.props, function( key, prop ) {
                        rgba[ prop.idx ] = clamp( red[ prop.idx ], prop );
                    });
                    return this;
                }

                if ( type === "object" ) {
                    if ( red instanceof color ) {
                        each( spaces, function( spaceName, space ) {
                            if ( red[ space.cache ] ) {
                                inst[ space.cache ] = red[ space.cache ].slice();
                            }
                        });
                    } else {
                        each( spaces, function( spaceName, space ) {
                            var cache = space.cache;
                            each( space.props, function( key, prop ) {

                                // if the cache doesn't exist, and we know how to convert
                                if ( !inst[ cache ] && space.to ) {

                                    // if the value was null, we don't need to copy it
                                    // if the key was alpha, we don't need to copy it either
                                    if ( key === "alpha" || red[ key ] == null ) {
                                        return;
                                    }
                                    inst[ cache ] = space.to( inst._rgba );
                                }

                                // this is the only case where we allow nulls for ALL properties.
                                // call clamp with alwaysAllowEmpty
                                inst[ cache ][ prop.idx ] = clamp( red[ key ], prop, true );
                            });

                            // everything defined but alpha?
                            if ( inst[ cache ] && jQuery.inArray( null, inst[ cache ].slice( 0, 3 ) ) < 0 ) {
                                // use the default of 1
                                inst[ cache ][ 3 ] = 1;
                                if ( space.from ) {
                                    inst._rgba = space.from( inst[ cache ] );
                                }
                            }
                        });
                    }
                    return this;
                }
            },
            is: function( compare ) {
                var is = color( compare ),
                same = true,
                inst = this;

                each( spaces, function( _, space ) {
                    var localCache,
                    isCache = is[ space.cache ];
                    if (isCache) {
                        localCache = inst[ space.cache ] || space.to && space.to( inst._rgba ) || [];
                        each( space.props, function( _, prop ) {
                            if ( isCache[ prop.idx ] != null ) {
                                same = ( isCache[ prop.idx ] === localCache[ prop.idx ] );
                                return same;
                            }
                        });
                    }
                    return same;
                });
                return same;
            },
            _space: function() {
                var used = [],
                inst = this;
                each( spaces, function( spaceName, space ) {
                    if ( inst[ space.cache ] ) {
                        used.push( spaceName );
                    }
                });
                return used.pop();
            },
            transition: function( other, distance ) {
                var end = color( other ),
                spaceName = end._space(),
                space = spaces[ spaceName ],
                startColor = this.alpha() === 0 ? color( "transparent" ) : this,
                start = startColor[ space.cache ] || space.to( startColor._rgba ),
                result = start.slice();

                end = end[ space.cache ];
                each( space.props, function( key, prop ) {
                    var index = prop.idx,
                    startValue = start[ index ],
                    endValue = end[ index ],
                    type = propTypes[ prop.type ] || {};

                    // if null, don't override start value
                    if ( endValue === null ) {
                        return;
                    }
                    // if null - use end
                    if ( startValue === null ) {
                        result[ index ] = endValue;
                    } else {
                        if ( type.mod ) {
                            if ( endValue - startValue > type.mod / 2 ) {
                                startValue += type.mod;
                            } else if ( startValue - endValue > type.mod / 2 ) {
                                startValue -= type.mod;
                            }
                        }
                        result[ index ] = clamp( ( endValue - startValue ) * distance + startValue, prop );
                    }
                });
                return this[ spaceName ]( result );
            },
            blend: function( opaque ) {
                // if we are already opaque - return ourself
                if ( this._rgba[ 3 ] === 1 ) {
                    return this;
                }

                var rgb = this._rgba.slice(),
                a = rgb.pop(),
                blend = color( opaque )._rgba;

                return color( jQuery.map( rgb, function( v, i ) {
                    return ( 1 - a ) * blend[ i ] + a * v;
                }));
            },
            toRgbaString: function() {
                var prefix = "rgba(",
                rgba = jQuery.map( this._rgba, function( v, i ) {
                    return v == null ? ( i > 2 ? 1 : 0 ) : v;
                });

                if ( rgba[ 3 ] === 1 ) {
                    rgba.pop();
                    prefix = "rgb(";
                }

                return prefix + rgba.join() + ")";
            },
            toHslaString: function() {
                var prefix = "hsla(",
                hsla = jQuery.map( this.hsla(), function( v, i ) {
                    if ( v == null ) {
                        v = i > 2 ? 1 : 0;
                    }

                    // catch 1 and 2
                    if ( i && i < 3 ) {
                        v = Math.round( v * 100 ) + "%";
                    }
                    return v;
                });

                if ( hsla[ 3 ] === 1 ) {
                    hsla.pop();
                    prefix = "hsl(";
                }
                return prefix + hsla.join() + ")";
            },
            toHexString: function( includeAlpha ) {
                var rgba = this._rgba.slice(),
                alpha = rgba.pop();

                if ( includeAlpha ) {
                    rgba.push( ~~( alpha * 255 ) );
                }

                return "#" + jQuery.map( rgba, function( v ) {

                    // default to 0 when nulls exist
                    v = ( v || 0 ).toString( 16 );
                    return v.length === 1 ? "0" + v : v;
                }).join("");
            },
            toString: function() {
                return this._rgba[ 3 ] === 0 ? "transparent" : this.toRgbaString();
            }
        });
        color.fn.parse.prototype = color.fn;

        // hsla conversions adapted from:
        // https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021

        function hue2rgb( p, q, h ) {
            h = ( h + 1 ) % 1;
            if ( h * 6 < 1 ) {
                return p + (q - p) * h * 6;
            }
            if ( h * 2 < 1) {
                return q;
            }
            if ( h * 3 < 2 ) {
                return p + (q - p) * ((2 / 3) - h) * 6;
            }
            return p;
        }

        spaces.hsla.to = function ( rgba ) {
            if ( rgba[ 0 ] == null || rgba[ 1 ] == null || rgba[ 2 ] == null ) {
                return [ null, null, null, rgba[ 3 ] ];
            }
            var r = rgba[ 0 ] / 255,
            g = rgba[ 1 ] / 255,
            b = rgba[ 2 ] / 255,
            a = rgba[ 3 ],
            max = Math.max( r, g, b ),
            min = Math.min( r, g, b ),
            diff = max - min,
            add = max + min,
            l = add * 0.5,
            h, s;

            if ( min === max ) {
                h = 0;
            } else if ( r === max ) {
                h = ( 60 * ( g - b ) / diff ) + 360;
            } else if ( g === max ) {
                h = ( 60 * ( b - r ) / diff ) + 120;
            } else {
                h = ( 60 * ( r - g ) / diff ) + 240;
            }

            // chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
            // otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
            if ( diff === 0 ) {
                s = 0;
            } else if ( l <= 0.5 ) {
                s = diff / add;
            } else {
                s = diff / ( 2 - add );
            }
            return [ Math.round(h) % 360, s, l, a == null ? 1 : a ];
        };

        spaces.hsla.from = function ( hsla ) {
            if ( hsla[ 0 ] == null || hsla[ 1 ] == null || hsla[ 2 ] == null ) {
                return [ null, null, null, hsla[ 3 ] ];
            }
            var h = hsla[ 0 ] / 360,
            s = hsla[ 1 ],
            l = hsla[ 2 ],
            a = hsla[ 3 ],
            q = l <= 0.5 ? l * ( 1 + s ) : l + s - l * s,
            p = 2 * l - q;

            return [
            Math.round( hue2rgb( p, q, h + ( 1 / 3 ) ) * 255 ),
            Math.round( hue2rgb( p, q, h ) * 255 ),
            Math.round( hue2rgb( p, q, h - ( 1 / 3 ) ) * 255 ),
            a
            ];
        };


        each( spaces, function( spaceName, space ) {
            var props = space.props,
            cache = space.cache,
            to = space.to,
            from = space.from;

            // makes rgba() and hsla()
            color.fn[ spaceName ] = function( value ) {

                // generate a cache for this space if it doesn't exist
                if ( to && !this[ cache ] ) {
                    this[ cache ] = to( this._rgba );
                }
                if ( value === undefined ) {
                    return this[ cache ].slice();
                }

                var ret,
                type = jQuery.type( value ),
                arr = ( type === "array" || type === "object" ) ? value : arguments,
                local = this[ cache ].slice();

                each( props, function( key, prop ) {
                    var val = arr[ type === "object" ? key : prop.idx ];
                    if ( val == null ) {
                        val = local[ prop.idx ];
                    }
                    local[ prop.idx ] = clamp( val, prop );
                });

                if ( from ) {
                    ret = color( from( local ) );
                    ret[ cache ] = local;
                    return ret;
                } else {
                    return color( local );
                }
            };

            // makes red() green() blue() alpha() hue() saturation() lightness()
            each( props, function( key, prop ) {
                // alpha is included in more than one space
                if ( color.fn[ key ] ) {
                    return;
                }
                color.fn[ key ] = function( value ) {
                    var vtype = jQuery.type( value ),
                    fn = ( key === "alpha" ? ( this._hsla ? "hsla" : "rgba" ) : spaceName ),
                    local = this[ fn ](),
                    cur = local[ prop.idx ],
                    match;

                    if ( vtype === "undefined" ) {
                        return cur;
                    }

                    if ( vtype === "function" ) {
                        value = value.call( this, cur );
                        vtype = jQuery.type( value );
                    }
                    if ( value == null && prop.empty ) {
                        return this;
                    }
                    if ( vtype === "string" ) {
                        match = rplusequals.exec( value );
                        if ( match ) {
                            value = cur + parseFloat( match[ 2 ] ) * ( match[ 1 ] === "+" ? 1 : - 1 );
                        }
                    }
                    local[ prop.idx ] = value;
                    return this[ fn ]( local );
                };
            });
        });

        // add cssHook and .fx.step function for each named hook.
        // accept a space separated string of properties
        color.hook = function( hook ) {
            var hooks = hook.split( " " );
            each( hooks, function( i, hook ) {
                jQuery.cssHooks[ hook ] = {
                    set: function( elem, value ) {
                        var parsed, curElem,
                        backgroundColor = "";

                        if ( value !== "transparent" && ( jQuery.type( value ) !== "string" || ( parsed = stringParse( value ) ) ) ) {
                            value = color( parsed || value );
                            if ( !support.rgba && value._rgba[ 3 ] !== 1 ) {
                                curElem = hook === "backgroundColor" ? elem.parentNode : elem;
                                while (
                                (backgroundColor === "" || backgroundColor === "transparent") &&
                                curElem && curElem.style
                                ) {
                                    try {
                                        backgroundColor = jQuery.css( curElem, "backgroundColor" );
                                        curElem = curElem.parentNode;
                                    } catch ( e ) {}
                                }

                                value = value.blend( backgroundColor && backgroundColor !== "transparent" ?
                                backgroundColor :
                                "_default" );
                            }

                            value = value.toRgbaString();
                        }
                        try {
                            elem.style[ hook ] = value;
                        } catch ( e ) {
                            // wrapped to prevent IE from throwing errors on "invalid" values like 'auto' or 'inherit'
                        }
                    }
                };
                jQuery.fx.step[ hook ] = function( fx ) {
                    if ( !fx.colorInit ) {
                        fx.start = color( fx.elem, hook );
                        fx.end = color( fx.end );
                        fx.colorInit = true;
                    }
                    jQuery.cssHooks[ hook ].set( fx.elem, fx.start.transition( fx.end, fx.pos ) );
                };
            });

        };

        color.hook( stepHooks );

        jQuery.cssHooks.borderColor = {
            expand: function( value ) {
                var expanded = {};

                each( [ "Top", "Right", "Bottom", "Left" ], function( i, part ) {
                    expanded[ "border" + part + "Color" ] = value;
                });
                return expanded;
            }
        };

        // Basic color names only.
        // Usage of any of the other color names requires adding yourself or including
        // jquery.color.svg-names.js.
        colors = jQuery.Color.names = {
            // 4.1. Basic color keywords
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",

            // 4.2.3. "transparent" color keyword
            transparent: [ null, null, null, 0 ],

            _default: "#ffffff"
        };

    })( jQuery );


    /******************************************************************************/
    /****************************** CLASS ANIMATIONS ******************************/
    /******************************************************************************/
    (function() {

        var classAnimationActions = [ "add", "remove", "toggle" ],
        shorthandStyles = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };

        $.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ], function( _, prop ) {
            $.fx.step[ prop ] = function( fx ) {
                if ( fx.end !== "none" && !fx.setAttr || fx.pos === 1 && !fx.setAttr ) {
                    jQuery.style( fx.elem, prop, fx.end );
                    fx.setAttr = true;
                }
            };
        });

        function getElementStyles( elem ) {
            var key, len,
            style = elem.ownerDocument.defaultView ?
            elem.ownerDocument.defaultView.getComputedStyle( elem, null ) :
            elem.currentStyle,
            styles = {};

            if ( style && style.length && style[ 0 ] && style[ style[ 0 ] ] ) {
                len = style.length;
                while ( len-- ) {
                    key = style[ len ];
                    if ( typeof style[ key ] === "string" ) {
                        styles[ $.camelCase( key ) ] = style[ key ];
                    }
                }
                // support: Opera, IE <9
            } else {
                for ( key in style ) {
                    if ( typeof style[ key ] === "string" ) {
                        styles[ key ] = style[ key ];
                    }
                }
            }

            return styles;
        }


        function styleDifference( oldStyle, newStyle ) {
            var diff = {},
            name, value;

            for ( name in newStyle ) {
                value = newStyle[ name ];
                if ( oldStyle[ name ] !== value ) {
                    if ( !shorthandStyles[ name ] ) {
                        if ( $.fx.step[ name ] || !isNaN( parseFloat( value ) ) ) {
                            diff[ name ] = value;
                        }
                    }
                }
            }

            return diff;
        }

        // support: jQuery <1.8
        if ( !$.fn.addBack ) {
            $.fn.addBack = function( selector ) {
                return this.add( selector == null ?
                this.prevObject : this.prevObject.filter( selector )
                );
            };
        }

        $.effects.animateClass = function( value, duration, easing, callback ) {
            var o = $.speed( duration, easing, callback );

            return this.queue( function() {
                var animated = $( this ),
                baseClass = animated.attr( "class" ) || "",
                applyClassChange,
                allAnimations = o.children ? animated.find( "*" ).addBack() : animated;

                // map the animated objects to store the original styles.
                allAnimations = allAnimations.map(function() {
                    var el = $( this );
                    return {
                        el: el,
                        start: getElementStyles( this )
                    };
                });

                // apply class change
                applyClassChange = function() {
                    $.each( classAnimationActions, function(i, action) {
                        if ( value[ action ] ) {
                            animated[ action + "Class" ]( value[ action ] );
                        }
                    });
                };
                applyClassChange();

                // map all animated objects again - calculate new styles and diff
                allAnimations = allAnimations.map(function() {
                    this.end = getElementStyles( this.el[ 0 ] );
                    this.diff = styleDifference( this.start, this.end );
                    return this;
                });

                // apply original class
                animated.attr( "class", baseClass );

                // map all animated objects again - this time collecting a promise
                allAnimations = allAnimations.map(function() {
                    var styleInfo = this,
                    dfd = $.Deferred(),
                    opts = $.extend({}, o, {
                        queue: false,
                        complete: function() {
                            dfd.resolve( styleInfo );
                        }
                    });

                    this.el.animate( this.diff, opts );
                    return dfd.promise();
                });

                // once all animations have completed:
                $.when.apply( $, allAnimations.get() ).done(function() {

                    // set the final class
                    applyClassChange();

                    // for each animated element,
                    // clear all css properties that were animated
                    $.each( arguments, function() {
                        var el = this.el;
                        $.each( this.diff, function(key) {
                            el.css( key, "" );
                        });
                    });

                    // this is guarnteed to be there if you use jQuery.speed()
                    // it also handles dequeuing the next anim...
                    o.complete.call( animated[ 0 ] );
                });
            });
        };

        $.fn.extend({
            addClass: (function( orig ) {
                return function( classNames, speed, easing, callback ) {
                    return speed ?
                    $.effects.animateClass.call( this,
                    {
                        add: classNames 
                    }, speed, easing, callback ) :
                    orig.apply( this, arguments );
                };
            })( $.fn.addClass ),

            removeClass: (function( orig ) {
                return function( classNames, speed, easing, callback ) {
                    return arguments.length > 1 ?
                    $.effects.animateClass.call( this,
                    {
                        remove: classNames 
                    }, speed, easing, callback ) :
                    orig.apply( this, arguments );
                };
            })( $.fn.removeClass ),

            toggleClass: (function( orig ) {
                return function( classNames, force, speed, easing, callback ) {
                    if ( typeof force === "boolean" || force === undefined ) {
                        if ( !speed ) {
                            // without speed parameter
                            return orig.apply( this, arguments );
                        } else {
                            return $.effects.animateClass.call( this,
                            (force ? {
                                add: classNames 
                            } : {
                                remove: classNames 
                            }),
                            speed, easing, callback );
                        }
                    } else {
                        // without force parameter
                        return $.effects.animateClass.call( this,
                        {
                            toggle: classNames 
                        }, force, speed, easing );
                    }
                };
            })( $.fn.toggleClass ),

            switchClass: function( remove, add, speed, easing, callback) {
                return $.effects.animateClass.call( this, {
                    add: add,
                    remove: remove
                }, speed, easing, callback );
            }
        });

    })();

    /******************************************************************************/
    /*********************************** EFFECTS **********************************/
    /******************************************************************************/

    (function() {

        $.extend( $.effects, {
            version: "1.10.3",

            // Saves a set of properties in a data storage
            save: function( element, set ) {
                for ( var i = 0; i < set.length; i++ ) {
                    if ( set[ i ] !== null ) {
                        element.data( dataSpace + set[ i ], element[ 0 ].style[ set[ i ] ] );
                    }
                }
            },

            // Restores a set of previously saved properties from a data storage
            restore: function( element, set ) {
                var val, i;
                for ( i = 0; i < set.length; i++ ) {
                    if ( set[ i ] !== null ) {
                        val = element.data( dataSpace + set[ i ] );
                        // support: jQuery 1.6.2
                        // http://bugs.jquery.com/ticket/9917
                        // jQuery 1.6.2 incorrectly returns undefined for any falsy value.
                        // We can't differentiate between "" and 0 here, so we just assume
                        // empty string since it's likely to be a more common value...
                        if ( val === undefined ) {
                            val = "";
                        }
                        element.css( set[ i ], val );
                    }
                }
            },

            setMode: function( el, mode ) {
                if (mode === "toggle") {
                    mode = el.is( ":hidden" ) ? "show" : "hide";
                }
                return mode;
            },

            // Translates a [top,left] array into a baseline value
            // this should be a little more flexible in the future to handle a string & hash
            getBaseline: function( origin, original ) {
                var y, x;
                switch ( origin[ 0 ] ) {
                case "top":
                    y = 0;
                    break;
                case "middle":
                    y = 0.5;
                    break;
                case "bottom":
                    y = 1;
                    break;
                default:
                    y = origin[ 0 ] / original.height;
                }
                switch ( origin[ 1 ] ) {
                case "left":
                    x = 0;
                    break;
                case "center":
                    x = 0.5;
                    break;
                case "right":
                    x = 1;
                    break;
                default:
                    x = origin[ 1 ] / original.width;
                }
                return {
                    x: x,
                    y: y
                };
            },

            // Wraps the element around a wrapper that copies position properties
            createWrapper: function( element ) {

                // if the element is already wrapped, return it
                if ( element.parent().is( ".ui-effects-wrapper" )) {
                    return element.parent();
                }

                // wrap the element
                var props = {
                    width: element.outerWidth(true),
                    height: element.outerHeight(true),
                    "float": element.css( "float" )
                },
                wrapper = $( "<div></div>" )
                .addClass( "ui-effects-wrapper" )
                .css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }),
                // Store the size in case width/height are defined in % - Fixes #5245
                size = {
                    width: element.width(),
                    height: element.height()
                },
                active = document.activeElement;

                // support: Firefox
                // Firefox incorrectly exposes anonymous content
                // https://bugzilla.mozilla.org/show_bug.cgi?id=561664
                try {
                    active.id;
                } catch ( e ) {
                    active = document.body;
                }

                element.wrap( wrapper );

                // Fixes #7595 - Elements lose focus when wrapped.
                if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
                    $( active ).focus();
                }

                wrapper = element.parent(); //Hotfix for jQuery 1.4 since some change in wrap() seems to actually lose the reference to the wrapped element

                // transfer positioning properties to the wrapper
                if ( element.css( "position" ) === "static" ) {
                    wrapper.css({
                        position: "relative" 
                    });
                    element.css({
                        position: "relative" 
                    });
                } else {
                    $.extend( props, {
                        position: element.css( "position" ),
                        zIndex: element.css( "z-index" )
                    });
                    $.each([ "top", "left", "bottom", "right" ], function(i, pos) {
                        props[ pos ] = element.css( pos );
                        if ( isNaN( parseInt( props[ pos ], 10 ) ) ) {
                            props[ pos ] = "auto";
                        }
                    });
                    element.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    });
                }
                element.css(size);

                return wrapper.css( props ).show();
            },

            removeWrapper: function( element ) {
                var active = document.activeElement;

                if ( element.parent().is( ".ui-effects-wrapper" ) ) {
                    element.parent().replaceWith( element );

                    // Fixes #7595 - Elements lose focus when wrapped.
                    if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
                        $( active ).focus();
                    }
                }


                return element;
            },

            setTransition: function( element, list, factor, value ) {
                value = value || {};
                $.each( list, function( i, x ) {
                    var unit = element.cssUnit( x );
                    if ( unit[ 0 ] > 0 ) {
                        value[ x ] = unit[ 0 ] * factor + unit[ 1 ];
                    }
                });
                return value;
            }
        });

        // return an effect options object for the given parameters:
        function _normalizeArguments( effect, options, speed, callback ) {

            // allow passing all options as the first parameter
            if ( $.isPlainObject( effect ) ) {
                options = effect;
                effect = effect.effect;
            }

            // convert to an object
            effect = {
                effect: effect 
            };

            // catch (effect, null, ...)
            if ( options == null ) {
                options = {};
            }

            // catch (effect, callback)
            if ( $.isFunction( options ) ) {
                callback = options;
                speed = null;
                options = {};
            }

            // catch (effect, speed, ?)
            if ( typeof options === "number" || $.fx.speeds[ options ] ) {
                callback = speed;
                speed = options;
                options = {};
            }

            // catch (effect, options, callback)
            if ( $.isFunction( speed ) ) {
                callback = speed;
                speed = null;
            }

            // add options to effect
            if ( options ) {
                $.extend( effect, options );
            }

            speed = speed || options.duration;
            effect.duration = $.fx.off ? 0 :
            typeof speed === "number" ? speed :
            speed in $.fx.speeds ? $.fx.speeds[ speed ] :
            $.fx.speeds._default;

            effect.complete = callback || options.complete;

            return effect;
        }

        function standardAnimationOption( option ) {
            // Valid standard speeds (nothing, number, named speed)
            if ( !option || typeof option === "number" || $.fx.speeds[ option ] ) {
                return true;
            }

            // Invalid strings - treat as "normal" speed
            if ( typeof option === "string" && !$.effects.effect[ option ] ) {
                return true;
            }

            // Complete callback
            if ( $.isFunction( option ) ) {
                return true;
            }

            // Options hash (but not naming an effect)
            if ( typeof option === "object" && !option.effect ) {
                return true;
            }

            // Didn't match any standard API
            return false;
        }

        $.fn.extend({
            effect: function( /* effect, options, speed, callback */
            ) {
                var args = _normalizeArguments.apply( this, arguments ),
                mode = args.mode,
                queue = args.queue,
                effectMethod = $.effects.effect[ args.effect ];

                if ( $.fx.off || !effectMethod ) {
                    // delegate to the original method (e.g., .show()) if possible
                    if ( mode ) {
                        return this[ mode ]( args.duration, args.complete );
                    } else {
                        return this.each( function() {
                            if ( args.complete ) {
                                args.complete.call( this );
                            }
                        });
                    }
                }

                function run( next ) {
                    var elem = $( this ),
                    complete = args.complete,
                    mode = args.mode;

                    function done() {
                        if ( $.isFunction( complete ) ) {
                            complete.call( elem[0] );
                        }
                        if ( $.isFunction( next ) ) {
                            next();
                        }
                    }

                    // If the element already has the correct final state, delegate to
                    // the core methods so the internal tracking of "olddisplay" works.
                    if ( elem.is( ":hidden" ) ? mode === "hide" : mode === "show" ) {
                        elem[ mode ]();
                        done();
                    } else {
                        effectMethod.call( elem[0], args, done );
                    }
                }

                return queue === false ? this.each( run ) : this.queue( queue || "fx", run );
            },

            show: (function( orig ) {
                return function( option ) {
                    if ( standardAnimationOption( option ) ) {
                        return orig.apply( this, arguments );
                    } else {
                        var args = _normalizeArguments.apply( this, arguments );
                        args.mode = "show";
                        return this.effect.call( this, args );
                    }
                };
            })( $.fn.show ),

            hide: (function( orig ) {
                return function( option ) {
                    if ( standardAnimationOption( option ) ) {
                        return orig.apply( this, arguments );
                    } else {
                        var args = _normalizeArguments.apply( this, arguments );
                        args.mode = "hide";
                        return this.effect.call( this, args );
                    }
                };
            })( $.fn.hide ),

            toggle: (function( orig ) {
                return function( option ) {
                    if ( standardAnimationOption( option ) || typeof option === "boolean" ) {
                        return orig.apply( this, arguments );
                    } else {
                        var args = _normalizeArguments.apply( this, arguments );
                        args.mode = "toggle";
                        return this.effect.call( this, args );
                    }
                };
            })( $.fn.toggle ),

            // helper functions
            cssUnit: function(key) {
                var style = this.css( key ),
                val = [];

                $.each( [ "em", "px", "%", "pt" ], function( i, unit ) {
                    if ( style.indexOf( unit ) > 0 ) {
                        val = [ parseFloat( style ), unit ];
                    }
                });
                return val;
            }
        });

    })();

    /******************************************************************************/
    /*********************************** EASING ***********************************/
    /******************************************************************************/

    (function() {

        // based on easing equations from Robert Penner (http://www.robertpenner.com/easing)

        var baseEasings = {};

        $.each( [ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function( i, name ) {
            baseEasings[ name ] = function( p ) {
                return Math.pow( p, i + 2 );
            };
        });

        $.extend( baseEasings, {
            Sine: function ( p ) {
                return 1 - Math.cos( p * Math.PI / 2 );
            },
            Circ: function ( p ) {
                return 1 - Math.sqrt( 1 - p * p );
            },
            Elastic: function( p ) {
                return p === 0 || p === 1 ? p :
                - Math.pow( 2, 8 * (p - 1) ) * Math.sin( ( (p - 1) * 80 - 7.5 ) * Math.PI / 15 );
            },
            Back: function( p ) {
                return p * p * ( 3 * p - 2 );
            },
            Bounce: function ( p ) {
                var pow2,
                bounce = 4;

                while ( p < ( ( pow2 = Math.pow( 2, --bounce ) ) - 1 ) / 11 ) {}
                return 1 / Math.pow( 4, 3 - bounce ) - 7.5625 * Math.pow( ( pow2 * 3 - 2 ) / 22 - p, 2 );
            }
        });

        $.each( baseEasings, function( name, easeIn ) {
            $.easing[ "easeIn" + name ] = easeIn;
            $.easing[ "easeOut" + name ] = function( p ) {
                return 1 - easeIn( 1 - p );
            };
            $.easing[ "easeInOut" + name ] = function( p ) {
                return p < 0.5 ?
                easeIn( p * 2 ) / 2 :
                1 - easeIn( p * - 2 + 2 ) / 2;
            };
        });

    })();

})(jQuery);

(function( $, undefined ) {

    var uid = 0,
    hideProps = {},
    showProps = {};

    hideProps.height = hideProps.paddingTop = hideProps.paddingBottom =
    hideProps.borderTopWidth = hideProps.borderBottomWidth = "hide";
    showProps.height = showProps.paddingTop = showProps.paddingBottom =
    showProps.borderTopWidth = showProps.borderBottomWidth = "show";

    $.widget( "ui.accordion", {
        version: "1.10.3",
        options: {
            active: 0,
            animate: {},
            collapsible: false,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },

            // callbacks
            activate: null,
            beforeActivate: null
        },

        _create: function() {
            var options = this.options;
            this.prevShow = this.prevHide = $();
            this.element.addClass( "ui-accordion ui-widget ui-helper-reset" )
            // ARIA
            .attr( "role", "tablist" );

            // don't allow collapsible: false and active: false / null
            if ( !options.collapsible && (options.active === false || options.active == null) ) {
                options.active = 0;
            }

            this._processPanels();
            // handle negative values
            if ( options.active < 0 ) {
                options.active += this.headers.length;
            }
            this._refresh();
        },

        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: !this.active.length ? $() : this.active.next(),
                content: !this.active.length ? $() : this.active.next()
            };
        },

        _createIcons: function() {
            var icons = this.options.icons;
            if ( icons ) {
                $( "<span>" )
                .addClass( "ui-accordion-header-icon ui-icon " + icons.header )
                .prependTo( this.headers );
                this.active.children( ".ui-accordion-header-icon" )
                .removeClass( icons.header )
                .addClass( icons.activeHeader );
                this.headers.addClass( "ui-accordion-icons" );
            }
        },

        _destroyIcons: function() {
            this.headers
            .removeClass( "ui-accordion-icons" )
            .children( ".ui-accordion-header-icon" )
            .remove();
        },

        _destroy: function() {
            var contents;

            // clean up main element
            this.element
            .removeClass( "ui-accordion ui-widget ui-helper-reset" )
            .removeAttr( "role" );

            // clean up headers
            this.headers
            .removeClass( "ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top" )
            .removeAttr( "role" )
            .removeAttr( "aria-selected" )
            .removeAttr( "aria-controls" )
            .removeAttr( "tabIndex" )
            .each(function() {
                if ( /^ui-accordion/.test( this.id ) ) {
                    this.removeAttribute( "id" );
                }
            });
            this._destroyIcons();

            // clean up content panels
            contents = this.headers.next()
            .css( "display", "" )
            .removeAttr( "role" )
            .removeAttr( "aria-expanded" )
            .removeAttr( "aria-hidden" )
            .removeAttr( "aria-labelledby" )
            .removeClass( "ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled" )
            .each(function() {
                if ( /^ui-accordion/.test( this.id ) ) {
                    this.removeAttribute( "id" );
                }
            });
            if ( this.options.heightStyle !== "content" ) {
                contents.css( "height", "" );
            }
        },

        _setOption: function( key, value ) {
            if ( key === "active" ) {
                // _activate() will handle invalid values and update this.options
                this._activate( value );
                return;
            }

            if ( key === "event" ) {
                if ( this.options.event ) {
                    this._off( this.headers, this.options.event );
                }
                this._setupEvents( value );
            }

            this._super( key, value );

            // setting collapsible: false while collapsed; open first panel
            if ( key === "collapsible" && !value && this.options.active === false ) {
                this._activate( 0 );
            }

            if ( key === "icons" ) {
                this._destroyIcons();
                if ( value ) {
                    this._createIcons();
                }
            }

            // #5332 - opacity doesn't cascade to positioned elements in IE
            // so we need to add the disabled class to the headers and panels
            if ( key === "disabled" ) {
                this.headers.add( this.headers.next() )
                .toggleClass( "ui-state-disabled", !!value );
            }
        },

        _keydown: function( event ) {
            /*jshint maxcomplexity:15*/
            if ( event.altKey || event.ctrlKey ) {
                return;
            }

            var keyCode = $.ui.keyCode,
            length = this.headers.length,
            currentIndex = this.headers.index( event.target ),
            toFocus = false;

            switch ( event.keyCode ) {
            case keyCode.RIGHT:
            case keyCode.DOWN:
                toFocus = this.headers[ ( currentIndex + 1 ) % length ];
                break;
            case keyCode.LEFT:
            case keyCode.UP:
                toFocus = this.headers[ ( currentIndex - 1 + length ) % length ];
                break;
            case keyCode.SPACE:
            case keyCode.ENTER:
                this._eventHandler( event );
                break;
            case keyCode.HOME:
                toFocus = this.headers[ 0 ];
                break;
            case keyCode.END:
                toFocus = this.headers[ length - 1 ];
                break;
            }

            if ( toFocus ) {
                $( event.target ).attr( "tabIndex", - 1 );
                $( toFocus ).attr( "tabIndex", 0 );
                toFocus.focus();
                event.preventDefault();
            }
        },

        _panelKeyDown : function( event ) {
            if ( event.keyCode === $.ui.keyCode.UP && event.ctrlKey ) {
                $( event.currentTarget ).prev().focus();
            }
        },

        refresh: function() {
            var options = this.options;
            this._processPanels();

            // was collapsed or no panel
            if ( ( options.active === false && options.collapsible === true ) || !this.headers.length ) {
                options.active = false;
                this.active = $();
                // active false only when collapsible is true
            } else if ( options.active === false ) {
                this._activate( 0 );
                // was active, but active panel is gone
            } else if ( this.active.length && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
                // all remaining panel are disabled
                if ( this.headers.length === this.headers.find(".ui-state-disabled").length ) {
                    options.active = false;
                    this.active = $();
                    // activate previous panel
                } else {
                    this._activate( Math.max( 0, options.active - 1 ) );
                }
                // was active, active panel still exists
            } else {
                // make sure active index is correct
                options.active = this.headers.index( this.active );
            }

            this._destroyIcons();

            this._refresh();
        },

        _processPanels: function() {
            this.headers = this.element.find( this.options.header )
            .addClass( "ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" );

            this.headers.next()
            .addClass( "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" )
            .filter(":not(.ui-accordion-content-active)")
            .hide();
        },

        _refresh: function() {
            var maxHeight,
            options = this.options,
            heightStyle = options.heightStyle,
            parent = this.element.parent(),
            accordionId = this.accordionId = "ui-accordion-" +
            (this.element.attr( "id" ) || ++uid);

            this.active = this._findActive( options.active )
            .addClass( "ui-accordion-header-active ui-state-active ui-corner-top" )
            .removeClass( "ui-corner-all" );
            this.active.next()
            .addClass( "ui-accordion-content-active" )
            .show();

            this.headers
            .attr( "role", "tab" )
            .each(function( i ) {
                var header = $( this ),
                headerId = header.attr( "id" ),
                panel = header.next(),
                panelId = panel.attr( "id" );
                if ( !headerId ) {
                    headerId = accordionId + "-header-" + i;
                    header.attr( "id", headerId );
                }
                if ( !panelId ) {
                    panelId = accordionId + "-panel-" + i;
                    panel.attr( "id", panelId );
                }
                header.attr( "aria-controls", panelId );
                panel.attr( "aria-labelledby", headerId );
            })
            .next()
            .attr( "role", "tabpanel" );

            this.headers
            .not( this.active )
            .attr({
                "aria-selected": "false",
                tabIndex: - 1
            })
            .next()
            .attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            })
            .hide();

            // make sure at least one header is in the tab order
            if ( !this.active.length ) {
                this.headers.eq( 0 ).attr( "tabIndex", 0 );
            } else {
                this.active.attr({
                    "aria-selected": "true",
                    tabIndex: 0
                })
                .next()
                .attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                });
            }

            this._createIcons();

            this._setupEvents( options.event );

            if ( heightStyle === "fill" ) {
                maxHeight = parent.height();
                this.element.siblings( ":visible" ).each(function() {
                    var elem = $( this ),
                    position = elem.css( "position" );

                    if ( position === "absolute" || position === "fixed" ) {
                        return;
                    }
                    maxHeight -= elem.outerHeight( true );
                });

                this.headers.each(function() {
                    maxHeight -= $( this ).outerHeight( true );
                });

                this.headers.next()
                .each(function() {
                    $( this ).height( Math.max( 0, maxHeight -
                    $( this ).innerHeight() + $( this ).height() ) );
                })
                .css( "overflow", "auto" );
            } else if ( heightStyle === "auto" ) {
                maxHeight = 0;
                this.headers.next()
                .each(function() {
                    maxHeight = Math.max( maxHeight, $( this ).css( "height", "" ).height() );
                })
                .height( maxHeight );
            }
        },

        _activate: function( index ) {
            var active = this._findActive( index )[ 0 ];

            // trying to activate the already active panel
            if ( active === this.active[ 0 ] ) {
                return;
            }

            // trying to collapse, simulate a click on the currently active header
            active = active || this.active[ 0 ];

            this._eventHandler({
                target: active,
                currentTarget: active,
                preventDefault: $.noop
            });
        },

        _findActive: function( selector ) {
            return typeof selector === "number" ? this.headers.eq( selector ) : $();
        },

        _setupEvents: function( event ) {
            var events = {
                keydown: "_keydown"
            };
            if ( event ) {
                $.each( event.split(" "), function( index, eventName ) {
                    events[ eventName ] = "_eventHandler";
                });
            }

            this._off( this.headers.add( this.headers.next() ) );
            this._on( this.headers, events );
            this._on( this.headers.next(), {
                keydown: "_panelKeyDown" 
            });
            this._hoverable( this.headers );
            this._focusable( this.headers );
        },

        _eventHandler: function( event ) {
            var options = this.options,
            active = this.active,
            clicked = $( event.currentTarget ),
            clickedIsActive = clicked[ 0 ] === active[ 0 ],
            collapsing = clickedIsActive && options.collapsible,
            toShow = collapsing ? $() : clicked.next(),
            toHide = active.next(),
            eventData = {
                oldHeader: active,
                oldPanel: toHide,
                newHeader: collapsing ? $() : clicked,
                newPanel: toShow
            };

            event.preventDefault();

            if (
            // click on active header, but not collapsible
            ( clickedIsActive && !options.collapsible ) ||
            // allow canceling activation
            ( this._trigger( "beforeActivate", event, eventData ) === false ) ) {
                return;
            }

            options.active = collapsing ? false : this.headers.index( clicked );

            // when the call to ._toggle() comes after the class changes
            // it causes a very odd bug in IE 8 (see #6720)
            this.active = clickedIsActive ? $() : clicked;
            this._toggle( eventData );

            // switch classes
            // corner classes on the previously active header stay after the animation
            active.removeClass( "ui-accordion-header-active ui-state-active" );
            if ( options.icons ) {
                active.children( ".ui-accordion-header-icon" )
                .removeClass( options.icons.activeHeader )
                .addClass( options.icons.header );
            }

            if ( !clickedIsActive ) {
                clicked
                .removeClass( "ui-corner-all" )
                .addClass( "ui-accordion-header-active ui-state-active ui-corner-top" );
                if ( options.icons ) {
                    clicked.children( ".ui-accordion-header-icon" )
                    .removeClass( options.icons.header )
                    .addClass( options.icons.activeHeader );
                }

                clicked
                .next()
                .addClass( "ui-accordion-content-active" );
            }
        },

        _toggle: function( data ) {
            var toShow = data.newPanel,
            toHide = this.prevShow.length ? this.prevShow : data.oldPanel;

            // handle activating a panel during the animation for another activation
            this.prevShow.add( this.prevHide ).stop( true, true );
            this.prevShow = toShow;
            this.prevHide = toHide;

            if ( this.options.animate ) {
                this._animate( toShow, toHide, data );
            } else {
                toHide.hide();
                toShow.show();
                this._toggleComplete( data );
            }

            toHide.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            });
            toHide.prev().attr( "aria-selected", "false" );
            // if we're switching panels, remove the old header from the tab order
            // if we're opening from collapsed state, remove the previous header from the tab order
            // if we're collapsing, then keep the collapsing header in the tab order
            if ( toShow.length && toHide.length ) {
                toHide.prev().attr( "tabIndex", - 1 );
            } else if ( toShow.length ) {
                this.headers.filter(function() {
                    return $( this ).attr( "tabIndex" ) === 0;
                })
                .attr( "tabIndex", - 1 );
            }

            toShow
            .attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })
            .prev()
            .attr({
                "aria-selected": "true",
                tabIndex: 0
            });
        },

        _animate: function( toShow, toHide, data ) {
            var total, easing, duration,
            that = this,
            adjust = 0,
            down = toShow.length &&
            ( !toHide.length || ( toShow.index() < toHide.index() ) ),
            animate = this.options.animate || {},
            options = down && animate.down || animate,
            complete = function() {
                that._toggleComplete( data );
            };

            if ( typeof options === "number" ) {
                duration = options;
            }
            if ( typeof options === "string" ) {
                easing = options;
            }
            // fall back from options to animation in case of partial down settings
            easing = easing || options.easing || animate.easing;
            duration = duration || options.duration || animate.duration;

            if ( !toHide.length ) {
                return toShow.animate( showProps, duration, easing, complete );
            }
            if ( !toShow.length ) {
                return toHide.animate( hideProps, duration, easing, complete );
            }

            total = toShow.show().outerHeight();
            toHide.animate( hideProps, {
                duration: duration,
                easing: easing,
                step: function( now, fx ) {
                    fx.now = Math.round( now );
                }
            });
            toShow
            .hide()
            .animate( showProps, {
                duration: duration,
                easing: easing,
                complete: complete,
                step: function( now, fx ) {
                    fx.now = Math.round( now );
                    if ( fx.prop !== "height" ) {
                        adjust += fx.now;
                    } else if ( that.options.heightStyle !== "content" ) {
                        fx.now = Math.round( total - toHide.outerHeight() - adjust );
                        adjust = 0;
                    }
                }
            });
        },

        _toggleComplete: function( data ) {
            var toHide = data.oldPanel;

            toHide
            .removeClass( "ui-accordion-content-active" )
            .prev()
            .removeClass( "ui-corner-top" )
            .addClass( "ui-corner-all" );

            // Work around for rendering bug in IE (#5421)
            if ( toHide.length ) {
                toHide.parent()[0].className = toHide.parent()[0].className;
            }

            this._trigger( "activate", null, data );
        }
    });

})( jQuery );

(function( $, undefined ) {

    // used to prevent race conditions with remote data sources
    var requestIndex = 0;

    $.widget( "ui.autocomplete", {
        version: "1.10.3",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: false,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,

            // callbacks
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },

        pending: 0,

        _create: function() {
            // Some browsers only repeat keydown events, not keypress events,
            // so we use the suppressKeyPress flag to determine if we've already
            // handled the keydown event. #7269
            // Unfortunately the code for & in keypress is the same as the up arrow,
            // so we use the suppressKeyPressRepeat flag to avoid handling keypress
            // events when we know the keydown event was used to modify the
            // search term. #7799
            var suppressKeyPress, suppressKeyPressRepeat, suppressInput,
            nodeName = this.element[0].nodeName.toLowerCase(),
            isTextarea = nodeName === "textarea",
            isInput = nodeName === "input";

            this.isMultiLine =
            // Textareas are always multi-line
            isTextarea ? true :
            // Inputs are always single-line, even if inside a contentEditable element
            // IE also treats inputs as contentEditable
            isInput ? false :
            // All other element types are determined by whether or not they're contentEditable
            this.element.prop( "isContentEditable" );

            this.valueMethod = this.element[ isTextarea || isInput ? "val" : "text" ];
            this.isNewMenu = true;

            this.element
            .addClass( "ui-autocomplete-input" )
            .attr( "autocomplete", "off" );

            this._on( this.element, {
                keydown: function( event ) {
                    /*jshint maxcomplexity:15*/
                    if ( this.element.prop( "readOnly" ) ) {
                        suppressKeyPress = true;
                        suppressInput = true;
                        suppressKeyPressRepeat = true;
                        return;
                    }

                    suppressKeyPress = false;
                    suppressInput = false;
                    suppressKeyPressRepeat = false;
                    var keyCode = $.ui.keyCode;
                    switch ( event.keyCode ) {
                    case keyCode.PAGE_UP:
                        suppressKeyPress = true;
                        this._move( "previousPage", event );
                        break;
                    case keyCode.PAGE_DOWN:
                        suppressKeyPress = true;
                        this._move( "nextPage", event );
                        break;
                    case keyCode.UP:
                        suppressKeyPress = true;
                        this._keyEvent( "previous", event );
                        break;
                    case keyCode.DOWN:
                        suppressKeyPress = true;
                        this._keyEvent( "next", event );
                        break;
                    case keyCode.ENTER:
                    case keyCode.NUMPAD_ENTER:
                        // when menu is open and has focus
                        if ( this.menu.active ) {
                            // #6055 - Opera still allows the keypress to occur
                            // which causes forms to submit
                            suppressKeyPress = true;
                            event.preventDefault();
                            this.menu.select( event );
                        }
                        break;
                    case keyCode.TAB:
                        if ( this.menu.active ) {
                            this.menu.select( event );
                        }
                        break;
                    case keyCode.ESCAPE:
                        if ( this.menu.element.is( ":visible" ) ) {
                            this._value( this.term );
                            this.close( event );
                            // Different browsers have different default behavior for escape
                            // Single press can mean undo or clear
                            // Double press in IE means clear the whole form
                            event.preventDefault();
                        }
                        break;
                    default:
                        suppressKeyPressRepeat = true;
                        // search timeout should be triggered before the input value is changed
                        this._searchTimeout( event );
                        break;
                    }
                },
                keypress: function( event ) {
                    if ( suppressKeyPress ) {
                        suppressKeyPress = false;
                        if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
                            event.preventDefault();
                        }
                        return;
                    }
                    if ( suppressKeyPressRepeat ) {
                        return;
                    }

                    // replicate some key handlers to allow them to repeat in Firefox and Opera
                    var keyCode = $.ui.keyCode;
                    switch ( event.keyCode ) {
                    case keyCode.PAGE_UP:
                        this._move( "previousPage", event );
                        break;
                    case keyCode.PAGE_DOWN:
                        this._move( "nextPage", event );
                        break;
                    case keyCode.UP:
                        this._keyEvent( "previous", event );
                        break;
                    case keyCode.DOWN:
                        this._keyEvent( "next", event );
                        break;
                    }
                },
                input: function( event ) {
                    if ( suppressInput ) {
                        suppressInput = false;
                        event.preventDefault();
                        return;
                    }
                    this._searchTimeout( event );
                },
                focus: function() {
                    this.selectedItem = null;
                    this.previous = this._value();
                },
                blur: function( event ) {
                    if ( this.cancelBlur ) {
                        delete this.cancelBlur;
                        return;
                    }

                    clearTimeout( this.searching );
                    this.close( event );
                    this._change( event );
                }
            });

            this._initSource();
            this.menu = $( "<ul>" )
            .addClass( "ui-autocomplete ui-front" )
            .appendTo( this._appendTo() )
            .menu({
                // disable ARIA support, the live region takes care of that
                role: null
            })
            .hide()
            .data( "ui-menu" );

            this._on( this.menu.element, {
                mousedown: function( event ) {
                    // prevent moving focus out of the text field
                    event.preventDefault();

                    // IE doesn't prevent moving focus even with event.preventDefault()
                    // so we set a flag to know when we should ignore the blur event
                    this.cancelBlur = true;
                    this._delay(function() {
                        delete this.cancelBlur;
                    });

                    // clicking on the scrollbar causes focus to shift to the body
                    // but we can't detect a mouseup or a click immediately afterward
                    // so we have to track the next mousedown and close the menu if
                    // the user clicks somewhere outside of the autocomplete
                    var menuElement = this.menu.element[ 0 ];
                    if ( !$( event.target ).closest( ".ui-menu-item" ).length ) {
                        this._delay(function() {
                            var that = this;
                            this.document.one( "mousedown", function( event ) {
                                if ( event.target !== that.element[ 0 ] &&
                                event.target !== menuElement &&
                                !$.contains( menuElement, event.target ) ) {
                                    that.close();
                                }
                            });
                        });
                    }
                },
                menufocus: function( event, ui ) {
                    // support: Firefox
                    // Prevent accidental activation of menu items in Firefox (#7024 #9118)
                    if ( this.isNewMenu ) {
                        this.isNewMenu = false;
                        if ( event.originalEvent && /^mouse/.test( event.originalEvent.type ) ) {
                            this.menu.blur();

                            this.document.one( "mousemove", function() {
                                $( event.target ).trigger( event.originalEvent );
                            });

                            return;
                        }
                    }

                    var item = ui.item.data( "ui-autocomplete-item" );
                    if ( false !== this._trigger( "focus", event, {
                        item: item 
                    }) ) {
                        // use value to match what will end up in the input, if it was a key event
                        if ( event.originalEvent && /^key/.test( event.originalEvent.type ) ) {
                            this._value( item.value );
                        }
                    } else {
                        // Normally the input is populated with the item's value as the
                        // menu is navigated, causing screen readers to notice a change and
                        // announce the item. Since the focus event was canceled, this doesn't
                        // happen, so we update the live region so that screen readers can
                        // still notice the change and announce it.
                        this.liveRegion.text( item.value );
                    }
                },
                menuselect: function( event, ui ) {
                    var item = ui.item.data( "ui-autocomplete-item" ),
                    previous = this.previous;

                    // only trigger when focus was lost (click on menu)
                    if ( this.element[0] !== this.document[0].activeElement ) {
                        this.element.focus();
                        this.previous = previous;
                        // #6109 - IE triggers two focus events and the second
                        // is asynchronous, so we need to reset the previous
                        // term synchronously and asynchronously :-(
                        this._delay(function() {
                            this.previous = previous;
                            this.selectedItem = item;
                        });
                    }

                    if ( false !== this._trigger( "select", event, {
                        item: item 
                    }) ) {
                        this._value( item.value );
                    }
                    // reset the term after the select event
                    // this allows custom select handling to work properly
                    this.term = this._value();

                    this.close( event );
                    this.selectedItem = item;
                }
            });

            this.liveRegion = $( "<span>", {
                role: "status",
                "aria-live": "polite"
            })
            .addClass( "ui-helper-hidden-accessible" )
            .insertBefore( this.element );

            // turning off autocomplete prevents the browser from remembering the
            // value when navigating through history, so we re-enable autocomplete
            // if the page is unloaded before the widget is destroyed. #7790
            this._on( this.window, {
                beforeunload: function() {
                    this.element.removeAttr( "autocomplete" );
                }
            });
        },

        _destroy: function() {
            clearTimeout( this.searching );
            this.element
            .removeClass( "ui-autocomplete-input" )
            .removeAttr( "autocomplete" );
            this.menu.element.remove();
            this.liveRegion.remove();
        },

        _setOption: function( key, value ) {
            this._super( key, value );
            if ( key === "source" ) {
                this._initSource();
            }
            if ( key === "appendTo" ) {
                this.menu.element.appendTo( this._appendTo() );
            }
            if ( key === "disabled" && value && this.xhr ) {
                this.xhr.abort();
            }
        },

        _appendTo: function() {
            var element = this.options.appendTo;

            if ( element ) {
                element = element.jquery || element.nodeType ?
                $( element ) :
                this.document.find( element ).eq( 0 );
            }

            if ( !element ) {
                element = this.element.closest( ".ui-front" );
            }

            if ( !element.length ) {
                element = this.document[0].body;
            }

            return element;
        },

        _initSource: function() {
            var array, url,
            that = this;
            if ( $.isArray(this.options.source) ) {
                array = this.options.source;
                this.source = function( request, response ) {
                    response( $.ui.autocomplete.filter( array, request.term ) );
                };
            } else if ( typeof this.options.source === "string" ) {
                url = this.options.source;
                this.source = function( request, response ) {
                    if ( that.xhr ) {
                        that.xhr.abort();
                    }
                    that.xhr = $.ajax({
                        url: url,
                        data: request,
                        dataType: "json",
                        success: function( data ) {
                            response( data );
                        },
                        error: function() {
                            response( [] );
                        }
                    });
                };
            } else {
                this.source = this.options.source;
            }
        },

        _searchTimeout: function( event ) {
            clearTimeout( this.searching );
            this.searching = this._delay(function() {
                // only search if the value has changed
                if ( this.term !== this._value() ) {
                    this.selectedItem = null;
                    this.search( null, event );
                }
            }, this.options.delay );
        },

        search: function( value, event ) {
            value = value != null ? value : this._value();

            // always save the actual value, not the one passed as an argument
            this.term = this._value();

            if ( value.length < this.options.minLength ) {
                return this.close( event );
            }

            if ( this._trigger( "search", event ) === false ) {
                return;
            }

            return this._search( value );
        },

        _search: function( value ) {
            this.pending++;
            this.element.addClass( "ui-autocomplete-loading" );
            this.cancelSearch = false;

            this.source( {
                term: value 
            }, this._response() );
        },

        _response: function() {
            var that = this,
            index = ++requestIndex;

            return function( content ) {
                if ( index === requestIndex ) {
                    that.__response( content );
                }

                that.pending--;
                if ( !that.pending ) {
                    that.element.removeClass( "ui-autocomplete-loading" );
                }
            };
        },

        __response: function( content ) {
            if ( content ) {
                content = this._normalize( content );
            }
            this._trigger( "response", null, {
                content: content 
            });
            if ( !this.options.disabled && content && content.length && !this.cancelSearch ) {
                this._suggest( content );
                this._trigger( "open" );
            } else {
                // use ._close() instead of .close() so we don't cancel future searches
                this._close();
            }
        },

        close: function( event ) {
            this.cancelSearch = true;
            this._close( event );
        },

        _close: function( event ) {
            if ( this.menu.element.is( ":visible" ) ) {
                this.menu.element.hide();
                this.menu.blur();
                this.isNewMenu = true;
                this._trigger( "close", event );
            }
        },

        _change: function( event ) {
            if ( this.previous !== this._value() ) {
                this._trigger( "change", event, {
                    item: this.selectedItem 
                });
            }
        },

        _normalize: function( items ) {
            // assume all items have the right format when the first item is complete
            if ( items.length && items[0].label && items[0].value ) {
                return items;
            }
            return $.map( items, function( item ) {
                if ( typeof item === "string" ) {
                    return {
                        label: item,
                        value: item
                    };
                }
                return $.extend({
                    label: item.label || item.value,
                    value: item.value || item.label
                }, item );
            });
        },

        _suggest: function( items ) {
            var ul = this.menu.element.empty();
            this._renderMenu( ul, items );
            this.isNewMenu = true;
            this.menu.refresh();

            // size and position menu
            ul.show();
            this._resizeMenu();
            ul.position( $.extend({
                of: this.element
            }, this.options.position ));

            if ( this.options.autoFocus ) {
                this.menu.next();
            }
        },

        _resizeMenu: function() {
            var ul = this.menu.element;
            ul.outerWidth( Math.max(
            // Firefox wraps long text (possibly a rounding bug)
            // so we add 1px to avoid the wrapping (#7513)
            ul.width( "" ).outerWidth() + 1,
            this.element.outerWidth()
            ) );
        },

        _renderMenu: function( ul, items ) {
            var that = this;
            $.each( items, function( index, item ) {
                that._renderItemData( ul, item );
            });
        },

        _renderItemData: function( ul, item ) {
            return this._renderItem( ul, item ).data( "ui-autocomplete-item", item );
        },

        _renderItem: function( ul, item ) {
            return $( "<li>" )
            .append( $( "<a>" ).text( item.label ) )
            .appendTo( ul );
        },

        _move: function( direction, event ) {
            if ( !this.menu.element.is( ":visible" ) ) {
                this.search( null, event );
                return;
            }
            if ( this.menu.isFirstItem() && /^previous/.test( direction ) ||
            this.menu.isLastItem() && /^next/.test( direction ) ) {
                this._value( this.term );
                this.menu.blur();
                return;
            }
            this.menu[ direction ]( event );
        },

        widget: function() {
            return this.menu.element;
        },

        _value: function() {
            return this.valueMethod.apply( this.element, arguments );
        },

        _keyEvent: function( keyEvent, event ) {
            if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
                this._move( keyEvent, event );

                // prevents moving cursor to beginning/end of the text field in some browsers
                event.preventDefault();
            }
        }
    });

    $.extend( $.ui.autocomplete, {
        escapeRegex: function( value ) {
            return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function(array, term) {
            var matcher = new RegExp( $.ui.autocomplete.escapeRegex(term), "i" );
            return $.grep( array, function(value) {
                return matcher.test( value.label || value.value || value );
            });
        }
    });


    // live region extension, adding a `messages` option
    // NOTE: This is an experimental API. We are still investigating
    // a full solution for string manipulation and internationalization.
    $.widget( "ui.autocomplete", $.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function( amount ) {
                    return amount + ( amount > 1 ? " results are" : " result is" ) +
                    " available, use up and down arrow keys to navigate.";
                }
            }
        },

        __response: function( content ) {
            var message;
            this._superApply( arguments );
            if ( this.options.disabled || this.cancelSearch ) {
                return;
            }
            if ( content && content.length ) {
                message = this.options.messages.results( content.length );
            } else {
                message = this.options.messages.noResults;
            }
            this.liveRegion.text( message );
        }
    });

}( jQuery ));

(function( $, undefined ) {

    var lastActive, startXPos, startYPos, clickDragged,
    baseClasses = "ui-button ui-widget ui-state-default ui-corner-all",
    stateClasses = "ui-state-hover ui-state-active ",
    typeClasses = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
    formResetHandler = function() {
        var form = $( this );
        setTimeout(function() {
            form.find( ":ui-button" ).button( "refresh" );
        }, 1 );
    },
    radioGroup = function( radio ) {
        var name = radio.name,
        form = radio.form,
        radios = $( [] );
        if ( name ) {
            name = name.replace( /'/g, "\\'" );
            if ( form ) {
                radios = $( form ).find( "[name='" + name + "']" );
            } else {
                radios = $( "[name='" + name + "']", radio.ownerDocument )
                .filter(function() {
                    return !this.form;
                });
            }
        }
        return radios;
    };

    $.widget( "ui.button", {
        version: "1.10.3",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: true,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest( "form" )
            .unbind( "reset" + this.eventNamespace )
            .bind( "reset" + this.eventNamespace, formResetHandler );

            if ( typeof this.options.disabled !== "boolean" ) {
                this.options.disabled = !!this.element.prop( "disabled" );
            } else {
                this.element.prop( "disabled", this.options.disabled );
            }

            this._determineButtonType();
            this.hasTitle = !!this.buttonElement.attr( "title" );

            var that = this,
            options = this.options,
            toggleButton = this.type === "checkbox" || this.type === "radio",
            activeClass = !toggleButton ? "ui-state-active" : "",
            focusClass = "ui-state-focus";

            if ( options.label === null ) {
                options.label = (this.type === "input" ? this.buttonElement.val() : this.buttonElement.html());
            }

            this._hoverable( this.buttonElement );

            this.buttonElement
            .addClass( baseClasses )
            .attr( "role", "button" )
            .bind( "mouseenter" + this.eventNamespace, function() {
                if ( options.disabled ) {
                    return;
                }
                if ( this === lastActive ) {
                    $( this ).addClass( "ui-state-active" );
                }
            })
            .bind( "mouseleave" + this.eventNamespace, function() {
                if ( options.disabled ) {
                    return;
                }
                $( this ).removeClass( activeClass );
            })
            .bind( "click" + this.eventNamespace, function( event ) {
                if ( options.disabled ) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                }
            });

            this.element
            .bind( "focus" + this.eventNamespace, function() {
                // no need to check disabled, focus won't be triggered anyway
                that.buttonElement.addClass( focusClass );
            })
            .bind( "blur" + this.eventNamespace, function() {
                that.buttonElement.removeClass( focusClass );
            });

            if ( toggleButton ) {
                this.element.bind( "change" + this.eventNamespace, function() {
                    if ( clickDragged ) {
                        return;
                    }
                    that.refresh();
                });
                // if mouse moves between mousedown and mouseup (drag) set clickDragged flag
                // prevents issue where button state changes but checkbox/radio checked state
                // does not in Firefox (see ticket #6970)
                this.buttonElement
                .bind( "mousedown" + this.eventNamespace, function( event ) {
                    if ( options.disabled ) {
                        return;
                    }
                    clickDragged = false;
                    startXPos = event.pageX;
                    startYPos = event.pageY;
                })
                .bind( "mouseup" + this.eventNamespace, function( event ) {
                    if ( options.disabled ) {
                        return;
                    }
                    if ( startXPos !== event.pageX || startYPos !== event.pageY ) {
                        clickDragged = true;
                    }
                });
            }

            if ( this.type === "checkbox" ) {
                this.buttonElement.bind( "click" + this.eventNamespace, function() {
                    if ( options.disabled || clickDragged ) {
                        return false;
                    }
                });
            } else if ( this.type === "radio" ) {
                this.buttonElement.bind( "click" + this.eventNamespace, function() {
                    if ( options.disabled || clickDragged ) {
                        return false;
                    }
                    $( this ).addClass( "ui-state-active" );
                    that.buttonElement.attr( "aria-pressed", "true" );

                    var radio = that.element[ 0 ];
                    radioGroup( radio )
                    .not( radio )
                    .map(function() {
                        return $( this ).button( "widget" )[ 0 ];
                    })
                    .removeClass( "ui-state-active" )
                    .attr( "aria-pressed", "false" );
                });
            } else {
                this.buttonElement
                .bind( "mousedown" + this.eventNamespace, function() {
                    if ( options.disabled ) {
                        return false;
                    }
                    $( this ).addClass( "ui-state-active" );
                    lastActive = this;
                    that.document.one( "mouseup", function() {
                        lastActive = null;
                    });
                })
                .bind( "mouseup" + this.eventNamespace, function() {
                    if ( options.disabled ) {
                        return false;
                    }
                    $( this ).removeClass( "ui-state-active" );
                })
                .bind( "keydown" + this.eventNamespace, function(event) {
                    if ( options.disabled ) {
                        return false;
                    }
                    if ( event.keyCode === $.ui.keyCode.SPACE || event.keyCode === $.ui.keyCode.ENTER ) {
                        $( this ).addClass( "ui-state-active" );
                    }
                })
                // see #8559, we bind to blur here in case the button element loses
                // focus between keydown and keyup, it would be left in an "active" state
                .bind( "keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                    $( this ).removeClass( "ui-state-active" );
                });

                if ( this.buttonElement.is("a") ) {
                    this.buttonElement.keyup(function(event) {
                        if ( event.keyCode === $.ui.keyCode.SPACE ) {
                            // TODO pass through original event correctly (just as 2nd argument doesn't work)
                            $( this ).click();
                        }
                    });
                }
            }

            // TODO: pull out $.Widget's handling for the disabled option into
            // $.Widget.prototype._setOptionDisabled so it's easy to proxy and can
            // be overridden by individual plugins
            this._setOption( "disabled", options.disabled );
            this._resetButton();
        },

        _determineButtonType: function() {
            var ancestor, labelSelector, checked;

            if ( this.element.is("[type=checkbox]") ) {
                this.type = "checkbox";
            } else if ( this.element.is("[type=radio]") ) {
                this.type = "radio";
            } else if ( this.element.is("input") ) {
                this.type = "input";
            } else {
                this.type = "button";
            }

            if ( this.type === "checkbox" || this.type === "radio" ) {
                // we don't search against the document in case the element
                // is disconnected from the DOM
                ancestor = this.element.parents().last();
                labelSelector = "label[for='" + this.element.attr("id") + "']";
                this.buttonElement = ancestor.find( labelSelector );
                if ( !this.buttonElement.length ) {
                    ancestor = ancestor.length ? ancestor.siblings() : this.element.siblings();
                    this.buttonElement = ancestor.filter( labelSelector );
                    if ( !this.buttonElement.length ) {
                        this.buttonElement = ancestor.find( labelSelector );
                    }
                }
                this.element.addClass( "ui-helper-hidden-accessible" );

                checked = this.element.is( ":checked" );
                if ( checked ) {
                    this.buttonElement.addClass( "ui-state-active" );
                }
                this.buttonElement.prop( "aria-pressed", checked );
            } else {
                this.buttonElement = this.element;
            }
        },

        widget: function() {
            return this.buttonElement;
        },

        _destroy: function() {
            this.element
            .removeClass( "ui-helper-hidden-accessible" );
            this.buttonElement
            .removeClass( baseClasses + " " + stateClasses + " " + typeClasses )
            .removeAttr( "role" )
            .removeAttr( "aria-pressed" )
            .html( this.buttonElement.find(".ui-button-text").html() );

            if ( !this.hasTitle ) {
                this.buttonElement.removeAttr( "title" );
            }
        },

        _setOption: function( key, value ) {
            this._super( key, value );
            if ( key === "disabled" ) {
                if ( value ) {
                    this.element.prop( "disabled", true );
                } else {
                    this.element.prop( "disabled", false );
                }
                return;
            }
            this._resetButton();
        },

        refresh: function() {
            //See #8237 & #8828
            var isDisabled = this.element.is( "input, button" ) ? this.element.is( ":disabled" ) : this.element.hasClass( "ui-button-disabled" );

            if ( isDisabled !== this.options.disabled ) {
                this._setOption( "disabled", isDisabled );
            }
            if ( this.type === "radio" ) {
                radioGroup( this.element[0] ).each(function() {
                    if ( $( this ).is( ":checked" ) ) {
                        $( this ).button( "widget" )
                        .addClass( "ui-state-active" )
                        .attr( "aria-pressed", "true" );
                    } else {
                        $( this ).button( "widget" )
                        .removeClass( "ui-state-active" )
                        .attr( "aria-pressed", "false" );
                    }
                });
            } else if ( this.type === "checkbox" ) {
                if ( this.element.is( ":checked" ) ) {
                    this.buttonElement
                    .addClass( "ui-state-active" )
                    .attr( "aria-pressed", "true" );
                } else {
                    this.buttonElement
                    .removeClass( "ui-state-active" )
                    .attr( "aria-pressed", "false" );
                }
            }
        },

        _resetButton: function() {
            if ( this.type === "input" ) {
                if ( this.options.label ) {
                    this.element.val( this.options.label );
                }
                return;
            }
            var buttonElement = this.buttonElement.removeClass( typeClasses ),
            buttonText = $( "<span></span>", this.document[0] )
            .addClass( "ui-button-text" )
            .html( this.options.label )
            .appendTo( buttonElement.empty() )
            .text(),
            icons = this.options.icons,
            multipleIcons = icons.primary && icons.secondary,
            buttonClasses = [];

            if ( icons.primary || icons.secondary ) {
                if ( this.options.text ) {
                    buttonClasses.push( "ui-button-text-icon" + ( multipleIcons ? "s" : ( icons.primary ? "-primary" : "-secondary" ) ) );
                }

                if ( icons.primary ) {
                    buttonElement.prepend( "<span class='ui-button-icon-primary ui-icon " + icons.primary + "'></span>" );
                }

                if ( icons.secondary ) {
                    buttonElement.append( "<span class='ui-button-icon-secondary ui-icon " + icons.secondary + "'></span>" );
                }

                if ( !this.options.text ) {
                    buttonClasses.push( multipleIcons ? "ui-button-icons-only" : "ui-button-icon-only" );

                    if ( !this.hasTitle ) {
                        buttonElement.attr( "title", $.trim( buttonText ) );
                    }
                }
            } else {
                buttonClasses.push( "ui-button-text-only" );
            }
            buttonElement.addClass( buttonClasses.join( " " ) );
        }
    });

    $.widget( "ui.buttonset", {
        version: "1.10.3",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },

        _create: function() {
            this.element.addClass( "ui-buttonset" );
        },

        _init: function() {
            this.refresh();
        },

        _setOption: function( key, value ) {
            if ( key === "disabled" ) {
                this.buttons.button( "option", key, value );
            }

            this._super( key, value );
        },

        refresh: function() {
            var rtl = this.element.css( "direction" ) === "rtl";

            this.buttons = this.element.find( this.options.items )
            .filter( ":ui-button" )
            .button( "refresh" )
            .end()
            .not( ":ui-button" )
            .button()
            .end()
            .map(function() {
                return $( this ).button( "widget" )[ 0 ];
            })
            .removeClass( "ui-corner-all ui-corner-left ui-corner-right" )
            .filter( ":first" )
            .addClass( rtl ? "ui-corner-right" : "ui-corner-left" )
            .end()
            .filter( ":last" )
            .addClass( rtl ? "ui-corner-left" : "ui-corner-right" )
            .end()
            .end();
        },

        _destroy: function() {
            this.element.removeClass( "ui-buttonset" );
            this.buttons
            .map(function() {
                return $( this ).button( "widget" )[ 0 ];
            })
            .removeClass( "ui-corner-left ui-corner-right" )
            .end()
            .button( "destroy" );
        }
    });

}( jQuery ) );

(function( $, undefined ) {

    $.extend($.ui, {
        datepicker: {
            version: "1.10.3" 
        }
    });

    var PROP_NAME = "datepicker",
    instActive;

    /* Date picker manager.
       Use the singleton instance of this class, $.datepicker, to interact with the date picker.
       Settings for (groups of) date pickers are maintained in an instance object,
       allowing multiple different settings on the same page. */

    function Datepicker() {
        this._curInst = null; // The current instance in use
        this._keyEvent = false; // If the last event was a key event
        this._disabledInputs = []; // List of date picker inputs that have been disabled
        this._datepickerShowing = false; // True if the popup picker is showing , false if not
        this._inDialog = false; // True if showing within a "dialog", false if not
        this._mainDivId = "ui-datepicker-div"; // The ID of the main datepicker division
        this._inlineClass = "ui-datepicker-inline"; // The name of the inline marker class
        this._appendClass = "ui-datepicker-append"; // The name of the append marker class
        this._triggerClass = "ui-datepicker-trigger"; // The name of the trigger marker class
        this._dialogClass = "ui-datepicker-dialog"; // The name of the dialog marker class
        this._disableClass = "ui-datepicker-disabled"; // The name of the disabled covering marker class
        this._unselectableClass = "ui-datepicker-unselectable"; // The name of the unselectable cell marker class
        this._currentClass = "ui-datepicker-current-day"; // The name of the current day marker class
        this._dayOverClass = "ui-datepicker-days-cell-over"; // The name of the day hover marker class
        this.regional = []; // Available regional settings, indexed by language code
        this.regional[""] = {
            // Default regional settings
            closeText: "Done",
            // Display text for close link
            prevText: "Prev",
            // Display text for previous month link
            nextText: "Next",
            // Display text for next month link
            currentText: "Today",
            // Display text for current month link
            monthNames: ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"],
            // Names of months for drop-down and formatting
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            // For formatting
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            // For formatting
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            // For formatting
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            // Column headings for days starting at Sunday
            weekHeader: "Wk",
            // Column header for week of the year
            dateFormat: "mm/dd/yy",
            // See format options on parseDate
            firstDay: 0,
            // The first day of the week, Sun = 0, Mon = 1, ...
            isRTL: false,
            // True if right-to-left language, false if left-to-right
            showMonthAfterYear: false,
            // True if the year select precedes month, false for month then year
            yearSuffix: "" // Additional text to append to the year in the month headers
        };
        this._defaults = {
            // Global defaults for all the date picker instances
            showOn: "focus",
            // "focus" for popup on focus,
            // "button" for trigger button, or "both" for either
            showAnim: "fadeIn",
            // Name of jQuery animation for popup
            showOptions: {},
            // Options for enhanced animations
            defaultDate: null,
            // Used when field is blank: actual date,
            // +/-number for offset from today, null for today
            appendText: "",
            // Display text following the input box, e.g. showing the format
            buttonText: "...",
            // Text for trigger button
            buttonImage: "",
            // URL for trigger button image
            buttonImageOnly: false,
            // True if the image appears alone, false if it appears on a button
            hideIfNoPrevNext: false,
            // True to hide next/previous month links
            // if not applicable, false to just disable them
            navigationAsDateFormat: false,
            // True if date formatting applied to prev/today/next links
            gotoCurrent: false,
            // True if today link goes back to current selection instead
            changeMonth: false,
            // True if month can be selected directly, false if only prev/next
            changeYear: false,
            // True if year can be selected directly, false if only prev/next
            yearRange: "c-10:c+10",
            // Range of years to display in drop-down,
            // either relative to today's year (-nn:+nn), relative to currently displayed year
            // (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
            showOtherMonths: false,
            // True to show dates in other months, false to leave blank
            selectOtherMonths: false,
            // True to allow selection of dates in other months, false for unselectable
            showWeek: false,
            // True to show week of the year, false to not show it
            calculateWeek: this.iso8601Week,
            // How to calculate the week of the year,
            // takes a Date and returns the number of the week for it
            shortYearCutoff: "+10",
            // Short year values < this are in the current century,
            // > this are in the previous century,
            // string value starting with "+" for current year + value
            minDate: null,
            // The earliest selectable date, or null for no limit
            maxDate: null,
            // The latest selectable date, or null for no limit
            duration: "fast",
            // Duration of display/closure
            beforeShowDay: null,
            // Function that takes a date and returns an array with
            // [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
            // [2] = cell title (optional), e.g. $.datepicker.noWeekends
            beforeShow: null,
            // Function that takes an input field and
            // returns a set of custom settings for the date picker
            onSelect: null,
            // Define a callback function when a date is selected
            onChangeMonthYear: null,
            // Define a callback function when the month or year is changed
            onClose: null,
            // Define a callback function when the datepicker is closed
            numberOfMonths: 1,
            // Number of months to show at a time
            showCurrentAtPos: 0,
            // The position in multipe months at which to show the current month (starting at 0)
            stepMonths: 1,
            // Number of months to step back/forward
            stepBigMonths: 12,
            // Number of months to step back/forward for the big links
            altField: "",
            // Selector for an alternate field to store selected dates into
            altFormat: "",
            // The date format to use for the alternate field
            constrainInput: true,
            // The input is constrained by the current date format
            showButtonPanel: false,
            // True to show button panel, false to not show it
            autoSize: false,
            // True to size the input for the date format, false to leave as is
            disabled: false // The initial disabled state
        };
        $.extend(this._defaults, this.regional[""]);
        this.dpDiv = bindHover($("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
    }

    $.extend(Datepicker.prototype, {
        /* Class name added to elements to indicate already configured with a date picker. */
        markerClassName: "hasDatepicker",

        //Keep track of the maximum number of rows displayed (see #7043)
        maxRows: 4,

        // TODO rename to "widget" when switching to widget factory
        _widgetDatepicker: function() {
            return this.dpDiv;
        },

        /* Override the default settings for all instances of the date picker.
        	 * @param  settings  object - the new settings to use as defaults (anonymous object)
        	 * @return the manager object
        	 */
        setDefaults: function(settings) {
            extendRemove(this._defaults, settings || {});
            return this;
        },

        /* Attach the date picker to a jQuery selection.
        	 * @param  target	element - the target input field or division or span
        	 * @param  settings  object - the new settings to use for this date picker instance (anonymous)
        	 */
        _attachDatepicker: function(target, settings) {
            var nodeName, inline, inst;
            nodeName = target.nodeName.toLowerCase();
            inline = (nodeName === "div" || nodeName === "span");
            if (!target.id) {
                this.uuid += 1;
                target.id = "dp" + this.uuid;
            }
            inst = this._newInst($(target), inline);
            inst.settings = $.extend({}, settings || {});
            if (nodeName === "input") {
                this._connectDatepicker(target, inst);
            } else if (inline) {
                this._inlineDatepicker(target, inst);
            }
        },

        /* Create a new instance object. */
        _newInst: function(target, inline) {
            var id = target[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); // escape jQuery meta chars
            return {
                id: id,
                input: target,
                // associated target
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                // current selection
                drawMonth: 0,
                drawYear: 0,
                // month being drawn
                inline: inline,
                // is datepicker inline or not
                dpDiv: (!inline ? this.dpDiv : // presentation div
                bindHover($("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))
            };
        },

        /* Attach the date picker to an input field. */
        _connectDatepicker: function(target, inst) {
            var input = $(target);
            inst.append = $([]);
            inst.trigger = $([]);
            if (input.hasClass(this.markerClassName)) {
                return;
            }
            this._attachments(input, inst);
            input.addClass(this.markerClassName).keydown(this._doKeyDown).
            keypress(this._doKeyPress).keyup(this._doKeyUp);
            this._autoSize(inst);
            $.data(target, PROP_NAME, inst);
            //If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
            if ( inst.settings.disabled ) {
                this._disableDatepicker( target );
            }
        },

        /* Make attachments based on settings. */
        _attachments: function(input, inst) {
            var showOn, buttonText, buttonImage,
            appendText = this._get(inst, "appendText"),
            isRTL = this._get(inst, "isRTL");

            if (inst.append) {
                inst.append.remove();
            }
            if (appendText) {
                inst.append = $("<span class='" + this._appendClass + "'>" + appendText + "</span>");
                input[isRTL ? "before" : "after"](inst.append);
            }

            input.unbind("focus", this._showDatepicker);

            if (inst.trigger) {
                inst.trigger.remove();
            }

            showOn = this._get(inst, "showOn");
            if (showOn === "focus" || showOn === "both") {
                // pop-up date picker when in the marked field
                input.focus(this._showDatepicker);
            }
            if (showOn === "button" || showOn === "both") {
                // pop-up date picker when button clicked
                buttonText = this._get(inst, "buttonText");
                buttonImage = this._get(inst, "buttonImage");
                inst.trigger = $(this._get(inst, "buttonImageOnly") ?
                $("<img/>").addClass(this._triggerClass).
                attr({
                    src: buttonImage,
                    alt: buttonText,
                    title: buttonText 
                }) :
                $("<button type='button'></button>").addClass(this._triggerClass).
                html(!buttonImage ? buttonText : $("<img/>").attr(
                {
                    src: buttonImage,
                    alt: buttonText,
                    title: buttonText 
                })));
                input[isRTL ? "before" : "after"](inst.trigger);
                inst.trigger.click(function() {
                    if ($.datepicker._datepickerShowing && $.datepicker._lastInput === input[0]) {
                        $.datepicker._hideDatepicker();
                    } else if ($.datepicker._datepickerShowing && $.datepicker._lastInput !== input[0]) {
                        $.datepicker._hideDatepicker();
                        $.datepicker._showDatepicker(input[0]);
                    } else {
                        $.datepicker._showDatepicker(input[0]);
                    }
                    return false;
                });
            }
        },

        /* Apply the maximum length for the date format. */
        _autoSize: function(inst) {
            if (this._get(inst, "autoSize") && !inst.inline) {
                var findMax, max, maxI, i,
                date = new Date(2009, 12 - 1, 20), // Ensure double digits
                dateFormat = this._get(inst, "dateFormat");

                if (dateFormat.match(/[DM]/)) {
                    findMax = function(names) {
                        max = 0;
                        maxI = 0;
                        for (i = 0; i < names.length; i++) {
                            if (names[i].length > max) {
                                max = names[i].length;
                                maxI = i;
                            }
                        }
                        return maxI;
                    };
                    date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ?
                    "monthNames" : "monthNamesShort"))));
                    date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ?
                    "dayNames" : "dayNamesShort"))) + 20 - date.getDay());
                }
                inst.input.attr("size", this._formatDate(inst, date).length);
            }
        },

        /* Attach an inline date picker to a div. */
        _inlineDatepicker: function(target, inst) {
            var divSpan = $(target);
            if (divSpan.hasClass(this.markerClassName)) {
                return;
            }
            divSpan.addClass(this.markerClassName).append(inst.dpDiv);
            $.data(target, PROP_NAME, inst);
            this._setDate(inst, this._getDefaultDate(inst), true);
            this._updateDatepicker(inst);
            this._updateAlternate(inst);
            //If disabled option is true, disable the datepicker before showing it (see ticket #5665)
            if ( inst.settings.disabled ) {
                this._disableDatepicker( target );
            }
            // Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
            // http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
            inst.dpDiv.css( "display", "block" );
        },

        /* Pop-up the date picker in a "dialog" box.
        	 * @param  input element - ignored
        	 * @param  date	string or Date - the initial date to display
        	 * @param  onSelect  function - the function to call when a date is selected
        	 * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
        	 * @param  pos int[2] - coordinates for the dialog's position within the screen or
        	 *					event - with x/y coordinates or
        	 *					leave empty for default (screen centre)
        	 * @return the manager object
        	 */
        _dialogDatepicker: function(input, date, onSelect, settings, pos) {
            var id, browserWidth, browserHeight, scrollX, scrollY,
            inst = this._dialogInst; // internal instance

            if (!inst) {
                this.uuid += 1;
                id = "dp" + this.uuid;
                this._dialogInput = $("<input type='text' id='" + id +
                "' style='position: absolute; top: -100px; width: 0px;'/>");
                this._dialogInput.keydown(this._doKeyDown);
                $("body").append(this._dialogInput);
                inst = this._dialogInst = this._newInst(this._dialogInput, false);
                inst.settings = {};
                $.data(this._dialogInput[0], PROP_NAME, inst);
            }
            extendRemove(inst.settings, settings || {});
            date = (date && date.constructor === Date ? this._formatDate(inst, date) : date);
            this._dialogInput.val(date);

            this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
            if (!this._pos) {
                browserWidth = document.documentElement.clientWidth;
                browserHeight = document.documentElement.clientHeight;
                scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
                scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = // should use actual width/height below
                [(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY];
            }

            // move input on screen for focus, but hidden behind dialog
            this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
            inst.settings.onSelect = onSelect;
            this._inDialog = true;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            if ($.blockUI) {
                $.blockUI(this.dpDiv);
            }
            $.data(this._dialogInput[0], PROP_NAME, inst);
            return this;
        },

        /* Detach a datepicker from its control.
        	 * @param  target	element - the target input field or division or span
        	 */
        _destroyDatepicker: function(target) {
            var nodeName,
            $target = $(target),
            inst = $.data(target, PROP_NAME);

            if (!$target.hasClass(this.markerClassName)) {
                return;
            }

            nodeName = target.nodeName.toLowerCase();
            $.removeData(target, PROP_NAME);
            if (nodeName === "input") {
                inst.append.remove();
                inst.trigger.remove();
                $target.removeClass(this.markerClassName).
                unbind("focus", this._showDatepicker).
                unbind("keydown", this._doKeyDown).
                unbind("keypress", this._doKeyPress).
                unbind("keyup", this._doKeyUp);
            } else if (nodeName === "div" || nodeName === "span") {
                $target.removeClass(this.markerClassName).empty();
            }
        },

        /* Enable the date picker to a jQuery selection.
        	 * @param  target	element - the target input field or division or span
        	 */
        _enableDatepicker: function(target) {
            var nodeName, inline,
            $target = $(target),
            inst = $.data(target, PROP_NAME);

            if (!$target.hasClass(this.markerClassName)) {
                return;
            }

            nodeName = target.nodeName.toLowerCase();
            if (nodeName === "input") {
                target.disabled = false;
                inst.trigger.filter("button").
                each(function() {
                    this.disabled = false;
                }).end().
                filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                });
            } else if (nodeName === "div" || nodeName === "span") {
                inline = $target.children("." + this._inlineClass);
                inline.children().removeClass("ui-state-disabled");
                inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
                prop("disabled", false);
            }
            this._disabledInputs = $.map(this._disabledInputs,
            function(value) {
                return (value === target ? null : value);
            }); // delete entry
        },

        /* Disable the date picker to a jQuery selection.
        	 * @param  target	element - the target input field or division or span
        	 */
        _disableDatepicker: function(target) {
            var nodeName, inline,
            $target = $(target),
            inst = $.data(target, PROP_NAME);

            if (!$target.hasClass(this.markerClassName)) {
                return;
            }

            nodeName = target.nodeName.toLowerCase();
            if (nodeName === "input") {
                target.disabled = true;
                inst.trigger.filter("button").
                each(function() {
                    this.disabled = true;
                }).end().
                filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                });
            } else if (nodeName === "div" || nodeName === "span") {
                inline = $target.children("." + this._inlineClass);
                inline.children().addClass("ui-state-disabled");
                inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
                prop("disabled", true);
            }
            this._disabledInputs = $.map(this._disabledInputs,
            function(value) {
                return (value === target ? null : value);
            }); // delete entry
            this._disabledInputs[this._disabledInputs.length] = target;
        },

        /* Is the first field in a jQuery collection disabled as a datepicker?
        	 * @param  target	element - the target input field or division or span
        	 * @return boolean - true if disabled, false if enabled
        	 */
        _isDisabledDatepicker: function(target) {
            if (!target) {
                return false;
            }
            for (var i = 0; i < this._disabledInputs.length; i++) {
                if (this._disabledInputs[i] === target) {
                    return true;
                }
            }
            return false;
        },

        /* Retrieve the instance data for the target control.
        	 * @param  target  element - the target input field or division or span
        	 * @return  object - the associated instance data
        	 * @throws  error if a jQuery problem getting data
        	 */
        _getInst: function(target) {
            try {
                return $.data(target, PROP_NAME);
            } catch (err) {
                throw "Missing instance data for this datepicker";
            }
        },

        /* Update or retrieve the settings for a date picker attached to an input field or division.
        	 * @param  target  element - the target input field or division or span
        	 * @param  name	object - the new settings to update or
        	 *				string - the name of the setting to change or retrieve,
        	 *				when retrieving also "all" for all instance settings or
        	 *				"defaults" for all global defaults
        	 * @param  value   any - the new value for the setting
        	 *				(omit if above is an object or to retrieve a value)
        	 */
        _optionDatepicker: function(target, name, value) {
            var settings, date, minDate, maxDate,
            inst = this._getInst(target);

            if (arguments.length === 2 && typeof name === "string") {
                return (name === "defaults" ? $.extend({}, $.datepicker._defaults) :
                (inst ? (name === "all" ? $.extend({}, inst.settings) :
                this._get(inst, name)) : null));
            }

            settings = name || {};
            if (typeof name === "string") {
                settings = {};
                settings[name] = value;
            }

            if (inst) {
                if (this._curInst === inst) {
                    this._hideDatepicker();
                }

                date = this._getDateDatepicker(target, true);
                minDate = this._getMinMaxDate(inst, "min");
                maxDate = this._getMinMaxDate(inst, "max");
                extendRemove(inst.settings, settings);
                // reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
                if (minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined) {
                    inst.settings.minDate = this._formatDate(inst, minDate);
                }
                if (maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined) {
                    inst.settings.maxDate = this._formatDate(inst, maxDate);
                }
                if ( "disabled" in settings ) {
                    if ( settings.disabled ) {
                        this._disableDatepicker(target);
                    } else {
                        this._enableDatepicker(target);
                    }
                }
                this._attachments($(target), inst);
                this._autoSize(inst);
                this._setDate(inst, date);
                this._updateAlternate(inst);
                this._updateDatepicker(inst);
            }
        },

        // change method deprecated
        _changeDatepicker: function(target, name, value) {
            this._optionDatepicker(target, name, value);
        },

        /* Redraw the date picker attached to an input field or division.
        	 * @param  target  element - the target input field or division or span
        	 */
        _refreshDatepicker: function(target) {
            var inst = this._getInst(target);
            if (inst) {
                this._updateDatepicker(inst);
            }
        },

        /* Set the dates for a jQuery selection.
        	 * @param  target element - the target input field or division or span
        	 * @param  date	Date - the new date
        	 */
        _setDateDatepicker: function(target, date) {
            var inst = this._getInst(target);
            if (inst) {
                this._setDate(inst, date);
                this._updateDatepicker(inst);
                this._updateAlternate(inst);
            }
        },

        /* Get the date(s) for the first entry in a jQuery selection.
        	 * @param  target element - the target input field or division or span
        	 * @param  noDefault boolean - true if no default date is to be used
        	 * @return Date - the current date
        	 */
        _getDateDatepicker: function(target, noDefault) {
            var inst = this._getInst(target);
            if (inst && !inst.inline) {
                this._setDateFromField(inst, noDefault);
            }
            return (inst ? this._getDate(inst) : null);
        },

        /* Handle keystrokes. */
        _doKeyDown: function(event) {
            var onSelect, dateStr, sel,
            inst = $.datepicker._getInst(event.target),
            handled = true,
            isRTL = inst.dpDiv.is(".ui-datepicker-rtl");

            inst._keyEvent = true;
            if ($.datepicker._datepickerShowing) {
                switch (event.keyCode) {
                case 9:
                    $.datepicker._hideDatepicker();
                    handled = false;
                    break; // hide on tab out
                case 13:
                    sel = $("td." + $.datepicker._dayOverClass + ":not(." +
                    $.datepicker._currentClass + ")", inst.dpDiv);
                    if (sel[0]) {
                        $.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
                    }

                    onSelect = $.datepicker._get(inst, "onSelect");
                    if (onSelect) {
                        dateStr = $.datepicker._formatDate(inst);

                        // trigger custom callback
                        onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);
                    } else {
                        $.datepicker._hideDatepicker();
                    }

                    return false; // don't submit the form
                case 27:
                    $.datepicker._hideDatepicker();
                    break; // hide on escape
                case 33:
                    $.datepicker._adjustDate(event.target, (event.ctrlKey ?
                    - $.datepicker._get(inst, "stepBigMonths") :
                    - $.datepicker._get(inst, "stepMonths")), "M");
                    break; // previous month/year on page up/+ ctrl
                case 34:
                    $.datepicker._adjustDate(event.target, (event.ctrlKey ?
                    + $.datepicker._get(inst, "stepBigMonths") :
                    + $.datepicker._get(inst, "stepMonths")), "M");
                    break; // next month/year on page down/+ ctrl
                case 35:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._clearDate(event.target);
                    }
                    handled = event.ctrlKey || event.metaKey;
                    break; // clear on ctrl or command +end
                case 36:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._gotoToday(event.target);
                    }
                    handled = event.ctrlKey || event.metaKey;
                    break; // current on ctrl or command +home
                case 37:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, (isRTL ? + 1 : - 1), "D");
                    }
                    handled = event.ctrlKey || event.metaKey;
                    // -1 day on ctrl or command +left
                    if (event.originalEvent.altKey) {
                        $.datepicker._adjustDate(event.target, (event.ctrlKey ?
                        - $.datepicker._get(inst, "stepBigMonths") :
                        - $.datepicker._get(inst, "stepMonths")), "M");
                    }
                    // next month/year on alt +left on Mac
                    break;
                case 38:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, - 7, "D");
                    }
                    handled = event.ctrlKey || event.metaKey;
                    break; // -1 week on ctrl or command +up
                case 39:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, (isRTL ? - 1 : + 1), "D");
                    }
                    handled = event.ctrlKey || event.metaKey;
                    // +1 day on ctrl or command +right
                    if (event.originalEvent.altKey) {
                        $.datepicker._adjustDate(event.target, (event.ctrlKey ?
                        + $.datepicker._get(inst, "stepBigMonths") :
                        + $.datepicker._get(inst, "stepMonths")), "M");
                    }
                    // next month/year on alt +right
                    break;
                case 40:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, + 7, "D");
                    }
                    handled = event.ctrlKey || event.metaKey;
                    break; // +1 week on ctrl or command +down
                default:
                    handled = false;
                }
            } else if (event.keyCode === 36 && event.ctrlKey) {
                // display the date picker on ctrl+home
                $.datepicker._showDatepicker(this);
            } else {
                handled = false;
            }

            if (handled) {
                event.preventDefault();
                event.stopPropagation();
            }
        },

        /* Filter entered characters - based on date format. */
        _doKeyPress: function(event) {
            var chars, chr,
            inst = $.datepicker._getInst(event.target);

            if ($.datepicker._get(inst, "constrainInput")) {
                chars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat"));
                chr = String.fromCharCode(event.charCode == null ? event.keyCode : event.charCode);
                return event.ctrlKey || event.metaKey || (chr < " " || !chars || chars.indexOf(chr) > - 1);
            }
        },

        /* Synchronise manual entry and field/alternate field. */
        _doKeyUp: function(event) {
            var date,
            inst = $.datepicker._getInst(event.target);

            if (inst.input.val() !== inst.lastVal) {
                try {
                    date = $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"),
                    (inst.input ? inst.input.val() : null),
                    $.datepicker._getFormatConfig(inst));

                    if (date) {
                        // only if valid
                        $.datepicker._setDateFromField(inst);
                        $.datepicker._updateAlternate(inst);
                        $.datepicker._updateDatepicker(inst);
                    }
                } catch (err) {}
            }
            return true;
        },

        /* Pop-up the date picker for a given input field.
        	 * If false returned from beforeShow event handler do not show.
        	 * @param  input  element - the input field attached to the date picker or
        	 *					event - if triggered by focus
        	 */
        _showDatepicker: function(input) {
            input = input.target || input;
            if (input.nodeName.toLowerCase() !== "input") {
                // find from button/image trigger
                input = $("input", input.parentNode)[0];
            }

            if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput === input) {
                // already here
                return;
            }

            var inst, beforeShow, beforeShowSettings, isFixed,
            offset, showAnim, duration;

            inst = $.datepicker._getInst(input);
            if ($.datepicker._curInst && $.datepicker._curInst !== inst) {
                $.datepicker._curInst.dpDiv.stop(true, true);
                if ( inst && $.datepicker._datepickerShowing ) {
                    $.datepicker._hideDatepicker( $.datepicker._curInst.input[0] );
                }
            }

            beforeShow = $.datepicker._get(inst, "beforeShow");
            beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
            if (beforeShowSettings === false) {
                return;
            }
            extendRemove(inst.settings, beforeShowSettings);

            inst.lastVal = null;
            $.datepicker._lastInput = input;
            $.datepicker._setDateFromField(inst);

            if ($.datepicker._inDialog) {
                // hide cursor
                input.value = "";
            }
            if (!$.datepicker._pos) {
                // position below input
                $.datepicker._pos = $.datepicker._findPos(input);
                $.datepicker._pos[1] += input.offsetHeight; // add the height
            }

            isFixed = false;
            $(input).parents().each(function() {
                isFixed |= $(this).css("position") === "fixed";
                return !isFixed;
            });

            offset = {
                left: $.datepicker._pos[0],
                top: $.datepicker._pos[1]
            };
            $.datepicker._pos = null;
            //to avoid flashes on Firefox
            inst.dpDiv.empty();
            // determine sizing offscreen
            inst.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            });
            $.datepicker._updateDatepicker(inst);
            // fix width for dynamic number of date pickers
            // and adjust position before showing
            offset = $.datepicker._checkOffset(inst, offset, isFixed);
            inst.dpDiv.css({
                position: ($.datepicker._inDialog && $.blockUI ?
                "static" : (isFixed ? "fixed" : "absolute")),
                display: "none",
                left: offset.left + "px",
                top: offset.top + "px"
            });

            if (!inst.inline) {
                showAnim = $.datepicker._get(inst, "showAnim");
                duration = $.datepicker._get(inst, "duration");
                inst.dpDiv.zIndex($(input).zIndex() + 1);
                $.datepicker._datepickerShowing = true;

                if ( $.effects && $.effects.effect[ showAnim ] ) {
                    inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration);
                } else {
                    inst.dpDiv[showAnim || "show"](showAnim ? duration : null);
                }

                if ( $.datepicker._shouldFocusInput( inst ) ) {
                    inst.input.focus();
                }

                $.datepicker._curInst = inst;
            }
        },

        /* Generate the date picker content. */
        _updateDatepicker: function(inst) {
            this.maxRows = 4; //Reset the max number of rows being displayed (see #7043)
            instActive = inst; // for delegate hover events
            inst.dpDiv.empty().append(this._generateHTML(inst));
            this._attachHandlers(inst);
            inst.dpDiv.find("." + this._dayOverClass + " a").mouseover();

            var origyearshtml,
            numMonths = this._getNumberOfMonths(inst),
            cols = numMonths[1],
            width = 17;

            inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            if (cols > 1) {
                inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", (width * cols) + "em");
            }
            inst.dpDiv[(numMonths[0] !== 1 || numMonths[1] !== 1 ? "add" : "remove") +
            "Class"]("ui-datepicker-multi");
            inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") +
            "Class"]("ui-datepicker-rtl");

            if (inst === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput( inst ) ) {
                inst.input.focus();
            }

            // deffered render of the years select (to avoid flashes on Firefox)
            if ( inst.yearshtml ) {
                origyearshtml = inst.yearshtml;
                setTimeout(function() {
                    //assure that inst.yearshtml didn't change.
                    if ( origyearshtml === inst.yearshtml && inst.yearshtml ) {
                        inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml);
                    }
                    origyearshtml = inst.yearshtml = null;
                }, 0);
            }
        },

        // #6694 - don't focus the input if it's already focused
        // this breaks the change event in IE
        // Support: IE and jQuery <1.9
        _shouldFocusInput: function( inst ) {
            return inst.input && inst.input.is( ":visible" ) && !inst.input.is( ":disabled" ) && !inst.input.is( ":focus" );
        },

        /* Check positioning to remain on screen. */
        _checkOffset: function(inst, offset, isFixed) {
            var dpWidth = inst.dpDiv.outerWidth(),
            dpHeight = inst.dpDiv.outerHeight(),
            inputWidth = inst.input ? inst.input.outerWidth() : 0,
            inputHeight = inst.input ? inst.input.outerHeight() : 0,
            viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft()),
            viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());

            offset.left -= (this._get(inst, "isRTL") ? (dpWidth - inputWidth) : 0);
            offset.left -= (isFixed && offset.left === inst.input.offset().left) ? $(document).scrollLeft() : 0;
            offset.top -= (isFixed && offset.top === (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;

            // now check if datepicker is showing outside window viewport - move to a better place if so.
            offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
            Math.abs(offset.left + dpWidth - viewWidth) : 0);
            offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
            Math.abs(dpHeight + inputHeight) : 0);

            return offset;
        },

        /* Find an object's position on the screen. */
        _findPos: function(obj) {
            var position,
            inst = this._getInst(obj),
            isRTL = this._get(inst, "isRTL");

            while (obj && (obj.type === "hidden" || obj.nodeType !== 1 || $.expr.filters.hidden(obj))) {
                obj = obj[isRTL ? "previousSibling" : "nextSibling"];
            }

            position = $(obj).offset();
            return [position.left, position.top];
        },

        /* Hide the date picker from view.
        	 * @param  input  element - the input field attached to the date picker
        	 */
        _hideDatepicker: function(input) {
            var showAnim, duration, postProcess, onClose,
            inst = this._curInst;

            if (!inst || (input && inst !== $.data(input, PROP_NAME))) {
                return;
            }

            if (this._datepickerShowing) {
                showAnim = this._get(inst, "showAnim");
                duration = this._get(inst, "duration");
                postProcess = function() {
                    $.datepicker._tidyDialog(inst);
                };

                // DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
                if ( $.effects && ( $.effects.effect[ showAnim ] || $.effects[ showAnim ] ) ) {
                    inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess);
                } else {
                    inst.dpDiv[(showAnim === "slideDown" ? "slideUp" :
                    (showAnim === "fadeIn" ? "fadeOut" : "hide"))]((showAnim ? duration : null), postProcess);
                }

                if (!showAnim) {
                    postProcess();
                }
                this._datepickerShowing = false;

                onClose = this._get(inst, "onClose");
                if (onClose) {
                    onClose.apply((inst.input ? inst.input[0] : null), [(inst.input ? inst.input.val() : ""), inst]);
                }

                this._lastInput = null;
                if (this._inDialog) {
                    this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px" 
                    });
                    if ($.blockUI) {
                        $.unblockUI();
                        $("body").append(this.dpDiv);
                    }
                }
                this._inDialog = false;
            }
        },

        /* Tidy up after a dialog display. */
        _tidyDialog: function(inst) {
            inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
        },

        /* Close date picker if clicked elsewhere. */
        _checkExternalClick: function(event) {
            if (!$.datepicker._curInst) {
                return;
            }

            var $target = $(event.target),
            inst = $.datepicker._getInst($target[0]);

            if ( ( ( $target[0].id !== $.datepicker._mainDivId &&
            $target.parents("#" + $.datepicker._mainDivId).length === 0 &&
            !$target.hasClass($.datepicker.markerClassName) &&
            !$target.closest("." + $.datepicker._triggerClass).length &&
            $.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI) ) ) ||
            ( $target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst !== inst ) ) {
                $.datepicker._hideDatepicker();
            }
        },

        /* Adjust one of the date sub-fields. */
        _adjustDate: function(id, offset, period) {
            var target = $(id),
            inst = this._getInst(target[0]);

            if (this._isDisabledDatepicker(target[0])) {
                return;
            }
            this._adjustInstDate(inst, offset +
            (period === "M" ? this._get(inst, "showCurrentAtPos") : 0), // undo positioning
            period);
            this._updateDatepicker(inst);
        },

        /* Action for current link. */
        _gotoToday: function(id) {
            var date,
            target = $(id),
            inst = this._getInst(target[0]);

            if (this._get(inst, "gotoCurrent") && inst.currentDay) {
                inst.selectedDay = inst.currentDay;
                inst.drawMonth = inst.selectedMonth = inst.currentMonth;
                inst.drawYear = inst.selectedYear = inst.currentYear;
            } else {
                date = new Date();
                inst.selectedDay = date.getDate();
                inst.drawMonth = inst.selectedMonth = date.getMonth();
                inst.drawYear = inst.selectedYear = date.getFullYear();
            }
            this._notifyChange(inst);
            this._adjustDate(target);
        },

        /* Action for selecting a new month/year. */
        _selectMonthYear: function(id, select, period) {
            var target = $(id),
            inst = this._getInst(target[0]);

            inst["selected" + (period === "M" ? "Month" : "Year")] =
            inst["draw" + (period === "M" ? "Month" : "Year")] =
            parseInt(select.options[select.selectedIndex].value, 10);

            this._notifyChange(inst);
            this._adjustDate(target);
        },

        /* Action for selecting a day. */
        _selectDay: function(id, month, year, td) {
            var inst,
            target = $(id);

            if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
                return;
            }

            inst = this._getInst(target[0]);
            inst.selectedDay = inst.currentDay = $("a", td).html();
            inst.selectedMonth = inst.currentMonth = month;
            inst.selectedYear = inst.currentYear = year;
            this._selectDate(id, this._formatDate(inst,
            inst.currentDay, inst.currentMonth, inst.currentYear));
        },

        /* Erase the input field and hide the date picker. */
        _clearDate: function(id) {
            var target = $(id);
            this._selectDate(target, "");
        },

        /* Update the input field with the selected date. */
        _selectDate: function(id, dateStr) {
            var onSelect,
            target = $(id),
            inst = this._getInst(target[0]);

            dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
            if (inst.input) {
                inst.input.val(dateStr);
            }
            this._updateAlternate(inst);

            onSelect = this._get(inst, "onSelect");
            if (onSelect) {
                onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]); // trigger custom callback
            } else if (inst.input) {
                inst.input.trigger("change"); // fire the change event
            }

            if (inst.inline) {
                this._updateDatepicker(inst);
            } else {
                this._hideDatepicker();
                this._lastInput = inst.input[0];
                if (typeof(inst.input[0]) !== "object") {
                    inst.input.focus(); // restore focus
                }
                this._lastInput = null;
            }
        },

        /* Update any alternate field to synchronise with the main field. */
        _updateAlternate: function(inst) {
            var altFormat, date, dateStr,
            altField = this._get(inst, "altField");

            if (altField) {
                // update alternate field too
                altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat");
                date = this._getDate(inst);
                dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
                $(altField).each(function() {
                    $(this).val(dateStr);
                });
            }
        },

        /* Set as beforeShowDay function to prevent selection of weekends.
        	 * @param  date  Date - the date to customise
        	 * @return [boolean, string] - is this date selectable?, what is its CSS class?
        	 */
        noWeekends: function(date) {
            var day = date.getDay();
            return [(day > 0 && day < 6), ""];
        },

        /* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
        	 * @param  date  Date - the date to get the week for
        	 * @return  number - the number of the week within the year that contains this date
        	 */
        iso8601Week: function(date) {
            var time,
            checkDate = new Date(date.getTime());

            // Find Thursday of this week starting on Monday
            checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));

            time = checkDate.getTime();
            checkDate.setMonth(0); // Compare with Jan 1
            checkDate.setDate(1);
            return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
        },

        /* Parse a string value into a date object.
        	 * See formatDate below for the possible formats.
        	 *
        	 * @param  format string - the expected format of the date
        	 * @param  value string - the date in the above format
        	 * @param  settings Object - attributes include:
        	 *					shortYearCutoff  number - the cutoff year for determining the century (optional)
        	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
        	 *					dayNames		string[7] - names of the days from Sunday (optional)
        	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
        	 *					monthNames		string[12] - names of the months (optional)
        	 * @return  Date - the extracted date value or null if value is blank
        	 */
        parseDate: function (format, value, settings) {
            if (format == null || value == null) {
                throw "Invalid arguments";
            }

            value = (typeof value === "object" ? value.toString() : value + "");
            if (value === "") {
                return null;
            }

            var iFormat, dim, extra,
            iValue = 0,
            shortYearCutoffTemp = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff,
            shortYearCutoff = (typeof shortYearCutoffTemp !== "string" ? shortYearCutoffTemp :
            new Date().getFullYear() % 100 + parseInt(shortYearCutoffTemp, 10)),
            dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
            dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
            monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
            monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
            year = - 1,
            month = - 1,
            day = - 1,
            doy = - 1,
            literal = false,
            date,
            // Check whether a format character is doubled
            lookAhead = function(match) {
                var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
                if (matches) {
                    iFormat++;
                }
                return matches;
            },
            // Extract a number from the string value
            getNumber = function(match) {
                var isDoubled = lookAhead(match),
                size = (match === "@" ? 14 : (match === "!" ? 20 :
                (match === "y" && isDoubled ? 4 : (match === "o" ? 3 : 2)))),
                digits = new RegExp("^\\d{1," + size + "}"),
                num = value.substring(iValue).match(digits);
                if (!num) {
                    throw "Missing number at position " + iValue;
                }
                iValue += num[0].length;
                return parseInt(num[0], 10);
            },
            // Extract a name from the string value and convert to an index
            getName = function(match, shortNames, longNames) {
                var index = - 1,
                names = $.map(lookAhead(match) ? longNames : shortNames, function (v, k) {
                    return [ [k, v] ];
                }).sort(function (a, b) {
                    return - (a[1].length - b[1].length);
                });

                $.each(names, function (i, pair) {
                    var name = pair[1];
                    if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
                        index = pair[0];
                        iValue += name.length;
                        return false;
                    }
                });
                if (index !== - 1) {
                    return index + 1;
                } else {
                    throw "Unknown name at position " + iValue;
                }
            },
            // Confirm that a literal character matches the string value
            checkLiteral = function() {
                if (value.charAt(iValue) !== format.charAt(iFormat)) {
                    throw "Unexpected literal at position " + iValue;
                }
                iValue++;
            };

            for (iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                        literal = false;
                    } else {
                        checkLiteral();
                    }
                } else {
                    switch (format.charAt(iFormat)) {
                    case "d":
                        day = getNumber("d");
                        break;
                    case "D":
                        getName("D", dayNamesShort, dayNames);
                        break;
                    case "o":
                        doy = getNumber("o");
                        break;
                    case "m":
                        month = getNumber("m");
                        break;
                    case "M":
                        month = getName("M", monthNamesShort, monthNames);
                        break;
                    case "y":
                        year = getNumber("y");
                        break;
                    case "@":
                        date = new Date(getNumber("@"));
                        year = date.getFullYear();
                        month = date.getMonth() + 1;
                        day = date.getDate();
                        break;
                    case "!":
                        date = new Date((getNumber("!") - this._ticksTo1970) / 10000);
                        year = date.getFullYear();
                        month = date.getMonth() + 1;
                        day = date.getDate();
                        break;
                    case "'":
                        if (lookAhead("'")) {
                            checkLiteral();
                        } else {
                            literal = true;
                        }
                        break;
                    default:
                        checkLiteral();
                    }
                }
            }

            if (iValue < value.length) {
                extra = value.substr(iValue);
                if (!/^\s+/.test(extra)) {
                    throw "Extra/unparsed characters found in date: " + extra;
                }
            }

            if (year === - 1) {
                year = new Date().getFullYear();
            } else if (year < 100) {
                year += new Date().getFullYear() - new Date().getFullYear() % 100 +
                (year <= shortYearCutoff ? 0 : - 100);
            }

            if (doy > - 1) {
                month = 1;
                day = doy;
                do {
                    dim = this._getDaysInMonth(year, month - 1);
                    if (day <= dim) {
                        break;
                    }
                    month++;
                    day -= dim;
                }
                while (true);
            }

            date = this._daylightSavingAdjust(new Date(year, month - 1, day));
            if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
                throw "Invalid date"; // E.g. 31/02/00
            }
            return date;
        },

        /* Standard date formats. */
        ATOM: "yy-mm-dd",
        // RFC 3339 (ISO 8601)
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        // RFC 822
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        // ISO 8601

        _ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
        Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),

        /* Format a date object into a string value.
        	 * The format can be combinations of the following:
        	 * d  - day of month (no leading zero)
        	 * dd - day of month (two digit)
        	 * o  - day of year (no leading zeros)
        	 * oo - day of year (three digit)
        	 * D  - day name short
        	 * DD - day name long
        	 * m  - month of year (no leading zero)
        	 * mm - month of year (two digit)
        	 * M  - month name short
        	 * MM - month name long
        	 * y  - year (two digit)
        	 * yy - year (four digit)
        	 * @ - Unix timestamp (ms since 01/01/1970)
        	 * ! - Windows ticks (100ns since 01/01/0001)
        	 * "..." - literal text
        	 * '' - single quote
        	 *
        	 * @param  format string - the desired format of the date
        	 * @param  date Date - the date value to format
        	 * @param  settings Object - attributes include:
        	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
        	 *					dayNames		string[7] - names of the days from Sunday (optional)
        	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
        	 *					monthNames		string[12] - names of the months (optional)
        	 * @return  string - the date in the above format
        	 */
        formatDate: function (format, date, settings) {
            if (!date) {
                return "";
            }

            var iFormat,
            dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
            dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
            monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
            monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
            // Check whether a format character is doubled
            lookAhead = function(match) {
                var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
                if (matches) {
                    iFormat++;
                }
                return matches;
            },
            // Format a number, with leading zero if necessary
            formatNumber = function(match, value, len) {
                var num = "" + value;
                if (lookAhead(match)) {
                    while (num.length < len) {
                        num = "0" + num;
                    }
                }
                return num;
            },
            // Format a name, short or long as requested
            formatName = function(match, value, shortNames, longNames) {
                return (lookAhead(match) ? longNames[value] : shortNames[value]);
            },
            output = "",
            literal = false;

            if (date) {
                for (iFormat = 0; iFormat < format.length; iFormat++) {
                    if (literal) {
                        if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                            literal = false;
                        } else {
                            output += format.charAt(iFormat);
                        }
                    } else {
                        switch (format.charAt(iFormat)) {
                        case "d":
                            output += formatNumber("d", date.getDate(), 2);
                            break;
                        case "D":
                            output += formatName("D", date.getDay(), dayNamesShort, dayNames);
                            break;
                        case "o":
                            output += formatNumber("o",
                            Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                            break;
                        case "m":
                            output += formatNumber("m", date.getMonth() + 1, 2);
                            break;
                        case "M":
                            output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
                            break;
                        case "y":
                            output += (lookAhead("y") ? date.getFullYear() :
                            (date.getYear() % 100 < 10 ? "0" : "") + date.getYear() % 100);
                            break;
                        case "@":
                            output += date.getTime();
                            break;
                        case "!":
                            output += date.getTime() * 10000 + this._ticksTo1970;
                            break;
                        case "'":
                            if (lookAhead("'")) {
                                output += "'";
                            } else {
                                literal = true;
                            }
                            break;
                        default:
                            output += format.charAt(iFormat);
                        }
                    }
                }
            }
            return output;
        },

        /* Extract all possible characters from the date format. */
        _possibleChars: function (format) {
            var iFormat,
            chars = "",
            literal = false,
            // Check whether a format character is doubled
            lookAhead = function(match) {
                var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
                if (matches) {
                    iFormat++;
                }
                return matches;
            };

            for (iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                        literal = false;
                    } else {
                        chars += format.charAt(iFormat);
                    }
                } else {
                    switch (format.charAt(iFormat)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        chars += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null; // Accept anything
                    case "'":
                        if (lookAhead("'")) {
                            chars += "'";
                        } else {
                            literal = true;
                        }
                        break;
                    default:
                        chars += format.charAt(iFormat);
                    }
                }
            }
            return chars;
        },

        /* Get a setting value, defaulting if necessary. */
        _get: function(inst, name) {
            return inst.settings[name] !== undefined ?
            inst.settings[name] : this._defaults[name];
        },

        /* Parse existing date and initialise date picker. */
        _setDateFromField: function(inst, noDefault) {
            if (inst.input.val() === inst.lastVal) {
                return;
            }

            var dateFormat = this._get(inst, "dateFormat"),
            dates = inst.lastVal = inst.input ? inst.input.val() : null,
            defaultDate = this._getDefaultDate(inst),
            date = defaultDate,
            settings = this._getFormatConfig(inst);

            try {
                date = this.parseDate(dateFormat, dates, settings) || defaultDate;
            } catch (event) {
                dates = (noDefault ? "" : dates);
            }
            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            inst.currentDay = (dates ? date.getDate() : 0);
            inst.currentMonth = (dates ? date.getMonth() : 0);
            inst.currentYear = (dates ? date.getFullYear() : 0);
            this._adjustInstDate(inst);
        },

        /* Retrieve the default date shown on opening. */
        _getDefaultDate: function(inst) {
            return this._restrictMinMax(inst,
            this._determineDate(inst, this._get(inst, "defaultDate"), new Date()));
        },

        /* A date may be specified as an exact value or a relative one. */
        _determineDate: function(inst, date, defaultDate) {
            var offsetNumeric = function(offset) {
                var date = new Date();
                date.setDate(date.getDate() + offset);
                return date;
            },
            offsetString = function(offset) {
                try {
                    return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"),
                    offset, $.datepicker._getFormatConfig(inst));
                } catch (e) {
                    // Ignore
                }

                var date = (offset.toLowerCase().match(/^c/) ?
                $.datepicker._getDate(inst) : null) || new Date(),
                year = date.getFullYear(),
                month = date.getMonth(),
                day = date.getDate(),
                pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                matches = pattern.exec(offset);

                while (matches) {
                    switch (matches[2] || "d") {
                    case "d" :
                    case "D" :
                        day += parseInt(matches[1], 10);
                        break;
                    case "w" :
                    case "W" :
                        day += parseInt(matches[1], 10) * 7;
                        break;
                    case "m" :
                    case "M" :
                        month += parseInt(matches[1], 10);
                        day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                        break;
                    case "y":
                    case "Y" :
                        year += parseInt(matches[1], 10);
                        day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                        break;
                    }
                    matches = pattern.exec(offset);
                }
                return new Date(year, month, day);
            },
            newDate = (date == null || date === "" ? defaultDate : (typeof date === "string" ? offsetString(date) :
            (typeof date === "number" ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));

            newDate = (newDate && newDate.toString() === "Invalid Date" ? defaultDate : newDate);
            if (newDate) {
                newDate.setHours(0);
                newDate.setMinutes(0);
                newDate.setSeconds(0);
                newDate.setMilliseconds(0);
            }
            return this._daylightSavingAdjust(newDate);
        },

        /* Handle switch to/from daylight saving.
        	 * Hours may be non-zero on daylight saving cut-over:
        	 * > 12 when midnight changeover, but then cannot generate
        	 * midnight datetime, so jump to 1AM, otherwise reset.
        	 * @param  date  (Date) the date to check
        	 * @return  (Date) the corrected date
        	 */
        _daylightSavingAdjust: function(date) {
            if (!date) {
                return null;
            }
            date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
            return date;
        },

        /* Set the date(s) directly. */
        _setDate: function(inst, date, noChange) {
            var clear = !date,
            origMonth = inst.selectedMonth,
            origYear = inst.selectedYear,
            newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));

            inst.selectedDay = inst.currentDay = newDate.getDate();
            inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
            inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
            if ((origMonth !== inst.selectedMonth || origYear !== inst.selectedYear) && !noChange) {
                this._notifyChange(inst);
            }
            this._adjustInstDate(inst);
            if (inst.input) {
                inst.input.val(clear ? "" : this._formatDate(inst));
            }
        },

        /* Retrieve the date(s) directly. */
        _getDate: function(inst) {
            var startDate = (!inst.currentYear || (inst.input && inst.input.val() === "") ? null :
            this._daylightSavingAdjust(new Date(
            inst.currentYear, inst.currentMonth, inst.currentDay)));
            return startDate;
        },

        /* Attach the onxxx handlers.  These are declared statically so
        	 * they work with static code transformers like Caja.
        	 */
        _attachHandlers: function(inst) {
            var stepMonths = this._get(inst, "stepMonths"),
            id = "#" + inst.id.replace( /\\\\/g, "\\" );
            inst.dpDiv.find("[data-handler]").map(function () {
                var handler = {
                    prev: function () {
                        $.datepicker._adjustDate(id, - stepMonths, "M");
                    },
                    next: function () {
                        $.datepicker._adjustDate(id, + stepMonths, "M");
                    },
                    hide: function () {
                        $.datepicker._hideDatepicker();
                    },
                    today: function () {
                        $.datepicker._gotoToday(id);
                    },
                    selectDay: function () {
                        $.datepicker._selectDay(id, + this.getAttribute("data-month"), + this.getAttribute("data-year"), this);
                        return false;
                    },
                    selectMonth: function () {
                        $.datepicker._selectMonthYear(id, this, "M");
                        return false;
                    },
                    selectYear: function () {
                        $.datepicker._selectMonthYear(id, this, "Y");
                        return false;
                    }
                };
                $(this).bind(this.getAttribute("data-event"), handler[this.getAttribute("data-handler")]);
            });
        },

        /* Generate the HTML for the current state of the date picker. */
        _generateHTML: function(inst) {
            var maxDraw, prevText, prev, nextText, next, currentText, gotoDate,
            controls, buttonPanel, firstDay, showWeek, dayNames, dayNamesMin,
            monthNames, monthNamesShort, beforeShowDay, showOtherMonths,
            selectOtherMonths, defaultDate, html, dow, row, group, col, selectedDate,
            cornerClass, calender, thead, day, daysInMonth, leadDays, curRows, numRows,
            printDate, dRow, tbody, daySettings, otherMonth, unselectable,
            tempDate = new Date(),
            today = this._daylightSavingAdjust(
            new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate())), // clear time
            isRTL = this._get(inst, "isRTL"),
            showButtonPanel = this._get(inst, "showButtonPanel"),
            hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext"),
            navigationAsDateFormat = this._get(inst, "navigationAsDateFormat"),
            numMonths = this._getNumberOfMonths(inst),
            showCurrentAtPos = this._get(inst, "showCurrentAtPos"),
            stepMonths = this._get(inst, "stepMonths"),
            isMultiMonth = (numMonths[0] !== 1 || numMonths[1] !== 1),
            currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) :
            new Date(inst.currentYear, inst.currentMonth, inst.currentDay))),
            minDate = this._getMinMaxDate(inst, "min"),
            maxDate = this._getMinMaxDate(inst, "max"),
            drawMonth = inst.drawMonth - showCurrentAtPos,
            drawYear = inst.drawYear;

            if (drawMonth < 0) {
                drawMonth += 12;
                drawYear--;
            }
            if (maxDate) {
                maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(),
                maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
                maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
                while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
                    drawMonth--;
                    if (drawMonth < 0) {
                        drawMonth = 11;
                        drawYear--;
                    }
                }
            }
            inst.drawMonth = drawMonth;
            inst.drawYear = drawYear;

            prevText = this._get(inst, "prevText");
            prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText,
            this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)),
            this._getFormatConfig(inst)));

            prev = (this._canAdjustMonth(inst, - 1, drawYear, drawMonth) ?
            "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'" +
            " title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w") + "'>" + prevText + "</span></a>" :
            (hideIfNoPrevNext ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w") + "'>" + prevText + "</span></a>"));

            nextText = this._get(inst, "nextText");
            nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText,
            this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)),
            this._getFormatConfig(inst)));

            next = (this._canAdjustMonth(inst, + 1, drawYear, drawMonth) ?
            "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'" +
            " title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e") + "'>" + nextText + "</span></a>" :
            (hideIfNoPrevNext ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e") + "'>" + nextText + "</span></a>"));

            currentText = this._get(inst, "currentText");
            gotoDate = (this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today);
            currentText = (!navigationAsDateFormat ? currentText :
            this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));

            controls = (!inst.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
            this._get(inst, "closeText") + "</button>" : "");

            buttonPanel = (showButtonPanel) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (isRTL ? controls : "") +
            (this._isInRange(inst, gotoDate) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'" +
            ">" + currentText + "</button>" : "") + (isRTL ? "" : controls) + "</div>" : "";

            firstDay = parseInt(this._get(inst, "firstDay"), 10);
            firstDay = (isNaN(firstDay) ? 0 : firstDay);

            showWeek = this._get(inst, "showWeek");
            dayNames = this._get(inst, "dayNames");
            dayNamesMin = this._get(inst, "dayNamesMin");
            monthNames = this._get(inst, "monthNames");
            monthNamesShort = this._get(inst, "monthNamesShort");
            beforeShowDay = this._get(inst, "beforeShowDay");
            showOtherMonths = this._get(inst, "showOtherMonths");
            selectOtherMonths = this._get(inst, "selectOtherMonths");
            defaultDate = this._getDefaultDate(inst);
            html = "";
            dow;
            for (row = 0; row < numMonths[0]; row++) {
                group = "";
                this.maxRows = 4;
                for (col = 0; col < numMonths[1]; col++) {
                    selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
                    cornerClass = " ui-corner-all";
                    calender = "";
                    if (isMultiMonth) {
                        calender += "<div class='ui-datepicker-group";
                        if (numMonths[1] > 1) {
                            switch (col) {
                            case 0:
                                calender += " ui-datepicker-group-first";
                                cornerClass = " ui-corner-" + (isRTL ? "right" : "left");
                                break;
                            case numMonths[1] - 1:
                                calender += " ui-datepicker-group-last";
                                cornerClass = " ui-corner-" + (isRTL ? "left" : "right");
                                break;
                            default:
                                calender += " ui-datepicker-group-middle";
                                cornerClass = "";
                                break;
                            }
                        }
                        calender += "'>";
                    }
                    calender += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" +
                    (/all|left/.test(cornerClass) && row === 0 ? (isRTL ? next : prev) : "") +
                    (/all|right/.test(cornerClass) && row === 0 ? (isRTL ? prev : next) : "") +
                    this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
                    row > 0 || col > 0, monthNames, monthNamesShort) + // draw month headers
                    "</div><table class='ui-datepicker-calendar'><thead>" +
                    "<tr>";
                    thead = (showWeek ? "<th class='ui-datepicker-week-col'>" + this._get(inst, "weekHeader") + "</th>" : "");
                    for (dow = 0; dow < 7; dow++) {
                        // days of the week
                        day = (dow + firstDay) % 7;
                        thead += "<th" + ((dow + firstDay + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" +
                        "<span title='" + dayNames[day] + "'>" + dayNamesMin[day] + "</span></th>";
                    }
                    calender += thead + "</tr></thead><tbody>";
                    daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
                    if (drawYear === inst.selectedYear && drawMonth === inst.selectedMonth) {
                        inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
                    }
                    leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
                    curRows = Math.ceil((leadDays + daysInMonth) / 7); // calculate the number of rows to generate
                    numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows); //If multiple months, use the higher number of rows (see #7043)
                    this.maxRows = numRows;
                    printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
                    for (dRow = 0; dRow < numRows; dRow++) {
                        // create date picker rows
                        calender += "<tr>";
                        tbody = (!showWeek ? "" : "<td class='ui-datepicker-week-col'>" +
                        this._get(inst, "calculateWeek")(printDate) + "</td>");
                        for (dow = 0; dow < 7; dow++) {
                            // create date picker days
                            daySettings = (beforeShowDay ?
                            beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, ""]);
                            otherMonth = (printDate.getMonth() !== drawMonth);
                            unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] ||
                            (minDate && printDate < minDate) || (maxDate && printDate > maxDate);
                            tbody += "<td class='" +
                            ((dow + firstDay + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + // highlight weekends
                            (otherMonth ? " ui-datepicker-other-month" : "") + // highlight days from other months
                            ((printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent) || // user pressed key
                            (defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime()) ?
                            // or defaultDate is current printedDate and defaultDate is selectedDate
                            " " + this._dayOverClass : "") + // highlight selected day
                            (unselectable ? " " + this._unselectableClass + " ui-state-disabled" : "") + // highlight unselectable days
                            (otherMonth && !showOtherMonths ? "" : " " + daySettings[1] + // highlight custom dates
                            (printDate.getTime() === currentDate.getTime() ? " " + this._currentClass : "") + // highlight selected day
                            (printDate.getTime() === today.getTime() ? " ui-datepicker-today" : "")) + "'" + // highlight today (if different)
                            ((!otherMonth || showOtherMonths) && daySettings[2] ? " title='" + daySettings[2].replace(/'/g, "&#39;") + "'" : "") + // cell title
                            (unselectable ? "" : " data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'") + ">" + // actions
                            (otherMonth && !showOtherMonths ? "&#xa0;" : // display for other months
                            (unselectable ? "<span class='ui-state-default'>" + printDate.getDate() + "</span>" : "<a class='ui-state-default" +
                            (printDate.getTime() === today.getTime() ? " ui-state-highlight" : "") +
                            (printDate.getTime() === currentDate.getTime() ? " ui-state-active" : "") + // highlight selected day
                            (otherMonth ? " ui-priority-secondary" : "") + // distinguish dates from other months
                            "' href='#'>" + printDate.getDate() + "</a>")) + "</td>"; // display selectable date
                            printDate.setDate(printDate.getDate() + 1);
                            printDate = this._daylightSavingAdjust(printDate);
                        }
                        calender += tbody + "</tr>";
                    }
                    drawMonth++;
                    if (drawMonth > 11) {
                        drawMonth = 0;
                        drawYear++;
                    }
                    calender += "</tbody></table>" + (isMultiMonth ? "</div>" +
                    ((numMonths[0] > 0 && col === numMonths[1] - 1) ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                    group += calender;
                }
                html += group;
            }
            html += buttonPanel;
            inst._keyEvent = false;
            return html;
        },

        /* Generate the month and year header. */
        _generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate,
        secondary, monthNames, monthNamesShort) {

            var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear,
            changeMonth = this._get(inst, "changeMonth"),
            changeYear = this._get(inst, "changeYear"),
            showMonthAfterYear = this._get(inst, "showMonthAfterYear"),
            html = "<div class='ui-datepicker-title'>",
            monthHtml = "";

            // month selection
            if (secondary || !changeMonth) {
                monthHtml += "<span class='ui-datepicker-month'>" + monthNames[drawMonth] + "</span>";
            } else {
                inMinYear = (minDate && minDate.getFullYear() === drawYear);
                inMaxYear = (maxDate && maxDate.getFullYear() === drawYear);
                monthHtml += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                for ( month = 0; month < 12; month++) {
                    if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
                        monthHtml += "<option value='" + month + "'" +
                        (month === drawMonth ? " selected='selected'" : "") +
                        ">" + monthNamesShort[month] + "</option>";
                    }
                }
                monthHtml += "</select>";
            }

            if (!showMonthAfterYear) {
                html += monthHtml + (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "");
            }

            // year selection
            if ( !inst.yearshtml ) {
                inst.yearshtml = "";
                if (secondary || !changeYear) {
                    html += "<span class='ui-datepicker-year'>" + drawYear + "</span>";
                } else {
                    // determine range of years to display
                    years = this._get(inst, "yearRange").split(":");
                    thisYear = new Date().getFullYear();
                    determineYear = function(value) {
                        var year = (value.match(/c[+\-].*/) ? drawYear + parseInt(value.substring(1), 10) :
                        (value.match(/[+\-].*/) ? thisYear + parseInt(value, 10) :
                        parseInt(value, 10)));
                        return (isNaN(year) ? thisYear : year);
                    };
                    year = determineYear(years[0]);
                    endYear = Math.max(year, determineYear(years[1] || ""));
                    year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
                    endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
                    inst.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                    for (; year <= endYear; year++) {
                        inst.yearshtml += "<option value='" + year + "'" +
                        (year === drawYear ? " selected='selected'" : "") +
                        ">" + year + "</option>";
                    }
                    inst.yearshtml += "</select>";

                    html += inst.yearshtml;
                    inst.yearshtml = null;
                }
            }

            html += this._get(inst, "yearSuffix");
            if (showMonthAfterYear) {
                html += (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml;
            }
            html += "</div>"; // Close datepicker_header
            return html;
        },

        /* Adjust one of the date sub-fields. */
        _adjustInstDate: function(inst, offset, period) {
            var year = inst.drawYear + (period === "Y" ? offset : 0),
            month = inst.drawMonth + (period === "M" ? offset : 0),
            day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period === "D" ? offset : 0),
            date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));

            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            if (period === "M" || period === "Y") {
                this._notifyChange(inst);
            }
        },

        /* Ensure a date is within any min/max bounds. */
        _restrictMinMax: function(inst, date) {
            var minDate = this._getMinMaxDate(inst, "min"),
            maxDate = this._getMinMaxDate(inst, "max"),
            newDate = (minDate && date < minDate ? minDate : date);
            return (maxDate && newDate > maxDate ? maxDate : newDate);
        },

        /* Notify change of month/year. */
        _notifyChange: function(inst) {
            var onChange = this._get(inst, "onChangeMonthYear");
            if (onChange) {
                onChange.apply((inst.input ? inst.input[0] : null),
                [inst.selectedYear, inst.selectedMonth + 1, inst]);
            }
        },

        /* Determine the number of months to show. */
        _getNumberOfMonths: function(inst) {
            var numMonths = this._get(inst, "numberOfMonths");
            return (numMonths == null ? [1, 1] : (typeof numMonths === "number" ? [1, numMonths] : numMonths));
        },

        /* Determine the current maximum date - ensure no time components are set. */
        _getMinMaxDate: function(inst, minMax) {
            return this._determineDate(inst, this._get(inst, minMax + "Date"), null);
        },

        /* Find the number of days in a given month. */
        _getDaysInMonth: function(year, month) {
            return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
        },

        /* Find the day of the week of the first of a month. */
        _getFirstDayOfMonth: function(year, month) {
            return new Date(year, month, 1).getDay();
        },

        /* Determines if we should allow a "next/prev" month display change. */
        _canAdjustMonth: function(inst, offset, curYear, curMonth) {
            var numMonths = this._getNumberOfMonths(inst),
            date = this._daylightSavingAdjust(new Date(curYear,
            curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));

            if (offset < 0) {
                date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
            }
            return this._isInRange(inst, date);
        },

        /* Is the given date in the accepted range? */
        _isInRange: function(inst, date) {
            var yearSplit, currentYear,
            minDate = this._getMinMaxDate(inst, "min"),
            maxDate = this._getMinMaxDate(inst, "max"),
            minYear = null,
            maxYear = null,
            years = this._get(inst, "yearRange");
            if (years) {
                yearSplit = years.split(":");
                currentYear = new Date().getFullYear();
                minYear = parseInt(yearSplit[0], 10);
                maxYear = parseInt(yearSplit[1], 10);
                if ( yearSplit[0].match(/[+\-].*/) ) {
                    minYear += currentYear;
                }
                if ( yearSplit[1].match(/[+\-].*/) ) {
                    maxYear += currentYear;
                }
            }

            return ((!minDate || date.getTime() >= minDate.getTime()) &&
            (!maxDate || date.getTime() <= maxDate.getTime()) &&
            (!minYear || date.getFullYear() >= minYear) &&
            (!maxYear || date.getFullYear() <= maxYear));
        },

        /* Provide the configuration settings for formatting/parsing. */
        _getFormatConfig: function(inst) {
            var shortYearCutoff = this._get(inst, "shortYearCutoff");
            shortYearCutoff = (typeof shortYearCutoff !== "string" ? shortYearCutoff :
            new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
            return {
                shortYearCutoff: shortYearCutoff,
                dayNamesShort: this._get(inst, "dayNamesShort"),
                dayNames: this._get(inst, "dayNames"),
                monthNamesShort: this._get(inst, "monthNamesShort"),
                monthNames: this._get(inst, "monthNames")
            };
        },

        /* Format the given date for display. */
        _formatDate: function(inst, day, month, year) {
            if (!day) {
                inst.currentDay = inst.selectedDay;
                inst.currentMonth = inst.selectedMonth;
                inst.currentYear = inst.selectedYear;
            }
            var date = (day ? (typeof day === "object" ? day :
            this._daylightSavingAdjust(new Date(year, month, day))) :
            this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
            return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst));
        }
    });

    /*
     * Bind hover events for datepicker elements.
     * Done via delegate so the binding only occurs once in the lifetime of the parent div.
     * Global instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
     */
    function bindHover(dpDiv) {
        var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return dpDiv.delegate(selector, "mouseout", function() {
            $(this).removeClass("ui-state-hover");
            if (this.className.indexOf("ui-datepicker-prev") !== - 1) {
                $(this).removeClass("ui-datepicker-prev-hover");
            }
            if (this.className.indexOf("ui-datepicker-next") !== - 1) {
                $(this).removeClass("ui-datepicker-next-hover");
            }
        })
        .delegate(selector, "mouseover", function() {
            if (!$.datepicker._isDisabledDatepicker( instActive.inline ? dpDiv.parent()[0] : instActive.input[0])) {
                $(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
                $(this).addClass("ui-state-hover");
                if (this.className.indexOf("ui-datepicker-prev") !== - 1) {
                    $(this).addClass("ui-datepicker-prev-hover");
                }
                if (this.className.indexOf("ui-datepicker-next") !== - 1) {
                    $(this).addClass("ui-datepicker-next-hover");
                }
            }
        });
    }

    /* jQuery extend now ignores nulls! */
    function extendRemove(target, props) {
        $.extend(target, props);
        for (var name in props) {
            if (props[name] == null) {
                target[name] = props[name];
            }
        }
        return target;
    }

    /* Invoke the datepicker functionality.
       @param  options  string - a command, optionally followed by additional parameters or
    					Object - settings for attaching new datepicker functionality
       @return  jQuery object */
    $.fn.datepicker = function(options) {

        /* Verify an empty collection wasn't passed - Fixes #6976 */
        if ( !this.length ) {
            return this;
        }

        /* Initialise the date picker. */
        if (!$.datepicker.initialized) {
            $(document).mousedown($.datepicker._checkExternalClick);
            $.datepicker.initialized = true;
        }

        /* Append datepicker main container to body if not exist. */
        if ($("#" + $.datepicker._mainDivId).length === 0) {
            $("body").append($.datepicker.dpDiv);
        }

        var otherArgs = Array.prototype.slice.call(arguments, 1);
        if (typeof options === "string" && (options === "isDisabled" || options === "getDate" || options === "widget")) {
            return $.datepicker["_" + options + "Datepicker"].
            apply($.datepicker, [this[0]].concat(otherArgs));
        }
        if (options === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
            return $.datepicker["_" + options + "Datepicker"].
            apply($.datepicker, [this[0]].concat(otherArgs));
        }
        return this.each(function() {
            typeof options === "string" ?
            $.datepicker["_" + options + "Datepicker"].
            apply($.datepicker, [this].concat(otherArgs)) :
            $.datepicker._attachDatepicker(this, options);
        });
    };

    $.datepicker = new Datepicker(); // singleton instance
    $.datepicker.initialized = false;
    $.datepicker.uuid = new Date().getTime();
    $.datepicker.version = "1.10.3";

})(jQuery);

(function( $, undefined ) {

    var sizeRelatedOptions = {
        buttons: true,
        height: true,
        maxHeight: true,
        maxWidth: true,
        minHeight: true,
        minWidth: true,
        width: true
    },
    resizableRelatedOptions = {
        maxHeight: true,
        maxWidth: true,
        minHeight: true,
        minWidth: true
    };

    $.widget( "ui.dialog", {
        version: "1.10.3",
        options: {
            appendTo: "body",
            autoOpen: true,
            buttons: [],
            closeOnEscape: true,
            closeText: "close",
            dialogClass: "",
            draggable: true,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: false,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                // Ensure the titlebar is always visible
                using: function( pos ) {
                    var topOffset = $( this ).css( pos ).offset().top;
                    if ( topOffset < 0 ) {
                        $( this ).css( "top", pos.top - topOffset );
                    }
                }
            },
            resizable: true,
            show: null,
            title: null,
            width: 300,

            // callbacks
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },

        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            };
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index( this.element )
            };
            this.originalTitle = this.element.attr("title");
            this.options.title = this.options.title || this.originalTitle;

            this._createWrapper();

            this.element
            .show()
            .removeAttr("title")
            .addClass("ui-dialog-content ui-widget-content")
            .appendTo( this.uiDialog );

            this._createTitlebar();
            this._createButtonPane();

            if ( this.options.draggable && $.fn.draggable ) {
                this._makeDraggable();
            }
            if ( this.options.resizable && $.fn.resizable ) {
                this._makeResizable();
            }

            this._isOpen = false;
        },

        _init: function() {
            if ( this.options.autoOpen ) {
                this.open();
            }
        },

        _appendTo: function() {
            var element = this.options.appendTo;
            if ( element && (element.jquery || element.nodeType) ) {
                return $( element );
            }
            return this.document.find( element || "body" ).eq( 0 );
        },

        _destroy: function() {
            var next,
            originalPosition = this.originalPosition;

            this._destroyOverlay();

            this.element
            .removeUniqueId()
            .removeClass("ui-dialog-content ui-widget-content")
            .css( this.originalCss )
            // Without detaching first, the following becomes really slow
            .detach();

            this.uiDialog.stop( true, true ).remove();

            if ( this.originalTitle ) {
                this.element.attr( "title", this.originalTitle );
            }

            next = originalPosition.parent.children().eq( originalPosition.index );
            // Don't try to place the dialog next to itself (#8613)
            if ( next.length && next[0] !== this.element[0] ) {
                next.before( this.element );
            } else {
                originalPosition.parent.append( this.element );
            }
        },

        widget: function() {
            return this.uiDialog;
        },

        disable: $.noop,
        enable: $.noop,

        close: function( event ) {
            var that = this;

            if ( !this._isOpen || this._trigger( "beforeClose", event ) === false ) {
                return;
            }

            this._isOpen = false;
            this._destroyOverlay();

            if ( !this.opener.filter(":focusable").focus().length ) {
                // Hiding a focused element doesn't trigger blur in WebKit
                // so in case we have nothing to focus on, explicitly blur the active element
                // https://bugs.webkit.org/show_bug.cgi?id=47182
                $( this.document[0].activeElement ).blur();
            }

            this._hide( this.uiDialog, this.options.hide, function() {
                that._trigger( "close", event );
            });
        },

        isOpen: function() {
            return this._isOpen;
        },

        moveToTop: function() {
            this._moveToTop();
        },

        _moveToTop: function( event, silent ) {
            var moved = !!this.uiDialog.nextAll(":visible").insertBefore( this.uiDialog ).length;
            if ( moved && !silent ) {
                this._trigger( "focus", event );
            }
            return moved;
        },

        open: function() {
            var that = this;
            if ( this._isOpen ) {
                if ( this._moveToTop() ) {
                    this._focusTabbable();
                }
                return;
            }

            this._isOpen = true;
            this.opener = $( this.document[0].activeElement );

            this._size();
            this._position();
            this._createOverlay();
            this._moveToTop( null, true );
            this._show( this.uiDialog, this.options.show, function() {
                that._focusTabbable();
                that._trigger("focus");
            });

            this._trigger("open");
        },

        _focusTabbable: function() {
            // Set focus to the first match:
            // 1. First element inside the dialog matching [autofocus]
            // 2. Tabbable element inside the content element
            // 3. Tabbable element inside the buttonpane
            // 4. The close button
            // 5. The dialog itself
            var hasFocus = this.element.find("[autofocus]");
            if ( !hasFocus.length ) {
                hasFocus = this.element.find(":tabbable");
            }
            if ( !hasFocus.length ) {
                hasFocus = this.uiDialogButtonPane.find(":tabbable");
            }
            if ( !hasFocus.length ) {
                hasFocus = this.uiDialogTitlebarClose.filter(":tabbable");
            }
            if ( !hasFocus.length ) {
                hasFocus = this.uiDialog;
            }
            hasFocus.eq( 0 ).focus();
        },

        _keepFocus: function( event ) {
            function checkFocus() {
                var activeElement = this.document[0].activeElement,
                isActive = this.uiDialog[0] === activeElement ||
                $.contains( this.uiDialog[0], activeElement );
                if ( !isActive ) {
                    this._focusTabbable();
                }
            }
            event.preventDefault();
            checkFocus.call( this );
            // support: IE
            // IE <= 8 doesn't prevent moving focus even with event.preventDefault()
            // so we check again later
            this._delay( checkFocus );
        },

        _createWrapper: function() {
            this.uiDialog = $("<div>")
            .addClass( "ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " +
            this.options.dialogClass )
            .hide()
            .attr({
                // Setting tabIndex makes the div focusable
                tabIndex: - 1,
                role: "dialog"
            })
            .appendTo( this._appendTo() );

            this._on( this.uiDialog, {
                keydown: function( event ) {
                    if ( this.options.closeOnEscape && !event.isDefaultPrevented() && event.keyCode &&
                    event.keyCode === $.ui.keyCode.ESCAPE ) {
                        event.preventDefault();
                        this.close( event );
                        return;
                    }

                    // prevent tabbing out of dialogs
                    if ( event.keyCode !== $.ui.keyCode.TAB ) {
                        return;
                    }
                    var tabbables = this.uiDialog.find(":tabbable"),
                    first = tabbables.filter(":first"),
                    last = tabbables.filter(":last");

                    if ( ( event.target === last[0] || event.target === this.uiDialog[0] ) && !event.shiftKey ) {
                        first.focus( 1 );
                        event.preventDefault();
                    } else if ( ( event.target === first[0] || event.target === this.uiDialog[0] ) && event.shiftKey ) {
                        last.focus( 1 );
                        event.preventDefault();
                    }
                },
                mousedown: function( event ) {
                    if ( this._moveToTop( event ) ) {
                        this._focusTabbable();
                    }
                }
            });

            // We assume that any existing aria-describedby attribute means
            // that the dialog content is marked up properly
            // otherwise we brute force the content as the description
            if ( !this.element.find("[aria-describedby]").length ) {
                this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr("id")
                });
            }
        },

        _createTitlebar: function() {
            var uiDialogTitle;

            this.uiDialogTitlebar = $("<div>")
            .addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix")
            .prependTo( this.uiDialog );
            this._on( this.uiDialogTitlebar, {
                mousedown: function( event ) {
                    // Don't prevent click on close button (#8838)
                    // Focusing a dialog that is partially scrolled out of view
                    // causes the browser to scroll it into view, preventing the click event
                    if ( !$( event.target ).closest(".ui-dialog-titlebar-close") ) {
                        // Dialog isn't getting focus when dragging (#8063)
                        this.uiDialog.focus();
                    }
                }
            });

            this.uiDialogTitlebarClose = $("<button></button>")
            .button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: false
            })
            .addClass("ui-dialog-titlebar-close")
            .appendTo( this.uiDialogTitlebar );
            this._on( this.uiDialogTitlebarClose, {
                click: function( event ) {
                    event.preventDefault();
                    this.close( event );
                }
            });

            uiDialogTitle = $("<span>")
            .uniqueId()
            .addClass("ui-dialog-title")
            .prependTo( this.uiDialogTitlebar );
            this._title( uiDialogTitle );

            this.uiDialog.attr({
                "aria-labelledby": uiDialogTitle.attr("id")
            });
        },

        _title: function( title ) {
            if ( !this.options.title ) {
                title.html("&#160;");
            }
            title.text( this.options.title );
        },

        _createButtonPane: function() {
            this.uiDialogButtonPane = $("<div>")
            .addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");

            this.uiButtonSet = $("<div>")
            .addClass("ui-dialog-buttonset")
            .appendTo( this.uiDialogButtonPane );

            this._createButtons();
        },

        _createButtons: function() {
            var that = this,
            buttons = this.options.buttons;

            // if we already have a button pane, remove it
            this.uiDialogButtonPane.remove();
            this.uiButtonSet.empty();

            if ( $.isEmptyObject( buttons ) || ($.isArray( buttons ) && !buttons.length) ) {
                this.uiDialog.removeClass("ui-dialog-buttons");
                return;
            }

            $.each( buttons, function( name, props ) {
                var click, buttonOptions;
                props = $.isFunction( props ) ?
                {
                    click: props,
                    text: name 
                } :
                props;
                // Default to a non-submitting button
                props = $.extend( {
                    type: "button" 
                }, props );
                // Change the context for the click callback to be the main element
                click = props.click;
                props.click = function() {
                    click.apply( that.element[0], arguments );
                };
                buttonOptions = {
                    icons: props.icons,
                    text: props.showText
                };
                delete props.icons;
                delete props.showText;
                $( "<button></button>", props )
                .button( buttonOptions )
                .appendTo( that.uiButtonSet );
            });
            this.uiDialog.addClass("ui-dialog-buttons");
            this.uiDialogButtonPane.appendTo( this.uiDialog );
        },

        _makeDraggable: function() {
            var that = this,
            options = this.options;

            function filteredUi( ui ) {
                return {
                    position: ui.position,
                    offset: ui.offset
                };
            }

            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function( event, ui ) {
                    $( this ).addClass("ui-dialog-dragging");
                    that._blockFrames();
                    that._trigger( "dragStart", event, filteredUi( ui ) );
                },
                drag: function( event, ui ) {
                    that._trigger( "drag", event, filteredUi( ui ) );
                },
                stop: function( event, ui ) {
                    options.position = [
                    ui.position.left - that.document.scrollLeft(),
                    ui.position.top - that.document.scrollTop()
                    ];
                    $( this ).removeClass("ui-dialog-dragging");
                    that._unblockFrames();
                    that._trigger( "dragStop", event, filteredUi( ui ) );
                }
            });
        },

        _makeResizable: function() {
            var that = this,
            options = this.options,
            handles = options.resizable,
            // .ui-resizable has position: relative defined in the stylesheet
            // but dialogs have to use absolute or fixed positioning
            position = this.uiDialog.css("position"),
            resizeHandles = typeof handles === "string" ?
            handles :
            "n,e,s,w,se,sw,ne,nw";

            function filteredUi( ui ) {
                return {
                    originalPosition: ui.originalPosition,
                    originalSize: ui.originalSize,
                    position: ui.position,
                    size: ui.size
                };
            }

            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: options.maxWidth,
                maxHeight: options.maxHeight,
                minWidth: options.minWidth,
                minHeight: this._minHeight(),
                handles: resizeHandles,
                start: function( event, ui ) {
                    $( this ).addClass("ui-dialog-resizing");
                    that._blockFrames();
                    that._trigger( "resizeStart", event, filteredUi( ui ) );
                },
                resize: function( event, ui ) {
                    that._trigger( "resize", event, filteredUi( ui ) );
                },
                stop: function( event, ui ) {
                    options.height = $( this ).height();
                    options.width = $( this ).width();
                    $( this ).removeClass("ui-dialog-resizing");
                    that._unblockFrames();
                    that._trigger( "resizeStop", event, filteredUi( ui ) );
                }
            })
            .css( "position", position );
        },

        _minHeight: function() {
            var options = this.options;

            return options.height === "auto" ?
            options.minHeight :
            Math.min( options.minHeight, options.height );
        },

        _position: function() {
            // Need to show the dialog to get the actual offset in the position plugin
            var isVisible = this.uiDialog.is(":visible");
            if ( !isVisible ) {
                this.uiDialog.show();
            }
            this.uiDialog.position( this.options.position );
            if ( !isVisible ) {
                this.uiDialog.hide();
            }
        },

        _setOptions: function( options ) {
            var that = this,
            resize = false,
            resizableOptions = {};

            $.each( options, function( key, value ) {
                that._setOption( key, value );

                if ( key in sizeRelatedOptions ) {
                    resize = true;
                }
                if ( key in resizableRelatedOptions ) {
                    resizableOptions[ key ] = value;
                }
            });

            if ( resize ) {
                this._size();
                this._position();
            }
            if ( this.uiDialog.is(":data(ui-resizable)") ) {
                this.uiDialog.resizable( "option", resizableOptions );
            }
        },

        _setOption: function( key, value ) {
            /*jshint maxcomplexity:15*/
            var isDraggable, isResizable,
            uiDialog = this.uiDialog;

            if ( key === "dialogClass" ) {
                uiDialog
                .removeClass( this.options.dialogClass )
                .addClass( value );
            }

            if ( key === "disabled" ) {
                return;
            }

            this._super( key, value );

            if ( key === "appendTo" ) {
                this.uiDialog.appendTo( this._appendTo() );
            }

            if ( key === "buttons" ) {
                this._createButtons();
            }

            if ( key === "closeText" ) {
                this.uiDialogTitlebarClose.button({
                    // Ensure that we always pass a string
                    label: "" + value
                });
            }

            if ( key === "draggable" ) {
                isDraggable = uiDialog.is(":data(ui-draggable)");
                if ( isDraggable && !value ) {
                    uiDialog.draggable("destroy");
                }

                if ( !isDraggable && value ) {
                    this._makeDraggable();
                }
            }

            if ( key === "position" ) {
                this._position();
            }

            if ( key === "resizable" ) {
                // currently resizable, becoming non-resizable
                isResizable = uiDialog.is(":data(ui-resizable)");
                if ( isResizable && !value ) {
                    uiDialog.resizable("destroy");
                }

                // currently resizable, changing handles
                if ( isResizable && typeof value === "string" ) {
                    uiDialog.resizable( "option", "handles", value );
                }

                // currently non-resizable, becoming resizable
                if ( !isResizable && value !== false ) {
                    this._makeResizable();
                }
            }

            if ( key === "title" ) {
                this._title( this.uiDialogTitlebar.find(".ui-dialog-title") );
            }
        },

        _size: function() {
            // If the user has resized the dialog, the .ui-dialog and .ui-dialog-content
            // divs will both have width and height set, so we need to reset them
            var nonContentHeight, minContentHeight, maxContentHeight,
            options = this.options;

            // Reset content sizing
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            });

            if ( options.minWidth > options.width ) {
                options.width = options.minWidth;
            }

            // reset wrapper sizing
            // determine the height of all the non-content elements
            nonContentHeight = this.uiDialog.css({
                height: "auto",
                width: options.width
            })
            .outerHeight();
            minContentHeight = Math.max( 0, options.minHeight - nonContentHeight );
            maxContentHeight = typeof options.maxHeight === "number" ?
            Math.max( 0, options.maxHeight - nonContentHeight ) :
            "none";

            if ( options.height === "auto" ) {
                this.element.css({
                    minHeight: minContentHeight,
                    maxHeight: maxContentHeight,
                    height: "auto"
                });
            } else {
                this.element.height( Math.max( 0, options.height - nonContentHeight ) );
            }

            if (this.uiDialog.is(":data(ui-resizable)") ) {
                this.uiDialog.resizable( "option", "minHeight", this._minHeight() );
            }
        },

        _blockFrames: function() {
            this.iframeBlocks = this.document.find( "iframe" ).map(function() {
                var iframe = $( this );

                return $( "<div>" )
                .css({
                    position: "absolute",
                    width: iframe.outerWidth(),
                    height: iframe.outerHeight()
                })
                .appendTo( iframe.parent() )
                .offset( iframe.offset() )[0];
            });
        },

        _unblockFrames: function() {
            if ( this.iframeBlocks ) {
                this.iframeBlocks.remove();
                delete this.iframeBlocks;
            }
        },

        _allowInteraction: function( event ) {
            if ( $( event.target ).closest(".ui-dialog").length ) {
                return true;
            }

            // TODO: Remove hack when datepicker implements
            // the .ui-front logic (#8989)
            return !!$( event.target ).closest(".ui-datepicker").length;
        },

        _createOverlay: function() {
            if ( !this.options.modal ) {
                return;
            }

            var that = this,
            widgetFullName = this.widgetFullName;
            if ( !$.ui.dialog.overlayInstances ) {
                // Prevent use of anchors and inputs.
                // We use a delay in case the overlay is created from an
                // event that we're going to be cancelling. (#2804)
                this._delay(function() {
                    // Handle .dialog().dialog("close") (#4065)
                    if ( $.ui.dialog.overlayInstances ) {
                        this.document.bind( "focusin.dialog", function( event ) {
                            if ( !that._allowInteraction( event ) ) {
                                event.preventDefault();
                                $(".ui-dialog:visible:last .ui-dialog-content")
                                .data( widgetFullName )._focusTabbable();
                            }
                        });
                    }
                });
            }

            this.overlay = $("<div>")
            .addClass("ui-widget-overlay ui-front")
            .appendTo( this._appendTo() );
            this._on( this.overlay, {
                mousedown: "_keepFocus"
            });
            $.ui.dialog.overlayInstances++;
        },

        _destroyOverlay: function() {
            if ( !this.options.modal ) {
                return;
            }

            if ( this.overlay ) {
                $.ui.dialog.overlayInstances--;

                if ( !$.ui.dialog.overlayInstances ) {
                    this.document.unbind( "focusin.dialog" );
                }
                this.overlay.remove();
                this.overlay = null;
            }
        }
    });

    $.ui.dialog.overlayInstances = 0;

    // DEPRECATED
    if ( $.uiBackCompat !== false ) {
        // position option with array notation
        // just override with old implementation
        $.widget( "ui.dialog", $.ui.dialog, {
            _position: function() {
                var position = this.options.position,
                myAt = [],
                offset = [ 0, 0 ],
                isVisible;

                if ( position ) {
                    if ( typeof position === "string" || (typeof position === "object" && "0" in position ) ) {
                        myAt = position.split ? position.split(" ") : [ position[0], position[1] ];
                        if ( myAt.length === 1 ) {
                            myAt[1] = myAt[0];
                        }

                        $.each( [ "left", "top" ], function( i, offsetPosition ) {
                            if ( + myAt[ i ] === myAt[ i ] ) {
                                offset[ i ] = myAt[ i ];
                                myAt[ i ] = offsetPosition;
                            }
                        });

                        position = {
                            my: myAt[0] + (offset[0] < 0 ? offset[0] : "+" + offset[0]) + " " +
                            myAt[1] + (offset[1] < 0 ? offset[1] : "+" + offset[1]),
                            at: myAt.join(" ")
                        };
                    }

                    position = $.extend( {}, $.ui.dialog.prototype.options.position, position );
                } else {
                    position = $.ui.dialog.prototype.options.position;
                }

                // need to show the dialog to get the actual offset in the position plugin
                isVisible = this.uiDialog.is(":visible");
                if ( !isVisible ) {
                    this.uiDialog.show();
                }
                this.uiDialog.position( position );
                if ( !isVisible ) {
                    this.uiDialog.hide();
                }
            }
        });
    }

}( jQuery ) );

(function( $, undefined ) {

    var rvertical = /up|down|vertical/,
    rpositivemotion = /up|left|vertical|horizontal/;

    $.effects.effect.blind = function( o, done ) {
        // Create element
        var el = $( this ),
        props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
        mode = $.effects.setMode( el, o.mode || "hide" ),
        direction = o.direction || "up",
        vertical = rvertical.test( direction ),
        ref = vertical ? "height" : "width",
        ref2 = vertical ? "top" : "left",
        motion = rpositivemotion.test( direction ),
        animation = {},
        show = mode === "show",
        wrapper, distance, margin;

        // if already wrapped, the wrapper's properties are my property. #6245
        if ( el.parent().is( ".ui-effects-wrapper" ) ) {
            $.effects.save( el.parent(), props );
        } else {
            $.effects.save( el, props );
        }
        el.show();
        wrapper = $.effects.createWrapper( el ).css({
            overflow: "hidden"
        });

        distance = wrapper[ ref ]();
        margin = parseFloat( wrapper.css( ref2 ) ) || 0;

        animation[ ref ] = show ? distance : 0;
        if ( !motion ) {
            el
            .css( vertical ? "bottom" : "right", 0 )
            .css( vertical ? "top" : "left", "auto" )
            .css({
                position: "absolute" 
            });

            animation[ ref2 ] = show ? margin : distance + margin;
        }

        // start at 0 if we are showing
        if ( show ) {
            wrapper.css( ref, 0 );
            if ( ! motion ) {
                wrapper.css( ref2, margin + distance );
            }
        }

        // Animate
        wrapper.animate( animation, {
            duration: o.duration,
            easing: o.easing,
            queue: false,
            complete: function() {
                if ( mode === "hide" ) {
                    el.hide();
                }
                $.effects.restore( el, props );
                $.effects.removeWrapper( el );
                done();
            }
        });

    };

})(jQuery);

(function( $, undefined ) {

    $.effects.effect.bounce = function( o, done ) {
        var el = $( this ),
        props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
        // defaults:
        mode = $.effects.setMode( el, o.mode || "effect" ),
        hide = mode === "hide",
        show = mode === "show",
        direction = o.direction || "up",
        distance = o.distance,
        times = o.times || 5,
        // number of internal animations
        anims = times * 2 + ( show || hide ? 1 : 0 ),
        speed = o.duration / anims,
        easing = o.easing,
        // utility:
        ref = ( direction === "up" || direction === "down" ) ? "top" : "left",
        motion = ( direction === "up" || direction === "left" ),
        i,
        upAnim,
        downAnim,
        // we will need to re-assemble the queue to stack our animations in place
        queue = el.queue(),
        queuelen = queue.length;

        // Avoid touching opacity to prevent clearType and PNG issues in IE
        if ( show || hide ) {
            props.push( "opacity" );
        }

        $.effects.save( el, props );
        el.show();
        $.effects.createWrapper( el ); // Create Wrapper

        // default distance for the BIGGEST bounce is the outer Distance / 3
        if ( !distance ) {
            distance = el[ ref === "top" ? "outerHeight" : "outerWidth" ]() / 3;
        }

        if ( show ) {
            downAnim = {
                opacity: 1 
            };
            downAnim[ ref ] = 0;

            // if we are showing, force opacity 0 and set the initial position
            // then do the "first" animation
            el.css( "opacity", 0 )
            .css( ref, motion ? - distance * 2 : distance * 2 )
            .animate( downAnim, speed, easing );
        }

        // start at the smallest distance if we are hiding
        if ( hide ) {
            distance = distance / Math.pow( 2, times - 1 );
        }

        downAnim = {};
        downAnim[ ref ] = 0;
        // Bounces up/down/left/right then back to 0 -- times * 2 animations happen here
        for ( i = 0; i < times; i++ ) {
            upAnim = {};
            upAnim[ ref ] = ( motion ? "-=" : "+=" ) + distance;

            el.animate( upAnim, speed, easing )
            .animate( downAnim, speed, easing );

            distance = hide ? distance * 2 : distance / 2;
        }

        // Last Bounce when Hiding
        if ( hide ) {
            upAnim = {
                opacity: 0 
            };
            upAnim[ ref ] = ( motion ? "-=" : "+=" ) + distance;

            el.animate( upAnim, speed, easing );
        }

        el.queue(function() {
            if ( hide ) {
                el.hide();
            }
            $.effects.restore( el, props );
            $.effects.removeWrapper( el );
            done();
        });

        // inject all the animations we just queued to be first in line (after "inprogress")
        if ( queuelen > 1) {
            queue.splice.apply( queue,
            [ 1, 0 ].concat( queue.splice( queuelen, anims + 1 ) ) );
        }
        el.dequeue();

    };

})(jQuery);

(function( $, undefined ) {

    $.effects.effect.clip = function( o, done ) {
        // Create element
        var el = $( this ),
        props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
        mode = $.effects.setMode( el, o.mode || "hide" ),
        show = mode === "show",
        direction = o.direction || "vertical",
        vert = direction === "vertical",
        size = vert ? "height" : "width",
        position = vert ? "top" : "left",
        animation = {},
        wrapper, animate, distance;

        // Save & Show
        $.effects.save( el, props );
        el.show();

        // Create Wrapper
        wrapper = $.effects.createWrapper( el ).css({
            overflow: "hidden"
        });
        animate = ( el[0].tagName === "IMG" ) ? wrapper : el;
        distance = animate[ size ]();

        // Shift
        if ( show ) {
            animate.css( size, 0 );
            animate.css( position, distance / 2 );
        }

        // Create Animation Object:
        animation[ size ] = show ? distance : 0;
        animation[ position ] = show ? 0 : distance / 2;

        // Animate
        animate.animate( animation, {
            queue: false,
            duration: o.duration,
            easing: o.easing,
            complete: function() {
                if ( !show ) {
                    el.hide();
                }
                $.effects.restore( el, props );
                $.effects.removeWrapper( el );
                done();
            }
        });

    };

})(jQuery);

(function( $, undefined ) {

    $.effects.effect.drop = function( o, done ) {

        var el = $( this ),
        props = [ "position", "top", "bottom", "left", "right", "opacity", "height", "width" ],
        mode = $.effects.setMode( el, o.mode || "hide" ),
        show = mode === "show",
        direction = o.direction || "left",
        ref = ( direction === "up" || direction === "down" ) ? "top" : "left",
        motion = ( direction === "up" || direction === "left" ) ? "pos" : "neg",
        animation = {
            opacity: show ? 1 : 0
        },
        distance;

        // Adjust
        $.effects.save( el, props );
        el.show();
        $.effects.createWrapper( el );

        distance = o.distance || el[ ref === "top" ? "outerHeight": "outerWidth" ]( true ) / 2;

        if ( show ) {
            el
            .css( "opacity", 0 )
            .css( ref, motion === "pos" ? - distance : distance );
        }

        // Animation
        animation[ ref ] = ( show ?
        ( motion === "pos" ? "+=" : "-=" ) :
        ( motion === "pos" ? "-=" : "+=" ) ) +
        distance;

        // Animate
        el.animate( animation, {
            queue: false,
            duration: o.duration,
            easing: o.easing,
            complete: function() {
                if ( mode === "hide" ) {
                    el.hide();
                }
                $.effects.restore( el, props );
                $.effects.removeWrapper( el );
                done();
            }
        });
    };

})(jQuery);

(function( $, undefined ) {

    $.effects.effect.explode = function( o, done ) {

        var rows = o.pieces ? Math.round( Math.sqrt( o.pieces ) ) : 3,
        cells = rows,
        el = $( this ),
        mode = $.effects.setMode( el, o.mode || "hide" ),
        show = mode === "show",
        // show and then visibility:hidden the element before calculating offset
        offset = el.show().css( "visibility", "hidden" ).offset(),
        // width and height of a piece
        width = Math.ceil( el.outerWidth() / cells ),
        height = Math.ceil( el.outerHeight() / rows ),
        pieces = [],
        // loop
        i, j, left, top, mx, my;

        // children animate complete:
        function childComplete() {
            pieces.push( this );
            if ( pieces.length === rows * cells ) {
                animComplete();
            }
        }

        // clone the element for each row and cell.
        for ( i = 0; i < rows ; i++ ) {
            // ===>
            top = offset.top + i * height;
            my = i - ( rows - 1 ) / 2 ;

            for ( j = 0; j < cells ; j++ ) {
                // |||
                left = offset.left + j * width;
                mx = j - ( cells - 1 ) / 2 ;

                // Create a clone of the now hidden main element that will be absolute positioned
                // within a wrapper div off the -left and -top equal to size of our pieces
                el
                .clone()
                .appendTo( "body" )
                .wrap( "<div></div>" )
                .css({
                    position: "absolute",
                    visibility: "visible",
                    left: - j * width,
                    top: - i * height
                })
                // select the wrapper - make it overflow: hidden and absolute positioned based on
                // where the original was located +left and +top equal to the size of pieces
                .parent()
                .addClass( "ui-effects-explode" )
                .css({
                    position: "absolute",
                    overflow: "hidden",
                    width: width,
                    height: height,
                    left: left + ( show ? mx * width : 0 ),
                    top: top + ( show ? my * height : 0 ),
                    opacity: show ? 0 : 1
                }).animate({
                    left: left + ( show ? 0 : mx * width ),
                    top: top + ( show ? 0 : my * height ),
                    opacity: show ? 1 : 0
                }, o.duration || 500, o.easing, childComplete );
            }
        }

        function animComplete() {
            el.css({
                visibility: "visible"
            });
            $( pieces ).remove();
            if ( !show ) {
                el.hide();
            }
            done();
        }
    };

})(jQuery);

(function( $, undefined ) {

    $.effects.effect.fade = function( o, done ) {
        var el = $( this ),
        mode = $.effects.setMode( el, o.mode || "toggle" );

        el.animate({
            opacity: mode
        }, {
            queue: false,
            duration: o.duration,
            easing: o.easing,
            complete: done
        });
    };

})( jQuery );

(function( $, undefined ) {

    $.effects.effect.fold = function( o, done ) {

        // Create element
        var el = $( this ),
        props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
        mode = $.effects.setMode( el, o.mode || "hide" ),
        show = mode === "show",
        hide = mode === "hide",
        size = o.size || 15,
        percent = /([0-9]+)%/.exec( size ),
        horizFirst = !!o.horizFirst,
        widthFirst = show !== horizFirst,
        ref = widthFirst ? [ "width", "height" ] : [ "height", "width" ],
        duration = o.duration / 2,
        wrapper, distance,
        animation1 = {},
        animation2 = {};

        $.effects.save( el, props );
        el.show();

        // Create Wrapper
        wrapper = $.effects.createWrapper( el ).css({
            overflow: "hidden"
        });
        distance = widthFirst ?
        [ wrapper.width(), wrapper.height() ] :
        [ wrapper.height(), wrapper.width() ];

        if ( percent ) {
            size = parseInt( percent[ 1 ], 10 ) / 100 * distance[ hide ? 0 : 1 ];
        }
        if ( show ) {
            wrapper.css( horizFirst ? {
                height: 0,
                width: size
            } : {
                height: size,
                width: 0
            });
        }

        // Animation
        animation1[ ref[ 0 ] ] = show ? distance[ 0 ] : size;
        animation2[ ref[ 1 ] ] = show ? distance[ 1 ] : 0;

        // Animate
        wrapper
        .animate( animation1, duration, o.easing )
        .animate( animation2, duration, o.easing, function() {
            if ( hide ) {
                el.hide();
            }
            $.effects.restore( el, props );
            $.effects.removeWrapper( el );
            done();
        });

    };

})(jQuery);

(function( $, undefined ) {

    $.effects.effect.highlight = function( o, done ) {
        var elem = $( this ),
        props = [ "backgroundImage", "backgroundColor", "opacity" ],
        mode = $.effects.setMode( elem, o.mode || "show" ),
        animation = {
            backgroundColor: elem.css( "backgroundColor" )
        };

        if (mode === "hide") {
            animation.opacity = 0;
        }

        $.effects.save( elem, props );

        elem
        .show()
        .css({
            backgroundImage: "none",
            backgroundColor: o.color || "#ffff99"
        })
        .animate( animation, {
            queue: false,
            duration: o.duration,
            easing: o.easing,
            complete: function() {
                if ( mode === "hide" ) {
                    elem.hide();
                }
                $.effects.restore( elem, props );
                done();
            }
        });
    };

})(jQuery);

(function( $, undefined ) {

    $.effects.effect.pulsate = function( o, done ) {
        var elem = $( this ),
        mode = $.effects.setMode( elem, o.mode || "show" ),
        show = mode === "show",
        hide = mode === "hide",
        showhide = ( show || mode === "hide" ),
        // showing or hiding leaves of the "last" animation
        anims = ( ( o.times || 5 ) * 2 ) + ( showhide ? 1 : 0 ),
        duration = o.duration / anims,
        animateTo = 0,
        queue = elem.queue(),
        queuelen = queue.length,
        i;

        if ( show || !elem.is(":visible")) {
            elem.css( "opacity", 0 ).show();
            animateTo = 1;
        }

        // anims - 1 opacity "toggles"
        for ( i = 1; i < anims; i++ ) {
            elem.animate({
                opacity: animateTo
            }, duration, o.easing );
            animateTo = 1 - animateTo;
        }

        elem.animate({
            opacity: animateTo
        }, duration, o.easing);

        elem.queue(function() {
            if ( hide ) {
                elem.hide();
            }
            done();
        });

        // We just queued up "anims" animations, we need to put them next in the queue
        if ( queuelen > 1 ) {
            queue.splice.apply( queue,
            [ 1, 0 ].concat( queue.splice( queuelen, anims + 1 ) ) );
        }
        elem.dequeue();
    };

})(jQuery);

(function( $, undefined ) {

    $.effects.effect.puff = function( o, done ) {
        var elem = $( this ),
        mode = $.effects.setMode( elem, o.mode || "hide" ),
        hide = mode === "hide",
        percent = parseInt( o.percent, 10 ) || 150,
        factor = percent / 100,
        original = {
            height: elem.height(),
            width: elem.width(),
            outerHeight: elem.outerHeight(),
            outerWidth: elem.outerWidth()
        };

        $.extend( o, {
            effect: "scale",
            queue: false,
            fade: true,
            mode: mode,
            complete: done,
            percent: hide ? percent : 100,
            from: hide ?
            original :
            {
                height: original.height * factor,
                width: original.width * factor,
                outerHeight: original.outerHeight * factor,
                outerWidth: original.outerWidth * factor
            }
        });

        elem.effect( o );
    };

    $.effects.effect.scale = function( o, done ) {

        // Create element
        var el = $( this ),
        options = $.extend( true, {}, o ),
        mode = $.effects.setMode( el, o.mode || "effect" ),
        percent = parseInt( o.percent, 10 ) ||
        ( parseInt( o.percent, 10 ) === 0 ? 0 : ( mode === "hide" ? 0 : 100 ) ),
        direction = o.direction || "both",
        origin = o.origin,
        original = {
            height: el.height(),
            width: el.width(),
            outerHeight: el.outerHeight(),
            outerWidth: el.outerWidth()
        },
        factor = {
            y: direction !== "horizontal" ? (percent / 100) : 1,
            x: direction !== "vertical" ? (percent / 100) : 1
        };

        // We are going to pass this effect to the size effect:
        options.effect = "size";
        options.queue = false;
        options.complete = done;

        // Set default origin and restore for show/hide
        if ( mode !== "effect" ) {
            options.origin = origin || ["middle", "center"];
            options.restore = true;
        }

        options.from = o.from || ( mode === "show" ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : original );
        options.to = {
            height: original.height * factor.y,
            width: original.width * factor.x,
            outerHeight: original.outerHeight * factor.y,
            outerWidth: original.outerWidth * factor.x
        };

        // Fade option to support puff
        if ( options.fade ) {
            if ( mode === "show" ) {
                options.from.opacity = 0;
                options.to.opacity = 1;
            }
            if ( mode === "hide" ) {
                options.from.opacity = 1;
                options.to.opacity = 0;
            }
        }

        // Animate
        el.effect( options );

    };

    $.effects.effect.size = function( o, done ) {

        // Create element
        var original, baseline, factor,
        el = $( this ),
        props0 = [ "position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity" ],
        // Always restore
        props1 = [ "position", "top", "bottom", "left", "right", "overflow", "opacity" ],
        // Copy for children
        props2 = [ "width", "height", "overflow" ],
        cProps = [ "fontSize" ],
        vProps = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ],
        hProps = [ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ],
        // Set options
        mode = $.effects.setMode( el, o.mode || "effect" ),
        restore = o.restore || mode !== "effect",
        scale = o.scale || "both",
        origin = o.origin || [ "middle", "center" ],
        position = el.css( "position" ),
        props = restore ? props0 : props1,
        zero = {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        };

        if ( mode === "show" ) {
            el.show();
        }
        original = {
            height: el.height(),
            width: el.width(),
            outerHeight: el.outerHeight(),
            outerWidth: el.outerWidth()
        };

        if ( o.mode === "toggle" && mode === "show" ) {
            el.from = o.to || zero;
            el.to = o.from || original;
        } else {
            el.from = o.from || ( mode === "show" ? zero : original );
            el.to = o.to || ( mode === "hide" ? zero : original );
        }

        // Set scaling factor
        factor = {
            from: {
                y: el.from.height / original.height,
                x: el.from.width / original.width
            },
            to: {
                y: el.to.height / original.height,
                x: el.to.width / original.width
            }
        };

        // Scale the css box
        if ( scale === "box" || scale === "both" ) {

            // Vertical props scaling
            if ( factor.from.y !== factor.to.y ) {
                props = props.concat( vProps );
                el.from = $.effects.setTransition( el, vProps, factor.from.y, el.from );
                el.to = $.effects.setTransition( el, vProps, factor.to.y, el.to );
            }

            // Horizontal props scaling
            if ( factor.from.x !== factor.to.x ) {
                props = props.concat( hProps );
                el.from = $.effects.setTransition( el, hProps, factor.from.x, el.from );
                el.to = $.effects.setTransition( el, hProps, factor.to.x, el.to );
            }
        }

        // Scale the content
        if ( scale === "content" || scale === "both" ) {

            // Vertical props scaling
            if ( factor.from.y !== factor.to.y ) {
                props = props.concat( cProps ).concat( props2 );
                el.from = $.effects.setTransition( el, cProps, factor.from.y, el.from );
                el.to = $.effects.setTransition( el, cProps, factor.to.y, el.to );
            }
        }

        $.effects.save( el, props );
        el.show();
        $.effects.createWrapper( el );
        el.css( "overflow", "hidden" ).css( el.from );

        // Adjust
        if (origin) {
            // Calculate baseline shifts
            baseline = $.effects.getBaseline( origin, original );
            el.from.top = ( original.outerHeight - el.outerHeight() ) * baseline.y;
            el.from.left = ( original.outerWidth - el.outerWidth() ) * baseline.x;
            el.to.top = ( original.outerHeight - el.to.outerHeight ) * baseline.y;
            el.to.left = ( original.outerWidth - el.to.outerWidth ) * baseline.x;
        }
        el.css( el.from ); // set top & left

        // Animate
        if ( scale === "content" || scale === "both" ) {
            // Scale the children

            // Add margins/font-size
            vProps = vProps.concat([ "marginTop", "marginBottom" ]).concat(cProps);
            hProps = hProps.concat([ "marginLeft", "marginRight" ]);
            props2 = props0.concat(vProps).concat(hProps);

            el.find( "*[width]" ).each( function() {
                var child = $( this ),
                c_original = {
                    height: child.height(),
                    width: child.width(),
                    outerHeight: child.outerHeight(),
                    outerWidth: child.outerWidth()
                };
                if (restore) {
                    $.effects.save(child, props2);
                }

                child.from = {
                    height: c_original.height * factor.from.y,
                    width: c_original.width * factor.from.x,
                    outerHeight: c_original.outerHeight * factor.from.y,
                    outerWidth: c_original.outerWidth * factor.from.x
                };
                child.to = {
                    height: c_original.height * factor.to.y,
                    width: c_original.width * factor.to.x,
                    outerHeight: c_original.height * factor.to.y,
                    outerWidth: c_original.width * factor.to.x
                };

                // Vertical props scaling
                if ( factor.from.y !== factor.to.y ) {
                    child.from = $.effects.setTransition( child, vProps, factor.from.y, child.from );
                    child.to = $.effects.setTransition( child, vProps, factor.to.y, child.to );
                }

                // Horizontal props scaling
                if ( factor.from.x !== factor.to.x ) {
                    child.from = $.effects.setTransition( child, hProps, factor.from.x, child.from );
                    child.to = $.effects.setTransition( child, hProps, factor.to.x, child.to );
                }

                // Animate children
                child.css( child.from );
                child.animate( child.to, o.duration, o.easing, function() {

                    // Restore children
                    if ( restore ) {
                        $.effects.restore( child, props2 );
                    }
                });
            });
        }

        // Animate
        el.animate( el.to, {
            queue: false,
            duration: o.duration,
            easing: o.easing,
            complete: function() {
                if ( el.to.opacity === 0 ) {
                    el.css( "opacity", el.from.opacity );
                }
                if ( mode === "hide" ) {
                    el.hide();
                }
                $.effects.restore( el, props );
                if ( !restore ) {

                    // we need to calculate our new positioning based on the scaling
                    if ( position === "static" ) {
                        el.css({
                            position: "relative",
                            top: el.to.top,
                            left: el.to.left
                        });
                    } else {
                        $.each([ "top", "left" ], function( idx, pos ) {
                            el.css( pos, function( _, str ) {
                                var val = parseInt( str, 10 ),
                                toRef = idx ? el.to.left : el.to.top;

                                // if original was "auto", recalculate the new value from wrapper
                                if ( str === "auto" ) {
                                    return toRef + "px";
                                }

                                return val + toRef + "px";
                            });
                        });
                    }
                }

                $.effects.removeWrapper( el );
                done();
            }
        });

    };

})(jQuery);

(function( $, undefined ) {

    $.effects.effect.shake = function( o, done ) {

        var el = $( this ),
        props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
        mode = $.effects.setMode( el, o.mode || "effect" ),
        direction = o.direction || "left",
        distance = o.distance || 20,
        times = o.times || 3,
        anims = times * 2 + 1,
        speed = Math.round(o.duration / anims),
        ref = (direction === "up" || direction === "down") ? "top" : "left",
        positiveMotion = (direction === "up" || direction === "left"),
        animation = {},
        animation1 = {},
        animation2 = {},
        i,
        // we will need to re-assemble the queue to stack our animations in place
        queue = el.queue(),
        queuelen = queue.length;

        $.effects.save( el, props );
        el.show();
        $.effects.createWrapper( el );

        // Animation
        animation[ ref ] = ( positiveMotion ? "-=" : "+=" ) + distance;
        animation1[ ref ] = ( positiveMotion ? "+=" : "-=" ) + distance * 2;
        animation2[ ref ] = ( positiveMotion ? "-=" : "+=" ) + distance * 2;

        // Animate
        el.animate( animation, speed, o.easing );

        // Shakes
        for ( i = 1; i < times; i++ ) {
            el.animate( animation1, speed, o.easing ).animate( animation2, speed, o.easing );
        }
        el
        .animate( animation1, speed, o.easing )
        .animate( animation, speed / 2, o.easing )
        .queue(function() {
            if ( mode === "hide" ) {
                el.hide();
            }
            $.effects.restore( el, props );
            $.effects.removeWrapper( el );
            done();
        });

        // inject all the animations we just queued to be first in line (after "inprogress")
        if ( queuelen > 1) {
            queue.splice.apply( queue,
            [ 1, 0 ].concat( queue.splice( queuelen, anims + 1 ) ) );
        }
        el.dequeue();

    };

})(jQuery);

(function( $, undefined ) {

    $.effects.effect.slide = function( o, done ) {

        // Create element
        var el = $( this ),
        props = [ "position", "top", "bottom", "left", "right", "width", "height" ],
        mode = $.effects.setMode( el, o.mode || "show" ),
        show = mode === "show",
        direction = o.direction || "left",
        ref = (direction === "up" || direction === "down") ? "top" : "left",
        positiveMotion = (direction === "up" || direction === "left"),
        distance,
        animation = {};

        // Adjust
        $.effects.save( el, props );
        el.show();
        distance = o.distance || el[ ref === "top" ? "outerHeight" : "outerWidth" ]( true );

        $.effects.createWrapper( el ).css({
            overflow: "hidden"
        });

        if ( show ) {
            el.css( ref, positiveMotion ? (isNaN(distance) ? "-" + distance : - distance) : distance );
        }

        // Animation
        animation[ ref ] = ( show ?
        ( positiveMotion ? "+=" : "-=") :
        ( positiveMotion ? "-=" : "+=")) +
        distance;

        // Animate
        el.animate( animation, {
            queue: false,
            duration: o.duration,
            easing: o.easing,
            complete: function() {
                if ( mode === "hide" ) {
                    el.hide();
                }
                $.effects.restore( el, props );
                $.effects.removeWrapper( el );
                done();
            }
        });
    };

})(jQuery);

(function( $, undefined ) {

    $.effects.effect.transfer = function( o, done ) {
        var elem = $( this ),
        target = $( o.to ),
        targetFixed = target.css( "position" ) === "fixed",
        body = $("body"),
        fixTop = targetFixed ? body.scrollTop() : 0,
        fixLeft = targetFixed ? body.scrollLeft() : 0,
        endPosition = target.offset(),
        animation = {
            top: endPosition.top - fixTop ,
            left: endPosition.left - fixLeft ,
            height: target.innerHeight(),
            width: target.innerWidth()
        },
        startPosition = elem.offset(),
        transfer = $( "<div class='ui-effects-transfer'></div>" )
        .appendTo( document.body )
        .addClass( o.className )
        .css({
            top: startPosition.top - fixTop ,
            left: startPosition.left - fixLeft ,
            height: elem.innerHeight(),
            width: elem.innerWidth(),
            position: targetFixed ? "fixed" : "absolute"
        })
        .animate( animation, o.duration, o.easing, function() {
            transfer.remove();
            done();
        });
    };

})(jQuery);

(function( $, undefined ) {

    $.widget( "ui.menu", {
        version: "1.10.3",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",

            // callbacks
            blur: null,
            focus: null,
            select: null
        },

        _create: function() {
            this.activeMenu = this.element;
            // flag used to prevent firing of the click handler
            // as the event bubbles up through nested menus
            this.mouseHandled = false;
            this.element
            .uniqueId()
            .addClass( "ui-menu ui-widget ui-widget-content ui-corner-all" )
            .toggleClass( "ui-menu-icons", !!this.element.find( ".ui-icon" ).length )
            .attr({
                role: this.options.role,
                tabIndex: 0
            })
            // need to catch all clicks on disabled menu
            // not possible through _on
            .bind( "click" + this.eventNamespace, $.proxy(function( event ) {
                if ( this.options.disabled ) {
                    event.preventDefault();
                }
            }, this ));

            if ( this.options.disabled ) {
                this.element
                .addClass( "ui-state-disabled" )
                .attr( "aria-disabled", "true" );
            }

            this._on({
                // Prevent focus from sticking to links inside menu after clicking
                // them (focus should always stay on UL during navigation).
                "mousedown .ui-menu-item > a": function( event ) {
                    event.preventDefault();
                },
                "click .ui-state-disabled > a": function( event ) {
                    event.preventDefault();
                },
                "click .ui-menu-item:has(a)": function( event ) {
                    var target = $( event.target ).closest( ".ui-menu-item" );
                    if ( !this.mouseHandled && target.not( ".ui-state-disabled" ).length ) {
                        this.mouseHandled = true;

                        this.select( event );
                        // Open submenu on click
                        if ( target.has( ".ui-menu" ).length ) {
                            this.expand( event );
                        } else if ( !this.element.is( ":focus" ) ) {
                            // Redirect focus to the menu
                            this.element.trigger( "focus", [ true ] );

                            // If the active item is on the top level, let it stay active.
                            // Otherwise, blur the active item since it is no longer visible.
                            if ( this.active && this.active.parents( ".ui-menu" ).length === 1 ) {
                                clearTimeout( this.timer );
                            }
                        }
                    }
                },
                "mouseenter .ui-menu-item": function( event ) {
                    var target = $( event.currentTarget );
                    // Remove ui-state-active class from siblings of the newly focused menu item
                    // to avoid a jump caused by adjacent elements both having a class with a border
                    target.siblings().children( ".ui-state-active" ).removeClass( "ui-state-active" );
                    this.focus( event, target );
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function( event, keepActiveItem ) {
                    // If there's already an active item, keep it active
                    // If not, activate the first item
                    var item = this.active || this.element.children( ".ui-menu-item" ).eq( 0 );

                    if ( !keepActiveItem ) {
                        this.focus( event, item );
                    }
                },
                blur: function( event ) {
                    this._delay(function() {
                        if ( !$.contains( this.element[0], this.document[0].activeElement ) ) {
                            this.collapseAll( event );
                        }
                    });
                },
                keydown: "_keydown"
            });

            this.refresh();

            // Clicks outside of a menu collapse any open menus
            this._on( this.document, {
                click: function( event ) {
                    if ( !$( event.target ).closest( ".ui-menu" ).length ) {
                        this.collapseAll( event );
                    }

                    // Reset the mouseHandled flag
                    this.mouseHandled = false;
                }
            });
        },

        _destroy: function() {
            // Destroy (sub)menus
            this.element
            .removeAttr( "aria-activedescendant" )
            .find( ".ui-menu" ).addBack()
            .removeClass( "ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons" )
            .removeAttr( "role" )
            .removeAttr( "tabIndex" )
            .removeAttr( "aria-labelledby" )
            .removeAttr( "aria-expanded" )
            .removeAttr( "aria-hidden" )
            .removeAttr( "aria-disabled" )
            .removeUniqueId()
            .show();

            // Destroy menu items
            this.element.find( ".ui-menu-item" )
            .removeClass( "ui-menu-item" )
            .removeAttr( "role" )
            .removeAttr( "aria-disabled" )
            .children( "a" )
            .removeUniqueId()
            .removeClass( "ui-corner-all ui-state-hover" )
            .removeAttr( "tabIndex" )
            .removeAttr( "role" )
            .removeAttr( "aria-haspopup" )
            .children().each( function() {
                var elem = $( this );
                if ( elem.data( "ui-menu-submenu-carat" ) ) {
                    elem.remove();
                }
            });

            // Destroy menu dividers
            this.element.find( ".ui-menu-divider" ).removeClass( "ui-menu-divider ui-widget-content" );
        },

        _keydown: function( event ) {
            /*jshint maxcomplexity:20*/
            var match, prev, character, skip, regex,
            preventDefault = true;

            function escape( value ) {
                return value.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" );
            }

            switch ( event.keyCode ) {
            case $.ui.keyCode.PAGE_UP:
                this.previousPage( event );
                break;
            case $.ui.keyCode.PAGE_DOWN:
                this.nextPage( event );
                break;
            case $.ui.keyCode.HOME:
                this._move( "first", "first", event );
                break;
            case $.ui.keyCode.END:
                this._move( "last", "last", event );
                break;
            case $.ui.keyCode.UP:
                this.previous( event );
                break;
            case $.ui.keyCode.DOWN:
                this.next( event );
                break;
            case $.ui.keyCode.LEFT:
                this.collapse( event );
                break;
            case $.ui.keyCode.RIGHT:
                if ( this.active && !this.active.is( ".ui-state-disabled" ) ) {
                    this.expand( event );
                }
                break;
            case $.ui.keyCode.ENTER:
            case $.ui.keyCode.SPACE:
                this._activate( event );
                break;
            case $.ui.keyCode.ESCAPE:
                this.collapse( event );
                break;
            default:
                preventDefault = false;
                prev = this.previousFilter || "";
                character = String.fromCharCode( event.keyCode );
                skip = false;

                clearTimeout( this.filterTimer );

                if ( character === prev ) {
                    skip = true;
                } else {
                    character = prev + character;
                }

                regex = new RegExp( "^" + escape( character ), "i" );
                match = this.activeMenu.children( ".ui-menu-item" ).filter(function() {
                    return regex.test( $( this ).children( "a" ).text() );
                });
                match = skip && match.index( this.active.next() ) !== - 1 ?
                this.active.nextAll( ".ui-menu-item" ) :
                match;

                // If no matches on the current filter, reset to the last character pressed
                // to move down the menu to the first item that starts with that character
                if ( !match.length ) {
                    character = String.fromCharCode( event.keyCode );
                    regex = new RegExp( "^" + escape( character ), "i" );
                    match = this.activeMenu.children( ".ui-menu-item" ).filter(function() {
                        return regex.test( $( this ).children( "a" ).text() );
                    });
                }

                if ( match.length ) {
                    this.focus( event, match );
                    if ( match.length > 1 ) {
                        this.previousFilter = character;
                        this.filterTimer = this._delay(function() {
                            delete this.previousFilter;
                        }, 1000 );
                    } else {
                        delete this.previousFilter;
                    }
                } else {
                    delete this.previousFilter;
                }
            }

            if ( preventDefault ) {
                event.preventDefault();
            }
        },

        _activate: function( event ) {
            if ( !this.active.is( ".ui-state-disabled" ) ) {
                if ( this.active.children( "a[aria-haspopup='true']" ).length ) {
                    this.expand( event );
                } else {
                    this.select( event );
                }
            }
        },

        refresh: function() {
            var menus,
            icon = this.options.icons.submenu,
            submenus = this.element.find( this.options.menus );

            // Initialize nested menus
            submenus.filter( ":not(.ui-menu)" )
            .addClass( "ui-menu ui-widget ui-widget-content ui-corner-all" )
            .hide()
            .attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            })
            .each(function() {
                var menu = $( this ),
                item = menu.prev( "a" ),
                submenuCarat = $( "<span>" )
                .addClass( "ui-menu-icon ui-icon " + icon )
                .data( "ui-menu-submenu-carat", true );

                item
                .attr( "aria-haspopup", "true" )
                .prepend( submenuCarat );
                menu.attr( "aria-labelledby", item.attr( "id" ) );
            });

            menus = submenus.add( this.element );

            // Don't refresh list items that are already adapted
            menus.children( ":not(.ui-menu-item):has(a)" )
            .addClass( "ui-menu-item" )
            .attr( "role", "presentation" )
            .children( "a" )
            .uniqueId()
            .addClass( "ui-corner-all" )
            .attr({
                tabIndex: - 1,
                role: this._itemRole()
            });

            // Initialize unlinked menu-items containing spaces and/or dashes only as dividers
            menus.children( ":not(.ui-menu-item)" ).each(function() {
                var item = $( this );
                // hyphen, em dash, en dash
                if ( !/[^\-\u2014\u2013\s]/.test( item.text() ) ) {
                    item.addClass( "ui-widget-content ui-menu-divider" );
                }
            });

            // Add aria-disabled attribute to any disabled menu item
            menus.children( ".ui-state-disabled" ).attr( "aria-disabled", "true" );

            // If the active item has been removed, blur the menu
            if ( this.active && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
                this.blur();
            }
        },

        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }
            [ this.options.role ];
        },

        _setOption: function( key, value ) {
            if ( key === "icons" ) {
                this.element.find( ".ui-menu-icon" )
                .removeClass( this.options.icons.submenu )
                .addClass( value.submenu );
            }
            this._super( key, value );
        },

        focus: function( event, item ) {
            var nested, focused;
            this.blur( event, event && event.type === "focus" );

            this._scrollIntoView( item );

            this.active = item.first();
            focused = this.active.children( "a" ).addClass( "ui-state-focus" );
            // Only update aria-activedescendant if there's a role
            // otherwise we assume focus is managed elsewhere
            if ( this.options.role ) {
                this.element.attr( "aria-activedescendant", focused.attr( "id" ) );
            }

            // Highlight active parent menu item, if any
            this.active
            .parent()
            .closest( ".ui-menu-item" )
            .children( "a:first" )
            .addClass( "ui-state-active" );

            if ( event && event.type === "keydown" ) {
                this._close();
            } else {
                this.timer = this._delay(function() {
                    this._close();
                }, this.delay );
            }

            nested = item.children( ".ui-menu" );
            if ( nested.length && ( /^mouse/.test( event.type ) ) ) {
                this._startOpening(nested);
            }
            this.activeMenu = item.parent();

            this._trigger( "focus", event, {
                item: item 
            });
        },

        _scrollIntoView: function( item ) {
            var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
            if ( this._hasScroll() ) {
                borderTop = parseFloat( $.css( this.activeMenu[0], "borderTopWidth" ) ) || 0;
                paddingTop = parseFloat( $.css( this.activeMenu[0], "paddingTop" ) ) || 0;
                offset = item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop;
                scroll = this.activeMenu.scrollTop();
                elementHeight = this.activeMenu.height();
                itemHeight = item.height();

                if ( offset < 0 ) {
                    this.activeMenu.scrollTop( scroll + offset );
                } else if ( offset + itemHeight > elementHeight ) {
                    this.activeMenu.scrollTop( scroll + offset - elementHeight + itemHeight );
                }
            }
        },

        blur: function( event, fromFocus ) {
            if ( !fromFocus ) {
                clearTimeout( this.timer );
            }

            if ( !this.active ) {
                return;
            }

            this.active.children( "a" ).removeClass( "ui-state-focus" );
            this.active = null;

            this._trigger( "blur", event, {
                item: this.active 
            });
        },

        _startOpening: function( submenu ) {
            clearTimeout( this.timer );

            // Don't open if already open fixes a Firefox bug that caused a .5 pixel
            // shift in the submenu position when mousing over the carat icon
            if ( submenu.attr( "aria-hidden" ) !== "true" ) {
                return;
            }

            this.timer = this._delay(function() {
                this._close();
                this._open( submenu );
            }, this.delay );
        },

        _open: function( submenu ) {
            var position = $.extend({
                of: this.active
            }, this.options.position );

            clearTimeout( this.timer );
            this.element.find( ".ui-menu" ).not( submenu.parents( ".ui-menu" ) )
            .hide()
            .attr( "aria-hidden", "true" );

            submenu
            .show()
            .removeAttr( "aria-hidden" )
            .attr( "aria-expanded", "true" )
            .position( position );
        },

        collapseAll: function( event, all ) {
            clearTimeout( this.timer );
            this.timer = this._delay(function() {
                // If we were passed an event, look for the submenu that contains the event
                var currentMenu = all ? this.element :
                $( event && event.target ).closest( this.element.find( ".ui-menu" ) );

                // If we found no valid submenu ancestor, use the main menu to close all sub menus anyway
                if ( !currentMenu.length ) {
                    currentMenu = this.element;
                }

                this._close( currentMenu );

                this.blur( event );
                this.activeMenu = currentMenu;
            }, this.delay );
        },

        // With no arguments, closes the currently active menu - if nothing is active
        // it closes all menus.  If passed an argument, it will search for menus BELOW
        _close: function( startMenu ) {
            if ( !startMenu ) {
                startMenu = this.active ? this.active.parent() : this.element;
            }

            startMenu
            .find( ".ui-menu" )
            .hide()
            .attr( "aria-hidden", "true" )
            .attr( "aria-expanded", "false" )
            .end()
            .find( "a.ui-state-active" )
            .removeClass( "ui-state-active" );
        },

        collapse: function( event ) {
            var newItem = this.active &&
            this.active.parent().closest( ".ui-menu-item", this.element );
            if ( newItem && newItem.length ) {
                this._close();
                this.focus( event, newItem );
            }
        },

        expand: function( event ) {
            var newItem = this.active &&
            this.active
            .children( ".ui-menu " )
            .children( ".ui-menu-item" )
            .first();

            if ( newItem && newItem.length ) {
                this._open( newItem.parent() );

                // Delay so Firefox will not hide activedescendant change in expanding submenu from AT
                this._delay(function() {
                    this.focus( event, newItem );
                });
            }
        },

        next: function( event ) {
            this._move( "next", "first", event );
        },

        previous: function( event ) {
            this._move( "prev", "last", event );
        },

        isFirstItem: function() {
            return this.active && !this.active.prevAll( ".ui-menu-item" ).length;
        },

        isLastItem: function() {
            return this.active && !this.active.nextAll( ".ui-menu-item" ).length;
        },

        _move: function( direction, filter, event ) {
            var next;
            if ( this.active ) {
                if ( direction === "first" || direction === "last" ) {
                    next = this.active
                    [ direction === "first" ? "prevAll" : "nextAll" ]( ".ui-menu-item" )
                    .eq( - 1 );
                } else {
                    next = this.active
                    [ direction + "All" ]( ".ui-menu-item" )
                    .eq( 0 );
                }
            }
            if ( !next || !next.length || !this.active ) {
                next = this.activeMenu.children( ".ui-menu-item" )[ filter ]();
            }

            this.focus( event, next );
        },

        nextPage: function( event ) {
            var item, base, height;

            if ( !this.active ) {
                this.next( event );
                return;
            }
            if ( this.isLastItem() ) {
                return;
            }
            if ( this._hasScroll() ) {
                base = this.active.offset().top;
                height = this.element.height();
                this.active.nextAll( ".ui-menu-item" ).each(function() {
                    item = $( this );
                    return item.offset().top - base - height < 0;
                });

                this.focus( event, item );
            } else {
                this.focus( event, this.activeMenu.children( ".ui-menu-item" )
                [ !this.active ? "first" : "last" ]() );
            }
        },

        previousPage: function( event ) {
            var item, base, height;
            if ( !this.active ) {
                this.next( event );
                return;
            }
            if ( this.isFirstItem() ) {
                return;
            }
            if ( this._hasScroll() ) {
                base = this.active.offset().top;
                height = this.element.height();
                this.active.prevAll( ".ui-menu-item" ).each(function() {
                    item = $( this );
                    return item.offset().top - base + height > 0;
                });

                this.focus( event, item );
            } else {
                this.focus( event, this.activeMenu.children( ".ui-menu-item" ).first() );
            }
        },

        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop( "scrollHeight" );
        },

        select: function( event ) {
            // TODO: It should never be possible to not have an active item at this
            // point, but the tests don't trigger mouseenter before click.
            this.active = this.active || $( event.target ).closest( ".ui-menu-item" );
            var ui = {
                item: this.active 
            };
            if ( !this.active.has( ".ui-menu" ).length ) {
                this.collapseAll( event, true );
            }
            this._trigger( "select", event, ui );
        }
    });

}( jQuery ));

(function( $, undefined ) {

    $.ui = $.ui || {};

    var cachedScrollbarWidth,
    max = Math.max,
    abs = Math.abs,
    round = Math.round,
    rhorizontal = /left|center|right/,
    rvertical = /top|center|bottom/,
    roffset = /[\+\-]\d+(\.[\d]+)?%?/,
    rposition = /^\w+/,
    rpercent = /%$/,
    _position = $.fn.position;

    function getOffsets( offsets, width, height ) {
        return [
        parseFloat( offsets[ 0 ] ) * ( rpercent.test( offsets[ 0 ] ) ? width / 100 : 1 ),
        parseFloat( offsets[ 1 ] ) * ( rpercent.test( offsets[ 1 ] ) ? height / 100 : 1 )
        ];
    }

    function parseCss( element, property ) {
        return parseInt( $.css( element, property ), 10 ) || 0;
    }

    function getDimensions( elem ) {
        var raw = elem[0];
        if ( raw.nodeType === 9 ) {
            return {
                width: elem.width(),
                height: elem.height(),
                offset: {
                    top: 0,
                    left: 0 
                }
            };
        }
        if ( $.isWindow( raw ) ) {
            return {
                width: elem.width(),
                height: elem.height(),
                offset: {
                    top: elem.scrollTop(),
                    left: elem.scrollLeft() 
                }
            };
        }
        if ( raw.preventDefault ) {
            return {
                width: 0,
                height: 0,
                offset: {
                    top: raw.pageY,
                    left: raw.pageX 
                }
            };
        }
        return {
            width: elem.outerWidth(),
            height: elem.outerHeight(),
            offset: elem.offset()
        };
    }

    $.position = {
        scrollbarWidth: function() {
            if ( cachedScrollbarWidth !== undefined ) {
                return cachedScrollbarWidth;
            }
            var w1, w2,
            div = $( "<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>" ),
            innerDiv = div.children()[0];

            $( "body" ).append( div );
            w1 = innerDiv.offsetWidth;
            div.css( "overflow", "scroll" );

            w2 = innerDiv.offsetWidth;

            if ( w1 === w2 ) {
                w2 = div[0].clientWidth;
            }

            div.remove();

            return (cachedScrollbarWidth = w1 - w2);
        },
        getScrollInfo: function( within ) {
            var overflowX = within.isWindow ? "" : within.element.css( "overflow-x" ),
            overflowY = within.isWindow ? "" : within.element.css( "overflow-y" ),
            hasOverflowX = overflowX === "scroll" ||
            ( overflowX === "auto" && within.width < within.element[0].scrollWidth ),
            hasOverflowY = overflowY === "scroll" ||
            ( overflowY === "auto" && within.height < within.element[0].scrollHeight );
            return {
                width: hasOverflowY ? $.position.scrollbarWidth() : 0,
                height: hasOverflowX ? $.position.scrollbarWidth() : 0
            };
        },
        getWithinInfo: function( element ) {
            var withinElement = $( element || window ),
            isWindow = $.isWindow( withinElement[0] );
            return {
                element: withinElement,
                isWindow: isWindow,
                offset: withinElement.offset() || {
                    left: 0,
                    top: 0 
                },
                scrollLeft: withinElement.scrollLeft(),
                scrollTop: withinElement.scrollTop(),
                width: isWindow ? withinElement.width() : withinElement.outerWidth(),
                height: isWindow ? withinElement.height() : withinElement.outerHeight()
            };
        }
    };

    $.fn.position = function( options ) {
        if ( !options || !options.of ) {
            return _position.apply( this, arguments );
        }

        // make a copy, we don't want to modify arguments
        options = $.extend( {}, options );

        var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions,
        target = $( options.of ),
        within = $.position.getWithinInfo( options.within ),
        scrollInfo = $.position.getScrollInfo( within ),
        collision = ( options.collision || "flip" ).split( " " ),
        offsets = {};

        dimensions = getDimensions( target );
        if ( target[0].preventDefault ) {
            // force left top to allow flipping
            options.at = "left top";
        }
        targetWidth = dimensions.width;
        targetHeight = dimensions.height;
        targetOffset = dimensions.offset;
        // clone to reuse original targetOffset later
        basePosition = $.extend( {}, targetOffset );

        // force my and at to have valid horizontal and vertical positions
        // if a value is missing or invalid, it will be converted to center
        $.each( [ "my", "at" ], function() {
            var pos = ( options[ this ] || "" ).split( " " ),
            horizontalOffset,
            verticalOffset;

            if ( pos.length === 1) {
                pos = rhorizontal.test( pos[ 0 ] ) ?
                pos.concat( [ "center" ] ) :
                rvertical.test( pos[ 0 ] ) ?
                [ "center" ].concat( pos ) :
                [ "center", "center" ];
            }
            pos[ 0 ] = rhorizontal.test( pos[ 0 ] ) ? pos[ 0 ] : "center";
            pos[ 1 ] = rvertical.test( pos[ 1 ] ) ? pos[ 1 ] : "center";

            // calculate offsets
            horizontalOffset = roffset.exec( pos[ 0 ] );
            verticalOffset = roffset.exec( pos[ 1 ] );
            offsets[ this ] = [
            horizontalOffset ? horizontalOffset[ 0 ] : 0,
            verticalOffset ? verticalOffset[ 0 ] : 0
            ];

            // reduce to just the positions without the offsets
            options[ this ] = [
            rposition.exec( pos[ 0 ] )[ 0 ],
            rposition.exec( pos[ 1 ] )[ 0 ]
            ];
        });

        // normalize collision option
        if ( collision.length === 1 ) {
            collision[ 1 ] = collision[ 0 ];
        }

        if ( options.at[ 0 ] === "right" ) {
            basePosition.left += targetWidth;
        } else if ( options.at[ 0 ] === "center" ) {
            basePosition.left += targetWidth / 2;
        }

        if ( options.at[ 1 ] === "bottom" ) {
            basePosition.top += targetHeight;
        } else if ( options.at[ 1 ] === "center" ) {
            basePosition.top += targetHeight / 2;
        }

        atOffset = getOffsets( offsets.at, targetWidth, targetHeight );
        basePosition.left += atOffset[ 0 ];
        basePosition.top += atOffset[ 1 ];

        return this.each(function() {
            var collisionPosition, using,
            elem = $( this ),
            elemWidth = elem.outerWidth(),
            elemHeight = elem.outerHeight(),
            marginLeft = parseCss( this, "marginLeft" ),
            marginTop = parseCss( this, "marginTop" ),
            collisionWidth = elemWidth + marginLeft + parseCss( this, "marginRight" ) + scrollInfo.width,
            collisionHeight = elemHeight + marginTop + parseCss( this, "marginBottom" ) + scrollInfo.height,
            position = $.extend( {}, basePosition ),
            myOffset = getOffsets( offsets.my, elem.outerWidth(), elem.outerHeight() );

            if ( options.my[ 0 ] === "right" ) {
                position.left -= elemWidth;
            } else if ( options.my[ 0 ] === "center" ) {
                position.left -= elemWidth / 2;
            }

            if ( options.my[ 1 ] === "bottom" ) {
                position.top -= elemHeight;
            } else if ( options.my[ 1 ] === "center" ) {
                position.top -= elemHeight / 2;
            }

            position.left += myOffset[ 0 ];
            position.top += myOffset[ 1 ];

            // if the browser doesn't support fractions, then round for consistent results
            if ( !$.support.offsetFractions ) {
                position.left = round( position.left );
                position.top = round( position.top );
            }

            collisionPosition = {
                marginLeft: marginLeft,
                marginTop: marginTop
            };

            $.each( [ "left", "top" ], function( i, dir ) {
                if ( $.ui.position[ collision[ i ] ] ) {
                    $.ui.position[ collision[ i ] ][ dir ]( position, {
                        targetWidth: targetWidth,
                        targetHeight: targetHeight,
                        elemWidth: elemWidth,
                        elemHeight: elemHeight,
                        collisionPosition: collisionPosition,
                        collisionWidth: collisionWidth,
                        collisionHeight: collisionHeight,
                        offset: [ atOffset[ 0 ] + myOffset[ 0 ], atOffset [ 1 ] + myOffset[ 1 ] ],
                        my: options.my,
                        at: options.at,
                        within: within,
                        elem : elem
                    });
                }
            });

            if ( options.using ) {
                // adds feedback as second argument to using callback, if present
                using = function( props ) {
                    var left = targetOffset.left - position.left,
                    right = left + targetWidth - elemWidth,
                    top = targetOffset.top - position.top,
                    bottom = top + targetHeight - elemHeight,
                    feedback = {
                        target: {
                            element: target,
                            left: targetOffset.left,
                            top: targetOffset.top,
                            width: targetWidth,
                            height: targetHeight
                        },
                        element: {
                            element: elem,
                            left: position.left,
                            top: position.top,
                            width: elemWidth,
                            height: elemHeight
                        },
                        horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
                        vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
                    };
                    if ( targetWidth < elemWidth && abs( left + right ) < targetWidth ) {
                        feedback.horizontal = "center";
                    }
                    if ( targetHeight < elemHeight && abs( top + bottom ) < targetHeight ) {
                        feedback.vertical = "middle";
                    }
                    if ( max( abs( left ), abs( right ) ) > max( abs( top ), abs( bottom ) ) ) {
                        feedback.important = "horizontal";
                    } else {
                        feedback.important = "vertical";
                    }
                    options.using.call( this, props, feedback );
                };
            }

            elem.offset( $.extend( position, {
                using: using 
            }) );
        });
    };

    $.ui.position = {
        fit: {
            left: function( position, data ) {
                var within = data.within,
                withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
                outerWidth = within.width,
                collisionPosLeft = position.left - data.collisionPosition.marginLeft,
                overLeft = withinOffset - collisionPosLeft,
                overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
                newOverRight;

                // element is wider than within
                if ( data.collisionWidth > outerWidth ) {
                    // element is initially over the left side of within
                    if ( overLeft > 0 && overRight <= 0 ) {
                        newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
                        position.left += overLeft - newOverRight;
                        // element is initially over right side of within
                    } else if ( overRight > 0 && overLeft <= 0 ) {
                        position.left = withinOffset;
                        // element is initially over both left and right sides of within
                    } else {
                        if ( overLeft > overRight ) {
                            position.left = withinOffset + outerWidth - data.collisionWidth;
                        } else {
                            position.left = withinOffset;
                        }
                    }
                    // too far left -> align with left edge
                } else if ( overLeft > 0 ) {
                    position.left += overLeft;
                    // too far right -> align with right edge
                } else if ( overRight > 0 ) {
                    position.left -= overRight;
                    // adjust based on position and margin
                } else {
                    position.left = max( position.left - collisionPosLeft, position.left );
                }
            },
            top: function( position, data ) {
                var within = data.within,
                withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
                outerHeight = data.within.height,
                collisionPosTop = position.top - data.collisionPosition.marginTop,
                overTop = withinOffset - collisionPosTop,
                overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
                newOverBottom;

                // element is taller than within
                if ( data.collisionHeight > outerHeight ) {
                    // element is initially over the top of within
                    if ( overTop > 0 && overBottom <= 0 ) {
                        newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
                        position.top += overTop - newOverBottom;
                        // element is initially over bottom of within
                    } else if ( overBottom > 0 && overTop <= 0 ) {
                        position.top = withinOffset;
                        // element is initially over both top and bottom of within
                    } else {
                        if ( overTop > overBottom ) {
                            position.top = withinOffset + outerHeight - data.collisionHeight;
                        } else {
                            position.top = withinOffset;
                        }
                    }
                    // too far up -> align with top
                } else if ( overTop > 0 ) {
                    position.top += overTop;
                    // too far down -> align with bottom edge
                } else if ( overBottom > 0 ) {
                    position.top -= overBottom;
                    // adjust based on position and margin
                } else {
                    position.top = max( position.top - collisionPosTop, position.top );
                }
            }
        },
        flip: {
            left: function( position, data ) {
                var within = data.within,
                withinOffset = within.offset.left + within.scrollLeft,
                outerWidth = within.width,
                offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
                collisionPosLeft = position.left - data.collisionPosition.marginLeft,
                overLeft = collisionPosLeft - offsetLeft,
                overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
                myOffset = data.my[ 0 ] === "left" ?
                - data.elemWidth :
                data.my[ 0 ] === "right" ?
                data.elemWidth :
                0,
                atOffset = data.at[ 0 ] === "left" ?
                data.targetWidth :
                data.at[ 0 ] === "right" ?
                - data.targetWidth :
                0,
                offset = - 2 * data.offset[ 0 ],
                newOverRight,
                newOverLeft;

                if ( overLeft < 0 ) {
                    newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
                    if ( newOverRight < 0 || newOverRight < abs( overLeft ) ) {
                        position.left += myOffset + atOffset + offset;
                    }
                } else if ( overRight > 0 ) {
                    newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
                    if ( newOverLeft > 0 || abs( newOverLeft ) < overRight ) {
                        position.left += myOffset + atOffset + offset;
                    }
                }
            },
            top: function( position, data ) {
                var within = data.within,
                withinOffset = within.offset.top + within.scrollTop,
                outerHeight = within.height,
                offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
                collisionPosTop = position.top - data.collisionPosition.marginTop,
                overTop = collisionPosTop - offsetTop,
                overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
                top = data.my[ 1 ] === "top",
                myOffset = top ?
                - data.elemHeight :
                data.my[ 1 ] === "bottom" ?
                data.elemHeight :
                0,
                atOffset = data.at[ 1 ] === "top" ?
                data.targetHeight :
                data.at[ 1 ] === "bottom" ?
                - data.targetHeight :
                0,
                offset = - 2 * data.offset[ 1 ],
                newOverTop,
                newOverBottom;
                if ( overTop < 0 ) {
                    newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
                    if ( ( position.top + myOffset + atOffset + offset) > overTop && ( newOverBottom < 0 || newOverBottom < abs( overTop ) ) ) {
                        position.top += myOffset + atOffset + offset;
                    }
                } else if ( overBottom > 0 ) {
                    newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
                    if ( ( position.top + myOffset + atOffset + offset) > overBottom && ( newOverTop > 0 || abs( newOverTop ) < overBottom ) ) {
                        position.top += myOffset + atOffset + offset;
                    }
                }
            }
        },
        flipfit: {
            left: function() {
                $.ui.position.flip.left.apply( this, arguments );
                $.ui.position.fit.left.apply( this, arguments );
            },
            top: function() {
                $.ui.position.flip.top.apply( this, arguments );
                $.ui.position.fit.top.apply( this, arguments );
            }
        }
    };

    // fraction support test
    (function () {
        var testElement, testElementParent, testElementStyle, offsetLeft, i,
        body = document.getElementsByTagName( "body" )[ 0 ],
        div = document.createElement( "div" );

        //Create a "fake body" for testing based on method used in jQuery.support
        testElement = document.createElement( body ? "div" : "body" );
        testElementStyle = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        };
        if ( body ) {
            $.extend( testElementStyle, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
        }
        for ( i in testElementStyle ) {
            testElement.style[ i ] = testElementStyle[ i ];
        }
        testElement.appendChild( div );
        testElementParent = body || document.documentElement;
        testElementParent.insertBefore( testElement, testElementParent.firstChild );

        div.style.cssText = "position: absolute; left: 10.7432222px;";

        offsetLeft = $( div ).offset().left;
        $.support.offsetFractions = offsetLeft > 10 && offsetLeft < 11;

        testElement.innerHTML = "";
        testElementParent.removeChild( testElement );
    })();

}( jQuery ) );

(function( $, undefined ) {

    $.widget( "ui.progressbar", {
        version: "1.10.3",
        options: {
            max: 100,
            value: 0,

            change: null,
            complete: null
        },

        min: 0,

        _create: function() {
            // Constrain initial value
            this.oldValue = this.options.value = this._constrainedValue();

            this.element
            .addClass( "ui-progressbar ui-widget ui-widget-content ui-corner-all" )
            .attr({
                // Only set static values, aria-valuenow and aria-valuemax are
                // set inside _refreshValue()
                role: "progressbar",
                "aria-valuemin": this.min
            });

            this.valueDiv = $( "<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>" )
            .appendTo( this.element );

            this._refreshValue();
        },

        _destroy: function() {
            this.element
            .removeClass( "ui-progressbar ui-widget ui-widget-content ui-corner-all" )
            .removeAttr( "role" )
            .removeAttr( "aria-valuemin" )
            .removeAttr( "aria-valuemax" )
            .removeAttr( "aria-valuenow" );

            this.valueDiv.remove();
        },

        value: function( newValue ) {
            if ( newValue === undefined ) {
                return this.options.value;
            }

            this.options.value = this._constrainedValue( newValue );
            this._refreshValue();
        },

        _constrainedValue: function( newValue ) {
            if ( newValue === undefined ) {
                newValue = this.options.value;
            }

            this.indeterminate = newValue === false;

            // sanitize value
            if ( typeof newValue !== "number" ) {
                newValue = 0;
            }

            return this.indeterminate ? false :
            Math.min( this.options.max, Math.max( this.min, newValue ) );
        },

        _setOptions: function( options ) {
            // Ensure "value" option is set after other values (like max)
            var value = options.value;
            delete options.value;

            this._super( options );

            this.options.value = this._constrainedValue( value );
            this._refreshValue();
        },

        _setOption: function( key, value ) {
            if ( key === "max" ) {
                // Don't allow a max less than min
                value = Math.max( this.min, value );
            }

            this._super( key, value );
        },

        _percentage: function() {
            return this.indeterminate ? 100 : 100 * ( this.options.value - this.min ) / ( this.options.max - this.min );
        },

        _refreshValue: function() {
            var value = this.options.value,
            percentage = this._percentage();

            this.valueDiv
            .toggle( this.indeterminate || value > this.min )
            .toggleClass( "ui-corner-right", value === this.options.max )
            .width( percentage.toFixed(0) + "%" );

            this.element.toggleClass( "ui-progressbar-indeterminate", this.indeterminate );

            if ( this.indeterminate ) {
                this.element.removeAttr( "aria-valuenow" );
                if ( !this.overlayDiv ) {
                    this.overlayDiv = $( "<div class='ui-progressbar-overlay'></div>" ).appendTo( this.valueDiv );
                }
            } else {
                this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": value
                });
                if ( this.overlayDiv ) {
                    this.overlayDiv.remove();
                    this.overlayDiv = null;
                }
            }

            if ( this.oldValue !== value ) {
                this.oldValue = value;
                this._trigger( "change" );
            }
            if ( value === this.options.max ) {
                this._trigger( "complete" );
            }
        }
    });

})( jQuery );

(function( $, undefined ) {

    // number of pages in a slider
    // (how many times can you page up/down to go through the whole range)
    var numPages = 5;

    $.widget( "ui.slider", $.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "slide",

        options: {
            animate: false,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: false,
            step: 1,
            value: 0,
            values: null,

            // callbacks
            change: null,
            slide: null,
            start: null,
            stop: null
        },

        _create: function() {
            this._keySliding = false;
            this._mouseSliding = false;
            this._animateOff = true;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();

            this.element
            .addClass( "ui-slider" +
            " ui-slider-" + this.orientation +
            " ui-widget" +
            " ui-widget-content" +
            " ui-corner-all");

            this._refresh();
            this._setOption( "disabled", this.options.disabled );

            this._animateOff = false;
        },

        _refresh: function() {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue();
        },

        _createHandles: function() {
            var i, handleCount,
            options = this.options,
            existingHandles = this.element.find( ".ui-slider-handle" ).addClass( "ui-state-default ui-corner-all" ),
            handle = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
            handles = [];

            handleCount = ( options.values && options.values.length ) || 1;

            if ( existingHandles.length > handleCount ) {
                existingHandles.slice( handleCount ).remove();
                existingHandles = existingHandles.slice( 0, handleCount );
            }

            for ( i = existingHandles.length; i < handleCount; i++ ) {
                handles.push( handle );
            }

            this.handles = existingHandles.add( $( handles.join( "" ) ).appendTo( this.element ) );

            this.handle = this.handles.eq( 0 );

            this.handles.each(function( i ) {
                $( this ).data( "ui-slider-handle-index", i );
            });
        },

        _createRange: function() {
            var options = this.options,
            classes = "";

            if ( options.range ) {
                if ( options.range === true ) {
                    if ( !options.values ) {
                        options.values = [ this._valueMin(), this._valueMin() ];
                    } else if ( options.values.length && options.values.length !== 2 ) {
                        options.values = [ options.values[0], options.values[0] ];
                    } else if ( $.isArray( options.values ) ) {
                        options.values = options.values.slice(0);
                    }
                }

                if ( !this.range || !this.range.length ) {
                    this.range = $( "<div></div>" )
                    .appendTo( this.element );

                    classes = "ui-slider-range" +
                    // note: this isn't the most fittingly semantic framework class for this element,
                    // but worked best visually with a variety of themes
                    " ui-widget-header ui-corner-all";
                } else {
                    this.range.removeClass( "ui-slider-range-min ui-slider-range-max" )
                    // Handle range switching from true to min/max
                    .css({
                        "left": "",
                        "bottom": ""
                    });
                }

                this.range.addClass( classes +
                ( ( options.range === "min" || options.range === "max" ) ? " ui-slider-range-" + options.range : "" ) );
            } else {
                this.range = $([]);
            }
        },

        _setupEvents: function() {
            var elements = this.handles.add( this.range ).filter( "a" );
            this._off( elements );
            this._on( elements, this._handleEvents );
            this._hoverable( elements );
            this._focusable( elements );
        },

        _destroy: function() {
            this.handles.remove();
            this.range.remove();

            this.element
            .removeClass( "ui-slider" +
            " ui-slider-horizontal" +
            " ui-slider-vertical" +
            " ui-widget" +
            " ui-widget-content" +
            " ui-corner-all" );

            this._mouseDestroy();
        },

        _mouseCapture: function( event ) {
            var position, normValue, distance, closestHandle, index, allowed, offset, mouseOverHandle,
            that = this,
            o = this.options;

            if ( o.disabled ) {
                return false;
            }

            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();

            position = {
                x: event.pageX,
                y: event.pageY 
            };
            normValue = this._normValueFromMouse( position );
            distance = this._valueMax() - this._valueMin() + 1;
            this.handles.each(function( i ) {
                var thisDistance = Math.abs( normValue - that.values(i) );
                if (( distance > thisDistance ) ||
                ( distance === thisDistance &&
                (i === that._lastChangedValue || that.values(i) === o.min ))) {
                    distance = thisDistance;
                    closestHandle = $( this );
                    index = i;
                }
            });

            allowed = this._start( event, index );
            if ( allowed === false ) {
                return false;
            }
            this._mouseSliding = true;

            this._handleIndex = index;

            closestHandle
            .addClass( "ui-state-active" )
            .focus();

            offset = closestHandle.offset();
            mouseOverHandle = !$( event.target ).parents().addBack().is( ".ui-slider-handle" );
            this._clickOffset = mouseOverHandle ? {
                left: 0,
                top: 0 
            } : {
                left: event.pageX - offset.left - ( closestHandle.width() / 2 ),
                top: event.pageY - offset.top -
                ( closestHandle.height() / 2 ) -
                ( parseInt( closestHandle.css("borderTopWidth"), 10 ) || 0 ) -
                ( parseInt( closestHandle.css("borderBottomWidth"), 10 ) || 0) +
                ( parseInt( closestHandle.css("marginTop"), 10 ) || 0)
            };

            if ( !this.handles.hasClass( "ui-state-hover" ) ) {
                this._slide( event, index, normValue );
            }
            this._animateOff = true;
            return true;
        },

        _mouseStart: function() {
            return true;
        },

        _mouseDrag: function( event ) {
            var position = {
                x: event.pageX,
                y: event.pageY 
            },
            normValue = this._normValueFromMouse( position );

            this._slide( event, this._handleIndex, normValue );

            return false;
        },

        _mouseStop: function( event ) {
            this.handles.removeClass( "ui-state-active" );
            this._mouseSliding = false;

            this._stop( event, this._handleIndex );
            this._change( event, this._handleIndex );

            this._handleIndex = null;
            this._clickOffset = null;
            this._animateOff = false;

            return false;
        },

        _detectOrientation: function() {
            this.orientation = ( this.options.orientation === "vertical" ) ? "vertical" : "horizontal";
        },

        _normValueFromMouse: function( position ) {
            var pixelTotal,
            pixelMouse,
            percentMouse,
            valueTotal,
            valueMouse;

            if ( this.orientation === "horizontal" ) {
                pixelTotal = this.elementSize.width;
                pixelMouse = position.x - this.elementOffset.left - ( this._clickOffset ? this._clickOffset.left : 0 );
            } else {
                pixelTotal = this.elementSize.height;
                pixelMouse = position.y - this.elementOffset.top - ( this._clickOffset ? this._clickOffset.top : 0 );
            }

            percentMouse = ( pixelMouse / pixelTotal );
            if ( percentMouse > 1 ) {
                percentMouse = 1;
            }
            if ( percentMouse < 0 ) {
                percentMouse = 0;
            }
            if ( this.orientation === "vertical" ) {
                percentMouse = 1 - percentMouse;
            }

            valueTotal = this._valueMax() - this._valueMin();
            valueMouse = this._valueMin() + percentMouse * valueTotal;

            return this._trimAlignValue( valueMouse );
        },

        _start: function( event, index ) {
            var uiHash = {
                handle: this.handles[ index ],
                value: this.value()
            };
            if ( this.options.values && this.options.values.length ) {
                uiHash.value = this.values( index );
                uiHash.values = this.values();
            }
            return this._trigger( "start", event, uiHash );
        },

        _slide: function( event, index, newVal ) {
            var otherVal,
            newValues,
            allowed;

            if ( this.options.values && this.options.values.length ) {
                otherVal = this.values( index ? 0 : 1 );

                if ( ( this.options.values.length === 2 && this.options.range === true ) &&
                ( ( index === 0 && newVal > otherVal) || ( index === 1 && newVal < otherVal ) )
                ) {
                    newVal = otherVal;
                }

                if ( newVal !== this.values( index ) ) {
                    newValues = this.values();
                    newValues[ index ] = newVal;
                    // A slide can be canceled by returning false from the slide callback
                    allowed = this._trigger( "slide", event, {
                        handle: this.handles[ index ],
                        value: newVal,
                        values: newValues
                    });
                    otherVal = this.values( index ? 0 : 1 );
                    if ( allowed !== false ) {
                        this.values( index, newVal, true );
                    }
                }
            } else {
                if ( newVal !== this.value() ) {
                    // A slide can be canceled by returning false from the slide callback
                    allowed = this._trigger( "slide", event, {
                        handle: this.handles[ index ],
                        value: newVal
                    });
                    if ( allowed !== false ) {
                        this.value( newVal );
                    }
                }
            }
        },

        _stop: function( event, index ) {
            var uiHash = {
                handle: this.handles[ index ],
                value: this.value()
            };
            if ( this.options.values && this.options.values.length ) {
                uiHash.value = this.values( index );
                uiHash.values = this.values();
            }

            this._trigger( "stop", event, uiHash );
        },

        _change: function( event, index ) {
            if ( !this._keySliding && !this._mouseSliding ) {
                var uiHash = {
                    handle: this.handles[ index ],
                    value: this.value()
                };
                if ( this.options.values && this.options.values.length ) {
                    uiHash.value = this.values( index );
                    uiHash.values = this.values();
                }

                //store the last changed value index for reference when handles overlap
                this._lastChangedValue = index;

                this._trigger( "change", event, uiHash );
            }
        },

        value: function( newValue ) {
            if ( arguments.length ) {
                this.options.value = this._trimAlignValue( newValue );
                this._refreshValue();
                this._change( null, 0 );
                return;
            }

            return this._value();
        },

        values: function( index, newValue ) {
            var vals,
            newValues,
            i;

            if ( arguments.length > 1 ) {
                this.options.values[ index ] = this._trimAlignValue( newValue );
                this._refreshValue();
                this._change( null, index );
                return;
            }

            if ( arguments.length ) {
                if ( $.isArray( arguments[ 0 ] ) ) {
                    vals = this.options.values;
                    newValues = arguments[ 0 ];
                    for ( i = 0; i < vals.length; i += 1 ) {
                        vals[ i ] = this._trimAlignValue( newValues[ i ] );
                        this._change( null, i );
                    }
                    this._refreshValue();
                } else {
                    if ( this.options.values && this.options.values.length ) {
                        return this._values( index );
                    } else {
                        return this.value();
                    }
                }
            } else {
                return this._values();
            }
        },

        _setOption: function( key, value ) {
            var i,
            valsLength = 0;

            if ( key === "range" && this.options.range === true ) {
                if ( value === "min" ) {
                    this.options.value = this._values( 0 );
                    this.options.values = null;
                } else if ( value === "max" ) {
                    this.options.value = this._values( this.options.values.length - 1 );
                    this.options.values = null;
                }
            }

            if ( $.isArray( this.options.values ) ) {
                valsLength = this.options.values.length;
            }

            $.Widget.prototype._setOption.apply( this, arguments );

            switch ( key ) {
            case "orientation":
                this._detectOrientation();
                this.element
                .removeClass( "ui-slider-horizontal ui-slider-vertical" )
                .addClass( "ui-slider-" + this.orientation );
                this._refreshValue();
                break;
            case "value":
                this._animateOff = true;
                this._refreshValue();
                this._change( null, 0 );
                this._animateOff = false;
                break;
            case "values":
                this._animateOff = true;
                this._refreshValue();
                for ( i = 0; i < valsLength; i += 1 ) {
                    this._change( null, i );
                }
                this._animateOff = false;
                break;
            case "min":
            case "max":
                this._animateOff = true;
                this._refreshValue();
                this._animateOff = false;
                break;
            case "range":
                this._animateOff = true;
                this._refresh();
                this._animateOff = false;
                break;
            }
        },

        //internal value getter
        // _value() returns value trimmed by min and max, aligned by step
        _value: function() {
            var val = this.options.value;
            val = this._trimAlignValue( val );

            return val;
        },

        //internal values getter
        // _values() returns array of values trimmed by min and max, aligned by step
        // _values( index ) returns single value trimmed by min and max, aligned by step
        _values: function( index ) {
            var val,
            vals,
            i;

            if ( arguments.length ) {
                val = this.options.values[ index ];
                val = this._trimAlignValue( val );

                return val;
            } else if ( this.options.values && this.options.values.length ) {
                // .slice() creates a copy of the array
                // this copy gets trimmed by min and max and then returned
                vals = this.options.values.slice();
                for ( i = 0; i < vals.length; i += 1) {
                    vals[ i ] = this._trimAlignValue( vals[ i ] );
                }

                return vals;
            } else {
                return [];
            }
        },

        // returns the step-aligned value that val is closest to, between (inclusive) min and max
        _trimAlignValue: function( val ) {
            if ( val <= this._valueMin() ) {
                return this._valueMin();
            }
            if ( val >= this._valueMax() ) {
                return this._valueMax();
            }
            var step = ( this.options.step > 0 ) ? this.options.step : 1,
            valModStep = (val - this._valueMin()) % step,
            alignValue = val - valModStep;

            if ( Math.abs(valModStep) * 2 >= step ) {
                alignValue += ( valModStep > 0 ) ? step : ( - step );
            }

            // Since JavaScript has problems with large floats, round
            // the final value to 5 digits after the decimal point (see #4124)
            return parseFloat( alignValue.toFixed(5) );
        },

        _valueMin: function() {
            return this.options.min;
        },

        _valueMax: function() {
            return this.options.max;
        },

        _refreshValue: function() {
            var lastValPercent, valPercent, value, valueMin, valueMax,
            oRange = this.options.range,
            o = this.options,
            that = this,
            animate = ( !this._animateOff ) ? o.animate : false,
            _set = {};

            if ( this.options.values && this.options.values.length ) {
                this.handles.each(function( i ) {
                    valPercent = ( that.values(i) - that._valueMin() ) / ( that._valueMax() - that._valueMin() ) * 100;
                    _set[ that.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
                    $( this ).stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );
                    if ( that.options.range === true ) {
                        if ( that.orientation === "horizontal" ) {
                            if ( i === 0 ) {
                                that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
                                    left: valPercent + "%" 
                                }, o.animate );
                            }
                            if ( i === 1 ) {
                                that.range[ animate ? "animate" : "css" ]( {
                                    width: ( valPercent - lastValPercent ) + "%" 
                                }, {
                                    queue: false,
                                    duration: o.animate 
                                });
                            }
                        } else {
                            if ( i === 0 ) {
                                that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
                                    bottom: ( valPercent ) + "%" 
                                }, o.animate );
                            }
                            if ( i === 1 ) {
                                that.range[ animate ? "animate" : "css" ]( {
                                    height: ( valPercent - lastValPercent ) + "%" 
                                }, {
                                    queue: false,
                                    duration: o.animate 
                                });
                            }
                        }
                    }
                    lastValPercent = valPercent;
                });
            } else {
                value = this.value();
                valueMin = this._valueMin();
                valueMax = this._valueMax();
                valPercent = ( valueMax !== valueMin ) ?
                ( value - valueMin ) / ( valueMax - valueMin ) * 100 :
                0;
                _set[ this.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
                this.handle.stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );

                if ( oRange === "min" && this.orientation === "horizontal" ) {
                    this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
                        width: valPercent + "%" 
                    }, o.animate );
                }
                if ( oRange === "max" && this.orientation === "horizontal" ) {
                    this.range[ animate ? "animate" : "css" ]( {
                        width: ( 100 - valPercent ) + "%" 
                    }, {
                        queue: false,
                        duration: o.animate 
                    });
                }
                if ( oRange === "min" && this.orientation === "vertical" ) {
                    this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
                        height: valPercent + "%" 
                    }, o.animate );
                }
                if ( oRange === "max" && this.orientation === "vertical" ) {
                    this.range[ animate ? "animate" : "css" ]( {
                        height: ( 100 - valPercent ) + "%" 
                    }, {
                        queue: false,
                        duration: o.animate 
                    });
                }
            }
        },

        _handleEvents: {
            keydown: function( event ) {
                /*jshint maxcomplexity:25*/
                var allowed, curVal, newVal, step,
                index = $( event.target ).data( "ui-slider-handle-index" );

                switch ( event.keyCode ) {
                case $.ui.keyCode.HOME:
                case $.ui.keyCode.END:
                case $.ui.keyCode.PAGE_UP:
                case $.ui.keyCode.PAGE_DOWN:
                case $.ui.keyCode.UP:
                case $.ui.keyCode.RIGHT:
                case $.ui.keyCode.DOWN:
                case $.ui.keyCode.LEFT:
                    event.preventDefault();
                    if ( !this._keySliding ) {
                        this._keySliding = true;
                        $( event.target ).addClass( "ui-state-active" );
                        allowed = this._start( event, index );
                        if ( allowed === false ) {
                            return;
                        }
                    }
                    break;
                }

                step = this.options.step;
                if ( this.options.values && this.options.values.length ) {
                    curVal = newVal = this.values( index );
                } else {
                    curVal = newVal = this.value();
                }

                switch ( event.keyCode ) {
                case $.ui.keyCode.HOME:
                    newVal = this._valueMin();
                    break;
                case $.ui.keyCode.END:
                    newVal = this._valueMax();
                    break;
                case $.ui.keyCode.PAGE_UP:
                    newVal = this._trimAlignValue( curVal + ( (this._valueMax() - this._valueMin()) / numPages ) );
                    break;
                case $.ui.keyCode.PAGE_DOWN:
                    newVal = this._trimAlignValue( curVal - ( (this._valueMax() - this._valueMin()) / numPages ) );
                    break;
                case $.ui.keyCode.UP:
                case $.ui.keyCode.RIGHT:
                    if ( curVal === this._valueMax() ) {
                        return;
                    }
                    newVal = this._trimAlignValue( curVal + step );
                    break;
                case $.ui.keyCode.DOWN:
                case $.ui.keyCode.LEFT:
                    if ( curVal === this._valueMin() ) {
                        return;
                    }
                    newVal = this._trimAlignValue( curVal - step );
                    break;
                }

                this._slide( event, index, newVal );
            },
            click: function( event ) {
                event.preventDefault();
            },
            keyup: function( event ) {
                var index = $( event.target ).data( "ui-slider-handle-index" );

                if ( this._keySliding ) {
                    this._keySliding = false;
                    this._stop( event, index );
                    this._change( event, index );
                    $( event.target ).removeClass( "ui-state-active" );
                }
            }
        }

    });

}(jQuery));

(function( $ ) {

    function modifier( fn ) {
        return function() {
            var previous = this.element.val();
            fn.apply( this, arguments );
            this._refresh();
            if ( previous !== this.element.val() ) {
                this._trigger( "change" );
            }
        };
    }

    $.widget( "ui.spinner", {
        version: "1.10.3",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: true,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,

            change: null,
            spin: null,
            start: null,
            stop: null
        },

        _create: function() {
            // handle string values that need to be parsed
            this._setOption( "max", this.options.max );
            this._setOption( "min", this.options.min );
            this._setOption( "step", this.options.step );

            // format the value, but don't constrain
            this._value( this.element.val(), true );

            this._draw();
            this._on( this._events );
            this._refresh();

            // turning off autocomplete prevents the browser from remembering the
            // value when navigating through history, so we re-enable autocomplete
            // if the page is unloaded before the widget is destroyed. #7790
            this._on( this.window, {
                beforeunload: function() {
                    this.element.removeAttr( "autocomplete" );
                }
            });
        },

        _getCreateOptions: function() {
            var options = {},
            element = this.element;

            $.each( [ "min", "max", "step" ], function( i, option ) {
                var value = element.attr( option );
                if ( value !== undefined && value.length ) {
                    options[ option ] = value;
                }
            });

            return options;
        },

        _events: {
            keydown: function( event ) {
                if ( this._start( event ) && this._keydown( event ) ) {
                    event.preventDefault();
                }
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val();
            },
            blur: function( event ) {
                if ( this.cancelBlur ) {
                    delete this.cancelBlur;
                    return;
                }

                this._stop();
                this._refresh();
                if ( this.previous !== this.element.val() ) {
                    this._trigger( "change", event );
                }
            },
            mousewheel: function( event, delta ) {
                if ( !delta ) {
                    return;
                }
                if ( !this.spinning && !this._start( event ) ) {
                    return false;
                }

                this._spin( (delta > 0 ? 1 : - 1) * this.options.step, event );
                clearTimeout( this.mousewheelTimer );
                this.mousewheelTimer = this._delay(function() {
                    if ( this.spinning ) {
                        this._stop( event );
                    }
                }, 100 );
                event.preventDefault();
            },
            "mousedown .ui-spinner-button": function( event ) {
                var previous;

                // We never want the buttons to have focus; whenever the user is
                // interacting with the spinner, the focus should be on the input.
                // If the input is focused then this.previous is properly set from
                // when the input first received focus. If the input is not focused
                // then we need to set this.previous based on the value before spinning.
                previous = this.element[0] === this.document[0].activeElement ?
                this.previous : this.element.val();
                function checkFocus() {
                    var isActive = this.element[0] === this.document[0].activeElement;
                    if ( !isActive ) {
                        this.element.focus();
                        this.previous = previous;
                        // support: IE
                        // IE sets focus asynchronously, so we need to check if focus
                        // moved off of the input because the user clicked on the button.
                        this._delay(function() {
                            this.previous = previous;
                        });
                    }
                }

                // ensure focus is on (or stays on) the text field
                event.preventDefault();
                checkFocus.call( this );

                // support: IE
                // IE doesn't prevent moving focus even with event.preventDefault()
                // so we set a flag to know when we should ignore the blur event
                // and check (again) if focus moved off of the input.
                this.cancelBlur = true;
                this._delay(function() {
                    delete this.cancelBlur;
                    checkFocus.call( this );
                });

                if ( this._start( event ) === false ) {
                    return;
                }

                this._repeat( null, $( event.currentTarget ).hasClass( "ui-spinner-up" ) ? 1 : - 1, event );
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function( event ) {
                // button will add ui-state-active if mouse was down while mouseleave and kept down
                if ( !$( event.currentTarget ).hasClass( "ui-state-active" ) ) {
                    return;
                }

                if ( this._start( event ) === false ) {
                    return false;
                }
                this._repeat( null, $( event.currentTarget ).hasClass( "ui-spinner-up" ) ? 1 : - 1, event );
            },
            // TODO: do we really want to consider this a stop?
            // shouldn't we just stop the repeater and wait until mouseup before
            // we trigger the stop event?
            "mouseleave .ui-spinner-button": "_stop"
        },

        _draw: function() {
            var uiSpinner = this.uiSpinner = this.element
            .addClass( "ui-spinner-input" )
            .attr( "autocomplete", "off" )
            .wrap( this._uiSpinnerHtml() )
            .parent()
            // add buttons
            .append( this._buttonHtml() );

            this.element.attr( "role", "spinbutton" );

            // button bindings
            this.buttons = uiSpinner.find( ".ui-spinner-button" )
            .attr( "tabIndex", - 1 )
            .button()
            .removeClass( "ui-corner-all" );

            // IE 6 doesn't understand height: 50% for the buttons
            // unless the wrapper has an explicit height
            if ( this.buttons.height() > Math.ceil( uiSpinner.height() * 0.5 ) &&
            uiSpinner.height() > 0 ) {
                uiSpinner.height( uiSpinner.height() );
            }

            // disable spinner if element was already disabled
            if ( this.options.disabled ) {
                this.disable();
            }
        },

        _keydown: function( event ) {
            var options = this.options,
            keyCode = $.ui.keyCode;

            switch ( event.keyCode ) {
            case keyCode.UP:
                this._repeat( null, 1, event );
                return true;
            case keyCode.DOWN:
                this._repeat( null, - 1, event );
                return true;
            case keyCode.PAGE_UP:
                this._repeat( null, options.page, event );
                return true;
            case keyCode.PAGE_DOWN:
                this._repeat( null, - options.page, event );
                return true;
            }

            return false;
        },

        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";
        },

        _buttonHtml: function() {
            return "" +
            "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'>" +
            "<span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" +
            "</a>" +
            "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" +
            "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" +
            "</a>";
        },

        _start: function( event ) {
            if ( !this.spinning && this._trigger( "start", event ) === false ) {
                return false;
            }

            if ( !this.counter ) {
                this.counter = 1;
            }
            this.spinning = true;
            return true;
        },

        _repeat: function( i, steps, event ) {
            i = i || 500;

            clearTimeout( this.timer );
            this.timer = this._delay(function() {
                this._repeat( 40, steps, event );
            }, i );

            this._spin( steps * this.options.step, event );
        },

        _spin: function( step, event ) {
            var value = this.value() || 0;

            if ( !this.counter ) {
                this.counter = 1;
            }

            value = this._adjustValue( value + step * this._increment( this.counter ) );

            if ( !this.spinning || this._trigger( "spin", event, {
                value: value 
            }) !== false) {
                this._value( value );
                this.counter++;
            }
        },

        _increment: function( i ) {
            var incremental = this.options.incremental;

            if ( incremental ) {
                return $.isFunction( incremental ) ?
                incremental( i ) :
                Math.floor( i * i * i / 50000 - i * i / 500 + 17 * i / 200 + 1 );
            }

            return 1;
        },

        _precision: function() {
            var precision = this._precisionOf( this.options.step );
            if ( this.options.min !== null ) {
                precision = Math.max( precision, this._precisionOf( this.options.min ) );
            }
            return precision;
        },

        _precisionOf: function( num ) {
            var str = num.toString(),
            decimal = str.indexOf( "." );
            return decimal === - 1 ? 0 : str.length - decimal - 1;
        },

        _adjustValue: function( value ) {
            var base, aboveMin,
            options = this.options;

            // make sure we're at a valid step
            // - find out where we are relative to the base (min or 0)
            base = options.min !== null ? options.min : 0;
            aboveMin = value - base;
            // - round to the nearest step
            aboveMin = Math.round(aboveMin / options.step) * options.step;
            // - rounding is based on 0, so adjust back to our base
            value = base + aboveMin;

            // fix precision from bad JS floating point math
            value = parseFloat( value.toFixed( this._precision() ) );

            // clamp the value
            if ( options.max !== null && value > options.max) {
                return options.max;
            }
            if ( options.min !== null && value < options.min ) {
                return options.min;
            }

            return value;
        },

        _stop: function( event ) {
            if ( !this.spinning ) {
                return;
            }

            clearTimeout( this.timer );
            clearTimeout( this.mousewheelTimer );
            this.counter = 0;
            this.spinning = false;
            this._trigger( "stop", event );
        },

        _setOption: function( key, value ) {
            if ( key === "culture" || key === "numberFormat" ) {
                var prevValue = this._parse( this.element.val() );
                this.options[ key ] = value;
                this.element.val( this._format( prevValue ) );
                return;
            }

            if ( key === "max" || key === "min" || key === "step" ) {
                if ( typeof value === "string" ) {
                    value = this._parse( value );
                }
            }
            if ( key === "icons" ) {
                this.buttons.first().find( ".ui-icon" )
                .removeClass( this.options.icons.up )
                .addClass( value.up );
                this.buttons.last().find( ".ui-icon" )
                .removeClass( this.options.icons.down )
                .addClass( value.down );
            }

            this._super( key, value );

            if ( key === "disabled" ) {
                if ( value ) {
                    this.element.prop( "disabled", true );
                    this.buttons.button( "disable" );
                } else {
                    this.element.prop( "disabled", false );
                    this.buttons.button( "enable" );
                }
            }
        },

        _setOptions: modifier(function( options ) {
            this._super( options );
            this._value( this.element.val() );
        }),

        _parse: function( val ) {
            if ( typeof val === "string" && val !== "" ) {
                val = window.Globalize && this.options.numberFormat ?
                Globalize.parseFloat( val, 10, this.options.culture ) : + val;
            }
            return val === "" || isNaN( val ) ? null : val;
        },

        _format: function( value ) {
            if ( value === "" ) {
                return "";
            }
            return window.Globalize && this.options.numberFormat ?
            Globalize.format( value, this.options.numberFormat, this.options.culture ) :
            value;
        },

        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                // TODO: what should we do with values that can't be parsed?
                "aria-valuenow": this._parse( this.element.val() )
            });
        },

        // update the value without triggering change
        _value: function( value, allowAny ) {
            var parsed;
            if ( value !== "" ) {
                parsed = this._parse( value );
                if ( parsed !== null ) {
                    if ( !allowAny ) {
                        parsed = this._adjustValue( parsed );
                    }
                    value = this._format( parsed );
                }
            }
            this.element.val( value );
            this._refresh();
        },

        _destroy: function() {
            this.element
            .removeClass( "ui-spinner-input" )
            .prop( "disabled", false )
            .removeAttr( "autocomplete" )
            .removeAttr( "role" )
            .removeAttr( "aria-valuemin" )
            .removeAttr( "aria-valuemax" )
            .removeAttr( "aria-valuenow" );
            this.uiSpinner.replaceWith( this.element );
        },

        stepUp: modifier(function( steps ) {
            this._stepUp( steps );
        }),
        _stepUp: function( steps ) {
            if ( this._start() ) {
                this._spin( (steps || 1) * this.options.step );
                this._stop();
            }
        },

        stepDown: modifier(function( steps ) {
            this._stepDown( steps );
        }),
        _stepDown: function( steps ) {
            if ( this._start() ) {
                this._spin( (steps || 1) * - this.options.step );
                this._stop();
            }
        },

        pageUp: modifier(function( pages ) {
            this._stepUp( (pages || 1) * this.options.page );
        }),

        pageDown: modifier(function( pages ) {
            this._stepDown( (pages || 1) * this.options.page );
        }),

        value: function( newVal ) {
            if ( !arguments.length ) {
                return this._parse( this.element.val() );
            }
            modifier( this._value ).call( this, newVal );
        },

        widget: function() {
            return this.uiSpinner;
        }
    });

}( jQuery ) );

(function( $, undefined ) {

    var tabId = 0,
    rhash = /#.*$/;

    function getNextTabId() {
        return ++tabId;
    }

    function isLocal( anchor ) {
        return anchor.hash.length > 1 &&
        decodeURIComponent( anchor.href.replace( rhash, "" ) ) ===
        decodeURIComponent( location.href.replace( rhash, "" ) );
    }

    $.widget( "ui.tabs", {
        version: "1.10.3",
        delay: 300,
        options: {
            active: null,
            collapsible: false,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,

            // callbacks
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },

        _create: function() {
            var that = this,
            options = this.options;

            this.running = false;

            this.element
            .addClass( "ui-tabs ui-widget ui-widget-content ui-corner-all" )
            .toggleClass( "ui-tabs-collapsible", options.collapsible )
            // Prevent users from focusing disabled tabs via click
            .delegate( ".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function( event ) {
                if ( $( this ).is( ".ui-state-disabled" ) ) {
                    event.preventDefault();
                }
            })
            // support: IE <9
            // Preventing the default action in mousedown doesn't prevent IE
            // from focusing the element, so if the anchor gets focused, blur.
            // We don't have to worry about focusing the previously focused
            // element since clicking on a non-focusable element should focus
            // the body anyway.
            .delegate( ".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                if ( $( this ).closest( "li" ).is( ".ui-state-disabled" ) ) {
                    this.blur();
                }
            });

            this._processTabs();
            options.active = this._initialActive();

            // Take disabling tabs via class attribute from HTML
            // into account and update option properly.
            if ( $.isArray( options.disabled ) ) {
                options.disabled = $.unique( options.disabled.concat(
                $.map( this.tabs.filter( ".ui-state-disabled" ), function( li ) {
                    return that.tabs.index( li );
                })
                ) ).sort();
            }

            // check for length avoids error when initializing empty list
            if ( this.options.active !== false && this.anchors.length ) {
                this.active = this._findActive( options.active );
            } else {
                this.active = $();
            }

            this._refresh();

            if ( this.active.length ) {
                this.load( options.active );
            }
        },

        _initialActive: function() {
            var active = this.options.active,
            collapsible = this.options.collapsible,
            locationHash = location.hash.substring( 1 );

            if ( active === null ) {
                // check the fragment identifier in the URL
                if ( locationHash ) {
                    this.tabs.each(function( i, tab ) {
                        if ( $( tab ).attr( "aria-controls" ) === locationHash ) {
                            active = i;
                            return false;
                        }
                    });
                }

                // check for a tab marked active via a class
                if ( active === null ) {
                    active = this.tabs.index( this.tabs.filter( ".ui-tabs-active" ) );
                }

                // no active tab, set to false
                if ( active === null || active === - 1 ) {
                    active = this.tabs.length ? 0 : false;
                }
            }

            // handle numbers: negative, out of range
            if ( active !== false ) {
                active = this.tabs.index( this.tabs.eq( active ) );
                if ( active === - 1 ) {
                    active = collapsible ? false : 0;
                }
            }

            // don't allow collapsible: false and active: false
            if ( !collapsible && active === false && this.anchors.length ) {
                active = 0;
            }

            return active;
        },

        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: !this.active.length ? $() : this._getPanelForTab( this.active )
            };
        },

        _tabKeydown: function( event ) {
            /*jshint maxcomplexity:15*/
            var focusedTab = $( this.document[0].activeElement ).closest( "li" ),
            selectedIndex = this.tabs.index( focusedTab ),
            goingForward = true;

            if ( this._handlePageNav( event ) ) {
                return;
            }

            switch ( event.keyCode ) {
            case $.ui.keyCode.RIGHT:
            case $.ui.keyCode.DOWN:
                selectedIndex++;
                break;
            case $.ui.keyCode.UP:
            case $.ui.keyCode.LEFT:
                goingForward = false;
                selectedIndex--;
                break;
            case $.ui.keyCode.END:
                selectedIndex = this.anchors.length - 1;
                break;
            case $.ui.keyCode.HOME:
                selectedIndex = 0;
                break;
            case $.ui.keyCode.SPACE:
                // Activate only, no collapsing
                event.preventDefault();
                clearTimeout( this.activating );
                this._activate( selectedIndex );
                return;
            case $.ui.keyCode.ENTER:
                // Toggle (cancel delayed activation, allow collapsing)
                event.preventDefault();
                clearTimeout( this.activating );
                // Determine if we should collapse or activate
                this._activate( selectedIndex === this.options.active ? false : selectedIndex );
                return;
            default:
                return;
            }

            // Focus the appropriate tab, based on which key was pressed
            event.preventDefault();
            clearTimeout( this.activating );
            selectedIndex = this._focusNextTab( selectedIndex, goingForward );

            // Navigating with control key will prevent automatic activation
            if ( !event.ctrlKey ) {
                // Update aria-selected immediately so that AT think the tab is already selected.
                // Otherwise AT may confuse the user by stating that they need to activate the tab,
                // but the tab will already be activated by the time the announcement finishes.
                focusedTab.attr( "aria-selected", "false" );
                this.tabs.eq( selectedIndex ).attr( "aria-selected", "true" );

                this.activating = this._delay(function() {
                    this.option( "active", selectedIndex );
                }, this.delay );
            }
        },

        _panelKeydown: function( event ) {
            if ( this._handlePageNav( event ) ) {
                return;
            }

            // Ctrl+up moves focus to the current tab
            if ( event.ctrlKey && event.keyCode === $.ui.keyCode.UP ) {
                event.preventDefault();
                this.active.focus();
            }
        },

        // Alt+page up/down moves focus to the previous/next tab (and activates)
        _handlePageNav: function( event ) {
            if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_UP ) {
                this._activate( this._focusNextTab( this.options.active - 1, false ) );
                return true;
            }
            if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_DOWN ) {
                this._activate( this._focusNextTab( this.options.active + 1, true ) );
                return true;
            }
        },

        _findNextTab: function( index, goingForward ) {
            var lastTabIndex = this.tabs.length - 1;

            function constrain() {
                if ( index > lastTabIndex ) {
                    index = 0;
                }
                if ( index < 0 ) {
                    index = lastTabIndex;
                }
                return index;
            }

            while ( $.inArray( constrain(), this.options.disabled ) !== - 1 ) {
                index = goingForward ? index + 1 : index - 1;
            }

            return index;
        },

        _focusNextTab: function( index, goingForward ) {
            index = this._findNextTab( index, goingForward );
            this.tabs.eq( index ).focus();
            return index;
        },

        _setOption: function( key, value ) {
            if ( key === "active" ) {
                // _activate() will handle invalid values and update this.options
                this._activate( value );
                return;
            }

            if ( key === "disabled" ) {
                // don't use the widget factory's disabled handling
                this._setupDisabled( value );
                return;
            }

            this._super( key, value);

            if ( key === "collapsible" ) {
                this.element.toggleClass( "ui-tabs-collapsible", value );
                // Setting collapsible: false while collapsed; open first panel
                if ( !value && this.options.active === false ) {
                    this._activate( 0 );
                }
            }

            if ( key === "event" ) {
                this._setupEvents( value );
            }

            if ( key === "heightStyle" ) {
                this._setupHeightStyle( value );
            }
        },

        _tabId: function( tab ) {
            return tab.attr( "aria-controls" ) || "ui-tabs-" + getNextTabId();
        },

        _sanitizeSelector: function( hash ) {
            return hash ? hash.replace( /[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&" ) : "";
        },

        refresh: function() {
            var options = this.options,
            lis = this.tablist.children( ":has(a[href])" );

            // get disabled tabs from class attribute from HTML
            // this will get converted to a boolean if needed in _refresh()
            options.disabled = $.map( lis.filter( ".ui-state-disabled" ), function( tab ) {
                return lis.index( tab );
            });

            this._processTabs();

            // was collapsed or no tabs
            if ( options.active === false || !this.anchors.length ) {
                options.active = false;
                this.active = $();
                // was active, but active tab is gone
            } else if ( this.active.length && !$.contains( this.tablist[ 0 ], this.active[ 0 ] ) ) {
                // all remaining tabs are disabled
                if ( this.tabs.length === options.disabled.length ) {
                    options.active = false;
                    this.active = $();
                    // activate previous tab
                } else {
                    this._activate( this._findNextTab( Math.max( 0, options.active - 1 ), false ) );
                }
                // was active, active tab still exists
            } else {
                // make sure active index is correct
                options.active = this.tabs.index( this.active );
            }

            this._refresh();
        },

        _refresh: function() {
            this._setupDisabled( this.options.disabled );
            this._setupEvents( this.options.event );
            this._setupHeightStyle( this.options.heightStyle );

            this.tabs.not( this.active ).attr({
                "aria-selected": "false",
                tabIndex: - 1
            });
            this.panels.not( this._getPanelForTab( this.active ) )
            .hide()
            .attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            });

            // Make sure one tab is in the tab order
            if ( !this.active.length ) {
                this.tabs.eq( 0 ).attr( "tabIndex", 0 );
            } else {
                this.active
                .addClass( "ui-tabs-active ui-state-active" )
                .attr({
                    "aria-selected": "true",
                    tabIndex: 0
                });
                this._getPanelForTab( this.active )
                .show()
                .attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                });
            }
        },

        _processTabs: function() {
            var that = this;

            this.tablist = this._getList()
            .addClass( "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" )
            .attr( "role", "tablist" );

            this.tabs = this.tablist.find( "> li:has(a[href])" )
            .addClass( "ui-state-default ui-corner-top" )
            .attr({
                role: "tab",
                tabIndex: - 1
            });

            this.anchors = this.tabs.map(function() {
                return $( "a", this )[ 0 ];
            })
            .addClass( "ui-tabs-anchor" )
            .attr({
                role: "presentation",
                tabIndex: - 1
            });

            this.panels = $();

            this.anchors.each(function( i, anchor ) {
                var selector, panel, panelId,
                anchorId = $( anchor ).uniqueId().attr( "id" ),
                tab = $( anchor ).closest( "li" ),
                originalAriaControls = tab.attr( "aria-controls" );

                // inline tab
                if ( isLocal( anchor ) ) {
                    selector = anchor.hash;
                    panel = that.element.find( that._sanitizeSelector( selector ) );
                    // remote tab
                } else {
                    panelId = that._tabId( tab );
                    selector = "#" + panelId;
                    panel = that.element.find( selector );
                    if ( !panel.length ) {
                        panel = that._createPanel( panelId );
                        panel.insertAfter( that.panels[ i - 1 ] || that.tablist );
                    }
                    panel.attr( "aria-live", "polite" );
                }

                if ( panel.length) {
                    that.panels = that.panels.add( panel );
                }
                if ( originalAriaControls ) {
                    tab.data( "ui-tabs-aria-controls", originalAriaControls );
                }
                tab.attr({
                    "aria-controls": selector.substring( 1 ),
                    "aria-labelledby": anchorId
                });
                panel.attr( "aria-labelledby", anchorId );
            });

            this.panels
            .addClass( "ui-tabs-panel ui-widget-content ui-corner-bottom" )
            .attr( "role", "tabpanel" );
        },

        // allow overriding how to find the list for rare usage scenarios (#7715)
        _getList: function() {
            return this.element.find( "ol,ul" ).eq( 0 );
        },

        _createPanel: function( id ) {
            return $( "<div>" )
            .attr( "id", id )
            .addClass( "ui-tabs-panel ui-widget-content ui-corner-bottom" )
            .data( "ui-tabs-destroy", true );
        },

        _setupDisabled: function( disabled ) {
            if ( $.isArray( disabled ) ) {
                if ( !disabled.length ) {
                    disabled = false;
                } else if ( disabled.length === this.anchors.length ) {
                    disabled = true;
                }
            }

            // disable tabs
            for ( var i = 0, li; ( li = this.tabs[ i ] ); i++ ) {
                if ( disabled === true || $.inArray( i, disabled ) !== - 1 ) {
                    $( li )
                    .addClass( "ui-state-disabled" )
                    .attr( "aria-disabled", "true" );
                } else {
                    $( li )
                    .removeClass( "ui-state-disabled" )
                    .removeAttr( "aria-disabled" );
                }
            }

            this.options.disabled = disabled;
        },

        _setupEvents: function( event ) {
            var events = {
                click: function( event ) {
                    event.preventDefault();
                }
            };
            if ( event ) {
                $.each( event.split(" "), function( index, eventName ) {
                    events[ eventName ] = "_eventHandler";
                });
            }

            this._off( this.anchors.add( this.tabs ).add( this.panels ) );
            this._on( this.anchors, events );
            this._on( this.tabs, {
                keydown: "_tabKeydown" 
            });
            this._on( this.panels, {
                keydown: "_panelKeydown" 
            });

            this._focusable( this.tabs );
            this._hoverable( this.tabs );
        },

        _setupHeightStyle: function( heightStyle ) {
            var maxHeight,
            parent = this.element.parent();

            if ( heightStyle === "fill" ) {
                maxHeight = parent.height();
                maxHeight -= this.element.outerHeight() - this.element.height();

                this.element.siblings( ":visible" ).each(function() {
                    var elem = $( this ),
                    position = elem.css( "position" );

                    if ( position === "absolute" || position === "fixed" ) {
                        return;
                    }
                    maxHeight -= elem.outerHeight( true );
                });

                this.element.children().not( this.panels ).each(function() {
                    maxHeight -= $( this ).outerHeight( true );
                });

                this.panels.each(function() {
                    $( this ).height( Math.max( 0, maxHeight -
                    $( this ).innerHeight() + $( this ).height() ) );
                })
                .css( "overflow", "auto" );
            } else if ( heightStyle === "auto" ) {
                maxHeight = 0;
                this.panels.each(function() {
                    maxHeight = Math.max( maxHeight, $( this ).height( "" ).height() );
                }).height( maxHeight );
            }
        },

        _eventHandler: function( event ) {
            var options = this.options,
            active = this.active,
            anchor = $( event.currentTarget ),
            tab = anchor.closest( "li" ),
            clickedIsActive = tab[ 0 ] === active[ 0 ],
            collapsing = clickedIsActive && options.collapsible,
            toShow = collapsing ? $() : this._getPanelForTab( tab ),
            toHide = !active.length ? $() : this._getPanelForTab( active ),
            eventData = {
                oldTab: active,
                oldPanel: toHide,
                newTab: collapsing ? $() : tab,
                newPanel: toShow
            };

            event.preventDefault();

            if ( tab.hasClass( "ui-state-disabled" ) ||
            // tab is already loading
            tab.hasClass( "ui-tabs-loading" ) ||
            // can't switch durning an animation
            this.running ||
            // click on active header, but not collapsible
            ( clickedIsActive && !options.collapsible ) ||
            // allow canceling activation
            ( this._trigger( "beforeActivate", event, eventData ) === false ) ) {
                return;
            }

            options.active = collapsing ? false : this.tabs.index( tab );

            this.active = clickedIsActive ? $() : tab;
            if ( this.xhr ) {
                this.xhr.abort();
            }

            if ( !toHide.length && !toShow.length ) {
                $.error( "jQuery UI Tabs: Mismatching fragment identifier." );
            }

            if ( toShow.length ) {
                this.load( this.tabs.index( tab ), event );
            }
            this._toggle( event, eventData );
        },

        // handles show/hide for selecting tabs
        _toggle: function( event, eventData ) {
            var that = this,
            toShow = eventData.newPanel,
            toHide = eventData.oldPanel;

            this.running = true;

            function complete() {
                that.running = false;
                that._trigger( "activate", event, eventData );
            }

            function show() {
                eventData.newTab.closest( "li" ).addClass( "ui-tabs-active ui-state-active" );

                if ( toShow.length && that.options.show ) {
                    that._show( toShow, that.options.show, complete );
                } else {
                    toShow.show();
                    complete();
                }
            }

            // start out by hiding, then showing, then completing
            if ( toHide.length && this.options.hide ) {
                this._hide( toHide, this.options.hide, function() {
                    eventData.oldTab.closest( "li" ).removeClass( "ui-tabs-active ui-state-active" );
                    show();
                });
            } else {
                eventData.oldTab.closest( "li" ).removeClass( "ui-tabs-active ui-state-active" );
                toHide.hide();
                show();
            }

            toHide.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            });
            eventData.oldTab.attr( "aria-selected", "false" );
            // If we're switching tabs, remove the old tab from the tab order.
            // If we're opening from collapsed state, remove the previous tab from the tab order.
            // If we're collapsing, then keep the collapsing tab in the tab order.
            if ( toShow.length && toHide.length ) {
                eventData.oldTab.attr( "tabIndex", - 1 );
            } else if ( toShow.length ) {
                this.tabs.filter(function() {
                    return $( this ).attr( "tabIndex" ) === 0;
                })
                .attr( "tabIndex", - 1 );
            }

            toShow.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            });
            eventData.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            });
        },

        _activate: function( index ) {
            var anchor,
            active = this._findActive( index );

            // trying to activate the already active panel
            if ( active[ 0 ] === this.active[ 0 ] ) {
                return;
            }

            // trying to collapse, simulate a click on the current active header
            if ( !active.length ) {
                active = this.active;
            }

            anchor = active.find( ".ui-tabs-anchor" )[ 0 ];
            this._eventHandler({
                target: anchor,
                currentTarget: anchor,
                preventDefault: $.noop
            });
        },

        _findActive: function( index ) {
            return index === false ? $() : this.tabs.eq( index );
        },

        _getIndex: function( index ) {
            // meta-function to give users option to provide a href string instead of a numerical index.
            if ( typeof index === "string" ) {
                index = this.anchors.index( this.anchors.filter( "[href$='" + index + "']" ) );
            }

            return index;
        },

        _destroy: function() {
            if ( this.xhr ) {
                this.xhr.abort();
            }

            this.element.removeClass( "ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible" );

            this.tablist
            .removeClass( "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" )
            .removeAttr( "role" );

            this.anchors
            .removeClass( "ui-tabs-anchor" )
            .removeAttr( "role" )
            .removeAttr( "tabIndex" )
            .removeUniqueId();

            this.tabs.add( this.panels ).each(function() {
                if ( $.data( this, "ui-tabs-destroy" ) ) {
                    $( this ).remove();
                } else {
                    $( this )
                    .removeClass( "ui-state-default ui-state-active ui-state-disabled " +
                    "ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel" )
                    .removeAttr( "tabIndex" )
                    .removeAttr( "aria-live" )
                    .removeAttr( "aria-busy" )
                    .removeAttr( "aria-selected" )
                    .removeAttr( "aria-labelledby" )
                    .removeAttr( "aria-hidden" )
                    .removeAttr( "aria-expanded" )
                    .removeAttr( "role" );
                }
            });

            this.tabs.each(function() {
                var li = $( this ),
                prev = li.data( "ui-tabs-aria-controls" );
                if ( prev ) {
                    li
                    .attr( "aria-controls", prev )
                    .removeData( "ui-tabs-aria-controls" );
                } else {
                    li.removeAttr( "aria-controls" );
                }
            });

            this.panels.show();

            if ( this.options.heightStyle !== "content" ) {
                this.panels.css( "height", "" );
            }
        },

        enable: function( index ) {
            var disabled = this.options.disabled;
            if ( disabled === false ) {
                return;
            }

            if ( index === undefined ) {
                disabled = false;
            } else {
                index = this._getIndex( index );
                if ( $.isArray( disabled ) ) {
                    disabled = $.map( disabled, function( num ) {
                        return num !== index ? num : null;
                    });
                } else {
                    disabled = $.map( this.tabs, function( li, num ) {
                        return num !== index ? num : null;
                    });
                }
            }
            this._setupDisabled( disabled );
        },

        disable: function( index ) {
            var disabled = this.options.disabled;
            if ( disabled === true ) {
                return;
            }

            if ( index === undefined ) {
                disabled = true;
            } else {
                index = this._getIndex( index );
                if ( $.inArray( index, disabled ) !== - 1 ) {
                    return;
                }
                if ( $.isArray( disabled ) ) {
                    disabled = $.merge( [ index ], disabled ).sort();
                } else {
                    disabled = [ index ];
                }
            }
            this._setupDisabled( disabled );
        },

        load: function( index, event ) {
            index = this._getIndex( index );
            var that = this,
            tab = this.tabs.eq( index ),
            anchor = tab.find( ".ui-tabs-anchor" ),
            panel = this._getPanelForTab( tab ),
            eventData = {
                tab: tab,
                panel: panel
            };

            // not remote
            if ( isLocal( anchor[ 0 ] ) ) {
                return;
            }

            this.xhr = $.ajax( this._ajaxSettings( anchor, event, eventData ) );

            // support: jQuery <1.8
            // jQuery <1.8 returns false if the request is canceled in beforeSend,
            // but as of 1.8, $.ajax() always returns a jqXHR object.
            if ( this.xhr && this.xhr.statusText !== "canceled" ) {
                tab.addClass( "ui-tabs-loading" );
                panel.attr( "aria-busy", "true" );

                this.xhr
                .success(function( response ) {
                    // support: jQuery <1.8
                    // http://bugs.jquery.com/ticket/11778
                    setTimeout(function() {
                        panel.html( response );
                        that._trigger( "load", event, eventData );
                    }, 1 );
                })
                .complete(function( jqXHR, status ) {
                    // support: jQuery <1.8
                    // http://bugs.jquery.com/ticket/11778
                    setTimeout(function() {
                        if ( status === "abort" ) {
                            that.panels.stop( false, true );
                        }

                        tab.removeClass( "ui-tabs-loading" );
                        panel.removeAttr( "aria-busy" );

                        if ( jqXHR === that.xhr ) {
                            delete that.xhr;
                        }
                    }, 1 );
                });
            }
        },

        _ajaxSettings: function( anchor, event, eventData ) {
            var that = this;
            return {
                url: anchor.attr( "href" ),
                beforeSend: function( jqXHR, settings ) {
                    return that._trigger( "beforeLoad", event,
                    $.extend( {
                        jqXHR : jqXHR,
                        ajaxSettings: settings 
                    }, eventData ) );
                }
            };
        },

        _getPanelForTab: function( tab ) {
            var id = $( tab ).attr( "aria-controls" );
            return this.element.find( this._sanitizeSelector( "#" + id ) );
        }
    });

})( jQuery );

(function( $ ) {

    var increments = 0;

    function addDescribedBy( elem, id ) {
        var describedby = (elem.attr( "aria-describedby" ) || "").split( /\s+/ );
        describedby.push( id );
        elem
        .data( "ui-tooltip-id", id )
        .attr( "aria-describedby", $.trim( describedby.join( " " ) ) );
    }

    function removeDescribedBy( elem ) {
        var id = elem.data( "ui-tooltip-id" ),
        describedby = (elem.attr( "aria-describedby" ) || "").split( /\s+/ ),
        index = $.inArray( id, describedby );
        if ( index !== - 1 ) {
            describedby.splice( index, 1 );
        }

        elem.removeData( "ui-tooltip-id" );
        describedby = $.trim( describedby.join( " " ) );
        if ( describedby ) {
            elem.attr( "aria-describedby", describedby );
        } else {
            elem.removeAttr( "aria-describedby" );
        }
    }

    $.widget( "ui.tooltip", {
        version: "1.10.3",
        options: {
            content: function() {
                // support: IE<9, Opera in jQuery <1.7
                // .text() can't accept undefined, so coerce to a string
                var title = $( this ).attr( "title" ) || "";
                // Escape title, since we're going from an attribute to raw HTML
                return $( "<a>" ).text( title ).html();
            },
            hide: true,
            // Disabled elements have inconsistent behavior across browsers (#8661)
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: true,
            tooltipClass: null,
            track: false,

            // callbacks
            close: null,
            open: null
        },

        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            });

            // IDs of generated tooltips, needed for destroy
            this.tooltips = {};
            // IDs of parent tooltips where we removed the title attribute
            this.parents = {};

            if ( this.options.disabled ) {
                this._disable();
            }
        },

        _setOption: function( key, value ) {
            var that = this;

            if ( key === "disabled" ) {
                this[ value ? "_disable" : "_enable" ]();
                this.options[ key ] = value;
                // disable element style changes
                return;
            }

            this._super( key, value );

            if ( key === "content" ) {
                $.each( this.tooltips, function( id, element ) {
                    that._updateContent( element );
                });
            }
        },

        _disable: function() {
            var that = this;

            // close open tooltips
            $.each( this.tooltips, function( id, element ) {
                var event = $.Event( "blur" );
                event.target = event.currentTarget = element[0];
                that.close( event, true );
            });

            // remove title attributes to prevent native tooltips
            this.element.find( this.options.items ).addBack().each(function() {
                var element = $( this );
                if ( element.is( "[title]" ) ) {
                    element
                    .data( "ui-tooltip-title", element.attr( "title" ) )
                    .attr( "title", "" );
                }
            });
        },

        _enable: function() {
            // restore title attributes
            this.element.find( this.options.items ).addBack().each(function() {
                var element = $( this );
                if ( element.data( "ui-tooltip-title" ) ) {
                    element.attr( "title", element.data( "ui-tooltip-title" ) );
                }
            });
        },

        open: function( event ) {
            var that = this,
            target = $( event ? event.target : this.element )
            // we need closest here due to mouseover bubbling,
            // but always pointing at the same event target
            .closest( this.options.items );

            // No element to show a tooltip for or the tooltip is already open
            if ( !target.length || target.data( "ui-tooltip-id" ) ) {
                return;
            }

            if ( target.attr( "title" ) ) {
                target.data( "ui-tooltip-title", target.attr( "title" ) );
            }

            target.data( "ui-tooltip-open", true );

            // kill parent tooltips, custom or native, for hover
            if ( event && event.type === "mouseover" ) {
                target.parents().each(function() {
                    var parent = $( this ),
                    blurEvent;
                    if ( parent.data( "ui-tooltip-open" ) ) {
                        blurEvent = $.Event( "blur" );
                        blurEvent.target = blurEvent.currentTarget = this;
                        that.close( blurEvent, true );
                    }
                    if ( parent.attr( "title" ) ) {
                        parent.uniqueId();
                        that.parents[ this.id ] = {
                            element: this,
                            title: parent.attr( "title" )
                        };
                        parent.attr( "title", "" );
                    }
                });
            }

            this._updateContent( target, event );
        },

        _updateContent: function( target, event ) {
            var content,
            contentOption = this.options.content,
            that = this,
            eventType = event ? event.type : null;

            if ( typeof contentOption === "string" ) {
                return this._open( event, target, contentOption );
            }

            content = contentOption.call( target[0], function( response ) {
                // ignore async response if tooltip was closed already
                if ( !target.data( "ui-tooltip-open" ) ) {
                    return;
                }
                // IE may instantly serve a cached response for ajax requests
                // delay this call to _open so the other call to _open runs first
                that._delay(function() {
                    // jQuery creates a special event for focusin when it doesn't
                    // exist natively. To improve performance, the native event
                    // object is reused and the type is changed. Therefore, we can't
                    // rely on the type being correct after the event finished
                    // bubbling, so we set it back to the previous value. (#8740)
                    if ( event ) {
                        event.type = eventType;
                    }
                    this._open( event, target, response );
                });
            });
            if ( content ) {
                this._open( event, target, content );
            }
        },

        _open: function( event, target, content ) {
            var tooltip, events, delayedShow,
            positionOption = $.extend( {}, this.options.position );

            if ( !content ) {
                return;
            }

            // Content can be updated multiple times. If the tooltip already
            // exists, then just update the content and bail.
            tooltip = this._find( target );
            if ( tooltip.length ) {
                tooltip.find( ".ui-tooltip-content" ).html( content );
                return;
            }

            // if we have a title, clear it to prevent the native tooltip
            // we have to check first to avoid defining a title if none exists
            // (we don't want to cause an element to start matching [title])
            //
            // We use removeAttr only for key events, to allow IE to export the correct
            // accessible attributes. For mouse events, set to empty string to avoid
            // native tooltip showing up (happens only when removing inside mouseover).
            if ( target.is( "[title]" ) ) {
                if ( event && event.type === "mouseover" ) {
                    target.attr( "title", "" );
                } else {
                    target.removeAttr( "title" );
                }
            }

            tooltip = this._tooltip( target );
            addDescribedBy( target, tooltip.attr( "id" ) );
            tooltip.find( ".ui-tooltip-content" ).html( content );

            function position( event ) {
                positionOption.of = event;
                if ( tooltip.is( ":hidden" ) ) {
                    return;
                }
                tooltip.position( positionOption );
            }
            if ( this.options.track && event && /^mouse/.test( event.type ) ) {
                this._on( this.document, {
                    mousemove: position
                });
                // trigger once to override element-relative positioning
                position( event );
            } else {
                tooltip.position( $.extend({
                    of: target
                }, this.options.position ) );
            }

            tooltip.hide();

            this._show( tooltip, this.options.show );
            // Handle tracking tooltips that are shown with a delay (#8644). As soon
            // as the tooltip is visible, position the tooltip using the most recent
            // event.
            if ( this.options.show && this.options.show.delay ) {
                delayedShow = this.delayedShow = setInterval(function() {
                    if ( tooltip.is( ":visible" ) ) {
                        position( positionOption.of );
                        clearInterval( delayedShow );
                    }
                }, $.fx.interval );
            }

            this._trigger( "open", event, {
                tooltip: tooltip 
            });

            events = {
                keyup: function( event ) {
                    if ( event.keyCode === $.ui.keyCode.ESCAPE ) {
                        var fakeEvent = $.Event(event);
                        fakeEvent.currentTarget = target[0];
                        this.close( fakeEvent, true );
                    }
                },
                remove: function() {
                    this._removeTooltip( tooltip );
                }
            };
            if ( !event || event.type === "mouseover" ) {
                events.mouseleave = "close";
            }
            if ( !event || event.type === "focusin" ) {
                events.focusout = "close";
            }
            this._on( true, target, events );
        },

        close: function( event ) {
            var that = this,
            target = $( event ? event.currentTarget : this.element ),
            tooltip = this._find( target );

            // disabling closes the tooltip, so we need to track when we're closing
            // to avoid an infinite loop in case the tooltip becomes disabled on close
            if ( this.closing ) {
                return;
            }

            // Clear the interval for delayed tracking tooltips
            clearInterval( this.delayedShow );

            // only set title if we had one before (see comment in _open())
            if ( target.data( "ui-tooltip-title" ) ) {
                target.attr( "title", target.data( "ui-tooltip-title" ) );
            }

            removeDescribedBy( target );

            tooltip.stop( true );
            this._hide( tooltip, this.options.hide, function() {
                that._removeTooltip( $( this ) );
            });

            target.removeData( "ui-tooltip-open" );
            this._off( target, "mouseleave focusout keyup" );
            // Remove 'remove' binding only on delegated targets
            if ( target[0] !== this.element[0] ) {
                this._off( target, "remove" );
            }
            this._off( this.document, "mousemove" );

            if ( event && event.type === "mouseleave" ) {
                $.each( this.parents, function( id, parent ) {
                    $( parent.element ).attr( "title", parent.title );
                    delete that.parents[ id ];
                });
            }

            this.closing = true;
            this._trigger( "close", event, {
                tooltip: tooltip 
            });
            this.closing = false;
        },

        _tooltip: function( element ) {
            var id = "ui-tooltip-" + increments++,
            tooltip = $( "<div>" )
            .attr({
                id: id,
                role: "tooltip"
            })
            .addClass( "ui-tooltip ui-widget ui-corner-all ui-widget-content " +
            ( this.options.tooltipClass || "" ) );
            $( "<div>" )
            .addClass( "ui-tooltip-content" )
            .appendTo( tooltip );
            tooltip.appendTo( this.document[0].body );
            this.tooltips[ id ] = element;
            return tooltip;
        },

        _find: function( target ) {
            var id = target.data( "ui-tooltip-id" );
            return id ? $( "#" + id ) : $();
        },

        _removeTooltip: function( tooltip ) {
            tooltip.remove();
            delete this.tooltips[ tooltip.attr( "id" ) ];
        },

        _destroy: function() {
            var that = this;

            // close open tooltips
            $.each( this.tooltips, function( id, element ) {
                // Delegate to close method to handle common cleanup
                var event = $.Event( "blur" );
                event.target = event.currentTarget = element[0];
                that.close( event, true );

                // Remove immediately; destroying an open tooltip doesn't use the
                // hide animation
                $( "#" + id ).remove();

                // Restore the title
                if ( element.data( "ui-tooltip-title" ) ) {
                    element.attr( "title", element.data( "ui-tooltip-title" ) );
                    element.removeData( "ui-tooltip-title" );
                }
            });
        }
    });

}( jQuery ) );;

