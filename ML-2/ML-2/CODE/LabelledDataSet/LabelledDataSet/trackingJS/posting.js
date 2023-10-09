/*! scripts/vendor/markdown_converter/markdown_converter.js */
var Markdown;
if (typeof exports === "object" && typeof require === "function") {
    Markdown = exports
} else {
    Markdown = {}
}(function() {
    function c(e) {
        return e
    }
    function d(e) {
        return false
    }
    function b() {}
    b.prototype = {
        chain: function(g, f) {
            var e = this[g];
            if (!e) {
                throw new Error("unknown hook " + g)
            }
            if (e === c) {
                this[g] = f
            } else {
                this[g] = function(h) {
                    return f(e(h))
                }
            }
        },
        set: function(f, e) {
            if (!this[f]) {
                throw new Error("unknown hook " + f)
            }
            this[f] = e
        },
        addNoop: function(e) {
            this[e] = c
        },
        addFalse: function(e) {
            this[e] = d
        }
    };
    Markdown.HookCollection = b;
    function a() {}
    a.prototype = {
        set: function(e, f) {
            this["s_" + e] = f
        },
        get: function(e) {
            return this["s_" + e]
        }
    };
    Markdown.Converter = function() {
        var j = this.hooks = new b();
        j.addNoop("plainLinkText");
        j.addNoop("preConversion");
        j.addNoop("postConversion");
        var w;
        var n;
        var e;
        var z;
        this.makeHtml = function(P) {
            if (w) {
                throw new Error("Recursive call to converter.makeHtml")
            }
            w = new a();
            n = new a();
            e = [];
            z = 0;
            P = j.preConversion(P);
            P = P.replace(/~/g, "~T");
            P = P.replace(/\$/g, "~D");
            P = P.replace(/\r\n/g, "\n");
            P = P.replace(/\r/g, "\n");
            P = "\n\n" + P + "\n\n";
            P = J(P);
            P = P.replace(/^[ \t]+$/mg, "");
            P = o(P);
            P = m(P);
            P = f(P);
            P = M(P);
            P = P.replace(/~D/g, "$$");
            P = P.replace(/~T/g, "~");
            P = j.postConversion(P);
            e = n = w = null;
            return P
        };
        function m(P) {
            P = P.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm, function(S, U, T, R, Q, V) {
                U = U.toLowerCase();
                w.set(U, C(T));
                if (Q) {
                    return R
                } else {
                    if (V) {
                        n.set(U, V.replace(/"/g, "&quot;"))
                    }
                }
                return ""
            });
            return P
        }
        function o(R) {
            var Q = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del";
            var P = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math";
            R = R.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm, O);
            R = R.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm, O);
            R = R.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, O);
            R = R.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>\-]|-[^>])(?:[^\-]|-[^\-])*)--)>[ \t]*(?=\n{2,}))/g, O);
            R = R.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, O);
            return R
        }
        function O(P, Q) {
            var R = Q;
            R = R.replace(/^\n+/, "");
            R = R.replace(/\n+$/g, "");
            R = "\n\n~K" + (e.push(R) - 1) + "K\n\n";
            return R
        }
        function f(R, Q) {
            R = i(R);
            var P = "<hr />\n";
            R = R.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, P);
            R = R.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm, P);
            R = R.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm, P);
            R = L(R);
            R = q(R);
            R = g(R);
            R = o(R);
            R = I(R, Q);
            return R
        }
        function k(P) {
            P = r(P);
            P = v(P);
            P = H(P);
            P = D(P);
            P = E(P);
            P = K(P);
            P = P.replace(/~P/g, "://");
            P = C(P);
            P = x(P);
            P = P.replace(/ {2,}\n/g, " <br>\n");
            return P
        }
        function v(Q) {
            var P = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>\-]|-[^>])(?:[^\-]|-[^\-])*)--)>)/gi;
            Q = Q.replace(P, function(S) {
                var R = S.replace(/(.)<\/?code>(?=.)/g, "$1`");
                R = y(R, S.charAt(1) == "!" ? "\\`*_/" : "\\`*_");
                return R
            });
            return Q
        }
        function E(P) {
            P = P.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, h);
            P = P.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()\s])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, h);
            P = P.replace(/(\[([^\[\]]+)\])()()()()()/g, h);
            return P
        }
        function h(V, ab, aa, Z, Y, X, U, T) {
            if (T === undefined) {
                T = ""
            }
            var S = ab;
            var Q = aa.replace(/:\/\//g, "~P");
            var R = Z.toLowerCase();
            var P = Y;
            var W = T;
            if (P === "") {
                if (R === "") {
                    R = Q.toLowerCase().replace(/ ?\n/g, " ")
                }
                P = "#" + R;
                if (w.get(R) !== undefined) {
                    P = w.get(R);
                    if (n.get(R) !== undefined) {
                        W = n.get(R)
                    }
                } else {
                    if (S.search(/\(\s*\)$/m)>-1) {
                        P = ""
                    } else {
                        return S
                    }
                }
            }
            P = A(P);
            P = y(P, "*_");
            var ac = '<a href="' + P + '"';
            if (W !== "") {
                W = G(W);
                W = y(W, "*_");
                ac += ' title="' + W + '"'
            }
            ac += ">" + Q + "</a>";
            return ac
        }
        function D(P) {
            P = P.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, F);
            P = P.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, F);
            return P
        }
        function G(P) {
            return P.replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;")
        }
        function F(V, ab, aa, Z, Y, X, U, T) {
            var S = ab;
            var R = aa;
            var Q = Z.toLowerCase();
            var P = Y;
            var W = T;
            if (!W) {
                W = ""
            }
            if (P === "") {
                if (Q === "") {
                    Q = R.toLowerCase().replace(/ ?\n/g, " ")
                }
                P = "#" + Q;
                if (w.get(Q) !== undefined) {
                    P = w.get(Q);
                    if (n.get(Q) !== undefined) {
                        W = n.get(Q)
                    }
                } else {
                    return S
                }
            }
            R = y(G(R), "*_[]()");
            P = y(P, "*_");
            var ac = '<img src="' + P + '" alt="' + R + '"';
            W = G(W);
            W = y(W, "*_");
            ac += ' title="' + W + '"';
            ac += " />";
            return ac
        }
        function i(P) {
            P = P.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm, function(Q, R) {
                return "<h1>" + k(R) + "</h1>\n\n"
            });
            P = P.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm, function(R, Q) {
                return "<h2>" + k(Q) + "</h2>\n\n"
            });
            P = P.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm, function(Q, T, S) {
                var R = T.length;
                return "<h" + R + ">" + k(S) + "</h" + R + ">\n\n"
            });
            return P
        }
        function L(Q) {
            Q += "~0";
            var P = /^(([ ]{0,3}([*+\-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+\-]|\d+[.])[ \t]+)))/gm;
            if (z) {
                Q = Q.replace(P, function(S, V, U) {
                    var W = V;
                    var T = (U.search(/[*+\-]/g)>-1) ? "ul": "ol";
                    var R = l(W, T);
                    R = R.replace(/\s+$/, "");
                    R = "<" + T + ">" + R + "</" + T + ">\n";
                    return R
                })
            } else {
                P = /(\n\n|^\n?)(([ ]{0,3}([*+\-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+\-]|\d+[.])[ \t]+)))/g;
                Q = Q.replace(P, function(T, X, V, S) {
                    var W = X;
                    var Y = V;
                    var U = (S.search(/[*+\-]/g)>-1) ? "ul": "ol";
                    var R = l(Y, U);
                    R = W + "<" + U + ">\n" + R + "</" + U + ">\n";
                    return R
                })
            }
            Q = Q.replace(/~0/, "");
            return Q
        }
        var p = {
            ol: "\\d+[.]",
            ul: "[*+-]"
        };
        function l(R, Q) {
            z++;
            R = R.replace(/\n{2,}$/, "\n");
            R += "~0";
            var P = p[Q];
            var S = new RegExp("(^[ \\t]*)(" + P + ")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1(" + P + ")[ \\t]+))", "gm");
            var T = false;
            R = R.replace(S, function(V, X, W, U) {
                var aa = U;
                var ab = X;
                var Z = /\n\n$/.test(aa);
                var Y = Z || aa.search(/\n{2,}/)>-1;
                if (Y || T) {
                    aa = f(t(aa), true)
                } else {
                    aa = L(t(aa));
                    aa = aa.replace(/\n$/, "");
                    aa = k(aa)
                }
                T = Z;
                return "<li>" + aa + "</li>\n"
            });
            R = R.replace(/~0/g, "");
            z--;
            return R
        }
        function q(P) {
            P += "~0";
            P = P.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g, function(Q, S, R) {
                var T = S;
                var U = R;
                T = B(t(T));
                T = J(T);
                T = T.replace(/^\n+/g, "");
                T = T.replace(/\n+$/g, "");
                T = "<pre><code>" + T + "\n</code></pre>";
                return "\n\n" + T + "\n\n" + U
            });
            P = P.replace(/~0/, "");
            return P
        }
        function N(P) {
            P = P.replace(/(^\n+|\n+$)/g, "");
            return "\n\n~K" + (e.push(P) - 1) + "K\n\n"
        }
        function r(P) {
            P = P.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(S, U, T, R, Q) {
                var V = R;
                V = V.replace(/^([ \t]*)/g, "");
                V = V.replace(/[ \t]*$/g, "");
                V = B(V);
                V = V.replace(/:\/\//g, "~P");
                return U + "<code>" + V + "</code>"
            });
            return P
        }
        function B(P) {
            P = P.replace(/&/g, "&amp;");
            P = P.replace(/</g, "&lt;");
            P = P.replace(/>/g, "&gt;");
            P = y(P, "*_{}[]\\", false);
            return P
        }
        function x(P) {
            P = P.replace(/([\W_]|^)(\*\*|__)(?=\S)([^\r]*?\S[\*_]*)\2([\W_]|$)/g, "$1<strong>$3</strong>$4");
            P = P.replace(/([\W_]|^)(\*|_)(?=\S)([^\r\*_]*?\S)\2([\W_]|$)/g, "$1<em>$3</em>$4");
            return P
        }
        function g(P) {
            P = P.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm, function(Q, R) {
                var S = R;
                S = S.replace(/^[ \t]*>[ \t]?/gm, "~0");
                S = S.replace(/~0/g, "");
                S = S.replace(/^[ \t]+$/gm, "");
                S = f(S);
                S = S.replace(/(^|\n)/g, "$1  ");
                S = S.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(T, U) {
                    var V = U;
                    V = V.replace(/^ {2}/mg, "~0");
                    V = V.replace(/~0/g, "");
                    return V
                });
                return N("<blockquote>\n" + S + "\n</blockquote>")
            });
            return P
        }
        function I(W, P) {
            W = W.replace(/^\n+/g, "");
            W = W.replace(/\n+$/g, "");
            var X = W.split(/\n{2,}/g);
            var U = [];
            var Q = /~K(\d+)K/;
            var R = X.length;
            for (var S = 0; S < R; S++) {
                var T = X[S];
                if (Q.test(T)) {
                    U.push(T)
                } else {
                    if (/\S/.test(T)) {
                        T = k(T);
                        T = T.replace(/^([ \t]*)/g, "<p>");
                        T += "</p>";
                        U.push(T)
                    }
                }
            }
            if (!P) {
                R = U.length;
                for (S = 0; S < R; S++) {
                    var V = true;
                    while (V) {
                        V = false;
                        U[S] = U[S].replace(/~K(\d+)K/g, function(Y, Z) {
                            V = true;
                            return e[Z]
                        })
                    }
                }
            }
            return U.join("\n\n")
        }
        function C(P) {
            P = P.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;");
            P = P.replace(/<(?![a-z\/?\$!])/gi, "&lt;");
            return P
        }
        function H(P) {
            P = P.replace(/\\(\\)/g, s);
            P = P.replace(/\\([`*_{}\[\]()>#+-.!])/g, s);
            return P
        }
        function K(Q) {
            Q = Q.replace(/(^|\s)(https?|ftp)(:\/\/[\-A-Z0-9+&@#\/%?=~_|\[\]\(\)!:,\.;]*[\-A-Z0-9+&@#\/%=~_|\[\]])($|\W)/gi, "$1<$2$3>$4");
            var P = function(S, R) {
                return '<a href="' + R + '">' + j.plainLinkText(R) + "</a>"
            };
            Q = Q.replace(/<((https?|ftp):[^'">\s]+)>/gi, P);
            return Q
        }
        function M(P) {
            P = P.replace(/~E(\d+)E/g, function(Q, S) {
                var R = parseInt(S, 10);
                return String.fromCharCode(R)
            });
            return P
        }
        function t(P) {
            P = P.replace(/^(\t|[ ]{1,4})/gm, "~0");
            P = P.replace(/~0/g, "");
            return P
        }
        function J(S) {
            if (!/\t/.test(S)) {
                return S
            }
            var R = ["    ", "   ", "  ", " "], Q = 0, P;
            return S.replace(/[\n\t]/g, function(T, U) {
                if (T === "\n") {
                    Q = U + 1;
                    return T
                }
                P = (U - Q)%4;
                Q = U + 1;
                return R[P]
            })
        }
        var u = /(?:["'*()\[\]:]|~D)/g;
        function A(Q) {
            if (!Q) {
                return ""
            }
            var P = Q.length;
            return Q.replace(u, function(R, S) {
                if (R == "~D") {
                    return "%24"
                }
                if (R == ":") {
                    if (S == P - 1 || /[0-9\/]/.test(Q.charAt(S + 1))) {
                        return ":"
                    }
                }
                return "%" + R.charCodeAt(0).toString(16)
            })
        }
        function y(T, Q, R) {
            var P = "([" + Q.replace(/([\[\]\\])/g, "\\$1") + "])";
            if (R) {
                P = "\\\\" + P
            }
            var S = new RegExp(P, "g");
            T = T.replace(S, s);
            return T
        }
        function s(P, R) {
            var Q = R.charCodeAt(0);
            return "~E" + Q + "E"
        }
    }
})();
/*! scripts/vendor/mediaelement/mediaelement.js */
/*!
* MediaElement.js
* HTML5 <video> and <audio> shim and player
* http://mediaelementjs.com/
*
* Creates a JavaScript object that mimics HTML5 MediaElement API
* for browsers that don't understand HTML5 or can't play the provided codec
* Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
*
* Copyright 2010, John Dyer (http://johndyer.me)
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*/
var mejs = mejs || {};
mejs.version = "2.1.3";
mejs.meIndex = 0;
mejs.plugins = {
    silverlight: [{
        version: [3, 0],
        types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
    }
    ],
    flash: [{
        version: [9, 0, 124],
        types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg"]
    }
    ]
};
mejs.Utility = {
    encodeUrl: function(a) {
        return encodeURIComponent(a)
    },
    escapeHTML: function(a) {
        return a.split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
    },
    absolutizeUrl: function(a) {
        var b = document.createElement("div");
        b.innerHTML = '<a href="' + this.escapeHTML(a) + '">x</a>';
        return b.firstChild.href
    },
    getScriptPath: function(b) {
        var f = 0, e, g = "", d = "", c, a = document.getElementsByTagName("script");
        for (; f < a.length; f++) {
            c = a[f].src;
            for (e = 0; e < b.length; e++) {
                d = b[e];
                if (c.indexOf(d)>-1) {
                    g = c.substring(0, c.indexOf(d));
                    break
                }
            }
            if (g !== "") {
                break
            }
        }
        return g
    },
    secondsToTimeCode: function(c, d) {
        c = Math.round(c);
        var a, b = Math.floor(c / 60);
        if (b >= 60) {
            a = Math.floor(b / 60);
            b = b%60
        }
        a = a === undefined ? "00" : (a >= 10) ? a : "0" + a;
        b = (b >= 10) ? b : "0" + b;
        c = Math.floor(c%60);
        c = (c >= 10) ? c : "0" + c;
        return ((a > 0 || d === true) ? a + ":" : "") + b + ":" + c
    }
};
mejs.PluginDetector = {
    hasPluginVersion: function(c, a) {
        var b = this.plugins[c];
        a[1] = a[1] || 0;
        a[2] = a[2] || 0;
        return (b[0] > a[0] || (b[0] == a[0] && b[1] > a[1]) || (b[0] == a[0] && b[1] == a[1] && b[2] >= a[2])) ? true : false
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function(d, c, e, a, b) {
        this.plugins[d] = this.detectPlugin(c, e, a, b)
    },
    detectPlugin: function(g, b, c, k) {
        var h = [0, 0, 0], j, d, a;
        if (typeof(this.nav.plugins) != "undefined" && typeof this.nav.plugins[g] == "object") {
            j = this.nav.plugins[g].description;
            if (j&&!(typeof this.nav.mimeTypes != "undefined" && this.nav.mimeTypes[b]&&!this.nav.mimeTypes[b].enabledPlugin)) {
                h = j.replace(g, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split(".");
                for (d = 0; d < h.length; d++) {
                    h[d] = parseInt(h[d].match(/\d+/), 10)
                }
            }
        } else {
            if (typeof(window.ActiveXObject) != "undefined") {
                try {
                    a = new ActiveXObject(c);
                    if (a) {
                        h = k(a)
                    }
                } catch (f) {}
            }
        }
        return h
    }
};
mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function(b) {
    var a = [], c = b.GetVariable("$version");
    if (c) {
        c = c.split(" ")[1].split(",");
        a = [parseInt(c[0], 10), parseInt(c[1], 10), parseInt(c[2], 10)]
    }
    return a
});
mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function(b) {
    var a = [0, 0, 0, 0], c = function(f, d, e, g) {
        while (f.isVersionSupported(d[0] + "." + d[1] + "." + d[2] + "." + d[3])) {
            d[e] += g
        }
        d[e] -= g
    };
    c(b, a, 0, 1);
    c(b, a, 1, 1);
    c(b, a, 2, 10000);
    c(b, a, 2, 1000);
    c(b, a, 2, 100);
    c(b, a, 2, 10);
    c(b, a, 2, 1);
    c(b, a, 3, 1);
    return a
});
if (mejs.PluginDetector.ua.match(/android 2\.[12]/) !== null) {
    HTMLMediaElement.canPlayType = function(a) {
        return (a.match(/video\/(mp4|m4v)/gi) !== null) ? "probably" : ""
    }
}
mejs.MediaFeatures = {
    init: function() {
        var e = mejs.PluginDetector.nav, c = mejs.PluginDetector.ua.toLowerCase(), b, a, d = ["source", "track", "audio", "video"];
        this.isiPad = (c.match(/ipad/i) !== null);
        this.isiPhone = (c.match(/iphone/i) !== null);
        this.isAndroid = (c.match(/android/i) !== null);
        this.isIE = (e.appName.toLowerCase().indexOf("microsoft")!=-1);
        this.isChrome = (c.match(/chrome/gi) !== null);
        for (b = 0; b < d.length; b++) {
            a = document.createElement(d[b])
        }
        this.hasNativeFullScreen = (typeof a.webkitEnterFullScreen !== "undefined");
        if (this.isChrome) {
            this.hasNativeFullScreen = false
        }
    }
};
mejs.MediaFeatures.init();
mejs.HtmlMediaElement = {
    pluginType: "native",
    isFullScreen: false,
    setCurrentTime: function(a) {
        this.currentTime = a
    },
    setMuted: function(a) {
        this.muted = a
    },
    setVolume: function(a) {
        this.volume = a
    },
    stop: function() {
        this.pause()
    },
    setSrc: function(a) {
        if (typeof a == "string") {
            this.src = a
        } else {
            var b, c;
            for (b = 0; b < a.length; b++) {
                c = a[b];
                if (this.canPlayType(c.type)) {
                    this.src = c.src
                }
            }
        }
    },
    setVideoSize: function(b, a) {
        this.width = b;
        this.height = a
    }
};
mejs.PluginMediaElement = function(b, c, a) {
    this.id = b;
    this.pluginType = c;
    this.src = a;
    this.events = {}
};
mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: false,
    playbackRate: - 1,
    defaultPlaybackRate: - 1,
    seekable: [],
    played: [],
    paused: true,
    ended: false,
    seeking: false,
    duration: 0,
    error: null,
    muted: false,
    volume: 1,
    currentTime: 0,
    play: function() {
        if (this.pluginApi != null) {
            this.pluginApi.playMedia();
            this.paused = false
        }
    },
    load: function() {
        if (this.pluginApi != null) {
            this.pluginApi.loadMedia();
            this.paused = false
        }
    },
    pause: function() {
        if (this.pluginApi != null) {
            this.pluginApi.pauseMedia();
            this.paused = true
        }
    },
    stop: function() {
        if (this.pluginApi != null) {
            this.pluginApi.stopMedia();
            this.paused = true
        }
    },
    canPlayType: function(e) {
        var d, c, a, b = mejs.plugins[this.pluginType];
        for (d = 0; d < b.length; d++) {
            a = b[d];
            if (mejs.PluginDetector.hasPluginVersion(this.pluginType, a.version)) {
                for (c = 0; c < a.types.length; c++) {
                    if (e == a.types[c]) {
                        return true
                    }
                }
            }
        }
        return false
    },
    setSrc: function(a) {
        if (typeof a == "string") {
            this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a));
            this.src = mejs.Utility.absolutizeUrl(a)
        } else {
            var b, c;
            for (b = 0; b < a.length; b++) {
                c = a[b];
                if (this.canPlayType(c.type)) {
                    this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src));
                    this.src = mejs.Utility.absolutizeUrl(a)
                }
            }
        }
    },
    setCurrentTime: function(a) {
        if (this.pluginApi != null) {
            this.pluginApi.setCurrentTime(a);
            this.currentTime = a
        }
    },
    setVolume: function(a) {
        if (this.pluginApi != null) {
            this.pluginApi.setVolume(a);
            this.volume = a
        }
    },
    setMuted: function(a) {
        if (this.pluginApi != null) {
            this.pluginApi.setMuted(a);
            this.muted = a
        }
    },
    setVideoSize: function(b, a) {
        if (this.pluginElement.style) {
            this.pluginElement.style.width = b + "px";
            this.pluginElement.style.height = a + "px"
        }
        if (this.pluginApi != null) {
            this.pluginApi.setVideoSize(b, a)
        }
    },
    setFullscreen: function(a) {
        if (this.pluginApi != null) {
            this.pluginApi.setFullscreen(a)
        }
    },
    addEventListener: function(b, c, a) {
        this.events[b] = this.events[b] || [];
        this.events[b].push(c)
    },
    removeEventListener: function(a, c) {
        if (!a) {
            this.events = {};
            return true
        }
        var b = this.events[a];
        if (!b) {
            return true
        }
        if (!c) {
            this.events[a] = [];
            return true
        }
        for (i = 0; i < b.length; i++) {
            if (b[i] === c) {
                this.events[a].splice(i, 1);
                return true
            }
        }
        return false
    },
    dispatchEvent: function(a) {
        var c, b, d = this.events[a];
        if (d) {
            b = Array.prototype.slice.call(arguments, 1);
            for (c = 0; c < d.length; c++) {
                d[c].apply(null, b)
            }
        }
    }
};
mejs.MediaPluginBridge = {
    pluginMediaElements: {},
    htmlMediaElements: {},
    registerPluginElement: function(c, a, b) {
        this.pluginMediaElements[c] = a;
        this.htmlMediaElements[c] = b
    },
    initPlugin: function(c) {
        var a = this.pluginMediaElements[c], b = this.htmlMediaElements[c];
        switch (a.pluginType) {
        case"flash":
            a.pluginElement = a.pluginApi = document.getElementById(c);
            break;
        case"silverlight":
            a.pluginElement = document.getElementById(a.id);
            a.pluginApi = a.pluginElement.Content.MediaElementJS;
            break
        }
        if (a.pluginApi != null && a.success) {
            a.success(a, b)
        }
    },
    fireEvent: function(h, c, b) {
        var g, f, a, d = this.pluginMediaElements[h];
        d.ended = false;
        d.paused = true;
        g = {
            type: c,
            target: d
        };
        for (f in b) {
            d[f] = b[f];
            g[f] = b[f]
        }
        a = b.bufferedTime || 0;
        g.target.buffered = g.buffered = {
            start: function(e) {
                return 0
            },
            end: function(e) {
                return a
            },
            length: 1
        };
        d.dispatchEvent(g.type, g)
    }
};
mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: ["flash", "silverlight"],
    enablePluginDebug: false,
    type: "",
    pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
    flashName: "flashmediaelement.swf",
    enablePluginSmoothing: false,
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: - 1,
    pluginHeight: - 1,
    timerRate: 250,
    success: function() {},
    error: function() {}
};
mejs.MediaElement = function(a, b) {
    return mejs.HtmlMediaElementShim.create(a, b)
};
mejs.HtmlMediaElementShim = {
    create: function(f, e) {
        var m = mejs.MediaElementDefaults, j = (typeof(f) == "string") ? document.getElementById(f): f, a = (j.tagName.toLowerCase() == "video"), b = (typeof(j.canPlayType) != "undefined"), c = {
            method: "",
            url: ""
        }, k = j.getAttribute("poster"), g = j.getAttribute("autoplay"), h = j.getAttribute("preload"), l = j.getAttribute("controls"), d;
        for (d in e) {
            m[d] = e[d]
        }
        k = (typeof k == "undefined" || k === null) ? "" : k;
        h = (typeof h == "undefined" || h === null || h === "false") ? "none" : h;
        g=!(typeof g == "undefined" || g === null || g === "false");
        l=!(typeof l == "undefined" || l === null || l === "false");
        c = this.determinePlayback(j, m, a, b);
        if (c.method == "native") {
            return this.updateNative(j, m, g, h, c)
        } else {
            if (c.method !== "") {
                return this.createPlugin(j, m, a, c.method, (c.url !== null) ? mejs.Utility.absolutizeUrl(c.url) : "", k, g, h, l)
            } else {
                this.createErrorMessage(j, m, (c.url !== null) ? mejs.Utility.absolutizeUrl(c.url) : "", k)
            }
        }
    },
    determinePlayback: function(r, u, b, c) {
        var t = [], h, g, f, e, d, p, s = {
            method: "",
            url: ""
        }, a = r.getAttribute("src"), m, o, q;
        if (typeof(u.type) != "undefined" && u.type !== "") {
            t.push({
                type: u.type,
                url: null
            })
        } else {
            if (a != "undefined" && a !== null) {
                p = this.checkType(a, r.getAttribute("type"), b);
                t.push({
                    type: p,
                    url: a
                })
            } else {
                for (h = 0; h < r.childNodes.length; h++) {
                    d = r.childNodes[h];
                    if (d.nodeType == 1 && d.tagName.toLowerCase() == "source") {
                        a = d.getAttribute("src");
                        p = this.checkType(a, d.getAttribute("type"), b);
                        t.push({
                            type: p,
                            url: a
                        })
                    }
                }
            }
        }
        if (c && (u.mode === "auto" || u.mode === "native")) {
            for (h = 0; h < t.length; h++) {
                if (r.canPlayType(t[h].type).replace(/no/, "") !== "" || r.canPlayType(t[h].type.replace(/mp3/, "mpeg")).replace(/no/, "") !== "") {
                    s.method = "native";
                    s.url = t[h].url;
                    return s
                }
            }
        }
        if (u.mode === "auto" || u.mode === "shim") {
            for (h = 0; h < t.length; h++) {
                p = t[h].type;
                for (g = 0; g < u.plugins.length; g++) {
                    m = u.plugins[g];
                    o = mejs.plugins[m];
                    for (f = 0; f < o.length; f++) {
                        q = o[f];
                        if (mejs.PluginDetector.hasPluginVersion(m, q.version)) {
                            for (e = 0; e < q.types.length; e++) {
                                if (p == q.types[e]) {
                                    s.method = m;
                                    s.url = t[h].url;
                                    return s
                                }
                            }
                        }
                    }
                }
            }
        }
        if (s.method === "") {
            s.url = t[0].url
        }
        return s
    },
    checkType: function(a, c, d) {
        var b;
        if (a&&!c) {
            b = a.substring(a.lastIndexOf(".") + 1);
            return ((d) ? "video" : "audio") + "/" + b
        } else {
            if (c&&~c.indexOf(";")) {
                return c.substr(0, c.indexOf(";"))
            } else {
                return c
            }
        }
    },
    createErrorMessage: function(c, b, f, g) {
        var a = document.createElement("div");
        a.className = "me-cannotplay";
        try {
            a.style.width = c.width + "px";
            a.style.height = c.height + "px"
        } catch (d) {}
        a.innerHTML = (g !== "") ? '<a href="' + f + '"><img src="' + g + '" /></a>' : '<a href="' + f + '"><span>Download File</span></a>';
        c.parentNode.insertBefore(a, c);
        c.style.display = "none";
        b.error(c)
    },
    createPlugin: function(l, r, b, f, j, n, g, m, o) {
        var d = 1, p = 1, e = "me_" + f + "_" + (mejs.meIndex++), q = new mejs.PluginMediaElement(e, f, j), c = document.createElement("div"), k, h, a;
        h = l.parentNode;
        while (h !== null && h.tagName.toLowerCase() != "body") {
            if (h.parentNode.tagName.toLowerCase() == "p") {
                h.parentNode.parentNode.insertBefore(h, h.parentNode);
                break
            }
            h = h.parentNode
        }
        if (b) {
            d = (r.videoWidth > 0) ? r.videoWidth : (l.getAttribute("width") !== null) ? l.getAttribute("width") : r.defaultVideoWidth;
            p = (r.videoHeight > 0) ? r.videoHeight : (l.getAttribute("height") !== null) ? l.getAttribute("height") : r.defaultVideoHeight
        } else {
            if (r.enablePluginDebug) {
                d = 320;
                p = 240
            }
        }
        q.success = r.success;
        mejs.MediaPluginBridge.registerPluginElement(e, q, l);
        c.className = "me-plugin";
        l.parentNode.insertBefore(c, l);
        a = ["id=" + e, "isvideo=" + ((b) ? "true" : "false"), "autoplay=" + ((g) ? "true" : "false"), "preload=" + m, "width=" + d, "timerrate=" + r.timerRate, "height=" + p];
        if (j !== null) {
            if (f == "flash") {
                a.push("file=" + mejs.Utility.encodeUrl(j))
            } else {
                a.push("file=" + j)
            }
        }
        if (r.enablePluginDebug) {
            a.push("debug=true")
        }
        if (r.enablePluginSmoothing) {
            a.push("smoothing=true")
        }
        if (o) {
            a.push("controls=true")
        }
        switch (f) {
        case"silverlight":
            c.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + e + '" name="' + e + '" width="' + d + '" height="' + p + '"><param name="initParams" value="' + a.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + r.pluginPath + r.silverlightName + '" /></object>';
            break;
        case"flash":
            if (mejs.MediaFeatures.isIE) {
                k = document.createElement("div");
                c.appendChild(k);
                k.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + e + '" width="' + d + '" height="' + p + '"><param name="movie" value="' + r.pluginPath + r.flashName + "?x=" + (new Date()) + '" /><param name="flashvars" value="' + a.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'
            } else {
                c.innerHTML = '<embed id="' + e + '" name="' + e + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" src="' + r.pluginPath + r.flashName + '" flashvars="' + a.join("&") + '" width="' + d + '" height="' + p + '"></embed>'
            }
            break
        }
        l.style.display = "none";
        return q
    },
    updateNative: function(e, c, f, b, d) {
        for (var a in mejs.HtmlMediaElement) {
            e[a] = mejs.HtmlMediaElement[a]
        }
        if (mejs.MediaFeatures.isChrome) {
            if (b === "none"&&!f) {
                e.src = "";
                e.load();
                e.canceledPreload = true;
                e.addEventListener("play", function() {
                    if (e.canceledPreload) {
                        e.src = d.url;
                        e.load();
                        e.play();
                        e.canceledPreload = false
                    }
                }, false)
            } else {
                if (f) {
                    e.load();
                    e.play()
                }
            }
        }
        c.success(e, e);
        return e
    }
};
window.mejs = mejs;
window.MediaElement = mejs.MediaElement;
/*! scripts/vendor/video-js/video.js */
/*!
Video.js - HTML5 Video Player
Version 3.2.0

LGPL v3 LICENSE INFO
This file is part of Video.js. Copyright 2011 Zencoder, Inc.

Video.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Video.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with Video.js.  If not, see <http://www.gnu.org/licenses/>.
*/
(function(window, undefined) {
    var document = window.document;
    document.createElement("video");
    document.createElement("audio");
    var VideoJS = function(id, addOptions, ready) {
        var tag;
        if (typeof id == "string") {
            if (id.indexOf("#") === 0) {
                id = id.slice(1)
            }
            if (_V_.players[id]) {
                return _V_.players[id]
            } else {
                tag = _V_.el(id)
            }
        } else {
            tag = id
        }
        if (!tag ||!tag.nodeName) {
            throw new TypeError("The element or ID supplied is not valid. (VideoJS)")
        }
        return tag.player || new _V_.Player(tag, addOptions, ready)
    }, _V_ = VideoJS, CDN_VERSION = "3.2";
    VideoJS.players = {};
    VideoJS.options = {
        techOrder: ["html5", "flash"],
        html5: {},
        flash: {
            swf: "http://vjs.zencdn.net/c/video-js.swf"
        },
        width: "auto",
        height: "auto",
        defaultVolume: 0,
        components: {
            posterImage: {},
            textTrackDisplay: {},
            loadingSpinner: {},
            bigPlayButton: {},
            controlBar: {}
        }
    };
    if (CDN_VERSION != "GENERATED_CDN_VSN") {
        _V_.options.flash.swf = "http://vjs.zencdn.net/" + CDN_VERSION + "/video-js.swf"
    }
    _V_.merge = function(obj1, obj2, safe) {
        if (!obj2) {
            obj2 = {}
        }
        for (var attrname in obj2) {
            if (obj2.hasOwnProperty(attrname) && (!safe ||!obj1.hasOwnProperty(attrname))) {
                obj1[attrname] = obj2[attrname]
            }
        }
        return obj1
    };
    _V_.extend = function(obj) {
        this.merge(this, obj, true)
    };
    _V_.extend({
        tech: {},
        controlSets: {},
        isIE: function() {
            return !+"\v1"
        },
        isFF: function() {
            return !!_V_.ua.match("Firefox")
        },
        isIPad: function() {
            return navigator.userAgent.match(/iPad/i) !== null
        },
        isIPhone: function() {
            return navigator.userAgent.match(/iPhone/i) !== null
        },
        isIOS: function() {
            return VideoJS.isIPhone() || VideoJS.isIPad()
        },
        iOSVersion: function() {
            var match = navigator.userAgent.match(/OS (\d+)_/i);
            if (match && match[1]) {
                return match[1]
            }
        },
        isAndroid: function() {
            return navigator.userAgent.match(/Android.*AppleWebKit/i) !== null
        },
        androidVersion: function() {
            var match = navigator.userAgent.match(/Android (\d+)\./i);
            if (match && match[1]) {
                return match[1]
            }
        },
        testVid: document.createElement("video"),
        ua: navigator.userAgent,
        support: {},
        each: function(arr, fn) {
            if (!arr || arr.length === 0) {
                return 
            }
            for (var i = 0, j = arr.length; i < j; i++) {
                fn.call(this, arr[i], i)
            }
        },
        eachProp: function(obj, fn) {
            if (!obj) {
                return 
            }
            for (var name in obj) {
                if (obj.hasOwnProperty(name)) {
                    fn.call(this, name, obj[name])
                }
            }
        },
        el: function(id) {
            return document.getElementById(id)
        },
        createElement: function(tagName, attributes) {
            var el = document.createElement(tagName), attrname;
            for (attrname in attributes) {
                if (attributes.hasOwnProperty(attrname)) {
                    if (attrname.indexOf("-")!==-1) {
                        el.setAttribute(attrname, attributes[attrname])
                    } else {
                        el[attrname] = attributes[attrname]
                    }
                }
            }
            return el
        },
        insertFirst: function(node, parent) {
            if (parent.firstChild) {
                parent.insertBefore(node, parent.firstChild)
            } else {
                parent.appendChild(node)
            }
        },
        addClass: function(element, classToAdd) {
            if ((" " + element.className + " ").indexOf(" " + classToAdd + " ")==-1) {
                element.className = element.className === "" ? classToAdd : element.className + " " + classToAdd
            }
        },
        removeClass: function(element, classToRemove) {
            if (element.className.indexOf(classToRemove)==-1) {
                return 
            }
            var classNames = element.className.split(" ");
            classNames.splice(classNames.indexOf(classToRemove), 1);
            element.className = classNames.join(" ")
        },
        remove: function(item, array) {
            if (!array) {
                return 
            }
            var i = array.indexOf(item);
            if (i!=-1) {
                return array.splice(i, 1)
            }
        },
        blockTextSelection: function() {
            document.body.focus();
            document.onselectstart = function() {
                return false
            }
        },
        unblockTextSelection: function() {
            document.onselectstart = function() {
                return true
            }
        },
        formatTime: function(seconds, guide) {
            guide = guide || seconds;
            var s = Math.floor(seconds%60), m = Math.floor(seconds / 60%60), h = Math.floor(seconds / 3600), gm = Math.floor(guide / 60%60), gh = Math.floor(guide / 3600);
            h = (h > 0 || gh > 0) ? h + ":" : "";
            m = (((h || gm >= 10) && m < 10) ? "0" + m : m) + ":";
            s = (s < 10) ? "0" + s : s;
            return h + m + s
        },
        uc: function(string) {
            return string.charAt(0).toUpperCase() + string.slice(1)
        },
        getRelativePosition: function(x, relativeElement) {
            return Math.max(0, Math.min(1, (x - _V_.findPosX(relativeElement)) / relativeElement.offsetWidth))
        },
        getComputedStyleValue: function(element, style) {
            return window.getComputedStyle(element, null).getPropertyValue(style)
        },
        trim: function(string) {
            return string.toString().replace(/^\s+/, "").replace(/\s+$/, "")
        },
        round: function(num, dec) {
            if (!dec) {
                dec = 0
            }
            return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec)
        },
        isEmpty: function(object) {
            for (var prop in object) {
                return false
            }
            return true
        },
        createTimeRange: function(start, end) {
            return {
                length: 1,
                start: function() {
                    return start
                },
                end: function() {
                    return end
                }
            }
        },
        cache: {},
        guid: 1,
        expando: "vdata" + (new Date).getTime(),
        getData: function(elem) {
            var id = elem[_V_.expando];
            if (!id) {
                id = elem[_V_.expando] = _V_.guid++;
                _V_.cache[id] = {}
            }
            return _V_.cache[id]
        },
        removeData: function(elem) {
            var id = elem[_V_.expando];
            if (!id) {
                return 
            }
            delete _V_.cache[id];
            try {
                delete elem[_V_.expando]
            } catch (e) {
                if (elem.removeAttribute) {
                    elem.removeAttribute(_V_.expando)
                } else {
                    elem[_V_.expando] = null
                }
            }
        },
        proxy: function(context, fn, uid) {
            if (!fn.guid) {
                fn.guid = _V_.guid++
            }
            var ret = function() {
                return fn.apply(context, arguments)
            };
            ret.guid = (uid) ? uid + "_" + fn.guid : fn.guid;
            return ret
        },
        get: function(url, onSuccess, onError) {
            var local = (url.indexOf("file:") == 0 || (window.location.href.indexOf("file:") == 0 && url.indexOf("http:")==-1));
            if (typeof XMLHttpRequest == "undefined") {
                XMLHttpRequest = function() {
                    try {
                        return new ActiveXObject("Msxml2.XMLHTTP.6.0")
                    } catch (e) {}
                    try {
                        return new ActiveXObject("Msxml2.XMLHTTP.3.0")
                    } catch (f) {}
                    try {
                        return new ActiveXObject("Msxml2.XMLHTTP")
                    } catch (g) {}
                    throw new Error("This browser does not support XMLHttpRequest.")
                }
            }
            var request = new XMLHttpRequest();
            try {
                request.open("GET", url)
            } catch (e) {
                _V_.log("VideoJS XMLHttpRequest (open)", e);
                return false
            }
            request.onreadystatechange = _V_.proxy(this, function() {
                if (request.readyState == 4) {
                    if (request.status == 200 || local && request.status == 0) {
                        onSuccess(request.responseText)
                    } else {
                        if (onError) {
                            onError()
                        }
                    }
                }
            });
            try {
                request.send()
            } catch (e) {
                _V_.log("VideoJS XMLHttpRequest (send)", e);
                if (onError) {
                    onError(e)
                }
            }
        },
        setLocalStorage: function(key, value) {
            var localStorage = window.localStorage || false;
            if (!localStorage) {
                return 
            }
            try {
                localStorage[key] = value
            } catch (e) {
                if (e.code == 22 || e.code == 1014) {
                    _V_.log("LocalStorage Full (VideoJS)", e)
                } else {
                    _V_.log("LocalStorage Error (VideoJS)", e)
                }
            }
        },
        getAbsoluteURL: function(url) {
            if (!url.match(/^https?:\/\//)) {
                url = _V_.createElement("div", {
                    innerHTML: '<a href="' + url + '">x</a>'
                }).firstChild.href
            }
            return url
        }
    });
    _V_.log = function() {
        _V_.log.history = _V_.log.history || [];
        _V_.log.history.push(arguments);
        if (window.console) {
            arguments.callee = arguments.callee.caller;
            var newarr = [].slice.call(arguments);
            (typeof console.log === "object" ? _V_.log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr))
        }
    };
    (function(b) {
        function c() {}
        for (var d = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","), a; a = d.pop();) {
            b[a] = b[a] || c
        }
    })((function() {
        try {
            console.log();
            return window.console
        } catch (err) {
            return window.console = {}
        }
    })());
    if ("getBoundingClientRect" in document.documentElement) {
        _V_.findPosX = function(el) {
            var box;
            try {
                box = el.getBoundingClientRect()
            } catch (e) {}
            if (!box) {
                return 0
            }
            var docEl = document.documentElement, body = document.body, clientLeft = docEl.clientLeft || body.clientLeft || 0, scrollLeft = window.pageXOffset || body.scrollLeft, left = box.left + scrollLeft - clientLeft;
            return left
        }
    } else {
        _V_.findPosX = function(el) {
            var curleft = el.offsetLeft;
            while (el = obj.offsetParent) {
                if (el.className.indexOf("video-js")==-1) {} else {}
                curleft += el.offsetLeft
            }
            return curleft
        }
    }(function() {
        var initializing = false, fnTest = /xyz/.test(function() {
            xyz
        }) ? /\b_super\b/: /.*/;
        _V_.Class = function() {};
        _V_.Class.extend = function(prop) {
            var _super = this.prototype;
            initializing = true;
            var prototype = new this ();
            initializing = false;
            for (var name in prop) {
                prototype[name] = typeof prop[name] == "function" && typeof _super[name] == "function" && fnTest.test(prop[name]) ? (function(name, fn) {
                    return function() {
                        var tmp = this._super;
                        this._super = _super[name];
                        var ret = fn.apply(this, arguments);
                        this._super = tmp;
                        return ret
                    }
                })(name, prop[name]) : prop[name]
            }
            function Class() {
                if (!initializing && this.init) {
                    return this.init.apply(this, arguments)
                } else {
                    if (!initializing) {
                        return arguments.callee.prototype.init()
                    }
                }
            }
            Class.prototype = prototype;
            Class.constructor = Class;
            Class.extend = arguments.callee;
            return Class
        }
    })();
    _V_.Component = _V_.Class.extend({
        init: function(player, options) {
            this.player = player;
            options = this.options = _V_.merge(this.options || {}, options);
            if (options.el) {
                this.el = options.el
            } else {
                this.el = this.createElement()
            }
            this.initComponents()
        },
        destroy: function() {},
        createElement: function(type, attrs) {
            return _V_.createElement(type || "div", attrs)
        },
        buildCSSClass: function() {
            return ""
        },
        initComponents: function() {
            var options = this.options;
            if (options && options.components) {
                this.eachProp(options.components, function(name, opts) {
                    var tempAdd = this.proxy(function() {
                        this[name] = this.addComponent(name, opts)
                    });
                    if (opts.loadEvent) {
                        this.one(opts.loadEvent, tempAdd)
                    } else {
                        tempAdd()
                    }
                })
            }
        },
        addComponent: function(name, options) {
            var component, componentClass;
            if (typeof name == "string") {
                options = options || {};
                componentClass = options.componentClass || _V_.uc(name);
                component = new _V_[componentClass](this.player || this, options)
            } else {
                component = name
            }
            this.el.appendChild(component.el);
            return component
        },
        removeComponent: function(component) {
            this.el.removeChild(component.el)
        },
        show: function() {
            this.el.style.display = "block"
        },
        hide: function() {
            this.el.style.display = "none"
        },
        fadeIn: function() {
            this.removeClass("vjs-fade-out");
            this.addClass("vjs-fade-in")
        },
        fadeOut: function() {
            this.removeClass("vjs-fade-in");
            this.addClass("vjs-fade-out")
        },
        lockShowing: function() {
            var style = this.el.style;
            style.display = "block";
            style.opacity = 1;
            style.visiblity = "visible"
        },
        unlockShowing: function() {
            var style = this.el.style;
            style.display = "";
            style.opacity = "";
            style.visiblity = ""
        },
        addClass: function(classToAdd) {
            _V_.addClass(this.el, classToAdd)
        },
        removeClass: function(classToRemove) {
            _V_.removeClass(this.el, classToRemove)
        },
        addEvent: function(type, fn, uid) {
            return _V_.addEvent(this.el, type, _V_.proxy(this, fn))
        },
        removeEvent: function(type, fn) {
            return _V_.removeEvent(this.el, type, fn)
        },
        triggerEvent: function(type, e) {
            return _V_.triggerEvent(this.el, type, e)
        },
        one: function(type, fn) {
            _V_.one(this.el, type, _V_.proxy(this, fn))
        },
        ready: function(fn) {
            if (!fn) {
                return this
            }
            if (this.isReady) {
                fn.call(this)
            } else {
                if (this.readyQueue === undefined) {
                    this.readyQueue = []
                }
                this.readyQueue.push(fn)
            }
            return this
        },
        triggerReady: function() {
            this.isReady = true;
            if (this.readyQueue && this.readyQueue.length > 0) {
                this.each(this.readyQueue, function(fn) {
                    fn.call(this)
                });
                this.readyQueue = [];
                this.triggerEvent("ready")
            }
        },
        each: function(arr, fn) {
            _V_.each.call(this, arr, fn)
        },
        eachProp: function(obj, fn) {
            _V_.eachProp.call(this, obj, fn)
        },
        extend: function(obj) {
            _V_.merge(this, obj)
        },
        proxy: function(fn, uid) {
            return _V_.proxy(this, fn, uid)
        }
    });
    _V_.Control = _V_.Component.extend({
        buildCSSClass: function() {
            return "vjs-control " + this._super()
        }
    });
    _V_.ControlBar = _V_.Component.extend({
        options: {
            loadEvent: "play",
            components: {
                playToggle: {},
                fullscreenToggle: {},
                currentTimeDisplay: {},
                timeDivider: {},
                durationDisplay: {},
                remainingTimeDisplay: {},
                progressControl: {},
                volumeControl: {},
                muteToggle: {}
            }
        },
        init: function(player, options) {
            this._super(player, options);
            player.addEvent("play", this.proxy(function() {
                this.fadeIn();
                this.player.addEvent("mouseover", this.proxy(this.fadeIn));
                this.player.addEvent("mouseout", this.proxy(this.fadeOut))
            }))
        },
        createElement: function() {
            return _V_.createElement("div", {
                className: "vjs-controls"
            })
        },
        fadeIn: function() {
            this._super();
            this.player.triggerEvent("controlsvisible")
        },
        fadeOut: function() {
            this._super();
            this.player.triggerEvent("controlshidden")
        },
        lockShowing: function() {
            this.el.style.opacity = "1"
        }
    });
    _V_.Button = _V_.Control.extend({
        init: function(player, options) {
            this._super(player, options);
            this.addEvent("click", this.onClick);
            this.addEvent("focus", this.onFocus);
            this.addEvent("blur", this.onBlur)
        },
        createElement: function(type, attrs) {
            attrs = _V_.merge({
                className: this.buildCSSClass(),
                innerHTML: '<div><span class="vjs-control-text">' + (this.buttonText || "Need Text") + "</span></div>",
                role: "button",
                tabIndex: 0
            }, attrs);
            return this._super(type, attrs)
        },
        onClick: function() {},
        onFocus: function() {
            _V_.addEvent(document, "keyup", _V_.proxy(this, this.onKeyPress))
        },
        onKeyPress: function(event) {
            if (event.which == 32 || event.which == 13) {
                event.preventDefault();
                this.onClick()
            }
        },
        onBlur: function() {
            _V_.removeEvent(document, "keyup", _V_.proxy(this, this.onKeyPress))
        }
    });
    _V_.PlayButton = _V_.Button.extend({
        buttonText: "Play",
        buildCSSClass: function() {
            return "vjs-play-button " + this._super()
        },
        onClick: function() {
            this.player.play()
        }
    });
    _V_.PauseButton = _V_.Button.extend({
        buttonText: "Pause",
        buildCSSClass: function() {
            return "vjs-pause-button " + this._super()
        },
        onClick: function() {
            this.player.pause()
        }
    });
    _V_.PlayToggle = _V_.Button.extend({
        buttonText: "Play",
        init: function(player, options) {
            this._super(player, options);
            player.addEvent("play", _V_.proxy(this, this.onPlay));
            player.addEvent("pause", _V_.proxy(this, this.onPause))
        },
        buildCSSClass: function() {
            return "vjs-play-control " + this._super()
        },
        onClick: function() {
            if (this.player.paused()) {
                this.player.play()
            } else {
                this.player.pause()
            }
        },
        onPlay: function() {
            _V_.removeClass(this.el, "vjs-paused");
            _V_.addClass(this.el, "vjs-playing")
        },
        onPause: function() {
            _V_.removeClass(this.el, "vjs-playing");
            _V_.addClass(this.el, "vjs-paused")
        }
    });
    _V_.FullscreenToggle = _V_.Button.extend({
        buttonText: "Fullscreen",
        buildCSSClass: function() {
            return "vjs-fullscreen-control " + this._super()
        },
        onClick: function() {
            if (!this.player.isFullScreen) {
                this.player.requestFullScreen()
            } else {
                this.player.cancelFullScreen()
            }
        }
    });
    _V_.BigPlayButton = _V_.Button.extend({
        init: function(player, options) {
            this._super(player, options);
            player.addEvent("play", _V_.proxy(this, this.hide));
            player.addEvent("ended", _V_.proxy(this, this.show))
        },
        createElement: function() {
            return this._super("div", {
                className: "vjs-big-play-button",
                innerHTML: "<span></span>"
            })
        },
        onClick: function() {
            if (this.player.currentTime()) {
                this.player.currentTime(0)
            }
            this.player.play()
        }
    });
    _V_.LoadingSpinner = _V_.Component.extend({
        init: function(player, options) {
            this._super(player, options);
            player.addEvent("canplay", _V_.proxy(this, this.hide));
            player.addEvent("canplaythrough", _V_.proxy(this, this.hide));
            player.addEvent("playing", _V_.proxy(this, this.hide));
            player.addEvent("seeking", _V_.proxy(this, this.show));
            player.addEvent("error", _V_.proxy(this, this.show));
            player.addEvent("waiting", _V_.proxy(this, this.show))
        },
        createElement: function() {
            var classNameSpinner, innerHtmlSpinner;
            if (typeof this.player.el.style.WebkitBorderRadius == "string" || typeof this.player.el.style.MozBorderRadius == "string" || typeof this.player.el.style.KhtmlBorderRadius == "string" || typeof this.player.el.style.borderRadius == "string") {
                classNameSpinner = "vjs-loading-spinner";
                innerHtmlSpinner = "<div class='ball1'></div><div class='ball2'></div><div class='ball3'></div><div class='ball4'></div><div class='ball5'></div><div class='ball6'></div><div class='ball7'></div><div class='ball8'></div>"
            } else {
                classNameSpinner = "vjs-loading-spinner-fallback";
                innerHtmlSpinner = ""
            }
            return this._super("div", {
                className: classNameSpinner,
                innerHTML: innerHtmlSpinner
            })
        }
    });
    _V_.CurrentTimeDisplay = _V_.Component.extend({
        init: function(player, options) {
            this._super(player, options);
            player.addEvent("timeupdate", _V_.proxy(this, this.updateContent))
        },
        createElement: function() {
            var el = this._super("div", {
                className: "vjs-current-time vjs-time-controls vjs-control"
            });
            this.content = _V_.createElement("div", {
                className: "vjs-current-time-display",
                innerHTML: "0:00"
            });
            el.appendChild(_V_.createElement("div").appendChild(this.content));
            return el
        },
        updateContent: function() {
            var time = (this.player.scrubbing) ? this.player.values.currentTime: this.player.currentTime();
            this.content.innerHTML = _V_.formatTime(time, this.player.duration())
        }
    });
    _V_.DurationDisplay = _V_.Component.extend({
        init: function(player, options) {
            this._super(player, options);
            player.addEvent("timeupdate", _V_.proxy(this, this.updateContent))
        },
        createElement: function() {
            var el = this._super("div", {
                className: "vjs-duration vjs-time-controls vjs-control"
            });
            this.content = _V_.createElement("div", {
                className: "vjs-duration-display",
                innerHTML: "0:00"
            });
            el.appendChild(_V_.createElement("div").appendChild(this.content));
            return el
        },
        updateContent: function() {
            if (this.player.duration()) {
                this.content.innerHTML = _V_.formatTime(this.player.duration())
            }
        }
    });
    _V_.TimeDivider = _V_.Component.extend({
        createElement: function() {
            return this._super("div", {
                className: "vjs-time-divider",
                innerHTML: "<div><span>/</span></div>"
            })
        }
    });
    _V_.RemainingTimeDisplay = _V_.Component.extend({
        init: function(player, options) {
            this._super(player, options);
            player.addEvent("timeupdate", _V_.proxy(this, this.updateContent))
        },
        createElement: function() {
            var el = this._super("div", {
                className: "vjs-remaining-time vjs-time-controls vjs-control"
            });
            this.content = _V_.createElement("div", {
                className: "vjs-remaining-time-display",
                innerHTML: "-0:00"
            });
            el.appendChild(_V_.createElement("div").appendChild(this.content));
            return el
        },
        updateContent: function() {
            if (this.player.duration()) {
                this.content.innerHTML = "-" + _V_.formatTime(this.player.remainingTime())
            }
        }
    });
    _V_.Slider = _V_.Component.extend({
        init: function(player, options) {
            this._super(player, options);
            player.addEvent(this.playerEvent, _V_.proxy(this, this.update));
            this.addEvent("mousedown", this.onMouseDown);
            this.addEvent("focus", this.onFocus);
            this.addEvent("blur", this.onBlur);
            this.player.addEvent("controlsvisible", this.proxy(this.update));
            this.update()
        },
        createElement: function(type, attrs) {
            attrs = _V_.merge({
                role: "slider",
                "aria-valuenow": 0,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                tabIndex: 0
            }, attrs);
            return this._super(type, attrs)
        },
        onMouseDown: function(event) {
            event.preventDefault();
            _V_.blockTextSelection();
            _V_.addEvent(document, "mousemove", _V_.proxy(this, this.onMouseMove));
            _V_.addEvent(document, "mouseup", _V_.proxy(this, this.onMouseUp));
            this.onMouseMove(event)
        },
        onMouseUp: function(event) {
            _V_.unblockTextSelection();
            _V_.removeEvent(document, "mousemove", this.onMouseMove, false);
            _V_.removeEvent(document, "mouseup", this.onMouseUp, false);
            this.update()
        },
        update: function() {
            var barProgress, progress = this.getPercent();
            handle = this.handle, bar = this.bar;
            if (isNaN(progress)) {
                progress = 0
            }
            barProgress = progress;
            if (handle) {
                var box = this.el, boxWidth = box.offsetWidth, handleWidth = handle.el.offsetWidth, handlePercent = (handleWidth) ? handleWidth / boxWidth: 0, boxAdjustedPercent = 1 - handlePercent;
                adjustedProgress = progress * boxAdjustedPercent, barProgress = adjustedProgress + (handlePercent / 2);
                handle.el.style.left = _V_.round(adjustedProgress * 100, 2) + "%"
            }
            bar.el.style.width = _V_.round(barProgress * 100, 2) + "%"
        },
        calculateDistance: function(event) {
            var box = this.el, boxX = _V_.findPosX(box), boxW = box.offsetWidth, handle = this.handle;
            if (handle) {
                var handleW = handle.el.offsetWidth;
                boxX = boxX + (handleW / 2);
                boxW = boxW - handleW
            }
            return Math.max(0, Math.min(1, (event.pageX - boxX) / boxW))
        },
        onFocus: function(event) {
            _V_.addEvent(document, "keyup", _V_.proxy(this, this.onKeyPress))
        },
        onKeyPress: function(event) {
            if (event.which == 37) {
                event.preventDefault();
                this.stepBack()
            } else {
                if (event.which == 39) {
                    event.preventDefault();
                    this.stepForward()
                }
            }
        },
        onBlur: function(event) {
            _V_.removeEvent(document, "keyup", _V_.proxy(this, this.onKeyPress))
        }
    });
    _V_.ProgressControl = _V_.Component.extend({
        options: {
            components: {
                seekBar: {}
            }
        },
        createElement: function() {
            return this._super("div", {
                className: "vjs-progress-control vjs-control"
            })
        }
    });
    _V_.SeekBar = _V_.Slider.extend({
        options: {
            components: {
                loadProgressBar: {},
                bar: {
                    componentClass: "PlayProgressBar"
                },
                handle: {
                    componentClass: "SeekHandle"
                }
            }
        },
        playerEvent: "timeupdate",
        init: function(player, options) {
            this._super(player, options)
        },
        createElement: function() {
            return this._super("div", {
                className: "vjs-progress-holder"
            })
        },
        getPercent: function() {
            return this.player.currentTime() / this.player.duration()
        },
        onMouseDown: function(event) {
            this._super(event);
            this.player.scrubbing = true;
            this.videoWasPlaying=!this.player.paused();
            this.player.pause()
        },
        onMouseMove: function(event) {
            var newTime = this.calculateDistance(event) * this.player.duration();
            if (newTime == this.player.duration()) {
                newTime = newTime - 0.1
            }
            this.player.currentTime(newTime)
        },
        onMouseUp: function(event) {
            this._super(event);
            this.player.scrubbing = false;
            if (this.videoWasPlaying) {
                this.player.play()
            }
        },
        stepForward: function() {
            this.player.currentTime(this.player.currentTime() + 1)
        },
        stepBack: function() {
            this.player.currentTime(this.player.currentTime() - 1)
        }
    });
    _V_.LoadProgressBar = _V_.Component.extend({
        init: function(player, options) {
            this._super(player, options);
            player.addEvent("progress", _V_.proxy(this, this.update))
        },
        createElement: function() {
            return this._super("div", {
                className: "vjs-load-progress",
                innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>'
            })
        },
        update: function() {
            if (this.el.style) {
                this.el.style.width = _V_.round(this.player.bufferedPercent() * 100, 2) + "%"
            }
        }
    });
    _V_.PlayProgressBar = _V_.Component.extend({
        createElement: function() {
            return this._super("div", {
                className: "vjs-play-progress",
                innerHTML: '<span class="vjs-control-text">Progress: 0%</span>'
            })
        }
    });
    _V_.SeekHandle = _V_.Component.extend({
        createElement: function() {
            return this._super("div", {
                className: "vjs-seek-handle",
                innerHTML: '<span class="vjs-control-text">00:00</span>'
            })
        }
    });
    _V_.VolumeControl = _V_.Component.extend({
        options: {
            components: {
                volumeBar: {}
            }
        },
        createElement: function() {
            return this._super("div", {
                className: "vjs-volume-control vjs-control"
            })
        }
    });
    _V_.VolumeBar = _V_.Slider.extend({
        options: {
            components: {
                bar: {
                    componentClass: "VolumeLevel"
                },
                handle: {
                    componentClass: "VolumeHandle"
                }
            }
        },
        playerEvent: "volumechange",
        createElement: function() {
            return this._super("div", {
                className: "vjs-volume-bar"
            })
        },
        onMouseMove: function(event) {
            this.player.volume(this.calculateDistance(event))
        },
        getPercent: function() {
            return this.player.volume()
        },
        stepForward: function() {
            this.player.volume(this.player.volume() + 0.1)
        },
        stepBack: function() {
            this.player.volume(this.player.volume() - 0.1)
        }
    });
    _V_.VolumeLevel = _V_.Component.extend({
        createElement: function() {
            return this._super("div", {
                className: "vjs-volume-level",
                innerHTML: '<span class="vjs-control-text"></span>'
            })
        }
    });
    _V_.VolumeHandle = _V_.Component.extend({
        createElement: function() {
            return this._super("div", {
                className: "vjs-volume-handle",
                innerHTML: '<span class="vjs-control-text"></span>'
            })
        }
    });
    _V_.MuteToggle = _V_.Button.extend({
        init: function(player, options) {
            this._super(player, options);
            player.addEvent("volumechange", _V_.proxy(this, this.update))
        },
        createElement: function() {
            return this._super("div", {
                className: "vjs-mute-control vjs-control",
                innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
            })
        },
        onClick: function(event) {
            this.player.muted(this.player.muted() ? false : true)
        },
        update: function(event) {
            var vol = this.player.volume(), level = 3;
            if (vol == 0 || this.player.muted()) {
                level = 0
            } else {
                if (vol < 0.33) {
                    level = 1
                } else {
                    if (vol < 0.67) {
                        level = 2
                    }
                }
            }
            _V_.each.call(this, [0, 1, 2, 3], function(i) {
                _V_.removeClass(this.el, "vjs-vol-" + i)
            });
            _V_.addClass(this.el, "vjs-vol-" + level)
        }
    });
    _V_.PosterImage = _V_.Button.extend({
        init: function(player, options) {
            this._super(player, options);
            if (!this.player.options.poster) {
                this.hide()
            }
            player.addEvent("play", _V_.proxy(this, this.hide))
        },
        createElement: function() {
            return _V_.createElement("img", {
                className: "vjs-poster",
                src: this.player.options.poster,
                tabIndex: - 1
            })
        },
        onClick: function() {
            this.player.play()
        }
    });
    _V_.Menu = _V_.Component.extend({
        init: function(player, options) {
            this._super(player, options)
        },
        addItem: function(component) {
            this.addComponent(component);
            component.addEvent("click", this.proxy(function() {
                this.unlockShowing()
            }))
        },
        createElement: function() {
            return this._super("ul", {
                className: "vjs-menu"
            })
        }
    });
    _V_.MenuItem = _V_.Button.extend({
        init: function(player, options) {
            this._super(player, options);
            if (options.selected) {
                this.addClass("vjs-selected")
            }
        },
        createElement: function(type, attrs) {
            return this._super("li", _V_.merge({
                className: "vjs-menu-item",
                innerHTML: this.options.label
            }, attrs))
        },
        onClick: function() {
            this.selected(true)
        },
        selected: function(selected) {
            if (selected) {
                this.addClass("vjs-selected")
            } else {
                this.removeClass("vjs-selected")
            }
        }
    });
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(searchElement) {
            if (this === void 0 || this === null) {
                throw new TypeError()
            }
            var t = Object(this);
            var len = t.length>>>0;
            if (len === 0) {
                return - 1
            }
            var n = 0;
            if (arguments.length > 0) {
                n = Number(arguments[1]);
                if (n !== n) {
                    n = 0
                } else {
                    if (n !== 0 && n !== (1 / 0) && n!==-(1 / 0)) {
                        n = (n > 0||-1) * Math.floor(Math.abs(n))
                    }
                }
            }
            if (n >= len) {
                return - 1
            }
            var k = n >= 0 ? n: Math.max(len - Math.abs(n), 0);
            for (; k < len; k++) {
                if (k in t && t[k] === searchElement) {
                    return k
                }
            }
            return - 1
        }
    }
    _V_.extend({
        addEvent: function(elem, type, fn) {
            var data = _V_.getData(elem), handlers;
            if (data&&!data.handler) {
                data.handler = function(event) {
                    event = _V_.fixEvent(event);
                    var handlers = _V_.getData(elem).events[event.type];
                    if (handlers) {
                        var handlersCopy = [];
                        _V_.each(handlers, function(handler, i) {
                            handlersCopy[i] = handler
                        });
                        for (var i = 0, l = handlersCopy.length; i < l; i++) {
                            handlersCopy[i].call(elem, event)
                        }
                    }
                }
            }
            if (!data.events) {
                data.events = {}
            }
            handlers = data.events[type];
            if (!handlers) {
                handlers = data.events[type] = [];
                if (document.addEventListener) {
                    elem.addEventListener(type, data.handler, false)
                } else {
                    if (document.attachEvent) {
                        elem.attachEvent("on" + type, data.handler)
                    }
                }
            }
            if (!fn.guid) {
                fn.guid = _V_.guid++
            }
            handlers.push(fn)
        },
        removeEvent: function(elem, type, fn) {
            var data = _V_.getData(elem), handlers;
            if (!data.events) {
                return 
            }
            if (!type) {
                for (type in data.events) {
                    _V_.cleanUpEvents(elem, type)
                }
                return 
            }
            handlers = data.events[type];
            if (!handlers) {
                return 
            }
            if (fn && fn.guid) {
                for (var i = 0; i < handlers.length; i++) {
                    if (handlers[i].guid === fn.guid) {
                        handlers.splice(i--, 1)
                    }
                }
            }
            _V_.cleanUpEvents(elem, type)
        },
        cleanUpEvents: function(elem, type) {
            var data = _V_.getData(elem);
            if (data.events[type].length === 0) {
                delete data.events[type];
                if (document.removeEventListener) {
                    elem.removeEventListener(type, data.handler, false)
                } else {
                    if (document.detachEvent) {
                        elem.detachEvent("on" + type, data.handler)
                    }
                }
            }
            if (_V_.isEmpty(data.events)) {
                delete data.events;
                delete data.handler
            }
            if (_V_.isEmpty(data)) {
                _V_.removeData(elem)
            }
        },
        fixEvent: function(event) {
            if (event[_V_.expando]) {
                return event
            }
            var originalEvent = event;
            event = new _V_.Event(originalEvent);
            for (var i = _V_.Event.props.length, prop; i;) {
                prop = _V_.Event.props[--i];
                event[prop] = originalEvent[prop]
            }
            if (!event.target) {
                event.target = event.srcElement || document
            }
            if (event.target.nodeType === 3) {
                event.target = event.target.parentNode
            }
            if (!event.relatedTarget && event.fromElement) {
                event.relatedTarget = event.fromElement === event.target ? event.toElement : event.fromElement
            }
            if (event.pageX == null && event.clientX != null) {
                var eventDocument = event.target.ownerDocument || document, doc = eventDocument.documentElement, body = eventDocument.body;
                event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)
            }
            if (event.which == null && (event.charCode != null || event.keyCode != null)) {
                event.which = event.charCode != null ? event.charCode : event.keyCode
            }
            if (!event.metaKey && event.ctrlKey) {
                event.metaKey = event.ctrlKey
            }
            if (!event.which && event.button !== undefined) {
                event.which = (event.button & 1 ? 1 : (event.button & 2 ? 3 : (event.button & 4 ? 2 : 0)))
            }
            return event
        },
        triggerEvent: function(elem, event) {
            var data = _V_.getData(elem), parent = elem.parentNode || elem.ownerDocument, type = event.type || event, handler;
            if (data) {
                handler = data.handler
            }
            event = typeof event === "object" ? event[_V_.expando] ? event : new _V_.Event(type, event) : new _V_.Event(type);
            event.type = type;
            if (handler) {
                handler.call(elem, event)
            }
            event.result = undefined;
            event.target = elem
        },
        one: function(elem, type, fn) {
            _V_.addEvent(elem, type, function() {
                _V_.removeEvent(elem, type, arguments.callee);
                fn.apply(this, arguments)
            })
        }
    });
    _V_.Event = function(src, props) {
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = (src.defaultPrevented || src.returnValue === false || src.getPreventDefault && src.getPreventDefault()) ? returnTrue : returnFalse
        } else {
            this.type = src
        }
        if (props) {
            _V_.merge(this, props)
        }
        this.timeStamp = (new Date).getTime();
        this[_V_.expando] = true
    };
    _V_.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = returnTrue;
            var e = this.originalEvent;
            if (!e) {
                return 
            }
            if (e.preventDefault) {
                e.preventDefault()
            } else {
                e.returnValue = false
            }
        },
        stopPropagation: function() {
            this.isPropagationStopped = returnTrue;
            var e = this.originalEvent;
            if (!e) {
                return 
            }
            if (e.stopPropagation) {
                e.stopPropagation()
            }
            e.cancelBubble = true
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = returnTrue;
            this.stopPropagation()
        },
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse
    };
    _V_.Event.props = "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" ");
    function returnTrue() {
        return true
    }
    function returnFalse() {
        return false
    }
    var JSON;
    if (!JSON) {
        JSON = {}
    }(function() {
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        if (typeof JSON.parse !== "function") {
            JSON.parse = function(text, reviver) {
                var j;
                function walk(holder, key) {
                    var k, v, value = holder[key];
                    if (value && typeof value === "object") {
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = walk(value, k);
                                if (v !== undefined) {
                                    value[k] = v
                                } else {
                                    delete value[k]
                                }
                            }
                        }
                    }
                    return reviver.call(holder, key, value)
                }
                text = String(text);
                cx.lastIndex = 0;
                if (cx.test(text)) {
                    text = text.replace(cx, function(a) {
                        return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
                    })
                }
                if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                    j = eval("(" + text + ")");
                    return typeof reviver === "function" ? walk({
                        "": j
                    }, "") : j
                }
                throw new SyntaxError("JSON.parse")
            }
        }
    }());
    _V_.Player = _V_.Component.extend({
        init: function(tag, addOptions, ready) {
            this.tag = tag;
            var el = this.el = _V_.createElement("div"), options = this.options = {}, width = options.width = tag.getAttribute("width"), height = options.height = tag.getAttribute("height"), initWidth = width || 300, initHeight = height || 150;
            tag.player = el.player = this;
            this.ready(ready);
            tag.parentNode.insertBefore(el, tag);
            el.appendChild(tag);
            el.id = this.id = tag.id;
            el.className = tag.className;
            tag.id += "_html5_api";
            tag.className = "vjs-tech";
            _V_.players[el.id] = this;
            el.setAttribute("width", initWidth);
            el.setAttribute("height", initHeight);
            el.style.width = initWidth + "px";
            el.style.height = initHeight + "px";
            tag.removeAttribute("width");
            tag.removeAttribute("height");
            _V_.merge(options, _V_.options);
            _V_.merge(options, this.getVideoTagSettings());
            _V_.merge(options, addOptions);
            tag.removeAttribute("controls");
            tag.removeAttribute("poster");
            if (tag.hasChildNodes()) {
                for (var i = 0, j = tag.childNodes; i < j.length; i++) {
                    if (j[i].nodeName == "SOURCE" || j[i].nodeName == "TRACK") {
                        tag.removeChild(j[i])
                    }
                }
            }
            this.values = {};
            this.addClass("vjs-paused");
            this.addEvent("ended", this.onEnded);
            this.addEvent("play", this.onPlay);
            this.addEvent("pause", this.onPause);
            this.addEvent("progress", this.onProgress);
            this.addEvent("error", this.onError);
            if (options.controls) {
                this.ready(function() {
                    this.initComponents()
                })
            }
            this.textTracks = [];
            if (options.tracks && options.tracks.length > 0) {
                this.addTextTracks(options.tracks)
            }
            if (!options.sources || options.sources.length == 0) {
                for (var i = 0, j = options.techOrder; i < j.length; i++) {
                    var techName = j[i], tech = _V_[techName];
                    if (tech.isSupported()) {
                        this.loadTech(techName);
                        break
                    }
                }
            } else {
                this.src(options.sources)
            }
        },
        values: {},
        destroy: function() {
            this.stopTrackingProgress();
            this.stopTrackingCurrentTime();
            _V_.players[this.id] = null;
            delete _V_.players[this.id];
            this.tech.destroy();
            this.el.parentNode.removeChild(this.el)
        },
        createElement: function(type, options) {},
        getVideoTagSettings: function() {
            var options = {
                sources: [],
                tracks: []
            };
            options.src = this.tag.getAttribute("src");
            options.controls = this.tag.getAttribute("controls") !== null;
            options.poster = this.tag.getAttribute("poster");
            options.preload = this.tag.getAttribute("preload");
            options.autoplay = this.tag.getAttribute("autoplay") !== null;
            options.loop = this.tag.getAttribute("loop") !== null;
            options.muted = this.tag.getAttribute("muted") !== null;
            if (this.tag.hasChildNodes()) {
                for (var c, i = 0, j = this.tag.childNodes; i < j.length; i++) {
                    c = j[i];
                    if (c.nodeName == "SOURCE") {
                        options.sources.push({
                            src: c.getAttribute("src"),
                            type: c.getAttribute("type"),
                            media: c.getAttribute("media"),
                            title: c.getAttribute("title")
                        })
                    }
                    if (c.nodeName == "TRACK") {
                        options.tracks.push({
                            src: c.getAttribute("src"),
                            kind: c.getAttribute("kind"),
                            srclang: c.getAttribute("srclang"),
                            label: c.getAttribute("label"),
                            "default": c.getAttribute("default") !== null,
                            title: c.getAttribute("title")
                        })
                    }
                }
            }
            return options
        },
        loadTech: function(techName, source) {
            if (this.tech) {
                this.unloadTech()
            } else {
                if (techName != "html5" && this.tag) {
                    this.el.removeChild(this.tag);
                    this.tag = false
                }
            }
            this.techName = techName;
            this.isReady = false;
            var techReady = function() {
                this.player.triggerReady();
                if (!this.support.progressEvent) {
                    this.player.manualProgressOn()
                }
                if (!this.support.timeupdateEvent) {
                    this.player.manualTimeUpdatesOn()
                }
            };
            var techOptions = _V_.merge({
                source: source,
                parentEl: this.el
            }, this.options[techName]);
            if (source) {
                if (source.src == this.values.src && this.values.currentTime > 0) {
                    techOptions.startTime = this.values.currentTime
                }
                this.values.src = source.src
            }
            this.tech = new _V_[techName](this, techOptions);
            this.tech.ready(techReady)
        },
        unloadTech: function() {
            this.tech.destroy();
            if (this.manualProgress) {
                this.manualProgressOff()
            }
            if (this.manualTimeUpdates) {
                this.manualTimeUpdatesOff()
            }
            this.tech = false
        },
        manualProgressOn: function() {
            this.manualProgress = true;
            this.trackProgress();
            this.tech.addEvent("progress", function() {
                this.removeEvent("progress", arguments.callee);
                this.support.progressEvent = true;
                this.player.manualProgressOff()
            })
        },
        manualProgressOff: function() {
            this.manualProgress = false;
            this.stopTrackingProgress()
        },
        trackProgress: function() {
            this.progressInterval = setInterval(_V_.proxy(this, function() {
                if (this.values.bufferEnd < this.buffered().end(0)) {
                    this.triggerEvent("progress")
                } else {
                    if (this.bufferedPercent() == 1) {
                        this.stopTrackingProgress();
                        this.triggerEvent("progress")
                    }
                }
            }), 500)
        },
        stopTrackingProgress: function() {
            clearInterval(this.progressInterval)
        },
        manualTimeUpdatesOn: function() {
            this.manualTimeUpdates = true;
            this.addEvent("play", this.trackCurrentTime);
            this.addEvent("pause", this.stopTrackingCurrentTime);
            this.tech.addEvent("timeupdate", function() {
                this.removeEvent("timeupdate", arguments.callee);
                this.support.timeupdateEvent = true;
                this.player.manualTimeUpdatesOff()
            })
        },
        manualTimeUpdatesOff: function() {
            this.manualTimeUpdates = false;
            this.stopTrackingCurrentTime();
            this.removeEvent("play", this.trackCurrentTime);
            this.removeEvent("pause", this.stopTrackingCurrentTime)
        },
        trackCurrentTime: function() {
            if (this.currentTimeInterval) {
                this.stopTrackingCurrentTime()
            }
            this.currentTimeInterval = setInterval(_V_.proxy(this, function() {
                this.triggerEvent("timeupdate")
            }), 250)
        },
        stopTrackingCurrentTime: function() {
            clearInterval(this.currentTimeInterval)
        },
        onEnded: function() {
            if (this.options.loop) {
                this.currentTime(0);
                this.play()
            } else {
                this.pause();
                this.currentTime(0);
                this.pause()
            }
        },
        onPlay: function() {
            _V_.removeClass(this.el, "vjs-paused");
            _V_.addClass(this.el, "vjs-playing")
        },
        onPause: function() {
            _V_.removeClass(this.el, "vjs-playing");
            _V_.addClass(this.el, "vjs-paused")
        },
        onProgress: function() {
            if (this.bufferedPercent() == 1) {
                this.triggerEvent("loadedalldata")
            }
        },
        onError: function(e) {
            _V_.log("Video Error", e)
        },
        techCall: function(method, arg) {
            if (!this.tech.isReady) {
                this.tech.ready(function() {
                    this[method](arg)
                })
            } else {
                try {
                    this.tech[method](arg)
                } catch (e) {
                    _V_.log(e)
                }
            }
        },
        techGet: function(method) {
            if (this.tech.isReady) {
                try {
                    return this.tech[method]()
                } catch (e) {
                    if (this.tech[method] === undefined) {
                        _V_.log("Video.js: " + method + " method not defined for " + this.techName + " playback technology.", e)
                    } else {
                        if (e.name == "TypeError") {
                            _V_.log("Video.js: " + method + " unavailable on " + this.techName + " playback technology element.", e);
                            this.tech.isReady = false
                        } else {
                            _V_.log(e)
                        }
                    }
                }
            }
            return 
        },
        play: function() {
            this.techCall("play");
            return this
        },
        pause: function() {
            this.techCall("pause");
            return this
        },
        paused: function() {
            return (this.techGet("paused") === false) ? false : true
        },
        currentTime: function(seconds) {
            if (seconds !== undefined) {
                this.values.lastSetCurrentTime = seconds;
                this.techCall("setCurrentTime", seconds);
                if (this.manualTimeUpdates) {
                    this.triggerEvent("timeupdate")
                }
                return this
            }
            return this.values.currentTime = (this.techGet("currentTime") || 0)
        },
        duration: function() {
            return parseFloat(this.techGet("duration"))
        },
        remainingTime: function() {
            return this.duration() - this.currentTime()
        },
        buffered: function() {
            var buffered = this.techGet("buffered"), start = 0, end = this.values.bufferEnd = this.values.bufferEnd || 0, timeRange;
            if (buffered && buffered.length > 0 && buffered.end(0) !== end) {
                end = buffered.end(0);
                this.values.bufferEnd = end
            }
            return _V_.createTimeRange(start, end)
        },
        bufferedPercent: function() {
            return (this.duration()) ? this.buffered().end(0) / this.duration() : 0
        },
        volume: function(percentAsDecimal) {
            var vol;
            if (percentAsDecimal !== undefined) {
                vol = Math.max(0, Math.min(1, parseFloat(percentAsDecimal)));
                this.values.volume = vol;
                this.techCall("setVolume", vol);
                _V_.setLocalStorage("volume", vol);
                return this
            }
            vol = parseFloat(this.techGet("volume"));
            return (isNaN(vol)) ? 1 : vol
        },
        muted: function(muted) {
            if (muted !== undefined) {
                this.techCall("setMuted", muted);
                return this
            }
            return this.techGet("muted") || false
        },
        width: function(width, skipListeners) {
            if (width !== undefined) {
                this.el.width = width;
                this.el.style.width = width + "px";
                if (!skipListeners) {
                    this.triggerEvent("resize")
                }
                return this
            }
            return parseInt(this.el.getAttribute("width"))
        },
        height: function(height) {
            if (height !== undefined) {
                this.el.height = height;
                this.el.style.height = height + "px";
                this.triggerEvent("resize");
                return this
            }
            return parseInt(this.el.getAttribute("height"))
        },
        size: function(width, height) {
            return this.width(width, true).height(height)
        },
        supportsFullScreen: function() {
            return this.techGet("supportsFullScreen") || false
        },
        requestFullScreen: function() {
            var requestFullScreen = _V_.support.requestFullScreen;
            this.isFullScreen = true;
            if (requestFullScreen) {
                _V_.addEvent(document, requestFullScreen.eventName, this.proxy(function() {
                    this.isFullScreen = document[requestFullScreen.isFullScreen];
                    if (this.isFullScreen == false) {
                        _V_.removeEvent(document, requestFullScreen.eventName, arguments.callee)
                    }
                    this.triggerEvent("fullscreenchange")
                }));
                if (this.tech.support.fullscreenResize === false && this.options.flash.iFrameMode != true) {
                    this.pause();
                    this.unloadTech();
                    _V_.addEvent(document, requestFullScreen.eventName, this.proxy(function() {
                        _V_.removeEvent(document, requestFullScreen.eventName, arguments.callee);
                        this.loadTech(this.techName, {
                            src: this.values.src
                        })
                    }));
                    this.el[requestFullScreen.requestFn]()
                } else {
                    this.el[requestFullScreen.requestFn]()
                }
            } else {
                if (this.tech.supportsFullScreen()) {
                    this.triggerEvent("fullscreenchange");
                    this.techCall("enterFullScreen")
                } else {
                    this.triggerEvent("fullscreenchange");
                    this.enterFullWindow()
                }
            }
            return this
        },
        cancelFullScreen: function() {
            var requestFullScreen = _V_.support.requestFullScreen;
            this.isFullScreen = false;
            if (requestFullScreen) {
                if (this.tech.support.fullscreenResize === false && this.options.flash.iFrameMode != true) {
                    this.pause();
                    this.unloadTech();
                    _V_.addEvent(document, requestFullScreen.eventName, this.proxy(function() {
                        _V_.removeEvent(document, requestFullScreen.eventName, arguments.callee);
                        this.loadTech(this.techName, {
                            src: this.values.src
                        })
                    }));
                    document[requestFullScreen.cancelFn]()
                } else {
                    document[requestFullScreen.cancelFn]()
                }
            } else {
                if (this.tech.supportsFullScreen()) {
                    this.techCall("exitFullScreen");
                    this.triggerEvent("fullscreenchange")
                } else {
                    this.exitFullWindow();
                    this.triggerEvent("fullscreenchange")
                }
            }
            return this
        },
        enterFullWindow: function() {
            this.isFullWindow = true;
            this.docOrigOverflow = document.documentElement.style.overflow;
            _V_.addEvent(document, "keydown", _V_.proxy(this, this.fullWindowOnEscKey));
            document.documentElement.style.overflow = "hidden";
            _V_.addClass(document.body, "vjs-full-window");
            _V_.addClass(this.el, "vjs-fullscreen");
            this.triggerEvent("enterFullWindow")
        },
        fullWindowOnEscKey: function(event) {
            if (event.keyCode == 27) {
                if (this.isFullScreen == true) {
                    this.cancelFullScreen()
                } else {
                    this.exitFullWindow()
                }
            }
        },
        exitFullWindow: function() {
            this.isFullWindow = false;
            _V_.removeEvent(document, "keydown", this.fullWindowOnEscKey);
            document.documentElement.style.overflow = this.docOrigOverflow;
            _V_.removeClass(document.body, "vjs-full-window");
            _V_.removeClass(this.el, "vjs-fullscreen");
            this.triggerEvent("exitFullWindow")
        },
        selectSource: function(sources) {
            for (var i = 0, j = this.options.techOrder; i < j.length; i++) {
                var techName = j[i], tech = _V_[techName];
                if (tech.isSupported()) {
                    for (var a = 0, b = sources; a < b.length; a++) {
                        var source = b[a];
                        if (tech.canPlaySource.call(this, source)) {
                            return {
                                source: source,
                                tech: techName
                            }
                        }
                    }
                }
            }
            return false
        },
        src: function(source) {
            if (source instanceof Array) {
                var sourceTech = this.selectSource(source), source, techName;
                if (sourceTech) {
                    source = sourceTech.source;
                    techName = sourceTech.tech;
                    if (techName == this.techName) {
                        this.src(source)
                    } else {
                        this.loadTech(techName, source)
                    }
                } else {
                    _V_.log("No compatible source and playback technology were found.")
                }
            } else {
                if (source instanceof Object) {
                    if (_V_[this.techName].canPlaySource(source)) {
                        this.src(source.src)
                    } else {
                        this.src([source])
                    }
                } else {
                    this.values.src = source;
                    if (!this.isReady) {
                        this.ready(function() {
                            this.src(source)
                        })
                    } else {
                        this.techCall("src", source);
                        if (this.options.preload == "auto") {
                            this.load()
                        }
                        if (this.options.autoplay) {
                            this.play()
                        }
                    }
                }
            }
            return this
        },
        load: function() {
            this.techCall("load");
            return this
        },
        currentSrc: function() {
            return this.techGet("currentSrc") || this.values.src || ""
        },
        preload: function(value) {
            if (value !== undefined) {
                this.techCall("setPreload", value);
                this.options.preload = value;
                return this
            }
            return this.techGet("preload")
        },
        autoplay: function(value) {
            if (value !== undefined) {
                this.techCall("setAutoplay", value);
                this.options.autoplay = value;
                return this
            }
            return this.techGet("autoplay", value)
        },
        loop: function(value) {
            if (value !== undefined) {
                this.techCall("setLoop", value);
                this.options.loop = value;
                return this
            }
            return this.techGet("loop")
        },
        controls: function() {
            return this.options.controls
        },
        poster: function() {
            return this.techGet("poster")
        },
        error: function() {
            return this.techGet("error")
        },
        ended: function() {
            return this.techGet("ended")
        }
    });
    (function() {
        var requestFn, cancelFn, eventName, isFullScreen, playerProto = _V_.Player.prototype;
        if (document.cancelFullscreen !== undefined) {
            requestFn = "requestFullscreen";
            cancelFn = "exitFullscreen";
            eventName = "fullscreenchange";
            isFullScreen = "fullScreen"
        } else {
            _V_.each(["moz", "webkit"], function(prefix) {
                if ((prefix != "moz" || document.mozFullScreenEnabled) && document[prefix + "CancelFullScreen"] !== undefined) {
                    requestFn = prefix + "RequestFullScreen";
                    cancelFn = prefix + "CancelFullScreen";
                    eventName = prefix + "fullscreenchange";
                    if (prefix == "webkit") {
                        isFullScreen = prefix + "IsFullScreen"
                    } else {
                        isFullScreen = prefix + "FullScreen"
                    }
                }
            })
        }
        if (requestFn) {
            _V_.support.requestFullScreen = {
                requestFn: requestFn,
                cancelFn: cancelFn,
                eventName: eventName,
                isFullScreen: isFullScreen
            }
        }
    })();
    _V_.PlaybackTech = _V_.Component.extend({
        init: function(player, options) {},
        onClick: function() {
            if (this.player.options.controls) {
                _V_.PlayToggle.prototype.onClick.call(this)
            }
        }
    });
    _V_.apiMethods = "play,pause,paused,currentTime,setCurrentTime,duration,buffered,volume,setVolume,muted,setMuted,width,height,supportsFullScreen,enterFullScreen,src,load,currentSrc,preload,setPreload,autoplay,setAutoplay,loop,setLoop,error,networkState,readyState,seeking,initialTime,startOffsetTime,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks,defaultPlaybackRate,playbackRate,mediaGroup,controller,controls,defaultMuted".split(",");
    _V_.each(_V_.apiMethods, function(methodName) {
        _V_.PlaybackTech.prototype[methodName] = function() {
            throw new Error("The '" + methodName + "' method is not available on the playback technology's API")
        }
    });
    _V_.html5 = _V_.PlaybackTech.extend({
        init: function(player, options, ready) {
            this.player = player;
            this.el = this.createElement();
            this.ready(ready);
            this.addEvent("click", this.proxy(this.onClick));
            var source = options.source;
            if (source && this.el.currentSrc == source.src) {
                player.triggerEvent("loadstart")
            } else {
                if (source) {
                    this.el.src = source.src
                }
            }
            player.ready(function() {
                if (this.options.autoplay && this.paused()) {
                    this.tag.poster = null;
                    this.play()
                }
            });
            this.setupTriggers();
            this.triggerReady()
        },
        destroy: function() {
            this.player.tag = false;
            this.removeTriggers();
            this.el.parentNode.removeChild(this.el)
        },
        createElement: function() {
            var html5 = _V_.html5, player = this.player, el = player.tag, newEl;
            if (!el || this.support.movingElementInDOM === false) {
                if (el) {
                    player.el.removeChild(el)
                }
                newEl = _V_.createElement("video", {
                    id: el.id || player.el.id + "_html5_api",
                    className: el.className || "vjs-tech"
                });
                el = newEl;
                _V_.insertFirst(el, player.el)
            }
            _V_.each(["autoplay", "preload", "loop", "muted"], function(attr) {
                if (player.options[attr] !== null) {
                    el[attr] = player.options[attr]
                }
            }, this);
            return el
        },
        setupTriggers: function() {
            _V_.each.call(this, _V_.html5.events, function(type) {
                _V_.addEvent(this.el, type, _V_.proxy(this.player, this.eventHandler))
            })
        },
        removeTriggers: function() {
            _V_.each.call(this, _V_.html5.events, function(type) {
                _V_.removeEvent(this.el, type, _V_.proxy(this.player, this.eventHandler))
            })
        },
        eventHandler: function(e) {
            e.stopPropagation();
            this.triggerEvent(e)
        },
        play: function() {
            this.el.play()
        },
        pause: function() {
            this.el.pause()
        },
        paused: function() {
            return this.el.paused
        },
        currentTime: function() {
            return this.el.currentTime
        },
        setCurrentTime: function(seconds) {
            try {
                this.el.currentTime = seconds
            } catch (e) {
                _V_.log(e, "Video isn't ready. (VideoJS)")
            }
        },
        duration: function() {
            return this.el.duration || 0
        },
        buffered: function() {
            return this.el.buffered
        },
        volume: function() {
            return this.el.volume
        },
        setVolume: function(percentAsDecimal) {
            this.el.volume = percentAsDecimal
        },
        muted: function() {
            return this.el.muted
        },
        setMuted: function(muted) {
            this.el.muted = muted
        },
        width: function() {
            return this.el.offsetWidth
        },
        height: function() {
            return this.el.offsetHeight
        },
        supportsFullScreen: function() {
            if (typeof this.el.webkitEnterFullScreen == "function") {
                if (!navigator.userAgent.match("Chrome")&&!navigator.userAgent.match("Mac OS X 10.5")) {
                    return true
                }
            }
            return false
        },
        enterFullScreen: function() {
            try {
                this.el.webkitEnterFullScreen()
            } catch (e) {
                if (e.code == 11) {
                    _V_.log("VideoJS: Video not ready.")
                }
            }
        },
        src: function(src) {
            this.el.src = src
        },
        load: function() {
            this.el.load()
        },
        currentSrc: function() {
            return this.el.currentSrc
        },
        preload: function() {
            return this.el.preload
        },
        setPreload: function(val) {
            this.el.preload = val
        },
        autoplay: function() {
            return this.el.autoplay
        },
        setAutoplay: function(val) {
            this.el.autoplay = val
        },
        loop: function() {
            return this.el.loop
        },
        setLoop: function(val) {
            this.el.loop = val
        },
        error: function() {
            return this.el.error
        },
        seeking: function() {
            return this.el.seeking
        },
        ended: function() {
            return this.el.ended
        },
        controls: function() {
            return this.player.options.controls
        },
        defaultMuted: function() {
            return this.el.defaultMuted
        }
    });
    _V_.html5.isSupported = function() {
        return !!document.createElement("video").canPlayType
    };
    _V_.html5.canPlaySource = function(srcObj) {
        return !!document.createElement("video").canPlayType(srcObj.type)
    };
    _V_.html5.events = "loadstart,suspend,abort,error,emptied,stalled,loadedmetadata,loadeddata,canplay,canplaythrough,playing,waiting,seeking,seeked,ended,durationchange,timeupdate,progress,play,pause,ratechange,volumechange".split(",");
    _V_.html5.prototype.support = {
        fullscreen: (typeof _V_.testVid.webkitEnterFullScreen !== undefined) ? (!_V_.ua.match("Chrome")&&!_V_.ua.match("Mac OS X 10.5") ? true : false): false,
        movingElementInDOM: !_V_.isIOS()
    };
    if (_V_.isAndroid()) {
        if (_V_.androidVersion() < 3) {
            document.createElement("video").constructor.prototype.canPlayType = function(type) {
                return (type && type.toLowerCase().indexOf("video/mp4")!=-1) ? "maybe" : ""
            }
        }
    }
    _V_.flash = _V_.PlaybackTech.extend({
        init: function(player, options) {
            this.player = player;
            var source = options.source, parentEl = options.parentEl, placeHolder = this.el = _V_.createElement("div", {
                id: parentEl.id + "_temp_flash"
            }), objId = player.el.id + "_flash_api", playerOptions = player.options, flashVars = _V_.merge({
                readyFunction: "_V_.flash.onReady",
                eventProxyFunction: "_V_.flash.onEvent",
                errorEventProxyFunction: "_V_.flash.onError",
                autoplay: playerOptions.autoplay,
                preload: playerOptions.preload,
                loop: playerOptions.loop,
                muted: playerOptions.muted
            }, options.flashVars), params = _V_.merge({
                wmode: "opaque",
                bgcolor: "#000000"
            }, options.params), attributes = _V_.merge({
                id: objId,
                name: objId,
                "class": "vjs-tech"
            }, options.attributes);
            if (source) {
                flashVars.src = encodeURIComponent(_V_.getAbsoluteURL(source.src))
            }
            _V_.insertFirst(placeHolder, parentEl);
            if (options.startTime) {
                this.ready(function() {
                    this.load();
                    this.play();
                    this.currentTime(options.startTime)
                })
            }
            if (options.iFrameMode == true&&!_V_.isFF) {
                var iFrm = _V_.createElement("iframe", {
                    id: objId + "_iframe",
                    name: objId + "_iframe",
                    className: "vjs-tech",
                    scrolling: "no",
                    marginWidth: 0,
                    marginHeight: 0,
                    frameBorder: 0
                });
                flashVars.readyFunction = "ready";
                flashVars.eventProxyFunction = "events";
                flashVars.errorEventProxyFunction = "errors";
                _V_.addEvent(iFrm, "load", _V_.proxy(this, function() {
                    var iDoc, objTag, swfLoc, iWin = iFrm.contentWindow, varString = "";
                    iDoc = iFrm.contentDocument ? iFrm.contentDocument : iFrm.contentWindow.document;
                    iDoc.write(_V_.flash.getEmbedCode(options.swf, flashVars, params, attributes));
                    iWin.player = this.player;
                    iWin.ready = _V_.proxy(this.player, function(currSwf) {
                        var el = iDoc.getElementById(currSwf), player = this, tech = player.tech;
                        tech.el = el;
                        _V_.addEvent(el, "click", tech.proxy(tech.onClick));
                        _V_.flash.checkReady(tech)
                    });
                    iWin.events = _V_.proxy(this.player, function(swfID, eventName, other) {
                        var player = this;
                        if (player && player.techName == "flash") {
                            player.triggerEvent(eventName)
                        }
                    });
                    iWin.errors = _V_.proxy(this.player, function(swfID, eventName) {
                        _V_.log("Flash Error", eventName)
                    })
                }));
                placeHolder.parentNode.replaceChild(iFrm, placeHolder)
            } else {
                _V_.flash.embed(options.swf, placeHolder, flashVars, params, attributes)
            }
        },
        destroy: function() {
            this.el.parentNode.removeChild(this.el)
        },
        play: function() {
            this.el.vjs_play()
        },
        pause: function() {
            this.el.vjs_pause()
        },
        src: function(src) {
            src = _V_.getAbsoluteURL(src);
            this.el.vjs_src(src);
            if (this.player.autoplay()) {
                var tech = this;
                setTimeout(function() {
                    tech.play()
                }, 0)
            }
        },
        load: function() {
            this.el.vjs_load()
        },
        poster: function() {
            this.el.vjs_getProperty("poster")
        },
        buffered: function() {
            return _V_.createTimeRange(0, this.el.vjs_getProperty("buffered"))
        },
        supportsFullScreen: function() {
            return false
        },
        enterFullScreen: function() {
            return false
        }
    });
    (function() {
        var api = _V_.flash.prototype, readWrite = "preload,currentTime,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","), readOnly = "error,currentSrc,networkState,readyState,seeking,initialTime,duration,startOffsetTime,paused,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks".split(","), callOnly = "load,play,pause".split(",");
        createSetter = function(attr) {
            var attrUpper = attr.charAt(0).toUpperCase() + attr.slice(1);
            api["set" + attrUpper] = function(val) {
                return this.el.vjs_setProperty(attr, val)
            }
        }, createGetter = function(attr) {
            api[attr] = function() {
                return this.el.vjs_getProperty(attr)
            }
        };
        _V_.each(readWrite, function(attr) {
            createGetter(attr);
            createSetter(attr)
        });
        _V_.each(readOnly, function(attr) {
            createGetter(attr)
        })
    })();
    _V_.flash.isSupported = function() {
        return _V_.flash.version()[0] >= 10
    };
    _V_.flash.canPlaySource = function(srcObj) {
        if (srcObj.type in _V_.flash.prototype.support.formats) {
            return "maybe"
        }
    };
    _V_.flash.prototype.support = {
        formats: {
            "video/flv": "FLV",
            "video/x-flv": "FLV",
            "video/mp4": "MP4",
            "video/m4v": "MP4"
        },
        progressEvent: false,
        timeupdateEvent: false,
        fullscreenResize: false,
        parentResize: !(_V_.ua.match("Firefox"))
    };
    _V_.flash.onReady = function(currSwf) {
        var el = _V_.el(currSwf);
        var player = el.player || el.parentNode.player, tech = player.tech;
        el.player = player;
        tech.el = el;
        tech.addEvent("click", tech.onClick);
        _V_.flash.checkReady(tech)
    };
    _V_.flash.checkReady = function(tech) {
        if (tech.el.vjs_getProperty) {
            tech.triggerReady()
        } else {
            setTimeout(function() {
                _V_.flash.checkReady(tech)
            }, 50)
        }
    };
    _V_.flash.onEvent = function(swfID, eventName) {
        var player = _V_.el(swfID).player;
        player.triggerEvent(eventName)
    };
    _V_.flash.onError = function(swfID, err) {
        var player = _V_.el(swfID).player;
        player.triggerEvent("error");
        _V_.log("Flash Error", err, swfID)
    };
    _V_.flash.version = function() {
        var version = "0,0,0";
        try {
            version = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
        } catch (e) {
            try {
                if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
                    version = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
                }
            } catch (e) {}
        }
        return version.split(",")
    };
    _V_.flash.embed = function(swf, placeHolder, flashVars, params, attributes) {
        var code = _V_.flash.getEmbedCode(swf, flashVars, params, attributes), obj = _V_.createElement("div", {
            innerHTML: code
        }).childNodes[0], par = placeHolder.parentNode;
        placeHolder.parentNode.replaceChild(obj, placeHolder);
        if (_V_.isIE()) {
            var newObj = par.childNodes[0];
            setTimeout(function() {
                newObj.style.display = "block"
            }, 1000)
        }
        return obj
    };
    _V_.flash.getEmbedCode = function(swf, flashVars, params, attributes) {
        var objTag = '<object type="application/x-shockwave-flash"', flashVarsString = "", paramsString = "";
        attrsString = "";
        if (flashVars) {
            _V_.eachProp(flashVars, function(key, val) {
                flashVarsString += (key + "=" + val + "&amp;")
            })
        }
        params = _V_.merge({
            movie: swf,
            flashvars: flashVarsString,
            allowScriptAccess: "always",
            allowNetworking: "all"
        }, params);
        _V_.eachProp(params, function(key, val) {
            paramsString += '<param name="' + key + '" value="' + val + '" />'
        });
        attributes = _V_.merge({
            data: swf,
            width: "100%",
            height: "100%"
        }, attributes);
        _V_.eachProp(attributes, function(key, val) {
            attrsString += (key + '="' + val + '" ')
        });
        return objTag + attrsString + ">" + paramsString + "</object>"
    };
    _V_.merge(_V_.Player.prototype, {
        addTextTracks: function(trackObjects) {
            var tracks = this.textTracks = (this.textTracks) ? this.textTracks: [], i = 0, j = trackObjects.length, track, Kind;
            for (; i < j; i++) {
                Kind = _V_.uc(trackObjects[i].kind || "subtitles");
                track = new _V_[Kind + "Track"](this, trackObjects[i]);
                tracks.push(track);
                if (track["default"]) {
                    this.ready(_V_.proxy(track, track.show))
                }
            }
            return this
        },
        showTextTrack: function(id, disableSameKind) {
            var tracks = this.textTracks, i = 0, j = tracks.length, track, showTrack, kind;
            for (; i < j; i++) {
                track = tracks[i];
                if (track.id === id) {
                    track.show();
                    showTrack = track
                } else {
                    if (disableSameKind && track.kind == disableSameKind && track.mode > 0) {
                        track.disable()
                    }
                }
            }
            kind = (showTrack) ? showTrack.kind : ((disableSameKind) ? disableSameKind : false);
            if (kind) {
                this.triggerEvent(kind + "trackchange")
            }
            return this
        }
    });
    _V_.Track = _V_.Component.extend({
        init: function(player, options) {
            this._super(player, options);
            _V_.merge(this, {
                id: options.id || ("vjs_" + options.kind + "_" + options.language + "_" + _V_.guid++),
                src: options.src,
                "default": options["default"],
                title: options.title,
                language: options.srclang,
                label: options.label,
                cues: [],
                activeCues: [],
                readyState: 0,
                mode: 0
            })
        },
        createElement: function() {
            return this._super("div", {
                className: "vjs-" + this.kind + " vjs-text-track"
            })
        },
        show: function() {
            this.activate();
            this.mode = 2;
            this._super()
        },
        hide: function() {
            this.activate();
            this.mode = 1;
            this._super()
        },
        disable: function() {
            if (this.mode == 2) {
                this.hide()
            }
            this.deactivate();
            this.mode = 0
        },
        activate: function() {
            if (this.readyState == 0) {
                this.load()
            }
            if (this.mode == 0) {
                this.player.addEvent("timeupdate", this.proxy(this.update, this.id));
                this.player.addEvent("ended", this.proxy(this.reset, this.id));
                if (this.kind == "captions" || this.kind == "subtitles") {
                    this.player.textTrackDisplay.addComponent(this)
                }
            }
        },
        deactivate: function() {
            this.player.removeEvent("timeupdate", this.proxy(this.update, this.id));
            this.player.removeEvent("ended", this.proxy(this.reset, this.id));
            this.reset();
            this.player.textTrackDisplay.removeComponent(this)
        },
        load: function() {
            if (this.readyState == 0) {
                this.readyState = 1;
                _V_.get(this.src, this.proxy(this.parseCues), this.proxy(this.onError))
            }
        },
        onError: function(err) {
            this.error = err;
            this.readyState = 3;
            this.triggerEvent("error")
        },
        parseCues: function(srcContent) {
            var cue, time, text, lines = srcContent.split("\n"), line = "", id;
            for (var i = 1, j = lines.length; i < j; i++) {
                line = _V_.trim(lines[i]);
                if (line) {
                    if (line.indexOf("-->")==-1) {
                        id = line;
                        line = _V_.trim(lines[++i])
                    } else {
                        id = this.cues.length
                    }
                    cue = {
                        id: id,
                        index: this.cues.length
                    };
                    time = line.split(" --> ");
                    cue.startTime = this.parseCueTime(time[0]);
                    cue.endTime = this.parseCueTime(time[1]);
                    text = [];
                    while (lines[++i] && (line = _V_.trim(lines[i]))) {
                        text.push(line)
                    }
                    cue.text = text.join("<br/>");
                    this.cues.push(cue)
                }
            }
            this.readyState = 2;
            this.triggerEvent("loaded")
        },
        parseCueTime: function(timeText) {
            var parts = timeText.split(":"), time = 0, hours, minutes, other, seconds, ms, flags;
            if (parts.length == 3) {
                hours = parts[0];
                minutes = parts[1];
                other = parts[2]
            } else {
                hours = 0;
                minutes = parts[0];
                other = parts[1]
            }
            other = other.split(/\s+/);
            seconds = other.splice(0, 1)[0];
            seconds = seconds.split(/\.|,/);
            ms = parseFloat(seconds[1]);
            seconds = seconds[0];
            time += parseFloat(hours) * 3600;
            time += parseFloat(minutes) * 60;
            time += parseFloat(seconds);
            if (ms) {
                time += ms / 1000
            }
            return time
        },
        update: function() {
            if (this.cues.length > 0) {
                var time = this.player.currentTime();
                if (this.prevChange === undefined || time < this.prevChange || this.nextChange <= time) {
                    var cues = this.cues, newNextChange = this.player.duration(), newPrevChange = 0, reverse = false, newCues = [], firstActiveIndex, lastActiveIndex, html = "", cue, i, j;
                    if (time >= this.nextChange || this.nextChange === undefined) {
                        i = (this.firstActiveIndex !== undefined) ? this.firstActiveIndex : 0
                    } else {
                        reverse = true;
                        i = (this.lastActiveIndex !== undefined) ? this.lastActiveIndex : cues.length - 1
                    }
                    while (true) {
                        cue = cues[i];
                        if (cue.endTime <= time) {
                            newPrevChange = Math.max(newPrevChange, cue.endTime);
                            if (cue.active) {
                                cue.active = false
                            }
                        } else {
                            if (time < cue.startTime) {
                                newNextChange = Math.min(newNextChange, cue.startTime);
                                if (cue.active) {
                                    cue.active = false
                                }
                                if (!reverse) {
                                    break
                                }
                            } else {
                                if (reverse) {
                                    newCues.splice(0, 0, cue);
                                    if (lastActiveIndex === undefined) {
                                        lastActiveIndex = i
                                    }
                                    firstActiveIndex = i
                                } else {
                                    newCues.push(cue);
                                    if (firstActiveIndex === undefined) {
                                        firstActiveIndex = i
                                    }
                                    lastActiveIndex = i
                                }
                                newNextChange = Math.min(newNextChange, cue.endTime);
                                newPrevChange = Math.max(newPrevChange, cue.startTime);
                                cue.active = true
                            }
                        }
                        if (reverse) {
                            if (i === 0) {
                                break
                            } else {
                                i--
                            }
                        } else {
                            if (i === cues.length - 1) {
                                break
                            } else {
                                i++
                            }
                        }
                    }
                    this.activeCues = newCues;
                    this.nextChange = newNextChange;
                    this.prevChange = newPrevChange;
                    this.firstActiveIndex = firstActiveIndex;
                    this.lastActiveIndex = lastActiveIndex;
                    this.updateDisplay();
                    this.triggerEvent("cuechange")
                }
            }
        },
        updateDisplay: function() {
            var cues = this.activeCues, html = "", i = 0, j = cues.length;
            for (; i < j; i++) {
                html += "<span class='vjs-tt-cue'>" + cues[i].text + "</span>"
            }
            this.el.innerHTML = html
        },
        reset: function() {
            this.nextChange = 0;
            this.prevChange = this.player.duration();
            this.firstActiveIndex = 0;
            this.lastActiveIndex = 0
        }
    });
    _V_.CaptionsTrack = _V_.Track.extend({
        kind: "captions"
    });
    _V_.SubtitlesTrack = _V_.Track.extend({
        kind: "subtitles"
    });
    _V_.ChaptersTrack = _V_.Track.extend({
        kind: "chapters"
    });
    _V_.TextTrackDisplay = _V_.Component.extend({
        createElement: function() {
            return this._super("div", {
                className: "vjs-text-track-display"
            })
        }
    });
    _V_.TextTrackMenuItem = _V_.MenuItem.extend({
        init: function(player, options) {
            var track = this.track = options.track;
            options.label = track.label;
            options.selected = track["default"];
            this._super(player, options);
            this.player.addEvent(track.kind + "trackchange", _V_.proxy(this, this.update))
        },
        onClick: function() {
            this._super();
            this.player.showTextTrack(this.track.id, this.track.kind)
        },
        update: function() {
            if (this.track.mode == 2) {
                this.selected(true)
            } else {
                this.selected(false)
            }
        }
    });
    _V_.OffTextTrackMenuItem = _V_.TextTrackMenuItem.extend({
        init: function(player, options) {
            options.track = {
                kind: options.kind,
                player: player,
                label: "Off"
            };
            this._super(player, options)
        },
        onClick: function() {
            this._super();
            this.player.showTextTrack(this.track.id, this.track.kind)
        },
        update: function() {
            var tracks = this.player.textTracks, i = 0, j = tracks.length, track, off = true;
            for (; i < j; i++) {
                track = tracks[i];
                if (track.kind == this.track.kind && track.mode == 2) {
                    off = false
                }
            }
            if (off) {
                this.selected(true)
            } else {
                this.selected(false)
            }
        }
    });
    _V_.TextTrackButton = _V_.Button.extend({
        init: function(player, options) {
            this._super(player, options);
            this.menu = this.createMenu();
            if (this.items.length === 0) {
                this.hide()
            }
        },
        createMenu: function() {
            var menu = new _V_.Menu(this.player);
            menu.el.appendChild(_V_.createElement("li", {
                className: "vjs-menu-title",
                innerHTML: _V_.uc(this.kind)
            }));
            menu.addItem(new _V_.OffTextTrackMenuItem(this.player, {
                kind: this.kind
            }));
            this.items = this.createItems();
            this.each(this.items, function(item) {
                menu.addItem(item)
            });
            this.addComponent(menu);
            return menu
        },
        createItems: function() {
            var items = [];
            this.each(this.player.textTracks, function(track) {
                if (track.kind === this.kind) {
                    items.push(new _V_.TextTrackMenuItem(this.player, {
                        track: track
                    }))
                }
            });
            return items
        },
        buildCSSClass: function() {
            return this.className + " vjs-menu-button " + this._super()
        },
        onFocus: function() {
            this.menu.lockShowing();
            _V_.one(this.menu.el.childNodes[this.menu.el.childNodes.length - 1], "blur", this.proxy(function() {
                this.menu.unlockShowing()
            }))
        },
        onBlur: function() {},
        onClick: function() {
            this.one("mouseout", this.proxy(function() {
                this.menu.unlockShowing();
                this.el.blur()
            }))
        }
    });
    _V_.CaptionsButton = _V_.TextTrackButton.extend({
        kind: "captions",
        buttonText: "Captions",
        className: "vjs-captions-button"
    });
    _V_.SubtitlesButton = _V_.TextTrackButton.extend({
        kind: "subtitles",
        buttonText: "Subtitles",
        className: "vjs-subtitles-button"
    });
    _V_.ChaptersButton = _V_.TextTrackButton.extend({
        kind: "chapters",
        buttonText: "Chapters",
        className: "vjs-chapters-button",
        createItems: function(chaptersTrack) {
            var items = [];
            this.each(this.player.textTracks, function(track) {
                if (track.kind === this.kind) {
                    items.push(new _V_.TextTrackMenuItem(this.player, {
                        track: track
                    }))
                }
            });
            return items
        },
        createMenu: function() {
            var tracks = this.player.textTracks, i = 0, j = tracks.length, track, chaptersTrack, items = this.items = [];
            for (; i < j; i++) {
                track = tracks[i];
                if (track.kind == this.kind && track["default"]) {
                    if (track.readyState < 2) {
                        this.chaptersTrack = track;
                        track.addEvent("loaded", this.proxy(this.createMenu));
                        return 
                    } else {
                        chaptersTrack = track;
                        break
                    }
                }
            }
            var menu = this.menu = new _V_.Menu(this.player);
            menu.el.appendChild(_V_.createElement("li", {
                className: "vjs-menu-title",
                innerHTML: _V_.uc(this.kind)
            }));
            if (chaptersTrack) {
                var cues = chaptersTrack.cues, i = 0, j = cues.length, cue, mi;
                for (; i < j; i++) {
                    cue = cues[i];
                    mi = new _V_.ChaptersTrackMenuItem(this.player, {
                        track: chaptersTrack,
                        cue: cue
                    });
                    items.push(mi);
                    menu.addComponent(mi)
                }
            }
            this.addComponent(menu);
            if (this.items.length > 0) {
                this.show()
            }
            return menu
        }
    });
    _V_.ChaptersTrackMenuItem = _V_.MenuItem.extend({
        init: function(player, options) {
            var track = this.track = options.track, cue = this.cue = options.cue, currentTime = player.currentTime();
            options.label = cue.text;
            options.selected = (cue.startTime <= currentTime && currentTime < cue.endTime);
            this._super(player, options);
            track.addEvent("cuechange", _V_.proxy(this, this.update))
        },
        onClick: function() {
            this._super();
            this.player.currentTime(this.cue.startTime);
            this.update(this.cue.startTime)
        },
        update: function(time) {
            var cue = this.cue, currentTime = this.player.currentTime();
            if (cue.startTime <= currentTime && currentTime < cue.endTime) {
                this.selected(true)
            } else {
                this.selected(false)
            }
        }
    });
    _V_.merge(_V_.ControlBar.prototype.options.components, {
        subtitlesButton: {},
        captionsButton: {},
        chaptersButton: {}
    });
    _V_.autoSetup = function() {
        var options, vid, player, vids = document.getElementsByTagName("video");
        if (vids && vids.length > 0) {
            for (var i = 0, j = vids.length; i < j; i++) {
                vid = vids[i];
                if (vid && vid.getAttribute) {
                    if (vid.player === undefined) {
                        options = vid.getAttribute("data-setup");
                        if (options !== null) {
                            options = JSON.parse(options || "{}");
                            player = _V_(vid, options)
                        }
                    }
                } else {
                    _V_.autoSetupTimeout(1);
                    break
                }
            }
        } else {
            if (!_V_.windowLoaded) {
                _V_.autoSetupTimeout(1)
            }
        }
    };
    _V_.autoSetupTimeout = function(wait) {
        setTimeout(_V_.autoSetup, wait)
    };
    _V_.addEvent(window, "load", function() {
        _V_.windowLoaded = true
    });
    _V_.autoSetup();
    window.VideoJS = window._V_ = VideoJS
})(window);
/*! scripts/tumblr_editor.js */
var l10n_str = window.l10n_str || {};
(typeof Tumblr !== "undefined") || (Tumblr = {});
Tumblr.Editor = {};
(function(b) {
    var e = function(x, u) {
        u = u || {};
        var w = u.focus || false;
        var i = u.type || false;
        var A = u.layout || "bold,italic,strikethrough,separator,bullist,numlist,separator,blockquote,separator,image,link,unlink,separator,pagebreak,separator,code";
        var h = u.custom_css || "http://assets.tumblr.com/assets/styles/legacy/custom_tinymce.css";
        var B = u.theme || "advanced";
        var z = u.skin || "default";
        var g = u.immediate || false;
        var y = u.plugins || "safari,pagebreak";
        var C = u.resize || false;
        var D = u.min_height || 100;
        var q = u.min_width || 500;
        var n = u.max_width || 500;
        var k = u.placeholder || false;
        var m = u.allow_inline_style ? "|style": "";
        var t = "-a[class|href|id|name|rel|title|target" + m + "],-article[class|id|title" + m + "],-big[class|id|title" + m + "],-blockquote[class|id|title" + m + "],br,-code[class|id|title" + m + "],div[align<center?justify?left?right|class|id|title" + m + "],-em/i[class|id|title],-h1[align<center?justify?left?right|class|id|title" + m + "],-h2[align<center?justify?left?right|class|id|title" + m + "],-h3[align<center?justify?left?right|class|id|title" + m + "],-h4[align<center?justify?left?right|class|id|title" + m + "],-h5[align<center?justify?left?right|class|id|title" + m + "],-h6[align<center?justify?left?right|class|id|title" + m + "],hr[size|noshade],iframe[align<bottom?left?middle?right?top|class|frameborder|height|id|marginheight|marginwidth|name|scrolling<auto?no?yes|src|title|width" + m + "],img[align<bottom?left?middle?right?top|alt|border|class|height|id|name|src|title|width" + m + "],-ins[class|id|title" + m + "],-li[class|id|title|type" + m + "],object[align<bottom?left?middle?right?top|archive|border|class|classid|codebase|codetype|data|declare|height|hspace|id|name|title|type|width" + m + "],-ol[class|id|start|title|type" + m + "],p[align<center?justify?left?right|class|id|title" + m + "],param[id|name|type|value|valuetype<DATA?OBJECT?REF" + m + "],-pre/listing/plaintext/xmp[align|class|id|title|width" + m + "],script[charset|defer|language|src|type" + m + "],-small[class|id|onclick|ondblclick|title" + m + "],span[align<center?justify?left?right|class|id|title" + m + "],-strike/del/s[class|id|title" + m + "],-strong/b[class|id|title" + m + "],-sub[class|id|title" + m + "],-sup[class|id|title" + m + "],-u[class|id|title" + m + "],-ul[class|id|title|type" + m + "]" + (u.extra_elements ? ("," + u.extra_elements) : "");
        if ((!i || i === "rich" || i === "tinymce") && tinyMCE) {
            var p = function() {
                if (z == "default" && window.location.host == "www.tumblr.com") {
                    document.domain = "tumblr.com"
                }
                tinyMCE.init({
                    setup: E,
                    mode: "exact",
                    language: language_for_tinymce ? language_for_tinymce: "en",
                    elements: x,
                    convert_newlines_to_brs: false,
                    theme: B,
                    skin: z,
                    remove_trailing_nbsp: true,
                    theme_advanced_layout_manager: "SimpleLayout",
                    theme_advanced_buttons2: "",
                    theme_advanced_buttons3: "",
                    theme_advanced_toolbar_location: "top",
                    theme_advanced_resizing: C,
                    theme_advanced_resizing_min_width: q,
                    theme_advanced_resizing_max_width: n,
                    theme_advanced_resizing_use_cookie: false,
                    theme_advanced_path: false,
                    content_css: h,
                    plugins: y,
                    autoresize_min_height: D,
                    autoresize_max_height: 750,
                    object_resizing: false,
                    pagebreak_separator: "[[MORE]]",
                    convert_urls: false,
                    process_html: true,
                    cleanup_on_startup: true,
                    inline_styles: false,
                    gecko_spellcheck: true,
                    valid_elements: t,
                    theme_advanced_buttons1: (A),
                    formats: {
                        strikethrough: {
                            inline: "strike"
                        }
                    },
                    width: "100%",
                    paste_preprocess: function(F, G) {
                        if (G.content.indexOf("data:image")!==-1) {
                            G.content = ""
                        }
                    }
                });
                function E(H) {
                    var G = false;
                    var F;
                    H.onRemove.add(function(I) {
                        if (F) {
                            F.off("click.image_upload")
                        }
                    });
                    H.onInit.add(function(I) {
                        I.addShortcut("ctrl+k", "Insert link", "mceLink");
                        if (w) {
                            if (w === "focus_end") {
                                setTimeout(function() {
                                    I.focus();
                                    I.selection.select(I.getBody(), true);
                                    I.selection.collapse(false);
                                    I.execCommand("mceFocus", false, "")
                                }, 200)
                            } else {
                                setTimeout(function() {
                                    I.focus()
                                }, 200)
                            }
                        }
                        if (k) {
                            var K = I.getContent();
                            if (K === "") {
                                I.setContent(k);
                                I.selection.select(I.dom.select("p")[0]);
                                I.selection.collapse(false);
                                G = true
                            }
                        }
                        if (I.plugins.image_upload) {
                            var J = jQuery("a.mce_image_upload").parent("td");
                            var L = jQuery("a.mce_image").parent("td").hide();
                            F = jQuery("a.mce_image").on("click.image_upload", function(M) {
                                M.preventDefault();
                                M.stopPropagation();
                                return false
                            });
                            I.onKeyDown.add(function(M, N) {
                                if (N.altKey) {
                                    J.hide();
                                    L.show()
                                }
                            });
                            I.onKeyUp.add(function(M, N) {
                                if (!jQuery("body").hasClass("popover_open")) {
                                    J.show();
                                    L.hide()
                                }
                            })
                        }
                        if (I.plugins.autoresize) {
                            I.onChange.add(function(N, M) {
                                var O = N.settings.resize_events_blackout;
                                N.settings.resize_events_blackout = true;
                                if (!O) {
                                    N.execCommand("mceAutoResize")
                                }
                                clearTimeout(N.settings.resize_events_blackout_timeout);
                                N.settings.resize_events_blackout_timeout = setTimeout(function() {
                                    N.settings.resize_events_blackout = false
                                }, 100)
                            });
                            tinymce.dom.Event.add(I.getWin(), "resize", function() {
                                if (!I.settings.resize_events_blackout && this.innerHeight) {
                                    I.plugins.autoresize.autoresize_min_height = this.innerHeight;
                                    d("tinymce.resize", document)
                                } else {
                                    d("tinymce.autoresize", document)
                                }
                            })
                        }
                        tinymce.dom.Event.add(I.getBody(), "focus", function(M) {
                            I.execCommand("mceAutoResize");
                            d("tinymce.focus", document);
                            return false
                        });
                        tinymce.dom.Event.add(I.getBody(), "dragenter", function(M) {
                            return tinymce.dom.Event.cancel(M)
                        });
                        tinymce.dom.Event.add(I.getBody().parentNode, "drop", function(M) {
                            tinymce.dom.Event.cancel(M);
                            tinymce.dom.Event.stop(M)
                        });
                        d("tinymce.init", document, I)
                    });
                    H.onMouseDown.add(function(I, J) {
                        if (!G) {
                            return 
                        }
                        I.setContent("")
                    });
                    H.onSetContent.add(function(I, J) {
                        I.save()
                    });
                    H.onPaste.add(function(I, J) {
                        setTimeout(function() {
                            I.save();
                            I.execCommand("mceAutoResize")
                        }, 100)
                    });
                    H.onKeyDown.add(function(I, J) {
                        if (J.keyCode === 27) {
                            d("tinymce.keydown_esc", document);
                            return false
                        }
                        if (J.keyCode === 13 && (J.metaKey || J.ctrlKey)) {
                            d("tinymce.keydown_cmd_enter", document);
                            return false
                        }
                    })
                }
            };
            if (g) {
                p()
            } else {
                if (window.addEventListener) {
                    window.addEventListener("load", p, false)
                } else {
                    if (window.attachEvent) {
                        window.attachEvent("onload", p)
                    }
                }
            }
            if (document.getElementById(x + "_is_rich_text")) {
                document.getElementById(x + "_is_rich_text").value = 1
            }
        } else {
            if (document.getElementById(x + "_manual_toolbar")) {
                var s = document.getElementById(x + "_manual_toolbar");
                s.parentNode.removeChild(s)
            }
            var r = document.createElement("div");
            r.id = x + "_manual_toolbar";
            r.className = "manual_toolbar";
            var l = window.__ || function(E) {
                return E
            };
            var o = '<div class="editor_controls">';
            o += '<div class="editor_note">' + (i == "markdown" ? '<a href="http://daringfireball.net/projects/markdown/syntax" tabindex="-1" target="_blank">' + (l10n_str.markdown || l("markdown")) + "</a>" : (l10n_str.html_enabled || l("HTML enabled"))) + "</div>";
            o += '<div class="editor_buttons">';
            o += '<span class="editor_button bold" onclick="' + (i == "markdown" ? "Tumblr.Editor.insertTag('" + x + "', '**', '**');" : "Tumblr.Editor.insertTag('" + x + "', '<b>', '</b>');") + ' return false;"></span>';
            o += '<span class="editor_button italic" onclick="' + (i == "markdown" ? "Tumblr.Editor.insertTag('" + x + "', '_', '_');" : "Tumblr.Editor.insertTag('" + x + "', '<i>', '</i>');") + ' return false;"></span>';
            o += ((i == "markdown") ? "" : '<span class="editor_button strikethrough" onclick="Tumblr.Editor.insertTag(\'' + x + "', '<strike>', '</strike>'); return false;\"></span>");
            o += '<span class="editor_button link" onclick="' + (i == "markdown" ? "Tumblr.Editor.insertTag('" + x + "', '[', '](' + prompt((l10n_str.enter_the_url || __('Enter the URL:')), 'http://') + ')');" : "Tumblr.Editor.insertTag('" + x + "', '<a href=&quot;' + prompt((l10n_str.enter_the_url || __('Enter the URL:')), 'http://') + '&quot;>', '</a>');") + ' return false;"></span>';
            o += '<span class="editor_button photo"></span>';
            o += "</div>";
            o += "</div>";
            r.innerHTML = o;
            document.getElementById(x).parentNode.insertBefore(r, document.getElementById(x));
            document.getElementById(x).style.height = (parseInt(document.getElementById(x).style.height, 10) - 30) + "px";
            var f = document.getElementById(x);
            var j = f.value.lastIndexOf("</p>");
            j = j==-1 ? f.value.length : j;
            if (typeof f.selectionStart == "number") {
                f.selectionStart = f.selectionEnd = j
            } else {
                if (typeof f.createTextRange != "undefined") {
                    f.focus();
                    var v = f.createTextRange();
                    v.collapse(false);
                    v.select()
                }
            }
            f.scrollTop = 99999
        }
    };
    function d(g, i, h) {
        if (document.createEvent) {
            var f = document.createEvent("Events");
            f.initEvent(g, true, true);
            f.data = h;
            i.dispatchEvent(f)
        } else {
            if (document.createEventObject) {
                document.documentElement[g]++
            } else {}
        }
    }
    function c(i, m, f) {
        var k = document.getElementById(i);
        if (!f) {
            f = ""
        }
        if (document.selection) {
            k.focus();
            sel = document.selection.createRange();
            sel.text = m + sel.text + f;
            k.focus()
        } else {
            if (k.selectionStart || k.selectionStart == "0") {
                var h = k.selectionStart;
                var g = k.selectionEnd;
                var l = g;
                var j = k.scrollTop;
                k.value = k.value.substring(0, h) + m + k.value.substring(h, g) + f + k.value.substring(g, k.value.length);
                l += m.length + f.length;
                k.focus();
                k.selectionStart = l;
                k.selectionEnd = l;
                k.scrollTop = j
            } else {
                k.value += m;
                k.value += f;
                k.focus()
            }
        }
        d("input", k)
    }
    Backbone && Backbone.Events && (function a(f, g) {
        _.each(["tinymce.autoresize", "tinymce.blur", "tinymce.change", "tinymce.focus", "tinymce.keydown_esc", "tinymce.keydown_cmd_enter", "tinymce.keyup", "tinymce.image_upload.click", "tinymce.init", "tinymce.resize"], function(h) {
            f.addEventListener(h, function(i) {
                g.trigger(h, i)
            }, false)
        })
    })(document, _.extend(b, Backbone.Events));
    b.render = e;
    b.insertTag = c
})(Tumblr.Editor);
/*! scripts/tumblr_helpers.js */
(typeof Tumblr !== "undefined") || (Tumblr = {});
Tumblr.$ = {
    capitalize: function(a) {
        return a.charAt(0).toUpperCase() + a.slice(1)
    },
    camelize: function(a) {
        return a.replace(/-+(.)?/g, function(b, c) {
            return c ? c.toUpperCase() : ""
        })
    },
    truncate: function(c, b, a) {
        b = b || 100;
        a = a || "";
        return (c.length > b) ? c.slice(0, b - a.length) + a : c
    },
    format_file_size: function(a) {
        if (typeof a !== "number") {
            return ""
        }
        if (a >= 1000000000) {
            return (a / 1000000000).toFixed(2) + " GB"
        }
        if (a >= 1000000) {
            return (a / 1000000).toFixed(2) + " MB"
        }
        return (a / 1000).toFixed(2) + " KB"
    },
    strip_scripts: function(a) {
        return a.replace(new RegExp("<script[^>]*>([\\S\\s]*?)<\/script\\s*>", "img"), "")
    },
    strip_tags: function(a) {
        return a.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi, "")
    },
    stripHtml: function(d) {
        if (!d) {
            return ""
        }
        try {
            var b = document.implementation.createHTMLDocument("");
            b.body.innerHTML = this.strip_scripts(d);
            var c = b.body.textContent || b.body.innerText;
            return this.normalizeSpace(window.jQuery.trim(c))
        } catch (a) {
            return this.normalizeSpace(window.jQuery.trim(this.strip_scripts(this.strip_tags(d))))
        }
    },
    normalizeSpace: function(a) {
        return window.jQuery.trim(a).replace("\u00A0", " ").replace(/\s\s+/, " ")
    },
    is_url: function(a) {
        return !!(a.match(/(http|https):\/\//i) || a.match(/www\./i) || a.match(/[a-zA-Z0-9]+(\.arpa|\.root|\.aero|\.biz|\.cat|\.com|\.coop|\.edu|\.gov|\.info|\.int|\.jobs|\.mil|\.mobi|\.museum|\.name|\.net|\.org|\.pro|\.travel|TLD|\.ac|\.ad|\.ae|\.af|\.ag|\.ai|\.al|\.am|\.an|\.ao|\.aq|\.ar|\.as|\.at|\.au|\.aw|\.ax|\.az|\.ba|\.bb|\.bd|\.be|\.bf|\.bg|\.bh|\.bi|\.bj|\.bm|\.bn|\.bo|\.br|\.bs|\.bt|\.bv|\.bw|\.by|\.bz|\.ca|\.cc|\.cd|\.cf|\.cg|\.ch|\.ci|\.ck|\.cl|\.cm|\.cn|\.co|\.cr|\.cu|\.cv|\.cx|\.cy|\.cz|\.de|\.dj|\.dk|\.dm|\.do|\.dz|\.ec|\.ee|\.eg|\.er|\.es|\.et|\.eu|\.fi|\.fj|\.fk|\.fm|\.fo|\.fr|\.ga|\.gb|\.gd|\.ge|\.gf|\.gg|\.gh|\.gi|\.gl|\.gm|\.gn|\.gp|\.gq|\.gr|\.gs|\.gt|\.gu|\.gw|\.gy|\.hk|\.hm|\.hn|\.hr|\.ht|\.hu|\.id|\.ie|\.il|\.im|\.in|\.io|\.iq|\.ir|\.is|\.it|\.je|\.jm|\.jo|\.jp|\.ke|\.kg|\.kh|\.ki|\.km|\.kn|\.kr|\.kw|\.ky|\.kz|\.la|\.lb|\.lc|\.li|\.lk|\.lr|\.ls|\.lt|\.lu|\.lv|\.ly|\.ma|\.mc|\.md|\.mg|\.mh|\.mk|\.ml|\.mm|\.mn|\.mo|\.mp|\.mq|\.mr|\.ms|\.mt|\.mu|\.mv|\.mw|\.mx|\.my|\.mz|\.na|\.nc|\.ne|\.nf|\.ng|\.ni|\.nl|\.no|\.np|\.nr|\.nu|\.nz|\.om|\.pa|\.pe|\.pf|\.pg|\.ph|\.pk|\.pl|\.pm|\.pn|\.pr|\.ps|\.pt|\.pw|\.py|\.qa|\.re|\.ro|\.ru|\.rw|\.sa|\.sb|\.sc|\.sd|\.se|\.sg|\.sh|\.si|\.sj|\.sk|\.sl|\.sm|\.sn|\.so|\.sr|\.st|\.su|\.sv|\.sy|\.sz|\.tc|\.td|\.tf|\.tg|\.th|\.tj|\.tk|\.tl|\.tm|\.tn|\.to|\.tp|\.tr|\.tt|\.tv|\.tw|\.tz|\.ua|\.ug|\.uk|\.um|\.us|\.uy|\.uz|\.va|\.vc|\.ve|\.vg|\.vi|\.vn|\.vu|\.wf|\.ws|\.ye|\.yt|\.yu|\.za|\.zm|\.zw)/i))
    },
    hasLocalStorage: function() {
        try {
            return "localStorage" in window && window.localStorage !== null
        } catch (a) {
            return false
        }
    },
    transEndEvent: function() {
        var a;
        var b = document.createElement("fakeelement");
        var c = {
            transition: "transitionEnd",
            OTransition: "oTransitionEnd",
            MSTransition: "msTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
        };
        for (a in c) {
            if (b.style[a] !== undefined) {
                return c[a]
            }
        }
        return false
    },
    isEventSupported: function(a, d) {
        var b = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        d = d || document.createElement(b[a] || "div");
        a = "on" + a;
        var c = (a in d);
        if (!c) {
            if (!d.setAttribute) {
                d = document.createElement("div")
            }
            if (d.setAttribute && d.removeAttribute) {
                d.setAttribute(a, "");
                c = typeof d[a] == "function";
                if (typeof d[a] != "undefined") {
                    d[a] = undef
                }
                d.removeAttribute(a)
            }
        }
        d = null;
        return c
    },
    hexdec: function(e, c, b) {
        var f = parseInt(e, 16);
        if (!c) {
            return f
        }
        if (!b) {
            b = 1
        }
        var d = "";
        while (d.length < 2 * (b - 1)) {
            d += "00"
        }
        var a = parseInt("80" + d, 16);
        if (f & a) {
            return f - parseInt("100" + d, 16)
        } else {
            return f
        }
    },
    sum: function(a) {
        return _.reduce(a, function(b, c) {
            return b + c
        }, 0)
    }
};
/*! scripts/fx.js */
(typeof Tumblr !== "undefined") || (Tumblr = {});
Tumblr.Fx = function(b, d, c) {
    if (!(this instanceof Tumblr.Fx)) {
        return new Tumblr.Fx(b, d, c)
    }
    var a = this;
    this.el = b;
    this.prop = d;
    this.from = c.from;
    this.to = c.to;
    this.duration = c.duration;
    this.callback = c.callback;
    this.animDiff = this.to - this.from;
    this.prefix = Tumblr.Fx.prefix();
    this.cssTransition = c.cssTransition && this.prefix;
    this.cssEasing = c.cssEasing || "linear";
    if (this.cssTransition) {
        this.transitionEndEvent = Tumblr.Fx.whichTransitionEvent();
        this.events = {
            __end: _.bind(this.__cssTransitionEnd, this)
        }
    }
    this.easing = Tumblr.Fx.easing[c.easing] || function(f, g, e, i, h) {
        return e + i * f
    };
    if (!c.delay) {
        this.start()
    } else {
        if (typeof c.delay === "number") {
            setTimeout(function() {
                a.start()
            }, c.delay)
        } else {}
    }
};
Tumblr.Fx.prototype = {
    _isColor: function(b) {
        var a = /(#[a-f|A-F|0-9]|rgb)/;
        return typeof b === "string" && a.test(b)
    },
    _setStyle: function(b) {
        var a;
        if (this.cssTransition) {
            this.el.style.cssText = this.prefix + "transition: " + this.prop + " " + this.duration + "ms " + this.cssEasing
        }
        a = (this.prop === "opacity") ? "" : "px";
        this.el.style[Tumblr.$.camelize(this.prop)] = b + a
    },
    _tween: function() {
        this.now = new Date();
        this.elapsed = this.now - this.startTime;
        if (this.elapsed >= this.duration) {
            this._animationEnd(true)
        } else {
            this.percentage = (this.elapsed / this.duration);
            this.val = this.easing(this.percentage, this.elapsed, this.from, this.animDiff, this.duration);
            this._setStyle(this.val)
        }
    },
    _animationEnd: function(a) {
        this.ended = true;
        clearInterval(this.timer);
        if (a&&!this.cssTransition) {
            this._setStyle(this.to)
        }
        if (this.callback && typeof this.callback === "function") {
            this.callback.call(this)
        }
    },
    __cssTransitionEnd: function(a) {
        if (a.propertyName === this.prop) {
            this.el.removeEventListener(this.transitionEndEvent, this.events.__end, false);
            this._animationEnd(true)
        }
    },
    start: function() {
        var a = this;
        this.startTime = new Date();
        if (this.cssTransition) {
            this._setStyle(this.to);
            this.el.addEventListener(this.transitionEndEvent, this.events.__end, false)
        } else {
            this.timer = setInterval(function() {
                a._tween.call(a)
            }, 3)
        }
    },
    stop: function(a) {
        this._animationEnd(a)
    }
};
Tumblr.Fx.propSupport = (function() {
    return function(d) {
        var c = document.createElement("fakeelement");
        var b = ["Webkit", "Moz", "O", "MS", "Khtml"];
        var a = b.length;
        if (d in c.style) {
            return true
        }
        d = d.replace(/^[a-z]/, function(e) {
            return e.toUpperCase()
        });
        while (a--) {
            if (b[a] + d in c.style) {
                return true
            }
        }
        return false
    }
})();
Tumblr.Fx.prefix = (function() {
    var a;
    return function() {
        if (a === undefined) {
            var e = document.createElement("fakeelement");
            var d = ["Webkit", "Moz", "O", "MS", "Khtml"];
            var b = d.length;
            var c;
            while (b--) {
                c = d[b];
                e.style.cssText = "-" + c.toLowerCase() + "-transition:opacity;";
                if (typeof e.style[c + "Transition"] != "undefined") {
                    a = "-" + c.toLowerCase() + "-";
                    return a
                }
            }
            a = false;
            return a
        }
        return a
    }
})();
Tumblr.Fx.whichTransitionEvent = (function() {
    var a;
    return function() {
        if (a === undefined) {
            var b;
            var c = document.createElement("fakeelement");
            var d = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MSTransition: "msTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for (b in d) {
                if (c.style[b] !== undefined) {
                    a = d[b];
                    return a
                }
            }
            a = false;
            return a
        }
        return a
    }
})();
Tumblr.Fx.easing = {
    linear: function(e, f, a, h, g) {
        return a + h * e
    },
    easeInQuad: function(e, f, a, h, g) {
        return h * (f/=g) * f + a
    },
    easeOutQuad: function(e, f, a, h, g) {
        return - h * (f/=g) * (f - 2) + a
    },
    easeInOutQuad: function(e, f, a, h, g) {
        if ((f/=g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return - h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function(e, f, a, h, g) {
        return h * (f/=g) * f * f + a
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function(e, f, a, h, g) {
        if ((f/=g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function(e, f, a, h, g) {
        return h * (f/=g) * f * f * f + a
    },
    easeOutQuart: function(e, f, a, h, g) {
        return - h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function(e, f, a, h, g) {
        if ((f/=g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return - h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function(e, f, a, h, g) {
        return h * (f/=g) * f * f * f * f + a
    },
    easeOutQuint: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function(e, f, a, h, g) {
        if ((f/=g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function(e, f, a, h, g) {
        return - h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function(e, f, a, h, g) {
        return - h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function(e, f, a, h, g) {
        return (f === 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function(e, f, a, h, g) {
        return (f == g) ? a + h : h * ( - Math.pow(2, - 10 * f / g) + 1) + a
    },
    easeInOutExpo: function(e, f, a, h, g) {
        if (f === 0) {
            return a
        }
        if (f === g) {
            return a + h
        }
        if ((f/=g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * ( - Math.pow(2, - 10*--f) + 2) + a
    },
    easeInCirc: function(e, f, a, h, g) {
        return - h * (Math.sqrt(1 - (f/=g) * f) - 1) + a
    },
    easeOutCirc: function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function(e, f, a, h, g) {
        if ((f/=g / 2) < 1) {
            return - h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h === 0) {
            return e
        }
        if ((h/=k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            i = j / 4
        } else {
            i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return - (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h === 0) {
            return e
        }
        if ((h/=k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            i = j / 4
        } else {
            i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, - 10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h === 0) {
            return e
        }
        if ((h/=k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            i = j / 4
        } else {
            i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return - 0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, - 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function(e, f, a, i, h, g) {
        if (g === undefined) {
            g = 1.70158
        }
        return i * (f/=h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function(e, f, a, i, h, g) {
        if (g === undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function(e, f, a, i, h, g) {
        if (g === undefined) {
            g = 1.70158
        }
        if ((f/=h / 2) < 1) {
            return i / 2 * (f * f * (((g*=(1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g*=(1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function(e, f, a, h, g) {
        return h - Tumblr.Fx.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function(e, f, a, h, g) {
        if ((f/=g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function(e, f, a, h, g) {
        if (f < g / 2) {
            return Tumblr.Fx.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return Tumblr.Fx.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
};
/*! scripts/jpegmeta.js */
if (this.JpegMeta) {
    throw Error("Library included multiple times")
}
var JpegMeta = {};
JpegMeta.parseNum = function parseNum(a, f, g, d) {
    var c;
    var b;
    var e = (a === ">");
    if (g === undefined) {
        g = 0
    }
    if (d === undefined) {
        d = f.length - g
    }
    for (e ? c = g : c = g + d - 1; e ? c < g + d : c >= g; e ? c++ : c--) {
        b<<=8;
        b += f.charCodeAt(c)
    }
    return b
};
JpegMeta.parseSnum = function parseSnum(a, f, g, d) {
    var c;
    var b;
    var h;
    var e = (a === ">");
    if (g === undefined) {
        g = 0
    }
    if (d === undefined) {
        d = f.length - g
    }
    for (e ? c = g : c = g + d - 1; e ? c < g + d : c >= g; e ? c++ : c--) {
        if (h === undefined) {
            h = (f.charCodeAt(c) & 128) === 128
        }
        b<<=8;
        b += h?~f.charCodeAt(c) & 255 : f.charCodeAt(c)
    }
    if (h) {
        b += 1;
        b*=-1
    }
    return b
};
JpegMeta.Rational = function Rational(a, b) {
    this.num = a;
    this.den = b || 1;
    return this
};
JpegMeta.Rational.prototype.toString = function toString() {
    if (this.num === 0) {
        return "" + this.num
    }
    if (this.den === 1) {
        return "" + this.num
    }
    if (this.num === 1) {
        return this.num + " / " + this.den
    }
    return this.num / this.den
};
JpegMeta.Rational.prototype.asFloat = function asFloat() {
    return this.num / this.den
};
JpegMeta.MetaGroup = function MetaGroup(b, a) {
    this.fieldName = b;
    this.description = a;
    this.metaProps = {};
    return this
};
JpegMeta.MetaGroup.prototype._addProperty = function _addProperty(d, a, c) {
    var b = new JpegMeta.MetaProp(d, a, c);
    this[b.fieldName] = b;
    this.metaProps[b.fieldName] = b
};
JpegMeta.MetaGroup.prototype.toString = function toString() {
    return "[MetaGroup " + this.description + "]"
};
JpegMeta.MetaProp = function MetaProp(c, a, b) {
    this.fieldName = c;
    this.description = a;
    this.value = b;
    return this
};
JpegMeta.MetaProp.prototype.toString = function toString() {
    return "" + this.value
};
this.JpegMeta.JpegFile = function JpegFile(l, a) {
    var j = this._SOS;
    this.metaGroups = {};
    this._binary_data = l;
    this.filename = a;
    var k = 0;
    var f = 0;
    var c;
    var h;
    var b;
    var g;
    var d;
    var e;
    var i;
    if (this._binary_data.slice(0, 2) !== this._SOI_MARKER) {
        throw new Error("Doesn't look like a JPEG file. First two bytes are " + this._binary_data.charCodeAt(0) + "," + this._binary_data.charCodeAt(1) + ".")
    }
    k += 2;
    while (k < this._binary_data.length) {
        c = this._binary_data.charCodeAt(k++);
        h = this._binary_data.charCodeAt(k++);
        f = k;
        if (c != this._DELIM) {
            break
        }
        if (h === j) {
            break
        }
        d = JpegMeta.parseNum(">", this._binary_data, k, 2);
        k += d;
        while (k < this._binary_data.length) {
            c = this._binary_data.charCodeAt(k++);
            if (c == this._DELIM) {
                b = this._binary_data.charCodeAt(k++);
                if (b !== 0) {
                    k -= 2;
                    break
                }
            }
        }
        g = k - f;
        if (this._markers[h]) {
            e = this._markers[h][0];
            i = this._markers[h][1]
        } else {
            e = "UNKN";
            i = undefined
        }
        if (i) {
            this[i](h, f + 2)
        }
    }
    if (this.general === undefined) {
        throw Error("Invalid JPEG file.")
    }
    return this
};
this.JpegMeta.JpegFile.prototype.toString = function() {
    return "[JpegFile " + this.filename + " " + this.general.type + " " + this.general.pixelWidth + "x" + this.general.pixelHeight + " Depth: " + this.general.depth + "]"
};
this.JpegMeta.JpegFile.prototype._SOI_MARKER = "\xff\xd8";
this.JpegMeta.JpegFile.prototype._DELIM = 255;
this.JpegMeta.JpegFile.prototype._EOI = 217;
this.JpegMeta.JpegFile.prototype._SOS = 218;
this.JpegMeta.JpegFile.prototype._sofHandler = function _sofHandler(b, a) {
    if (this.general !== undefined) {
        throw Error("Unexpected multiple-frame image")
    }
    this._addMetaGroup("general", "General");
    this.general._addProperty("depth", "Depth", JpegMeta.parseNum(">", this._binary_data, a, 1));
    this.general._addProperty("pixelHeight", "Pixel Height", JpegMeta.parseNum(">", this._binary_data, a + 1, 2));
    this.general._addProperty("pixelWidth", "Pixel Width", JpegMeta.parseNum(">", this._binary_data, a + 3, 2));
    this.general._addProperty("type", "Type", this._markers[b][2])
};
this.JpegMeta.JpegFile.prototype._JFIF_IDENT = "JFIF\x00";
this.JpegMeta.JpegFile.prototype._JFXX_IDENT = "JFXX\x00";
this.JpegMeta.JpegFile.prototype._EXIF_IDENT = "Exif\x00";
this.JpegMeta.JpegFile.prototype._types = {
    1: ["BYTE", 1],
    2: ["ASCII", 1],
    3: ["SHORT", 2],
    4: ["LONG", 4],
    5: ["RATIONAL", 8],
    6: ["SBYTE", 1],
    7: ["UNDEFINED", 1],
    8: ["SSHORT", 2],
    9: ["SLONG", 4],
    10: ["SRATIONAL", 8],
    11: ["FLOAT", 4],
    12: ["DOUBLE", 8]
};
this.JpegMeta.JpegFile.prototype._tifftags = {
    256: ["Image width", "ImageWidth"],
    257: ["Image height", "ImageLength"],
    258: ["Number of bits per component", "BitsPerSample"],
    259: ["Compression scheme", "Compression", {
        1: "uncompressed",
        6: "JPEG compression"
    }
    ],
    262: ["Pixel composition", "PhotmetricInerpretation", {
        2: "RGB",
        6: "YCbCr"
    }
    ],
    274: ["Orientation of image", "Orientation", {
        1: "Normal",
        2: "Reverse?",
        3: "Upside-down",
        4: "Upside-down Reverse",
        5: "90 degree CW",
        6: "90 degree CW reverse",
        7: "90 degree CCW",
        8: "90 degree CCW reverse"
    }
    ],
    277: ["Number of components", "SamplesPerPixel"],
    284: ["Image data arrangement", "PlanarConfiguration", {
        1: "chunky format",
        2: "planar format"
    }
    ],
    530: ["Subsampling ratio of Y to C", "YCbCrSubSampling"],
    531: ["Y and C positioning", "YCbCrPositioning", {
        1: "centered",
        2: "co-sited"
    }
    ],
    282: ["X Resolution", "XResolution"],
    283: ["Y Resolution", "YResolution"],
    296: ["Resolution Unit", "ResolutionUnit", {
        2: "inches",
        3: "centimeters"
    }
    ],
    273: ["Image data location", "StripOffsets"],
    278: ["Number of rows per strip", "RowsPerStrip"],
    279: ["Bytes per compressed strip", "StripByteCounts"],
    513: ["Offset to JPEG SOI", "JPEGInterchangeFormat"],
    514: ["Bytes of JPEG Data", "JPEGInterchangeFormatLength"],
    301: ["Transfer function", "TransferFunction"],
    318: ["White point chromaticity", "WhitePoint"],
    319: ["Chromaticities of primaries", "PrimaryChromaticities"],
    529: ["Color space transformation matrix coefficients", "YCbCrCoefficients"],
    532: ["Pair of black and white reference values", "ReferenceBlackWhite"],
    306: ["Date and time", "DateTime"],
    270: ["Image title", "ImageDescription"],
    271: ["Make", "Make"],
    272: ["Model", "Model"],
    305: ["Software", "Software"],
    315: ["Person who created the image", "Artist"],
    316: ["Host Computer", "HostComputer"],
    33432: ["Copyright holder", "Copyright"],
    34665: ["Exif tag", "ExifIfdPointer"],
    34853: ["GPS tag", "GPSInfoIfdPointer"]
};
this.JpegMeta.JpegFile.prototype._exiftags = {
    36864: ["Exif Version", "ExifVersion"],
    40960: ["FlashPix Version", "FlashpixVersion"],
    40961: ["Color Space", "ColorSpace"],
    37121: ["Meaning of each component", "ComponentsConfiguration"],
    37122: ["Compressed Bits Per Pixel", "CompressedBitsPerPixel"],
    40962: ["Pixel X Dimension", "PixelXDimension"],
    40963: ["Pixel Y Dimension", "PixelYDimension"],
    37500: ["Manufacturer notes", "MakerNote"],
    37510: ["User comments", "UserComment"],
    40964: ["Related audio file", "RelatedSoundFile"],
    36867: ["Date Time Original", "DateTimeOriginal"],
    36868: ["Date Time Digitized", "DateTimeDigitized"],
    37520: ["DateTime subseconds", "SubSecTime"],
    37521: ["DateTimeOriginal subseconds", "SubSecTimeOriginal"],
    37522: ["DateTimeDigitized subseconds", "SubSecTimeDigitized"],
    33434: ["Exposure time", "ExposureTime"],
    33437: ["FNumber", "FNumber"],
    34850: ["Exposure program", "ExposureProgram"],
    34852: ["Spectral sensitivity", "SpectralSensitivity"],
    34855: ["ISO Speed Ratings", "ISOSpeedRatings"],
    34856: ["Optoelectric coefficient", "OECF"],
    37377: ["Shutter Speed", "ShutterSpeedValue"],
    37378: ["Aperture Value", "ApertureValue"],
    37379: ["Brightness", "BrightnessValue"],
    37380: ["Exposure Bias Value", "ExposureBiasValue"],
    37381: ["Max Aperture Value", "MaxApertureValue"],
    37382: ["Subject Distance", "SubjectDistance"],
    37383: ["Metering Mode", "MeteringMode"],
    37384: ["Light Source", "LightSource"],
    37385: ["Flash", "Flash"],
    37386: ["Focal Length", "FocalLength"],
    37396: ["Subject Area", "SubjectArea"],
    41483: ["Flash Energy", "FlashEnergy"],
    41484: ["Spatial Frequency Response", "SpatialFrequencyResponse"],
    41486: ["Focal Plane X Resolution", "FocalPlaneXResolution"],
    41487: ["Focal Plane Y Resolution", "FocalPlaneYResolution"],
    41488: ["Focal Plane Resolution Unit", "FocalPlaneResolutionUnit"],
    41492: ["Subject Location", "SubjectLocation"],
    41493: ["Exposure Index", "ExposureIndex"],
    41495: ["Sensing Method", "SensingMethod"],
    41728: ["File Source", "FileSource"],
    41729: ["Scene Type", "SceneType"],
    41730: ["CFA Pattern", "CFAPattern"],
    41985: ["Custom Rendered", "CustomRendered"],
    41986: ["Exposure Mode", "Exposure Mode"],
    41987: ["White Balance", "WhiteBalance"],
    41988: ["Digital Zoom Ratio", "DigitalZoomRatio"],
    41990: ["Scene Capture Type", "SceneCaptureType"],
    41991: ["Gain Control", "GainControl"],
    41992: ["Contrast", "Contrast"],
    41993: ["Saturation", "Saturation"],
    41994: ["Sharpness", "Sharpness"],
    41995: ["Device settings description", "DeviceSettingDescription"],
    41996: ["Subject distance range", "SubjectDistanceRange"],
    42016: ["Unique image ID", "ImageUniqueID"],
    40965: ["Interoperability tag", "InteroperabilityIFDPointer"]
};
this.JpegMeta.JpegFile.prototype._gpstags = {
    0: ["GPS tag version", "GPSVersionID"],
    1: ["North or South Latitude", "GPSLatitudeRef"],
    2: ["Latitude", "GPSLatitude"],
    3: ["East or West Longitude", "GPSLongitudeRef"],
    4: ["Longitude", "GPSLongitude"],
    5: ["Altitude reference", "GPSAltitudeRef"],
    6: ["Altitude", "GPSAltitude"],
    7: ["GPS time (atomic clock)", "GPSTimeStamp"],
    8: ["GPS satellites usedd for measurement", "GPSSatellites"],
    9: ["GPS receiver status", "GPSStatus"],
    10: ["GPS mesaurement mode", "GPSMeasureMode"],
    11: ["Measurement precision", "GPSDOP"],
    12: ["Speed unit", "GPSSpeedRef"],
    13: ["Speed of GPS receiver", "GPSSpeed"],
    14: ["Reference for direction of movement", "GPSTrackRef"],
    15: ["Direction of movement", "GPSTrack"],
    16: ["Reference for direction of image", "GPSImgDirectionRef"],
    17: ["Direction of image", "GPSImgDirection"],
    18: ["Geodetic survey data used", "GPSMapDatum"],
    19: ["Reference for latitude of destination", "GPSDestLatitudeRef"],
    20: ["Latitude of destination", "GPSDestLatitude"],
    21: ["Reference for longitude of destination", "GPSDestLongitudeRef"],
    22: ["Longitude of destination", "GPSDestLongitude"],
    23: ["Reference for bearing of destination", "GPSDestBearingRef"],
    24: ["Bearing of destination", "GPSDestBearing"],
    25: ["Reference for distance to destination", "GPSDestDistanceRef"],
    26: ["Distance to destination", "GPSDestDistance"],
    27: ["Name of GPS processing method", "GPSProcessingMethod"],
    28: ["Name of GPS area", "GPSAreaInformation"],
    29: ["GPS Date", "GPSDateStamp"],
    30: ["GPS differential correction", "GPSDifferential"]
};
this.JpegMeta.JpegFile.prototype._markers = {
    192: ["SOF0", "_sofHandler", "Baseline DCT"],
    193: ["SOF1", "_sofHandler", "Extended sequential DCT"],
    194: ["SOF2", "_sofHandler", "Progressive DCT"],
    195: ["SOF3", "_sofHandler", "Lossless (sequential)"],
    197: ["SOF5", "_sofHandler", "Differential sequential DCT"],
    198: ["SOF6", "_sofHandler", "Differential progressive DCT"],
    199: ["SOF7", "_sofHandler", "Differential lossless (sequential)"],
    200: ["JPG", null, "Reserved for JPEG extensions"],
    201: ["SOF9", "_sofHandler", "Extended sequential DCT"],
    202: ["SOF10", "_sofHandler", "Progressive DCT"],
    203: ["SOF11", "_sofHandler", "Lossless (sequential)"],
    205: ["SOF13", "_sofHandler", "Differential sequential DCT"],
    206: ["SOF14", "_sofHandler", "Differential progressive DCT"],
    207: ["SOF15", "_sofHandler", "Differential lossless (sequential)"],
    196: ["DHT", null, "Define Huffman table(s)"],
    204: ["DAC", null, "Define arithmetic coding conditioning(s)"],
    208: ["RST0", null, "Restart with modulo 8 count “0”"],
    209: ["RST1", null, "Restart with modulo 8 count “1”"],
    210: ["RST2", null, "Restart with modulo 8 count “2”"],
    211: ["RST3", null, "Restart with modulo 8 count “3”"],
    212: ["RST4", null, "Restart with modulo 8 count “4”"],
    213: ["RST5", null, "Restart with modulo 8 count “5”"],
    214: ["RST6", null, "Restart with modulo 8 count “6”"],
    215: ["RST7", null, "Restart with modulo 8 count “7”"],
    216: ["SOI", null, "Start of image"],
    217: ["EOI", null, "End of image"],
    218: ["SOS", null, "Start of scan"],
    219: ["DQT", null, "Define quantization table(s)"],
    220: ["DNL", null, "Define number of lines"],
    221: ["DRI", null, "Define restart interval"],
    222: ["DHP", null, "Define hierarchical progression"],
    223: ["EXP", null, "Expand reference component(s)"],
    224: ["APP0", "_app0Handler", "Reserved for application segments"],
    225: ["APP1", "_app1Handler"],
    226: ["APP2", null],
    227: ["APP3", null],
    228: ["APP4", null],
    229: ["APP5", null],
    230: ["APP6", null],
    231: ["APP7", null],
    232: ["APP8", null],
    233: ["APP9", null],
    234: ["APP10", null],
    235: ["APP11", null],
    236: ["APP12", null],
    237: ["APP13", null],
    238: ["APP14", null],
    239: ["APP15", null],
    240: ["JPG0", null],
    241: ["JPG1", null],
    242: ["JPG2", null],
    243: ["JPG3", null],
    244: ["JPG4", null],
    245: ["JPG5", null],
    246: ["JPG6", null],
    247: ["JPG7", null],
    248: ["JPG8", null],
    249: ["JPG9", null],
    250: ["JPG10", null],
    251: ["JPG11", null],
    252: ["JPG12", null],
    253: ["JPG13", null],
    254: ["COM", null],
    1: ["JPG13", null]
};
this.JpegMeta.JpegFile.prototype._addMetaGroup = function _addMetaGroup(a, b) {
    var c = new JpegMeta.MetaGroup(a, b);
    this[c.fieldName] = c;
    this.metaGroups[c.fieldName] = c;
    return c
};
this.JpegMeta.JpegFile.prototype._parseIfd = function _parseIfd(w, r, f, p, o, x, t) {
    var s = JpegMeta.parseNum(w, r, f + p, 2);
    var v, u;
    var b;
    var g;
    var c, e, n;
    var d;
    var m;
    var q;
    var a;
    var k;
    var h;
    var l;
    l = this._addMetaGroup(x, t);
    for (v = 0; v < s; v++) {
        b = f + p + 2 + (v * 12);
        g = JpegMeta.parseNum(w, r, b, 2);
        e = JpegMeta.parseNum(w, r, b + 2, 2);
        d = JpegMeta.parseNum(w, r, b + 4, 4);
        m = JpegMeta.parseNum(w, r, b + 8, 4);
        if (this._types[e] === undefined) {
            continue
        }
        c = this._types[e][0];
        n = this._types[e][1];
        if (n * d <= 4) {
            m = b + 8
        } else {
            m = f + m
        }
        if (c == "UNDEFINED") {
            q = r.slice(m, m + d)
        } else {
            if (c == "ASCII") {
                q = r.slice(m, m + d);
                q = q.split("\x00")[0]
            } else {
                q = [];
                for (u = 0; u < d; u++, m += n) {
                    if (c == "BYTE" || c == "SHORT" || c == "LONG") {
                        q.push(JpegMeta.parseNum(w, r, m, n))
                    }
                    if (c == "SBYTE" || c == "SSHORT" || c == "SLONG") {
                        q.push(JpegMeta.parseSnum(w, r, m, n))
                    }
                    if (c == "RATIONAL") {
                        k = JpegMeta.parseNum(w, r, m, 4);
                        h = JpegMeta.parseNum(w, r, m + 4, 4);
                        q.push(new JpegMeta.Rational(k, h))
                    }
                    if (c == "SRATIONAL") {
                        k = JpegMeta.parseSnum(w, r, m, 4);
                        h = JpegMeta.parseSnum(w, r, m + 4, 4);
                        q.push(new JpegMeta.Rational(k, h))
                    }
                    q.push()
                }
                if (d === 1) {
                    q = q[0]
                }
            }
        }
        if (o[g]) {
            l._addProperty(o[g][1], o[g][0], q)
        }
    }
};
this.JpegMeta.JpegFile.prototype._jfifHandler = function _jfifHandler(b, a) {
    if (this.jfif !== undefined) {
        throw Error("Multiple JFIF segments found")
    }
    this._addMetaGroup("jfif", "JFIF");
    this.jfif._addProperty("version_major", "Version Major", this._binary_data.charCodeAt(a + 5));
    this.jfif._addProperty("version_minor", "Version Minor", this._binary_data.charCodeAt(a + 6));
    this.jfif._addProperty("version", "JFIF Version", this.jfif.version_major.value + "." + this.jfif.version_minor.value);
    this.jfif._addProperty("units", "Density Unit", this._binary_data.charCodeAt(a + 7));
    this.jfif._addProperty("Xdensity", "X density", JpegMeta.parseNum(">", this._binary_data, a + 8, 2));
    this.jfif._addProperty("Ydensity", "Y Density", JpegMeta.parseNum(">", this._binary_data, a + 10, 2));
    this.jfif._addProperty("Xthumbnail", "X Thumbnail", JpegMeta.parseNum(">", this._binary_data, a + 12, 1));
    this.jfif._addProperty("Ythumbnail", "Y Thumbnail", JpegMeta.parseNum(">", this._binary_data, a + 13, 1))
};
this.JpegMeta.JpegFile.prototype._app0Handler = function app0Handler(c, b) {
    var a = this._binary_data.slice(b, b + 5);
    if (a == this._JFIF_IDENT) {
        this._jfifHandler(c, b)
    } else {
        if (a == this._JFXX_IDENT) {} else {}
    }
};
this.JpegMeta.JpegFile.prototype._app1Handler = function _app1Handler(c, b) {
    var a = this._binary_data.slice(b, b + 5);
    if (a == this._EXIF_IDENT) {
        this._exifHandler(c, b + 6)
    } else {}
};
JpegMeta.JpegFile.prototype._exifHandler = function _exifHandler(d, k) {
    if (this.exif !== undefined) {
        throw new Error("Multiple JFIF segments found")
    }
    var g;
    var f;
    var c;
    var h, i, e;
    var b = this._binary_data.slice(k, k + 2);
    if (b === "II") {
        g = "<"
    } else {
        if (b === "MM") {
            g = ">"
        } else {
            throw new Error("Malformed TIFF meta-data. Unknown endianess: " + b)
        }
    }
    f = JpegMeta.parseNum(g, this._binary_data, k + 2, 2);
    if (f !== 42) {
        throw new Error("Malformed TIFF meta-data. Bad magic: " + f)
    }
    c = JpegMeta.parseNum(g, this._binary_data, k + 4, 4);
    this._parseIfd(g, this._binary_data, k, c, this._tifftags, "tiff", "TIFF");
    if (this.tiff.ExifIfdPointer) {
        this._parseIfd(g, this._binary_data, k, this.tiff.ExifIfdPointer.value, this._exiftags, "exif", "Exif")
    }
    if (this.tiff.GPSInfoIfdPointer) {
        this._parseIfd(g, this._binary_data, k, this.tiff.GPSInfoIfdPointer.value, this._gpstags, "gps", "GPS");
        if (this.gps.GPSLatitude) {
            var j;
            j = this.gps.GPSLatitude.value[0].asFloat() + (1 / 60) * this.gps.GPSLatitude.value[1].asFloat() + (1 / 3600) * this.gps.GPSLatitude.value[2].asFloat();
            if (this.gps.GPSLatitudeRef.value === "S") {
                j =- j
            }
            this.gps._addProperty("latitude", "Dec. Latitude", j)
        }
        if (this.gps.GPSLongitude) {
            var a;
            a = this.gps.GPSLongitude.value[0].asFloat() + (1 / 60) * this.gps.GPSLongitude.value[1].asFloat() + (1 / 3600) * this.gps.GPSLongitude.value[2].asFloat();
            if (this.gps.GPSLongitudeRef.value === "W") {
                a =- a
            }
            this.gps._addProperty("longitude", "Dec. Longitude", a)
        }
    }
};
/*! scripts/html5_webcam.js */
(typeof Tumblr !== "undefined") || (window.Tumblr = {});
(function(c, a) {
    var b = Backbone.View.extend({
        events: {
            "click .snap_btn .photo_btn": "onSnapPhotoClick",
            "click .snap_btn .gif_btn": "onSnapGifClick",
            "click .retake_btn": "onRetakeClick",
            "click .flash_toggle": "onFlashToggleClick",
            "click .x": "onCloseClick"
        },
        initialize: function(e) {
            navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia);
            var d = c.browser;
            if (d.mozilla && Math.floor(d.version) >= 20) {
                navigator.getMedia = navigator.mozGetUserMedia
            }
            window.URL = (window.URL || window.webkitURL || window.mozURL || window.msURL);
            this.btn = c(e.btn);
            this.template = (e.template) ? c(e.template).html() : null;
            this.on_show = e.on_show || function() {};
            this.on_hide = e.on_hide || function() {};
            this.on_snap = e.on_snap || function() {};
            this.on_retake = e.on_retake || function() {};
            this.is_disabled = (navigator.getMedia) ? false : true;
            this.is_running = false;
            this.is_mirrored = true;
            this.is_flash_on = true;
            this.is_gif_on = false;
            this.is_flash_disabled = false;
            this.is_countdown_disabled = false;
            this.stream_timeout = null;
            this.stream = null;
            this.timer = null;
            this.timer_delay = 3;
            this.stream_delay = 60;
            this.gif_frame_count = 4;
            this.gif_queue = [];
            this.gif_worker_url = "";
            this.video = document.createElement("video");
            this.photo = null;
            this.flash = c('<div id="webcam_flash"></div>');
            this.arrow = c('<div id="webcam_arrow" class="over_glass"></div>');
            if (!this.btn) {
                return 
            }(this.is_disabled) ? this.btn.remove() : this.btn.on("click", c.proxy(this.onWebcamClick, this));
            this.setup()
        },
        setup: function() {
            this.video.controls = false;
            if (this.is_mirrored) {
                this.video.className = "mirrored"
            }
        },
        show: function() {
            if (this.is_disabled) {
                return 
            }
            var d = false;
            if (this.stream_timeout) {
                clearTimeout(this.stream_timeout);
                this.stream_timeout = null
            }
            if (this.is_running) {
                c(this.video).show();
                if (this.stream) {
                    this.showControl(".snap_btn");
                    return 
                }
            } else {
                this.$el.show().append(c(this.video).show());
                this.on_show();
                d = true
            }
            this.is_running = true;
            c("body").append(this.arrow.show());
            this.$el.addClass("loading");
            c(window).on("keydown.webcam", c.proxy(this.onKeyDown, this));
            c(window).on("keyup.webcam", c.proxy(this.onKeyUp, this));
            navigator.getMedia({
                video: true
            }, c.proxy(function(f) {
                var e;
                if (d) {
                    if (this.template) {
                        e = _.template(this.template);
                        this.$el.append(e({
                            webcam: true,
                            controls: true,
                            linkthrough: true,
                            width: 500
                        }))
                    }
                    this.is_running = true
                }
                this.$el.removeClass("loading");
                this.arrow.fadeOut(200, c.proxy(function() {
                    this.arrow.remove()
                }, this));
                this.showControl(".snap_btn");
                this.stream = f;
                this.video.src = window.URL.createObjectURL(this.stream);
                this.video.play()
            }, this), c.proxy(function(e) {
                this.destroy();
                return 
            }, this))
        },
        snap: function() {
            var e = this, j = this.$el.find(".countdown"), f, g, d, i;
            function k() {
                if (e.is_flash_on&&!e.is_flash_disabled) {
                    e.flash.fadeOut(500, c.proxy(function() {
                        c(e).remove()
                    }, e))
                }
                g = f.getContext("2d");
                d = f.width;
                i = f.height;
                if (e.is_mirrored) {
                    g.translate(f.width, 0);
                    g.scale( - 1, 1)
                }
                g.drawImage(e.video, 0, 0, d, i);
                if (e.is_gif_on) {
                    e.gifSnap(f)
                } else {
                    e.preview(f)
                }
            }
            f = document.createElement("canvas");
            f.width = (this.is_gif_on) ? this.$el.width() : this.video.clientWidth;
            f.height = (this.is_gif_on) ? this.$el.height() : this.video.clientHeight;
            if (this.is_flash_on&&!this.is_flash_disabled) {
                c("body").append(this.flash.stop(true, true).show());
                setTimeout(k, 250)
            } else {
                k();
                j.addClass("pulse");
                setTimeout(function() {
                    j.removeClass("pulse")
                }, 500)
            }
        },
        gifSnap: function(d) {
            this.gif_queue.push(d);
            if (this.gif_queue.length < this.gif_frame_count) {
                setTimeout(c.proxy(this.snap, this), 1000)
            } else {
                this.showControl(".processing");
                if (this.gif_worker_url) {
                    this.createGif();
                    return 
                }
                c.ajax({
                    url: this.$el.data("gifworker"),
                    success: c.proxy(function(g) {
                        var f;
                        try {
                            f = new Blob([g])
                        } catch (i) {
                            var h = window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;
                            f = new h();
                            f.append(g);
                            f = f.getBlob()
                        }
                        this.gif_worker_url = window.URL.createObjectURL(f);
                        this.createGif()
                    }, this)
                })
            }
        },
        createGif: function() {
            var e = new GIF({
                workerScript: this.gif_worker_url,
                workers: 3,
                quality: 1
            });
            for (var f = 0, d = this.gif_queue.length; f < d; f++) {
                e.addFrame(this.gif_queue[f], {
                    delay: 200
                })
            }
            e.on("finished", c.proxy(this.onGifFinished, this));
            e.render()
        },
        preview: function(f) {
            var g, d, e;
            this.photo = f;
            c(this.video).hide().before(f);
            this.stream_timeout = setTimeout(c.proxy(this.onStreamTimeout, this), this.stream_delay * 1000);
            this.$el.find(".countdown").removeClass("pulse");
            this.showControl(".retake_btn");
            g = (this.is_gif_on) ? f.src : f.toDataURL("image/jpeg");
            d = c(f).width();
            e = c(f).height();
            this.on_snap(g, d, e, this.is_gif_on)
        },
        retake: function() {
            if (!this.is_gif_on) {
                var d = this.photo.getContext("2d");
                d.clearRect(0, 0, this.photo.width, this.photo.height)
            }
            this.is_gif_on = false;
            c(this.photo).remove();
            this.show();
            this.on_retake()
        },
        destroy: function() {
            this.$el.removeClass("loading").hide().html("");
            if (this.timer) {
                clearInterval(this.timer)
            }
            if (this.stream_timeout) {
                clearTimeout(this.stream_timeout)
            }
            if (this.stream) {
                this.onStreamTimeout()
            }
            this.is_running = false;
            this.is_gif_on = false;
            this.arrow.remove();
            this.$el.find(".countdown").removeClass("gif");
            c(window).off("keydown.webcam");
            c(window).off("keyup.webcam");
            this.on_hide()
        },
        countdown: function(f, h) {
            var d = this.$el.find(".countdown").removeClass("full").addClass("half"), g = f * 0.5, e = 1;
            d.find(".loader").css({
                "-webkit-animation-duration": g + "s",
                "-moz-animation-duration": g + "s",
                "-ms-animation-duration": g + "s",
                "-o-animation-duration": g + "s",
                "animation-duration": g + "s"
            });
            this.showControl(".countdown");
            this.timer = setInterval(c.proxy(function() {
                if (e > 1) {
                    clearInterval(this.timer);
                    if (h) {
                        h()
                    }
                } else {
                    d.removeClass("half").addClass("full");
                    e++
                }
            }, this), g * 1000)
        },
        showControl: function(d) {
            this.$el.find(".control_btn").removeClass("animate").hide();
            if (d) {
                this.$el.find(d).show().addClass("animate")
            }
        },
        onGifFinished: function(f) {
            var e = new Image(), d = new FileReader();
            e.className = "preview";
            c(d).on("load", c.proxy(function(g) {
                e.src = g.target.result;
                this.preview(e);
                c(d).off()
            }, this));
            this.gif_queue = [];
            d.readAsDataURL(f)
        },
        onWebcamClick: function(d) {
            d.preventDefault();
            this.show()
        },
        onSnapGifClick: function(g) {
            g.preventDefault();
            var f = this.$el.find(".countdown"), d = this.gif_frame_count;
            if (this.is_flash_on&&!this.is_flash_disabled) {
                d += (this.gif_frame_count - 1) * 0.25
            }
            this.is_gif_on = true;
            f.addClass("gif");
            this.countdown(d, c.proxy(function() {
                f.removeClass("gif")
            }));
            setTimeout(c.proxy(this.snap, this), 1000)
        },
        onSnapPhotoClick: function(d) {
            d.preventDefault();
            if (this.is_countdown_disabled) {
                this.snap();
                return 
            }
            this.countdown(this.timer_delay, c.proxy(this.snap, this))
        },
        onStreamTimeout: function() {
            if (this.stream) {
                this.stream.stop();
                this.stream = null
            }
            this.video.src = "";
            this.stream_timeout = null
        },
        onKeyDown: function(d) {
            switch (d.keyCode) {
            case 17:
            case 18:
                this.is_countdown_disabled = true;
                break;
            case 16:
                this.is_flash_disabled = true;
                break
            }
        },
        onKeyUp: function(d) {
            this.is_flash_disabled = false;
            this.is_countdown_disabled = false
        },
        onFlashToggleClick: function(d) {
            d.preventDefault();
            c(d.currentTarget).toggleClass("off");
            this.is_flash_on=!c(d.currentTarget).hasClass("off")
        },
        onRetakeClick: function(d) {
            d.preventDefault();
            c(d.currentTarget).hide();
            this.retake()
        },
        onCloseClick: function(d) {
            d.preventDefault();
            this.destroy()
        }
    });
    a.Webcam = b
})(jQuery, Tumblr);
/*! scripts/tumblr.js */
(typeof Tumblr !== "undefined") || (Tumblr = {});
/*! scripts/multi_popover.js */
(function(c, a) {
    var b = function(d, f) {
        if (!(this instanceof b)) {
            return new b(d, f)
        }
        f = f || {};
        this.$container = c(d);
        if (this.$container.is(".popover")) {
            this.$popover = this.$container;
            this.$container = this.$popover.parent()
        } else {
            this.$popover = this.$container.find(".popover")
        }
        this.token = f.token || e();
        this.animate = f.animate || false;
        this.on_hide = f.on_hide || function() {};
        this.on_show = f.on_show || function() {};
        this.direction = f.direction || "auto";
        this.insertPlexiAt = c(f.insertAt) || this.container;
        this.plexiSelector = '.plexi[data-token="' + this.token + '"]';
        this.events = {
            click: c.proxy(this.__plexiClick, this)
        };
        function e() {
            var g = function() {
                return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1)
            };
            return (g() + g() + "-" + g() + "-" + g() + "-" + g() + "-" + g() + g() + g())
        }
        b.register(this);
        return this
    };
    b.prototype = {
        __plexiClick: function(d) {
            d.preventDefault();
            this.hide()
        },
        show: function() {
            this.position();
            if (c(this.plexiSelector).length === 0) {
                this.plexi = new Tumblr.Plexi({
                    token: this.token
                });
                this.plexi.create(this.insertPlexiAt)
            } else {
                this.plexi = Tumblr.Plexi.findByToken(this.token)
            }
            this.visible = true;
            this.plexi.show();
            this.$popover.show();
            this.plexi.$instance.on("click", this.events.click);
            this.on_show.apply(this, [this]);
            return this
        },
        position: function() {
            this.$container.show();
            this.$popover.show();
            var g = c(window);
            var d = {
                top: g.scrollTop(),
                left: g.scrollLeft()
            };
            this.$popover.removeClass("south");
            d.right = d.left + g.width();
            d.bottom = d.top + g.height();
            var e = this.$popover.offset();
            e.right = e.left + this.$popover.outerWidth();
            e.bottom = e.top + this.$popover.outerHeight();
            var f = (this.direction === "south") || (this.direction === "auto" && d.bottom < e.bottom);
            if (f) {
                this.$popover.addClass("south")
            }
        },
        hide: function() {
            this.plexi.hide();
            this.$popover.hide();
            this.visible = false;
            this.$container.removeClass("active");
            this.plexi.$instance.off("click", this.events.click);
            this.on_hide.apply(this, [this]);
            return this
        }
    };
    b.instances = [];
    b.register = function(d) {
        this.instances.push(d)
    };
    b.hideAll = function() {
        for (var d = 0; d < this.instances.length; d++) {
            this.instances[d].hide()
        }
    };
    b.visible = function() {
        for (var d = 0; d < this.instances.length; d++) {
            if (this.instances[d].visible) {
                return true
            }
        }
        return false
    };
    a.MultiPopover = b
})(jQuery, Tumblr);
/*! scripts/inplace_edit.js */
(function(c, b) {
    var a = function(e, d) {
        if (!(this instanceof a)) {
            return new a(e, d)
        }
        this.el = (typeof e === "string") ? c(e).get(0) : e;
        this.$el = c(e);
        this.options = d;
        this.metadata = this.$el.data("plugin-options");
        this.config = c.extend({}, a.defaults, this.options, this.metadata);
        this.$el.each(c.proxy(function(f, i) {
            var h = c(i);
            if (c.inArray(i.tagName.toLowerCase(), this.config.editableFields)===-1) {
                if (this.config.contentEditable) {
                    h.attr("contenteditable", "true")
                }
                if (this.config.makeInput) {
                    var g = c("<input/>", {
                        type: "text",
                        "class": i.className,
                        value: h.text()
                    });
                    if (i.id && i.id !== "") {
                        g.attr("id", i.id)
                    }
                    if (h.data("name")) {
                        g.attr("name", h.data("name"))
                    }
                    h.replaceWith(g);
                    this.bind_events(g)
                }
            }
        }, this));
        this.bind_events(this.$el);
        a.register(this);
        return this
    };
    a.prototype = {
        bind_events: function(d) {
            d.on("focus.inplacedit", c.proxy(function(f) {
                this.edit_input(c(f.currentTarget))
            }, this));
            d.on("blur.inplacedit", c.proxy(function(f) {
                this.set_text(c(f.currentTarget))
            }, this));
            d.on("keypress.inplacedit", c.proxy(function(f) {
                this.capture_text(f)
            }, this))
        },
        edit_input: function(d) {
            d.addClass("editing")
        },
        set_text: function(d) {
            d.removeClass("editing")
        },
        capture_text: function(d) {
            if (d.keyCode === 13) {
                d.preventDefault();
                c(d.currentTarget).blur()
            }
        },
        destroy: function() {
            this.$el.off(".inplacedit");
            a.instances.splice(_.indexOf(this), 1);
            return this
        }
    };
    a.instances = [];
    a.defaults = {
        editableFields: ["input", "textfield"],
        contentEditable: false,
        makeInput: true
    };
    a.register = function(d) {
        this.instances.push(d)
    };
    c.fn.inplaceedit = function(d) {
        return this.each(function() {
            new a(this, d)
        })
    };
    b.InplaceEdit = a
})(jQuery, Tumblr);
/*! scripts/mention.js */
(function(c, a) {
    var b = Backbone.View.extend({
        defaults: {
            left_offset: - 36,
            top_offset: 13
        },
        default_templates: {
            popover: '<div id="mention_popover_<%= uid %>" class="popover popover_menu popover_gradient mention_popover nipple_on_<%- nipple_position %>" style="display:none;"><div class="popover_inner"><%= items %></div></div>',
            items: '<% _.each(items, function(item, i) { %><div id="mention_<%- i %>" class="popover_menu_item" data-tumblelog="<%- items[i].name %>"><div class="t_info"><span class="t_name"><%= items[i].hilite_name %></span><span class="t_title"><%- items[i].title %></span></div><span class="result_thumb thumb" style="background-image:url(\'<%- items[i].avatar_url %>\')"></span></div><% }); %>'
        },
        events: {
            "mouseenter .popover_menu_item": "_hover",
            "mouseleave .popover_menu_item": "_hover",
            "click .popover_menu_item": "_click"
        },
        initialize: function(d) {
            this.options = d || {};
            this.options = _.extend(this.defaults, this.options);
            if (!_.isObject(this.options.list) || _.isUndefined(this.options.list.blogs)) {
                return false
            }
            this.templates = this.default_templates;
            this.uid = Math.floor(Math.random() * 100001);
            this.position = this.options.position;
            this.list = this.options.list.blogs;
            this.is_active = false;
            this.$popover = false;
            this.$items = false;
            this.$container = c(this.options.container);
            this.show()
        },
        _html_items: function(d) {
            var f = {
                items: d
            };
            var e = _.template(this.templates.items);
            return e(f)
        },
        _html_popover: function(d) {
            var f = {
                uid: this.uid,
                nipple_position: "top",
                items: d
            };
            var e = _.template(this.templates.popover);
            return e(f)
        },
        show: function() {
            c(".popover.mention_popover").remove();
            if (!_.isObject(this.list) || this.list.length === 0) {
                c("#mention_popover_" + this.uid).hide();
                this.is_active = false;
                return false
            }
            var e = this._items_underline(this.list, this.options.mention);
            var d = this._html_items(e);
            var f = this._html_popover(d);
            this.$container.append(f);
            this.$popover = c("#mention_popover_" + this.uid);
            this.popover = new Tumblr.Popover({
                el: this.$popover,
                popover: this.$popover,
                button: this.$container,
                skip_glass: true,
                skip_offset: true,
                left: (this.position.left + this.options.left_offset),
                top: (this.position.top + this.position.height + this.options.top_offset),
                disable_auto_show: true,
                on_show: _.bind(function() {}, this),
                on_hide: _.bind(function() {}, this)
            });
            this.$items = jQuery(".popover_menu_item", this.$popover);
            this.$el = this.$popover;
            this.popover.show();
            this.is_active = true
        },
        hide: function() {
            this.is_active = false;
            this.$items = false;
            if (this.popover && this.popover.is_showing) {
                this.popover.hide()
            }
        },
        update: function(g, e, d) {
            if (!this.is_active) {
                return false
            }
            if (!_.isUndefined(d)) {
                this.position = d
            }
            this._update_position();
            this.list = this._items_underline(e.blogs, g);
            var f = this._html_items(this.list);
            c(".popover_inner", this.$popover).html(f);
            this.$items = jQuery(".popover_menu_item", this.$popover);
            this._remove_helpers();
            if (!_.isObject(this.list) || this.list.length === 0) {
                this.$popover.hide()
            } else {
                this.$popover.show()
            }
        },
        update_position: function(d) {
            if (!_.isObject(d) ||!_.isObject(this.position)) {
                return 
            }
            if ((this.position.left === d.left) && (this.position.top === d.top)) {
                return 
            }
            this.position = d;
            this._update_position()
        },
        _update_position: function() {
            if (this.$popover.length > 0) {
                this.$popover.css({
                    left: (this.position.left + this.options.left_offset),
                    top: (this.position.top + this.position.height + this.options.top_offset)
                })
            }
        },
        up: function() {
            if (!this.is_active ||!this.$popover) {
                return false
            }
            if (!this.$items || this.$items.length === 0) {
                return false
            }
            this._remove_helpers();
            var d = this.$items.filter(".focus");
            var e = this.$items.index(d);
            if (e===-1) {
                $next = this.$items.filter(":last")
            } else {
                $next = this.$items.filter(":eq(" + (e - 1) + ")")
            }
            d.removeClass("focus");
            this._update_current($next);
            return true
        },
        down: function() {
            if (!this.is_active ||!this.$popover) {
                return false
            }
            if (!this.$items || this.$items.length === 0) {
                return false
            }
            this._remove_helpers();
            var d = this.$items.filter(".focus");
            var e = this.$items.index(d);
            if (e===-1 || e >= (this.$items.length - 1)) {
                $next = this.$items.filter(":first")
            } else {
                $next = this.$items.filter(":eq(" + (e + 1) + ")")
            }
            d.removeClass("focus");
            this._update_current($next);
            return true
        },
        enter: function(e, d) {
            if (!this.is_active ||!this.$popover) {
                return false
            }
            if (!this.$items || this.$items.length === 0) {
                return false
            }
            var h = false;
            var g = this.$items.filter(".focus");
            if (!h && g.length === 1) {
                h = g.data("tumblelog")
            }
            var f = this.$items.first();
            if (!h && f.length === 1) {
                h = f.data("tumblelog")
            }
            if (h) {
                if (!_.isUndefined(e)) {
                    if (h.toUpperCase() !== e.toUpperCase()) {
                        return false
                    }
                }
                Tumblr.Mention.tinymce.set_suggestion(h, (!_.isUndefined(d) && d === true));
                return true
            }
            return false
        },
        _hover: function(d) {
            if (this.$items && this.$items.length > 0) {
                this.$items.removeClass("focus")
            }
            this._remove_helpers();
            $next = jQuery(d.currentTarget);
            this._update_current($next)
        },
        _click: function(d) {
            $current = jQuery(d.currentTarget).closest(".popover_menu_item");
            Tumblr.Mention.tinymce.set_suggestion($current.data("tumblelog"));
            return false
        },
        _update_current: function(d) {
            if (!d || d.length === 0) {
                return 
            }
            d.addClass("focus");
            this._remove_helpers();
            if (d.is(":first-child")) {
                this.$el.addClass("first-item")
            } else {
                if (d.is(":last-child")) {
                    this.$el.addClass("last-item")
                } else {
                    this.$el.addClass("inner-item")
                }
            }
            var e = d.data("tumblelog");
            if (!_.isUndefined(e)) {
                Tumblr.Mention.tinymce.update_typeahead(e)
            }
        },
        _remove_helpers: function() {
            this.$el.removeClass("inner-item first-item last-item")
        },
        is_selected: function() {
            if (!this.is_active ||!this.$items || this.$items.length === 0) {
                return false
            }
            $selected = this.$items.filter(".focus");
            return ($selected.length === 1)
        },
        destroy: function() {
            this.hide();
            if (this.$popover) {
                this.$popover.remove()
            }
        },
        _items_underline: function(d, e) {
            var f = new RegExp(this._escapeRegExp(e), "gi"), g = this.decorate_item_substring;
            if (!f) {
                return false
            }
            _.each(d, function(j, h) {
                d[h].hilite_name = j.name.replace(f, g)
            });
            return d
        },
        decorate_item_substring: function(d) {
            return "<u>" + d + "</u>"
        },
        _escapeRegExp: function(d) {
            return d.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|\~\`\!\@\#]/g, "\\$&")
        }
    });
    a.MentionPopover = b
})(jQuery, Tumblr);
(function(c, b) {
    var a = Backbone.Model.extend({
        defaults: {
            route: "/svc/mention"
        },
        initialize: function(d) {
            this.options = _.extend(this.defaults, this.options);
            this.form_key = c("#tumblr_form_key").attr("content");
            this.user_cache = {};
            this.tinymce = false;
            this.container = false;
            this.popover = false;
            this.last_search = false;
            this.is_waiting = false;
            this.is_active = false;
            this.req = false
        },
        setup: function(d) {
            if (d) {
                this.tinymce = d
            }
        },
        search: function(d, f) {
            if (!_.isFunction(f)) {
                var f = function() {}
            }
            if (!_.isUndefined(this.user_cache[d])) {
                if ((!this.tinymce.is_mention_active()) || (this.tinymce.mention_string(true) !== d.toUpperCase())) {
                    return 
                }
                f.call(this.user_cache[d], d, this);
                this.show(this.container, this.position, this.user_cache[d], d);
                return 
            }
            if ((typeof this.req === "object") && this.req !== false) {
                this.req.abort()
            }
            this.is_waiting = true;
            var e = c.ajax({
                url: this.options.route,
                type: "GET",
                data: {
                    q: d,
                    form_key: this.form_key
                }
            });
            e.done(_.bind(function(g) {
                this.user_cache[d] = g;
                if ((!this.tinymce.is_mention_active()) || (this.tinymce.mention_string(true) !== d.toUpperCase())) {
                    return 
                }
                f.call(this.user_cache[d], d, this);
                this.show(this.container, this.position, this.user_cache[d], d);
                this._reset()
            }, this));
            e.fail(_.bind(function() {
                this.user_cache[d] = {};
                this._reset();
                if (!Tumblr.Dialog.is_visible) {
                    Tumblr.Dialog.alert(l10n_str.ajax_error)
                }
            }, this))
        },
        _reset: function() {
            if ((typeof this.req === "object") && this.req !== false) {
                this.req.abort()
            }
            this.is_waiting = false
        },
        update: function(e, f, d, g) {
            if (f.string === this.last_search) {
                return 
            }
            this.last_search = f.string;
            this.container = e;
            this.mention = f;
            this.position = d;
            this.search(f.string);
            if (_.isFunction(g)) {
                g()
            }
        },
        show: function(e, d, g, f) {
            if (!this.tinymce.is_mention_active()) {
                return 
            }
            if (this.popover && this.popover.is_active) {
                this.popover.update(f, g, d)
            } else {
                this.is_active = true;
                this.popover = new Tumblr.MentionPopover({
                    container: e,
                    position: d,
                    mention: f,
                    list: g
                });
                if (typeof _gaq !== "undefined" && _gaq) {
                    _gaq.push(["_trackEvent", "mentions", "popover", "opened"])
                }
            }
            var h = "";
            if (_.isObject(g.blogs)&&!_.isEmpty(g.blogs)) {
                h = g.blogs[0].name
            }
            if ((!this.tinymce.is_mention_active()) || (this.tinymce.mention_string(true) !== f.toUpperCase())) {
                return 
            }
            this.tinymce.update_typeahead(h)
        },
        update_position: function(d) {
            if (!_.isObject(d) ||!this.popover&&!this.popover.is_active) {
                return 
            }
            this.popover.update_position(d)
        },
        hide: function(d) {
            if (!_.isUndefined(d) && (d === true)) {
                if (this.is_active) {
                    this.tinymce.abort_current(false)
                }
            }
            this._reset();
            this.is_active = false;
            this.last_search = false;
            if (_.isObject(this.popover)) {
                this.popover.destroy()
            }
        }
    });
    b.Mention = new a()
})(jQuery, Tumblr);
/*! scripts/posting/post_forms.js */
(function(b, a) {
    a.PostForms = {
        initialize: function(r) {
            this.form_key = b("#tumblr_form_key").attr("content");
            this.safe_edit = parseInt(b("#tumblr_safe_edit").val(), 10) ? true : false;
            this.model = null;
            this.view = null;
            this.mode = r.mode;
            Tumblr.Events.on("NNC:reblog", this.edit, this);
            var h = b(document);
            var d, f;
            var q = location.search.substring(1).split("&");
            _.each(q, function(v) {
                v = v.split("=");
                var t = v[0];
                var u = decodeURIComponent(v[1]);
                if (t === "redirect_to" && Tumblr.Prima.Url.hasAllowedProtocol(u)) {
                    var s;
                    u = decodeURIComponent(u.replace(/\+/g, " "));
                    if ((s = u.indexOf("#")) > 0) {
                        u = u.substr(0, s)
                    }
                    this.redirect_to = u
                } else {
                    if (t === "source" && (/^[\w_]+$/i).test(u)) {
                        this.source = u
                    }
                }
            }, this);
            var k = _.bind(function(u) {
                if (u.metaKey) {
                    return 
                }
                d = this.parse_url_params(u.currentTarget.href);
                var s = b(u.currentTarget);
                var t = s.data("post-type");
                var v = s.data("post-endpoint") || t;
                this.create({
                    type: t,
                    endpoint: v,
                    attach_to: "#new_post",
                    previous_content_selector: "#post_buttons",
                    mode: this.mode
                }, d).then(function() {
                    h.one("click", "#post_buttons a", k)
                });
                u.preventDefault()
            }, this);
            h.one("click", "#post_buttons a", k);
            h.on("click", "a.edit_post", _.bind(function(x) {
                if (x.metaKey) {
                    return 
                }
                var w = b(x.currentTarget);
                w.on("click", l);
                setTimeout(function() {
                    w.off("click", l)
                }, 1000);
                x.preventDefault();
                var u = b(x.currentTarget);
                var v = u.data("post-type");
                var z = u.data("post-endpoint") || v;
                var s = u.data("channel-id");
                var t = u.data("post-id");
                var y = u.parents("li");
                this.edit({
                    type: v,
                    edit: true,
                    channel_id: s,
                    post_id: t,
                    endpoint: z,
                    attach_to: y,
                    previous_content_selector: w.parents(".post_wrapper"),
                    adjust_offset: true
                })
            }, this));
            h.on("click", "a.delete_button[data-post-id]", _.bind(function(v) {
                v.preventDefault();
                var u = window.confirm(__("Delete this post?"));
                if (u === false) {
                    return 
                }
                var t = b(v.currentTarget).attr("data-post-id");
                var s = b(v.currentTarget).attr("data-channel-id");
                this.delete_post(t, s)
            }, this));
            h.on("click", "a.reblog_button", _.bind(function(u) {
                if (u.metaKey) {
                    return 
                }
                var s = b(u.currentTarget);
                s.on("click", l);
                setTimeout(function() {
                    s.off("click", l)
                }, 1000);
                u.preventDefault();
                var B = b(u.currentTarget);
                var w = B.data("post-type");
                var z = B.data("post-endpoint") || w;
                var v = B.data("channel-id");
                var y = B.data("reblog-id");
                var x = B.data("reblog-key");
                var A = b(u.currentTarget).parents(".post").data("pt");
                var t = B.parents("li");
                this.edit({
                    type: w,
                    channel_id: v,
                    reblog_id: y,
                    endpoint: z,
                    detached: true,
                    reblog: true,
                    animate_from: t,
                    reblog_key: x,
                    previous_content_selector: null,
                    pt: A
                })
            }, this));
            function l() {
                return false
            }
            var e, m, n;
            if (location.pathname.indexOf("/new/")!==-1 && location.pathname.indexOf("/new/blog")===-1) {
                this.load_spinner();
                var o = /\/new\/([a-z]*)/g;
                var j = o.exec(window.location.pathname);
                if (j !== null) {
                    j = encodeURIComponent(j[1]);
                    d = this.parse_url_params(location.search);
                    j = Tumblr.PostForms.endpoints_to_types[j] ? j : "text";
                    this.create({
                        type: Tumblr.PostForms.endpoints_to_types[j],
                        endpoint: j,
                        attach_to: "#new_post",
                        previous_content_selector: "#post_buttons"
                    }, d)
                }
            }
            var c = location.pathname;
            var i = c.indexOf("/reblog/");
            if (c.match(/^(\/detached)?\/reblog\/[0-9]+/)) {
                this.load_spinner();
                d = {};
                f = c.slice(i).split("/");
                if (f.length > 3) {
                    e = b("#posts");
                    m = "";
                    n = false;
                    if (f[4]) {
                        var p = f[4];
                        n = true;
                        m = Tumblr.PostForms.endpoints_to_types[p] || Tumblr.PostForms.endpoints_to_types.text
                    }
                    d = {
                        type: m,
                        reblog_id: f[2],
                        detached: true,
                        reblog: true,
                        reblog_as: n,
                        attach_to: e,
                        reblog_key: f[3],
                        previous_content_selector: null
                    };
                    if (c.indexOf("/detached/") === 0 && Tumblr.PostMessageChannel) {
                        var g = new Tumblr.PostMessageChannel({
                            window: window.parent,
                            namespace: "reblog_iframe"
                        });
                        g.call("reblog_post_frame_loaded");
                        this._deferred_load_params = {
                            method: "edit",
                            args: [d]
                        };
                        setTimeout(_.bind(this.deferred_load, this), 10);
                        Tumblr.Events.on("post:form:hide", function() {
                            g.call("close_reblog_post_frame")
                        })
                    } else {
                        this.edit(d)
                    }
                }
            }
            if (location.pathname.match(/^\/edit\/[0-9]+/)) {
                this.load_spinner();
                d = {};
                f = location.pathname.split("/");
                if (f.length > 2) {
                    e = b("#posts");
                    d = {
                        type: "",
                        edit: true,
                        detached: true,
                        post_id: f[2],
                        attach_to: e
                    }
                }
                this.edit(d)
            }
        },
        xhr_request: function(c, f, d) {
            f = _.extend(f, {
                form_key: Tumblr.PostForms.form_key
            });
            var e = b.ajax({
                data: JSON.stringify(f),
                type: "POST",
                url: c
            });
            e.done(_.bind(function(g) {
                if (d[200]) {
                    d[200].call(this, g)
                }
            }, this));
            e.fail(_.bind(function(g) {
                if (d[g.status]) {
                    d[g.status].call(this, g.status)
                }
            }, this))
        },
        load_spinner: function() {
            var c = {
                lines: 16,
                length: 11,
                width: 4,
                radius: 17,
                color: "#fff",
                speed: 0.9,
                trail: 34,
                shadow: false,
                hwaccel: false,
                className: "waiting_spinner",
                zIndex: 2000000000,
                top: "50",
                left: "auto"
            };
            var d = new Spinner(c).spin();
            b('.plexi[data-token="body-plexi"]').append(d.el)
        },
        hide_spinner: function() {
            b('.plexi[data-token="body-plexi"]').empty()
        },
        omitted_automatic_content_sources: ["assets.tumblr.com", "static.tumblr.com", "media.tumblr.com"],
        parse_url_params: function(d) {
            var e, c, g, f;
            e = {
                post: {}
            };
            c = d.split("?");
            c = c[1] || c[0];
            c = c.split("&");
            c.forEach(_.bind(function(h) {
                h = h.split("=");
                if (h[0] === "tags" || h[0] === "post[tags]") {
                    g = _.escape(decodeURIComponent(h[1]));
                    b.extend(e.post, {
                        tags: g
                    })
                }
                if (h[0] === "caption") {
                    g = _.escape(decodeURIComponent(h[1]));
                    b.extend(e.post, {
                        two: g
                    })
                }
                if (h[0] === "post[state]") {
                    g = parseInt(encodeURIComponent(h[1]), 10);
                    if (g === 1 || g === 2) {
                        b.extend(e.post, {
                            state: g
                        })
                    }
                }
                if (h[0] === "state") {
                    f = {
                        draft: 1,
                        queue: 2
                    };
                    g = encodeURIComponent(h[1]);
                    if (f[g]) {
                        b.extend(e.post, {
                            state: f[g]
                        })
                    }
                }
                if (h[0] === "src" || h[0] === "post[src]") {
                    g = decodeURIComponent(h[1]);
                    b.extend(e.post, {
                        photos: [{
                            external_url: g,
                            filename: "",
                            id: "o1",
                            url: g
                        }
                        ]
                    });
                    if (this.omitted_automatic_content_sources.every(function(i) {
                        return g.indexOf(i)===-1
                    })) {
                        b.extend(e.post, {
                            source_url: g
                        })
                    }
                }
            }, this));
            return e
        },
        editor_defaults: {
            immediate: true,
            skin: "bluth",
            custom_css: "/assets/styles/custom_tinymce_bluth.css",
            layout: "bold,italic,strikethrough,link,unlink,numlist,bullist,image,blockquote,code",
            plugins: "autoresize,safari,pagebreak,ajax_forms,tumblr_popovers,mention",
            resize: true,
            min_width: 498,
            max_width: 498,
            focus: false
        },
        endpoints_to_types: {
            text: "regular",
            photo: "photo",
            quote: "quote",
            link: "link",
            chat: "conversation",
            audio: "audio",
            video: "video"
        },
        create: function(d, e) {
            var c = b.Deferred();
            this.config = b.extend({
                type: "regular",
                endpoint: "text",
                attach_to: "#new_post",
                detached: false
            }, d || {});
            if (this.view) {
                this.view.destroy(true)
            }
            this.model = (_.isFunction(Tumblr.PostForms[Tumblr.$.capitalize(this.config.type) + "Model"])) ? new Tumblr.PostForms[Tumblr.$.capitalize(this.config.type) + "Model"]() : new Tumblr.PostForms.Post();
            this.model.set(_.extend(this.model.attributes, e));
            this.view = new Tumblr.PostForms[Tumblr.$.capitalize(this.config.type)]({
                attach_to: this.config.attach_to,
                model: this.model,
                autosave: false,
                post_type: this.config.type,
                post_endpoint: this.config.endpoint,
                previous_content_selector: this.config.previous_content_selector,
                mode: this.config.mode,
                detached: this.config.detached
            });
            if (d.detached) {
                this.config = b.extend(this.config, {
                    attach_to: "body",
                    previous_content_selector: null,
                    adjust_offset: false,
                    animate_from: this.config.animate_from
                })
            }
            this.view.show_post_form(this.config.type);
            this.model.on("post:form:hide", function() {
                this.model.off();
                this.model = null;
                this.config = null;
                _.each(this.view, function(h, f, g) {
                    g[f] = null
                });
                this.view = null;
                c.resolve()
            }, this);
            return c.promise()
        },
        edit: function(c) {
            this.config = b.extend({}, c || {});
            var e = {
                post_id: this.config.post_id,
                channel_id: this.config.channel_id,
                reblog_id: this.config.reblog_id,
                reblog_key: this.config.reblog_key,
                post_type: this.config.reblog_as ? this.config.type: false
            };
            this.model_params = {
                channel_id: this.config.channel_id,
                post_id: this.config.post_id,
                edit: this.config.edit,
                detached: this.config.detached,
                reblog: this.config.reblog,
                reblog_id: this.config.reblog_id,
                reblog_key: this.config.reblog_key,
                safe_edit: this.safe_edit,
                source: this.source,
                is_recommended: this.config.is_recommended,
                reblog_source: this.config.reblog_source,
                placement_id: this.config.placement_id,
                pt: this.config.pt
            };
            if (this.view) {
                if (!this.config.reblog_as) {
                    this.view.destroy(true)
                } else {
                    this.view.destroy()
                }
            }
            if (this.model) {
                this.model = null
            }
            var d = {
                attach_to: this.config.attach_to,
                autosave: false,
                post_type: this.config.type,
                post_endpoint: this.config.endpoint,
                previous_content_selector: this.config.previous_content_selector,
                adjust_offset: this.config.adjust_offset,
                reblog_as: this.config.reblog_as,
                initial_height: this.config.initial_height,
                page_root: this.config.page_root,
                current_tumblelog: this.config.current_tumblelog,
                is_recommended: this.config.is_recommended
            };
            if (c.detached) {
                d = b.extend(d, {
                    attach_to: "body",
                    previous_content_selector: null,
                    adjust_offset: false,
                    animate_from: this.config.animate_from
                })
            }
            this.xhr_request("/svc/post/fetch", e, {
                200: _.bind(this.success, this, d),
                401: _.bind(this.unauthorized, this),
                403: _.bind(this.unauthorized, this),
                404: _.bind(this.unauthorized, this)
            })
        },
        delete_post: function(e, d) {
            var f = {
                post_id: e,
                channel_id: d
            };
            var c = b('li.post[data-post-id="' + e + '"]');
            this.xhr_request("/svc/post/delete", f, {
                200: function() {
                    c.fadeOut(500, function() {
                        c.remove()
                    })
                },
                401: _.bind(this.unauthorized, this),
                403: _.bind(this.unauthorized, this),
                500: _.bind(this.unauthorized, this)
            })
        },
        success: function(c, d) {
            this.model = (_.isFunction(Tumblr.PostForms[Tumblr.$.capitalize(d.post.type) + "Model"])) ? new Tumblr.PostForms[Tumblr.$.capitalize(d.post.type) + "Model"](this.model_params) : new Tumblr.PostForms.Post(this.model_params);
            this.model.set(_.extend(this.model.attributes, d, {
                silent: true
            }));
            c = b.extend(c, {
                post_type: d.post.type,
                model: this.model
            });
            this.view = new Tumblr.PostForms[Tumblr.$.capitalize(d.post.type)](c);
            this.view.show_post_form(d.post.type);
            if (this.model.get("edit")&&!this.model.get("detached")) {
                this.view.scroll_fence = _.debounce(_.bind(function() {
                    if (this.scrolling_back_up) {
                        return false
                    }
                    var j = this.$parent_el.offset().top;
                    var h = this.$parent_el.outerHeight();
                    var i = j + h;
                    var e = b(window).scrollTop();
                    var k = b(window).height();
                    var f = e + k;
                    var g;
                    if (j > f) {
                        this.scrolling_back_up = true;
                        g = j - 7;
                        b("html, body").stop(true).animate({
                            scrollTop: g
                        }, 500, "linear", _.bind(function() {
                            this.scrolling_back_up = false
                        }, this))
                    } else {
                        if (i < e) {
                            this.scrolling_back_up = true;
                            g = j - 7;
                            if (h > 0.5 * k) {
                                g = i - 0.5 * k
                            }
                            b("html, body").stop(true).animate({
                                scrollTop: g
                            }, 500, "linear", _.bind(function() {
                                this.scrolling_back_up = false
                            }, this))
                        }
                    }
                }, this.view), 75);
                b(window).on("scroll", this.view.scroll_fence)
            }
        },
        unauthorized: function() {
            b(".plexi").remove();
            if (!!(window.history && history.pushState)) {
                window.history.replaceState({}, "Tumblr", "/dashboard")
            } else {
                window.location.href = "/dashboard"
            }
        },
        change_reblog_type: function(e, c, g, f, d) {
            this.edit({
                attach_to: g,
                type: e,
                channel_id: this.model.get("channel_id"),
                reblog_id: this.model.get("reblog_id"),
                reblog_as: true,
                endpoint: e,
                detached: false,
                reblog: true,
                reblog_key: this.model.get("reblog_key"),
                safe_edit: this.safe_edit,
                previous_content_selector: null,
                adjust_offset: false,
                initial_height: f,
                page_root: c,
                current_tumblelog: d
            })
        },
        deferred_load: function() {
            if (!this._deferred_load_params) {
                return 
            }
            this[this._deferred_load_params.method].apply(this, this._deferred_load_params.args)
        }
    }
})(jQuery, Tumblr);
/*! scripts/posting/model/post.js */
(function(c, a) {
    var b = window.l10n_str || {};
    Tumblr.PostForms.Post = Backbone.Model.extend({
        urlRoot: "/svc/post/update",
        max_upload_size: 10485760,
        upload_pattern: /./,
        upload_url: "/svc/post/upload_text_image",
        defaults: {
            form_key: c("#tumblr_form_key").attr("content")
        },
        add_protocol: function(d, e) {
            if (!/^([^\/]+):\/\//i.test(d)) {
                if (!e) {
                    e = "http"
                }
                d = e + "://" + d
            }
            return d
        },
        get_protocol: function(d) {
            if (!d) {
                return false
            }
            var e = d.match(/^([^\/]+):\/\//i);
            if (e) {
                return e[1]
            }
            return false
        },
        undup_protocol: function(d) {
            var e = d.match(/^((?:[^\/]+:\/\/)+)([^\/]+:\/\/.*)/i);
            if (e) {
                return e[2]
            }
            return d
        },
        validate: function(d) {
            if (d.errors) {
                return d.errors
            }
        },
        validate_upload: function(d, e) {
            if (!d.size) {
                return 
            }
            if (this.max_upload_size && d.size > this.max_upload_size) {
                return {
                    size: __(e.errorSize)
                }
            } else {
                if (d.type&&!this.upload_pattern.test(d.type)) {
                    return {
                        type: __(e.errorType)
                    }
                }
            }
        },
        random_upload_id: function() {
            return Math.floor(Math.random() * 100000)
        },
        init_uploader: function(e, d) {
            this.uploader_inititalized = true;
            this.jqXHR = null;
            d = c.extend({
                error_msg: {
                    errorSize: "File is too big.",
                    errorType: "Filetype is not allowed."
                },
                upload_url: this.upload_url,
                dropZone: c(document),
                pasteZone: null,
                singleFileUploads: true,
                limitConcurrentUploads: 1,
                validate: true,
                custom_validation: null
            }, d || {});
            e.fileupload({
                singleFileUploads: d.singleFileUploads,
                limitConcurrentUploads: d.limitConcurrentUploads,
                dataType: "json",
                url: d.upload_url,
                dropZone: d.dropZone,
                pasteZone: d.pasteZone,
                formData: _.bind(function(f) {
                    var g = c(f).serializeArray();
                    var h = Tumblr.PostForms.form_key || this.defaults.form_key;
                    g.push({
                        name: "form_key",
                        value: h
                    });
                    g.push({
                        name: "upload_id",
                        value: this.upload_id
                    });
                    return g
                }, this),
                drop: _.bind(function(g, f) {
                    if (d.drop) {
                        d.drop.apply(this, arguments)
                    }
                }, this),
                change: _.bind(function(g, f) {
                    if (d.change) {
                        d.change.apply(this, arguments)
                    }
                    this.trigger("change:upload_file_seppuku", e)
                }, this),
                add: _.bind(function(h, f) {
                    var i;
                    if (d.validate) {
                        if (d.custom_validation && _.isFunction(d.custom_validation)) {
                            i = d.custom_validation.call(this, f.files[0])
                        } else {
                            i = this.validate_upload(f.files[0], d.error_msg)
                        }
                    }
                    if (d.validate && i) {
                        this.trigger("change:upload_file_error", i, f, e);
                        return 
                    } else {
                        var g = this.random_upload_id();
                        this.upload_id = g;
                        f.files[0].upload_id = g;
                        this.trigger("change:upload_files_added", f, e);
                        this.jqXHR = f.submit()
                    }
                }, this),
                always: _.bind(function(g, f) {
                    this.trigger("change:upload_always", f.files, f.dataType, e)
                }, this),
                send: _.bind(function(g, f) {
                    this.trigger("change:send_file", f.files, f.dataType, e)
                }, this),
                done: _.bind(function(g, f) {
                    setTimeout(_.bind(function() {
                        if (f.result.errors) {
                            this.trigger("change:upload_failed", f.result.errors, e)
                        } else {
                            if (!f.result.response) {
                                this.trigger("change:upload_failed", b.ajax_error, e)
                            } else {
                                this.trigger("change:upload_complete", f.result, e)
                            }
                        }
                    }, this), 100)
                }, this),
                progress: _.bind(function(h, g) {
                    var f = parseInt(g.loaded / g.total * 100, 10);
                    this.trigger("change:upload_progress", f, e)
                }, this),
                fail: _.bind(function(g, f) {
                    if (f.errorThrown !== "abort") {
                        this.trigger("change:upload_failed", b.ajax_error, e)
                    }
                }, this)
            })
        },
        enable_uploader: function(d) {
            d.fileupload("enable")
        },
        disable_uploader: function(d) {
            d.fileupload("disable")
        },
        destroy_uploader: function(d) {
            this.uploader_inititalized = false;
            d.fileupload("destroy")
        },
        cancel_upload: function() {
            if (this.jqXHR) {
                this.jqXHR.abort()
            }
        }
    })
})(jQuery, Tumblr);
/*! scripts/posting/model/regular.js */
(function(b, a) {
    Tumblr.PostForms.RegularModel = Tumblr.PostForms.Post.extend({
        max_upload_size: 10485760,
        upload_pattern: /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i,
        upload_url: "/svc/post/upload_text_image",
        validate: function(e) {
            var c = (this.has("post")&&!_.isUndefined(this.get("post").reblog_tree) && this.get("post").reblog_tree !== false);
            var d = (c && (this.get("remove_reblog_tree") === true));
            if (!b.trim(e["post[one]"])&&!b.trim(e["post[two]"])) {
                if ((!c) || (c && d)) {
                    return {
                        error: __("Post cannot be empty")
                    }
                }
            }
            if (e.errors) {
                return e.errors
            }
        }
    })
})(jQuery, Tumblr);
/*! scripts/posting/model/quote.js */
(function(b, a) {
    Tumblr.PostForms.QuoteModel = Tumblr.PostForms.Post.extend({
        validate: function(c) {
            if (!b.trim(c["post[one]"])) {
                return {
                    error: __("Post cannot be empty")
                }
            }
            if (c.errors) {
                return c.errors
            }
        }
    })
})(jQuery, Tumblr);
/*! scripts/posting/model/link.js */
(function(b, a) {
    Tumblr.PostForms.LinkModel = Tumblr.PostForms.Post.extend({
        max_upload_size: 10485760,
        thumbnail_upload_pattern: /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i,
        upload_url: "/svc/post/upload_link_image",
        fetch_og_meta: function(e, d, c) {
            var f = b.ajax({
                url: "/svc/post/fetch_og",
                type: "POST",
                data: {
                    form_key: Tumblr.PostForms.form_key,
                    url: e
                }
            });
            f.always(_.bind(function(g) {
                this.trigger("change:link_of_meta", g)
            }, this));
            if (typeof d === "function") {
                f.done(_.bind(function(g) {
                    d.call(this, b.parseJSON(g), e)
                }, this))
            }
            if (typeof c === "function") {
                f.fail(_.bind(function(h, k, j) {
                    var i;
                    try {
                        i = JSON.parse(h.responseText)
                    } catch (g) {} finally {
                        if (!_.isObject(i)) {
                            i = _.zipObject(k, j)
                        }
                    }
                    c.call(this, i, e)
                }, this))
            }
            return f
        },
        allowed_protocol: function(c) {
            c = b.trim(c);
            if (c.match(/^magnet:/i)) {
                return false
            }
            var d = this.get_protocol(c);
            return _.indexOf(["http", "https"], d) >= 0
        },
        validate: function(c) {
            if (!b.trim(c["post[two]"])) {
                return {
                    error: __("Post cannot be empty")
                }
            }
            if (!this.allowed_protocol(c["post[two]"])) {
                return {
                    error: __("Invalid URL")
                }
            }
            if (Tumblr.use_link_opengraph && this.is_suspicious_title(c["post[two]"], c["post[one]"])) {
                return {
                    error: __("Post cannot contain URL in title")
                }
            }
            if (c.errors) {
                return c.errors
            }
        },
        validate_thumbnail: function(c) {
            if (!c.size) {
                return 
            }
            if (c.size > this.max_upload_size) {
                return {
                    size: __("File is too big. Max 10MB.")
                }
            } else {
                if (!this.thumbnail_upload_pattern.test(c.type)) {
                    return {
                        type: __("Only image files are allowed.")
                    }
                }
            }
        },
        is_suspicious_title: function(e, h) {
            if (!(h && e)) {
                return false
            }
            h = b.trim(h);
            var g = e.replace(/(https?:\/\/)?([^\/]+)(.*)/, "$2");
            if (!g) {
                return false
            }
            var d;
            var f = function(i) {
                return i.split(".").slice( - 2).join(".").toLowerCase()
            };
            if ((d = h.match(/https?:\/\/([^\/]+)/i)) && d.length > 1) {
                if (f(d[1]) !== f(g)) {
                    return true
                }
            }
            if ((d = b.trim(h).match(/\s/g)) && d.length > 0) {
                return false
            }
            var c = function(i) {
                return i.split(".").slice( - 1).join(".").toLowerCase()
            };
            if ((d = h.match(/([^\/\s]+\.[^\/\s\?]{2,})/i)) && d.length > 1 && c(d[1]).match(/(com|net|org|edu|gov|mil)/)) {
                if (f(d[1]) !== f(g)) {
                    return true
                }
            }
            return false
        }
    })
})(jQuery, Tumblr);
/*! scripts/posting/model/conversation.js */
(function(b, a) {
    Tumblr.PostForms.ConversationModel = Tumblr.PostForms.Post.extend({
        validate: function(c) {
            if (!b.trim(c["post[two]"])) {
                return {
                    error: __("Post cannot be empty")
                }
            }
            if (c.errors) {
                return c.errors
            }
        }
    })
})(jQuery, Tumblr);
/*! scripts/posting/model/audio.js */
(function(b, a) {
    Tumblr.PostForms.AudioModel = Tumblr.PostForms.Post.extend({
        services: ["soundcloud", "spotify"],
        max_upload_size: 10485760,
        upload_pattern: b.browser.mozilla ? /^audio\/(?:.*)$/i: /^(?:audio\/mp3|audio\/mpeg)$/i,
        artwork_upload_pattern: /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i,
        upload_url: "/svc/post/upload_audio",
        search: function(c) {
            var d = 0;
            _.each(this.services, _.bind(function(e) {
                var f = b.ajax({
                    url: "/search_audio?q=" + encodeURIComponent(c),
                    type: "POST",
                    data: {
                        audio_search_provider: e
                    }
                });
                f.done(_.bind(function(g) {
                    this.trigger("change:audio_search", this.normalize_results(e, g))
                }, this));
                f.fail(_.bind(function(g) {
                    this.trigger("change:audio_search_failed", e)
                }, this))
            }, this))
        },
        normalize_results: function(c, g) {
            var f;
            var e = 5;
            var h = {};
            switch (c) {
            case"soundcloud":
                f = g.splice(0, e);
                for (var d = 0; d < f.length; d++) {
                    f[d].artwork_url = (f[d].artwork_url && f[d].artwork_url != "null" ? f[d].artwork_url : "");
                    f[d].stream_url = f[d].stream_url + "?client_id=3cQaPshpEeLqMsNFAUw1Q";
                    if (f[d].kind === "playlist" && f[d].tracks && f[d].tracks.length) {
                        f[d].stream_url = f[d].tracks[0].stream_url + "?client_id=3cQaPshpEeLqMsNFAUw1Q"
                    }
                }
                break;
            case"spotify":
                f = g.tracks.splice(0, e);
                break
            }
            for (d = 0; d < f.length; d++) {
                f[d].type = c
            }
            h.items = f;
            h.type = c;
            return h
        },
        validate: function(c) {
            if (!c["post[three]"]&&!c.preuploaded_url&&!c.pre_upload) {
                return {
                    error: __("Please choose an audio source before continuing.")
                }
            }
            if (c.pre_upload && c.preuploaded_url&&!c.confirm_tos) {
                return {
                    error: __("You must agree that you have permission to share this file.")
                }
            }
            if (c.errors) {
                return c.errors
            }
        },
        validate_artwork: function(c, d) {
            if (!c.size) {
                return 
            }
            if (c.size > this.max_upload_size) {
                return {
                    size: __("File is too big. Max 10MB.")
                }
            } else {
                if (!this.artwork_upload_pattern.test(c.type)) {
                    return {
                        type: __("Only image files are allowed.")
                    }
                }
            }
        },
        get_soundcloud_data: function(c, f) {
            var e = {
                form_key: Tumblr.PostForms.form_key,
                soundcloud_url: c
            };
            var d = b.ajax({
                url: "/svc/post/get_soundcloud_data",
                type: "POST",
                data: JSON.stringify(e)
            });
            d.done(_.bind(function(h) {
                if (h && _.isFunction(f)) {
                    var g = {};
                    g.provider = "soundcloud";
                    g.href = c;
                    g.artwork = h.artwork_url;
                    g.title = h.title;
                    g.stream = h.stream_url + "?client_id=3cQaPshpEeLqMsNFAUw1Q";
                    if (!_.isUndefined(h.kind)) {
                        g.kind = h.kind
                    }
                    f.call(this, g)
                }
            }, this))
        },
        get_bandcamp_data: function(c, f) {
            var e = {
                form_key: Tumblr.PostForms.form_key,
                bandcamp_url: c
            };
            var d = b.ajax({
                url: "/svc/post/get_bandcamp_data",
                type: "POST",
                data: JSON.stringify(e)
            });
            d.done(_.bind(function(h) {
                if (!h || h.error) {
                    return false
                }
                if (h && _.isFunction(f)) {
                    var g = {};
                    g.provider = "bandcamp";
                    g.href = h.url;
                    g.artwork = h.art_350px;
                    g.title = h.title;
                    g.artist = h.artist;
                    g.album = h.album_title;
                    g.stream = h.stream_url;
                    g.type = h.type;
                    g.id = h.id;
                    f.call(this, g)
                }
            }, this))
        },
        get_spotify_data: function(c, f) {
            var e = {
                form_key: Tumblr.PostForms.form_key,
                spotify_url: c
            };
            var d = b.ajax({
                url: "/svc/post/get_spotify_data",
                type: "POST",
                data: JSON.stringify(e)
            });
            d.done(_.bind(function(h) {
                if (!h || h.error) {
                    return false
                }
                if (h && _.isFunction(f)) {
                    var g = {};
                    g.href = h.url;
                    g.provider = "spotify";
                    g.artwork = h.image || "";
                    g.title = h.title || "";
                    g.artist = h.artist || "";
                    g.album = h.album || "";
                    g.year = h.year || "";
                    g.track = h.track || "";
                    f.call(this, g)
                }
            }, this))
        }
    })
})(jQuery, Tumblr);
/*! scripts/posting/model/video.js */
(function(b, a) {
    Tumblr.PostForms.VideoModel = Tumblr.PostForms.Post.extend({
        max_upload_size: Tumblr.Flags("ignore_video_upload_limits")(true, false) ? false: 104857600,
        upload_pattern: /^video\/(?:.*)$/i,
        upload_url: "/svc/post/upload_video",
        validate: function(c) {
            if (c.keep_video) {
                return 
            } else {
                if (c.pre_upload) {
                    if (!c.preuploaded_url) {
                        return {
                            error: __("Please choose a video source before continuing.")
                        }
                    }
                    if (!c.confirm_tos) {
                        return {
                            error: __("You must agree that you have permission to share this file.")
                        }
                    }
                } else {
                    if (!c["post[one]"]) {
                        return {
                            error: __("Please choose a video source before continuing.")
                        }
                    } else {
                        if (!c.valid_embed_code) {
                            return {
                                error: __("Sorry, that URL is being weird. Might want to try the embed code instead.")
                            }
                        }
                    }
                }
            }
            if (c.errors) {
                return c.errors
            }
        },
        get_video_data: function(e, c, d) {
            var g = {
                form_key: Tumblr.PostForms.form_key,
                embed_url: e
            };
            var f = b.ajax({
                url: "/svc/post/get_video_data",
                type: "POST",
                data: JSON.stringify(g)
            });
            f.success(_.bind(function(i) {
                if (i && _.isFunction(c)) {
                    var h = b.extend({
                        orig_embed_code: e
                    }, i);
                    c.call(this, h)
                } else {
                    if (_.isFunction(d)) {
                        d.call(this)
                    }
                }
            }, this));
            f.error(_.bind(function() {
                if (_.isFunction(d)) {
                    d.call(this)
                }
            }, this));
            return f
        }
    })
})(jQuery, Tumblr);
/*! scripts/posting/model/photo.js */
(function(b, a) {
    Tumblr.PostForms.PhotoModel = Tumblr.PostForms.Post.extend({
        upload_url: "/svc/post/upload_photo",
        upload_pattern: /^image\/(gif|jpe?g|png)$/,
        max_number_of_files: 10
    })
})(jQuery, Tumblr);
/*! scripts/posting/view/base_view.js */
(function(b, a) {
    Tumblr.PostForms.BaseView = Backbone.View.extend({
        init: true,
        active: false,
        empty: true,
        className: "post_form_wrapper",
        editor_id: "post_two",
        events: {
            "submit form#post_form": "submit",
            "input form#post_form": "change",
            "change form#post_form": "change",
            "click button.close": "hide_post_form",
            "click #create_post .options": "show_post_options",
            "click .cog": "show_advanced_options",
            "mouseover #tumblelog_select li:first-child .option": "tumblelog_menu_nipple",
            "mouseout #tumblelog_select li:first-child .option": "tumblelog_menu_nipple",
            "click #tumblelog_select .txt:not(.edit)": "show_tumblelog_choice",
            "click .reblog_select": "show_reblog_types",
            "click #tumblelog_select .option": "select_tumblelog",
            "click #reblog_select .option": "select_reblog_type",
            "click #post_options .option": "select_post_option",
            "click #preview": "preview_on_blog",
            "click .publish_on": "show_publish_on",
            "change .advanced_post_options input": "advanced_options_update",
            "keydown .advanced_post_options input": "advanced_options_update",
            "blur .advanced_post_options .option:last-child input": "blur_advanced_options",
            "change #post_slug": "sluggify",
            "change #post_source_url": "source_url",
            "change #allow_answers": "allow_answers",
            "click .btn_toggle_reblogs": "toggle_remove_reblog_tree"
        },
        tinymce_add_events: function() {
            throw "Deprecated"
        },
        tinymce_remove_events: function() {
            throw "Deprecated"
        },
        initialize: function(c) {
            this.options = c || {};
            this.$parent_el = b(this.options.attach_to);
            this.base_template = b("#base_template").html();
            this.initialHeight = this.options.initial_height || this.$parent_el.outerHeight();
            this.detached = this.options.detached;
            this.post_type = this.options.post_type;
            this.post_endpoint = this.options.post_endpoint || this.post_type;
            this.preview_endpoint = "post/preview";
            this.post_class = (this.detached) ? "detached" : "inline";
            this.previous_content_selector = this.options.previous_content_selector;
            this.page_root = (b("body").data("page-root")) || "";
            this.new_root = (b("body").data("new-root")) || "";
            if (this.model.get("detached")) {
                this.$el.addClass("detached")
            }
            this.edit = this.options.edit;
            this.is_ie9 = b("html").hasClass("ie9");
            this.queue = b("body").hasClass("dashboard_post_queue");
            this.model.on("change:upload_files_added", this.change, this);
            b(window).on("beforeunload." + this.cid, _.bind(this.before_unload, this));
            this.render();
            var d = {
                lines: 13,
                length: 6,
                width: 2,
                radius: 6,
                color: "rgba(0,0,0,.5)",
                speed: 0.9,
                trail: 34,
                shadow: false,
                hwaccel: false,
                className: "spinner",
                zIndex: 2000000000,
                top: "0",
                left: "0"
            };
            this.spinner = new Spinner(d);
            this.disable_global();
            if (this.model.get("detached")) {
                new Tumblr.PostVideoEmbedToggle({
                    el: this.$el
                })
            }
            this.postHelpers = new Tumblr.DashboardPostHelpers(this)
        },
        disable_global: function() {
            b("#search_field").removeClass("active")
        },
        cache_selectors: function() {
            this.$loader = this.$(".post_loader");
            this.$previous_content = b(this.previous_content_selector);
            this.$body = b("body");
            this.$post_form = this.$("#post_form");
            this.$post_content = this.$("#post_content");
            this.$post_content_type = this.$("#post_content .post_type");
            this.$preview = this.$("#preview");
            this.$post_state = this.$("#post_state");
            this.$main_content = this.$(".main_content");
            this.$additional_options_panel = this.$(".additional_options_panel");
            this.$additional_options = this.$(".additional_options");
            this.$allow_answers = this.$("#allow_answers");
            this.$current_tumblelog = this.$("#tumblelog_choices .selected");
            this.$publish_on = this.$("#post_publish_on");
            this.$submit_btn = this.$("#create_post button[type=submit]");
            this.$preview_btn = this.$("#preview .chrome");
            this.$original_avatar = b("#post_controls_avatar");
            this.$original_sub_avatar = b("#post_controls_sub_avatar");
            this.$post = this.$el.closest(".post");
            if (this.model.get("detached")) {
                this.$avatar = this.$el.find(".post_avatar .post_avatar_link").addClass("use_blog_avatar");
                this.$sub_avatar = this.$el.find(".post_avatar .post_sub_avatar").addClass("use_sub_avatar")
            } else {
                this.$avatar = this.$parent_el.find(".post_avatar .post_avatar_link").first().addClass("use_blog_avatar");
                this.$sub_avatar = this.$parent_el.find(".post_avatar .post_sub_avatar").first().addClass("use_sub_avatar")
            }
            if (this.options.reblog_as) {
                this.$avatar = b(".post_form_wrapper.detached a.post_avatar_link");
                this.$sub_avatar = b(".post_form_wrapper.detached a.post_sub_avatar")
            }
            this.$blog_avatar = b("<span/>").addClass("post_avatar_link blog_avatar");
            this.$new_blog_avatar = b("<span/>").addClass("post_avatar_link blog_avatar new");
            if (this.$avatar.is(".flat")) {
                this.$avatar.append(this.$blog_avatar, this.$new_blog_avatar);
                this.$blog_avatar.css("background-image", this._url_css_wrap(this.$avatar.data("avatarUrl")));
                this.$new_blog_avatar.css("background-image", "none")
            } else {
                this.$avatar.css("background-image", "none").empty().append(this.$blog_avatar, this.$new_blog_avatar);
                if (this.model.get("edit")) {
                    this.$blog_avatar.css("background-image", this._url_css_wrap(this.$avatar.data("avatarUrl")));
                    this.$new_blog_avatar.css("background-image", this._url_css_wrap(this.$avatar.data("avatarUrl")));
                    if (!this.$parent_el.hasClass("same_user_as_last") && this.$avatar.data("useSubAvatar")) {
                        this.$sub_avatar.addClass("instant show_sub_avatar")
                    }
                } else {
                    this.$blog_avatar.css("background-image", this._url_css_wrap(this.$original_avatar.data("avatarUrl")));
                    this.$new_blog_avatar.css("background-image", this._url_css_wrap(this.$original_avatar.data("avatarUrl")))
                }
            }
            this.editor_type = this.$("#post_editor_type").val();
            if (!this.$current_tumblelog.length) {
                this.$current_tumblelog = this.$("#tumblelog_choices .option").first().addClass("selected")
            }
            if (this.$previous_content.length) {
                this.previous_content = this.$previous_content.get(0)
            }
        },
        destroy: function(c) {
            this.undelegateEvents();
            Tumblr.Editor.off(null, null, this);
            b(document).off("." + this.cid);
            b(window).off("." + this.cid);
            if (this.tag_editor) {
                this.tag_editor.destroy()
            }
            if (this.post_plexi) {
                this.post_plexi.destroy()
            }
            if (this.publish_on_inplaceedit) {
                this.publish_on_inplaceedit.destroy()
            }
            if (this.post_form) {
                this.post_form.off("." + this.cid)
            }
            if (this.reblog_toggle_tooltip) {
                this.reblog_toggle_tooltip.remove()
            }
            if (c) {
                if (this.rich_editor) {
                    this.rich_editor.remove()
                }
                this.remove()
            }
        },
        reset: function() {
            if (this.view) {
                this.view.destroy()
            }
            if (this.sharing) {
                this.sharing.destroy()
            }
        },
        template_helpers: {
            detached: "",
            edit: "",
            reblog: "",
            post_tumblelog: "",
            external_url: "",
            safe_edit: "",
            one: "",
            two: "",
            thumbnail: "",
            webcam: "",
            embed_code_safe: "",
            Title: "",
            Artist: "",
            Album: "",
            upload_artwork: "",
            artwork: "",
            is_published: function(c, d) {
                return ((c && parseInt(c.state, 10) === 0)&&!d)
            },
            is_new_or_published: function(c) {
                return (_.isEmpty(c) || parseInt(c.state, 10) === 0)
            },
            is_password_published: function(d, c) {
                return (d && parseInt(d.state, 10) === 0 && c && c.password_protected)
            },
            allow_answers: function(c, d) {
                return (_.isEmpty(c) || parseInt(c.state, 10) === 1 || parseInt(c.state, 10) === 2 || (c.allow_answers&&!d))
            },
            allow_photo_replies: function(c, d) {
                return (_.isEmpty(c) || parseInt(c.state, 10) === 1 || parseInt(c.state, 10) === 2 || (c.allow_photo_replies&&!d))
            },
            allow_share: function(c, d) {
                return (_.isEmpty(c) || parseInt(c.state, 10) === 1 || parseInt(c.state, 10) === 2 || parseInt(c.state, 10) === 3 || c.state == "on.2" || d)
            },
            reblog_post_types: function(f, g) {
                var d = "";
                for (var e = 0, c = f.length; e < c; e++) {
                    d += '<li><div class="option';
                    if (f[e] === g) {
                        d += " selected"
                    }
                    d += '" data-option-value="';
                    if (f[e] === "regular") {
                        d += "text"
                    } else {
                        if (f[e] === "conversation") {
                            d += "chat"
                        } else {
                            d += f[e]
                        }
                    }
                    d += '">';
                    if (f[e] === "regular") {
                        d += __("Text")
                    } else {
                        if (f[e] === "conversation") {
                            d += __("Chat")
                        } else {
                            d += __(Tumblr.$.capitalize(f[e]))
                        }
                    }
                    d += "</div></li>"
                }
                return d
            },
            is_draft: function(c) {
                return (c && parseInt(c.state, 10) === 1)
            },
            get_value: function(c) {
                if (typeof c != "undefined" && c !== null && c !== false) {
                    return c
                }
                return ""
            }
        },
        render: function() {
            if (parseInt(this.model.get("post").state, 10) === 2 && this.model.get("post").publish_on) {
                this.model.get("post").state = "on.2"
            }
            var g = _.extend(_.clone(this.template_helpers), this.model.toJSON());
            var e = _.template(this.base_template);
            this.$el.append(e(g));
            this.$parent_el.append(this.$el);
            this.cache_selectors();
            switch (this.options.mode) {
            case"drafts":
                this.set_post_option("1");
                break;
            case"post_queue":
                this.set_post_option("2");
                break
            }
            this.$post_form.attr("data-post-type", this.post_type);
            this.$main_content.addClass(this.post_type + "_form");
            if (!this.model.get("edit")&&!this.model.get("reblog")) {
                this.disable_submit()
            } else {
                this.enable_submit()
            }
            Tumblr.Editor.on("tinymce.change", this.change, this);
            Tumblr.Editor.on("tinymce.init", function(i) {
                this.rich_editor = i.data
            }, this);
            this.tag_editor = new Tumblr.TagEditor({
                el: ".tag_editor"
            });
            this.post_plexi = new Tumblr.Plexi({
                token: "post-plexi"
            });
            this.post_plexi.create(this.$post_form.get(0));
            this.draft = (this.$post_state.val() === "1") ? true : false;
            var c = b(".advanced_post_options input:not([disabled])");
            b.each(c, function() {
                var i = b(this);
                if (i !== null && i !== undefined && i.val() != "") {
                    i.data("original-value", i.val())
                }
            });
            this.advanced_options_update(null);
            if (this.model.attributes.post) {
                var f = (this.model.attributes.post.is_private === 1) ? "private": (this.model.attributes.post.state || 0);
                this.set_post_option(f)
            }
            if (!this.model.get("edit") || (this.model.attributes.post && (parseInt(this.model.attributes.post.state, 10) === 1 || parseInt(this.model.attributes.post.state, 10) === 2 || parseInt(this.model.attributes.post.state, 10) === 3 || this.model.attributes.post.state == "on.2"))) {
                this.render_new()
            }
            if (this.model.get("detached")) {
                this._position_detached()
            }
            if (this.options.current_tumblelog) {
                this.set_tumblelog(this.options.current_tumblelog, true)
            }
            if (this.model.get("edit")&&!this.$parent_el.hasClass("same_user_as_last") || this.options.reblog_as) {
                this.set_blog_avatar(false, true);
                this.set_avatar_link(false, "_new")
            } else {
                this.set_blog_avatar();
                this.set_avatar_link(false, "_new")
            }
            if (window.history.replaceState) {
                if (this.model.get("reblog")) {
                    var h = {
                        regular: "text",
                        conversation: "chat"
                    };
                    var d = (this.options.reblog_as) ? this.options.post_type: "";
                    d = h[d] || d;
                    if (!(window.location.pathname.indexOf("reblog") > 0)) {
                        window.history.replaceState({
                            post_id: this.model.attributes.post_id
                        }, "Reblog", "/reblog/" + this.model.attributes.reblog_id + "/" + this.model.attributes.reblog_key + (d ? "/" + d : ""))
                    }
                } else {
                    if (this.model.get("edit")) {
                        window.history.replaceState({
                            post_id: this.model.attributes.post_id
                        }, "Edit", "/edit/" + this.model.attributes.post_id)
                    } else {
                        window.history.replaceState({}, "New", this.new_root + "/new/" + this.post_endpoint)
                    }
                }
            }
            return this
        },
        render_new: function() {
            Tumblr.PlaceHolders.init({
                els: this.$("#post_date"),
                clear_on_submit: true
            });
            Tumblr.ShareOptions.destroy_all();
            this.sharing = new Tumblr.ShareOptions({
                el: this.el,
                base_view: this,
                editor_type: this.editor_type
            });
            if (this.model.get("post").type && (parseInt(this.model.get("post").state, 10) === 1 || parseInt(this.model.get("post").state, 10) === 2 || parseInt(this.model.get("post").state, 10) === 3 || this.model.get("post").state == "on.2")) {
                this.sharing.set_sharing(_.extend(this.$current_tumblelog.data(), {
                    facebookOn: this.model.get("post").send_to_fbog,
                    twitterOn: this.model.get("post").send_to_twitter
                }))
            } else {
                this.sharing.set_sharing(this.$current_tumblelog.data())
            }
            if (this.model.get("post").custom_tweet) {
                this.sharing.custom_tweet = true
            }
            this.publish_on_inplaceedit = new Tumblr.InplaceEdit(this.$publish_on);
            return this
        },
        _position_detached: function() {
            this.show_scrollverlay();
            this._vertical_center_box(this.body_scrollverlay.instance, this.$el, true);
            var c = _.bind(this._position_detached_resize, this);
            this.scrollverlay_resize = _.bind(function(d) {
                this.model.trigger("scrollverlay:resize", d)
            }, this);
            b(window).on("resize." + this.cid, this.scrollverlay_resize);
            Tumblr.Editor.on("tinymce.autoresize", this.scrollverlay_resize, this);
            Tumblr.Editor.on("tinymce.resize", this.scrollverlay_resize, this);
            this.model.on("scrollverlay:resize", this._position_detached_resize, this)
        },
        _vertical_center_box: function(e, f, c) {
            if (c) {
                b(e).empty()
            }
            var d = b("<div/>").addClass("v_center_outer").appendTo(e);
            var g = b("<div/>").addClass("v_center_inner").appendTo(d);
            b(f).addClass("v_center_el").appendTo(g)
        },
        _position_detached_resize: function(d) {
            d || (d = {});
            if (!this.body_scrollverlay) {
                return 
            }
            var c = b(this.body_scrollverlay.instance);
            var f = this.$el.outerHeight(true) - c.height();
            if (f > 0) {
                if (d.type === "tinymce.resize") {
                    c.scrollTop(f)
                } else {
                    if (d.type === "lighttable.open") {
                        setTimeout(_.bind(function() {
                            var e = this.$el.outerHeight(true) - c.height();
                            c.scrollTop(e)
                        }, this), 600)
                    } else {
                        if (c.scrollTop() < 40) {
                            c.scrollTop(Math.min(0.5 * f, 40))
                        }
                    }
                }
            }
        },
        remove_blog: function(e) {
            var c = this.$("#tumblelog_select .option").filter("[data-option-value=" + e + "]");
            c.parent("li").remove();
            var d = this.$("#tumblelog_select .option").first().data("option-value");
            if (!this.options.current_tumblelog) {
                this.options.current_tumblelog = d
            }
        },
        validate: function(c, d) {
            if (c) {
                this.autosave()
            }
            this.validate_question();
            if (this.post_type !== "photo") {
                if (!this.model.validate(this.serialize(this.$post_form))) {
                    this.enable_submit()
                } else {
                    this.disable_submit()
                }
            }
            if (d) {
                this.empty = false;
                this.model.trigger("change:form_change")
            }
        },
        validate_question: function() {
            if (this.post_type !== "quote" && this.post_type !== "conversation") {
                if (this.ends_with_question()) {
                    this.$additional_options_panel.slideDown(250)
                } else {
                    this.$additional_options_panel.slideUp(250);
                    this.$allow_answers.prop("checked", false)
                }
            }
        },
        change: function(c) {
            return this.validate((this.draft && this.options.autosave), true)
        },
        is_open: function() {
            return (this.active && this.$parent_el.hasClass("editing"))
        },
        before_unload: function() {
            if (this.is_open()) {
                return __("You have an unsaved post.")
            }
        },
        enable_submit: function() {
            if (!this.is_ie9) {
                this.$submit_btn.prop("disabled", false)
            } else {
                this.$submit_btn.prop("disabled", false).removeClass("ui_disabled")
            }
            this.$preview_btn.removeClass("ui_disabled");
            this.$preview.removeClass("disabled")
        },
        disable_submit: function() {
            if (!this.is_ie9) {
                this.$submit_btn.prop("disabled", true)
            } else {
                this.$submit_btn.prop("disabled", false).addClass("ui_disabled")
            }
            this.$preview_btn.addClass("ui_disabled");
            this.$preview.addClass("disabled")
        },
        submit: function(d) {
            if (this.$post_form.find('[name="preview_post"]').val()) {
                return 
            }
            if (d) {
                d.preventDefault()
            }
            if (this.$submit_btn.hasClass("ui_disabled")) {
                d.stopPropagation();
                return false
            }
            this.active = false;
            this.disable_submit();
            if (this.draft && this.init) {
                this.$post_state.val("0");
                this.init = false
            }
            if (this.sharing) {
                if (!this.sharing.custom_tweet) {
                    this.sharing.$custom_tweet.remove()
                }
            }
            var c = this.serialize(this.$post_form);
            this.delay_loader = setTimeout(_.bind(function() {
                this.show_loader()
            }, this), 150);
            this.model.on("invalid", function(e, f) {
                clearTimeout(this.delay_loader);
                this.hide_loader();
                this.display_errors(f);
                this.enable_submit()
            }, this);
            this.model.save(c, {
                success: this.postHelpers.postSaveSuccess,
                error: this.postHelpers.postSaveError
            })
        },
        autosave: function() {
            var c = this.serialize(this.$post_form);
            this.model.save(c, {
                success: _.bind(function(d) {
                    this.model.set({
                        post_id: d.attributes.post.id
                    }, {
                        silent: true
                    })
                }, this),
                error: _.bind(function(d, e) {}, this)
            })
        },
        blur_advanced_options: function(c) {
            Tumblr.MultiPopover.hideAll()
        },
        handle_keydown: function(c) {
            if (c.keyCode === 27) {
                if (this.active) {
                    if (Tumblr.MultiPopover.visible()) {
                        c.preventDefault();
                        c.stopPropagation();
                        Tumblr.MultiPopover.hideAll()
                    } else {
                        this.hide_post_form(c)
                    }
                }
            }
            if (c.keyCode === 9) {
                if (!this.in_view(this.in_focus())) {
                    c.preventDefault();
                    this.$main_content.find('input[type="text"], textarea').first().focus()
                }
            }
            if (c.keyCode === 13 && (c.metaKey || c.ctrlKey)) {
                c.preventDefault();
                this.submit()
            }
        },
        in_focus: function() {
            return b(document.activeElement)
        },
        in_view: function(c) {
            return (this.$post_form.has(c).length) ? true : false
        },
        tinymce_esc: function(c) {
            if (!_.isUndefined(Tumblr.Mention) && (Tumblr.Mention.is_active === true)) {
                return 
            }
            Tumblr.Editor.off("keydown_esc", null, this);
            Tumblr.Editor.off("keydown_cmd_enter", null, this);
            this.hide_post_form(c)
        },
        show_messages: function(d, f) {
            var g = this.$("." + d);
            var c = g.get(0);
            if (!c) {
                return 
            }
            g.empty();
            if (typeof f === "string") {
                f = [f]
            }
            _.each(f, function(i) {
                var h = b("<li/>", {
                    text: i
                });
                g.append(h)
            });
            g.show();
            var e = new Tumblr.Fx(c, "opacity", {
                from: 0,
                to: 1,
                duration: 250
            })
        },
        hide_messages: function(c, d) {
            var e = this.$("." + c);
            if (!e.length) {
                return 
            }
            e.empty().hide()
        },
        display_errors: function(c) {
            this.show_messages("errors", c)
        },
        hide_errors: function() {
            this.hide_messages("errors")
        },
        show_info: function(c) {
            this.show_messages("info", c)
        },
        hide_info: function() {
            this.hide_messages("info")
        },
        advanced_options_update: function(f) {
            if (f && f.keyCode === 13) {
                f.preventDefault();
                Tumblr.MultiPopover.hideAll()
            }
            var d = 0;
            var c = b(".advanced_post_options input:not([disabled])");
            var g = b(".cog .badge");
            b.each(c, function() {
                var e = b(this);
                if (e.val() !== "" && (e.val() !== e.data("original-value"))) {
                    if (e.is(":checkbox")) {
                        if (!e.prop("checked")) {
                            return 
                        }
                    }
                    ++d
                }
            });
            if (d > 0) {
                g.attr("data-count", d);
                g.addClass("active").html("<span>" + d + "</span>")
            } else {
                g.removeClass("active").html("")
            }
        },
        serialize: function(e, f) {
            var d = {};
            var c = e.serializeArray();
            b.each(c, function() {
                if (d[this.name] !== undefined) {
                    if (!d[this.name].push) {
                        d[this.name] = [d[this.name]]
                    }
                    d[this.name].push(this.value || "")
                } else {
                    d[this.name] = this.value || ""
                }
            });
            return (f) ? JSON.stringify(d) : d
        },
        enable_keys: function() {
            b(document).on("keydown." + this.cid, _.bind(this.handle_keydown, this));
            Tumblr.Editor.on("tinymce.keydown_esc", this.tinymce_esc, this);
            Tumblr.Editor.on("tinymce.keydown_cmd_enter", this.submit, this)
        },
        show_post_form: function(c) {
            Tumblr.Events.trigger("keycommands:suspend");
            if (this.queue) {
                this.$parent_el.parent().addClass("editing")
            }
            this.active = true;
            this.$parent_el.addClass("editing");
            this.show_plexi();
            this.render_view();
            Tumblr.PostForms.hide_spinner();
            this._add_reblog_tree_tooltip();
            if (this.sharing) {
                this.sharing.set_type(c);
                this.sharing.change(null)
            }
            if (this.model.get("detached")) {
                this.model.trigger("post:form:animation:start");
                this.$post_form.show().addClass("active");
                setTimeout(_.bind(function() {
                    this.$el.addClass("active");
                    this.enable_keys();
                    if (this.scrollverlay_resize) {
                        this.scrollverlay_resize()
                    }
                    if (tinyMCE) {
                        if (this.rich_editor && this.rich_editor.plugins.autoresize) {
                            this.rich_editor.plugins.autoresize.autoresize_max_max_height = this.rich_editor.plugins.autoresize.autoresize_max_height;
                            this._tinymce_smart_max_height = _.bind(function() {
                                var d = this.rich_editor;
                                var e = b(window).height() - this.$el.height() + b(d.getContentAreaContainer()).height() - 150;
                                d.plugins.autoresize.autoresize_max_height = Math.max(d.plugins.autoresize.autoresize_min_height, Math.min(e, d.plugins.autoresize.autoresize_max_max_height))
                            }, this);
                            b(window).on("resize." + this.cid, this._tinymce_smart_max_height);
                            this._tinymce_smart_max_height()
                        }
                        tinymce.execCommand("mceAutoResize")
                    }
                }, this), 250)
            } else {
                this._fade_out_content(this.$previous_content, _.bind(function() {
                    this.$previous_content.addClass("hide");
                    this._animate_in_post_form(_.bind(this.enable_keys, this))
                }, this))
            }
            this.$("label.optional").each(function(e, f) {
                var d = b(f);
                var g = b("#" + d.attr("for"));
                if (g.val()&&!g.hasClass("placeholder")) {
                    g.removeClass("optional");
                    d.hide()
                }
            });
            this.model.trigger("post:form:show");
            Tumblr.Events.trigger("post:form:show")
        },
        hide_post_form: function(f, g) {
            if (f) {
                f.preventDefault();
                if (!this.empty) {
                    var d = window.confirm(__("Cancel editing this post? All changes will be lost."));
                    if (d === false) {
                        return 
                    }
                }
            }
            if (Tumblr.PostForms.redirect_to) {
                window.location.assign(Tumblr.PostForms.redirect_to);
                return 
            }
            if (this.scroll_fence) {
                b(window).off("scroll", this.scroll_fence)
            }
            this._animate_out_post_form(_.bind(function() {
                setTimeout(_.bind(function() {
                    this.get_plexi().hide()
                }, this), 200);
                if (this.previous_content) {
                    this._fade_in_content(this.$previous_content, _.bind(c, this));
                    this.$previous_content.find(".iframe_reload_and_fade_in").each(function(e, h) {
                        b(h).one("load", function(i) {
                            b(this).removeClass("iframe_reload_and_fade_in").animate({
                                opacity: 1
                            })
                        }).attr("src", b(h).attr("src"))
                    })
                } else {
                    c.apply(this)
                }
            }, this));
            if (typeof g === "function") {
                _.delay(g, 450)
            }
            function c() {
                this.$body.removeClass("editing");
                this.$parent_el.removeClass("editing");
                this.reset();
                this.active = false;
                this.destroy(true);
                this.model.trigger("post:form:hide");
                _.isFunction(window.getSelection) && window.getSelection().removeAllRanges();
                Tumblr.Events.trigger("post:form:hide")
            }
            Tumblr.Events.trigger("keycommands:resume");
            if (this.queue) {
                this.$parent_el.parent().removeClass("editing")
            }
            if (window.history.replaceState) {
                if (!this.page_root) {
                    this.page_root = (b("body").data("page-root")) || ""
                }
                window.history.replaceState({}, "Tumblr", this.page_root)
            }
        },
        _animate_out_post_form: function(g) {
            var d = b.Deferred();
            var c = this.$el.outerHeight();
            this.$post_form.removeClass("active");
            this.$parent_el.removeClass("active");
            if (this.options.reblog_as) {
                this.model.set({
                    detached: true
                }, {
                    silent: true
                });
                this.setElement(".post_form_wrapper.detached")
            }
            this.set_blog_avatar(this.$avatar);
            this.set_avatar_link(this.$avatar);
            if (this.model.get("edit") && this.$parent_el.hasClass("same_user_as_last")) {
                this.$sub_avatar.removeClass("show_sub_avatar")
            }
            if (this.options.adjust_offset) {
                b("html, body").animate({
                    scrollTop: this.$parent_el.offset().top - 20
                }, 250)
            }
            var f = _.bind(function() {
                this.$previous_content.removeClass("hide");
                this.$el.hide();
                this.$el.css({
                    height: "auto"
                });
                if (this.$avatar.is(".flat")) {
                    this.$avatar.removeClass("use_blog_avatar animating");
                    this.$blog_avatar.remove();
                    this.$new_blog_avatar.remove()
                } else {
                    this.$avatar.css("background-image", "url(" + this.$avatar.data("avatarUrl") + ")");
                    this.$avatar.removeClass("use_blog_avatar animating").empty()
                }
                this.$sub_avatar.removeClass("use_sub_avatar");
                d.resolve();
                this.model.trigger("post:form:animation:hide");
                if (typeof g === "function") {
                    g.call(this)
                }
            }, this);
            if (this.model.get("detached")) {
                this.hide_scrollverlay();
                f();
                return d.promise()
            }
            var e = new Tumblr.Fx(this.el, "height", {
                from: c,
                to: this.initialHeight,
                delay: 200,
                duration: 350,
                easing: "easeInQuint",
                callback: f
            });
            return d.promise()
        },
        _animate_in_post_form: function(e) {
            this.model.trigger("post:form:animation:start");
            this.$post_form.show().removeClass("active");
            var c = (this.options.reblog_as) ? this.$el: this.$post_form;
            if (this.options.reblog_as) {
                c.css({
                    height: this.initialHeight + "px",
                    overflow: "hidden"
                });
                b(".post_form_wrapper div.dummy").remove();
                setTimeout(_.bind(function() {
                    d.apply(this)
                }, this), 200)
            } else {
                d.apply(this)
            }
            function d() {
                var f = this.$post_form.addClass("measure_styles").outerHeight();
                this.$post_form.removeClass("measure_styles");
                if (!this.options.reblog_as) {
                    c.css({
                        height: this.initialHeight + "px",
                        overflow: "hidden"
                    })
                }
                if (this.options.adjust_offset) {
                    b("html, body").animate({
                        scrollTop: this.$parent_el.offset().top - 20
                    }, 250)
                }
                if (tinyMCE) {
                    if (this.rich_editor && this.rich_editor.plugins.autoresize) {
                        this.rich_editor.plugins.autoresize.autoresize_max_max_height = this.rich_editor.plugins.autoresize.autoresize_max_height;
                        this._tinymce_smart_max_height = _.bind(function() {
                            var h = this.rich_editor;
                            var i = b(window).height() - this.$el.height() + b(h.getContentAreaContainer()).height() - 150;
                            h.plugins.autoresize.autoresize_max_height = Math.max(h.plugins.autoresize.autoresize_min_height, Math.min(i, h.plugins.autoresize.autoresize_max_max_height))
                        }, this);
                        b(window).on("resize." + this.cid, this._tinymce_smart_max_height)
                    }
                    tinymce.execCommand("mceAutoResize")
                }
                this.$parent_el.addClass("editing");
                var g = new Tumblr.Fx(c.get(0), "height", {
                    from: this.initialHeight,
                    to: f,
                    duration: 350,
                    easing: (this.initialHeight < f) ? "easeOutBack": "easeInSine",
                    callback: _.bind(function() {
                        this.$previous_content.addClass("hide");
                        c.css({
                            height: "auto",
                            overflow: "visible"
                        });
                        this.$post_form.addClass("active");
                        this.$parent_el.addClass("active");
                        this.model.trigger("post:form:animation:done");
                        if (tinyMCE) {
                            if (this._tinymce_smart_max_height) {
                                this._tinymce_smart_max_height()
                            }
                            tinymce.execCommand("mceAutoResize")
                        }
                        if (typeof e === "function") {
                            e.call(this)
                        }
                    }, this)
                })
            }
        },
        _fade_in_content: function(d, f) {
            var e = d.get(0);
            if (e) {
                var c = new Tumblr.Fx(e, "opacity", {
                    from: 0,
                    to: 1,
                    delay: 15,
                    duration: 450,
                    easing: "linear",
                    cssTransition: true,
                    cssEasing: "ease",
                    callback: _.bind(function() {
                        if (typeof f === "function") {
                            f.call(this)
                        }
                    }, this)
                })
            }
        },
        _fade_out_content: function(c, f) {
            var e = c.get(0);
            if (e) {
                var d = new Tumblr.Fx(e, "opacity", {
                    from: 1,
                    to: 0,
                    duration: 350,
                    easing: "linear",
                    cssTransition: true,
                    cssEasing: "ease",
                    callback: _.bind(function() {
                        if (typeof f === "function") {
                            f.call(this)
                        }
                    }, this)
                })
            } else {
                if (typeof f === "function") {
                    f.call(this)
                }
            }
        },
        show_loader: function() {
            this.$loader.show();
            this.$("button.close").hide();
            setTimeout(_.bind(function() {
                this.$loader.addClass("active")
            }, this), 10);
            this.spinner.spin(this.$(".loader").get(0))
        },
        hide_loader: function() {
            this.$("button.close").show();
            this.$loader.removeClass("active");
            this.spinner.stop();
            this.$loader.hide()
        },
        show_tumblelog_choice: function(g) {
            g.preventDefault();
            var c = b(g.target);
            var d = b("#tumblelog_choices");
            var f = d.get(0);
            var h = b(".nipple", d);
            this.adjust_nipple(c, h);
            if (this.tumblelog_popover) {
                this.tumblelog_popover.show()
            } else {
                this.tumblelog_popover = new Tumblr.MultiPopover(f, {
                    token: "post-plexi",
                    direction: "north",
                    on_show: b.proxy(this.on_show_popover, this),
                    on_hide: b.proxy(this.on_hide_popover, this)
                }).show()
            }
        },
        show_reblog_types: function(g) {
            g.preventDefault();
            var c = b(g.target);
            var d = b("#reblog_select");
            var f = d.get(0);
            if (this.reblog_popover) {
                this.reblog_popover.show()
            } else {
                this.reblog_popover = new Tumblr.MultiPopover(f, {
                    token: "post-plexi",
                    direction: "north",
                    on_show: b.proxy(this.on_show_popover, this),
                    on_hide: b.proxy(this.on_hide_popover, this)
                }).show()
            }
        },
        adjust_nipple: function(d, e) {
            var c = d;
            var g = e;
            var f = c.outerWidth();
            g.css({
                left: f + 11 + "px"
            })
        },
        show_advanced_options: function(c) {
            this.$advanced_post_options = this.$(".advanced_post_options");
            if (this.advanced_popover) {
                this.advanced_popover.show()
            } else {
                this.advanced_popover = new Tumblr.MultiPopover(this.$advanced_post_options.get(0), {
                    token: "post-plexi",
                    direction: "north",
                    on_show: b.proxy(this.on_show_popover, this),
                    on_hide: b.proxy(function() {
                        this.$advanced_post_options.removeClass("active");
                        this.on_hide_popover.apply(this, arguments)
                    }, this)
                }).show()
            }
        },
        toggle_remove_reblog_tree: function(f) {
            var d = b(f.currentTarget);
            var c = d.closest(".control_reblog_tree");
            if (this.model.has("remove_reblog_tree") && (this.model.get("remove_reblog_tree") === true)) {
                this.model.set("remove_reblog_tree", false);
                c.removeClass("removed")
            } else {
                this.model.set("remove_reblog_tree", true);
                c.addClass("removed")
            }
            this.change()
        },
        show_post_options: function(d) {
            var c = b(d.currentTarget);
            this.$popover = this.$("#post_options");
            this.$post_button = c.parents(".split");
            this.$popover.addClass("active");
            this.$post_button.addClass("active");
            this.post_options = new Tumblr.MultiPopover(this.$popover.get(0), {
                token: "post-plexi",
                direction: "auto",
                on_show: b.proxy(this.on_show_popover, this),
                on_hide: b.proxy(function() {
                    this.hide_post_options.apply(this, arguments);
                    this.on_hide_popover.apply(this, arguments)
                }, this)
            }).show()
        },
        hide_post_options: function(d) {
            var c = this.$("#post_options .option.selected").data("option-value");
            if (c === "on.2") {
                if (this.$publish_on.val() === "") {
                    this.set_post_option(this.$("#post_options .queue .option"))
                }
            } else {
                this.$publish_on.val("")
            }
            this.$post_button.removeClass("active");
            this.$popover.removeClass("active")
        },
        allow_answers: function() {
            if (!this.$allow_answers.prop("checked")) {
                this.model.unset("allow_answers")
            }
        },
        tumblelog_menu_nipple: function(d) {
            var c = this.$("#tumblelog_choices .nipple");
            if (d.type === "mouseover") {
                c.addClass("hover")
            } else {
                c.removeClass("hover")
            }
        },
        select_tumblelog: function(c) {
            c.preventDefault();
            return this.set_tumblelog(b(c.currentTarget))
        },
        set_tumblelog: function(d, g) {
            var c = this.$("#tumblelog_select .option");
            var f = this.$current_tumblelog = _.isObject(d) ? d: c.filter("[data-option-value=" + d + "]");
            var i = this.$("#channel_id");
            var h = f.attr("data-option-value");
            var e = this.$("#tumblelog_select .txt");
            this.sharing.set_sharing(f.data());
            c.removeClass("selected");
            f.addClass("selected");
            i.val(h);
            e.text(f.data("channel-name") || f.text());
            if (!g) {
                this.set_blog_avatar(f);
                this.set_avatar_link(f, "_new")
            }
            if (f.data("isPasswordProtected")) {
                this.$post_form.addClass("is_password_protected")
            } else {
                this.$post_form.removeClass("is_password_protected")
            }
            if (this.tumblelog_popover) {
                this.tumblelog_popover.hide()
            }
        },
        select_reblog_type: function(j) {
            j.preventDefault();
            var g = b(j.currentTarget);
            var h = g.hasClass("selected");
            if (!this.empty&&!h) {
                var f = window.confirm(__("Are you sure you want to change post type? All changes will be lost."));
                if (f === false) {
                    return 
                }
            }
            var c = this.$("#reblog_select .option");
            var i = g.data("option-value");
            var d = this.$("#reblog_as .reblog_select");
            d.attr("data-type", i);
            c.removeClass("selected");
            g.addClass("selected");
            this.reblog_popover.hide();
            if (!h) {
                this._fade_out_content(this.$post_form, _.bind(function() {
                    var l = b(".post_form_wrapper_inner");
                    var k = l.height();
                    l.empty().append(b('<div class="dummy"/>').height(k));
                    if (this.destroy_preview) {
                        this.destroy_preview()
                    }
                    var e = this.$current_tumblelog.attr("data-option-value");
                    Tumblr.PostForms.change_reblog_type(i, this.page_root, l, k, e)
                }, this))
            }
        },
        set_blog_avatar: function(f, c) {
            f = f || this.$current_tumblelog;
            var e = f.data("useSubAvatar");
            var g = this._get_background(this.$new_blog_avatar);
            var d = f.data("avatarUrl");
            if (!c && g != d) {
                this.$avatar.addClass("instant").removeClass("animating")
            } else {
                this.$avatar.addClass("instant").addClass("animating")
            }
            this.$blog_avatar.css("background-image", this.$new_blog_avatar.css("background-image"));
            this.$new_blog_avatar.css("background-image", this._url_css_wrap(d));
            if (!c && g != d) {
                this.$avatar.removeClass("instant").addClass("animating")
            } else {
                this.$avatar.removeClass("instant")
            }
            if (c) {
                this.$sub_avatar.addClass("instant")
            } else {
                this.$sub_avatar.removeClass("instant")
            }
            if (e) {
                this.$sub_avatar.addClass("show_sub_avatar")
            } else {
                this.$sub_avatar.removeClass("show_sub_avatar")
            }
        },
        set_avatar_link: function(d, e) {
            if (!this.$avatar.is("a")) {
                return 
            }
            d = d || this.$current_tumblelog;
            var c = typeof d === "string" ? d: d.data("blogUrl");
            this.$avatar.attr({
                href: c,
                target: e || ""
            })
        },
        _get_background: function(d) {
            var c = d.css("background-image");
            return c.replace("url(", "").replace(")", "").replace(/\"/gi, "")
        },
        _url_css_wrap: function(c) {
            if (!c) {
                return "none"
            }
            return "url('" + encodeURI(c) + "')"
        },
        select_post_option: function(c) {
            return this.set_post_option(c.currentTarget)
        },
        set_post_option: function(f) {
            var c = this.$("#post_options .option");
            var g = _.isObject(f) ? b(f): c.filter('[data-option-value~="' + f + '"]');
            var i = this.$("#post_state");
            var h = g.attr("data-option-value");
            var d = g.data("button-text");
            var e = this.$("#create_post .txt");
            if (h === undefined) {
                return 
            }
            c.removeClass("selected");
            g.addClass("selected");
            i.val(h);
            this.init = false;
            if (h != "1") {
                this.draft = false
            } else {
                this.draft = true
            }
            if (h !== "on.2") {
                this.hide_publish_on();
                if (this.post_options) {
                    this.post_options.hide()
                }
                setTimeout(function() {
                    e.text(d)
                }, 100)
            } else {
                e.text(d)
            }
            if (this.sharing) {
                if (h === "private") {
                    this.sharing.clear_all()
                } else {
                    this.sharing.set_sharing(this.$current_tumblelog.data())
                }
            }
            this.advanced_options_update(null)
        },
        preview_on_blog: function(f) {
            if (this.$preview.hasClass("disabled")) {
                return false
            }
            this.$post_form.attr({
                method: "post",
                target: "_blank",
                action: this.$current_tumblelog.data("blogUrl") + this.preview_endpoint
            });
            var d = {};
            d.form_key = Tumblr.PostForms.form_key;
            d.preview_post = true;
            if (this.post) {
                d.edit_post_id = this.post.id
            }
            var c = b();
            b.each(d, function(e, g) {
                c = b("<input/>").attr({
                    name: e,
                    value: g,
                    type: "hidden"
                }).add(c)
            });
            c.appendTo(this.$post_form);
            this.$post_form.submit();
            this.$post_form.attr({
                method: "",
                target: "",
                action: ""
            });
            c.remove();
            Tumblr.MultiPopover.hideAll()
        },
        show_plexi: function() {
            if (Tumblr.Plexi.findByToken("body-plexi")) {
                this.body_plexi = Tumblr.Plexi.findByToken("body-plexi")
            }
            if (!this.body_plexi) {
                this.body_plexi = new Tumblr.Plexi({
                    token: "body-plexi"
                });
                this.body_plexi.create(document.body, {
                    insertAt: "top",
                    cssClass: "color"
                })
            }
            this.body_plexi.show()
        },
        get_plexi: function() {
            return Tumblr.Plexi.findByToken("body-plexi")
        },
        show_scrollverlay: function() {
            if (Tumblr.Plexi.findByToken("body-scrollverlay")) {
                this.body_scrollverlay = Tumblr.Plexi.findByToken("body-scrollverlay")
            }
            if (!this.body_scrollverlay) {
                this.body_scrollverlay = new Tumblr.Plexi({
                    token: "body-scrollverlay"
                });
                this.body_scrollverlay.create(document.body, {
                    insertAt: "top",
                    cssClass: "scrollverlay"
                })
            }
            this.body_scrollverlay.show();
            b("body").addClass("scrollverlay_active")
        },
        hide_scrollverlay: function() {
            if (Tumblr.Plexi.findByToken("body-scrollverlay")) {
                Tumblr.Plexi.findByToken("body-scrollverlay").hide();
                b(window).off("resize." + this.cid);
                Tumblr.Editor.off("autoresize", null, this);
                Tumblr.Editor.off("resize", null, this)
            }
            b("body").removeClass("scrollverlay_active")
        },
        scrollverlay_content_width: function() {
            if (!this.body_scrollverlay) {
                return 0
            }
            return b(this.body_scrollverlay.instance).children().outerWidth() || 0
        },
        scrollverlay_content_height: function() {
            if (!this.body_scrollverlay) {
                return 0
            }
            return b(this.body_scrollverlay.instance).children().outerHeight() || 0
        },
        relay_scroll_events: function(h, g, e) {
            var d = b(h);
            var f = b(g);
            var c = function(i) {
                f.scrollTop(d.scrollTop());
                f.scrollLeft(d.scrollLeft())
            };
            d.on("scroll." + this.cid, c).data("scrollrelay", c);
            if (e) {
                d.scrollTop(f.scrollTop());
                d.scrollLeft(f.scrollLeft())
            }
        },
        disable_relay_scroll_events: function(f, e) {
            var d = b(f);
            var c = d.data("scrollrelay");
            d.off("scroll", c)
        },
        on_show_popover: function(d) {
            if (this.body_scrollverlay) {
                var e = d.$popover.height() + d.$popover.position().top + d.$container.position().top - this.$el.height() + 10;
                var c = parseInt(this.$el.css("border-top-width"), 10);
                if (e > c) {
                    this.$el.css("border-bottom-width", e)
                }
                this.plexi_stretcher = b("<div/>").css({
                    width: this.scrollverlay_content_width(),
                    height: this.scrollverlay_content_height()
                });
                b(d.plexi.instance).addClass("scrollverlay layered").empty().append(this.plexi_stretcher);
                this.relay_scroll_events(d.plexi.instance, this.body_scrollverlay.instance, true)
            }
        },
        on_hide_popover: function(d) {
            if (this.body_scrollverlay) {
                var c = parseInt(this.$el.css("border-top-width"), 10);
                this.$el.css("border-bottom-width", c);
                b(d.plexi.instance).removeClass("scrollverlay layered").empty();
                delete this.plexi_stretcher;
                this.disable_relay_scroll_events(d.plexi.instance, this.body_scrollverlay.instance)
            }
        },
        hide_publish_on: function() {
            if (!this.$inline_edit ||!this.$inline_edit.hasClass("set")) {
                return 
            }
            this.$inline_edit.removeClass("set");
            var c = this.$inline_edit_wrapper.get(0);
            this.$inline_edit_wrapper.removeClass("editing");
            var d = new Tumblr.Fx(c, "margin-top", {
                from: 0,
                to: this.inline_edit_original,
                duration: 100,
                cssTransition: true,
                cssEasing: "ease"
            })
        },
        show_publish_on: function(f) {
            this.$inline_edit = b(f.currentTarget);
            if (this.$inline_edit.hasClass("set")) {
                return 
            }
            this.$inline_edit.addClass("set");
            this.$inline_edit_wrapper = b(".inline_edit", this.$inline_edit);
            var c = this.$inline_edit_wrapper.get(0);
            this.$inline_edit_wrapper.addClass("editing");
            this.inline_edit_original = parseInt(this.$inline_edit_wrapper.css("margin-top"), 10);
            if (this.$publish_on.val() === "") {
                this.$publish_on.val(this.$publish_on.data("original-value"))
            }
            var d = new Tumblr.Fx(c, "margin-top", {
                from: this.inline_edit_original,
                to: 0,
                duration: 250,
                cssTransition: true,
                cssEasing: "cubic-bezier(0.445, 0.050, 0.550, 0.950)"
            })
        },
        sluggify: function(d) {
            var c = b(d.currentTarget);
            var f = c.val().toLowerCase().replace(/[^\-a-z0-9]/g, "-").replace(/--+/g, "-").replace(/^-+|-+$/g, "");
            c.val(f)
        },
        source_url: function(f) {
            var d = b(f.currentTarget);
            var g = d.val();
            var c = this.model.undup_protocol(d.val());
            d.val(this.model.add_protocol(c))
        },
        ends_with_question: function() {
            if (b("#post_one").val() && this.ends_with(Tumblr.$.strip_tags(b("#post_one").val()).replace(/[^a-z0-9\?]/ig, ""), "?")) {
                return true
            }
            if (b("#post_two").val() && this.ends_with(Tumblr.$.strip_tags(b("#post_two").val()).replace(/[^a-z0-9\?]/ig, ""), "?")) {
                return true
            }
            if (b("#post_three").val() && this.ends_with(Tumblr.$.strip_tags(b("#post_three").val()).replace(/[^a-z0-9\?]/ig, ""), "?")) {
                return true
            }
            if (tinyMCE) {
                if (tinyMCE.get("post_one") && tinyMCE.get("post_one").getContent() && this.ends_with(Tumblr.$.strip_tags(tinyMCE.get("post_one").getContent()).replace(/[^a-z0-9\?]/ig, ""), "?")) {
                    return true
                }
                if (tinyMCE.get("post_two") && tinyMCE.get("post_two").getContent() && this.ends_with(Tumblr.$.strip_tags(tinyMCE.get("post_two").getContent()).replace(/[^a-z0-9\?]/ig, ""), "?")) {
                    return true
                }
                if (tinyMCE.get("post_three") && tinyMCE.get("post_three").getContent() && this.ends_with(Tumblr.$.strip_tags(tinyMCE.get("post_three").getContent()).replace(/[^a-z0-9\?]/ig, ""), "?")) {
                    return true
                }
            }
            return false
        },
        ends_with: function(d, c) {
            return d.indexOf(c, d.length - c.length)!==-1
        },
        _add_reblog_tree_tooltip: function() {
            if (this.reblog_toggle_tooltip) {
                this.reblog_toggle_tooltip.remove()
            }
            if (b(".btn_toggle_reblogs", this.$el).length > 0) {
                this.reblog_toggle_tooltip = new Tumblr.Prima.ToolTip({
                    selector: ".btn_toggle_reblogs",
                    class_name: "reblogs_tooltip",
                    placement: "right"
                })
            }
        }
    })
})(jQuery, Tumblr);
/*! scripts/posting/view/regular_view.js */
(function(b, a) {
    Tumblr.PostForms.Regular = Tumblr.PostForms.BaseView.extend({
        events: function() {
            return _.defaults({
                "click .editor_button.photo": "__image_upload",
                "click .file_upload_overlay .cancel": "dismiss_file_upload_overlay"
            }, Tumblr.PostForms.BaseView.prototype.events)
        },
        initialize: function(c) {
            this.options = c || {};
            this.constructor.__super__.initialize.call(this, this.options);
            this.$sub_template = b.trim(b("#regular_subtemplate").html());
            this.$upload_list_template = b.trim(b("#upload_list_subtemplate").html());
            this.$reblog_tree_toggle_subtemplate = b.trim(b("#reblog_tree_toggle_subtemplate").html());
            this.model.on("change:upload_progress", this.upload_progress, this);
            this.model.on("change:upload_complete", this.upload_complete, this);
            this.model.on("change:upload_file_error", this.file_errors, this);
            this.model.on("change:upload_failed", this.upload_failed, this);
            this.model.on("change:send_file", this.display_file_list, this);
            this.$post_form.on("click", "#file_list .cancel", _.bind(this.dismiss_upload, this))
        },
        render_view: function(e) {
            var d = _.template(this.$sub_template);
            this.$post_content_type.html(d(_.extend(_.clone(this.template_helpers), this.model.toJSON())));
            this.editor();
            this.$regular_image_upload = b("#regular_image_upload");
            this.$file_upload_overlay = this.$(".file_upload_overlay");
            this.post_form = this.$post_form;
            this.$shim = b(".textarea_shim");
            this.last_enter = this.post_form.get(0);
            this.model.init_uploader(this.$regular_image_upload);
            this.post_form_events = {
                dragenter: _.bind(this.__drag_enter, this),
                dragleave: _.bind(this.__drag_leave, this),
                dragover: _.bind(this.__drag_over, this),
                drop: _.bind(this.__drop, this)
            };
            Tumblr.PlaceHolders.init({
                els: this.$("#post_one"),
                clear_on_submit: true
            });
            this.post = this.model.get("post");
            if (!_.isUndefined(this.post.reblog_tree)) {
                var c = _.template(this.$reblog_tree_toggle_subtemplate);
                this.$main_content.before(c({
                    post: this.post
                }))
            }
            if (tinymce && this.editor_type === "rich") {
                Tumblr.Editor.on("tinymce.image_upload.click", this.__image_upload, this);
                b.each(this.post_form_events, b.proxy(function(f, g) {
                    this.post_form.on(f + "." + this.cid, g)
                }, this))
            } else {
                this.$("#post_two").autoexpand().resizeanchor()
            }
            if (typeof e === "function") {
                e()
            }
            return this
        },
        __drag_enter: function(c) {
            c.preventDefault();
            this.$shim.addClass("active");
            this.last_enter = c.target
        },
        __drag_leave: function(c) {
            c.preventDefault();
            if (c.target === this.last_enter ||!this.last_enter) {
                this.$shim.removeClass("active")
            }
        },
        __drop: function(c) {
            this.$shim.removeClass("active")
        },
        __drag_over: function(c) {
            c.preventDefault();
            c.stopPropagation()
        },
        __image_upload: function(c) {
            if (c) {
                c.preventDefault()
            }
            if (this.is_ie9) {
                this.$file_upload_overlay.addClass("active").removeClass("offscreen")
            } else {
                b("#regular_image_upload").trigger("click")
            }
        },
        file_errors: function(c) {
            this.display_errors(c)
        },
        upload_complete: function(e) {
            var g = e.response[0].url;
            var c = this.editor_type;
            var f = this.editor_id;
            if ((c === "rich" || c === "tinymce") && tinyMCE && (ed = tinyMCE.get("post_two"))) {
                var d = new Image();
                b(d).one("load", _.bind(function(h) {
                    b(d).off();
                    ed.execCommand("mceInsertContent", false, '<img src="' + g + '" />');
                    ed.execCommand("mceInsertContent", false, "<p>");
                    setTimeout(function() {
                        ed.execCommand("mceAutoResize")
                    }, 100);
                    this.destroy_upload()
                }, this)).one("error", function(h) {
                    b(d).off()
                });
                d.src = g
            } else {
                if (c === "markdown") {
                    Tumblr.Editor.insertTag(f, "![](" + g + ")");
                    this.destroy_upload()
                } else {
                    Tumblr.Editor.insertTag(f, '<img src="' + g + '">');
                    this.destroy_upload()
                }
            }
        },
        upload_failed: function(c) {
            setTimeout(_.bind(function() {
                this.destroy_upload();
                this.display_errors({
                    error: c
                })
            }, this), 1000)
        },
        dismiss_upload: function(c) {
            if (c) {
                c.preventDefault()
            }
            this.model.cancel_upload();
            this.destroy_upload()
        },
        dismiss_file_upload_overlay: function(c) {
            if (c) {
                c.preventDefault()
            }
            this.$file_upload_overlay.addClass("offscreen").removeClass("active")
        },
        destroy_upload: function() {
            b(".upload_container").remove()
        },
        display_file_list: function(f, c) {
            this.dismiss_file_upload_overlay();
            this.hide_errors();
            var d = {
                name: f[0].name,
                prettySize: Tumblr.$.format_file_size(f[0].size),
                className: c
            };
            var e = _.template(this.$upload_list_template);
            this.$main_content.after(e(_.extend(_.clone(this.template_helpers), d)));
            b(".upload_container").addClass("bottom");
            this.$progress_bar = b(".upload_container .progress_bar");
            this.$processing = b(".upload_container .processing")
        },
        upload_progress: function(c) {
            this.$progress_bar.css({
                width: c + "%"
            });
            if (c > 99) {
                this.$processing.addClass("active")
            }
        },
        editor: function() {
            var c = b.extend({}, Tumblr.PostForms.editor_defaults, {
                layout: "bold,italic,strikethrough,link,unlink,numlist,bullist,pagebreak,image,image_upload,blockquote,code",
                plugins: "autoresize,safari,pagebreak,ajax_forms,image_upload,tumblr_popovers,mention,paste",
                focus: (this.model.get("edit") || this.model.get("reblog")) ? "focus_end": true,
                type: this.editor_type
            });
            Tumblr.Editor.render(this.editor_id, c)
        }
    })
})(jQuery, Tumblr);
/*! scripts/posting/view/note_view.js */
(function(b, a) {
    Tumblr.PostForms.Note = Tumblr.PostForms.BaseView.extend({
        events: function() {
            return _.defaults({
                "click .editor_button.photo": "__image_upload",
                "click .file_upload_overlay .cancel": "dismiss_file_upload_overlay"
            }, Tumblr.PostForms.BaseView.prototype.events)
        },
        initialize: function(c) {
            this.options = c || {};
            this.post = this.model.get("post");
            this.editor_id = this.post.is_reblog ? "post_three" : "post_two";
            this.constructor.__super__.initialize.call(this, this.options);
            this.$original_sub_template = b.trim(b("#note_original_subtemplate").html());
            this.$reblog_sub_template = b.trim(b("#note_reblog_subtemplate").html());
            this.$upload_list_template = b.trim(b("#upload_list_subtemplate").html());
            this.$reblog_tree_toggle_subtemplate = b.trim(b("#reblog_tree_toggle_subtemplate").html());
            this.model.on("change:upload_progress", this.upload_progress, this);
            this.model.on("change:upload_complete", this.upload_complete, this);
            this.model.on("change:upload_file_error", this.file_errors, this);
            this.model.on("change:upload_failed", this.upload_failed, this);
            this.model.on("change:send_file", this.display_file_list, this);
            this.$post_form.on("click", "#file_list .cancel", _.bind(this.dismiss_upload, this))
        },
        render_view: function(e) {
            if (this.post.is_reblog) {
                var d = _.template(this.$reblog_sub_template)
            } else {
                var d = _.template(this.$original_sub_template)
            }
            this.$post_content_type.html(d(_.extend(_.clone(this.template_helpers), this.model.toJSON())));
            if (!_.isUndefined(this.post.reblog_tree)) {
                var c = _.template(this.$reblog_tree_toggle_subtemplate);
                this.$main_content.find(".inner_content").before(c({
                    post: this.post
                }))
            }
            this.editor();
            this.$regular_image_upload = b("#regular_image_upload");
            this.$file_upload_overlay = this.$(".file_upload_overlay");
            this.post_form = this.$post_form;
            this.$shim = b(".textarea_shim");
            this.last_enter = this.post_form.get(0);
            this.model.init_uploader(this.$regular_image_upload);
            this.post_form_events = {
                dragenter: _.bind(this.__drag_enter, this),
                dragleave: _.bind(this.__drag_leave, this),
                dragover: _.bind(this.__drag_over, this),
                drop: _.bind(this.__drop, this)
            };
            Tumblr.PlaceHolders.init({
                els: this.$("#post_one"),
                clear_on_submit: true
            });
            if (tinymce && this.editor_type === "rich") {
                Tumblr.Editor.on("tinymce.image_upload.click", this.__image_upload, this);
                b.each(this.post_form_events, b.proxy(function(f, g) {
                    this.post_form.on(f + "." + this.cid, g)
                }, this))
            } else {
                this.$("#" + this.editor_id).autoexpand().resizeanchor()
            }
            if (typeof e === "function") {
                e()
            }
            if (this.post.is_reblog && b("#note_reblog_post_two")) {
                b("#note_reblog_post_two").html(this.post.safe_two)
            }
            return this
        },
        __drag_enter: function(c) {
            c.preventDefault();
            this.$shim.addClass("active");
            this.last_enter = c.target
        },
        __drag_leave: function(c) {
            c.preventDefault();
            if (c.target === this.last_enter ||!this.last_enter) {
                this.$shim.removeClass("active")
            }
        },
        __drop: function(c) {
            this.$shim.removeClass("active")
        },
        __drag_over: function(c) {
            c.preventDefault();
            c.stopPropagation()
        },
        __image_upload: function(c) {
            if (c) {
                c.preventDefault()
            }
            if (this.is_ie9) {
                this.$file_upload_overlay.addClass("active").removeClass("offscreen")
            } else {
                b("#regular_image_upload").trigger("click")
            }
        },
        file_errors: function(c) {
            this.display_errors(c)
        },
        upload_complete: function(e) {
            var g = e.response[0].url;
            var c = this.editor_type;
            var f = this.editor_id;
            if ((c === "rich" || c === "tinymce") && tinyMCE && (ed = tinyMCE.get(f))) {
                var d = new Image();
                b(d).on("load", _.bind(function(h) {
                    ed.execCommand("mceInsertContent", false, '<img src="' + g + '" />');
                    ed.execCommand("mceInsertContent", false, "<p>");
                    setTimeout(function() {
                        ed.execCommand("mceAutoResize")
                    }, 100);
                    this.destroy_upload()
                }, this));
                d.src = g
            } else {
                if (c === "markdown") {
                    Tumblr.Editor.insertTag(f, "![](" + g + ")");
                    this.destroy_upload()
                } else {
                    Tumblr.Editor.insertTag(f, '<img src="' + g + '">');
                    this.destroy_upload()
                }
            }
        },
        upload_failed: function(c) {
            setTimeout(_.bind(function() {
                this.destroy_upload();
                this.display_errors({
                    error: c
                })
            }, this), 1000)
        },
        dismiss_upload: function(c) {
            if (c) {
                c.preventDefault()
            }
            this.model.cancel_upload();
            this.destroy_upload()
        },
        dismiss_file_upload_overlay: function(c) {
            if (c) {
                c.preventDefault()
            }
            this.$file_upload_overlay.addClass("offscreen").removeClass("active")
        },
        destroy_upload: function() {
            b(".upload_container").remove()
        },
        display_file_list: function(f, c) {
            this.dismiss_file_upload_overlay();
            this.hide_errors();
            var d = {
                name: f[0].name,
                prettySize: Tumblr.$.format_file_size(f[0].size),
                className: c
            };
            var e = _.template(this.$upload_list_template);
            this.$main_content.after(e(_.extend(_.clone(this.template_helpers), d)));
            b(".upload_container").addClass("bottom");
            this.$progress_bar = b(".upload_container .progress_bar");
            this.$processing = b(".upload_container .processing")
        },
        upload_progress: function(c) {
            this.$progress_bar.css({
                width: c + "%"
            });
            if (c > 99) {
                this.$processing.addClass("active")
            }
        },
        editor: function() {
            var c = b.extend({}, Tumblr.PostForms.editor_defaults, {
                layout: "bold,italic,strikethrough,link,unlink,numlist,bullist,pagebreak,image,image_upload,blockquote,code",
                plugins: "autoresize,safari,pagebreak,ajax_forms,image_upload,tumblr_popovers,mention",
                focus: (this.model.get("edit") || this.model.get("reblog")) ? "focus_end": true,
                type: this.editor_type
            });
            Tumblr.Editor.render(this.editor_id, c)
        }
    })
})(jQuery, Tumblr);
/*! scripts/posting/view/quote_view.js */
(function(b, a) {
    Tumblr.PostForms.Quote = Tumblr.PostForms.BaseView.extend({
        events: function() {
            return _.defaults({
                "click .label": "placeholder",
                "click .optional": "placeholder",
                "focus #post_two": "editor_focus"
            }, Tumblr.PostForms.BaseView.prototype.events)
        },
        render_view: function(f) {
            var d = b("#quote_subtemplate").html();
            var e = _.template(d);
            this.$post_content_type.html(e(_.extend(_.clone(this.template_helpers), this.model.toJSON())));
            this.editor();
            Tumblr.Editor.on("tinymce.focus", this.editor_focus, this);
            var c = this.$("#post_one");
            c.autoexpand().resizeanchor();
            Tumblr.PlaceHolders.init({
                els: c,
                clear_on_submit: true
            });
            if (this.editor_type !== "rich") {
                this.$("#post_two").autoexpand().resizeanchor()
            }
            if (typeof f === "function") {
                f()
            }
            return this
        },
        editor: function() {
            var c = b.extend({}, Tumblr.PostForms.editor_defaults, {
                type: this.editor_type,
                min_height: 70,
                focus: (this.model.get("edit") || this.model.get("reblog")) ? "focus_end": true
            });
            Tumblr.Editor.render(this.editor_id, c)
        },
        editor_focus: function(c) {
            this.placeholder(null, this.$(".inset_label .label"))
        },
        placeholder: function(d, c) {
            if (d) {
                d.preventDefault();
                c = b(d.currentTarget);
                if (c.is("label.optional")) {
                    c = c.prevAll(".label")
                }
                if (this.editor_type !== "rich") {
                    this.$("#post_two").focus()
                }
            }
            c.fadeOut(250);
            c.nextAll(".optional").fadeOut(250);
            if (tinyMCE && this.editor_type === "rich") {
                this.$("#post_two_ifr").animate({
                    "min-height": 100
                }, 200);
                tinymce.execCommand("mceFocus", false, c.data("for"))
            }
        }
    })
})(jQuery, Tumblr);
/*! scripts/posting/view/link_view.js */
(function(b, a) {
    Tumblr.PostForms.Link = Tumblr.PostForms.BaseView.extend({
        editor_id: "post_three",
        events: function() {
            return _.defaults({
                "click .label": "placeholder",
                'click .optional[for="post_three"]': "placeholder",
                "change #post_two": "change_url",
                "paste #post_two": "update_url",
                "keyup #post_two": "update_url",
                "keyup #post_one": "update_title",
                "focus #post_three": "editor_focus"
            }, Tumblr.PostForms.BaseView.prototype.events)
        },
        initialize: function(c) {
            this.options = c || {};
            this.constructor.__super__.initialize.call(this, this.options);
            this.$link_preview_template = b("#link_preview_subtemplate").html();
            this.$reblog_tree_toggle_subtemplate = b.trim(b("#reblog_tree_toggle_subtemplate").html())
        },
        render_view: function(g) {
            var c = b("#link_subtemplate").html();
            var e = _.template(c);
            this.$post_content_type.html(e(_.extend(_.clone(this.template_helpers), this.model.toJSON())));
            this.editor();
            if (Tumblr.use_link_opengraph) {
                var f = _.template(this.$link_preview_template);
                this.$main_content.before(f(_.extend(_.clone(this.template_helpers), this.model.toJSON())));
                this.cache_selectors_view();
                this.$post_form.on("mousedown", ".reset", _.bind(this.reset, this));
                this.$preview_thumbnail.on("load", _.bind(this.thumbnail_alignment, this));
                this.$post_form.on("click", ".link_thumbnail_container .cancel", _.bind(this.remove_thumbnail, this));
                if (this.model.get("reblog")) {
                    this.$preview_thumbnail_container.addClass("no_replace no_upload")
                }
                if (this.model.get("edit") || this.model.get("reblog")) {
                    this.update_preview(this.current_fields());
                    this.$post_form.find(".reset").remove()
                }
            } else {
                this.cache_selectors_view()
            }
            this.post = this.model.get("post");
            if (!_.isUndefined(this.post.reblog_tree)) {
                var d = _.template(this.$reblog_tree_toggle_subtemplate);
                this.$main_content.before(d({
                    post: this.post
                }))
            }
            Tumblr.PlaceHolders.init({
                els: b("#post_one, #post_two"),
                clear_on_submit: true
            });
            if (this.editor_type !== "rich") {
                this.$("#post_three").autoexpand().resizeanchor()
            }
            Tumblr.Editor.on("tinymce.focus", this.editor_focus, this);
            if (typeof g === "function") {
                g()
            }
            return this
        },
        cache_selectors_view: function() {
            this.$preview_container = this.$(".link_button_container");
            this.$preview = this.$(".link_button");
            this.$preview_thumbnail_container = this.$preview.children(".link_thumbnail_container");
            this.$preview_thumbnail = this.$preview.find(".link_thumbnail");
            this.$preview_thumbnail_upload = this.$preview.find(".upload_thumbnail");
            this.$preview_text_container = this.$preview.children(".link_text_container");
            this.$preview_text = this.$preview.find(".link_text");
            this.$preview_title = this.$preview.find(".link_title");
            this.$preview_source = this.$preview.find(".link_source");
            this.$post_one = this.$("#post_one");
            this.$post_two = this.$("#post_two");
            this.$post_three = this.$("#post_three");
            this.$post_source_url = this.$("#post_source_url");
            this.$remove_thumbnail = this.$('input[name="remove_thumbnail"]');
            this.$thumbnail_pre_upload = this.$('input[name="thumbnail_pre_upload"]');
            this.$upload_thumbnail = this.$('input[name="thumbnail"]')
        },
        change_url: function(g) {
            var c = "";
            var d = b(g.currentTarget);
            var f = b.trim(d.val());
            if (f) {
                if (f.match(/^magnet:/i)) {
                    c = f
                } else {
                    c = this.model.undup_protocol(this.model.add_protocol(f))
                }
            }
            d.val(c);
            if (!Tumblr.use_link_opengraph) {
                return 
            }
            this.update_url(g, 100)
        },
        update_url: function(d, c) {
            if (Tumblr.use_link_opengraph) {
                if (this.$post_two.val()) {
                    this.$post_form.addClass("can_reset")
                } else {
                    this.$post_form.removeClass("can_reset")
                }
            }
            if (!Tumblr.use_link_opengraph) {
                return 
            }
            if (this.model.get("reblog")) {
                return 
            }
            if (this.model.get("edit") && d && d.type === "keyup") {
                return 
            }
            if (this.$post_two.val() === this.previous_url) {
                return 
            } else {
                this.previous_url = this.$post_two.val()
            }
            clearTimeout(this.fetch_timeout);
            this.fetch_timeout = _.delay(_.bind(this.url_update_fetch, this), c || 450)
        },
        update_title: function(c) {
            if (!Tumblr.use_link_opengraph) {
                return 
            }
            if (this.model.get("reblog")) {
                return 
            }
            return this.update_preview({
                title: this.$post_one.val()
            })
        },
        url_update_fetch: function() {
            clearTimeout(this.fetch_timeout);
            var c = this.$post_two.val();
            if (c && this.model.allowed_protocol(c)) {
                this.$post_form.addClass("show_preview");
                this.$preview_container.addClass("loading");
                this.model.fetch_og_meta(c, _.bind(this.use_og_meta, this), _.bind(this.use_og_meta, this))
            } else {
                if (!b.trim(c)) {
                    this.$post_form.removeClass("show_preview");
                    this.$preview_container.removeClass("loading");
                    var d = this.compare_fields(this.current_fields(), b.extend({
                        title: "",
                        description: "",
                        caption: "",
                        source: "",
                        image: "",
                        url: ""
                    }, this.previous_og_meta));
                    if (!d.title) {
                        this.$post_one.val("")
                    }
                    if (!d.description) {
                        switch (this.editor_type) {
                        case"rich":
                            var e = b("#ace_source_editor");
                            if (e.length) {} else {
                                this.rich_editor.execCommand("mceSetContent", false, this.remove_og_blockquote(this.rich_editor.getContent()))
                            }
                            break;
                        default:
                        case"markdown":
                            this.$post_three.val(this.remove_og_blockquote(this.$post_three.val()));
                            break
                        }
                    }
                }
            }
        },
        use_og_meta: function(e, c) {
            if (e.error) {
                this.$post_form.removeClass("show_preview");
                this.$preview_container.removeClass("loading");
                return 
            }
            var f = {
                title: "",
                description: "",
                source: "",
                image: "",
                url: c
            };
            if (e && e.response) {
                f = b.extend(f, e.response)
            }
            if (!f.title&&!f.description) {
                f.description = f.url
            }
            this.$post_form.addClass("show_preview");
            this.$preview_container.removeClass("loading");
            var d = this.compare_fields(this.current_fields(), b.extend({
                title: "",
                description: "",
                source: "",
                image: "",
                url: ""
            }, this.previous_og_meta), true);
            if (!d.title) {
                this.$post_one.val(f.title)
            }
            if (!d.description ||!this.model.get("edit")) {
                this.add_blockquote_description(f.description, true)
            }
            if (!d.image || f.image) {
                this.$preview_thumbnail.attr("src", f.image);
                this.$upload_thumbnail.val(f.image);
                this.$thumbnail_pre_upload.val("1");
                this.$remove_thumbnail.val("")
            }
            this.update_preview(this.current_fields());
            this.previous_og_meta = f
        },
        current_fields: function() {
            var c = {
                title: this.$post_one.val(),
                caption: this.$post_three.val(),
                source: this.$post_source_url.val(),
                image: this.$upload_thumbnail.val(),
                url: this.$post_two.val()
            };
            if (this.editor_type === "rich" && this.rich_editor) {
                c.caption = this.rich_editor.getContent()
            }
            c.description = this.get_og_blockquote(c.caption);
            return c
        },
        compare_fields: function(d, c, f) {
            var e = {};
            b.each(d, function(g, h) {
                if (f&&!c[g]) {
                    e[g] = false
                }
                if (typeof c[g] === "undefined") {
                    e[g] = true
                }
                e[g] = d[g] !== c[g]
            });
            b.each(c, function(g, h) {
                if (typeof d[g] === "undefined") {
                    e[g] = true
                }
                e[g] = d[g] !== c[g];
                if (f&&!d[g]) {
                    e[g] = false
                }
            });
            return e
        },
        update_preview: function(c) {
            if (!c) {
                this.$post_form.removeClass("show_preview");
                return false
            }
            if (c.url) {
                this.$preview_container.find("a.link_title, a.link_source, a.link_thumbnail_click").attr("href", c.url)
            } else {
                c.url = this.$post_two.val()
            }
            if (c.url) {
                this.$post_form.addClass("show_preview")
            } else {
                this.$post_form.removeClass("show_preview");
                return false
            }
            if (c.title) {
                this.$preview_title.text(c.title);
                if (this.model.allowed_protocol(c.url)) {
                    this.$preview_source.text(c.url.replace(/([^\/]+:\/\/)?([^\/\?]+).*/i, "$2"))
                } else {
                    this.$preview_source.text(c.url)
                }
            } else {
                if (typeof c.title !== "undefined") {
                    this.$preview_title.text(c.url);
                    this.$preview_source.text("")
                }
            }
            if (this.$preview_title.text().length > 100 || this.$preview_text.height() > 110) {
                this.$preview.addClass("small")
            } else {
                this.$preview.removeClass("small")
            }
            if (c.image) {
                this.$preview_thumbnail.attr("src", c.image);
                this.$preview_thumbnail_container.addClass("has_image")
            } else {
                if (typeof c.image !== "undefined") {
                    this.$preview_thumbnail_container.removeClass("has_image")
                }
            }
            return true
        },
        add_blockquote_description: function(h, e) {
            var d = document.activeElement;
            var g = h ? '<blockquote class="link_og_blockquote">' + _.escape(h) + "</blockquote>": "";
            var j = this.$post_three.val() || "<p></p>";
            var c = this.get_og_blockquote(j);
            switch (this.editor_type) {
            case"rich":
                j = this.rich_editor.getContent() || "<p></p>";
                c = this.get_og_blockquote(j);
                if (!(e ||!b.trim(c) ||!b.trim(b(j).text()))) {
                    return false
                }
                var i = b("#ace_source_editor");
                if (i.length) {} else {
                    this.rich_editor.focus();
                    this.rich_editor.selection.select(this.rich_editor.getBody(), true);
                    this.rich_editor.selection.collapse(true);
                    this.rich_editor.execCommand("mceSetContent", false, g + this.remove_og_blockquote(j));
                    this.rich_editor.selection.select(this.rich_editor.getBody(), true);
                    this.rich_editor.selection.collapse(false);
                    this.rich_editor.execCommand("mceFocus", false, "")
                }
                break;
            default:
            case"markdown":
                if (!(e ||!b.trim(c) ||!b.trim(b(j).text()))) {
                    return false
                }
                this.$post_three.val(g + "\n" + this.remove_og_blockquote(j));
                var f = this.$post_three.val().match(/<\/p>\s*$/i) ? this.$post_three.val().lastIndexOf("</p>"): - 1;
                this.focus_cursor_position(this.$post_three, f);
                break
            }
            if (d && d !== this.$post_two.get(0)) {
                d.focus()
            }
            return true
        },
        focus_cursor_position: function(e, f) {
            var d = b(e);
            d.focus();
            if (typeof f === "undefined") {
                f =- 1
            }
            if (f < 0) {
                f = d.val().length + f + 1
            }
            e = d.get(0);
            if (e.setSelectionRange) {
                e.focus();
                e.setSelectionRange(f, f);
                return true
            } else {
                if (e.createRange) {
                    var c = e.createRange();
                    c.setStart("character", f);
                    c.setEnd("character", f);
                    c.select();
                    return true
                } else {
                    return false
                }
            }
        },
        get_og_blockquote: function(e) {
            var c = /(<blockquote class="link_og_blockquote"(?:\s[^>]*)?>((?:\n|.)*)<\/\s*blockquote\s*>)/i;
            var d = e.match(c);
            if (d && d.length) {
                return d[0].replace(c, "$2")
            } else {
                return ""
            }
        },
        remove_og_blockquote: function(d) {
            var c = /(<blockquote class="link_og_blockquote"(?:\s[^>]*)?>((?:\n|.)*)<\/\s*blockquote\s*>)/i;
            return d.replace(c, "")
        },
        thumbnail_alignment: function(j) {
            var i = this.$preview_thumbnail.get(0).naturalWidth;
            var d = this.$preview_thumbnail.get(0).naturalHeight;
            var h = i / d;
            var f = this.$preview_thumbnail_container.width();
            var c = this.$preview_thumbnail_container.height();
            var g = f / c;
            if (i / d < f / c) {
                c/=h
            } else {
                f*=h
            }
            this.$preview_thumbnail.css({
                width: f,
                height: c,
                "margin-left": 0.5 * (this.$preview_thumbnail_container.width() - f),
                "margin-top": 0.5 * (this.$preview_thumbnail_container.height() - c)
            })
        },
        remove_thumbnail: function(c) {
            if (c) {
                c.preventDefault()
            }
            this.$preview_thumbnail_container.removeClass("has_image");
            this.$upload_thumbnail.val("");
            this.$thumbnail_pre_upload.val("");
            this.$remove_thumbnail.val("1")
        },
        reset: function(c) {
            this.$post_one.val("");
            this.$post_two.val("");
            this.$post_source_url.val("");
            this.$post_three.val("");
            if (this.editor_type === "rich") {
                this.rich_editor.execCommand("mceSetContent", false, "")
            }
            this.remove_thumbnail();
            this.update_preview(false);
            this.$post_form.removeClass("can_reset")
        },
        editor: function(d) {
            var c = b.extend({}, Tumblr.PostForms.editor_defaults, {
                type: this.editor_type,
                focus: (this.model.get("edit") || this.model.get("reblog")) ? "focus_end": true
            });
            Tumblr.Editor.render(this.editor_id, c)
        },
        editor_focus: function(c) {
            this.placeholder(null, this.$(".inset_label .label"))
        },
        placeholder: function(d, c) {
            if (d) {
                d.preventDefault();
                c = b(d.currentTarget);
                if (c.is("label.optional")) {
                    c = c.prevAll(".label")
                }
                if (this.editor_type !== "rich") {
                    this.$("#post_three").focus()
                }
            }
            c.fadeOut(250);
            c.nextAll(".optional").fadeOut(250);
            if (tinyMCE && this.editor_type === "rich") {
                tinymce.execCommand("mceFocus", false, c.data("for"))
            }
        }
    })
})(jQuery, Tumblr);
/*! scripts/posting/view/conversation_view.js */
(function(b, a) {
    Tumblr.PostForms.Conversation = Tumblr.PostForms.BaseView.extend({
        events: function() {
            return _.defaults({
                "input #post_two": "editor_focus"
            }, Tumblr.PostForms.BaseView.prototype.events)
        },
        render_view: function() {
            var c = _.template(b("#chat_subtemplate").html());
            this.$post_content_type.html(c(_.extend(_.clone(this.template_helpers), this.model.toJSON())));
            Tumblr.PlaceHolders.init({
                els: "#post_one",
                clear_on_submit: true
            });
            this.$post_two = this.$("#post_two");
            this.$post_two.autoexpand().resizeanchor();
            return this
        },
        editor_focus: function(c) {
            if (this.$("#post_two").val().length > 0) {
                this.placeholder(null, this.$(".inset_label .label"))
            }
        },
        placeholder: function(d, c) {
            if (d) {
                d.preventDefault();
                c = b(d.currentTarget);
                if (c.is("label.optional")) {
                    c = c.prevAll(".label")
                }
            }
            c.hide();
            c.nextAll(".optional").hide()
        }
    })
})(jQuery, Tumblr);
/*! scripts/posting/model/light_table_image.js */
(function(b, a) {
    Tumblr.PostForms.LightTableImage = Backbone.Model.extend({
        initialize: function(c) {
            this.file = c;
            this.reader = new FileReader();
            if (this.reader.readAsBinaryString) {
                this.reader.onload = _.bind(this.on_load_binary, this);
                this.reader.readAsBinaryString(this.file)
            } else {
                this.read_data_url()
            }
            this.rotation = 0
        },
        read_data_url: function() {
            this.reader.onload = _.bind(this.on_load_data_url, this);
            this.data_url = this.reader.readAsDataURL(this.file)
        },
        on_load_binary: function(c) {
            this.binary = c.target.result;
            this.read_data_url();
            this.process_binary()
        },
        process_binary: function() {
            if (this.file.type == "image/jpg" || this.file.type == "image/jpeg") {
                try {
                    this.jpeg = new JpegMeta.JpegFile(this.binary, this.file.name);
                    switch (this.jpeg.tiff.Orientation.value) {
                    case 8:
                        this.rotation = 270;
                        break;
                    case 6:
                        this.rotation = 90;
                        break;
                    case 3:
                        this.rotation = 180;
                        break;
                    default:
                        this.rotation = 0;
                        break
                    }
                } catch (c) {}
            }
        },
        on_load_data_url: function(c) {
            this.data_url = c.target.result;
            this.img = new Image();
            this.img.onload = _.bind(this.on_img_load, this);
            this.img.src = this.data_url;
            this.trigger("data_url_ready", this)
        },
        on_img_load: function() {
            this.original_ratio = this.img.width / this.img.height;
            if (this.rotation == 90 || this.rotation == 270) {
                this.width = this.img.height;
                this.height = this.img.width
            } else {
                this.width = this.img.width;
                this.height = this.img.height
            }
            this.ratio = this.width / this.height;
            this.trigger("image_ready", this)
        },
        resize: function(g) {
            var d = this.img;
            var c = g / this.ratio;
            var e = document.createElement("canvas");
            e.width = g;
            e.height = c;
            var f = e.getContext("2d");
            if (this.rotation) {
                if (this.rotation == 90 || this.rotation == 270) {
                    var h = g;
                    g = c;
                    c = h
                }
                f.save();
                if (this.rotation == 180) {
                    f.translate(g / 2, c / 2)
                } else {
                    f.translate(c / 2, g / 2)
                }
                f.rotate(this.rotation * Math.PI / 180);
                f.drawImage(d, - (g / 2), - (c / 2), g, c);
                f.restore()
            } else {
                f.drawImage(d, 0, 0, g, c)
            }
            return e.toDataURL(this.file.type)
        }
    })
})(jQuery, Tumblr);
/*! scripts/posting/view/photo_view.js */
(function(b, a) {
    Tumblr.PostForms.Photo = Tumblr.PostForms.BaseView.extend({
        events: function() {
            return _.defaults({
                "click .help": "on_click_drop_zone",
                "dragenter .drop_target": "enable_drop_zone",
                "dragleave .drop_target": "disable_drop_zone",
                "click .label": "placeholder",
                "click .optional": "placeholder",
                "mouseenter .item": "on_mouseenter",
                "mouseleave .item": "on_mouseleave",
                "click .linkthrough": "on_click_linkthrough",
                "keydown .linkthrough .text_field": "on_keydown_linkthrough",
                "click .caption .icon": "on_click_caption",
                "click .x": "on_click_x",
                "click .photo_form .caption_popover .dismiss": "on_click_caption_dismiss",
                "keyup .photo_form .caption_popover textarea": "on_keyup_caption",
                "focus #post_two": "editor_focus",
                "click .url_button": "on_click_url_button",
                "keydown .external_url": "on_keydown_external_url"
            }, Tumblr.PostForms.BaseView.prototype.events)
        },
        layouts: {
            "1": [1],
            "2": [11, 2],
            "3": [12, 21, 3],
            "4": [121, 13, 22, 31],
            "5": [122, 212, 23, 32],
            "6": [123, 132, 213, 222, 33],
            "7": [1222, 133, 223, 232, 322],
            "8": [1223, 1232, 1322, 2222, 233, 323, 332],
            "9": [1233, 1323, 2223, 2232, 2322, 3222, 333],
            "10": [1333, 2233, 2323, 2332, 3223, 3232, 3322]
        },
        max_per_row: 3,
        initialize: function(c) {
            this.options = c || {};
            this.constructor.__super__.initialize.call(this, this.options);
            this.$sub_template = b.trim(b("#photo_subtemplate").html());
            this.$reblog_tree_toggle_subtemplate = b.trim(b("#reblog_tree_toggle_subtemplate").html());
            this.photos = [];
            this.files = [];
            this.original_photos_length = 0;
            this.$lighttable_template = b.trim(b("#photo_grid_subtemplate").html());
            this.$upload_list_template = b.trim(b("#upload_photo_list_subtemplate").html());
            this.model.on("change:upload_complete", this.upload_complete, this);
            this.model.on("change:upload_file_error", this.file_errors, this);
            this.model.on("change:upload_failed", this.upload_failed, this);
            this.model.on("change:upload_files_added", this.files_added, this);
            var d = {
                lines: 11,
                length: 4,
                width: 2,
                radius: 5,
                color: "#b2bdc7",
                speed: 0.9,
                trail: 34,
                shadow: false,
                hwaccel: false,
                className: "spinner",
                zIndex: 2000000000,
                top: "0",
                left: "0"
            };
            this.photo_spinner = new Spinner(d)
        },
        destroy: function(c) {
            if (this.webcam) {
                this.webcam.destroy();
                this.webcam = null
            }
            this.constructor.__super__.destroy.call(this, c)
        },
        hide_post_form: function(c, d) {
            if (this.model.uploader_inititalized) {
                this.model.destroy_uploader(this.$("#photo_file_input"))
            }
            this.constructor.__super__.hide_post_form.call(this, c, d)
        },
        upload_complete: function(c) {
            _.each(c.response, function(f) {
                for (var h = 0, e; e = this.photos[h]; h++) {
                    if (f.error) {
                        this.display_errors([__("Error uploading image")]);
                        this.abort();
                        var d = f.original_filename;
                        if (e.filename == d) {
                            this.files = _.reject(this.files, function(i) {
                                return encodeURIComponent(i.name) == d
                            });
                            this.photos = _.reject(this.photos, function(i) {
                                return encodeURIComponent(i.filename) == d
                            });
                            this.image_loaders = _.reject(this.image_loaders, function(i) {
                                return i.file.name == d
                            });
                            this.original_photos_length = this.photos.length - this.files.length;
                            if (this.photos.length > 0) {
                                this.determine_layout();
                                this.render_cells()
                            } else {
                                var g = this.$(".item img").filter("[data-filename='" + (e.filename) + "']");
                                g.closest(".item").remove();
                                this.$(".photo_field").removeClass("small");
                                this.$(".url_container").show();
                                this.$(".help .default_text").show();
                                this.$(".help .additional_text").hide();
                                this.disable_submit()
                            }
                        }
                    } else {
                        if (f.upload_id && (f.upload_id == e.upload_id)&&!e.temp_url) {
                            e.temp_url = f.url;
                            break
                        } else {
                            if (f.original_filename == e.filename&&!e.temp_url) {
                                e.temp_url = f.url;
                                break
                            }
                        }
                    }
                }
            }, this)
        },
        upload_failed: function(c, d) {
            this.display_errors(c);
            this.photos = _.reject(this.photos, function(e) {
                return (e.filename&&!e.temp_url)
            });
            if (this.photos.length > 0) {
                this.determine_layout();
                this.render_cells()
            } else {
                this.disable_submit()
            }
        },
        file_errors: function(d, c) {
            this.display_errors(d)
        },
        render_view: function() {
            var c = this;
            var e = _.template(this.$sub_template);
            this.lighttable_template = (_.template(this.$lighttable_template));
            this.$post_content_type.html(e(_.extend(_.clone(this.template_helpers), this.model.toJSON())));
            this.post = this.model.get("post");
            if (this.post) {
                if (this.post.photos) {
                    this.original_photos_length = this.post.photos.length;
                    this.photos = this.post.photos;
                    if (this.photos.length) {
                        this.layout = this.photos.length > 1 ? this.post.photoset_layout.toString() : "1";
                        this.render_cells();
                        this.enable_submit()
                    }
                }
                if (this.post.two || this.post.tags) {
                    this.$("#photo_caption").show();
                    this.$(".tag_editor").show()
                }
            }
            if (_.isEmpty(this.post) ||!this.post.is_reblog) {
                this.model.init_uploader(this.$("#photo_file_input"), {
                    singleFileUploads: true,
                    limitConcurrentUploads: 10,
                    error_msg: {
                        errorSize: "File is too big. Max 10MB.",
                        errorType: "Only image files are allowed."
                    },
                    drop: _.bind(this.on_add_files, this),
                    change: _.bind(this.on_add_files, this)
                });
                if (Tumblr.Webcam) {
                    this.webcam = new Tumblr.Webcam({
                        el: "#webcam_container",
                        template: "#photo_grid_subtemplate",
                        btn: ".url_container .webcam_button",
                        on_show: function() {
                            b(".photo_field").hide()
                        },
                        on_hide: function() {
                            c.cancel_webcam();
                            c.$(".photo_field").show().removeClass("small");
                            c.$(".url_container").show()
                        },
                        on_snap: function(g, h, f, i) {
                            c.load_raw_photo(g, h, f, i)
                        },
                        on_retake: function() {
                            c.cancel_webcam()
                        }
                    })
                }
            }
            if (!_.isUndefined(this.post.reblog_tree)) {
                var d = _.template(this.$reblog_tree_toggle_subtemplate);
                this.$main_content.find(".inner_content").before(d({
                    post: this.post
                }))
            }
            this.editor();
            if (this.editor_type !== "rich") {
                this.$("#post_two").autoexpand().resizeanchor()
            }
            Tumblr.Editor.on("tinymce.focus", this.editor_focus, this);
            return this
        },
        on_add_files: function(d, c) {
            var f = this.model.max_number_of_files - this.photos.length;
            if (c.files.length >= f) {
                c.files = c.files.slice(0, f);
                this.show_info(__("You can only upload up to 10 photos. Please remove some if you want to add more"));
                setTimeout(_.bind(this.hide_info, this), 10000);
                return 
            }
        },
        editor: function(d) {
            var c = b.extend({}, Tumblr.PostForms.editor_defaults, {
                type: this.editor_type,
                focus: (this.model.get("edit") || this.model.get("reblog")) ? "focus_end": true
            });
            Tumblr.Editor.render(this.editor_id, c)
        },
        editor_focus: function(c) {
            this.placeholder(null, this.$(".inset_label .label"))
        },
        enable_drop_zone: function(c) {
            b(c.currentTarget).closest(".drop_zone").addClass("droppable")
        },
        disable_drop_zone: function(c) {
            b(c.currentTarget).closest(".drop_zone").removeClass("droppable")
        },
        placeholder: function(d, c) {
            if (d) {
                d.preventDefault();
                c = b(d.currentTarget);
                if (c.is("label.optional")) {
                    c = c.prevAll(".label")
                }
                if (this.editor_type !== "rich") {
                    this.$("#post_two").focus()
                }
            }
            c.fadeOut(250);
            c.nextAll(".optional").fadeOut(250);
            if (tinyMCE && this.editor_type === "rich") {
                tinymce.execCommand("mceFocus", false, c.data("for"))
            }
        },
        files_added: function(c, d) {
            this.process_files(c.files)
        },
        process_files: function(g) {
            if (this.files.length == this.model.max_number_of_files) {
                this.show_info(__("You can only upload up to 10 photos. Please remove some if you want to add more"));
                setTimeout(_.bind(this.hide_info, this), 5000);
                return 
            }
            this.photo_spinner.spin(this.$(".photo_spinner").get(0));
            this.$(".url_container").hide();
            this.$(".help_text").hide();
            this.hide_errors();
            this.files = this.files.concat(g);
            var d = this.$(".photos");
            var j;
            this.cells = [];
            this.image_loaders = this.image_loaders || [];
            for (var e = 0, h; h = g[e]; e++) {
                if (e == this.model.max_number_of_files) {
                    break
                }
                if (!h.type.match("image.*")) {
                    continue
                }
                var c = new Tumblr.PostForms.LightTableImage(h);
                this.image_loaders.push(c);
                c.on("image_ready", _.bind(function(f) {
                    if (this.photos.length < this.model.max_number_of_files) {
                        var k =- 1;
                        var m = this.photos.map(function(i) {
                            return i.id
                        });
                        for (var l = 1; l <= this.model.max_number_of_files; l++) {
                            if (b.inArray("o" + l, m)===-1) {
                                k = l;
                                break
                            }
                        }
                        this.photos.push({
                            id: ("o" + k),
                            filename: f.file.name,
                            type: f.file.type,
                            url: (f.file.type == "image/gif" ? f.data_url : f.resize(500)),
                            width: f.width,
                            height: f.height,
                            upload_id: f.file.upload_id
                        })
                    }
                    if (this.photos.length >= this.files.length + this.original_photos_length) {
                        this.enable_submit();
                        this.determine_layout();
                        this.render_cells()
                    }
                }, this))
            }
        },
        determine_layout: function() {
            if (!this.layout || this.layout === "1") {
                this.layout = this.layouts[this.photos.length][0].toString()
            } else {
                var c = this.photos.length - this.$(".item").length;
                if (c === 1) {
                    this.layout = this.layout + "1"
                } else {
                    if (c === 0) {
                        this.layout = _.reduce(this.$(".row"), function(d, e) {
                            return d + this.$(e).children().not(".shim", ".placeholder").length
                        }, "", this)
                    } else {
                        this.layout = this.layouts[this.photos.length][0].toString()
                    }
                }
            }
            return this.layout
        },
        determine_width: function(d, e) {
            var c;
            if (d.type == "image/gif" && d.width >= 150) {
                c = e
            } else {
                if (d.width <= e) {
                    c = d.width
                } else {
                    c = e
                }
            }
            return c
        },
        render_cells: function(n) {
            this.$(".row").remove();
            this.photo_spinner.stop();
            this.$("#photo_caption").show();
            this.$(".tag_editor").show();
            if (!n) {
                var o = "";
                var r = this.layout;
                var m, l, h, f;
                for (m = 0, h = 0; m < r.length; m++) {
                    f = Number(r[m]);
                    o += '<div class="row clearfix">';
                    var e = f == 1 ? 3: 1;
                    var p = f - 1;
                    var g = p * 10;
                    var d = (500 - g) / f;
                    for (l = 0; l < f; l++, h++) {
                        var c = this.photos[h];
                        var d = this.photos.length == 1 ? this.determine_width(c, d): d;
                        var q = (c.height / c.width) * d;
                        o += this.lighttable_template(_.extend(_.clone(this.template_helpers), {
                            width: d,
                            height: q,
                            controls: _.isEmpty(this.post) ||!this.post.is_reblog,
                            individual_captions: this.photos.length > 1,
                            linkthrough: this.photos.length == 1,
                            link_url: this.post && this.post.link_url,
                            data_url: c.url,
                            filename: encodeURIComponent(c.filename || c.id),
                            caption: c.caption
                        }))
                    }
                    o += "</div>"
                }
                this.$(".photos .item").remove();
                this.$(".photos").append(o)
            }
            if (this.photos.length > 1) {
                this.initialize_lighttable()
            } else {
                setTimeout(_.bind(this.show_photos, this), 200);
                if (this.lighttable) {
                    this.destroy_lighttable()
                }
            }
            if (this.post && this.post.is_reblog) {
                if (this.lighttable) {
                    this.destroy_lighttable()
                }
                this.$(".photo_field").hide();
                return 
            }
            if (this.photos.length == this.model.max_number_of_files || n) {
                this.$(".photo_field").hide()
            } else {
                this.$(".photo_field").show().addClass("small");
                this.$(".url_container").hide();
                this.$(".help .default_text").hide();
                this.$(".help .additional_text").show();
                this.$(".help_text").show()
            }
        },
        initialize_lighttable: function() {
            if (this.lighttable) {
                this.destroy_lighttable()
            }
            this.lighttable = new Tumblr.LightTableView({
                el: this.$(".photos"),
                scrollable: true,
                max_per_row: this.max_per_row,
                on_initialize: _.bind(this.show_photos, this),
                callback: _.bind(this.on_sort, this)
            })
        },
        destroy_lighttable: function() {
            this.lighttable.undelegateEvents();
            this.lighttable.disable_drag();
            this.lighttable = null
        },
        show_photos: function(c) {
            this.$(".photos").removeClass("collapsed");
            setTimeout(_.bind(function() {
                this.$("img.thumb").css("opacity", 1);
                if (this._position_detached_resize) {
                    this._position_detached_resize({
                        type: "lighttable.open"
                    })
                }
            }, this), 300)
        },
        on_sort: function(c) {
            this.determine_layout();
            var d = this.$(".item img");
            this.photos.sort(function(g, f) {
                var e = g.filename ? encodeURI(g.filename): g.id;
                var k = f.filename ? encodeURI(f.filename): f.id;
                var j = d.filter("[data-filename='" + e + "']");
                var i = d.filter("[data-filename='" + k + "']");
                var l = d.index(j);
                var h = d.index(i);
                return l - h
            })
        },
        on_mouseenter: function(c) {
            this.$(c.currentTarget).find(".controls").show()
        },
        on_mouseleave: function(c) {
            if (this.control_visible) {
                return 
            }
            this.$(c.currentTarget).find(".controls").fadeOut(125)
        },
        on_click_linkthrough: function(i) {
            var f = b(i.currentTarget).closest(".linkthrough");
            var d = f.closest(".item");
            var h = f.find(".popover");
            var c = f.closest(".controls");
            var g = f.find(".text_field");
            this.control_visible = true;
            this.linkthrough_popover = new Tumblr.MultiPopover(h.get(0), {
                token: "post-plexi",
                direction: "north",
                on_show: b.proxy(function() {
                    d.attr("draggable", false);
                    this.on_show_popover.apply(this, arguments)
                }, this),
                on_hide: b.proxy(function() {
                    d.attr("draggable", true);
                    this.control_visible = false;
                    this.on_hide_popover.apply(this, arguments)
                }, this)
            }).show();
            h.addClass("active")
        },
        on_keydown_linkthrough: function(f) {
            if (f && f.keyCode === 13) {
                f.preventDefault();
                f.stopPropagation();
                this.linkthrough_popover.hide()
            }
            var g = this.$(f.currentTarget);
            var d = g.val();
            var c = g.closest(".linkthrough");
            if (d) {
                c.addClass("edited")
            } else {
                c.removeClass("edited")
            }
        },
        on_click_caption: function(h) {
            var f = b(h.currentTarget).closest(".caption");
            var d = f.closest(".item");
            var g = f.find(".popover");
            var c = f.closest(".controls");
            var i = f.find("textarea");
            this.control_visible = true;
            this.caption_popover = new Tumblr.MultiPopover(g.get(0), {
                token: "post-plexi",
                direction: "north",
                on_show: b.proxy(function() {
                    d.attr("draggable", false);
                    i.focus();
                    this.on_show_popover.apply(this, arguments)
                }, this),
                on_hide: b.proxy(function() {
                    d.attr("draggable", true);
                    this.control_visible = false;
                    this.on_hide_popover.apply(this, arguments)
                }, this)
            }).show();
            g.addClass("active")
        },
        on_click_caption_dismiss: function() {
            this.caption_popover.hide()
        },
        on_click_x: function(g) {
            var f = this.$(g.currentTarget).closest(".item").find("img").data("filename");
            this.files = _.reject(this.files, function(e) {
                return encodeURIComponent(e.name) == f
            });
            this.photos = _.reject(this.photos, function(e) {
                return encodeURIComponent(e.filename) == f || e.id == f
            });
            this.image_loaders = _.reject(this.image_loaders, function(e) {
                return e.file.name == f
            });
            this.original_photos_length = this.photos.length - this.files.length;
            var d = this.$(g.currentTarget).closest(".item");
            var c = d.closest(".row");
            d.remove();
            if (!c.children().length) {
                c.remove()
            }
            if (this.photos.length > 0) {
                this.determine_layout();
                this.render_cells()
            } else {
                this.$(".photo_field").removeClass("small");
                this.$(".url_container").show();
                this.$(".help .default_text").show();
                this.$(".help .additional_text").hide();
                this.disable_submit()
            }
        },
        on_keyup_caption: _.throttle(function(h) {
            if (h && h.keyCode === 13) {
                h.preventDefault();
                this.caption_popover.hide()
            }
            var k = b(h.currentTarget);
            var f = k.val();
            var j = k.closest(".caption");
            var g = k.attr("maxlength") || 200;
            var i = k.closest(".caption_popover").find(".length");
            var d = g - f.length;
            i.addClass("active").text(d);
            var c = k.closest(".item").find("img").data("filename");
            _.each(this.photos, function(e) {
                if (e.id == c) {
                    e.caption = f
                }
            });
            if (f) {
                j.addClass("edited")
            } else {
                j.removeClass("edited")
            }
        }, 50),
        on_click_drop_zone: function(c) {
            this.$("#photo_file_input").trigger("click");
            c.stopPropagation()
        },
        on_click_url_button: function(f) {
            var c = b(f.currentTarget).closest(".url_container");
            var d = c.find(".popover");
            var g = c.find(".text_field");
            this.url_popover = new Tumblr.MultiPopover(d.get(0), {
                token: "post-plexi",
                direction: "south",
                on_show: b.proxy(function() {
                    g.focus();
                    this.on_show_popover.apply(this, arguments)
                }, this),
                on_hide: b.proxy(function() {
                    if (g.val()) {
                        this.on_hide_popover.apply(this, arguments);
                        this.load_external_url(g.val());
                        g.val("")
                    }
                }, this)
            }).show();
            d.addClass("active")
        },
        on_keydown_external_url: function(c) {
            if (!c) {
                return 
            }
            if (c.keyCode === 13 || c.keyCode === 9) {
                c.preventDefault();
                c.stopPropagation();
                this.url_popover.hide()
            }
        },
        load_raw_photo: function(e, d, c, f) {
            this.photos.push({
                id: ("o" + (this.photos.length + 1)),
                filename: "",
                url: e,
                photo_raw: e.split("base64,")[1],
                width: d,
                height: c,
                is_selfie_gif: f,
                is_selfie: true
            });
            this.original_photos_length++;
            this.enable_submit();
            this.determine_layout();
            this.render_cells(true)
        },
        load_external_url: function(d) {
            if (!d) {
                return 
            }
            var c = document.createElement("img");
            var e = b(c);
            e.one("load", _.bind(function(f) {
                this.photos.push({
                    id: ("o" + (this.photos.length + 1)),
                    filename: "",
                    url: d,
                    external_url: d,
                    width: c.width,
                    height: c.height
                });
                this.original_photos_length++;
                this.enable_submit();
                this.determine_layout();
                this.render_cells();
                e.off()
            }, this)).one("error", _.bind(function(f) {
                this.display_errors([__("Error loading image from url")]);
                e.off()
            }, this));
            c.src = d
        },
        upload_completed: function() {
            var d = _.filter(this.photos, function(e) {
                return e.filename
            });
            var c = _.every(d, function(e) {
                return e.temp_url
            });
            return c
        },
        make_photo_inputs: function(c) {
            this.$('[data-input="submit-meta"]').remove();
            b("<input>").attr({
                "data-input": "submit-meta",
                type: "hidden",
                name: "post[photoset_layout]",
                value: this.layout
            }).appendTo(this.$post_form);
            b("<input>").attr({
                "data-input": "submit-meta",
                type: "hidden",
                name: "post[photoset_order]",
                value: _.pluck(this.photos, "id").join(",")
            }).appendTo(this.$post_form);
            _.each(this.photos, function(e, d) {
                var f = e.id || "o" + (d + 1);
                b("<input>").attr({
                    "data-input": "submit-meta",
                    type: "hidden",
                    name: "images[" + f + "]",
                    value: (e.external_url) ? e.external_url: e.temp_url
                }).appendTo(this.$post_form);
                if (e.external_url) {
                    b("<input>").attr({
                        "data-input": "submit-meta",
                        type: "hidden",
                        name: "photo_src[]",
                        value: e.external_url
                    }).appendTo(this.$post_form)
                } else {
                    if (e.photo_raw) {
                        b("<input>").attr({
                            "data-input": "submit-meta",
                            type: "hidden",
                            name: "photo_raw[]",
                            value: e.photo_raw
                        }).appendTo(this.$post_form);
                        b("<input>").attr({
                            "data-input": "submit-meta",
                            type: "hidden",
                            name: "is_selfie",
                            value: e.is_selfie
                        }).appendTo(this.$post_form);
                        b("<input>").attr({
                            "data-input": "submit-meta",
                            type: "hidden",
                            name: "is_selfie_gif",
                            value: e.is_selfie_gif
                        }).appendTo(this.$post_form)
                    }
                }
            }, this);
            _.each(this.$(".photos textarea"), _.bind(function(d, e) {
                d.name = "caption[" + this.photos[e].id + "]"
            }, this))
        },
        submit: function(d) {
            this.disable_submit();
            this.hide_errors();
            var c = this.$post_form.find('[name="preview_post"]').val();
            if (!c && d) {
                d.preventDefault()
            }
            if (this.upload_completed()) {
                this.enable_submit();
                this.make_photo_inputs(c);
                this.constructor.__super__.submit.call(this, d)
            } else {
                if (c) {
                    d.preventDefault();
                    return 
                }
                this.show_loader();
                clearInterval(this.submit_loop);
                this.submit_loop = setInterval(_.bind(function() {
                    if (!this.upload_completed()) {
                        return false
                    }
                    this.enable_submit();
                    this.make_photo_inputs(c);
                    this.constructor.__super__.submit.call(this, d);
                    clearInterval(this.submit_loop)
                }, this), 30)
            }
        },
        abort: function() {
            this.hide_loader();
            clearInterval(this.submit_loop)
        },
        cancel_webcam: function() {
            this.photos = [];
            this.original_photos_length = 0;
            this.disable_submit()
        },
        preview_on_blog: function(d) {
            if (!this.upload_completed()) {
                this.show_loader();
                Tumblr.MultiPopover.hideAll();
                var c = setInterval(_.bind(function() {
                    if (!this.upload_completed()) {
                        return false
                    }
                    this.hide_loader();
                    this.constructor.__super__.preview_on_blog.call(this, d);
                    clearInterval(c)
                }, this), 30);
                return false
            }
            this.constructor.__super__.preview_on_blog.call(this, d)
        }
    })
})(jQuery, Tumblr);
/*! scripts/posting/view/light_table_view.js */
(function(b, a) {
    Tumblr.LightTableView = Tumblr.SortableView.extend({
        events: function() {
            var c = _.isFunction(Tumblr.SortableView.prototype.events) ? Tumblr.SortableView.prototype.events.call(this): Tumblr.SortableView.prototype.events;
            return _.extend({
                dragover: "on_dragover",
                "dragleave .drop": "on_dragleave",
                drop: "on_drop"
            }, c)
        },
        initialize: function(d) {
            this.options = d || {};
            Tumblr.SortableView.prototype.initialize.apply(this, arguments);
            this.max_per_row = this.options.max_per_row || 3;
            this.$shim = b('<div class="item shim" style="width:0;"></div>');
            this.animation_duration = 600;
            var e = this.$("img.thumb");
            var c = setInterval(_.bind(function() {
                var f = _.every(e, function(g) {
                    return g.complete && g.clientHeight
                });
                if (f) {
                    this.equalize();
                    clearInterval(c);
                    if (this.options.on_initialize) {
                        this.options.on_initialize(this)
                    }
                }
            }, this), 30)
        },
        disable_drag: function() {
            this.items.attr("draggable", false)
        },
        on_dragstart: function(i) {
            b(this.options.el).addClass("dragging");
            this.$(this.options.items).attr("draggable", false);
            Tumblr.SortableView.prototype.on_dragstart.apply(this, arguments);
            this.$(".placeholder").remove();
            this.placeholder = this.$(this.dragged).clone().addClass("placeholder").removeClass("sortable-dragging").attr("draggable", false).get(0);
            this.dropped = false;
            i.originalEvent.dataTransfer.dropEffect = "move";
            var h = this.$(i.currentTarget).parent(".row");
            this.origin_row = h;
            var c = h.find(this.options.items).length;
            var d = c - 1;
            var f = d * 10;
            var g = (500 - f) / c;
            this.$(i.currentTarget).find(".controls").hide();
            this.placeholder.style.width = g + "px";
            this.placeholder.style.height = this.dragged.clientHeight + "px";
            this.drag_x = i.originalEvent.offsetX;
            this.drag_y = i.originalEvent.offsetY;
            this.$(".drop").show();
            window.setTimeout(_.bind(function() {
                this.$(i.currentTarget).after(this.placeholder);
                this.$(this.placeholder).addClass("active");
                this.$(this.dragged).css({
                    "z-index": "1000",
                    position: "absolute",
                    visibility: "hidden"
                });
                this.$el.append(this.dragged)
            }, this), 0)
        },
        on_dragenter: function(d) {
            _.each(this.$(".row"), function(e) {
                if (!this.$(e).children().length) {
                    this.$(e).remove()
                }
            }, this);
            var c = d.currentTarget;
            this.last_droppable = c
        },
        on_dragover: function(g) {
            if (g.currentTarget == this.el ||!this.dragged) {
                return false
            }
            this.reset_marker();
            var d = this.$(g.currentTarget);
            var h = d.parent(".row");
            var l = g.originalEvent.pageX - d.offset().left;
            var i = g.originalEvent.pageY - d.offset().top;
            var j = g.currentTarget.getBoundingClientRect();
            var f = this.$(g.currentTarget).position();
            var k = "";
            var c = "";
            if (i < j.height / 5) {
                k = "top";
                this.$(".horizontal_marker").css({
                    top: f.top - 5 + "px"
                }).show()
            } else {
                if (i > (j.height - j.height / 5)) {
                    k = "bottom";
                    this.$(".horizontal_marker").css({
                        top: f.top + j.height + 5 + "px"
                    }).show()
                } else {
                    if (l < j.width / 2 && (h.children().not(".placeholder").not(".shim").length < this.options.max_per_row)) {
                        c = "left";
                        this.$(".vertical_marker").css({
                            top: f.top,
                            left: f.left - 5 + "px",
                            height: j.height + 6
                        }).show()
                    } else {
                        if (l > (j.width - j.width / 2) && (h.children().not(".placeholder").not(".shim").length < this.max_per_row)) {
                            c = "right";
                            this.$(".vertical_marker").css({
                                top: f.top,
                                left: f.left + j.width + 5 + "px",
                                height: j.height + 6
                            }).show()
                        }
                    }
                }
            }
            if (c) {
                if (!d.hasClass(c)) {
                    d.addClass(c)
                }
            } else {
                if (k) {
                    if (!d.hasClass(k)) {
                        h.addClass(k)
                    }
                } else {
                    this.drop_allowed = false;
                    return 
                }
            }
            this.drop_allowed = true;
            g.preventDefault()
        },
        on_dragleave: function(c) {
            if (this.real_dragleave(c)) {
                this.reset_marker();
                this.last_droppable = null
            }
        },
        real_dragleave: function(d) {
            var c = d.currentTarget.getBoundingClientRect();
            return (d.originalEvent.x > c.left + c.width || d.originalEvent.x < c.left || d.originalEvent.y > c.top + c.height || d.originalEvent.y < c.top)
        },
        on_drop: function(g) {
            if (!this.drop_allowed) {
                return 
            }
            if (g.originalEvent.dataTransfer.files.length) {
                return 
            }
            if (!this.last_droppable || this.last_droppable == this.dragged) {
                return 
            }
            this.$(".drop").hide();
            if (g.currentTarget == this.placeholder) {
                this.$shim.css({
                    height: this.placeholder.clientHeight
                })
            }
            var d = this.insert_shim();
            if (d === false) {
                return 
            }
            this.reset_marker();
            if ((this.$(g.currentTarget).is(this.options.items))) {
                this.position_dragged_in_drop_spot(g.originalEvent.offsetX, g.originalEvent.offsetY, true)
            } else {
                var j = g.originalEvent.offsetX - this.$el.offset().left;
                var h = g.originalEvent.offsetY - this.$el.offset().top;
                this.position_dragged_in_drop_spot(j, h, false)
            }
            var k = this.$shim.parent().children().not(".shim").not(".placeholder").add(this.dragged);
            var f = this.dimensions(k);
            var l;
            if (this.$shim.parent().is(this.$(this.placeholder).parent())) {
                l = f
            } else {
                var c = this.$(this.placeholder).parent().children().not(".shim").not(".placeholder").not(this.dragged);
                l = c.length ? this.dimensions(c) : {
                    width: this.$(this.placeholder).width(),
                    height: this.$(this.placeholder).height()
                }
            }
            var i = this.destination_coordinates(f, l);
            this.update_layout(l, f, i);
            window.setTimeout(_.bind(this.after_update, this), this.animation_duration);
            this.dropped = true;
            g.stopPropagation()
        },
        on_dragend: function(c) {
            b(this.options.el).removeClass("dragging");
            if (!this.dropped) {
                this.reset_marker();
                this.revert()
            }
            this.$(this.options.items).attr("draggable", true)
        },
        revert: function() {
            this.$(".drop").hide();
            this.$(this.placeholder).detach().css({});
            this.origin_row.append(b(this.dragged).css({
                position: "relative",
                visibility: "visible",
                top: 0,
                left: 0,
                "z-index": "auto"
            }));
            this.dragged = null
        },
        equalize: function() {
            _.each(this.$(".row"), function(h) {
                for (var e = 0, g; g = h.childNodes[e]; ++e) {
                    if (g.nodeType == 3) {
                        h.removeChild(g)
                    }
                }
                var c = this.$(h).find(this.options.items);
                if (!c.length || c.length == 1) {
                    return 
                }
                var j = c.find("img");
                var f = _.map(j, function(k) {
                    if (k.clientHeight === 0) {
                        console.error("photo with 0 height")
                    }
                    return k.clientHeight
                });
                var d = _.min(f);
                c.css({
                    height: d + "px"
                })
            }, this)
        },
        vertically_center_images: function() {
            _.each(this.$(".row"), function(d) {
                var c = this.$(d).find(this.options.items);
                var e = c.find("img");
                _.each(e, function(g) {
                    var f = this.$(g).height();
                    if (f > c.height()) {
                        var h = (f - c.height()) / 2;
                        this.$(g).css({
                            top: - h + "px"
                        })
                    } else {
                        this.$(g).css({
                            top: 0
                        })
                    }
                }, this)
            }, this)
        },
        min_ratio: function(c) {
            var d = _.map(c, function(e) {
                return e.clientHeight / e.clientWidth
            });
            min_ratio = _.min(d);
            return min_ratio
        },
        reset_marker: function() {
            this.$(".row").removeClass("top bottom");
            this.$(this.options.items).removeClass("right left");
            this.$(".horizontal_marker").css({
                top: 0
            }).hide();
            this.$(".vertical_marker").css({
                top: 0,
                left: 0
            }).hide()
        },
        insert_shim: function() {
            var d = this.$(this.last_droppable).parent(".row");
            var c = d.clone().empty().get(0);
            if (this.$(this.last_droppable).hasClass("right")) {
                this.$(this.last_droppable).after(this.$shim[0]);
                this.$el.append(this.dragged)
            } else {
                if (this.$(this.last_droppable).hasClass("left")) {
                    this.$(this.last_droppable).before(this.$shim[0]);
                    this.$el.append(this.dragged)
                } else {
                    if (d.hasClass("top")) {
                        d.before(c);
                        c.appendChild(this.$shim[0]);
                        this.$el.append(this.dragged)
                    } else {
                        if (d.hasClass("bottom")) {
                            d.after(c);
                            c.appendChild(this.$shim[0]);
                            this.$el.append(this.dragged)
                        } else {
                            return false
                        }
                    }
                }
            }
        },
        position_dragged_in_drop_spot: function(e, h, d) {
            var g, f;
            if (d) {
                var c = this.$(this.last_droppable).position() || {
                    left: 0,
                    top: 0
                };
                g = e + c.left - this.drag_x;
                f = h + c.top - this.drag_y
            } else {
                g = e - this.drag_x;
                f = h - this.drag_y
            }
            this.$(this.dragged).removeClass("item").css({
                top: f + "px",
                left: g + "px",
                position: "absolute"
            })
        },
        dimensions: function(c) {
            var d = {};
            var e = (c.length - 1) * 10;
            d.width = (500 - e) / c.length;
            d.min_ratio = this.min_ratio(c.find("img"));
            d.height = d.width * d.min_ratio;
            return d
        },
        destination_coordinates: function(c, d) {
            var e = this.$shim.parent().children().index(this.$shim);
            var g = this.destination_offset(c, d);
            var f = {};
            f.left = ((e) * c.width) + (e * 10) - g.left;
            f.top = this.$shim.position().top + g.top;
            return f
        },
        destination_offset: function(c, d) {
            var e = this.$shim.parent().children().index(this.$shim);
            var f = this.$(this.placeholder).parent().children().index(this.$(this.placeholder));
            var g = {};
            g.left = 0;
            if (this.$shim.parent().is(this.$(this.placeholder).parent()) && f < e) {
                g.left = c.width
            }
            g.top = 0;
            if (this.$(".row").index(this.$(this.placeholder).parent()) < this.$(".row").index(this.$shim.parent())) {
                if (!this.$(this.placeholder).siblings().length) {
                    g.top =- d.height
                } else {
                    g.top = (d.height / d.width * d.width) - this.$(this.dragged).height()
                }
            }
            if (g.top==-Infinity) {}
            return g
        },
        update_layout: function(d, c, e) {
            this.$(this.placeholder).siblings(this.options.items).not(".shim").css({
                width: d.width + "px",
                height: d.height + "px"
            });
            this.$(this.placeholder).removeClass("active").css({
                height: 0,
                width: 0
            });
            this.$shim.parent().children(this.options.items).not(".placeholder").css({
                width: c.width,
                height: c.height
            });
            window.setTimeout(_.bind(function() {
                this.$(this.dragged).addClass("item").css({
                    width: c.width + "px",
                    height: c.height + "px",
                    top: e.top + "px",
                    left: e.left + "px",
                    visibility: "visible"
                })
            }, this), 0)
        },
        after_update: function() {
            if (!this.$shim.is(":visible")) {
                this.dragged = null;
                return 
            }
            var c = this.$(this.placeholder).parent(".row");
            this.$(this.dragged).removeClass("sortable-dragging");
            this.$shim.replaceWith(b(this.dragged).css({
                position: "relative",
                top: 0,
                left: 0,
                "z-index": "auto"
            }));
            this.$shim.css({
                height: 0,
                width: 0
            });
            this.$(this.placeholder).detach().css({});
            if (!c.children().length) {
                c.remove()
            }
            this.$(this.options.items).attr("draggable", true);
            this.callback(this);
            this.dragged = null
        }
    })
})(jQuery, Tumblr);
/*! scripts/posting/view/audio_view.js */
(function(b, a) {
    Tumblr.PostForms.Audio = Tumblr.PostForms.BaseView.extend({
        last_term: "",
        spotify_pattern: /(open\.spotify\.com|spotify)[\/|:](track|album|artist|playlist|user)[\/|:](.*)?([\d\w]{22})$/,
        soundcloud_pattern: /(http|https):\/\/soundcloud\.com\/[^\/]+\/(sets\/)?[^\/]+\/?$/,
        bandcamp_pattern: /(http|https):\/\/(?:([^\/]+\.)\.bandcamp\.com|[^\/]+\.[^\/]+)\/(track|album)\/[^\/]+$/,
        mp3_pattern: /(.mp3)$/i,
        events: function() {
            return _.defaults({
                "click .label": "placeholder",
                "click .optional": "placeholder",
                "click .audio_tabs a": "tab_switcher",
                "keyup #audio_search_field": "audio_search",
                "keydown #audio_search_field": "keydown",
                "keydown #post_three": "keydown",
                "click #audio_search_results li": "search_result_click",
                "keyup #post_three": "external_url_keyup",
                "paste #post_three": "external_url_paste"
            }, Tumblr.PostForms.BaseView.prototype.events)
        },
        initialize: function(c) {
            this.options = c || {};
            this.constructor.__super__.initialize.call(this, this.options);
            this.$sub_template = b.trim(b("#audio_subtemplate").html());
            this.$spotify_template = b.trim(b("#audio_spotify_subtemplate").html());
            this.$soundcloud_template = b.trim(b("#audio_soundcloud_subtemplate").html());
            this.$spotify_preview_template = b.trim(b("#audio_spotify_preview_subtemplate").html());
            this.$soundcloud_track_preview_template = b.trim(b("#audio_soundcloud_track_preview_subtemplate").html());
            this.$soundcloud_playlist_preview_template = b.trim(b("#audio_soundcloud_playlist_preview_subtemplate").html());
            this.$bandcamp_preview_template = b.trim(b("#audio_bandcamp_preview_subtemplate").html());
            this.$upload_list_template = b.trim(b("#upload_list_subtemplate").html());
            this.$upload_preview_template = b.trim(b("#audio_upload_preview_subtemplate").html());
            this.$preview_player_template = b.trim(b("#audio_preview_player_subtemplate").html());
            this.$upload_tos_template = b.trim(b("#upload_tos_subtemplate").html());
            this.$reblog_tree_toggle_subtemplate = b.trim(b("#reblog_tree_toggle_subtemplate").html());
            this.model.on("change:audio_search", this.render_search_results, this);
            this.model.on("change:audio_search_failed", this.render_server_error, this);
            this.model.on("change:upload_progress", this.upload_progress, this);
            this.model.on("change:upload_complete", this.upload_complete, this);
            this.model.on("change:upload_file_error", this.file_errors, this);
            this.model.on("change:upload_failed", this.upload_failed, this);
            this.model.on("change:send_file", this.display_file_list, this);
            this.$post_form.on("click", ".dismiss_preview", _.bind(function(d) {
                d.preventDefault();
                d.stopPropagation();
                this.dismiss_preview();
                return false
            }, this));
            this.$post_form.on("click", ".preview_player", _.bind(function(f) {
                f.preventDefault();
                f.stopPropagation();
                var d = b(f.currentTarget);
                this.preview_track(d.data("stream"));
                return false
            }, this));
            this.$post_form.on("click", "#file_list .cancel", _.bind(this.dismiss_upload, this));
            this.$post_form.on("click", "#audio_album_art .cancel", _.bind(this.replace_artwork, this))
        },
        destroy: function(c) {
            this.constructor.__super__.destroy.call(this, c);
            this.destroy_preview()
        },
        render_view: function(e) {
            var d = _.template(this.$sub_template);
            this.$post_content_type.html(d(_.extend(_.clone(this.template_helpers), this.model.toJSON())));
            this.editor();
            var c = _.template(this.$upload_tos_template);
            this.$main_content.after(c({}));
            this.cache_selectors_view();
            this.$tos_container = b("#upload_tos").hide();
            if (!this.model.get("reblog")) {
                this.model.init_uploader(this.$audio_file_input, {
                    error_msg: {
                        errorSize: "File is too big. Max 10MB.",
                        errorType: "Only audio files are allowed."
                    }
                })
            }
            Tumblr.PlaceHolders.init({
                clear_on_submit: true
            });
            Tumblr.Editor.on("tinymce.focus", this.editor_focus, this);
            this.post = this.model.get("post");
            if (this.model.get("edit") || this.model.get("reblog")) {
                this.model.on("post:form:animation:start", function() {
                    this.render_external_url();
                    if (this.post.is_reblog) {
                        this.$audio_preview_container.addClass("reblog");
                        this.$(".dismiss_preview").remove()
                    }
                    if (this.audio_player) {
                        _.delay(_.bind(function() {
                            this.audio_player.truncate_text()
                        }, this), 100)
                    }
                }, this)
            }
            if (typeof e === "function") {
                e()
            }
            return this
        },
        render_external_url: function() {
            var e = this.model.get("post");
            var f = {};
            if (e&&!_.isEmpty(e)) {
                this.$tag_editor.show();
                this.$audio_description.show();
                if (!e.three) {
                    f = {
                        href: "",
                        stream: e.audio_url,
                        provider: "upload",
                        artwork: e.audio_artwork,
                        Title: e.id3_tags.Title,
                        Artist: e.id3_tags.Artist,
                        Album: e.id3_tags.Album
                    };
                    this.render_preview(f);
                    this.switch_tab(this.$audio_upload_tab);
                    this.$audio_upload.hide();
                    if (this.model.get("edit") || this.model.get("reblog")) {
                        this.enable_submit();
                        b("#upload_arwork").val("");
                        b("#pre_upload").val("1")
                    }
                } else {
                    var c = e.three.match(this.spotify_pattern);
                    var d = e.three.match(this.soundcloud_pattern);
                    var h = e.three.match(this.bandcamp_pattern);
                    var g = false;
                    if (c) {
                        g = "spotify"
                    } else {
                        if (d) {
                            g = "soundcloud"
                        } else {
                            if (h) {
                                g = "bandcamp"
                            }
                        }
                    }
                    if (g) {
                        f = {
                            href: e.three,
                            provider: g,
                            artwork: ""
                        };
                        if (!c) {
                            f.artwork = e.audio_artwork;
                            f.stream = e.audio_url;
                            f.Title = e.id3_tags.Title;
                            f.Artist = e.id3_tags.Artist;
                            f.Album = e.id3_tags.Album
                        }
                        if (h && e.bandcamp) {
                            f.id = e.bandcamp.id;
                            f.type = e.bandcamp.type
                        }
                        this.render_preview(f)
                    } else {
                        this.switch_tab(this.$external_audio_tab);
                        f.artwork = e.audio_artwork;
                        f.href = e.audio_url;
                        f.stream = e.audio_url;
                        f.Title = e.id3_tags.Title;
                        f.Artist = e.id3_tags.Artist;
                        f.Album = e.id3_tags.Album;
                        this.render_preview(f);
                        this.$audio_options.hide()
                    }
                }
            }
        },
        cache_selectors_view: function() {
            this.$tabs = this.$(".audio_tabs");
            this.$tab_selectors = this.$tabs.find("a");
            this.$audio_options = this.$(".audio_option");
            this.$audio_search = this.$("#audio_search");
            this.$audio_upload = this.$("#audio_upload");
            this.$audio_upload_tab = this.$("#tab_audio_upload");
            this.$external_audio_tab = this.$("#tab_audio_external");
            this.$audio_search_field = this.$("#audio_search_field");
            this.$audio_search_results = this.$("#audio_search_results");
            this.$audio_results_spotify = this.$("#audio_search_results_spotify");
            this.$audio_results_soundcloud = this.$("#audio_search_results_soundcloud");
            this.$audio_search_error = this.$("#audio_search_error");
            this.$audio_no_results = this.$("#audio_search_no_results");
            this.$audio_preview_container = this.$(".audio_preview_container");
            this.$search_loader = this.$("#audio_search .search_loader");
            this.$post_three = this.$("#post_three");
            this.$tag_editor = b(".tag_editor");
            this.$audio_description = this.$("#audio_description");
            this.$file_list = this.$("#file_list");
            this.$audio_file_input = this.$("#audio_file_input");
            this.$file_upload = this.$(".file_upload");
            this.$preview = b("#preview");
            this.$upload_tos = b("#upload_tos");
            this.$confirm_tos = b("#confirm_tos")
        },
        editor: function() {
            var c = b.extend({}, Tumblr.PostForms.editor_defaults, {
                type: this.editor_type,
                focus: (this.model.get("edit") || this.model.get("reblog")) ? "focus_end": true
            });
            Tumblr.Editor.render(this.editor_id, c);
            if (this.editor_type !== "rich") {
                this.$("#post_two").autoexpand().resizeanchor()
            }
        },
        editor_focus: function(c) {
            this.placeholder(null, this.$(".inset_label .label"))
        },
        placeholder: function(d, c) {
            if (d) {
                d.preventDefault();
                c = b(d.currentTarget);
                if (c.is("label.optional")) {
                    c = c.prevAll(".label")
                }
                if (this.editor_type !== "rich") {
                    this.$("#post_two").focus()
                }
            }
            c.fadeOut(250);
            c.nextAll(".optional").fadeOut(250);
            if (tinyMCE && this.editor_type === "rich") {
                tinymce.execCommand("mceFocus", false, c.data("for"))
            }
        },
        keydown: function(c) {
            if (c.keyCode === 13) {
                c.preventDefault()
            }
        },
        audio_search: _.debounce(function(d) {
            this.$audio_search_error.hide();
            var c = this.$audio_search_field.val();
            if (this.spotify_pattern.test(c) || this.soundcloud_pattern.test(c) || this.bandcamp_pattern.test(c)) {
                this.set_external(c);
                return 
            }
            if (c !== this.last_value) {
                this.last_value = c;
                if (c.length > 2) {
                    this.$search_loader.show();
                    this.model.search(c)
                } else {
                    this.$audio_search_results.hide();
                    this.$search_loader.fadeOut(this.fade_duration)
                }
            }
        }, 400),
        external_url_keyup: _.debounce(function(c) {
            this.external_url(b(c.currentTarget).val())
        }, 400),
        external_url_paste: function(c) {
            this.external_url(b(c.currentTarget).val())
        },
        external_url: function(c) {
            this.$audio_description.show();
            this.$tag_editor.show();
            if (this.spotify_pattern.test(c) || this.soundcloud_pattern.test(c) || this.bandcamp_pattern.test(c) || this.mp3_pattern.test(c)) {
                this.set_external(c);
                return 
            }
        },
        set_external: function(h) {
            var g = {};
            var c = h.match(this.spotify_pattern);
            var d = h.match(this.soundcloud_pattern);
            var i = h.match(this.bandcamp_pattern);
            var e = false;
            if (c) {
                if (Tumblr.use_spotify_metadata) {
                    this.model.get_spotify_data(h, _.bind(this.render_preview, this))
                } else {
                    g.provider = "spotify";
                    var f = c[0].split(/[\/|:]/);
                    f[0] = "spotify";
                    g.href = f.join(":");
                    e = true
                }
            } else {
                if (d) {
                    this.model.get_soundcloud_data(h, _.bind(this.render_preview, this))
                } else {
                    if (i) {
                        this.model.get_bandcamp_data(h, _.bind(this.render_preview, this))
                    } else {
                        e = true;
                        g.stream = g.href = h
                    }
                }
            }
            this.$("#tab_audio_external").trigger("click");
            this.$audio_search_field.val("");
            this.$post_three.val(h);
            if (e) {
                this.render_preview(g)
            }
        },
        search_result_click: function(g) {
            g.preventDefault();
            var d;
            var c = b(g.currentTarget);
            var f = c.data();
            this.render_preview(f)
        },
        render_preview: function(g) {
            var f;
            var d = g.href;
            var h = g.provider;
            this.destroy_preview();
            g.reblog = this.post && this.post.is_reblog;
            if (h === "spotify") {
                if (g.title) {
                    g.Title = g.title
                }
                if (g.artist) {
                    g.Artist = g.artist
                }
                if (g.album) {
                    g.Album = g.album
                }
                g.Track = g.track || "";
                g.Year = g.year || "";
                g.artwork = g.artwork || ""
            } else {
                if (h === "soundcloud") {
                    if (g.title) {
                        g.Title = g.title
                    }
                    if (!_.isUndefined(this.post.kind)) {
                        g.kind = this.post.kind
                    }
                } else {
                    if (h === "bandcamp") {
                        if (g.title) {
                            g.Title = g.title
                        }
                        if (g.artist) {
                            g.Artist = g.artist
                        }
                        if (g.album) {
                            g.Album = g.album
                        }
                    }
                }
            }
            var c = false;
            if (h === "spotify") {
                f = _.template(this.$spotify_preview_template)
            } else {
                if (h === "soundcloud") {
                    if (g.kind === "playlist") {
                        f = _.template(this.$soundcloud_playlist_preview_template)
                    } else {
                        f = _.template(this.$soundcloud_track_preview_template)
                    }
                } else {
                    if (h === "bandcamp") {
                        f = _.template(this.$bandcamp_preview_template)
                    } else {
                        if (Tumblr.AudioPlayer) {
                            f = _.template(this.$preview_player_template);
                            c = true
                        } else {
                            f = _.template(this.$upload_preview_template)
                        }
                    }
                }
            }
            this.$main_content.before(f(_.extend(_.clone(this.template_helpers), g)));
            if (!_.isUndefined(this.post.reblog_tree)) {
                var e = _.template(this.$reblog_tree_toggle_subtemplate);
                this.$main_content.before(e({
                    post: this.post
                }))
            }
            this.$post_three.blur();
            this.$main_content.addClass("audio_preview");
            this.$audio_options.hide();
            this.$tabs.hide();
            this.$audio_description.show();
            this.$tag_editor.show();
            this.$preview_player = b(".preview_player");
            this.$audio_preview_container = this.$(".audio_preview_container");
            this.$audio_preview = b("#audio_preview_track");
            this.$id3_editors = b("#audio_id3_editor .inplace_edit");
            this.$preuploaded_url = b("#preuploaded_url");
            this.$artwork = b("#artwork");
            this.$artwork_field = b("#upload_artwork");
            this.$audio_album_art = b("#audio_album_art");
            this.$upload_artwork = b("#upload_artwork");
            this.$remove_artwork = b("#remove_artwork");
            this.$pre_upload = b("#pre_upload");
            this.$artwork_pre_upload = b("#artwork_pre_upload");
            this.$preview_player_container = this.$audio_preview_container.find(".audio_preview_player_container");
            if (c && Tumblr.AudioPlayer) {
                this.$preview_player_container.children(".audio_player_container").remove();
                this.audio_player = new Tumblr.AudioPlayer({
                    prepend_to: this.$preview_player_container,
                    extra_classes: g.extraClasses,
                    post_id: "audio_preview",
                    service: h,
                    tracks: [{
                        stream_url: g.stream,
                        cover: g.artwork,
                        track: g.Title || "",
                        artist: g.Artist || "",
                        album: g.Album || ""
                    }
                    ],
                    preview: !this.model.get("reblog")
                });
                if (!this.model.get("reblog")) {
                    this.audio_player.$container.addClass("has_art")
                }
                if (this.audio_player.flash_error) {
                    this.$audio_preview_container.addClass("no_player")
                }
                if (this.audio_player.$container.hasClass("has_visualizer")) {
                    this.$audio_preview_container.addClass("has_visualizer")
                }
            }
            if (h === "upload") {
                this.$id3_editors.inplaceedit();
                this.$post_three.val("");
                this.$pre_upload.val("1");
                if (d) {
                    this.$preuploaded_url.val(d);
                    this.$pre_upload.val("1")
                }
                this.model.init_uploader(b("#art_upload_input"), {
                    drop: function(i) {
                        i.stopPropagation()
                    },
                    upload_url: "/svc/post/upload_album_art",
                    dropZone: b("#upload_art"),
                    custom_validation: this.model.validate_artwork
                })
            } else {
                if (h !== "spotify") {
                    this.model.init_uploader(b("#art_upload_input"), {
                        upload_url: "/svc/post/upload_album_art",
                        dropZone: b("#upload_art"),
                        custom_validation: this.model.validate_artwork
                    })
                }
                this.enable_submit();
                this.$post_three.val(d);
                this.$preuploaded_url.val("");
                this.$pre_upload.val("")
            }
            this._add_reblog_tree_tooltip()
        },
        destroy_preview: function() {
            b(".audio_preview_container").remove();
            this.disable_submit()
        },
        destroy_upload: function() {
            b(".upload_container").remove();
            this.$main_content.removeClass("audio_upload")
        },
        render_search_results: function(e) {
            var d;
            this.$search_loader.fadeOut(this.fade_duration);
            this.$audio_search_results.show();
            this.$audio_search_error.hide();
            if (e.type === "spotify") {
                d = _.template(this.$spotify_template);
                this.$audio_results_spotify.html(d(_.extend(_.clone(this.template_helpers), e)))
            } else {
                if (e.type == "soundcloud") {
                    d = _.template(this.$soundcloud_template);
                    this.$audio_results_soundcloud.html(d(_.extend(_.clone(this.template_helpers), e)))
                } else {}
            }
            var c = this.$audio_search_results.find("li");
            if (c.length) {
                this.$audio_no_results.hide()
            } else {
                this.$audio_no_results.show()
            }
        },
        render_server_error: function(c) {
            this.$("#audio_search_results_" + c).empty();
            var d = this.$audio_search_results.find("li");
            if (!d.length) {
                this.$audio_search_results.show();
                this.$audio_search_error.show();
                this.$search_loader.fadeOut(this.fade_duration)
            } else {
                this.$audio_search_error.hide()
            }
        },
        animate_results: function(c) {
            c.first().fadeIn(350, function() {
                b(this).show()
            });
            if (c.length > 0) {
                this.animate_timer = setTimeout(_.bind(function() {
                    this.animate_results(c.slice(1))
                }, this), 50)
            } else {
                clearTimeout(this.animate_timer)
            }
        },
        dismiss_preview: function() {
            this.destroy_preview();
            this.$main_content.removeClass("audio_preview");
            this.$audio_options.filter(".active").show();
            this.$tabs.show();
            this.$post_three.val("");
            this.$preuploaded_url.val("");
            this.$file_upload.show();
            if (this.media_element) {
                this.media_element.pause()
            }
            this.model.enable_uploader(this.$audio_file_input)
        },
        preview_track: function(c) {
            if (!_.isFunction(MediaElement)) {
                return 
            }
            if (this.media_element) {
                this.media_element.pause()
            }
            if (this.$preview_player.hasClass("play")) {
                this.$audio_preview.get(0).src = c;
                if (!this.media_element) {
                    this.media_element = new MediaElement("audio_preview_track", {
                        pluginPath: "/javascript/mediaelement/",
                        success: function(d) {
                            d.play()
                        },
                        error: function() {}
                    })
                } else {
                    this.media_element.setSrc(this.$audio_preview.get(0).src);
                    this.media_element.play()
                }
                this.$preview_player.removeClass("play").addClass("stop")
            } else {
                this.$preview_player.removeClass("stop").addClass("play")
            }
        },
        display_file_list: function(f, c, h) {
            var g = (h.selector === "#art_upload_input") ? true: false;
            this.$("#tab_audio_upload").trigger("click");
            this.hide_errors();
            var d = {
                name: f[0].name,
                prettySize: Tumblr.$.format_file_size(f[0].size),
                className: c
            };
            var e = _.template(this.$upload_list_template);
            this.$main_content.before(e(_.extend(_.clone(this.template_helpers), d)));
            this.initiate_upload(g);
            this.$progress_bar = b(".upload_container .progress_bar");
            this.$processing = b(".upload_container .processing")
        },
        file_errors: function(d, c) {
            this.$("#tab_audio_upload").trigger("click");
            this.display_errors(d)
        },
        initiate_upload: function(c) {
            if (c) {
                this.$("#upload_artwork").val("")
            } else {
                this.$("#pre_upload").val("1");
                this.$upload_tos.show();
                this.$tos_container.show();
                this.$main_content.addClass("audio_upload")
            }
            this.$tabs.hide();
            this.$audio_description.show();
            this.$tag_editor.show();
            this.$file_list.show();
            this.$file_upload.hide();
            this.hide_errors()
        },
        upload_progress: function(c) {
            this.$progress_bar.css({
                width: c + "%"
            });
            if (c > 99) {
                this.$processing.addClass("active")
            }
        },
        upload_complete: function(c, d) {
            if (d.selector === "#art_upload_input") {
                this.artwork_upload_complete(c)
            } else {
                this.audio_upload_complete(c)
            }
            this.destroy_upload()
        },
        audio_upload_complete: function(d) {
            var c = b.extend({
                provider: "upload",
                stream: d.response[0].url,
                href: d.response[0].url,
                artwork: d.response[0].album_art_url,
                upload_artwork: "1"
            }, d.response[0].id3);
            this.render_preview(c)
        },
        artwork_upload_complete: function(e) {
            var d = e.response[0].url;
            this.$artwork.show();
            if (this.$artwork.find("img").length) {
                this.$artwork.find("img").attr("src", d)
            } else {
                var c = b("<img/>", {
                    src: d
                });
                this.$artwork.append(c)
            }
            this.$artwork_field.val(d);
            this.$remove_artwork.val("");
            this.$artwork_pre_upload.val("1");
            this.$audio_album_art.removeClass("empty")
        },
        upload_failed: function(c) {
            this.display_errors({
                error: c
            });
            this.$file_upload.show();
            this.$tabs.show();
            this.$audio_description.hide();
            this.$tag_editor.hide();
            this.$tos_container.hide();
            this.destroy_upload()
        },
        dismiss_upload: function(c) {
            if (c) {
                c.preventDefault()
            }
            this.model.cancel_upload();
            this.destroy_upload();
            this.$file_upload.show();
            this.$tabs.show()
        },
        replace_artwork: function(d) {
            if (d) {
                d.preventDefault()
            }
            var c = b(d.currentTarget);
            this.$artwork.hide();
            this.$audio_album_art.addClass("empty");
            this.$upload_artwork.val("");
            this.$artwork_pre_upload.val("");
            this.$remove_artwork.val("1")
        },
        tab_switcher: function(d) {
            d.preventDefault();
            var c = b(d.currentTarget);
            this.switch_tab(c)
        },
        switch_tab: function(c) {
            this.$tab_selectors.removeClass("active");
            c.addClass("active");
            this.$audio_options.removeClass("active").hide();
            var d = this.$(c.attr("href"));
            d.addClass("active").show();
            if (c.attr("id") !== "tab_audio_upload") {
                this.$upload_tos.hide();
                this.$post_form.removeClass("no_preview")
            } else {
                this.$post_form.addClass("no_preview")
            }
            this.hide_errors()
        }
    })
})(jQuery, Tumblr);
/*! scripts/posting/view/video_view.js */
(function(b, a) {
    Tumblr.PostForms.Video = Tumblr.PostForms.BaseView.extend({
        last_term: "",
        recognized_patterns: [],
        events: function() {
            return _.defaults({
                "click .label": "placeholder",
                "click .optional": "placeholder",
                "keyup #post_one": "type_embed_code",
                "paste #post_one": "paste_embed_code",
                "focus #post_two": "editor_focus"
            }, Tumblr.PostForms.BaseView.prototype.events)
        },
        find_tags: function(f, c, h) {
            if (!c) {
                c = "iframe"
            }
            if (!h) {
                h = "src"
            }
            var g = new RegExp("<(?:" + c + ")(\\s[^>]*)?>", "mig");
            var e = new RegExp(".*\\s(?:" + h + ")\\s*=\\s*(\"([^\"]*)\"|'([^']*)').*", "i");
            var d = f.match(g);
            if (!d) {
                return []
            }
            b.each(d, function(k, j) {
                d[k] = {
                    tag: j,
                    prop: e.test(j) ? j.replace(e, "$2$3"): false
                }
            });
            return d
        },
        match_service: function(e) {
            var d;
            var c = false;
            b.each(this.recognized_patterns, function(f, g) {
                d = g.exp.exec(e);
                if (d) {
                    c = {
                        orig_embed_code: e,
                        url: d[1],
                        video_id: d[2],
                        service: g.service
                    }
                }
            });
            return c
        },
        initialize: function(c) {
            this.options = c || {};
            this.constructor.__super__.initialize.call(this, this.options);
            this.$sub_template = b.trim(b("#video_subtemplate").html());
            this.$upload_list_template = b.trim(b("#video_upload_list_subtemplate").html());
            this.$upload_tos_template = b.trim(b("#upload_tos_subtemplate").html());
            this.$reblog_tree_toggle_subtemplate = b.trim(b("#reblog_tree_toggle_subtemplate").html());
            b.each(Tumblr.video_regexes, b.proxy(function(f, d) {
                this.recognized_patterns.push({
                    exp: new RegExp(f, "mi"),
                    service: d
                })
            }, this));
            this.parse_embed_field = _.debounce(function(f) {
                var d = this.parse_embed_code(b(f.currentTarget).val());
                this.$valid_embed_code.val(d ? "1" : "");
                this.change();
                return d
            }, 750);
            this.model.on("change:upload_progress", this.upload_progress, this);
            this.model.on("change:upload_complete", this.upload_complete, this);
            this.model.on("change:upload_failed", this.file_errors, this);
            this.model.on("change:upload_file_error", this.file_errors, this);
            this.model.on("change:send_file", this.display_file_list, this);
            this.model.on("change:upload_file_seppuku", this.refresh_upload_selector, this);
            this.$post_form.on("click", ".dismiss_preview", _.bind(function(d) {
                d.preventDefault();
                this.dismiss_preview()
            }, this));
            this.$post_form.on("click", "#file_list .cancel", _.bind(this.dismiss_upload, this));
            this.model.on("post:form:animation:hide", b.proxy(function(d) {
                this.destroy_preview()
            }, this))
        },
        render_view: function(f) {
            var e = _.template(this.$sub_template);
            this.$post_content_type.html(e(_.extend(_.clone(this.template_helpers), this.model.toJSON())));
            this.editor();
            this.cache_selectors_view();
            this.messages = this.$video_preview_container.find(".message").data();
            this.post = this.model.get("post");
            if (b.browser.safari && (!/chrome/.test(navigator.userAgent.toLowerCase()))) {
                this.$video_file_input.attr("accept", "")
            }
            if (b.browser.webkit && (/chrome/.test(navigator.userAgent.toLowerCase()))) {
                this.$video_file_input.attr("accept", ".mp4,.mov,.wmv,video/*")
            } else {
                if (b.browser.mozilla) {
                    this.$video_file_input.attr("accept", "video/*")
                } else {
                    this.$video_file_input.attr("accept", "")
                }
            }
            var c = _.template(this.$upload_tos_template);
            this.$main_content.after(c({}));
            this.$tos_container = b("#upload_tos").hide();
            this.$confirm_tos = b("#confirm_tos");
            if (typeof Tumblr.video_seconds_remaining === "number") {
                this.$video_upload.find(".video_time_remaining").text(Tumblr.video_seconds_remaining)
            }
            this.$post_one.autoexpand({
                minHeight: 120
            }).resizeanchor();
            if (_.isEmpty(this.post)) {
                this.hide_editors()
            }
            if (this.model.get("reblog") || (this.model.get("edit")&&!this.post.is_direct_video&&!this.post.is_reblog)) {} else {
                this.$(".autofocus").focus();
                this.model.init_uploader(this.$video_file_input, {
                    error_msg: {
                        errorSize: "File is too big. Max 100MB.",
                        errorType: "Only video files are allowed.",
                        errorTime: "Video is too long. Must be 5 minutes or less."
                    }
                })
            }
            Tumblr.Editor.on("tinymce.focus", this.editor_focus, this);
            Tumblr.PlaceHolders.init({
                clear_on_submit: true
            });
            this.$pre_upload.val("");
            if (this.model.get("edit") || this.model.get("reblog")) {
                if (this.post.is_direct_video) {
                    this.model.on("post:form:animation:start", function() {
                        this.render_preview(b.extend({}, this.post.video, {
                            width: this.post.video.dimensions_dashboard.width,
                            height: this.post.video.dimensions_dashboard.height,
                            embed_code_safe: this.post.video.embed_code
                        }));
                        if (this.post.is_reblog) {
                            this.$video_preview_container.addClass("reblog");
                            this.$(".dismiss_preview").remove()
                        }
                    }, this)
                } else {
                    this.model.on("post:form:animation:start", function() {
                        if (!this.post.video_embed.service && this.post.video_safe_iframe) {
                            this.post.video_embed.embed_code = this.post.video_safe_iframe
                        }
                        this.$valid_embed_code.val("1");
                        this.render_preview(this.post.video_embed);
                        if (this.post.is_reblog) {
                            this.$video_preview_container.addClass("reblog");
                            this.$(".dismiss_preview").remove()
                        }
                    }, this)
                }
            }
            if (!_.isUndefined(this.post.reblog_tree)) {
                var d = _.template(this.$reblog_tree_toggle_subtemplate);
                this.$main_content.find("#video_caption").before(d({
                    post: this.post
                }))
            }
            if (typeof f === "function") {
                f()
            }
            return this
        },
        cache_selectors_view: function() {
            this.$video_options_container = this.$("#video_options_container");
            this.$video_options = this.$(".video_option");
            this.$video_upload = this.$("#video_upload");
            this.$video_embed = this.$("#video_embed");
            this.$post_one = this.$("#post_one");
            this.$main_content = b(".main_content");
            this.$video_caption = this.$("#video_caption");
            this.$tag_editor = b(".tag_editor");
            this.$file_list = this.$("#file_list");
            this.$video_file_input = this.$("#video_file_input");
            this.$file_upload = this.$(".file_upload");
            this.$video_upload_container = this.$(".upload_container");
            this.$pre_upload = this.$("#pre_upload");
            this.$valid_embed_code = this.$("#valid_embed_code");
            this.$preuploaded_url = b("#preuploaded_url");
            this.$preuploaded_ch = b("#preuploaded_ch");
            this.$video_preview_container = this.$("#video_preview_container");
            this.$video_preview = this.$("#video_preview");
            this.$video_preview_loading = b("#video_preview_loading");
            this.$post_button = b('#post_content button[type="submit"]');
            this.$preview = b("#preview");
            this.$input_caption = this.$post_one
        },
        refresh_upload_selector: function(c) {
            this.$video_file_input = this.$("#video_file_input")
        },
        editor: function() {
            var c = b.extend({}, Tumblr.PostForms.editor_defaults, {
                type: this.editor_type,
                focus: (this.model.get("edit") || this.model.get("reblog")) ? "focus_end": true
            });
            Tumblr.Editor.render(this.editor_id, c);
            if (this.editor_type !== "rich") {
                this.$("#post_two").autoexpand().resizeanchor()
            }
        },
        editor_focus: function(c) {
            this.placeholder(null, this.$(".inset_label .label"))
        },
        placeholder: function(d, c) {
            if (d) {
                d.preventDefault();
                c = b(d.currentTarget);
                if (c.is("label.optional")) {
                    c = c.prevAll(".label")
                }
                if (this.editor_type !== "rich") {
                    this.$("#post_two").focus()
                }
            }
            c.fadeOut(250);
            c.nextAll(".optional").fadeOut(250);
            if (tinyMCE && this.editor_type === "rich") {
                tinymce.execCommand("mceFocus", false, c.data("for"))
            }
        },
        type_embed_code: function(c) {
            switch (c.keyCode) {
            case 17:
            case 18:
            case 27:
            case 33:
            case 34:
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 91:
            case 93:
                return false;
            default:
                break
            }
            return this.parse_embed_field(c)
        },
        paste_embed_code: function(c) {
            return this.parse_embed_field(c)
        },
        parse_embed_code: function(d) {
            var f, c, e = false;
            if (!e && b.trim(d).match(/^https?:\/\/[^\/\.]+\.[^\/]+/i)) {
                e = this.match_service(d)
            }
            if (!e && (f = this.find_tags(d, "iframe|embed|script", "src")).length) {
                e = this.match_service(f[0].prop)
            }
            if (!e && (c = this.find_tags(d, "object", "data")).length) {
                e = this.match_service(c[0].prop)
            }
            if (!e) {
                e = this.match_service(d)
            }
            if (!e) {
                b.each(_.union(f, c), function(h, g) {
                    if (g.prop) {
                        e = {
                            orig_embed_code: d,
                            url: "",
                            service: ""
                        };
                        return false
                    }
                });
                if (e) {
                    this.$video_preview_container.addClass("unavailable").find(".message").text(this.messages.unavailable);
                    this.$video_options_container.addClass("no_upload");
                    this.show_editors();
                    return true
                }
            }
            if (!e) {
                return false
            }
            if (this.xhr) {
                this.xhr.abort()
            }
            this.$video_preview_container.addClass("loading");
            this.xhr = this.model.get_video_data(d, _.bind(this.accept_embed_code, this), _.bind(this.reject_embed_code, this));
            this.$video_options_container.hide();
            this.show_editors();
            return true
        },
        accept_embed_code: function(c) {
            if (!(c && c.service)) {
                this.reject_embed_code()
            }
            this.render_preview(c);
            this.$valid_embed_code.val(c ? "1" : "");
            this.change();
            return true
        },
        reject_embed_code: function() {
            this.$video_preview_container.removeClass("loading");
            this.$video_options_container.show();
            this.display_errors(__("Sorry, that URL is being weird. Might want to try the embed code instead."));
            return true
        },
        render_preview: function(e) {
            e = b.extend({
                width: "500",
                height: "281",
                orig_embed_code: "",
                url: "",
                service: ""
            }, e);
            this.$input_caption.blur();
            this.destroy_preview();
            var c = b("#video_preview_subtemplate");
            if (!c) {
                return false
            }
            var d = _.template(b.trim(c.html()));
            this.$video_preview = b(d(_.extend(_.clone(this.template_helpers), e)));
            this.$video_preview_container.prepend(this.$video_preview);
            this.$video_preview_container.addClass("player");
            this.$video_options_container.hide();
            this.show_editors(true);
            return true
        },
        show_editors: function(c) {
            this.$video_caption.show();
            this.$tag_editor.show();
            if (c) {
                this.$post_one.focus()
            }
        },
        hide_editors: function() {
            this.$video_caption.hide();
            this.$tag_editor.hide()
        },
        destroy_local_player: function() {
            if (this.preview_player) {
                if (_.isFunction(this.preview_player.teardown)) {
                    this.preview_player.teardown()
                } else {
                    this.preview_player.destroy()
                }
                delete this.preview_player
            }
            if (this.$local_preview) {
                this.$local_preview.remove();
                delete this.$local_preview
            }
        },
        destroy_preview: function() {
            this.destroy_local_player();
            this.$video_preview_container.removeClass("player");
            this.$video_preview.remove();
            this.$video_preview = b()
        },
        destroy_upload: function() {
            this.$video_upload_container.remove();
            this.$main_content.removeClass("video_upload");
            this.$video_upload_container = this.$file_list = b();
            this.$progress_bar = this.$processing = b()
        },
        dismiss_preview: function() {
            this.$("#keep_video").val("");
            this.$post_one.val("");
            this.$valid_embed_code.val("");
            this.destroy_preview();
            this.$video_preview_container.removeClass("player loading loaded failed unavailable");
            this.$video_options_container.removeClass("no_upload").show();
            if (_.isEmpty(this.post)) {
                this.hide_editors()
            }
            this.$preuploaded_url.val("");
            this.$pre_upload.val("");
            this.$tos_container.hide();
            this.$confirm_tos.prop("checked", "");
            this.change();
            this.$input_caption.focus()
        },
        display_file_list: function(f, c) {
            this.local_file = f[0];
            this.$pre_upload.val("1");
            this.$confirm_tos.prop("checked", "");
            this.hide_errors();
            var d = {
                name: f[0].name,
                prettySize: Tumblr.$.format_file_size(f[0].size),
                className: c
            };
            this.$video_upload_container.remove();
            var e = _.template(this.$upload_list_template);
            this.$video_upload_container = b(e(_.extend(_.clone(this.template_helpers), d)));
            this.$file_list = this.$video_upload_container.find("#file_list");
            this.$progress_bar = this.$video_upload_container.find(".progress_bar");
            this.$processing = this.$video_upload_container.find(".processing");
            this.$main_content.before(this.$video_upload_container);
            this.initiate_upload()
        },
        file_errors: function(c) {
            this.$video_upload_container.addClass("error");
            if (this.$processing) {
                this.$processing.removeClass("active")
            }
            this.display_errors(c)
        },
        initiate_upload: function() {
            this.destroy_preview();
            this.$main_content.addClass("video_upload");
            this.$video_options_container.hide();
            this.show_editors(true);
            this.$file_list.show();
            this.$tos_container.show();
            this.hide_errors()
        },
        upload_progress: function(c) {
            this.$progress_bar.css({
                width: c + "%"
            });
            if (c > 99) {
                this.$processing.addClass("active")
            }
        },
        upload_complete: function(c) {
            this.$processing.removeClass("active");
            this.display_title = this.local_file.name;
            if (!c.errors ||!c.errors.length) {
                this.$video_upload_container.addClass("success");
                this.$preuploaded_url.val(c.response[0].key);
                this.$preuploaded_ch.val(c.response[0].ch);
                if (c.response[0].duration) {
                    this.display_title += " (" + c.response[0].duration + ")"
                }
            } else {
                this.$file_list.addClass("error");
                this.file_errors(c.errors);
                this.cancel_upload();
                return false
            }
            this.change();
            this.destroy_upload();
            if (!(window.FileReader && window.URL && window.URL.createObjectURL)) {
                this.$video_preview_container.addClass("unavailable").find(".message").text(this.display_title || this.messages.unavailable)
            } else {
                c.width = c.response[0].width || 500;
                c.height = c.response[0].height || 281;
                c.height = Math.round(500 / c.width * c.height);
                c.width = 500;
                this.render_preview({
                    service: "local",
                    embed_code: "",
                    width: c.width,
                    height: c.height
                });
                this.$local_preview = b("<video/>", {
                    id: "video_local_preview",
                    "class": "video-js vjs-default-skin",
                    controls: true,
                    "data-setup": "{}"
                });
                b("#watch_video_post_preview").append(this.$local_preview);
                this.preview_player = new Tumblr.Prima.CrtPlayer("video_local_preview", {
                    attributes: {
                        watch: false
                    },
                    vjsOptions: {
                        file: this.local_file
                    }
                });
                this.preview_player.on("ready", this.onRenderVideoPreview, this);
                this.preview_player.render()
            }
        },
        onRenderVideoPreview: function() {
            this.$local_preview = this.preview_player.$el;
            this.preview_player.player.on("error", _.bind(this.onVideoPreviewError, this));
            this.$local_preview.attr({
                width: "",
                height: ""
            }).css({
                width: "",
                height: ""
            }).removeClass("vjs-default-skin").addClass("crt-skin-default");
            b("#video_preview_post_preview").hide();
            b("#watch_video_post_preview").show()
        },
        onVideoPreviewError: function(c) {
            this.$video_preview_container.removeClass("player").addClass("unavailable").find(".message").text(this.display_title || this.messages.unavailable);
            _.defer(_.bind(this.destroy_preview, this))
        },
        dismiss_upload: function(c) {
            this.cancel_upload(c);
            this.$post_one.val("");
            this.hide_errors()
        },
        cancel_upload: function(c) {
            if (c) {
                c.preventDefault()
            }
            this.model.cancel_upload();
            this.destroy_upload();
            this.hide_editors();
            this.$file_upload.show();
            this.$tos_container.hide();
            this.$video_options_container.show()
        }
    })
})(jQuery, Tumblr);
/*! scripts/posting/view/render_post_view.js */
(function(b, a) {
    Tumblr.PostForms.RenderPost = Backbone.View.extend({
        load_more_posts: function(e, f, j) {
            var g = (typeof j == "undefined") ? "before": j;
            var c = b("#new_post_buttons").next().find(".post");
            var k = c.length ? c.data("post-id"): 0;
            var i = "/svc/post" + f + "/" + j + "/" + k;
            var h = b("body").scrollTop();
            var d = b(".l-container").height();
            this.render_posts(i, b("#new_post, #flash_notifications").last().parent("li"), function(o, m) {
                if (typeof e === "number") {
                    b("html, body").animate({
                        scrollTop: e
                    }, 250)
                } else {
                    if (typeof e === "object") {
                        var r = e.offset();
                        b("html, body").animate({
                            scrollTop: r.top
                        }, 250)
                    } else {
                        if (e) {
                            var n = b(".l-container").height();
                            var l = n - d;
                            var q = h + l;
                            b("html, body").animate({
                                scrollTop: q
                            }, 0)
                        }
                    }
                }
                Tumblr.Events.trigger("posts:load");
                if (window._gaq !== undefined) {
                    try {
                        _gaq.push(["_trackPageview", f])
                    } catch (p) {}
                }
            }, function(l) {
                l.find('[name="redirect_to"]').val(f);
                l.find(".post_controls a.post_control").each(function(n, m) {
                    b(m).attr("href", b(m).attr("href").replace(/([\?\&]redirect_to=)([^?&]+)/i, "$1" + encodeURIComponent(f)))
                })
            });
            return this
        },
        render_posts: function(c, e, f, d) {
            b.ajax({
                url: c,
                type: "get",
                success: function(h) {
                    var g = b(b.trim(h));
                    if (typeof d === "function") {
                        d.apply(this, [g])
                    }
                    g.insertAfter(e);
                    if (g.filter(".post, .post_container").length) {
                        b(".no_posts_found").remove()
                    }
                    if (Tumblr.AudioPlayer) {
                        _.delay(_.bind(function() {
                            Tumblr.AudioPlayer.replace_placeholders(g, true)
                        }, this), 750)
                    }
                    if (typeof f === "function") {
                        return f.apply(this, [h, g])
                    }
                    b("html, body").animate({
                        scrollTop: 0
                    }, 250)
                },
                error: function() {
                    window.location.reload()
                }
            });
            return this
        },
        render: function() {
            var f = b("#new_post").parent("li").nextAll("li .post").first();
            var c = f.length ? f.data("id"): 0;
            var d = this.page_root || window.location.pathname.split("?")[0].replace(/\/$/, "");
            var e = "/svc/post" + d + "/before/" + c;
            b.ajax({
                url: e,
                type: "get",
                success: function(h) {
                    var g = b(h);
                    g.find('[name="redirect_to"]').val(d);
                    g.find(".post_controls a.post_control").each(function(k, j) {
                        b(j).attr("href", b(j).attr("href").replace(/([\?\&]redirect_to=)([^?&]+)/i, "$1" + encodeURIComponent(d)))
                    });
                    b("#new_post, #flash_notifications").last().parent("li").after(g);
                    b("html, body").animate({
                        scrollTop: 0
                    }, 250);
                    if (window._gaq !== undefined) {
                        try {
                            _gaq.push(["_trackPageview", d])
                        } catch (i) {}
                    }
                },
                error: function() {
                    window.location.reload()
                }
            });
            return this
        }
    })
})(jQuery, Tumblr);
/*! scripts/posting/view/tag_editor_view.js */
(function(c, b) {
    var a = Backbone.View.extend({
        events: {
            focus: "focus",
            click: "focus",
            "keypress .editor": "keypress",
            "keydown .editor": "keydown",
            "keyup .editor": "keyup",
            "click .tag": "remove_tag",
            "click #tag_suggest a": "__click_popover_tags",
            "mouseenter #tag_suggest a": "__mouseenter_popover_tags",
            "mouseleave #tag_suggest a": "__mouseleave_popover_tags"
        },
        initialize: function(d) {
            this.options = d || {};
            this.$editor_wrapper = this.$(".editor_wrapper");
            this.$editor = this.$(".editor");
            this.$post_tags = this.$(".post_tags");
            this.endpoint = this.options.endpoint || "/svc/tag_suggest/";
            this.store = Tumblr.USER_TAGS || [];
            this.threshold = 2;
            this.limit = 5;
            this.visible = false;
            this.cache = {};
            this.popover = this.$("#tag_suggest");
            this.form_key = c("#tumblr_form_key").attr("content");
            this.keyevents = {
                bind_key_down: _.bind(this.document_keydown, this)
            };
            this.outside_events = {
                click: _.bind(this.__outside_click_focus, this),
                focus: _.bind(this.__outside_click_focus, this)
            };
            c(document).on("click", this.outside_events.click);
            c(document).on("focus", this.outside_events.focus);
            document.addEventListener("tinymce.focus", this.outside_events.focus, this);
            this.render()
        },
        __outside_click_focus: function(f) {
            var d = c(f.currentTarget);
            if (!d.is("#tag_suggest a") && this.$editor.val()) {
                this.update(this.$editor.val())
            }
            this.hide_popover()
        },
        __click_popover_tags: function(f) {
            var d = c(f.currentTarget);
            var g = d.text();
            this.update(g);
            this.popover.hide();
            f.stopPropagation();
            f.preventDefault();
            this.focus()
        },
        __mouseenter_popover_tags: function(f) {
            if (this.focused_item) {
                this.focused_item.blur()
            }
            var d = c(f.currentTarget);
            d.focus()
        },
        __mouseleave_popover_tags: function(f) {
            var d = c(f.currentTarget);
            d.blur()
        },
        _escapeRegExp: function(d) {
            return d.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|\~\`\!\@\#]/g, "\\$&")
        },
        hide_popover: function() {
            if (this.popover) {
                this.popover.hide();
                this.visible = false
            }
            this.unbind_key_nav()
        },
        show_popover: function() {
            if (this.popover) {
                this.popover.show();
                this.visible = true
            }
            this.bind_key_nav()
        },
        destroy: function() {
            this.undelegateEvents();
            c(document).off("click", this.outside_events.click);
            c(document).off("focus", this.outside_events.focus);
            document.removeEventListener("tinymce.focus", this.outside_events.focus, this)
        },
        next: function() {
            this.$editor.blur();
            this.currentIndex++;
            this.set_active("next")
        },
        previous: function() {
            this.$editor.blur();
            this.currentIndex--;
            this.set_active("previous")
        },
        set_active: function(f) {
            var d = c("#tag_suggest a");
            var e = d.filter(":focus");
            if (e.length) {
                this.currentIndex = (f === "next") ? d.index(e) + 1 : d.index(e) - 1
            }
            if (this.currentIndex >= 0 && this.currentIndex < d.length) {
                this.focused_item = d.get(this.currentIndex);
                this.focused_item.focus()
            } else {
                if (f === "next") {
                    this.focused_item = d.get(0);
                    this.focused_item.focus()
                } else {
                    this.currentIndex =- 1;
                    this.$editor.focus()
                }
            }
        },
        bind_key_nav: function() {
            c(document).off("keydown", this.keyevents.bind_key_down);
            c(document).on("keydown", this.keyevents.bind_key_down)
        },
        unbind_key_nav: function() {
            c(document).off("keydown", this.keyevents.bind_key_down)
        },
        render: function() {
            var e = [];
            var f = this.$post_tags.val();
            var d;
            if (typeof f !== "string") {
                f = ""
            }
            e = _.map(f.split(","), function(g) {
                return c.trim(g)
            });
            _.each(e, _.bind(function(g) {
                this.update(g)
            }, this))
        },
        focus: function() {
            this.currentIndex =- 1;
            this.$editor.focus()
        },
        keypress: function(f) {
            var d = f.charCode ? f.charCode: f.keyCode;
            if (d === 44) {
                f.preventDefault();
                f.stopPropagation();
                this.update(this.$editor.val())
            }
        },
        keydown: function(g) {
            if (!g) {
                g = window.event
            }
            var f = g.which || g.keyCode;
            if (f === 8&&!this.$editor.val()) {
                var d = this.$(".tag");
                if (d.length && d[d.length - 1]) {
                    d.last().remove();
                    this.update_form()
                }
            } else {
                if (f === 13) {
                    this.update(this.$editor.val());
                    if (!(g.metaKey || g.ctrlKey)) {
                        g.preventDefault();
                        g.stopPropagation()
                    }
                } else {
                    if (f === 27 && this.$editor.val()) {
                        g.preventDefault();
                        g.stopPropagation();
                        this.update(this.$editor.val())
                    } else {
                        if (f === 9 && this.$editor.val() && c("#tag_suggest a").filter(":visible")) {
                            g.preventDefault();
                            g.stopPropagation();
                            this.next()
                        }
                    }
                }
            }
            this.$editor.attr("size", this.$editor.val().length || 5)
        },
        document_keydown: function(d) {
            switch (d.keyCode) {
            case 27:
                d.preventDefault();
                d.stopPropagation();
                d.originalEvent.stopImmediatePropagation();
                this.hide_popover();
                return;
            case 38:
                d.preventDefault();
                this.previous();
                break;
            case 40:
                d.preventDefault();
                this.next();
                break;
            default:
                break
            }
        },
        keyup: _.throttle(function(d) {
            this.lookup()
        }, 50),
        prepare_search_data: function() {
            return {
                q: this.search_query_raw,
                form_key: this.form_key
            }
        },
        get_store: function(d) {
            if (this.store_cache) {
                this.results = this.store_cache;
                d.call(this);
                return 
            }
            if (this.store_xhr) {
                this.store_xhr.abort()
            }
            this.store_xhr = c.ajax({
                url: "/svc/tags/featured",
                dataType: "json"
            });
            this.store_xhr.done(_.bind(function(e) {
                this.results = e;
                this.store_cache = e;
                if (typeof d === "function") {
                    d.call(this)
                }
            }, this))
        },
        get_search_results: function(d) {
            d = d || function() {};
            if (this.cache[this.search_query]) {
                this.results = this.cache[this.search_query];
                d.call(this);
                return 
            }
            this.search_in_progress = true;
            this.results = {
                tags: {}
            };
            this.store_xhr = c.ajax({
                url: this.endpoint,
                data: this.prepare_search_data(),
                dataType: "json",
                type: "GET"
            });
            this.store_xhr.success(_.bind(function(e) {
                this.results = e;
                this.add_to_cache(this.search_query, e)
            }, this));
            this.store_xhr.error(_.bind(function(e) {}, this));
            this.store_xhr.complete(_.bind(function(e) {
                this.search_in_progress = false;
                d.call(this)
            }, this))
        },
        lookup: function() {
            var f = c.trim(this.$editor.val());
            var g = f.length;
            var e;
            var d;
            var h;
            if (g >= this.threshold&&!this.init && f !== this.init_value) {
                this.search_query = _.escape(f);
                this.search_query_raw = f;
                if (!Tumblr.use_search_endpoint) {
                    this.get_store(_.bind(function() {
                        e = this.filter(this.store, f);
                        d = this.filter(this.results, f);
                        this.suggest(e, d)
                    }, this))
                } else {
                    this.get_search_results(_.bind(function() {
                        e = this.filter(this.store, f);
                        var i = _.compact(_.map(this.results.tags, function(k, j) {
                            if (_.indexOf(e, k.tag)===-1) {
                                return k
                            }
                        }, this));
                        this.suggest(e, i)
                    }, this))
                }
            } else {
                this.suggest([])
            }
            this.init = false;
            this.init_value = ""
        },
        add_to_cache: function(d, e) {
            this.cache[d] = e;
            if (_.size(this.cache) > this.cache_size) {
                delete this.cache[this.queries[0]];
                this.queries.shift()
            }
        },
        inject_search_substring: function(d, f) {
            if (!this.search_query) {
                return 
            }
            var e = new RegExp(this._escapeRegExp(this.search_query), "gi"), g = this.decorate_search_substring;
            if (!e) {
                return 
            }
            _.each(d, function(j, h) {
                if (f === "user_tag") {
                    d[h] = j.replace(e, g)
                }
                if (f === "suggestion") {
                    d[h].hilite_tag = j.tag.replace(e, g)
                }
            });
            return d
        },
        decorate_search_substring: function(d) {
            return "<u>" + d + "</u>"
        },
        suggest: function(d, h) {
            if (d.length || (h && h.length)) {
                this.show_popover();
                d = this._sanitize_tags(d, "user_tag");
                h = this._sanitize_tags(h, "suggestion");
                var f = _.template(c("#tag_suggest_subtemplate").html());
                if (!Tumblr.use_search_endpoint) {
                    this.$("#tag_suggest .popover_inner").html(f(_.extend({
                        user_tags: d.sort(),
                        suggested_tags: h
                    }, this.template_helpers)))
                } else {
                    var e = this.inject_search_substring(d, "user_tag");
                    var g = this.inject_search_substring(h, "suggestion");
                    this.$("#tag_suggest .popover_inner").html(f(_.extend({
                        user_tags: e.sort().slice(0, this.limit),
                        suggested_tags: g.slice(0, this.limit)
                    }, this.template_helpers)))
                }
            } else {
                this.hide_popover()
            }
        },
        remove_tag: function(d) {
            c(d.currentTarget).remove();
            this.update_form()
        },
        update: function(d) {
            d = d.replace(/[",#]/g, "").replace(/</g, "&lt;");
            d = Tumblr.$.truncate(c.trim(d), 140);
            if (d.replace(/,/g, "")) {
                this.$editor.val("");
                var g = false;
                var e = this.$(".tag");
                if (e.length) {
                    _.each(e, function(h) {
                        if (d === c(h).text()) {
                            g = true
                        }
                    })
                }
                if (!g) {
                    var f = c("<span/>", {
                        "class": "tag",
                        text: d
                    });
                    this.$editor_wrapper.before(f);
                    this.update_form();
                    if (!_.contains(Tumblr.USER_TAGS, d)) {
                        Tumblr.USER_TAGS.push(d)
                    }
                }
            }
        },
        update_form: function() {
            var d = [];
            _.each(this.$(".tag"), function(e) {
                d.push(c(e).text())
            });
            this.$post_tags.val(d.join(","))
        },
        escapeRegex: function(d) {
            return d.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(f, e) {
            var d = new RegExp(this.escapeRegex(e), "i");
            return c.grep(f, function(g) {
                return d.test(g.tag || g)
            })
        },
        _sanitize_tags: function(d, e) {
            _.each(d, function(g, f) {
                if (e === "user_tag") {
                    d[f] = _.escape(_.unescape(g))
                } else {
                    if (e === "suggestion") {
                        d[f].tag = _.escape(_.unescape(g.tag))
                    }
                }
            });
            return d
        }
    });
    b.TagEditor = a
})(jQuery, Tumblr);
/*! scripts/posting/view/share_options.js */
(function(c, a) {
    var b = Backbone.View.extend({
        custom_tweet: false,
        services: ["facebook", "twitter"],
        init: true,
        events: {
            "keyup #custom_tweet": "tweet_length",
            "click #custom_tweet": "tweet_length",
            "keyup .main_content input": "change",
            "keyup .main_content textarea": "change",
            "blur .main_content input": "change",
            "blur .main_content textarea": "change",
            "change .main_content textarea": "change",
            "change .main_content input": "change",
            "change .share_btns label": "toggle_share",
            "mouseenter .share_btns .twitter": "mouseenter",
            "mouseleave .share_btns .twitter": "mouseleave",
            "click #tweet_popover .dismiss": "dismiss_tweet"
        },
        initialize: function(d) {
            this.options = d || {};
            this.states = {};
            this.$custom_tweet = this.$("#custom_tweet");
            this.$tweet_length = this.$("#tweet_popover .length");
            this.$tweet_popover = this.$("#tweet_popover");
            this.$twitter_label = this.$(".twitter");
            this.$facebook_label = this.$(".facebook");
            this.$twitter_cb = this.$('.twitter input[type="checkbox"]');
            this.$facebook_cb = this.$('.facebook input[type="checkbox"]');
            this.post_type = this.options.post_type || "regular";
            this.post_markdown = (this.options.editor_type === "markdown") ? true : false;
            Tumblr.Editor.on("tinymce.change", this.change, this);
            b.register(this)
        },
        cache_form_elements: function() {
            this.$post_one = this.$("#post_one");
            this.$post_two = this.$("#post_two");
            this.$post_three = this.$("#post_three")
        },
        change: function(d) {
            if (this.custom_tweet) {
                return 
            }
            this.$custom_tweet.val(this.tweet_summary())
        },
        destroy: function() {
            this.undelegateEvents();
            this.states = {};
            Tumblr.Editor.off("tinymce.change", null, this);
            b.instances.splice(_.indexOf(this), 1)
        },
        mouseenter: function(f) {
            f.preventDefault();
            var d = c(f.currentTarget);
            if (!d.hasClass("checked") || (Tumblr.MultiPopover.visible())) {
                return 
            }
            this.display_popover()
        },
        mouseleave: function() {
            clearTimeout(this.appear_delay);
            if (this.popover&&!Tumblr.MultiPopover.visible()) {
                if (!this.popover.visible) {
                    this.popover.hide()
                }
            }
        },
        display_popover: function() {
            this.appear_delay = setTimeout(_.bind(function() {
                if (!this.popover) {
                    this.popover = new Tumblr.MultiPopover(this.$tweet_popover.get(0), {
                        token: "post-plexi",
                        on_show: _.bind(function() {
                            this.$twitter_label.addClass("active")
                        }, this),
                        on_hide: _.bind(function() {
                            this.$twitter_label.removeClass("active")
                        }, this)
                    }).show()
                } else {
                    this.popover.show()
                }
            }, this), 200)
        },
        dismiss_tweet: function() {
            this.popover.hide();
            clearTimeout(this.appear_delay)
        },
        toggle_share: function(h) {
            var d = c(h.currentTarget);
            var g = d.parent("li");
            g.toggleClass("checked");
            var f = g.data("share");
            if (!g.hasClass("checked")) {
                this.states[f] = "off";
                if (this.popover) {
                    this.popover.hide()
                }
            } else {
                if (g.hasClass("twitter")) {
                    this.display_popover()
                }
                this.states[f] = "on"
            }
        },
        set_caret: function(g) {
            var f = c(g);
            var h = 0;
            var d = f.val().indexOf("[URL]") - 1;
            if (d < h) {
                f.val("  " + f.val());
                d = 1
            }
            if (g.setSelectionRange) {
                g.focus();
                g.setSelectionRange(h, d)
            } else {
                if (g.createRange) {
                    var e = g.createRange();
                    e.setStart("character", h);
                    e.setEnd("character", d);
                    e.select()
                } else {
                    f.focus()
                }
            }
        },
        strip_html: function(h) {
            if (!h) {
                return h
            }
            try {
                var f = document.implementation.createHTMLDocument("");
                f.body.innerHTML = Tumblr.$.strip_scripts(h);
                var g = f.body.textContent || f.body.innerText;
                return this.normalize_space(c.trim(g))
            } catch (d) {
                return this.normalize_space(c.trim(Tumblr.$.strip_scripts(Tumblr.$.strip_tags(h))))
            }
        },
        normalize_space: function(d) {
            return c.trim(d).replace("\u00A0", " ").replace(/\s\s+/, " ")
        },
        parse_url: function(e, f) {
            var g = ["source", "scheme", "authority", "userInfo", "user", "pass", "host", "port", "relative", "path", "directory", "file", "query", "fragment"];
            var d = g.indexOf(f);
            if (d < 0) {
                return false
            }
            return (/^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\?([^#]*))?(?:#(.*))?)/).exec(e)[d] || ""
        },
        tweet_summary: function() {
            this.process(this.post_type);
            var e = "";
            var f = " [URL]";
            var g = 140 - 30;
            var d = "";
            switch (this.post_type) {
            case"regular":
            case"conversation":
                d = (this.post_one && this.post_two) ? this.post_one + " - " + this.post_two : (this.post_one ? this.post_one : this.post_two);
                break;
            case"photo":
            case"video":
            case"audio":
                d = this.post_two;
                break;
            case"note":
                d = this.post_one;
                break;
            case"link":
                if (this.post_one && this.post_three) {
                    d = this.post_one + " - " + this.post_three
                } else {
                    if (this.post_one) {
                        d = this.post_one
                    } else {
                        if (this.post_three) {
                            d = this.post_three
                        } else {
                            d = this.parse_url(this.post_two, "host")
                        }
                    }
                }
                break;
            case"quote":
                var h = Tumblr.$.truncate(this.post_one, g - 5, "\u2026");
                d = "\u201c" + h + "\u201d";
                if (h == this.post_one && this.post_two && d.length < (g - 5)) {
                    d += " - " + this.post_two
                }
                break;
            default:
                break
            }
            if (!d) {
                f = c.trim(f);
                d = ""
            }
            return e + Tumblr.$.truncate(d, g, "\u2026") + f
        },
        tweet_length: function(j) {
            if (this.init) {
                this.set_caret(j.target)
            }
            switch (j.keyCode) {
            case 17:
            case 18:
            case 27:
            case 33:
            case 34:
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 91:
            case 93:
                return false;
            default:
                break
            }
            var i = this.$custom_tweet.scrollTop();
            this.init = false;
            this.custom_tweet = true;
            var g = this.$custom_tweet.val();
            var h = g.match(/\[URL\]/ig);
            var f = (h) ? (h.length * 24): 0;
            var d = 140 - g.length - f;
            if (d < 1) {
                if (h) {
                    if (g.match(/ \[URL\]$/)) {
                        g = g.replace(/ \[URL\]$/, "");
                        g = Tumblr.$.truncate(g, 140 - f, "\u2026");
                        g += " [URL]"
                    } else {
                        g = Tumblr.$.truncate(g, 140 - f, "\u2026")
                    }
                } else {
                    g = Tumblr.$.truncate(g, 140, "\u2026")
                }
                d = 0
            }
            this.$custom_tweet.val(g);
            this.$tweet_length.text(d);
            this.$tweet_length.addClass("active");
            if (h && d === 0 && this.$custom_tweet.setSelectionRange) {
                this.$custom_tweet.setSelectionRange(g.indexOf("[URL]") - 1, g.indexOf("[URL]") - 1)
            }
            this.$custom_tweet.scrollTop(i)
        },
        process: function(d) {
            if (!d) {
                return 
            }
            this.cache_form_elements();
            switch (d) {
            case"conversation":
                this.post_one = this.strip_html(this.$post_one.val());
                this.post_two = this.strip_html(this.$post_two.val());
                this.post_three = "";
                break;
            case"quote":
                this.post_one = this.strip_html(this.process_quote(this.process_html(this.$post_one.val()), ["\u201c", "\u201d"], true, true));
                this.post_two = this.strip_html(this.process_html(this.$post_two.val()));
                this.post_three = "";
                break;
            case"regular":
            case"photo":
                this.post_one = this.strip_html(this.$post_one.val());
                this.post_two = this.strip_html(this.process_html(this.$post_two.val()));
                this.post_three = "";
                break;
            case"link":
                this.post_one = this.strip_html(this.$post_one.val());
                this.post_two = this.strip_html(this.$post_two.val());
                this.post_three = this.strip_html(this.process_html(this.$post_three.val()));
                break;
            case"audio":
                this.post_one = this.strip_html(this.$post_one.val());
                this.post_two = this.strip_html(this.process_html(this.$post_two.val()));
                this.post_three = this.strip_html(this.$post_three.val());
                break;
            case"video":
                this.post_one = this.strip_html(this.$post_one.val());
                this.post_two = this.strip_html(this.process_html(this.$post_two.val()));
                this.post_three = "";
                break;
            default:
                break
            }
        },
        process_html: function(g) {
            g = c.trim(g);
            if (this.post_markdown) {
                try {
                    var d = new Markdown.Converter();
                    g = d.makeHtml(g)
                } catch (f) {}
            }
            return g
        },
        process_quote: function(g, f, e, d) {
            g = c.trim(g);
            if (e) {
                while (g && f.indexOf(g.substring(0, 1))!==-1) {
                    g = g.substring(1)
                }
            }
            if (d) {
                while (g && f.indexOf(g.substring(g.length - 1, g.length))!==-1) {
                    g = g.substring(0, g.length - 1)
                }
            }
            return c.trim(g)
        },
        set_sharing: function(d) {
            _.each(this.services, _.bind(function(e) {
                if (d[e]) {
                    if (d[e + "On"] || this.states[e] === "on") {
                        this.set_share(e, true)
                    } else {
                        this.clear_share(e)
                    }
                } else {
                    this.clear_share(e, true)
                }
            }, this))
        },
        set_share: function(g, d) {
            var f = this.$("." + g).show();
            var e = this.$("." + g + " input");
            if (d) {
                if (this.states[g] !== "off") {
                    f.addClass("checked");
                    e.prop("checked", true)
                }
            } else {
                f.removeClass("checked");
                e.prop("checked", false)
            }
        },
        clear_share: function(g, e) {
            var f = this.$("." + g).removeClass("checked").show();
            var d = this.$("." + g + " input").prop("checked", false);
            if (e) {
                f.hide()
            }
        },
        clear_all: function() {
            _.each(this.services, _.bind(function(d) {
                this.clear_share(d, true)
            }, this))
        },
        set_type: function(d) {
            this.post_type = d
        }
    });
    b.instances = [];
    b.register = function(d) {
        this.instances.push(d)
    };
    b.destroy_all = function() {
        while (this.instances.length) {
            this.instances[0].destroy()
        }
    };
    a.ShareOptions = b
})(jQuery, Tumblr);
/*! scripts/posting.js */

