/* VimeoPlayer - v2.5.21 - 2014-11-17 */
(function(q, w, V) {
    var Ja, za, ea, La, oa, sa, qa, Ma, Ka, aa, Na, Va, Ya, Za, Sa, Ta, Oa, bb, cb, db, eb, fb, Pa, Qa, ka, Aa, ja, Ba, gb;
    (function() {
        (function() {
            for (var c = ["webkit", "moz"], b = 0; b < c.length&&!q.requestAnimationFrame; ++b) {
                var a = c[b];
                q.requestAnimationFrame = q[a + "RequestAnimationFrame"];
                q.cancelAnimationFrame = q[a + "CancelAnimationFrame"] || q[a + "CancelRequestAnimationFrame"]
            }
            !/iP(ad|hone|od).*OS 6/.test(q.navigator.userAgent) && q.requestAnimationFrame && q.cancelAnimationFrame || (q.requestAnimationFrame = function(a) {
                return setTimeout(a,
                0)
            }, q.cancelAnimationFrame = clearTimeout)
        })();
        !Object.defineProperty && Object.prototype.__defineGetter__ && (Object.defineProperty = function(c, b, a) {
            "get"in a && c.__defineGetter__(b, a.get);
            "set"in a && c.__defineSetter__(b, a.set);
            a.get || a.set || (c[b] = a.value)
        });
        !Object.defineProperties && Object.defineProperty && (Object.defineProperties = function(c, b) {
            for (var a in b)
                try {
                    Object.defineProperty(c, a, b[a])
            } catch (d) {
                "'enumerable' attribute on the property descriptor cannot be set to 'true' on this object" === d.message &&
                (b[a].enumerable=!1, Object.defineProperty(c, a, b[a]))
            }
            return c
        });
        !Object.create && Object.defineProperty && (Object.create = function(c, b) {
            function a() {}
            if ("object" !== typeof c && "function" !== typeof c)
                throw new TypeError("Object prototype may only be an Object or null");
            a.prototype = c;
            var d = new a;
            d.__proto__ = c;
            b !== V && Object.defineProperties(d, b);
            return d
        });
        Object.keys || (Object.keys = function(c) {
            if ("object" !== typeof c && "function" !== typeof c || null === c)
                throw new TypeError("Object.keys called on a non-object");
            var b = [], a;
            for (a in c)
                c.hasOwnProperty(a) && b.push(a);
            return b
        });
        Array.prototype.indexOf || (Array.prototype.indexOf = function(c) {
            for (var b = 0, a = this.length; b < a; b++)
                if (b in this && this[b] === c)
                    return b;
            return - 1
        });
        "classList"in w.documentElement ||!Object.defineProperty || "undefined" === typeof HTMLElement || Object.defineProperty(HTMLElement.prototype, "classList", {
            get: function() {
                function c(a) {
                    return function(c) {
                        var e = b.className.split(/\s+/), l = e.indexOf(c);
                        a(e, l, c);
                        b.className = e.join(" ")
                    }
                }
                var b = this, a = {
                    add: c(function(a,
                    b, c) {
                        return ~b || a.push(c)
                    }),
                    remove: c(function(a, b) {
                        return ~b && a.splice(b, 1)
                    }),
                    toggle: c(function(a, b, c) {
                        return ~b ? a.splice(b, 1) : a.push(c)
                    }),
                    contains: function(a) {
                        return !!~b.className.split(/\s+/).indexOf(a)
                    },
                    item: function(a) {
                        return b.className.split(/\s+/)[a] || null
                    }
                };
                Object.defineProperty(a, "length", {
                    get: function() {
                        return b.className.split(/\s+/).length
                    }
                });
                return a
            }
        })
    })();
    (function(c, b, a) {
        function d() {
            var a = Array.prototype.slice.apply(arguments), b = a.shift();
            H[b].forEach(function(b) {
                "function" === typeof b &&
                b.apply(b, a)
            })
        }
        function g(a) {
            return function(b, d) {
                - 1 !== F.indexOf(b) && a.call(this, b, d)
            }
        }
        function n(a) {
            var b = null;
            "VIDEO" === a.tagName ? b = a : (a = a.getElementsByTagName("video"), a[0] && (b = a[0]));
            return b
        }
        function l(a) {
            var b = n(a);
            if (b && b.webkitEnterFullscreen) {
                try {
                    b.readyState < b.HAVE_METADATA ? (b.addEventListener("loadedmetadata", function O() {
                        b.removeEventListener("loadedmetadata", O, !1);
                        b.webkitEnterFullscreen();
                        z=!!b.getAttribute("controls")
                    }, !1), b.load()) : (b.webkitEnterFullscreen(), z=!!b.getAttribute("controls")),
                    E = b
                } catch (d) {
                    return u("not_supported", a)
                }
                return !0
            }
            return u(r.request === V ? "not_supported" : "not_enabled", a)
        }
        function t() {
            v.element || (s(), m())
        }
        function m() {
            a && "webkitfullscreenchange" === r.change && c.removeEventListener("resize", t, !1)
        }
        var q = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT"in Element, x = /i(Pad|Phone|Pod)/.test(navigator.userAgent) && 7 <= parseInt(navigator.userAgent.replace(/^.*OS (\d+)_(\d+).*$/, "$1.$2"), 10), r = function() {
            var a = b.createElement("video"), d = {
                request: ["requestFullscreen", "webkitRequestFullscreen",
                "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"],
                exit: ["exitFullscreen", "webkitCancelFullScreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"],
                enabled: ["fullscreenEnabled", "webkitFullscreenEnabled", "mozFullScreenEnabled", "msFullscreenEnabled"],
                element: ["fullscreenElement", "webkitFullscreenElement", "webkitCurrentFullScreenElement", "mozFullScreenElement", "msFullscreenElement"],
                change: ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
                error: ["fullscreenerror", "webkitfullscreenerror", "mozfullscreenerror", "MSFullscreenError"]
            }, c = {}, e;
            for (e in d)
                for (var h = 0, g = d[e].length; h < g; h++)
                    if (d[e][h]in a || d[e][h]in b || "on" + d[e][h].toLowerCase()in b) {
                        c[e] = d[e][h];
                        break
                    }
            return c
        }(), h = {
            ENTER: "enter",
            EXIT: "exit",
            CHANGE: "change",
            ERROR: "error"
        }, F = [], H = {};
        Object.keys(h).forEach(function(a) {
            F.push(h[a]);
            H[h[a]] = []
        });
        var E = null, z = null, G = function() {}, B = [], L=!1;
        - 1 < navigator.userAgent.indexOf("Android")&&-1 < navigator.userAgent.indexOf("Chrome") && (L = parseInt(navigator.userAgent.replace(/^.*Chrome\/(\d+).*$/,
        "$1"), 10) ||!0);
        var k = function(a) {
            var b = B[B.length - 1];
            if (b && (a !== b.element && a !== E ||!b.hasEntered)) {
                "VIDEO" === a.tagName && (E = a);
                if (1 === B.length)
                    v.onenter(v.element);
                b.enter.call(b.element, a || b.element);
                b.hasEntered=!0;
                d(h.ENTER, v.element)
            }
        }, s = function() {
            !E || z || x || (E.setAttribute("controls", "controls"), E.removeAttribute("controls"));
            z = E = null;
            var a = B.pop();
            a && (a.exit.call(a.element), d(h.EXIT, a.element), v.element || (B.forEach(function(a) {
                a.exit.call(a.element);
                d(h.EXIT, a.element)
            }), B = [], v.onexit()))
        }, u =
        function(a, b) {
            if (0 < B.length) {
                var c = B.pop();
                b = b || c.element;
                c.error.call(b, a);
                v.onerror(b, a);
                d(h.ERROR, b, a)
            }
        }, v = {
            request: function(d, c, e, h) {
                d = d || b.body;
                B.push({
                    element: d,
                    enter: c || G,
                    exit: e || G,
                    error: h || G
                });
                if (r.request === V || a&&!1 === b[r.enabled] ||!1 !== L && 32 > L)
                    return l(d);
                if (a && r.enabled === V)
                    r.enabled = "webkitFullscreenEnabled", d[r.request](), setTimeout(function() {
                        b[r.element] ? b[r.enabled]=!0 : (b[r.enabled]=!1, l(d))
                    }, 250);
                else 
                    try {
                        if (/5\.1[\.\d]* Safari/.test(navigator.userAgent))
                            d[r.request]();
                        else 
                            d[r.request](q &&
                            Element.ALLOW_KEYBOARD_INPUT);
                            setTimeout(function() {
                                b[r.element] || u(a ? "not_enabled" : "not_allowed", d)
                            }, 100)
                } catch (g) {
                    u("not_enabled", d)
                }
            },
            exit: function() {
                m();
                b[r.exit]()
            },
            toggle: function(a, b, d, c) {
                v.element ? v.exit() : v.request(a, b, d, c)
            },
            videoEnabled: function(a) {
                if (v.enabled)
                    return !0;
                a = a || b.body;
                return (a = n(a)) && a.webkitSupportsFullscreen !== V ? a.readyState < a.HAVE_METADATA ? "maybe" : a.webkitSupportsFullscreen : !1
            },
            on: g(function(a, b) {
                H[a].push(b)
            }),
            off: g(function(a, b) {
                var d = H[a].indexOf(b);
                - 1 < d && H[a].splice(d,
                1)
            }),
            onenter: G,
            onexit: G,
            onchange: G,
            onerror: G
        };
        try {
            Object.defineProperties(v, {
                element: {
                    enumerable: !0,
                    get: function() {
                        return E && E.webkitDisplayingFullscreen ? E : b[r.element] || null
                    }
                },
                enabled: {
                    enumerable: !0,
                    get: function() {
                        return "webkitCancelFullScreen" !== r.exit || a?!1 !== L && 32 > L?!1 : b[r.enabled] ||!1 : !0
                    }
                }
            })
        } catch (A) {
            v.element = null, v.enabled=!1
        }
        r.change && b.addEventListener(r.change, function(b) {
            v.onchange(v.element);
            d(h.CHANGE, v.element);
            v.element ? (b = B[B.length - 2]) && b.element === v.element ? s() : (k(v.element), a &&
            "webkitfullscreenchange" === r.change && c.addEventListener("resize", t, !1)) : s()
        }, !1);
        b.addEventListener("webkitbeginfullscreen", function(a) {
            var b=!0;
            if (0 < B.length)
                for (var c = 0, e = B.length; c < e; c++)
                    if (n(B[c].element) === a.srcElement) {
                        b=!1;
                        break
                    }
            b && B.push({
                element: a.srcElement,
                enter: G,
                exit: G,
                error: G
            });
            v.onchange(a.srcElement);
            d(h.CHANGE, v.srcElement);
            k(a.srcElement)
        }, !0);
        b.addEventListener("webkitendfullscreen", function(a) {
            v.onchange(a.srcElement);
            d(h.CHANGE, a.srcElement);
            s(a.srcElement)
        }, !0);
        r.error && b.addEventListener(r.error,
        function(a) {
            u("not_allowed")
        }, !1);
        c.BigScreen = v
    })(q, w, self !== top);
    var ba = function() {
        function c() {
            var b = arguments;
            if (1 === b.length && b[0]instanceof c)
                return b = b[0], this.red = b.red, this.green = b.green, this.blue = b.blue, this.alpha = b.alpha, this.hue = b.hue, this.saturation = b.saturation, this.lightness = b.lightness, this;
            if (1 === b.length) {
                if ("string" === typeof b[0] && 0 <= b[0].indexOf("rgb")) {
                    b = /rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d\.]+))?\)/.exec(b[0]);
                    if (!b)
                        throw Error("Invalid rgb value");
                    this.rgba = {
                        red: parseInt(b[1],
                        10),
                        green: parseInt(b[2], 10),
                        blue: parseInt(b[3], 10),
                        alpha: parseFloat(b[5]) || 1
                    };
                    return this
                }
                var a = b[0] + "", a = a.replace("#", "");
                if ("string" !== typeof a || 3 !== a.length && 6 !== a.length || isNaN(parseInt(a, 16)))
                    throw Error("Invalid hex value");
                this.hex = b[0];
                return this
            }
            if (3 === b.length || 4 === b.length) {
                for (a = 0; 3 > a; a++)
                    if (isNaN(parseInt(b[a], 10)) || 0 > parseInt(b[a], 10) || 255 < parseInt(b[a], 10))
                        throw Error("Invalid rgb value");
                if (b[3] && 0 > parseFloat(b[3]) || 1 < parseFloat(b[3]))
                    throw Error("Invalid alpha value");
                this.rgba =
                {
                    red: b[0],
                    green: b[1],
                    blue: b[2],
                    alpha: parseFloat(b[3]) || 1
                };
                return this
            }
            throw Error("Invalid color");
        }
        c.prototype = {
            get complement() {
                var b = this.clone();
                b.rgb = {
                    red: 255 - this.red,
                    green: 255 - this.green,
                    blue: 255 - this.blue
                };
                return b
            },
            get hex() {
                return c.rgbToHex(this.red, this.green, this.blue)
            },
            set hex(b) {
                this.rgba = c.hexToRgb(b);
                return this
            },
            get hsl() {
                return "hsl(" + this.hue + "," + this.saturation + "%," + Math.round(this.lightness) + "%)"
            },
            set hsl(b) {
                this.hue = b.hue;
                this.saturation = b.saturation;
                this.lightness = b.lightness;
                b = c.hslToRgb(b.hue, b.saturation, b.lightness);
                this.red = b.red;
                this.green = b.green;
                this.blue = b.blue;
                this.alpha = b.alpha;
                return this
            },
            get luminance() {
                function b(a) {
                    return 0.03928 >= a ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4)
                }
                var a = b(this.red / 255), d = b(this.green / 255), c = b(this.blue / 255);
                return 0.2126 * a + 0.7152 * d + 0.0722 * c
            },
            get rgb() {
                return "rgb(" + this.red + "," + this.green + "," + this.blue + ")"
            },
            set rgb(b) {
                this.rgba = b;
                return this
            },
            get rgba() {
                return "rgba(" + this.red + "," + this.green + "," + this.blue + "," + this.alpha + ")"
            },
            set rgba(b) {
                this.red =
                b.red;
                this.green = b.green;
                this.blue = b.blue;
                this.alpha = b.alpha || 1;
                b = c.rgbToHsl(b.red, b.green, b.blue);
                this.hue = b.hue;
                this.saturation = b.saturation;
                this.lightness = b.lightness;
                return this
            },
            get yiq() {
                return (299 * this.red + 587 * this.green + 114 * this.blue) / 1E3
            },
            clone: function() {
                return new c(this)
            },
            lighten: function(b, a, d) {
                this.hsl = {
                    hue: this.hue,
                    saturation: this.saturation,
                    lightness: this.lightness + b
                };
                if (a && d)
                    for (b = d.contrast(this).ratio; b < a&&!(this.lighten(5), b = d.contrast(this).ratio, 100 <= this.lightness););
                return this
            },
            darken: function(b, a, d) {
                this.hsl = {
                    hue: this.hue,
                    saturation: this.saturation,
                    lightness: this.lightness - b
                };
                if (a && d)
                    for (b = d.contrast(this).ratio; b < a&&!(this.darken(5), b = d.contrast(this).ratio, 0 >= this.lightness););
                return this
            },
            overlayOn: function(b) {
                if (1 <= this.alpha)
                    return this;
                var a = this.clone();
                a.rgba = {
                    red: a.red * this.alpha + b.red * b.alpha * (1 - this.alpha),
                    green: a.green * this.alpha + b.green * b.alpha * (1 - this.alpha),
                    blue: a.blue * this.alpha + b.blue * b.alpha * (1 - this.alpha),
                    alpha: a.alpha + b.alpha * (1 - this.alpha)
                };
                return a
            },
            contrast: function(b) {
                var a = this.alpha;
                if (1 <= a) {
                    1 > b.alpha && (b = b.overlayOn(this));
                    var d = this.luminance + 0.05;
                    b = b.luminance + 0.05;
                    var g = d / b;
                    b > d && (g = 1 / g);
                    g = Math.round(10 * g) / 10;
                    return {
                        ratio: g,
                        error: 0,
                        min: g,
                        max: g
                    }
                }
                var g = this.overlayOn(c.white).contrast(b).ratio, d = this.overlayOn(c.black).contrast(b).ratio, g = Math.max(g, d), n = {
                    red: Math.min(Math.max(0, (b.red - this.red * a) / (1 - a)), 255),
                    green: Math.min(Math.max(0, (b.green - this.green * a) / (1 - a)), 255),
                    blue: Math.min(Math.max(0, (b.blue - this.blue * a) / (1 - a)), 255)
                }, a = this.clone();
                a.rgb = n;
                b = this.overlayOn(a).contrast(b).ratio;
                return {
                    ratio: Math.round((b + g) / 2 * 10) / 10,
                    error: Math.round((g - b) / 2 * 10) / 10,
                    min: b,
                    max: g,
                    closest: a,
                    farthest: d === g ? c.white: c.black
                }
            },
            wcagAACompliant: function(b) {
                return 4.5 <= this.contrast(b).ratio
            },
            wcagAAACompliant: function(b) {
                return 7 <= this.contrast(b).ratio
            },
            yiqContrastColor: function() {
                return 120 <= this.yiq ? new c(0, 0, 0) : new c(255, 255, 255)
            }
        };
        c.hexToRgb = function(b) {
            b += "";
            if (3 === b.length || 4 === b.length) {
                if (b = /^#?([A-Fa-f0-9])([A-Fa-f0-9])([A-Fa-f0-9])$/i.exec(b))
                    b[1] +=
                    b[1], b[2] += b[2], b[3] += b[3]
            } else 
                b = /^#?([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})$/i.exec(b);
            return b ? {
                red: parseInt(b[1], 16),
                green: parseInt(b[2], 16),
                blue: parseInt(b[3], 16),
                alpha: 1
            } : null
        };
        c.rgbToHex = function(b, a, d) {
            return "#" + (16777216 + (Math.round(b)<<16) + (Math.round(a)<<8) + Math.round(d)).toString(16).slice(1)
        };
        c.rgbToHsl = function(b, a, d) {
            b/=255;
            a/=255;
            d/=255;
            var c = Math.max(b, a, d), e = Math.min(b, a, d), l = (c + e) / 2, t = l, m = l;
            if (c === e)
                return {
                    hue: 0,
                    saturation: 0,
                    lightness: 100 * m
                };
            var q = c - e, t = 0.5 < m ? q / (2 - c - e):
            q / (c + e);
            c === b ? l = (a - d) / q + (a < d ? 6 : 0) : c === a ? l = (d - b) / q + 2 : c === d && (l = (b - a) / q + 4);
            return {
                hue: Math.round(l / 6 * 360),
                saturation: Math.round(100 * t),
                lightness: Math.round(100 * m)
            }
        };
        c.hslToRgb = function(b, a, d) {
            function c(a, b, d) {
                0 > d && (d += 1);
                1 < d && (d -= 1);
                return 1 > 6 * d ? a + 6 * (b - a) * d : 1 > 2 * d ? b : 2 > 3 * d ? a + 6 * (b - a) * (2 / 3 - d) : a
            }
            b/=360;
            a/=100;
            d/=100;
            if (0 === a)
                return {
                    red: Math.floor(255 * d),
                    green: Math.floor(255 * d),
                    blue: Math.floor(255 * d)
                };
            a = 0.5 > d ? d * (1 + a) : d + a - a * d;
            d = 2 * d - a;
            return {
                red: Math.floor(255 * c(d, a, b + 1 / 3)),
                green: Math.floor(255 * c(d, a, b)),
                blue: Math.floor(255 * c(d, a, b - 1 / 3))
            }
        };
        c.hslToHex = function(b, a, d) {
            b = c.hslToRgb(b, a, d);
            return c.rgbToHex(b.red, b.green, b.blue)
        };
        c.white = new c("fff");
        c.black = new c("000");
        return c
    }(), Da = function() {
        return {
            make: function(c) {
                c = c || {};
                var b = {};
                c.on = function(a, d) {
                    a = [].concat(a);
                    for (var g = 0, n = a.length; g < n; g++) {
                        var l = a[g];
                        l && (b[l] || (b[l] = []), b[l].push(d))
                    }
                    return c
                };
                c.once = function(a, b) {
                    function g() {
                        b.apply(c.off(a, g), arguments)
                    }
                    g.handler = b;
                    return c.on(a, g)
                };
                c.off = function(a, d) {
                    a = [].concat(a);
                    for (var g = 0, n = a.length; g <
                    n; g++) {
                        var l = a[g];
                        if (l && l in b) {
                            var t = b[l].indexOf(d);
                            if ( - 1 === t) {
                                for (var m = 0, q = b[l].length; m < q; m++)
                                    if (b[l][m].handler === d) {
                                        t = g;
                                        break
                                    }
                                if ( - 1 === t)
                                    break
                            }
                            b[l].splice(t, 1)
                        }
                    }
                    return c
                };
                c.fire = function(a) {
                    if (!a)
                        return c;
                    if (a in b)
                        for (var d = b[a].slice(0), g = 0, n = d.length; g < n; g++)
                            d[g].apply(c, d.slice.call(arguments, 1));
                    return c
                };
                return c
            }
        }
    }();
    (function() {
        function c(a) {
            return t ? t : a.matches ? t = a.matches : a.webkitMatchesSelector ? t = a.webkitMatchesSelector : a.mozMatchesSelector ? t = a.mozMatchesSelector : a.msMatchesSelector ?
            t = a.msMatchesSelector : a.oMatchesSelector ? t = a.oMatchesSelector : t = l.matchesSelector
        }
        function b(a, d, g) {
            if ("_root" == d)
                return g;
            if (a !== g) {
                if (c(a).call(a, d))
                    return a;
                if (a.parentNode)
                    return m++, b(a.parentNode, d, g)
            }
        }
        function a(a, b, d, c) {
            x[a.id] || (x[a.id] = {});
            x[a.id][b] || (x[a.id][b] = {});
            x[a.id][b][d] || (x[a.id][b][d] = []);
            x[a.id][b][d].push(c)
        }
        function d(a, b, d, c) {
            if (x[a.id])
                if (!b)
                    for (var e in x[a.id])
                        x[a.id].hasOwnProperty(e) && (x[a.id][e] = {});
                else if (!c&&!d)
                    x[a.id][b] = {};
                else if (!c)
                    delete x[a.id][b][d];
                else if (x[a.id][b][d])
                    for (e =
                    0; e < x[a.id][b][d].length; e++)
                        if (x[a.id][b][d][e] === c) {
                            x[a.id][b][d].splice(e, 1);
                            break
                        }
        }
        function g(a, d, c) {
            if (x[a][c]) {
                var e = d.target || d.srcElement, g, n, B = {}, t = n = 0;
                m = 0;
                for (g in x[a][c])
                    x[a][c].hasOwnProperty(g) && (n = b(e, g, r[a].element)) && l.matchesEvent(c, r[a].element, n, "_root" == g, d) && (m++, x[a][c][g].match = n, B[m] = x[a][c][g]);
                d.stopPropagation = function() {
                    d.cancelBubble=!0
                };
                for (n = 0; n <= m; n++)
                    if (B[n])
                        for (t = 0; t < B[n].length; t++) {
                            if (!1 === B[n][t].call(B[n].match, d)) {
                                l.cancel(d);
                                return 
                            }
                            if (d.cancelBubble)
                                return 
                        }
            }
        }
        function n(b, c, e, n) {
            function z(a) {
                return function(b) {
                    g(r, b, a)
                }
            }
            if (this.element) {
                b instanceof Array || (b = [b]);
                e || "function" != typeof c || (e = c, c = "_root");
                var r = this.id, B;
                for (B = 0; B < b.length; B++)
                    n ? d(this, b[B], c, e) : (x[r] && x[r][b[B]] || l.addEvent(this, b[B], z(b[B])), a(this, b[B], c, e));
                return this
            }
        }
        function l(a, b) {
            if (!(this instanceof l)) {
                for (var d in r)
                    if (r[d].element === a)
                        return r[d];
                P++;
                r[P] = new l(a, P);
                return r[P]
            }
            this.element = a;
            this.id = b
        }
        var t, m = 0, P = 0, x = {}, r = {};
        l.prototype.on = function(a, b, d) {
            return n.call(this,
            a, b, d)
        };
        l.prototype.off = function(a, b, d) {
            return n.call(this, a, b, d, !0)
        };
        l.matchesSelector = function() {};
        l.cancel = function(a) {
            a.preventDefault();
            a.stopPropagation()
        };
        l.addEvent = function(a, b, d) {
            a.element.addEventListener(b, d, "blur" == b || "focus" == b)
        };
        l.matchesEvent = function() {
            return !0
        };
        q.Gator = l
    })();
    (function(c) {
        var b = c.addEvent, a = "onmspointerenter"in w, d = "onmspointerleave"in w;
        c.addEvent = function(c, e, l) {
            "mouseenter" === e && (e = "mouseover");
            "mouseleave" === e && (e = "mouseout");
            "MSPointerEnter" !== e || a || (e = "MSPointerOver");
            "MSPointerLeave" !== e || d || (e = "MSPointerOut");
            b(c, e, l)
        };
        c.matchesEvent = function(b, c, e, t, m) {
            return "mouseenter" === b || "mouseleave" === b ||!a && "MSPointerEnter" === b ||!d && "MSPointerLeave" === b ? (b = m.relatedTarget ? t && c !== e?!1 : e === m.relatedTarget?!1 : e.contains(m.relatedTarget)?!1 : !0 : !0, b) : !0
        }
    })(Gator);
    (function(c) {
        var b = c.addEvent, a = "undefined" === typeof q.PointerEvent && "undefined" !== typeof q.MSPointerEvent, d = {
            pointerdown: "MSPointerDown",
            pointerup: "MSPointerUp",
            pointercancel: "MSPointerCancel",
            pointermove: "MSPointerMove",
            pointerenter: "MSPointerEnter",
            pointerleave: "MSPointerLeave",
            pointerover: "MSPointerOver",
            pointerout: "MSPointerOut"
        };
        c.addEvent = function(c, e, l) {
            a && d[e] && (e = d[e]);
            b(c, e, l)
        }
    })(Gator);
    (function(c) {
        var b = c.addEvent;
        c.addEvent = function(a, d, c) {
            "transitionend" === d && (b(a, "webkitTransitionEnd", c), b(a, "otransitionend", c));
            b(a, d, c)
        }
    })(Gator);
    var s = function(c, b) {
        return {
            addCssRule: function(a, b, g) {
                try {
                    g = g || c.styleSheets[0], g.addRule ? g.addRule(a, b) : g.insertRule(a + "{" + b + "}", (g.cssRules || g.rules).length)
                } catch (n) {}
            },
            attachClickHandler: function(a, d, g, n) {
                var l=!1;
                n = "function" === typeof d ? g : n;
                g = "function" === typeof d ? d : g;
                d = "function" === typeof d ? null : d;
                var t = function(a) {
                    var d=!0;
                    if (a.changedTouches) {
                        var r = c.elementFromPoint(a.changedTouches[0].pageX - b.pageXOffset, a.changedTouches[0].pageY - b.pageYOffset);
                        null !== r && this.contains(r) && (d = g.call(this, a))
                    }
                    "function" === typeof n && n.call(this, a);
                    l=!0;
                    return d
                }, m = function(a) {
                    if (!l)
                        return g.call(this, a);
                    l=!1
                };
                if (d)
                    Gator(a).on("click", d, m).on("touchend", d, t);
                else 
                    Gator(a).on("click",
                    m).on("touchend", t)
            },
            isArray: function(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            },
            limit: function(a, b, c) {
                return a > c ? c : b > a ? b : a
            },
            openWindow: function(a, c, e, n, l) {
                var t = (b.screenY || b.screenTop || 0) + b.outerHeight / 2 - e / 2, m = (b.screenX || b.screenLeft || 0) + b.outerWidth / 2 - c / 2;
                u.browser.chrome && u.mac && (e += 27);
                return b.open(a, n, l + ",width=" + c + ",height=" + e + ",left=" + m + ",top=" + t)
            },
            parseTime: function(a) {
                var b = a.match(/t=([0-9hms:]+)/);
                null !== b && (a = b[1]);
                var c=!1, e = 0, l = 0, t = 0, m = 0;
                (b = a.match(/^([0-9]+)$/)) &&
                b.length && (c=!0, m = b[1]);
                !1 === c && (b = a.match(/^(([0-9]+)h)?(([0-9]+)m)?(([0-9]+)s)?/), null !== b && "" !== b[0] && (c=!0, l = b[2], t = b[4], m = b[6]));
                !1 === c && (b = a.match(/^([0-9:]+)/), null !== b && (c=!0, a = a.split(":").reverse(), m = a[0], a[1] && (t = a[1]), a[2] && (l = a[2])));
                if (!c)
                    return null;
                l && (e += 3600 * l);
                t && (e += 60 * t);
                m && (e += parseInt(m, 10));
                return e
            },
            resetFocus: function(a) {
                a = (a || c).querySelectorAll("*[tabindex]");
                for (var d = [], g = 0, n, l, t = 0, m = a.length; t < m; t++)
                    n = a[t], l = b.getComputedStyle(n, ""), 0 < n.tabIndex && "none" !== l.display &&
                    0 < l.opacity && "hidden" !== l.visibility && (d[g++] = n);
                if (a = d.shift())
                    a.focus(), a.blur()
            },
            round: function(a, b) {
                a = parseFloat(a);
                if (isNaN(a))
                    return 0;
                var c = Math.pow(10, b || 3);
                return Math.round(a * c) / c
            },
            throttle: function(a, b) {
                var c, e, l, t, m = 0, q = function() {
                    m = new Date;
                    l = null;
                    t = a.apply(c, e)
                };
                return function() {
                    var x = new Date, r = b - (x - m);
                    c = this;
                    e = arguments;
                    0 >= r ? (clearTimeout(l), l = null, m = x, t = a.apply(c, e)) : l || (l = setTimeout(q, r));
                    return t
                }
            }
        }
    }(w, q), Ea = function(c, b) {
        function a(a, b, c) {
            return z ? Object.create(DOMException.prototype,
            {
                code: {
                    enumerable: !0,
                    value: a
                },
                message: {
                    enumerable: !0,
                    value: b
                },
                name: {
                    enumerable: !0,
                    value: c
                },
                toString: {
                    value: function() {
                        return "Error: " + this.message
                    }
                }
            }) : (b = Error(b), b.code = a, b.name = c, b)
        }
        function d(a) {
            return z ? Object.create(MediaError.prototype, {
                code: {
                    enumerable: !0,
                    value: a
                }
            }) : {
                code: a,
                MEDIA_ERR_ABORTED: 1,
                MEDIA_ERR_DECODE: 3,
                MEDIA_ERR_NETWORK: 2,
                MEDIA_ERR_SRC_NOT_SUPPORTED: 4
            }
        }
        function g(b, d, g) {
            var h = function(b, d) {
                if (!b || b[d] === V)
                    throw a("DOMException"in c ? DOMException.INDEX_SIZE_ERR : 1, "INDEX_SIZE_ERR: DOM Exception 1",
                    "INDEX_SIZE_ERR");
                return b[d]
            };
            return z ? Object.create("object" === typeof TimeRanges ? TimeRanges.prototype : Object.prototype, {
                length: {
                    enumerable: !0,
                    value: b
                },
                start: {
                    value: function(a) {
                        return h(d, a)
                    }
                },
                end: {
                    value: function(a) {
                        return h(g, a)
                    }
                }
            }) : {
                length: b,
                start: function(a) {
                    return h(d, a)
                },
                end: function(a) {
                    return h(g, a)
                }
            }
        }
        function n(a) {
            return "undefined" === typeof TextTrackList ? Object.create(Object.prototype, {
                length: {
                    enumerable: !0,
                    value: a.length
                },
                item: {
                    enumerable: !0,
                    value: function(b) {
                        return a[b]
                    }
                }
            }) : Object.create(TextTrackList.prototype,
            {
                length: {
                    enumerable: !0,
                    value: 0
                }
            })
        }
        function l(a, b) {
            return function() {
                if (a.type === h.TYPE_FLASH && a.swf && a.swfLoaded) {
                    var c = "get" + b.charAt(0).toUpperCase() + b.slice(1);
                    return a.swf[c]()
                }
                return a.type === h.TYPE_HTML && a.video ? a.video[b] : b in a.propertyValues ? a.propertyValues[b] : h.properties[b].value
            }
        }
        function t(a, b) {
            return function(c) {
                a.propertyValues[b] = c;
                try {
                    if (a.type === h.TYPE_FLASH && a.swf && a.swfLoaded) {
                        var d = "set" + b.charAt(0).toUpperCase() + b.slice(1);
                        a.swf[d](c)
                    } else 
                        a.type === h.TYPE_HTML && a.video && (a.video[b] =
                        c)
                } catch (e) {}
            }
        }
        function m(a, b) {
            return function() {
                if (a.type === h.TYPE_FLASH)
                    return a.swfLoaded ? a.swf["_" + b]() : a.queuedMethodCalls.push({
                        method: b,
                        args: arguments
                    });
                if (a.type === h.TYPE_HTML)
                    return a.video[b].apply(a.video, arguments)
            }
        }
        function q(a) {
            if (!a)
                return null;
            a = a.split("?")[0].split(".");
            switch (a[a.length - 1]) {
            case "mp4":
            case "m3u8":
                return "video/mp4";
            case "web":
            case "webm":
                return "video/webm";
            case "flv":
                return "video/x-flv"
            }
            return null
        }
        function x(a) {
            a.style.display = "none";
            a.setAttribute("hidden", "");
            a.pause();
            a.src = ""
        }
        function r(a) {
            a.style.display = "none";
            a.setAttribute("hidden", "");
            try {
                a._pause(), a.setSrc("")
            } catch (b) {}
        }
        function h(a, E) {
            if (!a)
                throw Error("You must pass a valid element");
            var k = this;
            k.uuid = Math.round(1E3 * Math.random() + (new Date).getTime());
            k.global = "flideo_" + k.uuid;
            c[k.global] = k;
            var G = {};
            z || (G = b.createElement("flideo"), b.body.appendChild(G));
            var s = Da.make({});
            k.queuedMethodCalls = [];
            k.propertyValues = {};
            k.textTracks = [];
            var v = ["webkitplaybacktargetavailabilitychanged", "webkitcurrentplaybacktargetiswirelesschanged"],
            A = {
                src: {
                    enumerable: !0,
                    get: l(k, "src"),
                    set: function(c) {
                        k.propertyValues.src = c;
                        var e = null;
                        switch (q(c)) {
                        case "video/mp4":
                            e = F && F.h264.baseline ? h.TYPE_HTML : h.TYPE_FLASH;
                            break;
                        case "video/webm":
                            e = F && F.webm ? h.TYPE_HTML : h.TYPE_FLASH;
                            break;
                        case "video/x-flv":
                            e = h.TYPE_FLASH
                        }
                        c = e !== h.TYPE_FLASH || u.flash.versionAtLeast(10, 1) ? e : null;
                        0;
                        k.type = c;
                        if (c === h.TYPE_HTML) {
                            if (!k.video) {
                                var g = k.eventCallback, A = k.textTracks, e = b.createElement("video");
                                e.setAttribute("x-webkit-airplay", "allow");
                                for (var f = 0, l = h.events.length; f <
                                l; f++)
                                    e.addEventListener(h.events[f], g);
                                g = 0;
                                for (f = A.length; g < f; g++)
                                    e.appendChild(A[g]);
                                k.video = e;
                                a.appendChild(k.video)
                            }
                            for (var z in k.propertyValues)
                                "currentTime" !== z && (0, k.video[z] = k.propertyValues[z]);
                            k.swf && r(k.swf);
                            k.video.style.display = "";
                            k.video.removeAttribute("hidden")
                        } else if (c === h.TYPE_FLASH) {
                            if (!k.swf) {
                                e = k.global;
                                g = E.swf;
                                z = b.createElement("object");
                                z.setAttribute("type", "application/x-shockwave-flash");
                                z.setAttribute("width", "100%");
                                z.setAttribute("height", "100%");
                                z.setAttribute("data",
                                g);
                                e = {
                                    flashvars: "ready=" + e + ".flashReady",
                                    movie: g,
                                    allowfullscreen: "true",
                                    allowscriptaccess: "always",
                                    bgcolor: "#000000",
                                    wmode: "opaque",
                                    quality: "high",
                                    scalemode: "noscale"
                                };
                                for (A in e)
                                    g = b.createElement("param"), g.setAttribute("name", A), g.setAttribute("value", e[A]), z.appendChild(g);
                                k.swf = z;
                                a.appendChild(k.swf)
                            }
                            k.video && x(k.video);
                            k.swf.style.display = "";
                            k.swf.removeAttribute("hidden");
                            k.swfLoaded && k.flashReady()
                        } else 
                            k.video && x(k.video), k.swf && r(k.swf);
                        k.type = c;
                        null === c && s.fire("error", {
                            type: "error",
                            target: {
                                error: d(h.MEDIA_ERR_SRC_NOT_SUPPORTED)
                            }
                        })
                    }
                },
                buffered: {
                    enumerable: !0,
                    get: function() {
                        if (k.type === h.TYPE_HTML && k.video)
                            return k.video.buffered;
                        if (k.type === h.TYPE_FLASH && k.swf && k.swfLoaded) {
                            var a = k.swf.getBuffered();
                            if (a)
                                return g(a.length, a.start, a.end)
                        }
                        return g(0)
                    }
                },
                seekable: {
                    enumerable: !0,
                    get: function() {
                        if (k.type === h.TYPE_HTML && k.video)
                            return k.video.seekable;
                        if (k.type === h.TYPE_FLASH && k.swf && k.swfLoaded) {
                            var a = k.swf.getSeekable();
                            if (a)
                                return g(a.length, a.start, a.end)
                        }
                        return g(0)
                    }
                },
                error: {
                    enumerable: !0,
                    get: function() {
                        if (k.type === h.TYPE_HTML &&
                        k.video)
                            return k.video.error;
                        if (k.type === h.TYPE_FLASH && k.swf && k.swfLoaded) {
                            var a = k.swf.getError();
                            if (a)
                                return d(a.code)
                        }
                        return null
                    }
                },
                textTracks: {
                    enumerable: !0,
                    get: function() {
                        if (k.type === h.TYPE_HTML && k.video && H) {
                            if (u.browser.firefox) {
                                for (var a = k.video.querySelectorAll("track"), b = [], c = 0, d = a.length; c < d; c++)
                                    b.push(a[c].track);
                                return b
                            }
                            return k.video.textTracks
                        }
                        return n([])
                    }
                },
                canvasImageSource: {
                    enumerable: !0,
                    get: function() {
                        return k.type === h.TYPE_HTML ? k.video : null
                    }
                },
                renderer: {
                    enumerable: !0,
                    get: function() {
                        return k.type
                    }
                },
                addEventListener: {
                    enumerable: !0,
                    value: function(a, b) {
                        if (0 <= v.indexOf(a))
                            k.video && k.video.addEventListener(a, b);
                        else 
                            return s.on(a, b)
                    }
                },
                removeEventListener: {
                    enumerable: !0,
                    value: function(a, b) {
                        if (0 <= v.indexOf(a))
                            k.video && k.video.removeEventListener(a, b);
                        else 
                            return s.off(a, b)
                    }
                },
                appendChild: {
                    enumerable: !0,
                    value: function(a) {
                        k.type === h.TYPE_HTML && k.video ? ("TRACK" === a.nodeName && k.textTracks.push(a), k.video.appendChild(a)) : 0
                    }
                },
                removeChild: {
                    enumerable: !0,
                    value: function(a) {
                        if (k.type === h.TYPE_HTML && k.video) {
                            if ("TRACK" ===
                            a.nodeName) {
                                var b = k.textTracks.indexOf(a);
                                0 <= b && k.textTracks.splice(b, 1)
                            }
                            k.video.removeChild(a);
                            0 === k.video.children.length && k.video.removeAttribute("crossorigin")
                        } else 
                            0
                    }
                },
                firstChild: {
                    enumerable: !0,
                    get: function() {
                        return k.type === h.TYPE_HTML && k.video ? k.video.firstChild : null
                    }
                },
                children: {
                    enumerable: !1,
                    get: function() {
                        return k.type === h.TYPE_HTML && k.video ? k.video.children : []
                    }
                }
            }, C, D;
            for (D in h.properties)
                D in A || (C = {
                    enumerable: !0,
                    get: l(k, D)
                }, h.properties[D].readOnly || (C.set = t(k, D)), A[D] = C);
            C = 0;
            for (D = h.methods.length; C <
            D; C++)
                A[h.methods[C]] = {
                    enumerable: !0,
                    value: m(k, h.methods[C])
                };
            "WebKitPlaybackTargetAvailabilityEvent"in c && (A.webkitShowPlaybackTargetPicker = {
                enumerable: !0,
                value: function() {
                    k.video && "webkitShowPlaybackTargetPicker"in k.video && k.video.webkitShowPlaybackTargetPicker()
                }
            }, A.webkitCurrentPlaybackTargetIsWireless = {
                enumerable: !0,
                get: function() {
                    return k.video && "webkitCurrentPlaybackTargetIsWireless"in k.video ? k.video.webkitCurrentPlaybackTargetIsWireless : !1
                }
            });
            Object.defineProperties(G, A);
            k.eventCallback =
            function(a) {
                k.type === h.TYPE_HTML && ("error" !== a.type ||!a.target.error || a.target.error.code !== h.MEDIA_ERR_DECODE && a.target.error.code !== h.MEDIA_ERR_SRC_NOT_SUPPORTED ? s.fire(a.type, a) : (F.h264.baseline = "", F.h264.high = "", G.src = G.src))
            };
            k.flashEventCallback = function(a) {
                k.type === h.TYPE_FLASH && ("error" === a.type && (a.target = k.node), s.fire(a.type, a))
            };
            k.flashReady = function() {
                if (!k.swfLoaded) {
                    for (var a = 0, b = h.events.length; a < b; a++)
                        k.swf.api_addEventListener(h.events[a], k.global + ".flashEventCallback");
                    k.swfLoaded =
                    !0
                }
                for (var c in k.propertyValues)
                    a = "set" + c.charAt(0).toUpperCase() + c.slice(1), k.swf[a](k.propertyValues[c]);
                for (c = k.queuedMethodCalls.shift(); c;)
                    k.swf["_" + c.method](), c = k.queuedMethodCalls.shift()
            };
            return G
        }
        var F = function() {
            function a(b) {
                return RegExp(b.toLowerCase()).test(d)
            }
            var d = navigator.userAgent.toLowerCase(), g = a("android") ? parseFloat(d.replace(/^.* android (\d+)\.(\d+).*$/, "$1.$2")) ||!0: !1, h = g && a("mobile"), z = a("iphone"), l = a("firefox"), A = b.createElement("video"), r=!1;
            try {
                A.canPlayType && (r = {
                    h264: {
                        baseline: A.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,
                        ""),
                        high: A.canPlayType('video/mp4; codecs="avc1.64001E"').replace(/^no$/, "")
                    },
                    webm: A.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""),
                    flv: A.canPlayType('video/x-flv; codecs="vp6"'),
                    hls: A.canPlayType("application/vnd.apple.mpegurl")
                })
            } catch (m) {}
            g && (2.1 === g || 2.2 === g || l&&!r.h264.baseline) && (r.h264.baseline = "probably");
            g&&!h && (r.h264.high = "probably");
            g && (r.hls = "");
            z && 2 > c.devicePixelRatio && (r.h264.high = "");
            return r
        }(), H = function() {
            var a = b.createElement("video");
            return "undefined" !== typeof a.textTracks &&
            a.textTracks instanceof TextTrackList && "function" === typeof a.addTextTrack
        }(), E = H && "oncuechange"in b.createElement("track").track, z;
        a: {
            try {
                Object.defineProperty({}, "fakeprop", {})
            } catch (G) {
                z=!1;
                break a
            }
            z=!0
        }
        h.TYPE_HTML = "html";
        h.TYPE_FLASH = "flash";
        h.NETWORK_EMPTY = 0;
        h.NETWORK_IDLE = 1;
        h.NETWORK_LOADING = 2;
        h.NETWORK_NO_SOURCE = 3;
        h.HAVE_NOTHING = 0;
        h.HAVE_METADATA = 1;
        h.HAVE_CURRENT_DATA = 2;
        h.HAVE_FUTURE_DATA = 3;
        h.HAVE_ENOUGH_DATA = 4;
        h.MEDIA_ERR_ABORTED = 1;
        h.MEDIA_ERR_DECODE = 3;
        h.MEDIA_ERR_NETWORK = 2;
        h.MEDIA_ERR_SRC_NOT_SUPPORTED =
        4;
        h.properties = {
            error: {
                value: null,
                readOnly: !0
            },
            src: {
                value: ""
            },
            currentSrc: {
                value: "",
                readOnly: !0
            },
            networkState: {
                value: h.NETWORK_EMPTY,
                readOnly: !0
            },
            preload: {
                value: "auto"
            },
            buffered: {
                value: g(0),
                readOnly: !0
            },
            readyState: {
                value: h.HAVE_NOTHING,
                readOnly: !0
            },
            seeking: {
                value: !1,
                readOnly: !0
            },
            currentTime: {
                value: 0
            },
            duration: {
                value: NaN,
                readOnly: !0
            },
            paused: {
                value: !0,
                readOnly: !0
            },
            defaultPlaybackRate: {
                value: 1
            },
            playbackRate: {
                value: 1
            },
            played: {
                value: g(0),
                readOnly: !0
            },
            seekable: {
                value: g(0),
                readOnly: !0
            },
            ended: {
                value: !1,
                readOnly: !0
            },
            autoplay: {
                value: !1
            },
            loop: {
                value: !1
            },
            controls: {
                value: !1
            },
            volume: {
                value: 1
            },
            muted: {
                value: !1
            },
            defaultMuted: {
                value: !1
            },
            textTracks: {
                value: n([]),
                readOnly: !0
            },
            width: {
                value: 0
            },
            height: {
                value: 0
            },
            videoWidth: {
                value: 0,
                readOnly: !0
            },
            videoHeight: {
                value: 0,
                readOnly: !0
            },
            poster: {
                value: ""
            }
        };
        h.methods = ["load", "play", "pause", "canPlayType", "addTextTrack"];
        h.events = "abort canplay canplaythrough durationchange emptied ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
        h.support = {
            video: F,
            textTracks: H,
            cueChange: E
        };
        return h
    }(this, w);
    (function() {
        var c = {
            templates: {},
            render: function(b, a) {
                return c.templates[b] ? c.templates[b].call(c, a || {}) : ""
            }
        };
        c.templates.buffer = function(b) {
            return '<svg width="110%"><defs><pattern id="buffer" patternUnits="userSpaceOnUse" x="0" y="0" width="10" height="10" viewBox="0 0 10 10"><line x1="5" y1="-1" x2="-5" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /><line x1="10" y1="-1" x2="0" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /><line x1="15" y1="-1" x2="5" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /></pattern></defs><rect fill="url(#buffer)" width="100%" height="100%" /></svg>'
        };
        c.templates.content_rating = function(b) {
            return '<div class="content-rating"><h1>Hold up!</h1><p class="subtitle">This video does not match your content rating preferences.</p><p>It may contain content indended for mature audiences including: nudity, strong language, and violence. <a href="">Edit your content rating preferences.</a></p><button>I still want to watch this video</button><div class="logo">' + b.logo + "</div></div>"
        };
        c.templates.controls = function(b) {
            var a = '<section class="play-button-cell"><div class="play-wrapper"><button tabindex="20" class="play rounded-box state-' +
            b.playState + '" title="Play" data-title-play="Play" data-title-pause="Pause" aria-label="Play"><div class="tiny-bars"><svg width="100%" height="100%" viewBox="0 0 65 40"><defs><clipPath id="rounded-border"><rect height="100%" width="100%" x="0" y="0" rx="5"/></clipPath><pattern id="buffer" patternUnits="userSpaceOnUse" x="0" y="0" width="10" height="4" viewBox="0 0 10 4"><line x1="5" y1="-1" x2="-5" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /><line x1="10" y1="-1" x2="0" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /><line x1="15" y1="-1" x2="5" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /></pattern></defs><g clip-path="url(#rounded-border)"><rect class="buffer hidden" height="3" width="110%" x="0" y="37" fill="url(#buffer)"/><rect class="loaded" height="3" width="0" x="0" y="37" fill="#666"/><rect class="played fill" height="3" width="0" x="0" y="37"/></g></svg></div><div class="play-icon">',
            a = a + (this.render("icon_play") || ""), a = a + '</div><div class="pause-icon">' + (this.render("icon_pause") || ""), a = a + '</div></button></div></section><section class="play-bar-cell"><div class="play-bar rounded-box"><div class="progress-container"><div class="progress"><div class="buffer hidden">', a = a + (this.render("buffer") || ""), a = a + ('</div><div class="loaded" role="progressbar" aria-label="loaded" aria-valuemin="0" aria-valuemax="' + b.rawDuration + '" aria-valuenow="0"></div><div class="played" role="progressbar" aria-label="played" aria-valuemin="0" aria-valuemax="' +
            b.rawDuration + '" aria-valuenow="0"></div><div class="ghost-timecode invisible" role="presentation" aria-hidden="true"><div class="box">00:00</div></div><div class="timecode" role="presentation" aria-hidden="true"><div class="box">' + b.duration + "</div></div></div></div> ");
            b.volume && (a += ' <div class="volume-container"><div class="volume" role="slider" aria-label="volume" aria-valuemin="0" aria-valuemax="1" tabindex="20"><div></div><div></div><div></div><div></div><div></div></div></div> ');
            b.ccButton &&
            (a += ' <div class="button-wrapper"><div class="cc-container"><button class="toggle cc ' + (b.ccOn ? "on" : "off") + '" tabindex="20" title="Choose captions"> ', a += this.render("icon_cc") || "", a += " </button></div></div> ");
            b.hdButton && (a += ' <div class="button-wrapper"><div class="hd-container"><button class="toggle hd ' + (b.hdOn ? "on" : "off") + '" tabindex="30" title="Turn HD ' + (b.hdOn ? "off" : "on") + '" data-title-on="Turn HD off" data-title-off="Turn HD on" aria-label="HD"> ', a += this.render("icon_hd") || "", a += " </button></div></div> ");
            b.airplayButton && (a += ' <div class="button-wrapper"><div class="airplay-container hidden" hidden><button class="toggle airplay" tabindex="30" title="Choose an AirPlay device" data-title-off="Choose an AirPlay device" data-title-on="Turn off AirPlay"> ', a += this.render("icon_airplay") || "", a += " </button></div></div> ");
            b.scalingButton && (a += ' <div class="button-wrapper only-in-fullscreen"><div class="scaling-container"><button class="scaling" tabindex="30" data-full-size="' + b.fullSize + '" data-title-full-size="View actual size" data-title-actual-size="View full size"> ',
            a += this.render("icon_scaling") || "", a += " </button></div></div> ");
            a += ' <div class="button-wrapper';
            b.fullscreenButton || (a += " only-in-fullscreen");
            a += '"><div class="fullscreen-container"><button class="fullscreen" tabindex="30" title="Enter full screen" data-title-fullscreen="Enter full screen" data-title-unfullscreen="Exit full screen" aria-label="Fullscreen"><div class="fullscreen-icon">';
            a += this.render("icon_fullscreen") || "";
            a += '</div><div class="unfullscreen-icon">';
            a += this.render("icon_unfullscreen") ||
            "";
            a += "</div></button></div></div> ";
            b.vimeoLogo.show && (a += ' <div class="logo-container"><div class="logo"><div> ', b.vimeoLogo.showLink && (a += ' <a href="' + b.vimeoLogo.url + '"', b.targetBlank && (a += ' target="_blank"'), a += ' tabindex="30" title="Watch on vimeo.com" aria-label="Watch on vimeo.com" data-clip-link> '), a += this.render("logo") || "", b.vimeoLogo.showLink && (a += " </a> "), a += " </div></div></div> ");
            a += " </div></section> ";
            b.customLogo && (a += ' <section class="custom-logo-cell', b.customLogo.sticky && (a +=
            " sticky"), a += '"><div class="custom-logo" style="width:' + b.customLogo.width + "px;height:" + b.customLogo.height + 'px"> ', b.customLogo.showLink && (a += '<a href="' + b.customLogo.url + '" target="_blank" tabindex="30">'), a += ' <img src="' + b.customLogo.img + '" alt=""> ', b.customLogo.showLink && (a += "</a>"), a += " </div></section>");
            b.fullscreenButton && (a += ' <section class="tiny-fullscreen-cell rounded-box"><button class="fullscreen" tabindex="30" title="Enter full screen" data-title-fullscreen="Enter full screen" data-title-unfullscreen="Exit full screen" aria-label="Fullscreen"><div class="fullscreen-icon">',
            a += this.render("icon_fullscreen") || "", a += "</div></button></section>");
            b.ccButton && (a += ' <section class="tiny-cc-cell rounded-box"><button class="toggle cc off" tabindex="20" title="Choose captions"> ', a += this.render("icon_cc") || "", a += " </button></section>");
            return a += ' <div class="mobile-timecode" role="presentation" aria-hidden="true">' + b.duration + "</div>"
        };
        c.templates.controls_trailer = function(b) {
            var a;
            a = '<button tabindex="20" class="play trailer rounded-box" title="Play Trailer" aria-label="Play Trailer"><div><span class="play-icon">' +
            (this.render("icon_play") || "");
            a += "</span><p>Watch Trailer</p></div></button>";
            b.vimeoLogo.show && (a += ' <div class="logo"> ', b.vimeoLogo.showLink && (a += ' <a href="' + b.vimeoLogo.url + '"', b.targetBlank && (a += ' target="_blank"'), a += ' tabindex="30" title="Watch on vimeo.com" aria-label="Watch on vimeo.com" data-clip-link> '), a += this.render("logo") || "", b.vimeoLogo.showLink && (a += " </a> "), a += " </div>");
            a += "";
            b.customLogo && (a += ' <section class="custom-logo-cell', b.customLogo.sticky && (a += " sticky"), a += '"><div class="custom-logo" style="width:' +
            b.customLogo.width + "px;height:" + b.customLogo.height + 'px"> ', b.customLogo.showLink && (a += '<a href="' + b.customLogo.url + '" target="_blank" tabindex="30">'), a += ' <img src="' + b.customLogo.img + '" alt=""> ', b.customLogo.showLink && (a += "</a>"), a += " </div></section>");
            return a + ""
        };
        c.templates.error = function(b) {
            var a = '<div class="window-wrapper error"><h1>' + b.title + "</h1> ";
            b.message && (a += " <p>" + b.message + "</p> ");
            return a + "</div>"
        };
        c.templates.hd_not_allowed = function(b) {
            return '<div class="window-wrapper no-hd"><h1>' +
            b.title + '</h1><p class="subtitle">' + b.subtitle + '</p><a href="' + b.url + '" target="_blank" role="button" data-clip-link>' + b.button + "</button></div>"
        };
        c.templates.hd_notification = function(b) {
            return '<div class="hd-notification"><div class="hd-stroke"> ' + b.stroke + ' </div><div class="hd-fill-wrapper"><div class="hd-fill"> ' + b.fill + " </div></div></div>"
        };
        c.templates.help = function(b) {
            var a = '<div class="window-wrapper help"><h1>Keyboard Shortcuts</h1><dl><div class="volume-up secondary"><dt class="arrow">\u2191</dt><dd>Volume up</dd></div><div class="volume-down secondary"><dt class="arrow">\u2193</dt><dd>Volume down</dd></div><div class="scrub-forward secondary"><dt class="arrow">\u2192</dt><dd>Scrub forward</dd></div><div class="scrub-backwards secondary"><dt class="arrow">\u2190</dt><dd>Scrub backwards</dd></div><div class="like"><dt>L</dt><dd>Like</dd></div><div class="share"><dt>S</dt><dd>Share</dd></div><div class="watch-later"><dt>W</dt><dd>Watch Later</dd></div><div><dt>C</dt><dd>Toggle Captions</dd></div><div class="toggle-hd"><dt>H</dt><dd>Toggle HD</dd></div><div class="fullscreen"><dt>F</dt><dd>Fullscreen</dd></div> ';
            b.onSite || (a += '<div class="view-on-vimeo"><dt>V</dt><dd>View on Vimeo</dd></div>');
            return a + ' </dl><a href="http://vimeo.com" class="off-site" role="button">View on Vimeo.com</a></div>'
        };
        c.templates.icon_airplay = function(b) {
            return '<svg class="airplay-icon" viewBox="0 0 44 36"><defs><clipPath id="triangle"><polygon points="-2,-2 -2,36 2,36 22,15 42,36 46,36 46,-2"/></clipPath></defs><rect class="stroke" stroke-width="5" width="44" height="26" x="0" y="2" clip-path="url(#triangle)"/><polygon class="fill" points="7,36 22,18 37,36"/></svg>'
        };
        c.templates.icon_broken_heart = function(b) {
            return '<svg class="unlike-icon" viewBox="0 0 110 81" preserveAspectRatio="xMidYMid"><path class="fill" d="M82.496 1c-14.594 0-23.198 10.043-25.948 14.48l-6.77 10.727 13.661 8.543-13.661 12.535 5.695 15.348-9.686-15.348 11.389-11.975-11.969-7.402s4.22-14.27 4.621-15.521c.782-2.438.782-2.438-.813-3.289-5.516-2.944-12.608-8.098-21.509-8.098-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.753-24.523 9.684-5.034 22.247-14.797 22.247-27.592 0-12.848-11.208-27.885-27.504-27.885z"/></svg>'
        };
        c.templates.icon_cc = function(b) {
            return '<svg viewBox="0 0 20 14"><path class="fill" fill-rule="evenodd" clip-rule="evenodd" d="M17 0h-14c-1.657 0-3 1.343-3 3v8c0 1.656 1.343 3 3 3h14c1.657 0 3-1.344 3-3v-8c0-1.657-1.343-3-3-3zm-7.271 8.282c-.145.923-.516 1.686-1.105 2.268-.597.591-1.369.89-2.294.89-1.138 0-2.049-.402-2.706-1.195-.647-.786-.975-1.866-.975-3.215 0-1.458.372-2.603 1.105-3.403.65-.708 1.487-1.067 2.487-1.067 1.33 0 2.321.482 2.947 1.435.34.53.526 1.072.553 1.611l.013.236h-1.984l-.044-.169c-.092-.355-.207-.622-.343-.793-.239-.298-.591-.443-1.076-.443-.483 0-.856.209-1.14.641-.298.455-.449 1.12-.449 1.977 0 .851.156 1.49.466 1.898.298.395.666.588 1.122.588.469 0 .814-.16 1.058-.491.138-.183.255-.472.351-.856l.042-.17h2.013l-.041.258zm7.582 0c-.145.923-.516 1.686-1.104 2.268-.598.591-1.369.89-2.294.89-1.139 0-2.049-.402-2.707-1.195-.646-.785-.975-1.865-.975-3.214 0-1.458.372-2.603 1.106-3.403.649-.708 1.485-1.067 2.486-1.067 1.33 0 2.32.482 2.946 1.435.34.53.526 1.072.554 1.611l.012.236h-1.9829999999999999l-.043-.169c-.092-.355-.208-.623-.344-.793-.238-.298-.591-.443-1.076-.443-.483 0-.856.209-1.139.641-.299.455-.45 1.12-.45 1.977 0 .851.157 1.49.467 1.898.299.395.666.588 1.121.588.469 0 .814-.16 1.058-.491.138-.183.256-.472.352-.856l.042-.17h2.012l-.041.257z"/></svg>'
        };
        c.templates.icon_clock = function(b) {
            return '<svg class="watch-later-icon" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid"><polyline class="fill hour-hand" points="9.64,4.68 10.56,4.68 11.28,11.21 8.93,11.21 9.64,4.68" /><polyline class="fill minute-hand" points="14.19,13.65 13.7,14.14 8.58,10.4 10.44,8.5 14.19,13.65" /><circle class="stroke" cx="10" cy="10" r="8" stroke-width="2" /></svg>'
        };
        c.templates.icon_fullscreen = function(b) {
            return '<svg viewBox="0 0 12 12" preserveAspectRatio="xMidYMid"><polyline class="fill" points="6,6 5.9,2 4.9,3 2.9,1 1,2.9 3,4.9 2,5.9" transform="translate(6,6)" /><polyline class="fill" points="6,6 5.9,2 4.9,3 2.9,1 1,2.9 3,4.9 2,5.9" transform="translate(6,6) rotate(90)" /><polyline class="fill" points="6,6 5.9,2 4.9,3 2.9,1 1,2.9 3,4.9 2,5.9" transform="translate(6,6) rotate(180)" /><polyline class="fill" points="6,6 5.9,2 4.9,3 2.9,1 1,2.9 3,4.9 2,5.9" transform="translate(6,6) rotate(270)" /></svg>'
        };
        c.templates.icon_hd = function(b) {
            var a = '<svg viewBox="', a = b.notification ? a + "-1 -1 104.717 49.035": a + "0 0 102.717 47.035", a = a + '" preserveAspectRatio="xMidYMid"><path class="', a = b.stroke ? a + "stroke": a + "fill", a = a + '" d="M100.014 6.758c-1.352-2.162-3.244-3.781-5.676-5.134-2.434-1.083-5.947-1.624-10.274-1.624h-21.625l-7.297 47.035h21.895c2.434 0 5.676-.274 8.92-1.352 2.434-.542 4.596-1.627 7.03-3.785 2.161-1.621 4.324-4.055 5.675-7.028 1.621-2.701 2.973-6.757 3.786-11.623.269-3.244.269-6.487.269-9.19-.54-2.704-1.352-5.138-2.703-7.299zm-12.433 16.76c-.541 3.783-1.352 6.485-2.165 8.109-1.08 1.893-2.162 2.703-3.782 3.514-1.083.541-3.515 1.082-6.217 1.082h-3.517l3.517-25.41h3.782c3.514 0 6.217.811 7.568 2.703 1.083 1.625 1.352 5.135.814 10.002z"/><path class="',
            a = b.stroke ? a + "stroke": a + "fill";
            return a + '" d="M37.572,0L35.14,16.491H19.463L21.895,0H7.027L0,47.035h14.866l2.703-18.922h15.677l-2.971,18.922h14.866L52.439,0H37.572z"/></svg>'
        };
        c.templates.icon_heart = function(b) {
            return '<svg class="like-icon" viewBox="0 0 110 81" preserveAspectRatio="xMidYMid"><path class="fill" d="M82.496 1c-14.698 0-25.969 11.785-27.496 13.457-1.526-1.672-12.798-13.457-27.494-13.457-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.755-24.523 9.684-5.034 22.245-14.797 22.245-27.592 0-12.848-11.206-27.885-27.504-27.885z"/></svg>'
        };
        c.templates.icon_lock = function(b) {
            return '<svg viewBox="0 0 46 76" preserveAspectRatio="xMidYMid"><path class="fill bolt" d="M5,42v-15C8,5 39,5 42,27v30h-7v-30C32,14 15,14 12,27v15z"/><rect class="fill" x="0" y="41" height="35" width="46" rx="4" ry="4"/></svg>'
        };
        c.templates.icon_pause = function(b) {
            return '<svg viewBox="0 0 20 20" preserveAspectRatio="xMidYMid"><rect class="fill" width="6" height="20" x="0" y="0" /><rect class="fill" width="6" height="20" x="12" y="0" /></svg>'
        };
        c.templates.icon_play =
        function(b) {
            return '<svg viewBox="0 0 20 20" preserveAspectRatio="xMidYMid"><polygon class="fill" points="1,0 20,10 1,20" /></svg>'
        };
        c.templates.icon_scaling = function(b) {
            return '<svg viewBox="0 0 14 12" preserveAspectRatio="xMidYMid"><rect class="fill" y="6" width="8" height="6"/><polygon class="fill stroked" points="1,0 1,4 3,4 3,2 12,2 12,8 10,8 10,10 14,10 14,0"/><polygon class="fill filled" points="1,0 1,4 10,4 10,10 14,10 14,0"/></svg>'
        };
        c.templates.icon_share = function(b) {
            return '<svg class="share-icon" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid"><polygon class="fill" points="20,0 0,12 5,15 17,4 7,16 7,19 9,17 14,20"/></svg>'
        };
        c.templates.icon_unfullscreen = function(b) {
            return '<svg viewBox="0 0 12 12" preserveAspectRatio="xMidYMid"><polyline class="fill" points="-1,-1 -1.1,-5 -2.1,-4 -4.1,-6 -6,-4.1 -4,-2.1 -5,-1.1" transform="translate(6,6) "/><polyline class="fill" points="-1,-1 -1.1,-5 -2.1,-4 -4.1,-6 -6,-4.1 -4,-2.1 -5,-1.1" transform="translate(6,6) rotate(90)" /><polyline class="fill" points="-1,-1 -1.1,-5 -2.1,-4 -4.1,-6 -6,-4.1 -4,-2.1 -5,-1.1" transform="translate(6,6) rotate(180)" /><polyline class="fill" points="-1,-1 -1.1,-5 -2.1,-4 -4.1,-6 -6,-4.1 -4,-2.1 -5,-1.1" transform="translate(6,6) rotate(270)" /></svg>'
        };
        c.templates.icon_vod = function(b) {
            return '<svg class="vod-icon" viewBox="0 0 21 23"><path class="fill" d="M19.602,4.716l-7.665-4.385C11.169-0.108,9.91-0.111,9.139,0.327L1.4,4.721C0.63,5.158,0,6.234,0,7.112v8.776c0,0.878,0.63,1.955,1.398,2.393l0.526,0.3l7.176,4.09c0.77,0.438,2.028,0.438,2.798,0l7.702-4.39c0.77-0.438,1.4-1.516,1.4-2.393V7.112C21,6.234,20.37,5.156,19.602,4.716z M7.336,15.761L7.337,7.24l8.008,4.26L7.336,15.761z"/></svg>'
        };
        c.templates.logo = function(b) {
            return '<svg viewBox="0 0 140 40" preserveAspectRatio="xMidYMid" role="img" aria-label="Vimeo"><title>Vimeo</title><g><path class="fill logo-v" d="M31.277 18.832c-.14 3.052-2.27 7.229-6.39 12.531-4.259 5.536-7.863 8.306-10.811 8.306-1.825 0-3.371-1.687-4.633-5.059l-2.529-9.275c-.938-3.372-1.943-5.06-3.019-5.06-.234 0-1.054.494-2.458 1.477l-1.474-1.901c1.546-1.358 3.071-2.717 4.572-4.078 2.062-1.783 3.609-2.72 4.642-2.814 2.438-.234 3.938 1.433 4.502 5.001.608 3.851 1.03 6.246 1.266 7.182.704 3.195 1.476 4.791 2.321 4.791.657 0 1.641-1.037 2.954-3.108 1.312-2.072 2.015-3.649 2.109-4.732.188-1.789-.516-2.686-2.109-2.686-.75 0-1.522.173-2.318.514 1.54-5.044 4.481-7.495 8.823-7.355 3.22.095 4.737 2.184 4.552 6.266z"/><path class="fill logo-i" d="M50.613 28.713c-1.313 2.484-3.119 4.733-5.417 6.748-3.143 2.718-6.285 4.076-9.425 4.076-1.456 0-2.57-.469-3.343-1.406-.773-.938-1.137-2.153-1.09-3.653.045-1.548.526-3.938 1.441-7.173.914-3.232 1.373-4.967 1.373-5.201 0-1.218-.423-1.828-1.266-1.828-.282 0-1.079.494-2.393 1.477l-1.618-1.901c1.501-1.358 3.001-2.717 4.502-4.078 2.017-1.783 3.518-2.72 4.504-2.814 1.546-.14 2.684.314 3.411 1.367.726 1.052.996 2.417.81 4.098-.61 2.852-1.268 6.472-1.972 10.864-.046 2.01.681 3.014 2.182 3.014.656 0 1.827-.693 3.518-2.083 1.406-1.156 2.555-2.243 3.447-3.262l1.336 1.755zm-6.12-25.016c-.047 1.168-.633 2.288-1.76 3.361-1.266 1.212-2.767 1.82-4.501 1.82-2.672 0-3.963-1.166-3.869-3.499.045-1.213.76-2.381 2.144-3.501 1.384-1.119 2.919-1.68 4.609-1.68.984 0 1.805.387 2.462 1.155.656.772.961 1.553.915 2.344z"/><path class="fill logo-m" d="M94.543 28.713c-1.314 2.484-3.117 4.733-5.416 6.748-3.145 2.718-6.285 4.076-9.426 4.076-3.051 0-4.527-1.687-4.432-5.06.045-1.501.338-3.306.877-5.415.539-2.108.832-3.748.879-4.921.049-1.779-.492-2.673-1.623-2.673-1.223 0-2.682 1.456-4.375 4.362-1.788 3.05-2.754 6.003-2.894 8.861-.095 2.02.103 3.568.592 4.645-3.272.096-5.565-.444-6.873-1.617-1.171-1.032-1.708-2.742-1.614-5.135.045-1.501.276-3.001.69-4.502.414-1.5.644-2.837.69-4.011.095-1.734-.54-2.604-1.9-2.604-1.177 0-2.444 1.339-3.806 4.011-1.361 2.673-2.113 5.465-2.253 8.371-.094 2.627.074 4.456.503 5.486-3.219.096-5.505-.582-6.857-2.035-1.122-1.214-1.634-3.06-1.539-5.54.044-1.214.258-2.911.645-5.084.386-2.175.603-3.87.647-5.087.093-.841-.119-1.263-.633-1.263-.281 0-1.079.475-2.393 1.424l-1.687-1.901c.234-.184 1.71-1.545 4.432-4.078 1.969-1.828 3.306-2.766 4.009-2.812 1.219-.095 2.204.409 2.954 1.511s1.126 2.38 1.126 3.834c0 .469-.047.915-.14 1.336.703-1.077 1.523-2.017 2.463-2.814 2.156-1.874 4.572-2.931 7.245-3.166 2.298-.187 3.938.352 4.925 1.617.795 1.033 1.17 2.511 1.125 4.433.329-.28.681-.586 1.056-.915 1.078-1.267 2.133-2.273 3.164-3.023 1.736-1.267 3.541-1.97 5.418-2.112 2.25-.187 3.867.35 4.852 1.611.844 1.028 1.219 2.5 1.127 4.415-.047 1.309-.363 3.213-.949 5.712-.588 2.501-.879 3.936-.879 4.31-.049.982.047 1.659.279 2.034.236.373.797.559 1.689.559.656 0 1.826-.693 3.518-2.083 1.406-1.156 2.555-2.243 3.447-3.262l1.337 1.757z"/><path class="fill logo-e" d="M120.922 28.642c-1.361 2.249-4.033 4.495-8.02 6.743-4.971 2.856-10.012 4.284-15.125 4.284-3.797 0-6.52-1.267-8.16-3.797-1.172-1.735-1.734-3.797-1.688-6.189.045-3.797 1.736-7.407 5.064-10.832 3.658-3.75 7.973-5.627 12.945-5.627 4.596 0 7.033 1.873 7.314 5.615.188 2.384-1.125 4.842-3.938 7.368-3.004 2.76-6.781 4.515-11.328 5.263.842 1.169 2.109 1.752 3.799 1.752 3.375 0 7.059-.855 11.045-2.574 2.859-1.207 5.111-2.461 6.754-3.76l1.338 1.754zm-15.969-7.345c.045-1.259-.469-1.89-1.547-1.89-1.406 0-2.83.969-4.283 2.906-1.451 1.936-2.201 3.789-2.248 5.562-.025 0-.025.305 0 .911 2.295-.839 4.287-2.122 5.971-3.849 1.357-1.491 2.06-2.707 2.107-3.64z"/><path class="fill logo-o" d="M140.018 23.926c-.189 4.31-1.781 8.031-4.783 11.169-3.002 3.137-6.73 4.706-11.186 4.706-3.705 0-6.52-1.195-8.441-3.585-1.404-1.777-2.182-4.001-2.32-6.668-.236-4.029 1.217-7.729 4.361-11.101 3.377-3.746 7.619-5.618 12.732-5.618 3.281 0 5.766 1.102 7.457 3.301 1.594 2.015 2.32 4.614 2.18 7.796zm-7.95-.264c.047-1.269-.129-2.434-.527-3.49-.4-1.057-.975-1.587-1.725-1.587-2.391 0-4.361 1.293-5.906 3.877-1.316 2.115-2.02 4.371-2.111 6.766-.049 1.176.164 2.21.633 3.104.514 1.032 1.242 1.549 2.182 1.549 2.109 0 3.914-1.244 5.416-3.735 1.267-2.068 1.945-4.23 2.038-6.484z"/></g></svg>'
        };
        c.templates.outer = function(b) {
            var a = '<div class="video-wrapper"><div class="video"><div class="flideo"></div></div></div><div class="target"></div><div class="captions with-controls hidden" hidden aria-live="assertive"><span></span></div><div class="outro-wrapper hidden" hidden><div class="outro" role="dialog" aria-live="assertive"></div></div><div class="controls-wrapper"><div class="title" role="contentinfo"></div><div class="sidedock';
            b.showSidedock || (a += " hidden");
            a += '" role="toolbar"';
            b.showSidedock ||
            (a += " hidden");
            return a + '></div><div class="controls"></div></div><div class="overlay-wrapper hidden" hidden><div class="overlay-cell"><div class="overlay" role="dialog" aria-live="assertive"></div><div class="overlay-icon-wrapper hidden"><div class="overlay-icon"></div></div><div class="overlay-logo logo"></div></div><nav><button tabindex="100" class="back cloaked" aria-label="Back">&#xe605;</a><button tabindex="101" class="close" aria-label="Close overlay">&#xe602;</button></nav></div><div class="notification-wrapper hidden" hidden><div class="notification-cell"><div class="notification" role="dialog" aria-live="assertive"></div></div></div>'
        };
        c.templates.outro_image = function(b) {
            var a = "<div> ";
            b.url && (a += '<a href="' + b.url + '" target="_blank">');
            a += '<img src="' + b.svg_url + '" class="outro-image">';
            b.url && (a += "</a>");
            return a + "</div>"
        };
        c.templates.outro_link = function(b) {
            return '<h1><a href="' + b.url + '" target="_blank" tabindex="100">' + (b.text ? b.text : b.url) + "</a></h1>"
        };
        c.templates.outro_text = function(b) {
            return '<div class="text-wrapper"><div class="text">' + b.text + "</div></div>"
        };
        c.templates.outro_videos = function(b) {
            for (var a = "", c = 0, e = b.contexts.length; c <
            e; c++) {
                var a = a + "", n = b.contexts[c], a = a + '<div class="video-section';
                n.promoted && (a += " promoted");
                for (var a = a + ('" data-videos="' + n.videos.length + '"><div><h1>' + n.context + '</h1><ul class="videos"> '), l = 0, t = n.videos.length; l < t; l++)
                    a += ' <li><a href="' + n.videos[l].url + '"', b.target && (a += ' target="_blank"'), a += " title=\"'" + n.videos[l].title + "'", n.videos[l].owner.id !== b.owner && (a += " from " + n.videos[l].owner.name + ""), a += '" tabindex="1" data-video-id="' + n.videos[l].id + '"><div class="img-wrapper"><img src="' + n.videos[l].thumbnail +
                    '" alt="" width="295" height="166"></div><div class="header-wrapper"><header><h1>' + n.videos[l].title + "</h1> ", n.videos[l].owner.id !== b.owner && (a += " <h2><span>from</span>&nbsp;" + n.videos[l].owner.name + "</h2> "), a += " </header></div></a> ";
                a += " </ul></div></div>"
            }
            return a + ""
        };
        c.templates.outro_vod = function(b) {
            var a = '<div class="vod-wrapper"><h1 class="vod-header"><a href="' + b.url + '" target="_blank">' + b.title + "</a></h1> ";
            if (b.purchased)
                a += ' <a class="vod-watch-button" role="button" href="' + b.url + '" target="_blank">',
                a = b.preorder ? a + ("Watch on " + b.preorder + "") : a + "Watch Now", a += "</a> ";
            else {
                for (var a = a + ' <ul class="vod"> ', c = 0, e = b.buttons.length; c < e; c++)
                    a += ' <li><a class="vod-button ' + b.buttons[c].type + '" role="button" href="' + b.url + "#buy=" + b.buttons[c].product_id + '" target="_blank" data-product-id="' + b.buttons[c].product_id + '"><span class="icon"> ', a = "buy" === b.buttons[c].type ? a + "&#xe603;" : a + "&#xe604;", a += ' </span><span class="price"> ' + b.buttons[c].price + ' <span class="type">' + b.buttons[c].type.substr(0, 1).toUpperCase() +
                    b.buttons[c].type.substr(1) + "</span></span></a></li> ";
                a += " </ul> ";
                b.preorder && (a += " <p>Preorder now. Watch on " + b.preorder + ".</p> ")
            }
            return a + "</div>"
        };
        c.templates.password = function(b) {
            return '<div class="window-wrapper password form"><h1>' + b.title + '</h1><p class="subtitle">' + b.subtitle + '</p><form action="' + b.action + '" method="post" novalidate><div class="validation-bubble hidden"><div class="validation-bubble-arrow-clipper"><div class="validation-bubble-arrow"></div></div><div class="validation-bubble-message"></div></div><input type="password" name="password" placeholder="Password" required aria-required="true" tabindex="2" aria-label="Password"><input type="submit" value="Watch Video" tabindex="3"></form></div>'
        };
        c.templates.private_locked = function(b) {
            return '<div class="window-wrapper login"><h1>' + b.title + '</h1><p class="subtitle">' + b.subtitle + '</p><a href="' + b.action + '" class="popup" target="_blank" role="button" aria-label="Log in (opens in a new window)">Log in</a></div>'
        };
        c.templates.private_unlocked = function(b) {
            return '<div class="window-wrapper form unlocked"><h1>Private Video</h1><p class="subtitle">You are logged in and have permission to watch (congrats).</p><button>Watch Video</button></div>'
        };
        c.templates.share =
        function(b) {
            var a = '<div class="share-wrapper"><section class="share-screen' + (b.embedOnly ? " cloaked" : "") + '"><h1>Share</h1><ul class="buttons"><li><a tabindex="1" href="' + b.playerShareUrl + '/facebook" target="_blank" class="facebook" title="Share on Facebook" role="button" aria-label="Share on Facebook">&#xe606;</a><li><a tabindex="1" href="' + b.playerShareUrl + '/twitter" target="_blank" class="twitter" title="Share on Twitter" role="button" aria-label="Share on Twitter">&#xe607;</a> ';
            b.tumblr && (a += ' <li><a tabindex="1" href="' +
            b.playerShareUrl + '/tumblr" target="_blank" class="tumblr" title="Share on Tumblr" role="button" aria-label="Share on Tumblr">&#xe007;</a> ');
            b.url && (a = a + ' <li><a tabindex="1" href="mailto:?subject=' + (encodeURIComponent("Check out \u201c" + b.title + "\u201d by " + b.owner + " on Vimeo") || ""), a += "&amp;body=", a += encodeURIComponent("Check out \u201c" + b.title + "\u201d by " + b.owner + " on Vimeo.\n\nThe video is available for your viewing pleasure at " + b.shareUrl + "\n\nIf you like this video, make sure you share it, too!\n\nVimeo is filled with lots of amazing videos. See more at http://vimeo.com.") ||
            "", a += '" class="email" title="Share via E-mail" role="button" aria-label="Share via E-Mail">&#xe600;</a> ');
            a += " </ul> ";
            b.embed && (a += ' <ul class="buttons"><li><a tabindex="1" href="' + b.url + '#share" target="_blank" class="embed" title="Get embed code" role="button" aria-label="Get embed code">&#xe601;</a></li></ul> ');
            b.url && (a += ' <p class="footnote share"><a class="clip_url" tabindex="1" href="' + b.url + '" target="_blank">' + b.shareUrl + "</a></p> ");
            a += " </section> ";
            b.embed && (a += ' <section class="embed-screen' +
            (b.embedOnly ? "" : " cloaked") + '"><div class="embed-wrapper"><h1>Embed</h1><p class="subtitle">Add this video to your site with the embed code below.</p><div class="embed-code form"><div><input type="text" tabindex="1" name="embed_code" title="Embed code" value="' + b.embedCode + '" spellcheck="false" aria-readonly="true"', b.readOnly && (a += " readonly"), a += "></div> ", b.copyButton && (a += ' <button class="embed-copy" tabindex="1" id="copy-button" data-clipboard-text=\'' + b.embedCode + "'>Copy</button> "), a += " </div> ",
            b.customizeEmbed && (a += ' <p class="footnote"><a tabindex="1" href="' + b.url + '#embed" target="_blank">Customize this embed</a> on Vimeo</p> '), a += " </div></section> ");
            return a += "</div>"
        };
        c.templates.sidedock = function(b) {
            var a = "";
            b.vodButton && (a += ' <div class="box" data-vod-preorder="' + b.vodPreorder + '" data-vod-expiring="' + b.expiring + '" data-vod-purchased="' + b.purchased + '"><label class="rounded-box vod-label visible', b.expiring && (a += " expiring"), a += '" role="presentation"><span>' + b.vodLabel + '</span></label><button tabindex="50" class="vod-button rounded-box',
            b.purchased && (a += " on"), a = a + '"> ' + (this.render("icon_vod") || ""), a += " </button></div>");
            b.likeButton && (a += ' <div class="box"><label class="rounded-box hidden like-label" role="presentation"><span>', a = b.liked ? a + "Unlike" : a + "Like", a += '</span></label><button tabindex="50" class="like-button rounded-box', b.liked && (a += " on"), a += '" aria-label="', a = b.liked ? a + "Unlike" : a + "Like", b.loggedIn || (a += " (opens in a new window)"), a += '" data-label-add="Like" data-label-add-logged-out="Like (opens in a new window)" data-label-remove="Unlike"> ',
            a += this.render("icon_heart") || "", a += " </button></div>");
            b.watchLaterButton && (a += ' <div class="box"><label class="rounded-box hidden watch-later-label" role="presentation"><span>', a = b.addedToWatchLater ? a + "Remove from" : a + "Add to", a += ' Watch Later</span></label><button tabindex="50" class="watch-later-button rounded-box', b.addedToWatchLater && (a += " on"), a += '" aria-label="', a = b.addedToWatchLater ? a + "Remove from" : a + "Add to", a += " Watch Later", b.loggedIn || (a += " (opens in a new window)"), a += '" data-label-add="Add to Watch Later" data-label-add-logged-out="Add to Watch Later (opens in a new window)" data-label-remove="Remove from Watch Later"> ',
            a += this.render("icon_clock") || "", a += " </button></div>");
            b.shareButton && (a += ' <div class="box"><label class="rounded-box hidden share-label" role="presentation"><span>' + b.shareButtonLabel + '</span></label><button tabindex="50" class="share-button rounded-box" aria-label="' + b.shareButtonLabel + '"> ', a += this.render("icon_share") || "", a += " </button></div>");
            return a += ""
        };
        c.templates.title = function(b) {
            var a = "<header> ";
            b.badge && (a += ' <div class="badge"><a tabindex="10" href="' + b.badge.link + '"', b.targetBlank &&
            (a += ' target="_blank"'), a += '><img src="' + b.badge.img + '"', b.badge.offset && (a += ' style="margin-top:' + b.badge.offset.y + "px;margin-left:" + b.badge.offset.x + 'px"'), a += ' width="' + b.badge.width + '" height="' + b.badge.height + '" alt="' + b.badge.name + ' Badge"></a></div> ');
            b.showPortrait && (a += ' <div class="portrait" aria-hidden="true"> ', b.linkToOwner && (a += '<a tabindex="-1" href="' + b.ownerLink + '"', b.targetBlank && (a += ' target="_blank"'), a += ">"), a += ' <img src="' + b.portraitImg + '" alt="Portrait image for ' + b.owner +
            '" width="60" height="60"> ', b.linkToOwner && (a += "</a>"), a += " </div> ");
            a += " <div> ";
            b.showTitle && (a += " <h1> ", b.showTitleLink && (a += '<a tabindex="10" href="' + b.titleLink + '"', b.targetBlank && (a += ' target="_blank"'), a += " data-clip-link>"), a += " " + b.title + " ", b.showTitleLink && (a += "</a>"), a += " </h1> ");
            b.showByline && (a += " <h2> from ", b.linkToOwner ? (a += '<a tabindex="10" href="' + b.ownerLink + '"', b.targetBlank && (a += ' target="_blank"'), a += ">") : a += '<span class="user">', a += "" + b.owner + "", a = b.linkToOwner ? a + "</a>" :
            a + "</span>", b.bylineBadge && (a += "&nbsp; ", b.bylineBadge.link && (a += '<a tabindex="-1" href="' + b.bylineBadge.link + '"', b.targetBlank && (a += ' target="_blank"'), a += ">"), a += ' <span class="byline-badge ' + b.bylineBadge.cssClass + '">' + b.bylineBadge.cssClass + "</span> ", b.bylineBadge.link && (a += "</a>")), a += " </h2> ");
            return a + " </div></header>"
        };
        "undefined" !== typeof module && module.exports ? module.exports = c : q.Aftershave = c
    })();
    ka = 1;
    Aa = 2;
    ja = 3;
    Ba = 4;
    gb = 9;
    bb = {
        will: "willLikeVideo",
        did: "didLikeVideo"
    };
    cb = {
        will: "willUnlikeVideo",
        did: "didUnlikeVideo"
    };
    db = {
        will: "willAddToWatchLater",
        did: "didAddToWatchLater"
    };
    eb = {
        will: "willRemoveFromWatchLater",
        did: "didRemoveFromWatchLater"
    };
    fb = {
        will: "willOpenVodPurchaseForm",
        did: "didOpenVodPurchaseForm"
    };
    Pa = {
        will: "willOpenShareOverlay",
        did: "didOpenShareOverlay"
    };
    Qa = {
        will: "willOpenLoginForm",
        did: "didOpenLoginForm"
    };
    Ja = 1;
    za = 2;
    ea = 3;
    La = 4;
    oa = 5;
    sa = 6;
    qa = 7;
    Ma = 9;
    Ka = 10;
    aa = 11;
    Na = 12;
    Va = 14;
    Ya = 15;
    Za = 16;
    Sa = 17;
    Ta = 18;
    Oa = 19;
    var c = {
        error: 49,
        playInitiated: 50,
        paused: 51,
        played: 52,
        loadProgress: 53,
        playProgress: 54,
        seeked: 55,
        ended: 56,
        bufferStarted: 57,
        bufferEnded: 58,
        volumeChanged: 59,
        qualityChanged: 60,
        targetTimeReached: 61,
        cueChanged: 62,
        fullscreenButtonPressed: 100,
        pauseButtonPressed: 101,
        playButtonPressed: 102,
        hdButtonPressed: 103,
        ccButtonPressed: 104,
        scrubbingStarted: 105,
        scrubbingEnded: 106,
        volumeScrubbingStarted: 107,
        volumeScrubbingEnded: 108,
        controlBarVisibilityChanged: 109,
        sidedockVisibilityChanged: 110,
        menuVisibilityChanged: 111,
        captionsChanged: 112,
        willEnterFullscreen: 150,
        didEnterFullscreen: 151,
        willExitFullscreen: 152,
        didExitFullscreen: 153,
        likeButtonPressed: 200,
        watchLaterButtonPressed: 201,
        shareButtonPressed: 202,
        embedButtonPressed: 203,
        scalingButtonPressed: 204,
        vodButtonPressed: 205,
        overlayOpened: 250,
        overlayClosed: 251,
        overlayCleared: 252,
        overlayCloseButtonPressed: 253,
        facebookButtonPressed: 254,
        twitterButtonPressed: 255,
        tumblrButtonPressed: 256,
        emailButtonPressed: 257,
        embedCodeCopied: 258,
        popupOpened: 259,
        mousedOut: 300,
        mousedOver: 301,
        mouseTimeout: 302,
        liked: 303,
        unliked: 304,
        addedToWatchLater: 305,
        removedFromWatchLater: 306,
        userLogIn: 307,
        userLoggedIn: 308,
        userLoggedOut: 309,
        loginFailure: 310,
        colorChanged: 311,
        configChanged: 312,
        passwordUnlocked: 313,
        privateUnlocked: 314,
        enteredTinyMode: 315,
        enteredMiniMode: 320,
        enteredNormalMode: 316,
        signatureExpired: 317,
        requestConfigReloaded: 318,
        embedSettingChanged: 319,
        outroDisplayed: 321,
        outroHidden: 322,
        outroVideoPressed: 323,
        becameActive: 324,
        becameInactive: 325,
        titleModuleReady: 350,
        sidedockModuleReady: 351,
        controlBarModuleReady: 352,
        videoModuleReady: 353,
        overlayModuleReady: 354,
        notificationModuleReady: 355,
        statsModuleReady: 356,
        apiModuleReady: 357,
        analyticsModuleReady: 358,
        ready: 359,
        notificationHidden: 400,
        airPlayAvailable: 500,
        airPlayNotAvailable: 501,
        airPlayActivated: 502,
        airPlayDeactivated: 503,
        airPlayButtonPressed: 504
    }, ib = function() {
        return function(e, b, a, d) {
            function g(a) {
                if (a && 0 < a.clientX && 0 < a.clientY)
                    try {
                        w.activeElement.blur()
                } catch (b) {}
            }
            function n(a) {
                a && (f.config = a, f.storageModule.reset(f.config), y.fire(aa, f.config.embed.color), y.fire(c.configChanged, f.config));
                f.videoModule || f.config.view === Ba || f.config.view === Aa ? R.style.backgroundImage =
                "none" : (r(f.config.video.thumbs), f.videoModule = new hb(f.config, y, ea))
            }
            function l() {
                switch (f.config.view) {
                case Ba:
                    0;
                    M = ["password"];
                    S=!0;
                    t();
                    break;
                case Aa:
                    0;
                    K=!0;
                    M = f.config.user.logged_in ? ["error", {
                        title: "Private Video",
                        message: "Sorry, you don&rsquo;t have permission to watch.",
                        modal: !0,
                        logo: !!f.config.embed.settings.branding,
                        icon: "lock"
                    }
                    ] : ["private-locked"];
                    S=!0;
                    t();
                    return;
                case ja:
                    0;
                    0;
                    n();
                    f.config.embed.autoplay || K || (M = ["private-unlocked"]);
                    t();
                    break;
                case gb:
                    R.classList.add("invisible"), y.fire(oa,
                    "content-rating"), y.once(c.overlayClosed, function() {
                        R.classList.remove("invisible")
                    })
                }
                K = null
            }
            function t() {
                S && fa && p && (M ? (M.unshift(oa), y.fire.apply(null, M), M = null, q.requestAnimationFrame(function() {
                    f.element.classList.remove("loading")
                })) : f.element.classList.remove("loading"))
            }
            function m(a, b) {
                0;
                var c = (new Date).getTime(), d = f.config && f.config.video.id, e = f.config && f.config.request.session, g = f.config && f.config.request.referrer, h = f.config && f.config.embed.on_site, A = f.config && f.config.embed.context, z = a;
                isNaN(a) || (z = (f.config ? "//" + f.config.player_url : "") + "/video/" + a + "/config" + q.location.search);
                var k = new XMLHttpRequest;
                k.open("GET", z, !0);
                k.withCredentials=!0;
                k.onload = function() {
                    f.config = JSON.parse(k.responseText);
                    ta = (new Date).getTime() + 1E3 * f.config.request.expires;
                    f.config.video.id === d && (f.config.request.session = e);
                    g && (f.config.request.referrer = g);
                    h && (f.config.embed.on_site = 1, f.config.embed.context = A);
                    var a = (new Date).getTime() - c;
                    q._gaq && q._gaq.push(["player._trackTiming", "Player", "Config Load",
                    a]);
                    0;
                    f.storageModule && f.storageModule.reset(f.config);
                    y.fire(aa, f.config.embed.color);
                    d && l();
                    f.config.embed.on_site || (w.title = f.config.view === ka || f.config.view === ja ? f.config.video.title + " from " + f.config.video.owner.name + " on Vimeo" : "Private Video on Vimeo");
                    b.call(k)
                };
                k.send()
            }
            function P(a) {
                0;
                var b = (new Date).getTime(), c = f.config && f.config.request.referrer, d = new XMLHttpRequest;
                d.open("GET", "//" + f.config.player_url + "/video/" + f.config.video.id + "/config/request?session=" + f.config.request.session + "&signature=" +
                f.config.request.signature + "&time=" + f.config.request.timestamp + "&expires=" + f.config.request.expires, !0);
                d.withCredentials=!0;
                d.onload = function() {
                    f.config.request = JSON.parse(d.responseText);
                    c && (f.config.request.referrer = c);
                    ta = (new Date).getTime() + 1E3 * f.config.request.expires;
                    0;
                    var e = (new Date).getTime() - b;
                    q._gaq && q._gaq.push(["player._trackTiming", "Player", "Config.Request Load", e]);
                    0;
                    a.call(d)
                };
                d.send()
            }
            function x(a, b) {
                f.element.classList.add("loading");
                p = S = ha=!1;
                m(a, function() {
                    0;
                    y.fire(aa, f.config.embed.color);
                    history && history.replaceState&&!f.config.embed.on_site && history.replaceState({
                        id: f.config.video.id
                    }, "", "/video/" + f.config.video.id);
                    y.fire(c.configChanged, f.config, !0);
                    y.fire(qa, !0);
                    p=!0;
                    z();
                    q.requestAnimationFrame(t);
                    b && b()
                })
            }
            function r(a) {
                if (f.element.clientWidth) {
                    var b = f.element.clientWidth * u.devicePixelRatio, c = a["640"];
                    900 <= b && a["960"] && (c = a["960"]);
                    1E3 <= b && a["1280"] && (c = a["1280"]);
                    if (a.base) {
                        var d = b;
                        0 !== d%320 && (d = 100 * Math.ceil(b / 100));
                        c = a.base + (f.config.request.flags.webp ? ".webp" : ".jpg");
                        c +=
                        "?mw=" + d;
                        1 < u.devicePixelRatio && (c += "&q=70")
                    }
                    R.setAttribute("data-thumb", c);
                    ha=!0;
                    if (f.config.embed.autoplay && "beginning" !== f.config.embed.outro)
                        h();
                    else {
                        var e = new Image;
                        e.src = c;
                        f.config.embed.autoplay ? h() : (e.onload = function() {
                            "none" !== R.style.backgroundImage && (R.style.backgroundImage = "url(" + c + ")");
                            var a = f.config.video.width / f.config.video.height, b = e.width / e.height;
                            (b <= 0.95 * a || b >= 1.05 * a) && R.classList.remove("cover");
                            h()
                        }, e.onerror = h, setTimeout(h, 2E3))
                    }
                }
            }
            function h() {
                S=!0;
                t()
            }
            function F() {
                var a = f.element.clientWidth,
                b = f.element.clientHeight, c = f.config.video.width / f.config.video.height, d = a - b * c, e = b - a / c, c = R.querySelector(".flideo");
                0 < d && 10 > d || 0 < e && 10 > e ? (0, a = Math.max(a / (a - d), b / (b - e)), R.classList.add("cover"), c.style.webkitTransform = "scale(" + a + ")", c.style.transform = "scale(" + a + ")") : (R.classList.remove("cover"), c.style.webkitTransform = "", c.style.transform = "")
            }
            function H(a, b, c) {
                if (d && d[a.will]&&!1 === d[a.will].apply(null, [f.config.video.id].concat(c)))
                    0;
                else if (b.apply(null, [f.config.video.id].concat(c)), d && d[a.did])
                    d[a.did]()
            }
            function E() {
                f.config.view === ka && f.config.embed.settings&&!f.config.embed.settings.playbar ? f.element.classList.add("no-playbar") : f.element.classList.remove("no-playbar");
                f.config.embed.settings.fullscreen ? f.element.classList.add("with-fullscreen") : f.element.classList.remove("with-fullscreen");
                f.config.embed.settings.custom_logo ? f.element.classList.add("with-custom-logo") : f.element.classList.remove("with-custom-logo")
            }
            function z() {
                f.config.video.thumbs && r(f.config.video.thumbs);
                y.on([c.playInitiated,
                c.playButtonPressed], function() {
                    R.style.backgroundImage = "none"
                });
                F();
                Gator(q).on("resize", F);
                y.on(c.didEnterFullscreen, function() {
                    "none" !== R.style.backgroundImage && r(f.config.video.thumbs)
                });
                Gator(q).on("resize", function() {
                    ha || r(f.config.video.thumbs)
                })
            }
            function G() {
                f.apiModule = new jb(f.config, y);
                Object.keys(f.apiModule).forEach(function(a) {
                    if ("function" === typeof f.apiModule[a])
                        Object.defineProperty(ia, a, {
                            enumerable: !0,
                            value: f.apiModule[a]
                        });
                    else {
                        var b = {
                            enumerable: !0,
                            get: f.apiModule[a].get
                        };
                        f.apiModule[a].set &&
                        (b.set = f.apiModule[a].set);
                        Object.defineProperty(ia, a, b)
                    }
                });
                f.colorModule = new kb(f.config, y, f.uuid, f.element.id, Z);
                f.overlayModule = new lb(f.config, y, T);
                f.statsModule = new mb(f.config, y);
                f.analyticsModule = new nb(f.config, y);
                f.controlsModule = new ob(f.config, y, f.element);
                f.titleModule = new pb(f.config, y, V);
                f.controlBarModule = new qb(f.config, y, N);
                f.sidedockModule = new rb(f.config, y, Y);
                f.notificationModule = new sb(f.config, y, ba);
                f.outroModule = new tb(f.config, y, na);
                f.popupModule = new ub(f.config, y);
                f.captionsModule =
                new vb(f.config, y, va, f.element);
                f.keyboardModule = new wb(f.config, y, f.element);
                Object.defineProperties(ia, {
                    pauseKeyboard: {
                        enumerable: !0,
                        value: f.keyboardModule.pause
                    },
                    unpauseKeyboard: {
                        enumerable: !0,
                        value: f.keyboardModule.unpause
                    }
                });
                f.config.view !== Ba && f.config.view !== Aa && (f.videoModule = new hb(f.config, y, ea));
                p=!0;
                t()
            }
            function B() {
                f.config.embed.fullscreen=!0;
                if (!BigScreen.enabled || u.browser.bb10)
                    f.element.classList.add("no-fullscreen-api-support"), BigScreen.videoEnabled(f.element) || (f.element.classList.add("no-fullscreen-support"),
                    f.config.embed.fullscreen=!1);
                var a=!1, b=!1;
                y.on(Za, function() {
                    BigScreen.enabled || BigScreen.videoEnabled(f.element) ? (y.fire(c.willEnterFullscreen), b=!1, BigScreen.request(f.element)) : y.fire(Oa, !0)
                });
                y.on(c.fullscreenButtonPressed, function() {
                    BigScreen.element ? (y.fire(c.willExitFullscreen), BigScreen.exit()) : (y.fire(c.willEnterFullscreen), b=!0, BigScreen.request(f.element))
                });
                var d = BigScreen.onenter, e = BigScreen.onexit;
                BigScreen.onenter = function(e) {
                    a || (f.element.contains(e) ? a || (a=!0, y.fire(c.didEnterFullscreen,
                    f.element === e, b)) : "function" === typeof d && d(e))
                };
                BigScreen.onexit = function() {
                    a ? a && (a=!1, y.fire(c.didExitFullscreen, b), b || y.fire(Oa, !1), b=!1) : "function" === typeof e && d()
                };
                Gator(f.element).on("click", "a", function(a) {
                    BigScreen.element === f.element && BigScreen.exit()
                });
                Gator(f.element).on("gestureend", function(a) {
                    1 < a.scale && y.fire(c.fullscreenButtonPressed)
                });
                if ("undefined" !== typeof MSGesture) {
                    var g = 1, h = new MSGesture;
                    h.target = f.element;
                    Gator(f.element).on("pointerdown", function(a) {
                        h.addPointer(a.pointerId)
                    }).on(["MSGestureChange"],
                    function(a) {
                        g*=a.scale
                    }).on(["MSGestureEnd"], function() {
                        (!a && 2 <= g || a && 1 > g) && y.fire(c.fullscreenButtonPressed);
                        g = 1
                    })
                }
            }
            function L() {
                y.on([c.scrubbingStarted, c.volumeScrubbingStarted], function() {
                    f.element.classList.add("scrubbing")
                });
                y.on([c.scrubbingEnded, c.volumeScrubbingEnded], function() {
                    f.element.classList.remove("scrubbing")
                })
            }
            function k() {
                function a(b) {
                    var d = f.config.video.url;
                    if (!(!d || b && b.metaKey))
                        if (0 < f.config._video.currentTime && f.config._video.currentTime < f.config.video.duration - 30&&!f.config._video.paused &&
                        (d += "#at=" + Math.floor(f.config._video.currentTime)), f.config.embed.on_site)
                            q.location = d;
                        else 
                            return q.open(d), g(b), y.fire(c.pauseButtonPressed), !1
                }
                Gator(f.element).on("click", "a[data-clip-link]", a);
                y.on(Ka, a)
            }
            function I(a, b) {
                y.fire(Na);
                if (null === ta)
                    U.push([a, b]);
                else {
                    var c = new XMLHttpRequest;
                    c.open(b, "//" + f.config.player_url + "/video/" + f.config.video.id + "/" + a + "?signature=" + f.config.request.signature + "&session=" + f.config.request.session + "&time=" + f.config.request.timestamp + "&expires=" + f.config.request.expires,
                    !0);
                    c.withCredentials=!0;
                    c.send()
                }
            }
            function J() {
                y.on(c.vodButtonPressed, function(a) {
                    if (f.config.user.purchased) {
                        if (!f.config.video.vod.is_feature && f.config.video.vod.feature_id)
                            return x(f.config.video.vod.feature_id, function() {
                                y.fire(c.playButtonPressed)
                            });
                        y.fire(c.playButtonPressed)
                    } else 
                        H(fb, function() {
                            y.fire(sa, "purchase", {
                                productId: a
                            })
                        }, a)
                })
            }
            function v() {
                y.on(c.likeButtonPressed, function() {
                    f.config.user.logged_in ? f.config.user.liked ? H(cb, function() {
                        I("like", "DELETE");
                        f.config.user.liked=!1;
                        y.fire(c.unliked)
                    }) :
                    H(bb, function() {
                        I("like", "PUT");
                        f.config.user.liked=!0;
                        y.fire(c.liked)
                    }) : H(Qa, function() {
                        y.fire(sa, "login-like")
                    }, "like")
                })
            }
            function A() {
                y.on(c.watchLaterButtonPressed, function() {
                    f.config.video.url && (f.config.user.logged_in ? f.config.user.watch_later ? H(eb, function() {
                        I("watch-later", "DELETE");
                        f.config.user.watch_later=!1;
                        y.fire(c.removedFromWatchLater)
                    }) : H(db, function() {
                        I("watch-later", "PUT");
                        f.config.user.watch_later=!0;
                        y.fire(c.addedToWatchLater)
                    }) : H(Qa, function() {
                        y.fire(sa, "login-watch-later")
                    },
                    "watch-later"))
                })
            }
            function C() {
                y.on(c.shareButtonPressed, function() {
                    var a = function() {
                        y.fire(oa, "share", f.config.embed.settings.share && f.config.embed.settings.share.embed_only)
                    };
                    BigScreen.element ? a() : H(Pa, a)
                });
                y.on(c.embedButtonPressed, function() {
                    f.config.embed.settings.share.embed_only && H(Pa, function() {
                        y.fire(oa, "share", !0)
                    })
                });
                y.on(c.overlayClosed, function() {
                    s.resetFocus(f.element)
                })
            }
            function D() {
                y.on(za, x);
                y.on(c.configChanged, function() {
                    E()
                });
                y.on(c.userLoggedOut, function() {
                    m(f.config.video.id,
                    function() {
                        y.fire(c.configChanged, f.config)
                    })
                });
                y.on(c.userLogIn, function(a) {
                    m(f.config.video.id, function() {
                        0;
                        y.fire(c.configChanged, f.config);
                        if (f.config.user.logged_in)
                            switch (y.fire(c.userLoggedIn, a), a) {
                            case "like":
                                f.config.user.liked && y.fire(c.liked);
                                break;
                            case "watch-later":
                                f.config.user.watch_later && y.fire(c.addedToWatchLater);
                                break;
                            case "private":
                                y.fire(c.privateUnlocked)
                            } else 
                                y.fire(c.loginFailure)
                    })
                })
            }
            function X() {
                function a() {
                    var c = b, e = q.getComputedStyle(f.element, ":after");
                    e && (b = e.getPropertyValue("content"),
                    c !== b && y.fire(d[b]))
                }
                var b = null, d = {
                    tiny: c.enteredTinyMode,
                    mini: c.enteredMiniMode,
                    normal: c.enteredNormalMode,
                    none: c.enteredNormalMode
                };
                a();
                Gator(q).on("resize", a)
            }
            function Q() {
                var a=!1;
                y.on(Na, function() {
                    ta && ta - 1E3 <= (new Date).getTime() && (y.fire(c.signatureExpired), ta = null)
                });
                y.on(c.signatureExpired, function() {
                    a || (a=!0, P(function() {
                        a=!1;
                        y.fire(c.requestConfigReloaded, f.config.request)
                    }))
                });
                y.on(c.requestConfigReloaded, function() {
                    if (0 < U.length)
                        for (var a = U.shift(); a;)
                            I.apply(null, a), a = U.shift()
                })
            }
            function O() {
                function a() {
                    if (0 ===
                    q.innerWidth)
                        0, setTimeout(a, 250);
                    else {
                        var b, c = 90 === Math.abs(q.orientation) ? screen.height: screen.width;
                        u.mobileAndroid&&!u.browser.chrome&&!u.browser.opera && 4 <= u.android && (c/=q.devicePixelRatio);
                        b = c / q.innerWidth;
                        c = Math.round(10 * Math.pow(b, - 1.2));
                        c = Math.max(c, 10) + "px";
                        b = Math.round(10 * Math.pow(b, - 0.7));
                        b = Math.max(b, 10) + "px";
                        N.style.fontSize = c;
                        Y.style.fontSize = b;
                        V.style.fontSize = b
                    }
                }
                y.on(c.didEnterFullscreen, function() {
                    N.style.fontSize = "";
                    Y.style.fontSize = "";
                    V.style.fontSize = ""
                }).on(c.didExitFullscreen,
                a);
                u.touch && f.element.classList.add("touch-support");
                Z && (f.element.classList.add("mobile"), a())
            }
            function Ca() {
                if (!f.config)
                    return m(b, Ca);
                ta = (new Date).getTime() + 1E3 * f.config.request.expires;
                0;
                f.config._video = {};
                if (Z || u.iPad || u.android)
                    f.config.embed.autoplay = 0;
                f.storageModule = new xb(f.config, y);
                var a = s.parseTime(w.location.hash);
                null !== a && (f.config.embed.time = s.limit(a, 0, f.config.video.duration), u.touch || (f.config.embed.autoplay = 1), - 1 < w.location.hash.indexOf("at=") && history && history.replaceState &&
                history.replaceState("", w.title, q.location.pathname));
                a = f.config.video.vod && "purchase_options"in f.config.video.vod && f.config.video.vod.purchase_options.length;
                f.element.innerHTML += Aftershave.render("outer", {
                    showSidedock: f.config.embed.settings.instant_sidedock || a
                });
                R = f.element.querySelector(".video");
                ea = f.element.querySelector(".video-wrapper");
                V = f.element.querySelector(".title");
                Y = f.element.querySelector(".sidedock");
                N = f.element.querySelector(".controls");
                T = f.element.querySelector(".overlay-wrapper");
                ba = f.element.querySelector(".notification-wrapper");
                na = f.element.querySelector(".outro-wrapper");
                va = f.element.querySelector(".captions");
                E();
                z();
                G();
                B();
                L();
                k();
                J();
                v();
                A();
                C();
                D();
                y.on([c.passwordUnlocked, c.privateUnlocked], n);
                X();
                Q();
                O();
                Gator(f.element).on("click", ["a[tabindex]", "button[tabindex]"], g);
                l();
                Object.preventExtensions && Object.preventExtensions(ia);
                for (y.fire(c.ready); wa.length;)
                    wa.shift().call(ia)
            }
            var f = this;
            f.element = e;
            f.uuid = Math.round(1E3 * Math.random() + (new Date).getTime());
            e.classList.add("player-" +
            f.uuid);
            e.id || (e.id = "player" + f.uuid);
            f.config = null;
            isNaN(b) && "string" !== typeof b && (f.config = b);
            d = d || null;
            var Z = u.mobileAndroid || u.iPhone || u.windowsPhone || u.browser.bb10, ta = null, U = [], y = Da.make(), ha=!1, S=!1, p=!1, M, K = null, R = null, ea = null, V = null, Y = null, N = null, T = null, ba = null, na = null, va = null, ia = {}, wa = [];
            Object.defineProperties(ia, {
                config: {
                    enumerable: !0,
                    get: function() {
                        return f.config
                    },
                    set: function(a) {
                        f.config = a;
                        y.fire(c.configChanged, f.config)
                    }
                },
                delegate: {
                    enumerable: !0,
                    set: function(a) {
                        d = a
                    }
                },
                ready: {
                    enumerable: !0,
                    value: function(a) {
                        if ("function" !== typeof a)
                            throw new TypeError("You can only pass a function to ready().");
                        wa.push(a)
                    }
                }
            });
            var fa=!0 === a;
            if (!0 !== a) {
                var ra = function() {
                    if (!fa) {
                        fa=!0;
                        setTimeout(t, 100);
                        var b = (new Date).getTime() - a.startTime;
                        q._gaq && q._gaq.push(["player._trackTiming", "Player", "CSS Load", b]);
                        0
                    }
                };
                a.link.addEventListener("load", ra, !1);
                var $ = function() {
                    var b=!1;
                    try {
                        var c = a.link.sheet, d;
                        c && (d = c.cssRules, b = null === d, !b && d && (c.insertRule("-curl-css-test {}", 0), c.deleteRule(0), b=!0))
                    } catch (e) {
                        b =
                        "[object Opera]" !== Object.prototype.toString.call(q.opera) && /security|denied/i.test(e.message)
                    }
                    if (!b)
                        return setTimeout($, 50);
                    ra()
                };
                $()
            }
            Ca();
            return ia
        }
    }(), nb = function() {
        return function(e, b) {
            function a() {
                switch (e._video && e._video.currentRenderer) {
                case "html":
                    return "HTML5";
                case "flash":
                    return "Flideo";
                case "moogaloop":
                    return "Moogaloop";
                default:
                    return "Player"
                }
            }
            function d(a, b) {
                0;
                q._gaq && q._gaq.push(["player._trackSocial", a, b, e.video.share_url])
            }
            var g = e.request.session, n=!0;
            (function() {
                e.request.flags.dnt ?
                0 : (b.on(c.facebookButtonPressed, function() {
                    d("Facebook", "share")
                }), b.on(c.twitterButtonPressed, function() {
                    d("Twitter", "tweet")
                }), b.on(c.emailButtonPressed, function() {
                    d("Email", "email")
                }))
            })();
            (function() {
                var d;
                b.on([c.bufferStarted, c.scrubbingStarted], function(a) {
                    d || (d = a || (new Date).getTime())
                });
                b.on(c.bufferEnded, function() {
                    if (0 < d) {
                        var b = e._video.currentFile.quality, c = "Buffer Time";
                        n && (n=!1, c = "Start Time");
                        var g = d, g = (new Date).getTime() - g;
                        0;
                        q._gaq && q._gaq.push(["player._trackTiming", a(), c, g, b]);
                        d = null
                    }
                })
            })();
            (function() {
                function a() {
                    try {
                        x = new ns_.StreamingTag({
                            customerC2: e.request.comscore_id
                        }), n && (d(), n=!1)
                    } catch (b) {}
                }
                function d() {
                    try {
                        x.playContentPart({
                            ns_st_ci: e.video.id
                        })
                    } catch (a) {}
                }
                if (e.request.flags.dnt ||!e.request.flags.plays)
                    0;
                else {
                    var g = w.getElementById("player-comscore"), n=!1, x;
                    b.on(c.played, function() {
                        if (!x) {
                            if ("undefined" === typeof ns_) {
                                if (!g) {
                                    g = w.createElement("script");
                                    g.id = "player-comscore";
                                    g.async=!0;
                                    g.src = e.request.urls.comscore_js;
                                    var b = w.getElementsByTagName("script")[0];
                                    b.parentNode.insertBefore(g, b)
                                }
                                g.addEventListener("load", a, !1);
                                n=!0;
                                return 
                            }
                            a()
                        }
                        d()
                    });
                    b.on(c.paused, function() {
                        try {
                            x && x.stop()
                        } catch (a) {}
                    })
                }
            })();
            (function() {
                b.on(c.configChanged, function(a) {
                    e = a;
                    g !== a.request.session && (q._gaq && q._gaq.push(["player._trackPageview", "/video/" + e.video.id]), n=!0)
                })
            })();
            b.fire(c.analyticsModuleReady);
            return {}
        }
    }(), jb = function(e) {
        return function(b, a) {
            function d(a, b) {
                this.message = b;
                try {
                    l({
                        event: "error",
                        data: {
                            message: b,
                            code: a
                        }
                    })
                } catch (c) {}
            }
            function g() {
                if (b.view === Aa)
                    throw new d("private_video",
                    "The video is private.");
                if (b.view === Ba)
                    throw new d("password_video", "The video is password-protected. The viewer must enter the password first.");
            }
            function n(a) {
                if (a && "" !== a) {
                    if ("object" === typeof a)
                        return a;
                    try {
                        return JSON.parse(a)
                    } catch (b) {
                        var c = {};
                        a.split("&").forEach(function(a) {
                            try {
                                var b = a.split("="), d = decodeURIComponent(b[0]), e = decodeURIComponent(b[1]);
                                "id" !== d && ("params" === d && (d = "value"), e = e.split(",")[0], c[d] = e)
                            } catch (f) {}
                        });
                        return c
                    }
                }
            }
            function l(a) {
                if (a.event && (F.fire(a.event, a.data), !h[a.event]))
                    return;
                if (H) {
                    var c = "";
                    b.embed.player_id && (a.player_id = b.embed.player_id);
                    if (1 === b.embed.api) {
                        c = a.event;
                        if (1 === b.embed.api) {
                            for (var d in J)
                                if (J[d] === a.event) {
                                    c = d;
                                    break
                                }
                            switch (c) {
                            case "onSeek":
                            case "onProgress":
                                delete a.data.percent;
                                delete a.data.duration;
                                break;
                            case "onLoading":
                                delete a.data.seconds, delete a.data.duration
                            }
                        }
                        d = "method=" + encodeURIComponent(c || a.method);
                        d += "&params=";
                        c = [];
                        if (a.value !== V)
                            c.push(encodeURIComponent(a.value));
                        else if ("object" === typeof a.data)
                            for (var g in a.data)
                                c.push(encodeURIComponent(a.data[g]));
                        else 
                            a.data !== V && c.push(encodeURIComponent(a.data));
                        a.player_id && c.push(a.player_id);
                        c = d += c.join(",")
                    } else 
                        try {
                            c = JSON.stringify(a)
                        } catch (k) {}
                    0;
                    if (e.parent != e)
                        try {
                            e.parent.postMessage(c, x)
                        } catch (z) {}
                }
            }
            function q(a) {
                if (a && "_" !== a.substr(0, 1)) {
                    1 === b.embed.api && (a = a.replace("api_", ""));
                    switch (a) {
                    case "changeColor":
                        return v.color.set;
                    case "paused":
                        return v.paused.get;
                    case "seekTo":
                        return v.currentTime.set
                    }
                    if ("function" === typeof v[a])
                        return v[a];
                    var c = a.substr(0, 3);
                    a = a.substr(3, 1).toLowerCase() + a.substr(4);
                    return v[a] && v[a][c] ? v[a][c] : !1
                }
            }
            function m(a) {
                if (0 === (w.referrer || e.location.origin || e.location.href).indexOf(a.origin)) {
                    var b = n(a.data), c = b.method, b = b.value, d = q(c);
                    d && (0, a = d.call(a, b), a !== V && "" !== a && l({
                        method: c,
                        value: a
                    }))
                }
            }
            function P() {
                if (z && B) {
                    try {
                        switch (B) {
                        case "not-supported":
                            throw new d("not_supported", "This video is not supported in this browser.");
                        case "no-files":
                            throw new d("file_error", "There was an error loading the files for this video.");
                        default:
                            throw new d("playback", "An error occurred during playback.");
                        }
                    } catch (a) {}
                    B = null
                }
            }
            var x = w.referrer || b.request.referrer;
            try {
                x = decodeURIComponent(x)
            } catch (r) {
                x = unescape(x)
            }
            var h = {
                ready: !0,
                error: !0
            }, F = Da.make({}), H=!(!e.postMessage ||!e.parent.postMessage), E = null, z=!1, G=!1, B = null, L=!1, k, I = "play pause finish playProgress loadProgress seek cuechange".split(" "), J = {
                onFinish: "finish",
                onLoading: "loadProgress",
                onLoad: "ready",
                onProgress: "playProgress",
                onPlay: "play",
                onPause: "pause",
                onSeek: "seek"
            };
            d.prototype = Error();
            var v = {
                addEventListener: function(a, b) {
                    a in J && (a = J[a]);
                    if (0 > I.indexOf(a))
                        throw new d("invalid_event", '"' + a + '" is not a valid event. Valid events are: ' + I.join(", ") + ".");
                    if (b)
                        F.on(a, b);
                    else 
                        h[a]=!0;
                    0
                },
                removeEventListener: function(a, b) {
                    b ? F.off(a, b) : h[a]=!1;
                    0
                },
                play: function() {
                    g();
                    if ("[object MessageEvent]" === Object.prototype.toString.call(this) && "undefined" !== typeof u && (u.iPhone || u.iPad || u.iPod)&&!L)
                        throw new d("play", "The viewer must initiate playback first.");
                    a.fire(c.playButtonPressed, !0)
                },
                pause: function() {
                    g();
                    a.fire(c.pauseButtonPressed)
                },
                loadVideo: function(c) {
                    if (!b.embed.on_site &&
                    isNaN(c))
                        throw new d("invalid_video", "The video id must be a number.");
                    a.fire(za, c)
                },
                unload: function() {
                    b.view !== ka && b.view !== ja || a.fire(qa)
                },
                _setEmbedSetting: function(d, e) {
                    b.embed.on_site && (d in b.embed.settings || "custom_logo" === d) && (e = "object" === typeof e ? e : Number(e), "badge" === d && (e ? e = k : k = b.embed.settings.badge), b.embed.settings[d] = e, a.fire(c.embedSettingChanged, d, e), a.fire(c.configChanged, b))
                },
                color: {
                    get: function() {
                        return b.embed.color.replace("#", "")
                    },
                    set: function(c) {
                        if (b.embed.settings.color &&
                        !b.embed.on_site)
                            throw new d("color_locked", "The creator of the video has chosen to always use " + (new ba(b.embed.color)).hex + ".");
                        c = (c + "").replace("#", "");
                        if ("string" !== typeof c || 3 !== c.length && 6 !== c.length || isNaN(parseInt(c, 16)))
                            throw new d("invalid_color", "The color should be 3- or 6-digit hex value.");
                        if ("undefined" === typeof ba || "implement"in ba)
                            a.fire(aa, c);
                        else 
                            try {
                                var e = new ba(c);
                                a.fire(aa, e);
                                if (3 > (new ba(23, 35, 34, 0.75)).contrast(e).ratio)
                                    throw new d("color_contrast", "Specified color does not meet minimum contrast ratio. We recommend using brighter colors. See WCAG 2.0 guidelines: http://www.w3.org/TR/WCAG/#visual-audio-contrast");
                        } catch (g) {}
                    }
                },
                currentTime: {
                    get: function() {
                        return b._video && 0.1 < b._video.currentTime ? s.round(b._video.currentTime) : 0
                    },
                    set: function(e) {
                        e = parseFloat(e);
                        if (isNaN(e) || 0 > e || e > b._video.duration)
                            throw new d("invalid_time", "Seconds must be a positive float less than the duration of the video (" + b._video.duration + ").");
                        a.fire(Ja, null, e);
                        a.fire(c.mousedOver)
                    }
                },
                duration: {
                    get: function() {
                        return s.round(b.video.duration)
                    }
                },
                loop: {
                    get: function() {
                        return !!b.embed.loop
                    },
                    set: function(b) {
                        a.fire(8, b)
                    }
                },
                paused: {
                    get: function() {
                        return b._video &&
                        "paused"in b._video?!!b._video.paused : !0
                    }
                },
                videoEmbedCode: {
                    get: function() {
                        return b.video.embed_code
                    }
                },
                videoHeight: {
                    get: function() {
                        return b.video.video_height || b.video.height
                    }
                },
                videoId: {
                    get: function() {
                        return b.video.id
                    }
                },
                videoTitle: {
                    get: function() {
                        return b.video.title
                    }
                },
                videoWidth: {
                    get: function() {
                        return b.video.video_width || b.video.width
                    }
                },
                videoUrl: {
                    get: function() {
                        return b.video.url
                    }
                },
                volume: {
                    get: function() {
                        var a = s.round(b.request.cookie.volume);
                        return 1 === b.embed.api ? Math.round(100 * a) : a
                    },
                    set: function(c) {
                        c =
                        parseFloat(c);
                        1 === b.embed.api && (c/=100);
                        if (isNaN(c) || 0 > c || 1 < c)
                            throw new d("invalid_volume", "Volume should be a float between 0 and 1.");
                        E = c;
                        a.fire(ea, c, !0)
                    }
                }
            };
            a.on(c.playInitiated, function() {
                L=!0
            });
            e.addEventListener ? e.addEventListener("message", m, !1) : e.attachEvent("onmessage", m);
            (function() {
                a.on(c.played, function() {
                    G || (G=!0, l({
                        event: "play"
                    }))
                });
                a.on(c.paused, function() {
                    G=!1;
                    l({
                        event: "pause"
                    })
                });
                a.on(c.ended, function() {
                    G=!1;
                    l({
                        event: "finish"
                    })
                });
                a.on(c.playProgress, function(a, b, c) {
                    l({
                        event: "playProgress",
                        data: {
                            seconds: s.round(a),
                            percent: s.round(c),
                            duration: s.round(b)
                        }
                    })
                });
                a.on(c.loadProgress, function(a, b, c) {
                    l({
                        event: "loadProgress",
                        data: {
                            bytesLoaded: - 1,
                            bytesTotal: - 1,
                            percent: s.round(c),
                            duration: s.round(b),
                            seconds: s.round(a)
                        }
                    })
                });
                a.on(c.seeked, function(a, b, c) {
                    l({
                        event: "seek",
                        data: {
                            seconds: s.round(a),
                            percent: s.round(c),
                            duration: s.round(b)
                        }
                    })
                });
                a.on(c.error, function(a) {
                    B = a;
                    P()
                });
                a.on(c.cueChanged, function(a, b) {
                    var c = null, d = null;
                    a && (d = a.split("."), c = d[0], d = d[1]);
                    l({
                        event: "cuechange",
                        data: {
                            language: c,
                            kind: d,
                            cues: b
                        }
                    })
                })
            })();
            (function() {
                a.on(qa, function() {
                    B = null;
                    L=!1
                })
            })();
            (function() {
                a.on(c.configChanged, function(c) {
                    b = c;
                    E && setTimeout(function() {
                        0;
                        a.fire(ea, E, !0)
                    }, 0)
                })
            })();
            a.fire(c.apiModuleReady);
            a.on(c.ready, function() {
                z=!0;
                l({
                    event: "ready"
                });
                P()
            });
            return v
        }
    }(this), vb = function() {
        var e = "ar fa ku ps sd ur yi".split(" ");
        return function(b, a, d, g) {
            function n() {
                d.style.fontSize = Math.max(10, Math.round(0.045 * g.clientHeight)) + "px"
            }
            function l() {
                d.classList.remove("hidden");
                d.removeAttribute("hidden")
            }
            var t=!1,
            m=!1;
            (function() {
                a.on(c.cueChanged, function(a, b) {
                    for (; d.firstChild;)
                        d.removeChild(d.firstChild);
                    if (b.length) {
                        var c = w.createDocumentFragment();
                        b.forEach(function(a) {
                            var b = w.createElement("span");
                            b.innerHTML = a.html;
                            c.appendChild(b)
                        });
                        d.appendChild(c);
                        t ? l() : m=!0
                    } else 
                        d.classList.add("hidden"), d.setAttribute("hidden", "")
                }).on(c.captionsChanged, function(a) {
                    a ? (a = a.split(".")[0], d.setAttribute("lang", a), 0 <= e.indexOf(a) && d.setAttribute("dir", "rtl")) : (d.removeAttribute("dir"), d.removeAttribute("lang"))
                }).on(c.playInitiated,
                function() {
                    t=!0;
                    m && (m=!1, l())
                }).on(qa, function() {
                    t=!1
                })
            })();
            n();
            q.addEventListener("resize", n, !1);
            a.on([c.didEnterFullscreen, c.didExitFullscreen], n);
            (function() {
                a.on(c.controlBarVisibilityChanged, function(a) {
                    a ? d.classList.add("with-controls") : d.classList.remove("with-controls")
                })
            })();
            (function() {
                a.on(c.overlayOpened, function() {
                    d.classList.add("invisible")
                }).on(c.overlayClosed, function() {
                    d.classList.remove("invisible")
                })
            })();
            (function() {
                a.on(c.ended, function() {
                    "nothing" !== b.embed.outro && d.classList.add("invisible")
                }).on([c.played,
                c.scrubbingStarted], function() {
                    d.classList.remove("invisible")
                })
            })();
            return {}
        }
    }(), kb = function() {
        var e = [".title a"], b = [".title a:hover"], a = "a;.overlay-wrapper .footnote.share a:hover;.title h1;.title span.user;.outro .video-section > div > h1 a:hover;.outro .videos h1;.outro .videos h2;.menu li:hover;.menu li.active".split(";"), d = ["a:hover", ".overlay-wrapper .close:hover", ".overlay-wrapper .back:hover"], g = ".play-bar .on .fill;.play-bar a:hover .fill;.play-bar button:not(.toggle):hover .fill;.tiny-bars .fill;.tiny-cc-cell .on .fill;.sidedock .on .fill".split(";"),
        n = [".sidedock .on:hover .fill"], l = [".play-bar .on .stroke", ".sidedock .on .stroke"], q = [".sidedock .on:hover .stroke"], m = '.sidedock button:hover;.player.touch-support .sidedock button:active;.controls .play:hover;.controls .play-bar .played;.controls .tiny-fullscreen-cell:hover;.controls .volume div;.overlay .buttons li;.overlay .window-wrapper button;.overlay .window-wrapper input[type="submit"];.overlay .window-wrapper a[role="button"];.overlay .embed-copy;.outro a[role="button"];.outro .videos li:hover img;.outro .videos li a:focus img;.outro .vod li;.menu li.active:before'.split(";"),
        u = [".outro .videos li:hover img", ".outro .videos li a:focus img", ".menu li.active:before"], x = '.overlay-wrapper .overlay .buttons li a;.overlay-wrapper .overlay button.embed-copy;.overlay-wrapper .footnote.share a:hover;.overlay .window-wrapper button;.overlay .window-wrapper input[type="submit"];.overlay .window-wrapper a[role="button"];.outro-wrapper .outro-inner a[role="button"];.sidedock button:hover;.play:hover'.split(";"), r = ".controls .play:hover .fill;.sidedock button:hover .fill;.play-bar a:hover .fill;.play-bar button:not(.toggle):hover .fill;.controls .tiny-fullscreen-cell:hover .fill;.sidedock .on .fill".split(";"),
        h = [".controls .play:hover .stroke", ".sidedock button:hover .stroke", ".sidedock .on .stroke"], F = ['.overlay-wrapper .overlay a[role="button"]', ".overlay-wrapper .overlay button.embed-copy", ".sidedock button:hover", ".play:hover"], H = [".controls .play:hover .fill", ".sidedock button:hover .fill", ".controls .tiny-fullscreen-cell:hover .fill"], E = [".sidedock button:hover .stroke"], z = [".menu li:active:before"], G = ['.overlay .window-wrapper input[type="submit"]:active', ".overlay .embed-copy.zeroclipboard-is-active",
        '.overlay a[role="button"]:active', ".outro .vod-watch-button:active", ".sidedock button:active"];
        return function(B, L, k, I, J) {
            function v(a, b) {
                var c = ".player-" + k + " ", c = c + a.join("," + c);
                if (b)
                    var d = "#" + I + " ", c = c + ("," + d + a.join("," + d));
                J && (c = c.replace(/:hover/g, ":active"));
                return c
            }
            var A = null;
            (function() {
                L.on(aa, function(C) {
                    var D;
                    try {
                        D = new ba(C)
                    } catch (X) {
                        D = new ba("00adef")
                    }
                    var Q;
                    C = D;
                    if (A)
                        for (; 0 < A.cssRules.length;)
                            A.deleteRule(0);
                    else 
                        D = w.createElement("style"), D.setAttribute("data-player", k), w.querySelector("head").appendChild(D),
                        A = D.sheet;
                    D = C.complement;
                    var O = new ba(23, 35, 34, 0.75), Ca = (new ba(0, 0, 0, 0.15)).overlayOn(C);
                    3 > O.contrast(D).ratio && D.lighten(5, 3, O);
                    O = 40 > C.lightness ? C.clone().lighten(15, 3, C) : C.clone().darken(15, 3, C);
                    s.addCssRule(v(e, !0), "color:" + C.hex + " !important", A);
                    s.addCssRule(v(b, !0), "color:" + D.hex + " !important", A);
                    s.addCssRule(v(a), "color:" + C.hex, A);
                    s.addCssRule(v(g), "fill:" + C.hex, A);
                    s.addCssRule(v(l), "stroke:" + C.hex, A);
                    s.addCssRule(v(m), "background-color:" + C.hex, A);
                    s.addCssRule(v(u), "border-color:" + C.hex, A);
                    s.addCssRule(v(d), "color:" + D.hex, A);
                    s.addCssRule(v(n), "fill:" + O.hex, A);
                    s.addCssRule(v(q), "stroke:" + O.hex, A);
                    s.addCssRule(v(z), "border-color:" + Ca.hex, A);
                    s.addCssRule(v(G), "background-color:" + Ca.hex, A);
                    0.95 < C.luminance && (D = C.clone().darken(15, 3, C), s.addCssRule(v(x), "color:" + D.hex, A), s.addCssRule(v(r), "fill:" + D.hex, A), s.addCssRule(v(h), "stroke:" + D.hex, A), O = D.clone().darken(15, 3, D), s.addCssRule(v(n), "fill:" + O.hex, A), s.addCssRule(v(q), "stroke:" + O.hex, A));
                    175 < C.yiq && 0.95 > C.luminance && (Q = O.clone().darken(15,
                    3, O), s.addCssRule(v(n), "fill:" + Q.hex, A), s.addCssRule(v(q), "stroke:" + Q.hex, A), s.addCssRule(v(F), "color:" + O.hex, A), s.addCssRule(v(H), "fill:" + O.hex, A), s.addCssRule(v(E), "stroke:" + O.hex, A));
                    Q = {
                        main: C.hex,
                        selected: O.hex,
                        sidedockHover: Q ? O.hex: 0.95 < C.luminance ? D.hex: ba.white.hex,
                        sidedockSelected: 0.95 < C.luminance ? D.hex: C.hex,
                        sidedockSelectedHover: Q ? Q.hex: O.hex
                    };
                    B._colors = Q;
                    B.embed.color = Q.main.replace("#", "");
                    L.fire(c.colorChanged, B.embed.color)
                });
                L.fire(aa, B.embed.color)
            })();
            return {}
        }
    }(), ob = function() {
        return function(e,
        b, a) {
            function d() {
                clearTimeout(r);
                r = null
            }
            function g() {
                B && (clearTimeout(r), r = setTimeout(l, h))
            }
            function n() {
                BigScreen.element && BigScreen.element === a&&!E && (a.style.cursor = "none", E = H=!0)
            }
            function l(a) {
                if (G || z)
                    d(), w.activeElement && (I.contains(w.activeElement) || J.contains(w.activeElement)) || (b.fire(a ? c.mousedOut : c.mouseTimeout), H=!0, k.classList.add("hidden"), k.setAttribute("hidden", ""), F=!0, n())
            }
            function t() {
                G && z || (b.fire(c.mousedOver), k.classList.remove("hidden"), k.removeAttribute("hidden"));
                g()
            }
            function m() {
                b.on([c.playProgress,
                c.seeked], function D(a) {
                    a >= L && null === r && (b.fire(c.targetTimeReached), b.off([c.playProgress, c.seeked], D))
                })
            }
            var s = 2E3, x = 4500, r = null, h = u.touch ? x: s, F=!0, H=!0, E=!1, z=!0, G=!1, B=!1, L = 1.75, k = a.querySelector(".target"), I = a.querySelector(".sidedock"), J = a.querySelector(".controls"), v = a.querySelector(".title"), A = a.querySelector(".video");
            (function() {
                function c() {
                    b.fire(Na);
                    t()
                }
                function e(b) {
                    h = s;
                    H ? H=!1 : (E && (a.style.cursor = "default", E=!1), 0 === b.screenX || b.screenX === screen.width - 1 || 0 === b.screenY || b.screenY === screen.height -
                    1 ? (d(), n(), v && (l(!0), v=!1)) : (v=!0, F && t(), g()))
                }
                function k() {
                    h = x;
                    g()
                }
                function r() {
                    l(!0)
                }
                function m(a) {
                    a = J.contains(a.target) || I.contains(a.target);
                    G && z ? a ||!G&&!z || l(!0) : t();
                    return !1
                }
                function q(a) {
                    if ("mouse" === a.pointerType || a.pointerType === a.MSPOINTER_TYPE_MOUSE)
                        return h = s, c(a);
                    h = x;
                    m(a)
                }
                function f(a) {
                    if ("mouse" === a.pointerType || a.pointerType === a.MSPOINTER_TYPE_MOUSE)
                        return e(a)
                }
                function B(a) {
                    if ("mouse" === a.pointerType || a.pointerType === a.MSPOINTER_TYPE_MOUSE)
                        return r(a)
                }
                var v=!0;
                if (u.pointerEvents)
                    Gator(a).on("pointerenter",
                    q).on("pointermove", f).on("pointerleave", B);
                else 
                    Gator(a).on("touchmove", k).on("touchend", m).on("mouseenter", c).on("mousemove", e).on("mouseleave", r)
            })();
            (function() {
                b.on([c.ended, c.played, c.paused], t).on([c.bufferEnded, c.scrubbingEnded, c.volumeChanged], g).on(c.playInitiated, function() {
                    B=!0
                });
                b.on(c.controlBarVisibilityChanged, function(a) {
                    z = a
                }).on(c.sidedockVisibilityChanged, function(a) {
                    G = a
                })
            })();
            (function() {
                var d=!1, g=!1, h = 0;
                b.on(c.menuVisibilityChanged, function(a) {
                    g = a
                });
                Gator(a).on(u.pointerEvents ?
                "pointerup" : "click", function(a) {
                    !g && 2 !== a.button && a.target.classList && (a.target.classList.contains("title") || a.target.classList.contains("sidedock") || a.target.classList.contains("target") || v.contains(a.target.parentNode) && "HEADER" === a.target.parentNode.tagName || A.contains(a.target)) && ("pointerup" !== a.type && "MSPointerUp" !== a.type || "mouse" === a.pointerType || a.pointerType === a.MSPOINTER_TYPE_MOUSE) && (h++, 1 === h && setTimeout(function() {
                        1 === h ? b.fire(e._video.paused ? c.playButtonPressed : c.pauseButtonPressed) :
                        b.fire(c.fullscreenButtonPressed);
                        h = 0
                    }, 200))
                });
                Gator(a).on("mousedown", ".video-wrapper", function(a) {
                    if (!d)
                        return k.classList.remove("hidden"), k.removeAttribute("hidden"), 2 !== a.button && w.createEvent && (a = w.createEvent("MouseEvents"), a.initMouseEvent("click", !0, !0, q, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), k.dispatchEvent(a)), !1
                }).on("contextmenu", ".video", function(a) {
                    k.classList.remove("hidden");
                    k.removeAttribute("hidden");
                    return !1
                });
                b.on(Oa, function(a) {
                    a ? (d=!0, k.classList.add("hidden")) : (d=!1, k.classList.remove("hidden"))
                })
            })();
            (function() {
                if (!u.touch) {
                    var b;
                    Gator(a).on("focus", "*[tabindex]", function() {
                        clearTimeout(b);
                        b = null;
                        w.activeElement === this && t()
                    });
                    Gator(a).on("blur", "*[tabindex]", function() {
                        w.activeElement === this && (b = setTimeout(l, 50))
                    })
                }
            })();
            (function() {
                b.on(c.didEnterFullscreen, n).on(c.didExitFullscreen, function(a) {
                    F=!0;
                    a ? l() : (t(), d())
                })
            })();
            m();
            (function() {
                b.on(qa, function() {
                    z = H = F=!0;
                    B = G=!1;
                    m();
                    d()
                })
            })();
            return {}
        }
    }(), qb = function() {
        function e(a, b, c) {
            a += "";
            return Array(b - a.length + 1).join(c || "0") + a
        }
        function b(a, b) {
            var c =
            Math.floor(a / 3600%60), n = Math.floor(a / 60%60);
            a = Math.floor(a%60);
            if (b) {
                var l = a + " second" + (1 === a ? "" : "s");
                0 < n && (l = n + " minute" + (1 === n ? "" : "s") + ", " + l);
                0 < c && (l = c + " hour" + (1 === c ? "" : "s") + ", " + l);
                return l
            }
            return (0 < c ? c + ":" : "") + e(n, 2) + ":" + e(a, 2)
        }
        return function(a, d, e) {
            function n() {
                if (!S) {
                    var a = N.getBoundingClientRect().right;
                    N.offsetWidth < N.clientWidth && (a*=100);
                    var b = parseInt(q.getComputedStyle(N, "").borderRightWidth, 10);
                    S = a - b
                }
                return S
            }
            function l(a) {
                var b;
                if (!p) {
                    b = N.getBoundingClientRect().left;
                    N.offsetWidth <
                    N.clientWidth && (b*=100);
                    var c = parseInt(q.getComputedStyle(N, "").borderLeftWidth, 10);
                    p = b + c
                }
                b = p;
                c = n() - b;
                return s.limit((a - b) / c, 0, 1)
            }
            function t() {
                if (Z&&!ta && U && (a._video.loadProgress || a._video.currentTime)) {
                    var b = (a._video.loadProgress || 0) / a.video.duration * 65, c = (a._video.currentTime || 0) / a.video.duration * 65;
                    q.requestAnimationFrame(function() {
                        V.setAttribute("width", b);
                        ba.setAttribute("width", c)
                    })
                }
            }
            function m(c, d) {
                J&&!f && (d = d || a.video.duration * c || 0, q.requestAnimationFrame(function() {
                    var a = d;
                    ia.style.left =
                    s.round(100 * c) + "%";
                    wa.innerHTML = b(a);
                    P(c, d)
                }))
            }
            function P(a, c) {
                na.style.width = s.round(100 * a) + "%";
                na.setAttribute("aria-valuenow", s.round(c));
                na.setAttribute("aria-valuetext", b(Math.round(c), !0) + " played")
            }
            function x(a, c) {
                aa.style.width = s.round(100 * a) + "%";
                aa.setAttribute("aria-valuenow", s.round(c));
                aa.setAttribute("aria-valuetext", b(c, !0) + " loaded")
            }
            function r() {
                J=!0;
                ha && (U=!1, e.classList.add("invisible"), B(), E());
                K.classList.contains("state-playing") ? (d.fire(c.pauseButtonPressed), h()) : (d.fire(c.playButtonPressed),
                F())
            }
            function h() {
                y=!1;
                K.classList.remove("state-playing");
                K.classList.add("state-paused");
                var a = K.getAttribute("data-title-play");
                K.setAttribute("title", a);
                K.setAttribute("aria-label", a)
            }
            function F() {
                y=!0;
                ha && B();
                K.classList.add("state-playing");
                K.classList.remove("state-paused");
                var a = K.getAttribute("data-title-pause");
                K.setAttribute("title", a);
                K.setAttribute("aria-label", a)
            }
            function H() {
                !U || I ||!(J && Ca || A) || v || xa&&!A || A && a.view === ja || X || C || (U=!1, d.fire(c.controlBarVisibilityChanged, U), e.classList.add("invisible"))
            }
            function E() {
                U || A ||!M || (e.classList.remove("hidden"), e.removeAttribute("hidden"), M.classList.add("hidden"), M.setAttribute("hidden", ""), t(), setTimeout(function() {
                    U=!0;
                    d.fire(c.controlBarVisibilityChanged, U);
                    e.classList.remove("invisible")
                }, 0))
            }
            function z(b, c) {
                var e = [];
                "text_tracks"in a.request && (a.request.text_tracks.forEach(function(a) {
                    var b = a.lang + "." + a.kind, c = "CC" === a.label.substring(a.label.length - 2);
                    e.push({
                        label: a.label + ("captions" !== a.kind || c ? "" : " CC"),
                        id: b,
                        active: Fa === b
                    })
                }), e.push({
                    label: "None",
                    id: "off",
                    active: null === Fa
                }));
                var f = new yb(e, b, c, d);
                f.on("selected", function(a) {
                    "off" === a ? d.fire(Ta) : d.fire(Sa, a)
                });
                return f
            }
            function G() {
                q.requestAnimationFrame(function() {
                    var c = a.video.duration;
                    ia.style.left = s.round(0) + "%";
                    wa.innerHTML = b(c);
                    P(0, 0);
                    x(0, 0);
                    va.style.backgroundImage = ""
                })
            }
            function B() {
                if (a.view === ka || a.view === ja) {
                    var c = a.embed.settings, d = {
                        show: c.logo,
                        showLink: !!a.video.url,
                        url: a.video.url
                    };
                    if (c.custom_logo)
                        var f = c.custom_logo, f = {
                            showLink: null !== f.url,
                            url: f.url,
                            img: f.img,
                            sticky: f.sticky,
                            width: f.width,
                            height: f.height
                        };
                    if (!a.video.vod ||!a.video.vod.is_trailer || J || y || a.embed.autoplay) {
                        var h = "text_tracks"in a.request && a.request.text_tracks.length, c = {
                            targetBlank: 0 === a.embed.on_site,
                            playState: y ? "playing": "paused",
                            volume: k && c.volume,
                            ccButton: Ea.support.textTracks && h,
                            ccOn: null !== Fa,
                            hdButton: a.video.hd,
                            hdOn: a.video.allow_hd && (null === a.request.cookie.hd ? a.video.default_to_hd : a.request.cookie.hd),
                            airplayButton: u.airPlay,
                            scalingButton: c.scaling,
                            fullSize: a.request.cookie.scaling ? 1: 0,
                            fullscreenButton: c.fullscreen,
                            vimeoLogo: d,
                            duration: b(a.video.duration),
                            rawDuration: a.video.duration
                        };
                        f && (c.customLogo = f);
                        e.classList.remove("trailer");
                        ha=!1;
                        e.innerHTML = Aftershave.render("controls", c);
                        K = e.querySelector(".play");
                        R = K.querySelector(".buffer");
                        V = K.querySelector(".loaded");
                        ba = K.querySelector(".played");
                        Y = e.querySelector(".play-bar");
                        N = e.querySelector(".progress");
                        T = Y.querySelector(".buffer");
                        aa = Y.querySelector(".loaded");
                        na = Y.querySelector(".played");
                        va = K.querySelector(".tiny-bars");
                        ia = e.querySelector(".timecode");
                        wa = ia.querySelector(".box");
                        fa = e.querySelector(".ghost-timecode");
                        ra = fa.querySelector(".box");
                        ($ = e.querySelector(".volume")) && (Wa = [].slice.call($.querySelectorAll("div"), 0));
                        la = e.querySelector(".hd");
                        ga = e.querySelector(".play-bar .cc");
                        pa = e.querySelector(".tiny-cc-cell .cc");
                        u.airPlay && (da = e.querySelector(".airplay-container"), ma = e.querySelector(".airplay"));
                        ua = e.querySelector(".scaling");
                        Ha = e.querySelector(".fullscreen");
                        M || (M = w.createElement("button"), M.className = "focus-dummy hidden", M.setAttribute("tabindex",
                        "2"), M.setAttribute("hidden", ""), M.setAttribute("aria-hidden", "true"), M.setAttribute("title", "Focus dummy (focuses the play button when the controls are hidden)"), e.parentElement.insertBefore(M, e))
                    } else 
                        e.classList.add("trailer"), c = {
                            vimeoLogo: d
                        }, f && (c.customLogo = f), e.innerHTML = Aftershave.render("controls_trailer", c), K = e.querySelector(".play"), ha=!0
                }
            }
            function L() {
                d.on(c.loadProgress, function(a, b, c) {
                    I || q.requestAnimationFrame(function() {
                        x(c, a);
                        t()
                    })
                })
            }
            var k=!0, I=!1, J=!1, v=!1, A=!1, C=!1, D=!1, X=!1, Q=!1,
            O=!1, Ca=!1, f=!1, Z, ta=!1, U=!0, y=!1, ha=!1, S = null, p = null, M, K, R, V, ba, Y, N, T, aa, na, va, ia, wa, fa, ra, $, Wa, la, ga, ca, pa, W, Fa = null, da, ma, xa=!1, ua, Ha;
            B();
            (function() {
                s.attachClickHandler(e, ".play", r);
                d.on([c.playInitiated, c.playButtonPressed], F);
                d.on([c.pauseButtonPressed, c.paused, c.error], h);
                d.on(c.played, function() {
                    F()
                });
                d.on(c.ended, function() {
                    f=!1;
                    h();
                    m(1)
                });
                d.on(c.overlayOpened, function(a) {
                    "notsupported" === a && h()
                })
            })();
            (function() {
                function b(a) {
                    if (k === a.pointerId&&!1 !== a.isPrimary) {
                        var c = a.clientX;
                        a.targetTouches &&
                        0 < a.targetTouches.length && (c = a.targetTouches[0].clientX, a.preventDefault());
                        a = l(c);
                        m(a);
                        d.fire(Ja, a)
                    }
                }
                function h(a) {
                    var f = a.type;
                    "pointerup" === f || "MSPointerUp" === f ? Gator(e).off("pointermove", ".progress", b).off("pointerup", ".progress", h) : "touchend" === a.type ? Gator(e).off("touchmove", b).off("touchend", h) : Gator(w).off("mousemove", b).off("mouseup", h);
                    d.fire(c.scrubbingEnded)
                }
                d.on(c.playProgress, function(b, c, d) {
                    f && (0 === a.embed.time || 0 < a.embed.time && b >= a.embed.time) && (f=!1);
                    C || (m(d, b), t())
                });
                d.on(c.scrubbingStarted,
                function(a) {
                    C=!0;
                    D = a
                });
                d.on(c.scrubbingEnded, function() {
                    D = C=!1
                });
                var k;
                d.on(c.seeked, function(a, b, c) {
                    D && m(c)
                });
                Gator(e).on(u.pointerEvents ? "pointerdown" : ["touchstart", "mousedown"], ".progress", function(a) {
                    if (!a.button || 2 !== a.button) {
                        d.fire(c.scrubbingStarted);
                        var f = a.type;
                        if ("pointerdown" === f || "MSPointerDown" === f) {
                            k = a.pointerId;
                            try {
                                a.target.msSetPointerCapture ? a.target.msSetPointerCapture(k) : a.target.setPointerCapture(k)
                            } catch (z) {}
                            Gator(e).on("pointermove", ".progress", b).on("pointerup", ".progress",
                            h)
                        } else if ("touchstart" === f)
                            Gator(e).on("touchmove", b).on("touchend", h);
                        else 
                            Gator(w).on("mousemove", b).on("mouseup", h);
                        f = a.clientX;
                        a.targetTouches && 0 < a.targetTouches.length && (f = a.targetTouches[0].clientX, a.preventDefault());
                        a = l(f);
                        m(a);
                        d.fire(Ja, a, null);
                        return !1
                    }
                })
            })();
            (function() {
                d.on(c.bufferStarted, function() {
                    T.classList.remove("hidden");
                    R.setAttribute("class", R.getAttribute("class").replace(/\s+hidden/, ""));
                    X=!0;
                    E()
                });
                d.on(c.bufferEnded, function() {
                    T.classList.add("hidden");
                    R.setAttribute("class",
                    R.getAttribute("class") + " hidden");
                    X=!1
                })
            })();
            (function() {
                function f(a) {
                    a.target === Y && (a = l(a.clientX), m(a), d.fire(Ja, a))
                }
                function h() {
                    fa && fa.classList.add("invisible");
                    O=!1;
                    Gator(Y).off("click", f)
                }
                Gator(e).on("mouseenter", ".progress", function(a) {
                    O || (q.requestAnimationFrame(function() {
                        fa.classList.remove("invisible");
                        O=!0
                    }), Gator(Y).on("click", f))
                }).on("mousemove", ".play-bar", function(c) {
                    if (O) {
                        var d = l(c.clientX), e = (100 * d).toFixed(3);
                        q.requestAnimationFrame(function() {
                            fa.style.left = e + "%";
                            ra.innerHTML =
                            b(a.video.duration * d);
                            c.clientX > n() + 10 && h()
                        })
                    }
                }).on("mouseleave", ".play-bar", h);
                Gator(e).on("transitionend", ".ghost-timecode", function(a) {
                    "opacity" === a.propertyName && "0" === q.getComputedStyle(this, "").opacity && (fa.style.left = 0)
                }, !1);
                d.on(c.mousedOut, h)
            })();
            (function() {
                function a(b) {
                    var c = b.clientX;
                    b.targetTouches && (c = b.targetTouches[0].clientX, b.preventDefault());
                    b = h(c);
                    d.fire(ea, b);
                    f(b)
                }
                function b(f) {
                    Q=!1;
                    d.fire(c.volumeScrubbingEnded);
                    var h = f.type;
                    "pointerup" === h || "MSPointerUp" === h ? Gator(e).off("pointermove",
                    ".volume", a).off("pointerup", ".volume", b) : "touchend" === f.type ? Gator(w).off("touchmove", a).off("touchend", b) : Gator(w).off("mousemove", a).off("mouseup", b);
                    $.setAttribute("tabindex", $.getAttribute("data-tabindex"));
                    $.removeAttribute("data-tabindex")
                }
                function f(a) {
                    if ($) {
                        var b = a / (1 / Wa.length), c = Math.ceil(b), d = b%1, e;
                        0.33 >= d && (e = "fill1");
                        0.33 < d && 0.66 >= d && (e = "fill2");
                        Wa.forEach(function(a, b) {
                            a.classList.remove("fill0");
                            a.classList.remove("fill1");
                            a.classList.remove("fill2");
                            b === c - 1 && d && 0.66 >= d ? a.classList.add(e) :
                            b > c - 1 && a.classList.add("fill0")
                        });
                        $.setAttribute("aria-valuenow", a.toFixed(3));
                        $.setAttribute("aria-valuetext", Math.round(100 * a) + "%")
                    }
                }
                function h(a) {
                    var b = $.getBoundingClientRect().left, c = $.getBoundingClientRect().right - b;
                    return s.limit((a - b) / c, 0, 1)
                }
                Gator(e).on("mouseover", ".volume div", function() {
                    var a = this;
                    a.classList.add("hover");
                    q.requestAnimationFrame(function() {
                        q.requestAnimationFrame(function() {
                            a.classList.remove("hover");
                            a.classList.add("animate")
                        })
                    })
                });
                Gator(e).on("transitionend", ".volume div",
                function(a) {
                    "height" === a.propertyName && 12 === this.clientHeight && this.classList.remove("animate")
                });
                Gator(w).on("contextmenu", ".volume", function() {
                    this.blur()
                });
                var k;
                Gator(e).on(u.pointerEvents ? "pointerdown" : ["touchstart", "mousedown"], ".volume", function(z) {
                    if (1 === z.which) {
                        $.setAttribute("data-tabindex", $.getAttribute("tabindex"));
                        $.removeAttribute("tabindex");
                        Q=!0;
                        d.fire(c.volumeScrubbingStarted);
                        var r = z.type;
                        if ("pointerdown" === r || "MSPointerDown" === r) {
                            k = z.pointerId;
                            try {
                                z.target.msSetPointerCapture ?
                                z.target.msSetPointerCapture(k) : z.target.setPointerCapture(k)
                            } catch (l) {}
                            Gator(e).on("pointermove", ".volume", a).on("pointerup", ".volume", b)
                        } else if ("touchstart" === r)
                            Gator(w).on("touchmove", a).on("touchend", b);
                        else 
                            Gator(w).on("mousemove", a).on("mouseup", b);
                        r = z.clientX;
                        z.targetTouches && (r = z.targetTouches[0].clientX);
                        z = h(r);
                        d.fire(ea, z);
                        f(z)
                    }
                });
                d.on(c.volumeChanged, function(a) {
                    !Q && Wa && f(a)
                })
            })();
            (function() {
                function a(b) {
                    Fa = b;
                    ca && (ca.setActiveItem(b), setTimeout(function() {
                        ca.hide()
                    }, 100));
                    W && (W.setActiveItem(b),
                    setTimeout(function() {
                        W.hide()
                    }, 100));
                    ga && (ga.classList.add("on"), ga.classList.remove("off"));
                    pa && (pa.classList.add("on"), pa.classList.remove("off"))
                }
                function b() {
                    Fa = null;
                    ca && (ca.setActiveItem("off"), setTimeout(function() {
                        ca.hide()
                    }, 100));
                    W && (W.setActiveItem("off"), setTimeout(function() {
                        W.hide()
                    }, 100));
                    ga && (ga.classList.add("off"), ga.classList.remove("on"));
                    pa && (pa.classList.add("off"), pa.classList.remove("on"))
                }
                s.attachClickHandler(e, ".cc", function() {
                    d.fire(c.ccButtonPressed)
                });
                d.on(c.ccButtonPressed,
                function(a) {
                    Z&&!W ? (0, W = z(pa, e), W.show(), a && pa.focus()) : ca ? a && (Z ? W : ca).toggle() && (Z ? pa : ga).focus() : (0, ca = z(ga, Y), ca.show(), a && ga.focus())
                });
                d.on(c.captionsChanged, function(c) {
                    if (c)
                        return a(c);
                    b()
                }).on(c.controlBarVisibilityChanged, function(a) {
                    a || (ca && ca.hide(), W && W.hide())
                })
            })();
            (function() {
                s.attachClickHandler(e, ".hd", function() {
                    d.fire(c.hdButtonPressed)
                });
                d.on(c.hdButtonPressed, function() {
                    if (!a.video.allow_hd)
                        return d.fire(oa, "hd-not-allowed");
                    var b = la.classList.contains("on") ? "sd": "hd";
                    d.fire(Ma,
                    b)
                });
                d.on(Ma, function(a) {
                    "hd" === a ? (la.classList.add("on"), la.classList.remove("off"), la.setAttribute("title", la.getAttribute("data-title-on"))) : (la.classList.add("off"), la.classList.remove("on"), la.setAttribute("title", la.getAttribute("data-title-off")))
                });
                d.on(Va, function() {
                    B()
                }).on(Ya, function() {
                    k=!1;
                    B()
                })
            })();
            (function() {
                u.airPlay && (s.attachClickHandler(e, ".airplay", function() {
                    d.fire(c.airPlayButtonPressed)
                }), d.on(c.airPlayAvailable, function() {
                    da && (da.classList.remove("hidden"), da.hidden=!1)
                }).on(c.airPlayNotAvailable,
                function() {
                    da && (da.classList.add("hidden"), da.hidden=!0)
                }).on(c.airPlayActivated, function() {
                    xa=!0;
                    ma.classList.add("on");
                    ma.setAttribute("title", ma.getAttribute("data-title-on"));
                    E()
                }).on(c.airPlayDeactivated, function() {
                    xa=!1;
                    ma.classList.remove("on");
                    ma.setAttribute("title", ma.getAttribute("data-title-off"))
                }))
            })();
            (function() {
                function b(a) {
                    ua && (ua.setAttribute("data-full-size", a ? "1" : "0"), ua.setAttribute("title", ua.getAttribute(a ? "data-title-full-size" : "data-title-actual-size")))
                }
                s.attachClickHandler(e,
                ".scaling", function() {
                    d.fire(c.scalingButtonPressed);
                    d.fire(La, !a.request.cookie.scaling)
                });
                d.on(La, b);
                b(a.request.cookie.scaling)
            })();
            (function() {
                s.attachClickHandler(e, ".fullscreen", function() {
                    d.fire(c.fullscreenButtonPressed)
                });
                d.on(c.didEnterFullscreen, function() {
                    ta=!0;
                    Ha.setAttribute("title", Ha.getAttribute("data-title-unfullscreen"))
                });
                d.on(c.didExitFullscreen, function(a) {
                    ta=!1;
                    Ha.setAttribute("title", Ha.getAttribute("data-title-fullscreen"));
                    t();
                    a || (I=!0, G())
                })
            })();
            (function() {
                d.on([c.mousedOver,
                c.bufferStarted, c.scrubbingStarted, ea], E).on([c.mousedOut, c.mouseTimeout], H).on(c.willEnterFullscreen, function() {
                    v=!1;
                    H()
                }).on(c.willExitFullscreen, function() {
                    v=!1
                }).on(c.targetTimeReached, function() {
                    Ca=!0;
                    H()
                }).on(ea, function(a, b) {
                    b || E()
                });
                Gator(e).on(["pointerenter", "pointerleave", "mouseenter", "mouseleave"], ".play .play-bar-cell .custom-logo-cell .tiny-fullscreen-cell .tiny-cc-cell .menu".split(" "), function(a) {
                    if ("pointerType"in a) {
                        if ("mouse" === a.pointerType || a.pointerType === a.MSPOINTER_TYPE_MOUSE)
                            v =
                            "pointerenter" === a.type || "MSPointerEnter" === a.type
                    } else 
                        v = "mouseover" === a.type
                });
                Gator(e).on("transitionend", function(b) {
                    this === e && "opacity" === b.propertyName && e.classList.contains("invisible") && (a.embed.settings.custom_logo && a.embed.settings.custom_logo.sticky || (e.classList.add("hidden"), e.setAttribute("hidden", "")), !A && M && (M.classList.remove("hidden"), M.removeAttribute("hidden")))
                });
                Gator(e.parentElement).on("focus", ".focus-dummy", function() {
                    var a = [].slice.call(e.querySelectorAll('[tabindex="' + this.getAttribute("tabindex") +
                    '"]'), 0), b = a.indexOf(this);
                    q.requestAnimationFrame(function() {
                        a[b + 1].focus()
                    })
                })
            })();
            (function() {
                d.on(c.overlayOpened, function(a) {
                    "notsupported" !== a && "private-unlocked" !== a && "help" !== a && (A=!0, H())
                }).on(c.overlayClosed, function() {
                    A=!1;
                    E()
                })
            })();
            (function() {
                d.on(c.configChanged, function(b) {
                    a = b;
                    B();
                    a.view === ja && E();
                    p = S = null
                })
            })();
            (function() {
                d.on(qa, function() {
                    G();
                    E();
                    Ca = I = f = Q = C = v = J=!1;
                    ca && (ca.destroy(), ca = null);
                    W && (W.destroy(), W = null)
                });
                Gator(q).on("resize", function() {
                    p = S = null
                })
            })();
            (function() {
                d.on(c.enteredTinyMode,
                function() {
                    Z=!0
                }).on(c.enteredMiniMode, function() {
                    Z=!1
                }).on(c.enteredNormalMode, function() {
                    Z=!1
                })
            })();
            d.on(c.playInitiated, function() {
                L();
                J=!0;
                var b = a.embed.time || a._video.currentTime;
                m(b / a.video.duration, b);
                f=!0
            });
            d.fire(c.controlBarModuleReady);
            return {}
        }
    }(), wb = function() {
        var e = 0.05, b = {
            16: "shift",
            27: "esc",
            32: "space",
            37: "left",
            38: "up",
            39: "right",
            40: "down"
        };
        return function(a, d, g) {
            function n() {
                B && "help" === L && d.fire(c.overlayCloseButtonPressed)
            }
            function l(a) {
                "number" !== typeof a.which && (a.which = a.keyCode);
                return a
            }
            function q(a) {
                if ("keypress" === a.type) {
                    var c = String.fromCharCode(a.which);
                    a.shiftKey || (c = c.toLowerCase());
                    return c
                }
                return a.which in b ? b[a.which] : String.fromCharCode(a.which).toLowerCase()
            }
            function m(a) {
                a = a.target || a.srcElement;
                return "INPUT" === a.tagName || "SELECT" === a.tagName || "TEXTAREA" === a.tagName || a.isContentEditable
            }
            function u(a) {
                a = s.isArray(a) ? a : [a];
                if (B && "help" === L) {
                    d.fire(c.overlayCloseButtonPressed);
                    if (a[0] === oa && "help" === a[1])
                        return !1;
                    if (a[0] !== Ka)
                        return setTimeout(function() {
                            d.fire.apply(null,
                            a)
                        }, 250), !1
                }
                d.fire.apply(null, a);
                return !1
            }
            function x(b, e) {
                D || (e&&!a._video.paused && d.fire(c.pauseButtonPressed), d.fire(c.scrubbingStarted, !0), D=!0);
                var h = C, f = Math.ceil(I), k = Math.ceil(J - I), h = h / v;
                h--;
                A = k * (h * h * h + 1) + f;
                C++;
                1 === C && (A = a.video.fps);
                f = e ? 1 : A;
                f = "right" === b ? f : - f;
                f = (Math["right" === b ? "ceil": "floor"](a._video.currentTime * a.video.fps) + f) / a.video.fps;
                d.fire(Ja, null, f)
            }
            function r() {
                if (k)
                    return !0;
                if (!w.activeElement || w.activeElement === w.body)
                    return d.fire(c[a._video.paused ? "playButtonPressed": "pauseButtonPressed"]),
                    n(), !1
            }
            function h() {
                if (w.activeElement && g.contains(w.activeElement))
                    return w.activeElement.blur(), !0;
                if (B)
                    return d.fire(c.overlayCloseButtonPressed), !1;
                if (k)
                    return k.hide(), k=!1
            }
            function F() {
                if (k || a.embed.on_site && w.activeElement&&!g.contains(w.activeElement))
                    return !0;
                n();
                d.fire(ea, e, !1, !0);
                return !1
            }
            function H() {
                if (k || a.embed.on_site && w.activeElement&&!g.contains(w.activeElement))
                    return !0;
                n();
                d.fire(ea, - e, !1, !0);
                return !1
            }
            function E(a, b) {
                n();
                if (w.activeElement && w.activeElement === G)
                    return d.fire(ea,
                    "left" === b?-e : e, !1, !0), !1;
                a.shiftKey || 0 === C ? x(b, a.shiftKey) : X(b, a.shiftKey)
            }
            var z=!!a.embed.on_site, G = g.querySelector(".volume"), B=!1, L, k=!1, I = a.video.fps / 5, J = Math.max(I, 0.618 * a.video.duration), v = 100, A = I, C = 0, D=!1, X = s.throttle(x, 80);
            (function() {
                d.on(c.overlayOpened, function(a) {
                    B=!0;
                    L = a;
                    "notsupported" === a && (z=!0)
                });
                d.on(c.overlayClosed, function() {
                    B=!1;
                    L = null
                })
            })();
            (function() {
                d.on(c.menuVisibilityChanged, function(a, b) {
                    k = a ? b : !1
                })
            })();
            (function() {
                d.on(c.configChanged, function(b, c) {
                    a = b;
                    c && (z=!1)
                })
            })();
            (function() {
                function e(c) {
                    l(c);
                    var d;
                    d = c.ctrlKey || c.metaKey || c.altKey?!1 : c.which in b ? "keydown" === c.type : "keypress" === c.type;
                    d&&!m(c) && (z ? 0 : a.view === ka || a.view === ja) && (d = q(c), d in k && ("function" === typeof k[d]?!1 === k[d](c, d) && (c.preventDefault(), c.stopPropagation()) : !1 === u(k[d]) && (c.preventDefault(), c.stopPropagation())))
                }
                var k = {
                    l: c.likeButtonPressed,
                    w: c.watchLaterButtonPressed,
                    s: c.shareButtonPressed,
                    c: [c.ccButtonPressed, !0],
                    h: c.hdButtonPressed,
                    f: c.fullscreenButtonPressed,
                    space: r,
                    up: F,
                    down: H,
                    left: E,
                    right: E,
                    esc: h,
                    "?": [oa, "help"]
                };
                a.embed.on_site || (k.v = Ka);
                w.addEventListener("keydown", e, !1);
                w.addEventListener("keypress", e, !1);
                w.addEventListener("keyup", function(b) {
                    l(b);
                    if (!m(b) && (z ? 0 : a.view === ka || a.view === ja)) {
                        var e = q(b);
                        if ("left" === e || "right" === e)
                            A = I, C = 0, d.fire(c.scrubbingEnded, b.shiftKey), D=!1
                    }
                }, !1)
            })();
            (function() {
                d.on(c.becameActive, function() {
                    z=!1
                }).on(c.becameInactive, function() {
                    z=!0
                });
                a.embed.on_site && w.querySelector(".player") === g && (z=!1)
            })();
            return {
                pause: function() {
                    z=!0
                },
                unpause: function() {
                    z =
                    !1
                }
            }
        }
    }(), yb = function() {
        return function(e, b, a, d) {
            function g() {
                var c = b.getBoundingClientRect(), d = a.getBoundingClientRect(), e = r.getBoundingClientRect(), h = c.left + c.width / 2 - e.width / 2 - d.left, k = a.classList.contains("play-bar") ? d.height: d.height - c.top, e = d.left + h + e.width, g = a.classList.contains("play-bar") ? d.right: d.width - parseInt(q.getComputedStyle(a).paddingRight, 10);
                e > g && (h -= e - g, c = c.left - (d.left + h) + c.width / 2, c !== H && (s.addCssRule(".player .menu::after", "left:" + c + "px", w.styleSheets[w.styleSheets.length - 1]),
                H = c));
                r.style.left = h + "px";
                r.style.bottom = k + "px"
            }
            function n(a) {
                var b = w.createElement("ul");
                b.classList.add("menu");
                b.classList.add("rounded-box");
                b.classList.add("hidden");
                b.classList.add("invisible");
                b.setAttribute("hidden", "");
                var c = w.createDocumentFragment();
                a.forEach(function(a) {
                    var b = w.createElement("li");
                    b.setAttribute("data-id", a.id);
                    b.innerHTML = '<span tabindex="' + E + '">' + a.label + "</span>";
                    a.active && (b.classList.add("active"), h = b);
                    c.appendChild(b)
                });
                b.appendChild(c);
                return b
            }
            function l() {
                r.classList.remove("hidden");
                r.removeAttribute("hidden");
                g();
                F=!0;
                d.fire(c.menuVisibilityChanged, F, u);
                q.requestAnimationFrame(function() {
                    r.classList.remove("invisible");
                    r.classList.add("open")
                })
            }
            function t() {
                F=!1;
                d.fire(c.menuVisibilityChanged, F, u);
                r.classList.add("invisible")
            }
            function m() {
                if (F)
                    return t(), !1;
                l();
                return !0
            }
            var u, x = Da.make(), r = null, h = null, F=!1, H, E = b.getAttribute("tabindex") || "0";
            (function() {
                r = n(e);
                s.attachClickHandler(r, ["li", "span"], function() {
                    x.fire("selected", ("SPAN" === this.tagName ? this.parentElement : this).getAttribute("data-id"));
                    s.resetFocus(r)
                });
                s.attachClickHandler(b, function() {
                    m()
                });
                Gator(q).on("focus", function() {
                    r.contains(w.activeElement) || w.activeElement === b || t()
                });
                Gator(b).on("keyup", function(a) {
                    if (38 === a.which && F) {
                        var b = [].slice.call(r.querySelectorAll("[tabindex]"), 0);
                        b[b.length - 1].focus();
                        a.preventDefault();
                        a.stopPropagation();
                        return !1
                    }
                });
                Gator(r).on("keyup", function(a) {
                    if (F) {
                        var c = w.activeElement;
                        switch (a.which) {
                        case 13:
                        case 32:
                            if (r.contains(c))
                                return x.fire("selected", ("SPAN" === c.tagName ? c.parentElement : c).getAttribute("data-id")),
                                a.preventDefault(), a.stopPropagation(), !1;
                            break;
                        case 38:
                        case 40:
                            var d = 38 === a.which ? "up": "down", e = [].slice.call(r.querySelectorAll("[tabindex]"), 0), c = e.indexOf(c), d = "up" === d ? c - 1: c + 1;
                            if (d >= e.length)
                                return b.focus(), a.preventDefault(), a.stopPropagation(), !1;
                            if ( - 1 < d && d < e.length)
                                return e[d].focus(), a.preventDefault(), a.stopPropagation(), !1
                        }
                    }
                });
                a.parentElement.appendChild(r)
            })();
            (function() {
                Gator(w).on("click", function(a) {
                    F&&!b.contains(a.target) && t()
                });
                Gator(r).on("transitionend", function(a) {
                    this === r &&
                    "opacity" === a.propertyName && r.classList.contains("invisible") && (r.classList.add("hidden"), r.setAttribute("hidden", ""), r.classList.remove("open"))
                });
                q.addEventListener("blur", t, !1);
                d.on(c.didExitFullscreen, t).on(c.controlBarVisibilityChanged, function(a) {
                    a || t()
                })
            })();
            return u = {
                show: l,
                hide: t,
                toggle: m,
                setActiveItem: function(a) {
                    h && h.classList.remove("active");
                    if (a = r.querySelector('[data-id="' + a + '"]'))
                        a.classList.add("active"), h = a
                },
                on: x.on,
                off: x.off,
                destroy: function() {
                    r.parentElement.removeChild(r)
                }
            }
        }
    }(),
    sb = function() {
        return function(e, b, a) {
            function d(b) {
                b = "watchlater" === b || "unwatchlater" === b ? 0.5 : 0.4;
                var c = a.clientHeight;
                a.clientHeight > a.clientWidth && (c = a.clientWidth);
                return {
                    height: Math.round(c * b),
                    width: Math.round(c * b * 1.6)
                }
            }
            function g(a, b) {
                var c = a.querySelector(".hour-hand"), d = a.querySelector(".minute-hand");
                if (c && d) {
                    var e = b ? 1: - 1, g = new Date, l = Math.abs(g.getHours() - 12), m = g.getMinutes(), g = m / 60 * 360 - 135, l = l / 12 * 360 + m / 60 * 5, n = l + 45 * e, t = g + 540 * e;
                    if (u.browser.firefox || u.browser.opera) {
                        c.setAttribute("transform",
                        "rotate(" + l + ",10 10)");
                        d.setAttribute("transform", "rotate(" + g + ",10 10)");
                        m = w.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
                        m.setAttribute("attributeName", "transform");
                        m.setAttribute("type", "rotate");
                        m.setAttribute("begin", "0.1s");
                        m.setAttribute("repeatCount", "indefinite");
                        var k = m.cloneNode(!1);
                        k.setAttribute("from", l + " 10 10");
                        k.setAttribute("to", l + 360 * e + " 10 10");
                        k.setAttribute("dur", "0.8s");
                        c.appendChild(k);
                        l = m.cloneNode(!1);
                        l.setAttribute("from", g + " 10 10");
                        l.setAttribute("to",
                        g + 360 * e + " 10 10");
                        l.setAttribute("dur", "9.6s");
                        d.appendChild(l)
                    } else 
                        c.style[u.transformProperty + "Origin"] = "46% 81.5%", d.style[u.transformProperty + "Origin"] = "25.5% 26.5%", c.style[u.transformProperty] = "rotate(" + l + "deg)", d.style[u.transformProperty] = "rotate(" + g + "deg)";
                    q.requestAnimationFrame(function() {
                        a.classList.add("animate");
                        u.browser.firefox || u.browser.opera || q.requestAnimationFrame(function() {
                            c.style[u.transformProperty] = "rotate(" + n + "deg)";
                            d.style[u.transformProperty] = "rotate(" + t + "deg)"
                        })
                    })
                }
            }
            function n(b, c) {
                a.classList.remove("hidden");
                a.removeAttribute("hidden");
                a.setAttribute("data-name", b);
                var e = d(b), e = "width:" + e.width + "px;height:" + e.height + "px";
                m.style.cssText = e;
                m.innerHTML = c;
                "watchlater" !== b && "unwatchlater" !== b || g(m, "watchlater" === b);
                "hd" === b && (m.querySelector(".hd-notification").style.cssText = e, m.querySelector(".hd-fill").style.cssText = e);
                clearTimeout(s);
                a.classList.remove("animate");
                q.requestAnimationFrame(function() {
                    a.classList.remove("invisible");
                    "hd" !== b && (s = setTimeout(l, 750))
                })
            }
            function l() {
                a.classList.add("animate");
                a.classList.add("invisible")
            }
            function t() {
                a.classList.remove("animate");
                a.classList.remove("invisible");
                a.classList.add("hidden");
                a.setAttribute("hidden", "");
                a.removeAttribute("data-name");
                m.innerHTML = "";
                m.classList.remove("filled");
                m.classList.remove("animate");
                b.fire(c.notificationHidden)
            }
            var m = a.querySelector(".notification"), s;
            (function() {
                Gator(a).on("transitionend", function(b) {
                    m.contains(b.target) && "height" === b.propertyName ? setTimeout(l, 100) : b.target ===
                    a && "opacity" === b.propertyName && q.requestAnimationFrame(t)
                })
            })();
            (function() {
                b.on(c.liked, function(a) {
                    a || n("like", Aftershave.render("icon_heart"))
                });
                b.on(c.unliked, function(a) {
                    a || n("unlike", Aftershave.render("icon_broken_heart"))
                })
            })();
            (function() {
                b.on(c.addedToWatchLater, function(a) {
                    a || n("watchlater", Aftershave.render("icon_clock"))
                });
                b.on(c.removedFromWatchLater, function(a) {
                    a || n("unwatchlater", Aftershave.render("icon_clock"))
                })
            })();
            (function() {
                b.on(Ma, function(a, b) {
                    0;
                    b || ("sd" === a && m.classList.add("filled"),
                    q.requestAnimationFrame(function() {
                        n("hd", Aftershave.render("hd_notification", {
                            stroke: Aftershave.render("icon_hd", {
                                stroke: !0,
                                notification: !0
                            }),
                            fill: Aftershave.render("icon_hd", {
                                notification: !0
                            })
                        }), !0);
                        q.requestAnimationFrame(function() {
                            "sd" === a ? m.classList.remove("filled") : m.classList.add("filled")
                        })
                    }))
                })
            })();
            (function() {
                b.on(c.configChanged, function(a) {})
            })();
            b.fire(c.notificationModuleReady);
            return {}
        }
    }(), tb = function() {
        return function(e, b, a) {
            function d(a) {
                if ("vod" === e.embed.outro)
                    m = {
                        purchased: e.user.purchased,
                        title: e.video.vod.feature_title,
                        url: e.video.vod.url,
                        buttons: e.video.vod.purchase_options,
                        preorder: e.video.vod.date_available
                    }, !0 === u && n();
                else {
                    0;
                    x=!0;
                    var b = new XMLHttpRequest;
                    b.open("GET", "//" + e.player_url + "/video/" + e.video.id + "/outro?on_site=" + e.embed.on_site, !0);
                    b.withCredentials=!0;
                    b.onload = function() {
                        try {
                            var c = JSON.parse(b.response);
                            0;
                            m = c.data;
                            if ("videos" === c.type || "promoted" === c.type) {
                                m = {
                                    contexts: s.isArray(m) ? m: [m],
                                    owner: e.video.owner.id
                                };
                                for (var c = 0, d = m.contexts.length; c < d; c++)
                                    for (var g = 0, l =
                                    m.contexts[c].videos.length; g < l; g++)(new Image)
                                        .src = m.contexts[c].videos[g].thumbnail
                            }
                            "function" === typeof a && a()
                        } catch (n) {}
                    };
                    b.send()
                }
            }
            function g() {
                var a = q.getComputedStyle(t.querySelector("header h1"), null), b = a.getPropertyValue("-webkit-line-clamp"), a = a.textOverflow;
                if (!b)
                    for (var b = t.querySelectorAll("header h1"), c = 0, d = b.length; c < d; c++)
                        if ("clip" === a)
                            for (var e = b[c], g = e.innerHTML; e.scrollHeight > e.offsetHeight;)
                                g = g.substring(0, g.length - 1), e.innerHTML = g + "&hellip;";
                        else 
                            b[c].style.display = "inherit"
            }
            function n() {
                if ("beginning" ===
                e.embed.outro)
                    return b.fire(qa);
                null !== m || x ? m && ("videos" !== e.embed.outro && "promoted" !== e.embed.outro || 0 !== m.contexts.reduce(function(a, b) {
                    return a + b.videos.length
                }, 0)) && (m.target=!e.embed.on_site, t.innerHTML = Aftershave.render("outro_" + ("promoted" === e.embed.outro ? "videos" : e.embed.outro), m), t.setAttribute("data-type", e.embed.outro), a.classList.remove("hidden"), a.removeAttribute("hidden"), "videos" === e.embed.outro && g(), q.requestAnimationFrame(function() {
                    q.requestAnimationFrame(function() {
                        a.classList.add("in");
                        var d = [];
                        if (m.contexts)
                            for (var e = 0; e < m.contexts.length; e++)
                                for (var g = 0; g < m.contexts[e].videos.length; g++) {
                                    var l = m.contexts[e].videos[g].id, n = t.querySelector('[data-video-id="' + l + '"]');
                                    n && 0 < n.clientWidth && d.push(l)
                                }
                        b.fire(c.outroDisplayed, d)
                    })
                })) : d(n)
            }
            function l() {
                q.requestAnimationFrame(function() {
                    a.classList.remove("in");
                    b.fire(c.outroHidden)
                })
            }
            var t = a.querySelector(".outro"), m = null, u=!1, x=!1;
            (function() {
                b.on(c.playProgress, function(a, b, c) {
                    u=!1;
                    !x && null === m && a >= b - 10 && d()
                })
            })();
            (function() {
                b.on(c.playInitiated,
                function() {
                    if ("nothing" === e.embed.outro || "beginning" === e.embed.outro)
                        m=!1
                });
                b.on(c.ended, function() {
                    u=!0;
                    n()
                });
                Gator(a).on("click", ".videos a", function(a) {
                    b.fire(c.outroVideoPressed, parseInt(this.getAttribute("data-video-id"), 10))
                });
                Gator(a).on("transitionend", function(b) {
                    a.classList.contains("in") || (a.classList.add("hidden"), a.setAttribute("hidden", ""))
                }, !1);
                b.on([c.played, c.seeked, c.scrubbingStarted], l)
            })();
            (function() {
                b.on(oa, function() {
                    setTimeout(function() {
                        a.classList.add("hidden")
                    }, 150)
                });
                b.on(c.overlayClosed,
                function() {
                    a.classList.contains("in") && a.classList.remove("hidden")
                })
            })();
            (function() {
                b.on(qa, function() {
                    m = null;
                    x=!1
                })
            })();
            (function() {
                b.on(c.configChanged, function(a) {
                    e = a
                })
            })();
            (function() {
                s.attachClickHandler(a, ".vod-button", function() {
                    var a = this.getAttribute("data-product-id");
                    b.fire(c.vodButtonPressed, a);
                    return !1
                });
                s.attachClickHandler(a, ".vod-watch-button", function() {
                    if (!("date_available"in e.video.vod))
                        return l(), b.fire(c.vodButtonPressed), !1
                })
            })();
            return {}
        }
    }(), lb = function() {
        var e = "Uh Oh!{D&rsquo;Oh!{Aw fiddlesticks!{Jeepers!{Oh dear!{Ouch!{Zoinks!{Awww, snap!{Blast!{Curses!{ACK!{Aw shucks.{Major bummer.{Dag-nab-it!{Aargh!{Boo-hoo!{&iexcl;Ay caramba!".split("{");
        return function(b, a, d) {
            function g() {
                var a = d.getBoundingClientRect(), b = k.getBoundingClientRect(), c = v.getBoundingClientRect();
                return a.height - (b.bottom + (a.height - b.bottom) / 2) - c.height / 2 + "px"
            }
            function n() {
                var a = d.getBoundingClientRect(), b = k.getBoundingClientRect(), c = I.getBoundingClientRect();
                0;
                0;
                0;
                var e = a.height / 2, a = b.bottom + (a.height - b.bottom) / 2;
                0;
                0;
                return {
                    top: e - c.height / 2 + "px",
                    transform: "translateY(" + (a - e) + "px)"
                }
            }
            function l(b, e) {
                0;
                d.setAttribute("data-name", b);
                k.innerHTML = e.template;
                e.modal && (d.classList.add("modal"),
                d.setAttribute("data-modal", "true"));
                e.wrapperClass && d.classList.add(e.wrapperClass);
                e.icon.type && (e.logo && (v.classList.remove("hidden"), I.classList.add("cloaked"), q.requestAnimationFrame(function() {
                    v.innerHTML = Aftershave.render("logo");
                    v.style.bottom = g()
                })), I.classList.remove("hidden"), J.innerHTML = e.icon.html, q.requestAnimationFrame(function() {
                    var a = n();
                    I.style.top = a.top;
                    I.style[u.transformProperty] = a.transform
                }), d.setAttribute("data-icon", e.icon.type), I.setAttribute("data-icon", e.icon.type), J.setAttribute("data-icon",
                e.icon.type), "private-unlocked" === b && J.classList.add("open"));
                d.classList.add("invisible");
                d.classList.remove("hidden");
                d.removeAttribute("hidden");
                d.classList.add("in");
                Q = e;
                X = b;
                D=!0;
                a.fire(c.overlayOpened, b);
                - 1 < ["share", "hd-not-allowed"].indexOf(b) && s.resetFocus(d);
                q.requestAnimationFrame(function() {
                    d.classList.remove("invisible");
                    q.requestAnimationFrame(function() {
                        k.classList.add("in");
                        L.classList.add("in")
                    })
                })
            }
            function t() {
                k.classList.remove("in");
                k.classList.add("out")
            }
            function m(b) {
                "true" !==
                d.getAttribute("data-modal") && D && (L.classList.remove("in"), L.classList.add("out"), t(), d.classList.remove("in"), d.classList.add("out"), clearTimeout(A), A = setTimeout(P, 200), b && b.preventDefault && b.preventDefault(), (b = d.querySelector(".back")) && b.classList.add("cloaked"), a.fire(c.overlayClosed), D=!1, Q = X = null)
            }
            function P() {
                d.setAttribute("hidden", "");
                d.removeAttribute("data-name");
                d.removeAttribute("data-icon");
                d.classList.add("hidden");
                d.classList.remove("out");
                d.classList.remove("embed-active");
                d.classList.remove("modal");
                d.classList.remove("embed-only");
                L.classList.remove("out");
                L.classList.remove("in");
                I.removeAttribute("data-icon");
                I.classList.add("hidden");
                I.classList.remove("animate");
                J.removeAttribute("data-icon");
                J.innerHTML = "";
                v.classList.add("hidden");
                k.classList.remove("out");
                k.innerHTML = "";
                a.fire(c.overlayCleared)
            }
            function x() {
                d.setAttribute("data-modal", "false")
            }
            function r(a) {
                if ("yes" === a.form.getAttribute("data-bubble")) {
                    a.form.setAttribute("data-bubble", "no");
                    var b = d.querySelector(".validation-bubble");
                    b.querySelector(".validation-bubble-message").innerHTML = a.validationMessage || "There is an error with this input.";
                    var c = a.getBoundingClientRect(), e = a.form.getBoundingClientRect();
                    b.style.left = c.left - e.left + "px";
                    b.style.top = c.height + 1 + "px";
                    b.classList.remove("hidden");
                    a.focus();
                    q.requestAnimationFrame(function() {
                        b.classList.add("animate")
                    });
                    h()
                }
            }
            function h(a) {
                var b = d.querySelector(".validation-bubble");
                if (b) {
                    if (a)
                        return clearTimeout(C), b.classList.remove("animate");
                    clearTimeout(C);
                    C = setTimeout(function() {
                        b.classList.remove("animate")
                    },
                    5E3)
                }
            }
            function F(a) {
                var b = d.querySelector("input[type=password]");
                if (b.form.classList.contains("submitted")) {
                    b.setAttribute("aria-invalid", "false");
                    b.setCustomValidity("");
                    if (b.checkValidity&&!b.checkValidity())
                        return b.setAttribute("aria-invalid", "true"), b.validity.valueMissing && b.setCustomValidity("Please enter the password."), a || r(b), !1;
                    h(!0);
                    return !0
                }
            }
            function H(a, b, c) {
                s.resetFocus(d);
                var e = Array.prototype.slice.call(a.querySelectorAll("input"), 0).map(function(a) {
                    if (a.name)
                        return encodeURIComponent(a.name) +
                        "=" + encodeURIComponent(a.value)
                }).join("&"), g = new XMLHttpRequest;
                g.open(a.method, a.action + q.location.search);
                g.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                g.withCredentials=!0;
                g.timeout = 3E3;
                g.onload = function() {
                    var a;
                    try {
                        a = JSON.parse(g.responseText)
                    } catch (c) {}
                    b(a, g)
                };
                g.onerror = function(a) {
                    c(a)
                };
                g.send(e)
            }
            function E() {
                I.classList.remove("cloaked");
                I.classList.add("animate");
                q.requestAnimationFrame(function() {
                    I.style[u.transformProperty] = "translateY(-10px)"
                })
            }
            function z() {
                J.classList.add("open")
            }
            function G() {
                return {
                    modal: !1,
                    template: null,
                    logo: !1,
                    icon: {
                        type: null,
                        html: null
                    }
                }
            }
            function B(a, c) {
                a.template = Aftershave.render("share", {
                    url: b.video.url,
                    shareUrl: b.video.share_url,
                    playerShareUrl: "//" + b.player_url + "/video/" + b.video.id + "/share",
                    title: b.video.title,
                    owner: b.video.owner.name,
                    embed: "public" === b.video.embed_permission && b.embed.settings.embed,
                    embedOnly: b.embed.settings.share && b.embed.settings.share.embed_only,
                    embedCode: b.video.embed_code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g,
                    "&gt;").replace(/"/g, "&quot;"),
                    copyButton: u.flash.installed,
                    customizeEmbed: !!b.video.url,
                    readOnly: !u.touch
                });
                b.embed.settings.share && b.embed.settings.share.embed_only && (a.wrapperClass = "embed-only");
                return a
            }
            var L = d.querySelector(".overlay-cell"), k = d.querySelector(".overlay"), I = d.querySelector(".overlay-icon-wrapper"), J = I.querySelector(".overlay-icon"), v = d.querySelector(".overlay-logo"), A, C, D=!1, X = null, Q = null;
            (function() {
                a.on(oa, function(d, e) {
                    0;
                    var f = function() {
                        var a = G();
                        switch (d) {
                        case "share":
                            return l(d,
                            B(a, e));
                        case "private-locked":
                            return a.icon = {
                                type: "lock",
                                html: Aftershave.render("icon_lock")
                            }, a.modal=!0, a.logo=!0, a.template = Aftershave.render("private_locked", {
                                title: "Private Video",
                                subtitle: "Log in to watch (if you have permission).",
                                action: ("dev" === b.build.rpc ? "http" : "https") + "://" + b.vimeo_url + "/log_in"
                            }), l(d, a);
                        case "hd-not-allowed":
                            return a.icon = {
                                type: "hd",
                                html: Aftershave.render("icon_hd")
                            }, a.template = Aftershave.render("hd_not_allowed", {
                                title: "Sorry, HD not available here",
                                subtitle: "Watch this video in HD on Vimeo.com",
                                button: "Watch in HD now",
                                url: b.video.url
                            }), l(d, a);
                        case "password":
                            return a.icon = {
                                type: "lock",
                                html: Aftershave.render("icon_lock")
                            }, a.template = Aftershave.render("password", {
                                title: "Password Required",
                                subtitle: "If you&rsquo;ve got it, enter it below.",
                                action: "//" + b.player_url + "/video/" + b.video.id + "/check-password"
                            }), a.modal=!0, a.logo=!!b.embed.settings.branding, l(d, a);
                        case "private-unlocked":
                            return a.icon = {
                                type: "lock",
                                html: Aftershave.render("icon_lock")
                            }, a.template = Aftershave.render("private_unlocked"),
                            l(d, a);
                        case "error":
                            return a.template = Aftershave.render("error", {
                                title: e.title,
                                message: e.message
                            }), a.modal=!!e.modal, a.logo=!!e.logo, e.icon && "lock" === e.icon && (a.icon = {
                                type: "lock",
                                html: Aftershave.render("icon_lock")
                            }), l(d, a);
                        case "help":
                            return a.template = Aftershave.render("help", {
                                onSite: b.embed.on_site
                            }), l(d, a);
                        case "content-rating":
                            return a.template = Aftershave.render("content_rating", {
                                logo: Aftershave.render("logo")
                            }), a.modal=!0, l(d, a)
                        }
                    };
                    if (D) {
                        if ("share" !== X && "help" !== X && "hd-not-allowed" !== X || X !==
                        d)
                            a.once(c.overlayCleared, f), x();
                        m()
                    } else 
                        f()
                });
                Gator(d).on("input", "input", function() {
                    this.form.classList.add("interacted")
                }).on(["focus", "blur"], "input", function() {
                    h(!0)
                }).on("transitionend", ".validation-bubble", function(a) {
                    "opacity" === a.propertyName && "0" === q.getComputedStyle(this, "").opacity && this.classList.add("hidden")
                });
                a.on([c.overlayCloseButtonPressed, c.played], m);
                a.on(c.privateUnlocked, function() {
                    "private-locked" === X && (x(), m())
                });
                a.on(c.configChanged, function(a) {
                    "share" === X && (Q = B(G(), a.embed.settings.share.embed_only),
                    k.innerHTML = Q.template)
                });
                Gator(q).on("resize", function() {
                    if (D) {
                        v.style.bottom = g();
                        var a = n();
                        I.style.top = a.top;
                        I.style[u.transformProperty] = a.transform
                    }
                })
            })();
            (function() {
                Gator(d).on("transitionend", ".overlay-logo", function(a) {
                    "opacity" === a.propertyName && this.classList.contains("animate") && (v.classList.add("hidden"), v.classList.remove("animate"))
                });
                Gator(d).on("transitionend", ".overlay-icon-wrapper", function(a) {
                    - 1 < a.propertyName.indexOf("transform") && ("" === this.style[u.transformProperty] ? (this.classList.remove("centered"),
                    "lock" !== this.getAttribute("data-icon") || J.classList.contains("open") || J.querySelector("canvas") ? J.classList.add("pulled-back") : setTimeout(z, 100)) : "translateY(-10px)" === this.style[u.transformProperty] && (I.classList.add("centered"), I.style[u.transformProperty] = ""))
                });
                Gator(d).on("transitionend", ".overlay-icon", function(a) {
                    - 1 < a.propertyName.indexOf("transform") && (this.classList.contains("out") ? (x(), m()) : this.classList.contains("pulled-back") ? (J.classList.add("out"), J.classList.remove("pulled-back")) :
                    this.classList.contains("open") && J.classList.add("pulled-back"))
                })
            })();
            (function() {
                Gator(d).on("transitionend", ".share-screen", function(a) {
                    "opacity" === a.propertyName && "0" === q.getComputedStyle(this, "").opacity && this.classList.add("cloaked")
                }).on("transitionend", ".embed-screen", function(a) {
                    "opacity" === a.propertyName && "0" === q.getComputedStyle(this, "").opacity && (d.querySelector(".back").classList.add("cloaked"), this.classList.add("cloaked"), s.resetFocus(d))
                }).on("copy", "input[name=embed_code]", function() {
                    a.fire(c.embedCodeCopied)
                });
                s.attachClickHandler(d, ".back", function() {
                    d.querySelector(".share-screen").classList.remove("cloaked");
                    d.classList.remove("embed-active");
                    return !1
                });
                s.attachClickHandler(d, ".facebook", function() {
                    a.fire(c.facebookButtonPressed, this.href);
                    w.activeElement.blur();
                    return !1
                });
                s.attachClickHandler(d, ".twitter", function() {
                    a.fire(c.twitterButtonPressed, this.href);
                    w.activeElement.blur();
                    return !1
                });
                s.attachClickHandler(d, ".email", function() {
                    a.fire(c.emailButtonPressed);
                    q.location = this.href;
                    w.activeElement.blur();
                    return !1
                });
                s.attachClickHandler(d, ".embed", function() {
                    a.fire(c.embedButtonPressed);
                    w.activeElement.blur();
                    return !1
                });
                if (u.touch)
                    Gator(k).on("focus", "input[name=embed_code]", function() {
                        0;
                        var a = this;
                        setTimeout(function() {
                            a.setSelectionRange(0, 9999);
                            a.setAttribute("readonly", "readonly")
                        }, 0)
                    }).on("blur", "input", function() {
                        this.removeAttribute("readonly")
                    });
                else 
                    Gator(k).on("click", "input[name=embed_code]", function() {
                        this.setSelectionRange(0, 9999)
                    });
                a.on(c.facebookButtonPressed, function(a) {
                    s.openWindow(a,
                    580, 400, "facebook", "scrollbars=yes,resizable=yes,toolbar=no")
                }).on(c.twitterButtonPressed, function(a) {
                    s.openWindow(a, 550, 420, "twitter", "scrollbars=yes,resizable=yes,toolbar=no")
                }).on(c.embedButtonPressed, function() {
                    function a() {
                        var e = w.getElementById("copy-button");
                        (new ZeroClipboard(e, {
                            moviePath: b.request.urls.zeroclip_swf,
                            trustedDomains: ["*"],
                            allowScriptAccess: "always"
                        })).on("complete", function(a, b) {
                            var e = w.getElementById("copy-button");
                            e.innerHTML = "Copied!";
                            clearTimeout(c);
                            c = setTimeout(function() {
                                e.innerHTML =
                                "Copy"
                            }, 2E3);
                            s.resetFocus(d)
                        })
                    }
                    b.embed.settings.share.embed_only || (d.querySelector(".back").classList.remove("cloaked"), d.querySelector(".embed-screen").classList.remove("cloaked"), d.classList.add("embed-active"));
                    var c;
                    if (u.flash.installed)
                        if (w.getElementById("zc_script_loaded"))
                            a();
                        else {
                            var e = w.createElement("script"), g;
                            e.setAttribute("id", "zc_script_loaded");
                            e.setAttribute("src", b.request.urls.zeroclip_js);
                            e.onreadystatechange = e.onload = function() {
                                g || (0, a());
                                g=!0
                            };
                            w.getElementsByTagName("head")[0].appendChild(e)
                        }
                })
            })();
            (function() {
                Gator(k).on("click", ".popup", function() {
                    a.fire(sa, "login-private-locked");
                    return !1
                })
            })();
            (function() {
                function b(d) {
                    function e(a) {
                        h.classList.remove("loading");
                        g.setCustomValidity("Uh oh. There was a problem. Please try again.");
                        g.setAttribute("aria-invalid", "true");
                        r(g)
                    }
                    if (!F())
                        return !1;
                    var g = d.querySelector("input[type=password]"), h = d.querySelector("input[type=submit]");
                    h.classList.add("loading");
                    H(d, function(b, d) {
                        if (!1 === b)
                            return e(d.status, d);
                        a.fire(c.passwordUnlocked, b);
                        "icon-hidden" ===
                        q.getComputedStyle(L, ":after").content ? (x(), m()) : (v.classList.add("animate"), E(), x(), t())
                    }, e)
                }
                Gator(k).on("click", ".password input[type=submit]", function() {
                    this.form.classList.add("submitted");
                    this.form.setAttribute("data-bubble", "yes");
                    F(!0)
                }).on("submit", ".password form", function() {
                    b(this);
                    return !1
                }).on(["focus", "input"], [".password input[type=email]", ".password input[type=password]"], function() {
                    F()
                })
            })();
            (function() {
                s.attachClickHandler(k, ".unlocked button", function() {
                    v.classList.add("animate");
                    E();
                    x();
                    t();
                    if (!u.iPad&&!u.iPhone)
                        a.once(c.overlayCleared, function() {
                            a.fire(c.playButtonPressed)
                        })
                })
            })();
            (function() {
                s.attachClickHandler(k, ".content-rating button", function() {
                    x();
                    m()
                })
            })();
            (function() {
                a.on(c.error, function(d, g) {
                    var f = d, h = g && g.title || "Sorry", k = g && g.message || "There was an issue with playback.", n =- 1 < q.location.search.indexOf("partypooper=1")||-1 < q.location.search.indexOf("fun=0");
                    switch (d) {
                    case "no-files":
                        f = "notsupported";
                        h = n ? "Sorry" : e[Math.floor(Math.random() * e.length)];
                        k = "There was an error loading the files for this video.";
                        break;
                    case "not-supported":
                        f = "notsupported";
                        h = n ? "Sorry" : e[Math.floor(Math.random() * e.length)];
                        k = "This video can&rsquo;t be played with your current setup.";
                        0.5 < b._video.currentTime && (k = "There was an issue playing this video.");
                        break;
                    case "decode":
                        f = "decode", h = "Oops!", k = "There was a problem with this video."
                    }
                    var r = G();
                    r.modal = g && g.modal ||!0;
                    r.template = Aftershave.render("error", {
                        title: h,
                        message: k
                    });
                    D ? (m(), a.once(c.overlayClosed, function() {
                        l(f, r)
                    })) : l(f, r)
                })
            })();
            (function() {
                a.on(c.configChanged, function(a) {
                    b =
                    a;
                    q.requestAnimationFrame(function() {
                        x();
                        m()
                    })
                })
            })();
            (function() {
                s.attachClickHandler(d, ".close", function() {
                    a.fire(c.overlayCloseButtonPressed)
                });
                Gator(d).on(["click", "touchend"], [".window-wrapper", ".share-wrapper", ".overlay-logo"], function(a) {
                    a.stopPropagation()
                }).on(["click", "touchend"], [".overlay-cell", "nav"], function() {
                    a.fire(c.overlayCloseButtonPressed);
                    return !1
                })
            })();
            a.fire(c.overlayModuleReady);
            return {}
        }
    }(), rb = function() {
        return function(e, b, a) {
            function d() {
                !w || D ||!(x && C || h) || r || F&&!h || (w=!1,
                b.fire(c.sidedockVisibilityChanged, w), a.classList.add("invisible"))
            }
            function g() {
                w || h || (a.classList.add("invisible"), a.classList.remove("hidden"), a.removeAttribute("hidden"), a.classList.contains("vod") && (a.classList.remove("vod"), a.setAttribute("data-vod-highlight", "no"), H.classList.remove("bouncing")), setTimeout(function() {
                    w=!0;
                    b.fire(c.sidedockVisibilityChanged, w);
                    a.classList.remove("invisible")
                }, 0))
            }
            function n(a, b, c) {
                var d = "data-label-" + c;
                a.setAttribute("aria-label", a.getAttribute("add" !== c || e.user.logged_in ?
                d : "data-label-add-logged-out"));
                b.classList.add("hidden");
                b.setAttribute("hidden", "");
                b.firstChild.innerHTML = a.getAttribute(d)
            }
            function l() {
                var a = J.indexOf(this);
                v.forEach(function(b, c) {
                    c !== a && b && b.classList.add("invisible")
                });
                0 <= a && (v[a].classList.add("invisible"), v[a].classList.remove("hidden"), v[a].removeAttribute("hidden", ""), A = q.requestAnimationFrame(function() {
                    A = q.requestAnimationFrame(function() {
                        v[a].classList.remove("invisible");
                        v[a].classList.add("visible")
                    })
                }))
            }
            function t() {
                var a = "BUTTON" ===
                this.tagName ? this: this.querySelector("button"), a = J.indexOf(a);
                0 <= a && (A && (q.cancelAnimationFrame(A), A = null), v[a].classList.add("invisible"))
            }
            function m() {
                if (e.view === ka || e.view === ja) {
                    e.video.vod && "purchase_options"in e.video.vod && e.video.vod.purchase_options.length && "no" !== a.getAttribute("data-vod-highlight")&&!e.embed.settings.instant_sidedock ? a.classList.add("vod") : u.touch && (w=!0, b.fire(c.sidedockVisibilityChanged, w), a.classList.remove("hidden"), a.removeAttribute("hidden"), a.classList.remove("invisible"));
                    var d = e.embed.settings, g = e.video.vod && "purchase_options"in e.video.vod && e.video.vod.purchase_options.length;
                    a.innerHTML = Aftershave.render("sidedock", {
                        loggedIn: !!e.user.logged_in,
                        vodButton: g && d.vod,
                        purchased: e.video.vod && e.user.purchased ? 1: 0,
                        vodLabel: g && e.video.vod.purchase_options[0].label,
                        vodPreorder: g && "date_available"in e.video.vod ? 1: 0,
                        expiring: g && e.video.vod.purchase_options[0].expiring ? 1: 0,
                        likeButton: d.like,
                        liked: e.user.liked,
                        watchLaterButton: d.watch_later,
                        addedToWatchLater: e.user.watch_later,
                        shareButton: d.share,
                        shareButtonLabel: d.share && d.share.embed_only ? "Embed": "Share"
                    });
                    H = a.querySelector(".vod-button");
                    E = a.querySelector(".vod-label");
                    "ondemand.main" !== e.embed.context || e.user.purchased || (E.classList.add("hidden"), E.classList.remove("visible"));
                    z = a.querySelector(".like-button");
                    G = a.querySelector(".like-label");
                    B = a.querySelector(".watch-later-button");
                    L = a.querySelector(".watch-later-label");
                    k = a.querySelector(".share-button");
                    I = a.querySelector(".share-label");
                    J = [H, z, B, k];
                    v = [E, G, L, I]
                }
            }
            var w=!1, x=!1, r=!1, h=!1, F=!1, H, E, z, G, B, L, k, I, J = [], v = [], A = null, C=!1, D=!1;
            m();
            (function() {
                s.attachClickHandler(a, ".vod-button", function() {
                    b.fire(c.vodButtonPressed);
                    E.classList.add("hidden");
                    E.setAttribute("hidden", "")
                }, t)
            })();
            (function() {
                s.attachClickHandler(a, ".like-button", function() {
                    b.fire(c.likeButtonPressed)
                }, t);
                b.on(c.liked, function() {
                    z && (z.classList.add("on"), n(z, G, "remove"))
                });
                b.on(c.unliked, function() {
                    z && (z.classList.remove("on"), n(z, G, "add"))
                })
            })();
            (function() {
                s.attachClickHandler(a, ".watch-later-button",
                function() {
                    b.fire(c.watchLaterButtonPressed)
                }, t);
                b.on(c.addedToWatchLater, function() {
                    B && (B.classList.add("on"), n(B, L, "remove"))
                });
                b.on(c.removedFromWatchLater, function() {
                    B && (B.classList.remove("on"), n(B, L, "add"))
                })
            })();
            (function() {
                s.attachClickHandler(a, ".share-button", function() {
                    b.fire(e.embed.settings.share.embed_only ? c.embedButtonPressed : c.shareButtonPressed)
                }, t)
            })();
            (function() {
                Gator(a).on("blur", "button", t).on("mouseleave", ".box", t).on(["focus", "pointerdown", "touchstart", "mouseenter"], "button",
                l).on("transitionend", "label", function(a) {
                    "opacity" === a.propertyName && a.target.classList.contains("invisible") && (a.target.classList.add("hidden"), a.target.setAttribute("hidden", ""), a.target.classList.remove("visible"))
                });
                s.attachClickHandler(a, "label", function() {
                    var a = v.indexOf(this);
                    0 <= a && J[a].click()
                })
            })();
            (function() {
                b.on([c.mousedOut, c.mouseTimeout], d).on(c.mousedOver, g).on(c.targetTimeReached, function() {
                    C=!0;
                    d()
                }).on(c.played, function() {
                    x=!0
                });
                Gator(a).on(["pointerenter", "pointerleave", "mouseenter",
                "mouseleave"], function(a) {
                    if ("pointerType"in a) {
                        if ("mouse" === a.pointerType || a.pointerType === a.MSPOINTER_TYPE_MOUSE)
                            r = "pointerenter" === a.type || "MSPointerEnter" === a.type
                    } else 
                        r = "mouseover" === a.type
                });
                Gator(a).on("transitionend", function(b) {
                    "opacity" === b.propertyName && a.classList.contains("invisible") && (a.classList.add("hidden"), a.setAttribute("hidden", ""))
                })
            })();
            (function() {
                b.on(c.willEnterFullscreen, function() {
                    r=!1;
                    d()
                }).on(c.didExitFullscreen, function(a) {
                    a || (D=!0)
                })
            })();
            (function() {
                b.on(c.airPlayActivated,
                function() {
                    F=!0;
                    g()
                }).on(c.airPlayDeactivated, function() {
                    F=!1
                })
            })();
            (function() {
                b.on(c.overlayOpened, function() {
                    h=!0;
                    r=!1;
                    d()
                }).on(c.overlayClosed, function() {
                    h=!1;
                    g()
                })
            })();
            (function() {
                b.on(c.configChanged, function(b, c) {
                    e = b;
                    c && a.removeAttribute("data-vod-highlight");
                    m()
                })
            })();
            (function() {
                b.on(qa, function() {
                    C = r=!1;
                    d();
                    D = r = x=!1
                })
            })();
            b.fire(c.sidedockModuleReady);
            return {}
        }
    }(), mb = function() {
        return function(e, b) {
            function a(a) {
                return Object.keys(a).map(function(b) {
                    return encodeURIComponent(b) + "=" + encodeURIComponent(a[b])
                }).join("&")
            }
            function d(c, d, g, h) {
                b.fire(Na);
                if (t)
                    F.push([c, d, g, 0]);
                else {
                    d.signature = e.request.signature;
                    d.session = e.request.session;
                    d.time = e.request.timestamp;
                    d.expires = e.request.expires;
                    var l = a(d), m = new XMLHttpRequest;
                    m.open("POST", "//" + e.player_url + c, !g);
                    m.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    m.withCredentials=!0;
                    m.onload = function() {
                        200 !== m.status && 2 > h && F.push([c, d, g, h + 1])
                    };
                    m.send(l)
                }
            }
            function g(a, b, c) {
                d(a, {
                    referrer: e.request.referrer,
                    embed: !e.embed.on_site,
                    context: e.embed.context,
                    id: e.video.id,
                    vodId: e.video.vod && e.video.vod.id ? e.video.vod.id: null,
                    userId: e.user.id,
                    userAccountType: e.user.account_type,
                    userIsMod: e.user.mod ? 1: 0,
                    ownerId: e.video.owner.id,
                    ownerAccountType: e.video.owner.account_type,
                    privacy: e.video.privacy,
                    rating: e.video.rating ? e.video.rating.id: null,
                    type: e._video.currentRenderer,
                    videoFileId: e._video.currentFile.id || 0,
                    delivery: e._video.currentFile.hls ? "hls": "progressive",
                    quality: e._video.currentFile.quality,
                    duration: s.round(e.video.duration),
                    seconds: s.round(b)
                }, c)
            }
            function n(a, b) {
                e.request.flags.partials && e.request.flags.plays && (a = Math.round(1E3 * a) / 1E3 || 0, a > m&&!u && (0, m = a, g("/log/partial", a, b)))
            }
            function l(a, b) {
                if (e.request.flags.dnt)
                    0;
                else {
                    b = b || {};
                    var c = {
                        referrer: e.request.referrer,
                        embed: !e.embed.on_site,
                        context: e.embed.context,
                        id: e.video.id,
                        vodId: e.video.vod && e.video.vod.id ? e.video.vod.id: null,
                        userId: e.user.id,
                        userAccountType: e.user.account_type,
                        ownerId: e.video.owner ? e.video.owner.id: 0,
                        duration: s.round(e.video.duration),
                        seconds: s.round(e._video.currentTime)
                    },
                    g;
                    for (g in b)
                        b.hasOwnProperty(g) && (c[g] = b[g]);
                    d("/log/" + a, c)
                }
            }
            var t=!1, m = 0, u=!1, x = 0, r=!1, h, F = [];
            h = {};
            (function() {
                b.on(c.playProgress, function(a, b, c) {
                    b = Math.floor(a);
                    0 !== b%30 || h[b] || (n(a), h[b]=!0)
                });
                b.on(c.playInitiated, function() {
                    !r && e.request.flags.plays && (r=!0, g("/log/play", 0))
                });
                b.on(c.paused, function(a) {
                    n(a)
                });
                b.on(c.seeked, function(a, b, c) {
                    x = a;
                    u || n(x)
                });
                b.on(c.scrubbingStarted, function() {
                    u=!0
                });
                b.on(c.scrubbingEnded, function() {
                    u=!1;
                    n(x)
                });
                b.on(c.hdButtonPressed, function() {
                    n(e._video.currentTime)
                });
                b.on(c.ended, function() {
                    n(e.video.duration)
                });
                q.addEventListener("beforeunload", function() {
                    e._video && 0 < e._video.currentTime && n(e._video.currentTime, !0)
                })
            })();
            (function() {
                function a(b) {
                    return function() {
                        l(b)
                    }
                }
                e.request.flags.dnt ? 0 : ([{
                    type: "share_press",
                    event: c.shareButtonPressed
                }, {
                    type: "facebook_press",
                    event: c.facebookButtonPressed
                }, {
                    type: "twitter_press",
                    event: c.twitterButtonPressed
                }, {
                    type: "email_press",
                    event: c.emailButtonPressed
                }, {
                    type: "embed_press",
                    event: c.embedButtonPressed
                }, {
                    type: "login_success",
                    event: c.userLoggedIn
                }, {
                    type: "airplay",
                    event: c.airPlayActivated
                }, {
                    type: "vod_press",
                    event: c.vodButtonPressed
                }
                ].forEach(function(c) {
                    b.on(c.event, a(c.type))
                }), b.on(c.outroDisplayed, function(a) {
                    var b = {
                        outroType: e.embed.outro,
                        ownerAccountType: e.video.owner.account_type
                    };
                    a.length && (b.outroVideos = a.join(","));
                    l("outro_displayed", b)
                }).on(c.outroVideoPressed, function(a) {
                    l("outro_video_press", {
                        ownerAccountType: e.video.owner.account_type,
                        videoId: a
                    })
                }).on(c.likeButtonPressed, function() {
                    l("like_press", {
                        add: !e.user.liked
                    })
                }).on(c.watchLaterButtonPressed,
                function() {
                    l("watch_later_press", {
                        add: !e.user.watch_later
                    })
                }).on(c.popupOpened, function(a) {
                    0 === a.indexOf("login-") && l("login_attempt")
                }))
            })();
            (function() {
                b.on(c.signatureExpired, function() {
                    t=!0
                });
                b.on(c.requestConfigReloaded, function(a) {
                    e.request = a;
                    t=!1;
                    if (0 < F.length)
                        for (a = F.shift(); a;)
                            d.apply(null, a), a = F.shift()
                });
                b.on(c.configChanged, function(a, b) {
                    e = a;
                    b && (m = 0, u = r=!1, h = {})
                })
            })();
            (function() {
                var a = ["not-supported", "decode", "network", "aborted", "unknown"];
                b.on(c.error, function(b, c) {
                    0 <= a.indexOf(b) &&
                    d("/log/" + b.replace("-", "") + "_error", {
                        id: e.video.id,
                        context: e.embed.context
                    })
                })
            })();
            b.fire(c.statsModuleReady);
            return {}
        }
    }(), xb = function(e) {
        var b = ["hd", "scaling", "volume", "captions"];
        return function(a, d) {
            function g(a) {
                if (h.loaded)
                    try {
                        h.frame.contentWindow.postMessage(a, h.origin), q.postMessage(a, q.location.origin)
                } catch (b) {} else 
                    h.queue.push(a)
            }
            function n(b, e) {
                switch (b) {
                case "sync_hd":
                    a.video.allow_hd && d.fire(Ma, 1 === e ? "hd" : "sd", !0);
                    break;
                case "sync_scaling":
                    d.fire(La, !!e);
                    break;
                case "sync_volume":
                    d.fire(ea,
                    e, !0);
                    break;
                case "sync_captions":
                    if (null === e) {
                        d.fire(Ta, !0);
                        break
                    }
                    d.fire(Sa, e, !0);
                    break;
                case "sync_login":
                    e&&!a.user.logged_in ? d.fire(c.userLogIn) : !e && a.user.logged_in && d.fire(c.userLoggedOut);
                    break;
                case "sync_active":
                    null !== e && e !== a.request.session && d.fire(c.becameInactive)
                }
            }
            function l(a) {
                return !0 === a ||!1 === a?+a : "null" === a ? null : a
            }
            function t(a) {
                var b = w.cookie;
                return b && "" !== b ? b.split(";").reduce(function(b, c) {
                    c = c.trim();
                    return 0 === c.indexOf(a + "=") ? decodeURIComponent(c.substr(a.length + 1)) : b
                }, null) :
                null
            }
            function m(c, d) {
                d = l(d);
                0 <= b.indexOf(c) && (a.request.cookie[c] = d);
                g({
                    method: "set",
                    key: "sync_" + c,
                    val: d,
                    session: a.request.session
                });
                var e = [];
                0 <= b.indexOf(c) && e.push(c + "=" + d);
                var h = s(b), m;
                for (m in h)
                    m in h && null !== h[m] && m !== c && e.push(m + "=" + h[m]);
                e = '"' + e.join("&") + '"';
                h = new Date;
                h.setFullYear(h.getFullYear() + 1);
                h = h.toGMTString();
                e = l(e);
                e = "player=" + e + ";" + ("expires=" + h + ";");
                e += "path=/;";
                e += "domain=" + a.request.cookie_domain + ";";
                w.cookie = e
            }
            function s(a) {
                var b = t("player");
                if (!b)
                    return null;
                var b = b.substring(1,
                b.length - 1), c = {};
                b.split("&").forEach(function(a) {
                    a = a.split("=");
                    c[a[0]] = decodeURIComponent(a[1] || "")
                });
                var b = [].concat(a), d = b.reduce(function(a, b) {
                    if (b in c) {
                        var d = parseFloat(c[b]);
                        a[b] = isNaN(d) ? c[b] : d;
                        return a
                    }
                    a[b] = null;
                    return a
                }, {});
                return 1 === b.length ? d[a] : d
            }
            function x(b) {
                b && (a = b);
                m("login", !!a.user.logged_in)
            }
            if (!e.localStorageProxy) {
                var r = w.createElement("a");
                r.href = a.request.urls.proxy;
                e.localStorageProxy = {
                    src: r.href,
                    origin: r.origin || r.protocol.replace(":", "") + "://" + r.host,
                    loaded: !1,
                    queue: [],
                    frame: null,
                    loadTimeout: null,
                    pingTimeout: null
                }
            }
            var h = e.localStorageProxy;
            x();
            (function() {
                d.on(c.qualityChanged, function(b, c) {
                    a.request.cookie.hd = "hd" === b ? 1 : 0;
                    c || m("hd", "hd" === b)
                })
            })();
            (function() {
                d.on(La, function(a) {
                    m("scaling", !!a)
                })
            })();
            (function() {
                d.on(c.volumeChanged, function(b, c) {
                    a.request.cookie.volume = l(b);
                    c || m("volume", b)
                })
            })();
            (function() {
                d.on(c.captionsChanged, function(b, c) {
                    a.request.cookie.captions = l(b);
                    c || m("captions", b)
                })
            })();
            (function() {
                d.on(c.playButtonPressed, function(b) {
                    b || (m("active",
                    a.request.session), d.fire(c.becameActive))
                });
                d.on([c.pauseButtonPressed, c.ended], function() {
                    s("active") === a.request.session && m("active", null)
                })
            })();
            (function() {
                d.on(c.userLoggedIn, function() {
                    m("login", !0)
                })
            })();
            (function() {
                if (!h.frame) {
                    var a = w.createElement("iframe");
                    a.src = h.src;
                    a.setAttribute("title", "Vimeo LocalStorage Proxy");
                    a.setAttribute("aria-hidden", "true");
                    a.setAttribute("hidden", "");
                    a.onload = function(b) {
                        h.loaded || (a.contentWindow.postMessage({
                            method: "ping"
                        }, h.origin), h.pingTimeout = setTimeout(function() {
                            0
                        },
                        500));
                        h.loadTimeout && (clearTimeout(h.loadTimeout), h.loadTimeout = null)
                    };
                    h.loadTimeout = setTimeout(function() {
                        0
                    }, 1E4);
                    w.body.appendChild(a);
                    h.frame = a
                }
            })();
            (function() {
                q.addEventListener("message", function(b) {
                    if (b.origin === h.origin)
                        if ("ready" === b.data || "ping" === b.data) {
                            if (!h.loaded)
                                for (clearTimeout(h.pingTimeout)
                                    , h.pingTimeout = null, h.loaded=!0;
                                    h.queue.length;
                                    )b = h.queue.shift(), g(b)
                        } else 
                            "object" === typeof b.data && "key"in b.data && "newValue"in b.data && n(b.data.key, b.data.newValue);
                        else 
                            b.origin === q.location.origin &&
                            b.data.session !== a.request.session && n(b.data.key, b.data.val)
                }, !1)
            })();
            (function() {
                b.concat("login", "active").forEach(function(a) {
                    try {
                        q.localStorage.removeItem(a)
                    } catch (b) {}
                })
            })();
            return {
                reset: x
            }
        }
    }(ib), ub = function() {
        return function(e, b) {
            var a = null;
            (function() {
                b.on(sa, function(d, g) {
                    var n = "//" + e.player_url, l = n + "/video/" + e.video.id, q = 670, m = 545;
                    switch (d) {
                    case "login-like":
                        a = s.openWindow(l + "/login/like", q, m, "login");
                        b.fire(c.popupOpened, d);
                        break;
                    case "login-watch-later":
                        a = s.openWindow(l + "/login/watch-later",
                        q, m, "login");
                        b.fire(c.popupOpened, d);
                        break;
                    case "login-private-locked":
                        a = s.openWindow(l + "/login/private", q, m, "login");
                        b.fire(c.popupOpened, d);
                        break;
                    case "purchase":
                        n = n + "/video/" + (e.video.vod.feature_id || e.video.id) + "/purchase/vod", q = 790, m = 670, g && g.productId && (n += "/" + g.productId), n += "?referrer=" + encodeURIComponent(e.request.referrer), a = s.openWindow(n, q, m, "purchase"), b.fire(c.popupOpened, d)
                    }
                });
                q.closePopup = function() {
                    if (a) {
                        try {
                            a.close()
                        } catch (b) {}
                        a = null
                    }
                }
            })();
            (function() {
                e.embed.on_site || (q.confirmPurchase =
                function(a, e, n) {
                    if (e)
                        return b.fire(za, a);
                    n && b.fire(c.playButtonPressed)
                })
            })();
            (function() {
                e.embed.on_site || (q.confirmLoginAction = function(a, e) {
                    b.fire(c.userLogIn, e)
                })
            })();
            return {}
        }
    }(), u = function() {
        function c(a) {
            return RegExp(a.toLowerCase()).test(b)
        }
        var b = navigator.userAgent.toLowerCase(), a = c("android") ? parseFloat(b.replace(/^.* android (\d+)\.(\d+).*$/, "$1.$2")) ||!0: !1, d = q.devicePixelRatio || 1, g = c("windows phone") || c("iemobile") ? parseFloat(b.replace(/^.* windows phone (os )?(\d+)\.(\d+).*$/, "$2.$3")) ||
        !0: !1, n = c("msie") ? parseFloat(b.replace(/^.*msie (\d+).*$/, "$1")): !1, l = c("trident") ? parseFloat(b.replace(/^.*trident\/(\d+)\.(\d+).*$/, "$1.$2")) + 4: !1, t = c("ipad;") || c("iphone;") || c("ipod touch;") ? parseFloat(b.replace(/^.* os (\d+)_(\d+).*$/, "$1.$2")): !1;
        return {
            airPlay: "WebKitPlaybackTargetAvailabilityEvent"in q,
            android: a,
            iOS: t,
            mobileAndroid: a && c("mobile"),
            browser: {
                bb10: c("bb10"),
                chrome: c("chrome"),
                firefox: c("firefox"),
                ie: n || l,
                opera: c("opera"),
                safari: c("safari") && c("apple")&&!c("chrome")&&!c("android")
            },
            devicePixelRatio: d,
            flash: function() {
                var a = navigator, b=!1, c = [0, 0, 0], d = null;
                if ("undefined" !== typeof a.plugins && "object" === typeof a.plugins["Shockwave Flash"])!(d = a.plugins["Shockwave Flash"].description) || "undefined" !== typeof a.mimeTypes && a.mimeTypes["application/x-shockwave-flash"]&&!a.mimeTypes["application/x-shockwave-flash"].enabledPlugin || (b=!0, d = d.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), c[0] = parseInt(d.replace(/^(.*)\..*$/, "$1"), 10), c[1] = parseInt(d.replace(/^.*\.(.*)\s.*$/, "$1"), 10), c[2] = /[a-zA-Z]/.test(d) ?
                parseInt(d.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
                else if ("undefined" !== typeof q.ActiveXObject)
                    try {
                        var e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                        e && (d = e.GetVariable("$version")) && (b=!0, d = d.split(" ")[1].split(","), c = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)])
                } catch (g) {}
                return {
                    installed: b,
                    version: c.join("."),
                    major: c[0],
                    minor: c[1],
                    revision: c[2],
                    versionAtLeast: function(a, b, d) {
                        a = a || 10;
                        b = b || 1;
                        d = d || 0;
                        for (var e = c, g = arguments, h = Math.min(e.length, g.length), k = 0; k < h; k++) {
                            if (e[k] >= g[k]) {
                                if (k +
                                1 < h && e[k] === g[k])
                                    continue;
                                return !0
                            }
                            return !1
                        }
                    }
                }
            }(),
            iPhone: c("iphone;") || c("ipod touch;"),
            iPad: c("ipad;"),
            iPadNonRetina: c("ipad;") && 2 > d,
            mac: c("mac os"),
            pointerEvents: q.navigator.pointerEnabled || q.navigator.msPointerEnabled ||!1,
            svg: !!w.createElementNS&&!!w.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
            touch: "ontouchstart"in q || q.DocumentTouch && w instanceof DocumentTouch || c("windows phone") || 1 < q.navigator.maxTouchPoints || q.navigator.msMaxTouchPoints ||!1,
            transformProperty: function(a) {
                var b =
                w.createElement("div"), c = a.charAt(0).toUpperCase() + a.slice(1);
                a = (a + " " + ["Webkit", "Moz", "O", "ms"].join(c + " ") + c).split(" ");
                for (var d in a)
                    if (c = a[d], b.style[c] !== V)
                        return c
            }("transform"),
            windowsPhone: g
        }
    }(), pb = function() {
        return function(e, b, a) {
            function d() {
                a.classList.remove("hidden");
                a.removeAttribute("hidden");
                setTimeout(function() {
                    q=!0;
                    a.classList.remove("invisible")
                }, 0)
            }
            function g() {
                q && (s || w ||!(x ||!r || h && m)) && (q=!1, a.classList.add("invisible"))
            }
            function n() {
                if (!q && h&&!H&&!w && (x ||!r&&!s || e.embed.settings.info_on_pause &&
                h&&!s))
                    return d()
            }
            function l() {
                if (e.view === ka || e.view === ja) {
                    var b = {
                        targetBlank: 0 === e.embed.on_site,
                        linkToOwner: null !== e.video.owner.url,
                        ownerLink: e.video.owner.url,
                        showPortrait: !!e.embed.settings.portrait,
                        portraitImg: e.video.owner[1 < u.devicePixelRatio ? "img_2x": "img"],
                        showTitle: !!e.embed.settings.title,
                        showTitleLink: null !== e.video.url,
                        titleLink: e.video.url,
                        title: e.video.title,
                        showByline: !!e.embed.settings.byline,
                        owner: e.video.owner.name
                    };
                    e.embed.settings.byline_badge && (b.bylineBadge = {
                        cssClass: e.embed.settings.byline_badge.type,
                        link: e.embed.settings.byline_badge.url ||!1
                    });
                    var c = e.embed.settings.badge;
                    if (c) {
                        var d = 1 < u.devicePixelRatio ? "img_2x": "img";
                        u.svg && c.svg && (d = "svg");
                        b.showPortrait=!1;
                        b.badge = {
                            link: c.link,
                            img: c[d],
                            offset: c.offset ||!1,
                            width: c.width,
                            height: c.height,
                            name: c.name
                        }
                    }
                    e.embed.autoplay && (a.classList.add("hidden"), a.setAttribute("hidden", ""));
                    a.innerHTML = Aftershave.render("title", b)
                }
            }
            var q=!0, m=!1, s=!1, x=!1, r=!1, h=!0, w=!1, H=!1, E=!1;
            l();
            (function() {
                b.on([c.mousedOut, c.mouseTimeout], g).on(c.mousedOver, n).on(c.playInitiated,
                function() {
                    r=!0;
                    h=!1;
                    g()
                }).on([c.playButtonPressed, c.played], function() {
                    H = h=!1;
                    g()
                }).on(c.paused, function(a, b) {
                    b || (h=!0, n())
                }).on(c.ended, function() {
                    w=!0;
                    g()
                }).on(c.scrubbingStarted, function() {
                    E = h;
                    H=!0
                }).on(c.scrubbingEnded, function() {
                    E && (H=!1)
                }).on(c.willEnterFullscreen, function() {
                    g()
                }).on(c.didExitFullscreen, function(a) {
                    a || n()
                });
                Gator(a).on(["pointerenter", "pointerleave", "mouseenter", "mouseleave"], function(a) {
                    if ("pointerType"in a) {
                        if ("mouse" === a.pointerType || a.pointerType === a.MSPOINTER_TYPE_MOUSE)
                            m =
                            "pointerenter" === a.type || "MSPointerEnter" === a.type
                    } else 
                        m = "mouseover" === a.type
                });
                Gator(a).on("transitionend", function(b) {
                    "opacity" === b.propertyName && a.classList.contains("invisible") && (a.classList.add("hidden"), a.setAttribute("hidden", ""))
                }, !1)
            })();
            (function() {
                b.on(c.ended, function(a) {
                    g()
                })
            })();
            (function() {
                b.on(c.airPlayActivated, function() {
                    x=!0;
                    n()
                }).on(c.airPlayDeactivated, function() {
                    x=!1;
                    g()
                })
            })();
            (function() {
                b.on(c.overlayOpened, function(a) {
                    "notsupported" !== a && "private-unlocked" !== a && "help" !==
                    a && (s=!0, m=!1, g())
                }).on(c.overlayClosed, function() {
                    m = s=!1;
                    setTimeout(n, 0)
                })
            })();
            (function() {
                b.on(c.configChanged, function(a) {
                    e = a;
                    l();
                    e.view === ja && n()
                })
            })();
            (function() {
                b.on(qa, function() {
                    r=!1;
                    h=!0;
                    H = w=!1;
                    n()
                })
            })();
            b.fire(c.titleModuleReady);
            return {}
        }
    }(), hb = function() {
        function e(a) {
            a = /^(?:(\d{2,}):)?(\d{2}):(\d{2})[,.](\d{3})$/.exec(a);
            if (!a)
                return - 1;
            var b = parseInt(a[4], 10) / 1E3, b = b + parseInt(a[3], 10);
            a[2] && (b += 60 * parseInt(a[2], 10));
            a[1] && (b += 3600 * parseInt(a[1], 10));
            return b
        }
        function b(a) {
            var b = 0;
            a =
            a.split(/(?:(?:\r\n|\n){2,})/);
            var c = [], n = null;
            do 
                0 === b && /^\uFEFF?WEBVTT(?: .*)?/.test(a[b]) && b++, (n = /^(?:(.*)(?:\r\n|\n))?([\d:,.]+) --\x3e ([\d:,.]+)(.*)?(?:\r\n|\n)([\s\S]*)/.exec(a[b])) && c.push({
                    startTime: e(n[2]),
                    endTime: e(n[3]),
                    text: n[5]
                }), b++;
            while (b < a.length);
            return c
        }
        return function(a, d, e) {
            function n(a) {
                var b = {}, c, d;
                for (d in a.codecs)
                    if (c = a.codecs[d], a[c])
                        for (var e in a[c]) {
                            var g;
                            if (g = a[c].hasOwnProperty(e))
                                g = Z ? "h264" === c ? 2 <= f ? "" !== Z.h264.high : "" === ("mobile" === e ? Z.h264.baseline : Z.h264.high) ||
                                2 > f && "1080p" === e && ba?!1 : !0 : "vp8" === c ? "" !== Z.webm : void 0 : !1, g = g&&!(u.iPadNonRetina && 921600 < a[c][e].width * a[c][e].height);
                                g && (b[e] = a[c][e], b[e].quality = e)
                        }
                0;
                return b
            }
            function l(a) {
                var b = {}, c, d;
                for (d in a.codecs)
                    if (c = a.codecs[d], a[c])
                        for (var e in a[c])
                            a[c].hasOwnProperty(e) && (b[e] = a[c][e], b[e].quality = e);
                0;
                return b
            }
            function t() {
                d.fire(c.bufferStarted);
                na = va=!0;
                R || a._video.currentFile.hls || p.pause()
            }
            function m() {
                p.preload = "";
                K || v();
                aa || S.classList.remove("cloaked");
                ua ? (d.fire(c.error, ua), I(), A()) : (d.fire(Na),
                T || (0, ma || p.load(), d.fire(c.playInitiated), t(), T=!0, u.android&&!u.browser.chrome && p.play()), N = Y=!0, R && (Ga=!0, d.fire(Za)), ma && P())
            }
            function P() {
                ra || Ba || (Fa = va=!1, N && p.paused && (0, da && r(da, function() {
                    da = null
                }), p.play()))
            }
            function x(a) {
                var b = p.duration;
                b && a > b && (a = b);
                if (0 < p.seekable.length)
                    for (var b = 0, c = p.seekable.length; b < c; b++)
                        if (p.seekable.start(b) <= a && p.seekable.end(b) >= a)
                            return !0;
                return !1
            }
            function r(b, c) {
                x(b) ? (b = s.limit(b, 0, (p.duration || a.duration) - 0.01), p.currentTime = b, a._video.currentTime = b, c &&
                c()) : (Ia = b, sa = c, Aa || (Ea.events.forEach(function(a) {
                    p.addEventListener(a, h, !1)
                }), Aa=!0))
            }
            function h() {
                Ia && x(Ia) && (Ea.events.forEach(function(a) {
                    p.removeEventListener(a, h, !1)
                }), Aa=!1, Ia = s.limit(Ia, 0, (p.duration || a.duration) - 0.01), p.currentTime = Ia, a._video.currentTime = Ia, sa && sa(), P(), sa = Ia = null)
            }
            function F(a, b, c, d) {
                return a + b
            }
            function H() {
                if (p.buffered.length) {
                    var a = (new Date).getTime(), b = p.buffered.end(p.buffered.length - 1);
                    la || (la = a);
                    ga.push(b - pa);
                    ga = ga.slice( - 10);
                    ca = ga.reduce(F) / ga.length;
                    ka = null;
                    la = a;
                    pa = b;
                    ka=!0;
                    Math.round(b) !== Math.round(p.duration) ? ka = setTimeout(H, 1E3) : 0
                }
            }
            function E(a, b) {
                var c = a.length - 1;
                if (1 < a.length)
                    for (var d = 0, e = a.length; d < e; d++)
                        if (a.start(d) <= b && a.end(d) >= b) {
                            c = d;
                            break
                        }
                return c
            }
            function z(b) {
                T && ($ || ($ = (new Date).getTime()), ka || H());
                if (!xa && p.buffered && 0 < p.buffered.length) {
                    b = b || p.currentTime;
                    b = E(p.buffered, b);
                    b = p.buffered.end(b);
                    var e = b / p.duration;
                    a._video.loadProgress = b;
                    d.fire(c.loadProgress, b, p.duration, e);
                    na && (N && b === p.duration ? P() : (p.duration - p.buffered.end(p.buffered.length -
                    1)) / ca + 2 <= p.duration - p.currentTime && (0, P()))
                }
            }
            function G(a) {
                var b = ["hd", "sd", "mobile"];
                for (a = b.indexOf(a); 3 > a; a++) {
                    var c = b[a];
                    if (U[c])
                        return U[c];
                    if (y[c])
                        return y[c]
                }
                return null
            }
            function B(a, b) {
                !T || p.ended ? (J(G(a)), d.fire(c.qualityChanged, a, b)) : (xa=!0, da || (da = p.currentTime), N=!p.paused, Fa=!0, p.pause(), t(), d.once(c.notificationHidden, function() {
                    k(a, b)
                }))
            }
            function L() {
                M || (S.insertAdjacentHTML("beforebegin", '<canvas class="snapshot"></canvas>'), M = e.querySelector(".snapshot"));
                var b = M.getContext("2d");
                if (b && p.canvasImageSource) {
                    M.setAttribute("width", p.videoWidth + "px");
                    M.setAttribute("height", p.videoHeight + "px");
                    var c = 0, d = 0, f = 0, h = 0, f = ha.clientWidth, h = ha.clientHeight, k = a.video.width / a.video.height;
                    f / h >= k ? (d = h, c = (k * h).toFixed(2)) : (c = f, d = (f / k).toFixed(2));
                    f = Math.max((f - c) / 2, 0);
                    h = Math.max((h - d) / 2, 0);
                    M.style.cssText = "width:" + c + "px;height:" + d + "px;left:" + f + "px;top:" + h + "px";
                    b.drawImage(p.canvasImageSource, 0, 0, M.width, M.height);
                    M.classList.remove("hidden")
                }
            }
            function k(a, b) {
                L();
                J(G(a));
                p.load();
                d.fire(c.qualityChanged,
                a, b);
                r(da, function() {
                    xa=!1
                })
            }
            function I() {
                ha.style.backgroundImage = "url(" + ha.getAttribute("data-thumb") + ")"
            }
            function J(b) {
                if (b && (ma=!1, a._video.currentFile = b, p.src = a._video.currentFile.url, a._video.currentRenderer = p.renderer, 0 < b.bitrate && K && K.setCurrentBitrate(b.bitrate), !Ka)) {
                    b = p.volume;
                    p.volume = 0.999;
                    if (0.999 !== s.round(p.volume) || u.android)
                        0, d.fire(Ya);
                    p.volume = b;
                    Ka=!0
                }
            }
            function v() {
                if ("undefined" === typeof Conviva)
                    0, Ha=!0;
                else {
                    Ha=!1;
                    var b = Conviva.ConvivaContentInfo.createInfoForLightSession("[" +
                    a.video.id + "] " + a.video.title + " from " + a.video.owner.name), c = a._video.currentFile.cdn || "akamai";
                    0;
                    b.cdnName = Conviva.ConvivaContentInfo[{
                        akamai: "CDN_NAME_AKAMAI",
                        fastly: "CDN_NAME_FASTLY",
                        level3: "CDN_NAME_LEVEL3"
                    }
                    [c]];
                    b.streamUrl = a._video.currentFile.url;
                    b.isLive=!!a._video.currentFile.hls;
                    b.playerName = "HTML";
                    b.tags = {
                        location: a.embed.on_site ? "on_site": "embed",
                        context: a.embed.context,
                        player_type: "html",
                        player_sub_type: p.renderer,
                        player_version: a.request.build.js,
                        build_num: a.build.player,
                        profile_id: a._video.currentFile.profile,
                        availability_id: a._video.currentFile.availability,
                        video_quality: a._video.currentFile.quality,
                        delivery_method: a._video.currentFile.hls ? "hls": "progressive",
                        user_account_type: a.user.account_type,
                        owner_account_type: a.video.owner.account_type,
                        auto_play: a.embed.autoplay,
                        is_vod: a.video.vod ? a.video.vod.is_feature: 0,
                        purchased_status: a.user.purchased || 0,
                        origin: a._video.currentFile.origin || "unknown",
                        secure: "https:" === w.location.protocol ? 1: 0
                    };
                    K = Conviva.LivePass.createSession(p, b);
                    0 < a._video.currentFile.bitrate &&
                    K.setCurrentBitrate(a._video.currentFile.bitrate);
                    K.setContentLength(a.video.duration)
                }
            }
            function A() {
                K && (Conviva.LivePass.cleanupMonitoringSession(p), K = null)
            }
            function C(a) {
                for (var b=!1, c = null, d = a.split(".")[0], e = d.substr(0, 2), f = null, g = null, h = p.textTracks, k = 0, l = h.length; k < l; k++) {
                    var m = h[k].language + "." + h[k].kind;
                    if (m === a)
                        b=!0, c = m, f = h[k];
                    else if (h[k].mode = $a, !b) {
                        var n = h[k].language === e;
                        if (h[k].language === d ||!c && n)
                            c = m, g = h[k]
                    }
                }
                !b && g && (f = g);
                !ma && u.browser.firefox && (Da = c, f = null);
                f && (f.mode = Ua);
                return {
                    track: f,
                    id: c
                }
            }
            function D(a) {
                a = a.target;
                if (a.mode === ab&&!Ga) {
                    if (a.language + "." + a.kind !== ya) {
                        0;
                        a.mode = $a;
                        return 
                    }
                    0;
                    a.mode = Ua
                }
                var b = a.activeCues, e = [], f;
                if (b && 0 < b.length)
                    for (var g = 0, h = a.activeCues.length; g < h; g++)
                        "" !== b[g].text.replace(/^\s+|\s+$/gm, "") && (f = w.createElement("span"), f.appendChild(b[g].getCueAsHTML()), e.push({
                            html: f.innerHTML.replace("\n", "<br>"),
                            text: b[g].text
                        }));
                d.fire(c.cueChanged, a.id, e)
            }
            function X() {
                if (0 === Object.keys(U).length && 0 === Object.keys(y).length)
                    d.fire(c.error, "no-files");
                else {
                    var b =
                    a.video.hd && a.video.allow_hd, e = b && (null === a.request.cookie.hd ? a.video.default_to_hd : a.request.cookie.hd);
                    if (u.touch && 2E3 > screen.width) {
                        if (Z.hls && a.request.files.hls)
                            return a.video.hd=!1, d.fire(Va), J({
                                cdn: a.request.files.hls.cdn,
                                url: a.request.files.hls.all,
                                origin: a.request.files.hls.origin,
                                quality: "sd",
                                hls: !0
                            });
                        b && (u.windowsPhone || u.android && u.mobileAndroid || u.browser.bb10 ? 0 : Z.h264.high) ? b = G(e ? "hd" : "sd") : (a.video.hd=!1, d.fire(Va), b = G("sd"))
                    } else 
                        b = G(e ? "hd" : "sd");
                    if (!b)
                        return d.fire(c.error, "not-supported");
                    J(b)
                }
            }
            function Q() {
                if ("text_tracks"in a.request && 0 < a.request.text_tracks.length)
                    a.request.text_tracks.forEach(function(a) {
                        if (ja)
                            p.addTextTrack(a.kind, a.label, a.lang).addEventListener("cuechange", D);
                        else {
                            var b = w.createElement("track");
                            b.setAttribute("data-id", a.id);
                            b.setAttribute("src", u.browser.firefox ? a.direct_url : a.url);
                            b.setAttribute("kind", a.kind);
                            b.setAttribute("srclang", a.lang);
                            b.setAttribute("label", a.label);
                            p.appendChild(b);
                            Ea.support.cueChange && b.track.addEventListener("cuechange", D)
                        }
                    });
                else {
                    for (; p.firstChild;)
                        p.removeChild(p.firstChild);
                    d.fire(c.cueChanged, null, [])
                }
            }
            function O() {
                "Conviva"in q ? Conviva.LivePass.init(a.request.urls.conviva_service, a.request.conviva_account, function(a) {
                    0 === a.code ? (0, Ha && (0, v()), Array.prototype.slice.call(w.querySelectorAll("iframe")).forEach(function(a) {
                        a.getAttribute("id") && 0 === a.getAttribute("id").indexOf("_convivaRemoteFrame") && (a.setAttribute("title", "Conviva Communication Proxy"), a.setAttribute("aria-hidden", "true"), a.setAttribute("hidden", ""))
                    })) :
                    0
                }) : 0
            }
            var V=!1, f = u.devicePixelRatio, Z = Ea.support.video, ba = u.touch, U, y, ha = e.querySelector(".video"), S = e.querySelector(".flideo"), p = null, M = null, K = null, R = u.mobileAndroid || u.android&&!u.browser.chrome&&!u.browser.firefox&&!u.browser.opera || u.windowsPhone || 8 <= u.iOS&&!u.iPad, aa = 8 <= u.iOS&&!u.iPad, ja = u.browser.ie || 8 <= u.iOS, Y=!1, N=!1, T=!1, oa=!1, na=!1, va=!1, ia=!1, wa=!1, fa=!1, ra=!1, $, ka, la, ga = [], ca = 0, pa = 0, W, Fa=!1, da, ma=!1, xa=!0, ua = null, Ha=!1, Ia = null, sa = null, Aa=!1, Ba=!1, Ga=!1, za=!1, Ka=!1, ya = null, Da = null, Xa = [],
            Pa = 0, Qa = 0;
            a._video = {};
            a._video.paused=!0;
            a._video.ended=!1;
            a._video.currentTime = 0;
            a._video.loadProgress = 0;
            a._video.currentFile = {};
            var Ra = "undefined" !== typeof TextTrack ? TextTrack: {}, $a = "DISABLED"in Ra ? Ra.DISABLED: "disabled", Ua = "HIDDEN"in Ra ? Ra.HIDDEN: "hidden", ab = "SHOWING"in Ra ? Ra.SHOWING: "showing";
            S.classList.add("cloaked");
            U = n(a.request.files);
            y = l(a.request.files);
            (function() {
                if (a.request.flags.conviva&&!("Conviva"in q)) {
                    var b = w.getElementsByTagName("script")[0], c = w.createElement("script"), d=!1;
                    c.src =
                    a.request.urls.conviva;
                    c.async=!0;
                    b.parentNode.insertBefore(c, b);
                    c["onreadystatechange"in c ? "onreadystatechange": "onload"] = function() {
                        d || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (d=!0, Conviva && Conviva.LivePass.toggleTraces(!1), O())
                    }
                }
            })();
            p = new Ea(S, {
                swf: a.request.urls.flideo
            });
            p.preload = "none";
            if (R || 8 <= u.iOS)
                p.preload = "metadata";
            (function() {
                d.on(c.mousedOver, function() {
                    V ||!a.request.flags.preload_video || ma || "metadata" === p.preload || (p.preload = "metadata")
                })
            })();
            (function() {
                p.addEventListener("loadedmetadata",
                function(b) {
                    ma=!0;
                    Da && (ya = C(Da).id, Da = null);
                    b = p.duration;
                    isFinite(b) && 0 < b && (a.video.duration = b);
                    a.video.video_width = p.videoWidth;
                    a.video.video_height = p.videoHeight;
                    N && (p.preload = "")
                });
                p.addEventListener("durationchange", function(b) {
                    b = p.duration;
                    isFinite(b) && 0 < b && (a.video.duration = b);
                    K && K.setContentLength(a.video.duration)
                });
                p.addEventListener("waiting", function() {
                    wa || u.browser.firefox || t()
                }, !1);
                p.addEventListener("canplay", function() {
                    oa=!0;
                    if (a.embed.autoplay || N || Y&&!T)
                        0, P()
                }, !1);
                p.addEventListener("canplaythrough",
                function() {
                    (va || N && p.paused) && P()
                }, !1);
                p.addEventListener("progress", function(a) {
                    z()
                }, !1)
            })();
            (function() {
                d.on(c.playInitiated, function() {
                    aa || S.classList.remove("cloaked");
                    e.classList.remove("invisible")
                }).on(c.playButtonPressed, m).on(c.pauseButtonPressed, function() {
                    N=!1;
                    p.pause()
                }).on(c.becameInactive, function() {
                    0 > q.location.search.indexOf("autopause=0")&&!p.paused && (N=!1, p.pause())
                });
                p.addEventListener("play", function(b) {
                    xa=!1;
                    T || oa ? (S.classList.remove("invisible"), d.fire(c.played, p.currentTime),
                    a._video.paused=!1, a._video.ended=!1) : (d.fire(c.playInitiated), N = Y = T=!0)
                }, !1);
                p.addEventListener("pause", function(b) {
                    a._video.paused=!0;
                    !T || va || ra || Fa || d.fire(c.paused, p.currentTime, p.ended);
                    W && (clearTimeout(W), W = null)
                }, !1);
                p.addEventListener("playing", function(a) {
                    T || (d.fire(c.playInitiated), T=!0);
                    z();
                    ia=!0
                }, !1);
                p.addEventListener("timeupdate", function(b) {
                    b = p.currentTime;
                    a._video.currentRenderer = p.renderer;
                    T && 0 < b&&!fa&&!Ga && (clearTimeout(W), W = setTimeout(function() {
                        !1 !== p.paused || fa || Ga || (0, t())
                    },
                    2E3));
                    ia && na && 0 < b && (0, ia=!1, na && (d.fire(c.bufferEnded), na = va=!1));
                    if (0 < p.buffered.length&&!na) {
                        var e = E(p.buffered, b), e = p.buffered.end(e);
                        if (!Ga && 0 < b && b < p.duration && e === b) {
                            0;
                            t();
                            return 
                        }
                    }
                    xa || (e = p.duration, d.fire(c.playProgress, b, e, b / e), a._video.currentTime = b, da && b > da && (da = null));
                    M && (M.classList.add("hidden"), M = null);
                    if (Ea.support.textTracks&&!Ea.support.cueChange) {
                        b = p.textTracks;
                        for (var e = 0, f = b.length; e < f; e++)
                            if (b[e].mode === Ua) {
                                if (Xa.length !== b[e].activeCues.length) {
                                    D({
                                        target: b[e]
                                    });
                                    Xa = [].slice.call(b[e].activeCues);
                                    break
                                }
                                for (var g = 0, h = b[e].activeCues.length; g < h; g++)
                                    if (b[e].activeCues[g].startTime !== Xa[g].startTime) {
                                        D({
                                            target: b[e]
                                        });
                                        Xa = [].slice.call(b[e].activeCues);
                                        break
                                    }
                            }
                    }
                }, !1);
                p.addEventListener("ended", function(b) {
                    ra || (a.embed.loop ? p.play() : (d.fire(c.ended), N=!1, a._video.paused=!0, a._video.ended=!0))
                }, !1)
            })();
            (function() {
                var b=!1;
                q.addEventListener("beforeunload", function() {
                    b=!0
                });
                p.addEventListener("error", function(e) {
                    if (!b && e.target.error) {
                        var f = a._video.currentFile ? a._video.currentFile.quality: null;
                        if (null !==
                        p.currentSrc && f)
                            switch (K || v(), e.target.error.code) {
                            case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                                0;
                                e = f;
                                U[f] && y[f] && U[f].url !== y[f].url || (delete y[f], e = null, "hd" === f ? e = "sd" : "sd" === f && (e = "mobile"));
                                delete U[f];
                                a._video.currentFile = G(e);
                                0;
                                if (a._video.currentFile) {
                                    J(a._video.currentFile);
                                    break
                                }
                                Y && K && K.reportError(Conviva.ConvivaLightSession.ERROR_STREAMING_FAILURE);
                                if ("metadata" === p.preload) {
                                    0;
                                    ua = "not-supported";
                                    break
                                }
                                d.fire(c.error, "not-supported");
                                ua = "not-supported";
                                A();
                                break;
                            case e.target.error.MEDIA_ERR_DECODE:
                                0;
                                d.fire(c.error, "decode");
                                K && (K.reportError(Conviva.ConvivaLightSession.ERROR_STREAMING_FAILURE), A());
                                break;
                            case e.target.error.MEDIA_ERR_NETWORK:
                                0;
                                d.fire(c.error, "network");
                                K && (K.reportError(Conviva.ConvivaLightSession.ERROR_CONNECTION_FAILURE), A());
                                break;
                            case e.target.error.MEDIA_ERR_ABORTED:
                                0;
                                break;
                            default:
                                0, d.fire(c.error, "unknown"), K && (K.reportError(Conviva.ConvivaLightSession.ERROR_STREAMING_FAILURE), A())
                            } else 
                                0
                        }
                })
            })();
            (function() {
                function b() {
                    var a = w.createElement("style");
                    w.querySelector("head").appendChild(a);
                    f = a.sheet
                }
                function c() {
                    var d = (p.videoHeight || a.video.height) / (q.devicePixelRatio || 1), e = Math.min((p.videoWidth || a.video.width) / (q.devicePixelRatio || 1), screen.width), d = Math.min(d, screen.height);
                    if (Qa !== e || Pa !== d) {
                        var g = "width:" + e + "px;", g = g + ("height:" + d + "px;"), g = g + ("margin-left:-" + (e / 2).toFixed(2) + "px;"), g = g + ("margin-top:-" + (d / 2).toFixed(2) + "px;"), g = g + "top:50%;", g = g + "left:50%;";
                        f || b();
                        [".player:-webkit-full-screen .video-wrapper .video.native-size", ".player:-moz-full-screen .video-wrapper .video.native-size",
                        ".player:-ms-fullscreen .video-wrapper .video.native-size", ".player:fullscreen .video-wrapper .video.native-size"].forEach(function(a) {
                            s.addCssRule(a, g, f)
                        });
                        Pa = d;
                        for (Qa = e; 1 < f.cssRules.length;)
                            f.deleteRule(0)
                    }
                }
                function e(a) {
                    a ? ha.classList.remove("native-size") : (c(), ha.classList.add("native-size"))
                }
                var f;
                p.addEventListener("loadedmetadata", function() {
                    c()
                });
                d.on(La, e);
                e(a.request.cookie.scaling)
            })();
            (function() {
                d.on(8, function(b) {
                    a.embed.loop=!!b;
                    p.loop=!!b
                });
                d.fire(8, a.embed.loop)
            })();
            (function() {
                d.on(c.scrubbingStarted,
                function() {
                    N=!p.paused;
                    ra = fa=!0;
                    p.pause();
                    clearTimeout(W)
                });
                d.on(c.scrubbingEnded, function(a) {
                    ra=!1;
                    a || P()
                });
                d.on(Ja, function(b, e) {
                    e || (e = (p.duration || a.video.duration) * s.limit(b, 0, 1));
                    e = s.limit(e, 0, p.duration || a.video.duration);
                    T || (d.fire(c.playButtonPressed), N = Y = T=!0);
                    r(e, function() {
                        d.fire(c.seeked, p.currentTime, p.duration, p.currentTime / p.duration)
                    })
                });
                p.addEventListener("seeking", function() {
                    wa=!0
                }, !1);
                p.addEventListener("seeked", function() {
                    z();
                    fa = wa=!1;
                    p.readyState !== HTMLMediaElement.HAVE_ENOUGH_DATA ||
                    ra || P()
                }, !1)
            })();
            (function() {
                d.on(ea, function(a, b, e) {
                    e && (a += p.volume);
                    p.volume = s.limit(a, 0, 1);
                    d.fire(c.volumeChanged, s.limit(a, 0, 1), b)
                });
                d.fire(ea, a.request.cookie.volume, !0)
            })();
            (function() {
                d.on(Ma, function(a, b) {
                    "hd" === a ? (0, B("hd", b)) : (0, B("sd", b))
                })
            })();
            (function() {
                d.on(c.overlayOpened, function() {
                    Ba=!0;
                    T&&!za && (N=!p.paused, p.pause())
                });
                d.on(c.overlayClosed, function() {
                    Ba=!1;
                    N&&!za && P()
                })
            })();
            (function() {
                d.on(c.didEnterFullscreen, function(a, b) {
                    a || (aa || S.classList.remove("cloaked"), T || u.browser.safari ||
                    (p.poster = ha.getAttribute("data-thumb")), Ga=!0);
                    !b && u.windowsPhone && d.fire(Oa, !0)
                });
                d.on(c.didExitFullscreen, function(a) {
                    p.poster = "";
                    T || S.classList.add("cloaked");
                    Ga=!1;
                    R && p.pause();
                    !a && aa && q.requestAnimationFrame(function() {
                        L();
                        q.requestAnimationFrame(L)
                    })
                });
                d.on(c.playInitiated, function() {
                    p.poster = ""
                })
            })();
            (function() {
                d.on(Oa, function(a) {
                    a ? (p.controls=!0, e.classList.add("native-controls")) : (p.controls=!1, e.classList.remove("native-controls"))
                })
            })();
            (function() {
                d.on(c.signatureExpired, function() {
                    V =
                    !0;
                    da = p.currentTime
                });
                d.on(c.requestConfigReloaded, function(b) {
                    a.request = b;
                    V=!1;
                    U = n(a.request.files);
                    y = l(a.request.files);
                    1 === p.buffered.length && p.buffered.end(0) === p.duration || X();
                    N && p.paused && P()
                });
                d.on(c.configChanged, function(b, c) {
                    var d = a._video.currentFile;
                    a = b;
                    U = n(a.request.files);
                    y = l(a.request.files);
                    a._video = {
                        paused: p.paused,
                        ended: p.ended,
                        currentTime: p.currentTime,
                        currentFile: d,
                        currentRenderer: p.renderer
                    };
                    z()
                })
            })();
            (function() {
                Gator(S).on("transitionend", function(a) {
                    "opacity" === a.propertyName &&
                    "0" === q.getComputedStyle(this, "").opacity && S.classList.remove("transition")
                }, !1);
                d.on(qa, function(b) {
                    0;
                    xa=!0;
                    p.paused || (p.pause(), d.fire(c.paused, p.currentTime));
                    I();
                    S.classList.add("transition");
                    S.classList.add("invisible");
                    N = T=!1;
                    ua = null;
                    a._video.paused=!0;
                    a._video.ended=!1;
                    a._video.currentTime = 0;
                    a._video.loadProgress = 0;
                    setTimeout(function() {
                        p.currentTime = 0
                    }, 300);
                    b && (p.preload = "none", X(), A(), Q())
                })
            })();
            X();
            (function() {
                0 < a.embed.time && r(a.embed.time, function() {
                    a.embed.time = 0
                })
            })();
            (function() {
                u.airPlay &&
                (0, p.addEventListener("webkitplaybacktargetavailabilitychanged", function(a) {
                    switch (a.availability) {
                    case "available":
                        0;
                        d.fire(c.airPlayAvailable);
                        break;
                    case "not-available":
                        0, d.fire(c.airPlayNotAvailable)
                    }
                }), p.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", function(a) {
                    if (p.webkitCurrentPlaybackTargetIsWireless)
                        return za=!0, d.fire(c.airPlayActivated);
                    za=!1;
                    d.fire(c.airPlayDeactivated)
                }), d.on(c.airPlayButtonPressed, function() {
                    p.webkitShowPlaybackTargetPicker()
                }))
            })();
            (function() {
                Ea.support.textTracks &&
                (d.on(c.didEnterFullscreen, function(a) {
                    var b = p.textTracks;
                    Ga=!a;
                    if (!a && 0 < b.length) {
                        a = 0;
                        for (var c = b.length; a < c; a++)
                            b[a].mode === Ua && (b[a].mode = ab)
                    }
                }).on(c.didExitFullscreen, function() {
                    var a = p.textTracks;
                    Ga=!1;
                    if (0 < a.length)
                        for (var b = 0, e = a.length; b < e; b++)
                            if (a[b].mode === ab) {
                                a[b].mode = Ua;
                                var f = a[b].language + "." + a[b].kind;
                                f !== ya && (ya = f, d.fire(c.captionsChanged, ya))
                            }
                }).on(Sa, function(e) {
                    if (ya !== e) {
                        var f = C(e);
                        ya = f.id;
                        if (f.track && 0 === f.track.cues.length && ja) {
                            var g = a.request.text_tracks.reduce(function(a, b) {
                                return b.lang +
                                "." + b.kind === f.id ? b.direct_url : a
                            }, "");
                            0;
                            var h = new XMLHttpRequest;
                            h.open("GET", g, !0);
                            h.onload = function() {
                                b(h.responseText).forEach(function(a) {
                                    a = new TextTrackCue(a.startTime, a.endTime, a.text);
                                    f.track.addCue(a)
                                })
                            };
                            h.send()
                        }
                        f.track && D({
                            target: f.track
                        });
                        g=!1;
                        ya !== e && (g=!0);
                        d.fire(c.captionsChanged, ya, g)
                    }
                }).on(Ta, function() {
                    for (var a = p.textTracks, b = 0, e = a.length; b < e; b++)
                        a[b].mode = $a;
                    ya = null;
                    d.fire(c.cueChanged, null, []);
                    d.fire(c.captionsChanged, null)
                }), Q(), "text_tracks"in a.request && 0 < a.request.text_tracks.length &&
                (null !== a.request.cookie.captions ? d.fire(Sa, a.request.cookie.captions, !0) : d.fire(Ta, !0)))
            })();
            a.embed.autoplay && (p.preload = "", Y=!0, d.fire(c.playButtonPressed));
            d.fire(c.videoModuleReady)
        }
    }();
    q.VimeoPlayer = ib
})(window, document);

