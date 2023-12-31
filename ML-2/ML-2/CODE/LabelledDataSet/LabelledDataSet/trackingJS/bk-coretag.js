/* 3.0.21-89010 */
!function() {
    function createCookie(a, b, c) {
        var d = new Date, e = c ? d.getTime() + 86400000 * c: d.getTime(), f = [];
        d.setTime(e), f.push(a), f.push("="), f.push(b), f.push(c ? "; expires=" + d.toGMTString() : ""), f.push("; path=/"), document.cookie = f.join("");
    }
    function readCookie(a) {
        for (var b = a + "=", c = document.cookie.split(";"), d = c.length, e = "", f = null, g = d - 1; g >= 0; g--) {
            for (e = c[g]; " " === e.charAt(0);) {
                e = e.slice(1);
            }
            if (0 === e.indexOf(b)) {
                f = e.slice(b.length);
                break;
            }
        }
        return f;
    }
    function eraseCookie(a) {
        var b = "", c =- 1;
        a && createCookie(a, b, c);
    }
    var requirejs, require, define;
    !function(a) {
        function b(a, b) {
            var c, d, e, f, g, h, i, j = b && b.split("/"), k = m.map, l = k && k["*"] || {};
            if (a && "." === a.charAt(0) && b) {
                for (j = j.slice(0, j.length - 1), a = j.concat(a.split("/")), g = 0; i = a[g]; g++) {
                    if ("." === i) {
                        a.splice(g, 1), g -= 1;
                    } else {
                        if (".." === i) {
                            if (1 === g && (".." === a[2] || ".." === a[0])) {
                                return !0;
                            }
                            g > 0 && (a.splice(g - 1, 2), g -= 2);
                        }
                    }
                }
                a = a.join("/");
            }
            if ((j || l) && k) {
                for (c = a.split("/"), g = c.length; g > 0; g -= 1) {
                    if (d = c.slice(0, g).join("/"), j) {
                        for (h = j.length; h > 0; h -= 1) {
                            if (e = k[j.slice(0, h).join("/")], e && (e = e[d])) {
                                f = e;
                                break;
                            }
                        }
                    }
                    if (f = f || l[d]) {
                        c.splice(0, g, f), a = c.join("/");
                        break;
                    }
                }
            }
            return a;
        }
        function c(b, c) {
            return function() {
                return j.apply(a, o.call(arguments, 0).concat([b, c]));
            };
        }
        function d(a) {
            return function(c) {
                return b(c, a);
            };
        }
        function e(a) {
            return function(b) {
                k[a] = b;
            };
        }
        function f(b) {
            if (l.hasOwnProperty(b)) {
                var c = l[b];
                delete l[b], n[b]=!0, i.apply(a, c);
            }
            if (!k.hasOwnProperty(b)) {
                throw new Error("No " + b);
            }
            return k[b];
        }
        function g(a, c) {
            var e, g, h = a.indexOf("!");
            return - 1 !== h ? (e = b(a.slice(0, h), c), a = a.slice(h + 1), g = f(e), a = g && g.normalize ? g.normalize(a, d(c)) : b(a, c)) : a = b(a, c), {
                f: e ? e + "!" + a: a,
                n: a,
                p: g
            };
        }
        function h(a) {
            return function() {
                return m && m.config && m.config[a] || {};
            };
        }
        var i, j, k = {}, l = {}, m = {}, n = {}, o = [].slice;
        i = function(b, d, i, j) {
            var m, o, p, q, r, s, t = [];
            if (j = j || b, "function" == typeof i) {
                for (d=!d.length && i.length ? ["require", "exports", "module"] : d, s = 0; s < d.length; s++) {
                    if (r = g(d[s], j), p = r.f, "require" === p) {
                        t[s] = c(b);
                    } else {
                        if ("exports" === p) {
                            t[s] = k[b] = {}, m=!0;
                        } else {
                            if ("module" === p) {
                                o = t[s] = {
                                    id: b,
                                    uri: "",
                                    exports: k[b],
                                    config: h(b)
                                };
                            } else {
                                if (k.hasOwnProperty(p) || l.hasOwnProperty(p)) {
                                    t[s] = f(p);
                                } else {
                                    if (r.p) {
                                        r.p.load(r.n, c(j, !0), e(p), {}), t[s] = k[p];
                                    } else {
                                        if (!n[p]) {
                                            throw new Error(b + " missing " + p);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                q = i.apply(k[b], t), b && (o && o.exports !== a && o.exports !== k[b] ? k[b] = o.exports : q === a && m || (k[b] = q));
            } else {
                b && (k[b] = i);
            }
        }, requirejs = require = j = function(b, c, d, e) {
            return "string" == typeof b ? f(g(b, c).f) : (b.splice || (m = b, c.splice ? (b = c, c = d, d = null) : b = a), c = c || function() {}, e ? i(a, b, c, d) : setTimeout(function() {
                i(a, b, c, d);
            }, 15), j);
        }, j.config = function(a) {
            return m = a, j;
        }, define = function(a, b, c) {
            b.splice || (c = b, b = []), l[a] = [a, b, c];
        }, define.amd = {
            jQuery: !0
        };
    }(), define("../vendor/almond", function() {}), "object" != typeof JSON && (JSON = {}), function() {
        function f(a) {
            return 10 > a ? "0" + a : a;
        }
        function quote(a) {
            return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
                var b = meta[a];
                return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4);
            }) + '"' : '"' + a + '"';
        }
        function str(a, b) {
            var c, d, e, f, g, h = gap, i = b[a];
            switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
            case"string":
                return quote(i);
            case"number":
                return isFinite(i) ? String(i) : "null";
            case"boolean":
            case"null":
                return String(i);
            case"object":
                if (!i) {
                    return "null";
                }
                if (gap += indent, g = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                    for (f = i.length, c = 0; f > c; c += 1) {
                        g[c] = str(c, i) || "null";
                    }
                    return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]", gap = h, e;
                }
                if (rep && "object" == typeof rep) {
                    for (f = rep.length, c = 0; f > c; c += 1) {
                        "string" == typeof rep[c] && (d = rep[c], e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                    }
                } else {
                    for (d in i) {
                        Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                    }
                }
                return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}", gap = h, e;
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf();
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(a, b, c) {
            var d;
            if (gap = "", indent = "", "number" == typeof c) {
                for (d = 0; c > d; d += 1) {
                    indent += " ";
                }
            } else {
                "string" == typeof c && (indent = c);
            }
            if (rep = b, !b || "function" == typeof b || "object" == typeof b && "number" == typeof b.length) {
                return str("", {
                    "": a
                });
            }
            throw new Error("JSON.stringify");
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(a, b) {
                var c, d, e = a[b];
                if (e && "object" == typeof e) {
                    for (c in e) {
                        Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]);
                    }
                }
                return reviver.call(a, b, e);
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4);
            })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                    "": j
                }, "") : j;
            }
            throw new SyntaxError("JSON.parse");
        });
    }(), define("../vendor/json2", function() {}), define("../src/bootstrap", [], function() {
        var a = function(a, b) {
            var c, d = b.split("."), e = a;
            c = d.length;
            for (var f = 0; c > f; f++) {
                "undefined" == typeof e[d[f]] && (e[d[f]] = {}), e = e[d[f]];
            }
            return e;
        };
        "undefined" == typeof BKTAG && a(window, "BKTAG"), BKTAG.ns = a;
        var b = {
            createFrame: function(a) {
                var b = document.createElement("iframe");
                return b.setAttribute("name", a), b.setAttribute("id", a), b.setAttribute("title", "bk"), b.style.border = "0px", b.style.width = "0px", b.style.height = "0px", "function" == typeof bk_frameLoad && (b.onload = bk_frameLoad), b.src = "javascript:void(0)", b;
            },
            checkFrame: function(a) {
                var c = "__bkframe";
                if ("undefined" == typeof frames[c] || "undefined" == typeof document.getElementById(c)) {
                    var d = b.createFrame(c), e = document.getElementsByTagName("body")[0];
                    e && e.appendChild(d);
                }
                "function" == typeof a && a();
            }
        };
        return b;
    }), define("../vendor/htmlparser", [], function() {
        var a = function(a) {
            for (var b = {}, c = a.split(","), d = 0; d < c.length; d++) {
                b[c[d]]=!0;
            }
            return b;
        }, b = {
            leftTrim: function(a) {
                return a.replace(/^\s+/, "");
            },
            startTag: /^<(\w+)((?:\s+\w+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
            endTag: /^<\/(\w+)[^>]*>/,
            attr: /(\w+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
            empty: a("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed"),
            block: a("address,applet,blockquote,button,center,dd,del,dir,div,dl,dt,fieldset,form,frameset,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,NOSCRIPT,object,ol,p,pre,script,SCRIPT,table,tbody,td,tfoot,th,thead,tr,ul"),
            inline: a("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,SCRIPT,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),
            closeSelf: a("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),
            fillAttrs: a("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),
            special: a("script,SCRIPT,style"),
            one: a("html,head,body,title"),
            structure: {
                link: "head",
                base: "head"
            },
            htmlParser: function(a, c) {
                function d(a, d, f, g) {
                    if (b.block[d]) {
                        for (; i.last() && b.inline[i.last()];) {
                            e("", i.last());
                        }
                    }
                    if (b.closeSelf[d] && i.last() == d && e("", d), g = b.empty[d]||!!g, g || i.push(d), c.start) {
                        var h = [];
                        f.replace(b.attr, function(a, c) {
                            var d = arguments[2] ? arguments[2]: arguments[3] ? arguments[3]: arguments[4] ? arguments[4]: b.fillAttrs[c] ? c: "";
                            h.push({
                                name: c,
                                value: d,
                                escaped: d.replace(/(^|[^\\])"/g, '$1\\"')
                            });
                        }), c.start && c.start(d, h, g);
                    }
                }
                function e(a, b) {
                    if (b) {
                        for (var d = i.length - 1; d >= 0 && i[d] != b; d--) {}
                    } else {
                        var d = 0;
                    }
                    if (d >= 0) {
                        for (var e = i.length - 1; e >= d; e--) {
                            c.end && c.end(i[e]);
                        }
                        i.length = d;
                    }
                }
                var f, g, h, i = [], j = a;
                for (i.last = function() {
                    return this[this.length - 1];
                }; a;) {
                    if (g=!0, a = b.leftTrim(a), i.last() && b.special[i.last()]) {
                        var k = new RegExp("</" + i.last() + ">", "i"), f = a.search(k), l = a.substring(0, f);
                        l.length > 0 && (c.chars && c.chars(l), a = a.replace(l, "")), a = a.replace(k, ""), e("", i.last());
                    } else {
                        if (0 == a.indexOf("<!--") ? (f = a.indexOf("-->"), f >= 0 && (c.comment && c.comment(a.substring(4, f)), a = a.substring(f + 3), g=!1)) : 0 == a.indexOf("</") ? (h = a.match(b.endTag), h && (a = a.substring(h[0].length), h[0].replace(b.endTag, e), g=!1)) : 0 == a.indexOf("<") && (h = a.match(b.startTag), h && (a = a.substring(h[0].length), h[0].replace(b.startTag, d), g=!1)), g) {
                            f = a.indexOf("<");
                            var m = 0 > f ? a: a.substring(0, f);
                            a = 0 > f ? "" : a.substring(f), c.chars && c.chars(m);
                        }
                    }
                    if (a == j) {
                        throw "Parse Error: " + a;
                    }
                    j = a;
                }
                e();
            },
            htmlToDom: function(a, c) {
                var d = [], e = c.documentElement || c.getOwnerDocument && c.getOwnerDocument() || c;
                if (!e && c.createElement && function() {
                    var a = c.createElement("html"), b = c.createElement("head");
                    b.appendChild(c.createElement("title")), a.appendChild(b), a.appendChild(c.createElement("body")), c.appendChild(a);
                }(), c.getElementsByTagName) {
                    for (var f in b.one) {
                        b.one[f] = c.getElementsByTagName(f)[0];
                    }
                }
                var g = b.one.body;
                b.htmlParser(a, {
                    start: function(a, e, f) {
                        if (b.one[a]) {
                            return void (g = b.one[a]);
                        }
                        for (var h = c.createElement(a), i = 0; i < e.length; i++) {
                            h.setAttribute(e[i].name, e[i].value);
                        }
                        b.structure[a] && "boolean" != typeof _one[b.structure[a]] ? b.one[b.structure[a]].appendChild(h) : g && g.appendChild && (window.addEventListener || "NOSCRIPT" != g.tagName) && g.appendChild(h), f || (d.push(h), g = h);
                    },
                    end: function() {
                        d.length -= 1, g = d.length > 0 ? d[d.length - 1] : b.one.body;
                    },
                    chars: function(a) {
                        if (window.addEventListener) {
                            var b = c.createTextNode(a);
                            g.appendChild(b);
                        } else {
                            g.text = a;
                        }
                    },
                    comment: function() {}
                });
            }
        };
        return b;
    }), define("../src/utils", ["../src/bootstrap", "../vendor/htmlparser"], function(a, b) {
        var c = {
            getKwds: function() {
                var a, b = document.getElementsByTagName("meta"), c = [], d = b.length;
                for (a = 0; d > a; a++) {
                    b[a].name && "keywords" === b[a].name.toLowerCase() && "" !== b[a].content && c.push(b[a].content);
                }
                return c.join(",");
            },
            getMeta: function(a) {
                for (var b = document.getElementsByTagName("meta"), c = b.length, d = 0; c > d; d++) {
                    var e = b[d];
                    if (e.name.toLowerCase() === a.toLowerCase() && "" !== e.content) {
                        return e.content;
                    }
                }
                return null;
            },
            scriptWithOnload: function(a, b) {
                var c = document.createElement("script");
                return c.src = a, c.onloadDone=!1, c.onload = function() {
                    c.onloadDone || (c.onloadDone=!0, "function" == typeof b && b());
                }, c.onreadystatechange = function() {
                    ("loaded" === c.readyState || "complete" === c.readyState)&&!c.onloadDone && (c.onloadDone=!0, "function" == typeof b && b());
                }, c;
            },
            isMobile: function() {
                var a=!1, b = ["Mobile", "Tablet", "Handheld", "Android", "iPhone", "Kindle", "Silk", "Nokia", "Symbian", "BlackBerry"];
                for (var c in b) {
                    if ( - 1 !== navigator.userAgent.indexOf(b[c])) {
                        a=!0;
                        break;
                    }
                }
                return a;
            },
            isDebug: function() {
                var a=!1;
                return "undefined" != typeof window.location && "undefined" != typeof window.location.search&&-1 !== window.location.search.indexOf("debug=1") && (a=!0), a;
            },
            addEvent: function(a, b, c) {
                a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, function(b) {
                    return c.call(a, b);
                });
            },
            normalizeEmail: function(a) {
                var b = [], c = [], d = a;
                try {
                    d = a.trim().toLowerCase(), b = d.split("@"), c = b[0], c.indexOf("+")>-1 && (c = c.substr(0, c.indexOf("+"))), d = c + "@" + b[1];
                } catch (e) {}
                return d;
            },
            normalizePhone: function(a) {
                var b = a;
                try {
                    b = b.trim().replace(/^[0]+/g, "").replace(/\D/g, "");
                } catch (c) {}
                return b;
            }
        };
        return window.BKTAG.htmlToDom = b.htmlToDom, window.BKTAG.util = c, c;
    }), define("../vendor/cookies", function() {});
    var hashers = {
        java: function(a) {
            for (var b = 31, c = 0, d = 0, e = 0; e < a.length; e++) {
                d = b * d + a.charCodeAt(e)<<c;
            }
            return d;
        },
        javaHex: function(a) {
            return Math.abs(hashers.java(a)).toString(16);
        }
    }, indexes = {
        1: "dtzpmk".split("")
    }, encoders = {
        indexed_comma: function(a) {
            for (var b = [a], c = indexes[a], d = 0; d < c.length; d++) {
                var e = signifiers[c[d]][0];
                b.push(encodeURIComponent(e ? e : ""));
            }
            return b.join(",");
        }
    }, signifiers = {
        a: [navigator.userAgent, "userAgent"],
        e: [function() {
            return hashers.javaHex(navigator.userAgent);
        }(), "userAgent hashed"],
        d: [[screen.width, screen.height, screen.colorDepth].join(""), "Screen concat"],
        t: [(new Date).getTime(), "Time"],
        z: [(new Date).getTimezoneOffset(), "Timezone"],
        n: [function() {
            for (var a in navigator) {
                var b = [];
                return "string" == typeof navigator[a] && b.push(navigator[a]), b.join("");
            }
        }(), "Navigator"],
        p: [function() {
            for (var a = [], b = 0, c = navigator.plugins; b < c.length; b++) {
                a.push(c[b].name);
            }
            return hashers.javaHex(a.join(","));
        }(), "Plugins hashed"],
        pv: [function() {
            for (var a = 0, b = 0, c = navigator.plugins; b < c.length; b++) {
                var d = c[b].description.match(/\d+(.\d+){1,3}/);
                d && (a += d[0]);
            }
            return a;
        }(), "Plugin version concat"],
        m: [function() {
            for (var a = [], b = 0, c = navigator.mimeTypes; b < c.length; b++) {
                a.push(c[b].description);
            }
            return hashers.javaHex(a.join(","));
        }(), "mimeTypes hashed"],
        l: [navigator.language, "language"],
        k: [navigator.cookieEnabled ? 1: 0, "cookies"],
        ps: [navigator.productSub, "productSub"],
        u: [navigator.cpuClass, "cpuClass"],
        g: [navigator.browserLanguage, "browserLanguage"],
        s: [document.defaultCharset, "charset"]
    }, numis = {
        collect: function(a, b) {
            var c = a || "indexed_comma", d = b || 1;
            return encoders[c](d);
        }
    };
    define("../vendor/numis", function() {}), define("../vendor/md5", [], function() {
        function a(a) {
            return d(b(g(a)));
        }
        function b(a) {
            return i(j(h(a), 8 * a.length));
        }
        function c(a, b) {
            var c = h(a);
            c.length > 16 && (c = j(c, 8 * a.length));
            for (var d = Array(16), e = Array(16), f = 0; 16 > f; f++) {
                d[f] = 909522486^c[f], e[f] = 1549556828^c[f];
            }
            var g = j(d.concat(h(b)), 512 + 8 * b.length);
            return i(j(e.concat(g), 640));
        }
        function d(a) {
            try {} catch (b) {
                s = 0;
            }
            for (var c, d = s ? "0123456789ABCDEF" : "0123456789abcdef", e = "", f = 0; f < a.length; f++) {
                c = a.charCodeAt(f), e += d.charAt(c>>>4 & 15) + d.charAt(15 & c);
            }
            return e;
        }
        function e(a) {
            try {} catch (b) {
                t = "";
            }
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = "", e = a.length, f = 0; e > f; f += 3) {
                for (var g = a.charCodeAt(f)<<16 | (e > f + 1 ? a.charCodeAt(f + 1)<<8 : 0) | (e > f + 2 ? a.charCodeAt(f + 2) : 0), h = 0; 4 > h; h++) {
                    d += 8 * f + 6 * h > 8 * a.length ? t : c.charAt(g>>>6 * (3 - h) & 63);
                }
            }
            return d;
        }
        function f(a, b) {
            var c, d, e, f, g, h = b.length, i = Array(Math.ceil(a.length / 2));
            for (c = 0; c < i.length; c++) {
                i[c] = a.charCodeAt(2 * c)<<8 | a.charCodeAt(2 * c + 1);
            }
            var j = Math.ceil(8 * a.length / (Math.log(b.length) / Math.log(2))), k = Array(j);
            for (d = 0; j > d; d++) {
                for (g = Array(), f = 0, c = 0; c < i.length; c++) {
                    f = (f<<16) + i[c], e = Math.floor(f / h), f -= e * h, (g.length > 0 || e > 0) && (g[g.length] = e);
                }
                k[d] = f, i = g;
            }
            var l = "";
            for (c = k.length - 1; c >= 0; c--) {
                l += b.charAt(k[c]);
            }
            return l;
        }
        function g(a) {
            for (var b, c, d = "", e =- 1; ++e < a.length;) {
                b = a.charCodeAt(e), c = e + 1 < a.length ? a.charCodeAt(e + 1) : 0, b >= 55296 && 56319 >= b && c >= 56320 && 57343 >= c && (b = 65536 + ((1023 & b)<<10) + (1023 & c), e++), 127 >= b ? d += String.fromCharCode(b) : 2047 >= b ? d += String.fromCharCode(192 | b>>>6 & 31, 128 | 63 & b) : 65535 >= b ? d += String.fromCharCode(224 | b>>>12 & 15, 128 | b>>>6 & 63, 128 | 63 & b) : 2097151 >= b && (d += String.fromCharCode(240 | b>>>18 & 7, 128 | b>>>12 & 63, 128 | b>>>6 & 63, 128 | 63 & b));
            }
            return d;
        }
        function h(a) {
            for (var b = Array(a.length>>2), c = 0; c < b.length; c++) {
                b[c] = 0;
            }
            for (var c = 0; c < 8 * a.length; c += 8) {
                b[c>>5]|=(255 & a.charCodeAt(c / 8))<<c%32;
            }
            return b;
        }
        function i(a) {
            for (var b = "", c = 0; c < 32 * a.length; c += 8) {
                b += String.fromCharCode(a[c>>5]>>>c%32 & 255);
            }
            return b;
        }
        function j(a, b) {
            a[b>>5]|=128<<b%32, a[(b + 64>>>9<<4) + 14] = b;
            for (var c = 1732584193, d =- 271733879, e =- 1732584194, f = 271733878, g = 0; g < a.length; g += 16) {
                var h = c, i = d, j = e, k = f;
                c = l(c, d, e, f, a[g + 0], 7, - 680876936), f = l(f, c, d, e, a[g + 1], 12, - 389564586), e = l(e, f, c, d, a[g + 2], 17, 606105819), d = l(d, e, f, c, a[g + 3], 22, - 1044525330), c = l(c, d, e, f, a[g + 4], 7, - 176418897), f = l(f, c, d, e, a[g + 5], 12, 1200080426), e = l(e, f, c, d, a[g + 6], 17, - 1473231341), d = l(d, e, f, c, a[g + 7], 22, - 45705983), c = l(c, d, e, f, a[g + 8], 7, 1770035416), f = l(f, c, d, e, a[g + 9], 12, - 1958414417), e = l(e, f, c, d, a[g + 10], 17, - 42063), d = l(d, e, f, c, a[g + 11], 22, - 1990404162), c = l(c, d, e, f, a[g + 12], 7, 1804603682), f = l(f, c, d, e, a[g + 13], 12, - 40341101), e = l(e, f, c, d, a[g + 14], 17, - 1502002290), d = l(d, e, f, c, a[g + 15], 22, 1236535329), c = m(c, d, e, f, a[g + 1], 5, - 165796510), f = m(f, c, d, e, a[g + 6], 9, - 1069501632), e = m(e, f, c, d, a[g + 11], 14, 643717713), d = m(d, e, f, c, a[g + 0], 20, - 373897302), c = m(c, d, e, f, a[g + 5], 5, - 701558691), f = m(f, c, d, e, a[g + 10], 9, 38016083), e = m(e, f, c, d, a[g + 15], 14, - 660478335), d = m(d, e, f, c, a[g + 4], 20, - 405537848), c = m(c, d, e, f, a[g + 9], 5, 568446438), f = m(f, c, d, e, a[g + 14], 9, - 1019803690), e = m(e, f, c, d, a[g + 3], 14, - 187363961), d = m(d, e, f, c, a[g + 8], 20, 1163531501), c = m(c, d, e, f, a[g + 13], 5, - 1444681467), f = m(f, c, d, e, a[g + 2], 9, - 51403784), e = m(e, f, c, d, a[g + 7], 14, 1735328473), d = m(d, e, f, c, a[g + 12], 20, - 1926607734), c = n(c, d, e, f, a[g + 5], 4, - 378558), f = n(f, c, d, e, a[g + 8], 11, - 2022574463), e = n(e, f, c, d, a[g + 11], 16, 1839030562), d = n(d, e, f, c, a[g + 14], 23, - 35309556), c = n(c, d, e, f, a[g + 1], 4, - 1530992060), f = n(f, c, d, e, a[g + 4], 11, 1272893353), e = n(e, f, c, d, a[g + 7], 16, - 155497632), d = n(d, e, f, c, a[g + 10], 23, - 1094730640), c = n(c, d, e, f, a[g + 13], 4, 681279174), f = n(f, c, d, e, a[g + 0], 11, - 358537222), e = n(e, f, c, d, a[g + 3], 16, - 722521979), d = n(d, e, f, c, a[g + 6], 23, 76029189), c = n(c, d, e, f, a[g + 9], 4, - 640364487), f = n(f, c, d, e, a[g + 12], 11, - 421815835), e = n(e, f, c, d, a[g + 15], 16, 530742520), d = n(d, e, f, c, a[g + 2], 23, - 995338651), c = o(c, d, e, f, a[g + 0], 6, - 198630844), f = o(f, c, d, e, a[g + 7], 10, 1126891415), e = o(e, f, c, d, a[g + 14], 15, - 1416354905), d = o(d, e, f, c, a[g + 5], 21, - 57434055), c = o(c, d, e, f, a[g + 12], 6, 1700485571), f = o(f, c, d, e, a[g + 3], 10, - 1894986606), e = o(e, f, c, d, a[g + 10], 15, - 1051523), d = o(d, e, f, c, a[g + 1], 21, - 2054922799), c = o(c, d, e, f, a[g + 8], 6, 1873313359), f = o(f, c, d, e, a[g + 15], 10, - 30611744), e = o(e, f, c, d, a[g + 6], 15, - 1560198380), d = o(d, e, f, c, a[g + 13], 21, 1309151649), c = o(c, d, e, f, a[g + 4], 6, - 145523070), f = o(f, c, d, e, a[g + 11], 10, - 1120210379), e = o(e, f, c, d, a[g + 2], 15, 718787259), d = o(d, e, f, c, a[g + 9], 21, - 343485551), c = p(c, h), d = p(d, i), e = p(e, j), f = p(f, k);
            }
            return Array(c, d, e, f);
        }
        function k(a, b, c, d, e, f) {
            return p(q(p(p(b, a), p(d, f)), e), c);
        }
        function l(a, b, c, d, e, f, g) {
            return k(b & c|~b & d, a, b, e, f, g);
        }
        function m(a, b, c, d, e, f, g) {
            return k(b & d | c&~d, a, b, e, f, g);
        }
        function n(a, b, c, d, e, f, g) {
            return k(b^c^d, a, b, e, f, g);
        }
        function o(a, b, c, d, e, f, g) {
            return k(c^(b|~d), a, b, e, f, g);
        }
        function p(a, b) {
            var c = (65535 & a) + (65535 & b), d = (a>>16) + (b>>16) + (c>>16);
            return d<<16 | 65535 & c;
        }
        function q(a, b) {
            return a<<b | a>>>32 - b;
        }
        var r = {};
        r.hex_md5 = a;
        var s = 0, t = "";
        return r;
    }), define("../vendor/sha256", [], function() {
        function a(a) {
            return d(b(g(a)));
        }
        function b(a) {
            return i(r(h(a), 8 * a.length));
        }
        function c(a, b) {
            var c = h(a);
            c.length > 16 && (c = r(c, 8 * a.length));
            for (var d = Array(16), e = Array(16), f = 0; 16 > f; f++) {
                d[f] = 909522486^c[f], e[f] = 1549556828^c[f];
            }
            var g = r(d.concat(h(b)), 512 + 8 * b.length);
            return i(r(e.concat(g), 768));
        }
        function d(a) {
            try {} catch (b) {
                u = 0;
            }
            for (var c, d = u ? "0123456789ABCDEF" : "0123456789abcdef", e = "", f = 0; f < a.length; f++) {
                c = a.charCodeAt(f), e += d.charAt(c>>>4 & 15) + d.charAt(15 & c);
            }
            return e;
        }
        function e(a) {
            try {} catch (b) {
                v = "";
            }
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = "", e = a.length, f = 0; e > f; f += 3) {
                for (var g = a.charCodeAt(f)<<16 | (e > f + 1 ? a.charCodeAt(f + 1)<<8 : 0) | (e > f + 2 ? a.charCodeAt(f + 2) : 0), h = 0; 4 > h; h++) {
                    d += 8 * f + 6 * h > 8 * a.length ? v : c.charAt(g>>>6 * (3 - h) & 63);
                }
            }
            return d;
        }
        function f(a, b) {
            var c, d, e, f, g = b.length, h = Array(), i = Array(Math.ceil(a.length / 2));
            for (c = 0; c < i.length; c++) {
                i[c] = a.charCodeAt(2 * c)<<8 | a.charCodeAt(2 * c + 1);
            }
            for (; i.length > 0;) {
                for (f = Array(), e = 0, c = 0; c < i.length; c++) {
                    e = (e<<16) + i[c], d = Math.floor(e / g), e -= d * g, (f.length > 0 || d > 0) && (f[f.length] = d);
                }
                h[h.length] = e, i = f;
            }
            var j = "";
            for (c = h.length - 1; c >= 0; c--) {
                j += b.charAt(h[c]);
            }
            var k = Math.ceil(8 * a.length / (Math.log(b.length) / Math.log(2)));
            for (c = j.length; k > c; c++) {
                j = b[0] + j;
            }
            return j;
        }
        function g(a) {
            for (var b, c, d = "", e =- 1; ++e < a.length;) {
                b = a.charCodeAt(e), c = e + 1 < a.length ? a.charCodeAt(e + 1) : 0, b >= 55296 && 56319 >= b && c >= 56320 && 57343 >= c && (b = 65536 + ((1023 & b)<<10) + (1023 & c), e++), 127 >= b ? d += String.fromCharCode(b) : 2047 >= b ? d += String.fromCharCode(192 | b>>>6 & 31, 128 | 63 & b) : 65535 >= b ? d += String.fromCharCode(224 | b>>>12 & 15, 128 | b>>>6 & 63, 128 | 63 & b) : 2097151 >= b && (d += String.fromCharCode(240 | b>>>18 & 7, 128 | b>>>12 & 63, 128 | b>>>6 & 63, 128 | 63 & b));
            }
            return d;
        }
        function h(a) {
            for (var b = Array(a.length>>2), c = 0; c < b.length; c++) {
                b[c] = 0;
            }
            for (var c = 0; c < 8 * a.length; c += 8) {
                b[c>>5]|=(255 & a.charCodeAt(c / 8))<<24 - c%32;
            }
            return b;
        }
        function i(a) {
            for (var b = "", c = 0; c < 32 * a.length; c += 8) {
                b += String.fromCharCode(a[c>>5]>>>24 - c%32 & 255);
            }
            return b;
        }
        function j(a, b) {
            return a>>>b | a<<32 - b;
        }
        function k(a, b) {
            return a>>>b;
        }
        function l(a, b, c) {
            return a & b^~a & c;
        }
        function m(a, b, c) {
            return a & b^a & c^b & c;
        }
        function n(a) {
            return j(a, 2)^j(a, 13)^j(a, 22);
        }
        function o(a) {
            return j(a, 6)^j(a, 11)^j(a, 25);
        }
        function p(a) {
            return j(a, 7)^j(a, 18)^k(a, 3);
        }
        function q(a) {
            return j(a, 17)^j(a, 19)^k(a, 10);
        }
        function r(a, b) {
            var c, d, e, f, g, h, i, j, k, r, t, u, v = new Array(1779033703, - 1150833019, 1013904242, - 1521486534, 1359893119, - 1694144372, 528734635, 1541459225), x = new Array(64);
            for (a[b>>5]|=128<<24 - b%32, a[(b + 64>>9<<4) 
                + 15] = b, k = 0;
            k < a.length;
            k += 16) {
                for (c = v[0], d = v[1], e = v[2], f = v[3], g = v[4], h = v[5], i = v[6], j = v[7], r = 0; 64 > r; r++) {
                    x[r] = 16 > r ? a[r + k] : s(s(s(q(x[r - 2]), x[r - 7]), p(x[r - 15])), x[r - 16]), t = s(s(s(s(j, o(g)), l(g, h, i)), w[r]), x[r]), u = s(n(c), m(c, d, e)), j = i, i = h, h = g, g = s(f, t), f = e, e = d, d = c, c = s(t, u);
                }
                v[0] = s(c, v[0]), v[1] = s(d, v[1]), v[2] = s(e, v[2]), v[3] = s(f, v[3]), v[4] = s(g, v[4]), v[5] = s(h, v[5]), v[6] = s(i, v[6]), v[7] = s(j, v[7]);
            }
            return v;
        }
        function s(a, b) {
            var c = (65535 & a) + (65535 & b), d = (a>>16) + (b>>16) + (c>>16);
            return d<<16 | 65535 & c;
        }
        var t = {};
        t.hex_sha256 = a;
        var u = 0, v = "", w = new Array(1116352408, 1899447441, - 1245643825, - 373957723, 961987163, 1508970993, - 1841331548, - 1424204075, - 670586216, 310598401, 607225278, 1426881987, 1925078388, - 2132889090, - 1680079193, - 1046744716, - 459576895, - 272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, - 1740746414, - 1473132947, - 1341970488, - 1084653625, - 958395405, - 710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, - 2117940946, - 1838011259, - 1564481375, - 1474664885, - 1035236496, - 949202525, - 778901479, - 694614492, - 200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, - 2067236844, - 1933114872, - 1866530822, - 1538233109, - 1090935817, - 965641998);
        return t;
    }), define("../src/core", ["../src/bootstrap", "../src/utils", "../vendor/cookies", "../vendor/numis", "../vendor/md5", "../vendor/sha256"], function(a, b, c, d, e, f) {
        var g = [], h=!1, i = {
            site: "site_id",
            limit: "pixel_limit",
            excludeBkParams: "ignore_meta",
            excludeTitle: "exclude_title",
            excludeKeywords: "exclude_keywords",
            excludeReferrer: "exclude_referrer",
            excludeLocation: "exclude_location",
            partnerID: "partner_id",
            allowMultipleCalls: "allow_multiple_calls",
            suppressMultipleCalls: "suppress_multiple_calls",
            callback: "callback",
            useImage: "use_image",
            useMultipleIframes: "use_multiple_iframes",
            allData: "all_data",
            timeOut: "timeout",
            ignoreOutsideIframe: "ignore_outside_iframe",
            eventScheduling: "event_scheduling",
            suppressEventScheduling: "suppress_event_scheduling",
            suppressCacheBusting: "suppress_cache_busting",
            pixelUrl: "pixel_url",
            pixelSecure: "pixel_secure",
            useFirstParty: "use_first_party",
            suppressFirstParty: "suppress_first_party",
            sendStatidPayload: "send_statid_payload",
            suppressStatidPayload: "suppress_statid_payload",
            metaVars: "meta_vars",
            jsList: "js_list",
            paramList: "param_list",
            useMobile: "use_mobile",
            disableMobile: "disable_mobile",
            isDebug: "is_debug",
            limitGetLength: "limit_get_length"
        }, j = {
            readCookie: readCookie,
            createCookie: createCookie,
            eraseCookie: eraseCookie,
            _dest: null,
            addParam: function(a, b, c) {
                return "undefined" != typeof varMap && varMap[b] && (b = varMap[b]), g.push("undefined" != typeof c ? a + "=" + encodeURIComponent(b + "=" + c) : a + "=" + b), BKTAG;
            },
            addBkParam: function(a, b) {
                if ("string" == typeof a && "string" == typeof b) {
                    j.addParam("phint", "__bk_" + a, b);
                } else {
                    for (var c in a) {
                        a.hasOwnProperty(c) && "string" == typeof a[c] && j.addParam("phint", "__bk_" + c, a[c]);
                    }
                }
                return BKTAG;
            },
            addHash: function(a, b, c) {
                return j.addParam("phint", a, c && "" !== c ? e.hex_md5(c) : ""), j.addParam("phint", b, c && "" !== c ? f.hex_sha256(c) : ""), BKTAG;
            },
            addEmailHash: function(a) {
                return a ? "string" != typeof a && (a = a.toString()) : a = "", a = BKTAG.util.normalizeEmail(a), j.addHash("e_id_m", "e_id_s", a);
            },
            addPhoneHash: function(a) {
                return a ? "string" != typeof a && (a = a.toString()) : a = "", a = BKTAG.util.normalizePhone(a), j.addHash("p_id_m", "p_id_s", a);
            },
            _reset: function() {
                h=!1, g = [];
                for (var a in i) {
                    if (i.hasOwnProperty(a)) {
                        var b = "bk_" + i[a];
                        window[b] = void 0;
                        try {
                            delete window[b];
                        } catch (c) {}
                    }
                }
                return BKTAG;
            },
            params: function() {
                return g;
            },
            getGlobals: function(a) {
                if (a.length) {
                    for (var b = 0; b < a.length; b++) {
                        var c = a[b];
                        "undefined" != typeof window[c] && "" !== c && "" !== window[c] && bk_addPageCtx(c, window[c]);
                    }
                } else {
                    for (var d in a) {
                        a.hasOwnProperty(d) && "string" == typeof d && ("string" == typeof a[d] || "number" == typeof a[d] || "boolean" == typeof a[d]) && bk_addPageCtx(d, a[d]);
                    }
                }
            },
            doTag: function(c, e, f, k, l, m, n, o, p) {
                var q = {
                    site: c,
                    limit: e,
                    excludeBkParams: f,
                    partnerID: k,
                    allowMultipleCalls: l,
                    callback: m,
                    allData: n,
                    timeOut: o,
                    ignoreOutsideIframe: p
                };
                for (var r in i) {
                    i.hasOwnProperty(r) && "undefined" != typeof window["bk_" + i[r]] && (q[r] = window["bk_" + i[r]]);
                }
                if ("object" == typeof c) {
                    for (var s in i) {
                        i.hasOwnProperty(s) && "undefined" != typeof c[i[s]] && (q[s] = c[i[s]]);
                    }
                }
                if (!(q.suppressMultipleCalls===!0 || "undefined" != typeof h && h && q.allowMultipleCalls!==!0)) {
                    h=!0, void 0 === q.timeOut && (q.timeOut = 1000), g.unshift("ret=" + (q.callback ? "js" : "html"));
                    var t = "undefined" != typeof q.partnerID && null !== q.partnerID;
                    t && g.unshift("partner=" + encodeURIComponent(q.partnerID));
                    var u = {
                        2607: 1,
                        2834: 1,
                        2894: 1,
                        3316: 1,
                        3317: 1,
                        3318: 1,
                        3319: 1,
                        3321: 1,
                        3322: 1,
                        3323: 1,
                        3324: 1,
                        3325: 1,
                        3326: 1,
                        3327: 1,
                        3328: 1,
                        3329: 1,
                        3330: 1,
                        3331: 1,
                        3332: 1,
                        3333: 1,
                        3334: 1,
                        3338: 1,
                        3339: 1,
                        3340: 1,
                        3341: 1,
                        3344: 1,
                        3345: 1,
                        3346: 1,
                        3348: 1
                    };
                    if (!q.excludeBkParams&&!q.excludeTitle && "" !== document.title && j.addBkParam("t", document.title), !q.excludeBkParams&&!q.excludeKeywords && j.addBkParam("k", b.getKwds()), !q.excludeBkParams&&!q.excludeReferrer && "referrer" in document && "" !== document.referrer && j.addBkParam("pr", document.referrer), !q.excludeBkParams&&!q.excludeLocation && j.addBkParam("l", window.location.toString()), q.callback ? j.addParam("jscb", encodeURIComponent(q.callback)) : "undefined" != typeof q.limit && j.addParam("limit", encodeURIComponent(q.limit)), q.allData===!0 && j.addParam("data", "all"), q.disableMobile!==!0 && q.suppressStatidPayload!==!0 && (b.isMobile() || q.sendStatidPayload) && "undefined" != typeof d && j.addParam("bknms", d.collect()), q.suppressEventScheduling!==!0 && q.eventScheduling===!0 && b.addEvent("message", function(a) {
                        if ("http://tags.bluekai.com" === a.origin) {
                            var b = document.getElementById("__bkframe"), c = function(a) {
                                return function() {
                                    b.contentWindow.postMessage(JSON.stringify({
                                        event: a
                                    }), "*"), b.contentWindow.postMessage(JSON.stringify({
                                        schedule: "run"
                                    }), "*");
                                };
                            }, d = JSON.parse(a.data);
                            if (d.status && "loaded" === d.status && b.contentWindow.postMessage(JSON.stringify({
                                get: "events"
                            }), "*"), d.scheduled) {
                                var e = JSON.parse(d.scheduled);
                                for (var f in e) {
                                    var g = "window" === e[f] ? window: document.getElementById(e[f]);
                                    g.addEventListener(f, c(f), !1);
                                }
                            }
                            d.status && "complete" === d.status && b.contentWindow.postMessage(JSON.stringify({
                                status: "ack"
                            }), "*");
                        }
                    }, !1), q.suppressFirstParty!==!0 && q.useFirstParty && (readCookie("bkrid") || createCookie("bkrid", Math.floor(Math.random() * Math.pow(2, 31)), 180), readCookie("bkrid") && j.addParam("bkrid", encodeURIComponent(readCookie("bkrid")))), (b.isDebug() || q.isDebug) && j.addParam("debug", "1"), !q.excludeBkParams && "undefined" != typeof q.paramList && j.getGlobals(q.paramList), !q.excludeBkParams && "undefined" != typeof q.jsList && j.getGlobals(q.jsList), !q.excludeBkParams && "undefined" != typeof q.metaVars) {
                        for (var v = 0; v < q.metaVars.length; v++) {
                            var w = b.getMeta(q.metaVars[v]);
                            null !== w && j.addBkParam(q.metaVars[v], w);
                        }
                    }
                    q.suppressCacheBusting!==!0 && j.addParam("r", parseInt(99999999 * Math.random(), 10));
                    var x = "https://stags.bluekai.com/", y = "http://tags.bluekai.com/", z = ("https:" === document.location.protocol ? q.pixelSecure ? q.pixelSecure : x : q.pixelUrl ? q.pixelUrl : y) + (t ? "psite" : "site") + "/" + q.site, A = z + "?" + g.join("&");
                    if (q.limitGetLength && (A = A.substr(0, 2000)), BKTAG._dest = j._dest = A, q.callback) {
                        if (q.useImage) {
                            var B = document.createElement("span");
                            B.style.display = "none";
                            var C = document.getElementsByTagName("body")[0];
                            C.appendChild(B);
                            var D = document.createElement("img");
                            D.src = j._dest, B.appendChild(D);
                        } else {
                            var E = document.createElement("script");
                            E.type = "text/javascript", E.src = j._dest, E.id = "__bk_script__", u["" + c] && setTimeout(function() {
                                var a = document.getElementById("__bk_script__");
                                a && (a.removeNode ? a.removeNode(!0) : a.parentNode.removeChild(a));
                            }, q.timeOut), document.getElementsByTagName("head")[0].appendChild(E);
                        }
                    } else {
                        if (a.checkFrame(function() {
                            if (q.useMultipleIframes) {
                                var b = a.createFrame("__bkframe_" + q.site + "_" + (new Date).valueOf());
                                b.className = "__bkframe_site_" + q.site, b.src = A, document.getElementsByTagName("body")[0].appendChild(b);
                            } else {
                                if (frames && frames.__bkframe) {
                                    frames.__bkframe.location.replace(A);
                                } else {
                                    var c = a.createFrame("__bkframe");
                                    document.getElementsByTagName("body")[0].appendChild(c), frames.__bkframe.location.replace(A);
                                }
                            }
                        }), g.shift(), "undefined" != typeof q.ignoreOutsideIframe && q.ignoreOutsideIframe===!1) {
                            g.unshift("ret=jsht"), A = z + "?" + g.join("&"), A = A.substr(0, 2000);
                            var F = document.createElement("script");
                            F.src = A, F.type = "text/javascript", document.getElementsByTagName("body").item(0).appendChild(F);
                        }
                    }
                    "function" == typeof e && e(), g = [];
                }
            }
        };
        for (var k in j) {
            j.hasOwnProperty(k) && (window.BKTAG[k] = j[k]);
        }
        return "function" == typeof window.bk_async && window.setTimeout(function() {
            bk_async();
        }, 0), j;
    }), define("../src/aliases", ["../src/core"], function() {
        window.BKTAG.addCtxParam = function(a, b) {
            return BKTAG.addParam("phint", a, b), BKTAG;
        }, window.BKTAG.addBkParam = function(a, b) {
            return BKTAG.addParam("phint", "__bk_" + a, b), BKTAG;
        }, window.BKTAG.addPageCtx = window.bk_addPageCtx = window.BKTAG.addUserCtx = window.bk_addUserCtx = function(a, b) {
            return BKTAG.addParam("phint", a, b), BKTAG;
        }, window.bk_addEmailHash = function(a) {
            return BKTAG.addEmailHash(a), BKTAG;
        }, window.bk_addPhoneHash = function(a) {
            return BKTAG.addPhoneHash(a), BKTAG;
        }, window.BKTAG.doJSTag = window.bk_doJSTag = function(a, b, c) {
            BKTAG.doTag(a, b, !1, null, c);
        }, window.BKTAG.doJSTag2 = window.bk_doJSTag2 = function(a, b) {
            BKTAG.doTag(a, b);
        }, window.BKTAG.doCarsJSTag = window.bk_doCarsJSTag = function(a, b) {
            BKTAG.doTag(a, b, !0);
        }, window.BKTAG.doPartnerAltTag = window.bk_doPartnerAltTag = function(a, b, c) {
            ("undefined" == typeof c || null === c) && (c = 0), BKTAG.doTag(a, b, !1, c);
        }, window.BKTAG.doCallbackTag = window.bk_doCallbackTag = function(a, b, c, d) {
            BKTAG.doTag(a, 0, !1, null, c, b, d);
        }, window.BKTAG.doCallbackTagWithTimeOut = window.bk_doCallbackTagWithTimeOut = function(a, b, c, d, e) {
            BKTAG.doTag(a, 0, !1, null, c, b, d, e);
        }, window.BKTAG.sendData = function(a) {
            BKTAG.doTag(a);
        };
    }), define("mobile", ["../vendor/json2", "../src/core", "../src/aliases"], function() {}), require("mobile");
}();
BKTAG.version = "3.0.21";
