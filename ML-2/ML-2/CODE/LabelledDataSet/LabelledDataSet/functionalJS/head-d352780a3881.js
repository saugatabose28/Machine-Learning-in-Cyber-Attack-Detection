function getScript(e, t) {
    "use strict";
    var n = function(e, n) {
        var r = this.readyState, i = this.parentNode;
        if (n ||!r || r === "complete" || r === "loaded")
            i && i.removeChild(this), !n && t && t()
    };
    (function() {
        var t = document, r = t.getElementsByTagName("script")[0], i = t.createElement("script");
        i.type = "text/javascript", i.async = "async", i.onload = i.onreadystatechange = n, i.src = e, r.parentNode.insertBefore(i, r)
    })()
}(function(e) {
    "use strict";
    var t = "/client-error", n = 5, r = 10, i = e.onerror, s = e.encodeURIComponent, o = e.document.documentMode, u = /[^:\/]*$/, a = [], f, l, c = function(e, t, n, r) {
        var i = "m[]=" + s(e);
        return t = t ? u.exec(t)[0] : "", n && (t += ":" + n, r && (t += ":" + r)), i += "&l[]=" + s(t), i
    }, h = function(t) {
        var n = e.document;
        return t = "client" + t, n.documentElement[t] || n.body[t]
    }, p = function() {
        var t, n, r = e.document.getElementsByTagName("script"), i = "r=" + s(e.location.href) + "&u=" + s(e.navigator.userAgent) + "&w=" + s(h("Width")) + "&h=" + s(h("Height"));
        o && (i += "&d=" + o);
        for (t = 0; t < r.length; ++t)
            n = r[t].getAttribute("src"), n && (i += "&s[]=" + s(u.exec(n)[0]));
        return i
    }, d = function() {
        var n, r = [], i = a, s, o, u = e.XMLHttpRequest;
        l = (new e.Date).getTime(), a = [], f=!1;
        for (n = 0; n < i.length; ++n)
            r[n] = c.apply(null, i[n]);
        r = r.join("&") + "&" + p(), o = u ? new u : new e.ActiveXObject("Microsoft.XMLHTTP"), o.open("POST", t), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), o.onreadystatechange = function(t, n) {
            try {
                if (!s && (n || o.readyState === 4)) {
                    s=!0;
                    var r = o.status;
                    r >= 500 && r < 600 && (a=!1, e.clearTimeout(f))
                }
            } catch (i) {}
        }, o.send(r)
    }, v = function() {
        var t = (new e.Date).getTime(), i = (l || t) + n * 1e3;
        a && a.length < r && (a.push(Array.prototype.slice.call(arguments)), !l || t > i ? d() : f || (f = e.setTimeout(d, i - t)))
    };
    e.onerror = i ? function() {
        return i.apply(this, arguments), v.apply(this, arguments)
    } : v
})(this), window.Modernizr = function(e, t, n) {
    function L(e) {
        f.cssText = e
    }
    function A(e, t) {
        return L(p.join(e + ";") + (t || ""))
    }
    function O(e, t) {
        return typeof e === t
    }
    function M(e, t) {
        return !!~("" + e).indexOf(t)
    }
    function _(e, t) {
        for (var r in e) {
            var i = e[r];
            if (!M(i, "-") && f[i] !== n)
                return t == "pfx" ? i : !0
        }
        return !1
    }
    function D(e, t, r) {
        for (var i in e) {
            var s = t[e[i]];
            if (s !== n)
                return r===!1 ? e[i] : O(s, "function") ? s.bind(r || t) : s
        }
        return !1
    }
    function P(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1), i = (e + " " + v.join(r + " ") + r).split(" ");
        return O(t, "string") || O(t, "undefined") ? _(i, t) : (i = (e + " " + m.join(r + " ") + r).split(" "), D(i, t, n))
    }
    var r = "2.7.1", i = {}, s=!0, o = t.documentElement, u = "modernizr", a = t.createElement(u), f = a.style, l, c = ":)", h = {}.toString, p = " -webkit- -moz- -o- -ms- ".split(" "), d = "Webkit Moz O ms", v = d.split(" "), m = d.toLowerCase().split(" "), g = {
        svg: "http://www.w3.org/2000/svg"
    }, y = {}, b = {}, w = {}, E = [], S = E.slice, x, T = function(e, n, r, i) {
        var s, a, f, l, c = t.createElement("div"), h = t.body, p = h || t.createElement("body");
        if (parseInt(r, 10))
            while (r--)
                f = t.createElement("div"), f.id = i ? i[r] : u + (r + 1), c.appendChild(f);
        return s = ["&#173;", '<style id="s', u, '">', e, "</style>"].join(""), c.id = u, (h ? c : p).innerHTML += s, p.appendChild(c), h || (p.style.background = "", p.style.overflow = "hidden", l = o.style.overflow, o.style.overflow = "hidden", o.appendChild(p)), a = n(c, e), h ? c.parentNode.removeChild(c) : (p.parentNode.removeChild(p), o.style.overflow = l), !!a
    }, N = function(t) {
        var n = e.matchMedia || e.msMatchMedia;
        if (n)
            return n(t).matches;
        var r;
        return T("@media " + t + " { #" + u + " { position: absolute; } }", function(t) {
            r = (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle)["position"] == "absolute"
        }), r
    }, C = {}.hasOwnProperty, k;
    !O(C, "undefined")&&!O(C.call, "undefined") ? k = function(e, t) {
        return C.call(e, t)
    } : k = function(e, t) {
        return t in e && O(e.constructor.prototype[t], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(t) {
        var n = this;
        if (typeof n != "function")
            throw new TypeError;
        var r = S.call(arguments, 1), i = function() {
            if (this instanceof i) {
                var e = function() {};
                e.prototype = n.prototype;
                var s = new e, o = n.apply(s, r.concat(S.call(arguments)));
                return Object(o) === o ? o : s
            }
            return n.apply(t, r.concat(S.call(arguments)))
        };
        return i
    }), y.canvas = function() {
        var e = t.createElement("canvas");
        return !!e.getContext&&!!e.getContext("2d")
    }, y.touch = function() {
        var n;
        return "ontouchstart"in e || e.DocumentTouch && t instanceof DocumentTouch ? n=!0 : T(["@media (", p.join("touch-enabled),("), u, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
            n = e.offsetTop === 9
        }), n
    }, y.geolocation = function() {
        return "geolocation"in navigator
    }, y.borderradius = function() {
        return P("borderRadius")
    }, y.csstransitions = function() {
        return P("transition")
    }, y.fontface = function() {
        var e;
        return T('@font-face {font-family:"font";src:url("https://")}', function(n, r) {
            var i = t.getElementById("smodernizr"), s = i.sheet || i.styleSheet, o = s ? s.cssRules && s.cssRules[0] ? s.cssRules[0].cssText: s.cssText || "": "";
            e = /src/i.test(o) && o.indexOf(r.split(" ")[0]) === 0
        }), e
    }, y.generatedcontent = function() {
        var e;
        return T(["#", u, "{font:0/0 a}#", u, ':after{content:"', c, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
            e = t.offsetHeight >= 3
        }), e
    }, y.video = function() {
        var e = t.createElement("video"), n=!1;
        try {
            if (n=!!e.canPlayType)
                n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
        } catch (r) {}
        return n
    }, y.audio = function() {
        var e = t.createElement("audio"), n=!1;
        try {
            if (n=!!e.canPlayType)
                n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, "")
        } catch (r) {}
        return n
    }, y.localstorage = function() {
        try {
            return localStorage.setItem(u, u), localStorage.removeItem(u), !0
        } catch (e) {
            return !1
        }
    }, y.svg = function() {
        return !!t.createElementNS&&!!t.createElementNS(g.svg, "svg").createSVGRect
    }, y.svgclippaths = function() {
        return !!t.createElementNS && /SVGClipPath/.test(h.call(t.createElementNS(g.svg, "clipPath")))
    };
    for (var H in y)
        k(y, H) && (x = H.toLowerCase(), i[x] = y[H](), E.push((i[x] ? "" : "no-") + x));
    return i.addTest = function(e, t) {
        if (typeof e == "object")
            for (var r in e)
                k(e, r) && i.addTest(r, e[r]);
        else {
            e = e.toLowerCase();
            if (i[e] !== n)
                return i;
            t = typeof t == "function" ? t() : t, typeof s != "undefined" && s && (o.className += " " + (t ? "" : "no-") + e), i[e] = t
        }
        return i
    }, L(""), a = l = null, function(e, t) {
        function c(e, t) {
            var n = e.createElement("p"), r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }
        function h() {
            var e = y.elements;
            return typeof e == "string" ? e.split(" ") : e
        }
        function p(e) {
            var t = f[e[u]];
            return t || (t = {}, a++, e[u] = a, f[a] = t), t
        }
        function d(e, n, r) {
            n || (n = t);
            if (l)
                return n.createElement(e);
            r || (r = p(n));
            var o;
            return r.cache[e] ? o = r.cache[e].cloneNode() : s.test(e) ? o = (r.cache[e] = r.createElem(e)).cloneNode() : o = r.createElem(e), o.canHaveChildren&&!i.test(e)&&!o.tagUrn ? r.frag.appendChild(o) : o
        }
        function v(e, n) {
            e || (e = t);
            if (l)
                return e.createDocumentFragment();
            n = n || p(e);
            var r = n.frag.cloneNode(), i = 0, s = h(), o = s.length;
            for (; i < o; i++)
                r.createElement(s[i]);
            return r
        }
        function m(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return y.shivMethods ? d(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + h().join().replace(/[\w\-]+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(y, t.frag)
        }
        function g(e) {
            e || (e = t);
            var n = p(e);
            return y.shivCSS&&!o&&!n.hasCSS && (n.hasCSS=!!c(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), l || m(e, n), e
        }
        var n = "3.7.0", r = e.html5 || {}, i = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, s = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, o, u = "_html5shiv", a = 0, f = {}, l;
        (function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", o = "hidden"in e, l = e.childNodes.length == 1 || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return typeof e.cloneNode == "undefined" || typeof e.createDocumentFragment == "undefined" || typeof e.createElement == "undefined"
                }()
            } catch (n) {
                o=!0, l=!0
            }
        })();
        var y = {
            elements: r.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: n,
            shivCSS: r.shivCSS!==!1,
            supportsUnknownElements: l,
            shivMethods: r.shivMethods!==!1,
            type: "default",
            shivDocument: g,
            createElement: d,
            createDocumentFragment: v
        };
        e.html5 = y, g(t)
    }(this, t), i._version = r, i._prefixes = p, i._domPrefixes = m, i._cssomPrefixes = v, i.mq = N, i.testProp = function(e) {
        return _([e])
    }, i.testAllProps = P, i.testStyles = T, o.className = o.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (s ? " js " + E.join(" ") : ""), i
}(this, this.document), this.Disney = this.Disney || {}, this.Disney.Style = this.Disney.Style || {}, this.Disney.Style.breakpoints = {
    midLow: 480,
    midHigh: 680,
    max: 960,
    chromeMax: 1025
}, function() {
    function s(e, t) {
        if (t)
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    }
    function o(e, t) {
        var n = [];
        for (var r in e)
            e.hasOwnProperty(r) && (n[r] = t(e[r]));
        return n
    }
    function f(n, r, i) {
        if (u.isSupported(r.version))
            n.innerHTML = u.getHTML(r, i);
        else if (r.expressInstall && u.isSupported([6, 65]))
            n.innerHTML = u.getHTML(s(r, {
                src: r.expressInstall
            }), {
                MMredirectURL: location.href,
                MMplayerType: "PlugIn",
                MMdoctitle: document.title
            });
        else {
            n.innerHTML.replace(/\s/g, "") || (n.innerHTML = "<h2>Flash version " + r.version + " or greater is required</h2>" + "<h3>" + (a[0] > 0 ? "Your version is " + a : "You have no flash plugin installed") + "</h3>" + (n.tagName == "A" ? "<p>Click here to download latest version</p>" : "<p>Download latest version from <a href='" + t + "'>here</a></p>"), n.tagName == "A" && (n.onclick = function() {
                location.href = t
            }));
            if (r.onFail) {
                var o = r.onFail.call(this);
                typeof o == "string" && (n.innerHTML = o)
            }
        }
        e && (window[r.id] = document.getElementById(r.id)), s(this, {
            getRoot: function() {
                return n
            },
            getOptions: function() {
                return r
            },
            getConf: function() {
                return i
            },
            getApi: function() {
                return n.firstChild
            }
        })
    }
    var e = document.all, t = "http://www.adobe.com/go/getflashplayer", n = typeof jQuery == "function", r = /(\d+)[^\d]+(\d+)[^\d]*(\d*)/, i = {
        width: "100%",
        height: "100%",
        id: "_" + ("" + Math.random()).slice(9),
        allowfullscreen: !0,
        allowscriptaccess: "always",
        quality: "high",
        version: [3, 0],
        onFail: null,
        expressInstall: null,
        w3c: !1,
        cachebusting: !1
    };
    window.attachEvent && window.attachEvent("onbeforeunload", function() {
        __flash_unloadHandler = function() {}, __flash_savedUnloadHandler = function() {}
    }), window.flashembed = function(e, t, n) {
        typeof e == "string" && (e = document.getElementById(e.replace("#", "")));
        if (!e)
            return;
        return typeof t == "string" && (t = {
            src: t
        }), new f(e, s(s({}, i), t), n)
    };
    var u = s(window.flashembed, {
        conf: i,
        getVersion: function() {
            var e, t;
            try {
                t = navigator.plugins["Shockwave Flash"].description.slice(16)
            } catch (n) {
                try {
                    e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), t = e && e.GetVariable("$version")
                } catch (i) {
                    try {
                        e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), t = e && e.GetVariable("$version")
                    } catch (s) {}
                }
            }
            return t = r.exec(t), t ? [t[1], t[3]] : [0, 0]
        },
        asString: function(e) {
            if (e === null || e === undefined)
                return null;
            var t = typeof e;
            t == "object" && e.push && (t = "array");
            switch (t) {
            case"string":
                return e = e.replace(new RegExp('(["\\\\])', "g"), "\\$1"), e = e.replace(/^\s?(\d+\.?\d*)%/, "$1pct"), '"' + e + '"';
            case"array":
                return "[" + o(e, function(e) {
                    return u.asString(e)
                }).join(",") + "]";
            case"function":
                return '"function()"';
            case"object":
                var n = [];
                for (var r in e)
                    e.hasOwnProperty(r) && n.push('"' + r + '":' + u.asString(e[r]));
                return "{" + n.join(",") + "}"
            }
            return String(e).replace(/\s/g, " ").replace(/\'/g, '"')
        },
        getHTML: function(t, n) {
            t = s({}, t);
            var r = '<object width="' + t.width + '" height="' + t.height + '" id="' + t.id + '" name="' + t.id + '"';
            t.cachebusting && (t.src += (t.src.indexOf("?")!=-1 ? "&" : "?") + Math.random()), t.w3c ||!e ? r += ' data="' + t.src + '" type="application/x-shockwave-flash"' : r += ' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"', r += ">";
            if (t.w3c || e)
                r += '<param name="movie" value="' + t.src + '" />';
            t.width = t.height = t.id = t.w3c = t.src = null, t.onFail = t.version = t.expressInstall = null;
            for (var i in t)
                t[i] && (r += '<param name="' + i + '" value="' + t[i] + '" />');
            var o = "";
            if (n) {
                for (var a in n)
                    if (n[a]) {
                        var f = n[a];
                        o += a + "=" + encodeURIComponent(/function|object/.test(typeof f) ? u.asString(f) : f) + "&"
                    }
                o = o.slice(0, - 1), r += '<param name="flashvars" value=\'' + o + "' />"
            }
            return r += "</object>", r
        },
        isSupported: function(e) {
            return a[0] > e[0] || a[0] == e[0] && a[1] >= e[1]
        }
    }), a = u.getVersion();
    n && (jQuery.tools = jQuery.tools || {
        version: "@VERSION"
    }, jQuery.tools.flashembed = {
        conf: i
    }, jQuery.fn.flashembed = function(e, t) {
        return this.each(function() {
            jQuery(this).data("flashembed", flashembed(this, e, t))
        })
    })
}(), function(e) {
    "use strict";
    var t = e.Modernizr, n = e.flashembed, r = [11, 0];
    t.addTest({
        multi_input: function() {
            return e.navigator.maxTouchPoints > 0 || e.navigator.msMaxTouchPoints > 0
        },
        mobile: function() {
            var t = e.navigator.userAgent || e.navigator.vendor || e.window.opera;
            return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((e.navigator.userAgent || e.navigator.vendor || e.window.opera).substr(0, 4))
        },
        flash: function() {
            return n.isSupported(r)
        },
        ios: function() {
            return e.navigator.userAgent.match(/(ipod|iphone|ipad)/i)
        },
        android: function() {
            return e.navigator.userAgent.match(/(android)/i)
        },
        kindle: function() {
            return e.navigator.userAgent.match(/(kindle|silk)/i)
        },
        scrolling_text: function() {
            return t.csstransitions && t.canvas
        }
    })
}(this), function(e) {
    "use strict";
    var t = e.getScript;
    e.JSON || t("//a.dilcdn.com/a/json2-69977debfdf4.js")
}(this), function(e) {
    "use strict";
    var t = [], n, r, i, s, o;
    e.Disney.geo = function(e) {
        t ? t.push(e) : e(n, i, r)
    }, o = function() {
        if (t) {
            e.clearTimeout(s), n = e.countryisocode, r = e.state, i = e.connection || "broadband";
            for (var o = 0; o < t.length; ++o)
                t[o](n, i, r);
            t = s = null
        }
    }, s = e.setTimeout(o, 5e3), e.getScript("//tredir.go.com/capmon/GetDE/?set=j&param=countryisocode&param=state&param=connection", o)
}(this), function(e) {
    "use strict";
    var t = e.Disney, n = e.document, r = e.decodeURIComponent, i = e.encodeURIComponent, s = /\s*([^=;]+)=?([^;]*);?/g, o = /(?:^|.)([a-z0-9\-]+(?:\.com?)?\.[a-z\-]+)$/, u = t.Cookie = {
        enabled: function() {
            return e.navigator.cookieEnabled || "cookie"in n && (n.cookie.length > 0 || (n.cookie = n.cookie.indexOf("cookietest")>-1))
        },
        get: function(e, t) {
            return u.all(t)[e]
        },
        all: function(e) {
            var t = {}, i, o, u = n.cookie || "", a = e && e.raw;
            while (i = s.exec(u))
                o = i[2], t[r(i[1])] = a ? o : r(o);
            return t
        },
        set: function(e, t, r) {
            r = r || {};
            var s = r.expires, o;
            t === null && (t = "", s =- 1), typeof s == "number" && (o = s, s = new Date, s.setDate(s.getDate() + o)), s && s.toUTCString && (s = s.toUTCString()), n.cookie = [i(e), "=", r.raw ? t: i(t), s ? "; expires=" + s: "", r.path ? "; path=" + r.path: "", r.domain ? "; domain=" + r.domain: "", r.secure ? "; secure": ""].join("")
        },
        remove: function(e, t) {
            u.set(e, null, t)
        },
        domain: function(t) {
            return t = t || e.location.hostname, "." + (o.exec(t) || [t, t])[1]
        }
    }
}(this), function(e) {
    "use strict";
    function n() {
        return !!e.s_gi
    }
    function r(e, t) {
        while (e) {
            if (e.nodeName === "A" && e.hasAttribute("href")) {
                t(e);
                break
            }
            e = e.parentNode
        }
    }
    function i(t) {
        o({
            app: "w88_dolwa_prod03",
            trckTp: "tracklink",
            vendorLst: "o",
            url: e.location.href,
            linkNm: "pre-cto|" + s(t.textContent || t.innerText),
            linkPos: "pre-cto"
        })
    }
    function s(e) {
        return ("" + e).replace(/[^a-z0-9_:, \-]/gi, "").replace(/\s+/g, " ")
    }
    function o(t) {
        var n = new e.Image, r = "http://ctologger01.analytics.go.com/cto/?" + u(t);
        n.src = r
    }
    function u(e) {
        var n = [];
        for (var r in e)
            e.hasOwnProperty(r) && n.push(t(r) + "=" + t(e[r]));
        return n.join("&")
    }
    function a(t, n, r) {
        var i, s = function(t) {
            t = t || e.event || {
                type: n
            }, i && i.call(this, t), r.call(this, t)
        };
        t.addEventListener ? t.addEventListener(n, s, !1) : (i = t["on" + n], t["on" + n] = s), t = null
    }
    var t = e.encodeURIComponent;
    a(e.document.documentElement, "click", function(e) {
        var t = e.target || e.srcElement;
        n() || r(t, i)
    })
}(this), function(e, t) {
    "use strict";
    function s(e) {
        var t = {}, n, r, i;
        for (n in e)
            if (e.hasOwnProperty(n)) {
                i = e[n], n = n.split(",");
                for (r = 0; r < n.length; ++r)
                    t[n[r]] = i
            }
        return t
    }
    var n = e.Disney, r = n.Cookie, i = n.Rdr = function(o, u) {
        function l(e, t) {
            return !e || o[e + ":" + t] || a || o[e] || o.other ||!0
        }
        function c() {
            return n.geo(function(e, t, n) {
                var r = l(e, n);
                r!==!0 && i.go(r)
            }), f
        }
        function h() {
            var t = e.jQuery.Deferred();
            return n.geo(function(e, n, r) {
                l(e, r)===!0 && t.resolve()
            }), t.promise()
        }
        var a=!1, f = this;
        o = s(o), u === t && (u = /[?&]intoverride\b/.exec(e.location.search));
        if (u || r.get("intoverride"))
            a=!0, r.set("intoverride", "true", {
                domain: r.domain()
            });
        f.run = c, f.loader = h
    };
    i.go = function(t) {
        var n = e.document.documentElement;
        n && (n.style.display = "none"), e.document.location.replace(t)
    }
}(this);
