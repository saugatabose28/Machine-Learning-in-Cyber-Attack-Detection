// Copyright (c) 2014 VigLink
/*
 VigLink JavaScript Library -- http://www.viglink.com

 Permission is hereby granted to create derivative works, but only for use
 with the VigLink web service.

 Includes:

 Sizzle CSS Selector Engine v1.10.20-pre
 http://sizzlejs.com/

 Copyright 2013 jQuery Foundation, Inc. and other contributors
 Released under the MIT license
 http://jquery.org/license

 Date: 2014-05-22
*/
(function(m) {
    var f, b = {
        _breaker: {},
        each: function(a, c) {
            var d, e;
            if ("object" === b.type(a) && a.hasOwnProperty)
                for (d in a) {
                    if (a.hasOwnProperty(d) && c(a[d], d) === b._breaker)
                        break
                } else if (a) {
                d = 0;
                for (e = a.length; d < e && c(a[d], d) !== b._breaker; d++);
            }
        },
        extend: function(a) {
            var c, b, e, g, l = arguments.length;
            a = a || {};
            for (b = 1; b < l; b++)
                if (g = arguments[b], void 0 !== g && null !== g)
                    for (e in g)
                        c = g[e], a !== c && void 0 !== c && (a[e] = c);
            return a
        },
        noop: function() {},
        type: function() {
            var a = function(a, b) {
                try {
                    return ("function" === typeof window[b] || "object" ===
                    typeof window[b]) && a instanceof window[b]
                } catch (e) {}
                return !1
            };
            return function(c) {
                return null === c ? "null" : void 0 === c ? "undefined" : a(c, "HTMLElement") || "object" === typeof c && 1 === c.nodeType && "string" === typeof c.nodeName ? "element" : c == c.window ? "window" : a(c, "HTMLDocument") || "object" === typeof c && ("defaultView"in c || "parentWindow"in c) ? "document" : Object.prototype.toString.call(c).slice(8, - 1).toLowerCase()
            }
        }()
    };
    b.extend(b, {
        addClass: function(a, c) {
            b.hasClass(a, c) || (a.className = (a.className ? a.className + " " : "") + c)
        },
        all: function(a, c) {
            var d = "array" === b.type(a) ? []: {};
            b.each(a, function(a, g) {
                c(a, g) && ("array" === b.type(d) ? d.push(a) : d[g] = a)
            });
            return d
        },
        ancestors: function(a) {
            for (var c = [a]; (a = a.parentNode) && 1 === a.nodeType;)
                c.push(a);
            return c
        },
        attrValues: function(a, c, b) {
            return (c = a[c]) ? c.split(b || " ") : []
        },
        batchable: function(a, c) {
            c = c || b.noop;
            var d = function() {
                return b.extend({
                    batch: !0,
                    timeout: 100
                }, c())
            }, e = b.traits.cors && b.traits.json, g = [], l = null, h = function() {
                null !== l && (clearTimeout(l), l = null);
                1 === g.length ? a.apply(null, g[0].arguments) :
                1 < g.length && a.apply(null, g);
                g = []
            }, f = function() {
                g.push({
                    arguments: b.toArray(arguments),
                    batch: !0
                });
                !e ||!d().batch ? h() : null === l && (l = setTimeout(b.entryPoint(b.bind(function() {
                    h()
                }, this)), d().timeout))
            };
            b.extend(f, {
                flush: h,
                now: a
            });
            return f
        },
        batchArgs: function(a, c) {
            return b.map(a, function(a) {
                return void 0 === c ? a.arguments : a.arguments[c]
            })
        },
        batched: function(a) {
            a = b.toArray(a);
            if ("array" === b.type(a))
                return b.all(a, function(a) {
                    return "object" === b.type(a) && a.batch && "array" === b.type(a.arguments)
                }).length === a.length
        },
        bind: function(a, c) {
            return function() {
                return a.apply(c, arguments)
            }
        },
        cache: function() {
            var a = {}, c = "vglnk_" + (new Date).getTime(), b = 0;
            return function(e, g, l) {
                if (e) {
                    var h = e[c];
                    if (h || void 0 !== l)
                        return h || (h=++b), a[h] || (e[c] = h, a[h] = {}), void 0 !== l && (a[h][g] = l), "string" === typeof g ? a[h][g] : a[h]
                }
            }
        }(),
        canonicalizeHostname: function(a) {
            "string" === typeof a && (a = b.createA(a));
            return a.hostname ? a.hostname.toString().toLowerCase().replace(/^www\./, "").replace(/:.*$/, "") : ""
        },
        clone: function(a) {
            return b.extend({}, a)
        },
        contains: function(a,
        c) {
            return Boolean(b.find(a, function(a) {
                return a === c
            }))
        },
        context: function(a) {
            "element" === b.type(a) && (a = a.ownerDocument);
            "document" === b.type(a) && (a = a.defaultView || a.parentWindow);
            if ("window" === b.type(a))
                return a
        },
        containsPII: function(a) {
            return /\b[A-Z0-9._%+-]+(?:%(?:25)*40|@)[A-Z0-9.-]+\.[A-Z]{2,4}\b/i.test(a)
        },
        contextIsAncestor: function(a, c) {
            for (var b = a.self; b.parent && b.parent !== b;)
                if (b = b.parent, b === c)
                    return !0;
            return !1
        },
        cors: function(a, c, b) {
            var e, g = function() {
                b ? b(e.responseText) : eval(e.responseText)
            };
            e = new window.XMLHttpRequest;
            e.onreadystatechange = function() {
                4 === e.readyState && 200 === e.status && g()
            };
            try {
                return e.open("POST", a), e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), e.withCredentials=!0, e.send(c), !0
            } catch (l) {
                return !1
            }
        },
        createA: function(a, c) {
            return b.createEl("a", {
                href: a,
                target: c
            })
        },
        createEl: function(a, c, d, e) {
            var g;
            a = (e || document).createElement(a);
            c = c || {};
            d = d || {};
            for (g in c)
                void 0 !== c[g] && (a[g] = c[g]);
            b.css(a, d);
            return a
        },
        css: function(a, c) {
            for (var b in c)
                try {
                    a.style[b] =
                    c[b]
            } catch (e) {}
            return a
        },
        destructing: function(a) {
            return function(a) {
                var b=!1, e;
                return function() {
                    b || (e = a.apply(null, arguments), b=!0);
                    return e
                }
            }(a)
        },
        entryPoint: function(a) {
            return b.exceptionLogger(function() {
                var c;
                b.observer.pause();
                c = a.apply(this, arguments);
                b.observer.resume();
                return c
            })
        },
        escapeRegExp: function() {
            var a;
            return function(c) {
                a = a || /([.*+?^${}()|[\]\\])/g;
                return c.replace(a, "\\$1")
            }
        }(),
        eventLink: function(a) {
            var c, b = a.target || a.srcElement;
            do {
                try {
                    c = b.nodeType
                } catch (e) {
                    break
                }
                if (1 === c && (a = b.tagName.toUpperCase(),
                "A" === a || "AREA" === a))
                    return b;
                b = b.parentNode
            }
            while (b)
            }, exceptionLogger: function() {
            var a=!1, c = b.noop;
            return function(b, e) {
                if (void 0 !== e)
                    a = e, c = b;
                else 
                    return function() {
                        if (a)
                            try {
                                return b.apply(this, arguments)
                            } catch (e) {
                                c(e)
                            } else 
                                return b.apply(this, arguments)
                            }
            }
        }(), find : function(a, c) {
            var d;
            b.each(a, function(a, g) {
                if (c(a, g))
                    return d = a, b._breaker
            });
            return d
        }, generateNodeFilter: function() {
            var a = function(a, b) {
                var g, l;
                b = "," + b.join(",") + ",";
                g = 0;
                for (l = a.length; g < l; g++)
                    if (c(a[g], b))
                        return !0;
                return !1
            }, c = function(a,
            c) {
                return - 1 !== c.indexOf("," + a + ",")
            };
            return function(d) {
                d = b.extend({
                    custom: null,
                    classes: [],
                    rels: [],
                    tags: []
                }, d);
                d.tags.length && (d.tags = "," + d.tags.join(",").toLowerCase() + ",");
                return function(e, g) {
                    g = b.extend({
                        ancestors: !0,
                        self: !0
                    }, g);
                    var l=!0, h=!0, f = function(e, g) {
                        var h;
                        if (h=!(d.tags.length && c(e.nodeName.toLowerCase(), d.tags))) {
                            if (h = d.classes.length) {
                                h = d.classes;
                                var l = b.attrValues(e, "className");
                                h = a(h, l)
                            }
                            if (h=!h) {
                                if (h = d.rels.length)
                                    h = d.rels, l = b.attrValues(e, "rel"), h = c(e.nodeName.toLowerCase(), ",a,") &&
                                    a(h, l);
                                h=!h&&!("function" === b.type(d.custom) && d.custom(e, g))
                            }
                        }
                        return h
                    }, h=!g.self || f(e, !0);
                    if (g.ancestors)
                        for (; e.parentNode;)
                            if (e = e.parentNode, 1 === e.nodeType&&!f(e, !1)) {
                                l=!1;
                                break
                            }
                    return h && l
                }
            }
        }(), fromJSON : function(a) {
            if (b.traits.json)
                try {
                    return window.JSON.parse(a)
            } catch (c) {}
        }, fromQuery: function(a) {
            "?" === a.substr(0, 1) && (a = a.substr(1));
            a = a.split("&");
            var c = {};
            b.each(a, function(a) {
                a = a.split("=");
                c[decodeURIComponent(a[0])] = decodeURIComponent(a[1])
            });
            return c
        }, geometry: function() {
            var a, c = arguments.length,
            d = Infinity, e = Infinity, g =- Infinity, l =- Infinity, h;
            for (a = 0; a < c; a++)
                h = b.position(arguments[a]), d = Math.min(d, h.x), e = Math.min(e, h.y), g = Math.max(g, h.x + arguments[a].offsetWidth), l = Math.max(l, h.y + arguments[a].offsetHeight);
            return {
                x: d,
                y: e,
                w: g - d,
                h: l - e,
                x1: d,
                y1: e,
                x2: g,
                y2: l
            }
        }, getActualHref: function(a) {
            return b.cache(a, "href") || a.href
        }, hasAttrValue: function(a, c, d, e) {
            return c ? b.contains(b.attrValues(a, c, e), d) : !1
        }, hasClass: function(a, c) {
            return b.hasAttrValue(a, "className", c)
        }, hasRel: function(a, c) {
            return b.hasAttrValue(a,
            "rel", c)
        }, isArray: function(a) {
            return "array" === b.type(a)
        }, isDefaultPrevented: function(a) {
            return a.isDefaultPrevented && a.isDefaultPrevented() ||!1 === a.returnValue ||!0 === a.defaultPrevented
        }, isInDom: function(a) {
            return Boolean(a && a.offsetParent)
        }, jsonp: function(a) {
            var c = document.getElementsByTagName("script")[0];
            a = b.createEl("script", {
                type: "text/javascript",
                src: a
            });
            c.parentNode.insertBefore(a, c)
        }, map: function(a, c) {
            return b.reduce([], a, function(a, b, g) {
                a.push(c(b, g));
                return a
            })
        }, matches: function(a, c) {
            if ("element" !==
            b.type(a))
                return !1;
            try {
                return this.Sizzle.matchesSelector(a, c)
            } catch (d) {
                return !0
            }
        }, on: function() {
            var a;
            return function(c, d, e) {
                var g, l, h;
                if (1 === arguments.length)
                    a = c;
                else {
                    if (2 === arguments.length) {
                        if (!a)
                            return;
                        e = d;
                        d = c;
                        c = a
                    } else 
                        g = b.toArray(arguments).slice(3, arguments.length);
                    try {
                        l = c["on" + d]
                    } catch (f) {}
                    "function" === typeof l && (c["on" + d] = b.bind(function(a) {
                        a = a || window.event;
                        var d = l.apply(c, arguments);
                        this.exceptionLogger(function() {
                            return a ? (void 0 !== d&&!1 !== a.returnValue && (a.returnValue = d), b.isDefaultPrevented(a) &&
                            "function" === b.type(a.preventDefault) && a.preventDefault(), a.returnValue) : d
                        })()
                    }, this));
                    h = b.entryPoint(function() {
                        if (a.enabled())
                            return e.apply(null, b.toArray(arguments).concat(g || []))
                    });
                    c.addEventListener ? c.addEventListener(d, h, !1) : c.attachEvent && c.attachEvent("on" + d, h)
                }
            }
        }(), position : function(a, c) {
            var d, e = 0, g = 0, l = 0, h = 0;
            c = c || document;
            if (!b.isInDom(a))
                return !1;
            d = a;
            do 
                e += d.offsetLeft, g += d.offsetTop, d = d.offsetParent;
            while (d);
            d = a;
            do 
                l += d.scrollLeft, h += d.scrollTop, d = d.parentNode;
            while (d && d !== c.body);
            return {
                x: e -
                l,
                y: g - h
            }
        }, preventDefault: function(a) {
            a.preventDefault && a.preventDefault();
            return a.returnValue=!1
        }, prune: function(a) {
            b.each(a, function(c, b) {
                (null === c || void 0 === c) && delete a[b]
            });
            return a
        }, ready: function() {
            var a=!1, c = [], d=!1, e, g, l, h, f;
            document.addEventListener ? l = function() {
                document.removeEventListener("DOMContentLoaded", l, !1);
                f()
            } : document.attachEvent && (h = function() {
                "complete" === document.readyState && (document.detachEvent("onreadystatechange", h), f())
            });
            e = function() {
                if (!a) {
                    a=!0;
                    if ("interactive" === document.readyState ||
                    "complete" === document.readyState)
                        return f();
                    if (document.addEventListener)
                        document.addEventListener("DOMContentLoaded", l, !1);
                    else if (document.attachEvent) {
                        document.attachEvent("onreadystatechange", h);
                        var c=!1;
                        try {
                            c = null === window.frameElement
                        } catch (d) {}
                        document.documentElement.doScroll && c && g()
                    }
                    b.on(window, "load", f)
                }
            };
            g = function() {
                if (!d) {
                    try {
                        document.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(b.entryPoint(g), 1);
                        return 
                    }
                    f()
                }
            };
            f = function() {
                if (!d) {
                    if (!document.body)
                        return setTimeout(b.entryPoint(f),
                        13);
                    d=!0;
                    c && (b.each(c, function(a) {
                        a()
                    }), c = null)
                }
            };
            return function(a) {
                e();
                d ? a() : c.push(a)
            }
        }(), reduce : function(a, c, d) {
            b.each(c, function(c, b) {
                a = d(a, c, b)
            });
            return a
        }, reformatKeys: function(a) {
            var c, d, e = function(a) {
                return "_" + a.toLowerCase()
            };
            for (c in a)
                d = c.replace(/([A-Z])/g, e), "object" === b.type(a[c]) && (a[c] = b.reformatKeys(a[c])), d !== c && (a[d] = a[c], delete a[c]);
            return a
        }, removeClass: function(a, c) {
            if (b.hasClass(a, c)) {
                var d, e, g = b.attrValues(a, "className");
                d = 0;
                for (e = g.length; d < e; d++)
                    g[d] === c && delete g[d];
                a.className =
                g.join(" ")
            }
        }, request: function(a, c, d) {
            var e, g, l, h = b.uniqid("vglnk_"), f = b.toArray(arguments).slice(3, arguments.length);
            d = b.extend({
                fn: b.noop,
                jsonp: !0,
                "return": !1,
                timeout: null
            }, d);
            "string" === typeof d.fn ? (e = window[d.fn], h = d.fn) : "function" === typeof d.fn && (e = d.fn);
            "function" === b.type(e) && (l = b.entryPoint(b.destructing(function() {
                e.apply(this, b.toArray(arguments).concat(f));
                window[h] && (window[h] = void 0)
            })), null !== d.timeout && setTimeout(l, d.timeout));
            !0 === d.jsonp && (window[h] = l, c = b.extend({
                format: "jsonp",
                jsonp: h
            },
            c));
            g = b.toQuery(c);
            return d["return"] ? a + (g.length ? "?" : "") + g : b.traits.cors && b.cors(a, g, d.jsonp ? null : l)?!0 : b.jsonp(a + (g.length ? "?" : "") + g)
        }, select: function() {
            try {
                return this.Sizzle.apply(this.Sizzle, arguments)
            } catch (a) {
                return []
            }
        }, toArray: function(a) {
            if (a && void 0 !== a.length)
                try {
                    return Array.prototype.slice.call(a, 0)
            } catch (c) {
                var b, e, g = [];
                b = 0;
                for (e = a.length; b < e; b++)
                    g[b] = a[b];
                return g
            }
        }, toJSON: function(a) {
            if (b.traits.json)
                try {
                    return window.JSON.stringify(a)
            } catch (c) {}
        }, toQuery: function(a) {
            var c = "";
            b.each(b.prune(a),
            function(a, b) {
                c += "&" + encodeURIComponent(b) + "=" + encodeURIComponent(a)
            });
            return c.substr(1)
        }, transmitsPII: function(a) {
            return b.containsPII(a + " " + document.referrer)
        }, updateUrl: function(a, c) {
            return b.extend(b.createA(a), c).href
        }, uniqid: function() {
            var a = 0;
            return function(b) {
                return (b || "") + (new Date).getTime() + a++
            }
        }(), unique : function(a) {
            return b.reduce([], a, function(a, d) {
                b.contains(a, d) || a.push(d);
                return a
            })
        }, withScope: function() {
            var a = function(a, d, e) {
                if (e.self && b.contains(d, a))
                    return a;
                if (e.ancestors)
                    return b.find(b.ancestors(a).slice(0),
                    function(a) {
                        return b.contains(d, a)
                    })
            };
            return function(c, d, e) {
                var g = b.select(d);
                e = b.extend({
                    ancestors: !0,
                    descendants: !0,
                    self: !0
                });
                return b.all(b.map(c, function(c) {
                    var d, f = [];
                    (d = a(c, g, e)) ? f.push(d) : 1 === c.nodeType && e.descendants && b.each(g, function(a) {
                        b.contains(b.ancestors(a), c) && f.push(a)
                    });
                    return [c, f]
                }), function(a) {
                    return 0 < a[1].length
                })
            }
        }()
    });
    var s = function() {
        var a = b.find(b.toArray(arguments),
        function(a) {
            return "function" === b.type(a)
        });
        a && (b.Sizzle = a())
    }; s.amd=!0; (function(a) {
        function b(a, c, d, e) {
            var h,
            g, l, f, k;
            (c ? c.ownerDocument || c : C) !== A && K(c);
            c = c || A;
            d = d || [];
            if (!a || "string" !== typeof a)
                return d;
            if (1 !== (f = c.nodeType) && 9 !== f)
                return [];
            if (F&&!e) {
                if (h = ra.exec(a))
                    if (l = h[1])
                        if (9 === f)
                            if ((g = c.getElementById(l)) && g.parentNode) {
                                if (g.id === l)
                                    return d.push(g), d
                            } else 
                                return d;
                            else {
                                if (c.ownerDocument && (g = c.ownerDocument.getElementById(l)) && U(c, g) && g.id === l)
                                    return d.push(g), d
                            } else {
                                if (h[2])
                                    return L.apply(d, c.getElementsByTagName(a)), d;
                                    if ((l = h[3]) && w.getElementsByClassName && c.getElementsByClassName)
                                        return L.apply(d,
                                        c.getElementsByClassName(l)), d
                            }
                if (w.qsa && (!B ||!B.test(a))) {
                    g = h = x;
                    l = c;
                    k = 9 === f && a;
                    if (1 === f && "object" !== c.nodeName.toLowerCase()) {
                        f = V(a);
                        (h = c.getAttribute("id")) ? g = h.replace(sa, "\\$&") : c.setAttribute("id", g);
                        g = "[id='" + g + "'] ";
                        for (l = f.length; l--;)
                            f[l] = g + m(f[l]);
                        l = ea.test(a) && v(c.parentNode) || c;
                        k = f.join(",")
                    }
                    if (k)
                        try {
                            return L.apply(d, l.querySelectorAll(k)), d
                    } catch (p) {} finally {
                        h || c.removeAttribute("id")
                    }
                }
            }
            return ka(a.replace(Z, "$1"), c, d, e)
        }
        function d() {
            function a(c, d) {
                b.push(c + " ") > r.cacheLength && delete a[b.shift()];
                return a[c + " "] = d
            }
            var b = [];
            return a
        }
        function e(a) {
            a[x]=!0;
            return a
        }
        function g(a) {
            var b = A.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b)
            }
        }
        function l(a, b) {
            for (var c = a.split("|"), d = a.length; d--;)
                r.attrHandle[c[d]] = b
        }
        function h(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || la) - (~a.sourceIndex || la);
            if (d)
                return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b)
                        return - 1;
            return a ? 1 : - 1
        }
        function f(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() &&
                b.type === a
            }
        }
        function k(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function q(a) {
            return e(function(b) {
                b =+ b;
                return e(function(c, d) {
                    for (var e, g = a([], c.length, b), h = g.length; h--;)
                        if (c[e = g[h]])
                            c[e]=!(d[e] = c[e])
                })
            })
        }
        function v(a) {
            return a && typeof a.getElementsByTagName !== Q && a
        }
        function n() {}
        function m(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++)
                d += a[b].value;
            return d
        }
        function u(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, g = ua++;
            return b.first ? function(b, c,
            H) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e)
                        return a(b, c, H)
            } : function(b, c, H) {
                var h, l, da = [D, g];
                if (H)
                    for (; b = b[d];) {
                        if ((1 === b.nodeType || e) && a(b, c, H))
                            return !0
                    } else 
                        for (; b = b[d];)
                            if (1 === b.nodeType || e) {
                                l = b[x] || (b[x] = {});
                                if ((h = l[d]) && h[0] === D && h[1] === g)
                                    return da[2] = h[2];
                                    l[d] = da;
                                    if (da[2] = a(b, c, H))
                                        return !0
                            }
            }
        }
        function t(a) {
            return 1 < a.length ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            } : a[0]
        }
        function R(a, b, c, d, e) {
            for (var h, g = [], l = 0, f = a.length, k = null != b; l < f; l++)
                if (h = a[l])
                    if (!c || c(h, d, e))
                        g.push(h),
                        k && b.push(l);
            return g
        }
        function fa(a, d, H, h, g, l) {
            h&&!h[x] && (h = fa(h));
            g&&!g[x] && (g = fa(g, l));
            return e(function(e, l, f, k) {
                var p, q, z = [], v = [], m = l.length, n;
                if (!(n = e)) {
                    n = d || "*";
                    for (var y = f.nodeType ? [f] : f, E = [], r = 0, u = y.length; r < u; r++)
                        b(n, y[r], E);
                    n = E
                }
                n = a && (e ||!d) ? R(n, z, a, f, k) : n;
                y = H ? g || (e ? a : m || h) ? [] : l : n;
                H && H(n, y, f, k);
                if (h) {
                    p = R(y, v);
                    h(p, [], f, k);
                    for (f = p.length; f--;)
                        if (q = p[f])
                            y[v[f]]=!(n[v[f]] = q)
                }
                if (e) {
                    if (g || a) {
                        if (g) {
                            p = [];
                            for (f = y.length; f--;)
                                if (q = y[f])
                                    p.push(n[f] = q);
                            g(null, y = [], p, k)
                        }
                        for (f = y.length; f--;)
                            if ((q = y[f]) &&
                            - 1 < (p = g ? O.call(e, q) : z[f]))
                                e[p]=!(l[p] = q)
                            }
                } else 
                    y = R(y === l ? y.splice(m, y.length) : y), g ? g(null, l, y, k) : L.apply(l, y)
            })
        }
        function ga(a) {
            var b, c, d, e = a.length, g = r.relative[a[0].type];
            c = g || r.relative[" "];
            for (var h = g ? 1 : 0, l = u(function(a) {
                return a === b
            }, c, !0), f = u(function(a) {
                return - 1 < O.call(b, a)
            }, c, !0), k = [function(a, c, d) {
                return !g && (d || c !== $) || ((b = c).nodeType ? l(a, c, d) : f(a, c, d))
            }
            ]; h < e; h++)
                if (c = r.relative[a[h].type])
                    k = [u(t(k), c)];
                else {
                    c = r.filter[a[h].type].apply(null, a[h].matches);
                    if (c[x]) {
                        for (d=++h; d < e&&!r.relative[a[d].type]; d++);
                        return fa(1 < h && t(k), 1 < h && m(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*": ""
                        })).replace(Z, "$1"), c, h < d && ga(a.slice(h, d)), d < e && ga(a = a.slice(d)), d < e && m(a))
                    }
                    k.push(c)
                }
            return t(k)
        }
        function wa(a, d) {
            var h = 0 < d.length, g = 0 < a.length, l = function(e, l, f, k, p) {
                var q, z, n, v = 0, m = "0", Y = e && [], E = [], u = $, ja = e || g && r.find.TAG("*", p), w = D += null == u ? 1: Math.random() || 0.1, t = ja.length;
                for (p && ($ = l !== A && l); m !== t && null != (q = ja[m]); m++) {
                    if (g && q) {
                        for (z = 0; n = a[z++];)
                            if (n(q, l, f)) {
                                k.push(q);
                                break
                            }
                        p && (D = w)
                    }
                    h && ((q=!n && q) && v--, e && Y.push(q))
                }
                v +=
                m;
                if (h && m !== v) {
                    for (z = 0; n = d[z++];)
                        n(Y, E, l, f);
                    if (e) {
                        if (0 < v)
                            for (; m--;)
                                !Y[m]&&!E[m] && (E[m] = xa.call(k));
                        E = R(E)
                    }
                    L.apply(k, E);
                    p && (!e && 0 < E.length && 1 < v + d.length) && b.uniqueSort(k)
                }
                p && (D = w, $ = u);
                return Y
            };
            return h ? e(l) : l
        }
        var S, w, r, aa, ma, V, ha, ka, $, M, T, K, A, G, F, B, P, ba, U, x = "sizzle" +- new Date, C = a.document, D = 0, ua = 0, na = d(), oa = d(), pa = d(), ia = function(a, b) {
            a === b && (T=!0);
            return 0
        }, Q = "undefined", la =- 2147483648, ya = {}.hasOwnProperty, N = [], xa = N.pop, za = N.push, L = N.push, qa = N.slice, O = N.indexOf || function(a) {
            for (var b = 0, c = this.length; b <
            c; b++)
                if (this[b] === a)
                    return b;
            return - 1
        }, Z = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g, Aa = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, Ba = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, Ca = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g, Da = RegExp(":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
        Ea = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/, ca = {
            ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
            ATTR: RegExp("^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\]"),
            PSEUDO: RegExp("^:((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
            bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
            "i")
        }, Fa = /^(?:input|select|textarea|button)$/i, Ga = /^h\d$/i, W = /^[^{]+\{\s*\[native \w/, ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ea = /[+~]/, sa = /'|\\/g, I = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig, J = function(a, b, c) {
            a = "0x" + b - 65536;
            return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a>>10 | 55296, a & 1023 | 56320)
        };
        try {
            L.apply(N = qa.call(C.childNodes), C.childNodes), N[C.childNodes.length].nodeType
        } catch (Ha) {
            L = {
                apply: N.length ? function(a, b) {
                    za.apply(a, qa.call(b))
                }
                : function(a, b) {
                    for (var c =
                    a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        w = b.support = {};
        ma = b.isXML = function(a) {
            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
        };
        K = b.setDocument = function(a) {
            var b = a ? a.ownerDocument || a: C;
            a = b.defaultView;
            if (b === A || 9 !== b.nodeType ||!b.documentElement)
                return A;
            A = b;
            G = b.documentElement;
            F=!ma(b);
            a && a !== a.top && (a.addEventListener ? a.addEventListener("unload", function() {
                K()
            }, !1) : a.attachEvent && a.attachEvent("onunload", function() {
                K()
            }));
            w.attributes = g(function(a) {
                a.className = "i";
                return !a.getAttribute("className")
            });
            w.getElementsByTagName = g(function(a) {
                a.appendChild(b.createComment(""));
                return !a.getElementsByTagName("*").length
            });
            w.getElementsByClassName = W.test(b.getElementsByClassName) && g(function(a) {
                a.innerHTML = "<div class='a'></div><div class='a i'></div>";
                a.firstChild.className = "i";
                return 2 === a.getElementsByClassName("i").length
            });
            w.getById = g(function(a) {
                G.appendChild(a).id = x;
                return !b.getElementsByName ||!b.getElementsByName(x).length
            });
            w.getById ? (r.find.ID = function(a, b) {
                if (typeof b.getElementById !== Q && F) {
                    var c =
                    b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, r.filter.ID = function(a) {
                var b = a.replace(I, J);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete r.find.ID, r.filter.ID = function(a) {
                var b = a.replace(I, J);
                return function(a) {
                    return (a = typeof a.getAttributeNode !== Q && a.getAttributeNode("id")) && a.value === b
                }
            });
            r.find.TAG = w.getElementsByTagName ? function(a, b) {
                if (typeof b.getElementsByTagName !== Q)
                    return b.getElementsByTagName(a)
            } : function(a, b) {
                var c, d = [], e = 0, h = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c =
                    h[e++];)
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return h
            };
            r.find.CLASS = w.getElementsByClassName && function(a, b) {
                if (typeof b.getElementsByClassName !== Q && F)
                    return b.getElementsByClassName(a)
            };
            P = [];
            B = [];
            if (w.qsa = W.test(b.querySelectorAll))
                g(function(a) {
                    a.innerHTML = "<select msallowclip=''><option selected=''></option></select>";
                    a.querySelectorAll("[msallowclip^='']").length && B.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                    a.querySelectorAll("[selected]").length || B.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                    a.querySelectorAll(":checked").length || B.push(":checked")
                }), g(function(a) {
                    var c = b.createElement("input");
                    c.setAttribute("type", "hidden");
                    a.appendChild(c).setAttribute("name", "D");
                    a.querySelectorAll("[name=d]").length && B.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                    a.querySelectorAll(":enabled").length || B.push(":enabled", ":disabled");
                    a.querySelectorAll("*,:x");
                    B.push(",.*:")
                });
            (w.matchesSelector = W.test(ba = G.matches || G.webkitMatchesSelector || G.mozMatchesSelector || G.oMatchesSelector || G.msMatchesSelector)) &&
            g(function(a) {
                w.disconnectedMatch = ba.call(a, "div");
                ba.call(a, "[s!='']:x");
                P.push("!=", ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
            });
            B = B.length && RegExp(B.join("|"));
            P = P.length && RegExp(P.join("|"));
            U = (a = W.test(G.compareDocumentPosition)) || W.test(G.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement: a, d = b && b.parentNode;
                return a === d ||!(!d ||!(1 === d.nodeType && (c.contains ? c.contains(d) : a.compareDocumentPosition && a.compareDocumentPosition(d) & 16)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a)
                            return !0;
                return !1
            };
            ia = a ? function(a, c) {
                if (a === c)
                    return T=!0, 0;
                var d=!a.compareDocumentPosition-!c.compareDocumentPosition;
                if (d)
                    return d;
                d = (a.ownerDocument || a) === (c.ownerDocument || c) ? a.compareDocumentPosition(c) :
                1;
                return d & 1 ||!w.sortDetached && c.compareDocumentPosition(a) === d ? a === b || a.ownerDocument === C && U(C, a)?-1 : c === b || c.ownerDocument === C && U(C, c) ? 1 : M ? O.call(M, a) - O.call(M, c) : 0 : d & 4?-1 : 1
            } : function(a, c) {
                if (a === c)
                    return T=!0, 0;
                var d, e = 0;
                d = a.parentNode;
                var g = c.parentNode, X = [a], l = [c];
                if (!d ||!g)
                    return a === b?-1 : c === b ? 1 : d?-1 : g ? 1 : M ? O.call(M, a) - O.call(M, c) : 0;
                if (d === g)
                    return h(a, c);
                for (d = a; d = d.parentNode;)
                    X.unshift(d);
                for (d = c; d = d.parentNode;)
                    l.unshift(d);
                for (; X[e] === l[e];)
                    e++;
                return e ? h(X[e], l[e]) : X[e] === C?-1 : l[e] ===
                C ? 1 : 0
            };
            return b
        };
        b.matches = function(a, d) {
            return b(a, null, null, d)
        };
        b.matchesSelector = function(a, d) {
            (a.ownerDocument || a) !== A && K(a);
            d = d.replace(Ca, "='$1']");
            if (w.matchesSelector && F && (!P ||!P.test(d)) && (!B ||!B.test(d)))
                try {
                    var e = ba.call(a, d);
                    if (e || w.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return e
            } catch (h) {}
            return 0 < b(d, A, null, [a]).length
        };
        b.contains = function(a, b) {
            (a.ownerDocument || a) !== A && K(a);
            return U(a, b)
        };
        b.attr = function(a, b) {
            (a.ownerDocument || a) !== A && K(a);
            var c = r.attrHandle[b.toLowerCase()],
            c = c && ya.call(r.attrHandle, b.toLowerCase()) ? c(a, b, !F): void 0;
            return void 0 !== c ? c : w.attributes ||!F ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null
        };
        b.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        };
        b.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            T=!w.detectDuplicates;
            M=!w.sortStable && a.slice(0);
            a.sort(ia);
            if (T) {
                for (; b = a[e++];)
                    b === a[e] && (d = c.push(e));
                for (; d--;)
                    a.splice(c[d], 1)
            }
            M = null;
            return a
        };
        aa = b.getText = function(a) {
            var b, c = "", d = 0;
            if (b = a.nodeType)
                if (1 ===
                b || 9 === b || 11 === b) {
                    if ("string" === typeof a.textContent)
                        return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling)
                            c += aa(a)
                } else {
                    if (3 === b || 4 === b)
                        return a.nodeValue
                } else 
                    for (; b = a[d++];)
                        c += aa(b);
            return c
        };
        r = b.selectors = {
            cacheLength: 50,
            createPseudo: e,
            match: ca,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    a[1] = a[1].replace(I, J);
                    a[3] = (a[3] || a[4] || a[5] || "").replace(I, J);
                    "~=" ===
                    a[2] && (a[3] = " " + a[3] + " ");
                    return a.slice(0, 4)
                },
                CHILD: function(a) {
                    a[1] = a[1].toLowerCase();
                    "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] =+ (a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] =+ (a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]);
                    return a
                },
                PSEUDO: function(a) {
                    var b, c=!a[6] && a[2];
                    if (ca.CHILD.test(a[0]))
                        return null;
                    if (a[3])
                        a[2] = a[4] || a[5] || "";
                    else if (c && Da.test(c) && (b = V(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length))
                        a[0] = a[0].slice(0, b), a[2] = c.slice(0, b);
                    return a.slice(0, 3)
                }
            },
            filter: {
                TAG: function(a) {
                    var b =
                    a.replace(I, J).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = na[a + " "];
                    return b || (b = RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && na(a, function(a) {
                        return b.test("string" === typeof a.className && a.className || typeof a.getAttribute !== Q && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, d, e) {
                    return function(h) {
                        h = b.attr(h, a);
                        if (null == h)
                            return "!=" === d;
                        if (!d)
                            return !0;
                        h += "";
                        return "=" === d ? h === e : "!=" === d ?
                        h !== e : "^=" === d ? e && 0 === h.indexOf(e) : "*=" === d ? e&&-1 < h.indexOf(e) : "$=" === d ? e && h.slice( - e.length) === e : "~=" === d?-1 < (" " + h + " ").indexOf(e) : "|=" === d ? h === e || h.slice(0, e.length + 1) === e + "-" : !1
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var h = "nth" !== a.slice(0, 3), g = "last" !== a.slice( - 4), l = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, f) {
                        var k, p, q, z, v;
                        c = h !== g ? "nextSibling" : "previousSibling";
                        var n = b.parentNode, m = l && b.nodeName.toLowerCase();
                        f=!f&&!l;
                        if (n) {
                            if (h) {
                                for (; c;) {
                                    for (p = b; p = p[c];)
                                        if (l ? p.nodeName.toLowerCase() ===
                                        m : 1 === p.nodeType)
                                            return !1;
                                    v = c = "only" === a&&!v && "nextSibling"
                                }
                                return !0
                            }
                            v = [g ? n.firstChild: n.lastChild];
                            if (g && f) {
                                f = n[x] || (n[x] = {});
                                k = f[a] || [];
                                z = k[0] === D && k[1];
                                q = k[0] === D && k[2];
                                for (p = z && n.childNodes[z]; p=++z && p && p[c] || (q = z = 0) 
                                    || v.pop();
                                )if (1 === p.nodeType&&++q && p === b) {
                                    f[a] = [D, z, q];
                                    break
                                }
                            } else if (f && (k = (b[x] || (b[x] = {}))[a]) && k[0] === D)
                                q = k[1];
                            else 
                                for (; p=++z && p && p[c] || (q = z = 0) || v.pop();)
                                    if ((l ? p.nodeName.toLowerCase() === m : 1 === p.nodeType)&&++q)
                                        if (f && ((p[x] || (p[x] = {}))[a] = [D, q]), p === b)
                                            break;
                            q -= e;
                            return q === d ||
                            0 === q%d && 0 <= q / d
                        }
                    }
                },
                PSEUDO: function(a, d) {
                    var h, g = r.pseudos[a] || r.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return g[x] ? g(d) : 1 < g.length ? (h = [a, a, "", d], r.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function(a, b) {
                        for (var c, e = g(a, d), h = e.length; h--;)
                            c = O.call(a, e[h]), a[c]=!(b[c] = e[h])
                    }) : function(a) {
                        return g(a, 0, h)
                    }) : g
                }
            },
            pseudos: {
                not: e(function(a) {
                    var b = [], c = [], d = ha(a.replace(Z, "$1"));
                    return d[x] ? e(function(a, b, c, e) {
                        e = d(a, null, e, []);
                        for (var h = a.length; h--;)
                            if (c = e[h])
                                a[h]=!(b[h] = c)
                    }) :
                    function(a, e, h) {
                        b[0] = a;
                        d(b, null, h, c);
                        return !c.pop()
                    }
                }),
                has: e(function(a) {
                    return function(d) {
                        return 0 < b(a, d).length
                    }
                }),
                contains: e(function(a) {
                    a = a.replace(I, J);
                    return function(b) {
                        return - 1 < (b.textContent || b.innerText || aa(b)).indexOf(a)
                    }
                }),
                lang: e(function(a) {
                    Ea.test(a || "") || b.error("unsupported lang: " + a);
                    a = a.replace(I, J).toLowerCase();
                    return function(b) {
                        var c;
                        do 
                            if (c = F ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) &&
                        1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === G
                },
                focus: function(a) {
                    return a === A.activeElement && (!A.hasFocus || A.hasFocus())&&!(!a.type&&!a.href&&!~a.tabIndex)
                },
                enabled: function(a) {
                    return !1 === a.disabled
                },
                disabled: function(a) {
                    return !0 === a.disabled
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b&&!!a.checked || "option" === b&&!!a.selected
                },
                selected: function(a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (6 > a.nodeType)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !r.pseudos.empty(a)
                },
                header: function(a) {
                    return Ga.test(a.nodeName)
                },
                input: function(a) {
                    return Fa.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: q(function() {
                    return [0]
                }),
                last: q(function(a, b) {
                    return [b - 1]
                }),
                eq: q(function(a, b, c) {
                    return [0 > c ? c + b: c]
                }),
                even: q(function(a, b) {
                    for (var c = 0; c < b; c += 2)
                        a.push(c);
                    return a
                }),
                odd: q(function(a, b) {
                    for (var c = 1; c < b; c += 2)
                        a.push(c);
                    return a
                }),
                lt: q(function(a, b, c) {
                    for (b = 0 > c ? c + b : c; 0<=--b;)
                        a.push(b);
                    return a
                }),
                gt: q(function(a, b, c) {
                    for (c = 0 > c ? c + b : c; ++c < b;)
                        a.push(c);
                    return a
                })
            }
        };
        r.pseudos.nth = r.pseudos.eq;
        for (S in{
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            r.pseudos[S] = f(S);
        for (S in{
            submit: !0,
            reset: !0
        })
            r.pseudos[S] = k(S);
        n.prototype = r.filters =
        r.pseudos;
        r.setFilters = new n;
        V = b.tokenize = function(a, d) {
            var e, h, g, l, f, k, p;
            if (f = oa[a + " "])
                return d ? 0 : f.slice(0);
            f = a;
            k = [];
            for (p = r.preFilter; f;) {
                if (!e || (h = Aa.exec(f)))
                    h && (f = f.slice(h[0].length) || f), k.push(g = []);
                e=!1;
                if (h = Ba.exec(f))
                    e = h.shift(), g.push({
                        value: e,
                        type: h[0].replace(Z, " ")
                    }), f = f.slice(e.length);
                for (l in r.filter)
                    if ((h = ca[l].exec(f)) && (!p[l] || (h = p[l](h))))
                        e = h.shift(), g.push({
                            value: e,
                            type: l,
                            matches: h
                        }), f = f.slice(e.length);
                if (!e)
                    break
            }
            return d ? f.length : f ? b.error(a) : oa(a, k).slice(0)
        };
        ha = b.compile =
        function(a, b) {
            var c, d = [], e = [], h = pa[a + " "];
            if (!h) {
                b || (b = V(a));
                for (c = b.length; c--;)
                    h = ga(b[c]), h[x] ? d.push(h) : e.push(h);
                h = pa(a, wa(e, d));
                h.selector = a
            }
            return h
        };
        ka = b.select = function(a, b, c, d) {
            var e, h, g, l, f = "function" === typeof a && a, k=!d && V(a = f.selector || a);
            c = c || [];
            if (1 === k.length) {
                h = k[0] = k[0].slice(0);
                if (2 < h.length && "ID" === (g = h[0]).type && w.getById && 9 === b.nodeType && F && r.relative[h[1].type]) {
                    if (b = (r.find.ID(g.matches[0].replace(I, J), b) || [])[0])
                        f && (b = b.parentNode);
                    else 
                        return c;
                    a = a.slice(h.shift().value.length)
                }
                for (e =
                ca.needsContext.test(a) ? 0 : h.length; e--;) {
                    g = h[e];
                    if (r.relative[l = g.type])
                        break;
                    if (l = r.find[l])
                        if (d = l(g.matches[0].replace(I, J), ea.test(h[0].type) && v(b.parentNode) || b)) {
                            h.splice(e, 1);
                            a = d.length && m(h);
                            if (!a)
                                return L.apply(c, d), c;
                                break
                        }
                }
            }(f || ha(a, k))(d, b, !F, c, ea.test(a) && v(b.parentNode) || b);
            return c
        };
        w.sortStable = x.split("").sort(ia).join("") === x;
        w.detectDuplicates=!!T;
        K();
        w.sortDetached = g(function(a) {
            return a.compareDocumentPosition(A.createElement("div")) & 1
        });
        g(function(a) {
            a.innerHTML = "<a href='#'></a>";
            return "#" === a.firstChild.getAttribute("href")
        }) || l("type|href|height|width", function(a, b, c) {
            if (!c)
                return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        });
        (!w.attributes ||!g(function(a) {
            a.innerHTML = "<input/>";
            a.firstChild.setAttribute("value", "");
            return "" === a.firstChild.getAttribute("value")
        })) && l("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase())
                return a.defaultValue
        });
        g(function(a) {
            return null == a.getAttribute("disabled")
        }) || l("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        function(a, b, c) {
            var d;
            if (!c)
                return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        });
        "function" === typeof s && s.amd ? s(function() {
            return b
        }) : "undefined" !== typeof module && module.exports ? module.exports = b : a.Sizzle = b
    })(window);
    b.browser = function() {
        var a, c = {}, d = navigator.userAgent.toLowerCase().replace(/\s*[()]\s*/g, "; ").replace(/(\/[\w.]+)\s+/g, "$1; ").replace(/\;\s*$/, "").split(/;\s*/);
        b.each(d, function(b) {
            a = (/[\/ :]([^\/ :]+)$/.exec(b) || [])[1];
            c[a ? b.substr(0, b.length - a.length -
            1).replace(/\d*$/, ""): b] = a ||!0
        });
        return {
            aol: c.aol,
            blackberry: c.blackberry,
            ie: c.msie || c.trident,
            ios: c.mobile && c.safari,
            opera: c.opera,
            playstation: c.playstation,
            version: parseFloat(c.version || c.crios || c.msie) ||!1
        }
    }();
    b.platforms = function() {
        var a = {
            bbp: {
                id_spec: {
                    parser: /^post-(\d+)$/,
                    selector: "div[id^='post-']"
                },
                scope: "li .post"
            },
            hdlr: {
                id_spec: {
                    parser: /^post_(\d+)$/,
                    selector: "div[id^='post_']"
                },
                scope: ".post-content-area"
            },
            ipb: {
                id_spec: {
                    parser: /^post_id_(\d+)$/,
                    selector: "div[id^='post_id_']"
                },
                scope: ".post_body .post"
            },
            phpb: {
                id_spec: {
                    parser: /^p(\d+)$/,
                    selector: "div.post[id^='p']"
                },
                scope: ".postbody .content,.postbody .signature"
            },
            ubb: {
                id_spec: {
                    ancestor: !1,
                    attribute: "name",
                    parser: /^Post(\d+)$/,
                    selector: "a[name^='Post']"
                },
                scope: ".post_inner *[id^='body'],.post_inner .signature"
            },
            vb3: {
                id_spec: {
                    parser: /^post_message_(\d+)$/,
                    selector: "div[id^='post_message_'], table[id^='post_message_'],section[id^='post_message_']"
                },
                scope: "div[id^='post_message_'],div[id^='post_message_'] ~ div:not([class])"
            },
            vb4: {
                id_spec: {
                    parser: /^post_(\d+)$/,
                    selector: "li[id^='post_']"
                },
                scope: ".post-content,.postbody .content,.postbody .signature,ul.conversation-list .list-item-body"
            },
            wppr: {
                id_spec: {
                    parser: /^post-(\d+)$/,
                    selector: "div[id^='post-']"
                },
                scope: null
            }
        };
        return function(c) {
            return b.extend(a[c] || {}, {
                getPostIDs: function(a) {
                    var c = [], g = this.id_spec;
                    !a && (document && document.body) && (a = [document.body]);
                    a && g && (a=!1 === g.ancestor ? b.select(g.selector) : b.reduce([], b.withScope(a, g.selector), function(a, b) {
                        return a.concat(b[1])
                    }), b.each(a, function(a) {
                        var d = g.attribute ||
                        "id";
                        (a = a[d] ? a[d].match(g.parser) : null)&&!b.contains(c, a[1]) && c.push(a[1])
                    }));
                    return c.length ? c : null
                }
            })
        }
    }();
    b.observer = function() {
        var a = [], c = 0, d = function(a) {
            c || a.observer.observe(a.context.document, {
                attributes: !1,
                characterData: !0,
                childList: !0,
                subtree: !0
            })
        };
        return {
            start: function(c, g) {
                if (c.document && b.traits.mutation) {
                    var l = {
                        context: c,
                        observer: new MutationObserver(b.entryPoint(function(a) {
                            var c = [];
                            b.each(a, function(a) {
                                var d = [];
                                "characterData" === a.type ? a.target && (d = [a.target]) : a.addedNodes && a.addedNodes.length &&
                                (d = b.toArray(a.addedNodes));
                                d.length && (c = c.concat(d))
                            });
                            0 < c.length && g(c)
                        }))
                    };
                    a.push(l);
                    d(l)
                }
            },
            pause: function() {
                c++;
                b.each(a, function(a) {
                    a.observer.disconnect()
                })
            },
            resume: function() {
                c--;
                b.each(a, d)
            }
        }
    }();
    b.traits = {
        basicCompatibility: !(b.browser.blackberry || b.browser.playstation),
        cors: window.XMLHttpRequest && void 0 !== (new window.XMLHttpRequest).withCredentials,
        crossWindowCommunication: !b.browser.ios,
        json: Boolean(window.JSON) && Boolean(window.JSON.stringify) && Boolean(window.JSON.parse),
        jsRedirectSetsReferrer: b.browser.aol ||
        !(b.browser.ie || b.browser.opera),
        mutation: window.MutationObserver&&!b.browser.ie,
        quirksMode: !Boolean(window.addEventListener),
        windowLevelHandlers: Boolean(window.addEventListener)
    };
    var k, n, t, u;
    f = {
        PLUGIN_MANUAL: 1,
        TYPE_ACCEPTABLE: "l",
        allowed: b.generateNodeFilter({
            classes: ["norewrite"],
            rels: ["norewrite"],
            tags: "applet embed object head img input link map meta param select button iframe option script style svg textarea title".split(" ")
        }),
        api: function() {
            var a = function() {
                var a = function(a, c) {
                    a = b.fromJSON(a) ||
                    {};
                    b.each(a, function(a, d) {
                        var e = c[d], g;
                        if (e && e.callback && a) {
                            if ("string" === b.type(a) && (g = a.match(/^[^(]+\((.*)\);?\s*$/)))
                                a = b.fromJSON(g[1]);
                            "domains" === d && "array" === b.type(a) && (a = {
                                results: a
                            });
                            e.callback.apply(window, [a].concat(e.data || []))
                        }
                    })
                };
                return function(g) {
                    var l = {}, h = {};
                    b.each(g, function(a) {
                        a = c.apply(this, a);
                        var d = a.method;
                        l[d] = b.prune(a.params);
                        h[d] = {
                            callback: a.opts.fn || b.noop,
                            data: a.data
                        }
                    });
                    d({
                        data: h,
                        method: "batch",
                        params: b.extend(f.commonParams(), {
                            batch: window.JSON.stringify(l)
                        }),
                        opts: {
                            jsonp: !1,
                            fn: function(b, c) {
                                a(b, c)
                            }
                        }
                    })
                }
            }(), c = function(a, c, d) {
                var h = b.toArray(arguments).slice(3, arguments.length), n = a, p = d || {}, q;
                q = b.extend(f.commonParams(a), c);
                q.subId && q.key !== k.key && (q.subId = null);
                return {
                    data: h,
                    method: n,
                    opts: p,
                    params: q
                }
            }, d = function(a) {
                return b.request.apply(b, [k.api_url + "/" + a.method, a.params, a.opts].concat(a.data))
            };
            return b.batchable(function() {
                return b.batched(arguments) ? a.call(this, b.batchArgs(arguments)) : d(c.apply(this, arguments))
            }, function() {
                return {
                    batch: k.batch_calls,
                    timeout: k.batch_call_timeout
                }
            })
        }(),
        addEventListener: function(a, b) {
            this.fire(a, b)
        },
        click: function() {
            var a = function(a, c) {
                if ("_self" === c)
                    return a;
                if (b.traits.crossWindowCommunication && b.traits.jsRedirectSetsReferrer) {
                    var g = a.open("", c);
                    g.focus();
                    return g
                }
            }, c = function(a) {
                var c = a.previousSibling, g = a.nextSibling, l = ["", a.textContent, ""], h = function(a, b) {
                    for (var c = a, d = c.data; (c = c[b + "Sibling"]) && 3 === c.nodeType;)
                        d += c.data;
                    return d
                }, k = function(a, b, c) {
                    a = a.replace(/\s+/g, " ");
                    b = b.replace(/\s+/g, " ");
                    c = c.replace(/\s+/g, " ");
                    a = a.replace(/^\s+/, "");
                    " " === b.substr(0, 1) && (b = b.substr(1), a += " " !== a.substr(a.length - 1, 1) ? " " : "");
                    " " === b.substr(b.length - 1, 1) && (b = b.substr(0, b.length - 1), c = (" " !== c.substr(0, 1) ? " " : "") + c);
                    c = c.replace(/\s+$/, "");
                    return [a, b, c]
                };
                void 0 !== l[1] && (l[0] = c && 3 === c.nodeType ? h(c, "previous") : "", l[2] = g && 3 === g.nodeType ? h(g, "next") : "", l = k.apply(this, l), "" !== l[0] && "" !== l[2] && (l[0] = l[0].split(" ").reverse().slice(0, 10 + (" " === l[0].substr(l[0].length - 1, 1) ? 1 : 0)).reverse().join(" "), l[2] = l[2].split(" ").slice(0, 10).join(" "), a = {
                    type: "context",
                    itype: (b.cache(a, "params") || {}).type,
                    before: l[0],
                    after: l[2],
                    txt: l[1],
                    loc: location.href,
                    out: b.getActualHref(a),
                    v: 2
                }, f.log("info", b.toQuery(a))))
            };
            return function(d, e) {
                var g, f, h, n, p = b.context(d) || window;
                e = d.target || e;
                e=!e || e === p.name || "_top" === e && p.top === p || "_parent" === e && p.parent === p ? "_self" : e;
                h = a(p, e);
                if ("_self" !== e && (!b.traits.crossWindowCommunication ||!b.traits.jsRedirectSetsReferrer))
                    n = "go";
                else 
                    try {
                        if (void 0 === h.document)
                            throw !0;
                            n = "jsonp"
                } catch (v) {
                    n = "go"
                }
                g = b.destructing(b.bind(function() {
                    k.time_click &&
                    arguments.length && this.logTime("clk");
                    var a = b.toArray(arguments);
                    a.unshift(d, h, e);
                    this.onApiClick.apply(this, a)
                }, this));
                b.cache(this, "link", "string" === typeof d ? d : b.getActualHref(d));
                if ("string" === typeof d && (d = b.createA(d, e), !this.processLink(d)) ||!k.enabled)
                    return g();
                f = this.clickParams(d, n);
                this.logTime();
                k.log_context && c(d);
                if ("go" === n)
                    this.redirect(this.api.now("click", f, {
                        "return": !0
                    }), p, h, e);
                else if (h === p)
                    this.api.now("click", f, {
                        fn: g,
                        timeout: k.click_timeout
                    });
                else {
                    if (b.contextIsAncestor(p, h))
                        return this.redirect(b.getActualHref(d),
                        p, h, e);
                    g = b.entryPoint(g);
                    setTimeout(function() {
                        g()
                    }, k.click_timeout);
                    h.document.open();
                    h.callback = g;
                    h.document.write("<html><head><title>" + b.getActualHref(d) + '</title><script type="text/javascript" src="' + this.api.now("click", f, {
                        fn: "callback",
                        "return": !0
                    }) + '">\x3c/script></head></html>');
                    h.document.close()
                }
            }
        }(),
        clickParams: function(a, c) {
            var d = b.extend(b.cache(a, "params"), {
                format: c,
                out: b.getActualHref(a),
                ref: window.document.referrer || null,
                reaf: k.reaffiliate || null,
                title: window.document.title,
                txt: a.innerHTML
            });
            128 < d.txt.length && (d.txt = d.txt.replace(/<[^>]+>/g, ""), d.txt = 128 < d.txt.length ? d.txt.substr(0, 125) + "..." : d.txt);
            return d
        },
        commonParams: function(a) {
            var c = {
                drKey: k.key ? null: k.dr_key,
                key: k.key,
                libId: k.library_id
            };
            ("click" === a || "ping" === a) && b.extend(c, {
                cuid: k.cuid,
                loc: location.href,
                subId: k.sub_id,
                v: 1
            }, c);
            return c
        },
        detectFiltering: function() {
            var a;
            try {
                a = {}, a = new function() {
                    this.detect = function(a, b) {
                        function c(a, b) {
                            0 == k || 1E3 < b ? a(0 == k && h) : setTimeout(function() {
                                c(a, 2 * b)
                            }, 2 * b)
                        }
                        function f() {
                            --k || (h=!p && n)
                        }
                        var h =
                        !1, k = 2, p=!1, n=!1;
                        if ("function" == typeof b) {
                            a += "?ch=*&rn=*";
                            var v = 11 * Math.random(), m = new Image;
                            m.onload = f;
                            m.onerror = function() {
                                p=!0;
                                f()
                            };
                            m.src = a.replace(/\*/, 1).replace(/\*/, v);
                            m = new Image;
                            m.onload = f;
                            m.onerror = function() {
                                n=!0;
                                f()
                            };
                            m.src = a.replace(/\*/, 2).replace(/\*/, v);
                            c(b, 250)
                        }
                    }
                }
            } catch (c) {
                a = {
                    detect: function(a, b) {
                        b(!0)
                    }
                }
            }
            return function(c) {
                var e = b.updateUrl(k.asset_url, {
                    pathname: "/images/pixel.gif"
                });
                a.detect(e, c)
            }
        }(),
        enabled: function() {
            if (k.enabled && t !== window && window.vglnk && (window.vglnk.key || "function" ===
            typeof window.vglnk))
                k.enabled=!1;
            return k.enabled
        },
        expose: function(a, c) {
            if (c = c || this[a])
                "function" === typeof c ? c = b.entryPoint(b.bind(c, this)) : "object" === typeof c && (c = b.clone(c)), u[a] || (u[a] = c)
        },
        fire: function() {
            var a = {};
            return function(c, d) {
                c = c.toLowerCase();
                var e = a[c] || {
                    fired: !1,
                    listeners: []
                };
                "function" === typeof d ? e.fired ? setTimeout(function() {
                    d({
                        type: c
                    })
                }, 0) : e.listeners.push(d) : (e.fired=!0, b.each(e.listeners, function(a) {
                    "function" === typeof a && a({
                        type: c
                    })
                }), e.listeners = []);
                a[c] = e
            }
        }(),
        handleRightClick: function(a,
        c) {
            if (k.rewrite_modified && a && c)
                switch (c) {
                case "setup":
                    b.cache(a, "href") || b.cache(a, "href", a.href);
                    a.href = this.api.now("click", this.clickParams(a, "go"), {
                        "return": !0
                    });
                    setTimeout(b.entryPoint(b.bind(function() {
                        this.handleRightClick(a, "teardown")
                    }, this)), 0);
                    break;
                case "teardown":
                    a.href = b.cache(a, "href"), b.cache(a, "href", null)
                }
        },
        harmony: function() {
            b.harmony = {
                UNSAFE_QUIRKSMODE_HANDLERS: 0,
                LINK_LEVEL_EVENTS: - 1
            };
            return function(a) {
                return k.harmony_level <= a
            }
        }(),
        init: function() {
            var a = function() {
                var a=!0 ===
                window.document.__v5k;
                window.document.__v5k=!0;
                return !a
            };
            return function() {
                var c = this;
                n = {};
                if (a()) {
                    try {
                        c.initLibEvents(), c.initNamespace(), c.initOptions()
                    } catch (d) {}
                    b.exceptionLogger(b.bind(c.logException, c), !k.dev);
                    return b.entryPoint(function() {
                        c.initProcessors();
                        c.initDRApi();
                        c.initApi();
                        c.enabled() && (c.initLegacyCallbacks(), c.ping())
                    })()
                }
            }
        }(),
        initApi: function() {
            var a, c = {};
            if (window.vglnk)
                for (a in window.vglnk)
                    "_plugin" === a.substr( - 7) && (c[a] = window.vglnk[a]);
            u = t[m] = b.noop;
            this.expose("click");
            this.expose("link", b.bind(function(a) {
                "element" === b.type(a) && a.href && (this.initContext(b.context(a)), this.processLink(a))
            }, this));
            this.expose("open", b.bind(this.click, this));
            this.expose("$", b.clone(b));
            this.expose("api");
            this.expose("opt");
            this.expose("registerProcessor", function() {
                if (0 < arguments.length)
                    return f.registerProcessor.apply(f, arguments)
            });
            b.extend(u, u === window.vglnk ? c : {})
        },
        initContext: function() {
            var a = [];
            return function(c) {
                if (void 0 === c)
                    return a;
                c&&!b.contains(a, c) && (a.push(c), this.initLinks(c),
                this.initEvents(c))
            }
        }(),
        initDRApi: function() {
            var a=!1;
            window.DrivingRevenue = b.entryPoint(b.destructing(b.bind(function() {
                a=!0;
                k.dr_key = window.DR_id;
                this.enabled() && this.ping()
            }, this)));
            b.on("DOMReady", function() {
                if (!a)
                    try {
                        delete window.DrivingRevenue
                } catch (b) {
                    window.DrivingRevenue = void 0
                }
            })
        },
        initEvents: function(a) {
            var c = {
                left: f.onClick,
                right: f.onContextmenu
            }, d = {
                left: b.noop,
                right: b.noop
            }, e = b.traits.windowLevelHandlers ? a: a.document, g = function(e) {
                e = e || a.event;
                if ((e = b.eventLink(e))&&!b.cache(e, "evented"))
                    h(e,
                    f.harmony(b.harmony.LINK_LEVEL_EVENTS) ? c : d), b.cache(e, "evented", !0)
            }, l = function(a) {
                b.observer.start(a, b.batchable(function(a) {
                    b.batched(arguments) && (a = b.reduce([], b.batchArgs(arguments, 0), function(a, b) {
                        return a.concat(b)
                    }));
                    a = b.all(b.unique(a), function(a) {
                        return Boolean(a.parentNode) && f.allowed(a)
                    });
                    0 < a.length && b.each(n, function(b, c) {
                        f.runPlugin(c, a)
                    })
                }, function() {
                    return {
                        batch: k.batch_mutation,
                        timeout: k.batch_mutation_timeout
                    }
                }))
            }, h = function(a, c) {
                b.on(a, "click", b.bind(c.left, f));
                b.on(a, "contextmenu",
                b.bind(c.right, f))
            };
            k.dynamic && l(a);
            b.on(e, "copy", b.bind(f.onCopy, f));
            b.on(e, "mousedown", g);
            if (f.harmony(b.harmony.LINK_LEVEL_EVENTS))
                b.on("DOMReady", function() {
                    b.each(a.document.links, function(a) {
                        b.on(a, "mousedown", g)
                    })
                });
            (!b.traits.quirksMode || f.harmony(b.harmony.UNSAFE_QUIRKSMODE_HANDLERS)) && h(e, c)
        },
        initLegacyOptions: function() {
            var a, b = {
                DR_id: "dr_key",
                vglnk_api_key: "key",
                vglnk_cuid: "cuid",
                vglnk_domain: "api_url",
                vglnk_reaf: "reaffiliate",
                vglnk_subid: "sub_id"
            };
            for (a in b)
                void 0 !== window[a] && (u[b[a]] =
            window[a], "vglnk_domain" === a && (u[b[a]] += "/api"))
        },
        initLegacyCallbacks: function() {
            var a, c = {
                vl_cB: b.bind(this.onApiClick, this),
                vl_disable: function() {
                    k.enabled=!1
                }
            };
            for (a in c)
                window[a] = c[a]
        },
        initLibEvents: function() {
            b.on(f);
            b.ready(b.bind(function() {
                this.fire("DOMReady")
            }, this))
        },
        initLinks: function(a) {
            var c = b.bind(function(a) {
                b.each(b.toArray(a.document.links), b.bind(this.processLink, this))
            }, this);
            void 0 === a ? b.each(this.initContext(), c) : c(a)
        },
        initNamespace: function() {
            window.vglnk && window.vglnk.key &&
            (m = "vglnk");
            var a = window, b = m.split("."), d;
            for (m = b.pop(); 0 < b.length;)
                d = b.shift(), a[d] = a[d] || {}, a = a[d];
            t = a;
            u = t[m] = t[m] || {}
        },
        initOptions: function() {
            var a;
            this.initLegacyOptions();
            k = b.extend(this.publicOptions({
                api_url: "//api.viglink.com/api",
                asset_url: "//cdn.viglink.com/api",
                cuid: null,
                dev: !1,
                dr_key: null,
                enabled: b.traits.basicCompatibility,
                key: null,
                link_urls: !0,
                partner: null,
                sub_id: null,
                reaffiliate: !1,
                commercial: null,
                harmony_level: 0,
                rewrite_modified: !1,
                rewrite_original: !0
            }), k, u, {
                batch_calls: !0,
                batch_call_timeout: 100,
                batch_mutation: !0,
                batch_mutation_timeout: 250,
                click_timeout: 1E3,
                dynamic: !0,
                hop_timeout: 2E3,
                debug: !1,
                library_id: null,
                log_context: !0,
                nofollow: {},
                norewrite: {},
                time_click: !1,
                time_ping: !1,
                testing_js: [],
                plugins: {
                    link_affiliation: {},
                    modified_clicks: {}
                }
            });
            for (a in k)
                "_plugin" === a.substr( - 7) && delete k[a]
        },
        initPlugins: function() {
            var a, c = 1, d = {
                link_affiliation: "convert",
                link_optimization: "optimize",
                partner_integration: "partners",
                product_linker: "insert",
                product_widget: "spotlight"
            }, e = ["spotlight"], g = function(b) {
                return function(b) {
                    return function() {
                        delete n[b].opts.mode;
                        c = 1;
                        clearTimeout(a);
                        h()
                    }
                }(b)
            }, l = function(a) {
                var c;
                b.find(d, function(a, b) {
                    return "insert" === a && (c = b)
                });
                a[c] || (a[c] = {
                    enabled: !0,
                    key: k.key,
                    link_phrases: !1
                });
                a[c].link_urls = k.link_urls;
                return a
            }, h = function() {
                var d = {
                    _ran: !1,
                    init: b.noop,
                    initDocuments: b.noop,
                    initNodes: b.noop
                }, e = function(a) {
                    return function() {
                        if (a) {
                            var c = b.toArray(arguments);
                            c.unshift("custom", a);
                            f.log.apply(this, c)
                        }
                    }
                }, g = function(a) {
                    return !Boolean(a._ran)
                };
                a = null;
                b.each(b.all(n, g), function(a, c) {
                    a.setup = a.setup || (window.vglnk ? window.vglnk[c +
                    "_plugin"] : null);
                    "function" === b.type(a.setup) && (Boolean(a.initDocuments) || (a = b.extend(a, d, a.setup(a.opts, b.clone(b), u, e(a.opts.key || k.key)))), a.opts.mode !== f.PLUGIN_MANUAL && f.runPlugin(c))
                });
                b.find(n, g) && (a = setTimeout(b.entryPoint(h), Math.min(Math.max(Math.pow(2, ++c), 100), 5E3)))
            }, v = function() {
                setTimeout(function() {
                    f.api.flush()
                }, 100);
                h();
                b.on("DOMReady", function() {
                    setTimeout(f.api.flush, 0)
                })
            };
            return function(a) {
                a = l(a);
                b.each(a, b.bind(function(a, c) {
                    c = d[c] || c;
                    "object" === typeof a&&!1 !== a.enabled && (n[c] =
                    {
                        opts: a
                    }, b.contains(e, c) && b.jsonp(this.opt("asset_url") + "/plugins/" + c + ".js"), a.mode === this.PLUGIN_MANUAL && this.expose("init_" + c, g(c)))
                }, this));
                v()
            }
        }(),
        initProcessors: function() {
            this.registerProcessor(function(a) {
                var c;
                c = b.createA(k.api_url);
                if ("/api/click" === a.pathname && (a.hostname === c.hostname || a.hostname.match(/(^|\.)(api|cdn|apicdn)\.viglink\.com$/)))
                    c = b.fromQuery(a.search), void 0 !== c.out && (a.href = c.out, delete c.out, b.cache(a, "params", c))
            });
            this.registerProcessor(function(a) {
                k.nofollow[a.href] &&
                !b.hasRel(a, "nofollow") && (a.rel = (a.rel ? a.rel + " " : "") + "nofollow")
            });
            this.registerProcessor(function(a) {
                window.IPBoard && (window.IPBoard.prototype && window.IPBoard.prototype.delegate && b.hasRel(a, "external")) && (a.rel = a.rel.replace(/(^| )external( |$)/, ""), a.target = "_blank")
            })
        },
        isRewritable: function() {
            var a = b.canonicalizeHostname(document.location), c = b.generateNodeFilter({
                rels: ["norewrite", "noskim"],
                custom: function(c) {
                    var e, g = "", f=!1;
                    try {
                        e = c.hostname, g = c.protocol, e.charAt(0)
                    } catch (h) {
                        return !0
                    }
                    "" !== e && (e =
                    b.canonicalizeHostname(c));
                    f = Boolean("" === e || a === e ||!g.match(/^https?:$/i) || k.norewrite[e]);
                    g = b.cache(c, "type");
                    c = b.cache(c, "params") || {};
                    if (!Boolean(g || c.type)&&!f)
                        f = Boolean(!k.rewrite_original || "object" === b.type(k.commercial)&&!k.commercial[e]);
                    return f
                }
            });
            return function(a) {
                return c(a, {
                    ancestors: !1
                })
            }
        }(),
        log: function(a, c, d, e) {
            var g, f = b.toQuery({
                libId: k.library_id,
                nocache: b.uniqid()
            });
            g = "pixel.gif";
            if ("custom" === a)
                f += "&" + b.toQuery({
                    key: c,
                    type: d
                }), b.each("array" === b.type(e) ? e : [e], function(a) {
                    b.each(["e",
                    "i", "o"], function(b) {
                        delete a[b]
                    });
                    f += "&" + b.toQuery(a)
                });
            else {
                f += "&" + b.toQuery({
                    key: k.key,
                    drKey: k.key ? null: k.dr_key
                });
                if ("time" === a)
                    g = "time.gif", a = {
                        time: d,
                        type: c
                    };
                else if ("exception" === a)
                    a = {
                        e: c,
                        o: d
                    };
                else if ("info" === a)
                    a = {
                        i: c
                    };
                else 
                    return;
                f += "&" + b.toQuery(a)
            }
            g = k.api_url + "/" + g + "?" + f;
            b.transmitsPII(g) || (b.createEl("img").src = g)
        },
        logException: function(a) {
            if (k.debug) {
                var c = {
                    link: b.cache(this, "link"),
                    loc: document.location.href,
                    UA: navigator.userAgent
                };
                "string" === typeof a ? c.message = a : c = b.extend(c, a);
                this.log("exception",
                a, b.toQuery(c))
            }
        },
        logTime: function() {
            var a;
            return function(b) {
                0 === arguments.length ? a = (new Date).getTime() : this.log("time", b, (new Date).getTime() - a)
            }
        }(),
        onApiClick: function(a, c, d, e, f) {
            var l = e || b.getActualHref(a), h = b.bind(function() {
                this.redirect(l, b.context(a), c, d)
            }, this);
            "object" === typeof f && (f.tracking || f.image) ? (e = b.createEl(f.tracking ? "iframe" : "img", {
                src: f.tracking || f.image
            }, {
                height: 0,
                width: 0,
                visibility: "hidden"
            }), document.body.appendChild(e), setTimeout(b.entryPoint(h), f.timeout || k.hop_timeout)) :
            h()
        },
        onApiPing: function(a, c, d, e, g, l) {
            k.rewrite_original=!1;
            g = b.reformatKeys(g || {});
            var h, n;
            e = function(a) {
                var c = {}, d = function(a) {
                    b.isArray(a) ? c[a[0]] = a[1] : c[a] = 1
                };
                b.isArray(a) && b.each(a, d);
                return c
            };
            n = b.extend(k.plugins, g.plugins);
            k = b.extend(k, g);
            delete k.plugins;
            k.library_id = a;
            k.click_timeout = c;
            k.time_ping && this.logTime("png");
            "array" === b.type(k.testing_js) && 0 < k.testing_js.length && b.each(k.testing_js, function(a) {
                b.jsonp(a)
            });
            b.extend(k.norewrite, e(d));
            b.extend(k.nofollow, e(l));
            for (h in k)
                "on" === h.toLowerCase().substr(0,
                2) && (2 < h.length && "function" === b.type(k[h])) && (b.on(f, h.toLowerCase().substr(2), b.bind(k[h], window)), delete k[h]);
            this.initPlugins(n);
            this.initContext(window);
            this.fire("libready")
        },
        onClick: function(a) {
            a = a || window.event;
            var c = a.ctrlKey || a.metaKey || a.altKey || a.shiftKey, d = a.which && 1 === a.which || 0 === a.button, e = b.eventLink(a);
            if (e && this.isRewritable(e)&&!c && d&&!b.isDefaultPrevented(a))
                return this.click(e), b.preventDefault(a)
        },
        onContextmenu: function(a) {
            (a = b.eventLink(a || window.event)) && this.isRewritable(a) &&
            this.handleRightClick(a, "setup")
        },
        onCopy: function(a) {
            var c, d, e, g = [];
            if (window.getSelection) {
                d = window.getSelection();
                a = 0;
                for (c = d.rangeCount; a < c; a++) {
                    try {
                        e = d.getRangeAt(a).toString().replace(/((^)\s+|\s+$|\r)/g, "").replace(/\s*\n\s*/g, "\n")
                    } catch (l) {}
                    0 < e.length && 128 >= e.length && g.push(e)
                }
            }
            b.each(g, function(a) {
                f.log("info", b.toQuery({
                    type: "selection",
                    txt: a,
                    loc: location.href
                }))
            })
        },
        opt: function(a, b) {
            void 0 !== b && void 0 !== this.publicOptions()[a] && (k[a] = b);
            return k[a]
        },
        ping: function() {
            var a=!1;
            return function() {
                if (!a &&
                (k.key || k.dr_key)) {
                    var c = {
                        ref: document.referrer || null
                    };
                    a=!0;
                    b.transmitsPII(this.api.now("ping", c, {
                        "return": !0
                    })) || (this.logTime(), this.detectFiltering(b.bind(function(a) {
                        a && (k.batch_calls=!1, c.type = this.TYPE_ACCEPTABLE);
                        this.api.now("ping", c, {
                            fn: b.bind(this.onApiPing, this)
                        })
                    }, this)))
                }
            }
        }(),
        processLink: function(a) {
            if (this.isRewritable(a)) {
                var c = b.cache(a, "processors") || {};
                b.each(this.registerProcessor(), function(b) {
                    c[b.id] || b.fn(a);
                    c[b.id]=!0
                });
                b.cache(a, "processors", c);
                return a
            }
        },
        publicOptions: function() {
            var a =
            {};
            return function(c) {
                "object" === b.type(c) && (a = c);
                return b.extend({}, a)
            }
        }(),
        redirect: function(a, c, d, e) {
            c = c || window.top;
            !b.traits.crossWindowCommunication&&!d ? (e = c.open(a, e), e.focus()) : b.traits.jsRedirectSetsReferrer ? setTimeout(b.entryPoint(function() {
                !d || d === c ? c.location = a : b.contextIsAncestor(c, d) ? d.location = a : d.location.replace(a)
            }), 0) : ("_blank" === e && (e = b.uniqid("win_")), e = b.createA(a, e), e.rel = "norewrite", c.document.body.appendChild(e), e.click(), e.parentNode.removeChild(e))
        },
        runPlugin: function(a,
        c) {
            var d = window.document, e = n[a];
            if (e && e.initDocuments) {
                if (c)
                    e.initNodes(c);
                else if (e.init(), "function" === b.type(e.initDocuments) && "document" === b.type(d) && e.initDocuments([d]), "function" === b.type(e.initNodes) && "element" === b.type(d.body))
                    b.on("DOMReady", function() {
                        e.initNodes([d.body])
                    });
                e._ran=!0
            }
        },
        registerProcessor: function() {
            var a=!1, c = [], d = function(d) {
                if (void 0 === d)
                    return c;
                "function" === b.type(d) && (c.push({
                    id: b.uniqid(),
                    fn: d
                }), a && this.initLinks())
            };
            d(function() {
                a=!0
            });
            return d
        }()
    };
    f.init();
    try {
        delete window.vglnk_self
    } catch (v) {}
})("undefined" ===
typeof vglnk_self ? "vglnk" : vglnk_self);
window.vglnk = window.vglnk || {};
window.vglnk.convert_plugin = function(m, f, b) {
    var s = {}, k;
    m = f.extend({
        any: !0
    }, m);
    k = {
        getDomains: function() {
            var n = [];
            f.each(s, function(b, f) {
                n.push(f)
            });
            0 < n.length && b.api("domains", {
                domains: n.join("|")
            }, {
                fn: f.bind(k.onDomainApi, k)
            })
        },
        init: function() {
            b.opt("rewrite_original", !0);
            m.any || b.registerProcessor(f.bind(function(b) {
                this.initDomainLookup();
                this.saveDomain(b)
            }, this))
        },
        initDomainLookup: function() {
            var b=!1;
            return function() {
                b || (b=!0, f.on("DOMReady", f.bind(this.getDomains, this)))
            }
        }(),
        onDomainApi: function(k) {
            var m;
            "object" === f.type(k) && "array" === f.type(k.results) && (m = {}, f.each(k.results, function(b) {
                m[b]=!0
            }), b.opt("commercial", m))
        },
        saveDomain: function(b) {
            b = f.canonicalizeHostname(b);
            s[b]=!0
        }
    };
    return {
        init: f.bind(k.init, k)
    }
};
window.vglnk = window.vglnk || {};
window.vglnk.modified_clicks_plugin = function(m, f, b) {
    return {
        init: function() {
            b.opt("rewrite_modified", !0)
        }
    }
};
window.vglnk = window.vglnk || {};
window.vglnk.dr_search_box_plugin = function(m, f, b) {
    m = f.extend({
        key: null
    }, m);
    var s = {
        init: function(b) {
            f.each(this.getDRSearchForms(b), function(b) {
                if (!f.cache(b, "evented")) {
                    var k = s.getInput(b), m = function() {
                        k.value || f.css(k, {
                            "background-image": "url(http://cdn.viglink.com/images/ebay_watermark.gif)"
                        })
                    };
                    f.cache(b, "evented", !0);
                    b.onsubmit = null;
                    k.onfocus = null;
                    k.onblur = null;
                    f.on(k, "focus", function() {
                        f.css(k, {
                            "background-image": "none"
                        })
                    });
                    f.on(k, "blur", m);
                    m();
                    f.on(b, "submit", function(f) {
                        s.onSubmit(f, b)
                    })
                }
            })
        },
        getDRSearchForms: function(b) {
            var m = [];
            f.each(b, function(b) {
                "element" === f.type(b) && f.each(b.getElementsByTagName("form"), function(b) {
                    s.getInput(b) && b.id.match(/^DR-ebay-search(CSS|2)?$/i) && m.push(b)
                })
            });
            return m
        },
        getInput: function(b) {
            return b.p || b.q2
        },
        onSubmit: function(k, n) {
            k = k || window.event;
            var t = "http://shop.ebay.com/i.html?" + f.toQuery({
                _nkw: s.getInput(n).value
            }), t = f.createA(t, "_blank");
            f.cache(t, "params", {
                key: m.key
            });
            b.click(t);
            return f.preventDefault(k)
        }
    };
    if (m.key)
        return {
            init: f.bind(s.init, s),
            initNodes: function(b) {
                s.init(b)
            }
        }
};
window.vglnk = window.vglnk || {};
window.vglnk.optimize_plugin = function(m, f, b, s) {
    var k, n = {}, t = 0;
    m = f.extend({
        platform: null
    }, m);
    k = {
        getLinks: function() {
            var n = f.platforms(m.platform).getPostIDs();
            b.api("optimize", {
                pt: m.platform,
                i: n ? n.join("|"): null,
                u: location.href
            }, {
                fn: f.bind(k.onOptimizeApi, k)
            })
        },
        log: function() {
            s("optimize", {
                ct: t
            })
        },
        onOptimizeApi: function(b) {
            "object" === f.type(b) && "object" === f.type(b.optLinks) && (n = b.optLinks, this.optimizeLinks({
                data: !0
            }))
        },
        optimizeLink: function() {
            var b = f.generateNodeFilter({
                classes: ["nooptimize"],
                rels: ["nooptimize"],
                custom: function(a, b) {
                    if (b)
                        return Boolean(f.cache(a, "type"))
                }
            }), k = function(a) {
                var b = a.href, d = a.textContent || a.innerText, e = function() {
                    var b = f.canonicalizeHostname(a);
                    return f.canonicalizeHostname(f.createEl("a", {
                        href: d
                    })) === b
                }, g = function() {
                    var b;
                    return e() ? (b = f.fromQuery(a.search), f.find(b, function(a) {
                        return a === d
                    })) : !1
                };
                return {
                    exact: b === d || function() {
                        var a = d.split(/(?:\.\.\.|\u2026)/);
                        return 2 > a.length?!1 : RegExp("^" + f.map(a, f.escapeRegExp).join(".+") + "$").test(b)
                    }() || g(),
                    partial: function() {
                        var b = f.canonicalizeHostname(a);
                        return RegExp("\\b" + f.escapeRegExp(b) + "\\b", "i").test(d)
                    }()||-1 !== d.indexOf(b)
                }
            };
            return function(a) {
                var c, d = n[a.href];
                if (d && b(a)) {
                    c = k(a);
                    if (c.exact) {
                        c = d.frdLink || d.optLink;
                        for (var e; e = a.firstChild;)
                            a.removeChild(e);
                        a.appendChild(document.createTextNode(c))
                    } else if (c.partial)
                        return;
                    f.cache(a, "params", {
                        type: "LO",
                        origOutId: d.pcid + ":" + d.linkId
                    });
                    a.href = d.optLink;
                    t++
                }
            }
        }(),
        optimizeLinks: function() {
            var m = {
                data: !1,
                timing: !1
            };
            return function(v) {
                m = f.extend(m, v);
                m.timing && (m.data && n) && (b.registerProcessor(f.bind(this.optimizeLink,
                k)), setTimeout(function() {
                    k.log()
                }, 0))
            }
        }(),
        setup: function() {
            if (!m.platform || "full" === m.platform)
                this.getLinks();
            else 
                f.on("DOMReady", f.bind(this.getLinks, this))
        }
    };
    k.setup();
    return {
        init: function() {
            f.on("DOMReady", function() {
                k.optimizeLinks({
                    timing: !0
                })
            })
        }
    }
};
window.vglnk = window.vglnk || {};
window.vglnk.page_harmony_plugin = function(m, f, b) {
    m = f.extend({
        level: null
    }, m);
    return {
        init: function() {
            var f = parseInt(m.level, 10);
            isFinite(f) && b.opt("harmony_level", f)
        }
    }
};
window.vglnk = window.vglnk || {};
window.vglnk.insert_plugin = function(m, f, b, s) {
    var k, n, t, u = null;
    m = f.extend({
        cat: null,
        platform: null,
        key: null,
        link_phrases: !0,
        link_urls: !0,
        link_target: null,
        per_page: null,
        per_phrase: 5,
        proximity: null,
        same_proximity: 100,
        scope: null,
        type: null,
        ui: !0
    }, m);
    if (m.key)
        return k = f.platforms(m.platform), n = {
            cache: function() {
                var b = {}, a = {}, c = function(c, d) {
                    var l = {};
                    "array" === f.type(d) && 0 < d.length && f.find(d, function(b) {
                        if (a[b]) {
                            l._post_is_cached=!0;
                            if (c)
                                return l[c] = a[b][c], !0;
                                f.each(a[b], function(a, b) {
                                    l[b] || (l[b] = a)
                                })
                        }
                    });
                    l = f.extend(f.clone(b), l);
                    return c ? l[c] : l
                }, d = function(c, d, l) {
                    (l = "array" === f.type(l) && 0 < l.length ? l : null) && f.each(l, function(b) {
                        a[b] = a[b] || {};
                        "L" !== d.type && (a[b][c] = d)
                    });
                    if (!l || "L" === d.type)
                        b[c] || (b[c] = d);
                        return !0
                    };
                    return function(a, b, l) {
                        var h = f.all(f.toArray(arguments), function(a) {
                            return Boolean(a)
                        });
                        "array" === f.type(h[h.length - 1]) && (l = h.pop());
                        a = h[0];
                        b = h[1];
                        if (1 >= h.length)
                            return c(a, l);
                            if (2 === h.length)
                                return d(a, b, l)
                            }
                        }(),
                        cached: function() {
                            var b = function(a) {
                                var b = n.cache(a);
                                return "array" === f.type(a) &&
                                a.length ? b._post_is_cached : Boolean(f.find(b, function() {
                                    return !0
                                }))
                            };
                            return function(a) {
                                return !m.platform || "full" === m.platform ||!a || "array" !== f.type(a) ? b(a) : f.all(a, function(a) {
                                    return b([a])
                                }).length === a.length
                            }
                        }(),
                        focusLink: function(b) {
                            b.id || (b.id = f.uniqid("vl-link-"));
                            location.href.hash = "#" + b.id;
                            window.scrollBy(0, - 150)
                        },
                        getPartnerParams: function() {
                            var f, a, c = b.opt("partner"), d = {};
                            for (f in c)
                                break;
                                if (f)
                                    for (a in c[f])
                                        d[f + "_" + a] = c[f][a];
                                        return d
                                    },
                                    getPhrases: function(k, a) {
                                        b.api("insert", f.extend(n.getPartnerParams(),
                                        {
                                            cat: m.cat,
                                            i: a ? a.join("|"): null,
                                            mode: m.mode,
                                            pt: m.platform,
                                            ps: m.product_source,
                                            u: location.href,
                                            type: m.type
                                        }), {
                                            fn: f.bind(n.onInsertApi, n)
                                        }, k, a)
                                    },
                                    init: function() {
                                        m.scope = m.scope || k.scope;
                                        m.link_urls && (t = RegExp("(?:(?:\\b(https?://)|(?:^|\\s)\\W*(www\\d{0,3}\\.|(?:[a-z0-9-]+\\.)+[a-z]{2,4}/))((?:[^\\s()<>]+|\\((?:[^\\s()<>]|(?:\\([^\\s()<>]+\\)))*\\))+(?:\\((?:[^\\s()<>]|(?:\\([^\\s()<>]+\\)))*\\)|[^\\s`!()\\[\\]{};:'\".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))|(?:^|\\s)\\W*((?:[a-z0-9-]+\\.)+com(?:/|\\b)))",
                                        "i"))
                                    },
                                    initLink: function(k, a, c) {
                                        if (c = m.link_target || c)
                                            k.target = c;
                                            k.href || (k.href = a.url);
                                            k.rel = "nofollow";
                                            f.cache(k, "params", {
                                                exp: u,
                                                key: m.key,
                                                mid: a.mid,
                                                type: a.type || null
                                            });
                                            f.cache(k, "href", k.href);
                                            b.link(k)
                                        },
                                        insertLinks: function() {
                                            var b, a = f.generateNodeFilter({
                                                classes: ["nolinks", "atma-nolink", "atma-nolinks"],
                                                tags: "applet embed object head img input link map meta param select button iframe option script style svg textarea title".split(" "),
                                                custom: function(a) {
                                                    return f.matches(a, "a") && Boolean(a.href)
                                                }
                                            }),
                                            c = function(b, e, f, g) {
                                                if (a(e, {
                                                    ancestors: !Boolean(g),
                                                    self: !0
                                                }))
                                                    if (3 === e.nodeType)
                                                        d(b, e, f);
                                                    else if (1 === e.nodeType)
                                                        for (e = e.firstChild; e;)
                                                            g = e.nextSibling, c(b, e, f, !0), e = g
                                                        }, d = function(a, b, c) {
                                                            var d=!1, f = b.parentNode, g = function(a, b) {
                                                                f.insertBefore(a, b);
                                                                f.removeChild(b)
                                                            };
                                                            b.data && (d = a.test(b.data.replace(/\s+/, " ")));
                                                            d && e(a, b, c, g)
                                                        }, e = function(a, c, d, e) {
                                                            for (var k, t, u, s, ta = function(a) {
                                                                var c;
                                                                a=!a ||!m.per_phrase ||!b[a.phrase] || b[a.phrase].count < m.per_phrase;
                                                                c=!m.per_page || f.reduce(0, b, function(a, b) {
                                                                    return a + b.count
                                                                }) <
                                                                m.per_page;
                                                                return a && c
                                                            }, va = function(a, b, c) {
                                                                var d, e, h;
                                                                if (!c.phrase)
                                                                    return !0;
                                                                    e = f.createEl("span");
                                                                    b.parentNode.insertBefore(e, b);
                                                                    e.appendChild(b);
                                                                    h = f.geometry(e);
                                                                    (m.proximity || m.same_proximity) && f.find(n.cache(a), function(a) {
                                                                        var b, e;
                                                                        if (a.links) {
                                                                            if ((b = n.normalizePhrase(a.phrase) === n.normalizePhrase(c.phrase))&&!m.same_proximity ||!b&&!m.proximity)
                                                                                return !1;
                                                                                e = b ? Math.max(m.same_proximity, m.proximity) : m.proximity;
                                                                                a.links = f.all(a.links, function(a) {
                                                                                    var b = f.isInDom(a.el);
                                                                                    !d && b && (d = f.find(a.segments, function(a) {
                                                                                        a =
                                                                                        a.geometry;
                                                                                        a = f.extend({}, a);
                                                                                        a.x1 -= e;
                                                                                        a.y1 -= e;
                                                                                        a.x2 += e;
                                                                                        a.y2 += e;
                                                                                        if (a.x1 < h.x2 && a.x2 > h.x1 && a.y1 < h.y2 && a.y2 > h.y1)
                                                                                            return !0
                                                                                        }));
                                                                                        return b
                                                                                    });
                                                                                    return d
                                                                        }
                                                                    });
                                                                    return function(a) {
                                                                        e.parentNode.insertBefore(b, e);
                                                                        e.parentNode.removeChild(e);
                                                                        return a
                                                                    }(!d)
                                                                }, R = function(a, b) {
                                                                    var c, d, e, h, g = {
                                                                        el: a,
                                                                        segments: []
                                                                    }, k = a.getElementsByTagName("span"), l = {
                                                                        els: []
                                                                    };
                                                                    c = 0;
                                                                    for (d = k.length; c < d; c++)
                                                                        e = k[c], void 0 === h || e.offsetTop === h.offsetTop ? l.els.push(e) : (g.segments.push(l), l = {
                                                                            els: [e]
                                                                        }), h = e;
                                                                        l.geometry = f.geometry.apply(f, l.els);
                                                                        g.segments.push(l);
                                                                        b.links = b.links || [];
                                                                        b.links.push(g);
                                                                        return b
                                                                    }; c && c.data && "" !== c.data && (Boolean(u = c.data.match(/^\s+/)) || Boolean(u = c.data.match(a)));)
                                                                        t = u[0], s = u.slice(1).join(""), k = (k = n.normalizePhrase(s)) ? n.cache(k, d) : null, t = c.data.indexOf(t) + t.length - s.length, 0 < t && (c = c.splitText(t)), t = c.length <= s.length ? null : c.splitText(s.length), s&&!k && (k = {
                                                                            url: s.match(/^https?:\/\//i) ? s: "http://" + s,
                                                                            type: "U"
                                                                        }), k && (k.url.match(/https?:\/\//i) && s && ta(k) && va(d, c, k)) && (s = g(s, k), f.cache(s, "unlinked") || (e(s, c), R(s, k), c = k.phrase || k.url,
                                                                        b[c] = b[c] || {
                                                                            count: 0,
                                                                            phrase: k.phrase,
                                                                            type: k.type
                                                                        }, b[c].count++)), c = t
                                                                    }, g = function(a, b) {
                                                                        var c;
                                                                        c = f.createEl("a");
                                                                        c.innerHTML = a.replace(/([a-z0-9]+ *|[^a-z0-9]+)/ig, "<span>$1</span>");
                                                                        c.className = "vglnk";
                                                                        f.cache(c, "type", "inserted");
                                                                        f.cache(c, "phrase", a);
                                                                        m.ui && "U" !== b.type && (c.title = "Link added by VigLink");
                                                                        n.initLink(c, b);
                                                                        return c
                                                                    };
                                                                    return function(d, e) {
                                                                        var g = n.regexp(e);
                                                                        b = {};
                                                                        g && (f.each(f.all(d, a), function(a) {
                                                                            c(g, a, e)
                                                                        }), m.link_phrases && n.log(b))
                                                                    }
                                                                }(),
                                                                loadPhrases: function(b, a, c) {
                                                                    f.each(b, function(a) {
                                                                        a.phrase &&
                                                                        a.url && (a.phrase = n.normalizePhrase(a.phrase), n.cache(a.phrase, {
                                                                            count: 0,
                                                                            phrase: a.phrase,
                                                                            mid: a.mid,
                                                                            url: a.url,
                                                                            type: a.type || ""
                                                                        }, c))
                                                                    });
                                                                    this.insertLinks(a, c)
                                                                },
                                                                log: function(b) {
                                                                    var a, c = 0, d = 0, e = 0, g = [], k = [], e = function(a, b) {
                                                                        return b.split(",")[0] - a.split(",")[0]
                                                                    };
                                                                    f.each(b, function(b, e) {
                                                                        var f = parseInt(b.count, 10);
                                                                        0 < f && (a = [f, e.replace(/\|/g, "%7C")].join(), "L" === b.type ? (c++, k.push(a)) : "U" !== b.type && (d++, g.push(a)))
                                                                    });
                                                                    k.sort(e);
                                                                    g.sort(e);
                                                                    e = c + d;
                                                                    0 < e && s("insert", [{
                                                                        ct: e,
                                                                        cl: c,
                                                                        ch: d,
                                                                        cu: 0,
                                                                        exp: u
                                                                    }, {
                                                                        pl: k.join("|")
                                                                    }, {
                                                                        ph: g.join("|")
                                                                    }
                                                                    ])
                                                                },
                                                                normalizePhrase: function(b) {
                                                                    return b.toLowerCase().replace(/(^\s+|\s+$)/g, "").split(/\s+/).join(" ")
                                                                },
                                                                onInsertApi: function(b, a, c) {
                                                                    "object" === f.type(b) && (u = b.exp, b.results && this.loadPhrases(b.results, a, c))
                                                                },
                                                                regexp: function(b) {
                                                                    var a;
                                                                    b = n.cache(b);
                                                                    delete b._post_is_cached;
                                                                    b = f.map(b, function(a, b) {
                                                                        return f.escapeRegExp(b).split(" ").join("\\s+")
                                                                    });
                                                                    0 < b.length && (a = "(?:^|[\\s\"'\\(])(" + b.join("|") + ")(?=\\s|\\W*$|\\W{2})", a = RegExp(t ? "(?:" + a + "|" + t.source + ")" : a, "i"));
                                                                    return a || t
                                                                }
                                                            }, {
                                                                init: f.bind(n.init, n),
                                                                initNodes: function(b) {
                                                                    var a;
                                                                    m.scope && (b = f.reduce([], f.withScope(b, m.scope), function(a, b) {
                                                                        return a.concat(b[1])
                                                                    }));
                                                                    b.length && (a = k.getPostIDs(b), m.link_phrases&&!n.cached(a) ? n.getPhrases(b, a) : n.insertLinks(b, a))
                                                                }
                                                            }
};

