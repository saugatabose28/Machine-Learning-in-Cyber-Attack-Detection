!function(e, t, i, n) {
    var s, o, a = {};
    a.qwery = function() {
        var e = function() {
            function e() {
                this.c = {}
            }
            function t(e) {
                return $.g(e) || $.s(e, "(^|\\s+)" + e + "(\\s+|$)", 1)
            }
            function i(e, t) {
                for (var i = 0, n = e.length; n > i; i++)
                    t(e[i])
            }
            function s(e) {
                for (var t = [], i = 0, n = e.length; n > i; ++i)
                    g(e[i]) ? t = t.concat(e[i]) : t[t.length] = e[i];
                return t
            }
            function o(e) {
                for (var t = 0, i = e.length, n = []; i > t; t++)
                    n[t] = e[t];
                return n
            }
            function a(e) {
                for (; (e = e.previousSibling) && 1 != e[O];);
                return e
            }
            function r(e) {
                return e.match(X)
            }
            function l(e, i, n, s, o, a, r, l, c, h, u) {
                var m, p, f, g, v;
                if (1 !== this[O])
                    return !1;
                if (i && "*" !== i && this[A] && this[A].toLowerCase() !== i)
                    return !1;
                if (n && (p = n.match(j)) && p[1] !== this.id)
                    return !1;
                if (n && (v = n.match(F)))
                    for (m = v.length; m--;)
                        if (!t(v[m].slice(1)).test(this.className))
                            return !1;
                if (c && w.pseudos[c]&&!w.pseudos[c](this, u))
                    return !1;
                if (s&&!r) {
                    g = this.attributes;
                    for (f in g)
                        if (Object.prototype.hasOwnProperty.call(g, f) && (g[f].name || f) == o)
                            return this
                }
                return s&&!d(a, et(this, o) || "", r)?!1 : this
            }
            function c(e) {
                return G.g(e) || G.s(e, e.replace(U, "\\$1"))
            }
            function d(e, t, i) {
                switch (e) {
                case"=":
                    return t == i;
                case"^=":
                    return t.match(K.g("^=" + i) || K.s("^=" + i, "^" + c(i), 1));
                case"$=":
                    return t.match(K.g("$=" + i) || K.s("$=" + i, c(i) + "$", 1));
                case"*=":
                    return t.match(K.g(i) || K.s(i, c(i), 1));
                case"~=":
                    return t.match(K.g("~=" + i) || K.s("~=" + i, "(?:^|\\s+)" + c(i) + "(?:\\s+|$)", 1));
                case"|=":
                    return t.match(K.g("|=" + i) || K.s("|=" + i, "^" + c(i) + "(-|$)", 1))
                }
                return 0
            }
            function h(e, t) {
                var n, s, o, a, c, d, h, u = [], p = [], f = t, g = Q.g(e) || Q.s(e, e.split(Y)), v = e.match(V);
                if (!g.length)
                    return u;
                if (a = (g = g.slice(0)).pop(), g.length && (o = g[g.length - 1].match(M)) && (f = b(t, o[1])), !f)
                    return u;
                for (d = r(a), c = f !== t && 9 !== f[O] && v && /^[+~]$/.test(v[v.length - 1]) ? function(e) {
                    for (; f = f.nextSibling;)
                        1 == f[O] && (d[1] ? d[1] == f[A].toLowerCase() : 1) && (e[e.length] = f);
                    return e
                }([]) : f[k](d[1] || "*"), n = 0, s = c.length; s > n; n++)(h = l.apply(c[n], d)
                    ) && (u[u.length] = h);
                return g.length ? (i(u, function(e) {
                    m(e, g, v) && (p[p.length] = e)
                }), p) : u
            }
            function u(e, t, i) {
                if (p(t))
                    return e == t;
                if (g(t))
                    return !!~s(t).indexOf(e);
                for (var n, o, a = t.split(","); t = a.pop();)
                    if (n = Q.g(t) || Q.s(t, t.split(Y)), o = t.match(V), n = n.slice(0), l.apply(e, r(n.pop())) && (!n.length || m(e, n, o, i)))
                        return !0;
                return !1
            }
            function m(e, t, i, n) {
                function s(e, n, a) {
                    for (; a = J[i[n]](a, e);)
                        if (p(a) && l.apply(a, r(t[n]))) {
                            if (!n)
                                return a;
                                if (o = s(a, n - 1, a))
                                    return o
                        }
                }
                var o;
                return (o = s(e, t.length - 1, e)) && (!n || Z(o, n))
            }
            function p(e, t) {
                return e && "object" == typeof e && (t = e[O]) && (1 == t || 9 == t)
            }
            function f(e) {
                var t, i, n = [];
                e: for (t = 0; t < e.length; ++t) {
                    for (i = 0; i < n.length; ++i)
                        if (n[i] == e[t])
                            continue e;
                    n[n.length] = e[t]
                }
                return n
            }
            function g(e) {
                return "object" == typeof e && isFinite(e.length)
            }
            function v(e) {
                return e ? "string" == typeof e ? w(e)[0] : !e[O] && g(e) ? e[0] : e : C
            }
            function b(e, t, i) {
                return 9 === e[O] ? e.getElementById(t) : e.ownerDocument && ((i = e.ownerDocument.getElementById(t)) && Z(i, e) && i ||!Z(e, e.ownerDocument) && _('[id="' + t + '"]', e)[0])
            }
            function w(e, t) {
                var i, n, a = v(t);
                if (!a ||!e)
                    return [];
                if (e === window || p(e))
                    return !t || e !== window && p(a) && Z(e, a) ? [e] : [];
                if (e && g(e))
                    return s(e);
                if (i = e.match(z)) {
                    if (i[1])
                        return (n = b(a, i[1])) ? [n] : [];
                    if (i[2])
                        return o(a[k](i[2]));
                    if (tt && i[3])
                        return o(a[x](i[3]))
                }
                return _(e, a)
            }
            function y(e, t) {
                return function(i) {
                    var n, s;
                    return L.test(i) ? void(9 !== e[O] && ((s = n = e.getAttribute("id")) || e.setAttribute("id", s = "__qwerymeupscotty"), i = '[id="' + s + '"]' + i, t(e.parentNode || e, i, !0), n || e.removeAttribute("id"))) : void(i.length && t(e, i, !1))
                }
            }
            var _, C = document, S = C.documentElement, x = "getElementsByClassName", k = "getElementsByTagName", E = "querySelectorAll", T = "useNativeQSA", A = "tagName", O = "nodeType", j = /#([\w\-]+)/, F = /\.[\w\-]+/g, M = /^#([\w\-]+)$/, I = /^\.([\w\-]+)$/, D = /^([\w\-]+)$/, R = /^([\w]+)?\.([\w\-]+)$/, L = /(^|,)\s*[>~+]/, N = /^\s+|\s*([,\s\+\~>]|$)\s*/g, P = /[\s\>\+\~]/, H = /(?![\s\w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^'"]*\]|[\s\w\+\-]*\))/, U = /([.*+?\^=!:${}()|\[\]\/\\])/g, q = /^(\*|[a-z0-9]+)?(?:([\.\#]+[\w\-\.#]+)?)/, B = /\[([\w\-]+)(?:([\|\^\$\*\~]?\=)['"]?([ \w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^]+)["']?)?\]/, W = /:([\w\-]+)(\(['"]?([^()]+)['"]?\))?/, z = new RegExp(M.source + "|" + D.source + "|" + I.source), V = new RegExp("(" + P.source + ")" + H.source, "g"), Y = new RegExp(P.source + H.source), X = new RegExp(q.source + "(" + B.source + ")?(" + W.source + ")?"), J = {
                " ": function(e) {
                    return e && e !== S && e.parentNode
                },
                ">": function(e, t) {
                    return e && e.parentNode == t.parentNode && e.parentNode
                },
                "~": function(e) {
                    return e && e.previousSibling
                },
                "+": function(e, t, i, n) {
                    return e ? (i = a(e)) && (n = a(t)) && i == n && i : !1
                }
            };
            e.prototype = {
                g: function(e) {
                    return this.c[e] || n
                },
                s: function(e, t, i) {
                    return t = i ? new RegExp(t) : t, this.c[e] = t
                }
            };
            var $ = new e, G = new e, K = new e, Q = new e, Z = "compareDocumentPosition"in S ? function(e, t) {
                return 16 == (16 & t.compareDocumentPosition(e))
            }
            : "contains"in S ? function(e, t) {
                return t = 9 === t[O] || t == window ? S : t, t !== e && t.contains(e)
            }
            : function(e, t) {
                for (; e = e.parentNode;)
                    if (e === t)
                        return 1;
                return 0
            }, et = function() {
                var e = C.createElement("p");
                return (e.innerHTML = '<a href="#x">x</a>') && "#x" != e.firstChild.getAttribute("href") ? function(e, t) {
                    return "class" === t ? e.className : "href" === t || "src" === t ? e.getAttribute(t, 2) : e.getAttribute(t)
                } : function(e, t) {
                    return e.getAttribute(t)
                }
            }(), tt=!!C[x], it = C.querySelector && C[E], nt = function(e, t) {
                var n, s, a = [];
                try {
                    return 9 !== t[O] && L.test(e) ? (i(n = e.split(","), y(t, function(e, t) {
                        s = e[E](t), 1 == s.length ? a[a.length] = s.item(0) : s.length && (a = a.concat(o(s)))
                    })), n.length > 1 && a.length > 1 ? f(a) : a) : o(t[E](e))
                } catch (r) {}
                return st(e, t)
            }, st = function(e, n) {
                var s, o, a, r, l, c, d = [];
                if (e = e.replace(N, "$1"), o = e.match(R)) {
                    for (l = t(o[2]), s = n[k](o[1] || "*"), a = 0, r = s.length; r > a; a++)
                        l.test(s[a].className) && (d[d.length] = s[a]);
                    return d
                }
                return i(c = e.split(","), y(n, function(e, t, i) {
                    for (l = h(t, e), a = 0, r = l.length; r > a; a++)(9 === e[O] || i || Z(l[a], n)
                        ) && (d[d.length] = l[a])
                })), c.length > 1 && d.length > 1 ? f(d) : d
            }, ot = function(e) {
                "undefined" != typeof e[T] && (_ = e[T] && it ? nt : st)
            };
            return ot({
                useNativeQSA: !0
            }), w.configure = ot, w.uniq = f, w.is = u, w.pseudos = {}, w
        }();
        return e
    }(), a.rAF = function() {
        var e, t, i, n, s, o, a, r, l, c, d;
        for (t = "native", i = Date.now || function() {
            return (new Date).getTime()
        }, s = window.requestAnimationFrame, c = ["webkit", "moz", "o", "ms"], r = 0, l = c.length; l > r; r++)
            a = c[r], null == s && (s = window[a + "RequestAnimationFrame"]);
        return null == s && (t = "timer", e = 0, n = o = null, s = function(t) {
            var s, a, r;
            return null != n ? void n.push(t) : (r = i(), a = Math.max(0, 16.66 - (r - e)), n = [t], e = r + a, s = function() {
                var t, i, s, o;
                for (i = n, n = null, s = 0, o = i.length; o > s; s++)(t = i[s])(e)
            }, void(o = setTimeout(s, a)))
        }), s(function(e) {
            var t;
            null != (null != (t = window.performance) ? t.now : void 0) && 1e12 > e ? (s.now = function() {
                return window.performance.now()
            }, s.method = "native-highres") : s.now = i
        }), s.now = null != (null != (d = window.performance) ? d.now : void 0) ? function() {
            return window.performance.now()
        } : i, s.method = t, s
    }(), a.emdot = function() {
        function e(e) {
            if (e && 1 !== e.nodeType)
                throw new Error("Cannot wrap non-element in Emdot");
            this.element = e, this.element.style || (this.element.style = {})
        }
        function t(e) {
            return function(t) {
                try {
                    return this.attr(e, t)
                } catch (i) {
                    return this.element[e] = t, this
                }
            }
        }
        function i(t) {
            return function() {
                var i, n, o, a = Array.prototype.slice.call(arguments, 0);
                for (i = document.createElement(t), o = 0; o < a.length; o++)
                    n = a[o], s(i, n);
                return new e(i)
            }
        }
        function s(t, i) {
            if (null !== i) {
                if (i === n)
                    t.appendChild(document.createTextNode(""));
                else if (i.constructor === String || i.constructor === Number)
                    t.appendChild(document.createTextNode(i));
                else if (i && 1 === i.nodeType)
                    t.appendChild(i);
                else if (i instanceof e)
                    t.appendChild(i.element);
                else {
                    if (!(i instanceof Array)) {
                        if (i)
                            throw new Error("Could not turn truthy argument into element");
                        return !1
                    }
                    for (var s = 0; s < i.length; s++)
                        t.appendChild(i[s]instanceof e ? i[s].element : i[s])
                    }
                return !0
            }
        }
        var o = "html,head,title,base,link,meta,style,script,noscript,template,body,section,nav,article,aside,h1,h2,h3,h4,h5,h6,header,footer,address,main,p,hr,pre,blockquote,ol,ul,li,dl,dt,dd,figure,figcaption,div,a,em,strong,small,s,cite,q,dfn,abbr,data,time,code,var,samp,kbd,sub,sup,i,b,u,mark,ruby,rt,rp,bdi,bdo,span,br,wbr,ins,del,img,iframe,embed,object,param,video,audio,source,track,canvas,map,area,svg,table,caption,colgroup,col,tbody,thead,tfoot,tr,td,th,form,fieldset,legend,label,input,button,select,datalist,optgroup,option,textarea,keygen,output,progress,meter,details,summary,menuitem,menu".split(","), a = "value,name,id,href,src,title,alt,target,type,role,placeholder,action,method,autocorrect,autocapitalize,required".split(","), r = e.prototype;
        for (r.style = function(e) {
            if (e)
                for (var t = e.replace(/^\s+/, "").replace(/[;\s]+$/, "").split(";"), i = 0, n = t.length; n > i; i++) {
                    var s = t[i].split(":"), o = s[0].replace(/\s+/g, ""), a = s[1].replace(/^\s+/, "").replace(/\s+$/, "");
                    if (!o ||!a)
                        throw new Error("Emdot: Malformed style string - " + e);
                        try {
                            a.replace(/\s+/g, ""), this.element.style[o] = a
                        } catch (r) {
                            window.console && console.log && console.log(r.toString() + " - " + e)
                        }
                    }
            return this
        }, r.css = function() {
            if (arguments.length) {
                var e = Array.prototype.slice.call(arguments, 0);
                this.element.className = e.join(" ")
            }
            return this
        }, r.data = function(e, t) {
            return null === t || "" === t ? this.element.removeAttribute("data-" + e, t) : e && this.element.setAttribute("data-" + e, t), this
        }, r.attr = function(e, t) {
            return null === t || "" === t ? this.element.removeAttribute(e, t) : e && this.element.setAttribute(e, t), this
        }, r.aria = function(e, t) {
            return this.attr("aria-" + e, t)
        }, emdot = function(e, t, i) {
            var n, s = [], i = i || this;
            for (n = 0, len = e.length; len > n; n++)
                s[s.length] = t.call(i, e[n], n, e);
            return s
        }, c = o.length - 1; c >= 0; c--) {
            var l = o[c];
            emdot[l] = i(l)
        }
        for (var c = a.length - 1; c >= 0; c--) {
            var d = a[c];
            r[d] = t(d)
        }
        return emdot
    }(), a.utils = function(a, r, l) {
        var c = {
            KEYCODES: {
                13: "enter",
                27: "esc"
            },
            emdot: l,
            cloneObject: function(e) {
                var t = {};
                for (var i in e)
                    t[i] = c.isPlainObject(e[i]) && e[i] !== n ? c.isElement(e[i]) ? e[i] : c.cloneObject(e[i]) : e[i];
                return t
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    if (e.hasOwnProperty(t))
                        return !1;
                return !0
            },
            extend: i.extend,
            isPlainObject: function(e) {
                return e ? "[object Object]" === Object.prototype.toString.call(e) : !1
            },
            isArray: function(e) {
                return e ? "isArray"in Array ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e) : !1
            },
            isFunction: function(e) {
                return e ? "[object Function]" === Object.prototype.toString.call(e) : !1
            },
            isString: function(e) {
                return "string" == typeof e || "[object String]" === Object.prototype.toString.call(e)
            },
            isNumber: function(e) {
                return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
            },
            isNumeric: function(e) {
                return !isNaN(e)
            },
            isBoolean: function(e) {
                return e===!0 || e===!1 || "[object Boolean]" == Object.prototype.toString.call(e)
            },
            isUndefined: function(e) {
                return e === n
            },
            isNull: function(e) {
                return null === e
            },
            isNaN: function(e) {
                return c.isNumber(e) && e!=+e
            },
            isElement: function(e) {
                return !c.isNull(e)&&!c.isUndefined(e) && 1 === e.nodeType
            },
            has: function(e, t) {
                return c.isString(e) ? Boolean( - 1 !== e.indexOf(t)) : !1
            },
            each: function(e, t, i) {
                var n, s;
                if (i = i || this, c.isArray(e))
                    for (n =- 1, s = e.length; ++n < s && t.call(i, n, e[n])!==!1;);
                else if (c.isPlainObject(e))
                    for (n in e)
                        if (e.hasOwnProperty(n) && t.call(i, n, e[n])===!1)
                            break
            },
            keys: function(e) {
                var t, i = [];
                for (t in e)
                    e.hasOwnProperty(t) && i.push(t);
                return i
            },
            match: function(e, t, i) {
                var n, s, o, a, r = [], l = [], d = JSON.stringify(e);
                return c.each(e, function(e) {
                    r.push(e)
                }), n = i + "//" + r.join("/"), s = c.match[n] || (c.match[n] = {}), s.matches || (o = s.matches || (s.matches = []), a = s.values || (s.values = t), s.keys = r, c.each(t, function(e, t) {
                    var i = {};
                    c.each(r, function(e, n) {
                        i[n] = t[n]
                    }), o.push(i)
                })), c.each(s.matches, function(e, t) {
                    d === JSON.stringify(t) && l.push(s.values[e])
                }), l
            },
            filter: function(e, t, i) {
                var n, s, o = [];
                if (e.filter)
                    return e.filter(t, i);
                for (var a = 0, r = e.length; r > a; a++)
                    n = e[a], s = t.call(i || n, n, a, e), s && (o[o.length] = n);
                return o
            },
            map: function(e, t, i) {
                var n, s = [];
                if (e.map)
                    return e.map(t, i);
                for (var o = 0, a = e.length; a > o; o++)
                    n = e[o], s[s.length] = t.call(i, n, o, e);
                return s
            },
            every: function(e, t, i) {
                var n, s;
                if (e.every)
                    return e.every(t, i);
                for (var o = 0, a = e.length; a > o; o++)
                    if (n = e[o], s = t.call(i, n, o, e), !s)
                        return !1;
                return !0
            },
            some: function(e, t, i) {
                var n, s;
                if (e.some)
                    return e.some(t, i);
                for (var o = 0, a = e.length; a > o; o++)
                    if (n = e[o], s = t.call(i, n, o, e))
                        return !0;
                return !1
            },
            toObject: function(e) {
                var t = {};
                return c.each(e, function(e, i) {
                    i !== n && (t[i]=!0)
                }), t
            },
            toArray: function(e) {
                var t = [];
                return c.each(e, function(e, i) {
                    t.push(i)
                }), t
            },
            keys: function(e) {
                var t = 0;
                return Object.keys ? Object.keys(e).length : (c.each(e, function() {
                    ++t
                }), t)
            },
            queue: function(e, t, i) {
                var n = (this._q = this._q || {}, this._q[e] = this._q[e] || []);
                return n.push({
                    item: t,
                    context: i || this
                }), n
            },
            dequeue: function(e) {
                return this._q && this._q[e] && this._q[e].length && this._q[e].shift()
            },
            bindEvents: function(e, t) {
                var n, s, o, a = this, r = c.isElement(a.element) ? a.element: !1, l = 0;
                c.each(e, function(e, d) {
                    l = e.lastIndexOf(" "), o = i.bind(d, a), - 1 === l ? c.has(e, "addthis") ? "remove" !== t ? _ate.ed.addEventListener(e, o) : _ate.ed.removeEventListener(e, o) : r && c.listenTo({
                        elem: r,
                        ev: e,
                        callback: o,
                        type: t,
                        originalEv: e
                    }) : (n = "!" === e.charAt(0) ? e.substring(1, l) : e.substring(0, l), s = e.substring(l + 1), c.listenTo({
                        layer: "!" === e.charAt(0)?!1: r,
                        elem: n,
                        ev: s,
                        callback: o,
                        type: t,
                        originalEv: e
                    }))
                })
            },
            listenTo: function(t) {
                var i, n=!1, o = t.elem, r = t.layer, l = function() {
                    var t = [];
                    return "window" === o || "w" === o ? t.push(e) : "document" === o || "d" === o ? t.push(s) : c.isString(o) ? (t = a(o), n = o) : t.push(o), t
                }(), d = t.ev, h = t.callback, u = "remove" !== t.type ? "addEventHandler" : "removeEventHandler", m = t.originalEv;
                (l || r) && d && h && (r ? c[u]({
                    container: r,
                    elem: l.length > 0 ? l[0]: !1,
                    selector: n,
                    ev: d,
                    cb: h,
                    originalEv: m
                }) : c.isArray(l) ? (i = l.length, c.each(l, function(e) {
                    c[u]({
                        elem: l[e],
                        selector: n,
                        ev: d,
                        cb: h,
                        originalEv: m
                    })
                })) : c[u]({
                    elem: l,
                    selector: n,
                    ev: d,
                    cb: h,
                    originalEv: m
                }))
            },
            addEventHandler: function(t) {
                var i = t.container, n = t.elem, s = t.selector, o = t.ev, a = function(i, n) {
                    t.cb(i || e.event, n || i.target || i.srcElement)
                }, r = t.originalEv, l = function(i) {
                    function n(e) {
                        return matchesTag = c.every(d, function(t) {
                            var i = t.toUpperCase();
                            return e.tagName == i
                        }), matchesClass = c.every(h, function(t) {
                            var i = t.substr(1);
                            return c.hasClass(i, e)
                        }), matchesId = c.every(u, function(t) {
                            var i = t.substr(1);
                            return e.id === i
                        }), matchesId && matchesTag && matchesClass
                    }
                    i = i || e.event;
                    var o, r, l = i.target || i.srcElement;
                    if (s) {
                        o = s.split(" "), r = o.length > 1 ? o.pop() : s;
                        for (var d = r.match(/^[^\.\#]+/g) || [], h = r.match(/\.[^\.\#]+/g) || [], u = r.match(/\#[^\.\#]+/g) || []; l && l !== t.container;) {
                            if (n(l))
                                return a(i, l);
                            l = l.parentNode
                        }
                    }
                }, d = i ? l: a, h = i || n;
                ("mouseenter" === o || "mouseleave" === o) && (c.isMouseEventSupported(o) || (o = "mouseenter" === o ? "mouseover" : "mouseout", d = c.fixMouseEvent(d))), h.__callbacks || (h.__callbacks = {}), h.__callbacks[r] = d, h.addEventListener ? h.addEventListener(o, d, !1) : h.attachEvent ? h.attachEvent("on" + o, d) : h["on" + o] = d
            },
            removeEventHandler: function(e) {
                var t, i = e.container, n = e.elem, s = e.ev, o = e.cb, a = e.originalEv;
                t = i || n, t.__callbacks = t.__callbacks || {}, o = t.__callbacks[a], this.removeEvent({
                    elem: t,
                    ev: s,
                    cb: o
                })
            },
            removeEvent: function(e) {
                var t = e.elem, i = e.ev, n = e.cb;
                t.removeEventListener ? t.removeEventListener(i, n, !1) : t.detachEvent ? t.detachEvent("on" + i, n) : t["on" + i] = null
            },
            isMouseEventSupported: function d(e) {
                if (d.tested===!0)
                    return d.isSupported;
                var t, i = s.createElement("div");
                return e = "on" + e, t = e in i, t || (c.attr(i, e, "return;"), t = c.isFunction(i[e])), d.isSupported = t, d.tested=!0, i = null, t
            },
            fixMouseEvent: function(e) {
                return function(t) {
                    try {
                        var i = t.relatedTarget;
                        i && (i === this || this.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY) || e.call(this, t)
                    } catch (n) {}
                }
            },
            preventDefaultEvent: function(e) {
                e.preventDefault ? e.preventDefault() : e.returnValue=!1
            },
            stopEventPropagationImmediately: function(e) {
                e.stopImmediatePropagation && e.stopImmediatePropagation()
            },
            once: function(e) {
                var t, i=!1;
                return function() {
                    return i ? t : (i=!0, t = e.apply(this, arguments), e = null, t)
                }
            },
            debounce: function(e, t) {
                var i, n, s, o;
                return function() {
                    s = this, n = [].slice.call(arguments, 0), o = new Date;
                    var a = function() {
                        var r = new Date - o;
                        t > r ? i = setTimeout(a, t - r) : (i = null, e.apply(s, n))
                    };
                    i || (i = setTimeout(a, t))
                }
            },
            triggerGesture: function(t, i, n, s) {
                var o = document.createEvent("GestureEvent");
                o.initGestureEvent(i, !0, !0, e, 2, 0, 0, 0, 0, !1, !1, !1, !1, t, n || 1.5, s || 0), t.dispatchEvent(o)
            },
            scrollBottomPercentage: function() {
                return this.scrollBottom() / this.pageHeight()
            },
            scrollPercentage: function() {
                var e = this.pageHeight(), t = c.scrollTop();
                return t / e
            },
            scrollBottom: function() {
                return this.scrollTop() + window.innerHeight
            },
            scrollTop: function(e) {
                return e = e || s.documentElement || o, e.scrollTop || o.scrollTop
            },
            pageWidth: function() {
                return window.innerWidth || document.documentElement.clientWidth
            },
            pageHeight: function() {
                return o.scrollHeight
            },
            elementInViewport: function(t) {
                if (c.isString(t) && (t = a(t)[0], !c.isElement(t)))
                    return !1;
                for (var i = t.offsetTop, n = t.offsetLeft, o = t.offsetWidth, r = t.offsetHeight, l = e.pageYOffset ? e.pageYOffset : s.documentElement.scrollTop, d = e.pageXOffset ? e.pageXOffset : s.documentElement.scrollLeft, h = this.pageHeight(), u = this.pageWidth(); t.offsetParent;)
                    t = t.offsetParent, i += t.offsetTop, n += t.offsetLeft;
                return l + h > i && d + u > n && i + r > l && n + o > d
            },
            trim: function(e) {
                return e.replace(/^\s+|\s+$/g, "")
            },
            desktop: function() {
                return !c.mobile()
            },
            browser: function(e) {
                switch (e.toLowerCase()) {
                case"firefox":
                    return _ate.bro.ffx;
                case"internet explorer":
                    return _ate.bro.msi;
                case"internetexplorer":
                    return _ate.bro.msi;
                case"explorer":
                    return _ate.bro.msi;
                case"ie":
                    return _ate.bro.msi;
                case"safari":
                    return _ate.bro.saf;
                case"chrome":
                    return _ate.bro.chr;
                case"opera":
                    return _ate.bro.opr;
                default:
                    return !1
                }
            },
            mobile: function() {
                return _ate.bro.mob
            },
            tablet: function() {
                var e = c.mobile(), t = e && window.screen && window.screen.availWidth ? window.screen.availWidth: 0, i = e && window.screen && window.screen.availHeight ? window.screen.availHeight: 0, n = e ? t > i ? i: t: !1, s = n ? n > 800: !1;
                return s
            },
            phone: function() {
                var e = c.mobile(), t = e && window.screen && window.screen.availWidth ? window.screen.availWidth: 0, i = e && window.screen && window.screen.availHeight ? window.screen.availHeight: 0, n = e ? t > i ? i: t: !1, s = n ? 800 >= n: !1;
                return s
            },
            getCurrentDevice: function(e) {
                var t = c.pageWidth(), i = e.options || {}, n = i.responsive || {}, s = (c.isString(n.minWidth) ? c.has(n.minWidth, "px")?+n.minWidth.replace("px", "") : + n.minWidth : n.minWidth) || 0, o = c.isString(n.maxWidth) ? c.has(n.maxWidth, "px")?+n.maxWidth.replace("px", ""): + n.maxWidth : n.maxWidth, a = "desktop";
                return a = n===!1 || c.isUndefined(s) || c.isUndefined(o) || c.isIEQuirksMode() ? "desktop" : t >= s && o >= t ? "mobile" : "desktop"
            },
            publicApi: function(e) {
                var t = {};
                return c.each(e, function(i) {
                    "_" !== i.charAt(0) && (t[i] = e[i])
                }), t
            },
            removeChildren: function(e) {
                if (e)
                    for (; e.hasChildNodes();)
                        e.removeChild(e.lastChild)
            },
            supports: {
                csstransitions: function() {
                    var e = o.style, t = "transition", i = ["Moz", "Webkit", "Khtml", "O", "ms"];
                    return c.supports.csstransitions.supports !== n ? c.supports.csstransitions.supports : c.isString(e[t]) ? (c.supports.csstransitions.supports=!0, !0) : (t = t.charAt(0).toUpperCase() + t.substr(1), c.each(i, function(i, n) {
                        return c.isString(e[n + t]) ? (c.supports.csstransitions.supports=!0, !0) : void 0
                    }), c.supports.csstransitions.supports=!1, !1)
                },
                requestAnimationFrame: function() {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame
                }
            },
            addClass: function(e, t) {
                c.isElement(t) && c.isString(e) && (this.hasClass(e, t) || (t.classList && c.isString(e) && e.length ? t.classList.add(e) : t.className ? t.className += " " + e : t.className = e))
            },
            removeClass: function(e, t) {
                if (t && t.className && c.isElement(t) && c.isString(e)) {
                    var i = " " + t.className.replace(/[\t\r\n]/g, " ") + " ";
                    if (c.hasClass(e, t))
                        if (t.classList && c.isString(e) && e.length)
                            t.classList.remove(e);
                        else {
                            for (; c.has(i, " " + e + " ");)
                                i = i.replace(" " + e + " ", " ");
                                t.className = i.replace(/^\s+|\s+$/g, "")
                            }
                    }
            },
            hasClass: function(e, t) {
                return c.isElement(t) && c.isString(e) ? t.classList && c.isString(e) && e.length ? t.classList.contains(e) : t ? new RegExp(" " + e + " ").test(" " + t.className + " ") : !1 : !1
            },
            hasjQuery: function() {
                return !!e.jQuery
            },
            hasjQueryUI: function() {
                return c.hasjQuery() && e.jQuery.ui
            },
            isIEQuirksMode: function() {
                return _ate.bro.msi && "backcompat" === s.compatMode.toLowerCase()
            },
            isVisible: function(e) {
                return c.isElement(e) ? "none" !== c.getCSSAttr(e, "display") && "hidden" !== c.getCSSAttr(e, "visibility") && 0!==+c.getCSSAttr(e, "opacity", 1)&&!c.has(c.getCSSAttr(e, "filter", "alpha(opacity=0)")) : !1
            },
            getCSSAttr: function(t, i, n) {
                if (!c.isElement(t))
                    return "";
                var s = t.currentStyle || e.getComputedStyle(t, null) || {}, o = function() {
                    return e.getComputedStyle && s.getPropertyValue ? s.getPropertyValue ? s.getPropertyValue(i) : "" : t.currentStyle ? s[i] : void 0
                }();
                return c.isUndefined(o) ? n : o
            },
            setCSSAttr: function(e, t, i) {
                c.isElement(e) && (c.isString(t) && c.isString(i) ? e.style[t] = i : c.isPlainObject(t) && c.each(t, function(t, i) {
                    e.style[t] = i
                }))
            },
            hasAttr: function(e, t) {
                return c.isElement(e)&&!c.isUndefined(t) ? c.isUndefined(e.hasAttribute)?!c.isUndefined(e.attributes[t]) : e.hasAttribute(t) : void 0
            },
            attr: function(e, t, i) {
                if (c.isElement(e)&&!c.isUndefined(t))
                    if (c.isUndefined(i)) {
                        if (c.hasAttr(e, t))
                            return e.getAttribute(t)
                    } else 
                        e.setAttribute(t, i)
            },
            removeAttr: function(e, t) {
                c.isElement(e)&&!c.isUndefined(t) && e.removeAttribute(t)
            },
            warn: function(e) {
                console.warn && console.warn(e)
            },
            randomize: function(e) {
                var t, i = e.length;
                c.each(e, function(n) {
                    t = Math.floor(Math.random() * i), e[n] = e.splice(t, 1, e[n])[0]
                })
            },
            fireCustomEvent: function(e, t, i, n) {
                _ate.ed.fire(e, t, i, n)
            },
            safeActiveElement: function() {
                try {
                    return s.activeElement
                } catch (e) {}
            },
            specialEvents: {
                blur: function(e) {
                    return e === c.safeActiveElement() && e.blur ? (e.blur(), !1) : void 0
                }
            },
            fireDOMEvent: function(e, t) {
                var i;
                return s.createEvent ? (i = s.createEvent("HTMLEvents"), i.initEvent(t, !0, !0), !e.dispatchEvent(i)) : (i = s.createEventObject(), e.fireEvent("on" + t, i))
            },
            trigger: function(e, t, i, n) {
                c.isString(e) && (c.has(e, "addthis") ? c.fireCustomEvent(e, t, i, n) : c.isElement(t) && c.fireDOMEvent(t, e))
            },
            objectToStyle: function(e) {
                var t = "";
                return c.each(e, function(e, i) {
                    t += e + ": " + i + ";"
                }), t
            },
            serviceTemplate: function(e, t) {
                var i, n = c.getTopService(t);
                return n && (i = c.getServiceName(n), c.isString(e) && (e = e.replace(/\{\{service\}\}/, i))), e
            },
            getServiceName: function(e) {
                return e.substring(0, 1).toUpperCase() + e.substring(1)
            },
            getTopService: function(e) {
                var i = t.user.services() || [], n = {
                    google_plus: "google_plusone_share"
                };
                return c.isUndefined(e) || "preferred" === e ? (e = i.length > 0 ? i[0] : {
                    name: "facebook"
                }, e.name) : e in n ? n[e] : e
            },
            openWindow: function(e) {
                var t, i = e.url || "", n = e.new_window ||!0, s = e.focus ||!0;
                i.length && (i.indexOf("://") < 0 && (i = "//" + i), t = n ? window.open(i, "_blank") : window.open(i), s && t.focus())
            },
            requestTimeout: function(e, t, i) {
                function n() {
                    var a = (new Date).getTime(), l = a - s;
                    l >= t ? c.isUndefined(i) ? e.call(e) : e.call(e, i) : o.value = r(n)
                }
                if (!c.supports.requestAnimationFrame)
                    return window.setTimeout(e, t);
                var s = (new Date).getTime(), o = {};
                return o.value = r(n), o
            },
            clearRequestTimeout: function(e) {
                window.cancelAnimationFrame ? window.cancelAnimationFrame(e.value) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(e.value) : window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(e.value) : window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(e.value) : window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(e.value) : window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(e.value) : clearTimeout(e)
            },
            isHexColor: function(e) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
            },
            gradients: {
                cache: {},
                checkString: function(e) {
                    var t = {
                        black: "#000000",
                        blue: "#0000ff",
                        gray: "#808080",
                        grey: "#808080",
                        green: "#008000",
                        orange: "#ffa500",
                        purple: "#800080",
                        red: "#ff0000",
                        white: "#ffffff",
                        yellow: "#ffff00"
                    };
                    return e = e in t ? t[e].substring(1) : !1
                },
                hex2num: function(e) {
                    if (2 !== e.length)
                        throw "err: use with 2-digit 16 bit numbers";
                    return parseInt(e, 16)
                },
                num2Hex: function(e) {
                    var t = Math.floor(e).toString(16);
                    return 1 === t.length && (t = "0" + t), t
                },
                mag: function(e) {
                    return e = e || c.gradients.normalizeColor(), c.gradients.hex2num(e.substring(0, 2)) + c.gradients.hex2num(e.substring(2, 4)) + c.gradients.hex2num(e.substring(4, 6))
                },
                normalizeColor: function(e) {
                    e && e.length > 0 && (e = e.replace(/\s+/, ""));
                    var t = c.gradients.checkString(e);
                    if (e = t ? t : e.replace("#", ""), e && c.gradients.isValid(e)) {
                        if (3 === e.length) {
                            var i = e.substring(0, 1), n = e.substring(1, 2), s = e.substring(2, 3);
                            e = "" + i + i + n + n + s + s
                        }
                    } else 
                        e = "000000";
                    return e
                },
                isValid: function(e) {
                    return e = e.toLowerCase(), "#" === e.substring(0, 1) && (e = e.substring(1)), /(^[0-9,a-f]{3}$)|(^[0-9,a-f]{6}$)/.test(e)?!0 : c.gradients.checkString(e)
                },
                index: function(e) {
                    return e / 255
                },
                scaleUp: function(e) {
                    return e = e > 1 ? 1 : e, 255 * e
                },
                shadeOne: function(e, t) {
                    return c.gradients.num2Hex(c.gradients.scaleUp(c.gradients.index(c.gradients.hex2num(e)) * t))
                },
                shade: function(e, t) {
                    return t = t || c.gradients.normalizeColor(), e || (e = c.gradients.distance), "" + t in c.gradients.cache || (c.gradients.cache["" + t] = {}), "" + e in c.gradients.cache["" + t] || (c.gradients.cache["" + t][e] = "" + c.gradients.shadeOne(t.substring(0, 2), e) + c.gradients.shadeOne(t.substring(2, 4), e) + c.gradients.shadeOne(t.substring(4, 6), e)), c.gradients.cache[t][e]
                },
                distance: .2,
                cssString: function(e, t) {
                    if (_ate.bro.ie6 || _ate.bro.ie7)
                        return "";
                    e = c.gradients.normalizeColor(e), t = t || c.gradients.distance, (c.gradients.mag(e) > 700 || c.gradients.mag(e) < 100) && (t = 0);
                    var i = c.gradients.shade(1 - t, e), n = (c.gradients.shade(1 + 2 * t, e), c.gradients.shade(1 + t, e)), s = c.gradients.shade(.9, e), o = "background-image: -webkit-gradient(linear,left bottom,left top,color-stop(0%, #" + i + "),color-stop(90%, #" + n + "));background-image: -ms-linear-gradient(bottom, #" + i + ",#" + n + ");background-image: -moz-linear-gradient(center bottom,#" + i + " 0%,#" + n + " 100%);border-color: #" + s;
                    return o
                }
            },
            validation: {
                patterns: {
                    email: "^[a-zA-Z0-9._-]+@[a-zA-Z0-9][a-zA-Z0-9.-]*[.]{1}[a-zA-Z]{2,6}$"
                },
                validators: {
                    pattern: function(e, t) {
                        return new RegExp(t, "gi").test(e)?!0 : !1
                    },
                    isEmail: function(e) {
                        return c.validation.validators.pattern(e, c.validation.patterns.email)
                    }
                }
            },
            getUrl: function(e, t) {
                var i = {}, n = document.createElement("iframe");
                n.src = e, i.element = n, s.getElementsByTagName("head")[0].appendChild(n), c.bindEvents.call(i, {
                    load: function() {
                        n.parentNode.removeChild(n), c.isFunction(t) && t()
                    }
                })
            },
            updateStyleSheet: function(e, t) {
                var i = s.getElementsByTagName("head")[0], n = s.createElement("style");
                return n.type = "text/css", t && (n.id = t), "styleSheet"in n ? n.styleSheet.cssText = e : n.appendChild(s.createTextNode(e)), i.appendChild(n), n
            },
            object2CSS: function(e, t) {
                var i = "" + e + "{";
                for (var n in t)
                    i += n + ":" + t[n] + ";";
                return i += "}\n"
            },
            isCSSReady: function(e) {
                var t = s.createElement("span");
                t.id = "addthissmartlayerscssready", t.style.color = "#fff", s.body.appendChild(t), function i() {
                    var n = c.getCSSAttr(t, "color");
                    n && "rgb(186, 218, 85)" === n || "#bada55" === n.toLowerCase() ? (t.parentNode.removeChild(t), e()) : setTimeout(i, 250)
                }()
            },
            removeElement: function(e) {
                c.isElement(e) && c.isElement(e.parentNode) && (e.parentNode.__containsLayer__===!0 && (e.parentNode.__containsLayer__=!1), e.parentNode.removeChild(e))
            },
            isImageBroken: function(e) {
                if (!e)
                    return !0;
                var t = e.naturalWidth;
                return !t || c.isNumber(t) && 2 > t?!0 : !1
            },
            getScrollBarWidth: function h() {
                if (!c.isUndefined(h.width))
                    return h.width;
                var t = 0;
                if (c.isUndefined(c.getCSSAttr(o, "-ms-overflow-style")) ||!_ate.bro.msi || _ate.bro.ie9 || _ate.bro.ie8 || _ate.bro.ie7 || _ate.bro.ie6) {
                    if (e.getComputedStyle && (t = c.scrollBarWidth(), 0 === t)) {
                        var i = document.createElement("style");
                        i.innerHTML = "::-webkit-scrollbar { width: 10px; }", s.getElementsByTagName("head")[0].appendChild(i), t = c.scrollBarWidth(), t > 0 && (t = t), s.getElementsByTagName("head")[0].removeChild(i)
                    }
                } else 
                    "none" !== c.getCSSAttr(o, "-ms-overflow-style") && (t = c.scrollBarWidth());
                return h.width = t, t
            },
            scrollBarWidth: function() {
                var e, t, i, n = s.createElement("div"), a = s.createElement("div");
                return c.setCSSAttr(n, {
                    width: "100px",
                    height: "10000px"
                }), c.setCSSAttr(a, {
                    width: "100%",
                    height: "100px",
                    overflow: "auto"
                }), o.appendChild(a), e = a.clientWidth, a.appendChild(n), t = a.clientWidth, o.removeChild(a), i = e - t
            },
            stripHashFromPath: function(e) {
                return e = e.split("#")[0], "/" === e.slice( - 1) && (e = e.substring(0, e.length - 1)), e
            },
            indexOf: function(e) {
                var t = function(e) {
                    var t =- 1, i =- 1;
                    for (t = 0; t < this.length; t++)
                        if (this[t] === e || decodeURIComponent(this[t]) === decodeURIComponent(e)) {
                            i = t;
                            break
                        }
                    return i
                };
                return t.call(this, e)
            },
            shareCounters: {
                getShareCounts: function(t, i) {
                    if (!c.isUndefined(t)) {
                        var n = t.services || t.service || t, s = t.url || t.countUrl, o = s || (e.addthis_share || {}).trackurl || _ate.track.mgu({}.url || (e.addthis_share || {}).url, {
                            clean: 1,
                            defrag: 1
                        }), a = [];
                        return c.isArray(n) ? c.each(n, function(e, t) {
                            c.shareCounters.requests.getCounts({
                                service: t,
                                countUrl: o
                            }, function(e) {
                                a.push(e), a.length === n.length && i.call(this, a)
                            })
                        }) : c.isString(n) && c.shareCounters.requests.getCounts({
                            service: n,
                            countUrl: o
                        }, function(e) {
                            i.call(this, e)
                        }), this
                    }
                },
                requests: {
                    services: {
                        facebook: {
                            cb: function(e) {
                                var t = e.params, i = e.data;
                                i.data.length && e.callbackFunc({
                                    elem: t.elem,
                                    service: t.service,
                                    countUrl: t.countUrl,
                                    count: c.isNumeric(i.data[0].total_count) ? i.data[0].total_count: 0,
                                    share: i.data[0]
                                })
                            },
                            ajs: function(e) {
                                var t = e.params, i = e.cbname;
                                _ate.ajs(this.baseUrl + _euc(t.countUrl) + '"&' + this.jsonpParam + "=" + i, 1)
                            },
                            baseUrl: '//graph.facebook.com/fql?q=SELECT url, normalized_url, share_count, like_count, comment_count, total_count,commentsbox_count, comments_fbid, click_count FROM link_stat WHERE url="'
                        },
                        twitter: {
                            baseUrl: "https://cdn.api.twitter.com/1/urls/count.json?url="
                        },
                        pinterest_share: {
                            baseUrl: "//widgets.pinterest.com/v1/urls/count.json?url="
                        },
                        pinterest: {
                            baseUrl: "//widgets.pinterest.com/v1/urls/count.json?url="
                        },
                        reddit: {
                            cb: function(e) {
                                var t, i = e.params, n = e.data, s = 0, o = 0, a = 0;
                                n.data && n.data.children && (t = n.data.children, c.each(t, function(e, t) {
                                    !t.data || c.isUndefined(t.data.downs) || c.isUndefined(t.data.ups) || (s += t.data.ups, o += t.data.downs, a += t.data.score)
                                }), e.callbackFunc({
                                    elem: i.elem,
                                    service: i.service,
                                    countUrl: i.countUrl,
                                    ups: + s,
                                    downs: + o,
                                    count: c.isNumeric( + a)?+a: 0
                                }))
                            },
                            baseUrl: "//www.reddit.com/api/info.json?url=",
                            jsonpParam: "jsonp"
                        },
                        delicious: {
                            cb: function(e) {
                                var t = e.params, i = e.data;
                                e.callbackFunc({
                                    elem: t.elem,
                                    service: t.service,
                                    countUrl: t.countUrl,
                                    count: i.length && c.isNumeric( + i[0].total_posts)?+i[0].total_posts: 0
                                })
                            },
                            baseUrl: "//feeds.delicious.com/v2/json/urlinfo/data?url="
                        },
                        vk: {
                            ajs: function(e) {
                                var t = e.params;
                                window.VK || (window.VK = {
                                    Share: {
                                        count: function() {
                                            clearTimeout(e.timeout);
                                            var t = this.counts[arguments[0]];
                                            e.callbackFunc({
                                                elem: t.elem,
                                                service: t.service,
                                                countUrl: t.countUrl,
                                                count: + arguments[1]
                                            })
                                        }
                                    }
                                }), VK.Share.counts = VK.Share.counts || [], VK.Share.counts.push(t), _ate.ajs(this.baseUrl + (VK.Share.counts.length - 1) + "&url=" + _euc(t.countUrl), 1)
                            },
                            baseUrl: "//vk.com/share.php?act=count&index="
                        },
                        linkedin: {
                            baseUrl: "//www.linkedin.com/countserv/count/share?url="
                        },
                        odnoklassniki_ru: {
                            ajs: function(e) {
                                var t = e.params, i = e.cbname;
                                _ate.ajs(this.baseUrl + _euc(t.countUrl) + "&" + this.jsonpParam + "=" + i, 1)
                            },
                            baseUrl: "//www.odnoklassniki.ru/dk?st.cmd=shareData&ref=",
                            jsonpParam: "cb"
                        },
                        addthis: {
                            baseUrl: "//api-public.addthis.com/url/shares.json?url="
                        },
                        compact: {
                            baseUrl: "//api-public.addthis.com/url/shares.json?url="
                        },
                        defaults: {
                            cb: function(e) {
                                var t = e.params, i = e.data, n =+ i.count||+i.shares;
                                c.isUndefined(n) || e.callbackFunc({
                                    elem: t.elem,
                                    service: t.service,
                                    countUrl: t.countUrl,
                                    count: c.isNumeric(n) ? n: 0
                                })
                            },
                            ajs: function(e) {
                                var t = e.params, i = e.cbname;
                                _ate.ajs(this.baseUrl + _euc(t.countUrl) + "&" + this.jsonpParam + "=" + i, 1)
                            },
                            jsonpParam: "callback"
                        }
                    },
                    timeout: 5e3,
                    getCounts: function(e, t) {
                        var i, n, s, o, a = c.shareCounters.requests, r = e.countUrl;
                        return a && a.services && a.services.defaults ? (o = a.services.defaults, s = a.services[e.service], s && s.baseUrl ? (s.jsonpParam = s.jsonpParam || o.jsonpParam || "callback", r = r.length > 25 ? r.substring(0, 25) : r, i = setTimeout(function() {
                            t({
                                elem: e.elem,
                                service: e.service,
                                countUrl: e.countUrl,
                                error: "Service request timed out",
                                count: "?"
                            })
                        }, a.timeout), n = _ate.util.scb("rcb", r, function(n) {
                            clearTimeout(i), c.isFunction(s.cb) ? s.cb({
                                params: e,
                                data: n,
                                callbackFunc: t
                            }) : c.isFunction(o.cb) && o.cb({
                                params: e,
                                data: n,
                                callbackFunc: t
                            })
                        }), ("pinterest_share" === e.service || "pinterest" === e.service) && (n = "window." + n), c.isFunction(s.ajs) ? s.ajs.call(s, {
                            params: e,
                            callbackFunc: t,
                            cbname: n,
                            timeout: i
                        }) : c.isFunction(o.ajs) && o.ajs.call(s, {
                            params: e,
                            callbackFunc: t,
                            cbname: n
                        }), this) : void t({
                            elem : e.elem, service : e.service, countUrl : e.countUrl, error : "Service not supported", count : "?"
                        })) : void t({
                            elem: e.elem,
                            service: e.service,
                            countUrl: e.countUrl,
                            error: "Could not find necessary JavaScript object",
                            count: "?"
                        })
                    }
                }
            },
            truncateCount: function(e) {
                var t = ("" + e).split(".").shift().length;
                return c.isNumeric(e) ? 4 > t ? Math.round(e) : 7 > t ? c.roundWithSuffix(e, 1e3, "K") : 10 > t ? c.roundWithSuffix(e, 1e6, "M") : c.roundWithSuffix(e, 1e9, "B") : e
            },
            roundWithSuffix: function(e, t, i) {
                return e/=t, e = Math.round(10 * e) / 10, (e + "").length > 4 && (e = Math.round(e)), e + i
            },
            generateUUID: function() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                    var t = 16 * Math.random() | 0, i = "x" == e ? t: 3 & t | 8;
                    return i.toString(16)
                })
            },
            startsWith: function(e, t) {
                return e.substring(0, t.length) === t
            },
            endsWith: function(e, t) {
                return t.length > e.length?!1 : e.substring(e.length - t.length) === t
            },
            stripProtocol: function(e) {
                return c.isString(e) ? e.replace(/^https?:\/\//g, "") : e
            },
            stringMatchesWithWildcards: function(e, t) {
                var i;
                if (!c.isString(e) ||!c.isString(t) || "" === e || "" === t)
                    return !1;
                i = t.replace(/\*{2,}/g, "*").split("*");
                var n = 0;
                return (c.startsWith(t, "*") || c.startsWith(e, i[0])) && (c.endsWith(t, "*") || c.endsWith(e, i[i.length - 1])) ? (c.each(i, function(t, i) {
                    var s = e.indexOf(i, n);
                    return 0 > s?!1 : void(n = i.length + s)
                }), !0) : !1
            },
            decisionEngine: {
                run: function(e) {
                    var t, i, n = this;
                    c.each(e, function(e, s) {
                        c.isPlainObject(s) && (t = s.match, c.isUndefined(t) || c.isEmptyObject(t) ? n.matchObject = s : t && (i = c.decisionEngine.testAll.call(n, t), i && (n.matchObject = s)))
                    })
                },
                testAll: function(e) {
                    var t = {}, i=!0;
                    return c.each(e, function(e, n) {
                        return t[e] = n, i = c.decisionEngine.testOne(t)
                    }), i
                },
                testOne: function(e) {
                    var t=!0;
                    return c.each(e, function(e, i) {
                        return c.decisionEngine.match.hasOwnProperty(e) ? t = function() {
                            return c.isBoolean(i) ? i === c.decisionEngine.match[e](i) : c.decisionEngine.match[e](i)
                        }() : void 0
                    }), t
                },
                match: {
                    referrer: function(e) {
                        c.isString(e) && (e = [e]);
                        for (var t in e) {
                            var i = e[t];
                            if ("function" != typeof i && new RegExp(i).test(s.referrer))
                                return !0
                        }
                        return !1
                    },
                    referringService: function(e) {
                        c.isString(e) && (e = [e]);
                        var i = t.session.source();
                        if ("social" !== i.type || c.isUndefined(i.service))
                            return !1;
                        for (var n in e) {
                            var s = e[n];
                            if (s === i.service)
                                return !0
                        }
                        return !1
                    },
                    usesService: function(e) {
                        c.isString(e) && (e = [e]);
                        var i = t.user.services();
                        for (var n in i)
                            for (var s in e)
                                if (!c.isUndefined(i[n].name) && i[n].name === e[s])
                                    return !0;
                        return !1
                    },
                    service: function(e) {
                        return c.decisionEngine.match.usesService(e) || c.decisionEngine.match.referringService(e)?!0 : !1
                    },
                    preferredService: function(e) {
                        var i = t.user.services();
                        if (c.isString(e) && (e = [e]), !i.length)
                            return !1;
                        var n = i[0].name;
                        for (var s in e) {
                            var o = e[s];
                            if (o === n)
                                return !0
                        }
                        return !1
                    },
                    location: function(e) {
                        c.isString(e) && (e = [e]);
                        for (var t in e)
                            if (new RegExp(e[t]).test(s.location.href))
                                return !0;
                        return !1
                    },
                    url: function(e) {
                        return c.decisionEngine.match.location(e)
                    },
                    mobile: function() {
                        return c.mobile.apply(c, arguments)
                    },
                    tablet: function() {
                        return c.tablet.apply(c, arguments)
                    },
                    phone: function() {
                        return c.tablet.apply(c, phone)
                    },
                    socialBrowser: function() {
                        var e = /FBFor|Twitter/i.test(navigator.userAgent);
                        return e
                    },
                    desktop: function() {
                        return c.desktop.apply(c, arguments)
                    },
                    browser: function() {
                        return c.browser.apply(c, arguments)
                    },
                    sameDomain: function() {},
                    locatedIn: function(e) {
                        return t.user && t.user.isLocatedIn ? t.user.isLocatedIn(e) : !1
                    },
                    time: function(e) {
                        function t(e) {
                            if (!c.isString(e))
                                return e;
                            var t = null;
                            try {
                                t = new Date(c.has(e, "/") || c.has(e, ",") ||!c.has(":") ? e : o.getMonth() + 1 + "/" + o.getDate() + "/" + o.getFullYear() + " " + e)
                            } catch (i) {}
                            return t
                        }
                        if (!e)
                            return !1;
                        var i, n, s=!0, o = new Date;
                        return i = e.start || null, n = e.end || null, i || n ? (i && c.isString(i) && (i = t(i)), n && c.isString(n) && (n = t(n)), i && i > o?!1 : n && o > n?!1 : s) : !1
                    },
                    returning: function() {
                        return t.user.isReturning()
                    },
                    query: function(e) {
                        var t = s.location.search;
                        if (!c.isString(t) ||!c.has(t, "="))
                            return !1;
                        var i, n = t.substring(1).split("&"), o = {};
                        for (i in n) {
                            var a = n[i].split("="), r = a[1], l = a[0];
                            c.has(r, "+") && c.has("utm_term", l) && (r = r.split("+").sort().join("+")), o[a[0]] = r
                        }
                        for (i in e) {
                            if (!(i in o))
                                return !1;
                            switch (i) {
                            case"utm_term":
                                if (c.has(o[i], e[i]))
                                    return !1;
                                break;
                            default:
                                if (e[i] !== o[i])
                                    return !1
                            }
                        }
                        return !0
                    },
                    utm_source: function(e) {
                        return c.decisionEngine.match.query({
                            utm_source: e
                        })
                    },
                    utm_medium: function(e) {
                        return c.decisionEngine.match.query({
                            utm_medium: e
                        })
                    },
                    utm_term: function(e) {
                        c.isString(e) && (e = e.split("+"));
                        for (var t in e)
                            if (!c.decisionEngine.match.query({
                                utm_term: e[t]
                            }))
                                return !1;
                        return !0
                    },
                    utm_content: function(e) {
                        return c.decisionEngine.match.query({
                            utm_content: e
                        })
                    },
                    utm_campaign: function(e) {
                        return c.decisionEngine.match.query({
                            utm_campaign: e
                        })
                    },
                    iframe: function(t) {
                        return c.isUndefined(t) && (t=!0), e.top !== e === t
                    },
                    custom: function(e) {
                        return c.isFunction(e) ? e() : !!e
                    },
                    hasTag: function(e) {
                        return c.isArray(e) ? (c.each(e, function(e, i) {
                            return t.user.hasTag(i)?!0 : void 0
                        }), !1) : t.user.hasTag(e)
                    },
                    hasTags: function(e) {
                        c.isString(e) && (e = [e]);
                        for (var t in e)
                            if (!c.decisionEngine.match.hasTag(e[t]))
                                return !1;
                        return !0
                    }
                }
            }
        };
        return c
    }(a.qwery, a.rAF, a.emdot), a.common = function(a, r, l) {
        var c = {
            create: function() {
                var e = this, t = e.options, i = l.isString(t.position) ? t.position.toLowerCase(): e.position || "right", n = "show" === t.showAnimation ? "show": "top" === i ? "slideInDown": "bottom" === i ? "slideInUp": "left" === i ? "slideInLeft": "slideInRight", s = "hide" === t.hideAnimation ? "hide": "top" === i ? "slideOutUp": "bottom" === i ? "slideOutDown": "left" === i ? "slideOutLeft": "slideOutRight";
                e.options = l.extend(t, {
                    showAnimation: n,
                    hideAnimation: s
                }), e.position = i
            },
            bindEvents: function() {
                return "disabled" === this.status ? this : (l.isString(this.element) && (this.element = a(this.element)[0], this.element.setAttribute("at-event", "true")), this.element && this.element.getAttribute&&!this.element.getAttribute("at-event") && l.bindEvents.call(this, this.events), this)
            },
            layerList: {},
            layers: function() {
                if (l.mobile()) {
                    if (_ate.bro.dro) {
                        var e = navigator.userAgent, t = parseFloat(e.slice(e.indexOf("Android") + 8));
                        if (3 > t) {
                            var i = new _ate.resource.Resource("layersdroidcss", _atc.rsrcs.layersdroidcss);
                            i.load()
                        }
                    }
                    return this.mobileLayers
                }
                if (_ate.bro.ie6 || l.isIEQuirksMode()) {
                    var n = new _ate.resource.Resource("layersiecss", _atc.rsrcs.layersiecss);
                    return n.load(), this.degradedLayers
                }
                return this.desktopLayers
            },
            getAllLayers: function() {
                return l.extend({}, this.mobileLayers, this.desktopLayers)
            },
            feeds: {},
            active_layers: {},
            feedsLoading: {},
            language: !1,
            personalize: !0,
            pcoMap: {
                smlsh: "share",
                smlshp: "share",
                smlfw: "follow",
                smlwn: "whatsnext",
                wnm: "whatsnextmobile",
                smlre: "recommended",
                jrcf: "recommendedjumbo",
                smlres: "recommendedside",
                cod: "drawer",
                smlrebv: "recommendedbox",
                smlrebh: "recommendedbox",
                resh: "responsiveshare",
                tst: "toaster",
                smlmo: "dock",
                msd: "sharedock",
                jsc: "jumboshare",
                tbx: "sharetoolbox",
                scopl: "sharetoolbox",
                flwc: "followcounter",
                flwh: "followtoolbox",
                flwv: "followtoolbox",
                ctbx: "sharetoolbox",
                cflwv: "followtoolbox",
                cflwh: "followtoolbox",
                wmb: "welcome",
                cvlbx: "conversionlightbox"
            },
            enabledLayers: {},
            degradedLayers: {
                share: "share",
                follow: "follow",
                welcome: "welcome",
                resh: "responsiveshare",
                sharetoolbox: "sharetoolbox",
                followcounter: "followcounter",
                followtoolbox: "followtoolbox"
            },
            desktopLayers: {
                share: "share,thankyou",
                jumboshare: "jumboshare",
                follow: "follow,thankyou",
                recommended: "recommended",
                recommendedjumbo: "recommendedjumbo",
                recommendedbox: "recommendedbox",
                recommendedside: "recommendedside",
                drawer: "drawer",
                welcome: "welcome",
                conversionlightbox: "conversionlightbox",
                whatsnext: "whatsnext",
                warning: "warning",
                responsiveshare: "responsiveshare",
                dock: "dock",
                sharedock: "sharedock",
                sharetoolbox: "sharetoolbox",
                followcounter: "followcounter",
                followtoolbox: "followtoolbox",
                toaster: "toaster"
            },
            mobileLayers: {
                share: "mobile,thankyou",
                jumboshare: "jumboshare",
                follow: "mobile,thankyou",
                recommended: "recommended",
                recommendedbox: "recommendedbox",
                recommendedjumbo: "recommendedjumbo",
                whatsnextmobile: "whatsnextmobile",
                welcome: "welcome",
                conversionlightbox: "conversionlightbox",
                warning: "warning",
                responsiveshare: "responsiveshare",
                dock: "dock",
                sharedock: "sharedock",
                sharetoolbox: "sharetoolbox",
                followcounter: "followcounter",
                followtoolbox: "followtoolbox"
            },
            layersList: {},
            utils: l,
            preferredServices: [],
            translationIds: {
                share: {
                    postShareTitle: 97,
                    postShareFollowMsg: 96,
                    postShareRecommendedMsg: 99
                },
                follow: {
                    postFollowTitle: 98,
                    postFollowRecommendedMsg: 99
                },
                whatsnext: {
                    recommendedTitle: 99
                },
                recommended: {
                    title: 99
                }
            },
            defaultShareServicesNum: 5,
            defaultOptions: {
                share: {
                    position: "left",
                    postShareTitle: "Thanks for sharing!",
                    postShareFollowMsg: "Follow",
                    postShareRecommendedMsg: "Recommended for you",
                    desktop: !0,
                    mobile: !0,
                    services_exclude: "",
                    counts: !1
                },
                jumboshare: {
                    counts: !0,
                    showAnimation: "show",
                    label: "SHARES",
                    color: "#555B64",
                    maxWidth: 979,
                    minWidth: 0
                },
                responsiveshare: {
                    showAnimation: "show"
                },
                sharetoolbox: {
                    showAnimation: "show"
                },
                followcounter: {
                    showAnimation: "show",
                    title: "HI THARRRR",
                    services: !1,
                    postFollowTitle: "Thanks for following!",
                    postFollowRecommendedMsg: "Recommended for you",
                    desktop: !0,
                    mobile: !0,
                    visible: "smart"
                },
                followtoolbox: {
                    showAnimation: "show",
                    title: ""
                },
                follow: {
                    services: !1,
                    title: "",
                    postFollowTitle: "Thanks for following!",
                    postFollowRecommendedMsg: "Recommended for you",
                    desktop: !0,
                    mobile: !0,
                    visible: "smart"
                },
                whatsnext: {
                    recommendedTitle: "Recommended for you"
                },
                whatsnextmobile: {
                    recommendedTitle: "Recommended for you",
                    theme: "light"
                },
                toaster: {
                    defaultimage: !0,
                    theme: "light",
                    title: "Recommended for you"
                },
                recommended: {
                    title: "Recommended for you",
                    desktop: !0,
                    mobile: !0,
                    orientation: "horizontal",
                    size: "large",
                    maxitems: 4,
                    defaultimage: !0,
                    textonly: !1,
                    showAnimation: "show",
                    hideAnimation: "hide"
                },
                recommendedjumbo: {
                    title: "Recommended for you",
                    showAnimation: "show",
                    hideAnimation: "hide"
                },
                recommendedbox: {
                    size: "medium",
                    maxitems: "auto",
                    theme: "minimal",
                    promotedUrls: []
                },
                recommendedside: {
                    theme: "light",
                    position: "right",
                    showAnimation: "slideInLeft",
                    hideAnimation: "slideOutRight"
                },
                drawer: {
                    theme: "dark",
                    position: "right",
                    orientation: "vertical",
                    maxitems: 8,
                    animationType: "overlay",
                    showAnimation: "slideInLeft",
                    hideAnimation: "slideOutRight"
                },
                welcome: {
                    show: !0,
                    coverPage: !1,
                    fixed: !1,
                    rememberHide: !0,
                    watermark: !0,
                    delay: 0,
                    showOnScrollTo: !1,
                    position: "top",
                    backgroundColor: "#000000",
                    buttonColor: "transparent",
                    linkTextColor: "#FFFFFF",
                    buttonTextColor: "#FFFFFF",
                    buttonBorderColor: "#000000",
                    noGradient: !1,
                    alwaysShow: !1,
                    message: "If you enjoy this page, do us a favor:",
                    action: {
                        text: "Share this page",
                        verb: "share",
                        type: "button"
                    }
                },
                conversionlightbox: {
                    showAnimation: "fadeIn",
                    hideAnimation: "fadeOut",
                    responsive: {
                        maxWidth: "600px"
                    }
                },
                thankyou: {
                    showAnimation: "fadeIn",
                    hideAnimation: "fadeOut"
                },
                mobile: {
                    buttonBarPosition: "bottom",
                    showAnimation: "fadeIn",
                    menuShowAnimation: "slideInUp",
                    menuHideAnimation: "slideOutDown",
                    buttonBarTheme: "light"
                },
                dock: {},
                warning: {
                    test: !1
                },
                theme: "transparent",
                domain: "",
                linkFilter: function(e) {
                    return e
                },
                pubid: "",
                altRecommendedPubId: "",
                responsive: {
                    maxWidth: 979,
                    minWidth: 0
                }
            },
            themes: {
                minimal: ".at4-minimal",
                dark: ".ats-dark",
                light: ".ats-light",
                gray: ".ats-gray",
                transparent: ".ats-transparent"
            },
            serviceBlacklist: {
                settings: !0,
                more: !0
            },
            originalPageWidth: function() {
                return l.pageWidth()
            }(),
            hiddenClass: "at4-visually-hidden",
            alternativeHiddenClass: "at4-hidden-off-screen",
            hideClass: "at4-hide",
            visibleClass: "at4-visible",
            showClass: "at4-show",
            opacityHiddenClass: "at4-opacity-hidden",
            opacityVisibleClass: "at4-opacity-visible",
            globalEvents: {
                "window scroll": l.debounce(function() {
                    l.trigger("addthis.layers.scroll", t, this)
                }, 250),
                "document keydown": function(e) {
                    var i = l.isNumber(e.keyCode) ? l.KEYCODES[e.keyCode]: !1;
                    i && l.trigger("addthis.keydown." + i, t, this)
                },
                "addthis.layers.loaded": function() {
                    c.welcomeBarAndMobile()
                },
                "addthis.layers.resize": function() {
                    c.showResponsiveLayers()
                }
            },
            desktopEvents: {
                "addthis.layers.rendered": l.once(function() {
                    l.bindEvents.call(c, {
                        "window resize": l.debounce(function() {
                            l.trigger("addthis.layers.resize", t, this)
                        }, 150)
                    })
                })
            },
            commonEventHandlers: {
                share: {
                    buttonClick: function(e, t) {
                        var i = t.className.split(" "), n = i.length, s = this.pco, o = "", a =- 1, r = t.parentNode;
                        for (r && (l.hasClass("at4-share-btn", r) || l.hasClass("at-share-btn", r)) && (t = r), i = t.className.split(" "), n = i.length; ++a < n;)
                            0 === i[a].indexOf("at-svc-") && (o = i[a].substring(7));
                        this.superMethod("share", o, s), l.preventDefaultEvent(e)
                    },
                    showCompactMenu: function(t, n) {
                        function s() {
                            var e = n.getBoundingClientRect(), t = window.scrollY || document.documentElement.scrollTop, i = window.scrollX || document.documentElement.scrollLeft, s = window.innerHeight || document.documentElement.clientHeight;
                            if (o.style || o.setAttribute("style", ""), e.top > .66 * s) {
                                var a = o.getBoundingClientRect(), r = a.bottom - a.top;
                                o.style.left = i + e.left + "px", o.style.top = t + e.top - r + "px"
                            } else 
                                o.style.left = i + e.left + "px", o.style.top = t + e.bottom + "px"
                        }
                        if (!this.menuOpen) {
                            var o, a = this, r = e.addthis_config ? i.clone(e.addthis_config): {}, l = e.addthis_share ? i.clone(e.addthis_share): {}, c = this.getShareUrl(), d = this.getShareTitle(), h = this.getShareDescription();
                            if (r.product = a.pco || "", r.pubid = _ate.pub(), l.url = c, l.title = d, l.description = h, a.shownServices && a.shownServices.length && (r.services_exclude && (r.services_exclude += ","), r.services_exclude += a.shownServices.join()), this.menuOpen=!0, addthis_open(n, "", c, d, r, l), o = document.getElementById("at15s"))
                                s();
                            else 
                                var u = e.setInterval(function() {
                                    o = document.getElementById("at15s"), o && (s(), e.clearInterval(u))
                                })
                        }
                    },
                    hideCompactMenu: function(e, t) {
                        return this.menuOpen=!1, addthis_close(t)
                    }
                },
                mobile: {
                    showExpandedShareMenu: function(t) {
                        l.preventDefaultEvent(t);
                        var i = this, n = this.history.getState && this.history.getState(), o = c.active_layers.addthis.sharedock;
                        this.currentLayerType = "share", this.menuHeader.innerHTML = _ate._t("Share", 91), this.superMethod("showControl", this.searchBox.parentNode), null === n || n && n.menu===!1 ? (this.history.replaceState && this.history.replaceState({
                            menu: !1,
                            opening: !0
                        }, s.title, e.location.href), this.history.pushState && this.history.pushState({
                            menu: "share"
                        }, s.title, e.location.href)) : this.history.replaceState && this.history.replaceState({
                            menu: "share"
                        }, s.title, e.location.href), this.generateShareServices(), l.removeClass(c.hideClass, this.container), this.show(this.menu, this.options.menuShowAnimation, function() {
                            i.hideDesktopScrollbar()
                        }), l.requestTimeout(function() {
                            o && l.addClass("at-share-dock-zindex-hide", o.element)
                        }, 400)
                    },
                    hideExpandedShareMenu: function() {
                        var t = this, i = this.shareButton, n = this.followButton, o = c.active_layers.addthis.sharedock;
                        o && l.removeClass("at-share-dock-zindex-hide", o.element), l.addClass(c.hideClass, t.searchClear), this.history.getState && this.history.getState() && this.history.getState().menu ? e.history.go( - 1) : (this.showDesktopScrollbar(), this.hide(this.menu, this.options.menuHideAnimation), this.mobile && (this.history.replaceState && this.history.replaceState({
                            menu: !1,
                            opening: !1
                        }, s.title, e.location.href), this.history.pushState && (this.history.pushState({
                            menu: !1,
                            empty: !0
                        }, s.title, e.location.href), e.history.go( - 1)))), i && i.length && l.specialEvents.blur(i), n && n.length && l.specialEvents.blur(n)
                    }
                }
            },
            applyResponsiveClass: function() {
                "desktop" === l.getCurrentDevice(this) && l.hasClass(this.mobileClass, this.element) ? l.removeClass(this.mobileClass, this.element) : "mobile" !== l.getCurrentDevice(this) || l.hasClass(this.mobileClass, this.element) || l.addClass(this.mobileClass, this.element)
            },
            showResponsiveLayers: function() {
                var e, i, n, o, a, r = c.active_layers, d = "desktop";
                l.each(r, function(r, h) {
                    l.each(h, function(r, h) {
                        return r = h.basename, "mobile" === r?!1 : (d = l.mobile() ? "mobile" : l.getCurrentDevice(h), "desktop" === d && "mobile" === h.basename && l.isVisible(h.menu) && l.trigger("addthis.layers.mobilemenu.hide", t, h), e = h.device, i = h.element, n = h.container, o = h.openControl, a = o && l.isElement(o), void("both" !== e && (e === d ? l.isVisible(i) || l.isVisible(o) || (l.trigger("addthis.layers.responsive." + r + ".show"), n !== s.body && n !== i && (l.removeClass(c.hideClass, n), l.removeClass(c.hiddenClass, n)), "closed" !== h.status ? h.show() : (h.requiresData!==!0 || h.requiresData===!0 && h.trendingLinksJson && h.trendingLinksJson.length) && h.show(o)) : (l.isVisible(i) || l.isVisible(o)) && (l.trigger("addthis.layers.responsive." + r + ".hide"), n !== s.body && l.addClass(c.hideClass, n), l.addClass(c.hideClass, i), l.addClass(c.hideClass, o)))))
                    })
                }), l.trigger("addthis.layers.resized")
            },
            onloadShowLogic: function(e) {
                var i = e.namespace, n = e.basename, o = e.element, a = l.mobile(), d = (e.device, e.container), h = e.options, u = h.showAnimation || "show", m = 1e3 * (h.delay || 0), p = (h.hideAfter ||!1, e.placeholder), f = e.device, g = (e.openControl, l.mobile() ? "mobile" : l.getCurrentDevice(e));
                e.isWhatsNextMobile===!0 || ((e.rendered===!0 || e.showOnLoad===!1 || "both" !== f && f !== g || "mobile" === n&&!a) && h.showImmediately!==!0 ? (l.addClass("animated", o), l.addClass(u, o), l.addClass(c.showClass, o), l.addClass(c.hideClass, o), l.removeClass(c.hiddenClass, o)) : l.isElement(o) && ("closed" !== e.status || h.showImmediately===!0 ? l.requestTimeout(function() {
                    l.isElement(p) && (s.body.insertBefore(p, s.body.firstChild), s.body.insertBefore(e.container, s.body.firstChild), l.setCSSAttr(p, {
                        height: o.offsetHeight + o.offsetTop + "px"
                    })), l.addClass(c.hideClass, o), l.removeClass(c.hiddenClass, o), l.removeClass(c.hiddenClass, d), e.show(o, u, function() {
                        l.trigger(i + "." + n + ".shown", t, {})
                    })
                }, m) : r(function() {
                    l.removeClass(c.hiddenClass, o), l.removeClass(c.hiddenClass, d), (e.requiresData!==!0 || e.requiresData===!0 && e.trendingLinksJson && e.trendingLinksJson.length) && e.show(e.openControl)
                }), e.rendered=!0, l.trigger("addthis.layers." + e.name + ".rendered", t, this)))
            },
            welcomeBarAndMobile: function() {
                if (c.welcomeBarAndMobile.alreadyCompleted!==!0) {
                    var e, t, i = c.active_layers, n = i && i.addthis && i.addthis.mobile, s = i && i.addthis && i.addthis.welcome;
                    n && s && (e = i.addthis.mobile, t = i.addthis.welcome, e.position === t.position && (t.device = "desktop")), c.welcomeBarAndMobile.alreadyCompleted=!0
                }
            },
            followServices: {
                facebook: "Facebook",
                flickr: "Flickr",
                foursquare: "Foursquare",
                google_follow: "Google+",
                instagram: "Instagram",
                linkedin: "LinkedIn",
                pinterest: "Pinterest",
                rss: "RSS",
                etsy: "Etsy",
                behance: "Behance",
                disqus: "Disqus",
                tumblr: "Tumblr",
                twitter: "Twitter",
                vimeo: "Vimeo",
                youtube: "YouTube"
            },
            superMethod: function(e) {
                var t = Array.prototype.slice.call(arguments, 0);
                return t.shift(), c[e].apply(this, t)
            },
            animate: function d(e, t, n) {
                if (e) {
                    if ("show" === t ? t = c.showClass : "hide" === t && (t = c.hideClass), (t === c.showClass || t === c.hideClass) && (e.__isAnimating=!1), e.__isAnimating)
                        return void(l.isFunction(n) && n.call(this));
                    e.__isAnimating=!0;
                    var s = ["animationend", "webkitAnimationEnd", "oAnimationEnd", "oanimationend", "msAnimationEnd"], o = ["fadeIn", "fadeInRight", "fadeInLeft", "fadeInUp", "fadeInDown", "slideInLeft", "slideInRight", "slideInUp", "slideInDown", c.showClass], a = ["fadeOut", "fadeOutRight", "fadeOutLeft", "fadeOutUp", "fadeOutDown", "slideOutLeft", "slideOutRight", "slideOutUp", "slideOutDown", c.hideClass], h = l.toObject(a), u = l.toObject(o), m = {}, p = l.isElement(e), f = n, g = function() {
                        r(function() {
                            u[t] ? (l.removeClass(c.hideClass, e), l.addClass(c.showClass, e)) : h[t] && (l.removeClass(c.showClass, e), l.addClass(c.hideClass, e)), l.removeClass(c.visibleClass, e)
                        }), l.isFunction(f) && f.call(this), l.bindEvents.call(m, m, "remove"), e.__isAnimating=!1
                    }, v = l.supports.csstransitions(), b = o.concat(a);
                    g = i.bind(g, this), v ? (l.each(b, function(t) {
                        l.removeClass(b[t], e)
                    }), l.each(s, function(t, i) {
                        p ? m[i] = g : m[e + " " + i] = g
                    }), p && (m.element = e), d.evts = m, "none" === l.getCSSAttr(e, "display") && l.addClass(c.visibleClass, e), l.bindEvents.call(m, m), l.addClass("animated", e), l.addClass(t, e)) : g()
                }
            },
            processTrendingData: function(e, t, i) {
                i && (c.feeds[e + t] = i, c.feedsLoading[e + t]=!1), this.dequeueTrending(e, t)
            },
            preRender: function() {
                var e = this, t = e.parentElement, n = e.device, s = e.prerender ? e.prerender(): i.json2html({
                    ".addthis-smartlayers-outer-container": ""
                });
                l.isElement(s) && (c.addDeviceClassName(s, n), t.appendChild(s), e.parentElement = e.container = s)
            },
            render: function() {
                var e, t, n = this, a = n.options, r = n.parentElement, d = null, h = n.device, u = l.isElement(r) && r.__containsLayer__===!0;
                if ("disabled" === n.status && n.finalize(), n.offset(), (!a.audienceRules || a.ruleSuccess) && (l.isFunction(n.generateJson)&&!u ? (e = n.generateJson(n), d = i.json2html(e)) : l.isFunction(n.generateElement)&&!u && (d = n.generateElement())), d) {
                    if (l.isElement(r)) {
                        if (t = n.container = n.container || d, l.addClass("addthis-smartlayers", t), l.isIEQuirksMode() && l.addClass("addthis-smartlayers-quirks-mode", t), _ate.bro.ie6 ? l.addClass("addthis-smartlayers-ie6", t) : _ate.bro.ie7 ? l.addClass("addthis-smartlayers-ie7", t) : _ate.bro.ie8 ? l.addClass("addthis-smartlayers-ie8", t) : _ate.bro.ie9 && l.addClass("addthis-smartlayers-ie9", t), n.showOnLoad!==!1 ? l.addClass(c.hiddenClass, t) : l.addClass(c.hideClass, t), c.addDeviceClassName(t, h), l.supports.csstransitions() ? (a.showAnimation = a.showAnimation || "fadeIn", a.hideAnimation = a.hideAnimation || "fadeOut") : (a.showAnimation = "show", a.hideAnimation = "hide"), n.inline && r === s.body)
                            return;
                        r.appendChild(d), r !== o && (r.__containsLayer__=!0), c.render_logic.call(n, d)
                    }
                } else 
                    c.render_logic.call(n)
            },
            render_logic: function() {
                var e = this;
                e.finalize().bindEvents().postEvents(), e.async===!0 && l.isFunction(e.imageResizing) ? e.imageResizing(function() {
                    c.onloadShowLogic(e)
                }) : c.onloadShowLogic(e)
            },
            addDeviceClassName: function(e, t) {
                ("mobile" === t || "desktop" === t) && l.addClass("addthis-smartlayers-" + t, e)
            },
            postEvents: function() {
                var e = l.getScrollBarWidth(), t = "right" === this.position, i = this.namespace, n = this.basename, s = "addthis" === i && "whatsnext" === n, o = "addthis" === i && "share" === n, a = "addthis" === i && "recommendedside" === n, r = this.openControl, c = this.element;
                l.isNumber(e) && e > 0 && (l.isElement(r) && (t ? l.setCSSAttr(r, "padding-right", e + "px") : s && l.setCSSAttr(r, "right", e + "px")), _ate.bro.ie10 && l.isElement(c)&&!a && (t || s) && l.setCSSAttr(c, o ? "padding-right" : "right", e + "px"))
            },
            getServiceCSS: function(e) {
                var t = this.options || {}, i = new _ate.resource.Resource("widgetOld32CSS", _atc.rsrcs.widgetOld32CSS), n = new _ate.resource.Resource("widgetWhite32CSS", _atc.rsrcs.widgetWhite32CSS), s = new _ate.resource.Resource("widgetOld20CSS", _atc.rsrcs.widgetOld20CSS), o = new _ate.resource.Resource("widgetModernAllCSS", _atc.rsrcs.widgetModernAllCSS), a=!1, r = _ate.resource.useHighResIcons;
                l.each(e, function(e, n) {
                    a ||!n || _ate.services.isTop(n, 32) || (a=!0, r ? o.load() : t.size && "medium" === t.size ? s.load() : "custom" !== t.theme && i.load())
                }), "custom" === t.theme && n.load()
            },
            offset: function() {
                var e, t, i = this.options.offset, s = this.name + "-offset", o = {};
                if (i) {
                    switch (e = document.getElementById(s), e || (e = document.createElement("style"), e.id = s, e.type = "text/css", e.rel = "stylesheet", e.media = "screen", a("head")[0].appendChild(e)), this.name) {
                    case"share":
                    case"whatsnext":
                    case"toaster":
                        break;
                    default:
                        o = {
                            left: !0,
                            right: !0
                        }
                    }
                    t = this.element, this.openControl && (t += "," + this.openControl), t += " {", i.top&&!o.top && (t += "top:" + i.top + ";" + (i.bottom ? "" : "bottom:auto")), i.left&&!o.left && (t += "left:" + i.left + ";" + (i.right ? "" : "right:auto;")), i.bottom&&!o.bottom && (t += "bottom:" + i.bottom + ";" + (i.top ? "" : "top:auto;")), i.right&&!o.right && (t += "right:" + i.right + ";" + (i.left ? "" : "left:auto")), t += "}", e.styleSheet && e.styleSheet.cssText !== n ? e.styleSheet.cssText = t : e.innerHTML = t, e.parentElement||-1 !== t.indexOf("{}") || a("head")[0].appendChild(e)
                }
            },
            finalize: function() {
                var e = this, t = e.options, i=!(_ate.bro.ie6 || _ate.bro.ie7 || l.isIEQuirksMode() ||!l.isArray(e.services) || t.counts!==!0 && "true" !== t.counts);
                return e.controlContainer && (e.controlContainer = a(e.controlContainer)[0]), e.closeControl && (e.closeControl = a(e.closeControl)[0]), e.openControl && (e.openControl = a(e.openControl)[0]), e.element && (e.element = a(e.elementSelector)[0]), "closed" === e.status && l.addClass(c.hideClass, e.element), e.container = e.async===!0 ? e.parentElement : _ate.util.parent(e.element, ".addthis-smartlayers") === s ? e.element.parentNode : _ate.util.parent(e.element, ".addthis-smartlayers"), i && l.shareCounters.getShareCounts({
                    services: e.services,
                    url: this.getShareUrl()
                }, function(t) {
                    e.rendered && e.displayCounts.call(e, t)
                }), l.trigger("addthis.layer.rendered", {
                    layer: e
                }), e
            },
            queue: function(e, t, i) {
                return l.queue.call(c, e, t, i || this)
            },
            dequeue: function(e) {
                return l.dequeue.call(c, e)
            },
            show: function(e, t, i) {
                var n = this, s = n.element, o = n.options;
                r(function() {
                    t = t || o.showAnimation, e = e || (l.isElement(s) ? s : l.isString(s) ? a(s) : ""), t&&!l.isVisible(e) ? n.animate(e, t, i) : l.isFunction(i) && i()
                })
            },
            hide: function(e, t, i) {
                var n = this, s = n.element, o = n.options;
                r(function() {
                    t = t || o.hideAnimation, e = e || (l.isElement(s) ? s : l.isString(s) ? a(s) : ""), t && l.isVisible(e) ? n.animate(e, t, i) : l.isFunction(i) && i()
                })
            },
            showControl: function() {
                for (var e = 0; e < arguments.length; e++) {
                    var t = arguments[e];
                    l.removeClass(this.hideClass, t), l.addClass(this.showClass, t)
                }
            },
            hideControl: function() {
                for (var e = 0; e < arguments.length; e++) {
                    var t = arguments[e];
                    l.removeClass(this.showClass, t), l.addClass(this.hideClass, t)
                }
            },
            feed: function(t) {
                var i, o = this, a = o.feedName(), r = o.feeds[a] || (o.feeds[a] = []), c = o.options, d = e.addThisLinkFilter || c.linkFilter, h = s.location.href.split("#")[0].replace(/\//g, "").replace(/(http:|https:)/, ""), u=!0;
                return r && r.length > 0 && (!o.filteredData || t&&!r[t.name]) && (i = o.filteredData = o.feeds[a][t ? t.name: "filtered"] = l.filter(r, function(e, i, s) {
                    if (e._removed)
                        return !1;
                    if (e._secureurl = l.has(e.url, "https:"), e.image && (e._secureimage = l.has(e.image, "https:"), e.image = e.image.replace(/(http:|https:)/, "")), h === e.url.split("#")[0].replace(/\//g, "").replace(/(http:|https:)/, "") || d&&!d(e))
                        return e._removed=!0, !1;
                    if (t !== n&&!t.filter(e))
                        return !1;
                    if (u) {
                        var o = l.match({
                            title: e.title,
                            image: e.image
                        }, s, t ? t.name : "filtered");
                        o.length > 1 && l.each(o, function(e, t) {
                            t._removed || e > 0 && (t._removed=!0)
                        })
                    }
                    return !0
                }), this.personalize || l.randomize(i)), r
            },
            feedName: function() {
                return this.name + (this.domain || "")
            },
            feedItem: function(e) {
                var t, i, n = e.feed || this.feed(e.test), s = [];
                if (n = n && n[e.test ? e.test.name: "filtered"], e.repeat = e.repeat || 0, n && n.length > 0) {
                    for (; n.length > 0;) {
                        if (t = n.shift(), s.push(t), !t._displayed || t._displayed < e.repeat) {
                            t._displayed = e.repeat, i = t;
                            break
                        }
                        0 === n.length && (e.repeat++, n.repeat = e.repeat, Array.prototype.push.apply(n, s), s = [])
                    }
                    return Array.prototype.push.apply(n, s), s = [], i
                }
            },
            retrieveTrendingData: function() {
                if ("disabled" === this.status)
                    return this;
                var t, n = e.addthis_config || {}, s = this.options.altRecommendedPubId || this.options.pubid || e.addthis_pub || n.pubid || "", o = this.options.domain, a = this.options.numItems, r = this.processTrendingData, l = c;
                return r = r ? i.bind(r, this) : function() {}, t = {
                    callback: function(e) {
                        r(s, o, e)
                    },
                    pubid: s,
                    domain: o,
                    total: a
                }, this.options.dummyData ? (this.queue(s, o, r), void this.processTrendingData(s, o, this.options.dummyData)) : void(s ? l.checkForContentFeed(s, o) || l.checkForContentFeedLoading(s, o) ? l.checkForContentFeed(s, o)&&!l.checkForContentFeedLoading(s, o) && this.dequeueTrending(s, o) : (l.feedsLoading[s + o]=!0, this.personalize ? _ate.feeds.recommend(t) : _ate.feeds.trend(t), setTimeout(function() {
                    l.feedsLoading[s + o]===!0 && (l.feedsLoading[s + o]=!1, r(s, o, []))
                }, 5e3)) : this.dequeueTrending(s, o))
            },
            checkForContentFeed: function(e, t) {
                return this.feeds[e + t]?!0 : !1
            },
            checkForContentFeedLoading: function(e, t) {
                return this.feedsLoading[e + t]?!0 : !1
            },
            normalizeTrendingItem: function(e, t) {
                var i = t.numItems || t.itemCount || 1, n = t.pos || 0, s = _ate.dctu({
                    url: e.url || "",
                    total: i,
                    pco: this.pco,
                    pos: n
                }), o = e.title || s, a = _ate.util.gUD(s).replace("http://", "").replace("https://", "");
                return e.url = s, e.title = o, e.domain = e.isSponsored ? e.domain : a, e
            },
            noImageClasses: {
                minimal: "at4-no-image-minimal-recommended",
                transparent: "at4-no-image-light-recommended",
                light: "at4-no-image-light-recommended",
                gray: "at4-no-image-gray-recommended",
                dark: "at4-no-image-dark-recommended"
            },
            containsSponsored: function(e) {
                var t=!1;
                return e && e.length && l.each(e, function(e, i) {
                    l.isPlainObject(i) && 1 === i._atType && (t=!0)
                }), t
            },
            getTrendingFeedItems: function(e) {
                var t, i = c, n = this, s = n.options, o = i.feeds[n.options.pubid + n.options.domain], a = [], r = e, d = l.isPlainObject(s.promotedUrls) ? l.toArray(s.promotedUrls): l.isString(s.promotedUrls) && s.promotedUrls.length ? [s.promotedUrls]: s.promotedUrls || [], h = d.length > 0?!0 : !1, u = "", m = [];
                if (n.feeds[n.feedName()] = o, o && r) {
                    o.repeat = o.repeat ? o.repeat : 1;
                    for (var p = 0; r > p; p++)
                        t = this.feedItem({
                            repeat: o.repeat
                        }), t && a.push(t);
                    h && (l.each(d, function(e, t) {
                        l.isString(t) ? d[e] = l.stripHashFromPath(t) : l.isPlainObject(t) && 1 == t._atType && m.push({
                            title: t.name,
                            url: t.url,
                            image: t.thumbnail.length ? t.thumbnail[0].url: "",
                            promoteToLayer: !0,
                            isSponsored: !0,
                            domain: t.branding
                        })
                    }), l.each(o, function(e, t) {
                        if (u = l.stripHashFromPath(t.url), - 1 !== l.indexOf.call(d, u)) {
                            t = l.cloneObject(t);
                            for (var i = 0; i < a.length; i++)
                                if (a[i].url === t.url || i === a.length - 1) {
                                    a.splice(i, 1);
                                    break
                                }
                            t.promoteToLayer=!0, a.unshift(t)
                        }
                    }), m.length && l.each(m, function(e, t) {
                        a.unshift(t), a.pop()
                    }))
                }
                return a
            },
            getNormalizedFeedItems: function(e) {
                var t = this, i = t.options, n = i.maxitems || i.maxItems, s = t.getTrendingFeedItems(e);
                return l.each(s, function(i, s) {
                    t.normalizeTrendingItem(s, {
                        itemCount: e,
                        numItems: n,
                        pos: i
                    })
                }), s
            },
            generateTrendingJson: function(e, t) {
                var i, n, s = t, o = this, a = c, r = a.feeds[o.options.pubid + o.options.domain], d = o.options, h = d.maxitems || d.maxItems, u = d.textonly, m = o.hasImage=!1, p = o.hasTitle=!1, f = d.defaultimage, g = o.noImageClasses, v = d.theme, b = [];
                if (r && s) {
                    i = o.getTrendingFeedItems(s);
                    for (var w = 0; w < i.length; w++) {
                        var y = i[w];
                        y.image && (m = o.hasImage=!0), y.title && (p = o.hasTitle=!0)
                    }
                    return l.each(i, function(t, i) {
                        if (n = [], i && i.url) {
                            if (o.normalizeTrendingItem(i, {
                                itemCount: s,
                                numItems: h,
                                pos: t
                            }), u!==!0 && m===!0)
                                if (i.image)
                                    n.push({
                                        ".at4-recommended-item-img": {
                                            a: {
                                                href: i.url,
                                                title: i.title,
                                                "img.at-tli": {
                                                    src: i.image,
                                                    alt: i.title,
                                                    "data-secure": i._secureimage ? "true": ""
                                                }
                                            }
                                        }
                                    });
                                else if (f===!0 && o.showPlaceholderImages!==!1) {
                                    var a = {};
                                    a[".at4-recommended-item-img." + g[v]] = {
                                        ".at4-recommended-item-placeholder-img": {}
                                    }, n.push(a)
                                }
                            if (!(o.requiresImage!==!0 || o.requiresImage===!0 && i.image))
                                return [];
                            if (n.push({
                                ".at4-recommended-item-caption": [{
                                    "div.at-h4": {
                                        "a.at-recommendedTitle": {
                                            href: i.url,
                                            html: i.title,
                                            title: i.title
                                        }
                                    }
                                }, {
                                    small: i.domain
                                }
                                ]
                            }), b.push(0 === e.indexOf("smlres") ? {
                                "a.at4-recommended-item.at4-recommended-div-item": n
                            } : {
                                ".at4-recommended-item.at4-recommended-div-item": n
                            }), o.requiresImage===!0 && m===!1 || p===!1)
                                return []
                        }
                    }), b
                }
                return !1
            },
            resizeTrendingImage: function(e) {
                var t, i, n, s, o, a, r, d = e.parentNode.parentNode, h = 0;
                if ("closed" === this.status ? (l.addClass(c.visibleClass, this.element), l.removeClass(c.hideClass, this.element)) : l.isElement(this.container) && l.addClass(c.visibleClass, this.container), l.isUndefined(e.naturalHeight) && (t = new Image, t.src = e.src, e.naturalWidth = t.width, e.naturalHeight = t.height), i = e.naturalWidth, n = e.naturalHeight, d) {
                    for (; h++<5 && (!d.offsetWidth ||!d.offsetHeight) && d.parentNode;)
                        d = d.parentNode;
                    if (s = d.offsetWidth, o = d.offsetHeight || n, "closed" === this.status ? (l.addClass(c.hideClass, this.element), l.removeClass(c.visibleClass, this.element)) : l.isElement(this.container) && l.removeClass(c.visibleClass, this.container), a = s / i, r = o / n, a > r) {
                        n = Math.ceil(n * a), i = s;
                        try {
                            e.style.height = n + "px", e.style.width = i + "px", e.style.top = "-" + Math.ceil(Math.abs(n - o) / 2) + "px"
                        } catch (u) {}
                    } else {
                        i = Math.ceil(i * r), n = o;
                        try {
                            e.style.width = i + "px", e.style.height = n + "px", e.style.left = "-" + Math.ceil(Math.abs(i - s) / 2) + "px"
                        } catch (u) {}
                    }
                }
            },
            queueTrending: function(e, t, i) {
                this.queue(e + t, i), this.retrieveTrendingData()
            },
            dequeueTrending: function(e, t) {
                for (var i; i = this.dequeue(e + t);)
                    i.item.call(i.context)
            },
            resizeTitle: function(e, t, i) {
                if (!(_ate.bro.ie6 || _ate.bro.ie7 || _ate.bro.ie8)) {
                    i = i || e, e.title && (i.innerHTML = e.title);
                    var n, s = e, o = t, a = o.clientHeight, r = s.offsetHeight, l = 1, c = s.innerHTML;
                    if (r > a) {
                        for (; s.offsetHeight > a && c.length - l > 0;)
                            n = c.substr(0, c.length - l++), i.innerHTML = n + "...";
                        n = n.replace(/[\s\.,-\/#!$%\^&\*;:{=\-_`~(]+$/, ""), i.innerHTML = n + "..."
                    }
                }
            },
            resizeTrendingTitle: function(e) {
                e && e.parentNode && this.resizeTitle(e, e.parentNode)
            },
            titleResizer: function(e, t, i, n) {
                var s = this, o = 10, a = 500, r = s.element.parentNode;
                return l.removeClass("at4-visually-hidden", r), function c() {
                    i(t) ? s.resizeTitle(e, t, n) : o > 0 && (l.requestTimeout(c, a), o--)
                }(), s
            },
            generateFollowJson: function(e) {
                var t = [], i = this;
                return l.each(e, function(e, n) {
                    var s = {}, o = n.service, a = n.id, r = n.usertype, c = _ate.share.gfu(o, a, r);
                    o && a && c && (s["span.at4-icon-fw.aticon-" + o] = {
                        html: i.followServices[o] || "",
                        svc: o,
                        svcId: a,
                        title: i.followServices[o]
                    }, "twitter" !== o || l.mobile() ? (s.href = c, s.target = "_blank") : s.href = "#", t.push({
                        "a.aticon.at-follow-btn": s
                    }))
                }), t && t.length ? t : !1
            },
            openShareMenu: function() {
                var t = this, n = l.mobile() ? "mobile": l.getCurrentDevice(t), o = e.addthis_config ? i.clone(e.addthis_config): {}, a = e.addthis_share ? i.clone(e.addthis_share): {};
                "mobile" === n ? c.active_layers.addthis.dock || c.active_layers.addthis.mobile || c.active_layers.addthis.mobilesharemenu ? l.trigger("addthis.layers.mobilesharemenu.show") : addthis.layers({
                    mobilesharemenu: !0,
                    pi: !0
                }, function() {
                    l.trigger("addthis.layers.mobilesharemenu.show")
                }) : (o.ui_pane = "", _ate.ao(s.body, "more", "", "", o, a))
            },
            share: function(e, t) {
                return "compact" === e ? c.openShareMenu() : _ate.share.cleanly(e, {
                    url: this.getShareUrl(),
                    title: this.getShareTitle(),
                    description: this.getShareDescription(),
                    product: t,
                    pubid: _ate.pub()
                })
            },
            getShareUrl: function() {
                var t = e.addthis_share ? i.clone(e.addthis_share): {};
                return this.options.url || t.url
            },
            getShareTitle: function() {
                var t = e.addthis_share ? i.clone(e.addthis_share): {};
                return this.options.shareTitle || t.title
            },
            getShareDescription: function() {
                var t = e.addthis_share ? i.clone(e.addthis_share): {};
                return this.options.description || t.description
            },
            follow: function(t, n, s, o) {
                var a = e.addthis_config ? i.clone(e.addthis_config): {}, r = e.addthis_share ? i.clone(e.addthis_share): {};
                a.product = s, a.pubid = a.username = this.options.pubid || e.addthis_pub || a.pubid || "", r.service = t, r.followUrl = _ate.share.gfu(t, n.id), "twitter" !== t || l.mobile() ? o===!0 ? (a.ui_use_different_full_window=!0, _ate.share.ftw(t, n.id, r, a)) : _ate.share.track(t, 1, r, a) : _ate.share.ftw(t, n.id, r, a)
            },
            imageResizer: function(e, t, n) {
                var o = this, a = o.options, r = 10, d = 500, h = 0, u = (o.container, o.element), m = o.noImageClasses, p = (o.hasImage, a.theme), f = 0;
                return l.addClass(c.visibleClass, u), function g() {
                    var v, b, w, y, _ =- 1, C = 0, S = {};
                    for (e && e.length && l.each(e, function(e, t) {
                        o.superMethod("resizeTrendingTitle", t)
                    }); ++_ < t.length;)
                        v = t[_], l.isUndefined(v.naturalHeight) && (b = new Image, b.src = v.src, b.height > 0 && (v.naturalHeight = b.height, v.naturalWidth = b.width), b = null), v.naturalHeight > 0 && v.naturalWidth > 0&&!v.__imageloaded__ ? (v.__imageloaded__=!0, o.resizeTrendingImage(v), C++) : v.__imageloaded__ ? C++ : h === Math.floor(r / 2) && l.has(l.attr(v, "src"), "http:") && l.has(l.attr(s.location, "href"), "https:") && "true" === l.attr(v, "data-secure") ? l.attr(v, "src", "https:" + l.attr(v, "src").replace("http:", "")) : h === Math.floor(r / 2) && l.has(l.attr(v, "src"), "https:") && l.has(l.attr(s.location, "href"), "https:") && "false" === l.attr(v, "data-secure") && l.attr(v, "src", "http:" + l.attr(v, "src").replace("https:", ""));
                    h++, C < (o.maxitems || 1) && r > h ? l.requestTimeout(g, d) : (a.hideBadImages!==!1 && (l.each(t, function(e, t) {
                        l.isImageBroken(t) && (f += 1)
                    }), l.each(t, function(e, t) {
                        l.isImageBroken(t) && (o.showPlaceholderImages===!1 ? (w = _ate.util.parent(t, ".at4-recommended-div-item"), w !== s && w !== s.body && w.parentNode && w.parentNode.removeChild(w), f >= o.maxitems && l.addClass(c.hideClass, o.container || o.element)) : (y = _ate.util.parent(t, ".at4-recommended-item-img"), o.hasImage===!0 && f < o.maxitems ? (y !== s && y !== s.body && l.addClass(m[p] || "", y), S[".at4-recommended-item-placeholder-img"] = "", t.parentNode && t.parentNode.removeChild(t), y.appendChild(i.json2html(S))) : o.hasImage===!0 && f >= o.maxitems && l.addClass(c.hideClass, o.container || o.element)))
                    })), l.removeClass(c.visibleClass, u), l.isFunction(n) && l.requestTimeout(function() {
                        n()
                    }, 100))
                }(), o
            },
            mappedDataAttributes: function() {
                if (c.mappedDataAttributes.cachedOptions)
                    return c.mappedDataAttributes.cached;
                var e = {};
                return l.each(c.defaultOptions, function(t, i) {
                    l.each(i, function(t) {
                        e[t.toLowerCase()] = t
                    })
                }), c.mappedDataAttributes.cached = e, e
            },
            getShareServices: function() {
                var e, t = this, i = t.options, n = t.services, s = i.numPreferredServices || t.numServices || this.defaultShareServicesNum, o = {
                    more: 1,
                    addthis: 1,
                    compact: 1
                }, a = 1, r = [];
                if (s = Number(s), l.isArray(n) && l.isPlainObject(i)) {
                    for (e in n)
                        if (n.hasOwnProperty(e)) {
                            var c, d = n[e];
                            if ("pinterest" === d && (d = "pinterest_share"), i.services_exclude[d]!==!0 && (_ate.services.exists(d) || 1 === o[d] || a === s && t.personalized) && ("more" === d || "addthis" === d || a === s && t.personalized ? i.services_exclude.more!==!0 && (c = _ate._t("More", 2).replace("&nbsp;", " "), d = "compact") : c = "print" === d ? _ate._t("Print", 22) : "favorites" === d ? _ate._t("Favorites", 5) : "email" === d ? _ate._t("Email", 4) : _ate.services.getName(d), r.push({
                                svc: d,
                                name: c
                            }), a++>=s))
                                break
                        }
                    return r
                }
            },
            displayCounts: function(e) {
                this.renderShareCounts && this.renderShareCounts.call(this, e)
            },
            checkForHideCookie: function(e, t) {
                if (!e ||!t)
                    return !1;
                var i = _ate.cookie.rck("__at" + e + t), n = i ? _ate.util.fromKV(i): {};
                return "1" === n.h
            },
            setHideCookie: function(e, t) {
                _ate.cookie.sck("__at" + e + t, "h=1", 0, 1)
            },
            drawerIsVisible: !1,
            parentElement: document.body,
            pageConfigs: []
        };
        return function() {
            c.pcoToLayerName = {}, l.each(c.pcoMap, function(e, t) {
                c.pcoToLayerName[t] = e
            })
        }(), c
    }(a.qwery, a.rAF, a.utils), a.layerFactory = function(i, n, s) {
        var o = i.layerList, a = {
            create: function(r, l, c, d) {
                if (s.isPlainObject(l)) {
                    var h, u = function() {
                        for (var e in l)
                            l.hasOwnProperty(e) && (this[e] = l[e])
                    }, m = e.addthis_config || {}, p = {}, f = l.namespace, g = l.basename, v = {}, b = {}, w = {}, y = {}, _ = {}, C = o[f][g].__numCalls__, S = {}, x = {};
                    if ("addthis" === f ? s.each(d, function(e, t) {
                        s.isUndefined(o[f][e]) ? S[e] = t : x[e] = t
                    }) : s.each(d, function(e, t) {
                        s.isUndefined(o[f]) ? S[e] = t : x[e] = t
                    }), p = "addthis" === f ? s.extend(s.extend(s.cloneObject(S), s.cloneObject(i.defaultOptions[g])) || {}, s.extend({
                        layers: x
                    }, s.cloneObject(c))) : s.extend(s.extend(s.cloneObject(S), s.cloneObject(i.defaultOptions[f][g])) || {}, s.extend({
                        layers: x
                    }, s.cloneObject(c))), s.isString(l.inheritsFrom) && l.inheritsFrom.length) {
                        if (v.names = l.inheritsFrom.split("."), v.namespace = v.names[0], v.basename = v.names[1], v.namespace && v.basename && s.isPlainObject(o[f][g]))
                            b = s.cloneObject(o[v.namespace][v.basename]), _ = s.extend(b, l), y = s.cloneObject("addthis" === v.namespace ? i.defaultOptions[v.basename] : i.defaultOptions[v.namespace][v.basename]), w = s.extend(y, p);
                        else if (v.namespace&&!v.basename) {
                            if (b = o.addthis[v.namespace], !b)
                                return;
                            _ = o[f][g] = s.extend(s.cloneObject(b), l), y = s.cloneObject(i.defaultOptions[v.namespace]), w = s.extend(y, p)
                        }
                        u = function() {
                            for (var e in _)
                                _.hasOwnProperty(e) && (this[e] = _[e])
                        }
                    }
                    if (o[f][g].__numCalls__ = s.isUndefined(C) || l.multipleCalls!==!0 ? 1 : C + 1, u.prototype = i, h = new u, h.element = h.element || "#addthis-smartlayers-" + r, o[f][g].__numCalls__ > 1 && (h.element = h.element + o[f][g].__numCalls__), h.__numCalls__ = o[f][g].__numCalls__, h.elementSelector = h.element, h.name = r, h.mobile = s.mobile(), h._super = i, h.inheritedObj = b, s.isString(h.parentElement) && (h.parentElement = n(h.parentElement)[0]), h.options = l.inheritsFrom ? w : p, h.options.pubid = h.options.altRecommendedPubId || h.options.pubid || e.addthis_pub || m.pubid || "", a.testAgainstRules.call(h), s.mobile() && h.options.mobile===!1 || s.desktop() && h.options.desktop===!1)
                        return s.trigger("addthis.layer.loaded", {
                            layer: h
                        }), s.trigger("addthis.layer.rendered", {
                            layer: h
                        }), !1;
                    if (h.qwery = n, h.utils = s, h.rendered=!1, h.device = h.device || "both", h.options.elements) {
                        if (!n(h.options.elements).length)
                            return s.trigger("addthis.layer.loaded", {
                                layer: h
                            }), s.trigger("addthis.layer.rendered", {
                                layer: h
                            }), !1;
                        h.isInlineLayer=!0
                    }
                    return a.isHiddenByConfig(c) ? (s.trigger("addthis.layer.loaded", {
                        layer: h
                    }), s.trigger("addthis.layer.rendered", {
                        layer: h
                    }), !1) : (h.create(), (h.async===!0 || s.isFunction(h.prerender)) && i.preRender.call(h), h.render(), s.trigger("addthis.layers." + this.name + ".loaded", t, this), s.trigger("addthis.layer.loaded", {
                        layer: h
                    }), e.addthis.layers.active_layers = i.active_layers = i.active_layers || {}, e.addthis.layers.active_layers[f] = i.active_layers[f] = i.active_layers[f] || {}, e.addthis.layers.active_layers[f][g] = i.active_layers[f][g] = h, h)
                }
            },
            isHiddenByConfig: function(t) {
                if (t.__hideOnHomepage&&!e.location.search && ("/" === e.location.pathname || "" === e.location.pathname))
                    return !0;
                var i=!1;
                if (t.__hideOnUrls) {
                    var n = s.stripHashFromPath(s.stripProtocol(e.location.href));
                    s.each(t.__hideOnUrls, function(e, t) {
                        return s.stringMatchesWithWildcards(n, s.stripHashFromPath(s.stripProtocol(t))) ? (i=!0, !1) : void 0
                    })
                }
                return i
            },
            testAgainstRules: function() {
                var e = this, t = e.options;
                e.rules = function() {
                    var e = t.rules || t.rule;
                    return s.isArray(e) ? e : s.isPlainObject(e) ? [e] : []
                }(), s.decisionEngine.run.call(e, e.rules), e.isMatch = s.isPlainObject(e.matchObject)&&!s.isEmptyObject(e.matchObject) || e.options.alwaysShow===!0 || 0 === e.rules.length?!0 : !1, e.options = s.extend(e.options, s.extend(e.options["default"] || {}, e.matchObject || {}))
            }
        };
        return a
    }(a.common, a.qwery, a.utils), a.setup = function(e, t, i, n) {
        var s = i.layerList;
        return {
            addthisWidget: function(e, i) {
                var n = this, o = "addthis", a = e;
                return s[o] = s[o] || {}, s[o][a] = i, addthis.addEventListener("addthis.layers." + e, function(e) {
                    var i = e.target.name, s = t.extend(e.target.props, {
                        namespace: o,
                        basename: a
                    }), r = e.target.options || {}, l = e.target.extendedOptions || {};
                    n.createWidget({
                        name: i,
                        props: s,
                        multipleCalls: s.multipleCalls,
                        ops: r,
                        extendedOptions: l,
                        elems: r.elements,
                        namespace: o,
                        basename: a
                    })
                }), i
            },
            addthisComponent: function(e, t) {
                return i.defaultOptions[e] = t.defaultOptions || {}, i.desktopLayers[e] = e, i.mobileLayers[e] = e, this.addthisWidget.apply(this, arguments), t
            },
            thirdPartyWidget: function(n, o) {
                var a, r, l = this, c = n.split("."), d = c[0], h = c[1], u = d + "-" + h, m = "." + u, p = t.extend({
                    namespace: d,
                    basename: h,
                    fullname: u,
                    eventnamespace: m
                }, o), f = e("." + p.inlineClass);
                if (!d)
                    return void t.warn("You must provide a namespace for your AddThis Smart Layers plugin");
                if (!h)
                    return void t.warn("You must provide a basename for your AddThis Smart Layers plugin");
                if (!t.isPlainObject(o))
                    return void t.warn("You must provide an object to create your AddThis Smart Layers plugin");
                if ("addthis" === d)
                    return void t.warn('You cannot use the "addthis" namespace for your AddThis Smart Layers plugin');
                if (s[d] && s[d][h])
                    return void t.warn('There is already an AddThis Smart Layers plugin with a(n) "' + d + '" namespace and a(n) "' + h + '" basename');
                if (s[d] ? s[d][h] = p : (s[d] = {}, s[d][h] = p), i.defaultOptions[d] = i.defaultOptions[d] || {}, i.defaultOptions[d][h] = p.options || {}, addthis.addEventListener("addthis.layers" + m, function(e) {
                    a = e.target.options || {}, r = e.target.extendedOptions || {}, l.createWidget({
                        name: u,
                        props: p,
                        multipleCalls: p.multipleCalls,
                        ops: a,
                        extendedOptions: r,
                        elems: a.elements,
                        namespace: d,
                        basename: h
                    })
                }), f.length) {
                    var g = {};
                    g[d] = {}, g[d][h]=!0, addthis.layers(g)
                }
            },
            createWidget: function(o) {
                function a(e, s) {
                    var o, a = {};
                    if (t.isElement(e) && (l.parentElement = e), d) {
                        var r = t.filter(e.attributes, function(e) {
                            return /^data-/.test(e.name)
                        }, e.attributes), c = t.mobile() ? "mobile": "desktop";
                        if (a = function() {
                            var e, n, o = {};
                            return t.each(r, function(s, a) {
                                e = function() {
                                    var e = (a.name || "").replace("data-", "");
                                    return e = i.mappedDataAttributes()[e] ? i.mappedDataAttributes()[e] : e
                                }(), n = function() {
                                    var e = a.value;
                                    return "false" === e?!1 : "true" === e?!0 : t.isNumeric(e) ? Number(e) : e
                                }(), o[e] = n, "title" === e && (o.shareTitle = n)
                            }), t.isEmptyObject(s) || (o = t.extend(o, s)), o
                        }(), "recommendedbox" === h && (t.hasClass("addthis-recommendedbox-horizontal", e) ? a.orientation = "horizontal" : t.hasClass("addthis-recommendedbox-vertical", e) && (a.orientation = "vertical")), "desktop" === c && a.desktop===!1)
                            return;
                        if ("mobile" === c && a.mobile===!1)
                            return 
                    }
                    a = (t.isEmptyObject(a) ? s : a) || s, o = n.create(h, l, a, f), d && (null === e.getAttribute("data-url")&&!o.isFollowLayer && o.getShareUrl() && e.setAttribute("data-url", o.getShareUrl()), null === e.getAttribute("data-title")&&!o.isFollowLayer && o.getShareTitle() && e.setAttribute("data-title", o.getShareTitle()), null === e.getAttribute("data-description")&&!o.isFollowLayer && o.getShareDescription() && e.setAttribute("data-description", o.getShareDescription()))
                }
                var r, l = o.props, c = o.elems, d=!(!l ||!l.inline), h = o.name, u = o.namespace, m = o.basename, p = o.ops, f = o.extendedOptions, g = o.multipleCalls;
                c = function() {
                    return c ? c : d ? "." + l.inlineClass : void 0
                }(), t.isString(c) && (r = e(c)), t.isUndefined(c) || 0 === r.length ? n.create(h, l, p, f) : 1 === r.length ? a(r[0], p) : r.length > 1 && (g!==!0 ? t.isUndefined(s[u][m].__numCalls__) && a(r[0], p) : g===!0 && t.isArray(r) && t.each(r, function(e, t) {
                    a(t, p)
                }))
            }
        }
    }(a.qwery, a.utils, a.common, a.layerFactory), a.conversionlightbox = function(t, i, n, s, o) {
        var a=!1;
        return i.addthisWidget("conversionlightbox", {
            pco: "cvlbx-1.0",
            device: "both",
            element: "#at-cv-lightbox",
            mobileClass: "at-mobile",
            inline: !1,
            personalized: !0,
            showOnLoad: !1,
            shownOnPage: !1,
            delay: !1,
            create: function() {
                var i = this.options, n = function() {
                    return e.addthis_config && t.isPlainObject(e.addthis_config) ? e.addthis_config.services_exclude || "" : ""
                }(), s = {};
                return i.services ? (this.personalized=!1, this.services = i.services.replace(/ /g, "").split(","), i.numPreferredServices = this.services.length) : this.services = this.preferredServices, this.superMethod("getServiceCSS", this.services), t.isString(n) && (n = n.split(","), t.each(n, function(e, i) {
                    i = t.trim(i), s[i]=!0
                }), this.options.services_exclude = s), this
            },
            events: {
                "addthis.layers.resize": n.applyResponsiveClass,
                ".at-share-btn click": n.commonEventHandlers.share.buttonClick,
                ".at-svc-compact.at-share-btn mouseover": n.commonEventHandlers.share.showCompactMenu,
                "!.at-svc-compact.at-share-btn mouseleave": n.commonEventHandlers.share.hideCompactMenu,
                ".at4-close click": function(e) {
                    t.preventDefaultEvent(e), this.setHideCookie(this.pco.split("-").shift(), this.getRuleHash()), this.hide()
                },
                "addthis.keydown.esc": function() {
                    this.hide()
                },
                ".at4win click": function() {
                    a=!0
                },
                "#at-cv-lightbox-no-button click": function(e) {
                    t.preventDefaultEvent(e), this.setHideCookie(this.pco.split("-").shift(), this.getRuleHash()), this.hide()
                },
                click: function() {
                    a!==!0 && t.isVisible(this.element) && this.hide(), this.hold=!1, a=!1
                },
                "addthis.layers.scroll": function() {
                    !this.shownOnPage && t.mobile() && t.scrollBottomPercentage() > .75 && (this.shownOnPage=!0, _ate.track.avpc(this.pco, "g=" + this.options.goal), this.show())
                },
                "!body mouseleave": function(e) {
                    var i = e.clientY, n = this;
                    n.delay = setTimeout(function() {
                        !n.shownOnPage && t.desktop() && 10 > i && (n.shownOnPage=!0, _ate.track.avpc(n.pco, "g=" + n.options.goal), n.show())
                    }, 500)
                },
                "!body mouseenter": function() {
                    this.delay && clearTimeout(this.delay)
                },
                "!#at-cv-lightbox-form submit": function() {
                    this.setHideCookie(this.pco.split("-").shift(), this.getRuleHash()), _ate.track.conversion({
                        pco: this.pco,
                        ruleId: this.options.chosenRuleId
                    }), this.hide()
                },
                "#at-cv-lightbox-yes-button click": function() {
                    this.setHideCookie(this.pco.split("-").shift(), this.getRuleHash()), _ate.track.conversion({
                        pco: this.pco,
                        ruleId: this.options.chosenRuleId
                    })
                },
                "addthis.layers.conversionlightbox.show": function() {
                    this.show()
                }
            },
            convertHex: function(e, t) {
                var i = t / 100;
                return "background:" + e + ";opacity: " + i + ";filter: alpha(opacity=" + t + ");-ms-filter: alpha(opacity=" + t + ");-khtml-opacity: " + i + ";-moz-opacity: " + i
            },
            getRuleHash: function() {
                var e = this.options, t = this.pco + (e.goal ? e.goal : "");
                return "email" === t ? t += e.mailchimpID ? e.mailchimpID : "" : "prompt" === t && (t += e.goalUrl ? e.goalUrl : ""), _ate.mun(t)
            },
            generateElement: function() {
                var e = this.getRuleHash(), i = t.mobile() ? this.mobileClass: "", n = this.options;
                return this.checkForHideCookie(this.pco.split("-").shift(), e)&&!this.options.alwaysShow?!1 : o.div(o.div(o.div(o.div(o.a("X").css("at4-close").href("#").title("Close").id("at-cv-lightbox-close")).css("at4win-header").id("at-cv-lightbox-header"), o.div(o.div(o.div(n.headline).id("at-cv-lightbox-message")).id("at-cv-lightbox-message-holder"), this.generateGoalElement(n)).id("at-cv-lightbox-content").css("at4win-content"), o.div(o.a("AddThis").css("at4-logo").href("//www.addthis.com/?utm_source=dynpo&utm_medium=img&utm_content=AT_main_WT&utm_campaign=AT_main").title("AddThis").target("_blank"), o.a(_ate._t("Privacy", 24)).css("at4-privacy").href("//www.addthis.com/privacy/privacy-policy").title(_ate._t("Privacy", 24)).target("_blank")).id("at-cv-lightbox-footer")).css("at4win").id("at-cv-lightbox-win")).id("at-cv-lightbox-inner"), o.div().css("at-cv-lightbox-background").style(this.convertHex(n.theme, 80))).id("at-cv-lightbox").css("at-cv-lightbox", "animated", "at-thankyou-shown", "fadeIn", "at4-show", i).element
            },
            generateGoalElement: function(e) {
                var i, n = this.getShareServices(), s = [];
                if ("share" === e.goal)
                    t.each(n, function(e, t) {
                        var i = t.svc, n = t.name;
                        s.push(o.a(o.span().css("at300bs", "at15nc", "at15t_" + i).title(n), o.span(n).css("label").title(n)).css("at-share-btn", "at-svc-" + i))
                    }), i = o.div(o.div(s).css("at-resp-share-element", "addthis_32x32_style", "addthis-smartlayers", "animated at4-show")).id("at-cv-lightbox-button-holder");
                else if ("email" === e.goal) {
                    var a, r = e;
                    if ("aweber" === r.emailProvider) {
                        if (!r.aweberID ||!r.aweberActionUrl)
                            return !1;
                        a = o.form(o.input().type("hidden").name("listname").value(e.aweberID), o.input().id("at-cv-lightbox-input").type("email").autocapitalize("off").autocorrect("off").required("required").placeholder("Enter your email address").name("email"), o.input().id("at-cv-lightbox-submit").type("submit").value(e.submitButton).css("at-cv-lightbox-button", "at-cv-lightbox-submit").style("background: " + e.theme)).id("at-cv-lightbox-form").action(e.aweberActionUrl).target("_blank").method("post")
                    } else {
                        if (!(r.mailchimpU && r.mailchimpID && r.mailchimpActionUrl))
                            return !1;
                        a = o.form(o.input().type("hidden").name("u").value(e.mailchimpU), o.input().type("hidden").name("id").value(e.mailchimpID), o.input().id("at-cv-lightbox-input").type("email").autocapitalize("off").autocorrect("off").required("required").placeholder("Enter your email address").name("MERGE0"), o.input().id("at-cv-lightbox-submit").type("submit").value(e.submitButton).css("at-cv-lightbox-button", "at-cv-lightbox-submit").style("background: " + e.theme)).id("at-cv-lightbox-form").action(e.mailchimpActionUrl).target("_blank").method("post")
                    }
                    i = o.div(a).id("at-cv-lightbox-button-holder")
                } else if ("prompt" === e.goal) {
                    if (!e.goalUrl)
                        return !1;
                    var l = (e.goalUrl.indexOf("://")>-1 || 0 === e.goalUrl.indexOf("//") ? "" : "//") + e.goalUrl;
                    i = o.div(o.a(e.yesButton).css("at-cv-lightbox-button", "at-cv-lightbox-yesno").style("background: " + e.theme).id("at-cv-lightbox-yes-button").href(l).target("_blank"), o.a(e.noButton).css("at-cv-lightbox-button", "at-cv-lightbox-yesno").style("background: #bbb").id("at-cv-lightbox-no-button").href("#")).id("at-cv-lightbox-button-holder").css("traffic")
                }
                return i
            }
        })
    }(a.utils, a.setup, a.common, a.qwery, a.emdot), a.iscroll = function() {
        var e = Math, t = function(e) {
            return e>>0
        }, i = /webkit/i.test(navigator.appVersion) ? "webkit": /firefox/i.test(navigator.userAgent) ? "Moz": "opera"in window ? "O": "", s = (/android/gi.test(navigator.appVersion), /iphone|ipad/gi.test(navigator.appVersion)), o = /playbook/gi.test(navigator.appVersion), a = /hp-tablet/gi.test(navigator.appVersion), r = "WebKitCSSMatrix"in window && "m11"in new WebKitCSSMatrix, l = "ontouchstart"in window&&!a, c = i + "Transform"in document.documentElement.style, d = s || o, h = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                return setTimeout(e, 17)
            }
        }(), u = function() {
            return window.cancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
        }(), m = "onorientationchange"in window ? "orientationchange": "resize", p = l ? "touchstart": "mousedown", f = l ? "touchmove": "mousemove", g = l ? "touchend": "mouseup", v = l ? "touchcancel": "mouseup", b = "translate" + (r ? "3d(" : "("), w = r ? ",0)": ")", y = function(e, t) {
            var n, s = this, o = document;
            s.wrapper = "object" == typeof e ? e : o.getElementById(e), s.wrapper.style.overflow = "hidden", s.scroller = s.wrapper.children[0], s.options = {
                hScroll: !0,
                vScroll: !0,
                x: 0,
                y: 0,
                bounce: !0,
                bounceLock: !1,
                momentum: !0,
                lockDirection: !0,
                useTransform: !0,
                useTransition: !1,
                onRefresh: null,
                onBeforeScrollStart: function(e) {
                    e.preventDefault()
                },
                onScrollStart: null,
                onBeforeScrollMove: null,
                onScrollMove: null,
                onBeforeScrollEnd: null,
                onScrollEnd: null,
                onTouchEnd: null,
                onDestroy: null
            };
            for (n in t)
                s.options[n] = t[n];
            s.x = s.options.x, s.y = s.options.y, s.options.useTransform = c ? s.options.useTransform : !1, s.options.hScrollbar = s.options.hScroll && s.options.hScrollbar, s.options.vScrollbar = s.options.vScroll && s.options.vScrollbar, s.options.useTransition = d && s.options.useTransition, s.scroller.style[i + "TransitionProperty"] = s.options.useTransform ? "-" + i.toLowerCase() + "-transform" : "top left", s.scroller.style[i + "TransitionDuration"] = "0", s.scroller.style[i + "TransformOrigin"] = "0 0", s.options.useTransition && (s.scroller.style[i + "TransitionTimingFunction"] = "cubic-bezier(0.33,0.66,0.66,1)"), s.options.useTransform ? s.scroller.style[i + "Transform"] = b + s.x + "px," + s.y + "px" + w : s.scroller.style.cssText += ";position:absolute;top:" + s.y + "px;left:" + s.x + "px", s.refresh(), s._bind(m, window), s._bind(p), l || s._bind("mouseout", s.wrapper)
        };
        return y.prototype = {
            enabled: !0,
            x: 0,
            y: 0,
            steps: [],
            scale: 1,
            handleEvent: function(e) {
                var t = this;
                switch (e.type) {
                case p:
                    if (!l && 0 !== e.button)
                        return;
                    t._start(e);
                    break;
                case f:
                    t._move(e);
                    break;
                case g:
                case v:
                    t._end(e);
                    break;
                case m:
                    t._resize();
                    break;
                case"mouseout":
                    t._mouseout(e);
                    break;
                case"webkitTransitionEnd":
                    t._transitionEnd(e)
                }
            },
            _resize: function() {
                this.refresh()
            },
            _pos: function(e, n) {
                e = this.hScroll ? e : 0, n = this.vScroll ? n : 0, this.options.useTransform ? this.scroller.style[i + "Transform"] = b + e + "px," + n + "px" + w + " scale(" + this.scale + ")" : (e = t(e), n = t(n), this.scroller.style.left = e + "px", this.scroller.style.top = n + "px"), this.x = e, this.y = n
            },
            _start: function(e) {
                var t, n, s, o = this, a = l ? e.touches[0]: e;
                o.enabled && (o.options.onBeforeScrollStart && o.options.onBeforeScrollStart.call(o, e), o.options.useTransition && o._transitionTime(0), o.moved=!1, o.animating=!1, o.zoomed=!1, o.distX = 0, o.distY = 0, o.absDistX = 0, o.absDistY = 0, o.dirX = 0, o.dirY = 0, o.options.momentum && (o.options.useTransform ? (t = getComputedStyle(o.scroller, null)[i + "Transform"].replace(/[^0-9-.,]/g, "").split(","), n = 1 * t[4], s = 1 * t[5]) : (n = 1 * getComputedStyle(o.scroller, null).left.replace(/[^0-9-]/g, ""), s = 1 * getComputedStyle(o.scroller, null).top.replace(/[^0-9-]/g, "")), (n != o.x || s != o.y) && (o.options.useTransition ? o._unbind("webkitTransitionEnd") : u(o.aniTime), o.steps = [], o._pos(n, s))), o.startX = o.x, o.startY = o.y, o.pointX = a.pageX, o.pointY = a.pageY, o.startTime = e.timeStamp || Date.now(), o.options.onScrollStart && o.options.onScrollStart.call(o, e), o._bind(f), o._bind(g), o._bind(v))
            },
            _move: function(t) {
                var i = this, n = l ? t.touches[0]: t, s = n.pageX - i.pointX, o = n.pageY - i.pointY, a = i.x + s, r = i.y + o, c = t.timeStamp || Date.now();
                i.options.onBeforeScrollMove && i.options.onBeforeScrollMove.call(i, t), i.pointX = n.pageX, i.pointY = n.pageY, (a > 0 || a < i.maxScrollX) && (a = i.options.bounce ? i.x + s / 2 : a >= 0 || i.maxScrollX >= 0 ? 0 : i.maxScrollX), (r > 0 || r < i.maxScrollY) && (r = i.options.bounce ? i.y + o / 2 : r >= 0 || i.maxScrollY >= 0 ? 0 : i.maxScrollY), i.distX += s, i.distY += o, i.absDistX = e.abs(i.distX), i.absDistY = e.abs(i.distY), i.absDistX < 6 && i.absDistY < 6 || (i.options.lockDirection && (i.absDistX > i.absDistY + 5 ? (r = i.y, o = 0) : i.absDistY > i.absDistX + 5 && (a = i.x, s = 0)), i.moved=!0, i._pos(a, r), i.dirX = s > 0?-1 : 0 > s ? 1 : 0, i.dirY = o > 0?-1 : 0 > o ? 1 : 0, c - i.startTime > 300 && (i.startTime = c, i.startX = i.x, i.startY = i.y), i.options.onScrollMove && i.options.onScrollMove.call(i, t))
            },
            _end: function(i) {
                if (!l || 0 == i.touches.length) {
                    var n, s, o, a = this, r = l ? i.changedTouches[0]: i, c = {
                        dist: 0,
                        time: 0
                    }, d = {
                        dist: 0,
                        time: 0
                    }, h = (i.timeStamp || Date.now()) - a.startTime, u = a.x, m = a.y;
                    if (a._unbind(f), a._unbind(g), a._unbind(v), a.options.onBeforeScrollEnd && a.options.onBeforeScrollEnd.call(a, i), !a.moved) {
                        if (l) {
                            for (n = r.target; 1 != n.nodeType;)
                                n = n.parentNode;
                            "SELECT" != n.tagName && "INPUT" != n.tagName && "TEXTAREA" != n.tagName && (s = document.createEvent("MouseEvents"), s.initMouseEvent("click", !0, !0, i.view, 1, r.screenX, r.screenY, r.clientX, r.clientY, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, 0, null), s._fake=!0, n.dispatchEvent(s))
                        }
                        return a._resetPos(200), void(a.options.onTouchEnd && a.options.onTouchEnd.call(a, i))
                    }
                    if (300 > h && a.options.momentum && (c = u ? a._momentum(u - a.startX, h, - a.x, a.scrollerW - a.wrapperW + a.x, a.options.bounce ? a.wrapperW : 0) : c, d = m ? a._momentum(m - a.startY, h, - a.y, a.maxScrollY < 0 ? a.scrollerH - a.wrapperH + a.y : 0, a.options.bounce ? a.wrapperH : 0) : d, u = a.x + c.dist, m = a.y + d.dist, (a.x > 0 && u > 0 || a.x < a.maxScrollX && u < a.maxScrollX) && (c = {
                        dist: 0,
                        time: 0
                    }), (a.y > 0 && m > 0 || a.y < a.maxScrollY && m < a.maxScrollY) && (d = {
                        dist: 0,
                        time: 0
                    })), c.dist || d.dist)
                        return o = e.max(e.max(c.time, d.time), 10), a.scrollTo(t(u), t(m), o), void(a.options.onTouchEnd && a.options.onTouchEnd.call(a, i));
                    a._resetPos(200), a.options.onTouchEnd && a.options.onTouchEnd.call(a, i)
                }
            },
            _resetPos: function(e) {
                var t = this, i = t.x >= 0 ? 0: t.x < t.maxScrollX ? t.maxScrollX: t.x, n = t.y >= 0 || t.maxScrollY > 0 ? 0: t.y < t.maxScrollY ? t.maxScrollY: t.y;
                return i == t.x && n == t.y ? void(t.moved && (t.options.onScrollEnd && t.options.onScrollEnd.call(t), t.moved=!1)) : void t.scrollTo(i, n, e || 0)
            },
            _mouseout: function(e) {
                var t = e.relatedTarget;
                if (!t)
                    return void this._end(e);
                for (; t = t.parentNode;)
                    if (t == this.wrapper)
                        return;
                this._end(e)
            },
            _transitionEnd: function(e) {
                var t = this;
                e.target == t.scroller && (t._unbind("webkitTransitionEnd"), t._startAni())
            },
            _startAni: function() {
                var t, i, n, s = this, o = s.x, a = s.y, r = Date.now();
                if (!s.animating) {
                    if (!s.steps.length)
                        return void s._resetPos(400);
                    if (t = s.steps.shift(), t.x == o && t.y == a && (t.time = 0), s.animating=!0, s.moved=!0, s.options.useTransition)
                        return s._transitionTime(t.time), s._pos(t.x, t.y), s.animating=!1, void(t.time ? s._bind("webkitTransitionEnd") : s._resetPos(0));
                    n = function() {
                        var l, c, d = Date.now();
                        return d >= r + t.time ? (s._pos(t.x, t.y), s.animating=!1, s.options.onAnimationEnd && s.options.onAnimationEnd.call(s), void s._startAni()) : (d = (d - r) / t.time - 1, i = e.sqrt(1 - d * d), l = (t.x - o) * i + o, c = (t.y - a) * i + a, s._pos(l, c), void(s.animating && (s.aniTime = h(n))))
                    }, n()
                }
            },
            _transitionTime: function(e) {
                this.scroller.style[i + "TransitionDuration"] = e + "ms"
            },
            _momentum: function(i, n, s, o, a) {
                var r = 6e-4, l = e.abs(i) / n, c = l * l / (2 * r), d = 0, h = 0;
                return i > 0 && c > s ? (h = a / (6 / (c / l * r)), s += h, l = l * s / c, c = s) : 0 > i && c > o && (h = a / (6 / (c / l * r)), o += h, l = l * o / c, c = o), c*=0 > i?-1 : 1, d = l / r, {
                    dist: c,
                    time: t(d)
                }
            },
            _offset: function(e) {
                for (var t =- e.offsetLeft, i =- e.offsetTop; e = e.offsetParent;)
                    t -= e.offsetLeft, i -= e.offsetTop;
                return {
                    left: t,
                    top: i
                }
            },
            _bind: function(e, t, i) {
                (t || this.scroller).addEventListener(e, this, !!i)
            },
            _unbind: function(e, t, i) {
                (t || this.scroller).removeEventListener(e, this, !!i)
            },
            destroy: function() {
                var e = this;
                e.scroller.style[i + "Transform"] = "", e._unbind(m, window), e._unbind(p), e._unbind(f), e._unbind(g), e._unbind(v), e._unbind("mouseout", e.wrapper), e.options.useTransition && e._unbind("webkitTransitionEnd"), e.options.onDestroy && e.options.onDestroy.call(e)
            },
            refresh: function() {
                var e, t = this;
                t.wrapperW = t.wrapper.clientWidth, t.wrapperH = t.wrapper.clientHeight, t.scrollerW = t.scroller.offsetWidth, t.scrollerH = t.scroller.offsetHeight, t.maxScrollX = t.wrapperW - t.scrollerW, t.maxScrollY = t.wrapperH - t.scrollerH, t.dirX = 0, t.dirY = 0, t.hScroll = t.options.hScroll && t.maxScrollX < 0, t.vScroll = t.options.vScroll && (!t.options.bounceLock&&!t.hScroll || t.scrollerH > t.wrapperH), e = t._offset(t.wrapper), t.wrapperOffsetLeft =- e.left, t.wrapperOffsetTop =- e.top, t.scroller.style[i + "TransitionDuration"] = "0", t._resetPos(200)
            },
            scrollTo: function(e, t, i, n) {
                var s, o, a = this, r = e;
                for (a.stop(), r.length || (r = [{
                    x: e,
                    y: t,
                    time: i,
                    relative: n
                }
                ]), s = 0, o = r.length; o > s; s++)
                    r[s].relative && (r[s].x = a.x - r[s].x, r[s].y = a.y - r[s].y), a.steps.push({
                        x: r[s].x,
                        y: r[s].y,
                        time: r[s].time || 0
                    });
                a._startAni()
            },
            scrollToElement: function(t, i) {
                var s, o = this;
                t = t.nodeType ? t : o.scroller.querySelector(t), t && (s = o._offset(t), s.left += o.wrapperOffsetLeft, s.top += o.wrapperOffsetTop, s.left = s.left > 0 ? 0 : s.left < o.maxScrollX ? o.maxScrollX : s.left, s.top = s.top > 0 ? 0 : s.top < o.maxScrollY ? o.maxScrollY : s.top, i = i === n ? e.max(2 * e.abs(s.left), 2 * e.abs(s.top)) : i, o.scrollTo(s.left, s.top, i))
            },
            disable: function() {
                this.stop(), this._resetPos(0), this.enabled=!1, this._unbind(f), this._unbind(g), this._unbind(v)
            },
            enable: function() {
                this.enabled=!0
            },
            stop: function() {
                u(this.aniTime), this.steps = [], this.moved=!1, this.animating=!1
            }
        }, y
    }(), a.mobile = function(n, a, r, l) {
        return a.addthisWidget("mobile", {
            create: function() {
                var t, i, s, o = this, a = new _ate.resource.Resource("widgetMobileCSS", _atc.rsrcs.widgetMobileCSS), r = o.basename, l = this.options || {}, c = l.layers.share || {}, d = "mobile" === r ? c.services: l.shareServices, h = function() {
                    return e.addthis_config && n.isPlainObject(e.addthis_config) ? e.addthis_config.services_exclude || "" : ""
                }(), u = {};
                return this.initialize(), a.load(), this.position = t = l.buttonBarPosition && "top" === l.buttonBarPosition.toLowerCase() ? "top" : "bottom", i = "top" === t ? "slideInDown" : "slideInUp", s = "top" === t ? "slideOutUp" : "slideOutDown", o.options = n.extend(l, {
                    menuShowAnimation: i,
                    menuHideAnimation: s,
                    buttonBarTheme: "transparent" === l.buttonBarTheme ? "light": l.buttonBarTheme
                }), o.positionClass = "top" === o.position ? ".at4m-dock-top" : ".at4m-dock-bottom", d ? (this.personalized=!1, this.services = d.replace(/ /g, "").split(",").concat(o.preferredServices)) : this.services = o.preferredServices, "string" == typeof h && (h = h.split(","), n.each(h, function(e, t) {
                    t = n.trim(t), u[t]=!0
                }), l.services_exclude = u), o
            },
            initialize: function() {
                function i(i) {
                    if (this.mobile && (this.history.replaceState(i.state, s.title, e.location.href), i.state && i.state.menu===!1 && i.state.opening===!0 ? n.trigger("addthis.layers.mobilemenu.hide", t, this) : i.state && i.state.menu===!1 && i.state.empty===!0 && e.history.go( - 1), i.state && i.state.menu))
                        switch (i.state.menu) {
                        case"share":
                            a.events["#at4m-sb click"].call(a, i);
                            break;
                        case"follow":
                            a.events["#at4m-fb click"].call(a, i)
                        }
                }
                var o, a = this, r = e.history.replaceState, l = e.history.pushState;
                a.mobile && r && l ? (this.history = {}, this.history.getState = function() {
                    return e.history.state ? e.history.state : e.sessionStorage && (o = e.sessionStorage.getItem("history.state")) && JSON.parse(o) || null
                }, this.history.pushState = function(t, i, n) {
                    l.call(e.history, t, i, n);
                    try {
                        e.sessionStorage.setItem("history.state", JSON.stringify(t)), e.sessionStorage.setItem("history.state:title", i), e.sessionStorage.setItem("history.state:href", n)
                    } catch (s) {}
                }, this.history.replaceState = function(t, i, n) {
                    r.call(e.history, t, i, n);
                    try {
                        e.sessionStorage.setItem("history.state", JSON.stringify(t)), e.sessionStorage.setItem("history.state:title", i), e.sessionStorage.setItem("history.state:href", n)
                    } catch (s) {}
                }, this.history.replaceState({
                    menu: !1,
                    opening: !1
                }, document.title, e.location.href)) : this.history = {}, this.popStateEventHandler = i
            },
            pco: "smlmo-1.0",
            device: "mobile",
            element: "#at4m-mobile-container",
            dock: "#at4m-dock",
            dockToggle: "#at4m-dock-toggle",
            menu: "#at4m-menu",
            menuHeader: "#at4m-menu-head",
            menuCloseControl: "#at4m-mcc",
            menuBody: "#at4m-services",
            innerMenuBody: "#at4m-menu-body",
            searchBox: "#at4-searchBox",
            searchClear: "#at4-searchClear",
            position: "bottom",
            positionClass: "",
            services: [],
            servicesInMenu: {},
            personlized: !1,
            dockClosed: !1,
            isLoading: !1,
            serviceListPos: 0,
            isSearching: !1,
            mobileBlacklist: {
                link: !0
            },
            finalize: function() {
                return this.element = l(this.element)[0], this.dock = l(this.dock)[0], this.dockToggle = l(this.dockToggle)[0], this.menu = l(this.menu)[0], this.menuHeader = l(this.menuHeader)[0], this.menuCloseControl = l(this.closeControl)[0], this.menuBody = l(this.menuBody)[0], this.searchBox = l(this.searchBox)[0], this.searchClear = l(this.searchClear)[0], this.innerMenuBody = l(this.innerMenuBody)[0], n.trigger("addthis.layer.rendered", {
                    layer: this.name
                }), this
            },
            events: {
                "!window popstate": function(e) {
                    this.popStateEventHandler(e)
                },
                "#at4m-fb click": function(t) {
                    n.preventDefaultEvent(t);
                    var i = this, o = this.history.getState && this.history.getState();
                    this.currentLayerType = "follow", this.menuHeader.innerHTML = _ate._t("Follow", 96), this.superMethod("hideControl", this.searchBox.parentNode), null === o || o && o.menu===!1 ? (this.history.replaceState && this.history.replaceState({
                        menu: !1,
                        opening: !0
                    }, s.title, e.location.href), this.history.pushState && this.history.pushState({
                        menu: "follow"
                    }, s.title, e.location.href)) : this.history.replaceState && this.history.replaceState({
                        menu: "follow"
                    }, s.title, e.location.href), this.generateFollowServices(), this.show(this.menu, this.options.menuShowAnimation, function() {
                        i.hideDesktopScrollbar()
                    })
                },
                "#at4m-sb click": r.commonEventHandlers.mobile.showExpandedShareMenu,
                "#at4m-mcc click": function(e) {
                    n.preventDefaultEvent(e), n.trigger("addthis.layers.mobilemenu.hide", t, this)
                },
                "#at4m-dock-toggle click": function(e) {
                    n.preventDefaultEvent(e), this.dockClosed ? n.trigger("addthis.layers.dock.show", t, this) : n.trigger("addthis.layers.dock.hide", t, this)
                },
                "addthis.layers.dock.show": function() {
                    this.show(this.dock, this.options.showAnimation, function() {
                        this.dockClosed=!1
                    }), n.removeClass("at4-dock-toggle-active", this.dockToggle)
                },
                "addthis.layers.dock.hide": function() {
                    n.addClass("at4-dock-toggle-active", this.dockToggle), this.hide(this.dock, this.options.hideAnimation, function() {
                        this.dockClosed=!0
                    })
                },
                "addthis.layers.mobilemenu.hide": r.commonEventHandlers.mobile.hideExpandedShareMenu,
                "addthis.layers.loaded": n.once(function() {
                    var e, t, i, s, o, a, l = this.basename, c = r.active_layers.addthis || {}, d = c.share || {}, h = c.follow || {};
                    n.bindEvents.call(this, {
                        '!input[type="text"],textarea,select focus': function(e, t) {
                            n.mobile() && n.hasClass("addthis-smartlayers", this.container) && (this.container.contains(t) || n.addClass(r.hideClass, this.container))
                        },
                        '!input[type="text"],textarea,select blur': function(e, t) {
                            n.mobile() && n.hasClass("addthis-smartlayers", this.container) && (this.container.contains(t) || n.removeClass(r.hideClass, this.element))
                        }
                    }), n.mobile() || (e = d.options || {}, i = e.responsive, t = h.options || {}, o = t.responsive, "mobile" === l && (i || o) && (o && (n.bindEvents.call(this, {
                        "addthis.layers.responsive.follow.show": function() {
                            i ? (s = n.getCurrentDevice(d), "mobile" === s ? (n.addClass(r.hideClass, this.followButton), n.addClass("at4-ma1", this.dock), n.removeClass("at4-ma2", this.dock)) : n.addClass(r.hideClass, this.element)) : n.addClass(r.hideClass, this.element), !this.mobile && n.isVisible(this.menu) && n.trigger("addthis.layers.mobilemenu.hide")
                        },
                        "addthis.layers.responsive.follow.hide": function() {
                            i ? (s = n.getCurrentDevice(d), "mobile" === s ? (n.removeClass(r.hideClass, this.followButton), n.removeClass("at4-ma1", this.dock), n.addClass("at4-ma2", this.dock)) : (n.removeClass(r.hideClass, this.followButton), n.addClass(r.hideClass, this.shareButton), n.addClass("at4-ma1", this.dock), n.removeClass("at4-ma2", this.dock)), n.removeClass(r.hideClass, this.element)) : (n.removeClass(r.hideClass, this.followButton), n.removeClass(r.hideClass, this.element))
                        }
                    }), a = n.getCurrentDevice(h), "mobile" === a && n.trigger("addthis.layers.responsive.follow.hide")), i && (n.bindEvents.call(this, {
                        "addthis.layers.responsive.share.show": function() {
                            o ? (a = n.getCurrentDevice(h), "mobile" === a ? (n.addClass(r.hideClass, this.shareButton), n.addClass("at4-ma1", this.dock), n.removeClass("at4-ma2", this.dock)) : n.addClass(r.hideClass, this.element)) : n.addClass(r.hideClass, this.element), !this.mobile && n.isVisible(this.menu) && n.trigger("addthis.layers.mobilemenu.hide")
                        },
                        "addthis.layers.responsive.share.hide": function() {
                            o ? (a = n.getCurrentDevice(h), "mobile" === a ? (n.removeClass(r.hideClass, this.shareButton), n.removeClass("at4-ma1", this.dock), n.addClass("at4-ma2", this.dock)) : (n.removeClass(r.hideClass, this.shareButton), n.addClass(r.hideClass, this.followButton), n.addClass("at4-ma1", this.dock), n.removeClass("at4-ma2", this.dock)), n.removeClass(r.hideClass, this.element)) : (n.removeClass(r.hideClass, this.shareButton), n.removeClass(r.hideClass, this.element))
                        }
                    }), s = n.getCurrentDevice(d), "mobile" === s && n.trigger("addthis.layers.responsive.share.hide"))))
                }),
                "addthis.keydown.esc": function() {
                    !this.mobile && n.isVisible(this.menu) && n.trigger("addthis.layers.mobilemenu.hide")
                },
                ".at4m-fwc click": function(e, t) {
                    n.trigger("addthis.layers.mobilemenu.hide");
                    var i = n.attr(t, "svc"), s = n.attr(t, "svcId"), o = this.pco, a = {
                        service: i,
                        id: s,
                        pco: o
                    };
                    "twitter" !== i || _ate.bro.mob || n.preventDefaultEvent(e), this.superMethod("follow", i, a, o)
                },
                ".at4m-shc click": function(s, o) {
                    var a = o.getAttribute("svc"), r = e.addthis_share ? i.clone(e.addthis_share): {}, l = e.addthis_config ? i.clone(e.addthis_config): {};
                    r.service = a, n.trigger("addthis.layers.mobilemenu.hide"), n.trigger("addthis.menu.share", t, r), "whatsapp" === a && (_ate.share.pws(r, l), s.preventDefault())
                },
                "!#at4m-services click": function() {
                    n.trigger("addthis.layers.mobilemenu.hide")
                },
                "#at4-searchBox keyup": n.debounce(function() {
                    if ("" === this.searchBox.value)
                        return this.superMethod("hideControl", this.searchClear), void this.generateShareServices();
                    this.superMethod("showControl", this.searchClear), this.isSearching=!0;
                    var e, t, s = this.searchBox.value.toLowerCase(), o = [];
                    this.servicesInMenu = {};
                    for (e in _ate.services.map)
                        t = _ate.services.getName(e), "" === s ? o[e] = t : (n.has(e.toLowerCase(), s) || n.has(t.toLowerCase(), s)) && o.push(e);
                    this.menuBody.innerHTML = "";
                    for (e in o)
                        if (o.hasOwnProperty(e) && this.options.services_exclude[o[e]]!==!0) {
                            var a = this.generateShareButtonJson(o[e]);
                            a && this.menuBody.appendChild(i.json2html(a))
                        }
                }, 500),
                "#at4-searchClear click": function(e) {
                    n.preventDefaultEvent(e), this.searchBox.value = "", this.generateShareServices(), this.superMethod("hideControl", this.searchClear)
                },
                "addthis.layers.mobilesharemenu.show": r.commonEventHandlers.mobile.showExpandedShareMenu,
                "addthis.layers.mobilesharemenu.hide": r.commonEventHandlers.mobile.hideExpandedShareMenu
            },
            postEvents: function() {
                var e = this;
                e.shareButton = l("#at4m-sb")[0], e.followButton = l("#at4m-fb")[0]
            },
            hideDesktopScrollbar: function() {
                this.mobile || (n.addClass("at4m-scroll-overflow", this.innerMenuBody), n.addClass("at4m-hidden-overflow", o))
            },
            showDesktopScrollbar: function() {
                this.mobile || (n.removeClass("at4m-scroll-overflow", this.innerMenuBody), n.removeClass("at4m-hidden-overflow", o))
            },
            generateJson: function() {
                var t = {}, i = [], n = {}, s = {}, o = this, a = o.basename, r = o.options || {}, l = ("mobile" === a ? r.layers.follow : r) || {}, c = ("mobile" === a ? r.layers.share : r) || {}, d = this.themes[r.buttonBarTheme] ? this.themes[r.buttonBarTheme]: r.theme ? this.themes[r.theme]: "", h = {}, u = {}, m = {}, p = {}, f = "/" === e.location.pathname || "" === e.location.pathname, g = l.__hideOnHomepage && f, v = c.__hideOnHomepage && f, b = "mobile" === a ? l.services: r.followServices;
                return r.follow===!1 || "off" === r.follow ||!b ||!b.length || (o.mobile && l.mobile===!1 ? 1 : 0) || (o.mobile || l.responsive!==!1 ? 0 : 1) || g || (u["a#at4m-fb"] = {
                    "i.at4m-dock-follow": {},
                    href: "#",
                    html: _ate._t("Follow", 96)
                }, i.push(u)), r.share===!1 || "off" === r.share ||!("mobile" !== a || "mobile" === a && o.enabledLayers.share) || (o.mobile && c.mobile===!1 ? 1 : 0) || (o.mobile || c.responsive!==!1 ? 0 : 1) || v || (h["a#at4m-sb"] = {
                    "i.at4m-dock-share": {},
                    href: "#",
                    html: _ate._t("Share", 91)
                }, i.push(h)), i.length ? (t["div#at4m-dock.at4m-dock" + this.positionClass + d + ".at4-ma" + i.length] = i, p["a#at4m-dock-toggle"] = {
                    html: "Toggle Dock",
                    href: "#"
                }, n["div.at4m-dock-toggle" + this.positionClass + d] = p, s["div#at4m-menu.at4m-menu" + d] = {
                    "div.at4m-menu-inner": [{
                        "div.at4m-menu-header": {
                            "div.at4m-menu-header-inner": {
                                "div#at4m-menu-head": _ate._t("Share", 91),
                                "a#at4m-mcc.at4m-menu-cancel": {
                                    href: "#",
                                    html: "Close"
                                }
                            }
                        }
                    }, {
                        "div#at4m-menu-body": {
                            "div#scroller": [{
                                "div.at4m-menu-search": [{
                                    input: {
                                        type: "text",
                                        placeholder: _ate._t("Find a service", 35),
                                        id: "at4-searchBox"
                                    }
                                }, {
                                    input: {
                                        type: "submit"
                                    }
                                }, {
                                    "input.at4-hide": {
                                        type: "cancel",
                                        id: "at4-searchClear"
                                    }
                                }
                                ]
                            }, {
                                "div.at4m-menu-content": {
                                    "ul#at4m-services.addthis_32x32_style": {}
                                }
                            }
                            ]
                        }
                    }, {
                        "div.at4m-menu-footer": {
                            "div.at4m-menu-footer-inner": [{
                                "a.at4m-menu-footer-logo": {
                                    href: "//www.addthis.com/?utm_source=dynmex&utm_medium=img&utm_content=AT_main_WT&utm_campaign=AT_main",
                                    target: "_blank",
                                    html: "AddThis"
                                }
                            }, {
                                "a.at4m-menu-footer-privacy": {
                                    href: "//www.addthis.com/privacy/privacy-policy",
                                    target: "_blank",
                                    html: _ate._t("Privacy", 24)
                                }
                            }
                            ]
                        }
                    }
                    ]
                }, m["div#at4m-mobile-container" + (o.showDock===!1 ? " .at-expandedmenu-component" : "")] = [t, n, s], m) : !1
            },
            generateFollowServices: function() {
                this.menuBody.innerHTML = "";
                var e = this.basename, t = "mobile" === e ? this.options.layers.follow.services: this.options.followServices, s = this;
                n.each(t, function(e, t) {
                    var n, o = t || {}, a = o.service, r = o.id, l = o.usertype, c = _ate.share.gfu(a, r, l), d = s.followServices[a], h = {}, u = {};
                    u["span.at4-icon-fw.aticon-" + a] = "", h = {
                        "li.at4m-listitem": {
                            "a.at4m-fwc": {
                                href: c,
                                target: "_blank",
                                svc: a,
                                svcId: r,
                                title: d,
                                div: [u, {
                                    "span.at4-label.atservice": d
                                }, {
                                    "span.at4-arrow": "&gt;"
                                }
                                ]
                            }
                        }
                    }, n = s.menuBody.appendChild(i.json2html(h)), "twitter" === a && (n.children[0].conf = {
                        follow: !0
                    })
                })
            },
            generateShareServices: function() {
                var e = this, t = [];
                this.servicesInMenu = {}, this.serviceListPos = 0, this.isSearching=!1, this.searchBox.value = "", this.menuBody.innerHTML = "", this.services || (this.services = []), n.each(_ate.services.map, function(i) {
                    e.options.services_exclude[i]!==!0 && t.push(i)
                }), t = t.sort(), this.services = this.services.concat(t), n.each(this.services, function(t, n) {
                    if (e.options.services_exclude[n]!==!0) {
                        var s = e.generateShareButtonJson(n);
                        s && e.menuBody.appendChild(i.json2html(s))
                    }
                })
            },
            generateShareButtonJson: function(t) {
                var n, s = {}, o = {}, a = e.addthis_config ? i.clone(e.addthis_config): {}, r = e.addthis_share ? i.clone(e.addthis_share): {}, l = _ate.share.genurl(t, 0, r, a);
                return "email" === t && (l = _ate.share.genieu(r, a, 0)), !_ate.services.exists(t) || this.servicesInMenu[t] || this.serviceBlacklist[t] || this.mobileBlacklist[t]?!1 : (o["span.at4-icon.aticon-" + t] = "", n = _ate.services.getName(t), s = {
                    "li.at4m-listitem": {
                        "a.at4m-shc": {
                            href: l,
                            target: "_blank",
                            svc: t,
                            title: n,
                            div: [o, {
                                "span.at4-label.atservice": n
                            }, {
                                "span.at4-arrow": "&gt;"
                            }
                            ]
                        }
                    }
                }, this.servicesInMenu[t]=!0, s)
            }
        })
    }(a.utils, a.setup, a.common, a.qwery), a.dock = function(e, t) {
        return t.addthisWidget("dock", {
            inheritsFrom: "mobile"
        })
    }(a.utils, a.setup, a.common, a.iscroll, a.qwery, a.mobile), a.recommended = function(e, t, n, s) {
        return t.addthisWidget("recommended", {
            pco: "smlre-1.0",
            element: "#at4-recommended",
            device: "both",
            async: !0,
            requiresData: !0,
            status: "open",
            prerender: function() {
                var e = {};
                return e["#at4-" + this.basename + "-outer-container.at4-" + this.basename + "-outer-container"] = "", i.json2html(e)
            },
            render: function() {
                return this.queueTrending(this.options.pubid, this.options.domain, function() {
                    this.superMethod("render")
                }), this
            },
            generateJson: function() {
                if ("recommendedbox" !== this.name ||!e.isElement(this.parentElement.parentNode) || this.parentElement.parentNode.__containsRecommended__!==!0) {
                    "recommendedbox" === this.name && e.isElement(this.parentElement.parentNode) && (this.parentElement.parentNode.__containsRecommended__=!0);
                    var t = this, a = t.options, r = a.title || "", l = a.promotedUrls, c = this.superMethod("containsSponsored", l), d = "medium" === a.size ? ".at-medium": "", h = this.inlineClass ? ".at-inline": "", u = parseInt(a.numrows, 10) || 1, m = t.maxitems = function() {
                        var n, r, l, c, u, m, p = a.maxitems, f = {};
                        return e.isString(p)&&!parseInt(p) ? "vertical" === a.orientation ? (r = t.parentElement.offsetHeight, 3 > r ? 4 : (f[t.element + ".temp-elem.at4-recommended" + d + h] = {
                            ".at4-recommended-container.at4-recommended-vertical": {
                                ".at4-recommended-item": ""
                            }
                        }, m = i.json2html(f), o.appendChild(m), c = s(".temp-elem.at4-recommended" + d + h + " .at4-recommended-vertical .at4-recommended-item")[0], u = c.offsetHeight, m.parentElement.removeChild(m), e.isElement(m) && e.isElement(m.parentNode) && m.parentNode.removeChild(m), u > r ? 4 : Math.floor(r / u))) : (n = t.parentElement.offsetWidth, f[t.element + ".temp-elem.at4-recommended" + d + h] = {
                            ".at4-recommended-container.at4-recommended-horizontal": {
                                ".at4-recommended-item": ""
                            }
                        }, m = i.json2html(f), o.appendChild(m), c = s(".temp-elem.at4-recommended" + d + h + " .at4-recommended-horizontal .at4-recommended-item")[0], l = c.offsetWidth, e.isElement(m) && e.isElement(m.parentNode) && m.parentNode.removeChild(m), l > n ? 4 : Math.floor(n / l)) : e.isNumber(parseInt(p)) ? a.maxitems : void 0
                    }(), p = function() {
                        return "vertical" === a.orientation ? ".at4-recommended-vertical" : ".at4-recommended-horizontal"
                    }(), f = ".at4-recommended-" + this.name + (this.options.textonly===!0 || "true" === this.options.textonly ? " .at4-recommended-text-only" : ""), g = p + "-logo", v = t.trendingLinksJson = this.superMethod("generateTrendingJson", this.pco, m * u), b = {
                        role: "region",
                        "aria-labelledby": "at-recommended-label"
                    }, w = {}, y = {}, _ = n.themes[a.theme] ? n.themes[a.theme]: "", C = t.position ? "right" === t.position ? ".at4-" + t.basename + "-right": ".at4-" + t.basename + "-left": "", S = "right" === t.position ? "at-right": "at-left", x = a.animationType ? "." + t.basename + "-" + a.animationType: "", k = {}, E = {}, T = {}, A = "left" === this.position ? "right": "left", O = [], j = "";
                    if (v && v.length) {
                        c && (j = "Sponsored content by", 0 === this.pco.indexOf("smlres") && (r = "Promoted Content")), r ? b["div.at-h3.at-recommended-label" + ("vertical" === a.orientation ? ".at-vertical" : "")] = {
                            html: r
                        } : b["div.at-h3.at-recommended-label." + n.hiddenClass] = {
                            html: "AddThis Recommended"
                        }, t.showCloseButton===!0 && (b["button.at4-closebutton." + t.basename + "-close"] = {
                            html: "x",
                            title: "Close"
                        });
                        for (var F = 0; u > F; F++)
                            b[".at4-recommended-container" + p + " at4-item-" + F] = v.slice(F * m, (F + 1) * m);
                        b[".at-logo" + g] = {
                            ".at4-logo-container": {
                                "a.at-sponsored-link": {
                                    href: "//www.addthis.com/?utm_source=dyntr&utm_medium=img&utm_content=AT_main_WT&utm_campaign=AT_main",
                                    target: "_blank",
                                    html: j
                                },
                                "a#at-privacy.at4-logo": {
                                    href: "//www.addthis.com/?utm_source=dyntr&utm_medium=img&utm_content=AT_main_WT&utm_campaign=AT_main",
                                    target: "_blank",
                                    html: "AddThis"
                                }
                            }
                        }, t.closeControl && (k[".at4-arrow.at-" + t.position] = {
                            title: "Close"
                        }, b["#at4-" + t.basename + "-close-control.at4-recommendedside-control." + n.hideClass] = k), w[this.elementSelector + ".at4-recommended." + S + x + _ + f + d + h] = b, _ate.track.avp(this.elementSelector, this.pco, "ttnl=" + m)
                    } else 
                        w.div = "";
                    return t.openControl && (E[".at4-arrow.at-" + A] = {
                        title: "Open"
                    }, T["#at4-" + t.basename + "-open-control.at4-recommendedside-control." + n.hideClass + _] = E), T = e.isEmptyObject(T)?!1 : T, T!==!1 && O.push(T), O.push(w), y[".at4-" + t.basename + "-outer" + C] = O, y
                }
            },
            imageResizing: function(e) {
                var t = this, i = s(t.elementSelector + " .at-recommendedTitle"), n = s(t.elementSelector + " .at-tli");
                t.superMethod("imageResizer", i, n, e)
            }
        })
    }(a.utils, a.setup, a.common, a.qwery), a.drawer = function(e, n, o, a, r) {
        return n.addthisWidget("drawer", {
            device: "desktop",
            plugin: !0,
            showPlaceholderImages: !1,
            requiresImage: !0,
            status: "closed",
            pco: "cod-1.0",
            element: "#at-drawer",
            inheritsFrom: "recommended",
            openControl: "#at-drawer-arrow",
            showCloseButton: !0,
            prerender: function() {
                var t = this, n = t.options, a = {}, r = {}, l = o.themes[n.theme] ? o.themes[n.theme]: "", c = "left" === this.position ? ".at4-drawer-left": ".at4-drawer-right", d = _ate.bro.ie6 || _ate.bro.ie7 || _ate.bro.ie8, h = "left" === this.position ? d ? "right": "left": d ? "left": "right", u = ".at-" + h, m = ".at4-drawer-inline", p = d ? ".at4-drawer-old-browsers": ".at4-drawer-modern-browsers", f = "#at-drawer-arrow" + u + "." + o.hideClass + p + l;
                return r[f] = {
                    "div#at-drawer-open-arrow": ""
                }, e.isString(n.elements) && n.elements.length ? a["#at4-drawer-outer-container" + c + m + l] = r : (a["#at4-drawer-outer-container" + c + l] = "", s.body.appendChild(i.json2html(r))), i.json2html(a)
            },
            events: {
                ".at4-recommended-div-item mouseover": function(t, i) {
                    e.addClass("at-hover", i)
                },
                ".at4-recommended-div-item mouseout": function(t, i) {
                    e.removeClass("at-hover", i)
                },
                "!#at-drawer-arrow mouseenter": function() {
                    this.showdrawer()
                },
                "!#at-drawer-arrow click": function() {
                    this.showdrawer()
                },
                ".drawer-close click": function(e, t) {
                    this.hidedrawer(), t.blur()
                },
                mouseleave: function() {
                    this.hidedrawer()
                },
                "addthis.keydown.esc": function() {
                    this.hidedrawer()
                },
                "addthis.layers.drawer.show": function() {
                    this.showdrawer()
                }
            },
            showdrawer: function() {
                var i = this, n = i.options, s = i.element, l = a("html")[0], c = (n.animationType, i.position), d = "left" === c ? "right": "left", h = o.active_layers.addthis, u = h ? h.whatsnext: !1, m = h ? h.toaster: !1;
                "right" === c && u && e.trigger("addthis.layers.whatsnext.hide", t, this), "right" === c && m && e.trigger("addthis.layers.toaster.hide", t, this), e.addClass("at4-drawer-shown", i.container), e.addClass(o.hideClass, i.openControl), "push" === n.animationType ? r(function() {
                    e.isElement(l) && (e.addClass("at4-drawer-push-animation-" + c, l), e.addClass("at4-drawer-push-content-" + c + "-back", l), e.requestTimeout(function() {
                        e.addClass("at4-drawer-push-content-" + d, l)
                    }, 0)), e.removeClass(o.hideClass, s), e.removeClass("at4-drawer-push-animation-" + c, s), e.removeClass("at4-drawer-push-animation-" + c + "-back", s), e.requestTimeout(function() {
                        e.addClass("at4-drawer-push-animation-" + c, s)
                    }, 0)
                }) : i.show(i.element, n.showAnimation), o.drawerIsVisible=!0, _ate.track.avpc(this.pco, "ttnl=" + i.options.maxitems)
            },
            hidedrawer: function() {
                var t = this, i = t.options, n = t.element, s = t.openControl, l = a("html")[0], c = (i.animationType, t.position), d = (o.hideClass, "left" === c ? "right" : "left");
                "push" === i.animationType ? r(function() {
                    e.isElement(l) && (e.addClass("at4-drawer-push-content-" + c + "-back", l), e.requestTimeout(function() {
                        e.removeClass("at4-drawer-push-content-" + d, l)
                    }, 0)), e.requestTimeout(function() {
                        e.addClass("at4-drawer-push-animation-" + c + "-back", n)
                    }, 0), t.show(s)
                }) : t.hide(n, i.hideAnimation, function() {
                    t.show(s)
                }), e.requestTimeout(function() {
                    e.removeClass("at4-drawer-shown", t.container)
                }, 600), o.drawerIsVisible=!1
            }
        })
    }(a.utils, a.setup, a.common, a.qwery, a.rAF, a.recommended), a.follow = function(e, i, n) {
        return i.addthisWidget("follow", {
            create: function() {
                var t = this, i = t.options ||!1;
                return e.isPlainObject(i.services) && (i.services = e.toArray(i.services)), i && i.services && i.services.length || (t.status = "disabled"), t.superMethod("create"), this
            },
            isFollowLayer: !0,
            device: "desktop",
            pco: "smlfw-1.0",
            status: "open",
            locked: !1,
            plugin: !0,
            element: "#at4-follow",
            closeControl: "#at4-fcc",
            openControl: "#at4-foc",
            events: {
                "!.at4-follow-outer mouseenter": function() {
                    this.showControl(this.closeControl)
                },
                "!.at4-follow-outer mouseleave": function() {
                    this.hideControl(this.closeControl)
                },
                "!#at4-fcc click": function(i) {
                    e.trigger("addthis.layers.follow.hide", t, this), this.locked=!0, e.preventDefaultEvent(i)
                },
                "!#at4-foc click": function(i) {
                    e.trigger("addthis.layers.follow.show", t, this), this.locked=!0, e.preventDefaultEvent(i)
                },
                "addthis.layers.follow.show": function() {
                    var e = this, t = e.options;
                    e.hide(e.openControl, t.hideAnimation), e.show(), e.status = "open"
                },
                "addthis.layers.follow.hide": function() {
                    var e = this, t = e.options;
                    e.hide(), e.show(e.openControl, t.showAnimation), e.status = "closed"
                },
                ".at-follow-btn keydown": function(t, i) {
                    if ("enter" === e.KEYCODES[t.keyCode]) {
                        var n = this.events[".at-follow-btn click"].call(this, t, i.childNodes[0]);
                        "twitter" === n.svc && e.preventDefaultEvent(t)
                    }
                },
                ".at-follow-btn click": function(t, i) {
                    var n = e.attr(i.childNodes[0], "svc"), s = e.attr(i.childNodes[0], "svcId"), o = this.pco, a = {
                        service: n,
                        id: s,
                        pco: o
                    };
                    return this.superMethod("follow", n, a, o), "twitter" === n && e.preventDefaultEvent(t), a
                }
            },
            generateJson: function() {
                var t, i, s = {}, o = [], a = [], r = {}, l = {}, c = this.options || {}, d = this.themes[c.theme] ? this.themes[c.theme]: "", h = e.filter(c.services, function(e) {
                    return e && e.id && e.service ? e : void 0
                });
                if (!h ||!h.length)
                    return !1;
                r["div#at4-foc.at-follow-open-control" + d + "." + n.hideClass] = {
                    "div.at4-arrow.at-left": {
                        html: "Show",
                        title: "Show"
                    }
                }, l["div#at4-fcc.at4-arrow.at-right"] = {
                    html: "Hide",
                    title: "Hide"
                }, o.push({
                    "div#at4-fcc.at4-follow-close-control": l
                }), c.title && a.push({
                    "span.at-follow-label": c.title
                });
                for (i in h)
                    if (h.hasOwnProperty(i)) {
                        var u = {}, m = h[i].service, p = h[i].id, f = h[i].usertype, g = _ate.share.gfu(m, p, f), v = e.isIEQuirksMode() ? "q": "";
                        m && p && g && (u["span.at4-icon-fw.aticon-" + m + v] = {
                            html: this.followServices[m] || "",
                            svc: m,
                            svcId: p,
                            title: "Follow on " + this.followServices[m]
                        }, "rss" === m ? (u.href = 0 !== p.indexOf("http") ? "http://" + p : p, u.target = "_blank") : "twitter" !== m ? (u.href = g, u.target = "_blank") : u.href = "//twitter.com/" + p, a.push({
                            "a.aticon.at-follow-btn": u
                        }))
                    }
                return o.push({
                    "div.at4-follow-container.addthis_24x24_style": a
                }), s["div#at4-follow.at4-follow.at4-follow-24" + d] = {
                    role: "region",
                    "aria-labelledby": "at4-follow-label",
                    "div#at4-follow-label": {
                        html: "Follow"
                    },
                    "div.at4-follow-inner": o
                }, t = [s, r], {
                    "div.at4-follow-outer": t
                }
            }
        })
    }(a.utils, a.setup, a.common, a.qwery), a.followcounter = function(e, t) {
        return t.addthisWidget("followcounter", {
            create: function() {
                this.superMethod("create");
                var t = [];
                this.options && this.options.services && e.each(this.options.services, function(e, i) {
                    t.push(i.service)
                }), this.superMethod("getServiceCSS", t)
            },
            isFollowLayer: !0,
            pco: "flwc-1.0",
            device: "both",
            element: "#atfc",
            services: [],
            personalized: !0,
            multipleCalls: !0,
            inline: !0,
            showOnLoad: !0,
            sizeClass: {
                small: "addthis_16x16_style",
                medium: "addthis_20x20_style",
                large: "addthis_32x32_style"
            },
            servicesMap: {
                facebook: "Fb",
                twitter: "Tw",
                youtube: "Yt",
                vimeo: "Vm",
                google_follow: "Gp",
                flickr: "Fl",
                instagram: "In",
                etsy: "Et",
                disqus: "Di"
            },
            counts: {},
            counterRefs: {},
            generateElement: function() {
                var t = this, i = this.options || {}, n = i.size || "large", s = i.shape || "round", o = this.themes[i.theme] ? this.themes[i.theme].substring(1): "", a = "round" === s && "custom" === o ? "circular": "rounded" === s && "custom" === o ? "rounded": "", r=!(_ate.bro.ie6 || _ate.bro.ie7 || e.isIEQuirksMode() || i.counts!==!0 && "true" !== i.counts), l = i.services || [], c = this.sizeClass[n], d = function(i) {
                    var n = "http://api-public.addthis.com/url/serviceapi.json", s = "";
                    e.each(i, function(e, i) {
                        var n = "f" + t.servicesMap[i.service], o = i.id, a = s.length ? "&": "?", r = "google_follow" === i.service ? "%2B": "";
                        r && "+" === o.substr(0, 1) && (o = o.substr(1)), n && o && (s += a + n + "=" + r + o)
                    }), t._getFollowCount(n + s, h)
                }, h = function(i) {
                    e.each(i, function(i, n) {
                        var s, o = i.substr(1);
                        e.each(t.servicesMap, function(e, i) {
                            o === i && (s = t.counterRefs[e].element, s.innerText ? s.innerText = n : s.textContent = n)
                        })
                    })
                }, u = e.emdot;
                return l = e.filter(l, function(e) {
                    if (e.id && e.service) {
                        var t = e.service, i = e.id, n = _ate.services.getName(t), s = e.usertype, o = _ate.share.gfu(t, i, s);
                        return t && i && o ? (e.svc = e.service, e.name = n, e.url = o, !0) : !1
                    }
                }), r && d(l), l.length ? u.div(u.div(this.options.title).id("at4-follow-counter-label"), u.div(u(l, function(e) {
                    var i = r ? u.span(0).css("at_flat_counter"): null;
                    return t.counterRefs[e.svc] = i, u.a(u.span(u.span("Follow on " + e.name).css("at_a11y")).css("at300bs at15nc at15t_" + e.svc), i).css("addthis_button_" + e.svc + "_follow at300b").data("svc", e.svc).data("svc-id", e.id).attr("title", "Follow on " + e.name).attr("href", "twitter" === e.svc ? _ate.share.gfu(e.svc, e.id, e.usertype) : e.url).attr("target", "_blank")
                }), u.div().css("atclear")).css("addthis_counter", "addthis_default_style", a)).id(this.element.substring(1)).css("at-follow-counter-element", o, c).element : null
            },
            _getFollowCount: function(e, t) {
                _ate.ajs(e + "&callback=" + _ate.util.scb("fc", e, t), 1)
            },
            events: {
                "a click": function(t, i) {
                    var n = e.attr(i, "data-svc"), s = e.attr(i, "data-svc-id"), o = this.pco, a = {
                        service: n,
                        id: s,
                        pco: o
                    };
                    return this.superMethod("follow", n, a, o), "twitter" !== n || _ate.bro.mob || e.preventDefaultEvent(t), a
                }
            }
        })
    }(a.utils, a.setup), a.followtoolbox = function(e, t, i, n) {
        return t.addthisWidget("followtoolbox", {
            create: function() {
                this.superMethod("create");
                var t = [];
                this.options && this.options.services && e.each(this.options.services, function(e, i) {
                    t.push(i.service)
                }), this.superMethod("getServiceCSS", t)
            },
            isFollowLayer: !0,
            pco: "flwh-1.0",
            device: "both",
            element: "#atftbx",
            services: [],
            personalized: !0,
            multipleCalls: !0,
            inline: !0,
            showOnLoad: !0,
            sizeClass: {
                small: "addthis_16x16_style",
                medium: "addthis_20x20_style",
                large: "addthis_32x32_style"
            },
            orientationClass: {
                horizontal: "addthis_default_style",
                vertical: "addthis_vertical_style"
            },
            generateElement: function() {
                var t, i = this.options || {}, s = i.orientation || "horizontal", o = i.size || "large", a = i.shape || "round", r = i.theme, l = "round" === a && "custom" === r ? "circular": "rounded" === a && "custom" === r ? "rounded": "", c = i.background || "#666", d = "at" + this.name + "bg", h = i.services || [], u = this.sizeClass[o], m = this.orientationClass[s], p = e.emdot;
                if (h = e.filter(h, function(e) {
                    if (e.id && e.service) {
                        var t = e.service, i = e.id, n = _ate.services.getName(t), s = e.usertype, o = _ate.share.gfu(t, i, s);
                        return t && i && o ? (e.svc = e.service, e.name = n, e.url = o, !0) : !1
                    }
                }), "vertical" === s && (this.pco = this.pco.replace("flwh", "flwv")), "custom" === r) {
                    for (this.pco = "c" + this.pco, u = "addthis_32x32_white_style", t = n("#" + d); t && t.length;) {
                        var f = t.pop();
                        f.parentElement.removeChild(f)
                    }
                    e.updateStyleSheet(".at-follow-tbx-element ." + u + " .at15nc.at300bs {background-color:" + c + "}", d)
                }
                return p.div(p.p(p.span(this.options.title)), p.div(p(h, function(e) {
                    return p.a(p.span(p.span("Follow on " + e.name).css("at_a11y")).css("at300bs at15nc at15t_" + e.svc), p.span(e.name).css("addthis_follow_label")).css("addthis_button_" + e.svc + "_follow at300b").data("svc", e.svc).data("svc-id", e.id).attr("title", "Follow on " + e.name).attr("href", "twitter" === e.svc ? _ate.share.gfu(e.svc, e.id, e.usertype) : e.url).attr("target", "_blank")
                }), p.div().css("atclear")).css("addthis_toolbox", m, u, l)).id(this.element.substring(1)).css("at-follow-tbx-element").element
            },
            events: {
                "a click": function(t, i) {
                    var n = e.attr(i, "data-svc"), s = e.attr(i, "data-svc-id"), o = this.pco, a = {
                        service: n,
                        id: s,
                        pco: o
                    };
                    return this.superMethod("follow", n, a, o), "twitter" !== n || e.mobile() || (e.preventDefaultEvent(t), e.stopEventPropagationImmediately(t)), a
                }
            }
        })
    }(a.utils, a.setup, a.common, a.qwery), a.GradualCount = function(e) {
        var t = function(e) {
            e = e || {}, this.start = parseInt(e.start, 10) || 0, this.current = this.start, this.end = parseInt(e.end, 10) || 0, this.duration = e.duration || 1e3, this.listeners = {}, this.startTime = (new Date).getTime(), this.step()
        };
        return t.prototype.step = function() {
            var t = this;
            e(function() {
                var e = (new Date).getTime(), i = e - t.startTime;
                t.current = Math.min(t.end, i / t.duration * t.end), t.trigger("step", t.current), t.current != t.end ? t.step() : t.trigger("done", t.current)
            })
        }, t.prototype.on = function(e, t) {
            this.listeners[e] === n ? this.listeners[e] = [t] : this.listeners[e].push(t)
        }, t.prototype.off = function(e, t) {
            t === n ? this.listeners[e] = [] : this.listeners[e] && this.listeners[e].splice(this.listeners[e].indexOf(t), 1)
        }, t.prototype.trigger = function(e) {
            var t, i = Array.prototype.slice.call(arguments, 1);
            if (this.listeners[e])
                for (t = 0; t < this.listeners[e].length; t++)
                    this.listeners[e][t].apply(this, i)
        }, t
    }(a.rAF), a.share = function(i, n, o, a) {
        return n.addthisWidget("share", {
            create: function() {
                var t = this.options, n = function() {
                    return e.addthis_config && i.isPlainObject(e.addthis_config) ? e.addthis_config.services_exclude || "" : ""
                }(), s = {};
                return this.superMethod("create"), t.services ? (this.personalized=!1, this.services = t.services.replace(/ /g, "").split(","), t.numPreferredServices = this.services.length) : this.services = this.preferredServices, this.superMethod("getServiceCSS", this.services), i.isString(n) && (n = n.split(","), i.each(n, function(e, t) {
                    t = i.trim(t), s[t]=!0
                }), this.options.services_exclude = s), this
            },
            pco: "smlsh-1.0",
            device: "desktop",
            status: "open",
            element: "#at4-share",
            closeControl: "#at4-scc",
            openControl: "#at4-soc",
            controlContainer: ".at-share-close-control",
            position: "left",
            services: [],
            personalized: !0,
            hideClass: "at4-hide-content",
            showClass: "at4-show-content",
            events: {
                mouseover: function() {
                    this.showControl(this.closeControl, this.controlContainer)
                },
                mouseout: function() {
                    this.hideControl(this.closeControl, this.controlContainer)
                },
                "#at4-scc click": function(e) {
                    _ate.ed.fire("addthis.layers.share.hide", t, this), i.preventDefaultEvent(e)
                },
                "!#at4-soc click": function(e) {
                    _ate.ed.fire("addthis.layers.share.show", t, this), i.preventDefaultEvent(e)
                },
                "addthis.layers.share.show": function() {
                    this.hide(this.openControl, this.options.hideAnimation), this.show(), this.status = "open"
                },
                "addthis.layers.share.hide": function() {
                    this.hide(), this.show(this.openControl, this.options.showAnimation), this.status = "closed"
                },
                ".at4-share-btn click": o.commonEventHandlers.share.buttonClick
            },
            generateElement: function() {
                var e, t, n, s = this.getShareServices(), o = this.options || {}, a = this.themes[o.theme] ? this.themes[o.theme].substring(1): "", r = "right" === this.position, l = r ? "left": "right", c = "atss", d = r ? c + "-right": c + "-left", h=!(_ate.bro.ie6 || _ate.bro.ie7 || i.isIEQuirksMode() || o.counts!==!0 && "true" !== o.counts), u = this.hideClass, m = this.options.label || this.options.title, p = this.position.toLowerCase(), f = this.openControl.substring(1), g = this.closeControl.substring(1), v = this, b = i.emdot;
                return i.each(s, function(e, t) {
                    v.shownServices || (v.shownServices = []), v.shownServices.push(t.svc)
                }), e = b.div(b.div("Show").css("at4-arrow", "at-" + l)).id(f).css("at-share-open-control-" + p, a, "at4-hide").attr("title", "Show"), t = b.div(b.div("Hide").css("at4-arrow", "at-" + p)).id(g).css("at-share-close-control", a, u, "at4-show").attr("title", "Hide"), n = b(s, function(e) {
                    var t = e.svc, n = e.name, s = h && i.shareCounters.requests.services[t];
                    return b.a(b.span(n).css("at300bs", "at15nc", "at15t_" + t).attr("title", n), s ? b.div(b.span().css("at4-share-count")).css("at4-share-count-container", u) : null).css("at4-share-btn", "at-svc-" + t).attr("href", "#")
                }), b.div(b.div("AddThis Sharing").id("at4-share-label"), b.div(m ? b.div(m).css("at4-share-title") : null, n, t).id("at4-share").css("addthis_32x32_style", c, d), e).css("at4-share-outer" + (r ? "-right" : "")).attr("aria-labelledby", "at4-share-label").attr("role", "region").element
            },
            renderShareCounts: function(e) {
                var t, n, o, r, l = this, c = this.hideClass, d = l.elementSelector, h = {
                    compact: "addthis",
                    addthis: "compact",
                    pinterest: "pinterest_share",
                    pinterest_share: "pinterest"
                };
                i.each(e, function(e, r) {
                    t = r.service, n = r.count, i.isString(t) && t.length && i.isNumber(n) && n > 0 && (element = a(d + " .at-svc-" + t + " .at4-share-count")[0], !element && h[t] && (element = a(d + " .at-svc-" + h[t] + " .at4-share-count")[0]), i.isElement(element) && (o = _ate.util.parent(element, ".at4-share-btn"), o !== s && o !== s.body && i.isElement(o) && i.addClass("at4-share-count-anchor", o), element.appendChild(s.createTextNode(i.truncateCount(n)))))
                }), r = a(d + " .at4-share-count-container"), r.length && i.each(r, function(e, t) {
                    i.removeClass(c, t), l.show(t, "fadeIn", function() {
                        i.removeClass("fadeIn", t)
                    })
                })
            }
        })
    }(a.utils, a.setup, a.common, a.qwery), a.jumboshare = function(e, t, i, n, s, o, a) {
        return t.addthisWidget("jumboshare", {
            create: function() {
                var e = new _ate.resource.Resource("widgetWhite32CSS", _atc.rsrcs.widgetWhite32CSS);
                e.load(), a.create.call(this)
            },
            pco: "jsc-1.0",
            device: "both",
            basename: "jumboshare",
            element: "#at-jumboshare",
            mobileClass: "at4-mobile",
            services: [],
            shownServices: [],
            inline: !0,
            showOnLoad: !0,
            multipleCalls: !0,
            personalized: !0,
            events: {
                ".at4-share-btn click": i.commonEventHandlers.share.buttonClick,
                "addthis.layers.resize": function() {
                    "jumboshare" === this.basename && ("desktop" === e.getCurrentDevice(this) && e.hasClass(this.mobileClass, this.element) ? e.removeClass(this.mobileClass, this.element) : "mobile" !== e.getCurrentDevice(this) || e.hasClass(this.mobileClass, this.element) || e.addClass(this.mobileClass, this.element))
                },
                ".at-svc-compact.at4-share-btn mouseover": function() {
                    i.commonEventHandlers.share.showCompactMenu.apply(this, arguments)
                },
                "!.at-svc-compact.at4-share-btn mouseleave": function() {
                    i.commonEventHandlers.share.hideCompactMenu.apply(this, arguments)
                }
            },
            generateElement: function() {
                var t = this.options || {}, i = t.color || "#555B64", n = this.elementSelector.substring(1), o = "at-" + e.generateUUID(), a = this.options.label || this.options.title, r = "mobile" === e.getCurrentDevice(this) ? this.mobileClass: "";
                return this.shownServices = [], e.each(this.getShareServices(), function(e, t) {
                    this.shownServices.push(t)
                }, this), this.counter = s.span(0).element, this.spacer = s.span(0).css("at4-spacer").element, s.div(s.div(s.div("AddThis Sharing").id(o).css("at4-hide"), s.table(s.tr(s.td(s.div(this.spacer, this.counter).css("at4-count").style("color:" + i), s.div(a).css("at4-title").style("color:" + i)).css("at4-count-container"), s.td(s(this.shownServices, function(e) {
                    return s.a(s.span().css("at15nc", "at300bs", "at15t_" + e.svc), s.span(e.name).css("label").title(e.name)).css("at4-share-btn", "at-svc-" + e.svc).href("#")
                })).css("addthis_32x32_white_style", "at4-share-container")))).id(n).css(r)).css("at4-jumboshare").aria("labelledby", o).role("region").element
            },
            renderShareCounts: function(t) {
                var i, n, s = 0, a = this;
                for (e.each(t, function(e, t) {
                    t.error || (s += Number(t.count))
                }), i = document.createTextNode("88.8K"); a.spacer.firstChild;)
                    a.spacer.removeChild(a.spacer.firstChild);
                a.spacer.appendChild(i), n = new o({
                    end: s
                }), n.on("step", function(t) {
                    for (var i = document.createTextNode(e.truncateCount(t)); a.counter.firstChild;)
                        a.counter.removeChild(a.counter.firstChild);
                    a.counter.appendChild(i)
                })
            }
        })
    }(a.utils, a.setup, a.common, a.qwery, a.emdot, a.GradualCount, a.share), a.recommendedbox = function(e, t) {
        return t.addthisWidget("recommendedbox", {
            create: function() {
                var e = this.options || {}, t = e.orientation;
                "vertical" === t && (this.pco = "smlrebv-1.0", this.options.size = "large"), this.superMethod("create")
            },
            pco: "smlrebh-1.0",
            element: "#at4-recommendedbox",
            inheritsFrom: "recommended",
            multipleCalls: !0,
            plugin: !0,
            inline: !0,
            inlineClass: "addthis-recommendedbox",
            events: {
                "addthis.recommendedbox.destroy": function() {
                    this.parentElement.__containsRecommended__=!1
                }
            }
        })
    }(a.utils, a.setup, a.common, a.qwery, a.recommended), a.recommendedjumbo = function(e, t, n, s, o) {
        return t.addthisWidget("recommendedjumbo", {
            pco: "jrcf-1.0",
            device: "both",
            basename: "recommendedjumbo",
            element: "#at-recommendedjumbo",
            async: !0,
            requiresData: !0,
            status: "open",
            mobileClass: "at-mobile",
            hasFeed: !1,
            events: {
                "addthis.layers.resize": function() {
                    "desktop" === e.getCurrentDevice(this) && e.hasClass(this.mobileClass, this.element) ? e.removeClass(this.mobileClass, this.element) : "mobile" !== e.getCurrentDevice(this) || e.hasClass(this.mobileClass, this.element) || e.addClass(this.mobileClass, this.element), this.imageResizing()
                }
            },
            prerender: function() {
                var e = {};
                return e["#at-" + this.basename + "-outer-container.at-" + this.basename + "-outer-container"] = "", i.json2html(e)
            },
            render: function() {
                return this.queueTrending(this.options.pubid, this.options.domain, function() {
                    this.superMethod("render")
                }), this
            },
            generateElement: function() {
                var t = this.element.substring(1), i = this.options.title || "", n = "//www.addthis.com/?utm_source=jrcf&utm_medium=img&utm_content=AT_main_WT&utm_campaign=AT_main", s = "mobile" === e.getCurrentDevice(this) ? this.mobileClass: "", a = this.superMethod("getNormalizedFeedItems", 1), r = null;
                if (this.hasFeed = a.length > 0, this.hasFeed) {
                    var l = a[0], c = l.isSponsored ? "Sponsored content by": "";
                    r = o.div(o.div(o.a(o.img().src(l.image).id("at-recommendedjumbo-footer-bg")).id("bg-link").href(l.url), o.div(o.div(o.div(i).id("at-recommendedjumbo-label").title(i)).css("at-recommendedjumbo-footer-inner").id("at-recommendedjumbo-label-holder"), o.div(o.div(o.a(l.title).href(l.url)).title(l.title).id("at-recommendedjumbo-content-title")).css("at-recommendedjumbo-footer-inner").id("at-recommendedjumbo-title-holder"), o.small(l.domain).css("at-recommendedjumbo-footer-inner")).id("at-recommendedjumbo-top-holder"), o.div(o.a(c).css("at-sponsored-link").href(n).target("_blank"), o.a("AddThis").id("at-recommendedjumbo-logo-link").css("at4-logo").href(n).target("_blank")).css("at-recommendedjumbo-footer-inner at-logo-container")).css("at-recommendedjumbo-footer")).id(t).css("at-recommendedjumbo " + s).element
                }
                return r
            },
            imageResizing: function(e) {
                if (this.hasFeed) {
                    var t = this, i = s(t.elementSelector + " #at-recommendedjumbo-content-title")[0], n = s(t.elementSelector + " #at-recommendedjumbo-title-holder")[0], o = s(t.elementSelector + " #at-recommendedjumbo-content-title a")[0], a = s(t.elementSelector + " #at-recommendedjumbo-label")[0], r = s(t.elementSelector + " #at-recommendedjumbo-label-holder")[0], l = s(t.elementSelector + " #at-recommendedjumbo-footer-bg")[0], c = function(e) {
                        return e.offsetWidth > 0
                    };
                    t.superMethod("titleResizer", a, r, c), t.superMethod("titleResizer", i, n, c, o), l.__imageloaded__ ? t.superMethod("resizeTrendingImage", l) : t.superMethod("imageResizer", [], [l], e)
                }
            }
        })
    }(a.utils, a.setup, a.common, a.qwery, a.emdot), a.recommendedside = function(e, i) {
        return i.addthisWidget("recommendedside", {
            device: "desktop",
            plugin: !0,
            position: "right",
            showPlaceholderImages: !1,
            requiresImage: !0,
            pco: "smlres-1.0",
            element: "#at-recommendedside",
            inheritsFrom: "recommended",
            closeControl: "#at4-recommendedside-close-control",
            openControl: "#at4-recommendedside-open-control",
            events: {
                "!#at4-recommendedside-close-control mouseenter": function() {
                    this.showControl(this.closeControl)
                },
                ".at-tli mouseover": function() {
                    this.showControl(this.closeControl)
                },
                ".at4-logo-container mouseover": function() {
                    this.showControl(this.closeControl)
                },
                ".at-recommended-label mouseover": function() {
                    this.showControl(this.closeControl)
                },
                mouseleave: function() {
                    this.hideControl(this.closeControl)
                },
                "!.at4-recommended-item mouseleave": function() {
                    this.hideControl(this.closeControl)
                },
                "!.at-recommended-label mouseleave": function() {
                    this.hideControl(this.closeControl)
                },
                "#at4-recommendedside-close-control click": function() {
                    _ate.ed.fire("addthis.layers.recommendedside.hide", t, this)
                },
                "!#at4-recommendedside-open-control click": function() {
                    _ate.ed.fire("addthis.layers.recommendedside.show", t, this)
                },
                "addthis.layers.recommendedside.show": function() {
                    this.superMethod("animate", this.openControl, this.options.hideAnimation, function() {
                        this.superMethod("animate", this.element, this.options.showAnimation)
                    }), this.status = "open"
                },
                "addthis.layers.recommendedside.hide": function() {
                    this.superMethod("animate", this.element, this.options.hideAnimation, function() {
                        this.superMethod("animate", this.openControl, this.options.showAnimation)
                    }), this.status = "closed"
                }
            },
            postEvents: function() {
                var t = this.options;
                e.isString(t.elements) && t.elements.length && e.isElement(this.container) && e.addClass("at4-recommendedside-inline", this.container), _ate.track.avp(this.elementSelector, this.pco, "ttnl=" + t.maxitems)
            }
        })
    }(a.utils, a.setup, a.common, a.qwery), a.responsiveshare = function(e, t, i, n, s) {
        return t.addthisWidget("responsiveshare", {
            create: s.create,
            pco: "resh-1.0",
            device: "both",
            element: "#atrsb",
            services: [],
            personalized: !0,
            multipleCalls: !0,
            inline: !0,
            showOnLoad: !0,
            mobileClass: "at-mobile",
            menuOpen: !1,
            events: {
                ".at-share-btn click": i.commonEventHandlers.share.buttonClick,
                "addthis.layers.resize": function() {
                    "responsiveshare" === this.basename && ("desktop" === e.getCurrentDevice(this) && e.hasClass(this.mobileClass, this.element) ? e.removeClass(this.mobileClass, this.element) : "mobile" !== e.getCurrentDevice(this) || e.hasClass(this.mobileClass, this.element) || e.addClass(this.mobileClass, this.element))
                },
                ".at-svc-compact.at-share-btn mouseover": i.commonEventHandlers.share.showCompactMenu,
                "!.at-svc-compact.at-share-btn mouseleave": i.commonEventHandlers.share.hideCompactMenu
            },
            generateJson: function() {
                var t = {}, i = [], n = this, s = n.getShareServices();
                return e.each(s, function(e, t) {
                    var s = t.svc, o = t.name, a = {}, r = {}, l = {};
                    r["span.at300bs.at15nc.at15t_" + s] = {
                        title: o
                    }, l["span.label"] = {
                        html: o,
                        title: o
                    }, a["a.at-share-btn.at-svc-" + s] = [r, l], i.push(a), n.shownServices || (n.shownServices = []), n.shownServices.push(s)
                }), t["div" + n.elementSelector + ".at-resp-share-element.addthis_32x32_style" + ("mobile" === e.getCurrentDevice(this) ? "." + this.mobileClass : "")] = i, t
            }
        })
    }(a.utils, a.setup, a.common, a.qwery, a.share), a.sharedock = function(e, t, i, n, s) {
        return t.addthisWidget("sharedock", {
            create: s.create,
            pco: "msd-1.0",
            device: "mobile",
            services: [],
            personalized: !0,
            position: "bottom",
            element: "#at-share-dock",
            numServices: 4,
            events: {
                ".at-share-btn click": i.commonEventHandlers.share.buttonClick
            },
            generateJson: function() {
                var t, i = {}, n = {}, s = {
                    role: "region",
                    "aria-labelledby": "at-share-dock-label",
                    "div#at-share-dock-label.at4-visually-hidden": {
                        html: "AddThis Sharing"
                    }
                }, o = this, a = o.getShareServices(), r = "top" === o.position, l = ".atss", c = r ? l + "-top": l + "-bottom", d = 100 / a.length;
                return e.each(a, function(e, t) {
                    var i, s = t.svc, o = t.name;
                    i = n["a.at-share-btn.at-svc-" + s] = {
                        href: "#",
                        style: "width:" + d + "%;"
                    }, i["span.at300bs.at15nc.at15t_" + s] = {
                        title: o,
                        html: o
                    }
                }), t = s["div#at-share-dock" + l + c + ".addthis_32x32_style"] = n, i["div.at-share-dock-outer" + (r ? "-top" : "")] = s, i
            }
        })
    }(a.utils, a.setup, a.common, a.qwery, a.share), a.sharetoolbox = function(n, s, o, a, r) {
        return s.addthisWidget("sharetoolbox", {
            create: r.create,
            pco: "tbx32-300",
            device: "both",
            element: "#atstbx",
            services: [],
            personalized: !0,
            multipleCalls: !0,
            inline: !0,
            showOnLoad: !0,
            sizeClass: {
                small: "",
                medium: ".addthis_20x20_style",
                large: ".addthis_32x32_style"
            },
            menuOpen: !1,
            events: {
                ".at-share-btn click": o.commonEventHandlers.share.buttonClick,
                ".at-svc-compact.at-share-btn mouseover": o.commonEventHandlers.share.showCompactMenu,
                "!.at-svc-compact.at-share-btn mouseleave": o.commonEventHandlers.share.hideCompactMenu
            },
            generateJson: function() {
                var e, t, i, s, o, r, l = {}, c = [], d = this, h = d.options, u = h.size || "large", m = h.theme ||!1, p = h.shape, f = "round" === p && "custom" === m ? ".circular": "rounded" === p && "custom" === m ? ".rounded": "", g = h.background || "#666", v = "at" + d.name + "bg", b = this.sizeClass[u], w = d.getShareServices();
                if (h.thirdPartyButtons)
                    d.pco = "scopl-300", w = h.services.split(","), b = this.sizeClass.medium, n.each(w, function(t, n) {
                        e = n, i = {}, s = {}, o = ".addthis_button_" + e, "facebook_like" === e ? s = {
                            "fb:like:layout": "button_count"
                        } : "facebook_share" === e ? s = {
                            "fb:share:layout": "button_count"
                        } : "pinterest_pinit" === e ? s = {
                            "pi:pinit:layout": "horizontal"
                        } : "google_plusone" === e ? s = {
                            "g:plusone:size": "medium"
                        } : "counter" === e && (o = ".addthis_counter.addthis_pill_style"), i["a" + o] = s, c.push(i)
                    }), l["div" + d.elementSelector + ".at-share-tbx-element.addthis_default_style" + b] = c;
                else {
                    if ("small" === u ? d.pco = "tbx-300" : "medium" === u && (d.pco = "tbx20-300"), "custom" === m) {
                        for (d.pco = "c" + d.pco, b = ".addthis_32x32_white_style", r = a("#" + v); r && r.length;) {
                            var y = r.pop();
                            y.parentElement.removeChild(y)
                        }
                        n.updateStyleSheet(".at-share-tbx-element" + b + " .at15nc.at300bs {background-color:" + g + "}", v)
                    }
                    n.each(w, function(n, o) {
                        e = o.svc, t = o.name, i = {}, s = {}, s["span.at300bs.at15nc.at15t_" + e] = {
                            title: t
                        }, i["a.at-share-btn.at-svc-" + e] = [s], c.push(i), d.shownServices || (d.shownServices = []), d.shownServices.push(e)
                    }), l["div" + d.elementSelector + ".at-share-tbx-element" + b + f] = c
                }
                return l
            },
            postEvents: function() {
                var n, s = this, o = this.options, r = e.addthis_config ? i.clone(e.addthis_config): {}, l = e.addthis_share ? i.clone(e.addthis_share): {}, c = this.getShareUrl(), d = this.getShareTitle(), h = this.getShareDescription();
                return r.product = s.pco || "", r.pubid = _ate.pub(), l.url = c, l.title = d, l.description = h, o.thirdPartyButtons && (t.toolbox(this.elementSelector, r, l), - 1 !== o.services.indexOf("counter") && (n = a(".addthis_counter", s.element), n && t.counter(n[0], r, l))), this
            },
            renderShareCounts: function(e) {
                var t, s, o, r, l = this, c = new _ate.resource.Resource("countercss", _atc.rsrcs.countercss);
                c.load(), n.each(e, function(e, c) {
                    t = c.service, s = c.count, n.isString(t) && t.length && n.isNumber(s) && s > 0 && (r = a(".at-share-btn.at-svc-" + t, l.element), r && r.length && (o = i.json2html({
                        "span.at_flat_counter": n.truncateCount(s) + ""
                    }), r[0].parentNode.insertBefore(o, r[0].nextSibling)))
                })
            }
        })
    }(a.utils, a.setup, a.common, a.qwery, a.share), a.thankyou = function(n, o, a, r) {
        return o.addthisWidget("thankyou", {
            create: function() {
                return _ate.dbm = 1, this
            },
            POSTACTION_SURFACES: {
                share: {
                    type: "share",
                    display: "follow"
                },
                "share-follow": {
                    type: "share",
                    display: "follow"
                },
                "share-trending": {
                    type: "share",
                    display: "trending"
                },
                follow: {
                    type: "follow",
                    display: "trending"
                },
                "follow-trending": {
                    type: "follow",
                    display: "trending"
                }
            },
            pco: "smlty-1.0",
            device: "both",
            element: "#at4-thankyou",
            maxitems: 4,
            lastShown: 0,
            showOnLoad: !1,
            blacklist: {
                mailto: !0,
                email: !0,
                pinterest_share: !0,
                pinterest: !0,
                thefancy: !0,
                more: !0,
                link: !0
            },
            events: {
                "addthis.menu.share": function(e) {
                    if (a.active_layers.addthis.share) {
                        var t = a.active_layers.addthis.follow, i = t ? t.options.services: !1;
                        t && i && i.length ? this.triggerPostActionEvent(e, "share-follow") : this.triggerPostActionEvent(e, "share-trending")
                    }
                },
                "addthis.menu.follow": function(e) {
                    a.active_layers.addthis.follow && this.triggerPostActionEvent(e, "follow-trending")
                },
                "addthis.menu.shareimg": function(e) {
                    this.triggerPostActionEvent(e, "share", !0)
                },
                "addthis.thankyou.hold": function() {
                    this.hold=!0
                },
                "addthis.postaction": function(e) {
                    var t = this, i = t.options;
                    if (!(t.lastShown || "pinterest_share" == e.data.service || "pinterest" == e.data.service || n.isPlainObject(e.data) && n.isString(e.data.type) && (i.layers[t.POSTACTION_SURFACES[e.data.type].type] || {}).thankyou===!1) && (t.lastShown = (new Date).valueOf(), e && e.data && e.data.service && e.data.type)) {
                        var s, o = (e.data.service, e.data.type);
                        n.removeChildren(r("#at4-thankyou .at4-thankyou-layer")[0]), s = this.POSTACTION_SURFACES[o].display, o = this.POSTACTION_SURFACES[o].type, t.hold ? t.hold=!this.hold : t.display(o, s)
                    }
                },
                click: function() {
                    n.isVisible(this.element) && this.hide(), this.hold=!1
                },
                ".at4-close click": function(e) {
                    n.preventDefaultEvent(e)
                },
                ".at4x click": function(e) {
                    n.preventDefaultEvent(e)
                },
                "addthis.keydown.esc": function() {
                    this.hide()
                },
                ".at-follow-btn click": function(e, t) {
                    var i = n.attr(t.childNodes[0], "svc"), s = n.attr(t.childNodes[0], "svcId"), o = this.pco, a = {
                        service: i,
                        id: s,
                        pco: o
                    };
                    this.superMethod("follow", i, a, o), n.trigger("addthis.thankyou.hold", addthis, {
                        action: "share/follow"
                    }), "twitter" !== i || n.mobile() || n.preventDefaultEvent(e)
                }
            },
            customEvents: {},
            triggerPostActionEvent: function(i, o, a) {
                if (i && i.data && i.data.service) {
                    var l, c, d = i.data.service;
                    d ? (!this.blacklist[d] || a) && (n.isVisible(r("#at3win")[0]) && t.menu.close(), l = s.activeElement.nodeName.toLowerCase(), s.activeElement && "iframe" === l && "activeElement"in s && (e.focus(), s.activeElement.blur()), c = function() {
                        n.trigger("addthis.postaction", addthis, {
                            service: d,
                            type: o
                        }), n.mobile() || ("onfocusin"in s ? s.onfocusin = null : n.listenTo({
                            elem: "window",
                            ev: "focus",
                            callback: c,
                            type: "remove"
                        }))
                    }, n.mobile() ? c() : "onfocusin"in s ? s.onfocusin = c : n.listenTo({
                        elem: "window",
                        ev: "focus",
                        callback: c,
                        type: "add"
                    })) : this.hide()
                }
            },
            display: function(e, t) {
                this.title && this.description || (this.title = r("#at4-thankyou .thankyou-title")[0], this.description = r("#at4-thankyou .thankyou-description")[0]);
                var i = this.title, s = this.description;
                if (n.addClass("at-thankyou-shown", this.element), e && i && s)
                    if (n.bindEvents.call(this, this.customEvents, "remove"), "share" === e)
                        switch (i.innerHTML = "", s.innerHTML = "", t) {
                        case"follow":
                            this.postactionFollow();
                            break;
                        case"trending":
                            i.innerHTML = this.options.layers.share.postShareTitle, s.innerHTML = this.options.layers.share.postShareRecommendedMsg, this.postactionTrending()
                        } else if ("follow" === e)
                            switch (t) {
                            case"trending":
                                i.innerHTML = this.options.layers.follow.postFollowTitle, s.innerHTML = this.options.layers.follow.postFollowRecommendedMsg, this.postactionTrending()
                            }
            },
            postactionFollow: function() {
                var e = this.generateFollowHtml();
                e && r("#at4-thankyou .at4-thankyou-layer")[0].appendChild(e), this.superMethod("hideControl", r("#at4-palogo")[0]), this.superMethod("hideControl", r("#at4-paprivacy")[0]), this.superMethod("hideControl", r(".at4x")[0]), this.show()
            },
            postactionTrending: function() {
                this.superMethod("showControl", r("#at4-palogo")[0]), this.superMethod("showControl", r("#at4-paprivacy")[0]), this.superMethod("showControl", r(".at4x")[0]);
                var e = this, t = this.superMethod("generateTrendingJson", this.pco, 4), i = e.element, s = n.extend(e.options, {
                    elements: "#at4-thankyou .at4-thankyou-layer",
                    size: "large",
                    title: "",
                    maxitems: 4
                });
                return t.length ? (n.addClass(a.hiddenClass, i), n.removeClass(a.hideClass, i), addthis.layers({
                    recommendedbox: s,
                    pi: !0
                }, function() {
                    n.addClass(a.hideClass, i), n.removeClass(a.hiddenClass, i), e.show()
                }), void 0) : !1
            },
            generateJson: function() {
                var e = {}, t = this.themes[this.options.theme] ? this.themes[this.options.theme]: "";
                return e["div#at4-thankyou.at4-thankyou.at4-thankyou-background." + a.hideClass + t + (n.mobile() ? " .at4-thankyou-mobile" : ".at4-thankyou-desktop")] = {
                    role: "dialog",
                    "aria-labelledby": "at-thankyou-label",
                    "div.at4lb-inner": {
                        "a.at4x": {
                            href: "#",
                            title: "Close"
                        },
                        "a#at4-palogo.at4-logo": {
                            href: "//www.addthis.com/?utm_source=dynpo&utm_medium=img&utm_content=AT_main_WT&utm_campaign=AT_main",
                            html: "AddThis",
                            title: "AddThis",
                            target: "_blank"
                        },
                        "a#at4-paprivacy.at4-privacy": {
                            href: "//www.addthis.com/privacy/privacy-policy",
                            html: _ate._t("Privacy", 24),
                            title: _ate._t("Privacy", 24),
                            target: "_blank"
                        },
                        "div.at4-thankyou-inner": {
                            "div#at-thankyou-label.thankyou-title": "",
                            "div.thankyou-description": "",
                            "div.at4-thankyou-layer": ""
                        }
                    }
                }, e
            },
            generateFollowHtml: function() {
                var e = {}, t = this.options.layers || {}, n = t.follow || {}, o = n.services || [], a = this.superMethod("generateFollowJson", o), r = s.location.host, l = this.themes[this.options.theme] ? this.themes[this.options.theme]: "";
                return a ? (e["div.at4win" + l] = {
                    "div.at4win-wrapper": [{
                        "div.at4win-header": [{
                            "div.at-h3": r
                        }, {
                            "a.at4-close": {
                                href: "#",
                                html: "X",
                                title: "Close"
                            }
                        }
                        ]
                    }, {
                        "div.at4win-content": {
                            "div.at4-thanks": [{
                                "div.at4-h2": t.share.postShareTitle
                            }, {
                                "div.at4-thanks-icons": [{
                                    label: t.share.postShareFollowMsg
                                }, {
                                    "div.at-follow.at-follow-32": {
                                        "div.at44-follow-container.addthis_32x32_style": a
                                    }
                                }
                                ]
                            }
                            ]
                        }
                    }, {
                        "div#at4win-footer": [{
                            "a.at4-logo": {
                                href: "//www.addthis.com/?utm_source=dynpo&utm_medium=img&utm_content=AT_main_WT&utm_campaign=AT_main",
                                html: "AddThis",
                                title: "AddThis",
                                target: "_blank"
                            }
                        }, {
                            "a.at4-privacy": {
                                href: "//www.addthis.com/privacy/privacy-policy",
                                html: _ate._t("Privacy", 24),
                                title: _ate._t("Privacy", 24),
                                target: "_blank"
                            }
                        }
                        ]
                    }
                    ]
                }, i.json2html(e)) : !1
            },
            hide: function() {
                this.superMethod("hide", this.element, this.hideAnimation, function() {
                    n.removeClass("at-thankyou-shown", this.element)
                })
            }
        })
    }(a.utils, a.setup, a.common, a.qwery), a.whatsnext = function(e, n, s, o) {
        return n.addthisWidget("whatsnext", {
            render: function() {
                return this.queueTrending(this.options.pubid, this.options.domain, function() {
                    this.superMethod("render")
                }), this
            },
            pco: "smlwn-1.0",
            device: "desktop",
            async: !0,
            position: "bottom",
            status: "closed",
            locked: !1,
            element: "#at4-whatsnext",
            contentElement: ".at-whatsnext-content",
            closeControl: "#at4-wncc",
            openControl: "#at4-wnoc",
            showPlaceholderImages: !1,
            events: {
                mouseenter: function() {
                    this.showControl(this.closeControl)
                },
                mouseleave: function() {
                    this.hideControl(this.closeControl)
                },
                "#at4-wncc click": function() {
                    e.trigger("addthis.layers.whatsnext.hide", t, this), this.locked=!0
                },
                "!#at4-wnoc click": function() {
                    e.trigger("addthis.layers.whatsnext.show", t, this), this.locked=!0
                },
                "addthis.layers.scroll": function() {
                    var i = e.pageHeight(), n = e.scrollTop(), o = e.scrollPercentage(), a = 1e3, r = 4e3;
                    this.locked || s.drawerIsVisible===!0 || (a > n && i > r || .25 > o ? e.trigger("addthis.layers.whatsnext.hide", t, this) : (n > a || o > .25) && e.trigger("addthis.layers.whatsnext.show", t, this))
                },
                "addthis.layers.whatsnext.show": function() {
                    e.hasClass(s.showClass, this.element) || e.isVisible(this.element) || (this.hide(this.openControl, this.options.hideAnimation), this.show(), this.status = "open", _ate.track.avpc(this.pco, "ttnl=1"))
                },
                "addthis.layers.whatsnext.hide": function() {
                    !e.hasClass(s.hideClass, this.element) && e.isVisible(this.element) && (this.hide(), this.show(this.openControl, this.options.showAnimation), this.status = "closed")
                }
            },
            prerender: function() {
                var e = {
                    "div.at4-whatsnext-outer-container": ""
                };
                return i.json2html(e)
            },
            generateJson: function() {
                var e, t = {}, i = {}, n = [], o = {}, a = "", r = this.options, l = this.themes[r.theme] ? this.themes[r.theme]: "", c = r.title || r.recommendedTitle, d = {}, h = "";
                return i = this.buildTrending(), i.isSponsored && (h = "Sponsored", c = "Promoted Content"), i ? (i.image ? (d["div.at-whatsnext-content-img"] = {
                    a: {
                        id: "at-whatsnext-img-lnk",
                        surface: "whatsnext",
                        href: i.url || "#",
                        img: {
                            id: "at-whatsnext-img",
                            src: i.image,
                            alt: i.title,
                            title: i.title,
                            "data-secure": i.image._secureimage ? "true": ""
                        }
                    }
                }, n.push(d)) : a = ".at-whatsnext-nophoto", n.push({
                    "div.at-whatsnext-content-inner": [{
                        "div.at-h6": c
                    }, {
                        "div.at-h3": [{
                            "a.at-whatsnextTitle": {
                                id: "at-whatsnext-link",
                                href: i.url || "#",
                                html: i.title || "",
                                title: i.title
                            }
                        }
                        ]
                    }, {
                        small: {
                            id: "at-whatsnext-dom",
                            html: i.domain || ""
                        }
                    }
                    ]
                }), n.push({
                    "a.at-sponsored-link": {
                        href: "//www.addthis.com/?utm_source=dyntr&utm_medium=img&utm_content=AT_main_WT&utm_campaign=AT_main",
                        target: "_blank",
                        html: h
                    }
                }), n.push({
                    "a.at4-logo": {
                        href: "//www.addthis.com/?utm_source=dynto&utm_medium=img&utm_content=AT_main_WT&utm_campaign=AT_main",
                        target: "_blank",
                        html: "AddThis",
                        title: "AddThis"
                    }
                }), t["div#at4-whatsnext.at4-whatsnext " + a + l] = {
                    role: "region",
                    "aria-labelledby": "at4-whatsnext-label",
                    "div#at4-whatsnext-label": {
                        html: "AddThis What's Next"
                    },
                    "div.at-whatsnext-content": n,
                    "div#at4-wncc.at-whatsnext-close-control.at4-arrow.at-down.at4-hide": {
                        html: "Hide",
                        title: "Hide"
                    }
                }, o["div#at4-wnoc.at-whatsnext-open-control.at4-arrow.at-up." + s.hideClass] = {
                    html: "Show",
                    title: "Show"
                }, e = [t, o], {
                    "div.at4-whatsnext-outer": e
                }) : !1
            },
            buildTrending: function() {
                if (!this.feeds[this.options.pubid + this.options.domain])
                    return !1;
                var t = this.options, i = this.feeds[this.feedName()] = this.feeds[t.pubid + t.domain], n=!1, s = e.isPlainObject(t.promotedUrls) ? e.toArray(t.promotedUrls) : e.isString(t.promotedUrls) && t.promotedUrls.length ? [t.promotedUrls] : t.promotedUrls || [], o = s.length > 0?!0 : !1, a=!1;
                return o && (e.each(s, function(t, i) {
                    e.isString(i) ? s[t] = e.stripHashFromPath(i) : e.isPlainObject(i) && 1 === i._atType && (n = {
                        title: i.name,
                        url: i.url,
                        image: i.thumbnail.length ? i.thumbnail[0].url: "",
                        promoteToLayer: !0,
                        isSponsored: !0,
                        domain: i.branding
                    }, a=!0)
                }), e.each(i, function(t, i) {
                    var o = e.stripHashFromPath(i.url);
                    - 1 === e.indexOf.call(s, o) || a || (i = e.cloneObject(i), i.promoteToLayer=!0, n = i, a=!0)
                })), a || (i.repeat = i.repeat ? i.repeat : 1, n = this.feedItem({
                    repeat: i.repeat,
                    sort: function(e, t) {
                        return e.image ? t.image ? 0 : - 1 : 1
                    }
                })), n && n.url ? (this.normalizeTrendingItem(n, {
                    itemCount: 1,
                    pos: 0
                }), n) : !1
            },
            postEvents: function() {
                var e = this, t = o(".at-whatsnextTitle"), i = o("#at-whatsnext-img");
                e.superMethod("imageResizer", t, i), e.superMethod("postEvents")
            }
        })
    }(a.utils, a.setup, a.common, a.qwery), a.toaster = function(e, i, n, s) {
        return i.addthisWidget("toaster", {
            pco: "tst-1.0",
            element: "#at4-toaster",
            inheritsFrom: "whatsnext",
            multipleCalls: !1,
            plugin: !0,
            locked: !1,
            status: "closed",
            closeControl: "#at4-toaster-close-control",
            openControl: "#at4-toaster-open-control",
            showPlaceholderImages: !0,
            events: {
                mouseenter: function() {
                    this.showControl(this.closeControl)
                },
                mouseleave: function() {
                    this.hideControl(this.closeControl)
                },
                "addthis.layers.scroll": function() {
                    var i = e.pageHeight(), s = e.scrollTop(), o = e.scrollPercentage(), a = 1e3, r = 4e3;
                    this.locked || n.drawerIsVisible===!0 || (a > s && i > r || .25 > o ? e.trigger("addthis.layers.toaster.hide", t, this) : (s > a || o > .25) && e.trigger("addthis.layers.toaster.show", t, this))
                },
                "!#at4-toaster-close-control mouseenter": function() {
                    this.showControl(this.closeControl)
                },
                "#at4-toaster-close-control click": function() {
                    _ate.ed.fire("addthis.layers.toaster.hide", t, this), this.locked=!0
                },
                "!#at4-toaster-open-control click": function() {
                    _ate.ed.fire("addthis.layers.toaster.show", t, this), this.locked=!0
                },
                "addthis.layers.toaster.show": function() {
                    e.hasClass(n.showClass, this.element) || e.isVisible(this.element) || (this.hide(this.openControl, this.options.hideAnimation), this.show(), this.status = "open", _ate.track.avpc(this.pco, "ttnl=1"))
                },
                "addthis.layers.toaster.hide": function() {
                    !e.hasClass(n.hideClass, this.element) && e.isVisible(this.element) && (this.hide(), this.show(this.openControl, this.options.showAnimation), this.status = "closed")
                }
            },
            generateJson: function() {
                var t = this, i = t.options, s = i.title || "", o = i.promotedUrls, a = this.superMethod("containsSponsored", o), r = "medium" === i.size ? ".at-medium": "", l = this.inlineClass ? ".at-inline": "", c = t.maxitems || 2, d = ".at4-recommended-" + t.name + (t.options.textonly===!0 || "true" === t.options.textonly ? " .at4-recommended-text-only" : ""), h = ".at4-recommended-horizontal-logo", u = t.trendingLinksJson = t.superMethod("generateTrendingJson", t.pco, c), m = {
                    role: "region",
                    "aria-labelledby": "at-recommended-label"
                }, p = {}, f = {}, g = n.themes[i.theme] ? n.themes[i.theme]: "", v = i.animationType ? "." + t.basename + "-" + i.animationType: "", b = {}, w = {}, y = {}, _ = "bottom" === t.position ? "up": "left" === t.position ? "right": "left", C = [], S = "", x = "";
                if (u && u.length) {
                    a && (S = "Sponsored content by", x = ".at-sponsored-logo"), s ? m["div.at-recommended-label" + g] = {
                        html: s
                    } : m["div.at-recommended-label." + n.hiddenClass] = {
                        html: "AddThis Recommended"
                    }, t.showCloseButton===!0 && (m["button.at4-closebutton." + t.basename + "-close"] = {
                        html: "x",
                        title: "Close"
                    }), m[".at4-recommended-container"] = u;
                    var k = {}, E = {};
                    a && (E["a.at-sponsored-link"] = {
                        href: "//www.addthis.com/?utm_source=dyntr&utm_medium=img&utm_content=AT_main_WT&utm_campaign=AT_main",
                        target: "_blank",
                        html: S
                    }), E["a#at-privacy.at4-logo"] = {
                        href: "//www.addthis.com/?utm_source=dyntr&utm_medium=img&utm_content=AT_main_WT&utm_campaign=AT_main",
                        target: "_blank",
                        html: "AddThis"
                    }, k[".at4-logo-container" + x] = E, m[".at-logo" + h] = k, t.closeControl && (b[".at4-arrow.at-" + ("bottom" === t.position ? "down" : t.position)] = {
                        title: "Close"
                    }, m["#at4-" + t.basename + "-close-control.at4-" + t.basename + "-control." + n.hideClass] = b), p[t.elementSelector + ".at4-recommended.at-down" + v + g + d + r + l] = m, _ate.track.avp(t.elementSelector, t.pco, "ttnl=" + c)
                } else 
                    p.div = "";
                return t.openControl && (w[".at4-arrow.at-" + _] = {
                    title: "Open"
                }, y["#at4-" + t.basename + "-open-control.at4-" + t.basename + "-control." + n.hideClass] = w), y = e.isEmptyObject(y)?!1 : y, y!==!1 && C.push(y), C.push(p), f[".at4-" + t.basename + "-outer"] = C, f
            },
            postEvents: function() {
                var e = this, t = s(e.elementSelector + " .at-recommendedTitle"), i = s(e.elementSelector + " .at-tli");
                e.superMethod("imageResizer", t, i), e.superMethod("postEvents")
            }
        })
    }(a.utils, a.setup, a.common, a.qwery, a.recommended, a.whatsnext), a.warning = function(e, i, n, s) {
        return i.addthisWidget("warning", {
            pco: "smlwrn-1.0",
            device: "both",
            element: "#at4-warning",
            showOnLoad: !1,
            closeControl: "#at4-wcc",
            parentMarginTop: !1,
            iframeWidth: !1,
            iframeHeight: !1,
            iframeStyle: !1,
            plugin: !0,
            events: {
                "addthis.layers.warning.show": function(t) {
                    var i = s("#at4-warning-iframe")[0], n = t.data.alertId, o = this.element.clientHeight, a = this.parentElement.currentStyle || window.getComputedStyle(this.parentElement), r = a.marginTop, l = (new Date).getTime();
                    i.src = "http://usadmm.dotomi.com/dmm/servlet/dmm?reg_req=true&pid=4680&dres=iframe&mtg=0&comId=2394&ms=" + this.iframeStyle + "&btg=1&mp=1&rwidth=" + this.iframeWidth + "&rheight=" + this.iframeHeight + "&pp=3&cg=2222&dtm_param_1=" + (this.options.test ? "AmberTest" : "RON") + "&dtm_param_2=" + (this.options.test ? "96fdd894a4d560d4e15379baa960c270" : "bc2ae68d4ae10411036ba78d73899497") + "&dtm_param_3=" + n + "&dtm_param_4=&dtm_param_5=&rurl=" + _euc(_atc.rsrcs.warning) + "&tz=300&cb=" + l, this.parentMarginTop = r, e.setCSSAttr(this.parentElement, {
                        marginTop: o + "px"
                    }), this.superMethod("animate", this.element, this.options.showAnimation)
                },
                "#at4-acc click": function() {
                    e.trigger("addthis.layers.warning.hide", t, this)
                },
                "addthis.layers.warning.hide": function() {
                    this.hide(this.element, this.options.hideAnimation, function() {
                        e.setCSSAttr(this.parentElement, {
                            marginTop: this.parentMarginTop
                        })
                    })
                },
                "addthis.layers.warning.hideNow": function() {
                    e.setCSSAttr(this.element, {
                        display: "none"
                    })
                }
            },
            postEvents: function() {
                _ate.swl ? (e.trigger("addthis.layers.warning.show", t, {
                    alertId: _ate.swl
                }), _ate.swl=!1) : this.options.test && e.trigger("addthis.layers.warning.show", t, {
                    alertId: 999
                }), this.superMethod("postEvents")
            },
            generateJson: function() {
                var t = {}, i = {}, n = {}, s = "", o = e.desktop() ? "desktop": e.tablet() ? "tablet": "phone", a = this.iframeWidth = e.desktop() ? "728": e.tablet() ? "468": "216", r = this.iframeHeight = e.desktop() ? "90": e.tablet() ? "60": "36";
                return this.iframeStyle = e.desktop() ? "18" : e.tablet() ? "1" : "34", i["a#at4-acc.at-warning-x"] = {
                    html: "Close"
                }, n["iframe#at4-warning-iframe"] = {
                    scrolling: "no",
                    height: r + "px",
                    frameborder: "0",
                    width: a + "px",
                    src: s,
                    vspace: "0",
                    hspace: "0",
                    marginheight: "0",
                    marginwidth: "0"
                }, t["div#at4-warning.addthis-warning-layer.at-layer-" + o] = [i, n], t
            }
        })
    }(a.utils, a.setup, a.common, a.qwery), a.welcome = function(e, t, n, s, o, a) {
        return t.addthisWidget("welcome", {
            updateExisting: function(t) {
                var n, o = this, a = o.container;
                o.options = e.extend(o.options, t), n = i.json2html(o.generateJson(!0)), e.isElement(a) && (a.innerHTML = "", a.appendChild(n)), e.bindEvents.call(o, o.events, "remove"), o.element = s("#at4-welcome")[0], e.bindEvents.call(o, o.events)
            },
            pco: "wmb-1.0",
            device: "both",
            element: "#at4-welcome",
            plugin: !0,
            mobileClass: "at-mobile",
            configurableClassNames: {
                actions: {
                    base: "addthis_bar_action_elem",
                    button: {
                        base: "addthis_bar_button",
                        share: "addthis_bar_button_share",
                        follow: "addthis_bar_button_follow",
                        link: "addthis_bar_button_link",
                        email: "addthis_bar_button_email"
                    },
                    link: {
                        base: "addthis_bar_link",
                        share: "addthis_bar_link_share",
                        follow: "addthis_bar_link_follow",
                        link: "addthis_bar_link_link"
                    }
                },
                devices: {
                    mobile: "addthis_bar_mobile",
                    desktop: "addthis_bar_desktop"
                },
                positions: {
                    bottom: "addthis_bar_bottom",
                    top: {
                        base: "addthis_bar_top",
                        fixed: "addthis_bar_fixed",
                        absolute: "addthis_bar_absolute"
                    }
                },
                rules: {
                    match: "addthis_bar_match",
                    no_match: "addthis_bar_no_match"
                }
            },
            events: {
                "addthis.layers.resize": n.applyResponsiveClass,
                "addthis.welcome.show": function() {
                    var e = this;
                    e.showBar()
                },
                "addthis.welcome.shown": function() {
                    var t = this, i = t.options, n = i.hideAfter, s = this.pco;
                    e.isNumber(n) && (n = 1e3 * n, e.requestTimeout(function() {
                        t.hideBar()
                    }, n)), t.showPixel===!0 && (t.showPixel=!1, _ate.track.apc(s))
                },
                "addthis.welcome.hide": function() {
                    var e = this;
                    e.hideBar()
                },
                ".addthis_bar_x click": function() {
                    var e = this;
                    e.hideBar(), e.setClosedCookie()
                },
                ".addthis_bar_action_elem click": function(t) {
                    var i = this;
                    "share" === i.options.goal ? (e.preventDefaultEvent(t), n.openShareMenu()) : i.options.goal || i.actionClick(), _ate.track.conversion({
                        pco: this.pco,
                        ruleId: this.options.chosenRuleId
                    }), i.hideBar(), i.setClosedCookie()
                },
                ".addthis_bar_prevent_link_fire click": function(t) {
                    e.preventDefaultEvent(t)
                },
                "!#at-wb-welcome-form submit": function() {
                    var e = this;
                    e.hideBar(), e.setClosedCookie(), _ate.track.conversion({
                        pco: this.pco,
                        ruleId: this.options.chosenRuleId
                    })
                },
                "addthis.layers.scroll": function() {
                    if (this.shownOnScroll!==!0 && this.isInlineLayer!==!0) {
                        var t = this, i = "", o = t.options, a = o.showOnScrollTo, r = o.position, l = t.configurableClassNames, c = l.positions, d = e.scrollTop(), h = s(".at4-welcome-outer")[0], u = s("#at4-welcome")[0];
                        e.isString(a) && (!isNaN(a) && parseFloat(a) >= 0 ? a = parseFloat(a) : e.isElement(s(a)[0]) ? a = e.elementInViewport(a) ? d : !1 : a.indexOf("%") > 0 ? (a = parseFloat(a.replace("%", "")), a = 100 * e.scrollPercentage() >= a ? d : !1) : a = a.indexOf("px") > 0 ? a.replace("px", "") : !1), a && a >= 0 && d >= a && (e.removeClass(n.hideClass, h), e.removeClass(n.hideClass, u), e.removeClass(c.bottom, u), e.removeClass(c.top.fixed, u), e.removeClass(c.top.absolute, u), i = "bottom" === r ? c.bottom : c.top.fixed, "" !== i && e.addClass(i, u), t.shownOnScroll=!0)
                    }
                },
                "addthis.layers.welcome.show": function() {
                    this.show()
                }
            },
            actionClick: function() {
                var t = this, i = t.options, n = i.action, o = n.type, a = n.verb, r = n.service || e.getTopService(), l = n.id, c = n.url || "", d = n.url_new_window, h = this.pco, u = {
                    service: r,
                    id: l,
                    pco: h
                }, m = s("input.addthis_bar_email_input")[0], p = e.isElement(m) ? m.value: "";
                t.setCurrentConfig({
                    touched: !0
                }), e.trigger("addthis.bar.click", t, t.getCurrentConfig()), "email" === o ? e.validation.validators.isEmail(p) ? (e.setCSSAttr(m, {
                    "border-color": "#FFFFFF"
                }), t.emailLogic({
                    email: p,
                    action: n
                })) : e.setCSSAttr(m, {
                    "border-color": "#FF0000"
                }) : "share" === a ? t.superMethod("share", r, h) : "follow" === a && l ? ("preferred" === r && (r = e.getTopService()), t.superMethod("follow", r, u, h, !0)) : "link" === a && (e.openWindow({
                    url: c,
                    new_window: d,
                    focus: !0
                }), _ate.track.conversion({
                    pco: this.pco,
                    ruleId: this.options.chosenRuleId
                }))
            },
            emailProviders: {
                aweber: function(e, t) {
                    return "http://www.aweber.com/scripts/addlead.pl?email=" + e + "&listname=" + t
                }
            },
            emailLogic: function(t) {
                var i = this, n = encodeURIComponent(t.email), s = t.action, o = s.listname || "", a = (s.service || "").toLowerCase(), r = function() {
                    return i.emailProviders[a] ? i.emailProviders[a](n, o) || "" : s.url || ""
                }(), l = _ate.cookie.tag.toKV();
                r += (r.indexOf("?") < 0 ? "?" : "&") + "EMAIL=" + n + (l.length ? "&AT_TAG=" + l : ""), i.updateExisting({
                    message: "Your request is being processed...",
                    animate: !1,
                    action: {
                        type: "none"
                    }
                }), e.getUrl(r, function() {
                    i.updateExisting({
                        message: "Well done! You have successfully subscribed with " + decodeURIComponent(n),
                        action: {
                            type: "none"
                        }
                    }), e.requestTimeout(function() {
                        i.hideBar()
                    }, 2500)
                })
            },
            hideBar: function() {
                var t = this, i = t.options, s = i.hideAnimation, a = t.element;
                o(function() {
                    e.isElement(t.placeholder) && e.addClass(n.hiddenClass, t.placeholder), e.isVisible(a) && t.hide(a, s, function() {
                        e.trigger("addthis.welcome.hidden", {
                            internal: !0
                        })
                    })
                })
            },
            showBar: function() {
                var t = this, i = t.options, s = i.showAnimation, a = t.element;
                o(function() {
                    e.isElement(t.placeholder) && e.removeClass(n.hiddenClass, t.placeholder), e.isVisible(a) || t.show(a, s, function() {
                        e.trigger("addthis.welcome.shown", {
                            internal: !0
                        })
                    })
                })
            },
            setShowOnScrollTo: function() {
                var t = this.options.showOnScrollTo;
                e.isNumber(t) ? this.showOnScrollTo = t : e.isString(t) ? this.showOnScrollTo =+ t.replace("px", "") : e.isElement(t) && (this.showOnScrollTo = e.scrollTop(t))
            },
            getWelcomeCSSString: function() {
                var e = this.options, t = this.options.fixed===!0 || "true" === this.options.fixed, i = this.mobile ? "addthis_bar_mobile": "addthis_bar_desktop", s = this.shouldShowOnPage() ? "addthis_bar_match": "addthis_bar_no_match", o = "bottom" === e.position ? "addthis_bar_bottom": t ? "addthis_bar_top addthis_bar_fixed": "addthis_bar_top addthis_bar_absolute", a = e.alwaysShow===!0 ? "": e.showOnScrollTo===!1 ? e.rememberHide===!0 && this.checkCookieHidden() ? n.hideClass: "": n.hideClass, r = this.noGradient() ? "addthis_bar_minimal": "";
                return "addthis_bar_container addthis_bar " + i + " " + s + " " + o + " " + a + " " + r
            },
            getWelcomeStyleString: function() {
                var t, i = this.options, n = this.backgroundColor(), s = "", o = i.textColor || i.buttonTextColor || "#FFF";
                return this.noGradient() || (s = e.gradients.cssString(n, .05)), t = e.objectToStyle({
                    background: n,
                    color: o
                }), t + s
            },
            backgroundColor: function() {
                var e = this.options, t = "#000";
                return e.goal ? t = e.theme : e.backgroundColor && (t = e.backgroundColor), t
            },
            noGradient: function() {
                return this.options.noGradient===!0 || "true" === this.options.noGradient
            },
            shouldShowOnPage: function() {
                return this.options.alwaysShow?!0 : this.isMatch===!1?!1 : this.options.rememberHide===!0 && this.checkCookieHidden()?!1 : !0
            },
            generateElement: function() {
                if (this.options.showOnScrollTo&&!this.isInlineLayer && (this.showOnLoad=!1), this.setShowOnScrollTo(), this.shouldShowOnPage()===!1)
                    return a.div().css("at4-welcome-outer").element;
                var e = this.options.goal ? this.generateGoalElement(): this.generateLegacyActionElement();
                return a.div(a.div(a.span(a.a(a.div().css("addthis_bar_logo").title("AddThis.com")).css("addthis_bar_logo_container").href("//www.addthis.com?utm_medium=link&amp;utm_content=logo&amp;utm_campaign=AT_main&amp;utm_source=wmb").target("_blank"), e, a.span(a.div().css("addthis_bar_x icon-arrow-up").title("Hide")).css("addthis_bar_x_container")).css("welcome-inner-container")).id("at4-welcome").css(this.getWelcomeCSSString()).style(this.getWelcomeStyleString())).css("at4-welcome-outer addthis-smartlayers").element
            },
            generateGoalElement: function() {
                var t, i = this.options, n = i.buttonTextColor || "#FFF", s = e.objectToStyle({
                    background: i.theme,
                    border: "1px solid " + n,
                    color: n,
                    "border-radius": "2px"
                }), o = e.objectToStyle({
                    border: "1px solid " + n
                });
                if ("prompt" === i.goal || "share" === i.goal) {
                    var r = "prompt" === i.goal ? i.yesButton: i.shareButton, l = this.options.goalUrl;
                    l && l.length > 0 && (l = (this.options.goalUrl.indexOf("://")>-1 || 0 === this.options.goalUrl.indexOf("//") ? "" : "//") + this.options.goalUrl), t = a.a(r).css("addthis_bar_button addthis_bar_action_elem addthis_bar_button_link").style(s).type("button").href(l).id("at-wmb-goal-button-link").target("_blank")
                } else if ("email" === i.goal) {
                    var c;
                    if ("aweber" === i.emailProvider) {
                        if (!i.aweberID ||!i.aweberActionUrl)
                            return !1;
                        c = a.form(a.input().type("hidden").name("listname").value(this.options.aweberID), a.input().id("at-wmb-goal-email-input").type("email").style(o).autocapitalize("off").autocorrect("off").required("required").placeholder("Enter your email address").name("email"), a.input().id("at-wmb-goal-submit").type("submit").value(i.submitButton).style(s)).id("at-wb-welcome-form").action(this.options.aweberActionUrl).target("_blank").method("post")
                    } else {
                        if (!(i.mailchimpU && i.mailchimpID && i.mailchimpActionUrl))
                            return !1;
                        c = a.form(a.input().type("hidden").name("u").value(i.mailchimpU), a.input().type("hidden").name("id").value(i.mailchimpID), a.input().id("at-wmb-goal-email-input").type("email").style(o).autocapitalize("off").autocorrect("off").required("required").placeholder("Enter your email address").name("MERGE0"), a.input().id("at-wmb-goal-submit").type("submit").value(i.submitButton).style(s)).id("at-wb-welcome-form").action(i.mailchimpActionUrl).target("_blank").method("post")
                    }
                    t = a.div(c).id("at-wmb-goal-email-holder")
                }
                return a.p(a.div(i.headline || "").css("addthis_bar_message").style(e.objectToStyle({
                    color: n
                })), t).css("addthis_bar_p")
            },
            generateLegacyActionElement: function() {
                var t, i = this.options, n = i.action, s = n.service || e.getTopService(), o = n.type || "button", r = e.serviceTemplate(n.text, s), l = "follow" === n.verb ? "addthis_bar_follow": "link" === n.verb ? "addthis_bar_link": "addthis_bar_share", c = "addthis_bar_p " + l, d = this.noGradient() ? "": e.gradients.cssString(i.buttonColor), h = i.textColor || i.buttonTextColor || "#FFF", u = e.objectToStyle({
                    background: i.buttonColor || i.backgroundColor || "#000",
                    border: "1px solid " + i.buttonTextColor,
                    color: i.buttonTextColor
                }) + d;
                return "link" === o ? "share" !== n.verb && "follow" !== n.verb && (t = a.a(r).css("addthis_bar_prevent_link_fire addthis_bar_link addthis_bar_action_elem addthis_bar_link_" + n.verb).style(e.objectToStyle({
                    color: i.linkTextColor
                })).href("#")) : t = "email" === o ? a.span(a.input().css("addthis_bar_email_input").type("text").placeholder("Email Address"), a.button(r).css("addthis_bar_button addthis_bar_action_elem addthis_bar_button_" + n.verb).style(u).type("button")).css("email-container") : "none" === o ? a.span().css("addthis_bar_type_none") : a.button(r).css("addthis_bar_button addthis_bar_action_elem addthis_bar_button_" + n.verb).style(u).type("button"), a.p(a.div(i.message || "").css("addthis_bar_message").style(e.objectToStyle({
                    color: h
                })), t).css(c)
            },
            postEvents: function() {
                var e, t = this, n = t.options, s = {};
                s[".addthis_bar_placeholder"] = "", e = i.json2html(s), n.coverPage!==!1 || n.elements || "top" !== t.position || (t.placeholder = e)
            },
            setCurrentConfig: function(t) {
                if (e.isPlainObject(t)) {
                    var i = this, n = e.isPlainObject(i.currentShowConfig) ? i.currentShowConfig: {};
                    i.currentShowConfig = e.extend(n, t)
                }
            },
            getCurrentConfig: function() {
                var t = this, i = e.isPlainObject(t.currentShowConfig) ? t.currentShowConfig: {};
                return {
                    matchedConfig: t.options,
                    beenShown: i.beenShown,
                    userHide: i.hiddenByExplicitHide,
                    showCount: i.showCount,
                    pco: t.pco
                }
            },
            checkCookieHidden: function() {
                var e = this, t = e.getRuleHash();
                if (!t)
                    return !1;
                var i = _ate.cookie.rck("__atbar" + t), n = i ? _ate.util.fromKV(i): {};
                return "1" === n.h
            },
            getRuleHash: function() {
                var t, i, n = this, s = n.options, o = s.rules, a = s.headline || s.message || "";
                return e.each(o, function(e, i) {
                    t = i, a += "," + t
                }), a = a.substring(1), i = _ate.mun(a)
            },
            setClosedCookie: function() {
                var e = this, t = e.getRuleHash();
                return _ate.cookie.sck("__atbar" + t, "h=1", 0, 1)
            }
        })
    }(a.utils, a.setup, a.common, a.qwery, a.rAF, a.emdot), a.whatsnextmobile = function(e, i, n, s, o, a) {
        return i.addthisWidget("whatsnextmobile", {
            render: function() {
                return this.queueTrending(this.options.pubid, this.options.domain, function() {
                    this.superMethod("render")
                }), this
            },
            pco: "wnm-1.0",
            device: "mobile",
            isWhatsNextMobile: !0,
            showOnLoad: !1,
            async: !0,
            hideClass: "at4-hide-content",
            showClass: "at4-show-content",
            position: "bottom",
            status: "closed",
            locked: !1,
            element: "#at4-whatsnextmobile",
            contentElement: ".at-whatsnextmobile-content",
            closeControl: "#at4-wnmcc",
            showPlaceholderImages: !1,
            events: {
                "#at4-wncc click": function() {
                    e.trigger("addthis.layers.whatsnextmobile.hide", t, this), this.locked=!0
                },
                "!#at4-wnoc click": function() {
                    e.trigger("addthis.layers.whatsnextmobile.show", t, this), this.locked=!0
                },
                "addthis.layers.scroll": function() {
                    var i = (e.pageHeight(), e.scrollTop(), e.scrollPercentage());
                    this.locked || n.drawerIsVisible===!0 || i > .25 && e.trigger("addthis.layers.whatsnextmobile.show", t, this)
                },
                "addthis.layers.whatsnextmobile.show": function() {
                    "open" !== this.status && (this.status = "open", this.show(), e.removeClass(this.hideClass, this.element), _ate.track.avpc(this.pco, "ttnl=1"))
                },
                "addthis.layers.whatsnextmobile.hide": function() {
                    "closed" !== this.status && (this.status = "closed", this.hide())
                }
            },
            generateElement: function() {
                var e = this.buildTrending(), t = this.options, i = n.themes[t.theme] ? n.themes[t.theme].substring(1): "", s = t.title || t.recommendedTitle, a = "";
                return e.isSponsored && (a = "Sponsored", s = "Promoted Content"), e ? o.div(o.div("AddThis What's Next").id("at4-whatsnext-label"), o.div(o.button("×").css("close").aria("hidden", !0).type("button")).id("at4-wncc"), o.div(o.div(o.a(o.img().id("at-whatsnextmobile-img").data("secure", e.image._secureimage ? "true" : "").src(e.image).alt(e.title).title(e.title)).id("at-whatsnextmobile-img-lnk").href(e.url || "#").attr("surface", "whatsnext")).css("at-whatsnext-content-img", "col-2"), o.div(o.div(s).css("at-h6"), o.div(o.a(e.title).id("at-whatsnext-link").href(e.url || "#").title(e.title).css("at-whatsnextmobileTitle")).css("at-h3")).css("at-whatsnext-content-inner", "col-2")).css("at-whatsnext-content"), o.div(o.small(e.domain || "").id("at-whatsnext-dom"), o.small(o.a(a, o.span().css("spacer"), o.a().css("at4-logo").href("//www.addthis.com/?utm_source=wnm&utm_medium=img&utm_content=AT_main_WT&utm_campaign=AT_main").target("_blank").title("AddThis"), " Addthis").href("//www.addthis.com/?utm_source=wnm&utm_medium=img&utm_content=AT_main_WT&utm_campaign=AT_main").target("_blank").title("AddThis"))).css("footer")).id("at4-whatsnextmobile").css("at4-whatsnext-outer", i).element : !1
            },
            buildTrending: a.buildTrending,
            postEvents: function() {
                {
                    var t = this, i = s(".at-whatsnextmobileTitle");
                    s("#at-whatsnextmobile-img")
                }
                e.removeClass(n.hideClass, this.element.parentElement), e.removeClass(n.hideClass, this.element), e.addClass(this.hideClass, this.element), t.superMethod("resizeTrendingTitle", i[0]), t.superMethod("postEvents"), e.addClass(n.hideClass, this.element), e.removeClass(n.showClass, this.element)
            }
        })
    }(a.utils, a.setup, a.common, a.qwery, a.emdot, a.whatsnext), a.mobilesharemenu = function(e, t) {
        return t.addthisComponent("mobilesharemenu", {
            inheritsFrom: "mobile",
            showDock: !1
        })
    }(a.utils, a.setup, a.common, a.iscroll, a.qwery, a.mobile), a.api = function(i, o, a, r, l) {
        var c = a.layerList, d = {}, h=!1;
        _ate.ed.addEventListener("addthis.layers.refresh", function() {
            h=!1
        });
        var u = function(r, m) {
            var p, f;
            if (arguments.length) {
                if (o.isString(r) && o.isPlainObject(m)&&!o.isEmptyObject(m))
                    return void l.thirdPartyWidget.apply(this, arguments);
                r = r || {}, r.cfs || h || (o.each(r, function(e, t) {
                    t.audienceRules && (p = a.pcoToLayerName[e], o.extend(t, o.conversions.applyAudienceRules(p, t)))
                }), f = "//m.addthis.com/live/red_lojson/300vi.png", _ate.cookie.visit.isNew() && _ate.track.dropPixel(f, {
                    sendVisitID: !0,
                    sendViewID: !0,
                    sendDomainPort: !0,
                    sendPubID: !0,
                    params: {
                        cad: o.conversions.getSelectedRuleMap()
                    }
                }), h=!0);
                var g = {}, v = {}, b = {
                    _init: function(e, t) {
                        u.initialized || this._globalEventHandlers();
                        var i = b._setDefaultOptions(e);
                        b._createLayers(e, i, function(e) {
                            o.isFunction(t) && t(i, e)
                        })
                    },
                    _globalEventHandlers: function() {
                        return o.bindEvents(a.globalEvents || {}), o.mobile() || o.bindEvents(a.desktopEvents || {}), this
                    },
                    _setDefaultOptions: function(e) {
                        var t = o.cloneObject(a.defaultOptions), i = e.responsive, r = function(e, t) {
                            o.isPlainObject(e) && (o.isPlainObject(t) ? o.extend(e, t) : t===!1 ? e.responsive = t : (o.isString(t) || o.isNumber(t)) && o.extend(e, {
                                responsive: {
                                    maxWidth: t
                                }
                            }))
                        };
                        return t.domain = s.location.host, o.mobile() || i === n || r(t, i), o.each(e, function(e, t) {
                            r(t, t.responsive)
                        }), o.each(t, function(i, n) {
                            var s = n;
                            (e[i] || "" === e[i]) && (o.isPlainObject(s) ? o.extend(s, e[i]) : t[i] = e[i])
                        }), t
                    },
                    _createLayers: function(t, i, s) {
                        var r, l, d = o.mobile() ? "mobile": "desktop", h = function() {
                            var e = {};
                            return o.each(c, function(t, i) {
                                "addthis" !== t && (e[t] = i)
                            }), e
                        }(), m = [];
                        if (r = t.showMobileOnDesktop===!0 ? a.getAllLayers() : a.layers(), a.language = ((e._atw || {}).conf || {}).ui_language || _ate.jlng() || "en", "en" !== a.language && o.each(a.translationIds, function(e, t) {
                            o.each(t, function(t, i) {
                                a.defaultOptions[e] && a.defaultOptions[e][t] && (a.defaultOptions[e][t] = _ate._t(a.defaultOptions[e][t], i))
                            })
                        }), o.each(r, function(e) {
                            t[e] && (a.enabledLayers[e]=!0, layersSpecified=!0, l = r[e].split(","), o.each(l, function(e, i) {
                                t[i]!==!1 && ((!_ate.isProUser || _ate.isProUser && "mobile" !== i) && c.addthis[i] && c.addthis[i].plugin!==!0 || c.addthis[i] && c.addthis[i].plugin===!0 && t[i] !== n) && (g[i]=!0)
                            }))
                        }), !_ate.isProUser && (o.isEmptyObject(t) && t.mobile === n || t.share !== n && t.share!==!1 || t.follow !== n && t.follow!==!1) && t.responsive!==!1 && "desktop" === d&&!_ate.bro.ie6&&!_ate.bro.ie7&&!o.isIEQuirksMode()) {
                            var p = t.mobile ||!0;
                            g = o.extend(g, {
                                mobile: !0
                            }), t = o.extend(t, {
                                mobile: p
                            })
                        }
                        o.isPlainObject(h) && (g = o.extend(o.cloneObject(h), g)), o.each(g, function(e) {
                            var s, a, r, l = e, p = c[l];
                            h[l] ? (u[l] = u[l] || {}, t[l] = t[l] || {}, o.each(p, function(e, c) {
                                a = c, s = a.basename, r = a.eventnamespace, t[l][s] !== n && t[l][s]!==!1 && (u[l][s] && a.multipleCalls!==!0 || (t[l] && t[l][s] ? t[l][s][d]!==!1 && (m.push(s), o.isArray(t[l][s]) ? o.each(t[l][s], function(e) {
                                    o.trigger("addthis.layers" + r, {
                                        options: e,
                                        extendedOptions: b._setDefaultOptions(e)
                                    })
                                }) : o.trigger("addthis.layers" + r, {
                                    options: t[l][s],
                                    extendedOptions: i
                                })) : t[l][s]!==!1 && (m.push(s), o.trigger("addthis.layers" + r, {
                                    options: t[l][s],
                                    extendedOptions: i
                                })), u[l][s]=!0))
                            })) : ((!u[e] || c.addthis && c.addthis[e] && c.addthis[e].multipleCalls===!0) && (t[e] ? t[e][d]!==!1 && (o.isArray(t[e]) ? o.each(t[e], function(t, i) {
                                m.push(e), o.trigger("addthis.layers." + e, {
                                    name: e,
                                    props: c.addthis[e],
                                    options: i,
                                    extendedOptions: b._setDefaultOptions(i)
                                })
                            }) : (m.push(e), o.trigger("addthis.layers." + e, {
                                name: e,
                                props: c.addthis[e],
                                options: t[e],
                                extendedOptions: i
                            }))) : t[e]!==!1 && (m.push(e), o.trigger("addthis.layers." + e, {
                                name: e,
                                props: c.addthis[e],
                                options: t[e],
                                extendedOptions: i
                            }))), u[e]=!0)
                        }), o.isFunction(s) && s(m)
                    },
                    destroy: function(n) {
                        if (!o.isUndefined(a.active_layers)) {
                            var r, l, c, d, m, p = o.isString(n), f = (n || "").split("."), g = f.length > 1 ? f[0]: "addthis", v = f.length > 1 ? f[1]: n, b = a.active_layers;
                            return !p || b[g] && b[g][v] ? (h=!1, r = p ? [b[g][v]] : b[g], m = p ? r.inlineClass ? i("." + r.inlineClass) : _ate.util.parent(r[0].element, ".addthis-smartlayers") === s ? [r[0].element] : [_ate.util.parent(r[0].element, ".addthis-smartlayers")] : i(".addthis-smartlayers"), o.each(r, function(e, i) {
                                o.isPlainObject(i)&&!o.isEmptyObject(i) && (l = i.basename, c = i.element, d = o.extend(i.events || {}, i.customEvents || {}), o.trigger(g + "." + l + ".destroy", t, {}), o.bindEvents.call(i, d, "remove"), u[l]=!1, i.rendered=!1, o.removeElement(i.openControl), o.removeElement(i.placeholder))
                            }), o.each(m, function(e, t) {
                                c = t, o.removeElement(c)
                            }), p ? (a.active_layers[g] = a.active_layers[g] || {}, a.active_layers[g][v] && (delete a.active_layers[g][v], delete e.addthis.layers.active_layers[g][v]), (o.isEmptyObject(a.active_layers) ||!a.active_layers) && (a.active_layers = {}, e.addthis.layers.active_layers = {}, u.initialized=!1, a.initialized=!1, a.welcomeBarAndMobile.alreadyCompleted=!1), "addthis" === g && "welcome" === v && (a.welcomeBarAndMobile.alreadyCompleted=!1)) : (a.active_layers = {}, e.addthis.layers.active_layers = {}, u.initialized=!1, a.initialized=!1, a.welcomeBarAndMobile.alreadyCompleted=!1), this) : "not an active layer"
                        }
                    }
                };
                if (d = o.publicApi(b), r.pii===!0 && a.receivedConfigFromServer)
                    return o.each(a.pageConfigs, function(e, t) {
                        o.each(t, function(t, i) {
                            var n = a.layerList.addthis;
                            n[t] && n[t].inlineClass && (v[t] = i, a.pageConfigs.splice(e, 1))
                        })
                    }), void(o.keys(v) > 0 && (v = o.extend(v, {
                        pi: !0
                    }), addthis.layers(v)));
                if (!_ate.ipc || r.pi) {
                    if (o.isFunction(r))
                        return void r.call(d, d);
                    r = o.isPlainObject(r)&&!o.isEmptyObject(r) ? r : {}, b._init(r, function(e, t) {
                        var i = t.length, n = 0, s = 0;
                        return 0 === i ? (o.isFunction(m) && m.call(d, d), o.trigger("addthis.layers.loaded"), o.trigger("addthis.layers.rendered")) : (_ate.ed.addEventListener("addthis.layer.loaded", function() {
                            s += 1, s === i && o.trigger("addthis.layers.loaded")
                        }), _ate.ed.addEventListener("addthis.layer.rendered", function() {
                            n += 1, n === i && (o.isFunction(m) && m.call(d, d), o.trigger("addthis.layers.rendered"))
                        }), u.initialized=!0, u.onpage=!0), d
                    })
                } else if (r.cfs || o.isFunction(m) && m.cfs===!0) {
                    if (r._default && r._default.widgets) {
                        var w = {};
                        o.each(r._default.widgets, function(e, t) {
                            _ate.track.apc(e);
                            var i = a.pcoMap[e];
                            if (i)
                                if (w[i]) {
                                    if (!o.isArray(w[i])) {
                                        var n = w[i];
                                        w[i] = [], w[i].push(n)
                                    }
                                    w[i].push(t)
                                } else 
                                    w[i] = t
                            }), w.pi=!0, addthis.layers(w, m)
                    } else {
                        _ate.ipc=!1;
                        var y = a.pageConfigs;
                        o.each(y, function(e, t) {
                            addthis.layers(t)
                        }), a.pageConfigs = []
                    }
                    a.receivedConfigFromServer=!0
                } else 
                    a.pageConfigs.push(r)
            }
        };
        return u.lastViewRegistered = (new Date).getTime(), u.refresh = function() {
            var e, t = _ate.track.gtf(), i = t.children[0], n = (new Date).getTime();
            if (i || _ate.log.error("Could not find the sh frame!"), window.addthis_share = window.addthis_share || {}, window.addthis_share.url = window.location.href, window.addthis_share.title = document.title, _ate.du = _ate.truncateURL(window.location.href), n - u.lastViewRegistered > 500 && i) {
                u.lastViewRegistered = n, e = i.src, t.removeChild(i), _ate.sid = _ate.util.cuid();
                var s = _ate.track.ctf();
                s.src = e.replace(/sid\=[a-zA-Z0-9]+/, "sid=" + _ate.sid), _ate.track.gtf().appendChild(s)
            }
            _ate.ed.fire("addthis.layers.refresh", null, null, !0)
        }, u
    }(a.qwery, a.utils, a.common, a.layerFactory, a.setup), a.conversions = function(t) {
        var i = {}, n = {
            nonStickyConditions: ["pages"],
            applyAudienceRules: function(e, i) {
                if (!i.audienceRules || 0 === i.audienceRules.length)
                    return i;
                var s = t.extend({}, i), o = [], a = this.extractDefaults(s.audienceRules), r = this.extendAdvancedOptions(a.defaults), l = this.extendAdvancedOptions(a.newAudienceRules), c = _ate.cookie.visit.getAudienceRule(e);
                if (s.ruleSuccess=!0, _ate.cookie.visit.isNew() ||!c) {
                    o = n.getApplicableRules(l);
                    var d = n.getApplicableRules(r);
                    o.length > 0 ? this.applyNewVisitAudienceRules(s, o, e) : d.length > 0 ? this.applyNewVisitAudienceRules(s, d) : s.ruleSuccess=!1
                } else 
                    o = n.getApplicableNonStickyRules(l), t.each(l, function(e, t) {
                        return t.id === c ? (o.push(t), !1) : void 0
                    }), o.length > 0 ? this.applyNewVisitAudienceRules(s, o) : s.ruleSuccess=!1;
                return s
            },
            extendAdvancedOptions: function(e) {
                var i = t.extend([], e);
                return t.each(i, function(e, i) {
                    i.conditions = i.conditions || {}, i.advancedOptions && (i.conditions = t.extend({}, i.conditions, i.advancedOptions))
                }), i
            },
            extractDefaults: function(e) {
                var i = [], n = [], s = this;
                return t.each(e, function(e, t) {
                    s.isDefault(t) ? "false" !== String(t.enabled) && i.push(t) : n.push(t)
                }), {
                    defaults: i,
                    newAudienceRules: n
                }
            },
            isDefault: function(e) {
                return "true" === String(e["default"])
            },
            applyNewVisitAudienceRules: function(e, n, s) {
                var o = this.chooseRandomRule(e, n);
                this.isNonSticky(o) || this.isDefault(o) || _ate.cookie.visit.addAudienceRule(s, o.id), i[s] = o.id, t.extend(e, o.widgetConfig)
            },
            applyCachedAndNonStickyRules: function(e, i) {
                var n = this.chooseRandomRule(e, i);
                t.extend(e, n.widgetConfig)
            },
            applyDefaults: function(e, t) {
                this.applyCachedAndNonStickyRules(e, t)
            },
            chooseRandomRule: function(e, t) {
                var i = Math.floor(Math.random() * t.length), n = t[i];
                return e.chosenRuleId = n.id, n
            },
            isRuleApplicable: function(e) {
                var i=!0, n = this;
                return "false" === String(e.enabled)?!1 : (t.each(e.conditions, function(e, t) {
                    var o = s[e];
                    return o && (i = o.apply(n, [t]), i===!1)?!1 : void 0
                }), i)
            },
            getSelectedRuleMap: function() {
                return t.cloneObject(i)
            },
            getApplicableRules: function(e, i) {
                var n = this, s = [];
                return t.each(e, function(e, t) {
                    (!i || n.isNonSticky(t)) && n.isRuleApplicable(t) && s.push(t)
                }), s
            },
            getApplicableNonStickyRules: function(e) {
                return this.getApplicableRules(e, !0)
            },
            isNonSticky: function(e) {
                var i=!1, n = this;
                return t.each(e.conditions, function(e, s) {
                    return t.indexOf.call(n.nonStickyConditions, e)>-1 ? "pages" === e && n.pagesIsEssentiallyEmpty(s)?!1 : (i=!0, !1) : void 0
                }), i
            },
            pagesIsEssentiallyEmpty: function(e) {
                return 0 === e.length || "string" == typeof e[0] && 0 === e[0].length
            }
        }, s = {
            allVisitors: function() {
                return !0
            },
            "new": function(e) {
                return String(e) === String(!addthis.user.isReturning())
            },
            socialSource: function(e) {
                var t = e.join();
                return addthis.session.isSocial(t)
            },
            referringDomain: function(e) {
                var i = e.join();
                return t.decisionEngine.match.referrer(i)
            },
            interest: function(e) {
                var i, n = addthis.user.interests(), s=!1;
                return n.length > 0 && t.each(e, function(e, o) {
                    return i = parseInt(t.trim(o)), n.indexOf(i)>-1 ? (s=!0, !1) : void 0
                }), s
            },
            campaignMedium: function(e) {
                var i = e.join();
                return t.decisionEngine.match.utm_medium(i)
            },
            campaignName: function(e) {
                var i = e.join();
                return t.decisionEngine.match.utm_campaign(i)
            },
            devices: function(e) {
                var i=!1;
                return t.each(e, function(e, n) {
                    return t[n] && t[n]() ? (i=!0, !1) : void 0
                }), i
            },
            pages: function(i) {
                var n=!1;
                if (this.pagesIsEssentiallyEmpty(i))
                    n=!0;
                else {
                    var s, o, a = t.stripProtocol(e.location.href), r = t.stripHashFromPath(a);
                    t.each(i, function(e, i) {
                        return s = t.stripProtocol(i), o = t.stripHashFromPath(s), - 1 === o.indexOf("?") && r.indexOf("?")>-1 && (r = r.split("?").shift()), t.stringMatchesWithWildcards(r, o) ? (n=!0, !1) : void 0
                    })
                }
                return n
            }
        };
        return n
    }(a.utils), a.load = function(i, n, a, r) {
        var l = a;
        n.conversions = r, _adr.append(function() {
            if (s = document, o = s.body, !(e.JSON && e.JSON.stringify || l.onpage)) {
                var a = new _ate.resource.Resource("json2", _atr + "static/r07/json2.js");
                a.load()
            }
            t && (t.user.ready(function() {
                t.user.getPreferredServices(function(e) {
                    if (i.preferredServices = function() {
                        var t, i = [];
                        return n.each(e, function(e, n) {
                            t = n, _ate.services.exists(t) && i.push(t)
                        }), i.push("compact"), i
                    }(), l.onpage)
                        addthis.layers = l, n.trigger("addthis.layers.ready", t, {
                            pco: i.pco
                        });
                    else {
                        var s = new _ate.resource.Resource("layerscss", _atc.rsrcs.layerscss);
                        s.load(), n.isCSSReady(function() {
                            addthis.layers = l, n.trigger("addthis.layers.ready", t, {
                                pco: i.pco
                            })
                        })
                    }
                    l.utils = n
                }), t.bar = {
                    pco: "wmb-1.0",
                    initialize: function(e, i) {
                        var s, o, a = t.layers.active_layers && t.layers.active_layers.addthis && t.layers.active_layers.addthis.welcome;
                        a?!e || n.isString(e) ? _ate.ed.fire("addthis.welcome.show", {}, {}) : addthis.layers(function(t) {
                            s = a.options, o = _ate.util.extend(s, e), "render" === e || "render" === i ? a.updateExisting(o) : (t.destroy("welcome"), addthis.layers({
                                welcome: o,
                                pi: !0
                            }))
                        }) : addthis.layers({
                            welcome: e,
                            pi: !0
                        })
                    },
                    show: function(e) {
                        t.bar.initialize(e, "render")
                    },
                    render: function(e) {
                        t.bar.initialize(e, "render")
                    },
                    hide: function() {
                        _ate.ed.fire("addthis.welcome.hide", {}, {})
                    }
                }, _ate.ed.fire("addthis.bar.ready", t, {
                    pco: addthis.bar.pco
                })
            }), addthis.layers.ost = 1)
        })
    }(a.common, a.utils, a.api, a.conversions)
}(window, addthis, _ate.util);
